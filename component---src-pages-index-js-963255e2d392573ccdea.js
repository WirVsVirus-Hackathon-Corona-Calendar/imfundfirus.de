(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,a,t){"use strict";t("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("EK0E"),t("INYr"),t("0mN4");var r=t("TqRt");a.__esModule=!0,a.default=void 0;var i,n=r(t("PJYZ")),s=r(t("VbXa")),l=r(t("8OQS")),c=r(t("pVnL")),o=r(t("q1tI")),d=r(t("17x9")),f=function(e){var a=(0,c.default)({},e),t=a.resolutions,r=a.sizes,i=a.critical;return t&&(a.fixed=t,delete a.resolutions),r&&(a.fluid=r,delete a.sizes),i&&(a.loading="eager"),a.fluid&&(a.fluid=w([].concat(a.fluid))),a.fixed&&(a.fixed=w([].concat(a.fixed))),a},u=function(e){var a=e.media;return!!a&&(E&&!!window.matchMedia(a).matches)},m=function(e){var a=e.fluid,t=e.fixed;return p(a||t).src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var a=e.findIndex(u);if(-1!==a)return e[a];var t=e.findIndex((function(e){return void 0===e.media}));if(-1!==t)return e[t]}return e[0]},h=Object.create({}),g=function(e){var a=f(e),t=m(a);return h[t]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var a=e.src,t=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:a},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:t,sizes:n}))}))}function w(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function k(e){return e.map((function(e){var a=e.src,t=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:a,media:t,srcSet:r})}))}function I(e){return e.map((function(e){var a=e.src,t=e.media,r=e.base64;return o.default.createElement("source",{key:a,media:t,srcSet:r})}))}function N(e,a){var t=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(a?r:t)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,a){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var a=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),a())}}))}),{rootMargin:"200px"})),i);return t&&(t.observe(e),S.set(e,a)),function(){t.unobserve(e),S.delete(e)}},_=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+o+s+l+t+r+a+n+i+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var a=e.src,t=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=o.default.createElement(P,(0,c.default)({src:a},i,{ariaHidden:n}));return t.length>1?o.default.createElement("picture",null,r(t),s):s},P=o.default.forwardRef((function(e,a){var t=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:t,srcSet:r,src:i},p,{onLoad:s,onError:d,ref:a,loading:f,draggable:u,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));P.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var V=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=E&&g(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!v&&b&&!t.isCritical&&!t.seenBefore;var r=t.isCritical||E&&(v||!t.useIOSupport);return t.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)(t)),t.handleRef=t.handleRef.bind((0,n.default)(t)),t}(0,s.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){a.setState({imgLoaded:e,imgCached:!(!a.imageRef.current||!a.imageRef.current.currentSrc)})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=f(e),t=m(a),h[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=f(this.props),a=e.title,t=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,N=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,c.default)({opacity:x?1:0,transition:V?"opacity "+E+"ms":"none"},l),R="boolean"==typeof v?"lightgray":v,T={transitionDelay:E+"ms"},C=(0,c.default)({opacity:this.state.imgLoaded?0:1},V&&T,{},l,{},u),z={title:a,alt:this.state.isVisible?"":t,style:C,className:m,itemProp:S};if(h){var B=h,H=p(h);return o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},o.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),R&&o.default.createElement(b,{"aria-hidden":!0,title:a,style:(0,c.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),H.base64&&o.default.createElement(L,{ariaHidden:!0,src:H.base64,spreadProps:z,imageVariants:B,generateSources:I}),H.tracedSVG&&o.default.createElement(L,{ariaHidden:!0,src:H.tracedSVG,spreadProps:z,imageVariants:B,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,y(B),o.default.createElement(P,{alt:t,title:a,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,c.default)({alt:t,title:a,loading:w},H,{imageVariants:B}))}}))}if(g){var q=g,M=p(g),j=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete j.display,o.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&o.default.createElement(b,{"aria-hidden":!0,title:a,style:(0,c.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&T)}),M.base64&&o.default.createElement(L,{ariaHidden:!0,src:M.base64,spreadProps:z,imageVariants:q,generateSources:I}),M.tracedSVG&&o.default.createElement(L,{ariaHidden:!0,src:M.tracedSVG,spreadProps:z,imageVariants:q,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,y(q),o.default.createElement(P,{alt:t,title:a,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,c.default)({alt:t,title:a,loading:w},M,{imageVariants:q}))}}))}return null},a}(o.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});V.propTypes={resolutions:O,sizes:R,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var T=V;a.default=T},INYr:function(e,a,t){"use strict";var r=t("XKFU"),i=t("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t("nGyu")(n)},OGtf:function(e,a,t){var r=t("XKFU"),i=t("eeVq"),n=t("vhPU"),s=/"/g,l=function(e,a,t,r){var i=String(n(e)),l="<"+a;return""!==t&&(l+=" "+t+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(l),r(r.P+r.F*i((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return f}));t("0mN4");var r=t("q1tI"),i=t.n(r),n=t("9eSz"),s=t.n(n),l=t("Bl7J"),c=t("vrFN"),o=(t("vs8Z"),t("se3C")),d=t.n(o);a.default=function(e){var a=e.data;return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:"Home",keywords:d.a.app_keywords}),i.a.createElement("div",{className:"imageWrapper",style:{backgroundImage:"linear-gradient("+d.a.cover_overlay_color_rgba+","+d.a.cover_overlay_color_rgba+"),url("+a.headerImage.childImageSharp.fluid.src+")"}},i.a.createElement("div",{className:"headerBackground"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("div",{className:"logo"},i.a.createElement("div",{className:"appIconShadow"},i.a.createElement("svg",{width:"0",height:"0"},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"shape"},i.a.createElement("path",{id:"shape",d:"M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z",transform:"translate(-6131 -218)"})))),i.a.createElement(s.a,{fluid:a.headerIcon.childImageSharp.fluid,className:"headerIcon"})),i.a.createElement("p",{className:"headerName"},d.a.app_name)),i.a.createElement("nav",null,i.a.createElement("ul",null,d.a.presskit_download_link&&i.a.createElement("li",null,i.a.createElement("a",{href:d.a.presskit_download_link},"Press Kit"))))),i.a.createElement("div",{className:"iphonePreview",style:{backgroundImage:"url("+("black"===d.a.device_color?a.iphonePreviewBlack.childImageSharp.fluid.src:"blue"===d.a.device_color?a.iphonePreviewBlue.childImageSharp.fluid.src:"coral"===d.a.device_color?a.iphonePreviewCoral.childImageSharp.fluid.src:"white"===d.a.device_color?a.iphonePreviewWhite.childImageSharp.fluid.src:a.iphonePreviewYellow.childImageSharp.fluid.src)+")"}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 0 0",style:{position:"absolute"}},i.a.createElement("clipPath",{id:"screenMask",clipPathUnits:"objectBoundingBox",transform:"scale(.00257 .00119)"},i.a.createElement("path",{d:"M6490.24,1234.36H6216.28c-2.57,0-10.55-.07-12.07-0.07a87.524,87.524,0,0,1-12-1.03,40.051,40.051,0,0,1-11.4-3.79,38.315,38.315,0,0,1-16.82-16.84,39.948,39.948,0,0,1-3.78-11.42,72.257,72.257,0,0,1-1.04-12.02c-0.06-1.83-.06-5.56-0.06-5.56V452.125h0s0.06-11.391.06-12.086a87.9,87.9,0,0,1,1.04-12.025,39.843,39.843,0,0,1,3.78-11.413,38.283,38.283,0,0,1,16.82-16.847,39.762,39.762,0,0,1,11.4-3.785,71.909,71.909,0,0,1,12-1.037c16.99-.567,36.32-0.061,34.51-0.061,5.02,0,6.5,3.439,6.63,6.962a35.611,35.611,0,0,0,1.2,8.156,21.326,21.326,0,0,0,19.18,15.592c2.28,0.192,6.78.355,6.78,0.355H6433.7s4.5-.059,6.79-0.251a21.348,21.348,0,0,0,19.18-15.591,35.582,35.582,0,0,0,1.19-8.154c0.13-3.523,1.61-6.962,6.64-6.962-1.81,0,17.52-.5,34.5.061a71.923,71.923,0,0,1,12.01,1.038,39.832,39.832,0,0,1,11.4,3.784,38.283,38.283,0,0,1,16.82,16.844,40.153,40.153,0,0,1,3.78,11.413,87.844,87.844,0,0,1,1.03,12.023c0,0.695.06,12.084,0.06,12.084h0V1183.64s0,3.72-.06,5.55a72.366,72.366,0,0,1-1.03,12.03,40.2,40.2,0,0,1-3.78,11.41,38.315,38.315,0,0,1-16.82,16.84,40.155,40.155,0,0,1-11.4,3.79,87.669,87.669,0,0,1-12.01,1.03c-1.52,0-9.5.07-12.07,0.07",transform:"translate(-6159.12 -394.656)"}))),"video"===d.a.video_or_screenshot&&i.a.createElement("div",{className:"videoContainer"},i.a.createElement("video",{className:"screenvideo",autoPlay:"autoplay",controls:"controls"},i.a.createElement("source",{src:a.videoScreen.publicURL,type:"video/"+("mov"===a.videoScreen.extension?"mp4":a.videoScreen.extension)}))),"screenshot"===d.a.video_or_screenshot&&i.a.createElement(s.a,{fluid:a.iphoneScreen.childImageSharp.fluid,className:"iphoneScreen"})),i.a.createElement("div",{className:"appInfo"},i.a.createElement("div",{className:"appIconShadow"},i.a.createElement("svg",{width:"0",height:"0"},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"shape120"},i.a.createElement("path",{id:"shape",d:"M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z",transform:"translate(-6701 -458)",filter:"url(#f1)"})))),i.a.createElement(s.a,{fluid:a.appIconLarge.childImageSharp.fluid,className:"appIconLarge"})),i.a.createElement("div",{className:"appNamePriceContainer"},i.a.createElement("h1",{className:"appName"},d.a.app_name),i.a.createElement("h2",{className:"appPrice"},d.a.app_price)),i.a.createElement("div",{className:"appDescriptionContainer"},i.a.createElement("p",{className:"appDescription"},d.a.app_description)),i.a.createElement("div",{className:"downloadButtonsContainer"},d.a.playstore_link&&i.a.createElement("a",{className:"playStoreLink",href:d.a.playstore_link},i.a.createElement(s.a,{fixed:a.playStore.childImageSharp.fixed,className:"playStore"})),d.a.appstore_link&&i.a.createElement("a",{className:"appStoreLink",href:d.a.appstore_link},i.a.createElement(s.a,{fixed:a.appStore.childImageSharp.fixed,className:"appStore"})))),i.a.createElement("div",{className:"features"},d.a.features.map((function(e){return e.title?i.a.createElement("div",{className:"feature"},i.a.createElement("div",null,i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"iconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"iconTop fas fa-"+e.fontawesome_icon_name+" fa-stack-1x"}))),i.a.createElement("div",{className:"featureText"},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.description))):null}))),i.a.createElement("footer",null,i.a.createElement("p",{className:"footerText"},"Mit ❤️ entwickelt von Teilnehmern des #WirVsVirus Hackathons"),i.a.createElement("div",{className:"footerIcons"},d.a.facebook_username&&i.a.createElement("a",{href:"https://facebook.com/"+d.a.facebook_username,"aria-label":"Facebook"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fab fa-facebook fa-stack-1x"}))),d.a.linkedin_username&&i.a.createElement("a",{href:"https://www.linkedin.com/in/"+d.a.linkedin_username,"aria-label":"LinkedIn"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fab fa-linkedin fa-stack-1x"}))),d.a.twitter_username&&i.a.createElement("a",{href:"https://twitter.com/"+d.a.twitter_username,"aria-label":"Twitter"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fab fa-twitter fa-stack-1x"}))),d.a.github_username&&i.a.createElement("a",{href:"https://github.com/"+d.a.github_username,"aria-label":"GitHub"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fab fa-github fa-stack-1x"}))),d.a.email_address&&i.a.createElement("a",{href:"mailto:"+d.a.email_address,"aria-label":"Email"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fas fa-envelope fa-stack-1x"})))))))))};var f="1523949932"}}]);
//# sourceMappingURL=component---src-pages-index-js-963255e2d392573ccdea.js.map