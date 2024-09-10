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
            return p;
          },
        }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        l = n(481060),
        r = n(893776),
        a = n(809206),
        c = n(600164),
        i = n(390885),
        u = n(626135),
        d = n(361207),
        m = n(981631),
        _ = n(630724),
        f = n(689938),
        C = n(35928);
      function N(e) {
        let {
            email: t,
            setEmail: n,
            claimRequired: u,
            onSuccess: d,
            onClose: m,
          } = e,
          [N, A] = o.useState(),
          [p, T] = o.useState(""),
          [g, S] = o.useState(""),
          [I, M] = o.useState(!1);
        o.useEffect(() => i.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT), []);
        let E = async (e) => {
          e.preventDefault(), M(!0), A(""), S("");
          try {
            await (0, a.S2)({ email: t, password: p }), M(!1), d();
          } catch (e) {
            var n, s;
            (null == e
              ? void 0
              : null === (n = e.body) || void 0 === n
                ? void 0
                : n.email) && A(e.body.email),
              (null == e
                ? void 0
                : null === (s = e.body) || void 0 === s
                  ? void 0
                  : s.password) && S(e.body.password),
              M(!1);
          }
        };
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)(l.ModalHeader, {
              className: C.formHeader,
              direction: c.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, s.jsx)("div", { className: C.formImage }),
                (0, s.jsx)(l.Heading, {
                  className: C.formTitle,
                  variant: "heading-xl/semibold",
                  children: f.Z.Messages.FINISH_SIGNING_UP,
                }),
                (0, s.jsx)(l.Text, {
                  className: C.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u
                    ? f.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY
                    : f.Z.Messages.CLAIM_ACCOUNT_BODY_2,
                }),
                (0, s.jsx)(l.ModalCloseButton, {
                  className: C.closeButton,
                  onClick: m,
                }),
              ],
            }),
            (0, s.jsx)(l.ModalContent, {
              children: (0, s.jsxs)("form", {
                className: C.formContent,
                onSubmit: E,
                children: [
                  (0, s.jsx)(l.FormItem, {
                    title: f.Z.Messages.FORM_LABEL_EMAIL,
                    className: C.formItem,
                    children: (0, s.jsx)(l.TextInput, {
                      value: t,
                      error: N,
                      onChange: (e) => n(e),
                      autoFocus: !0,
                    }),
                  }),
                  (0, s.jsx)(l.FormItem, {
                    title: f.Z.Messages.FORM_LABEL_PASSWORD,
                    className: C.formItem,
                    children: (0, s.jsx)(l.TextInput, {
                      type: "password",
                      value: p,
                      error: g,
                      onChange: (e) => T(e),
                    }),
                  }),
                  (0, s.jsx)(l.Button, {
                    type: "submit",
                    size: l.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: I,
                    disabled: 0 === t.length || 0 === p.length,
                    children: f.Z.Messages.CLAIM_ACCOUNT,
                  }),
                  u &&
                    (0, s.jsx)(l.Button, {
                      className: C.logoutButton,
                      color: l.Button.Colors.PRIMARY,
                      look: l.Button.Looks.LINK,
                      size: l.Button.Sizes.NONE,
                      onClick: () => {
                        r.Z.logout(), m();
                      },
                      children: f.Z.Messages.LOGOUT,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function A(e) {
        let { email: t, claimRequired: n, onClose: r } = e,
          a = n
            ? f.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO
            : f.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
        function N() {
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
          o.useEffect(
            () => i.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT_SUCCESS),
            [],
          ),
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)(l.ModalContent, {
                className: C.successContent,
                children: [
                  !n &&
                    (0, s.jsx)(l.ModalCloseButton, {
                      className: C.closeButton,
                      onClick: r,
                    }),
                  (0, s.jsx)("div", { className: C.successImage }),
                  (0, s.jsx)(l.Text, {
                    className: C.successTitle,
                    variant: "text-lg/semibold",
                    children: a.format({ email: t }),
                  }),
                  (0, s.jsx)(l.Text, {
                    className: C.successPromotion,
                    variant: "text-md/normal",
                    children: f.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04,
                  }),
                ],
              }),
              n
                ? (0, s.jsx)(l.ModalFooter, {
                    direction: c.Z.Direction.VERTICAL,
                    children: (0, s.jsx)(l.Button, {
                      size: l.Button.Sizes.LARGE,
                      onClick: r,
                      children: f.Z.Messages.OKAY,
                    }),
                  })
                : (0, s.jsx)(l.ModalFooter, {
                    direction: c.Z.Direction.VERTICAL,
                    children: (0, s.jsx)(l.Button, {
                      color: l.Button.Colors.BRAND,
                      size: l.Button.Sizes.LARGE,
                      onClick: N,
                      children: f.Z.Messages.CLAIM_ACCOUNT_GET_APP,
                    }),
                  }),
            ],
          })
        );
      }
      function p(e) {
        let { onClose: t, transitionState: n, claimRequired: r = !1 } = e,
          [a, c] = o.useState(""),
          [i, u] = o.useState(!1);
        return i
          ? (0, s.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, s.jsx)(A, {
                email: a,
                claimRequired: r,
                onClose: t,
              }),
            })
          : (0, s.jsx)(l.ModalRoot, {
              transitionState: n,
              children: (0, s.jsx)(N, {
                email: a,
                setEmail: c,
                claimRequired: r,
                onSuccess: () => u(!0),
                onClose: t,
              }),
            });
      }
    },
    630724: function (e, t, n) {
      var s, o, l, r, a, c, i, u, d, m;
      n.d(t, {
        EW: function () {
          return a;
        },
        FF: function () {
          return o;
        },
        MK: function () {
          return s;
        },
        X2: function () {
          return r;
        },
        mx: function () {
          return l;
        },
      }),
        ((c = s || (s = {})).UNKNOWN = "unknown"),
        (c.ANY = "any"),
        (c.INVITE = "invite"),
        (c.ORGANIC = "organic_registration"),
        (c.ORGANIC_MARKETING = "organic_marketing"),
        (c.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (c.CREATE_GUILD = "create_guild"),
        ((i = o || (o = {})).AGE_GATE = "age_gate"),
        (i.AGE_GATE_UNDERAGE = "age_gate_underage"),
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
      var s = n(652874),
        o = n(731965),
        l = n(433517),
        r = n(710845),
        a = n(626135),
        c = n(630724),
        i = n(981631);
      let u = "UserFlowAnalyticsStore_current",
        d = "UserFlowAnalyticsStore";
      function m(e) {
        if (e === c.MK.UNKNOWN) return null;
        let t = l.K.get("".concat(d, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...s } = t;
        return 1 !== n ? null : s;
      }
      new r.Z("UserFlowAnalytics");
      let _ = (0, s.Z)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e ? e : l.K.get(u);
          if (null == n) return null;
          let { [n]: s } = t().flows,
            o = null != s ? s : m(n);
          return (null == o ? void 0 : o.currentStep) != null ? n : null;
        },
      }));
      function f(e, t) {
        let { [e]: n, ...s } = _.getState().flows,
          l = null != n ? n : m(e);
        if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t)
          (0, o.j)(() => {
            _.setState({
              flows: {
                ...s,
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
      function C(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = e;
        if (e === c.MK.ANY) {
          var l;
          s =
            null !== (l = _.getState().activeFlow()) && void 0 !== l
              ? l
              : c.MK.UNKNOWN;
        }
        let { [s]: r, ...a } = _.getState().flows,
          i = null != r ? r : m(s);
        if (null != i && null != i.currentStep && i.currentStep !== t)
          (0, o.j)(() => {
            _.setState({
              flows: {
                ...a,
                [s]: {
                  ...i,
                  lastStep: i.currentStep,
                  lastTimestamp: i.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: s,
            });
          });
      }
      _.subscribe(
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === c.MK.UNKNOWN) return;
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
                i.rMx.NUO_TRANSITION,
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
              let t = { ..._.getState().flows };
              delete t[e.type],
                (0, o.j)(() => {
                  _.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
      );
      function N() {
        return null != _.getState().activeFlow();
      }
      t.Z = {
        flowStart: f,
        flowStepOrStart: function (e, t) {
          N() ? C(e, t) : f(e, t);
        },
        flowStep: C,
        hasActiveFlow: N,
      };
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
//# sourceMappingURL=022a9da929c48c7e47e5.js.map
