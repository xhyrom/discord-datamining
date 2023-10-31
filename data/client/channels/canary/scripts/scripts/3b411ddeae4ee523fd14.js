(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56680"], {
        14090: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                UserAppsTreatment: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var i, o, a = t("862205");
            (i = o || (o = {})).ALLOWED = "allowed", i.DEFAULT = "default";
            var r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_new_app_command_serving",
                label: "New Application Command Serving",
                defaultConfig: {
                    enabled: !1,
                    newScoreLogic: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        newScoreLogic: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled + New Logic",
                    config: {
                        enabled: !0,
                        newScoreLogic: !0
                    }
                }]
            })
        },
        524768: function(n, e, t) {
            "use strict";
            var i, o, a, r, l, p, s, u, c, m, d, A;
            t.r(e), t.d(e, {
                ApplicationCommandSectionType: function() {
                    return i
                },
                ApplicationCommandInputType: function() {
                    return o
                },
                ApplicationCommandPermissionType: function() {
                    return a
                },
                ApplicationCommandTriggerLocations: function() {
                    return r
                },
                ApplicationCommandTriggerSections: function() {
                    return l
                },
                CommandOrigin: function() {
                    return p
                }
            }), (s = i || (i = {}))[s.BUILT_IN = 0] = "BUILT_IN", s[s.APPLICATION = 1] = "APPLICATION", (u = o || (o = {}))[u.BUILT_IN = 0] = "BUILT_IN", u[u.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT", u[u.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION", u[u.BOT = 3] = "BOT", u[u.PLACEHOLDER = 4] = "PLACEHOLDER", (c = a || (a = {}))[c.ROLE = 1] = "ROLE", c[c.USER = 2] = "USER", c[c.CHANNEL = 3] = "CHANNEL", (m = r || (r = {})).DISCOVERY = "discovery", m.SUGGESTION = "suggestion", m.MENTION = "mention", m.PASTE = "paste", m.RECALL = "recall", m.POPULAR_COMMANDS = "popular_commands", m.MJ_CHAT_BAR = "mj_chat_bar", m.QUERY = "query", (d = l || (l = {}))[d.BUILT_IN = 1] = "BUILT_IN", d[d.FRECENCY = 2] = "FRECENCY", d[d.APP = 3] = "APP", (A = p || (p = {}))[A.CHAT = 0] = "CHAT", A[A.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
        },
        970254: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                UserAppsTreatment: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var i, o, a = t("862205");
            (i = o || (o = {})).ALLOWED = "allowed", i.DEFAULT = "default";
            var r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_user_apps",
                label: "Allow user app commands",
                defaultConfig: {
                    userAppsTreatment: o.DEFAULT
                },
                treatments: [{
                    id: 1,
                    label: "Allow user app commands",
                    config: {
                        userAppsTreatment: o.ALLOWED
                    }
                }]
            })
        },
        389153: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                buildCommand: function() {
                    return O
                },
                buildApplicationCommands: function() {
                    return L
                },
                isSnowflake: function() {
                    return y
                },
                getMatchingGroupCommands: function() {
                    return g
                },
                getApplicationCommandOptionQueryOptions: function() {
                    return S
                },
                allChannelsSentinel: function() {
                    return P
                },
                canUseContextMenuCommands: function() {
                    return h
                },
                canUseApplicationCommands: function() {
                    return v
                },
                DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
                    return R
                },
                hasAccess: function() {
                    return U
                },
                getCommandAttachmentDraftType: function() {
                    return M
                },
                getCommandTriggerSection: function() {
                    return H
                },
                getApplicationCommandSection: function() {
                    return F
                },
                extractInteractionDataProps: function() {
                    return B
                },
                scoreCommand: function() {
                    return b
                },
                useIsInUserAppExperiment: function() {
                    return G
                },
                isInUserAppExperiment: function() {
                    return w
                }
            });
            var i = t("552442"),
                o = t.n(i),
                a = t("627445"),
                r = t.n(a),
                l = t("917351"),
                p = t.n(l),
                s = t("316693"),
                u = t("798609"),
                c = t("892692"),
                m = t("140596"),
                d = t("233069"),
                A = t("474643"),
                T = t("957255"),
                C = t("14090"),
                E = t("524768"),
                f = t("970254"),
                _ = t("317041"),
                N = t("49111"),
                I = t("843455");

            function O(n) {
                var e, t, i;
                let o, {
                    rootCommand: a,
                    command: r,
                    applicationId: l,
                    subCommandPath: p,
                    useKeyedPermissions: m
                } = n;
                null != a.permissions && a.permissions.length > 0 && (m ? o = (0, c.keyPermissions)(a.permissions) : (o = {}, a.permissions.forEach(n => {
                    o[n.id] = n
                })));
                let d = (null != p ? p : []).map(n => n.name),
                    A = (null != p ? p : []).map(n => n.displayName);
                return {
                    version: a.version,
                    guildId: a.guild_id,
                    id: [a.id, ...d].join(_.SUB_COMMAND_KEY_SEPARATOR),
                    name: [a.name, ...d].join(" "),
                    serverLocalizedName: r.name_localized,
                    applicationId: l,
                    type: null !== (e = a.type) && void 0 !== e ? e : u.ApplicationCommandType.CHAT,
                    inputType: E.ApplicationCommandInputType.BOT,
                    description: r.description,
                    options: function n(e) {
                        return null == e ? void 0 : e.map(e => {
                            var t, i;
                            let o = {
                                ...e,
                                choices: function(n) {
                                    return null == n ? void 0 : n.map(n => {
                                        var e;
                                        return {
                                            ...n,
                                            displayName: null !== (e = n.name_localized) && void 0 !== e ? e : n.name
                                        }
                                    })
                                }(e.choices),
                                options: n(e.options),
                                serverLocalizedName: e.name_localized,
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name,
                                displayDescription: null !== (i = e.description_localized) && void 0 !== i ? i : e.description
                            };
                            if (e.type === u.ApplicationCommandOptionType.CHANNEL && "channel_types" in e) return {
                                ...o,
                                channelTypes: e.channel_types
                            };
                            if ((e.type === u.ApplicationCommandOptionType.NUMBER || e.type === u.ApplicationCommandOptionType.INTEGER) && ("min_value" in e || "max_value" in e)) return {
                                ...o,
                                minValue: e.min_value,
                                maxValue: e.max_value
                            };
                            if (e.type === u.ApplicationCommandOptionType.STRING && ("min_length" in e || "max_length" in e)) return {
                                ...o,
                                minLength: e.min_length,
                                maxLength: e.max_length
                            };
                            return o
                        })
                    }(r.options),
                    rootCommand: a,
                    subCommandPath: p,
                    defaultMemberPermissions: null == a.default_member_permissions ? void 0 : s.default.deserialize(a.default_member_permissions),
                    dmPermission: a.dm_permission,
                    permissions: o,
                    displayName: [null !== (t = a.name_localized) && void 0 !== t ? t : a.name, ...A].join(" "),
                    displayDescription: null !== (i = r.description_localized) && void 0 !== i ? i : r.description,
                    nsfw: a.nsfw,
                    contexts: a.contexts,
                    integration_types: a.integration_types
                }
            }

            function L(n, e) {
                return p.flatMap(n, n => (r(null != n.id, "Missing command id"), function n(e) {
                    var t, i;
                    let {
                        rootCommand: o,
                        command: a,
                        applicationId: r,
                        subCommandPath: l,
                        useKeyedPermissions: p
                    } = e;
                    if (a.hasOwnProperty("id")) {
                        if (null == a.options || 0 === a.options.length) return [O({
                            rootCommand: o,
                            command: a,
                            applicationId: r,
                            subCommandPath: l,
                            useKeyedPermissions: p
                        })]
                    } else if (a.type !== u.ApplicationCommandOptionType.SUB_COMMAND && a.type !== u.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == a.options || 0 === a.options.length)) return [O({
                        rootCommand: o,
                        command: a,
                        applicationId: r,
                        subCommandPath: l,
                        useKeyedPermissions: p
                    })];
                    let s = [];
                    if (null == a.options) return s;
                    let c = a.options.filter(n => n.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                    for (let e = 0; e < c.length; e++) s.push(...n({
                        rootCommand: o,
                        command: c[e],
                        applicationId: r,
                        subCommandPath: (null != l ? l : []).concat([{
                            name: c[e].name,
                            type: u.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                            displayName: null !== (t = c[e].name_localized) && void 0 !== t ? t : c[e].name
                        }]),
                        useKeyedPermissions: p
                    }));
                    let m = a.options.filter(n => n.type === u.ApplicationCommandOptionType.SUB_COMMAND);
                    for (let n = 0; n < m.length; n++) s.push(O({
                        rootCommand: o,
                        command: m[n],
                        applicationId: r,
                        subCommandPath: (null != l ? l : []).concat([{
                            name: m[n].name,
                            type: u.ApplicationCommandOptionType.SUB_COMMAND,
                            displayName: null !== (i = m[n].name_localized) && void 0 !== i ? i : m[n].name
                        }]),
                        useKeyedPermissions: p
                    }));
                    return 0 === c.length && 0 === m.length && s.push(O({
                        rootCommand: o,
                        command: a,
                        applicationId: r,
                        subCommandPath: l,
                        useKeyedPermissions: p
                    })), s
                }({
                    rootCommand: n,
                    command: n,
                    applicationId: n.application_id,
                    subCommandPath: void 0,
                    useKeyedPermissions: e
                })))
            }

            function y(n) {
                return N.ID_REGEX.test(n.trim())
            }

            function g(n, e, t, i) {
                let o = [];
                return p(n).forEach(n => {
                    e.test(n.displayName) && (null == n.predicate || n.predicate(t)) && o.push(n)
                }), o.slice(0, i)
            }

            function S(n) {
                let e = n.type === u.ApplicationCommandOptionType.STRING,
                    t = n.type === u.ApplicationCommandOptionType.CHANNEL,
                    i = n.type === u.ApplicationCommandOptionType.USER || n.type === u.ApplicationCommandOptionType.MENTIONABLE,
                    o = n.type === u.ApplicationCommandOptionType.ROLE || n.type === u.ApplicationCommandOptionType.MENTIONABLE;
                return {
                    canMentionEveryone: e || o,
                    canMentionHere: e,
                    canMentionChannels: e || t,
                    canMentionUsers: e || i,
                    canMentionRoles: e || o,
                    canMentionAnyGuildUser: i,
                    canMentionNonMentionableRoles: o
                }
            }

            function P(n) {
                return o(n).subtract(1).toString()
            }

            function h(n, e, t) {
                return !!v(T.default, m.default, !1, n) && (null != t ? t : e) > 0
            }

            function v(n, e, t, i) {
                if (t) return !1;
                if (i.isMultiUserDM()) return w({
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || e.getIntegrations(i.id).length > 0;
                if (i.isDM()) return !i.isSystemDM() && (null != i.rawRecipients.find(n => n.bot) || w({
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || e.getIntegrations(i.id).length > 0);
                return i.isArchivedLockedThread() ? n.can(s.default.combine(I.Permissions.USE_APPLICATION_COMMANDS, I.Permissions.MANAGE_THREADS), i) : !!(0, d.isReadableType)(i.type) && n.can(s.default.combine(I.Permissions.USE_APPLICATION_COMMANDS, I.Permissions.SEND_MESSAGES), i)
            }
            let R = s.default.deserialize(0);

            function U(n) {
                let {
                    PermissionStore: e,
                    guild: t,
                    selfMember: i,
                    applicationLevelPermissions: o,
                    commandLevelPermissions: a,
                    defaultMemberPermissions: r
                } = n;
                if (t.ownerId === i.userId || e.can(I.Permissions.ADMINISTRATOR, t)) return !0;
                let l = t.id;
                if (null != a) {
                    let n = D(i, l, a);
                    if ("boolean" == typeof n) return n
                }
                let p = D(i, l, o);
                return ("boolean" != typeof p || !!p) && (null == r || !s.default.equals(r, R) && e.can(r, t))
            }

            function D(n, e, t) {
                let i = t[(0, c.toPermissionKey)(n.userId, E.ApplicationCommandPermissionType.USER)];
                if (null != i) return i.permission;
                let o = !1;
                for (let e of n.roles) {
                    let n = t[(0, c.toPermissionKey)(e, E.ApplicationCommandPermissionType.ROLE)];
                    if (null != n && (o = !0, n.permission)) return !0
                }
                if (o) return !1;
                let a = t[(0, c.toPermissionKey)(e, E.ApplicationCommandPermissionType.ROLE)];
                return null != a ? a.permission : null
            }

            function M(n) {
                switch (n) {
                    case E.CommandOrigin.CHAT:
                        return A.DraftType.ChannelMessage;
                    case E.CommandOrigin.APPLICATION_LAUNCHER:
                        return A.DraftType.ApplicationLauncherCommand
                }
            }

            function H(n) {
                if (null != n) {
                    if (n.id === _.BuiltInSectionId.BUILT_IN) return E.ApplicationCommandTriggerSections.BUILT_IN;
                    else if (n.id === _.BuiltInSectionId.FRECENCY) return E.ApplicationCommandTriggerSections.FRECENCY;
                    else return E.ApplicationCommandTriggerSections.APP
                }
            }

            function F(n) {
                var e, t;
                return {
                    type: E.ApplicationCommandSectionType.APPLICATION,
                    id: n.id,
                    name: null !== (t = null == n ? void 0 : null === (e = n.bot) || void 0 === e ? void 0 : e.username) && void 0 !== t ? t : n.name,
                    icon: n.icon,
                    application: n
                }
            }

            function B(n) {
                var e, t;
                let i = n.id,
                    o = n.options,
                    a = null === (e = o) || void 0 === e ? void 0 : e.find(n => n.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                null != a && (i += "".concat(_.SUB_COMMAND_KEY_SEPARATOR).concat(a.name), o = a.options);
                let r = null === (t = o) || void 0 === t ? void 0 : t.find(n => n.type === u.ApplicationCommandOptionType.SUB_COMMAND);
                return null != r && (i += "".concat(_.SUB_COMMAND_KEY_SEPARATOR).concat(r.name), o = r.options), {
                    commandKey: i,
                    interactionOptions: o
                }
            }

            function b(n, e, t, i) {
                var o;
                let a = t.name,
                    r = t.displayName;
                if (a.startsWith(n) || r.startsWith(n)) return 6;
                if (a.startsWith(e[0])) {
                    let n = a.split(" ").slice(1).join(" ");
                    if (n.startsWith(e.slice(1).join(" "))) return 5
                }
                if (r.startsWith(e[0])) {
                    let n = r.split(" ").slice(1).join(" ");
                    if (n.startsWith(e.slice(1).join(" "))) return 5
                }
                if (a.includes(n) || (null == r ? void 0 : r.includes(n))) return 4;
                let l = !1;
                for (let {
                        name: e,
                        serverLocalizedName: i
                    }
                    of null !== (o = t.options) && void 0 !== o ? o : []) {
                    if (e.startsWith(n) || "".concat(a, " ").concat(e).startsWith(n)) return 3;
                    if (null != r && "".concat(r, " ").concat(e).startsWith(n)) return 2;
                    if (null != i && (i.startsWith(n) || "".concat(a, " ").concat(i).startsWith(n) || null != r && "".concat(r, " ").concat(i).startsWith(n))) return 3;
                    (e.includes(n) || (null == i ? void 0 : i.includes(n))) && (l = !0)
                }
                return l ? 2 : (null == i ? void 0 : i.name.toLocaleLowerCase().startsWith(n)) ? 1 : 0
            }

            function G(n, e) {
                return f.default.useExperiment(n, e).userAppsTreatment === C.UserAppsTreatment.ALLOWED
            }

            function w(n, e) {
                return f.default.getCurrentConfig(n, e).userAppsTreatment === C.UserAppsTreatment.ALLOWED
            }
        },
        892692: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                commandName: function() {
                    return o
                },
                toPermissionKey: function() {
                    return a
                },
                keyPermissions: function() {
                    return r
                }
            });
            var i = t("798609");

            function o(n, e) {
                return n === i.ApplicationCommandType.CHAT ? "/" + e : e
            }

            function a(n, e) {
                return "".concat(n, ":").concat(e)
            }

            function r(n) {
                return Object.fromEntries(n.map(n => [a(n.id, n.type), n]))
            }
            t("524768")
        },
        140596: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                FetchState: function() {
                    return o
                },
                default: function() {
                    return E
                }
            });
            var i, o, a = t("446674"),
                r = t("913144"),
                l = t("653047"),
                p = t("946028");
            (i = o || (o = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FETCH_FAILED = 3] = "FETCH_FAILED";
            let s = new Map,
                u = new Map,
                c = [],
                m = o.NOT_FETCHED,
                d = [];
            class A extends a.default.Store {
                getIntegrations(n) {
                    var e;
                    return null !== (e = s.get(n)) && void 0 !== e ? e : d
                }
                getIntegration(n, e) {
                    var t;
                    return null === (t = s.get(n)) || void 0 === t ? void 0 : t.find(n => n.application.id === e)
                }
                getAllIntegrations() {
                    return s
                }
                getIntegrationsFetchState(n) {
                    var e;
                    return null !== (e = u.get(n)) && void 0 !== e ? e : o.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return m
                }
                getApplicationsShelf() {
                    return c
                }
            }

            function T(n) {
                return n.sort((n, e) => n.application.name.localeCompare(e.application.name))
            }
            A.displayName = "PrivateChannelIntegrationStore";
            let C = new A(r.default, {
                LOGOUT() {
                    s.clear()
                },
                CONNECTION_OPEN() {
                    s.clear(), u.clear()
                },
                CHANNEL_SELECT(n) {
                    let {
                        channelId: e
                    } = n;
                    if (null == e || u.get(e) !== o.FETCH_FAILED) return !1;
                    u.set(e, o.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    m = o.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(n) {
                    let {
                        applications: e
                    } = n;
                    c = e.map(l.default.createFromServer).sort((n, e) => n.name.localeCompare(e.name)), m = o.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    m = o.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(n) {
                    let {
                        channelId: e
                    } = n;
                    s.set(e, null), u.set(e, o.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(n) {
                    let {
                        channelId: e,
                        integrations: t
                    } = n;
                    s.set(e, T(t.map(p.createPrivateChannelIntegration))), u.set(e, o.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(n) {
                    let {
                        channelId: e
                    } = n;
                    u.set(e, o.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(n) {
                    let {
                        integration: e
                    } = n, t = s.get(e.channel_id);
                    if (null == t) return !1;
                    s.set(e.channel_id, T([...t, (0, p.createPrivateChannelIntegration)(e)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(n) {
                    let {
                        integration: e
                    } = n, t = s.get(e.channel_id);
                    if (null == t) return !1;
                    let i = (0, p.createPrivateChannelIntegration)(e),
                        o = t.findIndex(n => n.application.id === i.application.id),
                        a = [...t]; - 1 === o ? a.push(i) : a[o] = i, s.set(i.channel_id, T(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(n) {
                    let {
                        channelId: e,
                        applicationId: t
                    } = n, i = s.get(e);
                    if (null == i) return !1;
                    s.set(e, i.filter(n => n.application.id !== t))
                },
                CHANNEL_DELETE(n) {
                    let {
                        channel: e
                    } = n;
                    return s.delete(e.id)
                }
            });
            var E = C
        }
    }
]);
//# sourceMappingURL=3b411ddeae4ee523fd14.js.map