"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30000"],
  {
    395332(e, t, a) {
      a.d(t, { QR: () => d, VA: () => u, w$: () => m, zd: () => s });
      var n = a(64700),
        i = a(207803),
        l = a(403362),
        o = a(369374),
        r = a(969988);
      function c(e, t) {
        let { data: a } = (0, i.FY)(),
          o = (0, r.A)(a?.map(t).filter(l.Vq) ?? [], e);
        return n.useMemo(() => [...o.values()].some((e) => e.enabled), [o]);
      }
      function d(e) {
        let { enabled: t } = o.A.useConfig({ location: e.location }),
          a = c(e, (e) => e.editExperiment);
        return !t && a;
      }
      function s(e) {
        let { enabled: t } = o.A.useConfig({ location: e.location }),
          a = c(e, (e) => e.coachmarkExperiment);
        return !t && a;
      }
      function m(e) {
        let { enabled: t } = o.A.useConfig({ location: e.location }),
          { data: a } = (0, i.FY)(),
          l = (0, r.A)(a?.map((e) => e.editExperiment) ?? [], e);
        return n.useMemo(
          () =>
            t ? [] : a?.filter((e) => l.get(e.editExperiment)?.enabled === !0),
          [t, a, l],
        );
      }
      function u(e) {
        let { enabled: t } = o.A.useConfig({ location: e.location }),
          { data: a } = (0, i.FY)(),
          c = (0, r.A)(a?.map((e) => e.editExperiment) ?? [], e),
          d = (0, r.A)(
            a?.map((e) => e.coachmarkExperiment).filter(l.Vq) ?? [],
            e,
          );
        return n.useMemo(
          () =>
            t
              ? []
              : a?.filter(
                  (e) =>
                    c.get(e.editExperiment)?.enabled === !0 &&
                    null != e.coachmarkExperiment &&
                    d.get(e.coachmarkExperiment)?.enabled === !0,
                ),
          [t, a, c, d],
        );
      }
    },
    53788(e, t, a) {
      a.d(t, { G: () => r });
      var n = a(627968);
      a(64700);
      var i = a(661531),
        l = a(996682),
        o = a(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: a,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...s
          } = e,
          m = (0, o.J)(t),
          u = m?.width ?? a,
          p = m?.height ?? r;
        return (0, n.jsx)("svg", {
          ...(0, l.A)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: u,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M15 5a3 3 0 0 0-3-3 1 1 0 0 0-1 1v2a3 3 0 0 1-.19 1.05L6.55 8.93a7.9 7.9 0 0 0-3.26 8.4c.43 1.77 1.44 3.42 3.14 4.07.86.34 1.89.6 2.95.6h8.03a2.09 2.09 0 0 0 1.93-2.88l-.4-.97a.2.2 0 0 1 .08-.24l.54-.33a1.99 1.99 0 0 0 .8-2.44l-.43-1.02a.25.25 0 0 1 .03-.23l.6-.9a1.92 1.92 0 0 0-1.6-2.99h-5.39A8 8 0 0 0 15 5.44V5Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=30000.35fff3a976c443b4.js.map
