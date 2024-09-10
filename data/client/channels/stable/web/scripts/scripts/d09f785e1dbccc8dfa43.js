"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74112"],
  {
    387852: function (e) {
      e.exports = "/assets/b05e68141e14f909f9ff.png";
    },
    798930: function (e, a, t) {
      var n, r;
      t.d(a, {
        O: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).LANDING = "landing"),
        (r.PRE_CONNECT = "pre-connect"),
        (r.PRE_CONNECT_WAITING = "pre-connect-waiting"),
        (r.DISCORD_CONSENT = "discord-consent"),
        (r.SUCCESS = "success"),
        (r.ERROR = "error");
    },
    585183: function (e, a, t) {
      t.d(a, {
        h: function () {
          return m;
        },
      }),
        t(47120);
      var n = t(735250),
        r = t(470079),
        s = t(512722),
        o = t.n(s),
        l = t(481060),
        c = t(457330),
        i = t(600164),
        d = t(710845),
        u = t(69580),
        x = t(689938),
        N = t(879137);
      let h = new d.Z("TwoWayLinkDiscordConsentWeb");
      function m(e) {
        let {
            platformType: a,
            clientId: t,
            scopes: s,
            authToken: d,
            onContinue: m,
            onError: C,
            onClose: j,
            redirectUri: E,
          } = e,
          [v, f] = r.useState(!1),
          p = r.useCallback(
            async (e) => {
              let t,
                n,
                { location: r } = e,
                { callbackCode: s, callbackState: o } = d;
              try {
                t = await c.Z.completeTwoWayLink(a, r, s, o);
              } catch (e) {
                var l;
                h.error("".concat(a, " link error:"), e),
                  (n = null === (l = e.body) || void 0 === l ? void 0 : l.code);
              }
              null != t ? m() : C(n);
            },
            [a, d, m, C],
          ),
          {
            header: T,
            body: O,
            appDetails: b,
            sendAuthorize: g,
          } = (0, u.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: s,
            responseType: "code",
            callback: p,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: E,
          }),
          R = r.useCallback(() => {
            o()(null != g, "sendAuthorize not available"), f(!0), g(!0);
          }, [g]);
        return (0, n.jsxs)("div", {
          className: N.container,
          children: [
            null != j &&
              (0, n.jsx)(l.ModalCloseButton, {
                className: N.closeButton,
                onClick: j,
              }),
            (0, n.jsxs)(l.Scroller, {
              children: [
                (0, n.jsx)(l.ModalHeader, {
                  direction: i.Z.Direction.VERTICAL,
                  className: N.header,
                  separator: !1,
                  children: (0, n.jsx)(l.Text, {
                    className: N.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: x.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                      number: 2,
                      total: 2,
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: N.discordConsentBody,
                  children: [T, O, b],
                }),
                (0, n.jsx)(l.ModalFooter, {
                  className: N.footer,
                  children: (0, n.jsx)(l.Button, {
                    className: N.footerButton,
                    color: l.Button.Colors.BRAND,
                    submitting: v,
                    onClick: R,
                    children: x.Z.Messages.AUTHORIZE_AND_CONTINUE,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    859097: function (e, a, t) {
      t.d(a, {
        C: function () {
          return i;
        },
      });
      var n = t(735250);
      t(470079);
      var r = t(481060),
        s = t(600164),
        o = t(689938),
        l = t(879137),
        c = t(387852);
      function i(e) {
        let { onContinue: a, onClose: t, title: i, body: d } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(r.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
              className: l.header,
              separator: !1,
              children: [
                (0, n.jsx)("img", {
                  src: c,
                  className: l.illustration,
                  width: "254",
                  height: "127",
                  alt: "",
                }),
                (0, n.jsx)(r.Heading, {
                  className: l.title,
                  variant: "heading-xl/extrabold",
                  children: i,
                }),
                null != t &&
                  (0, n.jsx)(r.ModalCloseButton, {
                    className: l.closeButton,
                    onClick: t,
                  }),
              ],
            }),
            (0, n.jsx)(r.ModalContent, {
              className: l.body,
              paddingFix: !1,
              children: (0, n.jsx)(r.Text, {
                tag: "p",
                variant: "text-md/normal",
                color: "header-secondary",
                children: d,
              }),
            }),
            (0, n.jsx)(r.ModalFooter, {
              className: l.footer,
              children: (0, n.jsxs)(r.Button, {
                className: l.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: a,
                children: [
                  o.Z.Messages.TRY_AGAIN,
                  (0, n.jsx)(r.WindowLaunchIcon, {
                    color: "currentColor",
                    className: l.launchIcon,
                    size: "xs",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    921869: function (e, a, t) {
      t.d(a, {
        m: function () {
          return d;
        },
      });
      var n = t(735250);
      t(470079);
      var r = t(442837),
        s = t(481060),
        o = t(600164),
        l = t(553795),
        c = t(689938),
        i = t(879137);
      function d(e) {
        let {
            platformType: a,
            onContinue: t,
            onClose: d,
            img: u,
            headerConnect: x,
            headerReconnect: N,
            body: h,
            learnMoreLink: m,
            valueProps: C,
          } = e,
          j = (0, r.e7)([l.Z], () => {
            let e = l.Z.getAccount(null, a);
            return (null == e ? void 0 : e.twoWayLink) === !1;
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(s.ModalHeader, {
              direction: o.Z.Direction.VERTICAL,
              className: i.header,
              separator: !1,
              children: [
                (0, n.jsxs)("div", {
                  className: i.illustration,
                  children: [u, " "],
                }),
                (0, n.jsx)(s.Heading, {
                  className: i.title,
                  variant: "heading-xl/extrabold",
                  children: j && null != N ? N : x,
                }),
                (0, n.jsx)(s.ModalCloseButton, {
                  className: i.closeButton,
                  onClick: d,
                }),
              ],
            }),
            (0, n.jsxs)(s.ModalContent, {
              className: i.body,
              paddingFix: !1,
              children: [
                (0, n.jsx)(s.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: h,
                }),
                (0, n.jsx)("div", { className: i.valueProps, children: C }),
                null != m
                  ? (0, n.jsx)(s.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        c.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format(
                          { helpCenterLink: m },
                        ),
                    })
                  : null,
              ],
            }),
            (0, n.jsx)(s.ModalFooter, {
              className: i.footer,
              children: (0, n.jsx)(s.Button, {
                className: i.footerButton,
                color: s.Button.Colors.BRAND,
                onClick: t,
                children: c.Z.Messages.CONTINUE,
              }),
            }),
          ],
        });
      }
    },
    212598: function (e, a, t) {
      t.d(a, {
        t: function () {
          return j;
        },
      }),
        t(411104);
      var n = t(735250),
        r = t(470079),
        s = t(512722),
        o = t.n(s),
        l = t(478677),
        c = t(481060),
        i = t(570140),
        d = t(275759),
        u = t(202120),
        x = t(600164),
        N = t(710845),
        h = t(689938),
        m = t(879137);
      let C = new N.Z("TwoWayLink");
      function j(e) {
        let {
            platformType: a,
            isWaitingForConnection: t,
            onWaitingForConnection: s,
            expectedCallbackState: N,
            onAuthToken: j,
            onError: E,
            onClose: v,
            img: f,
            title: p,
            body: T,
            redirectDestination: O,
          } = e,
          b = r.useCallback(async () => {
            let e;
            try {
              if (
                ((e = await (0, u.H)(a, { twoWayLinkType: l.g.DESKTOP })),
                null == e)
              )
                throw Error("missing authorizeURL");
            } catch (e) {
              C.error("Error opening provider authorize page", e), E();
              return;
            }
            let { state: t } = (0, d.xp)(e);
            o()(
              null != t,
              "Authorize URL state query parameter must be present",
            ),
              null == s || s(t);
          }, [a, E, s]),
          g = r.useCallback(
            (e) => {
              let { callbackCode: t, callbackState: n } = e;
              if (n !== N) {
                C.warn(
                  "".concat(a, " link: received mismatching callback state!"),
                );
                return;
              }
              j({ callbackCode: t, callbackState: n });
            },
            [a, N, j],
          );
        return (
          r.useEffect(
            () => (
              i.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", g),
              () => {
                i.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", g);
              }
            ),
            [g],
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                direction: x.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                  (0, n.jsx)(c.Text, {
                    className: m.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: h.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                      number: 1,
                      total: 2,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: m.illustration,
                    children: [f, " "],
                  }),
                  (0, n.jsx)(c.Heading, {
                    className: m.title,
                    variant: "heading-xl/extrabold",
                    children: p,
                  }),
                  null != v &&
                    (0, n.jsx)(c.ModalCloseButton, {
                      className: m.closeButton,
                      onClick: v,
                    }),
                ],
              }),
              (0, n.jsxs)(c.ModalContent, {
                className: m.body,
                paddingFix: !1,
                children: [
                  (0, n.jsx)(c.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: T,
                  }),
                  !t &&
                    (0, n.jsx)(c.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: h.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({
                        redirectUrl: O,
                      }),
                    }),
                ],
              }),
              (0, n.jsx)(c.ModalFooter, {
                className: m.footer,
                children: (0, n.jsxs)(c.Button, {
                  className: m.footerButton,
                  color: t ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                  onClick: b,
                  children: [
                    t ? h.Z.Messages.RETRY : h.Z.Messages.CONTINUE,
                    (0, n.jsx)(c.WindowLaunchIcon, {
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
    376340: function (e, a, t) {
      t.d(a, {
        L: function () {
          return c;
        },
      });
      var n = t(735250);
      t(470079);
      var r = t(481060),
        s = t(600164),
        o = t(689938),
        l = t(879137);
      function c(e) {
        let { onClose: a, img: t, title: c, body: i, content: d } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(r.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
              className: l.header,
              separator: !1,
              children: [
                (0, n.jsx)("div", { className: l.illustration, children: t }),
                (0, n.jsx)(r.Heading, {
                  className: l.title,
                  variant: "heading-xl/extrabold",
                  children: c,
                }),
                (0, n.jsx)(r.ModalCloseButton, {
                  className: l.closeButton,
                  onClick: a,
                }),
              ],
            }),
            (0, n.jsxs)(r.ModalContent, {
              className: l.body,
              paddingFix: !1,
              children: [
                (0, n.jsx)(r.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: i,
                }),
                d,
              ],
            }),
            (0, n.jsx)(r.ModalFooter, {
              className: l.footer,
              children: (0, n.jsx)(r.Button, {
                className: l.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: a,
                children: o.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
    514161: function (e, a, t) {
      t.d(a, {
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
      var n = t(735250);
      t(470079);
      var r = t(481060),
        s = t(879137);
      function o(e) {
        let { text: a, children: t } = e;
        return (0, n.jsxs)("div", {
          className: s.valueProp,
          children: [
            (0, n.jsx)("div", {
              className: s.valuePropIconContainer,
              children: t,
            }),
            (0, n.jsx)(r.Text, { variant: "text-sm/medium", children: a }),
          ],
        });
      }
      function l(e) {
        let { title: a, bulletPoints: t, icon: o } = e;
        return (0, n.jsxs)("div", {
          className: s.bulletedValueProp,
          children: [
            (0, n.jsx)("div", {
              className: s.valuePropIconContainer,
              children: o,
            }),
            (0, n.jsxs)("div", {
              className: s.bulletPointsContainer,
              children: [
                (0, n.jsx)(r.Text, {
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: a,
                }),
                (0, n.jsx)("div", {
                  className: s.bulletPoints,
                  children: t.map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className: s.bulletPoint,
                        children: [
                          (0, n.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: "•",
                          }),
                          (0, n.jsx)(r.Text, {
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
        let { children: a } = e;
        return (0, n.jsx)("div", {
          className: s.valuePropContainer,
          children: a,
        });
      }
    },
    864762: function (e, a, t) {
      t.d(a, {
        k: function () {
          return c;
        },
      }),
        t(47120);
      var n = t(470079),
        r = t(110924),
        s = t(626135),
        o = t(798930),
        l = t(981631);
      function c(e, a) {
        let [t, c] = n.useState(o.O.LANDING),
          i = (0, r.Z)(t),
          [d, u] = n.useState(null),
          [x, N] = n.useState(null),
          [h, m] = n.useState(void 0),
          C = n.useCallback(() => {
            switch (t) {
              case o.O.LANDING:
                c(o.O.PRE_CONNECT);
                break;
              case o.O.DISCORD_CONSENT:
                c(o.O.SUCCESS);
                break;
              case o.O.ERROR:
                c(o.O.PRE_CONNECT);
            }
          }, [t]),
          j = n.useCallback((e) => {
            u(null), m(e), c(o.O.ERROR);
          }, []),
          E = n.useCallback((e) => {
            u(e), c(o.O.PRE_CONNECT_WAITING);
          }, []),
          v = n.useCallback((e) => {
            u(null), N(e), c(o.O.DISCORD_CONSENT);
          }, []);
        return (
          n.useEffect(() => {
            if (t !== i)
              s.default.track(l.rMx.ACCOUNT_LINK_STEP, {
                location_stack: e,
                previous_step: i,
                current_step: t,
                platform_type: a,
              });
          }, [t, i, e, a]),
          {
            slide: t,
            gotoNext: C,
            gotoError: j,
            handleWaitingForConnection: E,
            handleAuthToken: v,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: h,
          }
        );
      }
    },
    478677: function (e, a, t) {
      var n, r;
      t.d(a, {
        g: function () {
          return n;
        },
      }),
        t(47120),
        ((r = n || (n = {})).MOBILE = "mobile"),
        (r.DESKTOP = "desktop"),
        (r.WEB = "web"),
        (r.DEVICE_CODE = "device_code");
    },
  },
]);
//# sourceMappingURL=d09f785e1dbccc8dfa43.js.map
