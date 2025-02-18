function Hello() {
}

Hello.prototype.greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
}
Hello.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.hello = new Hello();
  return window.plugins.hello;
};

cordova.addConstructor(Hello.install);
