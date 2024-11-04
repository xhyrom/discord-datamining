"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49448"],
  {
    976192: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return P;
        },
      });
      var i = l(200651),
        t = l(192379),
        a = l(442837),
        u = l(481060),
        r = l(616780),
        o = l(40851),
        d = l(300284),
        s = l(484459),
        c = l(314897),
        p = l(271383),
        v = l(430824),
        f = l(496675),
        b = l(594174),
        g = l(981631),
        A = l(388032),
        I = l(745974);
      function P(e) {
        let {
            guildId: n,
            userId: P,
            analyticsLocation: Z,
            analyticsLocations: h,
            context: M,
            icon: N,
          } = e,
          C = v.Z.getGuild(n),
          m = c.default.getId(),
          L = (0, a.e7)([b.default], () => b.default.getUser(P)),
          O = (0, a.e7)([p.ZP], () => p.ZP.isGuestOrLurker(n, P), [n, P]);
        (0, a.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
        let _ = t.useMemo(() => ({ [n]: [P] }), [n, P]);
        (0, r.$)(_);
        let x = M === g.IlC.POPOUT,
          G = (0, d.Z)({ guild: C, analyticsLocation: Z }),
          U = (0, o.Aq)();
        if (null == C || x) return null;
        let j =
            m === P &&
            (f.Z.can(g.Plq.CHANGE_NICKNAME, C) ||
              f.Z.can(g.Plq.MANAGE_NICKNAMES, C)),
          w = m === P,
          y = f.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, P, C);
        if (!(j || y || w) || null == L || O) return null;
        let E = C.hasFeature(g.oNc.HUB)
            ? A.intl.string(A.t["+MWrWl"])
            : A.intl.string(A.t["PKQB/P"]),
          k = w ? E : A.intl.string(A.t.dilOFx);
        return (0, i.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: I.labelWrapper,
            children: (0, i.jsx)("span", { className: I.label, children: k }),
          }),
          icon: N,
          action: () => {
            w
              ? ((0, s.Z)(L.id, L.getAvatarURL(n, 80), { guildId: n }),
                G(),
                U.dispatch(g.CkL.POPOUT_CLOSE),
                (0, u.closeAllModals)())
              : (0, u.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("17712")
                    .then(l.bind(l, 620021));
                  return (l) =>
                    (0, i.jsx)(e, {
                      ...l,
                      guildId: n,
                      user: L,
                      analyticsSource: Z,
                      analyticsLocations: h,
                    });
                });
          },
        });
      }
    },
    276022: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return b;
        },
      }),
        l(653041);
      var i = l(200651),
        t = l(192379),
        a = l(442837),
        u = l(481060),
        r = l(139387),
        o = l(230711),
        d = l(213459),
        s = l(434404),
        c = l(430824),
        p = l(496675),
        v = l(981631),
        f = l(388032);
      function b(e) {
        let { user: n, guildId: l, channel: b, context: g } = e,
          A = c.Z.getGuild(l),
          I = (0, a.e7)([p.Z], () =>
            null != A ? p.Z.can(v.Plq.MANAGE_GUILD, A) : null,
          ),
          P = (0, d.em)(b, !0, !0),
          Z = (0, d.PL)(!0, !0),
          { isUserApp: h, isGuildApp: M } = t.useMemo(() => {
            var e, l, i, t;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
                null !==
                  (i =
                    null === (e = P.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              u = Object.values(
                null !==
                  (t =
                    null === (l = Z.result) || void 0 === l
                      ? void 0
                      : l.sections) && void 0 !== t
                  ? t
                  : {},
              );
            return {
              isGuildApp: a.some((e) => {
                var l;
                return (
                  (null === (l = e.descriptor.application) || void 0 === l
                    ? void 0
                    : l.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: u.some((e) => {
                var l;
                return (
                  (null === (l = e.descriptor.application) || void 0 === l
                    ? void 0
                    : l.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [P, Z, null == n ? void 0 : n.id]),
          N = t.useCallback(() => {
            if ((null == A ? void 0 : A.id) != null)
              s.Z.open(A.id, v.pNK.INTEGRATIONS),
                r.Z.setSection(v.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == A ? void 0 : A.id]),
          C = t.useCallback(() => {
            o.Z.open(v.oAB.AUTHORIZED_APPS);
          }, []),
          m = g === v.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !I || m || (!M && !h)) return null;
        let L = [];
        return (
          M &&
            L.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-integration",
                  label: f.intl.string(f.t["aw+qtb"]),
                  action: N,
                },
                "manage-integration",
              ),
            ),
          h &&
            L.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: f.intl.string(f.t.ALLIgY),
                  action: C,
                },
                "manage-authorized-app",
              ),
            ),
          L
        );
      }
    },
    251794: function (e, n, l) {
      l.d(n, {
        q: function () {
          return u;
        },
        z: function () {
          return a;
        },
      });
      var i = l(200651);
      l(192379);
      var t = l(481060);
      function a(e, n, a) {
        (0, t.openModalLazy)(async () => {
          let { default: t } = await l.e("72920").then(l.bind(l, 109730));
          return (l) =>
            (0, i.jsx)(t, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...l,
            });
        });
      }
      function u(e, n, a) {
        (0, t.openModalLazy)(async () => {
          let { default: t } = await l.e("76233").then(l.bind(l, 171494));
          return (l) =>
            (0, i.jsx)(t, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...l,
            });
        });
      }
    },
    745974: function (e, n, l) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    201683: function (e, n, l) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=93a1e977aaea36bc46be.js.map
