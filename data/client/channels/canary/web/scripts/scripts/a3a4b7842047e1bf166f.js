"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7312"],
  {
    715627: function (e, t, i) {
      i(47120);
      var n = i(735250),
        o = i(470079),
        r = i(887024),
        a = i(745510),
        c = i(675654);
      let l = { xMin: -40, xMax: 40, yMin: -40, yMax: -70 },
        u = (e, t, i) => (null == i ? t : (e * i) / 100),
        f = o.memo(function (e) {
          let {
              confettiTarget: t,
              colors: i,
              emojiURL: f,
              numBursts: s,
              particlesPerBurst: d,
              offsetXPercentageMax: p,
              offsetXPercentageMin: m,
              offsetYPercentageMax: h,
              offsetYPercentageMin: _,
              customConfettiCanvas: v,
              speedValues: w = l,
              dragCoefficientValue: x = 0.001,
              onAnimationEnd: C,
            } = e,
            [g, y] = o.useState(null),
            { confettiCanvas: b } = o.useContext(a.h),
            G = (0, r.uR)(null != v ? v : b, g),
            [M, H] = o.useState(!1);
          o.useEffect(() => {
            M && (null == C || C());
          });
          let k = o.useMemo(() => {
            if (null != f) return [{ src: f, colorize: !1 }];
          }, [f]);
          return (
            o.useEffect(() => {
              if (null == t) return;
              let e = Array(null != s ? s : 4).fill(0);
              return (
                (e = e.map((i, n) =>
                  setTimeout(() => {
                    G.createMultipleConfetti(
                      (function (e, t, i, n, o) {
                        let r =
                            arguments.length > 5 && void 0 !== arguments[5]
                              ? arguments[5]
                              : l,
                          a =
                            arguments.length > 6 && void 0 !== arguments[6]
                              ? arguments[6]
                              : 0.001,
                          f = u(e.width, 100, i),
                          s = u(e.height, 75, o),
                          d = u(e.width, 350, t),
                          p = u(e.height, 75, n),
                          { xMin: m, xMax: h, yMin: _, yMax: v } = r;
                        return {
                          ...c.We,
                          position: {
                            type: "static-random",
                            minValue: { x: e.left + f, y: e.top + s },
                            maxValue: { x: e.left + d, y: e.top + p },
                          },
                          velocity: {
                            type: "static-random",
                            minValue: { x: m, y: _ },
                            maxValue: { x: h, y: v },
                          },
                          size: {
                            type: "static-random",
                            minValue: c.Ko,
                            maxValue: c.Ko,
                          },
                          dragCoefficient: { type: "static", value: a },
                        };
                      })(t.getBoundingClientRect(), p, m, h, _, w, x),
                      null != d ? d : 50,
                    ),
                      n === e.length - 1 && null != C && H(!0);
                  }, 60 * n),
                )),
                () => {
                  for (let t of e) clearTimeout(t);
                }
              );
            }, [G, t, s, d, p, m, h, _, w, x, C]),
            (0, n.jsx)(r.Ji, {
              ref: y,
              sprites: null != k ? k : c.CA,
              colors: null != i ? i : c.Br,
              spriteWidth: c.Ko,
              spriteHeight: c.Ko,
            })
          );
        });
      t.Z = f;
    },
    464029: function (e, t, i) {
      e.exports = {
        avatarDecorationPreview: "avatarDecorationPreview_cb69cc",
        profileEffectPreview: "profileEffectPreview_cb69cc",
      };
    },
    670629: function (e, t, i) {
      e.exports = {
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
    296140: function (e, t, i) {
      e.exports = {
        previewContainer: "previewContainer_c99d75",
        previewContainerSetHeight: "previewContainerSetHeight_c99d75",
        previewContainerAnimation: "previewContainerAnimation_c99d75",
        preview: "preview_c99d75",
        previewForCollected: "previewForCollected_c99d75 preview_c99d75",
        purchasedEffect: "purchasedEffect_c99d75",
      };
    },
  },
]);
//# sourceMappingURL=a3a4b7842047e1bf166f.js.map
