"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83545"],
  {
    53149: function (t, n, e) {
      e.r(n);
      var i = e(200651);
      e(192379);
      var o = e(442837),
        l = e(481060),
        s = e(87051),
        a = e(9156),
        r = e(621600),
        d = e(388032),
        c = e(702152);
      n.default = (t) => {
        let { onClose: n, channelId: e, transitionState: u } = t,
          h = (0, o.e7)([a.ZP], () => a.ZP.isChannelMuted(null, e));
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: u,
          size: l.ModalSize.SMALL,
          "aria-label": d.intl.string(d.t.uAmAiI),
          children: [
            (0, i.jsx)(l.ModalCloseButton, {
              className: c.closeButton,
              onClick: n,
            }),
            (0, i.jsxs)(l.ModalContent, {
              className: c.content,
              children: [
                (0, i.jsx)("div", {
                  className: c.iconContainer,
                  children: h
                    ? (0, i.jsx)(l.BellSlashIcon, { size: "md" })
                    : (0, i.jsx)(l.BellIcon, { size: "md" }),
                }),
                (0, i.jsx)(l.Heading, {
                  className: c.heading,
                  variant: "heading-xl/bold",
                  children: h
                    ? d.intl.string(d.t["4rg7cH"])
                    : d.intl.string(d.t.uAmAiI),
                }),
                (0, i.jsx)(l.Text, {
                  className: c.infoText,
                  variant: "text-md/normal",
                  color: "text-normal",
                  children: h
                    ? d.intl.string(d.t["5vton5"])
                    : d.intl.string(d.t.mscFJS),
                }),
                (0, i.jsx)(l.Button, {
                  className: c.button,
                  color: h ? l.Button.Colors.PRIMARY : l.Button.Colors.RED,
                  onClick: () => {
                    s.Z.updateChannelOverrideSettings(
                      null,
                      e,
                      { muted: !h },
                      h ? r.ZB.Unmuted : r.ZB.Muted,
                    ),
                      n();
                  },
                  children: h
                    ? d.intl.string(d.t.YqAjX1)
                    : d.intl.string(d.t["w4m94+"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    702152: function (t, n, e) {
      t.exports = {
        closeButton: "closeButton_d801f7",
        content: "content_d801f7",
        iconContainer: "iconContainer_d801f7",
        heading: "heading_d801f7",
        infoText: "infoText_d801f7",
        button: "button_d801f7",
      };
    },
  },
]);
//# sourceMappingURL=3aa63e1859e93262bf2e.js.map
