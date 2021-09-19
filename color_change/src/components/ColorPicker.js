import React , { Component } from 'react';

class ColorPicker extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            color: ["red", "blue" , "green" , "grey"]
        }
        //this.showColorPicker = this.showColorPicker.bind(this);
        //this.showClassBlock = this.showClassBlock.bind(this);
         //this.showActiveBlock = this.showActiveBlock.bind(this);
        //this.showColorActive = this.showColorActive.bind(this);
    }
    // showColorPicker(color)
    // {
    //     return { backgroundColor: "red"};
    //     //console.log(color);
    // }
    showClassBlock(index)
    {
        switch(index)
        {
            case 0: return "picker__content-block1";break;
            case 1: return "picker__content-block2";break;
            case 2: return "picker__content-block3";break;
            case 3: return "picker__content-block4";break;
            default : break;
        }
    }
    showActiveBlock(color)
    {
        if(color === this.props.color)
        {
            return ' ' + 'active';
        }
    }
    showColorActive(color)
    {
        this.props.onReceiveColor(color);
    }
    render()
    {
        var elmColors = this.state.color.map((color,index) => {
           return (
            <div key = {index}
                 className = { this.showClassBlock(index) }
                 onClick = { () => this.showColorActive(color) }
                //  color === "red" ? this.showClassBlock(index) + this.showActiveBlock(color) : this.showClassBlock(index)
            >
            </div>
           );
        });
        return (
        <div className = "picker">
            <div className = "picker__title">
                <h4 className = "picker__title-name">Color Picker</h4>
            </div>
            <div className= 'picker__content'>
                { elmColors }
            </div>
        </div>
        );
    }
    
}

export default ColorPicker;

// <div className = 'picker__content-block1'>
//                 </div>
//                 <div className = 'picker__content-block2'>
//                 </div>
//                 <div className = 'picker__content-block3'>
//                 </div>
//                 <div className = 'picker__content-block4'>
//                 </div>