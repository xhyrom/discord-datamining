"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58621"],
  {
    223455: function (n, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return Z;
          },
        });
      var t = i(735250);
      i(470079);
      var a = i(512722),
        l = i.n(a),
        d = i(399606),
        r = i(721037),
        u = i(561472),
        c = i(372900),
        s = i(238246),
        h = i(592125),
        o = i(703558),
        p = i(677601);
      function Z(n) {
        let { windowKey: e, channelId: i } = n,
          a = (0, d.e7)([h.Z], () => h.Z.getChannel(i));
        return (
          l()(null != a, "channel cannot be null for popout"),
          (0, t.jsx)(s.Z, {
            withTitleBar: !0,
            windowKey: e,
            title: a.name,
            channelId: a.id,
            children: (0, t.jsxs)(c.Z.Provider, {
              value: a.guild_id,
              children: [
                (0, t.jsx)(u.Z, { channel: a, draftType: o.d.ChannelMessage }),
                (0, t.jsx)(p.Z, { channel: a }),
                (0, t.jsx)(r.Z, { inPopoutWindow: !0 }),
              ],
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=a2aefff4aa43c2e2bc53.js.map
