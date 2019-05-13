function ss(){
    return {
        set:set,
        get:get,
        configurable: true,
    };
    function get(){
        console.log(1111111)
    }
    function set(val){
        return val
    }
}
// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class Misstress extends React.Component{
//   findClick=e=>{
//     e.persist();
//     console.log('REACT',e)
//     console.log('REACT isPersistent',e.isPersistent())
//     console.log('REACT',e.constructor.extend())
//     console.log('====>>>>',e.getModifierState())
//     console.log(e.movementX)
//   }
//   componentDidMount(){
//     document.querySelector('.yoha').addEventListener('click',function(e){
//       console.log('==>>>',e.getModifierState('aaaa'))
//       // console.log('NATIVE',e)
//       // console.log('NATIVE',e.constructor)
//       // console.log('NATIVE 是否调用了preventDefault',e.defaultPrevented)
//       // console.log('NATIVE bubbles',e.bubbles)
//       // console.log('NATIVE cancelable 取消默认行为',e.cancelable)
//       // console.log('NATIVE cancelBubble stopPropagation',e.cancelBubble)
//       // console.log('NATIVE currentTartget 绑定的元素',e.currentTarget)
//       // console.log('NATIVE target 触发的元素',e.target)
//       // console.log('NATIVE 事件在哪一个阶段0、1、2、3',e.eventPhase)
//       // console.log('NATIVE isTrusted',e.isTrusted)
//       // console.log('NATIVE timeStamp',e.timeStamp)
//       // console.log('NATIVE type',e.type)
//     })
//   }
//   render(){
//     return (
//       <div>
//         <h1 onClick={this.findClickD}>DID TOUCH WORD</h1>
//         <h1 onClick={this.findClick}>WHAT HAPPEDED WHEN CLICK <span>落</span> </h1>
//         <h1 className="yoha" ref={c=>this.sunmmer=c}>REALLY EVENT OF WINDOW <span>大江大河</span> </h1>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <Misstress></Misstress>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
// function Class(){
//   return 'fffff'
// }
// console.log(Class())
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
