"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51308"],
  {
    484614: function (e, n, t) {
      var i,
        r = t(200651),
        a = t(192379),
        o = t(846519),
        l = t(481060),
        c = t(572004),
        u = t(388032);
      function s(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class d extends (i = a.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: n } = this.state,
            t =
              n === l.CopyInput.Modes.SUCCESS
                ? u.intl.string(u.t["t5VZ8/"])
                : e;
          return (0, r.jsx)(l.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: n,
            text: t,
            supportsCopy: c.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: n, delay: t = 1e3 } = this.props,
            i = (0, c.JG)(e);
          this.setState({
            mode: i ? l.CopyInput.Modes.SUCCESS : l.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(t, () =>
              this.setState({ mode: l.CopyInput.Modes.DEFAULT }),
            ),
            null == n || n(e);
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
            s(this, "_timeout", void 0),
            (this.state = { mode: l.CopyInput.Modes.DEFAULT }),
            (this._timeout = new o.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      s(d, "defaultProps", { delay: 1e3 }), (n.Z = d);
    },
    518756: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(357156),
        a = t(984933),
        o = t(430824),
        l = t(496675),
        c = t(981631);
      function u(e, n) {
        return (0, i.e7)(
          [o.Z, a.ZP, l.Z],
          () => {
            let t = o.Z.getGuild(e);
            if (
              l.Z.can(c.Plq.ADMINISTRATOR, t) ||
              l.Z.can(c.Plq.CREATE_EVENTS, t)
            )
              return !0;
            for (let { channel: t } of a.ZP.getChannels(e)[a.Zb])
              if (null == n || t.type === n) {
                let [e] = (0, r.Ob)(t);
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
          return h;
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
        r = t(159300),
        a = t(427679),
        o = t(592125),
        l = t(984933),
        c = t(430824),
        u = t(496675),
        s = t(700785),
        d = t(924301),
        I = t(765305),
        _ = t(981631);
      function f(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.Z];
        let { entityType: i, channelId: r } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (i === I.WX.EXTERNAL) return !0;
        let a = t.getChannel(r);
        return null != a && s.Uu(_.Plq.VIEW_CHANNEL, a);
      }
      function T(e) {
        let [n, t, i, s] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [l.ZP, o.Z, c.Z, a.Z];
        if ((0, d.Z2)(e)) return !1;
        let { guild_id: _, channel_id: T } = e,
          h =
            e.entity_type === I.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(T),
          p = i.getGuild(_),
          m = s.getStageInstanceByChannel(T);
        return !!(0, r.b)(u.Z, p, h, m) && null != h && f(e, [t]);
      }
      function h(e) {
        return (0, i.e7)(
          [l.ZP, o.Z, c.Z, a.Z],
          () => T(e, [l.ZP, o.Z, c.Z, a.Z]),
          [e],
        );
      }
    },
    460838: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return r;
        },
        Z: function () {
          return D;
        },
      });
      var i,
        r,
        a = t(200651),
        o = t(192379),
        l = t(120356),
        c = t.n(l),
        u = t(442837),
        s = t(481060),
        d = t(447003),
        I = t(471445),
        _ = t(565138),
        f = t(357156),
        T = t(496675),
        h = t(725436),
        p = t(274311),
        m = t(854698),
        N = t(285784),
        E = t(95291),
        g = t(742593),
        S = t(810561),
        O = t(187443),
        v = t(131154),
        C = t(765305),
        P = t(981631),
        b = t(388032),
        x = t(662416);
      function U(e) {
        let { channel: n, onClick: t } = e,
          { canManageAllEvents: i } = (0, f.XJ)(n),
          r = (0, u.e7)(
            [T.Z],
            () => !n.isGuildVocal() || T.Z.can(P.Plq.CONNECT, n),
            [n],
          ),
          l = o.useMemo(() => (0, d.Z)(n), [n]),
          _ = (0, I.KS)(n);
        return (0, a.jsx)(s.Tooltip, {
          text: b.intl.string(b.t.nHjY9P),
          shouldShow: !r && null != t,
          children: (e) =>
            (0, a.jsxs)(s.Clickable, {
              ...e,
              className: c()(x.inline, x.channelContainer, {
                [x.channelContainerEnabled]: r && null != t,
                [x.channelContainerDisabled]: !r && null != t,
              }),
              onClick: t,
              children: [
                (0, a.jsx)(s.Tooltip, {
                  text: b.intl.string(b.t["48WXaW"]),
                  shouldShow: i && l && r && null != t,
                  children: (e) =>
                    null != _
                      ? (0, a.jsx)(_, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: x.icon,
                        })
                      : null,
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: x.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function M(e) {
        let {
          guild: n,
          channel: t,
          onJoinClick: i,
          handleLocationClick: r,
          location: o,
          isExternal: l,
          isHub: u,
        } = e;
        if (u)
          return null == n
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                className: x.inline,
                children: [
                  (0, a.jsx)(_.Z, {
                    className: x.guildIcon,
                    size: _.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != t
          ? (0, a.jsx)(U, { channel: t, onClick: i })
          : (0, a.jsxs)(s.Clickable, {
              className: x.inline,
              onClick: r,
              children: [
                (0, a.jsx)(s.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: c()(x.channelContainer, x.icon),
                }),
                (0, a.jsx)(s.Text, {
                  className: l ? x.externalLocation : x.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, h.m)(o, !0),
                }),
              ],
            });
      }
      function D(e) {
        let {
            className: n,
            guild: t,
            channel: i,
            creator: r,
            name: o,
            entityType: l,
            description: u,
            imageLocation: d = 0,
            imageSource: I,
            isActive: _,
            isUserLurking: f,
            isJoined: T = !1,
            isMember: h = !1,
            isHub: P = !1,
            speakers: b,
            speakerCount: U,
            rsvped: D,
            canInvite: R,
            location: y,
            truncate: A,
            onContextMenu: Z,
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
          W = (0, p.Q)(i, l),
          J = l === C.WX.EXTERNAL,
          Q = J ? (e) => e.stopPropagation() : void 0,
          K = [];
        if (null != Y && null != event) {
          let e = (0, m.Ho)(Y);
          K = (0, m.PJ)(4, e, new Date(q.scheduled_start_time));
        }
        let $ = K.length > 0;
        return (0, a.jsxs)(s.ClickableContainer, {
          "aria-label": o,
          onClick: () => (null == B ? void 0 : B(X)),
          onContextMenu: Z,
          className: c()(x.card, { [x.joined]: T, [x.lurking]: f }, n),
          children: [
            (0, a.jsxs)("div", {
              className: c()(x.padding, { [x.isRecurring]: $ }),
              children: [
                0 === d && (0, a.jsx)(E.Z, { source: I }),
                (0, a.jsx)(g.ZP, {
                  creator: r,
                  name: o,
                  description: u,
                  imageSource: 1 === d ? I : null,
                  truncate: A,
                  guildId: null == t ? void 0 : t.id,
                  isHub: P,
                  isNew: G,
                  guildEvent: q,
                  eventPreview: z,
                  recurrenceId: X,
                }),
                _ &&
                  null != t &&
                  null != b &&
                  U > 0 &&
                  (0, a.jsx)(v.Z, {
                    guild: t,
                    speakers: b,
                    speakerCount: U,
                    className: x.spacing,
                  }),
                (0, a.jsx)("hr", { className: x.divider }),
                (0, a.jsxs)("div", {
                  className: c()(x.inline, x.footer),
                  children: [
                    (0, a.jsx)(M, {
                      guild: t,
                      channel: i,
                      onJoinClick: V,
                      handleLocationClick: Q,
                      location: y,
                      isExternal: J,
                      isHub: P,
                    }),
                    P
                      ? (0, a.jsx)(O.Z, {
                          isActive: _,
                          isUserLurking: f,
                          isMember: h,
                          rsvped: D,
                          onRsvpClick: w,
                          onJoinGuildClick: L,
                          onGoToGuildClick: k,
                          guildName: null == t ? void 0 : t.name,
                          canInvite: R,
                          isChannelPublic: W,
                          onInviteClick: j,
                        })
                      : (0, a.jsx)(N.ZP, {
                          entityType: l,
                          isJoined: T,
                          isActive: _,
                          isUserLurking: f,
                          rsvped: D,
                          canInvite: R,
                          isChannelPublic: W,
                          onContextMenu: Z,
                          onJoinClick: V,
                          onRsvpClick: w,
                          onStartClick: H,
                          onInviteClick: j,
                          onEndClick: F,
                        }),
                  ],
                }),
                $ && (0, a.jsx)("hr", { className: x.divider }),
              ],
            }),
            $ &&
              (0, a.jsx)(S.Z, {
                guildId: null == t ? void 0 : t.id,
                recurrenceRule: Y,
                guildEventId: q.id,
                onRecurrenceClick: B,
              }),
          ],
        });
      }
      ((i = r || (r = {}))[(i.BANNER = 0)] = "BANNER"),
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
      var r = t(120356),
        a = t.n(r),
        o = t(481060),
        l = t(388032),
        c = t(888110);
      function u(e) {
        let { guild: n, speakers: t, speakerCount: r, className: u } = e,
          s = t.slice(0, 5),
          d = s.map((e) => {
            var t, r;
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
                : null === (r = e.user) || void 0 === r
                  ? void 0
                  : r.id,
            );
          }),
          I = r - s.length;
        return (0, i.jsxs)("div", {
          className: a()(c.grid, u),
          children: [
            d,
            I > 0 &&
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
                    children: l.intl.format(l.t["185ggI"], { count: I }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    55589: function (e, n, t) {
      let i, r, a;
      t(47120), t(653041);
      var o,
        l,
        c,
        u,
        s,
        d,
        I = t(913527),
        _ = t.n(I),
        f = t(442837),
        T = t(759174),
        h = t(570140),
        p = t(355298),
        m = t(333984),
        N = t(131704),
        E = t(592125),
        g = t(430824),
        S = t(306680),
        O = t(9156),
        v = t(594174),
        C = t(709054),
        P = t(176505);
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
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = _()(r).valueOf(),
                    n = C.default.fromTimestamp(e);
                  return C.default.compare(i, n) > 0 ? i : n;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: n,
          isFavorite: !1,
          isRequest: p.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id),
        };
      }
      function U() {
        b.clear(),
          Object.values(E.Z.getMutablePrivateChannels()).forEach((e) => {
            b.set(e.id, x(e));
          });
      }
      function M() {
        let e = E.Z.getMutablePrivateChannels();
        for (let n in e) b.set(n, x(e[n]));
      }
      let D =
        ((i = []),
        (r = []),
        (a = []),
        () => {
          let e = b.values("FAVORITE"),
            n = b.values("DEFAULT");
          return (
            (i !== e || r !== n) &&
              ((a = []),
              e.forEach((e) => {
                let { channelId: n } = e;
                return a.push(n);
              }),
              (i = e),
              n.forEach((e) => {
                let { channelId: n } = e;
                return a.push(n);
              }),
              (r = n)),
            a
          );
        });
      class R extends (l = f.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, g.Z, v.default, p.Z, O.ZP),
            this.syncWith([O.ZP, p.Z], U);
        }
        getPrivateChannelIds() {
          return D();
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
      (d = "PrivateChannelSortStore"),
        (s = "displayName") in (u = R)
          ? Object.defineProperty(u, s, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[s] = d),
        (n.Z = new R(h.Z, {
          CONNECTION_OPEN: U,
          CONNECTION_OPEN_SUPPLEMENTAL: U,
          OVERLAY_INITIALIZE: U,
          CACHE_LOADED: M,
          CACHE_LOADED_LAZY: M,
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e;
            n.forEach((e) => {
              ((0, N.hv)(e.type) || b.has(e.id)) && b.set(e.id, x(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: n } = e;
            if (!(0, N.hv)(n.type) || n.id === P.V) return !1;
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
          return D;
        },
        an: function () {
          return P;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return b;
        },
      }),
        t(653041),
        t(47120);
      var r,
        a,
        o = t(317381),
        l = t(592125),
        c = t(271383),
        u = t(306680),
        s = t(699516),
        d = t(594174),
        I = t(55589),
        _ = t(483360),
        f = t(981631),
        T = t(245335),
        h = t(388032);
      (i = t(603617)),
        ((a = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (a.DM = "DM"),
        (a.FRIEND = "FRIEND"),
        (a.CHANNEL = "CHANNEL");
      let p = (e, n) => null != e && c.ZP.isMember(e, n),
        m = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: i,
            omitGuildId: r,
            shownUserIds: a,
            rows: o,
            counts: l,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != i && i > 0 && o.length >= i) break;
              if (n.has(e) || a.has(e)) continue;
              let t = d.default.getUser(e);
              !(null == t || p(r, t.id)) &&
                (a.add(t.id),
                o.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                l.numFriends++);
            }
        },
        N = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: i,
            counts: r,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && i.length >= t) break;
              let n = l.Z.getChannel(e);
              null != n &&
                (i.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        E = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: i,
              shownUserIds: r,
              rows: a,
              counts: o,
              includeGroupDms: c,
              limit: s,
            } = e,
            _ = 0;
          for (let e of I.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && a.length >= t) || (null != s && _ >= s))
              break;
            let I = l.Z.getChannel(e);
            if (null == I || !I.isPrivate()) continue;
            if (c && I.type === f.d4z.GROUP_DM) {
              a.push({ type: "GROUP_DM", item: I, isSuggested: !1 }),
                o.numGroupDms++,
                _++;
              continue;
            }
            if (null == u.ZP.lastMessageId(I.id)) continue;
            let T = I.getRecipientId();
            if (null != T && !n.has(T) && !r.has(T)) {
              let e = d.default.getUser(T);
              if (null == e || e.bot || p(i, e.id)) continue;
              r.add(e.id),
                a.push({ type: "DM", item: e, isSuggested: !1 }),
                o.numDms++,
                _++;
            }
          }
        },
        g = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: i,
            shownUserIds: r,
            rows: a,
            counts: o,
          } = e;
          for (let e of s.Z.getFriendIDs()) {
            if (null != t && t > 0 && a.length >= t) break;
            if (n.has(e) || r.has(e)) continue;
            let l = d.default.getUser(e);
            !(null == l || p(i, l.id)) &&
              (a.push({ type: "FRIEND", item: l, isSuggested: !1 }),
              o.numFriends++);
          }
        },
        S = (e) => {
          let { query: n, rows: t, counts: i, inviteTargetType: r } = e;
          r === T.Iq.EMBEDDED_APPLICATION &&
            _.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
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
            rows: r,
            counts: a,
          } = e;
          _.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = l.Z.getDMFromUserId(n.id);
            if (null != o && null != u.ZP.lastMessageId(o))
              i.add(n.id),
                r.push({ type: "DM", item: n, isSuggested: !1 }),
                a.numDms++;
          });
        },
        v = (e) => {
          let { query: n, rows: t, counts: i } = e;
          _.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                i.numGroupDms++;
            },
          );
        },
        C = (e) => {
          let {
            query: n,
            rows: t,
            counts: i,
            omitUserIds: r,
            shownUserIds: a,
          } = e;
          _.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(r.has(n.id) || a.has(n.id)))
                a.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  i.numFriends++;
            },
          );
        };
      function P(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: i,
            suggestedUserIds: r,
            suggestedChannelIds: a,
            maxRowsWithoutQuery: o,
            omitGuildId: l,
          } = e,
          c = new Set(),
          u = [],
          s = {
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
            counts: s,
          };
          t === T.Iq.EMBEDDED_APPLICATION &&
            (E({ ...e, includeGroupDms: !1, limit: 1 }),
            N({ ...e, suggestedChannelIds: a })),
            m({ ...e, suggestedUserIds: r }),
            E({ ...e, includeGroupDms: !0 }),
            g(e);
        } else {
          let e = { query: n, rows: u, counts: s };
          t === T.Iq.EMBEDDED_APPLICATION && S({ ...e, inviteTargetType: t }),
            O({ ...e, omitUserIds: i, shownUserIds: c }),
            v(e),
            C({ ...e, omitUserIds: i, shownUserIds: c });
        }
        return { rows: u, counts: s };
      }
      function b(e, n) {
        for (let t of I.Z.getPrivateChannelIds()) {
          let i = l.Z.getChannel(t);
          if (null == i || !i.isDM() || null == u.ZP.lastMessageId(i.id))
            continue;
          let r = i.getRecipientId();
          if (null != r && !e.has(r)) {
            let e = d.default.getUser(r);
            if (null == e || e.bot || p(n, e.id)) continue;
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
        M = {
          [i.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: U.MINUTES },
          [i.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: U.HOURS },
          [i.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: U.HOURS },
          [i.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: U.HOURS },
          [i.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: U.DAYS },
          [i.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: U.DAYS },
          [i.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: U.NEVER },
        };
      function D(e, n) {
        let t = parseInt(n, 10),
          i = 0 === t,
          r = M[e].value;
        switch (M[e].type) {
          case U.MINUTES:
            if (i) return h.intl.string(h.t["/WbTXF"]);
            return h.intl.formatToPlainString(h.t.eDRWJC, { numUses: t });
          case U.HOURS:
            if (i)
              return h.intl.formatToPlainString(h.t.ZVdJMz, { numHours: r });
            return h.intl.formatToPlainString(h.t.NgZgAA, {
              numHours: r,
              numUses: t,
            });
          case U.DAYS:
            if (i)
              return h.intl.formatToPlainString(h.t.T96qsr, { numDays: r });
            return h.intl.formatToPlainString(h.t.TfuB9P, {
              numDays: r,
              numUses: t,
            });
          case U.NEVER:
            if (i) return h.intl.string(h.t.QrHBnJ);
            return h.intl.formatToPlainString(h.t.yJnTxM, { numUses: t });
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
          return a;
        },
      }),
        t(47120);
      var i = t(192379),
        r = t(881052);
      function a(e, n) {
        let [t, a] = i.useState(!1),
          [o, l] = i.useState(null);
        return [
          async () => {
            a(!0), l(null);
            try {
              let n = await e();
              return a(!1), l(null), n;
            } catch (t) {
              let e = new r.Hx(t);
              return null == n || n(e), l(e), a(!1), null;
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
            return c;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return h;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return p;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return f;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return _;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return m;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return N;
          },
          INVITE_OPTIONS_ONCE: function () {
            return o;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return a;
          },
          MAX_AGE_OPTIONS: function () {
            return E;
          },
          MAX_USES_OPTIONS: function () {
            return I;
          },
        });
      var i = t(388032);
      function r(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let a = r(0, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 0 }),
        ),
        o = r(1, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 1 }),
        ),
        l = r(5, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 5 }),
        ),
        c = r(10, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 10 }),
        ),
        u = r(25, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 25 }),
        ),
        s = r(50, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 50 }),
        ),
        d = r(100, () =>
          i.intl.formatToPlainString(i.t["r/IcuL"], { maxUses: 100 }),
        ),
        I = [a, o, l, c, u, s, d],
        _ = r(1800, () =>
          i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 }),
        ),
        f = r(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
        T = r(21600, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 }),
        ),
        h = r(43200, () =>
          i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 }),
        ),
        p = r(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
        m = r(604800, () =>
          i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 }),
        ),
        N = r(0, () => i.intl.string(i.t.PqEzn5)),
        E = [_, f, T, h, p, m, N];
    },
    222403: function (e, n, t) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    662416: function (e, n, t) {
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
    560883: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    21394: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    374918: function (e, n, t) {
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
    736950: function (e, n, t) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    228315: function (e, n, t) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    363819: function (e, n, t) {
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
    701961: function (e, n, t) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    909116: function (e, n, t) {
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
    888110: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    228593: function (e, n, t) {
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
    713046: function (e, n, t) {
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
    551071: function (e, n, t) {
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
    546820: function (e, n, t) {
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
    305191: function (e, n, t) {
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
//# sourceMappingURL=925d2b50b336b85380b5.js.map
