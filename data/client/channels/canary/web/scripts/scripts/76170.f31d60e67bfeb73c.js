"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76170"],
  {
    959249(e, i, t) {
      t.d(i, { d: () => p });
      var a = t(627968);
      t(64700);
      var n = t(503698),
        s = t.n(n),
        l = t(785651),
        r = t(717421),
        o = t(834730),
        d = t(565645);
      let m = (0, t(945810).mj)({
        name: "2026-03-soundboard-sound-preview",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
      var c = t(71393),
        u = t(465794),
        x = t(788868),
        v = t(985018),
        j = t(379378);
      function p(e) {
        let {
            showUpsell: i,
            text: t,
            textVariant: n,
            button: p,
            buttonAnalyticsObject: g,
            className: b,
            onSubscribeModalClose: f,
            position: h = "floating",
            hoveredNitroLockedSound: N,
            useUpdatedStyling: k = !1,
            subscribeButtonVariantOverride: I,
            leadingAction: w,
          } = e,
          { enabled: C } = m.useConfig({
            location: "PremiumFloatingPickerUpsell",
          }),
          E = (0, r.z)({
            transform: i ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!i,
            config: { tension: 120, friction: 14 },
          }),
          y = C && null != N,
          A = N?.emojiId != null || N?.emojiName != null,
          O = t;
        if (y) {
          let e = c.A.getGuild(N.guildId);
          O = v.intl.format(v.t.eku049, {
            serverName: e?.name ?? v.intl.string(v.t.DmIUGK),
          });
        }
        return (0, a.jsxs)(l.animated.div, {
          style: { ...E },
          className: s()(
            j.Zj,
            k && j.ww,
            y && j.u8,
            { [j.tO]: "floating" === h, [j.Kx]: "inline" === h },
            b,
          ),
          children: [
            y &&
              (0, a.jsxs)("div", {
                className: j.Ed,
                children: [
                  (0, a.jsxs)("div", {
                    className: j.vg,
                    children: [
                      A &&
                        (0, a.jsx)(d.A, {
                          emojiId: N.emojiId,
                          emojiName: N.emojiName,
                        }),
                      (0, a.jsx)(o.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        children: N.name,
                      }),
                    ],
                  }),
                  (0, a.jsx)(o.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: j.Fr,
                    children: O ?? t,
                  }),
                ],
              }),
            !y &&
              (0, a.jsx)(o.E, {
                variant: n ?? "text-sm/medium",
                color: "text-strong",
                className: j.tD,
                children: t,
              }),
            null != w && (0, a.jsx)("div", { className: j.Zv, children: w }),
            "string" == typeof p
              ? (0, a.jsx)(u.A, {
                  size: "sm",
                  subscriptionTier: x.pe.TIER_2,
                  buttonTextOverride: p,
                  premiumModalAnalyticsLocation: g,
                  tabIndex: i ? 0 : -1,
                  onSubscribeModalClose: f,
                  variantOverride: I,
                })
              : p,
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=76170.f31d60e67bfeb73c.js.map
