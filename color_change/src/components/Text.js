import React, { Component } from 'react';

class Text extends Component
{
    constructor(props)
    {
        super(props);
        this.showColor = this.showColor.bind(this);
    }
    showColor(color)
    {
        return (
            {color : color}
        );
    }
    render()
    {
        return (
            <div className = "text">
               <p className = "text__title">Color: { this.props.color } - Fontsize: { this.props.fontsize }</p>
               <input className = "text__input" placeholder = "Nội dung setting" style = { this.showColor(this.props.color) }/>
            </div>
        );
    }
}

export default Text;