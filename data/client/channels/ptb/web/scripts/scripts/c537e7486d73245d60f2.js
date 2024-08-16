"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41814"],
  {
    895023: function (a, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return d;
          },
        });
      var o = s(735250);
      s(470079);
      var t = s(120356),
        n = s.n(t),
        i = s(481060),
        l = s(761705),
        r = s(278054);
      function d(a) {
        let {
          className: e,
          transitionState: s,
          items: t,
          startingIndex: d,
          onClose: c,
          onIndexChange: u,
          modalCarouselClassName: h,
          modalCarouselItemClassName: p,
        } = a;
        return (0, o.jsx)(i.ModalRoot, {
          hideShadow: !0,
          className: n()(r.carouselModal, e),
          size: i.ModalSize.DYNAMIC,
          transitionState: s,
          "aria-label": "",
          onClick: c,
          children: (0, o.jsx)(l.Z, {
            className: h,
            items: t,
            startWith: d,
            onIndexChange: u,
            modalCarouselItemClassName: p,
          }),
        });
      }
    },
    278054: function (a, e, s) {
      a.exports = { carouselModal: "carouselModal_d2b9a1" };
    },
  },
]);
//# sourceMappingURL=c537e7486d73245d60f2.js.map
