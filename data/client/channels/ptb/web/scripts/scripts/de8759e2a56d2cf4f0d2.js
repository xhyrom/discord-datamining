"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63264"],
  {
    715627: function (t, e, i) {
      i(47120);
      var o = i(200651),
        n = i(192379),
        a = i(703533),
        l = i(745510),
        u = i(675654);
      let c = { xMin: -40, xMax: 40, yMin: -40, yMax: -70 },
        r = (t, e, i) => (null == i ? e : (t * i) / 100),
        s = n.memo(function (t) {
          let {
              confettiTarget: e,
              colors: i,
              emojiURL: s,
              numBursts: f,
              particlesPerBurst: d,
              offsetXPercentageMax: m,
              offsetXPercentageMin: p,
              offsetYPercentageMax: h,
              offsetYPercentageMin: x,
              customConfettiCanvas: _,
              speedValues: y = c,
              dragCoefficientValue: g = 1.66,
              onAnimationEnd: v,
            } = t,
            [C, b] = n.useState(null),
            { confettiCanvas: w } = n.useContext(l.h),
            G = (0, a.uR)(null != _ ? _ : w, C),
            [M, k] = n.useState(!1);
          n.useEffect(() => {
            M && (null == v || v());
          });
          let V = n.useMemo(() => {
            if (null != s) return [{ src: s, colorize: !1 }];
          }, [s]);
          return (
            n.useEffect(() => {
              if (null == e) return;
              let t = Array(null != f ? f : 4).fill(0);
              return (
                (t = t.map((i, o) =>
                  setTimeout(() => {
                    G.createMultipleConfetti(
                      (function (t, e, i, o, n) {
                        let a =
                            arguments.length > 5 && void 0 !== arguments[5]
                              ? arguments[5]
                              : c,
                          l =
                            arguments.length > 6 && void 0 !== arguments[6]
                              ? arguments[6]
                              : 1.66,
                          s = r(t.width, 100, i),
                          f = r(t.height, 75, n),
                          d = r(t.width, 350, e),
                          m = r(t.height, 75, o),
                          { xMin: p, xMax: h, yMin: x, yMax: _ } = a;
                        return {
                          ...u.We,
                          position: {
                            type: "static-random",
                            minValue: { x: t.left + s, y: t.top + f },
                            maxValue: { x: t.left + d, y: t.top + m },
                          },
                          velocity: {
                            type: "static-random",
                            minValue: { x: p, y: x },
                            maxValue: { x: h, y: _ },
                          },
                          size: {
                            type: "static-random",
                            minValue: u.Ko,
                            maxValue: u.Ko,
                          },
                          dragCoefficient: { type: "static", value: l },
                        };
                      })(e.getBoundingClientRect(), m, p, h, x, y, g),
                      null != d ? d : 50,
                    ),
                      o === t.length - 1 && null != v && k(!0);
                  }, 60 * o),
                )),
                () => {
                  for (let e of t) clearTimeout(e);
                }
              );
            }, [G, e, f, d, m, p, h, x, y, g, v]),
            (0, o.jsx)(a.Ji, {
              ref: b,
              sprites: null != V ? V : u.CA,
              colors: null != i ? i : u.Br,
              spriteWidth: u.Ko,
              spriteHeight: u.Ko,
            })
          );
        });
      e.Z = s;
    },
    464029: function (t, e, i) {
      t.exports = {
        avatarDecorationPreview: "avatarDecorationPreview_cb69cc",
        profileEffectPreview: "profileEffectPreview_cb69cc",
      };
    },
    670629: function (t, e, i) {
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
//# sourceMappingURL=de8759e2a56d2cf4f0d2.js.map
