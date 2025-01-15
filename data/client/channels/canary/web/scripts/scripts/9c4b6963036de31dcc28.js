"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30019"],
  {
    719498: function (a, t, e) {
      e.r(t);
      var n = e(200651),
        i = e(192379),
        r = e(481060),
        o = e(933557),
        s = e(925329),
        d = e(296023),
        l = e(388032),
        c = e(884517);
      t.default = (a) => {
        let { channel: t, application: x, onClose: h, transitionState: m } = a,
          u = (0, d.w)(t),
          j = i.useCallback(
            () => (
              h(),
              (0, r.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                  e.e("38902"),
                  e.e("31907"),
                ]).then(e.bind(e, 366854));
                return (e) =>
                  (0, n.jsx)(a, { ...e, channelId: t.id, application: x });
              })
            ),
            [x, t.id, h],
          ),
          p = (0, o.ZP)(t, !0);
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: m,
          "aria-label": l.intl.string(l.t.OJknho),
          children: [
            (0, n.jsx)(r.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                children: l.intl.string(l.t.OJknho),
              }),
            }),
            (0, n.jsxs)(r.ModalContent, {
              className: c.content,
              children: [
                (0, n.jsx)(s.Z, { game: x, size: s.Z.Sizes.LARGE }),
                (0, n.jsxs)("div", {
                  className: c.metadata,
                  children: [
                    (0, n.jsxs)("div", {
                      className: c.metadataHeader,
                      children: [
                        (0, n.jsx)(r.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: x.name,
                        }),
                        (0, n.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: l.intl.format(l.t["0NJZAQ"], {
                            channelName: p,
                          }),
                        }),
                      ],
                    }),
                    null != u &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", { className: c.divider }),
                          (0, n.jsx)(r.Text, {
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
            (0, n.jsxs)(r.ModalFooter, {
              children: [
                (0, n.jsx)(r.Button, {
                  onClick: j,
                  color: r.Button.Colors.RED,
                  children: l.intl.string(l.t.LLWaxc),
                }),
                (0, n.jsx)(r.Button, {
                  onClick: h,
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.PRIMARY,
                  children: l.intl.string(l.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    884517: function (a, t, e) {
      a.exports = {
        content: "content_b64a98",
        metadata: "metadata_b64a98",
        metadataHeader: "metadataHeader_b64a98",
        divider: "divider_b64a98",
      };
    },
  },
]);
//# sourceMappingURL=9c4b6963036de31dcc28.js.map
