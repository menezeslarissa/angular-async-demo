import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent, UsuariosComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
