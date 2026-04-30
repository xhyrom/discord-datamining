"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13681"],
  {
    289704(a, e, c) {
      c.d(e, { E: () => n });
      var r = c(627968);
      c(64700);
      let t =
        "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
      var d = c(502377),
        o = c(799226);
      let i = {
        Game_Server_Hosting_Main: { reducedMotion: "boolean" },
        c_chara_5: {},
        hytale_gameplay: { reducedMotion: "boolean" },
        c_chara_1: {},
        c_chara_4: {},
        c_chara_2: {},
        c_chara_3: {},
      };
      function n(a) {
        let {
            artboard: e = "Game_Server_Hosting_Main",
            stateMachine: c,
            ...n
          } = a,
          { status: _, buffer: s } = (0, o.CE)(t),
          h = (0, o.m2)(t);
        return _ === o.BW.Loading
          ? null
          : (0, r.jsx)(d.w, {
              ...(h ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: c,
              artboardProperties: i,
              ...n,
            });
      }
      n.riveSrc = t;
    },
  },
]);
//# sourceMappingURL=13681.33e333bfd2e1169f.js.map
