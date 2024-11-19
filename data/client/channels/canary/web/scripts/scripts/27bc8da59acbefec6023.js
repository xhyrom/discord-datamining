"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93375"],
  {
    866830: function (e, t, n) {
      n.d(t, {
        U5: function () {
          return l;
        },
        qR: function () {
          return i;
        },
      });
      var r = n(273504);
      function i(e) {
        let t = l();
        return Array.from(e.defaultActionTypes).map((e) => t[e]);
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
          return v;
        },
        DO: function () {
          return E;
        },
        Fn: function () {
          return g;
        },
        Jq: function () {
          return A;
        },
        QO: function () {
          return j;
        },
        Vb: function () {
          return N;
        },
        YN: function () {
          return L;
        },
        ZF: function () {
          return M;
        },
        ep: function () {
          return _;
        },
        km: function () {
          return R;
        },
        nC: function () {
          return S;
        },
        vo: function () {
          return d;
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
        c = n(273504),
        s = n(388032);
      let f = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
        E = (e) => (null == e ? void 0 : e.triggerType) === c.fX.KEYWORD,
        d = (e) => (null == e ? void 0 : e.triggerType) === c.fX.ML_SPAM,
        g = (e) =>
          (null == e ? void 0 : e.triggerType) === c.fX.DEFAULT_KEYWORD_LIST,
        S = (e) => (null == e ? void 0 : e.triggerType) === c.fX.MENTION_SPAM,
        A = (e) => (null == e ? void 0 : e.triggerType) === c.fX.USER_PROFILE;
      function _(e, t) {
        let n = o.I6[t],
          r = (0, o.jp)(t, e),
          u = {
            id: f(e, t),
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, l.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
          };
        if (N(u)) throw Error(s.intl.string(s.t["A/nX8P"]));
        let c = (0, a.mY)(e, t);
        return c > 0 && (u.name += " ".concat(c + 1)), u;
      }
      function R(e, t) {
        if (e.length > t)
          throw Error(s.intl.formatToPlainString(s.t.mee4qa, { limit: t }));
        e.forEach((e) => {
          if (e.length > c.hu || e.length < c.Vk)
            throw new u.V6(
              s.intl.formatToPlainString(s.t.rbRvGR, {
                keyword: e,
                max: c.hu,
                min: c.Vk,
              }),
            );
        });
      }
      function j(e) {
        if (E(e)) {
          var t, n;
          let r =
              null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t
                ? t
                : [],
            i =
              null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n
                ? n
                : [];
          if (0 === r.length && 0 === i.length)
            throw Error(s.intl.string(s.t.kz2Av7));
          R(r, c.RH),
            !(function (e) {
              if (e.length > c.VW)
                throw Error(
                  s.intl.formatToPlainString(s.t.tDjhFx, { limit: c.VW }),
                );
              e.forEach((e) => {
                if (e.length > c.aj || e.length < c.uE)
                  throw new u.uS(
                    s.intl.formatToPlainString(s.t["WR0m9/"], {
                      regex: e,
                      max: c.aj,
                      min: c.uE,
                    }),
                  );
              });
            })(i);
        }
        if (0 === e.actions.length) throw Error(s.intl.string(s.t["t+gj5e"]));
      }
      function N(e) {
        var t;
        return (0, r.BH)(
          null !== (t = null == e ? void 0 : e.id) && void 0 !== t
            ? t
            : "INVALID_SNOWFLAKE",
        );
      }
      function L(e) {
        switch (e) {
          case c.q4.MESSAGE_SEND:
            return s.intl.string(s.t.NlQW4O);
          case c.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.intl.string(s.t["Q+68IS"]);
          default:
            return s.intl.string(s.t.SP9BBw);
        }
      }
      function M(e) {
        switch (e) {
          case c.jj.BLOCK_MESSAGE:
            return s.intl.string(s.t.d1ab8v);
          case c.jj.FLAG_TO_CHANNEL:
            return s.intl.string(s.t["Y+Vmvb"]);
          case c.jj.USER_COMMUNICATION_DISABLED:
            return s.intl.string(s.t["6WPxY2"]);
          case c.jj.QUARANTINE_USER:
            return s.intl.string(s.t.NPO8eX);
          default:
            return s.intl.string(s.t.SP9BBw);
        }
      }
      function v(e) {
        switch (e) {
          case c.fX.KEYWORD:
            return s.intl.string(s.t.ffR2cH);
          case c.fX.ML_SPAM:
            return s.intl.string(s.t["puF/Oj"]);
          case c.fX.DEFAULT_KEYWORD_LIST:
            return s.intl.string(s.t.LnGhZm);
          case c.fX.MENTION_SPAM:
            return s.intl.string(s.t.pX7i6u);
          case c.fX.USER_PROFILE:
            return s.intl.string(s.t.q1L2v7);
          default:
            return s.intl.string(s.t.SP9BBw);
        }
      }
    },
    727072: function (e, t, n) {
      n.d(t, {
        I2: function () {
          return A;
        },
        RD: function () {
          return _;
        },
        mY: function () {
          return S;
        },
        pH: function () {
          return R;
        },
      }),
        n(653041),
        n(47120),
        n(724458);
      var r = n(192379),
        i = n(976649),
        l = n(454e3),
        u = n(731965),
        a = n(881052),
        o = n(36459),
        c = n(866894),
        s = n(273504),
        f = n(981631);
      let E = {},
        d = (e) => {
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
        g = (0, l.F)((e, t) => ({
          rules: {},
          fetching: !1,
          error: null,
          updateRule: (n) => {
            var r, i;
            let { guildId: l, id: a, triggerType: o } = n,
              { rules: s } = t(),
              f = null !== (r = s[l]) && void 0 !== r ? r : {},
              E = null !== (i = f[o]) && void 0 !== i ? i : [],
              d = E.some((e) => e.id === a),
              g = E.filter(
                (e) => (!(0, c.U)(e.id) || e.triggerType !== o) && !0,
              ),
              S = d ? g.map((e) => (e.id === a ? n : e)) : [...g, n];
            (0, u.j)(() => {
              e({ rules: { ...s, [l]: { ...f, [o]: S } }, error: null });
            });
          },
          removeRule: (n, r) => {
            let { rules: i } = t(),
              l = i[r],
              a = Object.keys(l).reduce((e, t) => {
                var r;
                let i = Number(t),
                  u = null !== (r = l[i]) && void 0 !== r ? r : [];
                return (e[i] = u.filter((e) => e.id !== n)), e;
              }, l);
            (0, u.j)(() => {
              e({ rules: { ...i, [r]: a }, error: null });
            });
          },
          syncRules: async (n) => {
            if (
              !!(function (e) {
                var t;
                let n = Date.now(),
                  r = null !== (t = E[e]) && void 0 !== t ? t : 0;
                return n - r > 2e4;
              })(n)
            ) {
              E[n] = Date.now();
              try {
                let r = await (0, o.$Y)(n),
                  i = d(r),
                  l = t().rules;
                (0, u.j)(() => {
                  e({ rules: { ...l, [n]: i }, error: null });
                });
              } catch (n) {
                let t = new a.Hx(n);
                (0, u.j)(() => {
                  e({ error: t });
                });
              }
            }
          },
        })),
        S = (e, t) => {
          var n, r;
          return (
            null !==
              (r =
                null === (n = g.getState().rules[e]) || void 0 === n
                  ? void 0
                  : n[t]) && void 0 !== r
              ? r
              : []
          ).length;
        };
      function A(e) {
        let [t, n] = r.useState(!1),
          [l, u] = g((e) => [e.syncRules, e.fetching], i.X);
        return [
          t,
          r.useCallback(async () => {
            if (!u && null != e)
              try {
                n(!0), await l(e);
              } finally {
                n(!1);
              }
          }, [e, u, l]),
        ];
      }
      function _(e) {
        let [t, n] = A(e);
        return (
          r.useEffect(() => {
            (async () => {
              await n();
            })();
          }, [e, n]),
          [t, n]
        );
      }
      function R(e) {
        return g((t) => {
          var n;
          return {
            rulesByTriggerType:
              null !== (n = t.rules[null != e ? e : f.lds]) && void 0 !== n
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
          return E;
        },
        V9: function () {
          return S;
        },
        Z6: function () {
          return _;
        },
        jp: function () {
          return R;
        },
        r5: function () {
          return g;
        },
        vT: function () {
          return r;
        },
        vh: function () {
          return i;
        },
        yU: function () {
          return A;
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
        c = n(676317),
        s = n(273504),
        f = n(388032);
      ((l = r || (r = {})).NEW = "new"),
        (l.RECOMMENDED = "recommended"),
        (l.BETA = "beta"),
        (l.ALPHA = "alpha");
      let E = {
        [s.fX.SPAM_LINK]: {
          getDefaultRuleName: () => f.intl.string(f.t.ffR2cH),
          type: s.fX.SPAM_LINK,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 0,
          availableActionTypes: new Set(),
          flags: new Set(),
          defaultActionTypes: new Set(),
        },
        [s.fX.KEYWORD]: {
          getDefaultRuleName: () => f.intl.string(f.t.ffR2cH),
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
          getDefaultRuleName: () => f.intl.string(f.t["puF/Oj"]),
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
          getDefaultRuleName: () => f.intl.string(f.t.LnGhZm),
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
          getDefaultRuleName: () => f.intl.string(f.t.pX7i6u),
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
          getDefaultRuleName: () => f.intl.string(f.t.q1L2v7),
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
          getDefaultRuleName: () => f.intl.string(f.t.ZQr92N),
          type: s.fX.SERVER_POLICY,
          eventType: s.q4.MESSAGE_SEND,
          perGuildMaxCount: 1,
          availableActionTypes: new Set([s.jj.FLAG_TO_CHANNEL]),
          flags: new Set(["alpha"]),
          defaultActionTypes: new Set(),
        },
      };
      ((u = i || (i = {})).MEMBERS = "members"), (u.CONTENT = "content");
      let d = {
          members: [E[s.fX.USER_PROFILE]],
          content: [
            E[s.fX.SERVER_POLICY],
            E[s.fX.MENTION_SPAM],
            E[s.fX.ML_SPAM],
            E[s.fX.DEFAULT_KEYWORD_LIST],
            E[s.fX.KEYWORD],
          ],
        },
        g = (e, t) => E[e].flags.has(t);
      function S(e) {
        return Array.from(E[e].availableActionTypes);
      }
      function A(e, t) {
        let { id: n, eventType: r, triggerType: i, actions: l } = e,
          u = E[i];
        if (
          t.filter((e) => n !== e.id && e.triggerType === i).length >
          u.perGuildMaxCount
        )
          throw Error(
            "You have exceeded the maximum number of rules of type ".concat(i),
          );
        if (l.some((e) => !u.availableActionTypes.has(e.type)))
          throw Error(
            "You have provided an action that is not available for this trigger type",
          );
        if (r !== u.eventType)
          throw Error(
            "You have provided an event type that is not available for this trigger type",
          );
      }
      function _(e) {
        let t = (0, c.oA)(e);
        return a.useMemo(
          () =>
            Object.keys(d).reduce(
              (e, n) => {
                let r = d[n]
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
      function R(e, t) {
        let n = (0, o.H)(t);
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
          return i;
        },
        a: function () {
          return l;
        },
      });
      var r = n(460083);
      function i(e) {
        let { enabled: t } = r.d.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return t;
      }
      function l(e) {
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
          return c;
        },
      }),
        n(757143),
        n(47120),
        n(627494);
      let r = /[\t\n,]/g,
        i = /\s{2,}/g,
        l = /[*"']/g;
      function u(e) {
        return e
          .split(r)
          .map((e) => e.replace(i, " ").trim())
          .filter((e) => e.length > 0);
      }
      function a(e) {
        return Array.from(new Set(e));
      }
      function o(e) {
        return e.sort((e, t) => {
          let n = e.replaceAll(l, ""),
            r = t.replaceAll(l, "");
          return n.localeCompare(r);
        });
      }
      function c(e) {
        return e.join(", ");
      }
      function s(e) {
        return e.includes("\n") || e.includes(",");
      }
    },
    676317: function (e, t, n) {
      n.d(t, {
        Nb: function () {
          return c;
        },
        oA: function () {
          return f;
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
      let a = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.Z,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.Z,
          r = t.getGuild(e);
        return null != r && n.can(u.Plq.MANAGE_GUILD, r);
      };
      function o(e) {
        return null != e && a(e);
      }
      function c(e) {
        return a(e);
      }
      function s(e) {
        return (0, r.e7)([i.Z, l.Z], () => a(e, i.Z, l.Z), [e]);
      }
      function f(e) {
        return (0, r.e7)(
          [i.Z],
          () => {
            let t = i.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY)) || !1;
          },
          [e],
        );
      }
    },
    866894: function (e, t, n) {
      n.d(t, {
        U: function () {
          return i;
        },
      }),
        n(47120);
      let r = new Set(["1030554520465440818"]);
      function i(e) {
        return null != e && r.has(e);
      }
    },
    65912: function (e, t, n) {
      n.d(t, {
        V: function () {
          return N;
        },
        w: function () {
          return j;
        },
      });
      var r = n(392711),
        i = n.n(r),
        l = n(905837),
        u = n(731965),
        a = n(881052),
        o = n(823379),
        c = n(539573),
        s = n(236413),
        f = n(85960),
        E = n(36459),
        d = n(422303),
        g = n(866894),
        S = n(981631),
        A = n(388032);
      let _ = Object.freeze({
          editingRule: null,
          hasChanges: !1,
          isLoading: !1,
          errorMessage: null,
        }),
        R = (0, l.Ue)((e, t) => ({
          editingRule: null,
          hasChanges: !1,
          setEditingRule: (n) => {
            let r = t().editingRule,
              l = null != n && null != r && n.id === r.id,
              a = i().cloneDeep(n);
            null != a && (a = { ...a, actions: a.actions.filter(o.lm) }),
              (0, u.j)(() =>
                e({ editingRule: a, hasChanges: l, errorMessage: null }),
              );
          },
          createNewEditingRule: (t, n, r) => {
            let i = { ...(0, s.ep)(t, n), ...(null != r ? r : {}) };
            return (0, u.j)(() => e({ editingRule: i, hasChanges: !1 })), i;
          },
          isLoading: !1,
          errorMessage: null,
          cancelEditingRule: () => {
            (0, u.j)(() => e({ ..._ }));
          },
          saveRule: async (t, n) => {
            if (null == t) return (0, u.j)(() => e({ ..._ })), null;
            try {
              var r, i, l;
              (0, s.DO)(t) &&
                ((t.triggerMetadata.keywordFilter = (0, d.cb)(
                  (0, d.Ze)(
                    null !== (r = t.triggerMetadata.keywordFilter) &&
                      void 0 !== r
                      ? r
                      : [],
                  ),
                )),
                (t.triggerMetadata.allowList = (0, d.cb)(
                  (0, d.Ze)(
                    null !== (i = t.triggerMetadata.allowList) && void 0 !== i
                      ? i
                      : [],
                  ),
                ))),
                (0, s.Fn)(t) &&
                  (t.triggerMetadata.allowList = (0, d.cb)(
                    (0, d.Ze)(
                      null !== (l = t.triggerMetadata.allowList) && void 0 !== l
                        ? l
                        : [],
                    ),
                  )),
                (0, f.yU)(t, n),
                (0, s.QO)(t);
            } catch (t) {
              return (
                t instanceof c.V6
                  ? (0, u.j)(() => {
                      e({
                        errorMessage: A.intl.string(A.t["4Dxaur"]),
                        isLoading: !1,
                      });
                    })
                  : t instanceof c.uS
                    ? (0, u.j)(() => {
                        e({
                          errorMessage: A.intl.string(A.t.hDPEu7),
                          isLoading: !1,
                        });
                      })
                    : (0, u.j)(() => {
                        e({ errorMessage: t.message, isLoading: !1 });
                      }),
                null
              );
            }
            try {
              (0, u.j)(() => {
                e({ isLoading: !0 });
              });
              let n = null;
              return (
                (n =
                  (0, s.Vb)(t) && !(0, g.U)(t.id)
                    ? await (0, E.Je)(t)
                    : await (0, E.JK)(t)),
                (0, u.j)(() => e({ ..._ })),
                n
              );
            } catch (n) {
              let t = new a.Hx(n);
              (0, u.j)(() => {
                e({
                  isLoading: !1,
                  errorMessage: (function (e) {
                    if (e.code === S.evJ.INVALID_FORM_BODY) {
                      var t, n;
                      if (
                        (null === (n = e.errors) || void 0 === n
                          ? void 0
                          : null === (t = n.trigger_metadata) || void 0 === t
                            ? void 0
                            : t.regex_patterns) != null
                      )
                        return A.intl.string(A.t.hDPEu7);
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
      function j() {
        return R((e) => ({
          hasChanges: e.hasChanges,
          editingRule: e.editingRule,
          isLoading: e.isLoading,
          errorMessage: e.errorMessage,
          saveRule: e.saveRule,
          saveEditingRule: e.saveEditingRule,
          cancelEditingRule: e.cancelEditingRule,
        }));
      }
      function N() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = R((e) => ({
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
          return _;
        },
      });
      var r = n(481060),
        i = n(933557),
        l = n(592125),
        u = n(699516),
        a = n(594174),
        o = n(273504),
        c = n(590433),
        s = n(388032);
      let f = (e) => {
          if (e === o.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        E = (e) => {
          switch (e) {
            case o.jj.BLOCK_MESSAGE:
            case o.jj.FLAG_TO_CHANNEL:
            case o.jj.USER_COMMUNICATION_DISABLED:
            case o.jj.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        d = (e) => {
          switch (e) {
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
        g = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.fX.KEYWORD;
          switch (e) {
            case o.jj.BLOCK_MESSAGE:
              switch (t) {
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
        S = (e, t) => {
          var n, r, f;
          switch (e) {
            case o.jj.QUARANTINE_USER:
            case o.jj.BLOCK_MESSAGE:
              return null;
            case o.jj.FLAG_TO_CHANNEL: {
              let e =
                null == t
                  ? void 0
                  : null === (n = t.metadata) || void 0 === n
                    ? void 0
                    : n.channelId;
              if (null == e) return null;
              let r = l.Z.getChannel(e);
              if (null == r) return null;
              let o = (0, i.F6)(r, a.default, u.Z);
              return s.intl.format(s.t.xQXnkJ, { channelName: o });
            }
            case o.jj.USER_COMMUNICATION_DISABLED: {
              let e =
                  null !==
                    (f =
                      null == t
                        ? void 0
                        : null === (r = t.metadata) || void 0 === r
                          ? void 0
                          : r.durationSeconds) && void 0 !== f
                    ? f
                    : 0,
                n = (0, c.L9)(e);
              if (null == n) return null;
              return s.intl.format(s.t.AFmbfX, { duration: n });
            }
          }
        },
        A = (e) => {
          switch (e) {
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
      function _(e, t, n) {
        var i, l, u, a;
        return E(e)
          ? {
              headerText: null !== (i = d(e)) && void 0 !== i ? i : "",
              descriptionText: null !== (l = g(e, n)) && void 0 !== l ? l : "",
              helperText: null !== (u = S(e, t)) && void 0 !== u ? u : null,
              icon: null !== (a = A(e)) && void 0 !== a ? a : r.CircleXIcon,
              isEditable: f(e),
            }
          : null;
      }
    },
    572456: function (e, t, n) {
      n.d(t, {
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
      function l(e) {
        return new Promise((t) => {
          (0, i.openModalLazy)(() =>
            e(
              () => {
                t(!0);
              },
              (e) => (t(!1), e()),
            ),
          );
        });
      }
      let u = (e) =>
          l(async (t, i) => {
            let { default: l } = await n.e("44462").then(n.bind(n, 478472));
            return (n) =>
              (0, r.jsx)(l, {
                ...n,
                ruleName: e,
                onConfirm: t,
                onClose: () => i(n.onClose),
                onCancel: () => i(n.onClose),
              });
          }),
        a = (e, t) =>
          l(async (i, l) => {
            let { default: u } = await n.e("92575").then(n.bind(n, 601787));
            return (n) =>
              (0, r.jsx)(u, {
                ...n,
                ruleName: e,
                keyword: t,
                onConfirm: i,
                onClose: () => l(n.onClose),
                onCancel: () => l(n.onClose),
              });
          }),
        o = (e) => (t) =>
          l(async (i, l) => {
            let { default: u } = await n.e("83613").then(n.bind(n, 449675)),
              a = () => {
                t(), i();
              };
            return (t) =>
              (0, r.jsx)(u, {
                ruleName: e,
                ...t,
                onConfirm: a,
                onClose: () => l(t.onClose),
                onCancel: () => l(t.onClose),
              });
          });
    },
  },
]);
//# sourceMappingURL=27bc8da59acbefec6023.js.map
