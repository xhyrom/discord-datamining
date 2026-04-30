"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32817"],
  {
    987144(e, l, t) {
      t.d(l, { g: () => g }), t(321073);
      var o = t(627968);
      t(64700);
      var s = t(231723),
        a = t(192308),
        i = t(820739),
        n = t(73825),
        d = t(323082),
        r = t(287809),
        u = t(178368),
        c = t(97352),
        h = t(473145),
        p = t(212637),
        f = t(652215);
      let S = "apply-guild-boost-modal";
      async function g(e) {
        let {
            analyticsLocations: l,
            analyticsLocation: g,
            analyticsSourceLocation: m,
            numberOfBoostsToAdd: y,
            onClose: C,
            onLoading: b,
            closeLayer: M,
            onSubscriptionConfirmation: w,
            onSubscribeComplete: A,
            guild: L,
            handleSubscribeModalClose: P,
            disablePremiumUpsell: U,
            inPopout: _,
            applicationId: k,
            intent: v,
          } = e,
          D = _ ? s.KX : s.SY,
          z = r.default.getCurrentUser();
        if (null == z) return;
        if (!z.verified)
          return void (0, a.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                t.e("54681"),
                t.e("14753"),
                t.e("12206"),
                t.e("90406"),
              ]).then(t.bind(t, 661925));
              return (l) => {
                let { onClose: t, ...s } = l;
                return (0, o.jsx)(e, { ...s, onClose: t });
              };
            },
            { contextKey: D },
          );
        let I = [];
        c.A.isLoadedForPremiumSKUs() || I.push((0, n.zS)()),
          u.A.hasFetched || (I.push(d.hP()), I.push((0, i.CD)())),
          I.length > 0 && (b?.(!0), await Promise.allSettled(I), b?.(!1));
        let K = (0, h.D$)(u.A.boostSlots),
          R = K.length,
          j = (e) => {
            C?.(), P?.(e);
          };
        if (R > 0 && (null == y || R >= y)) {
          let e;
          1 === R ? (e = K.slice(0, 1)) : null != y && (e = K.slice(0, y)),
            await (0, a.openModalLazy)(
              async () => {
                let { default: l } = await Promise.all([
                  t.e("80848"),
                  t.e("89324"),
                  t.e("90261"),
                  t.e("63009"),
                  t.e("79428"),
                  t.e("20317"),
                  t.e("47017"),
                  t.e("44376"),
                  t.e("25990"),
                  t.e("49089"),
                  t.e("10943"),
                  t.e("58164"),
                  t.e("5896"),
                  t.e("95602"),
                  t.e("62175"),
                  t.e("9793"),
                  t.e("22455"),
                  t.e("96817"),
                  t.e("18710"),
                  t.e("34428"),
                  t.e("38249"),
                ]).then(t.bind(t, 724624));
                return (t) => {
                  let { onClose: s, ...a } = t;
                  return (0, o.jsx)(l, {
                    ...a,
                    onClose: (e) => {
                      s(), j(e);
                    },
                    selectedGuild: L,
                    locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                    guildBoostSlots: e,
                    intent: v,
                  });
                };
              },
              {
                modalKey: S,
                onCloseRequest: () => {
                  (0, a.closeModal)(S), j(!1);
                },
                contextKey: D,
              },
            );
        } else
          (0, p.A)({
            analyticsLocations: l,
            analyticsLocation: g,
            analyticsSourceLocation: m,
            guildId: L.id,
            closeLayer: () => {
              C?.(), M?.();
            },
            totalNumberOfSlotsToAssign: y ?? 1,
            onCloseModal: j,
            disablePremiumUpsell: U,
            onSubscriptionConfirmation: w,
            onSubscribeComplete: A,
            inPopout: _,
            applicationId: k,
            intent: v,
          });
      }
    },
  },
]);
//# sourceMappingURL=32817.4a512d923a065b16.js.map
