(function () {
  const measurementId = 'G-G79CKSSW2H';
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} 
  window.gtag = window.gtag || gtag;

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(gtagScript);

  const inline = document.createElement('script');
  inline.text = `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${measurementId}');`;
  document.head.appendChild(inline);

  // Click tracking for WhatsApp CTAs, phone links, email links and official result outbound links
  function safeGtagEvent(name, params) {
    try {
      if (window.gtag) {
        window.gtag('event', name, params);
        // console.log('gtag event', name, params);
      }
    } catch (e) {
      console.warn('gtag error', e);
    }
  }

  document.addEventListener('click', function (ev) {
    try {
      var el = ev.target && ev.target.closest ? ev.target.closest('a') : null;
      if (!el) return;
      var href = el.getAttribute('href') || '';

      // WhatsApp CTA clicks (elements explicitly marked with .wa-cta)
      if (el.classList.contains('wa-cta')) {
        var pdata = {
          page_location: location.href,
          page_title: document.title,
          CTA_position: el.dataset.ctaPosition || '',
          lottery_type: el.dataset.lotteryType || '',
          draw_type: el.dataset.drawType || ''
        };
        safeGtagEvent('whatsapp_click', pdata);
        return;
      }

      // Telephone clicks (tel:)
      if (href.indexOf('tel:') === 0) {
        var tel = href.replace('tel:', '');
        safeGtagEvent('phone_click', { page_location: location.href, page_title: document.title, telephone: tel });
        return;
      }

      // Email clicks (mailto:)
      if (href.indexOf('mailto:') === 0) {
        var mail = href.replace('mailto:', '');
        safeGtagEvent('email_click', { page_location: location.href, page_title: document.title, email: mail });
        return;
      }

      // Official result outbound clicks (explicit domains)
      var officialRegex = /myrajshree\.com|statelotteries\.goa\.gov\.in/;
      if (officialRegex.test(href)) {
        safeGtagEvent('official_result_click', { page_location: location.href, page_title: document.title, outbound_url: href });
        return;
      }
    } catch (e) {
      // non-fatal
      // console.warn('click-tracking error', e);
    }
  }, false);

})();
