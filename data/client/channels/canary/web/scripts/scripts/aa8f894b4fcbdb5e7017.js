"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88938"],
  {
    390238: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return A;
          },
        }),
        n(47120);
      var r = n(735250),
        o = n(470079),
        t = n(120356),
        i = n.n(t),
        s = n(887024),
        d = n(442837),
        l = n(481060),
        c = n(607070),
        u = n(530618),
        C = n(70097),
        h = n(272008),
        g = n(497505),
        m = n(918701),
        _ = n(475595),
        f = n(566078),
        x = n(644646),
        p = n(114732),
        N = n(46140),
        R = n(675654),
        b = n(689938),
        j = n(685753);
      function v(e) {
        var a;
        let {
            transitionState: n,
            onClose: t,
            quest: C,
            location: m,
            reward: x,
          } = e,
          N = o.useRef(null),
          [b, v] = o.useState(null),
          A = o.useRef(new s.qA()),
          S = (0, d.e7)([c.Z], () => c.Z.useReducedMotion),
          M = o.useMemo(() => (0, _.fh)(C, _.Bd.HERO), [C]),
          y =
            (null === (a = C.userStatus) || void 0 === a
              ? void 0
              : a.claimedAt) != null,
          [E, T] = o.useState(y ? "claimed" : "loading");
        o.useEffect(() => {
          if (!y) {
            let e = f.r.build(C.config),
              a =
                e.rewardPlatforms.length > 0
                  ? e.rewardPlatforms[0]
                  : g.y$.CROSS_PLATFORM;
            (0, h.QB)(C.id, a, m)
              .then(() => T("claimed"))
              .catch(() => T("error"));
          }
        }, [C, m, y]);
        let k = "loading" === E;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.O_, {
              ref: v,
              className: j.confettiCanvas,
              environment: A.current,
            }),
            (0, r.jsx)("div", {
              ref: N,
              children: (0, r.jsx)(l.ModalRoot, {
                transitionState: n,
                size: l.ModalSize.DYNAMIC,
                className: i()(j.rootContainer, {
                  [j.rootContainerLoading]: k,
                }),
                hideShadow: !0,
                children: k
                  ? (0, r.jsx)(l.Spinner, {
                      type: l.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === E
                    ? (0, r.jsx)(p.Z, { onClose: t })
                    : (0, r.jsx)(w, {
                        quest: C,
                        primaryColor: C.config.colors.primary,
                        secondaryColor: C.config.colors.secondary,
                        rewardName: x.messages.name,
                        backgroundUrl: M.url,
                        location: m,
                        onClose: t,
                      }),
              }),
            }),
            !S &&
              !y &&
              "claimed" === E &&
              (0, r.jsx)(u.Z, {
                confettiTarget: N.current,
                confettiCanvas: b,
                sprites: R.CA,
                colors: R.Br,
              }),
          ],
        });
      }
      function w(e) {
        let {
          quest: a,
          rewardName: n,
          primaryColor: o,
          secondaryColor: t,
          backgroundUrl: s,
          location: d,
          onClose: c,
        } = e;
        return (0, r.jsxs)("div", {
          className: j.claimedRootContainer,
          children: [
            (0, r.jsxs)("div", {
              className: j.headerContainer,
              children: [
                (0, r.jsx)(C.Z, {
                  className: j.headerBackground,
                  autoPlay: !1,
                  loop: !1,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  poster: s,
                }),
                (0, r.jsxs)("div", {
                  className: j.headerForeground,
                  children: [
                    (0, r.jsx)("div", {
                      className: j.previewContainer,
                      children: (0, r.jsx)(x.Z, {
                        autoplay: !0,
                        className: i()(j.rewardTile),
                        learnMoreStyle: null,
                        quest: a,
                        questContent: d,
                        location: N.dr.INGAME_REWARD_MODAL,
                      }),
                    }),
                    (0, r.jsx)(l.ModalCloseButton, {
                      className: j.close,
                      withCircleBackground: !0,
                      onClick: c,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(l.ModalFooter, {
              className: j.footerContainer,
              separator: !1,
              children: (0, r.jsxs)("div", {
                className: j.gradient,
                style: {
                  backgroundImage: "linear-gradient(180deg, "
                    .concat(o, ", ")
                    .concat(t, ")"),
                },
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    color: "always-white",
                    className: j.heading,
                    children:
                      b.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER,
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    className: j.text,
                    children:
                      b.Z.Messages.QUESTS_REWARD_MODAL_FOOTER_IN_GAME_BODY.format(
                        { rewardName: n },
                      ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function A(e) {
        let { quest: a, location: n, onClose: t, transitionState: i } = e,
          s = o.useMemo(() => (0, m.K)(a.config), [a]);
        return null == s
          ? null
          : (0, r.jsx)(v, {
              onClose: t,
              transitionState: i,
              quest: a,
              location: n,
              reward: s,
            });
      }
    },
    685753: function (e, a, n) {
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
//# sourceMappingURL=aa8f894b4fcbdb5e7017.js.map
