(function ($) {
  $.fn.input = function (value) {
    if (value) this.val(value)
    const e = document.createEvent('HTMLEvents')
    e.initEvent('input', true, true)
    this.get(0).dispatchEvent(e)
  }
})(jQuery)
