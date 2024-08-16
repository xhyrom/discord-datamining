"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59128"],
  {
    28564: function (e, o, s) {
      s.r(o),
        s.d(o, {
          default: function () {
            return a;
          },
        });
      var r = s(735250);
      s(470079);
      var t = s(481060),
        n = s(689938);
      function a(e) {
        let { onClose: o, onConfirmDelete: s, transitionState: a } = e;
        return (0, r.jsxs)(t.ModalRoot, {
          transitionState: a,
          "aria-label":
            n.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_HEADER,
          children: [
            (0, r.jsx)(t.ModalHeader, {
              separator: !1,
              children: (0, r.jsx)(t.Heading, {
                variant: "heading-lg/semibold",
                children:
                  n.Z.Messages
                    .GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_HEADER,
              }),
            }),
            (0, r.jsx)(t.ModalContent, {
              children: (0, r.jsx)(t.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children:
                  n.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_BODY,
              }),
            }),
            (0, r.jsxs)(t.ModalFooter, {
              children: [
                (0, r.jsx)(t.Button, {
                  onClick: s,
                  color: t.Button.Colors.RED,
                  children:
                    n.Z.Messages
                      .GUILD_ROLE_SUBSCRIPTION_EMOJI_DELETE_MODAL_DELETE_BUTTON,
                }),
                (0, r.jsx)(t.Button, {
                  onClick: o,
                  look: t.Button.Looks.LINK,
                  color: t.Button.Colors.PRIMARY,
                  children: n.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=33f9e5fe5b695ddd507a.js.map
