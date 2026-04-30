"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49205"],
  {
    794905(a, t, e) {
      e.d(t, { A: () => h });
      var l = e(64700),
        c = e(688810),
        i = e(399925),
        n = e(74847),
        r = e(602902);
      let h = (a) => {
        let { analyticsLocations: t } = (0, c.Ay)();
        return {
          onShareClick: l.useCallback(
            async (e) => {
              let { clips: l, onShareComplete: c, messageReference: h } = e;
              if (0 === l.length) return;
              let s = (0, n.t)(a);
              (0, i.H1)(l.map((a) => a.id));
              try {
                await (0, r.K)(l, {
                  channelId: s ? a : void 0,
                  analyticsLocations: t,
                  messageReference: h,
                });
              } catch (a) {
              } finally {
                (0, i.H1)(null), c?.();
              }
            },
            [a, t],
          ),
        };
      };
    },
  },
]);
//# sourceMappingURL=49205.ddb21db54caaf3b5.js.map
