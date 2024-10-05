"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68038"],
  {
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return O;
        },
        Ef: function () {
          return b;
        },
        HO: function () {
          return C;
        },
        NZ: function () {
          return R;
        },
        Pq: function () {
          return N;
        },
        Q1: function () {
          return g;
        },
        RK: function () {
          return f;
        },
        _0: function () {
          return h;
        },
        hz: function () {
          return M;
        },
        yi: function () {
          return A;
        },
      });
      var i = t(512722),
        c = t.n(i),
        a = t(149765),
        r = t(544891),
        l = t(493683);
      t(749210);
      var u = t(911969),
        d = t(367907),
        o = t(944486),
        _ = t(979651),
        s = t(700785),
        E = t(922482),
        T = t(192079),
        p = t(706058),
        I = t(590415),
        S = t(981631);
      function g(n, e) {
        let t = n.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          e && (0, d.yw)(S.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.s$)(n) }),
          r.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t),
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
          c()(null != t, "This channel cannot be guildless."),
          r.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function f(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        c()(null != i, "This channel cannot be guildless.");
        let a = _.Z.getVoiceStateForChannel(n.id);
        return (
          (0, I.gf)(a) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, d.yw)(S.rMx.PROMOTED_TO_SPEAKER, { ...(0, T.s$)(n) }),
          r.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function A(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          c()(null != e, "This channel cannot be guildless."),
          r.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function O(n, e, t) {
        let i = n.getGuildId();
        return (
          c()(null != i, "This channel cannot be guildless."),
          r.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function M(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          c()(null != t, "This channel cannot be guildless."),
          O(e, n.id, !0),
          r.tn.patch({
            url: S.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(n, e, t) {
        let i = n.getGuildId();
        c()(null != i, "Channel cannot be guildless");
        let r = n.permissionOverwrites[i],
          d = { id: i, type: u.BN.ROLE, allow: s.Hn, deny: s.Hn, ...r };
        t
          ? ((d.allow = a.IH(d.allow, e)), (d.deny = a.Od(d.deny, e)))
          : ((d.allow = a.Od(d.allow, e)), (d.deny = a.IH(d.deny, e))),
          l.Z.updatePermissionOverwrite(n.id, d);
      }
      async function C(n, e, t, i) {
        if ("" === e) return;
        o.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
        let c = await (0, p.me)(n.id, e, t, i);
        return f(n, !1, !0), c;
      }
      async function b(n, e, t) {
        if ("" !== e) return await (0, p.Dk)(n.id, e, t);
      }
      async function R(n) {
        await (0, p.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return _;
        },
        kk: function () {
          return s;
        },
        s$: function () {
          return E;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        c = t(5192),
        a = t(700785),
        r = t(427679),
        l = t(157925),
        u = t(981631),
        d = t(71080),
        o = t(689938);
      function _(n, e, t, i) {
        let a = e[0],
          r = c.ZP.getName(n, t, a),
          l = null != i ? i : e.length;
        return 1 === l && null != a
          ? r
          : null == a
            ? o.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : o.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: r,
                count: l - 1,
              });
      }
      function s(n, e) {
        switch (n) {
          case d.aC.OWNER:
            return o.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case d.aC.ADMINISTRATOR:
            return o.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return e
              ? o.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case d.aC.EMPTY_STATE:
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
          request_to_speak_state: a.Uu(u.Plq.REQUEST_TO_SPEAK, n)
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
        c = t(981631);
      async function a(n, e, t, a, r) {
        return (
          await i.tn.post({
            url: c.ANM.STAGE_INSTANCES,
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
//# sourceMappingURL=d2679edc44c8cc696c8a.js.map
