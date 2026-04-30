"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86697"],
  {
    321404(e, n, t) {
      t.d(n, { O: () => a, c: () => u });
      var i = t(17928),
        r = t(380335),
        s = t(157550);
      function a(e) {
        return (0, i.bG)([r.A], () => r.A.isMessageRequest(e), [e]);
      }
      function u(e) {
        return (0, i.bG)(
          [r.A, s.A],
          () => null != e && (r.A.isMessageRequest(e) || s.A.isSpam(e)),
        );
      }
    },
    195443(e, n, t) {
      t.d(n, { z: () => s });
      var i = t(17928),
        r = t(157550);
      function s(e) {
        return (0, i.bG)([r.A], () => r.A.isSpam(e), [e]);
      }
    },
    963555(e, n, t) {
      t.d(n, { F: () => s });
      var i = t(17928),
        r = t(349435);
      function s(e, n) {
        return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e])
          .filter((e) => e.type === n)
          .find(
            (e) =>
              null == e.dismiss_timestamp &&
              (e?.expiry == null || Date.parse(e.expiry) > Date.now()),
          );
      }
    },
    168447(e, n, t) {
      t.d(n, { Y: () => s });
      var i = t(17928),
        r = t(349435);
      function s(e) {
        return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [
          e,
        ]).filter(
          (e) =>
            e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
  },
]);
//# sourceMappingURL=86697.d92f8aa75629c241.js.map
