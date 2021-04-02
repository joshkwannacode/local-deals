import React from 'react';

export default function PreClicked({data}) {
    return (
            <div>
                <img class="business-preclick-img" src={data.image} />
                <h3>{data.name}</h3>
                <p>{data.discountDesc}</p>
            </div>
    )
}
