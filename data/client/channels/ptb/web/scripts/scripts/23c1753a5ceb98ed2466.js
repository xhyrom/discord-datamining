(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18409"], {
        869586: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BlindID: function() {
                    return r
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var o = n("605250"),
                a = n("446825").Buffer;
            let l = new o.default("BlindID");
            class r {
                async blind(t) {
                    let e = await this.key,
                        n = new BigUint64Array([BigInt(t)]),
                        o = await crypto.subtle.sign("HMAC", e, n.buffer);
                    return r.truncate(o).toString()
                }
                static truncate(t) {
                    let e = new Uint8Array(t);
                    return e.length < 8 ? (l.error("Unexpected byte length ".concat(e.length)), BigInt(0)) : BigInt(e[0]) | BigInt(e[1]) << BigInt(8) | BigInt(e[2]) << BigInt(16) | BigInt(e[3]) << BigInt(24) | BigInt(e[4]) << BigInt(32) | BigInt(e[5]) << BigInt(40) | BigInt(e[6]) << BigInt(48) | BigInt(e[7]) << BigInt(56)
                }
                constructor(t) {
                    let e = a.from(t, "hex");
                    this.key = crypto.subtle.importKey("raw", e, {
                        name: "HMAC",
                        hash: "SHA-512"
                    }, !1, ["sign"])
                }
            }
        },
        890747: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uploadRtcLogFiles: function() {
                    return d
                }
            }), n("222007");
            var o = n("811022"),
                a = n("872717"),
                l = n("448993"),
                r = n("42887"),
                i = n("254490"),
                c = n("49671"),
                s = n("49111");
            let u = new o.default("uploadRtcLogFiles");
            async function d(t, e) {
                let n;
                if (null == c.default.fileManager.readLogFiles) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
                let o = [];
                try {
                    o = (o = await c.default.fileManager.readLogFiles(t)).map(t => (0, i.transformNativeFile)(t, "application/octet-stream"))
                } catch (t) {
                    throw u.error("uploadDebugFiles: read error '".concat(t, "'")), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.READ)
                }
                if (0 === o.length) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.NO_FILE);
                try {
                    let t = {
                        extraInfo: e,
                        mediaEngineState: r.default.getState()
                    };
                    n = await a.default.post({
                        url: s.Endpoints.DEBUG_LOGS(s.DebugLogCategory.RTC),
                        attachments: [...o.map(t => ({
                            name: t.name,
                            file: t,
                            filename: t.name
                        })), {
                            name: "media_engine_state.json",
                            filename: "media_engine_state.json",
                            file: new Blob([JSON.stringify(t, void 0, 2)])
                        }]
                    })
                } catch (t) {
                    if (429 === t.status) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.PROGRESS);
                    throw u.error("Debug log upload error: status: ".concat(t.status, ", message: ").concat(t.message)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.UPLOAD)
                }
                let d = o.length + 1;
                if ("success_count" in n.body && n.body.success_count !== d) throw u.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(d)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
                if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw u.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL)
            }
        },
        147746: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                uploadDebugLogFiles: function() {
                    return h
                },
                getBlindIds: function() {
                    return E
                },
                uploadCallscopeLogs: function() {
                    return L
                },
                uploadCallscopeLogFiles: function() {
                    return b
                }
            }), n("222007");
            var o = n("872717"),
                a = n("869586"),
                l = n("49671"),
                r = n("890747"),
                i = n("254490"),
                c = n("821316"),
                s = n("605250"),
                u = n("836403"),
                d = n("825287"),
                g = n("929331"),
                p = n("49111");
            let f = new s.default("DebugUploadManager");
            async function h(t, e) {
                await w(t), await (0, r.uploadRtcLogFiles)(3670016, e)
            }
            class m {
                static getTrimmedFilename(t) {
                    let e = /^channel\.\d+\.(.+)$/.exec(t);
                    return null == e || e.length < 2 || null == e[1] ? "unknown" : e[1]
                }
                static getChannelId(t) {
                    let e = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(t);
                    return null == e || e.length < 2 || null == e[1] ? "unknown" : e[1]
                }
            }
            async function E(t, e, n) {
                let o = new a.BlindID(n),
                    l = await o.blind(t),
                    r = await o.blind(e);
                return {
                    blindChannelId: l,
                    blindUserId: r
                }
            }
            async function L(t, e, n, o) {
                var a;
                if (!__OVERLAY__) {
                    if ((null === l.default || void 0 === l.default ? void 0 : null === (a = l.default.fileManager) || void 0 === a ? void 0 : a.getCallscopeLogFiles) == null) {
                        f.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                        return
                    }
                    if (!("crypto" in window)) {
                        f.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                        return
                    }
                    try {
                        let {
                            blindChannelId: a,
                            blindUserId: r
                        } = await E(t, e, n), i = "channel blind(".concat(t, "): ").concat(a, ", user blind(").concat(e, "): ").concat(r);
                        f.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(o, ", ").concat(i));
                        let c = await l.default.fileManager.getCallscopeLogFiles(a);
                        await b(r, c)
                    } catch (t) {
                        f.error("uploadCallscopeLogs: Error uploading logs ".concat(null == t ? void 0 : t.text), t)
                    }
                }
            }
            async function b(t, e) {
                try {
                    if (0 === e.length) {
                        f.error("uploadCallscopeLogFiles: No files found.");
                        return
                    }
                    for (let n of e.map(t => i.transformNativeFile(t, "application/octet-stream"))) {
                        f.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                        let e = m.getChannelId(n.name);
                        try {
                            let a = await o.default.post({
                                    url: p.Endpoints.CALLSCOPE_LOGS(e, t, m.getTrimmedFilename(n.name)),
                                    headers: {
                                        "Content-Type": "application/octet-stream"
                                    },
                                    body: n
                                }),
                                l = a.status >= 200 && a.status <= 299;
                            !l && f.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(a.status, ", ").concat(a.text))
                        } catch (t) {
                            f.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == t ? void 0 : t.text), t)
                        }
                    }
                } catch (t) {
                    f.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == t ? void 0 : t.text), t)
                }
            }
            async function w(t) {
                try {
                    let e = c.stringify(),
                        n = "",
                        a = await (0, u.getPushNotificationLogs)().then(t => (0, u.serializePushNotificationLogs)(t)),
                        l = e.length + n.length + a.length;
                    if (l > 9437184) {
                        let t = 1 - 9437184 / l;
                        e = e.slice(e.length - Math.floor(e.length * t)), n = n.slice(n.length - Math.floor(n.length * t)), a = a.slice(a.length - Math.floor(a.length * t))
                    }
                    let r = null,
                        i = "\n    ".concat((0, g.default)(r), "\n\n    ").concat(JSON.stringify((0, d.default)(), void 0, 2), "\n    Logs:\n    ").concat(e, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(a, "\n    ");
                    c.clear();
                    let s = p.Endpoints.DEBUG_LOG(t, "discord_app_logs");
                    await o.default.post({
                        url: s,
                        body: i,
                        retries: 3,
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        oldFormErrors: !0
                    })
                } catch (t) {
                    f.error("uploadAppLogFiles: upload app log files error ".concat(t.message))
                }
            }
        },
        836403: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                serializePushNotificationLogs: function() {
                    return r
                },
                getPushNotificationLogs: function() {
                    return i
                }
            });
            var o = n("95410"),
                a = n("271938"),
                l = n("49111");

            function r(t) {
                if (0 === t.length) return "No logs";
                let e = o.default.get(l.DEVICE_TOKEN),
                    n = o.default.get(l.DEVICE_VOIP_TOKEN),
                    a = t.map(t => {
                        let e = "Displayed";
                        return t.silent && (e = "Silent"), "".concat(new Date(t.receivedTimestamp).toISOString(), " [").concat(t.type, "] ").concat(e, " - ").concat(t.title, " - ").concat(t.content, " ")
                    }).join("\n");
                return "".concat(null != e ? "Device Token: ".concat(e) : "", "\n").concat(null != n ? "Device Voip Token: ".concat(n) : "", "\n\n").concat(a)
            }
            async function i() {
                let t = a.default.getId(),
                    e = [];
                return e
            }
        },
        825287: function(t, e, n) {
            "use strict";

            function o() {
                return {
                    logsUploaded: new Date().toISOString(),
                    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
                    buildNumber: "249302",
                    versionHash: "31b02a0a76f901dda2a9cc9e99b49c2f4bf56f64"
                }
            }
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            })
        },
        929331: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("781738"), n("424973"), n("222007");
            var o = n("917351"),
                a = n.n(o),
                l = n("102053"),
                r = n("487269");

            function i(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.logGroups.map(n => {
                    var o, l;
                    let {
                        index: i,
                        timestamp: s,
                        logs: u,
                        nativeLogs: d,
                        serverTrace: g
                    } = n, p = 0 === i ? null !== (l = null === (o = a.find(u, t => t.log.indexOf("Logger loaded") >= 0)) || void 0 === o ? void 0 : o.timestamp) && void 0 !== l ? l : t : s, f = function(t, e) {
                        var n, o;
                        let l = (function(t) {
                                let e = [];
                                for (let n = 0; n < t.length; n++) {
                                    let o = t[n],
                                        a = t[n + 1];
                                    null != a && a.log === o.log.replace("Start ", "Finish ") ? (a.log = a.log.replace("Finish ", ""), e.push(a), n++) : e.push(o)
                                }
                                return e
                            })(t).map(t => {
                                let n = null == t.timestamp ? "" : ((t.timestamp - e) / 1e3).toFixed(3),
                                    o = null == t.delta ? "" : String(Math.round(t.delta));
                                return {
                                    totalTime: n,
                                    deltaTime: o,
                                    log: "".concat(t.emoji.length > 0 ? "".concat(t.emoji, " ") : "").concat(t.prefix).concat(t.log, "\n")
                                }
                            }),
                            r = null !== (n = a.max(l.map(t => t.totalTime.length))) && void 0 !== n ? n : 0,
                            i = null !== (o = a.max(l.map(t => t.deltaTime.length))) && void 0 !== o ? o : 0;
                        return l.map(t => {
                            let {
                                totalTime: e,
                                deltaTime: n,
                                log: o
                            } = t;
                            return "".concat(a.padStart(e, r), " ").concat(a.padStart(n, i), " ").concat(o)
                        }).join("")
                    }(function(t, e, n) {
                        t = t.slice();
                        let o = new Set(e.map(c)),
                            a = "",
                            l = [];
                        return e.forEach(e => {
                            let r = c(e),
                                i = 0,
                                s = n || !e.autoGenerated,
                                u = r.startsWith("Start ") && !r.includes("RUN_JS_BUNDLE") && o.has(r.replace("Start ", "Finish ")),
                                d = r.startsWith("Finish ") && !r.includes("RUN_JS_BUNDLE") && o.has(r.replace("Finish ", "Start "));
                            if (d) {
                                a = a.substring(2);
                                let t = l.pop();
                                null != t && (i = e.timestamp - t.timestamp, s = s || i > 5 && ! function(t) {
                                    return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(e => t.includes(e))
                                }(r), t.shouldKeep = t.shouldKeep || s)
                            }
                            let g = {
                                emoji: "☕",
                                timestamp: e.timestamp,
                                delta: i > 0 ? i : void 0,
                                prefix: a,
                                log: r,
                                shouldKeep: s
                            };
                            (function(t, e) {
                                let n = 0;
                                for (; n < t.length; n++) {
                                    let {
                                        timestamp: o
                                    } = t[n];
                                    if (null != o && o > e.timestamp) break
                                }
                                t.splice(n, 0, e)
                            })(t, g), u && (a += "| ", l.push(g))
                        }), t.filter(t => !1 !== t.shouldKeep)
                    }(u, d, e), p), h = "Trace #".concat(i + 1, " started ").concat((0, r.getTimestampString)(s), "\n").concat(f);
                    return null != g && (h += "\n Server trace for trace #".concat(i + 1).concat(g)), h
                }).join("\n\n")
            }

            function c(t) {
                let e = null == t.tag ? t.label : "".concat(t.label, " ").concat(t.tag);
                return e.includes("_START") && (e = "Start " + e.replace("_START", "")), e.includes("_END") && (e = "Finish " + e.replace("_END", "")), e
            }
        }
    }
]);
//# sourceMappingURL=23c1753a5ceb98ed2466.js.map