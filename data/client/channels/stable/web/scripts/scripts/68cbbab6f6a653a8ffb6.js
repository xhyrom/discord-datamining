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
          return l;
        },
        b: function () {
          return s;
        },
      });
      var o = n(399606),
        a = n(375954),
        r = n(163268);
      let l = (e, t, n) => {
          var l, s;
          let i = (0, o.e7)([a.Z], () => a.Z.getMessage(e, t));
          if (null == i) return [];
          let d =
            void 0 !== n
              ? (e) => e.url === n
              : (e) =>
                  (0, r.KP)({ type: r.lJ.Attachment, media: e }, (0, r.HH)(i));
          return null !==
            (s =
              null == i
                ? void 0
                : null === (l = i.attachments) || void 0 === l
                  ? void 0
                  : l.filter(d)) && void 0 !== s
            ? s
            : [];
        },
        s = (e, t, n) => {
          var l, s;
          let i = (0, o.e7)([a.Z], () => a.Z.getMessage(e, t));
          if (null == i) return [];
          let d =
            void 0 !== n
              ? (e) => e.id === n
              : (e) => (0, r.KP)({ type: r.lJ.Embed, media: e }, (0, r.HH)(i));
          return null !==
            (s =
              null == i
                ? void 0
                : null === (l = i.embeds) || void 0 === l
                  ? void 0
                  : l.filter(d)) && void 0 !== s
            ? s
            : [];
        };
    },
    910673: function (e, t, n) {
      n.r(t);
      var o = n(735250),
        a = n(470079),
        r = n(481060),
        l = n(230711),
        s = n(782568),
        i = n(880257),
        d = n(187819),
        E = n(63063),
        _ = n(163268),
        c = n(981631),
        u = n(526761),
        I = n(689938),
        C = n(754812),
        R = n(444812);
      t.default = (e) => {
        let { channelId: t, messageId: T, transitionState: A, onClose: N } = e,
          O = (0, i.Z)(),
          M = (0, d._p)({
            location: "explicit-media-learn-more",
            autoTrackExposure: !1,
          }),
          h = a.useCallback(
            (e) => {
              (0, _.aP)({ action: e, channelId: t, messageId: T });
            },
            [t, T],
          );
        return (
          a.useEffect(() => {
            (0, _.aP)({
              action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
              channelId: t,
              messageId: T,
            });
          }, [t, T]),
          (0, o.jsxs)(r.ModalRoot, {
            transitionState: A,
            "aria-label": I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
              (0, o.jsx)(r.ModalHeader, {
                separator: !1,
                className: C.modalHeader,
                children: (0, o.jsx)("img", {
                  src: R,
                  alt: I.Z.Messages
                    .OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                  className: C.headerImg,
                }),
              }),
              (0, o.jsxs)(r.ModalContent, {
                className: C.modalBody,
                children: [
                  (0, o.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    className: C.modalInteriorHeader,
                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER,
                  }),
                  (0, o.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: O
                      ? I.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT
                      : I.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN,
                  }),
                  (0, o.jsxs)("div", {
                    className: C.buttonContainer,
                    children: [
                      O
                        ? (0, o.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: function () {
                              h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                M
                                  ? l.Z.open(c.oAB.CONTENT_AND_SOCIAL, null, {
                                      scrollPosition:
                                        u.to.EXPLICIT_MEDIA_REDACTION_V2,
                                    })
                                  : l.Z.open(c.oAB.PRIVACY_AND_SAFETY, null, {
                                      scrollPosition:
                                        u.to.EXPLICIT_MEDIA_REDACTION,
                                    }),
                                N();
                            },
                            fullWidth: !0,
                            children:
                              I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA,
                          })
                        : (0, o.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                              (0, s.Z)(
                                E.Z.getArticleURL(
                                  c.BhN.EXPLICIT_MEDIA_REDACTION,
                                ),
                              );
                            },
                            fullWidth: !0,
                            children: I.Z.Messages.LEARN_MORE,
                          }),
                      (0, o.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: function () {
                          N(), h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                        },
                        fullWidth: !0,
                        children:
                          I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS,
                      }),
                      (0, o.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children:
                          I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format(
                            {
                              handleFalsePositiveHook: () => {
                                N(),
                                  h(
                                    _.Yy
                                      .EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
                                  ),
                                  (0, r.openModalLazy)(async () => {
                                    let { default: e } = await n(788679);
                                    return (n) =>
                                      (0, o.jsx)(e, {
                                        channelId: t,
                                        messageId: T,
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
      var o = n(735250);
      n(470079);
      var a = n(481060),
        r = n(522664),
        l = n(651530),
        s = n(163268),
        i = n(668058),
        d = n(112554),
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
          R = (0, l.yh)(),
          T = (0, d.K)(t, n, c),
          A = (0, d.b)(t, n, u),
          { reportFalsePositive: N, isReportFalsePositiveLoading: O } = (0,
          i.$)({
            onSuccess: () => (0, E.s)(C),
            onError: () => {
              (0, a.showToast)(
                (0, a.createToast)(
                  _.Z.Messages.ERROR_GENERIC_TITLE,
                  a.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, r.Uj)(
                t,
                n,
                T.map((e) => e.id),
                A.map((e) => e.id),
              );
            },
          });
        return (
          !(R && (T.length > 0 || A.length > 0)) && C(),
          (0, o.jsx)(E.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: O,
            analyticsContext: s.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: N,
            attachmentPreview: 1 === T.length && 0 === A.length ? T[0] : void 0,
            embedPreview: 1 === A.length && 0 === T.length ? A[0] : void 0,
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
      var o = n(442837),
        a = n(594174);
      function r() {
        return (0, o.e7)([a.default], () => {
          var e;
          return null === (e = a.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.nsfwAllowed;
        });
      }
    },
    754812: function (e, t, n) {
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
//# sourceMappingURL=68cbbab6f6a653a8ffb6.js.map
