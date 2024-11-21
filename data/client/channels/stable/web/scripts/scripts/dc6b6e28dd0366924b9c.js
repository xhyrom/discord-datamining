"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29393"],
  {
    907401: function (e) {
      e.exports = "/assets/0ed83b592a646cd50936.svg";
    },
    146698: function (e) {
      e.exports = "/assets/e9722af282f9d6fada66.svg";
    },
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
    134817: function (e, s, t) {
      t.r(s);
      var n = t(200651),
        a = t(192379),
        i = t(512722),
        c = t.n(i),
        l = t(442837),
        r = t(233787),
        o = t(594174),
        d = t(74538),
        u = t(388032);
      class g extends a.Component {
        render() {
          let { user: e, transitionState: s, onClose: t } = this.props;
          return (0, n.jsxs)(r.Z, {
            transitionState: s,
            "aria-label": u.intl.string(u.t.BNg1io),
            children: [
              (0, n.jsx)(r.Z.Header, {
                onClose: () => t(!1),
                children: u.intl.string(u.t.BNg1io),
              }),
              (0, n.jsx)(r.Z.Content, {
                type: r.Z.Types.UPGRADE,
                children:
                  d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e)
                    ? u.intl.string(u.t.mKA9OD)
                    : u.intl.string(u.t.sqSlm5),
              }),
              (0, n.jsx)(r.Z.Footer, {
                primary: {
                  onClick: () => t(!0),
                  label: u.intl.string(u.t.P3etAg),
                },
              }),
            ],
          });
        }
      }
      s.default = l.ZP.connectStores([o.default], () => {
        let e = o.default.getCurrentUser();
        return (
          c()(null != e, "PremiumRequiredModal: user cannot be null"),
          { user: e }
        );
      })(g);
    },
    233787: function (e, s, t) {
      var n,
        a,
        i = t(200651);
      t(192379);
      var c = t(481060),
        l = t(600164),
        r = t(150294);
      ((n = a || (a = {})).UPGRADE = "UPGRADE"),
        (n.CANCEL = "CANCEL"),
        (n.UNVERIFIED = "UNVERIFIED"),
        (n.UNCLAIMED = "UNCLAIMED"),
        (n.GRANDFATHERED = "GRANDFATHERED");
      let o = {
          UPGRADE: "imageUpgrade",
          CANCEL: "imageCancel",
          UNVERIFIED: "imageUnverified",
          UNCLAIMED: "imageUnclaimed",
          GRANDFATHERED: "imageCancel",
        },
        d = (e) => {
          let { children: s, ...t } = e;
          return (0, i.jsx)(c.ModalRoot, { ...t, children: s });
        };
      (d.Header = (e) => {
        let { children: s, onClose: t } = e;
        return (0, i.jsxs)(c.ModalHeader, {
          justify: l.Z.Justify.BETWEEN,
          separator: !1,
          children: [
            (0, i.jsx)(c.FormTitle, { tag: c.FormTitleTags.H4, children: s }),
            null != t
              ? (0, i.jsx)(c.ModalCloseButton, {
                  className: r.__invalid_closeIcon,
                  onClick: t,
                })
              : null,
          ],
        });
      }),
        (d.Content = (e) => {
          let { children: s, type: t } = e;
          return (0, i.jsxs)(c.ModalContent, {
            children: [
              (0, i.jsx)("div", { className: r[o[t]] }),
              (0, i.jsx)("div", { className: r.message, children: s }),
            ],
          });
        }),
        (d.Footer = (e) => {
          let { primary: s, primaryRenderer: t, secondary: n } = e;
          return (0, i.jsx)(c.ModalFooter, {
            children: (0, i.jsxs)(l.Z, {
              justify: l.Z.Justify.END,
              children: [
                null != n
                  ? (0, i.jsx)(c.Button, {
                      onClick: n.onClick,
                      look: c.Button.Looks.LINK,
                      innerClassName: r.secondaryButton,
                      children: n.label,
                    })
                  : null,
                null != s
                  ? (0, i.jsx)(c.Button, {
                      onClick: s.onClick,
                      color: c.Button.Colors.BRAND,
                      children: s.label,
                    })
                  : t,
              ],
            }),
          });
        }),
        (d.Types = a),
        (s.Z = d);
    },
    150294: function (e, s, t) {
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
//# sourceMappingURL=dc6b6e28dd0366924b9c.js.map
