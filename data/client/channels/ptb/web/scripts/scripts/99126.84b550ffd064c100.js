"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99126"],
  {
    481045(e, i, s) {
      s.d(i, { L7: () => k, qA: () => C });
      var t = s(627968),
        l = s(17928);
      if (21552 == s.j) var r = s(939249);
      if (21552 == s.j) var n = s(320448);
      if (21552 == s.j) var a = s(661531);
      if (21552 == s.j) var d = s(834730);
      var c = s(253932),
        u = s(780964),
        o = s(858897),
        h = s(711014),
        j = s(115063),
        f = s(365258),
        p = s(926418),
        v = s(395277),
        x = s(985018),
        A = s(141710);
      let k = () => {
        (0, o.openUserSettings)(u.X.ACTIVITY_PRIVACY_PANEL);
      };
      function g(e) {
        let { children: i, onClick: s } = e;
        return (0, t.jsxs)(r.D, {
          className: A.E1,
          onClick: s,
          children: [
            (0, t.jsx)("div", { className: A.j3, children: i }),
            (0, t.jsx)(n._, { color: a.A.colors.TEXT_SUBTLE, size: "xs" }),
          ],
        });
      }
      function C(e) {
        let { onClosePopout: i } = e,
          s = c.tz.useSetting(),
          r = (0, l.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()),
          n = (0, j.Kk)(),
          a = r.filter((e) => !n.has(e)),
          u = (0, f.AB)(a);
        return 0 === r.length
          ? null
          : (0, t.jsxs)(g, {
              onClick: () => {
                i(), k();
              },
              children: [
                (0, t.jsx)(d.E, {
                  variant: "text-sm/semibold",
                  children: x.intl.string(
                    s ? v.default["3GrhnF"] : v.default["54ycKJ"],
                  ),
                }),
                (0, t.jsx)(p.l, { guildIds: u, prioritizeSelectedGuild: !0 }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=99126.84b550ffd064c100.js.map
