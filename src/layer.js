import React from "react";
import ReactDOM from "react-dom";
import update from "react-addons-update";

class Layer extends React.Component{
  static defaultProps = {
    component: 'div'
  };
  state = {
    children:[]
  };
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
  render() {
    let {component:Component, ...others} = this.props;
    let {children} = this.state;
    return (
      <Component {...others}>
        {
          React.Children.map(children, (element, index)=>React.cloneElement(element, {key:index}))
        }
      </Component>);
  }
}

let $layerCache = {};
export default {
  addLayer(layerId = 'default', layerProps=null, container=null){
    if(!$layerCache[layerId]){
      if(!container){
        container = document.body.appendChild(document.createElement('div'));
      }
      container.setAttribute('data-reactlayer', layerId);
      $layerCache[layerId] = ReactDOM.render(React.createElement(Layer, layerProps), container);
    }
    return $layerCache[layerId];
  },
  getLayer(layerId = 'default'){
    return this.addLayer(layerId);
  },
  removeLayer(layerId = 'default'){
    if($layerCache[layerId]){
      let layer = $layerCache[layerId];
      delete $layerCache[layerId];
      let node = ReactDOM.findDOMNode(layer);
      ReactDOM.unmountComponentAtNode(node);
      let container = node.parentNode;
      container.parentNode && container.parentNode.removeChild(container);
      return layer;
    }
  },
  addElement(element, layerId = 'default'){
    return this.getLayer(layerId).addElement(element);
  },
  removeElement(element, layerId = 'default'){
    return this.getLayer(layerId).removeElement(element);
  }
};
