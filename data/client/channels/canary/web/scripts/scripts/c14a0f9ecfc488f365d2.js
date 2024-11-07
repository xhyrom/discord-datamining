"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14021"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    112554: function (t, e, n) {
      n.d(e, {
        K: function () {
          return a;
        },
        b: function () {
          return i;
        },
      });
      var o = n(399606),
        l = n(375954),
        r = n(247206);
      let a = (t, e, n) => {
          var a, i;
          let d = (0, o.e7)([l.Z], () => l.Z.getMessage(t, e));
          if (null == d) return [];
          let s =
            void 0 !== n
              ? (t) => t.url === n
              : (t) =>
                  (0, r.KP)({ type: r.lJ.Attachment, media: t }, (0, r.HH)(d));
          return null !==
            (i =
              null == d
                ? void 0
                : null === (a = d.attachments) || void 0 === a
                  ? void 0
                  : a.filter(s)) && void 0 !== i
            ? i
            : [];
        },
        i = (t, e, n) => {
          var a, i;
          let d = (0, o.e7)([l.Z], () => l.Z.getMessage(t, e));
          if (null == d) return [];
          let s =
            void 0 !== n
              ? (t) => t.id === n
              : (t) => (0, r.KP)({ type: r.lJ.Embed, media: t }, (0, r.HH)(d));
          return null !==
            (i =
              null == d
                ? void 0
                : null === (a = d.embeds) || void 0 === a
                  ? void 0
                  : a.filter(s)) && void 0 !== i
            ? i
            : [];
        };
    },
    910673: function (t, e, n) {
      n.r(e);
      var o = n(200651),
        l = n(192379),
        r = n(481060),
        a = n(230711),
        i = n(782568),
        d = n(880257),
        s = n(187819),
        c = n(63063),
        u = n(247206),
        I = n(981631),
        _ = n(526761),
        m = n(388032),
        E = n(191623),
        h = n(444812);
      e.default = (t) => {
        let { channelId: e, messageId: f, transitionState: C, onClose: g } = t,
          v = (0, d.Z)(),
          A = (0, s._p)({ location: "explicit-media-learn-more" }),
          R = l.useCallback(
            (t) => {
              (0, u.aP)({ action: t, channelId: e, messageId: f });
            },
            [e, f],
          );
        return (
          l.useEffect(() => {
            (0, u.aP)({
              action: u.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
              channelId: e,
              messageId: f,
            });
          }, [e, f]),
          (0, o.jsxs)(r.ModalRoot, {
            transitionState: C,
            "aria-label": m.intl.string(m.t.xdm3XF),
            children: [
              (0, o.jsx)(r.ModalHeader, {
                separator: !1,
                className: E.modalHeader,
                children: (0, o.jsx)("img", {
                  src: h,
                  alt: m.intl.string(m.t.id3fND),
                  className: E.headerImg,
                }),
              }),
              (0, o.jsxs)(r.ModalContent, {
                className: E.modalBody,
                children: [
                  (0, o.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    className: E.modalInteriorHeader,
                    children: m.intl.string(m.t.sGW77u),
                  }),
                  (0, o.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: v
                      ? m.intl.string(m.t.XW3vjo)
                      : m.intl.string(m.t.i4daNj),
                  }),
                  (0, o.jsxs)("div", {
                    className: E.buttonContainer,
                    children: [
                      v
                        ? (0, o.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: function () {
                              R(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                A
                                  ? a.Z.open(I.oAB.CONTENT_AND_SOCIAL, null, {
                                      scrollPosition:
                                        _.to.EXPLICIT_MEDIA_REDACTION_V2,
                                    })
                                  : a.Z.open(I.oAB.PRIVACY_AND_SAFETY, null, {
                                      scrollPosition:
                                        _.to.EXPLICIT_MEDIA_REDACTION,
                                    }),
                                g();
                            },
                            fullWidth: !0,
                            children: m.intl.string(m.t["9D+zGR"]),
                          })
                        : (0, o.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                              (0, i.Z)(
                                c.Z.getArticleURL(
                                  I.BhN.EXPLICIT_MEDIA_REDACTION,
                                ),
                              );
                            },
                            fullWidth: !0,
                            children: m.intl.string(m.t.hvVgAQ),
                          }),
                      (0, o.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: function () {
                          g(), R(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                        },
                        fullWidth: !0,
                        children: m.intl.string(m.t.bmbHPD),
                      }),
                      (0, o.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: m.intl.format(m.t.Ge0HUl, {
                          handleFalsePositiveHook: () => {
                            g(),
                              R(
                                u.Yy
                                  .EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
                              ),
                              (0, r.openModalLazy)(async () => {
                                let { default: t } = await n(788679);
                                return (n) =>
                                  (0, o.jsx)(t, {
                                    channelId: e,
                                    messageId: f,
                                    ...n,
                                  });
                              });
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    788679: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return I;
          },
        });
      var o = n(200651);
      n(192379);
      var l = n(481060),
        r = n(522664),
        a = n(651530),
        i = n(247206),
        d = n(668058),
        s = n(112554),
        c = n(160877),
        u = n(388032);
      function I(t) {
        let {
            channelId: e,
            messageId: n,
            mediaItemUrl: I,
            embedId: _,
            transitionState: m,
            onClose: E,
          } = t,
          h = (0, a.yh)(),
          f = (0, s.K)(e, n, I),
          C = (0, s.b)(e, n, _),
          { reportFalsePositive: g, isReportFalsePositiveLoading: v } = (0,
          d.$)({
            onSuccess: () => (0, c.s)(E),
            onError: () => {
              (0, l.showToast)(
                (0, l.createToast)(
                  u.intl.string(u.t.R0RpRU),
                  l.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, r.Uj)(
                e,
                n,
                f.map((t) => t.id),
                C.map((t) => t.id),
              );
            },
          });
        return (
          !(h && (f.length > 0 || C.length > 0)) && E(),
          (0, o.jsx)(c.$, {
            messageId: n,
            channelId: e,
            isReportFalsePositiveLoading: v,
            analyticsContext: i.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: g,
            attachmentPreview: 1 === f.length && 0 === C.length ? f[0] : void 0,
            embedPreview: 1 === C.length && 0 === f.length ? C[0] : void 0,
            transitionState: m,
            onClose: E,
          })
        );
      }
    },
    880257: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var o = n(442837),
        l = n(594174);
      function r() {
        return (0, o.e7)([l.default], () => {
          var t;
          return null === (t = l.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.nsfwAllowed;
        });
      }
    },
    191623: function (t, e, n) {
      t.exports = {
        headerImg: "headerImg_bf543c",
        modalBody: "modalBody_bf543c",
        modalInteriorHeader: "modalInteriorHeader_bf543c",
        modalHeader: "modalHeader_bf543c",
        buttonContainer: "buttonContainer_bf543c",
      };
    },
  },
]);
//# sourceMappingURL=c14a0f9ecfc488f365d2.js.map
