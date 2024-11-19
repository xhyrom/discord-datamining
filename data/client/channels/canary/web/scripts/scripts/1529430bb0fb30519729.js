"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74112"],
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
      var r = n(879137);
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
        i = n(457330),
        c = n(600164),
        d = n(710845),
        u = n(69580),
        x = n(424071),
        h = n(388032),
        m = n(879137);
      let N = new d.Z("TwoWayLinkDiscordConsentWeb");
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
          T = r.useCallback(
            async (e) => {
              let n,
                a,
                { location: r } = e,
                { callbackCode: l, callbackState: o } = d;
              try {
                n = await i.Z.completeTwoWayLink(t, r, l, o);
              } catch (e) {
                var s;
                N.error("".concat(t, " link error:"), e),
                  (a = null === (s = e.body) || void 0 === s ? void 0 : s.code);
              }
              null != n ? C() : j(a);
            },
            [t, d, C, j],
          ),
          {
            header: E,
            body: k,
            appDetails: g,
            sendAuthorize: B,
          } = (0, u.useOAuth2AuthorizeForm)({
            clientId: n,
            scopes: l,
            responseType: "code",
            callback: T,
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
              direction: c.Z.Direction.VERTICAL,
              className: m.header,
              separator: !1,
              children: [
                (0, a.jsx)(s.Text, {
                  className: m.stepHeader,
                  variant: "text-xs/bold",
                  color: "header-secondary",
                  children: h.intl.format(h.t.fHz6eX, { number: 2, total: 2 }),
                }),
                null != f &&
                  (0, a.jsx)(s.ModalCloseButton, {
                    className: m.closeButton,
                    onClick: f,
                  }),
              ],
            }),
            (0, a.jsxs)(s.ModalContent, {
              paddingFix: !1,
              children: [E, k, g],
            }),
            (0, a.jsx)(s.ModalFooter, {
              className: m.footer,
              children: (0, a.jsx)(s.Button, {
                className: m.footerButton,
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
        i = n(879137),
        c = n(387852);
      function d(e) {
        let { onContinue: t, onClose: n, title: d, body: u } = e;
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: l.Z.Direction.VERTICAL,
              className: i.header,
              separator: !1,
              children: [
                (0, a.jsx)("img", {
                  src: c,
                  className: i.illustration,
                  width: "254",
                  height: "127",
                  alt: "",
                }),
                (0, a.jsx)(r.Heading, {
                  className: i.title,
                  variant: "heading-xl/extrabold",
                  children: d,
                }),
                null != n &&
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: i.closeButton,
                    onClick: n,
                  }),
              ],
            }),
            (0, a.jsx)(r.ModalContent, {
              className: i.body,
              paddingFix: !1,
              children: (0, a.jsx)(r.Text, {
                tag: "p",
                variant: "text-md/normal",
                color: "header-secondary",
                children: u,
              }),
            }),
            (0, a.jsx)(r.ModalFooter, {
              className: i.footer,
              children: (0, a.jsxs)(r.Button, {
                className: i.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: t,
                children: [
                  s.intl.string(s.t["7NqTJi"]),
                  (0, a.jsx)(r.WindowLaunchIcon, {
                    color: "currentColor",
                    className: i.launchIcon,
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
          return u;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        o = n(600164),
        s = n(553795),
        i = n(424071),
        c = n(388032),
        d = n(879137);
      function u(e) {
        let {
            platformType: t,
            onContinue: n,
            onClose: u,
            img: x,
            headerConnect: h,
            headerReconnect: m,
            body: N,
            learnMoreLink: C,
            valueProps: j,
          } = e,
          f = (0, r.e7)([s.Z], () => {
            let e = s.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
          });
        return (0, a.jsxs)(i.Z, {
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: d.header,
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  className: d.illustration,
                  children: [x, " "],
                }),
                (0, a.jsx)(l.Heading, {
                  className: d.title,
                  variant: "heading-xl/extrabold",
                  children: f && null != m ? m : h,
                }),
                (0, a.jsx)(l.ModalCloseButton, {
                  className: d.closeButton,
                  onClick: u,
                }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: d.body,
              paddingFix: !1,
              children: [
                (0, a.jsx)(l.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: N,
                }),
                (0, a.jsx)("div", { className: d.valueProps, children: j }),
                null != C
                  ? (0, a.jsx)(l.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: c.intl.format(c.t["/l3n+/"], {
                        helpCenterLink: C,
                      }),
                    })
                  : null,
              ],
            }),
            (0, a.jsx)(l.ModalFooter, {
              className: d.footer,
              children: (0, a.jsx)(l.Button, {
                className: d.footerButton,
                color: l.Button.Colors.BRAND,
                onClick: n,
                children: c.intl.string(c.t["3PatS0"]),
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
        i = n(481060),
        c = n(570140),
        d = n(275759),
        u = n(202120),
        x = n(600164),
        h = n(710845),
        m = n(424071),
        N = n(388032),
        C = n(879137);
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
            title: T,
            body: E,
            redirectDestination: k,
          } = e,
          g = r.useCallback(async () => {
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
              c.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", B),
              () => {
                c.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", B);
              }
            ),
            [B],
          ),
          (0, a.jsxs)(m.Z, {
            children: [
              (0, a.jsxs)(i.ModalHeader, {
                direction: x.Z.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                  (0, a.jsx)(i.Text, {
                    className: C.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: N.intl.format(N.t.fHz6eX, {
                      number: 1,
                      total: 2,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: C.illustration,
                    children: [b, " "],
                  }),
                  (0, a.jsx)(i.Heading, {
                    className: C.title,
                    variant: "heading-xl/extrabold",
                    children: T,
                  }),
                  null != p &&
                    (0, a.jsx)(i.ModalCloseButton, {
                      className: C.closeButton,
                      onClick: p,
                    }),
                ],
              }),
              (0, a.jsxs)(i.ModalContent, {
                className: C.body,
                paddingFix: !1,
                children: [
                  (0, a.jsx)(i.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: E,
                  }),
                  !n &&
                    (0, a.jsx)(i.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: N.intl.format(N.t.XhlYYm, { redirectUrl: k }),
                    }),
                ],
              }),
              (0, a.jsx)(i.ModalFooter, {
                className: C.footer,
                children: (0, a.jsxs)(i.Button, {
                  className: C.footerButton,
                  color: n ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                  onClick: g,
                  children: [
                    n
                      ? N.intl.string(N.t["5911LS"])
                      : N.intl.string(N.t["3PatS0"]),
                    (0, a.jsx)(i.WindowLaunchIcon, {
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
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        l = n(600164),
        o = n(424071),
        s = n(388032),
        i = n(879137);
      function c(e) {
        let { onClose: t, img: n, title: c, body: d, content: u } = e;
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: l.Z.Direction.VERTICAL,
              className: i.header,
              separator: !1,
              children: [
                (0, a.jsx)("div", { className: i.illustration, children: n }),
                (0, a.jsx)(r.Heading, {
                  className: i.title,
                  variant: "heading-xl/extrabold",
                  children: c,
                }),
                (0, a.jsx)(r.ModalCloseButton, {
                  className: i.closeButton,
                  onClick: t,
                }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: i.body,
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
              className: i.footer,
              children: (0, a.jsx)(r.Button, {
                className: i.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: t,
                children: s.intl.string(s.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    514161: function (e, t, n) {
      n.d(t, {
        Ux: function () {
          return o;
        },
        pT: function () {
          return s;
        },
        yC: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        l = n(879137);
      function o(e) {
        let { text: t, children: n } = e;
        return (0, a.jsxs)("div", {
          className: l.valueProp,
          children: [
            (0, a.jsx)("div", {
              className: l.valuePropIconContainer,
              children: n,
            }),
            (0, a.jsx)(r.Text, { variant: "text-sm/medium", children: t }),
          ],
        });
      }
      function s(e) {
        let { title: t, bulletPoints: n, icon: o } = e;
        return (0, a.jsxs)("div", {
          className: l.bulletedValueProp,
          children: [
            (0, a.jsx)("div", {
              className: l.valuePropIconContainer,
              children: o,
            }),
            (0, a.jsxs)("div", {
              className: l.bulletPointsContainer,
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: t,
                }),
                (0, a.jsx)("div", {
                  className: l.bulletPoints,
                  children: n.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: l.bulletPoint,
                        children: [
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: "•",
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: l.bulletPointText,
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function i(e) {
        let { children: t } = e;
        return (0, a.jsx)("div", {
          className: l.valuePropContainer,
          children: t,
        });
      }
    },
    864762: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      }),
        n(47120);
      var a = n(192379),
        r = n(110924),
        l = n(626135),
        o = n(798930),
        s = n(981631);
      function i(e, t) {
        let [n, i] = a.useState(o.O.LANDING),
          c = (0, r.Z)(n),
          [d, u] = a.useState(null),
          [x, h] = a.useState(null),
          [m, N] = a.useState(void 0),
          C = a.useCallback(() => {
            switch (n) {
              case o.O.LANDING:
                i(o.O.PRE_CONNECT);
                break;
              case o.O.DISCORD_CONSENT:
                i(o.O.SUCCESS);
                break;
              case o.O.ERROR:
                i(o.O.PRE_CONNECT);
            }
          }, [n]),
          j = a.useCallback((e) => {
            u(null), N(e), i(o.O.ERROR);
          }, []),
          f = a.useCallback((e) => {
            u(e), i(o.O.PRE_CONNECT_WAITING);
          }, []),
          v = a.useCallback((e) => {
            u(null), h(e), i(o.O.DISCORD_CONSENT);
          }, []);
        return (
          a.useEffect(() => {
            if (n !== c)
              l.default.track(s.rMx.ACCOUNT_LINK_STEP, {
                location_stack: e,
                previous_step: c,
                current_step: n,
                platform_type: t,
              });
          }, [n, c, e, t]),
          {
            slide: n,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: f,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: m,
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
//# sourceMappingURL=1529430bb0fb30519729.js.map
