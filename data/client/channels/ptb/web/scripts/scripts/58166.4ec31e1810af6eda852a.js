(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58166"], {
        630086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                i = {
                    setSection(e) {
                        a.default.dispatch({
                            type: "FRIENDS_SET_SECTION",
                            section: e
                        })
                    },
                    setInitialSection(e) {
                        a.default.dispatch({
                            type: "FRIENDS_SET_INITIAL_SECTION",
                            section: e
                        })
                    }
                }
        },
        13136: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("686130"), n("781738");
            let a = /[<>:"/\\|?*\.]/g;
            var i = function(e) {
                return e.replaceAll(a, "").trim().replaceAll(" ", "_")
            }
        },
        881095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("374014"),
                i = n("373469"),
                l = n("271938"),
                d = n("824563"),
                u = n("945956"),
                s = n("568307"),
                r = n("800762"),
                o = n("299039"),
                c = n("80028"),
                f = n("49111"),
                g = n("782340");

            function p(e) {
                let {
                    sourceName: t,
                    sourceApplicationId: n
                } = function(e) {
                    var t, n;
                    if (null != e) {
                        let {
                            ownerId: t
                        } = a.decodeStreamKey(e);
                        if (t !== l.default.getId()) {
                            let e = d.default.getActivities(t).find(e => e.type === f.ActivityTypes.PLAYING);
                            return {
                                sourceName: null == e ? void 0 : e.name,
                                sourceApplicationId: null == e ? void 0 : e.application_id
                            }
                        }
                    }
                    let u = i.default.getStreamerActiveStreamMetadata(),
                        r = null == u ? void 0 : u.pid,
                        o = null != u ? null != r ? s.default.getGameForPID(r) : null : s.default.getVisibleGame();
                    return {
                        sourceName: null !== (t = null == u ? void 0 : u.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
                        sourceApplicationId: null !== (n = null == u ? void 0 : u.id) && void 0 !== n ? n : null == o ? void 0 : o.id
                    }
                }(e), p = u.default.getChannelId(), _ = [l.default.getId()];
                return null != p && (_ = Object.keys(r.default.getVoiceStatesForChannel(p))), {
                    id: o.default.fromTimestamp(Date.now()),
                    version: c.CURRENT_CLIP_METADATA_VERSION,
                    applicationName: null != t ? t : g.default.Messages.CLIPS_UNKNOWN_SOURCE,
                    applicationId: n,
                    users: _,
                    clipMethod: "manual",
                    length: 0,
                    thumbnail: ""
                }
            }
        },
        997942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateClipMetadata: function() {
                    return d
                }
            }), n("222007"), n("808653");
            var a = n("80028");
            let i = [e => {
                    let t = {
                        ...e,
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    };
                    return delete t.gameName, t
                }, e => {
                    let t = {
                        ...e,
                        version: 2,
                        name: e.name.startsWith("Clip - ") ? void 0 : e.name
                    };
                    return t
                }, e => {
                    let t = {
                        ...e,
                        version: 3,
                        name: "" === e.name ? void 0 : e.name
                    };
                    return t
                }],
                l = null;
            async function d(e) {
                var t;
                let d = (await n.el("990599").then(n.t.bind(n, "990599", 23))).default;
                let u = (t = d, null != l ? l : l = t.object({
                    id: t.string().required(),
                    version: t.number().positive().integer().min(0).max(a.CURRENT_CLIP_METADATA_VERSION).optional(),
                    name: t.string().when("version", {
                        is: t.number().less(3),
                        then: t.string().allow("")
                    }),
                    gameName: t.string().when("version", {
                        is: t.number().greater(0).required(),
                        then: t.forbidden(),
                        otherwise: t.required()
                    }),
                    applicationName: t.string().when("version", {
                        is: t.number().greater(0).required(),
                        then: t.required(),
                        otherwise: t.forbidden()
                    }),
                    applicationId: t.string(),
                    users: t.array().items(t.string()).required(),
                    filepath: t.string().required(),
                    length: t.number().required(),
                    thumbnail: t.string().required().allow(""),
                    editMetadata: t.object().keys({
                        start: t.number(),
                        end: t.number(),
                        applicationAudio: t.boolean(),
                        voiceAudio: t.boolean()
                    }),
                    clipMethod: t.string().allow("auto", "manual").required()
                }).required());
                try {
                    d.assert(e, u);
                    return null == e.version && (e.version = 0), i.slice(e.version).reduce((e, t) => t(e), e)
                } catch (e) {
                    return null
                }
            }
        },
        803725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateAllowVoiceRecording: function() {
                    return M
                },
                updateClipsEnabled: function() {
                    return L
                },
                updateDecoupledClipsEnabled: function() {
                    return b
                },
                updateRemindersEnabled: function() {
                    return R
                },
                updateClipsStorageLocation: function() {
                    return O
                },
                updateClipsQuality: function() {
                    return P
                },
                updateClipsLength: function() {
                    return w
                },
                updateViewerClipsEnabled: function() {
                    return U
                },
                saveClip: function() {
                    return F
                },
                updateClipMetadata: function() {
                    return V
                },
                clearClipsSession: function() {
                    return x
                },
                clearNewClipIds: function() {
                    return H
                },
                loadClipsDirectory: function() {
                    return q
                },
                deleteClip: function() {
                    return W
                },
                exportClip: function() {
                    return B
                }
            }), n("222007"), n("424973");
            var a = n("750028"),
                i = n("913144"),
                l = n("49671"),
                d = n("44642"),
                u = n("374014"),
                s = n("584687"),
                r = n("103979"),
                o = n("872173"),
                c = n("268491"),
                f = n("373469"),
                g = n("271938"),
                p = n("42887"),
                _ = n("568307"),
                m = n("205817"),
                E = n("599110"),
                h = n("773336"),
                S = n("709681"),
                v = n("386045"),
                C = n("13136"),
                I = n("881095"),
                A = n("997942"),
                T = n("310238"),
                y = n("99366"),
                N = n("80028"),
                D = n("49111");

            function M(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                o.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = a.BoolValue.create({
                        value: t
                    })
                }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), E.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function L(e) {
                let {
                    clipsEnabled: t,
                    guildId: n,
                    trackAnalytics: a = !1
                } = e;
                await i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsEnabled: t,
                        ...!t && {
                            decoupledClipsEnabled: !1
                        }
                    }
                }), a && E.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function b(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        ...t && {
                            clipsEnabled: !0
                        },
                        decoupledClipsEnabled: t
                    }
                }), n && E.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function R(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        remindersEnabled: e
                    }
                })
            }

            function O(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function P(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function w(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function U(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: e
                    }
                })
            }

            function G(e, t) {
                var n, a, i, l, u, s, r, o, f, g;
                let p = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let a = t.framesEncodedByEncoder[e],
                        i = (0, d.parseEncoder)(e),
                        l = null !== (n = p.get(i)) && void 0 !== n ? n : 0;
                    p.set(i, l + a)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (a = p.get(d.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
                    frames_encoded_nvidia_direct3d: null !== (i = p.get(d.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
                    frames_encoded_openh264: null !== (l = p.get(d.Encoders.OPENH264)) && void 0 !== l ? l : 0,
                    frames_encoded_videotoolbox: null !== (u = p.get(d.Encoders.VIDEOTOOLBOX)) && void 0 !== u ? u : 0,
                    frames_encoded_amd_direct3d: null !== (s = p.get(d.Encoders.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
                    frames_encoded_intel: null !== (r = p.get(d.Encoders.INTEL)) && void 0 !== r ? r : 0,
                    frames_encoded_intel_direct3d: null !== (o = p.get(d.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
                    frames_encoded_uncategorized: null !== (f = p.get(d.Encoders.UNCATEGORIZED)) && void 0 !== f ? f : 0,
                    frames_encoded_unknown: null !== (g = p.get(d.Encoders.UNKNOWN)) && void 0 !== g ? g : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: v.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: c.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                }
            }
            async function k(e) {
                let t = v.default.getSettings(),
                    n = t.storageLocation,
                    a = (0, I.default)(e),
                    d = "".concat((0, C.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
                    s = l.default.fileManager.join(n, d),
                    r = p.default.getMediaEngine(),
                    o = JSON.stringify(a),
                    c = null != e ? (0, u.decodeStreamKey)(e).ownerId : void 0,
                    _ = function(e) {
                        var t;
                        let n, a, i;
                        if (null != e) {
                            n = null != e ? m.default.getRTCConnection(e) : null;
                            let t = (0, u.decodeStreamKey)(e);
                            a = t.guildId, i = t.channelId
                        } else {
                            let e = g.default.getId(),
                                t = f.default.getActiveStreamForUser(e, null);
                            n = null != t ? m.default.getRTCConnection((0, u.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
                        }
                        let l = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                        return {
                            rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                            media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                            parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                            guild_id: a,
                            channel_id: i,
                            application_id: null == l ? void 0 : l.id,
                            application_name: null == l ? void 0 : l.name
                        }
                    }(e);
                null != e && i.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                    clip: {
                        ...a,
                        filepath: s
                    }
                });
                try {
                    var h;
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: n
                    } = await (null != c ? r.saveClipForUser(c, s, o) : r.saveClip(s, o)), i = G(_, n);
                    i.clip_save_time_ms = n.clipSaveTimeMs, i.clip_size_bytes = n.clipSizeBytes, null != n.viewerDecodeFps && (i.decode_fps_during_clip = n.viewerDecodeFps, i.encode_fps_during_clip = n.viewerEncodeFps, i.target_fps = null), E.default.track(D.AnalyticEvents.CLIP_SAVED, i);
                    let d = await (null != l.default.clips.getClipProtocolURLFromPath ? (0, y.createThumbnailFromVideo)(l.default.clips.getClipProtocolURLFromPath(s), 0) : (0, y.createThumbnail)(t));
                    return a.thumbnail = d, a.length = e, N.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (h = null == d ? void 0 : d.length) && void 0 !== h ? h : 0, " bytes thumbnail.")), await r.updateClipMetadata(s, JSON.stringify(a)), {
                        ...a,
                        filepath: s
                    }
                } catch (n) {
                    if (null != e && i.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                            clipId: a.id
                        }), !("errorMessage" in n)) throw E.default.track(D.AnalyticEvents.CLIP_SAVE_FAILURE, _), n;
                    let t = G(_, n);
                    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, E.default.track(D.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
                }
            }
            async function F(e) {
                var t;
                let {
                    enableDecoupledGameClipping: n
                } = s.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableViewerClipping: a
                } = r.default.getCurrentConfig({
                    location: "SaveClip"
                }, {
                    autoTrackExposure: !1
                });
                if (v.default.getIsAtMaxSaveClipOperations()) return;
                let l = v.default.getSettings().clipsEnabled && null != f.default.getCurrentUserActiveStream(),
                    d = n && v.default.getSettings().decoupledClipsEnabled && (null === (t = _.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && p.default.hasClipsSource(),
                    o = null != e && null != f.default.getActiveStreamForStreamKey(e) && a;
                if (!l && !d && !o) return;
                let c = f.default.getCurrentUserActiveStream(),
                    g = null != c ? (0, u.encodeStreamKey)(c) : void 0;
                i.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START"
                });
                let m = (0, S.playSound)("clip_save", .5),
                    E = performance.now();
                try {
                    let t = await k(null != e ? e : g);
                    i.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: t
                    })
                } catch (e) {
                    N.ClipsLogger.error("Clip Failed to Save", e), null == m || m.stop(), (0, S.playSound)("clip_error", .5), i.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                N.ClipsLogger.info("".concat(v.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - E), "ms"))
            }
            async function V(e, t) {
                let n = v.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let a = {
                        ...n,
                        ...t
                    },
                    l = await (0, A.validateClipMetadata)(a);
                null != l && (await p.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), E.default.track(D.AnalyticEvents.CLIP_EDITED, {
                    clip_id: a.id
                }), i.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: a
                }))
            }

            function x() {
                i.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function H() {
                i.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function q(e) {
                var t;
                if (!(0, h.isDesktop)() || (null === (t = l.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await l.default.clips.loadClipsDirectory(e),
                    a = [];
                for (let e of n) {
                    let t = await (0, A.validateClipMetadata)({
                        ...e.metadata,
                        filepath: e.filepath
                    });
                    null != t && a.push(t)
                }
                i.default.dispatch({
                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                    clips: a
                })
            }
            async function W(e) {
                var t;
                (0, h.isDesktop)() && (null === (t = l.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await l.default.clips.deleteClip(e), i.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function B(e, t) {
                let n = p.default.getMediaEngine(),
                    a = await n.exportClip(e.filepath, t);
                return (0, T.default)(a)
            }
        },
        310238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var a = n("627445"),
                i = n.n(a),
                l = n("469520"),
                d = n.n(l);
            async function u(e) {
                let t;
                let n = d.createFile(!1),
                    a = new Promise(e => {
                        n.onReady = e
                    }),
                    l = await e.arrayBuffer();
                for (let e of (l.fileStart = 0, n.appendBuffer(l), n.flush(), await a, i(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let u = e.slice(0, t, e.type),
                    s = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([u, new Uint8Array([0, 0, 0, 24]), s], {
                    type: e.type
                })
            }
        },
        99366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createThumbnail: function() {
                    return i
                },
                createThumbnailFromVideo: function() {
                    return l
                }
            }), n("70102");
            var a = n("80028");
            async function i(e) {
                if (null == e) return "";
                let t = new Blob([e], {
                        type: "image/jpeg"
                    }),
                    n = await new Promise(e => {
                        let n = new FileReader;
                        n.onloadend = () => {
                            e(n.result)
                        }, n.readAsDataURL(t)
                    });
                if ("string" != typeof n) throw Error("Thumbnail creation failed");
                return n
            }
            async function l(e, t) {
                let n = document.createElement("video");
                n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
                let i = a.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
                    l = a.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
                    d = Math.min(i, l),
                    u = n.videoWidth * d,
                    s = n.videoHeight * d,
                    r = document.createElement("canvas");
                r.width = u, r.height = s;
                let o = r.getContext("2d");
                if (null == o) throw Error("Could not create canvas context");
                return o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, u, s), r.toDataURL("image/jpeg", .9)
            }
        },
        370492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateDevToolsSettings: function() {
                    return l
                },
                toggleDisplayDevTools: function() {
                    return d
                },
                clearAnalyticsLog: function() {
                    return u
                }
            });
            var a = n("913144"),
                i = n("584369");

            function l(e) {
                a.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function d() {
                l({
                    displayTools: !i.default.displayTools
                })
            }

            function u() {
                a.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        584369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                i = n("95410"),
                l = n("913144"),
                d = n("9503");
            let u = 360,
                s = {
                    devToolsEnabled: !1,
                    sidebarWidth: u,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                };
            class r extends a.default.DeviceSettingsStore {
                initialize(e) {
                    s = null != e ? e : s, l.default.actionLogger.persist = this.devToolsEnabled
                }
                getUserAgnosticState() {
                    return s
                }
                get devToolsEnabled() {
                    return s.devToolsEnabled
                }
                get sidebarWidth() {
                    return this.displayTools ? s.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    var e;
                    return null !== (e = s.lastOpenTabId) && void 0 !== e ? e : null
                }
                get displayTools() {
                    return this.devToolsEnabled && s.displayTools
                }
                get showDevWidget() {
                    return this.devToolsEnabled && s.showDevWidget
                }
                get devWidgetPosition() {
                    return s.devWidgetPosition
                }
            }
            r.displayName = "DevToolsSettingsStore", r.persistKey = "DevToolsSettingsStore";
            var o = new r(l.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    (s.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (l.default.actionLogger.persist = e.settings.devToolsEnabled, i.default.set(d.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), s = {
                        ...s,
                        ...e.settings
                    })
                }
            })
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return S
                },
                useMostRecentForumMessage: function() {
                    return v
                },
                preloadForumThreads: function() {
                    return I
                }
            }), n("222007");
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                d = n("872717"),
                u = n("913144"),
                s = n("42203"),
                r = n("670902"),
                o = n("349778"),
                c = n("430475"),
                f = n("324261"),
                g = n("49111");
            class p {
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !i.isEmpty(this._set)
                }
                next() {
                    return Object.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let _ = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), _.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                    constructor() {
                        this.requested = new p(() => new Set)
                    }
                },
                m = null;

            function E(e, t) {
                let n = (0, o.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function h(e, t) {
                return !e && null == t
            }

            function S(e) {
                var t, n;
                let {
                    loaded: a,
                    firstMessage: i
                } = (0, l.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), d = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e.parent_id));
                if (null != d && (t = a, n = i, !t && null == n)) A(d, e.id);
                return {
                    loaded: a,
                    firstMessage: i
                }
            }

            function v(e, t) {
                let {
                    loaded: n,
                    message: a
                } = (0, l.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && E(t.guild_id, t.id) && A(e, t.id), {
                    loaded: n,
                    mostRecentMessage: a
                }
            }

            function C(e, t) {
                let n = !1;
                t.forEach(t => {
                    var a, i;
                    let {
                        loaded: l,
                        firstMessage: d
                    } = c.default.getMessage(t);
                    if (a = l, i = d, !a && null == i || E(e.guild_id, t)) _.request(e.id, t), n = !0
                }), n && null == m && (m = setTimeout(T, 0))
            }

            function I(e) {
                C(e, (0, r.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function A(e, t) {
                if (_.hasRequested(e.id, t)) return;
                let n = (0, r.computeThreadIdsSnapshot)(e.id),
                    a = n.findIndex(e => e === t),
                    i = n.slice(a, a + 5).filter(t => !_.hasRequested(e.id, t));
                C(e, i)
            }
            async function T() {
                try {
                    for (; _.hasNext();) await y(_.next())
                } finally {
                    m = null
                }
            }
            async function y(e) {
                let t = _.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let a = null === (n = s.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == a) return;
                    let {
                        body: {
                            threads: i
                        }
                    } = await d.default.post({
                        url: g.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    u.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: a,
                        threads: i
                    })
                } catch (e) {} finally {
                    _.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("692038"),
                d = n("42203"),
                u = n("697218"),
                s = n("449008"),
                r = n("299039");
            let o = {};

            function c(e) {
                var t;
                let n = d.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let a = o[n.id];
                return r.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, l.createMessageRecord)(t);
                return o[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function g(e) {
                return o[e]
            }

            function p(e) {
                var t;
                return null === (t = o[e]) || void 0 === t ? void 0 : t.message
            }

            function _(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(s.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class m extends a.default.Store {
                initialize() {
                    this.waitFor(d.default, u.default)
                }
                getMessageState(e) {
                    return !(e in o) && (o[e] = {
                        loaded: !1,
                        message: null
                    }), o[e]
                }
            }
            m.displayName = "ForumPostRecentMessageStore";
            var E = new m(i.default, {
                CONNECTION_OPEN: function() {
                    o = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return o[e]
                            }(e),
                            a = p(e);
                        null != n && null != a && (o[e] = {
                            ...n,
                            message: (0, l.updateMessageRecord)(a, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = p(e);
                        return (null == n ? void 0 : n.id) === t && (delete o[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) f(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: _,
                LOAD_THREADS_SUCCESS: _
            })
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                i = n.n(a),
                l = n("267363"),
                d = n("863636"),
                u = n("401690"),
                s = n("923959"),
                r = n("660478"),
                o = n("599110"),
                c = n("49111"),
                f = n("133335");

            function g(e, t, n) {
                let a = i.flatMap(e, e => {
                    let t = s.default.getSelectableChannelIds(e),
                        n = s.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        i = u.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: r.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: r.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: d.default.ackIdForGuild(e)
                    })
                }), o.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(a, n)
            }
        },
        658536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("913144"),
                i = n("689988"),
                l = n("26989"),
                d = n("697218"),
                u = n("509");
            let s = null,
                r = () => {
                    let e = l.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, l.getGuildIdFromCommunicationDisabledUserKey)(t),
                            a = (0, l.getUserIdFromCommunicationDisabledUserKey)(t),
                            i = e[t];
                        !(0, u.isCommunicationDisabled)(i) && o(n, a)
                    })
                },
                o = (e, t) => {
                    var n, i, s, r, o, c;
                    let f = l.default.getMember(e, t),
                        g = d.default.getUser(t);
                    if (null == f || null == g || (0, u.isMemberCommunicationDisabled)(f)) return;
                    let p = {
                        ...f,
                        guildId: e,
                        nick: null !== (n = f.nick) && void 0 !== n ? n : g.username,
                        avatar: null !== (i = f.avatar) && void 0 !== i ? i : void 0,
                        premiumSince: null !== (s = f.premiumSince) && void 0 !== s ? s : void 0,
                        isPending: null !== (r = f.isPending) && void 0 !== r && r,
                        user: {
                            ...g,
                            email: null !== (o = g.email) && void 0 !== o ? o : void 0,
                            phone: null !== (c = g.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    a.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...p
                    })
                };
            class c extends i.default {
                _initialize() {
                    s = setInterval(() => r(), 1e4)
                }
                _terminate() {
                    clearInterval(s)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var f = new c
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return p
                },
                updateReminderDueAt: function() {
                    return _
                },
                toggleMessageReminders: function() {
                    return m
                },
                completeMessageReminders: function() {
                    return E
                },
                cleanupMessageReminders: function() {
                    return h
                },
                fetchAndUpdateSavedMessages: function() {
                    return C
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("679653"),
                d = n("42203"),
                u = n("305961"),
                s = n("27618"),
                r = n("697218"),
                o = n("599110"),
                c = n("520899"),
                f = n("988864"),
                g = n("49111");

            function p(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), v([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = d.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = u.default.getGuild(t.guild_id),
                            a = "",
                            i = (0, l.computeChannelName)(t, r.default, s.default, !0);
                        if (t.isPrivate()) a = i;
                        else if (t.isThread()) {
                            let e = d.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, l.computeChannelName)(e, r.default, s.default, !0);
                            a = "".concat(n, " > ").concat(i)
                        } else a = i;
                        let o = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: a,
                            messageSummary: o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function _(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let n = c.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && v([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function m(e, t) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), i.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function E(e) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let t = c.default.getMessageReminders();
                v([], t.filter(t => t.messageId === e))
            }

            function h() {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && v([], e.filter(e => e.complete))
            }

            function S(e) {
                o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), i.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function v(e, t) {
                (0 !== e.length || 0 !== t.length) && a.default.post({
                    url: g.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(f.savedMessageToServer),
                        removed: t.map(f.savedMessageToServer)
                    }
                }).then(e => {
                    S(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }

            function C() {
                return c.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: g.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(f.savedMessageToClient);
                    S(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_message_todos_staff_only",
                label: "Message TODO list",
                defaultConfig: {
                    showReminders: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show message TODOs CTA",
                    config: {
                        showReminders: !0
                    }
                }]
            });
            var l = i
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("446674"),
                i = n("913144"),
                l = n("718517");
            let d = [],
                u = new Set,
                s = 0;
            class r extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * l.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return d
                }
                isMessageReminder(e) {
                    let t = d.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return d.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - s < 1 * l.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return u.has(e)
                }
                getState() {
                    return {
                        messages: d
                    }
                }
            }
            r.displayName = "MessageRemindersStore";
            var o = new r(i.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    s = new Date().getTime(), d = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && u.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && u.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = d.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    d[a] = {
                        ...d[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    u.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return l
                },
                savedMessageToClient: function() {
                    return d
                },
                savedMessageHasMetadata: function() {
                    return u
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return s
                }
            });
            var a = n("718517"),
                i = n("782340");

            function l(e) {
                var t;
                return {
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    saved_at: e.savedAt.toISOString(),
                    author_summary: e.authorSummary,
                    channel_summary: e.channelSummary,
                    message_summary: e.messageSummary,
                    guild_id: e.guildId,
                    author_id: e.authorId,
                    notes: e.notes,
                    due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
                }
            }

            function d(e) {
                return {
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    savedAt: new Date(e.saved_at),
                    authorSummary: e.author_summary,
                    channelSummary: e.channel_summary,
                    messageSummary: e.message_summary,
                    guildId: 0 === e.guild_id ? void 0 : e.guild_id,
                    authorId: 0 === e.author_id ? void 0 : e.author_id,
                    notes: e.notes,
                    dueAt: null != e.due_at ? new Date(e.due_at) : void 0
                }
            }

            function u(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let s = [{
                duration: a.default.Millis.HOUR,
                getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * a.default.Millis.HOUR,
                getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * a.default.Millis.HOUR,
                getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: a.default.Millis.DAY,
                getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: a.default.Millis.WEEK,
                getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        341329: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return J
                }
            }), n("222007");
            var i = n("803182"),
                l = n("811022"),
                d = n("95410"),
                u = n("913144"),
                s = n("404118"),
                r = n("819689"),
                o = n("115718"),
                c = n("689988"),
                f = n("408062"),
                g = n("619443"),
                p = n("582713"),
                _ = n("233069"),
                m = n("982108"),
                E = n("42203"),
                h = n("305961"),
                S = n("660478"),
                v = n("18494"),
                C = n("162771"),
                I = n("718517"),
                A = n("519841"),
                T = n("787336"),
                y = n("49111"),
                N = n("724210"),
                D = n("782340");
            let M = new l.default("MessageManager");

            function L(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    forceFetch: l,
                    isPreload: u,
                    jumpType: s,
                    skipLocalFetch: c,
                    logFailures: p
                } = e;
                if (null == n) {
                    p && M.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, N.isStaticChannelRoute)(n)) {
                    p && M.log("Skipping fetch because channelId is a static route");
                    return
                }
                let _ = E.default.getChannel(n);
                if ((null == _ ? void 0 : _.type) === y.ChannelTypes.GUILD_STORE || (null == _ ? void 0 : _.type) != null && y.ChannelTypesSets.GUILD_THREADS_ONLY.has(_.type)) {
                    p && M.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let m = f.default.getOrCreate(n);
                A.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && m.some(T.messageHasExpiredAttachmentUrl) && (M.log("Found expired attachment link, clearing messages"), f.default.clear(n), m = f.default.getOrCreate(n)), null != m.jumpTargetId && null == i && (m = m.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), f.default.commit(m)), null != m.focusTargetId && null == i && (m = m.mutate({
                    focusTargetId: null
                }), f.default.commit(m));
                let v = l;
                if (!u || g.default.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != i ? v = !0 : p && M.log("Skipping fetch because no other conditions matched") : null == t || null != h.default.getGuild(t) ? v = !0 : p && M.log("Skipping fetch we are connected and have loaded messages") : v = !0, v) {
                    if (f.default.commit(m.mutate({
                            loadingMore: !0
                        })), null != i) r.default.jumpToMessage({
                        channelId: n,
                        messageId: i,
                        flash: !0,
                        isPreload: u,
                        skipLocalFetch: c,
                        jumpType: s
                    });
                    else if ((null == _ ? void 0 : _.isThread()) && function(e) {
                            if (S.default.hasOpenedThread(e)) return !1;
                            if (null == a) {
                                var t;
                                a = null !== (t = d.default.get(R, {})) && void 0 !== t ? t : {}
                            }
                            if (e in a) return !1;
                            a[e] = Date.now();
                            let n = Date.now() - b;
                            for (let e in a) a[e] < n && delete a[e];
                            return d.default.set(R, a), !0
                        }(n)) M.log("Jumping to start of thread ".concat(_.id)), r.default.fetchMessages({
                        channelId: n,
                        limit: y.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: u,
                        skipLocalFetch: c
                    });
                    else if ((null == _ ? void 0 : _.isThread()) && S.default.hasTrackedUnread(_.id) && !m.ready) {
                        let e = S.default.getTrackedAckMessageId(_.id);
                        M.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)), r.default.fetchMessages({
                            channelId: n,
                            limit: y.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: u,
                            skipLocalFetch: c
                        })
                    } else r.default.fetchMessages({
                        channelId: n,
                        limit: y.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: u,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let b = 90 * I.default.Millis.DAY,
                R = "viewedThreadIds";

            function O() {
                let e = v.default.getChannelId();
                if (null != e) {
                    let n = E.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, i.matchPath)(location.pathname, {
                            path: y.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        L({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), G(n.getGuildId(), n.id)
                    }
                }
            }

            function P() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = v.default.getChannelId();
                if (null != a) {
                    let i = E.default.getChannel(a);
                    null != i ? ((0, _.isTextChannel)(i.type) ? L({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && M.log("Skipping fetch because the selected channel is not a text channel"), G(i.getGuildId(), i.id)) : n && M.log("Skipping fetch because channel is null")
                } else n && M.log("Skipping fetch because there is no selected channel")
            }

            function w(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: i
                } = e;
                L({
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: i
                }), G(t, n)
            }

            function U(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                L({
                    guildId: t,
                    channelId: n
                })
            }

            function G(e, t) {
                let n = m.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let a = m.default.getCurrentSidebarMessageId(t);
                L({
                    guildId: e,
                    channelId: n,
                    messageId: a
                })
            }

            function k() {
                let e = v.default.getChannelId(),
                    t = C.default.getGuildId();
                if (null == t || null == e) return;
                let n = m.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== p.SidebarType.VIEW_CHANNEL && G(t, e)
            }

            function F(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: a
                } = e;
                a === y.CURRENT_APP_CONTEXT && (L({
                    guildId: t,
                    channelId: n
                }), G(t, n))
            }

            function V(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, a = t.guild_id;
                null != a && v.default.getChannelId(a) === t.id && L({
                    guildId: a,
                    channelId: t.id,
                    messageId: n
                })
            }

            function x(e) {
                let {
                    channelId: t
                } = e;
                r.default.fetchMessages({
                    channelId: t,
                    limit: y.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function H(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === y.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && s.default.show({
                        title: D.default.Messages.RATE_LIMITED,
                        body: D.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let q = {};

            function W(e) {
                var t;
                let {
                    channelId: n,
                    jump: a,
                    isStale: i,
                    isPreview: l = !1
                } = e;
                if (l) return;
                let d = null !== (t = q[n]) && void 0 !== t ? t : 0;
                if (Date.now() - d < 10 * I.default.Millis.SECOND) return;
                q[n] = Date.now();
                let u = v.default.getChannelId(),
                    s = m.default.getCurrentSidebarChannelId(u),
                    o = n === u || n === s;
                i && g.default.isConnected() && o && r.default.fetchMessages({
                    channelId: n,
                    limit: y.MAX_MESSAGES_PER_CHANNEL,
                    jump: a
                })
            }

            function B(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && u.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function j(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = v.default.getChannelId();
                if (null == n) return !1;
                r.default.fetchNewLocalMessages(n, y.MAX_MESSAGES_PER_CHANNEL)
            }
            class K extends c.default {
                _initialize() {
                    u.default.subscribe("CONNECTION_OPEN", O)
                }
                _terminate() {
                    u.default.unsubscribe("CONNECTION_OPEN", O)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = L, this.loadSelectedChannelIfNecessary = P, this.stores = new Map().set(m.default, k), this.actions = {
                        APP_STATE_UPDATE: j,
                        OVERLAY_INITIALIZE: O,
                        CHANNEL_SELECT: w,
                        VOICE_CHANNEL_SELECT: U,
                        THREAD_CREATE: V,
                        THREAD_LIST_SYNC: () => P(),
                        CHANNEL_CREATE: V,
                        CHANNEL_PRELOAD: F,
                        THREAD_CREATE_LOCAL: x,
                        GUILD_CREATE: () => P(),
                        MESSAGE_END_EDIT: H,
                        LOAD_MESSAGES_SUCCESS: W,
                        UPLOAD_FAIL: B,
                        CHANNEL_DELETE: () => P(),
                        THREAD_DELETE: () => P()
                    }
                }
            }
            var J = new K
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return u
                },
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return s
                }
            });
            var a = n("862205"),
                i = n("49111");
            let l = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-11_voice_activity_notification_user",
                    label: "Voice Activity Notifications for User",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Voice Activity Notifications are enabled for user",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 2,
                        label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
                        config: {
                            enabled: !1
                        }
                    }]
                }),
                d = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-11_voice_activity_notification_guild",
                    label: "General Voice Channel Notifications for Guild",
                    defaultConfig: {
                        voiceChannelActivityNotifsEnabled: !1
                    },
                    treatments: [{
                        id: 2,
                        label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                        config: {
                            voiceChannelActivityNotifsEnabled: !0
                        }
                    }]
                });

            function u(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = d.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: a
                } = l.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE || !n,
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.type) === i.ChannelTypes.GUILD_VOICE && n && a
            }

            function s(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = d.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return n
            }
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    className: d,
                    foreground: u,
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(s),
                    className: d,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: u,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=58166.4ec31e1810af6eda852a.js.map