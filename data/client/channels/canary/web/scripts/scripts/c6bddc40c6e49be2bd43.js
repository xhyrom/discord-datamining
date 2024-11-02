"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68038"],
  {
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return S;
        },
        Ef: function () {
          return N;
        },
        HO: function () {
          return y;
        },
        NZ: function () {
          return O;
        },
        Pq: function () {
          return v;
        },
        Q1: function () {
          return T;
        },
        RK: function () {
          return I;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return C;
        },
        yi: function () {
          return b;
        },
      });
      var i = t(512722),
        c = t.n(i),
        r = t(149765),
        a = t(544891),
        l = t(493683);
      t(749210);
      var u = t(911969),
        o = t(367907),
        d = t(944486),
        s = t(979651),
        _ = t(700785),
        p = t(922482),
        h = t(192079),
        E = t(706058),
        g = t(590415),
        f = t(981631);
      function T(n, e) {
        let t = n.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          e && (0, o.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, h.s$)(n) }),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function A(n, e) {
        let t = n.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
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
      function I(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        c()(null != i, "This channel cannot be guildless.");
        let r = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, g.gf)(r) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, o.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, h.s$)(n) }),
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
      function b(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          c()(null != e, "This channel cannot be guildless."),
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
      function S(n, e, t) {
        let i = n.getGuildId();
        return (
          c()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function C(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          S(e, n.id, !0),
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
      function v(n, e, t) {
        let i = n.getGuildId();
        c()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          o = { id: i, type: u.BN.ROLE, allow: _.Hn, deny: _.Hn, ...a };
        t
          ? ((o.allow = r.IH(o.allow, e)), (o.deny = r.Od(o.deny, e)))
          : ((o.allow = r.Od(o.allow, e)), (o.deny = r.IH(o.deny, e))),
          l.Z.updatePermissionOverwrite(n.id, o);
      }
      async function y(n, e, t, i) {
        if ("" === e) return;
        d.Z.getVoiceChannelId() !== n.id && (0, p.TM)(n);
        let c = await (0, E.me)(n.id, e, t, i);
        return I(n, !1, !0), c;
      }
      async function N(n, e, t) {
        if ("" !== e) return await (0, E.Dk)(n.id, e, t);
      }
      async function O(n) {
        await (0, E.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return s;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return p;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        c = t(5192),
        r = t(700785),
        a = t(427679),
        l = t(157925),
        u = t(981631),
        o = t(71080),
        d = t(388032);
      function s(n, e, t, i) {
        let r = e[0],
          a = c.ZP.getName(n, t, r),
          l = null != i ? i : e.length;
        return 1 === l && null != r
          ? a
          : null == r
            ? d.intl.formatToPlainString(d.t.chmM9P, { count: l })
            : d.intl.formatToPlainString(d.t.GhkJ29, { name: a, count: l - 1 });
      }
      function _(n, e) {
        switch (n) {
          case o.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
          case o.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
          case o.aC.MEMBER:
          case o.aC.ROLE:
            return e ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
          case o.aC.EMPTY_STATE:
        }
        return null;
      }
      function p(n) {
        let e = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(u.Plq.REQUEST_TO_SPEAK, n)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
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
          return l;
        },
        me: function () {
          return r;
        },
      });
      var i = t(544891),
        c = t(981631);
      async function r(n, e, t, r, a) {
        return (
          await i.tn.post({
            url: c.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: r,
            },
          })
        ).body;
      }
      async function a(n, e, t) {
        return (
          await i.tn.patch({
            url: c.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function l(n) {
        return i.tn.del(c.ANM.STAGE_INSTANCE(n));
      }
    },
    947017: function (n, e, t) {
      n.exports = {
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
    571032: function (n, e, t) {
      n.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    697355: function (n, e, t) {
      n.exports = {
        content: "content_dec63a",
        previewCard: "previewCard_dec63a",
        inline: "inline_dec63a",
        header: "header_dec63a",
        privacyLevel: "privacyLevel_dec63a inline_dec63a",
        buttons: "buttons_dec63a",
        button: "button_dec63a",
        publicIcon: "publicIcon_dec63a",
        spacing: "spacing_dec63a",
        verticalSpacing: "verticalSpacing_dec63a",
        errorMessage: "errorMessage_dec63a",
      };
    },
  },
]);
//# sourceMappingURL=c6bddc40c6e49be2bd43.js.map
