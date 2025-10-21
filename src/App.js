import React from 'react'
import Header from "./components/Header/header"
import Topcontainer from './components/Topcontainer/topcontainer'
import Skillcontainer from "./components/Skillcontainer/skillcontainer"
import Aboutcontainer from "./components/Aboutcontainer/aboutcontainer"
import Projectcontainer from "./components/Projectcontainer/projectcontainer"
import Footer from "./components/Footer/footer"
const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Aboutcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Footer />
    </div>
    
  )
}

export default App