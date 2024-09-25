"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85885"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    124779: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return u;
          },
        });
      var n = t(735250);
      t(470079);
      var c = t(481060),
        o = t(287734),
        a = t(313201),
        r = t(471253),
        l = t(939863),
        i = t(689938),
        d = t(101957);
      function u(e) {
        let { channel: s, transitionState: t, onClose: u } = e,
          I = (0, a.Dt)();
        function _() {
          o.default.disconnect(), u();
        }
        return (0, n.jsxs)(c.ModalRoot, {
          transitionState: t,
          "aria-labelledby": I,
          children: [
            (0, n.jsxs)(c.ModalContent, {
              className: d.content,
              children: [
                (0, n.jsx)(l.Z, {
                  children: (0, n.jsx)("div", {
                    className: d.iconBackground,
                    children: (0, n.jsx)(c.StageXIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 40,
                      height: 40,
                      className: d.headerIcon,
                    }),
                  }),
                }),
                (0, n.jsx)(c.Heading, {
                  id: I,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: d.title,
                  children: i.Z.Messages.EXPLICIT_END_STAGE_TITLE,
                }),
                (0, n.jsx)(c.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: d.subtitle,
                  children: i.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE,
                }),
              ],
            }),
            (0, n.jsxs)(c.ModalFooter, {
              children: [
                (0, n.jsx)(c.Button, {
                  color: c.Button.Colors.RED,
                  onClick: function () {
                    (0, r.NZ)(s), _();
                  },
                  children: i.Z.Messages.EXPLICIT_END_STAGE_CONFIRM,
                }),
                (0, n.jsx)(c.Button, {
                  color: c.Button.Colors.PRIMARY,
                  className: d.cancelButton,
                  onClick: _,
                  children: i.Z.Messages.EXPLICIT_END_STAGE_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    939863: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return d;
        },
      });
      var n = t(735250);
      t(470079);
      var c = t(120356),
        o = t.n(c),
        a = t(689938),
        r = t(843117),
        l = t(296507),
        i = t(866402);
      function d(e) {
        let { className: s, children: t } = e;
        return (0, n.jsxs)("div", {
          className: o()(r.container, s),
          children: [
            (0, n.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: i,
              className: o()(r.sparkleIcon, r.sparkleBottom),
            }),
            t,
            (0, n.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: l,
              className: o()(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    101957: function (e, s, t) {
      e.exports = {
        content: "content_c01927",
        iconBackground: "iconBackground_c01927",
        headerIcon: "headerIcon_c01927",
        title: "title_c01927",
        subtitle: "subtitle_c01927",
        cancelButton: "cancelButton_c01927",
      };
    },
    843117: function (e, s, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=a2524fa7aac8dc46f955.js.map
