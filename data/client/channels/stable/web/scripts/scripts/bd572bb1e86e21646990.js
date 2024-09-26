"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72891"],
  {
    269128: function (e, t, n) {
      var o = n(735250);
      n(470079);
      var i = n(120356),
        a = n.n(i),
        s = n(772848),
        r = n(841261);
      let l = (0, s.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: i = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(r.button, n, { [r.open]: t, [r.withHighlight]: i }),
          children: [
            i &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, o.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, o.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, o.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, o.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, o.jsx)("path", {
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
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
      var o = n(735250);
      n(470079);
      var i = n(481060),
        a = n(269128),
        s = n(358555),
        r = n(267642),
        l = n(26323),
        c = n(30513),
        d = n(981631),
        u = n(689938),
        _ = n(472997);
      function f(e) {
        let { guild: t, banner: n } = e;
        return (0, o.jsx)("div", {
          className: _.guildBanner,
          style: { backgroundImage: "url(".concat(n) },
          children: (0, o.jsxs)("div", {
            className: _.guildHeader,
            children: [
              (0, o.jsx)(s.Z, { guild: t, isBannerVisible: !0 }),
              (0, o.jsx)(i.Heading, {
                className: _.guildName,
                variant: "heading-md/semibold",
                children: t.toString(),
              }),
              (0, o.jsx)(a.Z, { className: _.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function g(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: n,
            guild: i,
            isGIF: a,
            banner: s,
          } = e,
          _ = a ? (0, r._p)(d.oNc.ANIMATED_BANNER) : (0, r._p)(d.oNc.BANNER);
        null != _ &&
          (0, l.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
              title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
              subtitle: (function (e, t) {
                let n = (0, r.nW)(e);
                return t
                  ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format(
                      { targetLevelOrPlan: n },
                    )
                  : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format(
                      { targetLevelOrPlan: n },
                    );
              })(_, a),
              image: (0, o.jsx)(f, { guild: i, banner: s }),
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: a ? (0, c.zC)() : (0, c.XO)(),
          });
      }
    },
    195297: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120);
      var o = n(735250),
        i = n(470079),
        a = n(120356),
        s = n.n(a),
        r = n(481060),
        l = n(100527),
        c = n(906732),
        d = n(313201),
        u = n(455708),
        _ = n(81245),
        f = n(530329),
        g = n(626135),
        p = n(488499),
        E = n(58384),
        N = n(981631),
        h = n(486324),
        A = n(689938),
        R = n(76899);
      function x(e) {
        let {
            transitionState: t,
            onClose: a,
            onComplete: x,
            uploadType: I,
            showUpsellHeader: m,
            analyticsPage: L,
          } = e,
          [M, P] = i.useState(!1),
          C = (0, r.useModalContext)(),
          Z = (0, d.Dt)(),
          { analyticsLocations: j } = (0, c.ZP)(l.Z.GIF_PICKER);
        async function B(e) {
          let { gifSrc: t } = e;
          if (null == t || M) return;
          P(!0);
          let i = (0, E.Q)(t),
            s = await fetch(i),
            l = await s.blob();
          a(),
            (0, r.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("48017"),
                  n.e("53243"),
                ]).then(n.bind(n, 850085));
                return (t) =>
                  (0, o.jsx)(e, {
                    imgURI: i,
                    file: new File([l], "tenor.gif", { type: "image/gif" }),
                    onCrop: x,
                    uploadType: I,
                    showUpsellHeader: m,
                    ...t,
                  });
              },
              { contextKey: C },
            );
        }
        i.useEffect(() => {
          g.default.track(N.rMx.OPEN_MODAL, {
            type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location: { page: L },
          });
        }, [L]);
        let S = I === h.pC.AVATAR || I === h.pC.BANNER,
          U = (0, _.Mu)("GIFPickerCroppingModal", !S);
        return (0, o.jsx)(c.Gt, {
          value: j,
          children: (0, o.jsxs)(r.ModalRoot, {
            "aria-labelledby": Z,
            transitionState: t,
            size: r.ModalSize.SMALL,
            children: [
              m &&
                !U &&
                (0, o.jsx)(p.Z, {
                  type: I,
                  analyticsPage: L,
                  analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                  isGIF: !0,
                }),
              (0, o.jsxs)(r.ModalHeader, {
                className: R.modalHeader,
                separator: !1,
                children: [
                  (0, o.jsx)(r.FormTitle, {
                    className: R.titleCase,
                    tag: r.FormTitleTags.H1,
                    children: A.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
                  }),
                  (0, o.jsx)(r.ModalCloseButton, {
                    onClick: a,
                    className: R.modalCloseButton,
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)(u.Z, {
                    contentClassName: s()({ [R.gifPickerContent]: m && U }),
                    className: s()(R.gifPicker, { [R.loadingOverlay]: M }),
                    onSelectGIF: B,
                    hideFavorites: !0,
                  }),
                  M && (0, o.jsx)(r.Spinner, { className: R.spinner }),
                ],
              }),
              m &&
                U &&
                (0, o.jsx)(f.Z, {
                  uploadType: I,
                  showUpsell: !0,
                  className: R.nitroUpsell,
                  onSecondaryClick: a,
                }),
            ],
          }),
        });
      }
    },
    180781: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var o = n(735250);
      n(470079);
      var i = n(442837),
        a = n(481060),
        s = n(906732),
        r = n(48217),
        l = n(26323),
        c = n(430824),
        d = n(914010),
        u = n(709586),
        _ = n(981631),
        f = n(30513),
        g = n(689938),
        p = n(364042);
      function E(e) {
        let { analyticsSection: t, analyticsPage: n, isGIF: E, banner: N } = e,
          h = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
          A = (0, i.e7)([c.Z], () => c.Z.getGuild(h)),
          { analyticsLocations: R } = (0, s.ZP)();
        return null == A ||
          A.hasFeature(_.oNc.ANIMATED_BANNER) ||
          (!E && A.hasFeature(_.oNc.BANNER))
          ? null
          : (0, o.jsxs)("div", {
              className: p.container,
              children: [
                (0, o.jsx)(u.Z, { className: p.guildBoostingIcon }),
                (0, o.jsx)(a.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: g.Z.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, o.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.LINK,
                  className: p.subscribeButton,
                  onClick: () => {
                    if (null == A) return;
                    let e = {
                      section: t,
                      page: n,
                      object: _.qAy.UPSELL_HEADER,
                    };
                    null != N
                      ? (0, r.c)({
                          analyticsLocations: R,
                          analyticsLocation: e,
                          guild: A,
                          isGIF: E,
                          banner: N,
                        })
                      : (0, l.Z)({
                          analyticsLocations: R,
                          analyticsSourceLocation: e,
                          guild: A,
                          perks: E ? (0, f.zC)() : (0, f.XO)(),
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
          return R;
        },
      });
      var o = n(735250),
        i = n(470079),
        a = n(442837),
        s = n(481060),
        r = n(100527),
        l = n(906732),
        c = n(112831),
        d = n(411477),
        u = n(197115),
        _ = n(594174),
        f = n(626135),
        g = n(74538),
        p = n(981631),
        E = n(486324),
        N = n(474936),
        h = n(689938),
        A = n(634387);
      function R(e) {
        let { analyticsSection: t, type: n } = e,
          R = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
          x = g.ZP.canUseAnimatedAvatar(R),
          I = g.ZP.canUsePremiumProfileCustomization(R),
          m = (n === E.pC.BANNER && I) || (n === E.pC.AVATAR && x),
          { sourceAnalyticsLocations: L } = (0, l.ZP)(
            r.Z.PREMIUM_PREVIEW_UPSELL_HEADER,
          );
        if (
          (i.useEffect(() => {
            !m &&
              f.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: L,
              });
          }, [m, t, L]),
          m)
        )
          return null;
        let M = (0, o.jsx)(u.Z, {
          className: A.__invalid_getNitroLink,
          size: s.Button.Sizes.SMALL,
          look: s.Button.Looks.LINK,
          color: s.Button.Colors.LINK,
          subscriptionTier: N.Si.TIER_2,
          buttonText: h.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: p.qAy.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, o.jsx)(d.Z, {
          reducedRightPadding: !0,
          className: A.nitroPreviewUpsell,
          text: h.Z.Messages.PREMIUM_PREVIEW.format(),
          textSize: c.Z.Sizes.SIZE_14,
          textColor: c.Z.Colors.HEADER_PRIMARY,
          button: M,
        });
      }
    },
    488499: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(735250);
      n(470079);
      var i = n(180781),
        a = n(321867),
        s = n(486324);
      function r(e) {
        let {
          type: t,
          analyticsPage: n,
          analyticsSection: r,
          isGIF: l,
          banner: c,
        } = e;
        return [s.pC.BANNER, s.pC.AVATAR].includes(t) && l
          ? (0, o.jsx)(a.Z, { analyticsSection: r, type: t })
          : t === s.pC.GUILD_BANNER
            ? (0, o.jsx)(i.Z, {
                analyticsSection: r,
                analyticsPage: n,
                isGIF: l,
                banner: c,
              })
            : null;
      }
    },
    58384: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return a;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var o = n(981631);
      let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
      function a(e) {
        let t = new URL("".concat(window.location.protocol).concat(e)),
          { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
        if (null == t.pathname.match(i))
          throw Error("Unexpected Tenor GIF path.");
        let a = "".concat(o.ANM.TENOR_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(n).concat(a);
      }
    },
    411477: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var o = n(735250);
      n(470079);
      var i = n(120356),
        a = n.n(i),
        s = n(481060),
        r = n(436774),
        l = n(112831),
        c = n(148393);
      function d(e) {
        let {
          text: t,
          textSize: n = l.Z.Sizes.SIZE_12,
          textColor: i = l.Z.Colors.STANDARD,
          className: d,
          button: u,
          reducedRightPadding: _ = !1,
        } = e;
        return (0, o.jsxs)("div", {
          className: a()(
            _ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding,
            d,
          ),
          children: [
            (0, o.jsxs)("div", {
              className: c.noticeLeft,
              children: [
                (0, o.jsx)(s.NitroWheelIcon, {
                  size: "md",
                  className: c.icon,
                  color: r.JX.PREMIUM_TIER_2,
                }),
                (0, o.jsx)(l.Z, {
                  className: c.text,
                  size: n,
                  color: i,
                  children: t,
                }),
              ],
            }),
            u,
          ],
        });
      }
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
    76899: function (e, t, n) {
      e.exports = {
        gifPickerContent: "gifPickerContent_fede6c",
        gifPicker: "gifPicker_fede6c",
        modalHeader: "modalHeader_fede6c",
        titleCase: "titleCase_fede6c",
        loadingOverlay: "loadingOverlay_fede6c",
        spinner: "spinner_fede6c",
        modalCloseButton: "modalCloseButton_fede6c",
        nitroUpsell: "nitroUpsell_fede6c",
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
//# sourceMappingURL=bd572bb1e86e21646990.js.map
