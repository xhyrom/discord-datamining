"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1677"],
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
            return N;
          },
        }),
        n(47120);
      var o = n(735250),
        s = n(470079),
        l = n(481060),
        r = n(893776),
        a = n(809206),
        i = n(600164),
        c = n(390885),
        u = n(626135),
        d = n(361207),
        m = n(981631),
        f = n(630724),
        _ = n(689938),
        p = n(35928);
      function C(e) {
        let {
            email: t,
            setEmail: n,
            claimRequired: u,
            onSuccess: d,
            onClose: m,
          } = e,
          [C, g] = s.useState(),
          [N, A] = s.useState(""),
          [S, T] = s.useState(""),
          [I, x] = s.useState(!1);
        s.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT), []);
        let M = async (e) => {
          e.preventDefault(), x(!0), g(""), T("");
          try {
            await (0, a.S2)({ email: t, password: N }), x(!1), d();
          } catch (e) {
            var n, o;
            (null == e
              ? void 0
              : null === (n = e.body) || void 0 === n
                ? void 0
                : n.email) && g(e.body.email),
              (null == e
                ? void 0
                : null === (o = e.body) || void 0 === o
                  ? void 0
                  : o.password) && T(e.body.password),
              x(!1);
          }
        };
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: p.formHeader,
              direction: i.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, o.jsx)("div", { className: p.formImage }),
                (0, o.jsx)(l.Heading, {
                  className: p.formTitle,
                  variant: "heading-xl/semibold",
                  children: _.Z.Messages.FINISH_SIGNING_UP,
                }),
                (0, o.jsx)(l.Text, {
                  className: p.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u
                    ? _.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY
                    : _.Z.Messages.CLAIM_ACCOUNT_BODY_2,
                }),
                (0, o.jsx)(l.ModalCloseButton, {
                  className: p.closeButton,
                  onClick: m,
                }),
              ],
            }),
            (0, o.jsx)(l.ModalContent, {
              children: (0, o.jsxs)("form", {
                className: p.formContent,
                onSubmit: M,
                children: [
                  (0, o.jsx)(l.FormItem, {
                    title: _.Z.Messages.FORM_LABEL_EMAIL,
                    className: p.formItem,
                    children: (0, o.jsx)(l.TextInput, {
                      value: t,
                      error: C,
                      onChange: (e) => n(e),
                      autoFocus: !0,
                    }),
                  }),
                  (0, o.jsx)(l.FormItem, {
                    title: _.Z.Messages.FORM_LABEL_PASSWORD,
                    className: p.formItem,
                    children: (0, o.jsx)(l.TextInput, {
                      type: "password",
                      value: N,
                      error: S,
                      onChange: (e) => A(e),
                    }),
                  }),
                  (0, o.jsx)(l.Button, {
                    type: "submit",
                    size: l.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: I,
                    disabled: 0 === t.length || 0 === N.length,
                    children: _.Z.Messages.CLAIM_ACCOUNT,
                  }),
                  u &&
                    (0, o.jsx)(l.Button, {
                      className: p.logoutButton,
                      color: l.Button.Colors.PRIMARY,
                      look: l.Button.Looks.LINK,
                      size: l.Button.Sizes.NONE,
                      onClick: () => {
                        r.Z.logout(), m();
                      },
                      children: _.Z.Messages.LOGOUT,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function g(e) {
        let { email: t, claimRequired: n, onClose: r } = e,
          a = n
            ? _.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO
            : _.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
        function C() {
          window.open((0, d.t3)(), "_blank"),
            u.default.track(m.rMx.DOWNLOAD_APP, {
              platform: (0, d.DW)(),
              ptb: !1,
              released: !0,
              has_e_mail: !0,
              referring_location: "Claim Modal",
              qr_code: !1,
            });
        }
        return (
          s.useEffect(
            () => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT_SUCCESS),
            [],
          ),
          (0, o.jsxs)("div", {
            children: [
              (0, o.jsxs)(l.ModalContent, {
                className: p.successContent,
                children: [
                  !n &&
                    (0, o.jsx)(l.ModalCloseButton, {
                      className: p.closeButton,
                      onClick: r,
                    }),
                  (0, o.jsx)("div", { className: p.successImage }),
                  (0, o.jsx)(l.Text, {
                    className: p.successTitle,
                    variant: "text-lg/semibold",
                    children: a.format({ email: t }),
                  }),
                  (0, o.jsx)(l.Text, {
                    className: p.successPromotion,
                    variant: "text-md/normal",
                    children: _.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04,
                  }),
                ],
              }),
              n
                ? (0, o.jsx)(l.ModalFooter, {
                    direction: i.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(l.Button, {
                      size: l.Button.Sizes.LARGE,
                      onClick: r,
                      children: _.Z.Messages.OKAY,
                    }),
                  })
                : (0, o.jsx)(l.ModalFooter, {
                    direction: i.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(l.Button, {
                      color: l.Button.Colors.BRAND,
                      size: l.Button.Sizes.LARGE,
                      onClick: C,
                      children: _.Z.Messages.CLAIM_ACCOUNT_GET_APP,
                    }),
                  }),
            ],
          })
        );
      }
      function N(e) {
        let { onClose: t, transitionState: n, claimRequired: r = !1 } = e,
          [a, i] = s.useState(""),
          [c, u] = s.useState(!1);
        return c
          ? (0, o.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(g, {
                email: a,
                claimRequired: r,
                onClose: t,
              }),
            })
          : (0, o.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(C, {
                email: a,
                setEmail: i,
                claimRequired: r,
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
      function C() {
        return null != f.getState().activeFlow();
      }
      t.Z = {
        flowStart: _,
        flowStepOrStart: function (e, t) {
          C() ? p(e, t) : _(e, t);
        },
        flowStep: p,
        hasActiveFlow: C,
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
    35928: function (e, t, n) {
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
      };
    },
  },
]);
//# sourceMappingURL=c09797d3033fc1000750.js.map
