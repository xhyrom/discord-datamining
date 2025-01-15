"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20102"],
  {
    477335: function (t) {
      t.exports = "/assets/44cbffbbc0ff1ec96c60.svg";
    },
    297640: function (t) {
      t.exports = "/assets/6970a5ece8e41f339d43.svg";
    },
    444688: function (t, e, n) {
      n.r(e);
      var i = n(200651);
      n(192379);
      var o = n(442837),
        s = n(481060),
        r = n(600164),
        l = n(418632),
        a = n(594174),
        c = n(388032),
        d = n(340282);
      function u(t) {
        let { onClose: e } = t,
          r = (0, o.e7)([a.default], () => a.default.getCurrentUser());
        function d() {
          null == e || e();
        }
        function u() {
          d(),
            (0, s.openModalLazy)(async () => {
              let { default: t } = await Promise.all([
                n.e("9343"),
                n.e("77584"),
              ]).then(n.bind(n, 642298));
              return (e) => (0, i.jsx)(t, { ...e });
            });
        }
        return (null == r ? void 0 : r.email) == null
          ? (0, i.jsx)(s.Button, {
              onClick: u,
              color: s.Button.Colors.BRAND,
              look: s.Button.Looks.FILLED,
              children: c.intl.string(c.t.ydw5nZ),
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(s.Button, {
                  onClick: u,
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  children: c.intl.string(c.t.Vm8akJ),
                }),
                (0, i.jsx)(l.Z, { color: s.Button.Colors.BRAND, onClick: d }),
              ],
            });
      }
      e.default = function (t) {
        let { onClose: e, transitionState: n } = t;
        return (0, i.jsxs)(s.ModalRoot, {
          transitionState: n,
          children: [
            (0, i.jsx)(s.ModalHeader, {
              children: (0, i.jsx)(s.FormTitle, {
                tag: s.FormTitleTags.H4,
                children: c.intl.string(c.t.UZLrY2),
              }),
            }),
            (0, i.jsxs)(s.ModalContent, {
              children: [
                (0, i.jsx)("div", { className: d.imageUnverified }),
                (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  className: d.message,
                  children: c.intl.string(c.t["0LgOKC"]),
                }),
              ],
            }),
            (0, i.jsx)(s.ModalFooter, {
              children: (0, i.jsx)(r.Z, {
                justify: r.Z.Justify.END,
                children: (0, i.jsx)(u, { onClose: e }),
              }),
            }),
          ],
        });
      };
    },
    418632: function (t, e, n) {
      n(47120);
      var i,
        o = n(200651),
        s = n(192379),
        r = n(512722),
        l = n.n(r),
        a = n(442837),
        c = n(481060),
        d = n(893776),
        u = n(468026),
        f = n(594174),
        m = n(388032);
      function h(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class g extends (i = s.Component) {
        render() {
          let { color: t, look: e, size: n } = this.props;
          return (0, o.jsx)(c.Button, {
            look: e,
            size: n,
            color: t,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: m.intl.string(m.t.lm1UKi),
          });
        }
        constructor(...t) {
          super(...t),
            h(this, "state", { isSendingVerificationEmail: !1 }),
            h(this, "handleResendVerification", () => {
              let { currentUser: t, onClick: e } = this.props;
              null == e || e(),
                this.setState({ isSendingVerificationEmail: !0 }, () => {
                  d.Z.verifyResend()
                    .then(() =>
                      (0, c.openModal)((e) =>
                        (0, o.jsx)(c.ConfirmModal, {
                          header: m.intl.string(m.t.LykQYm),
                          confirmText: m.intl.string(m.t.BddRzc),
                          confirmButtonColor: c.Button.Colors.BRAND,
                          ...e,
                          children: (0, o.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: m.intl.format(m.t.azKEPz, {
                              email: t.email,
                            }),
                          }),
                        }),
                      ),
                    )
                    .catch((t) => {
                      let { body: e } = t,
                        n = m.intl.string(m.t.XcrQNz);
                      null != e && e.email && (n = e.email),
                        (0, c.openModal)((t) =>
                          (0, o.jsx)(u.default, {
                            title: m.intl.string(m.t.VbTh0N),
                            body: n,
                            ...t,
                          }),
                        );
                    })
                    .then(() =>
                      this.setState({ isSendingVerificationEmail: !1 }),
                    );
                });
            });
        }
      }
      h(g, "defaultProps", {
        size: c.Button.Sizes.MEDIUM,
        color: c.Button.Colors.BRAND,
      }),
        (e.Z = a.ZP.connectStores([f.default], () => {
          let t = f.default.getCurrentUser();
          return (
            l()(
              null != t,
              "ResendEmailVerificationButton: currentUser cannot be undefined",
            ),
            { currentUser: t }
          );
        })(g));
    },
    340282: function (t, e, n) {
      t.exports = {
        message: "message_f19fa9",
        imageUnverified: "imageUnverified_f19fa9",
      };
    },
  },
]);
//# sourceMappingURL=f66d99520c6243d3f9d2.js.map
