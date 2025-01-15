"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1187"],
  {
    810123: function (e, n, t) {
      t.d(n, {
        E: function () {
          return l;
        },
      });
      var l,
        i = t(200651),
        r = t(120356),
        u = t.n(r),
        a = t(468194),
        s = t(471445),
        I = t(686546),
        o = t(795531);
      (l || (l = {})).SMALL_32 = "SMALL_32";
      let T = { SMALL_32: 24 },
        _ = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      n.Z = function (e) {
        var n, t, l;
        let {
          className: r,
          iconClassName: d,
          size: c,
          channel: N,
          guild: E,
          locked: S,
          hasActiveThreads: O,
        } = e;
        if (null == E) return null;
        let f = E.getIconURL(48),
          m = _[c],
          P = T[c],
          g = (0, s.KS)(N, E, { locked: S, hasActiveThreads: O });
        if (null == g) return null;
        let h = (0, a.Zg)(
          null !== (n = null == E ? void 0 : E.toString()) && void 0 !== n
            ? n
            : null,
        );
        return (0, i.jsxs)("div", {
          role: "img",
          className: r,
          children: [
            (0, i.jsx)(I.ZP, {
              mask: I.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != f
                  ? (0, i.jsx)("img", {
                      alt: "",
                      src: f,
                      className: o.channelGuildIcon,
                      style: { width: P, height: P },
                    })
                  : (0, i.jsx)("div", {
                      className: u()(o.channelGuildIcon, o.acronym),
                      style: {
                        fontSize:
                          ((t = m),
                          (l = h).length - 1 > t.length
                            ? t[t.length - 1]
                            : t[l.length - 1]),
                        width: P,
                        height: P,
                      },
                      children: h,
                    }),
            }),
            (0, i.jsx)(g, {
              className: u()(o.icon, o.iconWithGuildIcon, d),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    473403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
        _: function () {
          return R;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        u = t.n(r),
        a = t(91192),
        s = t(442837),
        I = t(481060),
        o = t(43267),
        T = t(933557),
        _ = t(471445),
        d = t(111028),
        c = t(727429),
        N = t(810123),
        E = t(690221),
        S = t(430824),
        O = t(158776),
        f = t(111583),
        m = t(594174),
        P = t(998502),
        g = t(981631),
        h = t(490897),
        M = t(203871),
        D = t(202839);
      let U = {
        SELECTED: D.modeSelected,
        CONNECTED: D.modeConnected,
        UNREAD_IMPORTANT: D.modeUnreadImportant,
        UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
        MUTED: D.modeMuted,
        LOCKED: D.modeLocked,
      };
      function p(e) {
        e.preventDefault(), e.stopPropagation();
      }
      let A = P.ZP.getEnableHardwareAcceleration()
        ? I.AnimatedAvatar
        : I.Avatar;
      function v(e) {
        let { channel: n } = e;
        return (0, l.jsx)(A, {
          src: (0, o.x)(n),
          "aria-hidden": !0,
          size: I.AvatarSizes.SIZE_20,
        });
      }
      function V(e) {
        let { channel: n } = e,
          t = (0, s.e7)([m.default], () =>
            m.default.getUser(null == n ? void 0 : n.recipients[0]),
          ),
          i = (0, s.e7)(
            [f.Z],
            () =>
              !(null == t || null == n || n.isMultiUserDM()) &&
              null !=
                f.Z.getTypingUsers(null == n ? void 0 : n.id)[
                  null == t ? void 0 : t.id
                ],
          ),
          { status: r, isMobile: u } = (0, s.cj)([O.Z], () =>
            null == t || null == n || n.isMultiUserDM()
              ? { status: null, isMobile: !1 }
              : {
                  status: O.Z.getStatus(t.id),
                  isMobile: O.Z.isMobileOnline(t.id),
                },
          );
        return (0, l.jsx)(A, {
          size: I.AvatarSizes.SIZE_20,
          src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
          status: r,
          isMobile: u,
          isTyping: i,
          "aria-label": null == t ? void 0 : t.username,
          statusTooltip: !0,
        });
      }
      let R = (e) => {
        let {
            className: n,
            channel: t,
            locked: i,
            hasActiveThreads: r,
            withGuildIcon: a,
          } = e,
          o = (0, s.e7)([S.Z], () => S.Z.getGuild(t.guild_id), [t.guild_id]),
          T = t.type === g.d4z.DM || t.type === g.d4z.GROUP_DM,
          d = null;
        if (a && null != o && !T)
          d = (0, l.jsx)(N.Z, {
            size: N.E.SMALL_32,
            className: D.iconContainerWithGuildIcon,
            iconClassName: D.iconWithGuildIcon,
            channel: t,
            guild: o,
            locked: i,
            hasActiveThreads: r,
          });
        else {
          let e = (function (e, n, t) {
            switch (e.type) {
              case g.d4z.DM:
                return function () {
                  return (0, l.jsx)(V, { channel: e });
                };
              case g.d4z.GROUP_DM:
                return function () {
                  return (0, l.jsx)(v, { channel: e });
                };
              default:
                return (0, _.KS)(e, n, t);
            }
          })(t, o, { locked: i, hasActiveThreads: r });
          if (null == e) return null;
          d = (0, l.jsx)(e, {
            color: "currentColor",
            className: u()(D.icon, n),
          });
        }
        let c = a ? (null == o ? void 0 : o.name) : (0, _.bT)(t, o, i, r),
          E =
            a && null != o
              ? "".concat(o.name, " - ").concat(c, " icon")
              : "".concat(c, " icon");
        return (0, l.jsx)(I.Tooltip, {
          text: c,
          delay: 500,
          children: (e) =>
            (0, l.jsx)("div", {
              ...e,
              role: "img",
              "aria-label": E,
              className: u()(D.iconContainer),
              children: d,
            }),
        });
      };
      function C(e) {
        var n;
        let {
            channel: t,
            name: r,
            muted: s,
            selected: o,
            connected: _,
            unread: N,
            locked: S,
            hasActiveThreads: O,
            onClick: f,
            onMouseDown: m,
            onMouseUp: P,
            onContextMenu: A,
            connectDragPreview: v,
            className: V,
            iconClassName: C,
            subtitle: L,
            subtitleColor: x,
            channel: { type: y },
            onMouseEnter: Z,
            onMouseLeave: G,
            "aria-label": H,
            children: z,
            guild: b,
            channelTypeOverride: j,
            forceInteractable: k,
            mentionCount: F,
            resolvedUnreadSetting: Y,
            isFavoriteSuggestion: w,
            withGuildIcon: q,
            hasActiveEvent: B = !1,
          } = e,
          X = Y === h.i.ALL_MESSAGES || (null != F && F > 0),
          { role: W, ...J } = (0, a.JA)(t.id),
          K = i.useRef(null),
          Q = i.useRef(null),
          $ = (0, c.Z)(t),
          ee = g.Z5c.CHANNEL($, t.id),
          en = (0, T.ZP)(t),
          et = t.isGuildVocal(),
          el = (0, l.jsx)("div", {
            className: u()({ [D.favoritesSuggestion]: w }),
            ref: Q,
            children: (0, l.jsxs)(E.Z, {
              role: et && !_ ? "button" : "link",
              href: et ? void 0 : ee,
              target: "_blank",
              ref: K,
              className: D.link,
              onClick: () => (null == f ? void 0 : f(t)),
              ...J,
              "aria-label": H,
              focusProps: { enabled: !1 },
              children: [
                (0, l.jsxs)("div", {
                  className: D.linkTop,
                  children: [
                    (0, l.jsx)(R, {
                      className: C,
                      channel: t,
                      guild: b,
                      hasActiveThreads: O,
                      locked: S,
                      withGuildIcon: q,
                    }),
                    (0, l.jsx)(d.Z, {
                      className: u()(D.name, { [D.activeEvent]: B }),
                      "aria-hidden": !0,
                      children: null == r ? en : r,
                    }),
                    i.Children.count(z) > 0
                      ? (0, l.jsx)("div", {
                          onClick: p,
                          className: D.children,
                          children: z,
                        })
                      : null,
                  ],
                }),
                null != L
                  ? (0, l.jsx)("div", {
                      className: u()(D.linkBottom, { [D.withGuildIcon]: q }),
                      children: (0, l.jsx)(I.Text, {
                        color: null != x ? x : "text-muted",
                        variant: "text-xs/medium",
                        className: D.subtitle,
                        children: L,
                      }),
                    })
                  : null,
              ],
            }),
          });
        return (0, l.jsx)(I.FocusRing, {
          focusTarget: K,
          ringTarget: Q,
          offset: { top: 2, bottom: 2, right: 4 },
          children: (0, l.jsxs)("div", {
            className: u()(
              V,
              null != f || null != P || null != m || k
                ? D.wrapper
                : D.notInteractive,
              (() => {
                if (o) return u()(M.selectedChannel, U.SELECTED);
                if (_) return u()(M.selectedChannel, U.CONNECTED);
                if (S) return U.LOCKED;
                if (s) return U.MUTED;
                if (N) return X ? U.UNREAD_IMPORTANT : U.UNREAD_LESS_IMPORTANT;
                return null;
              })(),
              (function (e) {
                switch (e) {
                  case g.d4z.GUILD_STAGE_VOICE:
                  case g.d4z.GUILD_VOICE:
                    return D.typeVoice;
                  case g.d4z.ANNOUNCEMENT_THREAD:
                  case g.d4z.PUBLIC_THREAD:
                  case g.d4z.PRIVATE_THREAD:
                    return D.typeThread;
                  case g.d4z.GUILD_ANNOUNCEMENT:
                  case g.d4z.GUILD_TEXT:
                  case g.d4z.GUILD_STORE:
                  case g.d4z.GUILD_FORUM:
                  case g.d4z.GUILD_MEDIA:
                  default:
                    return D.typeDefault;
                }
              })(null != j ? j : y),
            ),
            onMouseUp: (e) => (null == P ? void 0 : P(e, t)),
            onMouseDown: (e) => (null == m ? void 0 : m(e, t)),
            onContextMenu: (e) => (null == A ? void 0 : A(e, t)),
            onMouseEnter: Z,
            onMouseLeave: G,
            children: [
              s || !N
                ? null
                : (0, l.jsx)("div", {
                    className: u()(D.unread, X ? D.unreadImportant : void 0),
                  }),
              null !== (n = null == v ? void 0 : v(el)) && void 0 !== n
                ? n
                : el,
            ],
          }),
        });
      }
    },
    971130: function (e, n, t) {
      let l;
      t.d(n, {
        Sz: function () {
          return A;
        },
        Vg: function () {
          return R;
        },
        an: function () {
          return U;
        },
        bm: function () {
          return i;
        },
        rh: function () {
          return p;
        },
      }),
        t(653041),
        t(47120);
      var i,
        r,
        u = t(317381),
        a = t(592125),
        s = t(271383),
        I = t(306680),
        o = t(699516),
        T = t(594174),
        _ = t(55589),
        d = t(483360),
        c = t(981631),
        N = t(245335),
        E = t(388032);
      (l = t(603617)),
        ((r = i || (i = {})).GROUP_DM = "GROUP_DM"),
        (r.DM = "DM"),
        (r.FRIEND = "FRIEND"),
        (r.CHANNEL = "CHANNEL");
      let S = (e, n) => null != e && s.ZP.isMember(e, n),
        O = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: l,
            omitGuildId: i,
            shownUserIds: r,
            rows: u,
            counts: a,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != l && l > 0 && u.length >= l) break;
              if (n.has(e) || r.has(e)) continue;
              let t = T.default.getUser(e);
              !(null == t || S(i, t.id)) &&
                (r.add(t.id),
                u.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                a.numFriends++);
            }
        },
        f = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: l,
            counts: i,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && l.length >= t) break;
              let n = a.Z.getChannel(e);
              null != n &&
                (l.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                i.numChannels++);
            }
        },
        m = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: l,
              shownUserIds: i,
              rows: r,
              counts: u,
              includeGroupDms: s,
              limit: o,
            } = e,
            d = 0;
          for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && r.length >= t) || (null != o && d >= o))
              break;
            let _ = a.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (s && _.type === c.d4z.GROUP_DM) {
              r.push({ type: "GROUP_DM", item: _, isSuggested: !1 }),
                u.numGroupDms++,
                d++;
              continue;
            }
            if (null == I.ZP.lastMessageId(_.id)) continue;
            let N = _.getRecipientId();
            if (null != N && !n.has(N) && !i.has(N)) {
              let e = T.default.getUser(N);
              if (null == e || e.bot || S(l, e.id)) continue;
              i.add(e.id),
                r.push({ type: "DM", item: e, isSuggested: !1 }),
                u.numDms++,
                d++;
            }
          }
        },
        P = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: l,
            shownUserIds: i,
            rows: r,
            counts: u,
          } = e;
          for (let e of o.Z.getFriendIDs()) {
            if (null != t && t > 0 && r.length >= t) break;
            if (n.has(e) || i.has(e)) continue;
            let a = T.default.getUser(e);
            !(null == a || S(l, a.id)) &&
              (r.push({ type: "FRIEND", item: a, isSuggested: !1 }),
              u.numFriends++);
          }
        },
        g = (e) => {
          let { query: n, rows: t, counts: l, inviteTargetType: i } = e;
          i === N.Iq.EMBEDDED_APPLICATION &&
            d.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: n } = e;
                t.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  l.numChannels++;
              },
            );
        },
        h = (e) => {
          let {
            query: n,
            omitUserIds: t,
            shownUserIds: l,
            rows: i,
            counts: r,
          } = e;
          d.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let u = a.Z.getDMFromUserId(n.id);
            if (null != u && null != I.ZP.lastMessageId(u))
              l.add(n.id),
                i.push({ type: "DM", item: n, isSuggested: !1 }),
                r.numDms++;
          });
        },
        M = (e) => {
          let { query: n, rows: t, counts: l } = e;
          d.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                l.numGroupDms++;
            },
          );
        },
        D = (e) => {
          let {
            query: n,
            rows: t,
            counts: l,
            omitUserIds: i,
            shownUserIds: r,
          } = e;
          d.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(i.has(n.id) || r.has(n.id)))
                r.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  l.numFriends++;
            },
          );
        };
      function U(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: l,
            suggestedUserIds: i,
            suggestedChannelIds: r,
            maxRowsWithoutQuery: u,
            omitGuildId: a,
          } = e,
          s = new Set(),
          I = [],
          o = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let e = {
            omitUserIds: l,
            maxRowsWithoutQuery: u,
            omitGuildId: a,
            shownUserIds: s,
            rows: I,
            counts: o,
          };
          t === N.Iq.EMBEDDED_APPLICATION &&
            (m({ ...e, includeGroupDms: !1, limit: 1 }),
            f({ ...e, suggestedChannelIds: r })),
            O({ ...e, suggestedUserIds: i }),
            m({ ...e, includeGroupDms: !0 }),
            P(e);
        } else {
          let e = { query: n, rows: I, counts: o };
          t === N.Iq.EMBEDDED_APPLICATION && g({ ...e, inviteTargetType: t }),
            h({ ...e, omitUserIds: l, shownUserIds: s }),
            M(e),
            D({ ...e, omitUserIds: l, shownUserIds: s });
        }
        return { rows: I, counts: o };
      }
      function p(e, n) {
        for (let t of _.Z.getPrivateChannelIds()) {
          let l = a.Z.getChannel(t);
          if (null == l || !l.isDM() || null == I.ZP.lastMessageId(l.id))
            continue;
          let i = l.getRecipientId();
          if (null != i && !e.has(i)) {
            let e = T.default.getUser(i);
            if (null == e || e.bot || S(n, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function A(e) {
        let { channel: n, inviteTargetType: t, applicationId: l } = e;
        if (t === N.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let e of u.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (e.applicationId === l) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let v = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        V = {
          [l.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: v.MINUTES },
          [l.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: v.HOURS },
          [l.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: v.HOURS },
          [l.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: v.HOURS },
          [l.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: v.DAYS },
          [l.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: v.DAYS },
          [l.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: v.NEVER },
        };
      function R(e, n) {
        let t = parseInt(n, 10),
          l = 0 === t,
          i = V[e].value;
        switch (V[e].type) {
          case v.MINUTES:
            if (l) return E.intl.string(E.t["/WbTXF"]);
            return E.intl.formatToPlainString(E.t.eDRWJC, { numUses: t });
          case v.HOURS:
            if (l)
              return E.intl.formatToPlainString(E.t.ZVdJMz, { numHours: i });
            return E.intl.formatToPlainString(E.t.NgZgAA, {
              numHours: i,
              numUses: t,
            });
          case v.DAYS:
            if (l)
              return E.intl.formatToPlainString(E.t.T96qsr, { numDays: i });
            return E.intl.formatToPlainString(E.t.TfuB9P, {
              numDays: i,
              numUses: t,
            });
          case v.NEVER:
            if (l) return E.intl.string(E.t.QrHBnJ);
            return E.intl.formatToPlainString(E.t.yJnTxM, { numUses: t });
          default:
            return "";
        }
      }
      n.ZP = {
        getMaxAgeOptions: l.MAX_AGE_OPTIONS,
        getMaxUsesOptions: l.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, n, t) {
      t.r(n),
        t.d(n, {
          INVITE_OPTIONS_100_TIMES: function () {
            return T;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return E;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return S;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return c;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return d;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return o;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return a;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return N;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return O;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return f;
          },
          INVITE_OPTIONS_ONCE: function () {
            return u;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return r;
          },
          MAX_AGE_OPTIONS: function () {
            return m;
          },
          MAX_USES_OPTIONS: function () {
            return _;
          },
        });
      var l = t(388032);
      function i(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let r = i(0, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 0 }),
        ),
        u = i(1, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 1 }),
        ),
        a = i(5, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 5 }),
        ),
        s = i(10, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 10 }),
        ),
        I = i(25, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 25 }),
        ),
        o = i(50, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 50 }),
        ),
        T = i(100, () =>
          l.intl.formatToPlainString(l.t["r/IcuL"], { maxUses: 100 }),
        ),
        _ = [r, u, a, s, I, o, T],
        d = i(1800, () =>
          l.intl.formatToPlainString(l.t.iXLF9f, { minutes: 30 }),
        ),
        c = i(3600, () => l.intl.formatToPlainString(l.t.xCjYxM, { hours: 1 })),
        N = i(21600, () =>
          l.intl.formatToPlainString(l.t.xCjYxM, { hours: 6 }),
        ),
        E = i(43200, () =>
          l.intl.formatToPlainString(l.t.xCjYxM, { hours: 12 }),
        ),
        S = i(86400, () => l.intl.formatToPlainString(l.t.k2UNz8, { days: 1 })),
        O = i(604800, () =>
          l.intl.formatToPlainString(l.t.k2UNz8, { days: 7 }),
        ),
        f = i(0, () => l.intl.string(l.t.PqEzn5)),
        m = [d, c, N, E, S, O, f];
    },
  },
]);
//# sourceMappingURL=de6b9b273a76427c9ef1.js.map
