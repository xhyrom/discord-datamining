"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31177"],
  {
    353250: function (r, t, c) {
      var a, e;
      function n(r) {
        return {
          captchaService: r.captcha_service,
          sitekey: r.captcha_sitekey,
          options: { rqdata: r.captcha_rqdata, rqtoken: r.captcha_rqtoken },
        };
      }
      c.r(t),
        c.d(t, {
          CaptchaError: function () {
            return a;
          },
          extractCaptchaPropsFromResponseBody: function () {
            return n;
          },
        }),
        ((e = a || (a = {})).CANCEL = "cancel"),
        (e.ERROR = "error"),
        (e.EXPIRED = "expired");
    },
  },
]);
//# sourceMappingURL=f35d851e685c0e2c6de4.js.map
