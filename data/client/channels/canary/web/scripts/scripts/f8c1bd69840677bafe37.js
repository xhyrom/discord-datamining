"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43689"],
  {
    56831: function (e) {
      e.exports = "/assets/a015a0312440484d2ee0.svg";
    },
    298237: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        a = n(990547),
        i = n(442837),
        o = n(481060),
        u = n(390885),
        s = n(594174),
        c = n(626135),
        f = n(63063),
        _ = n(771308),
        d = n(13430),
        p = n(723359),
        m = n(981631),
        A = n(630724),
        N = n(388032),
        g = n(602324);
      function E(e) {
        let { transitionState: t, onClose: n } = e,
          [E, S] = r.useState(null),
          [T, C] = r.useState(null),
          [v, w] = r.useState(!1),
          b = r.createRef(),
          U = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
          h = r.createRef();
        r.useEffect(() => {
          u.Z.flowStep(A.MK.ANY, A.FF.AGE_GATE),
            c.default.track(m.rMx.OPEN_MODAL, { type: "Claim Age Gate" });
        }, []),
          r.useEffect(() => {
            (null == U ? void 0 : U.nsfwAllowed) != null && n();
          }, [U, n]);
        let G = async (e) => {
            if ((e.preventDefault(), null != E)) {
              w(!0);
              try {
                await _.Av(E, m.jXE.CLAIM_ACCOUNT_MODAL);
              } catch (e) {
                if (null != e.body && null != e.body.date_of_birth)
                  u.Z.flowStep(A.MK.ANY, A.FF.AGE_GATE_UNDERAGE),
                    _.wE(p.L0.CLAIM_ACCOUNT),
                    _.hp(p.L0.CLAIM_ACCOUNT),
                    n();
                else {
                  var t;
                  (null == e
                    ? void 0
                    : null === (t = e.body) || void 0 === t
                      ? void 0
                      : t.username) != null
                    ? C(N.intl.string(N.t["TGg/2t"]))
                    : C(null == e ? void 0 : e.body.message);
                }
              }
              w(!1);
            }
          },
          y = r.useCallback(() => {
            var e;
            null === (e = h.current) || void 0 === e || e.focus();
          }, [h]);
        return (0, l.jsx)(o.ModalRoot, {
          transitionState: t,
          size: o.ModalSize.DYNAMIC,
          "aria-label": N.intl.string(N.t.QpSKo6),
          className: g.modal,
          impression: {
            impressionName: a.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !1 },
          },
          children: (0, l.jsxs)(o.ModalContent, {
            className: g.content,
            children: [
              (0, l.jsx)("div", { className: g.image }),
              (0, l.jsxs)("form", {
                onSubmit: G,
                children: [
                  (0, l.jsx)(o.Heading, {
                    className: g.title,
                    variant: "heading-xl/semibold",
                    children: N.intl.string(N.t.QpSKo6),
                  }),
                  (0, l.jsx)(o.Text, {
                    color: "header-secondary",
                    className: g.description,
                    variant: "text-md/normal",
                    children: N.intl.format(N.t.EcJBEB, {
                      helpURL: f.Z.getArticleURL(m.BhN.AGE_GATE),
                    }),
                  }),
                  (0, l.jsx)(d.Z, {
                    required: !0,
                    autoFocus: !0,
                    wrapperClassName: g.formItem,
                    label: N.intl.string(N.t.rhBeKS),
                    name: "birthday",
                    onChange: (e) => S(e),
                    onPopulated: y,
                    error: T,
                    value: E,
                    ref: b,
                  }),
                  (0, l.jsx)(o.Button, {
                    buttonRef: h,
                    type: "submit",
                    size: o.Button.Sizes.LARGE,
                    submitting: v,
                    disabled: null == E,
                    fullWidth: !0,
                    children: N.intl.string(N.t.i4jeWV),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    630724: function (e, t, n) {
      var l, r, a, i, o, u, s, c, f, _;
      n.d(t, {
        EW: function () {
          return o;
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
        ((u = l || (l = {})).UNKNOWN = "unknown"),
        (u.ANY = "any"),
        (u.INVITE = "invite"),
        (u.ORGANIC = "organic_registration"),
        (u.ORGANIC_MARKETING = "organic_marketing"),
        (u.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (u.CREATE_GUILD = "create_guild"),
        ((s = r || (r = {})).AGE_GATE = "age_gate"),
        (s.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = a || (a = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((f = i || (i = {})).GUILD_TEMPLATES = "guild_templates"),
        (f.GUILD_CREATE = "guild_create"),
        (f.CREATION_INTENT = "creation_intent"),
        (f.CHANNEL_PROMPT = "channel_prompt"),
        (f.JOIN_GUILD = "join_guild"),
        (f.SUCCESS = "create_success"),
        ((_ = o || (o = {})).NUF_STARTED = "nuf_started"),
        (_.AGE_GATE = "age_gate"),
        (_.NUF_COMPLETE = "nuf_complete"),
        (_.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var l = n(15729),
        r = n(877124),
        a = n(731965),
        i = n(433517),
        o = n(710845),
        u = n(626135),
        s = n(630724),
        c = n(981631);
      let f = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === s.MK.UNKNOWN) return null;
        let t = i.K.get("".concat(_, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...l } = t;
        return 1 !== n ? null : l;
      }
      new o.Z("UserFlowAnalytics");
      let p = (0, l.U)()(
        (0, r.XR)((e, t) => ({
          flows: {},
          currentFlow: null,
          activeFlow: () => {
            var e;
            let n =
              null !== (e = t().currentFlow) && void 0 !== e ? e : i.K.get(f);
            if (null == n) return null;
            let { [n]: l } = t().flows,
              r = null != l ? l : d(n);
            return (null == r ? void 0 : r.currentStep) != null ? n : null;
          },
        })),
      );
      function m(e, t) {
        let { [e]: n, ...l } = p.getState().flows,
          r = null != n ? n : d(e);
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
      function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = e;
        if (e === s.MK.ANY) {
          var r;
          l =
            null !== (r = p.getState().activeFlow()) && void 0 !== r
              ? r
              : s.MK.UNKNOWN;
        }
        let { [l]: i, ...o } = p.getState().flows,
          u = null != i ? i : d(l);
        if (null != u && null != u.currentStep && u.currentStep !== t)
          (0, a.j)(() => {
            p.setState({
              flows: {
                ...o,
                [l]: {
                  ...u,
                  lastStep: u.currentStep,
                  lastTimestamp: u.currentTimestamp,
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
                let t = "".concat(_, "-").concat(e.type);
                e.ended
                  ? (i.K.remove(t), i.K.remove(f))
                  : (i.K.set("".concat(_, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    i.K.set(f, e.type));
              })(e),
              u.default.track(
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
      function N() {
        return null != p.getState().activeFlow();
      }
      t.Z = {
        flowStart: m,
        flowStepOrStart: function (e, t) {
          N() ? A(e, t) : m(e, t);
        },
        flowStep: A,
        hasActiveFlow: N,
      };
    },
    342746: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_a57e6a",
          title: "title_a57e6a",
          inputs: "inputs_a57e6a",
          day: "day_a57e6a",
          month: "month_a57e6a",
          year: "year_a57e6a",
          errors: "errors_a57e6a",
        }),
      );
    },
    602324: function (e, t, n) {
      e.exports = {
        modal: "modal_f4abc8",
        content: "content_f4abc8",
        image: "image_f4abc8",
        title: "title_f4abc8",
        description: "description_f4abc8",
        formItem: "formItem_f4abc8",
      };
    },
    55161: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
  },
]);
//# sourceMappingURL=f8c1bd69840677bafe37.js.map
