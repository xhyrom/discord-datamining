"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8193"],
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
    621961: function (e, n, t) {
      t.d(n, {
        C: function () {
          return a;
        },
        K: function () {
          return l;
        },
      });
      var i = t(981631),
        o = t(486324);
      function a(e, n) {
        let { isGIF: t } = n;
        if (e === o.pC.GUILD_BANNER)
          return t ? i.oNc.ANIMATED_BANNER : i.oNc.BANNER;
      }
      function l(e) {
        return e === o.pC.AVATAR || e === o.pC.BANNER;
      }
    },
    28130: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return y;
          },
        }),
        t(47120);
      var i = t(200651),
        o = t(192379),
        a = t(442837),
        l = t(481060),
        s = t(100527),
        r = t(906732),
        c = t(807582),
        f = t(813197),
        d = t(222062),
        u = t(530329),
        p = t(430824),
        x = t(914010),
        m = t(594174),
        g = t(451478),
        C = t(626135),
        h = t(74538),
        _ = t(621961),
        b = t(884858),
        N = t(981631),
        j = t(486324),
        v = t(869783),
        A = t(388032),
        I = t(398497);
      let T = [
        { gif: t(495682), png: t(458060) },
        { gif: t(842786), png: t(460790) },
        { gif: t(578831), png: t(642193) },
        { gif: t(145908), png: t(690695) },
      ];
      function M(e) {
        let { shouldAnimate: n = !0 } = e,
          [t, a] = o.useState(!1);
        return (0, i.jsx)("div", {
          className: I.gifGrid,
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          children: T.map((e) =>
            (0, i.jsx)(
              "div",
              {
                className: I.gif,
                style: {
                  backgroundImage: "url(".concat(n || t ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function F(e) {
        let { guildFeature: n, guild: t } = e;
        return null == n || null == t
          ? null
          : (0, i.jsx)("div", {
              className: I.pillWrapper,
              children: (0, i.jsx)(c.Z, {
                guildFeature: n,
                guild: t,
                hideTooltip: !0,
              }),
            });
      }
      function B(e) {
        let { uploadType: n, guild: t } = e;
        return (0, i.jsxs)("div", {
          className: I.optionBoxText,
          children: [
            (0, i.jsx)(F, {
              guild: t,
              guildFeature: (0, _.C)(n, { isGIF: !0 }),
            }),
            (0, i.jsxs)("div", {
              className: I.optionBoxDescription,
              children: [
                (0, _.K)(n) &&
                  (0, i.jsx)(l.TooltipContainer, {
                    className: I.nitroWheelFlairContainer,
                    text: A.intl.string(A.t["5AFxuL"]),
                    children: (0, i.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.nitroWheelFlair,
                    }),
                  }),
                A.intl.string(A.t["xsC+//"]),
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { title: n, uploadType: t, guild: o } = e;
        return (0, i.jsxs)("div", {
          className: I.optionBoxText,
          children: [
            (0, i.jsx)(F, {
              guildFeature: (0, _.C)(t, { isGIF: !1 }),
              guild: o,
            }),
            (0, i.jsxs)("div", {
              className: I.optionBoxDescription,
              children: [
                t === j.pC.BANNER &&
                  (0, i.jsx)(l.TooltipContainer, {
                    className: I.nitroWheelFlairContainer,
                    text: A.intl.string(A.t["5AFxuL"]),
                    children: (0, i.jsx)(l.NitroWheelIcon, {
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
      function y(e) {
        let {
            transitionState: n,
            onClose: c,
            onComplete: _,
            uploadType: T,
            maxFileSizeBytes: F,
            showUpsellHeader: y,
            filters: k,
            analyticsLocation: L,
            analyticsLocations: P = [],
            modalSubTitle: w,
            imageSpecifications: S,
            modalTitle: U = A.intl.string(A.t.DToW4e),
            uploadOptionTitle: W = A.intl.string(A.t["MsUY/f"]),
          } = e,
          D = (0, a.e7)([g.Z], () => g.Z.isFocused()),
          R = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          O = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
          Z = (0, a.e7)([p.Z], () => p.Z.getGuild(O)),
          { reducedMotion: G } = o.useContext(
            l.AccessibilityPreferencesContext,
          ),
          z = (0, l.useModalContext)(),
          H = !h.ZP.canUseAnimatedAvatar(R) && T === j.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(P, s.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let t =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), _(e, n, t);
        }
        o.useEffect(() => {
          H &&
            C.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
              type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            C.default.track(N.rMx.OPEN_MODAL, {
              type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: L,
            });
        }, [H, L, V]);
        let X = T === j.pC.AVATAR || T === j.pC.BANNER,
          Y = (0, d.M)(!X);
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, i.jsxs)(l.ModalHeader, {
              className: I.modalHeader,
              separator: !1,
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: I.modalTitle,
                      children: U,
                    }),
                    null != w
                      ? (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: w,
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(l.ModalCloseButton, {
                  onClick: c,
                  className: I.modalCloseButton,
                }),
              ],
            }),
            (0, i.jsxs)(l.ModalContent, {
              className: I.modalContent,
              children: [
                (0, i.jsxs)("div", {
                  className: I.imagePickerContainer,
                  children: [
                    (0, i.jsxs)(l.Clickable, {
                      className: I.optionBox,
                      children: [
                        (0, i.jsx)("div", {
                          className: I.contentCircle,
                          children: (0, i.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: I.uploadIcon,
                          }),
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, i.jsx)(E, {
                            title: W,
                            uploadType: T,
                            guild: Z,
                          }),
                        }),
                        (0, i.jsx)(f.ZP, {
                          onChange: function (e, n) {
                            if (n.type === v.m.MP4) return K(e, n);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: o } = await Promise.all([
                                  t.e("48017"),
                                  t.e("62224"),
                                ]).then(t.bind(t, 850085));
                                return (t) =>
                                  (0, i.jsx)(o, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: K,
                                    uploadType: T,
                                    showUpsellHeader: y,
                                    allowSkip: !0,
                                    analyticsPage: null == L ? void 0 : L.page,
                                    ...t,
                                  });
                              },
                              { contextKey: z },
                            );
                          },
                          maxFileSizeBytes: F,
                          onFileSizeError: function () {
                            c(), (0, b.Z)(F);
                          },
                          filters: k,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(l.Clickable, {
                      className: I.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await t
                              .e("72891")
                              .then(t.bind(t, 195297));
                            return (n) =>
                              (0, i.jsx)(e, {
                                uploadType: T,
                                onComplete: (e, n) => K(e, n, !0),
                                showUpsellHeader: y,
                                analyticsPage: null == L ? void 0 : L.page,
                                ...n,
                              });
                          },
                          { contextKey: z },
                        );
                      },
                      children: [
                        (0, i.jsxs)("div", {
                          className: I.contentCircle,
                          children: [
                            (0, i.jsx)(M, { shouldAnimate: D && !G.enabled }),
                            (0, i.jsx)("div", {
                              className: I.gifIconContainer,
                              children: (0, i.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: I.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, i.jsx)(B, { uploadType: T, guild: Z }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != S
                  ? (0, i.jsx)(l.Text, {
                      className: I.imageSpecifications,
                      variant: "text-sm/normal",
                      children: S,
                    })
                  : null,
                y &&
                  Y &&
                  (0, i.jsx)(u.Z, {
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
    398497: function (e, n, t) {
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
    173318: function (e, n, t) {
      e.exports = { container: "container_e62679" };
    },
    761346: function (e, n, t) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    154960: function (e, n, t) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    776458: function (e, n, t) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    93428: function (e, n, t) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=0857a53d248fdf7eadcf.js.map
