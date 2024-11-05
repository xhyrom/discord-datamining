"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65045"],
  {
    143782: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var r = e(153867),
        a = e(468026),
        l = e(933557),
        o = e(388032);
      t.default = (n) => {
        let { onConfirm: t, channel: e, ...s } = n,
          c = (0, l.ZP)(e);
        return null == c
          ? null
          : (0, i.jsx)(a.default, {
              confirmText: o.intl.string(o.t["cY+Ooa"]),
              secondaryConfirmText: o.intl.string(o.t["JdIQ/f"]),
              title: o.intl.string(o.t["0LZN5O"]),
              cancelText: o.intl.string(o.t["ETE/oK"]),
              onConfirm: t,
              onConfirmSecondary: () => {
                r.ZP.updatedUnsyncedSettings({
                  disableVoiceChannelChangeAlert: !0,
                }),
                  t();
              },
              body: o.intl.format(o.t["vA+uEh"], { channel: c }),
              ...s,
            });
      };
    },
  },
]);
//# sourceMappingURL=d30820a157874ae444d5.js.map
