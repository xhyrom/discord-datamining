"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79360"],
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
          return i;
        },
      }),
        t(47120);
      var r = t(553813),
        o = t.n(r),
        a = t(358085);
      let l = {
        [a.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function i(e) {
        let n = l[(0, a.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            a = n[t];
          if (null == r || null == a || null != r.error) continue;
          let l = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!o().satisfies(l, a)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      var r = t(553813),
        o = t.n(r),
        a = t(358085);
      let l = { [a.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function i(e) {
        let n = l[(0, a.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            a = n[t];
          if (null == r || null == a || null != r.error) continue;
          let l = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!o().satisfies(l, a)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, n, t) {
      var r,
        o,
        a,
        l,
        i = t(442837),
        c = t(570140),
        u = t(358085),
        d = t(998502),
        s = t(869614),
        f = t(281083),
        m = t(672598);
      let _ = !1,
        p = !0,
        x = !1;
      class h extends (l = i.ZP.Store) {
        initialize() {
          !(!u.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
              (_ = (0, m.Z)(e)),
                (p = (0, s.Z)(e)),
                (x = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return _;
        }
        get canUseHardwareAcceleration() {
          return p;
        }
        get problematicGPUDriver() {
          return x;
        }
        getState() {
          return {
            GPUDriversOutdated: _,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: x,
          };
        }
      }
      (a = "StreamingCapabilitiesStore"),
        (o = "displayName") in (r = h)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
        (n.Z = new h(c.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (_ = n.GPUDriversOutdated), (p = n.canUseHardwareAcceleration);
          },
        }));
    },
    942951: function (e, n, t) {
      t.d(n, {
        l: function () {
          return f;
        },
      });
      var r = t(200651),
        o = t(192379),
        a = t(481060),
        l = t(100527),
        i = t(906732),
        c = t(184301),
        u = t(347475),
        d = t(592125),
        s = t(91047);
      function f(e) {
        var n, t;
        let {
            user: f,
            channelId: m,
            guildId: _,
            messageId: p,
            stopPropagation: x = !1,
            ariaLabel: h,
          } = e,
          { analyticsLocations: g } = (0, i.ZP)(l.Z.USERNAME);
        let I =
          ((n = f),
          (t = m),
          o.useCallback(
            (e) => {
              let r = d.Z.getChannel(t);
              null != r && null != n && (0, s.Pv)(e, n, r);
            },
            [n, t],
          ));
        return o.useCallback(
          (e) => (n, t) => {
            let o = (t) =>
                (0, r.jsx)(a.NameWithRoleAnchor, {
                  ...(null != t ? t : {}),
                  onContextMenu: I,
                  name: n,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": h,
                }),
              l = (e) => (n) => {
                x && n.stopPropagation(), e(n);
              };
            return (0, r.jsx)(
              i.Gt,
              {
                value: g,
                children:
                  null != f
                    ? (0, r.jsx)(a.Popout, {
                        position: "right",
                        preload: () =>
                          (0, c.Z)(f.id, f.getAvatarURL(_, 80), {
                            guildId: _,
                            channelId: m,
                          }),
                        renderPopout: (n) =>
                          (0, r.jsx)(u.Z, {
                            ...n,
                            userId: f.id,
                            guildId: _,
                            channelId: m,
                            messageId: p,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: n, ...t } = e;
                          return o({ onClick: l(n), ...t });
                        },
                      })
                    : o(void 0),
              },
              t,
            );
          },
          [g, f, m, _, p, I, x, h],
        );
      }
    },
    67390: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r,
        o,
        a = t(200651);
      t(192379);
      var l = t(120356),
        i = t.n(l),
        c = t(410030),
        u = t(231338),
        d = t(388032),
        s = t(858895);
      function f(e) {
        let { className: n, size: t = "md" } = e,
          r =
            (0, c.ZP)() === u.BR.LIGHT
              ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png"
              : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
        return (0, a.jsx)("img", {
          className: i()(n, { [s.sm]: "sm" === t, [s.md]: "md" === t }),
          src: r,
          alt: d.intl.string(d.t.htEhYm),
        });
      }
      ((r = o || (o = {})).SMALL = "sm"), (r.MEDIUM = "md");
    },
    494620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
        z: function () {
          return o;
        },
      });
      var r,
        o,
        a = t(200651);
      t(192379);
      var l = t(120356),
        i = t.n(l),
        c = t(481060),
        u = t(509427);
      ((r = o || (o = {})).INFO = "info"), (r.WARNING = "warning");
      let d = { info: u.info, warning: u.warning },
        s = { info: c.CircleInformationIcon, warning: c.CircleWarningIcon };
      function f(e) {
        let { children: n, className: t, look: r = "info" } = e,
          o = s[r];
        return (0, a.jsxs)("div", {
          className: i()(u.root, t, d[r]),
          children: [
            (0, a.jsx)(o, { className: u.icon, color: "currentColor" }),
            (0, a.jsx)(c.Text, {
              className: u.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    91047: function (e, n, t) {
      t.d(n, {
        Pv: function () {
          return a;
        },
        _j: function () {
          return l;
        },
        nm: function () {
          return i;
        },
        xS: function () {
          return c;
        },
      }),
        t(411104);
      var r = t(200651);
      t(192379);
      var o = t(239091);
      function a(e, n, a) {
        a.isGroupDM()
          ? (0, o.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("50506"),
                t.e("79695"),
                t.e("51269"),
                t.e("13351"),
                t.e("33862"),
                t.e("92453"),
                t.e("91674"),
              ]).then(t.bind(t, 354589));
              return (t) => (0, r.jsx)(e, { ...t, user: n, channel: a });
            })
          : a.isDM()
            ? (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  t.e("50506"),
                  t.e("79695"),
                  t.e("51269"),
                  t.e("90508"),
                  t.e("13351"),
                  t.e("33862"),
                  t.e("70205"),
                  t.e("92453"),
                  t.e("56826"),
                  t.e("25913"),
                ]).then(t.bind(t, 131404));
                return (t) =>
                  (0, r.jsx)(e, {
                    ...t,
                    user: n,
                    channel: a,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != a.guild_id
              ? (0, o.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("50506"),
                    t.e("79695"),
                    t.e("51269"),
                    t.e("13351"),
                    t.e("33862"),
                    t.e("92453"),
                    t.e("13125"),
                    t.e("84006"),
                  ]).then(t.bind(t, 757387));
                  return (t) =>
                    (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: a,
                      guildId: a.guild_id,
                    });
                })
              : (0, o.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("79695"),
                    t.e("69220"),
                    t.e("76747"),
                  ]).then(t.bind(t, 881351));
                  return (t) => (0, r.jsx)(e, { ...t, user: n });
                });
      }
      function l(e, n) {
        let { user: a, channel: l, moderationAlertId: i, guildId: c, ...u } = n;
        if (
          (null == l ? void 0 : l.isGroupDM()) ||
          (null == l ? void 0 : l.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != c ? c : null == l ? void 0 : l.getGuildId();
        null != d &&
          (0, o.jW)(e, async () => {
            let { default: e } = await Promise.all([
              t.e("13125"),
              t.e("12837"),
            ]).then(t.bind(t, 833737));
            return (n) =>
              (0, r.jsx)(e, {
                ...n,
                user: a,
                channelId: null == l ? void 0 : l.id,
                guildId: d,
                moderationAlertId: i,
                ...u,
              });
          });
      }
      function i(e, n) {
        let {
          user: a,
          guildId: l,
          analyticsLocations: i,
          onCloseContextMenu: c,
          isViewOnly: u,
        } = n;
        (0, o.jW)(e, async () => {
          let { default: e } = await t.e("45130").then(t.bind(t, 246389));
          return (n) =>
            (0, r.jsx)(e, {
              ...n,
              user: a,
              guildId: l,
              analyticsLocations: i,
              onCloseContextMenu: c,
              isViewOnly: u,
            });
        });
      }
      function c(e, n, a) {
        null != a &&
          (0, o.jW)(e, async () => {
            let { default: e } = await t.e("50331").then(t.bind(t, 158195));
            return (n) => (0, r.jsx)(e, { ...n, guildId: a });
          });
      }
    },
    936670: function (e, n, t) {
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    622563: function (e, n, t) {
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    836423: function (e, n, t) {
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
    795331: function (e, n, t) {
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
    453819: function (e, n, t) {
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    781425: function (e, n, t) {
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
    927616: function (e, n, t) {
      e.exports = { card: "card_f30ffe" };
    },
    334229: function (e, n, t) {
      e.exports = {
        title: "title_b70be6 " + t("795331").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    95779: function (e, n, t) {
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
    33354: function (e, n, t) {
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
    858895: function (e, n, t) {
      e.exports = { sm: "sm_e0e2ad", md: "md_e0e2ad" };
    },
    509427: function (e, n, t) {
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    637464: function (e, n, t) {
      e.exports = { attribution: "attribution_e4fd9f", img: "img_e4fd9f" };
    },
  },
]);
//# sourceMappingURL=c720dc5a8b12616096df.js.map
