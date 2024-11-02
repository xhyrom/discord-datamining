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
      var i = e(512722),
        r = e.n(i),
        l = e(149765),
        a = e(544891),
        o = e(493683);
      e(749210);
      var c = e(911969),
        s = e(367907),
        u = e(944486),
        d = e(979651),
        _ = e(700785),
        f = e(922482),
        h = e(192079),
        T = e(706058),
        p = e(590415),
        E = e(981631);
      function g(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, s.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, h.s$)(n) }),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function I(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function m(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = d.Z.getVoiceStateForChannel(n.id);
        return (
          (0, p.gf)(l) === p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, s.yw)(E.rMx.PROMOTED_TO_SPEAKER, { ...(0, h.s$)(n) }),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function A(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t),
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
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function b(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          N(t, n.id, !0),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function y(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          s = { id: i, type: c.BN.ROLE, allow: _.Hn, deny: _.Hn, ...a };
        e
          ? ((s.allow = l.IH(s.allow, t)), (s.deny = l.Od(s.deny, t)))
          : ((s.allow = l.Od(s.allow, t)), (s.deny = l.IH(s.deny, t))),
          o.Z.updatePermissionOverwrite(n.id, s);
      }
      async function S(n, t, e, i) {
        if ("" === t) return;
        u.Z.getVoiceChannelId() !== n.id && (0, f.TM)(n);
        let r = await (0, T.me)(n.id, t, e, i);
        return m(n, !1, !0), r;
      }
      async function C(n, t, e) {
        if ("" !== t) return await (0, T.Dk)(n.id, t, e);
      }
      async function v(n) {
        await (0, T.Ix)(n.id);
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
          return f;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        l = e(700785),
        a = e(427679),
        o = e(157925),
        c = e(981631),
        s = e(71080),
        u = e(388032);
      function d(n, t, e, i) {
        let l = t[0],
          a = r.ZP.getName(n, e, l),
          o = null != i ? i : t.length;
        return 1 === o && null != l
          ? a
          : null == l
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: o })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: a, count: o - 1 });
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
      function f(n) {
        let t = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(c.Plq.REQUEST_TO_SPEAK, n)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return o;
        },
        me: function () {
          return l;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function l(n, t, e, l, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: a,
              send_start_notification: l,
            },
          })
        ).body;
      }
      async function a(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function o(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
      }
    },
    548841: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(287734),
        a = e(313201),
        o = e(471253),
        c = e(939863),
        s = e(388032),
        u = e(630489);
      t.default = (n) => {
        let { channel: t, ...e } = n,
          d = (0, a.Dt)();
        return (0, i.jsxs)(r.ConfirmModal, {
          confirmText: s.intl.string(s.t.saZaRU),
          cancelText: s.intl.string(s.t["ETE/oK"]),
          onConfirm: () => {
            (0, o.NZ)(t), l.default.disconnect();
          },
          confirmButtonColor: r.Button.Colors.RED,
          bodyClassName: u.body,
          ...e,
          children: [
            (0, i.jsx)(c.Z, {
              className: u.headerIconContainer,
              children: (0, i.jsx)("div", {
                className: u.iconBackground,
                children: (0, i.jsx)(r.StageXIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                  className: u.headerIcon,
                }),
              }),
            }),
            (0, i.jsx)(r.Heading, {
              id: d,
              variant: "heading-xl/semibold",
              color: "header-primary",
              className: u.title,
              children: s.intl.string(s.t.xrYNBA),
            }),
            (0, i.jsx)(r.Text, {
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
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        a = e(388032),
        o = e(843117),
        c = e(296507),
        s = e(866402);
      function u(n) {
        let { className: t, children: e } = n;
        return (0, i.jsxs)("div", {
          className: l()(o.container, t),
          children: [
            (0, i.jsx)("img", {
              alt: a.intl.string(a.t.VoB8OT),
              src: s,
              className: l()(o.sparkleIcon, o.sparkleBottom),
            }),
            e,
            (0, i.jsx)("img", {
              alt: a.intl.string(a.t.VoB8OT),
              src: c,
              className: l()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    630489: function (n, t, e) {
      n.exports = {
        body: "body_fc08d1",
        headerIconContainer: "headerIconContainer_fc08d1",
        iconBackground: "iconBackground_fc08d1",
        headerIcon: "headerIcon_fc08d1",
        title: "title_fc08d1",
        subtitle: "subtitle_fc08d1",
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
  },
]);
//# sourceMappingURL=5727582e37be000e69d4.js.map
