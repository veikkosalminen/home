'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "Home",
    short_name: "home",
    description: "",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [{
      "src": "https://cdn.iconscout.com/icon/free/png-256/home-803-450320.png",
      "sizes": "256x256",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "https://cdn.iconscout.com/icon/free/png-256/home-803-450320.png",
      "sizes": "512x512",
      "type": "image/png"
    }
    ],
    ms: {
      tileColor: '#000'
    }
  };
}
