"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79329"],
  {
    971130: function (e, t, I) {
      let n;
      I.d(t, {
        Sz: function () {
          return A;
        },
        Vg: function () {
          return y;
        },
        an: function () {
          return R;
        },
        bm: function () {
          return _;
        },
        rh: function () {
          return V;
        },
      }),
        I(653041),
        I(47120);
      var _,
        r,
        s = I(317381),
        u = I(592125),
        i = I(271383),
        a = I(306680),
        E = I(699516),
        N = I(594174),
        S = I(55589),
        O = I(483360),
        o = I(981631),
        T = I(245335),
        l = I(689938);
      (n = I(603617)),
        ((r = _ || (_ = {})).GROUP_DM = "GROUP_DM"),
        (r.DM = "DM"),
        (r.FRIEND = "FRIEND"),
        (r.CHANNEL = "CHANNEL");
      let f = (e, t) => null != e && i.ZP.isMember(e, t),
        c = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: I,
            maxRowsWithoutQuery: n,
            omitGuildId: _,
            shownUserIds: r,
            rows: s,
            counts: u,
          } = e;
          if (null != I)
            for (let e of I) {
              if (null != n && n > 0 && s.length >= n) break;
              if (t.has(e) || r.has(e)) continue;
              let I = N.default.getUser(e);
              !(null == I || f(_, I.id)) &&
                (r.add(I.id),
                s.push({ type: "FRIEND", item: I, isSuggested: !0 }),
                u.numFriends++);
            }
        },
        P = (e) => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: I,
            rows: n,
            counts: _,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != I && I > 0 && n.length >= I) break;
              let t = u.Z.getChannel(e);
              null != t &&
                (n.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                _.numChannels++);
            }
        },
        m = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: I,
              omitGuildId: n,
              shownUserIds: _,
              rows: r,
              counts: s,
              includeGroupDms: i,
              limit: E,
            } = e,
            O = 0;
          for (let e of S.Z.getPrivateChannelIds()) {
            if ((null != I && I > 0 && r.length >= I) || (null != E && O >= E))
              break;
            let S = u.Z.getChannel(e);
            if (null == S || !S.isPrivate()) continue;
            if (i && S.type === o.d4z.GROUP_DM) {
              r.push({ type: "GROUP_DM", item: S, isSuggested: !1 }),
                s.numGroupDms++,
                O++;
              continue;
            }
            if (null == a.ZP.lastMessageId(S.id)) continue;
            let T = S.getRecipientId();
            if (null != T && !t.has(T) && !_.has(T)) {
              let e = N.default.getUser(T);
              if (null == e || e.bot || f(n, e.id)) continue;
              _.add(e.id),
                r.push({ type: "DM", item: e, isSuggested: !1 }),
                s.numDms++,
                O++;
            }
          }
        },
        M = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: I,
            omitGuildId: n,
            shownUserIds: _,
            rows: r,
            counts: s,
          } = e;
          for (let e of E.Z.getFriendIDs()) {
            if (null != I && I > 0 && r.length >= I) break;
            if (t.has(e) || _.has(e)) continue;
            let u = N.default.getUser(e);
            !(null == u || f(n, u.id)) &&
              (r.push({ type: "FRIEND", item: u, isSuggested: !1 }),
              s.numFriends++);
          }
        },
        d = (e) => {
          let { query: t, rows: I, counts: n, inviteTargetType: _ } = e;
          _ === T.Iq.EMBEDDED_APPLICATION &&
            O.ZP.queryChannels({ query: t, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: t } = e;
                I.push({ type: "CHANNEL", item: t, isSuggested: !1 }),
                  n.numChannels++;
              },
            );
        },
        U = (e) => {
          let {
            query: t,
            omitUserIds: I,
            shownUserIds: n,
            rows: _,
            counts: r,
          } = e;
          O.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (I.has(t.id)) return;
            let s = u.Z.getDMFromUserId(t.id);
            if (null != s && null != a.ZP.lastMessageId(s))
              n.add(t.id),
                _.push({ type: "DM", item: t, isSuggested: !1 }),
                r.numDms++;
          });
        },
        g = (e) => {
          let { query: t, rows: I, counts: n } = e;
          O.ZP.queryGroupDMs({ query: t, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              I.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                n.numGroupDms++;
            },
          );
        },
        D = (e) => {
          let {
            query: t,
            rows: I,
            counts: n,
            omitUserIds: _,
            shownUserIds: r,
          } = e;
          O.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(_.has(t.id) || r.has(t.id)))
                r.add(t.id),
                  I.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  n.numFriends++;
            },
          );
        };
      function R(e) {
        let {
            query: t,
            inviteTargetType: I,
            omitUserIds: n,
            suggestedUserIds: _,
            suggestedChannelIds: r,
            maxRowsWithoutQuery: s,
            omitGuildId: u,
          } = e,
          i = new Set(),
          a = [],
          E = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: n,
            maxRowsWithoutQuery: s,
            omitGuildId: u,
            shownUserIds: i,
            rows: a,
            counts: E,
          };
          I === T.Iq.EMBEDDED_APPLICATION &&
            (m({ ...e, includeGroupDms: !1, limit: 1 }),
            P({ ...e, suggestedChannelIds: r })),
            c({ ...e, suggestedUserIds: _ }),
            m({ ...e, includeGroupDms: !0 }),
            M(e);
        } else {
          let e = { query: t, rows: a, counts: E };
          I === T.Iq.EMBEDDED_APPLICATION && d({ ...e, inviteTargetType: I }),
            U({ ...e, omitUserIds: n, shownUserIds: i }),
            g(e),
            D({ ...e, omitUserIds: n, shownUserIds: i });
        }
        return { rows: a, counts: E };
      }
      function V(e, t) {
        for (let I of S.Z.getPrivateChannelIds()) {
          let n = u.Z.getChannel(I);
          if (null == n || !n.isDM() || null == a.ZP.lastMessageId(n.id))
            continue;
          let _ = n.getRecipientId();
          if (null != _ && !e.has(_)) {
            let e = N.default.getUser(_);
            if (null == e || e.bot || f(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function A(e) {
        let { channel: t, inviteTargetType: I, applicationId: n } = e;
        if (I === T.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of s.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === n) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let h = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        p = {
          [n.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: h.MINUTES },
          [n.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: h.HOURS },
          [n.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: h.HOURS },
          [n.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: h.HOURS },
          [n.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: h.DAYS },
          [n.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: h.DAYS },
          [n.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: h.NEVER },
        };
      function y(e, t) {
        let I = parseInt(t, 10),
          n = 0 === I,
          _ = p[e].value;
        switch (p[e].type) {
          case h.MINUTES:
            if (n) return l.Z.Messages.INVITE_EXPIRES_MINUTES;
            return l.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
              numUses: I,
            });
          case h.HOURS:
            if (n)
              return l.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: _ });
            return l.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
              numHours: _,
              numUses: I,
            });
          case h.DAYS:
            if (n)
              return l.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                numDays: _,
              });
            return l.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
              numDays: _,
              numUses: I,
            });
          case h.NEVER:
            if (n) return l.Z.Messages.INVITE_EXPIRES_NEVER;
            return l.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: I });
          default:
            return "";
        }
      }
      t.ZP = {
        getMaxAgeOptions: n.MAX_AGE_OPTIONS,
        getMaxUsesOptions: n.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, t, I) {
      I.r(t),
        I.d(t, {
          INVITE_OPTIONS_100_TIMES: function () {
            return N;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return i;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return l;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return f;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return o;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return a;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return O;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return E;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return c;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return P;
          },
          INVITE_OPTIONS_ONCE: function () {
            return s;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return r;
          },
          MAX_AGE_OPTIONS: function () {
            return m;
          },
          MAX_USES_OPTIONS: function () {
            return S;
          },
        });
      var n = I(689938);
      function _(e, t) {
        return {
          value: e,
          get label() {
            return t();
          },
        };
      }
      let r = _(0, () => n.Z.Messages.MAX_USES.format({ maxUses: 0 })),
        s = _(1, () => n.Z.Messages.MAX_USES.format({ maxUses: 1 })),
        u = _(5, () => n.Z.Messages.MAX_USES.format({ maxUses: 5 })),
        i = _(10, () => n.Z.Messages.MAX_USES.format({ maxUses: 10 })),
        a = _(25, () => n.Z.Messages.MAX_USES.format({ maxUses: 25 })),
        E = _(50, () => n.Z.Messages.MAX_USES.format({ maxUses: 50 })),
        N = _(100, () => n.Z.Messages.MAX_USES.format({ maxUses: 100 })),
        S = [r, s, u, i, a, E, N],
        O = _(1800, () =>
          n.Z.Messages.DURATION_MINUTES.format({ minutes: 30 }),
        ),
        o = _(3600, () => n.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
        T = _(21600, () => n.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
        l = _(43200, () => n.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
        f = _(86400, () => n.Z.Messages.DURATION_DAYS.format({ days: 1 })),
        c = _(604800, () => n.Z.Messages.DURATION_DAYS.format({ days: 7 })),
        P = _(0, () => n.Z.Messages.MAX_AGE_NEVER),
        m = [O, o, T, l, f, c, P];
    },
    997590: function (e, t, I) {
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
//# sourceMappingURL=6a47dd3c056d848f087e.js.map
