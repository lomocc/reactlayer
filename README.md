# reactlayer
react layer tool

一个基于用于添加层的 react 工具
## 安装
```javascript
npm install reactlayer -S
```
## 使用方法
``` javascript
import {modal, layer} from 'reactlayer';
// new element with modal
modal.addElement(<div className="popup">popup</div>);

// new element with layer
let newLayer = layer.addLayer('tooltipLayer', {component: 'div'});
newLayer.addElement(<div className="popup">popup</div>);
```
