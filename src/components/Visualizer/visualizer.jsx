import React, { Component } from 'react';
import './visualizer.css';

class Visualizer extends Component {
    state = { }
    createRandomArray () {
      this.props.createArray()
    }
    handleSortMain () {
      this.props.sortMain()
    }
   
    render() { 
      const array = this.props.array;
      return (<> <div className="visualizerContainer">
        <div className="visualizer">
          {array.map((value, idx) => (
            <div
              style={{ height: value + "px" }}
              className="line"
              key={idx}
            ></div>
          ))}
        </div>
      
        </div> 
        
        <div className="btnContainer">
          <div onClick={() => this.createRandomArray()} className="btn">GENERATE NEW SET</div>
          <div onClick={() => this.handleSortMain()} className="btn">START SORTING</div>
        </div>
      <div className="description">
        <div className="descriptionText">{this.props.description}</div>
      </div>
        </>
      );
    }
}
 


export default Visualizer;