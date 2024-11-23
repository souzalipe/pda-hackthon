import React from "react";
import "../Register/Register.css";

export function Register() {
  return (
    <div>
       <div className="contact-page-wrapper">
        <h1 className="">Sing On</h1>
        <div className="primary-heading">
          <form action="">
            <label htmlFor="" className="">
              Nome
            </label>
            <input type="text" placeholder="Seu Nome" />

            <label htmlFor="" className="">
              Email
            </label>
            <input type="text" placeholder="SeuEmail@gmail.com" />

            <label htmlFor="">Senha</label>
            <input type="text" placeholder="Sua Senha" />

            <button className="">Vamos lá</button>
          </form>
        </div>
      </div>
    </div>
  );
}
