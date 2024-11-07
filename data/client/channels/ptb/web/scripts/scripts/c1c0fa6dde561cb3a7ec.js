"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44378"],
  {
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return y;
        },
        Ef: function () {
          return v;
        },
        HO: function () {
          return C;
        },
        NZ: function () {
          return w;
        },
        Pq: function () {
          return O;
        },
        Q1: function () {
          return A;
        },
        RK: function () {
          return I;
        },
        _0: function () {
          return p;
        },
        hz: function () {
          return N;
        },
        yi: function () {
          return S;
        },
      });
      var i = e(512722),
        u = e.n(i),
        l = e(149765),
        r = e(544891),
        a = e(493683);
      e(749210);
      var c = e(911969),
        d = e(367907),
        o = e(944486),
        s = e(979651),
        _ = e(700785),
        f = e(922482),
        E = e(192079),
        T = e(706058),
        h = e(590415),
        g = e(981631);
      function A(n, t) {
        let e = n.getGuildId();
        return (
          u()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          r.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function p(n, t) {
        let e = n.getGuildId();
        return (
          u()(null != e, "This channel cannot be guildless."),
          r.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e, t),
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
        u()(null != i, "This channel cannot be guildless.");
        let l = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, h.gf)(l) === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(g.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          r.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function S(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          u()(null != t, "This channel cannot be guildless."),
          r.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function y(n, t, e) {
        let i = n.getGuildId();
        return (
          u()(null != i, "This channel cannot be guildless."),
          r.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function N(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          u()(null != e, "This channel cannot be guildless."),
          y(t, n.id, !0),
          r.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function O(n, t, e) {
        let i = n.getGuildId();
        u()(null != i, "Channel cannot be guildless");
        let r = n.permissionOverwrites[i],
          d = { id: i, type: c.BN.ROLE, allow: _.Hn, deny: _.Hn, ...r };
        e
          ? ((d.allow = l.IH(d.allow, t)), (d.deny = l.Od(d.deny, t)))
          : ((d.allow = l.Od(d.allow, t)), (d.deny = l.IH(d.deny, t))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function C(n, t, e, i) {
        if ("" === t) return;
        o.Z.getVoiceChannelId() !== n.id && (0, f.TM)(n);
        let u = await (0, T.me)(n.id, t, e, i);
        return I(n, !1, !0), u;
      }
      async function v(n, t, e) {
        if ("" !== t) return await (0, T.Dk)(n.id, t, e);
      }
      async function w(n) {
        await (0, T.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return s;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return f;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        u = e(5192),
        l = e(700785),
        r = e(427679),
        a = e(157925),
        c = e(981631),
        d = e(71080),
        o = e(388032);
      function s(n, t, e, i) {
        let l = t[0],
          r = u.ZP.getName(n, e, l),
          a = null != i ? i : t.length;
        return 1 === a && null != l
          ? r
          : null == l
            ? o.intl.formatToPlainString(o.t.chmM9P, { count: a })
            : o.intl.formatToPlainString(o.t.GhkJ29, { name: r, count: a - 1 });
      }
      function _(n, t) {
        switch (n) {
          case d.aC.OWNER:
            return o.intl.string(o.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return o.intl.string(o.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return t ? o.intl.string(o.t.Hw3XW1) : o.intl.string(o.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function f(n) {
        let t = r.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(c.Plq.REQUEST_TO_SPEAK, n)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return r;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return l;
        },
      });
      var i = e(544891),
        u = e(981631);
      async function l(n, t, e, l, r) {
        return (
          await i.tn.post({
            url: u.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: r,
              send_start_notification: l,
            },
          })
        ).body;
      }
      async function r(n, t, e) {
        return (
          await i.tn.patch({
            url: u.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function a(n) {
        return i.tn.del(u.ANM.STAGE_INSTANCE(n));
      }
    },
    623633: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = e(442837),
        u = e(592125),
        l = e(944486);
      function r() {
        return (0, i.e7)([l.Z, u.Z], () => {
          let n = l.Z.getVoiceChannelId();
          if (null != n) {
            let t = u.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    407475: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=c1c0fa6dde561cb3a7ec.js.map
