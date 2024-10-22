"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51425"],
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
      var a = i(200651);
      i(192379);
      var o = i(120356),
        t = i.n(o),
        l = i(481060),
        s = i(709586),
        r = i(267642),
        c = i(689938),
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
          C = (0, r._p)(f);
        return (g
          ? (null != C && (o = c.Z.Messages.PREMIUM_GUILD_INCLUDED),
            (n = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.Z, { className: d.unlockedIcon }),
                (0, a.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED,
                }),
              ],
            })))
          : (null != C && (o = c.Z.Messages.CLICK_TO_LEARN_MORE),
            (n = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.Z, { className: d.icon }),
                (0, a.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != C && (0, r.e9)(C),
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
            return P;
          },
        }),
        i(47120);
      var a = i(200651),
        o = i(192379),
        t = i(442837),
        l = i(481060),
        s = i(100527),
        r = i(906732),
        c = i(807582),
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
        E = i(689938),
        T = i(802542);
      let v = [
        { gif: i(495682), png: i(458060) },
        { gif: i(842786), png: i(460790) },
        { gif: i(578831), png: i(642193) },
        { gif: i(145908), png: i(690695) },
      ];
      function M(e) {
        let { shouldAnimate: n = !0 } = e,
          [i, t] = o.useState(!1);
        return (0, a.jsx)("div", {
          className: T.gifGrid,
          onMouseMove: () => t(!0),
          onMouseLeave: () => t(!1),
          children: v.map((e) =>
            (0, a.jsx)(
              "div",
              {
                className: T.gif,
                style: {
                  backgroundImage: "url(".concat(n || i ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function A(e) {
        let { guildFeature: n, guild: i } = e;
        return null == n || null == i
          ? null
          : (0, a.jsx)("div", {
              className: T.pillWrapper,
              children: (0, a.jsx)(c.Z, {
                guildFeature: n,
                guild: i,
                hideTooltip: !0,
              }),
            });
      }
      function O(e) {
        let { uploadType: n, guild: i } = e;
        return (0, a.jsxs)("div", {
          className: T.optionBoxText,
          children: [
            (0, a.jsx)(A, {
              guild: i,
              guildFeature: (0, b.C)(n, { isGIF: !0 }),
            }),
            (0, a.jsxs)("div", {
              className: T.optionBoxDescription,
              children: [
                (0, b.K)(n) &&
                  (0, a.jsx)(l.TooltipContainer, {
                    className: T.nitroWheelFlairContainer,
                    text: E.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, a.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: T.nitroWheelFlair,
                    }),
                  }),
                E.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { title: n, uploadType: i, guild: o } = e;
        return (0, a.jsxs)("div", {
          className: T.optionBoxText,
          children: [
            (0, a.jsx)(A, {
              guildFeature: (0, b.C)(i, { isGIF: !1 }),
              guild: o,
            }),
            (0, a.jsxs)("div", {
              className: T.optionBoxDescription,
              children: [
                i === N.pC.BANNER &&
                  (0, a.jsx)(l.TooltipContainer, {
                    className: T.nitroWheelFlairContainer,
                    text: E.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, a.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: T.nitroWheelFlair,
                    }),
                  }),
                n,
              ],
            }),
          ],
        });
      }
      function P(e) {
        let {
            transitionState: n,
            onClose: c,
            onComplete: b,
            uploadType: v,
            maxFileSizeBytes: A,
            showUpsellHeader: P,
            filters: Z,
            analyticsLocation: k,
            analyticsLocations: y = [],
            modalSubTitle: F,
            imageSpecifications: R,
            modalTitle: U = E.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: B = E.Z.Messages.UPLOAD_IMAGE,
          } = e,
          D = (0, t.e7)([m.Z], () => m.Z.isFocused()),
          S = (0, t.e7)([_.default], () => _.default.getCurrentUser()),
          G = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, t.e7)([p.Z], () => p.Z.getGuild(G)),
          { reducedMotion: W } = o.useContext(
            l.AccessibilityPreferencesContext,
          ),
          H = (0, l.useModalContext)(),
          z = !C.ZP.canUseAnimatedAvatar(S) && v === N.pC.AVATAR,
          { analyticsLocations: K } = (0, r.ZP)(y, s.Z.SELECT_IMAGE_MODAL);
        function V(e, n) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), b(e, n, i);
        }
        o.useEffect(() => {
          z &&
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: K,
            }),
            g.default.track(I.rMx.OPEN_MODAL, {
              type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: k,
            });
        }, [z, k, K]);
        let X = v === N.pC.AVATAR || v === N.pC.BANNER,
          q = (0, f.Mu)("SelectImageModal", !X);
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              className: T.modalHeader,
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: T.modalTitle,
                      children: U,
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
                  onClick: c,
                  className: T.modalCloseButton,
                }),
              ],
            }),
            (0, a.jsxs)(l.ModalContent, {
              className: T.modalContent,
              children: [
                (0, a.jsxs)("div", {
                  className: T.imagePickerContainer,
                  children: [
                    (0, a.jsxs)(l.Clickable, {
                      className: T.optionBox,
                      children: [
                        (0, a.jsx)("div", {
                          className: T.contentCircle,
                          children: (0, a.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: T.uploadIcon,
                          }),
                        }),
                        (0, a.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, a.jsx)(L, {
                            title: B,
                            uploadType: v,
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
                                    uploadType: v,
                                    showUpsellHeader: P,
                                    allowSkip: !0,
                                    analyticsPage: null == k ? void 0 : k.page,
                                    ...i,
                                  });
                              },
                              { contextKey: H },
                            );
                          },
                          maxFileSizeBytes: A,
                          onFileSizeError: function () {
                            c(), (0, h.Z)(A);
                          },
                          filters: Z,
                        }),
                      ],
                    }),
                    (0, a.jsxs)(l.Clickable, {
                      className: T.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await i
                              .e("72891")
                              .then(i.bind(i, 195297));
                            return (n) =>
                              (0, a.jsx)(e, {
                                uploadType: v,
                                onComplete: (e, n) => V(e, n, !0),
                                showUpsellHeader: P,
                                analyticsPage: null == k ? void 0 : k.page,
                                ...n,
                              });
                          },
                          { contextKey: H },
                        );
                      },
                      children: [
                        (0, a.jsxs)("div", {
                          className: T.contentCircle,
                          children: [
                            (0, a.jsx)(M, { shouldAnimate: D && !W.enabled }),
                            (0, a.jsx)("div", {
                              className: T.gifIconContainer,
                              children: (0, a.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: T.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, a.jsx)(O, { uploadType: v, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != R
                  ? (0, a.jsx)(l.Text, {
                      className: T.imageSpecifications,
                      variant: "text-sm/normal",
                      children: R,
                    })
                  : null,
                P &&
                  q &&
                  (0, a.jsx)(u.Z, {
                    uploadType: v,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: T.nitroUpsell,
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
    734471: function (e, n, i) {
      e.exports = { container: "container_e62679" };
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
//# sourceMappingURL=4c8de8e2e0da13bce56e.js.map
