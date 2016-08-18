  var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "ask-an-expert"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function() { // DON'T EDIT BELOW THIS LINE
  if (window.location.pathname.includes('ask-an-expert')){
    var a = document.createElement('div');
    a.id = 'disqus_thread';
    var b = document.getElementsByClassName('container-inner')[1];
    b.appendChild(a);
  }
  var d = document, s = d.createElement('script');
  s.src = '//leohealth-com.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
