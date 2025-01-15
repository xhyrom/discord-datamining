"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69417"],
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
    233787: function (e, t, n) {
      var s,
        a,
        i = n(200651);
      n(192379);
      var c = n(481060),
        l = n(600164),
        o = n(790755);
      ((s = a || (a = {})).UPGRADE = "UPGRADE"),
        (s.CANCEL = "CANCEL"),
        (s.UNVERIFIED = "UNVERIFIED"),
        (s.UNCLAIMED = "UNCLAIMED"),
        (s.GRANDFATHERED = "GRANDFATHERED");
      let r = {
          UPGRADE: "imageUpgrade",
          CANCEL: "imageCancel",
          UNVERIFIED: "imageUnverified",
          UNCLAIMED: "imageUnclaimed",
          GRANDFATHERED: "imageCancel",
        },
        d = (e) => {
          let { children: t, ...n } = e;
          return (0, i.jsx)(c.ModalRoot, { ...n, children: t });
        };
      (d.Header = (e) => {
        let { children: t, onClose: n } = e;
        return (0, i.jsxs)(c.ModalHeader, {
          justify: l.Z.Justify.BETWEEN,
          separator: !1,
          children: [
            (0, i.jsx)(c.FormTitle, { tag: c.FormTitleTags.H4, children: t }),
            null != n
              ? (0, i.jsx)(c.ModalCloseButton, {
                  className: o.__invalid_closeIcon,
                  onClick: n,
                })
              : null,
          ],
        });
      }),
        (d.Content = (e) => {
          let { children: t, type: n } = e;
          return (0, i.jsxs)(c.ModalContent, {
            children: [
              (0, i.jsx)("div", { className: o[r[n]] }),
              (0, i.jsx)("div", { className: o.message, children: t }),
            ],
          });
        }),
        (d.Footer = (e) => {
          let { primary: t, primaryRenderer: n, secondary: s } = e;
          return (0, i.jsx)(c.ModalFooter, {
            children: (0, i.jsxs)(l.Z, {
              justify: l.Z.Justify.END,
              children: [
                null != s
                  ? (0, i.jsx)(c.Button, {
                      onClick: s.onClick,
                      look: c.Button.Looks.LINK,
                      innerClassName: o.secondaryButton,
                      children: s.label,
                    })
                  : null,
                null != t
                  ? (0, i.jsx)(c.Button, {
                      onClick: t.onClick,
                      color: c.Button.Colors.BRAND,
                      children: t.label,
                    })
                  : n,
              ],
            }),
          });
        }),
        (d.Types = a),
        (t.Z = d);
    },
    918995: function (e, t, n) {
      n.r(t), n(47120);
      var s = n(200651),
        a = n(192379),
        i = n(481060),
        c = n(233787),
        l = n(388032);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class r extends a.Component {
        render() {
          let { transitionState: e } = this.props;
          return (0, s.jsxs)(c.Z, {
            transitionState: e,
            "aria-label": l.intl.string(l.t.Nn0Px8),
            children: [
              (0, s.jsx)(c.Z.Header, { children: l.intl.string(l.t.Nn0Px8) }),
              (0, s.jsx)(c.Z.Content, {
                type: c.Z.Types.UNCLAIMED,
                children: l.intl.string(l.t["7btfmJ"]),
              }),
              (0, s.jsx)(c.Z.Footer, {
                secondary: {
                  onClick: this.cancel,
                  label: l.intl.string(l.t.oEAioK),
                },
                primary: {
                  onClick: this.claimAccount,
                  label: l.intl.string(l.t.fiNVio),
                },
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            o(this, "cancel", () => {
              let { onClose: e } = this.props;
              null == e || e();
            }),
            o(this, "claimAccount", () => {
              let { onClose: e } = this.props;
              null == e || e(),
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("60827")
                    .then(n.bind(n, 324239));
                  return (t) => (0, s.jsx)(e, { ...t });
                });
            });
        }
      }
      t.default = r;
    },
    790755: function (e, t, n) {
      n.r(
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
//# sourceMappingURL=7b0d208c09fb049d7d24.js.map
