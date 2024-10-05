"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85885"],
  {
    296507: function (n) {
      n.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (n) {
      n.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return p;
        },
        Ef: function () {
          return R;
        },
        HO: function () {
          return C;
        },
        NZ: function () {
          return m;
        },
        Pq: function () {
          return g;
        },
        Q1: function () {
          return A;
        },
        RK: function () {
          return S;
        },
        _0: function () {
          return h;
        },
        hz: function () {
          return O;
        },
        yi: function () {
          return M;
        },
      });
      var i = t(512722),
        s = t.n(i),
        l = t(149765),
        a = t(544891),
        r = t(493683);
      t(749210);
      var c = t(911969),
        o = t(367907),
        u = t(944486),
        d = t(979651),
        _ = t(700785),
        E = t(922482),
        I = t(192079),
        T = t(706058),
        N = t(590415),
        f = t(981631);
      function A(n, e) {
        let t = n.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          e && (0, o.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, I.s$)(n) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function h(n, e) {
        let t = n.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function S(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        s()(null != i, "This channel cannot be guildless.");
        let l = d.Z.getVoiceStateForChannel(n.id);
        return (
          (0, N.gf)(l) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, o.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, I.s$)(n) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function M(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          s()(null != e, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function p(n, e, t) {
        let i = n.getGuildId();
        return (
          s()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function O(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          p(e, n.id, !0),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function g(n, e, t) {
        let i = n.getGuildId();
        s()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          o = { id: i, type: c.BN.ROLE, allow: _.Hn, deny: _.Hn, ...a };
        t
          ? ((o.allow = l.IH(o.allow, e)), (o.deny = l.Od(o.deny, e)))
          : ((o.allow = l.Od(o.allow, e)), (o.deny = l.IH(o.deny, e))),
          r.Z.updatePermissionOverwrite(n.id, o);
      }
      async function C(n, e, t, i) {
        if ("" === e) return;
        u.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
        let s = await (0, T.me)(n.id, e, t, i);
        return S(n, !1, !0), s;
      }
      async function R(n, e, t) {
        if ("" !== e) return await (0, T.Dk)(n.id, e, t);
      }
      async function m(n) {
        await (0, T.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return d;
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
      var i = t(19780),
        s = t(5192),
        l = t(700785),
        a = t(427679),
        r = t(157925),
        c = t(981631),
        o = t(71080),
        u = t(689938);
      function d(n, e, t, i) {
        let l = e[0],
          a = s.ZP.getName(n, t, l),
          r = null != i ? i : e.length;
        return 1 === r && null != l
          ? a
          : null == l
            ? u.Z.Messages.SPEAKING_COUNT.format({ count: r })
            : u.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: a,
                count: r - 1,
              });
      }
      function _(n, e) {
        switch (n) {
          case o.aC.OWNER:
            return u.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case o.aC.ADMINISTRATOR:
            return u.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case o.aC.MEMBER:
          case o.aC.ROLE:
            return e
              ? u.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : u.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case o.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(n) {
        let e = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(c.Plq.REQUEST_TO_SPEAK, n)
            ? r.BM.EVERYONE
            : r.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return r;
        },
        me: function () {
          return l;
        },
      });
      var i = t(544891),
        s = t(981631);
      async function l(n, e, t, l, a) {
        return (
          await i.tn.post({
            url: s.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: l,
            },
          })
        ).body;
      }
      async function a(n, e, t) {
        return (
          await i.tn.patch({
            url: s.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function r(n) {
        return i.tn.del(s.ANM.STAGE_INSTANCE(n));
      }
    },
    124779: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return d;
          },
        });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        l = t(287734),
        a = t(313201),
        r = t(471253),
        c = t(939863),
        o = t(689938),
        u = t(101957);
      function d(n) {
        let { channel: e, transitionState: t, onClose: d } = n,
          _ = (0, a.Dt)();
        function E() {
          l.default.disconnect(), d();
        }
        return (0, i.jsxs)(s.ModalRoot, {
          transitionState: t,
          "aria-labelledby": _,
          children: [
            (0, i.jsxs)(s.ModalContent, {
              className: u.content,
              children: [
                (0, i.jsx)(c.Z, {
                  children: (0, i.jsx)("div", {
                    className: u.iconBackground,
                    children: (0, i.jsx)(s.StageXIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 40,
                      height: 40,
                      className: u.headerIcon,
                    }),
                  }),
                }),
                (0, i.jsx)(s.Heading, {
                  id: _,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: u.title,
                  children: o.Z.Messages.EXPLICIT_END_STAGE_TITLE,
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: u.subtitle,
                  children: o.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE,
                }),
              ],
            }),
            (0, i.jsxs)(s.ModalFooter, {
              children: [
                (0, i.jsx)(s.Button, {
                  color: s.Button.Colors.RED,
                  onClick: function () {
                    (0, r.NZ)(e), E();
                  },
                  children: o.Z.Messages.EXPLICIT_END_STAGE_CONFIRM,
                }),
                (0, i.jsx)(s.Button, {
                  color: s.Button.Colors.PRIMARY,
                  className: u.cancelButton,
                  onClick: E,
                  children: o.Z.Messages.EXPLICIT_END_STAGE_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    939863: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(120356),
        l = t.n(s),
        a = t(689938),
        r = t(843117),
        c = t(296507),
        o = t(866402);
      function u(n) {
        let { className: e, children: t } = n;
        return (0, i.jsxs)("div", {
          className: l()(r.container, e),
          children: [
            (0, i.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: l()(r.sparkleIcon, r.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: l()(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    101957: function (n, e, t) {
      n.exports = {
        content: "content_c01927",
        iconBackground: "iconBackground_c01927",
        headerIcon: "headerIcon_c01927",
        title: "title_c01927",
        subtitle: "subtitle_c01927",
        cancelButton: "cancelButton_c01927",
      };
    },
    843117: function (n, e, t) {
      n.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=d51677b122bff894733f.js.map
