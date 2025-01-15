"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2045"],
  {
    614812: function (t, e, n) {
      n.d(e, {
        z: function () {
          return a;
        },
      });
      let a =
        "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ";
    },
    754233: function (t, e, n) {
      n.r(e);
      var a = n(200651);
      n(192379);
      var o = n(481060),
        l = n(313201),
        d = n(430824),
        s = n(614812),
        i = n(388032),
        r = n(254783);
      e.default = (t) => {
        let { onClose: e, guildId: n } = t,
          c = (0, l.Dt)(),
          u = i.intl.format(i.t.ZqkXsL, { helpdeskArticle: s.z }),
          m = d.Z.getGuild(n);
        return (
          null != m &&
            (u = i.intl.format(i.t.jn0Xy8, {
              guildName: m.name,
              helpdeskArticle: s.z,
            })),
          (0, a.jsxs)(o.ModalRoot, {
            ...t,
            "aria-labelledby": c,
            children: [
              (0, a.jsxs)(o.ModalHeader, {
                separator: !1,
                className: r.modalHeader,
                children: [
                  (0, a.jsx)(o.Heading, {
                    id: c,
                    variant: "heading-xl/extrabold",
                    children: i.intl.string(i.t.kJwpBQ),
                  }),
                  (0, a.jsx)(o.ModalCloseButton, {
                    className: r.closeButton,
                    onClick: e,
                  }),
                ],
              }),
              (0, a.jsx)(o.ModalContent, {
                className: r.modalContent,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: r.contentText,
                  children: u,
                }),
              }),
              (0, a.jsx)(o.ModalFooter, {
                children: (0, a.jsx)(o.Button, {
                  className: r.button,
                  size: o.Button.Sizes.MIN,
                  onClick: e,
                  children: i.intl.string(i.t.BddRzc),
                }),
              }),
            ],
          })
        );
      };
    },
    254783: function (t, e, n) {
      t.exports = {
        modalHeader: "modalHeader_d7a9f6",
        closeButton: "closeButton_d7a9f6",
        modalContent: "modalContent_d7a9f6",
        contentText: "contentText_d7a9f6",
        button: "button_d7a9f6",
      };
    },
  },
]);
//# sourceMappingURL=9df55b9222bf55158e12.js.map
