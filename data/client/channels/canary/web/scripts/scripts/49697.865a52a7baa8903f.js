"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49697"],
  {
    247928(e, t, r) {
      r.d(t, { M: () => d });
      var l = r(627968),
        n = r(64700);
      let u = 0;
      function d(e) {
        let {
            children: t,
            className: r,
            enabled: d = !0,
            "aria-hidden": a,
          } = e,
          i = n.useRef(null);
        return (
          !(function (e, t) {
            let [r] = n.useState(() => u++),
              l = `data-focus-blocked-${r}`,
              d = n.useCallback(
                (e) => {
                  let t = document.createTreeWalker(
                      e,
                      NodeFilter.SHOW_ELEMENT,
                      {
                        acceptNode: (e) =>
                          e.tabIndex >= 0 && !e.disabled
                            ? NodeFilter.FILTER_ACCEPT
                            : NodeFilter.FILTER_SKIP,
                      },
                    ),
                    r = t.currentNode;
                  for (; null != r; ) {
                    let e = r;
                    e.setAttribute(l, String(e.tabIndex)),
                      (e.tabIndex = -1),
                      (r = t.nextNode());
                  }
                },
                [l],
              ),
              a = n.useCallback(
                (e) => {
                  e.querySelectorAll(`[${l}]`).forEach((e) => {
                    let t = e.getAttribute(l);
                    null != t &&
                      ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(l));
                  });
                },
                [l],
              );
            n.useLayoutEffect(() => {
              if (t) {
                let t = e.current;
                if (null != t) return d(t), () => a(t);
              }
            }, [t, e, d, a]),
              n.useEffect(() => {
                if (!t) return;
                let r = e.current;
                if (null == r) return;
                let l = new MutationObserver((e) => {
                  e.some((e) => e.addedNodes.length > 0) && d(r);
                });
                return (
                  l.observe(r, { childList: !0, subtree: !0 }),
                  () => l.disconnect()
                );
              }, [t, e, d]);
          })(i, d),
          (0, l.jsx)("div", {
            ref: i,
            className: r,
            "aria-hidden": a,
            children: t,
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=49697.865a52a7baa8903f.js.map
