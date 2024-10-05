"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84686"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return g;
        },
        Ef: function () {
          return R;
        },
        HO: function () {
          return p;
        },
        NZ: function () {
          return x;
        },
        Pq: function () {
          return m;
        },
        Q1: function () {
          return S;
        },
        RK: function () {
          return O;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return f;
        },
        yi: function () {
          return M;
        },
      });
      var s = t(512722),
        i = t.n(s),
        r = t(149765),
        c = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        l = t(367907),
        d = t(944486),
        u = t(979651),
        _ = t(700785),
        E = t(922482),
        I = t(192079),
        T = t(706058),
        N = t(590415),
        h = t(981631);
      function S(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, l.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, I.s$)(e) }),
          c.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function A(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          c.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function O(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = null == e ? void 0 : e.getGuildId();
        i()(null != s, "This channel cannot be guildless.");
        let r = u.Z.getVoiceStateForChannel(e.id);
        return (
          (0, N.gf)(r) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, l.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, I.s$)(e) }),
          c.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(s),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function M(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          c.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function g(e, n, t) {
        let s = e.getGuildId();
        return (
          i()(null != s, "This channel cannot be guildless."),
          c.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(s, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function f(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          g(n, e.id, !0),
          c.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function m(e, n, t) {
        let s = e.getGuildId();
        i()(null != s, "Channel cannot be guildless");
        let c = e.permissionOverwrites[s],
          l = { id: s, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...c };
        t
          ? ((l.allow = r.IH(l.allow, n)), (l.deny = r.Od(l.deny, n)))
          : ((l.allow = r.Od(l.allow, n)), (l.deny = r.IH(l.deny, n))),
          a.Z.updatePermissionOverwrite(e.id, l);
      }
      async function p(e, n, t, s) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
        let i = await (0, T.me)(e.id, n, t, s);
        return O(e, !1, !0), i;
      }
      async function R(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function x(e) {
        await (0, T.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return u;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return E;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var s = t(19780),
        i = t(5192),
        r = t(700785),
        c = t(427679),
        a = t(157925),
        o = t(981631),
        l = t(71080),
        d = t(689938);
      function u(e, n, t, s) {
        let r = n[0],
          c = i.ZP.getName(e, t, r),
          a = null != s ? s : n.length;
        return 1 === a && null != r
          ? c
          : null == r
            ? d.Z.Messages.SPEAKING_COUNT.format({ count: a })
            : d.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: c,
                count: a - 1,
              });
      }
      function _(e, n) {
        switch (e) {
          case l.aC.OWNER:
            return d.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case l.aC.ADMINISTRATOR:
            return d.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case l.aC.MEMBER:
          case l.aC.ROLE:
            return n
              ? d.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case l.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let n = c.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: s.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return c;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return r;
        },
      });
      var s = t(544891),
        i = t(981631);
      async function r(e, n, t, r, c) {
        return (
          await s.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: c,
              send_start_notification: r,
            },
          })
        ).body;
      }
      async function c(e, n, t) {
        return (
          await s.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function a(e) {
        return s.tn.del(i.ANM.STAGE_INSTANCE(e));
      }
    },
    582019: function (e, n, t) {
      t.d(n, {
        Xd: function () {
          return N;
        },
        mv: function () {
          return T;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        r = t(692547),
        c = t(481060),
        a = t(239091),
        o = t(584511),
        l = t(112831),
        d = t(51144),
        u = t(88751),
        _ = t(930180),
        E = t(689938),
        I = t(578814);
      let T = (e) => {
          let { channelId: n } = e,
            t = (0, _._d)(n);
          return 0 === t
            ? null
            : (0, s.jsxs)("div", {
                className: I.blockedNotice,
                children: [
                  (0, s.jsx)(c.DenyIcon, {
                    size: "lg",
                    className: I.__invalid_blockedIcon,
                    color: r.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, s.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      E.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: t },
                      ),
                  }),
                  (0, s.jsx)(c.Clickable, {
                    className: I.blockedButton,
                    onClick: (e) => {
                      (0, a.vq)(
                        e,
                        (e) => (0, s.jsx)(h, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: E.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        N = (e) => {
          let { user: n, showStatus: t, speaker: r, channelId: a } = e,
            _ = (0, i.e7)([u.ZP], () => u.ZP.isModerator(n.id, a)),
            T = null;
          return (
            t &&
              (T = r
                ? E.Z.Messages.STAGE_SPEAKER
                : _
                  ? E.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : E.Z.Messages.STAGE_AUDIENCE),
            (0, s.jsxs)("div", {
              className: I.user,
              children: [
                (0, s.jsx)(
                  o.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: c.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: r
                      ? () =>
                          (0, s.jsx)(c.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: I.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, s.jsxs)("div", {
                  className: I.userInfo,
                  children: [
                    (0, s.jsxs)("div", {
                      className: I.username,
                      children: [
                        (0, s.jsx)(l.Z, {
                          size: t ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(n),
                        }),
                        (0, s.jsx)(l.Z, {
                          size: t ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
                          color: l.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: I.username,
                      children: [
                        (0, s.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: E.Z.Messages.BLOCKED,
                        }),
                        (0, s.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", T],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        h = (e) => {
          let { channelId: n } = e,
            t = (0, _.z)(n);
          return (0, s.jsx)(c.Scroller, {
            className: I.container,
            children: t.map((e) => {
              let { user: t } = e;
              return (0, s.jsx)(N, { user: t, channelId: n }, t.id);
            }),
          });
        };
    },
    939863: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        c = t(689938),
        a = t(843117),
        o = t(296507),
        l = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, s.jsxs)("div", {
          className: r()(a.container, n),
          children: [
            (0, s.jsx)("img", {
              alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: l,
              className: r()(a.sparkleIcon, a.sparkleBottom),
            }),
            t,
            (0, s.jsx)("img", {
              alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: r()(a.sparkleIcon, a.sparkleTop),
            }),
          ],
        });
      }
    },
    665111: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
        });
      var s = t(735250);
      t(470079);
      var i = t(481060),
        r = t(313201),
        c = t(471253),
        a = t(930180),
        o = t(582019),
        l = t(939863),
        d = t(689938),
        u = t(851836);
      function _(e) {
        let { channel: n, transitionState: t, onClose: _, ...E } = e,
          I = (0, r.Dt)(),
          T = (0, a._d)(n.id),
          N = async () => {
            await (0, c.yi)(n), _();
          },
          h = async () => {
            await (0, c.RK)(n, !1), _();
          };
        return (0, s.jsx)(i.ModalRoot, {
          transitionState: t,
          "aria-labelledby": I,
          ...E,
          size: i.ModalSize.SMALL,
          children: (0, s.jsxs)(i.ModalContent, {
            className: u.content,
            children: [
              (0, s.jsx)(l.Z, {
                children: (0, s.jsx)("div", {
                  className: u.stageIconBackground,
                  children: (0, s.jsx)(i.StageIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 40,
                    height: 40,
                    className: u.stageIcon,
                  }),
                }),
              }),
              (0, s.jsx)(i.Heading, {
                id: I,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: u.headerTitle,
                children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE,
              }),
              (0, s.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: u.headerSubtitle,
                children: d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE,
              }),
              T > 0 && (0, s.jsx)(o.mv, { channelId: n.id }),
              (0, s.jsxs)("div", {
                className: u.buttonsContainer,
                children: [
                  (0, s.jsxs)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: h,
                    children: [
                      (0, s.jsx)("div", {
                        className: u.icon,
                        children: (0, s.jsx)(i.MicrophoneIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER,
                    ],
                  }),
                  (0, s.jsxs)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: N,
                    children: [
                      (0, s.jsx)("div", {
                        className: u.icon,
                        children: (0, s.jsx)(i.GroupIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.Z.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE,
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
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
    843117: function (e, n, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
    851836: function (e, n, t) {
      e.exports = {
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
//# sourceMappingURL=944de59f6f00c86ffadb.js.map
