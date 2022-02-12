import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Container from './layout/Container'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NewProject from './pages/NewProject'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Login from './pages/Login'
import Signin from './pages/Signin'

export default function Routes(){
    return(
      <Router>
      <Switch>
        <Container customClass="min-height">
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>

          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>

          <Route path="/projects">
            <Navbar />
            <Projects />
          </Route>

          <Route path="/company">
            <Navbar />
            <Company />
          </Route>

          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>

          <Route path="/newproject">
            <Navbar />
            <NewProject />
          </Route>

          <Route path="/project/:id">
            <Navbar />
            <Project />
          </Route>
          
        </Container>
      </Switch>
      <Footer />
    </Router>
    )
}