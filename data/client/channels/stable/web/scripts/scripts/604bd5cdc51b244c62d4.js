"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89289"],
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
    621961: function (e, t, i) {
      i.d(t, {
        C: function () {
          return a;
        },
        K: function () {
          return l;
        },
      });
      var n = i(981631),
        o = i(486324);
      function a(e, t) {
        let { isGIF: i } = t;
        if (e === o.pC.GUILD_BANNER)
          return i ? n.oNc.ANIMATED_BANNER : n.oNc.BANNER;
      }
      function l(e) {
        return e === o.pC.AVATAR || e === o.pC.BANNER;
      }
    },
    28130: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return v;
          },
        }),
        i(47120);
      var n = i(735250),
        o = i(470079),
        a = i(442837),
        l = i(481060),
        s = i(100527),
        r = i(906732),
        c = i(807582),
        d = i(813197),
        f = i(81245),
        u = i(53691),
        p = i(430824),
        x = i(914010),
        m = i(594174),
        g = i(451478),
        _ = i(626135),
        C = i(74538),
        h = i(621961),
        I = i(884858),
        E = i(981631),
        j = i(486324),
        M = i(869783),
        N = i(689938),
        b = i(403661);
      let T = [
        { gif: i(495682), png: i(458060) },
        { gif: i(842786), png: i(460790) },
        { gif: i(578831), png: i(642193) },
        { gif: i(145908), png: i(690695) },
      ];
      function A(e) {
        let { shouldAnimate: t = !0 } = e,
          [i, a] = o.useState(!1);
        return (0, n.jsx)("div", {
          className: b.gifGrid,
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          children: T.map((e) =>
            (0, n.jsx)(
              "div",
              {
                className: b.gif,
                style: {
                  backgroundImage: "url(".concat(t || i ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function L(e) {
        let { guildFeature: t, guild: i } = e;
        return null == t || null == i
          ? null
          : (0, n.jsx)("div", {
              className: b.pillWrapper,
              children: (0, n.jsx)(c.Z, {
                guildFeature: t,
                guild: i,
                hideTooltip: !0,
              }),
            });
      }
      function O(e) {
        let { uploadType: t, guild: i } = e;
        return (0, n.jsxs)("div", {
          className: b.optionBoxText,
          children: [
            (0, n.jsx)(L, {
              guild: i,
              guildFeature: (0, h.C)(t, { isGIF: !0 }),
            }),
            (0, n.jsxs)("div", {
              className: b.optionBoxDescription,
              children: [
                (0, h.K)(t) &&
                  (0, n.jsx)(l.TooltipContainer, {
                    className: b.nitroWheelFlairContainer,
                    text: N.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, n.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: b.nitroWheelFlair,
                    }),
                  }),
                N.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function P(e) {
        let { title: t, uploadType: i, guild: o } = e;
        return (0, n.jsxs)("div", {
          className: b.optionBoxText,
          children: [
            (0, n.jsx)(L, {
              guildFeature: (0, h.C)(i, { isGIF: !1 }),
              guild: o,
            }),
            (0, n.jsx)("div", {
              className: b.optionBoxDescription,
              children: t,
            }),
          ],
        });
      }
      function v(e) {
        let {
            transitionState: t,
            onClose: c,
            onComplete: h,
            uploadType: T,
            maxFileSizeBytes: L,
            showUpsellHeader: v,
            filters: F,
            analyticsLocation: S,
            analyticsLocations: U = [],
            modalSubTitle: B,
            imageSpecifications: Z,
            modalTitle: k = N.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: y = N.Z.Messages.UPLOAD_IMAGE,
          } = e,
          G = (0, a.e7)([g.Z], () => g.Z.isFocused()),
          R = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          D = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, a.e7)([p.Z], () => p.Z.getGuild(D)),
          { reducedMotion: W } = o.useContext(
            l.AccessibilityPreferencesContext,
          ),
          H = (0, l.useModalContext)(),
          z = !C.ZP.canUseAnimatedAvatar(R) && T === j.pC.AVATAR,
          { analyticsLocations: K } = (0, r.ZP)(U, s.Z.SELECT_IMAGE_MODAL);
        function V(e, t) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), h(e, t, i);
        }
        o.useEffect(() => {
          z &&
            _.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
              type: E.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: K,
            }),
            _.default.track(E.rMx.OPEN_MODAL, {
              type: E.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: S,
            });
        }, [z, S, K]);
        let X = (0, f.M)("SelectImageModal");
        return (0, n.jsxs)(l.ModalRoot, {
          transitionState: t,
          size: l.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(l.ModalHeader, {
              className: b.modalHeader,
              separator: !1,
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: b.modalTitle,
                      children: k,
                    }),
                    null != B
                      ? (0, n.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: B,
                        })
                      : null,
                  ],
                }),
                (0, n.jsx)(l.ModalCloseButton, {
                  onClick: c,
                  className: b.modalCloseButton,
                }),
              ],
            }),
            (0, n.jsxs)(l.ModalContent, {
              className: b.modalContent,
              children: [
                (0, n.jsxs)("div", {
                  className: b.imagePickerContainer,
                  children: [
                    (0, n.jsxs)(l.Clickable, {
                      className: b.optionBox,
                      children: [
                        (0, n.jsx)("div", {
                          className: b.contentCircle,
                          children: (0, n.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: b.uploadIcon,
                          }),
                        }),
                        (0, n.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, n.jsx)(P, {
                            title: y,
                            uploadType: T,
                            guild: w,
                          }),
                        }),
                        (0, n.jsx)(d.ZP, {
                          onChange: function (e, t) {
                            if (t.type === M.m.MP4) return V(e, t);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: o } = await Promise.all([
                                  i.e("48017"),
                                  i.e("29625"),
                                ]).then(i.bind(i, 850085));
                                return (i) =>
                                  (0, n.jsx)(o, {
                                    imgURI: e,
                                    file: t,
                                    onCrop: V,
                                    uploadType: T,
                                    showUpsellHeader: v,
                                    allowSkip: !0,
                                    analyticsPage: null == S ? void 0 : S.page,
                                    ...i,
                                  });
                              },
                              { contextKey: H },
                            );
                          },
                          maxFileSizeBytes: L,
                          onFileSizeError: function () {
                            c(), (0, I.Z)(L);
                          },
                          filters: F,
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.Clickable, {
                      className: b.optionBox,
                      onClick: function () {
                        (0, l.openModalLazy)(
                          async () => {
                            let { default: e } = await i
                              .e("72891")
                              .then(i.bind(i, 195297));
                            return (t) =>
                              (0, n.jsx)(e, {
                                uploadType: T,
                                onComplete: (e, t) => V(e, t, !0),
                                showUpsellHeader: v,
                                analyticsPage: null == S ? void 0 : S.page,
                                ...t,
                              });
                          },
                          { contextKey: H },
                        );
                      },
                      children: [
                        (0, n.jsxs)("div", {
                          className: b.contentCircle,
                          children: [
                            (0, n.jsx)(A, { shouldAnimate: G && !W.enabled }),
                            (0, n.jsx)("div", {
                              className: b.gifIconContainer,
                              children: (0, n.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: b.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, n.jsx)(O, { uploadType: T, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != Z
                  ? (0, n.jsx)(l.Text, {
                      className: b.imageSpecifications,
                      variant: "text-sm/normal",
                      children: Z,
                    })
                  : null,
                v &&
                  X &&
                  (0, n.jsx)(u.p, {
                    showUpsell: !0,
                    upsellText: "Wear GIFs with Nitro",
                    ctaText: N.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                    ctaAnalyticsObject: {
                      section: E.jXE.EMOJI_PICKER_FLOATING_UPSELL,
                    },
                    position: "inline",
                    showShadow: !1,
                    className: b.nitroUpsell,
                  }),
              ],
            }),
          ],
        });
      }
    },
    81245: function (e, t, i) {
      i.d(t, {
        M: function () {
          return c;
        },
      });
      var n = i(442837),
        o = i(987170),
        a = i(594174),
        l = i(111361),
        s = i(474936);
      let r = (0, o.Z)({
        id: "2024-08_premium_user_profile_upsell_desktop",
        label: "User Profile Upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function c(e) {
        let t = (0, n.e7)([a.default], () =>
          l.ZP.isPremium(a.default.getCurrentUser(), s.p9.TIER_2),
        );
        return r.useExperiment(
          { location: e },
          { autoTrackExposure: !t, disable: t },
        ).enabled;
      }
    },
    403661: function (e, t, i) {
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
  },
]);
//# sourceMappingURL=604bd5cdc51b244c62d4.js.map
