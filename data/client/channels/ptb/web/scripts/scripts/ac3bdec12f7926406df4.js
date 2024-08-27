(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73841"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, o, c, a) {
        var l = -1,
          u = t.length;
        for (o || (o = i), a || (a = []); ++l < u; ) {
          var s = t[l];
          n > 0 && o(s)
            ? n > 1
              ? e(s, n - 1, o, c, a)
              : r(a, s)
            : !c && (a[a.length] = s);
        }
        return a;
      };
    },
    149912: function (e, t, n) {
      var r = n(466293),
        i = n(443735),
        o = n(402428),
        c = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(c && e && e[c]);
      };
    },
    90757: function (e, t, n) {
      var r = n(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    869614: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      let r = new Set(["nvidia"]);
      function i(e) {
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
          return a;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let c = {
        [o.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function a(e) {
        let t = c[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            o = t[n];
          if (null == r || null == o || null != r.error) continue;
          let c = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(c, o)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let c = { [o.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function a(e) {
        let t = c[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            o = t[n];
          if (null == r || null == o || null != r.error) continue;
          let c = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(c, o)) return !0;
        }
        return !1;
      }
    },
    960861: function (e, t, n) {
      "use strict";
      n.d(t, {
        UB: function () {
          return k;
        },
        Uc: function () {
          return a;
        },
      });
      var r,
        i,
        o,
        c,
        a,
        l,
        u = n(470079),
        s = n(442837),
        d = n(570140),
        f = n(872810),
        _ = n(998594),
        p = n(592125),
        m = n(430824),
        g = n(131951),
        h = n(496675),
        v = n(944486),
        S = n(382182),
        C = n(74299),
        x = n(65154);
      ((r = a || (a = {}))[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error");
      let b = 0,
        T = {};
      function E() {
        return g.Z.supports(x.AN.NATIVE_SCREENSHARE_PICKER);
      }
      function I() {
        return (
          E() &&
          _.Z.getCurrentConfig(
            { location: "NativeScreenSharePickerStore_enabled" },
            { autoTrackExposure: !1 },
          ).enableSystemPicker
        );
      }
      function P() {
        var e, t;
        null === (t = g.Z.getMediaEngine()) ||
          void 0 === t ||
          null === (e = t.releaseNativeDesktopVideoSourcePickerStream) ||
          void 0 === e ||
          e.call(t);
      }
      function k() {
        return (0, u.useEffect)(
          () => (
            b++,
            () => {
              0 == --b && P();
            }
          ),
          [],
        );
      }
      function N(e) {
        if (I()) {
          var t, n;
          P();
          let r = p.Z.getChannel(e),
            i = null != r && (0, C.Z)(g.Z) && (0, S.JL)(r, m.Z, h.Z, !1);
          null === (n = g.Z.getMediaEngine()) ||
            void 0 === n ||
            null === (t = n.setNativeDesktopVideoSourcePickerActive) ||
            void 0 === t ||
            t.call(n, i);
        }
      }
      function w() {
        P(), N(v.Z.getVoiceChannelId());
      }
      class Z extends (l = s.ZP.Store) {
        initialize() {
          this.syncWith([g.Z, v.Z, p.Z, m.Z, h.Z], w),
            _.Z.subscribe(
              { location: "NativeScreenSharePickerStore_initialize" },
              w,
            );
        }
        supported() {
          return E();
        }
        enabled() {
          return I();
        }
        presentPicker(e) {
          var t, n;
          (T = { lastPickerAction: 0 }),
            null === (n = g.Z.getMediaEngine()) ||
              void 0 === n ||
              null === (t = n.presentNativeScreenSharePicker) ||
              void 0 === t ||
              t.call(n, e);
        }
        releasePickerStream() {
          P();
        }
        getPickerState() {
          return T;
        }
      }
      (c = "NativeScreenSharePickerStore"),
        (o = "displayName") in (i = Z)
          ? Object.defineProperty(i, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = c);
      t.ZP = new Z(d.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
          let { existing: t } = e;
          if (((T = { lastPickerAction: 1 }), 0 === b && !t)) {
            let e = p.Z.getChannel(v.Z.getVoiceChannelId());
            null != e &&
              (0, C.Z)(g.Z) &&
              (0, S.JL)(e, m.Z, h.Z, !1) &&
              (0, f.WH)(e.getGuildId(), e.id, { sourceId: "prepicked:0" });
          }
        },
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: function (e) {
          let {} = e;
          T = { lastPickerAction: 2 };
        },
        NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
          let { error: t } = e;
          T = { lastPickerAction: 3, lastPickerError: t };
        },
        VOICE_CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          N(t);
        },
      });
    },
    653255: function (e, t, n) {
      "use strict";
      var r,
        i,
        o,
        c,
        a = n(442837),
        l = n(570140),
        u = n(358085),
        s = n(998502),
        d = n(869614),
        f = n(281083),
        _ = n(672598);
      let p = !1,
        m = !0,
        g = !1;
      class h extends (c = a.ZP.Store) {
        initialize() {
          !(!u.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, _.Z)(e)),
                (m = (0, d.Z)(e)),
                (g = (0, f.Z)(e)),
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
          return g;
        }
        getState() {
          return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: g,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = h)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (t.Z = new h(l.Z, {
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
          return o;
        },
      });
      var i = n(145597);
      function o(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, i.QF)();
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
    977059: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return o;
        },
        S: function () {
          return i;
        },
      });
      let r = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function o(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
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
        i = n.n(r),
        o = n(90757),
        c = n.n(o),
        a = n(65154);
      function l(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [a.vA.WINDOW, a.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let o = [];
        return (
          t.includes(a.vA.SCREEN) &&
            e.supports(a.AN.SCREEN_PREVIEWS) &&
            (o.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== a.vA.SCREEN))),
          t.includes(a.vA.WINDOW) &&
            e.supports(a.AN.WINDOW_PREVIEWS) &&
            (o.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== a.vA.WINDOW))),
          0 !== t.length &&
            o.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: n,
              }),
            ),
          Promise.all(o).then((e) => c()(e))
        );
      }
    },
    951381: function (e, t, n) {
      "use strict";
      e.exports = { grid: "grid_b500ad", tile: "tile_b500ad" };
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
        reverseTrialEducationBannerContainer:
          "reverseTrialEducationBannerContainer_f59576",
        reducedMotion: "reducedMotion_f59576",
        unlockAnimation: "unlockAnimation_f59576",
        reverseTrialEducationText: "reverseTrialEducationText_f59576",
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
//# sourceMappingURL=ac3bdec12f7926406df4.js.map
