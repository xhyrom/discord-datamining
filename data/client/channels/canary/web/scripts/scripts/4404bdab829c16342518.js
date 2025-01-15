"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51343"],
  {
    387852: function (e) {
      e.exports = "/assets/b05e68141e14f909f9ff.png";
    },
    424071: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(337530);
      function l(e) {
        let { children: t } = e;
        return (0, a.jsx)("div", { className: r.slideContainer, children: t });
      }
    },
    798930: function (e, t, n) {
      var a, r;
      n.d(t, {
        O: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).LANDING = "landing"),
        (r.PRE_CONNECT = "pre-connect"),
        (r.PRE_CONNECT_WAITING = "pre-connect-waiting"),
        (r.DISCORD_CONSENT = "discord-consent"),
        (r.SUCCESS = "success"),
        (r.ERROR = "error");
    },
    585183: function (e, t, n) {
      n.d(t, {
        h: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        l = n(512722),
        o = n.n(l),
        s = n(481060),
        c = n(457330),
        i = n(600164),
        d = n(710845),
        u = n(69580),
        x = n(424071),
        h = n(388032),
        N = n(337530);
      let m = new d.Z("TwoWayLinkDiscordConsentWeb");
      function C(e) {
        let {
            platformType: t,
            clientId: n,
            scopes: l,
            authToken: d,
            onContinue: C,
            onError: j,
            onClose: f,
            redirectUri: v,
          } = e,
          [p, b] = r.useState(!1),
          E = r.useCallback(
            async (e) => {
              let n,
                a,
                { location: r } = e,
                { callbackCode: l, callbackState: o } = d;
              try {
                n = await c.Z.completeTwoWayLink(t, r, l, o);
              } catch (e) {
                var s;
                m.error("".concat(t, " link error:"), e),
                  (a = null === (s = e.body) || void 0 === s ? void 0 : s.code);
              }
              null != n ? C() : j(a);
            },
            [t, d, C, j],
          ),
          {
            header: g,
            body: k,
            appDetails: T,
            sendAuthorize: B,
          } = (0, u.useOAuth2AuthorizeForm)({
            clientId: n,
            scopes: l,
            responseType: "code",
            callback: E,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: v,
          }),
          O = r.useCallback(() => {
            o()(null != B, "sendAuthorize not available"), b(!0), B(!0);
          }, [B]);
        return (0, a.jsxs)(x.Z, {
          children: [
            (0, a.jsxs)(s.ModalHeader, {
              direction: i.Z.Direction.VERTICAL,
              className: N.header,
              separator: !1,
              children: [
                (0, a.jsx)(s.Text, {
                  className: N.stepHeader,
                  variant: "text-xs/bold",
                  color: "header-secondary",
                  children: h.intl.format(h.t.fHz6eX, { number: 2, total: 2 }),
                }),
                null != f &&
                  (0, a.jsx)(s.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: f,
                  }),
              ],
            }),
            (0, a.jsxs)(s.ModalContent, {
              className: N.consentContent,
              paddingFix: !1,
              children: [g, k, T],
            }),
            (0, a.jsx)(s.ModalFooter, {
              className: N.footer,
              children: (0, a.jsx)(s.Button, {
                className: N.footerButton,
                color: s.Button.Colors.BRAND,
                submitting: p,
                onClick: O,
                children: h.intl.string(h.t.ZN4hkZ),
              }),
            }),
          ],
        });
      }
    },
    859097: function (e, t, n) {
      n.d(t, {
        C: function () {
          return d;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        l = n(600164),
        o = n(424071),
        s = n(388032),
        c = n(337530),
        i = n(387852);
      function d(e) {
        let { onContinue: t, onClose: n, title: d, body: u } = e;
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: l.Z.Direction.VERTICAL,
              className: c.header,
              separator: !1,
              children: [
                (0, a.jsx)("img", {
                  src: i,
                  className: c.illustration,
                  width: "254",
                  height: "127",
                  alt: "",
                }),
                (0, a.jsx)(r.Heading, {
                  className: c.title,
                  variant: "heading-xl/extrabold",
                  children: d,
                }),
                null != n &&
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: c.closeButton,
                    onClick: n,
                  }),
              ],
            }),
            (0, a.jsx)(r.ModalContent, {
              className: c.body,
              paddingFix: !1,
              children: (0, a.jsx)(r.Text, {
                tag: "p",
                variant: "text-md/normal",
                color: "header-secondary",
                children: u,
              }),
            }),
            (0, a.jsx)(r.ModalFooter, {
              className: c.footer,
              children: (0, a.jsxs)(r.Button, {
                className: c.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: t,
                children: [
                  s.intl.string(s.t["7NqTJi"]),
                  (0, a.jsx)(r.WindowLaunchIcon, {
                    color: "currentColor",
                    className: c.launchIcon,
                    size: "xs",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    921869: function (e, t, n) {
      n.d(t, {
        m: function () {
          return h;
        },
      });
      var a = n(200651),
        r = n(192379),
        l = n(442837),
        o = n(481060),
        s = n(600164),
        c = n(553795),
        i = n(424071),
        d = n(239358),
        u = n(388032),
        x = n(337530);
      function h(e) {
        let {
            platformType: t,
            onContinue: n,
            onClose: h,
            img: N,
            headerConnect: m,
            headerReconnect: C,
            body: j,
            learnMoreLink: f,
            valueProps: v,
          } = e,
          p = (0, l.e7)([c.Z], () => {
            let e = c.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
          });
        return (0, a.jsxs)(i.Z, {
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
              className: x.header,
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  className: x.illustration,
                  children: [N, " "],
                }),
                (0, a.jsx)(o.Heading, {
                  className: x.title,
                  variant: "heading-xl/extrabold",
                  children: p && null != C ? C : m,
                }),
                (0, a.jsx)(o.ModalCloseButton, {
                  className: x.closeButton,
                  onClick: h,
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              className: x.body,
              children: [
                (0, a.jsx)(o.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: j,
                }),
                (0, a.jsx)("div", {
                  className: x.valueProps,
                  children: v.map((e, t) => {
                    let { label: n, subLabel: l, icon: o } = e;
                    return (0, a.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, a.jsx)(
                            d.Z,
                            { label: n, subLabel: l, icon: o },
                            n,
                          ),
                          t !== v.length - 1 &&
                            (0, a.jsx)("div", {
                              className: x.valuePropDivider,
                            }),
                        ],
                      },
                      n,
                    );
                  }),
                }),
                null != f
                  ? (0, a.jsx)(o.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: u.intl.format(u.t["/l3n+/"], {
                        helpCenterLink: f,
                      }),
                    })
                  : null,
              ],
            }),
            (0, a.jsx)(o.ModalFooter, {
              className: x.footer,
              children: (0, a.jsx)(o.Button, {
                className: x.footerButton,
                color: o.Button.Colors.BRAND,
                onClick: n,
                children: u.intl.string(u.t["3PatS0"]),
              }),
            }),
          ],
        });
      }
    },
    212598: function (e, t, n) {
      n.d(t, {
        t: function () {
          return f;
        },
      }),
        n(411104);
      var a = n(200651),
        r = n(192379),
        l = n(512722),
        o = n.n(l),
        s = n(478677),
        c = n(481060),
        i = n(570140),
        d = n(275759),
        u = n(202120),
        x = n(600164),
        h = n(710845),
        N = n(424071),
        m = n(388032),
        C = n(337530);
      let j = new h.Z("TwoWayLink");
      function f(e) {
        let {
            platformType: t,
            isWaitingForConnection: n,
            onWaitingForConnection: l,
            expectedCallbackState: h,
            onAuthToken: f,
            onError: v,
            onClose: p,
            img: b,
            title: E,
            body: g,
            redirectDestination: k,
          } = e,
          T = r.useCallback(async () => {
            let e;
            try {
              if (
                ((e = await (0, u.H)(t, { twoWayLinkType: s.g.DESKTOP })),
                null == e)
              )
                throw Error("missing authorizeURL");
            } catch (e) {
              j.error("Error opening provider authorize page", e), v();
              return;
            }
            let { state: n } = (0, d.xp)(e);
            o()(
              null != n,
              "Authorize URL state query parameter must be present",
            ),
              null == l || l(n);
          }, [t, v, l]),
          B = r.useCallback(
            (e) => {
              let { callbackCode: n, callbackState: a } = e;
              if (a !== h) {
                j.warn(
                  "".concat(t, " link: received mismatching callback state!"),
                );
                return;
              }
              f({ callbackCode: n, callbackState: a });
            },
            [t, h, f],
          );
        return (
          r.useEffect(
            () => (
              i.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", B),
              () => {
                i.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", B);
              }
            ),
            [B],
          ),
          (0, a.jsxs)(N.Z, {
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                direction: x.Z.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                  (0, a.jsx)(c.Text, {
                    className: C.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: m.intl.format(m.t.fHz6eX, {
                      number: 1,
                      total: 2,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: C.illustration,
                    children: [b, " "],
                  }),
                  (0, a.jsx)(c.Heading, {
                    className: C.title,
                    variant: "heading-xl/extrabold",
                    children: E,
                  }),
                  null != p &&
                    (0, a.jsx)(c.ModalCloseButton, {
                      className: C.closeButton,
                      onClick: p,
                    }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: C.body,
                paddingFix: !1,
                children: [
                  (0, a.jsx)(c.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: g,
                  }),
                  !n &&
                    null != k &&
                    (0, a.jsx)(c.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: m.intl.format(m.t.XhlYYm, { redirectUrl: k }),
                    }),
                ],
              }),
              (0, a.jsx)(c.ModalFooter, {
                className: C.footer,
                children: (0, a.jsxs)(c.Button, {
                  className: C.footerButton,
                  color: n ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                  onClick: T,
                  children: [
                    n
                      ? m.intl.string(m.t["5911LS"])
                      : m.intl.string(m.t["3PatS0"]),
                    (0, a.jsx)(c.WindowLaunchIcon, {
                      color: "currentColor",
                      className: C.launchIcon,
                      size: "xs",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    376340: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        l = n(600164),
        o = n(424071),
        s = n(388032),
        c = n(337530);
      function i(e) {
        let { onClose: t, img: n, title: i, body: d, content: u } = e;
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: l.Z.Direction.VERTICAL,
              className: c.header,
              separator: !1,
              children: [
                (0, a.jsx)("div", { className: c.illustration, children: n }),
                (0, a.jsx)(r.Heading, {
                  className: c.title,
                  variant: "heading-xl/extrabold",
                  children: i,
                }),
                (0, a.jsx)(r.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: t,
                }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: c.body,
              paddingFix: !1,
              children: [
                (0, a.jsx)(r.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: d,
                }),
                u,
              ],
            }),
            (0, a.jsx)(r.ModalFooter, {
              className: c.footer,
              children: (0, a.jsx)(r.Button, {
                className: c.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: t,
                children: s.intl.string(s.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    239358: function (e, t, n) {
      var a = n(200651);
      n(192379);
      var r = n(481060),
        l = n(337530);
      t.Z = function (e) {
        let { label: t, subLabel: n, icon: o } = e;
        return (0, a.jsxs)("div", {
          className: l.valueProp,
          children: [
            (0, a.jsx)("div", {
              className: l.valuePropIconContainer,
              children: (0, a.jsx)(o, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
              className: l.valuePropText,
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: t,
                }),
                null != n &&
                  (0, a.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-secondary",
                    children: n,
                  }),
              ],
            }),
          ],
        });
      };
    },
    864762: function (e, t, n) {
      n.d(t, {
        k: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(192379),
        r = n(110924),
        l = n(626135),
        o = n(798930),
        s = n(981631);
      function c(e, t) {
        let [n, c] = a.useState(o.O.LANDING),
          i = (0, r.Z)(n),
          [d, u] = a.useState(null),
          [x, h] = a.useState(null),
          [N, m] = a.useState(void 0),
          C = a.useCallback(() => {
            switch (n) {
              case o.O.LANDING:
                c(o.O.PRE_CONNECT);
                break;
              case o.O.DISCORD_CONSENT:
                c(o.O.SUCCESS);
                break;
              case o.O.ERROR:
                c(o.O.PRE_CONNECT);
            }
          }, [n]),
          j = a.useCallback((e) => {
            u(null), m(e), c(o.O.ERROR);
          }, []),
          f = a.useCallback((e) => {
            u(e), c(o.O.PRE_CONNECT_WAITING);
          }, []),
          v = a.useCallback((e) => {
            u(null), h(e), c(o.O.DISCORD_CONSENT);
          }, []);
        return (
          a.useEffect(() => {
            if (n !== i)
              l.default.track(s.rMx.ACCOUNT_LINK_STEP, {
                location_stack: e,
                previous_step: i,
                current_step: n,
                platform_type: t,
              });
          }, [n, i, e, t]),
          {
            slide: n,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: f,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: N,
          }
        );
      }
    },
    478677: function (e, t, n) {
      var a, r;
      n.d(t, {
        g: function () {
          return a;
        },
      }),
        n(47120),
        ((r = a || (a = {})).MOBILE = "mobile"),
        (r.DESKTOP = "desktop"),
        (r.WEB = "web"),
        (r.DEVICE_CODE = "device_code");
    },
  },
]);
//# sourceMappingURL=4404bdab829c16342518.js.map
