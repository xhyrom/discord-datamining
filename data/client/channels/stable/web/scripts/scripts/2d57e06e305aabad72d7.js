"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61323"],
  {
    238675: function (t, e, a) {
      a.d(e, {
        f: function () {
          return o;
        },
        q: function () {
          return c;
        },
      });
      var n,
        o,
        r = a(544891),
        s = a(981631);
      async function c(t) {
        await r.tn.post({ url: s.ANM.CAPTCHA_TEST, body: { decider: t } });
      }
      ((n = o || (o = {})).HCAPTCHA_EASY = "hCaptchaEasy"),
        (n.HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (n.SMITE_RQDATA = "SmiteRqdata");
    },
    333636: function (t, e, a) {
      a.r(e), a(47120);
      var n = a(735250),
        o = a(470079),
        r = a(481060),
        s = a(238675),
        c = a(677065);
      let i = Object.entries(s.f).map((t) => {
        let [e, a] = t;
        return { label: e, value: a };
      });
      e.default = function (t) {
        let { onClose: e, transitionState: a } = t,
          [l, d] = o.useState(null),
          [u, h] = o.useState(""),
          f = async () => {
            if (l) {
              h("");
              try {
                await (0, s.q)(l);
              } catch (t) {
                h(t.message);
              }
            }
          };
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: a,
          children: [
            (0, n.jsxs)(r.ModalHeader, {
              className: c.header,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: "Captcha Test Tool",
                }),
                (0, n.jsx)(r.ModalCloseButton, { onClick: e }),
              ],
            }),
            (0, n.jsx)(r.ModalContent, {
              className: c.content,
              children: (0, n.jsx)(r.SingleSelect, {
                value: l,
                options: i,
                onChange: (t) => {
                  d(t), h("");
                },
              }),
            }),
            (0, n.jsxs)(r.ModalFooter, {
              className: c.footer,
              children: [
                (0, n.jsx)(r.Button, {
                  onClick: f,
                  disabled: !l,
                  children: "Trigger Captcha",
                }),
                "" !== u && (0, n.jsx)(r.InputError, { error: u }),
              ],
            }),
          ],
        });
      };
    },
    677065: function (t, e, a) {
      t.exports = {
        header: "header_ad60f6",
        content: "content_ad60f6",
        footer: "footer_ad60f6",
      };
    },
  },
]);
//# sourceMappingURL=2d57e06e305aabad72d7.js.map
