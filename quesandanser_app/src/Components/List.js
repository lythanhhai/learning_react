import React , { Component } from 'react'
import Answer from './Answer';

class List extends Component
{
    constructor()
    {
        super();
        this.state = {
            onClicked1: false,
        }
        this.more = this.more.bind(this);
        this.increase = this.increase.bind(this);
        
    }
    more = (answer) => {
       return(
           <p className = "answer"> { answer }</p>
           );
    };
    increase = (count) => {
       count++;
       return count;
    }
    render()
    {
        var count = 0;
        var elmQuestion = this.props.question.map((question1) => {
            const {id,question,answer} = question1;
            
            return(
                <div className= "question" key = {id}>
                    <div className = "header">
                        <p className = "nameQues"> { question } </p>
                        <div className="more" onClick = { this.increase(count) }>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>

                    { count === 0 ? <p className = "answer"> { answer }</p> : "" }
                </div>
            );
        });
        if(count === 1)
        {
            return (
                <div className = "list">
                  { elmQuestion }
    
                </div>
            );
        }
        return (
            <div className = "list">
             { elmQuestion }
            </div>
        );
    }
}
export default List;