"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56496"],
  {
    113886: function (t, n, e) {
      e.r(n), e(47120);
      var a = e(200651),
        i = e(192379),
        r = e(481060),
        s = e(693546),
        l = e(246364),
        u = e(388032);
      n.default = (t) => {
        let {
            guildId: n,
            userId: e,
            guildJoinRequestId: c,
            onConfirm: h,
            onError: o,
            modalProps: d,
          } = t,
          [p, x] = i.useState(),
          C = async () => {
            try {
              await s.Z.updateGuildJoinRequest(n, e, c, l.wB.REJECTED, p),
                null == h || h();
            } catch (t) {
              null == o || o();
            }
          };
        return (0, a.jsx)(r.ConfirmModal, {
          header: u.intl.string(u.t["mFP/q6"]),
          cancelText: u.intl.string(u.t["ETE/oK"]),
          confirmText: u.intl.string(u.t.hDtbs7),
          onConfirm: C,
          ...d,
          children: (0, a.jsx)(r.TextArea, {
            value: p,
            onChange: x,
            maxLength: 160,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=94cf4e09029751f02d1d.js.map
