import React , { Component } from 'react';

class IncDec extends Component
{

    constructor(props)
    {
        super(props);
        this.increaseFont = this.increaseFont.bind(this);
    }
    
    increaseFont(fontsize)
    {
        // if(fontsize > 31 || fontsize < 13)
        // {

        // }
        // else 
        // {
          this.props.onReceiveFontsize(fontsize);
        //}
    }
    render()
    {
        return (
            <div className = "IncDec">
            <div className = "IncDec__title">
                <h4 className = "IncDec__title-name">Fontsize: { this.props.fontsize }</h4>
            </div>
            <div className= 'IncDec__content'>
                <button className = "IncDec__content-Inc">Giảm</button>
                <button className = "IncDec__content-Dec" onClick = { () => this.increaseFont(this.props.fontsize) }>Tăng</button>
            </div>
        </div>  
        );
    }
}

export default IncDec;