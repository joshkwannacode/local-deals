import React from 'react';

export default function PreClicked({data}) {
    return (
            <div>
                <img class="business-preclick-img" src={data.image} />
                <h3>{data.name}</h3>
                <p class="preclick-desc">{data.discountDesc}</p>
            </div>
    )
}
