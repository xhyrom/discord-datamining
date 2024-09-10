"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95925"],
  {
    673078: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return O;
          },
        }),
        a(47120);
      var t = a(735250),
        r = a(470079),
        s = a(512722),
        i = a.n(s),
        o = a(399606),
        l = a(481060),
        d = a(668781),
        c = a(430824),
        _ = a(495437),
        u = a(240864),
        E = a(981631),
        m = a(689938),
        T = a(257507);
      function D(e) {
        let { guildProductListing: n, guildId: a } = e,
          r = (0, o.e7)([c.Z], () => {
            var e;
            return c.Z.getRole(
              a,
              null !== (e = null == n ? void 0 : n.role_id) && void 0 !== e
                ? e
                : E.lds,
            );
          });
        return null == r
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(l.Heading, {
                  className: T.warningSectionHeader,
                  variant: "text-md/medium",
                  color: "text-normal",
                  children: [
                    (0, t.jsx)(l.CircleWarningIcon, {
                      size: "sm",
                      color: "currentColor",
                    }),
                    (0, t.jsx)(l.Spacer, { horizontal: !0, size: 8 }),
                    m.Z.Messages
                      .GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING_HEADER,
                  ],
                }),
                (0, t.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children:
                    m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING.format(
                      { roleName: r.name },
                    ),
                }),
              ],
            });
      }
      function O(e) {
        let { guildId: n, productId: a, ...s } = e,
          [o] = r.useState(() => u.Z.getGuildProduct(a));
        i()(null != o, "guildProductListing cannot be null");
        let [c, E] = r.useState(!1),
          O = async () => {
            try {
              E(!0), await _.mh(n, a);
            } catch (e) {
              d.Z.show({
                title: m.Z.Messages.GUILD_PRODUCTS_DELETE_ERROR_TITLE,
                body: e.message,
              });
            } finally {
              E(!1);
            }
          };
        return (0, t.jsxs)(l.ConfirmModal, {
          ...s,
          className: T.modalContainer,
          header: m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_HEADER,
          confirmText: m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BUTTON,
          cancelText: m.Z.Messages.CANCEL,
          loading: c,
          onConfirm: O,
          children: [
            (0, t.jsx)(l.Text, {
              variant: "text-md/normal",
              children:
                m.Z.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY.format({
                  productName: o.name,
                }),
            }),
            (0, t.jsx)(D, { guildProductListing: o, guildId: n }),
          ],
        });
      }
    },
    257507: function (e, n, a) {
      e.exports = {
        modalContainer: "modalContainer_e7acde",
        warningSectionHeader: "warningSectionHeader_e7acde",
      };
    },
  },
]);
//# sourceMappingURL=bea65eb0d26f968a5841.js.map
