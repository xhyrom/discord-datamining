"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94005"],
  {
    144462: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        }),
        s(47120);
      var a = s(735250),
        o = s(470079),
        n = s(481060),
        r = s(313201),
        i = s(273504),
        c = s(689938),
        d = s(361818);
      function l(e) {
        let {
            initialCustomMessage: t,
            onSubmit: s,
            onClose: l,
            transitionState: _,
          } = e,
          C = (0, r.Dt)(),
          [M, A] = o.useState(t);
        return (0, a.jsxs)(n.ModalRoot, {
          transitionState: _,
          "aria-labelledby": C,
          size: n.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(n.ModalContent, {
              className: d.actionContentContainer,
              children: [
                (0, a.jsx)(n.Heading, {
                  id: C,
                  color: "header-primary",
                  variant: "heading-md/semibold",
                  className: d.header,
                  children:
                    c.Z.Messages
                      .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE,
                }),
                (0, a.jsx)(n.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    c.Z.Messages
                      .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION,
                }),
                (0, a.jsx)(n.TextArea, {
                  className: d.customMessageTextArea,
                  placeholder:
                    c.Z.Messages
                      .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
                  value: M,
                  onChange: A,
                  maxLength: i._6,
                }),
              ],
            }),
            (0, a.jsxs)(n.ModalFooter, {
              children: [
                (0, a.jsx)(n.Button, {
                  onClick: () => {
                    s(M);
                  },
                  color: n.Button.Colors.BRAND,
                  size: n.Button.Sizes.SMALL,
                  children: c.Z.Messages.EDIT,
                }),
                (0, a.jsx)(n.Button, {
                  onClick: () => {
                    l();
                  },
                  color: n.Button.Colors.TRANSPARENT,
                  look: n.Button.Looks.LINK,
                  children: c.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    361818: function (e, t, s) {
      e.exports = {
        actionContentContainer: "actionContentContainer_cd8969",
        header: "header_cd8969",
        customMessageTextArea: "customMessageTextArea_cd8969",
      };
    },
  },
]);
//# sourceMappingURL=52c574a2e323a7b3f4d5.js.map
