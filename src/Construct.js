import React from 'react';

export default class Construct extends React.Component{
    constructor()
    {
        super();
        this.state={
            prop:"Army"
        }
    }
  render(){
      return(
          <div>
              Jai Hind{this.state.prop}
          </div>
      )
  }   
}
