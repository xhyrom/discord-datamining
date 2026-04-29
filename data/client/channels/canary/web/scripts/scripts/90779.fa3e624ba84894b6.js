"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90779"],
  {
    583094(r, t, e) {
      e.d(t, { u: () => c });
      var o = e(627968);
      e(64700);
      let a =
        "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
      var i = e(502377),
        s = e(799226);
      let d = {
        "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" },
      };
      function c(r) {
        let { artboard: t = "Nitro Wishlist", stateMachine: e, ...c } = r,
          { status: n, buffer: b } = (0, s.CE)(a),
          l = (0, s.m2)(a);
        return n === s.BW.Loading
          ? null
          : (0, o.jsx)(i.w, {
              ...(l ? { key: "override" } : {}),
              buffer: b,
              artboard: t,
              stateMachine: e,
              artboardProperties: d,
              ...c,
            });
      }
      c.riveSrc = a;
    },
  },
]);
//# sourceMappingURL=90779.fa3e624ba84894b6.js.map
