"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["638"],
  {
    505913: function (e) {
      e.exports = "/assets/0e1c2310fa2669e54c46.svg";
    },
    543974: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(512722),
        o = t.n(r),
        l = t(990547),
        d = t(442837),
        s = t(481060),
        c = t(668781),
        m = t(494620),
        u = t(961842),
        h = t(254238),
        v = t(258609),
        C = t(388032),
        x = t(491472),
        f = t(505913);
      function g(e) {
        let { name: n, subText: t } = e;
        return (0, i.jsxs)("div", {
          className: x.deviceItemName,
          children: [
            (0, i.jsx)(u.Z, { className: x.deviceItemIcon }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-md/semibold",
                  color: "interactive-active",
                  children: n,
                }),
                t,
              ],
            }),
          ],
        });
      }
      function p(e) {
        let {
            devices: n,
            onFinished: t,
            selectedDeviceId: a,
            onSelectDeviceId: r,
            transferring: o,
          } = e,
          l = n.map((e) => {
            let { id: n, name: t, platform: a } = e;
            return { value: n, name: (0, i.jsx)(g, { name: t, platform: a }) };
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              separator: !1,
              className: x.modalHeaderContainer,
              children: [
                (0, i.jsx)(s.Heading, {
                  className: x.modalHeader,
                  color: "header-primary",
                  variant: "heading-xl/bold",
                  children: C.intl.string(C.t["+d9SHx"]),
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: C.intl.string(C.t["5DtaWl"]),
                }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: x.content,
              children: [
                (0, i.jsx)(s.RadioGroup, {
                  radioPosition: "right",
                  radioItemClassName: x.deviceItem,
                  size: s.RadioGroup.Sizes.NOT_SET,
                  value: a,
                  options: l,
                  onChange: (e) => {
                    let { value: n } = e;
                    return r(n);
                  },
                }),
                (0, i.jsx)(m.Z, { children: C.intl.string(C.t.dI4HFh) }),
              ],
            }),
            (0, i.jsx)(s.ModalFooter, {
              children: (0, i.jsx)(s.Button, {
                disabled: null == a,
                submitting: o,
                onClick: t,
                children: C.intl.string(C.t.FJR4bG),
              }),
            }),
          ],
        });
      }
      function j() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(s.ModalHeader, {
              separator: !1,
              className: x.modalHeaderContainer,
              children: [
                (0, i.jsx)(s.Heading, {
                  className: x.modalHeader,
                  color: "header-primary",
                  variant: "heading-xl/bold",
                  children: C.intl.string(C.t.OkJf1d),
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: C.intl.string(C.t["of/l5e"]),
                }),
              ],
            }),
            (0, i.jsx)(s.ModalContent, {
              className: x.emptyArt,
              children: (0, i.jsx)("img", {
                src: f,
                width: "189",
                height: "177",
                alt: "",
              }),
            }),
          ],
        });
      }
      function N(e) {
        let n,
          { channel: t, platform: r, transitionState: m, onClose: u } = e,
          f = (0, d.e7)([v.Z], () => v.Z.getDevicesForPlatform(r), [r]),
          g = (0, d.e7)([v.Z], () => v.Z.getLastSelectedDeviceByPlatform(r)),
          N = a.useMemo(() => Object.values(f), [f]),
          I = (0, d.e7)([v.Z], () => v.Z.getFetchingDevices(r)),
          _ = (0, d.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getAwaitingRemoteSessionInfo()) ||
              void 0 === e
              ? void 0
              : e.deviceId;
          }),
          [Z, w] = a.useState(!1),
          [H, R] = a.useState(() => {
            var e, n;
            return null !==
              (n =
                null === (e = f[null != _ ? _ : ""]) || void 0 === e
                  ? void 0
                  : e.id) && void 0 !== n
              ? n
              : null;
          });
        a.useEffect(() => {
          h.LO(r);
        }, [r]),
          a.useEffect(() => {
            1 === N.length ? R(N[0].id) : null != g && R(g);
          }, [N, g]);
        let M = async () => {
          let e = f[null != H ? H : ""];
          o()(null != e, "Cannot transfer without selected device");
          try {
            w(!0), await h.sh(r, e.id, t), u();
          } catch (n) {
            w(!1),
              c.Z.show({
                title: C.intl.string(C.t["QL1y9/"]),
                body: C.intl.formatToPlainString(C.t["6ZyNHx"], {
                  deviceName: e.name,
                }),
              });
          }
        };
        return (
          (n = I
            ? (0, i.jsx)("div", {
                className: x.spinnerContainer,
                children: (0, i.jsx)(s.Spinner, {}),
              })
            : 0 === N.length
              ? (0, i.jsx)(j, {})
              : (0, i.jsx)(p, {
                  devices: N,
                  onFinished: M,
                  selectedDeviceId: H,
                  transferring: Z || null != _,
                  onSelectDeviceId: (e) => {
                    R(e), (0, h.bp)(r, e);
                  },
                })),
          (0, i.jsxs)(s.ModalRoot, {
            size: s.ModalSize.DYNAMIC,
            className: x.modalRoot,
            transitionState: m,
            impression: {
              impressionName: l.ImpressionNames.GAME_CONSOLE_DEVICE_LIST,
            },
            children: [
              n,
              (0, i.jsx)(s.ModalCloseButton, {
                className: x.closeButton,
                onClick: u,
              }),
            ],
          })
        );
      }
    },
    494620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
        z: function () {
          return a;
        },
      });
      var i,
        a,
        r = t(200651);
      t(192379);
      var o = t(120356),
        l = t.n(o),
        d = t(481060),
        s = t(312403);
      ((i = a || (a = {})).INFO = "info"), (i.WARNING = "warning");
      let c = { info: s.info, warning: s.warning },
        m = { info: d.CircleInformationIcon, warning: d.CircleWarningIcon };
      function u(e) {
        let { children: n, className: t, look: i = "info" } = e,
          a = m[i];
        return (0, r.jsxs)("div", {
          className: l()(s.root, t, c[i]),
          children: [
            (0, r.jsx)(a, { className: s.icon, color: "currentColor" }),
            (0, r.jsx)(d.Text, {
              className: s.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    961842: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(331595);
      function r(e) {
        let {
          width: n = 24,
          height: t = 24,
          color: r = "currentColor",
          foreground: o,
          ...l
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, a.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 24 25",
          children: [
            (0, i.jsx)("path", {
              className: o,
              fill: r,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
              "aria-hidden": !0,
            }),
            (0, i.jsx)("path", {
              className: o,
              fill: r,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
              "aria-hidden": !0,
            }),
            (0, i.jsx)("path", {
              className: o,
              fill: r,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
    491472: function (e, n, t) {
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
    312403: function (e, n, t) {
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
//# sourceMappingURL=aeb169b967c8b630f4a2.js.map
