"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59650"],
  {
    190113: function (e) {
      e.exports = "/assets/4fe78f46b2e51ef9c627.svg";
    },
    282668: function (e) {
      e.exports = "/assets/4a6cdf8dabe4d739520a.svg";
    },
    149355: function (e) {
      e.exports = "/assets/b485c47dbc4acaeb17de.svg";
    },
    446292: function (e) {
      e.exports = "/assets/3fb54283c01119458138.png";
    },
    823162: function (e, t, n) {
      n.d(t, {
        Xy: function () {
          return u;
        },
        e4: function () {
          return c;
        },
        gN: function () {
          return N;
        },
        hi: function () {
          return I;
        },
        qR: function () {
          return E;
        },
        r_: function () {
          return T;
        },
      });
      var s = n(544891),
        o = n(570140),
        r = n(893776),
        a = n(290323),
        i = n(981631);
      async function c(e) {
        await s.tn.put({
          url: i.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.ACCEPTED },
        }),
          o.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function E(e) {
        return s.tn.put({
          url: i.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.UNSPECIFIED },
        });
      }
      function u(e) {
        return s.tn.put({
          url: i.ANM.CHANNEL_RECIPIENT_ME(e),
          body: { consent_status: a.h.PENDING },
        });
      }
      function N(e) {
        return s.tn.del({ url: i.ANM.CHANNEL_RECIPIENT_ME(e) });
      }
      function T(e) {
        return s.tn.put({
          url: i.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function I() {
        r.Z.getLocationMetadata();
      }
    },
    290323: function (e, t, n) {
      var s, o;
      n.d(t, {
        h: function () {
          return s;
        },
      }),
        ((o = s || (s = {}))[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.PENDING = 1)] = "PENDING"),
        (o[(o.ACCEPTED = 2)] = "ACCEPTED"),
        (o[(o.REJECTED = 3)] = "REJECTED");
    },
    134612: function (e, t, n) {
      n.d(t, {
        $l: function () {
          return i;
        },
        C2: function () {
          return u;
        },
        DL: function () {
          return c;
        },
        EI: function () {
          return r;
        },
        Nn: function () {
          return N;
        },
        X_: function () {
          return E;
        },
        n4: function () {
          return a;
        },
        zr: function () {
          return o;
        },
      });
      var s = n(689938);
      let o = "SAFETY_WARNING_BANNER_WEB",
        r = "https://www.crisistextline.org/",
        a = "https://nofiltr.org/resources-hub/",
        i = "https://discord.findahelpline.com/",
        c = "InappropriateConversationModal-web",
        E = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        u = () => [
          s.Z.Messages.STRANGER_DANGER_TIPS_1,
          s.Z.Messages.STRANGER_DANGER_TIPS_2,
          s.Z.Messages.STRANGER_DANGER_TIPS_3,
        ],
        N = () => [
          s.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_1,
          s.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_2,
          s.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_3,
        ];
    },
    941362: function (e, t, n) {
      n.d(t, {
        q: function () {
          return r;
        },
      });
      var s = n(442837),
        o = n(375954);
      let r = (e) =>
        (0, s.e7)([o.Z], () => {
          var t;
          return null !== (t = o.Z.getLastNonCurrentUserMessage(e)) &&
            void 0 !== t
            ? t
            : o.Z.getLastMessage(e);
        });
    },
    955708: function (e, t, n) {
      n.r(t),
        n.d(t, {
          InappropriateConversationModalSlideKeys: function () {
            return s;
          },
        }),
        n(47120);
      var s,
        o,
        r = n(735250),
        a = n(470079),
        i = n(481060),
        c = n(378298),
        E = n(473092),
        u = n(684471),
        N = n(745982),
        T = n(463439),
        I = n(689938),
        _ = n(70119);
      ((o = s || (s = {}))[(o.INTRO = 0)] = "INTRO"),
        (o[(o.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (o[(o.TAKE_ACTION = 2)] = "TAKE_ACTION");
      t.default = (e) => {
        let {
            warningId: t,
            warningType: n,
            senderId: s,
            modalProps: o,
            channelId: l,
          } = e,
          [A, d] = a.useState(0),
          R = a.useMemo(
            () => ({
              channelId: l,
              senderId: s,
              warningId: t,
              warningType: n,
              isNudgeWarning: !1,
            }),
            [l, s, t, n],
          );
        a.useEffect(() => {
          (0, E.KQ)({ ...R, viewName: E.pb.SAFETY_TAKEOVER_MODAL });
        }, [R]);
        let O = a.useCallback(
            (e) => {
              (0, E.qc)({ ...R, cta: e });
            },
            [R],
          ),
          [C, S] = a.useState(!1);
        function P(e) {
          d(e);
        }
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: o.transitionState,
          children: [
            (0, r.jsx)("div", {
              className: _.container,
              children: (0, r.jsxs)(i.Slides, {
                width: 440,
                activeSlide: A,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [
                  (0, r.jsx)(i.Slide, {
                    id: 0,
                    children: (0, r.jsx)(u.Z, {
                      warningId: t,
                      senderId: s,
                      trackAnalyticsEvent: O,
                      onNavigate: P,
                    }),
                  }),
                  (0, r.jsx)(i.Slide, {
                    id: 1,
                    children: (0, r.jsx)(N.Z, {
                      warningId: t,
                      senderId: s,
                      trackAnalyticsEvent: O,
                    }),
                  }),
                  (0, r.jsx)(i.Slide, {
                    id: 2,
                    children: (0, r.jsx)(T.Z, {
                      warningId: t,
                      senderId: s,
                      trackAnalyticsEvent: O,
                      channelId: l,
                      hasReported: C,
                      onReport: function () {
                        S(!0);
                      },
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(i.ModalFooter, {
              className: _.footer,
              children: [
                (0, r.jsx)(i.Button, {
                  className: _.footerButton,
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.CUSTOM,
                  size: i.Button.Sizes.MIN,
                  onClick: function () {
                    o.onClose(),
                      (0, c.T)(l, [t]),
                      O(E.NM.USER_TAKEOVER_MODAL_DISMISS);
                  },
                  children: I.Z.Messages.CLOSE,
                }),
                0 !== A &&
                  (0, r.jsx)(i.Button, {
                    className: _.footerButton,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.CUSTOM,
                    size: i.Button.Sizes.MIN,
                    onClick: () => P(0),
                    children: I.Z.Messages.BACK,
                  }),
              ],
            }),
          ],
        });
      };
    },
    850165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(481060),
        r = n(248296);
      function a(e) {
        let {
          heroImageSrc: t,
          heroImageAlt: n,
          children: a,
          header: i,
          description: c,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("img", { src: t, alt: n, className: r.heroImage }),
            (0, s.jsxs)(o.ModalContent, {
              className: r.body,
              children: [
                (0, s.jsxs)("div", {
                  className: r.textContainer,
                  children: [
                    (0, s.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: i,
                    }),
                    null != c &&
                      (0, s.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: r.description,
                        children: c,
                      }),
                  ],
                }),
                a,
              ],
            }),
          ],
        });
      }
    },
    684471: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(481060),
        r = n(442837),
        a = n(594174),
        i = n(51144),
        c = n(473092),
        E = n(955708),
        u = n(850165),
        N = n(689938),
        T = n(248296),
        I = n(282668);
      function _(e) {
        let { senderId: t, trackAnalyticsEvent: n, onNavigate: _ } = e,
          l = (0, r.e7)([a.default], () => {
            let e = a.default.getUser(t);
            return i.ZP.getName(e);
          });
        return (0, s.jsx)(u.Z, {
          header: N.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
          description:
            N.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format(
              { username: l },
            ),
          heroImageSrc: I,
          heroImageAlt:
            N.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
          children: (0, s.jsxs)("div", {
            className: T.buttonContainer,
            children: [
              (0, s.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.LARGE,
                className: T.button,
                onClick: () => {
                  _(E.InappropriateConversationModalSlideKeys.TAKE_ACTION),
                    n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                },
                children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION,
              }),
              (0, s.jsx)(o.Button, {
                color: o.Button.Colors.PRIMARY,
                size: o.Button.Sizes.LARGE,
                className: T.button,
                onClick: () => {
                  _(E.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
                    n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                },
                children:
                  N.Z.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS,
              }),
            ],
          }),
        });
      }
    },
    745982: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(353672),
        r = n(850165),
        a = n(134612),
        i = n(689938),
        c = n(248296),
        E = n(190113);
      function u(e) {
        let {} = e,
          t = (0, a.Nn)();
        return (0, s.jsx)(r.Z, {
          heroImageSrc: E,
          heroImageAlt: i.Z.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_ALT,
          header: i.Z.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_HEADER,
          children: (0, s.jsx)("div", {
            className: c.safetyTips,
            children: (0, s.jsx)(o.Z, {
              tips: t,
              headerText:
                i.Z.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION,
            }),
          }),
        });
      }
    },
    463439: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var s,
        o,
        r = n(735250),
        a = n(470079),
        i = n(481060),
        c = n(442837),
        E = n(194359),
        u = n(782568),
        N = n(726521),
        T = n(485664),
        I = n(699516),
        _ = n(863653),
        l = n(473092),
        A = n(941362),
        d = n(850165),
        R = n(134612),
        O = n(981631),
        C = n(689938),
        S = n(248296),
        P = n(149355);
      function h(e) {
        let {
            senderId: t,
            channelId: n,
            hasReported: s,
            onReport: o,
            trackAnalyticsEvent: h,
          } = e,
          M = (0, c.e7)([I.Z], () => I.Z.isBlocked(t)),
          [f, p] = a.useState(M),
          g = (0, T.o)(),
          m = (0, _.zF)("ic-take-action-web"),
          [b, L] = a.useState(!1),
          x = (0, A.q)(n),
          Z = a.useMemo(() => (g ? 0 : m ? 2 : 1), [g, m]),
          v = () => {
            p(!0),
              E.Z.addRelationship({
                userId: t,
                context: { location: R.DL },
                type: O.OGo.BLOCKED,
              }),
              h(l.NM.USER_TAKEOVER_MODAL_BLOCK);
          },
          D = () => {
            p(!1),
              E.Z.unblockUser(t, { location: R.DL }),
              h(l.NM.USER_TAKEOVER_MODAL_UNBLOCK);
          },
          B = async () => {
            if (null != x)
              L(!0),
                await (0, N.J7)(
                  x,
                  () => {
                    (0, i.showToast)(
                      (0, i.createToast)(
                        C.Z.Messages.INAPPROPRIATE_CONVERSATION_REPORT_TOAST,
                        i.ToastType.SUCCESS,
                      ),
                    ),
                      o();
                  },
                  () => {
                    (0, i.showToast)(
                      (0, i.createToast)(
                        C.Z.Messages
                          .INAPPROPRIATE_CONVERSATION_ERROR_GENERIC_TOAST,
                        i.ToastType.FAILURE,
                      ),
                    );
                  },
                ),
                L(!1),
                h(l.NM.USER_TAKEOVER_MODAL_REPORT);
          },
          j = (e) => {
            0 === e
              ? ((0, u.Z)(R.EI), h(l.NM.USER_TAKEOVER_MODAL_CTL))
              : 2 === e
                ? ((0, u.Z)(R.$l), h(l.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                : ((0, u.Z)(R.n4), h(l.NM.USER_TAKEOVER_MODAL_NO_FILTR));
          },
          V = a.useMemo(() => {
            switch (Z) {
              case 0:
                return C.Z.Messages
                  .INAPPROPRIATE_CONVERSATION_ACTION_CONTACT_CTL;
              case 2:
                return C.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE;
              default:
                return C.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE;
            }
          }, [Z]);
        return (0, r.jsx)(d.Z, {
          heroImageSrc: P,
          heroImageAlt:
            C.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_LIGHTBULB_ALT,
          header: C.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_HEADER,
          description:
            C.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION_DESCRIPTION,
          children: (0, r.jsxs)("div", {
            className: S.buttonContainer,
            children: [
              (0, r.jsxs)(i.Button, {
                color: i.Button.Colors.BRAND,
                size: i.Button.Sizes.LARGE,
                className: S.button,
                innerClassName: S.buttonInner,
                onClick: () => {
                  f ? D() : v();
                },
                children: [
                  (0, r.jsx)(i.CircleXIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: i.tokens.colors.WHITE,
                    className: S.buttonIcon,
                  }),
                  f ? C.Z.Messages.UNBLOCK : C.Z.Messages.BLOCK,
                ],
              }),
              (0, r.jsxs)(i.Button, {
                color: i.Button.Colors.PRIMARY,
                size: i.Button.Sizes.LARGE,
                className: S.button,
                innerClassName: S.buttonInner,
                onClick: B,
                submitting: b,
                disabled: s,
                children: [
                  (0, r.jsx)(i.FlagIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: i.tokens.colors.WHITE,
                    className: S.buttonIcon,
                  }),
                  s
                    ? C.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORTED
                    : C.Z.Messages.INAPPROPRIATE_CONVERSATION_ACTION_REPORT,
                ],
              }),
              (0, r.jsxs)(i.Button, {
                color: i.Button.Colors.PRIMARY,
                size: i.Button.Sizes.LARGE,
                className: S.button,
                innerClassName: S.buttonInner,
                onClick: () => j(Z),
                children: [
                  (0, r.jsx)(i.ChatIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: i.tokens.colors.WHITE,
                    className: S.buttonIcon,
                  }),
                  V,
                ],
              }),
            ],
          }),
        });
      }
      ((o = s || (s = {}))[(o.CTL = 0)] = "CTL"),
        (o[(o.NO_FILTR = 1)] = "NO_FILTR"),
        (o[(o.THROUGHLINE = 2)] = "THROUGHLINE");
    },
    353672: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(481060),
        i = n(32501);
      function c(e) {
        let { tips: t, className: n, headerText: o } = e;
        return (0, s.jsxs)("div", {
          className: r()(i.tipsSection, n),
          children: [
            (0, s.jsx)("div", {
              className: i.tipsHeader,
              children: (0, s.jsx)(a.Heading, {
                variant: "heading-lg/bold",
                className: i.headerText,
                children: o,
              }),
            }),
            (0, s.jsx)("ul", {
              className: i.tipsList,
              children: t.map((e, t) =>
                (0, s.jsxs)(
                  "li",
                  {
                    className: i.tipRow,
                    children: [
                      (0, s.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: i.tipNumber,
                        children: t + 1,
                      }),
                      (0, s.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: e,
                      }),
                    ],
                  },
                  "safety-tips-".concat(t),
                ),
              ),
            }),
          ],
        });
      }
    },
    70119: function (e, t, n) {
      e.exports = {
        container: "container_e9b66e",
        footer: "footer_e9b66e",
        footerButton: "footerButton_e9b66e",
      };
    },
    248296: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b00055",
        button: "button_b00055",
        buttonInner: "buttonInner_b00055",
        buttonIcon: "buttonIcon_b00055",
        body: "body_b00055",
        textContainer: "textContainer_b00055",
        description: "description_b00055",
        heroImage: "heroImage_b00055",
        safetyTips: "safetyTips_b00055",
      };
    },
    32501: function (e, t, n) {
      e.exports = {
        tipRow: "tipRow_a1cdc0",
        tipNumber: "tipNumber_a1cdc0",
        tipsList: "tipsList_a1cdc0",
        tipsHeader: "tipsHeader_a1cdc0",
        headerText: "headerText_a1cdc0",
        tipsSection: "tipsSection_a1cdc0",
      };
    },
  },
]);
//# sourceMappingURL=69532c2f5b07398f49a3.js.map
