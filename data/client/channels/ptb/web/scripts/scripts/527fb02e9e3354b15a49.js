"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12891"],
  {
    519620: function (e, n, d) {
      d.r(n),
        d.d(n, {
          default: function () {
            return _;
          },
        });
      var a = d(735250);
      d(470079);
      var s = d(481060),
        i = d(239091),
        l = d(592125),
        t = d(626135),
        r = d(479313),
        u = d(981631),
        c = d(689938);
      function _(e) {
        let { summary: n, onSelect: d } = e;
        return (0, a.jsx)(s.Menu, {
          onSelect: d,
          navId: "channel-summaries-context-menu",
          "aria-label": c.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: i.Zy,
          children: (0, a.jsx)(s.MenuGroup, {
            children: (0, a.jsx)(s.MenuItem, {
              id: "delete-summary",
              color: "danger",
              label: c.Z.Messages.SUMMARIES_DELETE_SUMMARY,
              action: () => {
                (0, r.$l)(n);
                let e = l.Z.getChannel(n.channelId);
                t.default.track(u.rMx.SUMMARY_DELETED, {
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
//# sourceMappingURL=527fb02e9e3354b15a49.js.map
