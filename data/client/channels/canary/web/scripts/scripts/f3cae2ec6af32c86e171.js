"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99073"],
  {
    601572: function (e, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return w;
          },
        }),
        n(47120);
      var a = n(200651),
        d = n(192379),
        t = n(481060),
        r = n(846027),
        i = n(410575),
        c = n(2052),
        l = n(100527),
        s = n(906732),
        u = n(600164),
        g = n(313201),
        p = n(695346),
        k = n(932724),
        b = n(716161),
        _ = n(672339),
        m = n(898531),
        O = n(131951),
        h = n(594174),
        I = n(626135),
        f = n(747545),
        C = n(981631),
        x = n(388032),
        B = n(655576);
      let T = 368,
        v = 207;
      function w(e) {
        let {
            transitionState: o,
            videoEnabled: n,
            onEnable: w,
            onClose: E,
          } = e,
          S = O.Z.getCameraComponent(),
          M = (0, g.Dt)(),
          j = (0, m.Z)(),
          R = p.qF.useSetting(),
          [P, A] = d.useState((0, k.P)(h.default.getCurrentUser())),
          N = (0, c.O)(),
          { analyticsLocations: D } = (0, s.ZP)(l.Z.CAMERA_PREVIEW),
          L = d.useRef(null);
        d.useEffect(() => {
          I.default.track(C.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
        }, []),
          d.useEffect(() => {
            var e;
            null === (e = L.current) || void 0 === e || e.scrollToTop();
          }, []);
        let y = async () => {
            await U(), r.Z.setVideoEnabled(!0), null == w || w();
          },
          U = async () => {
            try {
              await (0, _.wG)(P, {
                location: { page: C.ZY5.PREVIEW_CAMERA_MODAL, ...N.location },
              });
            } catch (e) {}
            await E(), (0, b.Up)(P);
          };
        return (0, a.jsx)(s.Gt, {
          value: D,
          children: (0, a.jsx)(i.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(t.ModalRoot, {
              className: B.modalRoot,
              size: t.ModalSize.DYNAMIC,
              "aria-labelledby": M,
              transitionState: o,
              children: [
                (0, a.jsxs)(t.ModalContent, {
                  className: j ? B.contentWithVideoBackgrounds : B.content,
                  scrollerRef: L,
                  children: [
                    (0, a.jsx)(t.Heading, {
                      id: M,
                      className: B.header,
                      variant: "heading-xl/semibold",
                      children: n
                        ? x.intl.string(x.t.LAwwbW)
                        : x.intl.string(x.t["/HITVF"]),
                    }),
                    (0, a.jsx)(f.Z, {
                      hidePreviewToggle: !0,
                      showSmallBackgroundOptions: !0,
                      hideDeviceHeader: !0,
                      selectedBackgroundOption: P,
                      onSelectBackgroundOption: A,
                      hideDeviceSelector: n,
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
                            (0, a.jsx)(f.S, {}),
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
                      let e = n
                        ? x.intl.string(x.t.KQENho)
                        : x.intl.string(x.t.kgIe9f);
                      return (0, a.jsx)(t.Button, {
                        onClick: n ? U : y,
                        size: t.Button.Sizes.SMALL,
                        autoFocus: !n,
                        children: e,
                      });
                    })(),
                    (0, a.jsx)(t.Checkbox, {
                      size: 18,
                      type: t.Checkbox.Types.INVERTED,
                      value: R,
                      onChange: () => {
                        p.qF.updateSetting(!R),
                          I.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
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
    507588: function (e, o, n) {
      e.exports = {
        spacingTop24: "spacingTop24_a0bf6d",
        videoBackgroundError: "videoBackgroundError_a0bf6d",
      };
    },
    343896: function (e, o, n) {
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
    655576: function (e, o, n) {
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
    222172: function (e, o, n) {
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
//# sourceMappingURL=f3cae2ec6af32c86e171.js.map
