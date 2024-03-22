import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './pages/Company'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Projects from './pages/Projects'
import Project from './pages/Project'

import Container from './layouts/Container'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

function App() {
  return(
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route path="/company" element={<Company/>}> </Route>
            <Route path="/projects" element={<Projects/>}> </Route>
            <Route path="/contact" element={<Contact/>}> </Route>
            <Route path="/newproject" element={<NewProject/>}> </Route>
            <Route path="/project/:id" element={<Project/>}> </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App