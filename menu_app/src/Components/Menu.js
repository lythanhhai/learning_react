import React, { Component } from 'react';

class Menu extends Component
{
    render()
    {
        var elmItems = this.props.items.map((item) => {
           const {id,title,category,price,img,desc} = item;
           return(
               <div className="itemMenu" key={id}>
                  <img src= {img} alt={title}/>
                  <div className="info">
                        <div className="header">
                            <span className="title">{title}</span>
                            <span className="price">{price}</span>
                        </div>
                        <div className="line"></div>
                        <p className = "desc">{desc}</p>
                  </div>
               </div>
           );
        });
        return(
            <div className = "menu">
              { elmItems }
            </div>
        );
    }
}

export default Menu;