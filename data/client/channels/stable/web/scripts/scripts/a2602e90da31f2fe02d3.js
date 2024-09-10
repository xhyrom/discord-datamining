"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15915"],
  {
    799677: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return c;
          },
        });
      var n = t(735250);
      t(470079);
      var s = t(481060),
        o = t(626135),
        l = t(39604),
        i = t(981631),
        d = t(689938),
        r = t(808961);
      function c(e) {
        let {
          transitionState: a,
          onClose: t,
          onBeforeDelete: c,
          onAfterDelete: _,
          clip: u,
        } = e;
        return (0, n.jsxs)(s.ModalRoot, {
          size: s.ModalSize.SMALL,
          transitionState: a,
          className: r.__invalid_modal,
          children: [
            (0, n.jsxs)(s.ModalContent, {
              className: r.modalContent,
              children: [
                (0, n.jsxs)("div", {
                  className: r.header,
                  children: [
                    (0, n.jsx)(s.Heading, {
                      className: r.__invalid_title,
                      variant: "text-md/semibold",
                      color: "header-primary",
                      children: d.Z.Messages.CLIPS_DELETE_MODAL_TITLE,
                    }),
                    (0, n.jsx)(s.ModalCloseButton, { onClick: t }),
                  ],
                }),
                (0, n.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-normal",
                  className: r.__invalid_body,
                  children: d.Z.Messages.CLIPS_DELETE_MODAL_SUBTITLE,
                }),
              ],
            }),
            (0, n.jsx)(s.ModalFooter, {
              children: (0, n.jsx)(s.Button, {
                color: s.Button.Colors.RED,
                onClick: function () {
                  null == c || c(),
                    l.sS(u.filepath),
                    _(),
                    o.default.track(i.rMx.CLIP_DELETED);
                },
                children: d.Z.Messages.CLIPS_DELETE_CLIP,
              }),
            }),
          ],
        });
      }
    },
    808961: function (e, a, t) {
      e.exports = {
        modalContent: "modalContent_e85109",
        header: "header_e85109",
      };
    },
  },
]);
//# sourceMappingURL=a2602e90da31f2fe02d3.js.map
