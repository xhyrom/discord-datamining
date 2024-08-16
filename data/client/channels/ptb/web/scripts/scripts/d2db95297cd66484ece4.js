"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71643"],
  {
    349445: function (e, t, n) {
      n.d(t, {
        SV: function () {
          return a;
        },
      });
      var i = n(470079);
      let o = (0, i.createContext)(null),
        r = { didCatch: !1, error: null };
      class a extends i.Component {
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = r);
        }
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, o = Array(i), a = 0;
              a < i;
              a++
            )
              o[a] = arguments[a];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: o, reason: "imperative-api" }),
              this.setState(r);
          }
        }
        componentDidCatch(e, t) {
          var n, i;
          null === (n = (i = this.props).onError) ||
            void 0 === n ||
            n.call(i, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
          if (
            n &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
              );
            })(e.resetKeys, i)
          ) {
            var o, a;
            null === (o = (a = this.props).onReset) ||
              void 0 === o ||
              o.call(a, { next: i, prev: e.resetKeys, reason: "keys" }),
              this.setState(r);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: r,
            } = this.props,
            { didCatch: a, error: c } = this.state,
            l = e;
          if (a) {
            let e = { error: c, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(r)) l = r;
            else if ("function" == typeof t) l = t(e);
            else if (n) l = (0, i.createElement)(n, e);
            else throw c;
          }
          return (0, i.createElement)(
            o.Provider,
            {
              value: {
                didCatch: a,
                error: c,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            l,
          );
        }
      }
    },
    781402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(470079);
      function o() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: n, children: o }) => {
            let r = (0, i.useRef)();
            return (
              !r.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !n && (n = () => t)),
                (r.current = n())),
              (0, i.createElement)(e.Provider, { value: r.current }, o)
            );
          },
          useStore: (t, n = Object.is) => {
            let o = (0, i.useContext)(e);
            if (!o)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return o(t, n);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t],
            );
          },
        };
      }
    },
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return p;
        },
        KQ: function () {
          return b;
        },
        MU: function () {
          return d;
        },
        m0: function () {
          return m;
        },
        rf: function () {
          return h;
        },
        tu: function () {
          return f;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var i = n(860911),
        o = n(477690),
        r = n(481060),
        a = n(134432),
        c = n(703656),
        l = n(768581),
        s = n(981631),
        u = n(689938);
      let d = 0,
        { API_ENDPOINT: _, CDN_HOST: g } = window.GLOBAL_ENV;
      function m(e) {
        return e.id === d;
      }
      function b() {
        return { id: d, name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function f(e) {
        switch (e.id) {
          case 0:
            return r.GlobeEarthIcon;
          case 4:
            return r.TvIcon;
          case 5:
            return r.AnalyticsIcon;
          case 6:
            return r.GameControllerIcon;
          case 8:
            break;
          case 9:
            return r.FriendsIcon;
          case 10:
            return r.WrenchIcon;
        }
        return r.AsteriskIcon;
      }
      function p(e) {
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, a.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, a.x_)(),
            ).toString(),
          }).toString(),
          r = l.$k ? "webp" : "png";
        return null != g
          ? ""
              .concat(location.protocol, "//")
              .concat(g, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(r, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(_)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
                "?",
              )
              .concat(i);
      }
      function h() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let i = e[n];
          t.searchParams.set(n, i);
        }
        let n = t.pathname + t.search,
          o = (0, i.U)(n, !1);
        (0, c.uL)(o);
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return u;
          },
          goSearch: function () {
            return m;
          },
          goToAppDirectory: function () {
            return s;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return _;
          },
          goToApplicationStoreSku: function () {
            return g;
          },
          goToCategory: function () {
            return b;
          },
          replaceAppDirectoryURLWith: function () {
            return f;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(703656),
        o = n(626135),
        r = n(34674),
        a = n(132871),
        c = n(272242),
        l = n(981631);
      let s = (e) => {
          let {
              view: t = a.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: r,
              entrypoint: s,
              skuId: b,
            } = e,
            f = { ...s, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == f ? void 0 : f.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(f),
            null != n && (0, a.setGuildId)(n),
            t === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = a.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              u();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              m();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != r) {
                  if (
                    r === c.ApplicationDirectoryProfileSections.STORE &&
                    null != b
                  ) {
                    g({ applicationId: i, skuId: b });
                    break;
                  }
                  _({ applicationId: i, section: r });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        u = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        _ = (e) => {
          let { applicationId: t, section: n } = e,
            o = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: o,
          });
        },
        g = (e) => {
          let { applicationId: t, skuId: n } = e,
            o = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: o,
          });
        },
        m = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = new URLSearchParams(),
            r = { previousView: (0, a.getCurrentView)() };
          null != e && o.set("q", e),
            null != t && o.set("category_id", t.toString()),
            null != n && o.set("page", n.toString()),
            (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: o.toString(),
              state: r,
            });
        },
        b = (e) => {
          let { categoryId: t } = e;
          m({ categoryId: null != t ? t : r.MU });
        },
        f = (e) => {
          let {
            location: { state: t },
          } = (0, i.s1)();
          (0, i.dL)(e, t);
        };
    },
    863750: function (e, t, n) {
      n(47120);
      var i,
        o = n(442837),
        r = n(570140);
      function a(e, t, n) {
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
      let c = {
          disable_alpha_voice_panel:
            "Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It's not feature complete so if there's something you are missing, or you find a problem, you can disable it here.",
          enable_recently_active: "Enable recently active channels",
          happening_main_tab: "Enable Happening tab containing summaries",
          enable_recently_active_summaries:
            "Enable summaries in recently active view",
          disable_theme_key:
            "Disable reloading the entire app when the theme changes",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          cozy_header: "Cozy header",
          mobile_profile_effect_debug_controls:
            "mobile_profile_effect_debug_controls",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          nav_experiment_server_drawer_no_activity:
            "[NavI] Hide activity in server drawer",
          nav_experiment_you_bar_grounded: "[NavI] Grounded you bar",
          nav_experiment_you_bar_large_buttons:
            "[NavI] Small buttons in you bar",
          nav_experiment_you_bar_large_messages:
            "[NavI] Large avatars in messages",
          force_channel_list_v2: "Force channel list V2",
          shop_include_unpublished: "[Shop] show unpublished items in shop",
          disable_channel_list:
            "Disable channel list -- for performance testing. You probably don't want to turn this on, lol",
          show_icymi_debug_scores: "Show ICYMI debug scores",
          only_channel_screen:
            "Down with PanelsView, rely on only ChannelScreen!",
        },
        l = {};
      class s extends (i = o.ZP.DeviceSettingsStore) {
        getUserAgnosticState() {
          return { toggleStates: l };
        }
        initialize(e) {
          for (var t in c) {
            var n, i;
            let o =
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (n = e.toggleStates) || void 0 === n
                      ? void 0
                      : n[t]) &&
              void 0 !== i &&
              i;
            l[t] = o;
          }
        }
        get(e) {
          var t;
          return null !== (t = l[e]) && void 0 !== t && t;
        }
        set(e, t) {
          return (l[e] = t), t;
        }
        all() {
          return l;
        }
        allWithDescriptions() {
          return Object.entries(l).map((e) => {
            let [t, n] = e;
            return [t, n, c[t]];
          });
        }
      }
      a(s, "displayName", "DevToolsDesignTogglesStore"),
        a(s, "persistKey", "DevToolsDesignTogglesStore"),
        (t.Z = new s(r.Z, {
          DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            l[e.toggle] = e.value;
          },
        }));
    },
    238428: function (e, t, n) {
      n(442837), n(863750);
    },
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(913527),
        r = n.n(o),
        a = n(442837),
        c = n(481060),
        l = n(92114),
        s = n(776568),
        u = n(777861),
        d = n(9156),
        _ = n(621600),
        g = n(689938);
      function m(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: o, muteConfig: m } = (0, a.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          b = (0, u.U)(m);
        return null == n
          ? null
          : o
            ? (0, i.jsx)(c.MenuItem, {
                id: "unmute-guild",
                label: g.Z.Messages.UNMUTE_SERVER,
                subtext: b,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    _.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(c.MenuItem, {
                id: "mute-guild",
                label: g.Z.Messages.MUTE_SERVER,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    _.ZB.Muted,
                  ),
                children: (0, s.k)().map((e) => {
                  let { value: o, label: a } = e;
                  return (0, i.jsx)(
                    c.MenuItem,
                    {
                      id: "".concat(o),
                      label: a,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? r()().add(e, "second").toISOString() : null;
                          l.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            _.ZB.Muted,
                            t,
                          );
                        })(o),
                    },
                    o,
                  );
                }),
              });
      }
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return f;
        },
        OD: function () {
          return b;
        },
        W9: function () {
          return g;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        o = n(798140),
        r = n(9156),
        a = n(630388),
        c = n(709054),
        l = n(312400),
        s = n(981631),
        u = n(969943),
        d = n(526761),
        _ = n(689938);
      function g() {
        return [
          {
            label: _.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: u.Oe.MINUTES_15,
          },
          { label: _.Z.Messages.MUTE_DURATION_1_HOUR, value: u.Oe.HOURS_1 },
          { label: _.Z.Messages.MUTE_DURATION_3_HOURS, value: u.Oe.HOURS_3 },
          { label: _.Z.Messages.MUTE_DURATION_8_HOURS, value: u.Oe.HOURS_8 },
          { label: _.Z.Messages.MUTE_DURATION_24_HOURS, value: u.Oe.HOURS_24 },
          { label: _.Z.Messages.MUTE_DURATION_ALWAYS, value: u.Oe.ALWAYS },
        ];
      }
      let m = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function b(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
        return c.default.keys(e).filter((n) => {
          var i, r;
          let c = e[n].message_notifications !== s.bL.NULL,
            l =
              a.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (r = e[n].flags) && void 0 !== r ? r : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && l) ||
            (!t.ignoreNotificationSetting && c) ||
            (!t.ignoreMute && (0, o.m$)(e[n]))
          );
        });
      }
      function f(e) {
        let t = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return r;
        },
        YF: function () {
          return a;
        },
        pq: function () {
          return c;
        },
      });
      var i = n(630388),
        o = n(526761);
      function r(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, o.vc.UNREADS_ALL_MESSAGES, o.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let a = (e) =>
        i.M1(e, o.ic.UNREADS_ALL_MESSAGES, o.ic.UNREADS_ONLY_MENTIONS);
      function c(e, t) {
        return i.pj(a(e), t);
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        o,
        r = n(735250);
      n(470079);
      var a = n(120356),
        c = n.n(a),
        l = n(325767),
        s = n(24701);
      ((o = i || (i = {})).LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.UP = "UP"),
        (o.DOWN = "DOWN"),
        (o.UP_LEFT = "UP_LEFT"),
        (o.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: o,
          foreground: a,
          className: u,
          title: d,
          ..._
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(_),
          width: t,
          height: n,
          className: c()(
            u,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return s.left;
                case "RIGHT":
                  return s.right;
                case "UP":
                  return null;
                case "DOWN":
                  return s.down;
                case "UP_LEFT":
                  return s.upLeft;
                case "DOWN_RIGHT":
                  return s.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(o),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
              className: a,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = i), (t.Z = u);
    },
    912101: function (e, t, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (t.Z = i);
    },
    642769: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    148240: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    375294: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    235532: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    591318: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    598627: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    326617: function (e, t, n) {
      n.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    122967: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    471753: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    676648: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    74633: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    560814: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    72105: function (e, t, n) {
      e.exports = {
        statusWarningBlock: "statusWarningBlock_e45fae",
        statusWarningBlockWithCta: "statusWarningBlockWithCta_e45fae",
        horizontalStatusWarningBlock: "horizontalStatusWarningBlock_e45fae",
        verticalStatusWarningBlock: "verticalStatusWarningBlock_e45fae",
        ctaButtonContainer: "ctaButtonContainer_e45fae",
        ctaButton: "ctaButton_e45fae",
        ctaBlackButton: "ctaBlackButton_e45fae",
        ctaButtonText: "ctaButtonText_e45fae",
      };
    },
    47681: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    706767: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeIcon: "premiumTrialBadgeIcon_b089d3",
        premiumTrialTier0UnacknowledgedBadge:
          "premiumTrialTier0UnacknowledgedBadge_b089d3",
        premiumTrialTier2UnacknowledgedBadge:
          "premiumTrialTier2UnacknowledgedBadge_b089d3",
        premiumDiscountUnacknowledgedBadge:
          "premiumDiscountUnacknowledgedBadge_b089d3",
        premiumTrialAcknowledgedBadge: "premiumTrialAcknowledgedBadge_b089d3",
        premiumTrialBadgeSelected: "premiumTrialBadgeSelected_b089d3",
        premiumOfferBadgeCopy: "premiumOfferBadgeCopy_b089d3",
      };
    },
    447421: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    900601: function (e, t, n) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
    840309: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    440376: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    24701: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    697741: function (e, t, n) {
      n.d(t, {
        $: function () {
          return w;
        },
      });
      let i = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        o = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        r = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        c = "(" + r + "[aeiou]*)",
        l = RegExp("^" + a + "?" + c + a),
        s = RegExp("^" + a + "?" + c + a + c + "?$"),
        u = RegExp("^" + a + "?(" + c + a + "){2,}"),
        d = RegExp("^" + a + "?" + r),
        _ = RegExp("^" + a + r + "[^aeiouwxy]$"),
        g = /ll$/,
        m = /^(.+?)e$/,
        b = /^(.+?)y$/,
        f = /^(.+?(s|t))(ion)$/,
        p = /^(.+?)(ed|ing)$/,
        h = /(at|bl|iz)$/,
        v = /^(.+?)eed$/,
        S = /^.+?[^s]s$/,
        E = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        C =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        R =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function w(e) {
        let t,
          n = String(e).toLowerCase();
        if (n.length < 3) return n;
        let r = !1;
        return (
          121 === n.codePointAt(0) && ((r = !0), (n = "Y" + n.slice(1))),
          E.test(n) ? (n = n.slice(0, -2)) : S.test(n) && (n = n.slice(0, -1)),
          (t = v.exec(n))
            ? l.test(t[1]) && (n = n.slice(0, -1))
            : (t = p.exec(n)) &&
              d.test(t[1]) &&
              ((n = t[1]),
              h.test(n)
                ? (n += "e")
                : I.test(n)
                  ? (n = n.slice(0, -1))
                  : _.test(n) && (n += "e")),
          (t = b.exec(n)) && d.test(t[1]) && (n = t[1] + "i"),
          (t = C.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]),
          (t = T.exec(n)) && l.test(t[1]) && (n = t[1] + o[t[2]]),
          (t = R.exec(n))
            ? u.test(t[1]) && (n = t[1])
            : (t = f.exec(n)) && u.test(t[1]) && (n = t[1]),
          (t = m.exec(n)) &&
            (u.test(t[1]) || (s.test(t[1]) && !_.test(t[1]))) &&
            (n = t[1]),
          g.test(n) && u.test(n) && (n = n.slice(0, -1)),
          r && (n = "y" + n.slice(1)),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=d2db95297cd66484ece4.js.map
