"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84722"],
  {
    430927: function (n, e, i) {
      i.d(e, {
        T: function () {
          return h;
        },
        o: function () {
          return d;
        },
      });
      var l = i(512722),
        t = i.n(l),
        a = i(287734),
        r = i(471253),
        s = i(922482),
        c = i(592125),
        o = i(19780),
        u = i(765305);
      async function d(n, e) {
        let { entity_type: i } = n;
        switch (i) {
          case u.WX.STAGE_INSTANCE: {
            let e = o.Z.getChannelId(),
              i = c.Z.getChannel(n.channel_id);
            t()(null != i, "could not find channel"),
              e !== i.id && (await s.TM(i, !0), await s.R5(i, null, !1)),
              await (0, r.RK)(i, !1, !0);
            break;
          }
          case u.WX.VOICE: {
            let e = o.Z.getChannelId(),
              i = c.Z.getChannel(n.channel_id);
            t()(null != i, "could not find channel"),
              e !== i.id && a.default.selectVoiceChannel(i.id);
          }
        }
      }
      function h(n, e) {
        let { entity_type: i } = n;
        switch (i) {
          case u.WX.STAGE_INSTANCE:
          case u.WX.VOICE:
          case u.WX.EXTERNAL:
            null == e || e();
        }
        return Promise.resolve();
      }
    },
    610665: function (n, e, i) {
      i.d(e, {
        GV: function () {
          return x;
        },
        iQ: function () {
          return m;
        },
      }),
        i(653041),
        i(47120),
        i(411104);
      var l = i(512722),
        t = i.n(l),
        a = i(333848),
        r = i(706058),
        s = i(131704),
        c = i(592125),
        o = i(430824),
        u = i(482241),
        d = i(765305),
        h = i(981631);
      async function v(n, e) {
        let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          l = [];
        l.push(...i);
        let t = await a.Z.createChannel({
          guildId: n.id,
          type: h.d4z.GUILD_STAGE_VOICE,
          name: e.substring(0, 100),
          permissionOverwrites: l,
        });
        if (null == t || 201 !== t.status)
          throw Error("Can't create channel for event");
        return (0, s.q_)(t.body);
      }
      async function x(n, e) {
        let { entity_type: i } = n;
        if (i === d.WX.STAGE_INSTANCE) {
          let i = await (function (n, e) {
            let { guild_id: i, channel_id: l } = n,
              t = o.Z.getGuild(i);
            if (null == t) return Promise.resolve(null);
            let a = c.Z.getChannel(l);
            return null == a ? v(t, n.name, e) : Promise.resolve(a);
          })(n, e);
          t()(null != i, "could not find or create channel");
        }
      }
      async function m(n) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          { channel_id: i, entity_type: l, name: a, id: s, guild_id: c } = n;
        switch (l) {
          case d.WX.STAGE_INSTANCE:
            t()(null != i, "channel_id is required"),
              await (0, r.me)(i, a, d.j8.GUILD_ONLY, e, s);
            break;
          case d.WX.VOICE:
            t()(null != i, "channel_id is required"),
              await u.Z.startEvent(s, c);
            break;
          case d.WX.EXTERNAL:
            await u.Z.startEvent(s, c);
        }
      }
    },
    305298: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      }),
        i(47120);
      var l = i(192379),
        t = i(881052),
        a = i(430927),
        r = i(610665);
      let s = { onSuccess: () => {}, permissionOverwrites: [] };
      function c() {
        let [n, e] = l.useState(!1),
          [i, c] = l.useState(null);
        return [
          async function n(n, i) {
            let {
              onSuccess: l = s.onSuccess,
              permissionOverwrites: o = s.permissionOverwrites,
            } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : s;
            e(!0);
            try {
              await r.GV(n, o),
                await r.iQ(n, i),
                await (0, a.o)(n, l),
                await (0, a.T)(n, l),
                e(!1);
            } catch (n) {
              c(new t.Hx(n)), e(!1);
            }
            e(!1);
          },
          { loading: n, error: i },
        ];
      }
    },
    460838: function (n, e, i) {
      i.d(e, {
        Q: function () {
          return t;
        },
        Z: function () {
          return S;
        },
      });
      var l,
        t,
        a = i(200651),
        r = i(192379),
        s = i(120356),
        c = i.n(s),
        o = i(442837),
        u = i(481060),
        d = i(447003),
        h = i(471445),
        v = i(565138),
        x = i(357156),
        m = i(496675),
        C = i(725436),
        g = i(274311),
        N = i(854698),
        j = i(285784),
        p = i(95291),
        k = i(742593),
        f = i(810561),
        I = i(187443),
        E = i(131154),
        y = i(765305),
        T = i(981631),
        Z = i(388032),
        w = i(596622);
      function b(n) {
        let { channel: e, onClick: i } = n,
          { canManageAllEvents: l } = (0, x.XJ)(e),
          t = (0, o.e7)(
            [m.Z],
            () => !e.isGuildVocal() || m.Z.can(T.Plq.CONNECT, e),
            [e],
          ),
          s = r.useMemo(() => (0, d.Z)(e), [e]),
          v = (0, h.KS)(e);
        return (0, a.jsx)(u.Tooltip, {
          text: Z.intl.string(Z.t.nHjY9P),
          shouldShow: !t && null != i,
          children: (n) =>
            (0, a.jsxs)(u.Clickable, {
              ...n,
              className: c()(w.inline, w.channelContainer, {
                [w.channelContainerEnabled]: t && null != i,
                [w.channelContainerDisabled]: !t && null != i,
              }),
              onClick: i,
              children: [
                (0, a.jsx)(u.Tooltip, {
                  text: Z.intl.string(Z.t["48WXaW"]),
                  shouldShow: l && s && t && null != i,
                  children: (n) =>
                    null != v
                      ? (0, a.jsx)(v, {
                          ...n,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: w.icon,
                        })
                      : null,
                }),
                (0, a.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: w.channelLocation,
                  children: e.name,
                }),
              ],
            }),
        });
      }
      function _(n) {
        let {
          guild: e,
          channel: i,
          onJoinClick: l,
          handleLocationClick: t,
          location: r,
          isExternal: s,
          isHub: o,
        } = n;
        if (o)
          return null == e
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                className: w.inline,
                children: [
                  (0, a.jsx)(v.Z, {
                    className: w.guildIcon,
                    size: v.Z.Sizes.MINI,
                    active: !0,
                    guild: e,
                  }),
                  (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == e ? void 0 : e.name,
                  }),
                ],
              });
        return null != i
          ? (0, a.jsx)(b, { channel: i, onClick: l })
          : (0, a.jsxs)(u.Clickable, {
              className: w.inline,
              onClick: t,
              children: [
                (0, a.jsx)(u.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: c()(w.channelContainer, w.icon),
                }),
                (0, a.jsx)(u.Text, {
                  className: s ? w.externalLocation : w.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, C.m)(r, !0),
                }),
              ],
            });
      }
      function S(n) {
        let {
            className: e,
            guild: i,
            channel: l,
            creator: t,
            name: r,
            entityType: s,
            description: o,
            imageLocation: d = 0,
            imageSource: h,
            isActive: v,
            isUserLurking: x,
            isJoined: m = !1,
            isMember: C = !1,
            isHub: T = !1,
            speakers: Z,
            speakerCount: b,
            rsvped: S,
            canInvite: A,
            location: G,
            truncate: L,
            onContextMenu: R,
            onJoinClick: X,
            onJoinGuildClick: M,
            onGoToGuildClick: P,
            onRsvpClick: W,
            onStartClick: U,
            onInviteClick: B,
            onEndClick: H,
            onClick: V,
            isNew: z,
            guildEvent: O,
            eventPreview: J,
            recurrenceRule: q,
            recurrenceId: D,
          } = n,
          K = (0, g.Q)(l, s),
          Q = s === y.WX.EXTERNAL,
          Y = Q ? (n) => n.stopPropagation() : void 0,
          F = [];
        if (null != q && null != event) {
          let n = (0, N.Ho)(q);
          F = (0, N.PJ)(4, n, new Date(O.scheduled_start_time));
        }
        let $ = F.length > 0;
        return (0, a.jsxs)(u.ClickableContainer, {
          "aria-label": r,
          onClick: () => (null == V ? void 0 : V(D)),
          onContextMenu: R,
          className: c()(w.card, { [w.joined]: m, [w.lurking]: x }, e),
          children: [
            (0, a.jsxs)("div", {
              className: c()(w.padding, { [w.isRecurring]: $ }),
              children: [
                0 === d && (0, a.jsx)(p.Z, { source: h }),
                (0, a.jsx)(k.ZP, {
                  creator: t,
                  name: r,
                  description: o,
                  imageSource: 1 === d ? h : null,
                  truncate: L,
                  guildId: null == i ? void 0 : i.id,
                  isHub: T,
                  isNew: z,
                  guildEvent: O,
                  eventPreview: J,
                  recurrenceId: D,
                }),
                v &&
                  null != i &&
                  null != Z &&
                  b > 0 &&
                  (0, a.jsx)(E.Z, {
                    guild: i,
                    speakers: Z,
                    speakerCount: b,
                    className: w.spacing,
                  }),
                (0, a.jsx)("hr", { className: w.divider }),
                (0, a.jsxs)("div", {
                  className: c()(w.inline, w.footer),
                  children: [
                    (0, a.jsx)(_, {
                      guild: i,
                      channel: l,
                      onJoinClick: X,
                      handleLocationClick: Y,
                      location: G,
                      isExternal: Q,
                      isHub: T,
                    }),
                    T
                      ? (0, a.jsx)(I.Z, {
                          isActive: v,
                          isUserLurking: x,
                          isMember: C,
                          rsvped: S,
                          onRsvpClick: W,
                          onJoinGuildClick: M,
                          onGoToGuildClick: P,
                          guildName: null == i ? void 0 : i.name,
                          canInvite: A,
                          isChannelPublic: K,
                          onInviteClick: B,
                        })
                      : (0, a.jsx)(j.ZP, {
                          entityType: s,
                          isJoined: m,
                          isActive: v,
                          isUserLurking: x,
                          rsvped: S,
                          canInvite: A,
                          isChannelPublic: K,
                          onContextMenu: R,
                          onJoinClick: X,
                          onRsvpClick: W,
                          onStartClick: U,
                          onInviteClick: B,
                          onEndClick: H,
                        }),
                  ],
                }),
                $ && (0, a.jsx)("hr", { className: w.divider }),
              ],
            }),
            $ &&
              (0, a.jsx)(f.Z, {
                guildId: null == i ? void 0 : i.id,
                recurrenceRule: q,
                guildEventId: O.id,
                onRecurrenceClick: V,
              }),
          ],
        });
      }
      ((l = t || (t = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = i(200651);
      i(192379);
      var t = i(120356),
        a = i.n(t),
        r = i(481060),
        s = i(388032),
        c = i(184617);
      function o(n) {
        let { guild: e, speakers: i, speakerCount: t, className: o } = n,
          u = i.slice(0, 5),
          d = u.map((n) => {
            var i, t;
            return (0, l.jsxs)(
              "div",
              {
                className: c.speakerContainer,
                children: [
                  (0, l.jsx)(r.Avatar, {
                    src:
                      null == n
                        ? void 0
                        : null === (i = n.user) || void 0 === i
                          ? void 0
                          : i.getAvatarURL(e.id, 20),
                    size: r.AvatarSizes.SIZE_20,
                    className: c.avatar,
                    "aria-label": "".concat(
                      null == n ? void 0 : n.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: c.textInGridContainer,
                    children: (0, l.jsx)(r.Text, {
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
                : null === (t = n.user) || void 0 === t
                  ? void 0
                  : t.id,
            );
          }),
          h = t - u.length;
        return (0, l.jsxs)("div", {
          className: a()(c.grid, o),
          children: [
            d,
            h > 0 &&
              (0, l.jsxs)("div", {
                className: c.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: c.iconMicrophone,
                    children: (0, l.jsx)(r.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, l.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: c.textInGrid,
                    children: s.intl.format(s.t["185ggI"], { count: h }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    296864: function (n, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return k;
          },
        }),
        i(47120);
      var l = i(200651),
        t = i(192379),
        a = i(120356),
        r = i.n(a),
        s = i(442837),
        c = i(481060),
        o = i(313201),
        u = i(41776),
        d = i(357156),
        h = i(513449),
        v = i(592125),
        x = i(430824),
        m = i(305298),
        C = i(405613),
        g = i(460838),
        N = i(765305),
        j = i(388032),
        p = i(393219);
      function k(n) {
        var e;
        let { transitionState: i, event: a, onSuccess: k, onClose: f } = n,
          I = (0, o.Dt)(),
          { guild_id: E, privacy_level: y } = a,
          T = (0, s.e7)([v.Z], () => v.Z.getChannel(a.channel_id), [a]),
          Z = (0, s.e7)([x.Z], () => x.Z.getGuild(E), [E]),
          { canManageGuildEvent: w } = (0, d.XJ)(null != T ? T : Z),
          b = w(a),
          _ = (0, s.e7)([u.Z], () => u.Z.isLurking(E), [E]),
          S = a.entity_type === N.WX.STAGE_INSTANCE,
          [A, G] = t.useState(S),
          [L, { loading: R, error: X }] = (0, m.Z)();
        if (!b) return null;
        let M =
            y === N.j8.PUBLIC
              ? j.intl.string(j.t.HhlaLC)
              : j.intl.string(j.t.GI3xXV),
          P = () => {
            null == k || k(), f(), (0, h.Ku)(!1);
          },
          W = async () => {
            await L(a, A, { onSuccess: P });
          };
        return (0, l.jsx)(c.ModalRoot, {
          transitionState: i,
          "aria-labelledby": I,
          children: (0, l.jsxs)(c.ModalContent, {
            className: p.content,
            children: [
              (0, l.jsx)("div", {
                className: p.previewCard,
                children: (0, l.jsx)(g.Z, {
                  guild: Z,
                  channel: T,
                  name: a.name,
                  description:
                    null !== (e = a.description) && void 0 !== e ? e : void 0,
                  imageSource: (0, C.Z)(a),
                  isActive: !1,
                  isUserLurking: _,
                  speakers: [],
                  speakerCount: 0,
                  rsvped: !0,
                  guildEvent: a,
                }),
              }),
              (0, l.jsx)(c.Text, {
                color: "header-secondary",
                className: p.privacyLevel,
                variant: "text-sm/normal",
                children: j.intl.format(j.t.UMajoq, {
                  privacyLevel: M,
                  privacyLevelHook: (n, e) =>
                    y !== N.j8.PUBLIC
                      ? null
                      : (0, l.jsxs)(
                          "div",
                          {
                            className: p.privacyLevel,
                            children: [
                              (0, l.jsx)(c.GlobeEarthIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: p.publicIcon,
                              }),
                              (0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: n,
                              }),
                            ],
                          },
                          e,
                        ),
                }),
              }),
              (0, l.jsx)(c.Heading, {
                variant: "heading-xl/semibold",
                className: p.header,
                children: a.name,
              }),
              S &&
                (0, l.jsx)(c.Checkbox, {
                  className: p.verticalSpacing,
                  type: c.Checkbox.Types.INVERTED,
                  value: A,
                  onChange: (n) => {
                    let { currentTarget: e } = n;
                    return G(e.checked);
                  },
                  children: (0, l.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t.dGNtgI),
                  }),
                }),
              (0, l.jsxs)("div", {
                className: r()(p.inline, p.buttons, p.verticalSpacing),
                children: [
                  (0, l.jsx)(c.Button, {
                    color: c.Button.Colors.PRIMARY,
                    onClick: () => {
                      f();
                    },
                    className: r()(p.button, p.spacing),
                    children: j.intl.string(j.t.CZGqeX),
                  }),
                  (0, l.jsx)(c.Button, {
                    color: c.Button.Colors.GREEN,
                    onClick: W,
                    submitting: R,
                    className: p.button,
                    children: j.intl.string(j.t.cK1GGR),
                  }),
                ],
              }),
              null != X && null != X.getAnyErrorMessage()
                ? (0, l.jsx)(c.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    className: p.errorMessage,
                    children: X.getAnyErrorMessage(),
                  })
                : null,
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=2bb9ab6a66e54b06039d.js.map
