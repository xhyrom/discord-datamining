(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4532"], {
        240249: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCachedCommand: function() {
                    return h
                },
                getCachedApplicationSection: function() {
                    return I
                },
                getCachedResults: function() {
                    return S
                },
                getChangeKeys: function() {
                    return g
                },
                useDiscovery: function() {
                    return A
                },
                executeQuery: function() {
                    return _
                },
                useQuery: function() {
                    return E
                },
                useCommand: function() {
                    return T
                },
                useCommandsForApplication: function() {
                    return N
                },
                getCommandTypeCount: function() {
                    return y
                },
                useSearchOpenState: function() {
                    return O
                },
                isInIndexExperiment: function() {
                    return P
                }
            });
            var l = n("884691"),
                i = n("446674"),
                o = n("305961"),
                a = n("697218"),
                u = n("507217"),
                d = n("589777"),
                r = n("14090"),
                s = n("988721"),
                c = n("972620"),
                p = n("216193"),
                m = n("166004"),
                f = n("524768"),
                C = n("317041"),
                v = n("49111");

            function h(e, t) {
                var n, l, i, o;
                if (null == t) return {
                    application: void 0,
                    command: void 0
                };
                if (!P({
                        location: "getCachedCommand"
                    })) {
                    let e = p.default.getCommand(t),
                        n = p.default.getApplication(null == e ? void 0 : e.applicationId);
                    return {
                        command: e,
                        application: n
                    }
                }
                let a = s.default.getContextState(e),
                    u = s.default.getUserState(),
                    d = (null !== (i = null === (n = a.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : []).concat(null !== (o = null === (l = u.result) || void 0 === l ? void 0 : l.sections) && void 0 !== o ? o : []);
                for (let e of d) {
                    let n = e.commands.find(e => e.id === t);
                    if (null != n) return {
                        application: e.descriptor.application,
                        command: n
                    }
                }
                return {
                    application: void 0,
                    command: void 0
                }
            }

            function I(e, t, n) {
                var l, i, o, a, u, d;
                if (!P({
                        location: "getCachedApplicationSection"
                    })) return null === (a = m.default.getApplicationSections(e.id, t)) || void 0 === a ? void 0 : a.find(e => e.id === n);
                let r = s.default.getContextState(e),
                    c = s.default.getUserState(),
                    p = (null !== (u = null === (l = r.result) || void 0 === l ? void 0 : l.sections) && void 0 !== u ? u : []).concat(null !== (d = null === (i = c.result) || void 0 === i ? void 0 : i.sections) && void 0 !== d ? d : []);
                return null === (o = p.find(e => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === n
                })) || void 0 === o ? void 0 : o.descriptor
            }

            function S(e, t, n) {
                if (!P({
                        location: "getCachedResults"
                    })) {
                    var l, i;
                    return {
                        commands: null !== (l = m.default.getQueryCommands(e.id, t, n)) && void 0 !== l ? l : [],
                        sections: null !== (i = m.default.getApplicationSections(e.id, t)) && void 0 !== i ? i : []
                    }
                }
                let o = s.default.query(e, {
                    commandType: t,
                    text: n
                }, {
                    sortByScore: !0,
                    allowFetch: !1
                });
                return {
                    commands: o.commands,
                    sections: o.descriptors
                }
            }

            function g(e, t, n) {
                if (!P({
                        location: "getChangeKeys"
                    }, {
                        autoTrackExposure: !1
                    })) return [m.default.getQueryCommands(e.id, t, n)];
                let l = s.default.getContextState(e),
                    i = s.default.getUserState();
                return [null == l ? void 0 : l.result, null == i ? void 0 : i.result]
            }

            function A(e, t, n) {
                if (!L({
                        location: "useDiscovery"
                    })) {
                    var a, u;
                    return (0, m.useDiscoveryState)(e, t.commandType, null !== (a = n.placeholderCount) && void 0 !== a ? a : 0, null !== (u = n.limit) && void 0 !== u ? u : 10, {
                        canOnlyUseTextCommands: t.builtIns === c.BuiltInCommandFilter.ONLY_TEXT,
                        canUseFrecency: n.includeFrecency
                    })
                }
                let r = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: p,
                        commands: f,
                        sectionedCommands: h,
                        loading: I
                    } = (0, s.useDiscoveryState)(e, r, t, n),
                    [S, g] = l.useState(null),
                    A = l.useRef(!1);
                A.current = I;
                let _ = l.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let l = 0; l < n.placeholderCount; l++) e.push(R(l, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return l.useMemo(() => {
                    let e = {
                        loading: A,
                        commands: f,
                        activeSections: p,
                        commandsByActiveSection: h,
                        filteredSectionId: S,
                        hasMoreAfter: !1,
                        placeholders: I ? _ : [],
                        sectionDescriptors: p,
                        filterSection: e => {
                            g(e)
                        },
                        scrollDown: v.NOOP
                    };
                    if (null != S) {
                        let t = h.find(e => e.section.id === S);
                        e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
                    }
                    if (I) {
                        let t = h[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: [...t.data, ..._]
                        }, ...h.slice(1)];
                        else {
                            let t = d.BUILT_IN_SECTIONS[C.BuiltInSectionId.BUILT_IN];
                            e.activeSections = [t], e.commandsByActiveSection = [{
                                section: t,
                                data: _
                            }]
                        }
                        e.commands = [...f, ..._]
                    }
                    return e
                }, [f, p, S, h, I, _])
            }

            function _(e, t, n) {
                if (!P({
                        location: "executeQuery"
                    })) {
                    var l, i, a, r, c;
                    return !0 === n.allowFetch && u.querySearchManager({
                        channel: e,
                        guild: null != e.guild_id ? o.default.getGuild(e.guild_id) : null
                    }, null !== (l = t.text) && void 0 !== l ? l : "", null !== (i = n.limit) && void 0 !== i ? i : 10, t.commandType), {
                        commands: null !== (r = m.default.getQueryCommands(e.id, t.commandType, null !== (a = t.text) && void 0 !== a ? a : "")) && void 0 !== r ? r : [],
                        sections: null !== (c = m.default.getApplicationSections(e.id, t.commandType)) && void 0 !== c ? c : []
                    }
                }
                let {
                    descriptors: p,
                    commands: f,
                    loading: v
                } = s.default.query(e, t, n), h = [];
                if (null != n.placeholderCount && v)
                    for (let e = 0; e < n.placeholderCount; e++) h.push(R(e, t.commandType));
                return {
                    commands: v ? [...f, ...h] : f,
                    sections: v && 0 === p.length ? [d.BUILT_IN_SECTIONS[C.BuiltInSectionId.BUILT_IN]] : p
                }
            }

            function E(e, t, n) {
                if (!L({
                        location: "useQuery"
                    })) {
                    var a, u;
                    return (0, m.useQueryState)(e, t.commandType, null !== (a = t.text) && void 0 !== a ? a : "", null !== (u = n.limit) && void 0 !== u ? u : 10)
                }
                let r = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: c,
                        commands: p,
                        loading: f
                    } = (0, s.useQueryState)(e, r, t, n),
                    h = l.useMemo(() => {
                        let e = [];
                        if (null != n.placeholderCount)
                            for (let l = 0; l < n.placeholderCount; l++) e.push(R(l, t.commandType));
                        return e
                    }, [t.commandType, n.placeholderCount]);
                return l.useMemo(() => ({
                    commands: f ? [...p, ...h] : p,
                    sections: f && 0 === c.length ? [d.BUILT_IN_SECTIONS[C.BuiltInSectionId.BUILT_IN]] : c,
                    scrollDown: v.NOOP
                }), [f, p, c, h])
            }

            function T(e, t) {
                var n, o, d, r, c;
                if (!L({
                        location: "useCommand"
                    })) {
                    let n = (0, i.useStateFromStores)([a.default], () => {
                            if (null == e ? void 0 : e.isDM()) {
                                let t = e.getRecipientId(),
                                    n = a.default.getUser(t);
                                if (null != n && n.bot) return n
                            }
                            return null
                        }, [e]),
                        {
                            command: o,
                            application: r
                        } = (0, i.useStateFromStoresObject)([p.default], () => {
                            let e = null != t ? p.default.getCommand(t) : void 0,
                                n = p.default.getApplication(null == e ? void 0 : e.applicationId);
                            return {
                                command: e,
                                application: n
                            }
                        });
                    return (l.useEffect(() => {
                        null != e && null == o && (null != n ? u.fetchCommandsForApplication({
                            guildId: null,
                            channelId: e.id,
                            applicationId: n.id
                        }) : null != e.guild_id && null != t && u.fetchCommand(e.guild_id, e.id, t))
                    }, [n, e, o, t]), null == e || null == e.guild_id && (null == n || null == r || n.id !== (null === (d = r.bot) || void 0 === d ? void 0 : d.id))) ? {
                        command: void 0,
                        application: void 0
                    } : {
                        command: o,
                        application: r
                    }
                }
                let m = (0, s.useContextIndexState)(e, !0),
                    f = (0, s.useUserIndexState)(!0),
                    C = (null !== (r = null === (n = m.result) || void 0 === n ? void 0 : n.sections) && void 0 !== r ? r : []).concat(null !== (c = null === (o = f.result) || void 0 === o ? void 0 : o.sections) && void 0 !== c ? c : []);
                for (let e of C)
                    for (let n of e.commands)
                        if (n.id === t) return {
                            command: n,
                            application: e.descriptor.application
                        };
                return {
                    command: void 0,
                    application: void 0
                }
            }

            function N(e, t, n) {
                if (!L({
                        location: "useCommandsForApplication"
                    })) return l.useEffect(() => {
                    u.fetchCommands(e.guild_id, e.id, n)
                }, [n, e]), (0, i.useStateFromStoresObject)([p.default], () => {
                    let l = p.default.getApplication(t),
                        i = p.default.getCommands(n, e.id);
                    return {
                        commands: i,
                        application: l
                    }
                });
                let o = (0, s.useContextIndexState)(e, !0),
                    a = (0, s.useUserIndexState)(!0);
                return l.useMemo(() => {
                    var e, l, i, u, d;
                    let r = (null !== (u = null === (e = o.result) || void 0 === e ? void 0 : e.sections) && void 0 !== u ? u : []).concat(null !== (d = null === (l = a.result) || void 0 === l ? void 0 : l.sections) && void 0 !== d ? d : []),
                        s = r.find(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === t
                        });
                    return {
                        application: null == s ? void 0 : null === (i = s.descriptor) || void 0 === i ? void 0 : i.application,
                        commands: null == s ? void 0 : s.commands.filter(e => n.includes(e.id))
                    }
                }, [null == o ? void 0 : o.result, null == a ? void 0 : a.result, t, n])
            }

            function y(e, t, n) {
                var l, i, a, u, d, r;
                if (!P({
                        location: "getCommandTypeCount"
                    })) {
                    if (e.isPrivate()) return null;
                    {
                        let l = null != n ? n : null === (a = o.default.getGuild(e.guild_id)) || void 0 === a ? void 0 : a.applicationCommandCounts;
                        return null !== (u = null == l ? void 0 : l[t]) && void 0 !== u ? u : 0
                    }
                }
                let c = s.default.getContextState(e),
                    p = s.default.getUserState();
                return (null !== (d = null === (l = c.result) || void 0 === l ? void 0 : l.commandsByType[t]) && void 0 !== d ? d : 0) + (null !== (r = null === (i = p.result) || void 0 === i ? void 0 : i.commandsByType[t]) && void 0 !== r ? r : 0)
            }

            function O() {
                !L({
                    location: "useSearchOpenState"
                }) && (0, m.useSearchStoreOpenState)()
            }

            function P(e, t) {
                return r.default.getCurrentConfig(e, t).enabled
            }

            function L(e, t) {
                let [n] = l.useState(P(e, t));
                return n
            }

            function R(e, t) {
                return {
                    type: t,
                    inputType: f.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }
            }
        },
        216193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("917351"),
                i = n.n(l),
                o = n("693566"),
                a = n.n(o),
                u = n("446674"),
                d = n("913144"),
                r = n("798609"),
                s = n("140596"),
                c = n("42203"),
                p = n("957255"),
                m = n("507217"),
                f = n("166004"),
                C = n("389153");
            let v = new Map,
                h = new Set,
                I = new Set,
                S = new a({
                    max: 1e4
                }),
                g = new a({
                    max: 1e4
                }),
                A = e => {
                    let {
                        guildId: t,
                        channelId: n,
                        params: l,
                        includeApplications: i
                    } = e;
                    return (0, f.search)(n, l).then(e => {
                        var l;
                        if (null == e) return;
                        if (null != t && i && h.add(t), 0 === e.applicationCommands.length && (null == e.applications || 0 === e.applications.length)) return;
                        let o = (0, C.buildApplicationCommands)(e.applicationCommands);
                        m.updateRegistry(o, null !== (l = e.applications) && void 0 !== l ? l : [], n)
                    })
                },
                _ = i.debounce(e => {
                    let {
                        applicationId: t,
                        guildId: n,
                        channelId: l,
                        includeApplications: i
                    } = e, o = c.default.getChannel(l);
                    if (null != o)(0, C.canUseApplicationCommands)(p.default, s.default, !1, o) && A({
                        guildId: n,
                        channelId: l,
                        includeApplications: i,
                        params: {
                            type: r.ApplicationCommandType.CHAT,
                            includeApplications: i,
                            applicationId: t
                        }
                    })
                }, 250),
                E = i.debounce((e, t, n, l) => {
                    let i = [...n].filter(C.isSnowflake);
                    if (0 === i.length) return;
                    let o = c.default.getChannel(t);
                    if (null == o || !(0, C.canUseApplicationCommands)(p.default, s.default, !1, o)) return;
                    let a = i.slice(0, 100),
                        u = i.slice(100);
                    A({
                        guildId: e,
                        channelId: t,
                        includeApplications: l,
                        params: {
                            type: r.ApplicationCommandType.CHAT,
                            includeApplications: l,
                            commandIds: a,
                            cursor: void 0,
                            limit: 0
                        }
                    }).then(() => {
                        u.length > 0 && E(e, t, new Set(u), l)
                    })
                }, 250);
            class T extends u.default.Store {
                hasCommand(e) {
                    return null != e && S.has(e)
                }
                getApplication(e) {
                    if (null != e) return v.get(e)
                }
                getCommand(e) {
                    if (null != e) return S.get(e)
                }
                getCommands(e, t) {
                    return e.reduce((e, n) => {
                        let l = g.get(n);
                        return (null == l ? void 0 : l.channelId) === t && e.push(l.command), e
                    }, [])
                }
            }
            T.displayName = "ApplicationCommandRegistryStore";
            let N = new T(d.default, {
                APPLICATION_COMMAND_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandId: n,
                        guildId: l
                    } = e;
                    if (S.has(n)) return;
                    I.add(n);
                    let i = null != l && !h.has(l);
                    E(l, t, I, i)
                },
                APPLICATION_COMMANDS_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandIds: n,
                        guildId: l
                    } = e;
                    n.forEach(e => {
                        var n;
                        (null === (n = g.get(e)) || void 0 === n ? void 0 : n.channelId) !== t && I.add(e)
                    });
                    let i = null != l && !h.has(l);
                    E(l, t, I, i)
                },
                APPLICATION_COMMANDS_FETCH_FOR_APPLICATION: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        applicationId: l
                    } = e;
                    _({
                        guildId: n,
                        channelId: t,
                        applicationId: l,
                        includeApplications: !0
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    h.delete(t)
                },
                APPLICATION_COMMAND_REGISTRY_UPDATE: function(e) {
                    let {
                        applications: t,
                        commands: n,
                        channelId: l
                    } = e;
                    for (let e of t) v.set(e.id, e);
                    for (let e of n) I.delete(e.id), S.set(e.id, e), g.set(e.id, {
                        channelId: l,
                        command: e
                    })
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: function(e) {
                    let {
                        command: t
                    } = e;
                    null != t && S.set(t.id, t)
                },
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: function(e) {
                    var t, n;
                    let {
                        commandType: l,
                        state: i
                    } = e;
                    l === r.ApplicationCommandType.CHAT && (null === (t = i.applicationCommands) || void 0 === t || t.forEach(e => {
                        S.set(e.id, e)
                    }), null === (n = i.applicationSections) || void 0 === n || n.forEach(e => {
                        null != e.application && v.set(e.application.id, e.application)
                    }))
                },
                LOGOUT: function() {
                    v.clear(), h.clear(), I.clear(), S.reset(), g.reset()
                }
            });
            var y = N
        },
        166004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                search: function() {
                    return D
                },
                default: function() {
                    return W
                },
                useSearchStoreOpenState: function() {
                    return j
                },
                useDiscoveryState: function() {
                    return K
                },
                useQueryState: function() {
                    return $
                }
            });
            var l = n("884691"),
                i = n("483366"),
                o = n.n(i),
                a = n("693566"),
                u = n.n(a),
                d = n("446674"),
                r = n("872717"),
                s = n("913144"),
                c = n("798609"),
                p = n("763898"),
                m = n("38654"),
                f = n("252063"),
                C = n("140596"),
                v = n("685841"),
                h = n("872173"),
                I = n("374363"),
                S = n("42203"),
                g = n("923959"),
                A = n("305961"),
                _ = n("957255"),
                E = n("18494"),
                T = n("599110"),
                N = n("589777"),
                y = n("369010"),
                O = n("342564"),
                P = n("524768"),
                L = n("389153"),
                R = n("317041"),
                M = n("49111");

            function D(e, t, n) {
                var l;
                let i;
                if ((null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted)) return Promise.resolve(null);
                let o = {
                    type: t.type,
                    role_ids: null === (l = t.roleIds) || void 0 === l ? void 0 : l.join(",")
                };
                "applicationId" in t && null != t.applicationId ? (o.application_id = t.applicationId, i = "application") : "query" in t ? (o.query = t.query, o.limit = t.limit, o.cursor = t.cursor, i = "query") : "cursor" in t ? (o.limit = t.limit, o.cursor = t.cursor, null != t.commandIds && t.commandIds.length > 0 && (o.command_ids = t.commandIds.join(",")), i = "discovery") : i = "unknown", "includeApplications" in t && (o.include_applications = t.includeApplications), "checkPermissions" in t && (o.check_permissions = t.checkPermissions);
                let a = async l => {
                    var i;
                    return await new Promise(e => {
                        setTimeout(e, l)
                    }), D(e, {
                        ...t,
                        retries: (null !== (i = t.retries) && void 0 !== i ? i : 0) + 1
                    }, n)
                };
                (null == t.retries || 0 === t.retries) && (t.start = performance.now());
                let u = e => {
                    var l, a, u;
                    if (null == t.start) return;
                    let d = performance.now() - t.start;
                    T.default.track(M.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: d,
                        aborted: null !== (l = null == n ? void 0 : n.signal.aborted) && void 0 !== l && l,
                        error: e,
                        kind: i,
                        command_type: t.type,
                        include_applications: null !== (a = o.include_applications) && void 0 !== a && a,
                        retries: null !== (u = t.retries) && void 0 !== u ? u : 0
                    })
                };
                return r.default.get({
                    url: M.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
                    query: o,
                    signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
                }).then(e => {
                    var t, n, l;
                    return 202 === e.status ? a(5e3) : (u(!1), {
                        applicationCommands: e.body.application_commands,
                        applications: e.body.applications,
                        nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
                        prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
                        repaired: null === (l = e.body.cursor) || void 0 === l ? void 0 : l.repaired
                    })
                }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (u(!0), null) : 429 === e.status ? a(1e3 * e.body.retry_after) : (u(!0), null))
            }
            let U = (e, t, n) => {
                let {
                    channel: l,
                    guild: i
                } = e;
                return null != l ? (0, N.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
                    channel: l,
                    guild: i
                })) : []
            };

            function w(e, t) {
                if (0 === t.length) return e;
                let n = [...e],
                    l = (0, L.buildApplicationCommands)(t).filter(e => {
                        let t = n.findIndex(t => t.id === e.id);
                        return !(t >= 0) || (n[t] = e, !1)
                    });
                return [...n, ...l]
            }

            function b(e) {
                let t = e.map(L.getApplicationCommandSection);
                return t.concat(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])
            }
            let x = (e, t) => ({
                    type: t,
                    inputType: P.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }),
                B = [N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN]];
            class H extends d.default.Store {
                initialize() {
                    this.waitFor(I.default), this.syncWith([_.default], () => {
                        this.shouldResetAll = !0
                    }), this.syncWith([I.default], k)
                }
                getChannelState(e, t) {
                    var n;
                    return null === (n = z.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
                }
                getOrInsertChannelState(e, t) {
                    let n = z.channelStates,
                        l = n.has(e);
                    if (T.default.track(M.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: !l,
                            size: n.length
                        }), !l) {
                        let t = () => ({
                                discoveryInitialized: !1,
                                topCursor: null,
                                scrollDownCursor: null,
                                applicationSections: null,
                                applicationCommands: null,
                                filteredSectionId: null,
                                pendingQueries: new Map,
                                queries: new Map,
                                queriedApplicationId: null,
                                sawFrecencySection: !1
                            }),
                            l = {
                                [c.ApplicationCommandType.CHAT]: t(),
                                [c.ApplicationCommandType.MESSAGE]: t(),
                                [c.ApplicationCommandType.USER]: t()
                            };
                        n.set(e, l)
                    }
                    return n.get(e)[t]
                }
                getApplicationSections(e, t) {
                    var n, l;
                    return null !== (l = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== l ? l : B
                }
                getQueryCommands(e, t, n) {
                    var l, i, o;
                    let a = this.getChannelState(e, t);
                    return null !== (o = null == a ? void 0 : null === (l = a.queries.get(n)) || void 0 === l ? void 0 : l.commands) && void 0 !== o ? o : null == a ? void 0 : null === (i = a.pendingQueries.get(n)) || void 0 === i ? void 0 : i.commands
                }
                hasQueryResults(e, t, n) {
                    var l, i;
                    return null !== (i = null === (l = this.getChannelState(e, t)) || void 0 === l ? void 0 : l.queries.has(n)) && void 0 !== i && i
                }
                constructor(...e) {
                    super(...e), this.channelStates = new u({
                        max: 5
                    }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
                }
            }

            function F(e) {
                var t;
                let {
                    guildId: n
                } = e, l = E.default.getChannelId();
                return null != l && (null === (t = S.default.getChannel(l)) || void 0 === t ? void 0 : t.guild_id) !== n ? G(n) : z.componentIsOpen ? (z.shouldResetGuild = n, !1) : G(n)
            }

            function G(e) {
                let t = g.default.getChannels(e),
                    n = t[0, g.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[g.GUILD_VOCAL_CHANNELS_KEY]),
                    l = z.channelStates.length;
                for (let e of n) z.channelStates.del(e.channel.id);
                return z.channelStates.length !== l
            }

            function q() {
                let e = z.channelStates.length;
                return z.channelStates.keys().forEach(e => {
                    var t;
                    (null === (t = S.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && z.channelStates.del(e)
                }), z.channelStates.length !== e
            }

            function k() {
                var e, t, n;
                let l = null !== (n = null === (t = I.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
                    i = l !== z.viewNsfwCommands;
                if (i) {
                    if (z.viewNsfwCommands = l, !z.componentIsOpen) return q();
                    z.shouldResetDMs = !0
                }
                return !1
            }

            function Q(e) {
                return !!z.channelStates.has(e) && (z.channelStates.del(e), !0)
            }

            function Y() {
                z.shouldResetAll = !1, z.shouldResetGuild = null, z.shouldResetDMs = !1, z.componentIsOpen = !1, z.channelStates.reset()
            }
            H.displayName = "ApplicationCommandSearchStore";
            let z = new H(s.default, {
                LOGOUT: Y,
                CONNECTION_OPEN: Y,
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
                    let {
                        channelId: t,
                        commandType: n,
                        state: l
                    } = e, i = z.channelStates.get(t);
                    if (null == i) return;
                    let o = i[n],
                        a = {
                            ...o,
                            ...l
                        };
                    i[n] = a, null == o.applicationCommands && null != a.applicationCommands && a.pendingQueries.forEach((e, t) => {
                        let {
                            context: n,
                            commandType: l,
                            limit: i
                        } = e;
                        X({
                            context: n,
                            commandType: l,
                            query: t,
                            limit: i,
                            canOnlyUseTextCommands: !1
                        })
                    })
                },
                APPLICATION_COMMAND_SEARCH_STORE_QUERY(e) {
                    let {
                        context: t,
                        commandType: n,
                        query: l,
                        limit: i,
                        applicationId: o
                    } = e, a = null != v.default.getPendingReply(t.channel.id), u = X({
                        context: t,
                        commandType: n,
                        query: l,
                        limit: i,
                        canOnlyUseTextCommands: a,
                        applicationId: o
                    });
                    !u && !a && J({
                        context: t,
                        commandType: n,
                        query: l,
                        limit: i,
                        applicationId: o
                    })
                },
                CHANNEL_UPDATES(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t)
                        if (null != e.guild_id && F({
                                guildId: e.guild_id
                            })) return !0;
                    return !1
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: F,
                IMPERSONATE_UPDATE: F,
                IMPERSONATE_STOP: F,
                APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE(e) {
                    let {
                        isOpen: t
                    } = e;
                    if (z.componentIsOpen = t, z.shouldResetAll) {
                        Y();
                        return
                    }
                    let n = !1;
                    return null != z.shouldResetGuild && (n = G(z.shouldResetGuild), z.shouldResetGuild = null), z.shouldResetDMs && (n = q() || n, z.shouldResetDMs = !1), n
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e;
                    return Q(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e;
                    return Q(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t
                    } = e;
                    return Q(t)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t
                    } = e;
                    return Q(t)
                }
            });
            var W = z;
            let V = e => {
                if (null == e) return;
                let t = m.default.getViewingRoles(e);
                if (null == t) return;
                let n = Object.keys(t);
                return 0 === n.length && n.push(e), n
            };

            function j() {
                l.useEffect(() => (s.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                    isOpen: !0
                }), () => {
                    s.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                        isOpen: !1
                    })
                }), [])
            }

            function K(e, t, n, i) {
                let {
                    canOnlyUseTextCommands: o,
                    canUseFrecency: a
                } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
                    discoveryInitialized: u,
                    topCursor: r,
                    scrollDownCursor: c,
                    applicationSections: m,
                    applicationCommands: v,
                    filteredSectionId: h,
                    sawFrecencySection: I
                } = (0, d.useStateFromStores)([z], () => z.getOrInsertChannelState(e.id, t), [e.id, t]), S = l.useCallback(n => {
                    s.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                        channelId: e.id,
                        commandType: t,
                        state: n
                    })
                }, [e.id, t]);
                (0, f.usePrivateChannelIntegrationState)({
                    channelId: e.id
                });
                let g = l.useRef(!1),
                    E = (0, p.default)(),
                    T = l.useCallback(function(n, l) {
                        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (g.current) return;
                        g.current = !0;
                        let o = V(e.guild_id);
                        D(e.id, {
                            type: t,
                            roleIds: o,
                            ...n
                        }, {
                            abortable: i,
                            signal: E
                        }).then(e => {
                            g.current = !1, l(e)
                        })
                    }, [e.id, e.guild_id, t, E]),
                    P = l.useMemo(() => ({
                        channel: e,
                        guild: null != e.guild_id ? A.default.getGuild(e.guild_id) : null
                    }), [e]),
                    M = (0, y.useTopCommands)(P),
                    B = (0, y.useTopRealCommands)(P),
                    H = (0, d.useStateFromStores)([_.default, C.default], () => (0, L.canUseApplicationCommands)(_.default, C.default, null != o && o, e), [o, e]);
                l.useEffect(() => {
                    if (u) return;
                    if (S({
                            discoveryInitialized: !0
                        }), !H || null != v && v.length > 0) return;
                    let t = u ? void 0 : B,
                        n = e.isPrivate() ? {} : {
                            limit: i,
                            commandIds: t,
                            cursor: null != r ? r : void 0
                        };
                    T({
                        ...n,
                        includeApplications: null == m
                    }, e => {
                        if (null == e) return;
                        let t = w([], e.applicationCommands),
                            n = {
                                applicationCommands: t,
                                topCursor: e.prevCursor,
                                scrollDownCursor: e.nextCursor
                            };
                        if (null != e.applications) {
                            var l;
                            n.applicationSections = b(null !== (l = e.applications) && void 0 !== l ? l : [])
                        }
                        S(n)
                    }, !1)
                }, [v, e, i, H, m, u, r, T, B, S]);
                let F = l.useCallback(() => {
                        null != c && T({
                            limit: i,
                            cursor: c
                        }, e => {
                            if (null == e) return;
                            let t = !1 === e.repaired ? w([], e.applicationCommands) : w(null != v ? v : [], e.applicationCommands);
                            S({
                                applicationCommands: t,
                                scrollDownCursor: e.nextCursor
                            })
                        })
                    }, [i, T, c, v, S]),
                    G = l.useCallback(t => {
                        if (!g.current && t !== h) {
                            if (null == t) {
                                e.isPrivate() ? S({
                                    filteredSectionId: null,
                                    discoveryInitialized: !0
                                }) : S({
                                    filteredSectionId: null,
                                    applicationCommands: null,
                                    discoveryInitialized: !1
                                });
                                return
                            }!(t in N.BUILT_IN_SECTIONS || e.isPrivate()) && T({
                                applicationId: t
                            }, e => {
                                null != e && S({
                                    applicationCommands: w([], e.applicationCommands)
                                })
                            }), S({
                                filteredSectionId: t,
                                scrollDownCursor: null
                            })
                        }
                    }, [e, T, S, h]);
                j(), l.useEffect(() => () => {
                    var n;
                    (null === (n = z.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && G(null)
                }, []);
                let q = l.useMemo(() => U(P, t, o), [P, t, o]),
                    k = l.useMemo(() => {
                        if (!a) return [];
                        let e = (H && null != v ? v : []).concat(q);
                        return e.filter(e => M.includes(e.id)).sort((e, t) => {
                            let n = O.default.getScoreWithoutLoadingLatest(P, e),
                                l = O.default.getScoreWithoutLoadingLatest(P, t);
                            return l - n
                        }).slice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
                    }, [a, M, H, v, q, P]);
                l.useEffect(() => {
                    !I && k.length > 0 && S({
                        sawFrecencySection: !0
                    })
                }, [S, k, I]);
                let Q = l.useMemo(() => {
                        var e;
                        let t = [];
                        return (k.length > 0 || I) && (t = t.concat(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY])), H && null != m && (t = t.concat(m)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== R.BuiltInSectionId.BUILT_IN && (t = t.concat(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])), t
                    }, [H, m, k, I]),
                    Y = H && (!u || g.current || null != c),
                    W = l.useMemo(() => {
                        if (!Y) return [];
                        let e = [];
                        for (let l = 0; l < n; l++) e.push(x(l, t));
                        return e
                    }, [Y, n, t]),
                    {
                        activeSections: K,
                        commandsByActiveSection: X
                    } = l.useMemo(() => {
                        let e = [],
                            t = [];
                        return Q.forEach(n => {
                            let l;
                            (null == h || n.id === h) && ((l = n.id === R.BuiltInSectionId.BUILT_IN ? Y ? [] : [...q] : n.id === R.BuiltInSectionId.FRECENCY ? [...k] : (null != v ? v : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === h) && (e.push(n), t.push({
                                section: n,
                                data: l
                            }))
                        }), t.length > 0 && W.length > 0 && t[t.length - 1].data.push(...W), {
                            activeSections: e,
                            commandsByActiveSection: t
                        }
                    }, [Q, k, v, q, W, Y, h]),
                    J = l.useMemo(() => {
                        let e = [];
                        return e = e.concat(k), H && null != v && (e = e.concat(v)), e = e.concat(q)
                    }, [H, k, v, q]);
                return {
                    filterSection: G,
                    scrollDown: F,
                    loading: g,
                    filteredSectionId: h,
                    hasMoreAfter: Y,
                    commands: J,
                    sectionDescriptors: Q,
                    activeSections: K,
                    commandsByActiveSection: X,
                    placeholders: W
                }
            }

            function X(e) {
                let t, {
                        context: n,
                        commandType: l,
                        query: i,
                        limit: o,
                        canOnlyUseTextCommands: a,
                        applicationCommands: u,
                        scrollDownCursor: d,
                        applications: r,
                        applicationId: s = null
                    } = e,
                    c = z.getOrInsertChannelState(n.channel.id, l);
                if (c.queriedApplicationId !== s) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = s;
                else if (c.queries.has(i)) return !0;
                if (null != r && (c.applicationSections = b(r)), a) t = [];
                else {
                    var p;
                    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : w([], null != u ? u : [])
                }
                let m = U(n, l, a),
                    f = (0, L.canUseApplicationCommands)(_.default, C.default, a, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == u),
                    v = [],
                    I = !1;
                if (f)
                    for (let e = i.length - 1; e > 0; e -= 1) {
                        let n = i.slice(0, e),
                            l = c.queries.get(n);
                        if (null != l) {
                            I = l.done, l.commands.forEach(e => {
                                null == t.find(t => t.id === e.id) && null == m.find(t => t.id === e.id) && v.push(e)
                            });
                            break
                        }
                    }
                I && (f = !1);
                let S = [],
                    g = i.split(" ");
                if ([...t, ...v, ...m].forEach(e => {
                        var t;
                        let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                            l = (0, L.scoreCommand)(i, g, e, n);
                        l > 0 && S.push({
                            ...e,
                            score: l
                        })
                    }), h.FrecencyUserSettingsActionCreators.loadIfNecessary(), S.sort((e, t) => {
                        if (e.score !== t.score) return t.score - e.score;
                        let l = O.default.getScoreWithoutLoadingLatest(n, e),
                            i = O.default.getScoreWithoutLoadingLatest(n, t);
                        return l !== i ? i - l : e.displayName.localeCompare(t.displayName)
                    }), f || null != d)
                    for (let e = 0; e < 4; e += 1) S.push({
                        ...x(e, l),
                        score: 0
                    });
                return f ? (c.pendingQueries.set(i, {
                    context: n,
                    commandType: l,
                    limit: o,
                    commands: S
                }), c.queries.delete(i)) : (c.pendingQueries.delete(i), c.queries.set(i, {
                    commands: S,
                    done: I || null == d,
                    scrollDownCursor: d
                })), I
            }
            let J = o(e => {
                    var t;
                    let {
                        context: n,
                        commandType: l,
                        query: i,
                        limit: o,
                        applicationId: a
                    } = e;
                    if (!(0, L.canUseApplicationCommands)(_.default, C.default, !1, n.channel)) return;
                    let u = z.getOrInsertChannelState(n.channel.id, l);
                    if (n.channel.isPrivate()) {
                        !u.discoveryInitialized && null == u.applicationCommands && D(n.channel.id, {
                            type: l,
                            includeApplications: null == u.applicationSections
                        }).then(e => {
                            var t;
                            if (null == e) return;
                            let i = {
                                applicationCommands: w([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
                            };
                            null != e.applications && (i.applicationSections = b(e.applications)), s.default.dispatch({
                                type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                                channelId: n.channel.id,
                                commandType: l,
                                state: i
                            })
                        });
                        return
                    }(null === (t = u.queries.get(i)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && D(n.channel.id, {
                        type: l,
                        roleIds: V(n.channel.guild_id),
                        query: i,
                        limit: o,
                        applicationId: a,
                        includeApplications: !u.discoveryInitialized && null == u.applicationSections
                    }).then(e => {
                        if (null != e) z.channelStates.has(n.channel.id) && (X({
                            context: n,
                            commandType: l,
                            query: i,
                            limit: o,
                            canOnlyUseTextCommands: !1,
                            applicationCommands: e.applicationCommands,
                            scrollDownCursor: e.nextCursor,
                            applications: e.applications,
                            applicationId: a
                        }), z.emitChange())
                    })
                }, 250, {
                    leading: !0,
                    trailing: !0,
                    maxWait: 750
                }),
                Z = async (e, t) => {
                    var n;
                    let {
                        context: l,
                        commandType: i,
                        query: o,
                        limit: a
                    } = e;
                    if (!(0, L.canUseApplicationCommands)(_.default, C.default, !1, l.channel)) return;
                    let u = z.getOrInsertChannelState(l.channel.id, i);
                    if (l.channel.isPrivate()) return;
                    let d = null === (n = u.queries.get(o)) || void 0 === n ? void 0 : n.scrollDownCursor;
                    null != d && await D(l.channel.id, {
                        type: i,
                        roleIds: V(l.channel.guild_id),
                        query: o,
                        limit: a,
                        cursor: d,
                        includeApplications: !u.discoveryInitialized && null == u.applicationSections
                    }, {
                        abortable: !0,
                        signal: t
                    }).then(e => {
                        var t, n;
                        if (null == e || !z.channelStates.has(l.channel.id)) return;
                        let a = null !== (n = null === (t = u.queries.get(o)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== P.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
                            d = w([], e.applicationCommands),
                            r = [],
                            s = o.split(" ");
                        d.forEach(e => {
                            var t;
                            if (null != a.find(t => t.id === e.id)) return;
                            let n = null === (t = u.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                                l = (0, L.scoreCommand)(o, s, e, n);
                            l > 0 && r.push({
                                ...e,
                                score: l
                            })
                        }), h.FrecencyUserSettingsActionCreators.loadIfNecessary(), r.sort((e, t) => {
                            if (e.score !== t.score) return t.score - e.score;
                            let n = O.default.getScoreWithoutLoadingLatest(l, e),
                                i = O.default.getScoreWithoutLoadingLatest(l, t);
                            return n !== i ? i - n : e.displayName.localeCompare(t.displayName)
                        });
                        let c = e.nextCursor;
                        if (null != c)
                            for (let e = 0; e < 4; e += 1) r.push({
                                ...x(e, i),
                                score: 0
                            });
                        u.queries.set(o, {
                            commands: e.repaired ? r : [...a, ...r],
                            done: !0,
                            scrollDownCursor: c
                        }), z.emitChange()
                    })
                };

            function $(e, t, n, i) {
                j();
                let o = (0, p.default)(),
                    {
                        commands: a,
                        applicationSections: u
                    } = (0, d.useStateFromStoresObject)([z], () => {
                        var l, i, o;
                        let {
                            queries: a,
                            pendingQueries: u,
                            applicationSections: d
                        } = z.getOrInsertChannelState(e.id, t);
                        return {
                            applicationSections: d,
                            commands: null !== (o = null === (l = a.get(n)) || void 0 === l ? void 0 : l.commands) && void 0 !== o ? o : null === (i = u.get(n)) || void 0 === i ? void 0 : i.commands
                        }
                    }, [e.id, t, n]);
                l.useEffect(() => {
                    s.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                        context: {
                            channel: e,
                            guild: null != e.guild_id ? A.default.getGuild(e.guild_id) : null
                        },
                        query: n,
                        limit: i,
                        commandType: t
                    })
                }, [e, t, n, i]);
                let r = l.useRef(!1),
                    c = l.useCallback(() => {
                        !r.current && (r.current = !0, Z({
                            commandType: t,
                            context: {
                                channel: e
                            },
                            query: n,
                            limit: i
                        }, o).finally(() => {
                            r.current = !1
                        }))
                    }, [t, e, n, o, i]);
                return {
                    commands: a,
                    sections: null != u ? u : B,
                    scrollDown: c
                }
            }
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l.default
                }
            });
            var l = n("870346")
        },
        685841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("446674"),
                i = n("913144"),
                o = n("377253");
            let a = {},
                u = {};

            function d(e) {
                if (null == e) return !1;
                let t = u[e];
                if (null == t) return !1;
                let n = o.default.getMessage(e, t.messageId);
                if (null == n) return !1;
                a[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                }, delete u[e]
            }

            function r() {
                a = {}, u = {}
            }
            class s extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getPendingReply(e) {
                    return a[e]
                }
            }
            s.displayName = "PendingReplyStore";
            let c = new s(i.default, {
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        message: n,
                        shouldMention: l = !0,
                        showMentionToggle: i = !0
                    } = e;
                    a[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: l,
                        showMentionToggle: i
                    }
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        messageId: n,
                        shouldMention: l = !0,
                        showMentionToggle: i = !0
                    } = e;
                    u[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: l,
                        showMentionToggle: i
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    let {
                        channelId: t,
                        shouldMention: n
                    } = e;
                    t in a && (a[t] = {
                        ...a[t],
                        shouldMention: n
                    }), t in u && (u[t] = {
                        ...u[t],
                        shouldMention: n
                    })
                },
                DELETE_PENDING_REPLY: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete a[t], delete u[t]
                },
                CONNECTION_OPEN: r,
                LOGOUT: r,
                MESSAGE_DELETE: function(e) {
                    var t, n, l;
                    let {
                        id: i,
                        channelId: o
                    } = e;
                    if ((null === (n = a[o]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === i) delete a[o];
                    else {
                        if ((null === (l = u[o]) || void 0 === l ? void 0 : l.messageId) !== i) return !1;
                        delete u[o]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    d(t)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    d(t)
                }
            });
            var p = c
        }
    }
]);
//# sourceMappingURL=8af74612550a0c24bbff.js.map