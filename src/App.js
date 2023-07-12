import { BrowserRouter as Router, Switch, Route, Link, useNavigate, Routes } from 'react-router-dom';
import Home from './components/Home';

import UseStateDemo from './components/UseStateDemo';

function App() {
 
  return (
    <>
    <Router>

      < Routes>
        <Route exact path="/useStateDemo" element={<UseStateDemo />} />
        <Route exact path="/" element={<Home />} />
      </ Routes>
  
      
    </Router>
    </>
  );
}

export default App;