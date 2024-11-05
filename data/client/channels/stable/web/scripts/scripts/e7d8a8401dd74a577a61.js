"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34684"],
  {
    68738: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return d;
          },
        });
      var i = e(200651),
        o = e(192379),
        r = e(481060),
        a = e(239091),
        u = e(249453),
        l = e(991249),
        c = e(388032);
      function d(t) {
        let { widget: n, onSelect: e, onClose: d } = t,
          s = (0, u.Z)(n),
          f = (0, l.Z)(
            n.id,
            "boolean" == typeof n.meta.horizontal && n.meta.horizontal,
          ),
          p = o.useRef(d);
        return (
          o.useEffect(() => void (p.current = d)),
          o.useEffect(() => () => p.current(), []),
          (0, i.jsxs)(r.Menu, {
            navId: "overlay-go-live-widget-context-menu",
            onClose: a.Zy,
            "aria-label": c.intl.string(c.t.tPfVWl),
            onSelect: e,
            children: [f, s],
          })
        );
      }
    },
    249453: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        r = e(765250),
        a = e(388032);
      function u(t) {
        return (0, i.jsx)(o.MenuControlItem, {
          id: "opacity",
          "aria-haspopup": !0,
          label: a.intl.string(a.t.OVovCQ),
          control: (n, e) =>
            (0, i.jsx)(o.MenuSliderControl, {
              ...n,
              ref: e,
              value: 100 * t.opacity,
              maxValue: 100,
              onChange: (n) => (0, r.nv)({ widgetId: t.id, opacity: n / 100 }),
              "aria-label": a.intl.string(a.t.kbFsAA),
            }),
        });
      }
    },
    991249: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        r = e(239091),
        a = e(765250),
        u = e(388032);
      function l(t, n) {
        return (0, i.jsx)(
          o.MenuCheckboxItem,
          {
            label: u.intl.string(u.t.XQQQFB),
            checked: n,
            id: "widget-layout-type",
            action: () => {
              (0, a.zG)(t, { horizontal: !n }), (0, r.Zy)();
            },
          },
          "widget-layout-type",
        );
      }
    },
  },
]);
//# sourceMappingURL=e7d8a8401dd74a577a61.js.map
