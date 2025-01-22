"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16941"],
  {
    484614: function (e, t, n) {
      var i,
        r = n(200651),
        o = n(192379),
        a = n(846519),
        l = n(481060),
        u = n(572004),
        s = n(388032);
      function I(e, t, n) {
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
      class f extends (i = o.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: t } = this.state,
            n =
              t === l.CopyInput.Modes.SUCCESS
                ? s.intl.string(s.t["t5VZ8/"])
                : e;
          return (0, r.jsx)(l.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: u.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: n = 1e3 } = this.props,
            i = (0, u.JG)(e);
          this.setState({
            mode: i ? l.CopyInput.Modes.SUCCESS : l.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: l.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case l.CopyInput.Modes.SUCCESS:
              return l.Button.Colors.GREEN;
            case l.CopyInput.Modes.ERROR:
              return l.Button.Colors.RED;
            default:
              return l.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            I(this, "_timeout", void 0),
            (this.state = { mode: l.CopyInput.Modes.DEFAULT }),
            (this._timeout = new a.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      I(f, "defaultProps", { delay: 1e3 }), (t.Z = f);
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
        _: function () {
          return I;
        },
      });
      var i = n(544891),
        r = n(570140),
        o = n(480294),
        a = n(814443),
        l = n(428598),
        u = n(981631);
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: u.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
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
      function I() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.Z.shouldFetch() && o.Z.hasConsented(u.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: u.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, r, o, a, l, u;
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
                          null !== (o = e.server_message_probability) &&
                          void 0 !== o
                            ? o
                            : 0,
                        serverMessageRank:
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
                            : 0,
                        communicationProbability:
                          null !== (l = e.communication_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        communicationRank:
                          null !== (u = e.communication_rank) && void 0 !== u
                            ? u
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
      n(47120);
      var i,
        r = n(442837),
        o = n(570140),
        a = n(699516),
        l = n(496232);
      function u(e, t, n) {
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
      let s = new Map(),
        I = !1,
        f = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        _ = { ...f };
      function d() {
        s = new Map(
          _.userAffinities
            .filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class c extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((_.userAffinities = e.userAffinities),
              (_.lastFetched = e.lastFetched),
              d()),
            this.syncWith([a.Z], d);
        }
        shouldFetch() {
          if (!I) return Date.now() - _.lastFetched > l.K;
        }
        isFetching() {
          return I;
        }
        getUserAffinities() {
          return _.userAffinities;
        }
        getUserAffinitiesMap() {
          return s;
        }
        compare(e, t) {
          var n, i, r, o;
          return (
            (null !==
              (r =
                null === (n = s.get(t)) || void 0 === n
                  ? void 0
                  : n.communicationProbability) && void 0 !== r
              ? r
              : 0) -
            (null !==
              (o =
                null === (i = s.get(e)) || void 0 === i
                  ? void 0
                  : i.communicationProbability) && void 0 !== o
              ? o
              : 0)
          );
        }
        getUserAffinity(e) {
          return s.get(e);
        }
        getState() {
          return _;
        }
      }
      u(c, "displayName", "UserAffinitiesStoreV2"),
        u(c, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new c(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            I = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (_.lastFetched = Date.now()), (I = !1), (_.userAffinities = t), d();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            I = !1;
          },
          LOGOUT: function () {
            (_ = { ...f }), (s = new Map()), (I = !1);
          },
        }));
    },
    55589: function (e, t, n) {
      let i, r, o;
      n(47120), n(653041);
      var a,
        l,
        u,
        s,
        I,
        f,
        _ = n(913527),
        d = n.n(_),
        c = n(442837),
        E = n(759174),
        S = n(570140),
        T = n(355298),
        O = n(333984),
        N = n(131704),
        h = n(592125),
        m = n(430824),
        P = n(306680),
        g = n(9156),
        p = n(594174),
        A = n(709054),
        v = n(176505);
      ((u = a || (a = {})).DEFAULT = "DEFAULT"), (u.FAVORITE = "FAVORITE");
      let R = new E.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function U(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = P.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = d()(r).valueOf(),
                    t = A.default.fromTimestamp(e);
                  return A.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: T.Z.isMessageRequest(e.id) || O.Z.isSpam(e.id),
        };
      }
      function C() {
        R.clear(),
          Object.values(h.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, U(e));
          });
      }
      function D() {
        let e = h.Z.getMutablePrivateChannels();
        for (let t in e) R.set(t, U(e[t]));
      }
      let M =
        ((i = []),
        (r = []),
        (o = []),
        () => {
          let e = R.values("FAVORITE"),
            t = R.values("DEFAULT");
          return (
            (i !== e || r !== t) &&
              ((o = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return o.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return o.push(t);
              }),
              (r = t)),
            o
          );
        });
      class y extends (l = c.ZP.Store) {
        initialize() {
          this.waitFor(h.Z, m.Z, p.default, T.Z, g.ZP),
            this.syncWith([g.ZP, T.Z], C);
        }
        getPrivateChannelIds() {
          return M();
        }
        getSortedChannels() {
          return [R.values("FAVORITE"), R.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            R.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (f = "PrivateChannelSortStore"),
        (I = "displayName") in (s = y)
          ? Object.defineProperty(s, I, {
              value: f,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[I] = f),
        (t.Z = new y(S.Z, {
          CONNECTION_OPEN: C,
          CONNECTION_OPEN_SUPPLEMENTAL: C,
          OVERLAY_INITIALIZE: C,
          CACHE_LOADED: D,
          CACHE_LOADED_LAZY: D,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, N.hv)(e.type) || R.has(e.id)) && R.set(e.id, U(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, N.hv)(t.type) || t.id === v.V) return !1;
            R.set(t.id, U(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let i = h.Z.getChannel(t);
            return null != i && R.set(t, U(i, n.id));
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
      let i;
      n.d(t, {
        Sz: function () {
          return U;
        },
        Vg: function () {
          return M;
        },
        an: function () {
          return v;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return R;
        },
      }),
        n(653041),
        n(47120);
      var r,
        o,
        a = n(317381),
        l = n(592125),
        u = n(271383),
        s = n(306680),
        I = n(699516),
        f = n(594174),
        _ = n(55589),
        d = n(483360),
        c = n(981631),
        E = n(245335),
        S = n(388032);
      (i = n(603617)),
        ((o = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (o.DM = "DM"),
        (o.FRIEND = "FRIEND"),
        (o.CHANNEL = "CHANNEL");
      let T = (e, t) => null != e && u.ZP.isMember(e, t),
        O = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: n,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: o,
            rows: a,
            counts: l,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != i && i > 0 && a.length >= i) break;
              if (t.has(e) || o.has(e)) continue;
              let n = f.default.getUser(e);
              !(null == n || T(r, n.id)) &&
                (o.add(n.id),
                a.push({ type: "FRIEND", item: n, isSuggested: !0 }),
                l.numFriends++);
            }
        },
        N = (e) => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: n,
            rows: i,
            counts: r,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != n && n > 0 && i.length >= n) break;
              let t = l.Z.getChannel(e);
              null != t &&
                (i.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        h = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: n,
              omitGuildId: i,
              shownUserIds: r,
              rows: o,
              counts: a,
              includeGroupDms: u,
              limit: I,
            } = e,
            d = 0;
          for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && o.length >= n) || (null != I && d >= I))
              break;
            let _ = l.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (u && _.type === c.d4z.GROUP_DM) {
              o.push({ type: "GROUP_DM", item: _, isSuggested: !1 }),
                a.numGroupDms++,
                d++;
              continue;
            }
            if (null == s.ZP.lastMessageId(_.id)) continue;
            let E = _.getRecipientId();
            if (null != E && !t.has(E) && !r.has(E)) {
              let e = f.default.getUser(E);
              if (null == e || e.bot || T(i, e.id)) continue;
              r.add(e.id),
                o.push({ type: "DM", item: e, isSuggested: !1 }),
                a.numDms++,
                d++;
            }
          }
        },
        m = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: n,
            omitGuildId: i,
            shownUserIds: r,
            rows: o,
            counts: a,
          } = e;
          for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && o.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let l = f.default.getUser(e);
            !(null == l || T(i, l.id)) &&
              (o.push({ type: "FRIEND", item: l, isSuggested: !1 }),
              a.numFriends++);
          }
        },
        P = (e) => {
          let { query: t, rows: n, counts: i, inviteTargetType: r } = e;
          r === E.Iq.EMBEDDED_APPLICATION &&
            d.ZP.queryChannels({ query: t, limit: 3, guildId: void 0 }).forEach(
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
            counts: o,
          } = e;
          d.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let a = l.Z.getDMFromUserId(t.id);
            if (null != a && null != s.ZP.lastMessageId(a))
              i.add(t.id),
                r.push({ type: "DM", item: t, isSuggested: !1 }),
                o.numDms++;
          });
        },
        p = (e) => {
          let { query: t, rows: n, counts: i } = e;
          d.ZP.queryGroupDMs({ query: t, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              n.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                i.numGroupDms++;
            },
          );
        },
        A = (e) => {
          let {
            query: t,
            rows: n,
            counts: i,
            omitUserIds: r,
            shownUserIds: o,
          } = e;
          d.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(r.has(t.id) || o.has(t.id)))
                o.add(t.id),
                  n.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function v(e) {
        let {
            query: t,
            inviteTargetType: n,
            omitUserIds: i,
            suggestedUserIds: r,
            suggestedChannelIds: o,
            maxRowsWithoutQuery: a,
            omitGuildId: l,
          } = e,
          u = new Set(),
          s = [],
          I = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: a,
            omitGuildId: l,
            shownUserIds: u,
            rows: s,
            counts: I,
          };
          n === E.Iq.EMBEDDED_APPLICATION &&
            (h({ ...e, includeGroupDms: !1, limit: 1 }),
            N({ ...e, suggestedChannelIds: o })),
            O({ ...e, suggestedUserIds: r }),
            h({ ...e, includeGroupDms: !0 }),
            m(e);
        } else {
          let e = { query: t, rows: s, counts: I };
          n === E.Iq.EMBEDDED_APPLICATION && P({ ...e, inviteTargetType: n }),
            g({ ...e, omitUserIds: i, shownUserIds: u }),
            p(e),
            A({ ...e, omitUserIds: i, shownUserIds: u });
        }
        return { rows: s, counts: I };
      }
      function R(e, t) {
        for (let n of _.Z.getPrivateChannelIds()) {
          let i = l.Z.getChannel(n);
          if (null == i || !i.isDM() || null == s.ZP.lastMessageId(i.id))
            continue;
          let r = i.getRecipientId();
          if (null != r && !e.has(r)) {
            let e = f.default.getUser(r);
            if (null == e || e.bot || T(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function U(e) {
        let { channel: t, inviteTargetType: n, applicationId: i } = e;
        if (n === E.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of a.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === i) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let C = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        D = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: C.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: C.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: C.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: C.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: C.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: C.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: C.NEVER },
        };
      function M(e, t) {
        let n = parseInt(t, 10),
          i = 0 === n,
          r = D[e].value;
        switch (D[e].type) {
          case C.MINUTES:
            if (i) return S.intl.string(S.t["/WbTXF"]);
            return S.intl.formatToPlainString(S.t.eDRWJC, { numUses: n });
          case C.HOURS:
            if (i)
              return S.intl.formatToPlainString(S.t.ZVdJMz, { numHours: r });
            return S.intl.formatToPlainString(S.t.NgZgAA, {
              numHours: r,
              numUses: n,
            });
          case C.DAYS:
            if (i)
              return S.intl.formatToPlainString(S.t.T96qsr, { numDays: r });
            return S.intl.formatToPlainString(S.t.TfuB9P, {
              numDays: r,
              numUses: n,
            });
          case C.NEVER:
            if (i) return S.intl.string(S.t.QrHBnJ);
            return S.intl.formatToPlainString(S.t.yJnTxM, { numUses: n });
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
            return f;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return S;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return T;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return c;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return d;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return E;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return O;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return N;
          },
          INVITE_OPTIONS_ONCE: function () {
            return a;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return o;
          },
          MAX_AGE_OPTIONS: function () {
            return h;
          },
          MAX_USES_OPTIONS: function () {
            return _;
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
      let o = r(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        a = r(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        l = r(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        u = r(10, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 10 }),
        ),
        s = r(25, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 25 }),
        ),
        I = r(50, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 50 }),
        ),
        f = r(100, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 100 }),
        ),
        _ = [o, a, l, u, s, I, f],
        d = r(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        c = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        E = r(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        S = r(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        T = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        O = r(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        N = r(0, () => i.intl.string(i.t.PqEzn5)),
        h = [d, c, E, S, T, O, N];
    },
    755527: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_cedfaf",
        scroller: "scroller_cedfaf",
        modal: "modal_cedfaf",
        closeButton: "closeButton_cedfaf",
        headerCloseButtonSpacing: "headerCloseButtonSpacing_cedfaf",
        header: "header_cedfaf",
        headerText: "headerText_cedfaf",
        headerChannelContainer: "headerChannelContainer_cedfaf",
        channelIcon: "channelIcon_cedfaf",
        searchBar: "searchBar_cedfaf",
        hubHeader: "hubHeader_cedfaf",
        hubInviteTitle: "hubInviteTitle_cedfaf",
        hubFriendSearch: "hubFriendSearch_cedfaf",
        inviteRow: "inviteRow_cedfaf",
        inviteRowAvatar: "inviteRowAvatar_cedfaf",
        inviteRowInfo: "inviteRowInfo_cedfaf",
        inviteRowName: "inviteRowName_cedfaf",
        inviteRowButton: "inviteRowButton_cedfaf",
        inviteRowEmptyState: "inviteRowEmptyState_cedfaf",
        warningContainer: "warningContainer_cedfaf",
        warningIcon: "warningIcon_cedfaf",
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        subText: "subText_cedfaf",
        formText: "formText_cedfaf",
        toggle: "toggle_cedfaf",
        noScroll: "noScroll_cedfaf",
        settingsFooter: "settingsFooter_cedfaf",
        footer: "footer_cedfaf",
        footerText: "footerText_cedfaf",
        headerContainer: "headerContainer_cedfaf",
        welcomeImage: "welcomeImage_cedfaf",
        welcomeHeading: "welcomeHeading_cedfaf",
        welcomeSubheading: "welcomeSubheading_cedfaf",
        errorMessage: "errorMessage_cedfaf",
        errorLink: "errorLink_cedfaf",
        acronym: "acronym_cedfaf",
        divider: "divider_cedfaf",
      };
    },
    24182: function (e, t, n) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        settingsForm: "settingsForm_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    107720: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=2f0f60cf238939846e70.js.map
