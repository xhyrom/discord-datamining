"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14089"],
  {
    262528: function (e, t, a) {
      a.r(t);
      var n = a(200651),
        r = a(192379),
        i = a(481060),
        s = a(933557),
        d = a(925329),
        l = a(296023),
        o = a(388032),
        c = a(164933);
      t.default = (e) => {
        let { channel: t, application: x, onClose: h, transitionState: m } = e,
          u = (0, l.w)(t),
          j = r.useCallback(
            () => (
              h(),
              (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  a.e("38902"),
                  a.e("39955"),
                ]).then(a.bind(a, 547653));
                return (a) =>
                  (0, n.jsx)(e, { ...a, channelId: t.id, application: x });
              })
            ),
            [x, t.id, h],
          ),
          p = (0, s.ZP)(t, !0);
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: m,
          "aria-label": o.intl.string(o.t["Qq+kXF"]),
          children: [
            (0, n.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: o.intl.string(o.t["Qq+kXF"]),
              }),
            }),
            (0, n.jsxs)(i.ModalContent, {
              className: c.content,
              children: [
                (0, n.jsx)(d.Z, { game: x, size: d.Z.Sizes.LARGE }),
                (0, n.jsxs)("div", {
                  className: c.metadata,
                  children: [
                    (0, n.jsxs)("div", {
                      className: c.metadataHeader,
                      children: [
                        (0, n.jsx)(i.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: x.name,
                        }),
                        (0, n.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: o.intl.format(o.t["0NJZAQ"], {
                            channelName: p,
                          }),
                        }),
                      ],
                    }),
                    null != u &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", { className: c.divider }),
                          (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: u,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(i.ModalFooter, {
              children: [
                (0, n.jsx)(i.Button, {
                  onClick: j,
                  color: i.Button.Colors.RED,
                  children: o.intl.string(o.t.AmrSuL),
                }),
                (0, n.jsx)(i.Button, {
                  onClick: h,
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  children: o.intl.string(o.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    164933: function (e, t, a) {
      e.exports = {
        content: "content_e5416c",
        metadata: "metadata_e5416c",
        metadataHeader: "metadataHeader_e5416c",
        divider: "divider_e5416c",
      };
    },
  },
]);
//# sourceMappingURL=4ae342080df567825cb4.js.map
