import React from 'react';
import './MemoryCard.css';






class MemoryCard extends React.Component{

    render(){
        let innerClass= 'MemoryCard__inner'
        innerClass = this.props.isFlipped ? innerClass += ' flipped': innerClass 
        return (
            <div className= "MemoryCard" onClick={this.props.pickCard}>
                    <div className= {innerClass}>
                        <div className = 'MemoryCard__back'>
                           <div className="logo">👀</div>
                        </div>
                        <div className = 'MemoryCard__front flipped'>
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    }
   

}

export default MemoryCard