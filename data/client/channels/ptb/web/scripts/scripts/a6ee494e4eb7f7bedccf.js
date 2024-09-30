"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11166"],
  {
    971949: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return u;
          },
        });
      var n = s(735250);
      s(470079);
      var t = s(692547),
        _ = s(481060),
        L = s(906732),
        o = s(98278),
        r = s(790527),
        c = s(474936),
        d = s(981631),
        i = s(689938),
        M = s(476765),
        A = s(569548),
        l = s(860324);
      function D(e, a) {
        return (0, n.jsx)(
          _.TextBadge,
          {
            text: e,
            className: A.newBadge,
            color: t.Z.unsafe_rawColors.BRAND_500.css,
          },
          a,
        );
      }
      function u(e) {
        var a;
        let { guildCount: s, onClose: t, analyticsLocations: A, ...u } = e;
        let f =
            ((a = t),
            function (e, s) {
              return (0, n.jsx)(
                _.Clickable,
                {
                  className: M.learnMoreLink,
                  tag: "span",
                  onClick: () => {
                    a(), (0, o.z)();
                  },
                  children: e,
                },
                s,
              );
            }),
          { analyticsLocations: U } = (0, L.ZP)(A);
        return (0, n.jsx)(L.Gt, {
          value: U,
          children: (0, n.jsx)(r.Z, {
            artURL: l.Z,
            onClose: t,
            type: c.cd.GUILD_CAP_MODAL_UPSELL,
            title: i.Z.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
            body:
              s < d.DZw
                ? i.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
                    guildCount: s,
                    onAndMore: f,
                    newBadgeHook: D,
                  })
                : i.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
                    onAndMore: f,
                    newBadgeHook: D,
                  }),
            context:
              s < d.DZw
                ? i.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format(
                    { guildCount: s },
                  )
                : i.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
            glowUp: i.Z.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
              onAndMore: f,
            }),
            ...u,
          }),
        });
      }
    },
    476765: function (e, a, s) {
      e.exports = { learnMoreLink: "learnMoreLink_c0dac3" };
    },
    860324: function (e, a) {
      a.Z =
        "https://cdn.discordapp.com/assets/content/e79d4cfdd618a7a39abcd4d48afd7b216dab54ca862f39d293270af910e517e7.png";
    },
  },
]);
//# sourceMappingURL=a6ee494e4eb7f7bedccf.js.map
