"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98356"],
  {
    347951(e, t, l) {
      l.d(t, { Fi: () => E, Ig: () => h, Wr: () => n });
      var a = l(17928),
        s = l(610136),
        c = l(576705),
        i = l(652215);
      function E(e) {
        return (0, a.bG)(
          [c.A],
          () => null != e && c.A.can(i.xBc.MANAGE_GUILD, e),
          [e],
        );
      }
      function n(e) {
        let t = (0, a.bG)([s.A], () =>
          null != e ? s.A.getGuildIncident(e.id) : null,
        );
        return (
          e?.features.has(i.GuildFeatures.INVITES_DISABLED) ||
          (t?.invitesDisabledUntil != null &&
            new Date(t.invitesDisabledUntil) > new Date())
        );
      }
      function h(e) {
        let t = E(e),
          l = n(e);
        return t && l;
      }
    },
    225315(e, t, l) {
      l.d(t, {
        Fy: () => E,
        Vv: () => h,
        Xx: () => r,
        i4: () => d,
        oZ: () => n,
        ry: () => i,
      });
      var a = l(636537),
        s = l(228366),
        c = l(652215);
      let i = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          s.h.dispatch({
            type: "WELCOME_SCREEN_VIEW",
            guildId: e,
            isLurking: t,
          });
        },
        E = async (e) => {
          s.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
          try {
            let t = await a.Bo.get({
              url: c.Rsh.GUILD_WELCOME_SCREEN(e),
              oldFormErrors: !0,
              rejectWithError: !0,
            });
            return (
              s.h.dispatch({
                type: "WELCOME_SCREEN_FETCH_SUCCESS",
                guildId: e,
                welcomeScreen: t.body,
              }),
              t.body
            );
          } catch (e) {
            s.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
          }
        },
        n = () => {
          s.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
        },
        h = () => {
          s.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
        },
        r = (e) => {
          s.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
        },
        d = async (e, t) => {
          s.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
          try {
            let l = await a.Bo.patch({
              url: c.Rsh.GUILD_WELCOME_SCREEN(e),
              body: {
                description: t.description,
                welcome_channels: t.channels,
                enabled: t.enabled,
              },
              oldFormErrors: !0,
              rejectWithError: !0,
            });
            s.h.dispatch({
              type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
              guildId: e,
              welcomeScreen: l.body,
            });
          } catch (e) {
            s.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
          }
        };
    },
    684407(e, t, l) {
      l.d(t, { A: () => C, E: () => c });
      var a = l(17928),
        s = l(228366);
      let c = {},
        i = {},
        E = {},
        n = !1,
        h = !1,
        r = !1;
      function d(e) {
        let { guild: t } = e.invite;
        return t?.welcome_screen != null && ((i[t.id] = t.welcome_screen), !0);
      }
      function o(e) {
        let { welcomeScreen: t, guildId: l } = e;
        i[l] = t ?? c;
      }
      class _ extends a.Ay.Store {
        static displayName = "WelcomeScreenStore";
        get(e) {
          if (null != e) return i[e];
        }
        isFetching() {
          return h;
        }
        hasError() {
          return r;
        }
        hasSeen(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return null != e && (t ? n : E[e] || !1);
        }
        isEmpty(e) {
          if (null == e) return !0;
          let t = i[e];
          return null == t || 0 === t.welcome_channels.length;
        }
      }
      let C = new _(s.h, {
        INVITE_RESOLVE_SUCCESS: d,
        INVITE_ACCEPT_SUCCESS: d,
        WELCOME_SCREEN_SUBMIT_SUCCESS: o,
        WELCOME_SCREEN_UPDATE: o,
        WELCOME_SCREEN_VIEW: function (e) {
          let { guildId: t, isLurking: l } = e;
          (E[t] = !0), l && (n = !0);
        },
        GUILD_STOP_LURKING: function () {
          n = !1;
        },
        GUILD_DELETE: function (e) {
          let {
            guild: { id: t },
          } = e;
          E[t] = !1;
        },
        WELCOME_SCREEN_FETCH_START: function () {
          (h = !0), (r = !1);
        },
        WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
          (h = !1), (r = !1);
          let { welcomeScreen: t, guildId: l } = e;
          i[l] = t ?? c;
        },
        WELCOME_SCREEN_FETCH_FAIL: function () {
          (h = !1), (r = !0);
        },
      });
    },
    532804(e, t, l) {
      l.d(t, { Q: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsx)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            fillRule: "evenodd",
            d: "M10.95 1.43a1.5 1.5 0 0 1 2.1 0l5.49 5.33c.3.29.46.68.46 1.1v8.44c-.04.35-.2.69-.46.94l-5.49 5.33-.11.1a1.5 1.5 0 0 1-2-.1l-5.48-5.33c-.3-.29-.46-.68-.46-1.1V7.86c0-.42.17-.81.46-1.1l5.49-5.33ZM7.33 7.77c-.2.2-.31.46-.31.74v6.98c0 .28.11.54.3.73l3.98 3.86a1 1 0 0 0 1.4 0l3.97-3.85c.2-.2.3-.46.3-.74V8.51c0-.28-.1-.54-.3-.74L12.7 3.92a1 1 0 0 0-1.4 0L7.33 7.77Z",
            clipRule: "evenodd",
            className: h,
          }),
        });
      };
    },
    279449(e, t, l) {
      l.d(t, { d: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsxs)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M11.65 6.35 9.29 8.71a1 1 0 0 0-.29.7v5.18c0 .26.1.52.3.7l2.35 2.36c.2.2.5.2.7 0l2.36-2.36a1 1 0 0 0 .29-.7V9.4a1 1 0 0 0-.3-.7l-2.35-2.36a.5.5 0 0 0-.7 0Z",
              className: h,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              fillRule: "evenodd",
              d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4ZM7.32 6.95 12 3.12l4.68 3.83c.07.06.32.4.32 1.05v8c0 .65-.25 1-.32 1.05L12 20.88l-4.68-3.83C7.25 16.99 7 16.65 7 16V8c0-.65.25-1 .32-1.05Z",
              clipRule: "evenodd",
              className: h,
            }),
          ],
        });
      };
    },
    899784(e, t, l) {
      l.d(t, { _: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsxs)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M13.19 2.5c.29-.24.35-.7.06-.94l-.2-.16a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16v-3.5c0-.28-.23-.5-.5-.54-.2-.03-.4-.08-.6-.15-.4-.14-.9.12-.9.54V16c0 .65-.25 1-.32 1.05l-4.36 3.57a.5.5 0 0 1-.64 0l-4.36-3.57C7.25 16.99 7 16.65 7 16V8c0-.65.25-1 .32-1.05l4.52-3.7c.1-.07.23-.07.32 0 .12.1.3.06.39-.07.17-.25.38-.49.64-.69Z",
              className: h,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "m9.3 8.7 2.35-2.35c.2-.2.5-.2.7 0l2.36 2.36a1 1 0 0 1 .29.7v5.18a1 1 0 0 1-.3.7l-2.35 2.36a.5.5 0 0 1-.7 0l-2.36-2.36a1 1 0 0 1-.29-.7V9.4a1 1 0 0 1 .3-.7ZM17.86.8a1.21 1.21 0 0 1 2.28 0l.5 1.37a2 2 0 0 0 1.19 1.18l1.38.51a1.21 1.21 0 0 1 0 2.28l-1.38.5a2 2 0 0 0-1.18 1.19l-.51 1.38a1.21 1.21 0 0 1-2.28 0l-.5-1.38a2 2 0 0 0-1.19-1.18l-1.38-.51a1.21 1.21 0 0 1 0-2.28l1.38-.5a2 2 0 0 0 1.18-1.19l.51-1.38Z",
              className: h,
            }),
          ],
        });
      };
    },
    194117(e, t, l) {
      l.d(t, { f: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsx)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 0 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H3Z",
            fill: "string" == typeof n ? n : n.css,
            className: h,
          }),
        });
      };
    },
    184940(e, t, l) {
      l.d(t, { _: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsx)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z",
            className: h,
          }),
        });
      };
    },
    97893(e, t, l) {
      l.d(t, { Z: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsx)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof n ? n : n.css,
            d: "M1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z",
            className: h,
          }),
        });
      };
    },
    626900(e, t, l) {
      l.d(t, { E: () => E });
      var a = l(627968);
      l(64700);
      var s = l(661531),
        c = l(996682),
        i = l(27989);
      let E = (e) => {
        let {
            size: t = "md",
            width: l,
            height: E,
            color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...r
          } = e,
          d = (0, i.J)(t),
          o = d?.width ?? l,
          _ = d?.height ?? E;
        return (0, a.jsxs)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: _,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M11.9 9.16c-.54 0-.98.22-1.33.67a2.66 2.66 0 0 0-.53 1.71c0 .57.12 1.01.35 1.32.24.31.6.47 1.04.47.54 0 .99-.22 1.34-.67.35-.45.53-1.02.53-1.73 0-.57-.12-1.01-.36-1.31a1.22 1.22 0 0 0-1.03-.47v.01Z",
              className: h,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof n ? n : n.css,
              d: "M20.3 5.41h-.38c-.84 0-1.52-.65-1.52-1.46v-.3c0-.9-.77-1.65-1.71-1.65H7.3c-.94 0-1.7.74-1.7 1.65v.3c0 .81-.69 1.46-1.53 1.46H3.7c-.94 0-1.7.73-1.7 1.64v4.01c.05 3.11.94 4.69 2.92 6.63 1.8 1.77 6.65 4.31 7.06 4.31.42 0 5.28-2.54 7.07-4.31 1.98-1.95 2.92-3.53 2.92-6.63L22 7.05c0-.9-.76-1.64-1.7-1.64Zm-2.2 7.1a3.4 3.4 0 0 1-3.21 2.15 1.7 1.7 0 0 1-1.08-.33 1.3 1.3 0 0 1-.5-.84c-.2.35-.5.64-.91.86-.43.21-.89.31-1.39.31-.78 0-1.4-.27-1.88-.81a3.35 3.35 0 0 1-.69-2.24c0-.74.14-1.39.41-1.96.3-.57.68-1.01 1.17-1.32a3.05 3.05 0 0 1 1.7-.48c.49 0 .89.09 1.2.28.33.19.57.44.73.75l.15-.44a.56.56 0 0 1 .53-.38h.25c.34 0 .6.3.56.64l-.52 3.79a1.1 1.1 0 0 0-.02.22c0 .46.19.69.58.69.33 0 .64-.13.92-.4.3-.27.53-.64.69-1.11a4.5 4.5 0 0 0 .26-1.59c0-.87-.2-1.64-.6-2.29A3.98 3.98 0 0 0 14.8 6.5a5.49 5.49 0 0 0-2.45-.53 5.9 5.9 0 0 0-2.88.7 5.04 5.04 0 0 0-2 1.98 5.9 5.9 0 0 0-.75 2.99c0 .93.18 1.78.53 2.54.35.75.91 1.35 1.68 1.81.78.45 1.77.67 2.97.67a9.24 9.24 0 0 0 3.42-.65c.3-.13.67-.01.8.29l.1.24c.13.26.04.57-.22.7a7.7 7.7 0 0 1-1.66.56c-.83.19-1.7.28-2.56.28a7.42 7.42 0 0 1-3.72-.86 5.27 5.27 0 0 1-2.22-2.29 7.36 7.36 0 0 1-.72-3.29c0-1.44.32-2.7.96-3.75A6.5 6.5 0 0 1 8.7 5.44a7.8 7.8 0 0 1 3.65-.86c1.22 0 2.3.24 3.26.72.96.47 1.7 1.13 2.22 1.99.53.85.79 1.83.79 2.93a5.5 5.5 0 0 1-.48 2.34l-.03-.05Z",
              className: h,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=98356.7a484d7324f70b54.js.map
