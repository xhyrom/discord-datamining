"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5609"],
  {
    336231: function (t, o, e) {
      e.r(o),
        e.d(o, {
          default: function () {
            return s;
          },
        }),
        e(47120);
      var l = e(200651),
        n = e(192379),
        r = e(481060),
        u = e(388032);
      function s(t) {
        let {
            defaultColor: o,
            colors: e,
            value: s,
            onChange: i,
            disabled: a = !1,
            customPickerPosition: c = "bottom",
          } = t,
          [C, d] = n.useState(() =>
            0 === s || s === o || e.some((t) => t === s) ? null : s,
          );
        n.useEffect(() => {
          d(0 === s || s === o || e.some((t) => t === s) ? null : s);
        }, [s, e, o]);
        let p = n.useCallback(
            (t) => {
              null == i || i(t), d(null);
            },
            [i, d],
          ),
          k = n.useCallback(
            (t) => {
              null == i || i(t), d(t);
            },
            [i, d],
          ),
          b = n.useCallback(
            () => (0, l.jsx)(r.CustomColorPicker, { onChange: k, value: C }),
            [k, C],
          ),
          h = n.useCallback(
            (t) => {
              let o = (0, l.jsx)(r.ColorPickerCustomButton, {
                ...t,
                "aria-label": u.intl.string(u.t["FHBa//"]),
              });
              return a
                ? o
                : (0, l.jsx)(r.Popout, {
                    renderPopout: b,
                    position: c,
                    children: (t) =>
                      (0, l.jsx)(r.Tooltip, {
                        text: u.intl.string(u.t["FHBa//"]),
                        position: "bottom",
                        children: (e) =>
                          (0, l.jsx)("div", { ...e, ...t, children: o }),
                      }),
                  });
            },
            [c, a, b],
          ),
          x = n.useCallback(
            (t) => {
              let o = (0, l.jsx)(r.ColorPickerDefaultButton, { ...t });
              return a
                ? o
                : (0, l.jsx)(r.Tooltip, {
                    text: u.intl.string(u.t.bBvAEB),
                    position: "bottom",
                    children: (t) => (0, l.jsx)("div", { ...t, children: o }),
                  });
            },
            [a],
          );
        return (0, l.jsx)(r.ColorPicker, {
          ...t,
          renderDefaultButton: x,
          renderCustomButton: h,
          customColor: C,
          onChange: p,
        });
      }
    },
  },
]);
//# sourceMappingURL=f7443b337b8251eb83dc.js.map
