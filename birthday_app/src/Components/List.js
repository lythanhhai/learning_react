import React, { Component } from 'react'

class List extends Component
{
    render()
    {
        var elmPeople = this.props.people.map((person) => {
            const {id,name,age,image} = person;
            return(
                <div className = "box" key = {id}>
                    <img src = {image} />
                    <div className = "info">
                      <span className = "name">
                        {name}
                      </span>
                      <span className = "age">
                        {age}
                      </span>
                    </div>
                </div>
            );
        });
        return(<div className = "list">
         {elmPeople}
        </div>);
    }
}

export default List;