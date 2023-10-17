import './ListaCarros.css'
import { useState, useEffect } from "react"

export default function ListaCarros() {
  const [carros, setCarros] = useState([])
  

  useEffect(()=>{
    fetch('/src/carros.json').then((resp)=>{
      return resp.json();
      }).then((resp)=>{
        setCarros(resp);
        console.log(resp);
      }).catch((error)=>{
        console.log(error);
      })
    },[])

    
  return (
    <section>
      <h1>Modelos dos Carros</h1>
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Modelo</th>
            <th>Distribuidora</th>
            <th>Lançamento</th>
            <th>Motor</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro)=> (
            <tr key={carro.id}>
              <img src={"src/assets/Picture" + carro.id + ".png"} alt={carro.modelo} />
              <td>{carro.modelo}</td>
              <td>{carro.distribuidora}</td>
              <td>{carro.lancamento}</td>
              <td>{carro.motor}</td>
              <td>{carro.descricao}</td>
            </tr>
          )
        )
      }
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    </section>
  )
}