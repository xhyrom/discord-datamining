"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2511"],
  {
    308050(u, p, E) {
      E.d(p, { A: () => s });
      let d = String.raw,
        i = d`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`,
        s = () =>
          RegExp(
            d`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${i}(?:\u200D${i})*`,
            "gu",
          );
    },
  },
]);
//# sourceMappingURL=2511.ccb07e4915562612.js.map
