"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11166"],
  {
    971949: function (n, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return L;
          },
        });
      var e = a(200651);
      a(192379);
      var o = a(692547),
        r = a(481060),
        c = a(906732),
        i = a(98278),
        s = a(790527),
        l = a(474936),
        d = a(981631),
        u = a(388032),
        f = a(530370),
        p = a(498600),
        k = a(860324);
      function C(n, t) {
        return (0, e.jsx)(
          r.TextBadge,
          {
            text: n,
            className: p.newBadge,
            color: o.Z.unsafe_rawColors.BRAND_500.css,
          },
          t,
        );
      }
      function L(n) {
        var t;
        let { guildCount: a, onClose: o, analyticsLocations: p, ...L } = n;
        let m =
            ((t = o),
            function (n, a) {
              return (0, e.jsx)(
                r.Clickable,
                {
                  className: f.learnMoreLink,
                  tag: "span",
                  onClick: () => {
                    t(), (0, i.z)();
                  },
                  children: n,
                },
                a,
              );
            }),
          { analyticsLocations: x } = (0, c.ZP)(p);
        return (0, e.jsx)(c.Gt, {
          value: x,
          children: (0, e.jsx)(s.Z, {
            artURL: k.Z,
            onClose: o,
            type: l.cd.GUILD_CAP_MODAL_UPSELL,
            title: u.intl.string(u.t.CoNXBw),
            body:
              a < d.DZw
                ? u.intl.format(u.t["5qLH7O"], {
                    guildCount: a,
                    onAndMore: m,
                    newBadgeHook: C,
                  })
                : u.intl.format(u.t.mk9CS0, { onAndMore: m, newBadgeHook: C }),
            context:
              a < d.DZw
                ? u.intl.formatToPlainString(u.t["C+Hqzs"], { guildCount: a })
                : u.intl.string(u.t.m0xavb),
            glowUp: u.intl.format(u.t["6Dl5X1"], { onAndMore: m }),
            ...L,
          }),
        });
      }
    },
    530370: function (n, t, a) {
      n.exports = { learnMoreLink: "learnMoreLink_c0dac3" };
    },
    860324: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e79d4cfdd618a7a39abcd4d48afd7b216dab54ca862f39d293270af910e517e7.png";
    },
  },
]);
//# sourceMappingURL=0ee279fe7416fd2e502d.js.map
