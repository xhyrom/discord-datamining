"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67911"],
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
          return l;
        },
      }),
        t(47120);
      var r = t(553813),
        o = t.n(r),
        a = t(358085);
      let i = {
        [a.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function l(e) {
        let n = i[(0, a.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            a = n[t];
          if (null == r || null == a || null != r.error) continue;
          let i = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!o().satisfies(i, a)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var r = t(553813),
        o = t.n(r),
        a = t(358085);
      let i = { [a.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function l(e) {
        let n = i[(0, a.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            a = n[t];
          if (null == r || null == a || null != r.error) continue;
          let i = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!o().satisfies(i, a)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, n, t) {
      var r,
        o,
        a,
        i,
        l = t(442837),
        c = t(570140),
        u = t(358085),
        d = t(998502),
        s = t(869614),
        f = t(281083),
        _ = t(672598);
      let m = !1,
        p = !0,
        x = !1;
      class T extends (i = l.ZP.Store) {
        initialize() {
          !(!u.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
              (m = (0, _.Z)(e)),
                (p = (0, s.Z)(e)),
                (x = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return m;
        }
        get canUseHardwareAcceleration() {
          return p;
        }
        get problematicGPUDriver() {
          return x;
        }
        getState() {
          return {
            GPUDriversOutdated: m,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: x,
          };
        }
      }
      (a = "StreamingCapabilitiesStore"),
        (o = "displayName") in (r = T)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
        (n.Z = new T(c.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (m = n.GPUDriversOutdated), (p = n.canUseHardwareAcceleration);
          },
        }));
    },
    378967: function (e, n, t) {
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    838332: function (e, n, t) {
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    949949: function (e, n, t) {
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
    456963: function (e, n, t) {
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
    754246: function (e, n, t) {
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    381515: function (e, n, t) {
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
    783301: function (e, n, t) {
      e.exports = { card: "card_f30ffe" };
    },
    864073: function (e, n, t) {
      e.exports = {
        title: "title_b70be6 " + t("456963").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    998139: function (e, n, t) {
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
    468888: function (e, n, t) {
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
    417859: function (e, n, t) {
      e.exports = { attribution: "attribution_e4fd9f", img: "img_e4fd9f" };
    },
  },
]);
//# sourceMappingURL=198472fb96bc431bfd16.js.map
