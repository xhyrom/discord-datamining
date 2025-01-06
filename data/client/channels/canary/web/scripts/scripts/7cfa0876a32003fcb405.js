"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93735"],
  {
    994763: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return k;
          },
        });
      var l = i(200651),
        t = i(192379),
        s = i(442837),
        a = i(37234),
        o = i(503089),
        c = i(100527),
        d = i(367907),
        u = i(906732),
        r = i(456268),
        p = i(63568),
        g = i(745752),
        h = i(45966),
        Z = i(526120),
        m = i(751189),
        E = i(409059),
        M = i(918658),
        v = i(163400),
        S = i(210887),
        f = i(524329),
        A = i(995532),
        G = i(984933),
        N = i(650774),
        b = i(496675),
        C = i(771212),
        I = i(434404),
        R = i(146596),
        P = i(559368),
        T = i(999382),
        w = i(359191),
        K = i(896007),
        L = i(981631),
        x = i(388032);
      function y(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          i = arguments.length > 2 ? arguments[2] : void 0;
        d.ZP.trackWithMetadata(L.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "guild",
          origin_pane: n,
          destination_pane: e,
          location: i,
        });
      }
      let D = {
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
      class j extends t.PureComponent {
        componentDidMount() {
          y(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          I.Z.close();
        }
        componentDidUpdate(e) {
          let { section: n } = e,
            {
              section: i,
              isGuildAdmin: l,
              canManageGuild: t,
              canManageRoles: s,
              canManageBans: o,
              canManageNicknames: c,
              canManageGuildExpressions: d,
              canViewAuditLog: u,
              canManageWebhooks: r,
              canAccessMembersPage: p,
              canViewGuildAnalytics: g,
            } = this.props;
          i !== n && y(i, n),
            ((!l && !t && !s && !o && !c && !d && !u && !p && !r) ||
              (!u && i === L.pNK.AUDIT_LOG) ||
              (!s && i === L.pNK.ROLES) ||
              (!d && i === L.pNK.EMOJI) ||
              (!d && i === L.pNK.STICKERS) ||
              (!d && i === L.pNK.SOUNDBOARD) ||
              (!o && i === L.pNK.BANS) ||
              (!g && i === L.pNK.ANALYTICS) ||
              (!p && i === L.pNK.MEMBERS)) &&
              (0, a.xf)();
        }
        render() {
          var e, n, i;
          let {
            theme: t,
            sidebarTheme: s,
            section: c,
            guild: d,
            isGuildAdmin: u,
            canManageGuild: r,
            canViewAuditLog: p,
            canManageRoles: g,
            canManageGuildExpressions: h,
            canManageWebhooks: Z,
            canUnlinkChannels: m,
            canManageBans: E,
            canAccessMembersPage: v,
            canViewGuildAnalytics: S,
            isOwner: f,
            isOwnerWithRequiredMfaLevel: A,
            showDirtyGuildTemplateIndicator: G,
            memberCount: N,
            showAccessRate: b,
            onboardingStep: C,
            onboardingEnabled: R,
            welcomeScreenEmpty: P,
            guildMetadata: T,
            canAccessClanSettings: w,
            memberVerificationRolloutEnabled: y,
          } = this.props;
          if (null == d) return null;
          let D = (0, K.vE)({
              guild: d,
              isGuildAdmin: u,
              canManageGuild: r,
              canViewAuditLog: p,
              canManageRoles: g,
              canManageGuildExpressions: h,
              canManageWebhooks: Z,
              canUnlinkChannels: m,
              canManageBans: E,
              canAccessMembersPage: v,
              canViewGuildAnalytics: S,
              isOwner: f,
              isOwnerWithRequiredMfaLevel: A,
              showDirtyGuildTemplateIndicator: G,
              memberCount: N,
              showAccessRate: b,
              onboardingStep: C,
              onboardingEnabled: R,
              welcomeScreenEmpty: P,
              guildMetadata: T,
              section: c,
              canAccessClanSettings: w,
              memberVerificationRolloutEnabled: y,
            }),
            j =
              (null === (n = D.find((e) => e.section === c)) || void 0 === n
                ? void 0
                : null === (e = n.predicate) || void 0 === e
                  ? void 0
                  : e.call(n)) !== !1;
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(o.ZP, {
                theme: t,
                sidebarTheme: s,
                section: j && null != c ? c : L.pNK.OVERVIEW,
                onSetSection: I.Z.setSection,
                onClose: a.xf,
                title:
                  "" !== (i = d).toString()
                    ? i.toString()
                    : x.intl.string(x.t["154/bG"]),
                sections: D,
              }),
              (0, l.jsx)(M.d, { guildId: d.id }),
            ],
          });
        }
      }
      function k() {
        var e;
        let {
            guild: n,
            section: i,
            analyticsLocation: a,
            guildMetadata: o,
            isGuildMetadataLoaded: d,
          } = (0, s.cj)([T.Z], () => T.Z.getProps()),
          { analyticsLocations: M } = (0, u.ZP)(c.Z.GUILD_SETTINGS),
          K = (0, s.e7)([S.Z], () => S.Z.theme),
          x = (0, s.e7)([S.Z], () => (S.Z.darkSidebar ? L.BRd.DARK : void 0)),
          y = (0, s.e7)(
            [G.ZP],
            () => (null != n ? G.ZP.getChannels(n.id).SELECTABLE : null),
            [n],
          ),
          k = (0, s.cj)([b.Z], () =>
            null != n ? b.Z.getGuildPermissionProps(n) : D,
          ),
          O = null == n ? void 0 : n.id,
          _ = (0, s.e7)(
            [b.Z],
            () => null != n && b.Z.canAccessGuildSettings(n),
          ),
          F = null != n && (0, C.Fv)(n.id),
          V = F || _,
          U = F || k.canViewGuildAnalytics,
          { shouldFetchMemberInsights: B, hasAccessRate: W } = (0, s.cj)(
            [P.Z],
            () => ({
              shouldFetchMemberInsights:
                null != n && P.Z.shouldFetchMemberInsights(n.id),
              hasAccessRate:
                null != n && P.Z.getMemberInsights(n.id).hasAccessRate,
            }),
          );
        t.useEffect(() => {
          !d && null != O && (0, r.aC)(O);
        }, [d, O]),
          t.useEffect(() => {
            V && U && B && null != O && (0, R.r2)(O);
          }, [V, U, B, O]);
        let Y =
          null !== (e = null == n ? void 0 : n.hasFeature(L.oNc.COMMUNITY)) &&
          void 0 !== e &&
          e;
        t.useEffect(() => {
          null != O && Y && ((0, g.eM)(O), (0, f.RM)(O));
        }, [O, Y]),
          t.useEffect(() => {
            null != O && (0, Z.cP)(O);
          }, [O]);
        let { showAccessRate: q } = (0, C.eA)(
            null == n ? void 0 : n.id,
            !W || !U || !V,
          ),
          J = k.isGuildAdmin && (null == n ? void 0 : n.hasFeature(L.oNc.CLAN)),
          z = (0, s.e7)(
            [E.Z],
            () => {
              var e;
              return (
                (null == n ? void 0 : n.id) != null &&
                (null === (e = E.Z.getForGuild(n.id)) || void 0 === e
                  ? void 0
                  : e.isDirty) === !0
              );
            },
            [n],
          ),
          H = (0, s.e7)(
            [N.Z],
            () => N.Z.getMemberCount(null == n ? void 0 : n.id),
            [n],
          );
        t.useEffect(() => {
          null != O && k.canManageGuild && m.Z.loadTemplatesForGuild(O);
        }, [O, k.canManageGuild]),
          t.useEffect(() => {
            !V && I.Z.close();
          }, [V]);
        let Q = (0, s.e7)([w.Z], () => w.Z.getCurrentPage()),
          X = (0, s.e7)([h.Z], () => null != O && h.Z.getEnabled(O)),
          $ = (0, s.e7)([A.Z], () => null != O && A.Z.isEmpty(O)),
          ee = (0, v.F)(O).length > 0,
          en = (0, p.jS)(O, "GuildSettings");
        return (0, l.jsx)(u.Gt, {
          value: M,
          children: (0, l.jsx)(j, {
            guild: n,
            section: i,
            theme: K,
            sidebarTheme: x,
            channels: y,
            showDirtyGuildTemplateIndicator: z,
            analyticsLocation: a,
            memberCount: H,
            ...k,
            canUnlinkChannels: ee,
            canViewGuildAnalytics: U,
            showAccessRate: q,
            onboardingStep: Q,
            onboardingEnabled: X,
            welcomeScreenEmpty: $,
            guildMetadata: o,
            canAccessClanSettings: J,
            memberVerificationRolloutEnabled: en,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7cfa0876a32003fcb405.js.map
