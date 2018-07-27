(* Parsing a JSON string using Aeson.Json.parse *)

let arrayOfInts str =
  let json = Aeson.Json.parseExn str in
  Aeson.Decode.(array int json)

(* prints `[3, 2, 1]` *)
let _ = Js.log (arrayOfInts "[1, 2, 3]" |> Js.Array.reverseInPlace)
