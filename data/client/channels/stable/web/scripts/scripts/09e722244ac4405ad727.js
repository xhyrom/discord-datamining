"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63757"],
  {
    308524: function (e) {
      e.exports = "/assets/79c37e7e9e731159016a.svg";
    },
    309690: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return r;
          },
        });
      var a = t(735250);
      t(470079);
      var o = t(481060),
        l = t(600164),
        n = t(689938),
        d = t(766286);
      function r(e) {
        let { onClose: s, transitionState: t } = e;
        return (0, a.jsxs)(o.ModalRoot, {
          size: o.ModalSize.SMALL,
          transitionState: t,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              justify: l.Z.Justify.BETWEEN,
              children: [
                (0, a.jsx)(o.FormTitle, {
                  tag: "h2",
                  className: d.header,
                  children: n.Z.Messages.STREAM_FULL_MODAL_HEADER,
                }),
                (0, a.jsx)(o.ModalCloseButton, {
                  onClick: s,
                  className: d.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              children: [
                (0, a.jsx)(o.Text, {
                  variant: "text-md/medium",
                  children: n.Z.Messages.STREAM_FULL_MODAL_BODY,
                }),
                (0, a.jsx)("div", { className: d.fullArt }),
              ],
            }),
            (0, a.jsx)(o.ModalFooter, {
              children: (0, a.jsx)(o.Button, {
                onClick: s,
                children: n.Z.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    766286: function (e, s, t) {
      e.exports = {
        fullArt: "fullArt_ae7ad3",
        header: "header_ae7ad3",
        modalCloseButton: "modalCloseButton_ae7ad3",
      };
    },
  },
]);
//# sourceMappingURL=09e722244ac4405ad727.js.map
