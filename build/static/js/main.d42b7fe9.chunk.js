(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://i.gifer.com/Fvuq.gif"},{"id":2,"image":"https://media.giphy.com/media/ENjchsyk8aSoE/giphy.gif"},{"id":3,"image":"http://66.media.tumblr.com/tumblr_m66k38eJ9v1r0jeh0o8_250.gif"},{"id":4,"image":"https://i.gifer.com/IyA7.gif"},{"id":5,"image":"https://i.gifer.com/AZcC.gif"},{"id":6,"image":"https://media.giphy.com/media/ZmZxR4C7oYjD2/giphy.gif"},{"id":7,"image":"http://66.media.tumblr.com/tumblr_m66k38eJ9v1r0jeh0o8_250.gif"},{"id":8,"image":"https://media.giphy.com/media/ENjchsyk8aSoE/giphy.gif"},{"id":9,"image":"https://i.gifer.com/Fvuq.gif"},{"id":10,"image":"https://i.gifer.com/IyA7.gif"},{"id":11,"image":"https://i.gifer.com/AZcC.gif"},{"id":12,"image":"https://media.giphy.com/media/ZmZxR4C7oYjD2/giphy.gif"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(3),c=a.n(n),s=a(4),m=a(5),o=a(7),l=a(6),d=a(8);a(14);var u=function(e){return r.a.createElement("div",{className:"card img-container hover"},r.a.createElement("img",{src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore",alt:""}))},g=(a(15),function(e){return r.a.createElement("div",{className:"gameScore"},r.a.createElement("h3",{className:"score"},"Your Score: ",e.total),r.a.createElement("h3",{className:"status"},"Finster Says: ",e.status))});a(16);var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{class:"navbar navbar-light"},r.a.createElement("a",{class:"navbar-brand",id:"navbar",href:"/"},"RECESS CLICKY GAME")),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Play Clicky Game!"),r.a.createElement("p",null,"Click on an image to earn points, but don't click on the same image more than once!")))},h=a(1),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={friends:h,clickedFriendIds:[],score:0,goal:12,status:""},a.shuffleScoreCard=function(e){var t=a.state.clickedFriendIds;if(t.includes(e))a.setState({clickedFriendIds:[],score:0,status:"Game Over!"});else{if(t.push(e),12===t.length)return a.setState({score:12,status:"You Won!",clickedFriendIds:[]}),void console.log("You Win");a.setState({friends:h,clickedFriendIds:t,score:t.length,status:" "});for(var i=h.length-1;i>0;i--){var r=Math.floor(Math.random()*(i+1)),n=[h[r],h[i]];h[i]=n[0],h[r]=n[1]}}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(g,{total:this.state.score,goal:12,status:this.state.status}),r.a.createElement("div",null,r.a.createElement("div",{className:"card-wrapper"},this.state.friends.map(function(t){return r.a.createElement(u,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})}))))}}]),t}(i.Component);a(17);c.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d42b7fe9.chunk.js.map