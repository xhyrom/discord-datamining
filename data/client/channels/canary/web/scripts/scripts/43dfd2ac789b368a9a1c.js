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
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return N;
        },
        Ef: function () {
          return O;
        },
        HO: function () {
          return y;
        },
        NZ: function () {
          return k;
        },
        Pq: function () {
          return b;
        },
        Q1: function () {
          return g;
        },
        RK: function () {
          return I;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return S;
        },
        yi: function () {
          return m;
        },
      });
      var i = e(512722),
        r = e.n(i),
        l = e(149765),
        c = e(544891),
        o = e(493683);
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
          r()(null != e, "This channel cannot be guildless."),
          t && (0, s.yw)(p.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(n) }),
          c.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function A(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          c.tn.patch({
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
      function I(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = d.Z.getVoiceStateForChannel(n.id);
        return (
          (0, T.gf)(l) === T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, s.yw)(p.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(n) }),
          c.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(i),
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
      function m(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          c.tn.patch({
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
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          c.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function S(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          N(t, n.id, !0),
          c.tn.patch({
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
      function b(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let c = n.permissionOverwrites[i],
          s = { id: i, type: a.BN.ROLE, allow: _.Hn, deny: _.Hn, ...c };
        e
          ? ((s.allow = l.IH(s.allow, t)), (s.deny = l.Od(s.deny, t)))
          : ((s.allow = l.Od(s.allow, t)), (s.deny = l.IH(s.deny, t))),
          o.Z.updatePermissionOverwrite(n.id, s);
      }
      async function y(n, t, e, i) {
        if ("" === t) return;
        u.Z.getVoiceChannelId() !== n.id && (0, h.TM)(n);
        let r = await (0, E.me)(n.id, t, e, i);
        return I(n, !1, !0), r;
      }
      async function O(n, t, e) {
        if ("" !== t) return await (0, E.Dk)(n.id, t, e);
      }
      async function k(n) {
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
      var i = e(19780),
        r = e(5192),
        l = e(700785),
        c = e(427679),
        o = e(157925),
        a = e(981631),
        s = e(71080),
        u = e(388032);
      function d(n, t, e, i) {
        let l = t[0],
          c = r.ZP.getName(n, e, l),
          o = null != i ? i : t.length;
        return 1 === o && null != l
          ? c
          : null == l
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: o })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: c, count: o - 1 });
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
        let t = c.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(a.Plq.REQUEST_TO_SPEAK, n)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return c;
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
      async function l(n, t, e, l, c) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: c,
              send_start_notification: l,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function c(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function o(n) {
        return i.tn.del({ url: r.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    124779: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return d;
          },
        });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(287734),
        c = e(313201),
        o = e(471253),
        a = e(939863),
        s = e(388032),
        u = e(499274);
      function d(n) {
        let { channel: t, transitionState: e, onClose: d } = n,
          _ = (0, c.Dt)();
        function h() {
          l.default.disconnect(), d();
        }
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: e,
          "aria-labelledby": _,
          children: [
            (0, i.jsxs)(r.ModalContent, {
              className: u.content,
              children: [
                (0, i.jsx)(a.Z, {
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
                  id: _,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: u.title,
                  children: s.intl.string(s.t.pADdJi),
                }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: u.subtitle,
                  children: s.intl.string(s.t.mT7jwM),
                }),
              ],
            }),
            (0, i.jsxs)(r.ModalFooter, {
              children: [
                (0, i.jsx)(r.Button, {
                  color: r.Button.Colors.RED,
                  onClick: function () {
                    (0, o.NZ)(t), h();
                  },
                  children: s.intl.string(s.t["sBP/1t"]),
                }),
                (0, i.jsx)(r.Button, {
                  color: r.Button.Colors.PRIMARY,
                  className: u.cancelButton,
                  onClick: h,
                  children: s.intl.string(s.t.xTwqz8),
                }),
              ],
            }),
          ],
        });
      }
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
        c = e(388032),
        o = e(443644),
        a = e(296507),
        s = e(866402);
      function u(n) {
        let { className: t, children: e } = n;
        return (0, i.jsxs)("div", {
          className: l()(o.container, t),
          children: [
            (0, i.jsx)("img", {
              alt: c.intl.string(c.t.VoB8OT),
              src: s,
              className: l()(o.sparkleIcon, o.sparkleBottom),
            }),
            e,
            (0, i.jsx)("img", {
              alt: c.intl.string(c.t.VoB8OT),
              src: a,
              className: l()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    499274: function (n, t, e) {
      n.exports = {
        content: "content_c01927",
        iconBackground: "iconBackground_c01927",
        headerIcon: "headerIcon_c01927",
        title: "title_c01927",
        subtitle: "subtitle_c01927",
        cancelButton: "cancelButton_c01927",
      };
    },
    443644: function (n, t, e) {
      n.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=43dfd2ac789b368a9a1c.js.map
