"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["838"],
  {
    824393: function (e, r, o) {
      o.r(r),
        o.d(r, {
          default: function () {
            return O;
          },
        }),
        o(47120);
      var a = o(735250),
        t = o(470079),
        n = o(120356),
        s = o.n(n),
        i = o(887024),
        d = o(442837),
        l = o(481060),
        c = o(230711),
        _ = o(607070),
        u = o(530618),
        C = o(688465),
        R = o(272008),
        h = o(497505),
        g = o(918701),
        m = o(566078),
        M = o(644646),
        x = o(46140),
        N = o(981631),
        A = o(675654),
        E = o(689938),
        S = o(397965);
      function j(e) {
        var r, o;
        let { transitionState: n, onClose: C, quest: M, location: x } = e,
          E = t.useRef(null),
          [j, O] = t.useState(null),
          p = t.useRef(new i.qA()),
          v = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
          B = (0, g.j8)(M),
          D =
            (null === (r = M.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) != null,
          [I, w] = t.useState(D ? { state: "claimed" } : { state: "loading" });
        let L = ((o = M), m.r.build(o.config).defaultReward);
        t.useEffect(() => {
          !D &&
            (0, R.QB)(M.id, h.y$.CROSS_PLATFORM, x)
              .then(() => w({ state: "claimed" }))
              .catch((e) => {
                w({ state: "error", errorCode: e.body.code });
              });
        }, [M, x, D]);
        let k = "loading" === I.state,
          F = !v && !D && "claimed" === I.state;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.O_, {
              ref: O,
              className: S.confettiCanvas,
              environment: p.current,
            }),
            (0, a.jsx)("div", {
              ref: E,
              children: (0, a.jsx)(l.ModalRoot, {
                transitionState: n,
                size: l.ModalSize.DYNAMIC,
                className: s()(S.rootContainer, {
                  [S.rootContainerLoading]: k,
                }),
                hideShadow: !0,
                children: k
                  ? (0, a.jsx)(l.Spinner, {
                      type: l.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === I.state
                    ? (0, a.jsx)(f, { errorCode: I.errorCode, onClose: C })
                    : (0, a.jsx)(T, {
                        quest: M,
                        primaryColor: M.config.colors.primary,
                        secondaryColor: M.config.colors.secondary,
                        rewardNameWithArticle: L.messages.nameWithArticle,
                        backgroundUrl: B,
                        location: x,
                        onClose: C,
                        onLearnMore: () => {
                          c.Z.open(N.oAB.PREMIUM, null, {}), C();
                        },
                      }),
              }),
            }),
            F &&
              (0, a.jsx)(u.Z, {
                confettiTarget: E.current,
                confettiCanvas: j,
                sprites: A.CA,
                colors: A.Br,
              }),
          ],
        });
      }
      function f(e) {
        let { onClose: r, errorCode: o } = e,
          t =
            100004 === o
              ? E.Z.Messages.QUESTS_NITRO_REWARD_MODAL_ERROR_HAVE_A_SUB
              : E.Z.Messages.QUESTS_NITRO_REWARD_MODAL_ERROR_MISC;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              separator: !1,
              className: S.errorHeader,
              children: [
                (0, a.jsx)(l.Heading, {
                  className: S.errorTitle,
                  variant: "heading-xl/medium",
                  children: E.Z.Messages.BILLING_REFUND_MODAL_HEADER_ERROR,
                }),
                (0, a.jsx)(l.ModalCloseButton, {
                  onClick: r,
                  className: S.errorModalCloseButton,
                }),
              ],
            }),
            (0, a.jsx)(l.ModalContent, {
              className: S.errorContent,
              children: (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                children: t,
              }),
            }),
            (0, a.jsx)(l.ModalFooter, {
              className: S.errorModalFooter,
              children: (0, a.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                size: l.Button.Sizes.MEDIUM,
                onClick: r,
                children: E.Z.Messages.CLOSE,
              }),
            }),
          ],
        });
      }
      function T(e) {
        let {
          quest: r,
          rewardNameWithArticle: o,
          primaryColor: t,
          secondaryColor: n,
          backgroundUrl: i,
          location: d,
          onClose: c,
          onLearnMore: _,
        } = e;
        return (0, a.jsxs)("div", {
          className: S.claimedRootContainer,
          children: [
            (0, a.jsxs)("div", {
              className: S.headerContainer,
              children: [
                (0, a.jsx)("img", {
                  className: S.headerBackground,
                  src: i,
                  alt: E.Z.Messages
                    .QUESTS_NITRO_REWARD_MODAL_BACKGROUND_IMAGE_ALT,
                }),
                (0, a.jsx)(C.Z, { className: S.beta }),
                (0, a.jsxs)("div", {
                  className: S.headerForeground,
                  children: [
                    (0, a.jsx)("div", {
                      className: S.previewContainer,
                      children: (0, a.jsx)(M.Z, {
                        autoplay: !0,
                        className: s()(S.rewardTile),
                        learnMoreStyle: null,
                        quest: r,
                        questContent: d,
                        location: x.dr.INGAME_REWARD_MODAL,
                      }),
                    }),
                    (0, a.jsx)(l.ModalCloseButton, {
                      className: S.close,
                      withCircleBackground: !0,
                      onClick: c,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(l.ModalFooter, {
              className: S.footerContainer,
              separator: !1,
              children: (0, a.jsxs)("div", {
                className: S.gradient,
                style: {
                  backgroundImage: "linear-gradient(55deg, "
                    .concat(t, ", ")
                    .concat(n, ")"),
                },
                children: [
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    color: "always-white",
                    className: S.heading,
                    children:
                      E.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER,
                  }),
                  (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    className: S.text,
                    children:
                      E.Z.Messages.QUESTS_NITRO_REWARD_MODAL_FOOTER_IN_GAME_BODY.format(
                        { rewardNameWithArticle: o },
                      ),
                  }),
                  (0, a.jsx)(l.Button, {
                    onClick: _,
                    children: E.Z.Messages.QUESTS_LEARN_MORE_V2,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function O(e) {
        let { quest: r, location: o, onClose: t, transitionState: n } = e;
        return (0, g.zK)(r, x.S7.FRACTIONS_QUEST)
          ? (0, a.jsx)(j, {
              onClose: t,
              transitionState: n,
              quest: r,
              location: o,
            })
          : (t(), null);
      }
    },
    397965: function (e, r, o) {
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
//# sourceMappingURL=ba91b92aa69aeed7b14f.js.map
