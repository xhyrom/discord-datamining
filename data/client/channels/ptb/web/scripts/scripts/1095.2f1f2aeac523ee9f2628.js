(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1095"], {
        741148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                focus: function() {
                    return u
                },
                hidden: function() {
                    return r
                },
                resized: function() {
                    return o
                },
                fullscreenChange: function() {
                    return I
                },
                init: function() {
                    return d
                },
                unload: function() {
                    return a
                }
            });
            var E = n("917351"),
                i = n("913144"),
                l = n("563680"),
                _ = n("816454");

            function u(e, t) {
                i.default.dispatch({
                    type: "WINDOW_FOCUS",
                    windowId: (0, _.getWindowId)(e),
                    focused: t
                })
            }

            function r(e) {
                i.default.dispatch({
                    type: "WINDOW_HIDDEN",
                    windowId: (0, _.getWindowId)(e)
                })
            }
            let A = (0, E.memoize)(e => (0, E.debounce)((t, n) => {
                i.default.dispatch({
                    type: "WINDOW_RESIZED",
                    windowId: e,
                    width: t,
                    height: n
                })
            }, 100));

            function o(e) {
                let t = (0, _.getWindowId)(e),
                    n = A(t);
                n(e.innerWidth, e.innerHeight)
            }

            function I(e) {
                let t = (0, _.getWindowId)(e);
                i.default.dispatch({
                    type: "WINDOW_FULLSCREEN_CHANGE",
                    windowId: t,
                    isElementFullscreen: (0, l.isFullScreen)(null, e.document)
                })
            }

            function d(e) {
                let t = (0, _.getWindowId)(e),
                    n = e.document;
                i.default.dispatch({
                    type: "WINDOW_INIT",
                    windowId: t,
                    isElementFullscreen: (0, l.isFullScreen)(null, n),
                    focused: n.hasFocus(),
                    width: e.innerWidth,
                    height: e.innerHeight
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, _.getWindowId)(e)
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var E, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return E
                }
            }), (i = E || (E = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        684849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var E, i = n("666038");
            E = class extends i.default {
                constructor(e) {
                    super(), this.id = e.id || "", this.widgets = e.widgets || []
                }
            }
        },
        611310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var E, i = n("666038");
            E = class extends i.default {
                constructor(e) {
                    super(), this.id = e.id || "", this.layoutId = e.layoutId || "", this.type = e.type, this.anchor = {
                        left: 0,
                        top: 0,
                        ...e.anchor
                    }, this.size = {
                        width: 0,
                        height: 0,
                        ...e.size
                    }, this.pinned = !!e.pinned, this.zIndex = e.zIndex || 0, this.meta = {
                        ...e.meta
                    }
                }
            }
        },
        505507: function(e, t, n) {
            "use strict";
            let E, i;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973"), n("222007"), n("70102"), n("808653");
            var l, _, u = n("917351"),
                r = n.n(u),
                A = n("748820"),
                o = n("446674"),
                I = n("95410"),
                d = n("913144"),
                a = n("684849"),
                T = n("611310"),
                O = n("80687"),
                L = n("49111");
            (_ = l || (l = {})).REQUIRED = "REQUIRED", _.OPTIONAL = "OPTIONAL", _.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
            let s = "migrated",
                S = {
                    [L.OverlayWidgets.GUILDS]: {
                        minSize: {
                            width: 312,
                            height: 300
                        },
                        resizeX: !1,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL",
                        defaultSettings: {
                            anchor: {
                                left: .175,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: .65
                            },
                            pinned: !1
                        }
                    },
                    [L.OverlayWidgets.TEXT]: {
                        minSize: {
                            width: 430,
                            height: 300
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL",
                        defaultSettings: {
                            anchor: {
                                left: .26,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .565,
                                height: .65
                            },
                            pinned: !0
                        }
                    },
                    [L.OverlayWidgets.VOICE]: {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: "REQUIRED",
                        defaultSettings: {
                            anchor: {
                                left: .011,
                                top: .011,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    },
                    [L.OverlayWidgets.GUILDS_TEXT]: {
                        minSize: {
                            height: 300,
                            width: 610
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: "OPTIONAL_DEFAULT",
                        defaultSettings: {
                            anchor: {
                                left: .15,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .7,
                                height: .65
                            },
                            pinned: !1
                        }
                    },
                    [L.OverlayWidgets.LOBBY_VOICE]: {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: "REQUIRED",
                        defaultSettings: {
                            anchor: {
                                left: null,
                                top: .011,
                                bottom: null,
                                right: .011
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    }
                };

            function N(e, t) {
                let n = i[e];
                if (null == n) return !1;
                let l = E[n.layoutId];
                return null != l && t(n, l)
            }

            function c(e) {
                var t;
                return null === (t = S[e]) || void 0 === t ? void 0 : t.defaultSettings
            }
            class D extends o.default.PersistedStore {
                initialize(e) {
                    null != e && null != e.layouts && null != e.widgets ? (E = function(e) {
                        let t = {};
                        return r.forEach(e, (e, n) => {
                            t[n] = new a.default(e)
                        }), t
                    }(e.layouts), i = function(e) {
                        let t = {};
                        return r.forEach(e, (e, n) => {
                            t[n] = new T.default(e)
                        }), t
                    }(e.widgets)) : (E = {}, i = {});
                    let t = !1,
                        n = [];
                    r.forEach(S, (e, t) => {
                        "REQUIRED" === e.layoutPolicy && n.push(t)
                    }), r.forEach(E, (e, l) => {
                        let _ = this.getWidgetsForLayout(l),
                            u = !1;
                        for (let e of n) {
                            let n = _.find(t => t.type === e);
                            if (null != n) continue;
                            u = t = !0;
                            let E = (0, A.v4)();
                            n = new T.default({
                                ...this.getWidgetDefaultSettings(e),
                                type: e,
                                id: E,
                                layoutId: l,
                                zIndex: _.length
                            }), _.push(n), i = {
                                ...i,
                                [E]: n
                            }
                        }
                        u && (e = e.set("widgets", _.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })), E = {
                            ...E,
                            [l]: e
                        })
                    }), r.forEach(i, (e, n) => {
                        let l = E[e.layoutId];
                        (null == l || 0 > l.widgets.indexOf(n)) && (i = {
                            ...i
                        }, delete i[n], t = !0)
                    }), t && (this.persist(), this.emitChange())
                }
                getState() {
                    return {
                        layouts: E,
                        widgets: i
                    }
                }
                getLayouts() {
                    return E
                }
                getLayout(e) {
                    return E[e]
                }
                getAllWidgets() {
                    return i
                }
                getWidget(e) {
                    return i[e]
                }
                getWidgetsForLayout(e) {
                    let t = this.getLayout(e);
                    return null == t ? [] : t.widgets.reduce((e, t) => {
                        let n = this.getWidget(t);
                        return null != n && e.push(n), e
                    }, [])
                }
                getWidgetConfig(e) {
                    return S[e]
                }
                getWidgetDefaultSettings(e) {
                    return c(e)
                }
                getWidgetType(e) {
                    let t = i[e];
                    return null != t ? t.type : ""
                }
                getRegisteredWidgets() {
                    return S
                }
                getDefaultLayout(e) {
                    let t = [];
                    return r.forEach(this.getRegisteredWidgets(), (n, E) => {
                        switch (n.layoutPolicy) {
                            case "REQUIRED":
                            case "OPTIONAL_DEFAULT":
                                t.push({
                                    ...n.defaultSettings,
                                    type: E,
                                    id: (0, A.v4)(),
                                    layoutId: e
                                })
                        }
                    }), t
                }
            }
            D.displayName = "LayoutStore", D.persistKey = "LayoutStore", D.migrations = [() => {
                let e = {
                        ...I.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: E,
                        v: i
                    } = e;
                if (5 === i && t) {
                    let e = [],
                        i = t.map(t => {
                            let i = null != n ? n[t] : null,
                                l = null != E ? E[t] : null,
                                _ = {
                                    id: t,
                                    layoutId: s,
                                    type: t,
                                    anchor: i || {
                                        top: -1,
                                        left: -1,
                                        bottom: null,
                                        right: null
                                    },
                                    size: l || {
                                        width: -1,
                                        height: -1
                                    },
                                    pinned: !0,
                                    zIndex: 0
                                };
                            return e.push([_.id, _]), _.id
                        });
                    return {
                        layouts: [
                            [s, {
                                id: s,
                                widgets: i
                            }]
                        ],
                        widgets: e
                    }
                }
                return {
                    layouts: [],
                    widgets: []
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, E = new Set(Object.keys(L.OverlayWidgets)), i = Array.from(n).filter(e => {
                    let [t] = e;
                    return !E.has(t)
                }), l = Array.from(t).filter(e => {
                    let [t] = e;
                    return t !== s
                });
                return l.forEach(e => {
                    let [t, n] = e, E = null, l = null;
                    if (n.widgets.find(e => {
                            let n = i.find(n => {
                                let [E, i] = n;
                                return E === e && i.layoutId === t
                            });
                            return null != n && (null == l && n[1].type === L.OverlayWidgets.VOICE && (l = n[0]), null == E && n[1].type === L.OverlayWidgets.TEXT && (E = n[1].pinned), null != E && null != l || void 0)
                        }), E || null == l) return;
                    let _ = (0, A.v4)();
                    n.widgets = [l, _], i.push([_, {
                        ...c(L.OverlayWidgets.GUILDS_TEXT),
                        type: L.OverlayWidgets.GUILDS_TEXT,
                        id: _,
                        layoutId: t,
                        zIndex: 2
                    }])
                }), {
                    widgets: i,
                    layouts: l
                }
            }, e => {
                let {
                    layouts: t,
                    widgets: n
                } = e, E = t.reduce((e, t) => {
                    let [n, E] = t;
                    return e[n] = E, e
                }, {}), i = n.reduce((e, t) => {
                    let [n, E] = t;
                    return e[n] = E, e
                }, {});
                return {
                    layouts: E,
                    widgets: i
                }
            }];
            var C = new D(d.default, {
                LAYOUT_CREATE: function(e) {
                    let {
                        layoutId: t,
                        widgets: n,
                        defaultResolution: l
                    } = e;
                    if (null != E[t]) return !1;
                    let _ = [];
                    n.forEach((e, t) => {
                        let n = function(e) {
                                let t = E[s];
                                if (null != t)
                                    for (let n of t.widgets) {
                                        let t = i[n];
                                        if (null != t && t.type === e) return t
                                    }
                                return null
                            }(e.type),
                            u = {
                                ...e,
                                zIndex: t
                            };
                        "" === u.id && (u.id = (0, A.v4)()), null != n && (u.pinned = n.pinned, -1 !== n.anchor.left && (u.anchor = (0, O.getAnchorPercentageFromLayoutSize)(n.anchor, l)), -1 !== n.size.width && (u.size = (0, O.getSizePercentageFromSize)(n.size, l))), i = {
                            ...i,
                            [u.id]: new T.default(u)
                        }, _.push(u.id)
                    }), E = {
                        ...E,
                        [t]: new a.default({
                            id: t,
                            widgets: _
                        })
                    }
                },
                LAYOUT_SET_PINNED: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return N(t, (e, t) => {
                        (function(e) {
                            i = {
                                ...i,
                                [e.id]: e.set("pinned", !e.pinned)
                            }
                        })(e)
                    })
                },
                LAYOUT_UPDATE_WIDGET: function(e) {
                    let {
                        widgetId: t,
                        anchor: n,
                        size: E
                    } = e;
                    return N(t, (e, t) => (function(e, t, n) {
                        i = {
                            ...i,
                            [e.id]: e.merge({
                                anchor: t,
                                size: n
                            })
                        }
                    })(e, n, E))
                },
                LAYOUT_SET_TOP_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    return N(t, (e, t) => (function(e, t) {
                        let n = function(e) {
                            let t = [];
                            return e.widgets.forEach(e => {
                                let n = i[e];
                                null != n && t.push(n)
                            }), t
                        }(e);
                        n.sort((e, t) => e.zIndex - t.zIndex);
                        let E = n.findIndex(e => e.id === t);
                        if (E === n.length - 1) return !1;
                        n.push(n.splice(E, 1)[0]);
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            (function(e, t) {
                                i = {
                                    ...i,
                                    [e.id]: e.set("zIndex", t)
                                }
                            })(t, e)
                        }
                        return !0
                    })(t, e.id))
                },
                LAYOUT_DELETE_WIDGET: function(e) {
                    let {
                        widgetId: t
                    } = e;
                    i = {
                        ...i
                    }, delete i[t], r.forEach(E, (e, n) => {
                        if (n === s) return;
                        let i = e.widgets.indexOf(t);
                        if (i >= 0) {
                            let t = [...e.widgets];
                            t.splice(i, 1), E = {
                                ...E,
                                [n]: e.set("widgets", t)
                            }
                        }
                    })
                },
                LAYOUT_DELETE_ALL_WIDGETS: function(e) {
                    let {
                        layoutId: t
                    } = e, n = E[t];
                    if (null == n) return !1;
                    n.widgets.forEach(e => {
                        i = {
                            ...i
                        }, delete i[e]
                    }), E = {
                        ...E,
                        [n.id]: n.set("widgets", [])
                    }
                },
                LAYOUT_CREATE_WIDGETS: function(e) {
                    let {
                        widgetConfigs: t
                    } = e;
                    t.forEach(e => {
                        let t = new T.default(e),
                            n = E[t.layoutId];
                        if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length), i = {
                            ...i,
                            [t.id]: t
                        };
                        let l = [...n.widgets, t.id];
                        E = {
                            ...E,
                            [n.id]: n.set("widgets", l)
                        }
                    })
                }
            })
        },
        901165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007"), n("70102");
            var E = n("446674"),
                i = n("95410"),
                l = n("913144"),
                _ = n("741148"),
                u = n("121338"),
                r = n("116949"),
                A = n("233069"),
                o = n("271938"),
                I = n("42203"),
                d = n("923959"),
                a = n("505507"),
                T = n("162771"),
                O = n("773336"),
                L = n("50885"),
                s = n("819068"),
                S = n("471671"),
                N = n("49111"),
                c = n("6791");
            let D = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: N.OverlayDisplayUsers.ALWAYS,
                    displayNameMode: N.OverlayDisplayNames.ALWAYS,
                    avatarSizeMode: N.OverlayAvatarSizes.LARGE,
                    notificationPositionMode: N.OverlayNotificationPositions.TOP_LEFT,
                    textChatNotifications: N.OverlayNotificationTextChatTypes.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    showKeybindIndicators: !0,
                    textWidgetOpacity: c.OpacityBounds.LOWER
                }),
                C = null,
                f = {},
                h = null,
                R = new Set,
                U = !1,
                g = null,
                P = !1,
                p = !1,
                y = new Set,
                M = !1;

            function G(e) {
                let t = f[e];
                return null == t && (t = f[e] = {
                    ...D
                }), t
            }
            let Y = {
                    ...D
                },
                V = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
                w = new Set([...V.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

            function W() {
                if (!__OVERLAY__) return !1;
                let e = C === (0, s.getPID)(),
                    t = R.has((0, s.getPID)()) || y.size > 0;
                e && t ? (0, _.focus)(window, !0) : (0, _.focus)(window, !1)
            }

            function H() {
                if (C !== (0, s.getPID)()) return !1;
                y.clear()
            }

            function v(e) {
                let t = (0, s.getPID)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case N.OverlayEventTypes.STORAGE_SYNC:
                        E.default.PersistedStore.initializeAll(e.states);
                        break;
                    case N.OverlayEventTypes.DISPATCH:
                        null != e.payloads && (P = !0, e.payloads.forEach(e => (function(e) {
                            var t, n, E, i, _, o;
                            if ("OVERLAY_INITIALIZE" === e.type && (null == (o = e).version && 1 === s.OVERLAY_VERSION || o.version === s.OVERLAY_VERSION || (l.default.dispatch({
                                    type: "OVERLAY_INCOMPATIBLE_APP"
                                }), (0, u.disconnect)(), 0))) p = !0;
                            if (p) switch (e.type) {
                                case "CHANNEL_CREATE":
                                case "THREAD_CREATE":
                                case "THREAD_UPDATE":
                                case "CHANNEL_DELETE":
                                case "THREAD_DELETE":
                                    let I = (0, A.createChannelRecord)(e.channel);
                                    if (!A.ALL_CHANNEL_TYPES.has(I.type)) break;
                                    l.default.dispatch({
                                        type: e.type,
                                        channel: I
                                    });
                                    break;
                                case "CHANNEL_UPDATES":
                                    l.default.dispatch({
                                        type: e.type,
                                        channels: e.channels.map(e => (0, A.createChannelRecord)(e))
                                    });
                                    break;
                                case "CONNECTION_OPEN_SUPPLEMENTAL":
                                    e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, A.createChannelRecord)(e)), l.default.dispatch(e);
                                    break;
                                case "THREAD_LIST_SYNC":
                                    l.default.dispatch({
                                        ...e,
                                        threads: e.threads.map(e => (0, A.createChannelRecord)(e))
                                    });
                                    break;
                                case "GUILD_CREATE":
                                    let d = e => (0, A.createChannelRecord)(e),
                                        a = e.guild;
                                    a.channels = null !== (i = null === (n = a.channels) || void 0 === n ? void 0 : n.map(d)) && void 0 !== i ? i : null, a.threads = null === (E = a.threads) || void 0 === E ? void 0 : E.map(d), null != a.channelUpdates && (a.channelUpdates.writes = null === (_ = a.channelUpdates.writes) || void 0 === _ ? void 0 : _.map(d)), l.default.dispatch({
                                        type: "GUILD_CREATE",
                                        guild: a
                                    });
                                    break;
                                case "USER_SETTINGS_PROTO_UPDATE":
                                    l.default.dispatch({
                                        ...e,
                                        settings: {
                                            proto: (0, r.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                                            type: e.settings.type
                                        }
                                    });
                                    break;
                                default:
                                    l.default.dispatch(e)
                            }
                        })(e)), P = !1)
                }
            }
            class B extends E.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(o.default), this.syncWith([o.default], () => {
                            let e = o.default.getId();
                            Y = null != e ? G(e) : {
                                ...D
                            }
                        }), __OVERLAY__ && (O.isPlatformEmbedded && L.default.requireModule("discord_overlay2"), R.delete((0, s.getPID)())), null != e) {
                        f = e;
                        let t = o.default.getId();
                        null != t && (null == (Y = G(t)).textChatNotifications && (Y.textChatNotifications = D.textChatNotifications), null == Y.textWidgetOpacity && (Y.textWidgetOpacity = D.textWidgetOpacity))
                    }
                }
                getState() {
                    return f
                }
                isUILocked(e) {
                    return !R.has(e)
                }
                isInstanceUILocked() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !R.has((0, s.getPID)())
                }
                isInstanceFocused() {
                    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return C === (0, s.getPID)()
                }
                isFocused(e) {
                    return C === e
                }
                isPinned(e) {
                    let t = a.default.getLayout(s.OVERLAY_LAYOUT_ID);
                    if (null != t) {
                        let n = t.widgets.find(t => {
                            let n = a.default.getWidget(t);
                            return null != n && n.type === e && !!n.pinned || !1
                        });
                        return null != n
                    }
                    return !1
                }
                getSelectedGuildId() {
                    return Y.selectedGuildId
                }
                getSelectedChannelId() {
                    return Y.selectedChannelId
                }
                getSelectedCallId() {
                    return h
                }
                getDisplayUserMode() {
                    return Y.displayUserMode
                }
                getDisplayNameMode() {
                    return Y.displayNameMode
                }
                getAvatarSizeMode() {
                    return Y.avatarSizeMode
                }
                getNotificationPositionMode() {
                    return Y.notificationPositionMode
                }
                getTextChatNotificationMode() {
                    return Y.notificationPositionMode === N.OverlayNotificationPositions.DISABLED ? N.OverlayNotificationTextChatTypes.DISABLED : Y.textChatNotifications
                }
                get showKeybindIndicators() {
                    return null == Y.showKeybindIndicators || Y.showKeybindIndicators
                }
                getDisableExternalLinkAlert() {
                    return Y.disableExternalLinkAlert
                }
                getFocusedPID() {
                    return C
                }
                get initialized() {
                    return p
                }
                get incompatibleApp() {
                    return U
                }
                getActiveRegions() {
                    return y
                }
                getTextWidgetOpacity() {
                    return Y.textWidgetOpacity
                }
                isPreviewingInGame() {
                    return M
                }
            }
            B.displayName = "OverlayStore", B.persistKey = "OverlayStoreV2", B.migrations = [() => {
                let e = {
                        ...i.default.get("OverlayStore")
                    },
                    {
                        pinnedWidgets: t,
                        positions: n,
                        sizes: E,
                        v: l,
                        ..._
                    } = e;
                return {
                    ...D,
                    ...5 === l ? _ : null
                }
            }, e => {
                let t = o.default.getId();
                if (null == e || null == t) return {};
                let n = {
                    [t]: {
                        ...e
                    }
                };
                return n
            }];
            var F = new B(l.default, {
                LOGOUT: function(e) {
                    !e.isSwitchingAccount && (f = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in f && delete f[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    R.clear()
                },
                OVERLAY_START_SESSION: function() {
                    l.default.addInterceptor(e => {
                        if (P || !w.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            let {
                                guildId: t,
                                channelId: n
                            } = e;
                            return null != n && ((0, u.send)({
                                type: N.OverlayEventTypes.DISPATCH,
                                pid: (0, s.getPID)(),
                                token: (0, s.getRPCAuthToken)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === N.ME ? null : t,
                                    channelId: n,
                                    context: N.CURRENT_APP_CONTEXT
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            }), !1)
                        }
                        return (0, u.send)({
                            type: N.OverlayEventTypes.DISPATCH,
                            pid: (0, s.getPID)(),
                            token: (0, s.getRPCAuthToken)(),
                            payloads: [e]
                        }), !V.has(e.type)
                    }), (0, u.setReceiveEventHandler)(v, (0, s.getRPCAuthToken)()), (0, u.connect)(), (0, u.send)({
                        type: N.OverlayEventTypes.CONNECT,
                        pid: (0, s.getPID)(),
                        token: (0, s.getRPCAuthToken)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        focusedPID: t
                    } = e;
                    C = t
                },
                OVERLAY_READY: function() {
                    let e = Y.selectedGuildId,
                        t = Y.selectedChannelId;
                    if (null != e && (!d.default.hasChannels(e) || null != t && !d.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == I.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = T.default.getGuildId()), null != e && null == t) {
                        let n = d.default.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    Y.selectedGuildId = e, Y.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    let {
                        pid: t
                    } = e;
                    C = t, W()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    Y.selectedGuildId = t, Y.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    let {
                        callId: t
                    } = e;
                    h = t
                },
                CALL_DELETE: function() {
                    h = null
                },
                LAYOUT_CREATE: function() {},
                OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.displayNameMode = t
                },
                OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.displayUserMode = t
                },
                OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.avatarSizeMode = t
                },
                OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.notificationPositionMode = t
                },
                OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    Y.textChatNotifications = t
                },
                OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
                    let {
                        shouldShow: t
                    } = e;
                    Y.showKeybindIndicators = t
                },
                OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
                    let {
                        opacity: t
                    } = e, n = Y.textWidgetOpacity !== t;
                    return Y.textWidgetOpacity = t, n
                },
                OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
                    Y.disableExternalLinkAlert = !0
                },
                OVERLAY_INCOMPATIBLE_APP: function() {
                    U = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    let {
                        locked: t,
                        pid: n
                    } = e;
                    t ? R.delete(n) : R.add(n), H(), W(), M = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    let {
                        region: t
                    } = e;
                    if (C !== (0, s.getPID)() || y.has(t)) return !1;
                    y.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: H,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    M = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        let e = S.default.windowSize();
                        !(0, s.validResolution)(e) && (M = !1)
                    }
                }
            })
        },
        80687: function(e, t, n) {
            "use strict";

            function E(e) {
                return Math.max(Math.min(e, 1), 0)
            }

            function i(e, t) {
                let {
                    top: n,
                    bottom: i,
                    left: l,
                    right: _
                } = e;
                return {
                    top: null != n ? Math.floor(E(n) * t.height) : null,
                    left: null != l ? Math.floor(E(l) * t.width) : null,
                    bottom: null != i ? Math.floor(E(i) * t.height) : null,
                    right: null != _ ? Math.floor(E(_) * t.width) : null
                }
            }

            function l(e, t) {
                let {
                    width: n,
                    height: i
                } = e;
                return {
                    width: "auto" === n ? n : Math.floor(E(n) * t.width),
                    height: "auto" === i ? i : Math.floor(E(i) * t.height)
                }
            }

            function _(e, t) {
                let {
                    top: n,
                    bottom: i,
                    left: l,
                    right: _
                } = e;
                return {
                    top: null != n ? E(n / t.height) : null,
                    left: null != l ? E(l / t.width) : null,
                    bottom: null != i ? E(i / t.height) : null,
                    right: null != _ ? E(_ / t.width) : null
                }
            }

            function u(e, t) {
                let {
                    width: n,
                    height: E
                } = e;
                return {
                    width: "auto" === n ? n : n / t.width,
                    height: "auto" === E ? E : E / t.height
                }
            }

            function r(e, t, n, E, i) {
                let {
                    top: l,
                    bottom: _,
                    left: u,
                    right: r
                } = e;
                if (null == l && null == _ ? (l = 0, _ = n - i) : null == l && null != _ ? l = n - (_ + i) : null != l && (_ = n - (l + i)), null == u && null == r ? (u = 0, r = t - E) : null == u && null != r ? u = t - (r + E) : null == r && null != u && (r = t - (u + E)), null == l || null == _ || null == u || null == r) throw Error("Logically this can never happen based on our if/else statements");
                return {
                    top: l,
                    left: u,
                    bottom: _,
                    right: r
                }
            }

            function A(e) {
                let {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                } = e;
                return 0 === t || t <= E ? E = null : t = null, 0 === n || n <= i ? i = null : n = null, {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                }
            }

            function o(e) {
                let {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                } = e;
                return E < 0 && (t += E, E = 0), t < 0 && (E += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
                    top: t,
                    left: n,
                    bottom: E,
                    right: i
                }
            }

            function I(e, t, n) {
                e = i(e, n);
                let {
                    width: E,
                    height: _
                } = l(t, n);
                return E = "string" == typeof E ? 0 : E, _ = "string" == typeof _ ? 0 : _, r(e, n.width, n.height, E, _)
            }

            function d(e, t, n) {
                let {
                    top: E,
                    left: i
                } = e, {
                    x: l,
                    y: I
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: d,
                    height: a
                } = t, T = A(o(r({
                    top: E + I,
                    left: i + l,
                    bottom: null,
                    right: null
                }, n.width, n.height, "number" == typeof d ? d : 0, "number" == typeof a ? a : 0)));
                return [_(T, n), u(t, n)]
            }

            function a(e, t, n) {
                let {
                    top: E,
                    right: i
                } = e, {
                    x: l,
                    y: I
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    x: 0,
                    y: 0
                }, {
                    width: d,
                    height: a
                } = t, T = A(o(r({
                    top: E + I,
                    left: null,
                    bottom: null,
                    right: i - l
                }, n.width, n.height, "number" == typeof d ? d : 0, "number" == typeof a ? a : 0)));
                return [_(T, n), u(t, n)]
            }
            n.r(t), n.d(t, {
                getAnchorCoordsFromLayoutSize: function() {
                    return i
                },
                getSizeFromLayoutSize: function() {
                    return l
                },
                getAnchorPercentageFromLayoutSize: function() {
                    return _
                },
                getSizePercentageFromSize: function() {
                    return u
                },
                getFullCoordsFromAnchorCoords: function() {
                    return r
                },
                getAnchorCoordsFromFullCoords: function() {
                    return A
                },
                fitFullCoordsToContainer: function() {
                    return o
                },
                getFullCoordsFromLayoutSize: function() {
                    return I
                },
                getLeftWidgetSpecs: function() {
                    return d
                },
                getRightWidgetSpecs: function() {
                    return a
                }
            }), n("70102")
        }
    }
]);
//# sourceMappingURL=1095.2f1f2aeac523ee9f2628.js.map