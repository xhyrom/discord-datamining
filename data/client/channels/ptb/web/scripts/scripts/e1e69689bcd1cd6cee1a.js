"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31177"],
  {
    234888: function (e, t, c) {
      c.d(t, {
        i: function () {
          return r;
        },
      });
      let r = 3e4;
    },
    644947: function (e, t, c) {
      c.d(t, {
        Zq: function () {
          return l;
        },
        _8: function () {
          return o;
        },
        s$: function () {
          return p;
        },
      }),
        c(47120);
      var r = c(652874),
        n = c(286379),
        a = c(731965),
        i = c(797614);
      let u = (0, r.Z)((e) => ({ captchaServeVolume: {} }));
      function o() {
        return 0 === Object.keys(u.getState().captchaServeVolume).length;
      }
      function p(e) {
        (0, a.j)(() => {
          u.setState((t) =>
            e in t.captchaServeVolume
              ? {
                  captchaServeVolume: {
                    ...t.captchaServeVolume,
                    [e]: t.captchaServeVolume[e] + 1,
                  },
                }
              : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } },
          );
        });
      }
      function l() {
        for (let [e, t] of Object.entries(u.getState().captchaServeVolume))
          i.Z.distribution(
            {
              name: n.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
              tags: ["user_flow:".concat(e)],
            },
            t,
          );
        (0, a.j)(() => u.setState({ captchaServeVolume: {} }));
      }
    },
    353250: function (e, t, c) {
      c.r(t),
        c.d(t, {
          CaptchaError: function () {
            return r;
          },
          emitCaptchaDistributionMetric: function () {
            return o;
          },
          extractCaptchaPropsFromResponse: function () {
            return u;
          },
        }),
        c(315314),
        c(610138),
        c(216116),
        c(78328),
        c(815648),
        c(47120),
        c(627494),
        c(757143);
      var r,
        n,
        a = c(644947),
        i = c(234888);
      ((n = r || (r = {})).CANCEL = "cancel"),
        (n.ERROR = "error"),
        (n.EXPIRED = "expired");
      function u(e, t) {
        var c;
        return {
          captchaService: e.captcha_service,
          sitekey: e.captcha_sitekey,
          urlPath: (function (e) {
            try {
              return new URL(e).pathname
                .replaceAll(/\/[0-9]+/gi, "/<id>")
                .replaceAll(/\/[0-9]+/gi, "/<id>");
            } catch (e) {
              return "unknown";
            }
          })(null != t ? t : ""),
          options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible:
              null !== (c = e.should_serve_invisible) && void 0 !== c && c,
          },
        };
      }
      function o(e, t) {
        if (!!e)
          (0, a._8)() && setTimeout(() => (0, a.Zq)(), i.i), (0, a.s$)(t);
      }
    },
  },
]);
//# sourceMappingURL=e1e69689bcd1cd6cee1a.js.map
