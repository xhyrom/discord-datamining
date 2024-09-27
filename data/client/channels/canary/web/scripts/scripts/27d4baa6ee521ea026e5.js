"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5528"],
  {
    794258: function (e) {
      e.exports = "/assets/cfe6481f9f7d6242a76b.png";
    },
    938117: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return C;
        },
      }),
        s(47120);
      var t = s(735250),
        a = s(470079),
        o = s(442837),
        l = s(481060),
        i = s(2052),
        c = s(594174),
        r = s(74538),
        d = s(716161),
        u = s(634041),
        _ = s(647177),
        E = s(672339),
        O = s(898531),
        g = s(636188),
        m = s(678916),
        I = s(981631),
        p = s(869783),
        x = s(689938),
        A = s(266129);
      function C(e) {
        let {
            onLearnMore: n,
            selectedBackgroundOption: C,
            onSelectBackgroundOption: N,
            currentDeviceId: M,
            smallerBackgroundOptions: R,
          } = e,
          k = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
          [D, j] = a.useState(null),
          T = (0, O.Z)(),
          h = r.ZP.canUseCustomBackgrounds(k),
          f = (0, o.cj)([u.Z], () => (h ? u.Z.videoFilterAssets : {})),
          U = a.useMemo(
            () => Object.values(f).filter((e) => e.type === m.xV.BACKGROUND),
            [f],
          ),
          B = (0, i.O)();
        a.useEffect(() => {
          T
            ? (0, E.FU)(C, M, { track: !1 }).catch(() => N(null))
            : null != C && N(null);
        }, [M]);
        let v = (e) => {
          N(e),
            (0, E.FU)(e, M, { location: B.location })
              .then(() => j(null))
              .catch(() => {
                j(x.Z.Messages.VIDEO_BACKGROUND_ERROR_APPLY),
                  (0, E.FU)(null, M, { location: B.location });
              });
        };
        return T
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(l.Heading, {
                  className: A.spacingTop24,
                  variant: "eyebrow",
                  color: "header-secondary",
                  children: x.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND,
                }),
                null != D
                  ? (0, t.jsx)(l.FormErrorBlock, {
                      className: A.videoBackgroundError,
                      children: D,
                    })
                  : null,
                (0, t.jsx)(g.Z, {
                  canUseCustomBackgrounds: h,
                  customBackgroundOptions: U,
                  selectedOption: C,
                  onSelectOption: v,
                  onUpsellClick: () => {
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await s
                        .e("87200")
                        .then(s.bind(s, 592163));
                      return (s) =>
                        (0, t.jsx)(e, {
                          ...s,
                          onLearnMore: n,
                          analyticsSource: {
                            ...B.location,
                            object: I.qAy.BUTTON_CTA,
                          },
                        });
                    });
                  },
                  onAddBackgroundImage: function (e, n) {
                    let s =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    return new Promise(async (t) => {
                      try {
                        let t = await (0, d.Ff)(e, m.xV.BACKGROUND);
                        v(t), (0, _.g5)(t, n.type === p.m.MP4, s), j(null);
                      } catch (e) {
                        j(e.message);
                      }
                      t();
                    });
                  },
                  smallerOptions: R,
                }),
              ],
            })
          : null;
      }
    },
    636188: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return Z;
        },
      }),
        s(47120);
      var t = s(735250),
        a = s(470079),
        o = s(120356),
        l = s.n(o),
        i = s(442837),
        c = s(481060),
        r = s(239091),
        d = s(2052),
        u = s(100527),
        _ = s(906732),
        E = s(70097),
        O = s(142497),
        g = s(810788),
        m = s(626135),
        I = s(768581),
        p = s(709054),
        x = s(647177),
        A = s(63985),
        C = s(678916),
        N = s(981631),
        M = s(190378),
        R = s(486324),
        k = s(474936),
        D = s(689938),
        j = s(793532);
      function T(e) {
        let {
          icon: n,
          onClick: s,
          text: a,
          children: o,
          className: i,
          selected: r = !1,
          disabled: d = !1,
          onMouseLeave: u,
          onBlur: _,
        } = e;
        return (0, t.jsxs)(c.Clickable, {
          className: l()(i, j.backgroundOption, {
            [j.backgroundOptionSelected]: r,
            [j.backgroundOptionDisabled]: d,
          }),
          onMouseLeave: u,
          onBlur: _,
          onClick: d ? void 0 : s,
          children: [
            r ? (0, t.jsx)("div", { className: j.backgroundOptionRing }) : null,
            (0, t.jsxs)("div", {
              className: j.backgroundOptionInner,
              children: [
                o,
                (0, t.jsxs)("div", {
                  className: j.backgroundOptionContent,
                  children: [
                    (0, t.jsx)(n, {
                      className: l()(j.backgroundIconOptionIcon),
                      color: "currentColor",
                      size: "custom",
                      width: 18,
                      height: 18,
                    }),
                    (0, t.jsx)(c.Text, {
                      className: j.backgroundOptionText,
                      color: "none",
                      variant: "text-sm/normal",
                      children: a,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function h(e) {
        let { option: n, source: s, isAnimated: o } = e,
          [l, i] = a.useState(!1);
        if (
          (a.useEffect(() => {
            new Image().src = s;
          }, [s]),
          !o || null == n)
        )
          return (0, t.jsx)("div", {
            className: j.backgroundImageOption,
            style: { backgroundImage: "url(".concat(s, ")") },
          });
        let c = (0, I.rI)({
          userId: n.user_id,
          assetId: n.id,
          assetHash: n.asset,
          size: 720,
          canAnimate: !1,
        });
        return (0, t.jsx)("img", {
          onMouseMove: () => i(!0),
          onMouseLeave: () => i(!1),
          className: j.backgroundImageOption,
          src: l ? s : c,
          alt: n.id,
        });
      }
      function f(e) {
        let {
            option: n,
            source: a,
            selected: o = !1,
            onSelectOption: I,
            isAnimatedImage: p,
            isVideo: A,
            hotspotLocation: C,
            ...M
          } = e,
          R = (0, d.O)(),
          { analyticsLocations: T } = (0, _.ZP)(
            u.Z.VIDEO_BACKGROUND_IMAGE_OPTION,
          ),
          f = (0, i.e7)([g.Z], () => null != C && g.Z.hasHotspot(C)),
          U = A
            ? (0, t.jsx)(E.Z, {
                className: j.backgroundImageOption,
                src: a,
                loop: !0,
                playOnHover: !0,
                muted: !0,
              })
            : (0, t.jsx)(h, {
                isAnimated: p,
                option: (0, x.rD)(n) ? n : void 0,
                source: a,
              });
        function B() {
          null != C &&
            f &&
            (O.Kw(C),
            m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
              type: k.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
              location: R.location,
              location_stack: T,
            }));
        }
        return (0, t.jsxs)(c.Clickable, {
          ...M,
          className: l()(j.backgroundOption, {
            [j.backgroundOptionSelected]: o,
          }),
          onClick: () => I(n),
          onContextMenu: (e) =>
            (0, r.jW)(e, async () => {
              let { default: e } = await s.e("99414").then(s.bind(s, 187658));
              return (s) =>
                (0, t.jsx)(e, { ...s, backgroundOption: n, optionIsInUse: o });
            }),
          children: [
            o ? (0, t.jsx)("div", { className: j.backgroundOptionRing }) : null,
            (0, t.jsx)("div", {
              onFocus: B,
              onMouseEnter: B,
              className: j.backgroundOptionInner,
              children: U,
            }),
            A || p
              ? (0, t.jsx)("div", {
                  className: j.playIcon,
                  children: (0, t.jsx)(c.PlayIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                })
              : null,
            f &&
              (0, t.jsx)(c.TextBadge, {
                text: D.Z.Messages.NEW,
                className: j.newTextBadge,
              }),
          ],
        });
      }
      function U() {
        return (0, t.jsxs)("div", {
          className: j.customBackgroundTooltip,
          children: [
            (0, t.jsx)(c.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              className: j.customBackgroundTooltipIcon,
            }),
            (0, t.jsx)(c.Text, {
              variant: "text-sm/normal",
              children:
                D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
            }),
          ],
        });
      }
      function B(e) {
        let { onClick: n, tooltipText: s, disabled: a = !1 } = e,
          o = (0, i.e7)([g.Z], () =>
            g.Z.hasHotspot(M.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW),
          );
        function l() {
          O.Kw(M.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
        }
        let r = o
          ? D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP
          : s;
        return (0, t.jsxs)(c.TooltipContainer, {
          text: r,
          className: j.newBackgroundTooltipContainer,
          children: [
            (0, t.jsxs)(T, {
              className: j.__invalid_backgroundOptionBlurred,
              disabled: a,
              icon: c.ImagePlusIcon,
              onClick: n,
              onMouseLeave: l,
              onBlur: l,
              text: (0, t.jsxs)("div", {
                className: j.backgroundCustomInlineUpsell,
                children: [
                  (0, t.jsx)(c.NitroWheelIcon, {
                    size: "md",
                    color: "currentColor",
                    className: j.backgroundCustomInlineUpsellIcon,
                  }),
                  (0, t.jsx)("div", {
                    className: j.overflowEllipsis,
                    children:
                      D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM,
                  }),
                ],
              }),
              children: [
                (0, t.jsx)("div", {
                  className: j.backgroundCustomInlineUpsellBackground,
                }),
                (0, t.jsx)("div", {
                  className: j.backgroundCustomInlineUpsellBackgroundDarkener,
                }),
              ],
            }),
            o &&
              (0, t.jsx)(c.TextBadge, {
                text: D.Z.Messages.NEW,
                className: j.newTextBadge,
              }),
          ],
        });
      }
      function v(e) {
        let { onClick: n } = e,
          s = (0, d.O)(),
          { analyticsLocations: o } = (0, _.ZP)(
            u.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL,
          );
        return (
          a.useEffect(() => {
            m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
              type: k.cd.VIDEO_BACKGROUNDS_INLINE,
              location: s.location,
              location_stack: o,
            });
          }, []),
          (0, t.jsx)(B, {
            onClick: n,
            tooltipText:
              D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP,
          })
        );
      }
      function P(e) {
        let { onAddBackgroundImage: n, disabled: a } = e,
          o = (0, c.useModalContext)(),
          l = a
            ? D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format(
                { maxCustomBackgrounds: 25 },
              )
            : D.Z.Messages
                .CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM,
          i = [
            {
              name: D.Z.Messages.IMAGES,
              extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
          ];
        return (0, t.jsx)(B, {
          disabled: a,
          onClick: function () {
            (0, c.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  s.e("70687"),
                  s.e("32880"),
                ]).then(s.bind(s, 28130));
                return (s) =>
                  (0, t.jsx)(e, {
                    maxFileSizeBytes: C.SJ,
                    onComplete: n,
                    uploadType: R.pC.VIDEO_BACKGROUND,
                    filters: i,
                    modalTitle: D.Z.Messages.UPLOAD_BACKGROUND,
                    imageSpecifications:
                      D.Z.Messages
                        .CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
                    uploadOptionTitle:
                      D.Z.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
                    showUpsellHeader: !0,
                    ...s,
                  });
              },
              { contextKey: o },
            );
          },
          tooltipText: l,
        });
      }
      function Z(e) {
        let {
            canUseCustomBackgrounds: n,
            customBackgroundOptions: s,
            selectedOption: o,
            onSelectOption: l,
            onUpsellClick: i,
            onAddBackgroundImage: r,
            smallerOptions: d,
          } = e,
          E = a.useMemo(
            () =>
              s.sort((e, n) =>
                null == e.last_used || null == n.last_used
                  ? p.default.compare(n.id, e.id)
                  : new Date(n.last_used).getTime() -
                    new Date(e.last_used).getTime(),
              ),
            [s],
          ),
          O = E.length >= 25,
          { analyticsLocations: g } = (0, _.ZP)(u.Z.VIDEO_BACKGROUND_OPTIONS),
          m = Object.values((0, A.Z)()).sort((e, n) => C.E1[e.id] - C.E1[n.id]);
        return (0, t.jsx)(_.Gt, {
          value: g,
          children: (0, t.jsxs)("div", {
            className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
            children: [
              (0, t.jsx)(T, {
                selected: null == o,
                icon: c.DenyIcon,
                onClick: () => l(null),
                text: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE,
              }),
              (0, t.jsx)(T, {
                className: j.__invalid_backgroundOptionBlurred,
                selected: o === C.f7,
                icon: c.BlurBackgroundIcon,
                onClick: () => l(C.f7),
                text: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
                children: (0, t.jsx)("div", {
                  className: j.backgroundOptionBlurBackground,
                }),
              }),
              n
                ? (0, t.jsx)(P, { onAddBackgroundImage: r, disabled: O })
                : (0, t.jsx)(v, { onClick: i }),
              E.map((e) =>
                (0, t.jsx)(
                  c.Tooltip,
                  {
                    text: (0, t.jsx)(U, {}),
                    "aria-label":
                      D.Z.Messages
                        .CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
                    children: (n) => {
                      let s = (0, I.rI)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: 720,
                      });
                      return null == s
                        ? null
                        : (0, a.createElement)(f, {
                            ...n,
                            key: e.id,
                            option: e,
                            source: s,
                            selected: (0, x.rD)(o) && o.id === e.id,
                            onSelectOption: l,
                            isVideo: (0, I.ay)(e.asset),
                            isAnimatedImage: (0, I.xR)(e.asset),
                          });
                    },
                  },
                  e.id,
                ),
              ),
              m.map((e) => {
                let n = !0 === e.isVideo;
                return (0, t.jsx)(
                  c.Tooltip,
                  {
                    text: e.name,
                    "aria-label": e.name,
                    children: (s) =>
                      (0, a.createElement)(f, {
                        ...s,
                        key: e.id,
                        option: e.id,
                        source: e.source,
                        selected: o === e.id,
                        onSelectOption: l,
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
    747545: function (e, n, s) {
      s.d(n, {
        S: function () {
          return x;
        },
        Z: function () {
          return A;
        },
      }),
        s(47120);
      var t = s(735250),
        a = s(470079),
        o = s(120356),
        l = s.n(o),
        i = s(442837),
        c = s(846519),
        r = s(481060),
        d = s(846027),
        u = s(695346),
        _ = s(716161),
        E = s(938117),
        O = s(131951),
        g = s(626135),
        m = s(981631),
        I = s(689938),
        p = s(332564);
      function x() {
        let [e, n] = a.useState(!1),
          s = (0, i.e7)([O.Z], () => O.Z.isMediaFilterSettingLoading());
        return (a.useEffect(() => {
          let e = new c.V7();
          return (
            s
              ? e.start(150, () => {
                  n(!0);
                })
              : (e.stop(), n(!1)),
            () => e.stop()
          );
        }, [s]),
        e)
          ? (0, t.jsx)("div", {
              className: p.filterLoadingIndicator,
              children: (0, t.jsx)(r.Spinner, {}),
            })
          : null;
      }
      function A(e) {
        let {
            hideDeviceSelector: n = !1,
            hideDeviceHeader: s = !1,
            onLearnMore: o,
            selectedBackgroundOption: c,
            onSelectBackgroundOption: x,
            renderCamera: A,
            hidePreviewToggle: C = !1,
            showSmallBackgroundOptions: N = !1,
          } = e,
          M = (0, i.e7)([O.Z], () => O.Z.getVideoDeviceId()),
          R = (0, i.Wu)([O.Z], () => Object.values(O.Z.getVideoDevices())),
          k = u.qF.useSetting(),
          D = R.map((e) => {
            let { id: n, name: s } = e;
            return { value: n, label: s };
          });
        return (
          a.useEffect(() => {
            (0, _.XV)();
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              A(M),
              O.Z.isEnabled()
                ? null
                : (0, t.jsx)(r.Text, {
                    className: p.permissionWarning,
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: I.Z.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
                      onEnableClick: () => d.Z.enable(!0),
                    }),
                  }),
              C
                ? null
                : (0, t.jsx)(r.FormSwitch, {
                    className: p.previewToggle,
                    note: I.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
                    onChange: (e) => {
                      u.qF.updateSetting(e),
                        g.default.track(m.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                          always_preview_video: e,
                        });
                    },
                    value: k,
                    hideBorder: !0,
                    children: (0, t.jsx)("div", {
                      className: p.cameraPreviewTitle,
                      children: I.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW,
                    }),
                  }),
              n
                ? null
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      s
                        ? null
                        : (0, t.jsx)(r.Heading, {
                            className: p.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: I.Z.Messages.CAMERA_PREVIEW_CAMERA,
                          }),
                      (0, t.jsx)(r.SingleSelect, {
                        placeholder: I.Z.Messages.CHANGE_CAMERA,
                        className: l()(p.selector, { [p.selectorNoHeader]: s }),
                        options: D,
                        value: M,
                        onChange: (e) => d.Z.setVideoDevice(e),
                      }),
                    ],
                  }),
              (0, t.jsx)(E.Z, {
                onLearnMore: o,
                selectedBackgroundOption: c,
                onSelectBackgroundOption: x,
                currentDeviceId: M,
                smallerBackgroundOptions: N,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=27d4baa6ee521ea026e5.js.map
