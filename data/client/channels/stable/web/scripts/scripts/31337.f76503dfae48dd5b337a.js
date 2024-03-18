(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31337"], {
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
                s = n("142852"),
                r = n("402752"),
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
                    let n = (0, s.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
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
                        e[t.id] = (0, r.calculateProgress)(t.loaded, t.currentSize)
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
                s = n("605250"),
                r = n("402752"),
                u = n("894488");
            let d = new s.default("UploaderBase.tsx");
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
                            l = (0, r.calculateProgress)(e, t),
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
        589777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BUILT_IN_SECTIONS: function() {
                    return L
                },
                getBuiltInCommands: function() {
                    return B
                }
            }), n("222007"), n("70102");
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
                I = n("730498"),
                T = n("300322"),
                A = n("845579"),
                E = n("42203"),
                C = n("957255"),
                N = n("697218"),
                g = n("718517"),
                M = n("158998"),
                O = n("524768"),
                S = n("317041"),
                h = n("49111"),
                y = n("903639"),
                v = n("782340");
            let D = n("150692").default,
                R = (e, t) => {
                    var n;
                    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
                },
                L = {
                    [S.BuiltInSectionId.BUILT_IN]: {
                        id: S.BuiltInSectionId.BUILT_IN,
                        type: O.ApplicationCommandSectionType.BUILT_IN,
                        get name() {
                            return v.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                        }
                    },
                    [S.BuiltInSectionId.FRECENCY]: {
                        id: S.BuiltInSectionId.FRECENCY,
                        type: O.ApplicationCommandSectionType.BUILT_IN,
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                        return !t.isPrivate() && A.EnableTTSCommand.getSetting() && C.default.can(h.Permissions.SEND_TTS_MESSAGES, t)
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                        return !t.isPrivate() && (C.default.can(h.Permissions.CHANGE_NICKNAME, t) || C.default.can(h.Permissions.MANAGE_NICKNAMES, t))
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                        return (0, T.computeCanStartPublicThread)(t)
                    },
                    execute: async (e, t) => {
                        var n, i;
                        let {
                            channel: l
                        } = t, a = null !== (n = R(e, "name")) && void 0 !== n ? n : "", o = null !== (i = R(e, "message")) && void 0 !== i ? i : "", r = await (0, I.createThread)(l, a, s.ChannelTypes.PUBLIC_THREAD, (0, _.getAutoArchiveDuration)(l, null), "Slash Command");
                        c.default.sendMessage(r.id, m.default.parse(r, o))
                    }
                }, {
                    id: "-11",
                    name: "kick",
                    displayName: "kick",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: O.ApplicationCommandInputType.BUILT_IN,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                        return C.default.can(h.Permissions.KICK_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!C.default.canManageUser(h.Permissions.KICK_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_UNABLE);
                            return
                        }
                        let o = async () => {
                            var t;
                            let n = N.default.getUser(a);
                            if (null == n) throw Error();
                            await d.default.kickUser(i.id, a, null !== (t = R(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                user: M.default.getUserTag(n)
                            }))
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_ERROR)
                        })
                    }
                }, {
                    id: "-12",
                    name: "ban",
                    displayName: "ban",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: O.ApplicationCommandInputType.BUILT_IN,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                                value: g.default.Seconds.HOUR
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                                value: 6 * g.default.Seconds.HOUR
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                                value: 12 * g.default.Seconds.HOUR
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                                value: g.default.Seconds.DAY
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                                value: 3 * g.default.Seconds.DAY
                            }, {
                                name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                                value: 7 * g.default.Seconds.DAY
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
                        return C.default.can(h.Permissions.BAN_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        var n;
                        let {
                            guild: i,
                            channel: l
                        } = t;
                        if (null == i) return;
                        let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                        if (!C.default.canManageUser(h.Permissions.BAN_MEMBERS, a, i)) {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_UNABLE);
                            return
                        }
                        let o = async () => {
                            var t, n;
                            if ("" === a) throw Error();
                            let o = null !== (t = R(e, "delete_messages")) && void 0 !== t ? t : 0,
                                s = null !== (n = R(e, "reason")) && void 0 !== n ? n : "",
                                r = N.default.getUser(a);
                            await d.default.banUser(i.id, a, o, s), c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                user: null != r ? M.default.getUserTag(r) : a
                            }))
                        };
                        o().catch(() => {
                            c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_ERROR)
                        })
                    }
                }, {
                    id: "-13",
                    name: "timeout",
                    displayName: "timeout",
                    type: p.ApplicationCommandType.CHAT,
                    inputType: O.ApplicationCommandInputType.BUILT_IN,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                            return (0, y.getDisableCommunicationDurationOptions)().map(e => ({
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
                        return C.default.can(h.Permissions.MODERATE_MEMBERS, t)
                    },
                    execute: (e, t) => {
                        let {
                            guild: n,
                            channel: i
                        } = t;
                        if (null == n) return;
                        let l = R(e, "user");
                        if (!(0, f.canToggleCommunicationDisableOnUser)(n.id, l)) {
                            c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_UNABLE);
                            return
                        }
                        let a = async () => {
                            var t, a;
                            let s = null !== (t = R(e, "duration")) && void 0 !== t ? t : "",
                                r = null !== (a = R(e, "reason")) && void 0 !== a ? a : "",
                                u = N.default.getUser(l);
                            if (null == u) throw Error();
                            await d.default.setCommunicationDisabledUntil({
                                guildId: n.id,
                                userId: l,
                                communicationDisabledUntilTimestamp: o().add(s, "s").toISOString(),
                                duration: s,
                                reason: r
                            }), c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                user: M.default.getUserTag(u),
                                duration: s
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
                    inputType: O.ApplicationCommandInputType.BUILT_IN,
                    applicationId: S.BuiltInSectionId.BUILT_IN,
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
                        } = t, a = R(e, "user"), o = null !== (n = R(e, "message")) && void 0 !== n ? n : "", s = async () => {
                            await u.default.openPrivateChannel(a).then(e => {
                                let t = E.default.getChannel(e);
                                l(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, m.default.parse(t, o))
                            })
                        };
                        s().catch(() => {
                            c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_MSG_ERROR)
                        })
                    }
                }],
                b = P.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
                B = (e, t, n) => {
                    let i = t ? P : b;
                    return i = i.filter(t => t.type === e && (!n || t.inputType === O.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === O.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
                }
        },
        369010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTopCommands: function() {
                    return s
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
        },
        342564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFilteredTopCommands: function() {
                    return f
                },
                default: function() {
                    return T
                }
            }), n("222007"), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                o = n("913144"),
                s = n("798609"),
                r = n("80507"),
                u = n("374363");
            n("317041");
            var d = n("397336");
            let c = {
                    pendingUsages: []
                },
                p = new r.default({
                    computeBonus: () => 1,
                    computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
                    lookupKey: e => e,
                    afterCompute: () => {},
                    numFrequentlyItems: 500
                });

            function f(e, t) {
                return e.filter(e => {
                    if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
                    return !0
                }).map(e => e.split(":")[0])
            }

            function m(e, t) {
                return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
            }

            function _() {
                var e, t;
                let n = u.default.frecencyWithoutFetchingLatest,
                    i = null !== (t = null === (e = n.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
                p.overwriteHistory(l.mapValues(i, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), c.pendingUsages)
            }
            class I extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (c = e), this.syncWith([u.default], _)
                }
                getState() {
                    return c
                }
                hasPendingUsage() {
                    return c.pendingUsages.length > 0
                }
                getCommandFrecencyWithoutLoadingLatest() {
                    return p
                }
                getScoreWithoutLoadingLatest(e, t) {
                    var n;
                    return null !== (n = p.getScore(m(e, t))) && void 0 !== n ? n : 0
                }
                getTopCommandsWithoutLoadingLatest() {
                    return p.frequently
                }
            }
            I.displayName = "ApplicationCommandFrecencyStore", I.persistKey = "ApplicationCommandFrecencyV2";
            var T = new I(o.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t,
                        context: n
                    } = e;
                    if (t.type !== s.ApplicationCommandType.CHAT) return !1;
                    let i = m(n, t);
                    c.pendingUsages.push({
                        key: i,
                        timestamp: Date.now()
                    }), p.track(i), p.compute()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    c.pendingUsages = []
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
                o = n("718517"),
                s = n("49111");
            async function r(e, t, n) {
                let r, u = 0;
                switch (e.type) {
                    case "channel":
                        r = s.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        r = s.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        r = s.Endpoints.APPLICATION_COMMAND_INDEX_USER
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
                    return 429 === t.status ? d(t.body.retry_after * o.default.Millis.SECOND) : (p(!0), l.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                        target: e
                    }))
                }), p = e => {
                    let i = performance.now() - t;
                    a.default.track(s.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
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
                    return K
                },
                useContextIndexState: function() {
                    return z
                },
                useGuildIndexState: function() {
                    return q
                },
                useUserIndexState: function() {
                    return X
                },
                useDiscoveryState: function() {
                    return Q
                }
            }), n("222007"), n("424973"), n("881410");
            var i, l, a = n("884691"),
                o = n("627445"),
                s = n.n(o),
                r = n("811022"),
                u = n("446674"),
                d = n("913144"),
                c = n("851387");
            n("798609");
            var p = n("605393"),
                f = n("892692"),
                m = n("915639"),
                _ = n("872173"),
                I = n("42203"),
                T = n("305961"),
                A = n("697218"),
                E = n("599110"),
                C = n("589777"),
                N = n("369010"),
                g = n("342564"),
                M = n("9566"),
                O = n("972620"),
                S = n("524768"),
                h = n("389153"),
                y = n("123373"),
                v = n("217946"),
                D = n("317041"),
                R = n("49111");
            let L = new r.default("ApplicationCommandIndexStore"),
                P = Symbol("currentUser"),
                U = Symbol("stale"),
                b = Symbol("current"),
                B = Object.freeze({
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
                F = Object.freeze({
                    serverVersion: U,
                    fetchState: {
                        fetching: !1
                    }
                }),
                H = {
                    sensitivity: "accent",
                    numeric: !0
                };

            function w(e) {
                switch (e.type) {
                    case "guild":
                        return e.guildId;
                    case "channel":
                        return e.channelId;
                    case "user":
                        return P
                }
            }

            function G(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = w(e),
                    l = j.indices[i];
                return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), j.indices[i] = {
                    ...l,
                    ...t
                }) : n && (j.indices[i] = {
                    serverVersion: U,
                    fetchState: {
                        fetching: !1
                    },
                    ...t
                }), l
            }

            function k(e) {
                let t = w(e),
                    n = j.indices[t];
                (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete j.indices[t]
            }

            function Y() {
                for (let e of Object.values(j.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
                j.indices = {}
            }

            function W() {
                G({
                    type: "user"
                }, {
                    serverVersion: U
                })
            }
            class V extends u.default.Store {
                initialize() {
                    this.waitFor(m.default), this.syncWith([m.default], () => {
                        ! function() {
                            let e = m.default.locale;
                            e !== j.oldLocale && (Y(), j.collator = new Intl.Collator(e, {
                                sensitivity: "accent",
                                numeric: !0
                            }), j.oldLocale = e)
                        }()
                    })
                }
                getContextState(e) {
                    var t, n;
                    return null != e && ee(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : F : x
                }
                getUserState() {
                    var e;
                    return (0, h.isUserInUserAppExperiment)({
                        location: "getUserState"
                    }, {
                        autoTrackExposure: !1
                    }) ? null !== (e = this.indices[P]) && void 0 !== e ? e : F : x
                }
                query(e, t, n) {
                    let i = A.default.getCurrentUser();
                    if (null == i) return B;
                    let l = this.getContextState(e),
                        a = this.getUserState(),
                        o = (0, y.buildPermissionContext)(e, t.commandType),
                        s = !1 !== t.applicationCommands && o.hasBaseAccessPermissions,
                        r = !1;
                    if (n.allowFetch) {
                        let t = s && ee(e);
                        t && (E.default.track(R.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                            miss: null == l.result,
                            size: Object.keys(j.indices).length
                        }), et(l) && (null != e.guild_id ? (0, M.requestApplicationCommandIndex)({
                            type: "guild",
                            guildId: e.guild_id
                        }) : (0, M.requestApplicationCommandIndex)({
                            type: "channel",
                            channelId: e.id
                        }), r = !0)), (0, h.isUserInUserAppExperiment)({
                            location: "query"
                        }) && et(a) && ((0, M.requestApplicationCommandIndex)({
                            type: "user"
                        }), r = !0)
                    }
                    let u = J({
                        permissionContext: o,
                        text: t.text,
                        allowApplicationCommands: s,
                        builtIns: t.builtIns,
                        scoreMethod: n.scoreMethod,
                        allowEmptySections: n.allowEmptySections,
                        contextState: l,
                        userState: a
                    });
                    return u.loading = u.loading || r, u
                }
                constructor(...e) {
                    super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, H)
                }
            }
            V.displayName = "ApplicationCommandIndexStore";
            let j = new V(d.default, {
                LOGOUT: Y,
                CONNECTION_OPEN: function() {
                    for (let e of Object.values(j.indices)) e.serverVersion = U
                },
                APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
                    var t;
                    let {
                        target: n,
                        start: i
                    } = e;
                    if (et(null !== (t = j.indices[w(n)]) && void 0 !== t ? t : F)) {
                        let e = new AbortController;
                        G(n, {
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
                    let o = {},
                        s = {},
                        r = new Set;
                    for (let e of l.applications) {
                        if (null == e.bot && null != e.bot_id) {
                            s[e.bot_id] = e.id;
                            let t = A.default.getUser(e.bot_id);
                            null != t ? e.bot = t : r.add(e.bot_id)
                        } else null != e.bot && (s[e.bot.id] = e.id);
                        let t = {
                            descriptor: {
                                ...(0, h.getApplicationCommandSection)(function(e) {
                                    return {
                                        description: e.description,
                                        icon: e.icon,
                                        id: e.id,
                                        name: e.name,
                                        bot: e.bot
                                    }
                                }(e)),
                                permissions: null != e.permissions ? (0, f.keyPermissions)(el(e.permissions, a)) : void 0,
                                botId: e.bot_id
                            },
                            commands: {}
                        };
                        o[e.id] = t
                    }
                    for (let e of ("guild" === i.type && r.size > 0 && c.default.requestMembersById(i.guildId, [...r]), (0, h.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
                            var n, i, l, a, o;
                            let s = {
                                ...e,
                                description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                                dm_permission: void 0,
                                name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                                options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(en)) && void 0 !== o ? o : [],
                                permissions: null != e.permissions ? el(e.permissions, t) : void 0
                            };
                            return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
                        })(e, a)), !0))) {
                        let t = o[e.applicationId];
                        if (null == t) {
                            L.error("Command has no matching application");
                            continue
                        }
                        t.commands[e.id] = e
                    }
                    let u = null !== (n = l.version) && void 0 !== n ? n : b;
                    G(i, {
                        serverVersion: u,
                        result: {
                            sections: o,
                            sectionIdsByBotId: s,
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
                    G(t, {
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
                    G(t = null != i ? {
                        type: "guild",
                        guildId: i
                    } : {
                        type: "channel",
                        channelId: n
                    }, {
                        serverVersion: U
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    k({
                        type: "channel",
                        channelId: t.id
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    k({
                        type: "guild",
                        guildId: t.id
                    })
                },
                GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: n,
                        version: i
                    } = e, l = G({
                        type: "guild",
                        guildId: n
                    }, {
                        serverVersion: null != i ? i : U
                    }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
                    if (null != a)
                        for (let e in a) {
                            let t = I.default.getDMFromUserId(e);
                            null != t && G({
                                type: "channel",
                                channelId: t
                            }, {
                                serverVersion: U
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
                        let i = w({
                                type: "guild",
                                guildId: e
                            }),
                            l = null === (n = j.indices[i]) || void 0 === n ? void 0 : n.result;
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
                            s(null != i, "Bot has no matching index section"), s(null != i.descriptor.application, "Bot's index section has no application info");
                            let o = (0, h.getApplicationCommandSection)({
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
                USER_APPLICATION_UPDATE: W,
                USER_APPLICATION_REMOVE: W
            });
            var K = j;

            function z(e, t, n) {
                let [i, l] = a.useState(!0), o = (0, u.useStateFromStoresObject)([j], () => j.getContextState(e));
                return a.useEffect(() => {
                    if (i && null != e) {
                        if (n) {
                            let n = t && ee(e);
                            n && (E.default.track(R.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                                miss: null == o.result,
                                size: Object.keys(j.indices).length
                            }), et(o) && (null != e.guild_id ? (0, M.requestApplicationCommandIndex)({
                                type: "guild",
                                guildId: e.guild_id
                            }) : (0, M.requestApplicationCommandIndex)({
                                type: "channel",
                                channelId: e.id
                            })))
                        }
                        l(!1)
                    }
                }, [o, n, e, t, i]), o
            }

            function q(e, t) {
                let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([j], () => {
                    var t;
                    return null !== (t = j.indices[e]) && void 0 !== t ? t : F
                });
                return a.useEffect(() => {
                    n && null != e && (t && (E.default.track(R.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == l.result,
                        size: Object.keys(j.indices).length
                    }), et(l) && (0, M.requestApplicationCommandIndex)({
                        type: "guild",
                        guildId: e
                    })), i(!1))
                }, [l, t, e, n]), l
            }

            function X(e, t) {
                let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([j], () => j.getUserState()), o = (0, h.useIsUserInUserAppExperiment)({
                    location: "useUserIndexState"
                });
                return a.useEffect(() => {
                    n && (t && et(l) && e && o && (0, M.requestApplicationCommandIndex)({
                        type: "user"
                    }), i(!1))
                }, [l, t, e, o, n]), l
            }

            function Q(e, t, n, i) {
                let {
                    descriptors: l,
                    commands: o,
                    sectionedCommands: s,
                    loading: r
                } = function(e, t, n) {
                    let i = (0, y.usePermissionContext)(e, t.commandType),
                        l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                        o = z(e, l, n.allowFetch),
                        s = X(l, n.allowFetch);
                    return a.useMemo(() => J({
                        permissionContext: i,
                        text: t.text,
                        allowApplicationCommands: l,
                        builtIns: t.builtIns,
                        scoreMethod: n.scoreMethod,
                        allowEmptySections: n.allowEmptySections,
                        contextState: o,
                        userState: s,
                        sortOptions: n.sortOptions
                    }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, n.sortOptions, o, s])
                }(e, n, i), u = (0, N.useTopCommands)({
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
                            let i = g.default.getScoreWithoutLoadingLatest(n, e),
                                l = g.default.getScoreWithoutLoadingLatest(n, t);
                            return l - i
                        }).splice(0, D.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
                    return 0 === a.length ? {
                        descriptors: l,
                        commands: o,
                        sectionedCommands: s,
                        loading: r
                    } : {
                        descriptors: [C.BUILT_IN_SECTIONS[D.BuiltInSectionId.FRECENCY], ...l],
                        commands: a.concat(o),
                        sectionedCommands: [{
                            section: C.BUILT_IN_SECTIONS[D.BuiltInSectionId.FRECENCY],
                            data: a
                        }, ...s],
                        loading: r
                    }
                }, [r, i.includeFrecency, u, e, t, o, l, s])
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

            function J(e) {
                let {
                    permissionContext: t,
                    contextState: n,
                    userState: i,
                    text: l,
                    builtIns: a = O.BuiltInCommandFilter.ALLOW,
                    allowApplicationCommands: o = !0,
                    allowEmptySections: r = !1,
                    scoreMethod: u = O.ScoreMethod.NONE,
                    sortOptions: d = Z
                } = e, {
                    commandType: c
                } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), I = a === O.BuiltInCommandFilter.ONLY_TEXT, A = a !== O.BuiltInCommandFilter.DENY ? (0, C.getBuiltInCommands)(c, !0, I) : [], E = [], N = {
                    permissionContext: t,
                    query: f,
                    splitQuery: m,
                    allowEmptySections: r,
                    scoreMethod: u
                };
                if (o) {
                    var M, S, h, y;
                    let e = null !== (h = null === (M = n.result) || void 0 === M ? void 0 : M.sections) && void 0 !== h ? h : {},
                        t = null !== (y = null === (S = i.result) || void 0 === S ? void 0 : S.sections) && void 0 !== y ? y : {},
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
                        s(null != i, "Failed to select application descriptor"), s(null != l, "Failed to select list of application commands");
                        let r = $(i, l, N);
                        null != r && E.push(r)
                    }
                    d.applications.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), E.sort((e, t) => {
                        if (d.applications.useScore && u === O.ScoreMethod.APPLICATION_ONLY) {
                            var n, i, l, a;
                            let o = null !== (l = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : Number.MAX_VALUE,
                                s = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
                            if (o !== s) return o - s
                        }
                        if (d.applications.useFrecency) {
                            let n = p.default.getScoreWithoutLoadingLatest(e.section.id),
                                i = p.default.getScoreWithoutLoadingLatest(t.section.id);
                            if (n !== i) return i - n
                        }
                        return ea(e.section.name, t.section.name)
                    })
                }
                if (A.length > 0 || !0 === r) {
                    let e = $(C.BUILT_IN_SECTIONS[D.BuiltInSectionId.BUILT_IN], A, N);
                    null != e && E.push(e)
                }
                let v = E.flatMap(e => e.data.map(t => ({
                    ...t,
                    section: e.section
                })));
                if (u === O.ScoreMethod.COMMAND_ONLY || u === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                    let e = t.context,
                        n = T.default.getGuild(t.context.guild_id);
                    d.commands.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), v.sort((t, i) => {
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
                        return ea(t.displayName, i.displayName)
                    })
                }
                return {
                    commands: v,
                    descriptors: E.map(e => e.section),
                    sectionedCommands: E,
                    loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
                }
            }

            function $(e, t, n) {
                let i, {
                        query: l,
                        splitQuery: a,
                        allowEmptySections: o,
                        scoreMethod: s,
                        permissionContext: r
                    } = n,
                    {
                        context: u,
                        userId: d,
                        roleIds: c,
                        isImpersonating: p
                    } = r,
                    f = null != u.guild_id ? v.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
                    m = null != u.guild_id ? v.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
                    _ = [];
                for (let n of t) {
                    let t = v.hasAccess(n, r, f, m, e.botId);
                    t === v.HasAccessResult.ALLOWED && _.push(n)
                }
                return 0 !== (i = s !== O.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
                    let a;
                    let o = [];
                    if (l === O.ScoreMethod.APPLICATION_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                        let t = i.name.toLocaleLowerCase();
                        t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
                    }
                    let s = t[0],
                        r = t.slice(1).join(" ");
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
                                let s = !1;
                                for (let {
                                        name: n,
                                        serverLocalizedName: i
                                    }
                                    of null !== (l = e.options) && void 0 !== l ? l : []) {
                                    if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != o && "".concat(o, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(a, " ").concat(i).startsWith(t) || null != o && "".concat(o, " ").concat(i).startsWith(t))) return 3;
                                    (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (s = !0)
                                }
                                if (s) return 4
                            }(t, e, s, r)) && void 0 !== u ? u : a
                        } else n = a;
                        void 0 !== n && o.push({
                            ...t,
                            score: n
                        })
                    }
                    return o
                }(l, a, _, e, s) : _).length || o ? ((s === O.ScoreMethod.NONE || s === O.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => ea(e.displayName, t.displayName)), {
                    section: e,
                    data: i
                }) : null
            }

            function ee(e) {
                var t;
                return null != e.guild_id || e.type === R.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
            }

            function et(e) {
                return !! function(e) {
                    var t;
                    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
                }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
            }

            function en(e) {
                var t, n, i, l;
                let a = {
                    ...e,
                    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ei),
                    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
                    name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
                    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(en)
                };
                return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
            }

            function ei(e) {
                var t;
                let n = {
                    ...e,
                    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
                };
                return e.name !== e.name_default && (n.name_localized = e.name), n
            }

            function el(e, t) {
                let n = [];
                if (null != e.user && n.push({
                        type: S.ApplicationCommandPermissionType.USER,
                        id: t,
                        permission: e.user
                    }), null != e.channels)
                    for (let [t, i] of Object.entries(e.channels)) n.push({
                        type: S.ApplicationCommandPermissionType.CHANNEL,
                        id: t,
                        permission: i
                    });
                if (null != e.roles)
                    for (let [t, i] of Object.entries(e.roles)) n.push({
                        type: S.ApplicationCommandPermissionType.ROLE,
                        id: t,
                        permission: i
                    });
                return n
            }(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

            function ea(e, t) {
                return j.collator.compare(e, t)
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
                s = n("841362"),
                r = n("655518");

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
                    } = null !== (n = s.numberParts[e]) && void 0 !== n ? n : s.numberParts["en-US"];
                    i = RegExp(r.default.escape(t), "g"), l = RegExp(r.default.escape(o), "g")
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
                    return m
                },
                getCachedApplicationSection: function() {
                    return _
                },
                getCachedResults: function() {
                    return I
                },
                getChangeKeys: function() {
                    return T
                },
                useDiscovery: function() {
                    return A
                },
                executeQuery: function() {
                    return E
                },
                useCommand: function() {
                    return C
                },
                useCommandsForApplication: function() {
                    return N
                }
            }), n("222007"), n("424973"), n("808653");
            var i = n("884691"),
                l = n("446674"),
                a = n("305961"),
                o = n("449008"),
                s = n("589777"),
                r = n("988721"),
                u = n("972620"),
                d = n("524768"),
                c = n("389153"),
                p = n("317041"),
                f = n("49111");

            function m(e, t) {
                var n, i, l, a;
                if (null == t) return {
                    application: void 0,
                    command: void 0
                };
                let o = r.default.getUserState(),
                    s = r.default.getContextState(e),
                    u = Object.values(null !== (l = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {}).concat(Object.values(null !== (a = null === (i = s.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}));
                for (let e of u) {
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

            function _(e, t, n) {
                var i, l, a, o, s;
                let u = r.default.getUserState(),
                    d = r.default.getContextState(e),
                    c = null !== (s = null === (l = u.result) || void 0 === l ? void 0 : null === (i = l.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== s ? s : null === (o = d.result) || void 0 === o ? void 0 : null === (a = o.sections) || void 0 === a ? void 0 : a[n];
                return null == c ? void 0 : c.descriptor
            }

            function I(e, t, n) {
                let i = r.default.query(e, {
                    commandType: t,
                    text: n
                }, {
                    scoreMethod: u.ScoreMethod.COMMAND_OR_APPLICATION,
                    allowFetch: !1
                });
                return {
                    commands: i.commands,
                    sections: i.descriptors
                }
            }

            function T(e) {
                let t = r.default.getUserState(),
                    n = r.default.getContextState(e);
                return [null == t ? void 0 : t.result, null == n ? void 0 : n.result]
            }

            function A(e, t, n) {
                let o = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id), [e.guild_id]),
                    {
                        descriptors: u,
                        commands: d,
                        sectionedCommands: c,
                        loading: m
                    } = (0, r.useDiscoveryState)(e, o, t, {
                        ...n,
                        allowFetch: !0
                    }),
                    [_, I] = i.useState(null),
                    T = i.useRef(!1);
                T.current = m;
                let A = i.useMemo(() => {
                    let e = [];
                    if (null != n.placeholderCount)
                        for (let i = 0; i < n.placeholderCount; i++) e.push(M(i, t.commandType));
                    return e
                }, [t.commandType, n.placeholderCount]);
                return i.useMemo(() => {
                    let e = {
                        loading: T,
                        commands: d,
                        activeSections: u,
                        commandsByActiveSection: c,
                        filteredSectionId: _,
                        hasMoreAfter: !1,
                        placeholders: m ? A : [],
                        sectionDescriptors: u,
                        filterSection: e => {
                            I(e)
                        },
                        scrollDown: f.NOOP
                    };
                    if (null != _) {
                        let t = c.find(e => e.section.id === _);
                        e.activeSections = null != t ? [t.section] : [], e.commandsByActiveSection = null != t ? [t] : []
                    }
                    if (m) {
                        let t = c[0];
                        if (null != t) e.commandsByActiveSection = [{
                            section: t.section,
                            data: [...t.data, ...A]
                        }, ...c.slice(1)];
                        else {
                            let t = s.BUILT_IN_SECTIONS[p.BuiltInSectionId.BUILT_IN];
                            e.activeSections = [t], e.commandsByActiveSection = [{
                                section: t,
                                data: A
                            }]
                        }
                        e.commands = [...d, ...A]
                    }
                    return e
                }, [d, u, _, c, m, A])
            }

            function E(e, t, n) {
                let {
                    descriptors: i,
                    commands: l,
                    loading: a
                } = r.default.query(e, t, n), o = [];
                if (null != n.placeholderCount && a)
                    for (let e = 0; e < n.placeholderCount; e++) o.push(M(e, t.commandType));
                return {
                    commands: a ? [...l, ...o] : l,
                    sections: a && 0 === i.length ? [s.BUILT_IN_SECTIONS[p.BuiltInSectionId.BUILT_IN]] : i
                }
            }

            function C(e, t) {
                let n = (0, r.useUserIndexState)(!0, !0),
                    l = (0, r.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    if (null != t) {
                        var e, i, a, o;
                        let s = Object.values(null !== (a = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (o = null === (i = l.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {}));
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
                }, [l.result, n.result, t])
            }

            function N(e, t, n) {
                let l = (0, r.useUserIndexState)(!0, !0),
                    a = (0, r.useContextIndexState)(e, !0, !0);
                return i.useMemo(() => {
                    var e, i, s, r, u, d;
                    let p = null !== (u = null === (i = l.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (s = a.result) || void 0 === s ? void 0 : s.sections[t],
                        f = Object.values(null !== (d = null == p ? void 0 : p.commands) && void 0 !== d ? d : {}).map(e => null == e.rootCommand ? e : (0, c.buildCommand)({
                            rootCommand: e.rootCommand,
                            command: e.rootCommand,
                            applicationId: e.applicationId
                        })).reduce((e, t) => (e[t.id] = t, e), {});
                    return {
                        application: null == p ? void 0 : null === (r = p.descriptor) || void 0 === r ? void 0 : r.application,
                        commands: n.map(e => f[e]).filter(o.isNotNullish)
                    }
                }, [null == l ? void 0 : l.result, null == a ? void 0 : a.result, t, n])
            }
            let g = {
                id: "placeholder-section",
                type: d.ApplicationCommandSectionType.APPLICATION,
                name: ""
            };

            function M(e, t) {
                return {
                    type: t,
                    inputType: d.ApplicationCommandInputType.PLACEHOLDER,
                    id: "placeholder-".concat(e),
                    name: "",
                    displayName: "",
                    description: "",
                    displayDescription: "",
                    applicationId: "",
                    section: g
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
        123373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                buildPermissionContext: function() {
                    return I
                },
                usePermissionContext: function() {
                    return T
                },
                computeCommandContextType: function() {
                    return C
                },
                getContextGuildId: function() {
                    return N
                }
            });
            var i = n("884691"),
                l = n("316693"),
                a = n("446674"),
                o = n("798609"),
                s = n("38654"),
                r = n("845579"),
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
                    I = r.ViewNsfwCommands.getSetting(),
                    T = d.default.getId(),
                    C = null !== (a = null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
                    g = null != _ && null !== (o = null === (i = p.default.getMember(_, T)) || void 0 === i ? void 0 : i.roles) && void 0 !== o ? o : [],
                    M = s.default.isViewingRoles(_),
                    {
                        computedPermissions: O,
                        hasBaseAccessPermissions: S
                    } = E(f);
                return {
                    context: f,
                    userId: T,
                    roleIds: g,
                    isImpersonating: M,
                    commandType: t,
                    computedPermissions: O,
                    hasBaseAccessPermissions: S,
                    allowNsfw: A(f, C, I)
                }
            }

            function T(e, t) {
                let n = i.useMemo(() => {
                        if (e instanceof u.ChannelRecordBase && e.isThread()) {
                            var t;
                            return null !== (t = c.default.getChannel(e.parent_id)) && void 0 !== t ? t : e
                        }
                        return e
                    }, [e]),
                    l = N(n),
                    o = r.ViewNsfwCommands.useSetting(),
                    f = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
                    _ = (0, a.useStateFromStores)([m.default], () => {
                        var e, t;
                        return null !== (t = null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
                    }),
                    I = (0, a.useStateFromStoresArray)([p.default], () => {
                        var e, t;
                        return null != l && null !== (t = null === (e = p.default.getMember(l, f)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
                    }),
                    T = (0, a.useStateFromStores)([s.default], () => s.default.isViewingRoles(l));
                return i.useMemo(() => {
                    let {
                        computedPermissions: e,
                        hasBaseAccessPermissions: i
                    } = E(n);
                    return {
                        context: n,
                        userId: f,
                        roleIds: I,
                        commandType: t,
                        isImpersonating: T,
                        computedPermissions: e,
                        hasBaseAccessPermissions: i,
                        allowNsfw: A(n, _, o)
                    }
                }, [t, n, T, I, f, _, o])
            }

            function A(e, t, n) {
                return !!t && (!(e instanceof u.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
            }

            function E(e) {
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

            function C(e, t) {
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
                    return E
                },
                computeAllowedForUser: function() {
                    return C
                }
            }), n("222007");
            var i, l, a = n("627445"),
                o = n.n(a),
                s = n("316693"),
                r = n("892692"),
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
                    commandType: r,
                    allowNsfw: c,
                    computedPermissions: I,
                    userId: T,
                    roleIds: A,
                    isImpersonating: N,
                    hasBaseAccessPermissions: g
                } = t;
                if (e.type !== r) return 2;
                if (e.nsfw && !c) return 1;
                let M = (0, f.computeCommandContextType)(a, l);
                if (null != e.contexts && !e.contexts.includes(M)) return 4;
                if (null != e.predicate && a instanceof u.ChannelRecordBase) {
                    let t = d.default.getGuild(a.guild_id);
                    if (!e.predicate({
                            channel: a,
                            guild: t
                        })) return 3
                }
                if (e.applicationId === m.BuiltInSectionId.BUILT_IN) return 0;
                let O = (0, f.getContextGuildId)(a);
                if (null == O || s.default.has(I, _.Permissions.ADMINISTRATOR)) return 0;
                if (!g) return 5;
                if (a instanceof u.ChannelRecordBase) {
                    o(void 0 !== i, "missing applicationAllowedForChannel");
                    let t = E(e.permissions, a, O);
                    if (function(e) {
                            return !1 === e
                        }(t) || ! function(e) {
                            return !0 === e
                        }(t) && function(e) {
                            return !1 === e
                        }(i)) return 6
                }
                let S = C(e.permissions, O, T, A, N);
                return function(e) {
                    return !0 === e
                }(S) ? 0 : function(e) {
                    return !1 === e
                }(S) ? 7 : function(e) {
                    return !1 === e
                }(n) || null != e.defaultMemberPermissions && !(!s.default.equals(e.defaultMemberPermissions, p.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && s.default.has(I, e.defaultMemberPermissions)) ? 7 : 0
            }

            function T(e) {
                return !0 === e
            }

            function A(e) {
                return !1 === e
            }

            function E(e, t, n) {
                if (null == e) return null;
                let i = t.id;
                if (t.isThread()) {
                    var l;
                    i = null !== (l = t.parent_id) && void 0 !== l ? l : t.id
                }
                let a = e[(0, r.toPermissionKey)(i, c.ApplicationCommandPermissionType.CHANNEL)];
                if (null != a) return a.permission;
                let o = e[(0, r.toPermissionKey)((0, p.allChannelsSentinel)(n), c.ApplicationCommandPermissionType.CHANNEL)];
                return null != o ? o.permission : null
            }

            function C(e, t, n, i, l) {
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
                let o = e[(0, r.toPermissionKey)(t, c.ApplicationCommandPermissionType.ROLE)];
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
                s = n("81594"),
                r = n("327037"),
                u = n("798609"),
                d = n("979911"),
                c = n("981112"),
                p = n("716241"),
                f = n("118851"),
                m = n("385976"),
                _ = n("274800"),
                I = n("752598"),
                T = n("815297"),
                A = n("263024"),
                E = n("915639"),
                C = n("305961"),
                N = n("585722"),
                g = n("697218"),
                M = n("254490"),
                O = n("449008"),
                S = n("980134"),
                h = n("507217"),
                y = n("246598"),
                v = n("118200"),
                D = n("240249"),
                R = n("524768"),
                L = n("389153"),
                P = n("317041"),
                U = n("49111"),
                b = n("894488"),
                B = n("782340");
            let x = (e, t) => {
                    var n;
                    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
                },
                F = function(e, t, n) {
                    var i, l;
                    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                        o = e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name);
                    if (o) return n.autocomplete.query;
                    if ("" === t) return null;
                    let s = y.default.getAutocompleteLastChoices(n.channel.id, e.name);
                    return null != s ? null !== (l = x(s, t)) && void 0 !== l ? l : a(t) : a(t)
                },
                H = e => {
                    let t = e.toLowerCase() === P.TRUE_OPTION_NAME.toLowerCase(),
                        n = e.toLowerCase() === P.FALSE_OPTION_NAME.toLowerCase();
                    return t || n ? t : null
                };
            async function w(e) {
                var t, n, i, o, r, d, c, m, _, I, T, C, g, M, O;
                let {
                    command: S,
                    optionValues: y,
                    context: D,
                    commandTargetId: P,
                    maxSizeCallback: b,
                    commandOrigin: B = R.CommandOrigin.CHAT
                } = e;
                null == D.autocomplete && a.default.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: D,
                    command: S
                }), await A.default.unarchiveThreadIfNecessary(D.channel.id);
                let w = [],
                    k = [],
                    W = (0, L.getCommandAttachmentDraftType)(B);
                if (null != S.options)
                    for (let e of S.options) {
                        if (e.type === u.ApplicationCommandOptionType.SUB_COMMAND || e.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in y)) continue;
                        let t = (null === (i = D.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
                            n = null;
                        if (e.type === u.ApplicationCommandOptionType.STRING) {
                            let i = null !== (r = null === (o = v.getOptionalString(y, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== r ? r : "";
                            n = null != e.choices ? x(e.choices, i) : e.autocomplete ? F(e, i, D) : i, l(null != D.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && w.push({
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
                        let a = v.filterEmpty(y[e.name]);
                        if (l(null != D.autocomplete || 1 === a.length, 'Option "'.concat(e.name, '" expects a single option type')), null == a[0] && !t) continue;
                        let s = null !== (d = a[0]) && void 0 !== d ? d : {
                            type: "text",
                            text: ""
                        };
                        switch (e.type) {
                            case u.ApplicationCommandOptionType.CHANNEL:
                                if ("channelMention" === s.type) n = s.channelId;
                                else if ("text" === s.type) {
                                    if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(s.text, null === (c = D.guild) || void 0 === c ? void 0 : c.id, D.channel.id);
                                        l((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(s.text)), n = e.channelId
                                    }
                                }
                                break;
                            case u.ApplicationCommandOptionType.ROLE:
                                if ("roleMention" === s.type) n = s.roleId;
                                else if ("text" === s.type) {
                                    if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(s.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, {
                                            allowUsers: !1
                                        });
                                        l((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(s.text)), n = e.roleId
                                    }
                                } else "textMention" === s.type && "@everyone" === s.text && (n = null === (_ = D.guild) || void 0 === _ ? void 0 : _.id);
                                break;
                            case u.ApplicationCommandOptionType.USER:
                                if ("userMention" === s.type) n = s.userId;
                                else if ("text" === s.type) {
                                    if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(s.text, null === (I = D.guild) || void 0 === I ? void 0 : I.id, D.channel.id, {
                                            allowRoles: !1
                                        });
                                        l((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(s.text)), n = e.userId
                                    }
                                }
                                break;
                            case u.ApplicationCommandOptionType.MENTIONABLE:
                                if ("userMention" === s.type) n = s.userId;
                                else if ("roleMention" === s.type) n = s.roleId;
                                else if ("textMention" === s.type && "@everyone" === s.text) n = null === (T = D.guild) || void 0 === T ? void 0 : T.id;
                                else if ("text" === s.type) {
                                    if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                                    else {
                                        let e = (0, f.resolveApplicationCommandOption)(s.text, null === (C = D.guild) || void 0 === C ? void 0 : C.id, D.channel.id);
                                        (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (g = D.guild) || void 0 === g ? void 0 : g.id : l(!1, "Failed to resolve ".concat(s.text))
                                    }
                                }
                                break;
                            case u.ApplicationCommandOptionType.BOOLEAN:
                                "text" === s.type && (n = H(s.text.trim()));
                                break;
                            case u.ApplicationCommandOptionType.INTEGER:
                                if ("text" === s.type) {
                                    let t = s.text.trim();
                                    n = null != e.choices ? Number(x(e.choices, t)) : e.autocomplete ? F(e, t, D, Number) : Number(v.normalizeNumericString(E.default.locale, t))
                                }
                                break;
                            case u.ApplicationCommandOptionType.NUMBER:
                                if ("text" === s.type) {
                                    let t = s.text.trim();
                                    n = null != e.choices ? Number(x(e.choices, t)) : e.autocomplete ? F(e, t, D, Number) : Number(v.normalizeNumericString(E.default.locale, t))
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
                if (null != S.subCommandPath)
                    for (let e = S.subCommandPath.length - 1; e >= 0; e -= 1) {
                        let {
                            name: t,
                            type: n
                        } = S.subCommandPath[e];
                        w = [{
                            type: n,
                            name: t,
                            options: w
                        }]
                    }
                if (null != S.execute) return p.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: S.id,
                    application_id: S.applicationId,
                    command_type: S.type,
                    location: B === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
                }), S.execute(w, D);
                if (S.inputType === R.ApplicationCommandInputType.BUILT_IN || S.inputType === R.ApplicationCommandInputType.BUILT_IN_TEXT || S.inputType === R.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
                let V = {
                    version: S.version,
                    id: null !== (M = null === (t = S.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== M ? M : S.id,
                    guild_id: S.guildId,
                    name: null !== (O = null === (n = S.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== O ? O : S.name,
                    type: S.type,
                    options: w,
                    application_command: S.rootCommand
                };
                null != P && (V.target_id = P), null != D.autocomplete ? (0, h.performAutocomplete)(S, D, V) : (s.default.clearAll(D.channel.id, W), await Y({
                    applicationId: S.applicationId,
                    data: V,
                    context: D,
                    attachments: k,
                    maxSizeCallback: b,
                    onMessageSuccess: () => {
                        G(y)
                    },
                    commandDisplayName: S.displayName,
                    analytics_location: B === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
                }))
            }
            let G = e => {
                    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                        name: e.name.replaceAll(":", "")
                    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(O.isNotNullish));
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
                                guild: null != i ? C.default.getGuild(i) : null
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
                        attachments: s,
                        maxSizeCallback: d,
                        onMessageSuccess: c,
                        commandDisplayName: p,
                        analytics_location: f
                    } = e, {
                        channel: m,
                        guild: I
                    } = l, A = m.id, E = null == I ? void 0 : I.id, C = D.getCachedApplicationSection(l.channel, i.type, n);
                    if (null == C) return;
                    let N = null === (t = C.application) || void 0 === t ? void 0 : t.bot;
                    if (null == N && null != C.botId) try {
                        await r.getUser(C.botId)
                    } catch {}
                    let M = {
                        ...(0, T.default)({
                            channelId: A,
                            content: "",
                            type: i.type === u.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND,
                            author: null != N ? N : {
                                id: C.id,
                                username: C.name,
                                discriminator: U.NON_USER_BOT_DISCRIMINATOR,
                                avatar: null,
                                bot: !0
                            }
                        }),
                        application: null == C ? void 0 : C.application,
                        interaction: {
                            id: i.id,
                            name: i.name,
                            name_localized: p,
                            type: u.InteractionTypes.APPLICATION_COMMAND,
                            user: (0, T.userRecordToServer)(g.default.getCurrentUser())
                        },
                        interaction_data: i
                    };
                    o.default.receiveMessage(A, M, !0, {
                        applicationId: n
                    });
                    let O = (e, t) => {
                            null == t && null != e && o.default.sendClydeError(A, e), a.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: M.id,
                                channelId: A,
                                reason: t
                            })
                        },
                        S = {
                            applicationId: n,
                            channelId: A,
                            guildId: E,
                            data: i,
                            nonce: M.id,
                            attachments: s,
                            maxSizeCallback: d,
                            analytics_location: f
                        };
                    _.addQueued(S.nonce, {
                        messageId: M.id,
                        onCreate: e => {
                            null != M.interaction && (M.interaction.id = e)
                        },
                        onFailure: (e, t) => O(e, t),
                        data: {
                            interactionType: u.InteractionTypes.APPLICATION_COMMAND,
                            channelId: A
                        }
                    }), null != s ? j(s, S.nonce, E, d).then(e => {
                        e && W(S, c)
                    }) : W(S, c)
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
                let l = (0, M.maxFileSize)(n),
                    a = e => {
                        null == i || i(l, e), _.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, B.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                            maxSize: (0, M.sizeString)(l)
                        }))
                    },
                    {
                        totalSize: o,
                        largestUploadedFileSize: s
                    } = await V(e, !1);
                if (s > Math.max(l, b.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || o > S.MAX_TOTAL_ATTACHMENT_SIZE) return a(s), !1;
                try {
                    await (0, c.stageAttachmentFiles)(e)
                } catch {
                    _.setFailed(t, void 0, B.default.Messages.UPLOADING_FILES_FAILED.format({
                        count: e.length
                    }))
                }({
                    totalSize: o,
                    largestUploadedFileSize: s
                } = await V(e, !0));
                let r = e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE);
                return !r && !(o > S.MAX_TOTAL_ATTACHMENT_SIZE) || (a(s), !1)
            }
        },
        150692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
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
                I = n("782340");

            function T(e) {
                switch (e) {
                    case _.ChannelTextAreaIntegrations.GIF.title:
                    case _.ChannelTextAreaIntegrations.TENOR.title:
                        return I.default.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            let A = [...a(_.ChannelTextAreaIntegrations).values().map(e => ({
                id: e.commandId,
                name: e.command,
                displayName: e.command,
                type: u.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
                applicationId: m.BuiltInSectionId.BUILT_IN,
                get description() {
                    return T(e.title)
                },
                get displayDescription() {
                    return T(e.title)
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
                    async function T() {
                        try {
                            await s.default.closePrivateChannel(a.id, void 0, _)
                        } catch (e) {
                            r.default.sendBotMessage(a.id, I.default.Messages.LEAVE_GROUP_DM_ERROR)
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
                        onConfirm: T,
                        ...e,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }))
                }
            }];
            var E = A
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
                s = n("587974"),
                r = n("315102"),
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
                    onMouseOver: T,
                    onMouseLeave: A,
                    ...E
                } = e, [C, N] = l.useState(!1), g = l.useCallback(() => {
                    N(!0), null == _ || _()
                }, [_]), M = l.useCallback(() => {
                    N(!1), null == I || I()
                }, [I]), O = l.useCallback(() => {
                    N(!0), null == T || T()
                }, [T]), S = l.useCallback(() => {
                    N(!1), null == A || A()
                }, [A]), h = l.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return r.default.getApplicationIconURL({
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
                    ...E,
                    className: o(d.wrapper, f, {
                        [d.selectable]: m,
                        [d.selected]: m && n
                    }),
                    onFocus: g,
                    onBlur: M,
                    onMouseOver: O,
                    onMouseLeave: S,
                    children: (0, i.jsx)(s.default, {
                        className: d.mask,
                        mask: m && (n || C) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: p,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: a,
                                height: p
                            },
                            src: h
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
                s = n("93393"),
                r = n("317041"),
                u = n("262657");
            let d = e => {
                switch (e.id) {
                    case r.BuiltInSectionId.BUILT_IN:
                        return o.default;
                    case r.BuiltInSectionId.FRECENCY:
                        return s.default;
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
                    padding: s,
                    isSelected: r,
                    selectable: c = !1,
                    ...p
                } = e, f = d(t);
                return (0, i.jsx)("div", {
                    className: a(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && r
                    }),
                    style: {
                        width: l,
                        height: o,
                        padding: null != s ? s : 0
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
                    return s
                },
                pxToRem: function() {
                    return r
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var i = n("524768"),
                l = n("991630"),
                a = n("943161"),
                o = n("317041");
            let s = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : l.default;

            function r(e) {
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
                    return T
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                a = n("446674"),
                o = n("913144"),
                s = n("798609"),
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
            var T = new I(o.default, {
                APPLICATION_COMMAND_USED: function(e) {
                    let {
                        command: t
                    } = e;
                    if (t.type !== s.ApplicationCommandType.CHAT) return !1;
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
        118851: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolvePlaintextInlineVoid: function() {
                    return T
                },
                resolveApplicationCommandOption: function() {
                    return A
                }
            }), n("222007");
            var i = n("679653"),
                l = n("980215"),
                a = n("385976"),
                o = n("867805"),
                s = n("401690"),
                r = n("42203"),
                u = n("923959"),
                d = n("26989"),
                c = n("305961"),
                p = n("697218"),
                f = n("25292"),
                m = n("299039"),
                _ = n("149022"),
                I = n("680894");

            function T(e, t, n, p) {
                let {
                    allowUsers: _ = !0,
                    allowRoles: T = !0
                } = null != p ? p : {};
                switch (e[0]) {
                    case "@":
                        return function(e, t, n, i, a) {
                            let [o, s] = e.slice(1).split("#", 2), u = null != t ? c.default.getGuild(t) : null, p = (0, l.getClydeExperimentEnabled)(u);
                            if (a && null == s && null != u) {
                                for (let e of Object.values(c.default.getRoles(u.id)))
                                    if (o === e.name) return {
                                        type: "roleMention",
                                        roleId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            if (i) {
                                let e = null != n ? r.default.getChannel(n) : null;
                                if (null != e) {
                                    if (e.isPrivate()) {
                                        for (let t of e.recipients)
                                            if (E(o, s, t)) return {
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
                                            if (E(o, s, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            };
                                        if (p && E(o, s, I.CLYDE_AI_USER_ID)) return {
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
                        }(e, t, n, _, T);
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
                            let a = s.default.getActiveJoinedThreadsForGuild(t);
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

            function A(e, t, n, i) {
                let l = T(e, t, n, i);
                return null == l ? null : (0, _.voidToOptionValue)(l)
            }

            function E(e, t, n) {
                let i = p.default.getUser(n);
                return null != i && (n === I.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || i.username === e && i.discriminator === (null != t ? t : "0"))
            }
        },
        670902: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                computeThreadIdsSnapshot: function() {
                    return B
                },
                default: function() {
                    return H
                }
            }), n("222007");
            var l = n("917351"),
                a = n.n(l),
                o = n("335710"),
                s = n("446674"),
                r = n("913144"),
                u = n("689275"),
                d = n("610730"),
                c = n("271938"),
                p = n("42203"),
                f = n("660478"),
                m = n("18494"),
                _ = n("449008"),
                I = n("299039"),
                T = n("786742");
            let A = [],
                E = null,
                C = null,
                N = new Set,
                g = o.ThreadSortOrder.LATEST_ACTIVITY,
                M = 0,
                O = [],
                S = !1,
                h = [],
                y = a.chain(A),
                v = a.chain(A),
                D = new Set,
                R = new Set;

            function L(e) {
                var t;
                return null !== (t = f.default.lastMessageId(e)) && void 0 !== t ? t : e
            }

            function P(e) {
                return function(t, n) {
                    if ((0, T.isForumPostPinned)(t)) return -1;
                    if ((0, T.isForumPostPinned)(n)) return 1;
                    if (e === o.ThreadSortOrder.LATEST_ACTIVITY) return I.default.compare(L(n), L(t));
                    else return I.default.compare(n, t)
                }
            }

            function U() {
                O = [], i = null, C = null, N = new Set, g = o.ThreadSortOrder.LATEST_ACTIVITY, M = 0, h = [], y = a.chain(A), v = a.chain(A), R.clear(), D.clear()
            }

            function b() {
                var e;
                let t = m.default.getChannelId();
                if (null == t || !(null === (e = p.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
                x({
                    refreshThreadIds: !0
                })
            }

            function B(e) {
                let t = p.default.getChannel(e);
                return null == t ? [] : Object.values(u.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }).sort(P(g))
            }

            function x(e) {
                var t;
                let n = p.default.getChannel(C);
                if (null == n) return;
                (null == e ? void 0 : e.refreshThreadIds) && (h = Object.values(u.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }), M = 0, S = !0), 0 !== D.size && (h = h.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (h = Array.from(new Set([...h, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (v = a.chain(h).sort(P(o.ThreadSortOrder.LATEST_ACTIVITY)), y = a.chain(h).sort(P(o.ThreadSortOrder.CREATION_DATE)));
                let l = g === o.ThreadSortOrder.LATEST_ACTIVITY ? v : y,
                    s = l.value();
                O = 0 === N.size ? s : s.filter((t = N, function(e) {
                    var n;
                    let i = null === (n = p.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
                    return null != i && 0 !== i.length && i.some(e => t.has(e))
                }));
                let r = O.find(e => (function(e) {
                    let t = d.default.getCount(e);
                    return null === t || 0 === t
                })(e));
                i = null == r ? null : r
            }
            class F extends s.default.Store {
                initialize() {
                    this.waitFor(p.default, u.default, m.default, f.default)
                }
                getNewThreadCount() {
                    return M
                }
                getCanAckThreads() {
                    return S
                }
                getThreadIds(e, t, n) {
                    let i = e !== C,
                        l = !(0, _.areSetsEqual)(n, N),
                        a = t !== g;
                    return C = e, N = n, g = t, i ? x({
                        refreshThreadIds: !0
                    }) : a ? x({
                        sortThreadIds: !0
                    }) : l && x(), O
                }
                getCurrentThreadIds() {
                    return O
                }
                getAndDeleteMostRecentUserCreatedThreadId() {
                    let e = E;
                    return E = null, e
                }
                getFirstNoReplyThreadId() {
                    return i
                }
            }
            F.displayName = "ForumActivePostStore";
            var H = new F(r.default, {
                CONNECTION_OPEN: b,
                OVERLAY_INITIALIZE: b,
                GUILD_CREATE: b,
                CHANNEL_SELECT: b,
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    U()
                },
                THREAD_LIST_SYNC: function(e) {
                    var t;
                    let {
                        guildId: n
                    } = e;
                    if (null == C || n !== (null === (t = p.default.getChannel(C)) || void 0 === t ? void 0 : t.guild_id)) return !1;
                    x({
                        refreshThreadIds: !0
                    })
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t,
                        isNewlyCreated: n
                    } = e;
                    if (null == t.parent_id || t.parent_id !== C || !n) return !1;
                    t.ownerId !== c.default.getId() ? M++ : E = t.id
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    let n = (0, T.isForumPostPinned)(t.id),
                        i = R.has(t.id);
                    if (n && !i) R.add(t.id), x({
                        sortThreadIds: !0
                    });
                    else {
                        if (n || !i) return !1;
                        R.delete(t.id), x({
                            sortThreadIds: !0
                        })
                    }
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.parent_id || t.parent_id !== C) return !1;
                    D.add(t.id), x({
                        sortThreadIds: !0
                    })
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== C) return !1;
                    x({
                        refreshThreadIds: !0
                    })
                },
                CHANNEL_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || t !== C) return !1;
                    S = !1
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
                    return b
                }
            }), n("781738"), n("424973"), n("222007");
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
                I = n("42203"),
                T = n("474643"),
                A = n("377253"),
                E = n("401848"),
                C = n("718517"),
                N = n("568734"),
                g = n("299039"),
                M = n("252862"),
                O = n("300322"),
                S = n("24337"),
                h = n("648564"),
                y = n("49111"),
                v = n("782340");

            function D(e) {
                let t = (0, O.useCanStartPublicThread)(e),
                    n = (0, O.useCanStartPrivateThread)(e);
                return n ? t ? 2 : 3 : 1
            }

            function R(e, t) {
                var n;
                if (3 === t) return !0;
                return null !== (n = e.isPrivate) && void 0 !== n && n
            }

            function L(e, t) {
                var n, i, l, a;
                let o = null == t ? null : A.default.getMessage(e.id, t),
                    s = null !== (l = null == o ? void 0 : null === (i = o.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
                if ("" !== s) return s.length > 40 ? s.substring(0, 40) + "..." : s;
                {
                    let t = m.default.unparse(null !== (a = null == o ? void 0 : o.content) && void 0 !== a ? a : "", e.id, !0),
                        n = (0, S.default)(t.split("\n")[0], !0);
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
                    location: s,
                    onThreadCreated: r,
                    useDefaultThreadName: p,
                    uploadHandler: f
                } = e;
                return a.useCallback(async (e, a, _) => {
                    var A;
                    let E = null == n,
                        C = R(i, l),
                        N = null !== (A = i.name) && void 0 !== A ? A : "";
                    if ("" === N && p) {
                        let e = L(t, n);
                        N = "" !== e ? e : v.default.Messages.THREAD
                    }
                    let O = (0, M.getAutoArchiveDuration)(t),
                        S = I.default.getChannel(g.default.castMessageIdAsChannelId(n)),
                        h = await B(t, () => {
                            let e = null != n ? y.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : y.Endpoints.CHANNEL_THREADS(t.id);
                            return o.default.post({
                                url: e,
                                body: {
                                    name: N,
                                    type: C ? y.ChannelTypes.PRIVATE_THREAD : t.type === y.ChannelTypes.GUILD_ANNOUNCEMENT ? y.ChannelTypes.ANNOUNCEMENT_THREAD : y.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: O,
                                    location: s
                                }
                            })
                        });
                    h !== S && (u.default.clearDraft(t.id, T.DraftType.ThreadSettings), u.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), null == r || r(h), (E || e.length > 0 || null != a && a.length > 0 || null != _ && _.length > 0) && function(e, t, n, i, l) {
                        if (null != l && null != i && i.length > 0) l(e, i, t, n);
                        else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                        else d.default.sendMessage(e.id, m.default.parse(e, t))
                    }(h, e, a, _, f)), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage)
                }, [t, n, i, r, l, s, p, f])
            }

            function U(e, t, n, i, l) {
                return B(e, () => o.default.post({
                    url: y.Endpoints.CHANNEL_THREADS(e.id),
                    body: {
                        name: t,
                        type: n,
                        auto_archive_duration: i,
                        location: l
                    }
                }))
            }

            function b(e) {
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
                    p && (e = m, d = (0, N.addFlag)(d, y.MessageFlags.SUPPRESS_NOTIFICATIONS));
                    let I = (0, M.getAutoArchiveDuration)(t, null),
                        A = y.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                        E = {
                            name: n,
                            auto_archive_duration: I,
                            applied_tags: i,
                            message: {
                                content: e,
                                sticker_ids: a,
                                flags: 0 !== d ? d : void 0
                            }
                        },
                        C = await B(t, () => null != r && r.length > 0 ? s(A, E, r) : o.default.post({
                            url: A,
                            body: E
                        }));
                    return u.default.clearDraft(t.id, T.DraftType.ThreadSettings), u.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        postId: C.id
                    }), null == l || l(C), C
                }, [t, n, l, i, s])
            }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
            async function B(e, t) {
                let n;
                let i = e.isForumLikeChannel();
                try {
                    n = await t(), null == n.body ? r.default.show({
                        title: v.default.Messages.ERROR,
                        body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                    }) : (s.default.dispatch({
                        type: "SLOWMODE_RESET_COOLDOWN",
                        slowmodeType: E.SlowmodeType.CreateThread,
                        channelId: e.id
                    }), s.default.dispatch({
                        type: "THREAD_CREATE_LOCAL",
                        channelId: n.body.id
                    }))
                } catch (t) {
                    var l, a, o, u, d, c;
                    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === y.AbortCodes.TOO_MANY_THREADS) r.default.show({
                        title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                        body: i ? v.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : v.default.Messages.TOO_MANY_THREADS_MESSAGE
                    });
                    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === y.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) r.default.show({
                        title: v.default.Messages.CANNOT_CREATE_THREAD,
                        body: v.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                    });
                    else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === y.AbortCodes.SLOWMODE_RATE_LIMITED) {
                        let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                        n > 0 && s.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: E.SlowmodeType.CreateThread,
                            cooldownMs: n * C.default.Millis.SECOND
                        })
                    } else if (429 === t.status) r.default.show({
                        title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                        body: v.default.Messages.RATE_LIMITED
                    });
                    else if (h.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
                    else {
                        if (h.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                            null == t.body && n(), p.default.addConditionalChangeListener(() => {
                                let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != t) {
                                    let i = I.default.getChannel(t);
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
                    null == n.body && t(), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getChannel(n.body.id);
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
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("926001"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("503420"),
                o = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: l = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
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
                    colorClass: s = "",
                    ...r
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(r),
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
                        className: s
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=31337.f76503dfae48dd5b337a.js.map