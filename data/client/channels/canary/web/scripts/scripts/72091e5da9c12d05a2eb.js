"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81350"],
  {
    518756: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(442837),
        a = t(357156),
        r = t(984933),
        o = t(430824),
        l = t(496675),
        c = t(981631);
      function u(e, n) {
        return (0, i.e7)(
          [o.Z, r.ZP, l.Z],
          () => {
            let t = o.Z.getGuild(e);
            if (
              l.Z.can(c.Plq.ADMINISTRATOR, t) ||
              l.Z.can(c.Plq.CREATE_EVENTS, t)
            )
              return !0;
            for (let { channel: t } of r.ZP.getChannels(e)[r.Zb])
              if (null == n || t.type === n) {
                let [e] = (0, a.Ob)(t);
                if (l.Z.can(e, t)) return !0;
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
          return T;
        },
        wg: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(442837),
        a = t(159300),
        r = t(427679),
        o = t(592125),
        l = t(984933),
        c = t(430824),
        u = t(496675),
        d = t(700785),
        s = t(924301),
        _ = t(765305),
        I = t(981631);
      function f(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.Z];
        let { entityType: i, channelId: a } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (i === _.WX.EXTERNAL) return !0;
        let r = t.getChannel(a);
        return null != r && d.Uu(I.Plq.VIEW_CHANNEL, r);
      }
      function T(e) {
        let [n, t, i, d] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [l.ZP, o.Z, c.Z, r.Z];
        if ((0, s.Z2)(e)) return !1;
        let { guild_id: I, channel_id: T } = e,
          N =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(T),
          m = i.getGuild(I),
          g = d.getStageInstanceByChannel(T);
        return !!(0, a.b)(u.Z, m, N, g) && null != N && f(e, [t]);
      }
      function N(e) {
        return (0, i.e7)(
          [l.ZP, o.Z, c.Z, r.Z],
          () => T(e, [l.ZP, o.Z, c.Z, r.Z]),
          [e],
        );
      }
    },
    460838: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return a;
        },
        Z: function () {
          return M;
        },
      });
      var i,
        a,
        r = t(200651),
        o = t(192379),
        l = t(120356),
        c = t.n(l),
        u = t(442837),
        d = t(481060),
        s = t(447003),
        _ = t(471445),
        I = t(565138),
        f = t(357156),
        T = t(496675),
        N = t(725436),
        m = t(274311),
        g = t(854698),
        h = t(285784),
        E = t(95291),
        p = t(742593),
        S = t(810561),
        O = t(187443),
        v = t(131154),
        P = t(765305),
        C = t(981631),
        b = t(388032),
        x = t(947017);
      function U(e) {
        let { channel: n, onClick: t } = e,
          { canManageAllEvents: i } = (0, f.XJ)(n),
          a = (0, u.e7)(
            [T.Z],
            () => !n.isGuildVocal() || T.Z.can(C.Plq.CONNECT, n),
            [n],
          ),
          l = o.useMemo(() => (0, s.Z)(n), [n]),
          I = (0, _.KS)(n);
        return (0, r.jsx)(d.Tooltip, {
          text: b.intl.string(b.t.nHjY9P),
          shouldShow: !a && null != t,
          children: (e) =>
            (0, r.jsxs)(d.Clickable, {
              ...e,
              className: c()(x.inline, x.channelContainer, {
                [x.channelContainerEnabled]: a && null != t,
                [x.channelContainerDisabled]: !a && null != t,
              }),
              onClick: t,
              children: [
                (0, r.jsx)(d.Tooltip, {
                  text: b.intl.string(b.t["48WXaW"]),
                  shouldShow: i && l && a && null != t,
                  children: (e) =>
                    null != I
                      ? (0, r.jsx)(I, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: x.icon,
                        })
                      : null,
                }),
                (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: x.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function D(e) {
        let {
          guild: n,
          channel: t,
          onJoinClick: i,
          handleLocationClick: a,
          location: o,
          isExternal: l,
          isHub: u,
        } = e;
        if (u)
          return null == n
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                className: x.inline,
                children: [
                  (0, r.jsx)(I.Z, {
                    className: x.guildIcon,
                    size: I.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != t
          ? (0, r.jsx)(U, { channel: t, onClick: i })
          : (0, r.jsxs)(d.Clickable, {
              className: x.inline,
              onClick: a,
              children: [
                (0, r.jsx)(d.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: c()(x.channelContainer, x.icon),
                }),
                (0, r.jsx)(d.Text, {
                  className: l ? x.externalLocation : x.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, N.m)(o, !0),
                }),
              ],
            });
      }
      function M(e) {
        let {
            className: n,
            guild: t,
            channel: i,
            creator: a,
            name: o,
            entityType: l,
            description: u,
            imageLocation: s = 0,
            imageSource: _,
            isActive: I,
            isUserLurking: f,
            isJoined: T = !1,
            isMember: N = !1,
            isHub: C = !1,
            speakers: b,
            speakerCount: U,
            rsvped: M,
            canInvite: R,
            location: A,
            truncate: Z,
            onContextMenu: y,
            onJoinClick: V,
            onJoinGuildClick: L,
            onGoToGuildClick: k,
            onRsvpClick: w,
            onStartClick: H,
            onInviteClick: j,
            onEndClick: F,
            onClick: B,
            isNew: G,
            guildEvent: q,
            eventPreview: z,
            recurrenceRule: Y,
            recurrenceId: X,
          } = e,
          W = (0, m.Q)(i, l),
          J = l === P.WX.EXTERNAL,
          Q = J ? (e) => e.stopPropagation() : void 0,
          K = [];
        if (null != Y && null != event) {
          let e = (0, g.Ho)(Y);
          K = (0, g.PJ)(4, e, new Date(q.scheduled_start_time));
        }
        let $ = K.length > 0;
        return (0, r.jsxs)(d.ClickableContainer, {
          "aria-label": o,
          onClick: () => (null == B ? void 0 : B(X)),
          onContextMenu: y,
          className: c()(x.card, { [x.joined]: T, [x.lurking]: f }, n),
          children: [
            (0, r.jsxs)("div", {
              className: c()(x.padding, { [x.isRecurring]: $ }),
              children: [
                0 === s && (0, r.jsx)(E.Z, { source: _ }),
                (0, r.jsx)(p.ZP, {
                  creator: a,
                  name: o,
                  description: u,
                  imageSource: 1 === s ? _ : null,
                  truncate: Z,
                  guildId: null == t ? void 0 : t.id,
                  isHub: C,
                  isNew: G,
                  guildEvent: q,
                  eventPreview: z,
                  recurrenceId: X,
                }),
                I &&
                  null != t &&
                  null != b &&
                  U > 0 &&
                  (0, r.jsx)(v.Z, {
                    guild: t,
                    speakers: b,
                    speakerCount: U,
                    className: x.spacing,
                  }),
                (0, r.jsx)("hr", { className: x.divider }),
                (0, r.jsxs)("div", {
                  className: c()(x.inline, x.footer),
                  children: [
                    (0, r.jsx)(D, {
                      guild: t,
                      channel: i,
                      onJoinClick: V,
                      handleLocationClick: Q,
                      location: A,
                      isExternal: J,
                      isHub: C,
                    }),
                    C
                      ? (0, r.jsx)(O.Z, {
                          isActive: I,
                          isUserLurking: f,
                          isMember: N,
                          rsvped: M,
                          onRsvpClick: w,
                          onJoinGuildClick: L,
                          onGoToGuildClick: k,
                          guildName: null == t ? void 0 : t.name,
                          canInvite: R,
                          isChannelPublic: W,
                          onInviteClick: j,
                        })
                      : (0, r.jsx)(h.ZP, {
                          entityType: l,
                          isJoined: T,
                          isActive: I,
                          isUserLurking: f,
                          rsvped: M,
                          canInvite: R,
                          isChannelPublic: W,
                          onContextMenu: y,
                          onJoinClick: V,
                          onRsvpClick: w,
                          onStartClick: H,
                          onInviteClick: j,
                          onEndClick: F,
                        }),
                  ],
                }),
                $ && (0, r.jsx)("hr", { className: x.divider }),
              ],
            }),
            $ &&
              (0, r.jsx)(S.Z, {
                guildId: null == t ? void 0 : t.id,
                recurrenceRule: Y,
                guildEventId: q.id,
                onRecurrenceClick: B,
              }),
          ],
        });
      }
      ((i = a || (a = {}))[(i.BANNER = 0)] = "BANNER"),
        (i[(i.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(388032),
        c = t(571032);
      function u(e) {
        let { guild: n, speakers: t, speakerCount: a, className: u } = e,
          d = t.slice(0, 5),
          s = d.map((e) => {
            var t, a;
            return (0, i.jsxs)(
              "div",
              {
                className: c.speakerContainer,
                children: [
                  (0, i.jsx)(o.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: o.AvatarSizes.SIZE_20,
                    className: c.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className: c.textInGridContainer,
                    children: (0, i.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: c.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (a = e.user) || void 0 === a
                  ? void 0
                  : a.id,
            );
          }),
          _ = a - d.length;
        return (0, i.jsxs)("div", {
          className: r()(c.grid, u),
          children: [
            s,
            _ > 0 &&
              (0, i.jsxs)("div", {
                className: c.speakerContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: c.iconMicrophone,
                    children: (0, i.jsx)(o.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, i.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: c.textInGrid,
                    children: l.intl.format(l.t["185ggI"], { count: _ }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    55589: function (e, n, t) {
      let i, a, r;
      t(47120), t(653041);
      var o,
        l,
        c,
        u,
        d,
        s,
        _ = t(913527),
        I = t.n(_),
        f = t(442837),
        T = t(759174),
        N = t(570140),
        m = t(355298),
        g = t(333984),
        h = t(131704),
        E = t(592125),
        p = t(430824),
        S = t(306680),
        O = t(9156),
        v = t(594174),
        P = t(709054),
        C = t(176505);
      ((c = o || (o = {})).DEFAULT = "DEFAULT"), (c.FAVORITE = "FAVORITE");
      let b = new T.h(
        (e) => {
          let { isRequest: n, isFavorite: t } = e;
          return n ? [] : [t ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: n } = e;
          return -n;
        },
      );
      function x(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var n, t;
                let i =
                    null !==
                      (t =
                        null !== (n = S.ZP.lastMessageId(e.id)) && void 0 !== n
                          ? n
                          : e.lastMessageId) && void 0 !== t
                      ? t
                      : e.id,
                  a = e.isMessageRequestTimestamp;
                if (null != a) {
                  let e = I()(a).valueOf(),
                    n = P.default.fromTimestamp(e);
                  return P.default.compare(i, n) > 0 ? i : n;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: n,
          isFavorite: !1,
          isRequest: m.Z.isMessageRequest(e.id) || g.Z.isSpam(e.id),
        };
      }
      function U() {
        b.clear(),
          Object.values(E.Z.getMutablePrivateChannels()).forEach((e) => {
            b.set(e.id, x(e));
          });
      }
      function D() {
        let e = E.Z.getMutablePrivateChannels();
        for (let n in e) b.set(n, x(e[n]));
      }
      let M =
        ((i = []),
        (a = []),
        (r = []),
        () => {
          let e = b.values("FAVORITE"),
            n = b.values("DEFAULT");
          return (
            (i !== e || a !== n) &&
              ((r = []),
              e.forEach((e) => {
                let { channelId: n } = e;
                return r.push(n);
              }),
              (i = e),
              n.forEach((e) => {
                let { channelId: n } = e;
                return r.push(n);
              }),
              (a = n)),
            r
          );
        });
      class R extends (l = f.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, p.Z, v.default, m.Z, O.ZP),
            this.syncWith([O.ZP, m.Z], U);
        }
        getPrivateChannelIds() {
          return M();
        }
        getSortedChannels() {
          return [b.values("FAVORITE"), b.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            b.values().forEach((n) => {
              let { channelId: t, lastMessageId: i } = n;
              e[t] = i;
            }),
            e
          );
        }
      }
      (s = "PrivateChannelSortStore"),
        (d = "displayName") in (u = R)
          ? Object.defineProperty(u, d, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[d] = s),
        (n.Z = new R(N.Z, {
          CONNECTION_OPEN: U,
          CONNECTION_OPEN_SUPPLEMENTAL: U,
          OVERLAY_INITIALIZE: U,
          CACHE_LOADED: D,
          CACHE_LOADED_LAZY: D,
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e;
            n.forEach((e) => {
              ((0, h.hv)(e.type) || b.has(e.id)) && b.set(e.id, x(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: n } = e;
            if (!(0, h.hv)(n.type) || n.id === C.V) return !1;
            b.set(n.id, x(n));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            return b.delete(n.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: n, message: t } = e;
            if (!b.has(n)) return !1;
            let i = E.Z.getChannel(n);
            return null != i && b.set(n, x(i, t.id));
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
      let i;
      t.d(n, {
        Sz: function () {
          return x;
        },
        Vg: function () {
          return M;
        },
        an: function () {
          return C;
        },
        bm: function () {
          return a;
        },
        rh: function () {
          return b;
        },
      }),
        t(653041),
        t(47120);
      var a,
        r,
        o = t(317381),
        l = t(592125),
        c = t(271383),
        u = t(306680),
        d = t(699516),
        s = t(594174),
        _ = t(55589),
        I = t(483360),
        f = t(981631),
        T = t(245335),
        N = t(388032);
      (i = t(603617)),
        ((r = a || (a = {})).GROUP_DM = "GROUP_DM"),
        (r.DM = "DM"),
        (r.FRIEND = "FRIEND"),
        (r.CHANNEL = "CHANNEL");
      let m = (e, n) => null != e && c.ZP.isMember(e, n),
        g = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: i,
            omitGuildId: a,
            shownUserIds: r,
            rows: o,
            counts: l,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != i && i > 0 && o.length >= i) break;
              if (n.has(e) || r.has(e)) continue;
              let t = s.default.getUser(e);
              !(null == t || m(a, t.id)) &&
                (r.add(t.id),
                o.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                l.numFriends++);
            }
        },
        h = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: i,
            counts: a,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && i.length >= t) break;
              let n = l.Z.getChannel(e);
              null != n &&
                (i.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                a.numChannels++);
            }
        },
        E = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: i,
              shownUserIds: a,
              rows: r,
              counts: o,
              includeGroupDms: c,
              limit: d,
            } = e,
            I = 0;
          for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && r.length >= t) || (null != d && I >= d))
              break;
            let _ = l.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (c && _.type === f.d4z.GROUP_DM) {
              r.push({ type: "GROUP_DM", item: _, isSuggested: !1 }),
                o.numGroupDms++,
                I++;
              continue;
            }
            if (null == u.ZP.lastMessageId(_.id)) continue;
            let T = _.getRecipientId();
            if (null != T && !n.has(T) && !a.has(T)) {
              let e = s.default.getUser(T);
              if (null == e || e.bot || m(i, e.id)) continue;
              a.add(e.id),
                r.push({ type: "DM", item: e, isSuggested: !1 }),
                o.numDms++,
                I++;
            }
          }
        },
        p = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: i,
            shownUserIds: a,
            rows: r,
            counts: o,
          } = e;
          for (let e of d.Z.getFriendIDs()) {
            if (null != t && t > 0 && r.length >= t) break;
            if (n.has(e) || a.has(e)) continue;
            let l = s.default.getUser(e);
            !(null == l || m(i, l.id)) &&
              (r.push({ type: "FRIEND", item: l, isSuggested: !1 }),
              o.numFriends++);
          }
        },
        S = (e) => {
          let { query: n, rows: t, counts: i, inviteTargetType: a } = e;
          a === T.Iq.EMBEDDED_APPLICATION &&
            I.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: n } = e;
                t.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  i.numChannels++;
              },
            );
        },
        O = (e) => {
          let {
            query: n,
            omitUserIds: t,
            shownUserIds: i,
            rows: a,
            counts: r,
          } = e;
          I.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = l.Z.getDMFromUserId(n.id);
            if (null != o && null != u.ZP.lastMessageId(o))
              i.add(n.id),
                a.push({ type: "DM", item: n, isSuggested: !1 }),
                r.numDms++;
          });
        },
        v = (e) => {
          let { query: n, rows: t, counts: i } = e;
          I.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                i.numGroupDms++;
            },
          );
        },
        P = (e) => {
          let {
            query: n,
            rows: t,
            counts: i,
            omitUserIds: a,
            shownUserIds: r,
          } = e;
          I.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(a.has(n.id) || r.has(n.id)))
                r.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function C(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: i,
            suggestedUserIds: a,
            suggestedChannelIds: r,
            maxRowsWithoutQuery: o,
            omitGuildId: l,
          } = e,
          c = new Set(),
          u = [],
          d = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: o,
            omitGuildId: l,
            shownUserIds: c,
            rows: u,
            counts: d,
          };
          t === T.Iq.EMBEDDED_APPLICATION &&
            (E({ ...e, includeGroupDms: !1, limit: 1 }),
            h({ ...e, suggestedChannelIds: r })),
            g({ ...e, suggestedUserIds: a }),
            E({ ...e, includeGroupDms: !0 }),
            p(e);
        } else {
          let e = { query: n, rows: u, counts: d };
          t === T.Iq.EMBEDDED_APPLICATION && S({ ...e, inviteTargetType: t }),
            O({ ...e, omitUserIds: i, shownUserIds: c }),
            v(e),
            P({ ...e, omitUserIds: i, shownUserIds: c });
        }
        return { rows: u, counts: d };
      }
      function b(e, n) {
        for (let t of _.Z.getPrivateChannelIds()) {
          let i = l.Z.getChannel(t);
          if (null == i || !i.isDM() || null == u.ZP.lastMessageId(i.id))
            continue;
          let a = i.getRecipientId();
          if (null != a && !e.has(a)) {
            let e = s.default.getUser(a);
            if (null == e || e.bot || m(n, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function x(e) {
        let { channel: n, inviteTargetType: t, applicationId: i } = e;
        if (t === T.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let e of o.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (e.applicationId === i) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let U = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        D = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: U.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: U.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: U.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: U.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: U.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: U.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: U.NEVER },
        };
      function M(e, n) {
        let t = parseInt(n, 10),
          i = 0 === t,
          a = D[e].value;
        switch (D[e].type) {
          case U.MINUTES:
            if (i) return N.intl.string(N.t["/WbTXF"]);
            return N.intl.formatToPlainString(N.t.eDRWJC, { numUses: t });
          case U.HOURS:
            if (i)
              return N.intl.formatToPlainString(N.t.ZVdJMz, { numHours: a });
            return N.intl.formatToPlainString(N.t.NgZgAA, {
              numHours: a,
              numUses: t,
            });
          case U.DAYS:
            if (i)
              return N.intl.formatToPlainString(N.t.T96qsr, { numDays: a });
            return N.intl.formatToPlainString(N.t.TfuB9P, {
              numDays: a,
              numUses: t,
            });
          case U.NEVER:
            if (i) return N.intl.string(N.t.QrHBnJ);
            return N.intl.formatToPlainString(N.t.yJnTxM, { numUses: t });
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
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(192379),
        a = t(881052);
      function r(e, n) {
        let [t, r] = i.useState(!1),
          [o, l] = i.useState(null);
        return [
          async () => {
            r(!0), l(null);
            try {
              let n = await e();
              return r(!1), l(null), n;
            } catch (t) {
              let e = new a.Hx(t);
              return null == n || n(e), l(e), r(!1), null;
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
            return s;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return c;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return N;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return m;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return f;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return I;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return d;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return g;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return h;
          },
          INVITE_OPTIONS_ONCE: function () {
            return o;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return r;
          },
          MAX_AGE_OPTIONS: function () {
            return E;
          },
          MAX_USES_OPTIONS: function () {
            return _;
          },
        });
      var i = t(388032);
      function a(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let r = a(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        o = a(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        l = a(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        c = a(10, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 10 }),
        ),
        u = a(25, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 25 }),
        ),
        d = a(50, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 50 }),
        ),
        s = a(100, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 100 }),
        ),
        _ = [r, o, l, c, u, d, s],
        I = a(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        f = a(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        T = a(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        N = a(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        m = a(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        g = a(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        h = a(0, () => i.intl.string(i.t.PqEzn5)),
        E = [I, f, T, N, m, g, h];
    },
    243351: function (e, n, t) {
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
//# sourceMappingURL=72091e5da9c12d05a2eb.js.map
