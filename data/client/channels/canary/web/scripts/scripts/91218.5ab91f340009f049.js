"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91218"],
  {
    684136(e, t, l) {
      l.d(t, { A: () => h });
      var n,
        i = l(627968);
      l(64700);
      var r = l(503698),
        a = l.n(r),
        o = l(607399),
        s = l(939249),
        c = l(285796),
        d = l(789645),
        u = l(985018),
        T = l(589753),
        E =
          (((n = E || {}).DEFAULT = ""),
          (n.BOLD = "Bold"),
          (n.SOLID = "Solid"),
          n);
      function h(e) {
        let { closeAction: t, variant: l = "", keybind: n, className: r } = e;
        return (0, i.jsxs)("div", {
          className: a()(T.kL, r),
          children: [
            (0, i.jsx)(s.D, {
              className: a()(T.b, {
                [T.EH]: "Bold" === l,
                [T.O3]: "Solid" === l,
              }),
              onClick: t,
              "aria-label": u.intl.string(u.t.cpT0Cq),
              children:
                "Solid" === l
                  ? (0, i.jsx)(c.a, {
                      size: "md",
                      color: "currentColor",
                      "aria-hidden": !0,
                    })
                  : (0, i.jsx)(d.P, {
                      size: "sm",
                      color: "currentColor",
                      "aria-hidden": !0,
                    }),
            }),
            o.Fr
              ? null
              : (0, i.jsx)("div", {
                  className: T.P,
                  "aria-hidden": !0,
                  children: n,
                }),
          ],
        });
      }
      h.Variants = E;
    },
    25639(e, t, l) {
      l.d(t, { A: () => C, s: () => s });
      var n,
        i = l(17928),
        r = l(228366),
        a = l(967198),
        o = l(977997),
        s =
          (((n = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
          (n.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
          (n.HIGH_CONTRAST = "HIGH_CONTRAST"),
          n);
      let c = {},
        d = {},
        u = null;
      function T(e) {
        null != d[e] && (clearTimeout(d[e]), delete d[e]);
      }
      function E(e) {
        T(e),
          (d[e] = setTimeout(() => {
            let t = c[e];
            null != t &&
              ((c[e] = { ...t, style: "GENTLE_AMBIENT" }), A.emitChange()),
              delete d[e];
          }, 2e3));
      }
      function h() {
        for (let e of Object.keys(d)) clearTimeout(d[e]);
        (d = {}), (c = {});
      }
      function N() {
        return h(), !0;
      }
      class I extends i.Ay.Store {
        static displayName = "VoiceChannelAnimationStateStore";
        initialize() {
          this.waitFor(o.A, a.A);
        }
        getAnimationStyle(e) {
          return c[e]?.style ?? "GENTLE_AMBIENT";
        }
        getUserCount(e) {
          return c[e]?.userCount ?? 0;
        }
      }
      let A = new I(r.h, {
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              l = a.A.getGuildId();
            l !== u && null != l && (u = l);
            let n = {};
            for (let e of t)
              e.guildId === l &&
                (null != e.oldChannelId &&
                  (n[e.oldChannelId] = (n[e.oldChannelId] ?? 0) - 1),
                null != e.channelId &&
                  (n[e.channelId] = (n[e.channelId] ?? 0) + 1));
            let i = !1;
            for (let [e, t] of Object.entries(n))
              (function (e, t) {
                let l = c[e],
                  n = l?.userCount ?? 0,
                  i = Math.max(0, n + t);
                return 0 === n && i > 0
                  ? ((c[e] = {
                      style: "GENTLE_AMBIENT_WITH_INTRO",
                      userCount: i,
                    }),
                    E(e),
                    !0)
                  : n > 0 && i > n
                    ? ((c[e] = { style: "HIGH_CONTRAST", userCount: i }),
                      E(e),
                      !0)
                    : 0 === i
                      ? (T(e), delete c[e], !0)
                      : null != l &&
                        i !== n &&
                        ((c[e] = { ...l, userCount: i }), !0);
              })(e, t) && (i = !0);
            return i;
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === u || null == t) return !1;
            (u = t), h();
            let l = o.A.getVoiceStates(t),
              n = {};
            for (let e of Object.values(l))
              null != e.channelId &&
                (n[e.channelId] = (n[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(n))
              t > 0 && (c[e] = { style: "GENTLE_AMBIENT", userCount: t });
            return !0;
          },
          CONNECTION_OPEN: N,
          LOGOUT: N,
        }),
        C = A;
    },
    254138(e, t, l) {
      l.d(t, { m: () => o });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        r = l(996682),
        a = l(27989);
      let o = (e) => {
        let {
            size: t = "md",
            width: l,
            height: o,
            color: s = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, a.J)(t),
          T = u?.width ?? l,
          E = u?.height ?? o;
        return (0, n.jsx)("svg", {
          ...(0, r.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: T,
          height: E,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M20.3 5.41h-.39c-.84 0-1.52-.65-1.52-1.46v-.3c0-.9-.77-1.65-1.71-1.65H7.31c-.94 0-1.71.74-1.71 1.65v.3c0 .81-.68 1.46-1.52 1.46H3.7c-.94 0-1.7.73-1.7 1.64v3.52l.01.49c.05 3.11.94 4.69 2.92 6.63C6.72 19.46 11.58 22 11.99 22c.41 0 5.27-2.54 7.06-4.31 1.98-1.95 2.92-3.53 2.92-6.63L22 7.05c0-.9-.76-1.64-1.7-1.64Zm-7.48 5.03c-.18.07-.29.25-.23.44l.6 4.65a.46.46 0 0 1-.45.51h-1.45a.46.46 0 0 1-.45-.51l.6-4.65c.05-.17-.02-.37-.19-.44a2.08 2.08 0 1 1 1.57 0Z",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=91218.5ab91f340009f049.js.map
