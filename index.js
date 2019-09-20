// ==UserScript==
// @name         ithelp-autosave
// @namespace    https://github.com/dragonH/ithelp-autosave
// @version      0.2
// @description  A script that can auto save editing article on ithelp
// @author       dragonH
// @match        https://ithelp.ithome.com.tw/articles/*
// @exclude      https://ithelp.ithome.com.tw/articles/*/edit
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  try {
    if (!$('[name="subject"]').length) {
      return false;
    }
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
    alert('Auto save 載入成功!');
  } catch (err) {
    throw err;
  }
})();