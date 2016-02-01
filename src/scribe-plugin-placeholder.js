/*
 * Copyright 2016 Coursera Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Scribe Placeholder Plugin.
 * Plugin to display placeholder text inside the scribe editor.
 *
 * @param {string} placeholder Placeholder text.
 * @param {HTMLElement} editorContainer DOM element wrapping the scribe editor.
 */
require('./scribe-plugin-placeholder.styl');

var CLASS_NAME = 'scribe-plugin-placeholder';

module.exports = function(placeholder, editorContainer) {
  return function(scribe) {

    /**
     * Get computed style property for given element.
     * From http://www.quirksmode.org/dom/getstyles.html
     */
    function getStyle(el, styleProp) {
      var y;

      if (el.currentStyle) {
        y = el.currentStyle[styleProp];
      } else if (window.getComputedStyle) {
        y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
      }

      return parseInt(y, 10);
    }

    /**
     * Return true if the scribe editor is empty or has a single empty paragraph node.
     */
    function isEditorEmpty() {
      var childNodes = scribe.el.childNodes;
      var blockCount = childNodes.length;

      if (blockCount === 0) {
        return true;
      } else if (blockCount === 1) {
        var node = childNodes[0];
        var nodeName = node.nodeName.toLowerCase();

        if (nodeName === 'p' && node.textContent === '')   {
          return true;
        }
      }

      return false;
    }

    /**
     * Show placeholder.
     */
    function show() {
      var existingPlaceholder = editorContainer.getElementsByClassName(CLASS_NAME);
      if (existingPlaceholder.length !== 0) {
        return;
      }

      var el = document.createElement('div');
      var leftPadding = 2;

      el.className = CLASS_NAME;
      el.innerText = placeholder;

      el.style.top = getStyle(scribe.el, 'padding-top') + getStyle(scribe.el, 'border-top-width') + 'px';
      el.style.left = getStyle(scribe.el, 'padding-left') + leftPadding + 'px';

      editorContainer.appendChild(el);
    }

    /**
     * Hide placeholder.
     */
    function hide() {
      var placeholders = Array.prototype.slice.call(editorContainer.getElementsByClassName(CLASS_NAME));
      placeholders.forEach(function(placeholder) {
        editorContainer.removeChild(placeholder);
      });
    }

    /**
     * Update visibility of placeholder.
     */
    function update() {
      if (isEditorEmpty()) {
        show();
      } else {
        hide();
      }
    }

    scribe.on('content-changed', update);
    scribe.el.addEventListener('blur', update);
    scribe.el.addEventListener('focus', update);
  };
};
