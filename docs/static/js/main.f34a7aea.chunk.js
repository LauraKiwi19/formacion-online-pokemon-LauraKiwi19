(this["webpackJsonpformacion-online-1"]=this["webpackJsonpformacion-online-1"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(3),m=t.n(i),l=(t(14),t(4)),r=t(5),c=t(8),s=t(6),p=t(1),u=t(7),_=(t(15),t(16),function(e){return o.a.createElement("div",{className:"pokemon__card"},o.a.createElement("div",{className:"pokemon__preview"},o.a.createElement("img",{className:"pokemon__picture",src:e.picture,alt:e.name}),o.a.createElement("h5",{className:"pokemon__id"},"ID/",e.id)),o.a.createElement("div",{className:"pokemon__name-container"},o.a.createElement("h2",{className:"pokemon__name"},e.name.charAt(0).toUpperCase()+e.name.slice(1)),o.a.createElement("ul",{className:"pokemon__types-list"},function(e){return e.type.map((function(e,n){return"poison"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__poison",key:n},e.type.name):"grass"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__grass",key:n},e.type.name):"water"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__water",key:n},e.type.name):"bug"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__bug",key:n},e.type.name):"fire"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__fire",key:n},e.type.name):"flying"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__flying",key:n},e.type.name):"normal"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__normal",key:n},e.type.name):"electric"===e.type.name?o.a.createElement("li",{className:"pokemon__list-item pokemon__electric",key:n},e.type.name):void 0}))}(e))))}),k=(t(17),function(e){return e.inputValue.length>1?o.a.createElement("ul",{className:"pokemon__list-container"},e.pokemons.filter((function(n){return n.name.includes(e.inputValue)})).map((function(e,n){return o.a.createElement(_,{key:n,name:e.name,id:e.id,picture:e.picture,type:e.type})}))):o.a.createElement("ul",{className:"pokemon__list-container"},e.pokemons.map((function(e,n){return o.a.createElement(_,{key:n,name:e.name,id:e.id,picture:e.picture,type:e.type})})))}),y=function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=25").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return{name:e.name,id:e.id,picture:e.sprites.front_default,type:e.types}}))}))}))},f=(t(18),function(e){return o.a.createElement("input",{className:"pokemon__filter",type:"text",placeholder:"Search your Pokemon",onChange:e.handleInputValue})}),h=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(s.a)(n).call(this,e))).state={pokemons:[],inputValue:""},t.handleInputValue=t.handleInputValue.bind(Object(p.a)(t)),t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;y().then((function(e){return Promise.all(e)})).then((function(n){e.setState({pokemons:n})}))}},{key:"handleInputValue",value:function(e){var n=e.target.value;this.setState({inputValue:n}),console.log(this.state.pokemons)}},{key:"render",value:function(){return o.a.createElement("div",{className:"pokemon__container"},o.a.createElement("h1",{className:"pokemon__title"},"Pok\xe9dex"),o.a.createElement(f,{handleInputValue:this.handleInputValue}),o.a.createElement(k,{inputValue:this.state.inputValue,pokemons:this.state.pokemons}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f34a7aea.chunk.js.map