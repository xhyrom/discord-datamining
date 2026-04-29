"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67685"],
  {
    390848(e, l, a) {
      a.d(l, { I: () => c });
      var s = a(64700),
        t = a(430159);
      function c(e) {
        let {
            userId: l,
            applicationId: a,
            isGameRelationship: c,
            location: i,
            onConfirm: n,
            onCancel: d,
            onFinally: p,
          } = e,
          r = s.useCallback(() => {
            t.A.cancelFriendRequest({
              userId: l,
              applicationId: c ? a : null,
              location: i,
            });
          }, [a, c, i, l]);
        return {
          acceptFriendRequest: s.useCallback(() => {
            t.A.maybeConfirmFriendRequestAccept({
              userId: l,
              applicationId: c ? a : null,
              location: i,
              onConfirm: n,
              onCancel: d,
              onFinally: p,
            });
          }, [a, c, i, d, n, p, l]),
          cancelFriendRequest: r,
        };
      }
    },
    565829(e, l, a) {
      a.d(l, { l: () => n });
      var s = a(627968);
      a(64700);
      var t = a(661531),
        c = a(996682),
        i = a(27989);
      let n = (e) => {
        let {
            size: l = "md",
            width: a,
            height: n,
            color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
          } = e,
          h = (0, i.J)(l),
          u = h?.width ?? a,
          o = h?.height ?? n;
        return (0, s.jsxs)("svg", {
          ...(0, c.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: u,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              d: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53Z",
              className: p,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              fillRule: "evenodd",
              d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm1-7a1 1 0 1 0-2 0v2c0 .27.1.52.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.71V17Z",
              clipRule: "evenodd",
              className: p,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=67685.4ed1502dd6fcaf2d.js.map
