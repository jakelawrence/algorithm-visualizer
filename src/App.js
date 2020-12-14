import React, { Component } from 'react';
import Head from './components/Head/head.jsx'
import Visualizer from './components/Visualizer/visualizer.jsx'

import './App.css';
import { mergeSortMain } from "./sortingAlgorithms/mergeSort.js";
import { quickSortMain } from "./sortingAlgorithms/quickSort.js";
import { selectionSortMain } from "./sortingAlgorithms/selectionSort.js";
import { bubbleSortMain } from "./sortingAlgorithms/bubbleSort.js";
import { heapSortMain } from "./sortingAlgorithms/heapSort.js";

const SIZE = 200;
const MIN = 1;
const MAX = 300;
const COLOR_1 = "#ffd900";
const COLOR_3 = "black";
const COLOR_4 = "red";

const bubbleSortDesciption = "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements \"bubble\" to the top of the list."
const selectionSortDesciption = "Selection sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right."
const mergeSortDesciption = "Merge sort is a divide and conquer algorithm that splits the list into two (nearly) equal halves and recursively divides those two lists until the lists are at their smallest unit (1). Then it compares each element with the adjacent list to sort and merge the two adjacent lists."
const quickSortDesciption = "Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively."
const heapSortDesciption = "Heap sort can be thought of as an improved selection sort: like selection sort, heap sort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heap sort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step."



class App extends Component {
  state = { 
    array: [],
    animation_speed: 0.1,
    sortingType: "bubble",
    sortingInProgress: false,
    isSorted: false,
    sortingButton: "Start Sorting",
    description: selectionSortDesciption
  }
  componentDidMount() {
    this.createRandomArray();
  }
  createRandomArray() {
    const array = [];
    for (let i = 0; i < SIZE; i++) {
      array.push(randomNumber(MIN, MAX));
    }
    this.setState({ array });
  }
  handleSortMain() {
    switch (this.state.sortingType) {
      case "bubble":
        const animateBubble = bubbleSortMain(this.state.array);
        this.handleSortAnimation(animateBubble.animate, animateBubble.sortedArray);
        break;
      case "selection":
        const animateSelection = selectionSortMain(this.state.array);
        this.handleSortAnimation(animateSelection.animate, animateSelection.sortedArray);
        break;
      case "merge":
        const animateMerge = mergeSortMain(this.state.array);
        this.handleSortAnimation(animateMerge.animate, animateMerge.sortedArray);
        break;
      case "quick":
        const animateQuick = quickSortMain(this.state.array);
        this.handleSortAnimation(animateQuick.animate, animateQuick.sortedArray);
        break;
      case "heap":
        const animateHeap = heapSortMain(this.state.array);
        this.handleSortAnimation(animateHeap.animate, animateHeap.sortedArray);
        break;
      default:
        break;
    }
  }
  handleSortAnimation(animateAlg, sortedArray) {
    for (let i = 0; i < animateAlg.length; i++) {
      let lines = document.getElementsByClassName("line");
      let line = null;
      let line_id = null;
      switch (animateAlg[i].type) {
        case "swap":
          line_id = animateAlg[i].id;
          let newHeight = animateAlg[i].height;
          line = lines[line_id].style;
          setTimeout(() => {
            line.height = "" + newHeight + "px";
          }, i * this.state.animation_speed);
          break;
        case "search":
          line_id = animateAlg[i].id;
          line = lines[line_id].style;
          setTimeout(() => {
            line.backgroundColor = COLOR_3;
          }, i * this.state.animation_speed);
          break;
        case "search_2":
          line_id = animateAlg[i].id;
          line = lines[line_id].style;
          setTimeout(() => {
            line.backgroundColor = COLOR_4;
          }, i * this.state.animation_speed);
          break;
        case "unsearch":
          line_id = animateAlg[i].id;
          line = lines[line_id].style;
          setTimeout(() => {
            line.backgroundColor = COLOR_1;
          }, i * this.state.animation_speed);
          break;
        default:
          break;
      }
    }
    this.setState({array: sortedArray})
  }
  changeSortType(sortType) {
    this.setState({ sortingType: sortType });
    switch (sortType) {
      case "merge":
        document.getElementById("bubble").className = "choice";
        document.getElementById("selection").className = "choice";
        document.getElementById("merge").className = "choiceSelected";
        document.getElementById("quick").className = "choice";
        document.getElementById("heap").className = "choice";

        break;
      case "selection":
        document.getElementById("bubble").className = "choice";
        document.getElementById("selection").className = "choiceSelected";
        document.getElementById("merge").className = "choice";
        document.getElementById("quick").className = "choice";
        document.getElementById("heap").className = "choice";

        break;
      case "quick":
        document.getElementById("bubble").className = "choice";
        document.getElementById("selection").className = "choice";
        document.getElementById("merge").className = "choice";
        document.getElementById("quick").className = "choiceSelected";
        document.getElementById("heap").className = "choice";

        break;
      case "bubble":
        document.getElementById("bubble").className = "choiceSelected";
        document.getElementById("selection").className = "choice";
        document.getElementById("merge").className = "choice";
        document.getElementById("quick").className = "choice";
        document.getElementById("heap").className = "choice";

        break;
      case "heap":
        document.getElementById("bubble").className = "choice";
        document.getElementById("selection").className = "choice";
        document.getElementById("merge").className = "choice";
        document.getElementById("quick").className = "choice";
        document.getElementById("heap").className = "choiceSelected";

        break;

      default:
        break;
    }
  }
  changeSpeed(speed) {
    switch (speed) {
      case "veryFast":
        this.setState({ animation_speed: 0.1 });
        document.getElementById("veryFast").className = "choiceSelected";
        document.getElementById("fast").className = "choice";
        document.getElementById("normal").className = "choice";
        document.getElementById("slow").className = "choice";
        document.getElementById("molasses").className = "choice";
        break;
      case "fast":
        this.setState({ animation_speed: 0.2 });
        document.getElementById("veryFast").className = "choice";
        document.getElementById("fast").className = "choiceSelected";
        document.getElementById("normal").className = "choice";
        document.getElementById("slow").className = "choice";
        document.getElementById("molasses").className = "choice";
        break;
      case "normal":
        this.setState({ animation_speed: 0.5 });
        document.getElementById("veryFast").className = "choice";
        document.getElementById("fast").className = "choice";
        document.getElementById("normal").className = "choiceSelected";
        document.getElementById("slow").className = "choice";
        document.getElementById("molasses").className = "choice";
        break;
      case "slow":
        this.setState({ animation_speed: 4 });
        document.getElementById("veryFast").className = "choice";
        document.getElementById("fast").className = "choice";
        document.getElementById("normal").className = "choice";
        document.getElementById("slow").className = "choiceSelected";
        document.getElementById("molasses").className = "choice";
        break;
      case "molasses":
        this.setState({ animation_speed: 7 });
        document.getElementById("veryFast").className = "choice";
        document.getElementById("fast").className = "choice";
        document.getElementById("normal").className = "choice";
        document.getElementById("slow").className = "choice";
        document.getElementById("molasses").className = "choiceSelected";
        break;  
      default:
        break;
    }
  }
  changeDescription(description){
    switch (description) {
      case "bubble":
        this.setState({ description: bubbleSortDesciption });
        break;
      case "selection":
        this.setState({ description: selectionSortDesciption });
        break;
      case "merge":
        this.setState({ description: mergeSortDesciption });
        break;
      case "quick":
        this.setState({ description: quickSortDesciption });
        break;
      case "heap":
        this.setState({ description: heapSortDesciption });
        break;
      default:
        break;
    }
  }
  render() { 
    return (
      <div className="App">
        <div className="main">
          
          <Head
          sortType={this.changeSortType.bind(this)}
          speed={this.changeSpeed.bind(this)}
          description={this.changeDescription.bind(this)}
          />
          <Visualizer
          createArray={this.createRandomArray.bind(this)}
          sortMain={this.handleSortMain.bind(this)}
          array={this.state.array}
          description={this.state.description}
          />
          
        </div>
        
        
      </div>
    );
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default App;
