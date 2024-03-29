'use strict';

var U = require("bs-zarith/lib/js/src/U.js");
var List = require("rescript/lib/js/list.js");
var $$Array = require("rescript/lib/js/array.js");
var Curry = require("rescript/lib/js/curry.js");
var Int64 = require("rescript/lib/js/int64.js");
var Bigint = require("bs-zarith/lib/js/src/Bigint.js");
var Js_dict = require("rescript/lib/js/js_dict.js");
var Js_json = require("rescript/lib/js/js_json.js");
var Belt_Map = require("rescript/lib/js/belt_Map.js");
var Js_string = require("rescript/lib/js/js_string.js");
var Belt_MapInt = require("rescript/lib/js/belt_MapInt.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Belt_MapString = require("rescript/lib/js/belt_MapString.js");

var int64_to_string = Int64.to_string;

var bigint = Bigint.to_string;

function uint8(x) {
  return U.UInt8.toInt(x);
}

function uint16(x) {
  return U.UInt16.toInt(x);
}

function uint32(x) {
  return U.UInt32.toInt(x);
}

function uint64(x) {
  return Curry._1(U.UInt64.toString, x);
}

function nullable(encode, v) {
  if (v !== undefined) {
    return Curry._1(encode, Caml_option.valFromOption(v));
  } else {
    return null;
  }
}

function withDefault(d, encode, v) {
  if (v !== undefined) {
    return Curry._1(encode, Caml_option.valFromOption(v));
  } else {
    return d;
  }
}

function optional(encode, optionalValue) {
  if (optionalValue !== undefined) {
    return Curry._1(encode, Caml_option.valFromOption(optionalValue));
  } else {
    return null;
  }
}

function optionalField(fieldName, encode, optionalValue) {
  if (optionalValue !== undefined) {
    return {
            hd: [
              fieldName,
              Curry._1(encode, Caml_option.valFromOption(optionalValue))
            ],
            tl: /* [] */0
          };
  } else {
    return /* [] */0;
  }
}

function date(d) {
  return Js_string.replace(".000Z", "Z", d.toISOString());
}

var object_ = Js_dict.fromList;

function list(encode, l) {
  return $$Array.of_list(List.map(encode, l));
}

function pair(encodeT0, encodeT1, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1])
        ];
}

function beltMap(encodeKey, encodeValue, obj) {
  var l = $$Array.to_list(Belt_Map.toArray(obj));
  var encode = function (param) {
    return pair(encodeKey, encodeValue, param);
  };
  return $$Array.of_list(List.map(encode, l));
}

function beltMap1(encodeKey, encodeValue, obj) {
  var xs = Belt_Map.toArray(obj);
  var encodeKey1 = function (key) {
    var str = Js_json.classify(Curry._1(encodeKey, key));
    if (typeof str === "number" || str.TAG !== /* JSONString */0) {
      return JSON.stringify(Curry._1(encodeKey, key));
    } else {
      return str._0;
    }
  };
  var xs$1 = $$Array.map((function (param) {
          return [
                  encodeKey1(param[0]),
                  Curry._1(encodeValue, param[1])
                ];
        }), xs);
  return Js_dict.fromList($$Array.to_list(xs$1));
}

function beltMapInt(encodeValue, obj) {
  return Js_dict.fromList(List.map((function (param) {
                    return [
                            String(param[0]),
                            Curry._1(encodeValue, param[1])
                          ];
                  }), $$Array.to_list(Belt_MapInt.toArray(obj))));
}

function beltMapString(encodeValue, obj) {
  return Js_dict.fromList(List.map((function (param) {
                    return [
                            param[0],
                            Curry._1(encodeValue, param[1])
                          ];
                  }), $$Array.to_list(Belt_MapString.toArray(obj))));
}

function tuple3(encodeT0, encodeT1, encodeT2, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2])
        ];
}

function tuple4(encodeT0, encodeT1, encodeT2, encodeT3, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3])
        ];
}

function tuple5(encodeT0, encodeT1, encodeT2, encodeT3, encodeT4, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3]),
          Curry._1(encodeT4, tuple[4])
        ];
}

function tuple6(encodeT0, encodeT1, encodeT2, encodeT3, encodeT4, encodeT5, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3]),
          Curry._1(encodeT4, tuple[4]),
          Curry._1(encodeT5, tuple[5])
        ];
}

function tuple7(encodeT0, encodeT1, encodeT2, encodeT3, encodeT4, encodeT5, encodeT6, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3]),
          Curry._1(encodeT4, tuple[4]),
          Curry._1(encodeT5, tuple[5]),
          Curry._1(encodeT6, tuple[6])
        ];
}

function tuple8(encodeT0, encodeT1, encodeT2, encodeT3, encodeT4, encodeT5, encodeT6, encodeT7, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3]),
          Curry._1(encodeT4, tuple[4]),
          Curry._1(encodeT5, tuple[5]),
          Curry._1(encodeT6, tuple[6]),
          Curry._1(encodeT7, tuple[7])
        ];
}

function tuple9(encodeT0, encodeT1, encodeT2, encodeT3, encodeT4, encodeT5, encodeT6, encodeT7, encodeT8, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3]),
          Curry._1(encodeT4, tuple[4]),
          Curry._1(encodeT5, tuple[5]),
          Curry._1(encodeT6, tuple[6]),
          Curry._1(encodeT7, tuple[7]),
          Curry._1(encodeT8, tuple[8])
        ];
}

function tuple10(encodeT0, encodeT1, encodeT2, encodeT3, encodeT4, encodeT5, encodeT6, encodeT7, encodeT8, encodeT9, tuple) {
  return [
          Curry._1(encodeT0, tuple[0]),
          Curry._1(encodeT1, tuple[1]),
          Curry._1(encodeT2, tuple[2]),
          Curry._1(encodeT3, tuple[3]),
          Curry._1(encodeT4, tuple[4]),
          Curry._1(encodeT5, tuple[5]),
          Curry._1(encodeT6, tuple[6]),
          Curry._1(encodeT7, tuple[7]),
          Curry._1(encodeT8, tuple[8]),
          Curry._1(encodeT9, tuple[9])
        ];
}

function result(encodeA, encodeB, e) {
  if (e.TAG === /* Ok */0) {
    return Js_dict.fromList({
                hd: [
                  "Ok",
                  Curry._1(encodeA, e._0)
                ],
                tl: /* [] */0
              });
  } else {
    return Js_dict.fromList({
                hd: [
                  "Error",
                  Curry._1(encodeB, e._0)
                ],
                tl: /* [] */0
              });
  }
}

function either(encodeL, encodeR, e) {
  if (e.TAG === /* Left */0) {
    return Js_dict.fromList({
                hd: [
                  "Left",
                  Curry._1(encodeL, e._0)
                ],
                tl: /* [] */0
              });
  } else {
    return Js_dict.fromList({
                hd: [
                  "Right",
                  Curry._1(encodeR, e._0)
                ],
                tl: /* [] */0
              });
  }
}

function singleEnumerator(_x) {
  return [];
}

var tuple2 = pair;

exports.int64_to_string = int64_to_string;
exports.bigint = bigint;
exports.uint8 = uint8;
exports.uint16 = uint16;
exports.uint32 = uint32;
exports.uint64 = uint64;
exports.nullable = nullable;
exports.withDefault = withDefault;
exports.object_ = object_;
exports.optional = optional;
exports.optionalField = optionalField;
exports.date = date;
exports.beltMap = beltMap;
exports.beltMap1 = beltMap1;
exports.beltMapInt = beltMapInt;
exports.beltMapString = beltMapString;
exports.list = list;
exports.pair = pair;
exports.tuple2 = tuple2;
exports.tuple3 = tuple3;
exports.tuple4 = tuple4;
exports.tuple5 = tuple5;
exports.tuple6 = tuple6;
exports.tuple7 = tuple7;
exports.tuple8 = tuple8;
exports.tuple9 = tuple9;
exports.tuple10 = tuple10;
exports.result = result;
exports.either = either;
exports.singleEnumerator = singleEnumerator;
/* U Not a pure module */
