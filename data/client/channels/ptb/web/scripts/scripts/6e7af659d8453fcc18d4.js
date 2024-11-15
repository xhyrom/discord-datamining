"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["838"],
  {
    824393: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return b;
          },
        }),
        t(47120);
      var o,
        n,
        a = t(200651),
        s = t(192379),
        i = t(120356),
        l = t.n(i),
        d = t(703533),
        c = t(442837),
        u = t(481060),
        C = t(230711),
        h = t(607070),
        m = t(530618),
        g = t(688465),
        x = t(272008),
        f = t(497505),
        j = t(918701),
        _ = t(475595),
        N = t(566078),
        M = t(644646),
        p = t(46140),
        R = t(981631),
        v = t(675654),
        S = t(388032),
        w = t(961680);
      ((n = o || (o = {}))[(n.AlreadySubscribed = 0)] = "AlreadySubscribed"),
        (n[(n.Other = 1)] = "Other");
      function B(e) {
        var r, t;
        let { transitionState: o, onClose: n, quest: i, location: g } = e,
          j = s.useRef(null),
          [M, p] = s.useState(null),
          S = s.useRef(new d.qA()),
          B = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
          b = s.useMemo(() => (0, _.fh)(i, _.eC.HERO), [i]),
          T =
            (null === (r = i.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) != null,
          [k, F] = s.useState(T ? { state: "claimed" } : { state: "loading" });
        let L = ((t = i), N.r.build(t.config).defaultReward);
        s.useEffect(() => {
          !T &&
            (0, x.QB)(i.id, f.y$.CROSS_PLATFORM, g)
              .then((e) => {
                if (null == e) {
                  F({ state: "error", errorReason: 1 });
                  return;
                }
                if (null != e.claimedAt) {
                  F({ state: "claimed" });
                  return;
                }
                let r = e.errors;
                r.length > 0 && 5 === r[0].code
                  ? F({ state: "error", errorReason: 0 })
                  : F({ state: "error", errorReason: 1 });
              })
              .catch((e) => {
                F({
                  state: "error",
                  errorReason: 100004 === e.body.code ? 0 : 1,
                });
              });
        }, [i, g, T]);
        let I = "loading" === k.state,
          E = !B && !T && "claimed" === k.state;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(d.O_, {
              ref: p,
              className: w.confettiCanvas,
              environment: S.current,
            }),
            (0, a.jsx)("div", {
              ref: j,
              children: (0, a.jsx)(u.ModalRoot, {
                transitionState: o,
                size: u.ModalSize.DYNAMIC,
                className: l()(w.rootContainer, {
                  [w.rootContainerLoading]: I,
                }),
                hideShadow: !0,
                children: I
                  ? (0, a.jsx)(u.Spinner, {
                      type: u.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === k.state
                    ? (0, a.jsx)(y, { errorReason: k.errorReason, onClose: n })
                    : (0, a.jsx)(A, {
                        quest: i,
                        primaryColor: i.config.colors.primary,
                        secondaryColor: i.config.colors.secondary,
                        rewardNameWithArticle: L.messages.nameWithArticle,
                        backgroundUrl: b.url,
                        location: g,
                        onClose: n,
                        onLearnMore: () => {
                          C.Z.open(R.oAB.PREMIUM, null, {}), n();
                        },
                      }),
              }),
            }),
            E &&
              (0, a.jsx)(m.Z, {
                confettiTarget: j.current,
                confettiCanvas: M,
                sprites: v.CA,
                colors: v.Br,
              }),
          ],
        });
      }
      function y(e) {
        let { onClose: r, errorReason: t } = e,
          o =
            0 === t ? S.intl.string(S.t["mmj+oa"]) : S.intl.string(S.t.PbaUtr);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(u.ModalHeader, {
              separator: !1,
              className: w.errorHeader,
              children: [
                (0, a.jsx)(u.Heading, {
                  className: w.errorTitle,
                  variant: "heading-xl/medium",
                  children: S.intl.string(S.t["UleS9/"]),
                }),
                (0, a.jsx)(u.ModalCloseButton, {
                  onClick: r,
                  className: w.errorModalCloseButton,
                }),
              ],
            }),
            (0, a.jsx)(u.ModalContent, {
              className: w.errorContent,
              children: (0, a.jsx)(u.Text, {
                variant: "text-md/normal",
                children: o,
              }),
            }),
            (0, a.jsx)(u.ModalFooter, {
              className: w.errorModalFooter,
              children: (0, a.jsx)(u.Button, {
                color: u.Button.Colors.BRAND,
                size: u.Button.Sizes.MEDIUM,
                onClick: r,
                children: S.intl.string(S.t.cpT0Cg),
              }),
            }),
          ],
        });
      }
      function A(e) {
        let {
          quest: r,
          rewardNameWithArticle: t,
          primaryColor: o,
          secondaryColor: n,
          backgroundUrl: s,
          location: i,
          onClose: d,
          onLearnMore: c,
        } = e;
        return (0, a.jsxs)("div", {
          className: w.claimedRootContainer,
          children: [
            (0, a.jsxs)("div", {
              className: w.headerContainer,
              children: [
                (0, a.jsx)("img", {
                  className: w.headerBackground,
                  src: s,
                  alt: S.intl.string(S.t["8SsCa2"]),
                }),
                (0, a.jsx)(g.Z, { className: w.beta }),
                (0, a.jsxs)("div", {
                  className: w.headerForeground,
                  children: [
                    (0, a.jsx)("div", {
                      className: w.previewContainer,
                      children: (0, a.jsx)(M.Z, {
                        autoplay: !0,
                        className: l()(w.rewardTile),
                        learnMoreStyle: null,
                        quest: r,
                        questContent: i,
                        location: p.dr.INGAME_REWARD_MODAL,
                      }),
                    }),
                    (0, a.jsx)(u.ModalCloseButton, {
                      className: w.close,
                      withCircleBackground: !0,
                      onClick: d,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(u.ModalFooter, {
              className: w.footerContainer,
              separator: !1,
              children: (0, a.jsxs)("div", {
                className: w.gradient,
                style: {
                  backgroundImage: "linear-gradient(55deg, "
                    .concat(o, ", ")
                    .concat(n, ")"),
                },
                children: [
                  (0, a.jsx)(u.Heading, {
                    variant: "heading-lg/bold",
                    color: "always-white",
                    className: w.heading,
                    children: S.intl.string(S.t["0/Yz+f"]),
                  }),
                  (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    className: w.text,
                    children: S.intl.format(S.t.aZymT0, {
                      rewardNameWithArticle: t,
                    }),
                  }),
                  (0, a.jsx)(u.Button, {
                    onClick: c,
                    children: S.intl.string(S.t.LLLLPD),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function b(e) {
        let { quest: r, location: t, onClose: o, transitionState: n } = e;
        return (0, j.zK)(r, p.S7.FRACTIONS_QUEST)
          ? (0, a.jsx)(B, {
              onClose: o,
              transitionState: n,
              quest: r,
              location: t,
            })
          : (o(), null);
      }
    },
    961680: function (e, r, t) {
      e.exports = {
        rootContainer: "rootContainer_c2d726",
        rootContainerLoading: "rootContainerLoading_c2d726",
        claimedRootContainer: "claimedRootContainer_c2d726",
        headerContainer: "headerContainer_c2d726",
        beta: "beta_c2d726",
        headerBackground: "headerBackground_c2d726",
        headerForeground: "headerForeground_c2d726",
        previewContainer: "previewContainer_c2d726",
        close: "close_c2d726",
        footerContainer: "footerContainer_c2d726",
        gradient: "gradient_c2d726",
        heading: "heading_c2d726",
        text: "text_c2d726",
        confettiCanvas: "confettiCanvas_c2d726",
        rewardTile: "rewardTile_c2d726",
        errorHeader: "errorHeader_c2d726",
        errorTitle: "errorTitle_c2d726",
        errorModalCloseButton: "errorModalCloseButton_c2d726",
        errorContent: "errorContent_c2d726",
        errorModalFooter: "errorModalFooter_c2d726",
      };
    },
  },
]);
//# sourceMappingURL=6e7af659d8453fcc18d4.js.map
