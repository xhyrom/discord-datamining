"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18763"],
  {
    495682: function (e) {
      e.exports = "/assets/9b5af9a1960a0e6bb5ae.gif";
    },
    458060: function (e) {
      e.exports = "/assets/bcf182b0c9cd0c1f9db9.png";
    },
    145908: function (e) {
      e.exports = "/assets/826c0bddf84bb5102998.gif";
    },
    690695: function (e) {
      e.exports = "/assets/e560bb45b35a34d51666.png";
    },
    460790: function (e) {
      e.exports = "/assets/6f0caa9b6ae0380d1bda.png";
    },
    578831: function (e) {
      e.exports = "/assets/6951acbfc715c90bbc5b.gif";
    },
    642193: function (e) {
      e.exports = "/assets/f28520dd12a260fee84a.png";
    },
    621961: function (e, n, a) {
      a.d(n, {
        C: function () {
          return t;
        },
        K: function () {
          return l;
        },
      });
      var o = a(981631),
        i = a(486324);
      function t(e, n) {
        let { isGIF: a } = n;
        if (e === i.pC.GUILD_BANNER)
          return a ? o.oNc.ANIMATED_BANNER : o.oNc.BANNER;
      }
      function l(e) {
        return e === i.pC.AVATAR || e === i.pC.BANNER;
      }
    },
    28130: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return y;
          },
        }),
        a(47120);
      var o = a(735250),
        i = a(470079),
        t = a(442837),
        l = a(481060),
        s = a(100527),
        r = a(906732),
        c = a(807582),
        d = a(813197),
        f = a(81245),
        u = a(530329),
        p = a(430824),
        x = a(914010),
        m = a(594174),
        g = a(451478),
        _ = a(626135),
        C = a(74538),
        h = a(621961),
        b = a(884858),
        I = a(981631),
        N = a(486324),
        j = a(869783),
        v = a(689938),
        A = a(802542);
      let M = [
        { gif: a(495682), png: a(458060) },
        { gif: a(842786), png: a(460790) },
        { gif: a(578831), png: a(642193) },
        { gif: a(145908), png: a(690695) },
      ];
      function T(e) {
        let { shouldAnimate: n = !0 } = e,
          [a, t] = i.useState(!1);
        return (0, o.jsx)("div", {
          className: A.gifGrid,
          onMouseMove: () => t(!0),
          onMouseLeave: () => t(!1),
          children: M.map((e) =>
            (0, o.jsx)(
              "div",
              {
                className: A.gif,
                style: {
                  backgroundImage: "url(".concat(n || a ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function E(e) {
        let { guildFeature: n, guild: a } = e;
        return null == n || null == a
          ? null
          : (0, o.jsx)("div", {
              className: A.pillWrapper,
              children: (0, o.jsx)(c.Z, {
                guildFeature: n,
                guild: a,
                hideTooltip: !0,
              }),
            });
      }
      function L(e) {
        let { uploadType: n, guild: a } = e;
        return (0, o.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, o.jsx)(E, {
              guild: a,
              guildFeature: (0, h.C)(n, { isGIF: !0 }),
            }),
            (0, o.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                (0, h.K)(n) &&
                  (0, o.jsx)(l.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, o.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: A.nitroWheelFlair,
                    }),
                  }),
                v.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function O(e) {
        let { title: n, uploadType: a, guild: i } = e;
        return (0, o.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, o.jsx)(E, {
              guildFeature: (0, h.C)(a, { isGIF: !1 }),
              guild: i,
            }),
            (0, o.jsx)("div", {
              className: A.optionBoxDescription,
              children: n,
            }),
          ],
        });
      }
      function y(e) {
        let {
            transitionState: n,
            onClose: c,
            onComplete: h,
            uploadType: M,
            maxFileSizeBytes: E,
            showUpsellHeader: y,
            filters: B,
            analyticsLocation: F,
            analyticsLocations: P = [],
            modalSubTitle: k,
            imageSpecifications: S,
            modalTitle: Z = v.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: D = v.Z.Messages.UPLOAD_IMAGE,
          } = e,
          G = (0, t.e7)([g.Z], () => g.Z.isFocused()),
          U = (0, t.e7)([m.default], () => m.default.getCurrentUser()),
          w = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
          R = (0, t.e7)([p.Z], () => p.Z.getGuild(w)),
          { reducedMotion: W } = i.useContext(
            l.AccessibilityPreferencesContext,
          ),
          H = (0, l.useModalContext)(),
          z = !C.ZP.canUseAnimatedAvatar(U) && M === N.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(P, s.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), h(e, n, a);
        }
        i.useEffect(() => {
          z &&
            _.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            _.default.track(I.rMx.OPEN_MODAL, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: F,
            });
        }, [z, F, V]);
        let X = M === N.pC.AVATAR || M === N.pC.BANNER,
          q = (0, f.Mu)("SelectImageModal", !X);
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: A.modalHeader,
              separator: !1,
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: A.modalTitle,
                      children: Z,
                    }),
                    null != k
                      ? (0, o.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: k,
                        })
                      : null,
                  ],
                }),
                (0, o.jsx)(l.ModalCloseButton, {
                  onClick: c,
                  className: A.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsxs)(l.ModalContent, {
              className: A.modalContent,
              children: [
                (0, o.jsxs)("div", {
                  className: A.imagePickerContainer,
                  children: [
                    (0, o.jsxs)(l.Clickable, {
                      className: A.optionBox,
                      children: [
                        (0, o.jsx)("div", {
                          className: A.contentCircle,
                          children: (0, o.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: A.uploadIcon,
                          }),
                        }),
                        (0, o.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, o.jsx)(O, {
                            title: D,
                            uploadType: M,
                            guild: R,
                          }),
                        }),
                        (0, o.jsx)(d.ZP, {
                          onChange: function (e, n) {
                            if (n.type === j.m.MP4) return K(e, n);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: i } = await Promise.all([
                                  a.e("48017"),
                                  a.e("61694"),
                                ]).then(a.bind(a, 850085));
                                return (a) =>
                                  (0, o.jsx)(i, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: K,
                                    uploadType: M,
                                    showUpsellHeader: y,
                                    allowSkip: !0,
                                    analyticsPage: null == F ? void 0 : F.page,
                                    ...a,
                                  });
                              },
                              { contextKey: H },
                            );
                          },
                          maxFileSizeBytes: E,
                          onFileSizeError: function () {
                            c(), (0, b.Z)(E);
                          },
                          filters: B,
                        }),
                      ],
                    }),
                    (0, o.jsxs)(l.Clickable, {
                      className: A.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await a
                              .e("72891")
                              .then(a.bind(a, 195297));
                            return (n) =>
                              (0, o.jsx)(e, {
                                uploadType: M,
                                onComplete: (e, n) => K(e, n, !0),
                                showUpsellHeader: y,
                                analyticsPage: null == F ? void 0 : F.page,
                                ...n,
                              });
                          },
                          { contextKey: H },
                        );
                      },
                      children: [
                        (0, o.jsxs)("div", {
                          className: A.contentCircle,
                          children: [
                            (0, o.jsx)(T, { shouldAnimate: G && !W.enabled }),
                            (0, o.jsx)("div", {
                              className: A.gifIconContainer,
                              children: (0, o.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: A.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, o.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, o.jsx)(L, { uploadType: M, guild: R }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != S
                  ? (0, o.jsx)(l.Text, {
                      className: A.imageSpecifications,
                      variant: "text-sm/normal",
                      children: S,
                    })
                  : null,
                y &&
                  q &&
                  (0, o.jsx)(u.Z, {
                    uploadType: M,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: A.nitroUpsell,
                    onSecondaryClick: c,
                  }),
              ],
            }),
          ],
        });
      }
    },
    802542: function (e, n, a) {
      e.exports = {
        modalHeader: "modalHeader_f2f431",
        modalTitle: "modalTitle_f2f431",
        modalContent: "modalContent_f2f431",
        modalCloseButton: "modalCloseButton_f2f431",
        optionBox: "optionBox_f2f431",
        optionBoxText: "optionBoxText_f2f431",
        contentCircle: "contentCircle_f2f431",
        optionBoxDescription: "optionBoxDescription_f2f431",
        uploadIcon: "uploadIcon_f2f431",
        gifGrid: "gifGrid_f2f431",
        gif: "gif_f2f431",
        gifIconContainer: "gifIconContainer_f2f431",
        gifIcon: "gifIcon_f2f431",
        nitroWheelFlair: "nitroWheelFlair_f2f431",
        nitroWheelFlairContainer: "nitroWheelFlairContainer_f2f431",
        pillWrapper: "pillWrapper_f2f431",
        imagePickerContainer: "imagePickerContainer_f2f431",
        imageSpecifications: "imageSpecifications_f2f431",
        nitroUpsell: "nitroUpsell_f2f431",
      };
    },
    821774: function (e, n, a) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
        avatarImage: "avatarImage_b2a2a3",
      };
    },
    706995: function (e, n, a) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, n, a) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, n, a) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=eb7e1e8e81d993defad0.js.map
