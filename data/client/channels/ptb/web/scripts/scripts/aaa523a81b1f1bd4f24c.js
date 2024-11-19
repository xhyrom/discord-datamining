"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40390"],
  {
    295474: function (t, n, e) {
      e.d(n, {
        Ux: function () {
          return C;
        },
        gS: function () {
          return A;
        },
        ww: function () {
          return E;
        },
      }),
        e(789020);
      var i = e(192379),
        r = e(399606),
        l = e(230711),
        o = e(906732),
        a = e(18438),
        s = e(314897),
        u = e(271383),
        d = e(430824),
        c = e(496675),
        f = e(914010),
        g = e(715903),
        h = e(981631),
        I = e(372897),
        N = e(526761),
        _ = e(388032);
      function C(t) {
        return (0, r.e7)(
          [s.default, u.ZP],
          () => {
            if (null == t) return !1;
            let n = s.default.getId();
            return (0, g.EY)(u.ZP.getMember(t, n));
          },
          [t],
        );
      }
      function A(t) {
        return (0, r.cj)(
          [s.default, u.ZP, f.Z, d.Z],
          () => {
            let n = { nick: void 0, bio: void 0 },
              e = f.Z.getGuildId(),
              i = null != t ? t : e,
              r = d.Z.getGuild(i);
            if (null == r || null == i) return n;
            let l = s.default.getId(),
              o = u.ZP.getMember(i, l),
              a = (0, g.Ow)(null == o ? void 0 : o.flags);
            if (0 === a.size) return n;
            if (a.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
              if (null == t) {
                var c;
                n.nick = [
                  _.intl.formatToPlainString(_.t.WBUh3N, {
                    guildName: null !== (c = r.name) && void 0 !== c ? c : "",
                  }),
                ];
              } else n.nick = [_.intl.string(_.t.EPZCrK)];
            }
            return (
              a.has(I.q.AUTOMOD_QUARANTINED_BIO) &&
                (n.bio = [_.intl.string(_.t.dZh1v7)]),
              n
            );
          },
          [t],
        );
      }
      function E(t) {
        let {
            guildId: n,
            scrollPosition: e,
            analyticsLocation: s,
            analyticsLocations: u,
            openWithoutBackstack: f,
          } = t,
          { analyticsLocations: g } = (0, o.ZP)(),
          I = (0, r.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          _ = (0, r.e7)(
            [c.Z],
            () => null != I && c.Z.can(h.Plq.CHANGE_NICKNAME, I),
            [I],
          );
        return [
          i.useCallback(() => {
            if (null == I) return;
            let t = h.oAB.PROFILE_CUSTOMIZATION,
              n = N.NB.GUILD;
            _ ? (0, a.Fq)(I, null != u ? u : g) : (n = N.NB.USER_PROFILE);
            l.Z.open(t, n, {
              scrollPosition: e,
              analyticsLocation: s,
              analyticsLocations: u,
              openWithoutBackstack: f,
            });
          }, [_, e, s, u, f, I, g]),
          _,
        ];
      }
    },
    251871: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return Z;
          },
        }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        l = e(399606),
        o = e(481060),
        a = e(100527),
        s = e(906732),
        u = e(565138),
        d = e(314897),
        c = e(271383),
        f = e(430824),
        g = e(626135),
        h = e(715903),
        I = e(295474),
        N = e(273504),
        _ = e(981631),
        C = e(372897),
        A = e(388032),
        E = e(944331);
      function Z(t) {
        var n;
        let { onClose: e, transitionState: Z, guildId: M } = t,
          k = (0, l.e7)([d.default], () => d.default.getId()),
          R = (0, l.e7)([c.ZP], () => c.ZP.getMember(M, k), [M, k]),
          m = (0, l.e7)([f.Z], () => f.Z.getGuild(M), [M]),
          x =
            null !== (n = null == m ? void 0 : m.name) && void 0 !== n ? n : "",
          O = (0, h.no)(R),
          { analyticsLocations: p } = (0, s.ZP)(
            a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT,
          ),
          [v, L] = (0, I.ww)({
            guildId: M,
            analyticsLocations: p,
            openWithoutBackstack: !0,
          }),
          P = O.has(C.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? A.intl.string(A.t.SpDXIy)
            : A.intl.string(A.t["QRN+Sk"]);
        !L && (P = A.intl.string(A.t.FFj5Dg));
        let U = L ? A.intl.string(A.t["/PGQf3"]) : A.intl.string(A.t.WikgZ2);
        return (r.useEffect(() => {
          g.default.track(_.rMx.OPEN_MODAL, {
            type: N.dc,
            guild_id: M,
            other_user_id: k,
          });
        }, []),
        r.useEffect(() => {
          if (null == m) {
            e();
            return;
          }
        }, [m, e]),
        null == m)
          ? null
          : (0, i.jsxs)(o.ModalRoot, {
              transitionState: Z,
              size: o.ModalSize.SMALL,
              children: [
                (0, i.jsx)(o.ModalHeader, {
                  separator: !1,
                  children: (0, i.jsxs)("div", {
                    className: E.headerContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: E.guildIconContainer,
                        children: [
                          (0, i.jsx)(u.Z, { guild: m, size: u.Z.Sizes.LARGER }),
                          (0, i.jsx)("div", {
                            className: E.statusContainer,
                            children: (0, i.jsx)(o.ChatXIcon, {
                              size: "md",
                              color: "currentColor",
                              className: E.statusIcon,
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.Heading, {
                        color: "header-primary",
                        variant: "heading-md/semibold",
                        children: A.intl.format(A.t.kcYdTk, { guildName: x }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(o.ModalContent, {
                  children: (0, i.jsx)("div", {
                    className: E.descriptionContainer,
                    children: (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: P,
                    }),
                  }),
                }),
                (0, i.jsxs)(o.ModalFooter, {
                  children: [
                    (0, i.jsx)(o.Button, {
                      onClick: () => {
                        v(), e();
                      },
                      color: o.Button.Colors.BRAND,
                      look: o.Button.Looks.FILLED,
                      children: U,
                    }),
                    (0, i.jsx)(o.Button, {
                      onClick: e,
                      color: o.Button.Colors.PRIMARY,
                      look: o.Button.Looks.LINK,
                      children: A.intl.string(A.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    944331: function (t, n, e) {
      t.exports = {
        headerContainer: "headerContainer_e8233c",
        guildIconContainer: "guildIconContainer_e8233c",
        statusContainer: "statusContainer_e8233c",
        statusIcon: "statusIcon_e8233c",
        descriptionContainer: "descriptionContainer_e8233c",
      };
    },
  },
]);
//# sourceMappingURL=aaa523a81b1f1bd4f24c.js.map
