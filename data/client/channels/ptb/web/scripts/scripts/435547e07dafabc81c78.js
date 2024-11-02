"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60082"],
  {
    874406: function (t, n, i) {
      i.r(n);
      var o = i(200651);
      i(192379);
      var e = i(481060),
        s = i(194359),
        r = i(468026),
        a = i(388032);
      n.default = (t) =>
        (0, o.jsx)(r.default, {
          confirmText: a.intl.string(a.t.Eq9seX),
          title: a.intl.string(a.t.eVjfAg),
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: () => {
            s.Z.clearPendingRelationships();
          },
          body: a.intl.formatToPlainString(a.t.jaXsAw, {
            incomingRequestCount: t.incomingRequestCount,
          }),
          confirmColor: e.ButtonColors.RED,
          ...t,
        });
    },
  },
]);
//# sourceMappingURL=435547e07dafabc81c78.js.map
