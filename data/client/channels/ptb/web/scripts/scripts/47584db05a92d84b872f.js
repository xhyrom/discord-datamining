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
        r = n(375954),
        l = n(247206);
      let a = (t, e, n) => {
          var a, i;
          let d = (0, o.e7)([r.Z], () => r.Z.getMessage(t, e));
          if (null == d) return [];
          let s =
            void 0 !== n
              ? (t) => t.url === n
              : (t) =>
                  (0, l.KP)({ type: l.lJ.Attachment, media: t }, (0, l.HH)(d));
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
          let d = (0, o.e7)([r.Z], () => r.Z.getMessage(t, e));
          if (null == d) return [];
          let s =
            void 0 !== n
              ? (t) => t.id === n
              : (t) => (0, l.KP)({ type: l.lJ.Embed, media: t }, (0, l.HH)(d));
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
        r = n(192379),
        l = n(481060),
        a = n(230711),
        i = n(782568),
        d = n(880257),
        s = n(63063),
        c = n(247206),
        u = n(981631),
        I = n(526761),
        h = n(388032),
        m = n(219834),
        _ = n(444812);
      e.default = (t) => {
        let { channelId: e, messageId: f, transitionState: E, onClose: C } = t,
          g = (0, d.Z)(),
          v = r.useCallback(
            (t) => {
              (0, c.aP)({ action: t, channelId: e, messageId: f });
            },
            [e, f],
          );
        return (
          r.useEffect(() => {
            (0, c.aP)({
              action: c.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
              channelId: e,
              messageId: f,
            });
          }, [e, f]),
          (0, o.jsxs)(l.ModalRoot, {
            transitionState: E,
            "aria-label": h.intl.string(h.t.xdm3XF),
            children: [
              (0, o.jsx)(l.ModalHeader, {
                separator: !1,
                className: m.modalHeader,
                children: (0, o.jsx)("img", {
                  src: _,
                  alt: h.intl.string(h.t.id3fND),
                  className: m.headerImg,
                }),
              }),
              (0, o.jsxs)(l.ModalContent, {
                className: m.modalBody,
                children: [
                  (0, o.jsx)(l.Heading, {
                    variant: "heading-lg/bold",
                    className: m.modalInteriorHeader,
                    children: h.intl.string(h.t.sGW77u),
                  }),
                  (0, o.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: g
                      ? h.intl.string(h.t.XW3vjo)
                      : h.intl.string(h.t.i4daNj),
                  }),
                  (0, o.jsxs)("div", {
                    className: m.buttonContainer,
                    children: [
                      g
                        ? (0, o.jsx)(l.Button, {
                            color: l.Button.Colors.BRAND,
                            onClick: function () {
                              v(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                a.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, {
                                  scrollPosition:
                                    I.FY.EXPLICIT_MEDIA_REDACTION_V2,
                                }),
                                C();
                            },
                            fullWidth: !0,
                            children: h.intl.string(h.t["9D+zGR"]),
                          })
                        : (0, o.jsx)(l.Button, {
                            color: l.Button.Colors.BRAND,
                            onClick: () => {
                              (0, i.Z)(
                                s.Z.getArticleURL(
                                  u.BhN.EXPLICIT_MEDIA_REDACTION,
                                ),
                              );
                            },
                            fullWidth: !0,
                            children: h.intl.string(h.t.hvVgAQ),
                          }),
                      (0, o.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        onClick: function () {
                          C(), v(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                        },
                        fullWidth: !0,
                        children: h.intl.string(h.t.bmbHPD),
                      }),
                      (0, o.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: h.intl.format(h.t.Ge0HUl, {
                          handleFalsePositiveHook: () => {
                            C(),
                              v(
                                c.Yy
                                  .EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
                              ),
                              (0, l.openModalLazy)(async () => {
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
      var r = n(481060),
        l = n(522664),
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
            embedId: h,
            transitionState: m,
            onClose: _,
          } = t,
          f = (0, a.yh)(),
          E = (0, s.K)(e, n, I),
          C = (0, s.b)(e, n, h),
          { reportFalsePositive: g, isReportFalsePositiveLoading: v } = (0,
          d.$)({
            onSuccess: () => (0, c.s)(_),
            onError: () => {
              (0, r.showToast)(
                (0, r.createToast)(
                  u.intl.string(u.t.R0RpRU),
                  r.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, l.Uj)(
                e,
                n,
                E.map((t) => t.id),
                C.map((t) => t.id),
              );
            },
          });
        return (
          !(f && (E.length > 0 || C.length > 0)) && _(),
          (0, o.jsx)(c.$, {
            messageId: n,
            channelId: e,
            isReportFalsePositiveLoading: v,
            analyticsContext: i.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: g,
            attachmentPreview: 1 === E.length && 0 === C.length ? E[0] : void 0,
            embedPreview: 1 === C.length && 0 === E.length ? C[0] : void 0,
            transitionState: m,
            onClose: _,
          })
        );
      }
    },
    880257: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var o = n(442837),
        r = n(594174);
      function l() {
        return (0, o.e7)([r.default], () => {
          var t;
          return null === (t = r.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.nsfwAllowed;
        });
      }
    },
    219834: function (t, e, n) {
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
//# sourceMappingURL=47584db05a92d84b872f.js.map
