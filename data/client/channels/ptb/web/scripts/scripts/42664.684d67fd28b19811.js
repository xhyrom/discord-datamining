"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42664"],
  {
    567035(e, a, t) {
      t.d(a, { A: () => i }), t(321073);
      var s = t(735438),
        d = t.n(s),
        l = t(334738),
        r = t(591552),
        n = t(695633),
        c = t(808728),
        p = t(222823),
        u = t(954571),
        I = t(935208),
        h = t(652215),
        A = t(790782);
      function i(e, a, t) {
        let s = d()
          .flatMap(e, (e) => {
            let a = c.Ay.getSelectableChannelIds(e),
              t = [...a, ...c.Ay.getVocalChannelIds(e)],
              s = n.A.getActiveJoinedThreadsForGuild(e);
            for (let e of a) {
              let a = s[e] ?? {};
              for (let e in a) t.push(e);
            }
            return t;
          })
          .map((e) => ({
            channelId: e,
            readStateType: A.P.CHANNEL,
            messageId: p.Ay.lastMessageId(e),
          }));
        return (
          e.forEach((e) => {
            s.push({
              channelId: I.default.cast(e),
              readStateType: A.P.GUILD_EVENT,
              messageId: p.Ay.lastMessageId(e, A.P.GUILD_EVENT),
            }),
              s.push({
                channelId: I.default.cast(e),
                readStateType: A.P.GUILD_ONBOARDING_QUESTION,
                messageId: r.A.ackIdForGuild(e),
              });
          }),
          u.default.track(h.HAw.MARK_AS_READ, { source: a, type: "guild" }),
          (0, l.Uq)(s, t)
        );
      }
    },
  },
]);
//# sourceMappingURL=42664.684d67fd28b19811.js.map
