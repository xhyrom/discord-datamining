"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99999"],
  {
    465794(t, e, r) {
      r.d(e, { A: () => p });
      var s = r(627968),
        c = r(821609),
        i = r(783420),
        n = r(938973);
      let p = function (t) {
        let {
            subscriptionTier: e,
            onClick: r,
            postSuccessGuild: p,
            onSubscribeModalClose: u,
            premiumModalAnalyticsLocation: d,
            applicationId: h,
            confirmationFooter: a,
            buttonTextOverride: k,
            defaultTextOverride: l,
            iconOverride: o,
            variantOverride: C,
            ...b
          } = t,
          { subscribeButtonProps: j } = (0, n.B)({
            subscriptionTier: e,
            buttonTextOverride: k,
            defaultTextOverride: l,
            iconOverride: o,
            variantOverride: C,
          });
        return (0, s.jsx)(i.A, {
          onClick: r,
          subscriptionTier: e,
          postSuccessGuild: p,
          onSubscribeModalClose: u,
          premiumModalAnalyticsLocation: d,
          applicationId: h,
          confirmationFooter: a,
          children: (t) => {
            let { onClick: e } = t;
            return (0, s.jsx)(c.$, { onClick: e, ...j, ...b });
          },
        });
      };
    },
  },
]);
//# sourceMappingURL=99999.62ab9d7a9cfc8e41.js.map
