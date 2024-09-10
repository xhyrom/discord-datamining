"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21897"],
  {
    303313: function (e, s, o) {
      o.r(s),
        o.d(s, {
          default: function () {
            return M;
          },
        }),
        o(653041),
        o(47120);
      var i = o(735250);
      o(470079);
      var r = o(149765),
        a = o(481060),
        t = o(995648),
        n = o(422559),
        d = o(689938),
        l = o(907622);
      function M(e) {
        let { defaultMemberPermissions: s, onClose: o, transitionState: M } = e,
          c = [];
        for (let e of n.VY) r.e$(s, e) && c.push(e);
        return (0, i.jsxs)(a.ModalRoot, {
          size: a.ModalSize.DYNAMIC,
          "aria-label":
            d.Z.Messages
              .INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_ARIA_LABEL,
          transitionState: M,
          children: [
            (0, i.jsx)(a.ModalHeader, {
              separator: !1,
              children: (0, i.jsx)(a.Heading, {
                className: l.header,
                variant: "heading-xl/semibold",
                children:
                  d.Z.Messages
                    .INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_HEADER,
              }),
            }),
            (0, i.jsx)(a.ModalContent, {
              children: (0, i.jsx)(t.Z, {
                className: l.permissionList,
                grantedPermissions: c,
              }),
            }),
            (0, i.jsx)(a.ModalFooter, {
              className: l.footer,
              children: (0, i.jsx)(a.Button, {
                size: a.ButtonSizes.MEDIUM,
                onClick: o,
                color: a.ButtonColors.BRAND,
                children: d.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
    907622: function (e, s, o) {
      e.exports = {
        header: "header_b536d",
        permissionList: "permissionList_b536d",
        footer: "footer_b536d",
      };
    },
  },
]);
//# sourceMappingURL=7b8c404078433c4e83f5.js.map
