"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2634"],
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
          return O;
        },
        _0: function () {
          return h;
        },
        hz: function () {
          return M;
        },
        yi: function () {
          return S;
        },
      });
      var i = t(512722),
        s = t.n(i),
        a = t(149765),
        r = t(544891),
        l = t(493683);
      t(749210);
      var o = t(911969),
        c = t(367907),
        u = t(944486),
        d = t(979651),
        _ = t(700785),
        E = t(922482),
        T = t(192079),
        I = t(706058),
        N = t(590415),
        f = t(981631);
      function A(n, e) {
        let t = n.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          e && (0, c.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.s$)(n) }),
          r.tn.patch({
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
          r.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function O(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        s()(null != i, "This channel cannot be guildless.");
        let a = d.Z.getVoiceStateForChannel(n.id);
        return (
          (0, N.gf)(a) === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, c.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, T.s$)(n) }),
          r.tn.patch({
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
      function S(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          s()(null != e, "This channel cannot be guildless."),
          r.tn.patch({
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
          r.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function M(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          p(e, n.id, !0),
          r.tn.patch({
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
        let r = n.permissionOverwrites[i],
          c = { id: i, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...r };
        t
          ? ((c.allow = a.IH(c.allow, e)), (c.deny = a.Od(c.deny, e)))
          : ((c.allow = a.Od(c.allow, e)), (c.deny = a.IH(c.deny, e))),
          l.Z.updatePermissionOverwrite(n.id, c);
      }
      async function C(n, e, t, i) {
        if ("" === e) return;
        u.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
        let s = await (0, I.me)(n.id, e, t, i);
        return O(n, !1, !0), s;
      }
      async function R(n, e, t) {
        if ("" !== e) return await (0, I.Dk)(n.id, e, t);
      }
      async function m(n) {
        await (0, I.Ix)(n.id);
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
        a = t(700785),
        r = t(427679),
        l = t(157925),
        o = t(981631),
        c = t(71080),
        u = t(689938);
      function d(n, e, t, i) {
        let a = e[0],
          r = s.ZP.getName(n, t, a),
          l = null != i ? i : e.length;
        return 1 === l && null != a
          ? r
          : null == a
            ? u.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : u.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: r,
                count: l - 1,
              });
      }
      function _(n, e) {
        switch (n) {
          case c.aC.OWNER:
            return u.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case c.aC.ADMINISTRATOR:
            return u.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case c.aC.MEMBER:
          case c.aC.ROLE:
            return e
              ? u.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : u.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case c.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(n) {
        let e = r.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: a.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return r;
        },
        Ix: function () {
          return l;
        },
        me: function () {
          return a;
        },
      });
      var i = t(544891),
        s = t(981631);
      async function a(n, e, t, a, r) {
        return (
          await i.tn.post({
            url: s.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: r,
              send_start_notification: a,
            },
          })
        ).body;
      }
      async function r(n, e, t) {
        return (
          await i.tn.patch({
            url: s.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function l(n) {
        return i.tn.del(s.ANM.STAGE_INSTANCE(n));
      }
    },
    548841: function (n, e, t) {
      t.r(e);
      var i = t(735250);
      t(470079);
      var s = t(481060),
        a = t(287734),
        r = t(313201),
        l = t(471253),
        o = t(939863),
        c = t(689938),
        u = t(630489);
      e.default = (n) => {
        let { channel: e, ...t } = n,
          d = (0, r.Dt)();
        return (0, i.jsxs)(s.ConfirmModal, {
          confirmText: c.Z.Messages.END_STAGE,
          cancelText: c.Z.Messages.CANCEL,
          onConfirm: () => {
            (0, l.NZ)(e), a.default.disconnect();
          },
          confirmButtonColor: s.Button.Colors.RED,
          bodyClassName: u.body,
          ...t,
          children: [
            (0, i.jsx)(o.Z, {
              className: u.headerIconContainer,
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
              id: d,
              variant: "heading-xl/semibold",
              color: "header-primary",
              className: u.title,
              children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE,
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: u.subtitle,
              children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE,
            }),
          ],
        });
      };
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
        a = t.n(s),
        r = t(689938),
        l = t(843117),
        o = t(296507),
        c = t(866402);
      function u(n) {
        let { className: e, children: t } = n;
        return (0, i.jsxs)("div", {
          className: a()(l.container, e),
          children: [
            (0, i.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: a()(l.sparkleIcon, l.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: a()(l.sparkleIcon, l.sparkleTop),
            }),
          ],
        });
      }
    },
    630489: function (n, e, t) {
      n.exports = {
        body: "body_fc08d1",
        headerIconContainer: "headerIconContainer_fc08d1",
        iconBackground: "iconBackground_fc08d1",
        headerIcon: "headerIcon_fc08d1",
        title: "title_fc08d1",
        subtitle: "subtitle_fc08d1",
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
//# sourceMappingURL=0f4ee1767a183e2fc77c.js.map
