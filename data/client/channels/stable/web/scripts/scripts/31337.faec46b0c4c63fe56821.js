(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31337"], {
        926001: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n("670598");
            n.es(l, t)
        },
        841362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                numberParts: function() {
                    return l
                }
            });
            let l = {
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
                    return f
                },
                default: function() {
                    return l
                }
            }), n("808653"), n("222007"), n("70102");
            var l, i = n("811022"),
                o = n("994440"),
                a = n("282928"),
                r = n("142852"),
                s = n("402752"),
                u = n("572868"),
                c = n("49111"),
                d = n("894488"),
                p = n("782340");
            let m = new i.default("CloudUploaderBase.tsx");
            async function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    l = e.map(e => new Promise((l, i) => {
                        switch (e.status) {
                            case a.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case a.CloudUploadStatus.COMPLETED:
                                l("complete");
                                break;
                            case a.CloudUploadStatus.ERROR:
                                t && e.error !== c.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : i(Error("File failed to upload"));
                                break;
                            case a.CloudUploadStatus.CANCELED:
                                i(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            l("complete")
                        }), e.on("error", () => {
                            i(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == n || n(e, t)
                        })
                    }));
                await Promise.all(l)
            }
            l = class extends u.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let n = (0, r.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (m.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: c.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: c.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: d.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === c.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : p.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        n = this.files.some(e => e.isVideo),
                        l = this._fileSize();
                    m.log("setUploadingTextForUI - total content: ".concat(l, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: l,
                        currentSize: l,
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
                    m.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    m.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === a.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, o.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === a.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === a.CloudUploadStatus.COMPLETED).length
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
                    return l
                }
            }), n("222007"), n("70102");
            var l, i = n("44170"),
                o = n("917351"),
                a = n.n(o),
                r = n("605250"),
                s = n("402752"),
                u = n("894488");
            let c = new r.default("UploaderBase.tsx");
            l = class extends i.EventEmitter {
                _addAttachmentsToPayload(e, t, n) {
                    let l = {
                            ...e
                        },
                        i = [...a.get(l, t, []), ...n];
                    return a.set(l, t, i)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    c.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
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
                    var l;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, n) => {
                        let l = Date.now(),
                            i = (0, s.calculateProgress)(e, t),
                            o = Math.floor((e - this._loaded) / ((l - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var a;
                            null === (a = this._file.items) || void 0 === a || a.forEach(e => {
                                e.item.progress = n[e.id]
                            })
                        }
                        this._lastUpdate = l, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: i,
                            rate: o
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
                            body: l
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, c.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, l, n), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), c.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = a.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (l = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== l && l
                }
            }
        },
        118200: function(e, t, n) {
            "use strict";
            let l, i, o;
            n.r(t), n.d(t, {
                filterEmpty: function() {
                    return u
                },
                getString: function() {
                    return c
                },
                getOptionalString: function() {
                    return d
                },
                normalizeNumericString: function() {
                    return p
                },
                getInitialValuesFromInteractionOptions: function() {
                    return m
                }
            }), n("781738"), n("222007"), n("627445");
            var a = n("798609"),
                r = n("841362"),
                s = n("655518");

            function u(e) {
                return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
            }

            function c(e, t) {
                let n = e[t],
                    l = "";
                for (let e of n) switch (e.type) {
                    case "text":
                    case "textMention":
                        l += e.text;
                        break;
                    case "userMention":
                        l += "<@".concat(e.userId, ">");
                        break;
                    case "channelMention":
                        l += "<#".concat(e.channelId, ">");
                        break;
                    case "roleMention":
                        l += "<@&".concat(e.roleId, ">");
                        break;
                    case "emoji":
                        l += e.surrogate;
                        break;
                    case "customEmoji":
                        l += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
                }
                return l
            }

            function d(e, t) {
                return null == e[t] ? null : c(e, t)
            }

            function p(e, t) {
                if (e !== o) {
                    var n;
                    o = e;
                    let {
                        group: t,
                        decimal: a
                    } = null !== (n = r.numberParts[e]) && void 0 !== n ? n : r.numberParts["en-US"];
                    l = RegExp(s.default.escape(t), "g"), i = RegExp(s.default.escape(a), "g")
                }
                return t.replace(l, "").replace(i, ".")
            }

            function m(e, t) {
                let n = {};
                for (let i of t) {
                    var l;
                    let t = null === (l = e.options) || void 0 === l ? void 0 : l.find(e => e.name === i.name);
                    if (i.type !== a.ApplicationCommandOptionType.ATTACHMENT)(null == t || !t.autocomplete) && (n[i.name] = i)
                }
                return n
            }
            n("317041")
        },
        916565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                },
                retryCommandMessage: function() {
                    return z
                }
            }), n("424973"), n("222007"), n("881410"), n("686130"), n("781738");
            var l = n("627445"),
                i = n.n(l),
                o = n("913144"),
                a = n("819689"),
                r = n("81594"),
                s = n("798609"),
                u = n("979911"),
                c = n("981112"),
                d = n("716241"),
                p = n("118851"),
                m = n("385976"),
                f = n("274800"),
                h = n("752598"),
                g = n("815297"),
                _ = n("263024"),
                C = n("915639"),
                v = n("305961"),
                A = n("585722"),
                E = n("697218"),
                I = n("254490"),
                T = n("449008"),
                y = n("980134"),
                M = n("507217"),
                O = n("246598"),
                N = n("118200"),
                S = n("240249"),
                x = n("524768"),
                L = n("389153"),
                U = n("317041"),
                b = n("49111"),
                P = n("894488"),
                R = n("782340");
            let w = (e, t) => {
                    var n;
                    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
                },
                D = function(e, t, n) {
                    var l, i;
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                        a = e.name === (null === (l = n.autocomplete) || void 0 === l ? void 0 : l.name);
                    if (a) return n.autocomplete.query;
                    if ("" === t) return null;
                    let r = O.default.getAutocompleteLastChoices(n.channel.id, e.name);
                    return null != r ? null !== (i = w(r, t)) && void 0 !== i ? i : o(t) : o(t)
                },
                k = e => {
                    let t = e.toLowerCase() === U.TRUE_OPTION_NAME.toLowerCase(),
                        n = e.toLowerCase() === U.FALSE_OPTION_NAME.toLowerCase();
                    return t || n ? t : null
                };
            async function F(e) {
                var t, n, l, a, u, c, m, f, h, g, v, E, I, T, y;
                let {
                    command: O,
                    optionValues: S,
                    context: U,
                    commandTargetId: P,
                    maxSizeCallback: R,
                    commandOrigin: F = x.CommandOrigin.CHAT
                } = e;
                null == U.autocomplete && o.default.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: U,
                    command: O
                }), await _.default.unarchiveThreadIfNecessary(U.channel.id);
                let z = [],
                    H = [],
                    G = (0, L.getCommandAttachmentDraftType)(F);
                if (null != O.options)
                    for (let e of O.options) {
                        if (e.type === s.ApplicationCommandOptionType.SUB_COMMAND || e.type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in S)) continue;
                        let t = (null === (l = U.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
                            n = null;
                        if (e.type === s.ApplicationCommandOptionType.STRING) {
                            let l = null !== (u = null === (a = N.getOptionalString(S, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== u ? u : "";
                            n = null != e.choices ? w(e.choices, l) : e.autocomplete ? D(e, l, U) : l, i(null != U.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && z.push({
                                type: e.type,
                                name: e.name,
                                value: n,
                                focused: t
                            });
                            continue
                        }
                        if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) {
                            if (null != U.autocomplete) continue;
                            let l = A.default.getUpload(U.channel.id, e.name, G);
                            if (null == l) continue;
                            let i = A.default.getUploads(U.channel.id, G).findIndex(e => l.id === e.id);
                            H.push(l), n = i, z.push({
                                type: e.type,
                                name: e.name,
                                value: n,
                                focused: t
                            });
                            continue
                        }
                        let o = N.filterEmpty(S[e.name]);
                        if (i(null != U.autocomplete || 1 === o.length, 'Option "'.concat(e.name, '" expects a single option type')), null == o[0] && !t) continue;
                        let r = null !== (c = o[0]) && void 0 !== c ? c : {
                            type: "text",
                            text: ""
                        };
                        switch (e.type) {
                            case s.ApplicationCommandOptionType.CHANNEL:
                                if ("channelMention" === r.type) n = r.channelId;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (m = U.guild) || void 0 === m ? void 0 : m.id, U.channel.id);
                                        i((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.ROLE:
                                if ("roleMention" === r.type) n = r.roleId;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (f = U.guild) || void 0 === f ? void 0 : f.id, U.channel.id, {
                                            allowUsers: !1
                                        });
                                        i((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
                                    }
                                } else "textMention" === r.type && "@everyone" === r.text && (n = null === (h = U.guild) || void 0 === h ? void 0 : h.id);
                                break;
                            case s.ApplicationCommandOptionType.USER:
                                if ("userMention" === r.type) n = r.userId;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (g = U.guild) || void 0 === g ? void 0 : g.id, U.channel.id, {
                                            allowRoles: !1
                                        });
                                        i((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.MENTIONABLE:
                                if ("userMention" === r.type) n = r.userId;
                                else if ("roleMention" === r.type) n = r.roleId;
                                else if ("textMention" === r.type && "@everyone" === r.text) n = null === (v = U.guild) || void 0 === v ? void 0 : v.id;
                                else if ("text" === r.type) {
                                    if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                                    else {
                                        let e = (0, p.resolveApplicationCommandOption)(r.text, null === (E = U.guild) || void 0 === E ? void 0 : E.id, U.channel.id);
                                        (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (I = U.guild) || void 0 === I ? void 0 : I.id : i(!1, "Failed to resolve ".concat(r.text))
                                    }
                                }
                                break;
                            case s.ApplicationCommandOptionType.BOOLEAN:
                                "text" === r.type && (n = k(r.text.trim()));
                                break;
                            case s.ApplicationCommandOptionType.INTEGER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    n = null != e.choices ? Number(w(e.choices, t)) : e.autocomplete ? D(e, t, U, Number) : Number(N.normalizeNumericString(C.default.locale, t))
                                }
                                break;
                            case s.ApplicationCommandOptionType.NUMBER:
                                if ("text" === r.type) {
                                    let t = r.text.trim();
                                    n = null != e.choices ? Number(w(e.choices, t)) : e.autocomplete ? D(e, t, U, Number) : Number(N.normalizeNumericString(C.default.locale, t))
                                }
                                break;
                            default:
                                i(!1, "Unsupported option type: ".concat(e.type));
                                continue
                        }
                        i(null != U.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && z.push({
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
                        z = [{
                            type: n,
                            name: t,
                            options: z
                        }]
                    }
                if (null != O.execute) return d.default.trackWithMetadata(b.AnalyticEvents.APPLICATION_COMMAND_USED, {
                    command_id: O.id,
                    application_id: O.applicationId,
                    command_type: O.type,
                    location: F === x.CommandOrigin.APPLICATION_LAUNCHER ? x.ApplicationCommandTriggerLocations.APP_LAUNCHER : x.ApplicationCommandTriggerLocations.SLASH_UI
                }), O.execute(z, U);
                if (O.inputType === x.ApplicationCommandInputType.BUILT_IN || O.inputType === x.ApplicationCommandInputType.BUILT_IN_TEXT || O.inputType === x.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
                let V = {
                    version: O.version,
                    id: null !== (T = null === (t = O.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== T ? T : O.id,
                    guild_id: O.guildId,
                    name: null !== (y = null === (n = O.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== y ? y : O.name,
                    type: O.type,
                    options: z,
                    application_command: O.rootCommand
                };
                null != P && (V.target_id = P), null != U.autocomplete ? (0, M.performAutocomplete)(O, U, V) : (r.default.clearAll(U.channel.id, G), B({
                    applicationId: O.applicationId,
                    data: V,
                    context: U,
                    attachments: H,
                    maxSizeCallback: R,
                    onMessageSuccess: () => {
                        j(S)
                    },
                    commandDisplayName: O.displayName,
                    analytics_location: F === x.CommandOrigin.APPLICATION_LAUNCHER ? x.ApplicationCommandTriggerLocations.APP_LAUNCHER : x.ApplicationCommandTriggerLocations.SLASH_UI
                }))
            }
            let j = e => {
                    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                        name: e.name.replaceAll(":", "")
                    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(T.isNotNullish));
                    t.length > 0 && o.default.dispatch({
                        type: "EMOJI_TRACK_USAGE",
                        emojiUsed: t
                    })
                },
                z = (e, t, n) => {
                    if (e.isCommandType()) {
                        let l = t.guild_id;
                        null != e.interactionData && B({
                            applicationId: n,
                            data: e.interactionData,
                            context: {
                                channel: t,
                                guild: null != l ? v.default.getGuild(l) : null
                            }
                        })
                    }
                },
                B = e => {
                    let {
                        applicationId: t,
                        data: n,
                        context: l,
                        attachments: i,
                        maxSizeCallback: r,
                        onMessageSuccess: u,
                        commandDisplayName: c,
                        analytics_location: d
                    } = e, {
                        channel: p,
                        guild: m
                    } = l, h = p.id, _ = null == m ? void 0 : m.id, [C, v] = function(e, t, n) {
                        let l = S.getCachedApplicationSection(e.channel, n, t);
                        if (null != l) {
                            var i, a, r;
                            let e = null !== (a = null === (i = l.application) || void 0 === i ? void 0 : i.bot) && void 0 !== a ? a : {
                                id: l.id,
                                username: l.name,
                                discriminator: "0000",
                                avatar: null,
                                bot: !0
                            };
                            return o.default.dispatch({
                                type: "STORE_APPLICATION_INTERACTION_FAKE_USER",
                                user: e
                            }), [e, null !== (r = l.application) && void 0 !== r ? r : null]
                        }
                        return [null, null]
                    }(l, t, n.type), A = n.type === s.ApplicationCommandType.CHAT ? b.MessageTypes.CHAT_INPUT_COMMAND : b.MessageTypes.CONTEXT_MENU_COMMAND, I = (0, g.default)({
                        channelId: h,
                        content: "",
                        tts: !1,
                        type: A,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: null != C ? C : void 0
                    });
                    I.application = null != v ? v : void 0, I.interaction = {
                        id: n.id,
                        name: n.name,
                        name_localized: c,
                        type: s.InteractionTypes.APPLICATION_COMMAND,
                        user: (0, g.userRecordToServer)(E.default.getCurrentUser())
                    }, I.interaction_data = n;
                    let T = {
                            applicationId: t,
                            channelId: h,
                            guildId: _,
                            data: n,
                            nonce: I.id,
                            attachments: i,
                            maxSizeCallback: r,
                            analytics_location: d
                        },
                        y = (e, t) => {
                            null == t && null != e && a.default.sendClydeError(h, e), o.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: I.id,
                                channelId: h,
                                reason: t
                            })
                        };
                    a.default.receiveMessage(h, I, !0, {
                        applicationId: t
                    }), f.addQueued(T.nonce, {
                        messageId: I.id,
                        onCreate: e => {
                            null != I.interaction && (I.interaction.id = e)
                        },
                        onFailure: (e, t) => y(e, t),
                        data: {
                            interactionType: s.InteractionTypes.APPLICATION_COMMAND,
                            channelId: h
                        }
                    }), null != i ? V(i, T.nonce, _, r).then(e => {
                        e && H(T, u)
                    }) : H(T, u)
                };

            function H(e, t) {
                u.default.enqueue({
                    type: u.MessageDataType.COMMAND,
                    message: e
                }, n => {
                    var l;
                    (0, h.handleInteractionResponse)(e.nonce, e.channelId, null !== (l = e.guildId) && void 0 !== l ? l : null, n), n.ok && null != t && t()
                })
            }
            async function G(e, t) {
                let n = 0,
                    l = 0;
                for (let o of e) {
                    var i;
                    let e = t ? null !== (i = o.currentSize) && void 0 !== i ? i : 0 : await o.getSize();
                    e > l && (l = e), n += e
                }
                return {
                    totalSize: n,
                    largestUploadedFileSize: l
                }
            }
            async function V(e, t, n, l) {
                let i = (0, I.maxFileSize)(n),
                    o = e => {
                        null == l || l(i, e), f.setFailed(t, b.AbortCodes.ENTITY_TOO_LARGE, R.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                            maxSize: (0, I.sizeString)(i)
                        }))
                    },
                    {
                        totalSize: a,
                        largestUploadedFileSize: r
                    } = await G(e, !1);
                if (r > Math.max(i, P.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > y.MAX_TOTAL_ATTACHMENT_SIZE) return o(r), !1;
                try {
                    await (0, c.stageAttachmentFiles)(e)
                } catch {
                    f.setFailed(t, void 0, R.default.Messages.UPLOADING_FILES_FAILED.format({
                        count: e.length
                    }))
                }({
                    totalSize: a,
                    largestUploadedFileSize: r
                } = await G(e, !0));
                let s = e.some(e => e.error === b.AbortCodes.ENTITY_TOO_LARGE);
                return !s && !(a > y.MAX_TOTAL_ATTACHMENT_SIZE) || (o(r), !1)
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                o = n("414456"),
                a = n.n(o),
                r = n("587974"),
                s = n("315102"),
                u = n("524768"),
                c = n("616674"),
                d = n("363577");

            function p(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: o,
                    height: p,
                    className: m,
                    selectable: f = !1,
                    onFocus: h,
                    onBlur: g,
                    onMouseOver: _,
                    onMouseLeave: C,
                    ...v
                } = e, [A, E] = i.useState(!1), I = i.useCallback(() => {
                    E(!0), null == h || h()
                }, [h]), T = i.useCallback(() => {
                    E(!1), null == g || g()
                }, [g]), y = i.useCallback(() => {
                    E(!0), null == _ || _()
                }, [_]), M = i.useCallback(() => {
                    E(!1), null == C || C()
                }, [C]), O = i.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return s.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: o
                        })
                    }
                    return d
                }, [t, o]);
                return (0, l.jsx)("div", {
                    ...v,
                    className: a(c.wrapper, m, {
                        [c.selectable]: f,
                        [c.selected]: f && n
                    }),
                    onFocus: I,
                    onBlur: T,
                    onMouseOver: y,
                    onMouseLeave: M,
                    children: (0, l.jsx)(r.default, {
                        className: c.mask,
                        mask: f && (n || A) ? r.MaskIDs.SQUIRCLE : r.MaskIDs.AVATAR_DEFAULT,
                        width: o,
                        height: p,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: o,
                                height: p
                            },
                            src: O
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                o = n.n(i),
                a = n("83910"),
                r = n("93393"),
                s = n("317041"),
                u = n("749296");
            let c = e => {
                switch (e.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return a.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return r.default;
                    default:
                        return
                }
            };

            function d(e) {
                let {
                    section: t,
                    className: n,
                    width: i,
                    height: a,
                    padding: r,
                    isSelected: s,
                    selectable: d = !1,
                    ...p
                } = e, m = c(t);
                return (0, l.jsx)("div", {
                    className: o(u.wrapper, n, {
                        [u.selectable]: d,
                        [u.selected]: d && s
                    }),
                    style: {
                        width: i,
                        height: a,
                        padding: null != r ? r : 0
                    },
                    children: null != m ? (0, l.jsx)(m, {
                        className: u.icon,
                        width: i,
                        height: a,
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
            var l = n("524768"),
                i = n("991630"),
                o = n("943161"),
                a = n("317041");
            let r = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? o.default : i.default;

            function s(e) {
                return "".concat(e / 16, "rem")
            }

            function u(e, t) {
                let n = t,
                    l = !1,
                    i = t.indexOf(":");
                if (i >= 0) {
                    let e = t.lastIndexOf(" ", i);
                    e >= 0 ? (t = t.substring(0, e), l = !0) : t = t.substring(0, i)
                } else t = t.substring(0, t.length);
                let o = t.split(" ", a.MAX_SUBCOMMAND_LEVEL + 1);
                return o.length > a.MAX_SUBCOMMAND_LEVEL && (l = !0, o.pop()), t = o.join(" "), (n.length > t.length || t.endsWith(" ")) && (l = !0, t = t.trimEnd()), {
                    text: t,
                    parts: o,
                    hasSpaceTerminator: l
                }
            }
        },
        118851: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolvePlaintextInlineVoid: function() {
                    return g
                },
                resolveApplicationCommandOption: function() {
                    return _
                }
            }), n("222007");
            var l = n("679653"),
                i = n("980215"),
                o = n("385976"),
                a = n("867805"),
                r = n("401690"),
                s = n("42203"),
                u = n("923959"),
                c = n("26989"),
                d = n("305961"),
                p = n("697218"),
                m = n("25292"),
                f = n("149022"),
                h = n("680894");

            function g(e, t, n, p) {
                let {
                    allowUsers: f = !0,
                    allowRoles: g = !0
                } = null != p ? p : {};
                switch (e[0]) {
                    case "@":
                        return function(e, t, n, l, o) {
                            let [a, r] = e.slice(1).split("#", 2), u = null != t ? d.default.getGuild(t) : null, p = (0, i.getClydeExperimentEnabled)(u);
                            if (o && null == r && null != u) {
                                for (let e of Object.values(u.roles))
                                    if (a === e.name) return {
                                        type: "roleMention",
                                        roleId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            if (l) {
                                let e = null != n ? s.default.getChannel(n) : null;
                                if (null != e) {
                                    if (e.isPrivate()) {
                                        for (let t of e.recipients)
                                            if (C(a, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            }
                                    } else {
                                        let e = c.default.getMembers(t);
                                        for (let {
                                                userId: t
                                            }
                                            of e)
                                            if (C(a, r, t)) return {
                                                type: "userMention",
                                                userId: t,
                                                children: [{
                                                    text: ""
                                                }]
                                            };
                                        if (p && C(a, r, h.CLYDE_AI_USER_ID)) return {
                                            type: "userMention",
                                            userId: h.CLYDE_AI_USER_ID,
                                            children: [{
                                                text: ""
                                            }]
                                        }
                                    }
                                }
                            }
                            return null
                        }(e, t, n, f, g);
                    case ":":
                        return function(e, t) {
                            let n = a.default.EMOJI_NAME_RE.exec(e);
                            if (null == n) return null;
                            let l = n[1],
                                i = o.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                            if (null != i && l in i) {
                                let e = i[l];
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
                            n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, l.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
                            let i = u.default.getTextChannelNameDisambiguations(t);
                            for (let e of Object.keys(i))
                                if (i[e].name === n) return {
                                    type: "channelMention",
                                    channelId: e,
                                    children: [{
                                        text: ""
                                    }]
                                };
                            for (let e of m.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
                                if (e === u.GUILD_SELECTABLE_CHANNELS_KEY) continue;
                                let l = u.default.getChannels(t)[e];
                                for (let {
                                        channel: e
                                    }
                                    of l)
                                    if (e.name === n) return {
                                        type: "channelMention",
                                        channelId: e.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            }
                            let o = r.default.getActiveJoinedThreadsForGuild(t);
                            for (let e of Object.keys(o))
                                for (let t of Object.keys(o[e])) {
                                    let {
                                        channel: l
                                    } = o[e][t];
                                    if (l.name === n) return {
                                        type: "channelMention",
                                        channelId: l.id,
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

            function _(e, t, n, l) {
                let i = g(e, t, n, l);
                return null == i ? null : (0, f.voidToOptionValue)(i)
            }

            function C(e, t, n) {
                let l = p.default.getUser(n);
                return null != l && (n === h.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || l.username === e && l.discriminator === (null != t ? t : "0"))
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("926001"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: o,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: o,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, o.SlashBoxIcon, void 0, {
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
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("503420"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: i = "currentColor",
                        foreground: o,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: o,
                                fill: i,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, o.ClockIcon, void 0, {
                    size: 20
                })
        },
        670598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
//# sourceMappingURL=31337.faec46b0c4c63fe56821.js.map