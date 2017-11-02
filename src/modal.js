/**
 * Created by Administrator on 2016/12/26.
 */
import React from "react";
// import defaultStyle from "./modal.less";
// import layer from "./layer";
import assign from "object-assign";

class Modal extends React.Component{
  static defaultProps = {
    component: 'div',
    componentProps: {},
    maskComponent: 'div',
    maskComponentProps: {}
  };
  render(){
    let {children, component:Component, componentProps, maskComponent:MaskComponent, maskComponentProps, style, ...others} = this.props;
    let maskStyle = assign({
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }, maskComponentProps.style);

    let componentStyle = assign({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }, componentProps.style);

    style = assign({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }, style);
    let hasChildren = children.length > 0;
    return hasChildren && (
      <div style={style} {...others}>
        <MaskComponent {...maskComponentProps} style={maskStyle}/>
        <Component {...componentProps} style={componentStyle}>
          {children}
        </Component>
      </div>
    );
  }
}
module.exports = Modal;
// export default layer.addLayer('modal', {component: Modal});
