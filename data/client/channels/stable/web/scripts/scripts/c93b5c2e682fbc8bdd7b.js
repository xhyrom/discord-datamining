"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39955"],
  {
    547653: function (t, n, i) {
      i.r(n), i(47120);
      var o = i(200651),
        r = i(192379),
        a = i(481060),
        e = i(668781),
        s = i(787014),
        l = i(388032);
      n.default = function (t) {
        let { channelId: n, application: i, onClose: c, ...d } = t,
          [m, u] = r.useState(!1),
          h = async () => {
            try {
              u(!0), await s.ZP.removeLinkedLobby(n), c();
            } catch (t) {
              u(!1),
                e.Z.show({
                  title: l.intl.string(l.t["43yFy8"]),
                  body: l.intl.string(l.t["WR3p/f"]),
                });
            }
          };
        return (0, o.jsx)(a.ConfirmModal, {
          header: l.intl.string(l.t.XImiS0),
          confirmText: l.intl.string(l.t["cY+Ooa"]),
          cancelText: l.intl.string(l.t["ETE/oK"]),
          confirmButtonColor: a.Button.Colors.BRAND,
          onConfirm: h,
          loading: m,
          onClose: c,
          ...d,
          children: (0, o.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: l.intl.format(l.t.JKCMYW, { applicationName: i.name }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=c93b5c2e682fbc8bdd7b.js.map
