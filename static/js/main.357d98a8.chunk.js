(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/SZCZESNY_501x752.png",clicked:!1},{id:2,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/Chiellini_501x752.png",clicked:!1},{id:3,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/Barzagli_501x752.png",clicked:!1},{id:4,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/PJANIC_501x752.png",clicked:!1},{id:5,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/KHEDIRA_501x752.png",clicked:!1},{id:6,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/Matuidi_501x752.png",clicked:!1},{id:7,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/Costa_501x752.png",clicked:!1},{id:8,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/Cuadrado_501x752.png",clicked:!1},{id:9,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/MANDZUKIC_501x752.png",clicked:!1},{id:10,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/Dybala_501x752.png",clicked:!1},{id:11,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/RONALDO_501x752.png",clicked:!1},{id:12,image:"https://www.juventus.com/media/images/posati/stagione-2018-19/501x752/SANDRO_501x752.png",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(3),r=n.n(c),o=n(4),s=n(5),l=n(7),u=n(6),m=n(8),d=(n(15),function(e){return i.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),g=(n(17),function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/clicky-game/"},e.title)),i.a.createElement("li",{id:"rw",className:e.correct?"correct":e.incorrect?"incorrect":""},e.rightWrong),i.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),i.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),h=(n(19),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),p=(n(21),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),f=function(e){return i.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){return i.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return i.a.createElement("div",{key:t,className:t},e.children)},v=n(1);n(23);var S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={friends:v,currentScore:0,topScore:0,rightWrong:"Click an image to begin!",clicked:[],correct:!1,incorrect:!1},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e),rightWrong:"You guessed correctly!",correct:!0})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e}),e>=n.state.topScore&&n.setState({topScore:e}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"You guessed incorrectly!",correct:!1,clicked:[],incorrect:!0}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(v);n.setState({friends:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(g,{title:"Juventus Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong,correct:this.state.correct,incorrect:this.state.incorrect}),i.a.createElement(p,null,"Click on an image to earn points, but don't click on any more than once!"),i.a.createElement(f,null,i.a.createElement(w,null,this.state.friends.map(function(t){return i.a.createElement(k,{size:"md-3 sm-6"},i.a.createElement(d,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(a.Component);n(25);r.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.357d98a8.chunk.js.map