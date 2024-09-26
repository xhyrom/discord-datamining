"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61694"],
  {
    269128: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        r = n(772848),
        s = n(841261);
      let l = (0, r.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: o = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(s.button, n, { [s.open]: t, [s.withHighlight]: o }),
          children: [
            o &&
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
                  stroke: o ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: o ? "url(#".concat(l, ")") : "currentColor",
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
      var o = n(481060),
        a = n(269128),
        r = n(358555),
        s = n(267642),
        l = n(26323),
        c = n(30513),
        d = n(981631),
        u = n(689938),
        h = n(472997);
      function _(e) {
        let { guild: t, banner: n } = e;
        return (0, i.jsx)("div", {
          className: h.guildBanner,
          style: { backgroundImage: "url(".concat(n) },
          children: (0, i.jsxs)("div", {
            className: h.guildHeader,
            children: [
              (0, i.jsx)(r.Z, { guild: t, isBannerVisible: !0 }),
              (0, i.jsx)(o.Heading, {
                className: h.guildName,
                variant: "heading-md/semibold",
                children: t.toString(),
              }),
              (0, i.jsx)(a.Z, { className: h.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function g(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: n,
            guild: o,
            isGIF: a,
            banner: r,
          } = e,
          h = a ? (0, s._p)(d.oNc.ANIMATED_BANNER) : (0, s._p)(d.oNc.BANNER);
        null != h &&
          (0, l.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: o,
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
              })(h, a),
              image: (0, i.jsx)(_, { guild: o, banner: r }),
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: a ? (0, c.zC)() : (0, c.XO)(),
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
      var o = n(442837),
        a = n(481060),
        r = n(906732),
        s = n(48217),
        l = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        h = n(981631),
        _ = n(30513),
        g = n(689938),
        f = n(364042);
      function b(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: b, banner: E } = e,
          N = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
          p = (0, o.e7)([c.Z], () => c.Z.getGuild(N)),
          { analyticsLocations: m } = (0, r.ZP)();
        return null == p ||
          p.hasFeature(h.oNc.ANIMATED_BANNER) ||
          (!b && p.hasFeature(h.oNc.BANNER))
          ? null
          : (0, i.jsxs)("div", {
              className: f.container,
              children: [
                (0, i.jsx)(u.Z, { className: f.guildBoostingIcon }),
                (0, i.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: g.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: f.subscribeButton,
                  onClick: () => {
                    if (null == p) return;
                    let e = {
                      section: t,
                      page: n,
                      object: h.qAy.UPSELL_HEADER,
                    };
                    null != E
                      ? (0, s.c)({
                          analyticsLocations: m,
                          analyticsLocation: e,
                          guild: p,
                          isGIF: b,
                          banner: E,
                        })
                      : (0, l.Z)({
                          analyticsLocations: m,
                          analyticsSourceLocation: e,
                          guild: p,
                          perks: b ? (0, _.zC)() : (0, _.XO)(),
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
          return m;
        },
      });
      var i = n(735250),
        o = n(470079),
        a = n(442837),
        r = n(481060),
        s = n(100527),
        l = n(906732),
        c = n(112831),
        d = n(411477),
        u = n(197115),
        h = n(594174),
        _ = n(626135),
        g = n(74538),
        f = n(981631),
        b = n(486324),
        E = n(474936),
        N = n(689938),
        p = n(634387);
      function m(e) {
        let { analyticsSection: t, type: n } = e,
          m = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
          x = g.ZP.canUseAnimatedAvatar(m),
          R = g.ZP.canUsePremiumProfileCustomization(m),
          I = (n === b.pC.BANNER && R) || (n === b.pC.AVATAR && x),
          { sourceAnalyticsLocations: A } = (0, l.ZP)(
            s.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (o.useEffect(() => {
            !I &&
              _.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: A,
              });
          }, [I, t, A]),
          I)
        )
          return null;
        let L = (0, i.jsx)(u.Z, {
          className: p.__invalid_getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: E.Si.TIER_2,
          buttonText: N.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: f.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, i.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: p.nitroPreviewUpsell,
          text: N.Z.Messages.PREMIUM_PREVIEW.format(),
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
      var o = n(180781),
        a = n(321867),
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
          ? (0, i.jsx)(a.Z, { analyticsSection: s, type: t })
          : t === r.pC.GUILD_BANNER
            ? (0, i.jsx)(o.Z, {
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
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        s = n(436774),
        l = n(112831),
        c = n(148393);
      function d(e) {
        let {
          text: t,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: o = l.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: h = !1,
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(
            h ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
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
                  color: o,
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
        let o = e.naturalWidth / e.width,
          a = t.width / 2,
          r = t.height / 2,
          s = (e.width / 2 - a - n.x) * o,
          l = (e.height / 2 - r - n.y) * o,
          c = t.width * o,
          d = t.height * o,
          u = Math.min(c, i.width),
          h = Math.min(d, i.height);
        return {
          x: s,
          y: l,
          scaledCropWidth: c,
          scaledCropHeight: d,
          canvasWidth: u,
          canvasHeight: h,
        };
      }
      function o(e, t, n, o) {
        let {
            x: a,
            y: r,
            scaledCropWidth: s,
            scaledCropHeight: l,
            canvasWidth: c,
            canvasHeight: d,
          } = i(e, t, n, o),
          u = document.createElement("canvas");
        (u.width = c), (u.height = d);
        let h = u.getContext("2d");
        return (
          null != h && h.drawImage(e, a, r, s, l, 0, 0, u.width, u.height),
          u.toDataURL("image/png")
        );
      }
      function a(e, t, n) {
        let i = e.naturalWidth / e.naturalHeight,
          a = t,
          r = n;
        e.naturalWidth > e.naturalHeight ? (a /= i) : (r *= i);
        let s = { height: a, width: r };
        return o(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, s);
      }
      n.d(t, {
        Ae: function () {
          return a;
        },
        PT: function () {
          return o;
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
  },
]);
//# sourceMappingURL=1d379f152471aa56e2f1.js.map
