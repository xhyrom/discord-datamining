"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29393"],
  {
    993576: function (e) {
      e.exports = "/assets/7cc7415a52594886ece7.svg";
    },
    68608: function (e) {
      e.exports = "/assets/358b453a058dee1a79b3.svg";
    },
    457592: function (e) {
      e.exports = "/assets/88c63f722c07f39b980b.svg";
    },
    188662: function (e) {
      e.exports = "/assets/2eb9737501c51d88a31d.svg";
    },
    477335: function (e) {
      e.exports = "/assets/44cbffbbc0ff1ec96c60.svg";
    },
    297640: function (e) {
      e.exports = "/assets/6970a5ece8e41f339d43.svg";
    },
    134817: function (e, n, t) {
      t.r(n);
      var s = t(200651),
        i = t(192379),
        a = t(512722),
        c = t.n(a),
        l = t(442837),
        r = t(233787),
        o = t(594174),
        d = t(74538),
        u = t(388032);
      class g extends i.Component {
        render() {
          let { user: e, transitionState: n, onClose: t } = this.props;
          return (0, s.jsxs)(r.Z, {
            transitionState: n,
            "aria-label": u.intl.string(u.t.BNg1io),
            children: [
              (0, s.jsx)(r.Z.Header, {
                onClose: () => t(!1),
                children: u.intl.string(u.t.BNg1io),
              }),
              (0, s.jsx)(r.Z.Content, {
                type: r.Z.Types.UPGRADE,
                children:
                  d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e)
                    ? u.intl.string(u.t.mKA9OD)
                    : u.intl.string(u.t.sqSlm5),
              }),
              (0, s.jsx)(r.Z.Footer, {
                primary: {
                  onClick: () => t(!0),
                  label: u.intl.string(u.t.P3etAg),
                },
              }),
            ],
          });
        }
      }
      n.default = l.ZP.connectStores([o.default], () => {
        let e = o.default.getCurrentUser();
        return (
          c()(null != e, "PremiumRequiredModal: user cannot be null"),
          { user: e }
        );
      })(g);
    },
    233787: function (e, n, t) {
      var s,
        i,
        a = t(200651);
      t(192379);
      var c = t(481060),
        l = t(600164),
        r = t(637926);
      ((s = i || (i = {})).UPGRADE = "UPGRADE"),
        (s.CANCEL = "CANCEL"),
        (s.UNVERIFIED = "UNVERIFIED"),
        (s.UNCLAIMED = "UNCLAIMED"),
        (s.GRANDFATHERED = "GRANDFATHERED");
      let o = {
          UPGRADE: "imageUpgrade",
          CANCEL: "imageCancel",
          UNVERIFIED: "imageUnverified",
          UNCLAIMED: "imageUnclaimed",
          GRANDFATHERED: "imageCancel",
        },
        d = (e) => {
          let { children: n, ...t } = e;
          return (0, a.jsx)(c.ModalRoot, { ...t, children: n });
        };
      (d.Header = (e) => {
        let { children: n, onClose: t } = e;
        return (0, a.jsxs)(c.ModalHeader, {
          justify: l.Z.Justify.BETWEEN,
          separator: !1,
          children: [
            (0, a.jsx)(c.FormTitle, { tag: c.FormTitleTags.H4, children: n }),
            null != t
              ? (0, a.jsx)(c.ModalCloseButton, {
                  className: r.__invalid_closeIcon,
                  onClick: t,
                })
              : null,
          ],
        });
      }),
        (d.Content = (e) => {
          let { children: n, type: t } = e;
          return (0, a.jsxs)(c.ModalContent, {
            children: [
              (0, a.jsx)("div", { className: r[o[t]] }),
              (0, a.jsx)("div", { className: r.message, children: n }),
            ],
          });
        }),
        (d.Footer = (e) => {
          let { primary: n, primaryRenderer: t, secondary: s } = e;
          return (0, a.jsx)(c.ModalFooter, {
            children: (0, a.jsxs)(l.Z, {
              justify: l.Z.Justify.END,
              children: [
                null != s
                  ? (0, a.jsx)(c.Button, {
                      onClick: s.onClick,
                      look: c.Button.Looks.LINK,
                      innerClassName: r.secondaryButton,
                      children: s.label,
                    })
                  : null,
                null != n
                  ? (0, a.jsx)(c.Button, {
                      onClick: n.onClick,
                      color: c.Button.Colors.BRAND,
                      children: n.label,
                    })
                  : t,
              ],
            }),
          });
        }),
        (d.Types = i),
        (n.Z = d);
    },
    637926: function (e, n, t) {
      t.r(
        (e.exports = {
          image: "image_fcc792",
          imageUpgrade: "imageUpgrade_fcc792 image_fcc792",
          imageCancel: "imageCancel_fcc792 image_fcc792",
          imageUnclaimed: "imageUnclaimed_fcc792 image_fcc792",
          imageUnverified: "imageUnverified_fcc792 image_fcc792",
          message: "message_fcc792",
          secondaryButton: "secondaryButton_fcc792",
        }),
      );
    },
  },
]);
//# sourceMappingURL=96eedf55658ff18de784.js.map
