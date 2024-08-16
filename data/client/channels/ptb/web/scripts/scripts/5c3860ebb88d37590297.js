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
            return I;
          },
        }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        l = n(120356),
        a = n.n(l),
        r = n(481060),
        c = n(893776),
        i = n(809206),
        u = n(600164),
        d = n(390885),
        m = n(626135),
        _ = n(361207),
        f = n(792125),
        C = n(981631),
        N = n(630724),
        A = n(689938),
        g = n(809784);
      function p(e) {
        let {
            email: t,
            setEmail: n,
            claimRequired: l,
            onSuccess: m,
            onClose: _,
          } = e,
          [p, T] = o.useState(),
          [I, S] = o.useState(""),
          [M, E] = o.useState(""),
          [x, L] = o.useState(!1);
        o.useEffect(() => d.Z.flowStep(N.MK.ANY, N.mx.CLAIM_ACCOUNT), []);
        let h = async (e) => {
          e.preventDefault(), L(!0), T(""), E("");
          try {
            await (0, i.S2)({ email: t, password: I }), L(!1), m();
          } catch (e) {
            var n, s;
            (null == e
              ? void 0
              : null === (n = e.body) || void 0 === n
                ? void 0
                : n.email) && T(e.body.email),
              (null == e
                ? void 0
                : null === (s = e.body) || void 0 === s
                  ? void 0
                  : s.password) && E(e.body.password),
              L(!1);
          }
        };
        return (0, s.jsxs)("div", {
          className: a()(g.modalLight, (0, f.Q)(C.BRd.LIGHT)),
          children: [
            (0, s.jsxs)(r.ModalHeader, {
              className: g.formHeader,
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, s.jsx)("div", { className: g.formImage }),
                (0, s.jsx)(r.Heading, {
                  className: g.formTitle,
                  variant: "heading-xl/semibold",
                  children: A.Z.Messages.FINISH_SIGNING_UP,
                }),
                (0, s.jsx)(r.Text, {
                  className: g.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: l
                    ? A.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY
                    : A.Z.Messages.CLAIM_ACCOUNT_BODY_2,
                }),
                (0, s.jsx)(r.ModalCloseButton, {
                  className: g.closeButton,
                  onClick: _,
                }),
              ],
            }),
            (0, s.jsx)(r.ModalContent, {
              children: (0, s.jsxs)("form", {
                className: g.formContent,
                onSubmit: h,
                children: [
                  (0, s.jsx)(r.FormItem, {
                    title: A.Z.Messages.FORM_LABEL_EMAIL,
                    className: g.formItem,
                    children: (0, s.jsx)(r.TextInput, {
                      value: t,
                      error: p,
                      onChange: (e) => n(e),
                      autoFocus: !0,
                    }),
                  }),
                  (0, s.jsx)(r.FormItem, {
                    title: A.Z.Messages.FORM_LABEL_PASSWORD,
                    className: g.formItem,
                    children: (0, s.jsx)(r.TextInput, {
                      type: "password",
                      value: I,
                      error: M,
                      onChange: (e) => S(e),
                    }),
                  }),
                  (0, s.jsx)(r.Button, {
                    type: "submit",
                    size: r.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: x,
                    disabled: 0 === t.length || 0 === I.length,
                    children: A.Z.Messages.CLAIM_ACCOUNT,
                  }),
                  l &&
                    (0, s.jsx)(r.Button, {
                      className: g.logoutButton,
                      color: r.Button.Colors.PRIMARY,
                      look: r.Button.Looks.LINK,
                      size: r.Button.Sizes.NONE,
                      onClick: () => {
                        c.Z.logout(), _();
                      },
                      children: A.Z.Messages.LOGOUT,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { email: t, claimRequired: n, onClose: l } = e,
          c = n
            ? A.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO
            : A.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
        function i() {
          window.open((0, _.t3)(), "_blank"),
            m.default.track(C.rMx.DOWNLOAD_APP, {
              platform: (0, _.DW)(),
              ptb: !1,
              released: !0,
              has_e_mail: !0,
              referring_location: "Claim Modal",
              qr_code: !1,
            });
        }
        return (
          o.useEffect(
            () => d.Z.flowStep(N.MK.ANY, N.mx.CLAIM_ACCOUNT_SUCCESS),
            [],
          ),
          (0, s.jsxs)("div", {
            className: a()(g.modalLight, (0, f.Q)(C.BRd.LIGHT)),
            children: [
              (0, s.jsxs)(r.ModalContent, {
                className: g.successContent,
                children: [
                  !n &&
                    (0, s.jsx)(r.ModalCloseButton, {
                      className: g.closeButton,
                      onClick: l,
                    }),
                  (0, s.jsx)("div", { className: g.successImage }),
                  (0, s.jsx)(r.Text, {
                    className: g.successTitle,
                    variant: "text-lg/semibold",
                    children: c.format({ email: t }),
                  }),
                  (0, s.jsx)(r.Text, {
                    className: g.successPromotion,
                    variant: "text-md/normal",
                    children: A.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04,
                  }),
                ],
              }),
              n
                ? (0, s.jsx)(r.ModalFooter, {
                    direction: u.Z.Direction.VERTICAL,
                    children: (0, s.jsx)(r.Button, {
                      size: r.Button.Sizes.LARGE,
                      onClick: l,
                      children: A.Z.Messages.OKAY,
                    }),
                  })
                : (0, s.jsx)(r.ModalFooter, {
                    direction: u.Z.Direction.VERTICAL,
                    children: (0, s.jsx)(r.Button, {
                      color: r.Button.Colors.BRAND,
                      size: r.Button.Sizes.LARGE,
                      onClick: i,
                      children: A.Z.Messages.CLAIM_ACCOUNT_GET_APP,
                    }),
                  }),
            ],
          })
        );
      }
      function I(e) {
        let { onClose: t, transitionState: n, claimRequired: l = !1 } = e,
          [a, c] = o.useState(""),
          [i, u] = o.useState(!1);
        return i
          ? (0, s.jsx)(r.ModalRoot, {
              transitionState: n,
              children: (0, s.jsx)(T, {
                email: a,
                claimRequired: l,
                onClose: t,
              }),
            })
          : (0, s.jsx)(r.ModalRoot, {
              transitionState: n,
              children: (0, s.jsx)(p, {
                email: a,
                setEmail: c,
                claimRequired: l,
                onSuccess: () => u(!0),
                onClose: t,
              }),
            });
      }
    },
    630724: function (e, t, n) {
      var s, o, l, a, r, c, i, u, d, m;
      n.d(t, {
        EW: function () {
          return r;
        },
        FF: function () {
          return o;
        },
        MK: function () {
          return s;
        },
        X2: function () {
          return a;
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
        ((d = a || (a = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((m = r || (r = {})).NUF_STARTED = "nuf_started"),
        (m.AGE_GATE = "age_gate"),
        (m.NUF_COMPLETE = "nuf_complete"),
        (m.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var s = n(652874),
        o = n(731965),
        l = n(433517),
        a = n(710845),
        r = n(626135),
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
      new a.Z("UserFlowAnalytics");
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
        let { [s]: a, ...r } = _.getState().flows,
          i = null != a ? a : m(s);
        if (null != i && null != i.currentStep && i.currentStep !== t)
          (0, o.j)(() => {
            _.setState({
              flows: {
                ...r,
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
              r.default.track(
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
//# sourceMappingURL=5c3860ebb88d37590297.js.map
