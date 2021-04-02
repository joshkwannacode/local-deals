import React from 'react';

export default function Clicked({data}) {
    return (
    <div class="clicked-main-div">
        <div class="clicked-img-div">
        <a href={data.link} target="_blank">
            <img class="business-clicked-img" src={data.image} />
            </a>
        </div>
        <div class="clicked-desc-div">
            <h2>{data.name}</h2>
        <div class="clicked-desc">
            <p>{data.discountDesc}</p>
            <p>Promo Code: <span class="promo-code">{data.desc}</span> <span style={{fontSize:"10px",marginLeft:"10px"}}>*Mention at checkout!</span></p>
            <p>{data.address}</p>
            <br/>
            <button class="website-btn">
                <a href={data.link} target="_blank" style={{textDecoration:"none",color:"white"}}>
                    Visit Website <span>&#8594;</span>
                    </a></button>
        </div>
        </div>
    </div>
    )
}
