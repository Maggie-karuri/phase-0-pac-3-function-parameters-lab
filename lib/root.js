"use strict";

global.expect = require('expect');
var babel = require('babel-core');
var jsdom = require('jsdom');
var path = require('path');
before(function (done) {
  var babelResult = babel.transformFileSync(path.resolve(__dirname, '..', 'index.js'), {
    presets: ['@babel/preset-env']
  });
  var html = path.resolve(__dirname, '..', 'index.html');
  jsdom.env(html, [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, function (err, window) {
    if (err) {
      return done(err);
    }
    Object.keys(window).forEach(function (key) {
      global[key] = window[key];
    });
    return done();
  });
});