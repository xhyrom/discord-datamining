"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83536"],
  {
    841613: function (e, t, n) {
      n.d(t, {
        Gl: function () {
          return i;
        },
        hG: function () {
          return s;
        },
        oI: function () {
          return o;
        },
      });
      var a = n(570140);
      function s(e, t, n) {
        a.Z.dispatch({
          type: "CONNECTED_DEVICE_SET",
          displayName: e,
          connectedDevicePreference: t,
          location: n,
        });
      }
      function i(e) {
        a.Z.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
      }
      function o() {
        a.Z.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL" });
      }
    },
    43991: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a,
        s,
        i = n(735250),
        o = n(470079),
        r = n(481060),
        E = n(841613),
        d = n(600164),
        l = n(626135),
        c = n(981631),
        D = n(689938),
        T = n(177473);
      function N(e, t, n) {
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
      ((a = s || (s = {})).CERTIFIED = "New Audio Device Detected - Certified"),
        (a.NOT_CERTIFIED = "New Audio Device Detected - Not Certified");
      class _ extends o.Component {
        track() {
          let { certifiedDeviceMetadata: e, device: t } = this.props;
          l.default.track(c.rMx.OPEN_MODAL, {
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
            { devicePreference: a } = this.state;
          switch (t.type) {
            case c.QyF.INPUT:
              e =
                null != n
                  ? D.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_BODY.format(
                      { vendorName: n.vendor.name, modelName: n.model.name },
                    )
                  : D.Z.Messages.CONNECTED_DEVICE_DETECTED_INPUT_BODY.format({
                      name: t.displayName,
                    });
              break;
            case c.QyF.OUTPUT:
              e =
                null != n
                  ? D.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_OUTPUT_BODY.format(
                      { vendorName: n.vendor.name, modelName: n.model.name },
                    )
                  : D.Z.Messages.CONNECTED_DEVICE_DETECTED_OUTPUT_BODY.format({
                      name: t.displayName,
                    });
              break;
            default:
              e = (0, i.jsxs)(o.Fragment, {
                children: [
                  null != n
                    ? D.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_AND_OUTPUT_BODY.format(
                        { vendorName: n.vendor.name, modelName: n.model.name },
                      )
                    : D.Z.Messages.CONNECTED_DEVICE_DETECTED_INPUT_AND_OUTPUT_BODY.format(
                        { name: t.displayName },
                      ),
                  (0, i.jsx)(r.RadioGroup, {
                    value: a,
                    className: T.options,
                    onChange: this.handleConnectedDeviceType,
                    options: [
                      {
                        name: D.Z.Messages
                          .CONNECTED_DEVICE_DETECTED_OPTION_INPUT_AND_OUTPUT,
                        value: c.QyF.INPUT_AND_OUTPUT,
                      },
                      {
                        name: D.Z.Messages
                          .CONNECTED_DEVICE_DETECTED_OPTION_INPUT,
                        value: c.QyF.INPUT,
                      },
                      {
                        name: D.Z.Messages
                          .CONNECTED_DEVICE_DETECTED_OPTION_OUTPUT,
                        value: c.QyF.OUTPUT,
                      },
                    ],
                  }),
                ],
              });
          }
          return (0, i.jsxs)(
            o.Fragment,
            {
              children: [
                e,
                (0, i.jsx)(r.Button, {
                  className: T.neverShow,
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.LINK,
                  onClick: this.neverShow,
                  children: D.Z.Messages.DONT_SHOW_AGAIN,
                }),
              ],
            },
            t.displayName,
          );
        }
        render() {
          let { certifiedDeviceMetadata: e, transitionState: t } = this.props,
            n =
              null != e
                ? D.Z.Messages.CERTIFIED_DEVICE_RECOMMENDATION_TITLE
                : D.Z.Messages.CONNECTED_DEVICE_DETECTED_TITLE;
          return (0, i.jsxs)(r.ModalRoot, {
            transitionState: t,
            "aria-label": n,
            children: [
              (0, i.jsx)(r.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: n,
                }),
              }),
              (0, i.jsx)(r.ModalContent, {
                children: (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: this.renderBody(),
                }),
              }),
              (0, i.jsx)(r.ModalFooter, {
                children: (0, i.jsxs)(d.Z, {
                  justify: d.Z.Justify.END,
                  children: [
                    (0, i.jsx)(r.Button, {
                      color: r.Button.Colors.PRIMARY,
                      onClick: this.cancel,
                      className: T.cancelButton,
                      children:
                        D.Z.Messages.CONNECTED_DEVICE_DETECTED_CANCEL_BUTTON,
                    }),
                    (0, i.jsx)(r.Button, {
                      onClick: this.confirm,
                      children:
                        D.Z.Messages.CONNECTED_DEVICE_DETECTED_CONFIRM_BUTTON,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            N(this, "confirm", () => {
              let { device: e, onClose: t } = this.props,
                { devicePreference: n } = this.state;
              null != n &&
                (E.hG(e.displayName, n, "New Audio Device Detected Modal"),
                t());
            }),
            N(this, "cancel", () => {
              let { device: e, onClose: t } = this.props;
              E.Gl(e.displayName), t();
            }),
            N(this, "neverShow", () => {
              let { certifiedDeviceMetadata: e, onClose: t } = this.props;
              E.oI(),
                t(),
                l.default.track(c.rMx.MODAL_DISMISSED, {
                  type:
                    null != e
                      ? "New Audio Device Detected - Certified"
                      : "New Audio Device Detected - Not Certified",
                  dismiss_type: "permanent",
                });
            }),
            N(this, "handleConnectedDeviceType", (e) => {
              let { value: t } = e;
              this.setState({ devicePreference: t });
            }),
            (this.state = {
              devicePreference:
                null != e.device
                  ? (function (e) {
                      switch (e) {
                        case c.QyF.INPUT:
                          return c.aVf.INPUT;
                        case c.QyF.OUTPUT:
                          return c.aVf.OUTPUT;
                        case c.QyF.INPUT_AND_OUTPUT:
                          return c.aVf.INPUT_AND_OUTPUT;
                        default:
                          return null;
                      }
                    })(e.device.type)
                  : null,
            });
        }
      }
    },
    177473: function (e, t, n) {
      e.exports = {
        options: "options_bbd3ea",
        neverShow: "neverShow_bbd3ea",
        cancelButton: "cancelButton_bbd3ea",
      };
    },
  },
]);
//# sourceMappingURL=b06195848706ef5d8925.js.map
