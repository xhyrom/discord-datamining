"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93865"],
  {
    269128: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        r = n(772848),
        s = n(841261);
      let l = (0, r.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: a = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(s.button, n, { [s.open]: t, [s.withHighlight]: a }),
          children: [
            a &&
              (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, i.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, i.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, i.jsx)("path", {
                  stroke: a ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: a ? "url(#".concat(l, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    48217: function (e, t, n) {
      n.d(t, {
        c: function () {
          return g;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(481060),
        o = n(269128),
        r = n(358555),
        s = n(267642),
        l = n(26323),
        c = n(30513),
        d = n(981631),
        u = n(689938),
        _ = n(472997);
      function h(e) {
        let { guild: t, banner: n } = e;
        return (0, i.jsx)("div", {
          className: _.guildBanner,
          style: { backgroundImage: "url(".concat(n) },
          children: (0, i.jsxs)("div", {
            className: _.guildHeader,
            children: [
              (0, i.jsx)(r.Z, { guild: t, isBannerVisible: !0 }),
              (0, i.jsx)(a.Heading, {
                className: _.guildName,
                variant: "heading-md/semibold",
                children: t.toString(),
              }),
              (0, i.jsx)(o.Z, { className: _.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function g(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: n,
            guild: a,
            isGIF: o,
            banner: r,
          } = e,
          _ = o ? (0, s._p)(d.oNc.ANIMATED_BANNER) : (0, s._p)(d.oNc.BANNER);
        null != _ &&
          (0, l.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: a,
            headerProps: {
              title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
              subtitle: (function (e, t) {
                let n = (0, s.nW)(e);
                return t
                  ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format(
                      { targetLevelOrPlan: n },
                    )
                  : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format(
                      { targetLevelOrPlan: n },
                    );
              })(_, o),
              image: (0, i.jsx)(h, { guild: a, banner: r }),
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: o ? (0, c.zC)() : (0, c.XO)(),
          });
      }
    },
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(442837),
        o = n(481060),
        r = n(906732),
        s = n(48217),
        l = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        _ = n(981631),
        h = n(30513),
        g = n(689938),
        f = n(364042);
      function b(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: b, banner: p } = e,
          E = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
          m = (0, a.e7)([c.Z], () => c.Z.getGuild(E)),
          { analyticsLocations: N } = (0, r.ZP)();
        return null == m ||
          m.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!b && m.hasFeature(_.oNc.BANNER))
          ? null
          : (0, i.jsxs)("div", {
              className: f.container,
              children: [
                (0, i.jsx)(u.Z, { className: f.guildBoostingIcon }),
                (0, i.jsx)(o.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: g.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, i.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.LINK,
                  className: f.subscribeButton,
                  onClick: () => {
                    if (null == m) return;
                    let e = {
                      section: t,
                      page: n,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != p
                      ? (0, s.c)({
                          analyticsLocations: N,
                          analyticsLocation: e,
                          guild: m,
                          isGIF: b,
                          banner: p,
                        })
                      : (0, l.Z)({
                          analyticsLocations: N,
                          analyticsSourceLocation: e,
                          guild: m,
                          perks: b ? (0, h.zC)() : (0, h.XO)(),
                        });
                  },
                  children: g.Z.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    321867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      });
      var i = n(735250),
        a = n(470079),
        o = n(442837),
        r = n(481060),
        s = n(100527),
        l = n(906732),
        c = n(112831),
        d = n(411477),
        u = n(197115),
        _ = n(594174),
        h = n(626135),
        g = n(74538),
        f = n(981631),
        b = n(486324),
        p = n(474936),
        E = n(689938),
        m = n(634387);
      function N(e) {
        let { analyticsSection: t, type: n } = e,
          N = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
          x = g.ZP.canUseAnimatedAvatar(N),
          I = g.ZP.canUsePremiumProfileCustomization(N),
          R = (n === b.pC.BANNER && I) || (n === b.pC.AVATAR && x),
          { sourceAnalyticsLocations: A } = (0, l.ZP)(
            s.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (a.useEffect(() => {
            !R &&
              h.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: A,
              });
          }, [R, t, A]),
          R)
        )
          return null;
        let L = (0, i.jsx)(u.Z, {
          className: m.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: p.Si.TIER_2,
          buttonText: E.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: f.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, i.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: m.nitroPreviewUpsell,
          text: E.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: L,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(180781),
        o = n(321867),
        r = n(486324);
      function s(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: s,
          isGIF: l,
          banner: c,
        } = e;
        return [r.pC.BANNER, r.pC.AVATAR].includes(t) && l
          ? (0, i.jsx)(o.Z, { analyticsSection: s, type: t })
          : t === r.pC.GUILD_BANNER
            ? (0, i.jsx)(a.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c,
              })
            : null;
      }
    },
    411477: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        r = n(481060),
        s = n(436774),
        l = n(112831),
        c = n(148393);
      function d(e) {
        let {
          text: t,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: a = l.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(
            _ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, i.jsxs)("div", {
              className: c.noticeLeft,
              children: [
                (0, i.jsx)(r.NitroWheelIcon, {
                  size: "md",
                  className: c.icon,
                  color: s.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)(l.Z, {
                  className: c.text,
                  size: n,
                  color: a,
                  children: t,
                }),
              ],
            }),
            u,
          ],
        });
      }
    },
    36793: function (e, t, n) {
      function i(e, t, n, i) {
        let a = e.naturalWidth / e.width,
          o = t.width / 2,
          r = t.height / 2,
          s = (e.width / 2 - o - n.x) * a,
          l = (e.height / 2 - r - n.y) * a,
          c = t.width * a,
          d = t.height * a,
          u = Math.min(c, i.width),
          _ = Math.min(d, i.height);
        return {
          x: s,
          y: l,
          scaledCropWidth: c,
          scaledCropHeight: d,
          canvasWidth: u,
          canvasHeight: _,
        };
      }
      function a(e, t, n, a) {
        let {
            x: o,
            y: r,
            scaledCropWidth: s,
            scaledCropHeight: l,
            canvasWidth: c,
            canvasHeight: d,
          } = i(e, t, n, a),
          u = document.createElement("canvas");
        (u.width = c), (u.height = d);
        let _ = u.getContext("2d");
        return (
          null != _ && _.drawImage(e, o, r, s, l, 0, 0, u.width, u.height),
          u.toDataURL("image/png")
        );
      }
      function o(e, t, n) {
        let i = e.naturalWidth / e.naturalHeight,
          o = t,
          r = n;
        e.naturalWidth > e.naturalHeight ? (o /= i) : (r *= i);
        let s = { height: o, width: r };
        return a(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, s);
      }
      n.d(t, {
        Ae: function () {
          return o;
        },
        PT: function () {
          return a;
        },
        eu: function () {
          return i;
        },
      });
    },
    841261: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    472997: function (e, t, n) {
      e.exports = {
        guildBanner: "guildBanner_f9de8e",
        guildHeader: "guildHeader_f9de8e",
        guildName: "guildName_f9de8e",
        dropdown: "dropdown_f9de8e",
      };
    },
    57739: function (e, t, n) {
      e.exports = {
        modalContent: "modalContent_ba5b9e",
        editingContainer: "editingContainer_ba5b9e",
        imageEnabled: "imageEnabled_ba5b9e image_ba5b9e",
        imageDisabled: "imageDisabled_ba5b9e image_ba5b9e",
        icon: "icon_ba5b9e",
        overlayAvatar: "overlayAvatar_ba5b9e overlay_ba5b9e",
        overlayBanner: "overlayBanner_ba5b9e overlay_ba5b9e",
        sliderContainer: "sliderContainer_ba5b9e",
        nitroUpsell: "nitroUpsell_ba5b9e",
        cancelButton: "cancelButton_ba5b9e",
        modalFooter: "modalFooter_ba5b9e",
        buttonsRight: "buttonsRight_ba5b9e",
        titleCase: "titleCase_ba5b9e",
      };
    },
    364042: function (e, t, n) {
      e.exports = {
        container: "container_dd2728",
        guildBoostingIcon: "guildBoostingIcon_dd2728",
        subscribeButton: "subscribeButton_dd2728",
      };
    },
    634387: function (e, t, n) {
      e.exports = { nitroPreviewUpsell: "nitroPreviewUpsell_f55465" };
    },
    148393: function (e, t, n) {
      e.exports = {
        noticeWithoutRightPadding:
          "noticeWithoutRightPadding_f97380 notice_f97380",
        noticeWithRightPadding: "noticeWithRightPadding_f97380 notice_f97380",
        noticeLeft: "noticeLeft_f97380",
        icon: "icon_f97380",
        text: "text_f97380",
      };
    },
    821774: function (e, t, n) {
      e.exports = {
        modal: "modal_b2a2a3",
        modalContent: "modalContent_b2a2a3",
        previewContainerParent: "previewContainerParent_b2a2a3",
        previewContainer: "previewContainer_b2a2a3",
      };
    },
    706995: function (e, t, n) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, t, n) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, t, n) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
  },
]);
//# sourceMappingURL=f0a1956f51cb8ab9aa01.js.map
