import React from "react";
import update from "react-addons-update";
import Modal from "./Modal";

class Layer extends React.Component{
  state = {
    children:[]
  };
  getNumElements(){
    return this.state.children.length;
  }
  addElement = (element)=>{
    this.setState((state)=>{
      let index = state.children.indexOf(element);
      if(index != -1){
        state = update(state, {
          children:{
            $splice: [[index, 1]]
          }
        });
      }
      state = update(state, {
        children:{
          $push:[element]
        }
      });
      return state;
    });
    return element;
  };
  getElementAt(index) {
    let children = this.state.children;
    if (children.length == 0) {
      return null;
    }
    return children[index];
  }
  getElementIndex(element) {
    let children = this.state.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i] == element)
        return i;
    }
    return -1;
  }
  removeElement = (element)=>{
    this.setState((state)=>{
      let index = state.children.indexOf(element);
      if(index != -1){
        return update(state, {
          children:{
            $splice: [[index, 1]]
          }
        });
      }
      return state;
    });
    return element;
  };
  removeElementAt(index) {
    let child = this.getElementAt(index);
    return this.removeElement(child);
  }
  removeElements(beginIndex=0, endIndex=-1) {
    let children = this.state.children;
    if(endIndex == -1 || endIndex > children.length - 1){
      endIndex = children.length - 1;
    }
    let elements = [];
    for (let i = endIndex; i >= beginIndex; i--) {
      elements.push(this.removeElement(children[i]));
    }
    return elements;
  }
  render() {
    let {children} = this.state;
    return (
      <Modal {...this.props}>
        {
          React.Children.map(children, (element, index)=>React.cloneElement(element, {key:index}))
        }
      </Modal>);
  }
}
module.exports = Layer;
