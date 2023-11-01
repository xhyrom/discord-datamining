(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94816"], {
        223468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("872717"),
                l = n("819689"),
                a = n("49111"),
                o = n("782340"),
                s = {
                    changeNickname: (e, t, n, s) => i.default.patch({
                        url: a.Endpoints.GUILD_MEMBER_NICK(e, n),
                        body: {
                            nick: s
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        s = e.body.nick, l.default.sendBotMessage(t, null != s && "" !== s ? o.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                            nick: s
                        }) : o.default.Messages.COMMAND_NICK_RESET)
                    }, e => {
                        403 === e.status ? l.default.sendBotMessage(t, o.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : l.default.sendBotMessage(t, o.default.Messages.COMMAND_NICK_FAILURE)
                    })
                }
        },
        81594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                l = {
                    popFirstFile(e) {
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_POP_FILE",
                            channelId: e
                        })
                    },
                    addFiles(e) {
                        let {
                            files: t,
                            channelId: n,
                            showLargeMessageDialog: l,
                            draftType: a
                        } = e;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_ADD_FILES",
                            channelId: n,
                            files: t,
                            showLargeMessageDialog: l,
                            draftType: a
                        })
                    },
                    addFile(e) {
                        let {
                            file: t,
                            channelId: n,
                            showLargeMessageDialog: l,
                            draftType: a
                        } = e;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_ADD_FILES",
                            channelId: n,
                            files: [t],
                            showLargeMessageDialog: l,
                            draftType: a
                        })
                    },
                    remove(e, t, n) {
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                            channelId: e,
                            id: t,
                            draftType: n
                        })
                    },
                    removeFiles(e, t, n) {
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                            channelId: e,
                            attachmentIds: t,
                            draftType: n
                        })
                    },
                    clearAll(e, t) {
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                            channelId: e,
                            draftType: t
                        })
                    },
                    update(e, t, n, l) {
                        let {
                            description: a,
                            filename: o,
                            spoiler: s,
                            thumbnail: r
                        } = l;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                            channelId: e,
                            id: t,
                            filename: o,
                            description: a,
                            thumbnail: r,
                            spoiler: s,
                            draftType: n
                        })
                    },
                    setUploads(e) {
                        let {
                            uploads: t,
                            channelId: n,
                            draftType: l,
                            resetState: a
                        } = e;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                            channelId: n,
                            uploads: a ? t.map(e => e.resetState()) : t,
                            draftType: l
                        })
                    },
                    setFile(e) {
                        let {
                            file: t,
                            channelId: n,
                            id: l,
                            draftType: a
                        } = e;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_SET_FILE",
                            channelId: n,
                            id: l,
                            file: t,
                            draftType: a
                        })
                    }
                }
        },
        589777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BUILT_IN_SECTIONS: function() {
                    return R
                },
                getBuiltInCommands: function() {
                    return U
                }
            });
            var i = n("627445"),
                l = n.n(i),
                a = n("866227"),
                o = n.n(a),
                s = n("298386"),
                r = n("223468"),
                u = n("450911"),
                d = n("851387"),
                c = n("819689"),
                p = n("798609"),
                f = n("700179"),
                m = n("884351"),
                _ = n("252862"),
                T = n("730498"),
                I = n("300322"),
                C = n("845579"),
                A = n("42203"),
                E = n("957255"),
                N = n("697218"),
                S = n("158998"),
                g = n("524768"),
                M = n("317041"),
                O = n("49111"),
                v = n("903639"),
                h = n("782340");
            let y = n("150692").default,
                D = (e, t) => {
                    var n;
                    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
                },
                R = {
                    [M.BuiltInSectionId.BUILT_IN]: {
                        id: M.BuiltInSectionId.BUILT_IN,
                        type: g.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return h.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                        }
                    },
                    [M.BuiltInSectionId.FRECENCY]: {
                        id: M.BuiltInSectionId.FRECENCY,
                        type: g.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return h.default.Messages.FREQUENTLY_USED
                        }
                    }
                },
                P = [...y, {
                    id: "-1",
                    name: "shrug",
                    displayName: "shrug",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = D(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
                        }
                    }
                }, {
                    id: "-2",
                    name: "tableflip",
                    displayName: "tableflip",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = D(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                        }
                    }
                }, {
                    id: "-3",
                    name: "unflip",
                    displayName: "unflip",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = D(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                        }
                    }
                }, {
                    id: "-4",
                    name: "tts",
                    displayName: "tts",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && C.EnableTTSCommand.getSetting() && E.default.can(O.Permissions.SEND_TTS_MESSAGES, t)
                    },
                    execute: e => {
                        var t;
                        let n = null !== (t = D(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: n,
                            tts: !0
                        }
                    }
                }, {
                    id: "-5",
                    name: "me",
                    displayName: "me",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = D(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "_".concat(n, "_")
                        }
                    }
                }, {
                    id: "-6",
                    name: "spoiler",
                    displayName: "spoiler",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = D(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: (0, O.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                        }
                    }
                }, {
                    id: "-7",
                    name: "nick",
                    displayName: "nick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    options: [{
                        name: "new_nick",
                        displayName: "new_nick",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        }
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && (E.default.can(O.Permissions.CHANGE_NICKNAME, t) || E.default.can(O.Permissions.MANAGE_NICKNAMES, t))
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = D(e, "new_nick")) && void 0 !== n ? n : "";
                        r.default.changeNickname(i.id, l.id, O.ME, a || "")
                    }
                }, {
                    id: "-10",
                    name: "thread",
                    displayName: "thread",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    options: [{
                        name: "name",
                        displayName: "name",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return (0, I.computeCanStartPublicThread)(t)
                    },
                    execute: async (e, t) => {
                        var n, i;
                        let {
                            channel: l
                        } = t, a = null !== (n = D(e, "name")) && void 0 !== n ? n : "", o = null !== (i = D(e, "message")) && void 0 !== i ? i : "", r = await (0, T.createThread)(l, a, s.ChannelTypes.PUBLIC_THREAD, (0, _.getAutoArchiveDuration)(l, null), "Slash Command");
                        c.default.sendMessage(r.id, m.default.parse(r, o))
                    }
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return h.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return E.default.can(O.Permissions.KICK_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = D(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(O.Permissions.KICK_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, h.default.Messages.COMMAND_KICK_UNABLE);
                            return
                        }
                        let o = async () => {
                            var t;
                            let n = N.default.getUser(a);
                            if (null == n) throw Error();
                            await d.default.kickUser(i.id, a, null !== (t = D(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(l.id, h.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                user: S.default.getUserTag(n)
                            }))
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(l.id, h.default.Messages.COMMAND_KICK_ERROR)
                        })
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return h.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "delete_messages",
                        displayName: "delete_messages",
                        type: p.ApplicationCommandOptionType.INTEGER,
                        get description() {
                            return h.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return [{
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                value: 0
                            }, {
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                value: O.Durations.HOUR
                            }, {
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * O.Durations.HOUR
                            }, {
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * O.Durations.HOUR
                            }, {
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: O.Durations.DAY
                            }, {
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * O.Durations.DAY
                            }, {
                                name: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: h.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * O.Durations.DAY
                            }]
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return E.default.can(O.Permissions.BAN_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = D(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(O.Permissions.BAN_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, h.default.Messages.COMMAND_BAN_UNABLE);
                            return
                        }
                        let o = async () => {
                            var t, n;
                            if ("" === a) throw Error();
                            let o = null !== (t = D(e, "delete_messages")) && void 0 !== t ? t : 0,
                                s = null !== (n = D(e, "reason")) && void 0 !== n ? n : "",
                                r = N.default.getUser(a);
                            await d.default.banUser(i.id, a, o, s), c.default.sendBotMessage(l.id, h.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                user: null != r ? S.default.getUserTag(r) : a
                            }))
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(l.id, h.default.Messages.COMMAND_BAN_ERROR)
                        })
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return h.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "duration",
                        displayName: "duration",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return (0, v.getDisableCommunicationDurationOptions)().map(e => ({
                                ...e,
                                name: e.label,
                                displayName: e.label
                            }))
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return E.default.can(O.Permissions.MODERATE_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        let {
                            guild: n,
                            channel: i
                        } = t;
                        if (null == n) return;
                        let l = D(e, "user");
                        if (!(0, f.canToggleCommunicationDisableOnUser)(n.id, l)) {
                            c.default.sendBotMessage(i.id, h.default.Messages.COMMAND_TIMEOUT_UNABLE);
                            return
                        }
                        let a = async () => {
                            var t, a;
                            let s = null !== (t = D(e, "duration")) && void 0 !== t ? t : "",
                                r = null !== (a = D(e, "reason")) && void 0 !== a ? a : "",
                                u = N.default.getUser(l);
                            if (null == u) throw Error();
                            await d.default.setCommunicationDisabledUntil({
                                guildId: n.id,
                                userId: l,
                                communicationDisabledUntilTimestamp: o().add(s, "s").toISOString(),
                                duration: s,
                                reason: r
                            }), c.default.sendBotMessage(i.id, h.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: S.default.getUserTag(u),
                                duration: s
                            }))
                        };
                        a().catch(() => {
                            c.default.sendBotMessage(i.id, h.default.Messages.COMMAND_TIMEOUT_ERROR)
                        })
                    }
                }, {
                    id: "-14",
                    name: "msg",
                    displayName: "msg",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: g.ApplicationCommandInputType.BUILT_IN,
                    applicationId: M.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return h.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    get displayDescription() {
                        return h.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return h.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return h.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return h.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: (e, t) => {
                        var n;
                        let {
                            channel: i
                        } = t, a = D(e, "user"), o = null !== (n = D(e, "message")) && void 0 !== n ? n : "", s = async () => {
                            await u.default.openPrivateChannel(a).then(e => {
                                let t = A.default.getChannel(e);
                                l(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, m.default.parse(t, o))
                            })
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(i.id, h.default.Messages.COMMAND_MSG_ERROR)
                        })
                    }
                }],
                L = P.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
                U = (e, t, n) => {
                    let i = t ? P : L;
                    return i = i.filter(t => t.type === e && (!n || t.inputType === g.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === g.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
                }
        },
        369010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTopCommands: function() {
                    return s
                },
                useTopRealCommands: function() {
                    return r
                }
            });
            var i = n("884691"),
                l = n("446674"),
                a = n("872173"),
                o = n("342564");

            function s(e) {
                i.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getTopCommandsWithoutLoadingLatest()),
                    n = i.useMemo(() => (0, o.getFilteredTopCommands)(t, e), [t, e]);
                return n
            }

            function r(e) {
                i.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getTopCommandsWithoutLoadingLatest()),
                    n = i.useMemo(() => {
                        let n = (0, o.getFilteredTopCommands)(t, e);
                        return (0, o.getTopRealCommands)(n)
                    }, [t, e]);
                return n
            }
        },
        342564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTopRealCommands: function() {
                    return m
                },
                getFilteredTopCommands: function() {
                    return _
                },
                default: function() {
                    return A
                }
            });
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                o = n("913144"),
                s = n("798609"),
                r = n("80507"),
                u = n("374363"),
                d = n("317041"),
                c = n("397336");
            let p = {
                    pendingUsages: []
                },
                f = new r.default({
                    computeBonus: () => 1,
                    computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
                    lookupKey: e => e,
                    afterCompute: () => {},
                    numFrequentlyItems: 500
                });

            function m(e) {
                let t = new Set;
                for (let n of e) {
                    let e = n.split(d.SUB_COMMAND_KEY_SEPARATOR)[0];
                    if (Number(e) > 0 && t.add(e), t.size >= d.DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT) break
                }
                return [...t]
            }

            function _(e, t) {
                return e.filter(e => {
                    if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
                    return !0
                }).map(e => e.split(":")[0])
            }

            function T(e, t) {
                return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
            }

            function I() {
                var e, t;
                let n = u.default.frecencyWithoutFetchingLatest,
                    i = null !== (t = null === (e = n.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
                f.overwriteHistory(l.mapValues(i, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), p.pendingUsages)
            }
            class C extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (p = e), this.syncWith([u.default], I)
                }
                getState() {
                    return p
                }
                hasPendingUsage() {
                    return p.pendingUsages.length > 0
                }
                getCommandFrecencyWithoutLoadingLatest() {
                    return f
                }
                getScoreWithoutLoadingLatest(e, t) {
                    var n;
                    return null !== (n = f.getScore(T(e, t))) && void 0 !== n ? n : 0
                }
                getTopCommandsWithoutLoadingLatest() {
                    return f.frequently
                }
            }
            C.displayName = "ApplicationCommandFrecencyStore", C.persistKey = "ApplicationCommandFrecencyV2";
            var A = new C(o.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t,
                        context: n
                    } = e;
                    if (t.type !== s.ApplicationCommandType.CHAT) return !1;
                    let i = T(n, t);
                    p.pendingUsages.push({
                        key: i,
                        timestamp: Date.now()
                    }), f.track(i), f.compute()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    p.pendingUsages = []
                }
            })
        },
        9566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationCommandIndex: function() {
                    return s
                },
                requestApplicationCommandIndex: function() {
                    return r
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("599110"),
                o = n("49111");
            async function s(e, t, n) {
                let s, r = 0;
                switch (e.type) {
                    case "channel":
                        s = o.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        s = o.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        s = o.Endpoints.APPLICATION_COMMAND_INDEX_USER
                }
                let u = async t => r >= 3 ? (c(!0), l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                    target: e
                })) : (await new Promise(e => setTimeout(e, t)), d()), d = () => i.default.get({
                    url: s,
                    retries: 3 - r - 1,
                    signal: n.signal,
                    onRequestCreated: () => r++
                }).then(t => 202 === t.status ? u(3e3) : (c(!1), l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
                    target: e,
                    index: t.body
                })), t => {
                    if (n.signal.aborted) {
                        c(!0);
                        return
                    }
                    return 429 === t.status ? u(1e3 * t.body.retry_after) : (c(!0), l.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                        target: e
                    }))
                }), c = e => {
                    let i = performance.now() - t;
                    a.default.track(o.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: i,
                        error: e,
                        aborted: n.signal.aborted,
                        include_applications: !0,
                        retries: Math.max(r - 1, 0),
                        kind: null,
                        command_type: null
                    })
                };
                await d()
            }

            function r(e) {
                l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
                    start: performance.now(),
                    target: e
                })
            }
        },
        988721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Z
                },
                useContextIndexState: function() {
                    return $
                },
                useUserIndexState: function() {
                    return J
                },
                useDiscoveryState: function() {
                    return ee
                },
                useQueryState: function() {
                    return et
                }
            });
            var i, l, a = n("884691"),
                o = n("448105"),
                s = n.n(o),
                r = n("627445"),
                u = n.n(r),
                d = n("917351"),
                c = n.n(d),
                p = n("316693"),
                f = n("446674"),
                m = n("913144"),
                _ = n("851387"),
                T = n("798609"),
                I = n("892692"),
                C = n("38654"),
                A = n("915639"),
                E = n("845579"),
                N = n("872173"),
                S = n("42203"),
                g = n("26989"),
                M = n("305961"),
                O = n("957255"),
                v = n("697218"),
                h = n("599110"),
                y = n("589777"),
                D = n("369010"),
                R = n("342564"),
                P = n("9566"),
                L = n("14090"),
                U = n("972620"),
                B = n("524768"),
                H = n("389153"),
                b = n("317041"),
                F = n("49111");
            let w = Symbol("currentUser"),
                G = Symbol("stale"),
                x = Symbol("current"),
                Y = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                k = Object.freeze({
                    serverVersion: x,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: [],
                        version: x,
                        commandsByType: {}
                    }
                }),
                q = Object.freeze({
                    serverVersion: G,
                    fetchState: {
                        fetching: !1
                    }
                }),
                W = {
                    sensitivity: "accent",
                    numeric: !0
                };

            function V(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return w
                }
            }

            function K(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = V(e),
                    l = j.indices[i];
                return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), j.indices[i] = {
                    ...l,
                    ...t
                }) : n && (j.indices[i] = {
                    serverVersion: G,
                    fetchState: {
                        fetching: !1
                    },
                    ...t
                }), l
            }

            function X(e) {
                let t = V(e),
                    n = j.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete j.indices[t]
            }

            function z() {
                for (let e of Object.values(j.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
                j.indices = {}
            }
            class Q extends f.default.Store {
                initialize() {
                    this.waitFor(A.default), this.syncWith([A.default], () => {
                        ! function() {
                            let e = A.default.locale;
                            e !== j.oldLocale && (z(), j.collator = new Intl.Collator(e, {
                                sensitivity: "accent",
                                numeric: !0
                            }), j.oldLocale = e)
                        }()
                    })
                }
                getContextState(e) {
                    var t, n;
                    return null != e && ei(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : q : k
                }
                getUserState() {
                    var e;
                    return (0, H.isInUserAppExperiment)({
                        location: "getUserState"
                    }, {
                        autoTrackExposure: !1
                    }) ? null !== (e = this.indices[w]) && void 0 !== e ? e : q : k
                }
                query(e, t, n) {
                    var i, l;
                    let a = v.default.getCurrentUser();
                    if (null == a) return Y;
                    let o = this.getContextState(e),
                        s = this.getUserState(),
                        r = M.default.getGuild(e.guild_id),
                        u = O.default.can(F.Permissions.USE_APPLICATION_COMMANDS, e),
                        d = E.ViewNsfwCommands.getSetting(),
                        c = null != e.guild_id && null !== (l = C.default.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0,
                        p = null != e.guild_id ? null === (i = g.default.getMember(e.guild_id, a.id)) || void 0 === i ? void 0 : i.roles : void 0,
                        f = !1 !== t.applicationCommands && (e.isPrivate() || u),
                        m = !1;
                    if (n.allowFetch) {
                        let t = f && ei(e);
                        t && (h.default.track(F.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: null == o.result,
                            size: Object.keys(j.indices).length
                        }), el(o) && (null != e.guild_id ? (0, P.requestApplicationCommandIndex)({
                            type: "guild",
                            guildId: e.guild_id
                        }) : (0, P.requestApplicationCommandIndex)({
                            type: "channel",
                            channelId: e.id
                        }), m = !0)), (0, H.isInUserAppExperiment)({
                            location: "query"
                        }) && el(s) && ((0, P.requestApplicationCommandIndex)({
                            type: "user"
                        }), m = !0)
                    }
                    let _ = L.default.getCurrentConfig({
                            location: "query"
                        }).newScoreLogic,
                        T = e.isPrivate(),
                        I = en({
                            context: {
                                channel: e,
                                guild: r
                            },
                            currentUserId: a.id,
                            currentUserRoleIds: p,
                            impersonationRoles: c,
                            commandType: t.commandType,
                            text: t.text,
                            allowApplicationCommands: f,
                            builtIns: t.builtIns,
                            allowNsfw: (null == a ? void 0 : a.nsfwAllowed) === !0 && (!T && d || T && e.nsfw),
                            sortByScore: n.sortByScore,
                            useNewScoreLogic: _,
                            contextState: o,
                            userState: s
                        });
                    return I.loading = I.loading || m, I
                }
                constructor(...e) {
                    super(...e), this.indices = {}, this.oldLocale = A.default.locale, this.collator = new Intl.Collator(A.default.locale, W)
                }
            }
            Q.displayName = "ApplicationCommandIndexStore";
            let j = new Q(m.default, {
                LOGOUT: z,
                CONNECTION_OPEN: z,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    var t;
                    let {
                        target: n,
                        start: i
                    } = e;
                    if (el(null !== (t = j.indices[V(n)]) && void 0 !== t ? t : q)) {
                        let e = new AbortController;
                        K(n, {
                            fetchState: {
                                fetching: !0,
                                abort: e
                            }
                        }, !0), (0, P.fetchApplicationCommandIndex)(n, i, e)
                    }
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var t, n, i, l;
                    let {
                        target: a,
                        index: o
                    } = e, s = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == s) return !1;
                    let r = [],
                        u = {},
                        d = new Set;
                    for (let e of o.applications) {
                        if (null == e.bot && null != e.bot_id) {
                            let t = v.default.getUser(e.bot_id);
                            null != t ? e.bot = t : d.add(e.bot_id)
                        }
                        let t = {
                            descriptor: {
                                ...(0, H.getApplicationCommandSection)(function(e) {
                                    return {
                                        description: e.description,
                                        icon: e.icon,
                                        id: e.id,
                                        name: e.name,
                                        bot: e.bot
                                    }
                                }(e)),
                                permissions: null != e.permissions ? (0, I.keyPermissions)(es(e.permissions, s)) : void 0,
                                botId: e.bot_id
                            },
                            commands: []
                        };
                        r.push(t), u[e.id] = t
                    }
                    "guild" === a.type && d.size > 0 && _.default.requestMembersById(a.guildId, [...d]);
                    let c = {};
                    for (let e of (0, H.buildApplicationCommands)(o.application_commands.map(e => (function(e, t) {
                            var n, i, l, a, o;
                            let s = {
                                ...e,
                                description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                                dm_permission: void 0,
                                name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                                options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(ea)) && void 0 !== o ? o : [],
                                permissions: null != e.permissions ? es(e.permissions, t) : void 0
                            };
                            return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
                        })(e, s)), !0)) null === (n = u[e.applicationId]) || void 0 === n || n.commands.push(e), c[e.type] = (null !== (i = c[e.type]) && void 0 !== i ? i : 0) + 1;
                    let p = null !== (l = o.version) && void 0 !== l ? l : x;
                    K(a, {
                        serverVersion: p,
                        result: {
                            sections: r,
                            version: p,
                            commandsByType: c
                        },
                        fetchState: {
                            fetching: !1
                        }
                    })
                },
                APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
                    let {
                        target: t
                    } = e;
                    K(t, {
                        fetchState: {
                            fetching: !1,
                            retryAfter: Date.now() + 5e3
                        }
                    })
                },
                APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
                    let t, {
                        channelId: n,
                        guildId: i
                    } = e;
                    K(t = null != i ? {
                        type: "guild",
                        guildId: i
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: G
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    X({
                        type: "channel",
                        channelId: t.id
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    X({
                        type: "guild",
                        guildId: t.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var t, n, i, l, a, o;
                    let {
                        guildId: s,
                        version: r
                    } = e, u = K({
                        type: "guild",
                        guildId: s
                    }, {
                        serverVersion: null != r ? r : G
                    });
                    for (let e of null !== (n = null == u ? void 0 : null === (t = u.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : [])
                        if ((null === (l = e.descriptor.application) || void 0 === l ? void 0 : null === (i = l.bot) || void 0 === i ? void 0 : i.id) != null) {
                            let t = S.default.getDMFromUserId(null === (o = e.descriptor.application) || void 0 === o ? void 0 : null === (a = o.bot) || void 0 === a ? void 0 : a.id);
                            null != t && K({
                                type: "channel",
                                channelId: t
                            }, {
                                serverVersion: G
                            })
                        }
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n
                    } = e, i = V({
                        type: "guild",
                        guildId: t
                    }), l = j.indices[i];
                    if ((null == l ? void 0 : l.result) == null) return !1;
                    let a = new Map;
                    l.result.sections.forEach(e => {
                        null != e.descriptor.botId && a.set(e.descriptor.botId, e)
                    });
                    let o = !1;
                    return n.forEach(e => {
                        let t = a.get(e.user.id);
                        if (null != t && null != t.descriptor.application) {
                            let n = t.descriptor.application;
                            n.bot = e.user, t.descriptor = (0, H.getApplicationCommandSection)(n), o = !0
                        }
                    }), o
                }
            });
            var Z = j;

            function $(e, t, n) {
                let [i, l] = a.useState(!0), o = (0, f.useStateFromStoresObject)([j], () => j.getContextState(e));
                return a.useEffect(() => {
                    if (i && null != e) {
                        if (n) {
                            let n = t && ei(e);
                            n && (h.default.track(F.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == o.result,
                                size: Object.keys(j.indices).length
                            }), el(o) && (null != e.guild_id ? (0, P.requestApplicationCommandIndex)({
                                type: "guild",
                                guildId: e.guild_id
                            }) : (0, P.requestApplicationCommandIndex)({
                                type: "channel",
                                channelId: e.id
                            })))
                        }
                        l(!1)
                    }
                }, [o, n, e, t, i]), o
            }

            function J(e, t) {
                let [n, i] = a.useState(!0), l = (0, f.useStateFromStoresObject)([j], () => j.getUserState()), o = (0, H.useIsInUserAppExperiment)({
                    location: "useUserIndexState"
                });
                return a.useEffect(() => {
                    n && (t && el(l) && e && o && (0, P.requestApplicationCommandIndex)({
                        type: "user"
                    }), i(!1))
                }, [l, t, e, o, n]), l
            }

            function ee(e, t, n, i) {
                let {
                    descriptors: l,
                    commands: o,
                    sectionedCommands: s,
                    loading: r
                } = et(e, t, n, i), u = (0, D.useTopCommands)({
                    channel: e,
                    guild: t
                });
                return a.useMemo(() => {
                    if (!i.includeFrecency || 0 === u.length) return {
                        descriptors: l,
                        commands: o,
                        sectionedCommands: s,
                        loading: r
                    };
                    let n = {
                            channel: e,
                            guild: t
                        },
                        a = o.filter(e => u.includes(e.id)).sort((e, t) => {
                            let i = R.default.getScoreWithoutLoadingLatest(n, e),
                                l = R.default.getScoreWithoutLoadingLatest(n, t);
                            return l - i
                        }).splice(0, b.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
                    return 0 === a.length ? {
                        descriptors: l,
                        commands: o,
                        sectionedCommands: s,
                        loading: r
                    } : {
                        descriptors: [y.BUILT_IN_SECTIONS[b.BuiltInSectionId.FRECENCY], ...l],
                        commands: a.concat(o),
                        sectionedCommands: [{
                            section: y.BUILT_IN_SECTIONS[b.BuiltInSectionId.FRECENCY],
                            data: a
                        }, ...s],
                        loading: r
                    }
                }, [r, i.includeFrecency, u, e, t, o, l, s])
            }

            function et(e, t, n, i) {
                var l;
                let {
                    newScoreLogic: o
                } = L.default.useExperiment({
                    location: "useQueryState"
                }), {
                    id: s,
                    nsfwAllowed: r
                } = (0, f.useStateFromStoresObject)([v.default], () => {
                    var e;
                    let t = v.default.getCurrentUser();
                    return {
                        id: null == t ? void 0 : t.id,
                        nsfwAllowed: null !== (e = null == t ? void 0 : t.nsfwAllowed) && void 0 !== e && e
                    }
                }), u = (0, f.useStateFromStores)([O.default], () => O.default.can(F.Permissions.USE_APPLICATION_COMMANDS, e)), d = (0, f.useStateFromStores)([g.default], () => {
                    var n;
                    if (null != t && null != s) return null === (n = g.default.getMember(e.guild_id, s)) || void 0 === n ? void 0 : n.roles
                }), c = (0, f.useStateFromStores)([C.default], () => null !== (l = C.default.getViewingRoles(e.guild_id)) && void 0 !== l ? l : void 0), p = !1 !== n.applicationCommands && (e.isPrivate() || u), m = $(e, p, i.allowFetch), _ = J(p, i.allowFetch), T = E.ViewNsfwCommands.useSetting();
                return a.useMemo(() => null == s ? Y : en({
                    context: {
                        channel: e,
                        guild: t
                    },
                    currentUserId: s,
                    currentUserRoleIds: d,
                    impersonationRoles: c,
                    commandType: n.commandType,
                    text: n.text,
                    allowApplicationCommands: p,
                    builtIns: n.builtIns,
                    allowNsfw: r && (!e.isPrivate() && T || e.isPrivate() && e.nsfw),
                    sortByScore: i.sortByScore,
                    useNewScoreLogic: o,
                    contextState: m,
                    userState: _
                }), [e, t, s, d, c, n.commandType, n.text, n.builtIns, i.sortByScore, p, r, T, o, m, _])
            }

            function en(e) {
                var t, n, i, a;
                let o, r, {
                        context: d,
                        currentUserId: f,
                        currentUserRoleIds: m,
                        impersonationRoles: _,
                        contextState: I,
                        userState: C,
                        commandType: A,
                        text: E,
                        builtIns: S = U.BuiltInCommandFilter.ALLOW,
                        allowApplicationCommands: g = !0,
                        allowNsfw: M = !1,
                        sortByScore: v = !1,
                        useNewScoreLogic: h = !1
                    } = e,
                    D = null == E ? void 0 : E.toLowerCase(),
                    P = null == D ? void 0 : D.split(" "),
                    L = d.channel.guild_id,
                    B = null != _,
                    w = B ? Object.keys(_) : m,
                    G = d.channel.isThread() ? d.channel.parent_id : d.channel.id;
                u(null != G, "permissions channel id is null");
                let x = O.default.computePermissions(d.channel, void 0, _),
                    Y = null != L && !p.default.has(x, F.Permissions.ADMINISTRATOR),
                    k = S === U.BuiltInCommandFilter.ONLY_TEXT,
                    q = S !== U.BuiltInCommandFilter.DENY ? (0, y.getBuiltInCommands)(A, !0, k) : [],
                    W = q.length > 0 ? [{
                        descriptor: y.BUILT_IN_SECTIONS[b.BuiltInSectionId.BUILT_IN],
                        commands: q
                    }] : [],
                    V = g ? [...null !== (i = null === (t = I.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : [], ...null !== (a = null === (n = C.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : []] : [];
                V.sort((e, t) => ed(e.descriptor.name, t.descriptor.name));
                let K = [...V, ...W];
                o = d.channel.isPrivate() ? d.channel.type === F.ChannelTypes.DM ? T.ApplicationCommandContextType.BOT_DM : T.ApplicationCommandContextType.PRIVATE_CHANNEL : T.ApplicationCommandContextType.GUILD;
                let X = [];
                for (let e of K) {
                    if (0 === e.commands.length) continue;
                    let t = e.descriptor.permissions,
                        n = null,
                        i = null;
                    Y && null != t && (n = er(t, G, L), i = eu(t, f, w, L, B));
                    let a = [];
                    for (let t of e.commands) {
                        let r;
                        if (t.type !== A || !0 === t.nsfw && !M || null != t.predicate && !t.predicate(d) || null != t.contexts && !t.contexts.includes(o)) continue;
                        let u = t.permissions;
                        if (Y) {
                            let e = null,
                                l = null;
                            if (null != u && (e = er(u, G, L), l = eu(u, f, w, L, B)), !1 === e || !1 === l || !0 !== e && !1 === n || !0 !== l && !1 === i || null == l && null == i && null != t.defaultMemberPermissions && (p.default.equals(t.defaultMemberPermissions, H.DISABLED_BY_DEFAULT_PERMISSION_FLAG) || !p.default.has(x, t.defaultMemberPermissions))) continue
                        }
                        if (v && null != D && null != P) {
                            if (0 === (r = h ? - function(e, t, n) {
                                    var i, a;
                                    let o = t.name.toLocaleLowerCase(),
                                        r = t.name !== t.displayName ? t.displayName.toLocaleLowerCase() : null;
                                    if (e === o || e === r) return l.COMMAND_NAME_EXACT;
                                    if (o.startsWith(e) || (null == r ? void 0 : r.startsWith(e))) return l.COMMAND_NAME_STARTS_WITH;
                                    if (null != t.options) {
                                        let n = null;
                                        if (e.startsWith(o) && " " === e[o.length] && (n = e.slice(o.length + 1)), null != r && e.startsWith(r) && " " === e[r.length] && (n = e.slice(r.length + 1)), null != n)
                                            for (let e of t.options) {
                                                let t = e.name.toLocaleLowerCase(),
                                                    i = e.name !== e.displayName ? e.displayName.toLocaleLowerCase() : null;
                                                if (n === t || n === i) return l.COMMAND_OPTION_NAME_EXACT;
                                                if (t.startsWith(n) || (null == i ? void 0 : i.startsWith(n))) return l.COMMAND_OPTION_NAME_STARTS_WITH
                                            }
                                    }
                                    let u = null == n ? void 0 : n.name.toLocaleLowerCase();
                                    if (u === e) return l.SECTION_NAME_EXACT;
                                    if (null == u ? void 0 : u.startsWith(e)) return l.SECTION_NAME_STARTS_WITH;
                                    let d = null == n ? void 0 : null === (a = n.application) || void 0 === a ? void 0 : null === (i = a.tags) || void 0 === i ? void 0 : i.map(e => e.toLocaleLowerCase());
                                    if (null == d ? void 0 : d.some(t => t === e)) return l.TAG_EXACT;
                                    if (null == d ? void 0 : d.some(t => t.startsWith(e))) return l.TAG_STARTS_WITH;
                                    if (o.includes(e) || (null == r ? void 0 : r.includes(e))) return l.COMMAND_NAME_CONTAINS;
                                    if (null == u ? void 0 : u.includes(e)) return l.SECTION_NAME_CONTAINS;
                                    let c = t.description.toLocaleLowerCase();
                                    return (null == c ? void 0 : c.includes(e)) ? l.COMMAND_DESC_CONTAINS : null != o && s(e, o) || null != r && s(e, r) ? l.COMMAND_NAME_FUZZY : null != u && s(e, u) ? l.SECTION_NAME_FUZZY : null != c && s(e, c) ? l.COMMAND_DESC_FUZZY : l.NO_MATCH
                                }(D, t, e.descriptor) : (0, H.scoreCommand)(D, P, t, e.descriptor))) continue
                        } else r = 0;
                        a.push({
                            ...t,
                            score: r
                        })
                    }
                    a.length > 0 && X.push({
                        section: e.descriptor,
                        data: a
                    })
                }
                if (v) N.FrecencyUserSettingsActionCreators.loadIfNecessary(), (r = c.flatMap(X, e => e.data)).sort((e, t) => {
                    if (e.score !== t.score) return t.score - e.score;
                    let n = R.default.getScoreWithoutLoadingLatest(d, e),
                        i = R.default.getScoreWithoutLoadingLatest(d, t);
                    return n !== i ? i - n : ed(e.displayName, t.displayName)
                });
                else {
                    for (let e of X) e.data.sort((e, t) => ed(e.displayName, t.displayName));
                    r = c.flatMap(X, e => e.data)
                }
                return {
                    descriptors: X.map(e => e.section),
                    commands: r,
                    sectionedCommands: X,
                    loading: (null == I ? void 0 : I.fetchState.fetching) === !0 || (null == C ? void 0 : C.fetchState.fetching) === !0
                }
            }

            function ei(e) {
                var t;
                return null != e.guild_id || e.type === F.ChannelTypes.DM && (null === (t = v.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
            }

            function el(e) {
                return !! function(e) {
                    var t;
                    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
                }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function ea(e) {
                var t, n, i, l;
                let a = {
                    ...e,
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(eo),
                    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
                    name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ea)
                };
                return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
            }

            function eo(e) {
                var t;
                let n = {
                    ...e,
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                };
                return e.name !== e.name_default && (n.name_localized = e.name), n
            }

            function es(e, t) {
                let n = [];
                if (null != e.user && n.push({
                        type: B.ApplicationCommandPermissionType.USER,
                        id: t,
                        permission: e.user
                    }), null != e.channels)
                    for (let [t, i] of Object.entries(e.channels)) n.push({
                        type: B.ApplicationCommandPermissionType.CHANNEL,
                        id: t,
                        permission: i
                    });
                if (null != e.roles)
                    for (let [t, i] of Object.entries(e.roles)) n.push({
                        type: B.ApplicationCommandPermissionType.ROLE,
                        id: t,
                        permission: i
                    });
                return n
            }

            function er(e, t, n) {
                let i = e[(0, I.toPermissionKey)(t, B.ApplicationCommandPermissionType.CHANNEL)];
                if (null != i) return i.permission;
                let l = e[(0, I.toPermissionKey)((0, H.allChannelsSentinel)(n), B.ApplicationCommandPermissionType.CHANNEL)];
                return null != l ? l.permission : null
            }

            function eu(e, t, n, i, l) {
                if (!l) {
                    let n = e[(0, I.toPermissionKey)(t, B.ApplicationCommandPermissionType.USER)];
                    if (null != n) return n.permission
                }
                if (null == n) return !1;
                let a = !1;
                for (let t of n) {
                    let n = e[(0, I.toPermissionKey)(t, B.ApplicationCommandPermissionType.ROLE)];
                    if (null != n) {
                        if (n.permission) return !0;
                        a = !0
                    }
                }
                if (a) return !1;
                let o = e[(0, I.toPermissionKey)(i, B.ApplicationCommandPermissionType.ROLE)];
                return null != o ? o.permission : null
            }(i = l || (l = {}))[i.NO_MATCH = 0] = "NO_MATCH", i[i.COMMAND_NAME_EXACT = 1] = "COMMAND_NAME_EXACT", i[i.COMMAND_NAME_STARTS_WITH = 2] = "COMMAND_NAME_STARTS_WITH", i[i.COMMAND_OPTION_NAME_EXACT = 3] = "COMMAND_OPTION_NAME_EXACT", i[i.COMMAND_OPTION_NAME_STARTS_WITH = 4] = "COMMAND_OPTION_NAME_STARTS_WITH", i[i.SECTION_NAME_EXACT = 5] = "SECTION_NAME_EXACT", i[i.SECTION_NAME_STARTS_WITH = 6] = "SECTION_NAME_STARTS_WITH", i[i.TAG_EXACT = 7] = "TAG_EXACT", i[i.TAG_STARTS_WITH = 8] = "TAG_STARTS_WITH", i[i.COMMAND_NAME_CONTAINS = 9] = "COMMAND_NAME_CONTAINS", i[i.SECTION_NAME_CONTAINS = 10] = "SECTION_NAME_CONTAINS", i[i.COMMAND_DESC_CONTAINS = 11] = "COMMAND_DESC_CONTAINS", i[i.COMMAND_NAME_FUZZY = 12] = "COMMAND_NAME_FUZZY", i[i.SECTION_NAME_FUZZY = 13] = "SECTION_NAME_FUZZY", i[i.COMMAND_DESC_FUZZY = 14] = "COMMAND_DESC_FUZZY";

            function ed(e, t) {
                return j.collator.compare(e, t)
            }
        },
        240249: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCachedCommand: function() {
                    return I
                },
                getCachedApplicationSection: function() {
                    return C
                },
                getCachedResults: function() {
                    return A
                },
                getChangeKeys: function() {
                    return E
                },
                useDiscovery: function() {
                    return N
                },
                executeQuery: function() {
                    return S
                },
                useQuery: function() {
                    return g
                },
                useCommand: function() {
                    return M
                },
                useCommandsForApplication: function() {
                    return O
                },
                getCommandTypeCount: function() {
                    return v
                },
                useSearchOpenState: function() {
                    return h
                },
                isInIndexExperiment: function() {
                    return y
                }
            });
            var i = n("884691"),
                l = n("446674"),
                a = n("305961"),
                o = n("697218"),
                s = n("507217"),
                r = n("589777"),
                u = n("14090"),
                d = n("988721"),
                c = n("972620"),
                p = n("216193"),
                f = n("166004"),
                m = n("524768"),
                _ = n("317041"),
                T = n("49111");

            function I(e, t) {
                var n, i, l, a;
                if (null == t) return {
                    application: void 0,
                    command: void 0
                };
                if (!y({
                        location: "getCachedCommand"
                    })) {
                    let e = p.default.getCommand(t),
                        n = p.default.getApplication(null == e ? void 0 : e.applicationId);
                    return {
                        command: e,
                        application: n
                    }
                }
                let o = d.default.getContextState(e),
                    s = d.default.getUserState(),
                    r = (null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : []).concat(null !== (a = null === (i = s.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : []);
                for (let e of r) {
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

            function C(e, t, n) {
                var i, l, a, o, s, r;
                if (!y({
                        location: "getCachedApplicationSection"
                    })) return null === (o = f.default.getApplicationSections(e.id, t)) || void 0 === o ? void 0 : o.find(e => e.id === n);
                let u = d.default.getContextState(e),
                    c = d.default.getUserState(),
                    p = (null !== (s = null === (i = u.result) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : []).concat(null !== (r = null === (l = c.result) || void 0 === l ? void 0 : l.sections) && void 0 !== r ? r : []);
                return null === (a = p.find(e => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === n
                })) || void 0 === a ? void 0 : a.descriptor
            }

            function A(e, t, n) {
                if (!y({
                        location: "getCachedResults"
                    })) {
                    var i, l;
                    return {
                        commands: null !== (i = f.default.getQueryCommands(e.id, t, n)) && void 0 !== i ? i : [],
                        sections: null !== (l = f.default.getApplicationSections(e.id, t)) && void 0 !== l ? l : []
                    }
                }
                let a = d.default.query(e, {
                    commandType: t,
                    text: n
                }, {
                    sortByScore: !0,
                    allowFetch: !1
                });
                return {
                    commands: a.commands,
                    sections: a.descriptors
                }
            }

            function E(e, t, n) {
                if (!y({
                        location: "getChangeKeys"
                    }, {
                        autoTrackExposure: !1
                    })) return [f.default.getQueryCommands(e.id, t, n)];
                let i = d.default.getContextState(e),
                    l = d.default.getUserState();
                return [null == i ? void 0 : i.result, null == l ? void 0 : l.result]
            }

            function N(e, t, n) {
                if (!D({
                        location: "useDiscovery"
                    })) {
                    var o, s;
                    return (0, f.useDiscoveryState)(e, t.commandType, null !== (o = n.placeholderCount) && void 0 !== o ? o : 0, null !== (s = n.limit) && void 0 !== s ? s : 10, {
                        canOnlyUseTextCommands: t.builtIns === c.BuiltInCommandFilter.ONLY_TEXT,
                        canUseFrecency: n.includeFrecency
                    })
                }
                let u = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: p,
                        commands: m,
                        sectionedCommands: I,
                        loading: C
                    } = (0, d.useDiscoveryState)(e, u, t, {
                        ...n,
                        allowFetch: !0
                    }),
                    [A, E] = i.useState(null),
                    N = i.useRef(!1);
                N.current = C;
                let S = i.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let i = 0; i < n.placeholderCount; i++) e.push(R(i, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => {
                    let e = {
                        loading: N,
                        commands: m,
                        activeSections: p,
                        commandsByActiveSection: I,
                        filteredSectionId: A,
                        hasMoreAfter: !1,
                        placeholders: C ? S : [],
                        sectionDescriptors: p,
                        filterSection: e => {
                            E(e)
                        },
                        scrollDown: T.NOOP
                    };
                    if (null != A) {
                        let t = I.find(e => e.section.id === A);
                        e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
                    }
                    if (C) {
                        let t = I[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: [...t.data, ...S]
                        }, ...I.slice(1)];
                        else {
                            let t = r.BUILT_IN_SECTIONS[_.BuiltInSectionId.BUILT_IN];
                            e.activeSections = [t], e.commandsByActiveSection = [{
                                section: t,
                                data: S
                            }]
                        }
                        e.commands = [...m, ...S]
                    }
                    return e
                }, [m, p, A, I, C, S])
            }

            function S(e, t, n) {
                if (!y({
                        location: "executeQuery"
                    })) {
                    var i, l, o, u, c;
                    return !0 === n.allowFetch && s.querySearchManager({
                        channel: e,
                        guild: null != e.guild_id ? a.default.getGuild(e.guild_id) : null
                    }, null !== (i = t.text) && void 0 !== i ? i : "", null !== (l = n.limit) && void 0 !== l ? l : 10, t.commandType), {
                        commands: null !== (u = f.default.getQueryCommands(e.id, t.commandType, null !== (o = t.text) && void 0 !== o ? o : "")) && void 0 !== u ? u : [],
                        sections: null !== (c = f.default.getApplicationSections(e.id, t.commandType)) && void 0 !== c ? c : []
                    }
                }
                let {
                    descriptors: p,
                    commands: m,
                    loading: T
                } = d.default.query(e, t, n), I = [];
                if (null != n.placeholderCount && T)
                    for (let e = 0; e < n.placeholderCount; e++) I.push(R(e, t.commandType));
                return {
                    commands: T ? [...m, ...I] : m,
                    sections: T && 0 === p.length ? [r.BUILT_IN_SECTIONS[_.BuiltInSectionId.BUILT_IN]] : p
                }
            }

            function g(e, t, n) {
                if (!D({
                        location: "useQuery"
                    })) {
                    var o, s;
                    return (0, f.useQueryState)(e, t.commandType, null !== (o = t.text) && void 0 !== o ? o : "", null !== (s = n.limit) && void 0 !== s ? s : 10)
                }
                let u = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: c,
                        commands: p,
                        loading: m
                    } = (0, d.useQueryState)(e, u, t, {
                        ...n,
                        allowFetch: !0
                    }),
                    I = i.useMemo(() => {
                        let e = [];
                        if (null != n.placeholderCount)
                            for (let i = 0; i < n.placeholderCount; i++) e.push(R(i, t.commandType));
                        return e
                    }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => ({
                    commands: m ? [...p, ...I] : p,
                    sections: m && 0 === c.length ? [r.BUILT_IN_SECTIONS[_.BuiltInSectionId.BUILT_IN]] : c,
                    scrollDown: T.NOOP
                }), [m, p, c, I])
            }

            function M(e, t) {
                var n, a, r, u, c;
                if (!D({
                        location: "useCommand"
                    })) {
                    let n = (0, l.useStateFromStores)([o.default], () => {
                            if (null == e ? void 0 : e.isDM()) {
                                let t = e.getRecipientId(),
                                    n = o.default.getUser(t);
                                if (null != n && n.bot) return n
                            }
                            return null
                        }, [e]),
                        {
                            command: a,
                            application: u
                        } = (0, l.useStateFromStoresObject)([p.default], () => {
                            let e = null != t ? p.default.getCommand(t) : void 0,
                                n = p.default.getApplication(null == e ? void 0 : e.applicationId);
                            return {
                                command: e,
                                application: n
                            }
                        });
                    return (i.useEffect(() => {
                        null != e && null == a && (null != n ? s.fetchCommandsForApplication({
                            guildId: null,
                            channelId: e.id,
                            applicationId: n.id
                        }) : null != e.guild_id && null != t && s.fetchCommand(e.guild_id, e.id, t))
                    }, [n, e, a, t]), null == e || null == e.guild_id && (null == n || null == u || n.id !== (null === (r = u.bot) || void 0 === r ? void 0 : r.id))) ? {
                        command: void 0,
                        application: void 0
                    } : {
                        command: a,
                        application: u
                    }
                }
                let f = (0, d.useContextIndexState)(e, !0, !0),
                    m = (0, d.useUserIndexState)(!0, !0),
                    _ = (null !== (u = null === (n = f.result) || void 0 === n ? void 0 : n.sections) && void 0 !== u ? u : []).concat(null !== (c = null === (a = m.result) || void 0 === a ? void 0 : a.sections) && void 0 !== c ? c : []);
                for (let e of _)
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

            function O(e, t, n) {
                if (!D({
                        location: "useCommandsForApplication"
                    })) return i.useEffect(() => {
                    s.fetchCommands(e.guild_id, e.id, n)
                }, [n, e]), (0, l.useStateFromStoresObject)([p.default], () => {
                    let i = p.default.getApplication(t),
                        l = p.default.getCommands(n, e.id);
                    return {
                        commands: l,
                        application: i
                    }
                });
                let a = (0, d.useContextIndexState)(e, !0, !0),
                    o = (0, d.useUserIndexState)(!0, !0);
                return i.useMemo(() => {
                    var e, i, l, s, r;
                    let u = (null !== (s = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== s ? s : []).concat(null !== (r = null === (i = o.result) || void 0 === i ? void 0 : i.sections) && void 0 !== r ? r : []),
                        d = u.find(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === t
                        });
                    return {
                        application: null == d ? void 0 : null === (l = d.descriptor) || void 0 === l ? void 0 : l.application,
                        commands: null == d ? void 0 : d.commands.filter(e => n.includes(e.id))
                    }
                }, [null == a ? void 0 : a.result, null == o ? void 0 : o.result, t, n])
            }

            function v(e, t, n) {
                var i, l, o, s, r, u;
                if (!y({
                        location: "getCommandTypeCount"
                    })) {
                    if (e.isPrivate()) return null;
                    {
                        let i = null != n ? n : null === (o = a.default.getGuild(e.guild_id)) || void 0 === o ? void 0 : o.applicationCommandCounts;
                        return null !== (s = null == i ? void 0 : i[t]) && void 0 !== s ? s : 0
                    }
                }
                let c = d.default.getContextState(e),
                    p = d.default.getUserState();
                return (null !== (r = null === (i = c.result) || void 0 === i ? void 0 : i.commandsByType[t]) && void 0 !== r ? r : 0) + (null !== (u = null === (l = p.result) || void 0 === l ? void 0 : l.commandsByType[t]) && void 0 !== u ? u : 0)
            }

            function h() {
                !D({
                    location: "useSearchOpenState"
                }) && (0, f.useSearchStoreOpenState)()
            }

            function y(e, t) {
                return u.default.getCurrentConfig(e, t).enabled
            }

            function D(e, t) {
                let [n] = i.useState(y(e, t));
                return n
            }

            function R(e, t) {
                return {
                    type: t,
                    inputType: m.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }
            }
        },
        972620: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                BuiltInCommandFilter: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.ALLOW = 0] = "ALLOW", l[l.ONLY_TEXT = 1] = "ONLY_TEXT", l[l.DENY = 2] = "DENY"
        },
        216193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("917351"),
                l = n.n(i),
                a = n("693566"),
                o = n.n(a),
                s = n("446674"),
                r = n("913144"),
                u = n("798609"),
                d = n("140596"),
                c = n("42203"),
                p = n("957255"),
                f = n("507217"),
                m = n("166004"),
                _ = n("389153");
            let T = new Map,
                I = new Set,
                C = new Set,
                A = new o({
                    max: 1e4
                }),
                E = new o({
                    max: 1e4
                }),
                N = e => {
                    let {
                        guildId: t,
                        channelId: n,
                        params: i,
                        includeApplications: l
                    } = e;
                    return (0, m.search)(n, i).then(e => {
                        var i;
                        if (null == e) return;
                        if (null != t && l && I.add(t), 0 === e.applicationCommands.length && (null == e.applications || 0 === e.applications.length)) return;
                        let a = (0, _.buildApplicationCommands)(e.applicationCommands);
                        f.updateRegistry(a, null !== (i = e.applications) && void 0 !== i ? i : [], n)
                    })
                },
                S = l.debounce(e => {
                    let {
                        applicationId: t,
                        guildId: n,
                        channelId: i,
                        includeApplications: l
                    } = e, a = c.default.getChannel(i);
                    if (null != a)(0, _.canUseApplicationCommands)(p.default, d.default, !1, a) && N({
                        guildId: n,
                        channelId: i,
                        includeApplications: l,
                        params: {
                            type: u.ApplicationCommandType.CHAT,
                            includeApplications: l,
                            applicationId: t
                        }
                    })
                }, 250),
                g = l.debounce((e, t, n, i) => {
                    let l = [...n].filter(_.isSnowflake);
                    if (0 === l.length) return;
                    let a = c.default.getChannel(t);
                    if (null == a || !(0, _.canUseApplicationCommands)(p.default, d.default, !1, a)) return;
                    let o = l.slice(0, 100),
                        s = l.slice(100);
                    N({
                        guildId: e,
                        channelId: t,
                        includeApplications: i,
                        params: {
                            type: u.ApplicationCommandType.CHAT,
                            includeApplications: i,
                            commandIds: o,
                            cursor: void 0,
                            limit: 0
                        }
                    }).then(() => {
                        s.length > 0 && g(e, t, new Set(s), i)
                    })
                }, 250);
            class M extends s.default.Store {
                hasCommand(e) {
                    return null != e && A.has(e)
                }
                getApplication(e) {
                    if (null != e) return T.get(e)
                }
                getCommand(e) {
                    if (null != e) return A.get(e)
                }
                getCommands(e, t) {
                    return e.reduce((e, n) => {
                        let i = E.get(n);
                        return (null == i ? void 0 : i.channelId) === t && e.push(i.command), e
                    }, [])
                }
            }
            M.displayName = "ApplicationCommandRegistryStore";
            let O = new M(r.default, {
                APPLICATION_COMMAND_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandId: n,
                        guildId: i
                    } = e;
                    if (A.has(n)) return;
                    C.add(n);
                    let l = null != i && !I.has(i);
                    g(i, t, C, l)
                },
                APPLICATION_COMMANDS_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandIds: n,
                        guildId: i
                    } = e;
                    n.forEach(e => {
                        var n;
                        (null === (n = E.get(e)) || void 0 === n ? void 0 : n.channelId) !== t && C.add(e)
                    });
                    let l = null != i && !I.has(i);
                    g(i, t, C, l)
                },
                APPLICATION_COMMANDS_FETCH_FOR_APPLICATION: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        applicationId: i
                    } = e;
                    S({
                        guildId: n,
                        channelId: t,
                        applicationId: i,
                        includeApplications: !0
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    I.delete(t)
                },
                APPLICATION_COMMAND_REGISTRY_UPDATE: function(e) {
                    let {
                        applications: t,
                        commands: n,
                        channelId: i
                    } = e;
                    for (let e of t) T.set(e.id, e);
                    for (let e of n) C.delete(e.id), A.set(e.id, e), E.set(e.id, {
                        channelId: i,
                        command: e
                    })
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: function(e) {
                    let {
                        command: t
                    } = e;
                    null != t && A.set(t.id, t)
                },
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: function(e) {
                    var t, n;
                    let {
                        commandType: i,
                        state: l
                    } = e;
                    i === u.ApplicationCommandType.CHAT && (null === (t = l.applicationCommands) || void 0 === t || t.forEach(e => {
                        A.set(e.id, e)
                    }), null === (n = l.applicationSections) || void 0 === n || n.forEach(e => {
                        null != e.application && T.set(e.application.id, e.application)
                    }))
                },
                LOGOUT: function() {
                    T.clear(), I.clear(), C.clear(), A.reset(), E.reset()
                }
            });
            var v = O
        },
        166004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                search: function() {
                    return L
                },
                default: function() {
                    return K
                },
                useSearchStoreOpenState: function() {
                    return z
                },
                useDiscoveryState: function() {
                    return Q
                },
                useQueryState: function() {
                    return J
                }
            });
            var i = n("884691"),
                l = n("483366"),
                a = n.n(l),
                o = n("693566"),
                s = n.n(o),
                r = n("446674"),
                u = n("872717"),
                d = n("913144"),
                c = n("798609"),
                p = n("763898"),
                f = n("38654"),
                m = n("252063"),
                _ = n("140596"),
                T = n("685841"),
                I = n("872173"),
                C = n("374363"),
                A = n("42203"),
                E = n("923959"),
                N = n("305961"),
                S = n("957255"),
                g = n("18494"),
                M = n("599110"),
                O = n("589777"),
                v = n("369010"),
                h = n("342564"),
                y = n("524768"),
                D = n("389153"),
                R = n("317041"),
                P = n("49111");

            function L(e, t, n) {
                var i;
                let l;
                if ((null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted)) return Promise.resolve(null);
                let a = {
                    type: t.type,
                    role_ids: null === (i = t.roleIds) || void 0 === i ? void 0 : i.join(",")
                };
                "applicationId" in t && null != t.applicationId ? (a.application_id = t.applicationId, l = "application") : "query" in t ? (a.query = t.query, a.limit = t.limit, a.cursor = t.cursor, l = "query") : "cursor" in t ? (a.limit = t.limit, a.cursor = t.cursor, null != t.commandIds && t.commandIds.length > 0 && (a.command_ids = t.commandIds.join(",")), l = "discovery") : l = "unknown", "includeApplications" in t && (a.include_applications = t.includeApplications), "checkPermissions" in t && (a.check_permissions = t.checkPermissions);
                let o = async i => {
                    var l;
                    return await new Promise(e => {
                        setTimeout(e, i)
                    }), L(e, {
                        ...t,
                        retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
                    }, n)
                };
                (null == t.retries || 0 === t.retries) && (t.start = performance.now());
                let s = e => {
                    var i, o, s;
                    if (null == t.start) return;
                    let r = performance.now() - t.start;
                    M.default.track(P.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: r,
                        aborted: null !== (i = null == n ? void 0 : n.signal.aborted) && void 0 !== i && i,
                        error: e,
                        kind: l,
                        command_type: t.type,
                        include_applications: null !== (o = a.include_applications) && void 0 !== o && o,
                        retries: null !== (s = t.retries) && void 0 !== s ? s : 0
                    })
                };
                return u.default.get({
                    url: P.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
                    query: a,
                    signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
                }).then(e => {
                    var t, n, i;
                    return 202 === e.status ? o(5e3) : (s(!1), {
                        applicationCommands: e.body.application_commands,
                        applications: e.body.applications,
                        nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
                        prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
                        repaired: null === (i = e.body.cursor) || void 0 === i ? void 0 : i.repaired
                    })
                }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (s(!0), null) : 429 === e.status ? o(1e3 * e.body.retry_after) : (s(!0), null))
            }
            let U = (e, t, n) => {
                let {
                    channel: i,
                    guild: l
                } = e;
                return null != i ? (0, O.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
                    channel: i,
                    guild: l
                })) : []
            };

            function B(e, t) {
                if (0 === t.length) return e;
                let n = [...e],
                    i = (0, D.buildApplicationCommands)(t).filter(e => {
                        let t = n.findIndex(t => t.id === e.id);
                        return !(t >= 0) || (n[t] = e, !1)
                    });
                return [...n, ...i]
            }

            function H(e) {
                let t = e.map(D.getApplicationCommandSection);
                return t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])
            }
            let b = (e, t) => ({
                    type: t,
                    inputType: y.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }),
                F = [O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN]];
            class w extends r.default.Store {
                initialize() {
                    this.waitFor(C.default), this.syncWith([S.default], () => {
                        this.shouldResetAll = !0
                    }), this.syncWith([C.default], k)
                }
                getChannelState(e, t) {
                    var n;
                    return null === (n = V.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
                }
                getOrInsertChannelState(e, t) {
                    let n = V.channelStates,
                        i = n.has(e);
                    if (M.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: !i,
                            size: n.length
                        }), !i) {
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
                            i = {
                                [c.ApplicationCommandType.CHAT]: t(),
                                [c.ApplicationCommandType.MESSAGE]: t(),
                                [c.ApplicationCommandType.USER]: t()
                            };
                        n.set(e, i)
                    }
                    return n.get(e)[t]
                }
                getApplicationSections(e, t) {
                    var n, i;
                    return null !== (i = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== i ? i : F
                }
                getQueryCommands(e, t, n) {
                    var i, l, a;
                    let o = this.getChannelState(e, t);
                    return null !== (a = null == o ? void 0 : null === (i = o.queries.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null == o ? void 0 : null === (l = o.pendingQueries.get(n)) || void 0 === l ? void 0 : l.commands
                }
                hasQueryResults(e, t, n) {
                    var i, l;
                    return null !== (l = null === (i = this.getChannelState(e, t)) || void 0 === i ? void 0 : i.queries.has(n)) && void 0 !== l && l
                }
                constructor(...e) {
                    super(...e), this.channelStates = new s({
                        max: 5
                    }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
                }
            }

            function G(e) {
                var t;
                let {
                    guildId: n
                } = e, i = g.default.getChannelId();
                return null != i && (null === (t = A.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) !== n ? x(n) : V.componentIsOpen ? (V.shouldResetGuild = n, !1) : x(n)
            }

            function x(e) {
                let t = E.default.getChannels(e),
                    n = t[0, E.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[E.GUILD_VOCAL_CHANNELS_KEY]),
                    i = V.channelStates.length;
                for (let e of n) V.channelStates.del(e.channel.id);
                return V.channelStates.length !== i
            }

            function Y() {
                let e = V.channelStates.length;
                return V.channelStates.keys().forEach(e => {
                    var t;
                    (null === (t = A.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && V.channelStates.del(e)
                }), V.channelStates.length !== e
            }

            function k() {
                var e, t, n;
                let i = null !== (n = null === (t = C.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
                    l = i !== V.viewNsfwCommands;
                if (l) {
                    if (V.viewNsfwCommands = i, !V.componentIsOpen) return Y();
                    V.shouldResetDMs = !0
                }
                return !1
            }

            function q(e) {
                return !!V.channelStates.has(e) && (V.channelStates.del(e), !0)
            }

            function W() {
                V.shouldResetAll = !1, V.shouldResetGuild = null, V.shouldResetDMs = !1, V.componentIsOpen = !1, V.channelStates.reset()
            }
            w.displayName = "ApplicationCommandSearchStore";
            let V = new w(d.default, {
                LOGOUT: W,
                CONNECTION_OPEN: W,
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
                    let {
                        channelId: t,
                        commandType: n,
                        state: i
                    } = e, l = V.channelStates.get(t);
                    if (null == l) return;
                    let a = l[n],
                        o = {
                            ...a,
                            ...i
                        };
                    l[n] = o, null == a.applicationCommands && null != o.applicationCommands && o.pendingQueries.forEach((e, t) => {
                        let {
                            context: n,
                            commandType: i,
                            limit: l
                        } = e;
                        j({
                            context: n,
                            commandType: i,
                            query: t,
                            limit: l,
                            canOnlyUseTextCommands: !1
                        })
                    })
                },
                APPLICATION_COMMAND_SEARCH_STORE_QUERY(e) {
                    let {
                        context: t,
                        commandType: n,
                        query: i,
                        limit: l,
                        applicationId: a
                    } = e, o = null != T.default.getPendingReply(t.channel.id), s = j({
                        context: t,
                        commandType: n,
                        query: i,
                        limit: l,
                        canOnlyUseTextCommands: o,
                        applicationId: a
                    });
                    !s && !o && Z({
                        context: t,
                        commandType: n,
                        query: i,
                        limit: l,
                        applicationId: a
                    })
                },
                CHANNEL_UPDATES(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t)
                        if (null != e.guild_id && G({
                                guildId: e.guild_id
                            })) return !0;
                    return !1
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: G,
                IMPERSONATE_UPDATE: G,
                IMPERSONATE_STOP: G,
                APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE(e) {
                    let {
                        isOpen: t
                    } = e;
                    if (V.componentIsOpen = t, V.shouldResetAll) {
                        W();
                        return
                    }
                    let n = !1;
                    return null != V.shouldResetGuild && (n = x(V.shouldResetGuild), V.shouldResetGuild = null), V.shouldResetDMs && (n = Y() || n, V.shouldResetDMs = !1), n
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e;
                    return q(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e;
                    return q(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t
                    } = e;
                    return q(t)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t
                    } = e;
                    return q(t)
                }
            });
            var K = V;
            let X = e => {
                if (null == e) return;
                let t = f.default.getViewingRoles(e);
                if (null == t) return;
                let n = Object.keys(t);
                return 0 === n.length && n.push(e), n
            };

            function z() {
                i.useEffect(() => (d.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                    isOpen: !0
                }), () => {
                    d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                        isOpen: !1
                    })
                }), [])
            }

            function Q(e, t, n, l) {
                let {
                    canOnlyUseTextCommands: a,
                    canUseFrecency: o
                } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
                    discoveryInitialized: s,
                    topCursor: u,
                    scrollDownCursor: c,
                    applicationSections: f,
                    applicationCommands: T,
                    filteredSectionId: I,
                    sawFrecencySection: C
                } = (0, r.useStateFromStores)([V], () => V.getOrInsertChannelState(e.id, t), [e.id, t]), A = i.useCallback(n => {
                    d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                        channelId: e.id,
                        commandType: t,
                        state: n
                    })
                }, [e.id, t]);
                (0, m.usePrivateChannelIntegrationState)({
                    channelId: e.id
                });
                let E = i.useRef(!1),
                    g = (0, p.default)(),
                    M = i.useCallback(function(n, i) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (E.current) return;
                        E.current = !0;
                        let a = X(e.guild_id);
                        L(e.id, {
                            type: t,
                            roleIds: a,
                            ...n
                        }, {
                            abortable: l,
                            signal: g
                        }).then(e => {
                            E.current = !1, i(e)
                        })
                    }, [e.id, e.guild_id, t, g]),
                    y = i.useMemo(() => ({
                        channel: e,
                        guild: null != e.guild_id ? N.default.getGuild(e.guild_id) : null
                    }), [e]),
                    P = (0, v.useTopCommands)(y),
                    F = (0, v.useTopRealCommands)(y),
                    w = (0, r.useStateFromStores)([S.default, _.default], () => (0, D.canUseApplicationCommands)(S.default, _.default, null != a && a, e), [a, e]);
                i.useEffect(() => {
                    if (s) return;
                    if (A({
                            discoveryInitialized: !0
                        }), !w || null != T && T.length > 0) return;
                    let t = s ? void 0 : F,
                        n = e.isPrivate() ? {} : {
                            limit: l,
                            commandIds: t,
                            cursor: null != u ? u : void 0
                        };
                    M({
                        ...n,
                        includeApplications: null == f
                    }, e => {
                        if (null == e) return;
                        let t = B([], e.applicationCommands),
                            n = {
                                applicationCommands: t,
                                topCursor: e.prevCursor,
                                scrollDownCursor: e.nextCursor
                            };
                        if (null != e.applications) {
                            var i;
                            n.applicationSections = H(null !== (i = e.applications) && void 0 !== i ? i : [])
                        }
                        A(n)
                    }, !1)
                }, [T, e, l, w, f, s, u, M, F, A]);
                let G = i.useCallback(() => {
                        null != c && M({
                            limit: l,
                            cursor: c
                        }, e => {
                            if (null == e) return;
                            let t = !1 === e.repaired ? B([], e.applicationCommands) : B(null != T ? T : [], e.applicationCommands);
                            A({
                                applicationCommands: t,
                                scrollDownCursor: e.nextCursor
                            })
                        })
                    }, [l, M, c, T, A]),
                    x = i.useCallback(t => {
                        if (!E.current && t !== I) {
                            if (null == t) {
                                e.isPrivate() ? A({
                                    filteredSectionId: null,
                                    discoveryInitialized: !0
                                }) : A({
                                    filteredSectionId: null,
                                    applicationCommands: null,
                                    discoveryInitialized: !1
                                });
                                return
                            }!(t in O.BUILT_IN_SECTIONS || e.isPrivate()) && M({
                                applicationId: t
                            }, e => {
                                null != e && A({
                                    applicationCommands: B([], e.applicationCommands)
                                })
                            }), A({
                                filteredSectionId: t,
                                scrollDownCursor: null
                            })
                        }
                    }, [e, M, A, I]);
                z(), i.useEffect(() => () => {
                    var n;
                    (null === (n = V.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && x(null)
                }, []);
                let Y = i.useMemo(() => U(y, t, a), [y, t, a]),
                    k = i.useMemo(() => {
                        if (!o) return [];
                        let e = (w && null != T ? T : []).concat(Y);
                        return e.filter(e => P.includes(e.id)).sort((e, t) => {
                            let n = h.default.getScoreWithoutLoadingLatest(y, e),
                                i = h.default.getScoreWithoutLoadingLatest(y, t);
                            return i - n
                        }).slice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
                    }, [o, P, w, T, Y, y]);
                i.useEffect(() => {
                    !C && k.length > 0 && A({
                        sawFrecencySection: !0
                    })
                }, [A, k, C]);
                let q = i.useMemo(() => {
                        var e;
                        let t = [];
                        return (k.length > 0 || C) && (t = t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY])), w && null != f && (t = t.concat(f)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== R.BuiltInSectionId.BUILT_IN && (t = t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])), t
                    }, [w, f, k, C]),
                    W = w && (!s || E.current || null != c),
                    K = i.useMemo(() => {
                        if (!W) return [];
                        let e = [];
                        for (let i = 0; i < n; i++) e.push(b(i, t));
                        return e
                    }, [W, n, t]),
                    {
                        activeSections: Q,
                        commandsByActiveSection: j
                    } = i.useMemo(() => {
                        let e = [],
                            t = [];
                        return q.forEach(n => {
                            let i;
                            (null == I || n.id === I) && ((i = n.id === R.BuiltInSectionId.BUILT_IN ? W ? [] : [...Y] : n.id === R.BuiltInSectionId.FRECENCY ? [...k] : (null != T ? T : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === I) && (e.push(n), t.push({
                                section: n,
                                data: i
                            }))
                        }), t.length > 0 && K.length > 0 && t[t.length - 1].data.push(...K), {
                            activeSections: e,
                            commandsByActiveSection: t
                        }
                    }, [q, k, T, Y, K, W, I]),
                    Z = i.useMemo(() => {
                        let e = [];
                        return e = e.concat(k), w && null != T && (e = e.concat(T)), e = e.concat(Y)
                    }, [w, k, T, Y]);
                return {
                    filterSection: x,
                    scrollDown: G,
                    loading: E,
                    filteredSectionId: I,
                    hasMoreAfter: W,
                    commands: Z,
                    sectionDescriptors: q,
                    activeSections: Q,
                    commandsByActiveSection: j,
                    placeholders: K
                }
            }

            function j(e) {
                let t, {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        canOnlyUseTextCommands: o,
                        applicationCommands: s,
                        scrollDownCursor: r,
                        applications: u,
                        applicationId: d = null
                    } = e,
                    c = V.getOrInsertChannelState(n.channel.id, i);
                if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
                else if (c.queries.has(l)) return !0;
                if (null != u && (c.applicationSections = H(u)), o) t = [];
                else {
                    var p;
                    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : B([], null != s ? s : [])
                }
                let f = U(n, i, o),
                    m = (0, D.canUseApplicationCommands)(S.default, _.default, o, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == s),
                    T = [],
                    C = !1;
                if (m)
                    for (let e = l.length - 1; e > 0; e -= 1) {
                        let n = l.slice(0, e),
                            i = c.queries.get(n);
                        if (null != i) {
                            C = i.done, i.commands.forEach(e => {
                                null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && T.push(e)
                            });
                            break
                        }
                    }
                C && (m = !1);
                let A = [],
                    E = l.split(" ");
                if ([...t, ...T, ...f].forEach(e => {
                        var t;
                        let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                            i = (0, D.scoreCommand)(l, E, e, n);
                        i > 0 && A.push({
                            ...e,
                            score: i
                        })
                    }), I.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                        if (e.score !== t.score) return t.score - e.score;
                        let i = h.default.getScoreWithoutLoadingLatest(n, e),
                            l = h.default.getScoreWithoutLoadingLatest(n, t);
                        return i !== l ? l - i : e.displayName.localeCompare(t.displayName)
                    }), m || null != r)
                    for (let e = 0; e < 4; e += 1) A.push({
                        ...b(e, i),
                        score: 0
                    });
                return m ? (c.pendingQueries.set(l, {
                    context: n,
                    commandType: i,
                    limit: a,
                    commands: A
                }), c.queries.delete(l)) : (c.pendingQueries.delete(l), c.queries.set(l, {
                    commands: A,
                    done: C || null == r,
                    scrollDownCursor: r
                })), C
            }
            let Z = a(e => {
                    var t;
                    let {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        applicationId: o
                    } = e;
                    if (!(0, D.canUseApplicationCommands)(S.default, _.default, !1, n.channel)) return;
                    let s = V.getOrInsertChannelState(n.channel.id, i);
                    if (n.channel.isPrivate()) {
                        !s.discoveryInitialized && null == s.applicationCommands && L(n.channel.id, {
                            type: i,
                            includeApplications: null == s.applicationSections
                        }).then(e => {
                            var t;
                            if (null == e) return;
                            let l = {
                                applicationCommands: B([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
                            };
                            null != e.applications && (l.applicationSections = H(e.applications)), d.default.dispatch({
                                type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                                channelId: n.channel.id,
                                commandType: i,
                                state: l
                            })
                        });
                        return
                    }(null === (t = s.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && L(n.channel.id, {
                        type: i,
                        roleIds: X(n.channel.guild_id),
                        query: l,
                        limit: a,
                        applicationId: o,
                        includeApplications: !s.discoveryInitialized && null == s.applicationSections
                    }).then(e => {
                        if (null != e) V.channelStates.has(n.channel.id) && (j({
                            context: n,
                            commandType: i,
                            query: l,
                            limit: a,
                            canOnlyUseTextCommands: !1,
                            applicationCommands: e.applicationCommands,
                            scrollDownCursor: e.nextCursor,
                            applications: e.applications,
                            applicationId: o
                        }), V.emitChange())
                    })
                }, 250, {
                    leading: !0,
                    trailing: !0,
                    maxWait: 750
                }),
                $ = async (e, t) => {
                    var n;
                    let {
                        context: i,
                        commandType: l,
                        query: a,
                        limit: o
                    } = e;
                    if (!(0, D.canUseApplicationCommands)(S.default, _.default, !1, i.channel) || i.channel.isPrivate()) return;
                    let s = V.getOrInsertChannelState(i.channel.id, l),
                        r = null === (n = s.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
                    null != r && await L(i.channel.id, {
                        type: l,
                        roleIds: X(i.channel.guild_id),
                        query: a,
                        limit: o,
                        cursor: r,
                        includeApplications: !s.discoveryInitialized && null == s.applicationSections
                    }, {
                        abortable: !0,
                        signal: t
                    }).then(e => {
                        var t, n;
                        if (null == e || !V.channelStates.has(i.channel.id)) return;
                        let o = null !== (n = null === (t = s.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== y.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
                            r = B([], e.applicationCommands),
                            u = [],
                            d = a.split(" ");
                        r.forEach(e => {
                            var t;
                            if (null != o.find(t => t.id === e.id)) return;
                            let n = null === (t = s.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                                i = (0, D.scoreCommand)(a, d, e, n);
                            i > 0 && u.push({
                                ...e,
                                score: i
                            })
                        }), I.FrecencyUserSettingsActionCreators.loadIfNecessary(), u.sort((e, t) => {
                            if (e.score !== t.score) return t.score - e.score;
                            let n = h.default.getScoreWithoutLoadingLatest(i, e),
                                l = h.default.getScoreWithoutLoadingLatest(i, t);
                            return n !== l ? l - n : e.displayName.localeCompare(t.displayName)
                        });
                        let c = e.nextCursor;
                        if (null != c)
                            for (let e = 0; e < 4; e += 1) u.push({
                                ...b(e, l),
                                score: 0
                            });
                        s.queries.set(a, {
                            commands: e.repaired ? u : [...o, ...u],
                            done: !0,
                            scrollDownCursor: c
                        }), V.emitChange()
                    })
                };

            function J(e, t, n, l) {
                z();
                let a = (0, p.default)(),
                    {
                        commands: o,
                        applicationSections: s
                    } = (0, r.useStateFromStoresObject)([V], () => {
                        var i, l, a;
                        let {
                            queries: o,
                            pendingQueries: s,
                            applicationSections: r
                        } = V.getOrInsertChannelState(e.id, t);
                        return {
                            applicationSections: r,
                            commands: null !== (a = null === (i = o.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = s.get(n)) || void 0 === l ? void 0 : l.commands
                        }
                    }, [e.id, t, n]);
                i.useEffect(() => {
                    d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                        context: {
                            channel: e,
                            guild: null != e.guild_id ? N.default.getGuild(e.guild_id) : null
                        },
                        query: n,
                        limit: l,
                        commandType: t
                    })
                }, [e, t, n, l]);
                let u = i.useRef(!1),
                    c = i.useCallback(() => {
                        !u.current && (u.current = !0, $({
                            commandType: t,
                            context: {
                                channel: e
                            },
                            query: n,
                            limit: l
                        }, a).finally(() => {
                            u.current = !1
                        }))
                    }, [t, e, n, a, l]);
                return {
                    commands: o,
                    sections: null != s ? s : F,
                    scrollDown: c
                }
            }
        },
        150692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("917351"),
                a = n.n(l),
                o = n("77078"),
                s = n("450911"),
                r = n("819689"),
                u = n("798609"),
                d = n("679653"),
                c = n("27618"),
                p = n("697218"),
                f = n("524768"),
                m = n("317041"),
                _ = n("49111"),
                T = n("782340");

            function I(e) {
                switch (e) {
                    case _.ChannelTextAreaIntegrations.GIF.title:
                    case _.ChannelTextAreaIntegrations.TENOR.title:
                        return T.default.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            let C = [...a(_.ChannelTextAreaIntegrations).values().map(e => ({
                id: e.commandId,
                name: e.command,
                displayName: e.command,
                type: u.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
                applicationId: m.BuiltInSectionId.BUILT_IN,
                get description() {
                    return I(e.title)
                },
                get displayDescription() {
                    return I(e.title)
                },
                options: e.type === _.ChannelTextAreaIntegrationTypes.GIF ? [{
                    name: "query",
                    displayName: "query",
                    type: u.ApplicationCommandOptionType.STRING,
                    get description() {
                        return T.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    get displayDescription() {
                        return T.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    required: !0
                }] : [],
                integrationType: e.type,
                integrationTitle: e.title
            })).value(), {
                id: "-15",
                name: "leave",
                displayName: "leave",
                type: u.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN,
                applicationId: m.BuiltInSectionId.BUILT_IN,
                get description() {
                    return T.default.Messages.LEAVE_GROUP_DM
                },
                get displayDescription() {
                    return T.default.Messages.LEAVE_GROUP_DM
                },
                options: [{
                    name: "silent",
                    displayName: "silent",
                    type: u.ApplicationCommandOptionType.BOOLEAN,
                    get description() {
                        return T.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
                    },
                    get displayDescription() {
                        return T.default.Messages.LEAVE_GROUP_DM_SILENTLY
                    },
                    required: !1
                }],
                predicate: e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGroupDM()
                },
                execute: (e, t) => {
                    var n, l;
                    let {
                        channel: a
                    } = t, u = (0, d.computeChannelName)(a, p.default, c.default), f = T.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                        name: u
                    }), m = T.default.Messages.LEAVE_GROUP_DM_BODY.format({
                        name: u
                    }), _ = null !== (l = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== l && l;
                    async function I() {
                        try {
                            await s.default.closePrivateChannel(a.id, void 0, _)
                        } catch (e) {
                            r.default.sendBotMessage(a.id, T.default.Messages.LEAVE_GROUP_DM_ERROR)
                        }
                    }
                    a.isManaged() && (f = T.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name: u
                    }), m = T.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name: u
                    })), (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
                        header: f,
                        confirmText: T.default.Messages.LEAVE_GROUP_DM,
                        cancelText: T.default.Messages.CANCEL,
                        onConfirm: I,
                        ...e,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }))
                }
            }];
            var A = C
        },
        670902: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                computeThreadIdsSnapshot: function() {
                    return H
                },
                default: function() {
                    return w
                }
            });
            var l = n("917351"),
                a = n.n(l),
                o = n("335710"),
                s = n("249654"),
                r = n("446674"),
                u = n("913144"),
                d = n("689275"),
                c = n("610730"),
                p = n("271938"),
                f = n("42203"),
                m = n("660478"),
                _ = n("18494"),
                T = n("449008"),
                I = n("786742");
            let C = [],
                A = null,
                E = null,
                N = new Set,
                S = o.ThreadSortOrder.LATEST_ACTIVITY,
                g = 0,
                M = [],
                O = !1,
                v = [],
                h = a.chain(C),
                y = a.chain(C),
                D = new Set,
                R = new Set;

            function P(e) {
                var t;
                return null !== (t = m.default.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function L(e) {
                return function(t, n) {
                    if ((0, I.isForumPostPinned)(t)) return -1;
                    if ((0, I.isForumPostPinned)(n)) return 1;
                    if (e === o.ThreadSortOrder.LATEST_ACTIVITY) return s.default.compare(P(n), P(t));
                    else return s.default.compare(n, t)
                }
            }

            function U() {
                M = [], i = null, E = null, N = new Set, S = o.ThreadSortOrder.LATEST_ACTIVITY, g = 0, v = [], h = a.chain(C), y = a.chain(C), R.clear(), D.clear()
            }

            function B() {
                var e;
                let t = _.default.getChannelId();
                if (null == t || !(null === (e = f.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
                b({
                    refreshThreadIds: !0
                })
            }

            function H(e) {
                let t = f.default.getChannel(e);
                return null == t ? [] : Object.values(d.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }).sort(L(S))
            }

            function b(e) {
                var t;
                let n = f.default.getChannel(E);
                if (null == n) return;
                (null == e ? void 0 : e.refreshThreadIds) && (v = Object.values(d.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }), g = 0, O = !0), 0 !== D.size && (v = v.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (v = Array.from(new Set([...v, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = a.chain(v).sort(L(o.ThreadSortOrder.LATEST_ACTIVITY)), h = a.chain(v).sort(L(o.ThreadSortOrder.CREATION_DATE)));
                let l = S === o.ThreadSortOrder.LATEST_ACTIVITY ? y : h,
                    s = l.value();
                M = 0 === N.size ? s : s.filter((t = N, function(e) {
                    var n;
                    let i = null === (n = f.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                    return null != i && 0 !== i.length && i.some(e => t.has(e))
                }));
                let r = M.find(e => (function(e) {
                    let t = c.default.getCount(e);
                    return null === t || 0 === t
                })(e));
                i = null == r ? null : r
            }
            class F extends r.default.Store {
                initialize() {
                    this.waitFor(f.default, d.default, _.default, m.default)
                }
                getNewThreadCount() {
                    return g
                }
                getCanAckThreads() {
                    return O
                }
                getThreadIds(e, t, n) {
                    let i = e !== E,
                        l = !(0, T.areSetsEqual)(n, N),
                        a = t !== S;
                    return E = e, N = n, S = t, i ? b({
                        refreshThreadIds: !0
                    }) : a ? b({
                        sortThreadIds: !0
                    }) : l && b(), M
                }
                getCurrentThreadIds() {
                    return M
                }
                getAndDeleteMostRecentUserCreatedThreadId() {
                    let e = A;
                    return A = null, e
                }
                getFirstNoReplyThreadId() {
                    return i
                }
            }
            F.displayName = "ForumActivePostStore";
            var w = new F(u.default, {
                CONNECTION_OPEN: B,
                OVERLAY_INITIALIZE: B,
                GUILD_CREATE: B,
                CHANNEL_SELECT: B,
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E) return !1;
                    U()
                },
                THREAD_LIST_SYNC: function(e) {
                    var t;
                    let {
                        guildId: n
                    } = e;
                    if (null == E || n !== (null === (t = f.default.getChannel(E)) || void 0 === t ? void 0 : t.guild_id)) return !1;
                    b({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t,
                        isNewlyCreated: n
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E || !n) return !1;
                    t.ownerId !== p.default.getId() ? g++ : A = t.id
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E) return !1;
                    let n = (0, I.isForumPostPinned)(t.id),
                        i = R.has(t.id);
                    if (n && !i) R.add(t.id), b({
                        sortThreadIds: !0
                    });
                    else {
                        if (n || !i) return !1;
                        R.delete(t.id), b({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E) return !1;
                    D.add(t.id), b({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== E) return !1;
                    b({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== E) return !1;
                    O = !1
                }
            })
        },
        700179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canToggleCommunicationDisableOnUser: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                l = n("305961"),
                a = n("957255"),
                o = n("697218"),
                s = n("991170"),
                r = n("49111");

            function u(e, t) {
                let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, l.default, a.default], d = i.getGuild(e), c = n.getUser(t);
                if (null == d || null == c || c.isNonUserBot()) return !1;
                let p = d.isOwner(c) || s.default.can({
                    permission: r.Permissions.ADMINISTRATOR,
                    user: c,
                    context: d
                });
                return !p && u.canManageUser(r.Permissions.MODERATE_MEMBERS, c, d)
            }

            function d(e, t) {
                return (0, i.useStateFromStores)([o.default, l.default, a.default], () => u(e, t, [o.default, l.default, a.default]), [e, t])
            }
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i.default
                }
            });
            var i = n("870346")
        },
        685841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                l = n("913144"),
                a = n("377253");
            let o = {},
                s = {};

            function r(e) {
                if (null == e) return !1;
                let t = s[e];
                if (null == t) return !1;
                let n = a.default.getMessage(e, t.messageId);
                if (null == n) return !1;
                o[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                }, delete s[e]
            }

            function u() {
                o = {}, s = {}
            }
            class d extends i.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                getPendingReply(e) {
                    return o[e]
                }
            }
            d.displayName = "PendingReplyStore";
            let c = new d(l.default, {
                CREATE_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        message: n,
                        shouldMention: i = !0,
                        showMentionToggle: l = !0
                    } = e;
                    o[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: i,
                        showMentionToggle: l
                    }
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    let {
                        channel: t,
                        messageId: n,
                        shouldMention: i = !0,
                        showMentionToggle: l = !0
                    } = e;
                    s[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: i,
                        showMentionToggle: l
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    let {
                        channelId: t,
                        shouldMention: n
                    } = e;
                    t in o && (o[t] = {
                        ...o[t],
                        shouldMention: n
                    }), t in s && (s[t] = {
                        ...s[t],
                        shouldMention: n
                    })
                },
                DELETE_PENDING_REPLY: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete o[t], delete s[t]
                },
                CONNECTION_OPEN: u,
                LOGOUT: u,
                MESSAGE_DELETE: function(e) {
                    var t, n, i;
                    let {
                        id: l,
                        channelId: a
                    } = e;
                    if ((null === (n = o[a]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === l) delete o[a];
                    else {
                        if ((null === (i = s[a]) || void 0 === i ? void 0 : i.messageId) !== l) return !1;
                        delete s[a]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r(t)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r(t)
                }
            });
            var p = c
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("845579"),
                l = n("42887"),
                a = n("829536");

            function o(e) {
                let t = function() {
                        var e;
                        let t = i.SoundboardSettings.getSetting();
                        return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(l.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        252862: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAutoArchiveOptions: function() {
                    return s
                },
                getAutoArchiveDuration: function() {
                    return r
                }
            });
            var i = n("661201"),
                l = n.n(i);
            n("866227");
            var a = n("648564"),
                o = n("782340");

            function s() {
                return [{
                    label: o.default.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
                    value: 60
                }, {
                    label: o.default.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
                    value: 1440
                }, {
                    label: o.default.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
                    value: 4320
                }, {
                    label: o.default.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
                    value: 10080
                }]
            }

            function r(e, t) {
                var n;
                return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : a.DEFAULT_AUTO_ARCHIVE_DURATION
            }
            l(() => s().map(e => e.value))
        },
        730498: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PrivateThreadMode: function() {
                    return l
                },
                usePrivateThreadMode: function() {
                    return h
                },
                getIsPrivate: function() {
                    return y
                },
                getDefaultThreadName: function() {
                    return D
                },
                useCreateThreadCommon: function() {
                    return R
                },
                createThread: function() {
                    return P
                },
                useCreateForumPostCommon: function() {
                    return L
                }
            });
            var i, l, a = n("884691"),
                o = n("872717"),
                s = n("913144"),
                r = n("404118"),
                u = n("295426"),
                d = n("819689"),
                c = n("81594"),
                p = n("670902"),
                f = n("867965"),
                m = n("884351"),
                _ = n("804888"),
                T = n("42203"),
                I = n("474643"),
                C = n("377253"),
                A = n("401848"),
                E = n("568734"),
                N = n("252862"),
                S = n("300322"),
                g = n("24337"),
                M = n("648564"),
                O = n("49111"),
                v = n("782340");

            function h(e) {
                let t = (0, S.useCanStartPublicThread)(e),
                    n = (0, S.useCanStartPrivateThread)(e);
                return n ? t ? l.Enabled : l.PrivateOnly : l.Disabled
            }

            function y(e, t) {
                var n;
                if (t === l.PrivateOnly) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function D(e, t) {
                var n, i, l, a;
                let o = null == t ? null : C.default.getMessage(e.id, t),
                    s = null !== (l = null == o ? void 0 : null === (i = o.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
                if ("" !== s) return s.length > 40 ? s.substring(0, 40) + "..." : s;
                {
                    let t = m.default.unparse(null !== (a = null == o ? void 0 : o.content) && void 0 !== a ? a : "", e.id, !0),
                        n = (0, g.default)(t.split("\n")[0], !0),
                        i = [];
                    for (;;) {
                        let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
                        if (null == e || null == e.index) {
                            i.push(n);
                            break
                        }
                        i.push(n.substring(0, e.index)), i.push(e[0]), n = n.substring(e.index + e[0].length)
                    }
                    let l = i[0];
                    for (let e = 1; e < i.length; e++) {
                        let t = l + i[e];
                        if (t.length > 40) break;
                        l = t
                    }
                    return l.length > 40 && (l = l.substring(0, 40) + "..."), l
                }
            }

            function R(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: s,
                    onThreadCreated: r,
                    useDefaultThreadName: p,
                    uploadHandler: f
                } = e;
                return a.useCallback(async (e, a, _) => {
                    var C;
                    let A = null == n,
                        E = y(i, l),
                        S = null !== (C = i.name) && void 0 !== C ? C : "";
                    if ("" === S && p) {
                        let e = D(t, n);
                        S = "" !== e ? e : v.default.Messages.THREAD
                    }
                    let g = (0, N.getAutoArchiveDuration)(t),
                        M = T.default.getChannel(n),
                        h = await U(t, () => {
                            let e = null != n ? O.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : O.Endpoints.CHANNEL_THREADS(t.id);
                            return o.default.post({
                                url: e,
                                body: {
                                    name: S,
                                    type: E ? O.ChannelTypes.PRIVATE_THREAD : t.type === O.ChannelTypes.GUILD_ANNOUNCEMENT ? O.ChannelTypes.ANNOUNCEMENT_THREAD : O.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: g,
                                    location: s
                                }
                            })
                        });
                    h !== M && (u.default.clearDraft(t.id, I.DraftType.ThreadSettings), u.default.clearDraft(t.id, I.DraftType.FirstThreadMessage), null == r || r(h), (A || e.length > 0 || null != a && a.length > 0 || null != _ && _.length > 0) && function(e, t, n, i, l) {
                        if (null != l && null != i && i.length > 0) l(e, i, t, n);
                        else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                        else d.default.sendMessage(e.id, m.default.parse(e, t))
                    }(h, e, a, _, f)), c.default.clearAll(t.id, I.DraftType.FirstThreadMessage)
                }, [t, n, i, r, l, s, p, f])
            }

            function P(e, t, n, i, l) {
                return U(e, () => o.default.post({
                    url: O.Endpoints.CHANNEL_THREADS(e.id),
                    body: {
                        name: t,
                        type: n,
                        auto_archive_duration: i,
                        location: l
                    }
                }))
            }

            function L(e) {
                let {
                    parentChannel: t,
                    name: n,
                    appliedTags: i,
                    onThreadCreated: l,
                    upload: s
                } = e;
                return a.useCallback(async (e, a, r) => {
                    let d = 0,
                        [p, m] = (0, _.default)(e);
                    p && (e = m, d = (0, E.addFlag)(d, O.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let T = (0, N.getAutoArchiveDuration)(t, null),
                        C = O.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                        A = {
                            name: n,
                            auto_archive_duration: T,
                            applied_tags: i,
                            message: {
                                content: e,
                                sticker_ids: a,
                                flags: 0 !== d ? d : void 0
                            }
                        },
                        S = await U(t, () => null != r && r.length > 0 ? s(C, A, r) : o.default.post({
                            url: C,
                            body: A
                        }));
                    return u.default.clearDraft(t.id, I.DraftType.ThreadSettings), u.default.clearDraft(t.id, I.DraftType.FirstThreadMessage), c.default.clearAll(t.id, I.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: S.id
                    }), null == l || l(S), S
                }, [t, n, l, i, s])
            }(i = l || (l = {}))[i.Disabled = 1] = "Disabled", i[i.Enabled = 2] = "Enabled", i[i.PrivateOnly = 3] = "PrivateOnly";
            async function U(e, t) {
                let n;
                let i = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? r.default.show({
                        title: v.default.Messages.ERROR,
                        body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                    }) : (s.default.dispatch({
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: A.SlowmodeType.CreateThread,
                        channelId: e.id
                    }), s.default.dispatch({
                        type: "THREAD_CREATE_LOCAL",
                        channelId: n.body.id
                    }))
                } catch (t) {
                    var l, a, o, u, d, c;
                    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === O.AbortCodes.TOO_MANY_THREADS) r.default.show({
                        title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                        body: i ? v.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : v.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === O.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) r.default.show({
                        title: v.default.Messages.CANNOT_CREATE_THREAD,
                        body: v.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === O.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && s.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: A.SlowmodeType.CreateThread,
                            cooldownMs: 1e3 * n
                        })
                    } else if (429 === t.status) r.default.show({
                        title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                        body: v.default.Messages.RATE_LIMITED
                    });
                    else if (M.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
                    else {
                        if (M.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                            null == t.body && n(), p.default.addConditionalChangeListener(() => {
                                let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let i = T.default.getChannel(t);
                                    return s.default.wait(() => {
                                        null == i ? n() : e(i)
                                    }), !1
                                }
                            })
                        });
                        r.default.show({
                            title: v.default.Messages.ERROR,
                            body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                }
                return new Promise((e, t) => {
                    null == n.body && t(), T.default.addConditionalChangeListener(() => {
                        let t = T.default.getChannel(n.body.id);
                        if (null != t) return s.default.wait(() => {
                            e(t)
                        }), !1
                    })
                })
            }
        },
        24337: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return t && (e = e.trim()), e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        }
    }
]);
//# sourceMappingURL=6311bfd1faaf1bc454e2.js.map