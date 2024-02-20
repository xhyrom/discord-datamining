(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46295"], {
        53708: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        112679: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: t
                })
            }

            function l(t, e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(t, e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return T
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
                    return C
                },
                requestHarvest: function() {
                    return h
                },
                setPendingAvatar: function() {
                    return A
                },
                setPendingGlobalNameName: function() {
                    return v
                },
                setPendingAvatarDecoration: function() {
                    return g
                },
                setPendingProfileEffectId: function() {
                    return R
                },
                clearErrors: function() {
                    return P
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return m
                },
                resetAndCloseUserProfileForm: function() {
                    return L
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                s = n("913144"),
                u = n("393414"),
                a = n("599110"),
                o = n("315102"),
                c = n("730622"),
                d = n("437822"),
                E = n("49111"),
                f = n("191349"),
                _ = n("782340");

            function I() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(t, e) {
                let n = e ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    r = e ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(e => i.default.post({
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
                    d.default.logoutInternal(), (0, u.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(t) {
                let e = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, s.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && s.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return s.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function p(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: u,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: T,
                    globalName: S
                } = t;
                return s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(t => {
                    let s = {
                        username: e,
                        email: i,
                        email_token: l,
                        password: u,
                        avatar: d,
                        discriminator: n,
                        global_name: S,
                        new_password: T,
                        ...t
                    };
                    null === I && (s.avatar_decoration_id = null), null != I && (s.avatar_decoration_id = I.id, s.avatar_decoration_sku_id = I.skuId);
                    let a = r.default.get(E.DEVICE_TOKEN),
                        o = (0, f.getDevicePushProvider)();
                    null != o && null != a && (s.push_provider = o, s.push_token = a);
                    let c = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != c && (s.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = c), N(s)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => s.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return a.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, o.isAnimatedIconHash)(e.avatar)
                    }), s.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function C() {
                return i.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A(t) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function v(t) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function g(t) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function R(t) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: t
                })
            }

            function P() {
                s.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function m() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(t) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        733154: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("76527");
            n.es(i, e)
        },
        505088: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("506070");
            n.es(i, e)
        },
        738707: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("670627");
            n.es(i, e)
        },
        424823: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("632874");
            n.es(i, e)
        },
        125094: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("782542");
            n.es(i, e)
        },
        287083: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("618807");
            n.es(i, e)
        },
        769174: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("28289");
            n.es(i, e)
        },
        390300: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("882039");
            n.es(i, e)
        },
        252744: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691");

            function r(t) {
                let [e, n] = (0, i.useState)(!1), r = (0, i.useRef)(t.current);
                return (0, i.useEffect)(() => {
                    r.current = t.current
                }, [t]), (0, i.useEffect)(() => {
                    let t = r.current;
                    if (null == t) return;
                    let e = () => n(!0),
                        i = () => n(!1);
                    return t.addEventListener("mouseenter", e), t.addEventListener("mouseleave", i), () => {
                        t.removeEventListener("mouseenter", e), t.removeEventListener("mouseleave", i)
                    }
                }, [r]), e
            }
        },
        651057: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("872717"),
                r = n("913144"),
                l = n("568734"),
                s = n("299285"),
                u = n("49111"),
                a = {
                    async createApplication(t) {
                        let {
                            name: e,
                            guildId: n,
                            type: l,
                            teamId: s
                        } = t, a = await i.default.post({
                            url: u.Endpoints.APPLICATIONS,
                            body: {
                                name: e,
                                type: l,
                                guild_id: n,
                                team_id: s
                            }
                        }), o = a.body;
                        return null != n && null != l && r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async getApplicationsForGuild(t) {
                        let {
                            includeTeam: e,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
                            url: u.Endpoints.GUILD_APPLICATIONS(t),
                            query: {
                                ...n,
                                include_team: e
                            }
                        }), s = l.body;
                        return r.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: s
                        }), s
                    },
                    async transferApplication(t) {
                        let {
                            applicationId: e,
                            teamId: n
                        } = t, l = await i.default.post({
                            url: u.Endpoints.APPLICATION_OWNER_TRANSFER(e),
                            body: {
                                team_id: n
                            }
                        }), s = l.body;
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: s
                        }), s
                    },
                    async fetchApplications(t) {
                        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = t;
                        if (!e && (n = t.filter(t => {
                                var e, n;
                                let i = s.default.getApplication(t),
                                    r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, u.ApplicationFlags.EMBEDDED),
                                    a = r && (null == i ? void 0 : null === (e = i.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms) == null;
                                return !(null != i && !a) && !s.default.isFetchingApplication(t) && !s.default.didFetchingApplicationFail(t) && t.length > 0
                            })), n.length > 0) {
                            let t;
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                t = await i.default.get({
                                    url: u.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(t => ["application_ids", t])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (t) {
                                throw r.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), t
                            }
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: t.body
                            })
                        }
                    },
                    fetchApplication(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: t
                        }), i.default.get({
                            url: u.Endpoints.APPLICATION_PUBLIC(t),
                            query: {
                                with_guild: e
                            },
                            oldFormErrors: !0
                        }).then(t => (r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: t.body
                        }), t.body)).catch(e => (r.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: t
                        }), Promise.reject(e)))
                    }
                }
        },
        887446: function(t, e, n) {
            "use strict";
            let i, r, l, s;
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            });
            var u = n("748820"),
                a = n("446674"),
                o = n("913144"),
                c = n("724210"),
                d = n("515631");
            let E = {};

            function f(t) {
                return {
                    guildId: t,
                    sessionId: (0, u.v4)()
                }
            }

            function _(t) {
                null != l && l.guildId === t ? (r = l, l = void 0) : r = f(t)
            }
            class I extends a.default.Store {
                getSavedScrollPosition(t) {
                    return E[t]
                }
                getHomeSessionId(t) {
                    return null != r && r.guildId === t ? r.sessionId : null != l && l.guildId === t ? l.sessionId : void 0
                }
                getHomeSessionSource(t) {
                    return null != s && s.guildId === t ? s.source : d.GuildHomeLandingSource.ORGANIC
                }
            }
            I.displayName = "GuildHomeStore";
            var T = new I(o.default, {
                CONNECTION_OPEN: function() {
                    E = {}
                },
                GUILD_FEED_FETCH_FRESH_START: function(t) {
                    let {
                        guildId: e
                    } = t;
                    delete E[e]
                },
                GUILD_HOME_SET_SCROLL_POSITION: function(t) {
                    let {
                        guildId: e,
                        scrollPosition: n
                    } = t;
                    E[e] = n
                },
                CHANNEL_SELECT: function(t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t;
                    if (null == e || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
                        i = void 0, r = void 0, l = void 0, s = void 0;
                        return
                    }
                    let u = (0, c.buildGuildStaticChannelId)(n, e);
                    if (i === u || null != r && r.guildId === e) return !1;
                    _(e), i = u, null != s && s.guildId !== e && (s = void 0)
                },
                CHANNEL_PRELOAD: function(t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t;
                    if (null == e || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
                        l = void 0;
                        return
                    }
                    if (null != l && l.guildId === e) return !1;
                    l = f(e)
                },
                GUILD_HOME_SET_SOURCE: function(t) {
                    let {
                        source: e,
                        guildId: n
                    } = t;
                    s = {
                        guildId: n,
                        source: e
                    }
                },
                GUILD_HOME_ENSURE_HOME_SESSION: function(t) {
                    let {
                        guildId: e
                    } = t;
                    if (null != r && r.guildId === e) return !1;
                    _(e)
                },
                LOGOUT: function() {
                    r = void 0, l = void 0, s = void 0
                }
            })
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return A
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                s = n("49111");
            async function u(t, e) {
                let {
                    nick: n,
                    avatar: l
                } = e;
                if (null == t) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await i.default.patch({
                        url: s.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: l
                        },
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
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function a(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function o(t, e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function f(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function _(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function T(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function S(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let i, r, l, s, u, a, o, c, d;
            n.r(e), n.d(e, {
                default: function() {
                    return v
                }
            });
            var E = n("446674"),
                f = n("913144"),
                _ = n("49111");
            let I = _.FormStates.CLOSED,
                T = {},
                S = !1;

            function N() {
                I = _.FormStates.CLOSED, T = {}, o = null, c = void 0, d = []
            }

            function p() {
                C(), h(), T = {}, I = _.FormStates.OPEN
            }

            function C() {
                i = void 0, u = void 0
            }

            function h() {
                r = void 0, l = void 0, s = void 0, a = void 0
            }
            class A extends E.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== s || void 0 !== u || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return s
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: s,
                        pendingNickname: u,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            A.displayName = "GuildIdentitySettingsStore";
            var v = new A(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    o = t.guild, I = _.FormStates.OPEN, T = {}, c = t.source, d = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    o = t.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = _.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (I !== _.FormStates.SUBMITTING) return !1;
                    I = _.FormStates.OPEN, T = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    I = _.FormStates.OPEN, T = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    s = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    S = e
                }
            })
        },
        270161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return u
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                r = n("923510"),
                l = n("49111");
            let s = l.Permissions.VIEW_CHANNEL,
                u = i.default.combine(s, l.Permissions.CONNECT),
                a = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        217145: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isIFrameModalUserEnabled: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l() {
                return r.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                isIFrameModalForGuildEnabled: function() {
                    return s
                }
            });
            var i = n("862205"),
                r = n("49111");
            let l = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function s(t) {
                return l.getCurrentConfig({
                    guildId: null != t ? t : r.EMPTY_STRING_GUILD_ID,
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("217145"),
                r = n("429682");

            function l(t) {
                return (0, i.isIFrameModalUserEnabled)() || (0, r.isIFrameModalForGuildEnabled)(t)
            }
        },
        649844: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                s = n("112679"),
                u = n("55689"),
                a = n("676379"),
                o = n("697218"),
                c = n("599110"),
                d = n("659500"),
                E = n("719923"),
                f = n("49111"),
                _ = n("646718");

            function I(t) {
                let {
                    initialPlanId: e,
                    followupSKUInfo: I,
                    onClose: T,
                    onComplete: S,
                    onSubscriptionConfirmation: N,
                    analyticsLocations: p,
                    analyticsObject: C,
                    analyticsLocation: h,
                    analyticsSourceLocation: A,
                    isGift: v = !1,
                    giftMessage: g,
                    subscriptionTier: R,
                    trialId: P,
                    postSuccessGuild: U,
                    openInvoiceId: m,
                    applicationId: L,
                    referralTrialOfferId: D,
                    giftRecipient: O,
                    returnRef: G,
                    subscription: y
                } = null != t ? t : {}, M = !1, b = (0, r.v4)(), w = o.default.getCurrentUser(), F = (0, E.isPremiumExactly)(w, _.PremiumTypes.TIER_2);
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(t, {
                            ...l,
                            loadId: b,
                            subscriptionTier: R,
                            skuId: R,
                            isGift: v,
                            giftMessage: g,
                            giftRecipient: O,
                            initialPlanId: e,
                            followupSKUInfo: I,
                            onClose: (t, e) => {
                                r(), null == T || T(t), t && (null == N || N(), !v && null != e && e === _.PremiumSubscriptionSKUs.TIER_2 && !F && d.ComponentDispatch.dispatch(f.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                M = !0, null == S || S(), !v && (0, a.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: N,
                            analyticsLocations: p,
                            analyticsObject: C,
                            analyticsLocation: h,
                            analyticsSourceLocation: A,
                            trialId: P,
                            postSuccessGuild: U,
                            planGroup: _.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: m,
                            applicationId: L,
                            referralTrialOfferId: D,
                            returnRef: G,
                            subscription: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !M && c.default.track(f.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: f.PurchaseTypeToAnalyticsPaymentType[f.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : C,
                            source: A,
                            subscription_type: f.SubscriptionTypes.PREMIUM,
                            is_gift: v,
                            eligible_for_trial: null != P,
                            application_id: L,
                            location_stack: p
                        }), (0, s.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == T || T(M), M && (null == N || N())
                    }
                })
            }
        },
        817963: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useManageResourcePermissions: function() {
                    return _
                },
                getManageResourcePermissions: function() {
                    return I
                }
            }), n("222007");
            var i = n("884691"),
                r = n("316693"),
                l = n("446674"),
                s = n("813006");
            n("923959");
            var u = n("957255"),
                a = n("697218");
            n("991170");
            var o = n("270161"),
                c = n("843455");
            let d = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                E = (t, e, n, i) => {
                    if (null == t) return !1;
                    if (n) return !0;
                    if ("creator_id" in t) return i && null != e && t.creator_id === e.id;
                    if ("userId" in t) return i && null != e && t.userId === e.id;
                    if ("user" in t) {
                        var r;
                        return i && null != e && (null === (r = t.user) || void 0 === r ? void 0 : r.id) === e.id
                    }
                    return !1
                },
                f = t => {
                    if (null == t) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let e = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return t.isGuildStageVoice() ? e = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : t.isGuildVoice() && (e = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(e, c.Permissions.CREATE_EVENTS), r.default.combine(e, c.Permissions.MANAGE_EVENTS)]
                },
                _ = t => {
                    let [e, n] = t instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(t), [r, o, _, I] = (0, l.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, t), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, t), u.default.can(e, t), u.default.can(n, t)]), T = (0, l.useStateFromStores)([a.default], () => a.default.getCurrentUser()), S = i.useCallback(t => E(t, T, o, r), [r, o, T]), N = i.useCallback(t => E(t, T, I, _), [I, _, T]);
                    return null == t ? d : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: _,
                        canManageAllExpressions: o,
                        canManageAllEvents: I,
                        canManageGuildExpression: S,
                        canManageGuildEvent: N
                    }
                },
                I = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
                        [i, r] = t instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(t),
                        l = e.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, t),
                        o = e.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, t),
                        _ = e.can(i, t),
                        I = e.can(r, t),
                        T = n.getCurrentUser();
                    return null == t ? d : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: _,
                        canManageAllExpressions: o,
                        canManageAllEvents: I,
                        canManageGuildExpression: t => E(t, T, o, l),
                        canManageGuildEvent: t => E(t, T, I, _)
                    }
                }
        },
        676379: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                setCanPlayWowMoment: function() {
                    return r
                }
            });
            var i = n("913144");
            let r = t => {
                i.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: t
                })
            }
        },
        906932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAvatarsWithGuilds: function() {
                    return a
                },
                setNewPendingUserBio: function() {
                    return o
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectId: function() {
                    return E
                },
                getProfilePreviewField: function() {
                    return f
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return I
                }
            }), n("424973");
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                s = n("783142"),
                u = n("26989");

            function a(t) {
                return i.useMemo(() => {
                    let e = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in e) {
                        var i;
                        let l = e[r],
                            s = null === (i = l[t]) || void 0 === i ? void 0 : i.avatar;
                        null != s && (null == n[s] && (n[s] = []), n[s].push(r))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function o(t, e) {
                (0, s.setPendingBio)(t === e ? void 0 : t)
            }

            function c(t, e) {
                (0, r.setPendingAvatar)(t === e ? void 0 : t)
            }

            function d(t, e) {
                if ((0, l.isEqualAvatarDecoration)(t, null != e ? e : null)) {
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

            function f(t, e, n) {
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

            function _(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function I(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                s = n("929423");
            n("424562");
            var u = n("49111"),
                a = n("397336");

            function o(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = t, {
                    analyticsLocations: E
                } = (0, l.default)(), f = (0, i.useCallback)(() => {
                    null != e && (0, s.initGuildIdentitySettings)(e, null != c ? c : E), r.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [e, n, o, c, d, E]);
                return f
            }
        },
        520497: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(t) {
                let {
                    CDN_HOST: e,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(e).concat(i.Endpoints.SOUNDBOARD_SOUND(t)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(t))
            }
        },
        866353: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return o
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, l = n("991170"),
                s = n("719923"),
                u = n("24373"),
                a = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (t, e, n) => {
                    if (null == e) return 2;
                    let i = s.default.canUseCustomStickersEverywhere(e);
                    if ((0, u.isStandardSticker)(t)) return 0;
                    if ((0, u.isGuildSticker)(t) && null != n) return t.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === t.guild_id ? 0 : null == n.guild_id || l.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: e,
                        context: n
                    }) ? i ? 0 : 1 : 2 : 3;
                    return 2
                },
                c = (t, e, n) => 0 === o(t, e, n)
        },
        865372: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            }), n("424973");
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                u = n("80507"),
                a = n("374363"),
                o = n("718517"),
                c = n("364685"),
                d = n("397336");
            let E = {
                pendingUsages: []
            };
            o.default.Millis.DAY;
            let f = new u.default({
                    computeBonus: () => 100,
                    computeWeight: t => {
                        let e = 0;
                        return t <= 3 ? e = 100 : t <= 15 ? e = 70 : t <= 30 ? e = 50 : t <= 45 ? e = 30 : t <= 80 && (e = 10), e
                    },
                    lookupKey: t => c.default.getStickerById(t),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    c.default.isLoaded && f.compute()
                },
                I = () => {
                    _()
                };

            function T() {
                var t;
                let e = null === (t = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === t ? void 0 : t.stickers;
                if (null == e) return !1;
                f.overwriteHistory(r.mapValues(e, t => ({
                    ...t,
                    recentUses: t.recentUses.map(Number).filter(t => t > 0)
                })), E.pendingUsages)
            }
            class S extends l.default.PersistedStore {
                initialize(t) {
                    this.waitFor(c.default), null != t && (E = t), this.syncWith([c.default], I), this.syncWith([a.default], T)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return f
                }
            }
            S.displayName = "StickersPersistedStore", S.persistKey = "StickersPersistedStoreV2";
            var N = new S(s.default, {
                STICKER_TRACK_USAGE: t => {
                    let {
                        stickerIds: e
                    } = t;
                    null == e || e.forEach(t => {
                        f.track(t), E.pendingUsages.push({
                            key: t,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(t) {
                    let {
                        settings: {
                            type: e
                        },
                        wasSaved: n
                    } = t;
                    if (e !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        783142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveProfileChanges: function() {
                    return f
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return T
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
                    return C
                },
                setTryItOutAvatar: function() {
                    return h
                },
                setTryItOutAvatarDecoration: function() {
                    return A
                },
                setTryItOutBanner: function() {
                    return v
                },
                setTryItOutThemeColors: function() {
                    return g
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                s = n("884351"),
                u = n("845579"),
                a = n("697218"),
                o = n("599110"),
                c = n("49111"),
                d = n("646718");

            function E(t) {
                o.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function f(t, e) {
                var n, o;
                let d = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let E = u.UseLegacyChatInput.getSetting();
                null != t.bio && E && (t.bio = s.default.parse(void 0, t.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != e ? c.Endpoints.GUILD_PROFILE(e, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (o = n.body.profile_effect) || void 0 === o ? void 0 : o.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: t,
                            ...n.body
                        })
                    } else {
                        let t = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new l.APIError(e);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function _() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function S(t) {
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

            function p(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function C(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function h(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), E(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function A(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), E(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function v(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function g(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        931138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                u = n("77078"),
                a = n("760607"),
                o = n("684133");

            function c(t) {
                let {
                    children: e,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = t, E = r.Children.only(e), f = (0, u.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: s(o.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...d,
                        className: s(c, o.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: s(o.childContainer, {
                            [o.redesignIconChildContainer]: f
                        }),
                        children: E
                    })]
                })
            }
        },
        181114: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ShineSizes: function() {
                    return r
                },
                Shine: function() {
                    return T
                },
                default: function() {
                    return N
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                u = n("414456"),
                a = n.n(u),
                o = n("458960"),
                c = n("77078"),
                d = n("252744"),
                E = n("145131"),
                f = n("61435");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let _ = {
                    default: f.shineDefault,
                    small: f.shineSmall
                },
                I = {
                    default: f.shineInnerDefault,
                    small: f.shineInnerSmall
                };
            class T extends s.PureComponent {
                render() {
                    let {
                        className: t,
                        shineSize: e,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(o.default.div, {
                        ...i,
                        className: a(f.shineContainer, t, {
                            [f.shinePaused]: n
                        }),
                        children: (0, l.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: _[e],
                            children: (0, l.jsx)("div", {
                                className: I[e]
                            })
                        })
                    })
                }
            }
            T.defaultProps = {
                shineSize: "default"
            };
            let S = t => {
                let {
                    children: e,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: u,
                    shineSize: o = "default",
                    shinePaused: E,
                    buttonShineClassName: _,
                    onlyShineOnHover: I,
                    ...S
                } = t, N = s.createRef(), p = (0, d.default)(N), C = !i && !r && !0 !== u && (!I || p);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: N,
                    ...S,
                    className: a(f.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [e, C ? (0, l.jsx)(T, {
                        shinePaused: E,
                        className: a(f.buttonShine, I ? f.onlyShineOnHover : void 0, _),
                        shineSize: o
                    }) : null]
                })
            };
            S.ShineSizes = r;
            var N = S
        },
        191814: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(t) {
                let {
                    size: e,
                    horizontal: n = !1
                } = t, r = n ? e : 1, l = n ? 1 : e;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        461380: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("384737"),
                u = n("448052"),
                a = n("748802"),
                o = n("260792"),
                c = n("77078"),
                d = n("75196"),
                E = n("366842");
            let f = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                _ = t => {
                    let {
                        direction: e = f.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: _ = "currentColor",
                        transition: I = E.transition,
                        className: T,
                        foreground: S,
                        expanded: N,
                        ...p
                    } = t, {
                        enabled: C
                    } = (0, c.useRedesignIconContext)(), h = e;
                    if (!0 === N ? h = f.DOWN : !1 === N && (h = f.RIGHT), C) {
                        let t = {
                            [f.UP]: o.ChevronSmallUpIcon,
                            [f.DOWN]: s.ChevronSmallDownIcon,
                            [f.LEFT]: u.ChevronSmallLeftIcon,
                            [f.RIGHT]: a.ChevronSmallRightIcon
                        } [h];
                        return (0, i.jsx)(t, {
                            ...p,
                            className: T,
                            width: n,
                            height: r,
                            color: _,
                            colorClass: S
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(T, I, h),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(p),
                        children: (0, i.jsx)("path", {
                            className: S,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            _.Directions = f;
            var I = _
        },
        109264: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: u,
                        ...a
                    } = t;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: e,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != u ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: u
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        543289: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function l(t) {
                let {
                    width: e = 104,
                    height: n = 80,
                    ...l
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(l),
                    width: e,
                    height: n,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        663745: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("738707"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("path", {
                                d: "M24 0v24H0V0z"
                            }), (0, i.jsx)("path", {
                                className: l,
                                fill: r,
                                d: "M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                            })]
                        })
                    })
                }, l.MoreVerticalIcon, void 0, {
                    size: 24
                })
        },
        151185: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("424823"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        368121: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(t) {
                    let {
                        width: e = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        866190: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsWindowFocused: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                s = n("471671");

            function u() {
                let {
                    windowId: t
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(t), [t])
            }
        },
        76527: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: u
                    })
                })
            }
        },
        506070: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CircleXIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: u = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        670627: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                MoreVerticalIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        632874: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PlusSmallIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: u
                    })
                })
            }
        },
        782542: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ScreenArrowIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: u
                    })]
                })
            }
        },
        618807: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                StageIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: u
                    })]
                })
            }
        },
        28289: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                TrophyIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        882039: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                VoiceNormalIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("82169");
            let s = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: u
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: u
                    })]
                })
            }
        },
        157590: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("817736"),
                l = n("118810");
            let s = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(t) {
                    return null == this._observer || this._visibleComponents.has(t)
                }
                observe(t) {
                    let e = this._observer;
                    if (null == e) return;
                    this.unobserve(t);
                    let n = (0, r.findDOMNode)(t);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, t), this._components.set(t, n), e.observe(n))
                }
                unobserve(t) {
                    let e = this._observer;
                    if (null == e) return;
                    let n = this._components.get(t);
                    null != n && (this._nodes.delete(n), this._components.delete(t), this._visibleComponents.delete(t), e.unobserve(n))
                }
                constructor(t = s) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = t => {
                        t.forEach(t => {
                            let e;
                            if (null != t.isIntersecting) e = t.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                e = null == n ? t.intersectionRatio > 0 : Array.isArray(n) ? n.some(e => t.intersectionRatio > e) : t.intersectionRatio > n
                            }
                            let n = this._nodes.get(t.target);
                            if (null != n) {
                                let t = !1;
                                e ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), t = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), t = !0), t && n.forceUpdate()
                            }
                        })
                    }, this._options = t, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, t))
                }
            }
        },
        235855: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                u = new Map,
                a = new Map;
            class o extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let t = this.getVisibilityObserver();
                        t.observe(this), this.isVisible = t.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(t) {
                    let e = this.getVisibilityObserver(),
                        n = e.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !t.active && this.props.active ? e.observe(this) : t.active && !this.props.active && e.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: t,
                        threshold: e
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(t, " ").concat(e)
                }
                getVisibilityObserver() {
                    let t = this.getVisibilityObserverId(),
                        e = a.get(t);
                    if (!e) throw Error("Visibility sensor with id ".concat(t, " not found."));
                    return e
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(t) {
                    super(t), this.isVisible = !1;
                    let {
                        root: e,
                        rootMargin: n,
                        threshold: i
                    } = t;
                    e ? u.has(e) ? this.elementId = u.get(e) || "" : u.set(e, (0, r.v4)()) : this.elementId = s;
                    let o = this.getVisibilityObserverId();
                    !a.has(o) && a.set(o, new l.default({
                        root: e,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            o.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = o
        },
        290381: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);
//# sourceMappingURL=46295.094a4686ca1de46d913c.js.map