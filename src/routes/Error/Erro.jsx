import {Link} from "react-router-dom"

export default function Error() {

  return (
    <>
      <h1>Error 404 - Not Found</h1>
      <p>Página Inexistente | Retornar para <span><Link to="/">Página Inicial</Link></span></p>
      
    </>
  )
}