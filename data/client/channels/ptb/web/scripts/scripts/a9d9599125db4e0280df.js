(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58603"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        o = n(149912);
      e.exports = function e(t, n, i, a, c) {
        var l = -1,
          s = t.length;
        for (i || (i = o), c || (c = []); ++l < s; ) {
          var u = t[l];
          n > 0 && i(u)
            ? n > 1
              ? e(u, n - 1, i, a, c)
              : r(c, u)
            : !a && (c[c.length] = u);
        }
        return c;
      };
    },
    149912: function (e, t, n) {
      var r = n(466293),
        o = n(443735),
        i = n(402428),
        a = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return i(e) || o(e) || !!(a && e && e[a]);
      };
    },
    90757: function (e, t, n) {
      var r = n(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    38983: function (e) {
      "use strict";
      e.exports = "/assets/574392471ddb7ab036d8.svg";
    },
    765585: function (e, t, n) {
      "use strict";
      n(47120);
      var r = n(735250),
        o = n(470079),
        i = n(120356),
        a = n.n(i),
        c = n(481060),
        l = n(393238),
        s = n(605236),
        u = n(279745),
        d = n(921944),
        f = n(689938),
        _ = n(121865);
      t.Z = o.forwardRef(function (e, t) {
        let {
            body: n,
            header: i,
            artClassName: p,
            headerClassName: m,
            contentClassName: h,
            tryItText: g,
            dismissText: b,
            onTryFeature: x,
            onClose: C,
            className: v,
            inlineArt: I = !1,
            isPremiumFeature: S = !1,
            shouldUseHorizontalButtons: E = !1,
            showGIFTag: T = !1,
            dismissibleContent: N,
            position: A = "top",
            align: P = "center",
            art: k,
            isPremiumEarlyAccess: w = !1,
            maxWidth: R = 280,
          } = e,
          Z = E ? c.Button.Sizes.LARGE : c.Button.Sizes.MAX,
          [y, B] = o.useState(!1),
          { ref: W, width: D } = (0, l.Z)();
        function L(e) {
          (0, s.EW)(N, { dismissAction: e });
        }
        return (
          o.useEffect(() => {
            var e, t;
            let n =
              (null !==
                (t =
                  null === (e = W.current) || void 0 === e
                    ? void 0
                    : e.scrollWidth) && void 0 !== t
                ? t
                : 0) + 64;
            !y && n > R && B(!0);
          }, [y, D, W, R]),
          o.useEffect(() => {
            (0, s.kk)(N);
          }, [N]),
          (0, r.jsx)("div", {
            className: v,
            ref: t,
            children: (0, r.jsxs)("div", {
              className: a()(_.content, h, {
                [_.contentNoArt]: null == p || I,
                [_.contentPremium]: S || w,
              }),
              children: [
                (0, r.jsxs)("div", {
                  className: a()(p, I ? _.artInline : _.artAbsolute),
                  children: [T && (0, r.jsx)(u.Z, { className: _.gifTag }), k],
                }),
                (0, r.jsxs)("div", {
                  className: _.body,
                  children: [
                    (0, r.jsxs)(c.Heading, {
                      className: a()(S ? _.headerWithPremiumIcon : _.header, m),
                      variant: "heading-md/bold",
                      color: "always-white",
                      children: [
                        S && !w
                          ? (0, r.jsx)(c.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: _.premiumIcon,
                            })
                          : null,
                        w
                          ? (0, r.jsxs)(c.Text, {
                              color: "always-white",
                              variant: "eyebrow",
                              className: _.earlyAccessBadgeContainer,
                              children: [
                                (0, r.jsx)(c.NitroWheelIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: _.earlyAccessIcon,
                                }),
                                (0, r.jsx)("span", {
                                  className: _.earlyAccessText,
                                  children:
                                    f.Z.Messages
                                      .REMIXING_TOOLTIP_NITRO_EARLY_ACCESS,
                                }),
                              ],
                            })
                          : null,
                        i,
                      ],
                    }),
                    null == n
                      ? null
                      : "string" == typeof n
                        ? (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: n,
                          })
                        : n,
                  ],
                }),
                (0, r.jsx)("div", {
                  ref: W,
                  className:
                    y || !E
                      ? _.buttonContainerVertical
                      : _.buttonContainerHorizontal,
                  children:
                    null != x
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(c.Button, {
                              className: _.button,
                              size: Z,
                              onClick: (e) => {
                                null == C || C(e), x(e), L(d.L.PRIMARY);
                              },
                              color:
                                S || w
                                  ? c.Button.Colors.BRAND_INVERTED
                                  : c.Button.Colors.WHITE,
                              children:
                                null != g
                                  ? g
                                  : f.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT,
                            }),
                            (0, r.jsx)(c.Button, {
                              className: _.button,
                              size: Z,
                              onClick: (e) => {
                                null == C || C(e), L(d.L.DISMISS);
                              },
                              color:
                                S || w
                                  ? c.Button.Colors.WHITE
                                  : c.Button.Colors.BRAND,
                              look:
                                S || w
                                  ? c.Button.Looks.LINK
                                  : c.Button.Looks.FILLED,
                              children:
                                null != b
                                  ? b
                                  : f.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS,
                            }),
                          ],
                        })
                      : (0, r.jsx)(c.Button, {
                          className: _.button,
                          size: c.Button.Sizes.MAX,
                          onClick: (e) => {
                            null == C || C(e), L(d.L.PRIMARY);
                          },
                          color: c.Button.Colors.WHITE,
                          children: f.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM,
                        }),
                }),
                (0, r.jsx)("div", {
                  className: a()(_.pointer, {
                    [_.bottomPointer]: "top" === A,
                    [_.centerLeftPointer]: "right" === A && "center" === P,
                    [_.topLeftPointer]: "right" === A && "top" === P,
                  }),
                }),
              ],
            }),
          })
        );
      });
    },
    869614: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      let r = new Set(["nvidia"]);
      function o(e) {
        for (let t of Object.keys(e)) {
          let n = e[t];
          if (null != n && null == n.error && r.has(t)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(553813),
        o = n.n(r),
        i = n(358085);
      let a = {
        [i.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function c(e) {
        let t = a[(0, i.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            i = t[n];
          if (null == r || null == i || null != r.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!o().satisfies(a, i)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(553813),
        o = n.n(r),
        i = n(358085);
      let a = { [i.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function c(e) {
        let t = a[(0, i.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            i = t[n];
          if (null == r || null == i || null != r.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!o().satisfies(a, i)) return !0;
        }
        return !1;
      }
    },
    960861: function (e, t, n) {
      "use strict";
      n.d(t, {
        UB: function () {
          return A;
        },
        Uc: function () {
          return c;
        },
      });
      var r,
        o,
        i,
        a,
        c,
        l,
        s = n(470079),
        u = n(442837),
        d = n(570140),
        f = n(872810),
        _ = n(998594),
        p = n(592125),
        m = n(430824),
        h = n(131951),
        g = n(496675),
        b = n(944486),
        x = n(382182),
        C = n(74299),
        v = n(65154);
      ((r = c || (c = {}))[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error");
      let I = 0,
        S = {};
      function E() {
        return h.Z.supports(v.AN.NATIVE_SCREENSHARE_PICKER);
      }
      function T() {
        return (
          E() &&
          _.Z.getCurrentConfig(
            { location: "NativeScreenSharePickerStore_enabled" },
            { autoTrackExposure: !1 },
          ).enableSystemPicker
        );
      }
      function N() {
        var e, t;
        null === (t = h.Z.getMediaEngine()) ||
          void 0 === t ||
          null === (e = t.releaseNativeDesktopVideoSourcePickerStream) ||
          void 0 === e ||
          e.call(t);
      }
      function A() {
        return (0, s.useEffect)(
          () => (
            I++,
            () => {
              0 == --I && N();
            }
          ),
          [],
        );
      }
      function P(e) {
        if (T()) {
          var t, n;
          N();
          let r = p.Z.getChannel(e),
            o = null != r && (0, C.Z)(h.Z) && (0, x.JL)(r, m.Z, g.Z, !1);
          null === (n = h.Z.getMediaEngine()) ||
            void 0 === n ||
            null === (t = n.setNativeDesktopVideoSourcePickerActive) ||
            void 0 === t ||
            t.call(n, o);
        }
      }
      function k() {
        N(), P(b.Z.getVoiceChannelId());
      }
      class w extends (l = u.ZP.Store) {
        initialize() {
          this.syncWith([h.Z, b.Z, p.Z, m.Z, g.Z], k),
            _.Z.subscribe(
              { location: "NativeScreenSharePickerStore_initialize" },
              k,
            );
        }
        supported() {
          return E();
        }
        enabled() {
          return T();
        }
        presentPicker(e) {
          var t, n;
          (S = { lastPickerAction: 0 }),
            null === (n = h.Z.getMediaEngine()) ||
              void 0 === n ||
              null === (t = n.presentNativeScreenSharePicker) ||
              void 0 === t ||
              t.call(n, e);
        }
        releasePickerStream() {
          N();
        }
        getPickerState() {
          return S;
        }
      }
      (a = "NativeScreenSharePickerStore"),
        (i = "displayName") in (o = w)
          ? Object.defineProperty(o, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[i] = a);
      t.ZP = new w(d.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
          let { existing: t } = e;
          if (((S = { lastPickerAction: 1 }), 0 === I && !t)) {
            let e = p.Z.getChannel(b.Z.getVoiceChannelId());
            null != e &&
              (0, C.Z)(h.Z) &&
              (0, x.JL)(e, m.Z, g.Z, !1) &&
              (0, f.WH)(e.getGuildId(), e.id, { sourceId: "prepicked:0" });
          }
        },
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: function (e) {
          let {} = e;
          S = { lastPickerAction: 2 };
        },
        NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
          let { error: t } = e;
          S = { lastPickerAction: 3, lastPickerError: t };
        },
        VOICE_CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          P(t);
        },
      });
    },
    653255: function (e, t, n) {
      "use strict";
      var r,
        o,
        i,
        a,
        c = n(442837),
        l = n(570140),
        s = n(358085),
        u = n(998502),
        d = n(869614),
        f = n(281083),
        _ = n(672598);
      let p = !1,
        m = !0,
        h = !1;
      class g extends (a = c.ZP.Store) {
        initialize() {
          !(!s.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, _.Z)(e)),
                (m = (0, d.Z)(e)),
                (h = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return p;
        }
        get canUseHardwareAcceleration() {
          return m;
        }
        get problematicGPUDriver() {
          return h;
        }
        getState() {
          return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: h,
          };
        }
      }
      (i = "StreamingCapabilitiesStore"),
        (o = "displayName") in (r = g)
          ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = i),
        (t.Z = new g(l.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(145597);
      function i(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, o.QF)();
          return null == e || null == n
            ? null
            : (null == r ? void 0 : r.id) === e.id &&
                (null == r ? void 0 : r.pid) === n
              ? r
              : (r = {
                  id: e.id,
                  pid: n,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
      }
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        o = n.n(r),
        i = n(90757),
        a = n.n(i),
        c = n(65154);
      function l(e, t, n) {
        let r = window.DiscordNative;
        o()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [c.vA.WINDOW, c.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let i = [];
        return (
          t.includes(c.vA.SCREEN) &&
            e.supports(c.AN.SCREEN_PREVIEWS) &&
            (i.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== c.vA.SCREEN))),
          t.includes(c.vA.WINDOW) &&
            e.supports(c.AN.WINDOW_PREVIEWS) &&
            (i.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== c.vA.WINDOW))),
          0 !== t.length &&
            i.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: n,
              }),
            ),
          Promise.all(i).then((e) => a()(e))
        );
      }
    },
    38457: function (e, t, n) {
      "use strict";
      e.exports = {
        nitroUpsellContainer: "nitroUpsellContainer_b52bde",
        nitroUpsellTitle: "nitroUpsellTitle_b52bde",
        nitroUpsellSubtitle: "nitroUpsellSubtitle_b52bde",
      };
    },
    759041: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_fe5744",
        keybindHintKeys: "keybindHintKeys_fe5744",
        keybindShortcut: "keybindShortcut_fe5744",
        formSwitch: "formSwitch_fe5744",
        clipsEducationHeader: "clipsEducationHeader_fe5744",
        clipsEducationArt: "clipsEducationArt_fe5744",
        warningText: "warningText_fe5744",
        description: "description_fe5744",
      };
    },
    951381: function (e, t, n) {
      "use strict";
      e.exports = { grid: "grid_b500ad", tile: "tile_b500ad" };
    },
    121865: function (e, t, n) {
      "use strict";
      e.exports = {
        content: "content_aa99af",
        contentNoArt: "contentNoArt_aa99af",
        contentPremium: "contentPremium_aa99af",
        artAbsolute: "artAbsolute_aa99af art_aa99af",
        artInline: "artInline_aa99af art_aa99af",
        body: "body_aa99af",
        header: "header_aa99af",
        headerWithPremiumIcon: "headerWithPremiumIcon_aa99af header_aa99af",
        premiumIcon: "premiumIcon_aa99af",
        button: "button_aa99af",
        buttonContainerHorizontal: "buttonContainerHorizontal_aa99af",
        buttonContainerVertical: "buttonContainerVertical_aa99af",
        pointer: "pointer_aa99af",
        bottomPointer: "bottomPointer_aa99af",
        centerLeftPointer: "centerLeftPointer_aa99af",
        topLeftPointer: "topLeftPointer_aa99af",
        gifTag: "gifTag_aa99af",
        earlyAccessText: "earlyAccessText_aa99af",
        earlyAccessIcon: "earlyAccessIcon_aa99af",
        earlyAccessBadgeContainer: "earlyAccessBadgeContainer_aa99af",
      };
    },
    51449: function (e, t, n) {
      "use strict";
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    787422: function (e, t, n) {
      "use strict";
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    85586: function (e, t, n) {
      "use strict";
      e.exports = {
        selectedIcon: "selectedIcon_da7eaa",
        ellipsisText: "ellipsisText_da7eaa",
        changeButton: "changeButton_da7eaa",
        warningIcon: "warningIcon_da7eaa",
        warning: "warning_da7eaa",
        checkboxRow: "checkboxRow_da7eaa",
        hardwareWarning: "hardwareWarning_da7eaa",
      };
    },
    127788: function (e, t, n) {
      "use strict";
      e.exports = { divider: "divider_bcb954", separator: "separator_bcb954" };
    },
    458623: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          modalSize: "modalSize_e1cc86",
          modalCloseButton: "modalCloseButton_e1cc86",
          modalBody: "modalBody_e1cc86",
          formItemTitleVerySlim: "formItemTitleVerySlim_e1cc86",
          formItemTitleSlim: "formItemTitleSlim_e1cc86",
          modalContent: "modalContent_e1cc86",
          modalHeader: "modalHeader_e1cc86",
          marginBottom: "marginBottom_e1cc86",
          sourceSpinner: "sourceSpinner_e1cc86",
          errorMessage: "errorMessage_e1cc86",
          nativePickerSpacing: "nativePickerSpacing_e1cc86",
          formItemTitle: "formItemTitle_e1cc86",
          headerText: "headerText_e1cc86",
          headerDescription: "headerDescription_e1cc86",
          header: "header_e1cc86",
          flexGrow: "flexGrow_e1cc86",
          cancelButton: "cancelButton_e1cc86",
          art: "art_e1cc86",
        }),
      );
    },
    544347: function (e, t, n) {
      "use strict";
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    640436: function (e, t, n) {
      "use strict";
      e.exports = {
        avatar: "avatar_c32699",
        userListOverflow: "userListOverflow_c32699",
        voiceUserList: "voiceUserList_c32699",
        channelIcon: "channelIcon_c32699",
        selected: "selected_c32699",
        channelInfo: "channelInfo_c32699",
        channelName: "channelName_c32699",
      };
    },
    907261: function (e, t, n) {
      "use strict";
      e.exports = { card: "card_f30ffe" };
    },
    523022: function (e, t, n) {
      "use strict";
      e.exports = {
        title: "title_b70be6 " + n("458623").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    624743: function (e, t, n) {
      "use strict";
      e.exports = {
        spinner: "spinner_d7ec26",
        tile: "tile_d7ec26",
        sourceThumbnail: "sourceThumbnail_d7ec26",
        sourceScroller: "sourceScroller_d7ec26",
        sourceContainer: "sourceContainer_d7ec26",
        selected: "selected_d7ec26",
        sourceName: "sourceName_d7ec26",
        segmentContainer: "segmentContainer_d7ec26",
        segmentControl: "segmentControl_d7ec26",
        segmentControlOption: "segmentControlOption_d7ec26",
        nativePickerContainer: "nativePickerContainer_d7ec26",
        nativePickerLabel: "nativePickerLabel_d7ec26",
        hideRadioCheckbox: "hideRadioCheckbox_d7ec26",
      };
    },
    782765: function (e, t, n) {
      "use strict";
      e.exports = {
        selectorButton: "selectorButton_a78967",
        selectorButtonSelected: "selectorButtonSelected_a78967",
        selectorText: "selectorText_a78967",
        premiumUpsell: "premiumUpsell_a78967",
        perksDemo: "perksDemo_a78967",
        textContainer: "textContainer_a78967",
        selectorNitroText: "selectorNitroText_a78967",
        enhancedSelectorNitroText: "enhancedSelectorNitroText_a78967",
        settingsGroup: "settingsGroup_a78967",
        documentModeGroup: "documentModeGroup_a78967",
        qualitySettingsContainer: "qualitySettingsContainer_a78967",
        toolTipTextContainer: "toolTipTextContainer_a78967",
        upsellText: "upsellText_a78967",
        tooltip: "tooltip_a78967",
        premiumIcon: "premiumIcon_a78967 logoPrimary_a78967",
      };
    },
    304095: function (e, t, n) {
      "use strict";
      e.exports = {
        upsellBanner: "upsellBanner_f59576",
        enhancedBanner: "enhancedBanner_f59576",
        gradientGlow: "gradientGlow_f59576",
        enhancedCTAs: "enhancedCTAs_f59576",
        enhancedCTA: "enhancedCTA_f59576",
        ctaGradientBackground: "ctaGradientBackground_f59576",
        premiumIcon: "premiumIcon_f59576",
        iconTextContainer: "iconTextContainer_f59576",
        upsellText: "upsellText_f59576",
        enhancedUpsellText: "enhancedUpsellText_f59576",
        extendedDemoContainer: "extendedDemoContainer_f59576",
        extendedDemoDurationText: "extendedDemoDurationText_f59576",
        extendedDemoButton: "extendedDemoButton_f59576",
      };
    },
    814605: function (e, t, n) {
      "use strict";
      e.exports = {
        wrapper: "wrapper_b3936e",
        content: "content_b3936e",
        gameTile: "gameTile_b3936e",
        copy: "copy_b3936e",
        subheading: "subheading_b3936e",
      };
    },
    151876: function (e, t, n) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
  },
]);
//# sourceMappingURL=a9d9599125db4e0280df.js.map
