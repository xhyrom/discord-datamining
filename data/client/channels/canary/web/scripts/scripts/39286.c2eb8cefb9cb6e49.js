"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39286"],
  {
    549996(e, t, l) {
      l.d(t, { c: () => c });
      var r = l(64700),
        n = l(17928),
        i = l(354670),
        s = l(597758),
        u = l(374200),
        a = l(852218);
      function c(e) {
        r.useEffect(() => {
          (0, s.BE)();
        }, []);
        let t = (0, n.bG)([u.A, i.A], () => {
            let t = u.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let l = t.promotionId,
              r = u.A.getPromotionByTypeAndId(a.pt.MARKETING_MOMENT, l);
            if (r?.trialId != null) {
              let e = i.A.getUserTrialOffer(r.trialId);
              if (
                null == e ||
                (null != e.expires_at && Date.parse(e.expires_at) < Date.now())
              )
                return null;
            }
            return t;
          }),
          l = (0, n.bG)([u.A], () =>
            u.A.getPromotionByTypeAndId(
              a.pt.MARKETING_MOMENT,
              t?.promotionId ?? "",
            ),
          ),
          c = l?.endDate,
          [o, d] = r.useState(!1),
          p = r.useRef(null);
        return (
          r.useEffect(() => {
            if (null != c) {
              let e = c.getTime() - Date.now();
              return (
                e > 0 && e < 864e5
                  ? (d(!1),
                    clearTimeout(p.current),
                    (p.current = setTimeout(() => {
                      d(!0);
                    }, e)))
                  : e <= 0 && d(!0),
                () => {
                  clearTimeout(p.current);
                }
              );
            }
            d(!1), clearTimeout(p.current);
          }, [c]),
          o ? null : t
        );
      }
    },
    318254(e, t, l) {
      l.d(t, { C: () => u });
      var r = l(627968);
      l(64700);
      var n = l(661531),
        i = l(996682),
        s = l(27989);
      let u = (e) => {
        let {
            size: t = "md",
            width: l,
            height: u,
            color: a = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
          } = e,
          d = (0, s.J)(t),
          p = d?.width ?? l,
          f = d?.height ?? u;
        return (0, r.jsxs)("svg", {
          ...(0, i.A)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              d: "M11.75 7.57a5.12 5.12 0 0 1-3.86 3.87.42.42 0 0 0 0 .82 5.1 5.1 0 0 1 3.86 3.86.42.42 0 0 0 .81 0 5.12 5.12 0 0 1 3.87-3.86.42.42 0 0 0 0-.82 5.15 5.15 0 0 1-3.87-3.86.42.42 0 0 0-.81-.01Z",
              fill: "string" == typeof a ? a : a.css,
              className: c,
            }),
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              d: "M11.64.22c.3-.12.62-.12.91 0l7.49 3.1c.29.12.52.35.64.64l3.1 7.49c.12.29.12.62 0 .9l-3.1 7.5c-.12.28-.35.51-.64.63l-7.49 3.1c-.29.13-.62.13-.9 0l-7.5-3.1c-.28-.12-.52-.35-.64-.64l-3.1-7.48c-.12-.3-.12-.62 0-.91l3.1-7.49c.12-.29.36-.52.65-.64l7.48-3.1ZM20.6 11.5 12.5 3.4a.56.56 0 0 0-.8 0l-8.1 8.1a.56.56 0 0 0 0 .8l8.1 8.1c.22.22.57.22.8 0l8.1-8.1a.56.56 0 0 0 0-.8Zm-8.85-3.94a5.12 5.12 0 0 1-3.86 3.87.42.42 0 0 0 0 .82 5.1 5.1 0 0 1 3.86 3.86.42.42 0 0 0 .81 0 5.12 5.12 0 0 1 3.87-3.86.42.42 0 0 0 0-.82 5.15 5.15 0 0 1-3.87-3.86.42.42 0 0 0-.81-.01Z",
              clipRule: "evenodd",
              fill: "string" == typeof a ? a : a.css,
              className: c,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=39286.c2eb8cefb9cb6e49.js.map
