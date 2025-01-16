"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95925"],
  {
    673078: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return p;
          },
        }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        a = e(512722),
        l = e.n(a),
        o = e(399606),
        d = e(481060),
        s = e(668781),
        c = e(430824),
        u = e(495437),
        m = e(240864),
        g = e(981631),
        x = e(388032),
        h = e(584022);
      function f(n) {
        let { guildProductListing: t, guildId: e } = n,
          r = (0, o.e7)([c.Z], () => {
            var n;
            return c.Z.getRole(
              e,
              null !== (n = null == t ? void 0 : t.role_id) && void 0 !== n
                ? n
                : g.lds,
            );
          });
        return null == r
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(d.Heading, {
                  className: h.warningSectionHeader,
                  variant: "text-md/medium",
                  color: "text-normal",
                  children: [
                    (0, i.jsx)(d.CircleWarningIcon, {
                      size: "sm",
                      color: "currentColor",
                    }),
                    (0, i.jsx)(d.Spacer, { horizontal: !0, size: 8 }),
                    x.intl.string(x.t.bi7buL),
                  ],
                }),
                (0, i.jsx)(d.Text, {
                  variant: "text-md/normal",
                  children: x.intl.format(x.t["4kglOT"], { roleName: r.name }),
                }),
              ],
            });
      }
      function p(n) {
        let { guildId: t, productId: e, ...a } = n,
          [o] = r.useState(() => m.Z.getGuildProduct(e));
        l()(null != o, "guildProductListing cannot be null");
        let [c, g] = r.useState(!1),
          p = async () => {
            try {
              g(!0), await u.mh(t, e);
            } catch (n) {
              s.Z.show({ title: x.intl.string(x.t.OzgkxM), body: n.message });
            } finally {
              g(!1);
            }
          };
        return (0, i.jsxs)(d.ConfirmModal, {
          ...a,
          className: h.modalContainer,
          header: x.intl.string(x.t["/gaTp6"]),
          confirmText: x.intl.string(x.t.E4nVWF),
          cancelText: x.intl.string(x.t["ETE/oK"]),
          loading: c,
          onConfirm: p,
          children: [
            (0, i.jsx)(d.Text, {
              variant: "text-md/normal",
              children: x.intl.format(x.t.CPQsjo, { productName: o.name }),
            }),
            (0, i.jsx)(f, { guildProductListing: o, guildId: t }),
          ],
        });
      }
    },
    584022: function (n, t, e) {
      n.exports = {
        modalContainer: "modalContainer_e7acde",
        warningSectionHeader: "warningSectionHeader_e7acde",
      };
    },
  },
]);
//# sourceMappingURL=9dc5db2c4bba22179f06.js.map
