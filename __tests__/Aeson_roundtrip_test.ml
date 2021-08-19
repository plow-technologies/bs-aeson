open Jest
open Expect

let resultMap f r = (
  match r with
  | Belt.Result.Ok(a) -> Belt.Result.Ok (f a)
  | Belt.Result.Error(b) -> Belt.Result.Error (b)
)

let jsonRoundtripSpec decode encode json =
  let rDecoded = decode json in
  expect (resultMap encode rDecoded) |> toEqual (Belt.Result.Ok json)

type pairKey =
  | PairKey of (int * string)

module PairKeyComparable =
  Belt.Id.MakeComparable(
    struct
      type t = pairKey
      let cmp a b =
        (match (a, b) with
         | (PairKey a, PairKey b) -> compare a b : int)
    end
  )

type pairKeyMap =
  { pairKeyMap : (pairKey, string, PairKeyComparable.identity) Belt.Map.t
  }

let encodePairKey x =
  match x with
  | PairKey y0 ->
     Aeson.Encode.pair Aeson.Encode.int Aeson.Encode.string y0

let decodePairKey json =
  match Aeson.Decode.pair Aeson.Decode.int Aeson.Decode.string json with
  | v -> Belt.Result.Ok (PairKey v)
  | exception Aeson.Decode.DecodeError msg -> Belt.Result.Error ("decodePairKey: " ^ msg)

let encodePairKeyMap (x: pairKeyMap) =
 Aeson.Encode.object_
   [ ( "pairKeyMap", Aeson.Encode.beltMap encodePairKey Aeson.Encode.string x.pairKeyMap )
   ]

let decodePairKeyMap json =
  match Aeson.Decode.
    { pairKeyMap = field "pairKeyMap" (beltMap (fun a -> unwrapResult (decodePairKey a)) Aeson.Decode.string ~id:(module PairKeyComparable)) json 
    }
  with
  | v -> Belt.Result.Ok v
  | exception Aeson.Decode.DecodeError msg -> Belt.Result.Error ("decodePairKey: " ^ msg)

type newtype =
  | Newtype of string

module NewtypeKeyComparable =
  Belt.Id.MakeComparable(
    struct
      type t = newtype
      let cmp a b =
        (match (a, b) with
         | (Newtype a, Newtype b) -> compare a b : int)
    end
  )

type newtypeKeyMap =
  { newtypeKeyMap : (newtype, string, NewtypeKeyComparable.identity) Belt.Map.t
  }

let encodeNewtypeKeyMap (x: newtypeKeyMap) =  
  Aeson.Encode.object_
    [ ( "newtypeKeyMap", Aeson.Encode.beltMapString Aeson.Encode.string (Belt.Map.String.fromArray (Array.map (fun (x,y) -> ((match x with | Newtype str -> str, y))) (Belt.Map.toArray x.newtypeKeyMap))) )
    ]

let decodeNewtypeKeyMap json =
  match Aeson.Decode.
    { newtypeKeyMap = Belt.Map.fromArray ~id:(module NewtypeKeyComparable) (Array.map (fun (x, y) -> ((Newtype x, y))) (Belt.Map.String.toArray (field "newtypeKeyMap" (Aeson.Decode.beltMapString Aeson.Decode.string) json)))
    }
  with
  | v -> Belt.Result.Ok v
  | exception Aeson.Decode.DecodeError msg -> Belt.Result.Error ("decodeNewtypeKeyMap: " ^ msg)

type newtypeInt =
  | NewtypeInt of int

module NewtypeIntKeyComparable =
  Belt.Id.MakeComparable(
    struct
      type t = newtypeInt
      let cmp a b =
        (match (a, b) with
         | (NewtypeInt a, NewtypeInt b) -> compare a b : int)
    end
  )

type newtypeIntKeyMap =
  { newtypeIntKeyMap : (newtypeInt, string, NewtypeIntKeyComparable.identity) Belt.Map.t
  }

let encodeNewtypeIntKeyMap (x: newtypeIntKeyMap) =  
  Aeson.Encode.object_
    [ ( "newtypeIntKeyMap", Aeson.Encode.beltMapString Aeson.Encode.string (Belt.Map.String.fromArray (Array.map (fun (x,y) -> ((match x with | NewtypeInt str -> string_of_int str, y))) (Belt.Map.toArray x.newtypeIntKeyMap))) )
    ]

let decodeNewtypeIntKeyMap json =
  match Aeson.Decode.
    { newtypeIntKeyMap = Belt.Map.fromArray ~id:(module NewtypeIntKeyComparable) (Array.map (fun (x, y) -> ((NewtypeInt (int_of_string x), y))) (Belt.Map.String.toArray (field "newtypeIntKeyMap" (Aeson.Decode.beltMapString Aeson.Decode.string) json)))
    }
  with
  | v -> Belt.Result.Ok v
  | exception Aeson.Decode.DecodeError msg -> Belt.Result.Error ("decodeNewtypeIntKeyMap: " ^ msg)

let () =

describe "Belt.Map.String.t" (fun () ->
  test "string key map" (fun () ->
      jsonRoundtripSpec
        (Aeson.Decode.wrapResult (Aeson.Decode.beltMapString Aeson.Decode.string))
        (Aeson.Encode.beltMapString Aeson.Encode.string)
        (Js.Json.parseExn "{\"a\":\"A\",\"b\":\"B\"}")
    )
);

describe "Belt.Map.Int.t" (fun () ->
  test "int key map" (fun () ->
      jsonRoundtripSpec
        (Aeson.Decode.wrapResult (Aeson.Decode.beltMapInt Aeson.Decode.string))
        (Aeson.Encode.beltMapInt Aeson.Encode.string)
        (Js.Json.parseExn "{\"1\":\"A\",\"2\":\"B\"}")
    )
);

describe "(pairKey, string, PairKeyComparable.identity) Belt.Map.t" (fun () ->
  test "custom key map" (fun () ->
      jsonRoundtripSpec
        decodePairKeyMap
        encodePairKeyMap
        (Js.Json.parseExn "{\"pairKeyMap\":[[[0,\"a\"],\"A\"],[[1,\"b\"],\"B\"]]}")
    )
);

describe "newtype" (fun () ->
  test "newtype string wrapper key map" (fun () ->
      jsonRoundtripSpec
        decodeNewtypeKeyMap
        encodeNewtypeKeyMap
        (Js.Json.parseExn "{\"newtypeKeyMap\":{\"a\":\"A\",\"b\":\"B\"}}")
    )
);

describe "newtypeInt" (fun () ->
  test "newtype int wrapper key map" (fun () ->
      jsonRoundtripSpec
        decodeNewtypeIntKeyMap
        encodeNewtypeIntKeyMap
        (Js.Json.parseExn "{\"newtypeIntKeyMap\":{\"1\":\"A\",\"2\":\"B\"}}")
    )
);
