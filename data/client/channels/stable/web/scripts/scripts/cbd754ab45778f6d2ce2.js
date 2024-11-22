"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38813"],
  {
    541501: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return s;
          },
        });
      var t = n(200651),
        r = n(192379),
        o = n(232713),
        i = n(481060),
        u = n(239091),
        l = n(667142),
        c = n(388032);
      function s(e) {
        let { onSelect: a, onClose: n } = e,
          s = (function () {
            let e = l.ZP.useState((e) => e.timeToLiveMs, o.X);
            return (0, t.jsx)(i.MenuControlItem, {
              id: "opacity",
              "aria-haspopup": !0,
              label: "Time To Live",
              control: (a, n) =>
                (0, t.jsx)(i.MenuSliderControl, {
                  ...a,
                  ref: n,
                  value: e,
                  maxValue: l.VX,
                  minValue: l.ih,
                  renderValue: (e) => "".concat(e, "ms"),
                  onChange: (e) => (0, l.S_)(e),
                  "aria-label": "Time To Live",
                }),
            });
          })(),
          p = (function () {
            let e = l.ZP.useState((e) => e.reappearTimeMs, o.X);
            return (0, t.jsx)(i.MenuControlItem, {
              id: "opacity",
              "aria-haspopup": !0,
              label: "Time To Reappear",
              control: (a, n) =>
                (0, t.jsx)(i.MenuSliderControl, {
                  ...a,
                  ref: n,
                  value: e,
                  maxValue: l.V5,
                  minValue: l.xc,
                  renderValue: (e) => "".concat(e, "ms"),
                  onChange: (e) => (0, l.Df)(e),
                  "aria-label": "Time To Reappear",
                }),
            });
          })(),
          d = r.useRef(n);
        return (
          r.useEffect(() => void (d.current = n)),
          r.useEffect(() => () => d.current(), []),
          (0, t.jsxs)(i.Menu, {
            navId: "overlay-click-zone-debug-context-menu",
            onClose: u.Zy,
            "aria-label": c.intl.string(c.t.tPfVWl),
            onSelect: a,
            children: [s, p],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=cbd754ab45778f6d2ce2.js.map
