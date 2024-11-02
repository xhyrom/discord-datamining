"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88938"],
  {
    390238: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return R;
          },
        }),
        a(47120);
      var r = a(200651),
        o = a(192379),
        t = a(120356),
        i = a.n(t),
        s = a(703533),
        l = a(442837),
        d = a(481060),
        c = a(607070),
        u = a(530618),
        C = a(70097),
        h = a(272008),
        m = a(497505),
        g = a(918701),
        f = a(475595),
        x = a(566078),
        p = a(644646),
        v = a(114732),
        _ = a(46140),
        b = a(675654),
        j = a(388032),
        w = a(685753);
      function N(e) {
        var n;
        let {
            transitionState: a,
            onClose: t,
            quest: C,
            location: g,
            reward: p,
          } = e,
          _ = o.useRef(null),
          [j, N] = o.useState(null),
          R = o.useRef(new s.qA()),
          S = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
          M = o.useMemo(() => (0, f.fh)(C, f.eC.HERO), [C]),
          k =
            (null === (n = C.userStatus) || void 0 === n
              ? void 0
              : n.claimedAt) != null,
          [A, B] = o.useState(k ? "claimed" : "loading");
        o.useEffect(() => {
          if (!k) {
            let e = x.r.build(C.config),
              n =
                e.rewardPlatforms.length > 0
                  ? e.rewardPlatforms[0]
                  : m.y$.CROSS_PLATFORM;
            (0, h.QB)(C.id, n, g)
              .then(() => B("claimed"))
              .catch(() => B("error"));
          }
        }, [C, g, k]);
        let I = "loading" === A;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.O_, {
              ref: N,
              className: w.confettiCanvas,
              environment: R.current,
            }),
            (0, r.jsx)("div", {
              ref: _,
              children: (0, r.jsx)(d.ModalRoot, {
                transitionState: a,
                size: d.ModalSize.DYNAMIC,
                className: i()(w.rootContainer, {
                  [w.rootContainerLoading]: I,
                }),
                hideShadow: !0,
                children: I
                  ? (0, r.jsx)(d.Spinner, {
                      type: d.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === A
                    ? (0, r.jsx)(v.Z, { onClose: t })
                    : (0, r.jsx)(y, {
                        quest: C,
                        primaryColor: C.config.colors.primary,
                        secondaryColor: C.config.colors.secondary,
                        rewardName: p.messages.name,
                        backgroundUrl: M.url,
                        location: g,
                        onClose: t,
                      }),
              }),
            }),
            !S &&
              !k &&
              "claimed" === A &&
              (0, r.jsx)(u.Z, {
                confettiTarget: _.current,
                confettiCanvas: j,
                sprites: b.CA,
                colors: b.Br,
              }),
          ],
        });
      }
      function y(e) {
        let {
          quest: n,
          rewardName: a,
          primaryColor: o,
          secondaryColor: t,
          backgroundUrl: s,
          location: l,
          onClose: c,
        } = e;
        return (0, r.jsxs)("div", {
          className: w.claimedRootContainer,
          children: [
            (0, r.jsxs)("div", {
              className: w.headerContainer,
              children: [
                (0, r.jsx)(C.Z, {
                  className: w.headerBackground,
                  autoPlay: !1,
                  loop: !1,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  poster: s,
                }),
                (0, r.jsxs)("div", {
                  className: w.headerForeground,
                  children: [
                    (0, r.jsx)("div", {
                      className: w.previewContainer,
                      children: (0, r.jsx)(p.Z, {
                        autoplay: !0,
                        className: i()(w.rewardTile),
                        learnMoreStyle: null,
                        quest: n,
                        questContent: l,
                        location: _.dr.INGAME_REWARD_MODAL,
                      }),
                    }),
                    (0, r.jsx)(d.ModalCloseButton, {
                      className: w.close,
                      withCircleBackground: !0,
                      onClick: c,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(d.ModalFooter, {
              className: w.footerContainer,
              separator: !1,
              children: (0, r.jsxs)("div", {
                className: w.gradient,
                style: {
                  backgroundImage: "linear-gradient(180deg, "
                    .concat(o, ", ")
                    .concat(t, ")"),
                },
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-lg/bold",
                    color: "always-white",
                    className: w.heading,
                    children: j.intl.string(j.t["0/Yz+f"]),
                  }),
                  (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    className: w.text,
                    children: j.intl.format(j.t["v1u/zs"], { rewardName: a }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { quest: n, location: a, onClose: t, transitionState: i } = e,
          s = o.useMemo(() => (0, g.K)(n.config), [n]);
        return null == s
          ? null
          : (0, r.jsx)(N, {
              onClose: t,
              transitionState: i,
              quest: n,
              location: a,
              reward: s,
            });
      }
    },
    685753: function (e, n, a) {
      e.exports = {
        rootContainer: "rootContainer_ecb9ed",
        rootContainerLoading: "rootContainerLoading_ecb9ed",
        claimedRootContainer: "claimedRootContainer_ecb9ed",
        headerContainer: "headerContainer_ecb9ed",
        headerBackground: "headerBackground_ecb9ed",
        headerForeground: "headerForeground_ecb9ed",
        previewContainer: "previewContainer_ecb9ed",
        close: "close_ecb9ed",
        footerContainer: "footerContainer_ecb9ed",
        gradient: "gradient_ecb9ed",
        heading: "heading_ecb9ed",
        text: "text_ecb9ed",
        confettiCanvas: "confettiCanvas_ecb9ed",
        rewardTile: "rewardTile_ecb9ed",
      };
    },
  },
]);
//# sourceMappingURL=0d19e68e7b17649f4061.js.map
