(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49191"], {
        462274: function(e, i, l) {
            "use strict";
            l.r(i), l.d(i, {
                useColorStore: function() {
                    return c
                },
                maybeFetchColors: function() {
                    return f
                },
                default: function() {
                    return _
                },
                useAvatarColors: function() {
                    return p
                }
            }), l("222007");
            var t = l("884691"),
                n = l("656280"),
                r = l.n(n),
                u = l("308503"),
                o = l("446674"),
                d = l("206230"),
                s = l("284679"),
                a = l("103603");
            let c = (0, u.default)(() => ({
                palette: {},
                fetching: {}
            }));
            async function f(e) {
                null == c.getState().palette[e] && await m(e)
            }
            async function m(e) {
                if (!c.getState().fetching[e]) {
                    c.setState(i => ({
                        fetching: {
                            ...i.fetching,
                            [e]: !0
                        }
                    }));
                    try {
                        let i = await (0, a.getPaletteForAvatar)(e),
                            l = (0, s.getComplimentaryPaletteForColor)(i[0]);
                        c.setState(t => ({
                            fetching: {
                                ...t.fetching,
                                [e]: !1
                            },
                            palette: {
                                ...t.palette,
                                [e]: [...i.slice(0, 2), ...l]
                            }
                        }))
                    } catch (i) {
                        c.setState(i => ({
                            fetching: {
                                ...i.fetching,
                                [e]: !1
                            }
                        }))
                    }
                }
            }

            function _(e, i) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    [t] = p(e, i, l);
                return t
            }

            function p(e, i) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = c(i => null == e ? void 0 : i.palette[e]),
                    u = (0, o.useStateFromStores)([d.default], () => l && d.default.desaturateUserColors ? d.default.saturation : 1);
                t.useEffect(() => {
                    null != e && null == n && m(e)
                }, [e, n]);
                let s = t.useMemo(() => null == n ? void 0 : n.map(e => {
                    let [i, l, t] = e, {
                        h: n,
                        s: o,
                        l: d
                    } = r({
                        r: i,
                        g: l,
                        b: t
                    }).toHsl();
                    return r({
                        h: n,
                        s: o * u,
                        l: d
                    }).toHexString()
                }), [n, u]);
                return null != s ? s : [i, i]
            }
        },
        811907: function(e, i, l) {
            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return t
                }
            }), l("222007");
            var t, n = l("906932"),
                r = l("315102"),
                u = l("719923"),
                o = l("646718");

            function d(e, i) {
                return null == i || "" === i ? e : i
            }
            t = class {
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
                    var e, i;
                    return null !== (i = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== i ? i : this.accentColor
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
                    var e, i;
                    return (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) != null || (null === (i = this.themeColors) || void 0 === i ? void 0 : i[1]) != null
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
                    var e, i;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) != null && (null === (i = this._guildMemberProfile) || void 0 === i ? void 0 : i.bio) !== ""
                }
                isUsingGuildMemberPronouns() {
                    var e, i;
                    return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) != null && (null === (i = this._guildMemberProfile) || void 0 === i ? void 0 : i.pronouns) !== ""
                }
                getBannerURL(e) {
                    let {
                        canAnimate: i,
                        size: l
                    } = e;
                    return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, r.getGuildMemberBannerURL)({
                        id: this.userId,
                        guildId: this.guildId,
                        banner: this.banner,
                        canAnimate: i,
                        size: l
                    }) : (0, r.getUserBannerURL)({
                        id: this.userId,
                        banner: this.banner,
                        canAnimate: i,
                        size: l
                    })
                }
                getPreviewBanner(e, i) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                    return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, r.getUserBannerURL)({
                        id: this.userId,
                        banner: this._userProfile.banner,
                        canAnimate: i,
                        size: l
                    }) : null : this.getBannerURL({
                        canAnimate: i,
                        size: 480
                    })
                }
                getPreviewBio(e) {
                    var i;
                    return (0, n.getProfilePreviewField)(e, null === (i = this._guildMemberProfile) || void 0 === i ? void 0 : i.bio, this._userProfile.bio, null != this.guildId)
                }
                getPreviewThemeColors(e) {
                    return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors
                }
                getBadges() {
                    var e, i, l;
                    return [...null !== (i = this._userProfile.badges) && void 0 !== i ? i : [], ...null !== (l = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== l ? l : []]
                }
                getLegacyUsername() {
                    return this._userProfile.legacyUsername
                }
                constructor(e, i) {
                    var l, t, n, r;
                    this.userId = e.userId, this.guildId = null == i ? void 0 : i.guildId, this.banner = null !== (l = null == i ? void 0 : i.banner) && void 0 !== l ? l : e.banner, this.bio = d(e.bio, null == i ? void 0 : i.bio), this.pronouns = d(e.pronouns, null == i ? void 0 : i.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (t = null == i ? void 0 : i.themeColors) && void 0 !== t ? t : e.themeColors, this.popoutAnimationParticleType = null !== (n = null == i ? void 0 : i.popoutAnimationParticleType) && void 0 !== n ? n : e.popoutAnimationParticleType, this.profileEffectId = null !== (r = null == i ? void 0 : i.profileEffectId) && void 0 !== r ? r : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = i
                }
            }
        },
        713135: function(e, i, l) {
            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return H
                }
            }), l("222007"), l("702976");
            var t = l("917351"),
                n = l.n(t),
                r = l("376556"),
                u = l("915639"),
                o = l("766274"),
                d = l("271938"),
                s = l("305961"),
                a = l("824563"),
                c = l("455079"),
                f = l("677099");
            let m = new Set,
                _ = new Set,
                p = {},
                g = {},
                h = {},
                v = {},
                b = {},
                P = !1,
                E = !1;

            function S() {
                m.clear(), _.clear(), p = {}, g = {}, h = {}, v = {}, b = {}, P = !1
            }

            function I(e) {
                let {
                    userId: i
                } = e;
                _.add(i)
            }

            function U(e) {
                let {
                    userId: i
                } = e;
                _.delete(i)
            }

            function C(e) {
                _.delete(e.userId), h[e.userId] = n(e.mutualFriends).map(e => ({
                    key: e.id,
                    user: new o.default(e),
                    status: a.default.getStatus(e.id)
                })).sortBy(e => {
                    let {
                        user: i
                    } = e;
                    return i.username.toLowerCase()
                }).value(), v[e.userId] = e.mutualFriends.length
            }

            function T() {
                if (0 === Object.keys(b).length) return !1;
                b = {}
            }

            function F(e) {
                if (null == b[e.user.id]) return !1;
                delete b[e.user.id]
            }

            function y(e) {
                var i, l, t, n, u, o, d, a, c, _, h, P, E, S, I, U, C;
                if (m.delete(e.user.id), null != e.mutual_guilds) {
                    let i = {};
                    e.mutual_guilds.forEach(e => {
                        let {
                            id: l,
                            nick: t
                        } = e, n = s.default.getGuild(l);
                        null != n && (i[l] = {
                            guild: n,
                            nick: t
                        })
                    }), b[e.user.id] = f.default.getFlattenedGuildIds().filter(e => null != i[e]).map(e => ({
                        guild: i[e].guild,
                        nick: i[e].nick
                    }))
                }
                if (null != e.mutual_friends_count) {
                    let i = e.mutual_friends_count;
                    v[e.user.id] = i
                }
                let T = null !== (c = e.premium_since) && void 0 !== c ? c : null,
                    F = e.application;
                if (p[e.user.id] = {
                        userId: e.user.id,
                        banner: null === (i = e.user_profile) || void 0 === i ? void 0 : i.banner,
                        accentColor: null === (l = e.user_profile) || void 0 === l ? void 0 : l.accent_color,
                        themeColors: null === (t = e.user_profile) || void 0 === t ? void 0 : t.theme_colors,
                        popoutAnimationParticleType: null === (n = e.user_profile) || void 0 === n ? void 0 : n.popout_animation_particle_type,
                        bio: null !== (_ = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== _ ? _ : "",
                        profileEffectId: null === (d = e.user_profile) || void 0 === d ? void 0 : null === (o = d.profile_effect) || void 0 === o ? void 0 : o.id,
                        pronouns: null !== (h = null === (a = e.user_profile) || void 0 === a ? void 0 : a.pronouns) && void 0 !== h ? h : "",
                        connectedAccounts: null !== (P = e.connected_accounts.filter(e => r.default.isSupported(e.type))) && void 0 !== P ? P : [],
                        applicationRoleConnections: null !== (E = e.application_role_connections) && void 0 !== E ? E : [],
                        premiumSince: null != T ? new Date(T) : null,
                        premiumType: e.premium_type,
                        premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                        lastFetched: Date.now(),
                        legacyUsername: e.legacy_username,
                        profileFetchFailed: !1,
                        application: null != F ? {
                            id: F.id,
                            primarySkuId: F.primary_sku_id,
                            customInstallUrl: F.custom_install_url,
                            installParams: F.install_params,
                            flags: F.flags,
                            popularApplicationCommandIds: F.popular_application_command_ids
                        } : null,
                        badges: e.badges
                    }, null != e.guild_member_profile) {
                    let i = {
                        userId: e.user.id,
                        guildId: e.guild_member_profile.guild_id,
                        banner: e.guild_member_profile.banner,
                        accentColor: e.guild_member_profile.accent_color,
                        themeColors: null === (S = e.guild_member_profile) || void 0 === S ? void 0 : S.theme_colors,
                        popoutAnimationParticleType: null === (I = e.guild_member_profile) || void 0 === I ? void 0 : I.popout_animation_particle_type,
                        profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (U = C.profile_effect) || void 0 === U ? void 0 : U.id,
                        bio: e.guild_member_profile.bio,
                        pronouns: e.guild_member_profile.pronouns,
                        badges: e.guild_badges
                    };
                    null != g[e.user.id] ? g[e.user.id][e.guild_member_profile.guild_id] = i : g[e.user.id] = {
                        [e.guild_member_profile.guild_id]: i
                    }
                }
            }

            function A(e) {
                let {
                    userId: i
                } = e;
                m.add(i)
            }

            function R(e) {
                var i;
                let {
                    userId: l
                } = e;
                p[l] = null !== (i = p[l]) && void 0 !== i ? i : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: l,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                }, m.delete(l)
            }

            function M(e) {
                P = !0
            }

            function L(e) {
                P = !1, null != e.guild_id ? ! function(e) {
                    let {
                        userId: i,
                        guild_id: l,
                        accent_color: t,
                        banner: n,
                        bio: r,
                        pronouns: u,
                        popout_animation_particle_type: o,
                        theme_colors: d,
                        profileEffectId: s
                    } = e;
                    if (null == l || null == g[i]) return !1;
                    let a = g[i][l];
                    if (null == a) return !1;
                    g[i][l] = {
                        ...a,
                        accentColor: t,
                        banner: n,
                        bio: r,
                        pronouns: u,
                        popoutAnimationParticleType: o,
                        themeColors: d,
                        profileEffectId: s
                    }
                }(e) : ! function(e) {
                    let {
                        userId: i,
                        accent_color: l,
                        banner: t,
                        bio: n,
                        pronouns: r,
                        popout_animation_particle_type: u,
                        theme_colors: o,
                        profileEffectId: d
                    } = e, s = p[i];
                    if (null == s) return !1;
                    p[i] = {
                        ...s,
                        accentColor: l,
                        banner: t,
                        bio: n,
                        pronouns: r,
                        popoutAnimationParticleType: u,
                        themeColors: o,
                        profileEffectId: d
                    }
                }(e)
            }

            function D(e) {
                P = !1
            }

            function G(e) {
                E = !0
            }

            function w(e) {
                let {
                    user: i
                } = e;
                if (m.has(i.id) || null == p[i.id]) return !1;
                p[i.id].lastFetched = 0
            }

            function O() {
                m.clear(), p = {}, g = {}
            }
            class B extends c.default {
                isFetchingProfile(e) {
                    return m.has(e)
                }
                isFetchingFriends(e) {
                    return _.has(e)
                }
                get isSubmitting() {
                    return P
                }
                getUserProfile(e) {
                    return p[e]
                }
                getGuildMemberProfile(e, i) {
                    var l;
                    return null == i ? null : null === (l = g[e]) || void 0 === l ? void 0 : l[i]
                }
                getMutualFriends(e) {
                    return h[e]
                }
                getMutualFriendsCount(e) {
                    return v[e]
                }
                getMutualGuilds(e) {
                    return b[e]
                }
                getIsAccessibilityTooltipViewed() {
                    return E
                }
                takeSnapshot() {
                    let e = d.default.getId();
                    return {
                        version: B.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: e,
                            profile: p[e]
                        }]
                    }
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
                        null != e && e.forEach(e => {
                            let {
                                userId: i,
                                profile: l
                            } = e;
                            p[i] = l
                        })
                    }, this.registerActionHandlers({
                        CACHE_LOADED_LAZY: this.loadCache,
                        USER_PROFILE_FETCH_START: A,
                        USER_PROFILE_FETCH_FAILURE: R,
                        USER_PROFILE_FETCH_SUCCESS: y,
                        USER_PROFILE_UPDATE_START: M,
                        USER_PROFILE_UPDATE_SUCCESS: L,
                        USER_PROFILE_UPDATE_FAILURE: D,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: G,
                        MUTUAL_FRIENDS_FETCH_START: I,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: C,
                        MUTUAL_FRIENDS_FETCH_FAILURE: U,
                        GUILD_JOIN: T,
                        GUILD_DELETE: T,
                        GUILD_MEMBER_ADD: F,
                        GUILD_MEMBER_REMOVE: F,
                        GUILD_MEMBER_UPDATE: w,
                        USER_UPDATE: w,
                        LOGOUT: S
                    }), this.waitFor(f.default), this.syncWith([u.default], O)
                }
            }
            B.displayName = "UserProfileStore", B.LATEST_SNAPSHOT_VERSION = 1;
            var H = new B
        },
        506885: function(e, i, l) {
            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return c
                }
            });
            var t = l("913144"),
                n = l("327037"),
                r = l("462274"),
                u = l("535013"),
                o = l("42203"),
                d = l("26989"),
                s = l("713135"),
                a = l("386714");
            async function c(e, i) {
                var l, c, f;
                let m, {
                    withMutualGuilds: _ = !1,
                    withMutualFriendsCount: p = !1,
                    friendToken: g,
                    preloadUserBanner: h = !0,
                    dispatchWait: v = !1,
                    guildId: b,
                    channelId: P
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("" === e) return;
                null != i && (0, r.maybeFetchColors)(i), null != b && !_ && (_ = !0), null != b && (m = null !== (c = null === (l = (0, u.getVisibleConnectionsRole)({
                    guildMember: d.default.getMember(b, e),
                    channel: o.default.getChannel(P)
                })) || void 0 === l ? void 0 : l.id) && void 0 !== c ? c : void 0);
                let E = s.default.getUserProfile(e),
                    S = s.default.getMutualGuilds(e),
                    I = s.default.getMutualFriendsCount(e),
                    U = s.default.isFetchingProfile(e),
                    C = (null == E ? void 0 : E.profileFetchFailed) || !U && (!Array.isArray(S) && _ || null == I && p),
                    T = h ? a.default : void 0,
                    F = !1;
                if (null != b) {
                    let i = s.default.getGuildMemberProfile(e, b);
                    F = null == i
                }!(!C && !F && (U || Date.now() - (null !== (f = null == E ? void 0 : E.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (v ? await t.default.wait(() => (0, n.fetchProfile)(e, {
                    withMutualGuilds: _,
                    withMutualFriendsCount: p,
                    friendToken: g,
                    guildId: b,
                    connectionsRoleId: m
                }, T)) : await (0, n.fetchProfile)(e, {
                    withMutualGuilds: _,
                    withMutualFriendsCount: p,
                    friendToken: g,
                    guildId: b,
                    connectionsRoleId: m
                }, T))
            }
        },
        386714: function(e, i, l) {
            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return r
                }
            });
            var t = l("845579"),
                n = l("217513");

            function r(e, i) {
                if ("undefined" == typeof Image) return;
                let l = (0, n.getDisplayProfile)(e.user.id, i);
                if (null == l) return;
                let r = t.GifAutoPlay.getSetting(),
                    u = l.getBannerURL({
                        canAnimate: r,
                        size: 480
                    });
                if (null == u) return;
                let o = new Image;
                o.src = u
            }
        },
        217513: function(e, i, l) {
            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return d
                },
                getDisplayProfile: function() {
                    return a
                }
            }), l("222007");
            var t = l("446674"),
                n = l("697218"),
                r = l("117362"),
                u = l("811907"),
                o = l("713135");

            function d(e, i) {
                return (0, t.useStateFromStores)([n.default, o.default], () => a(e, i, [n.default, o.default]))
            }
            let s = (0, r.cachedFunction)((e, i) => new u.default(e, i));

            function a(e, i) {
                let [l, t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [n.default, o.default], r = l.getUser(e), u = t.getUserProfile(e), d = t.getGuildMemberProfile(e, i);
                return null == r || null == u ? null : s(u, d)
            }
        }
    }
]);
//# sourceMappingURL=49191.5b151c54082714d18094.js.map