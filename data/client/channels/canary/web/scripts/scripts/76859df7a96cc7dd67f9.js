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
      var r = e(544891),
        i = e(570140),
        o = e(893776),
        s = e(290323),
        a = e(981631);
      async function c(t) {
        await r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: s.h.ACCEPTED },
          rejectWithError: !1,
        }),
          i.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: t,
          });
      }
      function l(t) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: s.h.UNSPECIFIED },
          rejectWithError: !1,
        });
      }
      function u(t) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: s.h.PENDING },
          rejectWithError: !1,
        });
      }
      function d(t) {
        return r.tn.del({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          rejectWithError: !1,
        });
      }
      function E(t) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: t },
          rejectWithError: !1,
        });
      }
      function N() {
        o.Z.getLocationMetadata();
      }
    },
    290323: function (t, n, e) {
      var r, i;
      e.d(n, {
        h: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.ACCEPTED = 2)] = "ACCEPTED"),
        (i[(i.REJECTED = 3)] = "REJECTED");
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
          return o;
        },
        Nn: function () {
          return d;
        },
        X_: function () {
          return l;
        },
        n4: function () {
          return s;
        },
        zr: function () {
          return i;
        },
      });
      var r = e(388032);
      let i = "SAFETY_WARNING_BANNER_WEB",
        o = "https://www.crisistextline.org/",
        s = "https://nofiltr.org/resources-hub/",
        a = "https://discord.findahelpline.com/",
        c = "InappropriateConversationModal-web",
        l = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        u = () => [
          r.intl.string(r.t["26fDv7"]),
          r.intl.string(r.t.togDfn),
          r.intl.string(r.t.O4LjcX),
        ],
        d = () => [
          r.intl.string(r.t.bCWw8v),
          r.intl.string(r.t.mzSuc3),
          r.intl.string(r.t.ZkmC7u),
        ];
    },
    650408: function (t, n, e) {
      e.d(n, {
        q: function () {
          return o;
        },
      });
      var r = e(442837),
        i = e(375954);
      let o = (t) =>
        (0, r.e7)([i.Z], () => {
          var n;
          return null !== (n = i.Z.getLastNonCurrentUserMessage(t)) &&
            void 0 !== n
            ? n
            : i.Z.getLastMessage(t);
        });
    },
    955708: function (t, n, e) {
      e.r(n),
        e.d(n, {
          InappropriateConversationModalSlideKeys: function () {
            return r;
          },
        }),
        e(47120);
      var r,
        i,
        o = e(200651),
        s = e(192379),
        a = e(481060),
        c = e(378298),
        l = e(473092),
        u = e(684471),
        d = e(745982),
        E = e(463439),
        N = e(388032),
        h = e(72540);
      ((i = r || (r = {}))[(i.INTRO = 0)] = "INTRO"),
        (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION");
      n.default = (t) => {
        let {
            warningId: n,
            warningType: e,
            senderId: r,
            modalProps: i,
            channelId: I,
          } = t,
          [_, f] = s.useState(0),
          T = s.useMemo(
            () => ({
              channelId: I,
              senderId: r,
              warningId: n,
              warningType: e,
              isNudgeWarning: !1,
            }),
            [I, r, n, e],
          );
        s.useEffect(() => {
          (0, l.KQ)({ ...T, viewName: l.pb.SAFETY_TAKEOVER_MODAL });
        }, [T]);
        let C = s.useCallback(
            (t) => {
              (0, l.qc)({ ...T, cta: t });
            },
            [T],
          ),
          [g, p] = s.useState(!1);
        function A(t) {
          f(t);
        }
        return (0, o.jsxs)(a.ModalRoot, {
          transitionState: i.transitionState,
          children: [
            (0, o.jsx)("div", {
              className: h.container,
              children: (0, o.jsxs)(a.Slides, {
                width: 440,
                activeSlide: _,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [
                  (0, o.jsx)(a.Slide, {
                    id: 0,
                    children: (0, o.jsx)(u.Z, {
                      warningId: n,
                      senderId: r,
                      trackAnalyticsEvent: C,
                      onNavigate: A,
                    }),
                  }),
                  (0, o.jsx)(a.Slide, {
                    id: 1,
                    children: (0, o.jsx)(d.Z, {
                      warningId: n,
                      senderId: r,
                      trackAnalyticsEvent: C,
                    }),
                  }),
                  (0, o.jsx)(a.Slide, {
                    id: 2,
                    children: (0, o.jsx)(E.Z, {
                      warningId: n,
                      senderId: r,
                      trackAnalyticsEvent: C,
                      channelId: I,
                      hasReported: g,
                      onReport: function () {
                        p(!0);
                      },
                    }),
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(a.ModalFooter, {
              className: h.footer,
              children: [
                (0, o.jsx)(a.Button, {
                  className: h.footerButton,
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.CUSTOM,
                  size: a.Button.Sizes.MIN,
                  onClick: function () {
                    i.onClose(),
                      (0, c.T)(I, [n]),
                      C(l.NM.USER_TAKEOVER_MODAL_DISMISS);
                  },
                  children: N.intl.string(N.t.cpT0Cg),
                }),
                0 !== _ &&
                  (0, o.jsx)(a.Button, {
                    className: h.footerButton,
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
          return s;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(481060),
        o = e(324394);
      function s(t) {
        let {
          heroImageSrc: n,
          heroImageAlt: e,
          children: s,
          header: a,
          description: c,
        } = t;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("img", { src: n, alt: e, className: o.heroImage }),
            (0, r.jsxs)(i.ModalContent, {
              className: o.body,
              children: [
                (0, r.jsxs)("div", {
                  className: o.textContainer,
                  children: [
                    (0, r.jsx)(i.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: a,
                    }),
                    null != c &&
                      (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: o.description,
                        children: c,
                      }),
                  ],
                }),
                s,
              ],
            }),
          ],
        });
      }
    },
    684471: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(481060),
        o = e(442837),
        s = e(594174),
        a = e(51144),
        c = e(473092),
        l = e(955708),
        u = e(850165),
        d = e(388032),
        E = e(324394),
        N = e(282668);
      function h(t) {
        let { senderId: n, trackAnalyticsEvent: e, onNavigate: h } = t,
          I = (0, o.e7)([s.default], () => {
            let t = s.default.getUser(n);
            return a.ZP.getName(t);
          });
        return (0, r.jsx)(u.Z, {
          header: d.intl.string(d.t.sSMgCw),
          description: d.intl.formatToPlainString(d.t.q2QrTU, { username: I }),
          heroImageSrc: N,
          heroImageAlt: d.intl.string(d.t["3QhxXF"]),
          children: (0, r.jsxs)("div", {
            className: E.buttonContainer,
            children: [
              (0, r.jsx)(i.Button, {
                color: i.Button.Colors.BRAND,
                size: i.Button.Sizes.LARGE,
                className: E.button,
                onClick: () => {
                  h(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
                    e(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                },
                children: d.intl.string(d.t["+o4Q7e"]),
              }),
              (0, r.jsx)(i.Button, {
                color: i.Button.Colors.PRIMARY,
                size: i.Button.Sizes.LARGE,
                className: E.button,
                onClick: () => {
                  h(l.InappropriateConversationModalSlideKeys.SAFETY_TIPS),
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
      var r = e(200651);
      e(192379);
      var i = e(353672),
        o = e(850165),
        s = e(134612),
        a = e(388032),
        c = e(324394),
        l = e(190113);
      function u(t) {
        let {} = t,
          n = (0, s.Nn)();
        return (0, r.jsx)(o.Z, {
          heroImageSrc: l,
          heroImageAlt: a.intl.string(a.t["2mJo29"]),
          header: a.intl.string(a.t.eAbVfX),
          children: (0, r.jsx)("div", {
            className: c.safetyTips,
            children: (0, r.jsx)(i.Z, {
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
      var r,
        i,
        o = e(200651),
        s = e(192379),
        a = e(481060),
        c = e(442837),
        l = e(194359),
        u = e(782568),
        d = e(726521),
        E = e(485664),
        N = e(699516),
        h = e(863653),
        I = e(473092),
        _ = e(650408),
        f = e(850165),
        T = e(134612),
        C = e(981631),
        g = e(388032),
        p = e(324394),
        A = e(149355);
      function m(t) {
        let {
            senderId: n,
            channelId: e,
            hasReported: r,
            onReport: i,
            trackAnalyticsEvent: m,
          } = t,
          S = (0, c.e7)([N.Z], () => N.Z.isBlocked(n)),
          [b, x] = s.useState(S),
          R = (0, E.o)(),
          M = (0, h.zF)("ic-take-action-web"),
          [L, j] = s.useState(!1),
          v = (0, _.q)(e),
          O = s.useMemo(() => (R ? 0 : M ? 2 : 1), [R, M]),
          B = () => {
            x(!0),
              l.Z.addRelationship({
                userId: n,
                context: { location: T.DL },
                type: C.OGo.BLOCKED,
              }),
              m(I.NM.USER_TAKEOVER_MODAL_BLOCK);
          },
          D = () => {
            x(!1),
              l.Z.unblockUser(n, { location: T.DL }),
              m(I.NM.USER_TAKEOVER_MODAL_UNBLOCK);
          },
          y = async () => {
            if (null != v)
              j(!0),
                await (0, d.J7)(
                  v,
                  () => {
                    (0, a.showToast)(
                      (0, a.createToast)(
                        g.intl.string(g.t.gn2c6e),
                        a.ToastType.SUCCESS,
                      ),
                    ),
                      i();
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
                j(!1),
                m(I.NM.USER_TAKEOVER_MODAL_REPORT);
          },
          k = (t) => {
            0 === t
              ? ((0, u.Z)(T.EI), m(I.NM.USER_TAKEOVER_MODAL_CTL))
              : 2 === t
                ? ((0, u.Z)(T.$l), m(I.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                : ((0, u.Z)(T.n4), m(I.NM.USER_TAKEOVER_MODAL_NO_FILTR));
          },
          Z = s.useMemo(() => {
            switch (O) {
              case 0:
                return g.intl.string(g.t.sZf6c3);
              case 2:
                return g.intl.string(g.t.HQ2nKi);
              default:
                return g.intl.string(g.t["65XQam"]);
            }
          }, [O]);
        return (0, o.jsx)(f.Z, {
          heroImageSrc: A,
          heroImageAlt: g.intl.string(g.t.RVyYCA),
          header: g.intl.string(g.t["mWO+ys"]),
          description: g.intl.string(g.t.S0XtKC),
          children: (0, o.jsxs)("div", {
            className: p.buttonContainer,
            children: [
              (0, o.jsxs)(a.Button, {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.LARGE,
                className: p.button,
                innerClassName: p.buttonInner,
                onClick: () => {
                  b ? D() : B();
                },
                children: [
                  (0, o.jsx)(a.CircleXIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: a.tokens.colors.WHITE,
                    className: p.buttonIcon,
                  }),
                  b ? g.intl.string(g.t.XyHpKC) : g.intl.string(g.t.l4EmaW),
                ],
              }),
              (0, o.jsxs)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: p.button,
                innerClassName: p.buttonInner,
                onClick: y,
                submitting: L,
                disabled: r,
                children: [
                  (0, o.jsx)(a.FlagIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: a.tokens.colors.WHITE,
                    className: p.buttonIcon,
                  }),
                  r ? g.intl.string(g.t.QvwOJy) : g.intl.string(g.t["7fHyEx"]),
                ],
              }),
              (0, o.jsxs)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: p.button,
                innerClassName: p.buttonInner,
                onClick: () => k(O),
                children: [
                  (0, o.jsx)(a.ChatIcon, {
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
      ((i = r || (r = {}))[(i.CTL = 0)] = "CTL"),
        (i[(i.NO_FILTR = 1)] = "NO_FILTR"),
        (i[(i.THROUGHLINE = 2)] = "THROUGHLINE");
    },
    353672: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(120356),
        o = e.n(i),
        s = e(481060),
        a = e(450632);
      function c(t) {
        let { tips: n, className: e, headerText: i } = t;
        return (0, r.jsxs)("div", {
          className: o()(a.tipsSection, e),
          children: [
            (0, r.jsx)("div", {
              className: a.tipsHeader,
              children: (0, r.jsx)(s.Heading, {
                variant: "heading-lg/bold",
                className: a.headerText,
                children: i,
              }),
            }),
            (0, r.jsx)("ul", {
              className: a.tipsList,
              children: n.map((t, n) =>
                (0, r.jsxs)(
                  "li",
                  {
                    className: a.tipRow,
                    children: [
                      (0, r.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-brand",
                        className: a.tipNumber,
                        children: n + 1,
                      }),
                      (0, r.jsx)(s.Text, {
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
    72540: function (t, n, e) {
      t.exports = {
        container: "container_e9b66e",
        footer: "footer_e9b66e",
        footerButton: "footerButton_e9b66e",
      };
    },
    324394: function (t, n, e) {
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
    450632: function (t, n, e) {
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
//# sourceMappingURL=76859df7a96cc7dd67f9.js.map
