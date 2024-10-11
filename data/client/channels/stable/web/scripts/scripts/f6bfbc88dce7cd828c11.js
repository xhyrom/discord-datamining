"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33053"],
  {
    503089: function (e, t, n) {
      n.d(t, {
        $x: function () {
          return T;
        },
        d7: function () {
          return A;
        },
        w6: function () {
          return _;
        },
      }),
        n(653041),
        n(390547),
        n(47120);
      var s = n(735250),
        i = n(470079),
        r = n(990547),
        l = n(692547),
        o = n(481060),
        a = n(213609),
        c = n(252618),
        u = n(243778),
        d = n(126848),
        h = n(207874),
        m = n(585483),
        f = n(960048),
        p = n(410575),
        S = n(493544),
        N = n(981631),
        b = n(689938),
        x = n(11377);
      function v(e, t, n) {
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
        T = 1.4,
        _ = 15,
        A = 2;
      function E(e) {
        var t, n;
        let { section: i, setPreventNavigation: l, scrollerRef: o } = e;
        (0, a.Z)({
          type: r.ImpressionTypes.PANE,
          name: null == i ? void 0 : i.impressionName,
          properties: null == i ? void 0 : i.impressionProperties,
        });
        let c =
            null !== (t = null == i ? void 0 : i.element) && void 0 !== t
              ? t
              : N.VqG,
          u =
            null !== (n = null == i ? void 0 : i.elementProps) && void 0 !== n
              ? n
              : {};
        return (0, s.jsx)(p.Z, {
          section: i.section,
          children: (0, s.jsx)(c, {
            ...u,
            setPreventNavigation: l,
            refToScroller: o,
          }),
        });
      }
      class C extends i.PureComponent {
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
          t !== this.props.section && (this._intensity = T);
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
            ? (m.S.dispatch(N.CkL.SHAKE_APP, {
                duration: 300,
                intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + A, _)),
              m.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = T), !0);
        }
        renderSidebar(e) {
          let {
              section: t,
              title: n,
              isUserSettingsSearchEnabled: i,
            } = this.props,
            r = e
              .flatMap((e) => e.newIndicatorDismissibleContentTypes)
              .filter((e) => null != e),
            l = null != t ? t : e[0].section;
          return (0, s.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
              let { visibleContent: r } = t;
              return (0, s.jsxs)(o.TabBar, {
                selectedItem: l,
                onItemSelect: this.handleSetSection,
                orientation: "vertical",
                "aria-label": n,
                children: [
                  i ? (0, s.jsx)(h.Z, { style: x.searchBar }) : null,
                  e.map((e, t) => {
                    if (null != e.tabPredicate && !e.tabPredicate())
                      return null;
                    switch (e.section) {
                      case S.ID.HEADER:
                        return (0, s.jsx)(
                          o.TabBar.Header,
                          { children: e.label },
                          t,
                        );
                      case S.ID.DIVIDER:
                        return (0, s.jsx)(o.TabBar.Separator, {}, t);
                      case S.ID.CUSTOM:
                        var n;
                        let i =
                          null !== (n = e.element) && void 0 !== n ? n : N.VqG;
                        return (0, s.jsx)(i, {}, t);
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
          let { stores: n, element: i } = e.notice;
          return null == n || n.some((e) => e.showNotice())
            ? (0, s.jsx)(i, { theme: t })
            : null;
        }
        render() {
          var e;
          let {
              sidebarTheme: t,
              section: n,
              title: i,
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
              : i;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c.yY, { location: i, subsection: u }),
              (0, s.jsx)(S.ZP, {
                sidebarTheme: t,
                scrollerRef: this.scrollerRef,
                section: n,
                sidebar: this.renderSidebar(o),
                content: (0, s.jsx)(E, {
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
            v(this, "_unmounted", !1),
            v(this, "_intensity", T),
            v(this, "_subscribedStores", []),
            v(this, "scrollerRef", i.createRef()),
            v(this, "state", {
              ...g,
              sidebarOpen:
                this.props.section !== N.oAB.SUBSCRIPTIONS &&
                this.props.section !== N.oAB.PROFILE_CUSTOMIZATION,
            }),
            v(this, "setPreventNavigation", (e, t) => {
              this.setState({
                shouldPreventNavigation: e,
                onPreventNavigation: t,
              });
            }),
            v(this, "handleSetSection", (e) => {
              let { onSetSection: t, sections: n } = this.props,
                { shouldPreventNavigation: s, onPreventNavigation: i } =
                  this.state,
                r = () => {
                  var s;
                  null == t || t(e);
                  let { notice: i } =
                      null !== (s = n.find((t) => e === t.section)) &&
                      void 0 !== s
                        ? s
                        : {},
                    r = null != i ? i.stores : null;
                  null != r &&
                    r.forEach((e) => {
                      !this._subscribedStores.includes(e) &&
                        (e.addChangeListener(this.handleNoticeStoreUpdate),
                        this._subscribedStores.push(e));
                    }),
                    this.setState({ ...g, sidebarOpen: !1 });
                };
              this.validNavigation() &&
                !s &&
                (r(),
                f.Z.addBreadcrumb({
                  category: "settings",
                  message: "Set section: ".concat(e),
                })),
                s && null != i && i(r);
            }),
            v(this, "handleClose", () => {
              if (this.validNavigation()) {
                let { onClose: e } = this.props;
                null == e || e();
              }
            }),
            v(this, "handleNoticeStoreUpdate", () => {
              if (!this._unmounted) (this._intensity = T), this.forceUpdate();
            }),
            v(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
              let {
                  section: i,
                  label: r = null,
                  ariaLabel: a,
                  onClick: c,
                  color: u,
                  icon: h,
                  className: m,
                  newIndicator: f,
                  newIndicatorDismissibleContentTypes: p,
                  badgeCount: S,
                  searchFilterCount: v,
                } = e,
                g = null;
              null != v && v > 0
                ? (g = (0, s.jsx)(o.NumberBadge, {
                    count: v,
                    disableColor: !0,
                    className: x.searchFilterCount,
                  }))
                : i === N.oAB.ACCOUNT && this.props.isEligibleForPomelo
                  ? (g = (0, s.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: l.Z.colors.STATUS_WARNING.css,
                    }))
                  : null != e.decoration
                    ? (g = (0, s.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: e.decoration,
                      }))
                    : null != n && (null == p ? void 0 : p.includes(n)) && !t
                      ? (g =
                          null != f
                            ? f
                            : (0, s.jsx)(o.TextBadge, {
                                text: b.Z.Messages.NEW,
                              }))
                      : null != h
                        ? (g = h)
                        : null != S &&
                          S > 0 &&
                          (g = (0, s.jsx)(o.NumberBadge, { count: S }));
              let T =
                i === N.oAB.PREMIUM
                  ? (0, s.jsx)(d.Z, { label: r, isSelected: t, decoration: g })
                  : null == g
                    ? r
                    : (0, s.jsxs)("div", {
                        className: x.tabBarItemContainer,
                        children: [r, g],
                      });
              return (0, s.jsx)(
                o.TabBar.Item,
                {
                  color: u,
                  id: i,
                  onClick: c,
                  className: m,
                  "aria-label": a,
                  children: T,
                },
                i,
              );
            });
        }
      }
      t.ZP = C;
    },
    493544: function (e, t, n) {
      n.d(t, {
        ID: function () {
          return T;
        },
        NM: function () {
          return E;
        },
        Xi: function () {
          return A;
        },
        bT: function () {
          return a;
        },
      });
      var s,
        i,
        r,
        l,
        o,
        a,
        c = n(735250),
        u = n(470079),
        d = n(120356),
        h = n.n(d),
        m = n(212433),
        f = n(608863),
        p = n(873546),
        S = n(215569),
        N = n(481060),
        b = n(110924),
        x = n(358085),
        v = n(425493),
        g = n(156725);
      let T = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        _ = u.createContext(null);
      class A extends (o = u.PureComponent) {
        renderContent() {
          let { scrollerRef: e, ...t } = this.props;
          return (0, c.jsx)("div", {
            className: g.customContainer,
            children: (0, c.jsx)(N.ListAuto, {
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
      function E(e) {
        let { children: t } = e;
        return (0, c.jsx)("div", {
          className: g.customColumn,
          children: (0, c.jsx)("div", {
            className: g.customContainer,
            children: (0, c.jsx)(N.ScrollerAuto, {
              className: h()(g.customScroller, g.contentRegionScroller),
              children: t,
            }),
          }),
        });
      }
      (r = { paddingTop: 60, paddingBottom: 60 }),
        (i = "defaultProps") in (s = A)
          ? Object.defineProperty(s, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[i] = r),
        ((l = a || (a = {})).MINIMAL = "minimal"),
        (l.CUSTOM = "custom"),
        (l.DEFAULT = "default"),
        (l.WIDE = "wide");
      let C = Object.freeze({
        minimal: "contentColumnMinimal",
        custom: "contentColumnCustom",
        default: "contentColumnDefault",
        wide: "contentColumnWide",
      });
      function I(e) {
        let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
          i = u.useRef(null);
        return null == s
          ? null
          : (0, c.jsx)("div", {
              className: h()(g.toolsContainer, {
                [g.mobileToolsContainer]: t,
                [g.mobileSidebarTools]: t,
                [g.closeIconOnly]: !n,
                [g.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)(),
              }),
              ref: i,
              children: (0, c.jsx)(N.FocusRingScope, {
                containerRef: i,
                children: (0, c.jsx)("div", {
                  className: g.tools,
                  children: (0, c.jsx)(v.Z, {
                    className: h()({ [g.mobileToolsCloseIcon]: t }),
                    closeAction: s,
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
            notice: s,
            section: i,
            closeAction: r,
            sidebarTheme: l,
            contentType: o,
            scrollerRef: a,
            mobileSidebarOpen: d,
            toggleSidebar: x,
            hideSidebar: v = !1,
          } = e,
          T = u.useRef(null),
          A = u.useRef(null),
          E = (0, b.Z)(i),
          R = (0, N.useTransition)(
            v,
            {
              from: { position: "absolute", opacity: 0 },
              enter: { opacity: 1 },
              reverse: v,
              config: m.config.stiff,
            },
            "animate-always",
          ),
          j = u.useCallback(
            (e) => {
              (T.current = e), null != a && (a.current = e);
            },
            [a],
          );
        u.useLayoutEffect(() => {
          null != T.current && E !== i && T.current.scrollTo({ to: 0 });
        }, [i, E, T]);
        let M = (0, c.jsx)(I, {
          isMobile: p.tq,
          mobileSidebarOpen: d,
          closeAction: r,
        });
        function O() {
          return null == s
            ? null
            : (0, c.jsx)(
                N.SlideIn,
                {
                  className: h()(g.noticeRegion, {
                    [g.noticeRegionHiddenSidebar]: v,
                  }),
                  children: s,
                },
                i,
              );
        }
        return (0, c.jsx)(c.Fragment, {
          children: R((e, s) =>
            (0, c.jsxs)(m.animated.div, {
              style: e,
              className: g.standardSidebarView,
              children: [
                !s &&
                  (null == t
                    ? null
                    : (0, c.jsx)(N.ThemeProvider, {
                        theme: l,
                        children: (e) =>
                          (0, c.jsx)("div", {
                            className: h()(g.sidebarRegion, e, {
                              [g.flexFullWidth]: p.tq,
                              [g.hidden]: p.tq && !1 === d,
                            }),
                            children: (0, c.jsx)(N.AdvancedScrollerThin, {
                              className: g.sidebarRegionScroller,
                              fade: !0,
                              children: (0, c.jsxs)("nav", {
                                className: h()(g.sidebar, {
                                  [g.mobileSidebar]: p.tq,
                                }),
                                children: [
                                  p.tq &&
                                    (0, c.jsx)("div", {
                                      className: g.mobileSidebarHeader,
                                      children: M,
                                    }),
                                  t,
                                ],
                              }),
                            }),
                          }),
                      })),
                (function () {
                  let e = null != x && null != r && d,
                    t =
                      p.tq &&
                      (0, c.jsxs)("div", {
                        className: h()(g.mobileContentHeader, {
                          [g.hideHamburger]: !e,
                        }),
                        children: [e && (0, c.jsx)(f.r, { onClick: x }), M],
                      });
                  if ("custom" === o)
                    return (0, c.jsxs)(S.W, {
                      component: "div",
                      className: g.contentRegion,
                      children: [t, n, !p.tq && M, O()],
                    });
                  let s = C[null != o ? o : "default"];
                  return (0, c.jsxs)(S.W, {
                    component: "div",
                    className: h()(g.contentRegion, {
                      [g.hidden]: p.tq && !0 === d,
                    }),
                    children: [
                      (0, c.jsxs)("div", {
                        className: g.contentTransitionWrap,
                        children: [
                          t,
                          (0, c.jsxs)(N.AdvancedScrollerAuto, {
                            className: h()(
                              g.contentRegionScroller,
                              v
                                ? g.contentRegionHiddenSidebar
                                : g.contentRegionShownSidebar,
                            ),
                            ref: j,
                            children: [
                              (0, c.jsx)(_.Provider, {
                                value: T.current,
                                children: (0, c.jsx)(N.TabBar.Panel, {
                                  id: i,
                                  className: h()(g.contentColumn, g[s], {
                                    [g.mobileContent]: p.tq,
                                  }),
                                  ref: A,
                                  style: p.tq
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: v
                                    ? n
                                    : (0, c.jsx)(N.FocusRingScope, {
                                        containerRef: A,
                                        children: n,
                                      }),
                                }),
                              }),
                              !p.tq && M,
                            ],
                          }),
                        ],
                      }),
                      O(),
                    ],
                  });
                })(),
              ],
            }),
          ),
        });
      };
    },
    927359: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
        a: function () {
          return s;
        },
      }),
        n(411104);
      var s,
        i,
        r = n(774078),
        l = n(55935),
        o = n(689938);
      function a(e, t) {
        let n;
        switch (t) {
          case 0:
            n = {
              days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_DAYS_SHORT,
              hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_HOURS_SHORT,
              minutes:
                o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_MINUTES_SHORT,
            };
            break;
          case 1:
            n = {
              days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_DAYS,
              hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_HOURS,
              minutes: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_LEFT_MINUTES,
            };
            break;
          case 2:
            n = {
              days: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_DAYS,
              hours: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_HOURS,
              minutes: o.Z.Messages.FRACTIONAL_PREMIUM_DURATION_ENDS_IN_MINUTES,
            };
            break;
          default:
            throw Error(
              "Unknown messageType (".concat(t, ") when rendering time left"),
            );
        }
        let s = (0, r.Z)(e.toDate(), 6e4);
        return (0, l.QX)(s, n);
      }
      ((i = s || (s = {}))[(i.SHORT_TIME_LEFT = 0)] = "SHORT_TIME_LEFT"),
        (i[(i.LONG_TIME_LEFT = 1)] = "LONG_TIME_LEFT"),
        (i[(i.ENDS_IN = 2)] = "ENDS_IN");
    },
    975298: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(411104);
      var s = n(470079),
        i = n(512722),
        r = n.n(i),
        l = n(913527),
        o = n.n(l),
        a = n(442837),
        c = n(496929),
        u = n(594174),
        d = n(78839),
        h = n(580130),
        m = n(122289),
        f = n(111361),
        p = n(981631),
        S = n(474936);
      function N(e) {
        let { forceFetch: t } = e,
          n = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
          i = (0, a.Wu)([h.Z], () => h.Z.getFractionalPremium(!1)),
          l = (0, a.e7)([d.ZP], () =>
            d.ZP.getMostRecentPremiumTypeSubscription(),
          ),
          [N, b] = s.useState({ fractionalState: S.a$.NONE, endsAt: o()(0) });
        return (
          s.useEffect(() => {
            if ((null != n && !!(0, f.I5)(n)) || !!t)
              (0, c.p0)({ entitlementType: p.qc2.FRACTIONAL_REDEMPTION });
          }, []),
          s.useEffect(() => {
            if (null == n || !(0, f.I5)(n) || 0 === i.length) {
              b({ fractionalState: S.a$.NONE, endsAt: o()(0) });
              return;
            }
            let e = i
              .filter((e) => null != e.endsAt && null != e.startsAt)
              .sort((e, t) =>
                (r()(
                  null != e.endsAt && null != t.endsAt,
                  "endsAt should not be null",
                ),
                e.endsAt < t.endsAt)
                  ? -1
                  : e.endsAt > t.endsAt
                    ? 1
                    : 0,
              );
            if ((e.reverse(), e.length !== i.length || null == e[0].endsAt)) {
              let e = Array.from(i.values()).map((e) => e.id),
                t =
                  "fractional redemption entitlements should have startsAt/endsAt";
              throw ((0, m.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            b({
              fractionalState: null != l ? S.a$.FP_SUB : S.a$.FP_ONLY,
              endsAt: o()(e[0].endsAt),
            });
          }, [n, i, l]),
          N
        );
      }
    },
    767870: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = n(735250),
        i = n(120356),
        r = n.n(i),
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
          color: i = "white",
          foreground: r,
          ...l
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, o.Z)({ ...l }),
          preserveAspectRatio: "none",
          width: t,
          height: n,
          viewBox: "0 0 14 15",
          className: r,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("defs", {
              children: (0, s.jsxs)("linearGradient", {
                id: u,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                children: [
                  (0, s.jsx)("stop", { offset: "0%", stopColor: "#8547C6" }),
                  (0, s.jsx)("stop", { offset: "50%", stopColor: "#B845C1" }),
                  (0, s.jsx)("stop", { offset: "100%", stopColor: "#AB5D8A" }),
                ],
              }),
            }),
            (0, s.jsxs)("linearGradient", {
              id: d,
              x1: "-4.95474",
              y1: "5.44067",
              x2: "11.2384",
              y2: "8.58386",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, s.jsx)("stop", { stopColor: "#8547C6" }),
                (0, s.jsx)("stop", { offset: "0.52899", stopColor: "#B845C1" }),
                (0, s.jsx)("stop", { offset: "1", stopColor: "#AB5D8A" }),
              ],
            }),
            (0, s.jsx)("path", {
              d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
              fill: i,
            }),
          ],
        });
      }
      function m(e) {
        let { className: t, endsAt: n } = e,
          i = (0, l.Z)(n, l.a.SHORT_TIME_LEFT);
        return (0, s.jsxs)("div", {
          className: r()(t, c.countDown),
          children: [
            (0, s.jsx)(h, {
              foreground: c.sparkleStar1,
              color: "url(#".concat(d, ")"),
            }),
            (0, s.jsx)(h, {
              foreground: c.sparkleStar2,
              color: "url(#".concat(u, ")"),
            }),
            (0, s.jsx)(a.mn, {
              text: i,
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
      var s = n(652874),
        i = n(731965);
      let r = (0, s.Z)(() => ({ query: "", isActive: !1, selected: null }));
      function l(e) {
        (0, i.j)(() => r.setState({ query: e }));
      }
      function o(e) {
        (0, i.j)(() => r.setState({ isActive: e }));
      }
      function a() {
        return r().query;
      }
    },
    126848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var s = n(735250);
      n(470079);
      var i = n(120356),
        r = n.n(i),
        l = n(442837),
        o = n(975298),
        a = n(650032),
        c = n(767870),
        u = n(104494),
        d = n(639119),
        h = n(655525),
        m = n(52188),
        f = n(248042),
        p = n(924540),
        S = n(351402),
        N = n(170671),
        b = n(474936),
        x = n(655580);
      function v(e) {
        let t,
          { decoration: n, label: i, isSelected: v } = e,
          { fractionalState: g, endsAt: T } = (0, o.Z)({ forceFetch: !0 }),
          _ = (0, d.N)(),
          A = (0, u.Ng)(),
          E = (0, f.Vi)(),
          C =
            (0, l.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) &&
            null == _ &&
            null == n,
          { enabled: I } = a._.useExperiment(
            { location: "UserSettingsPremiumLabel" },
            { autoTrackExposure: !1 },
          ),
          R = I && (null == _ ? void 0 : _.trial_id) === b.a7;
        return (
          (t =
            g !== b.a$.NONE
              ? (0, s.jsx)(c.Z, { className: "", endsAt: T })
              : E
                ? (0, s.jsx)(h.Z, {})
                : null != A
                  ? (0, s.jsx)(p.GN, {
                      isTabSelected: v,
                      userDiscount: A,
                      includesAmountOff: !1,
                    })
                  : null == _ || R
                    ? null != n
                      ? n
                      : C
                        ? (0, s.jsx)(m.k, { entryPoint: m.U.SettingsMenu })
                        : (0, s.jsx)(N.Z, { isSelected: v })
                    : (0, s.jsx)(p.$H, { isTabSelected: v, trialOffer: _ })),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: r()(x.premiumLabel, {
                  [x.selected]: (v || C) && !E,
                }),
                children: [i, t],
              }),
              (0, s.jsx)("div", {
                className: r()(x.background, {
                  [x.auPromo]: C && !v,
                  [x.auPromoSelected]: C && v,
                  [x.selectedBackground]: !C && !E && v,
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
      var s = n(735250),
        i = n(470079),
        r = n(442837),
        l = n(461745),
        o = n(663389),
        a = n(5967),
        c = n(996733),
        u = n(689938);
      function d(e) {
        let { style: t } = e,
          n = (0, c.Z7)(),
          d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
          }, []),
          h = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)("");
          }, []),
          m = i.useRef(null),
          f = (0, r.e7)([o.Z], () => o.Z.getSection());
        return (
          i.useEffect(() => {
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
          }, [f]),
          (0, s.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, s.jsx)(l.ZP, {
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
//# sourceMappingURL=f6bfbc88dce7cd828c11.js.map
