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
            <p>Promo Code: {data.desc}</p>
            <p>{data.address}</p>
            <button><a href={data.link} target="_blank">Visit Website -></a></button>
        </div>
        </div>
    </div>
    )
}
