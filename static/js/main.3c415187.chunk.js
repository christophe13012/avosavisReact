(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e){e.exports=[{restaurantName:"Bronco",address:"39 Rue des Petites \xc9curies, 75010 Paris",lat:48.8737815,long:2.3501649,ratings:[{stars:4,comment:"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."},{stars:5,comment:"Tout simplement mon restaurant pr\xe9f\xe9r\xe9 !"}]},{restaurantName:"Babalou",address:"4 Rue Lamarck, 75018 Paris",lat:48.8865035,long:2.3442197,ratings:[{stars:5,comment:"Une minuscule pizzeria d\xe9licieuse cach\xe9e juste \xe0 c\xf4t\xe9 du Sacr\xe9 choeur !"},{stars:3,comment:"J'ai trouv\xe9 \xe7a correct, sans plus"}]},{restaurantName:"Vatel",address:"122 Rue Nollet, 75017 Paris",lat:48.896737,long:2.316957,ratings:[{stars:5,comment:"Gourmandes et gourmands, \xe0 vos cuill\xe8res!"},{stars:4,comment:"Tr\xe8s bon bistrot, burger maison parfait !"}]},{restaurantName:"Les moussaillons",address:"139 Rue Cardinet, 75017 Paris",lat:48.887645,long:2.312965,ratings:[{stars:5,comment:"Meilleur restaurant d'hu\xeetres et de poissons de Paris!"},{stars:4,comment:"Le patron est tr\xe8s agreable et aux petit soin ."}]},{restaurantName:"Le Cinq Restaurant",address:"31 Avenue George V, 75008 Paris",lat:48.869824,long:2.300378,ratings:[{stars:2,comment:"Moyen"},{stars:4,comment:"Et la tarte tatin, un r\xe9gal."}]},{restaurantName:"Epicure",address:"112 Rue du Faubourg Saint-Honor\xe9, 75008 Paris",lat:48.871925,long:2.31466,ratings:[{stars:5,comment:"Ce n'est pas pour rien que ce restaurant est recommand\xe9 au guide Michelin !"},{stars:2,comment:"Le service \xe9tait tr\xe8s bon, mais le menu n'est pas imaginaire"},{stars:1,comment:"Nul"}]},{restaurantName:"Thierry MARX",address:"251 Rue Saint Honor\xe9, 75001 Paris",lat:48.867144,long:2.327187,ratings:[{stars:5,comment:"B\u0153uf wasabi de Miyazaki et en dessert Piment et Melon , un r\xe9gal"},{stars:5,comment:"Sublime explosion de saveurs en bouche, tout en finesse et en sobri\xe9t\xe9."}]}]},53:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},59:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),i=(a(58),a(59),function(){return r.a.createElement("h1",{style:{textAlign:"center",marginTop:20,marginBottom:20},className:"display-3 center"},"Avosavis",r.a.createElement("img",{style:{marginLeft:7},alt:"iconChef",src:"icons/chef.png"}))}),l=a(5),c=a(22),u=a(13),m=a(14),g=a(18),d=a(15),h=a(19),p=a(28),v=a(29);function f(e){var t=[],a={heigth:30,width:30};if(0===e)return r.a.createElement("img",{style:a,src:"icons/star-empty.png",alt:"starsEmpty",key:0});for(var n=0;n<Math.floor(e);n++)t.push(r.a.createElement("img",{style:a,src:"icons/star.png",alt:"stars",key:n+1}));return e-Math.floor(e)>.1&&t.push(r.a.createElement("img",{style:a,src:"icons/star-half-empty.png",alt:"starsHalf",key:0})),t}function E(e,t){e&&e.setAnimation(null),t.setAnimation(window.google.maps.Animation.BOUNCE)}function w(){var e=Object(p.a)(["\n  animation: "," 1.5s infinite;\n"]);return w=function(){return e},e}function k(){var e=Object(p.a)(["\n  0%{opacity: 1;}\n  50%{opacity: 0;}\n  100%{opacity: 1;}\n"]);return k=function(){return e},e}var y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.restaurant,a=e.restaurantClicked,n=e.onClick,s=e.onOpenRating;return this.refs.resto&&t.marker===a.marker&&this.refs.resto.scrollIntoView({behavior:"smooth",block:"start"}),r.a.createElement("div",{ref:"resto",style:j.div},r.a.createElement("div",{onClick:function(){return n(t)},style:j.restaurantName},t.marker&&t.marker===a.marker?r.a.createElement(C,null,t.restaurantName):t.restaurantName),r.a.createElement("p",{style:j.adress},t.address),r.a.createElement("p",{style:j.stars},f(t.averageStars)),r.a.createElement("button",{onClick:function(){return s(t)},className:"btn btn-success btn-sm"},"Ajouter un avis"),r.a.createElement("hr",{style:j.hr}))}}]),t}(n.Component),b=Object(v.b)(k()),C=v.a.div(w(),b),j={div:{marginRight:5},hr:{backgroundColor:"ghostwhite",marginLeft:0,marginRight:5,marginTop:8},restaurantName:{marginBottom:0,fontWeight:"bold",cursor:"pointer"},adress:{marginBottom:0},stars:{marginBottom:8}},A=y,S=function(e){var t=e.label,a=e.name,n=e.options,s=e.value,o=e.onChange;return r.a.createElement("div",{className:"form-group",style:{display:"inline-block",margin:5}},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("select",{value:s,onChange:o,className:"form-control-sm",name:a},n.map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)})))},N=function(e){var t=e.min,a=e.max,n=e.onChange,s=[0,1,2,3,4,5];return r.a.createElement("div",{className:"container",style:{marginBottom:10}},"De",r.a.createElement(S,{options:s,value:t,name:"min",onChange:n}),"\xe0",r.a.createElement(S,{options:s,value:a,name:"max",onChange:n}),r.a.createElement("span",{style:{marginLeft:3}},f(1)),t>a&&r.a.createElement("div",{style:{padding:3,textAlign:"center"},className:"alert alert-danger"},r.a.createElement("strong",null,"Filtre invalide")))},O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={range:{min:0,max:5}},a.handleChange=function(e){var t=Object(l.a)({},a.state.range);t[e.target.name]=e.target.value,a.setState({range:t})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"filterGeoloc",value:function(){var e=this.props,t=e.restaurants,a=e.bounds,n=a.ha.h,r=a.ha.g,s=a.da.h,o=a.da.g;return t.filter(function(e){return e.marker.getPosition().lng()<s&&e.marker.getPosition().lng()>o&&e.marker.getPosition().lat()<n&&e.marker.getPosition().lat()>r})}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.bounds).length>0?this.filterGeoloc():this.props.restaurants,a=t.filter(function(t){return t.averageStars>=e.state.range.min&&t.averageStars<=e.state.range.max}),n=t.filter(function(t){return t.averageStars<e.state.range.min||t.averageStars>e.state.range.max});a.forEach(function(e){return e.marker.setVisible(!0)}),n.forEach(function(e){return e.marker.setVisible(!1)});var s=a.findIndex(function(t){return t.marker===e.props.restaurantClicked.marker});return this.refs.restos&&-1===s&&(this.refs.restos.scrollTop=0),r.a.createElement("div",{style:M.div},r.a.createElement("h5",{style:M.h5},"Liste de restaurant"),r.a.createElement("p",{style:M.p},"Filtrer selon les notes :"),r.a.createElement(N,{onChange:this.handleChange,min:this.state.range.min,max:this.state.range.max}),r.a.createElement("hr",{style:M.hr}),r.a.createElement("div",{ref:"restos",style:M.restaurants},a.map(function(t,a){return r.a.createElement(A,{key:a,restaurant:t,restaurantClicked:e.props.restaurantClicked,onClick:e.props.onClick,onOpenRating:e.props.onOpenRating})})))}}]),t}(n.Component),M={div:{width:"25%",textAlign:"left"},h5:{color:"ghostwhite",textAlign:"center",marginTop:10},p:{color:"ghostwhite",marginLeft:10,marginBottom:5},hr:{backgroundColor:"ghostwhite",marginLeft:6,marginTop:5},restaurants:{color:"ghostwhite",marginLeft:8,overflow:"auto",height:450}},B=O,R=a(32),x=a(86),L=a(87),H={noteMoyenne:{marginTop:10,marginBottom:10},note:{marginBottom:3},avis:{marginBottom:5},comment:{marginBottom:3},hr:{marginTop:5,marginBottom:5}},P=function(e){var t=e.restaurant,a=e.show,n=e.onHide,s=e.onOpenRating;return r.a.createElement(x.a,{show:a,onHide:n},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Avis sur le restaurant ",t.restaurantName)),r.a.createElement(x.a.Body,null,r.a.createElement("div",null,r.a.createElement("p",null,"Adresse : ",t.address),r.a.createElement("img",{alt:"streetView",src:"https://maps.googleapis.com/maps/api/streetview?size=468x300&location=".concat(t.lat,",").concat(t.long,"&heading=151.78&pitch=-0.76&key=AIzaSyBf4GOhxsge_3kuAKHKDDiWLVEbl6t-1dw")}),r.a.createElement("p",{style:H.noteMoyenne},"Note Moyenne :"," ",t.averageStars?f(t.averageStars):"Aucune note actuellement"),r.a.createElement("div",null,r.a.createElement("p",{style:H.avis},t.ratings&&t.ratings.length>0?"Voici les derniers avis post\xe9s : ":"Aucun avis post\xe9"),t.ratings&&t.ratings.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("p",{style:H.note},f(e.stars)),r.a.createElement("p",{style:H.comment},e.comment),r.a.createElement("p",null,"Auteur : ",e.auteur),a!==t.ratings.length-1&&r.a.createElement("hr",{style:H.hr}))})))),r.a.createElement(x.a.Footer,null,r.a.createElement(L.a,{variant:"success",onClick:function(){return s(t)}},"Ajouter un avis"),r.a.createElement(L.a,{variant:"danger",onClick:n},"Fermer")))},T=function(e){for(var t=e.onStarClick,a=e.stars,n=[],s=function(e){var s=r.a.createElement("img",{style:{width:35,height:35},key:e,alt:"stars",src:a<e?"icons/star-empty.png":"icons/star.png",onClick:function(){return t(e)}});n.push(s)},o=1;o<6;o++)s(o);return r.a.createElement("div",{style:{marginTop:8}},n)},z={noteMoyenne:{marginTop:10,marginBottom:10},note:{marginBottom:3},avis:{marginBottom:5},comment:{marginBottom:3}},D=function(e){var t=e.restaurant,a=e.show,n=e.onHide,s=e.onStarClick,o=e.rating,i=e.onRate,l=e.onChange,c=""===o.auteur||""===o.comment;return r.a.createElement(x.a,{show:a,onHide:n},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Ajouter un avis sur le restaurant ",t.restaurantName)),r.a.createElement(x.a.Body,null,r.a.createElement("div",null,r.a.createElement("p",null,"Adresse : ",t.address),r.a.createElement("p",{style:z.noteMoyenne},"Note Moyenne actuelle :"," ",t.averageStars?f(t.averageStars):"Aucune note"),r.a.createElement("label",null,"Entrez votre avis et votre note :"),r.a.createElement("textarea",{onChange:l,name:"comment",value:o.comment,className:"form-control",rows:"3"}),r.a.createElement(T,{onStarClick:s,stars:o.stars}),r.a.createElement("label",{htmlFor:"auteur"},"Entrez votre nom :"),r.a.createElement("input",{onChange:l,name:"auteur",value:o.auteur,className:"form-control",id:"auteur"}))),r.a.createElement(x.a.Footer,null,r.a.createElement(L.a,{variant:"success",disabled:c,onClick:i},"Valider l'avis"),r.a.createElement(L.a,{variant:"danger",onClick:n},"Annuler")))},F=function(e){var t=e.onHide,a=e.show,n=e.onAjout,s=e.restaurant,o=e.onChange,i=""===s.restaurantName||""===s.address;return r.a.createElement(x.a,{show:a,onHide:t},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Ajouter un restaurant")),r.a.createElement(x.a.Body,null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"nomNouveauResto"},"Entrez le nom de ce restaurant :"),r.a.createElement("input",{style:{marginBottom:15},className:"form-control",id:"nomNouveauResto",value:s.restaurantName,onChange:o,name:"restaurantName"}),r.a.createElement("label",{htmlFor:"adresseNouveauResto"},"Entrez l'adresse :"),r.a.createElement("input",{className:"form-control",id:"adresseNouveauResto",value:s.address,onChange:o,name:"address"}))),r.a.createElement(x.a.Footer,null,r.a.createElement(L.a,{variant:"success",disabled:i,onClick:function(){return n(s)}},"Ajouter le restaurant"),r.a.createElement(L.a,{variant:"success",disabled:i,onClick:function(){return n(s,"showAvis")}},"Ajouter le restaurant et donner un avis"),r.a.createElement(L.a,{variant:"danger",onClick:t},"Annuler")))},I=a(20),V=a.n(I),W=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={restaurants:[],restaurant:{},bounds:{},showDescription:!1,showAvis:!1,showAjout:!1,rating:{stars:0,comment:"",auteur:""}},a.placesAPI=function(e){var t={location:e.center,radius:"500",type:["restaurant"]},n=new window.google.maps.places.PlacesService(e);n.nearbySearch(t,function(t,r){if("OK"===r){var s=Object(c.a)(a.state.restaurants);t.forEach(function(t){var r={restaurantName:t.name,address:t.vicinity,lat:t.geometry.location.lat(),long:t.geometry.location.lng(),ratings:[]};n.getDetails({placeId:t.place_id},function(t,n){if(n===window.google.maps.places.PlacesServiceStatus.OK){var o=t.reviews;t.reviews&&o.forEach(function(e){r.ratings.push({stars:e.rating,comment:e.text,auteur:e.author_name})})}-1===s.findIndex(function(e){return e.restaurantName===r.restaurantName&&e.address===r.address})&&(r.marker=a.placerMarker(r,e),r.averageStars=a.averageStars(r),s.push(r),a.setState({restaurants:s}))})})}})},a.placerMarker=function(e,t){var n=e.long?new window.google.maps.LatLng(e.lat,e.long):e.latLng,r=new window.google.maps.Marker({position:n,map:t,icon:"icons/resto.png"});return r.addListener("click",function(){var e=Object(l.a)({},a.state.restaurant);E(e.marker,r),e.marker=r,a.setState({restaurant:e})}),r},a.ajoutMarkerClick=function(e){window.google.maps.event.addListener(e,"click",function(t){var n=Object(l.a)({},a.state.restaurant);n.restaurantName="",n.address="",n.ratings=[],n.placeId=0,n.averageStars=null;var r=a.placerMarker(t,e);n.marker=r,a.setState({restaurant:n,showAjout:!0})})},a.handleAjoutListe=function(e,t){var n=Object(c.a)(a.state.restaurants);e.restaurantName=V.a.capitalize(e.restaurantName),e.address=V.a.capitalize(e.address),a.handleHideModals(),n.push(e);var r=!!t;a.setState({restaurants:n,restaurant:e,showAvis:r})},a.handleChangeAjout=function(e){var t=Object(l.a)({},a.state.restaurant);t[e.target.name]=e.target.value,a.setState({restaurant:t})},a.handleHideAjout=function(){a.handleHideModals(),Object(l.a)({},a.state.restaurant).marker.setMap(null)},a.handleHideModals=function(){a.setState({showDescription:!1,showAvis:!1,showAjout:!1})},a.handleClick=function(e){E(a.state.restaurant.marker,e.marker),a.setState({showDescription:!0,restaurant:e})},a.handleOpenRating=function(e){a.setState({showAvis:!0,restaurant:e,rating:{stars:0,comment:"",auteur:""},showDescription:!1})},a.handleStarClick=function(e){var t=Object(l.a)({},a.state.rating);t.stars=e===t.stars?t.stars-1:e,a.setState({rating:t})},a.handleChangeComment=function(e){var t=Object(l.a)({},a.state.rating);t[e.target.name]=e.target.value,a.setState({rating:t})},a.handleRating=function(){var e=Object(l.a)({},a.state.rating),t=Object(c.a)(a.state.restaurants),n=Object(l.a)({},a.state.restaurant),r=t.findIndex(function(e){return e.restaurantName===n.restaurantName&&e.address===n.address});e.comment=V.a.capitalize(e.comment),e.auteur=V.a.capitalize(e.auteur),n.ratings=[e].concat(Object(c.a)(n.ratings)),n.averageStars=a.averageStars(n),t[r]=n,a.handleHideModals(),a.setState({rating:e,restaurants:t,restaurant:n})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new window.google.maps.Map(this.refs.map,{center:{lat:43.3,lng:5.4},zoom:16});this.geolocalisation(t),window.google.maps.event.addListener(t,"bounds_changed",function(){var a=t.getBounds();e.placesAPI(t),e.setState({bounds:a})}),R.forEach(function(a){var n=e.placerMarker(a,t);a.marker=n,a.averageStars=e.averageStars(a)}),this.ajoutMarkerClick(t),this.setState({restaurants:R,map:t})}},{key:"geolocalisation",value:function(e){var t=this,a=new window.google.maps.InfoWindow;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){var n=new window.google.maps.Marker({position:new window.google.maps.LatLng(t.coords.latitude,t.coords.longitude),map:e,icon:"icons/placeholder.png",animation:window.google.maps.Animation.DROP});a.open(e),e.setCenter(n.getPosition())},function(){t.handleLocationError(!0,a,e.getCenter(),e)}):this.handleLocationError(!1,a,e.getCenter(),e)}},{key:"handleLocationError",value:function(e,t,a,n){t.setPosition(a),t.setContent(e?"Erreur: Le srvice de g\xe9olocalisation n'a pas fonctionn\xe9":"Erreur: Votre navigateur ne supporte pas la g\xe9olocalisation"),t.open(n)}},{key:"averageStars",value:function(e){var t=0,a=e.ratings.length;if(0===a)return null;for(var n=0;n<a;n++)t+=Number(e.ratings[n].stars);return Math.round(t/a*2)/2}},{key:"render",value:function(){var e=this.state,t=e.restaurant,a=e.bounds,n=e.showDescription,s=e.showAvis,o=e.showAjout,i=e.rating,l=V.a.orderBy(this.state.restaurants,["restaurantName"],["asc"]);return r.a.createElement("div",{style:G.containerStyle},r.a.createElement("div",{style:G.divMap},r.a.createElement("div",{ref:"map",style:G.mapStyle},"I should be a map!")),r.a.createElement(B,{restaurants:l,restaurantClicked:t,bounds:a,onClick:this.handleClick,onOpenRating:this.handleOpenRating}),r.a.createElement(P,{show:n,onHide:this.handleHideModals,restaurant:t,onOpenRating:this.handleOpenRating}),r.a.createElement(D,{show:s,onHide:this.handleHideModals,restaurant:t,onStarClick:this.handleStarClick,rating:i,onRate:this.handleRating,onChange:this.handleChangeComment}),r.a.createElement(F,{show:o,onHide:this.handleHideAjout,onAjout:this.handleAjoutListe,onChange:this.handleChangeAjout,restaurant:t}))}}]),t}(n.Component),G={containerStyle:{backgroundColor:"#ef6c00",margin:"auto",borderRadius:5,display:"flex",flexDirection:"row",padding:5,height:600,maxWidth:1050},divMap:{width:"75%",backgroundColor:"white",borderRadius:5},mapStyle:{width:"100%",height:"100%",border:"1px solid black"}},K=W;var _=function(){return r.a.createElement("div",{className:"App",style:{padding:10}},r.a.createElement(i,null),r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(83);o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.3c415187.chunk.js.map