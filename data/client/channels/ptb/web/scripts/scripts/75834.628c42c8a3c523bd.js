"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75834"],
  {
    869180(e, l, t) {
      t.d(l, { L: () => a, a: () => i });
      let a = (0, t(600975).C)({
        kind: "guild",
        id: "2026-01_voice_channel_duration_mobile",
        label: "Voice Channel Duration (Mobile)",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Display the duration next to the Voice Channel",
            config: { enabled: !0 },
          },
        ],
      });
      function i(e, l) {
        return a.useExperiment({ guildId: e, location: l }).enabled;
      }
    },
    725613(e, l, t) {
      t.d(l, { A: () => f });
      var a = t(478437),
        i = t(574381),
        n = t(17928),
        s = t(228366),
        r = t(446458),
        o = t(927813),
        d = t(869180);
      let c = new Set(),
        h = {};
      function u(e) {
        return new Date(e * o.A.Millis.SECOND).getTime();
      }
      function C() {
        c.clear();
      }
      function E(e) {
        c.delete(e.guild.id);
      }
      class N extends n.Ay.Store {
        initialize() {
          this.waitFor(r.A);
        }
        static displayName = "VoiceChannelStartTimeStore";
        getStartTime(e) {
          if (null != e && null != e.guild_id && e.type === a.r.GUILD_VOICE)
            return h[e.guild_id]?.[e.id];
        }
        hasRequestedStartTimes(e) {
          return c.has(e);
        }
      }
      let f = new N(s.h, {
        GUILD_CREATE: E,
        GUILD_DELETE: E,
        CONNECTION_RESUMED: C,
        CONNECTION_OPEN: C,
        VOICE_CHANNEL_START_TIME_UPDATE: function (e) {
          let { guildId: l, id: t, voiceStartTime: a } = e,
            n = d.L.getCurrentConfig({
              guildId: l,
              location: "VoiceChannelStartTimeStore",
            }).enabled;
          if (((0, i.un)() || (0, i.m0)()) && !n) return !1;
          null == h[l] && (h[l] = {}), (h[l][t] = null != a ? u(a) : void 0);
        },
        CHANNEL_INFO: function (e) {
          let { guildId: l, channels: t } = e;
          for (let { id: e, voiceStartTime: a } of ((h[l] = {}), t))
            h[l][e] = null != a ? u(a) : void 0;
        },
        FETCH_CHANNEL_INFO: function (e) {
          let { guildId: l } = e;
          c.add(l);
        },
      });
    },
    440971(e, l, t) {
      t.d(l, { R: () => r });
      var a = t(627968);
      t(64700);
      var i = t(661531),
        n = t(996682),
        s = t(27989);
      let r = (e) => {
        let {
            size: l = "md",
            width: t,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          h = (0, s.J)(l),
          u = h?.width ?? t,
          C = h?.height ?? r;
        return (0, a.jsxs)("svg", {
          ...(0, n.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: u,
          height: C,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M22.07 3.29 18.68 7h2.82c.28 0 .5.23.5.5v1a.5.5 0 0 1-.5.5h-5.33a.5.5 0 0 1-.5-.5v-1a1 1 0 0 1 .21-.63l1.1-1.38 1.99-2.5H16.5a.5.5 0 0 1-.5-.5V1.5c0-.28.22-.5.5-.5h5.33c.28 0 .5.22.5.5v1.11a1 1 0 0 1-.26.68Z",
              className: d,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M19 11.5a.5.5 0 0 0-.5-.5h-2.33a2.5 2.5 0 0 1-2.5-2.5v-1a3 3 0 0 1 .65-1.87l.48-.6c.18-.23.12-.57-.08-.78a2.5 2.5 0 0 1-.7-1.49.94.94 0 0 0-.07-.24 2 2 0 0 0-3.87-.07.62.62 0 0 1-.39.44A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .67.34 1.29.95 1.56 1.31.6 4 1.51 8.05 1.51 4.05 0 6.74-.91 8.05-1.5.61-.28.95-.9.95-1.57v-.28a3 3 0 0 0-.77-2l-1.1-1.23a.5.5 0 0 1-.13-.33v-.09ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z",
              className: d,
            }),
          ],
        });
      };
    },
    506803(e, l, t) {
      t.d(l, { N: () => r });
      var a = t(627968);
      t(64700);
      var i = t(661531),
        n = t(996682),
        s = t(27989);
      let r = (e) => {
        let {
            size: l = "md",
            width: t,
            height: r,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          h = (0, s.J)(l),
          u = h?.width ?? t,
          C = h?.height ?? r;
        return (0, a.jsxs)("svg", {
          ...(0, n.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: u,
          height: C,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M11.55 14.4c.28.17.62.17.9 0 1.6-.96 6.88-4.46 6.88-8.57A3.83 3.83 0 0 0 15.5 2c-1.56 0-2.58.6-3.5 1.5A4.66 4.66 0 0 0 8.5 2a3.83 3.83 0 0 0-3.83 3.83c0 4.1 5.29 7.61 6.88 8.57Z",
              className: d,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M3.11 14.86a1 1 0 0 0-.83 1.24l.23.89a6 6 0 0 0 6.46 4.45l2.03-.22V22a1 1 0 1 0 2 0v-.78l2.03.22A6 6 0 0 0 21.5 17l.23-.89a1 1 0 0 0-.83-1.24l-2.05-.29a6 6 0 0 0-6.1 3.07L12 19l-.74-1.36a6 6 0 0 0-6.1-3.07l-2.05.29ZM2.93 9.4a.6.6 0 0 1 1.14 0l.1.25a2 2 0 0 0 1.18 1.19l.25.1a.6.6 0 0 1 0 1.13l-.25.1a2 2 0 0 0-1.19 1.18l-.1.25a.6.6 0 0 1-1.13 0l-.1-.25a2 2 0 0 0-1.18-1.19l-.25-.1a.6.6 0 0 1 0-1.13l.25-.1a2 2 0 0 0 1.19-1.18l.1-.25ZM21.46 9.82a.49.49 0 0 0-.92 0v.03a2 2 0 0 1-1.19 1.18l-.03.01a.49.49 0 0 0 0 .92h.03a2 2 0 0 1 1.18 1.19l.01.03c.16.43.76.43.92 0v-.03a2 2 0 0 1 1.19-1.18l.03-.01a.49.49 0 0 0 0-.92h-.03a2 2 0 0 1-1.18-1.19l-.01-.03Z",
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=75834.628c42c8a3c523bd.js.map
