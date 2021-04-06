import React, {useState} from 'react';
import './App.css';
import PreClicked from './components/PreClicked';
import Clicked from './components/Clicked';
import data from './data';
import SearchBar from './components/SearchBar';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [dataId, setDataId] = useState();

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
        <SearchBar />
      </div>
    <div className="App">
      {isClicked===false?data.map(a=>{
        return(
          <div class="pre-click-div" onClick={()=>onChange(a.id)}>
            <PreClicked data={a}/>
            <button class="pre-click-btn" onClick={()=>onChange(a.id)}>
              Get Promo Code
              </button>
          </div>
      )}):data.filter(elem=>elem.id===dataId).map(b=>{
        return(
          <div class="clicked-div">
            <button class="x-btn" onClick={()=>onChange()}>X</button>
            <Clicked data={b} />
          </div>
        )})}
    </div>
    </div>
  );
}

export default App;
