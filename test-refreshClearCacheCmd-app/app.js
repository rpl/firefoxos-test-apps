window.onload = function () {
  document.querySelector("#test-localStorage button.get").
    addEventListener("click", function localStorageGet(evt) {
      console.log("GET 'test-key' from localStorage");
      var value = localStorage.getItem("test-key");
      document.querySelector("#test-localStorage input").value = value;
      evt.preventDefault();
    }, false);

  document.querySelector("#test-localStorage button.set").
    addEventListener("click", function localStorageSet(evt) {
      console.log("SET 'test-key' from localStorage");
      var value = document.querySelector("#test-localStorage input").value;
      localStorage.setItem("test-key", value || "test1");
      evt.preventDefault();
    }, false);

  document.querySelector("#test-sessionStorage button.get").
    addEventListener("click", function sessionStorageGet(evt) {
      console.log("GET 'test-key' from sessionStorage");
      var value = sessionStorage.getItem("test-key");
      document.querySelector("#test-sessionStorage input").value = value;
      evt.preventDefault();
    }, false);

  document.querySelector("#test-sessionStorage button.set").
    addEventListener("click", function sessionStorageSet(evt) {
      console.log("SET 'test-key' from sessionStorage");
      var value = document.querySelector("#test-sessionStorage input").value;
      sessionStorage.setItem("test-key",  value || "test2");
      evt.preventDefault();
    }, false);

  document.querySelector("#test-cookies button.get").
    addEventListener("click", function cookiesGet(evt) {
      console.log("GET cookies");
      document.querySelector("#test-cookies input").value = document.cookie;
      evt.preventDefault();
    }, false);

  document.querySelector("#test-cookies button.set").
    addEventListener("click", function cookiesSet(evt) {
      console.log("SET cookies");
      var value = document.querySelector("#test-cookies input").value;
      document.cookie = "test=" + value  || "test=value";
      evt.preventDefault();
    }, false);

  var req = navigator.mozApps.getSelf();
  req.onsuccess = function() {
    document.querySelector("pre").innerHTML = JSON.stringify(req.result.manifest, null, 2);
  };
  req.onerror = function() {
    document.querySelector("pre").innerHTML = req.error;
  };
};
