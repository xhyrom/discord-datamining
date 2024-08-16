"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60827"],
  {
    833310: function (e) {
      e.exports = "/assets/b4a7081edd373f342f71.svg";
    },
    612317: function (e) {
      e.exports = "/assets/2e92c54e76a6cadef895.svg";
    },
    324239: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n(47120);
      var o = n(735250),
        s = n(470079),
        l = n(120356),
        r = n.n(l),
        a = n(481060),
        i = n(893776),
        c = n(809206),
        u = n(600164),
        d = n(390885),
        m = n(626135),
        f = n(361207),
        _ = n(792125),
        p = n(981631),
        g = n(630724),
        C = n(689938),
        N = n(809784);
      function A(e) {
        let {
            email: t,
            setEmail: n,
            claimRequired: l,
            onSuccess: m,
            onClose: f,
          } = e,
          [A, S] = s.useState(),
          [T, I] = s.useState(""),
          [x, M] = s.useState(""),
          [E, O] = s.useState(!1);
        s.useEffect(() => d.Z.flowStep(g.MK.ANY, g.mx.CLAIM_ACCOUNT), []);
        let h = async (e) => {
          e.preventDefault(), O(!0), S(""), M("");
          try {
            await (0, c.S2)({ email: t, password: T }), O(!1), m();
          } catch (e) {
            var n, o;
            (null == e
              ? void 0
              : null === (n = e.body) || void 0 === n
                ? void 0
                : n.email) && S(e.body.email),
              (null == e
                ? void 0
                : null === (o = e.body) || void 0 === o
                  ? void 0
                  : o.password) && M(e.body.password),
              O(!1);
          }
        };
        return (0, o.jsxs)("div", {
          className: r()(N.modalLight, (0, _.Q)(p.BRd.LIGHT)),
          children: [
            (0, o.jsxs)(a.ModalHeader, {
              className: N.formHeader,
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, o.jsx)("div", { className: N.formImage }),
                (0, o.jsx)(a.Heading, {
                  className: N.formTitle,
                  variant: "heading-xl/semibold",
                  children: C.Z.Messages.FINISH_SIGNING_UP,
                }),
                (0, o.jsx)(a.Text, {
                  className: N.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: l
                    ? C.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY
                    : C.Z.Messages.CLAIM_ACCOUNT_BODY_2,
                }),
                (0, o.jsx)(a.ModalCloseButton, {
                  className: N.closeButton,
                  onClick: f,
                }),
              ],
            }),
            (0, o.jsx)(a.ModalContent, {
              children: (0, o.jsxs)("form", {
                className: N.formContent,
                onSubmit: h,
                children: [
                  (0, o.jsx)(a.FormItem, {
                    title: C.Z.Messages.FORM_LABEL_EMAIL,
                    className: N.formItem,
                    children: (0, o.jsx)(a.TextInput, {
                      value: t,
                      error: A,
                      onChange: (e) => n(e),
                      autoFocus: !0,
                    }),
                  }),
                  (0, o.jsx)(a.FormItem, {
                    title: C.Z.Messages.FORM_LABEL_PASSWORD,
                    className: N.formItem,
                    children: (0, o.jsx)(a.TextInput, {
                      type: "password",
                      value: T,
                      error: x,
                      onChange: (e) => I(e),
                    }),
                  }),
                  (0, o.jsx)(a.Button, {
                    type: "submit",
                    size: a.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: E,
                    disabled: 0 === t.length || 0 === T.length,
                    children: C.Z.Messages.CLAIM_ACCOUNT,
                  }),
                  l &&
                    (0, o.jsx)(a.Button, {
                      className: N.logoutButton,
                      color: a.Button.Colors.PRIMARY,
                      look: a.Button.Looks.LINK,
                      size: a.Button.Sizes.NONE,
                      onClick: () => {
                        i.Z.logout(), f();
                      },
                      children: C.Z.Messages.LOGOUT,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function S(e) {
        let { email: t, claimRequired: n, onClose: l } = e,
          i = n
            ? C.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO
            : C.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
        function c() {
          window.open((0, f.t3)(), "_blank"),
            m.default.track(p.rMx.DOWNLOAD_APP, {
              platform: (0, f.DW)(),
              ptb: !1,
              released: !0,
              has_e_mail: !0,
              referring_location: "Claim Modal",
              qr_code: !1,
            });
        }
        return (
          s.useEffect(
            () => d.Z.flowStep(g.MK.ANY, g.mx.CLAIM_ACCOUNT_SUCCESS),
            [],
          ),
          (0, o.jsxs)("div", {
            className: r()(N.modalLight, (0, _.Q)(p.BRd.LIGHT)),
            children: [
              (0, o.jsxs)(a.ModalContent, {
                className: N.successContent,
                children: [
                  !n &&
                    (0, o.jsx)(a.ModalCloseButton, {
                      className: N.closeButton,
                      onClick: l,
                    }),
                  (0, o.jsx)("div", { className: N.successImage }),
                  (0, o.jsx)(a.Text, {
                    className: N.successTitle,
                    variant: "text-lg/semibold",
                    children: i.format({ email: t }),
                  }),
                  (0, o.jsx)(a.Text, {
                    className: N.successPromotion,
                    variant: "text-md/normal",
                    children: C.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04,
                  }),
                ],
              }),
              n
                ? (0, o.jsx)(a.ModalFooter, {
                    direction: u.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(a.Button, {
                      size: a.Button.Sizes.LARGE,
                      onClick: l,
                      children: C.Z.Messages.OKAY,
                    }),
                  })
                : (0, o.jsx)(a.ModalFooter, {
                    direction: u.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(a.Button, {
                      color: a.Button.Colors.BRAND,
                      size: a.Button.Sizes.LARGE,
                      onClick: c,
                      children: C.Z.Messages.CLAIM_ACCOUNT_GET_APP,
                    }),
                  }),
            ],
          })
        );
      }
      function T(e) {
        let { onClose: t, transitionState: n, claimRequired: l = !1 } = e,
          [r, i] = s.useState(""),
          [c, u] = s.useState(!1);
        return c
          ? (0, o.jsx)(a.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(S, {
                email: r,
                claimRequired: l,
                onClose: t,
              }),
            })
          : (0, o.jsx)(a.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(A, {
                email: r,
                setEmail: i,
                claimRequired: l,
                onSuccess: () => u(!0),
                onClose: t,
              }),
            });
      }
    },
    630724: function (e, t, n) {
      var o, s, l, r, a, i, c, u, d, m;
      n.d(t, {
        EW: function () {
          return a;
        },
        FF: function () {
          return s;
        },
        MK: function () {
          return o;
        },
        X2: function () {
          return r;
        },
        mx: function () {
          return l;
        },
      }),
        ((i = o || (o = {})).UNKNOWN = "unknown"),
        (i.ANY = "any"),
        (i.INVITE = "invite"),
        (i.ORGANIC = "organic_registration"),
        (i.ORGANIC_MARKETING = "organic_marketing"),
        (i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (i.CREATE_GUILD = "create_guild"),
        ((c = s || (s = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = l || (l = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = r || (r = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((m = a || (a = {})).NUF_STARTED = "nuf_started"),
        (m.AGE_GATE = "age_gate"),
        (m.NUF_COMPLETE = "nuf_complete"),
        (m.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var o = n(652874),
        s = n(731965),
        l = n(433517),
        r = n(710845),
        a = n(626135),
        i = n(630724),
        c = n(981631);
      let u = "UserFlowAnalyticsStore_current",
        d = "UserFlowAnalyticsStore";
      function m(e) {
        if (e === i.MK.UNKNOWN) return null;
        let t = l.K.get("".concat(d, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...o } = t;
        return 1 !== n ? null : o;
      }
      new r.Z("UserFlowAnalytics");
      let f = (0, o.Z)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e ? e : l.K.get(u);
          if (null == n) return null;
          let { [n]: o } = t().flows,
            s = null != o ? o : m(n);
          return (null == s ? void 0 : s.currentStep) != null ? n : null;
        },
      }));
      function _(e, t) {
        let { [e]: n, ...o } = f.getState().flows,
          l = null != n ? n : m(e);
        if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t)
          (0, s.j)(() => {
            f.setState({
              flows: {
                ...o,
                [e]: {
                  type: e,
                  lastStep: null,
                  lastTimestamp: null,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  skipped: !1,
                },
              },
              currentFlow: e,
            });
          });
      }
      function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = e;
        if (e === i.MK.ANY) {
          var l;
          o =
            null !== (l = f.getState().activeFlow()) && void 0 !== l
              ? l
              : i.MK.UNKNOWN;
        }
        let { [o]: r, ...a } = f.getState().flows,
          c = null != r ? r : m(o);
        if (null != c && null != c.currentStep && c.currentStep !== t)
          (0, s.j)(() => {
            f.setState({
              flows: {
                ...a,
                [o]: {
                  ...c,
                  lastStep: c.currentStep,
                  lastTimestamp: c.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: o,
            });
          });
      }
      f.subscribe(
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === i.MK.UNKNOWN) return;
                let t = "".concat(d, "-").concat(e.type);
                e.ended
                  ? (l.K.remove(t), l.K.remove(u))
                  : (l.K.set("".concat(d, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    l.K.set(u, e.type));
              })(e),
              a.default.track(
                c.rMx.NUO_TRANSITION,
                {
                  flow_type: e.type,
                  from_step: e.lastStep,
                  to_step: e.currentStep,
                  seconds_on_from_step:
                    "function" !=
                    typeof (null === (t = e.lastTimestamp) || void 0 === t
                      ? void 0
                      : t.getTime)
                      ? 0
                      : (e.currentTimestamp.getTime() -
                          e.lastTimestamp.getTime()) /
                        1e3,
                },
                { flush: !0 },
              ),
              e.ended)
            ) {
              let t = { ...f.getState().flows };
              delete t[e.type],
                (0, s.j)(() => {
                  f.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
      );
      function g() {
        return null != f.getState().activeFlow();
      }
      t.Z = {
        flowStart: _,
        flowStepOrStart: function (e, t) {
          g() ? p(e, t) : _(e, t);
        },
        flowStep: p,
        hasActiveFlow: g,
      };
    },
    361207: function (e, t, n) {
      n.d(t, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return f;
        },
        t3: function () {
          return m;
        },
        w4: function () {
          return c;
        },
      });
      var o = n(525654),
        s = n.n(o),
        l = n(271579),
        r = n(314897),
        a = n(981631);
      let i = "linux";
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(a.fzT.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function u() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = s().os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? i
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [i]: "Linux" }[u(e)];
      }
      function m() {
        let e = u();
        return c(e, !1, e === i ? "tar.gz" : null);
      }
      function f(e, t, n) {
        let o = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.ZP)(
              null != o
                ? o
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.WS)(),
              },
            );
          case "Android":
            return (0, l.ZP)(
              null != o ? o : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.WS)(),
              },
            );
          default:
            return null != o ? o : "https://www.discord.com";
        }
      }
    },
    809784: function (e, t, n) {
      e.exports = {
        formHeader: "formHeader_c1a031",
        formContent: "formContent_c1a031",
        formImage: "formImage_c1a031",
        formTitle: "formTitle_c1a031",
        formBody: "formBody_c1a031",
        formItem: "formItem_c1a031",
        logoutButton: "logoutButton_c1a031",
        closeButton: "closeButton_c1a031",
        successContent: "successContent_c1a031",
        successTitle: "successTitle_c1a031",
        successPromotion: "successPromotion_c1a031",
        successImage: "successImage_c1a031",
        modalLight: "modalLight_c1a031",
      };
    },
  },
]);
//# sourceMappingURL=60fb77b4740a36ce0e7c.js.map
