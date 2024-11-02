"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59650"],
  {
    190113: function (t) {
      t.exports = "/assets/4fe78f46b2e51ef9c627.svg";
    },
    282668: function (t) {
      t.exports = "/assets/4a6cdf8dabe4d739520a.svg";
    },
    149355: function (t) {
      t.exports = "/assets/b485c47dbc4acaeb17de.svg";
    },
    446292: function (t) {
      t.exports = "/assets/3fb54283c01119458138.png";
    },
    823162: function (t, n, e) {
      e.d(n, {
        Xy: function () {
          return u;
        },
        e4: function () {
          return c;
        },
        gN: function () {
          return d;
        },
        hi: function () {
          return N;
        },
        qR: function () {
          return l;
        },
        r_: function () {
          return E;
        },
      });
      var i = e(544891),
        o = e(570140),
        s = e(893776),
        r = e(290323),
        a = e(981631);
      async function c(t) {
        await i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: r.h.ACCEPTED },
        }),
          o.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: t,
          });
      }
      function l(t) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: r.h.UNSPECIFIED },
        });
      }
      function u(t) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: r.h.PENDING },
        });
      }
      function d(t) {
        return i.tn.del({ url: a.ANM.CHANNEL_RECIPIENT_ME(t) });
      }
      function E(t) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: t },
        });
      }
      function N() {
        s.Z.getLocationMetadata();
      }
    },
    290323: function (t, n, e) {
      var i, o;
      e.d(n, {
        h: function () {
          return i;
        },
      }),
        ((o = i || (i = {}))[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.PENDING = 1)] = "PENDING"),
        (o[(o.ACCEPTED = 2)] = "ACCEPTED"),
        (o[(o.REJECTED = 3)] = "REJECTED");
    },
    134612: function (t, n, e) {
      e.d(n, {
        $l: function () {
          return a;
        },
        C2: function () {
          return u;
        },
        DL: function () {
          return c;
        },
        EI: function () {
          return s;
        },
        Nn: function () {
          return d;
        },
        X_: function () {
          return l;
        },
        n4: function () {
          return r;
        },
        zr: function () {
          return o;
        },
      });
      var i = e(388032);
      let o = "SAFETY_WARNING_BANNER_WEB",
        s = "https://www.crisistextline.org/",
        r = "https://nofiltr.org/resources-hub/",
        a = "https://discord.findahelpline.com/",
        c = "InappropriateConversationModal-web",
        l = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        u = () => [
          i.intl.string(i.t["26fDv7"]),
          i.intl.string(i.t.togDfn),
          i.intl.string(i.t.O4LjcX),
        ],
        d = () => [
          i.intl.string(i.t.bCWw8v),
          i.intl.string(i.t.mzSuc3),
          i.intl.string(i.t.ZkmC7u),
        ];
    },
    941362: function (t, n, e) {
      e.d(n, {
        q: function () {
          return s;
        },
      });
      var i = e(442837),
        o = e(375954);
      let s = (t) =>
        (0, i.e7)([o.Z], () => {
          var n;
          return null !== (n = o.Z.getLastNonCurrentUserMessage(t)) &&
            void 0 !== n
            ? n
            : o.Z.getLastMessage(t);
        });
    },
    955708: function (t, n, e) {
      e.r(n),
        e.d(n, {
          InappropriateConversationModalSlideKeys: function () {
            return i;
          },
        }),
        e(47120);
      var i,
        o,
        s = e(200651),
        r = e(192379),
        a = e(481060),
        c = e(378298),
        l = e(473092),
        u = e(684471),
        d = e(745982),
        E = e(463439),
        N = e(388032),
        I = e(70119);
      ((o = i || (i = {}))[(o.INTRO = 0)] = "INTRO"),
        (o[(o.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (o[(o.TAKE_ACTION = 2)] = "TAKE_ACTION");
      n.default = (t) => {
        let {
            warningId: n,
            warningType: e,
            senderId: i,
            modalProps: o,
            channelId: h,
          } = t,
          [_, f] = r.useState(0),
          T = r.useMemo(
            () => ({
              channelId: h,
              senderId: i,
              warningId: n,
              warningType: e,
              isNudgeWarning: !1,
            }),
            [h, i, n, e],
          );
        r.useEffect(() => {
          (0, l.KQ)({ ...T, viewName: l.pb.SAFETY_TAKEOVER_MODAL });
        }, [T]);
        let C = r.useCallback(
            (t) => {
              (0, l.qc)({ ...T, cta: t });
            },
            [T],
          ),
          [g, p] = r.useState(!1);
        function A(t) {
          f(t);
        }
        return (0, s.jsxs)(a.ModalRoot, {
          transitionState: o.transitionState,
          children: [
            (0, s.jsx)("div", {
              className: I.container,
              children: (0, s.jsxs)(a.Slides, {
                width: 440,
                activeSlide: _,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [
                  (0, s.jsx)(a.Slide, {
                    id: 0,
                    children: (0, s.jsx)(u.Z, {
                      warningId: n,
                      senderId: i,
                      trackAnalyticsEvent: C,
                      onNavigate: A,
                    }),
                  }),
                  (0, s.jsx)(a.Slide, {
                    id: 1,
                    children: (0, s.jsx)(d.Z, {
                      warningId: n,
                      senderId: i,
                      trackAnalyticsEvent: C,
                    }),
                  }),
                  (0, s.jsx)(a.Slide, {
                    id: 2,
                    children: (0, s.jsx)(E.Z, {
                      warningId: n,
                      senderId: i,
                      trackAnalyticsEvent: C,
                      channelId: h,
                      hasReported: g,
                      onReport: function () {
                        p(!0);
                      },
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)(a.ModalFooter, {
              className: I.footer,
              children: [
                (0, s.jsx)(a.Button, {
                  className: I.footerButton,
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.CUSTOM,
                  size: a.Button.Sizes.MIN,
                  onClick: function () {
                    o.onClose(),
                      (0, c.T)(h, [n]),
                      C(l.NM.USER_TAKEOVER_MODAL_DISMISS);
                  },
                  children: N.intl.string(N.t.cpT0Cg),
                }),
                0 !== _ &&
                  (0, s.jsx)(a.Button, {
                    className: I.footerButton,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.CUSTOM,
                    size: a.Button.Sizes.MIN,
                    onClick: () => A(0),
                    children: N.intl.string(N.t["13/7kZ"]),
                  }),
              ],
            }),
          ],
        });
      };
    },
    850165: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        s = e(248296);
      function r(t) {
        let {
          heroImageSrc: n,
          heroImageAlt: e,
          children: r,
          header: a,
          description: c,
        } = t;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("img", { src: n, alt: e, className: s.heroImage }),
            (0, i.jsxs)(o.ModalContent, {
              className: s.body,
              children: [
                (0, i.jsxs)("div", {
                  className: s.textContainer,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: a,
                    }),
                    null != c &&
                      (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: s.description,
                        children: c,
                      }),
                  ],
                }),
                r,
              ],
            }),
          ],
        });
      }
    },
    684471: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        s = e(442837),
        r = e(594174),
        a = e(51144),
        c = e(473092),
        l = e(955708),
        u = e(850165),
        d = e(388032),
        E = e(248296),
        N = e(282668);
      function I(t) {
        let { senderId: n, trackAnalyticsEvent: e, onNavigate: I } = t,
          h = (0, s.e7)([r.default], () => {
            let t = r.default.getUser(n);
            return a.ZP.getName(t);
          });
        return (0, i.jsx)(u.Z, {
          header: d.intl.string(d.t.sSMgCw),
          description: d.intl.formatToPlainString(d.t.q2QrTU, { username: h }),
          heroImageSrc: N,
          heroImageAlt: d.intl.string(d.t["3QhxXF"]),
          children: (0, i.jsxs)("div", {
            className: E.buttonContainer,
            children: [
              (0, i.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.LARGE,
                className: E.button,
                onClick: () => {
                  I(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
                    e(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                },
                children: d.intl.string(d.t["+o4Q7e"]),
              }),
              (0, i.jsx)(o.Button, {
                color: o.Button.Colors.PRIMARY,
                size: o.Button.Sizes.LARGE,
                className: E.button,
                onClick: () => {
                  I(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
                    e(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                },
                children: d.intl.string(d.t.xLkGzM),
              }),
            ],
          }),
        });
      }
    },
    745982: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(353672),
        s = e(850165),
        r = e(134612),
        a = e(388032),
        c = e(248296),
        l = e(190113);
      function u(t) {
        let {} = t,
          n = (0, r.Nn)();
        return (0, i.jsx)(s.Z, {
          heroImageSrc: l,
          heroImageAlt: a.intl.string(a.t["2mJo29"]),
          header: a.intl.string(a.t.eAbVfX),
          children: (0, i.jsx)("div", {
            className: c.safetyTips,
            children: (0, i.jsx)(o.Z, {
              tips: n,
              headerText: a.intl.string(a.t["0QSL1N"]),
            }),
          }),
        });
      }
    },
    463439: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return m;
        },
      }),
        e(47120);
      var i,
        o,
        s = e(200651),
        r = e(192379),
        a = e(481060),
        c = e(442837),
        l = e(194359),
        u = e(782568),
        d = e(726521),
        E = e(485664),
        N = e(699516),
        I = e(863653),
        h = e(473092),
        _ = e(941362),
        f = e(850165),
        T = e(134612),
        C = e(981631),
        g = e(388032),
        p = e(248296),
        A = e(149355);
      function m(t) {
        let {
            senderId: n,
            channelId: e,
            hasReported: i,
            onReport: o,
            trackAnalyticsEvent: m,
          } = t,
          S = (0, c.e7)([N.Z], () => N.Z.isBlocked(n)),
          [b, x] = r.useState(S),
          R = (0, E.o)(),
          M = (0, I.zF)("ic-take-action-web"),
          [L, v] = r.useState(!1),
          O = (0, _.q)(e),
          j = r.useMemo(() => (R ? 0 : M ? 2 : 1), [R, M]),
          B = () => {
            x(!0),
              l.Z.addRelationship({
                userId: n,
                context: { location: T.DL },
                type: C.OGo.BLOCKED,
              }),
              m(h.NM.USER_TAKEOVER_MODAL_BLOCK);
          },
          D = () => {
            x(!1),
              l.Z.unblockUser(n, { location: T.DL }),
              m(h.NM.USER_TAKEOVER_MODAL_UNBLOCK);
          },
          y = async () => {
            if (null != O)
              v(!0),
                await (0, d.J7)(
                  O,
                  () => {
                    (0, a.showToast)(
                      (0, a.createToast)(
                        g.intl.string(g.t.gn2c6e),
                        a.ToastType.SUCCESS,
                      ),
                    ),
                      o();
                  },
                  () => {
                    (0, a.showToast)(
                      (0, a.createToast)(
                        g.intl.string(g.t["0YV04+"]),
                        a.ToastType.FAILURE,
                      ),
                    );
                  },
                ),
                v(!1),
                m(h.NM.USER_TAKEOVER_MODAL_REPORT);
          },
          k = (t) => {
            0 === t
              ? ((0, u.Z)(T.EI), m(h.NM.USER_TAKEOVER_MODAL_CTL))
              : 2 === t
                ? ((0, u.Z)(T.$l), m(h.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                : ((0, u.Z)(T.n4), m(h.NM.USER_TAKEOVER_MODAL_NO_FILTR));
          },
          Z = r.useMemo(() => {
            switch (j) {
              case 0:
                return g.intl.string(g.t.sZf6c3);
              case 2:
                return g.intl.string(g.t.HQ2nKi);
              default:
                return g.intl.string(g.t["65XQam"]);
            }
          }, [j]);
        return (0, s.jsx)(f.Z, {
          heroImageSrc: A,
          heroImageAlt: g.intl.string(g.t.RVyYCA),
          header: g.intl.string(g.t["mWO+ys"]),
          description: g.intl.string(g.t.S0XtKC),
          children: (0, s.jsxs)("div", {
            className: p.buttonContainer,
            children: [
              (0, s.jsxs)(a.Button, {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.LARGE,
                className: p.button,
                innerClassName: p.buttonInner,
                onClick: () => {
                  b ? D() : B();
                },
                children: [
                  (0, s.jsx)(a.CircleXIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: a.tokens.colors.WHITE,
                    className: p.buttonIcon,
                  }),
                  b ? g.intl.string(g.t.XyHpKC) : g.intl.string(g.t.l4EmaW),
                ],
              }),
              (0, s.jsxs)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: p.button,
                innerClassName: p.buttonInner,
                onClick: y,
                submitting: L,
                disabled: i,
                children: [
                  (0, s.jsx)(a.FlagIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: a.tokens.colors.WHITE,
                    className: p.buttonIcon,
                  }),
                  i ? g.intl.string(g.t.QvwOJy) : g.intl.string(g.t["7fHyEx"]),
                ],
              }),
              (0, s.jsxs)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: p.button,
                innerClassName: p.buttonInner,
                onClick: () => k(j),
                children: [
                  (0, s.jsx)(a.ChatIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: a.tokens.colors.WHITE,
                    className: p.buttonIcon,
                  }),
                  Z,
                ],
              }),
            ],
          }),
        });
      }
      ((o = i || (i = {}))[(o.CTL = 0)] = "CTL"),
        (o[(o.NO_FILTR = 1)] = "NO_FILTR"),
        (o[(o.THROUGHLINE = 2)] = "THROUGHLINE");
    },
    353672: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(120356),
        s = e.n(o),
        r = e(481060),
        a = e(32501);
      function c(t) {
        let { tips: n, className: e, headerText: o } = t;
        return (0, i.jsxs)("div", {
          className: s()(a.tipsSection, e),
          children: [
            (0, i.jsx)("div", {
              className: a.tipsHeader,
              children: (0, i.jsx)(r.Heading, {
                variant: "heading-lg/bold",
                className: a.headerText,
                children: o,
              }),
            }),
            (0, i.jsx)("ul", {
              className: a.tipsList,
              children: n.map((t, n) =>
                (0, i.jsxs)(
                  "li",
                  {
                    className: a.tipRow,
                    children: [
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: a.tipNumber,
                        children: n + 1,
                      }),
                      (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        children: t,
                      }),
                    ],
                  },
                  "safety-tips-".concat(n),
                ),
              ),
            }),
          ],
        });
      }
    },
    70119: function (t, n, e) {
      t.exports = {
        container: "container_e9b66e",
        footer: "footer_e9b66e",
        footerButton: "footerButton_e9b66e",
      };
    },
    248296: function (t, n, e) {
      t.exports = {
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
    32501: function (t, n, e) {
      t.exports = {
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
//# sourceMappingURL=1a8c2ffcdee2e45815d3.js.map
