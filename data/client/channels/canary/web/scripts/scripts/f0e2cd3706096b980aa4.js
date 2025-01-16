"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["351"],
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
        r = e.n(i),
        u = e(149765),
        l = e(544891),
        c = e(493683);
      e(749210);
      var o = e(911969),
        a = e(367907),
        d = e(944486),
        s = e(979651),
        _ = e(700785),
        E = e(922482),
        f = e(192079),
        h = e(706058),
        T = e(590415),
        g = e(981631);
      function A(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, a.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(n) }),
          l.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function p(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          l.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function I(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let u = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, T.gf)(u) === T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, a.yw)(g.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(n) }),
          l.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function S(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function y(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          l.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function N(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          y(t, n.id, !0),
          l.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function O(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let l = n.permissionOverwrites[i],
          a = { id: i, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...l };
        e
          ? ((a.allow = u.IH(a.allow, t)), (a.deny = u.Od(a.deny, t)))
          : ((a.allow = u.Od(a.allow, t)), (a.deny = u.IH(a.deny, t))),
          c.Z.updatePermissionOverwrite(n.id, a);
      }
      async function C(n, t, e, i) {
        if ("" === t) return;
        d.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
        let r = await (0, h.me)(n.id, t, e, i);
        return I(n, !1, !0), r;
      }
      async function v(n, t, e) {
        if ("" !== t) return await (0, h.Dk)(n.id, t, e);
      }
      async function w(n) {
        await (0, h.Ix)(n.id);
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
          return E;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        u = e(700785),
        l = e(427679),
        c = e(157925),
        o = e(981631),
        a = e(71080),
        d = e(388032);
      function s(n, t, e, i) {
        let u = t[0],
          l = r.ZP.getName(n, e, u),
          c = null != i ? i : t.length;
        return 1 === c && null != u
          ? l
          : null == u
            ? d.intl.formatToPlainString(d.t.chmM9P, { count: c })
            : d.intl.formatToPlainString(d.t.GhkJ29, { name: l, count: c - 1 });
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
      function E(n) {
        let t = l.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? c.BM.EVERYONE
            : c.BM.NO_ONE,
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
          return c;
        },
        me: function () {
          return u;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function u(n, t, e, u, l) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: l,
              send_start_notification: u,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function l(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function c(n) {
        return i.tn.del({ url: r.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    623633: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(592125),
        u = e(944486);
      function l() {
        return (0, i.e7)([u.Z, r.Z], () => {
          let n = u.Z.getVoiceChannelId();
          if (null != n) {
            let t = r.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    705197: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=f0e2cd3706096b980aa4.js.map
