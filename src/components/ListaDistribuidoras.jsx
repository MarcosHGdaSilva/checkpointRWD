import { useState, useEffect } from "react"

export default function ListaDistribuidoras() {
  const [carros, setCarros] = useState([])
  const [carrosDist, setCarrosDist] = useState([])
  const [dist, setDist] = useState([])

  const getCarroPorDist = (distribuidora) => {
    const carroEncontrado = carros.filter((carros) => carros.distribuidora === distribuidora);
    setCarrosDist(carroEncontrado);
    const distEncontrado = carros.find(carros => carros.distribuidora);
    setDist(distEncontrado);
  };

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
            <th>Distribuidora</th>
          </tr>
        </thead>
        <tbody>
        {carros.map((carro) => (
            <tr key={carro.id}>
              <td>{carro.distribuidora}</td>
              <td><button onClick={() => getCarroPorDist(carro.distribuidora)}>Exibe Info</button></td>
              <td>
                {carrosDist.length > 0 && (
                  <div>
                    {carrosDist.map((carroDist) => (
                      <div key={carroDist.id}>
                        <p>Modelo: {carroDist.modelo}</p>
                        {/* <p>Distribuidora: {carroDist.distribuidora}</p>
                        <p>Lançamento: {carroDist.lancamento}</p>
                        <p>Motor: {carroDist.motor}</p>
                        <p>Descrição: {carroDist.descricao}</p> */}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    </section>
  )
}