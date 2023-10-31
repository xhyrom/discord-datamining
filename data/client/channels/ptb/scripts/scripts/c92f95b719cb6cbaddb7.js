(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56680"], {
        14090: function(n, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                UserAppsTreatment: function() {
                    return o
                },
                default: function() {
                    return r
                }
            });
            var t, o, a = i("862205");
            (t = o || (o = {})).ALLOWED = "allowed", t.DEFAULT = "default";
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
        389153: function(n, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                buildCommand: function() {
                    return g
                },
                buildApplicationCommands: function() {
                    return E
                },
                isSnowflake: function() {
                    return N
                },
                getMatchingGroupCommands: function() {
                    return M
                },
                getApplicationCommandOptionQueryOptions: function() {
                    return v
                },
                allChannelsSentinel: function() {
                    return S
                },
                canUseContextMenuCommands: function() {
                    return I
                },
                canUseApplicationCommands: function() {
                    return P
                },
                DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
                    return L
                },
                hasAccess: function() {
                    return U
                },
                getCommandAttachmentDraftType: function() {
                    return R
                },
                getCommandTriggerSection: function() {
                    return b
                },
                getApplicationCommandSection: function() {
                    return B
                },
                extractInteractionDataProps: function() {
                    return w
                },
                scoreCommand: function() {
                    return x
                },
                useIsInUserAppExperiment: function() {
                    return W
                },
                isInUserAppExperiment: function() {
                    return z
                }
            });
            var t = i("552442"),
                o = i.n(t),
                a = i("627445"),
                r = i.n(a),
                l = i("917351"),
                s = i.n(l),
                p = i("316693"),
                c = i("798609"),
                u = i("892692"),
                m = i("140596"),
                d = i("233069"),
                f = i("474643"),
                A = i("957255"),
                C = i("14090"),
                y = i("524768"),
                _ = i("970254"),
                T = i("317041"),
                O = i("49111"),
                h = i("843455");

            function g(n) {
                var e, i, t;
                let o, {
                    rootCommand: a,
                    command: r,
                    applicationId: l,
                    subCommandPath: s,
                    useKeyedPermissions: m
                } = n;
                null != a.permissions && a.permissions.length > 0 && (m ? o = (0, u.keyPermissions)(a.permissions) : (o = {}, a.permissions.forEach(n => {
                    o[n.id] = n
                })));
                let d = (null != s ? s : []).map(n => n.name),
                    f = (null != s ? s : []).map(n => n.displayName);
                return {
                    version: a.version,
                    guildId: a.guild_id,
                    id: [a.id, ...d].join(T.SUB_COMMAND_KEY_SEPARATOR),
                    name: [a.name, ...d].join(" "),
                    serverLocalizedName: r.name_localized,
                    applicationId: l,
                    type: null !== (e = a.type) && void 0 !== e ? e : c.ApplicationCommandType.CHAT,
                    inputType: y.ApplicationCommandInputType.BOT,
                    description: r.description,
                    options: function n(e) {
                        return null == e ? void 0 : e.map(e => {
                            var i, t;
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
                                displayName: null !== (i = e.name_localized) && void 0 !== i ? i : e.name,
                                displayDescription: null !== (t = e.description_localized) && void 0 !== t ? t : e.description
                            };
                            if (e.type === c.ApplicationCommandOptionType.CHANNEL && "channel_types" in e) return {
                                ...o,
                                channelTypes: e.channel_types
                            };
                            if ((e.type === c.ApplicationCommandOptionType.NUMBER || e.type === c.ApplicationCommandOptionType.INTEGER) && ("min_value" in e || "max_value" in e)) return {
                                ...o,
                                minValue: e.min_value,
                                maxValue: e.max_value
                            };
                            if (e.type === c.ApplicationCommandOptionType.STRING && ("min_length" in e || "max_length" in e)) return {
                                ...o,
                                minLength: e.min_length,
                                maxLength: e.max_length
                            };
                            return o
                        })
                    }(r.options),
                    rootCommand: a,
                    subCommandPath: s,
                    defaultMemberPermissions: null == a.default_member_permissions ? void 0 : p.default.deserialize(a.default_member_permissions),
                    dmPermission: a.dm_permission,
                    permissions: o,
                    displayName: [null !== (i = a.name_localized) && void 0 !== i ? i : a.name, ...f].join(" "),
                    displayDescription: null !== (t = r.description_localized) && void 0 !== t ? t : r.description,
                    nsfw: a.nsfw,
                    contexts: a.contexts,
                    integration_types: a.integration_types
                }
            }

            function E(n, e) {
                return s.flatMap(n, n => (r(null != n.id, "Missing command id"), function n(e) {
                    var i, t;
                    let {
                        rootCommand: o,
                        command: a,
                        applicationId: r,
                        subCommandPath: l,
                        useKeyedPermissions: s
                    } = e;
                    if (a.hasOwnProperty("id")) {
                        if (null == a.options || 0 === a.options.length) return [g({
                            rootCommand: o,
                            command: a,
                            applicationId: r,
                            subCommandPath: l,
                            useKeyedPermissions: s
                        })]
                    } else if (a.type !== c.ApplicationCommandOptionType.SUB_COMMAND && a.type !== c.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == a.options || 0 === a.options.length)) return [g({
                        rootCommand: o,
                        command: a,
                        applicationId: r,
                        subCommandPath: l,
                        useKeyedPermissions: s
                    })];
                    let p = [];
                    if (null == a.options) return p;
                    let u = a.options.filter(n => n.type === c.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                    for (let e = 0; e < u.length; e++) p.push(...n({
                        rootCommand: o,
                        command: u[e],
                        applicationId: r,
                        subCommandPath: (null != l ? l : []).concat([{
                            name: u[e].name,
                            type: c.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                            displayName: null !== (i = u[e].name_localized) && void 0 !== i ? i : u[e].name
                        }]),
                        useKeyedPermissions: s
                    }));
                    let m = a.options.filter(n => n.type === c.ApplicationCommandOptionType.SUB_COMMAND);
                    for (let n = 0; n < m.length; n++) p.push(g({
                        rootCommand: o,
                        command: m[n],
                        applicationId: r,
                        subCommandPath: (null != l ? l : []).concat([{
                            name: m[n].name,
                            type: c.ApplicationCommandOptionType.SUB_COMMAND,
                            displayName: null !== (t = m[n].name_localized) && void 0 !== t ? t : m[n].name
                        }]),
                        useKeyedPermissions: s
                    }));
                    return 0 === u.length && 0 === m.length && p.push(g({
                        rootCommand: o,
                        command: a,
                        applicationId: r,
                        subCommandPath: l,
                        useKeyedPermissions: s
                    })), p
                }({
                    rootCommand: n,
                    command: n,
                    applicationId: n.application_id,
                    subCommandPath: void 0,
                    useKeyedPermissions: e
                })))
            }

            function N(n) {
                return O.ID_REGEX.test(n.trim())
            }

            function M(n, e, i, t) {
                let o = [];
                return s(n).forEach(n => {
                    e.test(n.displayName) && (null == n.predicate || n.predicate(i)) && o.push(n)
                }), o.slice(0, t)
            }

            function v(n) {
                let e = n.type === c.ApplicationCommandOptionType.STRING,
                    i = n.type === c.ApplicationCommandOptionType.CHANNEL,
                    t = n.type === c.ApplicationCommandOptionType.USER || n.type === c.ApplicationCommandOptionType.MENTIONABLE,
                    o = n.type === c.ApplicationCommandOptionType.ROLE || n.type === c.ApplicationCommandOptionType.MENTIONABLE;
                return {
                    canMentionEveryone: e || o,
                    canMentionHere: e,
                    canMentionChannels: e || i,
                    canMentionUsers: e || t,
                    canMentionRoles: e || o,
                    canMentionAnyGuildUser: t,
                    canMentionNonMentionableRoles: o
                }
            }

            function S(n) {
                return o(n).subtract(1).toString()
            }

            function I(n, e, i) {
                return !!P(A.default, m.default, !1, n) && (null != i ? i : e) > 0
            }

            function P(n, e, i, t) {
                if (i) return !1;
                if (t.isMultiUserDM()) return z({
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || e.getIntegrations(t.id).length > 0;
                if (t.isDM()) return !t.isSystemDM() && (null != t.rawRecipients.find(n => n.bot) || z({
                    location: "canUseApplicationCommands"
                }, {
                    autoTrackExposure: !1
                }) || e.getIntegrations(t.id).length > 0);
                return t.isArchivedLockedThread() ? n.can(p.default.combine(h.Permissions.USE_APPLICATION_COMMANDS, h.Permissions.MANAGE_THREADS), t) : !!(0, d.isReadableType)(t.type) && n.can(p.default.combine(h.Permissions.USE_APPLICATION_COMMANDS, h.Permissions.SEND_MESSAGES), t)
            }
            let L = p.default.deserialize(0);

            function U(n) {
                let {
                    PermissionStore: e,
                    guild: i,
                    selfMember: t,
                    applicationLevelPermissions: o,
                    commandLevelPermissions: a,
                    defaultMemberPermissions: r
                } = n;
                if (i.ownerId === t.userId || e.can(h.Permissions.ADMINISTRATOR, i)) return !0;
                let l = i.id;
                if (null != a) {
                    let n = D(t, l, a);
                    if ("boolean" == typeof n) return n
                }
                let s = D(t, l, o);
                return ("boolean" != typeof s || !!s) && (null == r || !p.default.equals(r, L) && e.can(r, i))
            }

            function D(n, e, i) {
                let t = i[(0, u.toPermissionKey)(n.userId, y.ApplicationCommandPermissionType.USER)];
                if (null != t) return t.permission;
                let o = !1;
                for (let e of n.roles) {
                    let n = i[(0, u.toPermissionKey)(e, y.ApplicationCommandPermissionType.ROLE)];
                    if (null != n && (o = !0, n.permission)) return !0
                }
                if (o) return !1;
                let a = i[(0, u.toPermissionKey)(e, y.ApplicationCommandPermissionType.ROLE)];
                return null != a ? a.permission : null
            }

            function R(n) {
                switch (n) {
                    case y.CommandOrigin.CHAT:
                        return f.DraftType.ChannelMessage;
                    case y.CommandOrigin.APPLICATION_LAUNCHER:
                        return f.DraftType.ApplicationLauncherCommand
                }
            }

            function b(n) {
                if (null != n) {
                    if (n.id === T.BuiltInSectionId.BUILT_IN) return y.ApplicationCommandTriggerSections.BUILT_IN;
                    else if (n.id === T.BuiltInSectionId.FRECENCY) return y.ApplicationCommandTriggerSections.FRECENCY;
                    else return y.ApplicationCommandTriggerSections.APP
                }
            }

            function B(n) {
                var e, i;
                return {
                    type: y.ApplicationCommandSectionType.APPLICATION,
                    id: n.id,
                    name: null !== (i = null == n ? void 0 : null === (e = n.bot) || void 0 === e ? void 0 : e.username) && void 0 !== i ? i : n.name,
                    icon: n.icon,
                    application: n
                }
            }

            function w(n) {
                var e, i;
                let t = n.id,
                    o = n.options,
                    a = null === (e = o) || void 0 === e ? void 0 : e.find(n => n.type === c.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
                null != a && (t += "".concat(T.SUB_COMMAND_KEY_SEPARATOR).concat(a.name), o = a.options);
                let r = null === (i = o) || void 0 === i ? void 0 : i.find(n => n.type === c.ApplicationCommandOptionType.SUB_COMMAND);
                return null != r && (t += "".concat(T.SUB_COMMAND_KEY_SEPARATOR).concat(r.name), o = r.options), {
                    commandKey: t,
                    interactionOptions: o
                }
            }

            function x(n, e, i, t) {
                var o;
                let a = i.name,
                    r = i.displayName;
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
                        serverLocalizedName: t
                    }
                    of null !== (o = i.options) && void 0 !== o ? o : []) {
                    if (e.startsWith(n) || "".concat(a, " ").concat(e).startsWith(n)) return 3;
                    if (null != r && "".concat(r, " ").concat(e).startsWith(n)) return 2;
                    if (null != t && (t.startsWith(n) || "".concat(a, " ").concat(t).startsWith(n) || null != r && "".concat(r, " ").concat(t).startsWith(n))) return 3;
                    (e.includes(n) || (null == t ? void 0 : t.includes(n))) && (l = !0)
                }
                return l ? 2 : (null == t ? void 0 : t.name.toLocaleLowerCase().startsWith(n)) ? 1 : 0
            }

            function W(n, e) {
                return _.default.useExperiment(n, e).userAppsTreatment === C.UserAppsTreatment.ALLOWED
            }

            function z(n, e) {
                return _.default.getCurrentConfig(n, e).userAppsTreatment === C.UserAppsTreatment.ALLOWED
            }
        },
        892692: function(n, e, i) {
            "use strict";
            i.r(e), i.d(e, {
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
            var t = i("798609");

            function o(n, e) {
                return n === t.ApplicationCommandType.CHAT ? "/" + e : e
            }

            function a(n, e) {
                return "".concat(n, ":").concat(e)
            }

            function r(n) {
                return Object.fromEntries(n.map(n => [a(n.id, n.type), n]))
            }
            i("524768")
        }
    }
]);
//# sourceMappingURL=c92f95b719cb6cbaddb7.js.map