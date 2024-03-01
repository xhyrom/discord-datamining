(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12896"], {
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
            var a = n("161454"),
                i = n("374014"),
                l = n("373469"),
                d = n("271938"),
                r = n("824563"),
                u = n("945956"),
                s = n("800762"),
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
                        } = i.decodeStreamKey(e);
                        if (t !== d.default.getId()) {
                            let e = r.default.getActivities(t).find(e => e.type === f.ActivityTypes.PLAYING);
                            return {
                                sourceName: null == e ? void 0 : e.name,
                                sourceApplicationId: null == e ? void 0 : e.application_id
                            }
                        }
                    }
                    let u = l.default.getStreamerActiveStreamMetadata(),
                        s = null == u ? void 0 : u.pid,
                        o = null != u ? null != s ? a.default.getGameForPID(s) : null : a.default.getVisibleGame();
                    return {
                        sourceName: null !== (t = null == u ? void 0 : u.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
                        sourceApplicationId: null !== (n = null == u ? void 0 : u.id) && void 0 !== n ? n : null == o ? void 0 : o.id
                    }
                }(e), p = u.default.getChannelId(), _ = [d.default.getId()];
                return null != p && (_ = Object.keys(s.default.getVoiceStatesForChannel(p))), {
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
                let r = (t = d, null != l ? l : l = t.object({
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
                    d.assert(e, r);
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
                    return b
                },
                updateClipsEnabled: function() {
                    return w
                },
                updateDecoupledClipsEnabled: function() {
                    return O
                },
                updateRemindersEnabled: function() {
                    return P
                },
                updateClipsStorageLocation: function() {
                    return U
                },
                updateClipsQuality: function() {
                    return G
                },
                updateClipsLength: function() {
                    return F
                },
                updateViewerClipsEnabled: function() {
                    return V
                },
                saveClip: function() {
                    return q
                },
                dismissSaveClipAnimation: function() {
                    return H
                },
                updateClipMetadata: function() {
                    return W
                },
                clearClipsSession: function() {
                    return K
                },
                clearNewClipIds: function() {
                    return B
                },
                loadClipsDirectory: function() {
                    return J
                },
                deleteClip: function() {
                    return j
                },
                exportClip: function() {
                    return z
                },
                dismissClipsUserEducation: function() {
                    return Y
                }
            }), n("222007"), n("424973");
            var a = n("773364"),
                i = n("784063"),
                l = n("750028"),
                d = n("913144"),
                r = n("49671"),
                u = n("44642"),
                s = n("161454"),
                o = n("374014"),
                c = n("584687"),
                f = n("103979"),
                g = n("872173"),
                p = n("268491"),
                _ = n("373469"),
                m = n("271938"),
                E = n("42887"),
                h = n("205817"),
                S = n("555035"),
                v = n("599110"),
                I = n("773336"),
                y = n("709681"),
                C = n("386045"),
                A = n("13136"),
                T = n("881095"),
                D = n("997942"),
                N = n("310238"),
                M = n("430481"),
                R = n("80028"),
                L = n("49111");

            function b(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                g.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = l.BoolValue.create({
                        value: t
                    })
                }, g.UserSettingsDelay.INFREQUENT_USER_ACTION), v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function w(e) {
                let {
                    clipsEnabled: t,
                    guildId: n,
                    trackAnalytics: a = !1
                } = e;
                await d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsEnabled: t,
                        ...!t && {
                            decoupledClipsEnabled: !1
                        }
                    }
                }), a && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function O(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        ...t && {
                            clipsEnabled: !0
                        },
                        decoupledClipsEnabled: t
                    }
                }), n && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function P(e) {
                d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        remindersEnabled: e
                    }
                })
            }

            function U(e) {
                d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function G(e) {
                d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function F(e) {
                d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function V(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                d.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: t
                    }
                }), n && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    viewer_clips_enabled: t
                })
            }

            function x(e, t) {
                var n, a, i, l, d, r, s, o, c, f;
                let g = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let a = t.framesEncodedByEncoder[e],
                        i = (0, u.parseEncoder)(e),
                        l = null !== (n = g.get(i)) && void 0 !== n ? n : 0;
                    g.set(i, l + a)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (a = g.get(u.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
                    frames_encoded_nvidia_direct3d: null !== (i = g.get(u.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
                    frames_encoded_openh264: null !== (l = g.get(u.Encoders.OPENH264)) && void 0 !== l ? l : 0,
                    frames_encoded_videotoolbox: null !== (d = g.get(u.Encoders.VIDEOTOOLBOX)) && void 0 !== d ? d : 0,
                    frames_encoded_amd_direct3d: null !== (r = g.get(u.Encoders.AMD_DIRECT_3D)) && void 0 !== r ? r : 0,
                    frames_encoded_intel: null !== (s = g.get(u.Encoders.INTEL)) && void 0 !== s ? s : 0,
                    frames_encoded_intel_direct3d: null !== (o = g.get(u.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
                    frames_encoded_uncategorized: null !== (c = g.get(u.Encoders.UNCATEGORIZED)) && void 0 !== c ? c : 0,
                    frames_encoded_unknown: null !== (f = g.get(u.Encoders.UNKNOWN)) && void 0 !== f ? f : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: C.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: p.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                }
            }
            async function k(e) {
                let t = C.default.getSettings(),
                    n = t.storageLocation,
                    a = (0, T.default)(e),
                    i = "".concat((0, A.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
                    l = r.default.fileManager.join(n, i),
                    u = E.default.getMediaEngine(),
                    s = JSON.stringify(a),
                    c = null != e ? (0, o.decodeStreamKey)(e).ownerId : void 0,
                    f = function(e) {
                        var t;
                        let n, a, i;
                        if (null != e) {
                            n = null != e ? h.default.getRTCConnection(e) : null;
                            let t = (0, o.decodeStreamKey)(e);
                            a = t.guildId, i = t.channelId
                        } else {
                            let e = m.default.getId(),
                                t = _.default.getActiveStreamForUser(e, null);
                            n = null != t ? h.default.getRTCConnection((0, o.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
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
                null != e && d.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                    clip: {
                        ...a,
                        filepath: l
                    }
                });
                try {
                    var g;
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: n
                    } = await (null != c ? u.saveClipForUser(c, l, s) : u.saveClip(l, s)), i = x(f, n);
                    i.clip_save_time_ms = n.clipSaveTimeMs, i.clip_size_bytes = n.clipSizeBytes, null != n.viewerDecodeFps && (i.decode_fps_during_clip = n.viewerDecodeFps, i.encode_fps_during_clip = n.viewerEncodeFps, i.target_fps = null), v.default.track(L.AnalyticEvents.CLIP_SAVED, i);
                    let d = await (null != r.default.clips.getClipProtocolURLFromPath ? (0, M.createThumbnailFromVideo)(r.default.clips.getClipProtocolURLFromPath(l), 0) : (0, M.createImageFromUint8Array)(t));
                    return a.thumbnail = d, a.length = e, R.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (g = null == d ? void 0 : d.length) && void 0 !== g ? g : 0, " bytes thumbnail.")), await u.updateClipMetadata(l, JSON.stringify(a)), {
                        ...a,
                        filepath: l
                    }
                } catch (n) {
                    if (null != e && d.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                            clipId: a.id
                        }), !("errorMessage" in n)) throw v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, f), n;
                    let t = x(f, n);
                    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
                }
            }
            async function q(e) {
                var t;
                let {
                    enableDecoupledGameClipping: n
                } = c.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableViewerClipping: l
                } = f.default.getCurrentConfig({
                    location: "SaveClip"
                }, {
                    autoTrackExposure: !1
                });
                if (C.default.getIsAtMaxSaveClipOperations()) return;
                let r = C.default.getSettings().clipsEnabled && null != _.default.getCurrentUserActiveStream(),
                    u = n && C.default.getSettings().decoupledClipsEnabled && (null === (t = s.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && E.default.hasClipsSource(),
                    g = null != e && null != _.default.getActiveStreamForStreamKey(e) && l;
                if (!r && !u && !g) return;
                let p = _.default.getCurrentUserActiveStream(),
                    h = null != p ? (0, o.encodeStreamKey)(p) : void 0,
                    v = null != e ? e : h,
                    I = (() => {
                        let e = null != v ? (0, o.decodeStreamKey)(v).ownerId : void 0;
                        return e === m.default.getId() ? R.ClipSaveTypes.STREAMER : null != e ? R.ClipSaveTypes.VIEWER : R.ClipSaveTypes.DECOUPLED
                    })(),
                    A = await (async () => {
                        if (null == v) return;
                        let {
                            ownerId: e,
                            guildId: t
                        } = (0, o.decodeStreamKey)(v), n = S.default.getStreamId(e, t, a.MediaEngineContextTypes.STREAM);
                        if (null != n) try {
                            let e = (0, i.getVoiceEngine)(),
                                t = await e.getNextVideoOutputFrame(n);
                            return (0, M.createImageFromImageData)(t)
                        } catch (e) {
                            return
                        }
                    })();
                d.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START",
                    clipType: I,
                    streamKey: v,
                    thumbnail: A
                });
                let T = (0, y.playSound)("clip_save", .5),
                    D = performance.now();
                try {
                    let e = await k(v);
                    d.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: e
                    })
                } catch (e) {
                    R.ClipsLogger.error("Clip Failed to Save", e), null == T || T.stop(), (0, y.playSound)("clip_error", .5), d.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                R.ClipsLogger.info("".concat(C.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - D), "ms"))
            }

            function H(e, t) {
                d.default.dispatch({
                    type: "CLIPS_SAVE_ANIMATION_END",
                    streamKey: e,
                    timestamp: t
                })
            }
            async function W(e, t) {
                let n = C.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let a = {
                        ...n,
                        ...t
                    },
                    i = await (0, D.validateClipMetadata)(a);
                null != i && (await E.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), v.default.track(L.AnalyticEvents.CLIP_EDITED, {
                    clip_id: a.id
                }), d.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: a
                }))
            }

            function K() {
                d.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function B() {
                d.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function J(e) {
                var t;
                if (!(0, I.isDesktop)() || (null === (t = r.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await r.default.clips.loadClipsDirectory(e),
                    a = [];
                for (let e of n) {
                    let t = await (0, D.validateClipMetadata)({
                        ...e.metadata,
                        filepath: e.filepath
                    });
                    null != t && a.push(t)
                }
                d.default.dispatch({
                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                    clips: a
                })
            }
            async function j(e) {
                var t;
                (0, I.isDesktop)() && (null === (t = r.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await r.default.clips.deleteClip(e), d.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function z(e, t) {
                let n = E.default.getMediaEngine(),
                    a = await n.exportClip(e.filepath, t);
                return (0, N.default)(a)
            }

            function Y(e) {
                d.default.dispatch({
                    type: "CLIPS_DISMISS_EDUCATION",
                    educationType: e
                })
            }
        },
        310238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var a = n("627445"),
                i = n.n(a),
                l = n("469520"),
                d = n.n(l);
            async function r(e) {
                let t;
                let n = d.createFile(!1),
                    a = new Promise(e => {
                        n.onReady = e
                    }),
                    l = await e.arrayBuffer();
                for (let e of (l.fileStart = 0, n.appendBuffer(l), n.flush(), await a, i(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let r = e.slice(0, t, e.type),
                    u = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([r, new Uint8Array([0, 0, 0, 24]), u], {
                    type: e.type
                })
            }
        },
        430481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createImageFromUint8Array: function() {
                    return i
                },
                createImageFromImageData: function() {
                    return l
                },
                createThumbnailFromVideo: function() {
                    return d
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
                if ("string" != typeof n) throw Error("Image creation failed");
                return n
            }

            function l(e) {
                let t = document.createElement("canvas");
                t.width = e.width, t.height = e.height;
                let n = t.getContext("2d");
                if (null == n) throw Error("Could not create canvas context");
                return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
            }
            async function d(e, t) {
                let n = document.createElement("video");
                n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
                let i = a.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
                    l = a.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
                    d = Math.min(i, l),
                    r = n.videoWidth * d,
                    u = n.videoHeight * d,
                    s = document.createElement("canvas");
                s.width = r, s.height = u;
                let o = s.getContext("2d");
                if (null == o) throw Error("Could not create canvas context");
                return o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, r, u), s.toDataURL("image/jpeg", .9)
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
                    return r
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

            function r() {
                a.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        584369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return d
                },
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("368694");
            let d = 360,
                r = {
                    sidebarWidth: d,
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
                    r = null != e ? e : r, i.default.actionLogger.persist = l.default.isDeveloper
                }
                getUserAgnosticState() {
                    return r
                }
                get sidebarWidth() {
                    return this.displayTools ? r.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    var e;
                    return null !== (e = r.lastOpenTabId) && void 0 !== e ? e : null
                }
                get displayTools() {
                    return l.default.isDeveloper && r.displayTools
                }
                get showDevWidget() {
                    return l.default.isDeveloper && r.showDevWidget
                }
                get devWidgetPosition() {
                    return r.devWidgetPosition
                }
            }
            u.displayName = "DevToolsSettingsStore", u.persistKey = "DevToolsSettingsStore";
            var s = new u(i.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    l.default.isDeveloper && (r = {
                        ...r,
                        ...e.settings
                    })
                }
            })
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return v
                },
                useMostRecentForumMessage: function() {
                    return I
                },
                preloadForumThreads: function() {
                    return C
                }
            }), n("222007");
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                d = n("872717"),
                r = n("913144"),
                u = n("42203"),
                s = n("299039"),
                o = n("670902"),
                c = n("349778"),
                f = n("430475"),
                g = n("324261"),
                p = n("49111");
            class _ {
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
                    return s.default.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let m = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), m.compact(e)
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
                        this.requested = new _(() => new Set)
                    }
                },
                E = null;

            function h(e, t) {
                let n = (0, c.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = g.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function S(e, t) {
                return !e && null == t
            }

            function v(e) {
                var t, n;
                let {
                    loaded: a,
                    firstMessage: i
                } = (0, l.useStateFromStoresObject)([f.default], () => f.default.getMessage(e.id)), d = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
                if (null != d && (t = a, n = i, !t && null == n)) A(d, e.id);
                return {
                    loaded: a,
                    firstMessage: i
                }
            }

            function I(e, t) {
                let {
                    loaded: n,
                    message: a
                } = (0, l.useStateFromStoresObject)([g.default], () => g.default.getMessageState(t.id));
                return null != e && h(t.guild_id, t.id) && A(e, t.id), {
                    loaded: n,
                    mostRecentMessage: a
                }
            }

            function y(e, t) {
                let n = !1;
                t.forEach(t => {
                    var a, i;
                    let {
                        loaded: l,
                        firstMessage: d
                    } = f.default.getMessage(t);
                    if (a = l, i = d, !a && null == i || h(e.guild_id, t)) m.request(e.id, t), n = !0
                }), n && null == E && (E = setTimeout(T, 0))
            }

            function C(e) {
                y(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function A(e, t) {
                if (m.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    a = n.findIndex(e => e === t),
                    i = n.slice(a, a + 5).filter(t => !m.hasRequested(e.id, t));
                y(e, i)
            }
            async function T() {
                try {
                    for (; m.hasNext();) await D(m.next())
                } finally {
                    E = null
                }
            }
            async function D(e) {
                let t = m.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let a = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == a) return;
                    let {
                        body: {
                            threads: i
                        }
                    } = await d.default.post({
                        url: p.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    r.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: a,
                        threads: i
                    })
                } catch (e) {} finally {
                    m.finishRequesting(e, t)
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
                r = n("697218"),
                u = n("449008"),
                s = n("299039");
            let o = {};

            function c(e) {
                var t;
                let n = d.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let a = o[n.id];
                return s.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
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
                t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class m extends a.default.Store {
                initialize() {
                    this.waitFor(d.default, r.default)
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
                    e.message.channel_id === s.default.castMessageIdAsChannelId(e.message.id) ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
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
                    return p
                }
            }), n("881410"), n("222007"), n("424973");
            var a = n("917351"),
                i = n.n(a),
                l = n("267363"),
                d = n("863636"),
                r = n("401690"),
                u = n("923959"),
                s = n("660478"),
                o = n("599110"),
                c = n("299039"),
                f = n("49111"),
                g = n("133335");

            function p(e, t, n) {
                let a = i.flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = u.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        i = r.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: g.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    a.push({
                        channelId: c.default.castGuildIdAsReadStateChannelId(e),
                        readStateType: g.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, g.ReadStateTypes.GUILD_EVENT)
                    }), a.push({
                        channelId: c.default.castGuildIdAsReadStateChannelId(e),
                        readStateType: g.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: d.default.ackIdForGuild(e)
                    })
                }), o.default.track(f.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(a, n)
            }
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
                    return I
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("679653"),
                d = n("42203"),
                r = n("305961"),
                u = n("27618"),
                s = n("697218"),
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
                        let n = r.default.getGuild(t.guild_id),
                            a = "",
                            i = (0, l.computeChannelName)(t, s.default, u.default, !0);
                        if (t.isPrivate()) a = i;
                        else if (t.isThread()) {
                            let e = d.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, l.computeChannelName)(e, s.default, u.default, !0);
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

            function I() {
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
                r = new Set,
                u = 0;
            class s extends a.default.Store {
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
                    return new Date().getTime() - u < 1 * l.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return r.has(e)
                }
                getState() {
                    return {
                        messages: d
                    }
                }
            }
            s.displayName = "MessageRemindersStore";
            var o = new s(i.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), d = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && r.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && r.add(e.messageId)
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
                    r.add(t)
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
                    return r
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

            function r(e) {
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
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return r
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

            function r(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = d.useExperiment({
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
                } = d.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : i.EMPTY_STRING_SNOWFLAKE_ID,
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return n
            }
        }
    }
]);
//# sourceMappingURL=12896.e14674fd49155de3feba.js.map