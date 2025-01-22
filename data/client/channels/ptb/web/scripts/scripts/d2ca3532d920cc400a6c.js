"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66719"],
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
    621961: function (e, n, i) {
      i.d(n, {
        C: function () {
          return a;
        },
        K: function () {
          return l;
        },
      });
      var t = i(981631),
        o = i(486324);
      function a(e, n) {
        let { isGIF: i } = n;
        if (e === o.pC.GUILD_BANNER)
          return i ? t.oNc.ANIMATED_BANNER : t.oNc.BANNER;
      }
      function l(e) {
        return e === o.pC.AVATAR || e === o.pC.BANNER;
      }
    },
    28130: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return L;
          },
        }),
        i(47120);
      var t = i(200651),
        o = i(192379),
        a = i(442837),
        l = i(481060),
        s = i(100527),
        r = i(906732),
        c = i(807582),
        d = i(813197),
        f = i(222062),
        u = i(530329),
        p = i(430824),
        x = i(914010),
        m = i(594174),
        g = i(451478),
        C = i(626135),
        h = i(74538),
        _ = i(621961),
        N = i(884858),
        j = i(981631),
        b = i(486324),
        A = i(869783),
        v = i(388032),
        I = i(398497);
      let T = [
        { gif: i(495682), png: i(458060) },
        { gif: i(842786), png: i(460790) },
        { gif: i(578831), png: i(642193) },
        { gif: i(145908), png: i(690695) },
      ];
      function M(e) {
        let { shouldAnimate: n = !0 } = e,
          [i, a] = o.useState(!1);
        return (0, t.jsx)("div", {
          className: I.gifGrid,
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          children: T.map((e) =>
            (0, t.jsx)(
              "div",
              {
                className: I.gif,
                style: {
                  backgroundImage: "url(".concat(n || i ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function F(e) {
        let { guildFeature: n, guild: i } = e;
        return null == n || null == i
          ? null
          : (0, t.jsx)("div", {
              className: I.pillWrapper,
              children: (0, t.jsx)(c.Z, {
                guildFeature: n,
                guild: i,
                hideTooltip: !0,
              }),
            });
      }
      function B(e) {
        let { uploadType: n, guild: i } = e;
        return (0, t.jsxs)("div", {
          className: I.optionBoxText,
          children: [
            (0, t.jsx)(F, {
              guild: i,
              guildFeature: (0, _.C)(n, { isGIF: !0 }),
            }),
            (0, t.jsxs)("div", {
              className: I.optionBoxDescription,
              children: [
                (0, _.K)(n) &&
                  (0, t.jsx)(l.TooltipContainer, {
                    className: I.nitroWheelFlairContainer,
                    text: v.intl.string(v.t["5AFxuL"]),
                    children: (0, t.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.nitroWheelFlair,
                    }),
                  }),
                v.intl.string(v.t["xsC+//"]),
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { title: n, uploadType: i, guild: o } = e;
        return (0, t.jsxs)("div", {
          className: I.optionBoxText,
          children: [
            (0, t.jsx)(F, {
              guildFeature: (0, _.C)(i, { isGIF: !1 }),
              guild: o,
            }),
            (0, t.jsxs)("div", {
              className: I.optionBoxDescription,
              children: [
                i === b.pC.BANNER &&
                  (0, t.jsx)(l.TooltipContainer, {
                    className: I.nitroWheelFlairContainer,
                    text: v.intl.string(v.t["5AFxuL"]),
                    children: (0, t.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.nitroWheelFlair,
                    }),
                  }),
                n,
              ],
            }),
          ],
        });
      }
      function L(e) {
        let {
            transitionState: n,
            onClose: c,
            onComplete: _,
            uploadType: T,
            maxFileSizeBytes: F,
            showUpsellHeader: L,
            filters: P,
            analyticsLocation: y,
            analyticsLocations: k = [],
            modalSubTitle: w,
            imageSpecifications: S,
            modalTitle: U = v.intl.string(v.t.DToW4e),
            uploadOptionTitle: W = v.intl.string(v.t["MsUY/f"]),
          } = e,
          D = (0, a.e7)([g.Z], () => g.Z.isFocused()),
          R = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          O = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
          Z = (0, a.e7)([p.Z], () => p.Z.getGuild(O)),
          { reducedMotion: G } = o.useContext(
            l.AccessibilityPreferencesContext,
          ),
          z = (0, l.useModalContext)(),
          H = !h.ZP.canUseAnimatedAvatar(R) && T === b.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(k, s.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), _(e, n, i);
        }
        o.useEffect(() => {
          H &&
            C.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
              type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            C.default.track(j.rMx.OPEN_MODAL, {
              type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: y,
            });
        }, [H, y, V]);
        let X = T === b.pC.AVATAR || T === b.pC.BANNER,
          Y = (0, f.M)(!X);
        return (0, t.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              className: I.modalHeader,
              separator: !1,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: I.modalTitle,
                      children: U,
                    }),
                    null != w
                      ? (0, t.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: w,
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)(l.ModalCloseButton, {
                  onClick: c,
                  className: I.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(l.ModalContent, {
              className: I.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: I.imagePickerContainer,
                  children: [
                    (0, t.jsxs)(l.Clickable, {
                      className: I.optionBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: I.contentCircle,
                          children: (0, t.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: I.uploadIcon,
                          }),
                        }),
                        (0, t.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(E, {
                            title: W,
                            uploadType: T,
                            guild: Z,
                          }),
                        }),
                        (0, t.jsx)(d.ZP, {
                          onChange: function (e, n) {
                            if (n.type === A.m.MP4) return K(e, n);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: o } = await Promise.all([
                                  i.e("48017"),
                                  i.e("62224"),
                                ]).then(i.bind(i, 850085));
                                return (i) =>
                                  (0, t.jsx)(o, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: K,
                                    uploadType: T,
                                    showUpsellHeader: L,
                                    allowSkip: !0,
                                    analyticsPage: null == y ? void 0 : y.page,
                                    ...i,
                                  });
                              },
                              { contextKey: z },
                            );
                          },
                          maxFileSizeBytes: F,
                          onFileSizeError: function () {
                            c(), (0, N.Z)(F);
                          },
                          filters: P,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(l.Clickable, {
                      className: I.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await i
                              .e("72891")
                              .then(i.bind(i, 195297));
                            return (n) =>
                              (0, t.jsx)(e, {
                                uploadType: T,
                                onComplete: (e, n) => K(e, n, !0),
                                showUpsellHeader: L,
                                analyticsPage: null == y ? void 0 : y.page,
                                ...n,
                              });
                          },
                          { contextKey: z },
                        );
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          className: I.contentCircle,
                          children: [
                            (0, t.jsx)(M, { shouldAnimate: D && !G.enabled }),
                            (0, t.jsx)("div", {
                              className: I.gifIconContainer,
                              children: (0, t.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: I.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(B, { uploadType: T, guild: Z }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != S
                  ? (0, t.jsx)(l.Text, {
                      className: I.imageSpecifications,
                      variant: "text-sm/normal",
                      children: S,
                    })
                  : null,
                L &&
                  Y &&
                  (0, t.jsx)(u.Z, {
                    uploadType: T,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: I.nitroUpsell,
                  }),
              ],
            }),
          ],
        });
      }
    },
    398497: function (e, n, i) {
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
    173318: function (e, n, i) {
      e.exports = { container: "container_e62679" };
    },
    761346: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
  },
]);
//# sourceMappingURL=d2ca3532d920cc400a6c.js.map
