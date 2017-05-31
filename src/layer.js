import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

class LayerComponent extends React.Component{
    static defaultProps = {
        component: 'div'
    };
    state = {
        children:[]
    };
    mount = (element)=>{
        let index = this.state.children.indexOf(element);
        let tempState = this.state;
        if(index != -1){
            tempState = update(tempState, {
                children:{
                    $splice: [[index, 1]]
                }
            });
        }
        tempState = update(tempState, {
            children:{
                $push:[element]
            }
        });
        this.setState(tempState);
        return element;
    };
    unmount = (element)=>{
        let index = this.state.children.indexOf(element);
        if(index != -1){
            let tempState = update(this.state, {
                children:{
                    $splice: [[index, 1]]
                }
            });
            this.setState(tempState);
        }
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
            $layerCache[layerId] = ReactDOM.render(React.createElement(LayerComponent, layerProps), container);
        }
        return $layerCache[layerId];
    },
    getLayer(layerId = 'default', layerProps=null){
        return this.addLayer(layerId, layerProps);
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
    mount(element, layerId = 'default'){
        return this.getLayer(layerId).mount(element);
    },
    unmount(element, layerId = 'default'){
        return this.getLayer(layerId).unmount(element);
    }
};