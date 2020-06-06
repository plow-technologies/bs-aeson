module Decode = Aeson_decode
module Encode = Aeson_encode
module Compatibility = Aeson_compatibility

module type DecodeUnsafe = sig
  type t
  val decodeUnsafe : Js.Json.t -> t
end

module type DecodeSafe = sig
  type t
  val decode : Js.Json.t -> (t, string) Belt.Result.t
  include DecodeUnsafe with type t := t
end

module type Encode = sig
  type t
  val encode : t -> Js.Json.t
end

module type EncodeAndDecode = sig
  include DecodeSafe
  include Encode with type t := t
end

module Bool : EncodeAndDecode with type t = bool = struct
  type t = bool

  let decodeUnsafe = Aeson_decode.bool
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Bool.decode: " ^ err)
    
  let encode = Aeson_encode.bool
end

module Bigint : EncodeAndDecode with type t = Bigint.t = struct
  type t = Bigint.t

  let decodeUnsafe = Aeson_decode.bigint
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Bigint.decode: " ^ err)
    
  let encode = Aeson_encode.bigint
end
                                                 
module Float : EncodeAndDecode with type t = float = struct
  type t = float

  let decodeUnsafe = Aeson_decode.float
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Float.decode: " ^ err)
    
  let encode = Aeson_encode.float
end

module Int : EncodeAndDecode with type t = int = struct
  type t = int

  let decodeUnsafe = Aeson_decode.int
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Int.decode: " ^ err)
    
  let encode = Aeson_encode.int
end

module Int32 : EncodeAndDecode with type t = int32 = struct
  type t = int32

  let decodeUnsafe = Aeson_decode.int32
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Int32.decode: " ^ err)
    
  let encode = Aeson_encode.int32
end

module Nativeint : EncodeAndDecode with type t = nativeint = struct
  type t = nativeint

  let decodeUnsafe = Aeson_decode.nativeint
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Nativeint.decode: " ^ err)
    
  let encode = Aeson_encode.nativeint
end

module UInt8 : EncodeAndDecode with type t = U.UInt8.t = struct
  type t = U.UInt8.t

  let decodeUnsafe = Aeson_decode.uint8
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.UInt8.decode: " ^ err)
    
  let encode = Aeson_encode.uint8
end

module UInt16 : EncodeAndDecode with type t = U.UInt16.t = struct
  type t = U.UInt16.t

  let decodeUnsafe = Aeson_decode.uint16
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.UInt16.decode: " ^ err)
    
  let encode = Aeson_encode.uint16
end

module UInt32 : EncodeAndDecode with type t = U.UInt32.t = struct
  type t = U.UInt32.t

  let decodeUnsafe = Aeson_decode.uint32
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.UInt32.decode: " ^ err)
    
  let encode = Aeson_encode.uint32
end

module UInt64 : EncodeAndDecode with type t = U.UInt64.t = struct
  type t = U.UInt64.t

  let decodeUnsafe = Aeson_decode.uint64
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.UInt64.decode: " ^ err)
    
  let encode = Aeson_encode.uint64
end
                                                         
module String : EncodeAndDecode with type t = string = struct
  type t = string

  let decodeUnsafe = Aeson_decode.string
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.String.decode: " ^ err)
    
  let encode = Aeson_encode.string
end

module Date : EncodeAndDecode with type t = Js_date.t = struct
  type t = Js_date.t

  let decodeUnsafe = Aeson_decode.date
  let decode = fun json ->
    match (decodeUnsafe json) with
    | v -> Belt.Result.Ok v
    | exception Aeson_decode.DecodeError err -> Belt.Result.Error ("Aeson.Date.decode: " ^ err)
    
  let encode = Aeson_encode.date
end

