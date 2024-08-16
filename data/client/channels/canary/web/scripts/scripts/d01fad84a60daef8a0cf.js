"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66050"],
  {
    376573: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return N;
          },
        });
      var o = i(735250);
      i(470079);
      var s = i(852229),
        a = i(399606),
        r = i(481060),
        t = i(239091),
        c = i(367907),
        _ = i(496675),
        l = i(626135),
        u = i(934415),
        d = i(629481),
        p = i(981631),
        I = i(176505),
        C = i(689938);
      function N(e) {
        let { guild: n, onSelect: i } = e,
          N = (0, a.e7)(
            [_.Z],
            () => null != n && _.Z.can(p.Plq.ADMINISTRATOR, n),
          );
        return (0, o.jsx)(r.Menu, {
          navId: "guild-shop-context",
          "aria-label": C.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
          onClose: t.Zy,
          onSelect: i,
          children: (0, o.jsx)(r.MenuGroup, {
            children: (0, o.jsx)(r.MenuItem, {
              id: "role-subscription-copy-link",
              label: C.Z.Messages.COPY_LINK,
              action: () => {
                l.default.track(p.rMx.GUILD_SHOP_COPY_LINK, {
                  ...(0, c.hH)(n.id),
                  is_admin_or_owner: N,
                  copy_location: d.xv.CHANNEL_ROW_CONTEXT_MENU,
                }),
                  (0, s.J)((0, u.wR)(n.id, I.oC.GUILD_SHOP));
              },
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=d01fad84a60daef8a0cf.js.map
