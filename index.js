// ==UserScript==
// @name         ithelp-autosave
// @namespace    https://github.com/dragonH/ithelp-autosave
// @version      0.1
// @description  try to take over the world!
// @author       dragonH
// @match        https://ithelp.ithome.com.tw/articles/*/draft
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  try {
    const editor = $('#SimpleMDE_0').data('simplemde');
    editor.options.autosave = {
        enabled: true,
        uniqueId: "He-Says-I-Need-A-uniqueId",
        delay: 1000,
    };
    editor.autosave();
    if ($('.save-group__btn').length) {
        $('.save-group__btn').click((e) => {
          if (!confirm('確定使用儲存草稿? (可能會與此auto save plugin 衝突)')) {
              return false;
          }
        });
    }
    console.log('autosave enabled!');
  } catch (err) {
    throw err;
  }
})();