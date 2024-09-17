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
          return s;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(879137);
      function s(e) {
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
          return m;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        s = n(512722),
        o = n.n(s),
        l = n(481060),
        c = n(457330),
        i = n(600164),
        d = n(710845),
        u = n(69580),
        x = n(424071),
        N = n(689938),
        h = n(879137);
      let C = new d.Z("TwoWayLinkDiscordConsentWeb");
      function m(e) {
        let {
            platformType: t,
            clientId: n,
            scopes: s,
            authToken: d,
            onContinue: m,
            onError: j,
            onClose: E,
            redirectUri: f,
          } = e,
          [v, p] = r.useState(!1),
          T = r.useCallback(
            async (e) => {
              let n,
                a,
                { location: r } = e,
                { callbackCode: s, callbackState: o } = d;
              try {
                n = await c.Z.completeTwoWayLink(t, r, s, o);
              } catch (e) {
                var l;
                C.error("".concat(t, " link error:"), e),
                  (a = null === (l = e.body) || void 0 === l ? void 0 : l.code);
              }
              null != n ? m() : j(a);
            },
            [t, d, m, j],
          ),
          {
            header: O,
            body: b,
            appDetails: R,
            sendAuthorize: I,
          } = (0, u.useOAuth2AuthorizeForm)({
            clientId: n,
            scopes: s,
            responseType: "code",
            callback: T,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: f,
          }),
          g = r.useCallback(() => {
            o()(null != I, "sendAuthorize not available"), p(!0), I(!0);
          }, [I]);
        return (0, a.jsxs)(x.Z, {
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              direction: i.Z.Direction.VERTICAL,
              className: h.header,
              separator: !1,
              children: [
                (0, a.jsx)(l.Text, {
                  className: h.stepHeader,
                  variant: "text-xs/bold",
                  color: "header-secondary",
                  children: N.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                    number: 2,
                    total: 2,
                  }),
                }),
                null != E &&
                  (0, a.jsx)(l.ModalCloseButton, {
                    className: h.closeButton,
                    onClick: E,
                  }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              paddingFix: !1,
              children: [O, b, R],
            }),
            (0, a.jsx)(l.ModalFooter, {
              className: h.footer,
              children: (0, a.jsx)(l.Button, {
                className: h.footerButton,
                color: l.Button.Colors.BRAND,
                submitting: v,
                onClick: g,
                children: N.Z.Messages.AUTHORIZE_AND_CONTINUE,
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
      var a = n(735250);
      n(470079);
      var r = n(481060),
        s = n(600164),
        o = n(424071),
        l = n(689938),
        c = n(879137),
        i = n(387852);
      function d(e) {
        let { onContinue: t, onClose: n, title: d, body: u } = e;
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
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
                  l.Z.Messages.TRY_AGAIN,
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
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(442837),
        s = n(481060),
        o = n(600164),
        l = n(553795),
        c = n(424071),
        i = n(689938),
        d = n(879137);
      function u(e) {
        let {
            platformType: t,
            onContinue: n,
            onClose: u,
            img: x,
            headerConnect: N,
            headerReconnect: h,
            body: C,
            learnMoreLink: m,
            valueProps: j,
          } = e,
          E = (0, r.e7)([l.Z], () => {
            let e = l.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
          });
        return (0, a.jsxs)(c.Z, {
          children: [
            (0, a.jsxs)(s.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: d.header,
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  className: d.illustration,
                  children: [x, " "],
                }),
                (0, a.jsx)(s.Heading, {
                  className: d.title,
                  variant: "heading-xl/extrabold",
                  children: E && null != h ? h : N,
                }),
                (0, a.jsx)(s.ModalCloseButton, {
                  className: d.closeButton,
                  onClick: u,
                }),
              ],
            }),
            (0, a.jsxs)(s.ModalContent, {
              className: d.body,
              paddingFix: !1,
              children: [
                (0, a.jsx)(s.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: C,
                }),
                (0, a.jsx)("div", { className: d.valueProps, children: j }),
                null != m
                  ? (0, a.jsx)(s.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        i.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format(
                          { helpCenterLink: m },
                        ),
                    })
                  : null,
              ],
            }),
            (0, a.jsx)(s.ModalFooter, {
              className: d.footer,
              children: (0, a.jsx)(s.Button, {
                className: d.footerButton,
                color: s.Button.Colors.BRAND,
                onClick: n,
                children: i.Z.Messages.CONTINUE,
              }),
            }),
          ],
        });
      }
    },
    212598: function (e, t, n) {
      n.d(t, {
        t: function () {
          return E;
        },
      }),
        n(411104);
      var a = n(735250),
        r = n(470079),
        s = n(512722),
        o = n.n(s),
        l = n(478677),
        c = n(481060),
        i = n(570140),
        d = n(275759),
        u = n(202120),
        x = n(600164),
        N = n(710845),
        h = n(424071),
        C = n(689938),
        m = n(879137);
      let j = new N.Z("TwoWayLink");
      function E(e) {
        let {
            platformType: t,
            isWaitingForConnection: n,
            onWaitingForConnection: s,
            expectedCallbackState: N,
            onAuthToken: E,
            onError: f,
            onClose: v,
            img: p,
            title: T,
            body: O,
            redirectDestination: b,
          } = e,
          R = r.useCallback(async () => {
            let e;
            try {
              if (
                ((e = await (0, u.H)(t, { twoWayLinkType: l.g.DESKTOP })),
                null == e)
              )
                throw Error("missing authorizeURL");
            } catch (e) {
              j.error("Error opening provider authorize page", e), f();
              return;
            }
            let { state: n } = (0, d.xp)(e);
            o()(
              null != n,
              "Authorize URL state query parameter must be present",
            ),
              null == s || s(n);
          }, [t, f, s]),
          I = r.useCallback(
            (e) => {
              let { callbackCode: n, callbackState: a } = e;
              if (a !== N) {
                j.warn(
                  "".concat(t, " link: received mismatching callback state!"),
                );
                return;
              }
              E({ callbackCode: n, callbackState: a });
            },
            [t, N, E],
          );
        return (
          r.useEffect(
            () => (
              i.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", I),
              () => {
                i.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", I);
              }
            ),
            [I],
          ),
          (0, a.jsxs)(h.Z, {
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                direction: x.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                  (0, a.jsx)(c.Text, {
                    className: m.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: C.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                      number: 1,
                      total: 2,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: m.illustration,
                    children: [p, " "],
                  }),
                  (0, a.jsx)(c.Heading, {
                    className: m.title,
                    variant: "heading-xl/extrabold",
                    children: T,
                  }),
                  null != v &&
                    (0, a.jsx)(c.ModalCloseButton, {
                      className: m.closeButton,
                      onClick: v,
                    }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: m.body,
                paddingFix: !1,
                children: [
                  (0, a.jsx)(c.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: O,
                  }),
                  !n &&
                    (0, a.jsx)(c.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: C.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({
                        redirectUrl: b,
                      }),
                    }),
                ],
              }),
              (0, a.jsx)(c.ModalFooter, {
                className: m.footer,
                children: (0, a.jsxs)(c.Button, {
                  className: m.footerButton,
                  color: n ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                  onClick: R,
                  children: [
                    n ? C.Z.Messages.RETRY : C.Z.Messages.CONTINUE,
                    (0, a.jsx)(c.WindowLaunchIcon, {
                      color: "currentColor",
                      className: m.launchIcon,
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
      var a = n(735250);
      n(470079);
      var r = n(481060),
        s = n(600164),
        o = n(424071),
        l = n(689938),
        c = n(879137);
      function i(e) {
        let { onClose: t, img: n, title: i, body: d, content: u } = e;
        return (0, a.jsxs)(o.Z, {
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
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
                children: l.Z.Messages.DONE,
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
          return l;
        },
        yC: function () {
          return c;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        s = n(879137);
      function o(e) {
        let { text: t, children: n } = e;
        return (0, a.jsxs)("div", {
          className: s.valueProp,
          children: [
            (0, a.jsx)("div", {
              className: s.valuePropIconContainer,
              children: n,
            }),
            (0, a.jsx)(r.Text, { variant: "text-sm/medium", children: t }),
          ],
        });
      }
      function l(e) {
        let { title: t, bulletPoints: n, icon: o } = e;
        return (0, a.jsxs)("div", {
          className: s.bulletedValueProp,
          children: [
            (0, a.jsx)("div", {
              className: s.valuePropIconContainer,
              children: o,
            }),
            (0, a.jsxs)("div", {
              className: s.bulletPointsContainer,
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: t,
                }),
                (0, a.jsx)("div", {
                  className: s.bulletPoints,
                  children: n.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: s.bulletPoint,
                        children: [
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: "•",
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: s.bulletPointText,
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
      function c(e) {
        let { children: t } = e;
        return (0, a.jsx)("div", {
          className: s.valuePropContainer,
          children: t,
        });
      }
    },
    864762: function (e, t, n) {
      n.d(t, {
        k: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(470079),
        r = n(110924),
        s = n(626135),
        o = n(798930),
        l = n(981631);
      function c(e, t) {
        let [n, c] = a.useState(o.O.LANDING),
          i = (0, r.Z)(n),
          [d, u] = a.useState(null),
          [x, N] = a.useState(null),
          [h, C] = a.useState(void 0),
          m = a.useCallback(() => {
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
            u(null), C(e), c(o.O.ERROR);
          }, []),
          E = a.useCallback((e) => {
            u(e), c(o.O.PRE_CONNECT_WAITING);
          }, []),
          f = a.useCallback((e) => {
            u(null), N(e), c(o.O.DISCORD_CONSENT);
          }, []);
        return (
          a.useEffect(() => {
            if (n !== i)
              s.default.track(l.rMx.ACCOUNT_LINK_STEP, {
                location_stack: e,
                previous_step: i,
                current_step: n,
                platform_type: t,
              });
          }, [n, i, e, t]),
          {
            slide: n,
            gotoNext: m,
            gotoError: j,
            handleWaitingForConnection: E,
            handleAuthToken: f,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: h,
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
//# sourceMappingURL=2413d9c316187ce060ab.js.map
