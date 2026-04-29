"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1177"],
  {
    597770(e, s, t) {
      t.d(s, { o: () => r });
      var i = t(627968);
      t(64700);
      var n = t(661531),
        o = t(996682),
        l = t(27989);
      let r = (e) => {
        let {
            size: s = "md",
            width: t,
            height: r,
            color: h = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...c
          } = e,
          d = (0, l.J)(s),
          v = d?.width ?? t,
          p = d?.height ?? r;
        return (0, i.jsxs)("svg", {
          ...(0, o.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: p,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof h ? h : h.css,
              fillRule: "evenodd",
              d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof h ? h : h.css,
              d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
              className: a,
            }),
          ],
        });
      };
    },
    313271(e, s, t) {
      t.d(s, { j: () => o });
      var i = t(621466);
      let n = { root: null, rootMargin: "0px", threshold: 0.5 };
      class o {
        _observer;
        _options;
        _nodes = new WeakMap();
        _components = new WeakMap();
        _visibleComponents = new WeakSet();
        constructor(e = n) {
          (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e,
              ));
        }
        _handleEntries = (e) => {
          e.forEach((e) => {
            let s;
            if (null != e.isIntersecting) s = e.isIntersecting;
            else {
              let { threshold: t } = this._options;
              s =
                null == t
                  ? e.intersectionRatio > 0
                  : Array.isArray(t)
                    ? t.some((s) => e.intersectionRatio > s)
                    : e.intersectionRatio > t;
            }
            let t = this._nodes.get(e.target);
            if (null != t) {
              let e = !1;
              s
                ? this._visibleComponents.has(t) ||
                  (this._visibleComponents.add(t), (e = !0))
                : this._visibleComponents.has(t) &&
                  (this._visibleComponents.delete(t), (e = !0)),
                e && t.forceUpdate();
            }
          });
        };
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e, s) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = s.current;
          (0, i.vq)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let s = this._observer;
          if (null == s) return;
          let t = this._components.get(e);
          null != t &&
            (this._nodes.delete(t),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            s.unobserve(t));
        }
      }
    },
    230109(e, s, t) {
      t.d(s, { L: () => n.L, j: () => i.j }), t(899898);
      var i = t(313271),
        n = t(416887);
    },
  },
]);
//# sourceMappingURL=1177.bdb7af4d304bf961.js.map
