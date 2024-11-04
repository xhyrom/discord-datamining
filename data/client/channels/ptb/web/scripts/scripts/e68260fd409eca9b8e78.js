"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84686"],
  {
    296507: function (n) {
      n.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (n) {
      n.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return N;
        },
        Ef: function () {
          return v;
        },
        HO: function () {
          return A;
        },
        NZ: function () {
          return C;
        },
        Pq: function () {
          return b;
        },
        Q1: function () {
          return T;
        },
        RK: function () {
          return I;
        },
        _0: function () {
          return E;
        },
        hz: function () {
          return S;
        },
        yi: function () {
          return x;
        },
      });
      var i = e(512722),
        r = e.n(i),
        c = e(149765),
        l = e(544891),
        s = e(493683);
      e(749210);
      var o = e(911969),
        a = e(367907),
        d = e(944486),
        u = e(979651),
        _ = e(700785),
        h = e(922482),
        m = e(192079),
        g = e(706058),
        f = e(590415),
        p = e(981631);
      function T(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, a.yw)(p.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, m.s$)(n) }),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function E(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function I(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let c = u.Z.getVoiceStateForChannel(n.id);
        return (
          (0, f.gf)(c) === f.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, a.yw)(p.rMx.PROMOTED_TO_SPEAKER, { ...(0, m.s$)(n) }),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function x(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function S(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          N(t, n.id, !0),
          l.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function b(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let l = n.permissionOverwrites[i],
          a = { id: i, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...l };
        e
          ? ((a.allow = c.IH(a.allow, t)), (a.deny = c.Od(a.deny, t)))
          : ((a.allow = c.Od(a.allow, t)), (a.deny = c.IH(a.deny, t))),
          s.Z.updatePermissionOverwrite(n.id, a);
      }
      async function A(n, t, e, i) {
        if ("" === t) return;
        d.Z.getVoiceChannelId() !== n.id && (0, h.TM)(n);
        let r = await (0, g.me)(n.id, t, e, i);
        return I(n, !1, !0), r;
      }
      async function v(n, t, e) {
        if ("" !== t) return await (0, g.Dk)(n.id, t, e);
      }
      async function C(n) {
        await (0, g.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return u;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return h;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        c = e(700785),
        l = e(427679),
        s = e(157925),
        o = e(981631),
        a = e(71080),
        d = e(388032);
      function u(n, t, e, i) {
        let c = t[0],
          l = r.ZP.getName(n, e, c),
          s = null != i ? i : t.length;
        return 1 === s && null != c
          ? l
          : null == c
            ? d.intl.formatToPlainString(d.t.chmM9P, { count: s })
            : d.intl.formatToPlainString(d.t.GhkJ29, { name: l, count: s - 1 });
      }
      function _(n, t) {
        switch (n) {
          case a.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
          case a.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
          case a.aC.MEMBER:
          case a.aC.ROLE:
            return t ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
          case a.aC.EMPTY_STATE:
        }
        return null;
      }
      function h(n) {
        let t = l.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: c.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? s.BM.EVERYONE
            : s.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return l;
        },
        Ix: function () {
          return s;
        },
        me: function () {
          return c;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function c(n, t, e, c, l) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: l,
              send_start_notification: c,
            },
          })
        ).body;
      }
      async function l(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function s(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
      }
    },
    46920: function (n, t, e) {
      e.d(t, {
        Xd: function () {
          return f;
        },
        mv: function () {
          return g;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        c = e(692547),
        l = e(481060),
        s = e(239091),
        o = e(584511),
        a = e(112831),
        d = e(51144),
        u = e(88751),
        _ = e(930180),
        h = e(388032),
        m = e(578814);
      let g = (n) => {
          let { channelId: t } = n,
            e = (0, _._d)(t);
          return 0 === e
            ? null
            : (0, i.jsxs)("div", {
                className: m.blockedNotice,
                children: [
                  (0, i.jsx)(l.DenyIcon, {
                    size: "lg",
                    className: m.__invalid_blockedIcon,
                    color: c.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: h.intl.format(h.t["6Tcdt7"], { number: e }),
                  }),
                  (0, i.jsx)(l.Clickable, {
                    className: m.blockedButton,
                    onClick: (n) => {
                      (0, s.vq)(
                        n,
                        (n) => (0, i.jsx)(p, { ...n, channelId: t }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: h.intl.string(h.t.rUEjBQ),
                  }),
                ],
              });
        },
        f = (n) => {
          let { user: t, showStatus: e, speaker: c, channelId: s } = n,
            _ = (0, r.e7)([u.ZP], () => u.ZP.isModerator(t.id, s)),
            g = null;
          return (
            e &&
              (g = c
                ? h.intl.string(h.t.LqMmGx)
                : _
                  ? h.intl.string(h.t.GMZqSk)
                  : h.intl.string(h.t.suRAp6)),
            (0, i.jsxs)("div", {
              className: m.user,
              children: [
                (0, i.jsx)(
                  o.Z,
                  {
                    src: t.getAvatarURL(null, 32),
                    size: l.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: c
                      ? () =>
                          (0, i.jsx)(l.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: m.icon,
                          })
                      : null,
                  },
                  t.id,
                ),
                (0, i.jsxs)("div", {
                  className: m.userInfo,
                  children: [
                    (0, i.jsxs)("div", {
                      className: m.username,
                      children: [
                        (0, i.jsx)(a.Z, {
                          size: e ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(t),
                        }),
                        (0, i.jsx)(a.Z, {
                          size: e ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          color: a.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(t.discriminator),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: m.username,
                      children: [
                        (0, i.jsx)(l.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: h.intl.string(h.t["4bDptL"]),
                        }),
                        (0, i.jsxs)(l.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", g],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        p = (n) => {
          let { channelId: t } = n,
            e = (0, _.z)(t);
          return (0, i.jsx)(l.Scroller, {
            className: m.container,
            children: e.map((n) => {
              let { user: e } = n;
              return (0, i.jsx)(f, { user: e, channelId: t }, e.id);
            }),
          });
        };
    },
    939863: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        c = e.n(r),
        l = e(388032),
        s = e(843117),
        o = e(296507),
        a = e(866402);
      function d(n) {
        let { className: t, children: e } = n;
        return (0, i.jsxs)("div", {
          className: c()(s.container, t),
          children: [
            (0, i.jsx)("img", {
              alt: l.intl.string(l.t.VoB8OT),
              src: a,
              className: c()(s.sparkleIcon, s.sparkleBottom),
            }),
            e,
            (0, i.jsx)("img", {
              alt: l.intl.string(l.t.VoB8OT),
              src: o,
              className: c()(s.sparkleIcon, s.sparkleTop),
            }),
          ],
        });
      }
    },
    665111: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return _;
          },
        });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        c = e(313201),
        l = e(471253),
        s = e(930180),
        o = e(46920),
        a = e(939863),
        d = e(388032),
        u = e(851836);
      function _(n) {
        let { channel: t, transitionState: e, onClose: _, ...h } = n,
          m = (0, c.Dt)(),
          g = (0, s._d)(t.id),
          f = async () => {
            await (0, l.yi)(t), _();
          },
          p = async () => {
            await (0, l.RK)(t, !1), _();
          };
        return (0, i.jsx)(r.ModalRoot, {
          transitionState: e,
          "aria-labelledby": m,
          ...h,
          size: r.ModalSize.SMALL,
          children: (0, i.jsxs)(r.ModalContent, {
            className: u.content,
            children: [
              (0, i.jsx)(a.Z, {
                children: (0, i.jsx)("div", {
                  className: u.stageIconBackground,
                  children: (0, i.jsx)(r.StageIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 40,
                    height: 40,
                    className: u.stageIcon,
                  }),
                }),
              }),
              (0, i.jsx)(r.Heading, {
                id: m,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: u.headerTitle,
                children: d.intl.string(d.t.njetU1),
              }),
              (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: u.headerSubtitle,
                children: d.intl.string(d.t.LQY4JS),
              }),
              g > 0 && (0, i.jsx)(o.mv, { channelId: t.id }),
              (0, i.jsxs)("div", {
                className: u.buttonsContainer,
                children: [
                  (0, i.jsxs)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: p,
                    children: [
                      (0, i.jsx)("div", {
                        className: u.icon,
                        children: (0, i.jsx)(r.MicrophoneIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.intl.string(d.t["Q8o/tb"]),
                    ],
                  }),
                  (0, i.jsxs)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: f,
                    children: [
                      (0, i.jsx)("div", {
                        className: u.icon,
                        children: (0, i.jsx)(r.GroupIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.intl.string(d.t["N3/Oyc"]),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    578814: function (n, t, e) {
      n.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
    843117: function (n, t, e) {
      n.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
    851836: function (n, t, e) {
      n.exports = {
        content: "content_d26d60",
        stageIconBackground: "stageIconBackground_d26d60",
        stageIcon: "stageIcon_d26d60",
        headerTitle: "headerTitle_d26d60",
        headerSubtitle: "headerSubtitle_d26d60",
        buttonsContainer: "buttonsContainer_d26d60",
        button: "button_d26d60",
        innerButton: "innerButton_d26d60",
        icon: "icon_d26d60",
      };
    },
  },
]);
//# sourceMappingURL=e68260fd409eca9b8e78.js.map
