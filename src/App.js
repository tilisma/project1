import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const root = 5
  const a = 10
  const b = 20 
  const [selectedcolor,setselectedcolor]=useState("black");
  function handleclick(){ 
    console.log("a="+ a +",b="+b)
  } 
  // function handlered(){
  //   console.log("Red")
  // } 
  // function handleblue(){ 
  //   console.log("Blue")
  // } 
  // function handlegreen(){ 
  //   console.log("green")
  // } 
  const handleColor=(color)=>{  
    // selectedcolor=color  
    setselectedcolor(color)
  console.log(selectedcolor)
  }
  
  return (
    <div>
      <button onClick={handleclick}>click me</button> 
      <button onClick={()=>handleColor("red")}>Red</button>
      <button onClick={()=>handleColor("blue")}>Blue</button>
      <button onClick={()=>handleColor("green")}>Green</button> 
      <div className='box' style={{backgroundColor:selectedcolor}}> 
      </div>
    </div>
  );
}

export default App;
