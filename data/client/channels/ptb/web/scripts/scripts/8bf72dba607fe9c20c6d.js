"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81350"],
  {
    518756: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var a = t(442837),
        i = t(357156),
        r = t(984933),
        o = t(430824),
        c = t(496675),
        l = t(981631);
      function s(e, n) {
        return (0, a.e7)(
          [o.Z, r.ZP, c.Z],
          () => {
            let t = o.Z.getGuild(e);
            if (
              c.Z.can(l.Plq.ADMINISTRATOR, t) ||
              c.Z.can(l.Plq.CREATE_EVENTS, t)
            )
              return !0;
            for (let { channel: t } of r.ZP.getChannels(e)[r.Zb])
              if (null == n || t.type === n) {
                let [e] = (0, i.Ob)(t);
                if (c.Z.can(e, t)) return !0;
              }
            return !1;
          },
          [e, n],
        );
      }
    },
    951539: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return N;
        },
        so: function () {
          return E;
        },
        wg: function () {
          return f;
        },
      }),
        t(47120);
      var a = t(442837),
        i = t(159300),
        r = t(427679),
        o = t(592125),
        c = t(984933),
        l = t(430824),
        s = t(496675),
        u = t(700785),
        d = t(924301),
        _ = t(765305),
        I = t(981631);
      function f(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.Z];
        let { entityType: a, channelId: i } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (a === _.WX.EXTERNAL) return !0;
        let r = t.getChannel(i);
        return null != r && u.Uu(I.Plq.VIEW_CHANNEL, r);
      }
      function E(e) {
        let [n, t, a, u] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [c.ZP, o.Z, l.Z, r.Z];
        if ((0, d.Z2)(e)) return !1;
        let { guild_id: I, channel_id: E } = e,
          N =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(E),
          T = a.getGuild(I),
          S = u.getStageInstanceByChannel(E);
        return !!(0, i.b)(s.Z, T, N, S) && null != N && f(e, [t]);
      }
      function N(e) {
        return (0, a.e7)(
          [c.ZP, o.Z, l.Z, r.Z],
          () => E(e, [c.ZP, o.Z, l.Z, r.Z]),
          [e],
        );
      }
    },
    460838: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return i;
        },
        Z: function () {
          return x;
        },
      });
      var a,
        i,
        r = t(735250),
        o = t(470079),
        c = t(120356),
        l = t.n(c),
        s = t(442837),
        u = t(481060),
        d = t(447003),
        _ = t(471445),
        I = t(565138),
        f = t(357156),
        E = t(496675),
        N = t(725436),
        T = t(274311),
        S = t(854698),
        m = t(285784),
        h = t(95291),
        g = t(742593),
        O = t(810561),
        p = t(187443),
        v = t(131154),
        P = t(765305),
        C = t(981631),
        b = t(689938),
        U = t(947017);
      function M(e) {
        let { channel: n, onClick: t } = e,
          { canManageAllEvents: a } = (0, f.XJ)(n),
          i = (0, s.e7)(
            [E.Z],
            () => !n.isGuildVocal() || E.Z.can(C.Plq.CONNECT, n),
            [n],
          ),
          c = o.useMemo(() => (0, d.Z)(n), [n]),
          I = (0, _.KS)(n);
        return (0, r.jsx)(u.Tooltip, {
          text: b.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !i && null != t,
          children: (e) =>
            (0, r.jsxs)(u.Clickable, {
              ...e,
              className: l()(U.inline, U.channelContainer, {
                [U.channelContainerEnabled]: i && null != t,
                [U.channelContainerDisabled]: !i && null != t,
              }),
              onClick: t,
              children: [
                (0, r.jsx)(u.Tooltip, {
                  text: b.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: a && c && i && null != t,
                  children: (e) =>
                    null != I
                      ? (0, r.jsx)(I, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: U.icon,
                        })
                      : null,
                }),
                (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: U.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function R(e) {
        let {
          guild: n,
          channel: t,
          onJoinClick: a,
          handleLocationClick: i,
          location: o,
          isExternal: c,
          isHub: s,
        } = e;
        if (s)
          return null == n
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                className: U.inline,
                children: [
                  (0, r.jsx)(I.Z, {
                    className: U.guildIcon,
                    size: I.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != t
          ? (0, r.jsx)(M, { channel: t, onClick: a })
          : (0, r.jsxs)(u.Clickable, {
              className: U.inline,
              onClick: i,
              children: [
                (0, r.jsx)(u.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: l()(U.channelContainer, U.icon),
                }),
                (0, r.jsx)(u.Text, {
                  className: c ? U.externalLocation : U.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, N.m)(o, !0),
                }),
              ],
            });
      }
      function x(e) {
        let {
            className: n,
            guild: t,
            channel: a,
            creator: i,
            name: o,
            entityType: c,
            description: s,
            imageLocation: d = 0,
            imageSource: _,
            isActive: I,
            isUserLurking: f,
            isJoined: E = !1,
            isMember: N = !1,
            isHub: C = !1,
            speakers: b,
            speakerCount: M,
            rsvped: x,
            canInvite: A,
            location: Z,
            truncate: D,
            onContextMenu: V,
            onJoinClick: y,
            onJoinGuildClick: L,
            onGoToGuildClick: k,
            onRsvpClick: H,
            onStartClick: w,
            onInviteClick: j,
            onEndClick: F,
            onClick: G,
            isNew: B,
            guildEvent: X,
            eventPreview: q,
            recurrenceRule: Y,
            recurrenceId: z,
          } = e,
          W = (0, T.Q)(a, c),
          J = c === P.WX.EXTERNAL,
          K = J ? (e) => e.stopPropagation() : void 0,
          Q = [];
        if (null != Y && null != event) {
          let e = (0, S.Ho)(Y);
          Q = (0, S.PJ)(4, e, new Date(X.scheduled_start_time));
        }
        let $ = Q.length > 0;
        return (0, r.jsxs)(u.ClickableContainer, {
          "aria-label": o,
          onClick: () => (null == G ? void 0 : G(z)),
          onContextMenu: V,
          className: l()(U.card, { [U.joined]: E, [U.lurking]: f }, n),
          children: [
            (0, r.jsxs)("div", {
              className: l()(U.padding, { [U.isRecurring]: $ }),
              children: [
                0 === d && (0, r.jsx)(h.Z, { source: _ }),
                (0, r.jsx)(g.ZP, {
                  creator: i,
                  name: o,
                  description: s,
                  imageSource: 1 === d ? _ : null,
                  truncate: D,
                  guildId: null == t ? void 0 : t.id,
                  isHub: C,
                  isNew: B,
                  guildEvent: X,
                  eventPreview: q,
                  recurrenceId: z,
                }),
                I &&
                  null != t &&
                  null != b &&
                  M > 0 &&
                  (0, r.jsx)(v.Z, {
                    guild: t,
                    speakers: b,
                    speakerCount: M,
                    className: U.spacing,
                  }),
                (0, r.jsx)("hr", { className: U.divider }),
                (0, r.jsxs)("div", {
                  className: l()(U.inline, U.footer),
                  children: [
                    (0, r.jsx)(R, {
                      guild: t,
                      channel: a,
                      onJoinClick: y,
                      handleLocationClick: K,
                      location: Z,
                      isExternal: J,
                      isHub: C,
                    }),
                    C
                      ? (0, r.jsx)(p.Z, {
                          isActive: I,
                          isUserLurking: f,
                          isMember: N,
                          rsvped: x,
                          onRsvpClick: H,
                          onJoinGuildClick: L,
                          onGoToGuildClick: k,
                          guildName: null == t ? void 0 : t.name,
                          canInvite: A,
                          isChannelPublic: W,
                          onInviteClick: j,
                        })
                      : (0, r.jsx)(m.ZP, {
                          entityType: c,
                          isJoined: E,
                          isActive: I,
                          isUserLurking: f,
                          rsvped: x,
                          canInvite: A,
                          isChannelPublic: W,
                          onContextMenu: V,
                          onJoinClick: y,
                          onRsvpClick: H,
                          onStartClick: w,
                          onInviteClick: j,
                          onEndClick: F,
                        }),
                  ],
                }),
                $ && (0, r.jsx)("hr", { className: U.divider }),
              ],
            }),
            $ &&
              (0, r.jsx)(O.Z, {
                guildId: null == t ? void 0 : t.id,
                recurrenceRule: Y,
                guildEventId: X.id,
                onRecurrenceClick: G,
              }),
          ],
        });
      }
      ((a = i || (i = {}))[(a.BANNER = 0)] = "BANNER"),
        (a[(a.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        c = t(689938),
        l = t(571032);
      function s(e) {
        let { guild: n, speakers: t, speakerCount: i, className: s } = e,
          u = t.slice(0, 5),
          d = u.map((e) => {
            var t, i;
            return (0, a.jsxs)(
              "div",
              {
                className: l.speakerContainer,
                children: [
                  (0, a.jsx)(o.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: o.AvatarSizes.SIZE_20,
                    className: l.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className: l.textInGridContainer,
                    children: (0, a.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: l.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (i = e.user) || void 0 === i
                  ? void 0
                  : i.id,
            );
          }),
          _ = i - u.length;
        return (0, a.jsxs)("div", {
          className: r()(l.grid, s),
          children: [
            d,
            _ > 0 &&
              (0, a.jsxs)("div", {
                className: l.speakerContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: l.iconMicrophone,
                    children: (0, a.jsx)(o.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, a.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: l.textInGrid,
                    children:
                      c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: _ },
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    55589: function (e, n, t) {
      let a, i, r;
      t(47120), t(653041);
      var o,
        c,
        l,
        s,
        u,
        d,
        _ = t(913527),
        I = t.n(_),
        f = t(442837),
        E = t(759174),
        N = t(570140),
        T = t(355298),
        S = t(333984),
        m = t(131704),
        h = t(592125),
        g = t(430824),
        O = t(306680),
        p = t(9156),
        v = t(594174),
        P = t(709054),
        C = t(176505);
      ((l = o || (o = {})).DEFAULT = "DEFAULT"), (l.FAVORITE = "FAVORITE");
      let b = new E.h(
        (e) => {
          let { isRequest: n, isFavorite: t } = e;
          return n ? [] : [t ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: n } = e;
          return -n;
        },
      );
      function U(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var n, t;
                let a =
                    null !==
                      (t =
                        null !== (n = O.ZP.lastMessageId(e.id)) && void 0 !== n
                          ? n
                          : e.lastMessageId) && void 0 !== t
                      ? t
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = I()(i).valueOf(),
                    n = P.default.fromTimestamp(e);
                  return P.default.compare(a, n) > 0 ? a : n;
                }
                return a;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: n,
          isFavorite: !1,
          isRequest: T.Z.isMessageRequest(e.id) || S.Z.isSpam(e.id),
        };
      }
      function M() {
        b.clear(),
          Object.values(h.Z.getMutablePrivateChannels()).forEach((e) => {
            b.set(e.id, U(e));
          });
      }
      function R() {
        let e = h.Z.getMutablePrivateChannels();
        for (let n in e) b.set(n, U(e[n]));
      }
      let x =
        ((a = []),
        (i = []),
        (r = []),
        () => {
          let e = b.values("FAVORITE"),
            n = b.values("DEFAULT");
          return (
            (a !== e || i !== n) &&
              ((r = []),
              e.forEach((e) => {
                let { channelId: n } = e;
                return r.push(n);
              }),
              (a = e),
              n.forEach((e) => {
                let { channelId: n } = e;
                return r.push(n);
              }),
              (i = n)),
            r
          );
        });
      class A extends (c = f.ZP.Store) {
        initialize() {
          this.waitFor(h.Z, g.Z, v.default, T.Z, p.ZP),
            this.syncWith([p.ZP, T.Z], M);
        }
        getPrivateChannelIds() {
          return x();
        }
        getSortedChannels() {
          return [b.values("FAVORITE"), b.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            b.values().forEach((n) => {
              let { channelId: t, lastMessageId: a } = n;
              e[t] = a;
            }),
            e
          );
        }
      }
      (d = "PrivateChannelSortStore"),
        (u = "displayName") in (s = A)
          ? Object.defineProperty(s, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[u] = d),
        (n.Z = new A(N.Z, {
          CONNECTION_OPEN: M,
          CONNECTION_OPEN_SUPPLEMENTAL: M,
          OVERLAY_INITIALIZE: M,
          CACHE_LOADED: R,
          CACHE_LOADED_LAZY: R,
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e;
            n.forEach((e) => {
              ((0, m.hv)(e.type) || b.has(e.id)) && b.set(e.id, U(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: n } = e;
            if (!(0, m.hv)(n.type) || n.id === C.V) return !1;
            b.set(n.id, U(n));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            return b.delete(n.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: n, message: t } = e;
            if (!b.has(n)) return !1;
            let a = h.Z.getChannel(n);
            return null != a && b.set(n, U(a, t.id));
          },
          GUILD_CREATE: function (e) {
            let n = e.guild.id;
            return b.delete(n);
          },
          LOGOUT: function () {
            b.clear();
          },
        }));
    },
    971130: function (e, n, t) {
      let a;
      t.d(n, {
        Sz: function () {
          return U;
        },
        Vg: function () {
          return x;
        },
        an: function () {
          return C;
        },
        bm: function () {
          return i;
        },
        rh: function () {
          return b;
        },
      }),
        t(653041),
        t(47120);
      var i,
        r,
        o = t(317381),
        c = t(592125),
        l = t(271383),
        s = t(306680),
        u = t(699516),
        d = t(594174),
        _ = t(55589),
        I = t(483360),
        f = t(981631),
        E = t(245335),
        N = t(689938);
      (a = t(603617)),
        ((r = i || (i = {})).GROUP_DM = "GROUP_DM"),
        (r.DM = "DM"),
        (r.FRIEND = "FRIEND"),
        (r.CHANNEL = "CHANNEL");
      let T = (e, n) => null != e && l.ZP.isMember(e, n),
        S = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: a,
            omitGuildId: i,
            shownUserIds: r,
            rows: o,
            counts: c,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != a && a > 0 && o.length >= a) break;
              if (n.has(e) || r.has(e)) continue;
              let t = d.default.getUser(e);
              !(null == t || T(i, t.id)) &&
                (r.add(t.id),
                o.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                c.numFriends++);
            }
        },
        m = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: a,
            counts: i,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && a.length >= t) break;
              let n = c.Z.getChannel(e);
              null != n &&
                (a.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                i.numChannels++);
            }
        },
        h = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: a,
              shownUserIds: i,
              rows: r,
              counts: o,
              includeGroupDms: l,
              limit: u,
            } = e,
            I = 0;
          for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && r.length >= t) || (null != u && I >= u))
              break;
            let _ = c.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (l && _.type === f.d4z.GROUP_DM) {
              r.push({ type: "GROUP_DM", item: _, isSuggested: !1 }),
                o.numGroupDms++,
                I++;
              continue;
            }
            if (null == s.ZP.lastMessageId(_.id)) continue;
            let E = _.getRecipientId();
            if (null != E && !n.has(E) && !i.has(E)) {
              let e = d.default.getUser(E);
              if (null == e || e.bot || T(a, e.id)) continue;
              i.add(e.id),
                r.push({ type: "DM", item: e, isSuggested: !1 }),
                o.numDms++,
                I++;
            }
          }
        },
        g = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: a,
            shownUserIds: i,
            rows: r,
            counts: o,
          } = e;
          for (let e of u.Z.getFriendIDs()) {
            if (null != t && t > 0 && r.length >= t) break;
            if (n.has(e) || i.has(e)) continue;
            let c = d.default.getUser(e);
            !(null == c || T(a, c.id)) &&
              (r.push({ type: "FRIEND", item: c, isSuggested: !1 }),
              o.numFriends++);
          }
        },
        O = (e) => {
          let { query: n, rows: t, counts: a, inviteTargetType: i } = e;
          i === E.Iq.EMBEDDED_APPLICATION &&
            I.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: n } = e;
                t.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  a.numChannels++;
              },
            );
        },
        p = (e) => {
          let {
            query: n,
            omitUserIds: t,
            shownUserIds: a,
            rows: i,
            counts: r,
          } = e;
          I.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = c.Z.getDMFromUserId(n.id);
            if (null != o && null != s.ZP.lastMessageId(o))
              a.add(n.id),
                i.push({ type: "DM", item: n, isSuggested: !1 }),
                r.numDms++;
          });
        },
        v = (e) => {
          let { query: n, rows: t, counts: a } = e;
          I.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                a.numGroupDms++;
            },
          );
        },
        P = (e) => {
          let {
            query: n,
            rows: t,
            counts: a,
            omitUserIds: i,
            shownUserIds: r,
          } = e;
          I.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(i.has(n.id) || r.has(n.id)))
                r.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  a.numFriends++;
            },
          );
        };
      function C(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: a,
            suggestedUserIds: i,
            suggestedChannelIds: r,
            maxRowsWithoutQuery: o,
            omitGuildId: c,
          } = e,
          l = new Set(),
          s = [],
          u = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let e = {
            omitUserIds: a,
            maxRowsWithoutQuery: o,
            omitGuildId: c,
            shownUserIds: l,
            rows: s,
            counts: u,
          };
          t === E.Iq.EMBEDDED_APPLICATION &&
            (h({ ...e, includeGroupDms: !1, limit: 1 }),
            m({ ...e, suggestedChannelIds: r })),
            S({ ...e, suggestedUserIds: i }),
            h({ ...e, includeGroupDms: !0 }),
            g(e);
        } else {
          let e = { query: n, rows: s, counts: u };
          t === E.Iq.EMBEDDED_APPLICATION && O({ ...e, inviteTargetType: t }),
            p({ ...e, omitUserIds: a, shownUserIds: l }),
            v(e),
            P({ ...e, omitUserIds: a, shownUserIds: l });
        }
        return { rows: s, counts: u };
      }
      function b(e, n) {
        for (let t of _.Z.getPrivateChannelIds()) {
          let a = c.Z.getChannel(t);
          if (null == a || !a.isDM() || null == s.ZP.lastMessageId(a.id))
            continue;
          let i = a.getRecipientId();
          if (null != i && !e.has(i)) {
            let e = d.default.getUser(i);
            if (null == e || e.bot || T(n, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function U(e) {
        let { channel: n, inviteTargetType: t, applicationId: a } = e;
        if (t === E.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let e of o.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (e.applicationId === a) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let M = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        R = {
          [a.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: M.MINUTES },
          [a.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: M.HOURS },
          [a.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: M.HOURS },
          [a.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: M.HOURS },
          [a.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: M.DAYS },
          [a.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: M.DAYS },
          [a.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: M.NEVER },
        };
      function x(e, n) {
        let t = parseInt(n, 10),
          a = 0 === t,
          i = R[e].value;
        switch (R[e].type) {
          case M.MINUTES:
            if (a) return N.Z.Messages.INVITE_EXPIRES_MINUTES;
            return N.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
              numUses: t,
            });
          case M.HOURS:
            if (a)
              return N.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: i });
            return N.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
              numHours: i,
              numUses: t,
            });
          case M.DAYS:
            if (a)
              return N.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                numDays: i,
              });
            return N.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
              numDays: i,
              numUses: t,
            });
          case M.NEVER:
            if (a) return N.Z.Messages.INVITE_EXPIRES_NEVER;
            return N.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: t });
          default:
            return "";
        }
      }
      n.ZP = {
        getMaxAgeOptions: a.MAX_AGE_OPTIONS,
        getMaxUsesOptions: a.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: a.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: a.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: a.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: a.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: a.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: a.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: a.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: a.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: a.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: a.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: a.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: a.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: a.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: a.INVITE_OPTIONS_100_TIMES,
      };
    },
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var a = t(470079),
        i = t(881052);
      function r(e, n) {
        let [t, r] = a.useState(!1),
          [o, c] = a.useState(null);
        return [
          async () => {
            r(!0), c(null);
            try {
              let n = await e();
              return r(!1), c(null), n;
            } catch (t) {
              let e = new i.Hx(t);
              return null == n || n(e), c(e), r(!1), null;
            }
          },
          { loading: t, error: o },
        ];
      }
    },
    603617: function (e, n, t) {
      t.r(n),
        t.d(n, {
          INVITE_OPTIONS_100_TIMES: function () {
            return d;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return N;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return T;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return f;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return I;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return c;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return E;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return S;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return m;
          },
          INVITE_OPTIONS_ONCE: function () {
            return o;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return r;
          },
          MAX_AGE_OPTIONS: function () {
            return h;
          },
          MAX_USES_OPTIONS: function () {
            return _;
          },
        });
      var a = t(689938);
      function i(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let r = i(0, () => a.Z.Messages.MAX_USES.format({ maxUses: 0 })),
        o = i(1, () => a.Z.Messages.MAX_USES.format({ maxUses: 1 })),
        c = i(5, () => a.Z.Messages.MAX_USES.format({ maxUses: 5 })),
        l = i(10, () => a.Z.Messages.MAX_USES.format({ maxUses: 10 })),
        s = i(25, () => a.Z.Messages.MAX_USES.format({ maxUses: 25 })),
        u = i(50, () => a.Z.Messages.MAX_USES.format({ maxUses: 50 })),
        d = i(100, () => a.Z.Messages.MAX_USES.format({ maxUses: 100 })),
        _ = [r, o, c, l, s, u, d],
        I = i(1800, () =>
          a.Z.Messages.DURATION_MINUTES.format({ minutes: 30 }),
        ),
        f = i(3600, () => a.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
        E = i(21600, () => a.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
        N = i(43200, () => a.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
        T = i(86400, () => a.Z.Messages.DURATION_DAYS.format({ days: 1 })),
        S = i(604800, () => a.Z.Messages.DURATION_DAYS.format({ days: 7 })),
        m = i(0, () => a.Z.Messages.MAX_AGE_NEVER),
        h = [I, f, E, N, T, S, m];
    },
    985992: function (e, n, t) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    947017: function (e, n, t) {
      e.exports = {
        card: "card_cc2c09",
        lurking: "lurking_cc2c09",
        padding: "padding_cc2c09",
        isRecurring: "isRecurring_cc2c09",
        joined: "joined_cc2c09",
        inline: "inline_cc2c09",
        guildIcon: "guildIcon_cc2c09",
        channelContainer: "channelContainer_cc2c09",
        channelContainerEnabled: "channelContainerEnabled_cc2c09",
        channelContainerDisabled: "channelContainerDisabled_cc2c09",
        icon: "icon_cc2c09",
        spacing: "spacing_cc2c09",
        divider: "divider_cc2c09",
        footer: "footer_cc2c09",
        channelLocation: "channelLocation_cc2c09 label_cc2c09",
        externalLocation: "externalLocation_cc2c09 label_cc2c09",
      };
    },
    94277: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    805553: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    351293: function (e, n, t) {
      e.exports = {
        blockedUsersContainer: "blockedUsersContainer_b229b0",
        form: "form_b229b0",
        formItem: "formItem_b229b0",
        topicFormItem: "topicFormItem_b229b0",
        textInput: "textInput_b229b0",
        warning: "warning_b229b0",
        broadcastInfoDescription: "broadcastInfoDescription_b229b0",
        broadcastInfoTooltip: "broadcastInfoTooltip_b229b0",
        addImageHint: "addImageHint_b229b0",
        imagePreview: "imagePreview_b229b0",
        imagePreviewInner: "imagePreviewInner_b229b0",
      };
    },
    373520: function (e, n, t) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    356731: function (e, n, t) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    26940: function (e, n, t) {
      e.exports = {
        content: "content_f9a98f",
        channelName: "channelName_f9a98f",
        icon: "icon_f9a98f",
        locationIcon: "locationIcon_f9a98f",
        textContainer: "textContainer_f9a98f",
        subheader: "subheader_f9a98f",
        previewCard: "previewCard_f9a98f",
      };
    },
    759704: function (e, n, t) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    237645: function (e, n, t) {
      e.exports = {
        container: "container_d7123a",
        close: "close_d7123a",
        iconContainer: "iconContainer_d7123a",
        icon: "icon_d7123a",
        header: "header_d7123a text_d7123a",
        body: "body_d7123a text_d7123a",
        invite: "invite_d7123a",
        inviteDetail: "inviteDetail_d7123a",
      };
    },
    571032: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    510863: function (e, n, t) {
      e.exports = {
        container: "container_c811f3",
        content: "content_c811f3",
        textContainer: "textContainer_c811f3",
        descriptionText: "descriptionText_c811f3",
        image: "image_c811f3",
        inlineText: "inlineText_c811f3",
        footer: "footer_c811f3",
        button: "button_c811f3",
      };
    },
    686550: function (e, n, t) {
      e.exports = {
        avatarUploader: "avatarUploader_e9b3be",
        avatarUploaderDisabled: "avatarUploaderDisabled_e9b3be",
        avatarUploaderInnerSquare: "avatarUploaderInnerSquare_e9b3be",
        avatarUploaderInnerSquareDisabled:
          "avatarUploaderInnerSquareDisabled_e9b3be",
        avatarUploadIcon: "avatarUploadIcon_e9b3be",
        hideDefaultIcon: "hideDefaultIcon_e9b3be",
      };
    },
    315822: function (e, n, t) {
      e.exports = {
        imageUploader: "imageUploader_de76e4",
        removeButton: "removeButton_de76e4",
        sizeInfo: "sizeInfo_de76e4",
        disabled: "disabled_de76e4",
        imageUploaderInner: "imageUploaderInner_de76e4",
        imageUploaderIconWrapper: "imageUploaderIconWrapper_de76e4",
        imageUploaderFileInput: "imageUploaderFileInput_de76e4",
        imageUploaderAcronym: "imageUploaderAcronym_de76e4",
        imageUploaderHint: "imageUploaderHint_de76e4",
        imageUploaderIcon: "imageUploaderIcon_de76e4",
        imageUploaderIconDisabled: "imageUploaderIconDisabled_de76e4",
      };
    },
    871820: function (e, n, t) {
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
        input: "input_cedfaf",
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        copyInput: "copyInput_cedfaf",
        copyButton: "copyButton_cedfaf",
        subText: "subText_cedfaf",
        temporaryMembershipContainerBackground:
          "temporaryMembershipContainerBackground_cedfaf",
        temporaryMembershipContainer: "temporaryMembershipContainer_cedfaf",
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
        guestBody: "guestBody_cedfaf",
        guestSendInviteLinkHeader: "guestSendInviteLinkHeader_cedfaf",
        guestSelectChannelHeader: "guestSelectChannelHeader_cedfaf",
      };
    },
    578814: function (e, n, t) {
      e.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
  },
]);
//# sourceMappingURL=8bf72dba607fe9c20c6d.js.map
