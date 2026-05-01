"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35476"],
  {
    835071(t, e, n) {
      n.d(e, { K: () => o, default: () => d });
      var s = n(627968);
      n(64700);
      var i = n(192308),
        a = n(87719),
        c = n(831318),
        r = n(985018);
      function o(t) {
        let { onSubscribeFinish: e, stackingBehavior: a } = t;
        (0, i.openModalLazy)(
          async () => {
            let { default: t } = await Promise.resolve().then(
              n.bind(n, 835071),
            );
            return (n) => (0, s.jsx)(t, { onSubscribeFinish: e, ...n });
          },
          { stackingBehavior: a },
        );
      }
      function d(t) {
        let { onClose: e, ...n } = t;
        return (0, s.jsx)(c.A, {
          title: r.intl.string(r.t.reVc0M),
          subtitle: r.intl.string(r.t.KckEj7),
          graphic: {
            src: "https://cdn.discordapp.com/assets/content/47cc9b4a38d020f9f0bf747920f0a9b0d02109a9eb9a15510e7a08b7fb106350.svg",
            type: "image",
          },
          onSecondaryClick: () => {
            (0, a.x)(e);
          },
          secondaryCTA: r.intl.string(r.t.PcTCB7),
          onClose: e,
          ...n,
        });
      }
    },
  },
]);
//# sourceMappingURL=35476.acf8b02aa15b2930.js.map
