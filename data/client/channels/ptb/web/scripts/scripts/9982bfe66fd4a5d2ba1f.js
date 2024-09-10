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
    725296: function (e) {
      e.exports = "/assets/2eb9737501c51d88a31d.svg";
    },
    477335: function (e) {
      e.exports = "/assets/44cbffbbc0ff1ec96c60.svg";
    },
    297640: function (e) {
      e.exports = "/assets/6970a5ece8e41f339d43.svg";
    },
    134817: function (e, s, a) {
      a.r(s);
      var n = a(735250),
        t = a(470079),
        c = a(512722),
        i = a.n(c),
        l = a(442837),
        o = a(233787),
        r = a(594174),
        d = a(74538),
        u = a(689938);
      class E extends t.Component {
        render() {
          let { user: e, transitionState: s, onClose: a } = this.props;
          return (0, n.jsxs)(o.Z, {
            transitionState: s,
            "aria-label": u.Z.Messages.PREMIUM_REQUIRED,
            children: [
              (0, n.jsx)(o.Z.Header, {
                onClose: () => a(!1),
                children: u.Z.Messages.PREMIUM_REQUIRED,
              }),
              (0, n.jsx)(o.Z.Content, {
                type: o.Z.Types.UPGRADE,
                children:
                  d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e)
                    ? u.Z.Messages.PREMIUM_UPGRADE_REQUIRED_BODY
                    : u.Z.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY,
              }),
              (0, n.jsx)(o.Z.Footer, {
                primary: {
                  onClick: () => a(!0),
                  label: u.Z.Messages.PREMIUM_REQUIRED_GET_NITRO,
                },
              }),
            ],
          });
        }
      }
      s.default = l.ZP.connectStores([r.default], () => {
        let e = r.default.getCurrentUser();
        return (
          i()(null != e, "PremiumRequiredModal: user cannot be null"),
          { user: e }
        );
      })(E);
    },
    233787: function (e, s, a) {
      var n,
        t,
        c = a(735250);
      a(470079);
      var i = a(481060),
        l = a(600164),
        o = a(476582);
      ((n = t || (t = {})).UPGRADE = "UPGRADE"),
        (n.CANCEL = "CANCEL"),
        (n.UNVERIFIED = "UNVERIFIED"),
        (n.UNCLAIMED = "UNCLAIMED"),
        (n.GRANDFATHERED = "GRANDFATHERED");
      let r = {
          UPGRADE: "imageUpgrade",
          CANCEL: "imageCancel",
          UNVERIFIED: "imageUnverified",
          UNCLAIMED: "imageUnclaimed",
          GRANDFATHERED: "imageCancel",
        },
        d = (e) => {
          let { children: s, ...a } = e;
          return (0, c.jsx)(i.ModalRoot, { ...a, children: s });
        };
      (d.Header = (e) => {
        let { children: s, onClose: a } = e;
        return (0, c.jsxs)(i.ModalHeader, {
          justify: l.Z.Justify.BETWEEN,
          separator: !1,
          children: [
            (0, c.jsx)(i.FormTitle, { tag: i.FormTitleTags.H4, children: s }),
            null != a
              ? (0, c.jsx)(i.ModalCloseButton, {
                  className: o.__invalid_closeIcon,
                  onClick: a,
                })
              : null,
          ],
        });
      }),
        (d.Content = (e) => {
          let { children: s, type: a } = e;
          return (0, c.jsxs)(i.ModalContent, {
            children: [
              (0, c.jsx)("div", { className: o[r[a]] }),
              (0, c.jsx)("div", { className: o.message, children: s }),
            ],
          });
        }),
        (d.Footer = (e) => {
          let { primary: s, primaryRenderer: a, secondary: n } = e;
          return (0, c.jsx)(i.ModalFooter, {
            children: (0, c.jsxs)(l.Z, {
              justify: l.Z.Justify.END,
              children: [
                null != n
                  ? (0, c.jsx)(i.Button, {
                      onClick: n.onClick,
                      look: i.Button.Looks.LINK,
                      innerClassName: o.secondaryButton,
                      children: n.label,
                    })
                  : null,
                null != s
                  ? (0, c.jsx)(i.Button, {
                      onClick: s.onClick,
                      color: i.Button.Colors.BRAND,
                      children: s.label,
                    })
                  : a,
              ],
            }),
          });
        }),
        (d.Types = t),
        (s.Z = d);
    },
    476582: function (e, s, a) {
      a.r(
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
//# sourceMappingURL=9982bfe66fd4a5d2ba1f.js.map
