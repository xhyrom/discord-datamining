"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39337"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return I;
        },
        KQ: function () {
          return C;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return f;
        },
        m0: function () {
          return g;
        },
        rf: function () {
          return m;
        },
        tu: function () {
          return T;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var r = n(860911),
        i = n(477690),
        o = n(481060),
        a = n(911969),
        c = n(134432),
        l = n(703656),
        u = n(768581),
        s = n(981631),
        d = n(388032);
      let p = 0,
        { API_ENDPOINT: _, CDN_HOST: b } = window.GLOBAL_ENV;
      function g(e) {
        return e.id === p;
      }
      function C() {
        return { id: p, name: d.intl.string(d.t.E407b2) };
      }
      function T(e) {
        switch (e.id) {
          case 0:
            return o.GlobeEarthIcon;
          case 4:
            return o.TvIcon;
          case 5:
            return o.AnalyticsIcon;
          case 6:
            return o.GameControllerIcon;
          case 8:
            break;
          case 9:
            return o.FriendsIcon;
          case 10:
            return o.WrenchIcon;
        }
        return o.AsteriskIcon;
      }
      function I(e) {
        let { itemId: t, hash: n } = e,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          o = u.$k ? "webp" : "png";
        return null != b
          ? ""
              .concat(location.protocol, "//")
              .concat(b, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(_)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, o),
                "?",
              )
              .concat(r);
      }
      function m() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let r = e[n];
          t.searchParams.set(n, r);
        }
        let n = t.pathname + t.search,
          i = (0, r.Ui)(n, !1);
        (0, l.uL)(i);
      }
      let A = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function f(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case a.ee.YOUTUBE:
            let r = A(e.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return b;
          },
          goSearch: function () {
            return I;
          },
          goToAppDirectory: function () {
            return _;
          },
          goToApplication: function () {
            return g;
          },
          goToApplicationSection: function () {
            return C;
          },
          goToApplicationStoreSku: function () {
            return T;
          },
          goToCategory: function () {
            return m;
          },
          replaceAppDirectoryURLWith: function () {
            return A;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(749681),
        i = n(352057),
        o = n(703656),
        a = n(626135),
        c = n(34674),
        l = n(132871),
        u = n(272242),
        s = n(981631),
        d = n(49898),
        p = n(979007);
      let _ = (e) => {
          let {
            view: t = l.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: o,
            applicationSection: c,
            entrypoint: _,
            skuId: m,
          } = e;
          if ((0, i.K0)({ location: _.name })) {
            let e =
              null == o
                ? void 0
                : c === u.ApplicationDirectoryProfileSections.STORE
                  ? p.GlobalDiscoveryAppsSections.STORE
                  : p.GlobalDiscoveryAppsSections.ABOUT;
            (0, r.transitionToGlobalDiscovery)({
              tab: d.GlobalDiscoveryTab.APPS,
              applicationId: o,
              section: e,
              skuId: e === p.GlobalDiscoveryAppsSections.STORE ? m : void 0,
            });
            return;
          }
          let A = { ..._, pathname: window.location.pathname };
          switch (
            (a.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == A ? void 0 : A.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(A),
            null != n && (0, l.setGuildId)(n),
            t === l.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (t = l.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              b();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              I();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != c) {
                  if (
                    c === u.ApplicationDirectoryProfileSections.STORE &&
                    null != m
                  ) {
                    T({ applicationId: o, skuId: m });
                    break;
                  }
                  C({ applicationId: o, section: c });
                  break;
                }
                g({ applicationId: o });
              }
          }
        },
        b = () => {
          let e = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        g = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        C = (e) => {
          let { applicationId: t, section: n } = e,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: r,
          });
        },
        T = (e) => {
          let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: r,
          });
        },
        I = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            i = { previousView: (0, l.getCurrentView)() };
          null != e && r.set("q", e),
            null != t && r.set("category_id", t.toString()),
            null != n && r.set("page", n.toString()),
            (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: i,
            });
        },
        m = (e) => {
          let { categoryId: t } = e;
          I({ categoryId: null != t ? t : c.MU });
        },
        A = (e) => {
          let {
            location: { state: t },
          } = (0, o.s1)();
          (0, o.dL)(e, t);
        };
    },
    749681: function (e, t, n) {
      n.r(t),
        n.d(t, {
          transitionToGlobalDiscovery: function () {
            return d;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var r = n(859921),
        i = n(341907),
        o = n(703656),
        a = n(836768),
        c = n(49898),
        l = n(981631),
        u = n(979007),
        s = n(128449);
      function d(e) {
        let t = e.tab;
        switch ((a.Z.setState({ selectedTab: t }), t)) {
          case c.GlobalDiscoveryTab.SERVERS:
            var n, d;
            let p = e.selectedServersTab;
            return (
              null != p
                ? r.Z.setState({
                    selectedTab: p,
                    entrypoint:
                      null !== (n = e.entrypoint) && void 0 !== n
                        ? n
                        : s.Qq.UNKNOWN,
                  })
                : r.Z.setState({
                    entrypoint:
                      null !== (d = e.entrypoint) && void 0 !== d
                        ? d
                        : s.Qq.UNKNOWN,
                  }),
              (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
          case c.GlobalDiscoveryTab.APPS:
            if (null != e.applicationId) {
              if (e.section === u.GlobalDiscoveryAppsSections.STORE) {
                if (null != e.skuId)
                  return (0, o.uL)(
                    l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      e.applicationId,
                      e.skuId,
                    ),
                  );
                return (0, o.uL)(
                  l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    e.applicationId,
                    u.GlobalDiscoveryAppsSections.STORE,
                  ),
                );
              }
              return (0, o.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            }
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                "" !== e.query && t.set("q", e.query),
                null != e.categoryId &&
                  t.set("category_id", e.categoryId.toString()),
                null != e.page && t.set("page", e.page.toString()),
                (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: t.toString(),
                })
              );
            } else if (null != e.categoryId)
              return (0, o.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()),
              );
            else return (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS);
          case c.GlobalDiscoveryTab.QUESTS:
            return (0, i.navigateToQuestHome)(
              e.location,
              e.questContent,
              e.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(t),
            );
        }
      }
    },
    859921: function (e, t, n) {
      var r = n(972959);
      let i = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        o = (0, r.H)(() => i);
      t.Z = o;
    },
    671533: function (e, t, n) {
      n(411104);
      var r,
        i,
        o = n(200651);
      n(192379);
      var a = n(120356),
        c = n.n(a),
        l = n(325767),
        u = n(485270);
      ((i = r || (r = {})).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = "currentColor",
          direction: i,
          foreground: a,
          className: s,
          title: d,
          ...p
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, l.Z)(p),
          width: t,
          height: n,
          className: c()(
            s,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return u.left;
                case "RIGHT":
                  return u.right;
                case "UP":
                  return null;
                case "DOWN":
                  return u.down;
                case "UP_LEFT":
                  return u.upLeft;
                case "DOWN_RIGHT":
                  return u.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(i),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, o.jsx)("title", { children: d }) : null,
            (0, o.jsx)("polygon", {
              className: a,
              fill: r,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = r), (t.Z = s);
    },
    95648: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    410642: function (e, t, n) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    933078: function (e, t, n) {
      e.exports = {
        questionContainer: "questionContainer_b007eb",
        questionTitle: "questionTitle_b007eb",
        requirementContainer: "requirementContainer_b007eb",
        requirementIcon: "requirementIcon_b007eb",
        requirementText: "requirementText_b007eb",
        requirementSuccess: "requirementSuccess_b007eb",
        requirementFailure: "requirementFailure_b007eb",
        footnote: "footnote_b007eb",
      };
    },
    119866: function (e, t, n) {
      e.exports = {
        termsRow: "termsRow_bd5b94",
        termsRowContent: "termsRowContent_bd5b94",
        checkbox: "checkbox_bd5b94",
        verifyConfirmText: "verifyConfirmText_bd5b94",
        fieldBackground: "fieldBackground_bd5b94",
        termsFieldBody: "termsFieldBody_bd5b94",
        textInputFieldBodyInput: "textInputFieldBodyInput_bd5b94",
        paragraphFieldBody: "paragraphFieldBody_bd5b94",
        multipleChoiceIcon: "multipleChoiceIcon_bd5b94",
      };
    },
    767493: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeV2: "premiumTrialBadgeV2_b089d3",
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
    762042: function (e, t, n) {
      e.exports = {
        customCircleAnimation: "customCircleAnimation_b5369a",
        coachTipContainer: "coachTipContainer_b5369a",
        coachmarkArt: "coachmarkArt_b5369a",
        exitIcon: "exitIcon_b5369a",
        iconContainer: "iconContainer_b5369a",
        coachtipContent: "coachtipContent_b5369a",
        incentiveCoachtipContent: "incentiveCoachtipContent_b5369a",
        marketingBadgeTooltip: "marketingBadgeTooltip_b5369a",
        tooltipContent: "tooltipContent_b5369a",
        incentiveTooltipPointer: "incentiveTooltipPointer_b5369a",
        incentiveCoachtipContainer: "incentiveCoachtipContainer_b5369a",
        icon: "icon_b5369a",
        incentiveIcon: "incentiveIcon_b5369a",
        trialBadgeBackground: "trialBadgeBackground_b5369a",
        trialAckedBadge: "trialAckedBadge_b5369a",
        t4ACoachTipContainer: "t4ACoachTipContainer_b5369a",
        t4ACoachtipArtOuterContainer: "t4ACoachtipArtOuterContainer_b5369a",
        t4AMarketingBadgeTooltip: "t4AMarketingBadgeTooltip_b5369a",
        t4ACoachtipArtInnerContainer: "t4ACoachtipArtInnerContainer_b5369a",
        t4aCoachtipContent: "t4aCoachtipContent_b5369a",
      };
    },
    830164: function (e, t, n) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
        avatarDecoContainer: "avatarDecoContainer_ba5739",
        avatarDeco: "avatarDeco_ba5739",
        avatarDecoImage: "avatarDecoImage_ba5739",
      };
    },
    697303: function (e, t, n) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    844812: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    485270: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=f601f643303b82ec61ae.js.map
