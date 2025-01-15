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
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return N;
        },
        Ef: function () {
          return C;
        },
        HO: function () {
          return S;
        },
        NZ: function () {
          return v;
        },
        Pq: function () {
          return y;
        },
        Q1: function () {
          return g;
        },
        RK: function () {
          return m;
        },
        _0: function () {
          return I;
        },
        hz: function () {
          return b;
        },
        yi: function () {
          return A;
        },
      });
      var r = e(512722),
        i = e.n(r),
        l = e(149765),
        o = e(544891),
        c = e(493683);
      e(749210);
      var a = e(911969),
        s = e(367907),
        u = e(944486),
        d = e(979651),
        _ = e(700785),
        h = e(922482),
        f = e(192079),
        E = e(706058),
        T = e(590415),
        p = e(981631);
      function g(n, t) {
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          t && (0, s.yw)(p.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(n) }),
          o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function I(n, t) {
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function m(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null == n ? void 0 : n.getGuildId();
        i()(null != r, "This channel cannot be guildless.");
        let l = d.Z.getVoiceStateForChannel(n.id);
        return (
          (0, T.gf)(l) === T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, s.yw)(p.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(n) }),
          o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(r),
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
      function A(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(t),
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
      function N(n, t, e) {
        let r = n.getGuildId();
        return (
          i()(null != r, "This channel cannot be guildless."),
          o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(r, t),
            body: { suppress: e, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function b(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          N(t, n.id, !0),
          o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e, n.id),
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
      function y(n, t, e) {
        let r = n.getGuildId();
        i()(null != r, "Channel cannot be guildless");
        let o = n.permissionOverwrites[r],
          s = { id: r, type: a.BN.ROLE, allow: _.Hn, deny: _.Hn, ...o };
        e
          ? ((s.allow = l.IH(s.allow, t)), (s.deny = l.Od(s.deny, t)))
          : ((s.allow = l.Od(s.allow, t)), (s.deny = l.IH(s.deny, t))),
          c.Z.updatePermissionOverwrite(n.id, s);
      }
      async function S(n, t, e, r) {
        if ("" === t) return;
        u.Z.getVoiceChannelId() !== n.id && (0, h.TM)(n);
        let i = await (0, E.me)(n.id, t, e, r);
        return m(n, !1, !0), i;
      }
      async function C(n, t, e) {
        if ("" !== t) return await (0, E.Dk)(n.id, t, e);
      }
      async function v(n) {
        await (0, E.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return d;
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
      var r = e(19780),
        i = e(5192),
        l = e(700785),
        o = e(427679),
        c = e(157925),
        a = e(981631),
        s = e(71080),
        u = e(388032);
      function d(n, t, e, r) {
        let l = t[0],
          o = i.ZP.getName(n, e, l),
          c = null != r ? r : t.length;
        return 1 === c && null != l
          ? o
          : null == l
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: c })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: o, count: c - 1 });
      }
      function _(n, t) {
        switch (n) {
          case s.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
          case s.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
          case s.aC.MEMBER:
          case s.aC.ROLE:
            return t ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
          case s.aC.EMPTY_STATE:
        }
        return null;
      }
      function h(n) {
        let t = o.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: r.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(a.Plq.REQUEST_TO_SPEAK, n)
            ? c.BM.EVERYONE
            : c.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return o;
        },
        Ix: function () {
          return c;
        },
        me: function () {
          return l;
        },
      });
      var r = e(544891),
        i = e(981631);
      async function l(n, t, e, l, o) {
        return (
          await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: o,
              send_start_notification: l,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function o(n, t, e) {
        return (
          await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function c(n) {
        return r.tn.del({ url: i.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    548841: function (n, t, e) {
      e.r(t);
      var r = e(200651);
      e(192379);
      var i = e(481060),
        l = e(287734),
        o = e(313201),
        c = e(471253),
        a = e(939863),
        s = e(388032),
        u = e(854437);
      t.default = (n) => {
        let { channel: t, ...e } = n,
          d = (0, o.Dt)();
        return (0, r.jsxs)(i.ConfirmModal, {
          confirmText: s.intl.string(s.t.saZaRU),
          cancelText: s.intl.string(s.t["ETE/oK"]),
          onConfirm: () => {
            (0, c.NZ)(t), l.default.disconnect();
          },
          confirmButtonColor: i.Button.Colors.RED,
          bodyClassName: u.body,
          ...e,
          children: [
            (0, r.jsx)(a.Z, {
              className: u.headerIconContainer,
              children: (0, r.jsx)("div", {
                className: u.iconBackground,
                children: (0, r.jsx)(i.StageXIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                  className: u.headerIcon,
                }),
              }),
            }),
            (0, r.jsx)(i.Heading, {
              id: d,
              variant: "heading-xl/semibold",
              color: "header-primary",
              className: u.title,
              children: s.intl.string(s.t.xrYNBA),
            }),
            (0, r.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: u.subtitle,
              children: s.intl.string(s.t.TP1D8v),
            }),
          ],
        });
      };
    },
    939863: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(120356),
        l = e.n(i),
        o = e(388032),
        c = e(730995),
        a = e(296507),
        s = e(866402);
      function u(n) {
        let { className: t, children: e } = n;
        return (0, r.jsxs)("div", {
          className: l()(c.container, t),
          children: [
            (0, r.jsx)("img", {
              alt: o.intl.string(o.t.VoB8OT),
              src: s,
              className: l()(c.sparkleIcon, c.sparkleBottom),
            }),
            e,
            (0, r.jsx)("img", {
              alt: o.intl.string(o.t.VoB8OT),
              src: a,
              className: l()(c.sparkleIcon, c.sparkleTop),
            }),
          ],
        });
      }
    },
    854437: function (n, t, e) {
      n.exports = {
        body: "body_fc08d1",
        headerIconContainer: "headerIconContainer_fc08d1",
        iconBackground: "iconBackground_fc08d1",
        headerIcon: "headerIcon_fc08d1",
        title: "title_fc08d1",
        subtitle: "subtitle_fc08d1",
      };
    },
    730995: function (n, t, e) {
      n.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=8331e1735d15a0c6ee2a.js.map
