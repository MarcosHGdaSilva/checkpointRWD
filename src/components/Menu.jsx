import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/ModeloCarro'>Modelo dos Carro</Link></li>
                    <li><Link to='/Distribuidoras'>Distribuidoras</Link></li>
                    <li><Link to='/QuemSomos'>Quem Somos?</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Cadastro'>Cadastro</Link></li>
                </ul>
            </nav>
        </header>
    )
}