(this["webpackJsonpformacion-online-1"]=this["webpackJsonpformacion-online-1"]||[]).push([[0],{23:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(15),r=n.n(l),i=n(6),c=(n(28),n(16)),m=n(17),s=n(21),u=n(18),p=n(8),h=n(22),_=n(5),d=(n(29),n(30),function(e){return e.types.map((function(e,t){return o.a.createElement("li",{className:"pokemon__list-item pokemon__".concat(e.type.name),key:t},e.type.name)}))});var k=function(e){return o.a.createElement("div",{className:"pokemon__card"},o.a.createElement(i.b,{className:"pokemon__link",to:"/pokemon/".concat(e.id)},o.a.createElement("div",{className:"pokemon__preview"},o.a.createElement("img",{className:"pokemon__picture",src:e.picture,alt:e.name}),o.a.createElement("h5",{className:"pokemon__id"},"ID/",e.id)),o.a.createElement("div",{className:"pokemon__name-container"},o.a.createElement("h2",{className:"pokemon__name"},e.name.charAt(0).toUpperCase()+e.name.slice(1)),o.a.createElement("ul",{className:"pokemon__types-list"},o.a.createElement(d,{types:e.type})),o.a.createElement("p",null,null===(t=e.species.evolves_from)?null:o.a.createElement("p",{className:"pokemon__evolution"},"Evolves from: ",o.a.createElement("strong",null,t.name.charAt(0).toUpperCase()+t.name.slice(1))," ")))));var t},f=(n(36),function(e){return console.log(e),e.inputValue.length>1?o.a.createElement("ul",{className:"pokemon__list-container"},e.pokemons.filter((function(t){return t.name.includes(e.inputValue)})).map((function(e,t){return o.a.createElement(k,{key:t,name:e.name,id:e.id,picture:e.picture,type:e.type,species:e.species})}))):o.a.createElement("ul",{className:"pokemon__list-container"},e.pokemons.slice(0,25).map((function(t,n){return o.a.createElement(k,{key:n,pokemons:e.pokemons,name:t.name,id:t.id,picture:t.picture,type:t.type,species:t.species})})))});var E=function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return(t=e.name,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(t)).then((function(e){return e.json()})).then((function(e){return{evolves_from:e.evolves_from_species,habitat:e.habitat.name,shape:e.shape,evolution_chain:e.evolution_chain.url}}))).then((function(t){return{name:e.name,id:e.id,picture:e.sprites.front_default,type:e.types,heigth:e.height,weight:e.weight,species:t}}));var t}))}))}))},v=(n(37),function(e){return o.a.createElement("input",{className:"pokemon__filter",type:"text",placeholder:"Search your Pokemon",onChange:e.handleInputValue})});n(38);var y=function(e){return console.log(e),void 0===e.pokemon?o.a.createElement("h1",null,"Cargando..."):o.a.createElement("div",{className:"detail__container"},o.a.createElement("h2",{className:"detail__name"},e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1)),o.a.createElement("img",{className:"detail__picture",src:e.pokemon.picture,alt:e.pokemon.name}),o.a.createElement("p",{className:"detail__id"},"ID: ",e.pokemon.id),o.a.createElement(d,{types:e.pokemon.type}),o.a.createElement("ul",{className:"detail__list"},o.a.createElement("li",{className:"detail__list-item"},o.a.createElement("strong",null,"Habitat:")," ",e.pokemon.species.habitat.charAt(0).toUpperCase()+e.pokemon.species.habitat.slice(1)),o.a.createElement("li",{className:"detail__list-item"},o.a.createElement("strong",null,"Heigth:")," ",e.pokemon.heigth,"'"),o.a.createElement("li",{className:"detail__list-item"},o.a.createElement("strong",null,"Weight:")," ",e.pokemon.weight," lbs"),null===(t=e.pokemon.species.evolves_from)?o.a.createElement("li",{className:"detail__list-item"}):o.a.createElement("li",{className:"detail__list-item"}," ",o.a.createElement("strong",null,"Evolves from: "),t.name.charAt(0).toUpperCase()+t.name.slice(1))),o.a.createElement("button",{className:"detail__button"},o.a.createElement(i.b,{to:"/",className:"detail__link"},o.a.createElement("b",{className:"detail__return"},"Return"))));var t},g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={pokemons:[],inputValue:""},n.handleInputValue=n.handleInputValue.bind(Object(p.a)(n)),n.renderHomePage=n.renderHomePage.bind(Object(p.a)(n)),n.renderDetail=n.renderDetail.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then((function(e){return Promise.all(e)})).then((function(t){e.setState({pokemons:t})}))}},{key:"handleInputValue",value:function(e){var t=e.target.value;this.setState({inputValue:t}),console.log(this.state.pokemons)}},{key:"renderHomePage",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{handleInputValue:this.handleInputValue}),o.a.createElement(f,{inputValue:this.state.inputValue,pokemons:this.state.pokemons}))}},{key:"renderDetail",value:function(e){console.log(e);var t,n=parseInt(e.match.params.pokemonId),a=!0,l=!1,r=void 0;try{for(var i,c=this.state.pokemons[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var m=i.value;m.id===n&&(t=m)}}catch(s){l=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(l)throw r}}return o.a.createElement(y,{pokemon:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:"pokemon__container"},o.a.createElement("h1",{className:"pokemon__title"},"Pok\xe9dex"),o.a.createElement(_.c,null,o.a.createElement(_.a,{exact:!0,path:"/",render:this.renderHomePage}),o.a.createElement(_.a,{path:"/pokemon/:pokemonId",render:this.renderDetail})))}}]),t}(o.a.Component);r.a.render(o.a.createElement(i.a,null,o.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b6ff3d3f.chunk.js.map