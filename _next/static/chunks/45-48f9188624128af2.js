"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{2580:function(e,i,l){l.d(i,{M:function(){return s}});var t=l(226),a=l(9128);let s=()=>{t.p8.registerPlugin(a.ScrollTrigger);let e=document.querySelectorAll(".mil-up");e.forEach(e=>{t.p8.fromTo(e,{opacity:0,y:50,scale:.98,ease:"sine"},{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let i=document.querySelectorAll(".mil-scale");i.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",scale:i},{scale:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let l=document.querySelectorAll(".mil-parallax");l.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");t.p8.fromTo(e,{ease:"sine",y:i},{y:l,scrollTrigger:{trigger:e,scrub:!0,toggleActions:"play none none reverse"}})});let s=document.querySelectorAll(".mil-skill-prog");s.forEach(e=>{var i=e.getAttribute("data-value-1"),l=e.getAttribute("data-value-2");t.p8.fromTo(e,{width:i,ease:"sine"},{width:l,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"}})});let r=document.querySelectorAll(".mil-counter");r.forEach(e=>{var i=e,l={val:0},a=e.dataset.number,s=(a+"").split("."),r=s.length>1?s[1].length:0;t.p8.to(l,{val:a,duration:2,scrollTrigger:{trigger:e,toggleActions:"play none none reverse"},onUpdate:function(){i.innerHTML=l.val.toFixed(r)}})}),t.p8.to(".mil-progress",{height:"100%",ease:"sine",scrollTrigger:{scrub:.3}});let n=document.querySelector(".mil-top-panel");void 0!=n&&window.addEventListener("scroll",e=>{window.scrollY>10?n.classList.add("mil-active"):n.classList.remove("mil-active")})}},2953:function(e,i,l){l.d(i,{M:function(){return a}});var t=l(9682);l(6888),l(2803),l(103),t.ZP.use([t.Gk,t.tl,t.W_,t.xW,t.pt,t.rj,t.gI,t.oM,t.kr,t.Ay,t.o3,t.LW,t.N1,t.s5,t.VS,t.Rv]);let a={milInfiniteSlider:{slidesPerView:1,spaceBetween:0,speed:4e3,autoplay:!0,autoplay:{delay:0},loop:!0,freeMode:!0,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:4}}},milBannerSlider:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milBannerSlider2:{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milProcessSlider:{slidesPerView:1,spaceBetween:30,speed:800,parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milReviewsSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-process-prev",nextEl:".mil-process-next"},pagination:{el:".mil-banner-pagination",type:"bullets",clickable:!0}},milIllustrationSlider:{slidesPerView:1,spaceBetween:30,speed:800,effect:"fade",parallax:!0,navigation:{prevEl:".mil-illustration-prev",nextEl:".mil-illustration-next"}}}},2932:function(e,i,l){l.r(i),l.d(i,{default:function(){return m}});var t=l(9268),a=JSON.parse('{"TN":"Architecture Awards","WL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum gravida.","LI":{"p":"/blog","P":"See All"},"BH":{"H":"/img/photo/2.jpg","w":"image"},"ev":[{"title":"Designs of the Year","year":"2022","image":"/img/photo/1.jpg"},{"title":"Firms of the Year","year":"2019","image":"/img/photo/2.jpg"},{"title":"Product Winners","year":"2014","image":"/img/photo/5.jpg"},{"title":"Photography Winners","year":"2008","image":"/img/photo/4.jpg"}]}'),s=l(6006),r=l(226);let n=()=>{let e=r.p8.utils.toArray(".mil-hover-item"),i=document.querySelector(".mil-img-wrapper"),l=document.querySelector(".mil-img-wrapper img");function t(e){e.clientX,e.clientY,r.p8.timeline()}function a(e){if("mouseenter"===e.type){let t=e.target.dataset.src;r.p8.timeline().set(l,{attr:{src:t}}).to(i,{autoAlpha:1,scale:1})}else"mouseleave"===e.type&&r.p8.timeline().to(i,{autoAlpha:0,scale:.3})}e.forEach(e=>{e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",a),e.addEventListener("mousemove",t)})},o=()=>((0,s.useEffect)(()=>{n()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:"container mil-p-120-90",children:[(0,t.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,t.jsxs)("div",{className:"row justify-content-between",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"mil-mb-90",children:[(0,t.jsx)("h2",{className:"mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:a.TN}}),(0,t.jsx)("p",{className:"mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:a.WL}}),(0,t.jsxs)("a",{href:a.LI.p,className:"mil-link mil-upper mil-up",children:[a.LI.P,(0,t.jsx)("span",{className:"mil-arrow",children:(0,t.jsx)("img",{src:"/img/icons/1.svg",alt:"arrow"})})]})]})}),(0,t.jsx)("div",{className:"col-lg-7",children:(0,t.jsxs)("div",{className:"mil-hover-images mil-up",children:[(0,t.jsx)("ul",{children:a.ev.map((e,i)=>(0,t.jsx)("li",{className:"mil-up",children:(0,t.jsxs)("a",{className:"mil-hover-item",href:"#.",onClick:e=>{e.preventDefault()},"data-src":e.image,children:[(0,t.jsx)("p",{children:e.year}),(0,t.jsx)("span",{className:"mil-h4",children:e.title})]})},"awards-item-".concat(i)))}),(0,t.jsx)("div",{className:"mil-img-wrapper mil-mb-30",children:(0,t.jsx)("img",{src:a.BH.H,alt:a.BH.w})})]})})]})]})})}));var m=o},2442:function(e,i,l){l.r(i);var t=l(9268),a=l(2953),s=l(9321),r=l(3821);let n=e=>{let{bgStyle:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"mil-".concat(i,"-bg mil-partners mil-relative"),children:["soft"==i&&(0,t.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,t.jsxs)("div",{className:"container mil-p-120-120",children:[(0,t.jsx)("div",{className:"mil-background-grid mil-softened"}),(0,t.jsx)(s.tq,{...a.M.milInfiniteSlider,className:"swiper-container mil-infinite-show mil-up",children:r.e.map((e,i)=>(0,t.jsx)(s.o5,{className:"swiper-slide",children:(0,t.jsx)("a",{href:e.link,target:"_blank",className:"mil-partner-frame",style:{width:"60px"},children:(0,t.jsx)("img",{src:e.image,alt:e.alt})})},"partners-slider-item-".concat(i)))})]})]})})};i.default=n},9406:function(e,i,l){l.r(i),l.d(i,{default:function(){return o}});var t=l(9268),a=l(2953),s=l(9321),r=JSON.parse('{"TN":"Our process","Oc":"How it Works","QK":[[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}],[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}],[{"title":"We Hear","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Give Ideas","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."},{"title":"We Plan the Bases","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."}]]}');let n=e=>{let{bgStyle:i="default",paddingTop:l="120"}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"mil-".concat(i,"-bg mil-relative"),children:["soft"==i&&(0,t.jsx)("img",{src:"/img/other/bg.svg",className:"mil-bg-img",alt:"image"}),(0,t.jsxs)("div",{className:"container mil-p-".concat(l,"-60"),children:[(0,t.jsxs)("div",{className:"row align-items-end",children:[(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsxs)("div",{className:"mil-mb-90",children:[(0,t.jsx)("span",{className:"mil-suptitle mil-upper mil-up mil-mb-30",dangerouslySetInnerHTML:{__html:r.Oc}}),(0,t.jsx)("h2",{className:"mil-upper mil-up",dangerouslySetInnerHTML:{__html:r.TN}})]})}),(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("div",{className:"mil-adaptive-right mil-up mil-mb-90",children:(0,t.jsxs)("div",{className:"mil-nav-buttons",children:[(0,t.jsx)("div",{className:"mil-slider-button mil-process-prev",children:"Prev"}),(0,t.jsx)("div",{className:"mil-slider-button mil-process-next",children:"Next"})]})})})]}),(0,t.jsx)(s.tq,{...a.M.milProcessSlider,className:"swiper-container mil-process-slider",children:(0,t.jsx)("div",{className:"swiper-wrapper",children:r.QK.map((e,i)=>(0,t.jsx)(s.o5,{className:"swiper-slide",children:(0,t.jsx)("div",{className:"swiper-slide",children:(0,t.jsx)("div",{className:"row",children:e.map((e,l)=>(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"mil-process-box mil-icon-box mil-up mil-mb-60","data-swiper-parallax-duration":"400","data-swiper-parallax":"-900","data-swiper-parallax-scale":".8","data-swiper-parallax-opacity":"0",children:[(0,t.jsx)("div",{className:"mil-icon mil-icon-border mil-mb-30",children:(0,t.jsx)("img",{src:"/img/icons/11.svg",alt:"icon"})}),(0,t.jsx)("h4",{className:"mil-upper mil-mb-30",children:e.title}),(0,t.jsx)("p",{children:e.text})]})},"process-slider-item-".concat(i,"-step-").concat(l)))})})},"process-slider-item-".concat(i)))})})]})]})})};var o=n},3821:function(e){e.exports=JSON.parse('{"e":[{"image":"/img/partners/1.png","alt":"logo"},{"image":"/img/partners/2.png","alt":"logo"},{"image":"/img/partners/3.png","alt":"logo"},{"image":"/img/partners/4.png","alt":"logo"},{"image":"/img/partners/5.png","alt":"logo"},{"image":"/img/partners/6.png","alt":"logo"}]}')}}]);