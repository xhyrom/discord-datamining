"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49277"],
  {
    387852: function (t) {
      t.exports = "/assets/b05e68141e14f909f9ff.png";
    },
    74830: function (t) {
      t.exports = "/assets/23a7a3fd6624342117bf.svg";
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
          return i;
        },
      });
      var a = n(192379),
        r = n(110924),
        o = n(626135),
        s = n(497350),
        c = n(981631);
      function i(t) {
        let e = (0, r.Z)(t);
        a.useEffect(() => {
          if (t === e) return;
          let n = null;
          "user-code-input" !== t.type &&
            (n = (0, s.B)(t.userCodeData.clientId)),
            o.default.track(c.rMx.DEVICE_LINK_STEP, {
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
          return _;
        },
      }),
        n(411104);
      var a = n(192379),
        r = n(512722),
        o = n.n(r),
        s = n(478677),
        c = n(457330),
        i = n(275759),
        l = n(489863),
        u = n(497350);
      async function d(t, e, n) {
        var a, r, l, d;
        let _ = (0, u.B)(t);
        if (null == _)
          throw (
            (await f(n, 1, "authorize"),
            Error("Unsupported client_id for two way link"))
          );
        let p = null;
        try {
          let { body: t } = await c.Z.authorize(_, {
            twoWayLinkType: s.g.DEVICE_CODE,
            userCode: n,
          });
          p = t.url;
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
        let C = null;
        try {
          o()(null != p, "No URL in authorize response");
          let { state: t } = (0, i.xp)(p);
          o()(null != t, "Authorize URL state query parameter must be present"),
            (C = t);
        } catch (t) {
          throw (
            (await f(n, 2, "authorize"), Error("error parsing callback params"))
          );
        }
        try {
          await c.Z.callback(_, { code: e, state: C });
        } catch (t) {
          throw (
            (await f(
              n,
              null !==
                (d =
                  null == t
                    ? void 0
                    : null === (l = t.body) || void 0 === l
                      ? void 0
                      : l.code) && void 0 !== d
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
          await (0, l.i2)(t, e, n);
        } catch (t) {}
      }
      function _(t, e, n, r) {
        return a.useCallback(
          async (a) => {
            if (!a) {
              try {
                await (0, l.tR)(t.userCode, "denied");
              } catch (t) {}
              e();
              return;
            }
            if (null == t.twoWayLinkCode)
              try {
                await (0, l.tR)(t.userCode, "granted"), r(t);
              } catch (e) {
                n(t);
              }
            else
              try {
                await d(t.clientId, t.twoWayLinkCode, t.userCode), r(t);
              } catch (e) {
                n(t);
              }
          },
          [t, e, n, r],
        );
      }
    },
    511540: function (t, e, n) {
      n.d(e, {
        c: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(192379),
        r = n(489863),
        o = n(828878),
        s = n(689938);
      function c(t, e, n) {
        let [c, i] = a.useState(!1),
          [l, u] = a.useState(null),
          d = a.useCallback(async () => {
            try {
              i(!0);
              let n = await (0, r.tV)(t);
              i(!1),
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
                  ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT
                  : 404 === a || 400 === a
                    ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE
                    : s.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN,
              ),
                i(!1),
                (null == t ? void 0 : t.status) === 401 && n();
            }
          }, [t, e, n]);
        return (
          a.useEffect(() => {
            t.length === o.A.USER_CODE_LENGTH ? d() : u(null);
          }, [t, d]),
          { manualSubmit: d, error: l, submitting: c }
        );
      }
    },
    197528: function (t, e, n) {
      n.r(e), n(47120);
      var a = n(200651),
        r = n(192379),
        o = n(702493),
        s = n(77987),
        c = n(133853),
        i = n(703656),
        l = n(643366),
        u = n(94628),
        d = n(659154),
        f = n(902928),
        _ = n(240479),
        p = n(981631),
        C = n(621727);
      let E = n(575703);
      e.default = (0, s.e)(function () {
        let t;
        let [e, n] = r.useState({
          type: "user-code-input",
          usePrefilledCode: !0,
        });
        (0, o.Z)(), (0, l.Y)(e);
        let s = r.useCallback(() => {
            n({ type: "user-code-input" });
          }, [n]),
          I = r.useCallback(
            (t) => {
              n({ type: "authorization", userCodeData: t });
            },
            [n],
          ),
          A = r.useCallback(
            (t) => {
              n({ type: "success", userCodeData: t });
            },
            [n],
          ),
          h = r.useCallback(
            (t) => {
              n({ type: "error", userCodeData: t });
            },
            [n],
          ),
          T = !0;
        switch (e.type) {
          case "user-code-input":
            t = (0, a.jsx)(_.v, {
              usePrefilledCode: e.usePrefilledCode || !1,
              onUserCodeAccepted: I,
            });
            break;
          case "authorization":
            (t = (0, a.jsx)(u.B, {
              data: e.userCodeData,
              onDenied: s,
              onError: h,
              onSuccess: A,
            })),
              (T = !1);
            break;
          case "success":
            t = (0, a.jsx)(f.u, {
              onComplete: () => (0, i.uL)(p.Z5c.ME),
              data: e.userCodeData,
            });
            break;
          case "error":
            t = (0, a.jsx)(d.c, { onTryAgain: s });
            break;
          default:
            t = null;
        }
        return (0, a.jsxs)("div", {
          className: C.activatePage,
          children: [
            (0, a.jsx)("img", { className: C.artwork, src: E, alt: "" }),
            (0, a.jsx)(c.Z, { show: !0, className: C.logo }),
            T ? (0, a.jsx)("div", { className: C.content, children: t }) : t,
          ],
        });
      });
    },
    94628: function (t, e, n) {
      n.d(e, {
        B: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        o = n(69580),
        s = n(787025),
        c = n(944844);
      function i(t) {
        let { data: e, onDenied: n, onError: i, onSuccess: l } = t,
          u = (0, c.t)(e, n, i, l);
        return (0, a.jsx)(s.G, {
          removeChildWrapper: !0,
          children: (0, a.jsx)(o.OAuth2AuthorizeModal, {
            transitionState: r.ModalTransitionState.ENTERED,
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: u,
          }),
        });
      }
    },
    659154: function (t, e, n) {
      n.d(e, {
        c: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        o = n(689938),
        s = n(715802),
        c = n(387852);
      let i = (t) => {
        let { onTryAgain: e } = t;
        return (0, a.jsxs)("div", {
          className: s.content,
          children: [
            (0, a.jsx)("img", { src: c, width: "254", height: "127", alt: "" }),
            (0, a.jsxs)("div", {
              className: s.innerContent,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-xl/extrabold",
                  children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_TITLE,
                }),
                (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_BODY,
                }),
              ],
            }),
            (0, a.jsx)(r.Button, {
              className: s.footerButton,
              color: r.Button.Colors.BRAND,
              onClick: e,
              children: o.Z.Messages.TRY_AGAIN,
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
        s = n(243814),
        c = n(481060),
        i = n(689938),
        l = n(715802),
        u = n(942605),
        d = n(534345);
      let f = (t) => {
        let { onComplete: e, data: n } = t,
          f = (0, r.useId)(),
          _ = null,
          p = null;
        return (
          n.clientId === o.t.PLAYSTATION_APPLICATION_ID ||
          n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID
            ? (_ = u.Z)
            : n.scopes.includes(s.x.SDK_SOCIAL_LAYER) && (_ = d.Z),
          null != n.twoWayLinkCode
            ? (p = i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY)
            : n.scopes.includes(s.x.SDK_SOCIAL_LAYER) &&
              (p = i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_SOCIAL_LAYER_BODY),
          (0, a.jsxs)("div", {
            className: l.content,
            children: [
              null != _
                ? (0, a.jsx)("img", {
                    src: _,
                    className: l.artwork,
                    alt: "",
                    "aria-labelledby": f,
                  })
                : null,
              (0, a.jsxs)("div", {
                className: l.innerContent,
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-xl/extrabold",
                    id: f,
                    children: i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE,
                  }),
                  null != p
                    ? (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: p,
                      })
                    : null,
                ],
              }),
              (0, a.jsx)(c.Button, {
                className: l.footerButton,
                color: c.Button.Colors.BRAND,
                onClick: e,
                children: i.Z.Messages.DONE,
              }),
            ],
          })
        );
      };
    },
    240479: function (t, e, n) {
      n.d(e, {
        v: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(200651),
        r = n(192379),
        o = n(120356),
        s = n.n(o),
        c = n(593473),
        i = n(512969),
        l = n(481060),
        u = n(489863),
        d = n(511540),
        f = n(828878),
        _ = n(689938),
        p = n(74939);
      function C(t) {
        let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
          [o, C] = r.useState(() => {
            let { user_code: t } = c.parse(window.location.search);
            return n && null != t ? t : "";
          }),
          E = (0, i.TH)(),
          I = r.useCallback(() => {
            (0, u.c$)(E);
          }, [E]),
          { manualSubmit: A, error: h, submitting: T } = (0, d.c)(o, e, I);
        return (0, a.jsxs)("div", {
          className: p.content,
          children: [
            (0, a.jsxs)("div", {
              className: p.innerContent,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-xl/extrabold",
                  className: p.text,
                  children: _.Z.Messages.ACTIVATE_DEVICE_TITLE,
                }),
                (0, a.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  className: p.text,
                  children: _.Z.Messages.ACTIVATE_DEVICE_BODY,
                }),
                (0, a.jsx)(l.TextInput, {
                  placeholder:
                    _.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
                      number: f.A.USER_CODE_LENGTH,
                    }),
                  maxLength: f.A.USER_CODE_LENGTH,
                  className: p.textInputContainer,
                  inputClassName: s()(p.textInput, {
                    [p.textInputError]: null != h,
                  }),
                  autoComplete: "off",
                  autoFocus: !0,
                  value: o,
                  onChange: C,
                  error: h,
                }),
              ],
            }),
            (0, a.jsx)(l.Button, {
              fullWidth: !0,
              color: l.Button.Colors.BRAND,
              onClick: A,
              submitting: T,
              disabled: o.length !== f.A.USER_CODE_LENGTH,
              children: (0, a.jsx)(l.Text, {
                variant: "text-md/medium",
                children: _.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
    },
    857458: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(512969),
        o = n(860911),
        s = n(981631),
        c = n(188785);
      function i() {
        let t = location.pathname + location.search;
        return c.a ? s.Z5c.REGISTER : (0, o.Ui)(t, !1);
      }
      e.Z = function () {
        return (0, a.jsx)(r.l_, { to: i() });
      };
    },
    77987: function (t, e, n) {
      n.d(e, {
        e: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var r = n(314897),
        o = n(449934),
        s = n(857458),
        c = n(981631);
      function i(t, e) {
        var n, i;
        let l =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function u(n) {
          if (
            !(0, o.$8)() &&
            r.default.getLoginStatus() !== c.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != e
              ? (0, a.jsx)(e, { renderRedirect: (0, a.jsx)(s.Z, {}) })
              : (0, a.jsx)(s.Z, {});
          return (0, a.jsx)(t, { ...(l.passProps ? n : null) });
        }
        return (
          (u.displayName = "Authenticated(".concat(
            null !==
              (i = null !== (n = t.displayName) && void 0 !== n ? n : t.name) &&
              void 0 !== i
              ? i
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
          return _;
        },
      }),
        n(47120);
      var a,
        r = n(200651),
        o = n(192379),
        s = n(120356),
        c = n.n(s),
        i = n(748780),
        l = n(481060),
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
      class _ extends (a = o.Component) {
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
          return (0, r.jsx)(i.Z.a, {
            href: u.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: c()(d.logo, this.props.className),
            style: this.getAnimatedStyle(),
          });
        }
        constructor(...t) {
          super(...t),
            f(this, "anim", new i.Z.Value(0)),
            f(this, "animate", (t) => {
              i.Z.spring(this.anim, {
                toValue: t,
                friction: 10,
                tension: 100,
              }).start();
            });
        }
      }
      f(_, "contextType", l.AccessibilityPreferencesContext);
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
//# sourceMappingURL=920d8892ccb8ceb70642.js.map
