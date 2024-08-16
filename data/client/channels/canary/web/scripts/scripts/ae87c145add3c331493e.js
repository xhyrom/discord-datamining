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
      var a = n(735250);
      n(470079);
      var t = n(120356),
        o = n.n(t),
        l = n(481060),
        s = n(709586),
        c = n(267642),
        r = n(689938),
        d = n(547780);
      i.Z = (e) => {
        let i,
          n,
          t,
          {
            guildFeature: f,
            guild: u,
            className: p,
            hideTooltip: x = !1,
            tooltipPosition: m = "left",
            onClick: g,
          } = e,
          _ = u.hasFeature(f),
          C = (0, c._p)(f);
        return (_
          ? (null != C && (t = r.Z.Messages.PREMIUM_GUILD_INCLUDED),
            (i = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.Z, { className: d.unlockedIcon }),
                (0, a.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED,
                }),
              ],
            })))
          : (null != C && (t = r.Z.Messages.CLICK_TO_LEARN_MORE),
            (i = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.Z, { className: d.icon }),
                (0, a.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != C && (0, c.e9)(C),
                }),
              ],
            }))),
        (n =
          x || null == t
            ? (0, a.jsx)("div", {
                className: o()(d.availabilityIndicator, p),
                children: i,
              })
            : (0, a.jsx)(l.Tooltip, {
                position: m,
                text: t,
                children: (e) =>
                  (0, a.jsx)("div", {
                    ...e,
                    className: o()(d.availabilityIndicator, p),
                    children: i,
                  }),
              })),
        null == g || _)
          ? n
          : (0, a.jsx)(l.Clickable, {
              onClick: g,
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
          return l;
        },
      });
      var a = n(981631),
        t = n(486324);
      function o(e, i) {
        let { isGIF: n } = i;
        if (e === t.pC.GUILD_BANNER)
          return n ? a.oNc.ANIMATED_BANNER : a.oNc.BANNER;
      }
      function l(e) {
        return e === t.pC.AVATAR || e === t.pC.BANNER;
      }
    },
    28130: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return v;
          },
        }),
        n(47120);
      var a = n(735250),
        t = n(470079),
        o = n(442837),
        l = n(481060),
        s = n(100527),
        c = n(906732),
        r = n(807582),
        d = n(813197),
        f = n(430824),
        u = n(914010),
        p = n(594174),
        x = n(451478),
        m = n(626135),
        g = n(74538),
        _ = n(621961),
        C = n(884858),
        h = n(981631),
        b = n(486324),
        I = n(869783),
        N = n(689938),
        j = n(403661);
      let E = [
        { gif: n(495682), png: n(458060) },
        { gif: n(842786), png: n(460790) },
        { gif: n(578831), png: n(642193) },
        { gif: n(145908), png: n(690695) },
      ];
      function M(e) {
        let { shouldAnimate: i = !0 } = e,
          [n, o] = t.useState(!1);
        return (0, a.jsx)("div", {
          className: j.gifGrid,
          onMouseMove: () => o(!0),
          onMouseLeave: () => o(!1),
          children: E.map((e) =>
            (0, a.jsx)(
              "div",
              {
                className: j.gif,
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
          : (0, a.jsx)("div", {
              className: j.pillWrapper,
              children: (0, a.jsx)(r.Z, {
                guildFeature: i,
                guild: n,
                hideTooltip: !0,
              }),
            });
      }
      function T(e) {
        let { uploadType: i, guild: n } = e;
        return (0, a.jsxs)("div", {
          className: j.optionBoxText,
          children: [
            (0, a.jsx)(A, {
              guild: n,
              guildFeature: (0, _.C)(i, { isGIF: !0 }),
            }),
            (0, a.jsxs)("div", {
              className: j.optionBoxDescription,
              children: [
                (0, _.K)(i) &&
                  (0, a.jsx)(l.TooltipContainer, {
                    className: j.nitroWheelFlairContainer,
                    text: N.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    children: (0, a.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: j.nitroWheelFlair,
                    }),
                  }),
                N.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { title: i, uploadType: n, guild: t } = e;
        return (0, a.jsxs)("div", {
          className: j.optionBoxText,
          children: [
            (0, a.jsx)(A, {
              guildFeature: (0, _.C)(n, { isGIF: !1 }),
              guild: t,
            }),
            (0, a.jsx)("div", {
              className: j.optionBoxDescription,
              children: i,
            }),
          ],
        });
      }
      function v(e) {
        let {
            transitionState: i,
            onClose: r,
            onComplete: _,
            uploadType: E,
            maxFileSizeBytes: A,
            showUpsellHeader: v,
            filters: O,
            analyticsLocation: Z,
            analyticsLocations: F = [],
            modalSubTitle: P,
            imageSpecifications: k,
            modalTitle: y = N.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
            uploadOptionTitle: D = N.Z.Messages.UPLOAD_IMAGE,
          } = e,
          R = (0, o.e7)([x.Z], () => x.Z.isFocused()),
          B = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
          U = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
          G = (0, o.e7)([f.Z], () => f.Z.getGuild(U)),
          { reducedMotion: S } = t.useContext(
            l.AccessibilityPreferencesContext,
          ),
          H = (0, l.useModalContext)(),
          W = !g.ZP.canUseAnimatedAvatar(B) && E === b.pC.AVATAR,
          { analyticsLocations: w } = (0, c.ZP)(F, s.Z.SELECT_IMAGE_MODAL);
        function z(e, i) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r(), _(e, i, n);
        }
        return (
          t.useEffect(() => {
            W &&
              m.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: w,
              }),
              m.default.track(h.rMx.OPEN_MODAL, {
                type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: Z,
              });
          }, [W, Z, w]),
          (0, a.jsxs)(l.ModalRoot, {
            transitionState: i,
            size: l.ModalSize.SMALL,
            children: [
              (0, a.jsxs)(l.ModalHeader, {
                className: j.modalHeader,
                separator: !1,
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H1,
                        className: j.modalTitle,
                        children: y,
                      }),
                      null != P
                        ? (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: P,
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)(l.ModalCloseButton, {
                    onClick: r,
                    className: j.modalCloseButton,
                  }),
                ],
              }),
              (0, a.jsxs)(l.ModalContent, {
                className: j.modalContent,
                children: [
                  (0, a.jsxs)("div", {
                    className: j.imagePickerContainer,
                    children: [
                      (0, a.jsxs)(l.Clickable, {
                        className: j.optionBox,
                        children: [
                          (0, a.jsx)("div", {
                            className: j.contentCircle,
                            children: (0, a.jsx)(l.ImagePlusIcon, {
                              size: "md",
                              color: "currentColor",
                              className: j.uploadIcon,
                            }),
                          }),
                          (0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: (0, a.jsx)(L, {
                              title: D,
                              uploadType: E,
                              guild: G,
                            }),
                          }),
                          (0, a.jsx)(d.ZP, {
                            onChange: function (e, i) {
                              if (i.type === I.m.MP4) return z(e, i);
                              (0, l.openModalLazy)(
                                async () => {
                                  let { default: t } = await Promise.all([
                                    n.e("48017"),
                                    n.e("29625"),
                                  ]).then(n.bind(n, 850085));
                                  return (n) =>
                                    (0, a.jsx)(t, {
                                      imgURI: e,
                                      file: i,
                                      onCrop: z,
                                      uploadType: E,
                                      showUpsellHeader: v,
                                      allowSkip: !0,
                                      analyticsPage:
                                        null == Z ? void 0 : Z.page,
                                      ...n,
                                    });
                                },
                                { contextKey: H },
                              );
                            },
                            maxFileSizeBytes: A,
                            onFileSizeError: function () {
                              r(), (0, C.Z)(A);
                            },
                            filters: O,
                          }),
                        ],
                      }),
                      (0, a.jsxs)(l.Clickable, {
                        className: j.optionBox,
                        onClick: function () {
                          (0, l.openModalLazy)(
                            async () => {
                              let { default: e } = await n
                                .e("72891")
                                .then(n.bind(n, 195297));
                              return (i) =>
                                (0, a.jsx)(e, {
                                  uploadType: E,
                                  onComplete: (e, i) => z(e, i, !0),
                                  showUpsellHeader: v,
                                  analyticsPage: null == Z ? void 0 : Z.page,
                                  ...i,
                                });
                            },
                            { contextKey: H },
                          );
                        },
                        children: [
                          (0, a.jsxs)("div", {
                            className: j.contentCircle,
                            children: [
                              (0, a.jsx)(M, { shouldAnimate: R && !S.enabled }),
                              (0, a.jsx)("div", {
                                className: j.gifIconContainer,
                                children: (0, a.jsx)(l.GifIcon, {
                                  size: "custom",
                                  width: 29,
                                  height: 29,
                                  color: "currentColor",
                                  className: j.gifIcon,
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: (0, a.jsx)(T, {
                              uploadType: E,
                              guild: G,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  null != k
                    ? (0, a.jsx)(l.Text, {
                        className: j.imageSpecifications,
                        variant: "text-sm/normal",
                        children: k,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      }
    },
    884858: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return l;
        },
      });
      var a = n(531643),
        t = n(403182),
        o = n(689938);
      function l(e) {
        (0, a.openUploadError)({
          title: o.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
            maxSize: (0, t.Ng)(e),
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
      };
    },
  },
]);
//# sourceMappingURL=ae87c145add3c331493e.js.map
