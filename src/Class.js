import React from "react";

export default class Class extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log("life cycle");
    }
    render(){
        return(
         <div>
             <h1>
                Hello Components!!!
             </h1>
         </div>
        );
    };
};