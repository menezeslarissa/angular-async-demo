import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { MustBeValid } from "../../_helpers/must-be-valid.validator";
@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  model: any = {};

  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(JSON.stringify(this.model, null, 4));
  }

  async validarCpf(cpf) {
    if (MustBeValid(cpf)) {
      console.log("cpf valido");
    } else {
      this.toastr.error("Adicione um cpf válido", "CPF Inválido", {
        timeOut: 3000
      });
    }
  }
}
