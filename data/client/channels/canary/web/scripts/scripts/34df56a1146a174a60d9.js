"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57539"],
  {
    924188: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var a = n(200651);
      n(192379);
      var i = n(481060),
        r = n(313201),
        o = n(468706),
        s = n(388032),
        l = n(136958);
      function d(t) {
        let { channelId: e, messageId: n, onClose: d, transitionState: c } = t,
          u = (0, r.Dt)();
        return (0, a.jsx)(i.ModalRoot, {
          transitionState: c,
          "aria-labelledby": u,
          size: i.ModalSize.SMALL,
          children: (0, a.jsxs)(i.ModalContent, {
            className: l.container,
            children: [
              (0, a.jsx)(i.Heading, {
                id: u,
                variant: "heading-lg/bold",
                color: "header-primary",
                className: l.header,
                children: s.intl.string(s.t.B3vFdX),
              }),
              (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: l.__invalid_subheader,
                children: s.intl.string(s.t.bNMQVF),
              }),
              (0, a.jsxs)("div", {
                className: l.buttonContainer,
                children: [
                  (0, a.jsx)(i.Button, {
                    className: l.button,
                    size: i.Button.Sizes.MEDIUM,
                    color: i.Button.Colors.BRAND,
                    onClick: d,
                    children: s.intl.string(s.t.WAI6xs),
                  }),
                  (0, a.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: s.intl.format(s.t.Ge0HUl, {
                      handleFalsePositiveHook: () => {
                        d(), (0, o.e)(e, n);
                      },
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    136958: function (t, e, n) {
      t.exports = {
        container: "container_ea42ff",
        header: "header_ea42ff",
        buttonContainer: "buttonContainer_ea42ff",
        button: "button_ea42ff",
      };
    },
  },
]);
//# sourceMappingURL=34df56a1146a174a60d9.js.map
