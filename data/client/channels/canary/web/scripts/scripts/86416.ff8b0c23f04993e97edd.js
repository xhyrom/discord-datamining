(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86416"], {
        666020: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeToMemberUpdates: function() {
                    return o
                },
                unsubscribeFromMemberUpdates: function() {
                    return s
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return d
                }
            }), i("424973");
            var n = i("913144"),
                r = i("696605");

            function l(e, t) {
                n.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t) {
                n.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e) {
                n.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
                    guildId: e
                })
            }

            function s(e) {
                n.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
                    guildId: e
                })
            }

            function a(e, t, i) {
                n.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: i
                })
            }

            function d(e) {
                let {
                    guildId: t,
                    channelId: i,
                    y: n,
                    height: l,
                    rowHeight: u
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let f = o(.5 * l),
                    c = o(n, -f),
                    h = o(n + l, f);
                for (c > 0 && (c = Math.max(d(0), c)), c = Math.floor(c / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; c <= h;) c = d(c);
                a(t, i, s)
            }
        },
        750560: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), i("37983");
            var n = i("884691"),
                r = i("917351"),
                l = i.n(r);
            i("233736");
            var u = i("666020");

            function o(e) {
                n.useEffect(() => (l.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
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
                    return m
                },
                useAvatarColors: function() {
                    return g
                }
            }), i("222007");
            var n = i("884691"),
                r = i("656280"),
                l = i.n(r),
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
                        f.setState(n => ({
                            fetching: {
                                ...n.fetching,
                                [e]: !1
                            },
                            palette: {
                                ...n.palette,
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

            function m(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    [n] = g(e, t, i);
                return n
            }

            function g(e, t) {
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = f(t => null == e ? void 0 : t.palette[e]),
                    u = (0, o.useStateFromStores)([s.default], () => i && s.default.desaturateUserColors ? s.default.saturation : 1);
                n.useEffect(() => {
                    null != e && null == r && h(e)
                }, [e, r]);
                let a = n.useMemo(() => null == r ? void 0 : r.map(e => {
                    let [t, i, n] = e, {
                        h: r,
                        s: o,
                        l: s
                    } = l({
                        r: t,
                        g: i,
                        b: n
                    }).toHsl();
                    return l({
                        h: r,
                        s: o * u,
                        l: s
                    }).toHexString()
                }), [r, u]);
                return null != a ? a : [t, t]
            }
        },
        811907: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            }), i("222007");
            var n, r = i("906932"),
                l = i("315102"),
                u = i("719923"),
                o = i("646718");

            function s(e, t) {
                return null == t || "" === t ? e : t
            }
            n = class {
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
                    return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, l.getGuildMemberBannerURL)({
                        id: this.userId,
                        guildId: this.guildId,
                        banner: this.banner,
                        canAnimate: t,
                        size: i
                    }) : (0, l.getUserBannerURL)({
                        id: this.userId,
                        banner: this.banner,
                        canAnimate: t,
                        size: i
                    })
                }
                getPreviewBanner(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                    return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, l.getUserBannerURL)({
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
                    var i, n, r, l;
                    this.userId = e.userId, this.guildId = null == t ? void 0 : t.guildId, this.banner = null !== (i = null == t ? void 0 : t.banner) && void 0 !== i ? i : e.banner, this.bio = s(e.bio, null == t ? void 0 : t.bio), this.pronouns = s(e.pronouns, null == t ? void 0 : t.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (n = null == t ? void 0 : t.themeColors) && void 0 !== n ? n : e.themeColors, this.popoutAnimationParticleType = null !== (r = null == t ? void 0 : t.popoutAnimationParticleType) && void 0 !== r ? r : e.popoutAnimationParticleType, this.profileEffectId = null !== (l = null == t ? void 0 : t.profileEffectId) && void 0 !== l ? l : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = t
                }
            }
        },
        506885: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("913144"),
                r = i("327037"),
                l = i("462274"),
                u = i("535013"),
                o = i("42203"),
                s = i("26989"),
                a = i("713135"),
                d = i("386714");
            async function f(e, t) {
                var i, f, c;
                let h, {
                    withMutualGuilds: m = !1,
                    withMutualFriendsCount: g = !1,
                    friendToken: v,
                    preloadUserBanner: b = !0,
                    dispatchWait: p = !1,
                    guildId: P,
                    channelId: M
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("" === e) return;
                null != t && (0, l.maybeFetchColors)(t), null != P && !m && (m = !0), null != P && (h = null !== (f = null === (i = (0, u.getVisibleConnectionsRole)({
                    guildMember: s.default.getMember(P, e),
                    channel: o.default.getChannel(M)
                })) || void 0 === i ? void 0 : i.id) && void 0 !== f ? f : void 0);
                let _ = a.default.getUserProfile(e),
                    U = a.default.getMutualGuilds(e),
                    I = a.default.getMutualFriendsCount(e),
                    C = a.default.isFetchingProfile(e),
                    S = (null == _ ? void 0 : _.profileFetchFailed) || !C && (!Array.isArray(U) && m || null == I && g),
                    y = b ? d.default : void 0,
                    E = !1;
                if (null != P) {
                    let t = a.default.getGuildMemberProfile(e, P);
                    E = null == t
                }!(!S && !E && (C || Date.now() - (null !== (c = null == _ ? void 0 : _.lastFetched) && void 0 !== c ? c : 0) < 6e4)) && (p ? await n.default.wait(() => (0, r.fetchProfile)(e, {
                    withMutualGuilds: m,
                    withMutualFriendsCount: g,
                    friendToken: v,
                    guildId: P,
                    connectionsRoleId: h
                }, y)) : await (0, r.fetchProfile)(e, {
                    withMutualGuilds: m,
                    withMutualFriendsCount: g,
                    friendToken: v,
                    guildId: P,
                    connectionsRoleId: h
                }, y))
            }
        },
        386714: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("845579"),
                r = i("217513");

            function l(e, t) {
                if ("undefined" == typeof Image) return;
                let i = (0, r.getDisplayProfile)(e.user.id, t);
                if (null == i) return;
                let l = n.GifAutoPlay.getSetting(),
                    u = i.getBannerURL({
                        canAnimate: l,
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
            var n = i("446674"),
                r = i("697218"),
                l = i("117362"),
                u = i("811907"),
                o = i("713135");

            function s(e, t) {
                return (0, n.useStateFromStores)([r.default, o.default], () => d(e, t, [r.default, o.default]))
            }
            let a = (0, l.cachedFunction)((e, t) => new u.default(e, t));

            function d(e, t) {
                let [i, n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.default], l = i.getUser(e), u = n.getUserProfile(e), s = n.getGuildMemberProfile(e, t);
                return null == l || null == u ? null : a(u, s)
            }
        }
    }
]);
//# sourceMappingURL=86416.ff8b0c23f04993e97edd.js.map