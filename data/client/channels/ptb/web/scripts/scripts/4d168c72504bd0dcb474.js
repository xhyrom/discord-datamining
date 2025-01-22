"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65746"],
  {
    484614: function (e, t, n) {
      var i,
        r = n(200651),
        a = n(192379),
        u = n(846519),
        l = n(481060),
        o = n(572004),
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
      class f extends (i = a.PureComponent) {
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
            supportsCopy: o.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: n = 1e3 } = this.props,
            i = (0, o.JG)(e);
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
            (this._timeout = new u.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      I(f, "defaultProps", { delay: 1e3 }), (t.Z = f);
    },
    55589: function (e, t, n) {
      let i, r, a;
      n(47120), n(653041);
      var u,
        l,
        o,
        s,
        I,
        f,
        _ = n(913527),
        d = n.n(_),
        T = n(442837),
        c = n(759174),
        E = n(570140),
        O = n(355298),
        S = n(333984),
        N = n(131704),
        P = n(592125),
        h = n(430824),
        m = n(306680),
        g = n(9156),
        p = n(594174),
        C = n(709054),
        M = n(176505);
      ((o = u || (u = {})).DEFAULT = "DEFAULT"), (o.FAVORITE = "FAVORITE");
      let R = new c.h(
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
                let i =
                    null !==
                      (n =
                        null !== (t = m.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = d()(r).valueOf(),
                    t = C.default.fromTimestamp(e);
                  return C.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: O.Z.isMessageRequest(e.id) || S.Z.isSpam(e.id),
        };
      }
      function V() {
        R.clear(),
          Object.values(P.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, D(e));
          });
      }
      function v() {
        let e = P.Z.getMutablePrivateChannels();
        for (let t in e) R.set(t, D(e[t]));
      }
      let A =
        ((i = []),
        (r = []),
        (a = []),
        () => {
          let e = R.values("FAVORITE"),
            t = R.values("DEFAULT");
          return (
            (i !== e || r !== t) &&
              ((a = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (r = t)),
            a
          );
        });
      class U extends (l = T.ZP.Store) {
        initialize() {
          this.waitFor(P.Z, h.Z, p.default, O.Z, g.ZP),
            this.syncWith([g.ZP, O.Z], V);
        }
        getPrivateChannelIds() {
          return A();
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
        (I = "displayName") in (s = U)
          ? Object.defineProperty(s, I, {
              value: f,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[I] = f),
        (t.Z = new U(E.Z, {
          CONNECTION_OPEN: V,
          CONNECTION_OPEN_SUPPLEMENTAL: V,
          OVERLAY_INITIALIZE: V,
          CACHE_LOADED: v,
          CACHE_LOADED_LAZY: v,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, N.hv)(e.type) || R.has(e.id)) && R.set(e.id, D(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, N.hv)(t.type) || t.id === M.V) return !1;
            R.set(t.id, D(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let i = P.Z.getChannel(t);
            return null != i && R.set(t, D(i, n.id));
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
          return D;
        },
        Vg: function () {
          return A;
        },
        an: function () {
          return M;
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
        a,
        u = n(317381),
        l = n(592125),
        o = n(271383),
        s = n(306680),
        I = n(699516),
        f = n(594174),
        _ = n(55589),
        d = n(483360),
        T = n(981631),
        c = n(245335),
        E = n(388032);
      (i = n(603617)),
        ((a = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (a.DM = "DM"),
        (a.FRIEND = "FRIEND"),
        (a.CHANNEL = "CHANNEL");
      let O = (e, t) => null != e && o.ZP.isMember(e, t),
        S = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: n,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: a,
            rows: u,
            counts: l,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != i && i > 0 && u.length >= i) break;
              if (t.has(e) || a.has(e)) continue;
              let n = f.default.getUser(e);
              !(null == n || O(r, n.id)) &&
                (a.add(n.id),
                u.push({ type: "FRIEND", item: n, isSuggested: !0 }),
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
        P = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: n,
              omitGuildId: i,
              shownUserIds: r,
              rows: a,
              counts: u,
              includeGroupDms: o,
              limit: I,
            } = e,
            d = 0;
          for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && a.length >= n) || (null != I && d >= I))
              break;
            let _ = l.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (o && _.type === T.d4z.GROUP_DM) {
              a.push({ type: "GROUP_DM", item: _, isSuggested: !1 }),
                u.numGroupDms++,
                d++;
              continue;
            }
            if (null == s.ZP.lastMessageId(_.id)) continue;
            let c = _.getRecipientId();
            if (null != c && !t.has(c) && !r.has(c)) {
              let e = f.default.getUser(c);
              if (null == e || e.bot || O(i, e.id)) continue;
              r.add(e.id),
                a.push({ type: "DM", item: e, isSuggested: !1 }),
                u.numDms++,
                d++;
            }
          }
        },
        h = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: n,
            omitGuildId: i,
            shownUserIds: r,
            rows: a,
            counts: u,
          } = e;
          for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && a.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let l = f.default.getUser(e);
            !(null == l || O(i, l.id)) &&
              (a.push({ type: "FRIEND", item: l, isSuggested: !1 }),
              u.numFriends++);
          }
        },
        m = (e) => {
          let { query: t, rows: n, counts: i, inviteTargetType: r } = e;
          r === c.Iq.EMBEDDED_APPLICATION &&
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
            counts: a,
          } = e;
          d.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let u = l.Z.getDMFromUserId(t.id);
            if (null != u && null != s.ZP.lastMessageId(u))
              i.add(t.id),
                r.push({ type: "DM", item: t, isSuggested: !1 }),
                a.numDms++;
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
        C = (e) => {
          let {
            query: t,
            rows: n,
            counts: i,
            omitUserIds: r,
            shownUserIds: a,
          } = e;
          d.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(r.has(t.id) || a.has(t.id)))
                a.add(t.id),
                  n.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function M(e) {
        let {
            query: t,
            inviteTargetType: n,
            omitUserIds: i,
            suggestedUserIds: r,
            suggestedChannelIds: a,
            maxRowsWithoutQuery: u,
            omitGuildId: l,
          } = e,
          o = new Set(),
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
            maxRowsWithoutQuery: u,
            omitGuildId: l,
            shownUserIds: o,
            rows: s,
            counts: I,
          };
          n === c.Iq.EMBEDDED_APPLICATION &&
            (P({ ...e, includeGroupDms: !1, limit: 1 }),
            N({ ...e, suggestedChannelIds: a })),
            S({ ...e, suggestedUserIds: r }),
            P({ ...e, includeGroupDms: !0 }),
            h(e);
        } else {
          let e = { query: t, rows: s, counts: I };
          n === c.Iq.EMBEDDED_APPLICATION && m({ ...e, inviteTargetType: n }),
            g({ ...e, omitUserIds: i, shownUserIds: o }),
            p(e),
            C({ ...e, omitUserIds: i, shownUserIds: o });
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
            if (null == e || e.bot || O(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function D(e) {
        let { channel: t, inviteTargetType: n, applicationId: i } = e;
        if (n === c.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of u.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === i) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let V = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        v = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: V.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: V.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: V.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: V.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: V.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: V.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: V.NEVER },
        };
      function A(e, t) {
        let n = parseInt(t, 10),
          i = 0 === n,
          r = v[e].value;
        switch (v[e].type) {
          case V.MINUTES:
            if (i) return E.intl.string(E.t["/WbTXF"]);
            return E.intl.formatToPlainString(E.t.eDRWJC, { numUses: n });
          case V.HOURS:
            if (i)
              return E.intl.formatToPlainString(E.t.ZVdJMz, { numHours: r });
            return E.intl.formatToPlainString(E.t.NgZgAA, {
              numHours: r,
              numUses: n,
            });
          case V.DAYS:
            if (i)
              return E.intl.formatToPlainString(E.t.T96qsr, { numDays: r });
            return E.intl.formatToPlainString(E.t.TfuB9P, {
              numDays: r,
              numUses: n,
            });
          case V.NEVER:
            if (i) return E.intl.string(E.t.QrHBnJ);
            return E.intl.formatToPlainString(E.t.yJnTxM, { numUses: n });
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
            return o;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return E;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return O;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return T;
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
            return c;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return S;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return N;
          },
          INVITE_OPTIONS_ONCE: function () {
            return u;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return a;
          },
          MAX_AGE_OPTIONS: function () {
            return P;
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
      let a = r(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        u = r(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        l = r(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        o = r(10, () =>
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
        _ = [a, u, l, o, s, I, f],
        d = r(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        T = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        c = r(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        E = r(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        O = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        S = r(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        N = r(0, () => i.intl.string(i.t.PqEzn5)),
        P = [d, T, c, E, O, S, N];
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
//# sourceMappingURL=4d168c72504bd0dcb474.js.map
