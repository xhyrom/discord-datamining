"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39607"],
  {
    601572: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return w;
          },
        }),
        o(47120);
      var a = o(200651),
        d = o(192379),
        t = o(481060),
        r = o(846027),
        i = o(410575),
        c = o(2052),
        l = o(100527),
        s = o(906732),
        u = o(600164),
        g = o(313201),
        p = o(695346),
        k = o(932724),
        b = o(716161),
        _ = o(672339),
        m = o(898531),
        O = o(131951),
        h = o(594174),
        f = o(626135),
        C = o(747545),
        I = o(981631),
        x = o(388032),
        B = o(845569);
      let T = 368,
        v = 207;
      function w(e) {
        let {
            transitionState: n,
            videoEnabled: o,
            onEnable: w,
            onClose: E,
          } = e,
          S = O.Z.getCameraComponent(),
          M = (0, g.Dt)(),
          j = (0, m.Z)(),
          R = p.qF.useSetting(),
          [D, P] = d.useState((0, k.P)(h.default.getCurrentUser())),
          A = (0, c.O)(),
          { analyticsLocations: L } = (0, s.ZP)(l.Z.CAMERA_PREVIEW),
          N = d.useRef(null);
        d.useEffect(() => {
          f.default.track(I.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
        }, []),
          d.useEffect(() => {
            var e;
            null === (e = N.current) || void 0 === e || e.scrollToTop();
          }, []);
        let y = async () => {
            await U(), r.Z.setVideoEnabled(!0), null == w || w();
          },
          U = async () => {
            try {
              await (0, _.wG)(D, {
                location: { page: I.ZY5.PREVIEW_CAMERA_MODAL, ...A.location },
              });
            } catch (e) {}
            await E(), (0, b.Up)(D);
          };
        return (0, a.jsx)(s.Gt, {
          value: L,
          children: (0, a.jsx)(i.Z, {
            page: I.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(t.ModalRoot, {
              className: B.modalRoot,
              size: t.ModalSize.DYNAMIC,
              "aria-labelledby": M,
              transitionState: n,
              children: [
                (0, a.jsxs)(t.ModalContent, {
                  className: j ? B.contentWithVideoBackgrounds : B.content,
                  scrollerRef: N,
                  children: [
                    (0, a.jsx)(t.Heading, {
                      id: M,
                      className: B.header,
                      variant: "heading-xl/semibold",
                      children: o
                        ? x.intl.string(x.t.LAwwbW)
                        : x.intl.string(x.t["/HITVF"]),
                    }),
                    (0, a.jsx)(C.Z, {
                      hidePreviewToggle: !0,
                      showSmallBackgroundOptions: !0,
                      hideDeviceHeader: !0,
                      hideCameraSettingsLink: !0,
                      selectedBackgroundOption: D,
                      onSelectBackgroundOption: P,
                      hideDeviceSelector: o,
                      renderCamera: (e) =>
                        (0, a.jsxs)("div", {
                          className: B.cameraPreview,
                          children: [
                            (0, a.jsx)("div", {
                              className: B.camera,
                              children: (0, a.jsx)(S, {
                                disabled: !1,
                                deviceId: e,
                                width: T,
                                height: v,
                              }),
                            }),
                            (0, a.jsx)(C.S, {}),
                          ],
                        }),
                      onLearnMore: E,
                    }),
                  ],
                }),
                (0, a.jsxs)(t.ModalFooter, {
                  justify: u.Z.Justify.BETWEEN,
                  children: [
                    (() => {
                      let e = o
                        ? x.intl.string(x.t.KQENho)
                        : x.intl.string(x.t.kgIe9f);
                      return (0, a.jsx)(t.Button, {
                        onClick: o ? U : y,
                        size: t.Button.Sizes.SMALL,
                        autoFocus: !o,
                        children: e,
                      });
                    })(),
                    (0, a.jsx)(t.Checkbox, {
                      size: 18,
                      type: t.Checkbox.Types.INVERTED,
                      value: R,
                      onChange: () => {
                        p.qF.updateSetting(!R),
                          f.default.track(I.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !R,
                          });
                      },
                      children: (0, a.jsx)(t.Text, {
                        variant: "text-sm/normal",
                        children: x.intl.string(x.t["3Ppr1t"]),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(t.ModalCloseButton, {
                  onClick: E,
                  className: B.modalClose,
                }),
              ],
            }),
          }),
        });
      }
    },
    858495: function (e, n, o) {
      e.exports = {
        spacingTop24: "spacingTop24_a0bf6d",
        videoBackgroundError: "videoBackgroundError_a0bf6d",
      };
    },
    821492: function (e, n, o) {
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
    845569: function (e, n, o) {
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
    695140: function (e, n, o) {
      e.exports = {
        spacingTop24: "spacingTop24_c6d1f7",
        permissionWarning: "permissionWarning_c6d1f7",
        selector: "selector_c6d1f7",
        selectorNoHeader: "selectorNoHeader_c6d1f7",
        previewToggle: "previewToggle_c6d1f7",
        filterLoadingIndicator: "filterLoadingIndicator_c6d1f7",
        cameraPreviewTitle: "cameraPreviewTitle_c6d1f7",
        cameraDeeplink: "cameraDeeplink_c6d1f7",
      };
    },
  },
]);
//# sourceMappingURL=d9690a2604d8d4a1657b.js.map
