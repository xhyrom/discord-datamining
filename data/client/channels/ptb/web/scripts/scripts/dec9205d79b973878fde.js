"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49277"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    387852: function (e) {
      e.exports = "/assets/b05e68141e14f909f9ff.png";
    },
    412998: function (e) {
      e.exports = "/assets/e4cf5e28d5d8a43cd951.png";
    },
    575703: function (e) {
      e.exports = "/assets/b9995525a52dc58aecf5.svg";
    },
    497350: function (e, t, n) {
      n.d(t, {
        B: function () {
          return o;
        },
      });
      var a = n(159277),
        r = n(981631);
      function o(e) {
        let t = null;
        return (
          e === a.t.PLAYSTATION_APPLICATION_ID
            ? (t = r.ABu.PLAYSTATION)
            : e === a.t.PLAYSTATION_STAGING_APPLICATION_ID &&
              (t = r.ABu.PLAYSTATION_STAGING),
          t
        );
      }
    },
    643366: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return c;
        },
      });
      var a = n(192379),
        r = n(110924),
        o = n(626135),
        i = n(497350),
        l = n(981631);
      function c(e) {
        let t = (0, r.Z)(e);
        a.useEffect(() => {
          if (e === t) return;
          let n = null;
          "user-code-input" !== e.type &&
            "handoff" !== e.type &&
            (n = (0, i.B)(e.userCodeData.clientId)),
            o.default.track(l.rMx.DEVICE_LINK_STEP, {
              previous_step: null == t ? void 0 : t.type,
              current_step: e.type,
              platform_type: n,
            });
        }, [t, e]);
      }
    },
    944844: function (e, t, n) {
      n.d(t, {
        t: function () {
          return h;
        },
      }),
        n(411104);
      var a = n(192379),
        r = n(512722),
        o = n.n(r),
        i = n(478677),
        l = n(457330),
        c = n(275759),
        s = n(489863),
        d = n(497350);
      async function u(e, t, n) {
        var a, r, s, u;
        let h = (0, d.B)(e);
        if (null == h)
          throw (
            (await f(n, 1, "authorize"),
            Error("Unsupported client_id for two way link"))
          );
        let p = null;
        try {
          let { body: e } = await l.Z.authorize(h, {
            twoWayLinkType: i.g.DEVICE_CODE,
            userCode: n,
          });
          p = e.url;
        } catch (e) {
          throw (
            (await f(
              n,
              null !==
                (r =
                  null == e
                    ? void 0
                    : null === (a = e.body) || void 0 === a
                      ? void 0
                      : a.code) && void 0 !== r
                ? r
                : 0,
              "authorize",
            ),
            Error("error during two way authorize"))
          );
        }
        let x = null;
        try {
          o()(null != p, "No URL in authorize response");
          let { state: e } = (0, c.xp)(p);
          o()(null != e, "Authorize URL state query parameter must be present"),
            (x = e);
        } catch (e) {
          throw (
            (await f(n, 2, "authorize"), Error("error parsing callback params"))
          );
        }
        try {
          await l.Z.callback(h, { code: t, state: x });
        } catch (e) {
          throw (
            (await f(
              n,
              null !==
                (u =
                  null == e
                    ? void 0
                    : null === (s = e.body) || void 0 === s
                      ? void 0
                      : s.code) && void 0 !== u
                ? u
                : 0,
              "callback",
            ),
            Error("error during two way callback"))
          );
        }
      }
      async function f(e, t, n) {
        try {
          await (0, s.i2)(e, t, n);
        } catch (e) {}
      }
      function h(e, t, n) {
        return a.useCallback(
          async (a, r) => {
            if (!r) {
              try {
                await (0, s.tR)(a.userCode, "denied");
              } catch (e) {}
              e();
              return;
            }
            if (null == a.twoWayLinkCode)
              try {
                await (0, s.tR)(a.userCode, "granted"), n(a);
              } catch (e) {
                t(a);
              }
            else
              try {
                await u(a.clientId, a.twoWayLinkCode, a.userCode), n(a);
              } catch (e) {
                t(a);
              }
          },
          [e, t, n],
        );
      }
    },
    511540: function (e, t, n) {
      n.d(t, {
        c: function () {
          return l;
        },
      }),
        n(47120);
      var a = n(192379),
        r = n(489863),
        o = n(828878),
        i = n(388032);
      function l(e, t, n) {
        let [l, c] = a.useState(!1),
          [s, d] = a.useState(null),
          u = a.useCallback(async () => {
            try {
              c(!0);
              let n = await (0, r.tV)(e);
              c(!1),
                t({
                  userCode: e,
                  clientId: n.body.client_id,
                  scopes: n.body.scopes,
                  twoWayLinkCode: n.body.two_way_link_code,
                });
            } catch (e) {
              var a;
              d(
                429 === (a = null == e ? void 0 : e.status)
                  ? i.intl.string(i.t.BPmZvr)
                  : 404 === a || 400 === a
                    ? i.intl.string(i.t.aWa1Pz)
                    : i.intl.string(i.t.JNQRU1),
              ),
                c(!1),
                (null == e ? void 0 : e.status) === 401 && n();
            }
          }, [e, t, n]);
        return (
          a.useEffect(() => {
            e.length === o.A.USER_CODE_LENGTH ? u() : d(null);
          }, [e, u]),
          { manualSubmit: u, error: s, submitting: l }
        );
      }
    },
    197528: function (e, t, n) {
      n.r(t), n(47120);
      var a = n(200651),
        r = n(192379),
        o = n(593473),
        i = n(702493),
        l = n(77987),
        c = n(133853),
        s = n(703656),
        d = n(643366),
        u = n(94628),
        f = n(659154),
        h = n(581690),
        p = n(902928),
        x = n(521937),
        C = n(981631),
        v = n(881579);
      let m = n(575703);
      t.default = (0, l.e)(function () {
        let e;
        let [t, n] = r.useState(() => {
          if (window.location.pathname.endsWith(C.Z5c.ACTIVATE_HANDOFF)) {
            let { user_code: e } = o.parse(window.location.search);
            return { type: "handoff", code: e };
          }
          return { type: "user-code-input", usePrefilledCode: !0 };
        });
        (0, i.Z)(), (0, d.Y)(t);
        let l = r.useCallback(() => {
            n({ type: "user-code-input" });
          }, [n]),
          g = r.useCallback(
            (e) => {
              n({ type: "authorization", userCodeData: e });
            },
            [n],
          ),
          _ = r.useCallback(
            (e) => {
              n({ type: "success", userCodeData: e });
            },
            [n],
          ),
          b = r.useCallback(
            (e) => {
              n({ type: "error", userCodeData: e });
            },
            [n],
          ),
          N = !0;
        switch (t.type) {
          case "handoff":
            (e = (0, a.jsx)(h.c, { code: t.code })), (N = !1);
            break;
          case "user-code-input":
            e = (0, a.jsx)(x.v, {
              usePrefilledCode: t.usePrefilledCode || !1,
              onUserCodeAccepted: g,
            });
            break;
          case "authorization":
            (e = (0, a.jsx)(u.B, {
              data: t.userCodeData,
              onDenied: l,
              onError: b,
              onSuccess: _,
            })),
              (N = !1);
            break;
          case "success":
            e = (0, a.jsx)(p.u, {
              onComplete: () => (0, s.uL)(C.Z5c.ME),
              data: t.userCodeData,
            });
            break;
          case "error":
            e = (0, a.jsx)(f.c, { onTryAgain: l });
            break;
          default:
            e = null;
        }
        return (0, a.jsxs)("div", {
          className: v.activatePage,
          children: [
            (0, a.jsx)("img", { className: v.artwork, src: m, alt: "" }),
            (0, a.jsx)(c.Z, { show: !0, className: v.logo }),
            N ? (0, a.jsx)("div", { className: v.content, children: e }) : e,
          ],
        });
      });
    },
    94628: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
      });
      var a = n(200651),
        r = n(192379),
        o = n(481060),
        i = n(69580),
        l = n(787025),
        c = n(944844);
      function s(e) {
        let { data: t, onDenied: n, onError: s, onSuccess: d } = e,
          u = (0, c.t)(n, s, d),
          f = r.useCallback((e) => u(t, e), [t, u]);
        return (0, a.jsx)(l.G, {
          removeChildWrapper: !0,
          children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: o.ModalTransitionState.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f,
          }),
        });
      }
    },
    659154: function (e, t, n) {
      n.d(t, {
        c: function () {
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        o = n(388032),
        i = n(577125),
        l = n(387852);
      let c = (e) => {
        let { onTryAgain: t } = e;
        return (0, a.jsxs)("div", {
          className: i.content,
          children: [
            (0, a.jsx)("img", { src: l, width: "254", height: "127", alt: "" }),
            (0, a.jsxs)("div", {
              className: i.innerContent,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-xl/extrabold",
                  children: o.intl.string(o.t["3dgwPD"]),
                }),
                (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: o.intl.string(o.t["/GAO1N"]),
                }),
              ],
            }),
            (0, a.jsx)(r.Button, {
              className: i.footerButton,
              color: r.Button.Colors.BRAND,
              onClick: t,
              children: o.intl.string(o.t["7NqTJi"]),
            }),
          ],
        });
      };
    },
    581690: function (e, t, n) {
      n.d(t, {
        c: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        o = n(481060),
        i = n(198993),
        l = n(885006),
        c = n(981631),
        s = n(388032),
        d = n(459881);
      let u = n(412998),
        f = n(515695),
        h = ""
          .concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1])
          .concat(c.Z5c.ACTIVATE),
        p = "".concat(location.protocol, "//").concat(h);
      function x(e) {
        let { text: t = "" } = e,
          [n, l] = r.useState(!1);
        return (
          r.useEffect(() => {
            let e = new Image();
            (e.src = f), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
          }, [f]),
          (0, a.jsx)(a.Fragment, {
            children:
              "" !== t && n
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(i.ZP, { size: 288, text: t }),
                      (0, a.jsx)("div", {
                        className: d.qrcodeOverlay,
                        children: (0, a.jsx)("img", { src: f, alt: "" }),
                      }),
                    ],
                  })
                : (0, a.jsx)("div", {
                    className: d.qrcodeSpinner,
                    children: (0, a.jsx)(o.Spinner, {
                      type: o.Spinner.Type.WANDERING_CUBES,
                    }),
                  }),
          })
        );
      }
      let C = (e) => {
        var t, n;
        let { code: r } = e,
          { width: i, height: c } = (0, l.Z)();
        if (null == r || 0 === r.length) return null;
        return (0, a.jsxs)("div", {
          className: d.panel,
          style: { zoom: Math.min(i / 1460, c / 1080, 1) },
          children: [
            (0, a.jsx)("div", {
              className: d.panelHeader,
              children: (0, a.jsx)("div", { className: d.logo }),
            }),
            (0, a.jsxs)("div", {
              className: d.panelContent,
              children: [
                (0, a.jsxs)("div", {
                  className: d.qrcodeContent,
                  children: [
                    (0, a.jsx)("div", {
                      className: d.qrcodeCard,
                      children: (0, a.jsx)(x, {
                        text:
                          ((n = r),
                          ""
                            .concat(p, "?user_code=")
                            .concat(encodeURIComponent(n))),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: d.qrcodeText,
                      children: [
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-xxl/semibold",
                          color: "header-primary",
                          className: d.qrcodeTextHeading,
                          children: s.intl.string(s.t.llDCiY),
                        }),
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-xxl/normal",
                          color: "header-secondary",
                          children: s.intl.string(s.t.JfHzXF),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: d.dividerContent,
                  children: [
                    (0, a.jsx)("div", { className: d.divider }),
                    (0, a.jsx)(o.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      className: d.dividerText,
                      children: s.intl.string(s.t.arEHn5),
                    }),
                    (0, a.jsx)("div", { className: d.divider }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: d.fallbackContent,
                  children: [
                    (0, a.jsxs)("div", {
                      className: d.fallbackContentTextGroup,
                      children: [
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-xxl/semibold",
                          color: "header-primary",
                          className: d.fallbackContentHeading,
                          children: s.intl.string(s.t.Eu8rJy),
                        }),
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-xxl/normal",
                          color: "header-secondary",
                          children: s.intl.string(s.t.BkEMJy),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: d.fallbackContentAction,
                      children: [
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-xxl/semibold",
                          color: "header-primary",
                          className: d.fallbackContentHeading,
                          children: h,
                        }),
                        (0, a.jsxs)("div", {
                          className: d.fallbackContentTextGroup,
                          children: [
                            (0, a.jsx)(o.Heading, {
                              variant: "heading-xxl/normal",
                              color: "header-secondary",
                              children: s.intl.string(s.t.RyDxBQ),
                            }),
                            (0, a.jsx)(o.Heading, {
                              variant: "heading-xxl/bold",
                              color: "header-primary",
                              className: d.fallbackContentCode,
                              children:
                                null === (t = r.match(/.{1,4}/g)) ||
                                void 0 === t
                                  ? void 0
                                  : t.join(" "),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("img", { className: d.wumpus, src: u, alt: "" }),
              ],
            }),
          ],
        });
      };
    },
    902928: function (e, t, n) {
      n.d(t, {
        u: function () {
          return f;
        },
      });
      var a = n(200651),
        r = n(192379),
        o = n(159277),
        i = n(243814),
        l = n(481060),
        c = n(388032),
        s = n(577125),
        d = n(942605),
        u = n(534345);
      let f = (e) => {
        let { onComplete: t, data: n } = e,
          f = (0, r.useId)(),
          h = null,
          p = null;
        return (
          n.clientId === o.t.PLAYSTATION_APPLICATION_ID ||
          n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID
            ? (h = d.Z)
            : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (h = u.Z),
          null != n.twoWayLinkCode
            ? (p = c.intl.string(c.t.QhATl5))
            : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) &&
              (p = c.intl.string(c.t.vBPvKy)),
          (0, a.jsxs)("div", {
            className: s.content,
            children: [
              null != h
                ? (0, a.jsx)("img", {
                    src: h,
                    className: s.artwork,
                    alt: "",
                    "aria-labelledby": f,
                  })
                : null,
              (0, a.jsxs)("div", {
                className: s.innerContent,
                children: [
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-xl/extrabold",
                    id: f,
                    children: c.intl.string(c.t.qDtJmJ),
                  }),
                  null != p
                    ? (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: p,
                      })
                    : null,
                ],
              }),
              (0, a.jsx)(l.Button, {
                className: s.footerButton,
                color: l.Button.Colors.BRAND,
                onClick: t,
                children: c.intl.string(c.t.i4jeWV),
              }),
            ],
          })
        );
      };
    },
    521937: function (e, t, n) {
      n.d(t, {
        v: function () {
          return x;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        o = n(120356),
        i = n.n(o),
        l = n(593473),
        c = n(512969),
        s = n(481060),
        d = n(489863),
        u = n(511540),
        f = n(828878),
        h = n(388032),
        p = n(764809);
      function x(e) {
        let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
          [o, x] = r.useState(() => {
            let { user_code: e } = l.parse(window.location.search);
            return n && null != e ? e : "";
          }),
          C = (0, c.TH)(),
          v = r.useCallback(() => {
            (0, d.c$)(C);
          }, [C]),
          { manualSubmit: m, error: g, submitting: _ } = (0, u.c)(o, t, v);
        return (0, a.jsxs)("div", {
          className: p.content,
          children: [
            (0, a.jsxs)("div", {
              className: p.innerContent,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-xl/extrabold",
                  className: p.text,
                  children: h.intl.string(h.t.KYPNUl),
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: p.text,
                  children: h.intl.string(h.t.xRHk7e),
                }),
                (0, a.jsx)(s.TextInput, {
                  placeholder: h.intl.formatToPlainString(h.t["0tbz6+"], {
                    number: f.A.USER_CODE_LENGTH,
                  }),
                  maxLength: f.A.USER_CODE_LENGTH,
                  className: p.textInputContainer,
                  inputClassName: i()(p.textInput, {
                    [p.textInputError]: null != g,
                  }),
                  autoComplete: "off",
                  autoFocus: !0,
                  value: o,
                  onChange: x,
                  error: g,
                }),
              ],
            }),
            (0, a.jsx)(s.Button, {
              fullWidth: !0,
              color: s.Button.Colors.BRAND,
              onClick: m,
              submitting: _,
              disabled: o.length !== f.A.USER_CODE_LENGTH,
              children: (0, a.jsx)(s.Text, {
                variant: "text-md/medium",
                children: h.intl.string(h.t["3PatS0"]),
              }),
            }),
          ],
        });
      }
    },
    857458: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(512969),
        o = n(860911),
        i = n(981631),
        l = n(188785);
      function c() {
        let e = location.pathname + location.search;
        return l.a ? i.Z5c.REGISTER : (0, o.Ui)(e, !1);
      }
      t.Z = function () {
        return (0, a.jsx)(r.l_, { to: c() });
      };
    },
    77987: function (e, t, n) {
      n.d(t, {
        e: function () {
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(314897),
        o = n(449934),
        i = n(857458),
        l = n(981631);
      function c(e, t) {
        var n, c;
        let s =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function d(n) {
          if (
            !(0, o.$8)() &&
            r.default.getLoginStatus() !== l.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != t
              ? (0, a.jsx)(t, { renderRedirect: (0, a.jsx)(i.Z, {}) })
              : (0, a.jsx)(i.Z, {});
          return (0, a.jsx)(e, { ...(s.passProps ? n : null) });
        }
        return (
          (d.displayName = "Authenticated(".concat(
            null !==
              (c = null !== (n = e.displayName) && void 0 !== n ? n : e.name) &&
              void 0 !== c
              ? c
              : "<Unknown>",
            ")",
          )),
          d
        );
      }
    },
    133853: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var a,
        r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        c = n(748780),
        s = n(481060),
        d = n(981631),
        u = n(817623);
      function f(e, t, n) {
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
      class h extends (a = o.Component) {
        componentDidMount() {
          this.props.show && this.animate(1);
        }
        componentDidUpdate(e) {
          e.show !== this.props.show && this.animate(this.props.show ? 1 : 0);
        }
        getAnimatedStyle() {
          let { anim: e } = this,
            { reducedMotion: t } = this.context;
          return {
            opacity: e,
            transform: t.enabled
              ? void 0
              : [
                  {
                    translateY: e.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["-100px", "0px"],
                    }),
                  },
                  { translateZ: 0 },
                ],
          };
        }
        render() {
          return (0, r.jsx)(c.Z.a, {
            href: d.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: l()(u.logo, this.props.className),
            style: this.getAnimatedStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "anim", new c.Z.Value(0)),
            f(this, "animate", (e) => {
              c.Z.spring(this.anim, {
                toValue: e,
                friction: 10,
                tension: 100,
              }).start();
            });
        }
      }
      f(h, "contextType", s.AccessibilityPreferencesContext);
    },
    198993: function (e, t, n) {
      n.d(t, {
        c2: function () {
          return v;
        },
        cK: function () {
          return r;
        },
      });
      var a,
        r,
        o,
        i,
        l = n(200651),
        c = n(192379),
        s = n(120356),
        d = n.n(s),
        u = n(235580),
        f = n(982823);
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
      ((a = r || (r = {})).SIZE_40 = "SIZE_40"), (a.SIZE_60 = "SIZE_60");
      let p = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        x = n(515695);
      class C extends (o = c.PureComponent) {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, l.jsx)("div", {
            style: {
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: d()(f.qrCodeContainer, e),
            children: (0, l.jsx)(u.default, { value: t, level: "M", ...n }),
          });
        }
      }
      h(C, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class v extends (i = c.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = p[null != e ? e : "SIZE_40"];
          return (0, l.jsxs)("div", {
            className: f.qrCodeOverlayContainer,
            children: [
              (0, l.jsx)(C, { ...this.props }),
              (0, l.jsx)("div", {
                className: f.qrCodeOverlay,
                children: (0, l.jsx)("img", {
                  className: f[t],
                  src: x,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      h(v, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = C);
    },
    885006: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var a = n(192379);
      function r() {
        var e, t;
        let [n, r] = a.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080,
        });
        return (
          a.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              r({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          n
        );
      }
    },
    159277: function (e, t, n) {
      var a, r;
      n.d(t, {
        M: function () {
          return o;
        },
        t: function () {
          return a;
        },
      }),
        n(47120),
        ((r = a || (a = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (r.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (r.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let o = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
    828878: function (e, t, n) {
      var a, r;
      n.d(t, {
        A: function () {
          return a;
        },
      }),
        ((r = a || (a = {}))[(r.USER_CODE_LENGTH = 8)] = "USER_CODE_LENGTH");
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
    881579: function (e, t, n) {
      e.exports = {
        activatePage: "activatePage_ac6740",
        content: "content_ac6740",
        artwork: "artwork_ac6740",
        logo: "logo_ac6740",
      };
    },
    459881: function (e, t, n) {
      e.exports = {
        panel: "panel_c33858",
        panelHeader: "panelHeader_c33858",
        panelContent: "panelContent_c33858",
        logo: "logo_c33858",
        qrcodeContent: "qrcodeContent_c33858",
        qrcodeCard: "qrcodeCard_c33858",
        qrcodeOverlay: "qrcodeOverlay_c33858",
        qrcodeSpinner: "qrcodeSpinner_c33858",
        qrcodeText: "qrcodeText_c33858",
        qrcodeTextHeading: "qrcodeTextHeading_c33858",
        dividerContent: "dividerContent_c33858",
        divider: "divider_c33858",
        dividerText: "dividerText_c33858",
        fallbackContent: "fallbackContent_c33858",
        fallbackContentTextGroup: "fallbackContentTextGroup_c33858",
        fallbackContentHeading: "fallbackContentHeading_c33858",
        fallbackContentAction: "fallbackContentAction_c33858",
        fallbackContentCode: "fallbackContentCode_c33858",
        wumpus: "wumpus_c33858",
      };
    },
    577125: function (e, t, n) {
      e.exports = {
        content: "content_af0f97",
        innerContent: "innerContent_af0f97",
        footerButton: "footerButton_af0f97",
        artwork: "artwork_af0f97",
      };
    },
    764809: function (e, t, n) {
      e.exports = {
        content: "content_a4fc79",
        innerContent: "innerContent_a4fc79",
        text: "text_a4fc79",
        textInputContainer: "textInputContainer_a4fc79",
        textInput: "textInput_a4fc79",
        textInputError: "textInputError_a4fc79",
      };
    },
    817623: function (e, t, n) {
      e.exports = { logo: "logo_c59dbe" };
    },
    982823: function (e, t, n) {
      n.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeOverlayContainer: "qrCodeOverlayContainer_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    942605: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/c155b6ac1aeaf22db13c1195d742154bbf6bc02b787c5cfeeadc7b580501eb2f.png";
    },
    534345: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/03d8faedfa507d8254fc77917112a8485a813c78b276b4fe19391e0b2f62a119.png";
    },
  },
]);
//# sourceMappingURL=dec9205d79b973878fde.js.map
