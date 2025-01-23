"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61323"],
  {
    238675: function (e, t, n) {
      n.d(t, {
        fw: function () {
          return l;
        },
        qy: function () {
          return c;
        },
        sJ: function () {
          return o;
        },
      });
      var a,
        r,
        l,
        o,
        i = n(544891),
        s = n(981631);
      async function c(e, t) {
        await i.tn.post({
          url: s.ANM.CAPTCHA_TEST,
          body: { decider: e, options: t },
          rejectWithError: !1,
        });
      }
      ((a = l || (l = {})).HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (a.SMITE_RQDATA = "SmiteRqdata"),
        (a.RECAPTCHA = "Recaptcha"),
        (a.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise"),
        ((r = o || (o = {}))[(r.EASY = 1)] = "EASY"),
        (r[(r.MODERATE = 2)] = "MODERATE"),
        (r[(r.DIFFICULT = 3)] = "DIFFICULT"),
        (r[(r.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT");
    },
    37291: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
        p: function () {
          return l;
        },
      }),
        n(47120);
      var a = n(238675);
      let r = Object.entries(a.sJ)
          .map((e) => {
            let [t, n] = e;
            return { label: t, value: n };
          })
          .filter(function (e) {
            return "string" != typeof e.value;
          }),
        l = Object.entries(a.fw).map((e) => {
          let [t, n] = e;
          return { label: t, value: n };
        });
    },
    333636: function (e, t, n) {
      n.r(t), n(47120);
      var a = n(200651),
        r = n(192379),
        l = n(481060),
        o = n(238675),
        i = n(37291),
        s = n(217757);
      t.default = function (e) {
        let { onClose: t, transitionState: n } = e,
          [c, u] = r.useState(null),
          [d, h] = r.useState(null),
          [C, f] = r.useState(null),
          [A, T] = r.useState(""),
          p = async () => {
            if (c) {
              T("");
              try {
                await (0, o.qy)(c, {
                  difficulty: null != d ? d : void 0,
                  should_serve_invisible: null != C ? C : void 0,
                });
              } catch (e) {
                T(e.message);
              }
            }
          };
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: n,
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              className: s.header,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Captcha Test Tool",
                }),
                (0, a.jsx)(l.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: s.content,
              children: [
                (0, a.jsx)(l.SingleSelect, {
                  value: c,
                  options: i.p,
                  onChange: (e) => {
                    e !== o.fw.HCAPTCHA_RQDATA && (h(null), f(null)),
                      u(e),
                      T("");
                  },
                }),
                c === o.fw.HCAPTCHA_RQDATA &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(l.SingleSelect, {
                        value: d,
                        options: i.Z,
                        onChange: (e) => {
                          c === o.fw.HCAPTCHA_RQDATA && h(e);
                        },
                      }),
                      (0, a.jsx)(l.Checkbox, {
                        value: null != C && C,
                        onChange: (e, t) => f(t),
                        children: (0, a.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: "Should serve invisible?",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            (0, a.jsxs)(l.ModalFooter, {
              className: s.footer,
              children: [
                (0, a.jsx)(l.Button, {
                  onClick: p,
                  disabled: !c,
                  children: "Trigger Captcha",
                }),
                "" !== A && (0, a.jsx)(l.InputError, { error: A }),
              ],
            }),
          ],
        });
      };
    },
    217757: function (e, t, n) {
      e.exports = {
        header: "header_ad60f6",
        content: "content_ad60f6",
        footer: "footer_ad60f6",
      };
    },
  },
]);
//# sourceMappingURL=898011ca6f963fa6fc21.js.map
