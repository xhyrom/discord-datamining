"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40390"],
  {
    295474: function (e, n, t) {
      t.d(n, {
        Ux: function () {
          return N;
        },
        gS: function () {
          return L;
        },
        ww: function () {
          return U;
        },
      }),
        t(789020);
      var s = t(470079),
        o = t(399606),
        r = t(230711),
        i = t(906732),
        a = t(18438),
        l = t(314897),
        u = t(271383),
        _ = t(430824),
        d = t(496675),
        c = t(914010),
        I = t(715903),
        A = t(981631),
        O = t(372897),
        E = t(526761),
        M = t(689938);
      function N(e) {
        return (0, o.e7)(
          [l.default, u.ZP],
          () => {
            if (null == e) return !1;
            let n = l.default.getId();
            return (0, I.EY)(u.ZP.getMember(e, n));
          },
          [e],
        );
      }
      function L(e) {
        return (0, o.cj)(
          [l.default, u.ZP, c.Z, _.Z],
          () => {
            let n = { nick: void 0, bio: void 0 },
              t = c.Z.getGuildId(),
              s = null != e ? e : t,
              o = _.Z.getGuild(s);
            if (null == o || null == s) return n;
            let r = l.default.getId(),
              i = u.ZP.getMember(s, r),
              a = (0, I.Ow)(null == i ? void 0 : i.flags);
            if (0 === a.size) return n;
            if (a.has(O.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
              if (null == e) {
                var d;
                n.nick = [
                  M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format(
                    {
                      guildName: null !== (d = o.name) && void 0 !== d ? d : "",
                    },
                  ),
                ];
              } else
                n.nick = [
                  M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME,
                ];
            }
            return (
              a.has(O.q.AUTOMOD_QUARANTINED_BIO) &&
                (n.bio = [
                  M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO,
                ]),
              n
            );
          },
          [e],
        );
      }
      function U(e) {
        let {
            guildId: n,
            scrollPosition: t,
            analyticsLocation: l,
            analyticsLocations: u,
            openWithoutBackstack: c,
          } = e,
          { analyticsLocations: I } = (0, i.ZP)(),
          O = (0, o.e7)([_.Z], () => _.Z.getGuild(n), [n]),
          M = (0, o.e7)(
            [d.Z],
            () => null != O && d.Z.can(A.Plq.CHANGE_NICKNAME, O),
            [O],
          );
        return [
          s.useCallback(() => {
            if (null == O) return;
            let e = A.oAB.PROFILE_CUSTOMIZATION,
              n = E.NB.GUILD;
            M ? (0, a.Fq)(O, null != u ? u : I) : (n = E.NB.USER_PROFILE);
            r.Z.open(e, n, {
              scrollPosition: t,
              analyticsLocation: l,
              analyticsLocations: u,
              openWithoutBackstack: c,
            });
          }, [M, t, l, u, c, O, I]),
          M,
        ];
      }
    },
    251871: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return D;
          },
        }),
        t(47120);
      var s = t(735250),
        o = t(470079),
        r = t(399606),
        i = t(481060),
        a = t(100527),
        l = t(906732),
        u = t(565138),
        _ = t(314897),
        d = t(271383),
        c = t(430824),
        I = t(626135),
        A = t(715903),
        O = t(295474),
        E = t(273504),
        M = t(981631),
        N = t(372897),
        L = t(689938),
        U = t(140494);
      function D(e) {
        var n;
        let { onClose: t, transitionState: D, guildId: R } = e,
          C = (0, r.e7)([_.default], () => _.default.getId()),
          T = (0, r.e7)([d.ZP], () => d.ZP.getMember(R, C), [R, C]),
          f = (0, r.e7)([c.Z], () => c.Z.getGuild(R), [R]),
          Z =
            null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : "",
          g = (0, A.no)(T),
          { analyticsLocations: h } = (0, l.ZP)(
            a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT,
          ),
          [P, m] = (0, O.ww)({
            guildId: R,
            analyticsLocations: h,
            openWithoutBackstack: !0,
          }),
          x = g.has(N.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? L.Z.Messages
                .GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE
            : L.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
        !m &&
          (x =
            L.Z.Messages
              .GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
        let G = m
          ? L.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA
          : L.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
        return (o.useEffect(() => {
          I.default.track(M.rMx.OPEN_MODAL, {
            type: E.dc,
            guild_id: R,
            other_user_id: C,
          });
        }, []),
        o.useEffect(() => {
          if (null == f) {
            t();
            return;
          }
        }, [f, t]),
        null == f)
          ? null
          : (0, s.jsxs)(i.ModalRoot, {
              transitionState: D,
              size: i.ModalSize.SMALL,
              children: [
                (0, s.jsx)(i.ModalHeader, {
                  separator: !1,
                  children: (0, s.jsxs)("div", {
                    className: U.headerContainer,
                    children: [
                      (0, s.jsxs)("div", {
                        className: U.guildIconContainer,
                        children: [
                          (0, s.jsx)(u.Z, { guild: f, size: u.Z.Sizes.LARGER }),
                          (0, s.jsx)("div", {
                            className: U.statusContainer,
                            children: (0, s.jsx)(i.ChatXIcon, {
                              size: "md",
                              color: "currentColor",
                              className: U.statusIcon,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)(i.Heading, {
                        color: "header-primary",
                        variant: "heading-md/semibold",
                        children:
                          L.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format(
                            { guildName: Z },
                          ),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(i.ModalContent, {
                  children: (0, s.jsx)("div", {
                    className: U.descriptionContainer,
                    children: (0, s.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: x,
                    }),
                  }),
                }),
                (0, s.jsxs)(i.ModalFooter, {
                  children: [
                    (0, s.jsx)(i.Button, {
                      onClick: () => {
                        P(), t();
                      },
                      color: i.Button.Colors.BRAND,
                      look: i.Button.Looks.FILLED,
                      children: G,
                    }),
                    (0, s.jsx)(i.Button, {
                      onClick: t,
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      children: L.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    140494: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_e8233c",
        guildIconContainer: "guildIconContainer_e8233c",
        statusContainer: "statusContainer_e8233c",
        statusIcon: "statusIcon_e8233c",
        descriptionContainer: "descriptionContainer_e8233c",
      };
    },
  },
]);
//# sourceMappingURL=6015946c5946f1e89cf5.js.map
