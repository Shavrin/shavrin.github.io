(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c),i=function(){return l.a.createElement("img",{className:"profilePicture",src:"./profile.jpg",alt:"My face."})},o=function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement(i,null),l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Kacper Olek"),l.a.createElement("p",{className:"description"},"Web Developer")))},u=n(4),s=n(5),m=n(8),d=n(6),E=n(1),f=n(7),h=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).ref=l.a.createRef(),n.state={isInViewport:!1,eventAttached:!1},n.checkIfInViewport=n.checkIfInViewport.bind(Object(E.a)(n)),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.checkIfInViewport,!1),this.setState({eventAttached:!0})}},{key:"componentWillUnmount",value:function(){this.state.eventAttached&&window.removeEventListener("scroll",this.checkIfInViewport,!1)}},{key:"checkIfInViewport",value:function(){var e=this.refs.ref.getBoundingClientRect();e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&(this.setState({isInViewport:!0,eventAttached:!1}),window.removeEventListener("scroll",this.checkIfInViewport,!1)),console.log(1)}},{key:"render",value:function(){var e="skill"+(this.state.isInViewport?" animate":"");return l.a.createElement("div",{className:e,ref:"ref"},l.a.createElement("div",{className:"skillBar"}))}}]),t}(l.a.Component),p=function(){return l.a.createElement("div",{className:"skills"},l.a.createElement(h,null),l.a.createElement(h,null),l.a.createElement(h,null),l.a.createElement(h,null))},v=function(e){return l.a.createElement("div",{className:"project"},l.a.createElement("h2",null,"Title"))},w=function(){return l.a.createElement("div",{className:"projects"},l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null),l.a.createElement(v,null))},k=function(){return l.a.createElement("footer",null)},I=function(){return l.a.createElement("div",null,l.a.createElement(o,null)," ",l.a.createElement(p,null)," ",l.a.createElement(w,null)," ",l.a.createElement(k,null))};r.a.render(l.a.createElement(I,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cfe63f92.chunk.js.map