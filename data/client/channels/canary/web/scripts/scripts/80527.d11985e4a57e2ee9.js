"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80527"],
  {
    61310(e, a, t) {
      t.d(a, { Y: () => i, f: () => l });
      var n,
        r = t(339984),
        l =
          (((n = {}).USER_DEFAULT_PROFILE_AVATAR =
            "USER_DEFAULT_PROFILE_AVATAR"),
          (n.USER_DEFAULT_PROFILE_BANNER = "USER_DEFAULT_PROFILE_BANNER"),
          (n.USER_GUILD_PROFILE_AVATAR = "USER_GUILD_PROFILE_AVATAR"),
          (n.USER_GUILD_PROFILE_BANNER = "USER_GUILD_PROFILE_BANNER"),
          (n.GUILD_ICON = "GUILD_ICON"),
          (n.GUILD_BANNER = "GUILD_BANNER"),
          (n.GUILD_DISCOVERY_SPLASH = "GUILD_DISCOVERY_SPLASH"),
          (n.GUILD_INVITE_SPLASH = "GUILD_INVITE_SPLASH"),
          (n.EMOJI = "EMOJI"),
          (n.STICKER = "STICKER"),
          n);
      function i(e, a) {
        switch (e) {
          case r.HL.AVATAR:
            return null != a
              ? "USER_GUILD_PROFILE_AVATAR"
              : "USER_DEFAULT_PROFILE_AVATAR";
          case r.HL.BANNER:
            return null != a
              ? "USER_GUILD_PROFILE_BANNER"
              : "USER_DEFAULT_PROFILE_BANNER";
          case r.HL.GUILD_BANNER:
          case r.HL.VIDEO_BACKGROUND:
          case r.HL.SCHEDULED_EVENT_IMAGE:
          case r.HL.HOME_HEADER:
          case r.HL.AVATAR_DECORATION:
          case r.HL.GUILD_ICON:
            return null;
        }
      }
    },
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
      t.d(a, { A: () => E });
      var n = t(64700),
        r = t(17928),
        l = t(919395),
        i = t(696451),
        o = t(486020),
        s = t(775602),
        _ = t(531685),
        u = t(940622),
        A = t(601255),
        c = t(476324);
      let E = (e) => {
        let {
            user: a,
            guildId: t,
            size: E,
            avatarDecorationOverride: p,
            onlyAnimateOnHoverOrFocus: R = !1,
          } = e,
          [d, g] = n.useState(!1),
          { canAnimate: f } = ((e, a) => {
            let t = (0, r.bG)([s.A], () => s.A.useReducedMotion),
              l = (0, r.bG)([_.A], () => _.A.isFocused()),
              [i, o] = n.useState(!1),
              u = n.useRef(null);
            return (
              n.useEffect(() => {
                null !== u.current &&
                  (clearTimeout(u.current), (u.current = null));
                let n = l && (e || (!t && !a));
                n && t
                  ? (u.current = window.setTimeout(() => {
                      o(!0);
                    }, 1e3))
                  : o(n);
              }, [l, e, t, a]),
              n.useEffect(
                () => () => {
                  null !== u.current &&
                    (clearTimeout(u.current), (u.current = null));
                },
                [],
              ),
              { canAnimate: i }
            );
          })(d, R),
          m = (0, r.bG)([i.Ay], () =>
            null != t && null != a ? i.Ay.getMember(t, a.id) : null,
          ),
          v = (0, A.A)(
            (0, l.lw)({
              userValue: a?.avatarDecoration,
              guildValue: m?.avatarDecoration,
              guildId: t,
            }),
          ),
          O = (0, u.VU)(),
          L = n.useMemo(
            () =>
              null != O && "" !== O
                ? O
                : (0, o.F_)({
                    avatarDecoration: void 0 !== p ? p : v,
                    canAnimate: f,
                    size: E,
                  }),
            [O, p, v, f, E],
          );
        return {
          avatarPlaceholderSrc: c,
          avatarDecorationSrc: L,
          isAvatarDecorationAnimating: f,
          eventHandlers: {
            onMouseEnter: n.useCallback(() => g(!0), []),
            onMouseLeave: n.useCallback(() => g(!1), []),
          },
        };
      };
    },
    727170(e, a, t) {
      t.d(a, { A: () => c });
      var n = t(64700),
        r = t(575593),
        l = t(702841),
        i = t(954571),
        o = t(590180),
        s = t(993408),
        _ = t(652215),
        u = t(788868);
      let A = {
          [r.R.AVATAR_DECORATION]: u.Ae.AVATAR_DECORATION,
          [r.R.PROFILE_EFFECT]: u.Ae.PROFILE_EFFECT,
          [r.R.PROFILE_FRAME]: void 0,
          [r.R.NAMEPLATE]: void 0,
          [r.R.NONE]: void 0,
          [r.R.BUNDLE]: void 0,
          [r.R.VARIANTS_GROUP]: void 0,
          [r.R.EXTERNAL_SKU]: void 0,
        },
        c = (e) => {
          let a = (0, l.bG)([o.A], () => o.A.products);
          return (0, n.useCallback)(
            (t) => {
              let { type: n, skuId: r } = t,
                l = a.get(r);
              i.default.track(_.HAw.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: A[n],
                feature_tier: (0, s.G0)(l) ? u.tz.FREE : u.tz.PREMIUM_STANDARD,
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
        GF: () => v,
        Jn: () => d,
        KE: () => L,
        Kx: () => f,
        Li: () => R,
        Ni: () => m,
        RN: () => c,
        aL: () => E,
        ds: () => P,
        eg: () => S,
        pd: () => T,
      }),
        t(321073);
      var n,
        r,
        l,
        i = t(64700),
        o = t(691540),
        s = t(857250),
        _ = t(97483),
        u = t(77350),
        A = t(940622),
        c =
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
      let E = {
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
        p = new Map(
          Object.values(c).flatMap((e) => E[e].map((a) => [`${e}.${a}`, e])),
        ),
        R = new Set(p.keys());
      var d =
        (((r = {}).PROFILE_EFFECT = "profile_effect"),
        (r.AVATAR_DECORATION = "avatar_decoration"),
        r);
      let g = ".DS_Store";
      var f =
        (((l = {}).COLLECTION = "collection"),
        (l.AVATAR_DECORATIONS = "avatar_decorations"),
        (l.PROFILE_EFFECTS = "profile_effects"),
        l);
      let m = (e) => {
          (0, o.P0)((0, s.o)(e, _.Ck.FAILURE));
        },
        v = (e) => {
          (0, o.P0)((0, s.o)(e, _.Ck.SUCCESS));
        },
        O = (e, a) => {
          let t = new FileReader();
          (t.onload = (t) => {
            null == t.target || "string" != typeof t.target.result
              ? m("Error uploading file. Try again!")
              : a(e, t.target.result);
          }),
            t.readAsDataURL(e);
        },
        L = (e, a, t) => {
          if (0 === e.length) return void t?.("No files found!");
          for (let t of e) O(t, a);
        },
        I = (e, a) => `${e}/${a}`,
        F = (e) => (0, u.tT)(e.type) || (0, u.XB)(e.type) || (0, u.XA)(e.name),
        T = (e) => p.get(e.name) ?? null,
        b = async (e) => {
          let a = [];
          if (e.isFile) {
            let t = await new Promise((a) => e.file(a));
            t.name !== g && a.push(t);
          } else if (e.isDirectory) {
            let t = e.createReader(),
              n = await new Promise((e) => t.readEntries(e)),
              r = await Promise.all(n.map((e) => b(e)));
            a.push(...r.flat());
          }
          return a;
        },
        N = (e, a, t, n) => {
          if (a.name === g) return;
          let r = I(e, a.name);
          if ("profile_effects" === t)
            F(a) || a.name.endsWith(".txt")
              ? (e in n.profileEffectFilesMap ||
                  (n.profileEffectFilesMap[e] = []),
                n.profileEffectFilesMap[e].push(a))
              : n.ignoredFilenames.push(I(e, a.name));
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
        D = async (e, a, t) => {
          let n = e.createReader();
          for (let r of await new Promise((e) => n.readEntries(e)))
            if (r.isFile) {
              let n = r,
                l = await new Promise((e) => n.file(e));
              N(e.name, l, a, t);
            } else {
              let e = await b(r);
              t.ignoredFilenames.push(...e.map((e) => I(r.name, e.name)));
            }
        },
        h = async (e, a) => {
          let t = e.createReader();
          for (let n of await new Promise((e) => t.readEntries(e)))
            n.isDirectory
              ? await D(n, "profile_effects", a)
              : n.isFile &&
                n.name !== g &&
                a.ignoredFilenames.push(I(e.name, n.name));
        },
        U = async (e, a) => {
          let t = e.createReader();
          for (let e of await new Promise((e) => t.readEntries(e)))
            if (e.isDirectory) {
              let t = e;
              if ("collection" === t.name) await D(t, "collection", a);
              else if ("avatar_decorations" === t.name)
                await D(t, "avatar_decorations", a);
              else if ("profile_effects" === t.name) await h(t, a);
              else {
                let e = await b(t);
                a.ignoredFilenames.push(...e.map((e) => I(t.name, e.name)));
              }
            }
        },
        S = async (e) => {
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
                ? await D(t, e, a)
                : "profile_effects" === e
                  ? await h(t, a)
                  : await U(t, a);
            } else if (t.isFile) {
              let e = t;
              N("", await new Promise((a) => e.file(a)), null, a);
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
            A.JE)(),
            r = i.useCallback(
              async (e) => {
                let r = await S(e);
                a(r),
                  (0 !== r.collectionFiles.length ||
                    0 !== r.avatarDecorationFiles.length) &&
                    (r.collectionFiles.forEach((e) => {
                      O(e, (e) => {
                        let a = T(e);
                        null != a && t(a, e);
                      });
                    }),
                    r.avatarDecorationFiles.forEach((e) => {
                      O(e, (e) => {
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
        XD: () => R,
        sv: () => d,
        eh: () => g,
        sN: () => m,
        rM: () => f,
      });
      var n = t(627968);
      t(64700);
      var r = t(317097),
        l = t(192308);
      t(23658);
      var i = t(870218),
        o = t(61310),
        s = t(101058),
        _ = t(486020);
      t(453771);
      var u = t(427262),
        A = t(228366),
        c = t(478644),
        E = t(339984),
        p = t(985018);
      function R(e) {
        let {
            uploadType: a,
            guildId: r,
            analyticsSource: _,
            filters: u,
            isTryItOut: R = !1,
            stackingBehavior: d,
          } = e,
          g = (0, o.Y)(a, r),
          f = null;
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              t.e("69668"),
              t.e("90261"),
              t.e("16933"),
              t.e("73873"),
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
                filters: u,
                maxFileSizeBytes: c.j,
                imageSpecifications:
                  a === E.HL.BANNER ? p.intl.string(p.t.IhzZlo) : void 0,
                onFileSelected: (e) => {
                  f = null != g ? i.A.fromBlob(g, e) : null;
                },
                onComplete: async (e) => {
                  let {
                    assetOrigin: t,
                    imageUri: n,
                    file: l,
                    originalAsset: o,
                  } = e;
                  null == f && null != g && (f = i.A.fromBlob(g, l));
                  let u = (await f?.getOriginalMd5()) ?? null,
                    c = l.name.replace(/\.[^/.]+$/, ""),
                    E = (0, s.Rh)({ filename: c, assetOrigin: t });
                  !(function (e) {
                    let {
                      image: a,
                      file: t,
                      uploadType: n,
                      guildId: r,
                      analyticsSource: l,
                      isTryItOut: i = !1,
                    } = e;
                    A.h.dispatch({
                      type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
                      image: a,
                      file: t,
                      uploadType: n,
                      guildId: r,
                      analyticsSource: l,
                      isTryItOut: i,
                    });
                  })({
                    image: (0, s.XB)({
                      assetOrigin: t,
                      imageUri: n,
                      description: E,
                      originalAsset: o,
                      originalMd5: u,
                    }),
                    file: l,
                    uploadType: a,
                    guildId: r,
                    analyticsSource: _,
                    isTryItOut: R,
                  });
                },
                uploadType: a,
                showUpsellHeader: !0,
                ...t,
              });
          },
          { stackingBehavior: d },
        );
      }
      function d(e, a, t) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (null != e) return e;
        let { size: r = 80, canAnimate: l = !0 } = n,
          i = null === e;
        return i && null == a
          ? _.Ay.getDefaultAvatarURL(t.id, t.discriminator)
          : i || a?.avatar == null
            ? t.getAvatarURL(void 0, r, l)
            : t.getAvatarURL(a?.guildId, r, l);
      }
      function g(e) {
        let {
            pendingNickname: a,
            pendingGlobalName: t,
            user: n,
            guildMember: r,
          } = e,
          l = "" === a ? null : (a ?? r?.nick),
          i = "" === t ? n.username : t;
        return l ?? i ?? u.Ay.getName(n);
      }
      function f(e, a, t) {
        t(e ?? (null != a ? null : void 0));
      }
      function m(e) {
        return (null != e ? (0, r.OK)(e) : 1) > 0.25;
      }
    },
    352413(e, a, t) {
      t.d(a, { A: () => u });
      var n = t(64700),
        r = t(702841),
        l = t(727170),
        i = t(919395),
        o = t(207803),
        s = t(84540),
        _ = t(836602);
      function u(e) {
        let { isTryItOut: a, analyticsLocations: t, guildId: u } = e,
          A = (0, l.A)(t),
          {
            pendingAvatar: c,
            pendingAvatarDecoration: E,
            pendingErrors: p,
          } = (0, r.cf)([_.A], () => {
            if (a) {
              let e = _.A.getTryItOutChanges();
              return {
                pendingAvatar: e.tryItOutAvatar,
                pendingAvatarDecoration: e.tryItOutAvatarDecoration,
                pendingErrors: _.A.getErrors(u).avatarDecoration,
              };
            }
            let e = _.A.getPendingChanges(u);
            return {
              pendingAvatar: e.pendingAvatar,
              pendingAvatarDecoration: e.pendingAvatarDecoration,
              pendingErrors: _.A.getErrors(u).avatarDecoration,
            };
          }),
          R = (0, n.useCallback)(
            (e) => {
              (0, s.p)({ guildId: u, avatar: e }),
                (0, i.WU)(null == e ? "remove" : "set");
            },
            [u],
          ),
          d = (0, n.useCallback)(
            (e) => {
              (0, s.p)({ guildId: u, avatarDecoration: e }), null != e && A(e);
            },
            [A, u],
          );
        return {
          pendingAvatar: c,
          pendingAvatarDecoration: E,
          pendingErrors: p,
          setPendingAvatar: a ? o.e$ : R,
          setPendingAvatarDecoration: a ? o.Go : d,
        };
      }
    },
    62199(e, a, t) {
      t.d(a, { A: () => u });
      var n = t(64700),
        r = t(17928),
        l = t(252732),
        i = t(101058),
        o = t(696451),
        s = t(352413),
        _ = t(45837);
      function u(e) {
        let {
            user: a,
            guildId: t,
            size: u,
            showPending: A = !1,
            animateOnHover: c = !1,
            avatarOverride: E,
          } = e,
          { onMouseEnter: p, onMouseLeave: R, shouldAnimate: d } = (0, _.A)(c),
          { pendingAvatar: g } = (0, s.A)({ guildId: null === t ? void 0 : t }),
          f =
            A && null != a
              ? (0, i.V7)({ userId: a.id, image: g, canAnimate: d, size: u })
              : void 0,
          m = void 0 !== E ? E : f,
          v = (0, r.bG)([o.Ay], () =>
            null != t && null != a ? o.Ay.getMember(t, a.id) : null,
          );
        return {
          avatarSrc: n.useMemo(
            () =>
              null != a
                ? (0, l.sv)(m, v, a, { canAnimate: d, size: u })
                : void 0,
            [m, v, a, d, u],
          ),
          isAvatarAnimating: d,
          eventHandlers: { onMouseEnter: p, onMouseLeave: R },
        };
      }
    },
    854627(e, a, t) {
      t.d(a, { A: () => u });
      var n = t(64700),
        r = t(17928),
        l = t(778712),
        i = t(562819),
        o = t(963977),
        s = t(287809),
        _ = t(62199);
      function u(e) {
        let {
            userId: a,
            guildId: t,
            size: u,
            showPending: A = !1,
            animateOnHover: c = !1,
            avatarDecorationOverride: E,
            avatarOverride: p,
          } = e,
          R = (0, r.bG)([s.default], () => s.default.getUser(a)),
          {
            avatarSrc: d,
            isAvatarAnimating: g,
            eventHandlers: f,
          } = (0, _.A)({
            user: R,
            guildId: t,
            size: (0, l.FT)(u),
            showPending: A,
            animateOnHover: c,
            avatarOverride: p,
          }),
          {
            avatarPlaceholderSrc: m,
            avatarDecorationSrc: v,
            eventHandlers: O,
          } = (0, o.A)({
            user: R,
            guildId: t,
            avatarDecorationOverride: E,
            size: (0, i.Te)(u),
            onlyAnimateOnHoverOrFocus: c,
          });
        return {
          avatarPlaceholderSrc: m,
          avatarDecorationSrc: v,
          avatarSrc: d,
          isAnimating: g,
          eventHandlers: {
            onMouseEnter: n.useCallback(() => {
              f.onMouseEnter(), O.onMouseEnter();
            }, [f, O]),
            onMouseLeave: n.useCallback(() => {
              f.onMouseLeave(), O.onMouseLeave();
            }, [f, O]),
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=80527.d11985e4a57e2ee9.js.map
