"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60082"],
  {
    874406: function (t, n, i) {
      i.r(n);
      var o = i(200651);
      i(192379);
      var r = i(481060),
        e = i(194359),
        s = i(468026),
        a = i(388032);
      n.default = (t) =>
        (0, o.jsx)(s.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          title: a.intl.string(a.t.z2pFjo),
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: () => {
            e.Z.clearPendingRelationships();
          },
          body: a.intl.formatToPlainString(a.t["0nTvEx"], {
            incomingRequestCount: t.incomingRequestCount,
          }),
          confirmColor: r.ButtonColors.RED,
          ...t,
        });
    },
  },
]);
//# sourceMappingURL=058bb89177622cdbf1b9.js.map
