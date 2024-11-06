"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37493"],
  {
    971130: function (t, n, e) {
      let i;
      e.d(n, {
        Sz: function () {
          return U;
        },
        Vg: function () {
          return b;
        },
        an: function () {
          return h;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return p;
        },
      }),
        e(653041),
        e(47120);
      var r,
        I,
        u = e(317381),
        l = e(592125),
        _ = e(271383),
        o = e(306680),
        a = e(699516),
        T = e(594174),
        N = e(55589),
        O = e(483360),
        s = e(981631),
        S = e(245335),
        E = e(388032);
      (i = e(603617)),
        ((I = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (I.DM = "DM"),
        (I.FRIEND = "FRIEND"),
        (I.CHANNEL = "CHANNEL");
      let f = (t, n) => null != t && _.ZP.isMember(t, n),
        c = (t) => {
          let {
            omitUserIds: n,
            suggestedUserIds: e,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: I,
            rows: u,
            counts: l,
          } = t;
          if (null != e)
            for (let t of e) {
              if (null != i && i > 0 && u.length >= i) break;
              if (n.has(t) || I.has(t)) continue;
              let e = T.default.getUser(t);
              !(null == e || f(r, e.id)) &&
                (I.add(e.id),
                u.push({ type: "FRIEND", item: e, isSuggested: !0 }),
                l.numFriends++);
            }
        },
        P = (t) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: e,
            rows: i,
            counts: r,
          } = t;
          if (null != n)
            for (let t of n) {
              if (null != e && e > 0 && i.length >= e) break;
              let n = l.Z.getChannel(t);
              null != n &&
                (i.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        m = (t) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: e,
              omitGuildId: i,
              shownUserIds: r,
              rows: I,
              counts: u,
              includeGroupDms: _,
              limit: a,
            } = t,
            O = 0;
          for (let t of N.Z.getPrivateChannelIds()) {
            if ((null != e && e > 0 && I.length >= e) || (null != a && O >= a))
              break;
            let N = l.Z.getChannel(t);
            if (null == N || !N.isPrivate()) continue;
            if (_ && N.type === s.d4z.GROUP_DM) {
              I.push({ type: "GROUP_DM", item: N, isSuggested: !1 }),
                u.numGroupDms++,
                O++;
              continue;
            }
            if (null == o.ZP.lastMessageId(N.id)) continue;
            let S = N.getRecipientId();
            if (null != S && !n.has(S) && !r.has(S)) {
              let t = T.default.getUser(S);
              if (null == t || t.bot || f(i, t.id)) continue;
              r.add(t.id),
                I.push({ type: "DM", item: t, isSuggested: !1 }),
                u.numDms++,
                O++;
            }
          }
        },
        d = (t) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: e,
            omitGuildId: i,
            shownUserIds: r,
            rows: I,
            counts: u,
          } = t;
          for (let t of a.Z.getFriendIDs()) {
            if (null != e && e > 0 && I.length >= e) break;
            if (n.has(t) || r.has(t)) continue;
            let l = T.default.getUser(t);
            !(null == l || f(i, l.id)) &&
              (I.push({ type: "FRIEND", item: l, isSuggested: !1 }),
              u.numFriends++);
          }
        },
        g = (t) => {
          let { query: n, rows: e, counts: i, inviteTargetType: r } = t;
          r === S.Iq.EMBEDDED_APPLICATION &&
            O.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (t) => {
                let { record: n } = t;
                e.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  i.numChannels++;
              },
            );
        },
        D = (t) => {
          let {
            query: n,
            omitUserIds: e,
            shownUserIds: i,
            rows: r,
            counts: I,
          } = t;
          O.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((t) => {
            let { record: n } = t;
            if (e.has(n.id)) return;
            let u = l.Z.getDMFromUserId(n.id);
            if (null != u && null != o.ZP.lastMessageId(u))
              i.add(n.id),
                r.push({ type: "DM", item: n, isSuggested: !1 }),
                I.numDms++;
          });
        },
        M = (t) => {
          let { query: n, rows: e, counts: i } = t;
          O.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (t) => {
              let { record: n } = t;
              e.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                i.numGroupDms++;
            },
          );
        },
        V = (t) => {
          let {
            query: n,
            rows: e,
            counts: i,
            omitUserIds: r,
            shownUserIds: I,
          } = t;
          O.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (t) => {
              let { record: n } = t;
              if (!(r.has(n.id) || I.has(n.id)))
                I.add(n.id),
                  e.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function h(t) {
        let {
            query: n,
            inviteTargetType: e,
            omitUserIds: i,
            suggestedUserIds: r,
            suggestedChannelIds: I,
            maxRowsWithoutQuery: u,
            omitGuildId: l,
          } = t,
          _ = new Set(),
          o = [],
          a = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let t = {
            omitUserIds: i,
            maxRowsWithoutQuery: u,
            omitGuildId: l,
            shownUserIds: _,
            rows: o,
            counts: a,
          };
          e === S.Iq.EMBEDDED_APPLICATION &&
            (m({ ...t, includeGroupDms: !1, limit: 1 }),
            P({ ...t, suggestedChannelIds: I })),
            c({ ...t, suggestedUserIds: r }),
            m({ ...t, includeGroupDms: !0 }),
            d(t);
        } else {
          let t = { query: n, rows: o, counts: a };
          e === S.Iq.EMBEDDED_APPLICATION && g({ ...t, inviteTargetType: e }),
            D({ ...t, omitUserIds: i, shownUserIds: _ }),
            M(t),
            V({ ...t, omitUserIds: i, shownUserIds: _ });
        }
        return { rows: o, counts: a };
      }
      function p(t, n) {
        for (let e of N.Z.getPrivateChannelIds()) {
          let i = l.Z.getChannel(e);
          if (null == i || !i.isDM() || null == o.ZP.lastMessageId(i.id))
            continue;
          let r = i.getRecipientId();
          if (null != r && !t.has(r)) {
            let t = T.default.getUser(r);
            if (null == t || t.bot || f(n, t.id)) continue;
            return t;
          }
        }
        return null;
      }
      function U(t) {
        let { channel: n, inviteTargetType: e, applicationId: i } = t;
        if (e === S.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let t of u.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (t.applicationId === i) return new Set(t.userIds);
          }
        }
        return new Set();
      }
      let y = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        R = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: y.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: y.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: y.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: y.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: y.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: y.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: y.NEVER },
        };
      function b(t, n) {
        let e = parseInt(n, 10),
          i = 0 === e,
          r = R[t].value;
        switch (R[t].type) {
          case y.MINUTES:
            if (i) return E.intl.string(E.t["/WbTXF"]);
            return E.intl.formatToPlainString(E.t.eDRWJC, { numUses: e });
          case y.HOURS:
            if (i)
              return E.intl.formatToPlainString(E.t.ZVdJMz, { numHours: r });
            return E.intl.formatToPlainString(E.t.NgZgAA, {
              numHours: r,
              numUses: e,
            });
          case y.DAYS:
            if (i)
              return E.intl.formatToPlainString(E.t.T96qsr, { numDays: r });
            return E.intl.formatToPlainString(E.t.TfuB9P, {
              numDays: r,
              numUses: e,
            });
          case y.NEVER:
            if (i) return E.intl.string(E.t.QrHBnJ);
            return E.intl.formatToPlainString(E.t.yJnTxM, { numUses: e });
          default:
            return "";
        }
      }
      n.ZP = {
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
    603617: function (t, n, e) {
      e.r(n),
        e.d(n, {
          INVITE_OPTIONS_100_TIMES: function () {
            return T;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return _;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return E;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return f;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return s;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return o;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return O;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return a;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return S;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return c;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return P;
          },
          INVITE_OPTIONS_ONCE: function () {
            return u;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return I;
          },
          MAX_AGE_OPTIONS: function () {
            return m;
          },
          MAX_USES_OPTIONS: function () {
            return N;
          },
        });
      var i = e(388032);
      function r(t, n) {
        return {
          value: t,
          get label() {
            return n();
          },
        };
      }
      let I = r(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        u = r(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        l = r(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        _ = r(10, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 10 }),
        ),
        o = r(25, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 25 }),
        ),
        a = r(50, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 50 }),
        ),
        T = r(100, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 100 }),
        ),
        N = [I, u, l, _, o, a, T],
        O = r(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        s = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        S = r(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        E = r(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        f = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        c = r(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        P = r(0, () => i.intl.string(i.t.PqEzn5)),
        m = [O, s, S, E, f, c, P];
    },
    425976: function (t, n, e) {
      t.exports = {
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
//# sourceMappingURL=7e76519775e47d4538a4.js.map
