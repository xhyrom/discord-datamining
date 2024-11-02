"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92557"],
  {
    139387: function (t, e, n) {
      var r = n(570140),
        i = n(434404),
        l = n(821864),
        u = n(308063);
      e.Z = {
        init() {
          r.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: t,
            sectionId: e,
          });
        },
        startEditingCommandPermissions(t) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: t,
          });
        },
        stopEditingCommandPermissions(t) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: t,
          });
        },
        startEditingIntegration(t) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: t,
          });
        },
        stopEditingIntegration() {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(t) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: t,
          });
        },
        startEditingWebhook(t) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: t,
          });
        },
        stopEditingWebhook() {
          r.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(t) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: t,
          });
        },
        async saveApplicationPermissions(t, e, n) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await l.U3({
                applicationId: t,
                commandId: t,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: e,
                permissions: n,
              }),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
        async saveIntegration(t, e) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await i.Z.updateIntegration(
                t,
                e.id,
                e.expire_behavior,
                e.expire_grace_period,
                e.enable_emoticons,
              ),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
        async saveWebhook(t, e) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await u.Z.update(t, e.id, e),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (t) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: t.body,
            });
          }
        },
      };
    },
    308063: function (t, e, n) {
      var r = n(392711),
        i = n.n(r),
        l = n(544891),
        u = n(570140),
        a = n(981631);
      let o = ["Spidey Bot", "Captain Hook"];
      e.Z = {
        fetchForGuild(t) {
          u.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t }),
            l.tn
              .get({ url: a.ANM.GUILD_WEBHOOKS(t), oldFormErrors: !0 })
              .then((e) => {
                let { body: n } = e;
                return u.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  webhooks: n,
                });
              })
              .catch((e) => {
                let { body: n } = e;
                u.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  error: n.message,
                });
              });
        },
        fetchForChannel(t, e) {
          u.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: t, channelId: e }),
            l.tn
              .get({ url: a.ANM.CHANNEL_WEBHOOKS(e), oldFormErrors: !0 })
              .then((n) => {
                let { body: r } = n;
                return u.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: t,
                  channelId: e,
                  webhooks: r,
                });
              });
        },
        create: (t, e, n) => (
          null == n && (n = o[i().random(0, o.length - 1)]),
          l.tn
            .post({
              url: a.ANM.CHANNEL_WEBHOOKS(e),
              body: { name: n },
              oldFormErrors: !0,
            })
            .then((e) => {
              let { body: n } = e;
              return (
                u.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: t,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (t, e) =>
          l.tn.del({ url: a.ANM.WEBHOOK(e), oldFormErrors: !0 }).then(() => {
            u.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: t, webhookId: e });
          }),
        update: (t, e, n) =>
          l.tn
            .patch({ url: a.ANM.WEBHOOK(e), body: n, oldFormErrors: !0 })
            .then((e) => {
              let { body: n } = e;
              return (
                u.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: t,
                  webhook: n,
                }),
                n
              );
            }),
      };
    },
    866830: function (t, e, n) {
      n.d(e, {
        U5: function () {
          return l;
        },
        qR: function () {
          return i;
        },
      });
      var r = n(273504);
      function i(t) {
        let e = l();
        return Array.from(t.defaultActionTypes).map((t) => e[t]);
      }
      function l() {
        return {
          [r.jj.BLOCK_MESSAGE]: {
            type: r.jj.BLOCK_MESSAGE,
            metadata: { customMessage: void 0 },
          },
          [r.jj.FLAG_TO_CHANNEL]: {
            type: r.jj.FLAG_TO_CHANNEL,
            metadata: { channelId: void 0 },
          },
          [r.jj.USER_COMMUNICATION_DISABLED]: {
            type: r.jj.USER_COMMUNICATION_DISABLED,
            metadata: { durationSeconds: 60 },
          },
          [r.jj.QUARANTINE_USER]: { type: r.jj.QUARANTINE_USER, metadata: {} },
        };
      }
    },
    460083: function (t, e, n) {
      n.d(e, {
        d: function () {
          return r;
        },
      });
      let r = (0, n(818083).B)({
        kind: "guild",
        id: "2022-12_mention_raid_limit",
        label: "Automod Mention Raid Limit",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Automod Mention Raid Limit",
            config: { enabled: !0 },
          },
        ],
      });
    },
    236413: function (t, e, n) {
      n.d(e, {
        Ar: function () {
          return R;
        },
        DO: function () {
          return d;
        },
        Fn: function () {
          return T;
        },
        Jq: function () {
          return N;
        },
        QO: function () {
          return A;
        },
        Vb: function () {
          return g;
        },
        YN: function () {
          return p;
        },
        ZF: function () {
          return O;
        },
        ep: function () {
          return _;
        },
        km: function () {
          return I;
        },
        nC: function () {
          return f;
        },
        vo: function () {
          return S;
        },
      }),
        n(47120),
        n(411104);
      var r = n(581364),
        i = n(314897),
        l = n(866830),
        u = n(539573),
        a = n(727072),
        o = n(85960),
        E = n(273504),
        s = n(388032);
      let c = (t, e) => "".concat(t, "-").concat(e, "-new-rule"),
        d = (t) => (null == t ? void 0 : t.triggerType) === E.fX.KEYWORD,
        S = (t) => (null == t ? void 0 : t.triggerType) === E.fX.ML_SPAM,
        T = (t) =>
          (null == t ? void 0 : t.triggerType) === E.fX.DEFAULT_KEYWORD_LIST,
        f = (t) => (null == t ? void 0 : t.triggerType) === E.fX.MENTION_SPAM,
        N = (t) => (null == t ? void 0 : t.triggerType) === E.fX.USER_PROFILE;
      function _(t, e) {
        let n = o.I6[e],
          r = (0, o.jp)(e, t),
          u = {
            id: c(t, e),
            name: n.getDefaultRuleName(),
            guildId: t,
            eventType: n.eventType,
            triggerType: e,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, l.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
          };
        if (g(u)) throw Error(s.intl.string(s.t["A/nX8P"]));
        let E = (0, a.mY)(t, e);
        return E > 0 && (u.name += " ".concat(E + 1)), u;
      }
      function I(t, e) {
        if (t.length > e)
          throw Error(s.intl.formatToPlainString(s.t.mee4qa, { limit: e }));
        t.forEach((t) => {
          if (t.length > E.hu || t.length < E.Vk)
            throw new u.V6(
              s.intl.formatToPlainString(s.t.rbRvGR, {
                keyword: t,
                max: E.hu,
                min: E.Vk,
              }),
            );
        });
      }
      function A(t) {
        if (d(t)) {
          var e, n;
          let r =
              null !== (e = t.triggerMetadata.keywordFilter) && void 0 !== e
                ? e
                : [],
            i =
              null !== (n = t.triggerMetadata.regexPatterns) && void 0 !== n
                ? n
                : [];
          if (0 === r.length && 0 === i.length)
            throw Error(s.intl.string(s.t.kz2Av7));
          I(r, E.RH),
            !(function (t) {
              if (t.length > E.VW)
                throw Error(
                  s.intl.formatToPlainString(s.t.tDjhFx, { limit: E.VW }),
                );
              t.forEach((t) => {
                if (t.length > E.aj || t.length < E.uE)
                  throw new u.uS(
                    s.intl.formatToPlainString(s.t["WR0m9/"], {
                      regex: t,
                      max: E.aj,
                      min: E.uE,
                    }),
                  );
              });
            })(i);
        }
        if (0 === t.actions.length) throw Error(s.intl.string(s.t["t+gj5e"]));
      }
      function g(t) {
        var e;
        return (0, r.BH)(
          null !== (e = null == t ? void 0 : t.id) && void 0 !== e
            ? e
            : "INVALID_SNOWFLAKE",
        );
      }
      function p(t) {
        switch (t) {
          case E.q4.MESSAGE_SEND:
            return s.intl.string(s.t.NlQW4O);
          case E.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.intl.string(s.t["Q+68IS"]);
          default:
            return s.intl.string(s.t.SP9BBw);
        }
      }
      function O(t) {
        switch (t) {
          case E.jj.BLOCK_MESSAGE:
            return s.intl.string(s.t.d1ab8v);
          case E.jj.FLAG_TO_CHANNEL:
            return s.intl.string(s.t["Y+Vmvb"]);
          case E.jj.USER_COMMUNICATION_DISABLED:
            return s.intl.string(s.t["6WPxY2"]);
          case E.jj.QUARANTINE_USER:
            return s.intl.string(s.t.NPO8eX);
          default:
            return s.intl.string(s.t.SP9BBw);
        }
      }
      function R(t) {
        switch (t) {
          case E.fX.KEYWORD:
            return s.intl.string(s.t.ffR2cH);
          case E.fX.ML_SPAM:
            return s.intl.string(s.t["puF/Oj"]);
          case E.fX.DEFAULT_KEYWORD_LIST:
            return s.intl.string(s.t.LnGhZm);
          case E.fX.MENTION_SPAM:
            return s.intl.string(s.t.pX7i6u);
          case E.fX.USER_PROFILE:
            return s.intl.string(s.t.q1L2v7);
          default:
            return s.intl.string(s.t.SP9BBw);
        }
      }
    },
    727072: function (t, e, n) {
      n.d(e, {
        I2: function () {
          return N;
        },
        RD: function () {
          return _;
        },
        mY: function () {
          return f;
        },
        pH: function () {
          return I;
        },
      }),
        n(653041),
        n(47120),
        n(724458);
      var r = n(192379),
        i = n(903797),
        l = n(782690),
        u = n(731965),
        a = n(881052),
        o = n(36459),
        E = n(866894),
        s = n(273504),
        c = n(981631);
      let d = {},
        S = (t) => {
          let e = {
            [s.fX.KEYWORD]: [],
            [s.fX.ML_SPAM]: [],
            [s.fX.DEFAULT_KEYWORD_LIST]: [],
            [s.fX.MENTION_SPAM]: [],
            [s.fX.USER_PROFILE]: [],
            [s.fX.SERVER_POLICY]: [],
          };
          return (
            t.forEach((t) => {
              var n;
              let { triggerType: r } = t;
              null === (n = e[r]) || void 0 === n || n.push(t);
            }),
            e
          );
        },
        T = (0, i.Z)((t, e) => ({
          rules: {},
          fetching: !1,
          error: null,
          updateRule: (n) => {
            var r, i;
            let { guildId: l, id: a, triggerType: o } = n,
              { rules: s } = e(),
              c = null !== (r = s[l]) && void 0 !== r ? r : {},
              d = null !== (i = c[o]) && void 0 !== i ? i : [],
              S = d.some((t) => t.id === a),
              T = d.filter(
                (t) => (!(0, E.U)(t.id) || t.triggerType !== o) && !0,
              ),
              f = S ? T.map((t) => (t.id === a ? n : t)) : [...T, n];
            (0, u.j)(() => {
              t({ rules: { ...s, [l]: { ...c, [o]: f } }, error: null });
            });
          },
          removeRule: (n, r) => {
            let { rules: i } = e(),
              l = i[r],
              a = Object.keys(l).reduce((t, e) => {
                var r;
                let i = Number(e),
                  u = null !== (r = l[i]) && void 0 !== r ? r : [];
                return (t[i] = u.filter((t) => t.id !== n)), t;
              }, l);
            (0, u.j)(() => {
              t({ rules: { ...i, [r]: a }, error: null });
            });
          },
          syncRules: async (n) => {
            if (
              !!(function (t) {
                var e;
                let n = Date.now(),
                  r = null !== (e = d[t]) && void 0 !== e ? e : 0;
                return n - r > 2e4;
              })(n)
            ) {
              d[n] = Date.now();
              try {
                let r = await (0, o.$Y)(n),
                  i = S(r),
                  l = e().rules;
                (0, u.j)(() => {
                  t({ rules: { ...l, [n]: i }, error: null });
                });
              } catch (n) {
                let e = new a.Hx(n);
                (0, u.j)(() => {
                  t({ error: e });
                });
              }
            }
          },
        })),
        f = (t, e) => {
          var n, r;
          return (
            null !==
              (r =
                null === (n = T.getState().rules[t]) || void 0 === n
                  ? void 0
                  : n[e]) && void 0 !== r
              ? r
              : []
          ).length;
        };
      function N(t) {
        let [e, n] = r.useState(!1),
          [i, u] = T((t) => [t.syncRules, t.fetching], l.Z);
        return [
          e,
          r.useCallback(async () => {
            if (!u && null != t)
              try {
                n(!0), await i(t);
              } finally {
                n(!1);
              }
          }, [t, u, i]),
        ];
      }
      function _(t) {
        let [e, n] = N(t);
        return (
          r.useEffect(() => {
            (async () => {
              await n();
            })();
          }, [t, n]),
          [e, n]
        );
      }
      function I(t) {
        return T((e) => {
          var n;
          return {
            rulesByTriggerType:
              null !== (n = e.rules[null != t ? t : c.lds]) && void 0 !== n
                ? n
                : {},
            updateRule: e.updateRule,
            removeRule: e.removeRule,
          };
        });
      }
    },
    85960: function (t, e, n) {
      n.d(e, {
        I6: function () {
          return d;
        },
        V9: function () {
          return f;
        },
        Z6: function () {
          return _;
        },
        jp: function () {
          return I;
        },
        r5: function () {
          return T;
        },
        vT: function () {
          return r;
        },
        vh: function () {
          return i;
        },
        yU: function () {
          return N;
        },
      }),
        n(47120),
        n(789020),
        n(411104),
        n(724458);
      var r,
        i,
        l,
        u,
        a = n(192379),
        o = n(467319),
        E = n(676317),
        s = n(273504),
        c = n(388032);
      ((l = r || (r = {})).NEW = "new"),
        (l.RECOMMENDED = "recommended"),
        (l.BETA = "beta"),
        (l.ALPHA = "alpha");
      let d = {
        [s.fX.SPAM_LINK]: {
          getDefaultRuleName: () => c.intl.string(c.t.ffR2cH),
          type: s.fX.SPAM_LINK,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 0,
          availableActionTypes: new Set(),
          flags: new Set(),
          defaultActionTypes: new Set(),
        },
        [s.fX.KEYWORD]: {
          getDefaultRuleName: () => c.intl.string(c.t.ffR2cH),
          type: s.fX.KEYWORD,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 6,
          availableActionTypes: new Set([
            s.jj.BLOCK_MESSAGE,
            s.jj.FLAG_TO_CHANNEL,
            s.jj.USER_COMMUNICATION_DISABLED,
          ]),
          flags: new Set(),
          defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE]),
        },
        [s.fX.ML_SPAM]: {
          getDefaultRuleName: () => c.intl.string(c.t["puF/Oj"]),
          type: s.fX.ML_SPAM,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([
            s.jj.BLOCK_MESSAGE,
            s.jj.FLAG_TO_CHANNEL,
          ]),
          flags: new Set([]),
          defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE]),
        },
        [s.fX.DEFAULT_KEYWORD_LIST]: {
          getDefaultRuleName: () => c.intl.string(c.t.LnGhZm),
          type: s.fX.DEFAULT_KEYWORD_LIST,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([
            s.jj.BLOCK_MESSAGE,
            s.jj.FLAG_TO_CHANNEL,
          ]),
          flags: new Set([]),
          defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE]),
        },
        [s.fX.MENTION_SPAM]: {
          getDefaultRuleName: () => c.intl.string(c.t.pX7i6u),
          type: s.fX.MENTION_SPAM,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([
            s.jj.BLOCK_MESSAGE,
            s.jj.FLAG_TO_CHANNEL,
            s.jj.USER_COMMUNICATION_DISABLED,
          ]),
          flags: new Set([]),
          defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE]),
        },
        [s.fX.USER_PROFILE]: {
          getDefaultRuleName: () => c.intl.string(c.t.q1L2v7),
          type: s.fX.USER_PROFILE,
          eventType: s.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([
            s.jj.QUARANTINE_USER,
            s.jj.FLAG_TO_CHANNEL,
          ]),
          flags: new Set([]),
          defaultActionTypes: new Set([s.jj.QUARANTINE_USER]),
        },
        [s.fX.SERVER_POLICY]: {
          getDefaultRuleName: () => c.intl.string(c.t.ZQr92N),
          type: s.fX.SERVER_POLICY,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([s.jj.FLAG_TO_CHANNEL]),
          flags: new Set(["alpha"]),
          defaultActionTypes: new Set(),
        },
      };
      ((u = i || (i = {})).MEMBERS = "members"), (u.CONTENT = "content");
      let S = {
          members: [d[s.fX.USER_PROFILE]],
          content: [
            d[s.fX.SERVER_POLICY],
            d[s.fX.MENTION_SPAM],
            d[s.fX.ML_SPAM],
            d[s.fX.DEFAULT_KEYWORD_LIST],
            d[s.fX.KEYWORD],
          ],
        },
        T = (t, e) => d[t].flags.has(e);
      function f(t) {
        return Array.from(d[t].availableActionTypes);
      }
      function N(t, e) {
        let { id: n, eventType: r, triggerType: i, actions: l } = t,
          u = d[i];
        if (
          e.filter((t) => n !== t.id && t.triggerType === i).length >
          u.perGuildMaxCount
        )
          throw Error(
            "You have exceeded the maximum number of rules of type ".concat(i),
          );
        if (l.some((t) => !u.availableActionTypes.has(t.type)))
          throw Error(
            "You have provided an action that is not available for this trigger type",
          );
        if (r !== u.eventType)
          throw Error(
            "You have provided an event type that is not available for this trigger type",
          );
      }
      function _(t) {
        let e = (0, E.oA)(t);
        return a.useMemo(
          () =>
            Object.keys(S).reduce(
              (t, n) => {
                let r = S[n]
                  .filter(
                    (t) =>
                      t.type !== s.fX.SERVER_POLICY &&
                      (t.type !== s.fX.USER_PROFILE || !!e) &&
                      t.perGuildMaxCount > 0,
                  )
                  .map((t) => t.type);
                return (t[n] = r), t;
              },
              { members: [], content: [] },
            ),
          [e],
        );
      }
      function I(t, e) {
        let n = (0, o.H)(e);
        switch (t) {
          case s.fX.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
          case s.fX.USER_PROFILE:
          case s.fX.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
          case s.fX.MENTION_SPAM:
            return { mentionTotalLimit: s.Ic, mentionRaidProtectionEnabled: n };
          case s.fX.ML_SPAM:
          case s.fX.SERVER_POLICY:
          default:
            return;
        }
      }
    },
    467319: function (t, e, n) {
      n.d(e, {
        H: function () {
          return i;
        },
        a: function () {
          return l;
        },
      });
      var r = n(460083);
      function i(t) {
        let { enabled: e } = r.d.getCurrentConfig({
          guildId: t,
          location: "988d4e_3",
        });
        return e;
      }
      function l(t) {
        let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = r.d.useExperiment(
            { guildId: t, location: "988d4e_4" },
            { autoTrackExposure: e },
          );
        return n;
      }
    },
    422303: function (t, e, n) {
      n.d(e, {
        Ac: function () {
          return u;
        },
        Ze: function () {
          return a;
        },
        cb: function () {
          return o;
        },
        kU: function () {
          return s;
        },
        se: function () {
          return E;
        },
      }),
        n(757143),
        n(47120),
        n(627494);
      let r = /[\t\n,]/g,
        i = /\s{2,}/g,
        l = /[*"']/g;
      function u(t) {
        return t
          .split(r)
          .map((t) => t.replace(i, " ").trim())
          .filter((t) => t.length > 0);
      }
      function a(t) {
        return Array.from(new Set(t));
      }
      function o(t) {
        return t.sort((t, e) => {
          let n = t.replaceAll(l, ""),
            r = e.replaceAll(l, "");
          return n.localeCompare(r);
        });
      }
      function E(t) {
        return t.join(", ");
      }
      function s(t) {
        return t.includes("\n") || t.includes(",");
      }
    },
    676317: function (t, e, n) {
      n.d(e, {
        Nb: function () {
          return E;
        },
        oA: function () {
          return c;
        },
        pr: function () {
          return s;
        },
        ze: function () {
          return o;
        },
      });
      var r = n(442837),
        i = n(430824),
        l = n(496675),
        u = n(981631);
      let a = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.Z,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.Z,
          r = e.getGuild(t);
        return null != r && n.can(u.Plq.MANAGE_GUILD, r);
      };
      function o(t) {
        return null != t && a(t);
      }
      function E(t) {
        return a(t);
      }
      function s(t) {
        return (0, r.e7)([i.Z, l.Z], () => a(t, i.Z, l.Z), [t]);
      }
      function c(t) {
        return (0, r.e7)(
          [i.Z],
          () => {
            let e = i.Z.getGuild(t);
            return (null == e ? void 0 : e.hasFeature(u.oNc.COMMUNITY)) || !1;
          },
          [t],
        );
      }
    },
    866894: function (t, e, n) {
      n.d(e, {
        U: function () {
          return i;
        },
      }),
        n(47120);
      let r = new Set(["1030554520465440818"]);
      function i(t) {
        return null != t && r.has(t);
      }
    },
    65912: function (t, e, n) {
      n.d(e, {
        V: function () {
          return g;
        },
        w: function () {
          return A;
        },
      });
      var r = n(392711),
        i = n.n(r),
        l = n(903797),
        u = n(731965),
        a = n(881052),
        o = n(823379),
        E = n(539573),
        s = n(236413),
        c = n(85960),
        d = n(36459),
        S = n(422303),
        T = n(866894),
        f = n(981631),
        N = n(388032);
      let _ = Object.freeze({
          editingRule: null,
          hasChanges: !1,
          isLoading: !1,
          errorMessage: null,
        }),
        I = (0, l.Z)((t, e) => ({
          editingRule: null,
          hasChanges: !1,
          setEditingRule: (n) => {
            let r = e().editingRule,
              l = null != n && null != r && n.id === r.id,
              a = i().cloneDeep(n);
            null != a && (a = { ...a, actions: a.actions.filter(o.lm) }),
              (0, u.j)(() =>
                t({ editingRule: a, hasChanges: l, errorMessage: null }),
              );
          },
          createNewEditingRule: (e, n, r) => {
            let i = { ...(0, s.ep)(e, n), ...(null != r ? r : {}) };
            return (0, u.j)(() => t({ editingRule: i, hasChanges: !1 })), i;
          },
          isLoading: !1,
          errorMessage: null,
          cancelEditingRule: () => {
            (0, u.j)(() => t({ ..._ }));
          },
          saveRule: async (e, n) => {
            if (null == e) return (0, u.j)(() => t({ ..._ })), null;
            try {
              var r, i, l;
              (0, s.DO)(e) &&
                ((e.triggerMetadata.keywordFilter = (0, S.cb)(
                  (0, S.Ze)(
                    null !== (r = e.triggerMetadata.keywordFilter) &&
                      void 0 !== r
                      ? r
                      : [],
                  ),
                )),
                (e.triggerMetadata.allowList = (0, S.cb)(
                  (0, S.Ze)(
                    null !== (i = e.triggerMetadata.allowList) && void 0 !== i
                      ? i
                      : [],
                  ),
                ))),
                (0, s.Fn)(e) &&
                  (e.triggerMetadata.allowList = (0, S.cb)(
                    (0, S.Ze)(
                      null !== (l = e.triggerMetadata.allowList) && void 0 !== l
                        ? l
                        : [],
                    ),
                  )),
                (0, c.yU)(e, n),
                (0, s.QO)(e);
            } catch (e) {
              return (
                e instanceof E.V6
                  ? (0, u.j)(() => {
                      t({
                        errorMessage: N.intl.string(N.t["4Dxaur"]),
                        isLoading: !1,
                      });
                    })
                  : e instanceof E.uS
                    ? (0, u.j)(() => {
                        t({
                          errorMessage: N.intl.string(N.t.hDPEu7),
                          isLoading: !1,
                        });
                      })
                    : (0, u.j)(() => {
                        t({ errorMessage: e.message, isLoading: !1 });
                      }),
                null
              );
            }
            try {
              (0, u.j)(() => {
                t({ isLoading: !0 });
              });
              let n = null;
              return (
                (n =
                  (0, s.Vb)(e) && !(0, T.U)(e.id)
                    ? await (0, d.Je)(e)
                    : await (0, d.JK)(e)),
                (0, u.j)(() => t({ ..._ })),
                n
              );
            } catch (n) {
              let e = new a.Hx(n);
              (0, u.j)(() => {
                t({
                  isLoading: !1,
                  errorMessage: (function (t) {
                    if (t.code === f.evJ.INVALID_FORM_BODY) {
                      var e, n;
                      if (
                        (null === (n = t.errors) || void 0 === n
                          ? void 0
                          : null === (e = n.trigger_metadata) || void 0 === e
                            ? void 0
                            : e.regex_patterns) != null
                      )
                        return N.intl.string(N.t.hDPEu7);
                    }
                    return t.getAnyErrorMessage();
                  })(e),
                });
              });
            }
            return null;
          },
          saveEditingRule: (t) => {
            let { editingRule: n, saveRule: r } = e();
            return r(n, t);
          },
        }));
      function A() {
        return I((t) => ({
          hasChanges: t.hasChanges,
          editingRule: t.editingRule,
          isLoading: t.isLoading,
          errorMessage: t.errorMessage,
          saveRule: t.saveRule,
          saveEditingRule: t.saveEditingRule,
          cancelEditingRule: t.cancelEditingRule,
        }));
      }
      function g() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          e = I((t) => ({
            hasChanges: t.hasChanges,
            editingRule: t.editingRule,
            setEditingRule: t.setEditingRule,
            createNewEditingRule: t.createNewEditingRule,
          }));
        return null != t && e.setEditingRule(t), e;
      }
    },
    556012: function (t, e, n) {
      n.d(e, {
        c: function () {
          return _;
        },
      });
      var r = n(481060),
        i = n(933557),
        l = n(592125),
        u = n(699516),
        a = n(594174),
        o = n(273504),
        E = n(590433),
        s = n(388032);
      let c = (t) => {
          if (t === o.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        d = (t) => {
          switch (t) {
            case o.jj.BLOCK_MESSAGE:
            case o.jj.FLAG_TO_CHANNEL:
            case o.jj.USER_COMMUNICATION_DISABLED:
            case o.jj.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        S = (t) => {
          switch (t) {
            case o.jj.BLOCK_MESSAGE:
              return s.intl.string(s.t.d1ab8v);
            case o.jj.FLAG_TO_CHANNEL:
              return s.intl.string(s.t["Y+Vmvb"]);
            case o.jj.USER_COMMUNICATION_DISABLED:
              return s.intl.string(s.t.Xz2njI);
            case o.jj.QUARANTINE_USER:
              return s.intl.string(s.t.NPO8eX);
          }
        },
        T = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.fX.KEYWORD;
          switch (t) {
            case o.jj.BLOCK_MESSAGE:
              switch (e) {
                case o.fX.MENTION_SPAM:
                  return s.intl.string(s.t["8hdId3"]);
                case o.fX.ML_SPAM:
                  return s.intl.string(s.t.tLQYs7);
                default:
                  return s.intl.string(s.t.xAAocn);
              }
            case o.jj.FLAG_TO_CHANNEL:
              return s.intl.string(s.t.BHAXfX);
            case o.jj.USER_COMMUNICATION_DISABLED:
              return s.intl.string(s.t["bNK+gI"]);
            case o.jj.QUARANTINE_USER:
              return s.intl.string(s.t["/7nL5e"]);
          }
        },
        f = (t, e) => {
          var n, r, c;
          switch (t) {
            case o.jj.QUARANTINE_USER:
            case o.jj.BLOCK_MESSAGE:
              return null;
            case o.jj.FLAG_TO_CHANNEL: {
              let t =
                null == e
                  ? void 0
                  : null === (n = e.metadata) || void 0 === n
                    ? void 0
                    : n.channelId;
              if (null == t) return null;
              let r = l.Z.getChannel(t);
              if (null == r) return null;
              let o = (0, i.F6)(r, a.default, u.Z);
              return s.intl.format(s.t.xQXnkJ, { channelName: o });
            }
            case o.jj.USER_COMMUNICATION_DISABLED: {
              let t =
                  null !==
                    (c =
                      null == e
                        ? void 0
                        : null === (r = e.metadata) || void 0 === r
                          ? void 0
                          : r.durationSeconds) && void 0 !== c
                    ? c
                    : 0,
                n = (0, E.L9)(t);
              if (null == n) return null;
              return s.intl.format(s.t.AFmbfX, { duration: n });
            }
          }
        },
        N = (t) => {
          switch (t) {
            case o.jj.BLOCK_MESSAGE:
              return r.CircleXIcon;
            case o.jj.FLAG_TO_CHANNEL:
              return r.TextIcon;
            case o.jj.USER_COMMUNICATION_DISABLED:
              return r.ClockWarningIcon;
            case o.jj.QUARANTINE_USER:
              return r.ChatXIcon;
          }
        };
      function _(t, e, n) {
        var i, l, u, a;
        return d(t)
          ? {
              headerText: null !== (i = S(t)) && void 0 !== i ? i : "",
              descriptionText: null !== (l = T(t, n)) && void 0 !== l ? l : "",
              helperText: null !== (u = f(t, e)) && void 0 !== u ? u : null,
              icon: null !== (a = N(t)) && void 0 !== a ? a : r.CircleXIcon,
              isEditable: c(t),
            }
          : null;
      }
    },
    572456: function (t, e, n) {
      n.d(e, {
        XN: function () {
          return a;
        },
        af: function () {
          return o;
        },
        gK: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060);
      function l(t) {
        return new Promise((e) => {
          (0, i.openModalLazy)(() =>
            t(
              () => {
                e(!0);
              },
              (t) => (e(!1), t()),
            ),
          );
        });
      }
      let u = (t) =>
          l(async (e, i) => {
            let { default: l } = await n.e("44462").then(n.bind(n, 478472));
            return (n) =>
              (0, r.jsx)(l, {
                ...n,
                ruleName: t,
                onConfirm: e,
                onClose: () => i(n.onClose),
                onCancel: () => i(n.onClose),
              });
          }),
        a = (t, e) =>
          l(async (i, l) => {
            let { default: u } = await n.e("92575").then(n.bind(n, 601787));
            return (n) =>
              (0, r.jsx)(u, {
                ...n,
                ruleName: t,
                keyword: e,
                onConfirm: i,
                onClose: () => l(n.onClose),
                onCancel: () => l(n.onClose),
              });
          }),
        o = (t) => (e) =>
          l(async (i, l) => {
            let { default: u } = await n.e("83613").then(n.bind(n, 449675)),
              a = () => {
                e(), i();
              };
            return (e) =>
              (0, r.jsx)(u, {
                ruleName: t,
                ...e,
                onConfirm: a,
                onClose: () => l(e.onClose),
                onCancel: () => l(e.onClose),
              });
          });
    },
    821864: function (t, e, n) {
      n.d(e, {
        I4: function () {
          return d;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return T;
        },
        Ui: function () {
          return S;
        },
        W4: function () {
          return E;
        },
        gq: function () {
          return c;
        },
        kZ: function () {
          return o;
        },
      });
      var r = n(544891),
        i = n(570140),
        l = n(555573),
        u = n(581364),
        a = n(981631);
      function o() {
        i.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function E(t, e, n) {
        i.Z.dispatch({
          applicationId: t,
          commandId: e,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(t, e) {
        r.tn.get(a.ANM.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(
          (n) => {
            i.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: e,
              commands: n.body.application_commands,
              guildId: t,
              permissions: n.body.permissions,
            });
          },
          () => {
            i.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: e,
            });
          },
        );
      }
      async function c(t, e, n) {
        let l = [];
        try {
          let i = await r.tn.get(
            a.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n),
          );
          i.ok && (l = i.body.permissions);
        } catch (r) {
          if (404 !== r.status) {
            i.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: t,
              commandId: n,
              guildId: e,
            });
            return;
          }
        }
        i.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: t,
          commandId: n,
          guildId: e,
          permissions: l,
        });
      }
      function d(t) {
        i.Z.dispatch({
          applicationId: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function S(t) {
        i.Z.dispatch({
          commandId: t,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function T(t) {
        let {
            applicationId: e,
            commandId: n,
            defaultEveryoneValue: r,
            defaultEverywhereValue: a,
            guildId: o,
            permissions: E,
          } = t,
          s =
            n === e
              ? (function (t, e, n, r) {
                  if (!n || !r) return e;
                  let i = { [t]: n, [(0, u.bD)(t)]: r };
                  return e.filter((t) => {
                    let e = i[t.id];
                    return null == e || t.permission !== e;
                  });
                })(o, E, r, a)
              : E,
          c = await l.dh(e, o, n, s);
        c.ok &&
          i.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: e,
            commandId: n,
            guildId: o,
            permissions: c.body.permissions,
          });
      }
    },
  },
]);
//# sourceMappingURL=ac209ab83162e4609465.js.map
