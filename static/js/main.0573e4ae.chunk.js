(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Ankor Vat","image":"../images/ankor-vat.jpg"},{"id":2,"name":"Big Ben","image":"../images/big-ben.jpg"},{"id":3,"name":"Bridge Bay","image":"../images/golden-gate.jpg"},{"id":4,"name":"Effiel Tower","image":"../images/eiffel.jpg"},{"id":5,"name":"Giza Pyramid","image":"../images/giza-pyramid.jpg"},{"id":6,"name":"Windmill of Denmark","image":"../images/windmill.jpg"},{"id":7,"name":"Leaning Tower of Pisa","image":"../images/leaning-tower-pisa.jpg"},{"id":8,"name":"Heidelberg Castle","image":"../images/heidelberg-castle.jpg"},{"id":9,"name":"Opera House","image":"../images/opera-house.jpg"},{"id":10,"name":"Statue of Liberty","image":"../images/liberty-statue.jpg"},{"id":11,"name":"Christ the Redeemer","image":"../images/christ.jpg"},{"id":12,"name":"Taj Mahal","image":"../images/taj-mahal.jpg"}]')},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(3),s=t.n(r),c=t(4),m=t(5),l=t(7),o=t(6),d=t(8);t(14);var g=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};t(15);var u=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"})))},p=t(1),f=(t(16),function(e){return n.a.createElement("div",{className:"gameScore"},n.a.createElement("h3",{className:"score"},"Your Score  ",e.total),n.a.createElement("h3",{className:"status"},e.status))});t(17);var h=function(e){return n.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)},k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={friends:p,clickedFriendIds:[],score:0,goal:12,status:""},t.shuffleScoreCard=function(e){var a=t.state.clickedFriendIds;if(a.includes(e))t.setState({clickedFriendIds:[],score:0,status:"Oops you clicked the same image twice!! Click to play again!"});else{if(a.push(e),12===a.length)return t.setState({score:12,status:"You have an awesome memory!!! Click to play again!",clickedFriendIds:[]}),void console.log("You Win");t.setState({friends:p,clickedFriendIds:a,score:a.length,status:" "});for(var i=p.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),r=[p[n],p[i]];p[i]=r[0],p[n]=r[1]}}},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(h,{backgroundImage:"../images/starry-skies.jpg"},n.a.createElement("h1",{className:"App-title"},"Memory Game"),n.a.createElement("h2",{className:"App-intro"},"Click an image to score a point. Click it twice and you loose!!"))),n.a.createElement(f,{total:this.state.score,goal:12,status:this.state.status}),n.a.createElement(g,null,this.state.friends.map((function(a){return n.a.createElement(u,{shuffleScoreCard:e.shuffleScoreCard,id:a.id,key:a.id,image:a.image})}))))}}]),a}(i.Component);t(18);s.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0573e4ae.chunk.js.map