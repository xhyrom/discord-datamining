(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8240"], {
        295426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    clearDraft(e, t) {
                        i.default.dispatch({
                            type: "DRAFT_CLEAR",
                            channelId: e,
                            draftType: t
                        })
                    },
                    saveDraft(e, t, n) {
                        i.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e,
                            draft: t,
                            draftType: n
                        })
                    },
                    changeDraft(e, t, n) {
                        i.default.dispatch({
                            type: "DRAFT_CHANGE",
                            channelId: e,
                            draft: t,
                            draftType: n
                        })
                    },
                    changeThreadSettings(e, t) {
                        i.default.dispatch({
                            type: "THREAD_SETTINGS_DRAFT_CHANGE",
                            channelId: e,
                            draft: t
                        })
                    }
                }
        },
        943314: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_forum_activity",
                label: "Increased activity view for Forums, per user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        531869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-01_forums_activity_2_guild",
                label: "Increased activity view for Forums, per guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        696605: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MINIMUM_RANGE: function() {
                    return u
                },
                DEFAULT_RANGES: function() {
                    return o
                },
                default: function() {
                    return i
                }
            });
            var i, a = n("917351"),
                l = n.n(a),
                s = n("693566"),
                r = n.n(s);
            let u = 100,
                o = [
                    [0, u - 1]
                ];

            function d(e) {
                let t = {};
                return e.forEach((e, n) => {
                    t[n] = e
                }), t
            }
            i = class {
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return d(this._get(e))
                }
                _get(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new r({
                        max: 5
                    })
                }
                clear(e) {
                    delete this._subscriptions[e]
                }
                subscribe(e, t, n) {
                    let i = this._get(e);
                    return !l.isEqual(i.get(t), n) && (i.set(t, n), this._subscriptions[e] = i, this._onChange(e, d(i)), !0)
                }
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
            }
        },
        623053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, a = n("917351"),
                l = n.n(a),
                s = n("862337"),
                r = n("605250");
            i = class {
                reset() {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                }
                get(e) {
                    var t;
                    let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
                    return l.keys(n)
                }
                clear(e) {
                    delete this._subscriptions[e], delete this._unsubscriptions[e]
                }
                subscribe(e, t) {
                    var n, i;
                    let a = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
                    a[t] = (null !== (i = a[t]) && void 0 !== i ? i : 0) + 1, this._subscriptions[e] = a, 1 === a[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                }
                isSubscribed(e, t) {
                    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                }
                unsubscribe(e, t) {
                    var n, i;
                    if (!this.isSubscribed(e, t)) return;
                    let a = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
                    a[t] = (null !== (i = a[t]) && void 0 !== i ? i : 0) + 1, this._unsubscriptions[e] = a, 1 === a[t] && this._unsubscribe.delay(!1)
                }
                checkForLeaks(e, t) {
                    var n, i, a, l;
                    let s = null !== (a = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== a ? a : 0,
                        u = null !== (l = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== l ? l : 0,
                        o = s - u;
                    o > 5 && new(0, r.default)("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(o, " subscriptions)"))
                }
                flushUnsubscriptions() {
                    !l.isEmpty(this._unsubscriptions) && (l.forEach(this._unsubscriptions, (e, t) => {
                        let n = this._subscriptions[t];
                        l.forEach(e, (e, t) => {
                            var i;
                            n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e, n[t] <= 0 && delete n[t]
                        }), l.isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
                    }), this._unsubscriptions = {})
                }
                constructor(e) {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new s.DelayedCall(6e4, () => this.flushUnsubscriptions()), this._onChange = e
                }
            }
        },
        386451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_RANGES: function() {
                    return r.DEFAULT_RANGES
                },
                default: function() {
                    return i
                }
            }), n("222007");
            var i, a = n("917351"),
                l = n.n(a),
                s = n("862337"),
                r = n("696605"),
                u = n("623053"),
                o = n("6850"),
                d = n("49111");

            function c(e) {
                return null != e && "null" !== e && e !== d.ME && "undefined" !== e && e !== d.FAVORITES
            }
            i = class {
                _enqueue(e, t) {
                    this._pending[e] = {
                        ...this._pending[e],
                        ...t
                    }, this._flush.delay()
                }
                reset() {
                    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
                }
                get(e) {
                    return {
                        typing: this._typing.has(e),
                        threads: this._threads.has(e),
                        activities: this._activities.has(e),
                        members: this._members.get(e),
                        channels: this._channels.get(e),
                        thread_member_lists: this._threadMemberLists.get(e)
                    }
                }
                getSubscribedThreadIds() {
                    return this._threadMemberLists.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return this._threads.has(e)
                }
                forEach(e) {
                    this._subscribed.forEach(e)
                }
                clearWithoutFlushing(e, t) {
                    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), t && this._threads.delete(e), this._activities.delete(e)
                }
                flush() {
                    l.forEach(this._pending, (e, t) => {
                        this._subscribed.add(t), this._onChange(t, e)
                    }), this._pending = {}
                }
                subscribeUser(e, t) {
                    c(e) && this._members.subscribe(e, t)
                }
                unsubscribeUser(e, t) {
                    c(e) && this._members.unsubscribe(e, t)
                }
                subscribeChannel(e, t, n) {
                    return !!c(e) && this._channels.subscribe(e, t, n)
                }
                subscribeThreadMemberList(e, t, n) {
                    return !!c(e) && this._threadMemberLists.subscribe(e, t, n)
                }
                unsubscribeThreadMemberList(e, t) {
                    return !!c(e) && this._threadMemberLists.unsubscribe(e, t)
                }
                subscribeToGuild(e) {
                    this._subscribeToFeature(e, this._typing, {
                        typing: !0
                    }), this._subscribeToFeature(e, this._activities, {
                        activities: !0
                    }), this._subscribeToFeature(e, this._threads, {
                        threads: !0
                    })
                }
                _subscribeToFeature(e, t, n) {
                    if (!!c(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
                }
                constructor(e) {
                    this._members = new u.default((e, t) => this._enqueue(e, {
                        members: t
                    })), this._channels = new r.default((e, t) => this._enqueue(e, {
                        channels: t
                    })), this._threadMemberLists = new o.default((e, t) => this._enqueue(e, {
                        thread_member_lists: t
                    })), this._typing = new Set, this._threads = new Set, this._activities = new Set, this._subscribed = new Set, this._pending = {}, this._flush = new s.DelayedCall(0, () => this.flush()), this._onChange = e
                }
            }
        },
        6850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, a = n("693566"),
                l = n.n(a);
            i = class {
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return this._get(e).keys()
                }
                getSubscribedThreadIds() {
                    let e = new Set;
                    for (let t in this._subscriptions)
                        for (let n of this._subscriptions[t].keys()) e.add(n);
                    return e
                }
                _get(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new l({
                        max: 3,
                        updateAgeOnGet: !0
                    })
                }
                clear(e) {
                    e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
                }
                subscribe(e, t, n) {
                    let i = this._get(e);
                    return i.has(t) ? (i.set(t, Date.now()), !1) : (null != n && i.has(n) && i.set(n, Date.now()), i.set(t, Date.now()), this._subscriptions[e] = i, this._onChange(e, i.keys()), !0)
                }
                unsubscribe(e, t) {
                    if (!(e in this._subscriptions)) return !1;
                    let n = this._subscriptions[e];
                    return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0)
                }
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
            }
        },
        701916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectThreadMetadata: function() {
                    return d
                }
            });
            var i = n("393414"),
                a = n("800843"),
                l = n("610730"),
                s = n("233069"),
                r = n("957255"),
                u = n("299039"),
                o = n("49111");

            function d(e) {
                var t, n, d, c, _;
                let f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e || !s.THREAD_CHANNEL_TYPES.has(e.type)) return null;
                let h = f ? (0, i.getLastRouteChangeSource)() : void 0;
                return {
                    location: h,
                    thread_approximate_member_count: a.default.getMemberCount(e.id),
                    thread_approximate_message_count: l.default.getCount(e.id),
                    thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (d = e.threadMetadata) || void 0 === d ? void 0 : d.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: u.default.extractTimestamp(e.id),
                    can_send_message: r.default.can(o.Permissions.SEND_MESSAGES, e),
                    parent_channel_type: e.parentChannelThreadType
                }
            }
        },
        507217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setActiveCommand: function() {
                    return f
                },
                setPreferredCommandId: function() {
                    return h
                },
                updateOptionStates: function() {
                    return E
                },
                updateOptionValidationStates: function() {
                    return g
                },
                updateApplicationGuildCommandPermissions: function() {
                    return m
                },
                querySearchManager: function() {
                    return A
                },
                performAutocomplete: function() {
                    return T
                },
                fetchCommand: function() {
                    return p
                },
                fetchCommands: function() {
                    return S
                },
                fetchCommandsForApplication: function() {
                    return M
                },
                updateRegistry: function() {
                    return v
                }
            }), n("222007");
            var i = n("627445"),
                a = n.n(i),
                l = n("872717"),
                s = n("913144"),
                r = n("798609"),
                u = n("271938"),
                o = n("299039"),
                d = n("246598"),
                c = n("524768"),
                _ = n("49111");

            function f(e) {
                let {
                    channelId: t,
                    command: n,
                    section: i,
                    location: l,
                    initialValues: r,
                    triggerSection: u,
                    queryLength: o
                } = e;
                null != n && a(n.inputType !== c.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), s.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: n,
                    section: i,
                    initialValues: r,
                    location: l,
                    triggerSection: u,
                    queryLength: o
                })
            }

            function h(e, t) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: e,
                    commandId: t
                })
            }

            function E(e, t) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: e,
                    changedOptionStates: t
                })
            }

            function g(e, t) {
                let n = Object.fromEntries(Object.entries(t).map(e => {
                    let [t, n] = e;
                    return [t, {
                        lastValidationResult: n
                    }]
                }));
                E(e, n)
            }

            function m(e, t, n, i) {
                return l.default.put({
                    body: {
                        permissions: i
                    },
                    url: _.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
                })
            }
            let A = (e, t, n, i, a) => {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                    context: e,
                    query: t,
                    limit: n,
                    commandType: i,
                    applicationId: a
                })
            };

            function T(e, t, n) {
                var i;
                a(null != t.autocomplete, "Missing autocomplete context");
                let {
                    query: c,
                    name: f
                } = t.autocomplete, h = o.default.fromTimestamp(Date.now());
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
                    nonce: h,
                    channelId: t.channel.id,
                    query: c,
                    name: f
                }), null == d.default.getAutocompleteChoices(t.channel.id, f, c) && l.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: {
                        type: r.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
                        channel_id: t.channel.id,
                        session_id: u.default.getSessionId(),
                        data: n,
                        nonce: h
                    },
                    timeout: 3e3
                }).catch(() => {
                    s.default.dispatch({
                        type: "INTERACTION_FAILURE",
                        nonce: h
                    })
                })
            }

            function p(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_FETCH",
                    channelId: t,
                    commandId: n,
                    guildId: e
                })
            }

            function S(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH",
                    channelId: t,
                    commandIds: n,
                    guildId: e
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    channelId: n,
                    applicationId: i
                } = e;
                s.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
                    channelId: n,
                    guildId: t,
                    applicationId: i
                })
            }

            function v(e, t, n) {
                s.default.dispatch({
                    type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
                    applications: t,
                    commands: e,
                    channelId: n
                })
            }
        },
        246598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("383018");
            let s = new Map,
                r = new Map;

            function u(e) {
                if (!r.has(e)) {
                    var t;
                    r.set(e, {
                        commandId: null === (t = l.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                        optionName: l.default.getActiveOptionName(e),
                        optionNameToAutocompleteQueries: new Map,
                        optionNameToLastResults: new Map,
                        optionNameToNonce: new Map,
                        optionNameToLastQuery: new Map,
                        lastErrored: !1,
                        lastResponseNonce: void 0
                    })
                }
                return r.get(e)
            }

            function o() {
                return s.clear(), r.clear(), !0
            }

            function d(e) {
                let {
                    channelId: t,
                    command: n
                } = e;
                c(t, null == n ? void 0 : n.id)
            }

            function c(e, t) {
                let n = l.default.getActiveOptionName(e),
                    i = r.get(e);
                return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                getLastErrored(e) {
                    return u(e).lastErrored
                }
                getAutocompleteChoices(e, t, n) {
                    var i;
                    let a = u(e);
                    return null === (i = a.optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
                }
                getAutocompleteLastChoices(e, t) {
                    let n = u(e);
                    return n.optionNameToLastResults.get(t)
                }
                getLastResponseNonce(e) {
                    return u(e).lastResponseNonce
                }
            }
            _.displayName = "ApplicationCommandAutocompleteStore";
            var f = new _(a.default, {
                CONNECTION_OPEN: o,
                LOGOUT: o,
                CHANNEL_SELECT: o,
                APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
                    var t;
                    let {
                        nonce: n,
                        channelId: i,
                        query: a,
                        name: l
                    } = e, r = u(i);
                    if (r.optionNameToLastQuery.get(l) === a) return !1;
                    r.optionNameToLastQuery.set(l, a);
                    let o = null === (t = r.optionNameToAutocompleteQueries.get(l)) || void 0 === t ? void 0 : t.get(a);
                    if (null != o) return r.lastErrored = !1, r.optionNameToLastResults.set(l, o), !0;
                    let d = r.optionNameToNonce.get(l);
                    if (null != d && s.delete(d), s.set(n, {
                            channelId: i,
                            query: a,
                            name: l
                        }), r.optionNameToNonce.set(l, n), r.lastErrored) return r.lastErrored = !1, !0
                },
                APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
                    var t, n;
                    let {
                        choices: i,
                        nonce: a
                    } = e, l = s.get(a);
                    if (null == l) return !1;
                    s.delete(a);
                    let r = null !== (n = null == i ? void 0 : i.map(e => {
                            var t;
                            return {
                                ...e,
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                            }
                        })) && void 0 !== n ? n : [],
                        o = u(l.channelId);
                    return null == o.optionNameToAutocompleteQueries.get(l.name) && o.optionNameToAutocompleteQueries.set(l.name, new Map), null === (t = o.optionNameToAutocompleteQueries.get(l.name)) || void 0 === t || t.set(l.query, r), o.optionNameToLastQuery.get(l.name) === l.query && (o.lastErrored = !1, o.optionNameToLastResults.set(l.name, r)), o.lastResponseNonce = a, !0
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = s.get(t);
                    if (null == n) return !1;
                    s.delete(t);
                    let i = u(n.channelId);
                    return i.lastErrored = !0, !0
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: d,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        command: n
                    } = e;
                    c(t, null == n ? void 0 : n.id)
                }
            })
        },
        383018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("982108"),
                s = n("18494"),
                r = n("389153");
            let u = {};

            function o() {
                return u = {}, !0
            }

            function d(e) {
                return !(e in u) && (u[e] = {
                    activeCommand: null,
                    activeCommandSection: null,
                    activeOptionName: null,
                    preferredCommandId: null,
                    optionStates: {},
                    initialValues: {}
                }), u[e]
            }

            function c(e) {
                var t;
                let {
                    channelId: n,
                    command: i,
                    section: a,
                    initialValues: l,
                    location: s,
                    triggerSection: u,
                    queryLength: o
                } = e, c = d(n);
                if ((null == i ? void 0 : i.id) === (null === (t = c.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
                c.activeCommand = i, c.activeCommandSection = a, c.activeOptionName = null, c.preferredCommandId = null, c.initialValues = null != l ? l : {};
                let _ = {};
                return (null == i ? void 0 : i.options) != null && i.options.forEach(e => {
                    _[e.name] = {
                        isActive: !1,
                        hasValue: !1,
                        lastValidationResult: null,
                        optionValue: null
                    }
                }), c.optionStates = _, null != i && (0, r.trackCommandSelected)({
                    command: i,
                    location: s,
                    triggerSection: u,
                    queryLength: o
                }), !0
            }

            function _(e) {
                var t, n;
                let {
                    channelId: i,
                    commandId: a
                } = e, l = d(i);
                return a !== l.preferredCommandId && (null !== l.preferredCommandId || a !== (null !== (n = null === (t = l.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (l.activeCommand = null, l.activeOptionName = null, l.preferredCommandId = a, l.optionStates = {}, !0)
            }

            function f(e) {
                let {
                    channelId: t,
                    changedOptionStates: n
                } = e, i = d(t), a = {
                    ...i.optionStates
                };
                for (let [e, t] of Object.entries(n)) {
                    var l, s, r;
                    if (!(e in i.optionStates)) continue;
                    let n = void 0 !== t.hasValue ? t.hasValue : a[e].hasValue;
                    if (!n) {
                        a[e] = {
                            hasValue: !1,
                            isActive: !1,
                            lastValidationResult: null,
                            optionValue: null,
                            location: void 0,
                            length: void 0
                        }, i.activeOptionName === e && (i.activeOptionName = null);
                        continue
                    }
                    let u = a[e];
                    a[e] = {
                        hasValue: !0,
                        isActive: void 0 !== t.isActive ? t.isActive : u.isActive,
                        lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : u.lastValidationResult,
                        optionValue: null !== (l = t.optionValue) && void 0 !== l ? l : u.optionValue,
                        location: null !== (s = t.location) && void 0 !== s ? s : u.location,
                        length: null !== (r = t.length) && void 0 !== r ? r : u.length
                    }, void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && (a[i.activeOptionName] = {
                        ...a[i.activeOptionName]
                    }, a[i.activeOptionName].isActive = !1), i.activeOptionName = e) : e === i.activeOptionName && (i.activeOptionName = null))
                }
                return i.optionStates = a, !0
            }
            class h extends i.default.Store {
                initialize() {
                    l.default.addChangeListener(() => {
                        let e = s.default.getChannelId();
                        if (null == e) return u = {}, !0;
                        let t = l.default.getCurrentSidebarChannelId(e);
                        if (null != t && t in u) return !1;
                        u = e in u ? {
                            [e]: u[e]
                        } : {}
                    })
                }
                getActiveCommand(e) {
                    let t = d(e);
                    return t.activeCommand
                }
                getActiveCommandSection(e) {
                    let t = d(e);
                    return t.activeCommandSection
                }
                getActiveOptionName(e) {
                    let t = d(e);
                    return t.activeOptionName
                }
                getActiveOption(e) {
                    var t, n, i;
                    let a = d(e);
                    return null !== (i = null === (n = a.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === a.activeOptionName)) && void 0 !== i ? i : null
                }
                getPreferredCommandId(e) {
                    let t = d(e);
                    return t.preferredCommandId
                }
                getOptionStates(e) {
                    let t = d(e);
                    return t.optionStates
                }
                getOptionState(e, t) {
                    let n = d(e);
                    return n.optionStates[t]
                }
                getOption(e, t) {
                    var n, i;
                    let a = d(e);
                    return null === (i = a.activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
                }
                getState(e) {
                    return {
                        ...d(e)
                    }
                }
            }
            h.displayName = "ApplicationCommandStore";
            let E = new h(a.default, {
                CONNECTION_OPEN: o,
                CHANNEL_SELECT: o,
                LOGOUT: o,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: c,
                APPLICATION_COMMAND_SET_PREFERRED_COMMAND: _,
                APPLICATION_COMMAND_UPDATE_OPTIONS: f,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        preferredCommandId: n,
                        command: i,
                        section: a,
                        changedOptionStates: l
                    } = e, s = c({
                        type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                        channelId: t,
                        command: i,
                        section: a
                    }), r = _({
                        type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                        channelId: t,
                        commandId: n
                    }), u = f({
                        type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                        channelId: t,
                        changedOptionStates: l
                    });
                    return s || r || u
                }
            });
            var g = E
        },
        349778: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isForumActivityExperimentEnabled: function() {
                    return l
                }
            });
            var i = n("943314"),
                a = n("531869");

            function l(e) {
                let t = a.default.getCurrentConfig({
                        guildId: null != e ? e : "",
                        location: "3fde52_1"
                    }),
                    n = i.default.getCurrentConfig({
                        location: "3fde52_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        953371: function(e, t, n) {
            "use strict";
            var i, a, l, s;
            n.r(t), n.d(t, {
                MAX_FORUM_TAGS: function() {
                    return r
                },
                MAX_FORUM_POST_TAGS: function() {
                    return u
                },
                MAX_FORUM_TEMPLATE_LENGTH: function() {
                    return o
                },
                ForumOnboardingCTAs: function() {
                    return i
                },
                COMMUNITY_PORTAL_FORUM_PAGE: function() {
                    return d
                },
                ForumTimestampFormats: function() {
                    return a
                }
            });
            let r = 20,
                u = 5,
                o = 256;
            (l = i || (i = {})).PERMISSIONS = "Permissions", l.GUIDELINES = "Guidelines", l.TAGS = "Tags", l.DEFAULT_REACTION = "Default Reaction", l.CREATE_POST = "Create Post";
            let d = "https://discord.com/community/creating-value-with-conversation";
            (s = a || (a = {}))[s.DURATION_AGO = 0] = "DURATION_AGO", s[s.POSTED_DURATION_AGO = 1] = "POSTED_DURATION_AGO"
        },
        430475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("692038"),
                s = n("10802"),
                r = n("697218");
            let u = {};

            function o(e) {
                let {
                    threads: t,
                    firstMessages: n
                } = e;
                if (null == n) return !1;
                for (let e of t) u[e.id] = {
                    loaded: !0,
                    firstMessage: null
                };
                for (let e of n) d(e.channel_id, e)
            }

            function d(e, t) {
                let n = null == t ? null : (0, l.createMessageRecord)(t);
                u[e] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function c(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: i,
                    userId: a,
                    emoji: l,
                    optimistic: s,
                    burst: o,
                    reactionType: d
                } = e, c = u[n];
                if (null == c || null == c.firstMessage || i !== c.firstMessage.id) return !1;
                let _ = r.default.getCurrentUser(),
                    f = null != _ && _.id === a;
                if (s && !f) return !1;
                if (u[n] = {
                        ...c
                    }, "MESSAGE_REACTION_ADD" === t) {
                    let {
                        colors: t
                    } = e;
                    u[n].firstMessage = c.firstMessage.addReaction(l, f, t, o, d)
                } else u[n].firstMessage = c.firstMessage.removeReaction(l, f, o, d)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, r.default)
                }
                isLoading(e) {
                    var t;
                    return (null === (t = u[e]) || void 0 === t ? void 0 : t.loaded) !== !0
                }
                getMessage(e) {
                    return !(e in u) && (u[e] = {
                        loaded: !1,
                        firstMessage: null
                    }), u[e]
                }
            }
            _.displayName = "ForumPostMessagesStore";
            var f = new _(a.default, {
                CONNECTION_OPEN: function() {
                    u = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || e.message.id !== e.message.channel_id) return !1;
                    d(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (e.message.id !== e.message.channel_id) return !1;
                    let t = u[e.message.id];
                    if (null == t || null == t.firstMessage) return !1;
                    u[e.message.id] = {
                        ...t,
                        firstMessage: (0, l.updateMessageRecord)(t.firstMessage, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (e.id !== e.channelId) return !1;
                    u[e.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(e) {
                    let t = u[e.channel.id];
                    if (null != t || !s.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
                    u[e.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: c,
                MESSAGE_REACTION_REMOVE: c,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, i = u[t];
                    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
                    u[t] = {
                        ...i,
                        firstMessage: i.firstMessage.set("reactions", [])
                    }
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: i
                    } = e, a = u[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    u[t] = {
                        ...a,
                        firstMessage: a.firstMessage.removeReactionsForEmoji(i)
                    }
                },
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: i
                    } = e, a = u[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    let l = r.default.getCurrentUser(),
                        s = a.firstMessage.addReactionBatch(i, null == l ? void 0 : l.id);
                    u[t] = {
                        ...a,
                        firstMessage: s
                    }
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) d(e, t[e].first_message)
                },
                LOAD_THREADS_SUCCESS: o,
                LOAD_ARCHIVED_THREADS_SUCCESS: o,
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e, i = n[n.length - 1];
                    null != i && i.id === t && (u[t] = {
                        loaded: !0,
                        firstMessage: (0, l.createMessageRecord)(i)
                    })
                }
            })
        },
        994810: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("42203");
            let s = {};

            function r(e) {
                let t = l.default.getChannel(e);
                return !!(null != t && t.isForumLikeChannel()) || !1
            }

            function u(e) {
                var t;
                let n = null !== (t = s[e]) && void 0 !== t ? t : {
                    query: null,
                    loading: !1,
                    results: null
                };
                return s[e] = n, n
            }
            class o extends i.default.Store {
                getSearchQuery(e) {
                    let t = s[e];
                    return null == t ? void 0 : t.query
                }
                getSearchLoading(e) {
                    var t;
                    let n = s[e];
                    return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
                }
                getSearchResults(e) {
                    let t = s[e];
                    return null == t ? void 0 : t.results
                }
                getHasSearchResults(e) {
                    let t = s[e];
                    return (null == t ? void 0 : t.results) != null && t.results.length > 0
                }
            }
            o.displayName = "ForumSearchStore";
            var d = new o(a.default, {
                CONNECTION_OPEN: function() {
                    s = {}
                },
                THREAD_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, i = n.parent_id;
                    if (null == i) return !1;
                    let a = s[i];
                    if (null == a) return !1;
                    s[i] = {
                        ...a,
                        results: null === (t = a.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
                    }
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = delete s[t.id];
                    return n
                },
                FORUM_SEARCH_QUERY_UPDATED: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    if (!r(t)) return !1;
                    let i = u(t);
                    s[t] = {
                        ...i,
                        query: n,
                        results: null
                    }
                },
                FORUM_SEARCH_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = u(t);
                    s[t] = {
                        ...n,
                        loading: !0
                    }
                },
                FORUM_SEARCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        threadIds: n
                    } = e;
                    if (!r(t)) return !1;
                    let i = u(t);
                    s[t] = {
                        ...i,
                        loading: !1,
                        results: n
                    }
                },
                FORUM_SEARCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = u(t);
                    s[t] = {
                        ...n,
                        loading: !1,
                        results: []
                    }
                },
                FORUM_SEARCH_CLEAR: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = delete s[t];
                    return n
                }
            })
        },
        786742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForumPostReadStates: function() {
                    return d
                },
                getForumPostReadStatesById: function() {
                    return c
                },
                getForumTimestampFormatter: function() {
                    return f
                },
                canDisplayPostUnreadMessageCount: function() {
                    return h
                },
                isForumPostPinned: function() {
                    return E
                }
            }), n("222007");
            var i = n("335710"),
                a = n("42203"),
                l = n("305961"),
                s = n("660478"),
                r = n("953371"),
                u = n("724210"),
                o = n("782340");

            function d(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                return {
                    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
                    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
                }
            }

            function c(e) {
                let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, l.default, s.default], r = t.getChannel(e);
                if (null == r) return null;
                let u = n.getGuild(r.guild_id);
                return null == u ? null : d(r, u, [i])
            }
            let _ = () => ({
                minutes: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
                hours: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
                days: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
                month: o.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
            });

            function f(e, t) {
                if (t === r.ForumTimestampFormats.POSTED_DURATION_AGO && e === i.ThreadSortOrder.CREATION_DATE) return _
            }

            function h(e, t) {
                let [n] = t, i = n.hasTrackedUnread(e), a = n.hasOpenedThread(e), l = null != n.getTrackedAckMessageId(e);
                return i && a && l
            }

            function E(e) {
                var t;
                return (null === (t = a.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(u.ChannelFlags.PINNED)) === !0
            }
        },
        446480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("482402"),
                a = n("42203"),
                l = n("349778"),
                s = n("688169"),
                r = new class e {
                    constructor() {
                        this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = e => {
                            this.filterTagIds = e
                        }, this.setSortOrder = e => {
                            this.sortOrder = e
                        }, this.setLayout = e => {
                            this.layout = e
                        }, this.getFilterTagIdsAnalytics = () => null != this.filterTagIds ? Array.from(this.filterTagIds) : [], this.getSortOrderAnalytics = e => {
                            var t, n;
                            return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = a.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
                        }, this.getLayoutAnalytics = e => {
                            var t;
                            let n = a.default.getChannel(e),
                                r = null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout(),
                                u = (0, l.isForumActivityExperimentEnabled)(null == n ? void 0 : n.guild_id),
                                o = u && r === i.ForumLayout.LIST ? s.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : r;
                            return o
                        }
                    }
                }
        },
        589641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var i = n("689988"),
                a = n("689275"),
                l = n("271938"),
                s = n("42203"),
                r = n("786742");
            class u extends i.default {
                handleThreadCreate(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.isForumPost()) {
                        let e = t.ownerId === l.default.getId();
                        this.readStateSnapshots[t.id] = {
                            isNew: !e,
                            hasUnreads: !e
                        }
                    }
                }
                constructor(...e) {
                    super(...e), this.readStateSnapshots = {}, this.actions = {
                        CHANNEL_SELECT: e => this.handleChannelSelect(e),
                        THREAD_CREATE: e => this.handleThreadCreate(e)
                    }, this.handleChannelSelect = e => {
                        let {
                            channelId: t
                        } = e;
                        if (null == t) return;
                        let n = s.default.getChannel(t);
                        null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
                    }, this.processForumChannel = (e, t) => {
                        let n = a.default.getThreadsForParent(e, t);
                        Object.keys(n).forEach(e => {
                            let t = (0, r.getForumPostReadStatesById)(e);
                            null != t && (this.readStateSnapshots[e] = t)
                        })
                    }, this.getReadStateSnapshotAnalytics = e => this.readStateSnapshots[e]
                }
            }
            var o = new u
        },
        369814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("748820");

            function a(e) {
                return {
                    channelId: e,
                    sessionId: (0, i.v4)()
                }
            }
            var l = new class e {
                getForumChannelSessionId(e) {
                    return null == this.session && (this.session = a(e)), this.session.channelId !== e && (this.session = a(e)), this.session.sessionId
                }
            }
        },
        867965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackForumChannelSeenBatch: function() {
                    return g
                },
                trackForumSearched: function() {
                    return m
                },
                trackForumSearchCleared: function() {
                    return A
                },
                trackForumTagFilterClicked: function() {
                    return T
                },
                trackForumCreateNewPostClick: function() {
                    return p
                },
                trackForumCreateNewPostKeybindUsed: function() {
                    return S
                },
                maybeTrackForumNewPostDraftCreated: function() {
                    return M
                },
                trackForumNewPostCleared: function() {
                    return v
                },
                trackForumPostCreated: function() {
                    return C
                },
                trackForumScrolled: function() {
                    return N
                },
                trackForumMorePostsLoaded: function() {
                    return O
                },
                trackForumPostClicked: function() {
                    return R
                },
                trackForumSortOrderUpdated: function() {
                    return I
                },
                trackForumLayoutUpdated: function() {
                    return D
                },
                trackForumPostLinkCopied: function() {
                    return b
                },
                trackForumOnboardingClicked: function() {
                    return y
                },
                trackForumUpsellModalClicked: function() {
                    return L
                },
                trackForumAddMediaToOriginalPostClicked: function() {
                    return F
                },
                trackForumHelperCardClicked: function() {
                    return P
                },
                trackForumChannelMediaUploaderClicked: function() {
                    return U
                },
                trackForumEnableAutomodClicked: function() {
                    return H
                },
                trackForumPreviewPostClicked: function() {
                    return w
                },
                trackForumPostSidebarViewed: function() {
                    return G
                },
                trackForumUpsellModalViewed: function() {
                    return k
                },
                trackForumCreateNewPostStarted: function() {
                    return V
                }
            });
            var i = n("482402"),
                a = n("716241"),
                l = n("701916"),
                s = n("42203"),
                r = n("474643"),
                u = n("599110"),
                o = n("773336"),
                d = n("349778"),
                c = n("430475"),
                _ = n("994810"),
                f = n("688169"),
                h = n("318321"),
                E = n("49111");

            function g(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sessionId: i,
                    postIds: l,
                    additionalTimes: s
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n,
                        sessionId: i
                    }),
                    guild_id: t,
                    channel_id: n,
                    post_ids: l,
                    additional_seen_time_millis: s
                })
            }

            function m(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numSearchResults: i
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_search_results: i
                })
            }

            function A(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    channelId: n,
                    tagId: i,
                    filterTagIds: l,
                    added: s,
                    location: r
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    tag_id: i,
                    filter_tag_ids: l,
                    added: s,
                    location: r
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function S(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function M(e) {
                var t, n, i, l;
                let {
                    guildId: u,
                    channelId: o
                } = e, d = s.default.getChannel(o);
                if (null == d) return;
                let c = r.default.getThreadSettings(o),
                    _ = null === (t = d.template) || void 0 === t ? void 0 : t.trim(),
                    f = r.default.getDraft(o, r.DraftType.FirstThreadMessage),
                    g = null == f || 0 === f.length || (null == f ? void 0 : f.trim()) === _,
                    m = (null == c ? void 0 : c.appliedTags) == null || (null == c ? void 0 : null === (n = c.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
                    A = (null == c ? void 0 : c.name) == null || (null == c ? void 0 : null === (l = c.name) || void 0 === l ? void 0 : null === (i = l.trim()) || void 0 === i ? void 0 : i.length) === 0;
                (!g || !m || !A) && a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: o
                    }),
                    guild_id: u,
                    channel_id: o,
                    applied_tag_ids: (0, h.getForumPostDraftAppliedTagIds)(o),
                    num_attachments: (0, h.getForumPostDraftNumAttachments)(o)
                })
            }

            function v(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: i
                } = e;

                function l() {
                    a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                        ...(0, h.collectForumPostAnalyticsMetadata)({
                            channelId: i
                        }),
                        guild_id: t,
                        channel_id: n
                    })
                }
                let s = c.default.isLoading(i);
                s ? c.default.addConditionalChangeListener(() => {
                    let e = c.default.isLoading(i);
                    return !!e || (l(), !1)
                }) : l()
            }

            function N(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numArchivedThreads: i,
                    hasMoreThreads: l,
                    filterTagIds: r,
                    sortOrder: o
                } = e;
                u.default.track(E.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
                    ...(0, a.collectGuildAnalyticsMetadata)(t),
                    ...(0, a.collectChannelAnalyticsMetadata)(s.default.getChannel(n)),
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_archived_threads: i,
                    num_active_threads: (0, h.getNumActiveThreads)(t, n),
                    has_more_threads: l,
                    filter_tag_ids: r,
                    sort_order: o
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: i,
                    location: l
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
                    ...(0, h.collectForumPostAnalyticsMetadata)({
                        channelId: i
                    }),
                    guild_id: t,
                    channel_id: n,
                    is_search_result: null != _.default.getSearchResults(n),
                    location: l
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sortOrder: i
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    sort_type: (0, h.convertSortOrderToReadableString)(i),
                    sort_order: i,
                    forum_channel_sort_order: i
                })
            }

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    forumLayout: l
                } = e, s = (0, d.isForumActivityExperimentEnabled)(t) && l === i.ForumLayout.LIST ? f.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : l;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    forum_channel_layout: s
                })
            }

            function b(e) {
                let {
                    postId: t,
                    location: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_POST_LINK_COPIED, {
                    forum_post_id: t,
                    location: n
                })
            }

            function y(e) {
                let {
                    onboardingCTA: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: t
                })
            }

            function L(e) {
                let {
                    forumDemoId: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: t
                })
            }

            function F(e) {
                let {
                    added: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: t
                })
            }

            function P(e) {
                let {
                    readGuideCta: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: t
                })
            }

            function U(e) {
                let {
                    isMobile: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: t
                })
            }

            function H() {
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function w() {
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
            }

            function G(e) {
                a.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_OPENED, {
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guild_id),
                    ...(0, a.collectChannelAnalyticsMetadata)(e),
                    ...(0, l.collectThreadMetadata)(e, !0),
                    ...(0, a.getChannelOpenedMetadata)(e.id),
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    parent_channel_type: e.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, o.getPlatform)()
                })
            }

            function k() {
                a.default.trackWithMetadata(E.AnalyticEvents.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: E.AnalyticsSections.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function V(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.THREAD_CREATION_STARTED, {
                    ...(0, l.collectThreadMetadata)(s.default.getChannel(n)),
                    channel_id: n,
                    guild_id: t
                })
            }
        },
        318321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForumChannelSessionId: function() {
                    return p
                },
                convertSortOrderToReadableString: function() {
                    return S
                },
                getForumPostDraftNumAttachments: function() {
                    return M
                },
                getForumPostDraftAppliedTagIds: function() {
                    return v
                },
                getNumActiveThreads: function() {
                    return C
                },
                collectForumAnalyticsMetadata: function() {
                    return O
                },
                collectForumPostAnalyticsMetadata: function() {
                    return R
                }
            }), n("70102"), n("222007"), n("808653");
            var i = n("335710"),
                a = n("249654"),
                l = n("689275"),
                s = n("755624"),
                r = n("800843"),
                u = n("610730"),
                o = n("42203"),
                d = n("474643"),
                c = n("957255"),
                _ = n("585722"),
                f = n("430475"),
                h = n("446480"),
                E = n("589641"),
                g = n("369814"),
                m = n("49111"),
                A = n("724210"),
                T = n("648564");

            function p(e) {
                return g.default.getForumChannelSessionId(e)
            }

            function S(e) {
                switch (e) {
                    case i.ThreadSortOrder.CREATION_DATE:
                        return T.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
                    case i.ThreadSortOrder.LATEST_ACTIVITY:
                        return T.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
                    default:
                        throw Error("Unexpected sort order ".concat(e))
                }
            }

            function M(e) {
                return _.default.getUploads(e, d.DraftType.FirstThreadMessage).length
            }

            function v(e) {
                var t, n;
                let i = o.default.getChannel(e);
                if (null == i) return [];
                let a = o.default.getChannel(i.parent_id),
                    l = null == a ? void 0 : a.availableTags;
                if (null == a || null == l) return [];
                let s = null !== (n = null === (t = d.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
                    r = new Set(l.map(e => e.id));
                return Array.from(s).filter(e => r.has(e))
            }

            function C(e, t) {
                return Object.keys(l.default.getThreadsForParent(e, t)).length
            }

            function N(e) {
                let {
                    loaded: t,
                    firstMessage: n
                } = f.default.getMessage(e);
                return t ? n : null
            }

            function O(e) {
                var t, n, i, a;
                let {
                    channelId: l,
                    sessionId: s
                } = e, r = o.default.getChannel(l);
                return null != r && r.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: null === (t = r.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
                    forum_channel_default_emoji_reaction_name: null === (n = r.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
                    forum_channel_available_tag_ids: null !== (a = null === (i = r.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== a ? a : [],
                    forum_channel_tag_required: r.hasFlag(A.ChannelFlags.REQUIRE_TAG),
                    forum_channel_can_create_post: c.default.can(m.Permissions.SEND_MESSAGES, r),
                    forum_channel_filter_tag_ids: h.default.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: h.default.getSortOrderAnalytics(r.id),
                    forum_channel_session_id: null != s ? s : p(r.id),
                    forum_channel_layout: h.default.getLayoutAnalytics(r.id),
                    forum_channel_default_sort_order: r.defaultSortOrder,
                    forum_channel_default_layout: r.defaultForumLayout
                } : null
            }

            function R(e) {
                var t, n, i, l, d, c, _;
                let {
                    channelId: f,
                    sessionId: h
                } = e, g = o.default.getChannel(f);
                if (null == g || !g.isForumPost()) return null;
                let m = o.default.getChannel(g.parent_id);
                return null != m && m.isForumLikeChannel() ? {
                    ...O({
                        channelId: m.id,
                        sessionId: h
                    }),
                    thread_approximate_member_count: r.default.getMemberCount(f),
                    thread_approximate_message_count: u.default.getCount(f),
                    thread_archived: (null === (t = g.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = g.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (i = g.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: a.default.extractTimestamp(f),
                    forum_post_id: g.id,
                    forum_post_first_message_id: g.id,
                    forum_post_num_reactions: function(e) {
                        let t = N(e);
                        return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
                    }(g.id),
                    forum_post_num_unique_reactions: function(e) {
                        let t = N(e);
                        return null == t ? 0 : t.reactions.length
                    }(g.id),
                    forum_post_applied_tag_ids: function(e) {
                        var t, n;
                        let i = o.default.getChannel(e);
                        if (null == i) return [];
                        let a = o.default.getChannel(i.parent_id),
                            l = null == a ? void 0 : a.availableTags;
                        if (null == a || null == l) return [];
                        let s = new Set(l.map(e => e.id));
                        return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => s.has(e))) && void 0 !== n ? n : []
                    }(g.id),
                    forum_post_is_pinned: g.hasFlag(A.ChannelFlags.PINNED),
                    forum_post_is_new: null === (l = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === l ? void 0 : l.isNew,
                    forum_post_is_unread: null === (d = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === d ? void 0 : d.hasUnreads,
                    forum_post_is_following: s.default.hasJoined(g.id),
                    forum_post_attachment_mimetypes: function(e) {
                        let t = N(e);
                        return null == t ? [] : t.attachments.map(e => {
                            var t;
                            return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
                        })
                    }(g.id)
                } : null
            }
        },
        688169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
                    return l
                },
                useForumActivityExperiment: function() {
                    return s
                }
            });
            var i = n("943314"),
                a = n("531869");
            let l = 3;

            function s(e) {
                let t = a.default.useExperiment({
                        guildId: null != e ? e : "",
                        location: "9a247a_1"
                    }),
                    n = i.default.useExperiment({
                        location: "9a247a_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        637929: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackMessageNotificationTimestamps: function() {
                    return u
                },
                default: function() {
                    return A
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("26989"),
                s = n("282109"),
                r = n("697218");

            function u(e, t) {
                var n;
                let i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                    u = s.default.isSuppressEveryoneEnabled(t),
                    o = s.default.isSuppressRolesEnabled(t),
                    d = null != e.mentions && e.mentions.some(e => e.id === i),
                    c = null == t || null == i ? null : l.default.getMember(t, i),
                    _ = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
                a.default.dispatch({
                    type: "MESSAGE_NOTIFICATION_SHOWN",
                    guildId: t,
                    mentioned: d,
                    roleMentioned: _ && !o,
                    everyoneMentioned: !0 === e.mention_everyone && !u
                })
            }
            let o = null,
                d = null,
                c = null,
                _ = null,
                f = {},
                h = {},
                E = {},
                g = {};
            class m extends i.default.Store {
                getGlobalStats() {
                    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: e(o),
                        approx_seconds_since_last_mention: e(d),
                        approx_seconds_since_last_role_mention: e(c),
                        approx_seconds_since_last_everyone_mention: e(_)
                    }
                }
                getStats(e) {
                    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
                    return {
                        approx_seconds_since_last_notification: t(o),
                        approx_seconds_since_last_mention: t(d),
                        approx_seconds_since_last_role_mention: t(c),
                        approx_seconds_since_last_everyone_mention: t(_),
                        approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
                        approx_seconds_since_last_guild_mention: null == e ? null : t(h[e]),
                        approx_seconds_since_last_guild_role_mention: null == e ? null : t(g[e]),
                        approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(E[e])
                    }
                }
            }
            var A = new m(a.default, {
                CONNECTION_OPEN: function() {
                    let e = e => null != e && Date.now() - e < 6e4;
                    for (let t in !e(o) && (o = null), !e(d) && (d = null), !e(c) && (c = null), !e(_) && (_ = null), f) !e(f[t]) && delete f[t];
                    for (let t in h) !e(h[t]) && delete h[t];
                    for (let t in g) !e(g[t]) && delete g[t];
                    for (let t in E) !e(E[t]) && delete E[t]
                },
                MESSAGE_NOTIFICATION_SHOWN: function(e) {
                    let {
                        guildId: t,
                        mentioned: n,
                        roleMentioned: i,
                        everyoneMentioned: a
                    } = e, l = Date.now();
                    o = l, null != t && (f[t] = l), n && (d = l, null != t && (h[t] = l)), i && (c = l, null != t && (g[t] = l)), a && (_ = l, null != t && (E[t] = l))
                }
            })
        },
        821343: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                PAGE_SIZE: function() {
                    return m
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("917351"),
                l = n.n(a),
                s = n("335710"),
                r = n("249654"),
                u = n("446674"),
                o = n("913144"),
                d = n("786742"),
                c = n("867965"),
                _ = n("233069"),
                f = n("42203"),
                h = n("660478"),
                E = n("449008"),
                g = n("755624");
            let m = 25,
                A = !1,
                T = !0,
                p = !1,
                S = !1,
                M = null,
                v = s.ThreadSortOrder.LATEST_ACTIVITY,
                C = [],
                N = 0;

            function O() {
                A = !1, T = !0, p = !1, S = !1, M = null, v = s.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, N = 0, C = []
            }

            function R(e, t) {
                return t === s.ThreadSortOrder.LATEST_ACTIVITY ? h.default.lastMessageId(e.id) : e.id
            }

            function I() {
                if (null == M) return !1;
                let e = !p,
                    t = f.default.getChannel(C[C.length - 1]),
                    n = null == t ? null : R(t, v);
                C = l(f.default.getAllThreadsForParent(M)).filter(e => e.isArchivedThread()).filter(t => {
                    var a;
                    if (0 !== i.size && (null === (a = t.appliedTags) || void 0 === a ? void 0 : a.some(e => i.has(e))) !== !0) return !1;
                    if (e || null == n) return !0;
                    {
                        let e = null == t ? null : R(t, v);
                        return null != e && r.default.compare(e, n) >= 0
                    }
                }).sort((e, t) => r.default.compare(R(e, v), R(t, v))).map(e => e.id).reverse().value()
            }

            function D(e) {
                if (!(C.indexOf(e) >= 0)) return !1;
                C = C.filter(t => t !== e)
            }
            let b = [];
            class y extends u.default.Store {
                initialize() {
                    this.waitFor(f.default, g.default, h.default)
                }
                get canLoadMore() {
                    return p && !A && !S
                }
                get nextOffset() {
                    return N
                }
                get isInitialLoad() {
                    return T
                }
                isLoading(e, t, n) {
                    return M === e && v === t && (0, E.areSetsEqual)(i, n) ? A : (O(), !1)
                }
                getThreads(e, t, n) {
                    return M === e && v === t && (0, E.areSetsEqual)(i, n) ? C : b
                }
            }
            y.displayName = "ArchivedThreadsStore";
            var L = new y(o.default, {
                CONNECTION_OPEN: O,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return D(t.id)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return M === t.parent_id && !!(0, d.isForumPostPinned)(t.id) && void D(t.id)
                },
                CHANNEL_DELETE: function(e) {
                    if (e.channel.id !== M) return !1;
                    O()
                },
                LOAD_ARCHIVED_THREADS: function(e) {
                    (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) && O(), M = e.channelId, v = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), A = !0, T = !1
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    if (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
                    let t = e.threads.filter(e => _.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
                    C = C.concat(t);
                    let n = f.default.getChannel(M);
                    null != n && n.isForumLikeChannel() && (0, c.trackForumMorePostsLoaded)({
                        guildId: n.guild_id,
                        channelId: n.id,
                        numArchivedThreads: C.length,
                        hasMoreThreads: e.hasMore,
                        filterTagIds: Array.from(e.tagFilter),
                        sortOrder: e.sortOrder
                    }), I(), p = e.hasMore, N = e.offset + m, A = !1, T = !1
                },
                LOAD_ARCHIVED_THREADS_FAIL: function(e) {
                    if (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
                    A = !1, S = !0, T = !1
                },
                RESORT_THREADS: function(e) {
                    return (null == M || null == e.channelId || M === e.channelId) && I()
                }
            })
        },
        263024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("702976");
            var i = n("843117"),
                a = n("872717"),
                l = n("913144"),
                s = n("404118"),
                r = n("295426"),
                u = n("716241"),
                o = n("507217"),
                d = n("233069"),
                c = n("271938"),
                _ = n("42203"),
                f = n("957255"),
                h = n("449008"),
                E = n("821343"),
                g = n("755624"),
                m = n("487269"),
                A = n("25932"),
                T = n("49111"),
                p = n("724210"),
                S = n("782340");

            function M(e, t) {
                return a.default.patch({
                    url: T.Endpoints.CHANNEL(e.id),
                    body: t
                }).then(t => (l.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: (0, d.createChannelRecordFromServer)(t.body)
                }), e.isForumPost() && null != e.parent_id && l.default.dispatch({
                    type: "RESORT_THREADS",
                    channelId: e.parent_id
                }), t))
            }

            function v(e, t) {
                l.default.dispatch({
                    type: "THREAD_MEMBER_LOCAL_UPDATE",
                    id: e.id,
                    guildId: e.getGuildId(),
                    userId: c.default.getId(),
                    isJoining: t
                })
            }
            var C = {
                archiveThread(e, t) {
                    let n = {
                        archived: !0
                    };
                    return t && (n.locked = !0), M(e, n)
                },
                async lockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !1), M(e, {
                        locked: !0,
                        archived: t
                    })
                },
                async unlockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !0), M(e, {
                        locked: !1,
                        archived: t
                    })
                },
                async unarchiveThread(e, t) {
                    let n = {
                            archived: !1
                        },
                        i = e.isForumPost();
                    t && (n.locked = !1);
                    try {
                        return await M(e, n)
                    } catch (e) {
                        var a, l;
                        throw (null === (a = e.body) || void 0 === a ? void 0 : a.code) === T.AbortCodes.TOO_MANY_THREADS ? s.default.show({
                            title: i ? S.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : S.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: i ? S.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : S.default.Messages.TOO_MANY_THREADS_MESSAGE
                        }) : (null === (l = e.body) || void 0 === l ? void 0 : l.code) === T.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? s.default.show({
                            title: S.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: S.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                        }) : 429 === e.status ? s.default.show({
                            title: i ? S.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : S.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: S.default.Messages.RATE_LIMITED
                        }) : s.default.show({
                            title: S.default.Messages.ERROR,
                            body: S.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        }), e
                    }
                },
                async unarchiveThreadIfNecessary(e) {
                    var t;
                    let n = _.default.getChannel(e),
                        i = f.default.can(T.Permissions.MANAGE_THREADS, n);
                    null != n && n.isArchivedThread() && (i || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
                },
                setInvitable: (e, t) => M(e, {
                    invitable: t
                }),
                async joinThread(e, t) {
                    e.isForumPost() && v(e, !0);
                    try {
                        return await a.default.post({
                            url: T.Endpoints.THREAD_MEMBER(e.id),
                            query: {
                                location: t
                            }
                        })
                    } catch (t) {
                        var n;
                        if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === T.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            s.default.show({
                                title: t ? S.default.Messages.CANNOT_JOIN_FORUM_POST : S.default.Messages.CANNOT_JOIN_THREAD,
                                body: t ? S.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : S.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else s.default.show({
                            title: S.default.Messages.ERROR,
                            body: S.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        });
                        e.isForumPost() && v(e, !1)
                    }
                },
                async addMember(e, t, n) {
                    try {
                        return await a.default.post({
                            url: T.Endpoints.THREAD_MEMBER(e.id, t),
                            query: {
                                location: n
                            }
                        })
                    } catch (t) {
                        var i;
                        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === T.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            s.default.show({
                                title: t ? S.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : S.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                                body: t ? S.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : S.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else s.default.show({
                            title: S.default.Messages.ERROR,
                            body: S.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                },
                leaveThread: (e, t) => (e.isForumPost() && v(e, !1), a.default.delete({
                    url: T.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })),
                removeMember: (e, t, n) => a.default.delete({
                    url: T.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                }),
                setAutoArchiveDuration: (e, t) => a.default.patch({
                    url: T.Endpoints.CHANNEL(e.id),
                    body: {
                        auto_archive_duration: t
                    }
                }),
                pin(e) {
                    let t = e.flags | p.ChannelFlags.PINNED;
                    this.updateFlags(e, t, e.isArchivedThread())
                },
                unpin(e) {
                    let t = e.flags & ~p.ChannelFlags.PINNED;
                    this.updateFlags(e, t)
                },
                async updateFlags(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: e.merge({
                            flags: t
                        })
                    });
                    let i = {
                        flags: t
                    };
                    n && (i.archived = !1);
                    try {
                        await a.default.patch({
                            url: T.Endpoints.CHANNEL(e.id),
                            body: i
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        })
                    }
                },
                async replacePin(e, t) {
                    let n = e.merge({
                            flags: e.flags & ~p.ChannelFlags.PINNED
                        }),
                        i = t.merge({
                            flags: t.flags | p.ChannelFlags.PINNED
                        });
                    l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: n
                    }), l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: i
                    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
                    try {
                        await a.default.patch({
                            url: T.Endpoints.CHANNEL(e.id),
                            body: {
                                flags: e.flags & ~p.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        }), l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        });
                        return
                    }
                    try {
                        await a.default.patch({
                            url: T.Endpoints.CHANNEL(t.id),
                            body: {
                                flags: t.flags | p.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }
                },
                openThreadCreationForMobile(e, t, n) {
                    (0, u.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                        location: n,
                        channel_id: e.id,
                        guild_id: e.guild_id
                    }), r.default.changeThreadSettings(e.id, {
                        parentMessageId: t,
                        isPrivate: !1,
                        location: n
                    }), null == t && (0, o.setActiveCommand)({
                        channelId: e.id,
                        command: null,
                        section: null
                    })
                },
                async setNotificationSettings(e, t) {
                    return (0, m.trackThreadNotificationSettingsUpdated)(e, t), !g.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), a.default.patch({
                        url: T.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                        body: t
                    })
                },
                loadArchivedThreads(e, t, n, s, r) {
                    !E.default.isLoading(t, n, s) && (l.default.dispatch({
                        type: "LOAD_ARCHIVED_THREADS",
                        channelId: t,
                        sortOrder: n,
                        tagFilter: s
                    }), a.default.get({
                        url: T.Endpoints.THREAD_SEARCH(t),
                        query: {
                            archived: !0,
                            sort_by: "last_message_time",
                            sort_order: "desc",
                            limit: E.PAGE_SIZE,
                            tag: s.size > 0 ? Array.from(s).join(",") : void 0,
                            tag_setting: i.ThreadSearchTagSetting.MATCH_SOME,
                            offset: r
                        },
                        retries: 2
                    }).then(i => {
                        let {
                            body: {
                                threads: a,
                                members: u,
                                has_more: o,
                                first_messages: d,
                                most_recent_messages: c
                            }
                        } = i;
                        l.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                            guildId: e,
                            channelId: t,
                            offset: r,
                            sortOrder: n,
                            tagFilter: s,
                            threads: a,
                            firstMessages: d,
                            mostRecentMessages: c,
                            members: (null != u ? u : []).map(e => (0, A.default)(e)),
                            owners: a.map(e => e.owner).filter(h.isNotNullish),
                            hasMore: o
                        })
                    }, () => {
                        l.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_FAIL",
                            channelId: t,
                            sortOrder: n,
                            tagFilter: s
                        })
                    }))
                },
                async searchThreads(e, t, n, s) {
                    let r = null != s && s.size > 0 ? Array.from(s).join(",") : void 0,
                        {
                            body: {
                                threads: u,
                                members: o,
                                first_messages: d,
                                most_recent_messages: c
                            }
                        } = await a.default.get({
                            url: T.Endpoints.THREAD_SEARCH(t),
                            query: {
                                name: n,
                                tag: r,
                                tag_setting: i.ThreadSearchTagSetting.MATCH_SOME
                            }
                        });
                    return l.default.dispatch({
                        type: "LOAD_THREADS_SUCCESS",
                        threads: u,
                        members: o,
                        guildId: e,
                        firstMessages: d,
                        mostRecentMessages: c
                    }), u.map(e => e.id)
                }
            }
        },
        800843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("560208"),
                u = n("233069"),
                o = n("42203");
            let d = {};

            function c(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(_)
            }

            function _(e) {
                if (!u.ALL_CHANNEL_TYPES.has(e.type)) return !1;
                let t = function(e) {
                    if (!(e.id in d)) {
                        var t, n;
                        d[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                            memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                        }
                    }
                    return d[e.id]
                }(e);
                null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
            }

            function f(e) {
                let {
                    channel: t
                } = e;
                return _(t)
            }

            function h(e) {
                let {
                    threads: t
                } = e;
                t.forEach(E)
            }

            function E(e) {
                if (null != e && !(e.id in d)) {
                    let t = o.default.getChannel(e.id);
                    if (null != t) return _(t), !0
                }
                return !1
            }
            class g extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getMemberCount(e) {
                    var t, n;
                    return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
                }
                getMemberIdsPreview(e) {
                    var t, n;
                    return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
                }
                getInitialOverlayState() {
                    return d
                }
            }
            g.displayName = "ThreadMembersStore";
            var m = new g(s.default, {
                CONNECTION_OPEN: function(e) {
                    d = {}, e.guilds.forEach(c)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMembers: t
                    } = e;
                    d = {
                        ...t
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    c(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, d = a.omitBy(d, e => e.guildId === t)
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, d = a.omitBy(d, e => e.parentId === t)
                },
                THREAD_CREATE: f,
                THREAD_UPDATE: f,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(_)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let t = d[e.id];
                    if (null == t) return !1;
                    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
                },
                SEARCH_FINISH: function(e) {
                    let t = !1;
                    for (let n of e.messages)
                        for (let e of n) t = E(e.thread) || t;
                    return e.threads.forEach(e => {
                        t = E(e) || t
                    }), t
                },
                LOAD_THREADS_SUCCESS: h,
                LOAD_ARCHIVED_THREADS_SUCCESS: h,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete d[t.id]
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = E(n.thread) || t;
                    return t
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, r.getThreadsFromGuildFeedFetch)(t)) n = E(e) || n;
                    return n
                }
            })
        },
        610730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("560208"),
                u = n("692038"),
                o = n("233069"),
                d = n("719926"),
                c = n("766274"),
                _ = n("42203"),
                f = n("377253"),
                h = n("648564"),
                E = n("49111");
            let g = new Set,
                m = {},
                A = {};

            function T(e, t) {
                o.ALL_CHANNEL_TYPES.has(e.type) && p(function(e) {
                    if (!(e.id in m)) {
                        var t;
                        m[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                            mostRecentRawMessage: null,
                            mostRecentMessage: null
                        }
                    }
                    return m[e.id]
                }(e), t)
            }

            function p(e, t) {
                var n;
                let i = (null !== (n = A[e.parentId]) && void 0 !== n ? n : 0) + 1;
                A[e.parentId] = i, t(e)
            }

            function S(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(M)
            }

            function M(e) {
                T(e, t => {
                    var n;
                    null != e.messageCount && (t.count = e.messageCount);
                    let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
                    null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
                })
            }

            function v(e) {
                if (null != e && !(e.id in m)) {
                    let t = _.default.getChannel(e.id);
                    if (null != t) return M(t), !0
                }
                return !1
            }

            function C(e) {
                let {
                    channel: t
                } = e;
                M(t)
            }

            function N(e) {
                let {
                    threads: t
                } = e;
                t.forEach(v)
            }
            class O extends l.default.Store {
                initialize() {
                    this.waitFor(_.default, f.default)
                }
                getCount(e) {
                    var t, n;
                    return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
                }
                getMostRecentMessage(e) {
                    var t, n;
                    let i = m[e];
                    return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = f.default.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, u.createMessageRecord)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
                }
                getChannelThreadsVersion(e) {
                    return A[e]
                }
                getInitialOverlayState() {
                    return m
                }
            }
            O.displayName = "ThreadMessageStore";
            var R = new O(s.default, {
                CONNECTION_OPEN: function(e) {
                    A = {}, g.clear(), e.guilds.forEach(S)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMessages: t
                    } = e;
                    for (let e in m = {
                            ...t
                        }) {
                        let n = t[e].mostRecentMessage;
                        null != n && (t[e].mostRecentMessage = new d.default({
                            ...n,
                            author: new c.default(n.author)
                        }))
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, m = a.omitBy(m, e => {
                        let n = e.guildId === t;
                        return n && delete A[e.parentId], n
                    })
                },
                THREAD_CREATE: C,
                THREAD_UPDATE: C,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t,
                        mostRecentMessages: n
                    } = e;
                    t.forEach(M), null == n || n.forEach(e => {
                        let t = _.default.getChannel(e.channel_id);
                        null != t && e.type !== E.MessageTypes.THREAD_STARTER_MESSAGE && T(t, t => {
                            t.mostRecentRawMessage = e, t.mostRecentMessage = null
                        })
                    })
                },
                LOAD_THREADS_SUCCESS: N,
                LOAD_ARCHIVED_THREADS_SUCCESS: N,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t)
                        for (let t of e) v(t.thread);
                    n.forEach(v)
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete m[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, m = a.omitBy(m, e => e.parentId === t), delete A[t]
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        optimistic: n,
                        isPushNotification: i,
                        sendMessageOptions: a
                    } = e;
                    if (n || i || null != a) return !1;
                    let l = _.default.getChannel(t.channel_id);
                    if (null == l || !o.THREAD_CHANNEL_TYPES.has(l.type) || ! function(e, t) {
                            return !(t.type === E.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === e.id) && !0
                        }(l, t)) return !1;
                    T(l, e => {
                        e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
                    })
                },
                MESSAGE_UPDATE: function(e) {
                    var t;
                    let {
                        message: n
                    } = e, i = m[n.channel_id], a = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
                    if (null == i || null == a || a.id !== n.id) return !1;
                    p(i, e => {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, u.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, u.updateServerMessage)(e.mostRecentRawMessage, n))
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, i = m[n];
                    if (null == i) return !1;
                    let a = n !== t,
                        l = !g.has(t);
                    p(i, e => {
                        var n;
                        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = a && l ? Math.max(e.count - 1, 0) : e.count, g.add(t)
                    })
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, i = m[n];
                    if (null == i) return !1;
                    let a = t.filter(e => {
                        let t = n !== e,
                            i = !g.has(e);
                        return t && i
                    }).length;
                    a > 0 && p(i, e => {
                        var n;
                        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= a, t.forEach(e => g.add(e))
                    })
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = v(n.thread) || t;
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    let n = _.default.getChannel(e.channelId);
                    if (null == n || !o.THREAD_CHANNEL_TYPES.has(n.type)) return t;
                    T(n, t => {
                        if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                        else {
                            var n;
                            let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                            t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, (null == i ? void 0 : i.type) !== E.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
                        }
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, r.getThreadsFromGuildFeedFetch)(t)) n = v(e) || n;
                    return n
                }
            })
        },
        487269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTimestampString: function() {
                    return E.default
                },
                trackThreadBrowserTab: function() {
                    return A
                },
                trackThreadBrowserOpened: function() {
                    return T
                },
                trackActiveThreadsPopoutOpened: function() {
                    return p
                },
                trackThreadNotificationSettingsUpdated: function() {
                    return S
                },
                useLastMessageTimestamp: function() {
                    return M
                }
            }), n("702976");
            var i = n("866227"),
                a = n.n(i),
                l = n("446674"),
                s = n("716241"),
                r = n("701916"),
                u = n("660478"),
                o = n("282109"),
                d = n("599110"),
                c = n("568734"),
                _ = n("34676"),
                f = n("299039"),
                h = n("755624"),
                E = n("319126"),
                g = n("648564"),
                m = n("49111");

            function A() {
                (0, s.trackWithMetadata)(m.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
            }

            function T() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
                (0, s.trackWithMetadata)(m.AnalyticEvents.OPEN_MODAL, {
                    type: "Thread Browser",
                    location_section: e
                })
            }

            function p() {
                d.default.track(m.AnalyticEvents.OPEN_POPOUT, {
                    type: "Active Threads Popout"
                })
            }

            function S(e, t) {
                var n, i;
                let a = (0, r.collectThreadMetadata)(e);
                if (null == a) return;
                let l = e.getGuildId(),
                    s = e.parent_id,
                    u = (0, _.getCurrentChannelSettings)(l, s),
                    f = e => {
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ALL_MESSAGES)) return _.MessageNotificationSettings[m.UserNotificationSettings.ALL_MESSAGES];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ONLY_MENTIONS)) return _.MessageNotificationSettings[m.UserNotificationSettings.ONLY_MENTIONS];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.NO_MESSAGES)) return _.MessageNotificationSettings[m.UserNotificationSettings.NO_MESSAGES];
                        return _.MessageNotificationSettings[m.UserNotificationSettings.NULL]
                    },
                    E = null !== (n = h.default.flags(e.id)) && void 0 !== n ? n : 0,
                    A = f(E),
                    T = h.default.isMuted(e.id),
                    p = (0, _.muteConfigToTimestamp)(h.default.getMuteConfig(e.id)),
                    {
                        can_send_message: S,
                        ...M
                    } = a,
                    v = {
                        ...M,
                        channel_id: e.id,
                        guild_id: l,
                        parent_id: s,
                        channel_type: e.type,
                        has_interacted_with_thread: (E & g.ThreadMemberFlags.HAS_INTERACTED) != 0,
                        parent_is_muted: o.default.isGuildOrCategoryOrChannelMuted(l, s),
                        old_thread_notification_setting: A,
                        new_thread_notification_setting: null != t.flags ? f(t.flags) : A,
                        parent_notification_setting: u.channel_message_notification_settings,
                        old_thread_is_muted: T,
                        new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : T,
                        old_thread_muted_until: p,
                        new_thread_muted_until: null != t.mute_config ? (0, _.muteConfigToTimestamp)(t.mute_config) : p
                    };
                d.default.track(m.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, v)
            }
            n("782340");
            let M = e => {
                var t, n;
                let i = (0, l.useStateFromStores)([u.default], () => u.default.lastMessageId(e.id)),
                    s = null != i ? f.default.extractTimestamp(i) : null,
                    r = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    o = null != r ? a(r).valueOf() : null;
                return null !== (n = null != s ? s : o) && void 0 !== n ? n : f.default.extractTimestamp(e.id)
            }
        },
        319126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("866227"),
                a = n.n(i),
                l = n("782340");
            let s = 3600,
                r = 24 * s,
                u = 30 * r,
                o = 12 * u,
                d = () => ({
                    seconds: l.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
                    minutes: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
                    hours: l.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
                    days: l.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
                    months: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
                    years: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => null != t && null != t[e],
                _ = (e, t, n) => {
                    var i, a, l;
                    return c(e, t) ? null !== (a = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== a ? a : null : null !== (l = null == n ? void 0 : n[e]) && void 0 !== l ? l : null
                };
            var f = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = a().diff(a(e), "s"),
                    l = null != t ? t() : void 0,
                    c = d(),
                    f = (e, t) => {
                        let i = _(e, l, n ? c : void 0);
                        return null == i ? null : "string" == typeof i ? i : i.format({
                            count: t
                        })
                    };
                if (i < 60) {
                    let e = (null == l ? void 0 : l.seconds) != null ? f("seconds", i) : f("minutes", 1);
                    if (null != e) return e
                }
                if (i < s) {
                    let e = f("minutes", Math.floor(i / 60));
                    if (null != e) return e
                }
                if (i < r) {
                    let e = f("hours", Math.floor(i / s));
                    if (null != e) return e
                }
                if (i < u) {
                    let e = f("days", Math.floor(i / r));
                    if (null != e) return e
                }
                if (i < o) {
                    let e = f("months", Math.floor(i / u));
                    if (null != e) return e
                }
                if (i >= o && (null == l ? void 0 : l.years) != null) {
                    let e = f("years", Math.floor(i / o));
                    if (null != e) return e
                }
                return a(e).format("LL")
            }
        },
        10802: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("446674"),
                l = n("913144"),
                s = n("386451"),
                r = n("662285"),
                u = n("271938"),
                o = n("982108"),
                d = n("42203"),
                c = n("341542"),
                _ = n("26989"),
                f = n("305961"),
                h = n("945956"),
                E = n("27618"),
                g = n("18494"),
                m = n("162771"),
                A = n("49111");
            let T = new s.default((e, t) => {
                (null != f.default.getGuild(e) || c.default.isUnavailable(e)) && l.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    guildId: e,
                    subscriptions: t
                })
            });

            function p(e, t) {
                T.forEach(n => {
                    var a;
                    n !== m.default.getGuildId() && n !== h.default.getGuildId() && n !== (null === (a = d.default.getChannel(g.default.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && (null == i || i.guildId !== n) && (T.clearWithoutFlushing(n, e), t && l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: n,
                        subscriptions: T.get(n)
                    }))
                })
            }

            function S(e, t) {
                return T.subscribeToGuild(e), null != t && o.default.getSection(t) === A.ChannelSections.MEMBERS && M(e, t, s.DEFAULT_RANGES)
            }

            function M(e, t, n) {
                let i = d.default.getChannel(t);
                if (null == i) return !1;
                let a = i.getGuildId();
                return (a !== e && e === A.FAVORITES && T.subscribeToGuild(a), null != i && i.isThread()) ? i.type === A.ChannelTypes.ANNOUNCEMENT_THREAD ? T.subscribeChannel(a, i.parent_id, n) : !!i.isActiveThread() && T.subscribeThreadMemberList(a, t, g.default.getChannelId()) : T.subscribeChannel(a, t, n)
            }

            function v(e) {
                let {
                    type: t
                } = e;
                "CONNECTION_OPEN" === t && p(!0, !1);
                let n = m.default.getGuildId();
                null != n && S(n, g.default.getChannelId(n)), T.forEach(e => {
                    null == f.default.getGuild(e) ? T.clearWithoutFlushing(e, !0) : l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: T.get(e)
                    })
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, i = c.default.isUnavailable(t);
                return !i && S(t, n)
            }

            function N() {
                return S(m.default.getGuildId(), g.default.getChannelId())
            }

            function O() {
                let e = r.default.getSyncingWith();
                if (null == e) null != i && (T.unsubscribeUser(i.guildId, i.userId), i = null);
                else {
                    let {
                        userId: t
                    } = e;
                    if (null != i && i.userId === t || E.default.isFriend(t)) return !1;
                    let n = _.default.memberOf(t);
                    if (0 === n.length) return !1;
                    let [a] = n;
                    i = {
                        guildId: a,
                        userId: t
                    }, T.subscribeUser(a, t)
                }
                return !1
            }
            class R extends a.default.Store {
                initialize() {
                    this.waitFor(d.default, f.default, m.default, g.default, h.default, u.default, o.default), this.syncWith([r.default], O), this.syncWith([o.default], N)
                }
                getSubscribedThreadIds() {
                    return T.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return T.isSubscribedToThreads(e)
                }
                isSubscribedToAnyGuildChannel(e) {
                    let t = T.get(e).channels;
                    return null != t && Object.keys(t).length > 0
                }
            }
            R.displayName = "GuildSubscriptionsStore";
            var I = new R(l.default, {
                CONNECTION_OPEN: v,
                CONNECTION_RESUMED: v,
                CONNECTION_CLOSED: function() {
                    p(!1, !1)
                },
                IDLE: function(e) {
                    let {
                        idle: t
                    } = e;
                    if (!t) return !1;
                    p(!1, !0)
                },
                LOGOUT: function() {
                    T.reset()
                },
                VOICE_CHANNEL_SELECT: C,
                CHANNEL_SELECT: C,
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.id === m.default.getGuildId() && N()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        e !== u.default.getId() && T.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        T.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ranges: i
                    } = e;
                    return M(t, n, i)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return T.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return S(t, n)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return t.isArchivedThread() ? T.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && g.default.getChannelId() === t.id && void T.subscribeThreadMemberList(t.guild_id, t.id, g.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return T.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: N
            })
        },
        34676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NotificationLabels: function() {
                    return a
                },
                NotificationLabel: function() {
                    return E
                },
                MessageNotificationSettings: function() {
                    return g
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return m
                },
                muteConfigToTimestamp: function() {
                    return T
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return p
                },
                getCurrentGuildSettings: function() {
                    return S
                },
                getManyCurrentGuildSettings: function() {
                    return M
                },
                getCurrentChannelSettings: function() {
                    return v
                },
                getManyCurrentChannelSettings: function() {
                    return C
                }
            }), n("702976"), n("222007");
            var i, a, l, s, r = n("716241"),
                u = n("637929"),
                o = n("42203"),
                d = n("282109"),
                c = n("568734"),
                _ = n("49111"),
                f = n("133335"),
                h = n("397336");
            (l = i || (i = {})).GUILD = "guild", l.CHANNEL = "channel", (s = a || (a = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", s.ForumThreadsCreatedOff = "disabled forum thread created notifs", s.SuppressEveryoneOn = "enabled suppress everyone", s.SuppressEveryoneOff = "disabled suppress everyone", s.SuppressRolesOn = "enabled suppress roles", s.SuppressRolesOff = "disabled suppress roles", s.HighlightsOn = "enabled highlights", s.HighlightsOff = "disabled highlights", s.MobilePushOn = "enabled mobile push notifications", s.MobilePushOff = "disabled mobile push notifications", s.UnreadsAll = "unreads set to all messages", s.UnreadsMentions = "unreads set to mentions", s.UnreadsDefault = "unreads set to the default", s.NotificationsAll = "notifications set to all messages", s.NotificationsMentions = "notifications set to mentions", s.NotificationsNothing = "notifications set to nothing", s.NotificationsDefault = "notifications set to the default", s.PresetAll = "notification preset set to all messages", s.PresetMentions = "notification preset set to mentions", s.PresetNothing = "notification preset set to nothing", s.PresetDefault = "notification preset set to the default", s.OptedIn = "opted in to entity", s.OptedOut = "opted out from entity", s.Favorited = "favorited", s.UnFavorited = "unfavorited", s.Muted = "muted", s.Unmuted = "unmuted", s.MutedScheduledEvents = "muted scheduled events", s.UnmutedScheduledEvents = "unmuted scheduled events", s.OverrideCreated = "channel override created", s.OverrideDeleted = "channel override deleted";
            let E = {
                    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
                    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
                    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
                    highlights: e => e ? "enabled highlights" : "disabled highlights",
                    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
                    optedIn: e => e ? "opted in to entity" : "opted out from entity",
                    favorited: e => e ? "favorited" : "unfavorited",
                    muted: e => e ? "muted" : "unmuted",
                    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
                    unreads: e => e === f.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === f.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
                    notifications: e => e === _.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === _.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === _.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
                },
                g = Object.freeze({
                    [_.UserNotificationSettings.ALL_MESSAGES]: "All",
                    [_.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                    [_.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                    [_.UserNotificationSettings.NULL]: null
                });

            function m(e, t, n, i, a) {
                var l, s;
                let o = function(e) {
                        var t, n, i, a, l, s, r;
                        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = null != u.mute_config && null != u.mute_config.end_time ? new Date(u.mute_config.end_time).getTime() : e.guild_muted_until,
                            d = null != u.message_notifications ? g[u.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: o,
                            guild_flags: null !== (t = u.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = u.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: d,
                            guild_suppress_roles: null !== (i = u.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (a = u.mobile_push) && void 0 !== a ? a : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (l = u.notify_highlights) && void 0 !== l ? l : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (s = u.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (r = u.mute_scheduled_events) && void 0 !== r ? r : e.guild_scheduled_events_muted
                        }
                    },
                    d = o(n),
                    f = o(S(e), t),
                    E = A(d, f, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    m = null !== (l = E("guild_flags")) && void 0 !== l ? l : 0,
                    T = (null !== (s = f.guild_flags) && void 0 !== s ? s : 0) ^ m,
                    p = 0 === (0, c.removeFlags)(T, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                r.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...f,
                    ...u.default.getStats(e),
                    location: a,
                    guild_id: e,
                    update_type: "guild",
                    label: i,
                    guild_flags_old: E("guild_flags"),
                    guild_is_muted_old: E("guild_is_muted"),
                    guild_suppress_roles_old: E("guild_suppress_roles"),
                    guild_notify_highlights_old: E("guild_notify_highlights"),
                    guild_suppress_everyone_old: E("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: E("guild_message_notification_settings"),
                    is_opt_in_only_change: p
                })
            }

            function A(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function T(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function p(e, t, n, i, a, l) {
                var s, d;
                let f = function(t) {
                        var n, i;
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = null !== (n = a.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            s = null != a.message_notifications ? g[a.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            r = null == e ? null : !0 === l || null != s;
                        return {
                            channel_is_muted: l,
                            channel_is_overridden: r,
                            channel_flags: null !== (i = a.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: s,
                            channel_muted_until: T(a.mute_config)
                        }
                    },
                    E = f(i),
                    m = f(v(e, t), n),
                    p = A(E, m, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    S = o.default.getChannel(t),
                    M = null !== (s = p("channel_flags")) && void 0 !== s ? s : 0,
                    C = (null !== (d = m.channel_flags) && void 0 !== d ? d : 0) ^ M,
                    N = 0 === (0, c.removeFlags)(C, h.ChannelNotificationSettingsFlags.FAVORITED, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                r.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...m,
                    ...u.default.getStats(e),
                    location: l,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    label: a,
                    parent_id: null != S ? S.parent_id : null,
                    channel_flags_old: p("channel_flags"),
                    channel_is_muted_old: p("channel_is_muted"),
                    channel_muted_until_old: p("channel_muted_until"),
                    channel_is_overridden_old: p("channel_is_overridden"),
                    channel_message_notification_settings_old: p("channel_message_notification_settings"),
                    is_opt_in_only_change: N
                })
            }

            function S(e) {
                let t = d.default.isMuted(e),
                    n = d.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: d.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: d.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: d.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: d.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: g[d.default.getMessageNotifications(e)],
                    guild_notify_highlights: d.default.getNotifyHighlights(e),
                    guild_flags: d.default.getGuildFlags(e)
                }
            }

            function M(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, S(e))), t
            }

            function v(e, t) {
                let n = d.default.isChannelMuted(e, t),
                    i = d.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: g[d.default.getChannelMessageNotifications(e, t)],
                    channel_flags: d.default.getChannelIdFlags(e, t)
                }
            }

            function C(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, v(e, t))), n
            }
        },
        843117: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                ThreadSearchTagSetting: function() {
                    return i
                }
            }), n("222007"), (a = i || (i = {})).MATCH_ALL = "match_all", a.MATCH_SOME = "match_some"
        }
    }
]);
//# sourceMappingURL=8240.ac5c949d8bd9ea6b8d68.js.map