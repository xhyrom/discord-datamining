"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32880"],
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
    807582: function (e, n, i) {
      var a = i(735250);
      i(470079);
      var o = i(120356),
        t = i.n(o),
        l = i(481060),
        s = i(709586),
        c = i(267642),
        r = i(689938),
        d = i(844396);
      n.Z = (e) => {
        let n,
          i,
          o,
          {
            guildFeature: f,
            guild: u,
            className: p,
            hideTooltip: x = !1,
            tooltipPosition: _ = "left",
            onClick: m,
          } = e,
          g = u.hasFeature(f),
          C = (0, c._p)(f);
        return (g
          ? (null != C && (o = r.Z.Messages.PREMIUM_GUILD_INCLUDED),
            (n = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.Z, { className: d.unlockedIcon }),
                (0, a.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED,
                }),
              ],
            })))
          : (null != C && (o = r.Z.Messages.CLICK_TO_LEARN_MORE),
            (n = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.Z, { className: d.icon }),
                (0, a.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != C && (0, c.e9)(C),
                }),
              ],
            }))),
        (i =
          x || null == o
            ? (0, a.jsx)("div", {
                className: t()(d.availabilityIndicator, p),
                children: n,
              })
            : (0, a.jsx)(l.Tooltip, {
                position: _,
                text: o,
                children: (e) =>
                  (0, a.jsx)("div", {
                    ...e,
                    className: t()(d.availabilityIndicator, p),
                    children: n,
                  }),
              })),
        null == m || g)
          ? i
          : (0, a.jsx)(l.Clickable, {
              onClick: m,
              className: d.clickable,
              children: i,
            });
      };
    },
    621961: function (e, n, i) {
      i.d(n, {
        C: function () {
          return t;
        },
        K: function () {
          return l;
        },
      });
      var a = i(981631),
        o = i(486324);
      function t(e, n) {
        let { isGIF: i } = n;
        if (e === o.pC.GUILD_BANNER)
          return i ? a.oNc.ANIMATED_BANNER : a.oNc.BANNER;
      }
      function l(e) {
        return e === o.pC.AVATAR || e === o.pC.BANNER;
      }
    },
    28130: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return k;
          },
        }),
        i(47120);
      var a = i(735250),
        o = i(470079),
        t = i(442837),
        l = i(481060),
        s = i(100527),
        c = i(906732),
        r = i(807582),
        d = i(813197),
        f = i(81245),
        u = i(530329),
        p = i(430824),
        x = i(914010),
        _ = i(594174),
        m = i(451478),
        g = i(626135),
        C = i(74538),
        b = i(621961),
        h = i(884858),
        I = i(981631),
        N = i(486324),
        j = i(869783),
        v = i(689938),
        E = i(802542);
      let M = [
        { gif: i(495682), png: i(458060) },
        { gif: i(842786), png: i(460790) },
        { gif: i(578831), png: i(642193) },
        { gif: i(145908), png: i(690695) },
      ];
      function A(e) {
        let { shouldAnimate: n = !0 } = e,
          [i, t] = o.useState(!1);
        return (0, a.jsx)("div", {
          className: E.gifGrid,
          onMouseMove: () => t(!0),
          onMouseLeave: () => t(!1),
          children: M.map((e) =>
            (0, a.jsx)(
              "div",
              {
                className: E.gif,
                style: {
                  backgroundImage: "url(".concat(n || i ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function T(e) {
        let { guildFeature: n, guild: i } = e;
        return null == n || null == i
          ? null
          : (0, a.jsx)("div", {
              className: E.pillWrapper,
              children: (0, a.jsx)(r.Z, {
                guildFeature: n,
                guild: i,
                hideTooltip: !0,
              }),
            });
      }
      function L(e) {
        let { uploadType: n, guild: i } = e;
        return (0, a.jsxs)("div", {
          className: E.optionBoxText,
          children: [
            (0, a.jsx)(T, {
              guild: i,
              guildFeature: (0, b.C)(n, { isGIF: !0 }),
            }),
            (0, a.jsxs)("div", {
              className: E.optionBoxDescription,
              children: [
                (0, b.K)(n) &&
                  (0, a.jsx)(l.TooltipContainer, {
                    className: E.nitroWheelFlairContainer,
                    text: v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, a.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: E.nitroWheelFlair,
                    }),
                  }),
                v.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function O(e) {
        let { title: n, uploadType: i, guild: o } = e;
        return (0, a.jsxs)("div", {
          className: E.optionBoxText,
          children: [
            (0, a.jsx)(T, {
              guildFeature: (0, b.C)(i, { isGIF: !1 }),
              guild: o,
            }),
            (0, a.jsx)("div", {
              className: E.optionBoxDescription,
              children: n,
            }),
          ],
        });
      }
      function k(e) {
        let {
            transitionState: n,
            onClose: r,
            onComplete: b,
            uploadType: M,
            maxFileSizeBytes: T,
            showUpsellHeader: k,
            filters: y,
            analyticsLocation: P,
            analyticsLocations: Z = [],
            modalSubTitle: F,
            imageSpecifications: U,
            modalTitle: R = v.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: D = v.Z.Messages.UPLOAD_IMAGE,
          } = e,
          B = (0, t.e7)([m.Z], () => m.Z.isFocused()),
          S = (0, t.e7)([_.default], () => _.default.getCurrentUser()),
          G = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, t.e7)([p.Z], () => p.Z.getGuild(G)),
          { reducedMotion: H } = o.useContext(
            l.AccessibilityPreferencesContext,
          ),
          W = (0, l.useModalContext)(),
          z = !C.ZP.canUseAnimatedAvatar(S) && M === N.pC.AVATAR,
          { analyticsLocations: K } = (0, c.ZP)(Z, s.Z.SELECT_IMAGE_MODAL);
        function V(e, n) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r(), b(e, n, i);
        }
        o.useEffect(() => {
          z &&
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: K,
            }),
            g.default.track(I.rMx.OPEN_MODAL, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: P,
            });
        }, [z, P, K]);
        let X = M === N.pC.AVATAR || M === N.pC.BANNER,
          q = (0, f.Mu)("SelectImageModal", !X);
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              className: E.modalHeader,
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: E.modalTitle,
                      children: R,
                    }),
                    null != F
                      ? (0, a.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: F,
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(l.ModalCloseButton, {
                  onClick: r,
                  className: E.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: E.modalContent,
              children: [
                (0, a.jsxs)("div", {
                  className: E.imagePickerContainer,
                  children: [
                    (0, a.jsxs)(l.Clickable, {
                      className: E.optionBox,
                      children: [
                        (0, a.jsx)("div", {
                          className: E.contentCircle,
                          children: (0, a.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: E.uploadIcon,
                          }),
                        }),
                        (0, a.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, a.jsx)(O, {
                            title: D,
                            uploadType: M,
                            guild: w,
                          }),
                        }),
                        (0, a.jsx)(d.ZP, {
                          onChange: function (e, n) {
                            if (n.type === j.m.MP4) return V(e, n);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: o } = await Promise.all([
                                  i.e("48017"),
                                  i.e("61694"),
                                ]).then(i.bind(i, 850085));
                                return (i) =>
                                  (0, a.jsx)(o, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: V,
                                    uploadType: M,
                                    showUpsellHeader: k,
                                    allowSkip: !0,
                                    analyticsPage: null == P ? void 0 : P.page,
                                    ...i,
                                  });
                              },
                              { contextKey: W },
                            );
                          },
                          maxFileSizeBytes: T,
                          onFileSizeError: function () {
                            r(), (0, h.Z)(T);
                          },
                          filters: y,
                        }),
                      ],
                    }),
                    (0, a.jsxs)(l.Clickable, {
                      className: E.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await i
                              .e("72891")
                              .then(i.bind(i, 195297));
                            return (n) =>
                              (0, a.jsx)(e, {
                                uploadType: M,
                                onComplete: (e, n) => V(e, n, !0),
                                showUpsellHeader: k,
                                analyticsPage: null == P ? void 0 : P.page,
                                ...n,
                              });
                          },
                          { contextKey: W },
                        );
                      },
                      children: [
                        (0, a.jsxs)("div", {
                          className: E.contentCircle,
                          children: [
                            (0, a.jsx)(A, { shouldAnimate: B && !H.enabled }),
                            (0, a.jsx)("div", {
                              className: E.gifIconContainer,
                              children: (0, a.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: E.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, a.jsx)(L, { uploadType: M, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != U
                  ? (0, a.jsx)(l.Text, {
                      className: E.imageSpecifications,
                      variant: "text-sm/normal",
                      children: U,
                    })
                  : null,
                k &&
                  q &&
                  (0, a.jsx)(u.Z, {
                    uploadType: M,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: E.nitroUpsell,
                    onSecondaryClick: r,
                  }),
              ],
            }),
          ],
        });
      }
    },
    884858: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = i(531643),
        o = i(403182),
        t = i(689938);
      function l(e) {
        (0, a.openUploadError)({
          title: t.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: t.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
            maxSize: (0, o.Ng)(e),
          }),
        });
      }
    },
    844396: function (e, n, i) {
      e.exports = {
        availabilityIndicator: "availabilityIndicator_b29edb",
        icon: "icon_b29edb",
        unlockedIcon: "unlockedIcon_b29edb icon_b29edb",
        description: "description_b29edb",
        clickable: "clickable_b29edb",
      };
    },
    802542: function (e, n, i) {
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
    821774: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    706995: function (e, n, i) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, n, i) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, n, i) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=b95e50fd5491b6eca857.js.map
