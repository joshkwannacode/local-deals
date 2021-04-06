import React,{useState} from 'react'

export default function SearchBar({b}) {
    const [isActive,setIsActive] = useState(false);
    const [btnId,setBtnId] = useState(1);

    const handleClick =(id)=>{
        // setBtnId(id);

      setBtnId(id)
        
    };
    
    console.log(btnId)
    return (
        <div className="searchbar-main-div">
            <h3>SELECT A CATEGORY</h3>
            <div className="searchbar-btn-group" >
                {b.map(key =>
                    {console.log("key",key)
                    return(<button className={key.id===btnId?"searchbar-btn":"searchbar-btn active"}
                    onClick={()=>handleClick(key.id)}>{key.name}</button>)})}
                
                {/* <button className={btnId===1?"searchbar-btn":"active"}
                onClick={handleClick(1)}>All</button>
                <button className={btnId===2?"searchbar-btn":"active"}
                onClick={handleClick(2)}>Eat & Drink</button>
                <button className="searchbar-btn">Business</button>
                <button className="searchbar-btn">Home</button> */}
            </div>
        </div>
    )
}
