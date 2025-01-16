"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15915"],
  {
    799677: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var a = e(200651);
      e(192379);
      var i = e(481060),
        l = e(626135),
        o = e(39604),
        r = e(981631),
        s = e(388032),
        d = e(233850);
      function c(t) {
        let {
          transitionState: n,
          onClose: e,
          onBeforeDelete: c,
          onAfterDelete: u,
          clip: h,
        } = t;
        return (0, a.jsxs)(i.ModalRoot, {
          size: i.ModalSize.SMALL,
          transitionState: n,
          className: d.__invalid_modal,
          children: [
            (0, a.jsxs)(i.ModalContent, {
              className: d.modalContent,
              children: [
                (0, a.jsxs)("div", {
                  className: d.header,
                  children: [
                    (0, a.jsx)(i.Heading, {
                      className: d.__invalid_title,
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: s.intl.string(s.t.Lzhui4),
                    }),
                    (0, a.jsx)(i.ModalCloseButton, { onClick: e }),
                  ],
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-md/medium",
                  color: "text-normal",
                  className: d.__invalid_body,
                  children: s.intl.string(s.t.yxCBqq),
                }),
              ],
            }),
            (0, a.jsx)(i.ModalFooter, {
              children: (0, a.jsx)(i.Button, {
                color: i.Button.Colors.RED,
                onClick: function () {
                  null == c || c(),
                    o.sS(h.filepath),
                    u(),
                    l.default.track(r.rMx.CLIP_DELETED);
                },
                children: s.intl.string(s.t.VRWPDg),
              }),
            }),
          ],
        });
      }
    },
    233850: function (t, n, e) {
      t.exports = {
        modalContent: "modalContent_e85109",
        header: "header_e85109",
      };
    },
  },
]);
//# sourceMappingURL=a154058f5060102ce05c.js.map
