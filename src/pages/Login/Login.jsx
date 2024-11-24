import "../Login/Login.css"
import ImageLogin from "../../assets/login.svg"
import Googleimg from "../../assets/google.png"
import { useState } from "react";
import axios from 'axios';


export function Login() {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/login', {
            email,
            password
          });
    
          
          console.log('Login bem-sucedido:', response.data);
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      };
      

return (
    <>
        <div class="container-login">
            <div class="img-box">
                <img src={ImageLogin} />
            </div>
            <div class="content-box">
                <div class="form-box">
                    <h2>Login</h2>
                    <form>
                        <div class="input-box">
                            <span>Username</span>
                            <input type="email" placeholder="@mail.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div class="input-box">
                            <span>Password</span>
                            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div class="remember">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Esqueceu a Senha?</a>
                        </div>

                        <div class="input-box">
                            <input type="submit" value="Entrar" onChange={handleSubmit}/>
                        </div>

                        <div class="input-box">
                            <p>Não Tem Uma Conta? <a href="#">Inscrever-se</a></p>
                        </div>
                    </form>
                    <h3>Logar Com</h3>
                    <ul class="ul">
                        <li><img src={Googleimg} /></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);
}
