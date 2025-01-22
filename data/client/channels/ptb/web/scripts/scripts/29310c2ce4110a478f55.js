"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56236"],
  {
    951539: function (n, e, t) {
      t.d(e, {
        ZP: function () {
          return x;
        },
        so: function () {
          return m;
        },
        wg: function () {
          return v;
        },
      }),
        t(47120);
      var i = t(442837),
        l = t(159300),
        r = t(427679),
        a = t(592125),
        o = t(984933),
        c = t(430824),
        s = t(496675),
        u = t(700785),
        d = t(924301),
        g = t(765305),
        h = t(981631);
      function v(n) {
        var e;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [a.Z];
        let { entityType: i, channelId: l } =
          "entity_type" in (e = n)
            ? { entityType: e.entity_type, channelId: e.channel_id }
            : e;
        if (i === g.WX.EXTERNAL) return !0;
        let r = t.getChannel(l);
        return null != r && u.Uu(h.Plq.VIEW_CHANNEL, r);
      }
      function m(n) {
        let [e, t, i, u] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.ZP, a.Z, c.Z, r.Z];
        if ((0, d.Z2)(n)) return !1;
        let { guild_id: h, channel_id: m } = n,
          x =
            n.entity_type === g.WX.EXTERNAL
              ? e.getDefaultChannel(n.guild_id)
              : t.getChannel(m),
          Z = i.getGuild(h),
          f = u.getStageInstanceByChannel(m);
        return !!(0, l.b)(s.Z, Z, x, f) && null != x && v(n, [t]);
      }
      function x(n) {
        return (0, i.e7)(
          [o.ZP, a.Z, c.Z, r.Z],
          () => m(n, [o.ZP, a.Z, c.Z, r.Z]),
          [n],
        );
      }
    },
    146768: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(442837),
        l = t(431328),
        r = t(501655),
        a = t(427679),
        o = t(592125),
        c = t(430824);
      function s(n) {
        let {
            id: e,
            data: { guild: t, instance: s, speakers: u, participantCount: d },
            context: g,
          } = n,
          h = (0, i.e7)(
            [c.Z, o.Z],
            () => {
              var n;
              return c.Z.getGuild(
                null === (n = o.Z.getChannel(e)) || void 0 === n
                  ? void 0
                  : n.getGuildId(),
              );
            },
            [e],
          ),
          v = (0, i.e7)([a.Z], () => a.Z.getStageInstanceByChannel(e), [e]),
          m = (0, l.w8)(e, r.pV.SPEAKER),
          x = (0, l.Rk)(e),
          Z = null != v ? m : u,
          f = (null != v ? x : d) - Z.length;
        return {
          channelId: e,
          guild: null != h ? h : t,
          stage: null != v ? v : s,
          speakers: Z,
          audienceCount: f,
          context: g,
        };
      }
    },
    592126: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = t(442837),
        l = t(241155),
        r = t(430824);
      function a(n, e) {
        return (0, i.cj)(
          [r.Z, l.Z],
          () => {
            let t = r.Z.getGuild(n),
              i = null != t;
            return (
              null == t && null != e && (t = l.Z.getCachedGuildByEventId(e)),
              { isMember: i, guild: t }
            );
          },
          [n, e],
        );
      }
    },
    118998: function (n, e, t) {
      t.d(e, {
        H: function () {
          return i;
        },
      });
      let i = (n) => {
        let { guildId: e, guildEventId: t } = n;
        return "https://discord.com/events/".concat(e, "/").concat(t);
      };
    },
    710679: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return I;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(724912),
        a = t(41776),
        o = t(501655),
        c = t(427679),
        s = t(592125),
        u = t(496675),
        d = t(19780),
        g = t(594174),
        h = t(15274),
        v = t(924301),
        m = t(951539),
        x = t(146768),
        Z = t(592126),
        f = t(236373),
        C = t(230900),
        p = t(854698),
        N = t(405613),
        j = t(460838),
        E = t(462179),
        k = t(981631);
      function I(n) {
        var e;
        let {
            guildEvent: t,
            guildId: I,
            truncate: _,
            onActionTaken: P,
            className: T,
            isNew: y,
          } = n,
          {
            id: b,
            guild_id: G,
            channel_id: M,
            creator_id: L,
            name: S,
            description: A,
            entity_type: R,
            image: w,
            recurrence_rule: D,
          } = t,
          H = (0, p.DK)(t),
          U = (0, l.e7)(
            [v.ZP],
            () => v.ZP.isInterestedInEventRecurrence(b, H),
            [b, H],
          ),
          z = (0, l.e7)([a.Z], () => a.Z.isLurking(G), [G]),
          B = (0, l.e7)([c.Z], () => c.Z.getStageInstanceByChannel(M), [M]),
          J = (0, l.e7)([s.Z], () => s.Z.getChannel(M), [M]),
          V = (0, l.e7)([g.default], () => g.default.getUser(L), [L]),
          { speakers: X } = (0, x.Z)({
            id: M,
            data: {
              guild: null,
              instance: B,
              speakers: [],
              participantCount: 0,
            },
            context: { guildId: G, instance: B },
          }),
          W = (0, l.e7)([d.Z], () => d.Z.getChannelId()),
          O = (0, v.xt)(t),
          q = W === M && null != W && O,
          K = X.filter((n) => n.type === o.Ui.VOICE),
          F = K.length,
          Q = (0, l.e7)([u.Z], () => u.Z.can(k.Plq.CONNECT, J), [J]),
          Y = (0, m.ZP)(t),
          { isMember: $, guild: nn } = (0, Z.Z)(G, b),
          ne = (0, E.Z)({
            guild: nn,
            channel: J,
            guildScheduledEvent: t,
            isActive: O,
            recurrenceId: H,
            onActionTaken: P,
          }),
          nt = (0, r.Z)(I),
          ni = z
            ? void 0
            : (n) =>
                (0, h.bO)({ eventId: b, parentGuildId: I, recurrenceId: n });
        return (0, i.jsx)(j.Z, {
          guild: nn,
          channel: J,
          creator: V,
          name: S,
          entityType: R,
          description: null != A ? A : void 0,
          location: null !== (e = (0, C.cS)(t)) && void 0 !== e ? e : void 0,
          imageSource: null != w ? (0, N.Z)(t) : void 0,
          imageLocation: j.Q.THUMBNAIL,
          isActive: O,
          isUserLurking: z,
          isJoined: q,
          isMember: $,
          isHub: nt,
          speakers: K,
          canConnect: Q,
          speakerCount: F,
          rsvped: U,
          canInvite: Y,
          ...ne,
          className: T,
          onClick: ni,
          truncate: _,
          isNew: y,
          guildEvent: t,
          recurrenceRule: (0, f.KV)(D),
          recurrenceId: H,
        });
      }
    },
    460838: function (n, e, t) {
      t.d(e, {
        Q: function () {
          return l;
        },
        Z: function () {
          return G;
        },
      });
      var i,
        l,
        r = t(200651),
        a = t(192379),
        o = t(120356),
        c = t.n(o),
        s = t(442837),
        u = t(481060),
        d = t(447003),
        g = t(471445),
        h = t(565138),
        v = t(357156),
        m = t(496675),
        x = t(725436),
        Z = t(274311),
        f = t(854698),
        C = t(285784),
        p = t(95291),
        N = t(742593),
        j = t(810561),
        E = t(187443),
        k = t(131154),
        I = t(765305),
        _ = t(981631),
        P = t(388032),
        T = t(596622);
      function y(n) {
        let { channel: e, onClick: t } = n,
          { canManageAllEvents: i } = (0, v.XJ)(e),
          l = (0, s.e7)(
            [m.Z],
            () => !e.isGuildVocal() || m.Z.can(_.Plq.CONNECT, e),
            [e],
          ),
          o = a.useMemo(() => (0, d.Z)(e), [e]),
          h = (0, g.KS)(e);
        return (0, r.jsx)(u.Tooltip, {
          text: P.intl.string(P.t.nHjY9P),
          shouldShow: !l && null != t,
          children: (n) =>
            (0, r.jsxs)(u.Clickable, {
              ...n,
              className: c()(T.inline, T.channelContainer, {
                [T.channelContainerEnabled]: l && null != t,
                [T.channelContainerDisabled]: !l && null != t,
              }),
              onClick: t,
              children: [
                (0, r.jsx)(u.Tooltip, {
                  text: P.intl.string(P.t["48WXaW"]),
                  shouldShow: i && o && l && null != t,
                  children: (n) =>
                    null != h
                      ? (0, r.jsx)(h, {
                          ...n,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: T.icon,
                        })
                      : null,
                }),
                (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: T.channelLocation,
                  children: e.name,
                }),
              ],
            }),
        });
      }
      function b(n) {
        let {
          guild: e,
          channel: t,
          onJoinClick: i,
          handleLocationClick: l,
          location: a,
          isExternal: o,
          isHub: s,
        } = n;
        if (s)
          return null == e
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                className: T.inline,
                children: [
                  (0, r.jsx)(h.Z, {
                    className: T.guildIcon,
                    size: h.Z.Sizes.MINI,
                    active: !0,
                    guild: e,
                  }),
                  (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == e ? void 0 : e.name,
                  }),
                ],
              });
        return null != t
          ? (0, r.jsx)(y, { channel: t, onClick: i })
          : (0, r.jsxs)(u.Clickable, {
              className: T.inline,
              onClick: l,
              children: [
                (0, r.jsx)(u.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: c()(T.channelContainer, T.icon),
                }),
                (0, r.jsx)(u.Text, {
                  className: o ? T.externalLocation : T.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, x.m)(a, !0),
                }),
              ],
            });
      }
      function G(n) {
        let {
            className: e,
            guild: t,
            channel: i,
            creator: l,
            name: a,
            entityType: o,
            description: s,
            imageLocation: d = 0,
            imageSource: g,
            isActive: h,
            isUserLurking: v,
            isJoined: m = !1,
            isMember: x = !1,
            isHub: _ = !1,
            speakers: P,
            speakerCount: y,
            rsvped: G,
            canInvite: M,
            location: L,
            truncate: S,
            onContextMenu: A,
            onJoinClick: R,
            onJoinGuildClick: w,
            onGoToGuildClick: D,
            onRsvpClick: H,
            onStartClick: U,
            onInviteClick: z,
            onEndClick: B,
            onClick: J,
            isNew: V,
            guildEvent: X,
            eventPreview: W,
            recurrenceRule: O,
            recurrenceId: q,
          } = n,
          K = (0, Z.Q)(i, o),
          F = o === I.WX.EXTERNAL,
          Q = F ? (n) => n.stopPropagation() : void 0,
          Y = [];
        if (null != O && null != event) {
          let n = (0, f.Ho)(O);
          Y = (0, f.PJ)(4, n, new Date(X.scheduled_start_time));
        }
        let $ = Y.length > 0;
        return (0, r.jsxs)(u.ClickableContainer, {
          "aria-label": a,
          onClick: () => (null == J ? void 0 : J(q)),
          onContextMenu: A,
          className: c()(T.card, { [T.joined]: m, [T.lurking]: v }, e),
          children: [
            (0, r.jsxs)("div", {
              className: c()(T.padding, { [T.isRecurring]: $ }),
              children: [
                0 === d && (0, r.jsx)(p.Z, { source: g }),
                (0, r.jsx)(N.ZP, {
                  creator: l,
                  name: a,
                  description: s,
                  imageSource: 1 === d ? g : null,
                  truncate: S,
                  guildId: null == t ? void 0 : t.id,
                  isHub: _,
                  isNew: V,
                  guildEvent: X,
                  eventPreview: W,
                  recurrenceId: q,
                }),
                h &&
                  null != t &&
                  null != P &&
                  y > 0 &&
                  (0, r.jsx)(k.Z, {
                    guild: t,
                    speakers: P,
                    speakerCount: y,
                    className: T.spacing,
                  }),
                (0, r.jsx)("hr", { className: T.divider }),
                (0, r.jsxs)("div", {
                  className: c()(T.inline, T.footer),
                  children: [
                    (0, r.jsx)(b, {
                      guild: t,
                      channel: i,
                      onJoinClick: R,
                      handleLocationClick: Q,
                      location: L,
                      isExternal: F,
                      isHub: _,
                    }),
                    _
                      ? (0, r.jsx)(E.Z, {
                          isActive: h,
                          isUserLurking: v,
                          isMember: x,
                          rsvped: G,
                          onRsvpClick: H,
                          onJoinGuildClick: w,
                          onGoToGuildClick: D,
                          guildName: null == t ? void 0 : t.name,
                          canInvite: M,
                          isChannelPublic: K,
                          onInviteClick: z,
                        })
                      : (0, r.jsx)(C.ZP, {
                          entityType: o,
                          isJoined: m,
                          isActive: h,
                          isUserLurking: v,
                          rsvped: G,
                          canInvite: M,
                          isChannelPublic: K,
                          onContextMenu: A,
                          onJoinClick: R,
                          onRsvpClick: H,
                          onStartClick: U,
                          onInviteClick: z,
                          onEndClick: B,
                        }),
                  ],
                }),
                $ && (0, r.jsx)("hr", { className: T.divider }),
              ],
            }),
            $ &&
              (0, r.jsx)(j.Z, {
                guildId: null == t ? void 0 : t.id,
                recurrenceRule: O,
                guildEventId: X.id,
                onRecurrenceClick: J,
              }),
          ],
        });
      }
      ((i = l || (l = {}))[(i.BANNER = 0)] = "BANNER"),
        (i[(i.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    17671: function (n, e, t) {
      t.r(e),
        t.d(e, {
          __import__useLazyAPIPromise: function () {
            return L;
          },
          default: function () {
            return S;
          },
        });
      var i = t(200651),
        l = t(192379),
        r = t(392711),
        a = t.n(r),
        o = t(442837),
        c = t(481060),
        s = t(45114),
        u = t(493773),
        d = t(313201),
        g = t(597),
        h = t(147754),
        v = t(984933),
        m = t(720202),
        x = t(430824),
        Z = t(306680),
        f = t(626135),
        C = t(823379),
        p = t(981888),
        N = t(709054),
        j = t(897285),
        E = t(518756),
        k = t(554747),
        I = t(710679),
        _ = t(74562),
        P = t(576749),
        T = t(765305),
        y = t(981631),
        b = t(490897),
        G = t(388032),
        M = t(984226);
      let L = p.Z;
      function S(n) {
        let { transitionState: e, onClose: r, guildId: p } = n,
          L = (0, d.Dt)(),
          S = (0, o.e7)([x.Z], () => x.Z.getGuild(p)),
          A = (0, E.Z)(null == S ? void 0 : S.id),
          R = (0, k.ZP)(p),
          w = l.useRef(Z.ZP.ackMessageId(p, b.W.GUILD_EVENT)),
          D = (0, P.Z)();
        return (
          l.useEffect(() => {
            R.forEach((n) => j.Z.getGuildEventUserCounts(p, n.id, [])),
              j.Z.getGuildEventsForCurrentUser(p);
          }, [R, p]),
          l.useEffect(() => {
            let n = x.Z.getGuild(p);
            if (!(null == n ? void 0 : n.hasFeature(y.oNc.HUB))) return;
            let { showHubEventsList: e } = h.Z.getCurrentConfig({
              guildId: p,
              location: "d3755f_1",
            });
            if (!e) return;
            let t = v.ZP.getDefaultChannel(p);
            null != t && g.c(t.id);
          }, [p]),
          (0, u.Z)(() => {
            f.default.track(y.rMx.OPEN_MODAL, {
              type: T.zw,
              guild_id: p,
              guild_events_count: R.length,
            });
          }),
          l.useEffect(() => {
            a()(R)
              .map((n) => n.creator_id)
              .filter(C.lm)
              .uniq()
              .forEach((n) => {
                m.Z.requestMember(p, n);
              });
          }, [p, R]),
          l.useEffect(() => {
            null != p && (0, s.Ju)(p, b.W.GUILD_EVENT);
          }, [p]),
          (0, i.jsxs)(c.ModalRoot, {
            size: c.ModalSize.MEDIUM,
            transitionState: e,
            "aria-labelledby": L,
            children: [
              (0, i.jsxs)(c.ModalHeader, {
                className: M.header,
                children: [
                  (0, i.jsx)(c.CalendarIcon, {
                    size: "md",
                    color: "currentColor",
                    className: M.icon,
                  }),
                  (0, i.jsx)(c.Heading, {
                    id: L,
                    variant: "heading-md/semibold",
                    children:
                      R.length > 0
                        ? G.intl.formatToPlainString(G.t.IBdqSk, {
                            number: R.length,
                          })
                        : G.intl.string(G.t.tlopTE),
                  }),
                  A &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: M.divider,
                          children: "|",
                        }),
                        (0, i.jsx)(c.Button, {
                          size: c.Button.Sizes.MIN,
                          onClick: () => {
                            (0, c.openModalLazy)(async () => {
                              let { default: n } = await Promise.all([
                                t.e("58023"),
                                t.e("54444"),
                              ]).then(t.bind(t, 779250));
                              return (e) => (0, i.jsx)(n, { ...e, guildId: p });
                            }, D);
                          },
                          innerClassName: M.button,
                          children: G.intl.string(G.t["60lJ0N"]),
                        }),
                      ],
                    }),
                  (0, i.jsx)(c.Clickable, {
                    onClick: r,
                    className: M.iconButton,
                    "aria-label": G.intl.string(G.t.cpT0Cg),
                    children: (0, i.jsx)(c.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: M.icon,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(c.ModalContent, {
                className: M.content,
                children:
                  R.length > 0
                    ? R.map((n) =>
                        (0, i.jsx)(
                          I.Z,
                          {
                            guildEvent: n,
                            guildId: p,
                            onActionTaken: r,
                            isNew:
                              null != w.current &&
                              N.default.compare(n.id, w.current) > 0,
                          },
                          n.id,
                        ),
                      )
                    : (0, i.jsx)(_.Z, { guildId: p, onClose: r }),
              }),
            ],
          })
        );
      }
    },
    74562: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return v;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(434404),
        o = t(147754),
        c = t(939863),
        s = t(430824),
        u = t(496675),
        d = t(981631),
        g = t(388032),
        h = t(198394);
      function v(n) {
        let { guildId: e, onClose: t } = n,
          { showHubEventsList: v } = o.Z.useExperiment(
            { guildId: e, location: "6597ca_1" },
            { autoTrackExposure: !1 },
          ),
          m = (0, l.e7)(
            [s.Z, u.Z],
            () => {
              let n = s.Z.getGuild(e);
              return u.Z.can(d.Plq.MANAGE_ROLES, n);
            },
            [e],
          ),
          x = (0, l.e7)(
            [s.Z],
            () => {
              let n = s.Z.getGuild(e);
              return v && (null == n ? void 0 : n.hasFeature(d.oNc.HUB));
            },
            [e, v],
          );
        return (0, i.jsxs)("div", {
          className: h.container,
          children: [
            (0, i.jsx)(c.Z, {
              children: (0, i.jsx)("div", {
                className: h.circle,
                children: (0, i.jsx)(r.CalendarIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 40,
                  width: 40,
                  className: h.icon,
                }),
              }),
            }),
            (0, i.jsx)(r.Heading, {
              color: "header-primary",
              variant: "heading-xl/semibold",
              className: h.title,
              children: x
                ? g.intl.string(g.t.RhXVpa)
                : g.intl.string(g.t["WgZ+3N"]),
            }),
            (0, i.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              className: h.subtitle,
              children: x
                ? g.intl.string(g.t["6hktHB"])
                : g.intl.string(g.t["v/S/PD"]),
            }),
            m &&
              (0, i.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: h.roleTip,
                children: g.intl.format(g.t["K+DH2t"], {
                  onClick: () => {
                    a.Z.open(e, d.pNK.ROLES), t();
                  },
                }),
              }),
          ],
        });
      }
    },
    131154: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(481060),
        o = t(388032),
        c = t(184617);
      function s(n) {
        let { guild: e, speakers: t, speakerCount: l, className: s } = n,
          u = t.slice(0, 5),
          d = u.map((n) => {
            var t, l;
            return (0, i.jsxs)(
              "div",
              {
                className: c.speakerContainer,
                children: [
                  (0, i.jsx)(a.Avatar, {
                    src:
                      null == n
                        ? void 0
                        : null === (t = n.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(e.id, 20),
                    size: a.AvatarSizes.SIZE_20,
                    className: c.avatar,
                    "aria-label": "".concat(
                      null == n ? void 0 : n.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className: c.textInGridContainer,
                    children: (0, i.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: c.textInGrid,
                      children: null == n ? void 0 : n.userNick,
                    }),
                  }),
                ],
              },
              null == n
                ? void 0
                : null === (l = n.user) || void 0 === l
                  ? void 0
                  : l.id,
            );
          }),
          g = l - u.length;
        return (0, i.jsxs)("div", {
          className: r()(c.grid, s),
          children: [
            d,
            g > 0 &&
              (0, i.jsxs)("div", {
                className: c.speakerContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: c.iconMicrophone,
                    children: (0, i.jsx)(a.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, i.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: c.textInGrid,
                    children: o.intl.format(o.t["185ggI"], { count: g }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    462179: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return T;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        a = t(239091),
        o = t(749210),
        c = t(305325),
        s = t(281956),
        u = t(357156),
        d = t(703656),
        g = t(922482),
        h = t(984933),
        v = t(430824),
        m = t(496675),
        x = t(626135),
        Z = t(572004),
        f = t(482241),
        C = t(951539),
        p = t(894017),
        N = t(274311),
        j = t(854698),
        E = t(118998),
        k = t(139712),
        I = t(765305),
        _ = t(981631),
        P = t(388032);
      function T(n) {
        let {
            guild: e,
            channel: T,
            guildScheduledEvent: y,
            isActive: b,
            recurrenceId: G,
            onActionTaken: M,
          } = n,
          { scheduled_start_time: L, id: S, entity_type: A, guild_id: R } = y,
          { canManageGuildEvent: w } = (0, u.XJ)(null != T ? T : e),
          D = w(y),
          H = (0, C.ZP)(y),
          U = (0, N.T)(null == T ? void 0 : T.id, y.id),
          { withinStartWindow: z } = (0, j.ub)(L),
          B = (0, l.e7)(
            [m.Z],
            () =>
              (null == T ? !void 0 : !T.isGuildVocal()) ||
              m.Z.can(_.Plq.CONNECT, T),
            [T],
          ),
          J = (0, s.J)(R),
          V = (0, p.Z)(G, S);
        function X(n) {
          n.stopPropagation(), (0, k.Z)(S, G, R);
        }
        async function W(n) {
          n.stopPropagation(),
            await o.Z.joinGuild(R),
            v.Z.addConditionalChangeListener(
              () => null == v.Z.getGuild(R) || (!b && X(n), O(n), !1),
            );
        }
        function O(n) {
          n.stopPropagation();
          let e = h.ZP.getDefaultChannel(R);
          (0, r.closeAllModals)(), (0, d.XU)(R, null == e ? void 0 : e.id);
        }
        return {
          onDeleteClick: D
            ? function (n) {
                if ((n.stopPropagation(), !!D && !b))
                  (0, r.openModal)((n) =>
                    (0, i.jsx)(r.ConfirmModal, {
                      ...n,
                      header: P.intl.string(P.t.R5bpio),
                      confirmText: P.intl.string(P.t.oyYWHB),
                      cancelText: P.intl.string(P.t["ETE/oK"]),
                      onConfirm: () => f.Z.deleteGuildEvent(S, R),
                      children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: P.intl.string(P.t.v2GWNT),
                      }),
                    }),
                  );
              }
            : void 0,
          onContextMenu: function (n) {
            n.stopPropagation(),
              null != e &&
                (0, a.jW)(n, async () => {
                  let { default: n } = await Promise.all([
                    t.e("15450"),
                    t.e("37133"),
                  ]).then(t.bind(t, 215269));
                  return (t) =>
                    (0, i.jsx)(n, {
                      guildEventId: S,
                      recurrenceId: G,
                      channel: T,
                      guild: e,
                      ...t,
                    });
                });
          },
          onJoinClick:
            B || J
              ? function (n) {
                  if ((n.stopPropagation(), J)) {
                    null == M || M(), (0, c.hk)(R);
                    return;
                  }
                  (null == T ? void 0 : T.isGuildStageVoice())
                    ? ((0, g.Cq)(T), null == M || M())
                    : (null == T ? void 0 : T.isGuildVoice()) &&
                      (f.Z.joinVoiceEvent(T.guild_id, T.id), null == M || M());
                }
              : void 0,
          onRsvpClick: X,
          onStartClick:
            D && z && !(null == V ? void 0 : V.is_canceled)
              ? function (n) {
                  n.stopPropagation(),
                    (0, r.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([
                        t.e("84722"),
                        t.e("83033"),
                      ]).then(t.bind(t, 296864));
                      return (e) =>
                        (0, i.jsx)(n, { ...e, event: y, onSuccess: M });
                    });
                }
              : void 0,
          onInviteClick: function (n) {
            if ((n.stopPropagation(), null != e)) {
              if (!H || !U) {
                let n = (0, E.H)({ guildId: R, guildEventId: S });
                (0, Z.JG)(n),
                  x.default.track(_.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                    guild_id: R,
                    guild_scheduled_event_id: S,
                  });
                return;
              }
              (0, r.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                  t.e("7654"),
                  t.e("16941"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, i.jsx)(n, {
                    ...t,
                    guild: e,
                    channel: T,
                    guildScheduledEvent: y,
                    source: _.t4x.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            D && A === I.WX.EXTERNAL && b
              ? function (n) {
                  if ((n.stopPropagation(), !D)) return;
                  let e = () => {
                    f.Z.endEvent(S, R), (0, r.closeAllModals)();
                  };
                  (0, r.openModal)((n) =>
                    (0, i.jsx)(r.ConfirmModal, {
                      ...n,
                      header: P.intl.string(P.t.qaYzPD),
                      confirmText: P.intl.string(P.t.mjB9pa),
                      cancelText: P.intl.string(P.t["ETE/oK"]),
                      onConfirm: e,
                      children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: P.intl.string(P.t.bnDQ7O),
                      }),
                    }),
                  );
                }
              : void 0,
          onJoinGuildClick: W,
          onGoToGuildClick: O,
        };
      }
    },
    981888: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(881052);
      function r(n, e) {
        let [t, r] = i.useState(!1),
          [a, o] = i.useState(null);
        return [
          async () => {
            r(!0), o(null);
            try {
              let e = await n();
              return r(!1), o(null), e;
            } catch (t) {
              let n = new l.Hx(t);
              return null == e || e(n), o(n), r(!1), null;
            }
          },
          { loading: t, error: a },
        ];
      }
    },
  },
]);
//# sourceMappingURL=29310c2ce4110a478f55.js.map
