"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6074"],
  {
    963705: function (e) {
      e.exports = "/assets/090652a5e6f673e62f8a.svg";
    },
    443189: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return u;
          },
        });
      var n = t(735250),
        s = t(470079),
        o = t(481060),
        r = t(313201),
        c = t(626135),
        d = t(981631),
        i = t(689938),
        l = t(817257),
        C = t(963705);
      function u(e) {
        let { source: a, onClose: t, transitionState: u } = e;
        s.useEffect(() => {
          c.default.track(d.rMx.OPEN_MODAL, {
            type: d.jXE.CONTACT_SYNC_NC_MODAL,
            source: { location: a },
          });
        }, [a]);
        let N = (0, r.Dt)();
        return (0, n.jsxs)(o.ModalRoot, {
          className: l.contactSync,
          transitionState: u,
          "aria-labelledby": N,
          children: [
            (0, n.jsx)(o.ModalCloseButton, {
              onClick: t,
              className: l.modalCloseButton,
            }),
            (0, n.jsxs)("div", {
              className: l.inner,
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  color: "header-primary",
                  className: l.header,
                  children: i.Z.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_TITLE,
                }),
                (0, n.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: i.Z.Messages.NOTIFICATION_CENTER_CONTACT_SYNC_BODY,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: l.container,
              children: (0, n.jsx)("img", { alt: "", src: C }),
            }),
          ],
        });
      }
    },
    817257: function (e, a, t) {
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
//# sourceMappingURL=f776b8b95c9c16663c6d.js.map
