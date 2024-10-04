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
            return F;
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
        I = a(884858),
        N = a(981631),
        b = a(486324),
        j = a(869783),
        T = a(689938),
        v = a(802542);
      let A = [
        { gif: a(495682), png: a(458060) },
        { gif: a(842786), png: a(460790) },
        { gif: a(578831), png: a(642193) },
        { gif: a(145908), png: a(690695) },
      ];
      function M(e) {
        let { shouldAnimate: n = !0 } = e,
          [a, t] = i.useState(!1);
        return (0, o.jsx)("div", {
          className: v.gifGrid,
          onMouseMove: () => t(!0),
          onMouseLeave: () => t(!1),
          children: A.map((e) =>
            (0, o.jsx)(
              "div",
              {
                className: v.gif,
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
              className: v.pillWrapper,
              children: (0, o.jsx)(c.Z, {
                guildFeature: n,
                guild: a,
                hideTooltip: !0,
              }),
            });
      }
      function O(e) {
        let { uploadType: n, guild: a } = e;
        return (0, o.jsxs)("div", {
          className: v.optionBoxText,
          children: [
            (0, o.jsx)(E, {
              guild: a,
              guildFeature: (0, h.C)(n, { isGIF: !0 }),
            }),
            (0, o.jsxs)("div", {
              className: v.optionBoxDescription,
              children: [
                (0, h.K)(n) &&
                  (0, o.jsx)(l.TooltipContainer, {
                    className: v.nitroWheelFlairContainer,
                    text: T.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, o.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: v.nitroWheelFlair,
                    }),
                  }),
                T.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { title: n, uploadType: a, guild: i } = e;
        return (0, o.jsxs)("div", {
          className: v.optionBoxText,
          children: [
            (0, o.jsx)(E, {
              guildFeature: (0, h.C)(a, { isGIF: !1 }),
              guild: i,
            }),
            (0, o.jsxs)("div", {
              className: v.optionBoxDescription,
              children: [
                a === b.pC.BANNER &&
                  (0, o.jsx)(l.TooltipContainer, {
                    className: v.nitroWheelFlairContainer,
                    text: T.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, o.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: v.nitroWheelFlair,
                    }),
                  }),
                n,
              ],
            }),
          ],
        });
      }
      function F(e) {
        let {
            transitionState: n,
            onClose: c,
            onComplete: h,
            uploadType: A,
            maxFileSizeBytes: E,
            showUpsellHeader: F,
            filters: P,
            analyticsLocation: B,
            analyticsLocations: y = [],
            modalSubTitle: S,
            imageSpecifications: k,
            modalTitle: Z = T.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: R = T.Z.Messages.UPLOAD_IMAGE,
          } = e,
          U = (0, t.e7)([g.Z], () => g.Z.isFocused()),
          D = (0, t.e7)([m.default], () => m.default.getCurrentUser()),
          G = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, t.e7)([p.Z], () => p.Z.getGuild(G)),
          { reducedMotion: W } = i.useContext(
            l.AccessibilityPreferencesContext,
          ),
          z = (0, l.useModalContext)(),
          H = !C.ZP.canUseAnimatedAvatar(D) && A === b.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(y, s.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), h(e, n, a);
        }
        i.useEffect(() => {
          H &&
            _.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
              type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            _.default.track(N.rMx.OPEN_MODAL, {
              type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: B,
            });
        }, [H, B, V]);
        let X = A === b.pC.AVATAR || A === b.pC.BANNER,
          q = (0, f.Mu)("SelectImageModal", !X);
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: v.modalHeader,
              separator: !1,
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: v.modalTitle,
                      children: Z,
                    }),
                    null != S
                      ? (0, o.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: S,
                        })
                      : null,
                  ],
                }),
                (0, o.jsx)(l.ModalCloseButton, {
                  onClick: c,
                  className: v.modalCloseButton,
                }),
              ],
            }),
            (0, o.jsxs)(l.ModalContent, {
              className: v.modalContent,
              children: [
                (0, o.jsxs)("div", {
                  className: v.imagePickerContainer,
                  children: [
                    (0, o.jsxs)(l.Clickable, {
                      className: v.optionBox,
                      children: [
                        (0, o.jsx)("div", {
                          className: v.contentCircle,
                          children: (0, o.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: v.uploadIcon,
                          }),
                        }),
                        (0, o.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, o.jsx)(L, {
                            title: R,
                            uploadType: A,
                            guild: w,
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
                                    uploadType: A,
                                    showUpsellHeader: F,
                                    allowSkip: !0,
                                    analyticsPage: null == B ? void 0 : B.page,
                                    ...a,
                                  });
                              },
                              { contextKey: z },
                            );
                          },
                          maxFileSizeBytes: E,
                          onFileSizeError: function () {
                            c(), (0, I.Z)(E);
                          },
                          filters: P,
                        }),
                      ],
                    }),
                    (0, o.jsxs)(l.Clickable, {
                      className: v.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await a
                              .e("72891")
                              .then(a.bind(a, 195297));
                            return (n) =>
                              (0, o.jsx)(e, {
                                uploadType: A,
                                onComplete: (e, n) => K(e, n, !0),
                                showUpsellHeader: F,
                                analyticsPage: null == B ? void 0 : B.page,
                                ...n,
                              });
                          },
                          { contextKey: z },
                        );
                      },
                      children: [
                        (0, o.jsxs)("div", {
                          className: v.contentCircle,
                          children: [
                            (0, o.jsx)(M, { shouldAnimate: U && !W.enabled }),
                            (0, o.jsx)("div", {
                              className: v.gifIconContainer,
                              children: (0, o.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: v.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, o.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, o.jsx)(O, { uploadType: A, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != k
                  ? (0, o.jsx)(l.Text, {
                      className: v.imageSpecifications,
                      variant: "text-sm/normal",
                      children: k,
                    })
                  : null,
                F &&
                  q &&
                  (0, o.jsx)(u.Z, {
                    uploadType: A,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: v.nitroUpsell,
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
//# sourceMappingURL=7a2c9a74f4c9d0e4753d.js.map
