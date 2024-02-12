(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14388"], {
        152584: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return A
                },
                disableAccount: function() {
                    return S
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return p
                },
                getHarvestStatus: function() {
                    return R
                },
                requestHarvest: function() {
                    return I
                },
                setPendingAvatar: function() {
                    return U
                },
                setPendingGlobalNameName: function() {
                    return C
                },
                setPendingAvatarDecoration: function() {
                    return P
                },
                setPendingProfileEffectId: function() {
                    return O
                },
                clearErrors: function() {
                    return h
                },
                resetPendingAccountChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return y
                },
                resetAndCloseUserProfileForm: function() {
                    return g
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var u = n("872717"),
                i = n("95410"),
                r = n("819855"),
                a = n("913144"),
                l = n("393414"),
                o = n("599110"),
                s = n("315102"),
                E = n("730622"),
                d = n("437822"),
                c = n("49111"),
                _ = n("191349"),
                f = n("782340");

            function T() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function A() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(t, e) {
                let n = e ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    i = e ? c.Endpoints.DELETE_ACCOUNT : c.Endpoints.DISABLE_ACCOUNT;
                return (0, E.default)(e => u.default.post({
                    url: i,
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
                    d.default.logoutInternal(), (0, l.transitionTo)(c.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(t) {
                let e = await u.default.patch({
                        url: c.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, a.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && a.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function p(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: u,
                    emailToken: r,
                    password: l,
                    avatar: d,
                    avatarDecoration: T,
                    newPassword: A,
                    globalName: S
                } = t;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, E.default)(t => {
                    let a = {
                        username: e,
                        email: u,
                        email_token: r,
                        password: l,
                        avatar: d,
                        discriminator: n,
                        global_name: S,
                        new_password: A,
                        ...t
                    };
                    null === T && (a.avatar_decoration_id = null), null != T && (a.avatar_decoration_id = T.id, a.avatar_decoration_sku_id = T.skuId);
                    let o = i.default.get(c.DEVICE_TOKEN),
                        s = (0, _.getDevicePushProvider)();
                    null != s && null != o && (a.push_provider = s, a.push_token = o);
                    let E = i.default.get(c.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != E && (a.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = E), N(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return o.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(e.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function R() {
                return u.default.get({
                    url: c.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function I() {
                return u.default.post({
                    url: c.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function U(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? r.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function P(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function O(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function h() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function y() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function g() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        308472: function(t, e, n) {
            "use strict";
            n.r(e);
            var u = n("879018");
            n.es(u, e)
        },
        823527: function(t, e, n) {
            "use strict";
            n.r(e);
            var u = n("116788");
            n.es(u, e)
        },
        906932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAvatarsWithGuilds: function() {
                    return o
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return E
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectId: function() {
                    return c
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return f
                },
                showRemoveBanner: function() {
                    return T
                }
            }), n("424973");
            var u = n("884691"),
                i = n("152584"),
                r = n("234251"),
                a = n("783142"),
                l = n("26989");

            function o(t) {
                return u.useMemo(() => {
                    let e = l.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in e) {
                        var u;
                        let r = e[i],
                            a = null === (u = r[t]) || void 0 === u ? void 0 : u.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(i))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function s(t, e) {
                (0, a.setPendingBio)(t === e ? void 0 : t)
            }

            function E(t, e) {
                (0, i.setPendingAvatar)(t === e ? void 0 : t)
            }

            function d(t, e) {
                if ((0, r.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(t)
            }

            function c(t, e) {
                if (t === e) {
                    (0, i.setPendingProfileEffectId)(void 0);
                    return
                }(0, i.setPendingProfileEffectId)(t)
            }

            function _(t, e, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: u ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: u
                };
                return null != e && "" !== e ? {
                    value: e,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function f(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function T(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        529805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                createPendingReply: function() {
                    return i
                },
                setPendingReplyShouldMention: function() {
                    return r
                },
                deletePendingReply: function() {
                    return a
                }
            });
            var u = n("913144");

            function i(t) {
                let {
                    message: e,
                    channel: n,
                    shouldMention: i,
                    showMentionToggle: r,
                    source: a
                } = t;
                u.default.dispatch({
                    type: "CREATE_PENDING_REPLY",
                    message: e,
                    channel: n,
                    shouldMention: i,
                    showMentionToggle: r,
                    source: a
                })
            }

            function r(t, e) {
                u.default.dispatch({
                    type: "SET_PENDING_REPLY_SHOULD_MENTION",
                    channelId: t,
                    shouldMention: e
                })
            }

            function a(t) {
                u.default.dispatch({
                    type: "DELETE_PENDING_REPLY",
                    channelId: t
                })
            }
        },
        783142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveProfileChanges: function() {
                    return _
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return A
                },
                setPendingBio: function() {
                    return S
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return p
                },
                setPendingThemeColors: function() {
                    return R
                },
                setTryItOutAvatar: function() {
                    return I
                },
                setTryItOutAvatarDecoration: function() {
                    return U
                },
                setTryItOutBanner: function() {
                    return C
                },
                setTryItOutThemeColors: function() {
                    return P
                }
            });
            var u = n("872717"),
                i = n("913144"),
                r = n("448993"),
                a = n("884351"),
                l = n("845579"),
                o = n("697218"),
                s = n("599110"),
                E = n("49111"),
                d = n("646718");

            function c(t) {
                s.default.track(E.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(t, e) {
                var n, s;
                let d = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let c = l.UseLegacyChatInput.getSetting();
                null != t.bio && c && (t.bio = a.default.parse(void 0, t.bio).content);
                try {
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await u.default.patch({
                        url: null != e ? E.Endpoints.GUILD_PROFILE(e, E.ME) : E.Endpoints.USER_PROFILE(E.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: t,
                            ...n.body
                        })
                    } else {
                        let t = new r.APIError(n);
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new r.APIError(e);
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function f() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function S(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function N(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function p(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function R(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function I(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), c(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function U(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), c(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function C(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), c(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function P(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), c(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        879018: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AnalyticsIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = t;
                return (0, u.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        116788: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GameControllerIcon: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("82169");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = t;
                return (0, u.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, u.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=14388.1930c8323f52a5eba9d8.js.map