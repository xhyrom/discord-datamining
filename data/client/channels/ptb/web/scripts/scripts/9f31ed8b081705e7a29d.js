"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68692"],
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
      var o = n(200651),
        i = n(192379),
        c = n(442837),
        a = n(37234),
        r = n(230711),
        l = n(410575),
        s = n(503089),
        u = n(110924),
        d = n(100527),
        _ = n(367907),
        g = n(906732),
        b = n(254901),
        f = n(45493),
        m = n(332473),
        S = n(113434),
        C = n(663389),
        k = n(210887),
        p = n(996733),
        B = n(991346),
        h = n(295545),
        Z = n(839469),
        T = n(981631),
        x = n(388032);
      let E = i.forwardRef(function () {
        f.Z.trackExposure({ location: "cd25e4_1" }),
          b.Z.useExperiment(
            { location: "user_setting_auto" },
            { autoTrackExposure: !1 },
          ),
          b.Z.trackExposure({ location: "user_setting_manual" });
        let e = (0, c.e7)([k.Z], () => k.Z.theme),
          t = (0, c.e7)([k.Z], () => (k.Z.darkSidebar ? T.BRd.DARK : void 0)),
          {
            section: n,
            subsection: E,
            analyticsLocation: R,
            analyticsLocations: U,
          } = (0, c.cj)([C.Z], () => {
            let e = C.Z.getSection(),
              t = C.Z.getSubsection(),
              { analyticsLocation: n, analyticsLocations: o } = C.Z.getProps();
            return {
              section: e,
              subsection: t,
              analyticsLocation: n,
              analyticsLocations: o,
            };
          }),
          I = (0, u.Z)(n),
          W = (0, u.Z)(E),
          P = (0, p.Z7)(),
          { analyticsLocations: v } = (0, g.ZP)(d.Z.USER_SETTINGS);
        i.useEffect(() => {
          if (!!(null != n && (n !== I || E !== W)))
            !(function (e) {
              let {
                destinationPane: t,
                originPane: n = null,
                source: o = null,
                subsection: i = null,
                locationStack: c = null,
                searchQuery: a = null,
              } = e;
              _.ZP.trackWithMetadata(T.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: "user",
                origin_pane: n,
                destination_pane: t,
                location_stack: c,
                source: o,
                subsection: i,
                search_query: a,
              });
            })({
              destinationPane: n,
              originPane: null != I ? I : null,
              source: R,
              subsection: E,
              locationStack: U,
              searchQuery: "" !== P ? P : null,
            });
        }, [n, I, E, W, R, U, P]);
        let G = (0, h.eA)({ location: "user_settings" }),
          { hasSearchResults: M, searchResults: H } = (0, Z.E)(),
          w = i.useMemo(() => G && M, [G, M]),
          D = (0, B.VO)(),
          A = (0, B.q8)(H),
          O = i.useMemo(() => (w ? A : D), [w, A, D]),
          y = (0, m.b)(),
          L = (0, S.iO)(),
          N = i.useCallback((e) => {
            r.Z.setSection(e);
          }, []);
        return (0, o.jsx)(g.Gt, {
          value: v,
          children: (0, o.jsx)(l.Z, {
            root: !0,
            page: T.ZY5.USER_SETTINGS,
            children: (0, o.jsx)(s.ZP, {
              theme: e,
              title: x.intl.string(x.t.cduTBA),
              sidebarTheme: t,
              section: n,
              onSetSection: N,
              onClose: a.xf,
              sections: O,
              isEligibleForPomelo: y,
              questsForBadge: L,
              isUserSettingsSearchEnabled: G,
            }),
          }),
        });
      });
      t.default = i.forwardRef(function () {
        let e = (0, c.e7)([C.Z], () => C.Z.getProps().analyticsLocations),
          { analyticsLocations: t } = (0, g.ZP)(e);
        return (0, o.jsx)(g.Gt, { value: t, children: (0, o.jsx)(E, {}) });
      });
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return m;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return g;
        },
        ac: function () {
          return S;
        },
        bL: function () {
          return f;
        },
        g0: function () {
          return i;
        },
        gl: function () {
          return _;
        },
        rr: function () {
          return b;
        },
        xH: function () {
          return C;
        },
      });
      var o,
        i,
        c = n(695346),
        a = n(486472),
        r = n(430824);
      n(626135);
      var l = n(981631),
        s = n(388032);
      let u = 864e5 * l.eBq;
      function d() {
        let e = c.h2.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function _() {
        let e = c.zA.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = c.SE.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function b() {
        let e = c.iH.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function f(e) {
        return (e & l.HGf) === l.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS,
            };
      }
      function m(e, t) {
        return (
          !t.verified ||
          (null != e && u > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((o = i || (i = {}))[(o.UNDECIDED = 0)] = "UNDECIDED"),
        (o[(o.OPTIN = 1)] = "OPTIN"),
        (o[(o.OPTOUT = 2)] = "OPTOUT");
      let S = { 0: void 0, 1: !0, 2: !1 };
      function C() {
        return [
          {
            name: s.intl.string(s.t["/yLMRU"]),
            desc: s.intl.string(s.t["3fzkPj"]),
            value: 1,
          },
          {
            name: s.intl.string(s.t["21fP2d"]),
            desc: s.intl.string(s.t.ggJ9jY),
            value: 2,
          },
          {
            name: s.intl.string(s.t["OWIo8/"]),
            desc: s.intl.string(s.t.HqYXp6),
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
//# sourceMappingURL=9f31ed8b081705e7a29d.js.map
