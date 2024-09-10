"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62010"],
  {
    601572: function (e, o, a) {
      a.r(o),
        a.d(o, {
          default: function () {
            return x;
          },
        }),
        a(47120);
      var n = a(735250),
        d = a(470079),
        t = a(481060),
        r = a(846027),
        c = a(410575),
        i = a(2052),
        s = a(100527),
        l = a(906732),
        u = a(600164),
        g = a(313201),
        p = a(695346),
        _ = a(932724),
        k = a(716161),
        b = a(672339),
        E = a(898531),
        m = a(131951),
        O = a(594174),
        C = a(626135),
        I = a(747545),
        h = a(981631),
        f = a(689938),
        A = a(207937);
      let B = 368,
        R = 207;
      function x(e) {
        let {
            transitionState: o,
            videoEnabled: a,
            onEnable: x,
            onClose: v,
          } = e,
          M = m.Z.getCameraComponent(),
          T = (0, g.Dt)(),
          w = (0, E.Z)(),
          D = p.qF.useSetting(),
          [N, P] = d.useState((0, _.P)(O.default.getCurrentUser())),
          S = (0, i.O)(),
          { analyticsLocations: j } = (0, l.ZP)(s.Z.CAMERA_PREVIEW),
          U = d.useRef(null);
        d.useEffect(() => {
          C.default.track(h.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
        }, []),
          d.useEffect(() => {
            var e;
            null === (e = U.current) || void 0 === e || e.scrollToTop();
          }, []);
        let V = async () => {
            await W(), r.Z.setVideoEnabled(!0), null == x || x();
          },
          W = async () => {
            try {
              await (0, b.wG)(N, {
                location: { page: h.ZY5.PREVIEW_CAMERA_MODAL, ...S.location },
              });
            } catch (e) {}
            await v(), (0, k.Up)(N);
          };
        return (0, n.jsx)(l.Gt, {
          value: j,
          children: (0, n.jsx)(c.Z, {
            page: h.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(t.ModalRoot, {
              className: A.modalRoot,
              size: t.ModalSize.DYNAMIC,
              "aria-labelledby": T,
              transitionState: o,
              children: [
                (0, n.jsxs)(t.ModalContent, {
                  className: w ? A.contentWithVideoBackgrounds : A.content,
                  scrollerRef: U,
                  children: [
                    (0, n.jsx)(t.Heading, {
                      id: T,
                      className: A.header,
                      variant: "heading-xl/semibold",
                      children: a
                        ? f.Z.Messages
                            .CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER
                        : f.Z.Messages.CAMERA_PREVIEW_MODAL_HEADER,
                    }),
                    (0, n.jsx)(I.Z, {
                      hidePreviewToggle: !0,
                      showSmallBackgroundOptions: !0,
                      hideDeviceHeader: !0,
                      selectedBackgroundOption: N,
                      onSelectBackgroundOption: P,
                      hideDeviceSelector: a,
                      renderCamera: (e) =>
                        (0, n.jsxs)("div", {
                          className: A.cameraPreview,
                          children: [
                            (0, n.jsx)("div", {
                              className: A.camera,
                              children: (0, n.jsx)(M, {
                                disabled: !1,
                                deviceId: e,
                                width: B,
                                height: R,
                              }),
                            }),
                            (0, n.jsx)(I.S, {}),
                          ],
                        }),
                      onLearnMore: v,
                    }),
                  ],
                }),
                (0, n.jsxs)(t.ModalFooter, {
                  justify: u.Z.Justify.BETWEEN,
                  children: [
                    (() => {
                      let e = a
                        ? f.Z.Messages
                            .CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND
                        : f.Z.Messages.CAMERA_ON;
                      return (0, n.jsx)(t.Button, {
                        onClick: a ? W : V,
                        size: t.Button.Sizes.SMALL,
                        autoFocus: !a,
                        children: e,
                      });
                    })(),
                    (0, n.jsx)(t.Checkbox, {
                      size: 18,
                      type: t.Checkbox.Types.INVERTED,
                      value: D,
                      onChange: () => {
                        p.qF.updateSetting(!D),
                          C.default.track(h.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !D,
                          });
                      },
                      children: (0, n.jsx)(t.Text, {
                        variant: "text-sm/normal",
                        children: f.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(t.ModalCloseButton, {
                  onClick: v,
                  className: A.modalClose,
                }),
              ],
            }),
          }),
        });
      }
    },
    266129: function (e, o, a) {
      e.exports = {
        spacingTop24: "spacingTop24_a0bf6d",
        videoBackgroundError: "videoBackgroundError_a0bf6d",
      };
    },
    793532: function (e, o, a) {
      e.exports = {
        backgroundIconOptionIcon: "backgroundIconOptionIcon_ad7d79",
        backgroundOptionsSmall:
          "backgroundOptionsSmall_ad7d79 backgroundOptions_ad7d79",
        backgroundOptionsLarge:
          "backgroundOptionsLarge_ad7d79 backgroundOptions_ad7d79",
        backgroundImageOption: "backgroundImageOption_ad7d79",
        backgroundOptionBlurBackground:
          "backgroundOptionBlurBackground_ad7d79 backgroundOptionBackgroundBlurred_ad7d79 backgroundImageOption_ad7d79",
        backgroundOption: "backgroundOption_ad7d79",
        backgroundOptionDisabled: "backgroundOptionDisabled_ad7d79",
        backgroundOptionSelected: "backgroundOptionSelected_ad7d79",
        backgroundOptionInner: "backgroundOptionInner_ad7d79",
        playIcon: "playIcon_ad7d79",
        newTextBadge: "newTextBadge_ad7d79",
        backgroundOptionRing: "backgroundOptionRing_ad7d79",
        backgroundCustomInlineUpsellBackgroundDarkener:
          "backgroundCustomInlineUpsellBackgroundDarkener_ad7d79",
        backgroundOptionContent: "backgroundOptionContent_ad7d79",
        overflowEllipsis: "overflowEllipsis_ad7d79",
        backgroundOptionText:
          "backgroundOptionText_ad7d79 overflowEllipsis_ad7d79",
        newBackgroundTooltipContainer: "newBackgroundTooltipContainer_ad7d79",
        backgroundCustomInlineUpsellBackground:
          "backgroundCustomInlineUpsellBackground_ad7d79 backgroundImageOption_ad7d79",
        backgroundCustomInlineUpsell: "backgroundCustomInlineUpsell_ad7d79",
        backgroundCustomInlineUpsellIcon:
          "backgroundCustomInlineUpsellIcon_ad7d79",
        customBackgroundTooltip: "customBackgroundTooltip_ad7d79",
        customBackgroundTooltipIcon: "customBackgroundTooltipIcon_ad7d79",
      };
    },
    207937: function (e, o, a) {
      e.exports = {
        modalClose: "modalClose_e5da2b",
        modalRoot: "modalRoot_e5da2b",
        header: "header_e5da2b",
        camera: "camera_e5da2b",
        cameraPreview: "cameraPreview_e5da2b",
        content: "content_e5da2b",
        contentWithVideoBackgrounds:
          "contentWithVideoBackgrounds_e5da2b content_e5da2b",
      };
    },
    332564: function (e, o, a) {
      e.exports = {
        spacingTop24: "spacingTop24_c6d1f7",
        permissionWarning: "permissionWarning_c6d1f7",
        selector: "selector_c6d1f7",
        selectorNoHeader: "selectorNoHeader_c6d1f7",
        previewToggle: "previewToggle_c6d1f7",
        filterLoadingIndicator: "filterLoadingIndicator_c6d1f7",
        cameraPreviewTitle: "cameraPreviewTitle_c6d1f7",
      };
    },
  },
]);
//# sourceMappingURL=84670535b317db6018ab.js.map
