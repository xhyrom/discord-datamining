(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68032"], {
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
                    return N
                },
                saveAccountRequest: function() {
                    return S
                },
                saveAccountChanges: function() {
                    return R
                },
                getHarvestStatus: function() {
                    return p
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
                    return h
                },
                setPendingProfileEffectId: function() {
                    return O
                },
                clearErrors: function() {
                    return P
                },
                resetPendingAccountChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return y
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var u = n("872717"),
                r = n("95410"),
                i = n("819855"),
                a = n("913144"),
                o = n("393414"),
                l = n("599110"),
                d = n("315102"),
                s = n("730622"),
                c = n("437822"),
                E = n("49111"),
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

            function N(t, e) {
                let n = e ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    r = e ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, s.default)(e => u.default.post({
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
                    c.default.logoutInternal(), (0, o.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function S(t) {
                let e = await u.default.patch({
                        url: E.Endpoints.ME,
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

            function R(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: u,
                    emailToken: i,
                    password: o,
                    avatar: c,
                    avatarDecoration: T,
                    newPassword: A,
                    globalName: N
                } = t;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, s.default)(t => {
                    let a = {
                        username: e,
                        email: u,
                        email_token: i,
                        password: o,
                        avatar: c,
                        discriminator: n,
                        global_name: N,
                        new_password: A,
                        ...t
                    };
                    null === T && (a.avatar_decoration_id = null), null != T && (a.avatar_decoration_id = T.id, a.avatar_decoration_sku_id = T.skuId);
                    let l = r.default.get(E.DEVICE_TOKEN),
                        d = (0, _.getDevicePushProvider)();
                    null != d && null != l && (a.push_provider = d, a.push_token = l);
                    let s = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != s && (a.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = s), S(a)
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
                    return l.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, d.isAnimatedIconHash)(e.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function p() {
                return u.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function I() {
                return u.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function U(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? i.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(t) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function h(t) {
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

            function P() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function y() {
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
                    return l
                },
                setNewPendingUserBio: function() {
                    return d
                },
                setNewPendingAvatar: function() {
                    return s
                },
                setNewPendingAvatarDecoration: function() {
                    return c
                },
                setNewPendingProfileEffectId: function() {
                    return E
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
                r = n("152584"),
                i = n("234251"),
                a = n("783142"),
                o = n("26989");

            function l(t) {
                return u.useMemo(() => {
                    let e = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in e) {
                        var u;
                        let i = e[r],
                            a = null === (u = i[t]) || void 0 === u ? void 0 : u.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(r))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function d(t, e) {
                (0, a.setPendingBio)(t === e ? void 0 : t)
            }

            function s(t, e) {
                (0, r.setPendingAvatar)(t === e ? void 0 : t)
            }

            function c(t, e) {
                if ((0, i.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(t)
            }

            function E(t, e) {
                if (t === e) {
                    (0, r.setPendingProfileEffectId)(void 0);
                    return
                }(0, r.setPendingProfileEffectId)(t)
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
                    return r
                },
                setPendingReplyShouldMention: function() {
                    return i
                },
                deletePendingReply: function() {
                    return a
                }
            });
            var u = n("913144");

            function r(t) {
                let {
                    message: e,
                    channel: n,
                    shouldMention: r,
                    showMentionToggle: i,
                    source: a
                } = t;
                u.default.dispatch({
                    type: "CREATE_PENDING_REPLY",
                    message: e,
                    channel: n,
                    shouldMention: r,
                    showMentionToggle: i,
                    source: a
                })
            }

            function i(t, e) {
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
                    return N
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingAccentColor: function() {
                    return R
                },
                setPendingThemeColors: function() {
                    return p
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
                    return h
                }
            });
            var u = n("872717"),
                r = n("913144"),
                i = n("448993"),
                a = n("884351"),
                o = n("845579"),
                l = n("697218"),
                d = n("599110"),
                s = n("49111"),
                c = n("646718");

            function E(t) {
                d.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(t, e) {
                var n, d;
                let c = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let E = o.UseLegacyChatInput.getSetting();
                null != t.bio && E && (t.bio = a.default.parse(void 0, t.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await u.default.patch({
                        url: null != e ? s.Endpoints.GUILD_PROFILE(e, s.ME) : s.Endpoints.USER_PROFILE(s.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (d = n.body.profile_effect) || void 0 === d ? void 0 : d.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectId: t,
                            ...n.body
                        })
                    } else {
                        let t = new i.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new i.APIError(e);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function f() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function N(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function S(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function R(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function p(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), E(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function U(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), E(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function C(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function h(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        956089: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BadgeShapes: function() {
                    return l
                },
                getBadgeWidthForValue: function() {
                    return d
                },
                getBadgeCountString: function() {
                    return s
                },
                NumberBadge: function() {
                    return c
                },
                TextBadge: function() {
                    return E
                },
                PremiumBadge: function() {
                    return _
                },
                IconBadge: function() {
                    return f
                },
                CircleBadge: function() {
                    return T
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r);
            n("77078");
            var a = n("20606");
            n("782340");
            var o = n("444036");
            let l = {
                ROUND: o.baseShapeRound,
                ROUND_LEFT: o.baseShapeRoundLeft,
                ROUND_RIGHT: o.baseShapeRoundRight,
                SQUARE: ""
            };

            function d(t) {
                return t < 10 ? 16 : t < 100 ? 22 : 30
            }

            function s(t) {
                return t < 1e3 ? "".concat(t) : "".concat(Math.min(Math.floor(t / 1e3), 9), "k+")
            }
            let c = t => {
                    let {
                        count: e,
                        color: n = a.default.STATUS_DANGER,
                        disableColor: r = !1,
                        shape: c = l.ROUND,
                        className: E,
                        style: _,
                        ...f
                    } = t;
                    return (0, u.jsx)("div", {
                        className: i(E, o.numberBadge, c),
                        style: {
                            backgroundColor: r ? void 0 : n,
                            width: d(e),
                            paddingRight: function(t) {
                                switch (t) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(e),
                            ..._
                        },
                        ...f,
                        children: s(e)
                    })
                },
                E = t => {
                    let {
                        text: e,
                        className: n,
                        color: r = a.default.STATUS_DANGER,
                        shape: d = l.ROUND,
                        disableColor: s = !1,
                        style: c,
                        ...E
                    } = t;
                    return (0, u.jsx)("div", {
                        className: i(n, o.textBadge, d),
                        style: {
                            backgroundColor: s ? void 0 : r,
                            ...c
                        },
                        ...E,
                        children: e
                    })
                },
                _ = t => {
                    let {
                        text: e,
                        className: n,
                        ...r
                    } = t;
                    return (0, u.jsx)(E, {
                        className: i(o.premiumBadge, n),
                        text: e,
                        ...r
                    })
                },
                f = t => {
                    let {
                        icon: e,
                        className: n,
                        color: r = a.default.STATUS_DANGER,
                        shape: d = l.ROUND,
                        disableColor: s = !1,
                        style: c
                    } = t;
                    return (0, u.jsx)("div", {
                        className: i(n, o.iconBadge, d),
                        style: {
                            backgroundColor: s ? void 0 : r,
                            ...c
                        },
                        children: (0, u.jsx)(e, {
                            className: o.icon
                        })
                    })
                },
                T = t => {
                    let {
                        className: e,
                        color: n = a.default.INTERACTIVE_ACTIVE,
                        shape: r = l.ROUND,
                        disableColor: d = !1,
                        style: s,
                        ...c
                    } = t;
                    return (0, u.jsx)("div", {
                        className: i(e, o.circleBadge, r),
                        style: {
                            backgroundColor: d ? void 0 : n,
                            ...s
                        },
                        ...c
                    })
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
            var r = n("669491"),
                i = n("82169");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = t;
                return (0, u.jsx)("svg", {
                    ...(0, i.default)(l),
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
                        className: o
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
            var r = n("669491"),
                i = n("82169");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = t;
                return (0, u.jsx)("svg", {
                    ...(0, i.default)(l),
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
                        className: o
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=68032.657957aa70661efe430b.js.map