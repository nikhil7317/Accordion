import React, { useState } from 'react';
import './App.css';
import { questions } from './components/Api';
import MyAccordion from './components/MyAccordion';


function App() {

  const[data, setData] = useState(questions)
  return (
    
      <div className='main_div'>
        <div className='center_div'> 
        <h1 className='heading'>React Interview Questions</h1>
      {
        data.map((curElem)=>{
          const{id} = curElem
          return <MyAccordion key={id}{...curElem}/>
        })
      }
        </div>
      </div>
    
  );
}

export default App;
