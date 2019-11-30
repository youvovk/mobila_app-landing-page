(this["webpackJsonpmobila_app-landing-page"]=this["webpackJsonpmobila_app-landing-page"]||[]).push([[0],{20:function(e,a,t){e.exports=t(40)},25:function(e,a,t){},26:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),r=t(2),m=t.n(r),c=(t(25),t(8)),n=t(9),i=t(16),o=t(10),d=t(17),g=(t(26),t(11));function u(e){var a=e.src;return l.a.createElement("div",{style:{width:"100%",boxShadow:"0 0 6px rgba(0, 0, 0, 0.15)",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"flex-end",color:"#105783"},className:"slide"},l.a.createElement("img",{src:a,alt:"slide",style:{width:"100%",userSelect:"none",pointerEvents:"none"}}))}var p=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={slidesWide:3,startedFixed:!1,time:{hours:"00",minutes:"0"},batery:100,volume:!1},t.listenOnresizeEvent=function(e){var a=document.documentElement.clientWidth;a<=1300&&a>900?t.setState({slidesWide:2}):a<=900?t.setState({slidesWide:1}):t.setState({slidesWide:3})},t.timerStart=function(){var e=new Date;e.setTime(Date.now()),t.setState({time:{hours:e.getHours(),minutes:e.getMinutes()}})},t.mountBatery=function(){t.state.batery>=0&&t.setState((function(e){return{batery:e.batery-4}}))},t.toggleVolume=function(){return t.setState((function(e){return{volume:!e.volume}}))},t}return Object(d.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.listenOnresizeEvent),this.listenOnresizeEvent(),this.timerStart();var e=setInterval(this.timerStart,1e3),a=setInterval(this.mountBatery,3e3);this.setState({intervalId:e,intervakBatery:a})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId),clearInterval(this.state.intervakBatery)}},{key:"render",value:function(){var e=this.state,a=e.slidesWide,t=e.time,s=t.hours,r=t.minutes,m=e.batery,c=e.volume,n=m<=0?0:m,i="mobile-batery";return n<=20?i="mobile-batery mobile-batery_red":n<=50&&(i="mobile-batery mobile-batery_orange"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container-header"},l.a.createElement("div",{className:"header-left"},l.a.createElement("div",{className:"header-left__logo"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{className:"header-left__logo-ball",src:"./images/football_logo.svg",alt:""}))),l.a.createElement("h1",{className:"header-left__title"},"Get a personalized football experience tailored just for you"),l.a.createElement("p",{className:"header-left__text"},"Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team."),l.a.createElement("div",{className:"link-on-loader link-on-loader__header-mobile"},l.a.createElement("a",{href:"https://www.apple.com/retail"},l.a.createElement("img",{className:"link-on-loader__apple link-on-loader__apple-mobile",src:"./images/Apple Store.svg",alt:""})),l.a.createElement("a",{href:"https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm _content=071614&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-ua-all-Med- hasem-py-Evergreen-071614-1%7CONSEM_kwid_43700007031591577&gclid=Cj0KCQiAo IPvBRDgARIsAHsCw08YpOCIVUMU8GRrr6Xa_JBdHgtEssWVPqFKVLrJnZpELJydmtyGbdUaAnH 3EALw_wcB&gclsrc=aw.ds"},l.a.createElement("img",{src:"./images/Google Play.svg",alt:""}))))),l.a.createElement("div",{className:"header-right"})),l.a.createElement("div",{className:"header__side-bar side-bar"},l.a.createElement("div",{className:"header__side-bar-wrapper"},l.a.createElement("h1",{className:"side-bar__title"},"GET THE BEST OUT OF YOUR FOOTBALL EXPERIENCE"),l.a.createElement("p",{className:"side-bar__text"},"Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team."),l.a.createElement("button",{className:"side-bar__button"},"Get the app"))),l.a.createElement("section",{className:"what-it"},l.a.createElement("div",{className:"what-it__left-wrapper"},l.a.createElement("div",{className:"what-it__left pictures"},l.a.createElement("div",{className:"pictures__picture-first picture-first"},l.a.createElement("div",{className:"picture-first__left"},l.a.createElement("div",{className:"picture-first__left-text"},l.a.createElement("p",{className:"text-day"},"Sat, 12:35pm"),l.a.createElement("p",{className:"text-teams"},"Arsenal v ",l.a.createElement("br",null),"Chelsea"),l.a.createElement("p",{className:"text-type"},"Friendly Match")),l.a.createElement("div",{className:"picture-first__right-teams teams"},l.a.createElement("img",{className:"teams-logo",src:"./images/arsenal.svg",alt:""}),l.a.createElement("img",{className:"teams-logo",src:"./images/chelsea.svg",alt:""}))),l.a.createElement("div",{className:"notification"},l.a.createElement("p",{className:"notification-text"},"Turn on all match notifications"),l.a.createElement("label",{className:"form-switch"},l.a.createElement("input",{type:"checkbox",className:"checkbox"}),l.a.createElement("i",{className:"checkbox-item"})))),l.a.createElement("iframe",{width:"360",height:"218",src:"https://www.youtube.com/embed/RhkyXMm9u4Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,className:"pictures__picture-second"}))),l.a.createElement("div",{className:"container-what-it"},l.a.createElement("div",{className:"what-it__right"},l.a.createElement("h3",{className:"section-title_h3"},"WHAT IT DOES"),l.a.createElement("h2",{className:"section-title_h2"},"An Enhanced Football Experience"),l.a.createElement("p",{className:"section-text"},"The Guardian Live Scores app is your go to app for live scores and watching Premier League goals\u2026 Get in there, what a result!"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"section-text"},"As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from The Guardian publication."),l.a.createElement("a",{href:"#",className:"link"},l.a.createElement("p",{className:"section-more section-more_what-indent"},"Learn more"))))),l.a.createElement("section",{className:"started"},l.a.createElement("div",{className:"container-started"},l.a.createElement("div",{className:"started__left"},l.a.createElement("h3",{className:"section-title_h3"},"GET STARTED"),l.a.createElement("h2",{className:"section-title_h2"},"User-friendly Interface"),l.a.createElement("p",{className:"section-text"},"The in-game goal clips from every Premier League match are available to Guardian TV customers with a Guardian subscription."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"section-text"},"So, if you\u2019re not a subscriber, now\u2019s the time to make that savvy call. If that\u2019s a step too far for you, you can still watch loads of firecracker Premier League action as long as you sign in with a free Guardian iD.+"),l.a.createElement("a",{href:"#",className:"link"},l.a.createElement("p",{className:"section-more section-more_what-indent"},"Learn more")))),l.a.createElement("div",{className:"mobile-wrapper"},l.a.createElement("div",{className:"mobile"},l.a.createElement("div",{className:"mobile-wrapper-wrapper__content dropdown"},l.a.createElement("div",{className:"mobile-wrapper__content dropdown-menu"},l.a.createElement("header",{className:"mobile__menu-header"},l.a.createElement("img",{src:c?"./images/mute-on.png":"./images/mute-off.svg",alt:"volume",className:c?"mobile-phone mobile-icon":"mobile-phone mobile-phone_off",onClick:this.toggleVolume}),l.a.createElement("img",{src:"./images/4g.svg",alt:"4g internet",className:"mobile-icon"}),l.a.createElement("img",{src:"./images/network.svg",alt:"4g internet",className:"mobile-icon"}),l.a.createElement("p",{className:i},n,"%"),l.a.createElement("p",{className:"mobile-time"},r<10?"".concat(s,":0").concat(r):"".concat(s,":").concat(r))),l.a.createElement("img",{src:"./images/star.svg",alt:"star",className:"mobile-star"}),l.a.createElement("div",{className:"teams-vs"},l.a.createElement("div",{className:"team-wrapper"},l.a.createElement("img",{src:"./images/arsenal.svg",alt:"",className:"team-img"}),l.a.createElement("p",null,"Arsenal"),l.a.createElement("p",{className:"text-10px"},"A Gibay(21)")),l.a.createElement("div",{className:"score-wrapper score"},l.a.createElement("p",null,"1 - 1"),l.a.createElement("p",{className:"score_ft"},"FT")),l.a.createElement("div",{className:"team-wrapper"},l.a.createElement("img",{src:"./images/chelsea.svg",alt:"",className:"team-img"}),l.a.createElement("p",null,"Chelsea"),l.a.createElement("p",{className:"text-10px"},"M Salah(45+1)"))),l.a.createElement("nav",{className:"dropdown"},l.a.createElement("ul",{className:"mobile__menu-main"},l.a.createElement("li",{className:"mobile__menu-item"},"LINEUPS"),l.a.createElement("li",{className:"mobile__menu-item"},"COMMENTARY"),l.a.createElement("li",{className:"mobile__menu-item"},"REPORT"),l.a.createElement("li",{className:"mobile__menu-item"},"MATCH STATS"))),l.a.createElement("main",{className:"mobile-main"},l.a.createElement("h2",{className:"mobile__main-text"},"Salah scores  as Liverpool draw"),l.a.createElement("p",{className:"updates"},"Last Updates 27/11/19 15:33pm")),l.a.createElement("iframe",{width:"360",height:"218",src:"https://www.youtube.com/embed/RhkyXMm9u4Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,className:"mobile__img"}),l.a.createElement("main",{className:"mobile-main"},l.a.createElement("p",{className:"text-12px"},"The in-game goal clips from every Premier League match are available to Guardian TV customers with a Guardian subscription."),l.a.createElement("p",{className:"text-12px"},"So, if you\u2019re not a subscriber, now\u2019s the time to make that savvy call. If that\u2019s a step too far for you, you can still watch loads of firecracker Premier League action as long as you sign in with a free Guardian iD. The Guardian Live Scores app is your go to app for live scores and watching Premier League goals\u2026 Get in there, what a result!"),l.a.createElement("p",{className:"text-12px"},"As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from The Guardian publication."))))),l.a.createElement("div",{className:"mobile-wrapper-circle__2"},l.a.createElement("div",{className:"mobile-wrapper-circle__2_1"})),l.a.createElement("div",{className:"mobile-wrapper-circle__3"}),l.a.createElement("div",{className:"mobile-wrapper-circle__4"}),l.a.createElement("div",{className:"mobile-wrapper-circle__5"}),l.a.createElement("div",{className:"mobile-wrapper-circle__6"}),l.a.createElement("div",{className:"mobile-wrapper-circle__7"}))),l.a.createElement("section",{className:"features"},l.a.createElement("h2",{className:"features-title features-title_black"},"Features That Will Tailor Your Experience"),l.a.createElement("div",{className:"features__columns"},l.a.createElement("div",{className:"features__column"},l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/computer.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-ondemand_video-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"Video highlights for every Premier League and English Football League game")),l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/notifications.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-notifications_active-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian.")),l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/hd.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-hd-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues"))),l.a.createElement("div",{className:"features__column"},l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:" ./images/flag.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-flag-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action")),l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/baseline-style-24px.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-style-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app \u2013 so you don\u2019t need to miss any of the action")),l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/baseline-poll-24px.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-poll-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"Live updated league tables including all the domestic, European and major leagues and tournaments"))),l.a.createElement("div",{className:"features__column"},l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/baseline-add_to_home_screen-24px.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-add_to_home_screen-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter")),l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/baseline-people-24px.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-people-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"Match reports, previews and a dedicated news section")),l.a.createElement("div",{className:"column"},l.a.createElement("img",{className:"features__icon",src:"./images/baseline-tune-24px.svg",alt:""}),l.a.createElement("img",{className:"features__icon-mobile",src:"./images/baseline-tune-mobile.svg",alt:""}),l.a.createElement("p",{className:"column_text"},l.a.createElement("span",{className:"dot_black"},"\u2022"),"And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team."))))),l.a.createElement("section",{className:"slider"},l.a.createElement("div",{className:"containre-slider slider__title"},l.a.createElement("h3",{className:"section-title_h2"},"What Our Users Say")),l.a.createElement("div",{className:"slider__items"},l.a.createElement(g.Swiper,{infinity:!0,itemsWide:a,items:[l.a.createElement(u,{src:"./images/slider-first.svg"}),l.a.createElement(u,{src:"./images/slider-second.svg"}),l.a.createElement(u,{src:"./images/slider-third.svg"}),l.a.createElement(u,{src:"./images/slider-first.svg"}),l.a.createElement(u,{src:"./images/slider-third.svg"}),l.a.createElement(u,{src:"./images/slider-second.svg"}),l.a.createElement(u,{src:"./images/slider-first.svg"}),l.a.createElement(u,{src:"./images/slider-third.svg"}),l.a.createElement(u,{src:"./images/slider-first.svg"}),l.a.createElement(u,{src:"./images/slider-third.svg"}),l.a.createElement(u,{src:"./images/slider-first.svg"}),l.a.createElement(u,{src:"./images/slider-third.svg"})]})),l.a.createElement("div",{className:"containre-slider slider-pagination_flex"})),l.a.createElement("section",{className:"sponsors"},l.a.createElement("h3",{className:"section-title_h2 sponsors__title"},"We have been featured in"),l.a.createElement("div",{className:"sponsors-logos"},l.a.createElement("a",{className:"sponsors-logo",href:"#"},l.a.createElement("img",{className:"sponsor",src:"./images/sports-tv.svg",alt:""})),l.a.createElement("a",{className:"sponsors-logo",href:"#"},l.a.createElement("img",{className:"sponsor",src:"./images/sports.svg",alt:""})),l.a.createElement("a",{className:"sponsors-logo",href:"#"},l.a.createElement("img",{className:"sponsor",src:"./images/nbc-sports-1.svg",alt:""})),l.a.createElement("a",{className:"sponsors-logo",href:"#"},l.a.createElement("img",{className:"sponsor",src:"./images/designer-news.svg",alt:""})),l.a.createElement("a",{className:"sponsors-logo",href:"#"},l.a.createElement("img",{className:"sponsor",src:"./images/designer-technology.svg",alt:""})),l.a.createElement("a",{className:"sponsors-logo",href:"#"},l.a.createElement("img",{className:"sponsor",src:"./images/sky-sports-1.svg",alt:""})))),l.a.createElement("section",{className:"start-play"},l.a.createElement("div",{className:"start-play__left"}),l.a.createElement("div",{className:"start-play__right"},l.a.createElement("h3",{className:"section-title_h2 sponsors__title"},"Get Up Close With Your Team"),l.a.createElement("p",{className:"section-text section-text_start-play"},"If you\u2019re interested in the scores of more than one team (it\u2019s OK, we won\u2019t tell your mates you support two clubs!), you can choose the scores and competitions that matter to you using the \u2018My Scores\u2019 section. So, make sure you\u2019re a top-flight football fan by downloading the Football Score Centre now. It\u2019s got all this:"),l.a.createElement("div",{className:"link-on-loader link-on-loader__start-play"},l.a.createElement("a",{href:"https://www.apple.com/retail"},l.a.createElement("img",{className:"link-on-loader__apple link-on-loader__apple-mobile",src:"./images/Apple Store.svg",alt:""})),l.a.createElement("a",{href:"https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm _content=071614&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-ua-all-Med- hasem-py-Evergreen-071614-1%7CONSEM_kwid_43700007031591577&gclid=Cj0KCQiAo IPvBRDgARIsAHsCw08YpOCIVUMU8GRrr6Xa_JBdHgtEssWVPqFKVLrJnZpELJydmtyGbdUaAnH 3EALw_wcB&gclsrc=aw.ds"},l.a.createElement("img",{src:"./images/Google Play.svg",alt:""})))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("a",{className:"footer__logo",href:"#"},l.a.createElement("img",{src:"./images/football_logo-footer.svg",alt:""})),l.a.createElement("ul",{className:"footer__menu"},l.a.createElement("li",{className:"menu-item"},l.a.createElement("a",{className:"link",href:"#"},"Download")),l.a.createElement("li",{className:"menu-item"},l.a.createElement("a",{className:"link",href:"#"},"Support")),l.a.createElement("li",{className:"menu-item"},l.a.createElement("a",{className:"link",href:"#"},"Developers")),l.a.createElement("li",{className:"menu-item"},l.a.createElement("a",{className:"link",href:"#"},"Privacy"))),l.a.createElement("div",{className:"messengers"},l.a.createElement("a",{href:"https://twitter.com"},l.a.createElement("img",{src:"./images/twitter.svg",alt:""})),l.a.createElement("a",{href:"https://www.facebook.com/"},l.a.createElement("img",{src:"./images/facebook.svg",alt:""})),l.a.createElement("a",{href:"https://www.instagram.com"},l.a.createElement("img",{src:"./images/insta.svg",alt:""})))))}}]),a}(l.a.Component);m.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4dd1e1a0.chunk.js.map