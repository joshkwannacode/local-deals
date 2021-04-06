import React from 'react'

export default function SearchBar() {
    return (
        <div className="searchbar-main-div">
            <h3>SELECT A CATEGORY</h3>
            <div className="searchbar-btn-group">
                <button className="searchbar-btn">All</button>
                <button className="searchbar-btn">Eat & Drink</button>
                <button className="searchbar-btn">Business</button>
                <button className="searchbar-btn">Home</button>
            </div>
        </div>
    )
}
