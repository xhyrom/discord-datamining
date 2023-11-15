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
        589777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BUILT_IN_SECTIONS: function() {
                    return R
                },
                getBuiltInCommands: function() {
                    return U
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
                _ = n("252862"),
                I = n("730498"),
                C = n("300322"),
                T = n("845579"),
                A = n("42203"),
                E = n("957255"),
                N = n("697218"),
                S = n("158998"),
                M = n("524768"),
                g = n("317041"),
                O = n("49111"),
                h = n("903639"),
                v = n("782340");
            let D = n("150692").default,
                y = (e, t) => {
                    var n;
                    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
                },
                R = {
                    [g.BuiltInSectionId.BUILT_IN]: {
                        id: g.BuiltInSectionId.BUILT_IN,
                        type: M.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return v.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                        }
                    },
                    [g.BuiltInSectionId.FRECENCY]: {
                        id: g.BuiltInSectionId.FRECENCY,
                        type: M.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return v.default.Messages.FREQUENTLY_USED
                        }
                    }
                },
                P = [...D, {
                    id: "-1",
                    name: "shrug",
                    displayName: "shrug",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_SHRUG_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = y(e, "message")) && void 0 !== t ? t : "";
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
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = y(e, "message")) && void 0 !== t ? t : "";
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
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                        }
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = y(e, "message")) && void 0 !== t ? t : "";
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
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_TTS_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    predicate: e => {
                        let {
                            channel: t
                        } = e;
                        return !t.isPrivate() && T.EnableTTSCommand.getSetting() && E.default.can(O.Permissions.SEND_TTS_MESSAGES, t)
                    },
                    execute: e => {
                        var t;
                        let n = null !== (t = y(e, "message")) && void 0 !== t ? t : "";
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
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_ME_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = y(e, "message")) && void 0 !== t ? t : "";
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
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_SPOILER_DESCRIPTION
                    },
                    options: [{
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: e => {
                        var t;
                        let n = null !== (t = y(e, "message")) && void 0 !== t ? t : "";
                        return {
                            content: (0, O.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                        }
                    }
                }, {
                    id: "-7",
                    name: "nick",
                    displayName: "nick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_NICK_DESCRIPTION
                    },
                    options: [{
                        name: "new_nick",
                        displayName: "new_nick",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
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
                        let a = null !== (n = y(e, "new_nick")) && void 0 !== n ? n : "";
                        r.default.changeNickname(i.id, l.id, O.ME, a || "")
                    }
                }, {
                    id: "-10",
                    name: "thread",
                    displayName: "thread",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_THREAD_DESCRIPTION
                    },
                    options: [{
                        name: "name",
                        displayName: "name",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
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
                        } = t, a = null !== (n = y(e, "name")) && void 0 !== n ? n : "", s = null !== (i = y(e, "message")) && void 0 !== i ? i : "", r = await (0, I.createThread)(l, a, o.ChannelTypes.PUBLIC_THREAD, (0, _.getAutoArchiveDuration)(l, null), "Slash Command");
                        c.default.sendMessage(r.id, m.default.parse(r, s))
                    }
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_KICK_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return v.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
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
                        let a = null !== (n = y(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(O.Permissions.KICK_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_UNABLE);
                            return
                        }
                        let s = async () => {
                            var t;
                            let n = N.default.getUser(a);
                            if (null == n) throw Error();
                            await d.default.kickUser(i.id, a, null !== (t = y(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                user: S.default.getUserTag(n)
                            }))
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_ERROR)
                        })
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_BAN_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return v.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "delete_messages",
                        displayName: "delete_messages",
                        type: p.ApplicationCommandOptionType.INTEGER,
                        get description() {
                            return v.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return [{
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                                value: 0
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                                value: O.Durations.HOUR
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * O.Durations.HOUR
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * O.Durations.HOUR
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: O.Durations.DAY
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * O.Durations.DAY
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * O.Durations.DAY
                            }]
                        }
                    }, {
                        name: "reason",
                        displayName: "reason",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
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
                        let a = null !== (n = y(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(O.Permissions.BAN_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_UNABLE);
                            return
                        }
                        let s = async () => {
                            var t, n;
                            if ("" === a) throw Error();
                            let s = null !== (t = y(e, "delete_messages")) && void 0 !== t ? t : 0,
                                o = null !== (n = y(e, "reason")) && void 0 !== n ? n : "",
                                r = N.default.getUser(a);
                            await d.default.banUser(i.id, a, s, o), c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                user: null != r ? S.default.getUserTag(r) : a
                            }))
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_ERROR)
                        })
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return v.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "duration",
                        displayName: "duration",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                        },
                        required: !0,
                        get choices() {
                            return (0, h.getDisableCommunicationDurationOptions)().map(e => ({
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
                            return v.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
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
                        let l = y(e, "user");
                        if (!(0, f.canToggleCommunicationDisableOnUser)(n.id, l)) {
                            c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_UNABLE);
                            return
                        }
                        let a = async () => {
                            var t, a;
                            let o = null !== (t = y(e, "duration")) && void 0 !== t ? t : "",
                                r = null !== (a = y(e, "reason")) && void 0 !== a ? a : "",
                                u = N.default.getUser(l);
                            if (null == u) throw Error();
                            await d.default.setCommunicationDisabledUntil({
                                guildId: n.id,
                                userId: l,
                                communicationDisabledUntilTimestamp: s().add(o, "s").toISOString(),
                                duration: o,
                                reason: r
                            }), c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: S.default.getUserTag(u),
                                duration: o
                            }))
                        };
                        a().catch(() => {
                            c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_ERROR)
                        })
                    }
                }, {
                    id: "-14",
                    name: "msg",
                    displayName: "msg",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: M.ApplicationCommandInputType.BUILT_IN,
                    applicationId: g.BuiltInSectionId.BUILT_IN,
                    get description() {
                        return v.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    get displayDescription() {
                        return v.default.Messages.COMMAND_MSG_DESCRIPTION
                    },
                    options: [{
                        name: "user",
                        displayName: "user",
                        type: p.ApplicationCommandOptionType.USER,
                        get description() {
                            return v.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                        },
                        required: !0
                    }, {
                        name: "message",
                        displayName: "message",
                        type: p.ApplicationCommandOptionType.STRING,
                        get description() {
                            return v.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        get displayDescription() {
                            return v.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                        },
                        required: !0
                    }],
                    execute: (e, t) => {
                        var n;
                        let {
                            channel: i
                        } = t, a = y(e, "user"), s = null !== (n = y(e, "message")) && void 0 !== n ? n : "", o = async () => {
                            await u.default.openPrivateChannel(a).then(e => {
                                let t = A.default.getChannel(e);
                                l(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, m.default.parse(t, s))
                            })
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_MSG_ERROR)
                        })
                    }
                }],
                L = P.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
                U = (e, t, n) => {
                    let i = t ? P : L;
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
                    return _
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

            function _(e, t) {
                return e.filter(e => {
                    if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
                    return !0
                }).map(e => e.split(":")[0])
            }

            function I(e, t) {
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
                    return null !== (n = f.getScore(I(e, t))) && void 0 !== n ? n : 0
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
                    let i = I(n, t);
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
                    return o
                },
                requestApplicationCommandIndex: function() {
                    return r
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("599110"),
                s = n("49111");
            async function o(e, t, n) {
                let o, r = 0;
                switch (e.type) {
                    case "channel":
                        o = s.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        o = s.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        o = s.Endpoints.APPLICATION_COMMAND_INDEX_USER
                }
                let u = async t => r >= 3 ? (c(!0), l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                    target: e
                })) : (await new Promise(e => setTimeout(e, t)), d()), d = () => i.default.get({
                    url: o,
                    retries: 3 - r - 1,
                    signal: n.signal,
                    onRequestCreated: () => r++
                }).then(t => 202 === t.status ? u(5e3) : (c(!1), l.default.dispatch({
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
                    a.default.track(s.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
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
                    return K
                },
                useContextIndexState: function() {
                    return j
                },
                useUserIndexState: function() {
                    return z
                },
                useDiscoveryState: function() {
                    return X
                },
                useQueryState: function() {
                    return Q
                }
            }), n("222007"), n("424973"), n("881410");
            var i, l, a = n("884691"),
                s = n("627445"),
                o = n.n(s),
                r = n("917351"),
                u = n.n(r),
                d = n("811022"),
                c = n("446674"),
                p = n("913144"),
                f = n("851387"),
                m = n("892692"),
                _ = n("915639"),
                I = n("872173"),
                C = n("42203"),
                T = n("305961"),
                A = n("697218"),
                E = n("599110"),
                N = n("589777"),
                S = n("369010"),
                M = n("342564"),
                g = n("9566"),
                O = n("972620"),
                h = n("524768"),
                v = n("389153"),
                D = n("123373"),
                y = n("217946"),
                R = n("317041"),
                P = n("49111");
            let L = new d.default("ApplicationCommandIndexStore"),
                U = Symbol("currentUser"),
                B = Symbol("stale"),
                b = Symbol("current"),
                H = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                F = Object.freeze({
                    serverVersion: b,
                    fetchState: {
                        fetching: !1
                    },
                    result: {
                        sections: {},
                        sectionIdsByBotId: {},
                        version: b,
                        commandTypeCount: {}
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

            function Y(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = x(e),
                    l = V.indices[i];
                return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), V.indices[i] = {
                    ...l,
                    ...t
                }) : n && (V.indices[i] = {
                    serverVersion: B,
                    fetchState: {
                        fetching: !1
                    },
                    ...t
                }), l
            }

            function W(e) {
                let t = x(e),
                    n = V.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete V.indices[t]
            }

            function k() {
                for (let e of Object.values(V.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
                V.indices = {}
            }
            class q extends c.default.Store {
                initialize() {
                    this.waitFor(_.default), this.syncWith([_.default], () => {
                        ! function() {
                            let e = _.default.locale;
                            e !== V.oldLocale && (k(), V.collator = new Intl.Collator(e, {
                                sensitivity: "accent",
                                numeric: !0
                            }), V.oldLocale = e)
                        }()
                    })
                }
                getContextState(e) {
                    var t, n;
                    return null != e && J(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : w : F
                }
                getUserState() {
                    var e;
                    return (0, v.isInUserAppExperiment)({
                        location: "getUserState"
                    }, {
                        autoTrackExposure: !1
                    }) ? null !== (e = this.indices[U]) && void 0 !== e ? e : w : F
                }
                query(e, t, n) {
                    let i = A.default.getCurrentUser();
                    if (null == i) return H;
                    let l = this.getContextState(e),
                        a = this.getUserState(),
                        s = (0, D.buildPermissionContext)(e, t.commandType),
                        o = !1 !== t.applicationCommands && s.hasBaseAccessPermissions,
                        r = !1;
                    if (n.allowFetch) {
                        let t = o && J(e);
                        t && (E.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: null == l.result,
                            size: Object.keys(V.indices).length
                        }), ee(l) && (null != e.guild_id ? (0, g.requestApplicationCommandIndex)({
                            type: "guild",
                            guildId: e.guild_id
                        }) : (0, g.requestApplicationCommandIndex)({
                            type: "channel",
                            channelId: e.id
                        }), r = !0)), (0, v.isInUserAppExperiment)({
                            location: "query"
                        }) && ee(a) && ((0, g.requestApplicationCommandIndex)({
                            type: "user"
                        }), r = !0)
                    }
                    let u = Z({
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
                    super(...e), this.indices = {}, this.oldLocale = _.default.locale, this.collator = new Intl.Collator(_.default.locale, G)
                }
            }
            q.displayName = "ApplicationCommandIndexStore";
            let V = new q(p.default, {
                LOGOUT: k,
                CONNECTION_OPEN: k,
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    var t;
                    let {
                        target: n,
                        start: i
                    } = e;
                    if (ee(null !== (t = V.indices[x(n)]) && void 0 !== t ? t : w)) {
                        let e = new AbortController;
                        Y(n, {
                            fetchState: {
                                fetching: !0,
                                abort: e
                            }
                        }, !0), (0, g.fetchApplicationCommandIndex)(n, i, e)
                    }
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var t, n, i;
                    let {
                        target: l,
                        index: a
                    } = e, s = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == s) return !1;
                    let o = {},
                        r = {},
                        u = new Set;
                    for (let e of a.applications) {
                        if (null == e.bot && null != e.bot_id) {
                            r[e.bot_id] = e.id;
                            let t = A.default.getUser(e.bot_id);
                            null != t ? e.bot = t : u.add(e.bot_id)
                        } else null != e.bot && (r[e.bot.id] = e.id);
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
                                permissions: null != e.permissions ? (0, m.keyPermissions)(ei(e.permissions, s)) : void 0,
                                botId: e.bot_id
                            },
                            commands: {}
                        };
                        o[e.id] = t
                    }
                    "guild" === l.type && u.size > 0 && f.default.requestMembersById(l.guildId, [...u]);
                    let d = {};
                    for (let e of (0, v.buildApplicationCommands)(a.application_commands.map(e => (function(e, t) {
                            var n, i, l, a, s;
                            let o = {
                                ...e,
                                description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                                dm_permission: void 0,
                                name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                                options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(et)) && void 0 !== s ? s : [],
                                permissions: null != e.permissions ? ei(e.permissions, t) : void 0
                            };
                            return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o
                        })(e, s)), !0)) {
                        let t = o[e.applicationId];
                        if (null == t) {
                            L.error("Command has no matching application");
                            continue
                        }
                        t.commands[e.id] = e, d[e.type] = (null !== (n = d[e.type]) && void 0 !== n ? n : 0) + 1
                    }
                    let c = null !== (i = a.version) && void 0 !== i ? i : b;
                    Y(l, {
                        serverVersion: c,
                        result: {
                            sections: o,
                            sectionIdsByBotId: r,
                            version: c,
                            commandTypeCount: d
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
                    Y(t, {
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
                    Y(t = null != i ? {
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
                    W({
                        type: "channel",
                        channelId: t.id
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    W({
                        type: "guild",
                        guildId: t.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: n,
                        version: i
                    } = e, l = Y({
                        type: "guild",
                        guildId: n
                    }, {
                        serverVersion: null != i ? i : B
                    }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
                    if (null != a)
                        for (let e in a) {
                            let t = C.default.getDMFromUserId(e);
                            null != t && Y({
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
                    }), a = null === (t = V.indices[l]) || void 0 === t ? void 0 : t.result;
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
                }
            });
            var K = V;

            function j(e, t, n) {
                let [i, l] = a.useState(!0), s = (0, c.useStateFromStoresObject)([V], () => V.getContextState(e));
                return a.useEffect(() => {
                    if (i && null != e) {
                        if (n) {
                            let n = t && J(e);
                            n && (E.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == s.result,
                                size: Object.keys(V.indices).length
                            }), ee(s) && (null != e.guild_id ? (0, g.requestApplicationCommandIndex)({
                                type: "guild",
                                guildId: e.guild_id
                            }) : (0, g.requestApplicationCommandIndex)({
                                type: "channel",
                                channelId: e.id
                            })))
                        }
                        l(!1)
                    }
                }, [s, n, e, t, i]), s
            }

            function z(e, t) {
                let [n, i] = a.useState(!0), l = (0, c.useStateFromStoresObject)([V], () => V.getUserState()), s = (0, v.useIsInUserAppExperiment)({
                    location: "useUserIndexState"
                });
                return a.useEffect(() => {
                    n && (t && ee(l) && e && s && (0, g.requestApplicationCommandIndex)({
                        type: "user"
                    }), i(!1))
                }, [l, t, e, s, n]), l
            }

            function X(e, t, n, i) {
                let {
                    descriptors: l,
                    commands: s,
                    sectionedCommands: o,
                    loading: r
                } = Q(e, n, i), u = (0, S.useTopCommands)({
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
                            let i = M.default.getScoreWithoutLoadingLatest(n, e),
                                l = M.default.getScoreWithoutLoadingLatest(n, t);
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

            function Q(e, t, n) {
                let i = (0, D.usePermissionContext)(e, t.commandType),
                    l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                    s = j(e, l, n.allowFetch),
                    o = z(l, n.allowFetch);
                return a.useMemo(() => Z({
                    permissionContext: i,
                    text: t.text,
                    allowApplicationCommands: l,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: s,
                    userState: o
                }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, s, o])
            }

            function Z(e) {
                let {
                    permissionContext: t,
                    contextState: n,
                    userState: i,
                    text: l,
                    builtIns: a = O.BuiltInCommandFilter.ALLOW,
                    allowApplicationCommands: s = !0,
                    allowEmptySections: r = !1,
                    scoreMethod: d = O.ScoreMethod.NONE
                } = e, {
                    commandType: c
                } = t, p = null == l ? void 0 : l.toLowerCase(), f = null == p ? void 0 : p.split(" "), m = a === O.BuiltInCommandFilter.ONLY_TEXT, _ = a !== O.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(c, !0, m) : [], C = [], A = {
                    permissionContext: t,
                    query: p,
                    splitQuery: f,
                    allowEmptySections: r,
                    scoreMethod: d
                };
                if (s) {
                    var E, S, g, h;
                    let e = null !== (g = null === (E = n.result) || void 0 === E ? void 0 : E.sections) && void 0 !== g ? g : {},
                        t = null !== (h = null === (S = i.result) || void 0 === S ? void 0 : S.sections) && void 0 !== h ? h : {},
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
                        let r = $(i, l, A);
                        null != r && C.push(r)
                    }
                    C.sort((e, t) => el(e.section.name, t.section.name))
                }
                if (_.length > 0 || !0 === r) {
                    let e = $(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN], _, A);
                    null != e && C.push(e)
                }
                let v = u.flatMap(C, e => e.data);
                if (d === O.ScoreMethod.COMMAND_ONLY || d === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                    let e = t.context,
                        n = T.default.getGuild(t.context.guild_id);
                    I.FrecencyUserSettingsActionCreators.loadIfNecessary(), v.sort((t, i) => {
                        var l, a;
                        let s = null !== (l = t.score) && void 0 !== l ? l : 0,
                            o = null !== (a = i.score) && void 0 !== a ? a : 0;
                        if (s !== o) return s - o;
                        let r = M.default.getScoreWithoutLoadingLatest({
                                channel: e,
                                guild: n
                            }, t),
                            u = M.default.getScoreWithoutLoadingLatest({
                                channel: e,
                                guild: n
                            }, i);
                        return r !== u ? u - r : el(t.displayName, i.displayName)
                    })
                }
                return {
                    commands: v,
                    descriptors: C.map(e => e.section),
                    sectionedCommands: C,
                    loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
                }
            }

            function $(e, t, n) {
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
                    f = null != u.guild_id ? y.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
                    m = null != u.guild_id ? y.computeAllowedForChannel(e.permissions, u.id, u.guild_id) : null,
                    _ = [];
                for (let e of t) y.hasAccess(e, r, f, m) === y.HasAccessResult.ALLOWED && _.push(e);
                return 0 !== (i = (o === O.ScoreMethod.COMMAND_ONLY || o === O.ScoreMethod.COMMAND_OR_APPLICATION) && null != l && null != a ? function(e, t, n, i, l) {
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
                }(l, a, _, e, o) : _).length || s ? ((o === O.ScoreMethod.NONE || o === O.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => el(e.displayName, t.displayName)), {
                    section: e,
                    data: i
                }) : null
            }

            function J(e) {
                var t;
                return null != e.guild_id || e.type === P.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
            }

            function ee(e) {
                return !! function(e) {
                    var t;
                    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
                }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function et(e) {
                var t, n, i, l;
                let a = {
                    ...e,
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(en),
                    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
                    name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(et)
                };
                return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
            }

            function en(e) {
                var t;
                let n = {
                    ...e,
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                };
                return e.name !== e.name_default && (n.name_localized = e.name), n
            }

            function ei(e, t) {
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

            function el(e, t) {
                return V.collator.compare(e, t)
            }
        },
        240249: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCachedCommand: function() {
                    return T
                },
                getCachedApplicationSection: function() {
                    return A
                },
                getCachedResults: function() {
                    return E
                },
                getChangeKeys: function() {
                    return N
                },
                useDiscovery: function() {
                    return S
                },
                executeQuery: function() {
                    return M
                },
                useQuery: function() {
                    return g
                },
                useCommand: function() {
                    return O
                },
                useCommandsForApplication: function() {
                    return h
                },
                getCommandTypeCount: function() {
                    return v
                },
                useSearchOpenState: function() {
                    return D
                },
                isInIndexExperiment: function() {
                    return y
                }
            }), n("222007"), n("424973");
            var i = n("884691"),
                l = n("446674"),
                a = n("305961"),
                s = n("697218"),
                o = n("449008"),
                r = n("507217"),
                u = n("589777"),
                d = n("14090"),
                c = n("988721"),
                p = n("972620"),
                f = n("216193"),
                m = n("166004"),
                _ = n("524768"),
                I = n("317041"),
                C = n("49111");

            function T(e, t) {
                var n, i, l, a;
                if (null == t) return {
                    application: void 0,
                    command: void 0
                };
                if (!y({
                        location: "getCachedCommand"
                    })) {
                    let e = f.default.getCommand(t),
                        n = f.default.getApplication(null == e ? void 0 : e.applicationId);
                    return {
                        command: e,
                        application: n
                    }
                }
                let s = c.default.getUserState(),
                    o = c.default.getContextState(e),
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

            function A(e, t, n) {
                var i, l, a, s, o, r;
                if (!y({
                        location: "getCachedApplicationSection"
                    })) return null === (o = m.default.getApplicationSections(e.id, t)) || void 0 === o ? void 0 : o.find(e => e.id === n);
                let u = c.default.getUserState(),
                    d = c.default.getContextState(e),
                    p = null !== (r = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== r ? r : null === (s = d.result) || void 0 === s ? void 0 : null === (a = s.sections) || void 0 === a ? void 0 : a[n];
                return null == p ? void 0 : p.descriptor
            }

            function E(e, t, n) {
                if (!y({
                        location: "getCachedResults"
                    })) {
                    var i, l;
                    return {
                        commands: null !== (i = m.default.getQueryCommands(e.id, t, n)) && void 0 !== i ? i : [],
                        sections: null !== (l = m.default.getApplicationSections(e.id, t)) && void 0 !== l ? l : []
                    }
                }
                let a = c.default.query(e, {
                    commandType: t,
                    text: n
                }, {
                    scoreMethod: p.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: !1
                });
                return {
                    commands: a.commands,
                    sections: a.descriptors
                }
            }

            function N(e, t, n) {
                if (!y({
                        location: "getChangeKeys"
                    }, {
                        autoTrackExposure: !1
                    })) return [m.default.getQueryCommands(e.id, t, n)];
                let i = c.default.getUserState(),
                    l = c.default.getContextState(e);
                return [null == i ? void 0 : i.result, null == l ? void 0 : l.result]
            }

            function S(e, t, n) {
                if (!R({
                        location: "useDiscovery"
                    })) {
                    var s, o;
                    return (0, m.useDiscoveryState)(e, t.commandType, null !== (s = n.placeholderCount) && void 0 !== s ? s : 0, null !== (o = n.limit) && void 0 !== o ? o : 10, {
                        canOnlyUseTextCommands: t.builtIns === p.BuiltInCommandFilter.ONLY_TEXT,
                        canUseFrecency: n.includeFrecency
                    })
                }
                let r = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: d,
                        commands: f,
                        sectionedCommands: _,
                        loading: T
                    } = (0, c.useDiscoveryState)(e, r, t, {
                        ...n,
                        allowFetch: !0
                    }),
                    [A, E] = i.useState(null),
                    N = i.useRef(!1);
                N.current = T;
                let S = i.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let i = 0; i < n.placeholderCount; i++) e.push(P(i, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => {
                    let e = {
                        loading: N,
                        commands: f,
                        activeSections: d,
                        commandsByActiveSection: _,
                        filteredSectionId: A,
                        hasMoreAfter: !1,
                        placeholders: T ? S : [],
                        sectionDescriptors: d,
                        filterSection: e => {
                            E(e)
                        },
                        scrollDown: C.NOOP
                    };
                    if (null != A) {
                        let t = _.find(e => e.section.id === A);
                        e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
                    }
                    if (T) {
                        let t = _[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: [...t.data, ...S]
                        }, ..._.slice(1)];
                        else {
                            let t = u.BUILT_IN_SECTIONS[I.BuiltInSectionId.BUILT_IN];
                            e.activeSections = [t], e.commandsByActiveSection = [{
                                section: t,
                                data: S
                            }]
                        }
                        e.commands = [...f, ...S]
                    }
                    return e
                }, [f, d, A, _, T, S])
            }

            function M(e, t, n) {
                if (!y({
                        location: "executeQuery"
                    })) {
                    var i, l, s, o, d;
                    return !0 === n.allowFetch && r.querySearchManager({
                        channel: e,
                        guild: null != e.guild_id ? a.default.getGuild(e.guild_id) : null
                    }, null !== (i = t.text) && void 0 !== i ? i : "", null !== (l = n.limit) && void 0 !== l ? l : 10, t.commandType), {
                        commands: null !== (o = m.default.getQueryCommands(e.id, t.commandType, null !== (s = t.text) && void 0 !== s ? s : "")) && void 0 !== o ? o : [],
                        sections: null !== (d = m.default.getApplicationSections(e.id, t.commandType)) && void 0 !== d ? d : []
                    }
                }
                let {
                    descriptors: p,
                    commands: f,
                    loading: _
                } = c.default.query(e, t, n), C = [];
                if (null != n.placeholderCount && _)
                    for (let e = 0; e < n.placeholderCount; e++) C.push(P(e, t.commandType));
                return {
                    commands: _ ? [...f, ...C] : f,
                    sections: _ && 0 === p.length ? [u.BUILT_IN_SECTIONS[I.BuiltInSectionId.BUILT_IN]] : p
                }
            }

            function g(e, t, n) {
                if (!R({
                        location: "useQuery"
                    })) {
                    var l, a;
                    return (0, m.useQueryState)(e, t.commandType, null !== (l = t.text) && void 0 !== l ? l : "", null !== (a = n.limit) && void 0 !== a ? a : 10)
                }
                let {
                    descriptors: s,
                    commands: o,
                    loading: r
                } = (0, c.useQueryState)(e, t, {
                    ...n,
                    allowFetch: !0
                }), d = i.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let i = 0; i < n.placeholderCount; i++) e.push(P(i, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => ({
                    commands: r ? [...o, ...d] : o,
                    sections: r && 0 === s.length ? [u.BUILT_IN_SECTIONS[I.BuiltInSectionId.BUILT_IN]] : s,
                    scrollDown: C.NOOP
                }), [r, o, s, d])
            }

            function O(e, t) {
                if (!R({
                        location: "useCommand"
                    })) {
                    var n;
                    let a = (0, l.useStateFromStores)([s.default], () => {
                            if (null == e ? void 0 : e.isDM()) {
                                let t = e.getRecipientId(),
                                    n = s.default.getUser(t);
                                if (null != n && n.bot) return n
                            }
                            return null
                        }, [e]),
                        {
                            command: o,
                            application: u
                        } = (0, l.useStateFromStoresObject)([f.default], () => {
                            let e = null != t ? f.default.getCommand(t) : void 0,
                                n = f.default.getApplication(null == e ? void 0 : e.applicationId);
                            return {
                                command: e,
                                application: n
                            }
                        });
                    return (i.useEffect(() => {
                        null != e && null == o && (null != a ? r.fetchCommandsForApplication({
                            guildId: null,
                            channelId: e.id,
                            applicationId: a.id
                        }) : null != e.guild_id && null != t && r.fetchCommand(e.guild_id, e.id, t))
                    }, [a, e, o, t]), null == e || null == e.guild_id && (null == a || null == u || a.id !== (null === (n = u.bot) || void 0 === n ? void 0 : n.id))) ? {
                        command: void 0,
                        application: void 0
                    } : {
                        command: o,
                        application: u
                    }
                }
                let a = (0, c.useUserIndexState)(!0, !0),
                    o = (0, c.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    if (null != t) {
                        var e, n, i, l;
                        let s = Object.values(null !== (i = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}).concat(Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}));
                        for (let e of s) {
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
                }, [o.result, a.result, t])
            }

            function h(e, t, n) {
                if (!R({
                        location: "useCommandsForApplication"
                    })) return i.useEffect(() => {
                    r.fetchCommands(e.guild_id, e.id, n)
                }, [n, e]), (0, l.useStateFromStoresObject)([f.default], () => {
                    let i = f.default.getApplication(t),
                        l = f.default.getCommands(n, e.id);
                    return {
                        commands: l,
                        application: i
                    }
                });
                let a = (0, c.useUserIndexState)(!0, !0),
                    s = (0, c.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    var e, i, l, r, u;
                    let d = null !== (u = null === (i = a.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (l = s.result) || void 0 === l ? void 0 : l.sections[t];
                    return {
                        application: null == d ? void 0 : null === (r = d.descriptor) || void 0 === r ? void 0 : r.application,
                        commands: null != d ? n.map(e => d.commands[e]).filter(o.isNotNullish) : []
                    }
                }, [null == a ? void 0 : a.result, null == s ? void 0 : s.result, t, n])
            }

            function v(e, t, n) {
                var i, l, s, o, r, u;
                if (!y({
                        location: "getCommandTypeCount"
                    })) {
                    if (e.isPrivate()) return null;
                    {
                        let i = null != n ? n : null === (s = a.default.getGuild(e.guild_id)) || void 0 === s ? void 0 : s.applicationCommandCounts;
                        return null !== (o = null == i ? void 0 : i[t]) && void 0 !== o ? o : 0
                    }
                }
                let d = c.default.getUserState(),
                    p = c.default.getContextState(e);
                return (null !== (r = null === (i = d.result) || void 0 === i ? void 0 : i.commandTypeCount[t]) && void 0 !== r ? r : 0) + (null !== (u = null === (l = p.result) || void 0 === l ? void 0 : l.commandTypeCount[t]) && void 0 !== u ? u : 0)
            }

            function D() {
                !R({
                    location: "useSearchOpenState"
                }) && (0, m.useSearchStoreOpenState)()
            }

            function y(e, t) {
                return d.default.getCurrentConfig(e, t).enabled
            }

            function R(e, t) {
                let [n] = i.useState(y(e, t));
                return n
            }

            function P(e, t) {
                return {
                    type: t,
                    inputType: _.ApplicationCommandInputType.PLACEHOLDER,
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
            var i, l, a, s;
            n.r(t), n.d(t, {
                ScoreMethod: function() {
                    return i
                },
                BuiltInCommandFilter: function() {
                    return l
                }
            }), (a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.APPLICATION_ONLY = 1] = "APPLICATION_ONLY", a[a.COMMAND_ONLY = 2] = "COMMAND_ONLY", a[a.COMMAND_OR_APPLICATION = 3] = "COMMAND_OR_APPLICATION", (s = l || (l = {}))[s.ALLOW = 0] = "ALLOW", s[s.ONLY_TEXT = 1] = "ONLY_TEXT", s[s.DENY = 2] = "DENY"
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
                _ = n("389153");
            let I = new Map,
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
                M = l.debounce((e, t, n, i) => {
                    let l = [...n].filter(_.isSnowflake);
                    if (0 === l.length) return;
                    let a = c.default.getChannel(t);
                    if (null == a || !(0, _.canUseApplicationCommands)(p.default, d.default, !1, a)) return;
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
                        o.length > 0 && M(e, t, new Set(o), i)
                    })
                }, 250);
            class g extends o.default.Store {
                hasCommand(e) {
                    return null != e && A.has(e)
                }
                getApplication(e) {
                    if (null != e) return I.get(e)
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
            g.displayName = "ApplicationCommandRegistryStore";
            let O = new g(r.default, {
                APPLICATION_COMMAND_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandId: n,
                        guildId: i
                    } = e;
                    if (A.has(n)) return;
                    T.add(n);
                    let l = null != i && !C.has(i);
                    M(i, t, T, l)
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
                    M(i, t, T, l)
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
                    for (let e of t) I.set(e.id, e);
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
                        null != e.application && I.set(e.application.id, e.application)
                    }))
                },
                LOGOUT: function() {
                    I.clear(), C.clear(), T.clear(), A.reset(), E.reset()
                }
            });
            var h = O
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
                    return X
                },
                useQueryState: function() {
                    return J
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
                f = n("38654"),
                m = n("252063"),
                _ = n("140596"),
                I = n("685841"),
                C = n("872173"),
                T = n("374363"),
                A = n("42203"),
                E = n("923959"),
                N = n("305961"),
                S = n("957255"),
                M = n("18494"),
                g = n("599110"),
                O = n("589777"),
                h = n("369010"),
                v = n("342564"),
                D = n("524768"),
                y = n("389153"),
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
                let s = async i => {
                    var l;
                    return await new Promise(e => {
                        setTimeout(e, i)
                    }), L(e, {
                        ...t,
                        retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
                    }, n)
                };
                (null == t.retries || 0 === t.retries) && (t.start = performance.now());
                let o = e => {
                    var i, s, o;
                    if (null == t.start) return;
                    let r = performance.now() - t.start;
                    g.default.track(P.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
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
                    url: P.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
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
                }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (o(!0), null) : 429 === e.status ? s(1e3 * e.body.retry_after) : (o(!0), null))
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
                    i = (0, y.buildApplicationCommands)(t).filter(e => {
                        let t = n.findIndex(t => t.id === e.id);
                        return !(t >= 0) || (n[t] = e, !1)
                    });
                return [...n, ...i]
            }

            function b(e) {
                let t = e.map(y.getApplicationCommandSection);
                return t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])
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
                F = [O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN]];
            class w extends r.default.Store {
                initialize() {
                    this.waitFor(T.default), this.syncWith([S.default], () => {
                        this.shouldResetAll = !0
                    }), this.syncWith([T.default], W)
                }
                getChannelState(e, t) {
                    var n;
                    return null === (n = V.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
                }
                getOrInsertChannelState(e, t) {
                    let n = V.channelStates,
                        i = n.has(e);
                    if (g.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
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

            function G(e) {
                var t;
                let {
                    guildId: n
                } = e, i = M.default.getChannelId();
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

            function W() {
                var e, t, n;
                let i = null !== (n = null === (t = T.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
                    l = i !== V.viewNsfwCommands;
                if (l) {
                    if (V.viewNsfwCommands = i, !V.componentIsOpen) return Y();
                    V.shouldResetDMs = !0
                }
                return !1
            }

            function k(e) {
                return !!V.channelStates.has(e) && (V.channelStates.del(e), !0)
            }

            function q() {
                V.shouldResetAll = !1, V.shouldResetGuild = null, V.shouldResetDMs = !1, V.componentIsOpen = !1, V.channelStates.reset()
            }
            w.displayName = "ApplicationCommandSearchStore";
            let V = new w(d.default, {
                LOGOUT: q,
                CONNECTION_OPEN: q,
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
                    let {
                        channelId: t,
                        commandType: n,
                        state: i
                    } = e, l = V.channelStates.get(t);
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
                        Q({
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
                    } = e, s = null != I.default.getPendingReply(t.channel.id), o = Q({
                        context: t,
                        commandType: n,
                        query: i,
                        limit: l,
                        canOnlyUseTextCommands: s,
                        applicationId: a
                    });
                    !o && !s && Z({
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
                        q();
                        return
                    }
                    let n = !1;
                    return null != V.shouldResetGuild && (n = x(V.shouldResetGuild), V.shouldResetGuild = null), V.shouldResetDMs && (n = Y() || n, V.shouldResetDMs = !1), n
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e;
                    return k(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e;
                    return k(t.channel_id)
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t
                    } = e;
                    return k(t)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t
                    } = e;
                    return k(t)
                }
            });
            var K = V;
            let j = e => {
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

            function X(e, t, n, l) {
                let {
                    canOnlyUseTextCommands: a,
                    canUseFrecency: s
                } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
                    discoveryInitialized: o,
                    topCursor: u,
                    scrollDownCursor: c,
                    applicationSections: f,
                    applicationCommands: I,
                    filteredSectionId: C,
                    sawFrecencySection: T
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
                    M = (0, p.default)(),
                    g = i.useCallback(function(n, i) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (E.current) return;
                        E.current = !0;
                        let a = j(e.guild_id);
                        L(e.id, {
                            type: t,
                            roleIds: a,
                            ...n
                        }, {
                            abortable: l,
                            signal: M
                        }).then(e => {
                            E.current = !1, i(e)
                        })
                    }, [e.id, e.guild_id, t, M]),
                    D = i.useMemo(() => ({
                        channel: e,
                        guild: null != e.guild_id ? N.default.getGuild(e.guild_id) : null
                    }), [e]),
                    P = (0, h.useTopCommands)(D),
                    F = (0, h.useTopRealCommands)(D),
                    w = (0, r.useStateFromStores)([S.default, _.default], () => (0, y.canUseApplicationCommands)(S.default, _.default, null != a && a, e), [a, e]);
                i.useEffect(() => {
                    if (o) return;
                    if (A({
                            discoveryInitialized: !0
                        }), !w || null != I && I.length > 0) return;
                    let t = e.isPrivate() ? {} : {
                        limit: l,
                        commandIds: o ? void 0 : F,
                        cursor: null != u ? u : void 0
                    };
                    g({
                        ...t,
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
                            n.applicationSections = b(null !== (i = e.applications) && void 0 !== i ? i : [])
                        }
                        A(n)
                    }, !1)
                }, [I, e, l, w, f, o, u, g, F, A]);
                let G = i.useCallback(() => {
                        null != c && g({
                            limit: l,
                            cursor: c
                        }, e => {
                            if (null == e) return;
                            let t = !1 === e.repaired ? B([], e.applicationCommands) : B(null != I ? I : [], e.applicationCommands);
                            A({
                                applicationCommands: t,
                                scrollDownCursor: e.nextCursor
                            })
                        })
                    }, [l, g, c, I, A]),
                    x = i.useCallback(t => {
                        if (!E.current && t !== C) {
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
                            }!(t in O.BUILT_IN_SECTIONS || e.isPrivate()) && g({
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
                    }, [e, g, A, C]);
                z(), i.useEffect(() => () => {
                    var n;
                    (null === (n = V.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && x(null)
                }, []);
                let Y = i.useMemo(() => U(D, t, a), [D, t, a]),
                    W = i.useMemo(() => {
                        if (!s) return [];
                        let e = (w && null != I ? I : []).concat(Y);
                        return e.filter(e => P.includes(e.id)).sort((e, t) => {
                            let n = v.default.getScoreWithoutLoadingLatest(D, e),
                                i = v.default.getScoreWithoutLoadingLatest(D, t);
                            return i - n
                        }).slice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
                    }, [s, P, w, I, Y, D]);
                i.useEffect(() => {
                    !T && W.length > 0 && A({
                        sawFrecencySection: !0
                    })
                }, [A, W, T]);
                let k = i.useMemo(() => {
                        var e;
                        let t = [];
                        return (W.length > 0 || T) && (t = t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY])), w && null != f && (t = t.concat(f)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== R.BuiltInSectionId.BUILT_IN && (t = t.concat(O.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN])), t
                    }, [w, f, W, T]),
                    q = w && (!o || E.current || null != c),
                    K = i.useMemo(() => {
                        if (!q) return [];
                        let e = [];
                        for (let i = 0; i < n; i++) e.push(H(i, t));
                        return e
                    }, [q, n, t]),
                    {
                        activeSections: X,
                        commandsByActiveSection: Q
                    } = i.useMemo(() => {
                        let e = [],
                            t = [];
                        return k.forEach(n => {
                            let i;
                            (null == C || n.id === C) && ((i = n.id === R.BuiltInSectionId.BUILT_IN ? q ? [] : [...Y] : n.id === R.BuiltInSectionId.FRECENCY ? [...W] : (null != I ? I : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === C) && (e.push(n), t.push({
                                section: n,
                                data: i
                            }))
                        }), t.length > 0 && K.length > 0 && t[t.length - 1].data.push(...K), {
                            activeSections: e,
                            commandsByActiveSection: t
                        }
                    }, [k, W, I, Y, K, q, C]),
                    Z = i.useMemo(() => {
                        let e = [];
                        return e = e.concat(W), w && null != I && (e = e.concat(I)), e = e.concat(Y)
                    }, [w, W, I, Y]);
                return {
                    filterSection: x,
                    scrollDown: G,
                    loading: E,
                    filteredSectionId: C,
                    hasMoreAfter: q,
                    commands: Z,
                    sectionDescriptors: k,
                    activeSections: X,
                    commandsByActiveSection: Q,
                    placeholders: K
                }
            }

            function Q(e) {
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
                    c = V.getOrInsertChannelState(n.channel.id, i);
                if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
                else if (c.queries.has(l)) return !0;
                if (null != u && (c.applicationSections = b(u)), s) t = [];
                else {
                    var p;
                    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : B([], null != o ? o : [])
                }
                let f = U(n, i, s),
                    m = (0, y.canUseApplicationCommands)(S.default, _.default, s, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == o),
                    I = [],
                    T = !1;
                if (m)
                    for (let e = l.length - 1; e > 0; e -= 1) {
                        let n = l.slice(0, e),
                            i = c.queries.get(n);
                        if (null != i) {
                            T = i.done, i.commands.forEach(e => {
                                null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && I.push(e)
                            });
                            break
                        }
                    }
                T && (m = !1);
                let A = [],
                    E = l.split(" ");
                if ([...t, ...I, ...f].forEach(e => {
                        var t;
                        let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                            i = ee(l, E, e, n);
                        i > 0 && A.push({
                            ...e,
                            score: i
                        })
                    }), C.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                        if (e.score !== t.score) return t.score - e.score;
                        let i = v.default.getScoreWithoutLoadingLatest(n, e),
                            l = v.default.getScoreWithoutLoadingLatest(n, t);
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
                    done: T || null == r,
                    scrollDownCursor: r
                })), T
            }
            let Z = a(e => {
                    var t;
                    let {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        applicationId: s
                    } = e;
                    if (!(0, y.canUseApplicationCommands)(S.default, _.default, !1, n.channel)) return;
                    let o = V.getOrInsertChannelState(n.channel.id, i);
                    if (n.channel.isPrivate()) {
                        !o.discoveryInitialized && null == o.applicationCommands && L(n.channel.id, {
                            type: i,
                            includeApplications: null == o.applicationSections
                        }).then(e => {
                            var t;
                            if (null == e) return;
                            let l = {
                                applicationCommands: B([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
                            };
                            null != e.applications && (l.applicationSections = b(e.applications)), d.default.dispatch({
                                type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                                channelId: n.channel.id,
                                commandType: i,
                                state: l
                            })
                        });
                        return
                    }(null === (t = o.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && L(n.channel.id, {
                        type: i,
                        roleIds: j(n.channel.guild_id),
                        query: l,
                        limit: a,
                        applicationId: s,
                        includeApplications: !o.discoveryInitialized && null == o.applicationSections
                    }).then(e => {
                        if (null != e) V.channelStates.has(n.channel.id) && (Q({
                            context: n,
                            commandType: i,
                            query: l,
                            limit: a,
                            canOnlyUseTextCommands: !1,
                            applicationCommands: e.applicationCommands,
                            scrollDownCursor: e.nextCursor,
                            applications: e.applications,
                            applicationId: s
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
                        limit: s
                    } = e;
                    if (!(0, y.canUseApplicationCommands)(S.default, _.default, !1, i.channel) || i.channel.isPrivate()) return;
                    let o = V.getOrInsertChannelState(i.channel.id, l),
                        r = null === (n = o.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
                    null != r && await L(i.channel.id, {
                        type: l,
                        roleIds: j(i.channel.guild_id),
                        query: a,
                        limit: s,
                        cursor: r,
                        includeApplications: !o.discoveryInitialized && null == o.applicationSections
                    }, {
                        abortable: !0,
                        signal: t
                    }).then(e => {
                        var t, n;
                        if (null == e || !V.channelStates.has(i.channel.id)) return;
                        let s = null !== (n = null === (t = o.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== D.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
                            r = B([], e.applicationCommands),
                            u = [],
                            d = a.split(" ");
                        r.forEach(e => {
                            var t;
                            if (null != s.find(t => t.id === e.id)) return;
                            let n = null === (t = o.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                                i = ee(a, d, e, n);
                            i > 0 && u.push({
                                ...e,
                                score: i
                            })
                        }), C.FrecencyUserSettingsActionCreators.loadIfNecessary(), u.sort((e, t) => {
                            if (e.score !== t.score) return t.score - e.score;
                            let n = v.default.getScoreWithoutLoadingLatest(i, e),
                                l = v.default.getScoreWithoutLoadingLatest(i, t);
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
                        }), V.emitChange()
                    })
                };

            function J(e, t, n, l) {
                z();
                let a = (0, p.default)(),
                    {
                        commands: s,
                        applicationSections: o
                    } = (0, r.useStateFromStoresObject)([V], () => {
                        var i, l, a;
                        let {
                            queries: s,
                            pendingQueries: o,
                            applicationSections: r
                        } = V.getOrInsertChannelState(e.id, t);
                        return {
                            applicationSections: r,
                            commands: null !== (a = null === (i = s.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = o.get(n)) || void 0 === l ? void 0 : l.commands
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
                    commands: s,
                    sections: null != o ? o : F,
                    scrollDown: c
                }
            }

            function ee(e, t, n, i) {
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
                    return I
                },
                getContextGuildId: function() {
                    return E
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
                c = n("26989"),
                p = n("957255"),
                f = n("697218"),
                m = n("49111");

            function _(e, t) {
                var n, i, l, a;
                let s = E(e),
                    u = r.ViewNsfwCommands.getSetting(),
                    p = d.default.getId(),
                    m = null !== (l = null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== l && l,
                    _ = null != s && null !== (a = null === (i = c.default.getMember(s, p)) || void 0 === i ? void 0 : i.roles) && void 0 !== a ? a : [],
                    I = o.default.isViewingRoles(s),
                    {
                        computedPermissions: N,
                        hasBaseAccessPermissions: S
                    } = T(e);
                return {
                    context: e,
                    userId: p,
                    roleIds: _,
                    isImpersonating: I,
                    commandType: t,
                    commandContextType: A(e),
                    computedPermissions: N,
                    hasBaseAccessPermissions: S,
                    allowNsfw: C(e, m, u)
                }
            }

            function I(e, t) {
                let n = E(e),
                    l = r.ViewNsfwCommands.useSetting(),
                    s = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
                    u = (0, a.useStateFromStores)([f.default], () => {
                        var e, t;
                        return null !== (t = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
                    }),
                    p = (0, a.useStateFromStoresArray)([c.default], () => {
                        var e, t;
                        return null != n && null !== (t = null === (e = c.default.getMember(n, s)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
                    }),
                    m = (0, a.useStateFromStores)([o.default], () => o.default.isViewingRoles(n));
                return i.useMemo(() => {
                    let {
                        computedPermissions: n,
                        hasBaseAccessPermissions: i
                    } = T(e);
                    return {
                        context: e,
                        userId: s,
                        roleIds: p,
                        commandType: t,
                        isImpersonating: m,
                        commandContextType: A(e),
                        computedPermissions: n,
                        hasBaseAccessPermissions: i,
                        allowNsfw: C(e, u, l)
                    }
                }, [t, e, m, p, s, u, l])
            }

            function C(e, t, n) {
                return !!t && (!(e instanceof u.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
            }

            function T(e) {
                let t;
                if (e instanceof u.ChannelRecordBase && e.isPrivate()) return {
                    computedPermissions: l.default.deserialize(0),
                    hasBaseAccessPermissions: !0
                };
                let n = p.default.computePermissions(e);
                return t = !!l.default.has(n, m.Permissions.ADMINISTRATOR) || (e instanceof u.ChannelRecordBase ? l.default.has(n, m.Permissions.VIEW_CHANNEL) && l.default.has(n, m.Permissions.USE_APPLICATION_COMMANDS) : l.default.has(n, m.Permissions.VIEW_CHANNEL)), {
                    computedPermissions: n,
                    hasBaseAccessPermissions: t
                }
            }

            function A(e) {
                var t;
                return e instanceof u.ChannelRecordBase && null == e.guild_id ? e.type === m.ChannelTypes.DM && (null === (t = f.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0 ? s.ApplicationCommandContextType.BOT_DM : s.ApplicationCommandContextType.PRIVATE_CHANNEL : s.ApplicationCommandContextType.GUILD
            }

            function E(e) {
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
                    return T
                },
                computeAllowedForUser: function() {
                    return A
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
                m = n("49111");

            function _(e, t, n, i) {
                let {
                    context: l,
                    commandType: a,
                    commandContextType: r,
                    allowNsfw: c,
                    computedPermissions: _,
                    userId: I,
                    roleIds: C,
                    isImpersonating: E,
                    hasBaseAccessPermissions: N
                } = t;
                if (e.type !== a) return 2;
                if (e.nsfw && !c) return 1;
                if (null != e.contexts && !e.contexts.includes(r)) return 4;
                if (null != e.predicate && l instanceof u.ChannelRecordBase) {
                    let t = d.default.getGuild(l.guild_id);
                    if (!e.predicate({
                            channel: l,
                            guild: t
                        })) return 3
                }
                let S = (0, f.getContextGuildId)(l);
                if (null == S || o.default.has(_, m.Permissions.ADMINISTRATOR)) return 0;
                if (!N) return 5;
                if (l instanceof u.ChannelRecordBase) {
                    s(void 0 !== i, "missing applicationAllowedForChannel");
                    let t = T(e.permissions, l.id, S);
                    if (function(e) {
                            return !1 === e
                        }(t) || ! function(e) {
                            return !0 === e
                        }(t) && function(e) {
                            return !1 === e
                        }(i)) return 6
                }
                let M = A(e.permissions, S, I, C, E);
                return function(e) {
                    return !0 === e
                }(M) ? 0 : function(e) {
                    return !1 === e
                }(M) ? 7 : function(e) {
                    return !1 === e
                }(n) || null != e.defaultMemberPermissions && !(!o.default.equals(e.defaultMemberPermissions, p.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && o.default.has(_, e.defaultMemberPermissions)) ? 7 : 0
            }

            function I(e) {
                return !0 === e
            }

            function C(e) {
                return !1 === e
            }

            function T(e, t, n) {
                if (null == e) return null;
                let i = e[(0, r.toPermissionKey)(t, c.ApplicationCommandPermissionType.CHANNEL)];
                if (null != i) return i.permission;
                let l = e[(0, r.toPermissionKey)((0, p.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
                return null != l ? l.permission : null
            }

            function A(e, t, n, i, l) {
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
                _ = n("49111"),
                I = n("782340");

            function C(e) {
                switch (e) {
                    case _.ChannelTextAreaIntegrations.GIF.title:
                    case _.ChannelTextAreaIntegrations.TENOR.title:
                        return I.default.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            let T = [...a(_.ChannelTextAreaIntegrations).values().map(e => ({
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
                options: e.type === _.ChannelTextAreaIntegrationTypes.GIF ? [{
                    name: "query",
                    displayName: "query",
                    type: u.ApplicationCommandOptionType.STRING,
                    get description() {
                        return I.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    get displayDescription() {
                        return I.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
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
                    return I.default.Messages.LEAVE_GROUP_DM
                },
                get displayDescription() {
                    return I.default.Messages.LEAVE_GROUP_DM
                },
                options: [{
                    name: "silent",
                    displayName: "silent",
                    type: u.ApplicationCommandOptionType.BOOLEAN,
                    get description() {
                        return I.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
                    },
                    get displayDescription() {
                        return I.default.Messages.LEAVE_GROUP_DM_SILENTLY
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
                    } = t, u = (0, d.computeChannelName)(a, p.default, c.default), f = I.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                        name: u
                    }), m = I.default.Messages.LEAVE_GROUP_DM_BODY.format({
                        name: u
                    }), _ = null !== (l = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== l && l;
                    async function C() {
                        try {
                            await o.default.closePrivateChannel(a.id, void 0, _)
                        } catch (e) {
                            r.default.sendBotMessage(a.id, I.default.Messages.LEAVE_GROUP_DM_ERROR)
                        }
                    }
                    a.isManaged() && (f = I.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name: u
                    }), m = I.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name: u
                    })), (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
                        header: f,
                        confirmText: I.default.Messages.LEAVE_GROUP_DM,
                        cancelText: I.default.Messages.CANCEL,
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
                _ = n("18494"),
                I = n("449008"),
                C = n("786742");
            let T = [],
                A = null,
                E = null,
                N = new Set,
                S = s.ThreadSortOrder.LATEST_ACTIVITY,
                M = 0,
                g = [],
                O = !1,
                h = [],
                v = a.chain(T),
                D = a.chain(T),
                y = new Set,
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
                g = [], i = null, E = null, N = new Set, S = s.ThreadSortOrder.LATEST_ACTIVITY, M = 0, h = [], v = a.chain(T), D = a.chain(T), R.clear(), y.clear()
            }

            function B() {
                var e;
                let t = _.default.getChannelId();
                if (null == t || !(null === (e = f.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
                H({
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

            function H(e) {
                var t;
                let n = f.default.getChannel(E);
                if (null == n) return;
                (null == e ? void 0 : e.refreshThreadIds) && (h = Object.values(d.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }), M = 0, O = !0), 0 !== y.size && (h = h.filter(e => !y.has(e)), y.clear()), 0 !== R.size && (h = Array.from(new Set([...h, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (D = a.chain(h).sort(L(s.ThreadSortOrder.LATEST_ACTIVITY)), v = a.chain(h).sort(L(s.ThreadSortOrder.CREATION_DATE)));
                let l = S === s.ThreadSortOrder.LATEST_ACTIVITY ? D : v,
                    o = l.value();
                g = 0 === N.size ? o : o.filter((t = N, function(e) {
                    var n;
                    let i = null === (n = f.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                    return null != i && 0 !== i.length && i.some(e => t.has(e))
                }));
                let r = g.find(e => (function(e) {
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
                    return M
                }
                getCanAckThreads() {
                    return O
                }
                getThreadIds(e, t, n) {
                    let i = e !== E,
                        l = !(0, I.areSetsEqual)(n, N),
                        a = t !== S;
                    return E = e, N = n, S = t, i ? H({
                        refreshThreadIds: !0
                    }) : a ? H({
                        sortThreadIds: !0
                    }) : l && H(), g
                }
                getCurrentThreadIds() {
                    return g
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
                    H({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t,
                        isNewlyCreated: n
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E || !n) return !1;
                    t.ownerId !== p.default.getId() ? M++ : A = t.id
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E) return !1;
                    let n = (0, C.isForumPostPinned)(t.id),
                        i = R.has(t.id);
                    if (n && !i) R.add(t.id), H({
                        sortThreadIds: !0
                    });
                    else {
                        if (n || !i) return !1;
                        R.delete(t.id), H({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== E) return !1;
                    y.add(t.id), H({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== E) return !1;
                    H({
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
            let s = {},
                o = {};

            function r(e) {
                if (null == e) return !1;
                let t = o[e];
                if (null == t) return !1;
                let n = a.default.getMessage(e, t.messageId);
                if (null == n) return !1;
                s[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                }, delete o[e]
            }

            function u() {
                s = {}, o = {}
            }
            class d extends i.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                getPendingReply(e) {
                    return s[e]
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
                    s[t.id] = {
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
                    o[t.id] = {
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
                    t in s && (s[t] = {
                        ...s[t],
                        shouldMention: n
                    }), t in o && (o[t] = {
                        ...o[t],
                        shouldMention: n
                    })
                },
                DELETE_PENDING_REPLY: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete s[t], delete o[t]
                },
                CONNECTION_OPEN: u,
                LOGOUT: u,
                MESSAGE_DELETE: function(e) {
                    var t, n, i;
                    let {
                        id: l,
                        channelId: a
                    } = e;
                    if ((null === (n = s[a]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === l) delete s[a];
                    else {
                        if ((null === (i = o[a]) || void 0 === i ? void 0 : i.messageId) !== l) return !1;
                        delete o[a]
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
                    return v
                },
                getIsPrivate: function() {
                    return D
                },
                getDefaultThreadName: function() {
                    return y
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
            }), n("424973"), n("222007");
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
                _ = n("804888"),
                I = n("42203"),
                C = n("474643"),
                T = n("377253"),
                A = n("401848"),
                E = n("568734"),
                N = n("252862"),
                S = n("300322"),
                M = n("24337"),
                g = n("648564"),
                O = n("49111"),
                h = n("782340");

            function v(e) {
                let t = (0, S.useCanStartPublicThread)(e),
                    n = (0, S.useCanStartPrivateThread)(e);
                return n ? t ? 2 : 3 : 1
            }

            function D(e, t) {
                var n;
                if (3 === t) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function y(e, t) {
                var n, i, l, a;
                let s = null == t ? null : T.default.getMessage(e.id, t),
                    o = null !== (l = null == s ? void 0 : null === (i = s.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
                if ("" !== o) return o.length > 40 ? o.substring(0, 40) + "..." : o;
                {
                    let t = m.default.unparse(null !== (a = null == s ? void 0 : s.content) && void 0 !== a ? a : "", e.id, !0),
                        n = (0, M.default)(t.split("\n")[0], !0),
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
                    location: o,
                    onThreadCreated: r,
                    useDefaultThreadName: p,
                    uploadHandler: f
                } = e;
                return a.useCallback(async (e, a, _) => {
                    var T;
                    let A = null == n,
                        E = D(i, l),
                        S = null !== (T = i.name) && void 0 !== T ? T : "";
                    if ("" === S && p) {
                        let e = y(t, n);
                        S = "" !== e ? e : h.default.Messages.THREAD
                    }
                    let M = (0, N.getAutoArchiveDuration)(t),
                        g = I.default.getChannel(n),
                        v = await U(t, () => {
                            let e = null != n ? O.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : O.Endpoints.CHANNEL_THREADS(t.id);
                            return s.default.post({
                                url: e,
                                body: {
                                    name: S,
                                    type: E ? O.ChannelTypes.PRIVATE_THREAD : t.type === O.ChannelTypes.GUILD_ANNOUNCEMENT ? O.ChannelTypes.ANNOUNCEMENT_THREAD : O.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: M,
                                    location: o
                                }
                            })
                        });
                    v !== g && (u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), null == r || r(v), (A || e.length > 0 || null != a && a.length > 0 || null != _ && _.length > 0) && function(e, t, n, i, l) {
                        if (null != l && null != i && i.length > 0) l(e, i, t, n);
                        else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                        else d.default.sendMessage(e.id, m.default.parse(e, t))
                    }(v, e, a, _, f)), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage)
                }, [t, n, i, r, l, o, p, f])
            }

            function P(e, t, n, i, l) {
                return U(e, () => s.default.post({
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
                    upload: o
                } = e;
                return a.useCallback(async (e, a, r) => {
                    let d = 0,
                        [p, m] = (0, _.default)(e);
                    p && (e = m, d = (0, E.addFlag)(d, O.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let I = (0, N.getAutoArchiveDuration)(t, null),
                        T = O.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                        A = {
                            name: n,
                            auto_archive_duration: I,
                            applied_tags: i,
                            message: {
                                content: e,
                                sticker_ids: a,
                                flags: 0 !== d ? d : void 0
                            }
                        },
                        S = await U(t, () => null != r && r.length > 0 ? o(T, A, r) : s.default.post({
                            url: T,
                            body: A
                        }));
                    return u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: S.id
                    }), null == l || l(S), S
                }, [t, n, l, i, o])
            }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
            async function U(e, t) {
                let n;
                let i = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? r.default.show({
                        title: h.default.Messages.ERROR,
                        body: h.default.Messages.ERROR_OCCURRED_TRY_AGAIN
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
                    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === O.AbortCodes.TOO_MANY_THREADS) r.default.show({
                        title: i ? h.default.Messages.CANNOT_CREATE_FORUM_POST : h.default.Messages.CANNOT_CREATE_THREAD,
                        body: i ? h.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : h.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === O.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) r.default.show({
                        title: h.default.Messages.CANNOT_CREATE_THREAD,
                        body: h.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === O.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && o.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: A.SlowmodeType.CreateThread,
                            cooldownMs: 1e3 * n
                        })
                    } else if (429 === t.status) r.default.show({
                        title: i ? h.default.Messages.CANNOT_CREATE_FORUM_POST : h.default.Messages.CANNOT_CREATE_THREAD,
                        body: h.default.Messages.RATE_LIMITED
                    });
                    else if (g.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
                    else {
                        if (g.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                            null == t.body && n(), p.default.addConditionalChangeListener(() => {
                                let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let i = I.default.getChannel(t);
                                    return o.default.wait(() => {
                                        null == i ? n() : e(i)
                                    }), !1
                                }
                            })
                        });
                        r.default.show({
                            title: h.default.Messages.ERROR,
                            body: h.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                }
                return new Promise((e, t) => {
                    null == n.body && t(), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getChannel(n.body.id);
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
//# sourceMappingURL=058fecdc6256ae1e97d9.js.map