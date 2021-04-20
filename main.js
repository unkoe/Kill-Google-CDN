// ==UserScript==
// @name         Kill Google CDN
// @namespace    https://stackoverflow.com/
// @version      0.1
// @description  替换掉Google CDN，避免卡顿!
// @author       unkoe
// @match        https://*.stackoverflow.com
// @match        https://*.stackoverflow.com/*
// @grant        none
// ==/UserScript==

!(function() {
    'use strict';

    function createScript (src) {
        let new_script = document.createElement('script')
        new_script.src = src
        return new_script
    }

    Array.from(document.getElementsByTagName('script')).forEach(script => {
        if(script.src.indexOf('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')!=-1){
            let new_src = script.src.replace("https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js");
            script.parentNode.replaceChild(createScript (new_src), script);
        }
    });
})();
