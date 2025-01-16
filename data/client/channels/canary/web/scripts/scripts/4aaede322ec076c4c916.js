"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21897"],
  {
    303313: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s(653041),
        s(47120);
      var i = s(200651);
      s(192379);
      var r = s(149765),
        n = s(481060),
        o = s(995648),
        a = s(422559),
        d = s(388032),
        l = s(138557);
      function c(e) {
        let { defaultMemberPermissions: t, onClose: s, transitionState: c } = e,
          h = [];
        for (let e of a.VY) r.e$(t, e) && h.push(e);
        return (0, i.jsxs)(n.ModalRoot, {
          size: n.ModalSize.DYNAMIC,
          "aria-label": d.intl.string(d.t.vusPtr),
          transitionState: c,
          children: [
            (0, i.jsx)(n.ModalHeader, {
              separator: !1,
              children: (0, i.jsx)(n.Heading, {
                className: l.header,
                variant: "heading-xl/semibold",
                children: d.intl.string(d.t["4gMlpa"]),
              }),
            }),
            (0, i.jsx)(n.ModalContent, {
              children: (0, i.jsx)(o.Z, {
                className: l.permissionList,
                grantedPermissions: h,
              }),
            }),
            (0, i.jsx)(n.ModalFooter, {
              className: l.footer,
              children: (0, i.jsx)(n.Button, {
                size: n.ButtonSizes.MEDIUM,
                onClick: s,
                color: n.ButtonColors.BRAND,
                children: d.intl.string(d.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    138557: function (e, t, s) {
      e.exports = {
        header: "header_b536d",
        permissionList: "permissionList_b536d",
        footer: "footer_b536d",
      };
    },
  },
]);
//# sourceMappingURL=4aaede322ec076c4c916.js.map
