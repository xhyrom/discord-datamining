(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93464"], {
        630086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                l = {
                    setSection(e) {
                        i.default.dispatch({
                            type: "FRIENDS_SET_SECTION",
                            section: e
                        })
                    },
                    setInitialSection(e) {
                        i.default.dispatch({
                            type: "FRIENDS_SET_INITIAL_SECTION",
                            section: e
                        })
                    }
                }
        },
        370492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateDevToolsSettings: function() {
                    return a
                },
                toggleDisplayDevTools: function() {
                    return s
                },
                clearAnalyticsLog: function() {
                    return d
                }
            });
            var i = n("913144"),
                l = n("584369");

            function a(e) {
                i.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function s() {
                a({
                    displayTools: !l.default.displayTools
                })
            }

            function d() {
                i.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        584369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return d
                },
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("95410"),
                a = n("913144"),
                s = n("9503");
            let d = 360,
                u = {
                    devToolsEnabled: !1,
                    sidebarWidth: d,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                };
            class r extends i.default.DeviceSettingsStore {
                initialize(e) {
                    u = null != e ? e : u, a.default.actionLogger.persist = this.devToolsEnabled
                }
                getUserAgnosticState() {
                    return u
                }
                get devToolsEnabled() {
                    return u.devToolsEnabled
                }
                get sidebarWidth() {
                    return this.displayTools ? u.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    var e;
                    return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null
                }
                get displayTools() {
                    return this.devToolsEnabled && u.displayTools
                }
                get showDevWidget() {
                    return this.devToolsEnabled && u.showDevWidget
                }
                get devWidgetPosition() {
                    return u.devWidgetPosition
                }
            }
            r.displayName = "DevToolsSettingsStore", r.persistKey = "DevToolsSettingsStore";
            var o = new r(a.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    (u.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (a.default.actionLogger.persist = e.settings.devToolsEnabled, l.default.set(s.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), u = {
                        ...u,
                        ...e.settings
                    })
                }
            })
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return p
                },
                useMostRecentForumMessage: function() {
                    return T
                },
                preloadForumThreads: function() {
                    return I
                }
            }), n("222007");
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                s = n("872717"),
                d = n("913144"),
                u = n("42203"),
                r = n("670902"),
                o = n("349778"),
                c = n("430475"),
                f = n("324261"),
                g = n("49111");
            class E {
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !l.isEmpty(this._set)
                }
                next() {
                    return Object.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let _ = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), _.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                    constructor() {
                        this.requested = new E(() => new Set)
                    }
                },
                m = null;

            function h(e, t) {
                let n = (0, o.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function S(e, t) {
                return !e && null == t
            }

            function p(e) {
                var t, n;
                let {
                    loaded: i,
                    firstMessage: l
                } = (0, a.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), s = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != s && (t = i, n = l, !t && null == n)) N(s, e.id);
                return {
                    loaded: i,
                    firstMessage: l
                }
            }

            function T(e, t) {
                let {
                    loaded: n,
                    message: i
                } = (0, a.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && h(t.guild_id, t.id) && N(e, t.id), {
                    loaded: n,
                    mostRecentMessage: i
                }
            }

            function A(e, t) {
                let n = !1;
                t.forEach(t => {
                    var i, l;
                    let {
                        loaded: a,
                        firstMessage: s
                    } = c.default.getMessage(t);
                    if (i = a, l = s, !i && null == l || h(e.guild_id, t)) _.request(e.id, t), n = !0
                }), n && null == m && (m = setTimeout(C, 0))
            }

            function I(e) {
                A(e, (0, r.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function N(e, t) {
                if (_.hasRequested(e.id, t)) return;
                let n = (0, r.computeThreadIdsSnapshot)(e.id),
                    i = n.findIndex(e => e === t),
                    l = n.slice(i, i + 5).filter(t => !_.hasRequested(e.id, t));
                A(e, l)
            }
            async function C() {
                try {
                    for (; _.hasNext();) await v(_.next())
                } finally {
                    m = null
                }
            }
            async function v(e) {
                let t = _.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let i = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == i) return;
                    let {
                        body: {
                            threads: l
                        }
                    } = await s.default.post({
                        url: g.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    d.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: i,
                        threads: l
                    })
                } catch (e) {} finally {
                    _.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("446674"),
                l = n("913144"),
                a = n("692038"),
                s = n("42203"),
                d = n("697218"),
                u = n("449008"),
                r = n("299039");
            let o = {};

            function c(e) {
                var t;
                let n = s.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let i = o[n.id];
                return r.default.compare(null == e ? void 0 : e.id, null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, a.createMessageRecord)(t);
                return o[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function g(e) {
                return o[e]
            }

            function E(e) {
                var t;
                return null === (t = o[e]) || void 0 === t ? void 0 : t.message
            }

            function _(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class m extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, d.default)
                }
                getMessageState(e) {
                    return !(e in o) && (o[e] = {
                        loaded: !1,
                        message: null
                    }), o[e]
                }
            }
            m.displayName = "ForumPostRecentMessageStore";
            var h = new m(l.default, {
                CONNECTION_OPEN: function() {
                    o = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return o[e]
                            }(e),
                            i = E(e);
                        null != n && null != i && (o[e] = {
                            ...n,
                            message: (0, a.updateMessageRecord)(i, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = E(e);
                        return (null == n ? void 0 : n.id) === t && (delete o[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) f(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: _,
                LOAD_THREADS_SUCCESS: _
            })
        },
        658536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("913144"),
                l = n("689988"),
                a = n("26989"),
                s = n("697218"),
                d = n("509");
            let u = null,
                r = () => {
                    let e = a.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, a.getGuildIdFromCommunicationDisabledUserKey)(t),
                            i = (0, a.getUserIdFromCommunicationDisabledUserKey)(t),
                            l = e[t];
                        !(0, d.isCommunicationDisabled)(l) && o(n, i)
                    })
                },
                o = (e, t) => {
                    var n, l, u, r, o, c;
                    let f = a.default.getMember(e, t),
                        g = s.default.getUser(t);
                    if (null == f || null == g || (0, d.isMemberCommunicationDisabled)(f)) return;
                    let E = {
                        ...f,
                        guildId: e,
                        nick: null !== (n = f.nick) && void 0 !== n ? n : g.username,
                        avatar: null !== (l = f.avatar) && void 0 !== l ? l : void 0,
                        premiumSince: null !== (u = f.premiumSince) && void 0 !== u ? u : void 0,
                        isPending: null !== (r = f.isPending) && void 0 !== r && r,
                        user: {
                            ...g,
                            email: null !== (o = g.email) && void 0 !== o ? o : void 0,
                            phone: null !== (c = g.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    i.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...E
                    })
                };
            class c extends l.default {
                _initialize() {
                    u = setInterval(() => r(), 1e4)
                }
                _terminate() {
                    clearInterval(u)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var f = new c
        },
        696326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
            var a = l
        },
        179803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowGuildOnboardingUpsell: function() {
                    return h
                },
                dismissedGuildOnboardingUpsell: function() {
                    return S
                }
            }), n("222007");
            var i = n("866227"),
                l = n.n(i),
                a = n("151426"),
                s = n("801340"),
                d = n("10641"),
                u = n("872173"),
                r = n("374363"),
                o = n("305961"),
                c = n("696326"),
                f = n("380710"),
                g = n("49111"),
                E = n("994428");
            let _ = [a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                m = [0, 1, 7];

            function h(e, t) {
                var n;
                let i = o.default.getGuilds(),
                    a = Object.entries(i).some(e => {
                        let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), l = n.hasFeature(g.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return i && l
                    });
                if (a || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let u = null === (n = r.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
                    E = null != u ? s.Timestamp.toDate(u) : void 0,
                    h = null != E ? l().diff(E, "days") : null,
                    S = _.indexOf(t);
                if (-1 === S) return !1;
                let p = null == h || h > m[S];
                if (!p) return !1;
                let T = _.find(e => !(0, d.isDismissibleContentDismissed)(e)) === t;
                if (!T) return !1;
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
                let n = s.Timestamp.now();
                u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
                    e.guildOnboardingUpsellDismissedAt = n
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, d.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: E.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return E
                },
                updateReminderDueAt: function() {
                    return _
                },
                toggleMessageReminders: function() {
                    return m
                },
                completeMessageReminders: function() {
                    return h
                },
                cleanupMessageReminders: function() {
                    return S
                },
                fetchAndUpdateSavedMessages: function() {
                    return A
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("679653"),
                s = n("42203"),
                d = n("305961"),
                u = n("27618"),
                r = n("697218"),
                o = n("599110"),
                c = n("520899"),
                f = n("988864"),
                g = n("49111");

            function E(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), T([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = s.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = d.default.getGuild(t.guild_id),
                            i = "",
                            l = (0, a.computeChannelName)(t, r.default, u.default, !0);
                        if (t.isPrivate()) i = l;
                        else if (t.isThread()) {
                            let e = s.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, a.computeChannelName)(e, r.default, u.default, !0);
                            i = "".concat(n, " > ").concat(l)
                        } else i = l;
                        let o = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: i,
                            messageSummary: o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function _(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let n = c.default.getMessageReminders(),
                    i = n.find(t => t.messageId === e);
                null != i && T([{
                    ...i,
                    savedAt: new Date,
                    dueAt: t
                }], [i])
            }

            function m(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), l.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function h(e) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let t = c.default.getMessageReminders();
                T([], t.filter(t => t.messageId === e))
            }

            function S() {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && T([], e.filter(e => e.complete))
            }

            function p(e) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), l.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function T(e, t) {
                (0 !== e.length || 0 !== t.length) && i.default.post({
                    url: g.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(f.savedMessageToServer),
                        removed: t.map(f.savedMessageToServer)
                    }
                }).then(e => {
                    p(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }

            function A() {
                return c.default.recentlyFetched() ? Promise.resolve() : i.default.get({
                    url: g.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(f.savedMessageToClient);
                    p(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2022-08_message_todos_staff_only",
                label: "Message TODO list",
                defaultConfig: {
                    showReminders: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show message TODOs CTA",
                    config: {
                        showReminders: !0
                    }
                }]
            });
            var a = l
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                a = n("718517");
            let s = [],
                d = new Set,
                u = 0;
            class r extends i.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * a.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return s
                }
                isMessageReminder(e) {
                    let t = s.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return s.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * a.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return d.has(e)
                }
                getState() {
                    return {
                        messages: s
                    }
                }
            }
            r.displayName = "MessageRemindersStore";
            var o = new r(l.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), s = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && d.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && d.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, i = s.findIndex(e => e.messageId === t);
                    if (-1 === i) return !1;
                    s[i] = {
                        ...s[i],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    d.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return a
                },
                savedMessageToClient: function() {
                    return s
                },
                savedMessageHasMetadata: function() {
                    return d
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return u
                }
            });
            var i = n("718517"),
                l = n("782340");

            function a(e) {
                var t;
                return {
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    saved_at: e.savedAt.toISOString(),
                    author_summary: e.authorSummary,
                    channel_summary: e.channelSummary,
                    message_summary: e.messageSummary,
                    guild_id: e.guildId,
                    author_id: e.authorId,
                    notes: e.notes,
                    due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
                }
            }

            function s(e) {
                return {
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    savedAt: new Date(e.saved_at),
                    authorSummary: e.author_summary,
                    channelSummary: e.channel_summary,
                    messageSummary: e.message_summary,
                    guildId: 0 === e.guild_id ? void 0 : e.guild_id,
                    authorId: 0 === e.author_id ? void 0 : e.author_id,
                    notes: e.notes,
                    dueAt: null != e.due_at ? new Date(e.due_at) : void 0
                }
            }

            function d(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let u = [{
                duration: i.default.Millis.HOUR,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * i.default.Millis.HOUR,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * i.default.Millis.HOUR,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: i.default.Millis.DAY,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: i.default.Millis.WEEK,
                getLabel: () => l.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        341329: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            }), n("222007");
            var l = n("803182"),
                a = n("811022"),
                s = n("95410"),
                d = n("913144"),
                u = n("404118"),
                r = n("819689"),
                o = n("115718"),
                c = n("689988"),
                f = n("408062"),
                g = n("619443"),
                E = n("582713"),
                _ = n("233069"),
                m = n("982108"),
                h = n("42203"),
                S = n("305961"),
                p = n("660478"),
                T = n("18494"),
                A = n("162771"),
                I = n("49111"),
                N = n("724210"),
                C = n("782340");
            let v = new a.default("MessageManager");

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: l,
                    forceFetch: a,
                    isPreload: d,
                    jumpType: u,
                    skipLocalFetch: c,
                    logFailures: E
                } = e;
                if (null == n) {
                    E && v.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, N.isStaticChannelRoute)(n)) {
                    E && v.log("Skipping fetch because channelId is a static route");
                    return
                }
                let _ = h.default.getChannel(n);
                if ((null == _ ? void 0 : _.type) === I.ChannelTypes.GUILD_STORE || (null == _ ? void 0 : _.type) != null && I.ChannelTypesSets.GUILD_THREADS_ONLY.has(_.type)) {
                    E && v.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let m = f.default.getOrCreate(n);
                null != m.jumpTargetId && null == l && (m = m.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), f.default.commit(m)), null != m.focusTargetId && null == l && (m = m.mutate({
                    focusTargetId: null
                }), f.default.commit(m));
                let T = a;
                if (!d || g.default.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != l ? T = !0 : E && v.log("Skipping fetch because no other conditions matched") : null == t || null != S.default.getGuild(t) ? T = !0 : E && v.log("Skipping fetch we are connected and have loaded messages") : T = !0, T) {
                    if (f.default.commit(m.mutate({
                            loadingMore: !0
                        })), null != l) r.default.jumpToMessage({
                        channelId: n,
                        messageId: l,
                        flash: !0,
                        isPreload: d,
                        skipLocalFetch: c,
                        jumpType: u
                    });
                    else if ((null == _ ? void 0 : _.isThread()) && function(e) {
                            if (p.default.hasOpenedThread(e)) return !1;
                            if (null == i) {
                                var t;
                                i = null !== (t = s.default.get(y, {})) && void 0 !== t ? t : {}
                            }
                            if (e in i) return !1;
                            i[e] = Date.now();
                            let n = Date.now() - 7776e6;
                            for (let e in i) i[e] < n && delete i[e];
                            return s.default.set(y, i), !0
                        }(n)) v.log("Jumping to start of thread ".concat(_.id)), r.default.fetchMessages({
                        channelId: n,
                        limit: I.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: d,
                        skipLocalFetch: c
                    });
                    else if ((null == _ ? void 0 : _.isThread()) && p.default.hasTrackedUnread(_.id) && !m.ready) {
                        let e = p.default.getTrackedAckMessageId(_.id);
                        v.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)), r.default.fetchMessages({
                            channelId: n,
                            limit: I.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: d,
                            skipLocalFetch: c
                        })
                    } else r.default.fetchMessages({
                        channelId: n,
                        limit: I.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: d,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let y = "viewedThreadIds";

            function b() {
                let e = T.default.getChannelId();
                if (null != e) {
                    let n = h.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, l.matchPath)(location.pathname, {
                            path: I.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        D({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), R(n.getGuildId(), n.id)
                    }
                }
            }

            function M() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = T.default.getChannelId();
                if (null != i) {
                    let l = h.default.getChannel(i);
                    null != l ? ((0, _.isTextChannel)(l.type) ? D({
                        guildId: l.getGuildId(),
                        channelId: l.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && v.log("Skipping fetch because the selected channel is not a text channel"), R(l.getGuildId(), l.id)) : n && v.log("Skipping fetch because channel is null")
                } else n && v.log("Skipping fetch because there is no selected channel")
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    jumpType: l
                } = e;
                D({
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    jumpType: l
                }), R(t, n)
            }

            function L(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                D({
                    guildId: t,
                    channelId: n
                })
            }

            function R(e, t) {
                let n = m.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let i = m.default.getCurrentSidebarMessageId(t);
                D({
                    guildId: e,
                    channelId: n,
                    messageId: i
                })
            }

            function G() {
                let e = T.default.getChannelId(),
                    t = A.default.getGuildId();
                if (null == t || null == e) return;
                let n = m.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && R(t, e)
            }

            function U(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: i
                } = e;
                i === I.CURRENT_APP_CONTEXT && (D({
                    guildId: t,
                    channelId: n
                }), R(t, n))
            }

            function k(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, i = t.guild_id;
                null != i && T.default.getChannelId(i) === t.id && D({
                    guildId: i,
                    channelId: t.id,
                    messageId: n
                })
            }

            function P(e) {
                let {
                    channelId: t
                } = e;
                r.default.fetchMessages({
                    channelId: t,
                    limit: I.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function F(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === I.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && u.default.show({
                        title: C.default.Messages.RATE_LIMITED,
                        body: C.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let w = {};

            function x(e) {
                var t;
                let {
                    channelId: n,
                    jump: i,
                    isStale: l,
                    isPreview: a = !1
                } = e;
                if (a) return;
                let s = null !== (t = w[n]) && void 0 !== t ? t : 0;
                if (Date.now() - s < 1e4) return;
                w[n] = Date.now();
                let d = T.default.getChannelId(),
                    u = m.default.getCurrentSidebarChannelId(d),
                    o = n === d || n === u;
                l && g.default.isConnected() && o && r.default.fetchMessages({
                    channelId: n,
                    limit: I.MAX_MESSAGES_PER_CHANNEL,
                    jump: i
                })
            }

            function V(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && d.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function H(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = T.default.getChannelId();
                if (null == n) return !1;
                r.default.fetchNewLocalMessages(n, I.MAX_MESSAGES_PER_CHANNEL)
            }
            class B extends c.default {
                _initialize() {
                    d.default.subscribe("CONNECTION_OPEN", b)
                }
                _terminate() {
                    d.default.unsubscribe("CONNECTION_OPEN", b)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = D, this.loadSelectedChannelIfNecessary = M, this.stores = new Map().set(m.default, G), this.actions = {
                        APP_STATE_UPDATE: H,
                        OVERLAY_INITIALIZE: b,
                        CHANNEL_SELECT: O,
                        VOICE_CHANNEL_SELECT: L,
                        THREAD_CREATE: k,
                        THREAD_LIST_SYNC: () => M(),
                        CHANNEL_CREATE: k,
                        CHANNEL_PRELOAD: U,
                        THREAD_CREATE_LOCAL: P,
                        GUILD_CREATE: () => M(),
                        MESSAGE_END_EDIT: F,
                        LOAD_MESSAGES_SUCCESS: x,
                        UPLOAD_FAIL: V,
                        CHANNEL_DELETE: () => M(),
                        THREAD_DELETE: () => M()
                    }
                }
            }
            var q = new B
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return d
                },
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return u
                }
            });
            var i = n("862205"),
                l = n("49111");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-11_voice_activity_notification_user",
                    label: "Voice Activity Notifications for User",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Voice Activity Notifications are enabled for user",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-11_voice_activity_notification_guild",
                    label: "General Voice Channel Notifications for Guild",
                    defaultConfig: {
                        voiceChannelActivityNotifsEnabled: !1
                    },
                    treatments: [{
                        id: 2,
                        label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                        config: {
                            voiceChannelActivityNotifsEnabled: !0
                        }
                    }]
                });

            function d(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: i
                } = a.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE || !n,
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.type) === l.ChannelTypes.GUILD_VOICE && n && i
            }

            function u(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = s.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return n
            }
        },
        553257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return l
                },
                usePomeloEligibility: function() {
                    return a
                },
                getPomeloEligibility: function() {
                    return s
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
                    } = l.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                s = () => {
                    let {
                        enabled: e
                    } = l.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        385649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("446674"),
                l = n("913144"),
                a = n("599110"),
                s = n("773336"),
                d = n("49111");
            let u = {
                    desktopType: s.isPlatformEmbedded ? d.DesktopNotificationTypes.ALL : d.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: d.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                r = u;

            function o(e, t) {
                !__OVERLAY__ && a.default.track(e, t)
            }

            function c(e) {
                let {
                    desktopType: t
                } = e;
                r.desktopType = t, o(d.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    notifications_enabled: t === d.DesktopNotificationTypes.ALL
                })
            }
            class f extends i.default.DeviceSettingsStore {
                initialize(e) {
                    r = {
                        ...u,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return r
                }
                getDesktopType() {
                    return r.desktopType
                }
                getTTSType() {
                    return r.ttsType
                }
                getDisabledSounds() {
                    return r.disabledSounds
                }
                getDisableAllSounds() {
                    return r.disableAllSounds
                }
                getDisableUnreadBadge() {
                    return r.disableUnreadBadge
                }
                getNotifyMessagesInSelectedChannel() {
                    return r.notifyMessagesInSelectedChannel
                }
                get taskbarFlash() {
                    return r.taskbarFlash
                }
                isSoundDisabled(e) {
                    return r.disableAllSounds || -1 !== r.disabledSounds.indexOf(e)
                }
            }
            f.displayName = "NotificationSettingsStore", f.persistKey = "notifications", f.migrations = [e => {
                let t = {
                    ...e
                };
                return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || d.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = s.isPlatformEmbedded ? d.DesktopNotificationTypes.ALL : d.DesktopNotificationTypes.NEVER), t
            }];
            var g = new f(l.default, {
                NOTIFICATIONS_SET_DESKTOP_TYPE: c,
                NOTIFICATIONS_SET_TTS_TYPE: function(e) {
                    let {
                        ttsType: t
                    } = e;
                    r.ttsType = t
                },
                NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
                    let {
                        sounds: t
                    } = e;
                    r.disabledSounds = t
                },
                NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
                    r.disableAllSounds = !r.disableAllSounds
                },
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t,
                        source: n
                    } = e;
                    o(d.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                        enabled: t === d.NotificationPermissionTypes.ENABLED,
                        source: n
                    }), t === d.NotificationPermissionTypes.BLOCKED ? c({
                        desktopType: d.DesktopNotificationTypes.NEVER
                    }) : t === d.NotificationPermissionTypes.ENABLED && c({
                        desktopType: d.DesktopNotificationTypes.ALL
                    })
                },
                NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
                    let {
                        disableUnreadBadge: t
                    } = e;
                    r.disableUnreadBadge = t
                },
                NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
                    let {
                        taskbarFlash: t
                    } = e;
                    r.taskbarFlash = t
                },
                NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
                    let {
                        notify: t
                    } = e;
                    r.notifyMessagesInSelectedChannel = t
                }
            })
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196");

            function a(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = "currentColor",
                    className: s,
                    foreground: d,
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(u),
                    className: s,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        className: d,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=93464.cbb6acc8337a79d665e9.js.map