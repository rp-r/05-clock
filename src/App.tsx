import { Container } from "react-bootstrap"
import './assets/App.scss'
import Button from "react-bootstrap/Button"
import { useState } from "react";
import Clock from "./components/Clock";

function App() {
  
  const[showclock,setShowclock]=useState(false);


  return (
    <>
    <Container>
  <Button onClick={ ()=>setShowclock(!showclock)}
  
  >{
    showclock?"😧 clock":"🥶 clock"
  }
    </Button> 
    { showclock && <Clock />}

    </Container>
  
    </>
  )
}

export default App
