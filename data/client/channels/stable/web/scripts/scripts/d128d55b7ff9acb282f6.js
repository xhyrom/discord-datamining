"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81070"],
  {
    685929: function (n, t, u) {
      u.d(t, {
        C: function () {
          return e;
        },
        Y: function () {
          return l;
        },
      });
      var c = u(442837),
        i = u(496675),
        r = u(981631);
      function e(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
        return (
          null != n &&
          null != n.linkedLobby &&
          t.can(r.Plq.MANAGE_CHANNELS, n) &&
          t.can(r.Plq.VIEW_CHANNEL, n) &&
          t.can(r.Plq.SEND_MESSAGES, n)
        );
      }
      function l(n) {
        return (0, c.e7)([i.Z], () => e(n, i.Z));
      }
    },
  },
]);
//# sourceMappingURL=d128d55b7ff9acb282f6.js.map
