"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90220"],
  {
    490962: function (t) {
      t.exports = "/assets/231b607eac35bb1ce411.svg";
    },
    221870: function (t) {
      t.exports = "/assets/2695194fe7a3a1263bb7.svg";
    },
    418225: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return x;
          },
        }),
        s(47120);
      var r = s(200651);
      s(192379);
      var a = s(481060),
        n = s(935369),
        i = s(53365),
        l = s(388032),
        o = s(98527),
        c = s(490962),
        d = s(221870);
      function m(t) {
        let { header: e, body: s } = t;
        return (0, r.jsxs)("div", {
          className: o.bulletItem,
          children: [
            (0, r.jsx)("img", { alt: "", className: o.bulletImage, src: c }),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)(a.Text, {
                  variant: "text-sm/semibold",
                  color: "text-normal",
                  children: e,
                }),
                (0, r.jsx)(a.Spacer, { size: 4 }),
                (0, r.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: s,
                }),
              ],
            }),
          ],
        });
      }
      function x(t) {
        let { guildId: e, demonetized: s, transitionState: c, onClose: x } = t,
          [u, { loading: h, error: j }] = (0, n.Z)(s ? i.$J : i.hY),
          p = async () => {
            try {
              let t = await u(e);
              null != t && (null == x || x());
            } catch (t) {}
          };
        return (0, r.jsxs)(a.ModalRoot, {
          className: o.__invalid_container,
          size: a.ModalSize.SMALL,
          transitionState: c,
          "aria-label": l.intl.string(l.t.TP4GSk),
          children: [
            (0, r.jsx)(a.ModalHeader, {
              separator: !1,
              className: o.header,
              children: (0, r.jsx)("div", {
                className: o.imageContainer,
                children: (0, r.jsx)("img", {
                  alt: "",
                  className: o.__invalid_image,
                  src: d,
                }),
              }),
            }),
            (0, r.jsx)(a.ModalContent, {
              children: (0, r.jsxs)("div", {
                className: o.content,
                children: [
                  (0, r.jsx)(a.Heading, {
                    variant: "heading-xl/medium",
                    color: "header-primary",
                    children: l.intl.string(l.t.TP4GSk),
                  }),
                  (0, r.jsx)(a.Spacer, { size: 12 }),
                  (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: l.intl.format(l.t.c0IsOD, {
                      termsURL:
                        "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                    }),
                  }),
                  (0, r.jsx)(a.Spacer, { size: 24 }),
                  (0, r.jsx)(m, {
                    header: l.intl.string(l.t.UzDaWF),
                    body: l.intl.string(l.t.IDk8Fx),
                  }),
                  (0, r.jsx)(a.Spacer, { size: 16 }),
                  (0, r.jsx)(m, {
                    header: l.intl.string(l.t["36/RiY"]),
                    body: l.intl.string(l.t.CBzNtr),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(a.ModalFooter, {
              children: (0, r.jsxs)("div", {
                className: o.footer,
                children: [
                  (0, r.jsx)(a.Button, {
                    fullWidth: !0,
                    onClick: p,
                    submitting: h,
                    children: l.intl.string(l.t["pC/ozM"]),
                  }),
                  (0, r.jsx)(a.Spacer, { size: 4 }),
                  (0, r.jsx)(a.Button, {
                    color: a.Button.Colors.CUSTOM,
                    innerClassName: o.remindMeLater,
                    look: a.Button.Looks.LINK,
                    fullWidth: !0,
                    onClick: x,
                    children: l.intl.string(l.t.Jj8nUF),
                  }),
                  null == j
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(a.Spacer, { size: 8 }),
                          (0, r.jsxs)(a.Text, {
                            variant: "text-xs/normal",
                            color: "status-danger",
                            children: ["Error: ", j.message],
                          }),
                        ],
                      }),
                  (0, r.jsx)(a.Spacer, { size: 10 }),
                  (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: l.intl.format(l.t["+oNl6+"], {
                      termsURL:
                        "https://support.discord.com/hc/en-us/articles/5330075836311-Creator-Pilot-Terms",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    98527: function (t, e, s) {
      t.exports = {
        header: "header_a54752",
        imageContainer: "imageContainer_a54752",
        content: "content_a54752",
        footer: "footer_a54752",
        bulletItem: "bulletItem_a54752",
        bulletImage: "bulletImage_a54752",
        remindMeLater: "remindMeLater_a54752",
      };
    },
  },
]);
//# sourceMappingURL=05fa900b48373dbcfe9f.js.map
