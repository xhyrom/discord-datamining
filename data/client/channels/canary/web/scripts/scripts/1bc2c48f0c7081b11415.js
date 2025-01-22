"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38970"],
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
      var a = i(120356),
        l = i.n(a),
        o = i(481060),
        r = i(709586),
        s = i(267642),
        c = i(388032),
        d = i(267105);
      n.Z = (e) => {
        let n,
          i,
          a,
          {
            guildFeature: u,
            guild: f,
            className: p,
            hideTooltip: m = !1,
            tooltipPosition: x = "left",
            onClick: g,
          } = e,
          v = f.hasFeature(u),
          h = (0, s._p)(u);
        return (v
          ? (null != h && (a = c.intl.string(c.t.hUgjyM)),
            (n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(r.Z, { className: d.unlockedIcon }),
                (0, t.jsx)(o.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: c.intl.string(c.t["0O+87u"]),
                }),
              ],
            })))
          : (null != h && (a = c.intl.string(c.t.L2wYYm)),
            (n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(r.Z, { className: d.icon }),
                (0, t.jsx)(o.Heading, {
                  variant: "eyebrow",
                  className: d.description,
                  children: null != h && (0, s.e9)(h),
                }),
              ],
            }))),
        (i =
          m || null == a
            ? (0, t.jsx)("div", {
                className: l()(d.availabilityIndicator, p),
                children: n,
              })
            : (0, t.jsx)(o.Tooltip, {
                position: x,
                text: a,
                children: (e) =>
                  (0, t.jsx)("div", {
                    ...e,
                    className: l()(d.availabilityIndicator, p),
                    children: n,
                  }),
              })),
        null == g || v)
          ? i
          : (0, t.jsx)(o.Clickable, {
              onClick: g,
              className: d.clickable,
              children: i,
            });
      };
    },
    621961: function (e, n, i) {
      i.d(n, {
        C: function () {
          return l;
        },
        K: function () {
          return o;
        },
      });
      var t = i(981631),
        a = i(486324);
      function l(e, n) {
        let { isGIF: i } = n;
        if (e === a.pC.GUILD_BANNER)
          return i ? t.oNc.ANIMATED_BANNER : t.oNc.BANNER;
      }
      function o(e) {
        return e === a.pC.AVATAR || e === a.pC.BANNER;
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
        a = i(192379),
        l = i(442837),
        o = i(481060),
        r = i(100527),
        s = i(906732),
        c = i(807582),
        d = i(813197),
        u = i(222062),
        f = i(530329),
        p = i(430824),
        m = i(914010),
        x = i(594174),
        g = i(451478),
        v = i(626135),
        h = i(74538),
        C = i(621961),
        b = i(884858),
        j = i(981631),
        N = i(486324),
        I = i(869783),
        _ = i(388032),
        y = i(398497);
      let Z = [
        { gif: i(495682), png: i(458060) },
        { gif: i(842786), png: i(460790) },
        { gif: i(578831), png: i(642193) },
        { gif: i(145908), png: i(690695) },
      ];
      function A(e) {
        let { shouldAnimate: n = !0 } = e,
          [i, l] = a.useState(!1);
        return (0, t.jsx)("div", {
          className: y.gifGrid,
          onMouseMove: () => l(!0),
          onMouseLeave: () => l(!1),
          children: Z.map((e) =>
            (0, t.jsx)(
              "div",
              {
                className: y.gif,
                style: {
                  backgroundImage: "url(".concat(n || i ? e.gif : e.png, ")"),
                },
              },
              e.gif,
            ),
          ),
        });
      }
      function P(e) {
        let { guildFeature: n, guild: i } = e;
        return null == n || null == i
          ? null
          : (0, t.jsx)("div", {
              className: y.pillWrapper,
              children: (0, t.jsx)(c.Z, {
                guildFeature: n,
                guild: i,
                hideTooltip: !0,
              }),
            });
      }
      function T(e) {
        let { uploadType: n, guild: i } = e;
        return (0, t.jsxs)("div", {
          className: y.optionBoxText,
          children: [
            (0, t.jsx)(P, {
              guild: i,
              guildFeature: (0, C.C)(n, { isGIF: !0 }),
            }),
            (0, t.jsxs)("div", {
              className: y.optionBoxDescription,
              children: [
                (0, C.K)(n) &&
                  (0, t.jsx)(o.TooltipContainer, {
                    className: y.nitroWheelFlairContainer,
                    text: _.intl.string(_.t["5AFxuL"]),
                    children: (0, t.jsx)(o.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: y.nitroWheelFlair,
                    }),
                  }),
                _.intl.string(_.t["xsC+//"]),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let { title: n, uploadType: i, guild: a } = e;
        return (0, t.jsxs)("div", {
          className: y.optionBoxText,
          children: [
            (0, t.jsx)(P, {
              guildFeature: (0, C.C)(i, { isGIF: !1 }),
              guild: a,
            }),
            (0, t.jsxs)("div", {
              className: y.optionBoxDescription,
              children: [
                i === N.pC.BANNER &&
                  (0, t.jsx)(o.TooltipContainer, {
                    className: y.nitroWheelFlairContainer,
                    text: _.intl.string(_.t["5AFxuL"]),
                    children: (0, t.jsx)(o.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: y.nitroWheelFlair,
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
            uploadType: Z,
            maxFileSizeBytes: P,
            showUpsellHeader: E,
            filters: w,
            analyticsLocation: B,
            analyticsLocations: S = [],
            modalSubTitle: F,
            imageSpecifications: M,
            modalTitle: U = _.intl.string(_.t.DToW4e),
            uploadOptionTitle: z = _.intl.string(_.t["MsUY/f"]),
          } = e,
          L = (0, l.e7)([g.Z], () => g.Z.isFocused()),
          O = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
          D = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
          R = (0, l.e7)([p.Z], () => p.Z.getGuild(D)),
          { reducedMotion: W } = a.useContext(
            o.AccessibilityPreferencesContext,
          ),
          G = (0, o.useModalContext)(),
          H = !h.ZP.canUseAnimatedAvatar(O) && Z === N.pC.AVATAR,
          { analyticsLocations: V } = (0, s.ZP)(S, r.Z.SELECT_IMAGE_MODAL);
        function K(e, n) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          c(), C(e, n, i);
        }
        a.useEffect(() => {
          H &&
            v.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
              type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location_stack: V,
            }),
            v.default.track(j.rMx.OPEN_MODAL, {
              type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
              location: B,
            });
        }, [H, B, V]);
        let X = Z === N.pC.AVATAR || Z === N.pC.BANNER,
          Y = (0, u.M)(!X);
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: n,
          size: o.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(o.ModalHeader, {
              className: y.modalHeader,
              separator: !1,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H1,
                      className: y.modalTitle,
                      children: U,
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
                  className: y.modalCloseButton,
                }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: y.modalContent,
              children: [
                (0, t.jsxs)("div", {
                  className: y.imagePickerContainer,
                  children: [
                    (0, t.jsxs)(o.Clickable, {
                      className: y.optionBox,
                      children: [
                        (0, t.jsx)("div", {
                          className: y.contentCircle,
                          children: (0, t.jsx)(o.ImagePlusIcon, {
                            size: "md",
                            color: "currentColor",
                            className: y.uploadIcon,
                          }),
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(k, {
                            title: z,
                            uploadType: Z,
                            guild: R,
                          }),
                        }),
                        (0, t.jsx)(d.ZP, {
                          onChange: function (e, n) {
                            if (n.type === I.m.MP4) return K(e, n);
                            (0, o.openModalLazy)(
                              async () => {
                                let { default: a } = await Promise.all([
                                  i.e("48017"),
                                  i.e("62224"),
                                ]).then(i.bind(i, 850085));
                                return (i) =>
                                  (0, t.jsx)(a, {
                                    imgURI: e,
                                    file: n,
                                    onCrop: K,
                                    uploadType: Z,
                                    showUpsellHeader: E,
                                    allowSkip: !0,
                                    analyticsPage: null == B ? void 0 : B.page,
                                    ...i,
                                  });
                              },
                              { contextKey: G },
                            );
                          },
                          maxFileSizeBytes: P,
                          onFileSizeError: function () {
                            c(), (0, b.Z)(P);
                          },
                          filters: w,
                        }),
                      ],
                    }),
                    (0, t.jsxs)(o.Clickable, {
                      className: y.optionBox,
                      onClick: function () {
                        (0, o.openModalLazy)(
                          async () => {
                            let { default: e } = await i
                              .e("72891")
                              .then(i.bind(i, 195297));
                            return (n) =>
                              (0, t.jsx)(e, {
                                uploadType: Z,
                                onComplete: (e, n) => K(e, n, !0),
                                showUpsellHeader: E,
                                analyticsPage: null == B ? void 0 : B.page,
                                ...n,
                              });
                          },
                          { contextKey: G },
                        );
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          className: y.contentCircle,
                          children: [
                            (0, t.jsx)(A, { shouldAnimate: L && !W.enabled }),
                            (0, t.jsx)("div", {
                              className: y.gifIconContainer,
                              children: (0, t.jsx)(o.GifIcon, {
                                size: "custom",
                                width: 29,
                                height: 29,
                                color: "currentColor",
                                className: y.gifIcon,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "interactive-normal",
                          children: (0, t.jsx)(T, { uploadType: Z, guild: R }),
                        }),
                      ],
                    }),
                  ],
                }),
                null != M
                  ? (0, t.jsx)(o.Text, {
                      className: y.imageSpecifications,
                      variant: "text-sm/normal",
                      children: M,
                    })
                  : null,
                E &&
                  Y &&
                  (0, t.jsx)(f.Z, {
                    uploadType: Z,
                    showUpsell: !0,
                    position: "inline",
                    showShadow: !1,
                    className: y.nitroUpsell,
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
          return o;
        },
      });
      var t = i(531643),
        a = i(403182),
        l = i(388032);
      function o(e) {
        (0, t.openUploadError)({
          title: l.intl.string(l.t["/tGlcn"]),
          help: l.intl.formatToPlainString(l.t.fxEKdX, {
            maxSize: (0, a.Ng)(e),
          }),
        });
      }
    },
    445924: function (e, n, i) {
      var t = i(200651);
      i(192379);
      var a = i(481060),
        l = i(388032);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: i,
          onClose: o,
          className: r,
        } = e;
        return (0, t.jsxs)(a.Menu, {
          className: r,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": l.intl.string(l.t.ldIeAQ),
          children: [
            (0, t.jsx)(a.MenuItem, {
              id: "change-avatar",
              action: n,
              label: l.intl.string(l.t["4OynCA"]),
            }),
            (0, t.jsx)(a.MenuItem, {
              id: "change-avatar-decoration",
              action: i,
              label: l.intl.string(l.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return j;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(120356),
        l = i.n(a),
        o = i(481060),
        r = i(680295),
        s = i(687158),
        c = i(576635),
        d = i(518950),
        u = i(502762),
        f = i(4517),
        p = i(150039),
        m = i(450734),
        x = i(225089),
        g = i(853726),
        v = i(165747),
        h = i(981631),
        C = i(228168),
        b = i(154960);
      function j(e) {
        let {
            user: n,
            guild: i,
            canUsePremiumCustomization: a,
            onUpsellClick: j,
            pendingBanner: N,
            pendingBio: I,
            pendingPronouns: _,
            pendingAvatar: y,
            pendingAvatarDecoration: Z,
            pendingNickname: A,
            pendingGlobalName: P,
            pendingThemeColors: T,
            pendingProfileEffectId: k,
            avatarClassName: E,
            containerClassName: w,
            isTryItOutFlow: B = !1,
            disabledInputs: S = !1,
            hideCustomStatus: F = !1,
            hideBioSection: M = !1,
            hideMessageInput: U = !0,
            hideExampleButton: z = !1,
          } = e,
          L = (0, s.ZP)(n.id, null == i ? void 0 : i.id),
          { avatarSrc: O, avatarDecorationSrc: D } = (0, d.Z)({
            user: n,
            guildId: null == i ? void 0 : i.id,
            avatarDecorationOverride: Z,
            avatarOverride: y,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          R = (0, p.ZT)({ pendingProfileEffectId: k, displayProfile: L }),
          { theme: W, primaryColor: G } = (0, c.Z)({
            user: n,
            displayProfile: L,
            pendingThemeColors: T,
            isPreview: a,
          });
        return (0, t.jsxs)(u.Z, {
          user: n,
          displayProfile: L,
          profileType: C.y0.BITE_SIZE,
          pendingThemeColors: T,
          className: l()(b.container, w),
          forceShowPremium: a,
          children: [
            (0, t.jsxs)("header", {
              className: b.header,
              children: [
                (0, t.jsx)(x.Z, {
                  user: n,
                  displayProfile: L,
                  guildId: null == i ? void 0 : i.id,
                  canUsePremiumCustomization: a,
                  pendingBanner: N,
                  isTryItOutFlow: B,
                  disabledInputs: S,
                  onUpsellClick: () =>
                    null == j
                      ? void 0
                      : j({ object: h.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, t.jsx)(m.Z, {
                  user: n,
                  guild: i,
                  displayProfile: L,
                  canUsePremiumCustomization: a,
                  previewAvatar: O,
                  previewAvatarDecoration: D,
                  previewTheme: W,
                  previewPrimaryColor: G,
                  className: E,
                  disabledInputs: S,
                  isTryItOutFlow: B,
                  onUpsellClick: () =>
                    null == j ? void 0 : j({ object: h.qAy.AVATAR }),
                }),
                !F &&
                  (0, t.jsx)(f.Z, {
                    location: "ProfileCustomizationPreview",
                    user: n,
                    profileType: C.y0.BITE_SIZE,
                  }),
              ],
            }),
            (0, t.jsx)(g.Z, {
              user: n,
              displayProfile: L,
              guild: i,
              pendingAvatar: y,
              pendingNickname: A,
              pendingGlobalName: P,
              pendingBio: I,
              pendingPronouns: _,
              isTryItOutFlow: B,
              hideBioSection: M,
            }),
            (0, t.jsx)(v.Z, {
              user: n,
              hideMessageInput: U,
              hideExampleButton: z,
            }),
            null != R && (0, t.jsx)(r.Z, { profileEffectId: R }),
          ],
        });
      }
    },
    450734: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return v;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(120356),
        l = i.n(a),
        o = i(442837),
        r = i(481060),
        s = i(906732),
        c = i(1585),
        d = i(158776),
        u = i(998502),
        f = i(445924),
        p = i(654904),
        m = i(486324),
        x = i(776458);
      let g = u.ZP.getEnableHardwareAcceleration()
        ? r.AnimatedAvatar
        : r.Avatar;
      function v(e) {
        let {
            user: n,
            guild: i,
            displayProfile: a,
            canUsePremiumCustomization: u,
            previewAvatar: v,
            previewAvatarDecoration: h,
            previewTheme: C,
            previewPrimaryColor: b,
            className: j,
            disabledInputs: N,
            isTryItOutFlow: I,
            onUpsellClick: _,
          } = e,
          { analyticsLocations: y } = (0, s.ZP)(),
          Z = (0, o.e7)([d.Z], () => d.Z.getStatus(n.id)),
          A =
            null == i ||
            (null == a ? void 0 : a.canUsePremiumProfileCustomization) ||
            u,
          P = (0, t.jsx)(g, {
            src: v,
            avatarDecoration: h,
            imageClassName: l()(j, { [x.overlay]: !N }),
            size: r.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: Z,
            statusTooltip: !1,
            statusBackdropColor:
              null != b ? (0, r.getStatusBackdropColor)(C) : void 0,
          });
        return N
          ? (0, t.jsx)("div", { className: x.avatar, children: P })
          : A
            ? (0, t.jsx)(r.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, t.jsx)(f.Z, {
                    className: x.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, p.$r)(m.pC.AVATAR, null == i ? void 0 : i.id, I),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == i ? void 0 : i,
                        analyticsLocations: y,
                        isTryItOutFlow: I,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, t.jsxs)(r.Clickable, {
                    ...e,
                    className: l()(x.avatar, x.clickable),
                    children: [
                      P,
                      (0, t.jsx)(r.PencilIcon, {
                        size: "custom",
                        className: x.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, t.jsxs)(r.Clickable, {
                onClick: _,
                className: l()(x.avatar, x.clickable),
                children: [
                  P,
                  (0, t.jsx)(r.NitroWheelIcon, {
                    size: "custom",
                    className: x.overlayIcon,
                    width: 20,
                    height: 20,
                    color: "white",
                  }),
                ],
              });
      }
    },
    225089: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(481060),
        l = i(222062),
        o = i(867176),
        r = i(654904),
        s = i(486324),
        c = i(228168),
        d = i(388032),
        u = i(93428);
      function f(e) {
        let {
            user: n,
            displayProfile: i,
            guildId: f,
            canUsePremiumCustomization: p,
            pendingBanner: m,
            isTryItOutFlow: x,
            disabledInputs: g,
            onUpsellClick: v,
          } = e,
          h =
            p ||
            (null == i ? void 0 : i.canUsePremiumProfileCustomization) ||
            !1,
          C = h ? a.PencilIcon : a.NitroWheelIcon,
          b = (0, l.M)(h);
        return (0, t.jsx)(o.Z, {
          user: n,
          displayProfile: i,
          guildId: f,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: m,
          canUsePremiumProfileCustomization: p,
          children:
            !g &&
            (0, t.jsxs)(a.Clickable, {
              onClick: () => {
                if (!h && !b) {
                  null == v || v();
                  return;
                }
                (0, r.$r)(s.pC.BANNER, f, x);
              },
              className: u.clickable,
              children: [
                (0, t.jsx)(C, { size: "xs", color: "white" }),
                (0, t.jsx)(a.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    h || b
                      ? d.intl.string(d.t.N0bC3N)
                      : d.intl.string(d.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(442837),
        l = i(648052),
        o = i(530),
        r = i(420654),
        s = i(116854),
        c = i(271383),
        d = i(246946),
        u = i(654904),
        f = i(228168),
        p = i(591156);
      function m(e) {
        var n;
        let {
            user: i,
            displayProfile: m,
            guild: x,
            pendingAvatar: g,
            pendingNickname: v,
            pendingGlobalName: h,
            pendingBio: C,
            pendingPronouns: b,
            isTryItOutFlow: j,
            hideBioSection: N,
          } = e,
          I = (0, a.e7)([c.ZP], () =>
            null == x ? null : c.ZP.getMember(x.id, i.id),
          ),
          _ = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
          y =
            null == m
              ? void 0
              : null === (n = m.getPreviewBio(C)) || void 0 === n
                ? void 0
                : n.value,
          Z = null != b ? b : null == m ? void 0 : m.pronouns,
          A = (0, u.Ly)({
            pendingNickname: v,
            pendingGlobalName: h,
            user: i,
            guildMember: I,
          });
        return (0, t.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, t.jsx)(o.Z, {
              user: i,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != I)) return;
                if (null !== g && !!(null != I.avatar || null != g))
                  return (0, t.jsx)(s.Z, { user: i, nickname: A });
              })(),
              nickname: A,
              pronouns: Z,
              isTryItOut: j,
              tags: (0, t.jsx)(l.Z, {
                displayProfile: m,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            !N &&
              null != y &&
              "" !== y &&
              (0, t.jsx)(r.Z, {
                user: i,
                bio: y,
                hidePersonalInformation: _,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = i(200651);
      i(192379);
      var a = i(475413),
        l = i(955418),
        o = i(388032),
        r = i(591156);
      function s(e) {
        let { user: n, hideMessageInput: i, hideExampleButton: s } = e;
        return i
          ? (0, t.jsx)("footer", {
              className: r.footer,
              children:
                !s &&
                (0, t.jsx)(a.tG, {
                  text: o.intl.string(o.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, t.jsx)("footer", {
              inert: "",
              className: r.footer,
              children: (0, t.jsx)(l.Z, { user: n }),
            });
      }
    },
    267105: function (e, n, i) {
      e.exports = {
        availabilityIndicator: "availabilityIndicator_b29edb",
        icon: "icon_b29edb",
        unlockedIcon: "unlockedIcon_b29edb icon_b29edb",
        description: "description_b29edb",
        clickable: "clickable_b29edb",
      };
    },
    398497: function (e, n, i) {
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
    173318: function (e, n, i) {
      e.exports = { container: "container_e62679" };
    },
    761346: function (e, n, i) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    154960: function (e, n, i) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    776458: function (e, n, i) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    93428: function (e, n, i) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=1bc2c48f0c7081b11415.js.map
