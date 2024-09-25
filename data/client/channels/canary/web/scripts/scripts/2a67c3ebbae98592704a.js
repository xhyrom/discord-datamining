"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16133"],
  {
    641472: function (e) {
      e.exports = "/assets/01c9a2f439b865af3c18.png";
    },
    743648: function (e, a, s) {
      s.r(a);
      var d = s(735250);
      s(470079);
      var t = s(120356),
        c = s.n(t),
        n = s(793030),
        r = s(481060),
        i = s(313201),
        l = s(976465),
        o = s(474936),
        m = s(689938),
        _ = s(707707);
      a.default = (e) => {
        let { transitionState: a, onClose: s } = e,
          t = (0, i.Dt)(),
          b = Object.values(o.VU).map((e) => {
            let a = (0, l.f9)(e),
              s = (0, l.g_)(e),
              t = (0, l.sf)(e);
            return (0, d.jsxs)(
              "div",
              {
                className: _.badge,
                children: [
                  (0, d.jsx)("img", {
                    src: s,
                    alt: a,
                    className: _.badgeImage,
                  }),
                  (0, d.jsxs)("div", {
                    className: _.badgeText,
                    children: [
                      (0, d.jsx)(n.xv, {
                        variant: "text-md/semibold",
                        className: _.badgeName,
                        children: a,
                      }),
                      (0, d.jsx)(n.xv, {
                        variant: "text-xs/normal",
                        children: t,
                      }),
                    ],
                  }),
                ],
              },
              e,
            );
          });
        return (0, d.jsxs)(r.ModalRoot, {
          transitionState: a,
          "aria-labelledby": t,
          className: c()(_.container, "theme-dark"),
          children: [
            (0, d.jsx)(r.ModalCloseButton, {
              onClick: s,
              className: _.closeButton,
            }),
            (0, d.jsxs)(r.ModalContent, {
              className: _.content,
              children: [
                (0, d.jsx)(n.xv, {
                  variant: "display-md",
                  className: _.header,
                  children:
                    m.Z.Messages.NITRO_HOME_TIERED_TENURE_BADGES_MODAL_HEADER,
                }),
                (0, d.jsx)(n.xv, {
                  variant: "text-md/medium",
                  className: _.subHeader,
                  children:
                    m.Z.Messages
                      .NITRO_HOME_TIERED_TENURE_BADGES_MODAL_SUB_HEADER,
                }),
                (0, d.jsx)("div", { className: _.badgeList, children: b }),
              ],
            }),
          ],
        });
      };
    },
    707707: function (e, a, s) {
      e.exports = {
        container: "container_d0ec10",
        closeButton: "closeButton_d0ec10",
        content: "content_d0ec10",
        header: "header_d0ec10",
        subHeader: "subHeader_d0ec10",
        badge: "badge_d0ec10",
        badgeImage: "badgeImage_d0ec10",
        badgeText: "badgeText_d0ec10",
        badgeName: "badgeName_d0ec10",
        badgeList: "badgeList_d0ec10",
      };
    },
  },
]);
//# sourceMappingURL=2a67c3ebbae98592704a.js.map
