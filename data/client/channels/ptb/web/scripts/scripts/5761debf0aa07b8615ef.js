"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8821"],
  {
    938117: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120);
      var s = t(200651),
        l = t(192379),
        o = t(442837),
        a = t(481060),
        i = t(2052),
        r = t(594174),
        c = t(74538),
        d = t(716161),
        u = t(634041),
        g = t(647177),
        m = t(672339),
        p = t(898531),
        x = t(636188),
        k = t(678916),
        O = t(981631),
        j = t(869783),
        h = t(388032),
        I = t(858495);
      function N(e) {
        let {
            onLearnMore: n,
            selectedBackgroundOption: N,
            onSelectBackgroundOption: f,
            currentDeviceId: v,
            smallerBackgroundOptions: T,
          } = e,
          _ = (0, o.e7)([r.default], () => r.default.getCurrentUser()),
          [b, C] = l.useState(null),
          E = (0, p.Z)(),
          S = c.ZP.canUseCustomBackgrounds(_),
          B = (0, o.cj)([u.Z], () => (S ? u.Z.videoFilterAssets : {})),
          U = l.useMemo(
            () => Object.values(B).filter((e) => e.type === k.xV.BACKGROUND),
            [B],
          ),
          y = (0, i.O)(),
          D = {
            isVideoBackgroundSupported: E,
            onSelectBackgroundOption: f,
            selectedBackgroundOption: N,
          },
          M = l.useRef(D);
        l.useEffect(() => {
          M.current = D;
        }),
          l.useEffect(() => {
            let {
              isVideoBackgroundSupported: e,
              onSelectBackgroundOption: n,
              selectedBackgroundOption: t,
            } = M.current;
            e
              ? (0, m.FU)(t, v, { track: !1 }).catch(() => n(null))
              : null != t && n(null);
          }, [v]);
        let Z = (e) => {
          f(e),
            (0, m.FU)(e, v, { location: y.location })
              .then(() => C(null))
              .catch(() => {
                C(h.intl.string(h.t.ejrSLS)),
                  (0, m.FU)(null, v, { location: y.location });
              });
        };
        return E
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(a.Heading, {
                  className: I.spacingTop24,
                  variant: "eyebrow",
                  color: "header-secondary",
                  children: h.intl.string(h.t.lZTUPj),
                }),
                null != b
                  ? (0, s.jsx)(a.FormErrorBlock, {
                      className: I.videoBackgroundError,
                      children: b,
                    })
                  : null,
                (0, s.jsx)(x.Z, {
                  canUseCustomBackgrounds: S,
                  customBackgroundOptions: U,
                  selectedOption: N,
                  onSelectOption: Z,
                  onUpsellClick: () => {
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("87200")
                        .then(t.bind(t, 592163));
                      return (t) =>
                        (0, s.jsx)(e, {
                          ...t,
                          onLearnMore: n,
                          analyticsSource: {
                            ...y.location,
                            object: O.qAy.BUTTON_CTA,
                          },
                        });
                    });
                  },
                  onAddBackgroundImage: function (e, n) {
                    let t =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    return new Promise(async (s) => {
                      try {
                        let s = await (0, d.Ff)(e, k.xV.BACKGROUND);
                        Z(s), (0, g.g5)(s, n.type === j.m.MP4, t), C(null);
                      } catch (e) {
                        C(e.message);
                      }
                      s();
                    });
                  },
                  smallerOptions: T,
                }),
              ],
            })
          : null;
      }
    },
    636188: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      }),
        t(47120);
      var s = t(200651),
        l = t(192379),
        o = t(120356),
        a = t.n(o),
        i = t(442837),
        r = t(481060),
        c = t(239091),
        d = t(2052),
        u = t(493773),
        g = t(100527),
        m = t(906732),
        p = t(70097),
        x = t(142497),
        k = t(810788),
        O = t(626135),
        j = t(768581),
        h = t(709054),
        I = t(647177),
        N = t(63985),
        f = t(678916),
        v = t(981631),
        T = t(190378),
        _ = t(486324),
        b = t(474936),
        C = t(388032),
        E = t(821492);
      function S(e) {
        let {
          icon: n,
          onClick: t,
          text: l,
          children: o,
          className: i,
          selected: c = !1,
          disabled: d = !1,
          onMouseLeave: u,
          onBlur: g,
        } = e;
        return (0, s.jsxs)(r.Clickable, {
          className: a()(i, E.backgroundOption, {
            [E.backgroundOptionSelected]: c,
            [E.backgroundOptionDisabled]: d,
          }),
          onMouseLeave: u,
          onBlur: g,
          onClick: d ? void 0 : t,
          children: [
            c ? (0, s.jsx)("div", { className: E.backgroundOptionRing }) : null,
            (0, s.jsxs)("div", {
              className: E.backgroundOptionInner,
              children: [
                o,
                (0, s.jsxs)("div", {
                  className: E.backgroundOptionContent,
                  children: [
                    (0, s.jsx)(n, {
                      className: a()(E.backgroundIconOptionIcon),
                      color: "currentColor",
                      size: "custom",
                      width: 18,
                      height: 18,
                    }),
                    (0, s.jsx)(r.Text, {
                      className: E.backgroundOptionText,
                      color: "none",
                      variant: "text-sm/normal",
                      children: l,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        let { option: n, source: t, isAnimated: o } = e,
          [a, i] = l.useState(!1);
        if (
          (l.useEffect(() => {
            new Image().src = t;
          }, [t]),
          !o || null == n)
        )
          return (0, s.jsx)("div", {
            className: E.backgroundImageOption,
            style: { backgroundImage: "url(".concat(t, ")") },
          });
        let r = (0, j.rI)({
          userId: n.user_id,
          assetId: n.id,
          assetHash: n.asset,
          size: 720,
          canAnimate: !1,
        });
        return (0, s.jsx)("img", {
          onMouseMove: () => i(!0),
          onMouseLeave: () => i(!1),
          className: E.backgroundImageOption,
          src: a ? t : r,
          alt: n.id,
        });
      }
      function U(e) {
        let {
            option: n,
            source: l,
            selected: o = !1,
            onSelectOption: u,
            isAnimatedImage: j,
            isVideo: h,
            hotspotLocation: N,
            ...f
          } = e,
          T = (0, d.O)(),
          { analyticsLocations: _ } = (0, m.ZP)(
            g.Z.VIDEO_BACKGROUND_IMAGE_OPTION,
          ),
          S = (0, i.e7)([k.Z], () => null != N && k.Z.hasHotspot(N)),
          U = h
            ? (0, s.jsx)(p.Z, {
                className: E.backgroundImageOption,
                src: l,
                loop: !0,
                playOnHover: !0,
                muted: !0,
              })
            : (0, s.jsx)(B, {
                isAnimated: j,
                option: (0, I.rD)(n) ? n : void 0,
                source: l,
              });
        function y() {
          null != N &&
            S &&
            (x.Kw(N),
            O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
              type: b.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
              location: T.location,
              location_stack: _,
            }));
        }
        return (0, s.jsxs)(r.Clickable, {
          ...f,
          className: a()(E.backgroundOption, {
            [E.backgroundOptionSelected]: o,
          }),
          onClick: () => u(n),
          onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
              let { default: e } = await t.e("99414").then(t.bind(t, 187658));
              return (t) =>
                (0, s.jsx)(e, { ...t, backgroundOption: n, optionIsInUse: o });
            }),
          children: [
            o ? (0, s.jsx)("div", { className: E.backgroundOptionRing }) : null,
            (0, s.jsx)("div", {
              onFocus: y,
              onMouseEnter: y,
              className: E.backgroundOptionInner,
              children: U,
            }),
            h || j
              ? (0, s.jsx)("div", {
                  className: E.playIcon,
                  children: (0, s.jsx)(r.PlayIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                })
              : null,
            S &&
              (0, s.jsx)(r.TextBadge, {
                text: C.intl.string(C.t.y2b7CA),
                className: E.newTextBadge,
              }),
          ],
        });
      }
      function y() {
        return (0, s.jsxs)("div", {
          className: E.customBackgroundTooltip,
          children: [
            (0, s.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              className: E.customBackgroundTooltipIcon,
            }),
            (0, s.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: C.intl.string(C.t["T+yRY2"]),
            }),
          ],
        });
      }
      function D(e) {
        let { onClick: n, tooltipText: t, disabled: l = !1 } = e,
          o = (0, i.e7)([k.Z], () =>
            k.Z.hasHotspot(T.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW),
          );
        function a() {
          x.Kw(T.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
        }
        let c = o ? C.intl.string(C.t["5TUJOj"]) : t;
        return (0, s.jsxs)(r.TooltipContainer, {
          text: c,
          className: E.newBackgroundTooltipContainer,
          children: [
            (0, s.jsxs)(S, {
              className: E.__invalid_backgroundOptionBlurred,
              disabled: l,
              icon: r.ImagePlusIcon,
              onClick: n,
              onMouseLeave: a,
              onBlur: a,
              text: (0, s.jsxs)("div", {
                className: E.backgroundCustomInlineUpsell,
                children: [
                  (0, s.jsx)(r.NitroWheelIcon, {
                    size: "md",
                    color: "currentColor",
                    className: E.backgroundCustomInlineUpsellIcon,
                  }),
                  (0, s.jsx)("div", {
                    className: E.overflowEllipsis,
                    children: C.intl.string(C.t["1t7U8f"]),
                  }),
                ],
              }),
              children: [
                (0, s.jsx)("div", {
                  className: E.backgroundCustomInlineUpsellBackground,
                }),
                (0, s.jsx)("div", {
                  className: E.backgroundCustomInlineUpsellBackgroundDarkener,
                }),
              ],
            }),
            o &&
              (0, s.jsx)(r.TextBadge, {
                text: C.intl.string(C.t.y2b7CA),
                className: E.newTextBadge,
              }),
          ],
        });
      }
      function M(e) {
        let { onClick: n } = e,
          t = (0, d.O)(),
          { analyticsLocations: l } = (0, m.ZP)(
            g.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL,
          );
        return (
          (0, u.Z)(() => {
            O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
              type: b.cd.VIDEO_BACKGROUNDS_INLINE,
              location: t.location,
              location_stack: l,
            });
          }),
          (0, s.jsx)(D, { onClick: n, tooltipText: C.intl.string(C.t.IqE0T0) })
        );
      }
      function Z(e) {
        let { onAddBackgroundImage: n, disabled: l } = e,
          o = (0, r.useModalContext)(),
          a = l
            ? C.intl.formatToPlainString(C.t.ykGFeH, {
                maxCustomBackgrounds: 25,
              })
            : C.intl.string(C.t.Qx0tFR),
          i = [
            {
              name: C.intl.string(C.t.Sp2NFx),
              extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
          ];
        return (0, s.jsx)(D, {
          disabled: l,
          onClick: function () {
            (0, r.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  t.e("70687"),
                  t.e("83332"),
                ]).then(t.bind(t, 28130));
                return (t) =>
                  (0, s.jsx)(e, {
                    maxFileSizeBytes: f.SJ,
                    onComplete: n,
                    uploadType: _.pC.VIDEO_BACKGROUND,
                    filters: i,
                    modalTitle: C.intl.string(C.t.yG2pUl),
                    imageSpecifications: C.intl.string(C.t["72OaxM"]),
                    uploadOptionTitle: C.intl.string(C.t.xsW8u7),
                    showUpsellHeader: !0,
                    ...t,
                  });
              },
              { contextKey: o },
            );
          },
          tooltipText: a,
        });
      }
      function A(e) {
        let {
            canUseCustomBackgrounds: n,
            customBackgroundOptions: t,
            selectedOption: o,
            onSelectOption: a,
            onUpsellClick: i,
            onAddBackgroundImage: c,
            smallerOptions: d,
          } = e,
          u = l.useMemo(
            () =>
              t.sort((e, n) =>
                null == e.last_used || null == n.last_used
                  ? h.default.compare(n.id, e.id)
                  : new Date(n.last_used).getTime() -
                    new Date(e.last_used).getTime(),
              ),
            [t],
          ),
          p = u.length >= 25,
          { analyticsLocations: x } = (0, m.ZP)(g.Z.VIDEO_BACKGROUND_OPTIONS),
          k = Object.values((0, N.Z)()).sort((e, n) => f.E1[e.id] - f.E1[n.id]);
        return (0, s.jsx)(m.Gt, {
          value: x,
          children: (0, s.jsxs)("div", {
            className: d ? E.backgroundOptionsSmall : E.backgroundOptionsLarge,
            children: [
              (0, s.jsx)(S, {
                selected: null == o,
                icon: r.DenyIcon,
                onClick: () => a(null),
                text: C.intl.string(C.t.fUdMeH),
              }),
              (0, s.jsx)(S, {
                className: E.__invalid_backgroundOptionBlurred,
                selected: o === f.f7,
                icon: r.BlurBackgroundIcon,
                onClick: () => a(f.f7),
                text: C.intl.string(C.t.LhSyLy),
                children: (0, s.jsx)("div", {
                  className: E.backgroundOptionBlurBackground,
                }),
              }),
              n
                ? (0, s.jsx)(Z, { onAddBackgroundImage: c, disabled: p })
                : (0, s.jsx)(M, { onClick: i }),
              u.map((e) =>
                (0, s.jsx)(
                  r.Tooltip,
                  {
                    text: (0, s.jsx)(y, {}),
                    "aria-label": C.intl.string(C.t["T+yRY2"]),
                    children: (n) => {
                      let t = (0, j.rI)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: 720,
                      });
                      return null == t
                        ? null
                        : (0, l.createElement)(U, {
                            ...n,
                            key: e.id,
                            option: e,
                            source: t,
                            selected: (0, I.rD)(o) && o.id === e.id,
                            onSelectOption: a,
                            isVideo: (0, j.ay)(e.asset),
                            isAnimatedImage: (0, j.xR)(e.asset),
                          });
                    },
                  },
                  e.id,
                ),
              ),
              k.map((e) => {
                let n = !0 === e.isVideo;
                return (0, s.jsx)(
                  r.Tooltip,
                  {
                    text: e.name,
                    "aria-label": e.name,
                    children: (t) =>
                      (0, l.createElement)(U, {
                        ...t,
                        key: e.id,
                        option: e.id,
                        source: e.source,
                        selected: o === e.id,
                        onSelectOption: a,
                        isVideo: n,
                        isAnimatedImage: !1,
                        hotspotLocation: e.hotspotLocation,
                      }),
                  },
                  e.id,
                );
              }),
            ],
          }),
        });
      }
    },
    747545: function (e, n, t) {
      t.d(n, {
        S: function () {
          return T;
        },
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var s = t(200651),
        l = t(192379),
        o = t(120356),
        a = t.n(o),
        i = t(209739),
        r = t.n(i),
        c = t(442837),
        d = t(846519),
        u = t(481060),
        g = t(846027),
        m = t(579806),
        p = t(906732),
        x = t(695346),
        k = t(716161),
        O = t(938117),
        j = t(131951),
        h = t(626135),
        I = t(358085),
        N = t(981631),
        f = t(388032),
        v = t(695140);
      function T() {
        let [e, n] = l.useState(!1),
          t = (0, c.e7)([j.Z], () => j.Z.isMediaFilterSettingLoading());
        return (l.useEffect(() => {
          let e = new d.V7();
          return (
            t
              ? e.start(150, () => {
                  n(!0);
                })
              : (e.stop(), n(!1)),
            () => e.stop()
          );
        }, [t]),
        e)
          ? (0, s.jsx)("div", {
              className: v.filterLoadingIndicator,
              children: (0, s.jsx)(u.Spinner, {}),
            })
          : null;
      }
      function _(e) {
        let {
            hideDeviceSelector: n = !1,
            hideDeviceHeader: t = !1,
            hideCameraSettingsLink: o = !1,
            onLearnMore: i,
            selectedBackgroundOption: d,
            onSelectBackgroundOption: T,
            renderCamera: _,
            hidePreviewToggle: b = !1,
            showSmallBackgroundOptions: C = !1,
          } = e,
          { analyticsLocations: E } = (0, p.ZP)(),
          S = (0, c.e7)([j.Z], () => j.Z.getVideoDeviceId()),
          B = (0, c.Wu)([j.Z], () => Object.values(j.Z.getVideoDevices())),
          U = x.qF.useSetting(),
          y = B.map((e) => {
            let { id: n, name: t } = e;
            return { value: n, label: t };
          });
        return (
          l.useEffect(() => {
            (0, k.XV)();
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              _(S),
              j.Z.isEnabled()
                ? null
                : (0, s.jsx)(u.Text, {
                    className: v.permissionWarning,
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t.stagfH, {
                      onEnableClick: () => g.Z.enable(!0),
                    }),
                  }),
              b
                ? null
                : (0, s.jsx)(u.FormSwitch, {
                    className: v.previewToggle,
                    note: f.intl.string(f.t.WNbX4O),
                    onChange: (e) => {
                      x.qF.updateSetting(e),
                        h.default.track(N.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                          always_preview_video: e,
                        });
                    },
                    value: U,
                    hideBorder: !0,
                    children: (0, s.jsx)("div", {
                      className: v.cameraPreviewTitle,
                      children: f.intl.string(f.t["3Ppr1t"]),
                    }),
                  }),
              n
                ? null
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      t
                        ? null
                        : (0, s.jsx)(u.Heading, {
                            className: v.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: f.intl.string(f.t.FsQ3OT),
                          }),
                      (0, s.jsx)(u.SingleSelect, {
                        placeholder: f.intl.string(f.t["t9eQ/v"]),
                        className: a()(v.selector, { [v.selectorNoHeader]: t }),
                        options: y,
                        value: S,
                        onChange: (e) => g.Z.setVideoDevice(e),
                      }),
                      !o &&
                        !!(0, I.isWindows)() &&
                        !!I.isPlatformEmbedded &&
                        r().satisfies(m.Z.os.release, ">=10.0.22000") &&
                        (0, s.jsx)(u.FormText, {
                          className: v.cameraDeeplink,
                          children: f.intl.format(f.t.aJYgRk, {
                            onCameraSettingsClick: () => {
                              window.open("ms-settings:camera"),
                                h.default.track(
                                  N.rMx.SYSTEM_CAMERA_SETTINGS_OPENED,
                                  { location_stack: E },
                                );
                            },
                          }),
                        }),
                    ],
                  }),
              (0, s.jsx)(O.Z, {
                onLearnMore: i,
                selectedBackgroundOption: d,
                onSelectBackgroundOption: T,
                currentDeviceId: S,
                smallerBackgroundOptions: C,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=5761debf0aa07b8615ef.js.map
