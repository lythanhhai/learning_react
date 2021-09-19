import React, { Component } from 'react'

class Categories extends Component 
{
    constructor()
    {
        super();
        
    }

    render()
    {
        // var elmCategories = this.props.
        return(
            <div className="category">
                <ul className="option">
                    <li className="item">
                        <button onClick={() => this.props.filterItems("All")}>
                         All
                        </button>
                    </li>
                    <li className="item" >
                        <button onClick={() => this.props.filterItems("breakfast")}   >
                         Breakfast
                        </button>
                    </li>
                    <li className="item">
                        <button onClick={() => this.props.filterItems("lunch")}>
                           Lunch
                        </button>
                    </li>
                    <li className="item">
                        <button onClick={() => this.props.filterItems("shakes")}>
                         Shakes
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Categories;