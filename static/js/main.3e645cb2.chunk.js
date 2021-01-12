(this["webpackJsonpupbeat-sun-q26hg-speech"]=this["webpackJsonpupbeat-sun-q26hg-speech"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/memory.b17ce998.png"},15:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(11),r=a.n(s),c=(a(20),a(1)),i=a(2),o=a(5);function m(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),l=e[t];e[t]=e[a],e[a]=l}}function u(){m(o);const e=o.slice(0,8);let t=o.slice(0,16);return m(t),[e,t]}var h=a(12),d=a.n(h),p=a(13),E=a.n(p);function g({next:e,clearList:t,timeC:a,setTimeC:s}){return Object(l.useEffect)(()=>{t()},[]),n.a.createElement("div",{className:"d-flex flex-column align-items-center container"},n.a.createElement("h1",{className:"text-center display-4"},"Serial Position Effect Simulator"),n.a.createElement("img",{src:d.a,alt:"Logo",style:{width:"200px"}}),n.a.createElement("h2",{className:"mt-3"},"Rules:"),n.a.createElement("ul",{className:"mb-3"},n.a.createElement("li",null,"On the next screen, a list of animals will be shown"),n.a.createElement("li",null,"You will be given some time to remember this list of animals"),n.a.createElement("li",null,"A timer will show the time elapsed"),n.a.createElement("li",null,"After the time ends, you will be asked to recall the animals"),n.a.createElement("li",null,"While recalling the animals, if your browser supports it, you might be given an option to use speech recognition to select the animals"),n.a.createElement("li",null,"This feature is experimental and is only guaranteed to work well with the Google Chrome browser. The option to toggle it on will be shown if your browser supports the feature."),n.a.createElement("li",null,"Choose how much time you want to give yourself to remember the animals and click start when you are ready to begin!")),n.a.createElement("p",{className:"h4 mt-1"},"Time to remember animals:"),n.a.createElement("p",{className:"h3"},a," seconds"),n.a.createElement(E.a,{max:12,min:1,className:"mt-n1",value:a,size:"sm",variant:"success",onChange:e=>s(e.target.value)}),n.a.createElement("button",{className:"btn btn-success btn-lg d-flex align-items-center my-3",onClick:e},"Start"," ",n.a.createElement("span",{className:"ml-2",style:{width:"15px"}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"d-block"},n.a.createElement("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"})))))}var f=a(4),b=a.n(f),w=a(14),y=a.n(w);function v({addAnimal:e,next:t,animalsList:a,selectedAnimals:s}){const r=Object(l.useState)(!1),i=Object(c.a)(r,2),o=i[0],m=i[1],u=a.map(t=>({command:"".concat(t),callback:a=>{e(t)},isFuzzyMatch:!0}));let h="";return Object(f.useSpeechRecognition)({commands:u}),b.a.browserSupportsSpeechRecognition()&&(h=n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"h4 mr-2"},"Speech Recognition:"),n.a.createElement(y.a,{checked:o,onlabel:"ON",offlabel:"OFF",onstyle:"success",onChange:e=>{e?b.a.startListening({continuous:!0}):b.a.stopListening(),m(e)}}))),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"text-center my-3"},"Select the animals: "),n.a.createElement("p",{className:"text-center"},"There is a list of animals below. Select all of the ones that you remember from the list shown before."),n.a.createElement("div",{className:"row mb-2 d-flex justify-content-center"},h),n.a.createElement("div",{className:"row ml-0"},n.a.createElement("ul",{className:"list-group col-md-6"},a.slice(0,a.length/2).map((t,a)=>n.a.createElement("li",{key:a,className:"list-group-item ".concat(s.includes(t)&&"list-group-item-primary"),style:{cursor:"pointer"},onClick:()=>e(t)},t))),n.a.createElement("ul",{className:"list-group col-md-6"},a.slice(a.length/2).map((t,a)=>n.a.createElement("li",{key:a,className:"list-group-item ".concat(s.includes(t)&&"list-group-item-primary"),style:{cursor:"pointer"},onClick:()=>e(t)},t)))),n.a.createElement("button",{className:"btn btn-primary d-flex align-items-center my-3",onClick:t},"Finish"," ",n.a.createElement("span",{className:"ml-2",style:{width:"15px"}},n.a.createElement("svg",{className:"d-block",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},n.a.createElement("path",{d:"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"})))))}function x({animalsList:e,next:t,maxTime:a}){const l=n.a.useState(a),s=Object(c.a)(l,2),r=s[0],i=s[1];n.a.useEffect(()=>{let e=null;return r>0?e=setTimeout(()=>i(e=>e-1),1e3):t(),()=>{e&&clearTimeout(e)}},[r,t]);return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"my-3 text-center"},"Remember the following animals:"),n.a.createElement("div",{className:"row ml-0"},n.a.createElement("div",{className:"col-md-6 text-center h-100 my-auto"},n.a.createElement("h4",null,"Time left: ",n.a.createElement("span",{className:"h2 ".concat((e=>e<3?"text-danger":e<6?"text-warning":"text-success")(r))},r),"s")),n.a.createElement("ul",{className:"col-md-4 list-group"},e.map((e,t)=>n.a.createElement("li",{key:t,className:"list-group-item"},e)))))}function N({selectedAnimals:e,allAnimals:t,next:a}){let l="",s=0,r=0;return t.forEach((t,a)=>{e.includes(t)&&(a>=3&&a<6?r+=1:s+=1)}),r<s?l=n.a.createElement("p",null,"You have recalled more elements in the boundary of the array than in the interior. So, the serial position has been effective."):s!==r&&(l=n.a.createElement("p",null,"You have recalled more elements in the interior of the array than in the boundary. So, the serial position has not been effective.")),t.every(t=>e.includes(t))&&(l=n.a.createElement("p",null,"You have recalled all the animals and your memory is very good. So, the serial position efect does not apply.")),e.length>t.length&&(l=n.a.createElement("p",null,"You have selected more than 8 elements. So, the serial position efect does not apply. Please retry the simulation")),0!==e.length&&t.some(t=>e.includes(t))||(l=n.a.createElement("p",null,"You have not recalled any animal correctly. Do you want to retry?")),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"my-3 text-center"},"Result:"),n.a.createElement("div",{className:"text-center"},l),n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("ul",{className:"list-group col-md-8 mx-auto"},t.map((t,a)=>n.a.createElement("li",{key:a,className:"list-group-item ".concat(e.includes(t)&&"list-group-item-success")},t)))),n.a.createElement("button",{className:"btn btn-success mx-auto d-flex align-items-center my-3",onClick:a},"Restart",n.a.createElement("span",{className:"ml-2",style:{width:"20px"}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"d-block"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})))))}let k=u(),S=Object(c.a)(k,2),C=S[0],A=S[1];const T=({step:e,push:t})=>{switch(e.id){case"finish":var a=u(),l=Object(c.a)(a,2);C=l[0],A=l[1],window.scrollTo(0,0),t("start");break;default:window.scrollTo(0,0),t()}};var O=()=>{const e=n.a.useState(8),t=Object(c.a)(e,2),a=t[0],l=t[1],s=n.a.useState([]),r=Object(c.a)(s,2),o=r[0],m=r[1],u=e=>{m(t=>t.includes(e)?t.filter(t=>t!==e):t.length===C.length?(alert("You have selected the maximum number of animals. Please click again on a selected animal to unselect it."),t):[...t,e])};return n.a.createElement(i.Wizard,{onNext:T},n.a.createElement(i.Steps,null,n.a.createElement(i.Step,{id:"start",render:({next:e})=>n.a.createElement(g,{next:e,clearList:()=>m([]),timeC:a,setTimeC:l})}),n.a.createElement(i.Step,{id:"remember",render:({next:e})=>n.a.createElement(x,{next:e,animalsList:C,maxTime:a})}),n.a.createElement(i.Step,{id:"recall",render:({next:e})=>n.a.createElement(v,{next:e,selectedAnimals:o,addAnimal:u,animalsList:A})}),n.a.createElement(i.Step,{id:"finish",render:({next:e})=>n.a.createElement(N,{next:e,allAnimals:C,selectedAnimals:o})})))};function L(){return n.a.createElement("div",{className:"d-flex flex-column w-100 justify-content-center align-items-center",style:{minHeight:"100vh"}},n.a.createElement(O,null))}const R=document.getElementById("root");r.a.render(n.a.createElement(L,null),R)},5:function(e){e.exports=JSON.parse('["Dog","Puppy","Turtle","Rabbit","Parrot","Cat","Kitten","Goldfish","Mouse","Hamster","Cow","Rabbit","Ducks","Shrimp","Pig","Goat","Crab","Bee","Sheep","Fish","Turkey","Dove","Chicken","Horse","Giraffe","Woodpecker","Camel","Starfish","Koala","Alligator","Owl","Tiger","Bear","Blue whale","Coyote","Chimpanzee","Raccoon","Lion","Arctic wolf","Crocodile","Dolphin","Elephant","Squirrel","Snake","Kangaroo","Hippopotamus","Elk","Fox","Gorilla","Bat","Hare","Toad","Frog","Deer","Rat","Badger","Lizard","Mole","Hedgehog","Otter","Reindeer"]')}},[[15,1,2]]]);
//# sourceMappingURL=main.3e645cb2.chunk.js.map