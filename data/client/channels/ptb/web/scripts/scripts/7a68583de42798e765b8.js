"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13878"],
  {
    113140: function (n, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return d;
          },
        });
      var o = a(735250);
      a(470079);
      var c = a(481060),
        s = a(313201),
        t = a(471253),
        l = a(939863),
        i = a(689938),
        r = a(183442);
      function d(n) {
        let { transitionState: e, onClose: a, channel: d } = n,
          h = (0, s.Dt)(),
          u = (n) => {
            (0, t.RK)(d, n), a();
          };
        return (0, o.jsx)(c.ModalRoot, {
          size: c.ModalSize.SMALL,
          transitionState: e,
          "aria-labelledby": h,
          className: r.container,
          children: (0, o.jsxs)(c.ModalContent, {
            className: r.content,
            children: [
              (0, o.jsx)(l.Z, {
                children: (0, o.jsx)("div", {
                  className: r.iconBackground,
                  children: (0, o.jsx)(c.MicrophoneIcon, {
                    size: "custom",
                    color: "currentColor",
                    height: 40,
                    width: 40,
                    className: r.icon,
                  }),
                }),
              }),
              (0, o.jsx)(c.Heading, {
                className: r.header,
                variant: "heading-lg/semibold",
                children: i.Z.Messages.STAGE_SPEAK_INVITE_HEADER,
              }),
              (0, o.jsx)(c.Text, {
                color: "header-secondary",
                className: r.description,
                variant: "text-sm/normal",
                children: i.Z.Messages.STAGE_SPEAK_INVITE_MODAL.format({
                  stageChannelHook: () =>
                    (0, o.jsxs)("div", {
                      className: r.channel,
                      children: [
                        (0, o.jsx)(c.StageIcon, {
                          size: "custom",
                          color: "currentColor",
                          height: 14,
                          width: 14,
                          className: r.channelIcon,
                        }),
                        (0, o.jsx)(c.Text, {
                          className: r.channelName,
                          variant: "text-sm/normal",
                          children: d.name,
                        }),
                      ],
                    }),
                }),
              }),
              (0, o.jsx)(c.Button, {
                fullWidth: !0,
                color: c.Button.Colors.GREEN,
                onClick: () => u(!1),
                className: r.button,
                children: i.Z.Messages.ACCEPT,
              }),
              (0, o.jsx)(c.Button, {
                fullWidth: !0,
                color: c.Button.Colors.RED,
                onClick: () => u(!0),
                className: r.button,
                children: i.Z.Messages.DECLINE,
              }),
              (0, o.jsx)(c.Button, {
                fullWidth: !0,
                color: c.Button.Colors.PRIMARY,
                look: c.Button.Looks.LINK,
                onClick: a,
                children: i.Z.Messages.NOT_NOW,
              }),
            ],
          }),
        });
      }
    },
    183442: function (n, e, a) {
      n.exports = {
        container: "container_a5828d",
        content: "content_a5828d",
        iconBackground: "iconBackground_a5828d",
        icon: "icon_a5828d",
        header: "header_a5828d",
        description: "description_a5828d",
        channel: "channel_a5828d",
        channelIcon: "channelIcon_a5828d",
        channelName: "channelName_a5828d",
        button: "button_a5828d",
      };
    },
  },
]);
//# sourceMappingURL=7a68583de42798e765b8.js.map
