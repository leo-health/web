var disqus_config = function () {
  if (window.location.pathname.includes('ask-an-expert') &&  window.location.pathname.length > "/ask-an-expert".length){
    this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.location.pathname.split('/ask-an-expert/')[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  }
};


(function() { // DON'T EDIT BELOW THIS LINE
  if (window.location.pathname.includes('ask-an-expert') &&  window.location.pathname.length > "/ask-an-expert".length){
    var a = document.createElement('div');
    a.id = 'disqus_thread';
    var b = document.getElementsByClassName('primary-content')[0];
    b.appendChild(a);

    var d = document, s = d.createElement('script');
    s.src = '//'+window.location.pathname.split('/ask-an-expert/')[1]+'.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
})();
