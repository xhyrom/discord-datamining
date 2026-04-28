"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46568"],
  {
    366811(l, n, a) {
      a.d(n, { A: () => I });
      var d = a(265690),
        t = a(121894),
        u = a(463347),
        e = a(334465),
        h = a(652215);
      function p(l) {
        let n = (0, e.B)(l ?? "", {
          path: h.BVt.CHANNEL(
            u.pv.guildId(),
            u.pv.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: l, channelId: a } = n.params;
          return { guildId: l === h.ME ? null : l, channelId: a ?? null };
        }
        let a = (0, e.B)(l ?? "", {
          path: h.BVt.GUILD_BOOSTING_MARKETING(u.pv.guildId()),
        });
        return null != a
          ? { guildId: a.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      let I = (0, d.h)((l) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: a, channelId: d } = p(n);
          (0, t.r)(() => l({ path: n, guildId: a, channelId: d }));
        },
        resetPath(n) {
          let { guildId: a, channelId: d } = p(n);
          (0, t.r)(() =>
            l({ path: null, guildId: a, channelId: d, basePath: n }),
          );
        },
      }));
    },
  },
]);
//# sourceMappingURL=46568.b87001938bc2ba62.js.map
