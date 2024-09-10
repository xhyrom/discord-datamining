"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11166"],
  {
    483569: function (e) {
      e.exports = "/assets/c04d891bf4f62238f7f4.png";
    },
    971949: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return d;
          },
        });
      var _ = n(735250);
      n(470079);
      var a = n(692547),
        L = n(481060),
        t = n(906732),
        o = n(98278),
        r = n(790527),
        c = n(474936),
        M = n(981631),
        i = n(689938),
        A = n(476765),
        l = n(569548),
        D = n(483569);
      function u(e, s) {
        return (0, _.jsx)(
          L.TextBadge,
          {
            text: e,
            className: l.newBadge,
            color: a.Z.unsafe_rawColors.BRAND_500.css,
          },
          s,
        );
      }
      function d(e) {
        var s;
        let { guildCount: n, onClose: a, analyticsLocations: l, ...d } = e;
        let f =
            ((s = a),
            function (e, n) {
              return (0, _.jsx)(
                L.Clickable,
                {
                  className: A.learnMoreLink,
                  tag: "span",
                  onClick: () => {
                    s(), (0, o.z)();
                  },
                  children: e,
                },
                n,
              );
            }),
          { analyticsLocations: U } = (0, t.ZP)(l);
        return (0, _.jsx)(t.Gt, {
          value: U,
          children: (0, _.jsx)(r.Z, {
            artURL: D,
            onClose: a,
            type: c.cd.GUILD_CAP_MODAL_UPSELL,
            title: i.Z.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
            body:
              n < M.DZw
                ? i.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
                    guildCount: n,
                    onAndMore: f,
                    newBadgeHook: u,
                  })
                : i.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
                    onAndMore: f,
                    newBadgeHook: u,
                  }),
            context:
              n < M.DZw
                ? i.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format(
                    { guildCount: n },
                  )
                : i.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
            glowUp: i.Z.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
              onAndMore: f,
            }),
            ...d,
          }),
        });
      }
    },
    476765: function (e, s, n) {
      e.exports = { learnMoreLink: "learnMoreLink_c0dac3" };
    },
  },
]);
//# sourceMappingURL=e2586a7577be049bbb1c.js.map
