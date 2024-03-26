(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7040"], {
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
                    return E
                }
            });
            var a = n("161454"),
                i = n("374014"),
                l = n("373469"),
                r = n("271938"),
                s = n("824563"),
                u = n("945956"),
                d = n("800762"),
                o = n("299039"),
                c = n("80028"),
                _ = n("49111"),
                f = n("782340");

            function E(e) {
                let {
                    sourceName: t,
                    sourceApplicationId: n
                } = function(e) {
                    var t, n;
                    if (null != e) {
                        let {
                            ownerId: t
                        } = i.decodeStreamKey(e);
                        if (t !== r.default.getId()) {
                            let e = s.default.getActivities(t).find(e => e.type === _.ActivityTypes.PLAYING);
                            return {
                                sourceName: null == e ? void 0 : e.name,
                                sourceApplicationId: null == e ? void 0 : e.application_id
                            }
                        }
                    }
                    let u = l.default.getStreamerActiveStreamMetadata(),
                        d = null == u ? void 0 : u.pid,
                        o = null != u ? null != d ? a.default.getGameForPID(d) : null : a.default.getVisibleGame();
                    return {
                        sourceName: null !== (t = null == u ? void 0 : u.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
                        sourceApplicationId: null !== (n = null == u ? void 0 : u.id) && void 0 !== n ? n : null == o ? void 0 : o.id
                    }
                }(e), E = u.default.getChannelId(), g = [r.default.getId()];
                return null != E && (g = Object.keys(d.default.getVoiceStatesForChannel(E))), {
                    id: o.default.fromTimestamp(Date.now()),
                    version: c.CURRENT_CLIP_METADATA_VERSION,
                    applicationName: null != t ? t : f.default.Messages.CLIPS_UNKNOWN_SOURCE,
                    applicationId: n,
                    users: g,
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
                    return r
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
            async function r(e) {
                var t;
                let r = (await n.el("990599").then(n.t.bind(n, "990599", 23))).default;
                let s = (t = r, null != l ? l : l = t.object({
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
                    r.assert(e, s);
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
                    return b
                },
                updateDecoupledClipsEnabled: function() {
                    return U
                },
                updateRemindersEnabled: function() {
                    return P
                },
                updateClipsStorageLocation: function() {
                    return w
                },
                updateClipsQuality: function() {
                    return F
                },
                updateClipsLength: function() {
                    return G
                },
                updateViewerClipsEnabled: function() {
                    return k
                },
                saveClip: function() {
                    return H
                },
                dismissSaveClipAnimation: function() {
                    return W
                },
                updateClipMetadata: function() {
                    return K
                },
                clearClipsSession: function() {
                    return B
                },
                clearNewClipIds: function() {
                    return Y
                },
                loadClipsDirectory: function() {
                    return q
                },
                deleteClip: function() {
                    return j
                },
                exportClip: function() {
                    return J
                },
                dismissClipsUserEducation: function() {
                    return z
                }
            }), n("222007"), n("424973");
            var a = n("773364"),
                i = n("784063"),
                l = n("750028"),
                r = n("913144"),
                s = n("49671"),
                u = n("44642"),
                d = n("161454"),
                o = n("374014"),
                c = n("584687"),
                _ = n("103979"),
                f = n("872173"),
                E = n("268491"),
                g = n("373469"),
                p = n("271938"),
                S = n("42887"),
                m = n("205817"),
                A = n("555035"),
                h = n("599110"),
                C = n("773336"),
                T = n("709681"),
                I = n("386045"),
                v = n("13136"),
                N = n("881095"),
                y = n("997942"),
                R = n("310238"),
                O = n("430481"),
                D = n("80028"),
                L = n("49111");

            function M(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                f.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = l.BoolValue.create({
                        value: t
                    })
                }, f.UserSettingsDelay.INFREQUENT_USER_ACTION), h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function b(e) {
                let {
                    clipsEnabled: t,
                    guildId: n,
                    trackAnalytics: a = !1
                } = e;
                await r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsEnabled: t,
                        ...!t && {
                            decoupledClipsEnabled: !1
                        }
                    }
                }), a && h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function U(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        ...t && {
                            clipsEnabled: !0
                        },
                        decoupledClipsEnabled: t
                    }
                }), n && h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function P(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        remindersEnabled: e
                    }
                })
            }

            function w(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function F(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function G(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function k(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: t
                    }
                }), n && h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    viewer_clips_enabled: t
                })
            }

            function V(e, t) {
                var n, a, i, l, r, s, d, o, c, _;
                let f = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let a = t.framesEncodedByEncoder[e],
                        i = (0, u.parseEncoder)(e),
                        l = null !== (n = f.get(i)) && void 0 !== n ? n : 0;
                    f.set(i, l + a)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (a = f.get(u.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
                    frames_encoded_nvidia_direct3d: null !== (i = f.get(u.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
                    frames_encoded_openh264: null !== (l = f.get(u.Encoders.OPENH264)) && void 0 !== l ? l : 0,
                    frames_encoded_videotoolbox: null !== (r = f.get(u.Encoders.VIDEOTOOLBOX)) && void 0 !== r ? r : 0,
                    frames_encoded_amd_direct3d: null !== (s = f.get(u.Encoders.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
                    frames_encoded_intel: null !== (d = f.get(u.Encoders.INTEL)) && void 0 !== d ? d : 0,
                    frames_encoded_intel_direct3d: null !== (o = f.get(u.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
                    frames_encoded_uncategorized: null !== (c = f.get(u.Encoders.UNCATEGORIZED)) && void 0 !== c ? c : 0,
                    frames_encoded_unknown: null !== (_ = f.get(u.Encoders.UNKNOWN)) && void 0 !== _ ? _ : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: I.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: E.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                }
            }
            async function x(e) {
                let t = I.default.getSettings(),
                    n = t.storageLocation,
                    a = (0, N.default)(e),
                    i = "".concat((0, v.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
                    l = s.default.fileManager.join(n, i),
                    u = S.default.getMediaEngine(),
                    d = JSON.stringify(a),
                    c = null != e ? (0, o.decodeStreamKey)(e).ownerId : void 0,
                    _ = function(e) {
                        var t;
                        let n, a, i;
                        if (null != e) {
                            n = null != e ? m.default.getRTCConnection(e) : null;
                            let t = (0, o.decodeStreamKey)(e);
                            a = t.guildId, i = t.channelId
                        } else {
                            let e = p.default.getId(),
                                t = g.default.getActiveStreamForUser(e, null);
                            n = null != t ? m.default.getRTCConnection((0, o.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
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
                null != e && r.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                    clip: {
                        ...a,
                        filepath: l
                    }
                });
                try {
                    var f;
                    let {
                        duration: e,
                        clipStats: t
                    } = await (null != c ? u.saveClipForUser(c, l, d) : u.saveClip(l, d)), n = V(_, t);
                    n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), h.default.track(L.AnalyticEvents.CLIP_SAVED, n);
                    let i = await (0, O.createThumbnailFromVideo)(s.default.clips.getClipProtocolURLFromPath(l), 0);
                    return a.thumbnail = i, a.length = e, D.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (f = null == i ? void 0 : i.length) && void 0 !== f ? f : 0, " bytes thumbnail.")), await u.updateClipMetadata(l, JSON.stringify(a)), {
                        ...a,
                        filepath: l
                    }
                } catch (n) {
                    if (null != e && r.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                            clipId: a.id
                        }), !("errorMessage" in n)) throw h.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, _), n;
                    let t = V(_, n);
                    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, h.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
                }
            }
            async function H(e) {
                var t;
                let {
                    enableDecoupledGameClipping: n
                } = c.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableViewerClipping: l
                } = _.default.getCurrentConfig({
                    location: "SaveClip"
                }, {
                    autoTrackExposure: !1
                });
                if (I.default.getIsAtMaxSaveClipOperations()) return;
                let s = I.default.getSettings().clipsEnabled && null != g.default.getCurrentUserActiveStream(),
                    u = n && I.default.getSettings().decoupledClipsEnabled && (null === (t = d.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && S.default.hasClipsSource(),
                    f = null != e && null != g.default.getActiveStreamForStreamKey(e) && l;
                if (!s && !u && !f) return;
                let E = g.default.getCurrentUserActiveStream(),
                    m = null != E ? (0, o.encodeStreamKey)(E) : void 0,
                    h = null != e ? e : m,
                    C = (() => {
                        let e = null != h ? (0, o.decodeStreamKey)(h).ownerId : void 0;
                        return e === p.default.getId() ? D.ClipSaveTypes.STREAMER : null != e ? D.ClipSaveTypes.VIEWER : D.ClipSaveTypes.DECOUPLED
                    })(),
                    v = await (async () => {
                        if (null == h) return;
                        let {
                            ownerId: e,
                            guildId: t
                        } = (0, o.decodeStreamKey)(h), n = A.default.getStreamId(e, t, a.MediaEngineContextTypes.STREAM);
                        if (null != n) try {
                            let e = (0, i.getVoiceEngine)(),
                                t = await e.getNextVideoOutputFrame(n);
                            return (0, O.createImageFromImageData)(t)
                        } catch (e) {
                            return
                        }
                    })();
                r.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START",
                    clipType: C,
                    streamKey: h,
                    thumbnail: v
                });
                let N = (0, T.playSound)("clip_save", .5),
                    y = performance.now();
                try {
                    let e = await x(h);
                    r.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: e
                    })
                } catch (e) {
                    D.ClipsLogger.error("Clip Failed to Save", e), null == N || N.stop(), (0, T.playSound)("clip_error", .5), r.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                D.ClipsLogger.info("".concat(I.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - y), "ms"))
            }

            function W(e, t) {
                r.default.dispatch({
                    type: "CLIPS_SAVE_ANIMATION_END",
                    streamKey: e,
                    timestamp: t
                })
            }
            async function K(e, t) {
                let n = I.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let a = {
                        ...n,
                        ...t
                    },
                    i = await (0, y.validateClipMetadata)(a);
                null != i && (await S.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), h.default.track(L.AnalyticEvents.CLIP_EDITED, {
                    clip_id: a.id
                }), r.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: a
                }))
            }

            function B() {
                r.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function Y() {
                r.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function q(e) {
                var t;
                if (!(0, C.isDesktop)() || (null === (t = s.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await s.default.clips.loadClipsDirectory(e),
                    a = [];
                for (let e of n) {
                    let t = await (0, y.validateClipMetadata)({
                        ...e.metadata,
                        filepath: e.filepath
                    });
                    null != t && a.push(t)
                }
                r.default.dispatch({
                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                    clips: a
                })
            }
            async function j(e) {
                var t;
                (0, C.isDesktop)() && (null === (t = s.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await s.default.clips.deleteClip(e), r.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function J(e, t) {
                let n = S.default.getMediaEngine(),
                    a = await n.exportClip(e.filepath, t);
                return (0, R.default)(a)
            }

            function z(e) {
                r.default.dispatch({
                    type: "CLIPS_DISMISS_EDUCATION",
                    educationType: e
                })
            }
        },
        310238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var a = n("627445"),
                i = n.n(a),
                l = n("469520"),
                r = n.n(l);
            async function s(e) {
                let t;
                let n = r.createFile(!1),
                    a = new Promise(e => {
                        n.onReady = e
                    }),
                    l = await e.arrayBuffer();
                for (let e of (l.fileStart = 0, n.appendBuffer(l), n.flush(), await a, i(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let s = e.slice(0, t, e.type),
                    u = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([s, new Uint8Array([0, 0, 0, 24]), u], {
                    type: e.type
                })
            }
        },
        430481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createImageFromImageData: function() {
                    return i
                },
                createThumbnailFromVideo: function() {
                    return l
                }
            }), n("70102");
            var a = n("80028");

            function i(e) {
                let t = document.createElement("canvas");
                t.width = e.width, t.height = e.height;
                let n = t.getContext("2d");
                if (null == n) throw Error("Could not create canvas context");
                return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
            }
            async function l(e, t) {
                let n = document.createElement("video");
                n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
                let i = a.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
                    l = a.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
                    r = Math.min(i, l),
                    s = n.videoWidth * r,
                    u = n.videoHeight * r,
                    d = document.createElement("canvas");
                d.width = s, d.height = u;
                let o = d.getContext("2d");
                if (null == o) throw Error("Could not create canvas context");
                return o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, s, u), d.toDataURL("image/jpeg", .9)
            }
        },
        370492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateDevToolsSettings: function() {
                    return l
                },
                toggleDisplayDevTools: function() {
                    return r
                },
                clearAnalyticsLog: function() {
                    return s
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

            function r() {
                l({
                    displayTools: !i.default.displayTools
                })
            }

            function s() {
                a.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        584369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("368694");
            let r = 360,
                s = {
                    sidebarWidth: r,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                };
            class u extends a.default.DeviceSettingsStore {
                initialize(e) {
                    s = null != e ? e : s, i.default.actionLogger.persist = l.default.isDeveloper
                }
                getUserAgnosticState() {
                    return s
                }
                get sidebarWidth() {
                    return this.displayTools ? s.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    var e;
                    return null !== (e = s.lastOpenTabId) && void 0 !== e ? e : null
                }
                get displayTools() {
                    return l.default.isDeveloper && s.displayTools
                }
                get showDevWidget() {
                    return l.default.isDeveloper && s.showDevWidget
                }
                get devWidgetPosition() {
                    return s.devWidgetPosition
                }
            }
            u.displayName = "DevToolsSettingsStore", u.persistKey = "DevToolsSettingsStore";
            var d = new u(i.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    l.default.isDeveloper && (s = {
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
                    return h
                },
                useMostRecentForumMessage: function() {
                    return C
                },
                preloadForumThreads: function() {
                    return I
                }
            }), n("222007");
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                r = n("872717"),
                s = n("913144"),
                u = n("42203"),
                d = n("299039"),
                o = n("670902"),
                c = n("349778"),
                _ = n("430475"),
                f = n("324261"),
                E = n("49111");
            class g {
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
                    return d.default.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let p = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), p.compact(e)
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
                        this.requested = new g(() => new Set)
                    }
                },
                S = null;

            function m(e, t) {
                let n = (0, c.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function A(e, t) {
                return !e && null == t
            }

            function h(e) {
                var t, n;
                let {
                    loaded: a,
                    firstMessage: i
                } = (0, l.useStateFromStoresObject)([_.default], () => _.default.getMessage(e.id)), r = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != r && (t = a, n = i, !t && null == n)) v(r, e.id);
                return {
                    loaded: a,
                    firstMessage: i
                }
            }

            function C(e, t) {
                let {
                    loaded: n,
                    message: a
                } = (0, l.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && m(t.guild_id, t.id) && v(e, t.id), {
                    loaded: n,
                    mostRecentMessage: a
                }
            }

            function T(e, t) {
                let n = !1;
                t.forEach(t => {
                    var a, i;
                    let {
                        loaded: l,
                        firstMessage: r
                    } = _.default.getMessage(t);
                    if (a = l, i = r, !a && null == i || m(e.guild_id, t)) p.request(e.id, t), n = !0
                }), n && null == S && (S = setTimeout(N, 0))
            }

            function I(e) {
                T(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function v(e, t) {
                if (p.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    a = n.findIndex(e => e === t),
                    i = n.slice(a, a + 5).filter(t => !p.hasRequested(e.id, t));
                T(e, i)
            }
            async function N() {
                try {
                    for (; p.hasNext();) await y(p.next())
                } finally {
                    S = null
                }
            }
            async function y(e) {
                let t = p.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let a = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == a) return;
                    let {
                        body: {
                            threads: i
                        }
                    } = await r.HTTP.post({
                        url: E.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    s.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: a,
                        threads: i
                    })
                } catch (e) {} finally {
                    p.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("692038"),
                r = n("42203"),
                s = n("697218"),
                u = n("449008"),
                d = n("299039");
            let o = {};

            function c(e) {
                var t;
                let n = r.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let a = o[n.id];
                return d.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function _(e, t) {
                let n = null == t ? null : (0, l.createMessageRecord)(t);
                return o[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function f(e) {
                return o[e]
            }

            function E(e) {
                var t;
                return null === (t = o[e]) || void 0 === t ? void 0 : t.message
            }

            function g(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => _(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    _(e.channel_id, e)
                })
            }
            class p extends a.default.Store {
                initialize() {
                    this.waitFor(r.default, s.default)
                }
                getMessageState(e) {
                    return !(e in o) && (o[e] = {
                        loaded: !1,
                        message: null
                    }), o[e]
                }
            }
            p.displayName = "ForumPostRecentMessageStore";
            var S = new p(i.default, {
                CONNECTION_OPEN: function() {
                    o = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === d.default.castMessageIdAsChannelId(e.message.id) ? _(e.message.channel_id, null) : _(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return o[e]
                            }(e),
                            a = E(e);
                        null != n && null != a && (o[e] = {
                            ...n,
                            message: (0, l.updateMessageRecord)(a, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = E(e);
                        return (null == n ? void 0 : n.id) === t && (delete o[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) _(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: g,
                LOAD_THREADS_SUCCESS: g
            })
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                i = n.n(a),
                l = n("267363"),
                r = n("863636"),
                s = n("401690"),
                u = n("923959"),
                d = n("660478"),
                o = n("599110"),
                c = n("299039"),
                _ = n("49111"),
                f = n("133335");

            function E(e, t, n) {
                let a = i.flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = u.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        i = s.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: d.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: c.default.cast(e),
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: d.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: c.default.cast(e),
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: r.default.ackIdForGuild(e)
                    })
                }), o.default.track(_.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(a, n)
            }
        },
        658536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var a = n("913144"),
                i = n("689988"),
                l = n("26989"),
                r = n("697218"),
                s = n("509");
            let u = null,
                d = () => {
                    let e = l.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, l.getGuildIdFromCommunicationDisabledUserKey)(t),
                            a = (0, l.getUserIdFromCommunicationDisabledUserKey)(t),
                            i = e[t];
                        !(0, s.isCommunicationDisabled)(i) && o(n, a)
                    })
                },
                o = (e, t) => {
                    var n, i, u, d, o, c;
                    let _ = l.default.getMember(e, t),
                        f = r.default.getUser(t);
                    if (null == _ || null == f || (0, s.isMemberCommunicationDisabled)(_)) return;
                    let E = {
                        ..._,
                        guildId: e,
                        nick: null !== (n = _.nick) && void 0 !== n ? n : f.username,
                        avatar: null !== (i = _.avatar) && void 0 !== i ? i : void 0,
                        avatarDecoration: null != _.avatarDecoration ? {
                            ..._.avatarDecoration
                        } : void 0,
                        premiumSince: null !== (u = _.premiumSince) && void 0 !== u ? u : void 0,
                        isPending: null !== (d = _.isPending) && void 0 !== d && d,
                        user: {
                            ...f,
                            email: null !== (o = f.email) && void 0 !== o ? o : void 0,
                            phone: null !== (c = f.phone) && void 0 !== c ? c : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    a.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...E
                    })
                };
            class c extends i.default {
                _initialize() {
                    u = setInterval(() => d(), 1e4)
                }
                _terminate() {
                    clearInterval(u)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var _ = new c
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return E
                },
                updateReminderDueAt: function() {
                    return g
                },
                toggleMessageReminders: function() {
                    return p
                },
                completeMessageReminders: function() {
                    return S
                },
                cleanupMessageReminders: function() {
                    return m
                },
                fetchAndUpdateSavedMessages: function() {
                    return C
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("679653"),
                r = n("42203"),
                s = n("305961"),
                u = n("27618"),
                d = n("697218"),
                o = n("599110"),
                c = n("520899"),
                _ = n("988864"),
                f = n("49111");

            function E(e, t) {
                o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), h([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = r.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = s.default.getGuild(t.guild_id),
                            a = "",
                            i = (0, l.computeChannelName)(t, d.default, u.default, !0);
                        if (t.isPrivate()) a = i;
                        else if (t.isThread()) {
                            let e = r.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, l.computeChannelName)(e, d.default, u.default, !0);
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

            function g(e, t) {
                o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let n = c.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && h([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function p(e, t) {
                o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), i.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function S(e) {
                o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let t = c.default.getMessageReminders();
                h([], t.filter(t => t.messageId === e))
            }

            function m() {
                o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(c.default.getMessageReminders().length)
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && h([], e.filter(e => e.complete))
            }

            function A(e) {
                o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(c.default.getMessageReminders().length)
                }), i.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function h(e, t) {
                (0 !== e.length || 0 !== t.length) && a.HTTP.post({
                    url: f.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(_.savedMessageToServer),
                        removed: t.map(_.savedMessageToServer)
                    }
                }).then(e => {
                    A(e.body.saved_messages.map(_.savedMessageToClient))
                })
            }

            function C() {
                return c.default.recentlyFetched() ? Promise.resolve() : a.HTTP.get({
                    url: f.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(_.savedMessageToClient);
                    A(n)
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
            let r = [],
                s = new Set,
                u = 0;
            class d extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * l.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return r
                }
                isMessageReminder(e) {
                    let t = r.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return r.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * l.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return s.has(e)
                }
                getState() {
                    return {
                        messages: r
                    }
                }
            }
            d.displayName = "MessageRemindersStore";
            var o = new d(i.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), r = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && s.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && s.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = r.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    r[a] = {
                        ...r[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    s.add(t)
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
                    return r
                },
                savedMessageHasMetadata: function() {
                    return s
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return u
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

            function r(e) {
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

            function s(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let u = [{
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
                    return j
                }
            }), n("222007");
            var i = n("803182"),
                l = n("811022"),
                r = n("95410"),
                s = n("913144"),
                u = n("404118"),
                d = n("819689"),
                o = n("115718"),
                c = n("689988"),
                _ = n("408062"),
                f = n("619443"),
                E = n("582713"),
                g = n("233069"),
                p = n("982108"),
                S = n("42203"),
                m = n("305961"),
                A = n("660478"),
                h = n("18494"),
                C = n("162771"),
                T = n("718517"),
                I = n("519841"),
                v = n("787336"),
                N = n("49111"),
                y = n("724210"),
                R = n("782340");
            let O = new l.Logger("MessageManager");

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    forceFetch: l,
                    isPreload: s,
                    jumpType: u,
                    skipLocalFetch: c,
                    logFailures: E
                } = e;
                if (null == n) {
                    E && O.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, y.isStaticChannelRoute)(n)) {
                    E && O.log("Skipping fetch because channelId is a static route");
                    return
                }
                let g = S.default.getChannel(n);
                if ((null == g ? void 0 : g.type) === N.ChannelTypes.GUILD_STORE || (null == g ? void 0 : g.type) != null && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(g.type)) {
                    E && O.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let p = _.default.getOrCreate(n);
                I.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && p.some(v.messageHasExpiredAttachmentUrl) && (O.log("Found expired attachment link, clearing messages"), _.default.clear(n), p = _.default.getOrCreate(n)), null != p.jumpTargetId && null == i && (p = p.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), _.default.commit(p)), null != p.focusTargetId && null == i && (p = p.mutate({
                    focusTargetId: null
                }), _.default.commit(p));
                let h = l;
                if (!s || f.default.isConnected() || p.loadingMore ? p.loadingMore || p.ready && !p.cached ? null != i ? h = !0 : E && O.log("Skipping fetch because no other conditions matched") : null == t || null != m.default.getGuild(t) ? h = !0 : E && O.log("Skipping fetch we are connected and have loaded messages") : h = !0, h) {
                    if (_.default.commit(p.mutate({
                            loadingMore: !0
                        })), null != i) d.default.jumpToMessage({
                        channelId: n,
                        messageId: i,
                        flash: !0,
                        isPreload: s,
                        skipLocalFetch: c,
                        jumpType: u
                    });
                    else if ((null == g ? void 0 : g.isThread()) && function(e) {
                            if (A.default.hasOpenedThread(e)) return !1;
                            if (null == a) {
                                var t;
                                a = null !== (t = r.Storage.get(M, {})) && void 0 !== t ? t : {}
                            }
                            if (e in a) return !1;
                            a[e] = Date.now();
                            let n = Date.now() - L;
                            for (let e in a) a[e] < n && delete a[e];
                            return r.Storage.set(M, a), !0
                        }(n)) O.log("Jumping to start of thread ".concat(g.id)), d.default.fetchMessages({
                        channelId: n,
                        limit: N.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: s,
                        skipLocalFetch: c
                    });
                    else if ((null == g ? void 0 : g.isThread()) && A.default.hasTrackedUnread(g.id) && !p.ready) {
                        let e = A.default.getTrackedAckMessageId(g.id);
                        O.log("Jumping to most recent message in thread ".concat(g.id, " - ").concat(e)), d.default.fetchMessages({
                            channelId: n,
                            limit: N.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: s,
                            skipLocalFetch: c
                        })
                    } else d.default.fetchMessages({
                        channelId: n,
                        limit: N.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: s,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let L = 90 * T.default.Millis.DAY,
                M = "viewedThreadIds";

            function b() {
                let e = h.default.getChannelId();
                if (null != e) {
                    let n = S.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, i.matchPath)(location.pathname, {
                            path: N.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        D({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), F(n.getGuildId(), n.id)
                    }
                }
            }

            function U() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = h.default.getChannelId();
                if (null != a) {
                    let i = S.default.getChannel(a);
                    null != i ? ((0, g.isTextChannel)(i.type) ? D({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && O.log("Skipping fetch because the selected channel is not a text channel"), F(i.getGuildId(), i.id)) : n && O.log("Skipping fetch because channel is null")
                } else n && O.log("Skipping fetch because there is no selected channel")
            }

            function P(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: i
                } = e;
                D({
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: i
                }), F(t, n)
            }

            function w(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                D({
                    guildId: t,
                    channelId: n
                })
            }

            function F(e, t) {
                let n = p.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let a = p.default.getCurrentSidebarMessageId(t);
                D({
                    guildId: e,
                    channelId: n,
                    messageId: a
                })
            }

            function G() {
                let e = h.default.getChannelId(),
                    t = C.default.getGuildId();
                if (null == t || null == e) return;
                let n = p.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && F(t, e)
            }

            function k(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: a
                } = e;
                a === N.CURRENT_APP_CONTEXT && (D({
                    guildId: t,
                    channelId: n
                }), F(t, n))
            }

            function V(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, a = t.guild_id;
                null != a && h.default.getChannelId(a) === t.id && D({
                    guildId: a,
                    channelId: t.id,
                    messageId: n
                })
            }

            function x(e) {
                let {
                    channelId: t
                } = e;
                d.default.fetchMessages({
                    channelId: t,
                    limit: N.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function H(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === N.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && u.default.show({
                        title: R.default.Messages.RATE_LIMITED,
                        body: R.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let W = {};

            function K(e) {
                var t;
                let {
                    channelId: n,
                    jump: a,
                    isStale: i,
                    isPreview: l = !1
                } = e;
                if (l) return;
                let r = null !== (t = W[n]) && void 0 !== t ? t : 0;
                if (Date.now() - r < 10 * T.default.Millis.SECOND) return;
                W[n] = Date.now();
                let s = h.default.getChannelId(),
                    u = p.default.getCurrentSidebarChannelId(s),
                    o = n === s || n === u;
                i && f.default.isConnected() && o && d.default.fetchMessages({
                    channelId: n,
                    limit: N.MAX_MESSAGES_PER_CHANNEL,
                    jump: a
                })
            }

            function B(e) {
                let {
                    channelId: t,
                    messageRecord: n,
                    reason: a
                } = e;
                null != n && s.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id,
                    reason: null != a ? a : null
                })
            }

            function Y(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = h.default.getChannelId();
                if (null == n) return !1;
                d.default.fetchNewLocalMessages(n, N.MAX_MESSAGES_PER_CHANNEL)
            }
            class q extends c.default {
                _initialize() {
                    s.default.subscribe("CONNECTION_OPEN", b)
                }
                _terminate() {
                    s.default.unsubscribe("CONNECTION_OPEN", b)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = D, this.loadSelectedChannelIfNecessary = U, this.stores = new Map().set(p.default, G), this.actions = {
                        APP_STATE_UPDATE: Y,
                        OVERLAY_INITIALIZE: b,
                        CHANNEL_SELECT: P,
                        VOICE_CHANNEL_SELECT: w,
                        THREAD_CREATE: V,
                        THREAD_LIST_SYNC: () => U(),
                        CHANNEL_CREATE: V,
                        CHANNEL_PRELOAD: k,
                        THREAD_CREATE_LOCAL: x,
                        GUILD_CREATE: () => U(),
                        MESSAGE_END_EDIT: H,
                        LOAD_MESSAGES_SUCCESS: K,
                        UPLOAD_FAIL: B,
                        CHANNEL_DELETE: () => U(),
                        THREAD_DELETE: () => U()
                    }
                }
            }
            var j = new q
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return s
                },
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return u
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
                r = (0, a.createExperiment)({
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

            function s(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = r.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : i.EMPTY_STRING_SNOWFLAKE_ID
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

            function u(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = r.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : i.EMPTY_STRING_SNOWFLAKE_ID,
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return n
            }
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return r
                },
                setChannelSafetyWarningFeedback: function() {
                    return s
                },
                clearChannelSafetyWarnings: function() {
                    return u
                },
                acknowledgeChannelSafetyWarningTooltip: function() {
                    return d
                },
                reportFalsePositive: function() {
                    return o
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("49111");

            function r(e, t) {
                return i.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.HTTP.post({
                    url: l.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function u(e) {
                i.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }

            function d(e) {
                i.default.dispatch({
                    type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
                    channelId: e
                })
            }

            function o(e) {
                return a.HTTP.post({
                    url: l.Endpoints.SAFETY_WARNING_FALSE_POSITIVE(e)
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return a
                },
                SafetyWarningFeedbackTypes: function() {
                    return i
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var a, i, l, r, s = n("446674"),
                u = n("913144"),
                d = n("42203"),
                o = n("718517");
            let c = 5 * o.default.Millis.SECOND;
            (l = a || (a = {}))[l.STRANGER_DANGER = 1] = "STRANGER_DANGER", l[l.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", l[l.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (r = i || (i = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let _ = [],
                f = {},
                E = new Set;

            function g(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t, t.some(e => {
                    var t;
                    return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                        return new Date(e).getTime() > Date.now() - c
                    }(e.dismiss_timestamp)
                }) ? E.add(e.id) : E.delete(e.id)), null == t && (null != f[e.id] && delete f[e.id], E.delete(e.id))
            }

            function p() {
                f = {}, Object.values(d.default.getMutablePrivateChannels()).forEach(e => {
                    g(e)
                })
            }
            class S extends s.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : _
                }
                hasShownInitialTooltipForChannel(e) {
                    return E.has(e)
                }
            }
            var m = new S(u.default, {
                CHANNEL_CREATE: function(e) {
                    g(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    null != f[t.id] && delete f[t.id], E.delete(t.id)
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        g(e)
                    })
                },
                CONNECTION_OPEN: p,
                CONNECTION_OPEN_SUPPLEMENTAL: p,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, i = f[t];
                    null != i && (f[t] = i.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = f[t];
                    E.delete(t), null != n && (f[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = f[t];
                    if (null == a) return;
                    let i = new Date().toISOString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: i
                    } : e)
                },
                ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
                    let {
                        channelId: t
                    } = e;
                    E.add(t)
                }
            })
        },
        499799: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isStaffTeenSafetyAssistAgeBypass: function() {
                    return l
                },
                useStaffTeenSafetyAssistAgeBypass: function() {
                    return r
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_staff_teen_safety_assist_age_bypass",
                label: "Staff Teen Safety Assist Age Bypass",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                let {
                    enabled: t
                } = i.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function r(e) {
                return i.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        761771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForInappropriateConversationWarning: function() {
                    return r
                },
                useIsEligibleForInappropriateConversationWarning: function() {
                    return s
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_inappropriate_conversation_warning",
                    label: "Inappropriate Conversation Warning",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Inappropriate Conversation Warning",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_inappropriate_conversation_warning_staff_bypass",
                    label: "Inappropriate Conversation Warning Staff Bypass",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Inappropriate Conversation Warning Staff Bypass",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function r(e) {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e, {
                    enabled: a
                } = i.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                }), {
                    enabled: r
                } = l.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                });
                return a || r
            }

            function s(e) {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e, {
                    enabled: a
                } = i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                }), {
                    enabled: r
                } = l.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                });
                return a || r
            }
        },
        217736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackViewedEvent: function() {
                    return c
                },
                ViewNameTypes: function() {
                    return l
                },
                trackNamedViewEvent: function() {
                    return _
                },
                CtaEventTypes: function() {
                    return r
                },
                trackCtaEvent: function() {
                    return f
                },
                getUserIsTeen: function() {
                    return E
                }
            });
            var a, i, l, r, s = n("697218"),
                u = n("599110"),
                d = n("499799"),
                o = n("49111");

            function c(e, t) {
                let {
                    channelId: n,
                    warningId: a,
                    senderId: i,
                    warningType: l
                } = t;
                u.default.track(e, {
                    channel_id: n,
                    warning_id: null != a ? parseInt(a) : void 0,
                    warning_type: l,
                    other_user_id: i
                })
            }

            function _(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: a,
                    warningType: i,
                    viewName: l,
                    isNudgeWarning: r
                } = e;
                u.default.track(o.AnalyticEvents.SAFETY_WARNING_VIEWED, {
                    channel_id: t,
                    warning_id: null != n ? parseInt(n) : void 0,
                    warning_type: i,
                    other_user_id: a,
                    view_name: l,
                    is_nudge_warning: r
                })
            }

            function f(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: a,
                    warningType: i,
                    cta: l,
                    isNudgeWarning: r
                } = e;
                u.default.track(o.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
                    channel_id: t,
                    warning_id: null != n ? parseInt(n) : void 0,
                    warning_type: i,
                    other_user_id: a,
                    cta: l,
                    is_nudge_warning: r
                })
            }

            function E(e) {
                var t;
                let n = null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed,
                    a = (0, d.isStaffTeenSafetyAssistAgeBypass)(e);
                return !1 === n || a
            }(a = l || (l = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", a.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", a.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", a.SAFETY_TOOLS_BUTTON = "safety_tools_button", (i = r || (r = {})).OPEN_MORE_TIPS = "open_more_tips", i.USER_BANNER_DISMISS = "user_banner_dismiss", i.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", i.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", i.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", i.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", i.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", i.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", i.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", i.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", i.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", i.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", i.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", i.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", i.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", i.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", i.USER_TAKEOVER_MODAL_CTL_SMS = "user_takeover_modal_ctl_sms", i.USER_TAKEOVER_MODAL_CTL_WEB = "user_takeover_modal_ctl_web", i.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", i.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", i.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", i.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", i.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock", i.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", i.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", i.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", i.USER_SAFETY_TOOLS_CTL_SMS = "user_safety_tools_ctl_sms", i.USER_SAFETY_TOOLS_CTL_WEB = "user_safety_tools_ctl_web", i.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", i.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", i.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", i.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", i.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", i.USER_MODAL_MUTE = "user_modal_mute", i.USER_MODAL_UNMUTE = "user_modal_unmute", i.FEEDBACK_UPVOTE = "feedback_upvote", i.FEEDBACK_DOWNVOTE = "feedback_downvote"
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
                    className: r,
                    foreground: s,
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    className: r,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: s,
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
//# sourceMappingURL=7040.5104261f2a446e4dbc5f.js.map