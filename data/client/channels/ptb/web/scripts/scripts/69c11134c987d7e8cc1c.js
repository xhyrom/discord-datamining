"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84239"],
  {
    838433: function (t, u, e) {
      e.r(u),
        e.d(u, {
          openGuildProductLink: function () {
            return o;
          },
        });
      var d = e(735250);
      e(470079);
      var i = e(481060),
        n = e(336197),
        a = e(430824),
        c = e(240864),
        l = e(981631);
      function o(t, u) {
        var o;
        let r = a.Z.getGuild(t);
        c.Z.getGuildProductFetchState(u) === c.M.FETCHED &&
        (null === (o = c.Z.getGuildProduct(u)) || void 0 === o
          ? void 0
          : o.published) !== !0 &&
        null != r
          ? (0, i.openModalLazy)(async () => {
              let { default: t } = await e.e("29396").then(e.bind(e, 513239));
              return (u) => (0, d.jsx)(t, { ...u });
            })
          : (null == r
                ? void 0
                : r.hasFeature(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0
            ? (0, n.Z)(l.Z5c.GUILD_PRODUCT(t, u))
            : (0, n.Z)(l.Z5c.CHANNEL(t));
      }
    },
  },
]);
//# sourceMappingURL=69c11134c987d7e8cc1c.js.map
