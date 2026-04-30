"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39227"],
  {
    426983(t, i, e) {
      e.d(i, { K: () => n, _: () => o });
      var l,
        r = e(176128),
        o =
          (((l = {})[(l.PARTNERED = 0)] = "PARTNERED"),
          (l[(l.VERIFIED = 1)] = "VERIFIED"),
          (l[(l.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
          (l[(l.COMMUNITY = 3)] = "COMMUNITY"),
          (l[(l.DISCOVERABLE = 4)] = "DISCOVERABLE"),
          (l[(l.STAFF = 5)] = "STAFF"),
          (l[(l.NONE = 6)] = "NONE"),
          l);
      function n(t) {
        return t.staff
          ? 5
          : t.verified && t.partnered
            ? 2
            : t.verified
              ? 1
              : t.partnered
                ? 0
                : t.community && t.visibility === r.qo.PUBLIC
                  ? 4
                  : t.community
                    ? 3
                    : 6;
      }
    },
    981883(t, i, e) {
      e.d(i, { V: () => n });
      var l = e(426983),
        r = e(176128),
        o = e(985018);
      function n(t, i) {
        let e =
          i === r.qo.PUBLIC
            ? o.intl.string(o.t.op2cJ6)
            : i === r.qo.APPLY_TO_JOIN
              ? o.intl.string(o.t.YwZfbt)
              : o.intl.string(o.t.TME4LJ);
        switch (t) {
          case l._.STAFF:
            return {
              tooltipTitle: o.intl.string(o.t.lMrv96),
              tooltipSubtitle: o.intl.string(o.t.lMrv96),
              tooltipDescription: o.intl.string(o.t.lMrv96),
            };
          case l._.VERIFIED:
            return {
              tooltipTitle: o.intl.string(o.t.K7iRig),
              tooltipSubtitle: o.intl.string(o.t.iCehw9),
              tooltipDescription: e,
            };
          case l._.PARTNERED:
            return {
              tooltipTitle: o.intl.string(o.t.K7iRig),
              tooltipSubtitle: o.intl.string(o.t.hfYfEE),
              tooltipDescription: e,
            };
          case l._.VERIFIED_AND_PARTNERED:
            return {
              tooltipTitle: o.intl.string(o.t.K7iRig),
              tooltipSubtitle: o.intl.string(o.t["TX+iFC"]),
              tooltipDescription: e,
            };
          case l._.COMMUNITY:
            return {
              tooltipTitle: o.intl.string(o.t.K7iRig),
              tooltipDescription: e,
            };
          case l._.DISCOVERABLE:
            return {
              tooltipTitle: o.intl.string(o.t.K7iRig),
              tooltipDescription: o.intl.string(o.t.op2cJ6),
            };
          default:
            return { tooltipTitle: o.intl.string(o.t["iZRkC/"]) };
        }
      }
    },
    813098(t, i, e) {
      e.d(i, { A: () => o });
      var l = e(627968);
      e(64700);
      var r = e(953727);
      function o(t) {
        let {
          width: i = 10,
          height: e = 10,
          color: o = "currentColor",
          ...n
        } = t;
        return (0, l.jsxs)("svg", {
          ...(0, r.A)(n),
          width: i,
          height: e,
          viewBox: "0 0 17 22",
          fill: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, l.jsxs)("g", {
              filter: "url(#filter0_d_1296_1706)",
              children: [
                (0, l.jsx)("path", {
                  opacity: "0.55",
                  d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                  fill: "white",
                }),
                (0, l.jsx)("path", {
                  opacity: "0.8",
                  d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                  fill: "white",
                }),
                (0, l.jsx)("path", {
                  d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                  fill: "white",
                }),
              ],
            }),
            (0, l.jsx)("defs", {
              children: (0, l.jsxs)("filter", {
                id: "filter0_d_1296_1706",
                x: "-3.5",
                y: "-1",
                width: "24",
                height: "24",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, l.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, l.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, l.jsx)("feOffset", { dy: "1" }),
                  (0, l.jsx)("feGaussianBlur", { stdDeviation: "2" }),
                  (0, l.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0",
                  }),
                  (0, l.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_1296_1706",
                  }),
                  (0, l.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_1296_1706",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    332837(t, i, e) {
      e.d(i, { f: () => s });
      var l = e(627968);
      e(64700);
      var r = e(661531),
        o = e(996682),
        n = e(27989);
      let s = (t) => {
        let {
            size: i = "md",
            width: e,
            height: s,
            color: a = r.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = t,
          d = (0, n.J)(i),
          h = d?.width ?? e,
          f = d?.height ?? s;
        return (0, l.jsx)("svg", {
          ...(0, o.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=39227.7f47f8e7a21f05de.js.map
