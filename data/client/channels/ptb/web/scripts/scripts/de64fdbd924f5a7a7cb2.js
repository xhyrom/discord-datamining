"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54663"],
  {
    709538: function (t) {
      t.exports = "/assets/dd674481d93a8dbd981a.svg";
    },
    691041: function (t) {
      t.exports = "/assets/d5a777d83f339c7cc387.svg";
    },
    245699: function (t) {
      t.exports = "/assets/295f4369913729a26ba0.svg";
    },
    586248: function (t) {
      t.exports = "/assets/e2940a21bcf431487a1e.svg";
    },
    126642: function (t) {
      t.exports = "/assets/682c355ab4c3e33bee49.svg";
    },
    520156: function (t, e, s) {
      s.r(e),
        s.d(e, {
          AnnouncementModal: function () {
            return x;
          },
        });
      var n = s(200651);
      s(192379);
      var i = s(481060),
        o = s(388032),
        l = s(573782);
      let a = s(691041),
        c = () =>
          (0, n.jsx)("div", {
            className: l.gifContainer,
            children: (0, n.jsx)("img", {
              src: s(709538),
              className: l.gif,
              alt: "Orb GIF",
            }),
          }),
        r = () =>
          (0, n.jsx)("div", {
            role: "img",
            className: l.orbIconContainer,
            children: (0, n.jsx)("img", { src: a, alt: "Orb Icon" }),
          }),
        d = () =>
          (0, n.jsx)("div", {
            className: l.betaBadge,
            children: o.intl.string(o.t.oW0eUV),
          }),
        m = (t) => {
          let { icon: e, text: s } = t;
          return (0, n.jsxs)("div", {
            className: l.listItem,
            children: [
              "string" == typeof e
                ? (0, n.jsx)("img", {
                    src: e,
                    className: l.listItemIcon,
                    alt: "List Icon",
                  })
                : e,
              (0, n.jsx)("div", { className: l.listItemText, children: s }),
            ],
          });
        },
        f = (t) =>
          (0, n.jsx)(i.Button, {
            ...t,
            "aria-label": o.intl.string(o.t.cpT0Cg),
            look: i.Button.Looks.BLANK,
            size: i.Button.Sizes.NONE,
            children: (0, n.jsx)(i.XSmallBoldIcon, {
              size: "md",
              color: "currentColor",
              className: l.closeButtonIcon,
            }),
          }),
        x = (t) => {
          let { onClose: e, ctaOnClick: a, transitionState: x } = t;
          return (0, n.jsxs)(i.ModalRoot, {
            size: i.ModalSize.DYNAMIC,
            className: l.container,
            transitionState: x,
            children: [
              (0, n.jsx)(f, { className: l.closeButton, onClick: e }),
              (0, n.jsxs)("div", {
                className: l.marginContainer,
                children: [
                  (0, n.jsx)(c, {}),
                  (0, n.jsx)("div", {
                    className: l.titleLeadIn,
                    children: o.intl.string(o.t.C1TOOD),
                  }),
                  (0, n.jsxs)("div", {
                    className: l.title,
                    children: [o.intl.string(o.t.XKlAys), (0, n.jsx)(d, {})],
                  }),
                  (0, n.jsxs)("div", {
                    className: l.list,
                    children: [
                      (0, n.jsx)(m, {
                        icon: s(586248),
                        text: o.intl.string(o.t.c7MXqK),
                      }),
                      (0, n.jsx)(m, {
                        icon: s(126642),
                        text: o.intl.string(o.t.bcmcCg),
                      }),
                      (0, n.jsx)(m, {
                        icon: (0, n.jsx)(r, {}),
                        text: o.intl.string(o.t.vt7mWl),
                      }),
                    ],
                  }),
                  (0, n.jsx)(i.Button, {
                    onClick: a,
                    color: l.buttonColor,
                    className: l.button,
                    children: o.intl.string(o.t.LhlgY2),
                  }),
                ],
              }),
            ],
          });
        };
      e.default = x;
    },
    573782: function (t, e, s) {
      t.exports = {
        container: "container_def129",
        marginContainer: "marginContainer_def129",
        gifContainer: "gifContainer_def129",
        gif: "gif_def129",
        list: "list_def129",
        listItem: "listItem_def129",
        listItemIcon: "listItemIcon_def129",
        listItemText: "listItemText_def129",
        button: "button_def129",
        buttonColor: "buttonColor_def129",
        titleLeadIn: "titleLeadIn_def129",
        title: "title_def129",
        closeButton: "closeButton_def129",
        closeButtonIcon: "closeButtonIcon_def129",
        betaBadge: "betaBadge_def129",
        orbIconContainer: "orbIconContainer_def129",
      };
    },
  },
]);
//# sourceMappingURL=de64fdbd924f5a7a7cb2.js.map
