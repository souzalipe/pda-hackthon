import React from "react";
import "../Register/Register.css";
import Imgregister from "../../assets/register.svg"

export function Register() {
  return (
    <body>
      <div class="container">
        <div class="form-image">
          <img src={Imgregister} alt="" />
        </div>
        <div class="form">
          <form action="#">
            <div class="form-header">
              <div class="title">
                <h1>Cadastre-se</h1>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">Primeiro Nome</label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

             
              <div class="input-box">
                <label for="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div class="input-box">
                <label for="passwor">Senha</label>
                <input
                  id="email"
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

             
            </div>

            <div class="continue-button">
              <button>
                <a href="#">Vamos lá</a>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
