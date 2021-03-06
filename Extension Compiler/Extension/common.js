//Constants, used by both background and content script
"use strict";

/**
 * The main namespace. Different methods will be added to this namespace depending on
 * the execution context.
 * @var {Namespace}
 */
var a = {};

//@pragma-if-debug
/**
 * Whether the extension is loaded in debug mode.
 * The compiler is responsible in hard coding this switch.
 * @const {boolean}
 */
a.debugMode = true;
//@pragma-end-if
