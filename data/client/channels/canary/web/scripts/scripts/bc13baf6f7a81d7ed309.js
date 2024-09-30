"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49277"],
  {
    387852: function (t) {
      t.exports = "/assets/b05e68141e14f909f9ff.png";
    },
    290661: function (t) {
      t.exports = "/assets/71f85d57bed43f14b7ac.svg";
    },
    74830: function (t) {
      t.exports = "/assets/23a7a3fd6624342117bf.svg";
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
          return l;
        },
      });
      var a = n(470079),
        r = n(110924),
        o = n(626135),
        s = n(497350),
        i = n(981631);
      function l(t) {
        let e = (0, r.Z)(t);
        a.useEffect(() => {
          if (t === e) return;
          let n = null;
          "user-code-input" !== t.type &&
            (n = (0, s.B)(t.userCodeData.clientId)),
            o.default.track(i.rMx.DEVICE_LINK_STEP, {
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
      var a = n(470079),
        r = n(512722),
        o = n.n(r),
        s = n(478677),
        i = n(457330),
        l = n(275759),
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
        let _ = null;
        try {
          let { body: t } = await i.Z.authorize(p, {
            twoWayLinkType: s.g.DEVICE_CODE,
            userCode: n,
          });
          _ = t.url;
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
        let E = null;
        try {
          o()(null != _, "No URL in authorize response");
          let { state: t } = (0, l.xp)(_);
          o()(null != t, "Authorize URL state query parameter must be present"),
            (E = t);
        } catch (t) {
          throw (
            (await f(n, 2, "authorize"), Error("error parsing callback params"))
          );
        }
        try {
          await i.Z.callback(p, { code: e, state: E });
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
      function p(t, e, n, r) {
        return a.useCallback(
          async (a) => {
            if (!a) {
              try {
                await (0, c.tR)(t.userCode, "denied");
              } catch (t) {}
              e();
              return;
            }
            if (null == t.twoWayLinkCode)
              try {
                await (0, c.tR)(t.userCode, "granted"), r(t);
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
          return i;
        },
      }),
        n(47120);
      var a = n(470079),
        r = n(489863),
        o = n(828878),
        s = n(689938);
      function i(t, e, n) {
        let [i, l] = a.useState(!1),
          [c, u] = a.useState(null),
          d = a.useCallback(async () => {
            try {
              l(!0);
              let n = await (0, r.tV)(t);
              l(!1),
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
                l(!1),
                (null == t ? void 0 : t.status) === 401 && n();
            }
          }, [t, e, n]);
        return (
          a.useEffect(() => {
            t.length === o.A.USER_CODE_LENGTH ? d() : u(null);
          }, [t, d]),
          { manualSubmit: d, error: c, submitting: i }
        );
      }
    },
    197528: function (t, e, n) {
      n.r(e), n(47120);
      var a = n(735250),
        r = n(470079),
        o = n(830064),
        s = n(702493),
        i = n(77987),
        l = n(133853),
        c = n(703656),
        u = n(643366),
        d = n(94628),
        f = n(659154),
        p = n(902928),
        _ = n(240479),
        E = n(981631),
        I = n(621727);
      e.default = (0, i.e)(function () {
        let t;
        let [e, n] = r.useState({
          type: "user-code-input",
          usePrefilledCode: !0,
        });
        (0, s.Z)(), (0, u.Y)(e);
        let i = r.useCallback(() => {
            n({ type: "user-code-input" });
          }, [n]),
          C = r.useCallback(
            (t) => {
              n({ type: "authorization", userCodeData: t });
            },
            [n],
          ),
          h = r.useCallback(
            (t) => {
              n({ type: "success", userCodeData: t });
            },
            [n],
          ),
          A = r.useCallback(
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
              onUserCodeAccepted: C,
            });
            break;
          case "authorization":
            (t = (0, a.jsx)(d.B, {
              data: e.userCodeData,
              onDenied: i,
              onError: A,
              onSuccess: h,
            })),
              (T = !1);
            break;
          case "success":
            t = (0, a.jsx)(p.u, {
              onComplete: () => (0, c.uL)(E.Z5c.ME),
              data: e.userCodeData,
            });
            break;
          case "error":
            t = (0, a.jsx)(f.c, { onTryAgain: i });
            break;
          default:
            t = null;
        }
        return (0, a.jsxs)("div", {
          className: I.activatePage,
          children: [
            (0, a.jsx)(o.Z, {
              className: I.artwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)(l.Z, { show: !0, className: I.logo }),
            T ? (0, a.jsx)("div", { className: I.content, children: t }) : t,
          ],
        });
      });
    },
    94628: function (t, e, n) {
      n.d(e, {
        B: function () {
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        o = n(69580),
        s = n(787025),
        i = n(944844);
      function l(t) {
        let { data: e, onDenied: n, onError: l, onSuccess: c } = t,
          u = (0, i.t)(e, n, l, c);
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
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        o = n(689938),
        s = n(715802),
        i = n(387852);
      let l = (t) => {
        let { onTryAgain: e } = t;
        return (0, a.jsxs)("div", {
          className: s.bodyContent,
          children: [
            (0, a.jsx)("img", { src: i, width: "254", height: "127", alt: "" }),
            (0, a.jsx)(r.Heading, {
              className: s.title,
              variant: "heading-xl/extrabold",
              children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_TITLE,
            }),
            (0, a.jsx)(r.Text, {
              tag: "p",
              variant: "text-md/normal",
              color: "header-secondary",
              children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_BODY,
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
          return u;
        },
      });
      var a = n(735250),
        r = n(470079),
        o = n(159277),
        s = n(481060),
        i = n(689938),
        l = n(715802),
        c = n(290661);
      let u = (t) => {
        let { onComplete: e, data: n } = t,
          u = null,
          d = (0, r.useId)();
        return (
          (n.clientId === o.t.PLAYSTATION_APPLICATION_ID ||
            n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID) &&
            (u = (0, a.jsx)("img", {
              src: c,
              width: "241",
              height: "118",
              alt: "",
              "aria-labelledby": d,
            })),
          (0, a.jsxs)("div", {
            className: l.bodyContent,
            children: [
              u,
              (0, a.jsx)(s.Heading, {
                className: l.title,
                variant: "heading-xl/extrabold",
                id: d,
                children: i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE,
              }),
              null != n.twoWayLinkCode
                ? (0, a.jsx)(s.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: i.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY,
                  })
                : null,
              (0, a.jsx)(s.Button, {
                className: l.footerButton,
                color: s.Button.Colors.BRAND,
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
          return E;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        o = n(120356),
        s = n.n(o),
        i = n(593473),
        l = n(266067),
        c = n(481060),
        u = n(489863),
        d = n(511540),
        f = n(828878),
        p = n(689938),
        _ = n(74939);
      function E(t) {
        let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
          [o, E] = r.useState(() => {
            let { user_code: t } = i.parse(window.location.search);
            return n && null != t ? t : "";
          }),
          I = (0, l.TH)(),
          C = r.useCallback(() => {
            (0, u.c$)(I);
          }, [I]),
          { manualSubmit: h, error: A, submitting: T } = (0, d.c)(o, e, C);
        return (0, a.jsxs)("div", {
          className: _.content,
          children: [
            (0, a.jsx)(c.Heading, {
              variant: "heading-xl/extrabold",
              className: _.text,
              children: p.Z.Messages.ACTIVATE_DEVICE_TITLE,
            }),
            (0, a.jsx)(c.Text, {
              tag: "p",
              variant: "text-md/medium",
              color: "header-secondary",
              className: _.text,
              children: p.Z.Messages.ACTIVATE_DEVICE_BODY,
            }),
            (0, a.jsx)(c.TextInput, {
              placeholder:
                p.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
                  number: f.A.USER_CODE_LENGTH,
                }),
              maxLength: f.A.USER_CODE_LENGTH,
              className: _.textInputContainer,
              inputClassName: s()(_.textInput, {
                [_.textInputError]: null != A,
              }),
              autoComplete: "off",
              autoFocus: !0,
              value: o,
              onChange: E,
              error: A,
            }),
            (0, a.jsx)(c.Button, {
              fullWidth: !0,
              color: c.Button.Colors.BRAND,
              onClick: h,
              submitting: T,
              disabled: o.length !== f.A.USER_CODE_LENGTH,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/medium",
                children: p.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
    },
    857458: function (t, e, n) {
      n.d(e, {
        M: function () {
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(266067),
        o = n(860911),
        s = n(981631),
        i = n(188785);
      function l() {
        let t = location.pathname + location.search;
        return i.a ? s.Z5c.REGISTER : (0, o.Ui)(t, !1);
      }
      e.Z = function () {
        return (0, a.jsx)(r.l_, { to: l() });
      };
    },
    77987: function (t, e, n) {
      n.d(e, {
        e: function () {
          return l;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(314897),
        o = n(449934),
        s = n(857458),
        i = n(981631);
      function l(t, e) {
        var n, l;
        let c =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function u(n) {
          if (
            !(0, o.$8)() &&
            r.default.getLoginStatus() !== i.u34.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != e
              ? (0, a.jsx)(e, { renderRedirect: (0, a.jsx)(s.Z, {}) })
              : (0, a.jsx)(s.Z, {});
          return (0, a.jsx)(t, { ...(c.passProps ? n : null) });
        }
        return (
          (u.displayName = "Authenticated(".concat(
            null !==
              (l = null !== (n = t.displayName) && void 0 !== n ? n : t.name) &&
              void 0 !== l
              ? l
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
        r = n(735250),
        o = n(470079),
        s = n(120356),
        i = n.n(s),
        l = n(748780),
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
          return (0, r.jsx)(l.Z.a, {
            href: u.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: i()(d.logo, this.props.className),
            style: this.getAnimatedStyle(),
          });
        }
        constructor(...t) {
          super(...t),
            f(this, "anim", new l.Z.Value(0)),
            f(this, "animate", (t) => {
              l.Z.spring(this.anim, {
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
        bodyContent: "bodyContent_af0f97",
        title: "title_af0f97",
        footerButton: "footerButton_af0f97",
      };
    },
    74939: function (t, e, n) {
      t.exports = {
        content: "content_a4fc79",
        text: "text_a4fc79",
        textInputContainer: "textInputContainer_a4fc79",
        textInput: "textInput_a4fc79",
        textInputError: "textInputError_a4fc79",
      };
    },
    559737: function (t, e, n) {
      t.exports = { logo: "logo_c59dbe" };
    },
  },
]);
//# sourceMappingURL=bc13baf6f7a81d7ed309.js.map
