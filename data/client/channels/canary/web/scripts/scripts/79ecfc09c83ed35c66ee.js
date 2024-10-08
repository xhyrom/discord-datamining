"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39366"],
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
    842786: function (e) {
      e.exports = "/assets/e2b82d24832fec3fb1c6.gif";
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
    621961: function (e, n, o) {
      o.d(n, {
        C: function () {
          return a;
        },
        K: function () {
          return l;
        },
      });
      var i = o(981631),
        t = o(486324);
      function a(e, n) {
        let { isGIF: o } = n;
        if (e === t.pC.GUILD_BANNER)
          return o ? i.oNc.ANIMATED_BANNER : i.oNc.BANNER;
      }
      function l(e) {
        return e === t.pC.AVATAR || e === t.pC.BANNER;
      }
    },
    28130: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return F;
          },
        }),
        o(47120);
      var i = o(735250),
        t = o(470079),
        a = o(442837),
        l = o(481060),
        s = o(100527),
        r = o(906732),
        c = o(807582),
        d = o(813197),
        f = o(81245),
        u = o(530329),
        p = o(430824),
        x = o(914010),
        m = o(594174),
        _ = o(451478),
        g = o(626135),
        C = o(74538),
        h = o(621961),
        N = o(884858),
        I = o(981631),
        b = o(486324),
        j = o(869783),
        T = o(689938),
        A = o(802542);
      let M = [
        { gif: o(495682), png: o(458060) },
        { gif: o(842786), png: o(460790) },
        { gif: o(578831), png: o(642193) },
        { gif: o(145908), png: o(690695) },
      ];
      function v(e) {
        let { shouldAnimate: n = !0 } = e,
          [o, a] = t.useState(!1);
        return (0, i.jsx)("div", {
          className: A.gifGrid,
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          children: M.map((e) =>
            (0, i.jsx)(
              "div",
              {
                className: A.gif,
                style: {
                  backgroundImage: "url(".concat(n || o ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function E(e) {
        let { guildFeature: n, guild: o } = e;
        return null == n || null == o
          ? null
          : (0, i.jsx)("div", {
              className: A.pillWrapper,
              children: (0, i.jsx)(c.Z, {
                guildFeature: n,
                guild: o,
                hideTooltip: !0,
              }),
            });
      }
      function O(e) {
        let { uploadType: n, guild: o } = e;
        return (0, i.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, i.jsx)(E, {
              guild: o,
              guildFeature: (0, h.C)(n, { isGIF: !0 }),
            }),
            (0, i.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                (0, h.K)(n) &&
                  (0, i.jsx)(l.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: T.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, i.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: A.nitroWheelFlair,
                    }),
                  }),
                T.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { title: n, uploadType: o, guild: t } = e;
        return (0, i.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, i.jsx)(E, {
              guildFeature: (0, h.C)(o, { isGIF: !1 }),
              guild: t,
            }),
            (0, i.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                o === b.pC.BANNER &&
                  (0, i.jsx)(l.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: T.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, i.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: A.nitroWheelFlair,
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
            uploadType: M,
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
          U = (0, a.e7)([_.Z], () => _.Z.isFocused()),
          D = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          G = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, a.e7)([p.Z], () => p.Z.getGuild(G)),
          { reducedMotion: W } = t.useContext(
            l.AccessibilityPreferencesContext,
          ),
          z = (0, l.useModalContext)(),
          H = !C.ZP.canUseAnimatedAvatar(D) && M === b.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(y, s.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), h(e, n, o);
        }
        t.useEffect(() => {
          H &&
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            g.default.track(I.rMx.OPEN_MODAL, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: B,
            });
        }, [H, B, V]);
        let X = M === b.pC.AVATAR || M === b.pC.BANNER,
          q = (0, f.Mu)("SelectImageModal", !X);
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, i.jsxs)(l.ModalHeader, {
              className: A.modalHeader,
              separator: !1,
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: A.modalTitle,
                      children: Z,
                    }),
                    null != S
                      ? (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: S,
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(l.ModalCloseButton, {
                  onClick: c,
                  className: A.modalCloseButton,
                }),
              ],
            }),
            (0, i.jsxs)(l.ModalContent, {
              className: A.modalContent,
              children: [
                (0, i.jsxs)("div", {
                  className: A.imagePickerContainer,
                  children: [
                    (0, i.jsxs)(l.Clickable, {
                      className: A.optionBox,
                      children: [
                        (0, i.jsx)("div", {
                          className: A.contentCircle,
                          children: (0, i.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: A.uploadIcon,
                          }),
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, i.jsx)(L, {
                            title: R,
                            uploadType: M,
                            guild: w,
                          }),
                        }),
                        (0, i.jsx)(d.ZP, {
                          onChange: function (e, n) {
                            if (n.type === j.m.MP4) return K(e, n);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: t } = await Promise.all([
                                  o.e("48017"),
                                  o.e("61694"),
                                ]).then(o.bind(o, 850085));
                                return (o) =>
                                  (0, i.jsx)(t, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: K,
                                    uploadType: M,
                                    showUpsellHeader: F,
                                    allowSkip: !0,
                                    analyticsPage: null == B ? void 0 : B.page,
                                    ...o,
                                  });
                              },
                              { contextKey: z },
                            );
                          },
                          maxFileSizeBytes: E,
                          onFileSizeError: function () {
                            c(), (0, N.Z)(E);
                          },
                          filters: P,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(l.Clickable, {
                      className: A.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await o
                              .e("72891")
                              .then(o.bind(o, 195297));
                            return (n) =>
                              (0, i.jsx)(e, {
                                uploadType: M,
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
                        (0, i.jsxs)("div", {
                          className: A.contentCircle,
                          children: [
                            (0, i.jsx)(v, { shouldAnimate: U && !W.enabled }),
                            (0, i.jsx)("div", {
                              className: A.gifIconContainer,
                              children: (0, i.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: A.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, i.jsx)(O, { uploadType: M, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != k
                  ? (0, i.jsx)(l.Text, {
                      className: A.imageSpecifications,
                      variant: "text-sm/normal",
                      children: k,
                    })
                  : null,
                F &&
                  q &&
                  (0, i.jsx)(u.Z, {
                    uploadType: M,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: A.nitroUpsell,
                  }),
              ],
            }),
          ],
        });
      }
    },
    802542: function (e, n, o) {
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
    734471: function (e, n, o) {
      e.exports = { container: "container_e62679" };
    },
    821774: function (e, n, o) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    706995: function (e, n, o) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, n, o) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, n, o) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=79ecfc09c83ed35c66ee.js.map
