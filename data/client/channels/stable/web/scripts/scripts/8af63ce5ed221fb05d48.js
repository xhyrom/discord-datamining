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
      var a = n(399606),
        o = n(375954),
        r = n(163268);
      let l = (e, t, n) => {
          var l, s;
          let i = (0, a.e7)([o.Z], () => o.Z.getMessage(e, t));
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
          let i = (0, a.e7)([o.Z], () => o.Z.getMessage(e, t));
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
      var a = n(735250),
        o = n(470079),
        r = n(481060),
        l = n(230711),
        s = n(782568),
        i = n(880257),
        d = n(187819),
        E = n(63063),
        _ = n(163268),
        u = n(981631),
        c = n(526761),
        I = n(689938),
        C = n(754812),
        R = n(444812);
      t.default = (e) => {
        let { channelId: t, messageId: T, transitionState: f, onClose: A } = e,
          N = (0, i.Z)(),
          m = (0, d._p)({
            location: "explicit-media-learn-more",
            autoTrackExposure: !1,
          }),
          M = o.useCallback(
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
          (0, a.jsxs)(r.ModalRoot, {
            transitionState: f,
            "aria-label": I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
              (0, a.jsx)(r.ModalHeader, {
                separator: !1,
                className: C.modalHeader,
                children: (0, a.jsx)("img", {
                  src: R,
                  alt: I.Z.Messages
                    .OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                  className: C.headerImg,
                }),
              }),
              (0, a.jsxs)(r.ModalContent, {
                className: C.modalBody,
                children: [
                  (0, a.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    className: C.modalInteriorHeader,
                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER,
                  }),
                  (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: N
                      ? I.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT
                      : I.Z.Messages
                          .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN,
                  }),
                  (0, a.jsxs)("div", {
                    className: C.buttonContainer,
                    children: [
                      N
                        ? (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: function () {
                              M(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                l.Z.open(u.oAB.PRIVACY_AND_SAFETY, null, {
                                  scrollPosition: m
                                    ? c.to.EXPLICIT_MEDIA_REDACTION_V2
                                    : c.to.EXPLICIT_MEDIA_REDACTION,
                                }),
                                A();
                            },
                            fullWidth: !0,
                            children:
                              I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA,
                          })
                        : (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: () => {
                              (0, s.Z)(
                                E.Z.getArticleURL(
                                  u.BhN.EXPLICIT_MEDIA_REDACTION,
                                ),
                              );
                            },
                            fullWidth: !0,
                            children: I.Z.Messages.LEARN_MORE,
                          }),
                      (0, a.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        onClick: function () {
                          A(), M(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                        },
                        fullWidth: !0,
                        children:
                          I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS,
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children:
                          I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format(
                            {
                              handleFalsePositiveHook: () => {
                                A(),
                                  M(
                                    _.Yy
                                      .EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE,
                                  ),
                                  (0, r.openModalLazy)(async () => {
                                    let { default: e } = await n(788679);
                                    return (n) =>
                                      (0, a.jsx)(e, {
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
            return u;
          },
        });
      var a = n(735250);
      n(470079);
      var o = n(481060),
        r = n(522664),
        l = n(651530),
        s = n(163268),
        i = n(668058),
        d = n(112554),
        E = n(160877),
        _ = n(689938);
      function u(e) {
        let {
            channelId: t,
            messageId: n,
            mediaItemUrl: u,
            embedId: c,
            transitionState: I,
            onClose: C,
          } = e,
          R = (0, l.yh)(),
          T = (0, d.K)(t, n, u),
          f = (0, d.b)(t, n, c),
          { reportFalsePositive: A, isReportFalsePositiveLoading: N } = (0,
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
                n,
                T.map((e) => e.id),
                f.map((e) => e.id),
              );
            },
          });
        return (
          !(R && (T.length > 0 || f.length > 0)) && C(),
          (0, a.jsx)(E.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: N,
            analyticsContext: s.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: A,
            attachmentPreview: 1 === T.length && 0 === f.length ? T[0] : void 0,
            embedPreview: 1 === f.length && 0 === T.length ? f[0] : void 0,
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
    187819: function (e, t, n) {
      n.d(t, {
        _p: function () {
          return r;
        },
        sp: function () {
          return o;
        },
      });
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_safety_settings_update",
        label: "Safety Settings Update",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Safety Settings Update",
            config: { enabled: !0 },
          },
        ],
      });
      function o(e) {
        let { location: t, autoTrackExposure: n } = e,
          { enabled: o } = a.getCurrentConfig(
            { location: t },
            { autoTrackExposure: null == n || n },
          );
        return o;
      }
      function r(e) {
        let { location: t, autoTrackExposure: n } = e,
          { enabled: o } = a.useExperiment(
            { location: t },
            { autoTrackExposure: null == n || n },
          );
        return o;
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
//# sourceMappingURL=8af63ce5ed221fb05d48.js.map
