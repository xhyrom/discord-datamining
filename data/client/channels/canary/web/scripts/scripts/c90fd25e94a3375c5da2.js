"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7285"],
  {
    462991: function (e) {
      e.exports = "/assets/1a8b06e1c2b7a9bb1946.svg";
    },
    951269: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var o = s(735250);
      s(470079);
      var a = s(481060),
        n = s(112831),
        l = s(313201),
        i = s(689938),
        c = s(220882),
        r = s(462991);
      function u(e) {
        let { onClose: t, transitionState: s, kind: u } = e,
          d = (0, l.Dt)();
        return (0, o.jsxs)(a.ModalRoot, {
          transitionState: s,
          "aria-labelledby": d,
          size: a.ModalSize.SMALL,
          children: [
            (0, o.jsxs)(a.ModalContent, {
              className: c.content,
              children: [
                (0, o.jsx)(a.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: t,
                }),
                (0, o.jsx)("img", { className: c.image, src: r, alt: "" }),
                (0, o.jsx)(n.Z, {
                  className: c.title,
                  id: d,
                  size: n.Z.Sizes.SIZE_24,
                  color: n.Z.Colors.HEADER_PRIMARY,
                  children: i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE,
                }),
                (0, o.jsx)(a.Text, {
                  className: c.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children:
                    "user" === u
                      ? i.Z.Messages.INACCESSIBLE_USER_LINK_SUBTITLE
                      : i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE,
                }),
              ],
            }),
            (0, o.jsx)(a.ModalFooter, {
              children: (0, o.jsx)(a.Button, {
                className: c.button,
                color: a.Button.Colors.BRAND,
                onClick: t,
                size: a.Button.Sizes.LARGE,
                children: i.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    220882: function (e, t, s) {
      e.exports = {
        closeButton: "closeButton_f502be",
        content: "content_f502be",
        image: "image_f502be",
        title: "title_f502be",
        subtitle: "subtitle_f502be",
        button: "button_f502be",
      };
    },
  },
]);
//# sourceMappingURL=c90fd25e94a3375c5da2.js.map
