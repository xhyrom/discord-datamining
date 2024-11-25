"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6074"],
  {
    963705: function (e) {
      e.exports = "/assets/090652a5e6f673e62f8a.svg";
    },
    443189: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n(200651),
        r = n(192379),
        s = n(481060),
        o = n(313201),
        c = n(626135),
        i = n(981631),
        d = n(388032),
        l = n(882506),
        u = n(963705);
      function h(e) {
        let { source: t, onClose: n, transitionState: h } = e;
        r.useEffect(() => {
          c.default.track(i.rMx.OPEN_MODAL, {
            type: i.jXE.CONTACT_SYNC_NC_MODAL,
            source: { location: t },
          });
        }, [t]);
        let x = (0, o.Dt)();
        return (0, a.jsxs)(s.ModalRoot, {
          className: l.contactSync,
          transitionState: h,
          "aria-labelledby": x,
          children: [
            (0, a.jsx)(s.ModalCloseButton, {
              onClick: n,
              className: l.modalCloseButton,
            }),
            (0, a.jsxs)("div", {
              className: l.inner,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-xl/extrabold",
                  color: "header-primary",
                  className: l.header,
                  children: d.intl.string(d.t.fdR8HR),
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: d.intl.string(d.t.JXyNq6),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: l.container,
              children: (0, a.jsx)("img", { alt: "", src: u }),
            }),
          ],
        });
      }
    },
    882506: function (e, t, n) {
      e.exports = {
        container: "container_ee842d",
        inner: "inner_ee842d",
        modalCloseButton: "modalCloseButton_ee842d",
        contactSync: "contactSync_ee842d",
        header: "header_ee842d",
      };
    },
  },
]);
//# sourceMappingURL=df9692d79c8833d03701.js.map
