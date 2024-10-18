"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33053"],
  {
    503089: function (e, t, n) {
      n.d(t, {
        $x: function () {
          return C;
        },
        d7: function () {
          return E;
        },
        w6: function () {
          return N;
        },
      }),
        n(653041),
        n(390547),
        n(47120);
      var i = n(735250),
        s = n(470079),
        r = n(990547),
        l = n(692547),
        o = n(481060),
        a = n(213609),
        c = n(252618),
        u = n(243778),
        d = n(126848),
        h = n(207874),
        m = n(585483),
        p = n(960048),
        f = n(410575),
        x = n(493544),
        b = n(981631),
        v = n(689938),
        S = n(11377);
      function j(e, t, n) {
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
      let g = Object.freeze({
          shouldPreventNavigation: !1,
          onPreventNavigation: null,
          sidebarOpen: !0,
        }),
        C = 1.4,
        N = 15,
        E = 2;
      function T(e) {
        var t, n;
        let { section: s, setPreventNavigation: l, scrollerRef: o } = e;
        (0, a.Z)({
          type: r.ImpressionTypes.PANE,
          name: null == s ? void 0 : s.impressionName,
          properties: null == s ? void 0 : s.impressionProperties,
        });
        let c =
            null !== (t = null == s ? void 0 : s.element) && void 0 !== t
              ? t
              : b.VqG,
          u =
            null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n
              ? n
              : {};
        return (0, i.jsx)(f.Z, {
          section: s.section,
          children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: l,
            refToScroller: o,
          }),
        });
      }
      class y extends s.PureComponent {
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
          t !== this.props.section && (this._intensity = C);
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
            ? (m.S.dispatch(b.CkL.SHAKE_APP, {
                duration: 300,
                intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + E, N)),
              m.S.dispatch(b.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = C), !0);
        }
        renderSidebar(e) {
          let {
              section: t,
              title: n,
              isUserSettingsSearchEnabled: s,
            } = this.props,
            r = e
              .flatMap((e) => e.newIndicatorDismissibleContentTypes)
              .filter((e) => null != e),
            l = null != t ? t : e[0].section;
          return (0, i.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
              let { visibleContent: r } = t;
              return (0, i.jsxs)(o.TabBar, {
                selectedItem: l,
                onItemSelect: this.handleSetSection,
                orientation: "vertical",
                "aria-label": n,
                children: [
                  s ? (0, i.jsx)(h.Z, { style: S.searchBar }) : null,
                  e.map((e, t) => {
                    if (null != e.tabPredicate && !e.tabPredicate())
                      return null;
                    switch (e.section) {
                      case x.ID.HEADER:
                        return (0, i.jsx)(
                          o.TabBar.Header,
                          { children: e.label },
                          t,
                        );
                      case x.ID.DIVIDER:
                        return (0, i.jsx)(o.TabBar.Separator, {}, t);
                      case x.ID.CUSTOM:
                        var n;
                        let s =
                          null !== (n = e.element) && void 0 !== n ? n : b.VqG;
                        return (0, i.jsx)(s, {}, t);
                      default:
                        return this.renderSettingsSectionTabBarItem(
                          e,
                          l === e.section,
                          r,
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
              onClose: r,
              hideSidebar: l,
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
              (0, i.jsx)(x.ZP, {
                sidebarTheme: t,
                scrollerRef: this.scrollerRef,
                section: n,
                sidebar: this.renderSidebar(o),
                content: (0, i.jsx)(T, {
                  section: a,
                  setPreventNavigation: this.setPreventNavigation,
                  scrollerRef: this.scrollerRef,
                }),
                mobileSidebarOpen: this.state.sidebarOpen,
                hideSidebar: l,
                toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                contentType: a.type,
                notice: this.renderNotice(a),
                closeAction: null != r ? this.handleClose : void 0,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            j(this, "_unmounted", !1),
            j(this, "_intensity", C),
            j(this, "_subscribedStores", []),
            j(this, "scrollerRef", s.createRef()),
            j(this, "state", {
              ...g,
              sidebarOpen:
                this.props.section !== b.oAB.SUBSCRIPTIONS &&
                this.props.section !== b.oAB.PROFILE_CUSTOMIZATION,
            }),
            j(this, "setPreventNavigation", (e, t) => {
              this.setState({
                shouldPreventNavigation: e,
                onPreventNavigation: t,
              });
            }),
            j(this, "handleSetSection", (e) => {
              let { onSetSection: t, sections: n } = this.props,
                { shouldPreventNavigation: i, onPreventNavigation: s } =
                  this.state,
                r = () => {
                  var i;
                  null == t || t(e);
                  let { notice: s } =
                      null !== (i = n.find((t) => e === t.section)) &&
                      void 0 !== i
                        ? i
                        : {},
                    r = null != s ? s.stores : null;
                  null != r &&
                    r.forEach((e) => {
                      !this._subscribedStores.includes(e) &&
                        (e.addChangeListener(this.handleNoticeStoreUpdate),
                        this._subscribedStores.push(e));
                    }),
                    this.setState({ ...g, sidebarOpen: !1 });
                };
              this.validNavigation() &&
                !i &&
                (r(),
                p.Z.addBreadcrumb({
                  category: "settings",
                  message: "Set section: ".concat(e),
                })),
                i && null != s && s(r);
            }),
            j(this, "handleClose", () => {
              if (this.validNavigation()) {
                let { onClose: e } = this.props;
                null == e || e();
              }
            }),
            j(this, "handleNoticeStoreUpdate", () => {
              if (!this._unmounted) (this._intensity = C), this.forceUpdate();
            }),
            j(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
              let {
                  section: s,
                  label: r = null,
                  ariaLabel: a,
                  onClick: c,
                  color: u,
                  icon: h,
                  className: m,
                  newIndicator: p,
                  newIndicatorDismissibleContentTypes: f,
                  badgeCount: x,
                  searchFilterCount: j,
                } = e,
                g = null;
              null != j && j > 0
                ? (g = (0, i.jsx)(o.NumberBadge, {
                    count: j,
                    disableColor: !0,
                    className: S.searchFilterCount,
                  }))
                : s === b.oAB.ACCOUNT && this.props.isEligibleForPomelo
                  ? (g = (0, i.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: l.Z.colors.STATUS_WARNING.css,
                    }))
                  : null != e.decoration
                    ? (g = (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: e.decoration,
                      }))
                    : null != n && (null == f ? void 0 : f.includes(n)) && !t
                      ? (g =
                          null != p
                            ? p
                            : (0, i.jsx)(o.TextBadge, {
                                text: v.Z.Messages.NEW,
                              }))
                      : null != h
                        ? (g = h)
                        : null != x &&
                          x > 0 &&
                          (g = (0, i.jsx)(o.NumberBadge, { count: x }));
              let C =
                s === b.oAB.PREMIUM
                  ? (0, i.jsx)(d.Z, { label: r, isSelected: t, decoration: g })
                  : null == g
                    ? r
                    : (0, i.jsxs)("div", {
                        className: S.tabBarItemContainer,
                        children: [r, g],
                      });
              return (0, i.jsx)(
                o.TabBar.Item,
                {
                  color: u,
                  id: s,
                  onClick: c,
                  className: m,
                  "aria-label": a,
                  children: C,
                },
                s,
              );
            });
        }
      }
      t.ZP = y;
    },
    493544: function (e, t, n) {
      n.d(t, {
        ID: function () {
          return C;
        },
        NM: function () {
          return T;
        },
        Xi: function () {
          return E;
        },
        bT: function () {
          return a;
        },
      });
      var i,
        s,
        r,
        l,
        o,
        a,
        c = n(735250),
        u = n(470079),
        d = n(120356),
        h = n.n(d),
        m = n(212433),
        p = n(608863),
        f = n(873546),
        x = n(215569),
        b = n(481060),
        v = n(110924),
        S = n(358085),
        j = n(425493),
        g = n(156725);
      let C = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        N = u.createContext(null);
      class E extends (o = u.PureComponent) {
        renderContent() {
          let { scrollerRef: e, ...t } = this.props;
          return (0, c.jsx)("div", {
            className: g.customContainer,
            children: (0, c.jsx)(b.ListAuto, {
              ...t,
              className: h()(g.customScroller, g.contentRegionScroller),
              ref: e,
            }),
          });
        }
        render() {
          return (0, c.jsx)("div", {
            className: g.customColumn,
            children: this.renderContent(),
          });
        }
      }
      function T(e) {
        let { children: t } = e;
        return (0, c.jsx)("div", {
          className: g.customColumn,
          children: (0, c.jsx)("div", {
            className: g.customContainer,
            children: (0, c.jsx)(b.ScrollerAuto, {
              className: h()(g.customScroller, g.contentRegionScroller),
              children: t,
            }),
          }),
        });
      }
      (r = { paddingTop: 60, paddingBottom: 60 }),
        (s = "defaultProps") in (i = E)
          ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = r),
        ((l = a || (a = {})).MINIMAL = "minimal"),
        (l.CUSTOM = "custom"),
        (l.DEFAULT = "default"),
        (l.WIDE = "wide");
      let y = Object.freeze({
        minimal: "contentColumnMinimal",
        custom: "contentColumnCustom",
        default: "contentColumnDefault",
        wide: "contentColumnWide",
      });
      function P(e) {
        let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
          s = u.useRef(null);
        return null == i
          ? null
          : (0, c.jsx)("div", {
              className: h()(g.toolsContainer, {
                [g.mobileToolsContainer]: t,
                [g.mobileSidebarTools]: t,
                [g.closeIconOnly]: !n,
                [g.isMobileAndroid]: !n && !0 === (0, S.isAndroidWeb)(),
              }),
              ref: s,
              children: (0, c.jsx)(b.FocusRingScope, {
                containerRef: s,
                children: (0, c.jsx)("div", {
                  className: g.tools,
                  children: (0, c.jsx)(j.Z, {
                    className: h()({ [g.mobileToolsCloseIcon]: t }),
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
            closeAction: r,
            sidebarTheme: l,
            contentType: o,
            scrollerRef: a,
            mobileSidebarOpen: d,
            toggleSidebar: S,
            hideSidebar: j = !1,
          } = e,
          C = u.useRef(null),
          E = u.useRef(null),
          T = (0, v.Z)(s),
          R = (0, b.useTransition)(
            j,
            {
              from: { position: "absolute", opacity: 0 },
              enter: { opacity: 1 },
              reverse: j,
              config: m.config.stiff,
            },
            "animate-always",
          ),
          I = u.useCallback(
            (e) => {
              (C.current = e), null != a && (a.current = e);
            },
            [a],
          );
        u.useLayoutEffect(() => {
          null != C.current && T !== s && C.current.scrollTo({ to: 0 });
        }, [s, T, C]);
        let A = (0, c.jsx)(P, {
          isMobile: f.tq,
          mobileSidebarOpen: d,
          closeAction: r,
        });
        function _() {
          return null == i
            ? null
            : (0, c.jsx)(
                b.SlideIn,
                {
                  className: h()(g.noticeRegion, {
                    [g.noticeRegionHiddenSidebar]: j,
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
              className: g.standardSidebarView,
              children: [
                !i &&
                  (null == t
                    ? null
                    : (0, c.jsx)(b.ThemeProvider, {
                        theme: l,
                        children: (e) =>
                          (0, c.jsx)("div", {
                            className: h()(g.sidebarRegion, e, {
                              [g.flexFullWidth]: f.tq,
                              [g.hidden]: f.tq && !1 === d,
                            }),
                            children: (0, c.jsx)(b.AdvancedScrollerThin, {
                              className: g.sidebarRegionScroller,
                              fade: !0,
                              children: (0, c.jsxs)("nav", {
                                className: h()(g.sidebar, {
                                  [g.mobileSidebar]: f.tq,
                                }),
                                children: [
                                  f.tq &&
                                    (0, c.jsx)("div", {
                                      className: g.mobileSidebarHeader,
                                      children: A,
                                    }),
                                  t,
                                ],
                              }),
                            }),
                          }),
                      })),
                (function () {
                  let e = null != S && null != r && d,
                    t =
                      f.tq &&
                      (0, c.jsxs)("div", {
                        className: h()(g.mobileContentHeader, {
                          [g.hideHamburger]: !e,
                        }),
                        children: [e && (0, c.jsx)(p.r, { onClick: S }), A],
                      });
                  if ("custom" === o)
                    return (0, c.jsxs)(x.W, {
                      component: "div",
                      className: g.contentRegion,
                      children: [t, n, !f.tq && A, _()],
                    });
                  let i = y[null != o ? o : "default"];
                  return (0, c.jsxs)(x.W, {
                    component: "div",
                    className: h()(g.contentRegion, {
                      [g.hidden]: f.tq && !0 === d,
                    }),
                    children: [
                      (0, c.jsxs)("div", {
                        className: g.contentTransitionWrap,
                        children: [
                          t,
                          (0, c.jsxs)(b.AdvancedScrollerAuto, {
                            className: h()(
                              g.contentRegionScroller,
                              j
                                ? g.contentRegionHiddenSidebar
                                : g.contentRegionShownSidebar,
                            ),
                            ref: I,
                            children: [
                              (0, c.jsx)(N.Provider, {
                                value: C.current,
                                children: (0, c.jsx)(b.TabBar.Panel, {
                                  id: s,
                                  className: h()(g.contentColumn, g[i], {
                                    [g.mobileContent]: f.tq,
                                  }),
                                  ref: E,
                                  style: f.tq
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: j
                                    ? n
                                    : (0, c.jsx)(b.FocusRingScope, {
                                        containerRef: E,
                                        children: n,
                                      }),
                                }),
                              }),
                              !f.tq && A,
                            ],
                          }),
                        ],
                      }),
                      _(),
                    ],
                  });
                })(),
              ],
            }),
          ),
        });
      };
    },
    767870: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(735250),
        s = n(120356),
        r = n.n(s),
        l = n(927359),
        o = n(325767),
        a = n(823188),
        c = n(860553);
      let u = "premium_tier_gradient",
        d = "smaller_sparkle_gradient";
      function h(e) {
        let {
          width: t = 14,
          height: n = 15,
          color: s = "white",
          foreground: r,
          ...l
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, o.Z)({ ...l }),
          preserveAspectRatio: "none",
          width: t,
          height: n,
          viewBox: "0 0 14 15",
          className: r,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("linearGradient", {
                id: u,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                children: [
                  (0, i.jsx)("stop", { offset: "0%", stopColor: "#8547C6" }),
                  (0, i.jsx)("stop", { offset: "50%", stopColor: "#B845C1" }),
                  (0, i.jsx)("stop", { offset: "100%", stopColor: "#AB5D8A" }),
                ],
              }),
            }),
            (0, i.jsxs)("linearGradient", {
              id: d,
              x1: "-4.95474",
              y1: "5.44067",
              x2: "11.2384",
              y2: "8.58386",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, i.jsx)("stop", { stopColor: "#8547C6" }),
                (0, i.jsx)("stop", { offset: "0.52899", stopColor: "#B845C1" }),
                (0, i.jsx)("stop", { offset: "1", stopColor: "#AB5D8A" }),
              ],
            }),
            (0, i.jsx)("path", {
              d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
              fill: s,
            }),
          ],
        });
      }
      function m(e) {
        let { className: t, endsAt: n } = e,
          s = (0, l.Z)(n, l.a.SHORT_TIME_LEFT);
        return (0, i.jsxs)("div", {
          className: r()(t, c.countDown),
          children: [
            (0, i.jsx)(h, {
              foreground: c.sparkleStar1,
              color: "url(#".concat(d, ")"),
            }),
            (0, i.jsx)(h, {
              foreground: c.sparkleStar2,
              color: "url(#".concat(u, ")"),
            }),
            (0, i.jsx)(a.mn, {
              text: s,
              colorOptions: a.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
          ],
        });
      }
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
          return l;
        },
      });
      var i = n(652874),
        s = n(731965);
      let r = (0, i.Z)(() => ({ query: "", isActive: !1, selected: null }));
      function l(e) {
        (0, s.j)(() => r.setState({ query: e }));
      }
      function o(e) {
        (0, s.j)(() => r.setState({ isActive: e }));
      }
      function a() {
        return r().query;
      }
    },
    126848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(120356),
        r = n.n(s),
        l = n(442837),
        o = n(975298),
        a = n(650032),
        c = n(767870),
        u = n(104494),
        d = n(639119),
        h = n(655525),
        m = n(52188),
        p = n(248042),
        f = n(924540),
        x = n(351402),
        b = n(170671),
        v = n(474936),
        S = n(655580);
      function j(e) {
        let t,
          { decoration: n, label: s, isSelected: j } = e,
          { fractionalState: g, endsAt: C } = (0, o.Z)({ forceFetch: !0 }),
          N = (0, d.N)(),
          E = (0, u.Ng)(),
          T = (0, p.Vi)(),
          y =
            (0, l.e7)([x.Z], () => x.Z.isLocalizedPromoEnabled) &&
            null == N &&
            null == n,
          { enabled: P } = a._.useExperiment(
            { location: "UserSettingsPremiumLabel" },
            { autoTrackExposure: !1 },
          ),
          R = P && (null == N ? void 0 : N.trial_id) === v.a7;
        return (
          (t =
            g !== v.a$.NONE
              ? (0, i.jsx)(c.Z, { className: "", endsAt: C })
              : T
                ? (0, i.jsx)(h.Z, {})
                : null != E
                  ? (0, i.jsx)(f.GN, {
                      isTabSelected: j,
                      userDiscount: E,
                      includesAmountOff: !1,
                    })
                  : null == N || R
                    ? null != n
                      ? n
                      : y
                        ? (0, i.jsx)(m.k, { entryPoint: m.U.SettingsMenu })
                        : (0, i.jsx)(b.Z, { isSelected: j })
                    : (0, i.jsx)(f.$H, { isTabSelected: j, trialOffer: N })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: r()(S.premiumLabel, {
                  [S.selected]: (j || y) && !T,
                }),
                children: [s, t],
              }),
              (0, i.jsx)("div", {
                className: r()(S.background, {
                  [S.auPromo]: y && !j,
                  [S.auPromoSelected]: y && j,
                  [S.selectedBackground]: !y && !T && j,
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
        r = n(442837),
        l = n(461745),
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
          p = (0, r.e7)([o.Z], () => o.Z.getSection());
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
            children: (0, i.jsx)(l.ZP, {
              ref: m,
              size: l.ZP.Sizes.MEDIUM,
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
//# sourceMappingURL=f4082d7134f92de3dd10.js.map
