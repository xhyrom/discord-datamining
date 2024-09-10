"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2045"],
  {
    614812: function (e, t, a) {
      a.d(t, {
        z: function () {
          return s;
        },
      });
      let s =
        "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ";
    },
    754233: function (e, t, a) {
      a.r(t);
      var s = a(735250);
      a(470079);
      var n = a(481060),
        o = a(313201),
        l = a(430824),
        d = a(614812),
        c = a(689938),
        r = a(640733);
      t.default = (e) => {
        let { onClose: t, guildId: a } = e,
          i = (0, o.Dt)(),
          u =
            c.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format(
              { helpdeskArticle: d.z },
            ),
          _ = l.Z.getGuild(a);
        return (
          null != _ &&
            (u =
              c.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
                guildName: _.name,
                helpdeskArticle: d.z,
              })),
          (0, s.jsxs)(n.ModalRoot, {
            ...e,
            "aria-labelledby": i,
            children: [
              (0, s.jsxs)(n.ModalHeader, {
                separator: !1,
                className: r.modalHeader,
                children: [
                  (0, s.jsx)(n.Heading, {
                    id: i,
                    variant: "heading-xl/extrabold",
                    children:
                      c.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
                  }),
                  (0, s.jsx)(n.ModalCloseButton, {
                    className: r.closeButton,
                    onClick: t,
                  }),
                ],
              }),
              (0, s.jsx)(n.ModalContent, {
                className: r.modalContent,
                children: (0, s.jsx)(n.Text, {
                  variant: "text-md/normal",
                  className: r.contentText,
                  children: u,
                }),
              }),
              (0, s.jsx)(n.ModalFooter, {
                children: (0, s.jsx)(n.Button, {
                  className: r.button,
                  size: n.Button.Sizes.MIN,
                  onClick: t,
                  children: c.Z.Messages.OKAY,
                }),
              }),
            ],
          })
        );
      };
    },
    640733: function (e, t, a) {
      e.exports = {
        modalHeader: "modalHeader_d7a9f6",
        closeButton: "closeButton_d7a9f6",
        modalContent: "modalContent_d7a9f6",
        contentText: "contentText_d7a9f6",
        button: "button_d7a9f6",
      };
    },
  },
]);
//# sourceMappingURL=9594c8f71d7294cde957.js.map
