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
            <Route exact path='/i-internship-main' element={<Dashboard />} />
            <Route path='i-internship-main/applications' element={<Applications />} />
            <Route path='i-internship-main/about' element={<About />} />
            <Route path='i-internship-main/apply/:id' element={<ApplyForm />} />
        </Routes>
      </Router>
  )
}

export default App