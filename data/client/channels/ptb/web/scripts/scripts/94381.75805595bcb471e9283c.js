(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94381"], {
        606863: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        568131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchLibrary: function() {
                    return o
                },
                createTestModeLibraryApplications: function() {
                    return u
                },
                setActiveLaunchOptionId: function() {
                    return d
                }
            });
            var i = n("872717"),
                s = n("913144"),
                a = n("370999"),
                l = n("271560"),
                r = n("49111");
            async function o() {
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: r.Endpoints.LIBRARY,
                        oldFormErrors: !0
                    }, !1);
                    s.default.dispatch({
                        type: "LIBRARY_FETCH_SUCCESS",
                        libraryApplications: e.body
                    })
                } catch (e) {
                    s.default.dispatch({
                        type: "LIBRARY_FETCH_FAIL",
                        error: e
                    })
                }
            }
            async function u(e) {
                let t = e.primarySkuId;
                if (null == t) return;
                let n = await i.default.get({
                        url: r.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                        oldFormErrors: !0
                    }).then(e => e.body),
                    l = n.map(n => a.default.createForTestMode({
                        id: e.id,
                        skuId: t,
                        branch: n
                    }));
                s.default.dispatch({
                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                    libraryApplications: l
                })
            }

            function d(e, t, n) {
                s.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: e,
                    branchId: t,
                    launchOptionId: n
                })
            }
        },
        671306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenXIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: r
                    })]
                })
            }
        },
        388142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initiateChannelPrompts: function() {
                    return f
                },
                forcePrompt: function() {
                    return h
                },
                sendGamingStatsMessage: function() {
                    return p
                },
                updateGamingStats: function() {
                    return E
                }
            });
            var i = n("872717"),
                s = n("295426"),
                a = n("819689"),
                l = n("529805"),
                r = n("42203"),
                o = n("474643"),
                u = n("377253"),
                d = n("659500"),
                c = n("49111");

            function f(e) {
                i.default.post({
                    url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                i.default.post({
                    url: c.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }
            async function p(e, t, n) {
                await i.default.post({
                    url: c.Endpoints.SEND_GAMING_STATS(t),
                    body: {
                        message_reference: {
                            guild_id: e,
                            channel_id: t,
                            message_id: n
                        }
                    }
                }), T(t)
            }
            async function E(e) {
                let t = await i.default.patch({
                    url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = r.default.getChannel(e.channel_id);
                    null != n && ((0, l.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), T(n.id)), s.default.saveDraft(e.channel_id, t.text, o.DraftType.ChannelMessage)
                }
            }

            function T(e) {
                let t = u.default.getMessages(e);
                t.hasMoreAfter ? a.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return a
                },
                COMMON_CONFETTI_COLORS: function() {
                    return l
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return r
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return o
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return u
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var i = n("516555"),
                s = n("839491");
            let a = s,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                r = [n("606863"), a, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                o = 28,
                u = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: o
                    }
                },
                d = new i.Environment
        },
        696326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let s = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-03_onboarding_upsell_lifecycle",
                label: "Onboarding Upsell Lifecycle",
                defaultConfig: {
                    showLifecycleUpsells: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show new lifecycle upsells",
                    config: {
                        showLifecycleUpsells: !0
                    }
                }]
            });
            var a = s
        },
        179803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowGuildOnboardingUpsell: function() {
                    return _
                },
                dismissedGuildOnboardingUpsell: function() {
                    return S
                }
            }), n("222007");
            var i = n("866227"),
                s = n.n(i),
                a = n("151426"),
                l = n("801340"),
                r = n("10641"),
                o = n("872173"),
                u = n("374363"),
                d = n("305961"),
                c = n("696326"),
                f = n("380710"),
                h = n("49111"),
                p = n("994428");
            let E = [a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                T = [0, 1, 7];

            function _(e, t) {
                var n;
                let i = d.default.getGuilds(),
                    a = Object.entries(i).some(e => {
                        let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), s = n.hasFeature(h.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return i && s
                    });
                if (a || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let o = null === (n = u.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    p = null != o ? l.Timestamp.toDate(o) : void 0,
                    _ = null != p ? s().diff(p, "days") : null,
                    S = E.indexOf(t);
                if (-1 === S) return !1;
                let I = null == _ || _ > T[S];
                if (!I) return !1;
                let g = E.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
                if (!g) return !1;
                let {
                    showLifecycleUpsells: A
                } = c.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: a || !(0, f.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                });
                return A
            }

            function S(e, t) {
                let n = l.Timestamp.now();
                o.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
                    e.guildOnboardingUpsellDismissedAt = n
                }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, r.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: p.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }
        },
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("689988"),
                s = n("21121"),
                a = n("162771"),
                l = n("398604"),
                r = n("322224");
            let o = {},
                u = new Set,
                d = async e => {
                    let t = l.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!u.has(e)) try {
                            await r.default.getGuildEventsForCurrentUser(e), u.add(e)
                        } catch (e) {}
                    }
                };
            class c extends i.default {
                async getGuildEventUserCounts(e, t, n) {
                    let i = n.filter(n => null == o["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
                    if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== i.length) {
                        o["".concat(e, "-").concat(t)] = Date.now(), i.forEach(n => o["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                        try {
                            await r.default.fetchGuildEventUserCounts(e, t, i)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, n) {
                    return r.default.fetchUsersForGuildEvent(e, t, n)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    u.clear(), o = {};
                    let e = (0, s.isInMainTabsExperiment)(),
                        t = a.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = l.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    u.delete(t), delete o[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    u.delete(n), delete o[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, i = n.guild_scheduled_event, s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != i && null != s && d(s)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let n = l.default.getGuildScheduledEventsForGuild(t);
                    n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var f = new c
        },
        596512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var i = n("693566"),
                s = n.n(i),
                a = n("689988"),
                l = n("599110"),
                r = n("49111");
            class o extends a.default {
                handleMessageBecameVisible(e) {
                    let {
                        messageId: t
                    } = e;
                    if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
                    let n = this.recentViewTimes.get(t);
                    if (null != n && Date.now() - n < 6e4) return;
                    let i = setTimeout(() => {
                        delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
                    }, 1e3);
                    this.currentlyVisibleMessageTimers[t] = i
                }
                handleMessageLostVisibility(e) {
                    let t = this.currentlyVisibleMessageTimers[e];
                    null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
                }
                handleMessageListVisibilityChange(e) {
                    for (let t of e) this.handleMessageBecameVisible(t);
                    let t = new Set(e.map(e => e.messageId));
                    for (let e of Object.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e)
                }
                handleChannelSelect() {
                    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
                    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                }
                drainBuffer() {
                    for (let e of this.batchBuffer) l.default.track(r.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                        message_id: e.messageId,
                        channel_id: e.channelId,
                        guild_id: e.guildId,
                        source_channel_id: e.sourceChannelId,
                        source_guild_id: e.sourceGuildId
                    });
                    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                }
                bufferViewTrack(e) {
                    this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
                }
                constructor(...e) {
                    super(...e), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new s({
                        max: 500,
                        maxAge: 6e4
                    }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                        CHANNEL_SELECT: () => this.handleChannelSelect()
                    }
                }
            }
            var u = new o
        },
        935583: function(e, t, n) {
            "use strict";
            var i, s, a, l;
            n.r(t), n.d(t, {
                dirtyChars: function() {
                    return r
                },
                coalescePeriods: function() {
                    return o
                },
                EditState: function() {
                    return i
                },
                PomeloEntrypoints: function() {
                    return s
                },
                MAX_DISPLAY_NAME_LENGTH: function() {
                    return u
                },
                POMELO_KEYWORD: function() {
                    return d
                },
                CONTROL_CHARACTERS_CODE: function() {
                    return c
                },
                TIMEOUT_TIME: function() {
                    return f
                }
            });
            let r = /([^A-Za-z0-9_.]+)/g,
                o = /\.+/g;
            (a = i || (i = {})).NONE = "none", a.EDIT_DISPLAY_NAME = "display-name", a.EDIT_USERNAME = "username", a.PREVIEW = "preview", a.SUGGESTION = "suggestion", (l = s || (s = {})).APP_START = "app start", l.NOTICE = "notice", l.USER_SETTINGS = "user settings", l.USER_SETTINGS_EDIT = "user settings edit", l.YOU_TAB = "you tab";
            let u = 32,
                d = "pomelo",
                c = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
                f = 2e3
        },
        553257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return s
                },
                usePomeloEligibility: function() {
                    return a
                },
                getPomeloEligibility: function() {
                    return l
                }
            });
            var i = n("862205");
            let s = (0, i.createExperiment)({
                    kind: "user",
                    label: "Pomelo",
                    id: "2023-03_pomelo",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = () => {
                    let {
                        enabled: e
                    } = s.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                l = () => {
                    let {
                        enabled: e
                    } = s.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        363861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("77078");
            async function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                await (0, s.openModalLazy)(async () => {
                    let {
                        default: s
                    } = await n.el("892845").then(n.bind(n, "892845"));
                    return n => (0, i.jsx)(s, {
                        source: e,
                        oneClickFlow: t,
                        ...n
                    })
                })
            }
        },
        385649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("446674"),
                s = n("913144"),
                a = n("599110"),
                l = n("773336"),
                r = n("49111");
            let o = {
                    desktopType: l.isPlatformEmbedded ? r.DesktopNotificationTypes.ALL : r.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: r.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                u = o;

            function d(e, t) {
                !__OVERLAY__ && a.default.track(e, t)
            }

            function c(e) {
                let {
                    desktopType: t
                } = e;
                u.desktopType = t, d(r.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    notifications_enabled: t === r.DesktopNotificationTypes.ALL
                })
            }
            class f extends i.default.DeviceSettingsStore {
                initialize(e) {
                    u = {
                        ...o,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return u
                }
                getDesktopType() {
                    return u.desktopType
                }
                getTTSType() {
                    return u.ttsType
                }
                getDisabledSounds() {
                    return u.disabledSounds
                }
                getDisableAllSounds() {
                    return u.disableAllSounds
                }
                getDisableUnreadBadge() {
                    return u.disableUnreadBadge
                }
                getNotifyMessagesInSelectedChannel() {
                    return u.notifyMessagesInSelectedChannel
                }
                get taskbarFlash() {
                    return u.taskbarFlash
                }
                isSoundDisabled(e) {
                    return u.disableAllSounds || -1 !== u.disabledSounds.indexOf(e)
                }
            }
            f.displayName = "NotificationSettingsStore", f.persistKey = "notifications", f.migrations = [e => {
                let t = {
                    ...e
                };
                return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || r.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = l.isPlatformEmbedded ? r.DesktopNotificationTypes.ALL : r.DesktopNotificationTypes.NEVER), t
            }];
            var h = new f(s.default, {
                NOTIFICATIONS_SET_DESKTOP_TYPE: c,
                NOTIFICATIONS_SET_TTS_TYPE: function(e) {
                    let {
                        ttsType: t
                    } = e;
                    u.ttsType = t
                },
                NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
                    let {
                        sounds: t
                    } = e;
                    u.disabledSounds = t
                },
                NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
                    u.disableAllSounds = !u.disableAllSounds
                },
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t,
                        source: n
                    } = e;
                    d(r.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                        enabled: t === r.NotificationPermissionTypes.ENABLED,
                        source: n
                    }), t === r.NotificationPermissionTypes.BLOCKED ? c({
                        desktopType: r.DesktopNotificationTypes.NEVER
                    }) : t === r.NotificationPermissionTypes.ENABLED && c({
                        desktopType: r.DesktopNotificationTypes.ALL
                    })
                },
                NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
                    let {
                        disableUnreadBadge: t
                    } = e;
                    u.disableUnreadBadge = t
                },
                NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
                    let {
                        taskbarFlash: t
                    } = e;
                    u.taskbarFlash = t
                },
                NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
                    let {
                        notify: t
                    } = e;
                    u.notifyMessagesInSelectedChannel = t
                }
            })
        },
        427302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                o = n("145079"),
                u = n("86621"),
                d = n("506885"),
                c = n("981601"),
                f = n("145131"),
                h = n("49111"),
                p = n("123106");
            class E extends s.Component {
                render() {
                    let {
                        popoutOpen: e
                    } = this.state, {
                        user: t,
                        analyticsContext: n,
                        disablePopout: s,
                        guildId: a
                    } = this.props, l = {
                        location: {
                            ...n.location,
                            object: h.AnalyticsObjects.LIST_ITEM
                        }
                    };
                    return (0, i.jsx)(r.Popout, {
                        preload: () => (0, d.default)(t.id, t.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        renderPopout: e => (0, i.jsx)(c.default, {
                            ...e,
                            guildId: a,
                            userId: t.id,
                            analyticsParams: l
                        }),
                        position: "left",
                        onRequestClose: this.handleUserPopoutClose,
                        shouldShow: !s && e,
                        children: e => this.renderUserPopout(e)
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutOpen: !1
                    }, this.handleClickUser = () => {
                        let {
                            onPopoutOpen: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !this.state.popoutOpen
                        }), null == e || e()
                    }, this.handleUserPopoutClose = () => {
                        let {
                            onPopoutClose: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !1
                        }), null == e || e()
                    }, this.renderUserPopout = e => {
                        let {
                            className: t,
                            disablePopout: n,
                            onContextMenu: s,
                            user: a,
                            status: u,
                            textClassName: d,
                            nick: c,
                            guildId: h
                        } = this.props;
                        return (0, i.jsxs)(f.default, {
                            align: f.default.Align.CENTER,
                            className: l(p.memberListItem, t, {
                                [p.popoutDisabled]: n
                            }),
                            onContextMenu: s,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            onClick: this.handleClickUser,
                            children: [(0, i.jsx)(r.Avatar, {
                                src: a.getAvatarURL(h, 24),
                                className: p.avatar,
                                "aria-label": a.username,
                                size: r.AvatarSizes.SIZE_24,
                                status: u
                            }), (0, i.jsx)(r.Text, {
                                className: l(p.memberListItemTag, d),
                                variant: "text-sm/normal",
                                children: (0, i.jsx)(o.default, {
                                    user: a,
                                    nick: c,
                                    usernameClass: p.username,
                                    hideDiscriminator: !0
                                })
                            })]
                        })
                    }
                }
            }
            E.defaultProps = {
                disablePopout: !1
            };
            var T = (0, u.default)(E)
        },
        985622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("671306"),
                l = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: s
                        })
                    })
                }, a.ScreenXIcon, void 0, {
                    size: 24
                })
        }
    }
]);
//# sourceMappingURL=94381.75805595bcb471e9283c.js.map