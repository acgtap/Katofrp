
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


