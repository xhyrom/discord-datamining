"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83536"],
  {
    841613: function (e, t, n) {
      n.d(t, {
        Gl: function () {
          return o;
        },
        hG: function () {
          return a;
        },
        oI: function () {
          return r;
        },
      });
      var i = n(570140);
      function a(e, t, n) {
        i.Z.dispatch({
          type: "CONNECTED_DEVICE_SET",
          displayName: e,
          connectedDevicePreference: t,
          location: n,
        });
      }
      function o(e) {
        i.Z.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
      }
      function r() {
        i.Z.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL" });
      }
    },
    43991: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var i,
        a,
        o = n(200651),
        r = n(192379),
        l = n(481060),
        s = n(841613),
        d = n(600164),
        c = n(626135),
        u = n(981631),
        m = n(388032),
        p = n(923248);
      function h(e, t, n) {
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
      ((i = a || (a = {})).CERTIFIED = "New Audio Device Detected - Certified"),
        (i.NOT_CERTIFIED = "New Audio Device Detected - Not Certified");
      class N extends r.Component {
        track() {
          let { certifiedDeviceMetadata: e, device: t } = this.props;
          c.default.track(u.rMx.OPEN_MODAL, {
            type:
              null != e
                ? "New Audio Device Detected - Certified"
                : "New Audio Device Detected - Not Certified",
            device_name:
              null != e
                ? "".concat(e.vendor.name, " ").concat(e.model.name)
                : t.displayName,
          });
        }
        componentDidMount() {
          this.track();
        }
        componentDidUpdate(e) {
          let { device: t } = this.props;
          t.displayName !== e.device.displayName && this.track();
        }
        renderBody() {
          let e;
          let { device: t, certifiedDeviceMetadata: n } = this.props,
            { devicePreference: i } = this.state;
          switch (t.type) {
            case u.QyF.INPUT:
              e =
                null != n
                  ? m.intl.format(m.t.NqNqy8, {
                      vendorName: n.vendor.name,
                      modelName: n.model.name,
                    })
                  : m.intl.format(m.t.stSaRk, { name: t.displayName });
              break;
            case u.QyF.OUTPUT:
              e =
                null != n
                  ? m.intl.format(m.t.uPgqIC, {
                      vendorName: n.vendor.name,
                      modelName: n.model.name,
                    })
                  : m.intl.format(m.t.jyhYp6, { name: t.displayName });
              break;
            default:
              e = (0, o.jsxs)(r.Fragment, {
                children: [
                  null != n
                    ? m.intl.format(m.t["4Xyzx8"], {
                        vendorName: n.vendor.name,
                        modelName: n.model.name,
                      })
                    : m.intl.format(m.t.Z7XQcn, { name: t.displayName }),
                  (0, o.jsx)(l.RadioGroup, {
                    value: i,
                    className: p.options,
                    onChange: this.handleConnectedDeviceType,
                    options: [
                      {
                        name: m.intl.string(m.t.vhxqwc),
                        value: u.QyF.INPUT_AND_OUTPUT,
                      },
                      {
                        name: m.intl.string(m.t["Kqs9+P"]),
                        value: u.QyF.INPUT,
                      },
                      { name: m.intl.string(m.t.GGlM3d), value: u.QyF.OUTPUT },
                    ],
                  }),
                ],
              });
          }
          return (0, o.jsxs)(
            r.Fragment,
            {
              children: [
                e,
                (0, o.jsx)(l.Button, {
                  className: p.neverShow,
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.LINK,
                  onClick: this.neverShow,
                  children: m.intl.string(m.t["5E9SBw"]),
                }),
              ],
            },
            t.displayName,
          );
        }
        render() {
          let { certifiedDeviceMetadata: e, transitionState: t } = this.props,
            n =
              null != e ? m.intl.string(m.t.kiqvHR) : m.intl.string(m.t.AbnGIy);
          return (0, o.jsxs)(l.ModalRoot, {
            transitionState: t,
            "aria-label": n,
            children: [
              (0, o.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, o.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  children: n,
                }),
              }),
              (0, o.jsx)(l.ModalContent, {
                children: (0, o.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: this.renderBody(),
                }),
              }),
              (0, o.jsx)(l.ModalFooter, {
                children: (0, o.jsxs)(d.Z, {
                  justify: d.Z.Justify.END,
                  children: [
                    (0, o.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      onClick: this.cancel,
                      className: p.cancelButton,
                      children: m.intl.string(m.t.vPBgq6),
                    }),
                    (0, o.jsx)(l.Button, {
                      onClick: this.confirm,
                      children: m.intl.string(m.t.ydkoDQ),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            h(this, "confirm", () => {
              let { device: e, onClose: t } = this.props,
                { devicePreference: n } = this.state;
              null != n &&
                (s.hG(e.displayName, n, "New Audio Device Detected Modal"),
                t());
            }),
            h(this, "cancel", () => {
              let { device: e, onClose: t } = this.props;
              s.Gl(e.displayName), t();
            }),
            h(this, "neverShow", () => {
              let { certifiedDeviceMetadata: e, onClose: t } = this.props;
              s.oI(),
                t(),
                c.default.track(u.rMx.MODAL_DISMISSED, {
                  type:
                    null != e
                      ? "New Audio Device Detected - Certified"
                      : "New Audio Device Detected - Not Certified",
                  dismiss_type: "permanent",
                });
            }),
            h(this, "handleConnectedDeviceType", (e) => {
              let { value: t } = e;
              this.setState({ devicePreference: t });
            }),
            (this.state = {
              devicePreference:
                null != e.device
                  ? (function (e) {
                      switch (e) {
                        case u.QyF.INPUT:
                          return u.aVf.INPUT;
                        case u.QyF.OUTPUT:
                          return u.aVf.OUTPUT;
                        case u.QyF.INPUT_AND_OUTPUT:
                          return u.aVf.INPUT_AND_OUTPUT;
                        default:
                          return null;
                      }
                    })(e.device.type)
                  : null,
            });
        }
      }
    },
    923248: function (e, t, n) {
      e.exports = {
        options: "options_bbd3ea",
        neverShow: "neverShow_bbd3ea",
        cancelButton: "cancelButton_bbd3ea",
      };
    },
  },
]);
//# sourceMappingURL=85f960944967d5583516.js.map
