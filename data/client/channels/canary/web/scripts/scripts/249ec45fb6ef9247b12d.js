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
          return u;
        },
      });
      var a = n(470079),
        r = n(110924),
        o = n(626135),
        s = n(497350),
        c = n(981631);
      function u(t) {
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
          return f;
        },
      }),
        n(411104);
      var a = n(470079),
        r = n(512722),
        o = n.n(r),
        s = n(478677),
        c = n(457330),
        u = n(275759),
        l = n(489863),
        i = n(497350);
      async function d(t, e, n) {
        var a, r, l, d;
        let f = (0, i.B)(t);
        if (null == f)
          throw (
            (await _(n, 1, "authorize"),
            Error("Unsupported client_id for two way link"))
          );
        let I = null;
        try {
          let { body: t } = await c.Z.authorize(f, {
            twoWayLinkType: s.g.DEVICE_CODE,
            userCode: n,
          });
          I = t.url;
        } catch (t) {
          throw (
            (await _(
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
          o()(null != I, "No URL in authorize response");
          let { state: t } = (0, u.xp)(I);
          o()(null != t, "Authorize URL state query parameter must be present"),
            (C = t);
        } catch (t) {
          throw (
            (await _(n, 2, "authorize"), Error("error parsing callback params"))
          );
        }
        try {
          await c.Z.callback(f, { code: e, state: C });
        } catch (t) {
          throw (
            (await _(
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
      async function _(t, e, n) {
        try {
          await (0, l.i2)(t, e, n);
        } catch (t) {}
      }
      function f(t, e, n, r) {
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
      var a = n(470079),
        r = n(489863),
        o = n(828878),
        s = n(689938);
      function c(t, e, n) {
        let [c, u] = a.useState(!1),
          [l, i] = a.useState(null),
          d = a.useCallback(async () => {
            try {
              u(!0);
              let n = await (0, r.tV)(t);
              u(!1),
                e({
                  userCode: t,
                  clientId: n.body.client_id,
                  scopes: n.body.scopes,
                  twoWayLinkCode: n.body.two_way_link_code,
                });
            } catch (t) {
              var a;
              i(
                429 === (a = null == t ? void 0 : t.status)
                  ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT
                  : 404 === a || 400 === a
                    ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE
                    : s.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN,
              ),
                u(!1),
                (null == t ? void 0 : t.status) === 401 && n();
            }
          }, [t, e, n]);
        return (
          a.useEffect(() => {
            t.length === o.A.USER_CODE_LENGTH ? d() : i(null);
          }, [t, d]),
          { manualSubmit: d, error: l, submitting: c }
        );
      }
    },
    197528: function (t, e, n) {
      n.r(e), n(47120);
      var a = n(735250),
        r = n(470079),
        o = n(830064),
        s = n(702493),
        c = n(77987),
        u = n(133853),
        l = n(703656),
        i = n(643366),
        d = n(94628),
        _ = n(659154),
        f = n(902928),
        I = n(240479),
        C = n(981631),
        E = n(773566);
      e.default = (0, c.e)(function () {
        let t;
        let [e, n] = r.useState({
          type: "user-code-input",
          usePrefilledCode: !0,
        });
        (0, s.Z)(), (0, i.Y)(e);
        let c = r.useCallback(() => {
            n({ type: "user-code-input" });
          }, [n]),
          A = r.useCallback(
            (t) => {
              n({ type: "authorization", userCodeData: t });
            },
            [n],
          ),
          T = r.useCallback(
            (t) => {
              n({ type: "success", userCodeData: t });
            },
            [n],
          ),
          p = r.useCallback(
            (t) => {
              n({ type: "error", userCodeData: t });
            },
            [n],
          );
        switch (e.type) {
          case "user-code-input":
            t = (0, a.jsx)(I.v, {
              usePrefilledCode: e.usePrefilledCode || !1,
              onUserCodeAccepted: A,
            });
            break;
          case "authorization":
            t = (0, a.jsx)(d.B, {
              data: e.userCodeData,
              onDenied: c,
              onError: p,
              onSuccess: T,
            });
            break;
          case "success":
            t = (0, a.jsx)(f.u, {
              onComplete: () => (0, l.uL)(C.Z5c.ME),
              data: e.userCodeData,
            });
            break;
          case "error":
            t = (0, a.jsx)(_.c, { onTryAgain: c });
            break;
          default:
            t = null;
        }
        return (0, a.jsxs)("div", {
          className: E.activatePage,
          children: [
            (0, a.jsx)(o.Z, {
              className: E.artwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)(u.Z, { show: !0, className: E.logo }),
            (0, a.jsx)("div", { className: E.content, children: t }),
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
      var a = n(735250);
      n(470079);
      var r = n(69580),
        o = n(944844),
        s = n(896426);
      function c(t) {
        let { data: e, onDenied: n, onError: c, onSuccess: u } = t,
          l = (0, o.t)(e, n, c, u);
        return (0, a.jsx)("div", {
          className: s.content,
          children: (0, a.jsx)(r.OAuth2Authorize, {
            clientId: e.clientId,
            scopes: e.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: l,
          }),
        });
      }
    },
    659154: function (t, e, n) {
      n.d(e, {
        c: function () {
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        o = n(689938),
        s = n(189073),
        c = n(387852);
      let u = (t) => {
        let { onTryAgain: e } = t;
        return (0, a.jsxs)("div", {
          className: s.bodyContent,
          children: [
            (0, a.jsx)("img", { src: c, width: "254", height: "127", alt: "" }),
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
          return i;
        },
      });
      var a = n(735250),
        r = n(470079),
        o = n(159277),
        s = n(481060),
        c = n(689938),
        u = n(189073),
        l = n(290661);
      let i = (t) => {
        let { onComplete: e, data: n } = t,
          i = null,
          d = (0, r.useId)();
        return (
          (n.clientId === o.t.PLAYSTATION_APPLICATION_ID ||
            n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID) &&
            (i = (0, a.jsx)("img", {
              src: l,
              width: "241",
              height: "118",
              alt: "",
              "aria-labelledby": d,
            })),
          (0, a.jsxs)("div", {
            className: u.bodyContent,
            children: [
              i,
              (0, a.jsx)(s.Heading, {
                className: u.title,
                variant: "heading-xl/extrabold",
                id: d,
                children: c.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE,
              }),
              null != n.twoWayLinkCode
                ? (0, a.jsx)(s.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: c.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY,
                  })
                : null,
              (0, a.jsx)(s.Button, {
                className: u.footerButton,
                color: s.Button.Colors.BRAND,
                onClick: e,
                children: c.Z.Messages.DONE,
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
      var a = n(735250),
        r = n(470079),
        o = n(120356),
        s = n.n(o),
        c = n(593473),
        u = n(266067),
        l = n(481060),
        i = n(489863),
        d = n(511540),
        _ = n(828878),
        f = n(689938),
        I = n(847597);
      function C(t) {
        let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
          [o, C] = r.useState(() => {
            let { user_code: t } = c.parse(window.location.search);
            return n && null != t ? t : "";
          }),
          E = (0, u.TH)(),
          A = r.useCallback(() => {
            (0, i.c$)(E);
          }, [E]),
          { manualSubmit: T, error: p, submitting: h } = (0, d.c)(o, e, A);
        return (0, a.jsxs)("div", {
          className: I.content,
          children: [
            (0, a.jsx)(l.Heading, {
              variant: "heading-xl/extrabold",
              className: I.text,
              children: f.Z.Messages.ACTIVATE_DEVICE_TITLE,
            }),
            (0, a.jsx)(l.Text, {
              tag: "p",
              variant: "text-md/medium",
              color: "header-secondary",
              className: I.text,
              children: f.Z.Messages.ACTIVATE_DEVICE_BODY,
            }),
            (0, a.jsx)(l.TextInput, {
              placeholder:
                f.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
                  number: _.A.USER_CODE_LENGTH,
                }),
              maxLength: _.A.USER_CODE_LENGTH,
              className: I.textInputContainer,
              inputClassName: s()(I.textInput, {
                [I.textInputError]: null != p,
              }),
              autoComplete: "off",
              autoFocus: !0,
              value: o,
              onChange: C,
              error: p,
            }),
            (0, a.jsx)(l.Button, {
              fullWidth: !0,
              color: l.Button.Colors.BRAND,
              onClick: T,
              submitting: h,
              disabled: o.length !== _.A.USER_CODE_LENGTH,
              children: (0, a.jsx)(l.Text, {
                variant: "text-md/medium",
                children: f.Z.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
    },
    857458: function (t, e, n) {
      n.d(e, {
        M: function () {
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(266067),
        o = n(860911),
        s = n(981631),
        c = n(188785);
      function u() {
        let t = location.pathname + location.search;
        return c.a ? s.Z5c.REGISTER : (0, o.U)(t, !1);
      }
      e.Z = function () {
        return (0, a.jsx)(r.l_, { to: u() });
      };
    },
    77987: function (t, e, n) {
      n.d(e, {
        e: function () {
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(314897),
        o = n(449934),
        s = n(857458),
        c = n(981631);
      function u(t, e) {
        var n, u;
        let l =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function i(n) {
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
          (i.displayName = "Authenticated(".concat(
            null !==
              (u = null !== (n = t.displayName) && void 0 !== n ? n : t.name) &&
              void 0 !== u
              ? u
              : "<Unknown>",
            ")",
          )),
          i
        );
      }
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
    773566: function (t, e, n) {
      t.exports = {
        activatePage: "activatePage_ac6740",
        content: "content_ac6740",
        artwork: "artwork_ac6740",
        logo: "logo_ac6740",
      };
    },
    896426: function (t, e, n) {
      t.exports = { content: "content_a9f937" };
    },
    189073: function (t, e, n) {
      t.exports = {
        bodyContent: "bodyContent_af0f97",
        title: "title_af0f97",
        footerButton: "footerButton_af0f97",
      };
    },
    847597: function (t, e, n) {
      t.exports = {
        content: "content_a4fc79",
        text: "text_a4fc79",
        textInputContainer: "textInputContainer_a4fc79",
        textInput: "textInput_a4fc79",
        textInputError: "textInputError_a4fc79",
      };
    },
  },
]);
//# sourceMappingURL=249ec45fb6ef9247b12d.js.map
