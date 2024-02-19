export function initMouseflow() {
  window._mfq = window._mfq || [];
  (function () {
    var mf = document.createElement("script");
    mf.type = "text/javascript";
    mf.defer = true;
    mf.src =
      "//cdn.mouseflow.com/projects/0ee659fa-187c-4915-867c-7430740192c4.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
}
