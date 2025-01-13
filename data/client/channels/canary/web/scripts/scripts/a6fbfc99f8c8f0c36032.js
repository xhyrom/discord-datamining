"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31931"],
  {
    648113: function (e, n, t) {
      t.d(n, {
        C: function () {
          return s;
        },
      });
      var a = t(120356),
        i = t.n(a),
        r = t(442837),
        l = t(514361),
        o = t(358459);
      function s(e) {
        let n = (0, r.e7)([l.Z], () => null != l.Z.gradientPreset);
        return i()(o.gradient, e, { [o.clientThemes]: n });
      }
    },
    979233: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      });
      var a = t(192379),
        i = t(397341);
      function r() {
        let e = a.useRef(new i.Z()),
          n = a.useCallback((n) => {
            e.current.handleScroll(n);
          }, []);
        return {
          resetScrollPosition: a.useCallback(() => {
            e.current.scrollPosition.set(0);
          }, []),
          scrollPosition: e.current.scrollPosition,
          onScroll: n,
        };
      }
    },
    88693: function (e, n, t) {
      t.d(n, {
        U: function () {
          return s;
        },
      });
      var a = t(192379),
        i = t(49898),
        r = t(406014);
      let l =
          20 +
          i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX -
          i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
        o =
          20 +
          i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX +
          i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
      function s(e) {
        let {
            isSearchBarVisible: n,
            isSearchBarEmpty: t,
            searchBarState: s,
            setSearchBarState: c,
          } = e,
          d = a.useCallback(
            (e) => {
              if (!n) return;
              let a = Math.round(e);
              switch (s) {
                case i.GlobalDiscoverySearchBarState.DEFAULT:
                  a < 20 &&
                    c(
                      t
                        ? i.GlobalDiscoverySearchBarState.COLLAPSED
                        : i.GlobalDiscoverySearchBarState.FLOATING,
                    );
                  break;
                case i.GlobalDiscoverySearchBarState.COLLAPSED:
                  a > l && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                  break;
                case i.GlobalDiscoverySearchBarState.FLOATING:
                  a > o && c(i.GlobalDiscoverySearchBarState.DEFAULT);
              }
            },
            [t, n, s, c],
          ),
          u = a.useCallback(() => {
            c(i.GlobalDiscoverySearchBarState.FLOATING);
          }, [c]),
          m = a.useCallback(() => {
            s === i.GlobalDiscoverySearchBarState.FLOATING &&
              t &&
              c(i.GlobalDiscoverySearchBarState.COLLAPSED);
          }, [t, s, c]);
        return {
          onTabsAvailableWidthChange: d,
          tabsClassName:
            s === i.GlobalDiscoverySearchBarState.FLOATING
              ? r.floatingSearchTabsMask
              : void 0,
          onCollapsedSearchBarClick: u,
          onSearchBarBlur: m,
        };
      }
    },
    322665: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(200651),
        i = t(648113),
        r = t(358459);
      function l() {
        let e = (0, i.C)();
        return (0, a.jsxs)("div", {
          className: r.gradientBackground,
          children: [
            (0, a.jsx)("div", { className: e }),
            (0, a.jsx)("div", { className: r.gradientOverlay }),
          ],
        });
      }
    },
    17845: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(780384),
        s = t(481060),
        c = t(410030),
        d = t(358459);
      function u(e) {
        let { title: n } = e;
        return (0, a.jsx)(s.Heading, {
          className: l()(d.title, d.uppercase),
          variant: "display-lg",
          color: "header-primary",
          children: n,
        });
      }
      function m(e) {
        let {
            title: n,
            description: t,
            button: r,
            className: m,
            children: p,
          } = e,
          _ = (0, c.ZP)(),
          g = (0, o.wj)(_),
          f = i.useMemo(
            () =>
              Array.isArray(n)
                ? n.map((e, n) => (0, a.jsx)(u, { title: e }, n))
                : (0, a.jsx)(u, { title: n }),
            [n],
          );
        return (0, a.jsxs)("div", {
          className: l()(d.container, m),
          children: [
            (0, a.jsx)("div", {
              className: d.content,
              children: (0, a.jsxs)("div", {
                className: d.textContainer,
                children: [
                  f,
                  null != t &&
                    (0, a.jsx)(s.Text, {
                      className: d.description,
                      variant: "text-md/medium",
                      color: g ? "text-muted" : "header-primary",
                      children: t,
                    }),
                  null != r &&
                    (0, a.jsx)("div", {
                      className: d.buttonContainer,
                      children: r,
                    }),
                ],
              }),
            }),
            p,
          ],
        });
      }
    },
    374939: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(278741);
      function r(e) {
        let { children: n } = e;
        return (0, a.jsx)("section", {
          className: i.contentSection,
          children: (0, a.jsx)("div", { className: i.content, children: n }),
        });
      }
    },
    233374: function (e, n, t) {
      var a = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        l = t(481060),
        o = t(578451);
      n.Z = function (e) {
        let { tabs: n, onTabSelect: t, selectedTab: i, className: s } = e;
        return (0, a.jsx)(l.TabBar, {
          type: "top-pill",
          selectedItem: i,
          onItemSelect: t,
          className: s,
          children: n.map((e, n) => {
            let { id: t, label: i, count: s } = e;
            return (0, a.jsx)(
              l.TabBar.Item,
              {
                id: t,
                className: r()(o.tabItem, {
                  [o.firstChildSpacingFix]: 0 === n,
                }),
                "aria-label": i,
                children:
                  null != s && s > 0 ? "".concat(i, " (").concat(s, ")") : i,
              },
              t,
            );
          }),
        });
      };
    },
    611928: function (e, n, t) {
      t.d(n, {
        Cm: function () {
          return _;
        },
        ZP: function () {
          return g;
        },
        _6: function () {
          return i;
        },
        aV: function () {
          return p;
        },
        z6: function () {
          return m;
        },
      });
      var a,
        i,
        r = t(200651),
        l = t(192379),
        o = t(120356),
        s = t.n(o),
        c = t(208404),
        d = t(481060),
        u = t(406014);
      function m(e) {
        let { scrollPosition: n } = e;
        return (0, r.jsx)(c.animated.div, {
          className: u.backdrop,
          style: { opacity: null == n ? void 0 : n.to([0, 100], [0, 1]) },
        });
      }
      function p(e) {
        let { icon: n } = e;
        return (0, r.jsx)(n, {
          className: u.icon,
          color: d.tokens.colors.HEADER_PRIMARY,
          size: "md",
        });
      }
      function _(e) {
        let { onClick: n, icon: t } = e;
        return (0, r.jsx)(d.Clickable, {
          className: u.iconButton,
          onClick: n,
          children: (0, r.jsx)(t, { color: "currentColor", size: "sm" }),
        });
      }
      ((a = i || (i = {})).OVERLAY = "overlay"), (a.RELATIVE = "relative");
      function g(e) {
        let { className: n, variant: t, children: a } = e,
          i = l.useMemo(
            () =>
              (function (e) {
                if ("overlay" === e) return u.overlay;
                return u.relative;
              })(t),
            [t],
          );
        return (0, r.jsx)("div", {
          className: s()(u.headerBar, i, n),
          children: a,
        });
      }
    },
    397341: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(208404);
      class i {
        handleScroll(e) {
          this.top.set(e.currentTarget.scrollTop);
        }
        get scrollPosition() {
          return this.top;
        }
        constructor() {
          var e, n, t;
          (e = this),
            (n = "top"),
            (t = new a.SpringValue(0)),
            "top" in e
              ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = t);
        }
      }
    },
    922122: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120),
        t(724458);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(21260),
        s = t(780384),
        c = t(481060),
        d = t(410030),
        u = t(540059),
        m = t(889711),
        p = t(79707),
        _ = t(388032),
        g = t(333078);
      function f(e) {
        let { onTabSelect: n, tabs: t, selectedTab: r } = e,
          o = (0, d.ZP)(),
          m = (0, s.wj)(o),
          f = (0, u.Q3)("GlobalDiscoveryHeaderMoreTab"),
          v = i.useMemo(
            () =>
              null !=
              t.find((e) => {
                let { id: n } = e;
                return n === r;
              }),
            [r, t],
          ),
          [C, x] = i.useState(!1),
          h = (function (e) {
            let {
              selected: n,
              isVisualRefreshEnabled: t,
              isDarkTheme: a,
              isHovered: i,
            } = e;
            if (t) return i ? "text-primary" : n ? "text-brand" : "text-normal";
            return !n && i
              ? "interactive-hover"
              : n
                ? "header-primary"
                : a
                  ? "interactive-normal"
                  : "header-primary";
          })({
            selected: v,
            isVisualRefreshEnabled: f,
            isDarkTheme: m,
            isHovered: C,
          }),
          b = (function (e) {
            let {
              selected: n,
              isVisualRefreshEnabled: t,
              isDarkTheme: a,
              isHovered: i,
            } = e;
            if (t)
              return i
                ? c.tokens.colors.TEXT_PRIMARY
                : n
                  ? c.tokens.colors.TEXT_BRAND
                  : c.tokens.colors.INTERACTIVE_NORMAL;
            return !n && i
              ? c.tokens.colors.INTERACTIVE_HOVER
              : n
                ? c.tokens.colors.HEADER_PRIMARY
                : a
                  ? c.tokens.colors.TEXT_MUTED
                  : c.tokens.colors.HEADER_PRIMARY;
          })({
            selected: v,
            isVisualRefreshEnabled: f,
            isDarkTheme: m,
            isHovered: C,
          }),
          I = i.useCallback(() => x(!0), []),
          j = i.useCallback(() => x(!1), []);
        return (0, a.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, a.jsx)(p.Z, {
              selectedTab: r,
              onClose: i,
              tabs: t,
              onTabSelect: n,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, n) => {
            let { isShown: t } = n;
            return (0, a.jsx)(c.TabBar.Item, {
              ...e,
              id: "more",
              look: "brand",
              selectedItem: f && v ? "more" : void 0,
              className: l()(g.tab, { [g.selected]: !f && v }),
              "aria-label": _.intl.string(_.t.UKOtz8),
              children: (0, a.jsxs)("div", {
                className: g.more,
                onMouseEnter: I,
                onMouseLeave: j,
                children: [
                  (0, a.jsx)(c.Text, {
                    variant: f ? "text-sm/semibold" : "text-md/medium",
                    color: h,
                    children: _.intl.string(_.t.UKOtz8),
                  }),
                  t
                    ? (0, a.jsx)(c.ChevronSmallUpIcon, { size: "xs", color: b })
                    : (0, a.jsx)(c.ChevronSmallDownIcon, {
                        size: "xs",
                        color: b,
                      }),
                ],
              }),
            });
          },
        });
      }
      function v(e) {
        let {
            className: n,
            selectedTab: t,
            tabs: r,
            onTabSelect: s,
            onAvailableWidthChange: d,
          } = e,
          [p, _] = i.useState(0),
          v = i.useRef(p),
          {
            lastVisibleIndex: C,
            onItemLayout: x,
            overflowItemsRef: h,
            itemWidthsRef: b,
          } = (0, o.zP)({
            items: r,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: p,
          }),
          I = i.useMemo(() => r.slice(0, C + 1), [C, r]),
          j = i.useMemo(() => r.slice(C + 1), [C, r]),
          S = i.useRef(null),
          E = i.useCallback(() => {
            var e;
            let n =
              null === (e = S.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            if (null == n || v.current === n.width) return;
            _(n.width), (v.current = n.width);
            let t = b.current.reduce((e, n, t) => e + n + (0 === t ? 0 : 20)),
              a = n.width - t;
            null == d || d(a);
          }, [b, d]);
        i.useEffect(() => {
          let e = (0, m.pP)(E);
          return (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body);
        }, [E]);
        let N = 0 !== p,
          y = (0, u.Q3)("GlobalDiscoveryHeaderTabs");
        return (0, a.jsxs)("div", {
          className: l()(g.container, n),
          ref: S,
          children: [
            (0, a.jsxs)("div", {
              className: g.measurements,
              children: [
                r.map((e, n) =>
                  (0, a.jsx)(
                    o.AJ,
                    {
                      index: n,
                      onItemLayout: x,
                      children: (0, a.jsx)(c.TabBar.Item, {
                        id: e.id,
                        "aria-label": e.label,
                        className: g.tab,
                        children: (0, a.jsx)(c.Text, {
                          variant: "text-md/medium",
                          children: e.label,
                        }),
                      }),
                    },
                    e.id,
                  ),
                ),
                (0, a.jsx)("div", {
                  ref: h,
                  children: (0, a.jsx)(f, {
                    tabs: j,
                    onTabSelect: s,
                    selectedTab: t,
                  }),
                }),
              ],
            }),
            N &&
              (0, a.jsxs)(c.TabBar, {
                type: "top",
                look: "brand",
                selectedItem: t,
                onItemSelect: s,
                className: g.tabs,
                children: [
                  I.map((e) =>
                    (0, a.jsx)(
                      c.TabBar.Item,
                      {
                        id: e.id,
                        look: "brand",
                        "aria-label": e.label,
                        className: l()(g.tab, {
                          [g.selected]: !y && t === e.id,
                        }),
                        children: e.label,
                      },
                      e.id,
                    ),
                  ),
                  0 !== j.length
                    ? (0, a.jsx)(f, { tabs: j, onTabSelect: s, selectedTab: t })
                    : null,
                ],
              }),
          ],
        });
      }
    },
    79707: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(481060),
        r = t(388032);
      function l(e) {
        let { tabs: n, selectedTab: t, onTabSelect: l, onClose: o } = e;
        return (0, a.jsx)(i.Menu, {
          navId: "global-discovery-tabs-overflow-menu",
          "aria-label": r.intl.string(r.t.riPnr6),
          hideScroller: !0,
          onClose: o,
          onSelect: o,
          children: (0, a.jsx)(
            i.MenuGroup,
            {
              children: n.map((e) => {
                let { id: n, label: r } = e;
                return (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: n,
                    label: r,
                    icon: n === t ? i.CircleCheckIcon : void 0,
                    action: () => l(n),
                  },
                  n,
                );
              }),
            },
            "overflow-tabs",
          ),
        });
      }
    },
    283293: function (e, n, t) {
      var a = t(200651),
        i = t(192379),
        r = t(481060),
        l = t(789560);
      n.Z = i.forwardRef(function (e, n) {
        let { onScroll: t, children: i } = e;
        return (0, a.jsx)(r.AdvancedScroller, {
          onScroll: t,
          className: l.scroller,
          ref: n,
          children: i,
        });
      });
    },
    680180: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(481060),
        s = t(49898),
        c = t(149025);
      function d(e) {
        let {
            state: n,
            query: t,
            placeholder: r,
            onTextChange: d,
            onCollapsedClick: u,
            onClear: m,
            onBlur: p,
            onSubmit: _,
          } = e,
          g = i.useRef(null),
          f = i.useCallback(
            (e) => {
              "Enter" === e.key && _();
            },
            [_],
          ),
          v = i.useCallback(() => {
            u(),
              setTimeout(() => {
                var e;
                return null === (e = g.current) || void 0 === e
                  ? void 0
                  : e.focus();
              });
          }, [u]);
        return n === s.GlobalDiscoverySearchBarState.COLLAPSED
          ? (0, a.jsx)(o.Clickable, {
              className: c.searchIcon,
              onClick: v,
              children: (0, a.jsx)(o.MagnifyingGlassIcon, {
                size: "md",
                color: o.tokens.colors.INTERACTIVE_NORMAL,
              }),
            })
          : (0, a.jsx)(o.SearchBar, {
              ref: g,
              className: l()(c.searchBar, {
                [c.searchFloating]:
                  n === s.GlobalDiscoverySearchBarState.FLOATING,
              }),
              size: o.SearchBar.Sizes.MEDIUM,
              query: t,
              placeholder: r,
              onChange: d,
              onClear: m,
              onKeyDown: f,
              onBlur: p,
            });
      }
    },
    89182: function (e, n, t) {
      t.d(n, {
        PA: function () {
          return i;
        },
        ZP: function () {
          return _;
        },
        iG: function () {
          return p;
        },
      });
      var a,
        i,
        r = t(200651),
        l = t(192379),
        o = t(120356),
        s = t.n(o),
        c = t(481060),
        d = t(706454),
        u = t(600419);
      function m(e) {
        let { items: n, onClose: t, onSelect: a, selected: i, ...l } = e;
        return (0, r.jsx)(c.Menu, {
          className: u.menu,
          navId: "global-discovery-search-filter-options",
          "aria-label": l["aria-label"],
          hideScroller: !0,
          onClose: t,
          onSelect: t,
          children: (0, r.jsx)(
            c.MenuGroup,
            {
              children: n.map((e) => {
                let { id: n, label: t } = e;
                return (0, r.jsx)(
                  c.MenuItem,
                  {
                    id: n,
                    label: t,
                    icon: n === i ? c.CircleCheckIcon : void 0,
                    action: () => a(n),
                  },
                  n,
                );
              }),
            },
            "overflow-tabs",
          ),
        });
      }
      function p(e) {
        let { count: n, name: t } = e,
          a = n.toLocaleString(d.default.locale);
        return (0, r.jsxs)("div", {
          className: u.categoryLabel,
          children: [
            (0, r.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "header-primary",
              children: t,
            }),
            (0, r.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: a,
            }),
          ],
        });
      }
      ((a = i || (i = {})).FILLED = "FILLED"), (a.TRANSPARENT = "TRANSPARENT");
      function _(e) {
        let {
            items: n,
            title: t,
            onSelect: a,
            selected: i,
            variant: o = "TRANSPARENT",
            ...d
          } = e,
          p = l.useMemo(
            () =>
              (function (e) {
                switch (e) {
                  case "FILLED":
                    return u.filterBackground;
                  case "TRANSPARENT":
                    return;
                }
              })(o),
            [o],
          );
        return (0, r.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(m, {
              selected: i,
              onClose: t,
              items: n,
              onSelect: a,
              "aria-label": d["aria-label"],
            });
          },
          position: "bottom",
          align: "left",
          children: (e, n) => {
            let { isShown: a } = n;
            return (0, r.jsxs)("div", {
              ...e,
              className: s()(u.filter, p),
              children: [
                (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  children: t,
                }),
                a
                  ? (0, r.jsx)(c.ChevronSmallUpIcon, {
                      size: "xs",
                      color: c.tokens.colors.INTERACTIVE_NORMAL,
                    })
                  : (0, r.jsx)(c.ChevronSmallDownIcon, {
                      size: "xs",
                      color: c.tokens.colors.INTERACTIVE_NORMAL,
                    }),
              ],
            });
          },
        });
      }
    },
    66637: function (e, n, t) {
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(481060),
        s = t(704839);
      n.Z = i.memo(function (e) {
        let {
          onClick: n,
          onContextMenu: t,
          className: i,
          disabled: r,
          children: c,
        } = e;
        return (0, a.jsx)(o.Clickable, {
          className: l()(s.card, i, {
            [s.clickable]: null != n,
            [s.disabled]: r,
          }),
          onContextMenu: t,
          onClick: r ? void 0 : n,
          children: c,
        });
      });
    },
    31569: function (e, n, t) {
      var a = t(972959);
      let i = Object.freeze({
          query: "",
          searchBarState: t(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        r = (0, a.H)(() => i);
      n.Z = r;
    },
    493646: function (e, n, t) {
      t.d(n, {
        K: function () {
          return l;
        },
        v: function () {
          return r;
        },
      });
      var a = t(979007),
        i = t(388032);
      function r(e) {
        switch (e.id) {
          case 4:
            return i.intl.string(i.t["3m9EgY"]);
          case 6:
            return i.intl.string(i.t.VJRr3d);
          case 8:
            return i.intl.string(i.t.Uv7mFR);
          case 9:
            return i.intl.string(i.t.TEK9Aw);
          case 10:
            return i.intl.string(i.t.lfBt2d);
        }
        return "";
      }
      function l() {
        return {
          id: a.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
          name: i.intl.string(i.t.ijDDw8),
        };
      }
    },
    319443: function (e, n, t) {
      t.r(n), t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(392711),
        s = t(442837),
        c = t(481060),
        d = t(674588),
        u = t(264043),
        m = t(894653),
        p = t(34674),
        _ = t(132871),
        g = t(979233),
        f = t(88693),
        v = t(611928),
        C = t(922122),
        x = t(680180),
        h = t(726115),
        b = t(703656),
        I = t(314897),
        j = t(594174),
        S = t(626135),
        E = t(31569),
        N = t(881294),
        y = t(975907),
        A = t(119014),
        T = t(258971),
        P = t(133743),
        R = t(726941),
        Z = t(666697),
        L = t(548514),
        O = t(370648),
        D = t(569527),
        k = t(979007),
        M = t(981631),
        B = t(388032),
        G = t(544973);
      function w(e) {
        let {
            applicationId: n,
            hideDetailHeaderButtons: t,
            onClickBack: r,
          } = e,
          o = (0, s.e7)([u.Z], () => u.Z.getApplication(n)),
          [d, m] = i.useState(t),
          p = i.useCallback(() => {
            m(t);
          }, [t]);
        return (0, a.jsxs)("div", {
          className: G.detailHeaderContainer,
          children: [
            (0, a.jsx)("div", {
              className: G.detailHeaderSection,
              children: (0, a.jsx)(v.Cm, {
                icon: c.ArrowLargeLeftIcon,
                onClick: r,
              }),
            }),
            (0, a.jsx)(c.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              className: G.detailHeader,
              lineClamp: 1,
              children: null == o ? void 0 : o.name,
            }),
            (0, a.jsx)("div", {
              className: l()(
                G.detailHeaderSection,
                G.detailHeaderButtonsContainer,
                { [G.visible]: !t, [G.hide]: t && !d, [G.hidden]: t && d },
              ),
              onTransitionEnd: p,
              children:
                null != o
                  ? (0, a.jsx)(L.Z, { application: o, size: "sm" })
                  : null,
            }),
          ],
        });
      }
      function H() {
        let e = i.useCallback(() => {
            (0, N.qF)();
          }, []),
          n = i.useCallback(() => {
            (0, N.rf)();
          }, []);
        return (0, a.jsxs)(c.Notice, {
          color: c.NoticeColors.BRAND,
          className: G.nagbar,
          children: [
            (0, a.jsx)(c.ClydeIcon, {
              size: "custom",
              color: "white",
              className: G.logo,
            }),
            (0, a.jsx)(c.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: B.intl.string(B.t.Ol3MIi),
            }),
            (0, a.jsxs)("div", {
              className: G.nagbarActionContainer,
              children: [
                (0, a.jsx)(c.PrimaryCTANoticeButton, {
                  onClick: e,
                  noticeType: M.kVF.LOGIN,
                  children: B.intl.string(B.t["825cFx"]),
                }),
                (0, a.jsx)(c.PrimaryCTANoticeButton, {
                  onClick: n,
                  noticeType: M.kVF.REGISTER,
                  minor: !0,
                  children: B.intl.string(B.t.HAkXzs),
                }),
              ],
            }),
          ],
        });
      }
      n.default = function () {
        var e;
        let n = (0, s.e7)([I.default], () => !I.default.isAuthenticated()),
          {
            onScroll: t,
            scrollPosition: r,
            resetScrollPosition: u,
          } = (0, g.M)(),
          L = (0, T.Xh)(),
          F = (0, N.nu)(),
          z =
            (null == L ? void 0 : L.type) === T.m_.CATEGORY
              ? L.categoryId
              : void 0,
          { applicationId: U, section: Y } =
            (null == L ? void 0 : L.type) === T.m_.APPLICATION ? L : {},
          { query: V, categoryId: K } =
            (null == L ? void 0 : L.type) === T.m_.SEARCH ? L : {},
          X = (0, s.e7)([m.Z], () => m.Z.getCategories()),
          W = i.useMemo(() => [(0, p.KQ)(), ...X], [X]),
          q = i.useMemo(() => W.find((e) => e.id === Number(K)), [W, K]),
          {
            tabs: Q,
            selectedTab: J,
            onSelectTab: $,
          } = (0, A.i)(null == z ? void 0 : z.toString()),
          [ee, en] = i.useState(!0),
          et = T.z8.useField("trackedOpenedFromExternalEntrypoint"),
          ea = T.z8.useField("sessionId"),
          ei = (0, s.e7)([j.default], () => j.default.getCurrentUser());
        i.useEffect(() => {
          if (!et && null == ea) {
            let e = (0, h.PM)();
            S.default.track(M.rMx.APP_DIRECTORY_OPENED, {
              source: _.ApplicationDirectoryEntrypointNames.EXTERNAL,
              session_id: e,
              user_id: null == ei ? void 0 : ei.id,
            }),
              T.z8.setState({
                trackedOpenedFromExternalEntrypoint: !0,
                sessionId: e,
                entrypoint: {
                  name: _.ApplicationDirectoryEntrypointNames.EXTERNAL,
                },
                guildId: null,
              });
          }
        }, [ea, et, null == ei ? void 0 : ei.id]),
          i.useEffect(() => {
            d.CP();
          }, []),
          i.useEffect(() => {
            F && d.g5();
          }, [F]),
          i.useEffect(() => T.aQ.setState({ lastItem: L }), [L]);
        let er = null != U,
          el = (null == L ? void 0 : L.type) === T.m_.SEARCH,
          {
            searchQuery: eo,
            onSearchTextChange: es,
            onClearSearch: ec,
            onSearchSubmit: ed,
          } = (0, y.M)({ initialQuery: null != V ? V : "" }),
          eu = E.Z.useField("searchBarState"),
          {
            onTabsAvailableWidthChange: em,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: e_,
          } = (0, f.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === eo.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => E.Z.setState({ searchBarState: e }),
          }),
          eg = i.useCallback(
            (e) => {
              $(e), el && ec(), u();
            },
            [el, ec, $, u],
          ),
          ef = i.useCallback((e) => (0, P.ph)({ applicationId: e }), []),
          ev = er || el,
          eC = i.useCallback(() => {
            null != (0, T.Uc)() ? (0, b.op)() : (0, P.Yp)();
          }, []),
          ex = (0, o.debounce)((e) => {
            let {
              scrollTop: n,
              offsetHeight: t,
              scrollHeight: a,
              location: i,
            } = e;
            n > 0 &&
              (0, N.zZ)(M.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                scroll_visible_percentile: (n + t) / a,
                current_page: i,
              });
          }, 200),
          eh = i.useCallback(
            (e, n) => {
              t(e),
                ex({
                  scrollTop: e.currentTarget.scrollTop,
                  offsetHeight: e.currentTarget.offsetHeight,
                  scrollHeight: e.currentTarget.scrollHeight,
                  location: n,
                });
            },
            [ex, t],
          );
        return (0, a.jsxs)("div", {
          className: l()(G.outerContainer, { [G.loggedOutContainer]: n }),
          children: [
            n ? (0, a.jsx)(H, {}) : null,
            (0, a.jsxs)("div", {
              className: G.innerContainer,
              children: [
                (0, a.jsxs)(v.ZP, {
                  variant: ev ? v._6.RELATIVE : v._6.OVERLAY,
                  children: [
                    !ev && (0, a.jsx)(v.z6, { scrollPosition: r }),
                    er
                      ? (0, a.jsx)(w, {
                          applicationId: U,
                          hideDetailHeaderButtons: ee,
                          onClickBack: eC,
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            el
                              ? (0, a.jsx)(v.Cm, {
                                  icon: c.ArrowLargeLeftIcon,
                                  onClick: eC,
                                })
                              : (0, a.jsx)(v.aV, { icon: c.AppsIcon }),
                            el
                              ? (0, a.jsx)(c.Heading, {
                                  variant: "heading-lg/semibold",
                                  color: "header-primary",
                                  className: G.searchHeader,
                                  children:
                                    null != V && "" !== V
                                      ? B.intl.formatToPlainString(B.t.zHdzqa, {
                                          query: V,
                                        })
                                      : B.intl.formatToPlainString(B.t.Qhj5Bg, {
                                          categoryName:
                                            null !==
                                              (e =
                                                null == q ? void 0 : q.name) &&
                                            void 0 !== e
                                              ? e
                                              : B.intl.string(B.t.E407b2),
                                        }),
                                })
                              : (0, a.jsx)(C.Z, {
                                  tabs: Q,
                                  selectedTab: J,
                                  onTabSelect: eg,
                                  onAvailableWidthChange: em,
                                }),
                            (0, a.jsx)(x.Z, {
                              query: eo,
                              placeholder: B.intl.string(B.t.HPQXEB),
                              onTextChange: es,
                              onClear: ec,
                              onSubmit: ed,
                              onCollapsedClick: ep,
                              state: eu,
                              onBlur: e_,
                            }),
                          ],
                        }),
                  ],
                }),
                er
                  ? (0, a.jsx)(Z.Z, {
                      onScroll: (e) => eh(e, T.m_.APPLICATION),
                      onSelectApplication: ef,
                      applicationId: U,
                      initialTab: Y,
                      onButtonsVisibilityChange: en,
                    })
                  : el
                    ? (0, a.jsx)(D.Z, {
                        onSelectApplication: ef,
                        onScroll: (e) => eh(e, T.m_.SEARCH),
                      })
                    : J ===
                        k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                      ? (0, a.jsx)(O.Z, {
                          onScroll: (e) => eh(e, T.m_.HOME),
                          onSelectApplication: ef,
                        })
                      : (0, a.jsx)(R.Z, {
                          tabId: Number(J),
                          onScroll: (e) => eh(e, T.m_.CATEGORY),
                          onSelectApplication: ef,
                        }),
              ],
            }),
          ],
        });
      };
    },
    881294: function (e, n, t) {
      t.d(n, {
        nu: function () {
          return m;
        },
        qF: function () {
          return _;
        },
        rf: function () {
          return p;
        },
        zZ: function () {
          return u;
        },
      }),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var a = t(860911),
        i = t(442837),
        r = t(703656),
        l = t(314897),
        o = t(594174),
        s = t(626135),
        c = t(258971),
        d = t(981631);
      function u(e, n) {
        var t;
        let a = c.z8.getField("sessionId"),
          i = c.z8.getField("guildId"),
          r =
            null === (t = c.z8.getField("entrypoint")) || void 0 === t
              ? void 0
              : t.name,
          l = o.default.getCurrentUser();
        return s.default.track(e, {
          ...n,
          guild_id: i,
          directory_session_id: a,
          source: r,
          user_id: null == l ? void 0 : l.id,
        });
      }
      function m() {
        return (0, i.e7)([l.default], () => l.default.isAuthenticated());
      }
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let t in e) {
          let a = e[t];
          n.searchParams.set(t, a);
        }
        let t = n.pathname + n.search,
          i = (0, a.Ui)(t, !1);
        (0, r.uL)(i);
      }
      function _() {
        let e = new URL(location.href),
          n = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
        (0, r.uL)(d.Z5c.REGISTER + n);
      }
    },
    956965: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(442837),
        s = t(607070),
        c = t(361213),
        d = t(778569),
        u = t(783097),
        m = t(70097),
        p = t(768581),
        _ = t(829409),
        g = t(226944);
      let f = 16 / 9,
        v = 325 / 72;
      function C(e) {
        let {
            application: n,
            isHovered: t,
            botBannerUrl: r,
            botBannerUrlAnimated: o,
            iconURL: s,
          } = e,
          p = (0, d.Z)({
            applicationId: n.id,
            size: 600,
            names: ["embedded_cover"],
          }),
          _ = i.useMemo(() => {
            let e = (0, u.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id
              ? (0, c.Z)(n.id, e.activity_preview_video_asset_id)
              : null;
          }, [n]),
          { imageUrl: f, imageUrlAnimated: v } = i.useMemo(
            () =>
              "fetched" === p.state && null != p.url
                ? { imageUrl: p.url }
                : { imageUrl: r, imageUrlAnimated: o },
            [p.state, p.url, r, o],
          ),
          C = null != f,
          I = null != _;
        return "loading" === p.state
          ? null
          : I
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  C
                    ? (0, a.jsx)(x, {
                        isHovered: t,
                        url: f,
                        animatedUrl: void 0,
                      })
                    : (0, a.jsx)(m.Z, {
                        src: _,
                        className: l()(g.bannerImage, g.bannerContent),
                        muted: !0,
                      }),
                  (0, a.jsx)(h, { isHovered: t, url: _, isVideo: !0 }),
                ],
              })
            : C
              ? (0, a.jsx)(x, { isHovered: t, url: f, animatedUrl: v })
              : (0, a.jsx)(b, { iconURL: s });
      }
      function x(e) {
        let { isHovered: n, url: t, animatedUrl: r } = e,
          [o, s] = i.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("img", {
              src: t,
              alt: "",
              className: l()(g.bannerImage, g.bannerContent, { [g.loaded]: o }),
              onLoad: () => s(!0),
            }),
            null != r
              ? (0, a.jsx)(h, { isHovered: n, url: r, isVideo: !1 })
              : null,
          ],
        });
      }
      function h(e) {
        let { isHovered: n, url: t, isVideo: r } = e,
          [o, s] = i.useState(!1),
          [c, d] = i.useState(n);
        return (i.useEffect(() => {
          n && d(!0);
        }, [n]),
        c)
          ? (0, a.jsx)("div", {
              className: l()(g.bannerAnimatedContainer, {
                [g.videoFadeOut]: !n,
                [g.videoFadeIn]: n && o,
              }),
              onAnimationEnd: () => (n ? null : d(!1)),
              children: r
                ? (0, a.jsx)(m.Z, {
                    src: t,
                    loop: !0,
                    autoPlay: !0,
                    muted: !0,
                    className: g.bannerContent,
                    onLoadedData: () => s(!0),
                  })
                : (0, a.jsx)("img", {
                    src: t,
                    alt: "",
                    className: g.bannerContent,
                    onLoad: () => s(!0),
                  }),
            })
          : null;
      }
      function b(e) {
        let { iconURL: n } = e,
          { backgroundGradient: t, hasFetchedColors: i } = (0, _.u)(n);
        return (0, a.jsx)("div", {
          className: l()(g.bannerContent, g.bannerGradient, { [g.loaded]: i }),
          style: { backgroundImage: t },
        });
      }
      n.Z = function (e) {
        let { application: n, bannerType: t, iconURL: r } = e,
          l = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
          [c, d] = i.useState(!1),
          m = i.useCallback(() => {
            d(!0);
          }, []),
          _ = i.useCallback(() => d(!1), []),
          h = (0, u.ye)(n),
          I = n.bot,
          { botBannerUrl: j, botBannerUrlAnimated: S } = i.useMemo(
            () =>
              (null == I ? void 0 : I.id) == null ||
              (null == I ? void 0 : I.banner) == null
                ? {}
                : {
                    botBannerUrl: (0, p.aN)({
                      id: I.id,
                      banner: I.banner,
                      canAnimate: !1,
                      size: 600,
                    }),
                    botBannerUrlAnimated: l
                      ? void 0
                      : (0, p.aN)({
                          id: I.id,
                          banner: I.banner,
                          canAnimate: !0,
                          size: 600,
                        }),
                  },
            [null == I ? void 0 : I.id, null == I ? void 0 : I.banner, l],
          );
        return (0, a.jsx)("div", {
          className: g.bannerContainer,
          style: { aspectRatio: "card" === t ? f : v },
          onMouseEnter: m,
          onFocus: m,
          onMouseLeave: _,
          onBlur: _,
          children:
            "card" === t && h
              ? (0, a.jsx)(C, {
                  application: n,
                  isHovered: c,
                  botBannerUrl: null == j ? void 0 : j,
                  botBannerUrlAnimated: null == S ? void 0 : S,
                })
              : null != j
                ? (0, a.jsx)(x, { isHovered: c, url: j, animatedUrl: S })
                : (0, a.jsx)(b, { iconURL: r }),
        });
      };
    },
    797908: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(622535),
        l = t(481060),
        o = t(783097),
        s = t(66637),
        c = t(768581),
        d = t(956965),
        u = t(388032),
        m = t(833643);
      let p = 28;
      n.Z = function (e) {
        var n, t, _;
        let {
            application: g,
            onSelectApplication: f,
            showCategory: v = !1,
          } = e,
          C = null === (n = g.categories) || void 0 === n ? void 0 : n[0],
          [x, h] = i.useState(!1),
          b = i.useCallback((e) => {
            e && h(!0);
          }, []),
          I = (0, o.lf)(g),
          j = i.useCallback(() => {
            f(g.id);
          }, [f, g.id]),
          S = i.useMemo(
            () =>
              x
                ? c.ZP.getApplicationIconURL({
                    id: g.id,
                    icon: g.icon,
                    size: 48,
                  })
                : void 0,
            [x, g],
          ),
          E = v && null != C;
        return (0, a.jsx)(r.$, {
          onChange: b,
          active: !x,
          children: (0, a.jsx)("div", {
            className: m.container,
            children: (0, a.jsxs)(s.Z, {
              className: m.card,
              onClick: j,
              onContextMenu: () => {},
              children: [
                (0, a.jsxs)("div", {
                  className: m.header,
                  children: [
                    (0, a.jsx)("div", {
                      style: {
                        width: "100%",
                        display: "block",
                        aspectRatio: 16 / 9,
                      },
                      children: x
                        ? (0, a.jsx)(d.Z, {
                            application: g,
                            bannerType: "card",
                            iconURL: S,
                          })
                        : null,
                    }),
                    (0, a.jsx)("div", {
                      className: m.avatarContainer,
                      style: { height: p },
                      children: x
                        ? (0, a.jsx)("img", {
                            src: S,
                            alt: "",
                            className: m.avatar,
                            height: 48,
                            width: 48,
                            style: { borderWidth: 4, marginLeft: 12 },
                          })
                        : null,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: m.appDetails,
                  children: [
                    (0, a.jsx)("div", {
                      className: m.titleContainer,
                      children: (0, a.jsx)("div", {
                        className: m.title,
                        children: (0, a.jsx)(l.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          className: m.appName,
                          children: g.name,
                        }),
                      }),
                    }),
                    E || I
                      ? (0, a.jsxs)("div", {
                          className: m.infoContainer,
                          children: [
                            E
                              ? (0, a.jsx)(l.Text, {
                                  className: m.appCategory,
                                  variant: "text-xs/medium",
                                  color: "text-normal",
                                  children: C.name,
                                })
                              : null,
                            E && I
                              ? (0, a.jsx)(l.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: "•",
                                })
                              : null,
                            I
                              ? (0, a.jsx)(l.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-secondary",
                                  children: u.intl.string(u.t["/eVltr"]),
                                })
                              : null,
                          ],
                        })
                      : null,
                    (0, a.jsx)(l.Text, {
                      className: m.description,
                      variant: "text-sm/medium",
                      color: "header-secondary",
                      lineClamp: E || I ? 2 : 3,
                      children:
                        null !==
                          (_ =
                            null === (t = g.directory_entry) || void 0 === t
                              ? void 0
                              : t.short_description) && void 0 !== _
                          ? _
                          : g.description,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    292191: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(481060),
        s = t(388032),
        c = t(928261),
        d = t(902294);
      function u(e) {
        let {
          heading: n = s.intl.string(s.t.NGw8v7),
          body: t = s.intl.string(s.t["1XZRY2"]),
          className: r,
        } = e;
        return (0, a.jsxs)("div", {
          className: l()(c.container, r),
          children: [
            (0, a.jsx)("div", {
              className: c.imageContainer,
              children: (0, a.jsx)("img", {
                className: c.image,
                src: d,
                alt: s.intl.string(s.t["/UJaIy"]),
              }),
            }),
            (0, a.jsxs)(i.Fragment, {
              children: [
                (0, a.jsx)(o.Heading, {
                  variant: "heading-xl/semibold",
                  className: c.header,
                  children: n,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: t,
                }),
              ],
            }),
          ],
        });
      }
    },
    975907: function (e, n, t) {
      t.d(n, {
        M: function () {
          return d;
        },
      });
      var a = t(192379),
        i = t(31569),
        r = t(493646),
        l = t(881294),
        o = t(258971),
        s = t(133743),
        c = t(981631);
      function d(e) {
        let { initialQuery: n = "" } = e,
          t = i.Z.useField("query");
        a.useEffect(() => i.Z.setState({ query: n }), [n]);
        let d = a.useCallback((e) => {
            i.Z.setState({ query: e });
          }, []),
          u = a.useCallback(() => {
            i.Z.setState({ query: "" });
          }, []),
          m = a.useCallback(() => {
            let e = (0, r.K)();
            (0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
              search_term: t,
              category: e.name,
              current_page: o.m_.HOME,
              category_id: e.id,
            }),
              (0, s.pR)({ query: t });
          }, [t]);
        return {
          searchQuery: t,
          onSearchTextChange: d,
          onClearSearch: u,
          onSearchSubmit: m,
        };
      }
    },
    119014: function (e, n, t) {
      t.d(n, {
        i: function () {
          return u;
        },
      }),
        t(47120);
      var a = t(192379),
        i = t(442837),
        r = t(894653),
        l = t(493646),
        o = t(881294),
        s = t(258971),
        c = t(133743),
        d = t(981631);
      function u(e) {
        let n = (0, i.e7)([r.Z], () => r.Z.getCategories()),
          t = (0, l.K)(),
          u = a.useMemo(
            () => [
              { id: t.id.toString(), label: t.name },
              ...n.map((e) => ({ id: e.id.toString(), label: e.name })),
            ],
            [n, t],
          ),
          m = (0, s.Xh)(),
          p = a.useCallback(
            (e) => {
              let n = u.find((n) => n.id === e);
              null != n &&
                ((0, o.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                  category: n.label,
                  category_id: Number(n.id),
                  current_page: null == m ? void 0 : m.type,
                }),
                (0, c.O4)({ categoryId: e }));
            },
            [null == m ? void 0 : m.type, u],
          ),
          _ = null != e && u.some((n) => n.id === e) ? e : u[0].id;
        return { tabs: u, selectedTab: _, onSelectTab: p };
      }
    },
    829409: function (e, n, t) {
      t.d(n, {
        u: function () {
          return i;
        },
      }),
        t(47120);
      var a = t(220082);
      function i(e) {
        let [n, t, i] = (0, a.Cf)(e, "transparent"),
          r = (0, a.Dq)(e);
        return {
          backgroundGradient: "linear-gradient(45deg, "
            .concat(n, ", ")
            .concat(null != i ? i : t, ")"),
          hasFetchedColors: r,
        };
      }
    },
    133743: function (e, n, t) {
      t.d(n, {
        Gp: function () {
          return u;
        },
        O4: function () {
          return s;
        },
        Yp: function () {
          return o;
        },
        pR: function () {
          return d;
        },
        ph: function () {
          return c;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var a = t(34674),
        i = t(703656),
        r = t(258971),
        l = t(981631);
      let o = () => {
          let e = { previousView: (0, r.Xh)() };
          (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS, { state: e });
        },
        s = (e) => {
          let { categoryId: n } = e,
            t = { previousView: (0, r.Xh)() };
          (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(n), { state: t });
        },
        c = (e) => {
          let { applicationId: n } = e,
            t = { previousView: (0, r.Xh)() };
          (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(n), { state: t });
        },
        d = function () {
          let {
              query: e,
              categoryId: n,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = { previousView: (0, r.Xh)() },
            s = new URLSearchParams();
          null != e && "" !== e && s.set("q", e),
            null != n && n !== a.MU && s.set("category_id", n.toString()),
            null != t && t > 1 && s.set("page", t.toString()),
            (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
              state: o,
              search: s.toString(),
            });
        },
        u = (e) => {
          let {
            location: { state: n },
          } = (0, i.s1)();
          (0, i.dL)(e, n);
        };
    },
    726941: function (e, n, t) {
      var a = t(200651),
        i = t(192379),
        r = t(442837),
        l = t(894653),
        o = t(322665),
        s = t(17845),
        c = t(374939),
        d = t(283293),
        u = t(493646),
        m = t(292191),
        p = t(683544),
        _ = t(863375);
      n.Z = function (e) {
        var n;
        let { tabId: t, onSelectApplication: g, onScroll: f } = e,
          v = i.useRef(null),
          C = i.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.scrollTo({ to: 0 });
          }, []),
          x = (0, r.e7)([l.Z], () => l.Z.getCategories()),
          h = i.useMemo(() => x.find((e) => e.id === t), [x, t]),
          b = i.useMemo(() => (null != h ? (0, u.v)(h) : ""), [h]);
        return (0, a.jsxs)(d.Z, {
          onScroll: f,
          ref: v,
          children: [
            (0, a.jsx)(s.Z, {
              title:
                null !== (n = null == h ? void 0 : h.name) && void 0 !== n
                  ? n
                  : "",
              description: b,
              children: (0, a.jsx)(o.Z, {}),
            }),
            (0, a.jsx)(c.Z, {
              children:
                null == h
                  ? (0, a.jsx)("div", {
                      className: _.errorContainer,
                      children: (0, a.jsx)(m.Z, { className: _.error }),
                    })
                  : (0, a.jsx)(p.Z, {
                      categoryId: h.id,
                      onSelectApplication: g,
                      resetScroll: C,
                    }),
            }),
          ],
        });
      };
    },
    683544: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(209173),
        l = t(399606),
        o = t(481060),
        s = t(699682),
        c = t(674588),
        d = t(368862),
        u = t(809547),
        m = t(125909),
        p = t(881294),
        _ = t(797908),
        g = t(292191),
        f = t(258971),
        v = t(979007),
        C = t(981631),
        x = t(76413);
      let h = { results: [], totalPages: 0, loadId: "" };
      n.Z = function (e) {
        var n;
        let { categoryId: t, onSelectApplication: b, resetScroll: I } = e,
          [j, S] = i.useState(1),
          E = i.useCallback((e) => {
            S(e);
          }, []);
        i.useEffect(() => {
          S(1);
        }, [t]);
        let N = i.useMemo(
            () => ({
              query: v.EMPTY_QUERY,
              page: j,
              pageSize: v.PAGE_SIZE,
              categoryId: t,
            }),
            [j, t],
          ),
          y = (0, l.e7)([u.Z], () =>
            u.Z.getFetchState({
              query: v.EMPTY_QUERY,
              page: j,
              pageSize: v.PAGE_SIZE,
              categoryId: t,
            }),
          ),
          A = (0, l.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(N)) && void 0 !== e
              ? e
              : h;
          }),
          T = null !== (n = (0, s.Z)(A)) && void 0 !== n ? n : h,
          {
            results: P,
            totalPages: R,
            loadId: Z,
          } = i.useMemo(() => (y === d.M.FETCHING ? T : A), [y, T, A]),
          L = i.useMemo(
            () =>
              null == P
                ? void 0
                : P.filter((e) => !(e.type !== r.s.APPLICATION)),
            [P],
          ),
          O = i.useCallback((e) => {
            let {
              page: n,
              activeCategoryId: t,
              onSuccessCallback: a,
              guildId: i,
              fetchCounts: r,
            } = e;
            r && c.yC({ query: v.EMPTY_QUERY, guildId: i }),
              c.yC({
                query: v.EMPTY_QUERY,
                guildId: i,
                options: { page: n, pageSize: v.PAGE_SIZE, categoryId: t },
                onSuccessCallback: a,
              });
          }, []);
        i.useEffect(() => {
          I(), O({ page: j, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, I, O, j]);
        let D = i.useCallback(
          (e, n) => {
            (0, p.zZ)(C.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
              current_page: f.m_.SEARCH,
              application_id: e,
              load_id: Z,
              position: n,
            }),
              b(e);
          },
          [Z, b],
        );
        return y === d.M.ERROR
          ? (0, a.jsx)("div", {
              className: x.errorContainer,
              children: (0, a.jsx)(g.Z, { className: x.error }),
            })
          : (0, a.jsxs)(m.Z, {
              loading: y === d.M.FETCHING,
              children: [
                (0, a.jsx)("div", {
                  className: x.content,
                  children:
                    null == L
                      ? void 0
                      : L.map((e, n) => {
                          if (e.type === r.s.APPLICATION) {
                            let t = e.data;
                            return (0, a.jsx)(
                              _.Z,
                              {
                                application: t,
                                onSelectApplication: (e) => D(e, n),
                              },
                              t.id,
                            );
                          }
                          return null;
                        }),
                }),
                (0, a.jsx)(o.Paginator, {
                  className: x.paginationInput,
                  totalCount: Math.min(
                    R * v.PAGE_SIZE,
                    v.MAX_PAGES * v.PAGE_SIZE,
                  ),
                  pageSize: v.PAGE_SIZE,
                  disablePaginationGap: !0,
                  hideMaxPage: !0,
                  currentPage: j,
                  onPageChange: E,
                }),
              ],
            });
      };
    },
    666697: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(442837),
        l = t(674588),
        o = t(264043),
        s = t(303383),
        c = t(125909),
        d = t(283836),
        u = t(374939),
        m = t(233374),
        p = t(283293),
        _ = t(881294),
        g = t(292191),
        f = t(258971),
        v = t(133743),
        C = t(680474),
        x = t(571737),
        h = t(796150),
        b = t(946542),
        I = t(213746),
        j = t(979007),
        S = t(981631),
        E = t(388032),
        N = t(890030);
      n.Z = function (e) {
        let {
            applicationId: n,
            onSelectApplication: t,
            onScroll: y,
            initialTab: A,
            onButtonsVisibilityChange: T,
          } = e,
          P = i.useRef(null),
          R = (0, r.e7)([o.Z], () => o.Z.getApplication(n)),
          Z = (0, r.e7)([o.Z], () => o.Z.getApplicationFetchState(n));
        i.useEffect(() => {
          null != n && null == R && l.i6(n);
        }, [n, R]),
          i.useEffect(() => {
            l.T4({ applicationId: n });
          }, [n]),
          i.useEffect(() => () => T(!0), [T]);
        let L = null == R ? void 0 : R.storefront_available,
          [O, D] = i.useState(
            null != A ? A : j.GlobalDiscoveryAppsSections.ABOUT,
          ),
          k = i.useCallback(
            (e) => {
              var n;
              null === (n = P.current) || void 0 === n || n.scrollTo({ to: 0 }),
                D(j.GlobalDiscoveryAppsSections.ABOUT),
                t(e);
            },
            [t],
          );
        i.useEffect(() => {
          (null == R ? void 0 : R.storefront_available) &&
            null != n &&
            (0, d.Z)(n);
        }, [null == R ? void 0 : R.storefront_available, n]);
        let M = (0, f.Uc)(),
          B = (0, r.e7)([s.Z], () =>
            s.Z.getFetchState({ applicationId: null == R ? void 0 : R.id }),
          ),
          G = (0, r.e7)([s.Z], () =>
            s.Z.getSimilarApplications({
              applicationId: null == R ? void 0 : R.id,
            }),
          ),
          w = i.useMemo(
            () => (null == G ? void 0 : G.applications.slice(0, 3)),
            [G],
          ),
          H = { displayedSimilarApplications: w, previousView: M },
          F = i.useRef(H);
        i.useEffect(() => {
          F.current = H;
        }),
          i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: n } =
              F.current;
            (null == R ? void 0 : R.id) != null &&
              B !== s.M.FETCHING &&
              (0, _.zZ)(S.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: f.m_.APPLICATION,
                previous_page: null == n ? void 0 : n.type,
                application_id: R.id,
                referrer: document.referrer,
                suggested_application_ids:
                  null == e ? void 0 : e.map((e) => e.id),
              });
          }, [null == R ? void 0 : R.id, B]);
        let z = i.useMemo(
            () => [
              {
                id: j.GlobalDiscoveryAppsSections.ABOUT,
                label: E.intl.string(E.t.DkyHMD),
              },
              {
                id: j.GlobalDiscoveryAppsSections.STORE,
                label: E.intl.string(E.t.jgEXGB),
              },
            ],
            [],
          ),
          U = i.useMemo(() => {
            if (null == R) return null;
            switch (O) {
              case j.GlobalDiscoveryAppsSections.ABOUT:
                return (0, a.jsx)(C.Z, { application: R });
              case j.GlobalDiscoveryAppsSections.STORE:
                return (0, a.jsx)(I.Z, { application: R });
            }
          }, [O, R]),
          Y = i.useCallback(
            (e) => {
              (0, _.zZ)(S.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                application_id: n,
                tab_name: e,
              }),
                D(e),
                e === j.GlobalDiscoveryAppsSections.ABOUT
                  ? (0, v.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(n))
                  : (0, v.Gp)(
                      S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(n, e),
                    );
            },
            [n],
          ),
          V = O === j.GlobalDiscoveryAppsSections.ABOUT;
        return (0, a.jsx)(p.Z, {
          onScroll: y,
          ref: P,
          children: (0, a.jsx)(u.Z, {
            children:
              null == R
                ? null == Z || Z === o.M.FETCHING
                  ? (0, a.jsx)("div", {
                      className: N.centerContainer,
                      children: (0, a.jsx)(c.Z, { loading: !0 }),
                    })
                  : (0, a.jsx)("div", {
                      className: N.centerContainer,
                      children: (0, a.jsx)(g.Z, { className: N.error }),
                    })
                : (0, a.jsxs)("div", {
                    className: N.detailContainer,
                    children: [
                      (0, a.jsx)(x.Z, {
                        application: R,
                        onButtonsVisibilityChange: T,
                      }),
                      (0, a.jsxs)("div", {
                        className: N.contentContainer,
                        children: [
                          (0, a.jsxs)("div", {
                            className: N.contentTabsContainer,
                            children: [
                              L &&
                                (0, a.jsx)("div", {
                                  className: N.contentTabs,
                                  children: (0, a.jsx)(m.Z, {
                                    tabs: z,
                                    onTabSelect: Y,
                                    selectedTab: O,
                                  }),
                                }),
                              U,
                              (0, a.jsx)(b.Z, {
                                applicationId: n,
                                fetchState: B,
                                similarApplications: w,
                                onSelectApplication: k,
                                similarLoadId: null == G ? void 0 : G.loadId,
                              }),
                            ],
                          }),
                          V &&
                            (0, a.jsx)(h.Z, {
                              className: N.sidebar,
                              application: R,
                              view: "side",
                            }),
                        ],
                      }),
                    ],
                  }),
          }),
        });
      };
    },
    680474: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(793030),
        l = t(34674),
        o = t(823379),
        s = t(448021),
        c = t(405411),
        d = t(215453),
        u = t(796150),
        m = t(24746),
        p = t(669401),
        _ = t(388032),
        g = t(609396);
      function f(e) {
        let { application: n } = e,
          t = i.useMemo(() => {
            var e, t, a;
            return null !==
              (a = (
                null !==
                  (t =
                    null === (e = n.directory_entry) || void 0 === e
                      ? void 0
                      : e.carousel_items) && void 0 !== t
                  ? t
                  : []
              )
                .map(l.RF)
                .filter(o.lm)) && void 0 !== a
              ? a
              : [];
          }, [n]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: g.aboutContainer,
              children: [
                (0, a.jsx)(s.Z, { application: n, carouselItems: t }),
                (0, a.jsx)(m.Z, { application: n }),
                (0, a.jsx)(c.Z, { application: n }),
                (0, a.jsx)(p.Z, { application: n }),
                (0, a.jsx)(d.Z, { application: n }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: g.informationContainer,
              children: [
                (0, a.jsx)("div", { className: g.divider }),
                (0, a.jsx)(r.X6, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: _.intl.string(_.t["mD+J/v"]),
                }),
                (0, a.jsx)(u.Z, { application: n, view: "embedded" }),
              ],
            }),
          ],
        });
      }
    },
    548514: function (e, n, t) {
      t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(873546),
        s = t(442837),
        c = t(481060),
        d = t(782568),
        u = t(326135),
        m = t(299206),
        p = t(703656),
        _ = t(706454),
        g = t(626135),
        f = t(572004),
        v = t(135431),
        C = t(881294),
        x = t(258971),
        h = t(981631),
        b = t(388032),
        I = t(914045);
      let j = "start_application_install";
      function S(e) {
        let { renderDropdown: n, size: t } = e;
        return (0, a.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return n(t);
          },
          position: "left",
          align: "top",
          animation: c.Popout.Animation.NONE,
          children: (e) =>
            (0, a.jsx)(c.Button, {
              look: c.Button.Looks.FILLED,
              size: c.Button.Sizes.ICON,
              color: c.Button.Colors.PRIMARY,
              className: l()(I.iconButton, { [I.small]: "sm" === t }),
              innerClassName: I.innerIconButton,
              "aria-label": b.intl.string(b.t.UKOtz8),
              ...e,
              children: (0, a.jsx)(c.MoreHorizontalIcon, {
                size: "xs",
                color: "currentColor",
              }),
            }),
        });
      }
      function E(e) {
        let { application: n, variant: t, size: r } = e,
          { onClickInstallApplication: s, canInstall: d } = (function (e) {
            let n = (0, C.nu)(),
              t = i.useCallback(() => {
                var n;
                let t =
                  null !== (n = x.z8.getField("guildId")) && void 0 !== n
                    ? n
                    : void 0;
                (0, v.LO)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: t,
                  source: "product_page",
                });
              }, [e]);
            i.useEffect(() => {
              let e = new URL(location.href);
              if (n && "true" === e.searchParams.get(j)) {
                e.searchParams.delete(j);
                let n = e.pathname + e.search;
                (0, p.dL)(n), t();
              }
            }, [n, t]);
            let a = i.useCallback(() => {
              if (
                ((0, C.zZ)(h.rMx.APP_DIRECTORY_INSTALL_CLICKED, {
                  application_id: e.id,
                }),
                (o.tq || o.Em) && null == e.custom_install_url)
              ) {
                let n = (0, v.Er)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                });
                if (null != n) {
                  window.open(n, "_blank");
                  return;
                }
              }
              if (n) t();
              else {
                let n = x.z8.getField("guildId");
                g.default.track(h.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                  application_id: e.id,
                  guild_id: n,
                  auth_type:
                    null != e.custom_install_url ? "custom_url" : "in_app",
                  source: "product_page",
                  device_platform: o.tq ? "mobile_web" : "desktop_web",
                }),
                  (0, C.rf)({ [j]: "true" });
              }
            }, [e, t, n]);
            return {
              onClickInstallApplication: a,
              canInstall: i.useMemo(
                () =>
                  (0, v.Eb)({
                    customInstallUrl: e.custom_install_url,
                    installParams: e.install_params,
                    integrationTypesConfig: e.integration_types_config,
                  }),
                [e],
              ),
            };
          })(n);
        return "icon" === t
          ? (0, a.jsx)(c.Button, {
              look: c.Button.Looks.FILLED,
              size: c.Button.Sizes.ICON,
              color: c.Button.Colors.BRAND,
              className: l()(I.iconButton, { [I.small]: "sm" === r }),
              onClick: s,
              "aria-label": b.intl.string(b.t.NgXl3N),
              disabled: !d,
              children: (0, a.jsx)(c.PlusLargeIcon, {
                size: "xs",
                color: "currentColor",
              }),
            })
          : (0, a.jsx)(c.Button, {
              size: "sm" === r ? c.Button.Sizes.SMALL : c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: s,
              disabled: !d,
              children:
                "normal" === t
                  ? b.intl.string(b.t.NgXl3N)
                  : b.intl.string(b.t.qRZ35u),
            });
      }
      n.Z = function (e) {
        let { application: n, size: t } = e,
          r = (e) =>
            ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
          o = i.useCallback(() => {
            (0, C.zZ)(h.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
              application_id: n.id,
            }),
              (0, f.JG)(r(n.id)),
              (0, c.showToast)(
                (0, c.createToast)(
                  b.intl.string(b.t["L/PwZW"]),
                  c.ToastType.SUCCESS,
                ),
              );
          }, [n.id]),
          p = (0, s.e7)([_.default], () => _.default.locale),
          g = i.useCallback(() => {
            (0, d.Z)((0, u.G)({ id: n.id, name: n.name, locale: p }));
          }, [p, n]),
          v = (0, m.Z)({
            id: n.id,
            label: b.intl.string(b.t["FfCL+/"]),
            onSuccess: () =>
              (0, c.showToast)(
                (0, c.createToast)(
                  b.intl.string(b.t.eNjAam),
                  c.ToastType.SUCCESS,
                ),
              ),
          }),
          x = i.useCallback(
            (e, n) =>
              (0, a.jsxs)(c.Menu, {
                navId: "application-directory-profile",
                "aria-label": b.intl.string(b.t["/7I4/P"]),
                onClose: n,
                onSelect: void 0,
                children: [
                  e
                    ? (0, a.jsx)(c.MenuGroup, {
                        children: (0, a.jsx)(c.MenuItem, {
                          id: "copy",
                          label: b.intl.string(b.t.z4sP5O),
                          action: o,
                          icon: c.LinkIcon,
                        }),
                      })
                    : null,
                  (0, a.jsx)(c.MenuGroup, {
                    children: (0, a.jsx)(c.MenuItem, {
                      id: "report",
                      label: b.intl.string(b.t.NgA5vr),
                      color: "danger",
                      action: g,
                    }),
                  }),
                  null != v ? (0, a.jsx)(c.MenuGroup, { children: v }) : null,
                ],
              }),
            [v, g, o],
          );
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              className: l()(I.actionContainer, I.wide),
              children: [
                (0, a.jsx)(E, { application: n, variant: "normal", size: t }),
                f.wS
                  ? (0, a.jsx)(c.Button, {
                      look: c.Button.Looks.FILLED,
                      size: c.Button.Sizes.ICON,
                      color: c.Button.Colors.PRIMARY,
                      className: l()(I.iconButton, { [I.small]: "sm" === t }),
                      innerClassName: I.innerIconButton,
                      "aria-label": b.intl.string(b.t.z4sP5O),
                      onClick: o,
                      children: (0, a.jsx)(c.LinkIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                    })
                  : null,
                (0, a.jsx)(S, { renderDropdown: (e) => x(!1, e), size: t }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: l()(I.actionContainer, I.small),
              children: [
                (0, a.jsx)(E, { application: n, variant: "small", size: t }),
                (0, a.jsx)(S, { renderDropdown: (e) => x(f.wS, e), size: t }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: l()(I.actionContainer, I.tiny),
              children: [
                (0, a.jsx)(E, { application: n, variant: "icon", size: t }),
                (0, a.jsx)(S, { renderDropdown: (e) => x(f.wS, e), size: t }),
              ],
            }),
          ],
        });
      };
    },
    448021: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(793030),
        l = t(442837),
        o = t(445986),
        s = t(9807),
        c = t(341176),
        d = t(312097),
        u = t(451478),
        m = t(981631),
        p = t(388032),
        _ = t(520432),
        g = t(902294);
      function f(e) {
        let { application: n, carouselItems: t } = e,
          f = (0, l.e7)([u.Z], () => u.Z.isFocused()),
          v = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("img", {
                className: _.errorImage,
                src: g,
                "aria-hidden": !0,
                alt: "",
              }),
              (0, a.jsx)(r.X6, {
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t.UvDfMz),
              }),
            ],
          });
        t.forEach((e, a) => {
          e.alt = p.intl.formatToPlainString(p.t.sSEhHR, {
            index: a + 1,
            totalImages: t.length,
            name: n.name,
          });
        });
        let C = i.useCallback(
          (e, n) => {
            if (e.type === m.s9s.IMG) {
              let n = t.filter((e) => e.type === m.s9s.IMG),
                a = n.findIndex((n) => n === e);
              if (a < 0) return;
              let i = n.map((e) => ({
                url: (0, o.Q)(e.src),
                original: e.src,
                width: e.width,
                height: e.height,
                type: "IMAGE",
              }));
              (0, d.K)({
                items: i,
                startingIndex: a,
                fit: c.D.CONTAIN,
                shouldHideMediaOptions: !0,
                shouldAnimateCarousel: !0,
                location: "GlobalDiscoveryAppsDetailCarousel",
              });
            }
          },
          [t],
        );
        return 0 === t.length
          ? null
          : (0, a.jsx)(s.Z, {
              className: _.carousel,
              themedPagination: !0,
              items: t,
              autoplayInterval: 8e3,
              paused: !f,
              videoAutoPlay: !0,
              onCurrentItemClick: C,
              errorComponent: v,
            });
      }
    },
    424472: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(481060),
        l = t(881294),
        o = t(258971),
        s = t(133743),
        c = t(981631),
        d = t(388032),
        u = t(190778);
      function m(e) {
        let { application: n, className: t } = e,
          m = i.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
              category: e.name,
              category_id: e.id,
              current_page: o.m_.APPLICATION,
            }),
              (0, s.pR)({ categoryId: e.id });
          }, []);
        return null == n.categories || 0 === n.categories.length
          ? null
          : (0, a.jsxs)("div", {
              className: t,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  children: d.intl.string(d.t.s7ialZ),
                }),
                (0, a.jsx)("div", {
                  className: u.categories,
                  children: n.categories.map((e) =>
                    (0, a.jsx)(
                      r.Clickable,
                      {
                        className: u.category,
                        onClick: () => m(e),
                        children: (0, a.jsx)(r.Text, {
                          variant: "text-sm/semibold",
                          color: "redesign-button-tertiary-text",
                          children: e.name,
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            });
      }
    },
    405411: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(200651),
        i = t(192379),
        r = t(481060),
        l = t(581364),
        o = t(665692),
        s = t(388032),
        c = t(765853);
      function d(e) {
        let { application: n } = e,
          t = i.useMemo(() => {
            var e;
            let t =
              null === (e = n.directory_entry) || void 0 === e
                ? void 0
                : e.popular_application_commands;
            return null != t
              ? t.map((e) =>
                  (0, l.Z8)({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                  }),
                )
              : [];
          }, [n]);
        return 0 === t.length
          ? null
          : (0, a.jsxs)("div", {
              className: c.sectionContainer,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: s.intl.string(s.t.swIgTE),
                }),
                (0, a.jsx)("div", {
                  className: c.contentContainer,
                  children: t.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: c.commandContainer,
                        children: [
                          (0, a.jsxs)(r.Text, {
                            className: c.commandName,
                            variant: "code",
                            color: "header-primary",
                            children: [o.GI, e.displayName],
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            children: e.displayDescription,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            });
      }
    },
    215453: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(789020);
      var a = t(200651),
        i = t(192379),
        r = t(481060),
        l = t(860719),
        o = t(63063),
        s = t(49012),
        c = t(981631),
        d = t(388032),
        u = t(349778);
      let m = o.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
      function p(e) {
        let { application: n } = e,
          {
            hasMessageContent: t,
            hasGuildPresences: o,
            hasGuildMembers: c,
            hasIntents: p,
          } = (0, l.w)({ flags: null == n ? void 0 : n.flags }),
          g = i.useCallback(() => {
            null != n.privacy_policy_url &&
              (0, s.q)({ href: n.privacy_policy_url });
          }, [n.privacy_policy_url]);
        return (0, a.jsxs)("div", {
          className: u.sectionContainer,
          children: [
            (0, a.jsx)(r.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: d.intl.string(d.t.QzDgMj),
            }),
            (0, a.jsxs)("div", {
              className: u.contentContainer,
              children: [
                p &&
                  (0, a.jsxs)("ul", {
                    className: u.intentsList,
                    children: [
                      (0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-secondary",
                        children: d.intl.string(d.t.U6KH5e),
                      }),
                      t &&
                        (0, a.jsx)(_, {
                          icon: r.ChatIcon,
                          heading: d.intl.string(d.t.gJpBOz),
                          body: d.intl.string(d.t["L+QVbm"]),
                        }),
                      o &&
                        (0, a.jsx)(_, {
                          icon: r.UserCircleStatusIcon,
                          heading: d.intl.string(d.t.jo0oj4),
                          body: d.intl.string(d.t.Dm0jq6),
                        }),
                      c &&
                        (0, a.jsx)(_, {
                          icon: r.GroupIcon,
                          heading: d.intl.string(d.t.QZql7O),
                          body: d.intl.string(d.t["ez/N/f"]),
                        }),
                    ],
                  }),
                (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: d.intl.format(d.t.b6nqk5, { helpCenterUrl: m }),
                }),
                null != n.privacy_policy_url &&
                  (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    className: u.privacyPolicy,
                    children: d.intl.format(d.t.agYVY2, { onClick: g }),
                  }),
              ],
            }),
          ],
        });
      }
      function _(e) {
        let { icon: n, heading: t, body: i } = e;
        return (0, a.jsxs)("li", {
          className: u.intentContainer,
          children: [
            (0, a.jsx)(n, { color: "currentColor", size: "md" }),
            (0, a.jsxs)("div", {
              className: u.intentTextContainer,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  color: "header-secondary",
                  children: t,
                }),
                (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: i,
                }),
              ],
            }),
          ],
        });
      }
    },
    571737: function (e, n, t) {
      t(653041);
      var a = t(200651),
        i = t(192379),
        r = t(622535),
        l = t(481060),
        o = t(783097),
        s = t(768581),
        c = t(956965),
        d = t(548514),
        u = t(388032),
        m = t(137762);
      let p = 52;
      n.Z = function (e) {
        let { application: n, onButtonsVisibilityChange: t } = e,
          _ = i.useMemo(
            () =>
              s.ZP.getApplicationIconURL({ id: n.id, icon: n.icon, size: 96 }),
            [n],
          ),
          g = i.useMemo(() => {
            let e = [];
            return (
              (0, o.vJ)(n) && e.push(u.intl.string(u.t.LO4f0N)),
              (0, o.Cb)(n) &&
                (0 !== e.length && e.push("•"),
                e.push(u.intl.string(u.t["8z5B2d"]))),
              (0, o.Hu)(n) &&
                (0 !== e.length && e.push("•"),
                e.push(u.intl.string(u.t["5khEk5"]))),
              e
            );
          }, [n]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Z, {
              application: n,
              bannerType: "detail",
              iconURL: _,
            }),
            (0, a.jsx)("div", {
              className: m.avatarContainer,
              style: { height: p },
              children: (0, a.jsx)("img", {
                src: _,
                alt: "",
                className: m.avatar,
                height: 96,
                width: 96,
                style: { borderWidth: 4, marginLeft: 28 },
              }),
            }),
            (0, a.jsxs)("div", {
              className: m.infoContainer,
              children: [
                (0, a.jsxs)("div", {
                  className: m.metadataContainer,
                  children: [
                    (0, a.jsx)(l.Heading, {
                      variant: "heading-xxl/bold",
                      color: "header-primary",
                      lineClamp: 1,
                      children: n.name,
                    }),
                    (0, a.jsx)("div", {
                      className: m.disclosuresContainer,
                      children: g.map((e, n) =>
                        (0, a.jsx)(
                          l.Text,
                          {
                            className: m.disclosuresText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: e,
                          },
                          n,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(r.$, {
                  onChange: t,
                  active: !0,
                  children: (0, a.jsx)(d.Z, { application: n, size: "md" }),
                }),
              ],
            }),
          ],
        });
      };
    },
    796150: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        l = t(793030),
        o = t(924489),
        s = t(824606),
        c = t(424472),
        d = t(682807),
        u = t(691703),
        m = t(953989),
        p = t(388032),
        _ = t(75655);
      function g(e) {
        let { className: n, view: t, application: i } = e,
          g = "embedded" === t,
          f = (0, s.Z)({ application: i });
        return (0, a.jsxs)("div", {
          className: r()(n, { [_.sideContainer]: !g, [_.gridContainer]: g }),
          children: [
            (0, a.jsxs)("div", {
              className: r()(_.sectionContainer, { [_.reducedGap]: g }),
              children: [
                (0, a.jsxs)("div", {
                  className: _.infoSection,
                  children: [
                    (0, a.jsx)(l.X6, {
                      variant: "heading-sm/semibold",
                      color: "header-primary",
                      children: p.intl.string(p.t["3NxHCw"]),
                    }),
                    (0, a.jsx)(o.Z, {
                      application: i,
                      mutualGuilds: f,
                      mutualGuildShownMax: 3,
                      className: _.guildCountContainer,
                      guildIconSize: o.x.SMALL,
                      guildsClassName: _.guildsIconContainer,
                      compact: !0,
                    }),
                  ],
                }),
                (0, a.jsx)(c.Z, { application: i, className: _.infoSection }),
                (0, a.jsx)(m.Z, { application: i, className: _.infoSection }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: r()(_.sectionContainer, { [_.reducedGap]: g }),
              children: [
                (0, a.jsx)(d.Z, {
                  application: i,
                  className: _.infoSection,
                  innerClassName: g ? _.linkGrid : void 0,
                }),
                (0, a.jsx)(u.Z, { application: i, className: _.infoSection }),
              ],
            }),
          ],
        });
      }
    },
    682807: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        l = t(780384),
        o = t(481060),
        s = t(794295),
        c = t(410030),
        d = t(726542),
        u = t(881294),
        m = t(388032),
        p = t(140577);
      function _(e) {
        var n, t;
        let { application: i, className: l, innerClassName: s } = e,
          c =
            null !==
              (t =
                null === (n = i.directory_entry) || void 0 === n
                  ? void 0
                  : n.external_urls) && void 0 !== t
              ? t
              : [];
        return null != i.terms_of_service_url ||
          null != i.privacy_policy_url ||
          c.length > 0
          ? (0, a.jsxs)("div", {
              className: r()(p.container, l),
              children: [
                (0, a.jsx)(o.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  children: m.intl.string(m.t.l6DP2t),
                }),
                (0, a.jsxs)("div", {
                  className: r()(p.list, s),
                  children: [
                    c.map((e, n) =>
                      (0, a.jsx)(g, { url: e.url, children: e.name }, n),
                    ),
                    null != i.terms_of_service_url
                      ? (0, a.jsx)(f, {
                          icon: o.FileIcon,
                          url: i.terms_of_service_url,
                          children: m.intl.string(m.t.s7STcX),
                        })
                      : null,
                    null != i.privacy_policy_url
                      ? (0, a.jsx)(f, {
                          icon: o.LockIcon,
                          url: i.privacy_policy_url,
                          children: m.intl.string(m.t.kH3JR0),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null;
      }
      function g(e) {
        var n, t;
        let { url: i, children: r } = e,
          s = (0, c.ZP)(),
          u = d.Z.getByUrl(i),
          m = (0, l.wj)(s)
            ? null == u
              ? void 0
              : null === (n = u.icon) || void 0 === n
                ? void 0
                : n.darkSVG
            : null == u
              ? void 0
              : null === (t = u.icon) || void 0 === t
                ? void 0
                : t.lightSVG;
        return (0, a.jsx)(f, {
          icon: void 0 === m ? o.LinkIcon : void 0,
          imageSrc: m,
          url: i,
          children: r,
        });
      }
      function f(e) {
        let { icon: n, imageSrc: t, iconColor: i, url: l, children: c } = e,
          d = (0, u.nu)(),
          m = null;
        null != n
          ? (m = (0, a.jsx)(n, {
              className: p.listIcon,
              color: null != i ? i : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
            }))
          : null != t &&
            (m = (0, a.jsx)("img", {
              className: p.listImage,
              src: t,
              alt: "",
            }));
        let _ = (0, a.jsxs)(a.Fragment, {
          children: [
            m,
            (0, a.jsx)(o.Text, {
              className: p.listText,
              variant: "text-sm/medium",
              selectable: !0,
              children: c,
            }),
          ],
        });
        return (0, a.jsx)(s.Z, {
          href: l,
          className: r()(p.listItem, p.linkItem),
          trusted: !d,
          useDefaultUnderlineStyles: !1,
          children: _,
        });
      }
    },
    24746: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(477660),
        s = t.n(o),
        c = t(481060),
        d = t(939893),
        u = t(241209),
        m = t(388032),
        p = t(285136);
      let _ = s().parserFor(d.Z),
        g = s().reactFor(s().ruleOutput(d.Z, "react"));
      function f(e) {
        let { description: n, supportsMarkdown: t } = e,
          [r, o] = i.useState(!1),
          s = i.useRef(null);
        i.useEffect(() => {
          if (null == s.current) return;
          let e = new ResizeObserver(() => {
            var e, n, t, a;
            let i =
              null !==
                (t =
                  null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.scrollHeight) && void 0 !== t
                ? t
                : 0;
            o(
              i -
                (null !==
                  (a =
                    null === (n = s.current) || void 0 === n
                      ? void 0
                      : n.clientHeight) && void 0 !== a
                  ? a
                  : 0) >
                1,
            );
          });
          return e.observe(s.current), () => e.disconnect();
        }, []);
        let [d, m] = i.useState(!1),
          f = i.useCallback(() => {
            m((e) => !e);
          }, []);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              ref: s,
              className: l()({
                [p.descriptionClamp]: !d,
                [p.descriptionClampSafari]: !d && "Safari" === platform.name,
              }),
              children: t
                ? (0, a.jsx)(u.Z, {
                    className: p.detailedDescription,
                    parser: _,
                    output: g,
                    state: { allowLinks: !0 },
                    children: n,
                  })
                : (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-normal",
                    children: n,
                  }),
            }),
            r || d ? (0, a.jsx)(v, { isShowingMore: d, onToggle: f }) : null,
          ],
        });
      }
      function v(e) {
        let { onToggle: n, isShowingMore: t } = e,
          r = i.useMemo(
            () =>
              (0, a.jsxs)("div", {
                className: p.showMoreContent,
                children: [
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "interactive-normal",
                    children: t
                      ? m.intl.string(m.t["vtfc4+"])
                      : m.intl.string(m.t.ZDRyur),
                  }),
                  t
                    ? (0, a.jsx)(c.ChevronSmallUpIcon, {
                        size: "md",
                        color: "currentColor",
                        className: p.showMoreButtonIcon,
                      })
                    : (0, a.jsx)(c.ChevronSmallDownIcon, {
                        size: "md",
                        color: "currentColor",
                        className: p.showMoreButtonIcon,
                      }),
                ],
              }),
            [t],
          );
        return (0, a.jsxs)(c.Clickable, {
          className: p.showMoreButton,
          onClick: n,
          children: [
            (0, a.jsx)("div", { className: p.divider }),
            r,
            (0, a.jsx)("div", { className: p.divider }),
          ],
        });
      }
      n.Z = function (e) {
        var n, t;
        let { application: r } = e,
          l =
            null === (n = r.directory_entry) || void 0 === n
              ? void 0
              : n.detailed_description,
          o =
            null === (t = r.directory_entry) || void 0 === t
              ? void 0
              : t.short_description,
          s = i.useMemo(
            () =>
              null != l && l.length > 0
                ? (0, a.jsx)(f, { description: l, supportsMarkdown: !0 })
                : null != o && o.length > 0
                  ? (0, a.jsx)(f, { description: o, supportsMarkdown: !1 })
                  : null,
            [l, o],
          );
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: p.overviewContainer,
              children: [
                (0, a.jsx)(c.Heading, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: m.intl.string(m.t.txraKS),
                }),
                s,
              ],
            });
      };
    },
    669401: function (e, n, t) {
      var a = t(200651),
        i = t(192379),
        r = t(149765),
        l = t(481060),
        o = t(995648),
        s = t(422559),
        c = t(388032),
        d = t(878744);
      n.Z = function (e) {
        var n;
        let { application: t } = e,
          u = i.useMemo(() => {
            var e;
            let n =
              null == t
                ? void 0
                : null === (e = t.install_params) || void 0 === e
                  ? void 0
                  : e.permissions;
            if (null != n) return s.VY.filter((e) => r.e$(r.vB(n), e));
          }, [
            null == t
              ? void 0
              : null === (n = t.install_params) || void 0 === n
                ? void 0
                : n.permissions,
          ]);
        return null != u && u.length > 0
          ? (0, a.jsxs)("div", {
              className: d.sectionContainer,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  children: c.intl.string(c.t.runNFx),
                }),
                (0, a.jsx)(o.Z, {
                  className: d.contentContainer,
                  grantedPermissions: u,
                  grantedPermissionsHeader: c.intl.string(c.t.SLgiND),
                }),
              ],
            })
          : null;
      };
    },
    946542: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(481060),
        l = t(434650),
        o = t(303383),
        s = t(924489),
        c = t(125909),
        d = t(824606),
        u = t(768581),
        m = t(881294),
        p = t(981631),
        _ = t(388032),
        g = t(69812);
      function f(e) {
        let {
            applicationId: n,
            similarApplications: t,
            onSelectApplication: r,
            similarLoadId: o,
          } = e,
          s = (function (e) {
            let { applicationId: n, similarAppIds: t } = e,
              [a, r] = i.useState(),
              o = (0, l.O)((e) => {
                e && r(n);
              });
            return (
              i.useEffect(() => {
                a === n &&
                  (0, m.zZ)(p.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                    application_id: n,
                    suggested_application_ids: t,
                  });
              }, [a, n, t]),
              o
            );
          })({
            applicationId: n,
            similarAppIds: i.useMemo(() => t.map((e) => e.id), [t]),
          });
        return (0, a.jsx)("div", {
          className: g.contentContainer,
          ref: s,
          children: t.map((e, t) =>
            (0, a.jsx)(
              v,
              {
                applicationId: n,
                similarApplication: e,
                onSelectApplication: r,
                similarLoadId: o,
                position: t,
              },
              e.id,
            ),
          ),
        });
      }
      function v(e) {
        var n, t, l;
        let {
            applicationId: o,
            similarApplication: c,
            onSelectApplication: _,
            position: f,
            similarLoadId: v,
          } = e,
          C = (0, d.Z)({ application: c }),
          x = null === (n = c.categories) || void 0 === n ? void 0 : n[0],
          h = i.useMemo(
            () =>
              u.ZP.getApplicationIconURL({ id: c.id, icon: c.icon, size: 48 }),
            [c],
          ),
          b = i.useCallback(() => {
            (0, m.zZ)(p.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
              current_page: "product",
              application_id: o,
              suggested_application_id: c.id,
              position: f,
              load_id: v,
              shown_mutual_guilds_count: C.length,
            }),
              _(c.id);
          }, [_, c.id, o, C.length, v, f]);
        return (0, a.jsxs)(r.Clickable, {
          onClick: b,
          className: g.appContainer,
          children: [
            (0, a.jsxs)("div", {
              className: g.appHeader,
              children: [
                (0, a.jsx)("img", {
                  src: h,
                  alt: "",
                  className: g.avatar,
                  height: 48,
                  width: 48,
                }),
                (0, a.jsxs)("div", {
                  className: g.titleContainer,
                  children: [
                    (0, a.jsx)("div", {
                      style: { flex: 1, minWidth: 0, overflow: "hidden" },
                      children: (0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        className: g.appName,
                        children: c.name,
                      }),
                    }),
                    null != x
                      ? (0, a.jsx)(r.Text, {
                          className: g.appCategory,
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: x.name,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, a.jsx)(r.Text, {
              className: g.appDescription,
              variant: "text-sm/medium",
              color: "header-secondary",
              lineClamp: 2,
              children:
                null !==
                  (l =
                    null === (t = c.directory_entry) || void 0 === t
                      ? void 0
                      : t.short_description) && void 0 !== l
                  ? l
                  : c.description,
            }),
            (0, a.jsx)(s.Z, {
              application: c,
              textVariant: "text-xs/medium",
              mutualGuilds: C,
              mutualGuildShownMax: 3,
              guildIconSize: s.x.SMALL,
              compact: !0,
            }),
          ],
        });
      }
      n.Z = function (e) {
        let {
          applicationId: n,
          fetchState: t,
          similarApplications: i,
          onSelectApplication: l,
          similarLoadId: s,
        } = e;
        return t !== o.M.FETCHING && (null == i || 0 === i.length)
          ? null
          : (0, a.jsxs)("div", {
              className: g.sectionContainer,
              children: [
                (0, a.jsx)("div", { className: g.divider }),
                (0, a.jsx)(r.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  className: g.sectionHeader,
                  children: _.intl.string(_.t.E8wCnp),
                }),
                (0, a.jsx)(c.Z, {
                  loading: t === o.M.FETCHING,
                  children:
                    null != i
                      ? (0, a.jsx)(f, {
                          applicationId: n,
                          similarApplications: i,
                          onSelectApplication: l,
                          similarLoadId: s,
                        })
                      : null,
                }),
              ],
            });
      };
    },
    213746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(789020);
      var a = t(200651),
        i = t(192379),
        r = t(793030),
        l = t(442837),
        o = t(481060),
        s = t(794295),
        c = t(765717),
        d = t(283836),
        u = t(507608),
        m = t(955335),
        p = t(171246),
        _ = t(55563),
        g = t(881294),
        f = t(133743),
        v = t(979007),
        C = t(981631),
        x = t(388032),
        h = t(272680);
      function b(e) {
        let { application: n } = e;
        return (0, a.jsxs)("div", {
          className: h.storeContainer,
          children: [
            (0, a.jsx)(I, { application: n }),
            (0, a.jsx)(S, { application: n }),
          ],
        });
      }
      function I(e) {
        let { application: n } = e,
          { subscriptions: t, otps: i } = (0, d.q)(n.id);
        return (0, a.jsxs)("div", {
          className: h.storeContainer,
          children: [
            t.length > 0 &&
              (0, a.jsxs)("div", {
                className: h.productSection,
                children: [
                  (0, a.jsx)(m.r, {
                    subscriptions: t,
                    color: "header-primary",
                  }),
                  (0, a.jsx)("div", {
                    className: h.products,
                    children: t.map((e) => {
                      let t = (0, p.KW)(e.skuFlags) ? "user" : "guild";
                      return (0, a.jsx)(
                        u.zz,
                        {
                          appId: n.id,
                          listing: e,
                          subscriptionType: t,
                          onDetails: () =>
                            (0, f.Gp)(
                              C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                n.id,
                                e.skuId,
                              ),
                            ),
                        },
                        e.id,
                      );
                    }),
                  }),
                ],
              }),
            i.length > 0 &&
              (0, a.jsxs)("div", {
                className: h.productSection,
                children: [
                  (0, a.jsx)(r.X6, {
                    variant: "heading-lg/semibold",
                    color: "header-primary",
                    children: x.intl.string(x.t.yUGTs7),
                  }),
                  (0, a.jsx)("div", {
                    className: h.products,
                    children: i.map((e) =>
                      (0, a.jsx)(
                        u.hd,
                        {
                          skuId: e.skuId,
                          appId: n.id,
                          onDetails: () =>
                            (0, f.Gp)(
                              C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                n.id,
                                e.skuId,
                              ),
                            ),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            (0, a.jsx)(c.Z, {
              path: C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
              exact: !0,
              render: (e) => (0, a.jsx)(j, { ...e }),
            }),
          ],
        });
      }
      function j(e) {
        let {
            match: {
              params: { applicationId: n, skuId: r },
            },
          } = e,
          s = (0, l.e7)([_.Z], () => _.Z.get(r), [r]),
          c = (0, l.e7)(
            [_.Z],
            () => (null != r ? _.Z.getParentSKU(r) : void 0),
            [r],
          ),
          d = i.useId(),
          u = i.useCallback(
            () =>
              (0, f.Gp)(
                C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  n,
                  v.GlobalDiscoveryAppsSections.STORE,
                ),
              ),
            [n],
          );
        return (
          i.useLayoutEffect(() => {
            var e, i, l, u, m, _, g;
            switch (null == s ? void 0 : s.type) {
              case C.epS.CONSUMABLE:
              case C.epS.DURABLE:
                return (
                  (e = d),
                  (i = n),
                  (l = r),
                  void (0, o.openModalLazy)(
                    async () => {
                      let { ItemDetailsModal: e } = await t
                        .e("46619")
                        .then(t.bind(t, 147496));
                      return (n) => (0, a.jsx)(e, { appId: i, skuId: l, ...n });
                    },
                    {
                      modalKey: e,
                      onCloseCallback: () => {
                        !E() &&
                          (0, f.Gp)(
                            C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                              i,
                              v.GlobalDiscoveryAppsSections.STORE,
                            ),
                          );
                      },
                    },
                  )
                );
              case C.epS.SUBSCRIPTION:
                if ((null == c ? void 0 : c.flags) == null) return;
                return (
                  (u = d),
                  (m = n),
                  (_ = r),
                  (g = (0, p.KW)(c.flags) ? "user" : "guild"),
                  void (0, o.openModalLazy)(
                    async () => {
                      let { SubscriptionDetailsModal: e } = await Promise.all([
                        t.e("86282"),
                        t.e("23642"),
                      ]).then(t.bind(t, 519896));
                      return (n) =>
                        (0, a.jsx)(e, {
                          appId: m,
                          subscriptionType: g,
                          skuId: _,
                          guildId: void 0,
                          ...n,
                        });
                    },
                    {
                      modalKey: u,
                      onCloseCallback: () => {
                        !E() &&
                          (0, f.Gp)(
                            C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                              m,
                              v.GlobalDiscoveryAppsSections.STORE,
                            ),
                          );
                      },
                    },
                  )
                );
            }
          }, [
            n,
            d,
            u,
            null == c ? void 0 : c.flags,
            null == s ? void 0 : s.flags,
            null == s ? void 0 : s.type,
            r,
          ]),
          i.useLayoutEffect(
            () => () => {
              (0, o.closeModal)(d);
            },
            [d],
          ),
          null
        );
      }
      function S(e) {
        let { application: n } = e,
          t = (0, g.nu)(),
          i = n.terms_of_service_url,
          l = n.privacy_policy_url;
        if (null == i && null == l) return null;
        let o = (e, n) =>
          (0, a.jsx)(s.Z, { href: n, trusted: !t, children: e });
        return (0, a.jsx)("div", {
          className: h.legalContainer,
          children: (0, a.jsx)(r.xv, {
            color: "header-primary",
            variant: "text-sm/normal",
            children:
              null != i && null != l
                ? x.intl.format(x.t.nylPOT, {
                    termsHook: (e) => o(e, i),
                    privacyHook: (e) => o(e, l),
                  })
                : null != i
                  ? x.intl.format(x.t["0cPyDw"], { termsHook: (e) => o(e, i) })
                  : null != l
                    ? x.intl.format(x.t.loYGCw, { privacyHook: (e) => o(e, l) })
                    : null,
          }),
        });
      }
      function E() {
        return window.location.pathname.startsWith("/login");
      }
    },
    691703: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(442837),
        l = t(481060),
        o = t(214912),
        s = t(703656),
        c = t(314897),
        d = t(900849),
        u = t(881294),
        m = t(981631),
        p = t(388032);
      let _ = "redirect_to_support_server";
      function g(e) {
        let { application: n, className: t } = e,
          { onGoToSupportServer: g } = (function (e) {
            let n = (0, u.nu)(),
              t = (0, r.e7)([c.default], () => c.default.getSessionId()),
              a = i.useCallback(async () => {
                try {
                  var n;
                  let t =
                    null == e
                      ? void 0
                      : null === (n = e.guild) || void 0 === n
                        ? void 0
                        : n.id;
                  if (null != t) {
                    (0, u.zZ)(m.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                      application_id: e.id,
                      support_guild_id: t,
                    });
                    let n = { page: m.ZY5.APPLICATION_DIRECTORY };
                    await (0, d.Ub)(t, n, { setsHistorySnapshot: !1 });
                  }
                } catch {}
              }, [e]);
            return (
              i.useEffect(() => {
                let i = new URL(location.href);
                if (
                  null != e &&
                  n &&
                  null != t &&
                  "true" === i.searchParams.get(_)
                ) {
                  i.searchParams.delete(_);
                  let e = i.pathname + i.search;
                  (0, s.dL)(e), a();
                }
              }, [n, a, t, e]),
              {
                onGoToSupportServer: i.useCallback(() => {
                  var t;
                  null !=
                    (null == e
                      ? void 0
                      : null === (t = e.guild) || void 0 === t
                        ? void 0
                        : t.id) && (n ? a() : (0, u.rf)({ [_]: "true" }));
                }, [e, a, n]),
              }
            );
          })(n);
        return null != n.guild && n.guild.features.includes(m.oNc.DISCOVERABLE)
          ? (0, a.jsxs)("div", {
              className: t,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-sm/semibold",
                  color: "header-primary",
                  children: p.intl.string(p.t.KJEO29),
                }),
                (0, a.jsx)(o.Z, { guild: n.guild, onClick: g }),
              ],
            })
          : null;
      }
    },
    953989: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(442837),
        s = t(481060),
        c = t(706454),
        d = t(388032),
        u = t(181169);
      let m = (0, d.getAvailableLocales)();
      function p(e) {
        let { application: n, className: t } = e,
          r = (0, o.e7)([c.default], () => c.default.locale),
          { supportedLanguages: p, usersLanguageIsFirst: _ } = i.useMemo(() => {
            var e;
            if (
              (null === (e = n.directory_entry) || void 0 === e
                ? void 0
                : e.supported_locales) != null
            ) {
              let e = new Set(n.directory_entry.supported_locales),
                t = e.has(r),
                a = m.filter((n) => e.has(n.value));
              return (
                t &&
                  a.sort((e, n) =>
                    e.value === r ? -1 : n.value === r ? 1 : 0,
                  ),
                {
                  supportedLanguages: a.map((e) =>
                    d.intl.string(e.localizedName),
                  ),
                  usersLanguageIsFirst: t,
                }
              );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
          }, [n.directory_entry, r]);
        return (0, a.jsxs)("div", {
          className: t,
          children: [
            (0, a.jsx)(s.Heading, {
              variant: "heading-sm/semibold",
              color: "header-primary",
              children: d.intl.string(d.t.Fbjlu7),
            }),
            (0, a.jsx)("ul", {
              className: u.outerContainer,
              children: p.map((e, n) =>
                (0, a.jsx)(
                  "li",
                  {
                    className: l()(u.innerContainer, u.languageItem),
                    children: (0, a.jsx)(s.Text, {
                      variant: 0 === n && _ ? "text-sm/bold" : "text-sm/normal",
                      children: e,
                    }),
                  },
                  e,
                ),
              ),
            }),
            " ",
          ],
        });
      }
    },
    370648: function (e, n, t) {
      var a = t(200651);
      t(192379);
      var i = t(105862),
        r = t(322665),
        l = t(17845),
        o = t(374939),
        s = t(283293),
        c = t(499692),
        d = t(388032),
        u = t(894183);
      n.Z = function (e) {
        let { onScroll: n, onSelectApplication: t } = e;
        return (0, a.jsxs)(s.Z, {
          onScroll: n,
          children: [
            (0, a.jsx)(l.Z, {
              title: d.intl.format(d.t["kEcZ9/"], {}),
              description: d.intl.string(d.t.XxFts7),
              children: (0, a.jsx)(r.Z, {}),
            }),
            (0, a.jsx)(o.Z, {
              children: (0, a.jsxs)("div", {
                className: u.contentContainer,
                children: [
                  (0, a.jsx)(c.Z, { onSelectApplication: t }),
                  (0, a.jsx)(i.Z, { showImage: !1, padding: !0 }),
                ],
              }),
            }),
          ],
        });
      };
    },
    499692: function (e, n, t) {
      t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(873199),
        s = t(442837),
        c = t(481060),
        d = t(434650),
        u = t(674588),
        m = t(368862),
        p = t(125909),
        _ = t(857192),
        g = t(881294),
        f = t(797908),
        v = t(292191),
        C = t(981631),
        x = t(318708);
      function h(e) {
        let { collection: n, index: t, onSelectApplication: r } = e,
          o = (function (e) {
            let { collectionId: n, index: t } = e,
              [a, r] = i.useState(!1),
              l = (0, d.O)((e) => {
                e && r(!0);
              });
            return (
              i.useEffect(() => {
                a &&
                  (0, g.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                    collection_id: n,
                    collection_position: t,
                  });
              }, [a, n, t]),
              l
            );
          })({ collectionId: n.id, index: t }),
          s = i.useCallback(
            (e, a) => {
              (0, g.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: n.id,
                item_position: a,
                collection_position: t,
                application_id: e,
              }),
                r(e);
            },
            [n.id, t, r],
          );
        return (0, a.jsxs)("div", {
          ref: o,
          children: [
            (0, a.jsx)(c.Heading, {
              className: l()(x.sectionTitle, {
                [x.titleExtraPadding]: 0 === t,
              }),
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: n.title,
            }),
            (0, a.jsx)("div", {
              className: x.content,
              children: n.application_directory_collection_items.map((e, n) => {
                let { id: t, application: i } = e;
                return null == i
                  ? null
                  : (0, a.jsx)(
                      f.Z,
                      {
                        application: i,
                        onSelectApplication: () => s(i.id, n),
                        showCategory: !0,
                      },
                      t,
                    );
              }),
            }),
          ],
        });
      }
      n.Z = function (e) {
        let { onSelectApplication: n } = e,
          t = (0, s.e7)(
            [_.default],
            () => _.default.appDirectoryIncludesInactiveCollections,
          ),
          r = (0, s.e7)([m.Z], () =>
            m.Z.getFetchState({ includesInactive: t }),
          ),
          l = (0, s.e7)([m.Z], () =>
            m.Z.getCollections({ includesInactive: t }),
          );
        i.useEffect(() => {
          u.bG({ includesInactive: t });
        }, [t]);
        let c = i.useMemo(
          () => (null == l ? void 0 : l.filter((e) => e.type !== o.o.GALLERY)),
          [l],
        );
        return r === m.M.ERROR
          ? (0, a.jsx)("div", {
              className: x.errorContainer,
              children: (0, a.jsx)(v.Z, { className: x.error }),
            })
          : (0, a.jsx)(p.Z, {
              loading: r === m.M.FETCHING,
              children:
                null == c
                  ? void 0
                  : c.map((e, t) =>
                      (0, a.jsx)(
                        h,
                        { collection: e, index: t, onSelectApplication: n },
                        t,
                      ),
                    ),
            });
      };
    },
    120549: function (e, n, t) {
      t.d(n, {
        V: function () {
          return v;
        },
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(442837),
        s = t(481060),
        c = t(894653),
        d = t(34674),
        u = t(89182),
        m = t(706454),
        p = t(388032),
        _ = t(968654);
      function g(e) {
        let { category: n, count: t, onSelectCategory: r, selected: o } = e,
          c = i.useCallback(() => {
            r(n.id);
          }, [n.id, r]),
          d = t.toLocaleString(m.default.locale);
        return (0, a.jsxs)(s.Clickable, {
          onClick: c,
          className: l()(_.category, { [_.selected]: o }),
          children: [
            (0, a.jsx)(s.Text, {
              className: _.name,
              variant: "text-sm/medium",
              color: "header-primary",
              children: n.name,
            }),
            (0, a.jsx)(s.Text, {
              className: _.count,
              variant: "text-sm/normal",
              color: "text-muted",
              children: d,
            }),
          ],
        });
      }
      function f(e) {
        let {
            countsByCategory: n,
            onSelectCategory: t,
            selectedCategoryId: r,
          } = e,
          l = (0, o.e7)([c.Z], () => c.Z.getCategories()),
          s = i.useMemo(
            () => [
              (0, d.KQ)(),
              ...l.filter((e) => {
                var t;
                return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0;
              }),
            ],
            [l, n],
          );
        return 0 === s.length
          ? null
          : (0, a.jsx)("div", {
              className: _.categories,
              children: s.map((e) => {
                var i;
                let l = e.id,
                  o = null !== (i = n[l]) && void 0 !== i ? i : 0;
                return (0, a.jsx)(
                  g,
                  {
                    category: e,
                    count: o,
                    selected: l === r,
                    onSelectCategory: () => t(e),
                  },
                  l,
                );
              }),
            });
      }
      function v(e) {
        var n;
        let {
            countsByCategory: t,
            onSelectCategory: r,
            selectedCategoryId: l,
          } = e,
          m = (0, o.e7)([c.Z], () => c.Z.getCategories()),
          g = i.useMemo(
            () => [
              (0, d.KQ)(),
              ...m.filter((e) => {
                var n;
                return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0;
              }),
            ],
            [m, t],
          ),
          f = i.useMemo(
            () =>
              g.map((e) => ({
                id: "".concat(e.id),
                label: (0, a.jsx)(u.iG, { count: t[e.id], name: e.name }),
              })),
            [g, t],
          ),
          v = i.useCallback(
            (e) => {
              let n = g.find((n) => n.id === Number(e));
              null != n && r(n);
            },
            [r, g],
          ),
          C = i.useMemo(() => g.find((e) => e.id === l), [l, g]);
        return 0 === f.length
          ? null
          : (0, a.jsxs)("div", {
              className: _.container,
              children: [
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  color: "text-secondary",
                  children: p.intl.string(p.t.f09BQE),
                }),
                (0, a.jsx)(u.ZP, {
                  items: f,
                  title:
                    null !== (n = null == C ? void 0 : C.name) && void 0 !== n
                      ? n
                      : "",
                  onSelect: v,
                  selected: "".concat(l),
                  "aria-label": p.intl.string(p.t.WHdCwc),
                  variant: u.PA.FILLED,
                }),
              ],
            });
      }
    },
    753511: function (e, n, t) {
      var a = t(200651),
        i = t(192379),
        r = t(442837),
        l = t(481060),
        o = t(894653),
        s = t(34674),
        c = t(388032),
        d = t(207876),
        u = t(882008);
      n.Z = function (e) {
        let { selectedCategoryId: n, searchAllCategories: t } = e,
          m = (0, r.e7)([o.Z], () => o.Z.getCategories()),
          p = i.useMemo(() => {
            var e;
            return null === (e = m.find((e) => e.id === n)) || void 0 === e
              ? void 0
              : e.name;
          }, [m, n]),
          _ =
            n === s.MU || null == p
              ? c.intl.string(c.t["FVJt+/"])
              : c.intl.formatToPlainString(c.t.FjCaND, { categoryName: p }),
          g =
            n === s.MU
              ? c.intl.string(c.t.GXiMtb)
              : c.intl.format(c.t.JaLoFB, { onClick: t });
        return (0, a.jsxs)("div", {
          className: d.container,
          children: [
            (0, a.jsx)("img", { alt: "", src: u, className: d.image }),
            (0, a.jsx)(l.Heading, {
              variant: "heading-xl/semibold",
              className: d.header,
              children: _,
            }),
            (0, a.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: g,
            }),
          ],
        });
      };
    },
    569527: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return P;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var a = t(200651),
        i = t(192379),
        r = t(512969),
        l = t(209173),
        o = t(288385),
        s = t(442837),
        c = t(481060),
        d = t(110924),
        u = t(674588),
        m = t(264043),
        p = t(894653),
        _ = t(809547),
        g = t(34674),
        f = t(125909),
        v = t(374939),
        C = t(283293),
        x = t(314897),
        h = t(493646),
        b = t(881294),
        I = t(797908),
        j = t(258971),
        S = t(133743),
        E = t(120549),
        N = t(753511),
        y = t(979007),
        A = t(981631),
        T = t(378105);
      function P(e) {
        var n;
        let { onSelectApplication: t, onScroll: P } = e,
          R = (0, s.e7)([x.default], () => x.default.isAuthenticated()),
          Z = i.useRef(null),
          L = (0, r.TH)(),
          O = i.useRef(null),
          {
            query: D,
            page: k,
            categoryId: M,
          } = i.useMemo(() => {
            var e, n;
            let t = new URLSearchParams(L.search),
              a = t.get("page"),
              i = null != a ? Number(a) : 1;
            return {
              query: null !== (e = t.get("q")) && void 0 !== e ? e : "",
              page: i,
              categoryId:
                null !== (n = Number(t.get("category_id"))) && void 0 !== n
                  ? n
                  : y.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
          }, [L.search]),
          B = (0, s.e7)([p.Z], () => p.Z.getCategories()),
          G = i.useMemo(
            () => (null == B ? void 0 : B.find((e) => e.id === M)),
            [B, M],
          ),
          w = i.useCallback(
            (e) => {
              (0, b.zZ)(A.rMx.APP_DIRECTORY_SEARCHED, {
                search_term: D,
                num_results: e,
                current_page: j.m_.SEARCH,
                result_page: k,
                category: null == G ? void 0 : G.name,
                category_id: null == G ? void 0 : G.id,
              });
            },
            [D, k, null == G ? void 0 : G.name, null == G ? void 0 : G.id],
          );
        i.useEffect(() => {
          var e;
          null === (e = Z.current) || void 0 === e || e.scrollTo({ to: 0 }),
            D !== O.current &&
              ((O.current = D),
              u.yC({ query: D, options: { source: o.F.APP_DIRECTORY } })),
            u.yC({
              query: D,
              options: {
                categoryId: M,
                page: k,
                pageSize: y.PAGE_SIZE,
                source: o.F.APP_DIRECTORY,
              },
              onSuccessCallback: w,
            });
        }, [M, k, D, w]);
        let { fetchState: H, searchResults: F } = (0, s.cj)([_.Z], () => ({
            fetchState: _.Z.getFetchState({
              query: D,
              categoryId: M,
              page: k,
              pageSize: y.PAGE_SIZE,
              source: o.F.APP_DIRECTORY,
            }),
            searchResults: _.Z.getSearchResults({
              query: D,
              categoryId: M,
              page: k,
              pageSize: y.PAGE_SIZE,
              source: o.F.APP_DIRECTORY,
            }),
          })),
          z = (0, s.cj)([_.Z], () => {
            let e = _.Z.getSearchResults({
              query: D,
              source: o.F.APP_DIRECTORY,
            });
            return null != e
              ? { [g.MU]: e.totalCount, ...e.countsByCategory }
              : {};
          }),
          U = (0, d.Z)(F),
          Y = i.useMemo(() => (H === m.M.FETCHING ? U : F), [H, U, F]),
          V = i.useCallback(
            (e) => {
              (0, S.pR)({ query: D, categoryId: M, page: e });
            },
            [M, D],
          ),
          K = i.useCallback(
            (e) => {
              (0, b.zZ)(A.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: j.m_.SEARCH,
              }),
                (0, S.pR)({ query: D, categoryId: e.id });
            },
            [D],
          ),
          X = i.useCallback(
            (e, n) => {
              (0, b.zZ)(A.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: j.m_.SEARCH,
                application_id: e,
                load_id: null == Y ? void 0 : Y.loadId,
                search_term: D,
                position: n,
              }),
                t(e);
            },
            [null == Y ? void 0 : Y.loadId, t, D],
          ),
          W = (0, h.K)();
        return (0, a.jsxs)("div", {
          className: T.container,
          children: [
            (0, a.jsx)(C.Z, {
              ref: Z,
              onScroll: P,
              children: (0, a.jsxs)("div", {
                className: T.innerContainer,
                children: [
                  R
                    ? null
                    : (0, a.jsx)("div", { className: T.centeringBuffer }),
                  (0, a.jsx)(v.Z, {
                    children: (0, a.jsxs)("div", {
                      className: T.contentContainer,
                      children: [
                        (0, a.jsx)("div", {
                          className: T.topFilterContainer,
                          children: (0, a.jsx)(E.V, {
                            countsByCategory: z,
                            selectedCategoryId: M,
                            onSelectCategory: K,
                          }),
                        }),
                        (0, a.jsx)(f.Z, {
                          loading: H === m.M.FETCHING,
                          children:
                            H === m.M.FETCHED &&
                            (null == Y ||
                              (null == Y ? void 0 : Y.results.length) === 0)
                              ? (0, a.jsx)(N.Z, {
                                  selectedCategoryId: null != M ? M : W.id,
                                  searchAllCategories: () => K(W),
                                })
                              : (0, a.jsx)("div", {
                                  className: T.content,
                                  children:
                                    null == Y
                                      ? void 0
                                      : Y.results.map((e, n) => {
                                          if (e.type === l.s.APPLICATION) {
                                            let t = e.data;
                                            return (0, a.jsx)(
                                              I.Z,
                                              {
                                                application: t,
                                                onSelectApplication: (e) =>
                                                  X(e, n),
                                                showCategory: !0,
                                              },
                                              t.id,
                                            );
                                          }
                                          return null;
                                        }),
                                }),
                        }),
                        (0, a.jsx)(c.Paginator, {
                          className: T.paginationInput,
                          totalCount: Math.min(
                            (null !== (n = null == Y ? void 0 : Y.totalPages) &&
                            void 0 !== n
                              ? n
                              : 0) * y.PAGE_SIZE,
                            y.MAX_PAGES * y.PAGE_SIZE,
                          ),
                          pageSize: y.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: k,
                          onPageChange: V,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: T.sideFilterContainer,
              children: (0, a.jsx)("div", {
                className: T.sideFilterContent,
                children: (0, a.jsx)(E.Z, {
                  countsByCategory: z,
                  selectedCategoryId: M,
                  onSelectCategory: K,
                }),
              }),
            }),
          ],
        });
      }
    },
    873199: function (e, n, t) {
      var a, i;
      t.d(n, {
        o: function () {
          return a;
        },
      }),
        t(47120),
        ((i = a || (a = {}))[(i.LIST = 1)] = "LIST"),
        (i[(i.LIST_WITH_IMAGE = 2)] = "LIST_WITH_IMAGE"),
        (i[(i.GALLERY = 3)] = "GALLERY"),
        (i[(i.EXPANDABLE_LIST = 4)] = "EXPANDABLE_LIST"),
        (i[(i.BANNER_CARDS = 5)] = "BANNER_CARDS"),
        (i[(i.SMALL_BANNER_CARDS = 6)] = "SMALL_BANNER_CARDS");
    },
    95648: function (e, n, t) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    396587: function (e, n, t) {
      e.exports = {
        item: "item_b60f40",
        currentItem: "currentItem_b60f40",
        itemImage: "itemImage_b60f40",
        currentImage: "currentImage_b60f40 itemImage_b60f40",
        itemImageWrapper: "itemImageWrapper_b60f40",
        paginationItem: "paginationItem_b60f40",
        storePaginationImg: "storePaginationImg_b60f40",
        selectedStorePaginationItem: "selectedStorePaginationItem_b60f40",
        unselectedStorePaginationItem: "unselectedStorePaginationItem_b60f40",
        overlappingBorder: "overlappingBorder_b60f40",
        paginationVideoOverlay: "paginationVideoOverlay_b60f40",
        paginationVideoPlayPill: "paginationVideoPlayPill_b60f40",
        pagination: "pagination_b60f40",
        carouselButtonsContainer: "carouselButtonsContainer_b60f40",
        arrow: "arrow_b60f40",
        arrowHovered: "arrowHovered_b60f40",
        scroller: "scroller_b60f40",
        video: "video_b60f40",
        videoWrapper: "videoWrapper_b60f40",
        mediaPlayer: "mediaPlayer_b60f40",
      };
    },
    707337: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b6f1f8",
        slide: "slide_b6f1f8",
        navPrev: "navPrev_b6f1f8 nav_b6f1f8",
        navNext: "navNext_b6f1f8 nav_b6f1f8",
      };
    },
    797844: function (e, n, t) {
      e.exports = {
        collapsed: "collapsed_e2ea95",
        blurb: "blurb_e2ea95",
        description: "description_e2ea95",
        toggleCollapseButton: "toggleCollapseButton_e2ea95",
        assetWrapper: "assetWrapper_e2ea95",
        asset: "asset_e2ea95",
      };
    },
    16655: function (e, n, t) {
      e.exports = {
        smallCarousel: "smallCarousel_b0360e",
        smallCarouselItem: "smallCarouselItem_b0360e",
        smallCarouselImage: "smallCarouselImage_b0360e",
        embedContainer: "embedContainer_b0360e",
        hidden: "hidden_b0360e",
        spinner: "spinner_b0360e",
        errorContainer: "errorContainer_b0360e",
        sizedToParent: "sizedToParent_b0360e",
      };
    },
    484759: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b3d866",
        icons: "icons_b3d866",
        iconMask: "iconMask_b3d866",
        icon: "icon_b3d866",
        iconSmall: "iconSmall_b3d866",
        iconLarge: "iconLarge_b3d866",
        moreGuilds: "moreGuilds_b3d866",
        moreGuildsSmall: "moreGuildsSmall_b3d866",
        moreGuildsLarge: "moreGuildsLarge_b3d866",
        defaultIcon: "defaultIcon_b3d866",
      };
    },
    496008: function (e, n, t) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    892528: function (e, n, t) {
      e.exports = {
        card: "card_b5d566",
        cardHeader: "cardHeader_b5d566",
        splashImage: "splashImage_b5d566",
        guildIcon: "guildIcon_b5d566",
        iconMask: "iconMask_b5d566",
        cardDetails: "cardDetails_b5d566",
        guildNameWrapper: "guildNameWrapper_b5d566",
        guildBadge: "guildBadge_b5d566",
        guildName: "guildName_b5d566",
        guildDescription: "guildDescription_b5d566",
        memberInfo: "memberInfo_b5d566",
        memberCountWrapper: "memberCountWrapper_b5d566",
        memberCountIcon: "memberCountIcon_b5d566",
      };
    },
    941221: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
        subscriptionCardSubtext: "subscriptionCardSubtext_bfa0f5",
      };
    },
    755522: function (e, n, t) {
      e.exports = { heading: "heading_fcab0f" };
    },
    358459: function (e, n, t) {
      e.exports = {
        container: "container_b97772",
        content: "content_b97772",
        textContainer: "textContainer_b97772",
        buttonContainer: "buttonContainer_b97772",
        title: "title_b97772",
        uppercase: "uppercase_b97772",
        description: "description_b97772",
        gradient: "gradient_b97772",
        clientThemes: "clientThemes_b97772",
        gradientOverlay: "gradientOverlay_b97772",
        gradientBackground: "gradientBackground_b97772",
      };
    },
    278741: function (e, n, t) {
      e.exports = {
        contentSection: "contentSection_a56260",
        content: "content_a56260",
      };
    },
    578451: function (e, n, t) {
      e.exports = {
        firstChildSpacingFix: "firstChildSpacingFix_d2d101",
        tabItem: "tabItem_d2d101",
      };
    },
    406014: function (e, n, t) {
      e.exports = {
        headerBar: "headerBar_accde0",
        overlay: "overlay_accde0",
        relative: "relative_accde0",
        backdrop: "backdrop_accde0",
        icon: "icon_accde0",
        iconButton: "iconButton_accde0",
        floatingSearchTabsMask: "floatingSearchTabsMask_accde0",
      };
    },
    333078: function (e, n, t) {
      e.exports = {
        container: "container_a853ca",
        measurements: "measurements_a853ca",
        tabs: "tabs_a853ca",
        tab: "tab_a853ca",
        more: "more_a853ca",
        selected: "selected_a853ca",
      };
    },
    789560: function (e, n, t) {
      e.exports = { scroller: "scroller_b91a2d" };
    },
    149025: function (e, n, t) {
      e.exports = {
        searchBar: "searchBar_e06425 search_e06425",
        searchIcon: "searchIcon_e06425 search_e06425",
        searchFloating: "searchFloating_e06425",
      };
    },
    600419: function (e, n, t) {
      e.exports = {
        filter: "filter_e4088d",
        filterBackground: "filterBackground_e4088d",
        menu: "menu_e4088d",
        categoryLabel: "categoryLabel_e4088d",
      };
    },
    704839: function (e, n, t) {
      e.exports = {
        card: "card_e32e6f",
        clickable: "clickable_e32e6f",
        disabled: "disabled_e32e6f",
        cardPlaceholder: "cardPlaceholder_e32e6f card_e32e6f",
        transitionItem: "transitionItem_e32e6f",
      };
    },
    544973: function (e, n, t) {
      e.exports = {
        outerContainer: "outerContainer_d862e5",
        loggedOutContainer: "loggedOutContainer_d862e5",
        innerContainer: "innerContainer_d862e5",
        detailHeaderContainer: "detailHeaderContainer_d862e5",
        detailHeaderSection: "detailHeaderSection_d862e5",
        detailHeaderButtonsContainer: "detailHeaderButtonsContainer_d862e5",
        hidden: "hidden_d862e5",
        hide: "hide_d862e5",
        visible: "visible_d862e5",
        detailHeader: "detailHeader_d862e5",
        searchHeader: "searchHeader_d862e5",
        nagbar: "nagbar_d862e5",
        nagbarActionContainer: "nagbarActionContainer_d862e5",
        logo: "logo_d862e5",
      };
    },
    226944: function (e, n, t) {
      e.exports = {
        bannerContainer: "bannerContainer_ea6128",
        bannerContent: "bannerContent_ea6128",
        bannerGradient: "bannerGradient_ea6128",
        loaded: "loaded_ea6128",
        bannerImage: "bannerImage_ea6128",
        bannerAnimatedContainer: "bannerAnimatedContainer_ea6128",
        videoFadeIn: "videoFadeIn_ea6128",
        videoFadeOut: "videoFadeOut_ea6128",
      };
    },
    833643: function (e, n, t) {
      e.exports = {
        container: "container_f2758d",
        card: "card_f2758d",
        avatar: "avatar_f2758d",
        header: "header_f2758d",
        avatarContainer: "avatarContainer_f2758d",
        appDetails: "appDetails_f2758d",
        titleContainer: "titleContainer_f2758d",
        title: "title_f2758d",
        infoContainer: "infoContainer_f2758d",
        appName: "appName_f2758d",
        appCategory: "appCategory_f2758d",
        description: "description_f2758d",
      };
    },
    928261: function (e, n, t) {
      e.exports = {
        container: "container_f47946",
        imageContainer: "imageContainer_f47946",
        image: "image_f47946",
        header: "header_f47946",
      };
    },
    863375: function (e, n, t) {
      e.exports = {
        errorContainer: "errorContainer_dff12c",
        error: "error_dff12c",
      };
    },
    76413: function (e, n, t) {
      e.exports = {
        content: "content_c657e4",
        errorContainer: "errorContainer_c657e4",
        error: "error_c657e4",
        paginationInput: "paginationInput_c657e4",
      };
    },
    890030: function (e, n, t) {
      e.exports = {
        detailContainer: "detailContainer_dc60cd",
        contentContainer: "contentContainer_dc60cd",
        contentTabsContainer: "contentTabsContainer_dc60cd",
        contentTabs: "contentTabs_dc60cd",
        centerContainer: "centerContainer_dc60cd",
        error: "error_dc60cd",
        sidebar: "sidebar_dc60cd",
      };
    },
    609396: function (e, n, t) {
      e.exports = {
        aboutContainer: "aboutContainer_d0b14a",
        divider: "divider_d0b14a",
        informationContainer: "informationContainer_d0b14a",
      };
    },
    914045: function (e, n, t) {
      e.exports = {
        actionContainer: "actionContainer_bf142c",
        iconButton: "iconButton_bf142c",
        small: "small_bf142c",
        innerIconButton: "innerIconButton_bf142c",
        wide: "wide_bf142c",
        tiny: "tiny_bf142c",
      };
    },
    520432: function (e, n, t) {
      e.exports = {
        errorImage: "errorImage_d90cba",
        carousel: "carousel_d90cba",
      };
    },
    190778: function (e, n, t) {
      e.exports = {
        categories: "categories_edecf1",
        category: "category_edecf1",
      };
    },
    765853: function (e, n, t) {
      e.exports = {
        sectionContainer: "sectionContainer_a7f862",
        contentContainer: "contentContainer_a7f862",
        commandContainer: "commandContainer_a7f862",
        commandName: "commandName_a7f862",
      };
    },
    349778: function (e, n, t) {
      e.exports = {
        sectionContainer: "sectionContainer_ab98a8",
        contentContainer: "contentContainer_ab98a8",
        privacyPolicy: "privacyPolicy_ab98a8",
        intentsList: "intentsList_ab98a8",
        intentContainer: "intentContainer_ab98a8",
        intentTextContainer: "intentTextContainer_ab98a8",
      };
    },
    137762: function (e, n, t) {
      e.exports = {
        avatarContainer: "avatarContainer_e55bd2",
        avatar: "avatar_e55bd2",
        infoContainer: "infoContainer_e55bd2",
        metadataContainer: "metadataContainer_e55bd2",
        disclosuresContainer: "disclosuresContainer_e55bd2",
        disclosuresText: "disclosuresText_e55bd2",
      };
    },
    75655: function (e, n, t) {
      e.exports = {
        sideContainer: "sideContainer_b7edb7",
        gridContainer: "gridContainer_b7edb7",
        guildCountContainer: "guildCountContainer_b7edb7",
        guildsIconContainer: "guildsIconContainer_b7edb7",
        sectionContainer: "sectionContainer_b7edb7",
        reducedGap: "reducedGap_b7edb7",
        infoSection: "infoSection_b7edb7",
        linkGrid: "linkGrid_b7edb7",
      };
    },
    140577: function (e, n, t) {
      e.exports = {
        container: "container_ab2e08",
        list: "list_ab2e08",
        listItem: "listItem_ab2e08",
        linkItem: "linkItem_ab2e08",
        listIcon: "listIcon_ab2e08",
        listText: "listText_ab2e08",
        listImage: "listImage_ab2e08",
      };
    },
    285136: function (e, n, t) {
      e.exports = {
        overviewContainer: "overviewContainer_b6e1a1",
        descriptionClamp: "descriptionClamp_b6e1a1",
        descriptionClampSafari: "descriptionClampSafari_b6e1a1",
        detailedDescription: "detailedDescription_b6e1a1",
        showMoreButton: "showMoreButton_b6e1a1",
        showMoreContent: "showMoreContent_b6e1a1",
        showMoreButtonIcon: "showMoreButtonIcon_b6e1a1",
        divider: "divider_b6e1a1",
      };
    },
    878744: function (e, n, t) {
      e.exports = {
        sectionContainer: "sectionContainer_d51bcd",
        contentContainer: "contentContainer_d51bcd",
      };
    },
    69812: function (e, n, t) {
      e.exports = {
        sectionContainer: "sectionContainer_a211ab",
        divider: "divider_a211ab",
        sectionHeader: "sectionHeader_a211ab",
        contentContainer: "contentContainer_a211ab",
        appContainer: "appContainer_a211ab",
        appHeader: "appHeader_a211ab",
        avatar: "avatar_a211ab",
        titleContainer: "titleContainer_a211ab",
        appName: "appName_a211ab",
        appCategory: "appCategory_a211ab",
        appDescription: "appDescription_a211ab",
      };
    },
    272680: function (e, n, t) {
      e.exports = {
        storeContainer: "storeContainer_a41aee",
        productSection: "productSection_a41aee",
        products: "products_a41aee",
        legalContainer: "legalContainer_a41aee",
      };
    },
    181169: function (e, n, t) {
      e.exports = {
        outerContainer: "outerContainer_e2a33b",
        innerContainer: "innerContainer_e2a33b",
        languageItem: "languageItem_e2a33b",
      };
    },
    894183: function (e, n, t) {
      e.exports = { contentContainer: "contentContainer_bec863" };
    },
    318708: function (e, n, t) {
      e.exports = {
        sectionTitle: "sectionTitle_b1e578",
        titleExtraPadding: "titleExtraPadding_b1e578",
        content: "content_b1e578",
        errorContainer: "errorContainer_b1e578",
        error: "error_b1e578",
      };
    },
    968654: function (e, n, t) {
      e.exports = {
        categories: "categories_acddb7",
        category: "category_acddb7",
        name: "name_acddb7",
        count: "count_acddb7",
        selected: "selected_acddb7",
        container: "container_acddb7",
      };
    },
    207876: function (e, n, t) {
      e.exports = {
        container: "container_e848c7",
        image: "image_e848c7",
        header: "header_e848c7",
      };
    },
    378105: function (e, n, t) {
      e.exports = {
        container: "container_e9dbfa",
        innerContainer: "innerContainer_e9dbfa",
        centeringBuffer: "centeringBuffer_e9dbfa",
        contentContainer: "contentContainer_e9dbfa",
        content: "content_e9dbfa",
        paginationInput: "paginationInput_e9dbfa",
        topFilterContainer: "topFilterContainer_e9dbfa",
        sideFilterContainer: "sideFilterContainer_e9dbfa",
        sideFilterContent: "sideFilterContent_e9dbfa",
      };
    },
    723478: function (e, n, t) {
      e.exports = {
        alignCenter: "alignCenter_ad2a08",
        alignLeft: "alignLeft_ad2a08",
        horizontalPaginationItemContainer:
          "horizontalPaginationItemContainer_ad2a08",
        verticalPaginationItemContainer:
          "verticalPaginationItemContainer_ad2a08 alignLeft_ad2a08",
        arrow: "arrow_ad2a08",
        prevButtonContainer: "prevButtonContainer_ad2a08 arrowContainer_ad2a08",
        nextButtonContainer: "nextButtonContainer_ad2a08 arrowContainer_ad2a08",
      };
    },
    72714: function (e, n, t) {
      e.exports = {
        singleItemWrapper: "singleItemWrapper_e3183f",
        carousel: "carousel_e3183f",
        item: "item_e3183f",
        singleItem: "singleItem_e3183f item_e3183f",
        viewport: "viewport_e3183f",
      };
    },
    262309: function (e, n, t) {
      e.exports = {
        root: "root_db3abe",
        carouselContainer: "carouselContainer_db3abe",
        carousel: "carousel_db3abe",
        pagination: "pagination_db3abe",
        themedPagination: "themedPagination_db3abe pagination_db3abe",
        controls: "controls_db3abe",
        arrowHitbox: "arrowHitbox_db3abe",
        arrow: "arrow_db3abe",
        arrowHitboxPadding: "arrowHitboxPadding_db3abe",
        dots: "dots_db3abe",
        dotNormal: "dotNormal_db3abe dot_db3abe",
        dotSelected: "dotSelected_db3abe dot_db3abe",
      };
    },
    891589: function (e, n, t) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    422235: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    134992: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=a6fbfc99f8c8f0c36032.js.map
