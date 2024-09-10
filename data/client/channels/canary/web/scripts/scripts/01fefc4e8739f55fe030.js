"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14021"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    112554: function (e, t, a) {
      a.d(t, {
        K: function () {
          return s;
        },
        b: function () {
          return l;
        },
      });
      var n = a(399606),
        o = a(375954),
        r = a(163268);
      let s = (e, t, a) => {
          var s, l;
          let i = (0, n.e7)([o.Z], () => o.Z.getMessage(e, t));
          if (null == i) return [];
          let d =
            void 0 !== a
              ? (e) => e.url === a
              : (e) =>
                  (0, r.KP)({ type: r.lJ.Attachment, media: e }, (0, r.HH)(i));
          return null !==
            (l =
              null == i
                ? void 0
                : null === (s = i.attachments) || void 0 === s
                  ? void 0
                  : s.filter(d)) && void 0 !== l
            ? l
            : [];
        },
        l = (e, t, a) => {
          var s, l;
          let i = (0, n.e7)([o.Z], () => o.Z.getMessage(e, t));
          if (null == i) return [];
          let d =
            void 0 !== a
              ? (e) => e.id === a
              : (e) => (0, r.KP)({ type: r.lJ.Embed, media: e }, (0, r.HH)(i));
          return null !==
            (l =
              null == i
                ? void 0
                : null === (s = i.embeds) || void 0 === s
                  ? void 0
                  : s.filter(d)) && void 0 !== l
            ? l
            : [];
        };
    },
    910673: function (e, t, a) {
      a.r(t);
      var n = a(735250),
        o = a(470079),
        r = a(481060),
        s = a(230711),
        l = a(782568),
        i = a(880257),
        d = a(187819),
        E = a(63063),
        _ = a(163268),
        c = a(981631),
        u = a(526761),
        I = a(689938),
        C = a(754812),
        R = a(444812);
      t.default = (e) => {
        let { channelId: t, messageId: T, transitionState: A, onClose: N } = e,
          M = (0, i.Z)(),
          O = (0, d._p)({
            location: "explicit-media-learn-more",
            autoTrackExposure: !1,
          }),
          h = o.useCallback(
            (e) => {
              (0, _.aP)({ action: e, channelId: t, messageId: T });
            },
            [t, T],
          );
        return (
          o.useEffect(() => {
            (0, _.aP)({
              action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
              channelId: t,
              messageId: T,
            });
          }, [t, T]),
          (0, n.jsxs)(r.ModalRoot, {
            transitionState: A,
            "aria-label": I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
              (0, n.jsx)(r.ModalHeader, {
                separator: !1,
                className: C.modalHeader,
                children: (0, n.jsx)("img", {
                  src: R,
                  alt: I.Z.Messages
                    .OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                  className: C.headerImg,
                }),
              }),
              (0, n.jsxs)(r.ModalContent, {
                className: C.modalBody,
                children: [
                  (0, n.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    className: C.modalInteriorHeader,
                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER,
                  }),
                  (0, n.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: M
                      ? I.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT
                      : I.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN,
                  }),
                  (0, n.jsxs)("div", {
                    className: C.buttonContainer,
                    children: [
                      M
                        ? (0, n.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: function () {
                              h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                s.Z.open(c.oAB.PRIVACY_AND_SAFETY, null, {
                                  scrollPosition: O
                                    ? u.to.EXPLICIT_MEDIA_REDACTION_V2
                                    : u.to.EXPLICIT_MEDIA_REDACTION,
                                }),
                                N();
                            },
                            fullWidth: !0,
                            children:
                              I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA,
                          })
                        : (0, n.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                              (0, l.Z)(
                                E.Z.getArticleURL(
                                  c.BhN.EXPLICIT_MEDIA_REDACTION,
                                ),
                              );
                            },
                            fullWidth: !0,
                            children: I.Z.Messages.LEARN_MORE,
                          }),
                      (0, n.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: function () {
                          N(), h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                        },
                        fullWidth: !0,
                        children:
                          I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS,
                      }),
                      (0, n.jsx)(r.Text, {
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
                                    let { default: e } = await a(788679);
                                    return (a) =>
                                      (0, n.jsx)(e, {
                                        channelId: t,
                                        messageId: T,
                                        ...a,
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
    788679: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a(735250);
      a(470079);
      var o = a(481060),
        r = a(522664),
        s = a(651530),
        l = a(163268),
        i = a(668058),
        d = a(112554),
        E = a(160877),
        _ = a(689938);
      function c(e) {
        let {
            channelId: t,
            messageId: a,
            mediaItemUrl: c,
            embedId: u,
            transitionState: I,
            onClose: C,
          } = e,
          R = (0, s.yh)(),
          T = (0, d.K)(t, a, c),
          A = (0, d.b)(t, a, u),
          { reportFalsePositive: N, isReportFalsePositiveLoading: M } = (0,
          i.$)({
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
                a,
                T.map((e) => e.id),
                A.map((e) => e.id),
              );
            },
          });
        return (
          !(R && (T.length > 0 || A.length > 0)) && C(),
          (0, n.jsx)(E.$, {
            messageId: a,
            channelId: t,
            isReportFalsePositiveLoading: M,
            analyticsContext: l.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: N,
            attachmentPreview: 1 === T.length && 0 === A.length ? T[0] : void 0,
            embedPreview: 1 === A.length && 0 === T.length ? A[0] : void 0,
            transitionState: I,
            onClose: C,
          })
        );
      }
    },
    880257: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(442837),
        o = a(594174);
      function r() {
        return (0, n.e7)([o.default], () => {
          var e;
          return null === (e = o.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.nsfwAllowed;
        });
      }
    },
    754812: function (e, t, a) {
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
//# sourceMappingURL=01fefc4e8739f55fe030.js.map
