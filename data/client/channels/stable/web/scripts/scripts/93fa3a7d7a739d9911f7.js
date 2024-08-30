"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82634"],
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
    807582: function (e, i, n) {
      var t = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        s = n(481060),
        l = n(709586),
        c = n(267642),
        r = n(689938),
        d = n(547780);
      i.Z = (e) => {
        let i,
          n,
          a,
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
          ? (null != C && (a = r.Z.Messages.PREMIUM_GUILD_INCLUDED),
            (i = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(l.Z, { className: d.unlockedIcon }),
                (0, t.jsx)(s.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED,
                }),
              ],
            })))
          : (null != C && (a = r.Z.Messages.CLICK_TO_LEARN_MORE),
            (i = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(l.Z, { className: d.icon }),
                (0, t.jsx)(s.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != C && (0, c.e9)(C),
                }),
              ],
            }))),
        (n =
          x || null == a
            ? (0, t.jsx)("div", {
                className: o()(d.availabilityIndicator, p),
                children: i,
              })
            : (0, t.jsx)(s.Tooltip, {
                position: _,
                text: a,
                children: (e) =>
                  (0, t.jsx)("div", {
                    ...e,
                    className: o()(d.availabilityIndicator, p),
                    children: i,
                  }),
              })),
        null == m || g)
          ? n
          : (0, t.jsx)(s.Clickable, {
              onClick: m,
              className: d.clickable,
              children: n,
            });
      };
    },
    621961: function (e, i, n) {
      n.d(i, {
        C: function () {
          return o;
        },
        K: function () {
          return s;
        },
      });
      var t = n(981631),
        a = n(486324);
      function o(e, i) {
        let { isGIF: n } = i;
        if (e === a.pC.GUILD_BANNER)
          return n ? t.oNc.ANIMATED_BANNER : t.oNc.BANNER;
      }
      function s(e) {
        return e === a.pC.AVATAR || e === a.pC.BANNER;
      }
    },
    28130: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return P;
          },
        }),
        n(47120);
      var t = n(735250),
        a = n(470079),
        o = n(442837),
        s = n(481060),
        l = n(100527),
        c = n(906732),
        r = n(807582),
        d = n(813197),
        f = n(81245),
        u = n(53691),
        p = n(430824),
        x = n(914010),
        _ = n(594174),
        m = n(451478),
        g = n(626135),
        C = n(74538),
        I = n(621961),
        h = n(884858),
        b = n(981631),
        E = n(486324),
        N = n(869783),
        j = n(689938),
        M = n(403661);
      let T = [
        { gif: n(495682), png: n(458060) },
        { gif: n(842786), png: n(460790) },
        { gif: n(578831), png: n(642193) },
        { gif: n(145908), png: n(690695) },
      ];
      function A(e) {
        let { shouldAnimate: i = !0 } = e,
          [n, o] = a.useState(!1);
        return (0, t.jsx)("div", {
          className: M.gifGrid,
          onMouseMove: () => o(!0),
          onMouseLeave: () => o(!1),
          children: T.map((e) =>
            (0, t.jsx)(
              "div",
              {
                className: M.gif,
                style: {
                  backgroundImage: "url(".concat(i || n ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function L(e) {
        let { guildFeature: i, guild: n } = e;
        return null == i || null == n
          ? null
          : (0, t.jsx)("div", {
              className: M.pillWrapper,
              children: (0, t.jsx)(r.Z, {
                guildFeature: i,
                guild: n,
                hideTooltip: !0,
              }),
            });
      }
      function O(e) {
        let { uploadType: i, guild: n } = e;
        return (0, t.jsxs)("div", {
          className: M.optionBoxText,
          children: [
            (0, t.jsx)(L, {
              guild: n,
              guildFeature: (0, I.C)(i, { isGIF: !0 }),
            }),
            (0, t.jsxs)("div", {
              className: M.optionBoxDescription,
              children: [
                (0, I.K)(i) &&
                  (0, t.jsx)(s.TooltipContainer, {
                    className: M.nitroWheelFlairContainer,
                    text: j.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, t.jsx)(s.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: M.nitroWheelFlair,
                    }),
                  }),
                j.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { title: i, uploadType: n, guild: a } = e;
        return (0, t.jsxs)("div", {
          className: M.optionBoxText,
          children: [
            (0, t.jsx)(L, {
              guildFeature: (0, I.C)(n, { isGIF: !1 }),
              guild: a,
            }),
            (0, t.jsx)("div", {
              className: M.optionBoxDescription,
              children: i,
            }),
          ],
        });
      }
      function P(e) {
        let {
            transitionState: i,
            onClose: r,
            onComplete: I,
            uploadType: T,
            maxFileSizeBytes: L,
            showUpsellHeader: P,
            filters: U,
            analyticsLocation: F,
            analyticsLocations: Z = [],
            modalSubTitle: R,
            imageSpecifications: k,
            modalTitle: y = j.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: D = j.Z.Messages.UPLOAD_IMAGE,
          } = e,
          S = (0, o.e7)([m.Z], () => m.Z.isFocused()),
          G = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
          B = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, o.e7)([p.Z], () => p.Z.getGuild(B)),
          { reducedMotion: H } = a.useContext(
            s.AccessibilityPreferencesContext,
          ),
          W = (0, s.useModalContext)(),
          z = !C.ZP.canUseAnimatedAvatar(G) && T === E.pC.AVATAR,
          { analyticsLocations: K } = (0, c.ZP)(Z, l.Z.SELECT_IMAGE_MODAL);
        function V(e, i) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r(), I(e, i, n);
        }
        a.useEffect(() => {
          z &&
            g.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
              type: b.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: K,
            }),
            g.default.track(b.rMx.OPEN_MODAL, {
              type: b.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: F,
            });
        }, [z, F, K]);
        let X = (0, f.M)("SelectImageModal");
        return (0, t.jsxs)(s.ModalRoot, {
          transitionState: i,
          size: s.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(s.ModalHeader, {
              className: M.modalHeader,
              separator: !1,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(s.FormTitle, {
                      tag: s.FormTitleTags.H1,
                      className: M.modalTitle,
                      children: y,
                    }),
                    null != R
                      ? (0, t.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: R,
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)(s.ModalCloseButton, {
                  onClick: r,
                  className: M.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(s.ModalContent, {
              className: M.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: M.imagePickerContainer,
                  children: [
                    (0, t.jsxs)(s.Clickable, {
                      className: M.optionBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: M.contentCircle,
                          children: (0, t.jsx)(s.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: M.uploadIcon,
                          }),
                        }),
                        (0, t.jsx)(s.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(v, {
                            title: D,
                            uploadType: T,
                            guild: w,
                          }),
                        }),
                        (0, t.jsx)(d.ZP, {
                          onChange: function (e, i) {
                            if (i.type === N.m.MP4) return V(e, i);
                            (0, s.openModalLazy)(
                              async () => {
                                let { default: a } = await Promise.all([
                                  n.e("48017"),
                                  n.e("29625"),
                                ]).then(n.bind(n, 850085));
                                return (n) =>
                                  (0, t.jsx)(a, {
                                    imgURI: e,
                                    file: i,
                                    onCrop: V,
                                    uploadType: T,
                                    showUpsellHeader: P,
                                    allowSkip: !0,
                                    analyticsPage: null == F ? void 0 : F.page,
                                    ...n,
                                  });
                              },
                              { contextKey: W },
                            );
                          },
                          maxFileSizeBytes: L,
                          onFileSizeError: function () {
                            r(), (0, h.Z)(L);
                          },
                          filters: U,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(s.Clickable, {
                      className: M.optionBox,
                      onClick: function () {
                        (0, s.openModalLazy)(
                          async () => {
                            let { default: e } = await n
                              .e("72891")
                              .then(n.bind(n, 195297));
                            return (i) =>
                              (0, t.jsx)(e, {
                                uploadType: T,
                                onComplete: (e, i) => V(e, i, !0),
                                showUpsellHeader: P,
                                analyticsPage: null == F ? void 0 : F.page,
                                ...i,
                              });
                          },
                          { contextKey: W },
                        );
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          className: M.contentCircle,
                          children: [
                            (0, t.jsx)(A, { shouldAnimate: S && !H.enabled }),
                            (0, t.jsx)("div", {
                              className: M.gifIconContainer,
                              children: (0, t.jsx)(s.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: M.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(s.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(O, { uploadType: T, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != k
                  ? (0, t.jsx)(s.Text, {
                      className: M.imageSpecifications,
                      variant: "text-sm/normal",
                      children: k,
                    })
                  : null,
                P &&
                  X &&
                  (0, t.jsx)(u.p, {
                    showUpsell: !0,
                    upsellText: "Wear GIFs with Nitro",
                    ctaText: j.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                    ctaAnalyticsObject: {
                      section: b.jXE.EMOJI_PICKER_FLOATING_UPSELL,
                    },
                    position: "inline",
                    showShadow: !1,
                    className: M.nitroUpsell,
                  }),
              ],
            }),
          ],
        });
      }
    },
    884858: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return s;
        },
      });
      var t = n(531643),
        a = n(403182),
        o = n(689938);
      function s(e) {
        (0, t.openUploadError)({
          title: o.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
            maxSize: (0, a.Ng)(e),
          }),
        });
      }
    },
    547780: function (e, i, n) {
      e.exports = {
        availabilityIndicator: "availabilityIndicator_b29edb",
        icon: "icon_b29edb",
        unlockedIcon: "unlockedIcon_b29edb icon_b29edb",
        description: "description_b29edb",
        clickable: "clickable_b29edb",
      };
    },
    403661: function (e, i, n) {
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
//# sourceMappingURL=93fa3a7d7a739d9911f7.js.map
