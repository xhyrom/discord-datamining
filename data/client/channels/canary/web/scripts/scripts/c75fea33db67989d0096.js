"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19890"],
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
      var t = i(200651);
      i(192379);
      var o = i(120356),
        a = i.n(o),
        l = i(481060),
        s = i(709586),
        r = i(267642),
        c = i(388032),
        d = i(652456);
      n.Z = (e) => {
        let n,
          i,
          o,
          {
            guildFeature: f,
            guild: u,
            className: p,
            hideTooltip: x = !1,
            tooltipPosition: m = "left",
            onClick: g,
          } = e,
          b = u.hasFeature(f),
          h = (0, r._p)(f);
        return (b
          ? (null != h && (o = c.intl.string(c.t.hUgjyM)),
            (n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.Z, { className: d.unlockedIcon }),
                (0, t.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: c.intl.string(c.t["0O+87u"]),
                }),
              ],
            })))
          : (null != h && (o = c.intl.string(c.t.L2wYYm)),
            (n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.Z, { className: d.icon }),
                (0, t.jsx)(l.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != h && (0, r.e9)(h),
                }),
              ],
            }))),
        (i =
          x || null == o
            ? (0, t.jsx)("div", {
                className: a()(d.availabilityIndicator, p),
                children: n,
              })
            : (0, t.jsx)(l.Tooltip, {
                position: m,
                text: o,
                children: (e) =>
                  (0, t.jsx)("div", {
                    ...e,
                    className: a()(d.availabilityIndicator, p),
                    children: n,
                  }),
              })),
        null == g || b)
          ? i
          : (0, t.jsx)(l.Clickable, {
              onClick: g,
              className: d.clickable,
              children: i,
            });
      };
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
            return E;
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
        b = i(626135),
        h = i(74538),
        C = i(621961),
        _ = i(884858),
        j = i(981631),
        N = i(486324),
        v = i(869783),
        I = i(388032),
        A = i(426553);
      let T = [
        { gif: i(495682), png: i(458060) },
        { gif: i(842786), png: i(460790) },
        { gif: i(578831), png: i(642193) },
        { gif: i(145908), png: i(690695) },
      ];
      function y(e) {
        let { shouldAnimate: n = !0 } = e,
          [i, a] = o.useState(!1);
        return (0, t.jsx)("div", {
          className: A.gifGrid,
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          children: T.map((e) =>
            (0, t.jsx)(
              "div",
              {
                className: A.gif,
                style: {
                  backgroundImage: "url(".concat(n || i ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function k(e) {
        let { guildFeature: n, guild: i } = e;
        return null == n || null == i
          ? null
          : (0, t.jsx)("div", {
              className: A.pillWrapper,
              children: (0, t.jsx)(c.Z, {
                guildFeature: n,
                guild: i,
                hideTooltip: !0,
              }),
            });
      }
      function F(e) {
        let { uploadType: n, guild: i } = e;
        return (0, t.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, t.jsx)(k, {
              guild: i,
              guildFeature: (0, C.C)(n, { isGIF: !0 }),
            }),
            (0, t.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                (0, C.K)(n) &&
                  (0, t.jsx)(l.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: I.intl.string(I.t["5AFxuL"]),
                    children: (0, t.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: A.nitroWheelFlair,
                    }),
                  }),
                I.intl.string(I.t["xsC+//"]),
              ],
            }),
          ],
        });
      }
      function M(e) {
        let { title: n, uploadType: i, guild: o } = e;
        return (0, t.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, t.jsx)(k, {
              guildFeature: (0, C.C)(i, { isGIF: !1 }),
              guild: o,
            }),
            (0, t.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                i === N.pC.BANNER &&
                  (0, t.jsx)(l.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: I.intl.string(I.t["5AFxuL"]),
                    children: (0, t.jsx)(l.NitroWheelIcon, {
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
      function E(e) {
        let {
            transitionState: n,
            onClose: c,
            onComplete: C,
            uploadType: T,
            maxFileSizeBytes: k,
            showUpsellHeader: E,
            filters: B,
            analyticsLocation: L,
            analyticsLocations: P = [],
            modalSubTitle: w,
            imageSpecifications: S,
            modalTitle: U = I.intl.string(I.t.DToW4e),
            uploadOptionTitle: Z = I.intl.string(I.t["MsUY/f"]),
          } = e,
          W = (0, a.e7)([g.Z], () => g.Z.isFocused()),
          D = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          O = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
          R = (0, a.e7)([p.Z], () => p.Z.getGuild(O)),
          { reducedMotion: G } = o.useContext(
            l.AccessibilityPreferencesContext,
          ),
          z = (0, l.useModalContext)(),
          H = !h.ZP.canUseAnimatedAvatar(D) && T === N.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(P, s.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), C(e, n, i);
        }
        o.useEffect(() => {
          H &&
            b.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
              type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            b.default.track(j.rMx.OPEN_MODAL, {
              type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: L,
            });
        }, [H, L, V]);
        let X = T === N.pC.AVATAR || T === N.pC.BANNER,
          Y = (0, f.M)(!X);
        return (0, t.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              className: A.modalHeader,
              separator: !1,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(l.FormTitle, {
                      tag: l.FormTitleTags.H1,
                      className: A.modalTitle,
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
                  className: A.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(l.ModalContent, {
              className: A.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: A.imagePickerContainer,
                  children: [
                    (0, t.jsxs)(l.Clickable, {
                      className: A.optionBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: A.contentCircle,
                          children: (0, t.jsx)(l.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: A.uploadIcon,
                          }),
                        }),
                        (0, t.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(M, {
                            title: Z,
                            uploadType: T,
                            guild: R,
                          }),
                        }),
                        (0, t.jsx)(d.ZP, {
                          onChange: function (e, n) {
                            if (n.type === v.m.MP4) return K(e, n);
                            (0, l.openModalLazy)(
                              async () => {
                                let { default: o } = await Promise.all([
                                  i.e("48017"),
                                  i.e("3944"),
                                ]).then(i.bind(i, 850085));
                                return (i) =>
                                  (0, t.jsx)(o, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: K,
                                    uploadType: T,
                                    showUpsellHeader: E,
                                    allowSkip: !0,
                                    analyticsPage: null == L ? void 0 : L.page,
                                    ...i,
                                  });
                              },
                              { contextKey: z },
                            );
                          },
                          maxFileSizeBytes: k,
                          onFileSizeError: function () {
                            c(), (0, _.Z)(k);
                          },
                          filters: B,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(l.Clickable, {
                      className: A.optionBox,
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
                                showUpsellHeader: E,
                                analyticsPage: null == L ? void 0 : L.page,
                                ...n,
                              });
                          },
                          { contextKey: z },
                        );
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          className: A.contentCircle,
                          children: [
                            (0, t.jsx)(y, { shouldAnimate: W && !G.enabled }),
                            (0, t.jsx)("div", {
                              className: A.gifIconContainer,
                              children: (0, t.jsx)(l.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: A.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(l.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(F, { uploadType: T, guild: R }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != S
                  ? (0, t.jsx)(l.Text, {
                      className: A.imageSpecifications,
                      variant: "text-sm/normal",
                      children: S,
                    })
                  : null,
                E &&
                  Y &&
                  (0, t.jsx)(u.Z, {
                    uploadType: T,
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
    884858: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = i(531643),
        o = i(403182),
        a = i(388032);
      function l(e) {
        (0, t.openUploadError)({
          title: a.intl.string(a.t["/tGlcn"]),
          help: a.intl.formatToPlainString(a.t.fxEKdX, {
            maxSize: (0, o.Ng)(e),
          }),
        });
      }
    },
    652456: function (e, n, i) {
      e.exports = {
        availabilityIndicator: "availabilityIndicator_b29edb",
        icon: "icon_b29edb",
        unlockedIcon: "unlockedIcon_b29edb icon_b29edb",
        description: "description_b29edb",
        clickable: "clickable_b29edb",
      };
    },
    426553: function (e, n, i) {
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
    616591: function (e, n, i) {
      e.exports = { container: "container_e62679" };
    },
    374695: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    624566: function (e, n, i) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    745490: function (e, n, i) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    757340: function (e, n, i) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=c75fea33db67989d0096.js.map
