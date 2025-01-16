"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86060"],
  {
    816607: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n(47120);
      var a = n(200651);
      n(192379);
      var i = n(512722),
        r = n.n(i),
        c = n(481060),
        o = n(584825),
        s = n(353254),
        l = n(866104),
        d = n(388032),
        m = n(700683);
      function u(e) {
        let { onClose: t, guildId: n, transitionState: i } = e,
          u = (0, o.YB)(n);
        r()(null != u, "subscriptionsSettings cannot be null");
        let h = u.cover_image_asset,
          [p] = (0, s.Z)(null != h ? h : void 0);
        return (0, a.jsxs)(c.ModalRoot, {
          className: m.modal,
          size: c.ModalSize.MEDIUM,
          transitionState: i,
          "aria-label": d.intl.string(d.t.D98gR0),
          children: [
            (0, a.jsx)("div", {
              ref: p,
              className: m.coverImageContainer,
              children: null != h && (0, a.jsx)(l.Z, { coverImageAsset: h }),
            }),
            (0, a.jsx)(c.Heading, {
              variant: "text-lg/medium",
              color: "header-primary",
              className: m.header,
              children: d.intl.string(d.t.xPum5e),
            }),
            (0, a.jsx)(c.ModalContent, {
              className: m.content,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: m.description,
                children: u.description,
              }),
            }),
            (0, a.jsx)(c.ModalFooter, {
              className: m.__invalid_footer,
              children: (0, a.jsx)(c.Button, {
                onClick: t,
                children: d.intl.string(d.t.wdo1oK),
              }),
            }),
          ],
        });
      }
    },
    700683: function (e, t, n) {
      e.exports = {
        modal: "modal_cde5c6",
        coverImageContainer: "coverImageContainer_cde5c6",
        header: "header_cde5c6",
        content: "content_cde5c6",
        description: "description_cde5c6",
      };
    },
  },
]);
//# sourceMappingURL=9b06c9c33bb6890f905b.js.map
