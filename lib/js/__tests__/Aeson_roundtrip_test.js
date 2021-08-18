'use strict';

var Jest = require("@glennsl/bs-jest/lib/js/src/jest.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Aeson_decode = require("../src/Aeson_decode.js");
var Aeson_encode = require("../src/Aeson_encode.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function resultMap(f, r) {
  if (r.TAG === /* Ok */0) {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(f, r._0)
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: r._0
          };
  }
}

function jsonRoundtripSpec(decode, encode, json) {
  var rDecoded = Curry._1(decode, json);
  return Jest.Expect.toEqual({
              TAG: /* Ok */0,
              _0: json
            }, Jest.Expect.expect(resultMap(encode, rDecoded)));
}

function cmp(a, b) {
  return Caml_obj.caml_compare(a._0, b._0);
}

var PairKeyComparable = Belt_Id.MakeComparable({
      cmp: cmp
    });

function encodePairKey(x) {
  return Aeson_encode.pair((function (prim) {
                return prim;
              }), (function (prim) {
                return prim;
              }), x._0);
}

function decodePairKey(json) {
  var v;
  try {
    v = Aeson_decode.pair(Aeson_decode.$$int, Aeson_decode.string, json);
  }
  catch (raw_msg){
    var msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
    if (msg.RE_EXN_ID === Aeson_decode.DecodeError) {
      return {
              TAG: /* Error */1,
              _0: "decodePairKey: " + msg._1
            };
    }
    throw msg;
  }
  return {
          TAG: /* Ok */0,
          _0: /* PairKey */{
            _0: v
          }
        };
}

function encodePairKeyMap(x) {
  return Aeson_encode.object_({
              hd: [
                "pairKeyMap",
                Aeson_encode.beltMap(encodePairKey, (function (prim) {
                        return prim;
                      }), x.pairKeyMap)
              ],
              tl: /* [] */0
            });
}

function decodePairKeyMap(json) {
  var v;
  try {
    v = {
      pairKeyMap: Aeson_decode.field("pairKeyMap", (function (param) {
              return Aeson_decode.beltMap((function (a) {
                            return Aeson_decode.unwrapResult(decodePairKey(a));
                          }), Aeson_decode.string, PairKeyComparable, param);
            }), json)
    };
  }
  catch (raw_msg){
    var msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
    if (msg.RE_EXN_ID === Aeson_decode.DecodeError) {
      return {
              TAG: /* Error */1,
              _0: "decodePairKey: " + msg._1
            };
    }
    throw msg;
  }
  return {
          TAG: /* Ok */0,
          _0: v
        };
}

function newtypeToString(x) {
  return x._0;
}

function stringToNewtype(x) {
  return /* Newtype */{
          _0: x
        };
}

function cmp$1(a, b) {
  return Caml_primitive.caml_string_compare(a._0, b._0);
}

var NewtypeKeyComparable = Belt_Id.MakeComparable({
      cmp: cmp$1
    });

function encodeNewtypeKeyMap(x) {
  return Aeson_encode.object_({
              hd: [
                "newtypeKeyMap",
                Aeson_encode.beltMapString((function (prim) {
                        return prim;
                      }), Belt_MapString.fromArray($$Array.map((function (param) {
                                return [
                                        param[0]._0,
                                        param[1]
                                      ];
                              }), Belt_Map.toArray(x.newtypeKeyMap))))
              ],
              tl: /* [] */0
            });
}

function decodeNewtypeKeyMap(json) {
  var v;
  try {
    v = {
      newtypeKeyMap: Belt_Map.fromArray($$Array.map((function (param) {
                  return [
                          /* Newtype */{
                            _0: param[0]
                          },
                          param[1]
                        ];
                }), Belt_MapString.toArray(Aeson_decode.field("newtypeKeyMap", (function (param) {
                          return Aeson_decode.beltMapString(Aeson_decode.string, param);
                        }), json))), NewtypeKeyComparable)
    };
  }
  catch (raw_msg){
    var msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
    if (msg.RE_EXN_ID === Aeson_decode.DecodeError) {
      return {
              TAG: /* Error */1,
              _0: "decodeNewtypeKeyMap: " + msg._1
            };
    }
    throw msg;
  }
  return {
          TAG: /* Ok */0,
          _0: v
        };
}

Jest.describe("Belt.Map.String.t", (function (param) {
        return Jest.test("string key map", (function (param) {
                      return jsonRoundtripSpec((function (param) {
                                    return Aeson_decode.wrapResult((function (param) {
                                                  return Aeson_decode.beltMapString(Aeson_decode.string, param);
                                                }), param);
                                  }), (function (param) {
                                    return Aeson_encode.beltMapString((function (prim) {
                                                  return prim;
                                                }), param);
                                  }), JSON.parse("{\"a\":\"A\",\"b\":\"B\"}"));
                    }));
      }));

Jest.describe("Belt.Map.Int.t", (function (param) {
        return Jest.test("int key map", (function (param) {
                      return jsonRoundtripSpec((function (param) {
                                    return Aeson_decode.wrapResult((function (param) {
                                                  return Aeson_decode.beltMapInt(Aeson_decode.string, param);
                                                }), param);
                                  }), (function (param) {
                                    return Aeson_encode.beltMapInt((function (prim) {
                                                  return prim;
                                                }), param);
                                  }), JSON.parse("{\"1\":\"A\",\"2\":\"B\"}"));
                    }));
      }));

Jest.describe("(pairKey, string, PairKeyComparable.identity) Belt.Map.t", (function (param) {
        return Jest.test("custom key map", (function (param) {
                      return jsonRoundtripSpec(decodePairKeyMap, encodePairKeyMap, JSON.parse("{\"pairKeyMap\":[[[0,\"a\"],\"A\"],[[1,\"b\"],\"B\"]]}"));
                    }));
      }));

Jest.describe("newtype", (function (param) {
        return Jest.test("newtype string wrapper key map", (function (param) {
                      return jsonRoundtripSpec(decodeNewtypeKeyMap, encodeNewtypeKeyMap, JSON.parse("{\"newtypeKeyMap\":{\"a\":\"A\",\"b\":\"B\"}}"));
                    }));
      }));

exports.resultMap = resultMap;
exports.jsonRoundtripSpec = jsonRoundtripSpec;
exports.PairKeyComparable = PairKeyComparable;
exports.encodePairKey = encodePairKey;
exports.decodePairKey = decodePairKey;
exports.encodePairKeyMap = encodePairKeyMap;
exports.decodePairKeyMap = decodePairKeyMap;
exports.newtypeToString = newtypeToString;
exports.stringToNewtype = stringToNewtype;
exports.NewtypeKeyComparable = NewtypeKeyComparable;
exports.encodeNewtypeKeyMap = encodeNewtypeKeyMap;
exports.decodeNewtypeKeyMap = decodeNewtypeKeyMap;
/* PairKeyComparable Not a pure module */
