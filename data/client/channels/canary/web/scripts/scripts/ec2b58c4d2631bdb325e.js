"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81811"],
  {
    481637: function (e, t, i) {
      var n = i(818083);
      t.Z = (0, n.B)({
        kind: "user",
        id: "2021-10_runtime_accessibility_system",
        label: "Runtime Accessibility System",
        defaultConfig: { enabled: !1, reporting: !1 },
        treatments: [
          {
            id: 1,
            label: "Enabled but silent",
            config: { enabled: !0, reporting: !1 },
          },
          {
            id: 2,
            label: "Enabled and reporting",
            config: { enabled: !0, reporting: !0 },
          },
        ],
      });
    },
    80753: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return d;
          },
        }),
        i(47120);
      var n = i(735250),
        o = i(470079),
        l = i(481060),
        r = i(377171),
        s = i(31336),
        a = i(481637),
        c = i(532810),
        u = i(915312);
      function d() {
        let [e, t] = o.useState(!1),
          i = (0, u.LL)(),
          { reporting: d } = a.Z.useExperiment(
            { location: "be7a1c_1" },
            { autoTrackExposure: !1 },
          );
        return (o.useEffect(() => {
          if (d && e && null != i)
            return (
              i.forEach((e) => {
                e.elements.forEach((e) => {
                  e.setAttribute(c.OF, "");
                });
              }),
              () => {
                i.forEach((e) => {
                  e.elements.forEach((e) => {
                    e.removeAttribute(c.OF);
                  });
                });
              }
            );
        }, [i, d, e]),
        d && null != i && 0 !== i.length)
          ? (0, n.jsxs)("div", {
              style: {
                backgroundColor: r.Z.INFO_DANGER_BACKGROUND,
                color: r.Z.INFO_DANGER_TEXT,
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
              },
              children: [
                (0, n.jsx)(l.Text, {
                  variant: "text-sm/semibold",
                  color: "info-danger-text",
                  children:
                    "Accessibility compliance issue(s) detected, check in-app DevTools",
                }),
                (0, n.jsxs)("div", {
                  style: {
                    display: "grid",
                    gridAutoFlow: "column",
                    gap: 4,
                    marginLeft: "auto",
                  },
                  children: [
                    (0, n.jsx)(l.Button, {
                      size: l.Button.Sizes.TINY,
                      color: l.Button.Colors.RED,
                      style: { marginLeft: "auto" },
                      onClick: s.SO,
                      children: "Open DevTools",
                    }),
                    (0, n.jsxs)(l.Button, {
                      size: l.Button.Sizes.TINY,
                      color: l.Button.Colors.RED,
                      style: { marginLeft: "auto" },
                      onClick: () => t(!e),
                      children: [e ? "Hide" : "Show", " Overlays"],
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=ec2b58c4d2631bdb325e.js.map
