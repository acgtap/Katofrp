$(function () {
  $('.top')['load']('/frp/header.html')
  $('footer')['load']('/frp/footer.html')
})
this['addEventListener']('load', function () {
  if (
    !('backdrop-filter' in this['document']['body']['style']) &&
    !('-webkit-backdrop-filter' in this['document']['body']['style'])
  ) {
    var _0x41d168 = document['querySelector']('.top')
    if (_0x41d168 !== undefined && _0x41d168 !== null) {
      _0x41d168['classList']['add']('nofilter')
    }
  }
})

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?08499fdfd6f7fe11dc581c402ba6e2dd";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
