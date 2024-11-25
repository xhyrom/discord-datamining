"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7232"],
  {
    338950: function (t) {
      t.exports = "/assets/ddb6ed00b47304db1205.svg";
    },
    597104: function (t) {
      t.exports = "/assets/7cc23d24b5e48fe53551.svg";
    },
    784999: function (t) {
      t.exports = "/assets/95b0d0a27b8360bc9b90.svg";
    },
    949760: function (t) {
      t.exports = "/assets/1bc2a7c7fce0188cbc57.svg";
    },
    866711: function (t) {
      t.exports = "/assets/bc126a5e03d096e5f319.svg";
    },
    319108: function (t) {
      t.exports = "/assets/352809d4995ef015b745.svg";
    },
    645586: function (t, e, s) {
      s.r(e), s(47120);
      var n,
        a,
        i = s(200651),
        o = s(192379),
        c = s(442837),
        r = s(481060),
        l = s(355467),
        u = s(505649),
        d = s(626135),
        h = s(937615),
        p = s(622999),
        g = s(981631),
        m = s(388032),
        f = s(142780);
      function x(t, e, s) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = s),
          t
        );
      }
      ((a = n || (n = {}))[(a.START = 0)] = "START"),
        (a[(a.FAIL = 1)] = "FAIL"),
        (a[(a.SUCCESS = 2)] = "SUCCESS"),
        (a[(a.CANCELED = 3)] = "CANCELED");
      class A extends o.Component {
        componentDidMount() {
          d.default.track(g.rMx.OPEN_MODAL, {
            type: g.jXE.PAYMENT_AUTHENTICATION_MODAL,
          });
        }
        componentWillUnmount() {
          d.default.track(g.rMx.MODAL_DISMISSED, {
            type: g.jXE.PAYMENT_AUTHENTICATION_MODAL,
          });
        }
        getTitle() {
          let { step: t } = this.state;
          switch (t) {
            case 0:
              return m.intl.string(m.t.N65Zra);
            case 2:
              return m.intl.string(m.t.DPgrRk);
            case 3:
              return m.intl.string(m.t.xypuIi);
            default:
              return m.intl.string(m.t.uEoQdH);
          }
        }
        getImageStyle() {
          let { step: t } = this.state;
          switch (t) {
            case 0:
              return f.authenticationRequiredImage;
            case 2:
              return f.authenticationSuccessImage;
            default:
              return f.authenticationFailImage;
          }
        }
        getMessage() {
          let { step: t } = this.state,
            { pendingPayment: e } = this.props;
          switch (t) {
            case 0:
              return m.intl.format(m.t.RoxWER, {
                price: (0, h.T4)(e.amount, e.currency),
                item: e.description,
              });
            case 2:
              return m.intl.string(m.t.PZskfn);
            case 3:
              return m.intl.format(m.t["j0tI/f"], { item: e.description });
            default:
              return m.intl.string(m.t.BAr3rK);
          }
        }
        renderButtons() {
          let { step: t } = this.state,
            { disableAuthentication: e } = this.props;
          if (0 === t)
            return (0, i.jsxs)(o.Fragment, {
              children: [
                (0, i.jsx)(r.Button, {
                  color: r.ButtonColors.BRAND,
                  disabled: e,
                  onClick: this.handleAuthenticate,
                  children: m.intl.string(m.t.VAqBoK),
                }),
                (0, i.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  size: r.Button.Sizes.NONE,
                  color: r.Button.Colors.PRIMARY,
                  onClick: this.cancelPayment,
                  className: f.cancelButton,
                  children: m.intl.string(m.t["2NeVoa"]),
                }),
              ],
            });
          return (0, i.jsx)(r.Button, {
            color: r.ButtonColors.BRAND,
            onClick: this.close,
            children: m.intl.string(m.t.cpT0Cg),
          });
        }
        render() {
          let { transitionState: t } = this.props;
          return (0, i.jsxs)(r.ModalRoot, {
            transitionState: t,
            className: f.modal,
            size: r.ModalSize.SMALL,
            "aria-label": this.getTitle(),
            children: [
              (0, i.jsxs)(r.ModalHeader, {
                children: [
                  (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: (0, i.jsx)("span", {
                      className: f.__invalid_modalTitle,
                      children: this.getTitle(),
                    }),
                  }),
                  (0, i.jsx)(r.ModalCloseButton, {
                    className: f.closeIcon,
                    onClick: this.close,
                  }),
                ],
              }),
              (0, i.jsxs)(r.ModalContent, {
                className: f.content,
                children: [
                  (0, i.jsx)("div", { className: this.getImageStyle() }),
                  (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: this.getMessage(),
                  }),
                ],
              }),
              (0, i.jsx)(r.ModalFooter, {
                className: f.__invalid_footer,
                children: this.renderButtons(),
              }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            x(this, "state", { step: 0 }),
            x(this, "close", async () => {
              let { step: t } = this.state,
                { onClose: e, pendingPayment: s } = this.props;
              0 === t && (await (0, l.UY)(s.id)), e();
            }),
            x(this, "cancelPayment", async () => {
              let { pendingPayment: t } = this.props;
              try {
                await (0, l.UY)(t.id);
              } catch (t) {
                throw (this.setState({ step: 3 }), t);
              }
              this.setState({ step: 3 });
            }),
            x(this, "handleAuthenticate", async () => {
              let { pendingPayment: t } = this.props,
                { error: e } = await (0, p.oe)(t.id);
              null != e
                ? this.setState({ step: 1 })
                : this.setState({ step: 2 });
            });
        }
      }
      e.default = c.ZP.connectStores([u.Z], () => ({
        disableAuthentication: u.Z.isAwaitingAuthentication,
      }))(A);
    },
    142780: function (t, e, s) {
      t.exports = {
        modal: "modal_a6213d",
        closeIcon: "closeIcon_a6213d",
        cancelButton: "cancelButton_a6213d",
        content: "content_a6213d",
        authenticationRequiredImage: "authenticationRequiredImage_a6213d",
        authenticationSuccessImage: "authenticationSuccessImage_a6213d",
        authenticationFailImage: "authenticationFailImage_a6213d",
      };
    },
  },
]);
//# sourceMappingURL=87c3ad653486af5e113f.js.map
