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
        l = n.n(a),
        o = n(481060),
        s = n(709586),
        r = n(267642),
        c = n(689938),
        d = n(547780);
      i.Z = (e) => {
        let i,
          n,
          a,
          {
            guildFeature: u,
            guild: f,
            className: p,
            hideTooltip: x = !1,
            tooltipPosition: _ = "left",
            onClick: m,
          } = e,
          g = f.hasFeature(u),
          C = (0, r._p)(u);
        return (g
          ? (null != C && (a = c.Z.Messages.PREMIUM_GUILD_INCLUDED),
            (i = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.Z, { className: d.unlockedIcon }),
                (0, t.jsx)(o.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED,
                }),
              ],
            })))
          : (null != C && (a = c.Z.Messages.CLICK_TO_LEARN_MORE),
            (i = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.Z, { className: d.icon }),
                (0, t.jsx)(o.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != C && (0, r.e9)(C),
                }),
              ],
            }))),
        (n =
          x || null == a
            ? (0, t.jsx)("div", {
                className: l()(d.availabilityIndicator, p),
                children: i,
              })
            : (0, t.jsx)(o.Tooltip, {
                position: _,
                text: a,
                children: (e) =>
                  (0, t.jsx)("div", {
                    ...e,
                    className: l()(d.availabilityIndicator, p),
                    children: i,
                  }),
              })),
        null == m || g)
          ? n
          : (0, t.jsx)(o.Clickable, {
              onClick: m,
              className: d.clickable,
              children: n,
            });
      };
    },
    621961: function (e, i, n) {
      n.d(i, {
        C: function () {
          return l;
        },
        K: function () {
          return o;
        },
      });
      var t = n(981631),
        a = n(486324);
      function l(e, i) {
        let { isGIF: n } = i;
        if (e === a.pC.GUILD_BANNER)
          return n ? t.oNc.ANIMATED_BANNER : t.oNc.BANNER;
      }
      function o(e) {
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
        l = n(442837),
        o = n(481060),
        s = n(100527),
        r = n(906732),
        c = n(807582),
        d = n(813197),
        u = n(81245),
        f = n(53691),
        p = n(430824),
        x = n(914010),
        _ = n(594174),
        m = n(451478),
        g = n(626135),
        C = n(74538),
        I = n(621961),
        b = n(884858),
        h = n(981631),
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
          [n, l] = a.useState(!1);
        return (0, t.jsx)("div", {
          className: M.gifGrid,
          onMouseMove: () => l(!0),
          onMouseLeave: () => l(!1),
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
              children: (0, t.jsx)(c.Z, {
                guildFeature: i,
                guild: n,
                hideTooltip: !0,
              }),
            });
      }
      function v(e) {
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
                  (0, t.jsx)(o.TooltipContainer, {
                    className: M.nitroWheelFlairContainer,
                    text: j.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, t.jsx)(o.NitroWheelIcon, {
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
      function O(e) {
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
            onClose: c,
            onComplete: I,
            uploadType: T,
            maxFileSizeBytes: L,
            showUpsellHeader: P,
            filters: U,
            analyticsLocation: Z,
            analyticsLocations: k = [],
            modalSubTitle: F,
            imageSpecifications: R,
            modalTitle: y = j.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: D = j.Z.Messages.UPLOAD_IMAGE,
          } = e,
          S = (0, l.e7)([m.Z], () => m.Z.isFocused()),
          G = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
          B = (0, l.e7)([x.Z], () => x.Z.getGuildId()),
          w = (0, l.e7)([p.Z], () => p.Z.getGuild(B)),
          { reducedMotion: H } = a.useContext(
            o.AccessibilityPreferencesContext,
          ),
          W = (0, o.useModalContext)(),
          z = !C.ZP.canUseAnimatedAvatar(G) && T === E.pC.AVATAR,
          { analyticsLocations: K } = (0, r.ZP)(k, s.Z.SELECT_IMAGE_MODAL);
        function V(e, i) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), I(e, i, n);
        }
        a.useEffect(() => {
          z &&
            g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
              type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: K,
            }),
            g.default.track(h.rMx.OPEN_MODAL, {
              type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: Z,
            });
        }, [z, Z, K]);
        let X = (0, u.M)("SelectImageModal");
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: i,
          size: o.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(o.ModalHeader, {
              className: M.modalHeader,
              separator: !1,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H1,
                      className: M.modalTitle,
                      children: y,
                    }),
                    null != F
                      ? (0, t.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: F,
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)(o.ModalCloseButton, {
                  onClick: c,
                  className: M.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: M.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: M.imagePickerContainer,
                  children: [
                    (0, t.jsxs)(o.Clickable, {
                      className: M.optionBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: M.contentCircle,
                          children: (0, t.jsx)(o.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: M.uploadIcon,
                          }),
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(O, {
                            title: D,
                            uploadType: T,
                            guild: w,
                          }),
                        }),
                        (0, t.jsx)(d.ZP, {
                          onChange: function (e, i) {
                            if (i.type === N.m.MP4) return V(e, i);
                            (0, o.openModalLazy)(
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
                                    analyticsPage: null == Z ? void 0 : Z.page,
                                    ...n,
                                  });
                              },
                              { contextKey: W },
                            );
                          },
                          maxFileSizeBytes: L,
                          onFileSizeError: function () {
                            c(), (0, b.Z)(L);
                          },
                          filters: U,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(o.Clickable, {
                      className: M.optionBox,
                      onClick: function () {
                        (0, o.openModalLazy)(
                          async () => {
                            let { default: e } = await n
                              .e("72891")
                              .then(n.bind(n, 195297));
                            return (i) =>
                              (0, t.jsx)(e, {
                                uploadType: T,
                                onComplete: (e, i) => V(e, i, !0),
                                showUpsellHeader: P,
                                analyticsPage: null == Z ? void 0 : Z.page,
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
                              children: (0, t.jsx)(o.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: M.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(v, { uploadType: T, guild: w }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != R
                  ? (0, t.jsx)(o.Text, {
                      className: M.imageSpecifications,
                      variant: "text-sm/normal",
                      children: R,
                    })
                  : null,
                P &&
                  X &&
                  (0, t.jsx)(f.p, {
                    showUpsell: !0,
                    upsellText: "Wear GIFs with Nitro",
                    ctaText: j.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                    ctaAnalyticsObject: {
                      section: h.jXE.EMOJI_PICKER_FLOATING_UPSELL,
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
          return o;
        },
      });
      var t = n(531643),
        a = n(403182),
        l = n(689938);
      function o(e) {
        (0, t.openUploadError)({
          title: l.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
            maxSize: (0, a.Ng)(e),
          }),
        });
      }
    },
    81245: function (e, i, n) {
      n.d(i, {
        M: function () {
          return c;
        },
      });
      var t = n(442837),
        a = n(987170),
        l = n(594174),
        o = n(111361),
        s = n(474936);
      let r = (0, a.Z)({
        id: "2024-08_premium_user_profile_upsell_desktop",
        label: "User Profile Upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function c(e) {
        let i = (0, t.e7)([l.default], () =>
          o.ZP.isPremium(l.default.getCurrentUser(), s.p9.TIER_2),
        );
        return r.useExperiment(
          { location: e },
          { autoTrackExposure: !i, disable: i },
        ).enabled;
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
//# sourceMappingURL=13f3edd841e3bd30a344.js.map
