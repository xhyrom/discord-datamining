(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28727"], {
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return s
                },
                disableAccount: function() {
                    return f
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return U
                },
                requestHarvest: function() {
                    return p
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingGlobalNameName: function() {
                    return D
                },
                setPendingAvatarDecoration: function() {
                    return G
                },
                setPendingProfileEffectId: function() {
                    return C
                },
                clearErrors: function() {
                    return O
                },
                resetPendingAccountChanges: function() {
                    return P
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return v
                },
                setDisableSubmit: function() {
                    return L
                }
            });
            var i = n("872717"),
                r = n("95410"),
                u = n("819855"),
                o = n("913144"),
                _ = n("393414"),
                l = n("599110"),
                E = n("315102"),
                T = n("730622"),
                d = n("437822"),
                a = n("49111"),
                S = n("191349"),
                c = n("782340");

            function I() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function s() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function f(e, t) {
                let n = t ? c.default.Messages.DELETE_ACCOUNT : c.default.Messages.DISABLE_ACCOUNT,
                    r = t ? a.Endpoints.DELETE_ACCOUNT : a.Endpoints.DISABLE_ACCOUNT;
                return (0, T.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    d.default.logoutInternal(), (0, _.transitionTo)(a.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(e) {
                let t = await i.default.patch({
                        url: a.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, o.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return o.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: u,
                    password: _,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: s,
                    globalName: f
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, T.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: u,
                        password: _,
                        avatar: d,
                        discriminator: n,
                        global_name: f,
                        new_password: s,
                        ...e
                    };
                    null === I && (o.avatar_decoration_id = null), null != I && (o.avatar_decoration_id = I.id, o.avatar_decoration_sku_id = I.skuId);
                    let l = r.default.get(a.DEVICE_TOKEN),
                        E = (0, S.getDevicePushProvider)();
                    null != E && null != l && (o.push_provider = E, o.push_token = l);
                    let T = r.default.get(a.DEVICE_VOIP_TOKEN);
                    return null != S.DEVICE_PUSH_VOIP_PROVIDER && null != T && (o.push_voip_provider = S.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = T), N(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: c.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return l.default.track(a.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, E.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function U() {
                return i.default.get({
                    url: a.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function p() {
                return i.default.post({
                    url: a.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function D(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function G(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function C(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function O() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function P() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function v() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function L(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return _
                },
                setCurrentGuild: function() {
                    return l
                },
                initGuildIdentitySettings: function() {
                    return E
                },
                closeGuildIdentitySettings: function() {
                    return T
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return a
                },
                setPendingAvatarDecoration: function() {
                    return S
                },
                setPendingProfileEffectId: function() {
                    return c
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return s
                },
                setPendingPronouns: function() {
                    return f
                },
                setPendingNickname: function() {
                    return N
                },
                setPendingThemeColors: function() {
                    return A
                },
                resetPendingMemberChanges: function() {
                    return U
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return R
                },
                clearErrors: function() {
                    return D
                },
                setDisableSubmit: function() {
                    return G
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                u = n("54239"),
                o = n("49111");
            async function _(e, t) {
                let {
                    nick: n,
                    avatar: u,
                    avatarDecoration: _
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                let l = {
                    nick: n,
                    avatar: u,
                    avatar_decoration_id: null === _ ? null : null == _ ? void 0 : _.id,
                    avatar_decoration_sku_id: null === _ ? null : null == _ ? void 0 : _.skuId
                };
                try {
                    let t = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
                        body: l,
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function l(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function E(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function a(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function c(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function s(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function U() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function R() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function D() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function G(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, u, o, _, l, E, T, d, a, S;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var c = n("446674"),
                I = n("913144"),
                s = n("49111");
            let f = s.FormStates.CLOSED,
                N = {},
                A = !1;

            function U() {
                f = s.FormStates.CLOSED, N = {}, d = null, a = void 0, S = []
            }

            function p() {
                R(), D(), N = {}, f = s.FormStates.OPEN
            }

            function R() {
                i = void 0, E = void 0, r = void 0
            }

            function D() {
                o = void 0, _ = void 0, l = void 0, T = void 0, u = void 0
            }
            class G extends c.default.Store {
                getFormState() {
                    return f
                }
                getErrors() {
                    return N
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== o || void 0 !== _ || void 0 !== l || void 0 !== E || void 0 !== T
                }
                getPendingAvatar() {
                    return i
                }
                getPendingAvatarDecoration() {
                    return r
                }
                getPendingProfileEffectId() {
                    return u
                }
                getPendingBanner() {
                    return o
                }
                getPendingBio() {
                    return _
                }
                getPendingNickname() {
                    return E
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return E
                }
                getPendingThemeColors() {
                    return T
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingAvatarDecoration: r,
                        pendingProfileEffectId: u,
                        pendingBanner: o,
                        pendingBio: _,
                        pendingPronouns: l,
                        pendingNickname: E,
                        pendingThemeColors: T
                    }
                }
                getGuild() {
                    return d
                }
                getSource() {
                    return a
                }
                getAnalyticsLocations() {
                    return S
                }
                getIsDisableSubmit() {
                    return A
                }
            }
            G.displayName = "GuildIdentitySettingsStore";
            var C = new G(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    d = e.guild, f = s.FormStates.OPEN, N = {}, a = e.source, S = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: U,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), U()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    d = e.guild, N = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    f = s.FormStates.SUBMITTING, N = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (f !== s.FormStates.SUBMITTING) return !1;
                    f = s.FormStates.OPEN, N = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    f = s.FormStates.OPEN, N = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectId: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    _ = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    E = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    T = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: R,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: D,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    N = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    A = t
                }
            })
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return a
                },
                useGuildMemberAndUserPendingAvatarDecoration: function() {
                    return S
                },
                useGlobalOrGuildIdentityProfileEffect: function() {
                    return c
                },
                useGlobalOrGuildIdentityPendingProfileEffect: function() {
                    return I
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return f
                },
                setNewPendingAvatarDecoration: function() {
                    return N
                },
                setNewPendingProfileEffectId: function() {
                    return A
                },
                getProfilePreviewField: function() {
                    return U
                },
                showRemoveAvatar: function() {
                    return p
                },
                showRemoveBanner: function() {
                    return R
                }
            }), n("424973");
            var i = n("884691"),
                r = n("446674"),
                u = n("152584"),
                o = n("929423"),
                _ = n("424562"),
                l = n("783142"),
                E = n("713135"),
                T = n("26989"),
                d = n("790618");

            function a(e) {
                return i.useMemo(() => {
                    let t = T.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let u = t[r],
                            o = null === (i = u[e]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function S(e, t) {
                let n = (0, r.useStateFromStores)([T.default], () => void 0 === t ? null : T.default.getMember(t.id, e.id)),
                    {
                        pendingUserAvatarDecoration: i,
                        userErrors: u
                    } = (0, r.useStateFromStoresObject)([d.default], () => ({
                        pendingUserAvatarDecoration: d.default.getPendingAvatarDecoration(),
                        userErrors: d.default.getErrors().avatarDecoration
                    })),
                    {
                        pendingGuildAvatarDecoration: o,
                        guildErrors: l
                    } = (0, r.useStateFromStoresObject)([_.default], () => ({
                        pendingGuildAvatarDecoration: _.default.getPendingAvatarDecoration(),
                        guildErrors: _.default.getErrors().avatarDecoration
                    }));
                return {
                    userAvatarDecoration: e.avatarDecoration,
                    guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
                    pendingAvatarDecoration: null != t ? o : i,
                    pendingErrors: null != t ? l : u
                }
            }

            function c(e, t) {
                return (0, r.useStateFromStores)([E.default], () => {
                    var n, i;
                    return null == t ? null === (n = E.default.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId : null === (i = E.default.getGuildMemberProfile(e.id, t.id)) || void 0 === i ? void 0 : i.profileEffectId
                }, [e, t])
            }

            function I(e) {
                return (0, r.useStateFromStoresObject)([d.default, _.default], () => null == e ? {
                    pendingProfileEffectId: d.default.getPendingProfileEffectId(),
                    errors: d.default.getErrors().profileEffect
                } : {
                    pendingProfileEffectId: _.default.getPendingProfileEffectId(),
                    errors: _.default.getErrors().profileEffect
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function f(e, t) {
                (0, u.setPendingAvatar)(e === t ? void 0 : e)
            }

            function N(e, t) {
                (null != e ? o.setPendingAvatarDecoration : u.setPendingAvatarDecoration)(t)
            }

            function A(e, t, n) {
                if (e === t) {
                    null == n ? (0, u.setPendingProfileEffectId)(void 0) : (0, o.setPendingProfileEffectId)(void 0);
                    return
                }
                null == n ? (0, u.setPendingProfileEffectId)(e) : (0, o.setPendingProfileEffectId)(e)
            }

            function U(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function p(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function R(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return S
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return c
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return s
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return U
                },
                setTryItOutAvatar: function() {
                    return p
                },
                setTryItOutAvatarDecoration: function() {
                    return R
                },
                setTryItOutBanner: function() {
                    return D
                },
                setTryItOutThemeColors: function() {
                    return G
                }
            });
            var i = n("872717"),
                r = n("913144"),
                u = n("448993"),
                o = n("884351"),
                _ = n("845579"),
                l = n("697218"),
                E = n("599110"),
                T = n("49111"),
                d = n("646718");

            function a(e) {
                E.default.track(T.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function S(e, t) {
                var n, E;
                let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let a = _.UseLegacyChatInput.getSetting();
                null != e.bio && a && (e.bio = o.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != t ? T.Endpoints.GUILD_PROFILE(t, T.ME) : T.Endpoints.USER_PROFILE(T.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (E = n.body.profile_effect) || void 0 === E ? void 0 : E.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new u.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new u.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function c() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function s(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function U(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), a(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), a(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function D(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), a(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function G(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), a(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        713135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007"), n("702976");
            var i = n("917351"),
                r = n.n(i),
                u = n("376556"),
                o = n("915639"),
                _ = n("766274"),
                l = n("271938"),
                E = n("305961"),
                T = n("824563"),
                d = n("455079"),
                a = n("677099");
            let S = new Set,
                c = new Set,
                I = {},
                s = {},
                f = {},
                N = {},
                A = {},
                U = !1,
                p = !1;

            function R() {
                S.clear(), c.clear(), I = {}, s = {}, f = {}, N = {}, A = {}, U = !1
            }

            function D(e) {
                let {
                    userId: t
                } = e;
                c.add(t)
            }

            function G(e) {
                let {
                    userId: t
                } = e;
                c.delete(t)
            }

            function C(e) {
                c.delete(e.userId), f[e.userId] = r(e.mutualFriends).map(e => ({
                    key: e.id,
                    user: new _.default(e),
                    status: T.default.getStatus(e.id)
                })).sortBy(e => {
                    let {
                        user: t
                    } = e;
                    return t.username.toLowerCase()
                }).value(), N[e.userId] = e.mutualFriends.length
            }

            function O() {
                if (0 === Object.keys(A).length) return !1;
                A = {}
            }

            function P(e) {
                if (null == A[e.user.id]) return !1;
                delete A[e.user.id]
            }

            function g(e) {
                var t, n, i, r, o, _, l, T, d, c, f, U, p, R, D, G, C;
                if (S.delete(e.user.id), null != e.mutual_guilds) {
                    let t = {};
                    e.mutual_guilds.forEach(e => {
                        let {
                            id: n,
                            nick: i
                        } = e, r = E.default.getGuild(n);
                        null != r && (t[n] = {
                            guild: r,
                            nick: i
                        })
                    }), A[e.user.id] = a.default.getFlattenedGuildIds().filter(e => null != t[e]).map(e => ({
                        guild: t[e].guild,
                        nick: t[e].nick
                    }))
                }
                if (null != e.mutual_friends_count) {
                    let t = e.mutual_friends_count;
                    N[e.user.id] = t
                }
                let O = null !== (d = e.premium_since) && void 0 !== d ? d : null,
                    P = e.application;
                if (I[e.user.id] = {
                        userId: e.user.id,
                        banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
                        accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
                        themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
                        popoutAnimationParticleType: null === (r = e.user_profile) || void 0 === r ? void 0 : r.popout_animation_particle_type,
                        bio: null !== (c = null === (o = e.user_profile) || void 0 === o ? void 0 : o.bio) && void 0 !== c ? c : "",
                        profileEffectId: null === (l = e.user_profile) || void 0 === l ? void 0 : null === (_ = l.profile_effect) || void 0 === _ ? void 0 : _.id,
                        pronouns: null !== (f = null === (T = e.user_profile) || void 0 === T ? void 0 : T.pronouns) && void 0 !== f ? f : "",
                        connectedAccounts: null !== (U = e.connected_accounts.filter(e => u.default.isSupported(e.type))) && void 0 !== U ? U : [],
                        applicationRoleConnections: null !== (p = e.application_role_connections) && void 0 !== p ? p : [],
                        premiumSince: null != O ? new Date(O) : null,
                        premiumType: e.premium_type,
                        premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                        lastFetched: Date.now(),
                        legacyUsername: e.legacy_username,
                        profileFetchFailed: !1,
                        application: null != P ? {
                            id: P.id,
                            primarySkuId: P.primary_sku_id,
                            customInstallUrl: P.custom_install_url,
                            installParams: P.install_params,
                            flags: P.flags,
                            popularApplicationCommandIds: P.popular_application_command_ids
                        } : null,
                        badges: e.badges
                    }, null != e.guild_member_profile) {
                    let t = {
                        userId: e.user.id,
                        guildId: e.guild_member_profile.guild_id,
                        banner: e.guild_member_profile.banner,
                        accentColor: e.guild_member_profile.accent_color,
                        themeColors: null === (R = e.guild_member_profile) || void 0 === R ? void 0 : R.theme_colors,
                        popoutAnimationParticleType: null === (D = e.guild_member_profile) || void 0 === D ? void 0 : D.popout_animation_particle_type,
                        profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (G = C.profile_effect) || void 0 === G ? void 0 : G.id,
                        bio: e.guild_member_profile.bio,
                        pronouns: e.guild_member_profile.pronouns,
                        badges: e.guild_badges
                    };
                    null != s[e.user.id] ? s[e.user.id][e.guild_member_profile.guild_id] = t : s[e.user.id] = {
                        [e.guild_member_profile.guild_id]: t
                    }
                }
            }

            function v(e) {
                let {
                    userId: t
                } = e;
                S.add(t)
            }

            function L(e) {
                var t;
                let {
                    userId: n
                } = e;
                I[n] = null !== (t = I[n]) && void 0 !== t ? t : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: n,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                }, S.delete(n)
            }

            function m(e) {
                U = !0
            }

            function h(e) {
                U = !1, null != e.guild_id ? ! function(e) {
                    let {
                        userId: t,
                        guild_id: n,
                        accent_color: i,
                        banner: r,
                        bio: u,
                        pronouns: o,
                        popout_animation_particle_type: _,
                        theme_colors: l,
                        profileEffectId: E
                    } = e;
                    if (null == n || null == s[t]) return !1;
                    let T = s[t][n];
                    if (null == T) return !1;
                    s[t][n] = {
                        ...T,
                        accentColor: i,
                        banner: r,
                        bio: u,
                        pronouns: o,
                        popoutAnimationParticleType: _,
                        themeColors: l,
                        profileEffectId: E
                    }
                }(e) : ! function(e) {
                    let {
                        userId: t,
                        accent_color: n,
                        banner: i,
                        bio: r,
                        pronouns: u,
                        popout_animation_particle_type: o,
                        theme_colors: _,
                        profileEffectId: l
                    } = e, E = I[t];
                    if (null == E) return !1;
                    I[t] = {
                        ...E,
                        accentColor: n,
                        banner: i,
                        bio: r,
                        pronouns: u,
                        popoutAnimationParticleType: o,
                        themeColors: _,
                        profileEffectId: l
                    }
                }(e)
            }

            function y(e) {
                U = !1
            }

            function F(e) {
                p = !0
            }

            function M(e) {
                let {
                    user: t
                } = e;
                if (S.has(t.id) || null == I[t.id]) return !1;
                I[t.id].lastFetched = 0
            }

            function b() {
                S.clear(), I = {}, s = {}
            }
            class B extends d.default {
                isFetchingProfile(e) {
                    return S.has(e)
                }
                isFetchingFriends(e) {
                    return c.has(e)
                }
                get isSubmitting() {
                    return U
                }
                getUserProfile(e) {
                    return I[e]
                }
                getGuildMemberProfile(e, t) {
                    var n;
                    return null == t ? null : null === (n = s[e]) || void 0 === n ? void 0 : n[t]
                }
                getMutualFriends(e) {
                    return f[e]
                }
                getMutualFriendsCount(e) {
                    return N[e]
                }
                getMutualGuilds(e) {
                    return A[e]
                }
                getIsAccessibilityTooltipViewed() {
                    return p
                }
                takeSnapshot() {
                    let e = l.default.getId();
                    return {
                        version: B.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: e,
                            profile: I[e]
                        }]
                    }
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
                        null != e && e.forEach(e => {
                            let {
                                userId: t,
                                profile: n
                            } = e;
                            I[t] = n
                        })
                    }, this.registerActionHandlers({
                        CACHE_LOADED_LAZY: this.loadCache,
                        USER_PROFILE_FETCH_START: v,
                        USER_PROFILE_FETCH_FAILURE: L,
                        USER_PROFILE_FETCH_SUCCESS: g,
                        USER_PROFILE_UPDATE_START: m,
                        USER_PROFILE_UPDATE_SUCCESS: h,
                        USER_PROFILE_UPDATE_FAILURE: y,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: F,
                        MUTUAL_FRIENDS_FETCH_START: D,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: C,
                        MUTUAL_FRIENDS_FETCH_FAILURE: G,
                        GUILD_JOIN: O,
                        GUILD_DELETE: O,
                        GUILD_MEMBER_ADD: P,
                        GUILD_MEMBER_REMOVE: P,
                        GUILD_MEMBER_UPDATE: M,
                        USER_UPDATE: M,
                        LOGOUT: R
                    }), this.waitFor(a.default), this.syncWith([o.default], b)
                }
            }
            B.displayName = "UserProfileStore", B.LATEST_SNAPSHOT_VERSION = 1;
            var Y = new B
        },
        790618: function(e, t, n) {
            "use strict";
            let i, r, u, o, _, l, E, T, d, a, S, c, I, s;
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var f = n("265586"),
                N = n("446674"),
                A = n("913144"),
                U = n("49111");
            let p = U.FormStates.CLOSED,
                R = {},
                D = !1;

            function G() {
                p = U.FormStates.OPEN, R = {}
            }

            function C() {
                p = U.FormStates.CLOSED, R = {}
            }

            function O() {
                P(), g(), R = {}
            }

            function P() {
                i = void 0, r = void 0, u = void 0, o = void 0
            }

            function g() {
                _ = void 0, l = void 0, E = void 0, T = void 0, d = void 0, o = void 0
            }

            function v() {
                S = void 0, c = void 0, I = void 0, s = void 0, a = void 0
            }
            class L extends N.default.Store {
                getFormState() {
                    return p
                }
                getErrors() {
                    return R
                }
                showNotice() {
                    return void 0 !== i || void 0 !== _ || void 0 !== l || void 0 !== E || void 0 !== T || void 0 !== d || void 0 !== u || void 0 !== o || void 0 !== r
                }
                getPendingAvatar() {
                    return i
                }
                getPendingGlobalName() {
                    return r
                }
                getPendingBanner() {
                    return _
                }
                getPendingBio() {
                    return l
                }
                getPendingPronouns() {
                    return E
                }
                getPendingAccentColor() {
                    return T
                }
                getPendingThemeColors() {
                    return d
                }
                getPendingAvatarDecoration() {
                    return u
                }
                getPendingProfileEffectId() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: _,
                        pendingBio: l,
                        pendingPronouns: E,
                        pendingAccentColor: T,
                        pendingThemeColors: d,
                        pendingAvatarDecoration: u,
                        pendingProfileEffectId: o,
                        pendingGlobalName: r
                    }
                }
                getTryItOutThemeColors() {
                    return a
                }
                getTryItOutAvatar() {
                    return S
                }
                getTryItOutAvatarDecoration() {
                    return c
                }
                getTryItOutProfileEffectId() {
                    return I
                }
                getTryItOutBanner() {
                    return s
                }
                getAllTryItOut() {
                    return {
                        tryItOutThemeColors: a,
                        tryItOutAvatar: S,
                        tryItOutAvatarDecoration: c,
                        tryItOutProfileEffectId: I,
                        tryItOutBanner: s
                    }
                }
                getIsDisableSubmit() {
                    return D
                }
            }
            L.displayName = "UserSettingsAccountStore";
            var m = new L(A.default, {
                USER_SETTINGS_ACCOUNT_INIT: G,
                USER_SETTINGS_MODAL_INIT: G,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: G,
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    return t === U.UserSettingsSections.ACCOUNT && G()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: C,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    O(), v(), C()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    p = U.FormStates.SUBMITTING, R = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (p !== U.FormStates.SUBMITTING) return !1;
                    p = U.FormStates.OPEN, R = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t, S = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
                    let {
                        globalName: t
                    } = e;
                    r = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    u = t
                },
                USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
                    let {
                        item: t
                    } = e;
                    (null == t ? void 0 : t.type) === f.CollectiblesItemType.PROFILE_EFFECT ? (c = null, I = null == t ? void 0 : t.id) : (I = null, c = t)
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectId: t
                    } = e;
                    o = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    _ = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    E = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
                    let {
                        color: t
                    } = e;
                    T = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    d = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    S = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    c = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectId: t
                    } = e;
                    I = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    s = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    R = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: P,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
                USER_SETTINGS_RESET_ALL_PENDING: O,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: v,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    u = void 0
                },
                LOGOUT: function() {
                    i = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    D = t
                }
            })
        },
        265586: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                CollectiblesItemType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.NONE = 100] = "NONE", r[r.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", r[r.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);
//# sourceMappingURL=28727.149a8dc7d544974333c3.js.map