"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16325"],
  {
    176480: function (e) {
      e.exports = "/assets/9ebae403cd1cc21b469a.svg";
    },
    231239: function (e, t, n) {
      var o = n(990547),
        r = n(283693),
        i = n(570140),
        a = n(573261),
        c = n(981631);
      t.Z = {
        signup: (e, t) =>
          a.Z.post({
            url: c.ANM.HUB_WAITLIST_SIGNUP,
            body: { email: e, school: t },
            trackedActionData: {
              event: o.NetworkActionNames.HUB_WAITLIST_SIGNUP,
              properties: (e) => {
                var t;
                let n = !1,
                  o =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.email_domain;
                return (
                  null != o && (n = -1 !== o.split(".").indexOf("edu")),
                  (0, r.iG)({ is_edu_email: n })
                );
              },
            },
          }),
        sendVerificationEmail: async (e, t, n) =>
          (
            await a.Z.post({
              url: c.ANM.HUB_EMAIL_VERIFY_SEND,
              body: {
                email: e,
                guild_id: n,
                allow_multiple_guilds: t,
                use_verification_code: !0,
              },
              trackedActionData: {
                event: o.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                properties: (e) => {
                  var t;
                  let n =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.has_matching_guild;
                  return (0, r.iG)({ has_matching_guild: n });
                },
              },
            })
          ).body,
        async verify(e) {
          if (null != e)
            try {
              var t;
              let n = await a.Z.post({
                  url: c.ANM.HUB_EMAIL_VERIFY,
                  body: { token: e },
                  trackedActionData: {
                    event: o.NetworkActionNames.HUB_EMAIL_VERIFY,
                  },
                }),
                r = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
              i.Z.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: r });
            } catch (e) {
              i.Z.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: e.body,
              });
            }
        },
        async verifyCode(e, t, n) {
          if (null != e)
            try {
              var r;
              let l = await a.Z.post({
                  url: c.ANM.HUB_EMAIL_VERIFY_CODE,
                  body: { code: e, guild_id: t, email: n },
                  trackedActionData: {
                    event: o.NetworkActionNames.HUB_EMAIL_VERIFY,
                  },
                }),
                _ = null === (r = l.body.guild) || void 0 === r ? void 0 : r.id;
              return (
                i.Z.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: _ }),
                l.body
              );
            } catch (e) {
              throw (
                (i.Z.dispatch({
                  type: "HUB_VERIFY_EMAIL_FAILURE",
                  errors: e.body,
                }),
                e)
              );
            }
        },
      };
    },
    888592: function (e, t, n) {
      var o, r;
      n.d(t, {
        fQ: function () {
          return i;
        },
        tF: function () {
          return o;
        },
      }),
        ((r = o || (o = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (r.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (r.VERIFY_PIN = "VERIFY_PIN"),
        (r.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (r.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (r.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (r.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (r.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let i = "884924873015689226";
    },
    630724: function (e, t, n) {
      var o, r, i, a, c, l, _, u, s, d;
      n.d(t, {
        EW: function () {
          return c;
        },
        FF: function () {
          return r;
        },
        MK: function () {
          return o;
        },
        X2: function () {
          return a;
        },
        mx: function () {
          return i;
        },
      }),
        ((l = o || (o = {})).UNKNOWN = "unknown"),
        (l.ANY = "any"),
        (l.INVITE = "invite"),
        (l.ORGANIC = "organic_registration"),
        (l.ORGANIC_MARKETING = "organic_marketing"),
        (l.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (l.CREATE_GUILD = "create_guild"),
        ((_ = r || (r = {})).AGE_GATE = "age_gate"),
        (_.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((u = i || (i = {})).CLAIM_ACCOUNT = "claim_account"),
        (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((s = a || (a = {})).GUILD_TEMPLATES = "guild_templates"),
        (s.GUILD_CREATE = "guild_create"),
        (s.CREATION_INTENT = "creation_intent"),
        (s.CHANNEL_PROMPT = "channel_prompt"),
        (s.JOIN_GUILD = "join_guild"),
        (s.SUCCESS = "create_success"),
        ((d = c || (c = {})).NUF_STARTED = "nuf_started"),
        (d.AGE_GATE = "age_gate"),
        (d.NUF_COMPLETE = "nuf_complete"),
        (d.HUB_CONNECTION = "hub_connection");
    },
    390885: function (e, t, n) {
      var o = n(652874),
        r = n(731965),
        i = n(433517),
        a = n(710845),
        c = n(626135),
        l = n(630724),
        _ = n(981631);
      let u = "UserFlowAnalyticsStore_current",
        s = "UserFlowAnalyticsStore";
      function d(e) {
        if (e === l.MK.UNKNOWN) return null;
        let t = i.K.get("".concat(s, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...o } = t;
        return 1 !== n ? null : o;
      }
      new a.Z("UserFlowAnalytics");
      let f = (0, o.Z)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e ? e : i.K.get(u);
          if (null == n) return null;
          let { [n]: o } = t().flows,
            r = null != o ? o : d(n);
          return (null == r ? void 0 : r.currentStep) != null ? n : null;
        },
      }));
      function p(e, t) {
        let { [e]: n, ...o } = f.getState().flows,
          i = null != n ? n : d(e);
        if ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t)
          (0, r.j)(() => {
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
      function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = e;
        if (e === l.MK.ANY) {
          var i;
          o =
            null !== (i = f.getState().activeFlow()) && void 0 !== i
              ? i
              : l.MK.UNKNOWN;
        }
        let { [o]: a, ...c } = f.getState().flows,
          _ = null != a ? a : d(o);
        if (null != _ && null != _.currentStep && _.currentStep !== t)
          (0, r.j)(() => {
            f.setState({
              flows: {
                ...c,
                [o]: {
                  ..._,
                  lastStep: _.currentStep,
                  lastTimestamp: _.currentTimestamp,
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
                if (e.type === l.MK.UNKNOWN) return;
                let t = "".concat(s, "-").concat(e.type);
                e.ended
                  ? (i.K.remove(t), i.K.remove(u))
                  : (i.K.set("".concat(s, "-").concat(e.type), {
                      ...e,
                      version: 1,
                    }),
                    i.K.set(u, e.type));
              })(e),
              c.default.track(
                _.rMx.NUO_TRANSITION,
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
                (0, r.j)(() => {
                  f.setState({ flows: t, currentFlow: null });
                });
            }
          }
        },
        (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
      );
      function E() {
        return null != f.getState().activeFlow();
      }
      t.Z = {
        flowStart: p,
        flowStepOrStart: function (e, t) {
          E() ? I(e, t) : p(e, t);
        },
        flowStep: I,
        hasActiveFlow: E,
      };
    },
    850477: function (e, t, n) {
      e.exports = {
        container: "container_e5a030",
        topImage: "topImage_e5a030",
        centerText: "centerText_e5a030",
        header: "header_e5a030",
        descriptionWidth: "descriptionWidth_e5a030",
        formContent: "formContent_e5a030",
        formDescription: "formDescription_e5a030",
        termsPhrase: "termsPhrase_e5a030",
        submitButton: "submitButton_e5a030",
        cancelButton: "cancelButton_e5a030",
      };
    },
    817034: function (e, t, n) {
      e.exports = {
        container: "container_d1a2b6",
        centerText: "centerText_d1a2b6",
        header: "header_d1a2b6",
        description: "description_d1a2b6",
        guildList: "guildList_d1a2b6",
        forcedHeight: "forcedHeight_d1a2b6",
        searchContainer: "searchContainer_d1a2b6",
        searchBox: "searchBox_d1a2b6",
        searchBoxInput: "searchBoxInput_d1a2b6",
        searchBoxIcon: "searchBoxIcon_d1a2b6",
        clickableGuildInfoRow: "clickableGuildInfoRow_d1a2b6 guildRow_d1a2b6",
        guildIcon: "guildIcon_d1a2b6",
        guildName: "guildName_d1a2b6",
        noResultsContainer: "noResultsContainer_d1a2b6",
        noResultsContent: "noResultsContent_d1a2b6",
        noResultsImage: "noResultsImage_d1a2b6",
        scroller: "scroller_d1a2b6",
      };
    },
    668169: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_e5b5f9",
        sidebarContainer: "sidebarContainer_e5b5f9",
        contentContainer: "contentContainer_e5b5f9",
        modalContent: "modalContent_e5b5f9",
        container: "container_e5b5f9",
        closeButton: "closeButton_e5b5f9",
      };
    },
    397503: function (e, t, n) {
      e.exports = {
        container: "container_f38045",
        iconContainer: "iconContainer_f38045",
        icon: "icon_f38045",
        header: "header_f38045",
        description: "description_f38045",
      };
    },
    459501: function (e, t, n) {
      e.exports = {
        container: "container_f64057",
        centerText: "centerText_f64057",
        header: "header_f64057",
        descriptionWidth: "descriptionWidth_f64057",
        formItem: "formItem_f64057",
        footer: "footer_f64057",
        backButton: "backButton_f64057",
      };
    },
    651439: function (e, t, n) {
      e.exports = {
        container: "container_a27408",
        topImage: "topImage_a27408",
        centerText: "centerText_a27408",
        formItem: "formItem_a27408 centerText_a27408",
        header: "header_a27408",
        descriptionWidth: "descriptionWidth_a27408",
        submitText: "submitText_a27408",
      };
    },
  },
]);
//# sourceMappingURL=21b65beb3566281415b3.js.map
