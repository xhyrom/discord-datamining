"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49277"],
  {
    387852: function (t) {
      t.exports = "/assets/b05e68141e14f909f9ff.png";
    },
    575703: function (t) {
      t.exports = "/assets/b9995525a52dc58aecf5.svg";
    },
    497350: function (t, e, n) {
      n.d(e, {
        B: function () {
          return o;
        },
      });
      var a = n(159277),
        r = n(981631);
      function o(t) {
        let e = null;
        return (
          t === a.t.PLAYSTATION_APPLICATION_ID
            ? (e = r.ABu.PLAYSTATION)
            : t === a.t.PLAYSTATION_STAGING_APPLICATION_ID &&
              (e = r.ABu.PLAYSTATION_STAGING),
          e
        );
      }
    },
    643366: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return s;
        },
      });
      var a = n(192379),
        r = n(110924),
        o = n(626135),
        i = n(497350),
        l = n(981631);
      function s(t) {
        let e = (0, r.Z)(t);
        a.useEffect(() => {
          if (t === e) return;
          let n = null;
          "user-code-input" !== t.type &&
            (n = (0, i.B)(t.userCodeData.clientId)),
            o.default.track(l.rMx.DEVICE_LINK_STEP, {
              previous_step: null == e ? void 0 : e.type,
              current_step: t.type,
              platform_type: n,
            });
        }, [e, t]);
      }
    },
    944844: function (t, e, n) {
      n.d(e, {
        t: function () {
          return p;
        },
      }),
        n(411104);
      var a = n(192379),
        r = n(512722),
        o = n.n(r),
        i = n(478677),
        l = n(457330),
        s = n(275759),
        c = n(489863),
        u = n(497350);
      async function d(t, e, n) {
        var a, r, c, d;
        let p = (0, u.B)(t);
        if (null == p)
          throw (
            (await f(n, 1, "authorize"),
            Error("Unsupported client_id for two way link"))
          );
        let h = null;
        try {
          let { body: t } = await l.Z.authorize(p, {
            twoWayLinkType: i.g.DEVICE_CODE,
            userCode: n,
          });
          h = t.url;
        } catch (t) {
          throw (
            (await f(
              n,
              null !==
                (r =
                  null == t
                    ? void 0
                    : null === (a = t.body) || void 0 === a
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
          o()(null != h, "No URL in authorize response");
          let { state: t } = (0, s.xp)(h);
          o()(null != t, "Authorize URL state query parameter must be present"),
            (x = t);
        } catch (t) {
          throw (
            (await f(n, 2, "authorize"), Error("error parsing callback params"))
          );
        }
        try {
          await l.Z.callback(p, { code: e, state: x });
        } catch (t) {
          throw (
            (await f(
              n,
              null !==
                (d =
                  null == t
                    ? void 0
                    : null === (c = t.body) || void 0 === c
                      ? void 0
                      : c.code) && void 0 !== d
                ? d
                : 0,
              "callback",
            ),
            Error("error during two way callback"))
          );
        }
      }
      async function f(t, e, n) {
        try {
          await (0, c.i2)(t, e, n);
        } catch (t) {}
      }
      function p(t, e, n) {
        return a.useCallback(
          async (a, r) => {
            if (!r) {
              try {
                await (0, c.tR)(a.userCode, "denied");
              } catch (t) {}
              t();
              return;
            }
            if (null == a.twoWayLinkCode)
              try {
                await (0, c.tR)(a.userCode, "granted"), n(a);
              } catch (t) {
                e(a);
              }
            else
              try {
                await d(a.clientId, a.twoWayLinkCode, a.userCode), n(a);
              } catch (t) {
                e(a);
              }
          },
          [t, e, n],
        );
      }
    },
    511540: function (t, e, n) {
      n.d(e, {
        c: function () {
          return l;
        },
      }),
        n(47120);
      var a = n(192379),
        r = n(489863),
        o = n(828878),
        i = n(388032);
      function l(t, e, n) {
        let [l, s] = a.useState(!1),
          [c, u] = a.useState(null),
          d = a.useCallback(async () => {
            try {
              s(!0);
              let n = await (0, r.tV)(t);
              s(!1),
                e({
                  userCode: t,
                  clientId: n.body.client_id,
                  scopes: n.body.scopes,
                  twoWayLinkCode: n.body.two_way_link_code,
                });
            } catch (t) {
              var a;
              u(
                429 === (a = null == t ? void 0 : t.status)
                  ? i.intl.string(i.t.BPmZvr)
                  : 404 === a || 400 === a
                    ? i.intl.string(i.t.aWa1Pz)
                    : i.intl.string(i.t.JNQRU1),
              ),
                s(!1),
                (null == t ? void 0 : t.status) === 401 && n();
            }
          }, [t, e, n]);
        return (
          a.useEffect(() => {
            t.length === o.A.USER_CODE_LENGTH ? d() : u(null);
          }, [t, d]),
          { manualSubmit: d, error: c, submitting: l }
        );
      }
    },
    197528: function (t, e, n) {
      n.r(e), n(47120);
      var a = n(200651),
        r = n(192379),
        o = n(702493),
        i = n(77987),
        l = n(133853),
        s = n(703656),
        c = n(643366),
        u = n(94628),
        d = n(659154),
        f = n(902928),
        p = n(240479),
        h = n(981631),
        x = n(621727);
      let C = n(575703);
      e.default = (0, i.e)(function () {
        let t;
        let [e, n] = r.useState({
          type: "user-code-input",
          usePrefilledCode: !0,
        });
        (0, o.Z)(), (0, c.Y)(e);
        let i = r.useCallback(() => {
            n({ type: "user-code-input" });
          }, [n]),
          _ = r.useCallback(
            (t) => {
              n({ type: "authorization", userCodeData: t });
            },
            [n],
          ),
          m = r.useCallback(
            (t) => {
              n({ type: "success", userCodeData: t });
            },
            [n],
          ),
          I = r.useCallback(
            (t) => {
              n({ type: "error", userCodeData: t });
            },
            [n],
          ),
          v = !0;
        switch (e.type) {
          case "user-code-input":
            t = (0, a.jsx)(p.v, {
              usePrefilledCode: e.usePrefilledCode || !1,
              onUserCodeAccepted: _,
            });
            break;
          case "authorization":
            (t = (0, a.jsx)(u.B, {
              data: e.userCodeData,
              onDenied: i,
              onError: I,
              onSuccess: m,
            })),
              (v = !1);
            break;
          case "success":
            t = (0, a.jsx)(f.u, {
              onComplete: () => (0, s.uL)(h.Z5c.ME),
              data: e.userCodeData,
            });
            break;
          case "error":
            t = (0, a.jsx)(d.c, { onTryAgain: i });
            break;
          default:
            t = null;
        }
        return (0, a.jsxs)("div", {
          className: x.activatePage,
          children: [
            (0, a.jsx)("img", { className: x.artwork, src: C, alt: "" }),
            (0, a.jsx)(l.Z, { show: !0, className: x.logo }),
            v ? (0, a.jsx)("div", { className: x.content, children: t }) : t,
          ],
        });
      });
    },
    94628: function (t, e, n) {
      n.d(e, {
        B: function () {
          return c;
        },
      });
      var a = n(200651),
        r = n(192379),
        o = n(481060),
        i = n(69580),
        l = n(787025),
        s = n(944844);
      function c(t) {
        let { data: e, onDenied: n, onError: c, onSuccess: u } = t,
          d = (0, s.t)(n, c, u),
          f = r.useCallback((t) => d(e, t), [e, d]);
        return (0, a.jsx)(l.G, {
          removeChildWrapper: !0,
          children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: o.ModalTransitionState.ENTERED,
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f,
          }),
        });
      }
    },
    659154: function (t, e, n) {
      n.d(e, {
        c: function () {
          return s;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        o = n(388032),
        i = n(715802),
        l = n(387852);
      let s = (t) => {
        let { onTryAgain: e } = t;
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
              onClick: e,
              children: o.intl.string(o.t["7NqTJi"]),
            }),
          ],
        });
      };
    },
    902928: function (t, e, n) {
      n.d(e, {
        u: function () {
          return f;
        },
      });
      var a = n(200651),
        r = n(192379),
        o = n(159277),
        i = n(243814),
        l = n(481060),
        s = n(388032),
        c = n(715802),
        u = n(942605),
        d = n(534345);
      let f = (t) => {
        let { onComplete: e, data: n } = t,
          f = (0, r.useId)(),
          p = null,
          h = null;
        return (
          n.clientId === o.t.PLAYSTATION_APPLICATION_ID ||
          n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID
            ? (p = u.Z)
            : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (p = d.Z),
          null != n.twoWayLinkCode
            ? (h = s.intl.string(s.t.QhATl5))
            : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) &&
              (h = s.intl.string(s.t.vBPvKy)),
          (0, a.jsxs)("div", {
            className: c.content,
            children: [
              null != p
                ? (0, a.jsx)("img", {
                    src: p,
                    className: c.artwork,
                    alt: "",
                    "aria-labelledby": f,
                  })
                : null,
              (0, a.jsxs)("div", {
                className: c.innerContent,
                children: [
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-xl/extrabold",
                    id: f,
                    children: s.intl.string(s.t.qDtJmJ),
                  }),
                  null != h
                    ? (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: h,
                      })
                    : null,
                ],
              }),
              (0, a.jsx)(l.Button, {
                className: c.footerButton,
                color: l.Button.Colors.BRAND,
                onClick: e,
                children: s.intl.string(s.t.i4jeWV),
              }),
            ],
          })
        );
      };
    },
    240479: function (t, e, n) {
      n.d(e, {
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
        s = n(512969),
        c = n(481060),
        u = n(489863),
        d = n(511540),
        f = n(828878),
        p = n(388032),
        h = n(74939);
      function x(t) {
        let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
          [o, x] = r.useState(() => {
            let { user_code: t } = l.parse(window.location.search);
            return n && null != t ? t : "";
          }),
          C = (0, s.TH)(),
          _ = r.useCallback(() => {
            (0, u.c$)(C);
          }, [C]),
          { manualSubmit: m, error: I, submitting: v } = (0, d.c)(o, e, _);
        return (0, a.jsxs)("div", {
          className: h.content,
          children: [
            (0, a.jsxs)("div", {
              className: h.innerContent,
              children: [
                (0, a.jsx)(c.Heading, {
                  variant: "heading-xl/extrabold",
                  className: h.text,
                  children: p.intl.string(p.t.KYPNUl),
                }),
                (0, a.jsx)(c.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: h.text,
                  children: p.intl.string(p.t.xRHk7e),
                }),
                (0, a.jsx)(c.TextInput, {
                  placeholder: p.intl.formatToPlainString(p.t["0tbz6+"], {
                    number: f.A.USER_CODE_LENGTH,
                  }),
                  maxLength: f.A.USER_CODE_LENGTH,
                  className: h.textInputContainer,
                  inputClassName: i()(h.textInput, {
                    [h.textInputError]: null != I,
                  }),
                  autoComplete: "off",
                  autoFocus: !0,
                  value: o,
                  onChange: x,
                  error: I,
                }),
              ],
            }),
            (0, a.jsx)(c.Button, {
              fullWidth: !0,
              color: c.Button.Colors.BRAND,
              onClick: m,
              submitting: v,
              disabled: o.length !== f.A.USER_CODE_LENGTH,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/medium",
                children: p.intl.string(p.t["3PatS0"]),
              }),
            }),
          ],
        });
      }
    },
    857458: function (t, e, n) {
      n.d(e, {
        M: function () {
          return s;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(512969),
        o = n(860911),
        i = n(981631),
        l = n(188785);
      function s() {
        let t = location.pathname + location.search;
        return l.a ? i.Z5c.REGISTER : (0, o.Ui)(t, !1);
      }
      e.Z = function () {
        return (0, a.jsx)(r.l_, { to: s() });
      };
    },
    77987: function (t, e, n) {
      n.d(e, {
        e: function () {
          return s;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(314897),
        o = n(449934),
        i = n(857458),
        l = n(981631);
      function s(t, e) {
        var n, s;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function u(n) {
          if (
            !(0, o.$8)() &&
            r.default.getLoginStatus() !== l.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != e
              ? (0, a.jsx)(e, { renderRedirect: (0, a.jsx)(i.Z, {}) })
              : (0, a.jsx)(i.Z, {});
          return (0, a.jsx)(t, { ...(c.passProps ? n : null) });
        }
        return (
          (u.displayName = "Authenticated(".concat(
            null !==
              (s = null !== (n = t.displayName) && void 0 !== n ? n : t.name) &&
              void 0 !== s
              ? s
              : "<Unknown>",
            ")",
          )),
          u
        );
      }
    },
    133853: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var a,
        r = n(200651),
        o = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(748780),
        c = n(481060),
        u = n(981631),
        d = n(559737);
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class p extends (a = o.Component) {
        componentDidMount() {
          this.props.show && this.animate(1);
        }
        componentDidUpdate(t) {
          t.show !== this.props.show && this.animate(this.props.show ? 1 : 0);
        }
        getAnimatedStyle() {
          let { anim: t } = this,
            { reducedMotion: e } = this.context;
          return {
            opacity: t,
            transform: e.enabled
              ? void 0
              : [
                  {
                    translateY: t.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["-100px", "0px"],
                    }),
                  },
                  { translateZ: 0 },
                ],
          };
        }
        render() {
          return (0, r.jsx)(s.Z.a, {
            href: u.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: l()(d.logo, this.props.className),
            style: this.getAnimatedStyle(),
          });
        }
        constructor(...t) {
          super(...t),
            f(this, "anim", new s.Z.Value(0)),
            f(this, "animate", (t) => {
              s.Z.spring(this.anim, {
                toValue: t,
                friction: 10,
                tension: 100,
              }).start();
            });
        }
      }
      f(p, "contextType", c.AccessibilityPreferencesContext);
    },
    159277: function (t, e, n) {
      var a, r;
      n.d(e, {
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
    828878: function (t, e, n) {
      var a, r;
      n.d(e, {
        A: function () {
          return a;
        },
      }),
        ((r = a || (a = {}))[(r.USER_CODE_LENGTH = 8)] = "USER_CODE_LENGTH");
    },
    478677: function (t, e, n) {
      var a, r;
      n.d(e, {
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
    621727: function (t, e, n) {
      t.exports = {
        activatePage: "activatePage_ac6740",
        content: "content_ac6740",
        artwork: "artwork_ac6740",
        logo: "logo_ac6740",
      };
    },
    715802: function (t, e, n) {
      t.exports = {
        content: "content_af0f97",
        innerContent: "innerContent_af0f97",
        footerButton: "footerButton_af0f97",
        artwork: "artwork_af0f97",
      };
    },
    74939: function (t, e, n) {
      t.exports = {
        content: "content_a4fc79",
        innerContent: "innerContent_a4fc79",
        text: "text_a4fc79",
        textInputContainer: "textInputContainer_a4fc79",
        textInput: "textInput_a4fc79",
        textInputError: "textInputError_a4fc79",
      };
    },
    559737: function (t, e, n) {
      t.exports = { logo: "logo_c59dbe" };
    },
    942605: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/c155b6ac1aeaf22db13c1195d742154bbf6bc02b787c5cfeeadc7b580501eb2f.png";
    },
    534345: function (t, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/03d8faedfa507d8254fc77917112a8485a813c78b276b4fe19391e0b2f62a119.png";
    },
  },
]);
//# sourceMappingURL=339595c5fc0032dfdc1c.js.map
