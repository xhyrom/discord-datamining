"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32915"],
  {
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(200651),
        a = t(192379),
        l = t(442837),
        r = t(481060),
        o = t(616780),
        d = t(40851),
        u = t(300284),
        s = t(484459),
        c = t(314897),
        p = t(271383),
        f = t(430824),
        v = t(496675),
        _ = t(594174),
        g = t(981631),
        h = t(388032),
        A = t(241287);
      function I(e) {
        let {
            guildId: n,
            userId: I,
            analyticsLocation: x,
            analyticsLocations: b,
            context: P,
            icon: m,
          } = e,
          C = f.Z.getGuild(n),
          Z = c.default.getId(),
          y = (0, l.e7)([_.default], () => _.default.getUser(I)),
          k = (0, l.e7)([p.ZP], () => p.ZP.isGuestOrLurker(n, I), [n, I]);
        (0, l.e7)([v.Z], () => v.Z.getGuildVersion(n), [n]);
        let M = a.useMemo(() => ({ [n]: [I] }), [n, I]);
        (0, o.$)(M);
        let N = P === g.IlC.POPOUT,
          L = (0, u.Z)({ guild: C, analyticsLocation: x }),
          w = (0, d.Aq)();
        if (null == C || N) return null;
        let O =
            Z === I &&
            (v.Z.can(g.Plq.CHANGE_NICKNAME, C) ||
              v.Z.can(g.Plq.MANAGE_NICKNAMES, C)),
          W = Z === I,
          G = v.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, I, C);
        if (!(O || G || W) || null == y || k) return null;
        let T = C.hasFeature(g.oNc.HUB)
            ? h.intl.string(h.t["+MWrWl"])
            : h.intl.string(h.t["PKQB/P"]),
          E = W ? T : h.intl.string(h.t.dilOFx);
        return (0, i.jsx)(r.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: A.labelWrapper,
            children: (0, i.jsx)("span", { className: A.label, children: E }),
          }),
          icon: m,
          action: () => {
            W
              ? ((0, s.Z)(y.id, y.getAvatarURL(n, 80), { guildId: n }),
                L(),
                w.dispatch(g.CkL.POPOUT_CLOSE),
                (0, r.closeAllModals)())
              : (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: y,
                      analyticsSource: x,
                      analyticsLocations: b,
                    });
                });
          },
        });
      }
    },
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(653041);
      var i = t(200651),
        a = t(192379),
        l = t(442837),
        r = t(481060),
        o = t(139387),
        d = t(230711),
        u = t(213459),
        s = t(434404),
        c = t(795594),
        p = t(430824),
        f = t(496675),
        v = t(981631),
        _ = t(388032);
      function g(e) {
        var n;
        let {
            user: g,
            application: h,
            guildId: A,
            context: I,
            onItemClick: x,
          } = e,
          b =
            null !== (n = null == h ? void 0 : h.id) && void 0 !== n
              ? n
              : null == g
                ? void 0
                : g.id,
          P = p.Z.getGuild(A),
          m = (0, l.e7)([f.Z], () =>
            null != P ? f.Z.can(v.Plq.MANAGE_GUILD, P) : null,
          ),
          C = (0, u.LD)(A, !0),
          Z = (0, u.PL)(!0, !0),
          { isUserApp: y, isGuildApp: k } = a.useMemo(() => {
            var e, n, t, i;
            if (null == b) return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
                null !==
                  (t =
                    null === (e = C.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              l = Object.values(
                null !==
                  (i =
                    null === (n = Z.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: a.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === b
                );
              }),
              isUserApp: l.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === b
                );
              }),
            };
          }, [C, Z, b]);
        a.useEffect(() => {
          t(360606);
        }, []);
        let M = a.useCallback(() => {
            if ((null == P ? void 0 : P.id) != null)
              s.Z.open(P.id, v.pNK.INTEGRATIONS),
                o.Z.setSection(v.b4C.APPLICATION, b),
                null == x || x();
          }, [b, null == P ? void 0 : P.id, x]),
          N = a.useCallback(() => {
            d.Z.open(v.oAB.AUTHORIZED_APPS);
            let e = "";
            null != h ? (e = h.name) : null != g && (e = g.username),
              "" !== e && c.J.setState({ searchQuery: e }),
              null == x || x();
          }, [h, x, g]);
        if (I === v.IlC.POPOUT) return null;
        let L = [];
        return (
          k &&
            m &&
            L.push(
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "manage-server-integration",
                  label: _.intl.string(_.t.IuSJT0),
                  action: M,
                },
                "manage-server-integration",
              ),
            ),
          y &&
            L.push(
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: _.intl.string(_.t.V8ruv7),
                  action: N,
                },
                "manage-authorized-app",
              ),
            ),
          L
        );
      }
    },
    251794: function (e, n, t) {
      t.d(n, {
        q: function () {
          return r;
        },
        z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060);
      function l(e) {
        let { guildId: n, userId: l, anaylticsLocations: r } = e;
        (0, a.openModalLazy)(async () => {
          let { default: e } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, i.jsx)(e, {
              guildId: n,
              userId: l,
              anaylticsLocations: r,
              ...t,
            });
        });
      }
      function r(e) {
        let { guildId: n, userId: l, anaylticsLocations: r } = e;
        (0, a.openModalLazy)(async () => {
          let { default: e } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, i.jsx)(e, {
              guildId: n,
              userId: l,
              anaylticsLocations: r,
              ...t,
            });
        });
      }
    },
    241287: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    96907: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    5118: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
    509427: function (e, n, t) {
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    167606: function (e, n, t) {
      e.exports = {
        authedApp: "authedApp_f0135d",
        header: "header_f0135d",
        headerText: "headerText_f0135d",
        headerTextContainer: "headerTextContainer_f0135d",
        appAvatar: "appAvatar_f0135d",
        reportButton: "reportButton_f0135d",
        permission: "permission_f0135d",
        permissionCheckmark: "permissionCheckmark_f0135d",
        disclosureIcon: "disclosureIcon_f0135d",
        infoBox: "infoBox_f0135d",
        twoWayWarning: "twoWayWarning_f0135d",
        twoWayWarningIcon: "twoWayWarningIcon_f0135d",
        searchContainer: "searchContainer_f0135d",
        tosPrivacy: "tosPrivacy_f0135d",
        tos: "tos_f0135d",
        privacy: "privacy_f0135d",
        externalLinkIcon: "externalLinkIcon_f0135d",
        divider: "divider_f0135d",
        link: "link_f0135d",
      };
    },
  },
]);
//# sourceMappingURL=1830fe67854a6a98a67e.js.map
