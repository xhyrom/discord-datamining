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
      var l = t(200651),
        s = t(192379),
        o = t(442837),
        i = t(481060),
        a = t(2052),
        r = t(594174),
        c = t(74538),
        d = t(716161),
        u = t(634041),
        g = t(647177),
        m = t(672339),
        p = t(898531),
        x = t(636188),
        O = t(678916),
        k = t(981631),
        j = t(869783),
        h = t(388032),
        I = t(507588);
      function N(e) {
        let {
            onLearnMore: n,
            selectedBackgroundOption: N,
            onSelectBackgroundOption: f,
            currentDeviceId: v,
            smallerBackgroundOptions: b,
          } = e,
          T = (0, o.e7)([r.default], () => r.default.getCurrentUser()),
          [_, C] = s.useState(null),
          E = (0, p.Z)(),
          B = c.ZP.canUseCustomBackgrounds(T),
          S = (0, o.cj)([u.Z], () => (B ? u.Z.videoFilterAssets : {})),
          U = s.useMemo(
            () => Object.values(S).filter((e) => e.type === O.xV.BACKGROUND),
            [S],
          ),
          y = (0, a.O)(),
          D = {
            isVideoBackgroundSupported: E,
            onSelectBackgroundOption: f,
            selectedBackgroundOption: N,
          },
          M = s.useRef(D);
        s.useEffect(() => {
          M.current = D;
        }),
          s.useEffect(() => {
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
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(i.Heading, {
                  className: I.spacingTop24,
                  variant: "eyebrow",
                  color: "header-secondary",
                  children: h.intl.string(h.t.lZTUPj),
                }),
                null != _
                  ? (0, l.jsx)(i.FormErrorBlock, {
                      className: I.videoBackgroundError,
                      children: _,
                    })
                  : null,
                (0, l.jsx)(x.Z, {
                  canUseCustomBackgrounds: B,
                  customBackgroundOptions: U,
                  selectedOption: N,
                  onSelectOption: Z,
                  onUpsellClick: () => {
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("87200")
                        .then(t.bind(t, 592163));
                      return (t) =>
                        (0, l.jsx)(e, {
                          ...t,
                          onLearnMore: n,
                          analyticsSource: {
                            ...y.location,
                            object: k.qAy.BUTTON_CTA,
                          },
                        });
                    });
                  },
                  onAddBackgroundImage: function (e, n) {
                    let t =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    return new Promise(async (l) => {
                      try {
                        let l = await (0, d.Ff)(e, O.xV.BACKGROUND);
                        Z(l), (0, g.g5)(l, n.type === j.m.MP4, t), C(null);
                      } catch (e) {
                        C(e.message);
                      }
                      l();
                    });
                  },
                  smallerOptions: b,
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
      var l = t(200651),
        s = t(192379),
        o = t(120356),
        i = t.n(o),
        a = t(442837),
        r = t(481060),
        c = t(239091),
        d = t(2052),
        u = t(493773),
        g = t(100527),
        m = t(906732),
        p = t(70097),
        x = t(142497),
        O = t(810788),
        k = t(626135),
        j = t(768581),
        h = t(709054),
        I = t(647177),
        N = t(63985),
        f = t(678916),
        v = t(981631),
        b = t(190378),
        T = t(486324),
        _ = t(474936),
        C = t(388032),
        E = t(343896);
      function B(e) {
        let {
          icon: n,
          onClick: t,
          text: s,
          children: o,
          className: a,
          selected: c = !1,
          disabled: d = !1,
          onMouseLeave: u,
          onBlur: g,
        } = e;
        return (0, l.jsxs)(r.Clickable, {
          className: i()(a, E.backgroundOption, {
            [E.backgroundOptionSelected]: c,
            [E.backgroundOptionDisabled]: d,
          }),
          onMouseLeave: u,
          onBlur: g,
          onClick: d ? void 0 : t,
          children: [
            c ? (0, l.jsx)("div", { className: E.backgroundOptionRing }) : null,
            (0, l.jsxs)("div", {
              className: E.backgroundOptionInner,
              children: [
                o,
                (0, l.jsxs)("div", {
                  className: E.backgroundOptionContent,
                  children: [
                    (0, l.jsx)(n, {
                      className: i()(E.backgroundIconOptionIcon),
                      color: "currentColor",
                      size: "custom",
                      width: 18,
                      height: 18,
                    }),
                    (0, l.jsx)(r.Text, {
                      className: E.backgroundOptionText,
                      color: "none",
                      variant: "text-sm/normal",
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function S(e) {
        let { option: n, source: t, isAnimated: o } = e,
          [i, a] = s.useState(!1);
        if (
          (s.useEffect(() => {
            new Image().src = t;
          }, [t]),
          !o || null == n)
        )
          return (0, l.jsx)("div", {
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
        return (0, l.jsx)("img", {
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          className: E.backgroundImageOption,
          src: i ? t : r,
          alt: n.id,
        });
      }
      function U(e) {
        let {
            option: n,
            source: s,
            selected: o = !1,
            onSelectOption: u,
            isAnimatedImage: j,
            isVideo: h,
            hotspotLocation: N,
            ...f
          } = e,
          b = (0, d.O)(),
          { analyticsLocations: T } = (0, m.ZP)(
            g.Z.VIDEO_BACKGROUND_IMAGE_OPTION,
          ),
          B = (0, a.e7)([O.Z], () => null != N && O.Z.hasHotspot(N)),
          U = h
            ? (0, l.jsx)(p.Z, {
                className: E.backgroundImageOption,
                src: s,
                loop: !0,
                playOnHover: !0,
                muted: !0,
              })
            : (0, l.jsx)(S, {
                isAnimated: j,
                option: (0, I.rD)(n) ? n : void 0,
                source: s,
              });
        function y() {
          null != N &&
            B &&
            (x.Kw(N),
            k.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
              type: _.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
              location: b.location,
              location_stack: T,
            }));
        }
        return (0, l.jsxs)(r.Clickable, {
          ...f,
          className: i()(E.backgroundOption, {
            [E.backgroundOptionSelected]: o,
          }),
          onClick: () => u(n),
          onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
              let { default: e } = await t.e("99414").then(t.bind(t, 187658));
              return (t) =>
                (0, l.jsx)(e, { ...t, backgroundOption: n, optionIsInUse: o });
            }),
          children: [
            o ? (0, l.jsx)("div", { className: E.backgroundOptionRing }) : null,
            (0, l.jsx)("div", {
              onFocus: y,
              onMouseEnter: y,
              className: E.backgroundOptionInner,
              children: U,
            }),
            h || j
              ? (0, l.jsx)("div", {
                  className: E.playIcon,
                  children: (0, l.jsx)(r.PlayIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                })
              : null,
            B &&
              (0, l.jsx)(r.TextBadge, {
                text: C.intl.string(C.t.y2b7CA),
                className: E.newTextBadge,
              }),
          ],
        });
      }
      function y() {
        return (0, l.jsxs)("div", {
          className: E.customBackgroundTooltip,
          children: [
            (0, l.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              className: E.customBackgroundTooltipIcon,
            }),
            (0, l.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: C.intl.string(C.t["T+yRY2"]),
            }),
          ],
        });
      }
      function D(e) {
        let { onClick: n, tooltipText: t, disabled: s = !1 } = e,
          o = (0, a.e7)([O.Z], () =>
            O.Z.hasHotspot(b.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW),
          );
        function i() {
          x.Kw(b.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
        }
        let c = o ? C.intl.string(C.t["5TUJOj"]) : t;
        return (0, l.jsxs)(r.TooltipContainer, {
          text: c,
          className: E.newBackgroundTooltipContainer,
          children: [
            (0, l.jsxs)(B, {
              className: E.__invalid_backgroundOptionBlurred,
              disabled: s,
              icon: r.ImagePlusIcon,
              onClick: n,
              onMouseLeave: i,
              onBlur: i,
              text: (0, l.jsxs)("div", {
                className: E.backgroundCustomInlineUpsell,
                children: [
                  (0, l.jsx)(r.NitroWheelIcon, {
                    size: "md",
                    color: "currentColor",
                    className: E.backgroundCustomInlineUpsellIcon,
                  }),
                  (0, l.jsx)("div", {
                    className: E.overflowEllipsis,
                    children: C.intl.string(C.t["1t7U8f"]),
                  }),
                ],
              }),
              children: [
                (0, l.jsx)("div", {
                  className: E.backgroundCustomInlineUpsellBackground,
                }),
                (0, l.jsx)("div", {
                  className: E.backgroundCustomInlineUpsellBackgroundDarkener,
                }),
              ],
            }),
            o &&
              (0, l.jsx)(r.TextBadge, {
                text: C.intl.string(C.t.y2b7CA),
                className: E.newTextBadge,
              }),
          ],
        });
      }
      function M(e) {
        let { onClick: n } = e,
          t = (0, d.O)(),
          { analyticsLocations: s } = (0, m.ZP)(
            g.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL,
          );
        return (
          (0, u.Z)(() => {
            k.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
              type: _.cd.VIDEO_BACKGROUNDS_INLINE,
              location: t.location,
              location_stack: s,
            });
          }),
          (0, l.jsx)(D, { onClick: n, tooltipText: C.intl.string(C.t.IqE0T0) })
        );
      }
      function Z(e) {
        let { onAddBackgroundImage: n, disabled: s } = e,
          o = (0, r.useModalContext)(),
          i = s
            ? C.intl.formatToPlainString(C.t.ykGFeH, {
                maxCustomBackgrounds: 25,
              })
            : C.intl.string(C.t.Qx0tFR),
          a = [
            {
              name: C.intl.string(C.t.Sp2NFx),
              extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
          ];
        return (0, l.jsx)(D, {
          disabled: s,
          onClick: function () {
            (0, r.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  t.e("70687"),
                  t.e("19890"),
                ]).then(t.bind(t, 28130));
                return (t) =>
                  (0, l.jsx)(e, {
                    maxFileSizeBytes: f.SJ,
                    onComplete: n,
                    uploadType: T.pC.VIDEO_BACKGROUND,
                    filters: a,
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
          tooltipText: i,
        });
      }
      function A(e) {
        let {
            canUseCustomBackgrounds: n,
            customBackgroundOptions: t,
            selectedOption: o,
            onSelectOption: i,
            onUpsellClick: a,
            onAddBackgroundImage: c,
            smallerOptions: d,
          } = e,
          u = s.useMemo(
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
          O = Object.values((0, N.Z)()).sort((e, n) => f.E1[e.id] - f.E1[n.id]);
        return (0, l.jsx)(m.Gt, {
          value: x,
          children: (0, l.jsxs)("div", {
            className: d ? E.backgroundOptionsSmall : E.backgroundOptionsLarge,
            children: [
              (0, l.jsx)(B, {
                selected: null == o,
                icon: r.DenyIcon,
                onClick: () => i(null),
                text: C.intl.string(C.t.fUdMeH),
              }),
              (0, l.jsx)(B, {
                className: E.__invalid_backgroundOptionBlurred,
                selected: o === f.f7,
                icon: r.BlurBackgroundIcon,
                onClick: () => i(f.f7),
                text: C.intl.string(C.t.LhSyLy),
                children: (0, l.jsx)("div", {
                  className: E.backgroundOptionBlurBackground,
                }),
              }),
              n
                ? (0, l.jsx)(Z, { onAddBackgroundImage: c, disabled: p })
                : (0, l.jsx)(M, { onClick: a }),
              u.map((e) =>
                (0, l.jsx)(
                  r.Tooltip,
                  {
                    text: (0, l.jsx)(y, {}),
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
                        : (0, s.createElement)(U, {
                            ...n,
                            key: e.id,
                            option: e,
                            source: t,
                            selected: (0, I.rD)(o) && o.id === e.id,
                            onSelectOption: i,
                            isVideo: (0, j.ay)(e.asset),
                            isAnimatedImage: (0, j.xR)(e.asset),
                          });
                    },
                  },
                  e.id,
                ),
              ),
              O.map((e) => {
                let n = !0 === e.isVideo;
                return (0, l.jsx)(
                  r.Tooltip,
                  {
                    text: e.name,
                    "aria-label": e.name,
                    children: (t) =>
                      (0, s.createElement)(U, {
                        ...t,
                        key: e.id,
                        option: e.id,
                        source: e.source,
                        selected: o === e.id,
                        onSelectOption: i,
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
          return h;
        },
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var l = t(200651),
        s = t(192379),
        o = t(120356),
        i = t.n(o),
        a = t(442837),
        r = t(846519),
        c = t(481060),
        d = t(846027),
        u = t(695346),
        g = t(716161),
        m = t(938117),
        p = t(131951),
        x = t(626135),
        O = t(981631),
        k = t(388032),
        j = t(222172);
      function h() {
        let [e, n] = s.useState(!1),
          t = (0, a.e7)([p.Z], () => p.Z.isMediaFilterSettingLoading());
        return (s.useEffect(() => {
          let e = new r.V7();
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
          ? (0, l.jsx)("div", {
              className: j.filterLoadingIndicator,
              children: (0, l.jsx)(c.Spinner, {}),
            })
          : null;
      }
      function I(e) {
        let {
            hideDeviceSelector: n = !1,
            hideDeviceHeader: t = !1,
            onLearnMore: o,
            selectedBackgroundOption: r,
            onSelectBackgroundOption: h,
            renderCamera: I,
            hidePreviewToggle: N = !1,
            showSmallBackgroundOptions: f = !1,
          } = e,
          v = (0, a.e7)([p.Z], () => p.Z.getVideoDeviceId()),
          b = (0, a.Wu)([p.Z], () => Object.values(p.Z.getVideoDevices())),
          T = u.qF.useSetting(),
          _ = b.map((e) => {
            let { id: n, name: t } = e;
            return { value: n, label: t };
          });
        return (
          s.useEffect(() => {
            (0, g.XV)();
          }, []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              I(v),
              p.Z.isEnabled()
                ? null
                : (0, l.jsx)(c.Text, {
                    className: j.permissionWarning,
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: k.intl.format(k.t.stagfH, {
                      onEnableClick: () => d.Z.enable(!0),
                    }),
                  }),
              N
                ? null
                : (0, l.jsx)(c.FormSwitch, {
                    className: j.previewToggle,
                    note: k.intl.string(k.t.WNbX4O),
                    onChange: (e) => {
                      u.qF.updateSetting(e),
                        x.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                          always_preview_video: e,
                        });
                    },
                    value: T,
                    hideBorder: !0,
                    children: (0, l.jsx)("div", {
                      className: j.cameraPreviewTitle,
                      children: k.intl.string(k.t["3Ppr1t"]),
                    }),
                  }),
              n
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      t
                        ? null
                        : (0, l.jsx)(c.Heading, {
                            className: j.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: k.intl.string(k.t.FsQ3OT),
                          }),
                      (0, l.jsx)(c.SingleSelect, {
                        placeholder: k.intl.string(k.t["t9eQ/v"]),
                        className: i()(j.selector, { [j.selectorNoHeader]: t }),
                        options: _,
                        value: v,
                        onChange: (e) => d.Z.setVideoDevice(e),
                      }),
                    ],
                  }),
              (0, l.jsx)(m.Z, {
                onLearnMore: o,
                selectedBackgroundOption: r,
                onSelectBackgroundOption: h,
                currentDeviceId: v,
                smallerBackgroundOptions: f,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=44ddd8088b082076a4c8.js.map
