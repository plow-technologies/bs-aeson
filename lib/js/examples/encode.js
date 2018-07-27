'use strict';

var Aeson_encode = require("../src/Aeson_encode.js");

console.log(JSON.stringify(/* array */[
          "foo",
          "bar"
        ]));

console.log(JSON.stringify(/* array */[
            "foo",
            "bar"
          ].map((function (prim) {
                return prim;
              }))));

console.log(Aeson_encode.object_(/* :: */[
          /* tuple */[
            "x",
            42
          ],
          /* :: */[
            /* tuple */[
              "foo",
              "bar"
            ],
            /* [] */0
          ]
        ]));

function point(r) {
  return Aeson_encode.object_(/* :: */[
              /* tuple */[
                "x",
                r[/* x */0]
              ],
              /* :: */[
                /* tuple */[
                  "y",
                  r[/* y */1]
                ],
                /* [] */0
              ]
            ]);
}

function line(r) {
  var match = r[/* thickness */2];
  return Aeson_encode.object_(/* :: */[
              /* tuple */[
                "start",
                point(r[/* start */0])
              ],
              /* :: */[
                /* tuple */[
                  "end",
                  point(r[/* end_ */1])
                ],
                /* :: */[
                  /* tuple */[
                    "thickness",
                    match !== undefined ? match : null
                  ],
                  /* [] */0
                ]
              ]
            ]);
}

var Encode = /* module */[
  /* point */point,
  /* line */line
];

var data = /* record */[
  /* start : record */[
    /* x */1.1,
    /* y */-0.4
  ],
  /* end_ : record */[
    /* x */5.3,
    /* y */3.8
  ],
  /* thickness */2
];

console.log(line(data));

exports.Encode = Encode;
exports.data = data;
/*  Not a pure module */
