"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14760"],
  {
    755524: function (s) {
      s.exports = "/assets/f74feb5909f5634821d4.svg";
    },
    788572: function (s) {
      s.exports = "/assets/ddf05a05371ca81efeb6.svg";
    },
    262529: function (s) {
      s.exports = "/assets/cd2d8160d7f5837fb8db.svg";
    },
    4921: function (s) {
      s.exports = "/assets/89c897ec18ffa3754c66.svg";
    },
    663416: function (s) {
      s.exports = "/assets/0b4ca2556b4102609562.svg";
    },
    838295: function (s) {
      s.exports = "/assets/d2cbc73c364194e90256.svg";
    },
    897140: function (s, e, a) {
      a.r(e);
      var t = a(735250);
      a(470079);
      var _ = a(392711),
        o = a.n(_),
        c = a(792986),
        S = a(780384),
        d = a(481060),
        O = a(410030),
        n = a(313201),
        L = a(689938),
        l = a(309713),
        i = a(755524),
        r = a(788572),
        E = a(262529);
      let C = [a(4921), a(663416), a(838295)],
        f = [i, r, E],
        M = [
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_01,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_02,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_03,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_04,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_05,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_06,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_07,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_08,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_09,
          () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_10,
        ];
      e.default = (s) => {
        let { transitionState: e, onClose: a } = s,
          _ = (0, O.ZP)(),
          i = (0, n.Dt)(),
          r = (0, S.wj)(_) ? f : C,
          E = (0, c.Z)(() => o().sample(r), [r]),
          g = (0, c.Z)(() => o().sample(M), []);
        return (0, t.jsxs)(d.ModalRoot, {
          transitionState: e,
          className: l.root,
          "aria-labelledby": i,
          children: [
            (0, t.jsx)("img", { alt: "", src: E, className: l.image }),
            (0, t.jsxs)(d.ModalContent, {
              className: l.modal,
              children: [
                (0, t.jsx)(d.Heading, {
                  variant: "heading-xl/semibold",
                  className: l.followSuccessHeader,
                  id: i,
                  children: g(),
                }),
                (0, t.jsx)(d.Text, {
                  color: "text-muted",
                  variant: "text-md/medium",
                  className: l.body,
                  children: L.Z.Messages.FOLLOW_SUCCESS_MODAL_BODY,
                }),
                (0, t.jsx)(d.Button, {
                  onClick: a,
                  children: L.Z.Messages.TUTORIAL_CLOSE,
                }),
              ],
            }),
          ],
        });
      };
    },
    309713: function (s, e, a) {
      s.exports = {
        modal: "modal_fe68e0",
        followSuccessHeader: "followSuccessHeader_fe68e0",
        image: "image_fe68e0",
        body: "body_fe68e0",
        root: "root_fe68e0",
      };
    },
  },
]);
//# sourceMappingURL=49289775851a6c9ef945.js.map
