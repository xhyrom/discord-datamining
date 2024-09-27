"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84722"],
  {
    430927: function (e, n, i) {
      i.d(n, {
        T: function () {
          return h;
        },
        o: function () {
          return d;
        },
      });
      var l = i(512722),
        a = i.n(l),
        t = i(287734),
        s = i(471253),
        r = i(922482),
        c = i(592125),
        o = i(19780),
        u = i(765305);
      async function d(e, n) {
        let { entity_type: i } = e;
        switch (i) {
          case u.WX.STAGE_INSTANCE: {
            let n = o.Z.getChannelId(),
              i = c.Z.getChannel(e.channel_id);
            a()(null != i, "could not find channel"),
              n !== i.id && (await r.TM(i, !0), await r.R5(i, null, !1)),
              await (0, s.RK)(i, !1, !0);
            break;
          }
          case u.WX.VOICE: {
            let n = o.Z.getChannelId(),
              i = c.Z.getChannel(e.channel_id);
            a()(null != i, "could not find channel"),
              n !== i.id && t.default.selectVoiceChannel(i.id);
          }
        }
      }
      function h(e, n) {
        let { entity_type: i } = e;
        switch (i) {
          case u.WX.STAGE_INSTANCE:
          case u.WX.VOICE:
          case u.WX.EXTERNAL:
            null == n || n();
        }
        return Promise.resolve();
      }
    },
    610665: function (e, n, i) {
      i.d(n, {
        GV: function () {
          return C;
        },
        iQ: function () {
          return m;
        },
      }),
        i(653041),
        i(47120),
        i(411104);
      var l = i(512722),
        a = i.n(l),
        t = i(333848),
        s = i(706058),
        r = i(131704),
        c = i(592125),
        o = i(430824),
        u = i(482241),
        d = i(765305),
        h = i(981631);
      async function v(e, n) {
        let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          l = [];
        l.push(...i);
        let a = await t.Z.createChannel({
          guildId: e.id,
          type: h.d4z.GUILD_STAGE_VOICE,
          name: n.substring(0, 100),
          permissionOverwrites: l,
        });
        if (null == a || 201 !== a.status)
          throw Error("Can't create channel for event");
        return (0, r.q_)(a.body);
      }
      async function C(e, n) {
        let { entity_type: i } = e;
        if (i === d.WX.STAGE_INSTANCE) {
          let i = await (function (e, n) {
            let { guild_id: i, channel_id: l } = e,
              a = o.Z.getGuild(i);
            if (null == a) return Promise.resolve(null);
            let t = c.Z.getChannel(l);
            return null == t ? v(a, e.name, n) : Promise.resolve(t);
          })(e, n);
          a()(null != i, "could not find or create channel");
        }
      }
      async function m(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          { channel_id: i, entity_type: l, name: t, id: r, guild_id: c } = e;
        switch (l) {
          case d.WX.STAGE_INSTANCE:
            a()(null != i, "channel_id is required"),
              await (0, s.me)(i, t, d.j8.GUILD_ONLY, n, r);
            break;
          case d.WX.VOICE:
            a()(null != i, "channel_id is required"),
              await u.Z.startEvent(r, c);
            break;
          case d.WX.EXTERNAL:
            await u.Z.startEvent(r, c);
        }
      }
    },
    305298: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      }),
        i(47120);
      var l = i(470079),
        a = i(881052),
        t = i(430927),
        s = i(610665);
      let r = { onSuccess: () => {}, permissionOverwrites: [] };
      function c() {
        let [e, n] = l.useState(!1),
          [i, c] = l.useState(null);
        return [
          async function e(e, i) {
            let {
              onSuccess: l = r.onSuccess,
              permissionOverwrites: o = r.permissionOverwrites,
            } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : r;
            n(!0);
            try {
              await s.GV(e, o),
                await s.iQ(e, i),
                await (0, t.o)(e, l),
                await (0, t.T)(e, l),
                n(!1);
            } catch (e) {
              c(new a.Hx(e)), n(!1);
            }
            n(!1);
          },
          { loading: e, error: i },
        ];
      }
    },
    460838: function (e, n, i) {
      i.d(n, {
        Q: function () {
          return a;
        },
        Z: function () {
          return y;
        },
      });
      var l,
        a,
        t = i(735250),
        s = i(470079),
        r = i(120356),
        c = i.n(r),
        o = i(442837),
        u = i(481060),
        d = i(447003),
        h = i(471445),
        v = i(565138),
        C = i(357156),
        m = i(496675),
        x = i(725436),
        N = i(274311),
        E = i(854698),
        g = i(285784),
        _ = i(95291),
        T = i(742593),
        I = i(810561),
        j = i(187443),
        p = i(131154),
        A = i(765305),
        k = i(981631),
        S = i(689938),
        f = i(947017);
      function Z(e) {
        let { channel: n, onClick: i } = e,
          { canManageAllEvents: l } = (0, C.XJ)(n),
          a = (0, o.e7)(
            [m.Z],
            () => !n.isGuildVocal() || m.Z.can(k.Plq.CONNECT, n),
            [n],
          ),
          r = s.useMemo(() => (0, d.Z)(n), [n]),
          v = (0, h.KS)(n);
        return (0, t.jsx)(u.Tooltip, {
          text: S.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !a && null != i,
          children: (e) =>
            (0, t.jsxs)(u.Clickable, {
              ...e,
              className: c()(f.inline, f.channelContainer, {
                [f.channelContainerEnabled]: a && null != i,
                [f.channelContainerDisabled]: !a && null != i,
              }),
              onClick: i,
              children: [
                (0, t.jsx)(u.Tooltip, {
                  text: S.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && r && a && null != i,
                  children: (e) =>
                    null != v
                      ? (0, t.jsx)(v, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: f.icon,
                        })
                      : null,
                }),
                (0, t.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: f.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function L(e) {
        let {
          guild: n,
          channel: i,
          onJoinClick: l,
          handleLocationClick: a,
          location: s,
          isExternal: r,
          isHub: o,
        } = e;
        if (o)
          return null == n
            ? (0, t.jsx)("div", {})
            : (0, t.jsxs)("div", {
                className: f.inline,
                children: [
                  (0, t.jsx)(v.Z, {
                    className: f.guildIcon,
                    size: v.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, t.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != i
          ? (0, t.jsx)(Z, { channel: i, onClick: l })
          : (0, t.jsxs)(u.Clickable, {
              className: f.inline,
              onClick: a,
              children: [
                (0, t.jsx)(u.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: c()(f.channelContainer, f.icon),
                }),
                (0, t.jsx)(u.Text, {
                  className: r ? f.externalLocation : f.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, x.m)(s, !0),
                }),
              ],
            });
      }
      function y(e) {
        let {
            className: n,
            guild: i,
            channel: l,
            creator: a,
            name: s,
            entityType: r,
            description: o,
            imageLocation: d = 0,
            imageSource: h,
            isActive: v,
            isUserLurking: C,
            isJoined: m = !1,
            isMember: x = !1,
            isHub: k = !1,
            speakers: S,
            speakerCount: Z,
            rsvped: y,
            canInvite: w,
            location: R,
            truncate: b,
            onContextMenu: M,
            onJoinClick: G,
            onJoinGuildClick: P,
            onGoToGuildClick: O,
            onRsvpClick: V,
            onStartClick: U,
            onInviteClick: X,
            onEndClick: B,
            onClick: D,
            isNew: W,
            guildEvent: z,
            eventPreview: H,
            recurrenceRule: Y,
            recurrenceId: J,
          } = e,
          K = (0, N.Q)(l, r),
          q = r === A.WX.EXTERNAL,
          Q = q ? (e) => e.stopPropagation() : void 0,
          F = [];
        if (null != Y && null != event) {
          let e = (0, E.Ho)(Y);
          F = (0, E.PJ)(4, e, new Date(z.scheduled_start_time));
        }
        let $ = F.length > 0;
        return (0, t.jsxs)(u.ClickableContainer, {
          "aria-label": s,
          onClick: () => (null == D ? void 0 : D(J)),
          onContextMenu: M,
          className: c()(f.card, { [f.joined]: m, [f.lurking]: C }, n),
          children: [
            (0, t.jsxs)("div", {
              className: c()(f.padding, { [f.isRecurring]: $ }),
              children: [
                0 === d && (0, t.jsx)(_.Z, { source: h }),
                (0, t.jsx)(T.ZP, {
                  creator: a,
                  name: s,
                  description: o,
                  imageSource: 1 === d ? h : null,
                  truncate: b,
                  guildId: null == i ? void 0 : i.id,
                  isHub: k,
                  isNew: W,
                  guildEvent: z,
                  eventPreview: H,
                  recurrenceId: J,
                }),
                v &&
                  null != i &&
                  null != S &&
                  Z > 0 &&
                  (0, t.jsx)(p.Z, {
                    guild: i,
                    speakers: S,
                    speakerCount: Z,
                    className: f.spacing,
                  }),
                (0, t.jsx)("hr", { className: f.divider }),
                (0, t.jsxs)("div", {
                  className: c()(f.inline, f.footer),
                  children: [
                    (0, t.jsx)(L, {
                      guild: i,
                      channel: l,
                      onJoinClick: G,
                      handleLocationClick: Q,
                      location: R,
                      isExternal: q,
                      isHub: k,
                    }),
                    k
                      ? (0, t.jsx)(j.Z, {
                          isActive: v,
                          isUserLurking: C,
                          isMember: x,
                          rsvped: y,
                          onRsvpClick: V,
                          onJoinGuildClick: P,
                          onGoToGuildClick: O,
                          guildName: null == i ? void 0 : i.name,
                          canInvite: w,
                          isChannelPublic: K,
                          onInviteClick: X,
                        })
                      : (0, t.jsx)(g.ZP, {
                          entityType: r,
                          isJoined: m,
                          isActive: v,
                          isUserLurking: C,
                          rsvped: y,
                          canInvite: w,
                          isChannelPublic: K,
                          onContextMenu: M,
                          onJoinClick: G,
                          onRsvpClick: V,
                          onStartClick: U,
                          onInviteClick: X,
                          onEndClick: B,
                        }),
                  ],
                }),
                $ && (0, t.jsx)("hr", { className: f.divider }),
              ],
            }),
            $ &&
              (0, t.jsx)(I.Z, {
                guildId: null == i ? void 0 : i.id,
                recurrenceRule: Y,
                guildEventId: z.id,
                onRecurrenceClick: D,
              }),
          ],
        });
      }
      ((l = a || (a = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = i(735250);
      i(470079);
      var a = i(120356),
        t = i.n(a),
        s = i(481060),
        r = i(689938),
        c = i(571032);
      function o(e) {
        let { guild: n, speakers: i, speakerCount: a, className: o } = e,
          u = i.slice(0, 5),
          d = u.map((e) => {
            var i, a;
            return (0, l.jsxs)(
              "div",
              {
                className: c.speakerContainer,
                children: [
                  (0, l.jsx)(s.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (i = e.user) || void 0 === i
                          ? void 0
                          : i.getAvatarURL(n.id, 20),
                    size: s.AvatarSizes.SIZE_20,
                    className: c.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: c.textInGridContainer,
                    children: (0, l.jsx)(s.Text, {
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
          h = a - u.length;
        return (0, l.jsxs)("div", {
          className: t()(c.grid, o),
          children: [
            d,
            h > 0 &&
              (0, l.jsxs)("div", {
                className: c.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: c.iconMicrophone,
                    children: (0, l.jsx)(s.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, l.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: c.textInGrid,
                    children:
                      r.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: h },
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    296864: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return T;
          },
        }),
        i(47120);
      var l = i(735250),
        a = i(470079),
        t = i(120356),
        s = i.n(t),
        r = i(442837),
        c = i(481060),
        o = i(313201),
        u = i(41776),
        d = i(357156),
        h = i(513449),
        v = i(592125),
        C = i(430824),
        m = i(305298),
        x = i(405613),
        N = i(460838),
        E = i(765305),
        g = i(689938),
        _ = i(697355);
      function T(e) {
        var n;
        let { transitionState: i, event: t, onSuccess: T, onClose: I } = e,
          j = (0, o.Dt)(),
          { guild_id: p, privacy_level: A } = t,
          k = (0, r.e7)([v.Z], () => v.Z.getChannel(t.channel_id), [t]),
          S = (0, r.e7)([C.Z], () => C.Z.getGuild(p), [p]),
          { canManageGuildEvent: f } = (0, d.XJ)(null != k ? k : S),
          Z = f(t),
          L = (0, r.e7)([u.Z], () => u.Z.isLurking(p), [p]),
          y = t.entity_type === E.WX.STAGE_INSTANCE,
          [w, R] = a.useState(y),
          [b, { loading: M, error: G }] = (0, m.Z)();
        if (!Z) return null;
        let P =
            A === E.j8.PUBLIC
              ? g.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL
              : g.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
          O = () => {
            null == T || T(), I(), (0, h.Ku)(!1);
          },
          V = async () => {
            await b(t, w, { onSuccess: O });
          };
        return (0, l.jsx)(c.ModalRoot, {
          transitionState: i,
          "aria-labelledby": j,
          children: (0, l.jsxs)(c.ModalContent, {
            className: _.content,
            children: [
              (0, l.jsx)("div", {
                className: _.previewCard,
                children: (0, l.jsx)(N.Z, {
                  guild: S,
                  channel: k,
                  name: t.name,
                  description:
                    null !== (n = t.description) && void 0 !== n ? n : void 0,
                  imageSource: (0, x.Z)(t),
                  isActive: !1,
                  isUserLurking: L,
                  speakers: [],
                  speakerCount: 0,
                  rsvped: !0,
                  guildEvent: t,
                }),
              }),
              (0, l.jsx)(c.Text, {
                color: "header-secondary",
                className: _.privacyLevel,
                variant: "text-sm/normal",
                children: g.Z.Messages.START_EVENT_CONFIRMATION.format({
                  privacyLevel: P,
                  privacyLevelHook: (e, n) =>
                    A !== E.j8.PUBLIC
                      ? null
                      : (0, l.jsxs)(
                          "div",
                          {
                            className: _.privacyLevel,
                            children: [
                              (0, l.jsx)(c.GlobeEarthIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: _.publicIcon,
                              }),
                              (0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: e,
                              }),
                            ],
                          },
                          n,
                        ),
                }),
              }),
              (0, l.jsx)(c.Heading, {
                variant: "heading-xl/semibold",
                className: _.header,
                children: t.name,
              }),
              y &&
                (0, l.jsx)(c.Checkbox, {
                  className: _.verticalSpacing,
                  type: c.Checkbox.Types.INVERTED,
                  value: w,
                  onChange: (e) => {
                    let { currentTarget: n } = e;
                    return R(n.checked);
                  },
                  children: (0, l.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: g.Z.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP,
                  }),
                }),
              (0, l.jsxs)("div", {
                className: s()(_.inline, _.buttons, _.verticalSpacing),
                children: [
                  (0, l.jsx)(c.Button, {
                    color: c.Button.Colors.PRIMARY,
                    onClick: () => {
                      I();
                    },
                    className: s()(_.button, _.spacing),
                    children: g.Z.Messages.STAGE_BLOCKED_USERS_CANCEL,
                  }),
                  (0, l.jsx)(c.Button, {
                    color: c.Button.Colors.GREEN,
                    onClick: V,
                    submitting: M,
                    className: _.button,
                    children: g.Z.Messages.START_EVENT,
                  }),
                ],
              }),
              null != G && null != G.getAnyErrorMessage()
                ? (0, l.jsx)(c.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    className: _.errorMessage,
                    children: G.getAnyErrorMessage(),
                  })
                : null,
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=b028a2b3fd3409c13eef.js.map
