import Modelo from "../ModeloCarro/Modelo";
import { useRef } from "react";

export default function TelaLogin() {
    const user = useRef();
    const password = useRef();

    const getUser = sessionStorage.getItem('userData');
    const getPassword = sessionStorage.getItem('senhaData');

    const handleSubmit =() =>{
    if(user.current.value === 'Admin' && password.current.value ==='123456'){
        sessionStorage.setItem('userData', 'Admin')
        sessionStorage.setItem('senhaData','123456')
    }else{
        alert("Usuario ou senha inválidos !!!")
    }
}

    return (
      <section>
        {getUser && getPassword ? (
          <Modelo/>
          ):(
          <form onSubmit={handleSubmit}>
            <label htmlFor="usuario">Usuario:</label>
            <input type="text" ref={user}/><br/>
            <label htmlFor="password">Senha:</label><br />
            <input ref={password} type="password"/>
            <input type="submit" value="TelaLogin" />
          </form>
        )}
      </section>
    )
}

 /*
 
 import React from "react";

export default function TelaLogin() {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const userLogin = event =>{
    localStorage.setItem('user',event.target.value);
    setUser(event.target.value);
  }
  const passLogin = event =>{
    localStorage.setItem('pass',event.target.value);
    setPass(event.target.value);
  }

  function logout(){
    localStorage.clear();
  }
  const Login=() =>{
    const getUser = localStorage.getItem("user");
    const getPass = localStorage.getItem("pass");

    if (this.user === 'user' && this.pass === 'pass') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', this.username);
      this.$router.push('/Pecas');
      alert("Logado")
    } else {
      alert('Credenciais inválidas');
    }
    };
      const getUser = localStorage.getItem("myValueInLocalStorage");
      const getPass = localStorage.getItem("myPassInLocalStorage");

    return (
  
      <section>
        <form>
          <label htmlFor="user">Usuario:</label><br />
          <input type="text" onChange={userLogin}/><br/>
          <p>{user}</p>
          <label htmlFor="pass">Senha:</label><br />
          <input className='password' type="password" onChange={passLogin}/>
          <p>{pass}</p>
          <br/>
          <button onClick={Login}>Login</button>
        </form>
      </section>
    )
 }

  
 
 */
  