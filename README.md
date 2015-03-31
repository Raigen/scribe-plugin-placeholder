# Scribe Placeholder Plugin

Command to display placeholder text in [scribe](https://github.com/guardian/scribe/).

## Usage

```javascript
require('css!scribe-plugin-placeholder');

var placeholderPlugin = require('scribe-plugin-placeholder');

// Text to show as placeholder.
var placeholder = 'Enter content...';

// DOM Element containing the scribe editor instance.
var container = document.querySelector('.scribe-editor-container');

scribe.use(placeholderPlugin(placeholder, container));
```

## Installation

```
bower install scribe-plugin-placeholder
```

## Contribute

We will update/maintain this plugin as we update it internally to meet our needs.

See [Using and Contributing to Open Source at Coursera](https://tech.coursera.org/blog/2014/09/08/using-and-contributing-to-open-source-at-coursera/) on how we do
opensource at Coursera.
