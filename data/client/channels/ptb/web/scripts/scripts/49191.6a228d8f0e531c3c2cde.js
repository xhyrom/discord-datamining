(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49191"], {
        462274: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useColorStore: function() {
                    return f
                },
                maybeFetchColors: function() {
                    return c
                },
                default: function() {
                    return g
                },
                useAvatarColors: function() {
                    return v
                }
            }), i("222007");
            var l = i("884691"),
                r = i("656280"),
                n = i.n(r),
                u = i("308503"),
                o = i("446674"),
                s = i("206230"),
                a = i("284679"),
                d = i("103603");
            let f = (0, u.default)(() => ({
                palette: {},
                fetching: {}
            }));
            async function c(e) {
                null == f.getState().palette[e] && await h(e)
            }
            async function h(e) {
                if (!f.getState().fetching[e]) {
                    f.setState(t => ({
                        fetching: {
                            ...t.fetching,
                            [e]: !0
                        }
                    }));
                    try {
                        let t = await (0, d.getPaletteForAvatar)(e),
                            i = (0, a.getComplimentaryPaletteForColor)(t[0]);
                        f.setState(l => ({
                            fetching: {
                                ...l.fetching,
                                [e]: !1
                            },
                            palette: {
                                ...l.palette,
                                [e]: [...t.slice(0, 2), ...i]
                            }
                        }))
                    } catch (t) {
                        f.setState(t => ({
                            fetching: {
                                ...t.fetching,
                                [e]: !1
                            }
                        }))
                    }
                }
            }

            function g(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    [l] = v(e, t, i);
                return l
            }

            function v(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = f(t => null == e ? void 0 : t.palette[e]),
                    u = (0, o.useStateFromStores)([s.default], () => i && s.default.desaturateUserColors ? s.default.saturation : 1);
                l.useEffect(() => {
                    null != e && null == r && h(e)
                }, [e, r]);
                let a = l.useMemo(() => null == r ? void 0 : r.map(e => {
                    let [t, i, l] = e, {
                        h: r,
                        s: o,
                        l: s
                    } = n({
                        r: t,
                        g: i,
                        b: l
                    }).toHsl();
                    return n({
                        h: r,
                        s: o * u,
                        l: s
                    }).toHexString()
                }), [r, u]);
                return null != a ? a : [t, t]
            }
        },
        189293: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchUserProfileEffects: function() {
                    return a
                }
            });
            var l = i("872717"),
                r = i("913144"),
                n = i("448993"),
                u = i("845962"),
                o = i("49111");
            let s = e => {
                    let {
                        sku_id: t,
                        ...i
                    } = e;
                    return {
                        id: i.id,
                        skuId: t,
                        config: {
                            ...i,
                            skuId: t
                        }
                    }
                },
                a = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = u.default.isFetching,
                        i = u.default.profileEffects,
                        a = 0 === i.length;
                    if (!t && (e || a)) {
                        r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH"
                        });
                        try {
                            let {
                                body: e
                            } = await l.HTTP.get(o.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, i = t.map(s);
                            r.default.dispatch({
                                type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                                profileEffects: i
                            })
                        } catch (e) {
                            throw r.default.dispatch({
                                type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                                error: e
                            }), new n.APIError(e)
                        }
                    }
                }
        },
        845962: function(e, t, i) {
            "use strict";
            let l;
            i.r(t), i.d(t, {
                default: function() {
                    return g
                }
            });
            var r = i("917351"),
                n = i("446674"),
                u = i("913144");
            let o = [],
                s = !1;
            let a = o,
                d = {},
                f = null,
                c = e => {
                    a = (0, r.cloneDeep)(e);
                    let t = {};
                    a.forEach(e => {
                        t[e.id] = e
                    }), d = t
                };
            class h extends n.default.Store {
                get isFetching() {
                    return s
                }
                get fetchError() {
                    return l
                }
                get profileEffects() {
                    return a
                }
                get tryItOutId() {
                    return f
                }
                getProfileEffectById(e) {
                    return null != e ? d[e] : void 0
                }
            }
            h.displayName = "ProfileEffectStore";
            var g = new h(u.default, {
                USER_PROFILE_EFFECTS_FETCH: () => {
                    s = !0
                },
                USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
                    let {
                        profileEffects: t
                    } = e;
                    s = !1, c(0 === t.length ? o : t)
                },
                USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    s = !1, l = t, c(o)
                },
                PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
                    let {
                        id: t
                    } = e;
                    f = t
                },
                LOGOUT: e => {
                    s = !1, c(o), f = null
                }
            })
        },
        501768: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                },
                getOrFetchProfileEffects: function() {
                    return s
                }
            });
            var l = i("884691"),
                r = i("446674"),
                n = i("189293"),
                u = i("845962");

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return l.useEffect(() => {
                    (0, n.fetchUserProfileEffects)(e)
                }, [e]), (0, r.useStateFromStores)([u.default], () => u.default.profileEffects)
            }

            function s() {
                return (0, n.fetchUserProfileEffects)(), u.default.profileEffects
            }
        },
        811907: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            }), i("222007");
            var l, r = i("906932"),
                n = i("315102"),
                u = i("719923"),
                o = i("646718");

            function s(e, t) {
                return null == t || "" === t ? e : t
            }
            l = class {
                get premiumSince() {
                    return this._userProfile.premiumSince
                }
                get premiumGuildSince() {
                    return this._userProfile.premiumGuildSince
                }
                get premiumType() {
                    return this._userProfile.premiumType
                }
                get primaryColor() {
                    var e, t;
                    return null !== (t = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : this.accentColor
                }
                get canUsePremiumProfileCustomization() {
                    return u.default.isPremiumAtLeast(this.premiumType, o.PremiumTypes.TIER_2)
                }
                get canEditThemes() {
                    return this.canUsePremiumProfileCustomization
                }
                get application() {
                    return this._userProfile.application
                }
                hasThemeColors() {
                    var e, t;
                    return (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) != null || (null === (t = this.themeColors) || void 0 === t ? void 0 : t[1]) != null
                }
                hasPremiumCustomization() {
                    return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
                }
                hasFullProfile() {
                    return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile)
                }
                isUsingGuildMemberBanner() {
                    var e;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.banner) != null
                }
                isUsingGuildMemberBio() {
                    var e, t;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) != null && (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio) !== ""
                }
                isUsingGuildMemberPronouns() {
                    var e, t;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) != null && (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.pronouns) !== ""
                }
                getBannerURL(e) {
                    let {
                        canAnimate: t,
                        size: i
                    } = e;
                    return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, n.getGuildMemberBannerURL)({
                        id: this.userId,
                        guildId: this.guildId,
                        banner: this.banner,
                        canAnimate: t,
                        size: i
                    }) : (0, n.getUserBannerURL)({
                        id: this.userId,
                        banner: this.banner,
                        canAnimate: t,
                        size: i
                    })
                }
                getPreviewBanner(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                    return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, n.getUserBannerURL)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: t,
                        size: i
                    }) : null : this.getBannerURL({
                        canAnimate: t,
                        size: 480
                    })
                }
                getPreviewBio(e) {
                    var t;
                    return (0, r.getProfilePreviewField)(e, null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio, this._userProfile.bio, null != this.guildId)
                }
                getPreviewThemeColors(e) {
                    return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors
                }
                getBadges() {
                    var e, t, i;
                    return [...null !== (t = this._userProfile.badges) && void 0 !== t ? t : [], ...null !== (i = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== i ? i : []]
                }
                getLegacyUsername() {
                    return this._userProfile.legacyUsername
                }
                constructor(e, t) {
                    var i, l, r, n;
                    this.userId = e.userId, this.guildId = null == t ? void 0 : t.guildId, this.banner = null !== (i = null == t ? void 0 : t.banner) && void 0 !== i ? i : e.banner, this.bio = s(e.bio, null == t ? void 0 : t.bio), this.pronouns = s(e.pronouns, null == t ? void 0 : t.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (l = null == t ? void 0 : t.themeColors) && void 0 !== l ? l : e.themeColors, this.popoutAnimationParticleType = null !== (r = null == t ? void 0 : t.popoutAnimationParticleType) && void 0 !== r ? r : e.popoutAnimationParticleType, this.profileEffectId = null !== (n = null == t ? void 0 : t.profileEffectId) && void 0 !== n ? n : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = t
                }
            }
        },
        506885: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var l = i("913144"),
                r = i("327037"),
                n = i("462274"),
                u = i("535013"),
                o = i("501768"),
                s = i("42203"),
                a = i("26989"),
                d = i("713135"),
                f = i("386714");
            async function c(e, t) {
                var i, c, h;
                let g, {
                    withMutualGuilds: v = !1,
                    withMutualFriendsCount: m = !1,
                    friendToken: p,
                    preloadUserBanner: P = !0,
                    dispatchWait: E = !1,
                    guildId: _,
                    channelId: F
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("" === e) return;
                (0, o.getOrFetchProfileEffects)(), null != t && (0, n.maybeFetchColors)(t), null != _ && !v && (v = !0), null != _ && (g = null !== (c = null === (i = (0, u.getVisibleConnectionsRole)({
                    guildMember: a.default.getMember(_, e),
                    channel: s.default.getChannel(F)
                })) || void 0 === i ? void 0 : i.id) && void 0 !== c ? c : void 0);
                let C = d.default.getUserProfile(e),
                    b = d.default.getMutualGuilds(e),
                    S = d.default.getMutualFriendsCount(e),
                    U = d.default.isFetchingProfile(e),
                    I = (null == C ? void 0 : C.profileFetchFailed) || !U && (!Array.isArray(b) && v || null == S && m),
                    T = P ? f.default : void 0,
                    y = !1;
                if (null != _) {
                    let t = d.default.getGuildMemberProfile(e, _);
                    y = null == t
                }!(!I && !y && (U || Date.now() - (null !== (h = null == C ? void 0 : C.lastFetched) && void 0 !== h ? h : 0) < 6e4)) && (E ? await l.default.wait(() => (0, r.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: m,
                    friendToken: p,
                    guildId: _,
                    connectionsRoleId: g
                }, T)) : await (0, r.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: m,
                    friendToken: p,
                    guildId: _,
                    connectionsRoleId: g
                }, T))
            }
        },
        386714: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var l = i("845579"),
                r = i("217513");

            function n(e, t) {
                if ("undefined" == typeof Image) return;
                let i = (0, r.getDisplayProfile)(e.user.id, t);
                if (null == i) return;
                let n = l.GifAutoPlay.getSetting(),
                    u = i.getBannerURL({
                        canAnimate: n,
                        size: 480
                    });
                if (null == u) return;
                let o = new Image;
                o.src = u
            }
        },
        217513: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                },
                getDisplayProfile: function() {
                    return d
                }
            }), i("222007");
            var l = i("446674"),
                r = i("697218"),
                n = i("117362"),
                u = i("811907"),
                o = i("713135");

            function s(e, t) {
                return (0, l.useStateFromStores)([r.default, o.default], () => d(e, t, [r.default, o.default]))
            }
            let a = (0, n.cachedFunction)((e, t) => new u.default(e, t));

            function d(e, t) {
                let [i, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.default], n = i.getUser(e), u = l.getUserProfile(e), s = l.getGuildMemberProfile(e, t);
                return null == n || null == u ? null : a(u, s)
            }
        }
    }
]);
//# sourceMappingURL=49191.6a228d8f0e531c3c2cde.js.map