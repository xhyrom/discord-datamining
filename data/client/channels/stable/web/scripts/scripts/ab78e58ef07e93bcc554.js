"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10837"],
  {
    45493: function (e, t, n) {
      var o = n(987170);
      t.Z = (0, o.Z)({
        kind: "user",
        id: "2023-03_aa_user_segment_filter",
        label: "AA test to validate segmentation filter",
        defaultConfig: { isEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "AA test enabled. Noop on UI effect.",
            config: { isEnabled: !0 },
          },
        ],
      });
    },
    989804: function (e, t, n) {
      n.r(t);
      var o = n(735250),
        a = n(470079),
        c = n(442837),
        i = n(37234),
        r = n(230711),
        l = n(410575),
        s = n(503089),
        u = n(110924),
        d = n(100527),
        _ = n(367907),
        b = n(906732),
        S = n(254901),
        g = n(45493),
        f = n(332473),
        m = n(113434),
        T = n(663389),
        E = n(210887),
        I = n(996733),
        C = n(394644),
        N = n(295545),
        R = n(839469),
        k = n(981631),
        p = n(689938);
      let Z = a.forwardRef(function () {
        g.Z.trackExposure({ location: "cd25e4_1" }),
          S.Z.useExperiment(
            { location: "user_setting_auto" },
            { autoTrackExposure: !1 },
          ),
          S.Z.trackExposure({ location: "user_setting_manual" });
        let e = (0, c.e7)([E.Z], () => E.Z.theme),
          t = (0, c.e7)([E.Z], () => (E.Z.darkSidebar ? k.BRd.DARK : void 0)),
          {
            section: n,
            subsection: Z,
            analyticsLocation: B,
            analyticsLocations: G,
          } = (0, c.cj)([T.Z], () => {
            let e = T.Z.getSection(),
              t = T.Z.getSubsection(),
              { analyticsLocation: n, analyticsLocations: o } = T.Z.getProps();
            return {
              section: e,
              subsection: t,
              analyticsLocation: n,
              analyticsLocations: o,
            };
          }),
          h = (0, u.Z)(n),
          A = (0, u.Z)(Z),
          P = (0, I.Z7)(),
          { analyticsLocations: M } = (0, b.ZP)(d.Z.USER_SETTINGS);
        a.useEffect(() => {
          if (!!(null != n && (n !== h || Z !== A)))
            !(function (e) {
              let {
                destinationPane: t,
                originPane: n = null,
                source: o = null,
                subsection: a = null,
                locationStack: c = null,
                searchQuery: i = null,
              } = e;
              _.ZP.trackWithMetadata(k.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: "user",
                origin_pane: n,
                destination_pane: t,
                location_stack: c,
                source: o,
                subsection: a,
                search_query: i,
              });
            })({
              destinationPane: n,
              originPane: null != h ? h : null,
              source: B,
              subsection: Z,
              locationStack: G,
              searchQuery: "" !== P ? P : null,
            });
        }, [n, h, Z, A, B, G, P]);
        let x = (0, N.eA)({ location: "user_settings" }),
          { hasSearchResults: U, searchResults: O } = (0, R.E)(),
          D = a.useMemo(() => x && U, [x, U]),
          W = (0, C.VO)(),
          v = (0, C.q8)(O),
          H = a.useMemo(() => (D ? v : W), [D, v, W]),
          w = (0, f.b)(),
          y = (0, m.iO)(),
          L = a.useCallback((e) => {
            r.Z.setSection(e);
          }, []);
        return (0, o.jsx)(b.Gt, {
          value: M,
          children: (0, o.jsx)(l.Z, {
            root: !0,
            page: k.ZY5.USER_SETTINGS,
            children: (0, o.jsx)(s.ZP, {
              theme: e,
              title: p.Z.Messages.USER_SETTINGS,
              sidebarTheme: t,
              section: n,
              onSetSection: L,
              onClose: i.xf,
              sections: H,
              isEligibleForPomelo: w,
              questsForBadge: y,
              isUserSettingsSearchEnabled: x,
            }),
          }),
        });
      });
      t.default = a.forwardRef(function () {
        let e = (0, c.e7)([T.Z], () => T.Z.getProps().analyticsLocations),
          { analyticsLocations: t } = (0, b.ZP)(e);
        return (0, o.jsx)(b.Gt, { value: t, children: (0, o.jsx)(Z, {}) });
      });
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return f;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return b;
        },
        ac: function () {
          return m;
        },
        bL: function () {
          return g;
        },
        g0: function () {
          return a;
        },
        gl: function () {
          return _;
        },
        rr: function () {
          return S;
        },
        xH: function () {
          return T;
        },
      });
      var o,
        a,
        c = n(695346),
        i = n(486472),
        r = n(430824);
      n(626135);
      var l = n(981631),
        s = n(689938);
      let u = 864e5 * l.eBq;
      function d() {
        let e = c.h2.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function _() {
        let e = c.zA.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function b() {
        let e = c.SE.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function S() {
        let e = c.iH.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function g(e) {
        return (e & l.HGf) === l.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS,
            };
      }
      function f(e, t) {
        return (
          !t.verified ||
          (null != e && u > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((o = a || (a = {}))[(o.UNDECIDED = 0)] = "UNDECIDED"),
        (o[(o.OPTIN = 1)] = "OPTIN"),
        (o[(o.OPTOUT = 2)] = "OPTOUT");
      let m = { 0: void 0, 1: !0, 2: !1 };
      function T() {
        return [
          {
            name: s.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: s.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: s.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: s.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: s.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: s.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    60179: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    681130: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    147768: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    11377: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, t, n) {
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
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    169528: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    915938: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    848435: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    861277: function (e, t, n) {
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
    655580: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
  },
]);
//# sourceMappingURL=ab78e58ef07e93bcc554.js.map
