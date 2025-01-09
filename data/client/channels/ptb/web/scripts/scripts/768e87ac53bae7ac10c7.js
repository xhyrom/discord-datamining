"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93735"],
  {
    994763: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return y;
          },
        });
      var l = i(200651),
        t = i(192379),
        a = i(442837),
        s = i(37234),
        o = i(503089),
        d = i(100527),
        u = i(367907),
        c = i(906732),
        r = i(456268),
        p = i(63568),
        g = i(745752),
        Z = i(45966),
        h = i(526120),
        E = i(751189),
        S = i(409059),
        m = i(918658),
        v = i(163400),
        G = i(210887),
        M = i(524329),
        f = i(995532),
        N = i(984933),
        A = i(650774),
        b = i(496675),
        C = i(434404),
        P = i(600553),
        T = i(999382),
        I = i(359191),
        D = i(896007),
        K = i(981631),
        L = i(388032);
      function R(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          i = arguments.length > 2 ? arguments[2] : void 0;
        u.ZP.trackWithMetadata(K.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "guild",
          origin_pane: n,
          destination_pane: e,
          location: i,
        });
      }
      let w = {
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
      class x extends t.PureComponent {
        componentDidMount() {
          R(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          C.Z.close();
        }
        componentDidUpdate(e) {
          let { section: n } = e,
            {
              section: i,
              isGuildAdmin: l,
              canManageGuild: t,
              canManageRoles: a,
              canManageBans: o,
              canManageNicknames: d,
              canManageGuildExpressions: u,
              canViewAuditLog: c,
              canManageWebhooks: r,
              canUnlinkChannels: p,
              canAccessMembersPage: g,
              canViewGuildAnalytics: Z,
            } = this.props;
          i !== n && R(i, n),
            ((!l && !t && !a && !o && !d && !u && !c && !g && !r && !p) ||
              (!c && i === K.pNK.AUDIT_LOG) ||
              (!a && i === K.pNK.ROLES) ||
              (!u && i === K.pNK.EMOJI) ||
              (!u && i === K.pNK.STICKERS) ||
              (!u && i === K.pNK.SOUNDBOARD) ||
              (!o && i === K.pNK.BANS) ||
              (!Z && i === K.pNK.ANALYTICS) ||
              (!g && i === K.pNK.MEMBERS)) &&
              (0, s.xf)();
        }
        render() {
          var e, n, i;
          let {
            theme: t,
            sidebarTheme: a,
            section: d,
            guild: u,
            isGuildAdmin: c,
            canManageGuild: r,
            canViewAuditLog: p,
            canManageRoles: g,
            canManageGuildExpressions: Z,
            canManageWebhooks: h,
            canUnlinkChannels: E,
            canManageBans: S,
            canAccessMembersPage: v,
            canViewGuildAnalytics: G,
            isOwner: M,
            isOwnerWithRequiredMfaLevel: f,
            showDirtyGuildTemplateIndicator: N,
            memberCount: A,
            onboardingStep: b,
            onboardingEnabled: P,
            welcomeScreenEmpty: T,
            guildMetadata: I,
            canAccessClanSettings: R,
            memberVerificationRolloutEnabled: w,
            isGuildSettingsFoundationEnabled: x,
          } = this.props;
          if (null == u) return null;
          let y = (0, D.vE)({
              guild: u,
              isGuildAdmin: c,
              canManageGuild: r,
              canViewAuditLog: p,
              canManageRoles: g,
              canManageGuildExpressions: Z,
              canManageWebhooks: h,
              canUnlinkChannels: E,
              canManageBans: S,
              canAccessMembersPage: v,
              canViewGuildAnalytics: G,
              isOwner: M,
              isOwnerWithRequiredMfaLevel: f,
              showDirtyGuildTemplateIndicator: N,
              memberCount: A,
              onboardingStep: b,
              onboardingEnabled: P,
              welcomeScreenEmpty: T,
              guildMetadata: I,
              section: d,
              canAccessClanSettings: R,
              memberVerificationRolloutEnabled: w,
              isGuildSettingsFoundationEnabled: x,
            }),
            j =
              (null === (n = y.find((e) => e.section === d)) || void 0 === n
                ? void 0
                : null === (e = n.predicate) || void 0 === e
                  ? void 0
                  : e.call(n)) !== !1;
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(o.ZP, {
                theme: t,
                sidebarTheme: a,
                section: j && null != d ? d : K.pNK.OVERVIEW,
                onSetSection: C.Z.setSection,
                onClose: s.xf,
                title:
                  "" !== (i = u).toString()
                    ? i.toString()
                    : L.intl.string(L.t["154/bG"]),
                sections: y,
              }),
              (0, l.jsx)(m.d, { guildId: u.id }),
            ],
          });
        }
      }
      function y() {
        var e;
        let {
            guild: n,
            section: i,
            analyticsLocation: s,
            guildMetadata: o,
            isGuildMetadataLoaded: u,
          } = (0, a.cj)([T.Z], () => T.Z.getProps()),
          { analyticsLocations: m } = (0, c.ZP)(d.Z.GUILD_SETTINGS),
          D = (0, a.e7)([G.Z], () => G.Z.theme),
          L = (0, a.e7)([G.Z], () => (G.Z.darkSidebar ? K.BRd.DARK : void 0)),
          R = (0, a.e7)(
            [N.ZP],
            () => (null != n ? N.ZP.getChannels(n.id).SELECTABLE : null),
            [n],
          ),
          y = (0, a.cj)([b.Z], () =>
            null != n ? b.Z.getGuildPermissionProps(n) : w,
          ),
          j = null == n ? void 0 : n.id,
          k = (0, a.e7)(
            [b.Z],
            () => null != n && b.Z.canAccessGuildSettings(n),
          );
        t.useEffect(() => {
          !u && null != j && (0, r.aC)(j);
        }, [u, j]);
        let O =
          null !== (e = null == n ? void 0 : n.hasFeature(K.oNc.COMMUNITY)) &&
          void 0 !== e &&
          e;
        t.useEffect(() => {
          null != j && O && ((0, g.eM)(j), (0, M.RM)(j));
        }, [j, O]),
          t.useEffect(() => {
            null != j && (0, h.cP)(j);
          }, [j]);
        let _ =
            y.isGuildAdmin && (null == n ? void 0 : n.hasFeature(K.oNc.CLAN)),
          V = (0, a.e7)(
            [S.Z],
            () => {
              var e;
              return (
                (null == n ? void 0 : n.id) != null &&
                (null === (e = S.Z.getForGuild(n.id)) || void 0 === e
                  ? void 0
                  : e.isDirty) === !0
              );
            },
            [n],
          ),
          U = (0, a.e7)(
            [A.Z],
            () => A.Z.getMemberCount(null == n ? void 0 : n.id),
            [n],
          );
        t.useEffect(() => {
          null != j && y.canManageGuild && E.Z.loadTemplatesForGuild(j);
        }, [j, y.canManageGuild]),
          t.useEffect(() => {
            !k && C.Z.close();
          }, [k]);
        let B = (0, a.e7)([I.Z], () => I.Z.getCurrentPage()),
          F = (0, a.e7)([Z.Z], () => null != j && Z.Z.getEnabled(j)),
          W = (0, a.e7)([f.Z], () => null != j && f.Z.isEmpty(j)),
          Y = (0, v.F)(j).length > 0,
          q = (0, p.jS)(j, "GuildSettings"),
          J = (0, P.Dj)({ guildId: j, location: "GuildSettings" });
        return (0, l.jsx)(c.Gt, {
          value: m,
          children: (0, l.jsx)(x, {
            guild: n,
            section: i,
            theme: D,
            sidebarTheme: L,
            channels: R,
            showDirtyGuildTemplateIndicator: V,
            analyticsLocation: s,
            memberCount: U,
            ...y,
            canUnlinkChannels: Y,
            canViewGuildAnalytics: y.canViewGuildAnalytics,
            onboardingStep: B,
            onboardingEnabled: F,
            welcomeScreenEmpty: W,
            guildMetadata: o,
            canAccessClanSettings: _,
            memberVerificationRolloutEnabled: q,
            isGuildSettingsFoundationEnabled: J,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=768e87ac53bae7ac10c7.js.map
