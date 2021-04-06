import React, {useState,useContext} from 'react';
import './App.css';
import PreClicked from './components/PreClicked';
import Clicked from './components/Clicked';
import data from './data';
import SearchBar from './components/SearchBar';
import {Context} from "./context/Context";


function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [dataId, setDataId] = useState();
  const {contextData,setContextData} =useContext(Context);

  const onChange=(id)=>{
    if(isClicked!==true){
      setIsClicked(true);
      setDataId(id);
    }else{
      setIsClicked(false);
    }
    
  };


  return (

    <div className="Main">
      <div>
        <SearchBar/>
      </div>
    <div className="App">
      {isClicked===false?contextData.map(a=>{
        return(
          <div key={a.id} className="pre-click-div" onClick={()=>onChange(a.id)}>
            <PreClicked data={a}/>
            <button className="pre-click-btn" onClick={()=>onChange(a.id)}>
              Get Promo Code
              </button>
          </div>
      )}):contextData.filter(elem=>elem.id===dataId).map(b=>{
        return(
          <div key={b.id} className="clicked-div">
            <button className="x-btn" onClick={()=>onChange()}>X</button>
            <Clicked data={b} />
          </div>
        )})}
    </div>
    </div>

  );
}

export default App;
