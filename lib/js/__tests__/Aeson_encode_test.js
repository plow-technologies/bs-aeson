'use strict';

var Jest                = require("@glennsl/bs-jest/lib/js/src/jest.js");
var $$Array             = require("bs-platform/lib/js/array.js");
var Js_dict             = require("bs-platform/lib/js/js_dict.js");
var Aeson_encode        = require("../src/Aeson_encode.js");
var Aeson_compatibility = require("../src/Aeson_compatibility.js");

var Test = /* module */[];

Jest.test("null", (function () {
        return Jest.Expect[/* toEqual */12](null, Jest.Expect[/* expect */0](null));
      }));

Jest.test("string", (function () {
        return Jest.Expect[/* toEqual */12]("foo", Jest.Expect[/* expect */0]("foo"));
      }));

Jest.test("date - non-float time", (function () {
        var nowString = "2017-12-08T06:03:22Z";
        var now = new Date(nowString);
        return Jest.Expect[/* toEqual */12](nowString, Jest.Expect[/* expect */0](Aeson_encode.date(now)));
      }));

Jest.test("date - float time", (function () {
        var nowString = "2017-12-08T06:03:22.123Z";
        var now = new Date(nowString);
        return Jest.Expect[/* toEqual */12](nowString, Jest.Expect[/* expect */0](Aeson_encode.date(now)));
      }));

Jest.test("float", (function () {
        return Jest.Expect[/* toEqual */12](1.23, Jest.Expect[/* expect */0](1.23));
      }));

Jest.test("int", (function () {
        return Jest.Expect[/* toEqual */12](23, Jest.Expect[/* expect */0](23));
      }));

Jest.test("boolean", (function () {
        return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](true));
      }));

Jest.test("rational", (function () {
        return Jest.Expect[/* toEqual */12](Js_dict.fromList(/* :: */[
                        /* tuple */[
                          "numerator",
                          1
                        ],
                        /* :: */[
                          /* tuple */[
                            "denominator",
                            2
                          ],
                          /* [] */0
                        ]
                      ]), Jest.Expect[/* expect */0](Aeson_encode.rational(Aeson_compatibility.Rational[/* make */0](1, 2))));
      }));

Jest.test("either - left int", (function () {
        return Jest.Expect[/* toEqual */12](Js_dict.fromList(/* :: */[
                        /* tuple */[
                          "Left",
                          1
                        ],
                        /* [] */0
                      ]), Jest.Expect[/* expect */0](Aeson_encode.either((function (prim) {
                              return prim;
                            }), (function (prim) {
                              return prim;
                            }), Aeson_compatibility.Either[/* left */0](1))));
      }));

Jest.test("either - left string", (function () {
        return Jest.Expect[/* toEqual */12](Js_dict.fromList(/* :: */[
                        /* tuple */[
                          "Left",
                          "hello"
                        ],
                        /* [] */0
                      ]), Jest.Expect[/* expect */0](Aeson_encode.either((function (prim) {
                              return prim;
                            }), (function (prim) {
                              return prim;
                            }), Aeson_compatibility.Either[/* left */0]("hello"))));
      }));

Jest.test("either - right int", (function () {
        return Jest.Expect[/* toEqual */12](Js_dict.fromList(/* :: */[
                        /* tuple */[
                          "Right",
                          1
                        ],
                        /* [] */0
                      ]), Jest.Expect[/* expect */0](Aeson_encode.either((function (prim) {
                              return prim;
                            }), (function (prim) {
                              return prim;
                            }), Aeson_compatibility.Either[/* right */1](1))));
      }));

Jest.test("either - right string", (function () {
        return Jest.Expect[/* toEqual */12](Js_dict.fromList(/* :: */[
                        /* tuple */[
                          "Right",
                          "hello"
                        ],
                        /* [] */0
                      ]), Jest.Expect[/* expect */0](Aeson_encode.either((function (prim) {
                              return prim;
                            }), (function (prim) {
                              return prim;
                            }), Aeson_compatibility.Either[/* right */1]("hello"))));
      }));

Jest.test("dict - empty", (function () {
        return Jest.Expect[/* toEqual */12]({ }, Jest.Expect[/* expect */0]({ }));
      }));

Jest.test("dict - simple", (function () {
        var o = { };
        o["x"] = 42;
        return Jest.Expect[/* toEqual */12](o, Jest.Expect[/* expect */0](o));
      }));

Jest.test("object_ - empty", (function () {
        return Jest.Expect[/* toEqual */12]({ }, Jest.Expect[/* expect */0](Aeson_encode.object_(/* [] */0)));
      }));

Jest.test("object_ - simple", (function () {
        return Jest.Expect[/* toEqual */12](Js_dict.fromList(/* :: */[
                        /* tuple */[
                          "x",
                          42
                        ],
                        /* [] */0
                      ]), Jest.Expect[/* expect */0](Aeson_encode.object_(/* :: */[
                            /* tuple */[
                              "x",
                              42
                            ],
                            /* [] */0
                          ])));
      }));

Jest.test("array int", (function () {
        return Jest.Expect[/* toEqual */12](/* int array */[
                    1,
                    2,
                    3
                  ], Jest.Expect[/* expect */0]($$Array.map((function (prim) {
                              return prim;
                            }), /* int array */[
                            1,
                            2,
                            3
                          ])));
      }));

Jest.test("list int", (function () {
        return Jest.Expect[/* toEqual */12](/* int array */[
                    1,
                    2,
                    3
                  ], Jest.Expect[/* expect */0](Aeson_encode.list((function (prim) {
                              return prim;
                            }), /* :: */[
                            1,
                            /* :: */[
                              2,
                              /* :: */[
                                3,
                                /* [] */0
                              ]
                            ]
                          ])));
      }));

Jest.test("singleEnumerator typeParameterRef0", (function () {
        return Jest.Expect[/* toEqual */12](/* array */[], Jest.Expect[/* expect */0](Aeson_encode.singleEnumerator(/* SingleEnumerator */0)));
      }));

Jest.test("stringArray", (function () {
        return Jest.Expect[/* toEqual */12](/* array */[
                    "a",
                    "b"
                  ], Jest.Expect[/* expect */0](/* array */[
                        "a",
                        "b"
                      ]));
      }));

Jest.test("nubmerArray", (function () {
        return Jest.Expect[/* toEqual */12](/* int array */[
                    0,
                    4
                  ], Jest.Expect[/* expect */0](/* float array */[
                        0,
                        4
                      ]));
      }));

Jest.test("booleanArray", (function () {
        return Jest.Expect[/* toEqual */12](/* array */[
                    true,
                    false
                  ], Jest.Expect[/* expect */0](/* array */[
                        true,
                        false
                      ]));
      }));

exports.Test = Test;
/*  Not a pure module */
