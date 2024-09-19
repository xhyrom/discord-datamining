"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33053"],
  {
    503089: function (e, t, n) {
      n.d(t, {
        $x: function () {
          return N;
        },
        d7: function () {
          return P;
        },
        w6: function () {
          return C;
        },
      }),
        n(653041),
        n(390547),
        n(47120);
      var i = n(735250),
        s = n(470079),
        l = n(990547),
        r = n(692547),
        o = n(481060),
        a = n(213609),
        c = n(252618),
        u = n(243778),
        d = n(126848),
        h = n(207874),
        m = n(585483),
        p = n(960048),
        b = n(410575),
        f = n(493544),
        S = n(981631),
        v = n(689938),
        x = n(11377);
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let j = Object.freeze({
          shouldPreventNavigation: !1,
          onPreventNavigation: null,
          sidebarOpen: !0,
        }),
        N = 1.4,
        C = 15,
        P = 2;
      function y(e) {
        var t, n;
        let { section: s, setPreventNavigation: r, scrollerRef: o } = e;
        (0, a.Z)({
          type: l.ImpressionTypes.PANE,
          name: null == s ? void 0 : s.impressionName,
          properties: null == s ? void 0 : s.impressionProperties,
        });
        let c =
            null !== (t = null == s ? void 0 : s.element) && void 0 !== t
              ? t
              : S.VqG,
          u =
            null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n
              ? n
              : {};
        return (0, i.jsx)(b.Z, {
          section: s.section,
          children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: r,
            refToScroller: o,
          }),
        });
      }
      class T extends s.PureComponent {
        componentDidMount() {
          this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
              n.forEach((e) => {
                e.addChangeListener(this.handleNoticeStoreUpdate),
                  this._subscribedStores.push(e);
              });
          });
        }
        componentDidUpdate(e) {
          let { section: t } = e;
          t !== this.props.section && (this._intensity = N);
        }
        componentWillUnmount() {
          (this._unmounted = !0),
            this._subscribedStores.forEach((e) =>
              e.removeChangeListener(this.handleNoticeStoreUpdate),
            ),
            this.props.sections.forEach((e) => {
              var t;
              return null === (t = e.onSettingsClose) || void 0 === t
                ? void 0
                : t.call(e);
            });
        }
        getPredicateSections() {
          return this.props.sections.filter(
            (e) => null == e.predicate || e.predicate(),
          );
        }
        validNavigation() {
          var e;
          let { section: t } = this.props,
            { notice: n } =
              null !==
                (e = this.getPredicateSections().find(
                  (e) => t === e.section,
                )) && void 0 !== e
                ? e
                : {};
          return null != n &&
            n.stores.some(
              (e) =>
                e.showNotice() &&
                !(null != e.canCloseEarly && e.canCloseEarly()),
            )
            ? (m.S.dispatch(S.CkL.SHAKE_APP, {
                duration: 300,
                intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + P, C)),
              m.S.dispatch(S.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = N), !0);
        }
        renderSidebar(e) {
          let {
              section: t,
              title: n,
              isUserSettingsSearchEnabled: s,
            } = this.props,
            l = e
              .flatMap((e) => e.newIndicatorDismissibleContentTypes)
              .filter((e) => null != e),
            r = null != t ? t : e[0].section;
          return (0, i.jsx)(u.ZP, {
            contentTypes: l,
            children: (t) => {
              let { visibleContent: l } = t;
              return (0, i.jsxs)(o.TabBar, {
                selectedItem: r,
                onItemSelect: this.handleSetSection,
                orientation: "vertical",
                "aria-label": n,
                children: [
                  s ? (0, i.jsx)(h.Z, { style: x.searchBar }) : null,
                  e.map((e, t) => {
                    if (null != e.tabPredicate && !e.tabPredicate())
                      return null;
                    switch (e.section) {
                      case f.ID.HEADER:
                        return (0, i.jsx)(
                          o.TabBar.Header,
                          { children: e.label },
                          t,
                        );
                      case f.ID.DIVIDER:
                        return (0, i.jsx)(o.TabBar.Separator, {}, t);
                      case f.ID.CUSTOM:
                        var n;
                        let s =
                          null !== (n = e.element) && void 0 !== n ? n : S.VqG;
                        return (0, i.jsx)(s, {}, t);
                      default:
                        return this.renderSettingsSectionTabBarItem(
                          e,
                          r === e.section,
                          l,
                        );
                    }
                  }),
                ],
              });
            },
          });
        }
        renderNotice(e) {
          let { theme: t } = this.props;
          if (null == e || null == e.notice) return null;
          let { stores: n, element: s } = e.notice;
          return null == n || n.some((e) => e.showNotice())
            ? (0, i.jsx)(s, { theme: t })
            : null;
        }
        render() {
          var e;
          let {
              sidebarTheme: t,
              section: n,
              title: s,
              onClose: l,
              hideSidebar: r,
            } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
          if (null == a || null == n) return null;
          let u =
            null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) &&
            void 0 !== e
              ? e
              : s;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c.yY, { location: s, subsection: u }),
              (0, i.jsx)(f.ZP, {
                sidebarTheme: t,
                scrollerRef: this.scrollerRef,
                section: n,
                sidebar: this.renderSidebar(o),
                content: (0, i.jsx)(y, {
                  section: a,
                  setPreventNavigation: this.setPreventNavigation,
                  scrollerRef: this.scrollerRef,
                }),
                mobileSidebarOpen: this.state.sidebarOpen,
                hideSidebar: r,
                toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                contentType: a.type,
                notice: this.renderNotice(a),
                closeAction: null != l ? this.handleClose : void 0,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "_unmounted", !1),
            g(this, "_intensity", N),
            g(this, "_subscribedStores", []),
            g(this, "scrollerRef", s.createRef()),
            g(this, "state", {
              ...j,
              sidebarOpen:
                this.props.section !== S.oAB.SUBSCRIPTIONS &&
                this.props.section !== S.oAB.PROFILE_CUSTOMIZATION,
            }),
            g(this, "setPreventNavigation", (e, t) => {
              this.setState({
                shouldPreventNavigation: e,
                onPreventNavigation: t,
              });
            }),
            g(this, "handleSetSection", (e) => {
              let { onSetSection: t, sections: n } = this.props,
                { shouldPreventNavigation: i, onPreventNavigation: s } =
                  this.state,
                l = () => {
                  var i;
                  null == t || t(e);
                  let { notice: s } =
                      null !== (i = n.find((t) => e === t.section)) &&
                      void 0 !== i
                        ? i
                        : {},
                    l = null != s ? s.stores : null;
                  null != l &&
                    l.forEach((e) => {
                      !this._subscribedStores.includes(e) &&
                        (e.addChangeListener(this.handleNoticeStoreUpdate),
                        this._subscribedStores.push(e));
                    }),
                    this.setState({ ...j, sidebarOpen: !1 });
                };
              this.validNavigation() &&
                !i &&
                (l(),
                p.Z.addBreadcrumb({
                  category: "settings",
                  message: "Set section: ".concat(e),
                })),
                i && null != s && s(l);
            }),
            g(this, "handleClose", () => {
              if (this.validNavigation()) {
                let { onClose: e } = this.props;
                null == e || e();
              }
            }),
            g(this, "handleNoticeStoreUpdate", () => {
              if (!this._unmounted) (this._intensity = N), this.forceUpdate();
            }),
            g(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
              let {
                  section: s,
                  label: l = null,
                  ariaLabel: a,
                  onClick: c,
                  color: u,
                  icon: h,
                  className: m,
                  newIndicator: p,
                  newIndicatorDismissibleContentTypes: b,
                  badgeCount: f,
                  searchFilterCount: g,
                } = e,
                j = null;
              null != g && g > 0
                ? (j = (0, i.jsx)(o.NumberBadge, {
                    count: g,
                    disableColor: !0,
                    className: x.searchFilterCount,
                  }))
                : s === S.oAB.ACCOUNT && this.props.isEligibleForPomelo
                  ? (j = (0, i.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: r.Z.colors.STATUS_WARNING.css,
                    }))
                  : null != e.decoration
                    ? (j = (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: e.decoration,
                      }))
                    : null != n && (null == b ? void 0 : b.includes(n)) && !t
                      ? (j =
                          null != p
                            ? p
                            : (0, i.jsx)(o.TextBadge, {
                                text: v.Z.Messages.NEW,
                              }))
                      : null != h
                        ? (j = h)
                        : null != f &&
                          f > 0 &&
                          (j = (0, i.jsx)(o.NumberBadge, { count: f }));
              let N =
                s === S.oAB.PREMIUM
                  ? (0, i.jsx)(d.Z, { label: l, isSelected: t, decoration: j })
                  : null == j
                    ? l
                    : (0, i.jsxs)("div", {
                        className: x.tabBarItemContainer,
                        children: [l, j],
                      });
              return (0, i.jsx)(
                o.TabBar.Item,
                {
                  color: u,
                  id: s,
                  onClick: c,
                  className: m,
                  "aria-label": a,
                  children: N,
                },
                s,
              );
            });
        }
      }
      t.ZP = T;
    },
    493544: function (e, t, n) {
      n.d(t, {
        ID: function () {
          return N;
        },
        NM: function () {
          return y;
        },
        Xi: function () {
          return P;
        },
        bT: function () {
          return a;
        },
      });
      var i,
        s,
        l,
        r,
        o,
        a,
        c = n(735250),
        u = n(470079),
        d = n(120356),
        h = n.n(d),
        m = n(526629),
        p = n(608863),
        b = n(873546),
        f = n(215569),
        S = n(481060),
        v = n(110924),
        x = n(358085),
        g = n(425493),
        j = n(156725);
      let N = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        C = u.createContext(null);
      class P extends (o = u.PureComponent) {
        renderContent() {
          let { scrollerRef: e, ...t } = this.props;
          return (0, c.jsx)("div", {
            className: j.customContainer,
            children: (0, c.jsx)(S.ListAuto, {
              ...t,
              className: h()(j.customScroller, j.contentRegionScroller),
              ref: e,
            }),
          });
        }
        render() {
          return (0, c.jsx)("div", {
            className: j.customColumn,
            children: this.renderContent(),
          });
        }
      }
      function y(e) {
        let { children: t } = e;
        return (0, c.jsx)("div", {
          className: j.customColumn,
          children: (0, c.jsx)("div", {
            className: j.customContainer,
            children: (0, c.jsx)(S.ScrollerAuto, {
              className: h()(j.customScroller, j.contentRegionScroller),
              children: t,
            }),
          }),
        });
      }
      (l = { paddingTop: 60, paddingBottom: 60 }),
        (s = "defaultProps") in (i = P)
          ? Object.defineProperty(i, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = l),
        ((r = a || (a = {})).MINIMAL = "minimal"),
        (r.CUSTOM = "custom"),
        (r.DEFAULT = "default"),
        (r.WIDE = "wide");
      let T = Object.freeze({
        minimal: "contentColumnMinimal",
        custom: "contentColumnCustom",
        default: "contentColumnDefault",
        wide: "contentColumnWide",
      });
      function E(e) {
        let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
          s = u.useRef(null);
        return null == i
          ? null
          : (0, c.jsx)("div", {
              className: h()(j.toolsContainer, {
                [j.mobileToolsContainer]: t,
                [j.mobileSidebarTools]: t,
                [j.closeIconOnly]: !n,
                [j.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)(),
              }),
              ref: s,
              children: (0, c.jsx)(S.FocusRingScope, {
                containerRef: s,
                children: (0, c.jsx)("div", {
                  className: j.tools,
                  children: (0, c.jsx)(g.Z, {
                    className: h()({ [j.mobileToolsCloseIcon]: t }),
                    closeAction: i,
                    keybind: "ESC",
                  }),
                }),
              }),
            });
      }
      t.ZP = function (e) {
        let {
            sidebar: t,
            content: n,
            notice: i,
            section: s,
            closeAction: l,
            sidebarTheme: r,
            contentType: o,
            scrollerRef: a,
            mobileSidebarOpen: d,
            toggleSidebar: x,
            hideSidebar: g = !1,
          } = e,
          N = u.useRef(null),
          P = u.useRef(null),
          y = (0, v.Z)(s),
          R = (0, S.useTransition)(
            g,
            {
              from: { position: "absolute", opacity: 0 },
              enter: { opacity: 1 },
              reverse: g,
              config: m.config.stiff,
            },
            "animate-always",
          ),
          I = u.useCallback(
            (e) => {
              (N.current = e), null != a && (a.current = e);
            },
            [a],
          );
        u.useLayoutEffect(() => {
          null != N.current && y !== s && N.current.scrollTo({ to: 0 });
        }, [s, y, N]);
        let A = (0, c.jsx)(E, {
          isMobile: b.tq,
          mobileSidebarOpen: d,
          closeAction: l,
        });
        function Z() {
          return null == i
            ? null
            : (0, c.jsx)(
                S.SlideIn,
                {
                  className: h()(j.noticeRegion, {
                    [j.noticeRegionHiddenSidebar]: g,
                  }),
                  children: i,
                },
                s,
              );
        }
        return (0, c.jsx)(c.Fragment, {
          children: R((e, i) =>
            (0, c.jsxs)(m.animated.div, {
              style: e,
              className: j.standardSidebarView,
              children: [
                !i &&
                  (null == t
                    ? null
                    : (0, c.jsx)(S.ThemeProvider, {
                        theme: r,
                        children: (e) =>
                          (0, c.jsx)("div", {
                            className: h()(j.sidebarRegion, e, {
                              [j.flexFullWidth]: b.tq,
                              [j.hidden]: b.tq && !1 === d,
                            }),
                            children: (0, c.jsx)(S.AdvancedScrollerThin, {
                              className: j.sidebarRegionScroller,
                              fade: !0,
                              children: (0, c.jsxs)("nav", {
                                className: h()(j.sidebar, {
                                  [j.mobileSidebar]: b.tq,
                                }),
                                children: [
                                  b.tq &&
                                    (0, c.jsx)("div", {
                                      className: j.mobileSidebarHeader,
                                      children: A,
                                    }),
                                  t,
                                ],
                              }),
                            }),
                          }),
                      })),
                (function () {
                  let e = null != x && null != l && d,
                    t =
                      b.tq &&
                      (0, c.jsxs)("div", {
                        className: h()(j.mobileContentHeader, {
                          [j.hideHamburger]: !e,
                        }),
                        children: [e && (0, c.jsx)(p.r, { onClick: x }), A],
                      });
                  if ("custom" === o)
                    return (0, c.jsxs)(f.W, {
                      component: "div",
                      className: j.contentRegion,
                      children: [t, n, !b.tq && A, Z()],
                    });
                  let i = T[null != o ? o : "default"];
                  return (0, c.jsxs)(f.W, {
                    component: "div",
                    className: h()(j.contentRegion, {
                      [j.hidden]: b.tq && !0 === d,
                    }),
                    children: [
                      (0, c.jsxs)("div", {
                        className: j.contentTransitionWrap,
                        children: [
                          t,
                          (0, c.jsxs)(S.AdvancedScrollerAuto, {
                            className: h()(
                              j.contentRegionScroller,
                              g
                                ? j.contentRegionHiddenSidebar
                                : j.contentRegionShownSidebar,
                            ),
                            ref: I,
                            children: [
                              (0, c.jsx)(C.Provider, {
                                value: N.current,
                                children: (0, c.jsx)(S.TabBar.Panel, {
                                  id: s,
                                  className: h()(j.contentColumn, j[i], {
                                    [j.mobileContent]: b.tq,
                                  }),
                                  ref: P,
                                  style: b.tq
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: g
                                    ? n
                                    : (0, c.jsx)(S.FocusRingScope, {
                                        containerRef: P,
                                        children: n,
                                      }),
                                }),
                              }),
                              !b.tq && A,
                            ],
                          }),
                        ],
                      }),
                      Z(),
                    ],
                  });
                })(),
              ],
            }),
          ),
        });
      };
    },
    996733: function (e, t, n) {
      n.d(t, {
        QH: function () {
          return o;
        },
        Z7: function () {
          return a;
        },
        yN: function () {
          return r;
        },
      });
      var i = n(652874),
        s = n(731965);
      let l = (0, i.Z)(() => ({ query: "", isActive: !1, selected: null }));
      function r(e) {
        (0, s.j)(() => l.setState({ query: e }));
      }
      function o(e) {
        (0, s.j)(() => l.setState({ isActive: e }));
      }
      function a() {
        return l().query;
      }
    },
    126848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(120356),
        l = n.n(s),
        r = n(442837),
        o = n(650032),
        a = n(104494),
        c = n(639119),
        u = n(655525),
        d = n(52188),
        h = n(248042),
        m = n(924540),
        p = n(351402),
        b = n(170671),
        f = n(474936),
        S = n(655580);
      function v(e) {
        let t,
          { decoration: n, label: s, isSelected: v } = e,
          x = (0, c.N)(),
          g = (0, a.Ng)(),
          j = (0, h.Vi)(),
          N =
            (0, r.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) &&
            null == x &&
            null == n,
          { enabled: C } = o._.useExperiment(
            { location: "UserSettingsPremiumLabel" },
            { autoTrackExposure: !1 },
          ),
          P = C && (null == x ? void 0 : x.trial_id) === f.a7;
        return (
          (t = j
            ? (0, i.jsx)(u.Z, {})
            : null != g
              ? (0, i.jsx)(m.GN, {
                  isTabSelected: v,
                  userDiscount: g,
                  includesAmountOff: !1,
                })
              : null == x || P
                ? null != n
                  ? n
                  : N
                    ? (0, i.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                    : (0, i.jsx)(b.Z, { isSelected: v })
                : (0, i.jsx)(m.$H, { isTabSelected: v, trialOffer: x })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: l()(S.premiumLabel, {
                  [S.selected]: (v || N) && !j,
                }),
                children: [s, t],
              }),
              (0, i.jsx)("div", {
                className: l()(S.background, {
                  [S.auPromo]: N && !v,
                  [S.auPromoSelected]: N && v,
                  [S.selectedBackground]: !N && !j && v,
                }),
              }),
            ],
          })
        );
      }
    },
    207874: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(735250),
        s = n(470079),
        l = n(442837),
        r = n(461745),
        o = n(663389),
        a = n(5967),
        c = n(996733),
        u = n(689938);
      function d(e) {
        let { style: t } = e,
          n = (0, c.Z7)(),
          d = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
          }, []),
          h = s.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)("");
          }, []),
          m = s.useRef(null),
          p = (0, l.e7)([o.Z], () => o.Z.getSection());
        return (
          s.useEffect(() => {
            let e = (e) => {
              var t;
              let n = m.current;
              (null === (t = (0, a.uB)(e)) || void 0 === t
                ? void 0
                : t.activeElement) === document.body &&
                (null == n || n.focus());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [p]),
          (0, i.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, i.jsx)(r.ZP, {
              ref: m,
              size: r.ZP.Sizes.MEDIUM,
              query: n,
              onClear: h,
              onQueryChange: c.yN,
              placeholder: u.Z.Messages.SEARCH,
              className: t,
              inputProps: {
                "aria-label": u.Z.Messages.USER_SETTINGS_SEARCH_BAR,
                "aria-expanded": !0,
                onFocus: (e) => d(!0, e),
                onBlur: (e) => d(!1, e),
              },
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=d37db1b3bec358700780.js.map
