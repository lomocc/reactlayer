/**
 * Created by Administrator on 2016/12/26.
 */
import React from 'react';
import defaultStyle from './modal.less';
import layer from './layer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import assign from 'object-assign';

class ModalContainer extends React.Component{
  render(){
    let {children, overrideStyle, ...others} = this.props;
    let style = assign({}, defaultStyle, overrideStyle);
    return (
      <Element {...others}>
        {
          children.length > 0 && <div className={style.modalMask}/>
        }
        <ReactCSSTransitionGroup
          transitionName={{
                    enter: style.modalEnter,
                    enterActive: style.modalEnterActive,
                    leave: style.modalLeave,
                    leaveActive: style.modalLeaveActive
                }}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          className={style.modalContainer}>
          {children}
        </ReactCSSTransitionGroup>
      </Element>
    );
  }
}
export default layer.addLayer('modal', {component: ModalContainer});