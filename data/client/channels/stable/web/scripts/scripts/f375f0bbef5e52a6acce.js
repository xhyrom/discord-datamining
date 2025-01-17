(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90242"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        o = n(149912);
      e.exports = function e(t, n, i, a, l) {
        var c = -1,
          u = t.length;
        for (i || (i = o), l || (l = []); ++c < u; ) {
          var s = t[c];
          n > 0 && i(s)
            ? n > 1
              ? e(s, n - 1, i, a, l)
              : r(l, s)
            : !a && (l[l.length] = s);
        }
        return l;
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
          return l;
        },
      }),
        n(47120);
      var r = n(209739),
        o = n.n(r),
        i = n(358085);
      let a = {
        [i.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function l(e) {
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
          return l;
        },
      }),
        n(47120);
      var r = n(209739),
        o = n.n(r),
        i = n(358085);
      let a = { [i.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function l(e) {
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
        l = n(442837),
        c = n(570140),
        u = n(358085),
        s = n(998502),
        d = n(869614),
        f = n(281083),
        m = n(672598);
      let p = !1,
        _ = !0,
        h = !1;
      class g extends (a = l.ZP.Store) {
        initialize() {
          !(!u.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, m.Z)(e)),
                (_ = (0, d.Z)(e)),
                (h = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return p;
        }
        get canUseHardwareAcceleration() {
          return _;
        }
        get problematicGPUDriver() {
          return h;
        }
        getState() {
          return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: _,
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
        (t.Z = new g(c.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (_ = t.canUseHardwareAcceleration);
          },
        }));
    },
    942951: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return f;
        },
      });
      var r = n(200651),
        o = n(192379),
        i = n(481060),
        a = n(100527),
        l = n(906732),
        c = n(184301),
        u = n(347475),
        s = n(592125),
        d = n(91047);
      function f(e) {
        var t, n;
        let {
            user: f,
            channelId: m,
            guildId: p,
            messageId: _,
            stopPropagation: h = !1,
            ariaLabel: g,
          } = e,
          { analyticsLocations: x } = (0, l.ZP)(a.Z.USERNAME);
        let v =
          ((t = f),
          (n = m),
          o.useCallback(
            (e) => {
              let r = s.Z.getChannel(n);
              null != r && null != t && (0, d.Pv)(e, t, r);
            },
            [t, n],
          ));
        return o.useCallback(
          (e) => (t, n) => {
            let o = (n) =>
                (0, r.jsx)(i.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: v,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": g,
                }),
              a = (e) => (t) => {
                h && t.stopPropagation(), e(t);
              };
            return (0, r.jsx)(
              l.Gt,
              {
                value: x,
                children:
                  null != f
                    ? (0, r.jsx)(i.Popout, {
                        position: "right",
                        preload: () =>
                          (0, c.Z)(f.id, f.getAvatarURL(p, 80), {
                            guildId: p,
                            channelId: m,
                          }),
                        renderPopout: (t) =>
                          (0, r.jsx)(u.Z, {
                            ...t,
                            userId: f.id,
                            guildId: p,
                            channelId: m,
                            messageId: _,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...n } = e;
                          return o({ onClick: a(t), ...n });
                        },
                      })
                    : o(void 0),
              },
              n,
            );
          },
          [x, f, m, p, _, v, h, g],
        );
      }
    },
    67390: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r,
        o,
        i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        c = n(410030),
        u = n(231338),
        s = n(388032),
        d = n(526803);
      function f(e) {
        let { className: t, size: n = "md" } = e,
          r =
            (0, c.ZP)() === u.BR.LIGHT
              ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png"
              : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
        return (0, i.jsx)("img", {
          className: l()(t, { [d.sm]: "sm" === n, [d.md]: "md" === n }),
          src: r,
          alt: s.intl.string(s.t.htEhYm),
        });
      }
      ((r = o || (o = {})).SMALL = "sm"), (r.MEDIUM = "md");
    },
    494620: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
        z: function () {
          return o;
        },
      });
      var r,
        o,
        i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        c = n(481060),
        u = n(312403);
      ((r = o || (o = {})).INFO = "info"), (r.WARNING = "warning");
      let s = { info: u.info, warning: u.warning },
        d = { info: c.CircleInformationIcon, warning: c.CircleWarningIcon };
      function f(e) {
        let { children: t, className: n, look: r = "info" } = e,
          o = d[r];
        return (0, i.jsxs)("div", {
          className: l()(u.root, n, s[r]),
          children: [
            (0, i.jsx)(o, { className: u.icon, color: "currentColor" }),
            (0, i.jsx)(c.Text, {
              className: u.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
            }),
          ],
        });
      }
    },
    91047: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pv: function () {
          return i;
        },
        _j: function () {
          return a;
        },
        nm: function () {
          return l;
        },
        xS: function () {
          return c;
        },
      }),
        n(411104);
      var r = n(200651);
      n(192379);
      var o = n(239091);
      function i(e, t, i) {
        i.isGroupDM()
          ? (0, o.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("33862"),
                n.e("92453"),
                n.e("62507"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, r.jsx)(e, { ...n, user: t, channel: i });
            })
          : i.isDM()
            ? (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("51269"),
                  n.e("90508"),
                  n.e("13351"),
                  n.e("33862"),
                  n.e("70205"),
                  n.e("92453"),
                  n.e("56826"),
                  n.e("2986"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, r.jsx)(e, {
                    ...n,
                    user: t,
                    channel: i,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != i.guild_id
              ? (0, o.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("51269"),
                    n.e("13351"),
                    n.e("33862"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("54492"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, r.jsx)(e, {
                      ...n,
                      user: t,
                      channel: i,
                      guildId: i.guild_id,
                    });
                })
              : (0, o.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("351"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, { ...n, user: t });
                });
      }
      function a(e, t) {
        let { user: i, channel: a, moderationAlertId: l, guildId: c, ...u } = t;
        if (
          (null == a ? void 0 : a.isGroupDM()) ||
          (null == a ? void 0 : a.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let s = null != c ? c : null == a ? void 0 : a.getGuildId();
        null != s &&
          (0, o.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("9124"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, r.jsx)(e, {
                ...t,
                user: i,
                channelId: null == a ? void 0 : a.id,
                guildId: s,
                moderationAlertId: l,
                ...u,
              });
          });
      }
      function l(e, t) {
        let {
          user: i,
          guildId: a,
          analyticsLocations: l,
          onCloseContextMenu: c,
          isViewOnly: u,
        } = t;
        (0, o.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              user: i,
              guildId: a,
              analyticsLocations: l,
              onCloseContextMenu: c,
              isViewOnly: u,
            });
        });
      }
      function c(e, t, i) {
        null != i &&
          (0, o.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, { ...t, guildId: i });
          });
      }
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        o = n.n(r),
        i = n(90757),
        a = n.n(i),
        l = n(65154);
      function c(e, t, n) {
        let r = window.DiscordNative;
        o()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [l.vA.WINDOW, l.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let i = [];
        return (
          t.includes(l.vA.SCREEN) &&
            e.supports(l.AN.SCREEN_PREVIEWS) &&
            (i.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== l.vA.SCREEN))),
          t.includes(l.vA.WINDOW) &&
            e.supports(l.AN.WINDOW_PREVIEWS) &&
            (i.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== l.vA.WINDOW))),
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
    378967: function (e, t, n) {
      "use strict";
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    838332: function (e, t, n) {
      "use strict";
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    949949: function (e, t, n) {
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
    456963: function (e, t, n) {
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
    754246: function (e, t, n) {
      "use strict";
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    381515: function (e, t, n) {
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
    783301: function (e, t, n) {
      "use strict";
      e.exports = { card: "card_f30ffe" };
    },
    864073: function (e, t, n) {
      "use strict";
      e.exports = {
        title: "title_b70be6 " + n("456963").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    998139: function (e, t, n) {
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
    468888: function (e, t, n) {
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
    526803: function (e, t, n) {
      "use strict";
      e.exports = { sm: "sm_e0e2ad", md: "md_e0e2ad" };
    },
    312403: function (e, t, n) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    417859: function (e, t, n) {
      "use strict";
      e.exports = { attribution: "attribution_e4fd9f", img: "img_e4fd9f" };
    },
  },
]);
//# sourceMappingURL=f375f0bbef5e52a6acce.js.map
