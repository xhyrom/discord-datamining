"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99032"],
  {
    832149: function (t, e, o) {
      var i = o(200651);
      o(192379);
      var n = o(481060);
      e.Z = (t) => {
        let {
          product: e,
          analyticsLocations: a,
          title: l,
          description: r,
          shouldShowPromotionalExperience: u,
        } = t;
        (0, n.openModalLazy)(async () => {
          let { default: t } = await Promise.all([
            o.e("87624"),
            o.e("47859"),
          ]).then(o.bind(o, 331042));
          return (o) =>
            (0, i.jsx)(t, {
              product: e,
              analyticsLocations: a,
              title: l,
              description: r,
              shouldShowPromotionalExperience: u,
              ...o,
            });
        });
      };
    },
    715627: function (t, e, o) {
      o(47120);
      var i = o(200651),
        n = o(192379),
        a = o(119617),
        l = o(745510),
        r = o(675654);
      let u = { xMin: -40, xMax: 40, yMin: -40, yMax: -70 },
        c = (t, e, o) => (null == o ? e : (t * o) / 100),
        s = n.memo(function (t) {
          let {
              confettiTarget: e,
              colors: o,
              emojiURL: s,
              numBursts: f,
              particlesPerBurst: d,
              offsetXPercentageMax: m,
              offsetXPercentageMin: p,
              offsetYPercentageMax: h,
              offsetYPercentageMin: x,
              customConfettiCanvas: y,
              speedValues: _ = u,
              dragCoefficientValue: g = 1.66,
              onAnimationEnd: v,
            } = t,
            [w, b] = n.useState(null),
            { confettiCanvas: C } = n.useContext(l.h),
            M = (0, a.uR)(null != y ? y : C, w),
            [G, k] = n.useState(!1);
          n.useEffect(() => {
            G && (null == v || v());
          });
          let P = n.useMemo(() => {
            if (null != s) return [{ src: s, colorize: !1 }];
          }, [s]);
          return (
            n.useEffect(() => {
              if (null == e) return;
              let t = Array(null != f ? f : 4).fill(0);
              return (
                (t = t.map((o, i) =>
                  setTimeout(() => {
                    M.createMultipleConfetti(
                      (function (t, e, o, i, n) {
                        let a =
                            arguments.length > 5 && void 0 !== arguments[5]
                              ? arguments[5]
                              : u,
                          l =
                            arguments.length > 6 && void 0 !== arguments[6]
                              ? arguments[6]
                              : 1.66,
                          s = c(t.width, 100, o),
                          f = c(t.height, 75, n),
                          d = c(t.width, 350, e),
                          m = c(t.height, 75, i),
                          { xMin: p, xMax: h, yMin: x, yMax: y } = a;
                        return {
                          ...r.We,
                          position: {
                            type: "static-random",
                            minValue: { x: t.left + s, y: t.top + f },
                            maxValue: { x: t.left + d, y: t.top + m },
                          },
                          velocity: {
                            type: "static-random",
                            minValue: { x: p, y: x },
                            maxValue: { x: h, y: y },
                          },
                          size: {
                            type: "static-random",
                            minValue: r.Ko,
                            maxValue: r.Ko,
                          },
                          dragCoefficient: { type: "static", value: l },
                        };
                      })(e.getBoundingClientRect(), m, p, h, x, _, g),
                      null != d ? d : 50,
                    ),
                      i === t.length - 1 && null != v && k(!0);
                  }, 60 * i),
                )),
                () => {
                  for (let e of t) clearTimeout(e);
                }
              );
            }, [M, e, f, d, m, p, h, x, _, g, v]),
            (0, i.jsx)(a.Ji, {
              ref: b,
              sprites: null != P ? P : r.CA,
              colors: null != o ? o : r.Br,
              spriteWidth: r.Ko,
              spriteHeight: r.Ko,
            })
          );
        });
      e.Z = s;
    },
    665375: function (t, e, o) {
      t.exports = {
        avatarDecorationPreview: "avatarDecorationPreview_cb69cc",
        profileEffectPreview: "profileEffectPreview_cb69cc",
      };
    },
    675581: function (t, e, o) {
      t.exports = {
        header: "header_f7625d",
        customGiftHeader: "customGiftHeader_f7625d",
        backSplash: "backSplash_f7625d",
        customMessage: "customMessage_f7625d",
        giftAnimation: "giftAnimation_f7625d",
        customGiftHeaderText: "customGiftHeaderText_f7625d",
        content: "content_f7625d",
        contentCustomGift: "contentCustomGift_f7625d",
        body: "body_f7625d",
        closeButton: "closeButton_f7625d",
        seasonalGiftIcon: "seasonalGiftIcon_f7625d",
        modal: "modal_f7625d",
      };
    },
  },
]);
//# sourceMappingURL=9a1b9a6f563c9152d757.js.map
