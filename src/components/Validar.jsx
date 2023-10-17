function Validar(){
    //modo obstrutivo
    //var email = document.frmLogin.txtEmail.value;
    // modo não-obstrutivo
    var email = document.frmLogin.txtEmail;
    var senha = document.frmLogin.pwdPass;

    if(email.value == ""){
        alert("Campo E-Mail, obrigatório!");
        document.getElementById("erro").innerText="Campo E-Mail é obrigatório";
        email.style.backgroundColor="#e1e1e1e1";
        email.focus();
        return false;
    }
    else{
        email.style.backgroundColor="#fff";
        if(senha.value == "" || senha.value.length < 8){
            alert("Campo Senha obrigatório!");
            document.getElementById("erro").innerText="Campo Senha é obrigatório";
            senha.style.backgroundColor="#e1e1e1e1";
            senha.focus();
            return false;
        }
        else{
            if(email.value == "joao@algumlugar.com" && senha.value == "Iloveyou123"){
                return true;
            }
            else{
                document.getElementById("erro").innerText="Usuário e/ou senha incorretos!";
                return false;
            }
        }
    }
}