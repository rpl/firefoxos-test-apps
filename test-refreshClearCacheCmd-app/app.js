window.onload = function () {
  document.querySelector("#test-localStorage button.get").
    addEventListener("click", function localStorageGet() {
      var value = localStorage.getItem("test-key");
      document.querySelector("#test-localStorage input").value = value;
    }, false);

  document.querySelector("#test-localStorage button.set").
    addEventListener("click", function localStorageSet() {
      var value = document.querySelector("#test-localStorage input").value;
      localStorage.setItem("test-key", value || "test1");
    }, false);

  document.querySelector("#test-sessionStorage button.get").
    addEventListener("click", function sessionStorageGet() {
      var value = sessionStorage.getItem("test-key");
      document.querySelector("#test-sessionStorage input").value = value;
    }, false);

  document.querySelector("#test-sessionStorage button.set").
    addEventListener("click", function sessionStorageSet() {
      var value = document.querySelector("#test-sessionStorage input").value;
      sessionStorage.setItem("test-key",  value || "test2");
    }, false);

  document.querySelector("#test-cookies button.get").
    addEventListener("click", function cookiesGet() {
      document.querySelector("#test-cookies input").value = document.cookie;
    }, false);

  document.querySelector("#test-cookies button.set").
    addEventListener("click", function cookiesSet() {
      var value = document.querySelector("#test-cookies input").value;
      document.cookie = "test=" + value  || "test1";
    }, false);

  var req = navigator.mozApps.getSelf();
  req.onsuccess = function() {
    document.querySelector("pre").innerHTML = JSON.stringify(req.result.manifest, null, 2);
  };
  req.onerror = function() {
    document.querySelector("pre").innerHTML = req.error;
  };
};
