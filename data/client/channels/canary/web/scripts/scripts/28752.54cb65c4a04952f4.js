"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28752"],
  {
    963027(t, n, i) {
      i.d(n, { Ay: () => p, r2: () => f }), i(321073);
      var e = i(95701),
        l = i(994500),
        r = i(287809),
        s = i(427262),
        u = i(148719),
        a = i(47167),
        o = i(652215),
        c = i(985018);
      function p(t) {
        let n,
          i,
          {
            channel: p,
            unread: f = !1,
            mentionCount: g = 0,
            voiceStates: h,
            embeddedActivitiesCount: D,
            isSubscriptionGated: b,
            needSubscriptionToAccess: m,
            isIncomingCall: I = !1,
            isOngoingCall: L = !1,
          } = t,
          T = (0, a.m1)(p, r.default, l.A),
          N = (function (t) {
            if (t) return c.intl.string(c.t["4qvAtn"]);
          })((0, u.A)(p));
        switch (p.type) {
          case o.rbe.DM:
            n = f ? c.t.F2MZsu : c.t.fYqXVY;
            break;
          case o.rbe.GROUP_DM:
            i = [
              c.intl.formatToPlainString(f ? c.t["fxxUo/"] : c.t.lts3Ld, {
                channelName: T,
              }),
              c.intl.formatToPlainString(c.t.CxSA5N, {
                members: p.recipients.length + 1,
              }),
            ].join(", ");
            break;
          case o.rbe.GUILD_STORE:
            n = c.t.Bo4msg;
            break;
          case o.rbe.GUILD_DIRECTORY:
            n = c.t["92EAF2"];
            break;
          case o.rbe.GUILD_ANNOUNCEMENT:
            n = g > 0 ? c.t.sDKIpm : f ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
          case o.rbe.GUILD_VOICE:
            let k = [
              c.intl.formatToPlainString(c.t.bkpadO, { channelName: T }),
            ];
            g > 0 &&
              k.push(
                c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: g }),
              ),
              f && k.push(c.intl.string(c.t.x5zAGZ));
            let C = p.userLimit,
              E = null != C && C > 0;
            if (null != h && h.length > 0) {
              let t = h.length - 3,
                n = h
                  .slice(0, 3)
                  .map((t) => {
                    let { nick: n, user: i } = t;
                    return n ?? (0, s.mG)(i);
                  })
                  .join(", ");
              k.push(n),
                t > 0 &&
                  k.push(
                    c.intl.formatToPlainString(c.t.sfgpgr, { overflow: t }),
                  ),
                E &&
                  k.push(
                    c.intl.formatToPlainString(c.t["6qgTOF"], {
                      userCount: h.length,
                      limit: C,
                    }),
                  );
            }
            i = k.join(", ");
            break;
          case o.rbe.GUILD_STAGE_VOICE:
            n = c.t.TPPk2T;
            break;
          default:
            n = e.Le.has(p.type)
              ? g > 0
                ? c.t["ZL7+I6"]
                : f
                  ? c.t.YlVvmc
                  : c.t["0nZpiF"]
              : g > 0
                ? c.t.g8ONM0
                : f
                  ? c.t.smf1CZ
                  : c.t.s0JADj;
        }
        let O =
          null != i
            ? [i]
            : null != n
              ? [
                  c.intl.formatToPlainString(n, {
                    channelName: T,
                    mentionCount: g,
                  }),
                ]
              : [];
        I
          ? O.push(c.intl.string(c.t["fk1/bX"]))
          : L && O.push(c.intl.string(c.t["NGg/fm"])),
          null != D &&
            D > 0 &&
            O.push(
              c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: D }),
            );
        let P = (function (t) {
          let { isSubscriptionGated: n, needSubscriptionToAccess: i } = t;
          if (n)
            if (i) return c.intl.string(c.t["oj+HOs"]);
            else return c.intl.string(c.t.xI3TQQ);
        })({ isSubscriptionGated: b, needSubscriptionToAccess: m });
        return null != P && O.push(P), null != N && O.push(N), O.join(", ");
      }
      function f(t) {
        let { channel: n, muted: i, userStatus: e, isFavorite: l } = t,
          r = [];
        return (l && r.push(c.intl.string(c.t.cCPjSK)), !0 === i)
          ? (r.push(c.intl.string(c.t.C4zCMb)), r.join(", "))
          : (n.type === o.rbe.DM &&
              null != e &&
              r.push(
                (function (t) {
                  switch (t) {
                    case o.clD.ONLINE:
                      return (0, s.MU)(o.clD.ONLINE);
                    case o.clD.IDLE:
                      return (0, s.MU)(o.clD.IDLE);
                    case o.clD.DND:
                      return (0, s.MU)(o.clD.DND);
                    case o.clD.INVISIBLE:
                      return (0, s.MU)(o.clD.INVISIBLE);
                    default:
                      return "";
                  }
                })(e),
              ),
            r.length > 0 ? r.join(", ") : void 0);
      }
    },
  },
]);
//# sourceMappingURL=28752.54cb65c4a04952f4.js.map
