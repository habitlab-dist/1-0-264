window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/bower_components/habitlab-paper-item/habitlab-paper-item-0.js":function(e,t){Polymer({is:"habitlab-paper-item",behaviors:[Polymer.PaperItemBehavior]})},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior-0.js":function(e,t){Polymer.PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}},Polymer.PaperItemBehavior=[Polymer.IronButtonState,Polymer.IronControlState,Polymer.PaperItemBehaviorImpl]},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/polymer/polymer.deps.js"),o("./src/bower_components/iron-behaviors/iron-button-state.deps.js"),o("./src/bower_components/iron-behaviors/iron-control-state.deps.js"),r(o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.html"),"bower_components/habitlab-paper-item/habitlab-paper-item-behavior.html"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior-0.js")},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.html":function(e,t){e.exports="<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-behaviors/iron-button-state.html> <link rel=import href=../iron-behaviors/iron-control-state.html> <script src=habitlab-paper-item-behavior-0.js><\/script> </head><body></body></html>"},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js"),o("./src/bower_components/paper-styles/color.deps.js"),o("./src/bower_components/paper-styles/default-theme.deps.js"),o("./src/bower_components/paper-styles/typography.deps.js"),r(o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.html"),"bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.html")},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.html":function(e,t){e.exports=" <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../paper-styles/color.html> <link rel=import href=../paper-styles/default-theme.html> <link rel=import href=../paper-styles/typography.html> <habitlab-dom-module id=habitlab-paper-item-shared-styles> <template> <style>.habitlab-paper-item,:host{display:block;position:relative;min-height:var(--habitlab-paper-item-min-height,48px);padding:0 16px}.habitlab-paper-item{@apply(--paper-font-subhead);border:none;outline:0;background:#fff;width:100%;text-align:left}.habitlab-paper-item[hidden],:host([hidden]){display:none!important}.habitlab-paper-item.iron-selected,:host(.iron-selected){font-weight:var(--habitlab-paper-item-selected-weight,bold);@apply(--habitlab-paper-item-selected)}.habitlab-paper-item[disabled],:host([disabled]){color:var(--habitlab-paper-item-disabled-color,--disabled-text-color);@apply(--habitlab-paper-item-disabled)}.habitlab-paper-item:focus,:host(:focus){position:relative;outline:0;@apply(--habitlab-paper-item-focused)}.habitlab-paper-item:focus:before,:host(:focus):before{@apply(--layout-fit);background:currentColor;content:'';opacity:var(--dark-divider-opacity);pointer-events:none;@apply(--habitlab-paper-item-focused-before)}</style> </template> </habitlab-dom-module> "},"./src/bower_components/habitlab-paper-item/habitlab-paper-item.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/polymer/polymer.deps.js"),o("./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.deps.js"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.deps.js"),r(o("./src/bower_components/habitlab-paper-item/habitlab-paper-item.html"),"bower_components/habitlab-paper-item/habitlab-paper-item.html"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-0.js")},"./src/bower_components/habitlab-paper-item/habitlab-paper-item.html":function(e,t){e.exports="<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=habitlab-paper-item-behavior.html> <link rel=import href=habitlab-paper-item-shared-styles.html> </head><body><habitlab-dom-module id=habitlab-paper-item> <template> <style include=habitlab-paper-item-shared-styles></style> <style>:host{@apply(--layout-horizontal);@apply(--layout-center);@apply(--paper-font-subhead);@apply(--habitlab-paper-item)}</style> <content></content> </template> <script src=habitlab-paper-item-0.js><\/script> </habitlab-dom-module> </body></html>"},"./src/components/positive-site-trigger-v2.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/polymer/polymer.deps.js"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item.deps.js"),o("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),o("./src/components/habitlab-logo-v2.deps.js"),r(o("./src/components/positive-site-trigger-v2.html"),"components/positive-site-trigger-v2.html"),o("./src/components/positive-site-trigger-v2.js")},"./src/components/positive-site-trigger-v2.html":function(e,t){e.exports="<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-item/habitlab-paper-item.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=habitlab-logo-v2.html> <habitlab-dom-module id=positive-site-trigger-v2> <template> <habitlab-custom-style> <style is=habitlab-custom-style>:host{--habitlab-paper-item:{font-family:Verdana,Geneva,sans-serif;font-size:20px;font-color:#526FAB;overflow:hidden;white-space:nowrap;display:block;text-overflow:ellipsis};--habitlab-paper-item-min-height:36px}#site-icon{width:20px;border-radius:5px;box-shadow:2px 2px 2px #888}.hdr{padding:10px;font-size:20px;display:flex}#goal{padding:10px;display:table;font-size:14px}#goal-description{display:table-cell;vertical-align:middle;padding-left:10px}#trigger-container{max-width:519px;min-width:400px;padding:20px;display:flex;flex-direction:column;align-items:center;text-align:center;font-family:var(--trigger-font-family);border-color:var(--trigger-border-color,#fff);border-style:var(--trigger-border-style,none);border-width:var(--trigger-border-width,0);background-color:var(--trigger-bg-color,#fff)}#intro-text{font-size:20px;padding-bottom:10px}.text-div{font-family:Verdana,Geneva,sans-serif;text-align:center;color:#415D67;line-height:150%;font-size:15px}#trigger-button{cursor:pointer;margin:10px;padding:10px;background-color:green;color:#fff;font-size:14px;box-shadow:2px 2px 2px #888;height:40px;vertical-align:middle}#trigger-button-div{margin:10px;height:50px;display:flex;align-items:center;justify-content:center;text-align:center;height:100%;width:100%}#trigger-button-div .streak-img{height:80%;margin:5px}#streak-container{display:table;font-size:20px;margin:10px;padding:5px 10px 5px 10px;background-color:#3c5a96;border-radius:5px;color:#fff;box-shadow:2px 2px 2px #888}#streak-box{height:40px;width:60px;display:flex;align-items:center;justify-content:center;text-align:left;padding:5px;background-color:#3c5a96;color:#fff;border-color:var(--trigger-streak-border-color,#fff);border-style:var(--trigger-streak-border-style,none);border-width:var(--trigger-streak-border-width,0)}#streak-box .streak-img{height:80%;margin:5px}#grey-space{background-color:#e9ebee;height:12px;margin-left:-1px;margin-right:-1px}#shadow{height:1px;background-color:#1d2129;opacity:.2}</style> </habitlab-custom-style> <div id=trigger-container> <div class=hdr>Remember your goal to {{positiveGoalStatement}}?</div> <habitlab-paper-button id=trigger-button> <div id=trigger-button-div> <div on-click=goClicked>{{callToAction}}</div> </div> </habitlab-paper-button> <template is=habitlab-dom-if if={{in_facebook_news_feed}}> <habitlab-logo-v2></habitlab-logo-v2> </template> </div> <template is=habitlab-dom-if if={{in_facebook_news_feed}}> <div id=shadow></div> <div id=grey-space></div> </template> </template> <script src=positive-site-trigger-v2.js><\/script> </habitlab-dom-module>"},"./src/components/positive-site-trigger-v2.js":function(e,t,o){const{polymer_ext:r}=o("./src/libs_frontend/polymer_utils.ls"),{log_action:i}=o("./src/libs_frontend/intervention_log_utils.ls"),{get_goal_info:p}=o("./src/libs_common/intervention_info.ls"),{get_goal_statement:s}=o("./src/generated_libs/libs_frontend/goal_utils.js"),{get_streak:n}=o("./src/generated_libs/libs_frontend/streak_utils.js"),{get_favicon_data_for_domain:a}=o("./src/generated_libs/libs_frontend/favicon_utils.js");r({is:"positive-site-trigger-v2",properties:{goal:{type:Object,observer:"goal_changed"},positiveSite:{type:String,computed:"compute_sitename(goal)"},positiveSiteIcon:{type:String},streakIconURL:{type:String,value:chrome.extension.getURL("icons/streak.svg")},positiveGoalStatement:{type:String},callToAction:{type:String,computed:"compute_call_to_action(goal)"},in_facebook_news_feed:{type:Boolean,value:!1}},goClicked:function(){i({positive:"Went to positive site."});var e=this.goal.domain;-1==e.search("http")&&(e="https://"+e),window.location.href=e},compute_sitename:function(e){return null==e?"":e.sitename_printable},goal_changed:async function(e){this.positiveSiteIcon=await this.compute_icon(e),this.streak=await n(e),console.log("set goal to "+e.name),this.update_goal_statement(e)},compute_icon:async function(e){if(null==e)return"";if(null!=e.icon)return e.icon;if(null!=e.domain){return await a(e.domain)}return console.error("couldn't compute icon for goal "+e.name),""},update_goal_statement:async function(e){let t=await s(e);(t=t.substring(0,1).toLowerCase()+t.substring(1)).endsWith(".")&&(t=t.substring(0,t.length-1)),this.positiveGoalStatement=t},compute_call_to_action:function(e){return null==e?"":e.call_to_action},ready:async function(){this.goal=p()}})},"./src/generated_libs/libs_frontend/favicon_utils.js":function(e,t,o){const{import_lib:r}=o("./src/libs_frontend/import_lib.ls");e.exports=r("favicon_utils")},"./src/generated_libs/libs_frontend/streak_utils.js":function(e,t,o){const{import_lib:r}=o("./src/libs_frontend/import_lib.ls");e.exports=r("streak_utils")}}]);