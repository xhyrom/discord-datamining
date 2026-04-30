"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80527"],
  {
    601255(e, a, t) {
      t.d(a, { A: () => o });
      var n = t(64700),
        r = t(451988),
        l = t(821956),
        i = t(652215);
      function o(e) {
        let [a, t] = n.useState(!1),
          o = n.useRef(null);
        return (
          n.useEffect(() => {
            let a = () => {
              if (null == e || !("expiresAt" in e) || null == e.expiresAt)
                return void t(!1);
              let n = (0, l.bS)(e);
              t(n);
              let s = 1e3 * e.expiresAt - Date.now();
              if (!n && s > 0) {
                let e = new r.Ep();
                e.start(Math.min(i.mnr, s), () => a()), (o.current = e);
              }
            };
            return a(), () => o.current?.stop();
          }, [e]),
          n.useEffect(() => {
            a && o.current?.stop();
          }, [a]),
          a ? void 0 : e
        );
      }
    },
    963977(e, a, t) {
      t.d(a, { A: () => d });
      var n = t(64700),
        r = t(17928),
        l = t(919395),
        i = t(696451),
        o = t(486020),
        s = t(775602),
        u = t(531685),
        _ = t(940622),
        c = t(601255),
        p = t(476324);
      let d = (e) => {
        let {
            user: a,
            guildId: t,
            size: d,
            avatarDecorationOverride: g,
            onlyAnimateOnHoverOrFocus: A = !1,
          } = e,
          [f, E] = n.useState(!1),
          { canAnimate: v } = ((e, a) => {
            let t = (0, r.bG)([s.A], () => s.A.useReducedMotion),
              l = (0, r.bG)([u.A], () => u.A.isFocused()),
              [i, o] = n.useState(!1),
              _ = n.useRef(null);
            return (
              n.useEffect(() => {
                null !== _.current &&
                  (clearTimeout(_.current), (_.current = null));
                let n = l && (e || (!t && !a));
                n && t
                  ? (_.current = window.setTimeout(() => {
                      o(!0);
                    }, 1e3))
                  : o(n);
              }, [l, e, t, a]),
              n.useEffect(
                () => () => {
                  null !== _.current &&
                    (clearTimeout(_.current), (_.current = null));
                },
                [],
              ),
              { canAnimate: i }
            );
          })(f, A),
          m = (0, r.bG)([i.Ay], () =>
            null != t && null != a ? i.Ay.getMember(t, a.id) : null,
          ),
          b = (0, c.A)(
            (0, l.lw)({
              userValue: a?.avatarDecoration,
              guildValue: m?.avatarDecoration,
              guildId: t,
            }),
          ),
          R = (0, _.VU)(),
          h = n.useMemo(
            () =>
              null != R && "" !== R
                ? R
                : (0, o.F_)({
                    avatarDecoration: void 0 !== g ? g : b,
                    canAnimate: v,
                    size: d,
                  }),
            [R, g, b, v, d],
          );
        return {
          avatarPlaceholderSrc: p,
          avatarDecorationSrc: h,
          isAvatarDecorationAnimating: v,
          eventHandlers: {
            onMouseEnter: n.useCallback(() => E(!0), []),
            onMouseLeave: n.useCallback(() => E(!1), []),
          },
        };
      };
    },
    727170(e, a, t) {
      t.d(a, { A: () => p });
      var n = t(64700),
        r = t(575593),
        l = t(702841),
        i = t(954571),
        o = t(590180),
        s = t(993408),
        u = t(652215),
        _ = t(788868);
      let c = {
          [r.R.AVATAR_DECORATION]: _.Ae.AVATAR_DECORATION,
          [r.R.PROFILE_EFFECT]: _.Ae.PROFILE_EFFECT,
          [r.R.PROFILE_FRAME]: void 0,
          [r.R.NAMEPLATE]: void 0,
          [r.R.NONE]: void 0,
          [r.R.BUNDLE]: void 0,
          [r.R.VARIANTS_GROUP]: void 0,
          [r.R.EXTERNAL_SKU]: void 0,
        },
        p = (e) => {
          let a = (0, l.bG)([o.A], () => o.A.products);
          return (0, n.useCallback)(
            (t) => {
              let { type: n, skuId: r } = t,
                l = a.get(r);
              i.default.track(u.HAw.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: c[n],
                feature_tier: (0, s.G0)(l) ? _.tz.FREE : _.tz.PREMIUM_STANDARD,
                feature_selection: l?.name,
                location_stack: e,
              });
            },
            [a, e],
          );
        };
    },
    559474(e, a, t) {
      t.d(a, {
        GF: () => b,
        Jn: () => f,
        KE: () => h,
        Kx: () => v,
        Li: () => A,
        Ni: () => m,
        RN: () => p,
        aL: () => d,
        ds: () => P,
        eg: () => I,
        pd: () => T,
      }),
        t(321073);
      var n,
        r,
        l,
        i = t(64700),
        o = t(691540),
        s = t(857250),
        u = t(97483),
        _ = t(77350),
        c = t(940622),
        p =
          (((n = {}).CATALOG_BANNER_STATIC = "catalog_banner"),
          (n.CATALOG_BANNER_ANIMATED = "catalog_banner_animated"),
          (n.CATALOG_BANNER_RIVE = "catalog_banner_rive"),
          (n.HERO_BANNER_STATIC = "hero_banner"),
          (n.HERO_BANNER_ANIMATED = "hero_banner_animated"),
          (n.HERO_BANNER_RIVE = "hero_rive"),
          (n.HERO_LOGO = "hero_logo"),
          (n.FEATURED_BLOCK = "featured_block"),
          (n.UPSELL_BANNER = "upsell_banner"),
          (n.UPSELL_BANNER_POPOUT = "upsell_banner_popout"),
          (n.PDP_BACKGROUND = "pdp_bg"),
          (n.SHOP_BUTTON_BG_HOVER = "shop_button_bg_hover"),
          (n.SHOP_BUTTON_BG_HOVER_DARK = "shop_button_bg_hover_dark"),
          (n.SHOP_BUTTON_BG_HOVER_LIGHT = "shop_button_bg_hover_light"),
          (n.SHOP_BUTTON_BG_RESTING = "shop_button_bg_resting"),
          (n.SHOP_BUTTON_BG_RESTING_DARK = "shop_button_bg_resting_dark"),
          (n.SHOP_BUTTON_BG_RESTING_LIGHT = "shop_button_bg_resting_light"),
          (n.TAB_TOOLTIP = "tab_tooltip"),
          (n.LOGO = "logo"),
          (n.MOBILE_BANNER = "mobile_banner"),
          (n.MOBILE_BACKGROUND = "mobile_bg"),
          (n.MOBILE_HERO = "mobile_hero"),
          n);
      let d = {
          catalog_banner: ["jpg", "png"],
          catalog_banner_animated: ["webm"],
          catalog_banner_rive: ["riv"],
          hero_banner: ["jpg", "png"],
          hero_banner_animated: ["webm"],
          hero_rive: ["riv"],
          hero_logo: ["png"],
          featured_block: ["png"],
          upsell_banner: ["jpg", "png"],
          upsell_banner_popout: ["png"],
          pdp_bg: ["jpg"],
          shop_button_bg_hover: ["png"],
          shop_button_bg_hover_dark: ["png"],
          shop_button_bg_hover_light: ["png"],
          shop_button_bg_resting: ["png"],
          shop_button_bg_resting_dark: ["png"],
          shop_button_bg_resting_light: ["png"],
          tab_tooltip: ["jpg", "png"],
          logo: ["png"],
          mobile_banner: ["jpg"],
          mobile_bg: ["jpg"],
          mobile_hero: ["jpg"],
        },
        g = new Map(
          Object.values(p).flatMap((e) => d[e].map((a) => [`${e}.${a}`, e])),
        ),
        A = new Set(g.keys());
      var f =
        (((r = {}).PROFILE_EFFECT = "profile_effect"),
        (r.AVATAR_DECORATION = "avatar_decoration"),
        r);
      let E = ".DS_Store";
      var v =
        (((l = {}).COLLECTION = "collection"),
        (l.AVATAR_DECORATIONS = "avatar_decorations"),
        (l.PROFILE_EFFECTS = "profile_effects"),
        l);
      let m = (e) => {
          (0, o.P0)((0, s.o)(e, u.Ck.FAILURE));
        },
        b = (e) => {
          (0, o.P0)((0, s.o)(e, u.Ck.SUCCESS));
        },
        R = (e, a) => {
          let t = new FileReader();
          (t.onload = (t) => {
            null == t.target || "string" != typeof t.target.result
              ? m("Error uploading file. Try again!")
              : a(e, t.target.result);
          }),
            t.readAsDataURL(e);
        },
        h = (e, a, t) => {
          if (0 === e.length) return void t?.("No files found!");
          for (let t of e) R(t, a);
        },
        O = (e, a) => `${e}/${a}`,
        F = (e) => (0, _.tT)(e.type) || (0, _.XB)(e.type) || (0, _.XA)(e.name),
        T = (e) => g.get(e.name) ?? null,
        N = async (e) => {
          let a = [];
          if (e.isFile) {
            let t = await new Promise((a) => e.file(a));
            t.name !== E && a.push(t);
          } else if (e.isDirectory) {
            let t = e.createReader(),
              n = await new Promise((e) => t.readEntries(e)),
              r = await Promise.all(n.map((e) => N(e)));
            a.push(...r.flat());
          }
          return a;
        },
        D = (e, a, t, n) => {
          if (a.name === E) return;
          let r = O(e, a.name);
          if ("profile_effects" === t)
            F(a) || a.name.endsWith(".txt")
              ? (e in n.profileEffectFilesMap ||
                  (n.profileEffectFilesMap[e] = []),
                n.profileEffectFilesMap[e].push(a))
              : n.ignoredFilenames.push(O(e, a.name));
          else
            F(a)
              ? "collection" === t || null === t
                ? null != T(a)
                  ? n.collectionFiles.push(a)
                  : n.ignoredFilenames.push(r)
                : "avatar_decorations" === t
                  ? n.avatarDecorationFiles.push(a)
                  : n.ignoredFilenames.push(r)
              : n.ignoredFilenames.push(r);
        },
        C = async (e, a, t) => {
          let n = e.createReader();
          for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isFile) {
              let n = r,
                l = await new Promise((e) => n.file(e));
              D(e.name, l, a, t);
            } else {
              let e = await N(r);
              t.ignoredFilenames.push(...e.map((e) => O(r.name, e.name)));
            }
        },
        L = async (e, a) => {
          let t = e.createReader();
          for (let n of await new Promise((e) => t.readEntries(e)))
            n.isDirectory
              ? await C(n, "profile_effects", a)
              : n.isFile &&
                n.name !== E &&
                a.ignoredFilenames.push(O(e.name, n.name));
        },
        w = async (e, a) => {
          let t = e.createReader();
          for (let e of await new Promise((e) => t.readEntries(e)))
            if (e.isDirectory) {
              let t = e;
              if ("collection" === t.name) await C(t, "collection", a);
              else if ("avatar_decorations" === t.name)
                await C(t, "avatar_decorations", a);
              else if ("profile_effects" === t.name) await L(t, a);
              else {
                let e = await N(t);
                a.ignoredFilenames.push(...e.map((e) => O(t.name, e.name)));
              }
            }
        },
        I = async (e) => {
          let a = {
            collectionFiles: [],
            avatarDecorationFiles: [],
            profileEffectFilesMap: {},
            ignoredFilenames: [],
          };
          for (let t of e)
            if (t.isDirectory) {
              let e = t.name;
              "collection" === e || "avatar_decorations" === e
                ? await C(t, e, a)
                : "profile_effects" === e
                  ? await L(t, a)
                  : await w(t, a);
            } else if (t.isFile) {
              let e = t;
              D("", await new Promise((a) => e.file(a)), null, a);
            }
          return (
            a.collectionFiles.sort((e, a) => e.name.localeCompare(a.name)),
            a.avatarDecorationFiles.sort((e, a) =>
              e.name.localeCompare(a.name),
            ),
            a.ignoredFilenames.sort((e, a) => e.localeCompare(a)),
            a
          );
        },
        P = () => {
          let [e, a] = i.useState(() => ({
              collectionFiles: [],
              avatarDecorationFiles: [],
              profileEffectFilesMap: {},
              ignoredFilenames: [],
            })),
            { upsertCollectionAsset: t, upsertAvatarDecorationAsset: n } = (0,
            c.JE)(),
            r = i.useCallback(
              async (e) => {
                let r = await I(e);
                a(r),
                  (0 !== r.collectionFiles.length ||
                    0 !== r.avatarDecorationFiles.length) &&
                    (r.collectionFiles.forEach((e) => {
                      R(e, (e) => {
                        let a = T(e);
                        null != a && t(a, e);
                      });
                    }),
                    r.avatarDecorationFiles.forEach((e) => {
                      R(e, (e) => {
                        n(e);
                      });
                    }));
              },
              [t, n],
            ),
            l = i.useCallback(() => {
              a((e) => ({
                ...e,
                collectionFiles: [],
                avatarDecorationFiles: [],
                profileEffectFilesMap: {},
              }));
            }, []),
            o = i.useCallback(() => {
              a((e) => ({ ...e, ignoredFilenames: [] }));
            }, []);
          return {
            ignoredFilenames: e.ignoredFilenames,
            clearAssets: l,
            clearIgnoredFilenames: o,
            processAndUpsertAssets: r,
          };
        };
    },
    478644(e, a, t) {
      t.d(a, { j: () => n });
      let n = 0xa00000;
    },
    252732(e, a, t) {
      t.d(a, {
        XD: () => d,
        sv: () => g,
        eh: () => A,
        sN: () => E,
        rM: () => f,
      });
      var n = t(627968);
      t(64700);
      var r = t(317097),
        l = t(192308);
      t(23658);
      var i = t(101058),
        o = t(486020);
      t(453771);
      var s = t(427262),
        u = t(228366),
        _ = t(478644),
        c = t(339984),
        p = t(985018);
      function d(e) {
        let {
          uploadType: a,
          guildId: r,
          analyticsSource: o,
          filters: s,
          isTryItOut: d = !1,
          stackingBehavior: g,
        } = e;
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              t.e("87904"),
              t.e("90261"),
              t.e("16933"),
              t.e("63232"),
              t.e("50015"),
              t.e("47017"),
              t.e("1555"),
              t.e("44695"),
              t.e("33902"),
              t.e("31644"),
              t.e("993"),
              t.e("76170"),
              t.e("99999"),
              t.e("11527"),
              t.e("6223"),
              t.e("29666"),
              t.e("80436"),
              t.e("93513"),
              t.e("47011"),
              t.e("79149"),
              t.e("90017"),
              t.e("99150"),
              t.e("60987"),
            ]).then(t.bind(t, 902550));
            return (t) =>
              (0, n.jsx)(e, {
                filters: s,
                maxFileSizeBytes: _.j,
                imageSpecifications:
                  a === c.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                onComplete: (e) => {
                  let {
                      assetOrigin: t,
                      imageUri: n,
                      file: l,
                      originalAsset: s,
                    } = e,
                    _ = l.name.replace(/\.[^/.]+$/, ""),
                    c = (0, i.Rh)({ filename: _, assetOrigin: t });
                  !(function (e) {
                    let {
                      image: a,
                      file: t,
                      uploadType: n,
                      guildId: r,
                      analyticsSource: l,
                      isTryItOut: i = !1,
                    } = e;
                    u.h.dispatch({
                      type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                      image: a,
                      file: t,
                      uploadType: n,
                      guildId: r,
                      analyticsSource: l,
                      isTryItOut: i,
                    });
                  })({
                    image: (0, i.XB)({
                      assetOrigin: t,
                      imageUri: n,
                      description: c,
                      originalAsset: s,
                    }),
                    file: l,
                    uploadType: a,
                    guildId: r,
                    analyticsSource: o,
                    isTryItOut: d,
                  });
                },
                uploadType: a,
                showUpsellHeader: !0,
                ...t,
              });
          },
          { stackingBehavior: g },
        );
      }
      function g(e, a, t) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null != e) return e;
        let { size: r = 80, canAnimate: l = !0 } = n,
          i = null === e;
        return i && null == a
          ? o.Ay.getDefaultAvatarURL(t.id, t.discriminator)
          : i || a?.avatar == null
            ? t.getAvatarURL(void 0, r, l)
            : t.getAvatarURL(a?.guildId, r, l);
      }
      function A(e) {
        let {
            pendingNickname: a,
            pendingGlobalName: t,
            user: n,
            guildMember: r,
          } = e,
          l = "" === a ? null : (a ?? r?.nick),
          i = "" === t ? n.username : t;
        return l ?? i ?? s.Ay.getName(n);
      }
      function f(e, a, t) {
        t(e ?? (null != a ? null : void 0));
      }
      function E(e) {
        return (null != e ? (0, r.OK)(e) : 1) > 0.25;
      }
    },
    352413(e, a, t) {
      t.d(a, { A: () => _ });
      var n = t(64700),
        r = t(702841),
        l = t(727170),
        i = t(919395),
        o = t(207803),
        s = t(84540),
        u = t(836602);
      function _(e) {
        let { isTryItOut: a, analyticsLocations: t, guildId: _ } = e,
          c = (0, l.A)(t),
          {
            pendingAvatar: p,
            pendingAvatarDecoration: d,
            pendingErrors: g,
          } = (0, r.cf)([u.A], () => {
            if (a) {
              let e = u.A.getTryItOutChanges();
              return {
                pendingAvatar: e.tryItOutAvatar,
                pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                pendingErrors: u.A.getErrors(_).avatarDecoration,
              };
            }
            let e = u.A.getPendingChanges(_);
            return {
              pendingAvatar: e.pendingAvatar,
              pendingAvatarDecoration: e.pendingAvatarDecoration,
              pendingErrors: u.A.getErrors(_).avatarDecoration,
            };
          }),
          A = (0, n.useCallback)(
            (e) => {
              (0, s.p)({ guildId: _, avatar: e }),
                (0, i.WU)(null == e ? "remove" : "set");
            },
            [_],
          ),
          f = (0, n.useCallback)(
            (e) => {
              (0, s.p)({ guildId: _, avatarDecoration: e }), null != e && c(e);
            },
            [c, _],
          );
        return {
          pendingAvatar: p,
          pendingAvatarDecoration: d,
          pendingErrors: g,
          setPendingAvatar: a ? o.e$ : A,
          setPendingAvatarDecoration: a ? o.Go : f,
        };
      }
    },
    62199(e, a, t) {
      t.d(a, { A: () => _ });
      var n = t(64700),
        r = t(17928),
        l = t(252732),
        i = t(101058),
        o = t(696451),
        s = t(352413),
        u = t(45837);
      function _(e) {
        let {
            user: a,
            guildId: t,
            size: _,
            showPending: c = !1,
            animateOnHover: p = !1,
            avatarOverride: d,
          } = e,
          { onMouseEnter: g, onMouseLeave: A, shouldAnimate: f } = (0, u.A)(p),
          { pendingAvatar: E } = (0, s.A)({ guildId: null === t ? void 0 : t }),
          v =
            c && null != a
              ? (0, i.V7)({ userId: a.id, image: E, canAnimate: f, size: _ })
              : void 0,
          m = void 0 !== d ? d : v,
          b = (0, r.bG)([o.Ay], () =>
            null != t && null != a ? o.Ay.getMember(t, a.id) : null,
          );
        return {
          avatarSrc: n.useMemo(
            () =>
              null != a
                ? (0, l.sv)(m, b, a, { canAnimate: f, size: _ })
                : void 0,
            [m, b, a, f, _],
          ),
          isAvatarAnimating: f,
          eventHandlers: { onMouseEnter: g, onMouseLeave: A },
        };
      }
    },
    854627(e, a, t) {
      t.d(a, { A: () => _ });
      var n = t(64700),
        r = t(17928),
        l = t(778712),
        i = t(562819),
        o = t(963977),
        s = t(287809),
        u = t(62199);
      function _(e) {
        let {
            userId: a,
            guildId: t,
            size: _,
            showPending: c = !1,
            animateOnHover: p = !1,
            avatarDecorationOverride: d,
            avatarOverride: g,
          } = e,
          A = (0, r.bG)([s.default], () => s.default.getUser(a)),
          {
            avatarSrc: f,
            isAvatarAnimating: E,
            eventHandlers: v,
          } = (0, u.A)({
            user: A,
            guildId: t,
            size: (0, l.FT)(_),
            showPending: c,
            animateOnHover: p,
            avatarOverride: g,
          }),
          {
            avatarPlaceholderSrc: m,
            avatarDecorationSrc: b,
            eventHandlers: R,
          } = (0, o.A)({
            user: A,
            guildId: t,
            avatarDecorationOverride: d,
            size: (0, i.Te)(_),
            onlyAnimateOnHoverOrFocus: p,
          });
        return {
          avatarPlaceholderSrc: m,
          avatarDecorationSrc: b,
          avatarSrc: f,
          isAnimating: E,
          eventHandlers: {
            onMouseEnter: n.useCallback(() => {
              v.onMouseEnter(), R.onMouseEnter();
            }, [v, R]),
            onMouseLeave: n.useCallback(() => {
              v.onMouseLeave(), R.onMouseLeave();
            }, [v, R]),
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=80527.cacce095511da673.js.map
