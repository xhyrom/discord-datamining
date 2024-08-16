"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14021"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    112554: function (e, t, n) {
      n.d(t, {
        K: function () {
          return s;
        },
        b: function () {
          return l;
        },
      });
      var a = n(399606),
        o = n(375954),
        r = n(163268);
      let s = (e, t, n) => {
          var s, l;
          let d = (0, a.e7)([o.Z], () => o.Z.getMessage(e, t));
          if (null == d) return [];
          let i =
            void 0 !== n
              ? (e) => e.url === n
              : (e) =>
                  (0, r.KP)({ type: r.lJ.Attachment, media: e }, (0, r.HH)(d));
          return null !==
            (l =
              null == d
                ? void 0
                : null === (s = d.attachments) || void 0 === s
                  ? void 0
                  : s.filter(i)) && void 0 !== l
            ? l
            : [];
        },
        l = (e, t, n) => {
          var s, l;
          let d = (0, a.e7)([o.Z], () => o.Z.getMessage(e, t));
          if (null == d) return [];
          let i =
            void 0 !== n
              ? (e) => e.id === n
              : (e) => (0, r.KP)({ type: r.lJ.Embed, media: e }, (0, r.HH)(d));
          return null !==
            (l =
              null == d
                ? void 0
                : null === (s = d.embeds) || void 0 === s
                  ? void 0
                  : s.filter(i)) && void 0 !== l
            ? l
            : [];
        };
    },
    910673: function (e, t, n) {
      n.r(t);
      var a = n(735250),
        o = n(470079),
        r = n(481060),
        s = n(230711),
        l = n(782568),
        d = n(880257),
        i = n(63063),
        E = n(163268),
        _ = n(981631),
        c = n(526761),
        u = n(689938),
        I = n(190007),
        C = n(444812);
      t.default = (e) => {
        let { channelId: t, messageId: R, transitionState: T, onClose: N } = e,
          A = (0, d.Z)(),
          M = o.useCallback(
            (e) => {
              (0, E.aP)({ action: e, channelId: t, messageId: R });
            },
            [t, R],
          );
        return (
          o.useEffect(() => {
            (0, E.aP)({
              action: E.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
              channelId: t,
              messageId: R,
            });
          }, [t, R]),
          (0, a.jsxs)(r.ModalRoot, {
            transitionState: T,
            "aria-label": u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
              (0, a.jsx)(r.ModalHeader, {
                separator: !1,
                className: I.modalHeader,
                children: (0, a.jsx)("img", {
                  src: C,
                  alt: u.Z.Messages
                    .OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                  className: I.headerImg,
                }),
              }),
              (0, a.jsxs)(r.ModalContent, {
                className: I.modalBody,
                children: [
                  (0, a.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    className: I.modalInteriorHeader,
                    children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER,
                  }),
                  (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: A
                      ? u.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT
                      : u.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN,
                  }),
                  (0, a.jsxs)("div", {
                    className: I.buttonContainer,
                    children: [
                      A
                        ? (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: function () {
                              M(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                s.Z.open(_.oAB.PRIVACY_AND_SAFETY, null, {
                                  scrollPosition: c.to.EXPLICIT_MEDIA_REDACTION,
                                }),
                                N();
                            },
                            fullWidth: !0,
                            children:
                              u.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA,
                          })
                        : (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                              (0, l.Z)(
                                i.Z.getArticleURL(
                                  _.BhN.EXPLICIT_MEDIA_REDACTION,
                                ),
                              );
                            },
                            fullWidth: !0,
                            children: u.Z.Messages.LEARN_MORE,
                          }),
                      (0, a.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: function () {
                          N(), M(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                        },
                        fullWidth: !0,
                        children:
                          u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS,
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children:
                          u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format(
                            {
                              handleFalsePositiveHook: () => {
                                N(),
                                  M(
                                    E.Yy
                                      .EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
                                  ),
                                  (0, r.openModalLazy)(async () => {
                                    let { default: e } = await n(788679);
                                    return (n) =>
                                      (0, a.jsx)(e, {
                                        channelId: t,
                                        messageId: R,
                                        ...n,
                                      });
                                  });
                              },
                            },
                          ),
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
    788679: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n(735250);
      n(470079);
      var o = n(481060),
        r = n(522664),
        s = n(651530),
        l = n(163268),
        d = n(668058),
        i = n(112554),
        E = n(160877),
        _ = n(689938);
      function c(e) {
        let {
            channelId: t,
            messageId: n,
            mediaItemUrl: c,
            embedId: u,
            transitionState: I,
            onClose: C,
          } = e,
          R = (0, s.yh)(),
          T = (0, i.K)(t, n, c),
          N = (0, i.b)(t, n, u),
          { reportFalsePositive: A, isReportFalsePositiveLoading: M } = (0,
          d.$)({
            onSuccess: () => (0, E.s)(C),
            onError: () => {
              (0, o.showToast)(
                (0, o.createToast)(
                  _.Z.Messages.ERROR_GENERIC_TITLE,
                  o.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, r.Uj)(
                t,
                n,
                T.map((e) => e.id),
                N.map((e) => e.id),
              );
            },
          });
        return (
          !(R && (T.length > 0 || N.length > 0)) && C(),
          (0, a.jsx)(E.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: M,
            analyticsContext: l.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: A,
            attachmentPreview: 1 === T.length && 0 === N.length ? T[0] : void 0,
            embedPreview: 1 === N.length && 0 === T.length ? N[0] : void 0,
            transitionState: I,
            onClose: C,
          })
        );
      }
    },
    880257: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(442837),
        o = n(594174);
      function r() {
        return (0, a.e7)([o.default], () => {
          var e;
          return null === (e = o.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.nsfwAllowed;
        });
      }
    },
    190007: function (e, t, n) {
      e.exports = {
        headerImg: "headerImg_bf543c",
        modalBody: "modalBody_bf543c",
        modalInteriorHeader: "modalInteriorHeader_bf543c",
        modalHeader: "modalHeader_bf543c",
        buttonContainer: "buttonContainer_bf543c",
      };
    },
  },
]);
//# sourceMappingURL=ea8dec88287eb1f6c560.js.map
