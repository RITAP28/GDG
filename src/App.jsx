import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
// import Headers from './components/Headers';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
