"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7458"],
  {
    405083: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return s;
          },
        });
      var u = t(200651);
      t(192379);
      var l = t(355467),
        o = t(106976),
        d = t(703656),
        i = t(914010),
        a = t(563132),
        r = t(791785),
        c = t(981631);
      function s(n) {
        let { onClose: e, onComplete: t, forcesTransitionToGuild: s, ...p } = n,
          { subscriptionMetadataRequest: C } = (0, a.usePaymentContext)();
        return (0, u.jsx)(r.PaymentModal, {
          ...p,
          onComplete: t,
          onClose: (n) => {
            e(n);
            let u = null == C ? void 0 : C.guild_id;
            n &&
              null != u &&
              (l.jg(),
              (0, o.i1)(u),
              null == t || t(),
              null != u &&
                (s || i.Z.getGuildId() !== u) &&
                (0, d.uL)(c.Z5c.CHANNEL(u)));
          },
          forceNewPaymentModal: !0,
        });
      }
    },
  },
]);
//# sourceMappingURL=c27d3b5488af2e786531.js.map
