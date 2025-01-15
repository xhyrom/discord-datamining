"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13878"],
  {
    113140: function (n, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return d;
          },
        });
      var a = o(200651);
      o(192379);
      var e = o(481060),
        c = o(313201),
        l = o(471253),
        i = o(939863),
        s = o(388032),
        r = o(602416);
      function d(n) {
        let { transitionState: t, onClose: o, channel: d } = n,
          h = (0, c.Dt)(),
          u = (n) => {
            (0, l.RK)(d, n), o();
          };
        return (0, a.jsx)(e.ModalRoot, {
          size: e.ModalSize.SMALL,
          transitionState: t,
          "aria-labelledby": h,
          className: r.container,
          children: (0, a.jsxs)(e.ModalContent, {
            className: r.content,
            children: [
              (0, a.jsx)(i.Z, {
                children: (0, a.jsx)("div", {
                  className: r.iconBackground,
                  children: (0, a.jsx)(e.MicrophoneIcon, {
                    size: "custom",
                    color: "currentColor",
                    height: 40,
                    width: 40,
                    className: r.icon,
                  }),
                }),
              }),
              (0, a.jsx)(e.Heading, {
                className: r.header,
                variant: "heading-lg/semibold",
                children: s.intl.string(s.t.Ul1RJS),
              }),
              (0, a.jsx)(e.Text, {
                color: "header-secondary",
                className: r.description,
                variant: "text-sm/normal",
                children: s.intl.format(s.t["Z+3bW1"], {
                  stageChannelHook: () =>
                    (0, a.jsxs)("div", {
                      className: r.channel,
                      children: [
                        (0, a.jsx)(e.StageIcon, {
                          size: "custom",
                          color: "currentColor",
                          height: 14,
                          width: 14,
                          className: r.channelIcon,
                        }),
                        (0, a.jsx)(e.Text, {
                          className: r.channelName,
                          variant: "text-sm/normal",
                          children: d.name,
                        }),
                      ],
                    }),
                }),
              }),
              (0, a.jsx)(e.Button, {
                fullWidth: !0,
                color: e.Button.Colors.GREEN,
                onClick: () => u(!1),
                className: r.button,
                children: s.intl.string(s.t.MMlhsr),
              }),
              (0, a.jsx)(e.Button, {
                fullWidth: !0,
                color: e.Button.Colors.RED,
                onClick: () => u(!0),
                className: r.button,
                children: s.intl.string(s.t.BVN4pK),
              }),
              (0, a.jsx)(e.Button, {
                fullWidth: !0,
                color: e.Button.Colors.PRIMARY,
                look: e.Button.Looks.LINK,
                onClick: o,
                children: s.intl.string(s.t.L5eIZ2),
              }),
            ],
          }),
        });
      }
    },
    602416: function (n, t, o) {
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
//# sourceMappingURL=7b3914aa01fe131b745f.js.map
