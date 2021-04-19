import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalsService {
  public masks = {
    cpf: [
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/
    ],

    tel: [
      "(",
      /\d/,
      /\d/,
      ")",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  };
}
