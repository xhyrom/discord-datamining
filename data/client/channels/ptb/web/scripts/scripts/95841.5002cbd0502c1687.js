"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95841"],
  {
    81400(t, e, l) {
      l.d(e, { EC: () => U, j8: () => b, uZ: () => O }), l(938796);
      var n = l(64700),
        i = l(702841),
        u = l(159001),
        r = l(507553),
        d = l(591179),
        A = l(780964),
        a = l(495544),
        s = l(696451),
        c = l(71393),
        I = l(576705),
        o = l(967198),
        E = l(229527),
        f = l(652215),
        g = l(340837),
        _ = l(355097),
        N = l(985018);
      function O(t) {
        return (0, i.bG)(
          [a.default, s.Ay],
          () => {
            if (null == t) return !1;
            let e = a.default.getId();
            return (0, E.TR)(s.Ay.getMember(t, e));
          },
          [t],
        );
      }
      function U(t) {
        return (0, i.cf)(
          [a.default, s.Ay, o.A, c.A],
          () => {
            let e = { nick: void 0, bio: void 0 },
              l = o.A.getGuildId(),
              n = t ?? l,
              i = c.A.getGuild(n);
            if (null == i || null == n) return e;
            let u = a.default.getId(),
              r = s.Ay.getMember(n, u),
              d = (0, E.wR)(r?.flags);
            return (
              0 === d.size ||
                (d.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                  (null == t
                    ? (e.nick = [
                        N.intl.formatToPlainString(N.t.WBUh3O, {
                          guildName: i.name ?? "",
                        }),
                      ])
                    : (e.nick = [N.intl.string(N.t.EPZCrM)])),
                d.has(g.D.AUTOMOD_QUARANTINED_BIO) &&
                  (e.bio = [N.intl.string(N.t.dZh1vz)])),
              e
            );
          },
          [t],
        );
      }
      function b(t) {
        let { guildId: e, scrollPosition: s, analyticsLocations: o } = t,
          E = (0, i.bG)([c.A], () => c.A.getGuild(e), [e]),
          g = (0, i.bG)(
            [I.A],
            () => null != E && I.A.can(f.xBc.CHANGE_NICKNAME, E),
            [E],
          ),
          N = (0, d.X)("AutomodQuarantineUtils");
        return [
          n.useCallback(() => {
            if (null == E) return;
            f.nc_.PROFILE_CUSTOMIZATION;
            let t = _.Eq.GUILD;
            if ((g ? (0, u.V2)(E.id) : (t = _.Eq.USER_PROFILE), N)) {
              let { openUserProfileModal: t } = l(975732);
              t({
                userId: a.default.getId(),
                guildId: E.id,
                sourceAnalyticsLocations: o,
              });
            } else {
              let { openUserSettings: e } = l(858897);
              r.A.setState({ subsection: t, scrollPosition: s }),
                e(A.X.PROFILE_PANEL, { analyticsLocations: o });
            }
          }, [g, s, o, E, N]),
          g,
        ];
      }
    },
  },
]);
//# sourceMappingURL=95841.5002cbd0502c1687.js.map
