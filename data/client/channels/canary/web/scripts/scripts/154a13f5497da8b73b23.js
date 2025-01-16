"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54343"],
  {
    849493: function (i, o, d) {
      d.r(o),
        d.d(o, {
          default: function () {
            return r;
          },
        });
      var e = d(200651);
      d(192379);
      var l = d(481060),
        n = d(915312);
      function r() {
        return (
          (0, n.bN)(document.body),
          (0, e.jsx)(l.HiddenVisually, {
            children: (0, e.jsx)("svg", {
              "aria-hidden": !0,
              children: (0, e.jsxs)("filter", {
                id: "violation-overlay",
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                children: [
                  (0, e.jsx)("feFlood", {
                    floodColor: "#ff0000",
                    floodOpacity: "0.3",
                    result: "floodFill",
                  }),
                  (0, e.jsx)("feBlend", {
                    in: "SourceGraphic",
                    in2: "floodFill",
                    mode: "overlay",
                  }),
                ],
              }),
            }),
          })
        );
      }
      d(12460);
    },
    12460: function (i, o, d) {
      i.exports = {};
    },
  },
]);
//# sourceMappingURL=154a13f5497da8b73b23.js.map
