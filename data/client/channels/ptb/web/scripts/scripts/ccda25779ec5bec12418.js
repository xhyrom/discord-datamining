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
        c = i(367907),
        u = i(906732),
        r = i(456268),
        p = i(63568),
        g = i(745752),
        Z = i(45966),
        h = i(526120),
        E = i(751189),
        m = i(409059),
        S = i(918658),
        v = i(163400),
        M = i(210887),
        f = i(524329),
        G = i(995532),
        N = i(984933),
        A = i(650774),
        C = i(496675),
        b = i(434404),
        P = i(999382),
        T = i(359191),
        I = i(896007),
        K = i(981631),
        L = i(388032);
      function R(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          i = arguments.length > 2 ? arguments[2] : void 0;
        c.ZP.trackWithMetadata(K.rMx.SETTINGS_PANE_VIEWED, {
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
          b.Z.close();
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
              canManageGuildExpressions: c,
              canViewAuditLog: u,
              canManageWebhooks: r,
              canAccessMembersPage: p,
              canViewGuildAnalytics: g,
            } = this.props;
          i !== n && R(i, n),
            ((!l && !t && !a && !o && !d && !c && !u && !p && !r) ||
              (!u && i === K.pNK.AUDIT_LOG) ||
              (!a && i === K.pNK.ROLES) ||
              (!c && i === K.pNK.EMOJI) ||
              (!c && i === K.pNK.STICKERS) ||
              (!c && i === K.pNK.SOUNDBOARD) ||
              (!o && i === K.pNK.BANS) ||
              (!g && i === K.pNK.ANALYTICS) ||
              (!p && i === K.pNK.MEMBERS)) &&
              (0, s.xf)();
        }
        render() {
          var e, n, i;
          let {
            theme: t,
            sidebarTheme: a,
            section: d,
            guild: c,
            isGuildAdmin: u,
            canManageGuild: r,
            canViewAuditLog: p,
            canManageRoles: g,
            canManageGuildExpressions: Z,
            canManageWebhooks: h,
            canUnlinkChannels: E,
            canManageBans: m,
            canAccessMembersPage: v,
            canViewGuildAnalytics: M,
            isOwner: f,
            isOwnerWithRequiredMfaLevel: G,
            showDirtyGuildTemplateIndicator: N,
            memberCount: A,
            onboardingStep: C,
            onboardingEnabled: P,
            welcomeScreenEmpty: T,
            guildMetadata: R,
            canAccessClanSettings: w,
            memberVerificationRolloutEnabled: x,
          } = this.props;
          if (null == c) return null;
          let y = (0, I.vE)({
              guild: c,
              isGuildAdmin: u,
              canManageGuild: r,
              canViewAuditLog: p,
              canManageRoles: g,
              canManageGuildExpressions: Z,
              canManageWebhooks: h,
              canUnlinkChannels: E,
              canManageBans: m,
              canAccessMembersPage: v,
              canViewGuildAnalytics: M,
              isOwner: f,
              isOwnerWithRequiredMfaLevel: G,
              showDirtyGuildTemplateIndicator: N,
              memberCount: A,
              onboardingStep: C,
              onboardingEnabled: P,
              welcomeScreenEmpty: T,
              guildMetadata: R,
              section: d,
              canAccessClanSettings: w,
              memberVerificationRolloutEnabled: x,
            }),
            D =
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
                section: D && null != d ? d : K.pNK.OVERVIEW,
                onSetSection: b.Z.setSection,
                onClose: s.xf,
                title:
                  "" !== (i = c).toString()
                    ? i.toString()
                    : L.intl.string(L.t["154/bG"]),
                sections: y,
              }),
              (0, l.jsx)(S.d, { guildId: c.id }),
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
            isGuildMetadataLoaded: c,
          } = (0, a.cj)([P.Z], () => P.Z.getProps()),
          { analyticsLocations: S } = (0, u.ZP)(d.Z.GUILD_SETTINGS),
          I = (0, a.e7)([M.Z], () => M.Z.theme),
          L = (0, a.e7)([M.Z], () => (M.Z.darkSidebar ? K.BRd.DARK : void 0)),
          R = (0, a.e7)(
            [N.ZP],
            () => (null != n ? N.ZP.getChannels(n.id).SELECTABLE : null),
            [n],
          ),
          y = (0, a.cj)([C.Z], () =>
            null != n ? C.Z.getGuildPermissionProps(n) : w,
          ),
          D = null == n ? void 0 : n.id,
          k = (0, a.e7)(
            [C.Z],
            () => null != n && C.Z.canAccessGuildSettings(n),
          );
        t.useEffect(() => {
          !c && null != D && (0, r.aC)(D);
        }, [c, D]);
        let O =
          null !== (e = null == n ? void 0 : n.hasFeature(K.oNc.COMMUNITY)) &&
          void 0 !== e &&
          e;
        t.useEffect(() => {
          null != D && O && ((0, g.eM)(D), (0, f.RM)(D));
        }, [D, O]),
          t.useEffect(() => {
            null != D && (0, h.cP)(D);
          }, [D]);
        let _ =
            y.isGuildAdmin && (null == n ? void 0 : n.hasFeature(K.oNc.CLAN)),
          j = (0, a.e7)(
            [m.Z],
            () => {
              var e;
              return (
                (null == n ? void 0 : n.id) != null &&
                (null === (e = m.Z.getForGuild(n.id)) || void 0 === e
                  ? void 0
                  : e.isDirty) === !0
              );
            },
            [n],
          ),
          V = (0, a.e7)(
            [A.Z],
            () => A.Z.getMemberCount(null == n ? void 0 : n.id),
            [n],
          );
        t.useEffect(() => {
          null != D && y.canManageGuild && E.Z.loadTemplatesForGuild(D);
        }, [D, y.canManageGuild]),
          t.useEffect(() => {
            !k && b.Z.close();
          }, [k]);
        let U = (0, a.e7)([T.Z], () => T.Z.getCurrentPage()),
          B = (0, a.e7)([Z.Z], () => null != D && Z.Z.getEnabled(D)),
          W = (0, a.e7)([G.Z], () => null != D && G.Z.isEmpty(D)),
          F = (0, v.F)(D).length > 0,
          Y = (0, p.jS)(D, "GuildSettings");
        return (0, l.jsx)(u.Gt, {
          value: S,
          children: (0, l.jsx)(x, {
            guild: n,
            section: i,
            theme: I,
            sidebarTheme: L,
            channels: R,
            showDirtyGuildTemplateIndicator: j,
            analyticsLocation: s,
            memberCount: V,
            ...y,
            canUnlinkChannels: F,
            canViewGuildAnalytics: y.canViewGuildAnalytics,
            onboardingStep: U,
            onboardingEnabled: B,
            welcomeScreenEmpty: W,
            guildMetadata: o,
            canAccessClanSettings: _,
            memberVerificationRolloutEnabled: Y,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=ccda25779ec5bec12418.js.map
