import React, { Component } from 'react';
import './head.css';

class Head extends Component {
    state = {  }
    changeSortType (type) {
        this.props.sortType(type)
        this.props.description(type)
    }
    changeSpeed (type) {
        this.props.speed(type)
    }

    
    
    render() { 
        return ( <>
        <div className="title">Algorithm Visualizer</div>
        <div className="options">
            <div className="selectAlg">
                <div className="selectTitle">SELECT ALGORITHM</div>
                <div className="selectChoices">
                    <div onClick={()=>this.changeSortType("bubble")} id="bubble" className="choiceSelected">BUBBLE SORT</div>
                    <div onClick={()=>this.changeSortType("selection")} id="selection" className="choice">SELECTION SORT</div>
                    <div onClick={()=>this.changeSortType("merge")} id="merge" className="choice">MERGE SORT</div>
                    <div onClick={()=>this.changeSortType("quick")} id="quick" className="choice">QUICK SORT</div>
                    <div onClick={()=>this.changeSortType("heap")} id="heap" className="choice">HEAP SORT</div>
                </div>
            </div>
            <div className="selectSpeed">
                <div className="selectTitle">SELECT SPEED</div>
                <div className="selectChoices">
                    <div onClick={()=>this.changeSpeed("veryFast")} id="veryFast" className="choiceSelected">VERY FAST</div>
                    <div onClick={()=>this.changeSpeed("fast")} id="fast" className="choice">FAST</div>
                    <div onClick={()=>this.changeSpeed("normal")} id="normal" className="choice">NORMAL</div>
                    <div onClick={()=>this.changeSpeed("slow")} id="slow" className="choice">SLOW</div>
                    <div onClick={()=>this.changeSpeed("molasses")} id="molasses" className="choice">SLOTH</div>
                </div>
            </div>
        </div>
        
        
        
        </> );
    }
}

var nextLineFunc = function(){
    var w = parseInt(window.innerWidth);
    if (w < 750) {
        let choices = document.getElementsByClassName("choice")
        let choicesSelected = document.getElementsByClassName("choiceSelected")
        
        for (let i = 0; i < choices.length; i++) {
            let text = choices[i].innerHTML
            var nextLineChoice = text.replace(" ", "<br />");
            choices[i].innerHTML = nextLineChoice
        }
        for (let i = 0; i < choicesSelected.length; i++) {
            let text = choicesSelected[i].innerHTML
            var nextLineChoiceSelected = text.replace(" ", "<br />");
            choicesSelected[i].innerHTML = nextLineChoiceSelected
        }
    }
    if (w > 750) {
        let choices = document.getElementsByClassName("choice")
        let choicesSelected = document.getElementsByClassName("choiceSelected")
        
        for (let i = 0; i < choices.length; i++) {
            let text = choices[i].innerHTML
            var spaceChoice = text.replace("<br>", " ");
            choices[i].innerHTML = spaceChoice
        }
        for (let i = 0; i < choicesSelected.length; i++) {
            let text = choicesSelected[i].innerHTML
            var spaceChoiceSelected = text.replace("<br>", " ");
            choicesSelected[i].innerHTML = spaceChoiceSelected
        }
    }
   
}
window.addEventListener("resize", nextLineFunc);
window.addEventListener("load", nextLineFunc);


export default Head;