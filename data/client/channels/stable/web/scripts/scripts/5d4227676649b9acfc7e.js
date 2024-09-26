"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2634"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    548841: function (e, s, a) {
      a.r(s);
      var o = a(735250);
      a(470079);
      var c = a(481060),
        n = a(287734),
        r = a(313201),
        t = a(471253),
        i = a(939863),
        d = a(689938),
        l = a(630489);
      s.default = (e) => {
        let { channel: s, ...a } = e,
          I = (0, r.Dt)();
        return (0, o.jsxs)(c.ConfirmModal, {
          confirmText: d.Z.Messages.END_STAGE,
          cancelText: d.Z.Messages.CANCEL,
          onConfirm: () => {
            (0, t.NZ)(s), n.default.disconnect();
          },
          confirmButtonColor: c.Button.Colors.RED,
          bodyClassName: l.body,
          ...a,
          children: [
            (0, o.jsx)(i.Z, {
              className: l.headerIconContainer,
              children: (0, o.jsx)("div", {
                className: l.iconBackground,
                children: (0, o.jsx)(c.StageXIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                  className: l.headerIcon,
                }),
              }),
            }),
            (0, o.jsx)(c.Heading, {
              id: I,
              variant: "heading-xl/semibold",
              color: "header-primary",
              className: l.title,
              children: d.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE,
            }),
            (0, o.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: l.subtitle,
              children: d.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE,
            }),
          ],
        });
      };
    },
    939863: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return l;
        },
      });
      var o = a(735250);
      a(470079);
      var c = a(120356),
        n = a.n(c),
        r = a(689938),
        t = a(843117),
        i = a(296507),
        d = a(866402);
      function l(e) {
        let { className: s, children: a } = e;
        return (0, o.jsxs)("div", {
          className: n()(t.container, s),
          children: [
            (0, o.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: d,
              className: n()(t.sparkleIcon, t.sparkleBottom),
            }),
            a,
            (0, o.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: i,
              className: n()(t.sparkleIcon, t.sparkleTop),
            }),
          ],
        });
      }
    },
    630489: function (e, s, a) {
      e.exports = {
        body: "body_fc08d1",
        headerIconContainer: "headerIconContainer_fc08d1",
        iconBackground: "iconBackground_fc08d1",
        headerIcon: "headerIcon_fc08d1",
        title: "title_fc08d1",
        subtitle: "subtitle_fc08d1",
      };
    },
    843117: function (e, s, a) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=5d4227676649b9acfc7e.js.map
