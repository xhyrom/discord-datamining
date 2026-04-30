"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19871"],
  {
    602146(r, t, e) {
      e.d(t, { RR: () => a, RY: () => n, yG: () => o });
      var i = e(636537),
        c = e(652215);
      async function o(r, t, e, o, n) {
        return (
          await i.Bo.post({
            url: c.Rsh.STAGE_INSTANCES,
            body: {
              channel_id: r,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: n,
              send_start_notification: o,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function n(r, t, e) {
        return (
          await i.Bo.patch({
            url: c.Rsh.STAGE_INSTANCE(r),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function a(r) {
        return i.Bo.del({ url: c.Rsh.STAGE_INSTANCE(r), rejectWithError: !1 });
      }
    },
  },
]);
//# sourceMappingURL=19871.ea2f21719074b86c.js.map
