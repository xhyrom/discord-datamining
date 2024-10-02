"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["838"],
  {
    824393: function (e, r, o) {
      o.r(r),
        o.d(r, {
          default: function () {
            return B;
          },
        }),
        o(47120);
      var a,
        t,
        n = o(735250),
        s = o(470079),
        l = o(120356),
        i = o.n(l),
        d = o(887024),
        c = o(442837),
        u = o(481060),
        _ = o(230711),
        C = o(607070),
        R = o(530618),
        h = o(688465),
        g = o(272008),
        m = o(497505),
        M = o(918701),
        x = o(475595),
        A = o(566078),
        N = o(644646),
        E = o(46140),
        S = o(981631),
        f = o(675654),
        j = o(689938),
        O = o(165253);
      ((t = a || (a = {}))[(t.AlreadySubscribed = 0)] = "AlreadySubscribed"),
        (t[(t.Other = 1)] = "Other");
      function T(e) {
        var r, o;
        let { transitionState: a, onClose: t, quest: l, location: h } = e,
          M = s.useRef(null),
          [N, E] = s.useState(null),
          j = s.useRef(new d.qA()),
          T = (0, c.e7)([C.Z], () => C.Z.useReducedMotion),
          B = s.useMemo(() => (0, x.fh)(l, x.Bd.HERO), [l]),
          D =
            (null === (r = l.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) != null,
          [I, w] = s.useState(D ? { state: "claimed" } : { state: "loading" });
        let L = ((o = l), A.r.build(o.config).defaultReward);
        s.useEffect(() => {
          !D &&
            (0, g.QB)(l.id, m.y$.CROSS_PLATFORM, h)
              .then((e) => {
                if (null == e) {
                  w({ state: "error", errorReason: 1 });
                  return;
                }
                if (null != e.claimedAt) {
                  w({ state: "claimed" });
                  return;
                }
                let r = e.errors;
                r.length > 0 && 5 === r[0].code
                  ? w({ state: "error", errorReason: 0 })
                  : w({ state: "error", errorReason: 1 });
              })
              .catch((e) => {
                w({
                  state: "error",
                  errorReason: 100004 === e.body.code ? 0 : 1,
                });
              });
        }, [l, h, D]);
        let y = "loading" === I.state,
          b = !T && !D && "claimed" === I.state;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.O_, {
              ref: E,
              className: O.confettiCanvas,
              environment: j.current,
            }),
            (0, n.jsx)("div", {
              ref: M,
              children: (0, n.jsx)(u.ModalRoot, {
                transitionState: a,
                size: u.ModalSize.DYNAMIC,
                className: i()(O.rootContainer, {
                  [O.rootContainerLoading]: y,
                }),
                hideShadow: !0,
                children: y
                  ? (0, n.jsx)(u.Spinner, {
                      type: u.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === I.state
                    ? (0, n.jsx)(p, { errorReason: I.errorReason, onClose: t })
                    : (0, n.jsx)(v, {
                        quest: l,
                        primaryColor: l.config.colors.primary,
                        secondaryColor: l.config.colors.secondary,
                        rewardNameWithArticle: L.messages.nameWithArticle,
                        backgroundUrl: B.url,
                        location: h,
                        onClose: t,
                        onLearnMore: () => {
                          _.Z.open(S.oAB.PREMIUM, null, {}), t();
                        },
                      }),
              }),
            }),
            b &&
              (0, n.jsx)(R.Z, {
                confettiTarget: M.current,
                confettiCanvas: N,
                sprites: f.CA,
                colors: f.Br,
              }),
          ],
        });
      }
      function p(e) {
        let { onClose: r, errorReason: o } = e,
          a =
            0 === o
              ? j.Z.Messages.QUESTS_NITRO_REWARD_MODAL_ERROR_HAVE_A_SUB
              : j.Z.Messages.QUESTS_NITRO_REWARD_MODAL_ERROR_MISC;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(u.ModalHeader, {
              separator: !1,
              className: O.errorHeader,
              children: [
                (0, n.jsx)(u.Heading, {
                  className: O.errorTitle,
                  variant: "heading-xl/medium",
                  children: j.Z.Messages.BILLING_REFUND_MODAL_HEADER_ERROR,
                }),
                (0, n.jsx)(u.ModalCloseButton, {
                  onClick: r,
                  className: O.errorModalCloseButton,
                }),
              ],
            }),
            (0, n.jsx)(u.ModalContent, {
              className: O.errorContent,
              children: (0, n.jsx)(u.Text, {
                variant: "text-md/normal",
                children: a,
              }),
            }),
            (0, n.jsx)(u.ModalFooter, {
              className: O.errorModalFooter,
              children: (0, n.jsx)(u.Button, {
                color: u.Button.Colors.BRAND,
                size: u.Button.Sizes.MEDIUM,
                onClick: r,
                children: j.Z.Messages.CLOSE,
              }),
            }),
          ],
        });
      }
      function v(e) {
        let {
          quest: r,
          rewardNameWithArticle: o,
          primaryColor: a,
          secondaryColor: t,
          backgroundUrl: s,
          location: l,
          onClose: d,
          onLearnMore: c,
        } = e;
        return (0, n.jsxs)("div", {
          className: O.claimedRootContainer,
          children: [
            (0, n.jsxs)("div", {
              className: O.headerContainer,
              children: [
                (0, n.jsx)("img", {
                  className: O.headerBackground,
                  src: s,
                  alt: j.Z.Messages
                    .QUESTS_NITRO_REWARD_MODAL_BACKGROUND_IMAGE_ALT,
                }),
                (0, n.jsx)(h.Z, { className: O.beta }),
                (0, n.jsxs)("div", {
                  className: O.headerForeground,
                  children: [
                    (0, n.jsx)("div", {
                      className: O.previewContainer,
                      children: (0, n.jsx)(N.Z, {
                        autoplay: !0,
                        className: i()(O.rewardTile),
                        learnMoreStyle: null,
                        quest: r,
                        questContent: l,
                        location: E.dr.INGAME_REWARD_MODAL,
                      }),
                    }),
                    (0, n.jsx)(u.ModalCloseButton, {
                      className: O.close,
                      withCircleBackground: !0,
                      onClick: d,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(u.ModalFooter, {
              className: O.footerContainer,
              separator: !1,
              children: (0, n.jsxs)("div", {
                className: O.gradient,
                style: {
                  backgroundImage: "linear-gradient(55deg, "
                    .concat(a, ", ")
                    .concat(t, ")"),
                },
                children: [
                  (0, n.jsx)(u.Heading, {
                    variant: "heading-lg/bold",
                    color: "always-white",
                    className: O.heading,
                    children:
                      j.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER,
                  }),
                  (0, n.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    className: O.text,
                    children:
                      j.Z.Messages.QUESTS_NITRO_REWARD_MODAL_FOOTER_IN_GAME_BODY.format(
                        { rewardNameWithArticle: o },
                      ),
                  }),
                  (0, n.jsx)(u.Button, {
                    onClick: c,
                    children: j.Z.Messages.QUESTS_LEARN_MORE_V2,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function B(e) {
        let { quest: r, location: o, onClose: a, transitionState: t } = e;
        return (0, M.zK)(r, E.S7.FRACTIONS_QUEST)
          ? (0, n.jsx)(T, {
              onClose: a,
              transitionState: t,
              quest: r,
              location: o,
            })
          : (a(), null);
      }
    },
    165253: function (e, r, o) {
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
//# sourceMappingURL=49332a420bfb55c73437.js.map
