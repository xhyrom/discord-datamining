"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36514"],
  {
    475271: function (a, e, t) {
      t.r(e), t(411104);
      var c = t(735250);
      t(470079);
      var n = t(481060),
        o = t(429142);
      e.default = {
        showCaptcha: function (a, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { sitekey: i, captchaService: h, options: p } = a;
          (0, n.openModalLazy)(
            async () => {
              let { default: a } = await t.e("12192").then(t.bind(t, 718742));
              return (t) =>
                (0, c.jsx)(a, {
                  onCaptchaVerify: (a, t) =>
                    e({ captcha_key: a, captcha_rqtoken: t }),
                  captchaService: h,
                  sitekey: i,
                  ...r,
                  ...p,
                  ...t,
                });
            },
            { Layer: o.ZP },
          );
        },
        showCaptchaAsync: function (a) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { sitekey: r, captchaService: i, options: h } = a;
          return new Promise((a, p) => {
            (0, n.openModalLazy)(
              async () => {
                let { default: n } = await t.e("12192").then(t.bind(t, 718742));
                return (t) =>
                  (0, c.jsx)(n, {
                    onCaptchaVerify: (e, t) =>
                      a({ captcha_key: e, captcha_rqtoken: t }),
                    captchaService: i,
                    sitekey: r,
                    onReject: () => p(Error("cancel captcha")),
                    ...e,
                    ...h,
                    ...t,
                  });
              },
              { Layer: o.ZP },
            );
          });
        },
      };
    },
  },
]);
//# sourceMappingURL=323d54dc190bd4768d87.js.map
