"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54076"],
  {
    189229: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return o;
          },
        });
      var d = e(367907),
        i = e(592125),
        a = e(888369),
        u = e(430824),
        c = e(9156),
        l = e(981631);
      function o(t) {
        let n = i.Z.getChannel(t);
        (0, d.yw)(l.rMx.ACK_MESSAGES, {
          channel_id: t,
          guild_id: null == n ? void 0 : n.getGuildId(),
          location,
          guild_unread_statuses: Object.values(u.Z.getGuilds()).map((t) => {
            let n = a.default.hasUnread(t.id),
              e = a.default.getMentionCount(t.id),
              d = c.ZP.isMuted(t.id),
              i = c.ZP.resolveGuildUnreadSetting(t);
            return ""
              .concat(t.id, ",")
              .concat(n, ",")
              .concat(e, ",")
              .concat(d, ",")
              .concat(i);
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=db00f318301273ae92b7.js.map
