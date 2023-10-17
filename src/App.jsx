import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import TelaLogin from "./routes/Login/TelaLogin";
import Modelo from "./routes/ModeloCarro/Modelo"; 

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/TelaLogin">
          <TelaLogin setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/Modelo">
          {authenticated ? <Modelo /> : <Redirect to="/TelaLogin" />}
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;








// import './App.css'
// import {Outlet} from 'react-router-dom'
// import Menu from './components/Menu'
// import Footer from './components/Footer';


// function App() {

//   return (
//     <>
//       <Menu />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

// export default App;