"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [602511],
  {
    308050(u, p, E) {
      let d = String.raw,
        i = d`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
      E.d(
        p,
        {},
        {
          A: () =>
            RegExp(
              d`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${i}(?:\u200D${i})*`,
              "gu",
            ),
        },
      );
    },
  },
]);
//# sourceMappingURL=602511.4186af6a6375e8cc.js.map
