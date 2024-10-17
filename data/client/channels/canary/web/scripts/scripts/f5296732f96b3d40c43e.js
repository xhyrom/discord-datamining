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
        s = t(735250),
        u = t(120356),
        i = t.n(u),
        r = t(468194),
        a = t(471445),
        I = t(686546),
        _ = t(664481);
      (l || (l = {})).SMALL_32 = "SMALL_32";
      let o = { SMALL_32: 24 },
        E = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      n.Z = function (e) {
        var n, t, l;
        let {
          className: u,
          iconClassName: N,
          size: d,
          channel: T,
          guild: S,
          locked: c,
          hasActiveThreads: O,
        } = e;
        if (null == S) return null;
        let f = S.getIconURL(48),
          M = E[d],
          m = o[d],
          U = (0, a.KS)(T, S, { locked: c, hasActiveThreads: O });
        if (null == U) return null;
        let P = (0, r.Zg)(
          null !== (n = null == S ? void 0 : S.toString()) && void 0 !== n
            ? n
            : null,
        );
        return (0, s.jsxs)("div", {
          role: "img",
          className: u,
          children: [
            (0, s.jsx)(I.ZP, {
              mask: I.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != f
                  ? (0, s.jsx)("img", {
                      alt: "",
                      src: f,
                      className: _.channelGuildIcon,
                      style: { width: m, height: m },
                    })
                  : (0, s.jsx)("div", {
                      className: i()(_.channelGuildIcon, _.acronym),
                      style: {
                        fontSize:
                          ((t = M),
                          (l = P).length - 1 > t.length
                            ? t[t.length - 1]
                            : t[l.length - 1]),
                        width: m,
                        height: m,
                      },
                      children: P,
                    }),
            }),
            (0, s.jsx)(U, {
              className: i()(_.icon, _.iconWithGuildIcon, N),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    473403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
        _: function () {
          return p;
        },
      });
      var l = t(735250),
        s = t(470079),
        u = t(120356),
        i = t.n(u);
      if (12633 == t.j) var r = t(91192);
      var a = t(442837),
        I = t(481060),
        _ = t(43267),
        o = t(933557),
        E = t(471445),
        N = t(111028),
        d = t(727429),
        T = t(810123),
        S = t(690221),
        c = t(430824),
        O = t(158776),
        f = t(111583),
        M = t(594174),
        m = t(998502),
        U = t(981631),
        P = t(490897),
        D = t(206197);
      let g = {
        SELECTED: D.modeSelected,
        CONNECTED: D.modeConnected,
        UNREAD_IMPORTANT: D.modeUnreadImportant,
        UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
        MUTED: D.modeMuted,
        LOCKED: D.modeLocked,
      };
      function h(e) {
        e.preventDefault(), e.stopPropagation();
      }
      let A = m.ZP.getEnableHardwareAcceleration()
        ? I.AnimatedAvatar
        : I.Avatar;
      function R(e) {
        let { channel: n } = e;
        return (0, l.jsx)(A, {
          src: (0, _.x)(n),
          "aria-hidden": !0,
          size: I.AvatarSizes.SIZE_20,
        });
      }
      function V(e) {
        let { channel: n } = e,
          t = (0, a.e7)([M.default], () =>
            M.default.getUser(null == n ? void 0 : n.recipients[0]),
          ),
          s = (0, a.e7)(
            [f.Z],
            () =>
              !(null == t || null == n || n.isMultiUserDM()) &&
              null !=
                f.Z.getTypingUsers(null == n ? void 0 : n.id)[
                  null == t ? void 0 : t.id
                ],
          ),
          { status: u, isMobile: i } = (0, a.cj)([O.Z], () =>
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
          status: u,
          isMobile: i,
          isTyping: s,
          "aria-label": null == t ? void 0 : t.username,
          statusTooltip: !0,
        });
      }
      let p = (e) => {
        let {
            className: n,
            channel: t,
            locked: s,
            hasActiveThreads: u,
            withGuildIcon: r,
          } = e,
          _ = (0, a.e7)([c.Z], () => c.Z.getGuild(t.guild_id), [t.guild_id]),
          o = t.type === U.d4z.DM || t.type === U.d4z.GROUP_DM,
          N = null;
        if (r && null != _ && !o)
          N = (0, l.jsx)(T.Z, {
            size: T.E.SMALL_32,
            className: D.iconContainerWithGuildIcon,
            iconClassName: D.iconWithGuildIcon,
            channel: t,
            guild: _,
            locked: s,
            hasActiveThreads: u,
          });
        else {
          let e = (function (e, n, t) {
            switch (e.type) {
              case U.d4z.DM:
                return function () {
                  return (0, l.jsx)(V, { channel: e });
                };
              case U.d4z.GROUP_DM:
                return function () {
                  return (0, l.jsx)(R, { channel: e });
                };
              default:
                return (0, E.KS)(e, n, t);
            }
          })(t, _, { locked: s, hasActiveThreads: u });
          if (null == e) return null;
          N = (0, l.jsx)(e, {
            color: "currentColor",
            className: i()(D.icon, n),
          });
        }
        let d = r ? (null == _ ? void 0 : _.name) : (0, E.bT)(t, _, s, u),
          S =
            r && null != _
              ? "".concat(_.name, " - ").concat(d, " icon")
              : "".concat(d, " icon");
        return (0, l.jsx)(I.Tooltip, {
          text: d,
          delay: 500,
          children: (e) =>
            (0, l.jsx)("div", {
              ...e,
              role: "img",
              "aria-label": S,
              className: i()(D.iconContainer),
              children: N,
            }),
        });
      };
      function v(e) {
        var n;
        let {
            channel: t,
            name: u,
            muted: a,
            selected: _,
            connected: E,
            unread: T,
            locked: c,
            hasActiveThreads: O,
            onClick: f,
            onMouseDown: M,
            onMouseUp: m,
            onContextMenu: A,
            connectDragPreview: R,
            className: V,
            iconClassName: v,
            subtitle: Z,
            subtitleColor: C,
            channel: { type: L },
            onMouseEnter: y,
            onMouseLeave: x,
            "aria-label": G,
            children: H,
            guild: b,
            channelTypeOverride: z,
            forceInteractable: j,
            mentionCount: X,
            resolvedUnreadSetting: k,
            isFavoriteSuggestion: F,
            withGuildIcon: w,
          } = e,
          Y = k === P.i.ALL_MESSAGES || (null != X && X > 0),
          { role: q, ...B } = (0, r.JA)(t.id),
          K = s.useRef(null),
          W = s.useRef(null),
          J = (0, d.Z)(t),
          Q = U.Z5c.CHANNEL(J, t.id),
          $ = (0, o.ZP)(t),
          ee = t.isGuildVocal(),
          en = t.hdStreamingUntil,
          et = t.type,
          el = s.useMemo(() => {
            if (et === U.d4z.GUILD_VOICE)
              return null != en && new Date(en) > new Date();
          }, [en, et]),
          es = (0, l.jsx)("div", {
            className: i()({ [D.favoritesSuggestion]: F, [D.hdStreamed]: el }),
            ref: W,
            children: (0, l.jsxs)(S.Z, {
              role: ee && !E ? "button" : "link",
              href: ee ? void 0 : Q,
              target: "_blank",
              ref: K,
              className: D.link,
              onClick: () => (null == f ? void 0 : f(t)),
              ...B,
              "aria-label": G,
              focusProps: { enabled: !1 },
              children: [
                (0, l.jsxs)("div", {
                  className: D.linkTop,
                  children: [
                    (0, l.jsx)(p, {
                      className: v,
                      channel: t,
                      guild: b,
                      hasActiveThreads: O,
                      locked: c,
                      withGuildIcon: w,
                    }),
                    (0, l.jsx)(N.Z, {
                      className: i()(D.name),
                      "aria-hidden": !0,
                      children: null == u ? $ : u,
                    }),
                    s.Children.count(H) > 0
                      ? (0, l.jsx)("div", {
                          onClick: h,
                          className: D.children,
                          children: H,
                        })
                      : null,
                  ],
                }),
                null != Z
                  ? (0, l.jsx)("div", {
                      className: i()(D.linkBottom, { [D.withGuildIcon]: w }),
                      children: (0, l.jsx)(I.Text, {
                        color: null != C ? C : "text-muted",
                        variant: "text-xs/medium",
                        className: D.subtitle,
                        children: Z,
                      }),
                    })
                  : null,
              ],
            }),
          });
        return (0, l.jsx)(I.FocusRing, {
          focusTarget: K,
          ringTarget: W,
          offset: { top: 2, bottom: 2, right: 4 },
          children: (0, l.jsxs)("div", {
            className: i()(
              V,
              null != f || null != m || null != M || j
                ? D.wrapper
                : D.notInteractive,
              (() => {
                if (_) return g.SELECTED;
                if (E) return g.CONNECTED;
                if (c) return g.LOCKED;
                if (a) return g.MUTED;
                if (T) return Y ? g.UNREAD_IMPORTANT : g.UNREAD_LESS_IMPORTANT;
                return null;
              })(),
              (function (e) {
                switch (e) {
                  case U.d4z.GUILD_STAGE_VOICE:
                  case U.d4z.GUILD_VOICE:
                    return D.typeVoice;
                  case U.d4z.ANNOUNCEMENT_THREAD:
                  case U.d4z.PUBLIC_THREAD:
                  case U.d4z.PRIVATE_THREAD:
                    return D.typeThread;
                  case U.d4z.GUILD_ANNOUNCEMENT:
                  case U.d4z.GUILD_TEXT:
                  case U.d4z.GUILD_STORE:
                  case U.d4z.GUILD_FORUM:
                  case U.d4z.GUILD_MEDIA:
                  default:
                    return D.typeDefault;
                }
              })(null != z ? z : L),
            ),
            onMouseUp: (e) => (null == m ? void 0 : m(e, t)),
            onMouseDown: (e) => (null == M ? void 0 : M(e, t)),
            onContextMenu: (e) => (null == A ? void 0 : A(e, t)),
            onMouseEnter: y,
            onMouseLeave: x,
            children: [
              a || !T
                ? null
                : (0, l.jsx)("div", {
                    className: i()(D.unread, Y ? D.unreadImportant : void 0),
                  }),
              null !== (n = null == R ? void 0 : R(es)) && void 0 !== n
                ? n
                : es,
            ],
          }),
        });
      }
    },
    971130: function (e, n, t) {
      let l;
      t.d(n, {
        Sz: function () {
          return R;
        },
        Vg: function () {
          return v;
        },
        an: function () {
          return h;
        },
        bm: function () {
          return s;
        },
        rh: function () {
          return A;
        },
      }),
        t(653041),
        t(47120);
      var s,
        u,
        i = t(317381),
        r = t(592125),
        a = t(271383),
        I = t(306680),
        _ = t(699516),
        o = t(594174),
        E = t(55589),
        N = t(483360),
        d = t(981631),
        T = t(245335),
        S = t(689938);
      (l = t(603617)),
        ((u = s || (s = {})).GROUP_DM = "GROUP_DM"),
        (u.DM = "DM"),
        (u.FRIEND = "FRIEND"),
        (u.CHANNEL = "CHANNEL");
      let c = (e, n) => null != e && a.ZP.isMember(e, n),
        O = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: l,
            omitGuildId: s,
            shownUserIds: u,
            rows: i,
            counts: r,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != l && l > 0 && i.length >= l) break;
              if (n.has(e) || u.has(e)) continue;
              let t = o.default.getUser(e);
              !(null == t || c(s, t.id)) &&
                (u.add(t.id),
                i.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                r.numFriends++);
            }
        },
        f = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: l,
            counts: s,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && l.length >= t) break;
              let n = r.Z.getChannel(e);
              null != n &&
                (l.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                s.numChannels++);
            }
        },
        M = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: l,
              shownUserIds: s,
              rows: u,
              counts: i,
              includeGroupDms: a,
              limit: _,
            } = e,
            N = 0;
          for (let e of E.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && u.length >= t) || (null != _ && N >= _))
              break;
            let E = r.Z.getChannel(e);
            if (null == E || !E.isPrivate()) continue;
            if (a && E.type === d.d4z.GROUP_DM) {
              u.push({ type: "GROUP_DM", item: E, isSuggested: !1 }),
                i.numGroupDms++,
                N++;
              continue;
            }
            if (null == I.ZP.lastMessageId(E.id)) continue;
            let T = E.getRecipientId();
            if (null != T && !n.has(T) && !s.has(T)) {
              let e = o.default.getUser(T);
              if (null == e || e.bot || c(l, e.id)) continue;
              s.add(e.id),
                u.push({ type: "DM", item: e, isSuggested: !1 }),
                i.numDms++,
                N++;
            }
          }
        },
        m = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: l,
            shownUserIds: s,
            rows: u,
            counts: i,
          } = e;
          for (let e of _.Z.getFriendIDs()) {
            if (null != t && t > 0 && u.length >= t) break;
            if (n.has(e) || s.has(e)) continue;
            let r = o.default.getUser(e);
            !(null == r || c(l, r.id)) &&
              (u.push({ type: "FRIEND", item: r, isSuggested: !1 }),
              i.numFriends++);
          }
        },
        U = (e) => {
          let { query: n, rows: t, counts: l, inviteTargetType: s } = e;
          s === T.Iq.EMBEDDED_APPLICATION &&
            N.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: n } = e;
                t.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  l.numChannels++;
              },
            );
        },
        P = (e) => {
          let {
            query: n,
            omitUserIds: t,
            shownUserIds: l,
            rows: s,
            counts: u,
          } = e;
          N.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let i = r.Z.getDMFromUserId(n.id);
            if (null != i && null != I.ZP.lastMessageId(i))
              l.add(n.id),
                s.push({ type: "DM", item: n, isSuggested: !1 }),
                u.numDms++;
          });
        },
        D = (e) => {
          let { query: n, rows: t, counts: l } = e;
          N.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                l.numGroupDms++;
            },
          );
        },
        g = (e) => {
          let {
            query: n,
            rows: t,
            counts: l,
            omitUserIds: s,
            shownUserIds: u,
          } = e;
          N.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(s.has(n.id) || u.has(n.id)))
                u.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  l.numFriends++;
            },
          );
        };
      function h(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: l,
            suggestedUserIds: s,
            suggestedChannelIds: u,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
          } = e,
          a = new Set(),
          I = [],
          _ = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let e = {
            omitUserIds: l,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: a,
            rows: I,
            counts: _,
          };
          t === T.Iq.EMBEDDED_APPLICATION &&
            (M({ ...e, includeGroupDms: !1, limit: 1 }),
            f({ ...e, suggestedChannelIds: u })),
            O({ ...e, suggestedUserIds: s }),
            M({ ...e, includeGroupDms: !0 }),
            m(e);
        } else {
          let e = { query: n, rows: I, counts: _ };
          t === T.Iq.EMBEDDED_APPLICATION && U({ ...e, inviteTargetType: t }),
            P({ ...e, omitUserIds: l, shownUserIds: a }),
            D(e),
            g({ ...e, omitUserIds: l, shownUserIds: a });
        }
        return { rows: I, counts: _ };
      }
      function A(e, n) {
        for (let t of E.Z.getPrivateChannelIds()) {
          let l = r.Z.getChannel(t);
          if (null == l || !l.isDM() || null == I.ZP.lastMessageId(l.id))
            continue;
          let s = l.getRecipientId();
          if (null != s && !e.has(s)) {
            let e = o.default.getUser(s);
            if (null == e || e.bot || c(n, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function R(e) {
        let { channel: n, inviteTargetType: t, applicationId: l } = e;
        if (t === T.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let e of i.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (e.applicationId === l) return new Set(e.userIds);
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
        p = {
          [l.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: V.MINUTES },
          [l.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: V.HOURS },
          [l.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: V.HOURS },
          [l.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: V.HOURS },
          [l.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: V.DAYS },
          [l.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: V.DAYS },
          [l.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: V.NEVER },
        };
      function v(e, n) {
        let t = parseInt(n, 10),
          l = 0 === t,
          s = p[e].value;
        switch (p[e].type) {
          case V.MINUTES:
            if (l) return S.Z.Messages.INVITE_EXPIRES_MINUTES;
            return S.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
              numUses: t,
            });
          case V.HOURS:
            if (l)
              return S.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: s });
            return S.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
              numHours: s,
              numUses: t,
            });
          case V.DAYS:
            if (l)
              return S.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                numDays: s,
              });
            return S.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
              numDays: s,
              numUses: t,
            });
          case V.NEVER:
            if (l) return S.Z.Messages.INVITE_EXPIRES_NEVER;
            return S.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: t });
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
            return o;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return a;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return S;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return c;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return d;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return N;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return _;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return r;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return O;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return f;
          },
          INVITE_OPTIONS_ONCE: function () {
            return i;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return u;
          },
          MAX_AGE_OPTIONS: function () {
            return M;
          },
          MAX_USES_OPTIONS: function () {
            return E;
          },
        });
      var l = t(689938);
      function s(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let u = s(0, () => l.Z.Messages.MAX_USES.format({ maxUses: 0 })),
        i = s(1, () => l.Z.Messages.MAX_USES.format({ maxUses: 1 })),
        r = s(5, () => l.Z.Messages.MAX_USES.format({ maxUses: 5 })),
        a = s(10, () => l.Z.Messages.MAX_USES.format({ maxUses: 10 })),
        I = s(25, () => l.Z.Messages.MAX_USES.format({ maxUses: 25 })),
        _ = s(50, () => l.Z.Messages.MAX_USES.format({ maxUses: 50 })),
        o = s(100, () => l.Z.Messages.MAX_USES.format({ maxUses: 100 })),
        E = [u, i, r, a, I, _, o],
        N = s(1800, () =>
          l.Z.Messages.DURATION_MINUTES.format({ minutes: 30 }),
        ),
        d = s(3600, () => l.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
        T = s(21600, () => l.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
        S = s(43200, () => l.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
        c = s(86400, () => l.Z.Messages.DURATION_DAYS.format({ days: 1 })),
        O = s(604800, () => l.Z.Messages.DURATION_DAYS.format({ days: 7 })),
        f = s(0, () => l.Z.Messages.MAX_AGE_NEVER),
        M = [N, d, T, S, c, O, f];
    },
  },
]);
//# sourceMappingURL=f5296732f96b3d40c43e.js.map
