"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12891"],
  {
    519620: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return o;
          },
        });
      var t = i(200651);
      i(192379);
      var d = i(481060),
        a = i(239091),
        l = i(592125),
        r = i(626135),
        s = i(479313),
        u = i(981631),
        c = i(388032);
      function o(e) {
        let { summary: n, onSelect: i } = e;
        return (0, t.jsx)(d.Menu, {
          onSelect: i,
          navId: "channel-summaries-context-menu",
          "aria-label": c.intl.string(c.t.ogxXGh),
          onClose: a.Zy,
          children: (0, t.jsx)(d.MenuGroup, {
            children: (0, t.jsx)(d.MenuItem, {
              id: "delete-summary",
              color: "danger",
              label: c.intl.string(c.t["5AwUIi"]),
              action: () => {
                (0, s.$l)(n);
                let e = l.Z.getChannel(n.channelId);
                r.default.track(u.rMx.SUMMARY_DELETED, {
                  guild_id: null == e ? void 0 : e.guild_id,
                  channel_id: null == e ? void 0 : e.id,
                  summary_id: n.id,
                  start_message_id: n.startId,
                  end_message_id: n.endId,
                });
              },
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=f389a7fb221d3d74d86c.js.map
