webpackJsonp([1],[function(e,a,i){var s=i(2);e.exports=function(){var e=new s.Template({code:function(e,a,i){var s=this;return s.b(i=i||""),s.b('<div class="message">'),s.b("\n"+i),s.b('    <div class="message__left">'),s.b("\n"+i),s.b('        <div class="message__avatar" style="background-image:url(/images/avatars/profile'),s.b(s.v(s.f("avatarId",e,a,0))),s.b('.jpg);"></div>'),s.b("\n"+i),s.b("    </div>"),s.b("\n"+i),s.b('    <div class="message__right">'),s.b("\n"+i),s.b('        <div class="message__head">'),s.b("\n"+i),s.b('            <div class="message__username">'),s.b(s.v(s.f("username",e,a,0))),s.b("</div>"),s.b("\n"+i),s.b('            <div class="message__time">'),s.b(s.v(s.f("time",e,a,0))),s.b("</div>"),s.b("\n"+i),s.b("        </div>"),s.b("\n"+i),s.b('        <div class="message__body">'),s.b(s.t(s.f("message",e,a,0))),s.b("</div>"),s.b("\n"+i),s.b("    </div>"),s.b("\n"+i),s.b("</div>"),s.fl()},partials:{},subs:{}},'<div class="message">\n    <div class="message__left">\n        <div class="message__avatar" style="background-image:url(/images/avatars/profile{{avatarId}}.jpg);"></div>\n    </div>\n    <div class="message__right">\n        <div class="message__head">\n            <div class="message__username">{{username}}</div>\n            <div class="message__time">{{time}}</div>\n        </div>\n        <div class="message__body">{{{message}}}</div>\n    </div>\n</div>',s);return e.render.apply(e,arguments)}},function(e,a,i){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e){var a=e.currentTarget;f.forEach(function(e){e.className=e.className.replace(new RegExp("(^|\\b)"+"active".split(" ").join("|")+"(\\b|$)","gi")," ")}),a.className+=" active",clearTimeout(p),y.forEach(function(e,a){clearTimeout(y[a])}),b.innerHTML="";var i="";new RegExp("(^| )window__sidebar-channel( |$)","gi").test(a.className)&&(i="#"),v.innerHTML=i+a.innerHTML,null!=l[a.innerHTML]&&r(l[a.innerHTML])}function r(e){e.forEach(function(a,s){y[s]=setTimeout(function(){var n=o(),r=i(0)({username:a.u,message:a.m,time:n,avatarId:d[a.u]});b.innerHTML=b.innerHTML+r,b.scrollTop=b.scrollHeight,s==e.length-1&&(p=setTimeout(function(){var e=0;f.forEach(function(a,i){new RegExp("(^| )active( |$)","gi").test(a.className)&&(e=i+1)==f.length&&(e=0)}),f[e].click()},3e3))},1500*s)})}function t(e){var a=o(),s=i(0)({username:"me",message:"<img src='"+m("img",e.currentTarget).src+"'/>",time:a,avatarId:d.me});b.innerHTML=b.innerHTML+s,b.scrollTop=b.scrollHeight}function o(){var e=new Date,a=e.getHours(),i=a>=12?"PM":"AM";a%=12,a=a||12;var s=e.getMinutes();return s<10&&(s="0"+s),a+":"+s+" "+i}function m(e,a){return(a||document).querySelector(e)}function c(e,a){return Array.from((a||document).querySelectorAll(e))}var u=function(){function e(e,a){for(var i=0;i<a.length;i++){var s=a[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(a,i,s){return i&&e(a.prototype,i),s&&e(a,s),a}}(),g=function(){function e(){s(this,e)}return u(e,[{key:"build",value:function(){}},{key:"observe",value:function(){}}]),e}();e.exports=g,new g;var l={womenintech:[{u:"productmanager",m:"Happy Chinese New Year! <img src='/images/emoji/firecrackers.png'/>"},{u:"uiuxdesigner",m:"Yes!<img src='/images/emoji/tiger_dumpling.png'/>"},{u:"uiuxdesigner",m:"<img src='/images/emoji/tiger_hug.png'/>"},{u:"productmanager",m:"It's the year of tiger! <img src='/images/emoji/tiger_star.png'/>"},{u:"productmanager",m:"<img src='/images/emoji/tiger_love.png'/>"},{u:"scrummaster",m:"We are all hard working tigers! <img src='/images/emoji/tiger_working.png'/>"}],hers2explore:[{u:"literallyanyPM",m:"WHO TOOK MY <img src='/images/emojis/dongle.png'/>"}],theyearoftiger:[{u:"me",m:"I made a set of tiger emojis for the Chinese New Year!"},{u:"frontenddeveloper",m:"Really? Let me see!"},{u:"me",m:"Check it out! <img src='/images/emoji/tiger_tongue.png'/>"}],newbusinesspitch:[{u:"meanswell",m:"Should we ask about budget?"},{u:"literallyanyPM",m:"<img src='/images/emojis/can-of-worms.gif'/>"}],tryingtowinawards:[{u:"thatoneguy",m:"hear me out."},{u:"thatoneguy",m:"a talking fish would take this idea from 0 to <img src='/images/emojis/winning.gif'/>"},{u:"thatoneguy",m:"like actually"},{u:"bosslady",m:"no."},{u:"bossman",m:"<img src='/images/emojis/killed-idea.gif'/>"}],ShawnP:[{u:"ShawnP",m:"Did you stay late last night?"},{u:"me",m:"haven’t left."},{u:"me",m:"<img src='/images/emojis/working-late.png'/>"},{u:"ShawnP",m:"<img src='/images/emojis/shit-sandwich.gif'/>"},{u:"me",m:"more like <img src='/images/emojis/dumpster-fire.gif'/>"}],LucyTheCat:[{u:"LucyTheCat",m:"Mew! I want to be a tiger! <img src='/images/emoji/tiger_sunglasses.png'/>"},{u:"LucyTheCat",m:"RAWR"},{u:"Me",m:"??"}],myartdirector:[{u:"myartdirector",m:"did you see the feedback…"},{u:"me",m:"oh no…"},{u:"me",m:"<img src='/images/emojis/shit-sandwich.gif'/> ?"},{u:"myartdirector",m:"<img src='/images/emojis/shit-sandwich.gif'/>"}]},d={me:"01",ShawnP:"02",myartdirector:"03",uiuxdesigner:"04",productmanager:"05",literallyanyPM:"06",frontenddeveloper:"07",scrummaster:"08",meanswell:"09",thatoneguy:"10",bosslady:"11",LucyTheCat:"12",bossman:"13"},f=c(".js-convo-link"),b=document.getElementById("js-convo-body"),v=document.getElementById("js-convo-title"),y=[],p=null;f.forEach(function(e){e.addEventListener("click",n.bind(this))}),r(l.womenintech),c(".js-emoji-button").forEach(function(e){e.addEventListener("click",t.bind(this))})}],[1]);
//# sourceMappingURL=app.js.map
