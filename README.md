# reactlayer
react layer tool

一个基于用于添加层的 react 工具
## 安装
```javascript
npm install reactlayer -S
```
## 使用方法
``` javascript
import reactlayer from 'reactlayer';
// new element with default
reactlayer.addElement(<div className="popup">popup</div>);

// new element with tooltipLayer
let newLayer = reactlayer.addLayer('tooltipLayer');
newLayer.addElement(<div className="popup">popup</div>);
```
