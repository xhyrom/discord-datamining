"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30608"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return m;
        },
        KQ: function () {
          return C;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return h;
        },
        m0: function () {
          return b;
        },
        rf: function () {
          return I;
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
        { API_ENDPOINT: _, CDN_HOST: g } = window.GLOBAL_ENV;
      function b(e) {
        return e.id === p;
      }
      function C() {
        return { id: p, name: d.intl.string(d.t.E407b2) };
      }
      function f(e) {
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
      function m(e) {
        let { itemId: t, hash: n } = e,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          o = u.$k ? "webp" : "png";
        return null != g
          ? ""
              .concat(location.protocol, "//")
              .concat(g, "/app-assets/application-directory/collection-items/")
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
      function I() {
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
      let T = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function h(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case a.ee.YOUTUBE:
            let r = T(e.url);
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
            return _;
          },
          goSearch: function () {
            return f;
          },
          goToAppDirectory: function () {
            return p;
          },
          goToApplication: function () {
            return g;
          },
          goToApplicationSection: function () {
            return b;
          },
          goToApplicationStoreSku: function () {
            return C;
          },
          goToCategory: function () {
            return m;
          },
          replaceAppDirectoryURLWith: function () {
            return I;
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
        d = n(49898);
      let p = (e) => {
          let {
            view: t = l.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: o,
            applicationSection: c,
            entrypoint: p,
            skuId: m,
          } = e;
          if ((0, i.r)({ location: p.name })) {
            (0, r.u)({ tab: d.F$.APPS, applicationId: o });
            return;
          }
          let I = { ...p, pathname: window.location.pathname };
          switch (
            (a.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == I ? void 0 : I.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(I),
            null != n && (0, l.setGuildId)(n),
            t === l.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (t = l.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              _();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              f();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != c) {
                  if (
                    c === u.ApplicationDirectoryProfileSections.STORE &&
                    null != m
                  ) {
                    C({ applicationId: o, skuId: m });
                    break;
                  }
                  b({ applicationId: o, section: c });
                  break;
                }
                g({ applicationId: o });
              }
          }
        },
        _ = () => {
          let e = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        g = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        b = (e) => {
          let { applicationId: t, section: n } = e,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: r,
          });
        },
        C = (e) => {
          let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: r,
          });
        },
        f = function () {
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
          f({ categoryId: null != t ? t : c.MU });
        },
        I = (e) => {
          let {
            location: { state: t },
          } = (0, o.s1)();
          (0, o.dL)(e, t);
        };
    },
    749681: function (e, t, n) {
      n.d(t, {
        u: function () {
          return s;
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
        u = n(128449);
      function s(e) {
        let t = e.tab;
        switch ((a.Z.setState({ selectedTab: t }), t)) {
          case c.F$.SERVERS:
            var n, s;
            let d = e.selectedServersTab;
            return (
              null != d
                ? r.Z.setState({
                    selectedTab: d,
                    entrypoint:
                      null !== (n = e.entrypoint) && void 0 !== n
                        ? n
                        : u.Qq.UNKNOWN,
                  })
                : r.Z.setState({
                    entrypoint:
                      null !== (s = e.entrypoint) && void 0 !== s
                        ? s
                        : u.Qq.UNKNOWN,
                  }),
              (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
          case c.F$.APPS:
            if (null != e.applicationId)
              return (0, o.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                t.set("q", e.query),
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
          case c.F$.QUESTS:
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
    352057: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
        r: function () {
          return o;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t, autoTrackExposure: n = !0 } = e,
          { enabled: i } = r.useExperiment(
            { location: t },
            { autoTrackExposure: n },
          );
        return i;
      }
      function o(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    128449: function (e, t, n) {
      n.d(t, {
        AF: function () {
          return _;
        },
        BP: function () {
          return s;
        },
        KL: function () {
          return p;
        },
        MU: function () {
          return l;
        },
        Qq: function () {
          return i;
        },
        q5: function () {
          return u;
        },
        t0: function () {
          return d;
        },
        vf: function () {
          return r;
        },
      }),
        n(47120);
      var r,
        i,
        o,
        a,
        c = n(70956);
      n(731455),
        ((o = r || (r = {})).FEATURED = "featured"),
        (o.GAMING = "gaming"),
        (o.MUSIC = "music"),
        (o.ENTERTAINMENT = "entertainment"),
        (o.TECH = "tech"),
        (o.EDUCATION = "education"),
        (o.HUBS = "hubs"),
        ((a = i || (i = {})).UNKNOWN = "unknown"),
        (a.GUILDS_BAR = "guilds_bar"),
        (a.RTC_PANEL = "rtc_panel"),
        (a.PROFILE = "profile"),
        (a.GAME_LINK = "game_link"),
        (a.EMBED = "embed");
      let l = new Set(["hubs"]),
        u = 12633 == n.j ? [] : null,
        s = "q",
        d = "c",
        p = "l",
        _ = 10 * c.Z.Millis.MINUTE;
    },
    859921: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = n(972959);
      let i = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
        }),
        o = (0, r.H)(() => i);
      function a() {
        o.setState(i);
      }
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
        u = n(865244);
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
    594045: function (e, t, n) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    729071: function (e, t, n) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    626166: function (e, t, n) {
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
    738912: function (e, t, n) {
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
    860553: function (e, t, n) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    526207: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, t, n) {
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
    938923: function (e, t, n) {
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
    226705: function (e, t, n) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        progressCricleBottomMargin: "progressCricleBottomMargin_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
        avatarDecoContainer: "avatarDecoContainer_ba5739",
        avatarDeco: "avatarDeco_ba5739",
        avatarDecoImage: "avatarDecoImage_ba5739",
      };
    },
    315566: function (e, t, n) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    704448: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    869042: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    865244: function (e, t, n) {
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
//# sourceMappingURL=81dc000bc2dd8aa38a59.js.map
