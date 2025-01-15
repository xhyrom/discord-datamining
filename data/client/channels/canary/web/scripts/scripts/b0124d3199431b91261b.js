"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37194"],
  {
    298860: function (t) {
      t.exports = "/assets/d4ddab31fa5aed8d2af8.svg";
    },
    947422: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var a = n(200651);
      n(192379);
      var i = n(481060),
        l = n(313201),
        o = n(388032),
        r = n(542189),
        s = n(298860);
      let d = (t) => {
        let { text: e, icon: n, foreground: l } = t;
        return (0, a.jsxs)("div", {
          className: r.bulletContainer,
          children: [
            (0, a.jsx)("div", {
              className: r.iconContainer,
              children: (0, a.jsx)(n, {
                color: null != l ? l : "currentColor",
                className: r.bulletIcon,
                size: "custom",
                height: 40,
                width: 40,
              }),
            }),
            (0, a.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: r.bulletText,
              children: e,
            }),
          ],
        });
      };
      function c(t) {
        let { transitionState: e, onClose: n, ...c } = t,
          u = (0, l.Dt)();
        return (0, a.jsx)(i.ModalRoot, {
          transitionState: e,
          "aria-labelledby": u,
          ...c,
          size: i.ModalSize.SMALL,
          children: (0, a.jsxs)("div", {
            className: r.content,
            children: [
              (0, a.jsx)("img", {
                src: s,
                alt: o.intl.string(o.t["5DRw+/"]),
                className: r.illustration,
              }),
              (0, a.jsx)(i.Heading, {
                id: u,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: r.headerTitle,
                children: o.intl.string(o.t.UVuXCg),
              }),
              (0, a.jsx)(d, {
                text: o.intl.string(o.t.sBDfo6),
                icon: i.MicrophoneSlashIcon,
                foreground: r.red,
              }),
              (0, a.jsx)(d, {
                text: o.intl.string(o.t.x58YtL),
                icon: i.PhoneHangUpIcon,
              }),
              (0, a.jsx)(d, {
                text: o.intl.string(o.t.XtVqlZ),
                icon: i.HandRequestSpeakIcon,
              }),
              (0, a.jsx)(i.Button, {
                color: i.Button.Colors.BRAND,
                className: r.button,
                onClick: n,
                children: o.intl.string(o.t.obLqZ2),
              }),
            ],
          }),
        });
      }
    },
    542189: function (t, e, n) {
      t.exports = {
        content: "content_df0aed",
        bulletContainer: "bulletContainer_df0aed",
        iconContainer: "iconContainer_df0aed",
        bulletIcon: "bulletIcon_df0aed",
        bulletText: "bulletText_df0aed",
        headerTitle: "headerTitle_df0aed",
        button: "button_df0aed",
        illustration: "illustration_df0aed",
        red: "red_df0aed",
      };
    },
  },
]);
//# sourceMappingURL=b0124d3199431b91261b.js.map
