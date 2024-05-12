import './App.css';
import './index.css';
import  { Header }from './header';
import  Dashboard  from './Dashboard';
import  Applications from './Applications';
import About from './About';
import ApplyForm from './ApplyForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Header />  
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/applications' element={<Applications />} />
            <Route path='/about' element={<About />} />
            <Route path='/apply/:id' element={<ApplyForm />} />
        </Routes>
      </Router>
  )
}

export default App