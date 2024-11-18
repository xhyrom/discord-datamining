"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20727"],
  {
    56831: function (e) {
      e.exports = "/assets/a015a0312440484d2ee0.svg";
    },
    771308: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return s;
        },
        hp: function () {
          return d;
        },
        wE: function () {
          return c;
        },
      });
      var l = n(544891),
        r = n(570140),
        a = n(959776),
        i = n(626135),
        u = n(723359),
        o = n(981631);
      function s(e, t) {
        return (
          (0, a.Z)(e, t),
          i.default.track(o.rMx.AGE_GATE_ACTION, {
            source: t,
            action: u.Al.AGE_GATE_SUBMITTED,
          }),
          l.tn
            .patch({
              url: o.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
              rejectWithError: !1,
            })
            .then((e) => {
              let n = e.body;
              r.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                i.default.track(o.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: u.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function c(e) {
        r.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          i.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: u.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function d(e) {
        r.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          i.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: u.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var l = n(200651),
        r = n(192379),
        a = n(120356),
        i = n.n(a),
        u = n(913527),
        o = n.n(u),
        s = n(481060),
        c = n(285888),
        d = n(388032),
        f = n(49872);
      let _ = o()().localeData().months(),
        p = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        m = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: _[e],
        })),
        E = /[a-zA-Z0-9]/;
      function A(e) {
        let { options: t, selectOption: n, children: a } = e,
          [i, u] = r.useState("");
        r.useEffect(() => {
          if ("" !== i) {
            let e = setTimeout(() => u(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [i, u]);
        let o = r.useCallback(
          (e) => {
            if (E.test(e.key)) {
              let l = "".concat(i).concat(e.key.toLowerCase()),
                r = t.find((e) => e.label.toLowerCase().startsWith(l));
              null != r && n(r.value), u(l);
            }
          },
          [n, u, i, t],
        );
        return (0, l.jsx)("div", { onKeyDown: o, children: a });
      }
      function T() {
        let e = o()().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          l = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === l) && ((t = 0), (n = 1), (l = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: l, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let N = r.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: a,
            onChange: u,
            onPopulated: _,
            error: E,
            autoFocus: N,
            required: h,
          } = e,
          {
            day: y,
            setDay: g,
            month: S,
            setMonth: v,
            year: G,
            setYear: C,
          } = (function (e) {
            let t = null,
              n = null,
              l = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (l = e.year()));
            let [a, i] = r.useState(t),
              [u, o] = r.useState(n),
              [s, c] = r.useState(l);
            return {
              day: a,
              setDay: i,
              month: u,
              setMonth: o,
              year: s,
              setYear: c,
            };
          })(n),
          M = r.useMemo(
            () =>
              null != y && null != S && null != G
                ? o()("".concat(y, "/").concat(S, "/").concat(G), "DD/MM/YYYY")
                : null,
            [y, S, G],
          );
        r.useEffect(() => {
          u((null == M ? void 0 : M.isValid()) ? M : null);
        }, [M, u]);
        let x = E;
        null != M && !M.isValid() && (x = d.intl.string(d.t.udnqh4));
        let U = (function () {
            let e = new Date().getFullYear(),
              t = r.useRef(
                Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                })),
              );
            return (
              r.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [w, O] = r.useState(N ? 0 : -1),
          b = r.useRef(null),
          R = r.useRef(null),
          D = r.useRef(null),
          I = r.useMemo(T, []),
          k = r.useCallback(() => {
            var e, t, n, l;
            switch (null === (e = I[w]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = b.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = R.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (l = D.current) || void 0 === l || l.focus();
            }
          }, [w, b, R, D, I]);
        r.useEffect(() => {
          setTimeout(k, 500);
        }, []),
          r.useEffect(() => {
            if (w >= I.length) {
              null == _ || _();
              return;
            }
            k();
          }, [w, k]);
        let j = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = I[e];
          switch (t) {
            case "day":
              j.push({
                key: "day",
                input: (0, l.jsx)(A, {
                  options: p,
                  selectOption: g,
                  children: (0, l.jsx)(c.Z, {
                    ref: b,
                    className: f.__invalid_inputDay,
                    "aria-label": d.intl.string(d.t.Voklra),
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, l.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.Voklra),
                    }),
                    options: p,
                    value: y,
                    onChange: (t) => {
                      let { value: n } = t;
                      g(n), O(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              j.push({
                key: "month",
                input: (0, l.jsx)(A, {
                  options: m,
                  selectOption: v,
                  children: (0, l.jsx)(c.Z, {
                    ref: R,
                    className: f.__invalid_inputMonth,
                    "aria-label": d.intl.string(d.t.UDlN8f),
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, l.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.UDlN8f),
                    }),
                    options: m,
                    value: S,
                    onChange: (t) => {
                      let { value: n } = t;
                      v(n), O(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              j.push({
                key: "year",
                input: (0, l.jsx)(A, {
                  options: U,
                  selectOption: C,
                  children: (0, l.jsx)(c.Z, {
                    ref: D,
                    className: f.__invalid_inputYear,
                    "aria-label": d.intl.string(d.t.ZWr5WF),
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, l.jsx)("span", {
                      "aria-hidden": !0,
                      children: d.intl.string(d.t.ZWr5WF),
                    }),
                    options: U,
                    value: G,
                    onChange: (t) => {
                      let { value: n } = t;
                      C(n), O(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, l.jsxs)("fieldset", {
          className: i()(f.container, a),
          children: [
            (0, l.jsx)(s.FormTitle, {
              tag: "legend",
              required: h,
              error: x,
              children: d.intl.string(d.t.xNpFJy),
            }),
            (0, l.jsx)("div", {
              className: f.inputs,
              children: j.map((e, t) => {
                let { key: n, input: r } = e;
                return (0, l.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[n], children: r },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = N;
    },
    298237: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        a = n(990547),
        i = n(442837),
        u = n(481060),
        o = n(390885),
        s = n(594174),
        c = n(626135),
        d = n(63063),
        f = n(771308),
        _ = n(13430),
        p = n(723359),
        m = n(981631),
        E = n(630724),
        A = n(388032),
        T = n(735546);
      function N(e) {
        let { transitionState: t, onClose: n } = e,
          [N, h] = r.useState(null),
          [y, g] = r.useState(null),
          [S, v] = r.useState(!1),
          G = r.createRef(),
          C = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
          M = r.createRef();
        r.useEffect(() => {
          o.Z.flowStep(E.MK.ANY, E.FF.AGE_GATE),
            c.default.track(m.rMx.OPEN_MODAL, { type: "Claim Age Gate" });
        }, []),
          r.useEffect(() => {
            (null == C ? void 0 : C.nsfwAllowed) != null && n();
          }, [C, n]);
        let x = async (e) => {
            if ((e.preventDefault(), null != N)) {
              v(!0);
              try {
                await f.Av(N, m.jXE.CLAIM_ACCOUNT_MODAL);
              } catch (e) {
                if (null != e.body && null != e.body.date_of_birth)
                  o.Z.flowStep(E.MK.ANY, E.FF.AGE_GATE_UNDERAGE),
                    f.wE(p.L0.CLAIM_ACCOUNT),
                    f.hp(p.L0.CLAIM_ACCOUNT),
                    n();
                else {
                  var t;
                  (null == e
                    ? void 0
                    : null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.username) != null
                    ? g(A.intl.string(A.t["TGg/2t"]))
                    : g(null == e ? void 0 : e.body.message);
                }
              }
              v(!1);
            }
          },
          U = r.useCallback(() => {
            var e;
            null === (e = M.current) || void 0 === e || e.focus();
          }, [M]);
        return (0, l.jsx)(u.ModalRoot, {
          transitionState: t,
          size: u.ModalSize.DYNAMIC,
          "aria-label": A.intl.string(A.t.QpSKo6),
          className: T.modal,
          impression: {
            impressionName: a.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 },
          },
          children: (0, l.jsxs)(u.ModalContent, {
            className: T.content,
            children: [
              (0, l.jsx)("div", { className: T.image }),
              (0, l.jsxs)("form", {
                onSubmit: x,
                children: [
                  (0, l.jsx)(u.Heading, {
                    className: T.title,
                    variant: "heading-xl/semibold",
                    children: A.intl.string(A.t.QpSKo6),
                  }),
                  (0, l.jsx)(u.Text, {
                    color: "header-secondary",
                    className: T.description,
                    variant: "text-md/normal",
                    children: A.intl.format(A.t.EcJBEB, {
                      helpURL: d.Z.getArticleURL(m.BhN.AGE_GATE),
                    }),
                  }),
                  (0, l.jsx)(_.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: T.formItem,
                    label: A.intl.string(A.t.rhBeKS),
                    name: "birthday",
                    onChange: (e) => h(e),
                    onPopulated: U,
                    error: y,
                    value: N,
                    ref: G,
                  }),
                  (0, l.jsx)(u.Button, {
                    buttonRef: M,
                    type: "submit",
                    size: u.Button.Sizes.LARGE,
                    submitting: S,
                    disabled: null == N,
                    fullWidth: !0,
                    children: A.intl.string(A.t.i4jeWV),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    959776: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(913527),
        r = n.n(l),
        a = n(626135),
        i = n(981631);
      function u(e, t) {
        a.default.track(i.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > r()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    630724: function (e, t, n) {
      var l, r, a, i, u, o, s, c, d, f;
      n.d(t, {
        EW: function () {
          return u;
        },
        FF: function () {
          return r;
        },
        MK: function () {
          return l;
        },
        X2: function () {
          return i;
        },
        mx: function () {
          return a;
        },
      }),
        ((o = l || (l = {})).UNKNOWN = "unknown"),
        (o.ANY = "any"),
        (o.INVITE = "invite"),
        (o.ORGANIC = "organic_registration"),
        (o.ORGANIC_MARKETING = "organic_marketing"),
        (o.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (o.CREATE_GUILD = "create_guild"),
        ((s = r || (r = {})).AGE_GATE = "age_gate"),
        (s.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = a || (a = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = i || (i = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((f = u || (u = {})).NUF_STARTED = "nuf_started"),
        (f.AGE_GATE = "age_gate"),
        (f.NUF_COMPLETE = "nuf_complete"),
        (f.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var l = n(905837),
        r = n(280836),
        a = n(731965),
        i = n(433517),
        u = n(710845),
        o = n(626135),
        s = n(630724),
        c = n(981631);
      let d = "UserFlowAnalyticsStore_current",
        f = "UserFlowAnalyticsStore";
      function _(e) {
        if (e === s.MK.UNKNOWN) return null;
        let t = i.K.get("".concat(f, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...l } = t;
        return 1 !== n ? null : l;
      }
      new u.Z("UserFlowAnalytics");
      let p = (0, l.Ue)()(
        (0, r.XR)((e, t) => ({
          flows: {},
          currentFlow: null,
          activeFlow: () => {
            var e;
            let n =
              null !== (e = t().currentFlow) && void 0 !== e ? e : i.K.get(d);
            if (null == n) return null;
            let { [n]: l } = t().flows,
              r = null != l ? l : _(n);
            return (null == r ? void 0 : r.currentStep) != null ? n : null;
          },
        })),
      );
      function m(e, t) {
        let { [e]: n, ...l } = p.getState().flows,
          r = null != n ? n : _(e);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
          (0, a.j)(() => {
            p.setState({
              flows: {
                ...l,
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
      function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = e;
        if (e === s.MK.ANY) {
          var r;
          l =
            null !== (r = p.getState().activeFlow()) && void 0 !== r
              ? r
              : s.MK.UNKNOWN;
        }
        let { [l]: i, ...u } = p.getState().flows,
          o = null != i ? i : _(l);
        if (null != o && null != o.currentStep && o.currentStep !== t)
          (0, a.j)(() => {
            p.setState({
              flows: {
                ...u,
                [l]: {
                  ...o,
                  lastStep: o.currentStep,
                  lastTimestamp: o.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: l,
            });
          });
      }
      p.subscribe(
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === s.MK.UNKNOWN) return;
                let t = "".concat(f, "-").concat(e.type);
                e.ended
                  ? (i.K.remove(t), i.K.remove(d))
                  : (i.K.set("".concat(f, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    i.K.set(d, e.type));
              })(e),
              o.default.track(
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
              let t = { ...p.getState().flows };
              delete t[e.type],
                (0, a.j)(() => {
                  p.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
      );
      function A() {
        return null != p.getState().activeFlow();
      }
      t.Z = {
        flowStart: m,
        flowStepOrStart: function (e, t) {
          A() ? E(e, t) : m(e, t);
        },
        flowStep: E,
        hasActiveFlow: A,
      };
    },
  },
]);
//# sourceMappingURL=8ba378c1a1782ecea983.js.map
