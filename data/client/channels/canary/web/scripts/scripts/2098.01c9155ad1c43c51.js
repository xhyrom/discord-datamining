"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2098"],
  {
    318729(e, i, t) {
      t.d(i, { _: () => o, p: () => d });
      let n = (0, t(600975).C)({
        kind: "guild",
        id: "2022-12_mention_raid_limit",
        label: "Automod Mention Raid Limit",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Automod Mention Raid Limit",
            config: { enabled: !0 },
          },
        ],
      });
      function d(e) {
        let { enabled: i } = n.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return i;
      }
      function o(e) {
        let i =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: t } = n.useExperiment(
            { guildId: e, location: "988d4e_4" },
            { autoTrackExposure: i },
          );
        return t;
      }
    },
  },
]);
//# sourceMappingURL=2098.01c9155ad1c43c51.js.map
