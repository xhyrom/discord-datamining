"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43057"],
  {
    968650: function (e, i, n) {
      n.r(i);
      var t = n(200651);
      n(192379);
      var d = n(481060);
      i.default = (e) => {
        let { entry: i, transitionState: n, requestId: r } = e;
        return (0, t.jsxs)(d.ModalRoot, {
          size: d.ModalSize.DYNAMIC,
          transitionState: n,
          children: [
            (0, t.jsx)(d.ModalHeader, {
              children: (0, t.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: "Debugging entry: ".concat(i.id),
              }),
            }),
            (0, t.jsx)(d.ModalContent, {
              children: (0, t.jsx)("div", {
                style: { userSelect: "text", padding: "16px" },
                children: (0, t.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: (0, t.jsx)("pre", {
                    children: JSON.stringify(
                      { entry: i, requestId: r },
                      null,
                      2,
                    ),
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=ecdb70180d761d1e08d6.js.map
