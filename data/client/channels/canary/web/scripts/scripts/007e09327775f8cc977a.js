"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81975"],
  {
    484097: function (e, l, n) {
      n.r(l);
      var t = n(200651);
      n(192379);
      var u = n(593473),
        i = n(512969),
        a = n(442837),
        d = n(287734),
        r = n(703656),
        c = n(592125),
        s = n(896797),
        h = n(998502),
        o = n(981631);
      a.ZP.initialize();
      l.default = (e) => {
        var l;
        let { location: n } = e;
        return (0, t.jsx)(i.l_, {
          to:
            null !==
              (l = (function e(l) {
                let n =
                    !(arguments.length > 1) ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  t = c.Z.getChannel(l);
                if (null != t) {
                  h.ZP.focus();
                  let e = t.guild_id,
                    l = t.id;
                  return (
                    t.type === o.d4z.GUILD_VOICE &&
                      (null != t.getGuildId() &&
                        d.default.selectVoiceChannel(t.id),
                      (l = e)),
                    null != l && null != e ? o.Z5c.CHANNEL(e, l) : null
                  );
                }
                if (n) {
                  let n = () => {
                    c.Z.removeChangeListener(n);
                    let t = e(l, !1);
                    null != t && (0, r.uL)(t);
                  };
                  c.Z.addChangeListener(n);
                }
                return null;
              })((0, u.parse)(n.search).channelId)) && void 0 !== l
              ? l
              : s.Z.fallbackRoute,
        });
      };
    },
  },
]);
//# sourceMappingURL=007e09327775f8cc977a.js.map
