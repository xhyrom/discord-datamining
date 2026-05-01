"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25717"],
  {
    242644(e, o, c) {
      c.d(o, { V: () => i });
      var r = c(627968);
      c(64700);
      let t =
        "https://cdn.discordapp.com/assets/content/bee5073bff85cffaf0f4236456029b067925cd9de6742c5bb582f0ce39f1fa49.riv";
      var a = c(502377),
        n = c(799226);
      let d = {
        "Icon Unlock": {
          reducedMotion: "boolean",
          locked: "boolean",
          fill: "color",
        },
      };
      function i(e) {
        let { artboard: o = "Icon Unlock", stateMachine: c, ...i } = e,
          { status: s, buffer: f } = (0, n.CE)(t),
          l = (0, n.m2)(t);
        return s === n.BW.Loading
          ? null
          : (0, r.jsx)(a.w, {
              ...(l ? { key: "override" } : {}),
              buffer: f,
              artboard: o,
              stateMachine: c,
              artboardProperties: d,
              ...i,
            });
      }
      i.riveSrc = t;
    },
  },
]);
//# sourceMappingURL=25717.9e479fa30a65c498.js.map
