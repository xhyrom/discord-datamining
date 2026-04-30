"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68647"],
  {
    497685(e, t, r) {
      r.d(t, {
        $P: () => N,
        H9: () => w,
        Qh: () => F,
        Se: () => D,
        Tr: () => W,
        V$: () => j,
        Z4: () => L,
        _E: () => T,
        g4: () => P,
        k8: () => k,
        wg: () => M,
        xo: () => b,
      });
      var s = r(735438),
        n = r.n(s),
        l = r(132500),
        i = r(636537),
        a = r(803805),
        o = r(228366),
        u = r(58149),
        d = r(703244),
        c = r(202803),
        h = r(773669),
        m = r(594061),
        p = r(821102),
        g = r(954571),
        f = r(11187),
        I = r(998218),
        E = r(157559),
        R = r(652215),
        _ = r(355097),
        y = r(985018);
      let S = /-/g,
        C = ".webp",
        A = ".avif",
        v = ".gif";
      function F(e) {
        let t = null != e ? { [e]: 1 } : {};
        u.Ay.trackWithMetadata(R.HAw.SEARCH_STARTED, {
          search_type: R.I4_.GIF,
          load_id: p.A.getAnalyticsID(),
          num_modifiers: Object.keys(t).length,
          modifiers: t,
          gif_provider: (0, d.cf)(),
        });
      }
      function w(e, t) {
        let { startTime: r, ...s } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = { offset: 0, limit: null, totalResults: e.length },
          l = (0, f.QL)(p.A.getAnalyticsID(), t, {
            ...n,
            ...s,
            results: e.length,
          }),
          i = null == r ? {} : { load_duration_ms: Date.now() - r };
        u.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_VIEWED, {
          ...l,
          ...i,
          gif_provider: (0, d.cf)(),
        });
      }
      function x(e, t, r) {
        let s = Date.now();
        F(t),
          i.Bo.get({
            url: R.Rsh.GIFS_SEARCH,
            query: {
              q: e,
              media_format: p.A.getSelectedFormat(),
              provider: (0, d.cf)(),
              locale: h.default.locale,
              limit: r,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
          }).then(
            (n) => {
              let l = n.body;
              w(l, t, { startTime: s, limit: r }),
                o.h.dispatch({
                  type: "GIF_PICKER_QUERY_SUCCESS",
                  query: e,
                  items: l,
                });
            },
            () => o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE", query: e }),
          );
      }
      let G = n().debounce(x, 250);
      function N(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = arguments.length > 3 ? arguments[3] : void 0;
        "" === e
          ? D()
          : (o.h.dispatch({ type: "GIF_PICKER_QUERY", query: e }),
            r ? x(e, t, s) : G(e, t, s));
      }
      function T(e) {
        "" !== e &&
          null != e &&
          i.Bo.get({
            url: R.Rsh.GIFS_SUGGEST,
            query: {
              q: e,
              provider: (0, d.cf)(),
              limit: 5,
              locale: h.default.locale,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
          }).then((t) => {
            let r = t.body;
            o.h.dispatch({
              type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
              query: e,
              items: r,
            });
          });
      }
      function D() {
        o.h.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
      }
      function P(e) {
        let {
            type: t,
            index: r,
            offset: s,
            limit: n,
            results: l,
            totalResults: a,
            query: o,
            gifId: c,
          } = e,
          h = (0, f.QL)(p.A.getAnalyticsID(), t, {
            offset: s,
            limit: n,
            results: l,
            totalResults: a,
          });
        if (
          (u.Ay.trackWithMetadata(R.HAw.SEARCH_RESULT_SELECTED, {
            ...h,
            index_num: r,
            source_object: "GIF Picker",
            query: o,
          }),
          null != c)
        ) {
          let e = (0, d.cf)();
          i.Bo.post({
            url: R.Rsh.GIFS_SELECT,
            body: { id: c, q: o, provider: e },
            oldFormErrors: !0,
            rejectWithError: !0,
          });
        }
      }
      function j() {
        let e = (0, l.A)().replace(S, "");
        u.Ay.trackWithMetadata(R.HAw.SEARCH_OPENED, {
          search_type: R.I4_.GIF,
          load_id: e,
        }),
          o.h.wait(() => {
            o.h.dispatch({ type: "GIF_PICKER_INITIALIZE", analyticsID: e });
          });
      }
      function k() {
        i.Bo.get({
          url: R.Rsh.GIFS_TRENDING,
          query: {
            provider: (0, d.cf)(),
            locale: h.default.locale,
            media_format: p.A.getSelectedFormat(),
          },
          oldFormErrors: !0,
          rejectWithError: !0,
        }).then((e) => {
          let { body: t } = e,
            { categories: r, gifs: s } = t;
          o.h.dispatch({
            type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
            trendingCategories: r,
            trendingGIFPreview: s[0],
          });
        });
      }
      function L(e) {
        let t = Date.now();
        F(R.dD.TRENDING_GIFS),
          i.Bo.get({
            url: R.Rsh.GIFS_TRENDING_GIFS,
            query: {
              media_format: p.A.getSelectedFormat(),
              provider: (0, d.cf)(),
              locale: h.default.locale,
              limit: e,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
          }).then(
            (r) => {
              let { body: s } = r;
              w(s, R.dD.TRENDING_GIFS, { startTime: t, limit: e }),
                o.h.dispatch({ type: "GIF_PICKER_QUERY_SUCCESS", items: s });
            },
            () => {
              o.h.dispatch({ type: "GIF_PICKER_QUERY_FAILURE" });
            },
          );
      }
      function b(e) {
        let t = I.A.toURLSafe(e);
        return null == t ? e : (0, c.fr)(t) ? (0, c.w6)(t).toString() : e;
      }
      function U(e) {
        let t = I.A.toURLSafe(e.src);
        return null != t && ((0, c.BX)(t) || (0, c.fr)(t));
      }
      function M(e) {
        m.bW.updateAsync(
          "favoriteGifs",
          (t) => {
            let r = n().max(Object.values(t.gifs).map((e) => e.order)) ?? 0,
              s = U(e) && null != e.gifSrc ? e.gifSrc : e.src,
              l =
                U(e) &&
                (function (e) {
                  let t = I.A.toURLSafe(e);
                  if (null == t) return !1;
                  let r = t.pathname.toLowerCase();
                  return r.endsWith(C) || r.endsWith(A) || r.endsWith(v);
                })(s),
              i = l
                ? (function (e) {
                    let t = I.A.toURLSafe(e);
                    if (null == t) return e;
                    let r = t.pathname.toLowerCase(),
                      s = r.endsWith(C),
                      n = r.endsWith(A),
                      l = r.endsWith(v);
                    return s || n || l
                      ? ((n || l) && t.searchParams.set("format", "webp"),
                        t.searchParams.set("animated", "true"),
                        t.toString())
                      : e;
                  })(s)
                : s,
              o = l ? a.TL.IMAGE : e.format;
            if (
              ((t.gifs[b(e.url)] = { ...e, src: i, format: o, order: r + 1 }),
              a.uz.toBinary(t).length > 762880)
            )
              return (
                E.A.show({
                  title: y.intl.string(y.t["+XYXtZ"]),
                  body: y.intl.string(y.t.YSDH9n),
                }),
                !1
              );
            let u = n().size(t.gifs);
            u > 2 && (t.hideTooltip = !0),
              g.default.track(R.HAw.GIF_FAVORITED, { total_num_favorited: u });
          },
          _.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function W(e) {
        m.bW.updateAsync(
          "favoriteGifs",
          (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[b(e)],
              g.default.track(R.HAw.GIF_UNFAVORITED, {
                total_num_favorited: n().size(t.gifs),
              });
          },
          _.Sb.INFREQUENT_USER_ACTION,
        );
      }
    },
    25277(e, t, r) {
      r.d(t, { A: () => l });
      var s = r(64700),
        n = r(650583);
      class l extends s.Component {
        state = { focusedColumn: null, focusedRow: null };
        componentDidMount() {
          document.addEventListener("keydown", this.handleKeyDown, !0);
        }
        componentWillUnmount() {
          document.removeEventListener("keydown", this.handleKeyDown, !0);
        }
        handleKeyDown = (e) => {
          let { onSelect: t } = this.props;
          switch (e.key) {
            case n.dh.ARROW_DOWN:
            case n.dh.ARROW_UP:
            case n.dh.ARROW_LEFT:
            case n.dh.ARROW_RIGHT:
              this.focusNext(
                (function (e) {
                  switch (e) {
                    case n.dh.ARROW_DOWN:
                      return "ARROW_DOWN";
                    case n.dh.ARROW_UP:
                      return "ARROW_UP";
                    case n.dh.ARROW_LEFT:
                      return "ARROW_LEFT";
                    case n.dh.ARROW_RIGHT:
                      return "ARROW_RIGHT";
                    default:
                      return null;
                  }
                })(e.key),
              );
              break;
            case n.dh.ENTER:
              let r = this.calculateFocusedItem();
              null != r &&
                null != t &&
                (e.preventDefault(), e.stopPropagation(), t(r));
          }
        };
        focusNext(e) {
          let { getItemGrid: t, onFocus: r } = this.props,
            { focusedColumn: s, focusedRow: n } = this.state;
          if (null == e) return;
          let l = t();
          if (null == l || 0 === l.length) return;
          let i = this.getNext(l, s, n, e);
          this.setState({ focusedColumn: i.column, focusedRow: i.row }, () => {
            let e = this.calculateFocusedItem();
            null != e && null != r && r(e);
          });
        }
        wrapPosition = (e, t, r, s) => {
          let n = e.length,
            l = Math.max(r * n + t + s, 0) % n,
            i = this.calculateClosest(e[t][r], e[l]) ?? r,
            a = 0;
          return (
            s < 0 && l > t && (a = -1),
            s > 0 && l < t && (a = 1),
            { column: l, row: i + a }
          );
        };
        getNext(e, t, r, s) {
          let n, l, i, a;
          if (null == t || null == r)
            (l = 0), (i = 0), (n = { column: 0, row: 0 });
          else
            switch (((l = t), (i = r), s)) {
              case "ARROW_UP":
                n = { column: l, row: Math.max(i - 1, 0) };
                break;
              case "ARROW_DOWN":
                n = { column: l, row: Math.min(i + 1, e[l].length - 1) };
                break;
              case "ARROW_LEFT":
                n = this.wrapPosition(e, l, i, -1);
                break;
              case "ARROW_RIGHT":
                n = this.wrapPosition(e, l, i, 1);
            }
          return (
            null != n && (a = e[n.column]?.[n.row]),
            (null == a || null == n) &&
              ((n = { column: l, row: i }), (a = e[n.column]?.[n.row])),
            { column: n.column, row: n.row, id: a }
          );
        }
        calculateClosest(e, t) {
          let r,
            s = this.props.getCoordsMap()[e];
          if (null == s) return;
          let n = Number.MAX_SAFE_INTEGER;
          for (let e = 0; e < t.length; e++) {
            let l = this.props.getCoordsMap()[t[e]];
            if (null == l) continue;
            let i = Math.abs(l.top - s.top);
            if (i < n) (n = i), (r = e);
            else break;
          }
          return r;
        }
        calculateFocusedItem() {
          let { getItemGrid: e } = this.props,
            { focusedRow: t, focusedColumn: r } = this.state,
            s = e();
          return null == s ||
            null == r ||
            null == t ||
            null == s[r] ||
            null == s[r][t]
            ? null
            : s[r][t];
        }
        render() {
          return this.props.children;
        }
      }
    },
    537652(e, t, r) {
      r.d(t, { A: () => a });
      var s = r(627968);
      r(64700);
      var n = r(503698),
        l = r.n(n),
        i = r(34879);
      let a = (e) => {
        let {
            message: t,
            className: r,
            noResultsImageURL: n,
            forceLightTheme: a,
            suggestions: o,
          } = e,
          u = null != n ? { backgroundImage: `url(${n})` } : {};
        return (0, s.jsx)("div", {
          className: l()({ [i.VC]: a }, r),
          children: (0, s.jsxs)("div", {
            className: i.iE,
            children: [
              (0, s.jsx)("div", { className: i.Gg, style: u }),
              (0, s.jsx)("div", { children: t }),
              o,
            ],
          }),
        });
      };
    },
    456412(e, t, r) {
      r.d(t, { A: () => u });
      var s = r(627968),
        n = r(64700),
        l = r(770178),
        i = r(765548);
      let a = { width: "100%", height: "100%", display: "flex" },
        o = { width: "100%", height: "100%", flex: 1 };
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return n.forwardRef(function (r, u) {
          let [d, c] = n.useState({ width: 0, height: 0 }),
            h = (0, i.A)((e) => {
              if (null != e) {
                let { width: t, height: r } = e;
                c({ width: t, height: r });
              }
            }),
            m = (0, i.A)((e) => {
              h(e.contentRect);
            }),
            p = (0, l.w)(m, [], t);
          return (
            n.useImperativeHandle(u, () => ({
              triggerResize: () => {
                h(p.current?.getBoundingClientRect());
              },
            })),
            (0, s.jsx)("div", {
              ref: p,
              style: a,
              children: (0, s.jsx)(e, {
                ...r,
                width: d.width,
                height: d.height,
                style: o,
              }),
            })
          );
        });
      }
    },
    996566(e, t, r) {
      r.d(t, { IE: () => u, km: () => d, rM: () => o });
      var s = r(64700),
        n = r(735438),
        l = r.n(n),
        i = r(999886);
      let a = {};
      function o() {
        let e = (0, i.k)();
        return e.favoriteGifs?.gifs ?? a;
      }
      function u(e) {
        let t = o();
        return s.useMemo(
          () =>
            l()(t)
              .map((t, r) => ({ ...t, url: r, src: e?.(t.src, r) ?? t.src }))
              .sortBy("order")
              .reverse()
              .value(),
          [t, e],
        );
      }
      function d(e) {
        return null != o()[e];
      }
    },
    291147(e, t, r) {
      r.d(t, { w: () => n });
      var s = r(985018);
      function n(e) {
        switch (e) {
          case "giphy":
            return s.intl.string(s.t.DFoK1a);
          case "klipy":
            return s.intl.string(s.t.T1Frnm);
          default:
            return s.intl.string(s.t.TnYqke);
        }
      }
    },
    703244(e, t, r) {
      r.d(t, { cf: () => i });
      var s = r(626584);
      let n = (0, r(945810).mj)({
          name: "2025-10-gif-providers-multi-treatment",
          kind: "user",
          defaultConfig: {
            provider: "tenor",
            fallbackProvider: "tenor",
            enableMetrics: !0,
          },
          variations: {
            0: {
              provider: "tenor",
              fallbackProvider: "tenor",
              enableMetrics: !0,
            },
            1: {
              provider: "giphy",
              fallbackProvider: "tenor",
              enableMetrics: !0,
            },
            2: {
              provider: "klipy",
              fallbackProvider: "tenor",
              enableMetrics: !0,
            },
          },
        }),
        l = new s.A("GifProviderConfig");
      function i() {
        try {
          return n.getConfig({ location: "gif_picker" }).provider;
        } catch (e) {
          return l.warn("Error getting provider for API request:", e), "tenor";
        }
      }
    },
    327143(e, t, r) {
      r.d(t, { A: () => l });
      var s = r(64700);
      function n(e, t, r) {
        return Math.min(Math.max(Math.floor(e / t), 1), r);
      }
      let l = (0, r(456412).A)(
        class extends s.Component {
          static defaultProps = { desiredItemWidth: 200 };
          static getDerivedStateFromProps(e, t) {
            let { width: r, desiredItemWidth: s, maxColumns: l } = e,
              i = n(r, s, l);
            return i !== t.columns ? { columns: i } : null;
          }
          state = {
            columns: n(
              this.props.width,
              this.props.desiredItemWidth,
              this.props.maxColumns,
            ),
          };
          render() {
            let { width: e, height: t, children: r } = this.props,
              { columns: s } = this.state;
            return r(s, e, t);
          }
        },
      );
    },
    622142(e, t, r) {
      r.d(t, { A: () => z });
      var s = r(627968),
        n = r(64700),
        l = r(503698),
        i = r.n(l),
        a = r(17928),
        o = r(534514),
        u = r(892547),
        d = r(939249),
        c = r(477155),
        h = r(228366),
        m = r(497685),
        p = r(235986),
        g = r(151271),
        f = r(821102),
        I = r(996566),
        E = r(291147),
        R = r(703244),
        _ = r(735438),
        y = r.n(_),
        S = r(803805),
        C = r(661531),
        A = r(27232),
        v = r(555704),
        F = r(92008),
        w = r(25277),
        x = r(583613),
        G = r(327143),
        N = r(615300),
        T = r(404605);
      let D = [
        C.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
        C.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
        "#929AFA",
      ];
      class P extends n.PureComponent {
        state = { backgroundColor: y().sample(D) };
        render() {
          let {
            props: { height: e },
            state: { backgroundColor: t },
          } = this;
          return (0, s.jsx)("div", {
            style: { height: e, backgroundColor: t },
            className: T.nX,
          });
        }
      }
      class j extends n.Component {
        static defaultProps = { direction: -1 };
        constructor(e) {
          super(e);
          const t = Array(10)
            .fill(null)
            .map(() => y().random(40, 150));
          this.state = {
            blocks: t,
            height: 2 * t.reduce((e, t) => e + t + 12, 12),
            translateY: new N.A.Value(0),
          };
        }
        componentDidMount() {
          this.animateSlide();
        }
        animateSlide = () => {
          let {
            props: { direction: e },
            state: { translateY: t, height: r },
          } = this;
          t.setValue(e > 0 ? 0 : -r / 2 + 12),
            N.A.timing(t, {
              toValue: e > 0 ? -r / 2 + 12 : 0,
              duration: 800,
              easing: N.A.Easing.linear,
            }).start(this.animateSlide);
        };
        getAnimatedStyle() {
          let {
            props: { columns: e },
            state: { translateY: t },
          } = this;
          return {
            width: `${100 / e}%`,
            transform: [
              {
                translateY: t.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0px", "1px"],
                }),
              },
            ],
          };
        }
        render() {
          let { blocks: e } = this.state;
          return (0, s.jsxs)(N.A.div, {
            className: T.fi,
            style: this.getAnimatedStyle(),
            children: [
              e.map((e, t) => (0, s.jsx)(P, { height: e }, t)),
              e.map((e, t) => (0, s.jsx)(P, { height: e }, `alt${t}`)),
            ],
          });
        }
      }
      let k = (e) => {
        let { columns: t } = e;
        return (0, s.jsx)("div", {
          className: T.fi,
          style: { width: `${100 / t}%` },
          children: [, , , ,]
            .fill(null)
            .map((e, t) => (0, s.jsx)("div", { className: T.c8 }, t)),
        });
      };
      class L extends n.PureComponent {
        render() {
          let { columns: e, renderColumn: t } = this.props;
          return (0, s.jsx)("div", {
            className: T.kL,
            children: Array(e)
              .fill(null)
              .map((r, s) => t(e, s)),
          });
        }
      }
      var b = r(285961),
        U = r(652215),
        M = r(985018),
        W = r(736212);
      let O = (e, t) => (0, s.jsx)(k, { columns: e }, t);
      class H extends n.PureComponent {
        _masonryRef = n.createRef();
        state = {
          favoritesTile: (function (e) {
            let t = y().sample(y().values(e));
            return {
              type: U.dD.FAVORITES,
              name: M.intl.string(M.t.y3LQCG),
              icon: A.G,
              src:
                null != t
                  ? t.src
                  : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
              format: t?.format ?? S.TL.IMAGE,
            };
          })(this.props.favorites),
          selectedIndex: { column: 0, row: 0 },
          focusedId: null,
        };
        componentDidMount() {
          0 === this.props.trendingCategories.length && (0, m.k8)();
        }
        handleFocus = (e) => {
          let { current: t } = this._masonryRef;
          if (null == t) return;
          let r = t.getCoordsMap()[e];
          null != r &&
            (t.scrollIntoViewRect({
              start: r.top - 10,
              end: r.top + r.height + 10,
            }),
            this.setState({ focusedId: e }));
        };
        handleSelect = (e) => {
          let { onSelectItem: t } = this.props,
            r = this.getData().find((t) => t.name === e);
          null != r && null != t && t(r.type, r.name);
        };
        getItemKey = (e, t) => {
          if (e > 0) return null;
          let r = this.getData()[t];
          return null != r ? r.name : null;
        };
        memoizedData = (0, x.L_)(function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return r ? [...t] : [e, ...t];
        });
        getData() {
          return this.memoizedData(
            this.state.favoritesTile,
            this.props.trendingCategories,
            this.props.hideFavoritesTile,
          );
        }
        renderCategoryExtras(e) {
          let { name: t, type: r } = e;
          return (0, s.jsxs)(n.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: r === U.dD.FAVORITES ? W.H7 : W.FP,
              }),
              (0, s.jsxs)("div", {
                className: W.O1,
                children: [
                  r === U.dD.TRENDING_GIFS
                    ? (0, s.jsx)(v.U, {
                        className: W.Yl,
                        color: "currentColor",
                      })
                    : null,
                  (0, s.jsx)("span", { className: W.yb, children: t }),
                ],
              }),
            ],
          });
        }
        renderItem = (e, t, r, n) => {
          if (e > 0) return null;
          let l = this.getData()[t];
          if (null == l) return;
          let { onSelectItem: i, imagePool: a, videoPool: o } = this.props,
            { focusedId: u } = this.state;
          return (0, s.jsx)(
            b.uG,
            {
              format: l.format,
              color: C.A.unsafe_rawColors.PRIMARY_800.css,
              src: l.src,
              item: l,
              index: t,
              coords: r,
              onClick: () => i(l.type, l.name),
              renderExtras: this.renderCategoryExtras,
              focused: l.name === u,
              imagePool: a,
              videoPool: o,
            },
            n,
          );
        };
        renderContent = (e, t, r) => {
          let { className: n, trendingCategories: l } = this.props;
          return 0 === l.length
            ? (0, s.jsx)(L, { columns: e, width: t, renderColumn: O })
            : (0, s.jsx)(F.f, {
                ref: this._masonryRef,
                fade: !0,
                className: i()(W.kL, n),
                itemGutter: 12,
                getItemKey: this.getItemKey,
                columns: e,
                getItemHeight: () => 110,
                renderItem: this.renderItem,
                sections: [this.getData().length],
                chunkSize: 50,
              });
        };
        getItemGrid = () => {
          let { current: e } = this._masonryRef;
          return null != e ? e.getItemGrid() : [];
        };
        getCoordsMap = () => {
          let { current: e } = this._masonryRef;
          return null != e ? e.getCoordsMap() : {};
        };
        render() {
          return (0, s.jsx)(w.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, s.jsx)(G.A, {
              desiredItemWidth: 200,
              maxColumns: 6,
              children: this.renderContent,
            }),
          });
        }
      }
      function Q(e) {
        let t = (0, a.bG)([f.A], () => f.A.getTrendingCategories()),
          r = (0, I.rM)(),
          n = (0, b.d5)();
        return (0, s.jsx)(H, {
          ...e,
          ...n,
          trendingCategories: t,
          favorites: r,
        });
      }
      var K = r(732139),
        V = r(650583),
        q = r(874926);
      let B = (e) => e.stopPropagation();
      class Y extends n.PureComponent {
        state = { resultType: null };
        componentDidMount() {
          m.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query &&
              this.search(this.props.query, U.dD.SEARCH);
        }
        componentDidUpdate(e) {
          "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, U.dD.SEARCH);
        }
        componentWillUnmount() {
          h.h.wait(() => m.Se()),
            document.removeEventListener("keydown", this.backToFrontPage);
        }
        search(e, t, r) {
          m.$P(e, t, r),
            "" === e
              ? this.setState({ resultType: null })
              : this.state.resultType !== U.dD.SEARCH &&
                this.setState({ resultType: U.dD.SEARCH });
        }
        backToFrontPage = (e) => {
          let { resultType: t } = this.state;
          e.key !== V.dh.ESCAPE ||
            (null != t &&
              (e.stopPropagation(),
              e.preventDefault(),
              this.handleClearQuery()));
        };
        handleChangeQuery = (e) => {
          (0, g.Ri)(e), this.search(e, U.dD.SEARCH);
        };
        handleSelectSuggestion = (e) => {
          (0, g.Ri)(""), m.Se(), this.search(e, U.dD.SEARCH_SUGGESTION, !0);
        };
        handleClearQuery = () => {
          let { current: e } = this.props.searchBarRef;
          (0, g.Ri)(""),
            m.Se(),
            this.setState({ resultType: null }),
            null != e && e.focus();
        };
        handleSelectGIF = (e) => {
          let { onSelectGIF: t } = this.props;
          null != t && t(e);
        };
        handleSelectItem = (e, t) => {
          let { current: r } = this.props.searchBarRef;
          switch (e) {
            case U.dD.TRENDING_CATEGORY:
              m.$P(t, U.dD.TRENDING_CATEGORY, !0), null != r && r.focus();
              break;
            case U.dD.TRENDING_GIFS:
              m.Z4();
          }
          this.setState({ resultType: e });
        };
        renderHeaderContent() {
          let { query: e, headingColor: t } = this.props,
            { resultType: r } = this.state;
          switch (r) {
            case U.dD.FAVORITES:
              return (0, s.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: t,
                className: q.wL,
                children: M.intl.string(M.t.y3LQCG),
              });
            case U.dD.TRENDING_GIFS:
              return (0, s.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: t,
                className: q.wL,
                children: M.intl.string(M.t.H6zNFz),
              });
            default: {
              let t = (0, R.cf)(),
                r = (0, E.w)(t);
              return (0, s.jsx)(u.I, {
                query: e,
                onChange: this.handleChangeQuery,
                onClear: this.handleClearQuery,
                placeholder: r,
                "aria-label": r,
                ref: this.props.searchBarRef,
                autoFocus: !0,
              });
            }
          }
        }
        renderHeader() {
          let { resultType: e } = this.state,
            t = null;
          return (
            null != e &&
              (t = (0, s.jsx)(d.D, {
                onClick: this.handleClearQuery,
                className: q.Gv,
                "aria-label": M.intl.string(M.t["13/7kX"]),
                children: (0, s.jsx)(c.r, {
                  size: "md",
                  color: "currentColor",
                }),
              })),
            (0, s.jsxs)(p.A, {
              align: p.A.Align.CENTER,
              children: [t, this.renderHeaderContent()],
            })
          );
        }
        renderContent() {
          let {
              contentClassName: e,
              resultItems: t,
              resultQuery: r,
              query: n,
              favorites: l,
              searchOffset: i,
              searchLimit: a,
              searchTotalResults: o,
              suggestions: u,
              hideFavorites: d,
            } = this.props,
            { resultType: c } = this.state;
          return null == c
            ? (0, s.jsx)(Q, {
                className: e,
                hideFavoritesTile: d,
                onSelectItem: this.handleSelectItem,
              })
            : (0, s.jsx)(b.Ay, {
                className: e,
                data: c === U.dD.FAVORITES ? l : t,
                onSelectGIF: this.handleSelectGIF,
                resultType: c,
                resultQuery: r,
                query: n,
                searchOffset: i,
                searchLimit: a,
                searchTotalResults: o,
                suggestions: u,
                onSelectSuggestion: this.handleSelectSuggestion,
                selectedGIF: this.props.selectedGIF,
              });
        }
        render() {
          let { className: e, forwardedRef: t } = this.props;
          return (0, s.jsxs)("div", {
            id: K.ni,
            role: "tabpanel",
            "aria-labelledby": K.g9,
            className: i()(q.kL, e),
            onClick: B,
            ref: t,
            children: [
              (0, s.jsx)("div", {
                className: i()(q.wx, this.props.headerClassName),
                children: this.renderHeader(),
              }),
              (0, s.jsx)("div", {
                className: q.Qs,
                children: this.renderContent(),
              }),
            ],
          });
        }
      }
      let z = n.forwardRef((e, t) => {
        n.useEffect(() => {
          e.persistSearch ||
            ((0, g.Ri)(e.initialQuery ?? ""),
            m.$P(e.initialQuery ?? "", U.dD.SEARCH));
        }, [e.persistSearch, e.initialQuery]);
        let {
            query: r,
            resultQuery: l,
            resultItems: i,
            suggestions: o,
          } = (0, a.cf)([f.A], () => ({
            query: f.A.getQuery(),
            resultQuery: f.A.getResultQuery(),
            resultItems: f.A.getResultItems(),
            suggestions: f.A.getSuggestions(),
          })),
          u = (0, g.RQ)((e) => e.searchQuery),
          d = (0, I.IE)(),
          c = n.useRef(null);
        return (0, s.jsx)(Y, {
          ...e,
          forwardedRef: t,
          query: null != r && "" !== r ? r : u,
          resultQuery: l,
          resultItems: i,
          suggestions: o,
          favorites: d,
          searchOffset: 0,
          searchTotalResults: f.A.getResultItems().length,
          searchLimit: null,
          searchBarRef: c,
          selectedGIF: e.selectedGIF,
        });
      });
    },
    285961(e, t, r) {
      r.d(t, { d5: () => U, Ay: () => M, uG: () => L });
      var s = r(627968),
        n = r(64700),
        l = r(503698),
        i = r.n(l),
        a = r(735438),
        o = r.n(a);
      r(321073);
      class u {
        _elements;
        _createElement;
        _cleanElement;
        constructor(e, t) {
          (this._elements = []),
            (this._createElement = e),
            (this._cleanElement = t);
        }
        getElement() {
          return 0 === this._elements.length
            ? this._createElement()
            : this._elements.pop();
        }
        poolElement(e) {
          this._cleanElement(e), this._elements.push(e);
        }
        clearPool() {
          this._elements.length = 0;
        }
      }
      var d = r(803805),
        c = r(661531),
        h = r(939249),
        m = r(825484),
        p = r(821609),
        g = r(27232),
        f = r(364522),
        I = r(92008),
        E = r(497685),
        R = r(25277),
        _ = r(537652),
        y = r(267102),
        S = r(202803),
        C = r(439401),
        A = r(998218),
        v = r(327143),
        F = r(652215),
        w = r(985018),
        x = r(931102);
      let G = [
          c.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
          c.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
          "#929AFA",
        ],
        N = Array.from({ length: 16 }).map((e, t) => ({
          id: `${t}`,
          height: Math.floor(100 * Math.random()) + 120,
        }));
      function T(e) {
        return e.id ?? e.src;
      }
      function D(e, t) {
        let r = N[t];
        return null == r ? 0 : r.height;
      }
      function P(e, t, r, n) {
        if (!(e > 0))
          return null == N[t]
            ? null
            : (0, s.jsx)(
                "div",
                {
                  className: x.qf,
                  style: { animationDelay: `${75 * t}ms`, ...r },
                },
                n,
              );
      }
      function j(e, t) {
        return e > 0 ? "" : (N[t]?.id ?? "");
      }
      function k(e) {
        return e === d.TL.VIDEO;
      }
      class L extends n.PureComponent {
        ref = null;
        _video = null;
        _image = null;
        _mounted = !0;
        constructor(e) {
          super(e);
          const { format: t, color: r, imagePool: s } = this.props;
          (this.state = { color: null == r ? o().sample(G) : r, loaded: !1 }),
            k(t) ||
              ((this._image = s.getElement()),
              (this._image.onload = () => this.setState({ loaded: !0 })),
              (this._image.src = e.src));
        }
        componentDidMount() {
          let {
            props: {
              format: e,
              src: t,
              coords: { width: r, height: s },
              videoPool: n,
            },
            ref: l,
          } = this;
          if (e !== d.TL.VIDEO || null == l) return;
          let i = n.getElement();
          (i.oncanplay = this.handleCanPlay),
            (i.src = t),
            (i.width = r),
            (i.height = s),
            l.appendChild(i),
            (this._video = i);
        }
        componentDidUpdate(e) {
          let { width: t, height: r } = this.props.coords;
          null != this._video &&
            (e.coords.width !== t || e.coords.height !== r) &&
            ((this._video.width = t), (this._video.height = r));
        }
        componentWillUnmount() {
          this._mounted = !1;
          let { _image: e, _video: t } = this,
            { imagePool: r, videoPool: s } = this.props;
          null != e && ((this._image = null), r.poolElement(e)),
            null != t && ((this._video = null), s.poolElement(t));
        }
        handleCanPlay = () => {
          this._mounted && this.setState({ loaded: !0 });
        };
        handleClick = () => {
          let { onClick: e, item: t, index: r } = this.props;
          null != e && e(t, r);
        };
        renderGIF() {
          let e,
            t,
            {
              src: r,
              coords: { width: n, height: l },
            } = this.props,
            { loaded: i } = this.state;
          return i
            ? (0, s.jsx)("img", {
                src:
                  ((t =
                    null != (e = A.A.toURLSafe(r)) &&
                    ((0, S.BX)(e) || (0, S.fr)(e)) &&
                    e.pathname.toLowerCase().endsWith(".gif")),
                  null != e &&
                  ((((0, S.BX)(e) || (0, S.fr)(e)) &&
                    (e.pathname.toLowerCase().endsWith(".webp") ||
                      e.pathname.toLowerCase().endsWith(".avif"))) ||
                    t)
                    ? (t && e.searchParams.set("format", "webp"),
                      e.searchParams.set("animated", "true"),
                      e.toString())
                    : r),
                width: n,
                height: l,
                className: x.nX,
                alt: "",
              })
            : null;
        }
        render() {
          let {
              item: e,
              renderExtras: t,
              format: r,
              coords: n,
              focused: l,
              selected: i,
            } = this.props,
            { color: a, loaded: o } = this.state;
          return (0, s.jsxs)(h.D, {
            tabIndex: -1,
            innerRef: (e) => {
              this.ref = e;
            },
            className: x.Ke,
            "data-focused": l,
            "data-selected": i,
            onClick: this.handleClick,
            style: { backgroundColor: o ? void 0 : a, ...n },
            children: [k(r) ? null : this.renderGIF(), null != t ? t(e) : null],
          });
        }
      }
      class b extends n.PureComponent {
        _masonryRef = n.createRef();
        prevResultQuery = null;
        state = { focusedId: null };
        componentDidMount() {
          let { resultType: e, data: t } = this.props;
          e === F.dD.FAVORITES &&
            ((0, E.Qh)(F.dD.FAVORITES),
            (0, E.H9)(t, F.dD.FAVORITES, { limit: null }));
        }
        handleFocus = (e) => {
          let { current: t } = this._masonryRef;
          if (null == t) return;
          let r = t.getCoordsMap()[e];
          null != r &&
            (t.scrollIntoViewRect({
              start: r.top - 10,
              end: r.top + r.height + 10,
            }),
            this.setState({ focusedId: e }));
        };
        selectItem(e, t) {
          let {
            onSelectGIF: r,
            resultType: s,
            data: n,
            resultQuery: l,
          } = this.props;
          null != r && r(e),
            (0, E.g4)({
              type: s,
              index: t,
              offset: this.props.searchOffset,
              limit: this.props.searchLimit,
              results: n.length,
              totalResults: this.props.searchTotalResults,
              query: l,
              gifId: e.id,
            });
        }
        handleSelect = (e) => {
          let t,
            { data: r } = this.props,
            s = r.findIndex((t) => T(t) === e);
          -1 !== s && (t = r[s]), null != t && this.selectItem(t, s);
        };
        handleClickItem = (e, t) => {
          this.selectItem(e, t);
        };
        handleScroll = () => {
          let { resultQuery: e } = this.props,
            { current: t } = this._masonryRef;
          if (null == t) return;
          let { scrollTop: r, scrollHeight: s } = t.getScrollerState();
          s - r <= 1220 &&
            (e !== this.prevResultQuery && (0, E._E)(e),
            (this.prevResultQuery = e));
        };
        renderItem = (e, t, r, n) => {
          if (e > 0) return null;
          let { focusedId: l } = this.state,
            { selectedGIF: i } = this.props,
            a = this.props.data[t];
          if (null == a) return null;
          let o = null != i && T(i) === T(a);
          return (0, s.jsx)(
            L,
            {
              item: a,
              index: t,
              format: a.format,
              src: a.src,
              coords: r,
              onClick: this.handleClickItem,
              renderExtras: () => (0, s.jsx)(C.A, { className: x.uJ, ...a }),
              focused: T(a) === l,
              imagePool: this.props.imagePool,
              videoPool: this.props.videoPool,
              selected: o,
            },
            n,
          );
        };
        getItemHeight = (e, t, r) => {
          if (e > 0) return 0;
          let s = this.props.data[t];
          return null == s ? 0 : r * (s.height / s.width);
        };
        getItemKey = (e, t) => {
          if (e > 0) return null;
          let r = this.props.data[t];
          return null != r ? (r.id ?? r.src) : null;
        };
        getSectionHeight(e) {
          return 220 * (1 === e);
        }
        renderSection = (e, t, r) => {
          let { onSelectSuggestion: l, suggestions: i } = this.props;
          return 1 === e
            ? (0, s.jsx)(
                "div",
                {
                  className: x.jZ,
                  style: t,
                  children:
                    i.length > 0
                      ? (0, s.jsxs)(n.Fragment, {
                          children: [
                            (0, s.jsx)("div", {
                              className: x.Z4,
                              children: w.intl.string(w.t["3JGJo2"]),
                            }),
                            (0, s.jsx)(m.e, {
                              size: "sm",
                              className: x.yB,
                              children: i.map((e) =>
                                (0, s.jsx)(
                                  p.$,
                                  {
                                    variant: "secondary",
                                    onClick: () => {
                                      l(e);
                                    },
                                    text: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                },
                r,
              )
            : null;
        };
        renderEmptyFavorite(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, s.jsx)("div", {
            className: x.LA,
            children:
              null != e
                ? (0, s.jsxs)("div", {
                    className: x.BA,
                    children: [
                      t
                        ? (0, s.jsx)(g.G, {
                            size: "xs",
                            color: "currentColor",
                            className: x.$2,
                          })
                        : null,
                      (0, s.jsx)("div", { className: x.i6, children: e }),
                    ],
                  })
                : (0, s.jsx)("div", { className: x.Hc }),
          });
        }
        renderEmptyFavorites() {
          return (0, s.jsx)(f.Ip, {
            className: x.Xv,
            fade: !0,
            children: (0, s.jsxs)("div", {
              className: x.Ep,
              children: [
                this.renderEmptyFavorite(w.intl.string(w.t["3gyw4Z"]), !0),
                this.renderEmptyFavorite(w.intl.string(w.t.yThUi4)),
                this.renderEmptyFavorite(w.intl.string(w.t.MeP0SF)),
                Array.from({ length: 15 }).map((e, t) =>
                  (0, s.jsx)(
                    n.Fragment,
                    { children: this.renderEmptyFavorite() },
                    t,
                  ),
                ),
                this.renderEmptyFavorite(w.intl.string(w.t["5u99Xb"])),
                Array.from({ length: 16 }).map((e, t) =>
                  (0, s.jsx)(
                    n.Fragment,
                    { children: this.renderEmptyFavorite() },
                    t,
                  ),
                ),
                this.renderEmptyFavorite(w.intl.string(w.t.o6CLL4)),
              ],
            }),
          });
        }
        renderContent = (e, t, r) => {
          let {
            className: n,
            data: l,
            resultQuery: a,
            query: o,
            resultType: u,
          } = this.props;
          return 0 === l.length && (a !== o || u === F.dD.TRENDING_GIFS)
            ? (0, s.jsx)(
                I.f,
                {
                  fade: !0,
                  className: i()(x.Xv, n),
                  sections: [N.length],
                  columns: e,
                  itemGutter: 12,
                  getItemKey: j,
                  getItemHeight: D,
                  renderItem: P,
                  chunkSize: 128,
                },
                a,
              )
            : (0, s.jsx)(
                I.f,
                {
                  ref: this._masonryRef,
                  fade: !0,
                  itemGutter: 12,
                  className: i()(x.Xv, n),
                  columns: e,
                  sections: [l.length, 0],
                  getItemKey: this.getItemKey,
                  getItemHeight: this.getItemHeight,
                  renderItem: this.renderItem,
                  getSectionHeight: this.getSectionHeight,
                  renderSection: this.renderSection,
                  onScroll: this.handleScroll,
                  chunkSize: 128,
                },
                `${a}-${u ?? ""}`,
              );
        };
        getItemGrid = () => {
          let { current: e } = this._masonryRef;
          return null != e ? e.getItemGrid() : [];
        };
        getCoordsMap = () => {
          let { current: e } = this._masonryRef;
          return null != e ? e.getCoordsMap() : {};
        };
        render() {
          let { data: e, resultQuery: t, query: r, resultType: n } = this.props;
          return 0 === e.length && t === r && n !== F.dD.TRENDING_GIFS
            ? n === F.dD.FAVORITES
              ? this.renderEmptyFavorites()
              : (0, s.jsx)(_.A, {
                  message: w.intl.string(w.t["5dX4UM"]),
                  className: x.wV,
                })
            : (0, s.jsx)(
                R.A,
                {
                  getItemGrid: this.getItemGrid,
                  getCoordsMap: this.getCoordsMap,
                  onFocus: this.handleFocus,
                  onSelect: this.handleSelect,
                  children: (0, s.jsx)(v.A, {
                    desiredItemWidth: 200,
                    maxColumns: 8,
                    children: this.renderContent,
                  }),
                },
                t,
              );
        }
      }
      function U() {
        let { renderWindow: e } = n.useContext(y.Ay),
          t = e.document,
          [r] = n.useState(
            () =>
              new u(
                () => t.createElement("img"),
                (e) => {
                  (e.onload = null), (e.src = "");
                },
              ),
          ),
          [s] = n.useState(
            () =>
              new u(
                () => {
                  let e = t.createElement("video");
                  return (
                    (e.className = x.nX),
                    (e.autoplay = !0),
                    (e.loop = !0),
                    (e.muted = !0),
                    (e.preload = "auto"),
                    (e.controls = !1),
                    e
                  );
                },
                (e) => {
                  (e.src = ""), (e.oncanplay = null);
                  let { parentNode: t } = e;
                  null != t && t.removeChild(e);
                },
              ),
          );
        return { imagePool: r, videoPool: s };
      }
      let M = function (e) {
        let t = U();
        return (0, s.jsx)(b, { ...e, ...t });
      };
    },
    439401(e, t, r) {
      r.d(t, { A: () => E });
      var s = r(627968),
        n = r(64700),
        l = r(503698),
        i = r.n(l),
        a = r(990078),
        o = r(27232),
        u = r(505930),
        d = r(939249),
        c = r(497685),
        h = r(996566),
        m = r(625494),
        p = r(652215),
        g = r(650583),
        f = r(985018),
        I = r(280312);
      let E = n.memo(function (e) {
        let {
            width: t,
            height: r,
            src: l,
            gifSrc: E,
            url: R,
            format: _,
            className: y,
          } = e,
          [S, C] = n.useState(!1),
          A = (0, h.km)((0, c.xo)(R)),
          v = A ? f.intl.string(f.t["5/NS74"]) : f.intl.string(f.t.nIH0v8),
          F = A ? o.G : u.y;
        n.useEffect(() => {
          if (!S) return;
          let e = setTimeout(() => {
            C(!1);
          }, 500);
          return () => clearTimeout(e);
        }, [S]);
        let w = (e) => {
          e.preventDefault(),
            e.stopPropagation(),
            C(!0),
            A
              ? (0, c.Tr)(R)
              : ((0, c.wg)({
                  url: R,
                  src: l,
                  gifSrc: E,
                  width: t,
                  height: r,
                  format: _,
                }),
                m._.dispatch(p.jej.FAVORITE_GIF));
        };
        return (0, s.jsx)(a.m, {
          text: v,
          children: (0, s.jsx)(d.D, {
            "aria-label": v,
            ignoreKeyPress: !0,
            className: i()(y, I.jj, { [I.wH]: A, [I.TV]: S }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: w,
            onKeyDown: (e) => {
              (e.key === g.dh.ENTER || e.key === g.dh.SPACE) && w(e);
            },
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, s.jsx)(F, {
              color: "currentColor",
              className: I.Kk,
              size: "custom",
              width: 20,
              height: 20,
            }),
          }),
        });
      });
    },
    999886(e, t, r) {
      r.d(t, { k: () => a });
      var s = r(64700),
        n = r(17928),
        l = r(594061),
        i = r(617617);
      function a() {
        return (
          s.useEffect(() => {
            l.bW.loadIfNecessary();
          }, []),
          (0, n.bG)([i.A], () => i.A.frecencyWithoutFetchingLatest)
        );
      }
    },
    821102(e, t, r) {
      r.d(t, { A: () => _ }), r(323874), r(14289), r(35956);
      var s = r(17928),
        n = r(803805),
        l = r(228366),
        i = r(652215),
        a = r(985018);
      let o = "webm",
        u = !(function (e) {
          switch (e) {
            case "fixed_height.mp4":
            case "fixed_height_small.mp4":
            case "fixed_width.mp4":
            case "fixed_width_small.mp4":
            case "downsized_small.mp4":
            case "original.mp4":
            case "mp4":
            case "tinymp4":
            case "nanomp4":
            case o:
            case "tinywebm":
            case "nanowebm":
              return !0;
            default:
              return !1;
          }
        })(o)
          ? n.TL.IMAGE
          : n.TL.VIDEO,
        d = null,
        c = "",
        h = "",
        m = [],
        p = [],
        g = [],
        f = [];
      function I(e) {
        return e.replace(/^https?:/, "");
      }
      function E(e) {
        try {
          let t = new URL(e).pathname.toLowerCase();
          if (t.endsWith(".mp4") || t.endsWith(".webm")) return n.TL.VIDEO;
        } catch {}
        return n.TL.IMAGE;
      }
      class R extends s.Ay.Store {
        static displayName = "GIFPickerViewStore";
        getAnalyticsID() {
          return d;
        }
        getQuery() {
          return c;
        }
        getResultQuery() {
          return h;
        }
        getResultItems() {
          return m;
        }
        getTrendingCategories() {
          return p;
        }
        getSelectedFormat() {
          return o;
        }
        getSuggestions() {
          return g;
        }
        getTrendingSearchTerms() {
          return f;
        }
      }
      let _ = new R(l.h, {
        GIF_PICKER_INITIALIZE: function (e) {
          d = e.analyticsID;
        },
        GIF_PICKER_QUERY: function (e) {
          "" === (c = e.query) && ((h = ""), (m = []), (g = []));
        },
        GIF_PICKER_QUERY_SUCCESS: function (e) {
          if (null != e.query && c === h) return !1;
          null != e.query && (h = e.query),
            (m = e.items.map((e) => {
              let {
                width: t,
                height: r,
                src: s,
                gif_src: n,
                url: l,
                id: i,
              } = e;
              return {
                width: t,
                height: r,
                src: I(s),
                gifSrc: I(n),
                url: l,
                id: i,
                format: u,
              };
            }));
        },
        GIF_PICKER_QUERY_FAILURE: function (e) {
          let { query: t } = e;
          if (null == t) return !1;
          (h = t), (m = []);
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
          let t = e.trendingCategories;
          p = [
            ...(null != e.trendingGIFPreview
              ? [
                  {
                    type: i.dD.TRENDING_GIFS,
                    name: a.intl.string(a.t.H6zNFz),
                    src: I(e.trendingGIFPreview.src),
                    format: E(e.trendingGIFPreview.src),
                  },
                ]
              : []),
            ...t.map((e) => ({
              ...e,
              src: I(e.src),
              type: i.dD.TRENDING_CATEGORY,
              format: E(e.src),
            })),
          ];
        },
        GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
          let { items: t } = e;
          g = t;
        },
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
          let { items: t } = e;
          f = t;
        },
      });
    },
    11187(e, t, r) {
      r.d(t, { QL: () => l, mW: () => n });
      var s = r(652215);
      function n(e) {
        if ("Klipy" !== e.providerName) return;
        let { thumbnail: t } = e;
        if (null != t) return t.proxyURL ?? t.url ?? t.uri;
      }
      function l(e, t, r) {
        let n = null != t ? { [t]: 1 } : {},
          { offset: l, limit: i, results: a, totalResults: o } = r ?? {};
        return {
          search_type: s.I4_.GIF,
          load_id: e,
          limit: i,
          offset: l,
          page: null != i && null != l ? Math.floor(l / i) + 1 : 1,
          total_results: o,
          page_results: null != a ? a : null,
          num_modifiers: Object.keys(n).length,
          modifiers: n,
        };
      }
    },
    555704(e, t, r) {
      r.d(t, { U: () => a });
      var s = r(627968);
      r(64700);
      var n = r(661531),
        l = r(996682),
        i = r(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: r,
            height: a,
            color: o = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: u = "",
            ...d
          } = e,
          c = (0, i.J)(t),
          h = c?.width ?? r,
          m = c?.height ?? a;
        return (0, s.jsx)("svg", {
          ...(0, l.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=68647.f7bd92433fdc18cf.js.map
