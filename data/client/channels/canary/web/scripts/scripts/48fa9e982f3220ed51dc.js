(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27068"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var i = n("913144"),
                r = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function s(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: u
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
                }
                let a = [];

                function c(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return a.push([e, t]), t + 1
                }
                let d = s(.5 * l),
                    f = s(i, -d),
                    E = s(i + l, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; f <= E;) f = c(f);
                o(t, n, a)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return s
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return p
                },
                disableAccount: function() {
                    return h
                },
                saveAccountRequest: function() {
                    return T
                },
                saveAccountChanges: function() {
                    return S
                },
                getHarvestStatus: function() {
                    return C
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return v
                },
                setPendingGlobalNameName: function() {
                    return g
                },
                setPendingAvatarDecoration: function() {
                    return A
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return L
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return O
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                u = n("913144"),
                o = n("393414"),
                s = n("599110"),
                a = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function I() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function p() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function h(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    r = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => i.default.post({
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
                    d.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function T(e) {
                let t = await i.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function S(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: o,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: p,
                    globalName: h
                } = e;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let u = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: o,
                        avatar: d,
                        discriminator: n,
                        global_name: h,
                        new_password: p,
                        ...e
                    };
                    null === I && (u.avatar_decoration_id = null), null != I && (u.avatar_decoration_id = I.id, u.avatar_decoration_sku_id = I.skuId);
                    let s = r.default.get(f.DEVICE_TOKEN),
                        a = (0, E.getDevicePushProvider)();
                    null != a && null != s && (u.push_provider = a, u.push_token = s);
                    let c = r.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = c), T(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return s.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, a.isAnimatedIconHash)(t.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function C() {
                return i.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return i.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function v(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function g(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function A(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function L() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function O(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: o
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: o = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: a
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: o = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: a
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: o
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: o
                    })
                })
            }
        },
        738707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreVerticalIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: o
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: o
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: o
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: o
                    })
                })
            }
        },
        265614: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        className: o
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: o
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: o
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e, t) {
                let n = i.useRef(e);
                return i.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var u = n("666020");

            function o(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("872717"),
                r = n("913144"),
                l = n("568734"),
                u = n("299285"),
                o = n("49111"),
                s = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: l,
                            teamId: u
                        } = e, s = await i.default.post({
                            url: o.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: l,
                                guild_id: n,
                                team_id: u
                            }
                        }), a = s.body;
                        return null != n && null != l && r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: a
                        }), a
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
                            url: o.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), u = l.body;
                        return r.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: u
                        }), u
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, l = await i.default.post({
                            url: o.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), u = l.body;
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let i = u.default.getApplication(e),
                                    r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                                    s = r && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != i && !s) && !u.default.isFetchingApplication(e) && !u.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await i.default.get({
                                    url: o.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw r.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), i.default.get({
                            url: o.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (r.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("516555"),
                u = n("65597"),
                o = n("206230"),
                s = n("49111");
            let a = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                c = r.createContext(a);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: E
                } = e, _ = (0, l.useConfettiCannon)(n, s), I = (0, u.default)([o.default], () => o.default.useReducedMotion), p = r.useMemo(() => I ? a : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (e, t) => _.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => _.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, d, _, n, I, E]);
                return (0, i.jsx)(c.Provider, {
                    value: p,
                    children: t
                })
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return a
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return E
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return p
                },
                setPendingThemeColors: function() {
                    return h
                },
                resetPendingMemberChanges: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return N
                },
                setDisableSubmit: function() {
                    return v
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                u = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(e),
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

            function s(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
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

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function S() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, u, o, s, a, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var f = n("446674"),
                E = n("913144"),
                _ = n("49111");
            let I = _.FormStates.CLOSED,
                p = {},
                h = !1;

            function T() {
                I = _.FormStates.CLOSED, p = {}, a = null, c = void 0, d = []
            }

            function S() {
                C(), N(), p = {}, I = _.FormStates.OPEN
            }

            function C() {
                i = void 0, o = void 0
            }

            function N() {
                r = void 0, l = void 0, u = void 0, s = void 0
            }
            class v extends f.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return p
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== u || void 0 !== o || void 0 !== s
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
                    return o
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: u,
                        pendingNickname: o,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return a
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return h
                }
            }
            v.displayName = "GuildIdentitySettingsStore";
            var g = new v(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    a = e.guild, I = _.FormStates.OPEN, p = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: T,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    S(), T()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    a = e.guild, p = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = _.FormStates.SUBMITTING, p = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== _.FormStates.SUBMITTING) return !1;
                    I = _.FormStates.OPEN, p = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = _.FormStates.OPEN, p = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: S,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: S,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    p = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    h = t
                }
            })
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return E
                }
            });
            var i = n("693566"),
                r = n.n(i),
                l = n("872717"),
                u = n("913144"),
                o = n("851387"),
                s = n("36402"),
                a = n("49111");
            async function c(e) {
                try {
                    u.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: a.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    u.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                s.default.shouldFetch(e) && await c(e)
            }
            let f = new r({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == f.get(i)) {
                    var r, u;
                    return f.set(i, !0), r = e, u = t, l.default.get({
                        url: a.Endpoints.GUILD_ROLE_MEMBER_IDS(r, u)
                    }).then(e => (o.default.requestMembersById(r, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {},
                u = {};
            class o extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = u[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            o.displayName = "GuildRoleMemberCountStore";
            var s = new o(r.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    l[t] = n, u[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, r = l[t];
                    if (null == r) return !1;
                    r[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, r = l[t];
                    if (null == r || null == r[n]) return !1;
                    let u = Object.keys(i).length;
                    r[n] += u
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete u[t.id]
                }
            })
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return o
                },
                clearHotspotOverride: function() {
                    return s
                }
            });
            var i = n("913144"),
                r = n("599110"),
                l = n("49111");

            function u(e) {
                r.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                l = n("197881"),
                u = n("492397");
            let o = new Set,
                s = {};
            class a extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(u.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !o.has(e))
                }
                hasHiddenHotspot(e) {
                    return o.has(e)
                }
                getHotspotOverride(e) {
                    return s[e]
                }
                getState() {
                    return {
                        hiddenHotspots: o,
                        hotspotOverrides: s
                    }
                }
            }
            a.displayName = "HotspotStore", a.persistKey = "hotspots", a.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new a(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    o = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (o.has(t)) return !1;
                    o.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    s[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var i = n("533613");
            n.es(i, t);
            var r = n("597517");
            n.es(r, t);
            var l = n("269596")
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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

            function l(e) {
                return r.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("217145"),
                r = n("429682");

            function l(e) {
                return (0, i.isIFrameModalUserEnabled)() || (0, r.isIFrameModalForGuildEnabled)(e)
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var l = n("446674"),
                u = n("913144"),
                o = n("798609"),
                s = n("42203"),
                a = n("3765");
            let c = {},
                d = {},
                f = {};

            function E(e) {
                delete c[e];
                let t = f[e];
                null != t && delete d[t], delete f[e]
            }
            class _ extends l.default.Store {
                getInteraction(e) {
                    let t = d[e.id];
                    return null != t ? c[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(c)) {
                        let i = f[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = d[e];
                    return (null == n || null == c[n] || c[n].state === a.InteractionState.FAILED) && (null == c[t] || c[t].state === a.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return r
                }
                getIFrameModalKey() {
                    return i
                }
            }
            _.displayName = "InteractionStore";
            var I = new _(u.default, {
                LOGOUT: function() {
                    c = {}, d = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: u,
                        onFailure: o
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: a.InteractionState.QUEUED,
                        data: i,
                        onCreate: r,
                        onCancel: l,
                        onSuccess: u,
                        onFailure: o
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r || r.state !== a.InteractionState.QUEUED) return !1;
                    r.state = a.InteractionState.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), E(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: r
                    } = e;
                    if (null == n) return !1;
                    let l = c[n];
                    if (null == l) return !1;
                    null === (t = l.onFailure) || void 0 === t || t.call(l, i, r), l.data.interactionType === o.InteractionTypes.APPLICATION_COMMAND ? E(n) : c[n] = {
                        ...l,
                        state: a.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: r
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = c[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), E(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(c)) t.state === a.InteractionState.FAILED && E(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    r = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, r = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.QUEUED = 0] = "QUEUED", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED"
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                u = n("719923"),
                o = n("782340");
            let s = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }]
                }),
                a = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l,
                        autoUnfurlReactionTooltip: o
                    } = n, s = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: s ? i : l,
                        autoUnfurlReactionTooltip: o
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : a({
                        user: t,
                        config: s.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), u = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = a({
                        user: r,
                        config: u
                    }), E = o && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("627445"),
                s = n.n(o),
                a = n("817736"),
                c = n.n(a),
                d = n("77078"),
                f = n("642906"),
                E = n("990893");

            function _(e) {
                var t, n, l, o, a, c;
                let {
                    header: _,
                    isLargeModal: I,
                    stepProps: p
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: h,
                    stepConfigs: T,
                    setBodyNode: S,
                    setFooterNode: C,
                    setModalOverlayNode: N,
                    setReadySlideId: v
                } = (0, f.usePaymentContext)(), g = T.find(e => e.key === h);
                r.useEffect(() => {
                    N(null)
                }, [h, N]), s(null != g, "Unknown step for current payment flow.");
                let A = null !== (a = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== a && a,
                    m = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== I && I ? E.sliderBodyLarge : null == g ? void 0 : null === (l = g.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == g ? void 0 : null === (o = g.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === c || c ? _ : null, g.renderStep(p), null == h || A ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: u(E.body, m),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: h,
                                centered: !1,
                                onSlideReady: e => v(e),
                                children: T.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: u(E.sliderBody, R),
                                        ref: e => S(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => C(e)
                        }), (0, i.jsx)("div", {
                            ref: e => N(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                u = n("112679"),
                o = n("55689"),
                s = n("855133"),
                a = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: I,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: h,
                    analyticsObject: T,
                    analyticsLocation: S,
                    analyticsSourceLocation: C,
                    isGift: N = !1,
                    giftMessage: v,
                    subscriptionTier: g,
                    trialId: A,
                    postSuccessGuild: m,
                    openInvoiceId: R,
                    applicationId: U,
                    referralTrialOfferId: L,
                    giftRecipient: P,
                    returnRef: O
                } = null != e ? e : {}, y = !1, M = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: M,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: N,
                            giftMessage: v,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                y = !0, null == I || I(), !N && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: h,
                            analyticsObject: T,
                            analyticsLocation: S,
                            analyticsSourceLocation: C,
                            trialId: A,
                            postSuccessGuild: m,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: U,
                            referralTrialOfferId: L,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && a.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : T,
                            source: C,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != A,
                            application_id: U,
                            location_stack: h
                        }), (0, u.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == _ || _(y), y && (!N && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return u
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return a
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                u = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return h
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                u = n("913144"),
                o = n("775433"),
                s = n("697218"),
                a = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function I() {
                try {
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = s.default.getCurrentUser();
                T(r, i, t, n)
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), u = (0, r.default)([s.default], () => s.default.getCurrentUser());
                i.useEffect(() => {
                    T(u, l, t, n)
                }, [u, l, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && I(), i && (!a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                u = l;
            class o extends i.default.Store {
                initialize() {
                    u = l
                }
                getState() {
                    return u
                }
                shouldFetchPremiumLikelihood() {
                    return !u.isFetching && !u.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var s = new o(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    u.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    u.premiumLikelihood = t, u.fetched = !0, u.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    u.isFetching = !1
                },
                LOGOUT: function() {
                    u.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = r
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return s
                },
                setNewPendingUserBio: function() {
                    return a
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectID: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return E
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
                u = n("783142"),
                o = n("26989");

            function s(e) {
                return i.useMemo(() => {
                    let t = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let l = t[r],
                            u = null === (i = l[e]) || void 0 === i ? void 0 : i.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function a(e, t) {
                (0, u.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, l.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function E(e, t, n) {
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

            function _(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                u = n("929423");
            n("424562");
            var o = n("49111"),
                s = n("397336");

            function a(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: a,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, l.default)(), E = (0, i.useCallback)(() => {
                    null != t && (0, u.initGuildIdentitySettings)(t, null != c ? c : f), r.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: a,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, a, c, d, f]);
                return E
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return a
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, l = n("991170"),
                u = n("719923"),
                o = n("24373"),
                s = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let a = (e, t, n) => {
                    if (null == t) return 2;
                    let i = u.default.canUseCustomStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) return 0;
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || l.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? 0 : 1 : 2 : 3;
                    return 2
                },
                c = (e, t, n) => 0 === a(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("424973");
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                u = n("913144"),
                o = n("80507"),
                s = n("374363"),
                a = n("364685"),
                c = n("49111"),
                d = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let E = new o.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => a.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    a.default.isLoaded && E.compute()
                },
                I = () => {
                    _()
                };

            function p() {
                var e;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class h extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (f = e), this.syncWith([a.default], I), this.syncWith([s.default], p)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            h.displayName = "StickersPersistedStore", h.persistKey = "StickersPersistedStoreV2";
            var T = new h(u.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return p
                },
                setPendingBio: function() {
                    return h
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingAccentColor: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return C
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return v
                },
                setTryItOutBanner: function() {
                    return g
                },
                setTryItOutThemeColors: function() {
                    return A
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                u = n("884351"),
                o = n("845579"),
                s = n("697218"),
                a = n("599110"),
                c = n("49111"),
                d = n("646718");

            function f(e) {
                a.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, a;
                let d = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let f = o.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = u.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (a = n.body.profile_effect) || void 0 === a ? void 0 : a.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new l.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
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

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function v(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function g(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                s = n("760607"),
                a = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = r.Children.only(t), E = (0, o.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: u(a.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(s.default, {
                        ...d,
                        className: u(c, a.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: u(a.childContainer, {
                            [a.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                u = n("393414"),
                o = n("49111"),
                s = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: s,
                        onClick: a,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, E = r.useCallback(e => {
                        !e.repeat && ((e.charCode === o.KeyboardKeys.SPACE || e.charCode === o.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, u.transitionTo)(n), null == a || a()), null == c || c(e))
                    }, [n, c, a]), _ = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, u.transitionTo)(n), null == a || a())
                    }, [n, a]), I = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: _,
                        onKeyPress: E,
                        ...f,
                        children: s
                    });
                    return (0, i.jsx)(l.FocusRing, {
                        ...d,
                        children: I
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return T
                }
            });
            var i, r, l = n("37983"),
                u = n("884691"),
                o = n("414456"),
                s = n.n(o),
                a = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let _ = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                I = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class p extends u.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(a.default.div, {
                        ...i,
                        className: s(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[t],
                            children: (0, l.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: "default"
            };
            let h = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: o,
                    shineSize: a = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: I,
                    ...h
                } = e, T = u.createRef(), S = (0, d.default)(T), C = !i && !r && !0 !== o && (!I || S);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: T,
                    ...h,
                    className: s(E.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [t, C ? (0, l.jsx)(p, {
                        shinePaused: f,
                        className: s(E.buttonShine, I ? E.onlyShineOnHover : void 0, _),
                        shineSize: a
                    }) : null]
                })
            };
            h.ShineSizes = r;
            var T = h
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, l = n ? 1 : t;
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
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return u
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return s
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                o = () => (0, l.useLazyValue)(() => u()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: o,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: u,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, u.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon)
        },
        663745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("738707"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
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
                }, l.MoreVerticalIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: r
                        })
                    })
                }, l.PencilIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("811513"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, l.GroupIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, l.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("424823"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("31745"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: u
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
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
                }, l.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                u = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: t,
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
                }, l.StageIcon)
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("77078"),
                o = n("254686"),
                s = n("851706");
            let a = Object.freeze({
                    SIZE_10: s.size10,
                    SIZE_12: s.size12,
                    SIZE_14: s.size14,
                    SIZE_16: s.size16,
                    SIZE_20: s.size20,
                    SIZE_24: s.size24,
                    SIZE_32: s.size32
                }),
                c = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: r = o.wrapper,
                        size: s = a.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: f,
                        onClick: E,
                        onContextMenu: _,
                        style: I,
                        title: p,
                        uppercase: h
                    } = e;
                    return (0, i.jsx)(u.H, {
                        role: null != E ? "button" : void 0,
                        onClick: E,
                        onContextMenu: _,
                        id: t,
                        className: l(r, {
                            [o.base]: !0,
                            [s]: !0,
                            [o.selectable]: c,
                            [o.muted]: n,
                            [o.uppercase]: h
                        }),
                        title: p,
                        style: null != f ? {
                            ...I,
                            color: f
                        } : I,
                        children: d
                    })
                };
            c.Sizes = a;
            var d = c
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return T
                },
                default: function() {
                    return N
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("627445"),
                s = n.n(o),
                a = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                E = n("697218"),
                _ = n("368121"),
                I = n("523096"),
                p = n("587974"),
                h = n("494101");
            let T = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class C extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: l
                    } = this.props, u = [], o = e.length === t ? e.length : t - 1, s = this.renderMoreUsers(o), a = 0;
                    for (; a < o && a < e.length;) {
                        var c;
                        let t = null == s && null == l && a === e.length - 1,
                            o = n(e[a], t, a);
                        u.push(t ? (0, i.jsx)("div", {
                            className: h.avatarContainer,
                            children: o
                        }, S(null !== (c = e[a]) && void 0 !== c ? c : null, a)) : (0, i.jsx)(p.default, {
                            className: h.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: p.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: o
                        }, S(e[a], a))), a++
                    }
                    return null != l ? u.push(l) : null != s && u.push(s), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: u,
                        users: o
                    } = this.props, s = Math.min(e, o.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, i.jsx)(r.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > o.length) {
                                let e = n - o.length;
                                return (0, i.jsx)(r.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (s < o.length) {
                            let e = Math.min(o.length - s, 99);
                            return (0, i.jsx)(r.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, i.jsx)(_.default, {
                        foreground: h.foreground,
                        className: h.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: l,
                        useFallbackUserForPopout: o
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, _ = n.find(e => null != e && e.id === f), I = o && null == E.default.getUser(f);
                    return (0, i.jsx)(a.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (s(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(d.default, {
                            ...this.props,
                            user: I && null != _ ? _ : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, i.jsxs)("div", {
                            className: u(e, h.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.SIZE_24;
                                switch (e) {
                                    case T.SIZE_16:
                                        return h.size16;
                                    case T.SIZE_24:
                                        return h.size24;
                                    case T.SIZE_32:
                                        return h.size32;
                                    case T.SIZE_56:
                                        return h.size56;
                                    default:
                                        return h.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: l,
                            size: u
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                                className: h.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
                                    t = I.default.DEFAULT_AVATARS[e];
                                return (0, i.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: h.avatar
                                })
                            }
                        }
                        let o = (0, i.jsx)("img", {
                            src: e.getAvatarURL(l, u),
                            alt: e.username,
                            className: h.avatar
                        }, e.id);
                        return r ? (0, i.jsx)(a.Clickable, {
                            className: h.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: o
                        }, e.id) : o
                    }
                }
            }
            C.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, i.jsx)("div", {
                        className: h.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: T.SIZE_24
            };
            var N = C
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                u = n("471671");

            function o() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([u.default], () => u.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("817736"),
                l = n("118810");
            let u = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, r.findDOMNode)(e);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = u) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let u = (0, r.v4)(),
                o = new Map,
                s = new Map;
            class a extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = s.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? o.has(t) ? this.elementId = o.get(t) || "" : o.set(t, (0, r.v4)()) : this.elementId = u;
                    let a = this.getVisibilityObserverId();
                    !s.has(a) && s.set(a, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            a.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = a
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
//# sourceMappingURL=48fa9e982f3220ed51dc.js.map