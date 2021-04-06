import React from 'react';

export default function PreClicked({data}) {
    return (
            <div>
                <img className="business-preclick-img" src={data.image} />
                <h3>{data.name}</h3>
                <p className="preclick-desc">{data.discountDesc}</p>
            </div>
    )
}
