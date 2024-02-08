(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94816"], {
        223468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("872717"),
                l = n("819689"),
                a = n("49111"),
                s = n("782340"),
                o = {
                    changeNickname: (e, t, n, o) => i.default.patch({
                        url: a.Endpoints.GUILD_MEMBER_NICK(e, n),
                        body: {
                            nick: o
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        o = e.body.nick, l.default.sendBotMessage(t, null != o && "" !== o ? s.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                            nick: o
                        }) : s.default.Messages.COMMAND_NICK_RESET)
                    }, e => {
                        403 === e.status ? l.default.sendBotMessage(t, s.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : l.default.sendBotMessage(t, s.default.Messages.COMMAND_NICK_FAILURE)
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
                            filename: s,
                            spoiler: o,
                            thumbnail: r
                        } = l;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                            channelId: e,
                            id: t,
                            filename: s,
                            description: a,
                            thumbnail: r,
                            spoiler: o,
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
        938767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCommandContext: function() {
                    return a
                },
                useCommandContext: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("305961");

            function a(e) {
                return {
                    channel: e,
                    guild: null != e.guild_id ? l.default.getGuild(e.guild_id) : null
                }
            }

            function s(e) {
                return i.useMemo(() => a(e), [e])
            }
        },
        589777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BUILT_IN_SECTIONS: function() {
                    return P
                },
                getBuiltInCommands: function() {
                    return b
                }
            }), n("222007"), n("70102");
            var i = n("627445"),
                l = n.n(i),
                a = n("866227"),
                s = n.n(a),
                o = n("298386"),
                r = n("223468"),
                u = n("450911"),
                d = n("851387"),
                c = n("819689"),
                p = n("798609"),
                f = n("700179"),
                m = n("884351"),
                I = n("252862"),
                _ = n("730498"),
                C = n("300322"),
                T = n("845579"),
                A = n("42203"),
                E = n("957255"),
                N = n("697218"),
                S = n("718517"),
                g = n("158998"),
                M = n("524768"),
                O = n("317041"),
                h = n("49111"),
                v = n("903639"),
                y = n("782340");
            let D = n("150692").default,
                R = (e, t) => {
                    var n;
                    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
                },
                P = {
                    [O.BuiltInSectionId.BUILT_IN]: {
                        id: O.BuiltInSectionId.BUILT_IN,
                        type: M.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return y.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                        }
                    },
                    [O.BuiltInSectionId.FRECENCY]: {
                        id: O.BuiltInSectionId.FRECENCY,
                        type: M.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return y.default.Messages.FREQUENTLY_USED
                        }
                    }
                },
                L = [...D, {
                    id: "-1",
                    name: "shrug",
                    displayName: "shrug",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
                        }
                    }
                }, {
                    id: "-2",
                    name: "tableflip",
                    displayName: "tableflip",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                        }
                    }
                }, {
                    id: "-3",
                    name: "unflip",
                    displayName: "unflip",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                        }
                    }
                }, {
                    id: "-4",
                    name: "tts",
                    displayName: "tts",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && T.EnableTTSCommand.getSetting() && E.default.can(h.Permissions.SEND_TTS_MESSAGES, t)
                    },
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
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
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: "_".concat(n, "_")
                        }
                    }
                }, {
                    id: "-6",
                    name: "spoiler",
                    displayName: "spoiler",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: (0, h.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                        }
                    }
                }, {
                    id: "-7",
                    name: "nick",
                    displayName: "nick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    options: [{
                        name: "new_nick",
                        displayName: "new_nick",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        }
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && (E.default.can(h.Permissions.CHANGE_NICKNAME, t) || E.default.can(h.Permissions.MANAGE_NICKNAMES, t))
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "new_nick")) && void 0 !== n ? n : "";
                        r.default.changeNickname(i.id, l.id, h.ME, a || "")
                    }
                }, {
                    id: "-10",
                    name: "thread",
                    displayName: "thread",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    options: [{
                        name: "name",
                        displayName: "name",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return (0, C.computeCanStartPublicThread)(t)
                    },
                    execute: async (e, t) => {
                        var n, i;
                        let {
                            channel: l
                        } = t, a = null !== (n = R(e, "name")) && void 0 !== n ? n : "", s = null !== (i = R(e, "message")) && void 0 !== i ? i : "", r = await (0, _.createThread)(l, a, o.ChannelTypes.PUBLIC_THREAD, (0, I.getAutoArchiveDuration)(l, null), "Slash Command");
                        c.default.sendMessage(r.id, m.default.parse(r, s))
                    }
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return y.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return E.default.can(h.Permissions.KICK_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(h.Permissions.KICK_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_KICK_UNABLE);
                            return
                        }
                        let s = async () => {
                            var t;
                            let n = N.default.getUser(a);
                            if (null == n) throw Error();
                            await d.default.kickUser(i.id, a, null !== (t = R(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                user: g.default.getUserTag(n)
                            }))
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_KICK_ERROR)
                        })
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return y.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "delete_messages",
                        displayName: "delete_messages",
                        type: p.ApplicationCommandOptionType.INTEGER,
                        get description() {
                            return y.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return [{
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                value: 0
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                value: S.default.Seconds.HOUR
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * S.default.Seconds.HOUR
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * S.default.Seconds.HOUR
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: S.default.Seconds.DAY
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * S.default.Seconds.DAY
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * S.default.Seconds.DAY
                            }]
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return E.default.can(h.Permissions.BAN_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(h.Permissions.BAN_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_BAN_UNABLE);
                            return
                        }
                        let s = async () => {
                            var t, n;
                            if ("" === a) throw Error();
                            let s = null !== (t = R(e, "delete_messages")) && void 0 !== t ? t : 0,
                                o = null !== (n = R(e, "reason")) && void 0 !== n ? n : "",
                                r = N.default.getUser(a);
                            await d.default.banUser(i.id, a, s, o), c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                user: null != r ? g.default.getUserTag(r) : a
                            }))
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_BAN_ERROR)
                        })
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return y.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "duration",
                        displayName: "duration",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
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
                            return y.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        required: !1
                    }],
                    predicate: e => {
                        let {
                            guild: t
                        } = e;
                        return E.default.can(h.Permissions.MODERATE_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        let {
                            guild: n,
                            channel: i
                        } = t;
                        if (null == n) return;
                        let l = R(e, "user");
                        if (!(0, f.canToggleCommunicationDisableOnUser)(n.id, l)) {
                            c.default.sendBotMessage(i.id, y.default.Messages.COMMAND_TIMEOUT_UNABLE);
                            return
                        }
                        let a = async () => {
                            var t, a;
                            let o = null !== (t = R(e, "duration")) && void 0 !== t ? t : "",
                                r = null !== (a = R(e, "reason")) && void 0 !== a ? a : "",
                                u = N.default.getUser(l);
                            if (null == u) throw Error();
                            await d.default.setCommunicationDisabledUntil({
                                guildId: n.id,
                                userId: l,
                                communicationDisabledUntilTimestamp: s().add(o, "s").toISOString(),
                                duration: o,
                                reason: r
                            }), c.default.sendBotMessage(i.id, y.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: g.default.getUserTag(u),
                                duration: o
                            }))
                        };
                        a().catch(() => {
                            c.default.sendBotMessage(i.id, y.default.Messages.COMMAND_TIMEOUT_ERROR)
                        })
                    }
                }, {
                    id: "-14",
                    name: "msg",
                    displayName: "msg",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: O.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return y.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    get displayDescription() {
                        return y.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return y.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return y.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return y.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        required: !0,
                        get maxLength() {
                            var U;
                            return (null === (U = N.default.getCurrentUser()) || void 0 === U ? void 0 : U.premiumType) ? h.MAX_MESSAGE_LENGTH_PREMIUM : h.MAX_MESSAGE_LENGTH
                        }
                    }],
                    execute: (e, t) => {
                        var n;
                        let {
                            channel: i
                        } = t, a = R(e, "user"), s = null !== (n = R(e, "message")) && void 0 !== n ? n : "", o = async () => {
                            await u.default.openPrivateChannel(a).then(e => {
                                let t = A.default.getChannel(e);
                                l(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, m.default.parse(t, s))
                            })
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(i.id, y.default.Messages.COMMAND_MSG_ERROR)
                        })
                    }
                }],
                B = L.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
                b = (e, t, n) => {
                    let i = t ? L : B;
                    return i = i.filter(t => t.type === e && (!n || t.inputType === M.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === M.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
                }
        },
        369010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTopCommands: function() {
                    return o
                },
                useTopRealCommands: function() {
                    return r
                }
            });
            var i = n("884691"),
                l = n("446674"),
                a = n("872173"),
                s = n("342564");

            function o(e) {
                i.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest()),
                    n = i.useMemo(() => (0, s.getFilteredTopCommands)(t, e), [t, e]);
                return n
            }

            function r(e) {
                i.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest()),
                    n = i.useMemo(() => {
                        let n = (0, s.getFilteredTopCommands)(t, e);
                        return (0, s.getTopRealCommands)(n)
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
                    return I
                },
                default: function() {
                    return A
                }
            }), n("222007"), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                s = n("913144"),
                o = n("798609"),
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

            function I(e, t) {
                return e.filter(e => {
                    if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
                    return !0
                }).map(e => e.split(":")[0])
            }

            function _(e, t) {
                return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
            }

            function C() {
                var e, t;
                let n = u.default.frecencyWithoutFetchingLatest,
                    i = null !== (t = null === (e = n.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
                f.overwriteHistory(l.mapValues(i, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), p.pendingUsages)
            }
            class T extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (p = e), this.syncWith([u.default], C)
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
                    return null !== (n = f.getScore(_(e, t))) && void 0 !== n ? n : 0
                }
                getTopCommandsWithoutLoadingLatest() {
                    return f.frequently
                }
            }
            T.displayName = "ApplicationCommandFrecencyStore", T.persistKey = "ApplicationCommandFrecencyV2";
            var A = new T(s.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t,
                        context: n
                    } = e;
                    if (t.type !== o.ApplicationCommandType.CHAT) return !1;
                    let i = _(n, t);
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
                    return r
                },
                requestApplicationCommandIndex: function() {
                    return u
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("599110"),
                s = n("718517"),
                o = n("49111");
            async function r(e, t, n) {
                let r, u = 0;
                switch (e.type) {
                    case "channel":
                        r = o.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        r = o.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        r = o.Endpoints.APPLICATION_COMMAND_INDEX_USER
                }
                let d = async t => u >= 3 ? (p(!0), l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                    target: e
                })) : (await new Promise(e => setTimeout(e, t)), c()), c = () => i.default.get({
                    url: r,
                    retries: 3 - u - 1,
                    signal: n.signal,
                    onRequestCreated: () => u++
                }).then(t => 202 === t.status ? d(5e3) : (p(!1), l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
                    target: e,
                    index: t.body
                })), t => {
                    if (n.signal.aborted) {
                        p(!0);
                        return
                    }
                    return 429 === t.status ? d(t.body.retry_after * s.default.Millis.SECOND) : (p(!0), l.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                        target: e
                    }))
                }), p = e => {
                    let i = performance.now() - t;
                    a.default.track(o.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: i,
                        error: e,
                        aborted: n.signal.aborted,
                        include_applications: !0,
                        retries: Math.max(u - 1, 0),
                        kind: null,
                        command_type: null
                    })
                };
                await c()
            }

            function u(e) {
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
                    return j
                },
                useContextIndexState: function() {
                    return z
                },
                useUserIndexState: function() {
                    return X
                },
                useDiscoveryState: function() {
                    return Q
                },
                useQueryState: function() {
                    return $
                }
            }), n("222007"), n("424973"), n("881410");
            var i, l, a = n("884691"),
                s = n("627445"),
                o = n.n(s),
                r = n("811022"),
                u = n("446674"),
                d = n("913144"),
                c = n("851387");
            n("798609");
            var p = n("605393"),
                f = n("892692"),
                m = n("915639"),
                I = n("872173"),
                _ = n("42203"),
                C = n("305961"),
                T = n("162771"),
                A = n("697218"),
                E = n("599110"),
                N = n("589777"),
                S = n("369010"),
                g = n("342564"),
                M = n("9566"),
                O = n("972620"),
                h = n("524768"),
                v = n("389153"),
                y = n("123373"),
                D = n("217946"),
                R = n("317041"),
                P = n("49111");
            let L = new r.default("ApplicationCommandIndexStore"),
                U = Symbol("currentUser"),
                B = Symbol("stale"),
                b = Symbol("current"),
                F = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                H = Object.freeze({
                    serverVersion: b,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: {},
                        sectionIdsByBotId: {},
                        version: b
                    }
                }),
                w = Object.freeze({
                    serverVersion: B,
                    fetchState: {
                        fetching: !1
                    }
                }),
                G = {
                    sensitivity: "accent",
                    numeric: !0
                };

            function x(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return U
                }
            }

            function W(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = x(e),
                    l = K.indices[i];
                return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), K.indices[i] = {
                    ...l,
                    ...t
                }) : n && (K.indices[i] = {
                    serverVersion: B,
                    fetchState: {
                        fetching: !1
                    },
                    ...t
                }), l
            }

            function Y(e) {
                let t = x(e),
                    n = K.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete K.indices[t]
            }

            function k() {
                for (let e of Object.values(K.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
                K.indices = {}
            }

            function V() {
                W({
                    type: "user"
                }, {
                    serverVersion: B
                })
            }
            class q extends u.default.Store {
                initialize() {
                    this.waitFor(m.default), this.syncWith([m.default], () => {
                        ! function() {
                            let e = m.default.locale;
                            e !== K.oldLocale && (k(), K.collator = new Intl.Collator(e, {
                                sensitivity: "accent",
                                numeric: !0
                            }), K.oldLocale = e)
                        }()
                    })
                }
                getContextState(e) {
                    var t, n;
                    return null != e && et(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : w : H
                }
                getUserState() {
                    var e;
                    let t = T.default.getGuildId();
                    return (0, v.isInUserAppExperiment)(t, {
                        location: "getUserState"
                    }, {
                        autoTrackExposure: !1
                    }) ? null !== (e = this.indices[U]) && void 0 !== e ? e : w : H
                }
                query(e, t, n) {
                    let i = A.default.getCurrentUser();
                    if (null == i) return F;
                    let l = this.getContextState(e),
                        a = this.getUserState(),
                        s = (0, y.buildPermissionContext)(e, t.commandType),
                        o = !1 !== t.applicationCommands && s.hasBaseAccessPermissions,
                        r = !1;
                    if (n.allowFetch) {
                        let t = o && et(e);
                        t && (E.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: null == l.result,
                            size: Object.keys(K.indices).length
                        }), en(l) && (null != e.guild_id ? (0, M.requestApplicationCommandIndex)({
                            type: "guild",
                            guildId: e.guild_id
                        }) : (0, M.requestApplicationCommandIndex)({
                            type: "channel",
                            channelId: e.id
                        }), r = !0)), (0, v.isInUserAppExperiment)(e.guild_id, {
                            location: "query"
                        }) && en(a) && ((0, M.requestApplicationCommandIndex)({
                            type: "user"
                        }), r = !0)
                    }
                    let u = J({
                        permissionContext: s,
                        text: t.text,
                        allowApplicationCommands: o,
                        builtIns: t.builtIns,
                        scoreMethod: n.scoreMethod,
                        allowEmptySections: n.allowEmptySections,
                        contextState: l,
                        userState: a
                    });
                    return u.loading = u.loading || r, u
                }
                constructor(...e) {
                    super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, G)
                }
            }
            q.displayName = "ApplicationCommandIndexStore";
            let K = new q(d.default, {
                LOGOUT: k,
                CONNECTION_OPEN: function() {
                    for (let e of Object.values(K.indices)) e.serverVersion = B
                },
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    var t;
                    let {
                        target: n,
                        start: i
                    } = e;
                    if (en(null !== (t = K.indices[x(n)]) && void 0 !== t ? t : w)) {
                        let e = new AbortController;
                        W(n, {
                            fetchState: {
                                fetching: !0,
                                abort: e
                            }
                        }, !0), (0, M.fetchApplicationCommandIndex)(n, i, e)
                    }
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var t, n;
                    let {
                        target: i,
                        index: l
                    } = e, a = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == a) return !1;
                    let s = {},
                        o = {},
                        r = new Set;
                    for (let e of l.applications) {
                        if (null == e.bot && null != e.bot_id) {
                            o[e.bot_id] = e.id;
                            let t = A.default.getUser(e.bot_id);
                            null != t ? e.bot = t : r.add(e.bot_id)
                        } else null != e.bot && (o[e.bot.id] = e.id);
                        let t = {
                            descriptor: {
                                ...(0, v.getApplicationCommandSection)(function(e) {
                                    return {
                                        description: e.description,
                                        icon: e.icon,
                                        id: e.id,
                                        name: e.name,
                                        bot: e.bot
                                    }
                                }(e)),
                                permissions: null != e.permissions ? (0, f.keyPermissions)(ea(e.permissions, a)) : void 0,
                                botId: e.bot_id
                            },
                            commands: {}
                        };
                        s[e.id] = t
                    }
                    for (let e of ("guild" === i.type && r.size > 0 && c.default.requestMembersById(i.guildId, [...r]), (0, v.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
                            var n, i, l, a, s;
                            let o = {
                                ...e,
                                description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                                dm_permission: void 0,
                                name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                                options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)) && void 0 !== s ? s : [],
                                permissions: null != e.permissions ? ea(e.permissions, t) : void 0
                            };
                            return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o
                        })(e, a)), !0))) {
                        let t = s[e.applicationId];
                        if (null == t) {
                            L.error("Command has no matching application");
                            continue
                        }
                        t.commands[e.id] = e
                    }
                    let u = null !== (n = l.version) && void 0 !== n ? n : b;
                    W(i, {
                        serverVersion: u,
                        result: {
                            sections: s,
                            sectionIdsByBotId: o,
                            version: u
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
                    W(t, {
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
                    W(t = null != i ? {
                        type: "guild",
                        guildId: i
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: B
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    Y({
                        type: "channel",
                        channelId: t.id
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    Y({
                        type: "guild",
                        guildId: t.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: n,
                        version: i
                    } = e, l = W({
                        type: "guild",
                        guildId: n
                    }, {
                        serverVersion: null != i ? i : B
                    }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
                    if (null != a)
                        for (let e in a) {
                            let t = _.default.getDMFromUserId(e);
                            null != t && W({
                                type: "channel",
                                channelId: t
                            }, {
                                serverVersion: B
                            })
                        }
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    var t;
                    let {
                        guildId: n,
                        members: i
                    } = e, l = x({
                        type: "guild",
                        guildId: n
                    }), a = null === (t = K.indices[l]) || void 0 === t ? void 0 : t.result;
                    if (null == a) return !1;
                    let s = !1;
                    return i.forEach(e => {
                        let t = a.sectionIdsByBotId[e.user.id];
                        if (null != t) {
                            let n = a.sections[t];
                            o(null != n, "Bot has no matching index section"), o(null != n.descriptor.application, "Bot's index section has no application info");
                            let i = n.descriptor.application;
                            i.bot = e.user, n.descriptor = (0, v.getApplicationCommandSection)(i), s = !0
                        }
                    }), s
                },
                USER_APPLICATION_UPDATE: V,
                USER_APPLICATION_REMOVE: V
            });
            var j = K;

            function z(e, t, n) {
                let [i, l] = a.useState(!0), s = (0, u.useStateFromStoresObject)([K], () => K.getContextState(e));
                return a.useEffect(() => {
                    if (i && null != e) {
                        if (n) {
                            let n = t && et(e);
                            n && (E.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == s.result,
                                size: Object.keys(K.indices).length
                            }), en(s) && (null != e.guild_id ? (0, M.requestApplicationCommandIndex)({
                                type: "guild",
                                guildId: e.guild_id
                            }) : (0, M.requestApplicationCommandIndex)({
                                type: "channel",
                                channelId: e.id
                            })))
                        }
                        l(!1)
                    }
                }, [s, n, e, t, i]), s
            }

            function X(e, t) {
                let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([K], () => K.getUserState()), s = (0, u.useStateFromStores)([T.default], T.default.getGuildId), o = (0, v.useIsInUserAppExperiment)(s, {
                    location: "useUserIndexState"
                });
                return a.useEffect(() => {
                    n && (t && en(l) && e && o && (0, M.requestApplicationCommandIndex)({
                        type: "user"
                    }), i(!1))
                }, [l, t, e, o, n]), l
            }

            function Q(e, t, n, i) {
                let {
                    descriptors: l,
                    commands: s,
                    sectionedCommands: o,
                    loading: r
                } = $(e, n, i), u = (0, S.useTopCommands)({
                    channel: e,
                    guild: t
                });
                return a.useMemo(() => {
                    if (!i.includeFrecency || 0 === u.length) return {
                        descriptors: l,
                        commands: s,
                        sectionedCommands: o,
                        loading: r
                    };
                    let n = {
                            channel: e,
                            guild: t
                        },
                        a = s.filter(e => u.includes(e.id)).sort((e, t) => {
                            let i = g.default.getScoreWithoutLoadingLatest(n, e),
                                l = g.default.getScoreWithoutLoadingLatest(n, t);
                            return l - i
                        }).splice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
                    return 0 === a.length ? {
                        descriptors: l,
                        commands: s,
                        sectionedCommands: o,
                        loading: r
                    } : {
                        descriptors: [N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY], ...l],
                        commands: a.concat(s),
                        sectionedCommands: [{
                            section: N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY],
                            data: a
                        }, ...o],
                        loading: r
                    }
                }, [r, i.includeFrecency, u, e, t, s, l, o])
            }
            let Z = Object.freeze({
                applications: {
                    useFrecency: !1,
                    useScore: !1
                },
                commands: {
                    useFrecency: !0,
                    useScore: !0
                }
            });

            function $(e, t, n) {
                let i = (0, y.usePermissionContext)(e, t.commandType),
                    l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                    s = z(e, l, n.allowFetch),
                    o = X(l, n.allowFetch);
                return a.useMemo(() => J({
                    permissionContext: i,
                    text: t.text,
                    allowApplicationCommands: l,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: s,
                    userState: o,
                    sortOptions: n.sortOptions
                }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, n.sortOptions, s, o])
            }

            function J(e) {
                let {
                    permissionContext: t,
                    contextState: n,
                    userState: i,
                    text: l,
                    builtIns: a = O.BuiltInCommandFilter.ALLOW,
                    allowApplicationCommands: s = !0,
                    allowEmptySections: r = !1,
                    scoreMethod: u = O.ScoreMethod.NONE,
                    sortOptions: d = Z
                } = e, {
                    commandType: c
                } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), _ = a === O.BuiltInCommandFilter.ONLY_TEXT, T = a !== O.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(c, !0, _) : [], A = [], E = {
                    permissionContext: t,
                    query: f,
                    splitQuery: m,
                    allowEmptySections: r,
                    scoreMethod: u
                };
                if (s) {
                    var S, M, h, v;
                    let e = null !== (h = null === (S = n.result) || void 0 === S ? void 0 : S.sections) && void 0 !== h ? h : {},
                        t = null !== (v = null === (M = i.result) || void 0 === M ? void 0 : M.sections) && void 0 !== v ? v : {},
                        l = [...Object.keys(e), ...Object.keys(t).filter(t => !(t in e))];
                    for (let n of l) {
                        let i, l;
                        let a = e[n],
                            s = t[n];
                        if (null != a && null != s) {
                            for (let e in i = s.descriptor, l = [], s.commands) {
                                let t = s.commands[e];
                                l.push(t)
                            }
                            for (let e in a.commands)
                                if (!(e in s.commands)) {
                                    let t = a.commands[e];
                                    l.push(t)
                                }
                        } else null != a ? (i = a.descriptor, l = Object.values(a.commands)) : null != s && (i = s.descriptor, l = Object.values(s.commands));
                        o(null != i, "Failed to select application descriptor"), o(null != l, "Failed to select list of application commands");
                        let r = ee(i, l, E);
                        null != r && A.push(r)
                    }
                    d.applications.useFrecency && I.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                        if (d.applications.useScore && u === O.ScoreMethod.APPLICATION_ONLY) {
                            var n, i, l, a;
                            let s = null !== (l = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : Number.MAX_VALUE,
                                o = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
                            if (s !== o) return s - o
                        }
                        if (d.applications.useFrecency) {
                            let n = p.default.getScoreWithoutLoadingLatest(e.section.id),
                                i = p.default.getScoreWithoutLoadingLatest(t.section.id);
                            if (n !== i) return i - n
                        }
                        return es(e.section.name, t.section.name)
                    })
                }
                if (T.length > 0 || !0 === r) {
                    let e = ee(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN], T, E);
                    null != e && A.push(e)
                }
                let y = A.flatMap(e => e.data.map(t => ({
                    ...t,
                    section: e.section
                })));
                if (u === O.ScoreMethod.COMMAND_ONLY || u === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                    let e = t.context,
                        n = C.default.getGuild(t.context.guild_id);
                    d.commands.useFrecency && I.FrecencyUserSettingsActionCreators.loadIfNecessary(), y.sort((t, i) => {
                        if (d.commands.useScore) {
                            var l, a;
                            let e = null !== (l = t.score) && void 0 !== l ? l : 0,
                                n = null !== (a = i.score) && void 0 !== a ? a : 0;
                            if (e !== n) return e - n
                        }
                        if (d.commands.useFrecency) {
                            let l = g.default.getScoreWithoutLoadingLatest({
                                    channel: e,
                                    guild: n
                                }, t),
                                a = g.default.getScoreWithoutLoadingLatest({
                                    channel: e,
                                    guild: n
                                }, i);
                            if (l !== a) return a - l
                        }
                        return es(t.displayName, i.displayName)
                    })
                }
                return {
                    commands: y,
                    descriptors: A.map(e => e.section),
                    sectionedCommands: A,
                    loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
                }
            }

            function ee(e, t, n) {
                let i, {
                        query: l,
                        splitQuery: a,
                        allowEmptySections: s,
                        scoreMethod: o,
                        permissionContext: r
                    } = n,
                    {
                        context: u,
                        userId: d,
                        roleIds: c,
                        isImpersonating: p
                    } = r,
                    f = null != u.guild_id ? D.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
                    m = null != u.guild_id ? D.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
                    I = [];
                for (let n of t) {
                    let t = D.hasAccess(n, r, f, m, e.botId);
                    t === D.HasAccessResult.ALLOWED && I.push(n)
                }
                return 0 !== (i = o !== O.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
                    let a;
                    let s = [];
                    if (l === O.ScoreMethod.APPLICATION_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                        let t = i.name.toLocaleLowerCase();
                        t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
                    }
                    let o = t[0],
                        r = t.slice(1).join(" ");
                    for (let t of n) {
                        let n;
                        if (l === O.ScoreMethod.COMMAND_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                            var u;
                            n = null !== (u = function(e, t, n, i) {
                                var l;
                                let a = e.name,
                                    s = e.displayName;
                                if (a.startsWith(t) || s.startsWith(t)) return 0;
                                if (a.startsWith(n)) {
                                    let e = a.split(" ").slice(1).join(" ");
                                    if (e.startsWith(i)) return 1
                                }
                                if (s.startsWith(n)) {
                                    let e = s.split(" ").slice(1).join(" ");
                                    if (e.startsWith(i)) return 1
                                }
                                if (a.includes(t) || (null == s ? void 0 : s.includes(t))) return 2;
                                let o = !1;
                                for (let {
                                        name: n,
                                        serverLocalizedName: i
                                    }
                                    of null !== (l = e.options) && void 0 !== l ? l : []) {
                                    if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != s && "".concat(s, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(a, " ").concat(i).startsWith(t) || null != s && "".concat(s, " ").concat(i).startsWith(t))) return 3;
                                    (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (o = !0)
                                }
                                if (o) return 4
                            }(t, e, o, r)) && void 0 !== u ? u : a
                        } else n = a;
                        void 0 !== n && s.push({
                            ...t,
                            score: n
                        })
                    }
                    return s
                }(l, a, I, e, o) : I).length || s ? ((o === O.ScoreMethod.NONE || o === O.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => es(e.displayName, t.displayName)), {
                    section: e,
                    data: i
                }) : null
            }

            function et(e) {
                var t;
                return null != e.guild_id || e.type === P.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
            }

            function en(e) {
                return !! function(e) {
                    var t;
                    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
                }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function ei(e) {
                var t, n, i, l;
                let a = {
                    ...e,
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(el),
                    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
                    name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)
                };
                return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
            }

            function el(e) {
                var t;
                let n = {
                    ...e,
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                };
                return e.name !== e.name_default && (n.name_localized = e.name), n
            }

            function ea(e, t) {
                let n = [];
                if (null != e.user && n.push({
                        type: h.ApplicationCommandPermissionType.USER,
                        id: t,
                        permission: e.user
                    }), null != e.channels)
                    for (let [t, i] of Object.entries(e.channels)) n.push({
                        type: h.ApplicationCommandPermissionType.CHANNEL,
                        id: t,
                        permission: i
                    });
                if (null != e.roles)
                    for (let [t, i] of Object.entries(e.roles)) n.push({
                        type: h.ApplicationCommandPermissionType.ROLE,
                        id: t,
                        permission: i
                    });
                return n
            }(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

            function es(e, t) {
                return K.collator.compare(e, t)
            }
        },
        240249: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCachedCommand: function() {
                    return E
                },
                getCachedApplicationSection: function() {
                    return N
                },
                getCachedResults: function() {
                    return S
                },
                getChangeKeys: function() {
                    return g
                },
                useDiscovery: function() {
                    return M
                },
                executeQuery: function() {
                    return O
                },
                useQuery: function() {
                    return h
                },
                useCommand: function() {
                    return v
                },
                useCommandsForApplication: function() {
                    return y
                },
                useSearchOpenState: function() {
                    return D
                },
                isInIndexExperiment: function() {
                    return R
                }
            }), n("222007"), n("424973"), n("808653");
            var i = n("884691"),
                l = n("446674"),
                a = n("938767"),
                s = n("305961"),
                o = n("697218"),
                r = n("449008"),
                u = n("507217"),
                d = n("589777"),
                c = n("14090"),
                p = n("988721"),
                f = n("972620"),
                m = n("216193"),
                I = n("166004"),
                _ = n("524768"),
                C = n("389153"),
                T = n("317041"),
                A = n("49111");

            function E(e, t) {
                var n, i, l, a;
                if (null == t) return {
                    application: void 0,
                    command: void 0
                };
                if (!R({
                        location: "getCachedCommand"
                    })) {
                    let e = m.default.getCommand(t),
                        n = m.default.getApplication(null == e ? void 0 : e.applicationId);
                    return {
                        command: e,
                        application: n
                    }
                }
                let s = p.default.getUserState(),
                    o = p.default.getContextState(e),
                    r = Object.values(null !== (l = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (a = null === (i = o.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}));
                for (let e of r) {
                    let n = e.commands[t];
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

            function N(e, t, n) {
                var i, l, a, s, o, r;
                if (!R({
                        location: "getCachedApplicationSection"
                    })) return null === (o = I.default.getApplicationSections(e.id, t)) || void 0 === o ? void 0 : o.find(e => e.id === n);
                let u = p.default.getUserState(),
                    d = p.default.getContextState(e),
                    c = null !== (r = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== r ? r : null === (s = d.result) || void 0 === s ? void 0 : null === (a = s.sections) || void 0 === a ? void 0 : a[n];
                return null == c ? void 0 : c.descriptor
            }

            function S(e, t, n) {
                if (!R({
                        location: "getCachedResults"
                    })) {
                    var i, l;
                    return {
                        commands: null !== (i = I.default.getQueryCommands(e.id, t, n)) && void 0 !== i ? i : [],
                        sections: null !== (l = I.default.getApplicationSections(e.id, t)) && void 0 !== l ? l : []
                    }
                }
                let a = p.default.query(e, {
                    commandType: t,
                    text: n
                }, {
                    scoreMethod: f.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: !1
                });
                return {
                    commands: a.commands,
                    sections: a.descriptors
                }
            }

            function g(e, t, n) {
                if (!R({
                        location: "getChangeKeys"
                    }, {
                        autoTrackExposure: !1
                    })) return [I.default.getQueryCommands(e.id, t, n)];
                let i = p.default.getUserState(),
                    l = p.default.getContextState(e);
                return [null == i ? void 0 : i.result, null == l ? void 0 : l.result]
            }

            function M(e, t, n) {
                if (!P({
                        location: "useDiscovery"
                    })) {
                    var a, o;
                    return (0, I.useDiscoveryState)(e, t.commandType, null !== (a = n.placeholderCount) && void 0 !== a ? a : 0, null !== (o = n.limit) && void 0 !== o ? o : 10, {
                        canOnlyUseTextCommands: t.builtIns === f.BuiltInCommandFilter.ONLY_TEXT,
                        canUseFrecency: n.includeFrecency
                    })
                }
                let r = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: u,
                        commands: c,
                        sectionedCommands: m,
                        loading: _
                    } = (0, p.useDiscoveryState)(e, r, t, {
                        ...n,
                        allowFetch: !0
                    }),
                    [C, E] = i.useState(null),
                    N = i.useRef(!1);
                N.current = _;
                let S = i.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let i = 0; i < n.placeholderCount; i++) e.push(U(i, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => {
                    let e = {
                        loading: N,
                        commands: c,
                        activeSections: u,
                        commandsByActiveSection: m,
                        filteredSectionId: C,
                        hasMoreAfter: !1,
                        placeholders: _ ? S : [],
                        sectionDescriptors: u,
                        filterSection: e => {
                            E(e)
                        },
                        scrollDown: A.NOOP
                    };
                    if (null != C) {
                        let t = m.find(e => e.section.id === C);
                        e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
                    }
                    if (_) {
                        let t = m[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: [...t.data, ...S]
                        }, ...m.slice(1)];
                        else {
                            let t = d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN];
                            e.activeSections = [t], e.commandsByActiveSection = [{
                                section: t,
                                data: S
                            }]
                        }
                        e.commands = [...c, ...S]
                    }
                    return e
                }, [c, u, C, m, _, S])
            }

            function O(e, t, n) {
                if (!R({
                        location: "executeQuery"
                    })) {
                    var i, l, s, o, r;
                    return !0 === n.allowFetch && u.querySearchManager((0, a.getCommandContext)(e), null !== (i = t.text) && void 0 !== i ? i : "", null !== (l = n.limit) && void 0 !== l ? l : 10, t.commandType), {
                        commands: null !== (o = I.default.getQueryCommands(e.id, t.commandType, null !== (s = t.text) && void 0 !== s ? s : "")) && void 0 !== o ? o : [],
                        sections: null !== (r = I.default.getApplicationSections(e.id, t.commandType)) && void 0 !== r ? r : []
                    }
                }
                let {
                    descriptors: c,
                    commands: f,
                    loading: m
                } = p.default.query(e, t, n), _ = [];
                if (null != n.placeholderCount && m)
                    for (let e = 0; e < n.placeholderCount; e++) _.push(U(e, t.commandType));
                return {
                    commands: m ? [...f, ..._] : f,
                    sections: m && 0 === c.length ? [d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN]] : c
                }
            }

            function h(e, t, n) {
                if (!P({
                        location: "useQuery"
                    })) {
                    var l, a;
                    return (0, I.useQueryState)(e, t.commandType, null !== (l = t.text) && void 0 !== l ? l : "", null !== (a = n.limit) && void 0 !== a ? a : 10)
                }
                let {
                    descriptors: s,
                    commands: o,
                    loading: r
                } = (0, p.useQueryState)(e, t, {
                    ...n,
                    allowFetch: !0
                }), u = i.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let i = 0; i < n.placeholderCount; i++) e.push(U(i, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => ({
                    commands: r ? [...o, ...u] : o,
                    sections: r && 0 === s.length ? [d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN]] : s,
                    scrollDown: A.NOOP
                }), [r, o, s, u])
            }

            function v(e, t) {
                if (!P({
                        location: "useCommand"
                    })) {
                    var n;
                    let a = (0, l.useStateFromStores)([o.default], () => {
                            if (null == e ? void 0 : e.isDM()) {
                                let t = e.getRecipientId(),
                                    n = o.default.getUser(t);
                                if (null != n && n.bot) return n
                            }
                            return null
                        }, [e]),
                        {
                            command: s,
                            application: r
                        } = (0, l.useStateFromStoresObject)([m.default], () => {
                            let e = null != t ? m.default.getCommand(t) : void 0,
                                n = m.default.getApplication(null == e ? void 0 : e.applicationId);
                            return {
                                command: e,
                                application: n
                            }
                        });
                    return (i.useEffect(() => {
                        null != e && null == s && (null != a ? u.fetchCommandsForApplication({
                            guildId: null,
                            channelId: e.id,
                            applicationId: a.id
                        }) : null != e.guild_id && null != t && u.fetchCommand(e.guild_id, e.id, t))
                    }, [a, e, s, t]), null == e || null == e.guild_id && (null == a || null == r || a.id !== (null === (n = r.bot) || void 0 === n ? void 0 : n.id))) ? {
                        command: void 0,
                        application: void 0
                    } : {
                        command: s,
                        application: r
                    }
                }
                let a = (0, p.useUserIndexState)(!0, !0),
                    s = (0, p.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    if (null != t) {
                        var e, n, i, l;
                        let o = Object.values(null !== (i = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}).concat(Object.values(null !== (l = null === (n = s.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}));
                        for (let e of o) {
                            let n = e.commands[t];
                            if (null != n) return {
                                command: n,
                                application: e.descriptor.application
                            }
                        }
                    }
                    return {
                        command: void 0,
                        application: void 0
                    }
                }, [s.result, a.result, t])
            }

            function y(e, t, n) {
                if (!P({
                        location: "useCommandsForApplication"
                    })) return i.useEffect(() => {
                    u.fetchCommands(e.guild_id, e.id, n)
                }, [n, e]), (0, l.useStateFromStoresObject)([m.default], () => {
                    let i = m.default.getApplication(t),
                        l = m.default.getCommands(n, e.id);
                    return {
                        commands: l,
                        application: i
                    }
                });
                let a = (0, p.useUserIndexState)(!0, !0),
                    s = (0, p.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    var e, i, l, o, u, d;
                    let c = null !== (u = null === (i = a.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (l = s.result) || void 0 === l ? void 0 : l.sections[t],
                        p = Object.values(null !== (d = null == c ? void 0 : c.commands) && void 0 !== d ? d : {}).map(e => null == e.rootCommand ? e : (0, C.buildCommand)({
                            rootCommand: e.rootCommand,
                            command: e.rootCommand,
                            applicationId: e.applicationId
                        })).reduce((e, t) => (e[t.id] = t, e), {});
                    return {
                        application: null == c ? void 0 : null === (o = c.descriptor) || void 0 === o ? void 0 : o.application,
                        commands: n.map(e => p[e]).filter(r.isNotNullish)
                    }
                }, [null == a ? void 0 : a.result, null == s ? void 0 : s.result, t, n])
            }

            function D() {
                !P({
                    location: "useSearchOpenState"
                }) && (0, I.useSearchStoreOpenState)()
            }

            function R(e, t) {
                return c.default.getCurrentConfig(e, t).enabled
            }

            function P(e, t) {
                let [n] = i.useState(R(e, t));
                return n
            }
            let L = {
                id: "placeholder-section",
                type: _.ApplicationCommandSectionType.APPLICATION,
                name: ""
            };

            function U(e, t) {
                return {
                    type: t,
                    inputType: _.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: "",
                    section: L
                }
            }
        },
        972620: function(e, t, n) {
            "use strict";
            var i, l, a, s;
            n.r(t), n.d(t, {
                ScoreMethod: function() {
                    return i
                },
                BuiltInCommandFilter: function() {
                    return l
                }
            }), (a = i || (i = {})).NONE = "none", a.APPLICATION_ONLY = "application_only", a.COMMAND_ONLY = "command_only", a.COMMAND_OR_APPLICATION = "command_or_application", (s = l || (l = {})).ALLOW = "allow", s.ONLY_TEXT = "only_text", s.DENY = "deny"
        },
        216193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("808653"), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("693566"),
                s = n.n(a),
                o = n("446674"),
                r = n("913144"),
                u = n("798609"),
                d = n("140596"),
                c = n("42203"),
                p = n("957255"),
                f = n("507217"),
                m = n("166004"),
                I = n("389153");
            let _ = new Map,
                C = new Set,
                T = new Set,
                A = new s({
                    max: 1e4
                }),
                E = new s({
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
                        if (null != t && l && C.add(t), 0 === e.applicationCommands.length && (null == e.applications || 0 === e.applications.length)) return;
                        let a = (0, I.buildApplicationCommands)(e.applicationCommands);
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
                    if (null != a)(0, I.canUseApplicationCommands)(p.default, d.default, !1, a) && N({
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
                    let l = [...n].filter(I.isSnowflake);
                    if (0 === l.length) return;
                    let a = c.default.getChannel(t);
                    if (null == a || !(0, I.canUseApplicationCommands)(p.default, d.default, !1, a)) return;
                    let s = l.slice(0, 100),
                        o = l.slice(100);
                    N({
                        guildId: e,
                        channelId: t,
                        includeApplications: i,
                        params: {
                            type: u.ApplicationCommandType.CHAT,
                            includeApplications: i,
                            commandIds: s,
                            cursor: void 0,
                            limit: 0
                        }
                    }).then(() => {
                        o.length > 0 && g(e, t, new Set(o), i)
                    })
                }, 250);
            class M extends o.default.Store {
                hasCommand(e) {
                    return null != e && A.has(e)
                }
                getApplication(e) {
                    if (null != e) return _.get(e)
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
                    T.add(n);
                    let l = null != i && !C.has(i);
                    g(i, t, T, l)
                },
                APPLICATION_COMMANDS_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandIds: n,
                        guildId: i
                    } = e;
                    n.forEach(e => {
                        var n;
                        (null === (n = E.get(e)) || void 0 === n ? void 0 : n.channelId) !== t && T.add(e)
                    });
                    let l = null != i && !C.has(i);
                    g(i, t, T, l)
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
                    C.delete(t)
                },
                APPLICATION_COMMAND_REGISTRY_UPDATE: function(e) {
                    let {
                        applications: t,
                        commands: n,
                        channelId: i
                    } = e;
                    for (let e of t) _.set(e.id, e);
                    for (let e of n) T.delete(e.id), A.set(e.id, e), E.set(e.id, {
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
                        null != e.application && _.set(e.application.id, e.application)
                    }))
                },
                LOGOUT: function() {
                    _.clear(), C.clear(), T.clear(), A.reset(), E.reset()
                }
            });
            var h = O
        },
        166004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                search: function() {
                    return U
                },
                default: function() {
                    return j
                },
                useSearchStoreOpenState: function() {
                    return X
                },
                useDiscoveryState: function() {
                    return Q
                },
                useQueryState: function() {
                    return ee
                }
            }), n("222007"), n("424973"), n("506083");
            var i = n("884691"),
                l = n("483366"),
                a = n.n(l),
                s = n("693566"),
                o = n.n(s),
                r = n("446674"),
                u = n("872717"),
                d = n("913144"),
                c = n("798609"),
                p = n("763898"),
                f = n("938767"),
                m = n("38654"),
                I = n("252063"),
                _ = n("140596"),
                C = n("685841"),
                T = n("872173"),
                A = n("374363"),
                E = n("42203"),
                N = n("923959"),
                S = n("957255"),
                g = n("18494"),
                M = n("599110"),
                O = n("718517"),
                h = n("589777"),
                v = n("369010"),
                y = n("342564"),
                D = n("524768"),
                R = n("389153"),
                P = n("317041"),
                L = n("49111");

            function U(e, t, n) {
                var i;
                let l;
                if ((null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted)) return Promise.resolve(null);
                let a = {
                    type: t.type,
                    role_ids: null === (i = t.roleIds) || void 0 === i ? void 0 : i.join(",")
                };
                "applicationId" in t && null != t.applicationId ? (a.application_id = t.applicationId, l = "application") : "query" in t ? (a.query = t.query, a.limit = t.limit, a.cursor = t.cursor, l = "query") : "cursor" in t ? (a.limit = t.limit, a.cursor = t.cursor, null != t.commandIds && t.commandIds.length > 0 && (a.command_ids = t.commandIds.join(",")), l = "discovery") : l = "unknown", "includeApplications" in t && (a.include_applications = t.includeApplications), "checkPermissions" in t && (a.check_permissions = t.checkPermissions);
                let s = async i => {
                    var l;
                    return await new Promise(e => {
                        setTimeout(e, i)
                    }), U(e, {
                        ...t,
                        retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
                    }, n)
                };
                (null == t.retries || 0 === t.retries) && (t.start = performance.now());
                let o = e => {
                    var i, s, o;
                    if (null == t.start) return;
                    let r = performance.now() - t.start;
                    M.default.track(L.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: r,
                        aborted: null !== (i = null == n ? void 0 : n.signal.aborted) && void 0 !== i && i,
                        error: e,
                        kind: l,
                        command_type: t.type,
                        include_applications: null !== (s = a.include_applications) && void 0 !== s && s,
                        retries: null !== (o = t.retries) && void 0 !== o ? o : 0
                    })
                };
                return u.default.get({
                    url: L.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
                    query: a,
                    signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
                }).then(e => {
                    var t, n, i;
                    return 202 === e.status ? s(5e3) : (o(!1), {
                        applicationCommands: e.body.application_commands,
                        applications: e.body.applications,
                        nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
                        prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
                        repaired: null === (i = e.body.cursor) || void 0 === i ? void 0 : i.repaired
                    })
                }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (o(!0), null) : 429 === e.status ? s(e.body.retry_after * O.default.Millis.SECOND) : (o(!0), null))
            }
            let B = (e, t, n) => {
                let {
                    channel: i,
                    guild: l
                } = e;
                return null != i ? (0, h.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
                    channel: i,
                    guild: l
                })) : []
            };

            function b(e, t) {
                if (0 === t.length) return e;
                let n = [...e],
                    i = (0, R.buildApplicationCommands)(t).filter(e => {
                        let t = n.findIndex(t => t.id === e.id);
                        return !(t >= 0) || (n[t] = e, !1)
                    });
                return [...n, ...i]
            }

            function F(e) {
                let t = e.map(R.getApplicationCommandSection);
                return t.concat(h.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN])
            }
            let H = (e, t) => ({
                    type: t,
                    inputType: D.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }),
                w = [h.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN]];
            class G extends r.default.Store {
                initialize() {
                    this.waitFor(A.default), this.syncWith([S.default], () => {
                        this.shouldResetAll = !0
                    }), this.syncWith([A.default], k)
                }
                getChannelState(e, t) {
                    var n;
                    return null === (n = K.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
                }
                getOrInsertChannelState(e, t) {
                    let n = K.channelStates,
                        i = n.has(e);
                    if (M.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
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
                                [c.ApplicationCommandType.USER]: t(),
                                [c.ApplicationCommandType.PRIMARY_ENTRY_POINT]: t()
                            };
                        n.set(e, i)
                    }
                    return n.get(e)[t]
                }
                getApplicationSections(e, t) {
                    var n, i;
                    return null !== (i = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== i ? i : w
                }
                getQueryCommands(e, t, n) {
                    var i, l, a;
                    let s = this.getChannelState(e, t);
                    return null !== (a = null == s ? void 0 : null === (i = s.queries.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null == s ? void 0 : null === (l = s.pendingQueries.get(n)) || void 0 === l ? void 0 : l.commands
                }
                hasQueryResults(e, t, n) {
                    var i, l;
                    return null !== (l = null === (i = this.getChannelState(e, t)) || void 0 === i ? void 0 : i.queries.has(n)) && void 0 !== l && l
                }
                constructor(...e) {
                    super(...e), this.channelStates = new o({
                        max: 5
                    }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
                }
            }

            function x(e) {
                var t;
                let {
                    guildId: n
                } = e, i = g.default.getChannelId();
                return null != i && (null === (t = E.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) !== n ? W(n) : K.componentIsOpen ? (K.shouldResetGuild = n, !1) : W(n)
            }

            function W(e) {
                let t = N.default.getChannels(e),
                    n = t[0, N.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[N.GUILD_VOCAL_CHANNELS_KEY]),
                    i = K.channelStates.length;
                for (let e of n) K.channelStates.del(e.channel.id);
                return K.channelStates.length !== i
            }

            function Y() {
                let e = K.channelStates.length;
                return K.channelStates.keys().forEach(e => {
                    var t;
                    (null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && K.channelStates.del(e)
                }), K.channelStates.length !== e
            }

            function k() {
                var e, t, n;
                let i = null !== (n = null === (t = A.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
                    l = i !== K.viewNsfwCommands;
                if (l) {
                    if (K.viewNsfwCommands = i, !K.componentIsOpen) return Y();
                    K.shouldResetDMs = !0
                }
                return !1
            }

            function V(e) {
                return !!K.channelStates.has(e) && (K.channelStates.del(e), !0)
            }

            function q() {
                K.shouldResetAll = !1, K.shouldResetGuild = null, K.shouldResetDMs = !1, K.componentIsOpen = !1, K.channelStates.reset()
            }
            G.displayName = "ApplicationCommandSearchStore";
            let K = new G(d.default, {
                LOGOUT: q,
                CONNECTION_OPEN: q,
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
                    let {
                        channelId: t,
                        commandType: n,
                        state: i
                    } = e, l = K.channelStates.get(t);
                    if (null == l) return;
                    let a = l[n],
                        s = {
                            ...a,
                            ...i
                        };
                    l[n] = s, null == a.applicationCommands && null != s.applicationCommands && s.pendingQueries.forEach((e, t) => {
                        let {
                            context: n,
                            commandType: i,
                            limit: l
                        } = e;
                        Z({
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
                    } = e, s = null != C.default.getPendingReply(t.channel.id), o = Z({
                        context: t,
                        commandType: n,
                        query: i,
                        limit: l,
                        canOnlyUseTextCommands: s,
                        applicationId: a
                    });
                    !o && !s && $({
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
                        if (null != e.guild_id && x({
                                guildId: e.guild_id
                            })) return !0;
                    return !1
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: x,
                IMPERSONATE_UPDATE: x,
                IMPERSONATE_STOP: x,
                APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE(e) {
                    let {
                        isOpen: t
                    } = e;
                    if (K.componentIsOpen = t, K.shouldResetAll) {
                        q();
                        return
                    }
                    let n = !1;
                    return null != K.shouldResetGuild && (n = W(K.shouldResetGuild), K.shouldResetGuild = null), K.shouldResetDMs && (n = Y() || n, K.shouldResetDMs = !1), n
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e;
                    return V(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e;
                    return V(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t
                    } = e;
                    return V(t)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t
                    } = e;
                    return V(t)
                }
            });
            var j = K;
            let z = e => {
                if (null == e) return;
                let t = m.default.getViewingRoles(e);
                if (null == t) return;
                let n = Object.keys(t);
                return 0 === n.length && n.push(e), n
            };

            function X() {
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
                    canUseFrecency: s
                } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
                    discoveryInitialized: o,
                    topCursor: u,
                    scrollDownCursor: c,
                    applicationSections: m,
                    applicationCommands: C,
                    filteredSectionId: T,
                    sawFrecencySection: A
                } = (0, r.useStateFromStores)([K], () => K.getOrInsertChannelState(e.id, t), [e.id, t]), E = i.useCallback(n => {
                    d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                        channelId: e.id,
                        commandType: t,
                        state: n
                    })
                }, [e.id, t]);
                (0, I.usePrivateChannelIntegrationState)({
                    channelId: e.id
                });
                let N = i.useRef(!1),
                    g = (0, p.default)(),
                    M = i.useCallback(function(n, i) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (N.current) return;
                        N.current = !0;
                        let a = z(e.guild_id);
                        U(e.id, {
                            type: t,
                            roleIds: a,
                            ...n
                        }, {
                            abortable: l,
                            signal: g
                        }).then(e => {
                            N.current = !1, i(e)
                        })
                    }, [e.id, e.guild_id, t, g]),
                    O = (0, f.useCommandContext)(e),
                    D = (0, v.useTopCommands)(O),
                    L = (0, v.useTopRealCommands)(O),
                    w = (0, r.useStateFromStores)([S.default, _.default], () => (0, R.canUseApplicationCommands)(S.default, _.default, null != a && a, e), [a, e]);
                i.useEffect(() => {
                    if (o) return;
                    if (E({
                            discoveryInitialized: !0
                        }), !w || null != C && C.length > 0) return;
                    let t = e.isPrivate() ? {} : {
                        limit: l,
                        commandIds: o ? void 0 : L,
                        cursor: null != u ? u : void 0
                    };
                    M({
                        ...t,
                        includeApplications: null == m
                    }, e => {
                        if (null == e) return;
                        let t = b([], e.applicationCommands),
                            n = {
                                applicationCommands: t,
                                topCursor: e.prevCursor,
                                scrollDownCursor: e.nextCursor
                            };
                        if (null != e.applications) {
                            var i;
                            n.applicationSections = F(null !== (i = e.applications) && void 0 !== i ? i : [])
                        }
                        E(n)
                    }, !1)
                }, [C, e, l, w, m, o, u, M, L, E]);
                let G = i.useCallback(() => {
                        null != c && M({
                            limit: l,
                            cursor: c
                        }, e => {
                            if (null == e) return;
                            let t = !1 === e.repaired ? b([], e.applicationCommands) : b(null != C ? C : [], e.applicationCommands);
                            E({
                                applicationCommands: t,
                                scrollDownCursor: e.nextCursor
                            })
                        })
                    }, [l, M, c, C, E]),
                    x = i.useCallback(t => {
                        if (!N.current && t !== T) {
                            if (null == t) {
                                e.isPrivate() ? E({
                                    filteredSectionId: null,
                                    discoveryInitialized: !0
                                }) : E({
                                    filteredSectionId: null,
                                    applicationCommands: null,
                                    discoveryInitialized: !1
                                });
                                return
                            }!(t in h.BUILT_IN_SECTIONS || e.isPrivate()) && M({
                                applicationId: t
                            }, e => {
                                null != e && E({
                                    applicationCommands: b([], e.applicationCommands)
                                })
                            }), E({
                                filteredSectionId: t,
                                scrollDownCursor: null
                            })
                        }
                    }, [e, M, E, T]);
                X(), i.useEffect(() => () => {
                    var n;
                    (null === (n = K.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && x(null)
                }, []);
                let W = i.useMemo(() => B(O, t, a), [O, t, a]),
                    Y = i.useMemo(() => {
                        if (!s) return [];
                        let e = (w && null != C ? C : []).concat(W);
                        return e.filter(e => D.includes(e.id)).sort((e, t) => {
                            let n = y.default.getScoreWithoutLoadingLatest(O, e),
                                i = y.default.getScoreWithoutLoadingLatest(O, t);
                            return i - n
                        }).slice(0, P.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
                    }, [s, D, w, C, W, O]);
                i.useEffect(() => {
                    !A && Y.length > 0 && E({
                        sawFrecencySection: !0
                    })
                }, [E, Y, A]);
                let k = i.useMemo(() => {
                        var e;
                        let t = [];
                        return (Y.length > 0 || A) && (t = t.concat(h.BUILT_IN_SECTIONS[P.BuiltInSectionId.FRECENCY])), w && null != m && (t = t.concat(m)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== P.BuiltInSectionId.BUILT_IN && (t = t.concat(h.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN])), t
                    }, [w, m, Y, A]),
                    V = w && (!o || N.current || null != c),
                    q = i.useMemo(() => {
                        if (!V) return [];
                        let e = [];
                        for (let i = 0; i < n; i++) e.push(H(i, t));
                        return e
                    }, [V, n, t]),
                    {
                        activeSections: j,
                        commandsByActiveSection: Q
                    } = i.useMemo(() => {
                        let e = [],
                            t = [];
                        return k.forEach(n => {
                            let i;
                            (null == T || n.id === T) && ((i = n.id === P.BuiltInSectionId.BUILT_IN ? V ? [] : [...W] : n.id === P.BuiltInSectionId.FRECENCY ? [...Y] : (null != C ? C : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === T) && (e.push(n), t.push({
                                section: n,
                                data: i
                            }))
                        }), t.length > 0 && q.length > 0 && t[t.length - 1].data.push(...q), {
                            activeSections: e,
                            commandsByActiveSection: t
                        }
                    }, [k, Y, C, W, q, V, T]),
                    Z = i.useMemo(() => {
                        let e = [];
                        return e = e.concat(Y), w && null != C && (e = e.concat(C)), e = e.concat(W)
                    }, [w, Y, C, W]);
                return {
                    filterSection: x,
                    scrollDown: G,
                    loading: N,
                    filteredSectionId: T,
                    hasMoreAfter: V,
                    commands: Z,
                    sectionDescriptors: k,
                    activeSections: j,
                    commandsByActiveSection: Q,
                    placeholders: q
                }
            }

            function Z(e) {
                let t, {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        canOnlyUseTextCommands: s,
                        applicationCommands: o,
                        scrollDownCursor: r,
                        applications: u,
                        applicationId: d = null
                    } = e,
                    c = K.getOrInsertChannelState(n.channel.id, i);
                if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
                else if (c.queries.has(l)) return !0;
                if (null != u && (c.applicationSections = F(u)), s) t = [];
                else {
                    var p;
                    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : b([], null != o ? o : [])
                }
                let f = B(n, i, s),
                    m = (0, R.canUseApplicationCommands)(S.default, _.default, s, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == o),
                    I = [],
                    C = !1;
                if (m)
                    for (let e = l.length - 1; e > 0; e -= 1) {
                        let n = l.slice(0, e),
                            i = c.queries.get(n);
                        if (null != i) {
                            C = i.done, i.commands.forEach(e => {
                                null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && I.push(e)
                            });
                            break
                        }
                    }
                C && (m = !1);
                let A = [],
                    E = l.split(" ");
                if ([...t, ...I, ...f].forEach(e => {
                        var t;
                        let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                            i = et(l, E, e, n);
                        i > 0 && A.push({
                            ...e,
                            score: i
                        })
                    }), T.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                        if (e.score !== t.score) return t.score - e.score;
                        let i = y.default.getScoreWithoutLoadingLatest(n, e),
                            l = y.default.getScoreWithoutLoadingLatest(n, t);
                        return i !== l ? l - i : e.displayName.localeCompare(t.displayName)
                    }), m || null != r)
                    for (let e = 0; e < 4; e += 1) A.push({
                        ...H(e, i),
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
            let $ = a(e => {
                    var t;
                    let {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        applicationId: s
                    } = e;
                    if (!(0, R.canUseApplicationCommands)(S.default, _.default, !1, n.channel)) return;
                    let o = K.getOrInsertChannelState(n.channel.id, i);
                    if (n.channel.isPrivate()) {
                        !o.discoveryInitialized && null == o.applicationCommands && U(n.channel.id, {
                            type: i,
                            includeApplications: null == o.applicationSections
                        }).then(e => {
                            var t;
                            if (null == e) return;
                            let l = {
                                applicationCommands: b([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
                            };
                            null != e.applications && (l.applicationSections = F(e.applications)), d.default.dispatch({
                                type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                                channelId: n.channel.id,
                                commandType: i,
                                state: l
                            })
                        });
                        return
                    }(null === (t = o.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && U(n.channel.id, {
                        type: i,
                        roleIds: z(n.channel.guild_id),
                        query: l,
                        limit: a,
                        applicationId: s,
                        includeApplications: !o.discoveryInitialized && null == o.applicationSections
                    }).then(e => {
                        if (null != e) K.channelStates.has(n.channel.id) && (Z({
                            context: n,
                            commandType: i,
                            query: l,
                            limit: a,
                            canOnlyUseTextCommands: !1,
                            applicationCommands: e.applicationCommands,
                            scrollDownCursor: e.nextCursor,
                            applications: e.applications,
                            applicationId: s
                        }), K.emitChange())
                    })
                }, 250, {
                    leading: !0,
                    trailing: !0,
                    maxWait: 750
                }),
                J = async (e, t) => {
                    var n;
                    let {
                        context: i,
                        commandType: l,
                        query: a,
                        limit: s
                    } = e;
                    if (!(0, R.canUseApplicationCommands)(S.default, _.default, !1, i.channel) || i.channel.isPrivate()) return;
                    let o = K.getOrInsertChannelState(i.channel.id, l),
                        r = null === (n = o.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
                    null != r && await U(i.channel.id, {
                        type: l,
                        roleIds: z(i.channel.guild_id),
                        query: a,
                        limit: s,
                        cursor: r,
                        includeApplications: !o.discoveryInitialized && null == o.applicationSections
                    }, {
                        abortable: !0,
                        signal: t
                    }).then(e => {
                        var t, n;
                        if (null == e || !K.channelStates.has(i.channel.id)) return;
                        let s = null !== (n = null === (t = o.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== D.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
                            r = b([], e.applicationCommands),
                            u = [],
                            d = a.split(" ");
                        r.forEach(e => {
                            var t;
                            if (null != s.find(t => t.id === e.id)) return;
                            let n = null === (t = o.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                                i = et(a, d, e, n);
                            i > 0 && u.push({
                                ...e,
                                score: i
                            })
                        }), T.FrecencyUserSettingsActionCreators.loadIfNecessary(), u.sort((e, t) => {
                            if (e.score !== t.score) return t.score - e.score;
                            let n = y.default.getScoreWithoutLoadingLatest(i, e),
                                l = y.default.getScoreWithoutLoadingLatest(i, t);
                            return n !== l ? l - n : e.displayName.localeCompare(t.displayName)
                        });
                        let c = e.nextCursor;
                        if (null != c)
                            for (let e = 0; e < 4; e += 1) u.push({
                                ...H(e, l),
                                score: 0
                            });
                        o.queries.set(a, {
                            commands: e.repaired ? u : [...s, ...u],
                            done: !0,
                            scrollDownCursor: c
                        }), K.emitChange()
                    })
                };

            function ee(e, t, n, l) {
                X();
                let a = (0, p.default)(),
                    {
                        commands: s,
                        applicationSections: o
                    } = (0, r.useStateFromStoresObject)([K], () => {
                        var i, l, a;
                        let {
                            queries: s,
                            pendingQueries: o,
                            applicationSections: r
                        } = K.getOrInsertChannelState(e.id, t);
                        return {
                            applicationSections: r,
                            commands: null !== (a = null === (i = s.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = o.get(n)) || void 0 === l ? void 0 : l.commands
                        }
                    }, [e.id, t, n]);
                i.useEffect(() => {
                    d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                        context: (0, f.getCommandContext)(e),
                        query: n,
                        limit: l,
                        commandType: t
                    })
                }, [e, t, n, l]);
                let u = i.useRef(!1),
                    c = i.useCallback(() => {
                        !u.current && (u.current = !0, J({
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
                    commands: s,
                    sections: null != o ? o : w,
                    scrollDown: c
                }
            }

            function et(e, t, n, i) {
                var l;
                let a = n.name,
                    s = n.displayName;
                if (a.startsWith(e) || s.startsWith(e)) return 6;
                if (a.startsWith(t[0])) {
                    let e = a.split(" ").slice(1).join(" ");
                    if (e.startsWith(t.slice(1).join(" "))) return 5
                }
                if (s.startsWith(t[0])) {
                    let e = s.split(" ").slice(1).join(" ");
                    if (e.startsWith(t.slice(1).join(" "))) return 5
                }
                if (a.includes(e) || (null == s ? void 0 : s.includes(e))) return 4;
                let o = !1;
                for (let {
                        name: t,
                        serverLocalizedName: i
                    }
                    of null !== (l = n.options) && void 0 !== l ? l : []) {
                    if (t.startsWith(e) || "".concat(a, " ").concat(t).startsWith(e)) return 3;
                    if (null != s && "".concat(s, " ").concat(t).startsWith(e)) return 2;
                    if (null != i && (i.startsWith(e) || "".concat(a, " ").concat(i).startsWith(e) || null != s && "".concat(s, " ").concat(i).startsWith(e))) return 3;
                    (t.includes(e) || (null == i ? void 0 : i.includes(e))) && (o = !0)
                }
                return o ? 2 : (null == i ? void 0 : i.name.toLocaleLowerCase().startsWith(e)) ? 1 : 0
            }
        },
        123373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                buildPermissionContext: function() {
                    return _
                },
                usePermissionContext: function() {
                    return C
                },
                computeCommandContextType: function() {
                    return E
                },
                getContextGuildId: function() {
                    return N
                }
            });
            var i = n("884691"),
                l = n("316693"),
                a = n("446674"),
                s = n("798609"),
                o = n("38654"),
                r = n("845579"),
                u = n("233069"),
                d = n("271938"),
                c = n("42203"),
                p = n("26989"),
                f = n("957255"),
                m = n("697218"),
                I = n("49111");

            function _(e, t) {
                var n, i, l, a, s;
                let f;
                f = e instanceof u.ChannelRecordBase && e.isThread() ? null !== (l = c.default.getChannel(e.parent_id)) && void 0 !== l ? l : e : e;
                let I = N(f),
                    _ = r.ViewNsfwCommands.getSetting(),
                    C = d.default.getId(),
                    E = null !== (a = null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
                    S = null != I && null !== (s = null === (i = p.default.getMember(I, C)) || void 0 === i ? void 0 : i.roles) && void 0 !== s ? s : [],
                    g = o.default.isViewingRoles(I),
                    {
                        computedPermissions: M,
                        hasBaseAccessPermissions: O
                    } = A(f);
                return {
                    context: f,
                    userId: C,
                    roleIds: S,
                    isImpersonating: g,
                    commandType: t,
                    computedPermissions: M,
                    hasBaseAccessPermissions: O,
                    allowNsfw: T(f, E, _)
                }
            }

            function C(e, t) {
                let n = i.useMemo(() => {
                        if (e instanceof u.ChannelRecordBase && e.isThread()) {
                            var t;
                            return null !== (t = c.default.getChannel(e.parent_id)) && void 0 !== t ? t : e
                        }
                        return e
                    }, [e]),
                    l = N(n),
                    s = r.ViewNsfwCommands.useSetting(),
                    f = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
                    I = (0, a.useStateFromStores)([m.default], () => {
                        var e, t;
                        return null !== (t = null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
                    }),
                    _ = (0, a.useStateFromStoresArray)([p.default], () => {
                        var e, t;
                        return null != l && null !== (t = null === (e = p.default.getMember(l, f)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
                    }),
                    C = (0, a.useStateFromStores)([o.default], () => o.default.isViewingRoles(l));
                return i.useMemo(() => {
                    let {
                        computedPermissions: e,
                        hasBaseAccessPermissions: i
                    } = A(n);
                    return {
                        context: n,
                        userId: f,
                        roleIds: _,
                        commandType: t,
                        isImpersonating: C,
                        computedPermissions: e,
                        hasBaseAccessPermissions: i,
                        allowNsfw: T(n, I, s)
                    }
                }, [t, n, C, _, f, I, s])
            }

            function T(e, t, n) {
                return !!t && (!(e instanceof u.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
            }

            function A(e) {
                let t;
                if (e instanceof u.ChannelRecordBase && e.isPrivate()) return {
                    computedPermissions: l.default.deserialize(0),
                    hasBaseAccessPermissions: !0
                };
                let n = f.default.computePermissions(e);
                return t = !!l.default.has(n, I.Permissions.ADMINISTRATOR) || (e instanceof u.ChannelRecordBase ? l.default.has(n, I.Permissions.VIEW_CHANNEL) && l.default.has(n, I.Permissions.USE_APPLICATION_COMMANDS) : l.default.has(n, I.Permissions.VIEW_CHANNEL)), {
                    computedPermissions: n,
                    hasBaseAccessPermissions: t
                }
            }

            function E(e, t) {
                return e instanceof u.ChannelRecordBase && null == e.guild_id ? e.type === I.ChannelTypes.DM && e.getRecipientId() === t ? s.ApplicationCommandContextType.BOT_DM : s.ApplicationCommandContextType.PRIVATE_CHANNEL : s.ApplicationCommandContextType.GUILD
            }

            function N(e) {
                return e instanceof u.ChannelRecordBase ? e.guild_id : e.id
            }
        },
        217946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HasAccessResult: function() {
                    return i
                },
                hasAccess: function() {
                    return _
                },
                computeAllowedForChannel: function() {
                    return A
                },
                computeAllowedForUser: function() {
                    return E
                }
            }), n("222007");
            var i, l, a = n("627445"),
                s = n.n(a),
                o = n("316693"),
                r = n("892692"),
                u = n("233069"),
                d = n("305961"),
                c = n("524768"),
                p = n("389153"),
                f = n("123373"),
                m = n("317041"),
                I = n("49111");

            function _(e, t, n, i, l) {
                let {
                    context: a,
                    commandType: r,
                    allowNsfw: c,
                    computedPermissions: _,
                    userId: C,
                    roleIds: T,
                    isImpersonating: N,
                    hasBaseAccessPermissions: S
                } = t;
                if (e.type !== r) return 2;
                if (e.nsfw && !c) return 1;
                let g = (0, f.computeCommandContextType)(a, l);
                if (null != e.contexts && !e.contexts.includes(g)) return 4;
                if (null != e.predicate && a instanceof u.ChannelRecordBase) {
                    let t = d.default.getGuild(a.guild_id);
                    if (!e.predicate({
                            channel: a,
                            guild: t
                        })) return 3
                }
                if (e.applicationId === m.BuiltInSectionId.BUILT_IN) return 0;
                let M = (0, f.getContextGuildId)(a);
                if (null == M || o.default.has(_, I.Permissions.ADMINISTRATOR)) return 0;
                if (!S) return 5;
                if (a instanceof u.ChannelRecordBase) {
                    s(void 0 !== i, "missing applicationAllowedForChannel");
                    let t = A(e.permissions, a, M);
                    if (function(e) {
                            return !1 === e
                        }(t) || ! function(e) {
                            return !0 === e
                        }(t) && function(e) {
                            return !1 === e
                        }(i)) return 6
                }
                let O = E(e.permissions, M, C, T, N);
                return function(e) {
                    return !0 === e
                }(O) ? 0 : function(e) {
                    return !1 === e
                }(O) ? 7 : function(e) {
                    return !1 === e
                }(n) || null != e.defaultMemberPermissions && !(!o.default.equals(e.defaultMemberPermissions, p.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && o.default.has(_, e.defaultMemberPermissions)) ? 7 : 0
            }

            function C(e) {
                return !0 === e
            }

            function T(e) {
                return !1 === e
            }

            function A(e, t, n) {
                if (null == e) return null;
                let i = t.id;
                if (t.isThread()) {
                    var l;
                    i = null !== (l = t.parent_id) && void 0 !== l ? l : t.id
                }
                let a = e[(0, r.toPermissionKey)(i, c.ApplicationCommandPermissionType.CHANNEL)];
                if (null != a) return a.permission;
                let s = e[(0, r.toPermissionKey)((0, p.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
                return null != s ? s.permission : null
            }

            function E(e, t, n, i, l) {
                if (null == e) return null;
                if (!l) {
                    let t = e[(0, r.toPermissionKey)(n, c.ApplicationCommandPermissionType.USER)];
                    if (null != t) return t.permission
                }
                let a = !1;
                for (let t of i) {
                    let n = e[(0, r.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
                    if (null != n) {
                        if (n.permission) return !0;
                        a = !0
                    }
                }
                if (a) return !1;
                let s = e[(0, r.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
                return null != s ? s.permission : null
            }(l = i || (i = {}))[l.ALLOWED = 0] = "ALLOWED", l[l.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", l[l.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", l[l.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", l[l.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", l[l.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", l[l.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", l[l.USER_DENIED = 7] = "USER_DENIED"
        },
        150692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("917351"),
                a = n.n(l),
                s = n("77078"),
                o = n("450911"),
                r = n("819689"),
                u = n("798609"),
                d = n("679653"),
                c = n("27618"),
                p = n("697218"),
                f = n("524768"),
                m = n("317041"),
                I = n("49111"),
                _ = n("782340");

            function C(e) {
                switch (e) {
                    case I.ChannelTextAreaIntegrations.GIF.title:
                    case I.ChannelTextAreaIntegrations.TENOR.title:
                        return _.default.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            let T = [...a(I.ChannelTextAreaIntegrations).values().map(e => ({
                id: e.commandId,
                name: e.command,
                displayName: e.command,
                type: u.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
                applicationId: m.BuiltInSectionId.BUILT_IN,
                get description() {
                    return C(e.title)
                },
                get displayDescription() {
                    return C(e.title)
                },
                options: e.type === I.ChannelTextAreaIntegrationTypes.GIF ? [{
                    name: "query",
                    displayName: "query",
                    type: u.ApplicationCommandOptionType.STRING,
                    get description() {
                        return _.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    get displayDescription() {
                        return _.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
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
                    return _.default.Messages.LEAVE_GROUP_DM
                },
                get displayDescription() {
                    return _.default.Messages.LEAVE_GROUP_DM
                },
                options: [{
                    name: "silent",
                    displayName: "silent",
                    type: u.ApplicationCommandOptionType.BOOLEAN,
                    get description() {
                        return _.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
                    },
                    get displayDescription() {
                        return _.default.Messages.LEAVE_GROUP_DM_SILENTLY
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
                    } = t, u = (0, d.computeChannelName)(a, p.default, c.default), f = _.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                        name: u
                    }), m = _.default.Messages.LEAVE_GROUP_DM_BODY.format({
                        name: u
                    }), I = null !== (l = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== l && l;
                    async function C() {
                        try {
                            await o.default.closePrivateChannel(a.id, void 0, I)
                        } catch (e) {
                            r.default.sendBotMessage(a.id, _.default.Messages.LEAVE_GROUP_DM_ERROR)
                        }
                    }
                    a.isManaged() && (f = _.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name: u
                    }), m = _.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name: u
                    })), (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
                        header: f,
                        confirmText: _.default.Messages.LEAVE_GROUP_DM,
                        cancelText: _.default.Messages.CANCEL,
                        onConfirm: C,
                        ...e,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }))
                }
            }];
            var A = T
        },
        605393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FREQUENCY_ITEM_LIMIT: function() {
                    return c
                },
                default: function() {
                    return C
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                s = n("913144"),
                o = n("798609"),
                r = n("80507"),
                u = n("374363"),
                d = n("397336");
            let c = 250,
                p = {
                    pendingUsages: []
                },
                f = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
                    lookupKey: e => e,
                    afterCompute: () => {},
                    numFrequentlyItems: c
                });

            function m(e) {
                p.pendingUsages.push({
                    key: e,
                    timestamp: Date.now()
                }), f.track(e), f.compute()
            }

            function I() {
                var e, t;
                let n = u.default.frecencyWithoutFetchingLatest,
                    i = null !== (t = null === (e = n.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
                f.overwriteHistory(l.mapValues(i, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), p.pendingUsages)
            }
            class _ extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (p = e), this.syncWith([u.default], I)
                }
                getState() {
                    return p
                }
                hasPendingUsage() {
                    return p.pendingUsages.length > 0
                }
                getApplicationFrecencyWithoutLoadingLatest() {
                    return f
                }
                getScoreWithoutLoadingLatest(e) {
                    var t;
                    return null !== (t = f.getScore(e)) && void 0 !== t ? t : 0
                }
                getTopApplicationsWithoutLoadingLatest() {
                    return f.frequently
                }
            }
            _.displayName = "ApplicationFrecencyStore", _.persistKey = "ApplicationFrecency";
            var C = new _(s.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t
                    } = e;
                    if (t.type !== o.ApplicationCommandType.CHAT) return !1;
                    m(t.applicationId)
                },
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    m(t)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    p.pendingUsages = []
                }
            })
        },
        670902: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                computeThreadIdsSnapshot: function() {
                    return b
                },
                default: function() {
                    return w
                }
            }), n("222007");
            var l = n("917351"),
                a = n.n(l),
                s = n("335710"),
                o = n("249654"),
                r = n("446674"),
                u = n("913144"),
                d = n("689275"),
                c = n("610730"),
                p = n("271938"),
                f = n("42203"),
                m = n("660478"),
                I = n("18494"),
                _ = n("449008"),
                C = n("786742");
            let T = [],
                A = null,
                E = null,
                N = new Set,
                S = s.ThreadSortOrder.LATEST_ACTIVITY,
                g = 0,
                M = [],
                O = !1,
                h = [],
                v = a.chain(T),
                y = a.chain(T),
                D = new Set,
                R = new Set;

            function P(e) {
                var t;
                return null !== (t = m.default.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function L(e) {
                return function(t, n) {
                    if ((0, C.isForumPostPinned)(t)) return -1;
                    if ((0, C.isForumPostPinned)(n)) return 1;
                    if (e === s.ThreadSortOrder.LATEST_ACTIVITY) return o.default.compare(P(n), P(t));
                    else return o.default.compare(n, t)
                }
            }

            function U() {
                M = [], i = null, E = null, N = new Set, S = s.ThreadSortOrder.LATEST_ACTIVITY, g = 0, h = [], v = a.chain(T), y = a.chain(T), R.clear(), D.clear()
            }

            function B() {
                var e;
                let t = I.default.getChannelId();
                if (null == t || !(null === (e = f.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
                F({
                    refreshThreadIds: !0
                })
            }

            function b(e) {
                let t = f.default.getChannel(e);
                return null == t ? [] : Object.values(d.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }).sort(L(S))
            }

            function F(e) {
                var t;
                let n = f.default.getChannel(E);
                if (null == n) return;
                (null == e ? void 0 : e.refreshThreadIds) && (h = Object.values(d.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }), g = 0, O = !0), 0 !== D.size && (h = h.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (h = Array.from(new Set([...h, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = a.chain(h).sort(L(s.ThreadSortOrder.LATEST_ACTIVITY)), v = a.chain(h).sort(L(s.ThreadSortOrder.CREATION_DATE)));
                let l = S === s.ThreadSortOrder.LATEST_ACTIVITY ? y : v,
                    o = l.value();
                M = 0 === N.size ? o : o.filter((t = N, function(e) {
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
            class H extends r.default.Store {
                initialize() {
                    this.waitFor(f.default, d.default, I.default, m.default)
                }
                getNewThreadCount() {
                    return g
                }
                getCanAckThreads() {
                    return O
                }
                getThreadIds(e, t, n) {
                    let i = e !== E,
                        l = !(0, _.areSetsEqual)(n, N),
                        a = t !== S;
                    return E = e, N = n, S = t, i ? F({
                        refreshThreadIds: !0
                    }) : a ? F({
                        sortThreadIds: !0
                    }) : l && F(), M
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
            H.displayName = "ForumActivePostStore";
            var w = new H(u.default, {
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
                    F({
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
                    let n = (0, C.isForumPostPinned)(t.id),
                        i = R.has(t.id);
                    if (n && !i) R.add(t.id), F({
                        sortThreadIds: !0
                    });
                    else {
                        if (n || !i) return !1;
                        R.delete(t.id), F({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E) return !1;
                    D.add(t.id), F({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== E) return !1;
                    F({
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
            }), n("222007");
            var i = n("446674"),
                l = n("305961"),
                a = n("957255"),
                s = n("697218"),
                o = n("991170"),
                r = n("49111");

            function u(e, t) {
                let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, l.default, a.default], d = i.getGuild(e), c = n.getUser(t);
                if (null == d || null == c || c.isNonUserBot()) return !1;
                let p = d.isOwner(c) || o.default.can({
                    permission: r.Permissions.ADMINISTRATOR,
                    user: c,
                    context: d
                });
                return !p && u.canManageUser(r.Permissions.MODERATE_MEMBERS, c, d)
            }

            function d(e, t) {
                return (0, i.useStateFromStores)([s.default, l.default, a.default], () => u(e, t, [s.default, l.default, a.default]), [e, t])
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
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("845579"),
                l = n("42887"),
                a = n("829536");

            function s(e) {
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
                    return o
                },
                getAutoArchiveDuration: function() {
                    return r
                }
            });
            var i = n("661201"),
                l = n.n(i);
            n("866227");
            var a = n("648564"),
                s = n("782340");

            function o() {
                return [{
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
                    value: 60
                }, {
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
                    value: 1440
                }, {
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
                    value: 4320
                }, {
                    label: s.default.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
                    value: 10080
                }]
            }

            function r(e, t) {
                var n;
                return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : a.DEFAULT_AUTO_ARCHIVE_DURATION
            }
            l(() => o().map(e => e.value))
        },
        730498: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PrivateThreadMode: function() {
                    return i
                },
                usePrivateThreadMode: function() {
                    return y
                },
                getIsPrivate: function() {
                    return D
                },
                getDefaultThreadName: function() {
                    return R
                },
                useCreateThreadCommon: function() {
                    return P
                },
                createThread: function() {
                    return L
                },
                useCreateForumPostCommon: function() {
                    return U
                }
            }), n("781738"), n("424973"), n("222007");
            var i, l, a = n("884691"),
                s = n("872717"),
                o = n("913144"),
                r = n("404118"),
                u = n("295426"),
                d = n("819689"),
                c = n("81594"),
                p = n("670902"),
                f = n("867965"),
                m = n("884351"),
                I = n("804888"),
                _ = n("42203"),
                C = n("474643"),
                T = n("377253"),
                A = n("401848"),
                E = n("718517"),
                N = n("568734"),
                S = n("252862"),
                g = n("300322"),
                M = n("24337"),
                O = n("648564"),
                h = n("49111"),
                v = n("782340");

            function y(e) {
                let t = (0, g.useCanStartPublicThread)(e),
                    n = (0, g.useCanStartPrivateThread)(e);
                return n ? t ? 2 : 3 : 1
            }

            function D(e, t) {
                var n;
                if (3 === t) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function R(e, t) {
                var n, i, l, a;
                let s = null == t ? null : T.default.getMessage(e.id, t),
                    o = null !== (l = null == s ? void 0 : null === (i = s.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
                if ("" !== o) return o.length > 40 ? o.substring(0, 40) + "..." : o;
                {
                    let t = m.default.unparse(null !== (a = null == s ? void 0 : s.content) && void 0 !== a ? a : "", e.id, !0),
                        n = (0, M.default)(t.split("\n")[0], !0);
                    n = n.replace(/^[ #-]+/, "");
                    let i = [];
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

            function P(e) {
                let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: o,
                    onThreadCreated: r,
                    useDefaultThreadName: p,
                    uploadHandler: f
                } = e;
                return a.useCallback(async (e, a, I) => {
                    var T;
                    let A = null == n,
                        E = D(i, l),
                        N = null !== (T = i.name) && void 0 !== T ? T : "";
                    if ("" === N && p) {
                        let e = R(t, n);
                        N = "" !== e ? e : v.default.Messages.THREAD
                    }
                    let g = (0, S.getAutoArchiveDuration)(t),
                        M = _.default.getChannel(n),
                        O = await B(t, () => {
                            let e = null != n ? h.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : h.Endpoints.CHANNEL_THREADS(t.id);
                            return s.default.post({
                                url: e,
                                body: {
                                    name: N,
                                    type: E ? h.ChannelTypes.PRIVATE_THREAD : t.type === h.ChannelTypes.GUILD_ANNOUNCEMENT ? h.ChannelTypes.ANNOUNCEMENT_THREAD : h.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: g,
                                    location: o
                                }
                            })
                        });
                    O !== M && (u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), null == r || r(O), (A || e.length > 0 || null != a && a.length > 0 || null != I && I.length > 0) && function(e, t, n, i, l) {
                        if (null != l && null != i && i.length > 0) l(e, i, t, n);
                        else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                        else d.default.sendMessage(e.id, m.default.parse(e, t))
                    }(O, e, a, I, f)), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage)
                }, [t, n, i, r, l, o, p, f])
            }

            function L(e, t, n, i, l) {
                return B(e, () => s.default.post({
                    url: h.Endpoints.CHANNEL_THREADS(e.id),
                    body: {
                        name: t,
                        type: n,
                        auto_archive_duration: i,
                        location: l
                    }
                }))
            }

            function U(e) {
                let {
                    parentChannel: t,
                    name: n,
                    appliedTags: i,
                    onThreadCreated: l,
                    upload: o
                } = e;
                return a.useCallback(async (e, a, r) => {
                    let d = 0,
                        [p, m] = (0, I.default)(e);
                    p && (e = m, d = (0, N.addFlag)(d, h.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let _ = (0, S.getAutoArchiveDuration)(t, null),
                        T = h.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                        A = {
                            name: n,
                            auto_archive_duration: _,
                            applied_tags: i,
                            message: {
                                content: e,
                                sticker_ids: a,
                                flags: 0 !== d ? d : void 0
                            }
                        },
                        E = await B(t, () => null != r && r.length > 0 ? o(T, A, r) : s.default.post({
                            url: T,
                            body: A
                        }));
                    return u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: E.id
                    }), null == l || l(E), E
                }, [t, n, l, i, o])
            }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
            async function B(e, t) {
                let n;
                let i = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? r.default.show({
                        title: v.default.Messages.ERROR,
                        body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                    }) : (o.default.dispatch({
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: A.SlowmodeType.CreateThread,
                        channelId: e.id
                    }), o.default.dispatch({
                        type: "THREAD_CREATE_LOCAL",
                        channelId: n.body.id
                    }))
                } catch (t) {
                    var l, a, s, u, d, c;
                    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === h.AbortCodes.TOO_MANY_THREADS) r.default.show({
                        title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                        body: i ? v.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : v.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === h.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) r.default.show({
                        title: v.default.Messages.CANNOT_CREATE_THREAD,
                        body: v.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === h.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && o.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: A.SlowmodeType.CreateThread,
                            cooldownMs: n * E.default.Millis.SECOND
                        })
                    } else if (429 === t.status) r.default.show({
                        title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                        body: v.default.Messages.RATE_LIMITED
                    });
                    else if (O.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
                    else {
                        if (O.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                            null == t.body && n(), p.default.addConditionalChangeListener(() => {
                                let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let i = _.default.getChannel(t);
                                    return o.default.wait(() => {
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
                    null == n.body && t(), _.default.addConditionalChangeListener(() => {
                        let t = _.default.getChannel(n.body.id);
                        if (null != t) return o.default.wait(() => {
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
//# sourceMappingURL=94816.d43ce1702a07a65fd090.js.map