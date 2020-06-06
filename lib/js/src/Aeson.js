'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Aeson_decode = require("./Aeson_decode.js");
var Aeson_encode = require("./Aeson_encode.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function decode(json) {
  var v;
  try {
    v = Aeson_decode.bool(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.Bool.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

function encode(prim) {
  return prim;
}

var Bool = {
  decode: decode,
  decodeUnsafe: Aeson_decode.bool,
  encode: encode
};

function decode$1(json) {
  var v;
  try {
    v = Aeson_decode.bigint(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.Bigint.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

var Bigint = {
  decode: decode$1,
  decodeUnsafe: Aeson_decode.bigint,
  encode: Aeson_encode.bigint
};

function decode$2(json) {
  var v;
  try {
    v = Aeson_decode.$$float(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.Float.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

function encode$1(prim) {
  return prim;
}

var Float = {
  decode: decode$2,
  decodeUnsafe: Aeson_decode.$$float,
  encode: encode$1
};

function decode$3(json) {
  var v;
  try {
    v = Aeson_decode.$$int(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.Int.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

function encode$2(prim) {
  return prim;
}

var Int = {
  decode: decode$3,
  decodeUnsafe: Aeson_decode.$$int,
  encode: encode$2
};

function decode$4(json) {
  var v;
  try {
    v = Aeson_decode.int32(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.Int32.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

function encode$3(prim) {
  return prim;
}

var Int32 = {
  decode: decode$4,
  decodeUnsafe: Aeson_decode.int32,
  encode: encode$3
};

function decode$5(json) {
  var v;
  try {
    v = Aeson_decode.nativeint(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.Nativeint.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

function encode$4(prim) {
  return prim;
}

var Nativeint = {
  decode: decode$5,
  decodeUnsafe: Aeson_decode.nativeint,
  encode: encode$4
};

function decode$6(json) {
  var v;
  try {
    v = Aeson_decode.uint8(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.UInt8.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

var UInt8 = {
  decode: decode$6,
  decodeUnsafe: Aeson_decode.uint8,
  encode: Aeson_encode.uint8
};

function decode$7(json) {
  var v;
  try {
    v = Aeson_decode.uint16(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.UInt16.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

var UInt16 = {
  decode: decode$7,
  decodeUnsafe: Aeson_decode.uint16,
  encode: Aeson_encode.uint16
};

function decode$8(json) {
  var v;
  try {
    v = Aeson_decode.uint32(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.UInt32.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

var UInt32 = {
  decode: decode$8,
  decodeUnsafe: Aeson_decode.uint32,
  encode: Aeson_encode.uint32
};

function decode$9(json) {
  var v;
  try {
    v = Aeson_decode.uint64(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.UInt64.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

var UInt64 = {
  decode: decode$9,
  decodeUnsafe: Aeson_decode.uint64,
  encode: Aeson_encode.uint64
};

function decode$10(json) {
  var v;
  try {
    v = Aeson_decode.string(json);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Aeson_decode.DecodeError) {
      return /* Error */Block.__(1, ["Aeson.String.decode: " + exn[1]]);
    } else {
      throw exn;
    }
  }
  return /* Ok */Block.__(0, [v]);
}

function encode$5(prim) {
  return prim;
}

var $$String = {
  decode: decode$10,
  decodeUnsafe: Aeson_decode.string,
  encode: encode$5
};

var Decode = /* alias */0;

var Encode = /* alias */0;

var Compatibility = /* alias */0;

exports.Decode = Decode;
exports.Encode = Encode;
exports.Compatibility = Compatibility;
exports.Bool = Bool;
exports.Bigint = Bigint;
exports.Float = Float;
exports.Int = Int;
exports.Int32 = Int32;
exports.Nativeint = Nativeint;
exports.UInt8 = UInt8;
exports.UInt16 = UInt16;
exports.UInt32 = UInt32;
exports.UInt64 = UInt64;
exports.$$String = $$String;
/* Aeson_decode Not a pure module */
