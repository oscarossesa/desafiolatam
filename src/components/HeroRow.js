import React, { Component } from 'react';

class HeroRow extends Component {
   constructor(props) {
      super(props);

      console.log('HeroRow');
      console.log(props);

      // this.state = {
      //    characters: this.props,
      //    showRings: true,
      // }
   }

   handleOnClickRing = () => {
      console.log('handleOnClickRing');

      console.log(this.props.id);
      //this.props.onUseRing(this.props.id)
   }

   handleOnClickKill = () => {
      console.log('handleOnClickKill')
      this.props.onUseKill(this.props.id)
   }

   render() {
      const { name, race, age, weapon } = this.props;

      return (
         <tr className='character-row'>
            <td>{name}</td>
            <td>{race}</td>
            <td>{age}</td>
            <td>{weapon}</td>
            <td>
               <div className='controls'>
                  <div onClick={this.handleOnClickKill}> ☠ Kill</div>
                  {this.props.showRings ?
                     <div onClick={this.handleOnClickRing}><span role='img' aria-label='icono'>💍</span> Use Ring</div> :
                     null}
               </div>
            </td>
         </tr>
      );
   }

}

export default HeroRow;