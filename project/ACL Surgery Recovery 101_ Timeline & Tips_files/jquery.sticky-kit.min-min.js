(function(){var t,i;t=this.jQuery||window.jQuery,i=t(window),t.fn.stick_in_parent=function(o){var s,e,n,r,c,l,a,p,u,d;for(null==o&&(o={}),a=o.sticky_class,e=o.inner_scrolling,l=o.recalc_every,c=o.parent,r=o.offset_top,n=o.spacer,s=o.bottoming,null==r&&(r=0),null==c&&(c=void 0),null==e&&(e=!0),null==a&&(a="is_stuck"),null==s&&(s=!0),p=function(o,p,u,d,f,h,k,g){var v,m,y,_,b,w,x,C,I,z,A;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),w=o.parent(),null!=c&&(w=w.closest(c)),!w.length)throw"failed to find stick parent";if(v=y=!1,(z=null!=n?n&&o.closest(n):t("<div />"))&&z.css("position",o.css("position")),x=function(){var t,i,s;return!g&&(t=parseInt(w.css("border-top-width"),10),i=parseInt(w.css("padding-top"),10),p=parseInt(w.css("padding-bottom"),10),u=w.offset().top+t+i,d=w.height(),y&&(v=y=!1,null==n&&(o.insertAfter(z),z.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(a),s=!0),f=o.offset().top-parseInt(o.css("margin-top"),10)-r,h=o.outerHeight(!0),k=o.css("float"),z&&z.css({width:o.outerWidth(!0),height:h,display:o.css("display"),"vertical-align":o.css("vertical-align"),"float":k}),s)?A():void 0},x(),h!==d)return _=void 0,b=r,I=l,A=function(){var t,c,m,C;return!g&&(null!=I&&(--I,0>=I&&(I=l,x())),m=i.scrollTop(),null!=_&&(c=m-_),_=m,y?(s&&(C=m+h+b>d+u,v&&!C&&(v=!1,o.css({position:"fixed",bottom:"",top:b}).trigger("sticky_kit:unbottom"))),f>m&&(y=!1,b=r,null==n&&("left"!==k&&"right"!==k||o.insertAfter(z),z.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(a).trigger("sticky_kit:unstick")),e&&(t=i.height(),h+r>t&&!v&&(b-=c,b=Math.max(t-h,b),b=Math.min(r,b),y&&o.css({top:b+"px"})))):m>f&&(y=!0,t={position:"fixed",top:b},t.width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(a),null==n&&(o.after(z),"left"!==k&&"right"!==k||z.append(o)),o.trigger("sticky_kit:stick")),y&&s&&(null==C&&(C=m+h+b>d+u),!v&&C))?(v=!0,"static"===w.css("position")&&w.css({position:"relative"}),o.css({position:"absolute",bottom:p,top:"auto"}).trigger("sticky_kit:bottom")):void 0},C=function(){return x(),A()},m=function(){return g=!0,i.off("touchmove",A),i.off("scroll",A),i.off("resize",C),t(document.body).off("sticky_kit:recalc",C),o.off("sticky_kit:detach",m),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),w.position("position",""),y?(null==n&&("left"!==k&&"right"!==k||o.insertAfter(z),z.remove()),o.removeClass(a)):void 0},i.on("touchmove",A),i.on("scroll",A),i.on("resize",C),t(document.body).on("sticky_kit:recalc",C),o.on("sticky_kit:detach",m),setTimeout(A,0)}},u=0,d=this.length;d>u;u++)o=this[u],p(t(o));return this}}).call(this);