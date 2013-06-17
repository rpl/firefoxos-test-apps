window.onload = function () {
  document.querySelector("#test-localStorage button.get").
    addEventListener("touchstart", function localStorageGet() {
      console.log("GET 'test-key' from localStorage");
      var value = localStorage.getItem("test-key");
      document.querySelector("#test-localStorage input").value = value;
    }, false);

  document.querySelector("#test-localStorage button.set").
    addEventListener("touchstart", function localStorageSet() {
      console.log("SET 'test-key' from localStorage");
      var value = document.querySelector("#test-localStorage input").value;
      localStorage.setItem("test-key", value || "test1");
    }, false);

  document.querySelector("#test-sessionStorage button.get").
    addEventListener("touchstart", function sessionStorageGet() {
      console.log("GET 'test-key' from sessionStorage");
      var value = sessionStorage.getItem("test-key");
      document.querySelector("#test-sessionStorage input").value = value;
    }, false);

  document.querySelector("#test-sessionStorage button.set").
    addEventListener("touchstart", function sessionStorageSet() {
      console.log("SET 'test-key' from sessionStorage");
      var value = document.querySelector("#test-sessionStorage input").value;
      sessionStorage.setItem("test-key",  value || "test2");
    }, false);

  document.querySelector("#test-cookies button.get").
    addEventListener("touchstart", function cookiesGet() {
      console.log("GET cookies");
      document.querySelector("#test-cookies input").value = document.cookie;
    }, false);

  document.querySelector("#test-cookies button.set").
    addEventListener("touchstart", function cookiesSet() {
      console.log("SET cookies");
      var value = document.querySelector("#test-cookies input").value;
      document.cookie = "test=" + value  || "test=value";
    }, false);

  var req = navigator.mozApps.getSelf();
  req.onsuccess = function() {
    document.querySelector("pre").innerHTML = JSON.stringify(req.result.manifest, null, 2);
  };
  req.onerror = function() {
    document.querySelector("pre").innerHTML = req.error;
  };
};
