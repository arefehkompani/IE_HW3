import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu'
import Q2 from './components/Q2'
import Q3 from './components/Q3'
import Q4 from './components/Q4'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Menu />}/>
          <Route path="/Q2" element={<Q2 />}/>
          <Route path="/Q3" element={<Q3 />}/>
          <Route path="/Q4" element={<Q4 />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
