"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5609"],
  {
    336231: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return r;
          },
        }),
        o(47120);
      var l = o(735250),
        s = o(470079),
        u = o(481060),
        n = o(689938);
      function r(e) {
        let {
            defaultColor: t,
            colors: o,
            value: r,
            onChange: a,
            disabled: i = !1,
            customPickerPosition: c = "bottom",
          } = e,
          [C, d] = s.useState(() =>
            0 === r || r === t || o.some((e) => e === r) ? null : r,
          );
        s.useEffect(() => {
          d(0 === r || r === t || o.some((e) => e === r) ? null : r);
        }, [r, o, t]);
        let p = s.useCallback(
            (e) => {
              null == a || a(e), d(null);
            },
            [a, d],
          ),
          k = s.useCallback(
            (e) => {
              null == a || a(e), d(e);
            },
            [a, d],
          ),
          h = s.useCallback(
            () => (0, l.jsx)(u.CustomColorPicker, { onChange: k, value: C }),
            [k, C],
          ),
          b = s.useCallback(
            (e) => {
              let t = (0, l.jsx)(u.ColorPickerCustomButton, {
                ...e,
                "aria-label": n.Z.Messages.CUSTOM_COLOR,
              });
              return i
                ? t
                : (0, l.jsx)(u.Popout, {
                    renderPopout: h,
                    position: c,
                    children: (e) =>
                      (0, l.jsx)(u.Tooltip, {
                        text: n.Z.Messages.CUSTOM_COLOR,
                        position: "bottom",
                        children: (o) =>
                          (0, l.jsx)("div", { ...o, ...e, children: t }),
                      }),
                  });
            },
            [c, i, h],
          ),
          x = s.useCallback(
            (e) => {
              let t = (0, l.jsx)(u.ColorPickerDefaultButton, { ...e });
              return i
                ? t
                : (0, l.jsx)(u.Tooltip, {
                    text: n.Z.Messages.DEFAULT,
                    position: "bottom",
                    children: (e) => (0, l.jsx)("div", { ...e, children: t }),
                  });
            },
            [i],
          );
        return (0, l.jsx)(u.ColorPicker, {
          ...e,
          renderDefaultButton: x,
          renderCustomButton: b,
          customColor: C,
          onChange: p,
        });
      }
    },
  },
]);
//# sourceMappingURL=1a5fab402b73980cab92.js.map
