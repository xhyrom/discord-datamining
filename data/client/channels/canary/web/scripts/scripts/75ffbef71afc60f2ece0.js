"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47879"],
  {
    994763: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return L;
          },
        });
      var i = t(200651),
        o = t(192379),
        a = t(442837),
        r = t(37234),
        l = t(503089),
        c = t(100527),
        s = t(367907),
        d = t(906732),
        u = t(456268),
        b = t(63568),
        m = t(745752),
        g = t(45966),
        _ = t(526120),
        p = t(751189),
        f = t(409059),
        h = t(918658),
        C = t(163400),
        x = t(210887),
        S = t(524329),
        B = t(995532),
        I = t(984933),
        k = t(650774),
        v = t(496675),
        T = t(434404),
        w = t(600553),
        N = t(999382),
        Z = t(359191),
        R = t(896007),
        E = t(981631),
        M = t(388032);
      function j(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          t = arguments.length > 2 ? arguments[2] : void 0;
        s.ZP.trackWithMetadata(E.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "guild",
          origin_pane: n,
          destination_pane: e,
          location: t,
        });
      }
      let O = {
        canManageGuild: !1,
        canManageChannels: !1,
        canManageRoles: !1,
        canManageBans: !1,
        canManageNicknames: !1,
        canManageGuildExpressions: !1,
        canViewAuditLog: !1,
        canManageWebhooks: !1,
        canAccessMembersPage: !1,
        canViewGuildAnalytics: !1,
        isOwner: !1,
        isOwnerWithRequiredMfaLevel: !1,
        isGuildAdmin: !1,
      };
      class P extends o.PureComponent {
        componentDidMount() {
          j(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          T.Z.close();
        }
        componentDidUpdate(e) {
          let { section: n } = e,
            {
              section: t,
              isGuildAdmin: i,
              canManageGuild: o,
              canManageRoles: a,
              canManageBans: l,
              canManageNicknames: c,
              canManageGuildExpressions: s,
              canViewAuditLog: d,
              canManageWebhooks: u,
              canUnlinkChannels: b,
              canAccessMembersPage: m,
              canViewGuildAnalytics: g,
            } = this.props;
          t !== n && j(t, n),
            ((!i && !o && !a && !l && !c && !s && !d && !m && !u && !b) ||
              (!d && t === E.pNK.AUDIT_LOG) ||
              (!a && t === E.pNK.ROLES) ||
              (!s && t === E.pNK.EMOJI) ||
              (!s && t === E.pNK.STICKERS) ||
              (!s && t === E.pNK.SOUNDBOARD) ||
              (!l && t === E.pNK.BANS) ||
              (!g && t === E.pNK.ANALYTICS) ||
              (!m && t === E.pNK.MEMBERS)) &&
              (0, r.xf)();
        }
        render() {
          var e, n, t;
          let {
            theme: o,
            sidebarTheme: a,
            section: c,
            guild: s,
            isGuildAdmin: d,
            canManageGuild: u,
            canViewAuditLog: b,
            canManageRoles: m,
            canManageGuildExpressions: g,
            canManageWebhooks: _,
            canUnlinkChannels: p,
            canManageBans: f,
            canAccessMembersPage: C,
            canViewGuildAnalytics: x,
            isOwner: S,
            isOwnerWithRequiredMfaLevel: B,
            showDirtyGuildTemplateIndicator: I,
            memberCount: k,
            onboardingStep: v,
            onboardingEnabled: w,
            welcomeScreenEmpty: N,
            guildMetadata: Z,
            canAccessClanSettings: j,
            memberVerificationRolloutEnabled: O,
            isGuildSettingsFoundationEnabled: P,
          } = this.props;
          if (null == s) return null;
          let L = (0, R.vE)({
              guild: s,
              isGuildAdmin: d,
              canManageGuild: u,
              canViewAuditLog: b,
              canManageRoles: m,
              canManageGuildExpressions: g,
              canManageWebhooks: _,
              canUnlinkChannels: p,
              canManageBans: f,
              canAccessMembersPage: C,
              canViewGuildAnalytics: x,
              isOwner: S,
              isOwnerWithRequiredMfaLevel: B,
              showDirtyGuildTemplateIndicator: I,
              memberCount: k,
              onboardingStep: v,
              onboardingEnabled: w,
              welcomeScreenEmpty: N,
              guildMetadata: Z,
              section: c,
              canAccessClanSettings: j,
              memberVerificationRolloutEnabled: O,
              isGuildSettingsFoundationEnabled: P,
            }),
            y =
              (null === (n = L.find((e) => e.section === c)) || void 0 === n
                ? void 0
                : null === (e = n.predicate) || void 0 === e
                  ? void 0
                  : e.call(n)) !== !1;
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(l.ZP, {
                theme: o,
                sidebarTheme: a,
                section: y && null != c ? c : E.pNK.OVERVIEW,
                onSetSection: T.Z.setSection,
                onClose: r.xf,
                title:
                  "" !== (t = s).toString()
                    ? t.toString()
                    : M.intl.string(M.t["154/bG"]),
                sections: L,
              }),
              (0, i.jsx)(h.d, { guildId: s.id }),
            ],
          });
        }
      }
      function L() {
        var e;
        let {
            guild: n,
            section: t,
            analyticsLocation: r,
            guildMetadata: l,
            isGuildMetadataLoaded: s,
          } = (0, a.cj)([N.Z], () => N.Z.getProps()),
          { analyticsLocations: h } = (0, d.ZP)(c.Z.GUILD_SETTINGS),
          R = (0, a.e7)([x.Z], () => x.Z.theme),
          M = (0, a.e7)([x.Z], () => (x.Z.darkSidebar ? E.BRd.DARK : void 0)),
          j = (0, a.e7)(
            [I.ZP],
            () => (null != n ? I.ZP.getChannels(n.id).SELECTABLE : null),
            [n],
          ),
          L = (0, a.cj)([v.Z], () =>
            null != n ? v.Z.getGuildPermissionProps(n) : O,
          ),
          y = null == n ? void 0 : n.id,
          W = (0, a.e7)(
            [v.Z],
            () => null != n && v.Z.canAccessGuildSettings(n),
          );
        o.useEffect(() => {
          !s && null != y && (0, u.aC)(y);
        }, [s, y]);
        let A =
          null !== (e = null == n ? void 0 : n.hasFeature(E.oNc.COMMUNITY)) &&
          void 0 !== e &&
          e;
        o.useEffect(() => {
          null != y && A && ((0, m.eM)(y), (0, S.RM)(y));
        }, [y, A]),
          o.useEffect(() => {
            null != y && (0, _.cP)(y);
          }, [y]);
        let G =
            L.isGuildAdmin && (null == n ? void 0 : n.hasFeature(E.oNc.CLAN)),
          D = (0, a.e7)(
            [f.Z],
            () => {
              var e;
              return (
                (null == n ? void 0 : n.id) != null &&
                (null === (e = f.Z.getForGuild(n.id)) || void 0 === e
                  ? void 0
                  : e.isDirty) === !0
              );
            },
            [n],
          ),
          U = (0, a.e7)(
            [k.Z],
            () => k.Z.getMemberCount(null == n ? void 0 : n.id),
            [n],
          );
        o.useEffect(() => {
          null != y && L.canManageGuild && p.Z.loadTemplatesForGuild(y);
        }, [y, L.canManageGuild]),
          o.useEffect(() => {
            !W && T.Z.close();
          }, [W]);
        let F = (0, a.e7)([Z.Z], () => Z.Z.getCurrentPage()),
          q = (0, a.e7)([g.Z], () => null != y && g.Z.getEnabled(y)),
          H = (0, a.e7)([B.Z], () => null != y && B.Z.isEmpty(y)),
          K = (0, C.F)(y).length > 0,
          V = (0, b.jS)(y, "GuildSettings"),
          z = (0, w.Dj)({ guildId: y, location: "GuildSettings" });
        return (0, i.jsx)(d.Gt, {
          value: h,
          children: (0, i.jsx)(P, {
            guild: n,
            section: t,
            theme: R,
            sidebarTheme: M,
            channels: j,
            showDirtyGuildTemplateIndicator: D,
            analyticsLocation: r,
            memberCount: U,
            ...L,
            canUnlinkChannels: K,
            canViewGuildAnalytics: L.canViewGuildAnalytics,
            onboardingStep: F,
            onboardingEnabled: q,
            welcomeScreenEmpty: H,
            guildMetadata: l,
            canAccessClanSettings: G,
            memberVerificationRolloutEnabled: V,
            isGuildSettingsFoundationEnabled: z,
          }),
        });
      }
    },
    889695: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return k;
        },
      }),
        t(47120),
        t(724458),
        t(653041);
      var i = t(200651),
        o = t(192379),
        a = t(658722),
        r = t.n(a),
        l = t(392711),
        c = t.n(l),
        s = t(149765),
        d = t(442837),
        u = t(481060),
        b = t(271383),
        m = t(430824),
        g = t(594174),
        _ = t(700785),
        p = t(709054),
        f = t(962086),
        h = t(160404),
        C = t(225675),
        x = t(981631),
        S = t(388032),
        B = t(22314);
      function I(e) {
        var n;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (n = e.colorString) && void 0 !== n ? n : "currentColor",
          },
          children: e.name,
        });
      }
      function k(e) {
        let { guildId: n } = e,
          t = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          a = (0, d.e7)([m.Z], () => m.Z.getGuild(n)),
          l = (0, d.e7)([m.Z], () => m.Z.getRoles(n)),
          { impersonateType: k, viewingRoles: v } = (0, d.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n),
          })),
          T = k === C.z.SERVER_SHOP,
          w = (0, d.e7)([b.ZP], () =>
            null != t ? b.ZP.getTrueMember(n, t.id) : null,
          ),
          [N, Z] = (0, u.useMultiSelect)(null == v ? [] : p.default.keys(v)),
          R = o.useRef(a);
        o.useEffect(() => {
          let e = {},
            n = R.current;
          if (null != n && null != k) {
            for (let n of N) {
              let t = l[n];
              null != t && (e[n] = t);
            }
            (0, f.Zm)(n.id, { type: k, roles: e });
          }
        }, [N, k, l]);
        let E =
            null != a && null != t && null != w
              ? c()(l)
                  .filter((e) => -1 !== w.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          M = o.useMemo(
            () =>
              null != a && null != t
                ? Object.values(l)
                    .filter((e) => e.id !== a.id)
                    .filter((e) => {
                      var n;
                      return (
                        !T ||
                        (null === (n = e.tags) || void 0 === n
                          ? void 0
                          : n.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == E ? void 0 : E.id) === e.id ||
                        _.r6(a, t.id, E, e),
                    )
                : [],
            [a, t, T, E, l],
          );
        if (null == t || null == a || null == w) return null;
        let j = {};
        return (w.roles.forEach((e) => {
          let n = l[e];
          null != n && (j[n.id] = n);
        }),
        s.e$(
          _.I0({ forceRoles: j, context: a }),
          s.$e(x.Plq.MANAGE_GUILD, x.Plq.MANAGE_ROLES),
        ) || a.isOwner(t.id))
          ? (0, i.jsx)("div", {
              className: B.container,
              children: (0, i.jsx)(u.Combobox, {
                placeholder: S.intl.string(S.t.Sojqsr),
                value: N,
                onChange: Z,
                autoFocus: !0,
                children: (e) => {
                  let n = M.reduce(
                      (n, t) => (
                        r()(e.toLowerCase(), t.name.toLowerCase()) &&
                          n.push(
                            (0, i.jsxs)(
                              u.ComboboxItem,
                              {
                                value: t.id,
                                children: [
                                  (0, i.jsx)(u.ComboboxItem.Label, {
                                    children: I(t),
                                  }),
                                  (0, i.jsx)(u.ComboboxItem.Checkbox, {}),
                                ],
                              },
                              t.id,
                            ),
                          ),
                        n
                      ),
                      [],
                    ),
                    t = l[a.getEveryoneRoleId()];
                  return (
                    null != t &&
                      n.push(
                        (0, i.jsxs)(
                          u.ComboboxItem,
                          {
                            value: t.id,
                            disabled: !0,
                            children: [
                              (0, i.jsx)(u.ComboboxItem.Label, {
                                children: I(t),
                              }),
                              (0, i.jsx)(u.ComboboxItem.Checkbox, {
                                checked: !0,
                              }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    n
                  );
                },
              }),
            })
          : (0, i.jsx)(u.Text, {
              variant: "text-md/medium",
              children: S.intl.string(S.t.MNSTbW),
            });
      }
    },
    918658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
        d: function () {
          return M;
        },
      });
      var i = t(200651);
      t(192379);
      var o = t(120356),
        a = t.n(o),
        r = t(442837),
        l = t(692547),
        c = t(481060),
        s = t(549817),
        d = t(819553),
        u = t(17181),
        b = t(303737),
        m = t(434404),
        g = t(703656),
        _ = t(944486),
        p = t(914010),
        f = t(671533),
        h = t(259580),
        C = t(358085),
        x = t(962086),
        S = t(160404),
        B = t(889695),
        I = t(981631),
        k = t(176505),
        v = t(302463),
        T = t(293810),
        w = t(388032),
        N = t(646217);
      function Z(e) {
        let { className: n, onClick: t, children: o } = e;
        return (0, i.jsx)(c.Button, {
          className: a()(N.button, n),
          innerClassName: N.buttonInner,
          look: c.Button.Looks.OUTLINED,
          color: c.Button.Colors.WHITE,
          size: c.Button.Sizes.NONE,
          onClick: t,
          children: o,
        });
      }
      function R(e) {
        let { onClick: n } = e;
        return (0, i.jsx)(Z, {
          onClick: n,
          children: w.intl.string(w.t.R9GHyc),
        });
      }
      function E() {
        let e = (0, r.e7)([p.Z], () => p.Z.getGuildId()),
          n = (0, r.e7)([_.Z], () => _.Z.getChannelId(e)),
          {
            viewingRoles: t,
            backNavigationSection: o,
            isFullServerPreview: a,
            isServerShopPreview: C,
          } = (0, r.cj)([S.Z], () => ({
            viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
            backNavigationSection: S.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && S.Z.isViewingServerShop(e),
          }));
        if (null == t || null == e) return null;
        let E = (function (e) {
            switch (e) {
              case I.pNK.INTEGRATIONS:
                return w.intl.string(w.t.k7LGdn);
              case I.pNK.ROLE_SUBSCRIPTIONS:
                return w.intl.string(w.t.bRqiqa);
              case I.pNK.ONBOARDING:
                return w.intl.string(w.t.qZpU3d);
              default:
                return w.intl.string(w.t.MTIXho);
            }
          })(o),
          M =
            o === I.pNK.ROLE_SUBSCRIPTIONS
              ? w.intl.string(w.t.hZUCzc)
              : w.intl.string(w.t["/djIh4"]),
          j = n === k.oC.GUILD_ONBOARDING,
          O = (n) => {
            let { backToSettings: t } = n;
            null != e &&
              (S.Z.isFullServerPreview(e) && (0, g.uL)(I.Z5c.CHANNEL(e)),
              d.ZP.shouldShowOnboarding(e) &&
                (s.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)),
              (0, x.mL)(e),
              t && m.Z.open(e, o),
              o === I.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e));
          };
        return (0, i.jsxs)(c.Notice, {
          color: c.NoticeColors.BRAND,
          className: N.notice,
          children: [
            (0, i.jsxs)(Z, {
              onClick: () => O({ backToSettings: !0 }),
              className: N.backButton,
              children: [
                (0, i.jsx)(f.Z, {
                  width: 16,
                  height: 16,
                  direction: f.Z.Directions.LEFT,
                  className: N.backArrow,
                }),
                E,
              ],
            }),
            j && a
              ? (0, i.jsx)("div", {
                  className: N.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: N.noticeText,
                    children: w.intl.string(w.t.PxbiAQ),
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: N.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: N.noticeText,
                      children: a
                        ? w.intl.formatToPlainString(w.t["0PHahI"], {
                            numRoles: Object.keys(t).length,
                          })
                        : w.intl.formatToPlainString(w.t.vMlK8v, {
                            numRoles: Object.keys(t).length,
                          }),
                    }),
                    (0, i.jsx)(c.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(B.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsxs)(Z, {
                          onClick: n,
                          children: [
                            M,
                            (0, i.jsx)(h.Z, {
                              width: 16,
                              height: 16,
                              direction: h.Z.Directions.DOWN,
                              className: N.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    a &&
                      (0, i.jsx)(c.TooltipContainer, {
                        className: N.previewWarning,
                        text: w.intl.string(w.t.mW4DUF),
                        children: (0, i.jsx)(c.CircleWarningIcon, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    C &&
                      (0, i.jsx)(c.TooltipContainer, {
                        className: N.previewWarning,
                        text: w.intl.formatToPlainString(w.t.eummvb, {
                          maxTiers: T.fF,
                          maxProducts: v.dD,
                        }),
                        children: (0, i.jsx)(c.CircleWarningIcon, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            a || o === I.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(R, { onClick: () => O({ backToSettings: !1 }) }),
          ],
        });
      }
      function M(e) {
        let { guildId: n } = e;
        return (0, r.e7)([S.Z], () => S.Z.isViewingRoles(n))
          ? (0, i.jsx)("div", {
              className: a()(N.settingsWrapper, {
                [N.windows]: (0, C.isWindows)(),
                [N.osx]: (0, C.isMac)(),
              }),
              children: (0, i.jsx)(E, {}),
            })
          : null;
      }
    },
    95648: function (e, n, t) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    744149: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    840814: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    583535: function (e, n, t) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    670189: function (e, n, t) {
      t.r(
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
    410642: function (e, n, t) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    933078: function (e, n, t) {
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
    119866: function (e, n, t) {
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
    139266: function (e, n, t) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    759821: function (e, n, t) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    776394: function (e, n, t) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    529819: function (e, n, t) {
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
    965624: function (e, n, t) {
      e.exports = {
        card: "card_e73adb",
        iconMask: "iconMask_e73adb",
        cardPlaceholder: "cardPlaceholder_e73adb",
        cardHeader: "cardHeader_e73adb",
        splash: "splash_e73adb",
        splashImage: "splashImage_e73adb",
        splashLoaded: "splashLoaded_e73adb",
        guildIcon: "guildIcon_e73adb",
        defaultIcon: "defaultIcon_e73adb",
        acronym: "acronym_e73adb",
        avatar: "avatar_e73adb",
        guildInfo: "guildInfo_e73adb",
        title: "title_e73adb",
        verifiedIcon: "verifiedIcon_e73adb",
        guildName: "guildName_e73adb",
        description: "description_e73adb",
        memberInfo: "memberInfo_e73adb",
        memberCount: "memberCount_e73adb",
        dotOnline: "dotOnline_e73adb memberDot_e73adb",
        dotOffline: "dotOffline_e73adb memberDot_e73adb",
        cardDisabled: "cardDisabled_e73adb",
        cardSmall: "cardSmall_e73adb",
      };
    },
    22314: function (e, n, t) {
      e.exports = { container: "container_cbadbc" };
    },
    646217: function (e, n, t) {
      e.exports = {
        settingsWrapper: "settingsWrapper_e2ecbf",
        osx: "osx_e2ecbf",
        backButton: "backButton_e2ecbf",
        windows: "windows_e2ecbf",
        notice: "notice_e2ecbf",
        noticeContents: "noticeContents_e2ecbf",
        noticeText: "noticeText_e2ecbf",
        previewWarning: "previewWarning_e2ecbf",
        button: "button_e2ecbf",
        buttonInner: "buttonInner_e2ecbf",
        backArrow: "backArrow_e2ecbf",
        selectCaret: "selectCaret_e2ecbf",
      };
    },
    767493: function (e, n, t) {
      t.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, n, t) {
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
    844812: function (e, n, t) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    913074: function (e, n, t) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    684309: function (e, n, t) {
      t.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    485270: function (e, n, t) {
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
//# sourceMappingURL=75ffbef71afc60f2ece0.js.map
