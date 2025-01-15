(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55499"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        o = n(149912);
      e.exports = function e(t, n, i, a, c) {
        var l = -1,
          u = t.length;
        for (i || (i = o), c || (c = []); ++l < u; ) {
          var s = t[l];
          n > 0 && i(s)
            ? n > 1
              ? e(s, n - 1, i, a, c)
              : r(c, s)
            : !a && (c[c.length] = s);
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
    653255: function (e, t, n) {
      "use strict";
      var r,
        o,
        i,
        a,
        c = n(442837),
        l = n(570140),
        u = n(358085),
        s = n(998502),
        d = n(869614),
        f = n(281083),
        p = n(672598);
      let _ = !1,
        m = !0,
        h = !1;
      class g extends (a = c.ZP.Store) {
        initialize() {
          !(!u.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
              (_ = (0, p.Z)(e)),
                (m = (0, d.Z)(e)),
                (h = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return _;
        }
        get canUseHardwareAcceleration() {
          return m;
        }
        get problematicGPUDriver() {
          return h;
        }
        getState() {
          return {
            GPUDriversOutdated: _,
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
            (_ = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
          },
        }));
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
    936670: function (e, t, n) {
      "use strict";
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    622563: function (e, t, n) {
      "use strict";
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    836423: function (e, t, n) {
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
    795331: function (e, t, n) {
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
    453819: function (e, t, n) {
      "use strict";
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    781425: function (e, t, n) {
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
    927616: function (e, t, n) {
      "use strict";
      e.exports = { card: "card_f30ffe" };
    },
    334229: function (e, t, n) {
      "use strict";
      e.exports = {
        title: "title_b70be6 " + n("795331").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    95779: function (e, t, n) {
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
    33354: function (e, t, n) {
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
    637464: function (e, t, n) {
      "use strict";
      e.exports = { attribution: "attribution_e4fd9f", img: "img_e4fd9f" };
    },
  },
]);
//# sourceMappingURL=b17fc323aab8519ba658.js.map
