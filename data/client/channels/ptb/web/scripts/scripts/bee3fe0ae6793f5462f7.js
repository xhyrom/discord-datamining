"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43035"],
  {
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
        _: function () {
          return s;
        },
      });
      var i = n(544891),
        r = n(570140),
        l = n(480294),
        u = n(814443),
        I = n(428598),
        a = n(981631);
      function o() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return u.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return I.Z.shouldFetch() && l.Z.hasConsented(a.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, r, l, u, I, a;
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
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (l = e.server_message_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        serverMessageRank:
                          null !== (u = e.server_message_rank) && void 0 !== u
                            ? u
                            : 0,
                        communicationProbability:
                          null !== (I = e.communication_probability) &&
                          void 0 !== I
                            ? I
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
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      let i;
      n(47120);
      var r,
        l = n(442837),
        u = n(570140),
        I = n(699516),
        a = n(496232);
      function o(e, t, n) {
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
      let s = !1,
        _ = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        E = { ..._ };
      function T() {
        i = new Map(
          E.userAffinities
            .filter((e) => !I.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class f extends (r = l.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(I.Z),
            null != e &&
              ((E.userAffinities = e.userAffinities),
              (E.lastFetched = e.lastFetched),
              T()),
            this.syncWith([I.Z], T);
        }
        shouldFetch() {
          if (!s) return Date.now() - E.lastFetched > a.K;
        }
        isFetching() {
          return s;
        }
        getUserAffinities() {
          return E.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return E;
        }
      }
      o(f, "displayName", "UserAffinitiesStoreV2"),
        o(f, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new f(u.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            s = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (E.lastFetched = Date.now()), (s = !1), (E.userAffinities = t), T();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            s = !1;
          },
          LOGOUT: function () {
            (E = { ..._ }), (i = new Map()), (s = !1);
          },
        }));
    },
    55589: function (e, t, n) {
      let i, r, l;
      n(47120), n(653041);
      var u,
        I,
        a,
        o,
        s,
        _,
        E = n(913527),
        T = n.n(E),
        f = n(442837),
        S = n(759174),
        O = n(570140),
        N = n(355298),
        c = n(333984),
        d = n(131704),
        P = n(592125),
        m = n(430824),
        h = n(306680),
        g = n(9156),
        A = n(594174),
        p = n(709054),
        U = n(176505);
      ((a = u || (u = {})).DEFAULT = "DEFAULT"), (a.FAVORITE = "FAVORITE");
      let D = new S.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function v(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = h.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = T()(r).valueOf(),
                    t = p.default.fromTimestamp(e);
                  return p.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: N.Z.isMessageRequest(e.id) || c.Z.isSpam(e.id),
        };
      }
      function R() {
        D.clear(),
          Object.values(P.Z.getMutablePrivateChannels()).forEach((e) => {
            D.set(e.id, v(e));
          });
      }
      function M() {
        let e = P.Z.getMutablePrivateChannels();
        for (let t in e) D.set(t, v(e[t]));
      }
      let V =
        ((i = []),
        (r = []),
        (l = []),
        () => {
          let e = D.values("FAVORITE"),
            t = D.values("DEFAULT");
          return (
            (i !== e || r !== t) &&
              ((l = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (r = t)),
            l
          );
        });
      class y extends (I = f.ZP.Store) {
        initialize() {
          this.waitFor(P.Z, m.Z, A.default, N.Z, g.ZP),
            this.syncWith([g.ZP, N.Z], R);
        }
        getPrivateChannelIds() {
          return V();
        }
        getSortedChannels() {
          return [D.values("FAVORITE"), D.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            D.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (_ = "PrivateChannelSortStore"),
        (s = "displayName") in (o = y)
          ? Object.defineProperty(o, s, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = _),
        (t.Z = new y(O.Z, {
          CONNECTION_OPEN: R,
          CONNECTION_OPEN_SUPPLEMENTAL: R,
          OVERLAY_INITIALIZE: R,
          CACHE_LOADED: M,
          CACHE_LOADED_LAZY: M,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, d.hv)(e.type) || D.has(e.id)) && D.set(e.id, v(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, d.hv)(t.type) || t.id === U.V) return !1;
            D.set(t.id, v(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return D.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!D.has(t)) return !1;
            let i = P.Z.getChannel(t);
            return null != i && D.set(t, v(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return D.delete(t);
          },
          LOGOUT: function () {
            D.clear();
          },
        }));
    },
    971130: function (e, t, n) {
      let i;
      n.d(t, {
        Sz: function () {
          return v;
        },
        Vg: function () {
          return V;
        },
        an: function () {
          return U;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return D;
        },
      }),
        n(653041),
        n(47120);
      var r,
        l,
        u = n(317381),
        I = n(592125),
        a = n(271383),
        o = n(306680),
        s = n(699516),
        _ = n(594174),
        E = n(55589),
        T = n(483360),
        f = n(981631),
        S = n(245335),
        O = n(388032);
      (i = n(603617)),
        ((l = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (l.DM = "DM"),
        (l.FRIEND = "FRIEND"),
        (l.CHANNEL = "CHANNEL");
      let N = (e, t) => null != e && a.ZP.isMember(e, t),
        c = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: n,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: l,
            rows: u,
            counts: I,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != i && i > 0 && u.length >= i) break;
              if (t.has(e) || l.has(e)) continue;
              let n = _.default.getUser(e);
              !(null == n || N(r, n.id)) &&
                (l.add(n.id),
                u.push({ type: "FRIEND", item: n, isSuggested: !0 }),
                I.numFriends++);
            }
        },
        d = (e) => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: n,
            rows: i,
            counts: r,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != n && n > 0 && i.length >= n) break;
              let t = I.Z.getChannel(e);
              null != t &&
                (i.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        P = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: n,
              omitGuildId: i,
              shownUserIds: r,
              rows: l,
              counts: u,
              includeGroupDms: a,
              limit: s,
            } = e,
            T = 0;
          for (let e of E.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && l.length >= n) || (null != s && T >= s))
              break;
            let E = I.Z.getChannel(e);
            if (null == E || !E.isPrivate()) continue;
            if (a && E.type === f.d4z.GROUP_DM) {
              l.push({ type: "GROUP_DM", item: E, isSuggested: !1 }),
                u.numGroupDms++,
                T++;
              continue;
            }
            if (null == o.ZP.lastMessageId(E.id)) continue;
            let S = E.getRecipientId();
            if (null != S && !t.has(S) && !r.has(S)) {
              let e = _.default.getUser(S);
              if (null == e || e.bot || N(i, e.id)) continue;
              r.add(e.id),
                l.push({ type: "DM", item: e, isSuggested: !1 }),
                u.numDms++,
                T++;
            }
          }
        },
        m = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: n,
            omitGuildId: i,
            shownUserIds: r,
            rows: l,
            counts: u,
          } = e;
          for (let e of s.Z.getFriendIDs()) {
            if (null != n && n > 0 && l.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let I = _.default.getUser(e);
            !(null == I || N(i, I.id)) &&
              (l.push({ type: "FRIEND", item: I, isSuggested: !1 }),
              u.numFriends++);
          }
        },
        h = (e) => {
          let { query: t, rows: n, counts: i, inviteTargetType: r } = e;
          r === S.Iq.EMBEDDED_APPLICATION &&
            T.ZP.queryChannels({ query: t, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: t } = e;
                n.push({ type: "CHANNEL", item: t, isSuggested: !1 }),
                  i.numChannels++;
              },
            );
        },
        g = (e) => {
          let {
            query: t,
            omitUserIds: n,
            shownUserIds: i,
            rows: r,
            counts: l,
          } = e;
          T.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let u = I.Z.getDMFromUserId(t.id);
            if (null != u && null != o.ZP.lastMessageId(u))
              i.add(t.id),
                r.push({ type: "DM", item: t, isSuggested: !1 }),
                l.numDms++;
          });
        },
        A = (e) => {
          let { query: t, rows: n, counts: i } = e;
          T.ZP.queryGroupDMs({ query: t, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              n.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                i.numGroupDms++;
            },
          );
        },
        p = (e) => {
          let {
            query: t,
            rows: n,
            counts: i,
            omitUserIds: r,
            shownUserIds: l,
          } = e;
          T.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(r.has(t.id) || l.has(t.id)))
                l.add(t.id),
                  n.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function U(e) {
        let {
            query: t,
            inviteTargetType: n,
            omitUserIds: i,
            suggestedUserIds: r,
            suggestedChannelIds: l,
            maxRowsWithoutQuery: u,
            omitGuildId: I,
          } = e,
          a = new Set(),
          o = [],
          s = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: u,
            omitGuildId: I,
            shownUserIds: a,
            rows: o,
            counts: s,
          };
          n === S.Iq.EMBEDDED_APPLICATION &&
            (P({ ...e, includeGroupDms: !1, limit: 1 }),
            d({ ...e, suggestedChannelIds: l })),
            c({ ...e, suggestedUserIds: r }),
            P({ ...e, includeGroupDms: !0 }),
            m(e);
        } else {
          let e = { query: t, rows: o, counts: s };
          n === S.Iq.EMBEDDED_APPLICATION && h({ ...e, inviteTargetType: n }),
            g({ ...e, omitUserIds: i, shownUserIds: a }),
            A(e),
            p({ ...e, omitUserIds: i, shownUserIds: a });
        }
        return { rows: o, counts: s };
      }
      function D(e, t) {
        for (let n of E.Z.getPrivateChannelIds()) {
          let i = I.Z.getChannel(n);
          if (null == i || !i.isDM() || null == o.ZP.lastMessageId(i.id))
            continue;
          let r = i.getRecipientId();
          if (null != r && !e.has(r)) {
            let e = _.default.getUser(r);
            if (null == e || e.bot || N(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function v(e) {
        let { channel: t, inviteTargetType: n, applicationId: i } = e;
        if (n === S.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of u.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === i) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let R = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        M = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: R.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: R.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: R.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: R.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: R.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: R.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: R.NEVER },
        };
      function V(e, t) {
        let n = parseInt(t, 10),
          i = 0 === n,
          r = M[e].value;
        switch (M[e].type) {
          case R.MINUTES:
            if (i) return O.intl.string(O.t["/WbTXF"]);
            return O.intl.formatToPlainString(O.t.eDRWJC, { numUses: n });
          case R.HOURS:
            if (i)
              return O.intl.formatToPlainString(O.t.ZVdJMz, { numHours: r });
            return O.intl.formatToPlainString(O.t.NgZgAA, {
              numHours: r,
              numUses: n,
            });
          case R.DAYS:
            if (i)
              return O.intl.formatToPlainString(O.t.T96qsr, { numDays: r });
            return O.intl.formatToPlainString(O.t.TfuB9P, {
              numDays: r,
              numUses: n,
            });
          case R.NEVER:
            if (i) return O.intl.string(O.t.QrHBnJ);
            return O.intl.formatToPlainString(O.t.yJnTxM, { numUses: n });
          default:
            return "";
        }
      }
      t.ZP = {
        getMaxAgeOptions: i.MAX_AGE_OPTIONS,
        getMaxUsesOptions: i.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: i.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: i.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: i.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: i.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: i.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: i.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: i.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: i.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: i.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: i.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: i.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: i.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: i.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: i.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, t, n) {
      n.r(t),
        n.d(t, {
          INVITE_OPTIONS_100_TIMES: function () {
            return _;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return a;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return O;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return N;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return f;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return o;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return T;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return S;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return c;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return d;
          },
          INVITE_OPTIONS_ONCE: function () {
            return u;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return l;
          },
          MAX_AGE_OPTIONS: function () {
            return P;
          },
          MAX_USES_OPTIONS: function () {
            return E;
          },
        });
      var i = n(388032);
      function r(e, t) {
        return {
          value: e,
          get label() {
            return t();
          },
        };
      }
      let l = r(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        u = r(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        I = r(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        a = r(10, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 10 }),
        ),
        o = r(25, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 25 }),
        ),
        s = r(50, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 50 }),
        ),
        _ = r(100, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 100 }),
        ),
        E = [l, u, I, a, o, s, _],
        T = r(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        f = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        S = r(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        O = r(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        N = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        c = r(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        d = r(0, () => i.intl.string(i.t.PqEzn5)),
        P = [T, f, S, O, N, c, d];
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
//# sourceMappingURL=bee3fe0ae6793f5462f7.js.map
