"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88938"],
  {
    390238: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return S;
          },
        }),
        a(47120);
      var r = a(200651),
        o = a(192379),
        t = a(120356),
        i = a.n(t),
        s = a(119617),
        d = a(442837),
        l = a(481060),
        c = a(607070),
        u = a(530618),
        h = a(70097),
        C = a(272008),
        m = a(497505),
        f = a(918701),
        g = a(475595),
        x = a(566078),
        p = a(644646),
        v = a(114732),
        _ = a(46140),
        j = a(675654),
        b = a(388032),
        w = a(44819);
      function N(e) {
        var n;
        let {
            transitionState: a,
            onClose: t,
            quest: h,
            location: f,
            reward: p,
          } = e,
          _ = o.useRef(null),
          [b, N] = o.useState(null),
          S = o.useRef(new s.qA()),
          M = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
          k = o.useMemo(() => (0, g.fh)(h, g.eC.HERO), [h]),
          y =
            (null === (n = h.userStatus) || void 0 === n
              ? void 0
              : n.claimedAt) != null,
          [A, B] = o.useState(y ? "claimed" : "loading");
        o.useEffect(() => {
          if (!y) {
            let e = x.r.build(h.config),
              n =
                e.rewardPlatforms.length > 0
                  ? e.rewardPlatforms[0]
                  : m.y$.CROSS_PLATFORM;
            (0, C.QB)(h.id, n, f)
              .then(() => B("claimed"))
              .catch(() => B("error"));
          }
        }, [h, f, y]);
        let T = "loading" === A;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.O_, {
              ref: N,
              className: w.confettiCanvas,
              environment: S.current,
            }),
            (0, r.jsx)("div", {
              ref: _,
              children: (0, r.jsx)(l.ModalRoot, {
                transitionState: a,
                size: l.ModalSize.DYNAMIC,
                className: i()(w.rootContainer, {
                  [w.rootContainerLoading]: T,
                }),
                hideShadow: !0,
                children: T
                  ? (0, r.jsx)(l.Spinner, {
                      type: l.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === A
                    ? (0, r.jsx)(v.Z, { onClose: t })
                    : (0, r.jsx)(R, {
                        quest: h,
                        rewardName: p.messages.name,
                        backgroundUrl: k.url,
                        location: f,
                        onClose: t,
                      }),
              }),
            }),
            !M &&
              !y &&
              "claimed" === A &&
              (0, r.jsx)(u.Z, {
                confettiTarget: _.current,
                confettiCanvas: b,
                sprites: j.CA,
                colors: j.Br,
              }),
          ],
        });
      }
      function R(e) {
        let {
          quest: n,
          rewardName: a,
          backgroundUrl: o,
          location: t,
          onClose: s,
        } = e;
        return (0, r.jsxs)("div", {
          className: w.claimedRootContainer,
          children: [
            (0, r.jsxs)("div", {
              className: w.headerContainer,
              children: [
                (0, r.jsx)(h.Z, {
                  className: w.headerBackground,
                  autoPlay: !1,
                  loop: !1,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  poster: o,
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
                        questContent: t,
                        location: _.dr.INGAME_REWARD_MODAL,
                      }),
                    }),
                    (0, r.jsx)(l.ModalCloseButton, {
                      className: w.close,
                      withCircleBackground: !0,
                      onClick: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(l.ModalFooter, {
              className: w.footerContainer,
              separator: !1,
              children: (0, r.jsxs)("div", {
                className: w.gradient,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    color: "always-white",
                    className: w.heading,
                    children: b.intl.string(b.t["0/Yz+f"]),
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    className: w.text,
                    children: b.intl.format(b.t["v1u/zs"], { rewardName: a }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function S(e) {
        let { quest: n, location: a, onClose: t, transitionState: i } = e,
          s = o.useMemo(() => (0, f.K)(n.config), [n]);
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
    44819: function (e, n, a) {
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
//# sourceMappingURL=9c507279ba6eac2e9114.js.map
