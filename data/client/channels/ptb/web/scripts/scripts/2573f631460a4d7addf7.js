"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40547"],
  {
    994763: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return A;
          },
        });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        o = t(37234),
        a = t(503089),
        s = t(100527),
        c = t(367907),
        d = t(906732),
        u = t(456268),
        b = t(63568),
        m = t(745752),
        g = t(45966),
        p = t(526120),
        f = t(751189),
        h = t(409059),
        _ = t(918658),
        x = t(163400),
        I = t(210887),
        C = t(524329),
        v = t(995532),
        T = t(984933),
        N = t(650774),
        Z = t(496675),
        w = t(771212),
        S = t(434404),
        R = t(146596),
        E = t(559368),
        k = t(999382),
        B = t(359191),
        j = t(896007),
        O = t(981631),
        L = t(388032);
      function P(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          t = arguments.length > 2 ? arguments[2] : void 0;
        c.ZP.trackWithMetadata(O.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "guild",
          origin_pane: n,
          destination_pane: e,
          location: t,
        });
      }
      let M = {
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
      class G extends l.PureComponent {
        componentDidMount() {
          P(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          S.Z.close();
        }
        componentDidUpdate(e) {
          let { section: n } = e,
            {
              section: t,
              isGuildAdmin: i,
              canManageGuild: l,
              canManageRoles: r,
              canManageBans: a,
              canManageNicknames: s,
              canManageGuildExpressions: c,
              canViewAuditLog: d,
              canManageWebhooks: u,
              canAccessMembersPage: b,
              canViewGuildAnalytics: m,
            } = this.props;
          t !== n && P(t, n),
            ((!i && !l && !r && !a && !s && !c && !d && !b && !u) ||
              (!d && t === O.pNK.AUDIT_LOG) ||
              (!r && t === O.pNK.ROLES) ||
              (!c && t === O.pNK.EMOJI) ||
              (!c && t === O.pNK.STICKERS) ||
              (!c && t === O.pNK.SOUNDBOARD) ||
              (!a && t === O.pNK.BANS) ||
              (!m && t === O.pNK.ANALYTICS) ||
              (!b && t === O.pNK.MEMBERS)) &&
              (0, o.xf)();
        }
        render() {
          var e, n, t;
          let {
            theme: l,
            sidebarTheme: r,
            section: s,
            guild: c,
            isGuildAdmin: d,
            canManageGuild: u,
            canViewAuditLog: b,
            canManageRoles: m,
            canManageGuildExpressions: g,
            canManageWebhooks: p,
            canUnlinkChannels: f,
            canManageBans: h,
            canAccessMembersPage: x,
            canViewGuildAnalytics: I,
            isOwner: C,
            isOwnerWithRequiredMfaLevel: v,
            showDirtyGuildTemplateIndicator: T,
            memberCount: N,
            showAccessRate: Z,
            onboardingStep: w,
            onboardingEnabled: R,
            welcomeScreenEmpty: E,
            guildMetadata: k,
            canAccessClanSettings: B,
            memberVerificationRolloutEnabled: P,
          } = this.props;
          if (null == c) return null;
          let M = (0, j.vE)({
              guild: c,
              isGuildAdmin: d,
              canManageGuild: u,
              canViewAuditLog: b,
              canManageRoles: m,
              canManageGuildExpressions: g,
              canManageWebhooks: p,
              canUnlinkChannels: f,
              canManageBans: h,
              canAccessMembersPage: x,
              canViewGuildAnalytics: I,
              isOwner: C,
              isOwnerWithRequiredMfaLevel: v,
              showDirtyGuildTemplateIndicator: T,
              memberCount: N,
              showAccessRate: Z,
              onboardingStep: w,
              onboardingEnabled: R,
              welcomeScreenEmpty: E,
              guildMetadata: k,
              section: s,
              canAccessClanSettings: B,
              memberVerificationRolloutEnabled: P,
            }),
            G =
              (null === (n = M.find((e) => e.section === s)) || void 0 === n
                ? void 0
                : null === (e = n.predicate) || void 0 === e
                  ? void 0
                  : e.call(n)) !== !1;
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(a.ZP, {
                theme: l,
                sidebarTheme: r,
                section: G && null != s ? s : O.pNK.OVERVIEW,
                onSetSection: S.Z.setSection,
                onClose: o.xf,
                title:
                  "" !== (t = c).toString()
                    ? t.toString()
                    : L.intl.string(L.t["154/bG"]),
                sections: M,
              }),
              (0, i.jsx)(_.d, { guildId: c.id }),
            ],
          });
        }
      }
      function A() {
        var e;
        let {
            guild: n,
            section: t,
            analyticsLocation: o,
            guildMetadata: a,
            isGuildMetadataLoaded: c,
          } = (0, r.cj)([k.Z], () => k.Z.getProps()),
          { analyticsLocations: _ } = (0, d.ZP)(s.Z.GUILD_SETTINGS),
          j = (0, r.e7)([I.Z], () => I.Z.theme),
          L = (0, r.e7)([I.Z], () => (I.Z.darkSidebar ? O.BRd.DARK : void 0)),
          P = (0, r.e7)(
            [T.ZP],
            () => (null != n ? T.ZP.getChannels(n.id).SELECTABLE : null),
            [n],
          ),
          A = (0, r.cj)([Z.Z], () =>
            null != n ? Z.Z.getGuildPermissionProps(n) : M,
          ),
          y = null == n ? void 0 : n.id,
          D = (0, r.e7)(
            [Z.Z],
            () => null != n && Z.Z.canAccessGuildSettings(n),
          ),
          U = null != n && (0, w.Fv)(n.id),
          F = U || D,
          W = U || A.canViewGuildAnalytics,
          { shouldFetchMemberInsights: q, hasAccessRate: K } = (0, r.cj)(
            [E.Z],
            () => ({
              shouldFetchMemberInsights:
                null != n && E.Z.shouldFetchMemberInsights(n.id),
              hasAccessRate:
                null != n && E.Z.getMemberInsights(n.id).hasAccessRate,
            }),
          );
        l.useEffect(() => {
          !c && null != y && (0, u.aC)(y);
        }, [c, y]),
          l.useEffect(() => {
            F && W && q && null != y && (0, R.r2)(y);
          }, [F, W, q, y]);
        let H =
          null !== (e = null == n ? void 0 : n.hasFeature(O.oNc.COMMUNITY)) &&
          void 0 !== e &&
          e;
        l.useEffect(() => {
          null != y && H && ((0, m.eM)(y), (0, C.RM)(y));
        }, [y, H]),
          l.useEffect(() => {
            null != y && (0, p.cP)(y);
          }, [y]);
        let { showAccessRate: V } = (0, w.eA)(
            null == n ? void 0 : n.id,
            !K || !W || !F,
          ),
          z = A.isGuildAdmin && (null == n ? void 0 : n.hasFeature(O.oNc.CLAN)),
          Y = (0, r.e7)(
            [h.Z],
            () => {
              var e;
              return (
                (null == n ? void 0 : n.id) != null &&
                (null === (e = h.Z.getForGuild(n.id)) || void 0 === e
                  ? void 0
                  : e.isDirty) === !0
              );
            },
            [n],
          ),
          $ = (0, r.e7)(
            [N.Z],
            () => N.Z.getMemberCount(null == n ? void 0 : n.id),
            [n],
          );
        l.useEffect(() => {
          null != y && A.canManageGuild && f.Z.loadTemplatesForGuild(y);
        }, [y, A.canManageGuild]),
          l.useEffect(() => {
            !F && S.Z.close();
          }, [F]);
        let J = (0, r.e7)([B.Z], () => B.Z.getCurrentPage()),
          Q = (0, r.e7)([g.Z], () => null != y && g.Z.getEnabled(y)),
          X = (0, r.e7)([v.Z], () => null != y && v.Z.isEmpty(y)),
          ee = (0, x.F)(y).length > 0,
          en = (0, b.jS)(y, "GuildSettings");
        return (0, i.jsx)(d.Gt, {
          value: _,
          children: (0, i.jsx)(G, {
            guild: n,
            section: t,
            theme: j,
            sidebarTheme: L,
            channels: P,
            showDirtyGuildTemplateIndicator: Y,
            analyticsLocation: o,
            memberCount: $,
            ...A,
            canUnlinkChannels: ee,
            canViewGuildAnalytics: W,
            showAccessRate: V,
            onboardingStep: J,
            onboardingEnabled: Q,
            welcomeScreenEmpty: X,
            guildMetadata: a,
            canAccessClanSettings: z,
            memberVerificationRolloutEnabled: en,
          }),
        });
      }
    },
    889695: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120),
        t(724458),
        t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(658722),
        o = t.n(r),
        a = t(392711),
        s = t.n(a),
        c = t(149765),
        d = t(442837),
        u = t(481060),
        b = t(271383),
        m = t(430824),
        g = t(594174),
        p = t(700785),
        f = t(709054),
        h = t(962086),
        _ = t(160404),
        x = t(225675),
        I = t(981631),
        C = t(388032),
        v = t(22314);
      function T(e) {
        var n;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (n = e.colorString) && void 0 !== n ? n : "currentColor",
          },
          children: e.name,
        });
      }
      function N(e) {
        let { guildId: n } = e,
          t = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          r = (0, d.e7)([m.Z], () => m.Z.getGuild(n)),
          a = (0, d.e7)([m.Z], () => m.Z.getRoles(n)),
          { impersonateType: N, viewingRoles: Z } = (0, d.cj)([_.Z], () => ({
            impersonateType: _.Z.getImpersonateType(n),
            viewingRoles: _.Z.getViewingRoles(n),
          })),
          w = N === x.z.SERVER_SHOP,
          S = (0, d.e7)([b.ZP], () =>
            null != t ? b.ZP.getTrueMember(n, t.id) : null,
          ),
          [R, E] = (0, u.useMultiSelect)(null == Z ? [] : f.default.keys(Z)),
          k = l.useRef(r);
        l.useEffect(() => {
          let e = {},
            n = k.current;
          if (null != n && null != N) {
            for (let n of R) {
              let t = a[n];
              null != t && (e[n] = t);
            }
            (0, h.Zm)(n.id, { type: N, roles: e });
          }
        }, [R, N, a]);
        let B =
            null != r && null != t && null != S
              ? s()(a)
                  .filter((e) => -1 !== S.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          j = l.useMemo(
            () =>
              null != r && null != t
                ? Object.values(a)
                    .filter((e) => e.id !== r.id)
                    .filter((e) => {
                      var n;
                      return (
                        !w ||
                        (null === (n = e.tags) || void 0 === n
                          ? void 0
                          : n.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == B ? void 0 : B.id) === e.id ||
                        p.r6(r, t.id, B, e),
                    )
                : [],
            [r, t, w, B, a],
          );
        if (null == t || null == r || null == S) return null;
        let O = {};
        return (S.roles.forEach((e) => {
          let n = a[e];
          null != n && (O[n.id] = n);
        }),
        c.e$(
          p.I0({ forceRoles: O, context: r }),
          c.$e(I.Plq.MANAGE_GUILD, I.Plq.MANAGE_ROLES),
        ) || r.isOwner(t.id))
          ? (0, i.jsx)("div", {
              className: v.container,
              children: (0, i.jsx)(u.Combobox, {
                placeholder: C.intl.string(C.t.Sojqsr),
                value: R,
                onChange: E,
                autoFocus: !0,
                children: (e) => {
                  let n = j.reduce(
                      (n, t) => (
                        o()(e.toLowerCase(), t.name.toLowerCase()) &&
                          n.push(
                            (0, i.jsxs)(
                              u.ComboboxItem,
                              {
                                value: t.id,
                                children: [
                                  (0, i.jsx)(u.ComboboxItem.Label, {
                                    children: T(t),
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
                    t = a[r.getEveryoneRoleId()];
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
                                children: T(t),
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
              children: C.intl.string(C.t.MNSTbW),
            });
      }
    },
    918658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return B;
        },
        d: function () {
          return j;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        o = t(442837),
        a = t(692547),
        s = t(481060),
        c = t(549817),
        d = t(819553),
        u = t(17181),
        b = t(303737),
        m = t(434404),
        g = t(703656),
        p = t(944486),
        f = t(914010),
        h = t(671533),
        _ = t(259580),
        x = t(358085),
        I = t(962086),
        C = t(160404),
        v = t(889695),
        T = t(981631),
        N = t(176505),
        Z = t(302463),
        w = t(293810),
        S = t(388032),
        R = t(646217);
      function E(e) {
        let { className: n, onClick: t, children: l } = e;
        return (0, i.jsx)(s.Button, {
          className: r()(R.button, n),
          innerClassName: R.buttonInner,
          look: s.Button.Looks.OUTLINED,
          color: s.Button.Colors.WHITE,
          size: s.Button.Sizes.NONE,
          onClick: t,
          children: l,
        });
      }
      function k(e) {
        let { onClick: n } = e;
        return (0, i.jsx)(E, {
          onClick: n,
          children: S.intl.string(S.t.R9GHyc),
        });
      }
      function B() {
        let e = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
          n = (0, o.e7)([p.Z], () => p.Z.getChannelId(e)),
          {
            viewingRoles: t,
            backNavigationSection: l,
            isFullServerPreview: r,
            isServerShopPreview: x,
          } = (0, o.cj)([C.Z], () => ({
            viewingRoles: null != e ? C.Z.getViewingRoles(e) : null,
            backNavigationSection: C.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && C.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && C.Z.isViewingServerShop(e),
          }));
        if (null == t || null == e) return null;
        let B = (function (e) {
            switch (e) {
              case T.pNK.INTEGRATIONS:
                return S.intl.string(S.t.k7LGdn);
              case T.pNK.ROLE_SUBSCRIPTIONS:
                return S.intl.string(S.t.bRqiqa);
              case T.pNK.ONBOARDING:
                return S.intl.string(S.t.qZpU3d);
              default:
                return S.intl.string(S.t.MTIXho);
            }
          })(l),
          j =
            l === T.pNK.ROLE_SUBSCRIPTIONS
              ? S.intl.string(S.t.hZUCzc)
              : S.intl.string(S.t["/djIh4"]),
          O = n === N.oC.GUILD_ONBOARDING,
          L = (n) => {
            let { backToSettings: t } = n;
            null != e &&
              (C.Z.isFullServerPreview(e) && (0, g.uL)(T.Z5c.CHANNEL(e)),
              d.ZP.shouldShowOnboarding(e) &&
                (c.Z.finishOnboarding(e), (0, u.discardOnboardingPromise)(e)),
              (0, I.mL)(e),
              t && m.Z.open(e, l),
              l === T.pNK.ROLE_SUBSCRIPTIONS && (0, b.GN)(e));
          };
        return (0, i.jsxs)(s.Notice, {
          color: s.NoticeColors.BRAND,
          className: R.notice,
          children: [
            (0, i.jsxs)(E, {
              onClick: () => L({ backToSettings: !0 }),
              className: R.backButton,
              children: [
                (0, i.jsx)(h.Z, {
                  width: 16,
                  height: 16,
                  direction: h.Z.Directions.LEFT,
                  className: R.backArrow,
                }),
                B,
              ],
            }),
            O && r
              ? (0, i.jsx)("div", {
                  className: R.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: R.noticeText,
                    children: S.intl.string(S.t.PxbiAQ),
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: R.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: R.noticeText,
                      children: r
                        ? S.intl.formatToPlainString(S.t["0PHahI"], {
                            numRoles: Object.keys(t).length,
                          })
                        : S.intl.formatToPlainString(S.t.vMlK8v, {
                            numRoles: Object.keys(t).length,
                          }),
                    }),
                    (0, i.jsx)(s.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(v.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsxs)(E, {
                          onClick: n,
                          children: [
                            j,
                            (0, i.jsx)(_.Z, {
                              width: 16,
                              height: 16,
                              direction: _.Z.Directions.DOWN,
                              className: R.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    r &&
                      (0, i.jsx)(s.TooltipContainer, {
                        className: R.previewWarning,
                        text: S.intl.string(S.t.mW4DUF),
                        children: (0, i.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: a.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    x &&
                      (0, i.jsx)(s.TooltipContainer, {
                        className: R.previewWarning,
                        text: S.intl.formatToPlainString(S.t.eummvb, {
                          maxTiers: w.fF,
                          maxProducts: Z.dD,
                        }),
                        children: (0, i.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: a.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            r || l === T.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(k, { onClick: () => L({ backToSettings: !1 }) }),
          ],
        });
      }
      function j(e) {
        let { guildId: n } = e;
        return (0, o.e7)([C.Z], () => C.Z.isViewingRoles(n))
          ? (0, i.jsx)("div", {
              className: r()(R.settingsWrapper, {
                [R.windows]: (0, x.isWindows)(),
                [R.osx]: (0, x.isMac)(),
              }),
              children: (0, i.jsx)(B, {}),
            })
          : null;
      }
    },
    671533: function (e, n, t) {
      t(411104);
      var i,
        l,
        r = t(200651);
      t(192379);
      var o = t(120356),
        a = t.n(o),
        s = t(331595),
        c = t(485270);
      ((l = i || (i = {})).LEFT = "LEFT"),
        (l.RIGHT = "RIGHT"),
        (l.UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.UP_LEFT = "UP_LEFT"),
        (l.DOWN_RIGHT = "DOWN_RIGHT");
      let d = (e) => {
        let {
          width: n = 24,
          height: t = 24,
          color: i = "currentColor",
          direction: l,
          foreground: o,
          className: d,
          title: u,
          ...b
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.Z)(b),
          width: n,
          height: t,
          className: a()(
            d,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return c.left;
                case "RIGHT":
                  return c.right;
                case "UP":
                  return null;
                case "DOWN":
                  return c.down;
                case "UP_LEFT":
                  return c.upLeft;
                case "DOWN_RIGHT":
                  return c.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(l),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != u ? (0, r.jsx)("title", { children: u }) : null,
            (0, r.jsx)("polygon", {
              className: o,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (d.Directions = i), (n.Z = d);
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
//# sourceMappingURL=2573f631460a4d7addf7.js.map
