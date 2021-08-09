// JavaScript for Mozilla Firefox console
// Firefox: Toggle Add-ons between enabled/disabled (single or bulk) (popup ui)
//
// Name         : firefox-toggle-add-ons-from-console.js
// Project      : https://github.com/icpantsparti/browser-bits
// Version      : 2021.08.09
// File/Update  : https://raw.githubusercontent.com/icpantsparti/browser-bits/main/javascript/firefox-toggle-add-ons-from-console.js
// License (MIT): https://raw.githubusercontent.com/icpantsparti/browser-bits/main/LICENSE
// Disclaimer   : Use with care at your own risk, and verify any results
//
// **** tip: use 'about:addons' and profiles with different add-ons set up ****
//
// This is only useful if you need another way to toggle add-ons on/off:
// * eg: in bulk/single/interactive/javascript
// * eg: https://old.reddit.com/r/firefox/comments/ozfd9u/are_there_any_js_files_that_can_enable_disabling/
// * shows a 'prompt' box popup and you can filter and bulk enable/disable add-ons
// * functions:  toggleAddonByID  listAddons  toggleAddons
//
// Copy/paste the code you want to run to the Firefox console
//
// If you paste all the text from this file into the console
// then toggleAddons(); runs (it shows a 'prompt' popup with user interface,
// and no changes are made until your input)
//
// You can also load/run this file in the console with:
// javascript:(()=>{with(document){let s=createElement('script');s.src='file:///C:/Users/USERNAME/javascript/toggle_add-on_in_firefox_console.js';head.appendChild(s)}})();
//
// Run in either: (1) 'about:addons' (Ctrl+Shift+A) then Web Console (Ctrl+Shift+K)
//            or: (2) Browser Console (Ctrl+Shift+J)
//                    first enable the command input box in 'about:config':
//                    user_pref("devtools.chrome.enabled", true);


// Toggle an add-on between enabled/disabled (by id)
// (get add-on id from 'about:support#addons-tbody' or "List add-ons" below)
// id style is mostly "{ffffffff-ffff-ffff-ffff-ffffffffffff}" sometimes "foo@bar"
//
javascript:var toggleAddonByID=async function(id){var addon=await AddonManager.getAddonByID(id);addon.isActive?addon.disable():addon.enable();console.log((addon.isActive?"Enabled":"Disabled")+": "+addon.name+' "'+addon.id+'"')};
// toggleAddonByID("{ffffffff-ffff-ffff-ffff-ffffffffffff}");
// /* or */
// javascript:AddonManager.getAddonByID("put-add-on-id-here").then(addon=>{addon.isActive?addon.disable():addon.enable();console.log((addon.isActive?"Enabled":"Disabled")+": "+addon.name+' "'+addon.id+'"')})


// List add-ons
// **** you should use 'about:addons' or 'about:support#addons-tbody' ****
// this does a list in the console (lists: isActive?(+/-) name version "id")
// either list all or put regex to show name matches only
//
javascript:var listAddons=async function(match=/.*/i){var addons=await AddonManager.getAddonsByTypes(["extension"]),info="";for(var addon of addons){if(match.test(addon.name)&&!(addon.isBuiltin||addon.isSystem)){info+=(addon.isActive?"+":"-")+' '+addon.name+" "+addon.version+'\t"'+addon.id+'"\n';};};console.log(info.split("\n").sort((a,b)=>a.replace(/^../,"").localeCompare(b.replace(/^../,""))).join("\n"));};
// listAddons();
// istAddons(/add-on-name/i);
// istAddons(/name|name.*two|name3/i);


// Interactive Add-ons Toggle between enabled/disabled (single or in bulk)
// eg toggleAddons();  // user interface = popup prompt
// choose the add-ons to toggle or search by names/all/enabled/disabled
// * no add-on is toggled until you input the line number(s) to toggle
// * the search pre-fills the input box with line numbers (which you can edit)
// * prefix search names with + or - to only list enabled/disabled matches
// * entering just either:  -  +  .*  lists disabled/enabled/all add-ons
// * examples:  name  name|name.*two   .*   -   +   -name   +name|name.*two
//
// only specify parameters if you want certain matches from the start:
//   (1) match:  regex match of add-on names (pre-fills input box)
//   (2) filter: false  list all add-ons
//               true   just list those with name matching
//   (3) enabled: null   enabled+disabled
//                true   just enabled
//                false  just disabled
// toggleAddons(/^$/i,false,null);             // default: no name match/list all/enabled+disabled
// toggleAddons(/add-on-name/i,false,null);    // match name/list all/enabled+disabled 
// toggleAddons(/name|name.*two|name3/i,true,null);   // match names/list matches/enabled+disabled
// toggleAddons(/name|name.*two|name3/i,true,false);  // match names/list matches/just disabled
// toggleAddons(/name|name.*two|name3/i,true,false);  // match names/list matches/just enabled
//
// note when editing: expand code:    sed 's/\/\*\*\//\/**\/\n/g; s/\/\*-/\/*\n-/g;'
//                    condense code:  tr -d '\n'
//
javascript:var toggleAddons=async function(match=/^$/i,filter=false,enabled=null/*boolean*/){/*--*/var addons,list=[],info="",spacer="",divider="\t\t",choices="";/*--*//*list*//*--*/addons=await AddonManager.getAddonsByTypes(["extension"]);/*--*/for(var addon of addons){/*------*/if(!(addon.isBuiltin||addon.isSystem)){/*----------*/list.push({'name':addon.name,'version':addon.version,'id':addon.id,'isActive':addon.isActive});/*------*/}/*--*/}/*--*//*sort*//*--*/list.sort((a,b)=>/*a.isActive==b.isActive?*/a.name.localeCompare(b.name)/*:b.isActive-a.isActive*/);/*--*//*info*//*--*/info="**** Toggle Add-ons between enabled/disabled ****\n";/*--*/info+="**** Filter by entering eg: name|foo.*bar - + .* +foo -bar ****\n";/*--*/info+="**** Only toggles when number(s) entered eg 1,2... ****\n";/*--*/if(typeof(DevToolsSocketStatus)=="undefined"){spacer="..";divider="\n"};/*--*/for(var i=0,l=list.length;i<l;i++){/*------*/if((!filter)||(match.test(list[i].name))){/*----------*/if((enabled==null)||((enabled)&&(list[i].isActive))||((!enabled)&&(!list[i].isActive))){/*--------------*/info+='['+(i+1)+']'+spacer+(list[i].isActive?"+":"-")+spacer+list[i].name+(divider=="\n"?spacer+list[i].version:"")+divider;/*--------------*/if(match.test(list[i].name)){choices+=(i+1)+","}/*----------*/}/*------*/}/*--*/};/*--*//*choose*//*--*/choices=prompt(info,choices);/*--*/if(choices&&/[^0-9, ]/.test(choices)){/*------*/if(/^\+/.test(choices)){/*----------*/toggleAddons(new RegExp(choices.replace(/^\+/,""),"i"),true,true);/*------*/}/*------*/else if(/^-/.test(choices)){/*----------*/toggleAddons(new RegExp(choices.replace(/^-/,""),"i"),true,false);/*------*/}/*------*/else{/*----------*/toggleAddons(new RegExp(choices,"i"),true);/*------*/}/*--*/}/*--*/else {/*------*//*toggle*//*------*/for(var choice of choices.replace(/[^0-9]/g,",").split(",")){/*----------*/if(choice>0&&choice<=list.length){/*--------------*/AddonManager.getAddonByID(list[(choice-1)].id).then(addon=>{/*------------------*/addon.isActive?addon.disable():addon.enable();/*------------------*/console.log((addon.isActive?"Enabled":"Disabled")+": "+addon.name+' "'+addon.id+'"')/*--------------*/})/*----------*/}/*------*/}/*--*/}/**/};/**//*run*//**/toggleAddons();
