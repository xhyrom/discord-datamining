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
        f = n(410575),
        b = n(493544),
        S = n(981631),
        v = n(689938),
        x = n(598627);
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
        P = 2;
      function T(e) {
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
      class E extends s.PureComponent {
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
              (this._intensity = Math.min(this._intensity + P, C)),
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
                content: (0, i.jsx)(T, {
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
      t.ZP = E;
    },
    493544: function (e, t, n) {
      n.d(t, {
        ID: function () {
          return C;
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
        c = n(735250),
        u = n(470079),
        d = n(120356),
        h = n.n(d),
        m = n(180081),
        p = n(608863),
        f = n(873546),
        b = n(215569),
        S = n(481060),
        v = n(110924),
        x = n(358085),
        g = n(792125),
        N = n(425493),
        j = n(326617);
      let C = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
        P = u.createContext(null);
      class T extends (o = u.PureComponent) {
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
      function E(e) {
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
      function R(e) {
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
                  children: (0, c.jsx)(N.Z, {
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
            hideSidebar: N = !1,
          } = e,
          C = u.useRef(null),
          T = u.useRef(null),
          E = (0, v.Z)(s),
          I = (0, S.useTransition)(
            N,
            {
              from: { position: "absolute", opacity: 0 },
              enter: { opacity: 1 },
              reverse: N,
              config: m.config.stiff,
            },
            "animate-always",
          ),
          A = u.useCallback(
            (e) => {
              (C.current = e), null != a && (a.current = e);
            },
            [a],
          );
        u.useLayoutEffect(() => {
          null != C.current && E !== s && C.current.scrollTo({ to: 0 });
        }, [s, E, C]);
        let Z = (0, c.jsx)(R, {
          isMobile: f.tq,
          mobileSidebarOpen: d,
          closeAction: l,
        });
        function O() {
          return null == i
            ? null
            : (0, c.jsx)(
                S.SlideIn,
                {
                  className: h()(j.noticeRegion, {
                    [j.noticeRegionHiddenSidebar]: N,
                  }),
                  children: i,
                },
                s,
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
                    : (0, c.jsx)("div", {
                        className: h()(j.sidebarRegion, (0, g.Q)(r), {
                          [j.flexFullWidth]: f.tq,
                          [j.hidden]: f.tq && !1 === d,
                        }),
                        children: (0, c.jsx)(S.AdvancedScrollerThin, {
                          className: j.sidebarRegionScroller,
                          fade: !0,
                          children: (0, c.jsxs)("nav", {
                            className: h()(j.sidebar, {
                              [j.mobileSidebar]: f.tq,
                            }),
                            children: [
                              f.tq &&
                                (0, c.jsx)("div", {
                                  className: j.mobileSidebarHeader,
                                  children: Z,
                                }),
                              t,
                            ],
                          }),
                        }),
                      })),
                (function () {
                  let e = null != x && null != l && d,
                    t =
                      f.tq &&
                      (0, c.jsxs)("div", {
                        className: h()(j.mobileContentHeader, {
                          [j.hideHamburger]: !e,
                        }),
                        children: [e && (0, c.jsx)(p.r, { onClick: x }), Z],
                      });
                  if ("custom" === o)
                    return (0, c.jsxs)(b.W, {
                      component: "div",
                      className: j.contentRegion,
                      children: [t, n, !f.tq && Z, O()],
                    });
                  let i = y[null != o ? o : "default"];
                  return (0, c.jsxs)(b.W, {
                    component: "div",
                    className: h()(j.contentRegion, {
                      [j.hidden]: f.tq && !0 === d,
                    }),
                    children: [
                      (0, c.jsxs)("div", {
                        className: j.contentTransitionWrap,
                        children: [
                          t,
                          (0, c.jsxs)(S.AdvancedScrollerAuto, {
                            className: h()(
                              j.contentRegionScroller,
                              N
                                ? j.contentRegionHiddenSidebar
                                : j.contentRegionShownSidebar,
                            ),
                            ref: A,
                            children: [
                              (0, c.jsx)(P.Provider, {
                                value: C.current,
                                children: (0, c.jsx)(S.TabBar.Panel, {
                                  id: s,
                                  className: h()(j.contentColumn, j[i], {
                                    [j.mobileContent]: f.tq,
                                  }),
                                  ref: T,
                                  style: f.tq
                                    ? { maxWidth: window.innerWidth }
                                    : void 0,
                                  children: N
                                    ? n
                                    : (0, c.jsx)(S.FocusRingScope, {
                                        containerRef: T,
                                        children: n,
                                      }),
                                }),
                              }),
                              !f.tq && Z,
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
        f = n(170671),
        b = n(474936),
        S = n(840309);
      function v(e) {
        let t,
          { decoration: n, label: s, isSelected: v } = e,
          x = (0, c.N)(),
          g = (0, a.Ng)(),
          N = (0, h.Vi)(),
          j =
            (0, r.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) &&
            null == x &&
            null == n,
          { enabled: C } = o._.useExperiment(
            { location: "UserSettingsPremiumLabel" },
            { autoTrackExposure: !1 },
          ),
          P = C && (null == x ? void 0 : x.trial_id) === b.a7;
        return (
          (t = N
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
                  : j
                    ? (0, i.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                    : (0, i.jsx)(f.Z, { isSelected: v })
                : (0, i.jsx)(m.$H, { isTabSelected: v, trialOffer: x })),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: l()(S.premiumLabel, {
                  [S.selected]: (v || j) && !N,
                }),
                children: [s, t],
              }),
              (0, i.jsx)("div", {
                className: l()(S.background, {
                  [S.auPromo]: j && !v,
                  [S.auPromoSelected]: j && v,
                  [S.selectedBackground]: !j && !N && v,
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
          return h;
        },
      });
      var i = n(735250),
        s = n(470079),
        l = n(442837),
        r = n(461745),
        o = n(663389),
        a = n(5967),
        c = n(996733),
        u = n(981631),
        d = n(689938);
      function h(e) {
        let { style: t } = e,
          n = (0, c.Z7)(),
          h = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
          }, []),
          m = s.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)("");
          }, []),
          p = s.useRef(null),
          f = (0, l.e7)([o.Z], () => o.Z.getSection());
        return (
          s.useEffect(() => {
            let e = (e) => {
              var t;
              let n = p.current,
                i =
                  null === (t = (0, a.uB)(e)) || void 0 === t
                    ? void 0
                    : t.activeElement;
              if (!(i !== p.current && (0, a.VG)(i)))
                f !== u.oAB.PROFILE_CUSTOMIZATION && (null == n || n.focus());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [f]),
          (0, i.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, i.jsx)(r.ZP, {
              ref: p,
              size: r.ZP.Sizes.MEDIUM,
              query: n,
              onClear: m,
              onQueryChange: c.yN,
              placeholder: d.Z.Messages.SEARCH,
              className: t,
              inputProps: {
                "aria-label": d.Z.Messages.USER_SETTINGS_SEARCH_BAR,
                "aria-expanded": !0,
                onFocus: (e) => h(!0, e),
                onBlur: (e) => h(!1, e),
              },
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=8e9df0026a8ccee9fef1.js.map
