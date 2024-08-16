"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31914"],
  {
    219496: function (e, t, n) {
      var r, o;
      n.d(t, {
        K: function () {
          return r;
        },
      }),
        ((o = r || (r = {})).AVAILABLE = "AVAILABLE"),
        (o.ERROR = "ERROR"),
        (o.RATE_LIMIT = "RATE_LIMIT"),
        (o.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    346585: function (e, t, n) {
      n.d(t, {
        IE: function () {
          return p;
        },
        K9: function () {
          return T;
        },
        NX: function () {
          return P;
        },
        R_: function () {
          return d;
        },
        e$: function () {
          return O;
        },
        ti: function () {
          return f;
        },
        zV: function () {
          return _;
        },
      }),
        n(757143),
        n(47120),
        n(627341);
      var r = n(913527),
        o = n.n(r),
        i = n(278074),
        s = n(768581),
        a = n(709054),
        l = n(624138),
        c = n(219496),
        u = n(801461),
        E = n(689938);
      function _(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return s.ZP.getUserAvatarURL(
          { id: e.id, avatar: e.avatar, bot: e.bot, discriminator: "0000" },
          t,
          80,
        );
      }
      function O(e) {
        let t = (0, l._I)(e.username)
          .replace(u.RN, "")
          .replace(u.iF, ".")
          .toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32);
      }
      let L = ["@", "#", ":"],
        R = [
          "```",
          "discord",
          "hypesquad",
          "system message",
          "system mesage",
          "sustem message",
          "sustem mesage",
          "clyde",
        ],
        I = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function P(e) {
        var t, n;
        let r = e.username.toLowerCase();
        if (
          ((t = r),
          (n = u.kt),
          t
            .split("")
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of L) if (r.includes(e)) return !0;
        for (let e of I) if (r === e.toLowerCase()) return !0;
        for (let e of R) if (r.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function d(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function T(e) {
        let t = a.default.extractTimestamp(e);
        try {
          return o()(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function f(e) {
        return (0, i.EQ)(e)
          .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message:
              E.Z.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: i.P.not(i.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: c.K.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: E.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: E.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: i.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: "",
          }))
          .otherwise(() => void 0);
      }
      function p(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    },
    735336: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return F;
        },
      }),
        n(47120);
      var r = n(735250),
        o = n(470079),
        i = n(120356),
        s = n.n(i),
        a = n(866442),
        l = n(442837),
        c = n(692547),
        u = n(481060),
        E = n(230711),
        _ = n(100527),
        O = n(906732),
        L = n(220082),
        R = n(583405),
        I = n(279745),
        P = n(300284),
        d = n(695346),
        T = n(314897),
        f = n(430824),
        p = n(594174),
        m = n(451478),
        A = n(626135),
        M = n(768581),
        S = n(74538),
        g = n(785717),
        C = n(888778),
        N = n(943217),
        h = n(793397),
        y = n(841040),
        Z = n(228168),
        U = n(981631),
        v = n(474936),
        x = n(689938),
        k = n(439779);
      let w = {
          [Z.y0.POPOUT]: 18,
          [Z.y0.MODAL]: 24,
          [Z.y0.SETTINGS]: 0,
          [Z.y0.PANEL]: 18,
          [Z.y0.POMELO_POPOUT]: 18,
          [Z.y0.CANCEL_MODAL]: 0,
        },
        j = {
          [Z.y0.MODAL]: U.ZY5.USER_PROFILE,
          [Z.y0.POPOUT]: U.ZY5.USER_POPOUT,
          [Z.y0.SETTINGS]: U.ZY5.USER_POPOUT,
          [Z.y0.PANEL]: U.ZY5.DM_CHANNEL,
          [Z.y0.POMELO_POPOUT]: U.ZY5.POMELO_POPOUT,
          [Z.y0.CANCEL_MODAL]: U.ZY5.USER_POPOUT,
        };
      function D(e) {
        let { type: t, shown: i, onClick: a } = e,
          c = (0, l.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return S.ZP.canUsePremiumProfileCustomization(e);
          }),
          L = o.useRef(!1),
          { analyticsLocations: R } = (0, O.ZP)(_.Z.BADGE);
        return (
          o.useEffect(() => {
            i &&
              !L.current &&
              ((L.current = !0),
              A.default.track(U.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                  page: j[t],
                  section: U.jXE.NITRO_BANNER,
                  object: U.qAy.NITRO_BADGE,
                },
                location_stack: R,
              }));
          }, [R, i, t]),
          (0, r.jsx)(u.Tooltip, {
            tooltipContentClassName: k.premiumIconTooltipContent,
            text: c
              ? x.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP
              : x.Z.Messages
                  .USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
            children: (e) =>
              (0, r.jsx)(u.Clickable, {
                ...e,
                onClick: c
                  ? void 0
                  : () => {
                      var e;
                      (e = R),
                        (0, u.openModalLazy)(async () => {
                          let { default: t } = await n
                            .e("30364")
                            .then(n.bind(n, 968031));
                          return (n) => {
                            let { onClose: o, ...i } = n;
                            return (0, r.jsx)(t, {
                              analyticsLocations: e,
                              title:
                                x.Z.Messages
                                  .USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                              description:
                                x.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format(
                                  {
                                    onAndMoreWithPremiumClick: () => {
                                      o(),
                                        E.Z.open(U.oAB.PREMIUM, null, {
                                          analyticsLocations: e,
                                        });
                                    },
                                  },
                                ),
                              onClose: o,
                              ...i,
                            });
                          };
                        }),
                        null == a || a();
                    },
                className: s()(k.premiumIconWrapper, {
                  [k.visible]: i,
                  [k.clickable]: !c,
                }),
                children: (0, r.jsx)(u.TextBadge, {
                  color: "rgba(32, 34, 37, 0.8)",
                  text: (0, r.jsx)(u.NitroWheelIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: k.premiumIcon,
                  }),
                }),
              }),
          })
        );
      }
      function b(e) {
        let {
            darkenOnHover: t,
            profileType: n,
            profileLabel: o,
            icon: i,
            ...s
          } = e,
          a = w[n],
          l = "pencil" === i ? u.PencilIcon : u.SettingsIcon;
        return (0, r.jsx)(u.Clickable, {
          ...s,
          "aria-label": o,
          className: t ? k.pencilContainerDark : k.pencilContainer,
          children: (0, r.jsx)(u.Tooltip, {
            text: o,
            children: (e) =>
              (0, r.jsx)(l, {
                ...e,
                color: "currentColor",
                size: "custom",
                width: a,
                height: a,
                className: k.editIcon,
              }),
          }),
        });
      }
      function F(e) {
        var t, n;
        let {
            user: i,
            displayProfile: E,
            onClose: _,
            guildId: O,
            profileType: p,
            isHovering: A,
            animateOnHover: w,
            allowEdit: j = !0,
            showPremiumBadgeUpsell: F = !0,
            hasProfileEffect: B = !1,
          } = e,
          Y = (0, l.e7)([f.Z], () => f.Z.getGuild(O)),
          G = (0, l.e7)([T.default], () => T.default.getId()) === i.id && j,
          K = S.ZP.isPremiumAtLeast(
            null == E ? void 0 : E.premiumType,
            v.p9.TIER_2,
          ),
          { trackUserProfileAction: z } = (0, g.KZ)(),
          [H, V] = o.useState(!1),
          W = (0, l.e7)([m.Z], () => m.Z.isFocused()),
          X = d.QK.getSetting(),
          { bannerSrc: q, status: Q } = (0, C.Z)({
            displayProfile: E,
            size: (0, h.e7)(p),
            canAnimate: w || !X ? H : W,
          }),
          $ = (0, u.useToken)(c.Z.unsafe_rawColors.PRIMARY_800).hex(),
          J = (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80),
          ee = (0, a._i)((0, L.ZP)(i.getAvatarURL(O, J), $, !1)),
          et = (0, R.Z)(
            null !== (t = null == E ? void 0 : E.primaryColor) && void 0 !== t
              ? t
              : ee,
          ).hsl,
          en = (0, P.Z)({
            analyticsLocation: {
              page: U.ZY5.USER_POPOUT,
              section: U.jXE.PROFILE_POPOUT,
            },
          });
        return (0, r.jsx)(N.Z, {
          isPremium: K,
          hasThemeColors:
            null !== (n = null == E ? void 0 : E.canEditThemes) &&
            void 0 !== n &&
            n,
          profileType: p,
          hasBanner: null != q,
          hasProfileEffect: B,
          children: (0, r.jsxs)("div", {
            className: s()(
              k.banner,
              (0, h.Ae)({
                profileType: p,
                user: {
                  hasBanner: null != q,
                  isPremium: K,
                  hasProfileEffect: B,
                },
              }),
              { [k.reducedMotion]: !X },
            ),
            onMouseMove: () => V(!0),
            onMouseLeave: () => V(!1),
            style: {
              backgroundImage: null != q ? "url(".concat(q, ")") : void 0,
              backgroundColor:
                Q !== C.s.COMPLETE ? c.Z.unsafe_rawColors.PRIMARY_800.css : et,
            },
            children: [
              G
                ? null == Y
                  ? (0, r.jsx)(b, {
                      darkenOnHover: B && A,
                      profileType: p,
                      profileLabel: x.Z.Messages.EDIT_PROFILE,
                      icon: "pencil",
                      onClick: () => {
                        z({ action: "EDIT_PROFILE" }), null == _ || _(), en();
                      },
                    })
                  : (0, r.jsx)(u.Popout, {
                      spacing: 6,
                      position: "bottom",
                      renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(y.Z, {
                          onClose: t,
                          onSelect: _,
                          guild: Y,
                        });
                      },
                      children: (e) =>
                        (0, r.jsx)(b, {
                          darkenOnHover: B && A,
                          profileLabel: x.Z.Messages.EDIT_PROFILE,
                          icon: "pencil",
                          ...e,
                          profileType: p,
                        }),
                    })
                : F && null != q && p !== Z.y0.SETTINGS
                  ? (0, r.jsx)(D, {
                      type: p,
                      shown: void 0 === A ? H : A,
                      onClick: () => {
                        z({ action: "PRESS_PREMIUM_UPSELL" }), null == _ || _();
                      },
                    })
                  : null,
              !X && (0, M.F8)(q) && (0, r.jsx)(I.Z, { className: k.gifTag }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=63e16b6c0a73f92140af.js.map
