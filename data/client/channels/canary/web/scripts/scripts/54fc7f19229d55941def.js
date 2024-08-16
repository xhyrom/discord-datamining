"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92557"],
  {
    139387: function (e, t, n) {
      var r = n(570140),
        a = n(434404),
        i = n(821864),
        E = n(308063);
      t.Z = {
        init() {
          r.Z.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
        },
        setSection(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_SET_SECTION",
            section: e,
            sectionId: t,
          });
        },
        startEditingCommandPermissions(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
            commandId: e,
          });
        },
        stopEditingCommandPermissions(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
            commandId: e,
          });
        },
        startEditingIntegration(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
            integrationId: e,
          });
        },
        stopEditingIntegration() {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
          });
        },
        updateIntegration(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
            settings: e,
          });
        },
        startEditingWebhook(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
            webhookId: e,
          });
        },
        stopEditingWebhook() {
          r.Z.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
        },
        updateWebhook(e) {
          r.Z.dispatch({
            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
            settings: e,
          });
        },
        async saveApplicationPermissions(e, t, n) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await i.U3({
                applicationId: e,
                commandId: e,
                defaultEveryoneValue: !0,
                defaultEverywhereValue: !0,
                guildId: t,
                permissions: n,
              }),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveIntegration(e, t) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await a.Z.updateIntegration(
                e,
                t.id,
                t.expire_behavior,
                t.expire_grace_period,
                t.enable_emoticons,
              ),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
        async saveWebhook(e, t) {
          try {
            r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
              await E.Z.update(e, t.id, t),
              r.Z.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
          } catch (e) {
            r.Z.dispatch({
              type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
              errors: e.body,
            });
          }
        },
      };
    },
    308063: function (e, t, n) {
      var r = n(392711),
        a = n.n(r),
        i = n(544891),
        E = n(570140),
        _ = n(981631);
      let u = ["Spidey Bot", "Captain Hook"];
      t.Z = {
        fetchForGuild(e) {
          E.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            i.tn
              .get({ url: _.ANM.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then((t) => {
                let { body: n } = t;
                return E.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch((t) => {
                let { body: n } = t;
                E.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          E.Z.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e, channelId: t }),
            i.tn
              .get({ url: _.ANM.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then((n) => {
                let { body: r } = n;
                return E.Z.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: r,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = u[a().random(0, u.length - 1)]),
          i.tn
            .post({
              url: _.ANM.CHANNEL_WEBHOOKS(t),
              body: { name: n },
              oldFormErrors: !0,
            })
            .then((t) => {
              let { body: n } = t;
              return (
                E.Z.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (e, t) =>
          i.tn.del({ url: _.ANM.WEBHOOK(t), oldFormErrors: !0 }).then(() => {
            E.Z.dispatch({ type: "WEBHOOK_DELETE", guildId: e, webhookId: t });
          }),
        update: (e, t, n) =>
          i.tn
            .patch({ url: _.ANM.WEBHOOK(t), body: n, oldFormErrors: !0 })
            .then((t) => {
              let { body: n } = t;
              return (
                E.Z.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            }),
      };
    },
    866830: function (e, t, n) {
      n.d(t, {
        U5: function () {
          return i;
        },
        qR: function () {
          return a;
        },
      });
      var r = n(273504);
      function a(e) {
        let t = i();
        return Array.from(e.defaultActionTypes).map((e) => t[e]);
      }
      function i() {
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
    460083: function (e, t, n) {
      n.d(t, {
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
    236413: function (e, t, n) {
      n.d(t, {
        Ar: function () {
          return L;
        },
        DO: function () {
          return I;
        },
        Fn: function () {
          return O;
        },
        Jq: function () {
          return N;
        },
        QO: function () {
          return M;
        },
        Vb: function () {
          return d;
        },
        YN: function () {
          return R;
        },
        ZF: function () {
          return f;
        },
        ep: function () {
          return S;
        },
        km: function () {
          return c;
        },
        nC: function () {
          return A;
        },
        vo: function () {
          return T;
        },
      }),
        n(47120),
        n(411104);
      var r = n(581364),
        a = n(314897),
        i = n(866830),
        E = n(539573),
        _ = n(727072),
        u = n(85960),
        l = n(273504),
        s = n(689938);
      let o = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
        I = (e) => (null == e ? void 0 : e.triggerType) === l.fX.KEYWORD,
        T = (e) => (null == e ? void 0 : e.triggerType) === l.fX.ML_SPAM,
        O = (e) =>
          (null == e ? void 0 : e.triggerType) === l.fX.DEFAULT_KEYWORD_LIST,
        A = (e) => (null == e ? void 0 : e.triggerType) === l.fX.MENTION_SPAM,
        N = (e) => (null == e ? void 0 : e.triggerType) === l.fX.USER_PROFILE;
      function S(e, t) {
        let n = u.I6[t],
          r = (0, u.jp)(t, e),
          E = {
            id: o(e, t),
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: a.default.getId(),
            actions: (0, i.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
          };
        if (d(E)) throw Error(s.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
        let l = (0, _.mY)(e, t);
        return l > 0 && (E.name += " ".concat(l + 1)), E;
      }
      function c(e, t) {
        if (e.length > t)
          throw Error(
            s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
              limit: t,
            }),
          );
        e.forEach((e) => {
          if (e.length > l.hu || e.length < l.Vk)
            throw new E.V6(
              s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format(
                { keyword: e, max: l.hu, min: l.Vk },
              ),
            );
        });
      }
      function M(e) {
        if (I(e)) {
          var t, n;
          let r =
              null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t
                ? t
                : [],
            a =
              null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n
                ? n
                : [];
          if (0 === r.length && 0 === a.length)
            throw Error(
              s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX,
            );
          c(r, l.RH),
            !(function (e) {
              if (e.length > l.VW)
                throw Error(
                  s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format(
                    { limit: l.VW },
                  ),
                );
              e.forEach((e) => {
                if (e.length > l.aj || e.length < l.uE)
                  throw new E.uS(
                    s.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format(
                      { regex: e, max: l.aj, min: l.uE },
                    ),
                  );
              });
            })(a);
        }
        if (0 === e.actions.length)
          throw Error(s.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS);
      }
      function d(e) {
        var t;
        return (0, r.BH)(
          null !== (t = null == e ? void 0 : e.id) && void 0 !== t
            ? t
            : "INVALID_SNOWFLAKE",
        );
      }
      function R(e) {
        switch (e) {
          case l.q4.MESSAGE_SEND:
            return s.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
          case l.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.Z.Messages
              .GUILD_AUTOMOD_EVENT_TYPE_GUILD_MEMBER_JOIN_OR_UPDATE;
          default:
            return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
        }
      }
      function f(e) {
        switch (e) {
          case l.jj.BLOCK_MESSAGE:
            return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
          case l.jj.FLAG_TO_CHANNEL:
            return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
          case l.jj.USER_COMMUNICATION_DISABLED:
            return s.Z.Messages
              .GUILD_AUTOMOD_ACTIONS_USER_COMMUNICATION_DISABLED;
          case l.jj.QUARANTINE_USER:
            return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
          default:
            return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
        }
      }
      function L(e) {
        switch (e) {
          case l.fX.KEYWORD:
            return s.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
          case l.fX.ML_SPAM:
            return s.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
          case l.fX.DEFAULT_KEYWORD_LIST:
            return s.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
          case l.fX.MENTION_SPAM:
            return s.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME;
          case l.fX.USER_PROFILE:
            return s.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME;
          default:
            return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
        }
      }
    },
    727072: function (e, t, n) {
      n.d(t, {
        I2: function () {
          return N;
        },
        RD: function () {
          return S;
        },
        mY: function () {
          return A;
        },
        pH: function () {
          return c;
        },
      }),
        n(653041),
        n(47120),
        n(724458);
      var r = n(470079),
        a = n(652874),
        i = n(143927),
        E = n(731965),
        _ = n(881052),
        u = n(36459),
        l = n(866894),
        s = n(273504),
        o = n(981631);
      let I = {},
        T = (e) => {
          let t = {
            [s.fX.KEYWORD]: [],
            [s.fX.ML_SPAM]: [],
            [s.fX.DEFAULT_KEYWORD_LIST]: [],
            [s.fX.MENTION_SPAM]: [],
            [s.fX.USER_PROFILE]: [],
            [s.fX.SERVER_POLICY]: [],
          };
          return (
            e.forEach((e) => {
              var n;
              let { triggerType: r } = e;
              null === (n = t[r]) || void 0 === n || n.push(e);
            }),
            t
          );
        },
        O = (0, a.Z)((e, t) => ({
          rules: {},
          fetching: !1,
          error: null,
          updateRule: (n) => {
            var r, a;
            let { guildId: i, id: _, triggerType: u } = n,
              { rules: s } = t(),
              o = null !== (r = s[i]) && void 0 !== r ? r : {},
              I = null !== (a = o[u]) && void 0 !== a ? a : [],
              T = I.some((e) => e.id === _),
              O = I.filter(
                (e) => (!(0, l.U)(e.id) || e.triggerType !== u) && !0,
              ),
              A = T ? O.map((e) => (e.id === _ ? n : e)) : [...O, n];
            (0, E.j)(() => {
              e({ rules: { ...s, [i]: { ...o, [u]: A } }, error: null });
            });
          },
          removeRule: (n, r) => {
            let { rules: a } = t(),
              i = a[r],
              _ = Object.keys(i).reduce((e, t) => {
                var r;
                let a = Number(t),
                  E = null !== (r = i[a]) && void 0 !== r ? r : [];
                return (e[a] = E.filter((e) => e.id !== n)), e;
              }, i);
            (0, E.j)(() => {
              e({ rules: { ...a, [r]: _ }, error: null });
            });
          },
          syncRules: async (n) => {
            if (
              !!(function (e) {
                var t;
                let n = Date.now(),
                  r = null !== (t = I[e]) && void 0 !== t ? t : 0;
                return n - r > 2e4;
              })(n)
            ) {
              I[n] = Date.now();
              try {
                let r = await (0, u.$Y)(n),
                  a = T(r),
                  i = t().rules;
                (0, E.j)(() => {
                  e({ rules: { ...i, [n]: a }, error: null });
                });
              } catch (n) {
                let t = new _.Hx(n);
                (0, E.j)(() => {
                  e({ error: t });
                });
              }
            }
          },
        })),
        A = (e, t) => {
          var n, r;
          return (
            null !==
              (r =
                null === (n = O.getState().rules[e]) || void 0 === n
                  ? void 0
                  : n[t]) && void 0 !== r
              ? r
              : []
          ).length;
        };
      function N(e) {
        let [t, n] = r.useState(!1),
          [a, E] = O((e) => [e.syncRules, e.fetching], i.Z);
        return [
          t,
          r.useCallback(async () => {
            if (!E && null != e)
              try {
                n(!0), await a(e);
              } finally {
                n(!1);
              }
          }, [e, E, a]),
        ];
      }
      function S(e) {
        let [t, n] = N(e);
        return (
          r.useEffect(() => {
            (async () => {
              await n();
            })();
          }, [e, n]),
          [t, n]
        );
      }
      function c(e) {
        return O((t) => {
          var n;
          return {
            rulesByTriggerType:
              null !== (n = t.rules[null != e ? e : o.lds]) && void 0 !== n
                ? n
                : {},
            updateRule: t.updateRule,
            removeRule: t.removeRule,
          };
        });
      }
    },
    85960: function (e, t, n) {
      n.d(t, {
        I6: function () {
          return I;
        },
        V9: function () {
          return A;
        },
        Z6: function () {
          return S;
        },
        jp: function () {
          return c;
        },
        r5: function () {
          return O;
        },
        vT: function () {
          return r;
        },
        vh: function () {
          return a;
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
        a,
        i,
        E,
        _ = n(470079),
        u = n(467319),
        l = n(676317),
        s = n(273504),
        o = n(689938);
      ((i = r || (r = {})).NEW = "new"),
        (i.RECOMMENDED = "recommended"),
        (i.BETA = "beta"),
        (i.ALPHA = "alpha");
      let I = {
        [s.fX.SPAM_LINK]: {
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
          type: s.fX.SPAM_LINK,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 0,
          availableActionTypes: new Set(),
          flags: new Set(),
          defaultActionTypes: new Set(),
        },
        [s.fX.KEYWORD]: {
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
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
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
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
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
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
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
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
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
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
          getDefaultRuleName: () =>
            o.Z.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
          type: s.fX.SERVER_POLICY,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([s.jj.FLAG_TO_CHANNEL]),
          flags: new Set(["alpha"]),
          defaultActionTypes: new Set(),
        },
      };
      ((E = a || (a = {})).MEMBERS = "members"), (E.CONTENT = "content");
      let T = {
          members: [I[s.fX.USER_PROFILE]],
          content: [
            I[s.fX.SERVER_POLICY],
            I[s.fX.MENTION_SPAM],
            I[s.fX.ML_SPAM],
            I[s.fX.DEFAULT_KEYWORD_LIST],
            I[s.fX.KEYWORD],
          ],
        },
        O = (e, t) => I[e].flags.has(t);
      function A(e) {
        return Array.from(I[e].availableActionTypes);
      }
      function N(e, t) {
        let { id: n, eventType: r, triggerType: a, actions: i } = e,
          E = I[a];
        if (
          t.filter((e) => n !== e.id && e.triggerType === a).length >
          E.perGuildMaxCount
        )
          throw Error(
            "You have exceeded the maximum number of rules of type ".concat(a),
          );
        if (i.some((e) => !E.availableActionTypes.has(e.type)))
          throw Error(
            "You have provided an action that is not available for this trigger type",
          );
        if (r !== E.eventType)
          throw Error(
            "You have provided an event type that is not available for this trigger type",
          );
      }
      function S(e) {
        let t = (0, l.oA)(e);
        return _.useMemo(
          () =>
            Object.keys(T).reduce(
              (e, n) => {
                let r = T[n]
                  .filter(
                    (e) =>
                      e.type !== s.fX.SERVER_POLICY &&
                      (e.type !== s.fX.USER_PROFILE || !!t) &&
                      e.perGuildMaxCount > 0,
                  )
                  .map((e) => e.type);
                return (e[n] = r), e;
              },
              { members: [], content: [] },
            ),
          [t],
        );
      }
      function c(e, t) {
        let n = (0, u.H)(t);
        switch (e) {
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
    467319: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
        a: function () {
          return i;
        },
      });
      var r = n(460083);
      function a(e) {
        let { enabled: t } = r.d.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return t;
      }
      function i(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = r.d.useExperiment(
            { guildId: e, location: "988d4e_4" },
            { autoTrackExposure: t },
          );
        return n;
      }
    },
    422303: function (e, t, n) {
      n.d(t, {
        Ac: function () {
          return E;
        },
        Ze: function () {
          return _;
        },
        cb: function () {
          return u;
        },
        kU: function () {
          return s;
        },
        se: function () {
          return l;
        },
      }),
        n(757143),
        n(47120),
        n(627494);
      let r = /[\t\n,]/g,
        a = /\s{2,}/g,
        i = /[*"']/g;
      function E(e) {
        return e
          .split(r)
          .map((e) => e.replace(a, " ").trim())
          .filter((e) => e.length > 0);
      }
      function _(e) {
        return Array.from(new Set(e));
      }
      function u(e) {
        return e.sort((e, t) => {
          let n = e.replaceAll(i, ""),
            r = t.replaceAll(i, "");
          return n.localeCompare(r);
        });
      }
      function l(e) {
        return e.join(", ");
      }
      function s(e) {
        return e.includes("\n") || e.includes(",");
      }
    },
    676317: function (e, t, n) {
      n.d(t, {
        Nb: function () {
          return l;
        },
        oA: function () {
          return o;
        },
        pr: function () {
          return s;
        },
        ze: function () {
          return u;
        },
      });
      var r = n(442837),
        a = n(430824),
        i = n(496675),
        E = n(981631);
      let _ = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : a.Z,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : i.Z,
          r = t.getGuild(e);
        return null != r && n.can(E.Plq.MANAGE_GUILD, r);
      };
      function u(e) {
        return null != e && _(e);
      }
      function l(e) {
        return _(e);
      }
      function s(e) {
        return (0, r.e7)([a.Z, i.Z], () => _(e, a.Z, i.Z), [e]);
      }
      function o(e) {
        return (0, r.e7)(
          [a.Z],
          () => {
            let t = a.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(E.oNc.COMMUNITY)) || !1;
          },
          [e],
        );
      }
    },
    866894: function (e, t, n) {
      n.d(t, {
        U: function () {
          return a;
        },
      }),
        n(47120);
      let r = new Set(["1030554520465440818"]);
      function a(e) {
        return null != e && r.has(e);
      }
    },
    65912: function (e, t, n) {
      n.d(t, {
        V: function () {
          return d;
        },
        w: function () {
          return M;
        },
      });
      var r = n(392711),
        a = n.n(r),
        i = n(652874),
        E = n(731965),
        _ = n(881052),
        u = n(823379),
        l = n(539573),
        s = n(236413),
        o = n(85960),
        I = n(36459),
        T = n(422303),
        O = n(866894),
        A = n(981631),
        N = n(689938);
      let S = Object.freeze({
          editingRule: null,
          hasChanges: !1,
          isLoading: !1,
          errorMessage: null,
        }),
        c = (0, i.Z)((e, t) => ({
          editingRule: null,
          hasChanges: !1,
          setEditingRule: (n) => {
            let r = t().editingRule,
              i = null != n && null != r && n.id === r.id,
              _ = a().cloneDeep(n);
            null != _ && (_ = { ..._, actions: _.actions.filter(u.lm) }),
              (0, E.j)(() =>
                e({ editingRule: _, hasChanges: i, errorMessage: null }),
              );
          },
          createNewEditingRule: (t, n, r) => {
            let a = { ...(0, s.ep)(t, n), ...(null != r ? r : {}) };
            return (0, E.j)(() => e({ editingRule: a, hasChanges: !1 })), a;
          },
          isLoading: !1,
          errorMessage: null,
          cancelEditingRule: () => {
            (0, E.j)(() => e({ ...S }));
          },
          saveRule: async (t, n) => {
            if (null == t) return (0, E.j)(() => e({ ...S })), null;
            try {
              var r, a, i;
              (0, s.DO)(t) &&
                ((t.triggerMetadata.keywordFilter = (0, T.cb)(
                  (0, T.Ze)(
                    null !== (r = t.triggerMetadata.keywordFilter) &&
                      void 0 !== r
                      ? r
                      : [],
                  ),
                )),
                (t.triggerMetadata.allowList = (0, T.cb)(
                  (0, T.Ze)(
                    null !== (a = t.triggerMetadata.allowList) && void 0 !== a
                      ? a
                      : [],
                  ),
                ))),
                (0, s.Fn)(t) &&
                  (t.triggerMetadata.allowList = (0, T.cb)(
                    (0, T.Ze)(
                      null !== (i = t.triggerMetadata.allowList) && void 0 !== i
                        ? i
                        : [],
                    ),
                  )),
                (0, o.yU)(t, n),
                (0, s.QO)(t);
            } catch (t) {
              return (
                t instanceof l.V6
                  ? (0, E.j)(() => {
                      e({
                        errorMessage:
                          N.Z.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
                        isLoading: !1,
                      });
                    })
                  : t instanceof l.uS
                    ? (0, E.j)(() => {
                        e({
                          errorMessage:
                            N.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                          isLoading: !1,
                        });
                      })
                    : (0, E.j)(() => {
                        e({ errorMessage: t.message, isLoading: !1 });
                      }),
                null
              );
            }
            try {
              (0, E.j)(() => {
                e({ isLoading: !0 });
              });
              let n = null;
              return (
                (n =
                  (0, s.Vb)(t) && !(0, O.U)(t.id)
                    ? await (0, I.Je)(t)
                    : await (0, I.JK)(t)),
                (0, E.j)(() => e({ ...S })),
                n
              );
            } catch (n) {
              let t = new _.Hx(n);
              (0, E.j)(() => {
                e({
                  isLoading: !1,
                  errorMessage: (function (e) {
                    if (e.code === A.evJ.INVALID_FORM_BODY) {
                      var t, n;
                      if (
                        (null === (n = e.errors) || void 0 === n
                          ? void 0
                          : null === (t = n.trigger_metadata) || void 0 === t
                            ? void 0
                            : t.regex_patterns) != null
                      )
                        return N.Z.Messages
                          .GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR;
                    }
                    return e.getAnyErrorMessage();
                  })(t),
                });
              });
            }
            return null;
          },
          saveEditingRule: (e) => {
            let { editingRule: n, saveRule: r } = t();
            return r(n, e);
          },
        }));
      function M() {
        return c((e) => ({
          hasChanges: e.hasChanges,
          editingRule: e.editingRule,
          isLoading: e.isLoading,
          errorMessage: e.errorMessage,
          saveRule: e.saveRule,
          saveEditingRule: e.saveEditingRule,
          cancelEditingRule: e.cancelEditingRule,
        }));
      }
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = c((e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            setEditingRule: e.setEditingRule,
            createNewEditingRule: e.createNewEditingRule,
          }));
        return null != e && t.setEditingRule(e), t;
      }
    },
    556012: function (e, t, n) {
      n.d(t, {
        c: function () {
          return S;
        },
      });
      var r = n(481060),
        a = n(933557),
        i = n(592125),
        E = n(699516),
        _ = n(594174),
        u = n(273504),
        l = n(590433),
        s = n(689938);
      let o = (e) => {
          if (e === u.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        I = (e) => {
          switch (e) {
            case u.jj.BLOCK_MESSAGE:
            case u.jj.FLAG_TO_CHANNEL:
            case u.jj.USER_COMMUNICATION_DISABLED:
            case u.jj.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        T = (e) => {
          switch (e) {
            case u.jj.BLOCK_MESSAGE:
              return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
            case u.jj.FLAG_TO_CHANNEL:
              return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
            case u.jj.USER_COMMUNICATION_DISABLED:
              return s.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
            case u.jj.QUARANTINE_USER:
              return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
          }
        },
        O = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.fX.KEYWORD;
          switch (e) {
            case u.jj.BLOCK_MESSAGE:
              switch (t) {
                case u.fX.MENTION_SPAM:
                  return s.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                case u.fX.ML_SPAM:
                  return s.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                default:
                  return s.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION;
              }
            case u.jj.FLAG_TO_CHANNEL:
              return s.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
            case u.jj.USER_COMMUNICATION_DISABLED:
              return s.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
            case u.jj.QUARANTINE_USER:
              return s.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION;
          }
        },
        A = (e, t) => {
          var n, r, o;
          switch (e) {
            case u.jj.QUARANTINE_USER:
            case u.jj.BLOCK_MESSAGE:
              return null;
            case u.jj.FLAG_TO_CHANNEL: {
              let e =
                null == t
                  ? void 0
                  : null === (n = t.metadata) || void 0 === n
                    ? void 0
                    : n.channelId;
              if (null == e) return null;
              let r = i.Z.getChannel(e);
              if (null == r) return null;
              let u = (0, a.F6)(r, _.default, E.Z);
              return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format(
                { channelName: u },
              );
            }
            case u.jj.USER_COMMUNICATION_DISABLED: {
              let e =
                  null !==
                    (o =
                      null == t
                        ? void 0
                        : null === (r = t.metadata) || void 0 === r
                          ? void 0
                          : r.durationSeconds) && void 0 !== o
                    ? o
                    : 0,
                n = (0, l.L9)(e);
              if (null == n) return null;
              return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format(
                { duration: n },
              );
            }
          }
        },
        N = (e) => {
          switch (e) {
            case u.jj.BLOCK_MESSAGE:
              return r.CircleXIcon;
            case u.jj.FLAG_TO_CHANNEL:
              return r.TextIcon;
            case u.jj.USER_COMMUNICATION_DISABLED:
              return r.ClockWarningIcon;
            case u.jj.QUARANTINE_USER:
              return r.ChatXIcon;
          }
        };
      function S(e, t, n) {
        var a, i, E, _;
        return I(e)
          ? {
              headerText: null !== (a = T(e)) && void 0 !== a ? a : "",
              descriptionText: null !== (i = O(e, n)) && void 0 !== i ? i : "",
              helperText: null !== (E = A(e, t)) && void 0 !== E ? E : null,
              icon: null !== (_ = N(e)) && void 0 !== _ ? _ : r.CircleXIcon,
              isEditable: o(e),
            }
          : null;
      }
    },
    572456: function (e, t, n) {
      n.d(t, {
        XN: function () {
          return _;
        },
        af: function () {
          return u;
        },
        gK: function () {
          return E;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(481060);
      function i(e) {
        return new Promise((t) => {
          (0, a.openModalLazy)(() =>
            e(
              () => {
                t(!0);
              },
              (e) => (t(!1), e()),
            ),
          );
        });
      }
      let E = (e) =>
          i(async (t, a) => {
            let { default: i } = await n.e("44462").then(n.bind(n, 478472));
            return (n) =>
              (0, r.jsx)(i, {
                ...n,
                ruleName: e,
                onConfirm: t,
                onClose: () => a(n.onClose),
                onCancel: () => a(n.onClose),
              });
          }),
        _ = (e, t) =>
          i(async (a, i) => {
            let { default: E } = await n.e("92575").then(n.bind(n, 601787));
            return (n) =>
              (0, r.jsx)(E, {
                ...n,
                ruleName: e,
                keyword: t,
                onConfirm: a,
                onClose: () => i(n.onClose),
                onCancel: () => i(n.onClose),
              });
          }),
        u = (e) => (t) =>
          i(async (a, i) => {
            let { default: E } = await n.e("83613").then(n.bind(n, 449675)),
              _ = () => {
                t(), a();
              };
            return (t) =>
              (0, r.jsx)(E, {
                ruleName: e,
                ...t,
                onConfirm: _,
                onClose: () => i(t.onClose),
                onCancel: () => i(t.onClose),
              });
          });
    },
    821864: function (e, t, n) {
      n.d(t, {
        I4: function () {
          return I;
        },
        Sn: function () {
          return s;
        },
        U3: function () {
          return O;
        },
        Ui: function () {
          return T;
        },
        W4: function () {
          return l;
        },
        gq: function () {
          return o;
        },
        kZ: function () {
          return u;
        },
      });
      var r = n(544891),
        a = n(570140),
        i = n(555573),
        E = n(581364),
        _ = n(981631);
      function u() {
        a.Z.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function l(e, t, n) {
        a.Z.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function s(e, t) {
        r.tn.get(_.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
          (n) => {
            a.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: n.body.application_commands,
              guildId: e,
              permissions: n.body.permissions,
            });
          },
          () => {
            a.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          },
        );
      }
      async function o(e, t, n) {
        let i = [];
        try {
          let a = await r.tn.get(
            _.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          );
          a.ok && (i = a.body.permissions);
        } catch (r) {
          if (404 !== r.status) {
            a.Z.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: n,
              guildId: t,
            });
            return;
          }
        }
        a.Z.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: n,
          guildId: t,
          permissions: i,
        });
      }
      function I(e) {
        a.Z.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function T(e) {
        a.Z.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function O(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: r,
            defaultEverywhereValue: _,
            guildId: u,
            permissions: l,
          } = e,
          s =
            n === t
              ? (function (e, t, n, r) {
                  if (!n || !r) return t;
                  let a = { [e]: n, [(0, E.bD)(e)]: r };
                  return t.filter((e) => {
                    let t = a[e.id];
                    return null == t || e.permission !== t;
                  });
                })(u, l, r, _)
              : l,
          o = await i.dh(t, u, n, s);
        o.ok &&
          a.Z.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: u,
            permissions: o.body.permissions,
          });
      }
    },
  },
]);
//# sourceMappingURL=54fc7f19229d55941def.js.map
