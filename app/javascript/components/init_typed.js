import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Snazzy Cocktails"],
    typeSpeed: 80,
    loop: false
  });
}

export { loadDynamicBannerText };
