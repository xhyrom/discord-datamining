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
          return o;
        },
        hp: function () {
          return _;
        },
        wE: function () {
          return c;
        },
      });
      var l = n(544891),
        a = n(570140),
        r = n(959776),
        s = n(626135),
        u = n(723359),
        i = n(981631);
      function o(e, t) {
        return (
          (0, r.Z)(e, t),
          s.default.track(i.rMx.AGE_GATE_ACTION, {
            source: t,
            action: u.Al.AGE_GATE_SUBMITTED,
          }),
          l.tn
            .patch({
              url: i.ANM.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then((e) => {
              let n = e.body;
              a.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                s.default.track(i.rMx.AGE_GATE_ACTION, {
                  source: t,
                  action: u.Al.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function c(e) {
        a.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          s.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: u.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function _(e) {
        a.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          s.default.track(i.rMx.AGE_GATE_ACTION, {
            source: e,
            action: u.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    13430: function (e, t, n) {
      n(47120), n(653041);
      var l = n(735250),
        a = n(470079),
        r = n(120356),
        s = n.n(r),
        u = n(913527),
        i = n.n(u),
        o = n(481060),
        c = n(285888),
        _ = n(689938),
        d = n(535701);
      let A = i()().localeData().months(),
        E = Array.from(Array(31).keys()).map((e) => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        f = Array.from(Array(12).keys()).map((e) => ({
          value: e + 1,
          label: A[e],
        })),
        p = /[a-zA-Z0-9]/;
      function m(e) {
        let { options: t, selectOption: n, children: r } = e,
          [s, u] = a.useState("");
        a.useEffect(() => {
          if ("" !== s) {
            let e = setTimeout(() => u(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [s, u]);
        let i = a.useCallback(
          (e) => {
            if (p.test(e.key)) {
              let l = "".concat(s).concat(e.key.toLowerCase()),
                a = t.find((e) => e.label.toLowerCase().startsWith(l));
              null != a && n(a.value), u(l);
            }
          },
          [n, u, s, t],
        );
        return (0, l.jsx)("div", { onKeyDown: i, children: r });
      }
      function T() {
        let e = i()().localeData().longDateFormat("L"),
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
      let G = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: u,
            onPopulated: A,
            error: p,
            autoFocus: G,
            required: N,
          } = e,
          {
            day: h,
            setDay: M,
            month: g,
            setMonth: y,
            year: S,
            setYear: v,
          } = (function (e) {
            let t = null,
              n = null,
              l = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (l = e.year()));
            let [r, s] = a.useState(t),
              [u, i] = a.useState(n),
              [o, c] = a.useState(l);
            return {
              day: r,
              setDay: s,
              month: u,
              setMonth: i,
              year: o,
              setYear: c,
            };
          })(n),
          O = a.useMemo(
            () =>
              null != h && null != g && null != S
                ? i()("".concat(h, "/").concat(g, "/").concat(S), "DD/MM/YYYY")
                : null,
            [h, g, S],
          );
        a.useEffect(() => {
          u((null == O ? void 0 : O.isValid()) ? O : null);
        }, [O, u]);
        let C = p;
        null != O &&
          !O.isValid() &&
          (C = _.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let D = (function () {
            let e = new Date().getFullYear(),
              t = a.useRef(
                Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                })),
              );
            return (
              a.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map((t) => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [R, x] = a.useState(G ? 0 : -1),
          U = a.useRef(null),
          w = a.useRef(null),
          I = a.useRef(null),
          b = a.useMemo(T, []),
          Z = a.useCallback(() => {
            var e, t, n, l;
            switch (null === (e = b[R]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = U.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = w.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (l = I.current) || void 0 === l || l.focus();
            }
          }, [R, U, w, I, b]);
        a.useEffect(() => {
          setTimeout(Z, 500);
        }, []),
          a.useEffect(() => {
            if (R >= b.length) {
              null == A || A();
              return;
            }
            Z();
          }, [R, Z]);
        let k = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = b[e];
          switch (t) {
            case "day":
              k.push({
                key: "day",
                input: (0, l.jsx)(m, {
                  options: E,
                  selectOption: M,
                  children: (0, l.jsx)(c.Z, {
                    ref: U,
                    className: d.__invalid_inputDay,
                    "aria-label": _.Z.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, l.jsx)("span", {
                      "aria-hidden": !0,
                      children: _.Z.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: E,
                    value: h,
                    onChange: (t) => {
                      let { value: n } = t;
                      M(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              k.push({
                key: "month",
                input: (0, l.jsx)(m, {
                  options: f,
                  selectOption: y,
                  children: (0, l.jsx)(c.Z, {
                    ref: w,
                    className: d.__invalid_inputMonth,
                    "aria-label": _.Z.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, l.jsx)("span", {
                      "aria-hidden": !0,
                      children: _.Z.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: f,
                    value: g,
                    onChange: (t) => {
                      let { value: n } = t;
                      y(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              k.push({
                key: "year",
                input: (0, l.jsx)(m, {
                  options: D,
                  selectOption: v,
                  children: (0, l.jsx)(c.Z, {
                    ref: I,
                    className: d.__invalid_inputYear,
                    "aria-label": _.Z.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: c.Z.MenuPlacements.TOP,
                    placeholder: (0, l.jsx)("span", {
                      "aria-hidden": !0,
                      children: _.Z.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: D,
                    value: S,
                    onChange: (t) => {
                      let { value: n } = t;
                      v(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, l.jsxs)("fieldset", {
          className: s()(d.container, r),
          children: [
            (0, l.jsx)(o.FormTitle, {
              tag: "legend",
              required: N,
              error: C,
              children: _.Z.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, l.jsx)("div", {
              className: d.inputs,
              children: k.map((e, t) => {
                let { key: n, input: a } = e;
                return (0, l.jsx)(
                  "div",
                  { tabIndex: t + 1, className: d[n], children: a },
                  n,
                );
              }),
            }),
          ],
        });
      });
      t.Z = G;
    },
    298237: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        r = n(990547),
        s = n(442837),
        u = n(481060),
        i = n(390885),
        o = n(594174),
        c = n(626135),
        _ = n(63063),
        d = n(771308),
        A = n(13430),
        E = n(723359),
        f = n(981631),
        p = n(630724),
        m = n(689938),
        T = n(988983);
      function G(e) {
        let { transitionState: t, onClose: n } = e,
          [G, N] = a.useState(null),
          [h, M] = a.useState(null),
          [g, y] = a.useState(!1),
          S = a.createRef(),
          v = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
          O = a.createRef();
        a.useEffect(() => {
          i.Z.flowStep(p.MK.ANY, p.FF.AGE_GATE),
            c.default.track(f.rMx.OPEN_MODAL, { type: "Claim Age Gate" });
        }, []),
          a.useEffect(() => {
            (null == v ? void 0 : v.nsfwAllowed) != null && n();
          }, [v, n]);
        let C = async (e) => {
            if ((e.preventDefault(), null != G)) {
              y(!0);
              try {
                await d.Av(G, f.jXE.CLAIM_ACCOUNT_MODAL);
              } catch (e) {
                if (null != e.body && null != e.body.date_of_birth)
                  i.Z.flowStep(p.MK.ANY, p.FF.AGE_GATE_UNDERAGE),
                    d.wE(E.L0.CLAIM_ACCOUNT),
                    d.hp(E.L0.CLAIM_ACCOUNT),
                    n();
                else {
                  var t;
                  (null == e
                    ? void 0
                    : null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.username) != null
                    ? M(m.Z.Messages.USER_SETTINGS_UPDATE_FAILURE)
                    : M(null == e ? void 0 : e.body.message);
                }
              }
              y(!1);
            }
          },
          D = a.useCallback(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
          }, [O]);
        return (0, l.jsx)(u.ModalRoot, {
          transitionState: t,
          size: u.ModalSize.DYNAMIC,
          "aria-label": m.Z.Messages.AGE_GATE_HEADER,
          className: T.modal,
          impression: {
            impressionName: r.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 },
          },
          children: (0, l.jsxs)(u.ModalContent, {
            className: T.content,
            children: [
              (0, l.jsx)("div", { className: T.image }),
              (0, l.jsxs)("form", {
                onSubmit: C,
                children: [
                  (0, l.jsx)(u.Heading, {
                    className: T.title,
                    variant: "heading-xl/semibold",
                    children: m.Z.Messages.AGE_GATE_HEADER,
                  }),
                  (0, l.jsx)(u.Text, {
                    color: "header-secondary",
                    className: T.description,
                    variant: "text-md/normal",
                    children: m.Z.Messages.AGE_GATE_BODY.format({
                      helpURL: _.Z.getArticleURL(f.BhN.AGE_GATE),
                    }),
                  }),
                  (0, l.jsx)(A.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: T.formItem,
                    label: m.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
                    name: "birthday",
                    onChange: (e) => N(e),
                    onPopulated: D,
                    error: h,
                    value: G,
                    ref: S,
                  }),
                  (0, l.jsx)(u.Button, {
                    buttonRef: O,
                    type: "submit",
                    size: u.Button.Sizes.LARGE,
                    submitting: g,
                    disabled: null == G,
                    fullWidth: !0,
                    children: m.Z.Messages.DONE,
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
        a = n.n(l),
        r = n(626135),
        s = n(981631);
      function u(e, t) {
        r.default.track(s.rMx.AGE_GATE_SUBMITTED, {
          dob: 18 > a()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    630724: function (e, t, n) {
      var l, a, r, s, u, i, o, c, _, d;
      n.d(t, {
        EW: function () {
          return u;
        },
        FF: function () {
          return a;
        },
        MK: function () {
          return l;
        },
        X2: function () {
          return s;
        },
        mx: function () {
          return r;
        },
      }),
        ((i = l || (l = {})).UNKNOWN = "unknown"),
        (i.ANY = "any"),
        (i.INVITE = "invite"),
        (i.ORGANIC = "organic_registration"),
        (i.ORGANIC_MARKETING = "organic_marketing"),
        (i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (i.CREATE_GUILD = "create_guild"),
        ((o = a || (a = {})).AGE_GATE = "age_gate"),
        (o.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = r || (r = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((_ = s || (s = {})).GUILD_TEMPLATES = "guild_templates"),
        (_.GUILD_CREATE = "guild_create"),
        (_.CREATION_INTENT = "creation_intent"),
        (_.CHANNEL_PROMPT = "channel_prompt"),
        (_.JOIN_GUILD = "join_guild"),
        (_.SUCCESS = "create_success"),
        ((d = u || (u = {})).NUF_STARTED = "nuf_started"),
        (d.AGE_GATE = "age_gate"),
        (d.NUF_COMPLETE = "nuf_complete"),
        (d.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var l = n(652874),
        a = n(731965),
        r = n(433517),
        s = n(710845),
        u = n(626135),
        i = n(630724),
        o = n(981631);
      let c = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === i.MK.UNKNOWN) return null;
        let t = r.K.get("".concat(_, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...l } = t;
        return 1 !== n ? null : l;
      }
      new s.Z("UserFlowAnalytics");
      let A = (0, l.Z)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e ? e : r.K.get(c);
          if (null == n) return null;
          let { [n]: l } = t().flows,
            a = null != l ? l : d(n);
          return (null == a ? void 0 : a.currentStep) != null ? n : null;
        },
      }));
      function E(e, t) {
        let { [e]: n, ...l } = A.getState().flows,
          r = null != n ? n : d(e);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== t)
          (0, a.j)(() => {
            A.setState({
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
      function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = e;
        if (e === i.MK.ANY) {
          var r;
          l =
            null !== (r = A.getState().activeFlow()) && void 0 !== r
              ? r
              : i.MK.UNKNOWN;
        }
        let { [l]: s, ...u } = A.getState().flows,
          o = null != s ? s : d(l);
        if (null != o && null != o.currentStep && o.currentStep !== t)
          (0, a.j)(() => {
            A.setState({
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
      A.subscribe(
        (e) => {
          var t;
          if (null != e) {
            if (
              (!(function (e) {
                if (e.type === i.MK.UNKNOWN) return;
                let t = "".concat(_, "-").concat(e.type);
                e.ended
                  ? (r.K.remove(t), r.K.remove(c))
                  : (r.K.set("".concat(_, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    r.K.set(c, e.type));
              })(e),
              u.default.track(
                o.rMx.NUO_TRANSITION,
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
              let t = { ...A.getState().flows };
              delete t[e.type],
                (0, a.j)(() => {
                  A.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
      );
      function p() {
        return null != A.getState().activeFlow();
      }
      t.Z = {
        flowStart: E,
        flowStepOrStart: function (e, t) {
          p() ? f(e, t) : E(e, t);
        },
        flowStep: f,
        hasActiveFlow: p,
      };
    },
  },
]);
//# sourceMappingURL=97bb0199917f183f5677.js.map
