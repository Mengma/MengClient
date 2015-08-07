// **License:** MIT
/* global module, define */

;(function (root) {
  'use strict';

  var gui, win, menu, tray;

  try {
    gui = require('nw.gui');
    win = gui.Window.get();
    menu = new gui.Menu();

    var nativeMenuBar = new gui.Menu({type:'menubar'});
    nativeMenuBar.createMacBuiltin('萌码', {
      hideWindow: false
    });

    win.menu = nativeMenuBar;
  } catch (e) {}

}(typeof window === 'object' ? window : this));
