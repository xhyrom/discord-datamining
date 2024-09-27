"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56236"],
  {
    951539: function (e, n, i) {
      i.d(n, {
        ZP: function () {
          return Z;
        },
        so: function () {
          return v;
        },
        wg: function () {
          return h;
        },
      }),
        i(47120);
      var l = i(442837),
        t = i(159300),
        a = i(427679),
        r = i(592125),
        s = i(984933),
        o = i(430824),
        c = i(496675),
        u = i(700785),
        d = i(924301),
        E = i(765305),
        g = i(981631);
      function h(e) {
        var n;
        let [i] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.Z];
        let { entityType: l, channelId: t } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (l === E.WX.EXTERNAL) return !0;
        let a = i.getChannel(t);
        return null != a && u.Uu(g.Plq.VIEW_CHANNEL, a);
      }
      function v(e) {
        let [n, i, l, u] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [s.ZP, r.Z, o.Z, a.Z];
        if ((0, d.Z2)(e)) return !1;
        let { guild_id: g, channel_id: v } = e,
          Z =
            e.entity_type === E.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : i.getChannel(v),
          C = l.getGuild(g),
          m = u.getStageInstanceByChannel(v);
        return !!(0, t.b)(c.Z, C, Z, m) && null != Z && h(e, [i]);
      }
      function Z(e) {
        return (0, l.e7)(
          [s.ZP, r.Z, o.Z, a.Z],
          () => v(e, [s.ZP, r.Z, o.Z, a.Z]),
          [e],
        );
      }
    },
    146768: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = i(442837),
        t = i(431328),
        a = i(501655),
        r = i(427679),
        s = i(592125),
        o = i(430824);
      function c(e) {
        let {
            id: n,
            data: { guild: i, instance: c, speakers: u, participantCount: d },
            context: E,
          } = e,
          g = (0, l.e7)(
            [o.Z, s.Z],
            () => {
              var e;
              return o.Z.getGuild(
                null === (e = s.Z.getChannel(n)) || void 0 === e
                  ? void 0
                  : e.getGuildId(),
              );
            },
            [n],
          ),
          h = (0, l.e7)([r.Z], () => r.Z.getStageInstanceByChannel(n), [n]),
          v = (0, t.w8)(n, a.pV.SPEAKER),
          Z = (0, t.Rk)(n),
          C = null != h ? v : u,
          m = (null != h ? Z : d) - C.length;
        return {
          channelId: n,
          guild: null != g ? g : i,
          stage: null != h ? h : c,
          speakers: C,
          audienceCount: m,
          context: E,
        };
      }
    },
    592126: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = i(442837),
        t = i(241155),
        a = i(430824);
      function r(e, n) {
        return (0, l.cj)(
          [a.Z, t.Z],
          () => {
            let i = a.Z.getGuild(e),
              l = null != i;
            return (
              null == i && null != n && (i = t.Z.getCachedGuildByEventId(n)),
              { isMember: l, guild: i }
            );
          },
          [e, n],
        );
      }
    },
    118998: function (e, n, i) {
      i.d(n, {
        H: function () {
          return l;
        },
      });
      let l = (e) => {
        let { guildId: n, guildEventId: i } = e;
        return "https://discord.com/events/".concat(n, "/").concat(i);
      };
    },
    710679: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return T;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(442837),
        a = i(724912),
        r = i(41776),
        s = i(501655),
        o = i(427679),
        c = i(592125),
        u = i(496675),
        d = i(19780),
        E = i(594174),
        g = i(15274),
        h = i(924301),
        v = i(951539),
        Z = i(146768),
        C = i(592126),
        m = i(236373),
        N = i(230900),
        x = i(854698),
        f = i(405613),
        _ = i(460838),
        I = i(462179),
        p = i(981631);
      function T(e) {
        var n;
        let {
            guildEvent: i,
            guildId: T,
            truncate: j,
            onActionTaken: L,
            className: M,
            isNew: k,
          } = e,
          {
            id: P,
            guild_id: G,
            channel_id: D,
            creator_id: S,
            name: y,
            description: A,
            entity_type: R,
            image: U,
            recurrence_rule: b,
          } = i,
          V = (0, x.DK)(i),
          O = (0, t.e7)(
            [h.ZP],
            () => h.ZP.isInterestedInEventRecurrence(P, V),
            [P, V],
          ),
          H = (0, t.e7)([r.Z], () => r.Z.isLurking(G), [G]),
          w = (0, t.e7)([o.Z], () => o.Z.getStageInstanceByChannel(D), [D]),
          z = (0, t.e7)([c.Z], () => c.Z.getChannel(D), [D]),
          B = (0, t.e7)([E.default], () => E.default.getUser(S), [S]),
          { speakers: J } = (0, Z.Z)({
            id: D,
            data: {
              guild: null,
              instance: w,
              speakers: [],
              participantCount: 0,
            },
            context: { guildId: G, instance: w },
          }),
          X = (0, t.e7)([d.Z], () => d.Z.getChannelId()),
          W = (0, h.xt)(i),
          q = X === D && null != X && W,
          F = J.filter((e) => e.type === s.Ui.VOICE),
          K = F.length,
          Y = (0, t.e7)([u.Z], () => u.Z.can(p.Plq.CONNECT, z), [z]),
          Q = (0, v.ZP)(i),
          { isMember: $, guild: ee } = (0, C.Z)(G, P),
          en = (0, I.Z)({
            guild: ee,
            channel: z,
            guildScheduledEvent: i,
            isActive: W,
            recurrenceId: V,
            onActionTaken: L,
          }),
          ei = (0, a.Z)(T),
          el = H
            ? void 0
            : (e) =>
                (0, g.bO)({ eventId: P, parentGuildId: T, recurrenceId: e });
        return (0, l.jsx)(_.Z, {
          guild: ee,
          channel: z,
          creator: B,
          name: y,
          entityType: R,
          description: null != A ? A : void 0,
          location: null !== (n = (0, N.cS)(i)) && void 0 !== n ? n : void 0,
          imageSource: null != U ? (0, f.Z)(i) : void 0,
          imageLocation: _.Q.THUMBNAIL,
          isActive: W,
          isUserLurking: H,
          isJoined: q,
          isMember: $,
          isHub: ei,
          speakers: F,
          canConnect: Y,
          speakerCount: K,
          rsvped: O,
          canInvite: Q,
          ...en,
          className: M,
          onClick: el,
          truncate: j,
          isNew: k,
          guildEvent: i,
          recurrenceRule: (0, m.KV)(b),
          recurrenceId: V,
        });
      }
    },
    460838: function (e, n, i) {
      i.d(n, {
        Q: function () {
          return t;
        },
        Z: function () {
          return G;
        },
      });
      var l,
        t,
        a = i(735250),
        r = i(470079),
        s = i(120356),
        o = i.n(s),
        c = i(442837),
        u = i(481060),
        d = i(447003),
        E = i(471445),
        g = i(565138),
        h = i(357156),
        v = i(496675),
        Z = i(725436),
        C = i(274311),
        m = i(854698),
        N = i(285784),
        x = i(95291),
        f = i(742593),
        _ = i(810561),
        I = i(187443),
        p = i(131154),
        T = i(765305),
        j = i(981631),
        L = i(689938),
        M = i(947017);
      function k(e) {
        let { channel: n, onClick: i } = e,
          { canManageAllEvents: l } = (0, h.XJ)(n),
          t = (0, c.e7)(
            [v.Z],
            () => !n.isGuildVocal() || v.Z.can(j.Plq.CONNECT, n),
            [n],
          ),
          s = r.useMemo(() => (0, d.Z)(n), [n]),
          g = (0, E.KS)(n);
        return (0, a.jsx)(u.Tooltip, {
          text: L.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !t && null != i,
          children: (e) =>
            (0, a.jsxs)(u.Clickable, {
              ...e,
              className: o()(M.inline, M.channelContainer, {
                [M.channelContainerEnabled]: t && null != i,
                [M.channelContainerDisabled]: !t && null != i,
              }),
              onClick: i,
              children: [
                (0, a.jsx)(u.Tooltip, {
                  text: L.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && s && t && null != i,
                  children: (e) =>
                    null != g
                      ? (0, a.jsx)(g, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: M.icon,
                        })
                      : null,
                }),
                (0, a.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: M.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function P(e) {
        let {
          guild: n,
          channel: i,
          onJoinClick: l,
          handleLocationClick: t,
          location: r,
          isExternal: s,
          isHub: c,
        } = e;
        if (c)
          return null == n
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                className: M.inline,
                children: [
                  (0, a.jsx)(g.Z, {
                    className: M.guildIcon,
                    size: g.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != i
          ? (0, a.jsx)(k, { channel: i, onClick: l })
          : (0, a.jsxs)(u.Clickable, {
              className: M.inline,
              onClick: t,
              children: [
                (0, a.jsx)(u.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: o()(M.channelContainer, M.icon),
                }),
                (0, a.jsx)(u.Text, {
                  className: s ? M.externalLocation : M.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, Z.m)(r, !0),
                }),
              ],
            });
      }
      function G(e) {
        let {
            className: n,
            guild: i,
            channel: l,
            creator: t,
            name: r,
            entityType: s,
            description: c,
            imageLocation: d = 0,
            imageSource: E,
            isActive: g,
            isUserLurking: h,
            isJoined: v = !1,
            isMember: Z = !1,
            isHub: j = !1,
            speakers: L,
            speakerCount: k,
            rsvped: G,
            canInvite: D,
            location: S,
            truncate: y,
            onContextMenu: A,
            onJoinClick: R,
            onJoinGuildClick: U,
            onGoToGuildClick: b,
            onRsvpClick: V,
            onStartClick: O,
            onInviteClick: H,
            onEndClick: w,
            onClick: z,
            isNew: B,
            guildEvent: J,
            eventPreview: X,
            recurrenceRule: W,
            recurrenceId: q,
          } = e,
          F = (0, C.Q)(l, s),
          K = s === T.WX.EXTERNAL,
          Y = K ? (e) => e.stopPropagation() : void 0,
          Q = [];
        if (null != W && null != event) {
          let e = (0, m.Ho)(W);
          Q = (0, m.PJ)(4, e, new Date(J.scheduled_start_time));
        }
        let $ = Q.length > 0;
        return (0, a.jsxs)(u.ClickableContainer, {
          "aria-label": r,
          onClick: () => (null == z ? void 0 : z(q)),
          onContextMenu: A,
          className: o()(M.card, { [M.joined]: v, [M.lurking]: h }, n),
          children: [
            (0, a.jsxs)("div", {
              className: o()(M.padding, { [M.isRecurring]: $ }),
              children: [
                0 === d && (0, a.jsx)(x.Z, { source: E }),
                (0, a.jsx)(f.ZP, {
                  creator: t,
                  name: r,
                  description: c,
                  imageSource: 1 === d ? E : null,
                  truncate: y,
                  guildId: null == i ? void 0 : i.id,
                  isHub: j,
                  isNew: B,
                  guildEvent: J,
                  eventPreview: X,
                  recurrenceId: q,
                }),
                g &&
                  null != i &&
                  null != L &&
                  k > 0 &&
                  (0, a.jsx)(p.Z, {
                    guild: i,
                    speakers: L,
                    speakerCount: k,
                    className: M.spacing,
                  }),
                (0, a.jsx)("hr", { className: M.divider }),
                (0, a.jsxs)("div", {
                  className: o()(M.inline, M.footer),
                  children: [
                    (0, a.jsx)(P, {
                      guild: i,
                      channel: l,
                      onJoinClick: R,
                      handleLocationClick: Y,
                      location: S,
                      isExternal: K,
                      isHub: j,
                    }),
                    j
                      ? (0, a.jsx)(I.Z, {
                          isActive: g,
                          isUserLurking: h,
                          isMember: Z,
                          rsvped: G,
                          onRsvpClick: V,
                          onJoinGuildClick: U,
                          onGoToGuildClick: b,
                          guildName: null == i ? void 0 : i.name,
                          canInvite: D,
                          isChannelPublic: F,
                          onInviteClick: H,
                        })
                      : (0, a.jsx)(N.ZP, {
                          entityType: s,
                          isJoined: v,
                          isActive: g,
                          isUserLurking: h,
                          rsvped: G,
                          canInvite: D,
                          isChannelPublic: F,
                          onContextMenu: A,
                          onJoinClick: R,
                          onRsvpClick: V,
                          onStartClick: O,
                          onInviteClick: H,
                          onEndClick: w,
                        }),
                  ],
                }),
                $ && (0, a.jsx)("hr", { className: M.divider }),
              ],
            }),
            $ &&
              (0, a.jsx)(_.Z, {
                guildId: null == i ? void 0 : i.id,
                recurrenceRule: W,
                guildEventId: J.id,
                onRecurrenceClick: z,
              }),
          ],
        });
      }
      ((l = t || (t = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    17671: function (e, n, i) {
      i.r(n),
        i.d(n, {
          __import__useLazyAPIPromise: function () {
            return D;
          },
          default: function () {
            return S;
          },
        });
      var l = i(735250),
        t = i(470079),
        a = i(392711),
        r = i.n(a),
        s = i(442837),
        o = i(481060),
        c = i(45114),
        u = i(313201),
        d = i(597),
        E = i(147754),
        g = i(984933),
        h = i(720202),
        v = i(430824),
        Z = i(306680),
        C = i(626135),
        m = i(823379),
        N = i(981888),
        x = i(709054),
        f = i(897285),
        _ = i(518756),
        I = i(554747),
        p = i(710679),
        T = i(74562),
        j = i(576749),
        L = i(765305),
        M = i(981631),
        k = i(490897),
        P = i(689938),
        G = i(975455);
      let D = N.Z;
      function S(e) {
        let { transitionState: n, onClose: a, guildId: N } = e,
          D = (0, u.Dt)(),
          S = (0, s.e7)([v.Z], () => v.Z.getGuild(N)),
          y = (0, _.Z)(null == S ? void 0 : S.id),
          A = (0, I.ZP)(N),
          R = t.useRef(Z.ZP.ackMessageId(N, k.W.GUILD_EVENT)),
          U = (0, j.Z)();
        return (
          t.useEffect(() => {
            A.forEach((e) => f.Z.getGuildEventUserCounts(N, e.id, [])),
              f.Z.getGuildEventsForCurrentUser(N);
          }, [A, N]),
          t.useEffect(() => {
            let e = v.Z.getGuild(N);
            if (!(null == e ? void 0 : e.hasFeature(M.oNc.HUB))) return;
            let { showHubEventsList: n } = E.Z.getCurrentConfig({
              guildId: N,
              location: "d3755f_1",
            });
            if (!n) return;
            let i = g.ZP.getDefaultChannel(N);
            null != i && d.c(i.id);
          }, [N]),
          t.useEffect(() => {
            C.default.track(M.rMx.OPEN_MODAL, {
              type: L.zw,
              guild_id: N,
              guild_events_count: A.length,
            });
          }, []),
          t.useEffect(() => {
            r()(A)
              .map((e) => e.creator_id)
              .filter(m.lm)
              .uniq()
              .forEach((e) => {
                h.Z.requestMember(N, e);
              });
          }, [N, A]),
          t.useEffect(() => {
            null != N && (0, c.Ju)(N, k.W.GUILD_EVENT);
          }, [N]),
          (0, l.jsxs)(o.ModalRoot, {
            size: o.ModalSize.MEDIUM,
            transitionState: n,
            "aria-labelledby": D,
            children: [
              (0, l.jsxs)(o.ModalHeader, {
                className: G.header,
                children: [
                  (0, l.jsx)(o.CalendarIcon, {
                    size: "md",
                    color: "currentColor",
                    className: G.icon,
                  }),
                  (0, l.jsx)(o.Heading, {
                    id: D,
                    variant: "heading-md/semibold",
                    children:
                      A.length > 0
                        ? P.Z.Messages.GUILD_EVENTS_PLURAL.format({
                            number: A.length,
                          })
                        : P.Z.Messages.GUILD_EVENTS,
                  }),
                  y &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: G.divider,
                          children: "|",
                        }),
                        (0, l.jsx)(o.Button, {
                          size: o.Button.Sizes.MIN,
                          onClick: () => {
                            (0, o.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                i.e("58023"),
                                i.e("25417"),
                              ]).then(i.bind(i, 779250));
                              return (n) => (0, l.jsx)(e, { ...n, guildId: N });
                            }, U);
                          },
                          innerClassName: G.button,
                          children: P.Z.Messages.SCHEDULE_EVENT,
                        }),
                      ],
                    }),
                  (0, l.jsx)(o.Clickable, {
                    onClick: a,
                    className: G.iconButton,
                    "aria-label": P.Z.Messages.CLOSE,
                    children: (0, l.jsx)(o.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: G.icon,
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(o.ModalContent, {
                className: G.content,
                children:
                  A.length > 0
                    ? A.map((e) =>
                        (0, l.jsx)(
                          p.Z,
                          {
                            guildEvent: e,
                            guildId: N,
                            onActionTaken: a,
                            isNew:
                              null != R.current &&
                              x.default.compare(e.id, R.current) > 0,
                          },
                          e.id,
                        ),
                      )
                    : (0, l.jsx)(T.Z, { guildId: N, onClose: a }),
              }),
            ],
          })
        );
      }
    },
    74562: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(442837),
        a = i(481060),
        r = i(434404),
        s = i(147754),
        o = i(939863),
        c = i(430824),
        u = i(496675),
        d = i(981631),
        E = i(689938),
        g = i(682213);
      function h(e) {
        let { guildId: n, onClose: i } = e,
          { showHubEventsList: h } = s.Z.useExperiment(
            { guildId: n, location: "6597ca_1" },
            { autoTrackExposure: !1 },
          ),
          v = (0, t.e7)(
            [c.Z, u.Z],
            () => {
              let e = c.Z.getGuild(n);
              return u.Z.can(d.Plq.MANAGE_ROLES, e);
            },
            [n],
          ),
          Z = (0, t.e7)(
            [c.Z],
            () => {
              let e = c.Z.getGuild(n);
              return h && (null == e ? void 0 : e.hasFeature(d.oNc.HUB));
            },
            [n, h],
          );
        return (0, l.jsxs)("div", {
          className: g.container,
          children: [
            (0, l.jsx)(o.Z, {
              children: (0, l.jsx)("div", {
                className: g.circle,
                children: (0, l.jsx)(a.CalendarIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 40,
                  width: 40,
                  className: g.icon,
                }),
              }),
            }),
            (0, l.jsx)(a.Heading, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              className: g.title,
              children: Z
                ? E.Z.Messages.HUB_EVENTS_HEADER_TITLE
                : E.Z.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE,
            }),
            (0, l.jsx)(a.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: g.subtitle,
              children: Z
                ? E.Z.Messages.HUB_EVENTS_HEADER_DESCRIPTION
                : E.Z.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE,
            }),
            v &&
              (0, l.jsx)(a.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: g.roleTip,
                children: E.Z.Messages.GUILD_EVENT_ROLE_TIP.format({
                  onClick: () => {
                    r.Z.open(n, d.pNK.ROLES), i();
                  },
                }),
              }),
          ],
        });
      }
    },
    131154: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(120356),
        a = i.n(t),
        r = i(481060),
        s = i(689938),
        o = i(571032);
      function c(e) {
        let { guild: n, speakers: i, speakerCount: t, className: c } = e,
          u = i.slice(0, 5),
          d = u.map((e) => {
            var i, t;
            return (0, l.jsxs)(
              "div",
              {
                className: o.speakerContainer,
                children: [
                  (0, l.jsx)(r.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (i = e.user) || void 0 === i
                          ? void 0
                          : i.getAvatarURL(n.id, 20),
                    size: r.AvatarSizes.SIZE_20,
                    className: o.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: o.textInGridContainer,
                    children: (0, l.jsx)(r.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: o.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (t = e.user) || void 0 === t
                  ? void 0
                  : t.id,
            );
          }),
          E = t - u.length;
        return (0, l.jsxs)("div", {
          className: a()(o.grid, c),
          children: [
            d,
            E > 0 &&
              (0, l.jsxs)("div", {
                className: o.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: o.iconMicrophone,
                    children: (0, l.jsx)(r.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, l.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: o.textInGrid,
                    children:
                      s.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: E },
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    462179: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return M;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(442837),
        a = i(481060),
        r = i(239091),
        s = i(749210),
        o = i(305325),
        c = i(281956),
        u = i(357156),
        d = i(703656),
        E = i(922482),
        g = i(984933),
        h = i(430824),
        v = i(496675),
        Z = i(626135),
        C = i(572004),
        m = i(482241),
        N = i(951539),
        x = i(894017),
        f = i(274311),
        _ = i(854698),
        I = i(118998),
        p = i(139712),
        T = i(765305),
        j = i(981631),
        L = i(689938);
      function M(e) {
        let {
            guild: n,
            channel: M,
            guildScheduledEvent: k,
            isActive: P,
            recurrenceId: G,
            onActionTaken: D,
          } = e,
          { scheduled_start_time: S, id: y, entity_type: A, guild_id: R } = k,
          { canManageGuildEvent: U } = (0, u.XJ)(null != M ? M : n),
          b = U(k),
          V = (0, N.ZP)(k),
          O = (0, f.T)(null == M ? void 0 : M.id, k.id),
          { withinStartWindow: H } = (0, _.ub)(S),
          w = (0, t.e7)(
            [v.Z],
            () =>
              (null == M ? !void 0 : !M.isGuildVocal()) ||
              v.Z.can(j.Plq.CONNECT, M),
            [M],
          ),
          z = (0, c.J)(R),
          B = (0, x.Z)(G, y);
        function J(e) {
          e.stopPropagation(), (0, p.Z)(y, G, R);
        }
        async function X(e) {
          e.stopPropagation(),
            await s.Z.joinGuild(R),
            h.Z.addConditionalChangeListener(
              () => null == h.Z.getGuild(R) || (!P && J(e), W(e), !1),
            );
        }
        function W(e) {
          e.stopPropagation();
          let n = g.ZP.getDefaultChannel(R);
          (0, a.closeAllModals)(), (0, d.XU)(R, null == n ? void 0 : n.id);
        }
        return {
          onDeleteClick: b
            ? function (e) {
                if ((e.stopPropagation(), !!b && !P))
                  (0, a.openModal)((e) =>
                    (0, l.jsx)(a.ConfirmModal, {
                      ...e,
                      header: L.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                      confirmText: L.Z.Messages.DELETE,
                      cancelText: L.Z.Messages.CANCEL,
                      onConfirm: () => m.Z.deleteGuildEvent(y, R),
                      children: (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: L.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                      }),
                    }),
                  );
              }
            : void 0,
          onContextMenu: function (e) {
            e.stopPropagation(),
              null != n &&
                (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    i.e("15450"),
                    i.e("37133"),
                  ]).then(i.bind(i, 215269));
                  return (i) =>
                    (0, l.jsx)(e, {
                      guildEventId: y,
                      recurrenceId: G,
                      channel: M,
                      guild: n,
                      ...i,
                    });
                });
          },
          onJoinClick:
            w || z
              ? function (e) {
                  if ((e.stopPropagation(), z)) {
                    null == D || D(), (0, o.hk)(R);
                    return;
                  }
                  (null == M ? void 0 : M.isGuildStageVoice())
                    ? ((0, E.Cq)(M), null == D || D())
                    : (null == M ? void 0 : M.isGuildVoice()) &&
                      (m.Z.joinVoiceEvent(M.guild_id, M.id), null == D || D());
                }
              : void 0,
          onRsvpClick: J,
          onStartClick:
            b && H && !(null == B ? void 0 : B.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                        i.e("84722"),
                        i.e("66586"),
                      ]).then(i.bind(i, 296864));
                      return (n) =>
                        (0, l.jsx)(e, { ...n, event: k, onSuccess: D });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
              if (!V || !O) {
                let e = (0, I.H)({ guildId: R, guildEventId: y });
                (0, C.JG)(e),
                  Z.default.track(j.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                    guild_id: R,
                    guild_scheduled_event_id: y,
                  });
                return;
              }
              (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  i.e("7654"),
                  i.e("1187"),
                  i.e("90761"),
                ]).then(i.bind(i, 560114));
                return (i) =>
                  (0, l.jsx)(e, {
                    ...i,
                    guild: n,
                    channel: M,
                    guildScheduledEvent: k,
                    source: j.t4x.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            b && A === T.WX.EXTERNAL && P
              ? function (e) {
                  if ((e.stopPropagation(), !b)) return;
                  let n = () => {
                    m.Z.endEvent(y, R), (0, a.closeAllModals)();
                  };
                  (0, a.openModal)((e) =>
                    (0, l.jsx)(a.ConfirmModal, {
                      ...e,
                      header: L.Z.Messages.END_EVENT,
                      confirmText: L.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                      cancelText: L.Z.Messages.CANCEL,
                      onConfirm: n,
                      children: (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children:
                          L.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                      }),
                    }),
                  );
                }
              : void 0,
          onJoinGuildClick: X,
          onGoToGuildClick: W,
        };
      }
    },
    981888: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return a;
        },
      }),
        i(47120);
      var l = i(470079),
        t = i(881052);
      function a(e, n) {
        let [i, a] = l.useState(!1),
          [r, s] = l.useState(null);
        return [
          async () => {
            a(!0), s(null);
            try {
              let n = await e();
              return a(!1), s(null), n;
            } catch (i) {
              let e = new t.Hx(i);
              return null == n || n(e), s(e), a(!1), null;
            }
          },
          { loading: i, error: r },
        ];
      }
    },
  },
]);
//# sourceMappingURL=86ecaf6c3ce93084c1c1.js.map
