"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36514"],
  {
    475271: function (a, t, e) {
      e.r(t), e(411104);
      var c = e(735250);
      e(470079);
      var n = e(481060),
        r = e(429142);
      t.default = {
        showCaptcha: function (a, t) {
          let h =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { sitekey: o, captchaService: i, urlPath: p, options: s } = a;
          (0, n.openModalLazy)(
            async () => {
              let { default: a } = await e.e("12192").then(e.bind(e, 718742));
              return (e) =>
                (0, c.jsx)(a, {
                  onCaptchaVerify: (a, e) =>
                    t({ captcha_key: a, captcha_rqtoken: e }),
                  captchaService: i,
                  sitekey: o,
                  urlPath: p,
                  ...h,
                  ...s,
                  ...e,
                });
            },
            { Layer: r.ZP },
          );
        },
        showCaptchaAsync: function (a) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { sitekey: h, captchaService: o, urlPath: i, options: p } = a;
          return new Promise((a, s) => {
            (0, n.openModalLazy)(
              async () => {
                let { default: n } = await e.e("12192").then(e.bind(e, 718742));
                return (e) =>
                  (0, c.jsx)(n, {
                    onCaptchaVerify: (t, e) =>
                      a({ captcha_key: t, captcha_rqtoken: e }),
                    captchaService: o,
                    sitekey: h,
                    onReject: () => s(Error("cancel captcha")),
                    urlPath: i,
                    ...t,
                    ...p,
                    ...e,
                  });
              },
              { Layer: r.ZP },
            );
          });
        },
      };
    },
  },
]);
//# sourceMappingURL=ee28b0d9f05da8ed0b84.js.map
