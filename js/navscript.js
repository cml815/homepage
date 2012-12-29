window.onload = function() {

  function getScrollTop() {
    if (typeof window.pageYOffset !== 'undefined' ) {
      // Most browsers
      return window.pageYOffset;
    }

    var d = document.documentElement;
    if (d.clientHeight) {
      // IE in standards mode
      return d.scrollTop;
    }

    // IE in quirks mode
    return document.body.scrollTop;
  }

  window.onscroll = function() {
    var box = document.getElementById('box'),
        scroll = getScrollTop();

    if (scroll <= 28) {
      box.style.top = "30px";
    }
    else {
      box.style.top = (scroll + 2) + "px";
    }
  };

};