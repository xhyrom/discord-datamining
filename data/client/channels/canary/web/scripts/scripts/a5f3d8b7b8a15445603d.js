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
          return y;
        },
        w6: function () {
          return C;
        },
      }),
        n(653041),
        n(390547),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(990547),
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
        v = n(981631),
        S = n(388032),
        x = n(583535);
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
        y = 2;
      function P(e) {
        var t, n;
        let { section: l, setPreventNavigation: r, scrollerRef: o } = e;
        (0, a.Z)({
          type: s.ImpressionTypes.PANE,
          name: null == l ? void 0 : l.impressionName,
          properties: null == l ? void 0 : l.impressionProperties,
        });
        let c =
            null !== (t = null == l ? void 0 : l.element) && void 0 !== t
              ? t
              : v.VqG,
          u =
            null !== (n = null == l ? void 0 : l.elementProps) && void 0 !== n
              ? n
              : {};
        return (0, i.jsx)(b.Z, {
          section: l.section,
          children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: r,
            refToScroller: o,
          }),
        });
      }
      class T extends l.PureComponent {
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
            ? (m.S.dispatch(v.CkL.SHAKE_APP, {
                duration: 300,
                intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + y, C)),
              m.S.dispatch(v.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = N), !0);
        }
        renderSidebar(e) {
          let {
              section: t,
              title: n,
              isUserSettingsSearchEnabled: l,
            } = this.props,
            s = e
              .flatMap((e) => e.newIndicatorDismissibleContentTypes)
              .filter((e) => null != e),
            r = null != t ? t : e[0].section;
          return (0, i.jsx)(u.ZP, {
            contentTypes: s,
            children: (t) => {
              let { visibleContent: s } = t;
              return (0, i.jsxs)(o.TabBar, {
                selectedItem: r,
                onItemSelect: this.handleSetSection,
                orientation: "vertical",
                "aria-label": n,
                children: [
                  l ? (0, i.jsx)(h.Z, { style: x.searchBar }) : null,
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
                        let l =
                          null !== (n = e.element) && void 0 !== n ? n : v.VqG;
                        return (0, i.jsx)(l, {}, t);
                      default:
                        return this.renderSettingsSectionTabBarItem(
                          e,
                          r === e.section,
                          s,
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
          let { stores: n, element: l } = e.notice;
          return null == n || n.some((e) => e.showNotice())
            ? (0, i.jsx)(l, { theme: t })
            : null;
        }
        render() {
          var e;
          let {
              sidebarTheme: t,
              section: n,
              title: l,
              onClose: s,
              hideSidebar: r,
            } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
          if (null == a || null == n) return null;
          let u =
            null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) &&
            void 0 !== e
              ? e
              : l;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c.yY, { location: l, subsection: u }),
              (0, i.jsx)(f.ZP, {
                sidebarTheme: t,
                scrollerRef: this.scrollerRef,
                section: n,
                sidebar: this.renderSidebar(o),
                content: (0, i.jsx)(P, {
                  section: a,
                  setPreventNavigation: this.setPreventNavigation,
                  scrollerRef: this.scrollerRef,
                }),
                mobileSidebarOpen: this.state.sidebarOpen,
                hideSidebar: r,
                toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                contentType: a.type,
                notice: this.renderNotice(a),
                closeAction: null != s ? this.handleClose : void 0,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "_unmounted", !1),
            g(this, "_intensity", N),
            g(this, "_subscribedStores", []),
            g(this, "scrollerRef", l.createRef()),
            g(this, "state", {
              ...j,
              sidebarOpen:
                this.props.section !== v.oAB.SUBSCRIPTIONS &&
                this.props.section !== v.oAB.PROFILE_CUSTOMIZATION,
            }),
            g(this, "setPreventNavigation", (e, t) => {
              this.setState({
                shouldPreventNavigation: e,
                onPreventNavigation: t,
              });
            }),
            g(this, "handleSetSection", (e) => {
              let { onSetSection: t, sections: n } = this.props,
                { shouldPreventNavigation: i, onPreventNavigation: l } =
                  this.state,
                s = () => {
                  var i;
                  null == t || t(e);
                  let { notice: l } =
                      null !== (i = n.find((t) => e === t.section)) &&
                      void 0 !== i
                        ? i
                        : {},
                    s = null != l ? l.stores : null;
                  null != s &&
                    s.forEach((e) => {
                      !this._subscribedStores.includes(e) &&
                        (e.addChangeListener(this.handleNoticeStoreUpdate),
                        this._subscribedStores.push(e));
                    }),
                    this.setState({ ...j, sidebarOpen: !1 });
                };
              this.validNavigation() &&
                !i &&
                (s(),
                p.Z.addBreadcrumb({
                  category: "settings",
                  message: "Set section: ".concat(e),
                })),
                i && null != l && l(s);
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
                  section: l,
                  label: s = null,
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
                : l === v.oAB.ACCOUNT && this.props.isEligibleForPomelo
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
                                text: S.intl.string(S.t.y2b7CA),
                              }))
                      : null != h
                        ? (j = h)
                        : null != f &&
                          f > 0 &&
                          (j = (0, i.jsx)(o.NumberBadge, { count: f }));
              let N =
                l === v.oAB.PREMIUM
                  ? (0, i.jsx)(d.Z, { label: s, isSelected: t, decoration: j })
                  : null == j
                    ? s
                    : (0, i.jsxs)("div", {
                        className: x.tabBarItemContainer,
                        children: [s, j],
                      });
              return (0, i.jsx)(
                o.TabBar.Item,
                {
                  color: u,
                  id: l,
                  onClick: c,
                  className: m,
                  "aria-label": a,
                  children: N,
                },
                l,
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
          return P;
        },
        Xi: function () {
          return y;
        },
        bT: function () {
          return a;
        },
      });
      var i,
        l,
        s,
        r,
        o,
        a,
        c = n(200651),
        u = n(192379),
        d = n(120356),
        h = n.n(d),
        m = n(666912),
        p = n(608863),
        b = n(873546),
        f = n(215569),
        v = n(481060),
        S = n(110924),
        x = n(358085),
        g = n(425493),
        j = n(670189);
      let N = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        C = u.createContext(null);
      class y extends (o = u.PureComponent) {
        renderContent() {
          let { scrollerRef: e, ...t } = this.props;
          return (0, c.jsx)("div", {
            className: j.customContainer,
            children: (0, c.jsx)(v.ListAuto, {
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
      function P(e) {
        let { children: t } = e;
        return (0, c.jsx)("div", {
          className: j.customColumn,
          children: (0, c.jsx)("div", {
            className: j.customContainer,
            children: (0, c.jsx)(v.ScrollerAuto, {
              className: h()(j.customScroller, j.contentRegionScroller),
              children: t,
            }),
          }),
        });
      }
      (s = { paddingTop: 60, paddingBottom: 60 }),
        (l = "defaultProps") in (i = y)
          ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = s),
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
          l = u.useRef(null);
        return null == i
          ? null
          : (0, c.jsx)("div", {
              className: h()(j.toolsContainer, {
                [j.mobileToolsContainer]: t,
                [j.mobileSidebarTools]: t,
                [j.closeIconOnly]: !n,
                [j.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)(),
              }),
              ref: l,
              children: (0, c.jsx)(v.FocusRingScope, {
                containerRef: l,
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
            section: l,
            closeAction: s,
            sidebarTheme: r,
            contentType: o,
            scrollerRef: a,
            mobileSidebarOpen: d,
            toggleSidebar: x,
            hideSidebar: g = !1,
          } = e,
          N = u.useRef(null),
          y = u.useRef(null),
          P = (0, S.Z)(l),
          I = (0, v.useTransition)(
            g,
            {
              from: { position: "absolute", opacity: 0 },
              enter: { opacity: 1 },
              reverse: g,
              config: m.config.stiff,
            },
            "animate-always",
          ),
          R = u.useCallback(
            (e) => {
              (N.current = e), null != a && (a.current = e);
            },
            [a],
          );
        u.useLayoutEffect(() => {
          null != N.current && P !== l && N.current.scrollTo({ to: 0 });
        }, [l, P, N]);
        let A = (0, c.jsx)(E, {
          isMobile: b.tq,
          mobileSidebarOpen: d,
          closeAction: s,
        });
        function Z() {
          return null == i
            ? null
            : (0, c.jsx)(
                v.SlideIn,
                {
                  className: h()(j.noticeRegion, {
                    [j.noticeRegionHiddenSidebar]: g,
                  }),
                  children: i,
                },
                l,
              );
        }
        return (0, c.jsx)(c.Fragment, {
          children: I((e, i) =>
            (0, c.jsxs)(m.animated.div, {
              style: e,
              className: j.standardSidebarView,
              children: [
                !i &&
                  (null == t
                    ? null
                    : (0, c.jsx)(v.ThemeProvider, {
                        theme: r,
                        children: (e) =>
                          (0, c.jsx)("div", {
                            className: h()(j.sidebarRegion, e, {
                              [j.flexFullWidth]: b.tq,
                              [j.hidden]: b.tq && !1 === d,
                            }),
                            children: (0, c.jsx)(v.AdvancedScrollerThin, {
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
                  let e = null != x && null != s && d,
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
                          (0, c.jsxs)(v.AdvancedScrollerAuto, {
                            className: h()(
                              j.contentRegionScroller,
                              g
                                ? j.contentRegionHiddenSidebar
                                : j.contentRegionShownSidebar,
                            ),
                            ref: R,
                            children: [
                              (0, c.jsx)(C.Provider, {
                                value: N.current,
                                children: (0, c.jsx)(v.TabBar.Panel, {
                                  id: l,
                                  className: h()(j.contentColumn, j[i], {
                                    [j.mobileContent]: b.tq,
                                  }),
                                  ref: y,
                                  style: b.tq
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: g
                                    ? n
                                    : (0, c.jsx)(v.FocusRingScope, {
                                        containerRef: y,
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
          return s;
        },
        Z7: function () {
          return r;
        },
        yN: function () {
          return l;
        },
      });
      let i = (0, n(972959).H)(() => ({
        query: "",
        isActive: !1,
        selected: null,
      }));
      function l(e) {
        i.setState({ query: e });
      }
      function s(e) {
        i.setState({ isActive: e });
      }
      function r() {
        return i.useField("query");
      }
    },
    126848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        s = n.n(l),
        r = n(442837),
        o = n(650032),
        a = n(104494),
        c = n(639119),
        u = n(655525),
        d = n(52188),
        h = n(346497),
        m = n(924540),
        p = n(351402),
        b = n(170671),
        f = n(474936),
        v = n(913074);
      function S(e) {
        let t,
          { decoration: n, label: l, isSelected: S } = e,
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
          y = C && (null == x ? void 0 : x.trial_id) === f.a7;
        return (
          (t = j
            ? (0, i.jsx)(u.Z, {})
            : null != g
              ? (0, i.jsx)(m.GN, {
                  isTabSelected: S,
                  userDiscount: g,
                  includesAmountOff: !1,
                })
              : null == x || y
                ? null != n
                  ? n
                  : N
                    ? (0, i.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                    : (0, i.jsx)(b.Z, { isSelected: S })
                : (0, i.jsx)(m.$H, { isTabSelected: S, trialOffer: x })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: s()(v.premiumLabel, {
                  [v.selected]: (S || N) && !j,
                }),
                children: [l, t],
              }),
              (0, i.jsx)("div", {
                className: s()(v.background, {
                  [v.auPromo]: N && !S,
                  [v.auPromoSelected]: N && S,
                  [v.selectedBackground]: !N && !j && S,
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
        l = n(192379),
        s = n(442837),
        r = n(461745),
        o = n(663389),
        a = n(5967),
        c = n(996733),
        u = n(388032);
      function d(e) {
        let { style: t } = e,
          n = (0, c.Z7)(),
          d = l.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
          }, []),
          h = l.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)("");
          }, []),
          m = l.useRef(null),
          p = (0, s.e7)([o.Z], () => o.Z.getSection());
        return (
          l.useEffect(() => {
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
              placeholder: u.intl.string(u.t["5h0QOD"]),
              className: t,
              inputProps: {
                "aria-label": u.intl.string(u.t.pk9BWV),
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
//# sourceMappingURL=a5f3d8b7b8a15445603d.js.map
