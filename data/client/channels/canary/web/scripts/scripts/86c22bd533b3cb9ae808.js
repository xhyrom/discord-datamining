"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61323"],
  {
    238675: function (e, t, n) {
      n.d(t, {
        fw: function () {
          return o;
        },
        qy: function () {
          return c;
        },
        sJ: function () {
          return r;
        },
      });
      var a,
        l,
        o,
        r,
        s = n(544891),
        i = n(981631);
      async function c(e, t) {
        await s.tn.post({
          url: i.ANM.CAPTCHA_TEST,
          body: { decider: e, options: t },
        });
      }
      ((a = o || (o = {})).HCAPTCHA_EASY = "hCaptchaEasy"),
        (a.HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (a.SMITE_RQDATA = "SmiteRqdata"),
        ((l = r || (r = {}))[(l.EASY = 1)] = "EASY"),
        (l[(l.MODERATE = 2)] = "MODERATE"),
        (l[(l.DIFFICULT = 3)] = "DIFFICULT"),
        (l[(l.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT");
    },
    333636: function (e, t, n) {
      n.r(t), n(47120);
      var a = n(735250),
        l = n(470079),
        o = n(481060),
        r = n(238675),
        s = n(677065);
      let i = Object.entries(r.fw).map((e) => {
          let [t, n] = e;
          return { label: t, value: n };
        }),
        c = Object.entries(r.sJ)
          .map((e) => {
            let [t, n] = e;
            return { label: t, value: n };
          })
          .filter((e) => {
            let { value: t } = e;
            return "number" == typeof t;
          });
      t.default = function (e) {
        let { onClose: t, transitionState: n } = e,
          [u, d] = l.useState(null),
          [A, C] = l.useState(null),
          [h, f] = l.useState(null),
          [T, p] = l.useState(""),
          S = async () => {
            if (u) {
              p("");
              try {
                await (0, r.qy)(u, {
                  difficulty: null != A ? A : void 0,
                  should_serve_invisible: null != h ? h : void 0,
                });
              } catch (e) {
                p(e.message);
              }
            }
          };
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: n,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              className: s.header,
              children: [
                (0, a.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Captcha Test Tool",
                }),
                (0, a.jsx)(o.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              className: s.content,
              children: [
                (0, a.jsx)(o.SingleSelect, {
                  value: u,
                  options: i,
                  onChange: (e) => {
                    e !== r.fw.HCAPTCHA_RQDATA && C(null),
                      e !== r.fw.HCAPTCHA_EASY && f(null),
                      d(e),
                      p("");
                  },
                }),
                u === r.fw.HCAPTCHA_RQDATA &&
                  (0, a.jsx)(o.SingleSelect, {
                    value: A,
                    options: c,
                    onChange: (e) => {
                      u === r.fw.HCAPTCHA_RQDATA && C(e);
                    },
                  }),
                u === r.fw.HCAPTCHA_EASY &&
                  (0, a.jsx)(o.Checkbox, {
                    value: null != h && h,
                    onChange: (e, t) => f(t),
                    children: (0, a.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children: "Should serve invisible?",
                    }),
                  }),
              ],
            }),
            (0, a.jsxs)(o.ModalFooter, {
              className: s.footer,
              children: [
                (0, a.jsx)(o.Button, {
                  onClick: S,
                  disabled: !u,
                  children: "Trigger Captcha",
                }),
                "" !== T && (0, a.jsx)(o.InputError, { error: T }),
              ],
            }),
          ],
        });
      };
    },
    677065: function (e, t, n) {
      e.exports = {
        header: "header_ad60f6",
        content: "content_ad60f6",
        footer: "footer_ad60f6",
      };
    },
  },
]);
//# sourceMappingURL=86c22bd533b3cb9ae808.js.map
