"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74752"],
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
      var t = n(200651);
      n(192379);
      var o = n(120356),
        l = n.n(o),
        a = n(481060),
        s = n(709586),
        r = n(267642),
        c = n(388032),
        d = n(267105);
      i.Z = (e) => {
        let i,
          n,
          o,
          {
            guildFeature: f,
            guild: u,
            className: p,
            hideTooltip: x = !1,
            tooltipPosition: m = "left",
            onClick: g,
          } = e,
          h = u.hasFeature(f),
          C = (0, r._p)(f);
        return (h
          ? (null != C && (o = c.intl.string(c.t.hUgjyM)),
            (i = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.Z, { className: d.unlockedIcon }),
                (0, t.jsx)(a.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: c.intl.string(c.t["0O+87u"]),
                }),
              ],
            })))
          : (null != C && (o = c.intl.string(c.t.L2wYYm)),
            (i = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(s.Z, { className: d.icon }),
                (0, t.jsx)(a.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != C && (0, r.e9)(C),
                }),
              ],
            }))),
        (n =
          x || null == o
            ? (0, t.jsx)("div", {
                className: l()(d.availabilityIndicator, p),
                children: i,
              })
            : (0, t.jsx)(a.Tooltip, {
                position: m,
                text: o,
                children: (e) =>
                  (0, t.jsx)("div", {
                    ...e,
                    className: l()(d.availabilityIndicator, p),
                    children: i,
                  }),
              })),
        null == g || h)
          ? n
          : (0, t.jsx)(a.Clickable, {
              onClick: g,
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
          return a;
        },
      });
      var t = n(981631),
        o = n(486324);
      function l(e, i) {
        let { isGIF: n } = i;
        if (e === o.pC.GUILD_BANNER)
          return n ? t.oNc.ANIMATED_BANNER : t.oNc.BANNER;
      }
      function a(e) {
        return e === o.pC.AVATAR || e === o.pC.BANNER;
      }
    },
    28130: function (e, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return k;
          },
        }),
        n(47120);
      var t = n(200651),
        o = n(192379),
        l = n(442837),
        a = n(481060),
        s = n(100527),
        r = n(906732),
        c = n(807582),
        d = n(813197),
        f = n(222062),
        u = n(530329),
        p = n(430824),
        x = n(914010),
        m = n(594174),
        g = n(451478),
        h = n(626135),
        C = n(74538),
        b = n(621961),
        j = n(884858),
        N = n(981631),
        _ = n(486324),
        v = n(869783),
        I = n(388032),
        A = n(398497);
      let T = [
        { gif: n(495682), png: n(458060) },
        { gif: n(842786), png: n(460790) },
        { gif: n(578831), png: n(642193) },
        { gif: n(145908), png: n(690695) },
      ];
      function F(e) {
        let { shouldAnimate: i = !0 } = e,
          [n, l] = o.useState(!1);
        return (0, t.jsx)("div", {
          className: A.gifGrid,
          onMouseMove: () => l(!0),
          onMouseLeave: () => l(!1),
          children: T.map((e) =>
            (0, t.jsx)(
              "div",
              {
                className: A.gif,
                style: {
                  backgroundImage: "url(".concat(i || n ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function M(e) {
        let { guildFeature: i, guild: n } = e;
        return null == i || null == n
          ? null
          : (0, t.jsx)("div", {
              className: A.pillWrapper,
              children: (0, t.jsx)(c.Z, {
                guildFeature: i,
                guild: n,
                hideTooltip: !0,
              }),
            });
      }
      function y(e) {
        let { uploadType: i, guild: n } = e;
        return (0, t.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, t.jsx)(M, {
              guild: n,
              guildFeature: (0, b.C)(i, { isGIF: !0 }),
            }),
            (0, t.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                (0, b.K)(i) &&
                  (0, t.jsx)(a.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: I.intl.string(I.t["5AFxuL"]),
                    children: (0, t.jsx)(a.NitroWheelIcon, {
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
      function E(e) {
        let { title: i, uploadType: n, guild: o } = e;
        return (0, t.jsxs)("div", {
          className: A.optionBoxText,
          children: [
            (0, t.jsx)(M, {
              guildFeature: (0, b.C)(n, { isGIF: !1 }),
              guild: o,
            }),
            (0, t.jsxs)("div", {
              className: A.optionBoxDescription,
              children: [
                n === _.pC.BANNER &&
                  (0, t.jsx)(a.TooltipContainer, {
                    className: A.nitroWheelFlairContainer,
                    text: I.intl.string(I.t["5AFxuL"]),
                    children: (0, t.jsx)(a.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: A.nitroWheelFlair,
                    }),
                  }),
                i,
              ],
            }),
          ],
        });
      }
      function k(e) {
        let {
            transitionState: i,
            onClose: c,
            onComplete: b,
            uploadType: T,
            maxFileSizeBytes: M,
            showUpsellHeader: k,
            filters: B,
            analyticsLocation: L,
            analyticsLocations: P = [],
            modalSubTitle: S,
            imageSpecifications: U,
            modalTitle: Z = I.intl.string(I.t.DToW4e),
            uploadOptionTitle: W = I.intl.string(I.t["MsUY/f"]),
          } = e,
          w = (0, l.e7)([g.Z], () => g.Z.isFocused()),
          D = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
          O = (0, l.e7)([x.Z], () => x.Z.getGuildId()),
          R = (0, l.e7)([p.Z], () => p.Z.getGuild(O)),
          { reducedMotion: G } = o.useContext(
            a.AccessibilityPreferencesContext,
          ),
          z = (0, a.useModalContext)(),
          H = !C.ZP.canUseAnimatedAvatar(D) && T === _.pC.AVATAR,
          { analyticsLocations: V } = (0, r.ZP)(P, s.Z.SELECT_IMAGE_MODAL);
        function K(e, i) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), b(e, i, n);
        }
        o.useEffect(() => {
          H &&
            h.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
              type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            h.default.track(N.rMx.OPEN_MODAL, {
              type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: L,
            });
        }, [H, L, V]);
        let X = T === _.pC.AVATAR || T === _.pC.BANNER,
          Y = (0, f.M)(!X);
        return (0, t.jsxs)(a.ModalRoot, {
          transitionState: i,
          size: a.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(a.ModalHeader, {
              className: A.modalHeader,
              separator: !1,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(a.FormTitle, {
                      tag: a.FormTitleTags.H1,
                      className: A.modalTitle,
                      children: Z,
                    }),
                    null != S
                      ? (0, t.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children: S,
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)(a.ModalCloseButton, {
                  onClick: c,
                  className: A.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(a.ModalContent, {
              className: A.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: A.imagePickerContainer,
                  children: [
                    (0, t.jsxs)(a.Clickable, {
                      className: A.optionBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: A.contentCircle,
                          children: (0, t.jsx)(a.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: A.uploadIcon,
                          }),
                        }),
                        (0, t.jsx)(a.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(E, {
                            title: W,
                            uploadType: T,
                            guild: R,
                          }),
                        }),
                        (0, t.jsx)(d.ZP, {
                          onChange: function (e, i) {
                            if (i.type === v.m.MP4) return K(e, i);
                            (0, a.openModalLazy)(
                              async () => {
                                let { default: o } = await Promise.all([
                                  n.e("48017"),
                                  n.e("62224"),
                                ]).then(n.bind(n, 850085));
                                return (n) =>
                                  (0, t.jsx)(o, {
                                    imgURI: e,
                                    file: i,
                                    onCrop: K,
                                    uploadType: T,
                                    showUpsellHeader: k,
                                    allowSkip: !0,
                                    analyticsPage: null == L ? void 0 : L.page,
                                    ...n,
                                  });
                              },
                              { contextKey: z },
                            );
                          },
                          maxFileSizeBytes: M,
                          onFileSizeError: function () {
                            c(), (0, j.Z)(M);
                          },
                          filters: B,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(a.Clickable, {
                      className: A.optionBox,
                      onClick: function () {
                        (0, a.openModalLazy)(
                          async () => {
                            let { default: e } = await n
                              .e("72891")
                              .then(n.bind(n, 195297));
                            return (i) =>
                              (0, t.jsx)(e, {
                                uploadType: T,
                                onComplete: (e, i) => K(e, i, !0),
                                showUpsellHeader: k,
                                analyticsPage: null == L ? void 0 : L.page,
                                ...i,
                              });
                          },
                          { contextKey: z },
                        );
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          className: A.contentCircle,
                          children: [
                            (0, t.jsx)(F, { shouldAnimate: w && !G.enabled }),
                            (0, t.jsx)("div", {
                              className: A.gifIconContainer,
                              children: (0, t.jsx)(a.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: A.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(a.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(y, { uploadType: T, guild: R }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != U
                  ? (0, t.jsx)(a.Text, {
                      className: A.imageSpecifications,
                      variant: "text-sm/normal",
                      children: U,
                    })
                  : null,
                k &&
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
    884858: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return a;
        },
      });
      var t = n(531643),
        o = n(403182),
        l = n(388032);
      function a(e) {
        (0, t.openUploadError)({
          title: l.intl.string(l.t["/tGlcn"]),
          help: l.intl.formatToPlainString(l.t.fxEKdX, {
            maxSize: (0, o.Ng)(e),
          }),
        });
      }
    },
    267105: function (e, i, n) {
      e.exports = {
        availabilityIndicator: "availabilityIndicator_b29edb",
        icon: "icon_b29edb",
        unlockedIcon: "unlockedIcon_b29edb icon_b29edb",
        description: "description_b29edb",
        clickable: "clickable_b29edb",
      };
    },
    398497: function (e, i, n) {
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
    173318: function (e, i, n) {
      e.exports = { container: "container_e62679" };
    },
  },
]);
//# sourceMappingURL=a2643e79ea2c65536f15.js.map
