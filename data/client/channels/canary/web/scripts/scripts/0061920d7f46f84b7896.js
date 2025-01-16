"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44153"],
  {
    760949: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return g;
          },
        }),
        e(47120);
      var a = e(200651),
        o = e(192379),
        r = e(120356),
        i = e.n(r),
        s = e(481060),
        l = e(37234),
        c = e(479531),
        d = e(703656),
        u = e(695346),
        h = e(981631),
        x = e(388032),
        b = e(733098),
        m = e(232186);
      function g(t) {
        let { transitionState: n, onClose: e } = t,
          [r, g] = o.useState(!1),
          [f, p] = o.useState(null),
          C = async () => {
            p(null), g(!0);
            try {
              await u.Ex.updateSetting(!1),
                (0, d.uL)(h.Z5c.FRIENDS),
                (0, l.xf)(),
                e();
            } catch (t) {
              p(new c.Z(t).getAnyErrorMessage());
            } finally {
              g(!1);
            }
          },
          j = () => {
            (0, d.uL)(h.Z5c.SETTINGS("family-center")), e();
          };
        return (0, a.jsxs)(s.ModalRoot, {
          className: b.root,
          transitionState: n,
          children: [
            (0, a.jsxs)(s.ModalHeader, {
              separator: !1,
              className: b.header,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  className: b.title,
                  children: x.intl.string(x.t.VGB30N),
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  className: b.subtitle,
                  children: x.intl.format(x.t["CrZZ+v"], {
                    openSettingsHook: (t, n) =>
                      (0, a.jsx)(s.Anchor, { onClick: j, children: t }, n),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)(s.ModalContent, {
              children: [
                (0, a.jsxs)("div", {
                  className: i()(b.buttonContainer, m.marginTop20),
                  children: [
                    (0, a.jsx)(s.Button, {
                      type: "submit",
                      className: m.marginBottom8,
                      grow: !0,
                      color: s.Button.Colors.RED,
                      onClick: C,
                      submitting: r,
                      children: x.intl.string(x.t.cSb7U1),
                    }),
                    (0, a.jsx)(s.Button, {
                      grow: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: e,
                      children: x.intl.string(x.t["ETE/oK"]),
                    }),
                  ],
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: f,
                }),
              ],
            }),
          ],
        });
      }
    },
    733098: function (t, n, e) {
      t.exports = {
        root: "root_fabd5d",
        header: "header_fabd5d",
        title: "title_fabd5d",
        subtitle: "subtitle_fabd5d",
        buttonContainer: "buttonContainer_fabd5d",
      };
    },
  },
]);
//# sourceMappingURL=0061920d7f46f84b7896.js.map
