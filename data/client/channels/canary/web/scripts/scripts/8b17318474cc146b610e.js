"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14676"],
  {
    869614: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      let r = new Set(["nvidia"]);
      function o(e) {
        for (let n of Object.keys(e)) {
          let t = e[n];
          if (null != t && null == t.error && r.has(n)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(47120);
      var r = t(553813),
        o = t.n(r),
        i = t(358085);
      let c = {
        [i.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function a(e) {
        let n = c[(0, i.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            i = n[t];
          if (null == r || null == i || null != r.error) continue;
          let c = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!o().satisfies(c, i)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(47120);
      var r = t(553813),
        o = t.n(r),
        i = t(358085);
      let c = { [i.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function a(e) {
        let n = c[(0, i.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            i = n[t];
          if (null == r || null == i || null != r.error) continue;
          let c = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!o().satisfies(c, i)) return !0;
        }
        return !1;
      }
    },
    960861: function (e, n, t) {
      t.d(n, {
        UB: function () {
          return P;
        },
        Uc: function () {
          return a;
        },
      });
      var r,
        o,
        i,
        c,
        a,
        l,
        d = t(470079),
        u = t(442837),
        s = t(570140),
        _ = t(872810),
        f = t(998594),
        p = t(592125),
        m = t(430824),
        g = t(131951),
        b = t(496675),
        h = t(944486),
        S = t(382182),
        x = t(74299),
        T = t(65154);
      ((r = a || (a = {}))[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error");
      let C = 0,
        v = {};
      function E() {
        return g.Z.supports(T.AN.NATIVE_SCREENSHARE_PICKER);
      }
      function k() {
        return (
          E() &&
          f.Z.getCurrentConfig(
            { location: "NativeScreenSharePickerStore_enabled" },
            { autoTrackExposure: !1 },
          ).enableSystemPicker
        );
      }
      function I() {
        var e, n;
        null === (n = g.Z.getMediaEngine()) ||
          void 0 === n ||
          null === (e = n.releaseNativeDesktopVideoSourcePickerStream) ||
          void 0 === e ||
          e.call(n);
      }
      function P() {
        return (0, d.useEffect)(
          () => (
            C++,
            () => {
              0 == --C && I();
            }
          ),
          [],
        );
      }
      function Z(e) {
        if (k()) {
          var n, t;
          I();
          let r = p.Z.getChannel(e),
            o = null != r && (0, x.Z)(g.Z) && (0, S.JL)(r, m.Z, b.Z, !1);
          null === (t = g.Z.getMediaEngine()) ||
            void 0 === t ||
            null === (n = t.setNativeDesktopVideoSourcePickerActive) ||
            void 0 === n ||
            n.call(t, o);
        }
      }
      function w() {
        I(), Z(h.Z.getVoiceChannelId());
      }
      class N extends (l = u.ZP.Store) {
        initialize() {
          this.syncWith([g.Z, h.Z, p.Z, m.Z, b.Z], w),
            f.Z.subscribe(
              { location: "NativeScreenSharePickerStore_initialize" },
              w,
            );
        }
        supported() {
          return E();
        }
        enabled() {
          return k();
        }
        presentPicker(e) {
          var n, t;
          (v = { lastPickerAction: 0 }),
            null === (t = g.Z.getMediaEngine()) ||
              void 0 === t ||
              null === (n = t.presentNativeScreenSharePicker) ||
              void 0 === n ||
              n.call(t, e);
        }
        releasePickerStream() {
          I();
        }
        getPickerState() {
          return v;
        }
      }
      (c = "NativeScreenSharePickerStore"),
        (i = "displayName") in (o = N)
          ? Object.defineProperty(o, i, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[i] = c);
      n.ZP = new N(s.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
          let { existing: n } = e;
          if (((v = { lastPickerAction: 1 }), 0 === C && !n)) {
            let e = p.Z.getChannel(h.Z.getVoiceChannelId());
            null != e &&
              (0, x.Z)(g.Z) &&
              (0, S.JL)(e, m.Z, b.Z, !1) &&
              (0, _.WH)(e.getGuildId(), e.id, { sourceId: "prepicked:0" });
          }
        },
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: function (e) {
          let {} = e;
          v = { lastPickerAction: 2 };
        },
        NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
          let { error: n } = e;
          v = { lastPickerAction: 3, lastPickerError: n };
        },
        VOICE_CHANNEL_SELECT: function (e) {
          let { channelId: n } = e;
          Z(n);
        },
      });
    },
    653255: function (e, n, t) {
      var r,
        o,
        i,
        c,
        a = t(442837),
        l = t(570140),
        d = t(358085),
        u = t(998502),
        s = t(869614),
        _ = t(281083),
        f = t(672598);
      let p = !1,
        m = !0,
        g = !1;
      class b extends (c = a.ZP.Store) {
        initialize() {
          !(!d.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, f.Z)(e)),
                (m = (0, s.Z)(e)),
                (g = (0, _.Z)(e)),
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
      (i = "StreamingCapabilitiesStore"),
        (o = "displayName") in (r = b)
          ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = i),
        (n.Z = new b(l.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (p = n.GPUDriversOutdated), (m = n.canUseHardwareAcceleration);
          },
        }));
    },
    38457: function (e, n, t) {
      e.exports = {
        nitroUpsellContainer: "nitroUpsellContainer_b52bde",
        nitroUpsellTitle: "nitroUpsellTitle_b52bde",
        nitroUpsellSubtitle: "nitroUpsellSubtitle_b52bde",
      };
    },
    759041: function (e, n, t) {
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
    951381: function (e, n, t) {
      e.exports = { grid: "grid_b500ad", tile: "tile_b500ad" };
    },
    51449: function (e, n, t) {
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    787422: function (e, n, t) {
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    85586: function (e, n, t) {
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
    127788: function (e, n, t) {
      e.exports = { divider: "divider_bcb954", separator: "separator_bcb954" };
    },
    458623: function (e, n, t) {
      t.r(
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
    544347: function (e, n, t) {
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    640436: function (e, n, t) {
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
    907261: function (e, n, t) {
      e.exports = { card: "card_f30ffe" };
    },
    523022: function (e, n, t) {
      e.exports = {
        title: "title_b70be6 " + t("458623").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    624743: function (e, n, t) {
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
    782765: function (e, n, t) {
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
    304095: function (e, n, t) {
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
    814605: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b3936e",
        content: "content_b3936e",
        gameTile: "gameTile_b3936e",
        copy: "copy_b3936e",
        subheading: "subheading_b3936e",
      };
    },
    151876: function (e, n, t) {
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
//# sourceMappingURL=8b17318474cc146b610e.js.map
