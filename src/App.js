import { useState } from 'react';
import './App.css';
import Data from './Data';
import Accordian from './Accordian';

function App() {


  return (
    <>
        <h1>Accordian</h1>
      <div className='main'>
        <div className='accordian'>
          {/* <div className='main-head'>
            <div className='ques'>
              <h2><span>➕</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            </div>
            <div className='ans'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div> */}
          {Data.map((val) => {
            return <Accordian ques={val.ques} ans={val.ans} />
          })}
        </div>
      </div>
    </>
  )
}

export default App;
