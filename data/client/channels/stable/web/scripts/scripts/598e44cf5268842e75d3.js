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
    621961: function (e, i, n) {
      n.d(i, {
        C: function () {
          return a;
        },
        K: function () {
          return s;
        },
      });
      var t = n(981631),
        o = n(486324);
      function a(e, i) {
        let { isGIF: n } = i;
        if (e === o.pC.GUILD_BANNER)
          return n ? t.oNc.ANIMATED_BANNER : t.oNc.BANNER;
      }
      function s(e) {
        return e === o.pC.AVATAR || e === o.pC.BANNER;
      }
    },
    28130: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return L;
          },
        }),
        n(47120);
      var t = n(735250),
        o = n(470079),
        a = n(442837),
        s = n(481060),
        l = n(100527),
        r = n(906732),
        c = n(807582),
        d = n(813197),
        f = n(430824),
        u = n(914010),
        p = n(594174),
        x = n(451478),
        g = n(626135),
        m = n(74538),
        C = n(621961),
        _ = n(884858),
        h = n(981631),
        j = n(486324),
        I = n(869783),
        N = n(689938),
        M = n(403661);
      let T = [
        { gif: n(495682), png: n(458060) },
        { gif: n(842786), png: n(460790) },
        { gif: n(578831), png: n(642193) },
        { gif: n(145908), png: n(690695) },
      ];
      function b(e) {
        let { shouldAnimate: i = !0 } = e,
          [n, a] = o.useState(!1);
        return (0, t.jsx)("div", {
          className: M.gifGrid,
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
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
      function A(e) {
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
      function E(e) {
        let { uploadType: i, guild: n } = e;
        return (0, t.jsxs)("div", {
          className: M.optionBoxText,
          children: [
            (0, t.jsx)(A, {
              guild: n,
              guildFeature: (0, C.C)(i, { isGIF: !0 }),
            }),
            (0, t.jsxs)("div", {
              className: M.optionBoxDescription,
              children: [
                (0, C.K)(i) &&
                  (0, t.jsx)(s.TooltipContainer, {
                    className: M.nitroWheelFlairContainer,
                    text: N.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, t.jsx)(s.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: M.nitroWheelFlair,
                    }),
                  }),
                N.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { title: i, uploadType: n, guild: o } = e;
        return (0, t.jsxs)("div", {
          className: M.optionBoxText,
          children: [
            (0, t.jsx)(A, {
              guildFeature: (0, C.C)(n, { isGIF: !1 }),
              guild: o,
            }),
            (0, t.jsx)("div", {
              className: M.optionBoxDescription,
              children: i,
            }),
          ],
        });
      }
      function L(e) {
        let {
            transitionState: i,
            onClose: c,
            onComplete: C,
            uploadType: T,
            maxFileSizeBytes: A,
            showUpsellHeader: L,
            filters: O,
            analyticsLocation: F,
            analyticsLocations: B = [],
            modalSubTitle: P,
            imageSpecifications: S,
            modalTitle: y = N.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: Z = N.Z.Messages.UPLOAD_IMAGE,
          } = e,
          k = (0, a.e7)([x.Z], () => x.Z.isFocused()),
          D = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
          G = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
          R = (0, a.e7)([f.Z], () => f.Z.getGuild(G)),
          { reducedMotion: U } = o.useContext(
            s.AccessibilityPreferencesContext,
          ),
          W = (0, s.useModalContext)(),
          H = !m.ZP.canUseAnimatedAvatar(D) && T === j.pC.AVATAR,
          { analyticsLocations: z } = (0, r.ZP)(B, l.Z.SELECT_IMAGE_MODAL);
        function w(e, i) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), C(e, i, n);
        }
        return (
          o.useEffect(() => {
            H &&
              g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: z,
              }),
              g.default.track(h.rMx.OPEN_MODAL, {
                type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: F,
              });
          }, [H, F, z]),
          (0, t.jsxs)(s.ModalRoot, {
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
                      null != P
                        ? (0, t.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: P,
                          })
                        : null,
                    ],
                  }),
                  (0, t.jsx)(s.ModalCloseButton, {
                    onClick: c,
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
                              title: Z,
                              uploadType: T,
                              guild: R,
                            }),
                          }),
                          (0, t.jsx)(d.ZP, {
                            onChange: function (e, i) {
                              if (i.type === I.m.MP4) return w(e, i);
                              (0, s.openModalLazy)(
                                async () => {
                                  let { default: o } = await Promise.all([
                                    n.e("48017"),
                                    n.e("29625"),
                                  ]).then(n.bind(n, 850085));
                                  return (n) =>
                                    (0, t.jsx)(o, {
                                      imgURI: e,
                                      file: i,
                                      onCrop: w,
                                      uploadType: T,
                                      showUpsellHeader: L,
                                      allowSkip: !0,
                                      analyticsPage:
                                        null == F ? void 0 : F.page,
                                      ...n,
                                    });
                                },
                                { contextKey: W },
                              );
                            },
                            maxFileSizeBytes: A,
                            onFileSizeError: function () {
                              c(), (0, _.Z)(A);
                            },
                            filters: O,
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
                                  onComplete: (e, i) => w(e, i, !0),
                                  showUpsellHeader: L,
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
                              (0, t.jsx)(b, { shouldAnimate: k && !U.enabled }),
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
                            children: (0, t.jsx)(E, {
                              uploadType: T,
                              guild: R,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  null != S
                    ? (0, t.jsx)(s.Text, {
                        className: M.imageSpecifications,
                        variant: "text-sm/normal",
                        children: S,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      }
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
      };
    },
  },
]);
//# sourceMappingURL=598e44cf5268842e75d3.js.map
