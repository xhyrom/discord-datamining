"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54961"],
  {
    158216(t, e, s) {
      s.d(e, { AB: () => O, FF: () => p, K9: () => d }), s(64700);
      var c,
        a = s(758836),
        i = s(955971),
        r = s(536769),
        l = s(205942),
        n = s(550879),
        o = s(731242),
        p =
          21552 == s.j
            ? (((c = {})[(c.NONE = 0)] = "NONE"),
              (c[(c.TOOLTIP = 1)] = "TOOLTIP"),
              (c[(c.BADGE = 2)] = "BADGE"),
              (c[(c.COACHMARK = 3)] = "COACHMARK"),
              (c[(c.TAB_TOOLTIP = 4)] = "TAB_TOOLTIP"),
              c)
            : null;
      class h {
        src;
        style;
        animated;
        constructor({ src: t, style: e, animated: s }) {
          (this.src = t), (this.style = e), (this.animated = s);
        }
        getSrc = (() => {
          var t = this;
          return function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return "string" == typeof t.src
              ? t.src
              : e
                ? t.src.dark
                : t.src.light;
          };
        })();
      }
      let u = {
          ROBERT: new h({
            src: l.A,
            style: {
              position: "absolute",
              width: "400px",
              right: "-200px",
              zIndex: 10,
            },
          }),
          SHY: new h({
            src: n.A,
            style: {
              position: "absolute",
              width: "600px",
              left: "calc(50vw - 300px)",
              top: "calc(50vh - 300px)",
            },
          }),
          STORM: new h({
            src: o.A,
            style: {
              position: "absolute",
              width: "850px",
              left: "calc(50vw - 425px)",
              top: "calc(50vh - 425px)",
            },
          }),
          ORB_PURCHASE: new h({
            src: { dark: i.A, light: r.A },
            animated: !0,
            style: {
              position: "fixed",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              objectFit: "cover",
            },
          }),
        },
        O = (t) => {
          let { purchaseType: e, skuId: s } = t;
          if (e === a.gs.ORB) return u.ORB_PURCHASE;
          switch (s) {
            case "1267521289330102344":
            case "1267521289355268154":
            case "1266160780928352268":
            case "1266160780978556969":
            case "1266161342801383434":
            case "1220513995308400680":
            case "1220513984273186816":
            case "1220513989729976411":
            case "1220514048068812901":
            case "1266493591207940133":
            case "1266493591275044903":
            case "1220432740638523543":
              return u.STORM;
            case "1220513977683935373":
            case "1220432647453409384":
            case "1220432697718083614":
              return u.SHY;
            default:
              return null;
          }
        },
        d = (t) => ("1262491137386614805" === t ? u.ROBERT : null);
    },
  },
]);
//# sourceMappingURL=54961.4d85e63ccad65b00.js.map
