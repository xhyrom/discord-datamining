"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49448"],
  {
    976192: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return P;
        },
      });
      var i = n(200651),
        t = n(192379),
        a = n(442837),
        u = n(481060),
        r = n(616780),
        o = n(40851),
        d = n(300284),
        s = n(484459),
        c = n(314897),
        p = n(271383),
        v = n(430824),
        f = n(496675),
        b = n(594174),
        g = n(981631),
        A = n(388032),
        I = n(745974);
      function P(e) {
        let {
            guildId: l,
            userId: P,
            analyticsLocation: Z,
            analyticsLocations: h,
            context: M,
            icon: N,
          } = e,
          C = v.Z.getGuild(l),
          m = c.default.getId(),
          L = (0, a.e7)([b.default], () => b.default.getUser(P)),
          O = (0, a.e7)([p.ZP], () => p.ZP.isGuestOrLurker(l, P), [l, P]);
        (0, a.e7)([f.Z], () => f.Z.getGuildVersion(l), [l]);
        let _ = t.useMemo(() => ({ [l]: [P] }), [l, P]);
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
              ? ((0, s.Z)(L.id, L.getAvatarURL(l, 80), { guildId: l }),
                G(),
                U.dispatch(g.CkL.POPOUT_CLOSE),
                (0, u.closeAllModals)())
              : (0, u.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("17712")
                    .then(n.bind(n, 620021));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      guildId: l,
                      user: L,
                      analyticsSource: Z,
                      analyticsLocations: h,
                    });
                });
          },
        });
      }
    },
    276022: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return b;
        },
      }),
        n(653041);
      var i = n(200651),
        t = n(192379),
        a = n(442837),
        u = n(481060),
        r = n(139387),
        o = n(230711),
        d = n(213459),
        s = n(434404),
        c = n(430824),
        p = n(496675),
        v = n(981631),
        f = n(388032);
      function b(e) {
        let { user: l, guildId: n, channel: b, context: g } = e,
          A = c.Z.getGuild(n),
          I = (0, a.e7)([p.Z], () =>
            null != A ? p.Z.can(v.Plq.MANAGE_GUILD, A) : null,
          ),
          P = (0, d.em)(b, !0, !0),
          Z = (0, d.PL)(!0, !0),
          { isUserApp: h, isGuildApp: M } = t.useMemo(() => {
            var e, n, i, t;
            if ((null == l ? void 0 : l.id) == null)
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
                    null === (n = Z.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== t
                  ? t
                  : {},
              );
            return {
              isGuildApp: a.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == l ? void 0 : l.id)
                );
              }),
              isUserApp: u.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == l ? void 0 : l.id)
                );
              }),
            };
          }, [P, Z, null == l ? void 0 : l.id]),
          N = t.useCallback(() => {
            if ((null == A ? void 0 : A.id) != null)
              s.Z.open(A.id, v.pNK.INTEGRATIONS),
                r.Z.setSection(v.b4C.APPLICATION, null == l ? void 0 : l.id);
          }, [null == l ? void 0 : l.id, null == A ? void 0 : A.id]),
          C = t.useCallback(() => {
            o.Z.open(v.oAB.AUTHORIZED_APPS);
          }, []),
          m = g === v.IlC.POPOUT;
        if (!(null == l ? void 0 : l.bot) || !I || m || (!M && !h)) return null;
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
    251794: function (e, l, n) {
      n.d(l, {
        q: function () {
          return u;
        },
        z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var t = n(481060);
      function a(e) {
        let { guildId: l, userId: a, anaylticsLocations: u } = e;
        (0, t.openModalLazy)(async () => {
          let { default: e } = await n.e("72920").then(n.bind(n, 109730));
          return (n) =>
            (0, i.jsx)(e, {
              guildId: l,
              userId: a,
              anaylticsLocations: u,
              ...n,
            });
        });
      }
      function u(e) {
        let { guildId: l, userId: a, anaylticsLocations: u } = e;
        (0, t.openModalLazy)(async () => {
          let { default: e } = await n.e("76233").then(n.bind(n, 171494));
          return (n) =>
            (0, i.jsx)(e, {
              guildId: l,
              userId: a,
              anaylticsLocations: u,
              ...n,
            });
        });
      }
    },
    745974: function (e, l, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    201683: function (e, l, n) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (e, l, n) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=eda17fc94b4b1ee10d76.js.map
