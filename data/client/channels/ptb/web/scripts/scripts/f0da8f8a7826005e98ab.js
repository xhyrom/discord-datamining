"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33053"],
  {
    503089: function (e, t, n) {
      n.d(t, {
        $x: function () {
          return j;
        },
        d7: function () {
          return T;
        },
        w6: function () {
          return C;
        },
      }),
        n(653041),
        n(390547),
        n(47120);
      var i = n(200651),
        s = n(192379),
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
        f = n(410575),
        b = n(493544),
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
      let N = Object.freeze({
          shouldPreventNavigation: !1,
          onPreventNavigation: null,
          sidebarOpen: !0,
        }),
        j = 1.4,
        C = 15,
        T = 2;
      function E(e) {
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
        return (0, i.jsx)(f.Z, {
          section: s.section,
          children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: r,
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
          t !== this.props.section && (this._intensity = j);
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
              (this._intensity = Math.min(this._intensity + T, C)),
              m.S.dispatch(S.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = j), !0);
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
                      case b.ID.HEADER:
                        return (0, i.jsx)(
                          o.TabBar.Header,
                          { children: e.label },
                          t,
                        );
                      case b.ID.DIVIDER:
                        return (0, i.jsx)(o.TabBar.Separator, {}, t);
                      case b.ID.CUSTOM:
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
              (0, i.jsx)(b.ZP, {
                sidebarTheme: t,
                scrollerRef: this.scrollerRef,
                section: n,
                sidebar: this.renderSidebar(o),
                content: (0, i.jsx)(E, {
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
            g(this, "_intensity", j),
            g(this, "_subscribedStores", []),
            g(this, "scrollerRef", s.createRef()),
            g(this, "state", {
              ...N,
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
                    this.setState({ ...N, sidebarOpen: !1 });
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
              if (!this._unmounted) (this._intensity = j), this.forceUpdate();
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
                  newIndicatorDismissibleContentTypes: f,
                  badgeCount: b,
                  searchFilterCount: g,
                } = e,
                N = null;
              null != g && g > 0
                ? (N = (0, i.jsx)(o.NumberBadge, {
                    count: g,
                    disableColor: !0,
                    className: x.searchFilterCount,
                  }))
                : s === S.oAB.ACCOUNT && this.props.isEligibleForPomelo
                  ? (N = (0, i.jsx)(o.CircleWarningIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: r.Z.colors.STATUS_WARNING.css,
                    }))
                  : null != e.decoration
                    ? (N = (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: e.decoration,
                      }))
                    : null != n && (null == f ? void 0 : f.includes(n)) && !t
                      ? (N =
                          null != p
                            ? p
                            : (0, i.jsx)(o.TextBadge, {
                                text: v.Z.Messages.NEW,
                              }))
                      : null != h
                        ? (N = h)
                        : null != b &&
                          b > 0 &&
                          (N = (0, i.jsx)(o.NumberBadge, { count: b }));
              let j =
                s === S.oAB.PREMIUM
                  ? (0, i.jsx)(d.Z, { label: l, isSelected: t, decoration: N })
                  : null == N
                    ? l
                    : (0, i.jsxs)("div", {
                        className: x.tabBarItemContainer,
                        children: [l, N],
                      });
              return (0, i.jsx)(
                o.TabBar.Item,
                {
                  color: u,
                  id: s,
                  onClick: c,
                  className: m,
                  "aria-label": a,
                  children: j,
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
          return j;
        },
        NM: function () {
          return E;
        },
        Xi: function () {
          return T;
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
        c = n(200651),
        u = n(192379),
        d = n(120356),
        h = n.n(d),
        m = n(100621),
        p = n(608863),
        f = n(873546),
        b = n(215569),
        S = n(481060),
        v = n(110924),
        x = n(358085),
        g = n(425493),
        N = n(156725);
      let j = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        C = u.createContext(null);
      class T extends (o = u.PureComponent) {
        renderContent() {
          let { scrollerRef: e, ...t } = this.props;
          return (0, c.jsx)("div", {
            className: N.customContainer,
            children: (0, c.jsx)(S.ListAuto, {
              ...t,
              className: h()(N.customScroller, N.contentRegionScroller),
              ref: e,
            }),
          });
        }
        render() {
          return (0, c.jsx)("div", {
            className: N.customColumn,
            children: this.renderContent(),
          });
        }
      }
      function E(e) {
        let { children: t } = e;
        return (0, c.jsx)("div", {
          className: N.customColumn,
          children: (0, c.jsx)("div", {
            className: N.customContainer,
            children: (0, c.jsx)(S.ScrollerAuto, {
              className: h()(N.customScroller, N.contentRegionScroller),
              children: t,
            }),
          }),
        });
      }
      (l = { paddingTop: 60, paddingBottom: 60 }),
        (s = "defaultProps") in (i = T)
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
              className: h()(N.toolsContainer, {
                [N.mobileToolsContainer]: t,
                [N.mobileSidebarTools]: t,
                [N.closeIconOnly]: !n,
                [N.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)(),
              }),
              ref: s,
              children: (0, c.jsx)(S.FocusRingScope, {
                containerRef: s,
                children: (0, c.jsx)("div", {
                  className: N.tools,
                  children: (0, c.jsx)(g.Z, {
                    className: h()({ [N.mobileToolsCloseIcon]: t }),
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
          j = u.useRef(null),
          T = u.useRef(null),
          E = (0, v.Z)(s),
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
              (j.current = e), null != a && (a.current = e);
            },
            [a],
          );
        u.useLayoutEffect(() => {
          null != j.current && E !== s && j.current.scrollTo({ to: 0 });
        }, [s, E, j]);
        let A = (0, c.jsx)(P, {
          isMobile: f.tq,
          mobileSidebarOpen: d,
          closeAction: l,
        });
        function Z() {
          return null == i
            ? null
            : (0, c.jsx)(
                S.SlideIn,
                {
                  className: h()(N.noticeRegion, {
                    [N.noticeRegionHiddenSidebar]: g,
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
              className: N.standardSidebarView,
              children: [
                !i &&
                  (null == t
                    ? null
                    : (0, c.jsx)(S.ThemeProvider, {
                        theme: r,
                        children: (e) =>
                          (0, c.jsx)("div", {
                            className: h()(N.sidebarRegion, e, {
                              [N.flexFullWidth]: f.tq,
                              [N.hidden]: f.tq && !1 === d,
                            }),
                            children: (0, c.jsx)(S.AdvancedScrollerThin, {
                              className: N.sidebarRegionScroller,
                              fade: !0,
                              children: (0, c.jsxs)("nav", {
                                className: h()(N.sidebar, {
                                  [N.mobileSidebar]: f.tq,
                                }),
                                children: [
                                  f.tq &&
                                    (0, c.jsx)("div", {
                                      className: N.mobileSidebarHeader,
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
                      f.tq &&
                      (0, c.jsxs)("div", {
                        className: h()(N.mobileContentHeader, {
                          [N.hideHamburger]: !e,
                        }),
                        children: [e && (0, c.jsx)(p.r, { onClick: x }), A],
                      });
                  if ("custom" === o)
                    return (0, c.jsxs)(b.W, {
                      component: "div",
                      className: N.contentRegion,
                      children: [t, n, !f.tq && A, Z()],
                    });
                  let i = y[null != o ? o : "default"];
                  return (0, c.jsxs)(b.W, {
                    component: "div",
                    className: h()(N.contentRegion, {
                      [N.hidden]: f.tq && !0 === d,
                    }),
                    children: [
                      (0, c.jsxs)("div", {
                        className: N.contentTransitionWrap,
                        children: [
                          t,
                          (0, c.jsxs)(S.AdvancedScrollerAuto, {
                            className: h()(
                              N.contentRegionScroller,
                              g
                                ? N.contentRegionHiddenSidebar
                                : N.contentRegionShownSidebar,
                            ),
                            ref: I,
                            children: [
                              (0, c.jsx)(C.Provider, {
                                value: j.current,
                                children: (0, c.jsx)(S.TabBar.Panel, {
                                  id: s,
                                  className: h()(N.contentColumn, N[i], {
                                    [N.mobileContent]: f.tq,
                                  }),
                                  ref: T,
                                  style: f.tq
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: g
                                    ? n
                                    : (0, c.jsx)(S.FocusRingScope, {
                                        containerRef: T,
                                        children: n,
                                      }),
                                }),
                              }),
                              !f.tq && A,
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
      var i = n(903797),
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
          return N;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(442837),
        o = n(927359),
        a = n(975298),
        c = n(650032),
        u = n(767870),
        d = n(104494),
        h = n(639119),
        m = n(655525),
        p = n(52188),
        f = n(248042),
        b = n(924540),
        S = n(351402),
        v = n(170671),
        x = n(474936),
        g = n(655580);
      function N(e) {
        let t,
          { decoration: n, label: s, isSelected: N } = e,
          { fractionalState: j, endsAt: C } = (0, a.Z)({ forceFetch: !0 }),
          T = (0, h.N)(),
          E = (0, d.Ng)(),
          y = (0, f.Vi)(),
          P =
            (0, r.e7)([S.Z], () => S.Z.isLocalizedPromoEnabled) &&
            null == T &&
            null == n,
          { enabled: R } = c._.useExperiment(
            { location: "UserSettingsPremiumLabel" },
            { autoTrackExposure: !1 },
          ),
          I = R && (null == T ? void 0 : T.trial_id) === x.a7;
        return (
          (t =
            j !== x.a$.NONE
              ? (0, i.jsx)(u.Z, {
                  className: "",
                  endsAt: C,
                  messageStyle: o.a.SHORT_TIME_LEFT,
                  showSparkles: !0,
                })
              : y
                ? (0, i.jsx)(m.Z, {})
                : null != E
                  ? (0, i.jsx)(b.GN, {
                      isTabSelected: N,
                      userDiscount: E,
                      includesAmountOff: !1,
                    })
                  : null == T || I
                    ? null != n
                      ? n
                      : P
                        ? (0, i.jsx)(p.k, { entryPoint: p.U.SettingsMenu })
                        : (0, i.jsx)(v.Z, { isSelected: N })
                    : (0, i.jsx)(b.$H, { isTabSelected: N, trialOffer: T })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: l()(g.premiumLabel, {
                  [g.selected]: (N || P) && !y,
                }),
                children: [s, t],
              }),
              (0, i.jsx)("div", {
                className: l()(g.background, {
                  [g.auPromo]: P && !N,
                  [g.auPromoSelected]: P && N,
                  [g.selectedBackground]: !P && !y && N,
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
      var i = n(200651),
        s = n(192379),
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
//# sourceMappingURL=f0da8f8a7826005e98ab.js.map
