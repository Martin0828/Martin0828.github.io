﻿/**
 * Copyright (c) 2012 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.7
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3-58b-dfhj-oq-zA-Z]|[1-4]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(b($){$.fn.adGallery=b(1J){4 2x={3c:\'1f.gif\',3d:0,3e:B,2y:c,18:0.7,3f:c,13:400,h:c,s:c,3g:B,3h:B,2z:0,o:{1u:B,2A:c,1v:5000,3i:\'Start\',3j:\'Stop\',2B:B,3k:\'(\',3l:\')\',3m:c,3n:c},3o:\'2C-3p\',3q:B,1V:B,1W:{1X:c},1Y:{1w:c,3r:c,3s:c}};4 d=$.3t(c,2x,1J);5(1J&&1J.o){d.o=$.3t(c,2x.o,1J.o)};5(!d.o.1u){d.o.2A=c};4 1Z=[];$(3).2D(b(){4 3u=20 2E(3,d);1Z[1Z.z]=3u});q 1Z};b 3v(m,P,k){4 21=14(m.n(\'X\'),10);5(P==\'v\'){4 2F=\'-\'+3.G+\'A\';m.n(\'X\',3.G+\'A\')}t{4 2F=3.G+\'A\';m.n(\'X\',\'-\'+3.G+\'A\')};5(k){k.n(\'1x\',\'-\'+k[0].22+\'A\');k.1g({1x:0},3.d.13*2)};5(3.Y){3.Y.1g({1x:\'-\'+3.Y[0].22+\'A\'},3.d.13*2)};q{19:{X:2F},1y:{X:21}}};b 3w(m,P,k){4 23=14(m.n(\'v\'),10);5(P==\'v\'){4 2G=\'-\'+3.M+\'A\';m.n(\'v\',3.M+\'A\')}t{4 2G=3.M+\'A\';m.n(\'v\',\'-\'+3.M+\'A\')};5(k){k.n(\'1x\',\'-\'+k[0].22+\'A\');k.1g({1x:0},3.d.13*2)};5(3.Y){3.Y.1g({1x:\'-\'+3.Y[0].22+\'A\'},3.d.13*2)};q{19:{v:2G},1y:{v:23}}};b 3x(m,P,k){4 T=m.h();4 U=m.s();4 23=14(m.n(\'v\'),10);4 21=14(m.n(\'X\'),10);m.n({h:0,s:0,X:3.G/2,v:3.M/2});q{19:{h:0,s:0,X:3.G/2,v:3.M/2},1y:{h:T,s:U,X:21,v:23}}};b 3y(m,P,k){m.n(\'V\',0);q{19:{V:0},1y:{V:1}}};b 3z(m,P,k){m.n(\'V\',0);q{19:{V:0},1y:{V:1},1v:0}};b 2E(Q,d){3.1w(Q,d)};2E.3A={Q:c,Z:c,1z:c,15:c,1f:c,1K:c,I:c,1o:0,24:c,25:c,1A:c,1B:c,o:c,M:0,G:0,C:-1,1p:c,Y:c,26:0,d:c,w:c,1C:c,27:c,1w:b(Q,d){4 8=3;3.Q=$(Q);3.d=d;3.3B();3.3C();5(3.d.h){3.M=3.d.h;3.Z.h(3.d.h);3.Q.h(3.d.h)}t{3.M=3.Z.h()};5(3.d.s){3.G=3.d.s;3.Z.s(3.d.s)}t{3.G=3.Z.s()};3.26=3.15.h();3.C=-1;3.1p=c;3.Y=c;3.1C=c;3.3D();5(3.d.3g){3.3E()};4 1a=b(D){q 8.28(D)};3.o=20 2H(1a,3.d.o);3.R.H(3.o.3F());5(3.d.o.1u){3.o.1u()}t{3.o.2I()};5(3.d.3h){3.3G()};5(3.d.3q){3.3H()};3.3I();4 29=14(3.d.3d,10);5(1q 3.1L()!="1h"){29=3.1L()};3.2a(B);3.1i(29,b(){5(8.d.o.2A){8.1j(29+1);8.o.1M()}});3.W(3.d.1Y.1w)},3C:b(){3.27={\'2C-vert\':3v,\'2C-3p\':3w,\'resize\':3x,\'fade\':3y,\'none\':3z}},3B:b(){3.R=3.Q.x(\'.f-R\');3.1z=$(\'<p K="f-info"></p>\');3.R.H(3.1z);3.Z=3.Q.x(\'.f-j-Q\');3.Z.empty();3.15=3.Q.x(\'.f-15\');3.I=3.15.x(\'.f-1N\');3.1K=$(\'<E K="f-1K"></E>\');3.1f=$(\'<r K="f-1f" 2b="\'+3.d.3c+\'">\');3.Z.H(3.1f);3.1f.1k();$(2c.body).H(3.1K)},2a:b(3J){5(3J){3.1f.1D()}t{3.1f.1k()}},addAnimation:b(3K,fn){5($.2J(fn)){3.27[3K]=fn}},3D:b(){4 8=3;3.w=[];4 2K=0;4 1N=3.I.x(\'a\');4 3L=1N.z;5(3.d.18<1){1N.x(\'r\').n(\'V\',3.d.18)};1N.2D(b(i){4 u=$(3);u.11("f-i",i);4 2d=u.J(\'2L\');4 F=u.x(\'r\');8.2M(F[0],b(){4 h=F[0].1E.1E.2e;5(F[0].h==0){h=2f};8.1o+=h;2K++});8.2N(u);8.w[i]=8.2O(u,2d)});4 3M=2g(b(){5(3L==2K){8.2h(8.1o);2i(3M)}},2f)},2h:b(2j){2j-=2f;4 1b=3.15.x(\'.f-F-1b\');1b.n(\'h\',2j+\'A\');4 i=1;4 2P=1b.s();while(i<201){1b.n(\'h\',(2j+i)+\'A\');5(2P!=1b.s()){break};2P=1b.s();i++};5(1b.h()<3.15.h()){1b.h(3.15.h())}},2N:b(u){4 8=3;u.1O(b(){8.1i(u.11("f-i"));8.o.S();q c}).3N(b(){5(!$(3).is(\'.f-1F\')&&8.d.18<1){$(3).x(\'r\').2k(2l,1)};8.1j(u.11("f-i"))},b(){5(!$(3).is(\'.f-1F\')&&8.d.18<1){$(3).x(\'r\').2k(2l,8.d.18)}})},2O:b(N,2d){4 u=c;4 L=N.x("r");5(L.11(\'f-u\')){u=N.11(\'f-u\')}t 5(L.J(\'2Q\')&&L.J(\'2Q\').z){u=L.J(\'2Q\')};4 k=c;5(L.11(\'f-k\')){k=L.11(\'f-k\')}t 5(L.J(\'2m\')&&L.J(\'2m\').z){k=L.J(\'2m\')};4 y=c;5(L.11(\'f-y\')){y=L.11(\'f-y\')}t 5(L.J(\'y\')&&L.J(\'y\').z){y=L.J(\'y\')};q{N:N,j:2d,2R:c,1G:c,k:k,y:y,O:c,u:u}},3H:b(){4 8=3;$(2c).3O(b(e){5(e.2S==39){8.28();8.o.S()}t 5(e.2S==37){8.2T();8.o.S()}})},1L:b(){5(16.1l.1m&&16.1l.1m.indexOf(\'#f-j-\')===0){4 id=16.1l.1m.3P(/^#f-j-/g,\'\');4 F=3.I.x("#"+id);5(F.z){q 3.I.x("a").l(F)}t 5(!isNaN(14(id,10))){q 14(id,10)}};q 1h},3Q:b(l){5(l<0||l>=3.w.z){throw"Cannot 2n j 3R l "+l;};4 j=3.w[l];3.w.splice(l,1);4 N=j.N;4 1Q=N[0].1E.2e;3.1o-=1Q;N.2n();3.2h(3.1o);3.1z.1R((3.C+1)+\' / \'+3.w.z);3.I.x(\'a\').2D(b(i){$(3).11("f-i",i)});5(l==3.C&&3.w.z!=0){3.1i(0)}},removeAllImages:b(){3R(4 i=3.w.z-1;i>=0;i--){3.3Q(i)}},addImage:b(3S,2U,2o,y,1H){2o=2o||"";y=y||"";1H=1H||"";4 li=$(\'<li><a 2L="\'+2U+\'" id="\'+2o+\'"><r 2b="\'+3S+\'" y="\'+y+\'" 2m="\'+1H+\'"></a></li>\');4 8=3;3.I.x("ul").H(li);4 u=li.x("a");4 F=u.x("r");F.n(\'V\',3.d.18);3.2M(F[0],b(){4 1Q=F[0].1E.1E.2e;5(F[0].h==0){1Q=2f};8.1o+=1Q;8.2h(8.1o)});4 i=3.w.z;u.11("f-i",i);3.2N(u);3.w[i]=8.2O(u,2U);3.1z.1R((3.C+1)+\' / \'+3.w.z)},3I:b(){4 8=3;5("onhashchange"in 16){$(16).bind("hashchange",b(){4 l=8.1L();5(1q l!="1h"&&l!=8.C){8.1i(l)}})}t{4 2V=16.1l.1m;2g(b(){5(16.1l.1m!=2V){2V=16.1l.1m;4 l=8.1L();5(1q l!="1h"&&l!=8.C){8.1i(l)}}},200)}},3E:b(){3.1A=$(\'<E K="f-17"><E K="f-17-j"></E></E>\');3.1B=$(\'<E K="f-1c"><E K="f-1c-j"></E></E>\');3.Z.H(3.1A);3.Z.H(3.1B);4 8=3;3.1B.3T(3.1A).mouseover(b(e){$(3).n(\'s\',8.G);$(3).x(\'E\').1D()}).mouseout(b(e){$(3).x(\'E\').1k()}).1O(b(){5($(3).is(\'.f-17\')){8.28();8.o.S()}t{8.2T();8.o.S()}}).x(\'E\').n(\'V\',0.7)},3G:b(){4 8=3;3.25=$(\'<E K="f-2W"></E>\');3.24=$(\'<E K="f-back"></E>\');3.15.H(3.25);3.15.3U(3.24);4 2p=0;4 2X=c;$(3.24).3T(3.25).1O(b(){4 h=8.26-50;5(8.d.2z>0){4 h=8.d.2z};5($(3).is(\'.f-2W\')){4 v=8.I.1s()+h}t{4 v=8.I.1s()-h};5(8.d.o.2B){8.o.S()};8.I.1g({1s:v+\'A\'});q c}).n(\'V\',0.6).3N(b(){4 P=\'v\';5($(3).is(\'.f-2W\')){P=\'2Y\'};2X=2g(b(){2p++;5(2p>30&&8.d.o.2B){8.o.S()};4 v=8.I.1s()+1;5(P==\'v\'){v=8.I.1s()-1};8.I.1s(v)},10);$(3).n(\'V\',1)},b(){2p=0;2i(2X);$(3).n(\'V\',0.6)})},2Z:b(){3.1z.1R((3.C+1)+\' / \'+3.w.z);5(!3.d.1V){3.1B.1D().n(\'s\',3.G);3.1A.1D().n(\'s\',3.G);5(3.C==(3.w.z-1)){3.1A.1k()};5(3.C==0){3.1B.1k()}};5(3.d.3e){4 N=3.w[3.C].N;5(N.J("id")){16.1l.1m="#f-j-"+N.J("id")}t{16.1l.1m="#f-j-"+3.C}};3.W(3.d.1Y.3r)},3V:b(T,U){5(U>3.G){4 2q=T/U;U=3.G;T=3.G*2q};5(T>3.M){4 2q=U/T;T=3.M;U=3.M*2q};q{h:T,s:U}},3W:b(m,T,U){m.n(\'X\',\'3X\');5(U<3.G){4 2r=3.G-U;m.n(\'X\',(2r/2)+\'A\')};m.n(\'v\',\'3X\');5(T<3.M){4 2r=3.M-T;m.n(\'v\',(2r/2)+\'A\')}},3Y:b(j){4 k=c;5(j.k.z||j.y.z){4 y=\'\';5(j.y.z){y=\'<3Z K="f-1H-y">\'+j.y+\'</3Z>\'};4 k=\'\';5(j.k.z){k=\'<1n>\'+j.k+\'</1n>\'};k=$(\'<p K="f-j-1H">\'+y+k+\'</p>\')};q k},1i:b(l,D){5(3.w[l]&&!3.1C&&l!=3.C){4 8=3;4 j=3.w[l];3.1C=B;5(!j.1G){3.2a(B);3.1j(l,b(){8.2a(c);8.31(l,D)})}t{3.31(l,D)}}},31:b(l,D){5(3.w[l]){4 8=3;4 j=3.w[l];4 m=$(2c.createElement(\'E\')).32(\'f-j\');4 r=$(20 40()).J(\'2b\',j.j);5(j.u){4 u=$(\'<a 2L="\'+j.u+\'" target="_blank"></a>\');u.H(r);m.H(u)}t{m.H(r)};3.Z.3U(m);4 O=3.3V(j.O.h,j.O.s);r.J(\'h\',O.h);r.J(\'s\',O.s);m.n({h:O.h+\'A\',s:O.s+\'A\'});3.3W(m,O.h,O.s);4 k=3.3Y(j);5(k){5(!3.d.2y&&!3.d.1W.1X){m.H(k);4 h=O.h-14(k.n(\'41-v\'),10)-14(k.n(\'41-2Y\'),10);k.n(\'h\',h+\'A\')}t 5(3.d.1W.1X){3.d.1W.1X.2s(3,j)}t{4 Q=3.d.2y;Q.H(k)}};3.42(3.w[l].N);4 P=\'2Y\';5(3.C<l){P=\'v\'};3.W(3.d.1Y.3s);5(3.1p||3.d.3f){4 13=3.d.13;4 1I=\'swing\';4 1t=3.27[3.d.3o].2s(3,m,P,k);5(1q 1t.1v!=\'1h\'){13=1t.1v};5(1q 1t.1I!=\'1h\'){1I=1t.1I};5(3.1p){4 19=3.1p;4 33=3.Y;19.1g(1t.19,13,1I,b(){19.2n();5(33)33.2n()})};m.1g(1t.1y,13,1I,b(){8.C=l;8.1p=m;8.Y=k;8.1C=c;8.2Z();8.W(D)})}t{3.C=l;3.1p=m;8.Y=k;3.1C=c;8.2Z();3.W(D)}}},43:b(){5(3.C==(3.w.z-1)){5(!3.d.1V){q c};4 17=0}t{4 17=3.C+1};q 17},28:b(D){4 17=3.43();5(17===c)q c;3.1j(17+1);3.1i(17,D);q B},44:b(){5(3.C==0){5(!3.d.1V){q c};4 1c=3.w.z-1}t{4 1c=3.C-1};q 1c},2T:b(D){4 1c=3.44();5(1c===c)q c;3.1j(1c-1);3.1i(1c,D);q B},preloadAll:b(){4 8=3;4 i=0;b 34(){5(i<8.w.z){i++;8.1j(i,34)}};8.1j(i,34)},1j:b(l,D){5(3.w[l]){4 j=3.w[l];5(!3.w[l].1G){4 r=$(20 40());r.J(\'2b\',j.j);5(!3.35(r[0])){3.1K.H(r);4 8=3;r.45(b(){j.1G=B;j.O={h:3.h,s:3.s};8.W(D)}).2R(b(){j.2R=B;j.1G=c;j.O=c})}t{j.1G=B;j.O={h:r[0].h,s:r[0].s};3.W(D)}}t{3.W(D)}}},2M:b(r,D){5(3.35(r)){D&&D()}t{$(r).45(D)}},35:b(r){5(1q r.46!=\'1h\'&&!r.46){q c};5(1q r.47!=\'1h\'&&r.47==0){q c};q B},42:b(F){3.I.x(\'.f-1F\').48(\'f-1F\');F.32(\'f-1F\');5(3.d.18<1){3.I.x(\'a:not(.f-1F) r\').2k(2l,3.d.18);F.x(\'r\').2k(2l,1)};4 v=F[0].1E.offsetLeft;v-=(3.26/2)-(F[0].2e/2);3.I.1g({1s:v+\'A\'})},W:b(fn){5($.2J(fn)){fn.2s(3)}}};b 2H(1a,d){3.1w(1a,d)};2H.3A={2t:c,2u:c,1d:c,R:c,d:c,1a:c,1T:c,1e:c,2v:c,1w:b(1a,d){4 8=3;3.1a=1a;3.d=d},3F:b(){3.2t=$(\'<1n K="f-o-1M">\'+3.d.3i+\'</1n>\');3.2u=$(\'<1n K="f-o-S">\'+3.d.3j+\'</1n>\');3.1d=$(\'<1n K="f-o-1d"></1n>\');3.R=$(\'<E K="f-o-R"></E>\');3.R.H(3.2t).H(3.2u).H(3.1d);3.1d.1k();4 8=3;3.2t.1O(b(){8.1M()});3.2u.1O(b(){8.S()});$(2c).3O(b(e){5(e.2S==83){5(8.1e){8.S()}t{8.1M()}}});q 3.R},2I:b(){3.1T=c;3.S();3.R.1k()},1u:b(){3.1T=B;3.R.1D()},toggle:b(){5(3.1T){3.2I()}t{3.1u()}},1M:b(){5(3.1e||!3.1T)q c;4 8=3;3.1e=B;3.R.32(\'f-o-1e\');3.36();3.W(3.d.3m);q B},S:b(){5(!3.1e)q c;3.1e=c;3.1d.1k();3.R.48(\'f-o-1e\');2i(3.2v);3.W(3.d.3n);q B},36:b(){4 8=3;4 38=3.d.3k;4 su=3.d.3l;2i(8.2v);3.1d.1D().1R(38+(3.d.1v/3b)+su);4 1U=0;3.2v=2g(b(){1U+=3b;5(1U>=8.d.1v){4 49=b(){5(8.1e){8.36()};1U=0};5(!8.1a(49)){8.S()};1U=0};4 2w=14(8.1d.text().3P(/[^0-9]/g,\'\'),10);2w--;5(2w>0){8.1d.1R(38+2w+su)}},3b)},W:b(fn){5($.2J(fn)){fn.2s(3)}}}})(jQuery);',[],258,'|||this|var|if|||context|||function|false|settings||ad||width||image|desc|index|img_container|css|slideshow||return|img|height|else|link|left|images|find|title|length|px|true|current_index|callback|div|thumb|image_wrapper_height|append|thumbs_wrapper|attr|class|thumb_img|image_wrapper_width|thumb_link|size|direction|wrapper|controls|stop|image_width|image_height|opacity|fireCallback|top|current_description|image_wrapper||data||animation_speed|parseInt|nav|window|next|thumb_opacity|old_image|nextimage_callback|list|prev|countdown|running|loader|animate|undefined|showImage|preloadImage|hide|location|hash|span|thumbs_wrapper_width|current_image|typeof||scrollLeft|animation|enable|speed|init|bottom|new_image|gallery_info|next_link|prev_link|in_transition|show|parentNode|active|preloaded|description|easing|options|preloads|getIndexFromHash|start|thumbs|click||thumb_width|html||enabled|slide_timer|cycle|hooks|displayDescription|callbacks|galleries|new|current_top|offsetHeight|current_left|scroll_back|scroll_forward|nav_display_width|animations|nextImage|start_at|loading|src|document|image_src|offsetWidth|100|setInterval|_setThumbListWidth|clearInterval|wrapper_width|fadeTo|300|alt|remove|image_id|has_scrolled|ratio|dif|call|start_link|stop_link|countdown_interval|sec|defaults|description_wrapper|scroll_jump|autostart|stop_on_scroll|slide|each|AdGallery|old_image_top|old_image_left|AdGallerySlideshow|disable|isFunction|thumbs_loaded|href|whenImageLoaded|_initLink|_createImageData|last_height|longdesc|error|keyCode|prevImage|image_url|current_hash|forward|thumbs_scroll_interval|right|_afterShow||_showWhenLoaded|addClass|old_description|preloadNext|isImageLoaded|_next||pre|||1000|loader_image|start_at_index|update_window_hash|animate_first_image|display_next_and_prev|display_back_and_forward|start_label|stop_label|countdown_prefix|countdown_sufix|onStart|onStop|effect|hori|enable_keyboard_move|afterImageVisible|beforeImageVisible|extend|gallery|VerticalSlideAnimation|HorizontalSlideAnimation|ResizeAnimation|FadeAnimation|NoneAnimation|prototype|setupElements|setupAnimations|findImages|initNextAndPrev|create|initBackAndForward|initKeyEvents|initHashChange|bool|name|thumb_count|inter|hover|keydown|replace|removeImage|for|thumb_url|add|prepend|_getContainedImageSize|_centerImage|0px|_getDescription|strong|Image|padding|highLightThumb|nextIndex|prevIndex|load|complete|naturalWidth|removeClass|whenNextIsShown'.split('|'),0,{}))