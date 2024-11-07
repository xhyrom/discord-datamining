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
        I = t(606472);
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
          y = (0, a.O)();
        s.useEffect(() => {
          E
            ? (0, m.FU)(N, v, { track: !1 }).catch(() => f(null))
            : null != N && f(null);
        }, [v]);
        let D = (e) => {
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
                  onSelectOption: D,
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
                        D(l), (0, g.g5)(l, n.type === j.m.MP4, t), C(null);
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
          return Z;
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
        u = t(100527),
        g = t(906732),
        m = t(70097),
        p = t(142497),
        x = t(810788),
        O = t(626135),
        k = t(768581),
        j = t(709054),
        h = t(647177),
        I = t(63985),
        N = t(678916),
        f = t(981631),
        v = t(190378),
        b = t(486324),
        T = t(474936),
        _ = t(388032),
        C = t(493706);
      function E(e) {
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
          className: i()(a, C.backgroundOption, {
            [C.backgroundOptionSelected]: c,
            [C.backgroundOptionDisabled]: d,
          }),
          onMouseLeave: u,
          onBlur: g,
          onClick: d ? void 0 : t,
          children: [
            c ? (0, l.jsx)("div", { className: C.backgroundOptionRing }) : null,
            (0, l.jsxs)("div", {
              className: C.backgroundOptionInner,
              children: [
                o,
                (0, l.jsxs)("div", {
                  className: C.backgroundOptionContent,
                  children: [
                    (0, l.jsx)(n, {
                      className: i()(C.backgroundIconOptionIcon),
                      color: "currentColor",
                      size: "custom",
                      width: 18,
                      height: 18,
                    }),
                    (0, l.jsx)(r.Text, {
                      className: C.backgroundOptionText,
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
      function B(e) {
        let { option: n, source: t, isAnimated: o } = e,
          [i, a] = s.useState(!1);
        if (
          (s.useEffect(() => {
            new Image().src = t;
          }, [t]),
          !o || null == n)
        )
          return (0, l.jsx)("div", {
            className: C.backgroundImageOption,
            style: { backgroundImage: "url(".concat(t, ")") },
          });
        let r = (0, k.rI)({
          userId: n.user_id,
          assetId: n.id,
          assetHash: n.asset,
          size: 720,
          canAnimate: !1,
        });
        return (0, l.jsx)("img", {
          onMouseMove: () => a(!0),
          onMouseLeave: () => a(!1),
          className: C.backgroundImageOption,
          src: i ? t : r,
          alt: n.id,
        });
      }
      function S(e) {
        let {
            option: n,
            source: s,
            selected: o = !1,
            onSelectOption: k,
            isAnimatedImage: j,
            isVideo: I,
            hotspotLocation: N,
            ...v
          } = e,
          b = (0, d.O)(),
          { analyticsLocations: E } = (0, g.ZP)(
            u.Z.VIDEO_BACKGROUND_IMAGE_OPTION,
          ),
          S = (0, a.e7)([x.Z], () => null != N && x.Z.hasHotspot(N)),
          U = I
            ? (0, l.jsx)(m.Z, {
                className: C.backgroundImageOption,
                src: s,
                loop: !0,
                playOnHover: !0,
                muted: !0,
              })
            : (0, l.jsx)(B, {
                isAnimated: j,
                option: (0, h.rD)(n) ? n : void 0,
                source: s,
              });
        function y() {
          null != N &&
            S &&
            (p.Kw(N),
            O.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
              type: T.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
              location: b.location,
              location_stack: E,
            }));
        }
        return (0, l.jsxs)(r.Clickable, {
          ...v,
          className: i()(C.backgroundOption, {
            [C.backgroundOptionSelected]: o,
          }),
          onClick: () => k(n),
          onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
              let { default: e } = await t.e("99414").then(t.bind(t, 187658));
              return (t) =>
                (0, l.jsx)(e, { ...t, backgroundOption: n, optionIsInUse: o });
            }),
          children: [
            o ? (0, l.jsx)("div", { className: C.backgroundOptionRing }) : null,
            (0, l.jsx)("div", {
              onFocus: y,
              onMouseEnter: y,
              className: C.backgroundOptionInner,
              children: U,
            }),
            I || j
              ? (0, l.jsx)("div", {
                  className: C.playIcon,
                  children: (0, l.jsx)(r.PlayIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                })
              : null,
            S &&
              (0, l.jsx)(r.TextBadge, {
                text: _.intl.string(_.t.y2b7CA),
                className: C.newTextBadge,
              }),
          ],
        });
      }
      function U() {
        return (0, l.jsxs)("div", {
          className: C.customBackgroundTooltip,
          children: [
            (0, l.jsx)(r.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              className: C.customBackgroundTooltipIcon,
            }),
            (0, l.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: _.intl.string(_.t["T+yRY2"]),
            }),
          ],
        });
      }
      function y(e) {
        let { onClick: n, tooltipText: t, disabled: s = !1 } = e,
          o = (0, a.e7)([x.Z], () =>
            x.Z.hasHotspot(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW),
          );
        function i() {
          p.Kw(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
        }
        let c = o ? _.intl.string(_.t["5TUJOj"]) : t;
        return (0, l.jsxs)(r.TooltipContainer, {
          text: c,
          className: C.newBackgroundTooltipContainer,
          children: [
            (0, l.jsxs)(E, {
              className: C.__invalid_backgroundOptionBlurred,
              disabled: s,
              icon: r.ImagePlusIcon,
              onClick: n,
              onMouseLeave: i,
              onBlur: i,
              text: (0, l.jsxs)("div", {
                className: C.backgroundCustomInlineUpsell,
                children: [
                  (0, l.jsx)(r.NitroWheelIcon, {
                    size: "md",
                    color: "currentColor",
                    className: C.backgroundCustomInlineUpsellIcon,
                  }),
                  (0, l.jsx)("div", {
                    className: C.overflowEllipsis,
                    children: _.intl.string(_.t["1t7U8f"]),
                  }),
                ],
              }),
              children: [
                (0, l.jsx)("div", {
                  className: C.backgroundCustomInlineUpsellBackground,
                }),
                (0, l.jsx)("div", {
                  className: C.backgroundCustomInlineUpsellBackgroundDarkener,
                }),
              ],
            }),
            o &&
              (0, l.jsx)(r.TextBadge, {
                text: _.intl.string(_.t.y2b7CA),
                className: C.newTextBadge,
              }),
          ],
        });
      }
      function D(e) {
        let { onClick: n } = e,
          t = (0, d.O)(),
          { analyticsLocations: o } = (0, g.ZP)(
            u.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL,
          );
        return (
          s.useEffect(() => {
            O.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
              type: T.cd.VIDEO_BACKGROUNDS_INLINE,
              location: t.location,
              location_stack: o,
            });
          }, []),
          (0, l.jsx)(y, { onClick: n, tooltipText: _.intl.string(_.t.IqE0T0) })
        );
      }
      function M(e) {
        let { onAddBackgroundImage: n, disabled: s } = e,
          o = (0, r.useModalContext)(),
          i = s
            ? _.intl.formatToPlainString(_.t.ykGFeH, {
                maxCustomBackgrounds: 25,
              })
            : _.intl.string(_.t.Qx0tFR),
          a = [
            {
              name: _.intl.string(_.t.Sp2NFx),
              extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
          ];
        return (0, l.jsx)(y, {
          disabled: s,
          onClick: function () {
            (0, r.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  t.e("70687"),
                  t.e("89462"),
                ]).then(t.bind(t, 28130));
                return (t) =>
                  (0, l.jsx)(e, {
                    maxFileSizeBytes: N.SJ,
                    onComplete: n,
                    uploadType: b.pC.VIDEO_BACKGROUND,
                    filters: a,
                    modalTitle: _.intl.string(_.t.yG2pUl),
                    imageSpecifications: _.intl.string(_.t["72OaxM"]),
                    uploadOptionTitle: _.intl.string(_.t.xsW8u7),
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
      function Z(e) {
        let {
            canUseCustomBackgrounds: n,
            customBackgroundOptions: t,
            selectedOption: o,
            onSelectOption: i,
            onUpsellClick: a,
            onAddBackgroundImage: c,
            smallerOptions: d,
          } = e,
          m = s.useMemo(
            () =>
              t.sort((e, n) =>
                null == e.last_used || null == n.last_used
                  ? j.default.compare(n.id, e.id)
                  : new Date(n.last_used).getTime() -
                    new Date(e.last_used).getTime(),
              ),
            [t],
          ),
          p = m.length >= 25,
          { analyticsLocations: x } = (0, g.ZP)(u.Z.VIDEO_BACKGROUND_OPTIONS),
          O = Object.values((0, I.Z)()).sort((e, n) => N.E1[e.id] - N.E1[n.id]);
        return (0, l.jsx)(g.Gt, {
          value: x,
          children: (0, l.jsxs)("div", {
            className: d ? C.backgroundOptionsSmall : C.backgroundOptionsLarge,
            children: [
              (0, l.jsx)(E, {
                selected: null == o,
                icon: r.DenyIcon,
                onClick: () => i(null),
                text: _.intl.string(_.t.fUdMeH),
              }),
              (0, l.jsx)(E, {
                className: C.__invalid_backgroundOptionBlurred,
                selected: o === N.f7,
                icon: r.BlurBackgroundIcon,
                onClick: () => i(N.f7),
                text: _.intl.string(_.t.LhSyLy),
                children: (0, l.jsx)("div", {
                  className: C.backgroundOptionBlurBackground,
                }),
              }),
              n
                ? (0, l.jsx)(M, { onAddBackgroundImage: c, disabled: p })
                : (0, l.jsx)(D, { onClick: a }),
              m.map((e) =>
                (0, l.jsx)(
                  r.Tooltip,
                  {
                    text: (0, l.jsx)(U, {}),
                    "aria-label": _.intl.string(_.t["T+yRY2"]),
                    children: (n) => {
                      let t = (0, k.rI)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: 720,
                      });
                      return null == t
                        ? null
                        : (0, s.createElement)(S, {
                            ...n,
                            key: e.id,
                            option: e,
                            source: t,
                            selected: (0, h.rD)(o) && o.id === e.id,
                            onSelectOption: i,
                            isVideo: (0, k.ay)(e.asset),
                            isAnimatedImage: (0, k.xR)(e.asset),
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
                      (0, s.createElement)(S, {
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
        j = t(255284);
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
//# sourceMappingURL=81e9d7571ef54c28ee9c.js.map
