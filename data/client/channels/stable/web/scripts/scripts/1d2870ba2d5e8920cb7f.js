"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57539"],
  {
    924188: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return l;
          },
        });
      var n = t(735250);
      t(470079);
      var s = t(481060),
        o = t(313201),
        r = t(468706),
        i = t(689938),
        d = t(994890);
      function l(e) {
        let { channelId: a, messageId: t, onClose: l, transitionState: c } = e,
          _ = (0, o.Dt)();
        return (0, n.jsx)(s.ModalRoot, {
          transitionState: c,
          "aria-labelledby": _,
          size: s.ModalSize.SMALL,
          children: (0, n.jsxs)(s.ModalContent, {
            className: d.container,
            children: [
              (0, n.jsx)(s.Heading, {
                id: _,
                variant: "heading-lg/bold",
                color: "header-primary",
                className: d.header,
                children: i.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
              }),
              (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: d.__invalid_subheader,
                children: i.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
              }),
              (0, n.jsxs)("div", {
                className: d.buttonContainer,
                children: [
                  (0, n.jsx)(s.Button, {
                    className: d.button,
                    size: s.Button.Sizes.MEDIUM,
                    color: s.Button.Colors.BRAND,
                    onClick: l,
                    children: i.Z.Messages.DISMISS,
                  }),
                  (0, n.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children:
                      i.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format(
                        {
                          handleFalsePositiveHook: () => {
                            l(), (0, r.e)(a, t);
                          },
                        },
                      ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    994890: function (e, a, t) {
      e.exports = {
        container: "container_ea42ff",
        header: "header_ea42ff",
        buttonContainer: "buttonContainer_ea42ff",
        button: "button_ea42ff",
      };
    },
  },
]);
//# sourceMappingURL=1d2870ba2d5e8920cb7f.js.map
