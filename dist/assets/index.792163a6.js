import{j as b,r as o,L as N,a as C,C as B,u as R,b as k,c as w,T as P,d as I,R as E,e as M,f as D,H}from"./vendor.24ec1177.js";const z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(a){if(a.ep)return;a.ep=!0;const n=l(a);fetch(a.href,n)}};z();var U="/jimmy-ganci/assets/project1.96b43ecd.png",T="/jimmy-ganci/assets/project1a.951b5721.png",O="/jimmy-ganci/assets/project1b.e8d1fc3e.png",Q="/jimmy-ganci/assets/project1c.1b8df92a.png",V="/jimmy-ganci/assets/project2.31c8590d.png",Y="/jimmy-ganci/assets/project2a.8b981f70.png",L="/jimmy-ganci/assets/project2b.640ba4e8.png",G="/jimmy-ganci/assets/project2c.33a3d846.png",F="/jimmy-ganci/assets/project3.a0a55523.png",W="/jimmy-ganci/assets/project3a.c6b006ac.png",J="/jimmy-ganci/assets/project3b.4375401d.png",Z="/jimmy-ganci/assets/project3c.f7ce9df4.png",q="/jimmy-ganci/assets/project4.fbae1694.png",X="/jimmy-ganci/assets/project4a.c40d476a.png",K="/jimmy-ganci/assets/project4b.b2188e97.png",_="/jimmy-ganci/assets/project4c.adea16e2.png",$="/jimmy-ganci/assets/project5.31c7c49e.png",ee="/jimmy-ganci/assets/project5a.7d441797.png",te="/jimmy-ganci/assets/project5b.8514d943.png",ie="/jimmy-ganci/assets/project5c.6d72fcc4.png";const p=[{id:1,title:"Studio AG Interior",date:"Mars 2021",status:"Termin\xE9",mastered:"Maitrise de l'informatique...",difficulty:"Aucune maitrise des languages de programmation",text:`Premier projet r\xE9alis\xE9 en html et css. Simple site vitrine
	 d'une architecte d'int\xE9rieur. Actuellement en refonte total..`,image:U,image2:T,image3:O,image4:Q,techno:[{id:91,language:"HTML",skill:80},{id:92,language:"CSS",skill:80},{id:93,language:"PHP",skill:5},{id:94,language:"JS Vanilla",skill:20}],link:"https://www.amandineganci.com/"},{id:2,title:"Archi M\xE9tal",date:"Mai 2021",status:"Termin\xE9",mastered:"Notion en HTML, CSS et Javascript",difficulty:"Maitriser animation scroll Javascript",text:`Deuxi\xE8me projet qui m'a permis de confirmer mes connaissances en html et css.
	 J'ai \xE9galement pu en apprendre davantage sur Javascript Vanilla`,image:V,image2:Y,image3:L,image4:G,techno:[{id:95,language:"HTML",skill:80},{id:96,language:"CSS",skill:80},{id:97,language:"PHP",skill:5},{id:98,language:"JS Vanilla",skill:30}],link:"https://www.archi-metal.com/"},{id:3,title:"The WILD Restaurant",date:"Sept 2021",status:"Termin\xE9",mastered:"Maitrise du HTML, CSS et du javascript Vanilla",difficulty:"Prendre en main le SCSS et le BEM",text:`Premier projet \xE0 la Wild, site vitrine d'un restaurant. 
	Premi\xE8re utilisation de SASS et BEM, utilisation plus intensve de javascript vanilla`,image:F,image2:W,image3:J,image4:Z,techno:[{id:99,language:"HTML",skill:70},{id:100,language:"SCSS",skill:80},{id:101,language:"JS Vanilla",skill:40}],link:"https://louya64.github.io/The-Wild-restau/"},{id:4,title:"World Wild Quiz",date:"Nov 2021",status:"A terminer",mastered:"Maitrise du HTML, CSS, javascript vanilla",difficulty:"Prise en main REACT.js, NODE.js(session)",text:`Deuxi\xE8me projet \xE0 la Wild et premier projet en React.js et Node.js.
	Utilisation des sessions en avec express et de Redis Store`,image:q,image2:X,image3:K,image4:_,techno:[{id:102,language:"HTML",skill:5},{id:103,language:"CSS",skill:30},{id:104,language:"REACT.js",skill:80},{id:105,language:"NODE.js",skill:40}],link:"https://jimmyganci.github.io/WorldWildQuiz/#/"},{id:5,title:"Live Up",date:"Nov 2021",status:"A terminer",mastered:"Maitrise du HTML, CSS, javascript vanilla, React.js, NODE.js",difficulty:"Projet r\xE9alis\xE9 pour un hackaton",text:`Porjet r\xE9alis\xE9 lors d"un hackaton de 31h autour du th\xE8me de la musique.
	Certaines fonctionnalit\xE9s sont \xE0 terminer ou modifier concernant l'authentification et la cr\xE9ation de compte.`,image:$,image2:ee,image3:te,image4:ie,techno:[{id:106,language:"HTML",skill:5},{id:107,language:"CSS",skill:30},{id:108,language:"REACT.js",skill:71},{id:109,language:"NODE.js",skill:45}],link:"https://aurelienbrethes.github.io/Liveup/#/"}];var S="/jimmy-ganci/assets/fleche.ed677e97.png";const e=b.exports.jsx,t=b.exports.jsxs,ae=({scroll:i,scrollDown:r,setScrollDown:l,getHeightHome:c,sizeWindow:a})=>{const[n,s]=o.exports.useState(0),A=o.exports.useRef(),d={transform:`translateY(-${r}px)`},h={transform:`translateY(-${r/3}px)`},m={transform:`translateY(${r/3}px)`},g={transform:`translateY(-${r/7}px)`,backgroundPositionY:`${r/20}px`},f={transform:`translateY(-${Math.floor(Math.round(n/3))}px)`},v={transform:`translateY(-${n/4}px)`},u={transform:`translateY(-${Math.floor(Math.round(n/5))}px)`};return o.exports.useEffect(()=>{const j=setTimeout(()=>{c(A),l(0),s(0)},1e3);return()=>{clearInterval(j)}},[A,a]),t("div",{className:"home",onWheel:j=>i(j,l,r),style:d,ref:A,children:[t("div",{className:"home__heroHeader",children:[t("div",{className:"home__heroHeader--square",style:h,children:[e("h2",{style:{transform:`translateY(-${r/3}px)`},children:"Jimmy Ganci"}),e("p",{children:"Developpeur Web Junior"})]}),e("div",{className:"home__heroHeader--title",style:m,children:e("h2",{children:"Qui suis-je ?"})})]}),t("div",{className:"about",children:[e("div",{className:"about__title"}),t("div",{className:"about__description",children:[e("div",{className:"about__description--title",style:m,children:e("h2",{children:"Portefolio"})}),e("div",{className:"about__description--image",style:g}),e("div",{className:"about__description--text",children:e("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere possimus quibusdam laboriosam dicta adipisci necessitatibus reprehenderit deleniti quae. Pariatur inventore ipsum dolorem blanditiis, veritatis molestiae magnam neque commodi rerum, excepturi hic. Perspiciatis nostrum nobis perferendis hic voluptatem quibusdam, sequi velit distinctio, molestias consequuntur ullam? Qui ipsum blanditiis fugit quasi impedit."})})]})]}),t("div",{className:"portefolio",children:[e("div",{className:"portefolio__title"}),t("div",{className:"portefolio__presentation",onWheel:j=>i(j,s,n),children:[t("div",{className:"portefolio__presentation__flex",children:[t("div",{className:"portefolio__presentation__flex--left",style:f,children:[e("img",{src:p[0].image,alt:"projet1"}),t("div",{className:"portefolio__presentation__flex--left__link",children:[e("h3",{className:"titleProject",children:p[0].title}),e("p",{className:"number",children:p[0].id})]})]}),t("div",{className:"portefolio__presentation__flex--right",style:v,children:[e("img",{src:p[1].image,alt:"projet2"}),t("div",{className:"portefolio__presentation__flex--right__link",children:[e("h3",{className:"titleProject",children:p[1].title}),e("p",{className:"number",children:p[1].id})]})]})]}),t("div",{className:"portefolio__presentation__middle",style:u,children:[e("img",{src:p[2].image,alt:"projet3"}),t("div",{className:"portefolio__presentation__middle--link",children:[e("h3",{className:"titleProject",children:p[2].title}),e("p",{className:"number",children:p[2].id})]})]})]}),e("div",{className:"portefolio__buttonProject",children:e("button",{children:t(N,{to:"/portefolio",children:[e("p",{children:"Plus de projets"}),e("img",{src:S,alt:"arrow"})]})})})]})]})},se=()=>e("nav",{children:t("ul",{className:"menu",children:[e("li",{children:e(N,{to:"/portefolio",children:" Portefolio"})}),e("li",{children:e(N,{to:"/",children:" Accueil"})}),e("li",{children:e(N,{to:"/contact",children:"Contact"})})]})}),re=({socialRef:i})=>{const[r,l]=o.exports.useState(""),[c,a]=o.exports.useState(""),[n,s]=o.exports.useState(""),[A,d]=o.exports.useState(""),h=m=>{m.preventDefault(),C.post("https://portefoliojimmyganci.herokuapp.com/",{firstname:r,lastname:c,email:n,subject:" ",text:A}),l(""),a(""),s(""),d("")};return t("form",{className:"form",onSubmit:m=>h(m),children:[e("div",{className:"form__textarea",children:t("label",{children:[e("p",{children:"Cher Jimmy,"}),e("textarea",{name:"text",id:"text",cols:"50",rows:"5",value:A,onChange:m=>d(m.target.value),placeholder:"Ecrivez votre message...",required:!0})]})}),t("div",{children:[t("label",{children:["Mon pr\xE9nom est",e("input",{value:r,autoComplete:"off",onChange:m=>l(m.target.value),required:!0})]}),t("label",{children:["et mon nom est",e("input",{type:"text",value:c,autoComplete:"off",onChange:m=>a(m.target.value),required:!0})]})]}),e("div",{children:t("label",{children:["Tu peux me joindre \xE0 cette adresse",e("input",{type:"email",id:"email",value:n,autoComplete:"off",onChange:m=>s(m.target.value),required:!0})]})}),e("div",{className:"form__button",children:e("button",{ref:i,type:"submit",children:"ENVOYER"})})]})},le=({scrollDown:i})=>e("div",{className:"phone",style:{transform:` translateY(${i/.9}px) rotate(${i/60}deg)`},children:t("svg",{clipRule:"evenodd",fillRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 3360 2460",xmlns:"http://www.w3.org/2000/svg",children:[e("defs",{}),e("path",{className:"fil0",d:"M 1665.844,2469.6553 H 361.49616 c 0,-231.5126 70.07176,-448.1645 192.48628,-631.9666 52.34272,14.8605 108.06241,22.6819 166.31501,22.6819 319.12205,0 578.30305,-240.1161 578.30305,-535.7638 v -14.0784 c 116.5049,-31.2855 239.7637,-48.4926 367.2435,-48.4926 128.3243,0 251.5832,17.2071 368.9322,49.2748 -0.8444,12.514 -1.6885,24.2461 -1.6885,36.7603 0,295.6477 259.1811,535.7638 578.3031,535.7638 62.4736,0 122.4145,-9.3857 178.9784,-25.8105 113.9722,179.8915 179.8228,388.7221 179.8228,612.4133 H 1665.844 Z m 0,-948.7322 c 216.1251,0 390.8823,161.9024 390.8823,362.1295 0,200.227 -174.7572,362.1294 -390.8823,362.1294 -216.1248,0 -390.882,-161.9024 -390.882,-362.1294 0,-200.2271 174.7572,-362.1295 390.882,-362.1295 z",id:"path6"}),e("path",{style:{transform:`rotate(-${i/45}deg) translateY(-${i/3}px)`},className:"fil0",d:"m 1144.3535,1235.7741 c 33.6365,47.0512 52.1366,100.213 52.1366,157.0411 0,188.8161 -211.06844,342.1908 -470.90935,342.1908 -259.84073,0 -470.90896,-153.3747 -470.90896,-342.1908 0,-60.4943 21.86369,-116.7115 58.86367,-166.207 167.34083,-255.42087 709.72724,-442.40362 1353.86364,-442.40362 724.0227,0 1320.2273,236.47812 1397.5908,540.78352 10.0909,27.4975 15.1363,56.217 15.1363,85.5476 0,188.8161 -211.0683,342.1908 -470.9089,342.1908 -259.841,0 -470.9093,-153.3747 -470.9093,-342.1908 0,-61.7165 22.7044,-119.1556 61.3863,-168.651 -113.5226,-75.1599 -309.4546,-124.6554 -532.2952,-124.6554 -216.9548,0 -408.6819,47.0514 -523.0456,118.5448 z",id:"path8"})]})}),y=(i,r)=>{const[l,c]=o.exports.useState(!1),a=o.exports.useMemo(()=>i,[i]),n=s=>{const[A]=s;c(A.isIntersecting)};return o.exports.useEffect(()=>{const s=new IntersectionObserver(n,a),A=r.current;return A&&s.observe(A),()=>{A&&s.unobserve(A)}}),l};var ne="data:image/png;base64,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",oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKQSURBVHic7Zs9a1RBFIafNdE1iEUao0QUFUREUAQRIkg0NipqZ2+lrdgJNoqFv0DUH6A2flaCoIGksVi0UAwigqAkS0QSVlxEjcVkJSw7c+fs7uyZkPPANHvOnPvOey/3nhlYMAzDMFYuJUHuCDAGDAGzwPji+JtAV1bsACaAhRajAuzRk5ae7UCV1otvjDlgr5bA1PjufPN4C/QpaUzGCHGLb4wzOjI7Y1UgNiasJc3PgpABG4S1hjoRokXIgG/CWrOdCNEiZMC4sJY0P3tKuO98zAvwE1DWkZmWfUCN8OJ/AYe1BPaCA8BHWi/+C3BUT1rnxO4FysBZ4BiwCdcdvgDuAT/SSDMMowdIzgM06QN247bmg7j+ZR73Ep5C3rT9p8iAi7gtcRFV4JondhI4HVHjNXCz6bdDwAXcRmt9YO474AFwB/gcca1oJolrhD4EalyJrPFwyZyNwKPIeUtHHbgOrI5dYKgV1mI/8Ib2ttdl4DLwDFgXMyE3A3YCz5HvRJs5Atwl4h2XkwH9ONGDXap3CjhXlJSTAcdxj383uQqsCSXkZECKM8VhCr5AORmQihOh4HIwoA58BX63OT94VpmrATVc/7ANGMA9ygPAQeCJsNaWxdEWvWyEGqMK7ArUKwG3hDVHfcVyfALOA+8D8QXgEjAtqLnVF8jNgClcC1xEDbgvqLvZF8jNgKe4OxzDS0Fdb1ucmwEVQW7ovdPMWl8gNwMk+/rvgtxlY4BkUXVBrrfLzM2AOUHuz25cMDcD/iTK9ZKbAT3HDNAWoI0ZoC1AGzNAW4A2ZoC2AG3MAG0B2pgB2gK0MQO0BWjTXxB/jPsvQBEzgVgFuB2pZz4yD9x5wI3I3FeCuoZhGMaK4R9X28cTuMv7kwAAAABJRU5ErkJggg==",Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAONSURBVHic7ZvLaxRbEMZ/XwxRkJBgFNyIuHHhWhB3AS94fUQRBBFBEReiICL+D+LKzQXBRRYXFEXjA8SIiIIIgiA+L3ejC8GFgSBqRIiClotzMGPTM909fbp7mukPijNTXV1d9Z0z1TU9ZzAzOgkwDjwFrGbyFBhPyk8+ybaQ9BhYD7zraNh7WAU8MbMNnYzSEDAPfDKzlQGDKxySZoBRM1vSyW6gpHh6Fg0BVQdQNRoCqg6gajQEhHAiaZGkE5IeSZqV9FDSEUnyx6ckXW5z7nVJl0LE0RVSdILzwEyH4wPAXRY6sO8try94m+f+/erIuWu9/llSHFkFmAHmk+xCrIDjwF/A/8BOYBjYDdwDvnqbW36ciJy73Y/TrUpJlyTNt5EbAWJeQIAV8Ag3izs62Gz0Nnci+vtevzGiP4ubwTiZDLkCcrfCkuaAn8CYmf1oYzPgAxoBlpvZF0mjwCzwEVhpZj8T5ioTymyFh3BMxyYP4JOb9rabvXozMAhMh04+C8q8Dd7040RkvBljWx4C1IBPwBwwmOBnGPiGW/ZDwAf/fjjG9ry/bhqZqvou8MontyuB6C/AA2A5cBJYBjzw+ijmcMSmkc+5og+wAg7jKvkbYD8w5nX/AVcitse87Vc/Hstyb88ipFwBIQgQcJX4x1L/RGzXRI6vqT0BLXYHcZX+Na6w7Wljd9oHd7qo5LMQ0DwSKymenkVDQNUBVI2GgKoDqBoNAVUHUDUGi3Is6QKwLZC7W2a2L5CvP9CsgKIcFzVjodH3K6DvCcj9EWgpdgZcNLOjEX2RyF0c+34FNF+HS4qnZ9H3BIQogv+y8GNH2bhjZgfyOAjRCC0FRgP46fbauZCbADPbnddHlej7GtD3BIQogpOU0/Ed8tc7A+zF/SDzW98tQhTBEYovgiMx11NE3xWaTrCkeHoWDQFVB1A1GgKqDiALJK2TdEPSe0kzEZlssRvF3SneJvks7KFoQTiF24z5LebYGICkxcBFYDFwLtFjqA0SZQjwng6bHnzSt3GP514CI0k+a/URwDU/8QfczF8H/sZt3NpkZokbqOpGQCx88teALSwkP5vm3NoTIGkIt0lrKxmTh5oT4JO/hvsyljl5qDEBLTPfdfJQUwJ88lO4/xt0nTzUkwDhkp8gZ/JQTwKGCJQ8pOsEXwDrJb3Nc6FAWOHHIMkDqTrBcXrn7/NvcDvNEzu8tPILSS72YJ2TikAAAAAASUVORK5CYII=";const ce=({scroll:i,setScrollDown:r,scrollDown:l,getHeightHome:c,sizeWindow:a})=>{const n=o.exports.useRef(),s=o.exports.useRef(null),A={transform:`translateY(-${l}px)`},d=y({root:null,rootMargin:"0px",treshold:.5},s);return o.exports.useEffect(()=>{c(n),r(0)},[s,a]),t("div",{className:"contact",ref:n,onWheel:h=>i(h,r,l),style:A,children:[e("div",{className:"contact__header",children:t("div",{className:"contact__header--flex",children:[t("div",{className:"contact__header--social",style:{transform:`translateY(${l*1.4}px)`},children:[e("a",{href:"https://github.com/Jimmyganci",target:"_blank",rel:"noopener noreferrer",className:d?"noTranslate":"",style:{transition:"0.7s cubic-bezier(.68,.32,.56,1.42)"},children:e("img",{src:ne,alt:"github"})}),e("a",{href:"https://github.com/Jimmyganci",target:"_blank",rel:"noopener noreferrer",className:d?"noTranslate":"",style:{transition:"0.7s cubic-bezier(.68,.32,.56,1.42)",transitionDelay:"0.3s"},children:e("img",{src:Ae,alt:"github"})}),e("a",{href:"https://github.com/Jimmyganci",target:"_blank",rel:"noopener noreferrer",className:d?"noTranslate":"",style:{transition:"0.7s cubic-bezier(.68,.32,.56,1.42)",transitionDelay:"0.6s"},children:e("img",{src:oe,alt:"github"})})]}),e(le,{scrollDown:l}),t("div",{className:"contact__header--flex--title",children:[e("p",{children:"Echangeons ensemble"}),t("h1",{style:{transform:`translateY(${l/3}px)`},children:[e("span",{children:"Contactez"}),e("span",{style:{transform:`translateY(${l/12}px)`},children:"moi!"})]})]})]})}),e("div",{className:"contact__form",children:e(re,{socialRef:s})})]})};const de=({skill:i,index:r})=>{const[l,c]=o.exports.useState(0),a=o.exports.useRef(null),n=y({root:null,rootMargin:"0px",treshold:0},a);return o.exports.useEffect(()=>{let s=setInterval(()=>{l<i.skill&&n&&c(l+1)},30);return()=>{clearInterval(s)}}),t("div",{ref:a,className:`circleSkill ${n&&"noTranslate"}`,style:{transitionDelay:`${r/4}s`},children:[e(B,{value:l,text:`${l}%`,styles:{trail:{strokeWidth:5},path:{stroke:"rgb(158, 158, 111)",strokeWidth:5},text:{fill:"black"}}},i.id),e("p",{children:i.language})]})};var me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABEJAAARCQHA5aIYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAMxQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3nZSwAAAEN0Uk5TAAEDBAUGCAsMDxUYHCQpMjU4OTxGTVNVWl9iY2VpcHiEiYqLjJ6ksLKzt7i7vsLDxcjO0djZ2t7j5+jr8fL19/j9/u9MPMcAAAIJSURBVFjDrZdpQ+JADIaDWpFDEJBDsdzgBYuUG+Tq8///035ZdsvilNKQj5PkbWfmzeSNiMGi+Uqj0xutVqNep1HJR+Usiz+/bTiwzdtzPGi2Zfd3AO5y+Nmu1dofw6ULsPtlWwHSI6UpwKSZ80RbueYEYFqKnMp/dACnmjr2pKoO4Dz6pie7wLhgchfGQDdpzs/OYWFfmwOu7QXMsyb30xa3fue/xbu6y/bpR9dVC9bF06dcXEPr6of8V5ilg1xzegavxwgtGCSCESUxgNbR/mFwG5RqtwP47xyyW2aJ4FRPzNge3EVyzjp9TrGk18y9fOjiFs8rt6JL18NfqMuZVoe/rI44LAz8ufn6ujEwaoGzr6wS2IbvPMCDwWVD6U+tThmb+J+BjKkuxkytPZSx/nwApLD/8T6OhAEQh76ISHxHNRxAlV1cRMqQCgeQgrKIvDORcAAy4V0kuqEZFqDJJip5yIUFyEFeKrhWWADLpSINlhIWQJY0pMMwPMCQjvT4DA/wQU9GtA/W7jNeK0P5YOH+ILjNSFbUvEsvnLAXb3SNlR5AvQX1IaqvUU0kNZXVxaQuZ/WDon/S1I+q+lnXNxZ1a/Nrrj4A/5qrX3s3A3jbu4/AiH1/x04LDD+JE4sFkTh6kaWWeXqhqZe6erGtlvv6geMCI49+6NKPfRcYPPWj7wWG7/PG/9/DA6LV03qIMgAAAABJRU5ErkJggg==",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAT1SURBVHic7ZtNbFVFFMd/ry3V8tpCLGrQFD9RIYCG+FERF34mLmiIsHStG2MMihvjRxCNJMaFVE1ErQtd+JXgRklMXRgjiaHoxgAhpQ8qqFDaIvUjSPtcnPfCvWfmvt5738x9t/H9k1nMzZ1z/mfuzJk5M+dCE0008X9GIQMdbUAfcDtwM3AdsAzoBBYD/wJ/AlPAL8Ah4CDwHTAMnM+Ao3NcDGwGPgP+AMopyxngc2Aj0J6pBSlxGfAKcIr0RkeVceAlYElm1iTARcBWZBi7NlyXaaSTiy6Iu/AB/cDryNyOwhlgCJnXI0CpUsqIjwDoAVYBK4E1wP2VZ1E4BjwBfJGaeZ0oAu8S/aXOAgPAOi4YmQRtwAPAO8BEDT1vIT4nU/QCP0YQOg48g3h4V+gGngcmI3TuB65wqK8mliNGahIzwM4KWV9YBOxAlkatfxS40aNuAK4CjlqUH0DW+qxwNxd8SLD8DtzgS+lS4LBF6RBuh3tcLAJ2W/iM4mE6dGCf84M0doPSBnxk4TWMLM3O8J5FySDZbKXnQguwC5Pfm64U9FuED5GvrWkLsAeT54Z6BXdhevwDNGbOz4UeTMdYAhbWI3S7EjhDtt4+KW4FzhHmvD2tsMuRMDUobKB+jt7xBuaOtNaWOhLblKDj+N3kuEIPcJow921JhbRjhrRb3XH0ji2EuZ8iodPepARMA5e45egV3QjnoA39SQR8qhrvdEwwCwwStuGTuA0XIPF7sPE6DwR9Yz1hGyaB1jgN71INp0gXzzcaBUxneJt+qcXS8A5V/4b5eTJbBvaqZ+v1S7YOuEXVv3XFqAH4XtVv0i/YOuBaVR91Rid7DKu6cWBi64Blql5yxaYBOKnq2jZrB+hA52hMZZuAE0QfXroqY8BDMTmNq3pXnEazSmHcaOpX/BtfLcdiclqo2v2jX7CNgFlVz1PcnxQzqm7Ya+uAv1V9QUxljyOjwDfGgEdjvquH/F9xGv1MeNgsj00tf7iesC3GimYbAdrprXTPKzPoj2f4DlsH6F5a5YxO9tDr/oh+wdYBh1V9tTM62eNOVf8pTqM1hOfNOPEdYZ5QQG6KgrboOCeyod7QPOiHo1f0YYbDRlRrmwJl4Gv1bLNrdhngEVX/kgRRrT4Sm2B+HIhWUUSmbtCG+5IIaAWOKAHPueXoFU8R5n4E+2iviacxR0Eeb4Q0ujDjkmfTCFqMXCoEBe1ww9ErXsP8cKkuRgBeVsLOI8kJecVazKuxJ+sR2Il5OVpCkhPyhm7MBI5DOIhmbdfju8nXSXErki4X5DhL/IOTOWFLh/uQFJ7VAwpIKp3m96pLJR3IAaNWsovGdkIrduOHiHkJkgS9SDiple2hDi9bB7oxh30ZCecv9aV0BXLSqpWWkOSErLAWe8baCTymyVWxAvtIOIckJ/gcDV3IOq+XuupHMC4+fKEX2GchUUbu47bgNnYoVmRGnTzvI8NU2So6sKenVcs08AFyH5cmna6AhLQDmJecwfI2deQEusjz21AhcWWNdyaQi8q9yGryG2LUaWR32Yk4rmuQYdwH3IP8gBGFMeAx4Kv66LtBEcnG0lkZPspZ4AUc/TDhGkuQ31r0UZSLchJ4kZz+MqPRDjwMvI89tT5umQQ+xuNPU1nl+q4G7kUuKq6ulKXIStGGZKFMIfN6BDm9/QHx7vMxOaOJJpqYJ/gPXZxtlWgzskMAAAAASUVORK5CYII=";const x=({project:i,position:r})=>{const l=o.exports.useRef(),c=y({root:null,rootMargin:"0px",treshold:.5},l);return console.log(c),t("div",{className:"grid--textContainer",children:[t("div",{className:"grid--text",children:[e("p",{children:"Les"}),e("img",{src:r==="right"?ue:me,alt:"mastered"})]}),e("p",{ref:l,className:`hidden ${c?"noTranslate":""}`,children:r==="right"?i.difficulty:i.mastered})]})},ge=({project:i,scroll:r})=>{const[l,c]=o.exports.useState(0);return t("div",{className:"grid",onWheel:a=>r(a,c,l),children:[e("div",{className:"grid--imageContainer",style:{backgroundImage:`url(${i.image2})`,backgroundPositionY:`-${l/9}px`}}),e(x,{project:i,position:"left"}),t("div",{className:"grid--status",children:[t("p",{children:["R\xE9alis\xE9 en ",i.date]}),e("p",{children:i.status})]}),e(x,{project:i,position:"right"}),e("div",{className:"grid--imageContainer",style:{backgroundImage:`url(${i.image3})`,backgroundPositionY:`-${l/9}px`}})]})},pe=({scroll:i,scrollDown:r,setScrollDown:l,getHeightHome:c})=>{const{id:a}=R(),n=o.exports.useRef();return o.exports.useEffect(()=>{c(n),l(0)},[]),e("div",{className:"containerProjectDetails",onWheel:s=>i(s,l,r),style:{transform:`translateY(-${r}px)`},ref:n,children:p.filter(s=>s.id==a).map(s=>t("div",{className:"projectDetails",children:[e("div",{className:"projectDetails__header",children:e("div",{className:"projectDetails__header--title",children:s.title.split(" ").map((A,d)=>e("span",{style:{color:d%2==0&&"rgb(158, 158, 111)",transform:`translate(${d%2==0?"-":""}${r/7*d+.5}px, ${r/7*d+.5}px)`},children:A},d))})}),t("div",{className:"projectDetails__desc",children:[e("div",{className:"projectDetails__desc--left",children:e("h2",{children:s.id})}),e("div",{className:"projectDetails__desc--right",children:e("p",{children:s.text})})]}),e("div",{className:"projectDetails__skills",children:s.techno.map((A,d)=>e(de,{skill:A,index:d},d))}),e(ge,{project:s,scroll:i}),e("div",{className:"projectDetails__link",children:t("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",children:[e("p",{children:"Voir le site"}),e("img",{src:S,alt:"fleche"})]})})]},s.id))})},he=({scroll:i,scrollDown:r,setScrollDown:l,getHeightHome:c,sizeWindow:a})=>{const[n,s]=o.exports.useState(1),[A,d]=o.exports.useState(!1),[h,m]=o.exports.useState(!1),g=o.exports.useRef(),f=k(),v={transform:`translateY(-${r}px)`};return o.exports.useEffect(()=>{c(g),l(0)},[g,a]),e("div",{className:"portefolio",ref:g,onWheel:u=>i(u,l,r),style:v,children:t("div",{className:"portefolioSlideShow",style:{minHeight:"100vh"},children:[e("div",{className:"portefolioSlideShow__title",children:e("h1",{className:`titleProject  ${A?"closeSelf":""}`,children:e("span",{children:"Portefolio"})})}),e("div",{className:`portefolioSlideShow__projects ${A?"growHeight":""} ${h?"growWidth":""}`,children:p.filter(u=>u.id===n).map(u=>e("div",{className:"portefolioSlideShow__projects--project",onClick:()=>{d(!0),setTimeout(()=>{m(!0)},1e3),setTimeout(()=>{f(`/portefolio/project/${u.id}`)},3500)},children:e("img",{className:h?"noFilter":"",src:u.image,alt:u.title})},u.id))}),e("div",{className:`portefolioSlideShow__containerNumber ${A===!0?"goDown":""}`,children:p.map(u=>e("p",{onClick:()=>s(u.id),className:"portefolioSlideShow__containerNumber--list",style:{fontSize:n===u.id&&"12vw"},children:u.id},u.id))})]})})};function fe(){const[i,r]=o.exports.useState(0),[l,c]=o.exports.useState(0),[a,n]=o.exports.useState(0),s=w(),A=g=>{const f=g.current.clientHeight;c(f)},d=(g,f,v)=>{window.innerWidth>=800&&(g.deltaY>0?v>=0&&i<l-a&&f(v+50):v>0&&f(v-50))};function h(){n(window.innerHeight)}return o.exports.useEffect(()=>{window.addEventListener("resize",h),h()},[a]),t("div",{className:"app",children:[e(se,{}),e(P,{component:null,children:e(I,{classNames:"page",timeout:500,children:e(E,{location:s,children:[{path:"/portefolio",name:"Portefolio",Component:he},{path:"/",name:"Accueil",Component:ae},{path:"/contact",name:"Contact",Component:ce},{path:"/portefolio/project/:id",name:"ProjectDetails",Component:pe}].map(({path:g,Component:f})=>e(M,{exact:!0,path:g,element:e(f,{scroll:d,scrollDown:i,setScrollDown:r,getHeightHome:A,sizeWindow:a})},g))})},s.key)})]})}D.render(e(H,{children:e(fe,{})}),document.getElementById("root"));
