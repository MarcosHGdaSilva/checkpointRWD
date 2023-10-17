import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    nome : yup.string()
            .required("O nome é obrigatório"),
    email : yup.string()
            .email("Digite um e-mail válido!")
            .required("O e-mail é obrigatório"),
    login : yup.string().min(8,"O seu nome de usuário deve ter pelo menos 8 caracteres")
            .required("O seu nome de usuário é obrigatório"),
    senha : yup.string().min(8,"A Senha deve ter pelo menos 8 dígitos")
            .required("A Senha é obrigatória"),
}).required();

export default function FormCadastro(){

    const { register, handleSubmit, formState: { errors }} = useForm({ resolver : yupResolver(schema) })
    const [listaClientes, setListaClientes] = useState([])

    function inserirCliente(cliente){
        setListaClientes([...listaClientes, cliente])
        sessionStorage.setItem('userData', 'Admin')
        sessionStorage.setItem('senhaData','123456')
    }

    return(
        <>
            <form onSubmit={ handleSubmit(inserirCliente) }>
                <fieldset>
                    <legend>Dados Pessoais:</legend>
                    <label>Nome:
                        <input type="text" {...register('nome')} />
                        <span>{ errors.nome?.message }</span>
                        <br/>
                    </label>
                    <label>Email:
                        <input type="text" {...register('email')} />
                        <span>{ errors.email?.message }</span>
                        <br/>
                    </label>
                    <label>Login:
                        <input type="text" {...register('login')} />
                        <span>{ errors.login?.message }</span>
                        <br/>
                    </label>
                    <label>Senha:
                        <input type="password" {...register('senha')} />
                        <span>{ errors.senha?.message }</span>
                        <br/>
                    </label>
                    <button onClick={inserirCliente(register('nome', 'email', 'login', 'senha'))}>Criar</button>
                </fieldset>
            </form>
        </>
    )
}