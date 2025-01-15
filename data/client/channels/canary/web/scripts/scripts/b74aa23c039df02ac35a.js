"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60827"],
  {
    833310: function (t) {
      t.exports = "/assets/b4a7081edd373f342f71.svg";
    },
    612317: function (t) {
      t.exports = "/assets/2e92c54e76a6cadef895.svg";
    },
    324239: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return C;
          },
        }),
        n(47120);
      var o = n(200651),
        l = n(192379),
        s = n(481060),
        r = n(893776),
        i = n(809206),
        a = n(600164),
        c = n(390885),
        u = n(626135),
        d = n(361207),
        m = n(981631),
        f = n(630724),
        _ = n(388032),
        p = n(232864);
      function g(t) {
        let {
            email: e,
            setEmail: n,
            claimRequired: u,
            onSuccess: d,
            onClose: m,
          } = t,
          [g, N] = l.useState(),
          [C, S] = l.useState(""),
          [T, x] = l.useState(""),
          [A, I] = l.useState(!1);
        l.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT), []);
        let v = async (t) => {
          t.preventDefault(), I(!0), N(""), x("");
          try {
            await (0, i.S2)({ email: e, password: C }), I(!1), d();
          } catch (t) {
            var n, o;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.email) && N(t.body.email),
              (null == t
                ? void 0
                : null === (o = t.body) || void 0 === o
                  ? void 0
                  : o.password) && x(t.body.password),
              I(!1);
          }
        };
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsxs)(s.ModalHeader, {
              className: p.formHeader,
              direction: a.Z.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, o.jsx)("div", { className: p.formImage }),
                (0, o.jsx)(s.Heading, {
                  className: p.formTitle,
                  variant: "heading-xl/semibold",
                  children: _.intl.string(_.t.uQShv7),
                }),
                (0, o.jsx)(s.Text, {
                  className: p.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u
                    ? _.intl.string(_.t.sW28gY)
                    : _.intl.string(_.t["gP/vPT"]),
                }),
                (0, o.jsx)(s.ModalCloseButton, {
                  className: p.closeButton,
                  onClick: m,
                }),
              ],
            }),
            (0, o.jsx)(s.ModalContent, {
              children: (0, o.jsxs)("form", {
                className: p.formContent,
                onSubmit: v,
                children: [
                  (0, o.jsx)(s.FormItem, {
                    title: _.intl.string(_.t.dI4d4e),
                    className: p.formItem,
                    children: (0, o.jsx)(s.TextInput, {
                      value: e,
                      error: g,
                      onChange: (t) => n(t),
                      autoFocus: !0,
                    }),
                  }),
                  (0, o.jsx)(s.FormItem, {
                    title: _.intl.string(_.t["CIGa+/"]),
                    className: p.formItem,
                    children: (0, o.jsx)(s.TextInput, {
                      type: "password",
                      value: C,
                      error: T,
                      onChange: (t) => S(t),
                    }),
                  }),
                  (0, o.jsx)(s.Button, {
                    type: "submit",
                    size: s.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: A,
                    disabled: 0 === e.length || 0 === C.length,
                    children: _.intl.string(_.t.fiNVio),
                  }),
                  u &&
                    (0, o.jsx)(s.Button, {
                      className: p.logoutButton,
                      color: s.Button.Colors.PRIMARY,
                      look: s.Button.Looks.LINK,
                      size: s.Button.Sizes.NONE,
                      onClick: () => {
                        r.Z.logout(), m();
                      },
                      children: _.intl.string(_.t["2jxGen"]),
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function N(t) {
        let { email: e, claimRequired: n, onClose: r } = t,
          i = n ? _.t.D7trIC : _.t.JNWX7O;
        function g() {
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
          l.useEffect(
            () => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT_SUCCESS),
            [],
          ),
          (0, o.jsxs)("div", {
            children: [
              (0, o.jsxs)(s.ModalContent, {
                className: p.successContent,
                children: [
                  !n &&
                    (0, o.jsx)(s.ModalCloseButton, {
                      className: p.closeButton,
                      onClick: r,
                    }),
                  (0, o.jsx)("div", { className: p.successImage }),
                  (0, o.jsx)(s.Text, {
                    className: p.successTitle,
                    variant: "text-lg/semibold",
                    children: _.intl.format(i, { email: e }),
                  }),
                  (0, o.jsx)(s.Text, {
                    className: p.successPromotion,
                    variant: "text-md/normal",
                    children: _.intl.string(_.t.eXqM2d),
                  }),
                ],
              }),
              n
                ? (0, o.jsx)(s.ModalFooter, {
                    direction: a.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(s.Button, {
                      size: s.Button.Sizes.LARGE,
                      onClick: r,
                      children: _.intl.string(_.t.BddRzc),
                    }),
                  })
                : (0, o.jsx)(s.ModalFooter, {
                    direction: a.Z.Direction.VERTICAL,
                    children: (0, o.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      size: s.Button.Sizes.LARGE,
                      onClick: g,
                      children: _.intl.string(_.t.ygArIS),
                    }),
                  }),
            ],
          })
        );
      }
      function C(t) {
        let { onClose: e, transitionState: n, claimRequired: r = !1 } = t,
          [i, a] = l.useState(""),
          [c, u] = l.useState(!1);
        return c
          ? (0, o.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(N, {
                email: i,
                claimRequired: r,
                onClose: e,
              }),
            })
          : (0, o.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(g, {
                email: i,
                setEmail: a,
                claimRequired: r,
                onSuccess: () => u(!0),
                onClose: e,
              }),
            });
      }
    },
    630724: function (t, e, n) {
      var o, l, s, r, i, a, c, u, d, m;
      n.d(e, {
        EW: function () {
          return i;
        },
        FF: function () {
          return l;
        },
        MK: function () {
          return o;
        },
        X2: function () {
          return r;
        },
        mx: function () {
          return s;
        },
      }),
        ((a = o || (o = {})).UNKNOWN = "unknown"),
        (a.ANY = "any"),
        (a.INVITE = "invite"),
        (a.ORGANIC = "organic_registration"),
        (a.ORGANIC_MARKETING = "organic_marketing"),
        (a.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (a.CREATE_GUILD = "create_guild"),
        ((c = l || (l = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = s || (s = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = r || (r = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((m = i || (i = {})).NUF_STARTED = "nuf_started"),
        (m.AGE_GATE = "age_gate"),
        (m.NUF_COMPLETE = "nuf_complete"),
        (m.HUB_CONNECTION = "hub_connection");
    },
    390885: function (t, e, n) {
      var o = n(15729),
        l = n(877124),
        s = n(731965),
        r = n(433517),
        i = n(710845),
        a = n(626135),
        c = n(630724),
        u = n(981631);
      let d = "UserFlowAnalyticsStore_current",
        m = "UserFlowAnalyticsStore";
      function f(t) {
        if (t === c.MK.UNKNOWN) return null;
        let e = r.K.get("".concat(m, "-").concat(t));
        if (null == e) return null;
        let { version: n, ...o } = e;
        return 1 !== n ? null : o;
      }
      new i.Z("UserFlowAnalytics");
      let _ = (0, o.U)()(
        (0, l.XR)((t, e) => ({
          flows: {},
          currentFlow: null,
          activeFlow: () => {
            var t;
            let n =
              null !== (t = e().currentFlow) && void 0 !== t ? t : r.K.get(d);
            if (null == n) return null;
            let { [n]: o } = e().flows,
              l = null != o ? o : f(n);
            return (null == l ? void 0 : l.currentStep) != null ? n : null;
          },
        })),
      );
      function p(t, e) {
        let { [t]: n, ...o } = _.getState().flows,
          l = null != n ? n : f(t);
        if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== e)
          (0, s.j)(() => {
            _.setState({
              flows: {
                ...o,
                [t]: {
                  type: t,
                  lastStep: null,
                  lastTimestamp: null,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  skipped: !1,
                },
              },
              currentFlow: t,
            });
          });
      }
      function g(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = t;
        if (t === c.MK.ANY) {
          var l;
          o =
            null !== (l = _.getState().activeFlow()) && void 0 !== l
              ? l
              : c.MK.UNKNOWN;
        }
        let { [o]: r, ...i } = _.getState().flows,
          a = null != r ? r : f(o);
        if (null != a && null != a.currentStep && a.currentStep !== e)
          (0, s.j)(() => {
            _.setState({
              flows: {
                ...i,
                [o]: {
                  ...a,
                  lastStep: a.currentStep,
                  lastTimestamp: a.currentTimestamp,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: o,
            });
          });
      }
      _.subscribe(
        (t) => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0),
        (t) => {
          var e;
          if (null != t) {
            if (
              (!(function (t) {
                if (t.type === c.MK.UNKNOWN) return;
                let e = "".concat(m, "-").concat(t.type);
                t.ended
                  ? (r.K.remove(e), r.K.remove(d))
                  : (r.K.set("".concat(m, "-").concat(t.type), {
                      ...t,
                      version: 1,
                    }),
                    r.K.set(d, t.type));
              })(t),
              a.default.track(
                u.rMx.NUO_TRANSITION,
                {
                  flow_type: t.type,
                  from_step: t.lastStep,
                  to_step: t.currentStep,
                  seconds_on_from_step:
                    "function" !=
                    typeof (null === (e = t.lastTimestamp) || void 0 === e
                      ? void 0
                      : e.getTime)
                      ? 0
                      : (t.currentTimestamp.getTime() -
                          t.lastTimestamp.getTime()) /
                        1e3,
                },
                { flush: !0 },
              ),
              t.ended)
            ) {
              let e = { ..._.getState().flows };
              delete e[t.type],
                (0, s.j)(() => {
                  _.setState({ flows: e, currentFlow: null });
                });
            }
          }
        },
      );
      function N() {
        return null != _.getState().activeFlow();
      }
      e.Z = {
        flowStart: p,
        flowStepOrStart: function (t, e) {
          N() ? g(t, e) : p(t, e);
        },
        flowStep: g,
        hasActiveFlow: N,
      };
    },
    232864: function (t, e, n) {
      t.exports = {
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
//# sourceMappingURL=b74aa23c039df02ac35a.js.map
