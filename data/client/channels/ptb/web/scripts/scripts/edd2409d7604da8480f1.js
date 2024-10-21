"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91032"],
  {
    432472: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return o;
          },
        });
      var i = t(200651);
      t(192379);
      var r = t(512722),
        l = t.n(r),
        u = t(399606),
        a = t(372900),
        c = t(238246),
        d = t(592125),
        h = t(504185);
      function o(n) {
        let { windowKey: e, channelId: t } = n,
          r = (0, u.e7)([d.Z], () => d.Z.getChannel(t));
        return (
          l()(null != r, "channel cannot be null for popout"),
          (0, i.jsx)(c.Z, {
            withTitleBar: !0,
            windowKey: e,
            title: r.name,
            children: (0, i.jsx)(a.Z.Provider, {
              value: r.guild_id,
              children: (0, i.jsx)(h.Z, { channel: r }),
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=edd2409d7604da8480f1.js.map
