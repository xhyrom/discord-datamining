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
          return p;
        },
        _8: function () {
          return o;
        },
        s$: function () {
          return s;
        },
      }),
        c(47120);
      var r = c(652874),
        n = c(286379),
        a = c(731965),
        u = c(797614);
      let i = (0, r.Z)((e) => ({ captchaServeVolume: {} }));
      function o() {
        return 0 === Object.keys(i.getState().captchaServeVolume).length;
      }
      function s(e) {
        (0, a.j)(() => {
          i.setState((t) => {
            if (null != e)
              return e in t.captchaServeVolume
                ? {
                    captchaServeVolume: {
                      ...t.captchaServeVolume,
                      [e]: t.captchaServeVolume[e] + 1,
                    },
                  }
                : { captchaServeVolume: { ...t.captchaServeVolume, [e]: 1 } };
          });
        });
      }
      function p() {
        for (let [e, t] of Object.entries(i.getState().captchaServeVolume))
          u.Z.distribution(
            {
              name: n.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
              tags: ["user_flow:".concat(e)],
            },
            t,
            !0,
          );
        (0, a.j)(() => i.setState({ captchaServeVolume: {} }));
      }
    },
    353250: function (e, t, c) {
      c.r(t),
        c.d(t, {
          CaptchaError: function () {
            return n;
          },
          emitCaptchaDistributionMetric: function () {
            return o;
          },
          extractCaptchaPropsFromResponse: function () {
            return i;
          },
        });
      var r,
        n,
        a = c(644947),
        u = c(234888);
      function i(e) {
        var t;
        return {
          captchaService: e.captcha_service,
          sitekey: e.captcha_sitekey,
          options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible:
              null !== (t = e.should_serve_invisible) && void 0 !== t && t,
            userflow: e.user_flow,
          },
        };
      }
      function o(e, t) {
        if (!!e)
          (0, a._8)() && setTimeout(() => (0, a.Zq)(), u.i), (0, a.s$)(t);
      }
      ((r = n || (n = {})).CANCEL = "cancel"),
        (r.ERROR = "error"),
        (r.EXPIRED = "expired");
    },
  },
]);
//# sourceMappingURL=7698d1d885bf79f55a90.js.map
