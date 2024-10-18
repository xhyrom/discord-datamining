"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43035"],
  {
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return _;
        },
        _: function () {
          return l;
        },
      });
      var r = n(544891),
        i = n(570140),
        s = n(480294),
        I = n(814443),
        u = n(428598),
        a = n(981631);
      function _() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return I.Z.needsRefresh()
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: a.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function l() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return u.Z.shouldFetch() && s.Z.hasConsented(a.pjP.PERSONALIZATION)
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: a.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, r, i, s, I, u, a;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
                            : 0,
                        vcRank:
                          null !== (i = e.vc_rank) && void 0 !== i ? i : 0,
                        serverMessageProbability:
                          null !== (s = e.server_message_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        serverMessageRank:
                          null !== (I = e.server_message_rank) && void 0 !== I
                            ? I
                            : 0,
                        communicationProbability:
                          null !== (u = e.communication_probability) &&
                          void 0 !== u
                            ? u
                            : 0,
                        communicationRank:
                          null !== (a = e.communication_rank) && void 0 !== a
                            ? a
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      let r = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      let r;
      n(47120);
      var i,
        s = n(442837),
        I = n(570140),
        u = n(699516),
        a = n(496232);
      function _(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let l = !1,
        o = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        E = { ...o };
      function S() {
        r = new Map(
          E.userAffinities
            .filter((e) => !u.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class N extends (i = s.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(u.Z),
            null != e &&
              ((E.userAffinities = e.userAffinities),
              (E.lastFetched = e.lastFetched),
              S()),
            this.syncWith([u.Z], S);
        }
        shouldFetch() {
          if (!l) return Date.now() - E.lastFetched > a.K;
        }
        isFetching() {
          return l;
        }
        getUserAffinities() {
          return E.userAffinities;
        }
        getUserAffinity(e) {
          return r.get(e);
        }
        getState() {
          return E;
        }
      }
      _(N, "displayName", "UserAffinitiesStoreV2"),
        _(N, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new N(I.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            l = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (E.lastFetched = Date.now()), (l = !1), (E.userAffinities = t), S();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            l = !1;
          },
          LOGOUT: function () {
            (E = { ...o }), (r = new Map()), (l = !1);
          },
        }));
    },
    55589: function (e, t, n) {
      let r, i, s;
      n(47120), n(653041);
      var I,
        u,
        a,
        _,
        l,
        o,
        E = n(913527),
        S = n.n(E),
        N = n(442837),
        O = n(759174),
        T = n(570140),
        f = n(355298),
        c = n(333984),
        d = n(131704),
        m = n(592125),
        A = n(430824),
        P = n(306680),
        U = n(9156),
        h = n(594174),
        g = n(709054),
        M = n(176505);
      ((a = I || (I = {})).DEFAULT = "DEFAULT"), (a.FAVORITE = "FAVORITE");
      let R = new O.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function D(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let r =
                    null !==
                      (n =
                        null !== (t = P.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = S()(i).valueOf(),
                    t = g.default.fromTimestamp(e);
                  return g.default.compare(r, t) > 0 ? r : t;
                }
                return r;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: f.Z.isMessageRequest(e.id) || c.Z.isSpam(e.id),
        };
      }
      function p() {
        R.clear(),
          Object.values(m.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, D(e));
          });
      }
      function V() {
        let e = m.Z.getMutablePrivateChannels();
        for (let t in e) R.set(t, D(e[t]));
      }
      let v =
        ((r = []),
        (i = []),
        (s = []),
        () => {
          let e = R.values("FAVORITE"),
            t = R.values("DEFAULT");
          return (
            (r !== e || i !== t) &&
              ((s = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return s.push(t);
              }),
              (r = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return s.push(t);
              }),
              (i = t)),
            s
          );
        });
      class Z extends (u = N.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, A.Z, h.default, f.Z, U.ZP),
            this.syncWith([U.ZP, f.Z], p);
        }
        getPrivateChannelIds() {
          return v();
        }
        getSortedChannels() {
          return [R.values("FAVORITE"), R.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            R.values().forEach((t) => {
              let { channelId: n, lastMessageId: r } = t;
              e[n] = r;
            }),
            e
          );
        }
      }
      (o = "PrivateChannelSortStore"),
        (l = "displayName") in (_ = Z)
          ? Object.defineProperty(_, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (_[l] = o),
        (t.Z = new Z(T.Z, {
          CONNECTION_OPEN: p,
          CONNECTION_OPEN_SUPPLEMENTAL: p,
          OVERLAY_INITIALIZE: p,
          CACHE_LOADED: V,
          CACHE_LOADED_LAZY: V,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, d.hv)(e.type) || R.has(e.id)) && R.set(e.id, D(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, d.hv)(t.type) || t.id === M.V) return !1;
            R.set(t.id, D(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let r = m.Z.getChannel(t);
            return null != r && R.set(t, D(r, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return R.delete(t);
          },
          LOGOUT: function () {
            R.clear();
          },
        }));
    },
    971130: function (e, t, n) {
      let r;
      n.d(t, {
        Sz: function () {
          return D;
        },
        Vg: function () {
          return v;
        },
        an: function () {
          return M;
        },
        bm: function () {
          return i;
        },
        rh: function () {
          return R;
        },
      }),
        n(653041),
        n(47120);
      var i,
        s,
        I = n(317381),
        u = n(592125),
        a = n(271383),
        _ = n(306680),
        l = n(699516),
        o = n(594174),
        E = n(55589),
        S = n(483360),
        N = n(981631),
        O = n(245335),
        T = n(689938);
      (r = n(603617)),
        ((s = i || (i = {})).GROUP_DM = "GROUP_DM"),
        (s.DM = "DM"),
        (s.FRIEND = "FRIEND"),
        (s.CHANNEL = "CHANNEL");
      let f = (e, t) => null != e && a.ZP.isMember(e, t),
        c = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: n,
            maxRowsWithoutQuery: r,
            omitGuildId: i,
            shownUserIds: s,
            rows: I,
            counts: u,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != r && r > 0 && I.length >= r) break;
              if (t.has(e) || s.has(e)) continue;
              let n = o.default.getUser(e);
              !(null == n || f(i, n.id)) &&
                (s.add(n.id),
                I.push({ type: "FRIEND", item: n, isSuggested: !0 }),
                u.numFriends++);
            }
        },
        d = (e) => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: n,
            rows: r,
            counts: i,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != n && n > 0 && r.length >= n) break;
              let t = u.Z.getChannel(e);
              null != t &&
                (r.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                i.numChannels++);
            }
        },
        m = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: n,
              omitGuildId: r,
              shownUserIds: i,
              rows: s,
              counts: I,
              includeGroupDms: a,
              limit: l,
            } = e,
            S = 0;
          for (let e of E.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && s.length >= n) || (null != l && S >= l))
              break;
            let E = u.Z.getChannel(e);
            if (null == E || !E.isPrivate()) continue;
            if (a && E.type === N.d4z.GROUP_DM) {
              s.push({ type: "GROUP_DM", item: E, isSuggested: !1 }),
                I.numGroupDms++,
                S++;
              continue;
            }
            if (null == _.ZP.lastMessageId(E.id)) continue;
            let O = E.getRecipientId();
            if (null != O && !t.has(O) && !i.has(O)) {
              let e = o.default.getUser(O);
              if (null == e || e.bot || f(r, e.id)) continue;
              i.add(e.id),
                s.push({ type: "DM", item: e, isSuggested: !1 }),
                I.numDms++,
                S++;
            }
          }
        },
        A = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: n,
            omitGuildId: r,
            shownUserIds: i,
            rows: s,
            counts: I,
          } = e;
          for (let e of l.Z.getFriendIDs()) {
            if (null != n && n > 0 && s.length >= n) break;
            if (t.has(e) || i.has(e)) continue;
            let u = o.default.getUser(e);
            !(null == u || f(r, u.id)) &&
              (s.push({ type: "FRIEND", item: u, isSuggested: !1 }),
              I.numFriends++);
          }
        },
        P = (e) => {
          let { query: t, rows: n, counts: r, inviteTargetType: i } = e;
          i === O.Iq.EMBEDDED_APPLICATION &&
            S.ZP.queryChannels({ query: t, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: t } = e;
                n.push({ type: "CHANNEL", item: t, isSuggested: !1 }),
                  r.numChannels++;
              },
            );
        },
        U = (e) => {
          let {
            query: t,
            omitUserIds: n,
            shownUserIds: r,
            rows: i,
            counts: s,
          } = e;
          S.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let I = u.Z.getDMFromUserId(t.id);
            if (null != I && null != _.ZP.lastMessageId(I))
              r.add(t.id),
                i.push({ type: "DM", item: t, isSuggested: !1 }),
                s.numDms++;
          });
        },
        h = (e) => {
          let { query: t, rows: n, counts: r } = e;
          S.ZP.queryGroupDMs({ query: t, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              n.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                r.numGroupDms++;
            },
          );
        },
        g = (e) => {
          let {
            query: t,
            rows: n,
            counts: r,
            omitUserIds: i,
            shownUserIds: s,
          } = e;
          S.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(i.has(t.id) || s.has(t.id)))
                s.add(t.id),
                  n.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  r.numFriends++;
            },
          );
        };
      function M(e) {
        let {
            query: t,
            inviteTargetType: n,
            omitUserIds: r,
            suggestedUserIds: i,
            suggestedChannelIds: s,
            maxRowsWithoutQuery: I,
            omitGuildId: u,
          } = e,
          a = new Set(),
          _ = [],
          l = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: r,
            maxRowsWithoutQuery: I,
            omitGuildId: u,
            shownUserIds: a,
            rows: _,
            counts: l,
          };
          n === O.Iq.EMBEDDED_APPLICATION &&
            (m({ ...e, includeGroupDms: !1, limit: 1 }),
            d({ ...e, suggestedChannelIds: s })),
            c({ ...e, suggestedUserIds: i }),
            m({ ...e, includeGroupDms: !0 }),
            A(e);
        } else {
          let e = { query: t, rows: _, counts: l };
          n === O.Iq.EMBEDDED_APPLICATION && P({ ...e, inviteTargetType: n }),
            U({ ...e, omitUserIds: r, shownUserIds: a }),
            h(e),
            g({ ...e, omitUserIds: r, shownUserIds: a });
        }
        return { rows: _, counts: l };
      }
      function R(e, t) {
        for (let n of E.Z.getPrivateChannelIds()) {
          let r = u.Z.getChannel(n);
          if (null == r || !r.isDM() || null == _.ZP.lastMessageId(r.id))
            continue;
          let i = r.getRecipientId();
          if (null != i && !e.has(i)) {
            let e = o.default.getUser(i);
            if (null == e || e.bot || f(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function D(e) {
        let { channel: t, inviteTargetType: n, applicationId: r } = e;
        if (n === O.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of I.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === r) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let p = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        V = {
          [r.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: p.MINUTES },
          [r.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: p.HOURS },
          [r.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: p.HOURS },
          [r.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: p.HOURS },
          [r.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: p.DAYS },
          [r.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: p.DAYS },
          [r.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: p.NEVER },
        };
      function v(e, t) {
        let n = parseInt(t, 10),
          r = 0 === n,
          i = V[e].value;
        switch (V[e].type) {
          case p.MINUTES:
            if (r) return T.Z.Messages.INVITE_EXPIRES_MINUTES;
            return T.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
              numUses: n,
            });
          case p.HOURS:
            if (r)
              return T.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: i });
            return T.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
              numHours: i,
              numUses: n,
            });
          case p.DAYS:
            if (r)
              return T.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                numDays: i,
              });
            return T.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
              numDays: i,
              numUses: n,
            });
          case p.NEVER:
            if (r) return T.Z.Messages.INVITE_EXPIRES_NEVER;
            return T.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: n });
          default:
            return "";
        }
      }
      t.ZP = {
        getMaxAgeOptions: r.MAX_AGE_OPTIONS,
        getMaxUsesOptions: r.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: r.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: r.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: r.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: r.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: r.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: r.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: r.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: r.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: r.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: r.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: r.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: r.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: r.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: r.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, t, n) {
      n.r(t),
        n.d(t, {
          INVITE_OPTIONS_100_TIMES: function () {
            return o;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return a;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return f;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return N;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return _;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return S;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return O;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return c;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return d;
          },
          INVITE_OPTIONS_ONCE: function () {
            return I;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return s;
          },
          MAX_AGE_OPTIONS: function () {
            return m;
          },
          MAX_USES_OPTIONS: function () {
            return E;
          },
        });
      var r = n(689938);
      function i(e, t) {
        return {
          value: e,
          get label() {
            return t();
          },
        };
      }
      let s = i(0, () => r.Z.Messages.MAX_USES.format({ maxUses: 0 })),
        I = i(1, () => r.Z.Messages.MAX_USES.format({ maxUses: 1 })),
        u = i(5, () => r.Z.Messages.MAX_USES.format({ maxUses: 5 })),
        a = i(10, () => r.Z.Messages.MAX_USES.format({ maxUses: 10 })),
        _ = i(25, () => r.Z.Messages.MAX_USES.format({ maxUses: 25 })),
        l = i(50, () => r.Z.Messages.MAX_USES.format({ maxUses: 50 })),
        o = i(100, () => r.Z.Messages.MAX_USES.format({ maxUses: 100 })),
        E = [s, I, u, a, _, l, o],
        S = i(1800, () =>
          r.Z.Messages.DURATION_MINUTES.format({ minutes: 30 }),
        ),
        N = i(3600, () => r.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
        O = i(21600, () => r.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
        T = i(43200, () => r.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
        f = i(86400, () => r.Z.Messages.DURATION_DAYS.format({ days: 1 })),
        c = i(604800, () => r.Z.Messages.DURATION_DAYS.format({ days: 7 })),
        d = i(0, () => r.Z.Messages.MAX_AGE_NEVER),
        m = [S, N, O, T, f, c, d];
    },
    425976: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_c2457b",
        header: "header_c2457b",
        modalContent: "modalContent_c2457b",
        searchBar: "searchBar_c2457b",
        rowDivider: "rowDivider_c2457b",
        rowContainer: "rowContainer_c2457b",
        rowLeft: "rowLeft_c2457b",
        rowAvatar: "rowAvatar_c2457b",
        rowNameContainer: "rowNameContainer_c2457b",
        rowName: "rowName_c2457b",
        rowSubName: "rowSubName_c2457b",
        rowRight: "rowRight_c2457b",
        footer: "footer_c2457b",
        footerDivider: "footerDivider_c2457b",
        activityInfoOuterContainer: "activityInfoOuterContainer_c2457b",
        activityInfoInnerContainer: "activityInfoInnerContainer_c2457b",
        activityInfoImage: "activityInfoImage_c2457b",
        activityInfoText: "activityInfoText_c2457b",
        ellipsis: "ellipsis_c2457b",
        copySendBar: "copySendBar_c2457b",
        copyButton: "copyButton_c2457b",
        acronym: "acronym_c2457b",
      };
    },
  },
]);
//# sourceMappingURL=577bcb6127d95594dd73.js.map
