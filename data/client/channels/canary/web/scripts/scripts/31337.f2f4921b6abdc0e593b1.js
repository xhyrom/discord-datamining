(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31337"], {
        223468: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("872717"),
                l = n("819689"),
                a = n("49111"),
                o = n("782340"),
                r = {
                    changeNickname: (e, t, n, r) => i.default.patch({
                        url: a.Endpoints.GUILD_MEMBER_NICK(e, n),
                        body: {
                            nick: r
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        r = e.body.nick, l.default.sendBotMessage(t, null != r && "" !== r ? o.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                            nick: r
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
                            spoiler: r,
                            thumbnail: s
                        } = l;
                        i.default.dispatch({
                            type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                            channelId: e,
                            id: t,
                            filename: o,
                            description: a,
                            thumbnail: s,
                            spoiler: r,
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
        926001: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("670598");
            n.es(i, t)
        },
        841362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                numberParts: function() {
                    return i
                }
            });
            let i = {
                __proto__: null,
                bg: {
                    group: " ",
                    decimal: ","
                },
                cs: {
                    group: " ",
                    decimal: ","
                },
                da: {
                    group: ".",
                    decimal: ","
                },
                de: {
                    group: ".",
                    decimal: ","
                },
                el: {
                    group: ".",
                    decimal: ","
                },
                "en-GB": {
                    group: ",",
                    decimal: "."
                },
                "en-US": {
                    group: ",",
                    decimal: "."
                },
                "es-ES": {
                    group: ".",
                    decimal: ","
                },
                "es-419": {
                    group: ".",
                    decimal: ","
                },
                fi: {
                    group: " ",
                    decimal: ","
                },
                fr: {
                    group: " ",
                    decimal: ","
                },
                hi: {
                    group: ",",
                    decimal: "."
                },
                hr: {
                    group: ".",
                    decimal: ","
                },
                hu: {
                    group: " ",
                    decimal: ","
                },
                it: {
                    group: ".",
                    decimal: ","
                },
                ja: {
                    group: ",",
                    decimal: "."
                },
                ko: {
                    group: ",",
                    decimal: "."
                },
                lt: {
                    group: " ",
                    decimal: ","
                },
                nl: {
                    group: ".",
                    decimal: ","
                },
                no: {
                    group: " ",
                    decimal: ","
                },
                pl: {
                    group: " ",
                    decimal: ","
                },
                "pt-BR": {
                    group: ".",
                    decimal: ","
                },
                ro: {
                    group: ".",
                    decimal: ","
                },
                ru: {
                    group: " ",
                    decimal: ","
                },
                "sv-SE": {
                    group: " ",
                    decimal: ","
                },
                th: {
                    group: ",",
                    decimal: "."
                },
                tr: {
                    group: ".",
                    decimal: ","
                },
                uk: {
                    group: " ",
                    decimal: ","
                },
                vi: {
                    group: ".",
                    decimal: ","
                },
                "zh-CN": {
                    group: ",",
                    decimal: "."
                },
                "zh-TW": {
                    group: ",",
                    decimal: "."
                }
            }
        },
        981112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                stageAttachmentFiles: function() {
                    return m
                },
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("70102");
            var i, l = n("811022"),
                a = n("994440"),
                o = n("282928"),
                r = n("142852"),
                s = n("402752"),
                u = n("572868"),
                d = n("49111"),
                c = n("894488"),
                p = n("782340");
            let f = new l.default("CloudUploaderBase.tsx");
            async function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = e.map(e => new Promise((i, l) => {
                        switch (e.status) {
                            case o.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case o.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case o.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : l(Error("File failed to upload"));
                                break;
                            case o.CloudUploadStatus.CANCELED:
                                l(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            i("complete")
                        }), e.on("error", () => {
                            l(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == n || n(e, t)
                        })
                    }));
                await Promise.all(i)
            }
            i = class extends u.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let n = (0, r.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (f.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : p.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        n = this.files.some(e => e.isVideo),
                        i = this._fileSize();
                    f.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: i,
                        currentSize: i,
                        name: e,
                        hasVideo: n,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
                    this._handleProgress(e, t, n)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var n;
                            return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, s.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    f.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    f.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === o.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, a.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === o.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === o.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
        },
        572868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("70102");
            var i, l = n("44170"),
                a = n("917351"),
                o = n.n(a),
                r = n("605250"),
                s = n("402752"),
                u = n("894488");
            let d = new r.default("UploaderBase.tsx");
            i = class extends l.EventEmitter {
                _addAttachmentsToPayload(e, t, n) {
                    let i = {
                            ...e
                        },
                        l = [...o.get(i, t, []), ...n];
                    return o.set(i, t, l)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, n) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: n
                    }
                }
                constructor(e, t = "POST", n) {
                    var i;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, n) => {
                        let i = Date.now(),
                            l = (0, s.calculateProgress)(e, t),
                            a = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var o;
                            null === (o = this._file.items) || void 0 === o || o.forEach(e => {
                                e.item.progress = n[e.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: l,
                            rate: a
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: u.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: n,
                            body: i
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, i, n), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = o.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i
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
                    return o
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

            function o(e) {
                return i.useMemo(() => a(e), [e])
            }
        },
        589777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BUILT_IN_SECTIONS: function() {
                    return L
                },
                getBuiltInCommands: function() {
                    return b
                }
            }), n("222007"), n("70102");
            var i = n("627445"),
                l = n.n(i),
                a = n("866227"),
                o = n.n(a),
                r = n("298386"),
                s = n("223468"),
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
                g = n("718517"),
                h = n("158998"),
                S = n("524768"),
                O = n("317041"),
                M = n("49111"),
                v = n("903639"),
                y = n("782340");
            let D = n("150692").default,
                R = (e, t) => {
                    var n;
                    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
                },
                L = {
                    [O.BuiltInSectionId.BUILT_IN]: {
                        id: O.BuiltInSectionId.BUILT_IN,
                        type: S.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return y.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                        }
                    },
                    [O.BuiltInSectionId.FRECENCY]: {
                        id: O.BuiltInSectionId.FRECENCY,
                        type: S.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return y.default.Messages.FREQUENTLY_USED
                        }
                    }
                },
                P = [...D, {
                    id: "-1",
                    name: "shrug",
                    displayName: "shrug",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: S.ApplicationCommandInputType.BUILT_IN_TEXT,
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
                    inputType: S.ApplicationCommandInputType.BUILT_IN_TEXT,
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
                    inputType: S.ApplicationCommandInputType.BUILT_IN_TEXT,
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
                    inputType: S.ApplicationCommandInputType.BUILT_IN_TEXT,
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
                        return !t.isPrivate() && T.EnableTTSCommand.getSetting() && E.default.can(M.Permissions.SEND_TTS_MESSAGES, t)
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
                    inputType: S.ApplicationCommandInputType.BUILT_IN_TEXT,
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
                    inputType: S.ApplicationCommandInputType.BUILT_IN_TEXT,
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
                            content: (0, M.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                        }
                    }
                }, {
                    id: "-7",
                    name: "nick",
                    displayName: "nick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: S.ApplicationCommandInputType.BUILT_IN,
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
                        return !t.isPrivate() && (E.default.can(M.Permissions.CHANGE_NICKNAME, t) || E.default.can(M.Permissions.MANAGE_NICKNAMES, t))
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "new_nick")) && void 0 !== n ? n : "";
                        s.default.changeNickname(i.id, l.id, M.ME, a || "")
                    }
                }, {
                    id: "-10",
                    name: "thread",
                    displayName: "thread",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: S.ApplicationCommandInputType.BUILT_IN,
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
                        } = t, a = null !== (n = R(e, "name")) && void 0 !== n ? n : "", o = null !== (i = R(e, "message")) && void 0 !== i ? i : "", s = await (0, I.createThread)(l, a, r.ChannelTypes.PUBLIC_THREAD, (0, _.getAutoArchiveDuration)(l, null), "Slash Command");
                        c.default.sendMessage(s.id, m.default.parse(s, o))
                    }
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: S.ApplicationCommandInputType.BUILT_IN,
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
                        return E.default.can(M.Permissions.KICK_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(M.Permissions.KICK_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_KICK_UNABLE);
                            return
                        }
                        let o = async () => {
                            var t;
                            let n = N.default.getUser(a);
                            if (null == n) throw Error();
                            await d.default.kickUser(i.id, a, null !== (t = R(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                user: h.default.getUserTag(n)
                            }))
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_KICK_ERROR)
                        })
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: S.ApplicationCommandInputType.BUILT_IN,
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
                                value: g.default.Seconds.HOUR
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * g.default.Seconds.HOUR
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * g.default.Seconds.HOUR
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: g.default.Seconds.DAY
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * g.default.Seconds.DAY
                            }, {
                                name: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: y.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * g.default.Seconds.DAY
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
                        return E.default.can(M.Permissions.BAN_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!E.default.canManageUser(M.Permissions.BAN_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_BAN_UNABLE);
                            return
                        }
                        let o = async () => {
                            var t, n;
                            if ("" === a) throw Error();
                            let o = null !== (t = R(e, "delete_messages")) && void 0 !== t ? t : 0,
                                r = null !== (n = R(e, "reason")) && void 0 !== n ? n : "",
                                s = N.default.getUser(a);
                            await d.default.banUser(i.id, a, o, r), c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                user: null != s ? h.default.getUserTag(s) : a
                            }))
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(l.id, y.default.Messages.COMMAND_BAN_ERROR)
                        })
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: S.ApplicationCommandInputType.BUILT_IN,
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
                        return E.default.can(M.Permissions.MODERATE_MEMBERS, t)
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
                            let r = null !== (t = R(e, "duration")) && void 0 !== t ? t : "",
                                s = null !== (a = R(e, "reason")) && void 0 !== a ? a : "",
                                u = N.default.getUser(l);
                            if (null == u) throw Error();
                            await d.default.setCommunicationDisabledUntil({
                                guildId: n.id,
                                userId: l,
                                communicationDisabledUntilTimestamp: o().add(r, "s").toISOString(),
                                duration: r,
                                reason: s
                            }), c.default.sendBotMessage(i.id, y.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: h.default.getUserTag(u),
                                duration: r
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
                    inputType: S.ApplicationCommandInputType.BUILT_IN,
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
                            return (null === (U = N.default.getCurrentUser()) || void 0 === U ? void 0 : U.premiumType) ? M.MAX_MESSAGE_LENGTH_PREMIUM : M.MAX_MESSAGE_LENGTH
                        }
                    }],
                    execute: (e, t) => {
                        var n;
                        let {
                            channel: i
                        } = t, a = R(e, "user"), o = null !== (n = R(e, "message")) && void 0 !== n ? n : "", r = async () => {
                            await u.default.openPrivateChannel(a).then(e => {
                                let t = A.default.getChannel(e);
                                l(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, m.default.parse(t, o))
                            })
                        };
                        r().catch(() => {
                            c.default.sendBotMessage(i.id, y.default.Messages.COMMAND_MSG_ERROR)
                        })
                    }
                }],
                F = P.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
                b = (e, t, n) => {
                    let i = t ? P : F;
                    return i = i.filter(t => t.type === e && (!n || t.inputType === S.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === S.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
                }
        },
        369010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTopCommands: function() {
                    return r
                },
                useTopRealCommands: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("446674"),
                a = n("872173"),
                o = n("342564");

            function r(e) {
                i.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getTopCommandsWithoutLoadingLatest()),
                    n = i.useMemo(() => (0, o.getFilteredTopCommands)(t, e), [t, e]);
                return n
            }

            function s(e) {
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
            }), n("222007"), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                o = n("913144"),
                r = n("798609"),
                s = n("80507"),
                u = n("374363"),
                d = n("317041"),
                c = n("397336");
            let p = {
                    pendingUsages: []
                },
                f = new s.default({
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
            var A = new T(o.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t,
                        context: n
                    } = e;
                    if (t.type !== r.ApplicationCommandType.CHAT) return !1;
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
                    return s
                },
                requestApplicationCommandIndex: function() {
                    return u
                }
            });
            var i = n("872717"),
                l = n("913144"),
                a = n("599110"),
                o = n("718517"),
                r = n("49111");
            async function s(e, t, n) {
                let s, u = 0;
                switch (e.type) {
                    case "channel":
                        s = r.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        s = r.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        s = r.Endpoints.APPLICATION_COMMAND_INDEX_USER
                }
                let d = async t => u >= 3 ? (p(!0), l.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                    target: e
                })) : (await new Promise(e => setTimeout(e, t)), c()), c = () => i.default.get({
                    url: s,
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
                    return 429 === t.status ? d(t.body.retry_after * o.default.Millis.SECOND) : (p(!0), l.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                        target: e
                    }))
                }), p = e => {
                    let i = performance.now() - t;
                    a.default.track(r.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
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
                    return z
                },
                useContextIndexState: function() {
                    return K
                },
                useGuildIndexState: function() {
                    return X
                },
                useUserIndexState: function() {
                    return Q
                },
                useDiscoveryState: function() {
                    return Z
                },
                useQueryState: function() {
                    return $
                }
            }), n("222007"), n("424973"), n("881410");
            var i, l, a = n("884691"),
                o = n("627445"),
                r = n.n(o),
                s = n("811022"),
                u = n("446674"),
                d = n("913144"),
                c = n("851387");
            n("798609");
            var p = n("605393"),
                f = n("892692"),
                m = n("915639"),
                _ = n("872173"),
                I = n("42203"),
                C = n("305961"),
                T = n("162771"),
                A = n("697218"),
                E = n("599110"),
                N = n("589777"),
                g = n("369010"),
                h = n("342564"),
                S = n("9566"),
                O = n("972620"),
                M = n("524768"),
                v = n("389153"),
                y = n("123373"),
                D = n("217946"),
                R = n("317041"),
                L = n("49111");
            let P = new s.default("ApplicationCommandIndexStore"),
                U = Symbol("currentUser"),
                F = Symbol("stale"),
                b = Symbol("current"),
                H = Object.freeze({
                    descriptors: [],
                    commands: [],
                    sectionedCommands: [],
                    loading: !0
                }),
                x = Object.freeze({
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
                B = Object.freeze({
                    serverVersion: F,
                    fetchState: {
                        fetching: !1
                    }
                }),
                w = {
                    sensitivity: "accent",
                    numeric: !0
                };

            function G(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return U
                }
            }

            function k(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = G(e),
                    l = q.indices[i];
                return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), q.indices[i] = {
                    ...l,
                    ...t
                }) : n && (q.indices[i] = {
                    serverVersion: F,
                    fetchState: {
                        fetching: !1
                    },
                    ...t
                }), l
            }

            function Y(e) {
                let t = G(e),
                    n = q.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete q.indices[t]
            }

            function W() {
                for (let e of Object.values(q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
                q.indices = {}
            }

            function V() {
                k({
                    type: "user"
                }, {
                    serverVersion: F
                })
            }
            class j extends u.default.Store {
                initialize() {
                    this.waitFor(m.default), this.syncWith([m.default], () => {
                        ! function() {
                            let e = m.default.locale;
                            e !== q.oldLocale && (W(), q.collator = new Intl.Collator(e, {
                                sensitivity: "accent",
                                numeric: !0
                            }), q.oldLocale = e)
                        }()
                    })
                }
                getContextState(e) {
                    var t, n;
                    return null != e && en(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : B : x
                }
                getUserState() {
                    var e;
                    let t = T.default.getGuildId();
                    return (0, v.isInUserAppExperiment)(t, {
                        location: "getUserState"
                    }, {
                        autoTrackExposure: !1
                    }) ? null !== (e = this.indices[U]) && void 0 !== e ? e : B : x
                }
                query(e, t, n) {
                    let i = A.default.getCurrentUser();
                    if (null == i) return H;
                    let l = this.getContextState(e),
                        a = this.getUserState(),
                        o = (0, y.buildPermissionContext)(e, t.commandType),
                        r = !1 !== t.applicationCommands && o.hasBaseAccessPermissions,
                        s = !1;
                    if (n.allowFetch) {
                        let t = r && en(e);
                        t && (E.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: null == l.result,
                            size: Object.keys(q.indices).length
                        }), ei(l) && (null != e.guild_id ? (0, S.requestApplicationCommandIndex)({
                            type: "guild",
                            guildId: e.guild_id
                        }) : (0, S.requestApplicationCommandIndex)({
                            type: "channel",
                            channelId: e.id
                        }), s = !0)), (0, v.isInUserAppExperiment)(e.guild_id, {
                            location: "query"
                        }) && ei(a) && ((0, S.requestApplicationCommandIndex)({
                            type: "user"
                        }), s = !0)
                    }
                    let u = ee({
                        permissionContext: o,
                        text: t.text,
                        allowApplicationCommands: r,
                        builtIns: t.builtIns,
                        scoreMethod: n.scoreMethod,
                        allowEmptySections: n.allowEmptySections,
                        contextState: l,
                        userState: a
                    });
                    return u.loading = u.loading || s, u
                }
                constructor(...e) {
                    super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, w)
                }
            }
            j.displayName = "ApplicationCommandIndexStore";
            let q = new j(d.default, {
                LOGOUT: W,
                CONNECTION_OPEN: function() {
                    for (let e of Object.values(q.indices)) e.serverVersion = F
                },
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    var t;
                    let {
                        target: n,
                        start: i
                    } = e;
                    if (ei(null !== (t = q.indices[G(n)]) && void 0 !== t ? t : B)) {
                        let e = new AbortController;
                        k(n, {
                            fetchState: {
                                fetching: !0,
                                abort: e
                            }
                        }, !0), (0, S.fetchApplicationCommandIndex)(n, i, e)
                    }
                },
                APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
                    var t, n;
                    let {
                        target: i,
                        index: l
                    } = e, a = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == a) return !1;
                    let o = {},
                        r = {},
                        s = new Set;
                    for (let e of l.applications) {
                        if (null == e.bot && null != e.bot_id) {
                            r[e.bot_id] = e.id;
                            let t = A.default.getUser(e.bot_id);
                            null != t ? e.bot = t : s.add(e.bot_id)
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
                                permissions: null != e.permissions ? (0, f.keyPermissions)(eo(e.permissions, a)) : void 0,
                                botId: e.bot_id
                            },
                            commands: {}
                        };
                        o[e.id] = t
                    }
                    for (let e of ("guild" === i.type && s.size > 0 && c.default.requestMembersById(i.guildId, [...s]), (0, v.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
                            var n, i, l, a, o;
                            let r = {
                                ...e,
                                description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                                dm_permission: void 0,
                                name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                                options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(el)) && void 0 !== o ? o : [],
                                permissions: null != e.permissions ? eo(e.permissions, t) : void 0
                            };
                            return e.description !== e.description_default && (r.description_localized = e.description), e.name !== e.name_default && (r.name_localized = e.name), r
                        })(e, a)), !0))) {
                        let t = o[e.applicationId];
                        if (null == t) {
                            P.error("Command has no matching application");
                            continue
                        }
                        t.commands[e.id] = e
                    }
                    let u = null !== (n = l.version) && void 0 !== n ? n : b;
                    k(i, {
                        serverVersion: u,
                        result: {
                            sections: o,
                            sectionIdsByBotId: r,
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
                    k(t, {
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
                    k(t = null != i ? {
                        type: "guild",
                        guildId: i
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: F
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
                    } = e, l = k({
                        type: "guild",
                        guildId: n
                    }, {
                        serverVersion: null != i ? i : F
                    }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
                    if (null != a)
                        for (let e in a) {
                            let t = I.default.getDMFromUserId(e);
                            null != t && k({
                                type: "channel",
                                channelId: t
                            }, {
                                serverVersion: F
                            })
                        }
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n
                    } = e;
                    return function(e, t) {
                        var n;
                        let i = G({
                                type: "guild",
                                guildId: e
                            }),
                            l = null === (n = q.indices[i]) || void 0 === n ? void 0 : n.result;
                        if (null == l) return !1;
                        let a = !1;
                        return t.forEach(e => {
                            let {
                                user: t
                            } = e;
                            if (!t.bot) return;
                            let n = l.sectionIdsByBotId[t.id];
                            if (null == n) return;
                            let i = l.sections[n];
                            r(null != i, "Bot has no matching index section"), r(null != i.descriptor.application, "Bot's index section has no application info");
                            let o = (0, v.getApplicationCommandSection)({
                                ...i.descriptor.application,
                                bot: t
                            });
                            i.descriptor = {
                                ...i.descriptor,
                                ...o
                            }, a = !0
                        }), a
                    }(t, n)
                },
                USER_APPLICATION_UPDATE: V,
                USER_APPLICATION_REMOVE: V
            });
            var z = q;

            function K(e, t, n) {
                let [i, l] = a.useState(!0), o = (0, u.useStateFromStoresObject)([q], () => q.getContextState(e));
                return a.useEffect(() => {
                    if (i && null != e) {
                        if (n) {
                            let n = t && en(e);
                            n && (E.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == o.result,
                                size: Object.keys(q.indices).length
                            }), ei(o) && (null != e.guild_id ? (0, S.requestApplicationCommandIndex)({
                                type: "guild",
                                guildId: e.guild_id
                            }) : (0, S.requestApplicationCommandIndex)({
                                type: "channel",
                                channelId: e.id
                            })))
                        }
                        l(!1)
                    }
                }, [o, n, e, t, i]), o
            }

            function X(e, t) {
                let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([q], () => {
                    var t;
                    return null !== (t = q.indices[e]) && void 0 !== t ? t : B
                });
                return a.useEffect(() => {
                    n && null != e && (t && (E.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == l.result,
                        size: Object.keys(q.indices).length
                    }), ei(l) && (0, S.requestApplicationCommandIndex)({
                        type: "guild",
                        guildId: e
                    })), i(!1))
                }, [l, t, e, n]), l
            }

            function Q(e, t) {
                let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([q], () => q.getUserState()), o = (0, u.useStateFromStores)([T.default], T.default.getGuildId), r = (0, v.useIsInUserAppExperiment)(o, {
                    location: "useUserIndexState"
                });
                return a.useEffect(() => {
                    n && (t && ei(l) && e && r && (0, S.requestApplicationCommandIndex)({
                        type: "user"
                    }), i(!1))
                }, [l, t, e, r, n]), l
            }

            function Z(e, t, n, i) {
                let {
                    descriptors: l,
                    commands: o,
                    sectionedCommands: r,
                    loading: s
                } = $(e, n, i), u = (0, g.useTopCommands)({
                    channel: e,
                    guild: t
                });
                return a.useMemo(() => {
                    if (!i.includeFrecency || 0 === u.length) return {
                        descriptors: l,
                        commands: o,
                        sectionedCommands: r,
                        loading: s
                    };
                    let n = {
                            channel: e,
                            guild: t
                        },
                        a = o.filter(e => u.includes(e.id)).sort((e, t) => {
                            let i = h.default.getScoreWithoutLoadingLatest(n, e),
                                l = h.default.getScoreWithoutLoadingLatest(n, t);
                            return l - i
                        }).splice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
                    return 0 === a.length ? {
                        descriptors: l,
                        commands: o,
                        sectionedCommands: r,
                        loading: s
                    } : {
                        descriptors: [N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY], ...l],
                        commands: a.concat(o),
                        sectionedCommands: [{
                            section: N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY],
                            data: a
                        }, ...r],
                        loading: s
                    }
                }, [s, i.includeFrecency, u, e, t, o, l, r])
            }
            let J = Object.freeze({
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
                    o = K(e, l, n.allowFetch),
                    r = Q(l, n.allowFetch);
                return a.useMemo(() => ee({
                    permissionContext: i,
                    text: t.text,
                    allowApplicationCommands: l,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: o,
                    userState: r,
                    sortOptions: n.sortOptions
                }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, n.sortOptions, o, r])
            }

            function ee(e) {
                let {
                    permissionContext: t,
                    contextState: n,
                    userState: i,
                    text: l,
                    builtIns: a = O.BuiltInCommandFilter.ALLOW,
                    allowApplicationCommands: o = !0,
                    allowEmptySections: s = !1,
                    scoreMethod: u = O.ScoreMethod.NONE,
                    sortOptions: d = J
                } = e, {
                    commandType: c
                } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), I = a === O.BuiltInCommandFilter.ONLY_TEXT, T = a !== O.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(c, !0, I) : [], A = [], E = {
                    permissionContext: t,
                    query: f,
                    splitQuery: m,
                    allowEmptySections: s,
                    scoreMethod: u
                };
                if (o) {
                    var g, S, M, v;
                    let e = null !== (M = null === (g = n.result) || void 0 === g ? void 0 : g.sections) && void 0 !== M ? M : {},
                        t = null !== (v = null === (S = i.result) || void 0 === S ? void 0 : S.sections) && void 0 !== v ? v : {},
                        l = [...Object.keys(e), ...Object.keys(t).filter(t => !(t in e))];
                    for (let n of l) {
                        let i, l;
                        let a = e[n],
                            o = t[n];
                        if (null != a && null != o) {
                            for (let e in i = o.descriptor, l = [], o.commands) {
                                let t = o.commands[e];
                                l.push(t)
                            }
                            for (let e in a.commands)
                                if (!(e in o.commands)) {
                                    let t = a.commands[e];
                                    l.push(t)
                                }
                        } else null != a ? (i = a.descriptor, l = Object.values(a.commands)) : null != o && (i = o.descriptor, l = Object.values(o.commands));
                        r(null != i, "Failed to select application descriptor"), r(null != l, "Failed to select list of application commands");
                        let s = et(i, l, E);
                        null != s && A.push(s)
                    }
                    d.applications.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                        if (d.applications.useScore && u === O.ScoreMethod.APPLICATION_ONLY) {
                            var n, i, l, a;
                            let o = null !== (l = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : Number.MAX_VALUE,
                                r = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
                            if (o !== r) return o - r
                        }
                        if (d.applications.useFrecency) {
                            let n = p.default.getScoreWithoutLoadingLatest(e.section.id),
                                i = p.default.getScoreWithoutLoadingLatest(t.section.id);
                            if (n !== i) return i - n
                        }
                        return er(e.section.name, t.section.name)
                    })
                }
                if (T.length > 0 || !0 === s) {
                    let e = et(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN], T, E);
                    null != e && A.push(e)
                }
                let y = A.flatMap(e => e.data.map(t => ({
                    ...t,
                    section: e.section
                })));
                if (u === O.ScoreMethod.COMMAND_ONLY || u === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                    let e = t.context,
                        n = C.default.getGuild(t.context.guild_id);
                    d.commands.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), y.sort((t, i) => {
                        if (d.commands.useScore) {
                            var l, a;
                            let e = null !== (l = t.score) && void 0 !== l ? l : 0,
                                n = null !== (a = i.score) && void 0 !== a ? a : 0;
                            if (e !== n) return e - n
                        }
                        if (d.commands.useFrecency) {
                            let l = h.default.getScoreWithoutLoadingLatest({
                                    channel: e,
                                    guild: n
                                }, t),
                                a = h.default.getScoreWithoutLoadingLatest({
                                    channel: e,
                                    guild: n
                                }, i);
                            if (l !== a) return a - l
                        }
                        return er(t.displayName, i.displayName)
                    })
                }
                return {
                    commands: y,
                    descriptors: A.map(e => e.section),
                    sectionedCommands: A,
                    loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
                }
            }

            function et(e, t, n) {
                let i, {
                        query: l,
                        splitQuery: a,
                        allowEmptySections: o,
                        scoreMethod: r,
                        permissionContext: s
                    } = n,
                    {
                        context: u,
                        userId: d,
                        roleIds: c,
                        isImpersonating: p
                    } = s,
                    f = null != u.guild_id ? D.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
                    m = null != u.guild_id ? D.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
                    _ = [];
                for (let n of t) {
                    let t = D.hasAccess(n, s, f, m, e.botId);
                    t === D.HasAccessResult.ALLOWED && _.push(n)
                }
                return 0 !== (i = r !== O.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
                    let a;
                    let o = [];
                    if (l === O.ScoreMethod.APPLICATION_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                        let t = i.name.toLocaleLowerCase();
                        t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
                    }
                    let r = t[0],
                        s = t.slice(1).join(" ");
                    for (let t of n) {
                        let n;
                        if (l === O.ScoreMethod.COMMAND_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                            var u;
                            n = null !== (u = function(e, t, n, i) {
                                var l;
                                let a = e.name,
                                    o = e.displayName;
                                if (a.startsWith(t) || o.startsWith(t)) return 0;
                                if (a.startsWith(n)) {
                                    let e = a.split(" ").slice(1).join(" ");
                                    if (e.startsWith(i)) return 1
                                }
                                if (o.startsWith(n)) {
                                    let e = o.split(" ").slice(1).join(" ");
                                    if (e.startsWith(i)) return 1
                                }
                                if (a.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
                                let r = !1;
                                for (let {
                                        name: n,
                                        serverLocalizedName: i
                                    }
                                    of null !== (l = e.options) && void 0 !== l ? l : []) {
                                    if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != o && "".concat(o, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(a, " ").concat(i).startsWith(t) || null != o && "".concat(o, " ").concat(i).startsWith(t))) return 3;
                                    (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (r = !0)
                                }
                                if (r) return 4
                            }(t, e, r, s)) && void 0 !== u ? u : a
                        } else n = a;
                        void 0 !== n && o.push({
                            ...t,
                            score: n
                        })
                    }
                    return o
                }(l, a, _, e, r) : _).length || o ? ((r === O.ScoreMethod.NONE || r === O.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => er(e.displayName, t.displayName)), {
                    section: e,
                    data: i
                }) : null
            }

            function en(e) {
                var t;
                return null != e.guild_id || e.type === L.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
            }

            function ei(e) {
                return !! function(e) {
                    var t;
                    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
                }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function el(e) {
                var t, n, i, l;
                let a = {
                    ...e,
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ea),
                    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
                    name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(el)
                };
                return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
            }

            function ea(e) {
                var t;
                let n = {
                    ...e,
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                };
                return e.name !== e.name_default && (n.name_localized = e.name), n
            }

            function eo(e, t) {
                let n = [];
                if (null != e.user && n.push({
                        type: M.ApplicationCommandPermissionType.USER,
                        id: t,
                        permission: e.user
                    }), null != e.channels)
                    for (let [t, i] of Object.entries(e.channels)) n.push({
                        type: M.ApplicationCommandPermissionType.CHANNEL,
                        id: t,
                        permission: i
                    });
                if (null != e.roles)
                    for (let [t, i] of Object.entries(e.roles)) n.push({
                        type: M.ApplicationCommandPermissionType.ROLE,
                        id: t,
                        permission: i
                    });
                return n
            }(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

            function er(e, t) {
                return q.collator.compare(e, t)
            }
        },
        118200: function(e, t, n) {
            "use strict";
            let i, l, a;
            n.r(t), n.d(t, {
                filterEmpty: function() {
                    return u
                },
                getString: function() {
                    return d
                },
                getOptionalString: function() {
                    return c
                },
                normalizeNumericString: function() {
                    return p
                },
                getInitialValuesFromInteractionOptions: function() {
                    return f
                }
            }), n("781738"), n("222007"), n("627445");
            var o = n("798609"),
                r = n("841362"),
                s = n("655518");

            function u(e) {
                return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
            }

            function d(e, t) {
                let n = e[t],
                    i = "";
                for (let e of n) switch (e.type) {
                    case "text":
                    case "textMention":
                        i += e.text;
                        break;
                    case "userMention":
                        i += "<@".concat(e.userId, ">");
                        break;
                    case "channelMention":
                        i += "<#".concat(e.channelId, ">");
                        break;
                    case "roleMention":
                        i += "<@&".concat(e.roleId, ">");
                        break;
                    case "emoji":
                        i += e.surrogate;
                        break;
                    case "customEmoji":
                        i += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
                }
                return i
            }

            function c(e, t) {
                return null == e[t] ? null : d(e, t)
            }

            function p(e, t) {
                if (e !== a) {
                    var n;
                    a = e;
                    let {
                        group: t,
                        decimal: o
                    } = null !== (n = r.numberParts[e]) && void 0 !== n ? n : r.numberParts["en-US"];
                    i = RegExp(s.default.escape(t), "g"), l = RegExp(s.default.escape(o), "g")
                }
                return t.replace(i, "").replace(l, ".")
            }

            function f(e, t) {
                let n = {};
                for (let l of t) {
                    var i;
                    let t = null === (i = e.options) || void 0 === i ? void 0 : i.find(e => e.name === l.name);
                    if (l.type !== o.ApplicationCommandOptionType.ATTACHMENT)(null == t || !t.autocomplete) && (n[l.name] = l)
                }
                return n
            }
            n("317041")
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
                    return g
                },
                getChangeKeys: function() {
                    return h
                },
                useDiscovery: function() {
                    return S
                },
                executeQuery: function() {
                    return O
                },
                useQuery: function() {
                    return M
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
                o = n("305961"),
                r = n("697218"),
                s = n("449008"),
                u = n("507217"),
                d = n("589777"),
                c = n("14090"),
                p = n("988721"),
                f = n("972620"),
                m = n("216193"),
                _ = n("166004"),
                I = n("524768"),
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
                let o = p.default.getUserState(),
                    r = p.default.getContextState(e),
                    s = Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (a = null === (i = r.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}));
                for (let e of s) {
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
                var i, l, a, o, r, s;
                if (!R({
                        location: "getCachedApplicationSection"
                    })) return null === (r = _.default.getApplicationSections(e.id, t)) || void 0 === r ? void 0 : r.find(e => e.id === n);
                let u = p.default.getUserState(),
                    d = p.default.getContextState(e),
                    c = null !== (s = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== s ? s : null === (o = d.result) || void 0 === o ? void 0 : null === (a = o.sections) || void 0 === a ? void 0 : a[n];
                return null == c ? void 0 : c.descriptor
            }

            function g(e, t, n) {
                if (!R({
                        location: "getCachedResults"
                    })) {
                    var i, l;
                    return {
                        commands: null !== (i = _.default.getQueryCommands(e.id, t, n)) && void 0 !== i ? i : [],
                        sections: null !== (l = _.default.getApplicationSections(e.id, t)) && void 0 !== l ? l : []
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

            function h(e, t, n) {
                if (!R({
                        location: "getChangeKeys"
                    }, {
                        autoTrackExposure: !1
                    })) return [_.default.getQueryCommands(e.id, t, n)];
                let i = p.default.getUserState(),
                    l = p.default.getContextState(e);
                return [null == i ? void 0 : i.result, null == l ? void 0 : l.result]
            }

            function S(e, t, n) {
                if (!L({
                        location: "useDiscovery"
                    })) {
                    var a, r;
                    return (0, _.useDiscoveryState)(e, t.commandType, null !== (a = n.placeholderCount) && void 0 !== a ? a : 0, null !== (r = n.limit) && void 0 !== r ? r : 10, {
                        canOnlyUseTextCommands: t.builtIns === f.BuiltInCommandFilter.ONLY_TEXT,
                        canUseFrecency: n.includeFrecency
                    })
                }
                let s = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: u,
                        commands: c,
                        sectionedCommands: m,
                        loading: I
                    } = (0, p.useDiscoveryState)(e, s, t, {
                        ...n,
                        allowFetch: !0
                    }),
                    [C, E] = i.useState(null),
                    N = i.useRef(!1);
                N.current = I;
                let g = i.useMemo(() => {
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
                        placeholders: I ? g : [],
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
                    if (I) {
                        let t = m[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: [...t.data, ...g]
                        }, ...m.slice(1)];
                        else {
                            let t = d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN];
                            e.activeSections = [t], e.commandsByActiveSection = [{
                                section: t,
                                data: g
                            }]
                        }
                        e.commands = [...c, ...g]
                    }
                    return e
                }, [c, u, C, m, I, g])
            }

            function O(e, t, n) {
                if (!R({
                        location: "executeQuery"
                    })) {
                    var i, l, o, r, s;
                    return !0 === n.allowFetch && u.querySearchManager((0, a.getCommandContext)(e), null !== (i = t.text) && void 0 !== i ? i : "", null !== (l = n.limit) && void 0 !== l ? l : 10, t.commandType), {
                        commands: null !== (r = _.default.getQueryCommands(e.id, t.commandType, null !== (o = t.text) && void 0 !== o ? o : "")) && void 0 !== r ? r : [],
                        sections: null !== (s = _.default.getApplicationSections(e.id, t.commandType)) && void 0 !== s ? s : []
                    }
                }
                let {
                    descriptors: c,
                    commands: f,
                    loading: m
                } = p.default.query(e, t, n), I = [];
                if (null != n.placeholderCount && m)
                    for (let e = 0; e < n.placeholderCount; e++) I.push(U(e, t.commandType));
                return {
                    commands: m ? [...f, ...I] : f,
                    sections: m && 0 === c.length ? [d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN]] : c
                }
            }

            function M(e, t, n) {
                if (!L({
                        location: "useQuery"
                    })) {
                    var l, a;
                    return (0, _.useQueryState)(e, t.commandType, null !== (l = t.text) && void 0 !== l ? l : "", null !== (a = n.limit) && void 0 !== a ? a : 10)
                }
                let {
                    descriptors: o,
                    commands: r,
                    loading: s
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
                    commands: s ? [...r, ...u] : r,
                    sections: s && 0 === o.length ? [d.BUILT_IN_SECTIONS[T.BuiltInSectionId.BUILT_IN]] : o,
                    scrollDown: A.NOOP
                }), [s, r, o, u])
            }

            function v(e, t) {
                if (!L({
                        location: "useCommand"
                    })) {
                    var n;
                    let a = (0, l.useStateFromStores)([r.default], () => {
                            if (null == e ? void 0 : e.isDM()) {
                                let t = e.getRecipientId(),
                                    n = r.default.getUser(t);
                                if (null != n && n.bot) return n
                            }
                            return null
                        }, [e]),
                        {
                            command: o,
                            application: s
                        } = (0, l.useStateFromStoresObject)([m.default], () => {
                            let e = null != t ? m.default.getCommand(t) : void 0,
                                n = m.default.getApplication(null == e ? void 0 : e.applicationId);
                            return {
                                command: e,
                                application: n
                            }
                        });
                    return (i.useEffect(() => {
                        null != e && null == o && (null != a ? u.fetchCommandsForApplication({
                            guildId: null,
                            channelId: e.id,
                            applicationId: a.id
                        }) : null != e.guild_id && null != t && u.fetchCommand(e.guild_id, e.id, t))
                    }, [a, e, o, t]), null == e || null == e.guild_id && (null == a || null == s || a.id !== (null === (n = s.bot) || void 0 === n ? void 0 : n.id))) ? {
                        command: void 0,
                        application: void 0
                    } : {
                        command: o,
                        application: s
                    }
                }
                let a = (0, p.useUserIndexState)(!0, !0),
                    o = (0, p.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    if (null != t) {
                        var e, n, i, l;
                        let r = Object.values(null !== (i = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}).concat(Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}));
                        for (let e of r) {
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

            function y(e, t, n) {
                if (!L({
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
                    o = (0, p.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    var e, i, l, r, u, d;
                    let c = null !== (u = null === (i = a.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (l = o.result) || void 0 === l ? void 0 : l.sections[t],
                        p = Object.values(null !== (d = null == c ? void 0 : c.commands) && void 0 !== d ? d : {}).map(e => null == e.rootCommand ? e : (0, C.buildCommand)({
                            rootCommand: e.rootCommand,
                            command: e.rootCommand,
                            applicationId: e.applicationId
                        })).reduce((e, t) => (e[t.id] = t, e), {});
                    return {
                        application: null == c ? void 0 : null === (r = c.descriptor) || void 0 === r ? void 0 : r.application,
                        commands: n.map(e => p[e]).filter(s.isNotNullish)
                    }
                }, [null == a ? void 0 : a.result, null == o ? void 0 : o.result, t, n])
            }

            function D() {
                !L({
                    location: "useSearchOpenState"
                }) && (0, _.useSearchStoreOpenState)()
            }

            function R(e, t) {
                return c.default.getCurrentConfig(e, t).enabled
            }

            function L(e, t) {
                let [n] = i.useState(R(e, t));
                return n
            }
            let P = {
                id: "placeholder-section",
                type: I.ApplicationCommandSectionType.APPLICATION,
                name: ""
            };

            function U(e, t) {
                return {
                    type: t,
                    inputType: I.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: "",
                    section: P
                }
            }
        },
        972620: function(e, t, n) {
            "use strict";
            var i, l, a, o;
            n.r(t), n.d(t, {
                ScoreMethod: function() {
                    return i
                },
                BuiltInCommandFilter: function() {
                    return l
                }
            }), (a = i || (i = {})).NONE = "none", a.APPLICATION_ONLY = "application_only", a.COMMAND_ONLY = "command_only", a.COMMAND_OR_APPLICATION = "command_or_application", (o = l || (l = {})).ALLOW = "allow", o.ONLY_TEXT = "only_text", o.DENY = "deny"
        },
        216193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("808653"), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("693566"),
                o = n.n(a),
                r = n("446674"),
                s = n("913144"),
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
                        if (null != t && l && C.add(t), 0 === e.applicationCommands.length && (null == e.applications || 0 === e.applications.length)) return;
                        let a = (0, _.buildApplicationCommands)(e.applicationCommands);
                        f.updateRegistry(a, null !== (i = e.applications) && void 0 !== i ? i : [], n)
                    })
                },
                g = l.debounce(e => {
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
                h = l.debounce((e, t, n, i) => {
                    let l = [...n].filter(_.isSnowflake);
                    if (0 === l.length) return;
                    let a = c.default.getChannel(t);
                    if (null == a || !(0, _.canUseApplicationCommands)(p.default, d.default, !1, a)) return;
                    let o = l.slice(0, 100),
                        r = l.slice(100);
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
                        r.length > 0 && h(e, t, new Set(r), i)
                    })
                }, 250);
            class S extends r.default.Store {
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
            S.displayName = "ApplicationCommandRegistryStore";
            let O = new S(s.default, {
                APPLICATION_COMMAND_FETCH: function(e) {
                    let {
                        channelId: t,
                        commandId: n,
                        guildId: i
                    } = e;
                    if (A.has(n)) return;
                    T.add(n);
                    let l = null != i && !C.has(i);
                    h(i, t, T, l)
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
                    h(i, t, T, l)
                },
                APPLICATION_COMMANDS_FETCH_FOR_APPLICATION: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        applicationId: i
                    } = e;
                    g({
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
            var M = O
        },
        166004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                search: function() {
                    return U
                },
                default: function() {
                    return z
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
                o = n("693566"),
                r = n.n(o),
                s = n("446674"),
                u = n("872717"),
                d = n("913144"),
                c = n("798609"),
                p = n("763898"),
                f = n("938767"),
                m = n("38654"),
                _ = n("252063"),
                I = n("140596"),
                C = n("685841"),
                T = n("872173"),
                A = n("374363"),
                E = n("42203"),
                N = n("923959"),
                g = n("957255"),
                h = n("18494"),
                S = n("599110"),
                O = n("718517"),
                M = n("589777"),
                v = n("369010"),
                y = n("342564"),
                D = n("524768"),
                R = n("389153"),
                L = n("317041"),
                P = n("49111");

            function U(e, t, n) {
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
                    }), U(e, {
                        ...t,
                        retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
                    }, n)
                };
                (null == t.retries || 0 === t.retries) && (t.start = performance.now());
                let r = e => {
                    var i, o, r;
                    if (null == t.start) return;
                    let s = performance.now() - t.start;
                    S.default.track(P.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: s,
                        aborted: null !== (i = null == n ? void 0 : n.signal.aborted) && void 0 !== i && i,
                        error: e,
                        kind: l,
                        command_type: t.type,
                        include_applications: null !== (o = a.include_applications) && void 0 !== o && o,
                        retries: null !== (r = t.retries) && void 0 !== r ? r : 0
                    })
                };
                return u.default.get({
                    url: P.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
                    query: a,
                    signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
                }).then(e => {
                    var t, n, i;
                    return 202 === e.status ? o(5e3) : (r(!1), {
                        applicationCommands: e.body.application_commands,
                        applications: e.body.applications,
                        nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
                        prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
                        repaired: null === (i = e.body.cursor) || void 0 === i ? void 0 : i.repaired
                    })
                }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (r(!0), null) : 429 === e.status ? o(e.body.retry_after * O.default.Millis.SECOND) : (r(!0), null))
            }
            let F = (e, t, n) => {
                let {
                    channel: i,
                    guild: l
                } = e;
                return null != i ? (0, M.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
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

            function H(e) {
                let t = e.map(R.getApplicationCommandSection);
                return t.concat(M.BUILT_IN_SECTIONS[L.BuiltInSectionId.BUILT_IN])
            }
            let x = (e, t) => ({
                    type: t,
                    inputType: D.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: ""
                }),
                B = [M.BUILT_IN_SECTIONS[L.BuiltInSectionId.BUILT_IN]];
            class w extends s.default.Store {
                initialize() {
                    this.waitFor(A.default), this.syncWith([g.default], () => {
                        this.shouldResetAll = !0
                    }), this.syncWith([A.default], W)
                }
                getChannelState(e, t) {
                    var n;
                    return null === (n = q.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
                }
                getOrInsertChannelState(e, t) {
                    let n = q.channelStates,
                        i = n.has(e);
                    if (S.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
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
                    return null !== (i = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== i ? i : B
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
                    super(...e), this.channelStates = new r({
                        max: 5
                    }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
                }
            }

            function G(e) {
                var t;
                let {
                    guildId: n
                } = e, i = h.default.getChannelId();
                return null != i && (null === (t = E.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) !== n ? k(n) : q.componentIsOpen ? (q.shouldResetGuild = n, !1) : k(n)
            }

            function k(e) {
                let t = N.default.getChannels(e),
                    n = t[0, N.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[N.GUILD_VOCAL_CHANNELS_KEY]),
                    i = q.channelStates.length;
                for (let e of n) q.channelStates.del(e.channel.id);
                return q.channelStates.length !== i
            }

            function Y() {
                let e = q.channelStates.length;
                return q.channelStates.keys().forEach(e => {
                    var t;
                    (null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && q.channelStates.del(e)
                }), q.channelStates.length !== e
            }

            function W() {
                var e, t, n;
                let i = null !== (n = null === (t = A.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
                    l = i !== q.viewNsfwCommands;
                if (l) {
                    if (q.viewNsfwCommands = i, !q.componentIsOpen) return Y();
                    q.shouldResetDMs = !0
                }
                return !1
            }

            function V(e) {
                return !!q.channelStates.has(e) && (q.channelStates.del(e), !0)
            }

            function j() {
                q.shouldResetAll = !1, q.shouldResetGuild = null, q.shouldResetDMs = !1, q.componentIsOpen = !1, q.channelStates.reset()
            }
            w.displayName = "ApplicationCommandSearchStore";
            let q = new w(d.default, {
                LOGOUT: j,
                CONNECTION_OPEN: j,
                APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
                    let {
                        channelId: t,
                        commandType: n,
                        state: i
                    } = e, l = q.channelStates.get(t);
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
                    } = e, o = null != C.default.getPendingReply(t.channel.id), r = Z({
                        context: t,
                        commandType: n,
                        query: i,
                        limit: l,
                        canOnlyUseTextCommands: o,
                        applicationId: a
                    });
                    !r && !o && J({
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
                    if (q.componentIsOpen = t, q.shouldResetAll) {
                        j();
                        return
                    }
                    let n = !1;
                    return null != q.shouldResetGuild && (n = k(q.shouldResetGuild), q.shouldResetGuild = null), q.shouldResetDMs && (n = Y() || n, q.shouldResetDMs = !1), n
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
            var z = q;
            let K = e => {
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
                    canUseFrecency: o
                } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
                    discoveryInitialized: r,
                    topCursor: u,
                    scrollDownCursor: c,
                    applicationSections: m,
                    applicationCommands: C,
                    filteredSectionId: T,
                    sawFrecencySection: A
                } = (0, s.useStateFromStores)([q], () => q.getOrInsertChannelState(e.id, t), [e.id, t]), E = i.useCallback(n => {
                    d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                        channelId: e.id,
                        commandType: t,
                        state: n
                    })
                }, [e.id, t]);
                (0, _.usePrivateChannelIntegrationState)({
                    channelId: e.id
                });
                let N = i.useRef(!1),
                    h = (0, p.default)(),
                    S = i.useCallback(function(n, i) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (N.current) return;
                        N.current = !0;
                        let a = K(e.guild_id);
                        U(e.id, {
                            type: t,
                            roleIds: a,
                            ...n
                        }, {
                            abortable: l,
                            signal: h
                        }).then(e => {
                            N.current = !1, i(e)
                        })
                    }, [e.id, e.guild_id, t, h]),
                    O = (0, f.useCommandContext)(e),
                    D = (0, v.useTopCommands)(O),
                    P = (0, v.useTopRealCommands)(O),
                    B = (0, s.useStateFromStores)([g.default, I.default], () => (0, R.canUseApplicationCommands)(g.default, I.default, null != a && a, e), [a, e]);
                i.useEffect(() => {
                    if (r) return;
                    if (E({
                            discoveryInitialized: !0
                        }), !B || null != C && C.length > 0) return;
                    let t = e.isPrivate() ? {} : {
                        limit: l,
                        commandIds: r ? void 0 : P,
                        cursor: null != u ? u : void 0
                    };
                    S({
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
                            n.applicationSections = H(null !== (i = e.applications) && void 0 !== i ? i : [])
                        }
                        E(n)
                    }, !1)
                }, [C, e, l, B, m, r, u, S, P, E]);
                let w = i.useCallback(() => {
                        null != c && S({
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
                    }, [l, S, c, C, E]),
                    G = i.useCallback(t => {
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
                            }!(t in M.BUILT_IN_SECTIONS || e.isPrivate()) && S({
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
                    }, [e, S, E, T]);
                X(), i.useEffect(() => () => {
                    var n;
                    (null === (n = q.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && G(null)
                }, []);
                let k = i.useMemo(() => F(O, t, a), [O, t, a]),
                    Y = i.useMemo(() => {
                        if (!o) return [];
                        let e = (B && null != C ? C : []).concat(k);
                        return e.filter(e => D.includes(e.id)).sort((e, t) => {
                            let n = y.default.getScoreWithoutLoadingLatest(O, e),
                                i = y.default.getScoreWithoutLoadingLatest(O, t);
                            return i - n
                        }).slice(0, L.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
                    }, [o, D, B, C, k, O]);
                i.useEffect(() => {
                    !A && Y.length > 0 && E({
                        sawFrecencySection: !0
                    })
                }, [E, Y, A]);
                let W = i.useMemo(() => {
                        var e;
                        let t = [];
                        return (Y.length > 0 || A) && (t = t.concat(M.BUILT_IN_SECTIONS[L.BuiltInSectionId.FRECENCY])), B && null != m && (t = t.concat(m)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== L.BuiltInSectionId.BUILT_IN && (t = t.concat(M.BUILT_IN_SECTIONS[L.BuiltInSectionId.BUILT_IN])), t
                    }, [B, m, Y, A]),
                    V = B && (!r || N.current || null != c),
                    j = i.useMemo(() => {
                        if (!V) return [];
                        let e = [];
                        for (let i = 0; i < n; i++) e.push(x(i, t));
                        return e
                    }, [V, n, t]),
                    {
                        activeSections: z,
                        commandsByActiveSection: Q
                    } = i.useMemo(() => {
                        let e = [],
                            t = [];
                        return W.forEach(n => {
                            let i;
                            (null == T || n.id === T) && ((i = n.id === L.BuiltInSectionId.BUILT_IN ? V ? [] : [...k] : n.id === L.BuiltInSectionId.FRECENCY ? [...Y] : (null != C ? C : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === T) && (e.push(n), t.push({
                                section: n,
                                data: i
                            }))
                        }), t.length > 0 && j.length > 0 && t[t.length - 1].data.push(...j), {
                            activeSections: e,
                            commandsByActiveSection: t
                        }
                    }, [W, Y, C, k, j, V, T]),
                    Z = i.useMemo(() => {
                        let e = [];
                        return e = e.concat(Y), B && null != C && (e = e.concat(C)), e = e.concat(k)
                    }, [B, Y, C, k]);
                return {
                    filterSection: G,
                    scrollDown: w,
                    loading: N,
                    filteredSectionId: T,
                    hasMoreAfter: V,
                    commands: Z,
                    sectionDescriptors: W,
                    activeSections: z,
                    commandsByActiveSection: Q,
                    placeholders: j
                }
            }

            function Z(e) {
                let t, {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        canOnlyUseTextCommands: o,
                        applicationCommands: r,
                        scrollDownCursor: s,
                        applications: u,
                        applicationId: d = null
                    } = e,
                    c = q.getOrInsertChannelState(n.channel.id, i);
                if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
                else if (c.queries.has(l)) return !0;
                if (null != u && (c.applicationSections = H(u)), o) t = [];
                else {
                    var p;
                    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : b([], null != r ? r : [])
                }
                let f = F(n, i, o),
                    m = (0, R.canUseApplicationCommands)(g.default, I.default, o, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == r),
                    _ = [],
                    C = !1;
                if (m)
                    for (let e = l.length - 1; e > 0; e -= 1) {
                        let n = l.slice(0, e),
                            i = c.queries.get(n);
                        if (null != i) {
                            C = i.done, i.commands.forEach(e => {
                                null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && _.push(e)
                            });
                            break
                        }
                    }
                C && (m = !1);
                let A = [],
                    E = l.split(" ");
                if ([...t, ..._, ...f].forEach(e => {
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
                    }), m || null != s)
                    for (let e = 0; e < 4; e += 1) A.push({
                        ...x(e, i),
                        score: 0
                    });
                return m ? (c.pendingQueries.set(l, {
                    context: n,
                    commandType: i,
                    limit: a,
                    commands: A
                }), c.queries.delete(l)) : (c.pendingQueries.delete(l), c.queries.set(l, {
                    commands: A,
                    done: C || null == s,
                    scrollDownCursor: s
                })), C
            }
            let J = a(e => {
                    var t;
                    let {
                        context: n,
                        commandType: i,
                        query: l,
                        limit: a,
                        applicationId: o
                    } = e;
                    if (!(0, R.canUseApplicationCommands)(g.default, I.default, !1, n.channel)) return;
                    let r = q.getOrInsertChannelState(n.channel.id, i);
                    if (n.channel.isPrivate()) {
                        !r.discoveryInitialized && null == r.applicationCommands && U(n.channel.id, {
                            type: i,
                            includeApplications: null == r.applicationSections
                        }).then(e => {
                            var t;
                            if (null == e) return;
                            let l = {
                                applicationCommands: b([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
                            };
                            null != e.applications && (l.applicationSections = H(e.applications)), d.default.dispatch({
                                type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                                channelId: n.channel.id,
                                commandType: i,
                                state: l
                            })
                        });
                        return
                    }(null === (t = r.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && U(n.channel.id, {
                        type: i,
                        roleIds: K(n.channel.guild_id),
                        query: l,
                        limit: a,
                        applicationId: o,
                        includeApplications: !r.discoveryInitialized && null == r.applicationSections
                    }).then(e => {
                        if (null != e) q.channelStates.has(n.channel.id) && (Z({
                            context: n,
                            commandType: i,
                            query: l,
                            limit: a,
                            canOnlyUseTextCommands: !1,
                            applicationCommands: e.applicationCommands,
                            scrollDownCursor: e.nextCursor,
                            applications: e.applications,
                            applicationId: o
                        }), q.emitChange())
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
                    if (!(0, R.canUseApplicationCommands)(g.default, I.default, !1, i.channel) || i.channel.isPrivate()) return;
                    let r = q.getOrInsertChannelState(i.channel.id, l),
                        s = null === (n = r.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
                    null != s && await U(i.channel.id, {
                        type: l,
                        roleIds: K(i.channel.guild_id),
                        query: a,
                        limit: o,
                        cursor: s,
                        includeApplications: !r.discoveryInitialized && null == r.applicationSections
                    }, {
                        abortable: !0,
                        signal: t
                    }).then(e => {
                        var t, n;
                        if (null == e || !q.channelStates.has(i.channel.id)) return;
                        let o = null !== (n = null === (t = r.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== D.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
                            s = b([], e.applicationCommands),
                            u = [],
                            d = a.split(" ");
                        s.forEach(e => {
                            var t;
                            if (null != o.find(t => t.id === e.id)) return;
                            let n = null === (t = r.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
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
                                ...x(e, l),
                                score: 0
                            });
                        r.queries.set(a, {
                            commands: e.repaired ? u : [...o, ...u],
                            done: !0,
                            scrollDownCursor: c
                        }), q.emitChange()
                    })
                };

            function ee(e, t, n, l) {
                X();
                let a = (0, p.default)(),
                    {
                        commands: o,
                        applicationSections: r
                    } = (0, s.useStateFromStoresObject)([q], () => {
                        var i, l, a;
                        let {
                            queries: o,
                            pendingQueries: r,
                            applicationSections: s
                        } = q.getOrInsertChannelState(e.id, t);
                        return {
                            applicationSections: s,
                            commands: null !== (a = null === (i = o.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = r.get(n)) || void 0 === l ? void 0 : l.commands
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
                    sections: null != r ? r : B,
                    scrollDown: c
                }
            }

            function et(e, t, n, i) {
                var l;
                let a = n.name,
                    o = n.displayName;
                if (a.startsWith(e) || o.startsWith(e)) return 6;
                if (a.startsWith(t[0])) {
                    let e = a.split(" ").slice(1).join(" ");
                    if (e.startsWith(t.slice(1).join(" "))) return 5
                }
                if (o.startsWith(t[0])) {
                    let e = o.split(" ").slice(1).join(" ");
                    if (e.startsWith(t.slice(1).join(" "))) return 5
                }
                if (a.includes(e) || (null == o ? void 0 : o.includes(e))) return 4;
                let r = !1;
                for (let {
                        name: t,
                        serverLocalizedName: i
                    }
                    of null !== (l = n.options) && void 0 !== l ? l : []) {
                    if (t.startsWith(e) || "".concat(a, " ").concat(t).startsWith(e)) return 3;
                    if (null != o && "".concat(o, " ").concat(t).startsWith(e)) return 2;
                    if (null != i && (i.startsWith(e) || "".concat(a, " ").concat(i).startsWith(e) || null != o && "".concat(o, " ").concat(i).startsWith(e))) return 3;
                    (t.includes(e) || (null == i ? void 0 : i.includes(e))) && (r = !0)
                }
                return r ? 2 : (null == i ? void 0 : i.name.toLocaleLowerCase().startsWith(e)) ? 1 : 0
            }
        },
        123373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                buildPermissionContext: function() {
                    return I
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
                o = n("798609"),
                r = n("38654"),
                s = n("845579"),
                u = n("233069"),
                d = n("271938"),
                c = n("42203"),
                p = n("26989"),
                f = n("957255"),
                m = n("697218"),
                _ = n("49111");

            function I(e, t) {
                var n, i, l, a, o;
                let f;
                f = e instanceof u.ChannelRecordBase && e.isThread() ? null !== (l = c.default.getChannel(e.parent_id)) && void 0 !== l ? l : e : e;
                let _ = N(f),
                    I = s.ViewNsfwCommands.getSetting(),
                    C = d.default.getId(),
                    E = null !== (a = null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
                    g = null != _ && null !== (o = null === (i = p.default.getMember(_, C)) || void 0 === i ? void 0 : i.roles) && void 0 !== o ? o : [],
                    h = r.default.isViewingRoles(_),
                    {
                        computedPermissions: S,
                        hasBaseAccessPermissions: O
                    } = A(f);
                return {
                    context: f,
                    userId: C,
                    roleIds: g,
                    isImpersonating: h,
                    commandType: t,
                    computedPermissions: S,
                    hasBaseAccessPermissions: O,
                    allowNsfw: T(f, E, I)
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
                    o = s.ViewNsfwCommands.useSetting(),
                    f = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
                    _ = (0, a.useStateFromStores)([m.default], () => {
                        var e, t;
                        return null !== (t = null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
                    }),
                    I = (0, a.useStateFromStoresArray)([p.default], () => {
                        var e, t;
                        return null != l && null !== (t = null === (e = p.default.getMember(l, f)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
                    }),
                    C = (0, a.useStateFromStores)([r.default], () => r.default.isViewingRoles(l));
                return i.useMemo(() => {
                    let {
                        computedPermissions: e,
                        hasBaseAccessPermissions: i
                    } = A(n);
                    return {
                        context: n,
                        userId: f,
                        roleIds: I,
                        commandType: t,
                        isImpersonating: C,
                        computedPermissions: e,
                        hasBaseAccessPermissions: i,
                        allowNsfw: T(n, _, o)
                    }
                }, [t, n, C, I, f, _, o])
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
                return t = !!l.default.has(n, _.Permissions.ADMINISTRATOR) || (e instanceof u.ChannelRecordBase ? l.default.has(n, _.Permissions.VIEW_CHANNEL) && l.default.has(n, _.Permissions.USE_APPLICATION_COMMANDS) : l.default.has(n, _.Permissions.VIEW_CHANNEL)), {
                    computedPermissions: n,
                    hasBaseAccessPermissions: t
                }
            }

            function E(e, t) {
                return e instanceof u.ChannelRecordBase && null == e.guild_id ? e.type === _.ChannelTypes.DM && e.getRecipientId() === t ? o.InteractionContextType.BOT_DM : o.InteractionContextType.PRIVATE_CHANNEL : o.InteractionContextType.GUILD
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
                    return I
                },
                computeAllowedForChannel: function() {
                    return A
                },
                computeAllowedForUser: function() {
                    return E
                }
            }), n("222007");
            var i, l, a = n("627445"),
                o = n.n(a),
                r = n("316693"),
                s = n("892692"),
                u = n("233069"),
                d = n("305961"),
                c = n("524768"),
                p = n("389153"),
                f = n("123373"),
                m = n("317041"),
                _ = n("49111");

            function I(e, t, n, i, l) {
                let {
                    context: a,
                    commandType: s,
                    allowNsfw: c,
                    computedPermissions: I,
                    userId: C,
                    roleIds: T,
                    isImpersonating: N,
                    hasBaseAccessPermissions: g
                } = t;
                if (e.type !== s) return 2;
                if (e.nsfw && !c) return 1;
                let h = (0, f.computeCommandContextType)(a, l);
                if (null != e.contexts && !e.contexts.includes(h)) return 4;
                if (null != e.predicate && a instanceof u.ChannelRecordBase) {
                    let t = d.default.getGuild(a.guild_id);
                    if (!e.predicate({
                            channel: a,
                            guild: t
                        })) return 3
                }
                if (e.applicationId === m.BuiltInSectionId.BUILT_IN) return 0;
                let S = (0, f.getContextGuildId)(a);
                if (null == S || r.default.has(I, _.Permissions.ADMINISTRATOR)) return 0;
                if (!g) return 5;
                if (a instanceof u.ChannelRecordBase) {
                    o(void 0 !== i, "missing applicationAllowedForChannel");
                    let t = A(e.permissions, a, S);
                    if (function(e) {
                            return !1 === e
                        }(t) || ! function(e) {
                            return !0 === e
                        }(t) && function(e) {
                            return !1 === e
                        }(i)) return 6
                }
                let O = E(e.permissions, S, C, T, N);
                return function(e) {
                    return !0 === e
                }(O) ? 0 : function(e) {
                    return !1 === e
                }(O) ? 7 : function(e) {
                    return !1 === e
                }(n) || null != e.defaultMemberPermissions && !(!r.default.equals(e.defaultMemberPermissions, p.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && r.default.has(I, e.defaultMemberPermissions)) ? 7 : 0
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
                let a = e[(0, s.toPermissionKey)(i, c.ApplicationCommandPermissionType.CHANNEL)];
                if (null != a) return a.permission;
                let o = e[(0, s.toPermissionKey)((0, p.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
                return null != o ? o.permission : null
            }

            function E(e, t, n, i, l) {
                if (null == e) return null;
                if (!l) {
                    let t = e[(0, s.toPermissionKey)(n, c.ApplicationCommandPermissionType.USER)];
                    if (null != t) return t.permission
                }
                let a = !1;
                for (let t of i) {
                    let n = e[(0, s.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
                    if (null != n) {
                        if (n.permission) return !0;
                        a = !0
                    }
                }
                if (a) return !1;
                let o = e[(0, s.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
                return null != o ? o.permission : null
            }(l = i || (i = {}))[l.ALLOWED = 0] = "ALLOWED", l[l.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", l[l.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", l[l.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", l[l.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", l[l.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", l[l.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", l[l.USER_DENIED = 7] = "USER_DENIED"
        },
        916565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                },
                retryCommandMessage: function() {
                    return k
                }
            }), n("424973"), n("222007"), n("881410"), n("686130"), n("781738");
            var i = n("627445"),
                l = n.n(i),
                a = n("913144"),
                o = n("819689"),
                r = n("81594"),
                s = n("327037"),
                u = n("798609"),
                d = n("979911"),
                c = n("981112"),
                p = n("716241"),
                f = n("118851"),
                m = n("385976"),
                _ = n("274800"),
                I = n("752598"),
                C = n("815297"),
                T = n("263024"),
                A = n("915639"),
                E = n("305961"),
                N = n("585722"),
                g = n("697218"),
                h = n("254490"),
                S = n("449008"),
                O = n("980134"),
                M = n("507217"),
                v = n("246598"),
                y = n("118200"),
                D = n("240249"),
                R = n("524768"),
                L = n("389153"),
                P = n("317041"),
                U = n("49111"),
                F = n("894488"),
                b = n("782340");
            let H = (e, t) => {
                    var n;
                    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
                },
                x = function(e, t, n) {
                    var i, l;
                    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                        o = e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name);
                    if (o) return n.autocomplete.query;
                    if ("" === t) return null;
                    let r = v.default.getAutocompleteLastChoices(n.channel.id, e.name);
                    return null != r ? null !== (l = H(r, t)) && void 0 !== l ? l : a(t) : a(t)
                },
                B = e => {
                    let t = e.toLowerCase() === P.TRUE_OPTION_NAME.toLowerCase(),
                        n = e.toLowerCase() === P.FALSE_OPTION_NAME.toLowerCase();
                    return t || n ? t : null
                };
            async function w(e) {
                var t, n, i, o, s, d, c, m, _, I, C, E, g, h, S;
                let {
                    command: O,
                    optionValues: v,
                    context: D,
                    commandTargetId: P,
                    maxSizeCallback: F,
                    commandOrigin: b = R.CommandOrigin.CHAT
                } = e;
                null == D.autocomplete && a.default.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: D,
                    command: O
                }), await T.default.unarchiveThreadIfNecessary(D.channel.id);
                let w = [],
                    k = [],
                    W = (0, L.getCommandAttachmentDraftType)(b);
                if (null != O.options)
                    for (let e of O.options) {
                        if (e.type === u.ApplicationCommandOptionType.SUB_COMMAND || e.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in v)) continue;
                        let t = (null === (i = D.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
                            n = null;
                        if (e.type === u.ApplicationCommandOptionType.STRING) {
                            let i = null !== (s = null === (o = y.getOptionalString(v, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== s ? s : "";
                            n = null != e.choices ? H(e.choices, i) : e.autocomplete ? x(e, i, D) : i, l(null != D.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && w.push({
                                type: e.type,
                                name: e.name,
                                value: n,
                                focused: t
                            });
                            continue
                        }
                        if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) {
                            if (null != D.autocomplete) continue;
                            let i = N.default.getUpload(D.channel.id, e.name, W);
                            if (null == i) continue;
                            let l = N.default.getUploads(D.channel.id, W).findIndex(e => i.id === e.id);
                            k.push(i), n = l, w.push({
                                type: e.type,
                                name: e.name,
                                value: n,
                                focused: t
                            });
                            continue
                        }
                        let a = y.filterEmpty(v[e.name]);
                        if (l(null != D.autocomplete || 1 === a.length, 'Option "'.concat(e.name, '" expects a single option type')), null == a[0] && !t) continue;
                        let r = null !== (d = a[0]) && void 0 !== d ? d : {
                            type: "text",
                            text: ""
                        };
                        switch (e.type) {
                            case u.ApplicationCommandOptionType.CHANNEL:
                                if ("channelMention" === r.type) n = r.channelId;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(r.text, null === (c = D.guild) || void 0 === c ? void 0 : c.id, D.channel.id);
                                        l((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
                                    }
                                }
                                break;
                            case u.ApplicationCommandOptionType.ROLE:
                                if ("roleMention" === r.type) n = r.roleId;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(r.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, {
                                            allowUsers: !1
                                        });
                                        l((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
                                    }
                                } else "textMention" === r.type && "@everyone" === r.text && (n = null === (_ = D.guild) || void 0 === _ ? void 0 : _.id);
                                break;
                            case u.ApplicationCommandOptionType.USER:
                                if ("userMention" === r.type) n = r.userId;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(r.text, null === (I = D.guild) || void 0 === I ? void 0 : I.id, D.channel.id, {
                                            allowRoles: !1
                                        });
                                        l((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
                                    }
                                }
                                break;
                            case u.ApplicationCommandOptionType.MENTIONABLE:
                                if ("userMention" === r.type) n = r.userId;
                                else if ("roleMention" === r.type) n = r.roleId;
                                else if ("textMention" === r.type && "@everyone" === r.text) n = null === (C = D.guild) || void 0 === C ? void 0 : C.id;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(r.text, null === (E = D.guild) || void 0 === E ? void 0 : E.id, D.channel.id);
                                        (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (g = D.guild) || void 0 === g ? void 0 : g.id : l(!1, "Failed to resolve ".concat(r.text))
                                    }
                                }
                                break;
                            case u.ApplicationCommandOptionType.BOOLEAN:
                                "text" === r.type && (n = B(r.text.trim()));
                                break;
                            case u.ApplicationCommandOptionType.INTEGER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    n = null != e.choices ? Number(H(e.choices, t)) : e.autocomplete ? x(e, t, D, Number) : Number(y.normalizeNumericString(A.default.locale, t))
                                }
                                break;
                            case u.ApplicationCommandOptionType.NUMBER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    n = null != e.choices ? Number(H(e.choices, t)) : e.autocomplete ? x(e, t, D, Number) : Number(y.normalizeNumericString(A.default.locale, t))
                                }
                                break;
                            default:
                                l(!1, "Unsupported option type: ".concat(e.type));
                                continue
                        }
                        l(null != D.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && w.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        })
                    }
                if (null != O.subCommandPath)
                    for (let e = O.subCommandPath.length - 1; e >= 0; e -= 1) {
                        let {
                            name: t,
                            type: n
                        } = O.subCommandPath[e];
                        w = [{
                            type: n,
                            name: t,
                            options: w
                        }]
                    }
                if (null != O.execute) return p.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: O.id,
                    application_id: O.applicationId,
                    command_type: O.type,
                    location: b === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
                }), O.execute(w, D);
                if (O.inputType === R.ApplicationCommandInputType.BUILT_IN || O.inputType === R.ApplicationCommandInputType.BUILT_IN_TEXT || O.inputType === R.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
                let V = {
                    version: O.version,
                    id: null !== (h = null === (t = O.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== h ? h : O.id,
                    guild_id: O.guildId,
                    name: null !== (S = null === (n = O.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== S ? S : O.name,
                    type: O.type,
                    options: w,
                    application_command: O.rootCommand
                };
                null != P && (V.target_id = P), null != D.autocomplete ? (0, M.performAutocomplete)(O, D, V) : (r.default.clearAll(D.channel.id, W), await Y({
                    applicationId: O.applicationId,
                    data: V,
                    context: D,
                    attachments: k,
                    maxSizeCallback: F,
                    onMessageSuccess: () => {
                        G(v)
                    },
                    commandDisplayName: O.displayName,
                    analytics_location: b === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
                }))
            }
            let G = e => {
                    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                        name: e.name.replaceAll(":", "")
                    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(S.isNotNullish));
                    t.length > 0 && a.default.dispatch({
                        type: "EMOJI_TRACK_USAGE",
                        emojiUsed: t
                    })
                },
                k = (e, t, n) => {
                    if (e.isCommandType()) {
                        let i = t.guild_id;
                        null != e.interactionData && Y({
                            applicationId: n,
                            data: e.interactionData,
                            context: {
                                channel: t,
                                guild: null != i ? E.default.getGuild(i) : null
                            }
                        })
                    }
                },
                Y = async e => {
                    var t;
                    let {
                        applicationId: n,
                        data: i,
                        context: l,
                        attachments: r,
                        maxSizeCallback: d,
                        onMessageSuccess: c,
                        commandDisplayName: p,
                        analytics_location: f
                    } = e, {
                        channel: m,
                        guild: I
                    } = l, T = m.id, A = null == I ? void 0 : I.id, E = D.getCachedApplicationSection(l.channel, i.type, n);
                    if (null == E) return;
                    let N = null === (t = E.application) || void 0 === t ? void 0 : t.bot;
                    if (null == N && null != E.botId) try {
                        await s.getUser(E.botId)
                    } catch {}
                    let h = {
                        ...(0, C.default)({
                            channelId: T,
                            content: "",
                            type: i.type === u.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND,
                            author: null != N ? N : {
                                id: E.id,
                                username: E.name,
                                discriminator: U.NON_USER_BOT_DISCRIMINATOR,
                                avatar: null,
                                bot: !0
                            }
                        }),
                        application: null == E ? void 0 : E.application,
                        interaction: {
                            id: i.id,
                            name: i.name,
                            name_localized: p,
                            type: u.InteractionTypes.APPLICATION_COMMAND,
                            user: (0, C.userRecordToServer)(g.default.getCurrentUser())
                        },
                        interaction_data: i
                    };
                    o.default.receiveMessage(T, h, !0, {
                        applicationId: n
                    });
                    let S = (e, t) => {
                            null == t && null != e && o.default.sendClydeError(T, e), a.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: h.id,
                                channelId: T,
                                reason: t
                            })
                        },
                        O = {
                            applicationId: n,
                            channelId: T,
                            guildId: A,
                            data: i,
                            nonce: h.id,
                            attachments: r,
                            maxSizeCallback: d,
                            analytics_location: f
                        };
                    _.addQueued(O.nonce, {
                        messageId: h.id,
                        onCreate: e => {
                            null != h.interaction && (h.interaction.id = e)
                        },
                        onFailure: (e, t) => S(e, t),
                        data: {
                            interactionType: u.InteractionTypes.APPLICATION_COMMAND,
                            channelId: T
                        }
                    }), null != r ? j(r, O.nonce, A, d).then(e => {
                        e && W(O, c)
                    }) : W(O, c)
                };

            function W(e, t) {
                d.default.enqueue({
                    type: d.MessageDataType.COMMAND,
                    message: e
                }, n => {
                    var i;
                    (0, I.handleInteractionResponse)(e.nonce, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null, n), n.ok && null != t && t()
                })
            }
            async function V(e, t) {
                let n = 0,
                    i = 0;
                for (let a of e) {
                    var l;
                    let e = t ? null !== (l = a.currentSize) && void 0 !== l ? l : 0 : await a.getSize();
                    e > i && (i = e), n += e
                }
                return {
                    totalSize: n,
                    largestUploadedFileSize: i
                }
            }
            async function j(e, t, n, i) {
                let l = (0, h.maxFileSize)(n),
                    a = e => {
                        null == i || i(l, e), _.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, b.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                            maxSize: (0, h.sizeString)(l)
                        }))
                    },
                    {
                        totalSize: o,
                        largestUploadedFileSize: r
                    } = await V(e, !1);
                if (r > Math.max(l, F.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || o > O.MAX_TOTAL_ATTACHMENT_SIZE) return a(r), !1;
                try {
                    await (0, c.stageAttachmentFiles)(e)
                } catch {
                    _.setFailed(t, void 0, b.default.Messages.UPLOADING_FILES_FAILED.format({
                        count: e.length
                    }))
                }({
                    totalSize: o,
                    largestUploadedFileSize: r
                } = await V(e, !0));
                let s = e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE);
                return !s && !(o > O.MAX_TOTAL_ATTACHMENT_SIZE) || (a(r), !1)
            }
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
                o = n("77078"),
                r = n("450911"),
                s = n("819689"),
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
                            await r.default.closePrivateChannel(a.id, void 0, _)
                        } catch (e) {
                            s.default.sendBotMessage(a.id, I.default.Messages.LEAVE_GROUP_DM_ERROR)
                        }
                    }
                    a.isManaged() && (f = I.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name: u
                    }), m = I.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name: u
                    })), (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
                        header: f,
                        confirmText: I.default.Messages.LEAVE_GROUP_DM,
                        cancelText: I.default.Messages.CANCEL,
                        onConfirm: C,
                        ...e,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }))
                }
            }];
            var A = T
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                o = n.n(a),
                r = n("587974"),
                s = n("315102"),
                u = n("524768"),
                d = n("278435"),
                c = n("363577");

            function p(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: a,
                    height: p,
                    className: f,
                    selectable: m = !1,
                    onFocus: _,
                    onBlur: I,
                    onMouseOver: C,
                    onMouseLeave: T,
                    ...A
                } = e, [E, N] = l.useState(!1), g = l.useCallback(() => {
                    N(!0), null == _ || _()
                }, [_]), h = l.useCallback(() => {
                    N(!1), null == I || I()
                }, [I]), S = l.useCallback(() => {
                    N(!0), null == C || C()
                }, [C]), O = l.useCallback(() => {
                    N(!1), null == T || T()
                }, [T]), M = l.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return s.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: a
                        })
                    }
                    return c
                }, [t, a]);
                return (0, i.jsx)("div", {
                    ...A,
                    className: o(d.wrapper, f, {
                        [d.selectable]: m,
                        [d.selected]: m && n
                    }),
                    onFocus: g,
                    onBlur: h,
                    onMouseOver: S,
                    onMouseLeave: O,
                    children: (0, i.jsx)(r.default, {
                        className: d.mask,
                        mask: m && (n || E) ? r.MaskIDs.SQUIRCLE : r.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: p,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: a,
                                height: p
                            },
                            src: M
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                o = n("83910"),
                r = n("93393"),
                s = n("317041"),
                u = n("262657");
            let d = e => {
                switch (e.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return o.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return r.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: l,
                    height: o,
                    padding: r,
                    isSelected: s,
                    selectable: c = !1,
                    ...p
                } = e, f = d(t);
                return (0, i.jsx)("div", {
                    className: a(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && s
                    }),
                    style: {
                        width: l,
                        height: o,
                        padding: null != r ? r : 0
                    },
                    children: null != f ? (0, i.jsx)(f, {
                        className: u.icon,
                        width: l,
                        height: o,
                        ...p
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return r
                },
                pxToRem: function() {
                    return s
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var i = n("524768"),
                l = n("991630"),
                a = n("943161"),
                o = n("317041");
            let r = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : l.default;

            function s(e) {
                return "".concat(e / 16, "rem")
            }

            function u(e, t) {
                let n = t,
                    i = !1,
                    l = t.indexOf(":");
                if (l >= 0) {
                    let e = t.lastIndexOf(" ", l);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, l)
                } else t = t.substring(0, t.length);
                let a = t.split(" ", o.MAX_SUBCOMMAND_LEVEL + 1);
                return a.length > o.MAX_SUBCOMMAND_LEVEL && (i = !0, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: a,
                    hasSpaceTerminator: i
                }
            }
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
                o = n("913144"),
                r = n("798609"),
                s = n("80507"),
                u = n("374363"),
                d = n("397336");
            let c = 250,
                p = {
                    pendingUsages: []
                },
                f = new s.default({
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

            function _() {
                var e, t;
                let n = u.default.frecencyWithoutFetchingLatest,
                    i = null !== (t = null === (e = n.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
                f.overwriteHistory(l.mapValues(i, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), p.pendingUsages)
            }
            class I extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (p = e), this.syncWith([u.default], _)
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
            I.displayName = "ApplicationFrecencyStore", I.persistKey = "ApplicationFrecency";
            var C = new I(o.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t
                    } = e;
                    if (t.type !== r.ApplicationCommandType.CHAT) return !1;
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
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return o
                }
            });
            var i = n("65597"),
                l = n("42203"),
                a = n("337026");

            function o(e) {
                let t = (0, i.default)([l.default], () => l.default.getChannel(e)),
                    {
                        enabled: n
                    } = a.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        118851: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolvePlaintextInlineVoid: function() {
                    return C
                },
                resolveApplicationCommandOption: function() {
                    return T
                }
            }), n("222007");
            var i = n("679653"),
                l = n("980215"),
                a = n("385976"),
                o = n("867805"),
                r = n("401690"),
                s = n("42203"),
                u = n("923959"),
                d = n("26989"),
                c = n("305961"),
                p = n("697218"),
                f = n("25292"),
                m = n("299039"),
                _ = n("149022"),
                I = n("680894");

            function C(e, t, n, p) {
                let {
                    allowUsers: _ = !0,
                    allowRoles: C = !0
                } = null != p ? p : {};
                switch (e[0]) {
                    case "@":
                        return function(e, t, n, i, a) {
                            let [o, r] = e.slice(1).split("#", 2), u = null != t ? c.default.getGuild(t) : null, p = (0, l.getClydeExperimentEnabled)(u);
                            if (a && null == r && null != u) {
                                for (let e of Object.values(u.roles))
                                    if (o === e.name) return {
                                        type: "roleMention",
                                        roleId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            if (i) {
                                let e = null != n ? s.default.getChannel(n) : null;
                                if (null != e) {
                                    if (e.isPrivate()) {
                                        for (let t of e.recipients)
                                            if (A(o, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            }
                                    } else {
                                        let e = d.default.getMembers(t);
                                        for (let {
                                                userId: t
                                            }
                                            of e)
                                            if (A(o, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            };
                                        if (p && A(o, r, I.CLYDE_AI_USER_ID)) return {
                                            type: "userMention",
                                            userId: I.CLYDE_AI_USER_ID,
                                            children: [{
                                                text: ""
                                            }]
                                        }
                                    }
                                }
                            }
                            return null
                        }(e, t, n, _, C);
                    case ":":
                        return function(e, t) {
                            let n = o.default.EMOJI_NAME_RE.exec(e);
                            if (null == n) return null;
                            let i = n[1],
                                l = a.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                            if (null != l && i in l) {
                                let e = l[i];
                                return {
                                    type: "customEmoji",
                                    emoji: {
                                        emojiId: e.id,
                                        name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
                                        animated: !0 === e.animated,
                                        jumboable: !1
                                    },
                                    children: [{
                                        text: ""
                                    }]
                                }
                            }
                            return null
                        }(e, t);
                    case "#":
                        return function(e, t) {
                            let n;
                            if (null == t) return null;
                            n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, i.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
                            let l = u.default.getTextChannelNameDisambiguations(t);
                            for (let e of m.default.keys(l))
                                if (l[e].name === n) return {
                                    type: "channelMention",
                                    channelId: e,
                                    children: [{
                                        text: ""
                                    }]
                                };
                            for (let e of f.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
                                if (e === u.GUILD_SELECTABLE_CHANNELS_KEY) continue;
                                let i = u.default.getChannels(t)[e];
                                for (let {
                                        channel: e
                                    }
                                    of i)
                                    if (e.name === n) return {
                                        type: "channelMention",
                                        channelId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            let a = r.default.getActiveJoinedThreadsForGuild(t);
                            for (let e of m.default.keys(a))
                                for (let t of m.default.keys(a[e])) {
                                    let {
                                        channel: i
                                    } = a[e][t];
                                    if (i.name === n) return {
                                        type: "channelMention",
                                        channelId: i.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                                }
                            return null
                        }(e, t)
                }
                return null
            }

            function T(e, t, n, i) {
                let l = C(e, t, n, i);
                return null == l ? null : (0, _.voidToOptionValue)(l)
            }

            function A(e, t, n) {
                let i = p.default.getUser(n);
                return null != i && (n === I.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || i.username === e && i.discriminator === (null != t ? t : "0"))
            }
        },
        670902: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                computeThreadIdsSnapshot: function() {
                    return b
                },
                default: function() {
                    return B
                }
            }), n("222007");
            var l = n("917351"),
                a = n.n(l),
                o = n("335710"),
                r = n("446674"),
                s = n("913144"),
                u = n("689275"),
                d = n("610730"),
                c = n("271938"),
                p = n("42203"),
                f = n("660478"),
                m = n("18494"),
                _ = n("449008"),
                I = n("299039"),
                C = n("786742");
            let T = [],
                A = null,
                E = null,
                N = new Set,
                g = o.ThreadSortOrder.LATEST_ACTIVITY,
                h = 0,
                S = [],
                O = !1,
                M = [],
                v = a.chain(T),
                y = a.chain(T),
                D = new Set,
                R = new Set;

            function L(e) {
                var t;
                return null !== (t = f.default.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function P(e) {
                return function(t, n) {
                    if ((0, C.isForumPostPinned)(t)) return -1;
                    if ((0, C.isForumPostPinned)(n)) return 1;
                    if (e === o.ThreadSortOrder.LATEST_ACTIVITY) return I.default.compare(L(n), L(t));
                    else return I.default.compare(n, t)
                }
            }

            function U() {
                S = [], i = null, E = null, N = new Set, g = o.ThreadSortOrder.LATEST_ACTIVITY, h = 0, M = [], v = a.chain(T), y = a.chain(T), R.clear(), D.clear()
            }

            function F() {
                var e;
                let t = m.default.getChannelId();
                if (null == t || !(null === (e = p.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
                H({
                    refreshThreadIds: !0
                })
            }

            function b(e) {
                let t = p.default.getChannel(e);
                return null == t ? [] : Object.values(u.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }).sort(P(g))
            }

            function H(e) {
                var t;
                let n = p.default.getChannel(E);
                if (null == n) return;
                (null == e ? void 0 : e.refreshThreadIds) && (M = Object.values(u.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }), h = 0, O = !0), 0 !== D.size && (M = M.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (M = Array.from(new Set([...M, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = a.chain(M).sort(P(o.ThreadSortOrder.LATEST_ACTIVITY)), v = a.chain(M).sort(P(o.ThreadSortOrder.CREATION_DATE)));
                let l = g === o.ThreadSortOrder.LATEST_ACTIVITY ? y : v,
                    r = l.value();
                S = 0 === N.size ? r : r.filter((t = N, function(e) {
                    var n;
                    let i = null === (n = p.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                    return null != i && 0 !== i.length && i.some(e => t.has(e))
                }));
                let s = S.find(e => (function(e) {
                    let t = d.default.getCount(e);
                    return null === t || 0 === t
                })(e));
                i = null == s ? null : s
            }
            class x extends r.default.Store {
                initialize() {
                    this.waitFor(p.default, u.default, m.default, f.default)
                }
                getNewThreadCount() {
                    return h
                }
                getCanAckThreads() {
                    return O
                }
                getThreadIds(e, t, n) {
                    let i = e !== E,
                        l = !(0, _.areSetsEqual)(n, N),
                        a = t !== g;
                    return E = e, N = n, g = t, i ? H({
                        refreshThreadIds: !0
                    }) : a ? H({
                        sortThreadIds: !0
                    }) : l && H(), S
                }
                getCurrentThreadIds() {
                    return S
                }
                getAndDeleteMostRecentUserCreatedThreadId() {
                    let e = A;
                    return A = null, e
                }
                getFirstNoReplyThreadId() {
                    return i
                }
            }
            x.displayName = "ForumActivePostStore";
            var B = new x(s.default, {
                CONNECTION_OPEN: F,
                OVERLAY_INITIALIZE: F,
                GUILD_CREATE: F,
                CHANNEL_SELECT: F,
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
                    if (null == E || n !== (null === (t = p.default.getChannel(E)) || void 0 === t ? void 0 : t.guild_id)) return !1;
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
                    t.ownerId !== c.default.getId() ? h++ : A = t.id
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
                    D.add(t.id), H({
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
                o = n("697218"),
                r = n("991170"),
                s = n("49111");

            function u(e, t) {
                let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, l.default, a.default], d = i.getGuild(e), c = n.getUser(t);
                if (null == d || null == c || c.isNonUserBot()) return !1;
                let p = d.isOwner(c) || r.default.can({
                    permission: s.Permissions.ADMINISTRATOR,
                    user: c,
                    context: d
                });
                return !p && u.canManageUser(s.Permissions.MODERATE_MEMBERS, c, d)
            }

            function d(e, t) {
                return (0, i.useStateFromStores)([o.default, l.default, a.default], () => u(e, t, [o.default, l.default, a.default]), [e, t])
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return s
                },
                fetchPrivateChannelIntegrations: function() {
                    return u
                },
                deletePrivateChannelIntegration: function() {
                    return d
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                l = n("872717"),
                a = n("913144");
            n("253981");
            var o = n("140596"),
                r = n("49111");
            n("843455"), n("782340");

            function s() {
                o.default.getApplicationsShelfFetchState() === o.FetchState.NOT_FETCHED && (a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), l.default.get(r.Endpoints.APPLICATIONS_SHELF).then(e => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(e) {
                let t = new i.default(1e3, 5e3);
                a.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), l.default.get({
                    url: r.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function d(e, t) {
                return l.default.delete(r.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691"),
                l = n("446674"),
                a = n("201155"),
                o = n("21121"),
                r = n("970755"),
                s = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, o.useInMainTabsExperiment)();
                let n = (0, a.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: u,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: p
                    } = (0, l.useStateFromStoresObject)([s.default], () => ({
                        installedIntegrations: s.default.getIntegrations(t),
                        applicationsShelf: s.default.getApplicationsShelf(),
                        integrationsFetchState: s.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: s.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === s.FetchState.NOT_FETCHED || c === s.FetchState.FETCH_FAILED) && (0, r.fetchPrivateChannelIntegrations)(t), (p === s.FetchState.NOT_FETCHED || p === s.FetchState.FETCH_FAILED) && (0, r.fetchApplicationsShelf)())
                }, [n, t, c, p]);
                let f = new Set(u.map(e => e.application.id)),
                    m = d.filter(e => !f.has(e.id));
                return {
                    installedIntegrations: u,
                    availableApplications: m,
                    applicationsShelf: d,
                    fetched: c !== s.FetchState.NOT_FETCHED && c !== s.FetchState.FETCHING && p !== s.FetchState.NOT_FETCHED && p !== s.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return C
                }
            }), n("222007"), n("424973");
            var i, l, a = n("446674"),
                o = n("913144"),
                r = n("653047"),
                s = n("946028");
            (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.FETCH_FAILED = 3] = "FETCH_FAILED";
            let u = new Map,
                d = new Map,
                c = [],
                p = 0,
                f = [];
            class m extends a.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = u.get(e)) && void 0 !== t ? t : f
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = u.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return u
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = d.get(e)) && void 0 !== t ? t : 0
                }
                getApplicationsShelfFetchState() {
                    return p
                }
                getApplicationsShelf() {
                    return c
                }
            }

            function _(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            m.displayName = "PrivateChannelIntegrationStore";
            let I = new m(o.default, {
                LOGOUT() {
                    u.clear()
                },
                CONNECTION_OPEN() {
                    u.clear(), d.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || 3 !== d.get(t)) return !1;
                    d.set(t, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    p = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    c = t.map(r.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), p = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    p = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    u.set(t, null), d.set(t, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    u.set(t, _(n.map(s.createPrivateChannelIntegration))), d.set(t, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    d.set(t, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    u.set(t.channel_id, _([...n, (0, s.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, s.createPrivateChannelIntegration)(t),
                        l = n.findIndex(e => e.application.id === i.application.id),
                        a = [...n]; - 1 === l ? a.push(i) : a[l] = i, u.set(i.channel_id, _(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = u.get(t);
                    if (null == i) return !1;
                    u.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return u.delete(t.id)
                }
            });
            var C = I
        },
        252862: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAutoArchiveOptions: function() {
                    return r
                },
                getAutoArchiveDuration: function() {
                    return s
                }
            });
            var i = n("661201"),
                l = n.n(i);
            n("866227");
            var a = n("648564"),
                o = n("782340");

            function r() {
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

            function s(e, t) {
                var n;
                return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : a.DEFAULT_AUTO_ARCHIVE_DURATION
            }
            l(() => r().map(e => e.value))
        },
        730498: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PrivateThreadMode: function() {
                    return i
                },
                usePrivateThreadMode: function() {
                    return D
                },
                getIsPrivate: function() {
                    return R
                },
                getDefaultThreadName: function() {
                    return L
                },
                useCreateThreadCommon: function() {
                    return P
                },
                createThread: function() {
                    return U
                },
                useCreateForumPostCommon: function() {
                    return F
                }
            }), n("781738"), n("424973"), n("222007");
            var i, l, a = n("884691"),
                o = n("872717"),
                r = n("913144"),
                s = n("404118"),
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
                E = n("718517"),
                N = n("568734"),
                g = n("299039"),
                h = n("252862"),
                S = n("300322"),
                O = n("24337"),
                M = n("648564"),
                v = n("49111"),
                y = n("782340");

            function D(e) {
                let t = (0, S.useCanStartPublicThread)(e),
                    n = (0, S.useCanStartPrivateThread)(e);
                return n ? t ? 2 : 3 : 1
            }

            function R(e, t) {
                var n;
                if (3 === t) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function L(e, t) {
                var n, i, l, a;
                let o = null == t ? null : T.default.getMessage(e.id, t),
                    r = null !== (l = null == o ? void 0 : null === (i = o.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
                if ("" !== r) return r.length > 40 ? r.substring(0, 40) + "..." : r;
                {
                    let t = m.default.unparse(null !== (a = null == o ? void 0 : o.content) && void 0 !== a ? a : "", e.id, !0),
                        n = (0, O.default)(t.split("\n")[0], !0);
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
                    location: r,
                    onThreadCreated: s,
                    useDefaultThreadName: p,
                    uploadHandler: f
                } = e;
                return a.useCallback(async (e, a, _) => {
                    var T;
                    let A = null == n,
                        E = R(i, l),
                        N = null !== (T = i.name) && void 0 !== T ? T : "";
                    if ("" === N && p) {
                        let e = L(t, n);
                        N = "" !== e ? e : y.default.Messages.THREAD
                    }
                    let S = (0, h.getAutoArchiveDuration)(t),
                        O = I.default.getChannel(g.default.castMessageIdAsChannelId(n)),
                        M = await b(t, () => {
                            let e = null != n ? v.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : v.Endpoints.CHANNEL_THREADS(t.id);
                            return o.default.post({
                                url: e,
                                body: {
                                    name: N,
                                    type: E ? v.ChannelTypes.PRIVATE_THREAD : t.type === v.ChannelTypes.GUILD_ANNOUNCEMENT ? v.ChannelTypes.ANNOUNCEMENT_THREAD : v.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: S,
                                    location: r
                                }
                            })
                        });
                    M !== O && (u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), null == s || s(M), (A || e.length > 0 || null != a && a.length > 0 || null != _ && _.length > 0) && function(e, t, n, i, l) {
                        if (null != l && null != i && i.length > 0) l(e, i, t, n);
                        else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                        else d.default.sendMessage(e.id, m.default.parse(e, t))
                    }(M, e, a, _, f)), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage)
                }, [t, n, i, s, l, r, p, f])
            }

            function U(e, t, n, i, l) {
                return b(e, () => o.default.post({
                    url: v.Endpoints.CHANNEL_THREADS(e.id),
                    body: {
                        name: t,
                        type: n,
                        auto_archive_duration: i,
                        location: l
                    }
                }))
            }

            function F(e) {
                let {
                    parentChannel: t,
                    name: n,
                    appliedTags: i,
                    onThreadCreated: l,
                    upload: r
                } = e;
                return a.useCallback(async (e, a, s) => {
                    let d = 0,
                        [p, m] = (0, _.default)(e);
                    p && (e = m, d = (0, N.addFlag)(d, v.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let I = (0, h.getAutoArchiveDuration)(t, null),
                        T = v.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
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
                        E = await b(t, () => null != s && s.length > 0 ? r(T, A, s) : o.default.post({
                            url: T,
                            body: A
                        }));
                    return u.default.clearDraft(t.id, C.DraftType.ThreadSettings), u.default.clearDraft(t.id, C.DraftType.FirstThreadMessage), c.default.clearAll(t.id, C.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: E.id
                    }), null == l || l(E), E
                }, [t, n, l, i, r])
            }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
            async function b(e, t) {
                let n;
                let i = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? s.default.show({
                        title: y.default.Messages.ERROR,
                        body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                    }) : (r.default.dispatch({
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: A.SlowmodeType.CreateThread,
                        channelId: e.id
                    }), r.default.dispatch({
                        type: "THREAD_CREATE_LOCAL",
                        channelId: n.body.id
                    }))
                } catch (t) {
                    var l, a, o, u, d, c;
                    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === v.AbortCodes.TOO_MANY_THREADS) s.default.show({
                        title: i ? y.default.Messages.CANNOT_CREATE_FORUM_POST : y.default.Messages.CANNOT_CREATE_THREAD,
                        body: i ? y.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : y.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === v.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) s.default.show({
                        title: y.default.Messages.CANNOT_CREATE_THREAD,
                        body: y.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === v.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && r.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: A.SlowmodeType.CreateThread,
                            cooldownMs: n * E.default.Millis.SECOND
                        })
                    } else if (429 === t.status) s.default.show({
                        title: i ? y.default.Messages.CANNOT_CREATE_FORUM_POST : y.default.Messages.CANNOT_CREATE_THREAD,
                        body: y.default.Messages.RATE_LIMITED
                    });
                    else if (M.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
                    else {
                        if (M.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                            null == t.body && n(), p.default.addConditionalChangeListener(() => {
                                let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let i = I.default.getChannel(t);
                                    return r.default.wait(() => {
                                        null == i ? n() : e(i)
                                    }), !1
                                }
                            })
                        });
                        s.default.show({
                            title: y.default.Messages.ERROR,
                            body: y.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                }
                return new Promise((e, t) => {
                    null == n.body && t(), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getChannel(n.body.id);
                        if (null != t) return r.default.wait(() => {
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
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("926001"),
                o = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("503420"),
                o = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: l = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: a,
                                fill: l,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, a.ClockIcon, void 0, {
                    size: 20
                })
        },
        670598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("82169");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=31337.f2f4921b6abdc0e593b1.js.map