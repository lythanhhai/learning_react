import React, { useState, useEffect, Component } from "react";

class Info extends Component {
  render() {
    // var elmInfo = this.props.Info.map((info) => {
    //   const { id, image, name, position, script } = info;

    //     return (
    //       <div className="info" key={id}>
    //         <img src={image} alt=":v" />
    //         <span className="name"> {name} </span>
    //         <span className="position"> {position} </span>
    //         <p className="script"> {script} </p>
    //       </div>
    //     );

    // });
    const { id, image, name, position, script } = this.props.Info;
    // var elmInfo = () => {
    //   return (
    //     <div className="info" key={id}>
    //       <img src={image} alt=":v" />
    //       <span className="name"> {name} </span>
    //       <span className="position"> {position} </span>
    //       <p className="script"> {script} </p>
    //     </div>
    //   );
    // }

    // var elmInfo;
    // for(var i = 1 ; i <= this.props.Info.length ; i++)
    // {
    //     console.log(i);
    //    if(count === i)
    //    {
    //     const { id, image, name, position, script } = this.props.Info[i];
    //     elmInfo = () => {
    //         return (
    //             <div className="info" key={id}>
    //               <img src={image} alt=":v" />
    //               <span className="name"> {name} </span>
    //               <span className="position"> {position} </span>
    //               <p className="script"> {script} </p>
    //             </div>
    //           );
    //     };
    //     break;
    //    }
    // }

    return (
      <div className="list">
        <div className="info" key={id}>
          <img src={image} alt=":v" />
          <span className="name"> {name} </span>
          <span className="position"> {position} </span>
          <p className="script"> {script} </p>
        </div>
      </div>
    );
  }
}

export default Info;
