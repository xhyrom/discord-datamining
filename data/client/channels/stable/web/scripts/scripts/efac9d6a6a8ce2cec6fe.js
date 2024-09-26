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
    725296: function (e) {
      e.exports = "/assets/2eb9737501c51d88a31d.svg";
    },
    477335: function (e) {
      e.exports = "/assets/44cbffbbc0ff1ec96c60.svg";
    },
    297640: function (e) {
      e.exports = "/assets/6970a5ece8e41f339d43.svg";
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
    918995: function (e, s, a) {
      a.r(s), a(47120);
      var n = a(735250),
        t = a(470079),
        c = a(481060),
        i = a(233787),
        l = a(689938);
      function o(e, s, a) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = a),
          e
        );
      }
      class r extends t.Component {
        render() {
          let { transitionState: e } = this.props;
          return (0, n.jsxs)(i.Z, {
            transitionState: e,
            "aria-label": l.Z.Messages.PREMIUM_NOT_CLAIMED,
            children: [
              (0, n.jsx)(i.Z.Header, {
                children: l.Z.Messages.PREMIUM_NOT_CLAIMED,
              }),
              (0, n.jsx)(i.Z.Content, {
                type: i.Z.Types.UNCLAIMED,
                children: l.Z.Messages.PREMIUM_NOT_CLAIMED_BODY,
              }),
              (0, n.jsx)(i.Z.Footer, {
                secondary: {
                  onClick: this.cancel,
                  label: l.Z.Messages.NEVERMIND,
                },
                primary: {
                  onClick: this.claimAccount,
                  label: l.Z.Messages.CLAIM_ACCOUNT,
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
                (0, c.openModalLazy)(async () => {
                  let { default: e } = await a
                    .e("60827")
                    .then(a.bind(a, 324239));
                  return (s) => (0, n.jsx)(e, { ...s });
                });
            });
        }
      }
      s.default = r;
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
//# sourceMappingURL=efac9d6a6a8ce2cec6fe.js.map
