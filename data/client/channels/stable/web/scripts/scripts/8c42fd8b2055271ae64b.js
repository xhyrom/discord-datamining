"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66050"],
  {
    376573: function (n, i, t) {
      t.r(i),
        t.d(i, {
          default: function () {
            return I;
          },
        });
      var e = t(200651);
      t(192379);
      var r = t(852229),
        o = t(399606),
        l = t(481060),
        c = t(239091),
        a = t(367907),
        s = t(496675),
        u = t(626135),
        d = t(934415),
        _ = t(629481),
        p = t(981631),
        h = t(176505),
        C = t(388032);
      function I(n) {
        let { guild: i, onSelect: t } = n,
          I = (0, o.e7)(
            [s.Z],
            () => null != i && s.Z.can(p.Plq.ADMINISTRATOR, i),
          );
        return (0, e.jsx)(l.Menu, {
          navId: "guild-shop-context",
          "aria-label": C.intl.string(C.t.g3KvYG),
          onClose: c.Zy,
          onSelect: t,
          children: (0, e.jsx)(l.MenuGroup, {
            children: (0, e.jsx)(l.MenuItem, {
              id: "role-subscription-copy-link",
              label: C.intl.string(C.t.WqhZsr),
              action: () => {
                u.default.track(p.rMx.GUILD_SHOP_COPY_LINK, {
                  ...(0, a.hH)(i.id),
                  is_admin_or_owner: I,
                  copy_location: _.xv.CHANNEL_ROW_CONTEXT_MENU,
                }),
                  (0, r.J)((0, d.wR)(i.id, h.oC.GUILD_SHOP));
              },
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=8c42fd8b2055271ae64b.js.map
