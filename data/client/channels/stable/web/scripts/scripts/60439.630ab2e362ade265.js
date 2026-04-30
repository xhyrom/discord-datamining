"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60439"],
  {
    80330(l, e, s) {
      s.d(e, { A: () => o });
      var n = s(627968),
        a = s(64700),
        i = s(503698),
        t = s.n(i),
        r = s(140735),
        d = s(707554),
        c = s(939249),
        u = s(946356),
        h = s(985018),
        A = s(827839);
      function o(l) {
        let { renderCards: e, heading: s, onExpand: i } = l,
          o = a.useId(),
          x = a.useMemo(() => e({ className: A.Nr }), [e]),
          [p] = x;
        return 0 === x.length
          ? null
          : (0, n.jsxs)("section", {
              "aria-labelledby": null != s ? o : void 0,
              className: A.kL,
              children: [
                null != s &&
                  (0, n.jsx)(r.A, {
                    children: (0, n.jsx)(d.H, { id: o, children: s }),
                  }),
                (0, n.jsx)(d.F, {
                  children: (0, n.jsxs)("ul", {
                    className: t()(A.ML, x.length > 1 && A.Kr),
                    "aria-labelledby": null != s ? o : void 0,
                    tabIndex: -1,
                    children: [
                      (0, n.jsx)("li", { className: A.Us, children: p }),
                      x.length > 1 &&
                        (0, n.jsx)(c.D, {
                          tag: "li",
                          className: A.Ee,
                          onClick: i,
                          "aria-label": h.intl.string(h.t["OBCR+p"]),
                          children: (0, n.jsx)(u.A.Overlay, {
                            className: A.h9,
                            children: null,
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            });
      }
    },
    646986(l, e, s) {
      s.d(e, { A: () => v }), s(321073);
      var n = s(627968),
        a = s(64700),
        i = s(17928),
        t = s(688810),
        r = s(290863),
        d = s(461213),
        c = s(183555),
        u = s(841595),
        h = s(146655),
        A = s(489379),
        o = s(80330),
        x = s(402857),
        p = s(842241),
        b = s(986712),
        j = s(518477),
        I = s(818348),
        g = s(985018);
      function v(l) {
        let {
            user: e,
            currentUser: s,
            guildId: v,
            onOpenUserProfileModal: N,
            onClose: m,
          } = l,
          { analyticsLocations: C } = (0, t.Ay)(),
          { trackUserProfileAction: S } = (0, c.NJ)(),
          { live: k, stream: E } = (0, h.A)(e.id),
          { voiceChannel: y, voiceActivity: O } = (0, A.A)({
            userId: e.id,
            guildId: v,
          }),
          T = e.id === s.id,
          _ = (0, i.bG)([d.A, r.A], () => {
            let l = T ? d.A.getStatus() : r.A.getStatus(e.id, v);
            return l === I.cl.OFFLINE || l === I.cl.INVISIBLE;
          }),
          f =
            !(0, i.bG)([u.A], () => u.A.getUserProfile(e.id)?.private === !0) &&
            null == E &&
            null == O &&
            null != y,
          L = a.useCallback(
            (l) => {
              let a = [],
                i = { ...l, user: e, currentUser: s, onClose: m };
              return (
                null != E &&
                  a.push((0, n.jsx)(p.A, { stream: E, ...i }, "stream")),
                k.forEach((l, e) => {
                  a.push((0, n.jsx)(x.A, { activity: l, ...i }, `live-${e}`));
                }),
                f &&
                  a.push((0, n.jsx)(b.A, { voiceChannel: y, ...i }, "voice")),
                a
              );
            },
            [s, f, k, m, E, e, y],
          );
        return _
          ? null
          : (0, n.jsx)(o.A, {
              renderCards: L,
              heading: g.intl.string(g.t.J6STd9),
              onExpand: () => {
                S({
                  action: "PRESS_SHOW_MORE_ACTIVITY",
                  analyticsLocations: C,
                }),
                  N?.({ tabSection: j.RP.ACTIVITY });
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=60439.630ab2e362ade265.js.map
