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
        o = e(570140),
        i = e(893776),
        s = e(290323),
        a = e(981631);
      async function c(t) {
        await r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(t),
          body: { consent_status: s.h.ACCEPTED },
          rejectWithError: !1,
        }),
          o.Z.dispatch({
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
        i.Z.getLocationMetadata();
      }
    },
    290323: function (t, n, e) {
      var r, o;
      e.d(n, {
        h: function () {
          return r;
        },
      }),
        ((o = r || (r = {}))[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
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
          return d;
        },
        DL: function () {
          return c;
        },
        EI: function () {
          return i;
        },
        Nn: function () {
          return E;
        },
        X_: function () {
          return l;
        },
        cH: function () {
          return u;
        },
        n4: function () {
          return s;
        },
        zr: function () {
          return o;
        },
      });
      var r = e(388032);
      let o = "SAFETY_WARNING_BANNER_WEB",
        i = "https://www.crisistextline.org/",
        s = "https://nofiltr.org/resources-hub/",
        a = "https://discord.findahelpline.com/",
        c = "InappropriateConversationModal-web",
        l = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        u = "SafetyToolsActionSheet-web",
        d = () => [
          r.intl.string(r.t["26fDv7"]),
          r.intl.string(r.t.togDfn),
          r.intl.string(r.t.O4LjcX),
        ],
        E = () => [
          r.intl.string(r.t.bCWw8v),
          r.intl.string(r.t.mzSuc3),
          r.intl.string(r.t.ZkmC7u),
        ];
    },
    991981: function (t, n, e) {
      e.d(n, {
        q: function () {
          return i;
        },
      });
      var r = e(442837),
        o = e(375954);
      let i = (t) =>
        (0, r.e7)([o.Z], () => {
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
            return r;
          },
        }),
        e(47120);
      var r,
        o,
        i = e(200651),
        s = e(192379),
        a = e(481060),
        c = e(378298),
        l = e(473092),
        u = e(684471),
        d = e(745982),
        E = e(463439),
        N = e(388032),
        h = e(980594);
      ((o = r || (r = {}))[(o.INTRO = 0)] = "INTRO"),
        (o[(o.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (o[(o.TAKE_ACTION = 2)] = "TAKE_ACTION");
      n.default = (t) => {
        let {
            warningId: n,
            warningType: e,
            senderId: r,
            modalProps: o,
            channelId: f,
          } = t,
          [_, I] = s.useState(0),
          C = s.useMemo(
            () => ({
              channelId: f,
              senderId: r,
              warningId: n,
              warningType: e,
              isNudgeWarning: !1,
            }),
            [f, r, n, e],
          );
        s.useEffect(() => {
          (0, l.KQ)({ ...C, viewName: l.pb.SAFETY_TAKEOVER_MODAL });
        }, [C]);
        let T = s.useCallback(
            (t) => {
              (0, l.qc)({ ...C, cta: t });
            },
            [C],
          ),
          [A, p] = s.useState(!1);
        function g(t) {
          I(t);
        }
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: o.transitionState,
          children: [
            (0, i.jsx)("div", {
              className: h.container,
              children: (0, i.jsxs)(a.Slides, {
                width: 440,
                activeSlide: _,
                centered: !1,
                overflow: "visible",
                contentDisplay: "flex",
                children: [
                  (0, i.jsx)(a.Slide, {
                    id: 0,
                    children: (0, i.jsx)(u.Z, {
                      warningId: n,
                      senderId: r,
                      trackAnalyticsEvent: T,
                      onNavigate: g,
                    }),
                  }),
                  (0, i.jsx)(a.Slide, {
                    id: 1,
                    children: (0, i.jsx)(d.Z, {
                      warningId: n,
                      senderId: r,
                      trackAnalyticsEvent: T,
                    }),
                  }),
                  (0, i.jsx)(a.Slide, {
                    id: 2,
                    children: (0, i.jsx)(E.Z, {
                      warningId: n,
                      senderId: r,
                      trackAnalyticsEvent: T,
                      channelId: f,
                      hasReported: A,
                      onReport: function () {
                        p(!0);
                      },
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(a.ModalFooter, {
              className: h.footer,
              children: [
                (0, i.jsx)(a.Button, {
                  className: h.footerButton,
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.CUSTOM,
                  size: a.Button.Sizes.MIN,
                  onClick: function () {
                    o.onClose(),
                      (0, c.T)(f, [n]),
                      T(l.NM.USER_TAKEOVER_MODAL_DISMISS);
                  },
                  children: N.intl.string(N.t.cpT0Cg),
                }),
                0 !== _ &&
                  (0, i.jsx)(a.Button, {
                    className: h.footerButton,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.CUSTOM,
                    size: a.Button.Sizes.MIN,
                    onClick: () => g(0),
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
      var o = e(481060),
        i = e(503533);
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
            (0, r.jsx)("img", { src: n, alt: e, className: i.heroImage }),
            (0, r.jsxs)(o.ModalContent, {
              className: i.body,
              children: [
                (0, r.jsxs)("div", {
                  className: i.textContainer,
                  children: [
                    (0, r.jsx)(o.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: a,
                    }),
                    null != c &&
                      (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: i.description,
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
      var o = e(481060),
        i = e(442837),
        s = e(594174),
        a = e(51144),
        c = e(473092),
        l = e(955708),
        u = e(850165),
        d = e(388032),
        E = e(503533),
        N = e(282668);
      function h(t) {
        let { senderId: n, trackAnalyticsEvent: e, onNavigate: h } = t,
          f = (0, i.e7)([s.default], () => {
            let t = s.default.getUser(n);
            return a.ZP.getName(t);
          });
        return (0, r.jsx)(u.Z, {
          header: d.intl.string(d.t.sSMgCw),
          description: d.intl.formatToPlainString(d.t.q2QrTU, { username: f }),
          heroImageSrc: N,
          heroImageAlt: d.intl.string(d.t["3QhxXF"]),
          children: (0, r.jsxs)("div", {
            className: E.buttonContainer,
            children: [
              (0, r.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.LARGE,
                className: E.button,
                onClick: () => {
                  h(l.InappropriateConversationModalSlideKeys.TAKE_ACTION),
                    e(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
                },
                children: d.intl.string(d.t["+o4Q7e"]),
              }),
              (0, r.jsx)(o.Button, {
                color: o.Button.Colors.PRIMARY,
                size: o.Button.Sizes.LARGE,
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
      var o = e(353672),
        i = e(850165),
        s = e(134612),
        a = e(388032),
        c = e(503533),
        l = e(190113);
      function u(t) {
        let {} = t,
          n = (0, s.Nn)();
        return (0, r.jsx)(i.Z, {
          heroImageSrc: l,
          heroImageAlt: a.intl.string(a.t["2mJo29"]),
          header: a.intl.string(a.t.eAbVfX),
          children: (0, r.jsx)("div", {
            className: c.safetyTips,
            children: (0, r.jsx)(o.Z, {
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
          return S;
        },
      }),
        e(47120);
      var r,
        o,
        i = e(200651),
        s = e(192379),
        a = e(481060),
        c = e(442837),
        l = e(194359),
        u = e(782568),
        d = e(726521),
        E = e(485664),
        N = e(681678),
        h = e(699516),
        f = e(863653),
        _ = e(473092),
        I = e(991981),
        C = e(850165),
        T = e(134612),
        A = e(981631),
        p = e(388032),
        g = e(503533),
        m = e(149355);
      function S(t) {
        let {
            senderId: n,
            channelId: e,
            hasReported: r,
            onReport: o,
            trackAnalyticsEvent: S,
          } = t,
          b = (0, c.e7)([h.Z], () => h.Z.isBlocked(n)),
          [x, R] = s.useState(b),
          M = (0, E.o)(),
          L = (0, f.zF)("ic-take-action-web"),
          [j, v] = s.useState(!1),
          O = (0, I.q)(e),
          B = s.useMemo(() => (M ? 0 : L ? 2 : 1), [M, L]),
          D = () => {
            R(!0),
              l.Z.addRelationship({
                userId: n,
                context: { location: T.DL },
                type: A.OGo.BLOCKED,
              }),
              S(_.NM.USER_TAKEOVER_MODAL_BLOCK),
              N.Z.showBlockSuccessToast(n, e);
          },
          Z = () => {
            R(!1),
              l.Z.unblockUser(n, { location: T.DL }),
              S(_.NM.USER_TAKEOVER_MODAL_UNBLOCK),
              N.Z.showUnblockSuccessToast(n, e);
          },
          y = async () => {
            if (null != O)
              v(!0),
                await (0, d.J7)(
                  O,
                  () => {
                    N.Z.showReportSuccessToast(n, e), o();
                  },
                  () => {
                    N.Z.showFailedToast();
                  },
                ),
                v(!1),
                S(_.NM.USER_TAKEOVER_MODAL_REPORT);
          },
          w = (t) => {
            0 === t
              ? ((0, u.Z)(T.EI), S(_.NM.USER_TAKEOVER_MODAL_CTL))
              : 2 === t
                ? ((0, u.Z)(T.$l), S(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                : ((0, u.Z)(T.n4), S(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
          },
          k = s.useMemo(() => {
            switch (B) {
              case 0:
                return p.intl.string(p.t.sZf6c3);
              case 2:
                return p.intl.string(p.t.HQ2nKi);
              default:
                return p.intl.string(p.t["65XQam"]);
            }
          }, [B]);
        return (0, i.jsx)(C.Z, {
          heroImageSrc: m,
          heroImageAlt: p.intl.string(p.t.RVyYCA),
          header: p.intl.string(p.t["mWO+ys"]),
          description: p.intl.string(p.t.S0XtKC),
          children: (0, i.jsxs)("div", {
            className: g.buttonContainer,
            children: [
              (0, i.jsxs)(a.Button, {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.LARGE,
                className: g.button,
                innerClassName: g.buttonInner,
                onClick: () => {
                  x ? Z() : D();
                },
                children: [
                  (0, i.jsx)(a.CircleXIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    className: g.buttonIcon,
                    color: "currentColor",
                  }),
                  x ? p.intl.string(p.t.XyHpKC) : p.intl.string(p.t.l4EmaW),
                ],
              }),
              (0, i.jsxs)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: g.button,
                innerClassName: g.buttonInner,
                onClick: y,
                submitting: j,
                disabled: r,
                children: [
                  (0, i.jsx)(a.FlagIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    className: g.buttonIcon,
                    color: "currentColor",
                  }),
                  r ? p.intl.string(p.t.QvwOJy) : p.intl.string(p.t["7fHyEx"]),
                ],
              }),
              (0, i.jsxs)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.LARGE,
                className: g.button,
                innerClassName: g.buttonInner,
                onClick: () => w(B),
                children: [
                  (0, i.jsx)(a.ChatIcon, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    className: g.buttonIcon,
                    color: "currentColor",
                  }),
                  k,
                ],
              }),
            ],
          }),
        });
      }
      ((o = r || (r = {}))[(o.CTL = 0)] = "CTL"),
        (o[(o.NO_FILTR = 1)] = "NO_FILTR"),
        (o[(o.THROUGHLINE = 2)] = "THROUGHLINE");
    },
    353672: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = e(200651);
      e(192379);
      var o = e(120356),
        i = e.n(o),
        s = e(481060),
        a = e(756308);
      function c(t) {
        let { tips: n, className: e, headerText: o } = t;
        return (0, r.jsxs)("div", {
          className: i()(a.tipsSection, e),
          children: [
            (0, r.jsx)("div", {
              className: a.tipsHeader,
              children: (0, r.jsx)(s.Heading, {
                variant: "heading-lg/bold",
                className: a.headerText,
                children: o,
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
    980594: function (t, n, e) {
      t.exports = {
        container: "container_e9b66e",
        footer: "footer_e9b66e",
        footerButton: "footerButton_e9b66e",
      };
    },
    503533: function (t, n, e) {
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
    756308: function (t, n, e) {
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
//# sourceMappingURL=6482d142ff7654468ca0.js.map
