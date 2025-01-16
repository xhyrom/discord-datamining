"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94005"],
  {
    144462: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        }),
        n(47120);
      var o = n(200651),
        a = n(192379),
        r = n(481060),
        s = n(313201),
        i = n(273504),
        l = n(388032),
        c = n(246805);
      function d(t) {
        let {
            initialCustomMessage: e,
            onSubmit: n,
            onClose: d,
            transitionState: u,
          } = t,
          h = (0, s.Dt)(),
          [x, C] = a.useState(e);
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: u,
          "aria-labelledby": h,
          size: r.ModalSize.SMALL,
          children: [
            (0, o.jsxs)(r.ModalContent, {
              className: c.actionContentContainer,
              children: [
                (0, o.jsx)(r.Heading, {
                  id: h,
                  color: "header-primary",
                  variant: "heading-md/semibold",
                  className: c.header,
                  children: l.intl.string(l.t.Df4aUF),
                }),
                (0, o.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: l.intl.string(l.t.eOWEmJ),
                }),
                (0, o.jsx)(r.TextArea, {
                  className: c.customMessageTextArea,
                  placeholder: l.intl.string(l.t.gDZw7O),
                  value: x,
                  onChange: C,
                  maxLength: i._6,
                }),
              ],
            }),
            (0, o.jsxs)(r.ModalFooter, {
              children: [
                (0, o.jsx)(r.Button, {
                  onClick: () => {
                    n(x);
                  },
                  color: r.Button.Colors.BRAND,
                  size: r.Button.Sizes.SMALL,
                  children: l.intl.string(l.t.bt75u7),
                }),
                (0, o.jsx)(r.Button, {
                  onClick: () => {
                    d();
                  },
                  color: r.Button.Colors.TRANSPARENT,
                  look: r.Button.Looks.LINK,
                  children: l.intl.string(l.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    246805: function (t, e, n) {
      t.exports = {
        actionContentContainer: "actionContentContainer_cd8969",
        header: "header_cd8969",
        customMessageTextArea: "customMessageTextArea_cd8969",
      };
    },
  },
]);
//# sourceMappingURL=ce5824addf9c7a9d9fb5.js.map
