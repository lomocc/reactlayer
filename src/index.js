import React from "react";
import ReactDOM from "react-dom";
import Layer from "./Layer";

let $layerCache = {};
let reactlayer = {
  addLayer(layerId = 'default', layerProps=null, container=null){
    if(!$layerCache[layerId]){
      if(!container){
        container = document.body.appendChild(document.createElement('div'));
      }
      container.setAttribute('data-reactlayer', layerId);
      let component = ReactDOM.render(React.createElement(Layer, layerProps), container);
      component.node = container;
      $layerCache[layerId] = component;
    }
    return $layerCache[layerId];
  },
  getLayer(layerId = 'default'){
    return reactlayer.addLayer(layerId);
  },
  removeLayer(layerId = 'default'){
    if($layerCache[layerId]){
      let component = $layerCache[layerId];
      let node = component.node;
      delete $layerCache[layerId];
      ReactDOM.unmountComponentAtNode(node);
      let container = node.parentNode;
      container && container.removeChild(node);
    }
  },
  getNumElements(layerId = 'default'){
    return reactlayer.getLayer(layerId).getNumElements();
  },
  addElement(element, layerId = 'default'){
    return reactlayer.getLayer(layerId).addElement(element);
  },
  getElementAt(index, layerId = 'default'){
    return reactlayer.getLayer(layerId).getElementAt(index);
  },
  getElementIndex(element, layerId = 'default'){
    return reactlayer.getLayer(layerId).getElementIndex(element);
  },
  removeElement(element, layerId = 'default'){
    return reactlayer.getLayer(layerId).removeElement(element);
  },
  removeElementAt(index, layerId = 'default'){
    return reactlayer.getLayer(layerId).removeElementAt(index);
  },
  removeElements(beginIndex, endIndex, layerId = 'default'){
    return reactlayer.getLayer(layerId).removeElements(beginIndex, endIndex);
  }
};
module.exports = reactlayer;
