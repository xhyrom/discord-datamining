"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49448"],
  {
    976192: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return b;
        },
      });
      var i = n(735250),
        a = n(470079),
        t = n(442837),
        u = n(481060),
        o = n(58540),
        s = n(40851),
        r = n(300284),
        d = n(484459),
        c = n(314897),
        p = n(271383),
        A = n(430824),
        v = n(496675),
        I = n(594174),
        f = n(981631),
        N = n(689938),
        Z = n(745974);
      function b(e) {
        let {
            guildId: l,
            userId: b,
            analyticsLocation: g,
            analyticsLocations: M,
            context: P,
            icon: _,
          } = e,
          E = A.Z.getGuild(l),
          C = c.default.getId(),
          h = (0, t.e7)([I.default], () => I.default.getUser(b)),
          G = (0, t.e7)([p.ZP], () => p.ZP.isGuestOrLurker(l, b), [l, b]);
        (0, t.e7)([v.Z], () => v.Z.getGuildVersion(l), [l]);
        let O = a.useMemo(() => ({ [l]: [b] }), [l, b]);
        (0, o.$)(O);
        let m = P === f.IlC.POPOUT,
          L = (0, r.Z)({ guild: E, analyticsLocation: g }),
          T = (0, s.Aq)();
        if (null == E || m) return null;
        let U =
            C === b &&
            (v.Z.can(f.Plq.CHANGE_NICKNAME, E) ||
              v.Z.can(f.Plq.MANAGE_NICKNAMES, E)),
          x = C === b,
          j = v.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, b, E);
        if (!(U || j || x) || null == h || G) return null;
        let y = E.hasFeature(f.oNc.HUB)
            ? N.Z.Messages.HUB_EDIT_PROFILE
            : N.Z.Messages.CHANGE_IDENTITY,
          k = x ? y : N.Z.Messages.CHANGE_NICKNAME;
        return (0, i.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: Z.labelWrapper,
            children: (0, i.jsx)("span", { className: Z.label, children: k }),
          }),
          icon: _,
          action: () => {
            x
              ? ((0, d.Z)(h.id, h.getAvatarURL(l, 80), { guildId: l }),
                L(),
                T.dispatch(f.CkL.POPOUT_CLOSE),
                (0, u.closeAllModals)())
              : (0, u.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("17712")
                    .then(n.bind(n, 620021));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      guildId: l,
                      user: h,
                      analyticsSource: g,
                      analyticsLocations: M,
                    });
                });
          },
        });
      }
    },
    276022: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return I;
        },
      }),
        n(653041);
      var i = n(735250),
        a = n(470079),
        t = n(442837),
        u = n(481060),
        o = n(139387),
        s = n(230711),
        r = n(213459),
        d = n(434404),
        c = n(430824),
        p = n(496675),
        A = n(981631),
        v = n(689938);
      function I(e) {
        let { user: l, guildId: n, channel: I, context: f } = e,
          N = c.Z.getGuild(n),
          Z = (0, t.e7)([p.Z], () =>
            null != N ? p.Z.can(A.Plq.MANAGE_GUILD, N) : null,
          ),
          b = (0, r.em)(I, !0, !0),
          g = (0, r.PL)(!0, !0),
          { isUserApp: M, isGuildApp: P } = a.useMemo(() => {
            var e, n, i, a;
            if ((null == l ? void 0 : l.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let t = Object.values(
                null !==
                  (i =
                    null === (e = b.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              u = Object.values(
                null !==
                  (a =
                    null === (n = g.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== a
                  ? a
                  : {},
              );
            return {
              isGuildApp: t.some((e) => {
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
          }, [b, g, null == l ? void 0 : l.id]),
          _ = a.useCallback(() => {
            if ((null == N ? void 0 : N.id) != null)
              d.Z.open(N.id, A.pNK.INTEGRATIONS),
                o.Z.setSection(A.b4C.APPLICATION, null == l ? void 0 : l.id);
          }, [null == l ? void 0 : l.id, null == N ? void 0 : N.id]),
          E = a.useCallback(() => {
            s.Z.open(A.oAB.AUTHORIZED_APPS);
          }, []),
          C = f === A.IlC.POPOUT;
        if (!(null == l ? void 0 : l.bot) || !Z || C || (!P && !M)) return null;
        let h = [];
        return (
          P &&
            h.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-integration",
                  label: v.Z.Messages.MANAGE_INTEGRATION,
                  action: _,
                },
                "manage-integration",
              ),
            ),
          M &&
            h.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: v.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: E,
                },
                "manage-authorized-app",
              ),
            ),
          h
        );
      }
    },
    251794: function (e, l, n) {
      n.d(l, {
        q: function () {
          return u;
        },
        z: function () {
          return t;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(481060);
      function t(e, l, t) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await n.e("72920").then(n.bind(n, 109730));
          return (n) =>
            (0, i.jsx)(a, {
              guildId: e,
              userId: l,
              anaylticsLocations: t,
              ...n,
            });
        });
      }
      function u(e, l, t) {
        (0, a.openModalLazy)(async () => {
          let { default: a } = await n.e("76233").then(n.bind(n, 171494));
          return (n) =>
            (0, i.jsx)(a, {
              guildId: e,
              userId: l,
              anaylticsLocations: t,
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
//# sourceMappingURL=dbe6799673c6b3e05390.js.map
