"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34418"],
  {
    93364(e) {
      e.exports = "/assets/185ece790f20d870.svg";
    },
    747198(e, t, i) {
      i.d(t, { i: () => o });
      var s = i(64700),
        l = i(635358),
        a = i(17928),
        n = i(736056),
        r = i(693477),
        c = i(590180);
      function o(e, t, i) {
        let o = (0, a.bG)([n.A], () => n.A.hasLoadedExperiments),
          [d, u, m, T, g, x, f] = (0, a.yK)([c.A], () => [
            c.A.isFetchingCategories,
            c.A.lastFetchOptions,
            c.A.error,
            c.A.lastErrorTimestamp ?? 0,
            c.A.lastSuccessfulFetch ?? 0,
            c.A.categories,
            c.A.skipNumCategories,
          ]);
        return (
          (0, s.useEffect)(() => {
            if (!o || c.A.isFetchingCategories) return;
            let s = Date.now() - T < 6e5;
            if (m && s) return;
            let a = {
                ...e,
                variantsReturnStyle: l.g.VARIANTS_GROUP,
                includeBundles: !0,
                skipNumCategories: f,
              },
              n = !(0, r.gn)(u, a),
              d = Date.now() - g < 6e5;
            (n || !d) && (0, r.CK)(a, t, i);
          }, [o, u, g, e, m, T, t, i, f]),
          {
            isFetching: d,
            categories: x,
            fetchCategoriesError: m,
            refreshCategories: (0, s.useCallback)(() => {
              let t = {
                ...e,
                variantsReturnStyle: l.g.VARIANTS_GROUP,
                includeBundles: !0,
                skipNumCategories: f,
              };
              (0, r.CK)(t, void 0, i);
            }, [e, i, f]),
          }
        );
      }
    },
    816866(e, t, i) {
      i.d(t, { ZK: () => A, pF: () => f, wu: () => x }),
        i(323874),
        i(14289),
        i(35956),
        i(321073);
      var s = i(64700),
        l = i(942381),
        a = i(265690),
        n = i(121894),
        r = i(506774),
        c = i(691540),
        o = i(857250),
        d = i(97483),
        u = i(87558);
      let m = "__DEBUG_PROFILE_EFFECTS_STORE",
        T = { profileEffects: r.w.get(m) ?? {} },
        g = (e) => {
          try {
            r.w.set(m, e.profileEffects);
          } catch (e) {
            console.error(e),
              (0, c.P0)(
                (0, o.o)(
                  "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                  d.Ck.FAILURE,
                ),
              );
          }
        },
        x = (0, a.h)((e) => ({
          ...T,
          upsertProfileEffect: (t) =>
            (0, n.r)(() => {
              e((e) => {
                let i = { ...e };
                return (i.profileEffects[t.skuId] = t), g(i), i;
              });
            }),
          deleteProfileEffect: (t) =>
            (0, n.r)(() => {
              e((e) => {
                let i = { ...e };
                return delete i.profileEffects[t], g(i), i;
              });
            }),
          clearAll: () =>
            (0, n.r)(() => {
              e(() => (r.w.remove(m), { profileEffects: {} }));
            }),
        })),
        f = () =>
          x((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
          }, l.x),
        A = (e) => {
          let t = x((t) => (null != e ? t.profileEffects[e] : null)),
            i = s.useRef([]);
          return (
            s.useEffect(
              () => () => {
                i.current.forEach((e) => {
                  URL.revokeObjectURL(e);
                }),
                  (i.current = []);
              },
              [],
            ),
            s.useMemo(() => {
              if (null == t) return null;
              let e = (e) => {
                  let t = (0, u.fB)(e);
                  return i.current.push(t), t;
                },
                s = t.stillFrames,
                l = null != s ? { ...s } : {};
              for (let t in l) {
                let i = l[t];
                null != i && (l[t] = { ...i, src: e(i.base64) });
              }
              return { ...t, stillFrames: l };
            }, [t])
          );
        };
    },
    508155(e, t, i) {
      i.d(t, { t: () => r });
      var s = i(473145),
        l = i(652215),
        a = i(788868),
        n = i(985018);
      let r = [
        {
          tier: l.TVA.TIER_1,
          perks: [
            {
              perkIcon: s.TP.EMOJI,
              getCopy: () =>
                n.intl.formatToPlainString(n.t.Tlz0x1, {
                  numEmojiSlots: a.TG[l.TVA.TIER_1].limits.emoji,
                }),
            },
            {
              perkIcon: s.TP.SOUNDBOARD,
              getCopy: () =>
                n.intl.formatToPlainString(n.t["v+MIfo"], {
                  numSoundboardSlots:
                    a.TG[l.TVA.TIER_1].limits.soundboardSounds,
                }),
              isNew: !0,
            },
            {
              perkIcon: s.TP.ANIMATED,
              getCopy: () => n.intl.string(n.t.PbAyub),
            },
            {
              perkIcon: s.TP.AUDIO,
              getCopy: () => n.intl.string(n.t["WH+OeI"]),
            },
          ],
        },
        {
          tier: l.TVA.TIER_2,
          perks: [
            { perkIcon: s.TP.STREAM, getCopy: () => n.intl.string(n.t.y4ft4D) },
            {
              perkIcon: s.TP.UPLOAD,
              getCopy: () =>
                n.intl.formatToPlainString(n.t.aFRl53, {
                  uploadSizeLimit: n.intl.string(n.t.M6qV8j),
                }),
            },
            {
              perkIcon: s.TP.CUSTOM_ROLE_ICON,
              getCopy: () => n.intl.string(n.t["6PV6Qc"]),
            },
            {
              perkIcon: s.TP.CUSTOMIZATION,
              getCopy: () => n.intl.string(n.t["1a5rjl"]),
            },
          ],
        },
        {
          tier: l.TVA.TIER_3,
          perks: [
            { perkIcon: s.TP.VANITY, getCopy: () => n.intl.string(n.t.adNGjW) },
            {
              perkIcon: s.TP.UPLOAD,
              getCopy: () =>
                n.intl.formatToPlainString(n.t.aFRl53, {
                  uploadSizeLimit: n.intl.string(n.t.yMOW8D),
                }),
            },
            { perkIcon: s.TP.AUDIO, getCopy: () => n.intl.string(n.t.Tsljqo) },
            {
              perkIcon: s.TP.ANIMATED,
              getCopy: () => n.intl.string(n.t.nRKlmC),
            },
            {
              perkIcon: s.TP.STAGE_VIDEO,
              getCopy: () =>
                n.intl.formatToPlainString(n.t.hsZ88d, {
                  numStageSeats: l.uaN,
                }),
            },
          ],
        },
      ];
    },
    721923(e, t, i) {
      i.d(t, { A: () => R });
      var s = i(627968),
        l = i(64700),
        a = i(503698),
        n = i.n(a),
        r = i(17928),
        c = i(502572),
        o = i(990078),
        d = i(862482),
        u = i(194261),
        m = i(821609),
        T = i(930861),
        g = i(104510),
        x = i(820739),
        f = i(688810),
        A = i(531260),
        h = i(267102),
        j = i(178368),
        p = i(166403),
        N = i(473145),
        E = i(987144),
        b = i(652215),
        I = i(788868),
        v = i(985018),
        _ = i(703870);
      let R = (e) => {
        let {
            analyticsLocation: t,
            analyticsSourceLocation: i,
            guild: a,
            buttonText: R,
            targetBoostedGuildTier: V,
            onClose: S = () => {},
            closeLayer: P = () => {},
            pauseAnimation: y = !1,
            applicationId: C,
            handleSubscribeModalClose: U,
            withHighlight: L = !1,
            icon: k,
            intent: G,
            useExpressiveButton: M = !1,
            ...O
          } = e,
          { analyticsLocations: D } = (0, f.Ay)(),
          w = (0, h.Us)() === b.BRT.POPOUT,
          [z, Q] = l.useState(!1),
          { fractionalState: F } = (0, A.A)(),
          B = (0, r.bG)([j.A], () => j.A.hasFetched);
        l.useEffect(() => {
          B || (0, x.CD)();
        }, [B]);
        let J = (0, N.D$)(j.A.boostSlots),
          K = null != V ? Math.max((0, N.Os)(a, V), 1) : 1,
          Y = (0, N.Nc)({ fractionalState: F }),
          $ = async () => {
            Q(!0),
              await (0, E.g)({
                analyticsLocations: D,
                analyticsLocation: t,
                analyticsSourceLocation: i,
                guild: a,
                numberOfBoostsToAdd: K,
                onClose: S,
                closeLayer: P,
                inPopout: w,
                applicationId: C,
                handleSubscribeModalClose: U,
                intent: G,
              }),
              Q(!1);
          },
          Z = p.A.getPremiumTypeSubscription(),
          W = (0, s.jsxs)("div", {
            className: _.x6,
            children: [k, R ?? v.intl.string(v.t.gKmQ1G)],
          }),
          H = !1;
        return ((H =
          null !== Z &&
          !(J.length > 0) &&
          Z?.isPausedOrPausePending &&
          F === I.xc.NONE) &&
          ((W = (0, s.jsxs)("div", {
            className: _.x6,
            children: [
              (0, s.jsx)(u.X, { size: "xs", className: _.iA }),
              " ",
              W,
            ],
          })),
          (O.disabled = !0)),
        null != Y)
          ? M
            ? (0, s.jsx)(o.m, {
                text: Y,
                children: (0, s.jsx)(m.$, {
                  variant: "expressive",
                  icon: u.X,
                  iconPosition: "start",
                  disabled: !0,
                  fullWidth: O.fullWidth,
                  text: R ?? v.intl.string(v.t.gKmQ1G),
                }),
              })
            : (0, s.jsx)(c.A, {
                text: Y,
                "aria-label": !1,
                children: (e) =>
                  (0, s.jsx)(T.wL, {
                    "data-migration-pending": !0,
                    ...e,
                    disabled: !0,
                    size: d.$n.Sizes.SMALL,
                    pauseAnimation: y,
                    ...O,
                    children: W,
                  }),
              })
          : M
            ? (0, s.jsx)(m.$, {
                variant: "expressive",
                icon: g._,
                disabled: H,
                loading: z,
                fullWidth: O.fullWidth,
                text: R ?? v.intl.string(v.t.gKmQ1G),
                onClick: $,
              })
            : (0, s.jsx)(T.wL, {
                "data-migration-pending": !0,
                size: d.$n.Sizes.SMALL,
                ...O,
                className: n()(O.className, { [_.yj]: L }),
                submitting: z,
                onClick: $,
                pauseAnimation: y,
                children: W,
              });
      };
    },
    210273(e, t, i) {
      i.d(t, { X: () => x });
      var s = i(460905),
        l = i(7807),
        a = i(391242),
        n = i(597601),
        r = i(183623),
        c = i(95635),
        o = i(179866),
        d = i(477262),
        u = i(27232),
        m = i(451394),
        T = i(797285),
        g = i(473145);
      function x(e) {
        switch (e) {
          case g.TP.EMOJI:
            return s.n;
          case g.TP.SOUNDBOARD:
            return l.J;
          case g.TP.ANIMATED:
            return a.O;
          case g.TP.AUDIO:
            return n.L;
          case g.TP.STREAM:
            return r.F;
          case g.TP.UPLOAD:
            return c.J;
          case g.TP.CUSTOM_ROLE_ICON:
            return o.i;
          case g.TP.CUSTOMIZATION:
            return d.s;
          case g.TP.VANITY:
            return u.G;
          case g.TP.STAGE_VIDEO:
            return m.q;
          case g.TP.STICKER:
            return T.t;
          default:
            return s.n;
        }
      }
    },
    281910(e, t, i) {
      i.d(t, { A: () => ek });
      var s = i(627968),
        l = i(64700),
        a = i(17928),
        n = i(230109),
        r = i(939249),
        c = i(789645),
        o = i(689175),
        d = i(688810),
        u = i(665171),
        m = i(488803),
        T = i(522055),
        g = i(645619),
        x = i(954571),
        f = i(917064),
        A = i(503698),
        h = i.n(A),
        j = i(534514),
        p = i(104510),
        N = i(661531),
        E = i(834730),
        b = i(821609),
        I = i(597770),
        v = i(548118),
        _ = i(532794),
        R = i(864310),
        V = i(338548),
        S = i(287809),
        P = i(178368),
        y = i(927578),
        C = i(987144),
        U = i(652215),
        L = i(788868),
        k = i(985018),
        G = i(474236);
      let M = function (e) {
        let {
            className: t,
            closeLayer: i,
            guild: r,
            onCtaVisibilityChange: c,
          } = e,
          o = l.useRef(null),
          u = (0, a.bG)([S.default], () => S.default.getCurrentUser()),
          m = (0, a.bG)([P.A], () => P.A.boostSlots),
          T = u?.isPremiumGroupMember(),
          { analyticsLocations: g } = (0, d.Ay)(),
          [x, f] = l.useState(!1),
          A = l.useMemo(
            () =>
              Object.keys(m).filter((e) => {
                let t = m[e];
                return (
                  null != t.premiumGuildSubscription &&
                  t.premiumGuildSubscription.guildId === r.id
                );
              }).length,
            [m, r.id],
          ),
          M = (0, R.A)(e.guild.id).total;
        async function O() {
          f(!0),
            await (0, C.g)({
              analyticsLocations: g,
              analyticsLocation: {
                page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                section: U.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: U.ZSU.BUTTON_CTA,
                objectType: U.AnalyticsObjectTypes.BUY,
              },
              guild: r,
              closeLayer: i,
            }),
            f(!1);
        }
        return (0, s.jsxs)("div", {
          className: h()(G.kL, t),
          children: [
            (0, s.jsxs)("div", {
              className: G.$R,
              children: [
                (0, s.jsx)(v.Ay, {
                  className: G.$f,
                  guild: r,
                  size: v.Ay.Sizes.LARGER,
                  iconSize: 70,
                  active: !0,
                }),
                (0, s.jsxs)("div", {
                  className: G.CR,
                  children: [
                    (0, s.jsx)(j.D, {
                      className: G.J5,
                      variant: "heading-lg/semibold",
                      children: r.name,
                    }),
                    (0, s.jsxs)("div", {
                      className: G.SJ,
                      children: [
                        (0, s.jsx)(p._, {
                          color:
                            M > 0
                              ? N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH
                              : "currentColor",
                          className: h()(G.Me, { [G.S3]: M > 0 }),
                        }),
                        (0, s.jsx)(E.E, {
                          className: G.n,
                          variant: "text-md/semibold",
                          children: k.intl.format(k.t["pob/cL"], {
                            subscriptions: M,
                          }),
                        }),
                      ],
                    }),
                    A > 0
                      ? (0, s.jsx)(E.E, {
                          className: G.EV,
                          variant: "text-sm/normal",
                          children: k.intl.format(k.t.Jeto2u, {
                            numSubscriptions: A,
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: G.mY,
              children: [
                (0, s.jsx)("h1", {
                  className: G.R_,
                  children: k.intl.string(k.t.N4sqzL),
                }),
                T ? (0, s.jsx)(V.A, { alwaysWhite: !0 }) : null,
                (0, s.jsxs)("div", {
                  className: G.Sq,
                  children: [
                    (0, s.jsx)(n.L, {
                      innerRef: o,
                      onChange: c,
                      threshold: 0.9,
                      children: (0, s.jsx)("div", {
                        ref: o,
                        className: G.dp,
                        children: (0, s.jsx)(b.$, {
                          variant: "expressive",
                          size: "md",
                          icon: p._,
                          text: k.intl.string(k.t.gKmQ1G),
                          onClick: O,
                          loading: x,
                          disabled: T,
                        }),
                      }),
                    }),
                    y.Ay.hasFreeBoosts(u) ||
                    y.Ay.isPremium(u, L.PremiumTypes.TIER_2)
                      ? (0, s.jsx)(b.$, {
                          variant: "secondary",
                          size: "md",
                          icon: I.o,
                          text: k.intl.string(k.t["8MYSQw"]),
                          onClick: function () {
                            (0, _.A)({
                              initialPlanId: null,
                              subscriptionTier: L.pe.TIER_2,
                              isGift: !0,
                              analyticsLocations: g,
                              analyticsObject: {
                                page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                                section: U.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                object: U.ZSU.BUTTON_ICON,
                                objectType: U.AnalyticsObjectTypes.GIFT,
                              },
                              onClose: (e) => e && i(),
                            });
                          },
                        })
                      : (0, s.jsx)(b.$, {
                          variant: "secondary",
                          size: "md",
                          text: k.intl.string(k.t.Q43TvC),
                          onClick: function () {
                            (0, _.A)({
                              initialPlanId: null,
                              subscriptionTier: L.pe.TIER_2,
                              analyticsLocations: g,
                              analyticsObject: {
                                page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                                section: U.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                object: U.ZSU.BUTTON_ICON,
                                objectType: U.AnalyticsObjectTypes.BUY,
                              },
                              onClose: (e) => e && i(),
                            });
                          },
                          disabled: T,
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var O = i(232122),
        D = i(366010),
        w = i(736653),
        z = i(303136),
        Q = i(676279),
        F = i(215895);
      function B(e) {
        let { className: t } = e,
          i = (0, w.Ay)(),
          l = (0, D.q)(i),
          a = (0, Q.TM)()
            ? l
              ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
              : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : l
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
        return (0, s.jsxs)("div", {
          className: t,
          children: [
            (0, s.jsx)("div", { className: F.YL }),
            (0, s.jsx)(
              z.A,
              {
                fallbackImage: l
                  ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                  : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                children: (0, s.jsx)("source", { src: a }),
              },
              a,
            ),
          ],
        });
      }
      var J = i(64051),
        K = i(972919),
        Y = i(724677),
        $ = i(210273),
        Z = i(508155),
        W = i(853513),
        H = i(111674);
      function q(e) {
        let { tier: t, isActive: i } = e,
          l = t === U.TVA.TIER_1,
          a = t === U.TVA.TIER_3,
          n = t === U.TVA.TIER_1 ? J.v : t === U.TVA.TIER_2 ? K.w : Y.H;
        return (0, s.jsxs)("div", {
          className: H.MY,
          children: [
            (0, s.jsx)("div", {
              className: h()(H.hr, {
                [H.ti]: i,
                [H.YO]: !i,
                [H.JQ]: l,
                [H.Uz]: a,
              }),
            }),
            (0, s.jsx)("div", {
              className: h()(H.Zj, {
                [H.jv]: i,
                [H.ip]: t === U.TVA.TIER_1,
                [H.p3]: t === U.TVA.TIER_2,
                [H.wF]: t === U.TVA.TIER_3,
              }),
              children: (0, s.jsx)(n, { alt: "", ariaHidden: !0, size: 24 }),
            }),
          ],
        });
      }
      function X(e) {
        let { guild: t, definition: i } = e,
          { tier: l, perks: a } = i,
          n = t.premiumTier >= l,
          r = U.M2T[l];
        return (0, s.jsxs)("div", {
          className: h()(H.Nr, { [H.Bm]: n, [H.c]: !n }),
          children: [
            (0, s.jsx)(q, { tier: l, isActive: n }),
            (0, s.jsxs)("div", {
              className: H.zI,
              children: [
                (0, s.jsxs)("div", {
                  className: H.$h,
                  children: [
                    (0, s.jsx)(j.D, {
                      className: h()(H.JJ, { [H.eX]: !n }),
                      variant: "heading-xl/semibold",
                      color: n ? "text-strong" : void 0,
                      children: k.intl.string(
                        l === U.TVA.TIER_1
                          ? k.t.nzXtaS
                          : l === U.TVA.TIER_2
                            ? k.t["h33/uW"]
                            : k.t.BfF6ED,
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className: H.yC,
                      children: [
                        (0, s.jsx)(p._, { size: "xs", color: "currentColor" }),
                        (0, s.jsx)(E.E, {
                          variant: "text-md/medium",
                          children: k.intl.format(k.t["pob/cL"], {
                            subscriptions: r,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: H.PJ,
                  children: [
                    a.slice(0, 4).map((e, t) => {
                      if (null != e.predicate && !e.predicate()) return null;
                      let i = (0, $.X)(e.perkIcon);
                      return (0, s.jsxs)(
                        "div",
                        {
                          className: h()(H.bK, { [H.o]: !n }),
                          children: [
                            (0, s.jsx)(i, {
                              className: H.kf,
                              color: n ? "var(--text-default)" : "currentColor",
                              size: "sm",
                            }),
                            (0, s.jsx)(E.E, {
                              variant: "text-md/medium",
                              color: n ? "text-default" : void 0,
                              children: e.getCopy(),
                            }),
                          ],
                        },
                        t,
                      );
                    }),
                    (0, s.jsx)(E.E, {
                      className: H.wx,
                      variant: "text-md/medium",
                      children: k.intl.string(W.default.nIj3LZ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function ee(e) {
        let { guild: t, className: i } = e;
        return (0, s.jsx)("div", {
          className: h()(H.iE, i),
          children: Z.t.map((e) =>
            (0, s.jsx)(X, { guild: t, definition: e }, e.tier),
          ),
        });
      }
      var et = i(785651),
        ei = i(172218),
        es = i(717421),
        el = i(289704),
        ea = i(628284),
        en = i(777666),
        er = i(775602),
        ec = i(793574),
        eo = i(942975),
        ed = i(363487),
        eu = i(73381),
        em = i(998418),
        eT = i(828162),
        eg = i(71393),
        ex = i(975571),
        ef = i(800007),
        eA = i(568065),
        eh = i(576709),
        ej = i(262880);
      function ep(e) {
        let {
            guildId: t,
            activeStatus: i,
            title: n,
            description: r,
            cost: c,
            costDecorator: o,
            staticImageUrl: u,
            animatedImageUrl: m,
            powerup: T,
            badge: g,
            onClose: x,
          } = e,
          { analyticsLocations: f } = (0, d.Ay)(),
          A = i !== eA.b_.INACTIVE,
          I = (0, ed.A)(t),
          v = (0, a.bG)([er.A], () => er.A.useReducedMotion),
          _ = l.useRef(null),
          [R, V] = l.useState(!1),
          [S, P] = l.useState(!1),
          [y, L] = l.useState(!1),
          G = S || y,
          M = l.useCallback(() => {
            let e = eg.A.getGuild(t);
            null != e &&
              (0, C.g)({
                analyticsLocation: {
                  page: U.liQ.GUILD_POWERUPS_MARKETING,
                  section: U.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                },
                numberOfBoostsToAdd: 1,
                analyticsLocations: f,
                guild: e,
              });
          }, [t, f]),
          O = l.useCallback(() => {
            x(), (0, eT.A)(t, ec.A.GUILD_POWERUPS_MARKETING, T.skuId);
          }, [t, T.skuId, x]),
          D = { tension: 400, friction: 30 },
          w = (0, es.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: D }),
          z = (0, es.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: D }),
          Q = (0, es.z)({ y: G ? -32 : 0, config: D }),
          F = (0, es.z)({
            opacity: +!!G,
            transform: G ? "translateY(0)" : "translateY(16px)",
            config: D,
          }),
          B = l.useCallback((e) => {
            e && V(!0);
          }, []),
          J = l.useCallback(() => {
            L(!0);
          }, []),
          K = l.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || L(!1);
          }, []),
          Y = (0, ei.K)(B),
          $ = T.skuId === ef.W5;
        return (0, s.jsxs)("div", {
          className: h()(ej.Nr, { [ej.fM]: R }),
          onFocus: J,
          onBlur: K,
          onMouseEnter: () => P(!0),
          onMouseLeave: () => P(!1),
          children: [
            (0, s.jsx)("div", { className: ej.sL, ref: Y }),
            (0, s.jsx)("div", {
              className: ej.kQ,
              children: $
                ? (0, s.jsx)(et.animated.div, {
                    className: ej.bm,
                    style: {
                      transform: (0, et.to)(
                        [z.scale, z.y],
                        (e, t) => `scale(${e}) translateY(${t}px)`,
                      ),
                    },
                    children: (0, s.jsx)(el.E, {
                      withReducedMotion: "halt",
                      eventTargetRef: _,
                      fit: "contain",
                      className: ej.Sq,
                      stateMachine: "SM_Main_Int",
                    }),
                  })
                : (0, s.jsx)(et.animated.img, {
                    className: ej.bm,
                    src: G && null != m && "" !== m && !v ? m : u,
                    alt: "",
                    style: {
                      transform: (0, et.to)(
                        [w.scale, w.y],
                        (e, t) => `scale(${e}) translateY(${t}px)`,
                      ),
                    },
                  }),
            }),
            (0, s.jsxs)(et.animated.div, {
              style: { ...Q, transform: Q.y.to((e) => `translateY(${e}px)`) },
              className: ej.Qs,
              children: [
                (0, s.jsxs)("div", {
                  className: ej.P_,
                  children: [
                    (0, s.jsx)(j.D, {
                      className: ej.DD,
                      variant: "heading-lg/semibold",
                      children: n,
                    }),
                    (0, s.jsx)(E.E, {
                      className: ej.h_,
                      variant: "text-md/medium",
                      children: r,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: ej.jp,
                  children: [
                    (0, s.jsxs)("div", {
                      className: ej.qS,
                      children: [
                        (0, s.jsx)(p._, {
                          size: "xs",
                          color: N.A.unsafe_rawColors.ILLO_PINK_40,
                        }),
                        (0, s.jsx)(E.E, {
                          className: ej.Vv,
                          variant: "text-sm/semibold",
                          children: k.intl.formatToPlainString(
                            null != o
                              ? eh.default["G/aTXi"]
                              : eh.default.r9pa9K,
                            { boostCount: c },
                          ),
                        }),
                      ],
                    }),
                    A &&
                      (0, s.jsxs)("div", {
                        className: h()(ej.qS, ej.nt),
                        children: [
                          (0, s.jsx)(ea.y, {
                            size: "xs",
                            color: "currentColor",
                          }),
                          (0, s.jsx)(E.E, {
                            className: ej.nt,
                            variant: "text-sm/semibold",
                            children: k.intl.string(k.t.pCMkDb),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(et.animated.div, {
              style: F,
              className: ej.NC,
              children: [
                (0, s.jsx)("div", {
                  className: ej.x6,
                  children: (0, s.jsx)(b.$, {
                    variant: "primary",
                    text: k.intl.string(k.t.oPAx73),
                    onClick: M,
                    fullWidth: !0,
                  }),
                }),
                I &&
                  (0, s.jsx)("div", {
                    className: ej.x6,
                    children: (0, s.jsx)(b.$, {
                      variant: "secondary",
                      text: k.intl.string(k.t.GoCQxU),
                      onClick: O,
                      fullWidth: !0,
                    }),
                  }),
              ],
            }),
            "new" === g &&
              (0, s.jsx)(en.Lp, {
                className: ej.AP,
                text: k.intl.string(k.t.y2b7CA),
              }),
            "beta" === g &&
              (0, s.jsx)(en.Lp, {
                className: ej.AP,
                text: k.intl.string(k.t.oW0eUd),
                color: N.A.colors.BACKGROUND_BRAND.css,
              }),
          ],
        });
      }
      function eN(e) {
        let {
            guildId: t,
            powerup: i,
            costDecorator: l,
            badge: a,
            onClose: n,
          } = e,
          r = (0, em.Ay)(t, i).type;
        return (0, s.jsx)(ep, {
          guildId: t,
          activeStatus: r,
          title: i.title,
          description: i.description,
          cost: i.cost,
          staticImageUrl: i.staticImageUrl,
          animatedImageUrl: i.animatedImageUrl,
          powerup: i,
          costDecorator: l,
          badge: a,
          onClose: n,
        });
      }
      let eE = new Map([[ef.W5, "+"]]),
        eb = l.forwardRef((e, t) => {
          let { guild: i, onClose: a } = e;
          l.useEffect(() => {
            g.A.shouldFetchCatalogForGuild(i.id) && (0, eo.AK)(i.id),
              g.A.shouldFetchPowerupsForGuild(i.id) && (0, eo.Xd)(i.id);
          }, [i.id]);
          let n = Array.from((0, eu.A)(i.id) ?? [])
            .reverse()
            .slice(0, 6);
          return 0 === n.length
            ? null
            : (0, s.jsxs)("div", {
                ref: t,
                className: ej.iE,
                children: [
                  (0, s.jsxs)("div", {
                    className: ej.ND,
                    children: [
                      (0, s.jsx)(j.D, {
                        className: ej.R_,
                        variant: "heading-xxl/semibold",
                        children: k.intl.string(W.default.wjI18Q),
                      }),
                      (0, s.jsx)(E.E, {
                        className: ej.fV,
                        variant: "text-md/medium",
                        children: k.intl.format(W.default.S562fn, {
                          helpDeskArticle: ex.A.getArticleURL(
                            U.MVz.GUILD_BOOSTING_FAQ,
                          ),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: ej.vY,
                    children: n.map((e) =>
                      (0, s.jsx)(
                        eN,
                        {
                          guildId: i.id,
                          powerup: e,
                          costDecorator: eE.get(e.skuId),
                          badge: eA.ys[e.skuId],
                          onClose: a,
                        },
                        `perk-card-${e.skuId}`,
                      ),
                    ),
                  }),
                ],
              });
        });
      eb.displayName = "GuildBoostingMarketingPerkCards";
      var eI = i(527113),
        ev = i(862482),
        e_ = i(187322),
        eR = i(721923),
        eV = i(672350);
      let eS = function (e) {
        let { closeLayer: t, guild: i, isVisible: a } = e,
          n = l.useRef(null),
          r = (0, es.z)({
            transform: a ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
          });
        return (0, s.jsx)(et.animated.div, {
          className: eV.iE,
          style: r,
          children: (0, s.jsx)("div", {
            ref: n,
            className: eV.iJ,
            children: (0, s.jsxs)(e_.xp, {
              containerRef: n,
              children: [
                (0, s.jsxs)("div", {
                  className: eV.OA,
                  children: [
                    (0, s.jsx)(v.Ay, {
                      className: eV.$f,
                      guild: i,
                      size: v.Ay.Sizes.SMALL,
                    }),
                    (0, s.jsx)(E.E, {
                      className: eV.J5,
                      variant: "text-md/semibold",
                      children: i.name,
                    }),
                  ],
                }),
                (0, s.jsx)(eR.A, {
                  className: eV.lI,
                  guild: i,
                  analyticsLocation: {
                    page: U.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: U.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                    object: U.ZSU.BUTTON_CTA,
                    objectType: U.AnalyticsObjectTypes.BUY,
                  },
                  closeLayer: t,
                  pauseAnimation: !a,
                  size: ev.$n.Sizes.SMALL,
                  useExpressiveButton: !0,
                }),
              ],
            }),
          }),
        });
      };
      var eP = i(192308),
        ey = i(65154),
        eC = i(387772),
        eU = i(519636);
      function eL(e) {
        let {
            guild: t,
            analyticsLocation: a,
            videoPlacement: n,
            sourceAnalyticsLocations: c,
          } = e,
          o = l.useCallback(() => {
            (0, eP.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                i.e("6836"),
                i.e("85810"),
              ]).then(i.bind(i, 872233));
              return (i) =>
                (0, s.jsx)(e, {
                  ...i,
                  guildId: t.id,
                  analyticsLocation: a,
                  videoPlacement: n,
                  sourceAnalyticsLocations: c,
                });
            });
          }, [a, t.id, c, n]);
        return (0, s.jsxs)(r.D, {
          className: eC.kL,
          onClick: o,
          "aria-label": k.intl.string(W.default["103aY+"]),
          children: [
            (0, s.jsx)("img", { alt: "", className: eC.xn, src: eU.A }),
            (0, s.jsx)("div", { className: eC.Lw }),
            (0, s.jsx)("div", {
              className: eC.Rr,
              children: (0, s.jsx)(ey.S, {
                size: "custom",
                width: 76,
                height: 76,
                color: "white",
              }),
            }),
          ],
        });
      }
      function ek(e) {
        let {
            analyticsLocation: t,
            guild: i,
            onClose: A,
            scrollToPowerupCards: h,
          } = e,
          [j, p] = l.useState(!0),
          N = l.useRef(!1),
          { analyticsLocations: E } = (0, d.Ay)(),
          b = l.useRef(null),
          I = l.useRef(null),
          v = l.useRef(null),
          _ = l.useCallback(() => {
            A?.();
          }, [A]),
          R = l.useCallback(() => {
            null != v.current &&
              null != I.current &&
              I.current.scrollIntoViewNode({
                node: v.current,
                animate: !0,
                shouldScrollToStart: !0,
              });
          }, []),
          V = l.useCallback(
            (e) => {
              e &&
                !N.current &&
                (x.default.track(
                  U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM,
                  {
                    type: U.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: E,
                    location_section: t.section,
                    location_object: t.object,
                    guild_id: i.id,
                  },
                ),
                (N.current = !0));
            },
            [t, E, i.id],
          );
        l.useEffect(() => {
          x.default.track(U.HAw.OPEN_MODAL, {
            type: U.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: E,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
          });
        }, [i.id, t, E]);
        let S = (0, m.C$)(i.id, "GuildBoostingMarketingRefresh"),
          P = (0, a.bG)([T.A], () => T.A.shouldFetchCatalogForGuild(i.id));
        l.useEffect(() => {
          S && P && (0, u.z9)(i.id);
        }, [i.id, S, P]);
        let y = (0, a.bG)([g.A], () => g.A.hasFetchedPowerupCatalog(i.id));
        return (
          l.useEffect(() => {
            if (h && y) {
              let e = setTimeout(() => {
                R();
              }, 100);
              return () => clearTimeout(e);
            }
          }, [h, R, y]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              null != A &&
                (0, s.jsx)("div", {
                  className: F.Yk,
                  children: (0, s.jsx)(r.D, {
                    className: F.b,
                    onClick: _,
                    "aria-label": k.intl.string(k.t.cpT0Cq),
                    children: (0, s.jsx)(c.P, {
                      size: "md",
                      color: "currentColor",
                    }),
                  }),
                }),
              (0, s.jsxs)(o.Gt, {
                ref: I,
                className: F.XG,
                children: [
                  (0, s.jsxs)("div", {
                    className: F.wx,
                    children: [
                      (0, s.jsx)(B, { className: F.y2 }),
                      (0, s.jsxs)("div", {
                        className: F.AZ,
                        children: [
                          (0, s.jsx)(M, {
                            guild: i,
                            closeLayer: _,
                            onCtaVisibilityChange: p,
                            className: F.Oh,
                          }),
                          (0, s.jsx)(eL, {
                            guild: i,
                            analyticsLocation: t,
                            videoPlacement: "top",
                            sourceAnalyticsLocations: E,
                          }),
                          (0, s.jsx)(ee, { guild: i }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: F.uE,
                    children: (0, s.jsx)(eb, {
                      ref: v,
                      guild: e.guild,
                      onClose: _,
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: F.o6,
                    children: (0, s.jsxs)("div", {
                      className: F.y$,
                      children: [
                        (0, s.jsx)(eI.A, { className: F.Q, guild: i }),
                        (0, s.jsx)(f.A, {}),
                        (0, s.jsx)(O.A, {}),
                      ],
                    }),
                  }),
                  (0, s.jsx)(n.L, {
                    innerRef: b,
                    onChange: V,
                    children: (0, s.jsx)("div", { ref: b, className: F.mR }),
                  }),
                ],
              }),
              (0, s.jsx)(eS, { guild: i, isVisible: !j, closeLayer: _ }),
            ],
          })
        );
      }
    },
    917064(e, t, i) {
      i.d(t, { A: () => x, s: () => g });
      var s = i(627968);
      i(64700);
      var l = i(503698),
        a = i.n(l),
        n = i(104510),
        r = i(179866),
        c = i(926268),
        o = i(534514),
        d = i(834730),
        u = i(985018),
        m = i(502997),
        T = i(93364);
      let g = [
        { icon: n._, getText: () => u.intl.string(u.t.TZigSO) },
        {
          icon: function (e) {
            let { className: t } = e;
            return (0, s.jsx)("img", {
              className: a()(t, m.Dp),
              src: T,
              alt: "",
            });
          },
          getText: () => u.intl.string(u.t.hjQuV2),
        },
        { icon: r.i, getText: () => u.intl.string(u.t["2RUcaM"]) },
        { icon: c.C, getText: () => u.intl.string(u.t.bJoZKV) },
      ];
      function x(e) {
        let { className: t } = e;
        return (0, s.jsxs)("div", {
          className: a()(m.iE, t),
          children: [
            (0, s.jsx)(o.D, {
              className: m.R_,
              variant: "heading-xxl/semibold",
              children: u.intl.string(u.t.IzKs3o),
            }),
            (0, s.jsx)("div", {
              className: m.kR,
              children: g.map((e, t) => {
                let i = e.icon;
                return (0, s.jsxs)(
                  "div",
                  {
                    className: m.Nr,
                    children: [
                      (0, s.jsx)(i, { className: m.Kk }),
                      (0, s.jsx)(d.E, {
                        className: m.h_,
                        color: "text-muted",
                        variant: "text-md/medium",
                        children: e.getText(),
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
    },
    232122(e, t, i) {
      i.d(t, { A: () => h, m: () => A });
      var s = i(627968),
        l = i(64700),
        a = i(503698),
        n = i.n(a),
        r = i(534514),
        c = i(696986),
        o = i(939249),
        d = i(834730),
        u = i(847374),
        m = i(661531),
        T = i(975571),
        g = i(652215),
        x = i(985018),
        f = i(159607);
      let A = [
        {
          getQuestion: () => x.intl.string(x.t.C4J8UB),
          getAnswer: () => x.intl.string(x.t.nhkk6k),
        },
        {
          getQuestion: () => x.intl.string(x.t.ai4ym2),
          getAnswer: () =>
            x.intl.format(x.t["8zlqlD"], {
              helpCenterUrl: T.A.getArticleURL(g.MVz.GUILD_BOOSTING_FAQ),
            }),
        },
        {
          getQuestion: () => x.intl.string(x.t.kMVGsC),
          getAnswer: () => x.intl.string(x.t["Vz/SCQ"]),
        },
        {
          getQuestion: () => x.intl.string(x.t.kYmXWF),
          getAnswer: () => x.intl.string(x.t["+OURPp"]),
        },
        {
          getQuestion: () => x.intl.string(x.t["LsX/vb"]),
          getAnswer: () => x.intl.string(x.t["3TeauK"]),
        },
        {
          getQuestion: () => x.intl.string(x.t.fRlnXU),
          getAnswer: () => x.intl.string(x.t.bTRacj),
        },
        {
          getQuestion: () => x.intl.string(x.t["8Mu5Q9"]),
          getAnswer: () => x.intl.string(x.t["2T5iPo"]),
        },
        {
          getQuestion: () => x.intl.string(x.t["6EN+TZ"]),
          getAnswer: () => x.intl.string(x.t.NZax1u),
        },
        {
          getQuestion: () => x.intl.string(x.t.f5B4EW),
          getAnswer: () => x.intl.string(x.t.Aje8Pb),
        },
      ];
      function h(e) {
        let { className: t } = e,
          [i, a] = l.useState(null),
          [T, g] = l.useState(null);
        return (0, s.jsxs)("div", {
          className: n()(f.iE, t),
          children: [
            (0, s.jsx)(r.D, {
              className: f.R_,
              variant: "heading-xxl/semibold",
              children: x.intl.string(x.t.HPJ6Nj),
            }),
            (0, s.jsx)(c.h, { size: 32 }),
            (0, s.jsx)("ul", {
              className: f.p_,
              children: A.map((e, t) => {
                let l = i === t,
                  r = T === t,
                  c = l || r ? "text-default" : "text-muted";
                return (0, s.jsxs)(
                  o.D,
                  {
                    tag: "li",
                    className: n()(f.Aw, { [f.$K]: l }),
                    onClick: () => a((e) => (e === t ? null : t)),
                    onMouseEnter: () => g(t),
                    onMouseLeave: () => g(null),
                    children: [
                      (0, s.jsxs)("div", {
                        className: f.k7,
                        children: [
                          (0, s.jsx)(d.E, {
                            className: f.b1,
                            color: c,
                            variant: "heading-md/semibold",
                            tag: "span",
                            children: e.getQuestion(),
                          }),
                          (0, s.jsx)(u.a, {
                            size: "sm",
                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                            className: f.q4,
                            style: {
                              transform: l ? "rotate(180deg)" : "rotate(0deg)",
                            },
                          }),
                        ],
                      }),
                      l &&
                        (0, s.jsx)(d.E, {
                          className: f.ZF,
                          color: "text-muted",
                          variant: "text-sm/medium",
                          children: e.getAnswer(),
                        }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
    },
    527113(e, t, i) {
      i.d(t, { A: () => h });
      var s = i(627968);
      i(64700);
      var l = i(503698),
        a = i.n(l),
        n = i(933832),
        r = i(789645),
        c = i(834730),
        o = i(534514),
        d = i(116891),
        u = i(652215),
        m = i(788868),
        T = i(985018),
        g = i(131148);
      let x = [
        {
          getPerkLabel: () => T.intl.string(T.t.tIiwuj),
          getTier0Value: () => m.TG[u.TVA.NONE].limits.emoji,
          getTier1Value: () => m.TG[u.TVA.TIER_1].limits.emoji,
          getTier2Value: () => m.TG[u.TVA.TIER_2].limits.emoji,
          getTier3Value: () => m.TG[u.TVA.TIER_3].limits.emoji,
        },
        {
          getPerkLabel: () => T.intl.string(T.t["3iccet"]),
          getTier0Value: () => m.TG[u.TVA.NONE].limits.stickers,
          getTier1Value: () => m.TG[u.TVA.TIER_1].limits.stickers,
          getTier2Value: () => m.TG[u.TVA.TIER_2].limits.stickers,
          getTier3Value: () => m.TG[u.TVA.TIER_3].limits.stickers,
        },
        {
          getPerkLabel: () => T.intl.string(T.t["+smCv9"]),
          getTier0Value: () => m.TG[u.TVA.NONE].limits.soundboardSounds,
          getTier1Value: () => m.TG[u.TVA.TIER_1].limits.soundboardSounds,
          getTier2Value: () => m.TG[u.TVA.TIER_2].limits.soundboardSounds,
          getTier3Value: () => m.TG[u.TVA.TIER_3].limits.soundboardSounds,
        },
        {
          getPerkLabel: () => T.intl.string(T.t.SMYauD),
          getTier0Value: () =>
            T.intl.formatToPlainString(T.t.zZ6Rdi, {
              resolution: m.TG[u.TVA.NONE].limits.screenShareQualityResolution,
              framerate: m.TG[u.TVA.NONE].limits.screenShareQualityFramerate,
            }),
          getTier1Value: () =>
            T.intl.formatToPlainString(T.t.zZ6Rdi, {
              resolution:
                m.TG[u.TVA.TIER_1].limits.screenShareQualityResolution,
              framerate: m.TG[u.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
          getTier2Value: () =>
            T.intl.formatToPlainString(T.t.zZ6Rdi, {
              resolution: (0, d.eT)("GuildBoostingMarketingPerksTable"),
              framerate: m.TG[u.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
          getTier3Value: () =>
            T.intl.formatToPlainString(T.t.zZ6Rdi, {
              resolution: (0, d.eT)("GuildBoostingMarketingPerksTable"),
              framerate: m.TG[u.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
        },
        {
          getPerkLabel: () => T.intl.string(T.t["/79IDj"]),
          getTier0Value: () =>
            T.intl.formatToPlainString(T.t.w1gmLt, {
              bitrate: m.TG[u.TVA.NONE].limits.bitrate / 1e3,
            }),
          getTier1Value: () =>
            T.intl.formatToPlainString(T.t.w1gmLt, {
              bitrate: m.TG[u.TVA.TIER_1].limits.bitrate / 1e3,
            }),
          getTier2Value: () =>
            T.intl.formatToPlainString(T.t.w1gmLt, {
              bitrate: m.TG[u.TVA.TIER_2].limits.bitrate / 1e3,
            }),
          getTier3Value: () =>
            T.intl.formatToPlainString(T.t.w1gmLt, {
              bitrate: m.TG[u.TVA.TIER_3].limits.bitrate / 1e3,
            }),
        },
        {
          getPerkLabel: () => T.intl.string(T.t.R1U2xC),
          getTier0Value: () =>
            T.intl.formatToPlainString(T.t.pIn7Af, {
              size: m.TG[u.TVA.NONE].limits.fileSize / 1048576,
            }),
          getTier1Value: () =>
            T.intl.formatToPlainString(T.t.pIn7Af, {
              size: m.TG[u.TVA.TIER_1].limits.fileSize / 1048576,
            }),
          getTier2Value: () =>
            T.intl.formatToPlainString(T.t.pIn7Af, {
              size: m.TG[u.TVA.TIER_2].limits.fileSize / 1048576,
            }),
          getTier3Value: () =>
            T.intl.formatToPlainString(T.t.pIn7Af, {
              size: m.TG[u.TVA.TIER_3].limits.fileSize / 1048576,
            }),
        },
        {
          getPerkLabel: () => T.intl.string(T.t.f6vfso),
          getTier0Value: () => m.TG[u.TVA.NONE].limits.stageVideoUsers,
          getTier1Value: () => m.TG[u.TVA.TIER_1].limits.stageVideoUsers,
          getTier2Value: () => m.TG[u.TVA.TIER_2].limits.stageVideoUsers,
          getTier3Value: () => m.TG[u.TVA.TIER_3].limits.stageVideoUsers,
        },
        {
          getPerkLabel: () => T.intl.string(T.t.qDqUME),
          getTier0Value: () => !1,
          getTier1Value: () => !0,
          getTier2Value: () => !0,
          getTier3Value: () => !0,
        },
        {
          getPerkLabel: () => T.intl.string(T.t.uwqgbu),
          getTier0Value: () => !1,
          getTier1Value: () => !0,
          getTier2Value: () => !0,
          getTier3Value: () => !0,
        },
        {
          getPerkLabel: () => T.intl.string(T.t.zxsDxc),
          getTier0Value: () => !1,
          getTier1Value: () => !1,
          getTier2Value: () => T.intl.string(T.t["2TNS3n"]),
          getTier3Value: () => T.intl.string(T.t["l+S46U"]),
        },
        {
          getPerkLabel: () => T.intl.string(T.t["bHa+Ee"]),
          getTier0Value: () => !1,
          getTier1Value: () => !1,
          getTier2Value: () => !0,
          getTier3Value: () => !0,
        },
        {
          getPerkLabel: () => T.intl.string(T.t.QV6MZQ),
          getTier0Value: () => !1,
          getTier1Value: () => !1,
          getTier2Value: () => !1,
          getTier3Value: () => !0,
        },
      ];
      function f(e) {
        let { value: t, isBoosted: i = !1 } = e;
        return "boolean" == typeof t
          ? t
            ? (0, s.jsx)(n.A, {
                size: "md",
                color: "currentColor",
                className: g.oE,
              })
            : (0, s.jsx)(r.P, {
                size: "md",
                color: "currentColor",
                className: g.i3,
              })
          : (0, s.jsx)(c.E, {
              color: i ? "text-strong" : "text-muted",
              variant: i ? "text-md/bold" : "text-md/medium",
              children: t,
            });
      }
      function A(e) {
        let { currentTier: t } = e,
          i = (function (e) {
            switch (e) {
              case u.TVA.NONE:
              case u.TVA.TIER_1:
                return u.TVA.TIER_2;
              case u.TVA.TIER_2:
              case u.TVA.TIER_3:
                return u.TVA.TIER_3;
              default:
                return null;
            }
          })(t);
        return null == i
          ? null
          : (0, s.jsx)("div", {
              className: a()(g.ER, {
                [g.GH]: i === u.TVA.TIER_2,
                [g.z5]: i === u.TVA.TIER_3,
              }),
              children: (0, s.jsx)(c.E, {
                className: g.uQ,
                color: "always-white",
                variant: "text-xs/bold",
                children:
                  t === u.TVA.TIER_3
                    ? T.intl.string(T.t.d849Up)
                    : T.intl.string(T.t.dZeX1z),
              }),
            });
      }
      function h(e) {
        let {
          className: t,
          guild: i,
          hideHeading: l = !1,
          hideTier0: n = !1,
        } = e;
        return (0, s.jsxs)("div", {
          className: a()(g.iE, t),
          children: [
            !l &&
              (0, s.jsx)(o.D, {
                className: g.R_,
                variant: "heading-xxl/semibold",
                children: T.intl.string(T.t["9GGb9k"]),
              }),
            (0, s.jsxs)("div", {
              className: g.wY,
              children: [
                null != i && (0, s.jsx)(A, { currentTier: i.premiumTier }),
                (0, s.jsxs)("div", {
                  className: g.tp,
                  children: [
                    (0, s.jsxs)("div", {
                      className: a()(g.nM, g.U1),
                      children: [
                        (0, s.jsx)("div", {
                          className: a()(g.Hn, g.DV),
                          children: (0, s.jsx)(o.D, {
                            color: "text-default",
                            variant: "heading-lg/semibold",
                            children: T.intl.string(T.t.F5MY0k),
                          }),
                        }),
                        !n &&
                          (0, s.jsxs)("div", {
                            className: a()(g.Hn, g.pU),
                            children: [
                              (0, s.jsx)(o.D, {
                                color: "text-default",
                                variant: "heading-lg/semibold",
                                children: T.intl.string(T.t.mx8j2m),
                              }),
                              (0, s.jsx)(c.E, {
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: T.intl.format(T.t["pob/cL"], {
                                  subscriptions: u.M2T[u.TVA.NONE],
                                }),
                              }),
                            ],
                          }),
                        (0, s.jsxs)("div", {
                          className: a()(g.Hn, g.pU),
                          children: [
                            (0, s.jsx)(o.D, {
                              color: "text-default",
                              variant: "heading-lg/semibold",
                              children: T.intl.string(T.t.nzXtaS),
                            }),
                            (0, s.jsx)(c.E, {
                              color: "text-muted",
                              variant: "text-sm/medium",
                              children: T.intl.format(T.t["pob/cL"], {
                                subscriptions: u.M2T[u.TVA.TIER_1],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: a()(g.Hn, g.pU),
                          children: [
                            (0, s.jsx)(o.D, {
                              color: "text-default",
                              variant: "heading-lg/semibold",
                              children: T.intl.string(T.t["h33/uW"]),
                            }),
                            (0, s.jsx)(c.E, {
                              color: "text-muted",
                              variant: "text-sm/medium",
                              children: T.intl.format(T.t["pob/cL"], {
                                subscriptions: u.M2T[u.TVA.TIER_2],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: a()(g.Hn, g.pU),
                          children: [
                            (0, s.jsx)(o.D, {
                              color: "text-default",
                              variant: "heading-lg/semibold",
                              children: T.intl.string(T.t.BfF6ED),
                            }),
                            (0, s.jsx)(c.E, {
                              color: "text-muted",
                              variant: "text-sm/medium",
                              children: T.intl.format(T.t["pob/cL"], {
                                subscriptions: u.M2T[u.TVA.TIER_3],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    x.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: a()(g.nM, { [g.fW]: t === x.length - 1 }),
                          children: [
                            (0, s.jsx)("div", {
                              className: a()(g.Hn, g.DV),
                              children: (0, s.jsx)(c.E, {
                                color: "text-muted",
                                variant: "text-md/medium",
                                children: e.getPerkLabel(),
                              }),
                            }),
                            !n &&
                              (0, s.jsx)("div", {
                                className: a()(g.Hn, g.pU),
                                children: (0, s.jsx)(f, {
                                  value: e.getTier0Value(),
                                }),
                              }),
                            (0, s.jsx)("div", {
                              className: a()(g.Hn, g.pU),
                              children: (0, s.jsx)(f, {
                                value: e.getTier1Value(),
                                isBoosted: !0,
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: a()(g.Hn, g.pU),
                              children: (0, s.jsx)(f, {
                                value: e.getTier2Value(),
                                isBoosted: !0,
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: a()(g.Hn, g.pU),
                              children: (0, s.jsx)(f, {
                                value: e.getTier3Value(),
                                isBoosted: !0,
                              }),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    338548(e, t, i) {
      i.d(t, { A: () => g });
      var s = i(627968),
        l = i(503698),
        a = i.n(l),
        n = i(990078),
        r = i(462887),
        c = i(834730),
        o = i(736653),
        d = i(88001),
        u = i(466919),
        m = i(985018),
        T = i(408373);
      let g = (e) => {
        let { alwaysWhite: t = !1 } = e,
          i = (0, o.DP)(),
          l = (0, r.q)(i);
        return (0, s.jsx)(n.m, {
          text: m.intl.formatToPlainString(u.default["5xN/C1"], {
            premiumGroupProductName: (0, d.DP)(),
          }),
          children: (0, s.jsx)("div", {
            className: a()(T.bE, { [T._k]: !t && l }),
            children: (0, s.jsx)(c.E, {
              variant: "eyebrow",
              color: t ? "always-white" : void 0,
              className: T.gp,
              children: m.intl.string(m.t["5nrJDO"]),
            }),
          }),
        });
      };
    },
    519636(e, t, i) {
      i.d(t, { A: () => s });
      let s =
        "https://cdn.discordapp.com/assets/content/7b8d6c9c9f8bc8092089a2f55081695d40f7f303f053fcc6f944bf4b38403573.png";
    },
  },
]);
//# sourceMappingURL=34418.3b51cfcd65106b65.js.map
