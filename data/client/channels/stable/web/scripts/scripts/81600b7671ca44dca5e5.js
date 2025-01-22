"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80606"],
  {
    905423: function (l, n, e) {
      var u = e(512969),
        t = e(65400),
        a = e(731965),
        d = e(893607),
        r = e(981631);
      function i(l) {
        let n = (0, u.LX)(null != l ? l : "", {
          path: r.Z5c.CHANNEL(
            d.Hw.guildId(),
            d.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: l, channelId: e } = n.params;
          return {
            guildId: l === r.ME ? null : l,
            channelId: null != e ? e : null,
          };
        }
        let e = (0, u.LX)(null != l ? l : "", {
          path: r.Z5c.GUILD_BOOSTING_MARKETING(d.Hw.guildId()),
        });
        return null != e
          ? { guildId: e.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      n.Z = (0, t.F)((l) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: e, channelId: u } = i(n);
          (0, a.j)(() => l({ path: n, guildId: e, channelId: u }));
        },
        resetPath(n) {
          let { guildId: e, channelId: u } = i(n);
          (0, a.j)(() =>
            l({ path: null, guildId: e, channelId: u, basePath: n }),
          );
        },
      }));
    },
    977059: function (l, n, e) {
      e.d(n, {
        R: function () {
          return a;
        },
        S: function () {
          return t;
        },
      });
      let u = (0, e(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function t(l) {
        let { location: n } = l;
        return u.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function a(l) {
        let { location: n } = l;
        return u.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
  },
]);
//# sourceMappingURL=81600b7671ca44dca5e5.js.map
