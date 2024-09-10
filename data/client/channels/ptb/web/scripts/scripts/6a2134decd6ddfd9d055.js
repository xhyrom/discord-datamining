"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["638"],
  {
    505913: function (e) {
      e.exports = "/assets/0e1c2310fa2669e54c46.svg";
    },
    543974: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return g;
          },
        }),
        a(47120);
      var t = a(735250),
        i = a(470079),
        s = a(512722),
        o = a.n(s),
        r = a(990547),
        d = a(442837),
        l = a(481060),
        c = a(668781),
        m = a(494620),
        u = a(961842),
        C = a(254238),
        N = a(258609),
        h = a(689938),
        v = a(694519),
        x = a(505913);
      function _(e) {
        let { name: n, subText: a } = e;
        return (0, t.jsxs)("div", {
          className: v.deviceItemName,
          children: [
            (0, t.jsx)(u.Z, { className: v.deviceItemIcon }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(l.Text, {
                  variant: "text-md/semibold",
                  color: "interactive-active",
                  children: n,
                }),
                a,
              ],
            }),
          ],
        });
      }
      function f(e) {
        let {
            devices: n,
            onFinished: a,
            selectedDeviceId: i,
            onSelectDeviceId: s,
            transferring: o,
          } = e,
          r = n.map((e) => {
            let { id: n, name: a, platform: i } = e;
            return { value: n, name: (0, t.jsx)(_, { name: a, platform: i }) };
          });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              separator: !1,
              className: v.modalHeaderContainer,
              children: [
                (0, t.jsx)(l.Heading, {
                  className: v.modalHeader,
                  color: "header-primary",
                  variant: "heading-xl/bold",
                  children:
                    h.Z.Messages
                      .CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER,
                }),
                (0, t.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children:
                    h.Z.Messages
                      .CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING,
                }),
              ],
            }),
            (0, t.jsxs)(l.ModalContent, {
              className: v.content,
              children: [
                (0, t.jsx)(l.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: v.deviceItem,
                  size: l.RadioGroup.Sizes.NOT_SET,
                  value: i,
                  options: r,
                  onChange: (e) => {
                    let { value: n } = e;
                    return s(n);
                  },
                }),
                (0, t.jsx)(m.Z, {
                  children: h.Z.Messages.PLAYSTATION_DEVICES_INFOBOX,
                }),
              ],
            }),
            (0, t.jsx)(l.ModalFooter, {
              children: (0, t.jsx)(l.Button, {
                disabled: null == i,
                submitting: o,
                onClick: a,
                children: h.Z.Messages.CONSOLE_TRANSFER_VOICE,
              }),
            }),
          ],
        });
      }
      function I() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              separator: !1,
              className: v.modalHeaderContainer,
              children: [
                (0, t.jsx)(l.Heading, {
                  className: v.modalHeader,
                  color: "header-primary",
                  variant: "heading-xl/bold",
                  children: h.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND,
                }),
                (0, t.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: h.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY,
                }),
              ],
            }),
            (0, t.jsx)(l.ModalContent, {
              className: v.emptyArt,
              children: (0, t.jsx)("img", {
                src: x,
                width: "189",
                height: "177",
                alt: "",
              }),
            }),
          ],
        });
      }
      function g(e) {
        let n,
          { channel: a, platform: s, transitionState: m, onClose: u } = e,
          x = (0, d.e7)([N.Z], () => N.Z.getDevicesForPlatform(s), [s]),
          _ = (0, d.e7)([N.Z], () => N.Z.getLastSelectedDeviceByPlatform(s)),
          g = i.useMemo(() => Object.values(x), [x]),
          O = (0, d.e7)([N.Z], () => N.Z.getFetchingDevices(s)),
          p = (0, d.e7)([N.Z], () => {
            var e;
            return null === (e = N.Z.getAwaitingRemoteSessionInfo()) ||
              void 0 === e
              ? void 0
              : e.deviceId;
          }),
          [j, E] = i.useState(!1),
          [S, R] = i.useState(() => {
            var e, n;
            return null !==
              (n =
                null === (e = x[null != p ? p : ""]) || void 0 === e
                  ? void 0
                  : e.id) && void 0 !== n
              ? n
              : null;
          });
        i.useEffect(() => {
          C.LO(s);
        }, [s]),
          i.useEffect(() => {
            1 === g.length ? R(g[0].id) : null != _ && R(_);
          }, [g, _]);
        let Z = async () => {
          let e = x[null != S ? S : ""];
          o()(null != e, "Cannot transfer without selected device");
          try {
            E(!0), await C.sh(s, e.id, a), u();
          } catch (n) {
            E(!1),
              c.Z.show({
                title: h.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
                body: h.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                  deviceName: e.name,
                }),
              });
          }
        };
        return (
          (n = O
            ? (0, t.jsx)("div", {
                className: v.spinnerContainer,
                children: (0, t.jsx)(l.Spinner, {}),
              })
            : 0 === g.length
              ? (0, t.jsx)(I, {})
              : (0, t.jsx)(f, {
                  devices: g,
                  onFinished: Z,
                  selectedDeviceId: S,
                  transferring: j || null != p,
                  onSelectDeviceId: (e) => {
                    R(e), (0, C.bp)(s, e);
                  },
                })),
          (0, t.jsxs)(l.ModalRoot, {
            size: l.ModalSize.DYNAMIC,
            className: v.modalRoot,
            transitionState: m,
            impression: {
              impressionName: r.ImpressionNames.GAME_CONSOLE_DEVICE_LIST,
            },
            children: [
              n,
              (0, t.jsx)(l.ModalCloseButton, {
                className: v.closeButton,
                onClick: u,
              }),
            ],
          })
        );
      }
    },
    494620: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return u;
        },
        z: function () {
          return i;
        },
      });
      var t,
        i,
        s = a(735250);
      a(470079);
      var o = a(120356),
        r = a.n(o),
        d = a(481060),
        l = a(179840);
      ((t = i || (i = {})).INFO = "info"), (t.WARNING = "warning");
      let c = { info: l.info, warning: l.warning },
        m = { info: d.CircleInformationIcon, warning: d.CircleWarningIcon };
      function u(e) {
        let { children: n, className: a, look: t = "info" } = e,
          i = m[t];
        return (0, s.jsxs)("div", {
          className: r()(l.root, a, c[t]),
          children: [
            (0, s.jsx)(i, { className: l.icon, color: "currentColor" }),
            (0, s.jsx)(d.Text, {
              className: l.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    961842: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = a(735250);
      a(470079);
      var i = a(325767);
      function s(e) {
        let {
          width: n = 24,
          height: a = 24,
          color: s = "currentColor",
          foreground: o,
          ...r
        } = e;
        return (0, t.jsxs)("svg", {
          ...(0, i.Z)(r),
          width: n,
          height: a,
          viewBox: "0 0 24 25",
          children: [
            (0, t.jsx)("path", {
              className: o,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
              "aria-hidden": !0,
            }),
            (0, t.jsx)("path", {
              className: o,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
              "aria-hidden": !0,
            }),
            (0, t.jsx)("path", {
              className: o,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
    694519: function (e, n, a) {
      e.exports = {
        modalRoot: "modalRoot_a751c2",
        modalHeaderContainer: "modalHeaderContainer_a751c2",
        modalHeader: "modalHeader_a751c2",
        content: "content_a751c2",
        closeButton: "closeButton_a751c2",
        deviceItem: "deviceItem_a751c2",
        deviceItemIcon: "deviceItemIcon_a751c2",
        deviceItemName: "deviceItemName_a751c2",
        spinnerContainer: "spinnerContainer_a751c2",
        emptyArt: "emptyArt_a751c2",
      };
    },
    179840: function (e, n, a) {
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
  },
]);
//# sourceMappingURL=6a2134decd6ddfd9d055.js.map
