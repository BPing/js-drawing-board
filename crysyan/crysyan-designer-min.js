/**
 * crysyan - a web drawing board with canvas
 * @version v0.1.3.fix20170310
 * @link https://home.cbping.vip/crysyan/
 * @author cbping
 * @license Apache License Version 2.0
 */
!function(){function e(){if(window.crypto&&window.crypto.getRandomValues&&navigator.userAgent.indexOf("Safari")===-1){for(var e=window.crypto.getRandomValues(new Uint32Array(3)),r="",n=0,a=e.length;n<a;n++)r+=e[n].toString(36);return r}return(Math.random()*(new Date).getTime()).toString(36).replace(/\./g,"")}function r(r,n){var a=this;a.appendTo=function(i){a.iframe=document.createElement("iframe"),a.iframe.name=r.ifrName?r.ifrName:"default-iframe"+e(),a.iframe.uid=a.iframe.name,a.iframe.src=(r.projectPath||"")+"crysyan.html?config="+JSON.stringify(r),a.iframe.style.width="100%",a.iframe.style.height="100%",a.iframe.style.border=0,a.iframe.onload=function(){n(a)},i.appendChild(a.iframe)},a.destroy=function(){a.iframe&&(a.iframe.parentNode.removeChild(a.iframe),a.iframe=null)},a.getView=function(){return window[a.iframe.uid].Crysyan.getView()},a.drawBackgroupWithImage=function(e,r){a.drawBackgroundWithImage(e,r)},a.drawBackgroundWithImage=function(e,r){var n=window[a.iframe.uid].Crysyan.getView();n.crysyanCanvas.drawBackgroundWithImage(e,r)},a.toDataUrl=function(e){"undefined"==typeof e&&(e="image/png");var r=window[a.iframe.uid].Crysyan.getView();return r.crysyanCanvas.toDataURL(e)},a.getCanvasRecorder=function(e){var r=window[a.iframe.uid].Crysyan.getView();return r.crysyanCanvas.getCanvasRecorder(e)}}if(!window.$){var n=window.parent.$||window.jQuery;if(!n)throw new Error("Crysyan requires 'jQuery'");window.$=n}$.fn.CrysyanDesigner=function(e,n){var a=this;a.each(function(){new r(e,n).appendTo(this)})},window.CrysyanDesigner=r}();