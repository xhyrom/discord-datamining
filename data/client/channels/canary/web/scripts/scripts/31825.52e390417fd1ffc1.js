"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31825"],
  {
    92008(t, e, i) {
      i.d(e, { f: () => M });
      var s = i(446837),
        n = i(627968),
        l = i(64700),
        r = i(503698),
        o = i.n(r),
        h = i(936005),
        u = i(154327),
        d = i(518898);
      i(321073), i(667532);
      let a = (t) => `__section__${t}`,
        c = (t) => `__section_header__${t}`,
        g = () => 0;
      class m {
        visibleSections = {};
        gridData = { coordinates: {}, boundaries: [] };
        coordsMap = {};
        columnHeights = [];
        columnWidth = 0;
        totalHeight = 0;
        itemGrid = [];
        currentRow = 0;
        lastColumnIndex = 0;
        needsFullCompute = !0;
        bufferWidth = 0;
        sections = [];
        columns = 0;
        itemGutter = 0;
        removeEdgeItemGutters = !1;
        sectionGutter = null;
        padding = null;
        paddingVertical = null;
        paddingHorizontal = null;
        marginLeft = null;
        dir = "ltr";
        getItemKey = () => {
          throw Error(
            "MasonryListComputer: getItemKey has not been implemented",
          );
        };
        getItemHeight = () => {
          throw Error(
            "MasonryListComputer: getItemHeight has not been implemented",
          );
        };
        getSectionHeight = g;
        getPadding(t) {
          return null == this.padding
            ? this.itemGutter
            : "number" == typeof this.padding
              ? this.padding
              : (this.padding[t] ?? this.itemGutter);
        }
        getPaddingLeft() {
          return null != this.paddingHorizontal
            ? this.paddingHorizontal
            : this.getPadding("left");
        }
        getPaddingRight() {
          return null != this.paddingHorizontal
            ? this.paddingHorizontal
            : this.getPadding("right");
        }
        getPaddingTop() {
          return null != this.paddingVertical
            ? this.paddingVertical
            : this.getPadding("top");
        }
        getPaddingBottom() {
          return null != this.paddingVertical
            ? this.paddingVertical
            : this.getPadding("bottom");
        }
        getSectionGutter() {
          return null != this.sectionGutter
            ? this.sectionGutter
            : this.itemGutter;
        }
        mergeProps(t) {
          let {
            sections: e = this.sections,
            columns: i = this.columns,
            itemGutter: s = this.itemGutter,
            removeEdgeItemGutters: n = this.removeEdgeItemGutters,
            getItemKey: l = this.getItemKey,
            getItemHeight: r = this.getItemHeight,
            getSectionHeight: o = this.getSectionHeight,
            bufferWidth: h = this.bufferWidth,
            padding: u = this.padding,
            paddingVertical: d = this.paddingVertical,
            paddingHorizontal: a = this.paddingHorizontal,
            marginLeft: c = this.marginLeft,
            sectionGutter: g = this.sectionGutter,
            dir: m = this.dir,
          } = t;
          (this.sections !== e ||
            this.columns !== i ||
            this.itemGutter !== s ||
            this.removeEdgeItemGutters !== n ||
            this.getItemKey !== l ||
            this.getSectionHeight !== o ||
            this.getItemHeight !== r ||
            this.bufferWidth !== h ||
            this.padding !== u ||
            this.paddingVertical !== d ||
            this.paddingHorizontal !== a ||
            this.marginLeft !== c ||
            this.sectionGutter !== g ||
            this.dir !== m) &&
            ((this.needsFullCompute = !0),
            (this.sections = e),
            (this.columns = i),
            (this.itemGutter = s),
            (this.getItemKey = l),
            (this.getSectionHeight = o),
            (this.getItemHeight = r),
            (this.bufferWidth = h),
            (this.padding = u),
            (this.paddingVertical = d),
            (this.paddingHorizontal = a),
            (this.marginLeft = c),
            (this.sectionGutter = g),
            (this.dir = m));
        }
        computeFullCoords() {
          if (!this.needsFullCompute) return;
          let {
              columns: t,
              getItemKey: e,
              getItemHeight: i,
              itemGutter: s,
              getSectionHeight: n,
              bufferWidth: l,
              removeEdgeItemGutters: r,
            } = this,
            o = "rtl" === this.dir ? "right" : "left";
          (this.coordsMap = {}),
            (this.gridData = { boundaries: [], coordinates: {} }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
          let h = this.getPaddingTop(),
            u = this.getPaddingBottom(),
            d = this.getPaddingLeft(),
            g = this.getPaddingRight(),
            m = this.marginLeft ?? 0;
          (this.columnHeights = Array(t).fill(h)),
            (this.columnWidth = (l - g - d - s * (t - 1) - (r ? s : 0)) / t),
            (this.itemGrid = []);
          let p = 0;
          for (; p < this.sections.length; ) {
            (this.gridData.boundaries[p] = this.currentRow),
              (this.currentRow = 0),
              (this.lastColumnIndex = 0);
            let l = this.sections[p],
              r = 0,
              h = n(p),
              u = this.getMaxColumnHeight(this.columnHeights);
            p > 0 && (u = u - s + this.getSectionGutter());
            let b = h > 0 ? h + s : 0;
            for (let t = 0; t < this.columnHeights.length; t++)
              this.columnHeights[t] = u + b;
            for (; r < l; ) {
              var f;
              let t = e(p, r);
              if (null == t) {
                r++;
                continue;
              }
              let [n, l] = (f = this.columnHeights).reduce(
                (t, e, i) => (e < t[0] ? [e, i] : t),
                [f[0], 0],
              );
              l < this.lastColumnIndex && this.currentRow++,
                (this.lastColumnIndex = l);
              let h = i(p, r, this.columnWidth),
                a = {
                  position: "absolute",
                  [o]: this.columnWidth * l + s * (l + 1) - s + d,
                  width: this.columnWidth,
                  top: n - u,
                  height: h,
                },
                c = { section: p, row: this.currentRow, column: l };
              (this.coordsMap[t] = a),
                (this.gridData.coordinates[t] = c),
                (this.columnHeights[l] = n + h + s),
                (this.itemGrid[l] = this.itemGrid[l] ?? []),
                this.itemGrid[l].push(t),
                r++;
            }
            h > 0 &&
              (this.coordsMap[c(p)] = {
                position: "sticky",
                [o]: d,
                width: this.columnWidth * t + s * t,
                top: 0,
                height: h,
              }),
              (this.coordsMap[a(p)] = {
                position: "absolute",
                [o]: m,
                width: this.columnWidth * t + s * (t - 1) + d + g,
                top: u,
                height: this.getMaxColumnHeight(this.columnHeights) - u,
              }),
              p++;
          }
          (this.columnHeights = this.columnHeights.map((t) => t - s + u)),
            (this.totalHeight = this.getMaxColumnHeight()),
            (this.visibleSections = {}),
            (this.needsFullCompute = !1);
        }
        computeVisibleSections(t, e) {
          this.computeFullCoords();
          let { getItemKey: i, coordsMap: s } = this;
          this.visibleSections = {};
          let n = 0;
          for (; n < this.sections.length; ) {
            let l = this.sections[n],
              r = a(n),
              o = s[r];
            if (null == o) {
              n++;
              continue;
            }
            let { top: h } = o,
              u = h + o.height;
            if (h > e) break;
            if (u < t) {
              n++;
              continue;
            }
            let d = 0,
              c = 1;
            for (
              u < e && u > t && ((d = l - 1), (c = -1)),
                this.visibleSections[r] = [];
              d >= 0 && d < l;

            ) {
              let l = i(n, d),
                o = null != l ? s[l] : null;
              if (null == l || null == o) {
                d += c;
                continue;
              }
              let { top: u, height: a } = o;
              u + h > t - a &&
                u + h < e &&
                (-1 === c
                  ? this.visibleSections[r].unshift([l, n, d])
                  : this.visibleSections[r].push([l, n, d])),
                (d += c);
            }
            if (h < t && u > e) break;
            n++;
          }
        }
        getMaxColumnHeight() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.columnHeights;
          return t.reduce((t, e) => Math.max(t, e), 0);
        }
        getState() {
          return {
            coordsMap: this.coordsMap,
            gridData: this.gridData,
            visibleSections: this.visibleSections,
            totalHeight: this.totalHeight,
          };
        }
      }
      var p = i(484702),
        f = i(403431);
      let b = Object.freeze({
        coordsMap: {},
        visibleSections: {},
        totalHeight: 0,
        gridData: { boundaries: [], coordinates: {} },
      });
      var H = i(789279),
        v = i(448539),
        C = i(584648),
        G = i(751591),
        w = i(187322),
        y = i(457845);
      function S(t, e, i) {
        let s = (0, h.A)(t),
          r = new Map(),
          a = new i((t) => {
            t.forEach((t) => {
              let { target: e } = t;
              r.get(e)?.(t);
            });
          });
        return (0, l.forwardRef)(function (i, h) {
          let {
              onScroll: g,
              dir: S = "ltr",
              sections: M,
              columns: I,
              getItemKey: x,
              getItemHeight: R,
              getSectionHeight: P,
              chunkSize: _,
              renderSection: k,
              renderItem: W,
              getSectionProps: L,
              itemGutter: z,
              removeEdgeItemGutters: A,
              sectionGutter: V,
              padding: E,
              paddingVertical: D,
              paddingHorizontal: j,
              fade: F = !1,
              className: K,
              style: O,
              maxContentWidth: T,
              renderAccessory: B,
              onItemVisibilityChange: N,
              ...q
            } = i,
            $ = l.useRef(null),
            Q = l.useRef(null),
            U = l.useRef({}),
            [Z, J] = l.useState(!1),
            {
              scrollerRef: X,
              scrollerState: Y,
              getScrollerState: tt,
            } = (0, u.A)();
          (0, d.A)({
            scrollerRef: X,
            className: K,
            specs: s,
            orientation: "vertical",
            dir: S,
          });
          let {
            forceUpdateOnChunkChange: te,
            coordsMap: ti,
            gridData: ts,
            visibleSections: tn,
            totalHeight: tl,
            forceUpdate: tr,
            masonryComputer: to,
          } = (function (t) {
            let {
                sections: e,
                columns: i,
                getItemKey: s,
                getItemHeight: n,
                getSectionHeight: r,
                chunkSize: o = 250,
                getScrollerState: h,
                maxBufferWidth: u,
                itemGutter: d,
                removeEdgeItemGutters: a,
                sectionGutter: c,
                padding: g,
                paddingVertical: H,
                paddingHorizontal: v,
                dir: C,
              } = t,
              G = (0, p.A)(),
              w = (0, l.useRef)(b),
              [y] = (0, l.useState)(() => new m()),
              S = h(),
              M = Math.min(u ?? 1 / 0, S.offsetWidth),
              I = null != u ? Math.max(0, S.offsetWidth - u) : 0,
              {
                dirty: x,
                chunkStart: R,
                chunkEnd: P,
                forceUpdateOnChunkChange: _,
              } = (0, f.A)({
                chunkSize: o,
                getScrollerState: h,
                forceUpdate: G,
              });
            return (
              (w.current = (0, l.useMemo)(
                () =>
                  x > 0
                    ? w.current
                    : (y.mergeProps({
                        sections: e,
                        columns: i,
                        getItemKey: s,
                        getItemHeight: n,
                        getSectionHeight: r,
                        bufferWidth: M,
                        itemGutter: d,
                        removeEdgeItemGutters: a,
                        sectionGutter: c,
                        padding: g,
                        paddingVertical: H,
                        paddingHorizontal: v,
                        marginLeft: I / 2,
                        dir: C,
                      }),
                      y.computeVisibleSections(Math.max(0, R * o), P * o),
                      y.getState()),
                [x, y, e, i, s, n, r, R, P, o, d, a, c, g, H, v, M, I, C],
              )),
              {
                ...w.current,
                masonryComputer: y,
                forceUpdateOnChunkChange: _,
                forceUpdate: G,
              }
            );
          })({
            sections: M,
            columns: I,
            getItemKey: x,
            getItemHeight: R,
            getSectionHeight: P,
            chunkSize: _,
            itemGutter: z,
            removeEdgeItemGutters: A,
            sectionGutter: V,
            padding: E,
            paddingVertical: D,
            paddingHorizontal: j,
            getScrollerState: tt,
            dir: S,
            maxBufferWidth: T,
          });
          l.useEffect(() => {
            null != N &&
              (function (t, e, i) {
                let s = {},
                  n = {};
                for (let n in t)
                  if (null == e[n]) s[n] = t[n];
                  else {
                    let s = t[n],
                      l = e[n];
                    for (let t = 0; t < s.length; t++) {
                      let [e] = s[t];
                      l.some((t) => {
                        let [i] = t;
                        return e === i;
                      }) || i(s[t][1], s[t][2], !0);
                    }
                  }
                for (let s in e)
                  if (null == t[s]) n[s] = e[s];
                  else {
                    let n = t[s],
                      l = e[s];
                    for (let t = 0; t < l.length; t++) {
                      let [e] = l[t];
                      n.some((t) => {
                        let [i] = t;
                        return i === e;
                      }) || i(l[t][1], l[t][2], !1);
                    }
                  }
              })(tn, U.current, N),
              (U.current = tn);
          }, [tn, N]);
          let th = (0, l.useCallback)(
              function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 2;
                t > Y.current.dirty && (Y.current.dirty = t),
                  2 === t ? tr() : te(1);
              },
              [te, Y, tr],
            ),
            tu = (0, H.A)(X),
            td = (0, l.useCallback)(() => to.itemGrid, [to]),
            ta = (0, l.useCallback)(() => to.coordsMap, [to]),
            tc = l.useCallback(() => th(), [th]);
          (0, v.A)({
            ref: X,
            key: "container",
            onUpdate: tc,
            resizeObserver: a,
            listenerMap: r,
          }),
            (0, l.useImperativeHandle)(
              h,
              () => ({
                getScrollerNode: () => X.current,
                getItemGrid: td,
                getCoordsMap: ta,
                getScrollerState: tt,
                ...(0, C.A)(X, tt, tu),
              }),
              [X, tt, td, tu, ta],
            );
          let tg = (0, l.useCallback)(
            (t) => {
              th(1),
                null == $.current ? J(!0) : clearTimeout($.current),
                ($.current = setTimeout(() => {
                  ($.current = null), J(!1);
                }, 200)),
                null != g && g(t);
            },
            [g, th],
          );
          return (
            l.useLayoutEffect(() => {
              2 !== Y.current.dirty && (Y.current.dirty = 2);
            }, [tl, Y]),
            (0, n.jsxs)("div", {
              ref: X,
              onScroll: tg,
              className: o()(K, { [t]: !0, [e]: F, [y.qw]: Z }),
              style: (0, G.Ay)(O),
              ...q,
              children: [
                B?.(tl) ?? null,
                (0, l.useMemo)(
                  () =>
                    (0, n.jsx)(w.xp, {
                      containerRef: Q,
                      children: (0, n.jsx)("div", {
                        style: { height: tl },
                        className: y.Qs,
                        ref: Q,
                        children: Object.keys(tn).map((t) => {
                          let e = parseInt(t.replace(/^__section__/, ""), 10),
                            i = ti[t],
                            s = tn[t],
                            l = ti[c(e)],
                            r = L?.(e);
                          return null != i && null != s
                            ? (0, n.jsxs)(
                                "div",
                                {
                                  ...r,
                                  style: { ...i, ...(r?.style ?? {}) },
                                  children: [
                                    null != k && null != l && k(e, l, t),
                                    s.map((t) => {
                                      let [e, i, s] = t,
                                        n = ti[e];
                                      return null != n
                                        ? W(i, s, n, e, ts)
                                        : null;
                                    }),
                                  ],
                                },
                                t,
                              )
                            : null;
                        }),
                      }),
                    }),
                  [tn, W, k, ti, tl, L, ts],
                ),
              ],
            })
          );
        });
      }
      let M = S(y.yL, y.Rv, window.ResizeObserver ?? s.t);
      S(y.qZ, y.Rv, window.ResizeObserver ?? s.t);
    },
  },
]);
//# sourceMappingURL=31825.52e390417fd1ffc1.js.map
