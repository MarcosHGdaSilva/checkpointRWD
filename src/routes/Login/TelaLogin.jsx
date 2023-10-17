import './TelaLogin.css'
import Modelo from "../ModeloCarro/Modelo";
import { useRef } from "react";

export default function TelaLogin({ setAuthenticated }) {
    const user = useRef();
    const password = useRef();
    const getUser = sessionStorage.getItem('userData');
    const getPassword = sessionStorage.getItem('senhaData');

    const Login = () => {
    
    if(user.current.value === 'Admin' && password.current.value ==='123456'){
        sessionStorage.setItem('userData', 'Admin')
        sessionStorage.setItem('senhaData','123456')
        setAuthenticated(true);
    }else{
        alert("Usuario ou senha inválidos !!!")
    }
  }
  const logout = () =>{
    sessionStorage.clear();
    setAuthenticated(false)
  }

    return (
      <section className='sectionLogin'>
        {getUser && getPassword ? (
          <div>
          <button onClick={logout}>Sair</button>
          </div>
          ):(
          <form className='formLogin' onSubmit={Login}>
            <fieldset className='wrapLogin'>
              <legend>Login</legend>
              <label htmlFor="usuario">Usuario:</label>
              <input className='campo' type="text" ref={user}/><br/>
              <label htmlFor="password">Senha:</label>
              <input className='campo' ref={password} type="password"/><br />
              <input className='botao' type="submit" value="Login"/>
            </fieldset>
          </form>
        )}
      </section>
    )
}