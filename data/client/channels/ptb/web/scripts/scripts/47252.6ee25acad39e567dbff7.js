(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47252"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return o
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var i = n("913144"),
                l = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
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
                    height: r,
                    rowHeight: o
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
                }
                let a = [];

                function c(e) {
                    let t = e + (l.MINIMUM_RANGE - 1);
                    return a.push([e, t]), t + 1
                }
                let d = s(.5 * r),
                    f = s(i, -d),
                    E = s(i + r, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; f <= E;) f = c(f);
                u(t, n, a)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return o
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return s
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
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
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return _
                },
                accountDetailsClose: function() {
                    return I
                },
                disableAccount: function() {
                    return T
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return S
                },
                getHarvestStatus: function() {
                    return h
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
                    return L
                },
                setSingleTryItOutCollectiblesItem: function() {
                    return R
                },
                clearErrors: function() {
                    return m
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return O
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return y
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("819855"),
                o = n("913144"),
                u = n("393414"),
                s = n("599110"),
                a = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                C = n("782340");

            function _() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function I() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function T(e, t) {
                let n = t ? C.default.Messages.DELETE_ACCOUNT : C.default.Messages.DISABLE_ACCOUNT,
                    l = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => i.default.post({
                    url: l,
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
                    d.default.logoutInternal(), (0, u.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function p(e) {
                let t = await i.default.patch({
                        url: f.Endpoints.ME,
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

            function S(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: r,
                    password: u,
                    avatar: d,
                    avatarDecoration: _,
                    newPassword: I,
                    globalName: T
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: r,
                        password: u,
                        avatar: d,
                        discriminator: n,
                        global_name: T,
                        new_password: I,
                        ...e
                    };
                    null === _ && (o.avatar_decoration_id = null), null != _ && (o.avatar_decoration_id = _.id, o.avatar_decoration_sku_id = _.skuId);
                    let s = l.default.get(f.DEVICE_TOKEN),
                        a = (0, E.getDevicePushProvider)();
                    null != a && null != s && (o.push_provider = a, o.push_token = s);
                    let c = l.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (o.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = c), p(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: C.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return s.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, a.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function h() {
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
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function g(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function A(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function L(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function R(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM",
                    item: e
                })
            }

            function m() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function O() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function y(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47716 2 2 6.47715 2 12C2 13.9707 2.57006 15.8083 3.55427 17.3568C3.67702 17.5499 3.66393 17.8017 3.51347 17.9742L1.44658 20.3425C0.882052 20.9893 1.34145 22 2.2 22H12Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: u = "",
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H6.99999C6.44771 13 5.99999 12.5523 5.99999 12C5.99999 11.4477 6.44771 11 6.99999 11H11V7C11 6.44771 11.4477 6 12 6Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: u = "",
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(c),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 6C4 3.79086 5.79086 2 8 2H8.08854C9.89557 2 11.4793 3.18456 12 4.89815C12.5208 3.18456 14.1044 2 15.9115 2H16C18.2091 2 20 3.79086 20 6C20 6.72857 19.8052 7.41165 19.4649 8H20C21.1046 8 22 8.89543 22 10V11.5C22 11.7761 21.7761 12 21.5 12H2.5C2.22386 12 2 11.7761 2 11.5V10C2 8.89543 2.89543 8 4 8H4.53513C4.19479 7.41165 4 6.72857 4 6ZM16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4H15.9115C14.9531 4 14.1177 4.65225 13.8853 5.58199L13.2808 8H16ZM10.1147 5.58199L10.7192 8H8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4H8.08854C9.0469 4 9.88229 4.65225 10.1147 5.58199Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M3 20C3 21.1046 3.89543 22 5 22H10.5C10.7761 22 11 21.7761 11 21.5V14.5C11 14.2239 10.7761 14 10.5 14H3.5C3.22386 14 3 14.2239 3 14.5V20Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M13.5 22C13.2239 22 13 21.7761 13 21.5V14.5C13 14.2239 13.2239 14 13.5 14H20.5C20.7761 14 21 14.2239 21 14.5V20C21 21.1046 20.1046 22 19 22H13.5Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })]
                })
            }
        },
        738707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreVerticalIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M15 14C16.1046 14 17 13.1046 17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8L5.5 8C4.94772 8 4.5 8.44772 4.5 9C4.5 9.55229 4.94772 10 5.5 10L8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12H6C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H7.25204C8.14012 17.4505 11.2723 20 15 20C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H7ZM15 16C17.2091 16 19 14.2091 19 12C19 9.79086 17.2091 8 15 8C12.7909 8 11 9.79086 11 12C11 14.2091 12.7909 16 15 16Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M2.5 10C3.05228 10 3.5 9.55228 3.5 9C3.5 8.44772 3.05228 8 2.5 8H2C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10H2.5Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M13.9571 5.45711L18.5429 10.0429C18.9334 10.4334 19.5666 10.4334 19.9571 10.0429L21.3358 8.66422C22.1168 7.88317 22.1168 6.61684 21.3358 5.83579L18.1642 2.66422C17.3831 1.88317 16.1168 1.88317 15.3358 2.66422L13.9571 4.0429C13.5666 4.43342 13.5666 5.06659 13.9571 5.45711Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M2.11104 20.1559L2.8382 15.9383C2.94347 15.3278 3.23518 14.7648 3.67326 14.3267L11.5429 6.45711C11.9334 6.06658 12.5666 6.06659 12.9571 6.45711L17.5429 11.0429C17.9334 11.4334 17.9334 12.0666 17.5429 12.4571L9.67326 20.3267C9.23518 20.7648 8.6722 21.0565 8.06166 21.1618L3.84409 21.889C2.82284 22.065 1.93496 21.1771 2.11104 20.1559Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })]
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M9.24787 3.34758C7.87224 2.45523 6 3.38448 6 4.95959V19.0404C6 20.6155 7.87224 21.5448 9.24787 20.6524L20.1013 13.612C21.2996 12.8347 21.2996 11.1653 20.1013 10.388L9.24787 3.34758Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM18 8C18 7.73478 17.8946 7.48043 17.7071 7.29289L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9024 4.68342 12.9024 5.31658 13.2929 5.70711L14.5858 7H13C9.68629 7 7 9.68629 7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 10.7909 10.7909 9 13 9H14.5858L13.2929 10.2929C12.9024 10.6834 12.9024 11.3166 13.2929 11.7071C13.6834 12.0976 14.3166 12.0976 14.7071 11.7071L17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.558 1.09366C10.1049 1.153 9.85283 1.62553 9.92194 2.07732C10.1003 3.24346 9.73459 4.27926 8.93869 4.60893C8.14294 4.93854 7.15214 4.46496 6.45371 3.51461C6.1831 3.1464 5.67085 2.99054 5.30837 3.26877C4.54272 3.85645 3.85659 4.54257 3.2689 5.3082C2.99066 5.67069 3.14651 6.18296 3.51474 6.45356C4.46513 7.152 4.93874 8.14283 4.60912 8.93859C4.27944 9.73453 3.24356 10.1002 2.07736 9.92181C1.62557 9.85269 1.15302 10.1047 1.09368 10.5579C1.03188 11.0298 1 11.5112 1 12C1 12.4888 1.03188 12.9702 1.09369 13.4421C1.15303 13.8953 1.62558 14.1473 2.07736 14.0782C3.24356 13.8998 4.27944 14.2655 4.60913 15.0614C4.93874 15.8572 4.46514 16.848 3.51475 17.5465C3.14653 17.8171 2.99067 18.3293 3.26891 18.6918C3.85661 19.4575 4.54276 20.1436 5.30842 20.7313C5.67091 21.0095 6.18315 20.8536 6.45376 20.4854C7.15219 19.5351 8.143 19.0615 8.93875 19.3911C9.73465 19.7208 10.1004 20.7566 9.922 21.9227C9.85289 22.3745 10.1049 22.847 10.5581 22.9063C11.03 22.9681 11.5113 23 12 23C12.4889 23 12.9703 22.9681 13.4423 22.9063C13.8955 22.8469 14.1475 22.3744 14.0784 21.9226C13.9 20.7565 14.2657 19.7207 15.0616 19.391C15.8574 19.0614 16.8481 19.5349 17.5465 20.4852C17.8172 20.8534 18.3294 21.0093 18.6919 20.731C19.4574 20.1434 20.1435 19.4573 20.7311 18.6918C21.0094 18.3293 20.8535 17.817 20.4853 17.5464C19.5349 16.848 19.0613 15.8572 19.3909 15.0614C19.7206 14.2655 20.7565 13.8998 21.9226 14.0782C22.3744 14.1473 22.847 13.8953 22.9063 13.4421C22.9681 12.9702 23 12.4888 23 12C23 11.5112 22.9681 11.0299 22.9063 10.5579C22.847 10.1048 22.3744 9.85271 21.9227 9.92183C20.7565 10.1002 19.7206 9.73451 19.391 8.9386C19.0614 8.14284 19.5349 7.15204 20.4853 6.4536C20.8535 6.183 21.0094 5.67074 20.7311 5.30825C20.1435 4.54271 19.4575 3.85666 18.692 3.26903C18.3295 2.99079 17.8172 3.14662 17.5466 3.51482C16.8482 4.46508 15.8574 4.9386 15.0617 4.60901C14.2658 4.27933 13.9001 3.24352 14.0785 2.07737C14.1476 1.6256 13.8956 1.15308 13.4424 1.09372C12.9704 1.0319 12.4889 1 12 1C11.5112 1 11.0299 1.03188 10.558 1.09366ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("path", {
                        d: "M12 3.00002C12 2.44773 11.5523 2.00002 11 2.00002H10.9399C10.6596 2.00002 10.3922 2.11766 10.2027 2.32429L5.91667 7.00002H3C2.44772 7.00002 2 7.44773 2 8.00002V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3.00002Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M15.0998 20.7538C14.5203 20.8922 14 20.4242 14 19.8285V19.7963C14 19.2987 14.3688 18.8844 14.8488 18.7533C17.8177 17.9424 20 15.2261 20 12C20 8.77399 17.8177 6.05766 14.8488 5.24676C14.3688 5.11566 14 4.70135 14 4.20377V4.17159C14 3.5758 14.5203 3.1078 15.0998 3.24629C19.0575 4.19217 22 7.75247 22 12C22 16.2476 19.0575 19.8079 15.0998 20.7538Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    }), (0, i.jsx)("path", {
                        d: "M15.1571 16.512C14.587 16.7851 14 16.3088 14 15.6766V15.5365C14 15.1127 14.2774 14.7482 14.6328 14.5172C15.4558 13.9823 16 13.0547 16 12C16 10.9453 15.4558 10.0178 14.6328 9.48286C14.2774 9.25188 14 8.88737 14 8.46355V8.32342C14 7.69121 14.587 7.21491 15.1571 7.488C16.8387 8.29338 18 10.0111 18 12C18 13.989 16.8387 15.7067 15.1571 16.512Z",
                        fill: "string" == typeof o ? o : o.css,
                        className: u
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var i = n("884691"),
                l = n("599110");
            let r = () => i.useContext(l.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var i = n("884691"),
                l = n("917351"),
                r = n.n(l);
            n("233736");
            var o = n("666020");

            function u(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, o.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, o.unsubscribeMembers)(t, e))
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
                l = n("913144"),
                r = n("568734"),
                o = n("299285"),
                u = n("49111"),
                s = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: r,
                            teamId: o
                        } = e, s = await i.default.post({
                            url: u.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: r,
                                guild_id: n,
                                team_id: o
                            }
                        }), a = s.body;
                        return null != n && null != r && l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: a
                        }), a
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await i.default.get({
                            url: u.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), o = r.body;
                        return l.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: o
                        }), o
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, r = await i.default.post({
                            url: u.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), o = r.body;
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let i = o.default.getApplication(e),
                                    l = (0, r.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, u.ApplicationFlags.EMBEDDED),
                                    s = l && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != i && !s) && !o.default.isFetchingApplication(e) && !o.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            l.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await i.default.get({
                                    url: u.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw l.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            l.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), i.default.get({
                            url: u.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (l.default.dispatch({
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
                l = n("884691"),
                r = n("516555"),
                o = n("65597"),
                u = n("206230"),
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
                c = l.createContext(a);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: E
                } = e, C = (0, r.useConfettiCannon)(n, s), _ = (0, o.default)([u.default], () => u.default.useReducedMotion), I = l.useMemo(() => _ ? a : {
                    confettiCanvas: n,
                    cannon: C,
                    createConfetti: (e, t) => C.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => C.createConfetti({
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
                        return C.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            l = arguments.length > 4 ? arguments[4] : void 0;
                        return C.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, l)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, d, C, n, _, E]);
                return (0, i.jsx)(c.Provider, {
                    value: I,
                    children: t
                })
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");
            let l = i.createContext(void 0);
            var r = l
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
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
                    return C
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return p
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                resetAllPending: function() {
                    return h
                },
                clearErrors: function() {
                    return N
                },
                setDisableSubmit: function() {
                    return v
                }
            }), n("70102");
            var i = n("872717"),
                l = n("913144"),
                r = n("54239"),
                o = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function s(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function a(e, t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function d() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function p() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function N() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, l, r, o, u, s, a, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var f = n("446674"),
                E = n("913144"),
                C = n("49111");
            let _ = C.FormStates.CLOSED,
                I = {},
                T = !1;

            function p() {
                _ = C.FormStates.CLOSED, I = {}, a = null, c = void 0, d = []
            }

            function S() {
                h(), N(), I = {}, _ = C.FormStates.OPEN
            }

            function h() {
                i = void 0, u = void 0
            }

            function N() {
                l = void 0, r = void 0, o = void 0, s = void 0
            }
            class v extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return I
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== o || void 0 !== u || void 0 !== s
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return o
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: r,
                        pendingPronouns: o,
                        pendingNickname: u,
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
                    return T
                }
            }
            v.displayName = "GuildIdentitySettingsStore";
            var g = new v(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    a = e.guild, _ = C.FormStates.OPEN, I = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: p,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    S(), p()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    a = e.guild, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = C.FormStates.SUBMITTING, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== C.FormStates.SUBMITTING) return !1;
                    _ = C.FormStates.OPEN, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = C.FormStates.OPEN, I = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: S,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: S,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    I = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    T = t
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
                l = n.n(i),
                r = n("872717"),
                o = n("913144"),
                u = n("851387"),
                s = n("36402"),
                a = n("49111");
            async function c(e) {
                try {
                    o.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await r.default.get({
                            url: a.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    o.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    o.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                s.default.shouldFetch(e) && await c(e)
            }
            let f = new l({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == f.get(i)) {
                    var l, o;
                    return f.set(i, !0), l = e, o = t, r.default.get({
                        url: a.Endpoints.GUILD_ROLE_MEMBER_IDS(l, o)
                    }).then(e => (u.default.requestMembersById(l, e.body, !1), e.body.length))
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
                l = n("913144");
            let r = {},
                o = {};
            class u extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? r[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = o[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var s = new u(l.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    r[t] = n, o[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, l = r[t];
                    if (null == l) return !1;
                    l[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, l = r[t];
                    if (null == l || null == l[n]) return !1;
                    let o = Object.keys(i).length;
                    l[n] += o
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = r[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = r[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == r[t] && (r[t] = {}), r[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete r[t.id], delete o[t.id]
                }
            })
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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

            function r() {
                return l.getCurrentConfig({
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
                    return r
                }
            });
            var i = n("862205");
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

            function r(e) {
                return l.getCurrentConfig({
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
                    return r
                }
            });
            var i = n("217145"),
                l = n("429682");

            function r(e) {
                return (0, i.isIFrameModalUserEnabled)() || (0, l.isIFrameModalForGuildEnabled)(e)
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("446674"),
                o = n("913144"),
                u = n("798609"),
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
            class C extends r.default.Store {
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
                    return l
                }
                getIFrameModalKey() {
                    return i
                }
            }
            C.displayName = "InteractionStore";
            var _ = new C(o.default, {
                LOGOUT: function() {
                    c = {}, d = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: l,
                        onCancel: r,
                        onSuccess: o,
                        onFailure: u
                    } = e;
                    null != n && (d[n] = t, f[t] = n), c[t] = {
                        state: a.InteractionState.QUEUED,
                        data: i,
                        onCreate: l,
                        onCancel: r,
                        onSuccess: o,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let l = c[n];
                    if (null == l || l.state !== a.InteractionState.QUEUED) return !1;
                    l.state = a.InteractionState.CREATED, null === (t = l.onCreate) || void 0 === t || t.call(l, i)
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
                        errorMessage: l
                    } = e;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r) return !1;
                    null === (t = r.onFailure) || void 0 === t || t.call(r, i, l), r.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? E(n) : c[n] = {
                        ...r,
                        state: a.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: l
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
                    l = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, l = void 0
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
            var i, l;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.QUEUED = 0] = "QUEUED", l[l.CREATED = 1] = "CREATED", l[l.FAILED = 2] = "FAILED"
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
                l = n("862205"),
                r = n("697218"),
                o = n("719923"),
                u = n("782340");
            let s = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                a = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: u,
                        collectOffOverride: s
                    } = n, a = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !s && (a ? i : r),
                        autoUnfurlReactionTooltip: u
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), o = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: u,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = a({
                        user: l,
                        config: o
                    }), E = u && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: u,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, l.createExperiment)({
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
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON_V2
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
                    return C
                },
                PaymentPortalBody: function() {
                    return _
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("627445"),
                s = n.n(u),
                a = n("817736"),
                c = n.n(a),
                d = n("77078"),
                f = n("642906"),
                E = n("990893");

            function C(e) {
                var t, n, r, u, a, c;
                let {
                    header: C,
                    isLargeModal: _,
                    stepProps: I
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
                    step: T,
                    stepConfigs: p,
                    setBodyNode: S,
                    setFooterNode: h,
                    setModalOverlayNode: N,
                    setReadySlideId: v
                } = (0, f.usePaymentContext)(), g = p.find(e => e.key === T);
                l.useEffect(() => {
                    N(null)
                }, [T, N]), s(null != g, "Unknown step for current payment flow.");
                let A = null !== (a = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== a && a,
                    L = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== _ && _ ? E.sliderBodyLarge : null == g ? void 0 : null === (r = g.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == g ? void 0 : null === (u = g.options) || void 0 === u ? void 0 : u.renderHeader) || void 0 === c || c ? C : null, g.renderStep(I), null == T || A ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: o(E.body, L),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: e => v(e),
                                children: p.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: o(E.sliderBody, R),
                                        ref: e => S(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => h(e)
                        }), (0, i.jsx)("div", {
                            ref: e => N(e)
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function I(e) {
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
            var l = n("748820"),
                r = n("77078"),
                o = n("112679"),
                u = n("55689"),
                s = n("855133"),
                a = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: C,
                    onComplete: _,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: T,
                    analyticsObject: p,
                    analyticsLocation: S,
                    analyticsSourceLocation: h,
                    isGift: N = !1,
                    giftMessage: v,
                    subscriptionTier: g,
                    trialId: A,
                    postSuccessGuild: L,
                    openInvoiceId: R,
                    applicationId: m,
                    referralTrialOfferId: U,
                    giftRecipient: O,
                    returnRef: P
                } = null != e ? e : {}, y = !1, M = (0, l.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: M,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: N,
                            giftMessage: v,
                            giftRecipient: O,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                l(), null == C || C(e), e && (null == I || I())
                            },
                            onComplete: () => {
                                y = !0, null == _ || _(), !N && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: T,
                            analyticsObject: p,
                            analyticsLocation: S,
                            analyticsSourceLocation: h,
                            trialId: A,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: m,
                            referralTrialOfferId: U,
                            returnRef: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && a.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : p,
                            source: h,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != A,
                            application_id: m,
                            location_stack: T
                        }), (0, o.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == C || C(y), y && (!N && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == I || I())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return o
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return a
                }
            });
            var i = n("913144");
            let l = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
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
                    return C
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return T
                }
            });
            var i = n("884691"),
                l = n("65597"),
                r = n("872717"),
                o = n("913144"),
                u = n("775433"),
                s = n("697218"),
                a = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let C = "nonSubscriber";
            async function _() {
                try {
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [C]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), l = s.default.getCurrentUser();
                p(l, i, t, n)
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, l.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), o = (0, l.default)([s.default], () => s.default.getCurrentUser());
                i.useEffect(() => {
                    p(o, r, t, n)
                }, [o, r, t, n])
            }

            function p(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), i && (!a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
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
                l = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = r;
            class u extends i.default.Store {
                initialize() {
                    o = r
                }
                getState() {
                    return o
                }
                shouldFetchPremiumLikelihood() {
                    return !o.isFetching && !o.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var s = new u(l.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    o.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    o.premiumLikelihood = t, o.fetched = !0, o.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    o.isFetching = !1
                },
                LOGOUT: function() {
                    o.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
            var r = l
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
                    return C
                },
                showRemoveBanner: function() {
                    return _
                }
            }), n("424973");
            var i = n("884691"),
                l = n("152584"),
                r = n("234251"),
                o = n("783142"),
                u = n("26989");

            function s(e) {
                return i.useMemo(() => {
                    let t = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let r = t[l],
                            o = null === (i = r[e]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function a(e, t) {
                (0, o.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, r.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectID)(void 0);
                    return
                }(0, l.setPendingProfileEffectID)(e)
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

            function C(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function _(e, t) {
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
                l = n("79112"),
                r = n("685665"),
                o = n("929423");
            n("424562");
            var u = n("49111"),
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
                } = (0, r.default)(), E = (0, i.useCallback)(() => {
                    null != t && (0, o.initGuildIdentitySettings)(t, null != c ? c : f), l.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
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
                    return l
                }
            });
            var i = n("49111");

            function l(e) {
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
                    return l
                },
                getStickerSendability: function() {
                    return a
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, l, r = n("991170"),
                o = n("719923"),
                u = n("24373"),
                s = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let a = (e, t, n) => {
                    if (null == t) return 2;
                    let i = o.default.canUseCustomStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) return 0;
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
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
                    return p
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                o = n("913144"),
                u = n("80507"),
                s = n("374363"),
                a = n("364685"),
                c = n("49111"),
                d = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let E = new u.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => a.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                C = () => {
                    a.default.isLoaded && E.compute()
                },
                _ = () => {
                    C()
                };

            function I() {
                var e;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class T extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (f = e), this.syncWith([a.default], _), this.syncWith([s.default], I)
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
            T.displayName = "StickersPersistedStore", T.persistKey = "StickersPersistedStoreV2";
            var p = new T(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), C()
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
                    return C
                },
                resetPendingProfileChanges: function() {
                    return _
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return h
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return v
                },
                setTryItOutProfileEffect: function() {
                    return g
                },
                setTryItOutBanner: function() {
                    return A
                },
                setTryItOutThemeColors: function() {
                    return L
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("448993"),
                o = n("884351"),
                u = n("845579"),
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
                let f = u.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = o.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (a = n.body.profile_effect) || void 0 === a ? void 0 : a.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new r.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new r.APIError(t);
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function C() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function _() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function h(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function v(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function g(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID",
                    profileEffectID: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT)
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function L(e) {
                l.default.dispatch({
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
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("77078"),
                s = n("760607"),
                a = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: c,
                    ...d
                } = e, f = l.Children.only(t), E = (0, u.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: o(a.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(s.default, {
                        ...d,
                        className: o(c, a.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: o(a.childContainer, {
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
                l = n("884691"),
                r = n("77078"),
                o = n("393414"),
                u = n("49111"),
                s = l.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: s,
                        onClick: a,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, E = l.useCallback(e => {
                        !e.repeat && ((e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, o.transitionTo)(n), null == a || a()), null == c || c(e))
                    }, [n, c, a]), C = l.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.transitionTo)(n), null == a || a())
                    }, [n, a]), _ = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: C,
                        onKeyPress: E,
                        ...f,
                        children: s
                    });
                    return (0, i.jsx)(r.FocusRing, {
                        ...d,
                        children: _
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return I
                },
                default: function() {
                    return p
                }
            });
            var i, l, r = n("37983"),
                o = n("884691"),
                u = n("414456"),
                s = n.n(u),
                a = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let C = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                _ = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class I extends o.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, r.jsx)(a.default.div, {
                        ...i,
                        className: s(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: C[t],
                            children: (0, r.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            I.defaultProps = {
                shineSize: "default"
            };
            let T = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: l,
                    pauseAnimation: u,
                    shineSize: a = "default",
                    shinePaused: f,
                    buttonShineClassName: C,
                    onlyShineOnHover: _,
                    ...T
                } = e, p = o.createRef(), S = (0, d.default)(p), h = !i && !l && !0 !== u && (!_ || S);
                return (0, r.jsxs)(c.Button, {
                    buttonRef: p,
                    ...T,
                    className: s(E.shinyButton, n),
                    disabled: i,
                    submitting: l,
                    children: [t, h ? (0, r.jsx)(I, {
                        shinePaused: f,
                        className: s(E.buttonShine, _ ? E.onlyShineOnHover : void 0, C),
                        shineSize: a
                    }) : null]
                })
            };
            T.ShineSizes = l;
            var p = T
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");

            function l(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, l = n ? t : 1, r = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: l,
                        minWidth: l,
                        height: r,
                        minHeight: r
                    }
                })
            }
            n("884691")
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("733154"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, r.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("505088"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        backgroundColor: u,
                        ...s
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != u ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: u
                        }) : null, (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: o,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
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
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("197801"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, r.SettingsIcon, void 0, {
                    size: 24
                })
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("998460"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("202909"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        663745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("738707"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("path", {
                                d: "M24 0v24H0V0z"
                            }), (0, i.jsx)("path", {
                                className: r,
                                fill: l,
                                d: "M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                            })]
                        })
                    })
                }, r.MoreVerticalIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("504318"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: r,
                            fill: l
                        })
                    })
                }, r.PencilIcon, void 0, {
                    size: 16
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("876726"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, r.PlayIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("424823"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, r.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("31745"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        className: r,
                        foreground: o
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: l,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, r.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("390300"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("287083"),
                o = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, r.StageIcon, void 0, {
                    size: 32
                })
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return u
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("244201"),
                o = n("471671");

            function u() {
                let {
                    windowId: e
                } = i.useContext(r.default);
                return (0, l.useStateFromStores)([o.default], () => o.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, l = n("817736"),
                r = n("118810");
            let o = {
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
                    let n = (0, l.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = o) {
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
                l = n("748820"),
                r = n("157590");
            let o = (0, l.v4)(),
                u = new Map,
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
                    t ? u.has(t) ? this.elementId = u.get(t) || "" : u.set(t, (0, l.v4)()) : this.elementId = o;
                    let a = this.getVisibilityObserverId();
                    !s.has(a) && s.set(a, new r.default({
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
                    return l.default
                }
            }), n("6268");
            var i = n("157590"),
                l = n("235855")
        }
    }
]);
//# sourceMappingURL=47252.6ee25acad39e567dbff7.js.map