(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3935"], {
        702143: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsClose: function() {
                    return s
                },
                accountDetailsInit: function() {
                    return I
                },
                clearErrors: function() {
                    return O
                },
                disableAccount: function() {
                    return f
                },
                getHarvestStatus: function() {
                    return U
                },
                requestHarvest: function() {
                    return p
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return L
                },
                resetPendingAccountChanges: function() {
                    return P
                },
                saveAccountChanges: function() {
                    return A
                },
                saveAccountRequest: function() {
                    return N
                },
                setDisableSubmit: function() {
                    return m
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingAvatarDecoration: function() {
                    return G
                },
                setPendingGlobalNameName: function() {
                    return D
                },
                setPendingProfileEffectId: function() {
                    return C
                }
            });
            var i = n("454836"),
                r = n("986329"),
                u = n("24135"),
                _ = n("312916"),
                o = n("521588"),
                E = n("328470"),
                l = n("204606"),
                T = n("567713"),
                a = n("720872"),
                d = n("467006"),
                S = n("999114"),
                c = n("30175");

            function I() {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function s() {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function f(t, e) {
                let n = e ? c.default.Messages.DELETE_ACCOUNT : c.default.Messages.DISABLE_ACCOUNT,
                    r = e ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
                return (0, T.default)(e => i.default.post({
                    url: r,
                    body: {
                        password: t,
                        ...e
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    a.default.logoutInternal(), (0, o.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(t) {
                let e = await i.default.patch({
                        url: d.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, _.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), t?.password != null && t?.new_password != null && _.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return _.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function A(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: i,
                    emailToken: u,
                    password: o,
                    avatar: a,
                    avatarDecoration: I,
                    newPassword: s,
                    globalName: f
                } = t;
                return _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, T.default)(t => {
                    let _ = {
                        username: e,
                        email: i,
                        email_token: u,
                        password: o,
                        avatar: a,
                        discriminator: n,
                        global_name: f,
                        new_password: s,
                        ...t
                    };
                    null === I && (_.avatar_decoration_id = null), null != I && (_.avatar_decoration_id = I.id, _.avatar_decoration_sku_id = I.skuId);
                    let E = r.default.get(d.DEVICE_TOKEN),
                        l = (0, S.getDevicePushProvider)();
                    null != l && null != E && (_.push_provider = l, _.push_token = E);
                    let T = r.default.get(d.DEVICE_VOIP_TOKEN);
                    return null != S.DEVICE_PUSH_VOIP_PROVIDER && null != T && (_.push_voip_provider = S.DEVICE_PUSH_VOIP_PROVIDER, _.push_voip_token = T), N(_)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: c.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => _.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return E.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, l.isAnimatedIconHash)(e.avatar)
                    }), _.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (_.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function U() {
                return i.default.get({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function p() {
                return i.default.post({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(t) {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function D(t) {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function G(t) {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function C(t) {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function O() {
                _.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function P() {
                _.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                _.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function m(t) {
                _.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        747195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearErrors: function() {
                    return D
                },
                closeGuildIdentitySettings: function() {
                    return T
                },
                initGuildIdentitySettings: function() {
                    return l
                },
                resetAllPending: function() {
                    return R
                },
                resetAndCloseGuildIdentityForm: function() {
                    return a
                },
                resetPendingMemberChanges: function() {
                    return U
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return E
                },
                setDisableSubmit: function() {
                    return G
                },
                setPendingAvatar: function() {
                    return d
                },
                setPendingAvatarDecoration: function() {
                    return S
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return s
                },
                setPendingNickname: function() {
                    return N
                },
                setPendingProfileEffectId: function() {
                    return c
                },
                setPendingPronouns: function() {
                    return f
                },
                setPendingThemeColors: function() {
                    return A
                }
            });
            var i = n("454836"),
                r = n("312916"),
                u = n("939591"),
                _ = n("467006");
            async function o(t, e) {
                let {
                    nick: n,
                    avatar: u,
                    avatarDecoration: o
                } = e;
                if (null == t) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                let E = {
                    nick: n,
                    avatar: u,
                    avatar_decoration_id: null === o ? null : o?.id,
                    avatar_decoration_sku_id: null === o ? null : o?.skuId
                };
                try {
                    let e = await i.default.patch({
                        url: _.Endpoints.SET_GUILD_MEMBER(t),
                        body: E,
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    t?.username != null && (t.nick = t.username, delete t.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function E(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function l(t, e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function a() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function d(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function S(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function c(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function s(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function f(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function N(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function A(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
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

            function G(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        513462: function(t, e, n) {
            "use strict";
            let i, r, u, _, o, E, l, T, a, d, S;
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            var c = n("661223"),
                I = n("312916"),
                s = n("467006");
            let f = s.FormStates.CLOSED,
                N = {},
                A = !1;

            function U() {
                f = s.FormStates.CLOSED, N = {}, a = null, d = void 0, S = []
            }

            function p() {
                R(), D(), N = {}, f = s.FormStates.OPEN
            }

            function R() {
                i = void 0, l = void 0, r = void 0
            }

            function D() {
                _ = void 0, o = void 0, E = void 0, T = void 0, u = void 0
            }
            class G extends c.default.Store {
                static #t = this.displayName = "GuildIdentitySettingsStore";
                getFormState() {
                    return f
                }
                getErrors() {
                    return N
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== _ || void 0 !== o || void 0 !== E || void 0 !== l || void 0 !== T
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
                    return _
                }
                getPendingBio() {
                    return o
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return E
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return T
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingAvatarDecoration: r,
                        pendingProfileEffectId: u,
                        pendingBanner: _,
                        pendingBio: o,
                        pendingPronouns: E,
                        pendingNickname: l,
                        pendingThemeColors: T
                    }
                }
                getGuild() {
                    return a
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return S
                }
                getIsDisableSubmit() {
                    return A
                }
            }
            var C = new G(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    a = t.guild, f = s.FormStates.OPEN, N = {}, d = t.source, S = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: U,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), U()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    a = t.guild, N = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    f = s.FormStates.SUBMITTING, N = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    if (f !== s.FormStates.SUBMITTING) return !1;
                    f = s.FormStates.OPEN, N = t.errors ?? {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    f = s.FormStates.OPEN, N = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectId: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    _ = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    E = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    T = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: R,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: D,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    N = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    A = e
                }
            })
        },
        613352: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getProfilePreviewField: function() {
                    return U
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
                setNewPendingUserBio: function() {
                    return s
                },
                showRemoveAvatar: function() {
                    return p
                },
                showRemoveBanner: function() {
                    return R
                },
                useAvatarsWithGuilds: function() {
                    return d
                },
                useGlobalOrGuildIdentityPendingProfileEffect: function() {
                    return I
                },
                useGlobalOrGuildIdentityProfileEffect: function() {
                    return c
                },
                useGuildMemberAndUserPendingAvatarDecoration: function() {
                    return S
                }
            }), n("653041");
            var i = n("470079"),
                r = n("661223"),
                u = n("702143"),
                _ = n("747195"),
                o = n("513462"),
                E = n("246619"),
                l = n("846774"),
                T = n("361733"),
                a = n("801856");

            function d(t) {
                return i.useMemo(() => {
                    let e = T.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in e) {
                        let r = e[i],
                            u = r[t]?.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(i))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function S(t, e) {
                let n = (0, r.useStateFromStores)([T.default], () => void 0 === e ? null : T.default.getMember(e.id, t.id)),
                    {
                        pendingUserAvatarDecoration: i,
                        userErrors: u
                    } = (0, r.useStateFromStoresObject)([a.default], () => ({
                        pendingUserAvatarDecoration: a.default.getPendingAvatarDecoration(),
                        userErrors: a.default.getErrors().avatarDecoration
                    })),
                    {
                        pendingGuildAvatarDecoration: _,
                        guildErrors: E
                    } = (0, r.useStateFromStoresObject)([o.default], () => ({
                        pendingGuildAvatarDecoration: o.default.getPendingAvatarDecoration(),
                        guildErrors: o.default.getErrors().avatarDecoration
                    }));
                return {
                    userAvatarDecoration: t.avatarDecoration,
                    guildAvatarDecoration: n?.avatarDecoration,
                    pendingAvatarDecoration: null != e ? _ : i,
                    pendingErrors: null != e ? E : u
                }
            }

            function c(t, e) {
                return (0, r.useStateFromStores)([l.default], () => null == e ? l.default.getUserProfile(t.id)?.profileEffectId : l.default.getGuildMemberProfile(t.id, e.id)?.profileEffectId, [t, e])
            }

            function I(t) {
                return (0, r.useStateFromStoresObject)([a.default, o.default], () => null == t ? {
                    pendingProfileEffectId: a.default.getPendingProfileEffectId(),
                    errors: a.default.getErrors().profileEffect
                } : {
                    pendingProfileEffectId: o.default.getPendingProfileEffectId(),
                    errors: o.default.getErrors().profileEffect
                }, [t])
            }

            function s(t, e) {
                (0, E.setPendingBio)(t === e ? void 0 : t)
            }

            function f(t, e) {
                (0, u.setPendingAvatar)(t === e ? void 0 : t)
            }

            function N(t, e) {
                (null != t ? _.setPendingAvatarDecoration : u.setPendingAvatarDecoration)(e)
            }

            function A(t, e, n) {
                if (t === e) {
                    null == n ? (0, u.setPendingProfileEffectId)(void 0) : (0, _.setPendingProfileEffectId)(void 0);
                    return
                }
                null == n ? (0, u.setPendingProfileEffectId)(t) : (0, _.setPendingProfileEffectId)(t)
            }

            function U(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: i
                };
                return null != e && "" !== e ? {
                    value: e,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function p(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function R(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        246619: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                handleProfileAccessibilityTooltipViewed: function() {
                    return c
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                saveProfileChanges: function() {
                    return S
                },
                setPendingAccentColor: function() {
                    return A
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
            var i = n("454836"),
                r = n("312916"),
                u = n("253842"),
                _ = n("929748"),
                o = n("362939"),
                E = n("871831"),
                l = n("328470"),
                T = n("467006"),
                a = n("171168");

            function d(t) {
                l.default.track(T.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: a.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function S(t, e) {
                let n = E.default.getCurrentUser()?.id;
                if (null == n) return;
                let l = o.UseLegacyChatInput.getSetting();
                null != t.bio && l && (t.bio = _.default.parse(void 0, t.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: n
                    });
                    let _ = await i.default.patch({
                        url: null != e ? T.Endpoints.GUILD_PROFILE(e, T.ME) : T.Endpoints.USER_PROFILE(T.ME),
                        body: t
                    });
                    if (_.ok) {
                        let t = _.body.profile_effect?.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: n,
                            profileEffectId: t,
                            ..._.body
                        })
                    } else {
                        let t = new u.APIError(_);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: _.body,
                            apiError: t
                        })
                    }
                    return _
                } catch (e) {
                    let t = new u.APIError(e);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
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

            function s(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function f(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function N(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function A(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function U(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function p(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), d(a.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), d(a.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function D(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), d(a.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function G(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), d(a.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        846774: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return Y
                }
            }), n("789020");
            var i = n("392711"),
                r = n.n(i),
                u = n("763301"),
                _ = n("703229"),
                o = n("535291"),
                E = n("262047"),
                l = n("327271"),
                T = n("565639"),
                a = n("12480"),
                d = n("880315");
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

            function D(t) {
                let {
                    userId: e
                } = t;
                c.add(e)
            }

            function G(t) {
                let {
                    userId: e
                } = t;
                c.delete(e)
            }

            function C(t) {
                c.delete(t.userId), f[t.userId] = r()(t.mutualFriends).map(t => ({
                    key: t.id,
                    user: new o.default(t),
                    status: T.default.getStatus(t.id)
                })).sortBy(t => {
                    let {
                        user: e
                    } = t;
                    return e.username.toLowerCase()
                }).value(), N[t.userId] = t.mutualFriends.length
            }

            function O() {
                if (0 === Object.keys(A).length) return !1;
                A = {}
            }

            function P(t) {
                if (null == A[t.user.id]) return !1;
                delete A[t.user.id]
            }

            function g(t) {
                if (S.delete(t.user.id), null != t.mutual_guilds) {
                    let e = {};
                    t.mutual_guilds.forEach(t => {
                        let {
                            id: n,
                            nick: i
                        } = t, r = l.default.getGuild(n);
                        null != r && (e[n] = {
                            guild: r,
                            nick: i
                        })
                    }), A[t.user.id] = d.default.getFlattenedGuildIds().filter(t => null != e[t]).map(t => ({
                        guild: e[t].guild,
                        nick: e[t].nick
                    }))
                }
                if (null != t.mutual_friends_count) {
                    let e = t.mutual_friends_count;
                    N[t.user.id] = e
                }
                let e = t.premium_since ?? null,
                    n = t.application;
                if (I[t.user.id] = {
                        userId: t.user.id,
                        banner: t.user_profile?.banner,
                        accentColor: t.user_profile?.accent_color,
                        themeColors: t.user_profile?.theme_colors,
                        popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
                        bio: t.user_profile?.bio ?? "",
                        profileEffectId: t.user_profile?.profile_effect?.id,
                        pronouns: t.user_profile?.pronouns ?? "",
                        connectedAccounts: t.connected_accounts.filter(t => u.default.isSupported(t.type)) ?? [],
                        applicationRoleConnections: t.application_role_connections ?? [],
                        premiumSince: null != e ? new Date(e) : null,
                        premiumType: t.premium_type,
                        premiumGuildSince: null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
                        lastFetched: Date.now(),
                        legacyUsername: t.legacy_username,
                        profileFetchFailed: !1,
                        application: null != n ? {
                            id: n.id,
                            primarySkuId: n.primary_sku_id,
                            customInstallUrl: n.custom_install_url,
                            installParams: n.install_params,
                            flags: n.flags,
                            popularApplicationCommandIds: n.popular_application_command_ids
                        } : null,
                        badges: t.badges
                    }, null != t.guild_member_profile) {
                    let e = {
                        userId: t.user.id,
                        guildId: t.guild_member_profile.guild_id,
                        banner: t.guild_member_profile.banner,
                        accentColor: t.guild_member_profile.accent_color,
                        themeColors: t.guild_member_profile?.theme_colors,
                        popoutAnimationParticleType: t.guild_member_profile?.popout_animation_particle_type,
                        profileEffectId: t.guild_member_profile?.profile_effect?.id,
                        bio: t.guild_member_profile.bio,
                        pronouns: t.guild_member_profile.pronouns,
                        badges: t.guild_badges
                    };
                    null != s[t.user.id] ? s[t.user.id][t.guild_member_profile.guild_id] = e : s[t.user.id] = {
                        [t.guild_member_profile.guild_id]: e
                    }
                }
            }

            function L(t) {
                let {
                    userId: e
                } = t;
                S.add(e)
            }

            function m(t) {
                let {
                    userId: e
                } = t;
                I[e] = I[e] ?? {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: e,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                }, S.delete(e)
            }

            function h(t) {
                U = !0
            }

            function y(t) {
                U = !1, null != t.guild_id ? ! function(t) {
                    let {
                        userId: e,
                        guild_id: n,
                        accent_color: i,
                        banner: r,
                        bio: u,
                        pronouns: _,
                        popout_animation_particle_type: o,
                        theme_colors: E,
                        profileEffectId: l
                    } = t;
                    if (null == n || null == s[e]) return !1;
                    let T = s[e][n];
                    if (null == T) return !1;
                    s[e][n] = {
                        ...T,
                        accentColor: i,
                        banner: r,
                        bio: u,
                        pronouns: _,
                        popoutAnimationParticleType: o,
                        themeColors: E,
                        profileEffectId: l
                    }
                }(t) : ! function(t) {
                    let {
                        userId: e,
                        accent_color: n,
                        banner: i,
                        bio: r,
                        pronouns: u,
                        popout_animation_particle_type: _,
                        theme_colors: o,
                        profileEffectId: E
                    } = t, l = I[e];
                    if (null == l) return !1;
                    I[e] = {
                        ...l,
                        accentColor: n,
                        banner: i,
                        bio: r,
                        pronouns: u,
                        popoutAnimationParticleType: _,
                        themeColors: o,
                        profileEffectId: E
                    }
                }(t)
            }

            function v(t) {
                U = !1
            }

            function F(t) {
                p = !0
            }

            function M(t) {
                let {
                    user: e
                } = t;
                if (S.has(e.id) || null == I[e.id]) return !1;
                I[e.id].lastFetched = 0
            }

            function b() {
                S.clear(), I = {}, s = {}
            }
            class B extends a.default {
                static #t = this.displayName = "UserProfileStore";
                static #e = this.LATEST_SNAPSHOT_VERSION = 1;
                constructor() {
                    super({
                        CACHE_LOADED_LAZY: () => this.loadCache(),
                        USER_PROFILE_FETCH_START: L,
                        USER_PROFILE_FETCH_FAILURE: m,
                        USER_PROFILE_FETCH_SUCCESS: g,
                        USER_PROFILE_UPDATE_START: h,
                        USER_PROFILE_UPDATE_SUCCESS: y,
                        USER_PROFILE_UPDATE_FAILURE: v,
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
                    }), this.loadCache = () => {
                        let t = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
                        null != t && t.forEach(t => {
                            let {
                                userId: e,
                                profile: n
                            } = t;
                            I[e] = n
                        })
                    }
                }
                initialize() {
                    this.waitFor(d.default), this.syncWith([_.default], b)
                }
                isFetchingProfile(t) {
                    return S.has(t)
                }
                isFetchingFriends(t) {
                    return c.has(t)
                }
                get isSubmitting() {
                    return U
                }
                getUserProfile(t) {
                    return I[t]
                }
                getGuildMemberProfile(t, e) {
                    return null == e ? null : s[t]?.[e]
                }
                getMutualFriends(t) {
                    return f[t]
                }
                getMutualFriendsCount(t) {
                    return N[t]
                }
                getMutualGuilds(t) {
                    return A[t]
                }
                getIsAccessibilityTooltipViewed() {
                    return p
                }
                takeSnapshot() {
                    let t = E.default.getId();
                    return {
                        version: B.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: t,
                            profile: I[t]
                        }]
                    }
                }
            }
            var Y = new B
        },
        801856: function(t, e, n) {
            "use strict";
            let i, r, u, _, o, E, l, T, a, d, S, c, I, s;
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var f = n("53452"),
                N = n("661223"),
                A = n("312916"),
                U = n("467006");
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
                i = void 0, r = void 0, u = void 0, _ = void 0
            }

            function g() {
                o = void 0, E = void 0, l = void 0, T = void 0, a = void 0, _ = void 0
            }

            function L() {
                S = void 0, c = void 0, I = void 0, s = void 0, d = void 0
            }
            class m extends N.default.Store {
                static #t = this.displayName = "UserSettingsAccountStore";
                getFormState() {
                    return p
                }
                getErrors() {
                    return R
                }
                showNotice() {
                    return void 0 !== i || void 0 !== o || void 0 !== E || void 0 !== l || void 0 !== T || void 0 !== a || void 0 !== u || void 0 !== _ || void 0 !== r
                }
                getPendingAvatar() {
                    return i
                }
                getPendingGlobalName() {
                    return r
                }
                getPendingBanner() {
                    return o
                }
                getPendingBio() {
                    return E
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return T
                }
                getPendingThemeColors() {
                    return a
                }
                getPendingAvatarDecoration() {
                    return u
                }
                getPendingProfileEffectId() {
                    return _
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: o,
                        pendingBio: E,
                        pendingPronouns: l,
                        pendingAccentColor: T,
                        pendingThemeColors: a,
                        pendingAvatarDecoration: u,
                        pendingProfileEffectId: _,
                        pendingGlobalName: r
                    }
                }
                getTryItOutThemeColors() {
                    return d
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
                        tryItOutThemeColors: d,
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
            var h = new m(A.default, {
                USER_SETTINGS_ACCOUNT_INIT: G,
                USER_SETTINGS_MODAL_INIT: G,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: G,
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    let {
                        section: e
                    } = t;
                    return e === U.UserSettingsSections.ACCOUNT && G()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: C,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    O(), L(), C()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    p = U.FormStates.SUBMITTING, R = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(t) {
                    if (p !== U.FormStates.SUBMITTING) return !1;
                    p = U.FormStates.OPEN, R = t.errors ?? {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e, S = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(t) {
                    let {
                        globalName: e
                    } = t;
                    r = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    u = e
                },
                USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(t) {
                    let {
                        item: e
                    } = t;
                    e?.type === f.CollectiblesItemType.PROFILE_EFFECT ? (c = null, I = e?.id) : (I = null, c = e)
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectId: e
                    } = t;
                    _ = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    o = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    E = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    l = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(t) {
                    let {
                        color: e
                    } = t;
                    T = e
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    a = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    S = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(t) {
                    let {
                        avatarDecoration: e
                    } = t;
                    c = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(t) {
                    let {
                        profileEffectId: e
                    } = t;
                    I = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    s = e
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    d = e
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    R = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: P,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
                USER_SETTINGS_RESET_ALL_PENDING: O,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: L,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    u = void 0
                },
                LOGOUT: function() {
                    i = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    D = e
                }
            })
        },
        53452: function(t, e, n) {
            "use strict";
            var i, r;
            n.r(e), n.d(e, {
                CollectiblesItemType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.NONE = 100] = "NONE", r[r.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", r[r.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);
//# sourceMappingURL=3935.8d57481affa00ef4dfd3.js.map