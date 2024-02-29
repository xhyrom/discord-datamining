(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51266"], {
        258664: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("312916"),
                a = {
                    setSection(e) {
                        i.default.dispatch({
                            type: "FRIENDS_SET_SECTION",
                            section: e
                        })
                    },
                    setInitialSection(e) {
                        i.default.dispatch({
                            type: "FRIENDS_SET_INITIAL_SECTION",
                            section: e
                        })
                    }
                }
        },
        437190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createTestModeLibraryApplications: function() {
                    return d
                },
                fetchLibrary: function() {
                    return u
                },
                setActiveLaunchOptionId: function() {
                    return o
                }
            });
            var i = n("454836"),
                a = n("312916"),
                s = n("566762"),
                r = n("413775"),
                l = n("467006");
            async function u() {
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.LIBRARY,
                        oldFormErrors: !0
                    }, !1);
                    a.default.dispatch({
                        type: "LIBRARY_FETCH_SUCCESS",
                        libraryApplications: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "LIBRARY_FETCH_FAIL",
                        error: e
                    })
                }
            }
            async function d(e) {
                let t = e.primarySkuId;
                if (null == t) return;
                let n = (await i.default.get({
                    url: l.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                    oldFormErrors: !0
                }).then(e => e.body)).map(n => s.default.createForTestMode({
                    id: e.id,
                    skuId: t,
                    branch: n
                }));
                a.default.dispatch({
                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                    libraryApplications: n
                })
            }

            function o(e, t, n) {
                a.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: e,
                    branchId: t,
                    launchOptionId: n
                })
            }
        },
        758831: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("635024");
            n.es(i, t)
        },
        81943: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                forcePrompt: function() {
                    return _
                },
                initiateChannelPrompts: function() {
                    return f
                },
                sendGamingStatsMessage: function() {
                    return E
                },
                updateGamingStats: function() {
                    return p
                }
            });
            var i = n("454836"),
                a = n("330853"),
                s = n("389920"),
                r = n("288146"),
                l = n("731865"),
                u = n("911388"),
                d = n("162256"),
                o = n("845649"),
                c = n("467006");

            function f(e) {
                i.default.post({
                    url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                i.default.post({
                    url: c.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }
            async function E(e, t, n) {
                await i.default.post({
                    url: c.Endpoints.SEND_GAMING_STATS(t),
                    body: {
                        message_reference: {
                            guild_id: e,
                            channel_id: t,
                            message_id: n
                        }
                    }
                }), S(t)
            }
            async function p(e) {
                let t = await i.default.patch({
                    url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = l.default.getChannel(e.channel_id);
                    null != n && ((0, r.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), S(n.id)), a.default.saveDraft(e.channel_id, t.text, u.DraftType.ChannelMessage)
                }
            }

            function S(e) {
                d.default.getMessages(e).hasMoreAfter ? s.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : o.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        214533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            let i = /[<>:"/\\|?*\.]/g;
            var a = function(e) {
                return e.replaceAll(i, "").trim().replaceAll(" ", "_")
            }
        },
        825249: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("224022"),
                a = n("188304"),
                s = n("311545"),
                r = n("262047"),
                l = n("565639"),
                u = n("407807"),
                d = n("642174"),
                o = n("84819"),
                c = n("401398"),
                f = n("467006"),
                _ = n("30175");

            function E(e) {
                let {
                    sourceName: t,
                    sourceApplicationId: n
                } = function(e) {
                    if (null != e) {
                        let {
                            ownerId: t
                        } = a.decodeStreamKey(e);
                        if (t !== r.default.getId()) {
                            let e = l.default.getActivities(t).find(e => e.type === f.ActivityTypes.PLAYING);
                            return {
                                sourceName: e?.name,
                                sourceApplicationId: e?.application_id
                            }
                        }
                    }
                    let t = s.default.getStreamerActiveStreamMetadata(),
                        n = t?.pid,
                        u = null != t ? null != n ? i.default.getGameForPID(n) : null : i.default.getVisibleGame();
                    return {
                        sourceName: t?.sourceName ?? u?.name,
                        sourceApplicationId: t?.id ?? u?.id
                    }
                }(e), E = u.default.getChannelId(), p = [r.default.getId()];
                return null != E && (p = Object.keys(d.default.getVoiceStatesForChannel(E))), {
                    id: o.default.fromTimestamp(Date.now()),
                    version: c.CURRENT_CLIP_METADATA_VERSION,
                    applicationName: t ?? _.default.Messages.CLIPS_UNKNOWN_SOURCE,
                    applicationId: n,
                    users: p,
                    clipMethod: "manual",
                    length: 0,
                    thumbnail: ""
                }
            }
        },
        490124: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateClipMetadata: function() {
                    return r
                }
            });
            var i = n("401398");
            let a = [e => {
                    let t = {
                        ...e,
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    };
                    return delete t.gameName, t
                }, e => ({
                    ...e,
                    version: 2,
                    name: e.name.startsWith("Clip - ") ? void 0 : e.name
                }), e => ({
                    ...e,
                    version: 3,
                    name: "" === e.name ? void 0 : e.name
                })],
                s = null;
            async function r(e) {
                var t;
                let r = (await n.el("490124@2437:2458").then(n.t.bind(n, "826753", 23))).default;
                let l = (t = r, null != s ? s : s = t.object({
                    id: t.string().required(),
                    version: t.number().positive().integer().min(0).max(i.CURRENT_CLIP_METADATA_VERSION).optional(),
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
                    r.assert(e, l);
                    return null == e.version && (e.version = 0), a.slice(e.version).reduce((e, t) => t(e), e)
                } catch (e) {
                    return null
                }
            }
        },
        334258: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearClipsSession: function() {
                    return W
                },
                clearNewClipIds: function() {
                    return q
                },
                deleteClip: function() {
                    return K
                },
                dismissClipsUserEducation: function() {
                    return j
                },
                dismissSaveClipAnimation: function() {
                    return x
                },
                exportClip: function() {
                    return Y
                },
                loadClipsDirectory: function() {
                    return $
                },
                saveClip: function() {
                    return B
                },
                updateAllowVoiceRecording: function() {
                    return U
                },
                updateClipMetadata: function() {
                    return H
                },
                updateClipsEnabled: function() {
                    return O
                },
                updateClipsLength: function() {
                    return F
                },
                updateClipsQuality: function() {
                    return G
                },
                updateClipsStorageLocation: function() {
                    return P
                },
                updateDecoupledClipsEnabled: function() {
                    return M
                },
                updateRemindersEnabled: function() {
                    return w
                },
                updateViewerClipsEnabled: function() {
                    return V
                }
            }), n("653041");
            var i = n("325091"),
                a = n("352110"),
                s = n("599187"),
                r = n("312916"),
                l = n("99588"),
                u = n("958214"),
                d = n("224022"),
                o = n("188304"),
                c = n("894262"),
                f = n("408438"),
                _ = n("259537"),
                E = n("595407"),
                p = n("311545"),
                S = n("262047"),
                g = n("386130"),
                m = n("69046"),
                T = n("693873"),
                h = n("328470"),
                I = n("501769"),
                C = n("552091"),
                A = n("957390"),
                y = n("214533"),
                D = n("825249"),
                N = n("490124"),
                R = n("996771"),
                v = n("476706"),
                L = n("401398"),
                b = n("467006");

            function U(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                _.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = s.BoolValue.create({
                        value: t
                    })
                }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), h.default.track(b.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function O(e) {
                let {
                    clipsEnabled: t,
                    guildId: n,
                    trackAnalytics: i = !1
                } = e;
                await r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsEnabled: t,
                        ...!t && {
                            decoupledClipsEnabled: !1
                        }
                    }
                }), i && h.default.track(b.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function M(e) {
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
                }), n && h.default.track(b.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function w(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        remindersEnabled: e
                    }
                })
            }

            function P(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function G(e) {
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function F(e) {
                r.default.dispatch({
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
                r.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: t
                    }
                }), n && h.default.track(b.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    viewer_clips_enabled: t
                })
            }

            function Q(e, t) {
                let n = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let i = t.framesEncodedByEncoder[e],
                        a = (0, u.parseEncoder)(e),
                        s = n.get(a) ?? 0;
                    n.set(a, s + i)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: n.get(u.Encoders.NVIDIA_CUDA) ?? 0,
                    frames_encoded_nvidia_direct3d: n.get(u.Encoders.NVIDIA_DIRECT_3D) ?? 0,
                    frames_encoded_openh264: n.get(u.Encoders.OPENH264) ?? 0,
                    frames_encoded_videotoolbox: n.get(u.Encoders.VIDEOTOOLBOX) ?? 0,
                    frames_encoded_amd_direct3d: n.get(u.Encoders.AMD_DIRECT_3D) ?? 0,
                    frames_encoded_intel: n.get(u.Encoders.INTEL) ?? 0,
                    frames_encoded_intel_direct3d: n.get(u.Encoders.INTEL_DIRECT_3D) ?? 0,
                    frames_encoded_uncategorized: n.get(u.Encoders.UNCATEGORIZED) ?? 0,
                    frames_encoded_unknown: n.get(u.Encoders.UNKNOWN) ?? 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: A.default.getSettings().clipsLength,
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
            async function k(e) {
                let t = A.default.getSettings().storageLocation,
                    n = (0, D.default)(e),
                    i = `${(0,y.default)(n.applicationName.substring(0,20))}_${n.id}.mp4`,
                    a = l.default.fileManager.join(t, i),
                    s = g.default.getMediaEngine(),
                    u = JSON.stringify(n),
                    d = null != e ? (0, o.decodeStreamKey)(e).ownerId : void 0,
                    c = function(e) {
                        let t, n, i;
                        if (null != e) {
                            t = null != e ? m.default.getRTCConnection(e) : null;
                            let a = (0, o.decodeStreamKey)(e);
                            n = a.guildId, i = a.channelId
                        } else {
                            let e = S.default.getId(),
                                a = p.default.getActiveStreamForUser(e, null);
                            t = null != a ? m.default.getRTCConnection((0, o.encodeStreamKey)(a)) : null, n = a?.guildId, i = a?.channelId
                        }
                        let a = t?.analyticsContext?.streamApplication;
                        return {
                            rtc_connection_id: t?.getRTCConnectionId(),
                            media_session_id: t?.getMediaSessionId(),
                            parent_media_session_id: t?.parentMediaSessionId,
                            guild_id: n,
                            channel_id: i,
                            application_id: a?.id,
                            application_name: a?.name
                        }
                    }(e);
                null != e && r.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                    clip: {
                        ...n,
                        filepath: a
                    }
                });
                try {
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: i
                    } = await (null != d ? s.saveClipForUser(d, a, u) : s.saveClip(a, u)), r = Q(c, i);
                    r.clip_save_time_ms = i.clipSaveTimeMs, r.clip_size_bytes = i.clipSizeBytes, null != i.viewerDecodeFps && (r.decode_fps_during_clip = i.viewerDecodeFps, r.encode_fps_during_clip = i.viewerEncodeFps, r.target_fps = null), h.default.track(b.AnalyticEvents.CLIP_SAVED, r);
                    let o = await (null != l.default.clips.getClipProtocolURLFromPath ? (0, v.createThumbnailFromVideo)(l.default.clips.getClipProtocolURLFromPath(a), 0) : (0, v.createImageFromUint8Array)(t));
                    return n.thumbnail = o, n.length = e, L.ClipsLogger.info(`Clip save succeeded with ${e}ms and thumbnail ${o?.length??0} bytes thumbnail.`), await s.updateClipMetadata(a, JSON.stringify(n)), {
                        ...n,
                        filepath: a
                    }
                } catch (i) {
                    if (null != e && r.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                            clipId: n.id
                        }), !("errorMessage" in i)) throw h.default.track(b.AnalyticEvents.CLIP_SAVE_FAILURE, c), i;
                    let t = Q(c, i);
                    throw t.error_at = i.errorAt, t.error_message = i.errorMessage, h.default.track(b.AnalyticEvents.CLIP_SAVE_FAILURE, t), i.errorMessage
                }
            }
            async function B(e) {
                let {
                    enableDecoupledGameClipping: t
                } = c.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableViewerClipping: n
                } = f.default.getCurrentConfig({
                    location: "SaveClip"
                }, {
                    autoTrackExposure: !1
                });
                if (A.default.getIsAtMaxSaveClipOperations()) return;
                let s = A.default.getSettings().clipsEnabled && null != p.default.getCurrentUserActiveStream(),
                    l = t && A.default.getSettings().decoupledClipsEnabled && d.default.getVisibleGame()?.windowHandle != null && g.default.hasClipsSource(),
                    u = null != e && null != p.default.getActiveStreamForStreamKey(e) && n;
                if (!s && !l && !u) return;
                let _ = p.default.getCurrentUserActiveStream(),
                    E = null != _ ? (0, o.encodeStreamKey)(_) : void 0,
                    m = e ?? E,
                    h = (() => {
                        let e = null != m ? (0, o.decodeStreamKey)(m).ownerId : void 0;
                        return e === S.default.getId() ? L.ClipSaveTypes.STREAMER : null != e ? L.ClipSaveTypes.VIEWER : L.ClipSaveTypes.DECOUPLED
                    })(),
                    I = await (async () => {
                        if (null == m) return;
                        let {
                            ownerId: e,
                            guildId: t
                        } = (0, o.decodeStreamKey)(m), n = T.default.getStreamId(e, t, i.MediaEngineContextTypes.STREAM);
                        if (null != n) try {
                            let e = (0, a.getVoiceEngine)(),
                                t = await e.getNextVideoOutputFrame(n);
                            return (0, v.createImageFromImageData)(t)
                        } catch (e) {
                            return
                        }
                    })();
                r.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START",
                    clipType: h,
                    streamKey: m,
                    thumbnail: I
                });
                let y = (0, C.playSound)("clip_save", .5),
                    D = performance.now();
                try {
                    let e = await k(m);
                    r.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: e
                    })
                } catch (e) {
                    L.ClipsLogger.error("Clip Failed to Save", e), y?.stop(), (0, C.playSound)("clip_error", .5), r.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                L.ClipsLogger.info(`${A.default.getSettings().clipsLength/1e3}s clip save took ${Math.round(performance.now()-D)}ms`)
            }

            function x(e, t) {
                r.default.dispatch({
                    type: "CLIPS_SAVE_ANIMATION_END",
                    streamKey: e,
                    timestamp: t
                })
            }
            async function H(e, t) {
                let n = A.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let i = {
                    ...n,
                    ...t
                };
                null != await (0, N.validateClipMetadata)(i) && (await g.default.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)), h.default.track(b.AnalyticEvents.CLIP_EDITED, {
                    clip_id: i.id
                }), r.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: i
                }))
            }

            function W() {
                r.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function q() {
                r.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function $(e) {
                if (!(0, I.isDesktop)() || l.default.clips?.loadClipsDirectory == null) return;
                let t = await l.default.clips.loadClipsDirectory(e),
                    n = [];
                for (let e of t) {
                    let t = await (0, N.validateClipMetadata)({
                        ...e.metadata,
                        filepath: e.filepath
                    });
                    null != t && n.push(t)
                }
                r.default.dispatch({
                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                    clips: n
                })
            }
            async function K(e) {
                (0, I.isDesktop)() && l.default.clips?.deleteClip != null && (await l.default.clips.deleteClip(e), r.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function Y(e, t) {
                let n = g.default.getMediaEngine(),
                    i = await n.exportClip(e.filepath, t);
                return (0, R.default)(i)
            }

            function j(e) {
                r.default.dispatch({
                    type: "CLIPS_DISMISS_EDUCATION",
                    educationType: e
                })
            }
        },
        996771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("268111"), n("941497"), n("744285"), n("492257"), n("873817");
            var i = n("512722"),
                a = n.n(i),
                s = n("735630"),
                r = n.n(s);
            async function l(e) {
                let t;
                let n = r().createFile(!1),
                    i = new Promise(e => {
                        n.onReady = e
                    }),
                    s = await e.arrayBuffer();
                for (let e of (s.fileStart = 0, n.appendBuffer(s), n.flush(), await i, a()(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let l = e.slice(0, t, e.type),
                    u = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([l, new Uint8Array([0, 0, 0, 24]), u], {
                    type: e.type
                })
            }
        },
        476706: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createImageFromImageData: function() {
                    return s
                },
                createImageFromUint8Array: function() {
                    return a
                },
                createThumbnailFromVideo: function() {
                    return r
                }
            });
            var i = n("401398");
            async function a(e) {
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

            function s(e) {
                let t = document.createElement("canvas");
                t.width = e.width, t.height = e.height;
                let n = t.getContext("2d");
                if (null == n) throw Error("Could not create canvas context");
                return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
            }
            async function r(e, t) {
                let n = document.createElement("video");
                n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
                let a = i.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
                    s = Math.min(a, i.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight),
                    r = n.videoWidth * s,
                    l = n.videoHeight * s,
                    u = document.createElement("canvas");
                u.width = r, u.height = l;
                let d = u.getContext("2d");
                if (null == d) throw Error("Could not create canvas context");
                return d.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, r, l), u.toDataURL("image/jpeg", .9)
            }
        },
        617054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearAnalyticsLog: function() {
                    return l
                },
                toggleDisplayDevTools: function() {
                    return r
                },
                updateDevToolsSettings: function() {
                    return s
                }
            });
            var i = n("312916"),
                a = n("998470");

            function s(e) {
                i.default.dispatch({
                    type: "DEV_TOOLS_SETTINGS_UPDATE",
                    settings: e
                })
            }

            function r() {
                s({
                    displayTools: !a.default.displayTools
                })
            }

            function l() {
                i.default.dispatch({
                    type: "ANALYTICS_LOG_CLEAR"
                })
            }
        },
        998470: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var i = n("661223"),
                a = n("312916"),
                s = n("998580");
            let r = 360,
                l = {
                    sidebarWidth: 360,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                };
            class u extends i.default.DeviceSettingsStore {
                static #e = this.displayName = "DevToolsSettingsStore";
                static #t = this.persistKey = "DevToolsSettingsStore";
                initialize(e) {
                    l = e ?? l, a.default.actionLogger.persist = s.default.isDeveloper
                }
                getUserAgnosticState() {
                    return l
                }
                get sidebarWidth() {
                    return this.displayTools ? l.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    return l.lastOpenTabId ?? null
                }
                get displayTools() {
                    return s.default.isDeveloper && l.displayTools
                }
                get showDevWidget() {
                    return s.default.isDeveloper && l.showDevWidget
                }
                get devWidgetPosition() {
                    return l.devWidgetPosition
                }
            }
            var d = new u(a.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    s.default.isDeveloper && (l = {
                        ...l,
                        ...e.settings
                    })
                }
            })
        },
        989846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("653041");
            var i = n("392711"),
                a = n.n(i),
                s = n("297483"),
                r = n("343720"),
                l = n("786649"),
                u = n("610043"),
                d = n("417223"),
                o = n("328470"),
                c = n("84819"),
                f = n("467006"),
                _ = n("587361");

            function E(e, t, n) {
                let i = a().flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = [...t, ...u.default.getVocalChannelIds(e)],
                        i = l.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        let t = i[e] ?? {};
                        for (let e in t) n.push(e)
                    }
                    return n
                }).map(e => ({
                    channelId: e,
                    readStateType: _.ReadStateTypes.CHANNEL,
                    messageId: d.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    i.push({
                        channelId: c.default.castGuildIdAsReadStateChannelId(e),
                        readStateType: _.ReadStateTypes.GUILD_EVENT,
                        messageId: d.default.lastMessageId(e, _.ReadStateTypes.GUILD_EVENT)
                    }), i.push({
                        channelId: c.default.castGuildIdAsReadStateChannelId(e),
                        readStateType: _.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: r.default.ackIdForGuild(e)
                    })
                }), o.default.track(f.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, s.bulkAck)(i, n)
            }
        },
        76590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("516086").createExperiment)({
                kind: "guild",
                id: "2023-03_onboarding_upsell_lifecycle",
                label: "Onboarding Upsell Lifecycle",
                defaultConfig: {
                    showLifecycleUpsells: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show new lifecycle upsells",
                    config: {
                        showLifecycleUpsells: !0
                    }
                }]
            })
        },
        210203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissedGuildOnboardingUpsell: function() {
                    return T
                },
                shouldShowGuildOnboardingUpsell: function() {
                    return m
                }
            });
            var i = n("913527"),
                a = n.n(i),
                s = n("310057"),
                r = n("378813"),
                l = n("87727"),
                u = n("259537"),
                d = n("991400"),
                o = n("327271"),
                c = n("84819"),
                f = n("76590"),
                _ = n("23650"),
                E = n("467006"),
                p = n("854507");
            let S = [s.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
                g = [0, 1, 7];

            function m(e, t) {
                let n = o.default.getGuilds(),
                    i = c.default.entries(n).some(e => {
                        let [t, n] = e, i = (0, _.isGuildOnboardingSettingsAvailable)(t), a = n.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                        return i && a
                    });
                if (i || !(0, _.isGuildOnboardingSettingsAvailable)(e)) return !1;
                let s = d.default.settings.userContent?.guildOnboardingUpsellDismissedAt,
                    u = null != s ? r.Timestamp.toDate(s) : void 0,
                    p = null != u ? a()().diff(u, "days") : null,
                    m = S.indexOf(t);
                if (-1 === m || !(null == p || p > g[m]) || S.find(e => !(0, l.isDismissibleContentDismissed)(e)) !== t) return !1;
                let {
                    showLifecycleUpsells: T
                } = f.default.getCurrentConfig({
                    guildId: e,
                    location: "7f5b67_1"
                }, {
                    disable: i || !(0, _.isGuildOnboardingSettingsAvailable)(e),
                    autoTrackExposure: !0
                });
                return T
            }

            function T(e, t) {
                let n = r.Timestamp.now();
                u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
                    e.guildOnboardingUpsellDismissedAt = n
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, l.markDismissibleContentAsDismissed)(t, {
                    forceTrack: !0,
                    dismissAction: p.ContentDismissActionType.AUTO,
                    guildId: e
                })
            }
        },
        701166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("963694"),
                a = n("422557"),
                s = n("632706"),
                r = n("62470"),
                l = n("668030");
            let u = {},
                d = new Set,
                o = async e => {
                    if (0 !== r.default.getGuildScheduledEventsForGuild(e).length) {
                        if (!d.has(e)) try {
                            await l.default.getGuildEventsForCurrentUser(e), d.add(e)
                        } catch (e) {}
                    }
                };
            class c extends i.default {
                async getGuildEventUserCounts(e, t, n) {
                    let i = n.filter(n => null == u[`${e}-${t}-${n}`] || Date.now() - u[`${e}-${t}-${n}`] > 18e5);
                    if (!(Date.now() - u[`${e}-${t}`] < 18e5) || 0 !== i.length) {
                        u[`${e}-${t}`] = Date.now(), i.forEach(n => u[`${e}-${t}-${n}`] = Date.now());
                        try {
                            await l.default.fetchGuildEventUserCounts(e, t, i)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, n) {
                    return l.default.fetchUsersForGuildEvent(e, t, n)
                }
                getGuildEventsForCurrentUser(e) {
                    return o(e)
                }
                handleConnectionOpen() {
                    d.clear(), u = {};
                    let e = (0, a.isInMainTabsExperiment)(),
                        t = s.default.getLastSelectedGuildId();
                    e && null != t && r.default.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    d.delete(t), delete u[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    d.delete(n), delete u[n]
                }
                handleInviteResolveSuccess(e) {
                    let {
                        invite: t
                    } = e, n = t.guild_scheduled_event, i = t.guild?.id;
                    null != n && null != i && o(i)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null != t) r.default.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var f = new c
        },
        21183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return E
                },
                cleanupMessageReminders: function() {
                    return m
                },
                completeMessageReminders: function() {
                    return g
                },
                fetchAndUpdateSavedMessages: function() {
                    return I
                },
                toggleMessageReminders: function() {
                    return S
                },
                updateReminderDueAt: function() {
                    return p
                }
            });
            var i = n("454836"),
                a = n("312916"),
                s = n("741312"),
                r = n("731865"),
                l = n("327271"),
                u = n("606929"),
                d = n("871831"),
                o = n("328470"),
                c = n("210002"),
                f = n("66725"),
                _ = n("467006");

            function E(e, t) {
                o.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: `${c.default.getMessageReminders().length}`
                }), h([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = r.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = l.default.getGuild(t.guild_id),
                            i = "",
                            a = (0, s.computeChannelName)(t, d.default, u.default, !0);
                        if (t.isPrivate()) i = a;
                        else if (t.isThread()) {
                            let e = r.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, s.computeChannelName)(e, d.default, u.default, !0);
                            i = `${n} > ${a}`
                        } else i = a;
                        let o = `${e.content.length>0?e.content:`${e.attachments.length} attachments`}`;
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: i,
                            messageSummary: o.length > 200 ? `${o.slice(0,197)}...` : o,
                            guildId: n?.id
                        }
                    }(e)
                }], [])
            }

            function p(e, t) {
                o.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: `${c.default.getMessageReminders().length}`
                });
                let n = c.default.getMessageReminders().find(t => t.messageId === e);
                null != n && h([{
                    ...n,
                    savedAt: new Date,
                    dueAt: t
                }], [n])
            }

            function S(e, t) {
                o.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: `${c.default.getMessageReminders().length}`
                }), a.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function g(e) {
                o.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: `${c.default.getMessageReminders().length}`
                }), h([], c.default.getMessageReminders().filter(t => t.messageId === e))
            }

            function m() {
                o.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: `${c.default.getMessageReminders().length}`
                });
                let e = c.default.getMessageReminders();
                e.some(e => e.complete) && h([], e.filter(e => e.complete))
            }

            function T(e) {
                o.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: `${c.default.getMessageReminders().length}`
                }), a.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function h(e, t) {
                (0 !== e.length || 0 !== t.length) && i.default.post({
                    url: _.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(f.savedMessageToServer),
                        removed: t.map(f.savedMessageToServer)
                    }
                }).then(e => {
                    T(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }

            function I() {
                return c.default.recentlyFetched() ? Promise.resolve() : i.default.get({
                    url: _.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    T(e.body.saved_messages.map(f.savedMessageToClient))
                })
            }
        },
        179455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("516086").createExperiment)({
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
            })
        },
        210002: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("661223"),
                a = n("312916"),
                s = n("152551");
            let r = [],
                l = new Set,
                u = 0;
            class d extends i.default.Store {
                static #e = this.displayName = "MessageRemindersStore";
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * s.default.Millis.MINUTE)
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
                    return new Date().getTime() - u < 1 * s.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return l.has(e)
                }
                getState() {
                    return {
                        messages: r
                    }
                }
            }
            var o = new d(a.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), r = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && l.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && l.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, i = r.findIndex(e => e.messageId === t);
                    if (-1 === i) return !1;
                    r[i] = {
                        ...r[i],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    l.add(t)
                }
            })
        },
        66725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return u
                },
                savedMessageHasMetadata: function() {
                    return l
                },
                savedMessageToClient: function() {
                    return r
                },
                savedMessageToServer: function() {
                    return s
                }
            });
            var i = n("152551"),
                a = n("30175");

            function s(e) {
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
                    due_at: e.dueAt?.toISOString()
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

            function l(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let u = [{
                duration: i.default.Millis.HOUR,
                getLabel: () => a.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * i.default.Millis.HOUR,
                getLabel: () => a.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * i.default.Millis.HOUR,
                getLabel: () => a.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: i.default.Millis.DAY,
                getLabel: () => a.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: i.default.Millis.WEEK,
                getLabel: () => a.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        70758: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("653041");
            var i = n("31775"),
                a = n.n(i),
                s = n("963694"),
                r = n("328470"),
                l = n("84819"),
                u = n("467006");
            class d extends s.default {
                handleMessageBecameVisible(e) {
                    let {
                        messageId: t
                    } = e;
                    if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
                    let n = this.recentViewTimes.get(t);
                    if (null != n && Date.now() - n < 6e4) return;
                    let i = setTimeout(() => {
                        delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
                    }, 1e3);
                    this.currentlyVisibleMessageTimers[t] = i
                }
                handleMessageLostVisibility(e) {
                    let t = this.currentlyVisibleMessageTimers[e];
                    null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
                }
                handleMessageListVisibilityChange(e) {
                    for (let t of e) this.handleMessageBecameVisible(t);
                    let t = new Set(e.map(e => e.messageId));
                    for (let e of l.default.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e)
                }
                handleChannelSelect() {
                    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
                    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                }
                drainBuffer() {
                    for (let e of this.batchBuffer) r.default.track(u.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                        message_id: e.messageId,
                        channel_id: e.channelId,
                        guild_id: e.guildId,
                        source_channel_id: e.sourceChannelId,
                        source_guild_id: e.sourceGuildId
                    });
                    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                }
                bufferViewTrack(e) {
                    this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
                }
                constructor(...e) {
                    super(...e), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new(a())({
                        max: 500,
                        maxAge: 6e4
                    }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                        CHANNEL_SELECT: () => this.handleChannelSelect()
                    }
                }
            }
            var o = new d
        },
        532477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return u
                },
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return l
                }
            });
            var i = n("516086"),
                a = n("467006");
            let s = (0, i.createExperiment)({
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
                r = (0, i.createExperiment)({
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

            function l(e) {
                let {
                    voiceChannelActivityNotifsEnabled: t
                } = r.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: e?.getGuildId() ?? a.EMPTY_STRING_SNOWFLAKE_ID
                }, {
                    disable: e?.type !== a.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: n
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: e?.type !== a.ChannelTypes.GUILD_VOICE || !t,
                    autoTrackExposure: !0
                });
                return e?.type === a.ChannelTypes.GUILD_VOICE && t && n
            }

            function u(e) {
                let {
                    voiceChannelActivityNotifsEnabled: t
                } = r.getCurrentConfig({
                    guildId: e?.getGuildId() ?? a.EMPTY_STRING_SNOWFLAKE_ID,
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return t
            }
        },
        59526: function(e, t, n) {
            "use strict";
            var i, a, s, r;
            n.r(t), n.d(t, {
                CONTROL_CHARACTERS_CODE: function() {
                    return c
                },
                EditState: function() {
                    return i
                },
                MAX_DISPLAY_NAME_LENGTH: function() {
                    return d
                },
                POMELO_KEYWORD: function() {
                    return o
                },
                PomeloEntrypoints: function() {
                    return a
                },
                TIMEOUT_TIME: function() {
                    return f
                },
                coalescePeriods: function() {
                    return u
                },
                dirtyChars: function() {
                    return l
                }
            });
            let l = /([^A-Za-z0-9_.]+)/g,
                u = /\.+/g;
            (s = i || (i = {})).NONE = "none", s.EDIT_DISPLAY_NAME = "display-name", s.EDIT_USERNAME = "username", s.PREVIEW = "preview", s.SUGGESTION = "suggestion", (r = a || (a = {})).APP_START = "app start", r.NOTICE = "notice", r.USER_SETTINGS = "user settings", r.USER_SETTINGS_EDIT = "user settings edit", r.YOU_TAB = "you tab";
            let d = 32,
                o = "pomelo",
                c = [1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440],
                f = 2e3
        },
        397341: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                experiment: function() {
                    return i
                },
                getPomeloEligibility: function() {
                    return s
                },
                usePomeloEligibility: function() {
                    return a
                }
            });
            let i = (0, n("516086").createExperiment)({
                    kind: "user",
                    label: "Pomelo",
                    id: "2023-03_pomelo",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = () => {
                    let {
                        enabled: e
                    } = i.useExperiment({
                        location: "faf26d_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                s = () => {
                    let {
                        enabled: e
                    } = i.getCurrentConfig({
                        location: "faf26d_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        995533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForceMigration: function() {
                    return s
                },
                useForceMigration: function() {
                    return a
                }
            });
            let i = (0, n("516086").createExperiment)({
                    kind: "user",
                    id: "2024-01_uu_forced_migration",
                    label: "Unique Username Forced Migration UI",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Forced Migration UI",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = () => {
                    let {
                        enabled: e
                    } = i.useExperiment({
                        location: "force_migration"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                s = () => {
                    let {
                        enabled: e
                    } = i.getCurrentConfig({
                        location: "force_migration"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        458867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("735250");
            n("470079");
            var a = n("974328");
            async function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                await (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("458867@364:387").then(n.bind(n, "727149"));
                    return n => (0, i.jsx)(a, {
                        source: e,
                        oneClickFlow: t,
                        ...n
                    })
                })
            }
        },
        630082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                claimQuestRewardCode: function() {
                    return _
                },
                completeQuestPreview: function() {
                    return g
                },
                dismissProgressTrackingFailureNotice: function() {
                    return S
                },
                dismissQuestContent: function() {
                    return p
                },
                enrollInQuest: function() {
                    return f
                },
                fetchCurrentQuests: function() {
                    return o
                },
                fetchQuestRewardCode: function() {
                    return E
                },
                resetQuestDismissibilityStatus: function() {
                    return T
                },
                resetQuestPreviewStatus: function() {
                    return m
                },
                sendHeartbeat: function() {
                    return c
                }
            });
            var i = n("454836"),
                a = n("312916"),
                s = n("648519"),
                r = n("375844"),
                l = n("211589"),
                u = n("143624"),
                d = n("467006");
            async function o() {
                if (!l.default.isFetchingCurrentQuests) {
                    a.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
                    });
                    try {
                        let e = (await i.default.get({
                            url: d.Endpoints.QUESTS_CURRENT_QUESTS
                        })).body.quests.map(e => (0, u.questWithUserStatusFromServer)(e)).filter(e => e.userStatus?.claimedAt != null || e.config.rewardCodePlatforms.length > 0);
                        a.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                            quests: e
                        })
                    } catch (e) {
                        a.default.dispatch({
                            type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                            error: new s.default(e)
                        })
                    }
                }
            }
            async function c(e) {
                let {
                    questId: t,
                    streamKey: n,
                    applicationId: r
                } = e;
                try {
                    let e = await i.default.post({
                        url: d.Endpoints.QUESTS_HEARTBEAT(t),
                        body: {
                            stream_key: n,
                            application_id: r
                        }
                    });
                    a.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                        userStatus: (0, u.questUserStatusFromServer)(e.body),
                        applicationId: r,
                        questId: t,
                        streamKey: n
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                        error: new s.default(e),
                        questId: t,
                        streamKey: n
                    })
                }
            }
            async function f(e, t) {
                if (null != t.questContentCTA && (0, r.trackQuestContentClicked)(e, t.questContent, t.questContentCTA), !l.default.isEnrolling(e)) {
                    a.default.dispatch({
                        type: "QUESTS_ENROLL_BEGIN",
                        questId: e
                    });
                    try {
                        let n = await i.default.post({
                            url: d.Endpoints.QUESTS_ENROLL(e),
                            body: {
                                location: t.questContent
                            }
                        });
                        a.default.dispatch({
                            type: "QUESTS_ENROLL_SUCCESS",
                            enrolledQuestUserStatus: (0, u.questUserStatusFromServer)(n.body)
                        })
                    } catch (t) {
                        a.default.dispatch({
                            type: "QUESTS_ENROLL_FAILURE",
                            questId: e
                        })
                    }
                }
            }
            async function _(e, t, n) {
                if (!l.default.isClaimingRewardCode(e)) {
                    a.default.dispatch({
                        type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
                        questId: e
                    });
                    try {
                        let s = await i.default.post({
                            url: d.Endpoints.QUESTS_REWARD_CODE(e),
                            body: {
                                platform: t,
                                location: n
                            }
                        });
                        a.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
                            questId: e,
                            rewardCode: (0, u.questsRewardCodeFromServer)(s.body)
                        })
                    } catch (t) {
                        throw a.default.dispatch({
                            type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
                            error: new s.default(t),
                            questId: e
                        }), t
                    }
                }
            }
            async function E(e) {
                if (!l.default.isFetchingRewardCode(e)) {
                    a.default.dispatch({
                        type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
                        questId: e
                    });
                    try {
                        let t = await i.default.get({
                            url: d.Endpoints.QUESTS_REWARD_CODE(e)
                        });
                        a.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                            questId: e,
                            rewardCode: (0, u.questsRewardCodeFromServer)(t.body)
                        })
                    } catch (t) {
                        throw a.default.dispatch({
                            type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                            error: new s.default(t),
                            questId: e
                        }), t
                    }
                }
            }
            async function p(e, t) {
                if (!l.default.isDismissingContent(e)) {
                    a.default.dispatch({
                        type: "QUESTS_DISMISS_CONTENT_BEGIN",
                        questId: e,
                        content: t
                    });
                    try {
                        let n = await i.default.post({
                            url: d.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
                            body: {}
                        });
                        a.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                            dismissedQuestUserStatus: (0, u.questUserStatusFromServer)(n.body)
                        })
                    } catch (t) {
                        a.default.dispatch({
                            type: "QUESTS_DISMISS_CONTENT_FAILURE",
                            error: new s.default(t),
                            questId: e
                        })
                    }
                }
            }

            function S(e) {
                a.default.dispatch({
                    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
                    streamKey: e
                })
            }
            async function g(e) {
                try {
                    let t = await i.default.post({
                        url: d.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
                        body: {}
                    });
                    a.default.dispatch({
                        type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                        previewQuestUserStatus: (0, u.questUserStatusFromServer)(t.body)
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                        error: new s.default(t),
                        questId: e
                    })
                }
            }
            async function m(e) {
                try {
                    let t = await i.default.delete({
                        url: d.Endpoints.QUESTS_PREVIEW_STATUS(e),
                        body: {}
                    });
                    a.default.dispatch({
                        type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                        previewQuestUserStatus: (0, u.questUserStatusFromServer)(t.body)
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                        error: new s.default(t),
                        questId: e
                    })
                }
            }
            async function T(e) {
                try {
                    let t = await i.default.delete({
                        url: d.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
                        body: {}
                    });
                    a.default.dispatch({
                        type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
                        previewQuestUserStatus: (0, u.questUserStatusFromServer)(t.body)
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "QUESTS_PREVIEW_UPDATE_FAILURE",
                        error: new s.default(t),
                        questId: e
                    })
                }
            }
        },
        126559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CONSECUTIVE_HEARTBEAT_PERIOD_MS: function() {
                    return u
                },
                DismissibleQuestContentFlags: function() {
                    return l
                },
                QuestsExperimentLocations: function() {
                    return a
                }
            });
            var i, a, s = n("152551"),
                r = n("545237");
            (i = a || (a = {})).ACTIVITY_PANEL = "quests_bar_activity_panel", i.QUESTS_MANAGER = "quests_manager", i.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", i.USE_QUESTS = "use_quests";
            let l = {
                    [r.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE]: 1,
                    [r.QuestContent.QUEST_BAR]: 2,
                    [r.QuestContent.ACTIVITY_PANEL]: 4,
                    [r.QuestContent.QUEST_LIVE_STREAM]: 8
                },
                u = 2 * s.default.Millis.MINUTE
        },
        763830: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIsEligibleForQuests: function() {
                    return s
                },
                useIsEligibleForQuests: function() {
                    return r
                }
            });
            var i = n("471154");
            let a = (0, n("516086").createExperiment)({
                    id: "2023-12_quests",
                    kind: "user",
                    label: "Quests",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 0,
                        label: "Control",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 1,
                        label: "Quests enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = e => {
                    let {
                        location: t,
                        autoTrackExposure: n
                    } = e, s = a.getCurrentConfig({
                        location: t
                    }, {
                        autoTrackExposure: n
                    }), r = i.default.getCurrentConfig({
                        location: t
                    }, {
                        autoTrackExposure: n
                    });
                    return s.enabled && !r.paymentsBlocked
                },
                r = e => {
                    let {
                        location: t,
                        autoTrackExposure: n
                    } = e, s = a.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: n
                    }), r = i.default.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: n
                    });
                    return s.enabled && !r.paymentsBlocked
                }
        },
        143624: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculatePercentComplete: function() {
                    return A
                },
                getContextualEntrypointHeading: function() {
                    return y
                },
                getGameLogotypeAssetUrl: function() {
                    return T
                },
                getGameTileAssetUrl: function() {
                    return m
                },
                getHeroAnimatedAssetUrl: function() {
                    return p
                },
                getHeroStaticAssetUrl: function() {
                    return E
                },
                getPlatformString: function() {
                    return C
                },
                getQuestBarAnimatedHeroAssetUrl: function() {
                    return g
                },
                getQuestBarStaticHeroAssetUrl: function() {
                    return S
                },
                getQuestByApplicationId: function() {
                    return u
                },
                getQuestForTargetedContent: function() {
                    return I
                },
                getQuestUrl: function() {
                    return h
                },
                getRewardAssetUrl: function() {
                    return _
                },
                includesTarget: function() {
                    return R
                },
                isDismissed: function() {
                    return N
                },
                isDismissible: function() {
                    return D
                },
                isQuestExpired: function() {
                    return d
                },
                questUserStatusFromServer: function() {
                    return o
                },
                questWithUserStatusFromServer: function() {
                    return c
                },
                questsRewardCodeFromServer: function() {
                    return f
                }
            });
            var i = n("984362"),
                a = n("545237"),
                s = n("126559"),
                r = n("30175");
            let l = "https://cdn.discordapp.com/assets/quests/";

            function u(e, t) {
                let n;
                for (let [i, a] of e)
                    if (a.config.applicationId === t && !d(a)) {
                        n = a;
                        break
                    } return n
            }

            function d(e) {
                return new Date(e.config.expiresAt).valueOf() <= Date.now()
            }

            function o(e) {
                return {
                    userId: e.user_id,
                    questId: e.quest_id,
                    enrolledAt: e.enrolled_at,
                    completedAt: e.completed_at,
                    claimedAt: e.claimed_at,
                    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
                    streamProgressSeconds: e.stream_progress_seconds,
                    dismissedQuestContent: e.dismissed_quest_content
                }
            }

            function c(e) {
                var t, n, i;
                return {
                    id: e.id,
                    preview: e.preview,
                    config: {
                        expiresAt: (t = e.config).expires_at,
                        streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                        gameTitle: t.game_title,
                        getGameLink: t.get_game_link,
                        applicationId: t.application_id,
                        applicationName: t.application_name,
                        messages: {
                            questName: (n = t.messages).quest_name,
                            rewardName: n.reward_name,
                            rewardNameWithArticle: n.reward_name_with_article,
                            rewardRedemptionInstructionsByPlatform: function(e) {
                                let t = {};
                                for (let n in e) {
                                    let i = parseInt(n);
                                    a.QUEST_REWARD_CODE_PLATFORMS_SET.has(i) && (t[i] = e[n])
                                }
                                return t
                            }(n.reward_redemption_instructions_by_platform),
                            gameTitle: n.game_title,
                            gamePublisher: n.game_publisher
                        },
                        colors: {
                            primary: (i = t.colors).primary,
                            secondary: i.secondary
                        },
                        rewardCodeExpiresAt: t.reward_code_expires_at,
                        rewardCodePlatforms: t.reward_code_platforms.filter(e => a.QUEST_REWARD_CODE_PLATFORMS_SET.has(e)),
                        videoAssets: t.video_assets
                    },
                    userStatus: null == e.user_status ? null : o(e.user_status),
                    targetedContent: e.targeted_content
                }
            }

            function f(e) {
                return {
                    userId: e.user_id,
                    questId: e.quest_id,
                    code: e.code,
                    platform: e.platform,
                    claimedAt: e.claimed_at
                }
            }
            let _ = e => `${l}${e}/reward.png`,
                E = e => `${l}${e}/hero.png`,
                p = e => `${l}${e}/hero.webm`,
                S = e => `${l}${e}/quests_bar_hero.png`,
                g = e => `${l}${e}/quests_bar_hero.webm`,
                m = e => `${l}${e}/game_tile.png`,
                T = (e, t) => `${l}${e}/${t}/game_logotype.png`,
                h = e => `${location.protocol}//${location.host}/quests/${e}`;

            function I(e, t) {
                for (let [n, i] of e)
                    if (i.targetedContent.includes(t)) return i;
                return null
            }
            let C = e => {
                switch (e) {
                    case a.QuestRewardCodePlatforms.XBOX:
                        return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
                    case a.QuestRewardCodePlatforms.PLAYSTATION:
                        return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
                    case a.QuestRewardCodePlatforms.SWITCH:
                        return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
                    case a.QuestRewardCodePlatforms.PC:
                        return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
                    case a.QuestRewardCodePlatforms.CROSS_PLATFORM:
                        return r.default.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM
                }
            };

            function A(e) {
                if (null == e.userStatus) return 0;
                let {
                    streamProgressSeconds: t,
                    completedAt: n
                } = e.userStatus;
                if (null != n) return 1;
                let {
                    streamDurationRequirementMinutes: i
                } = e.config;
                return Math.min(t / 60 / i, 1)
            }

            function y(e) {
                if (e.userStatus?.completedAt != null) return r.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
                if (e.userStatus?.enrolledAt != null) {
                    let t = A(e);
                    return t >= .75 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= .45 && t <= .55 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? r.default.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : r.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
                }
                return r.default.Messages.QUESTS_TITLE.format({
                    questName: e.config.messages.questName
                })
            }

            function D(e) {
                return e in s.DismissibleQuestContentFlags
            }

            function N(e, t) {
                return (0, i.hasFlag)(e.dismissedQuestContent, s.DismissibleQuestContentFlags[t])
            }

            function R(e, t) {
                return e.targetedContent.includes(t)
            }
        },
        395709: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("661223"),
                a = n("312916"),
                s = n("328470"),
                r = n("501769"),
                l = n("467006");
            let u = {
                    desktopType: r.isPlatformEmbedded ? l.DesktopNotificationTypes.ALL : l.DesktopNotificationTypes.NEVER,
                    disableAllSounds: !1,
                    disabledSounds: [],
                    ttsType: l.TTSNotificationTypes.NEVER,
                    disableUnreadBadge: !1,
                    taskbarFlash: !0,
                    notifyMessagesInSelectedChannel: !1
                },
                d = u;

            function o(e, t) {
                !__OVERLAY__ && s.default.track(e, t)
            }

            function c(e) {
                let {
                    desktopType: t
                } = e;
                d.desktopType = t, o(l.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    notifications_enabled: t === l.DesktopNotificationTypes.ALL
                })
            }
            class f extends i.default.DeviceSettingsStore {
                static #e = this.displayName = "NotificationSettingsStore";
                static #t = this.persistKey = "notifications";
                static #n = this.migrations = [e => {
                    let t = {
                        ...e
                    };
                    return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || l.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = r.isPlatformEmbedded ? l.DesktopNotificationTypes.ALL : l.DesktopNotificationTypes.NEVER), t
                }];
                initialize(e) {
                    d = {
                        ...u,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return d
                }
                getDesktopType() {
                    return d.desktopType
                }
                getTTSType() {
                    return d.ttsType
                }
                getDisabledSounds() {
                    return d.disabledSounds
                }
                getDisableAllSounds() {
                    return d.disableAllSounds
                }
                getDisableUnreadBadge() {
                    return d.disableUnreadBadge
                }
                getNotifyMessagesInSelectedChannel() {
                    return d.notifyMessagesInSelectedChannel
                }
                get taskbarFlash() {
                    return d.taskbarFlash
                }
                isSoundDisabled(e) {
                    return d.disableAllSounds || -1 !== d.disabledSounds.indexOf(e)
                }
            }
            var _ = new f(a.default, {
                NOTIFICATIONS_SET_DESKTOP_TYPE: c,
                NOTIFICATIONS_SET_TTS_TYPE: function(e) {
                    let {
                        ttsType: t
                    } = e;
                    d.ttsType = t
                },
                NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
                    let {
                        sounds: t
                    } = e;
                    d.disabledSounds = t
                },
                NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
                    d.disableAllSounds = !d.disableAllSounds
                },
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t,
                        source: n
                    } = e;
                    o(l.AnalyticEvents.ENABLE_NOTIFICATIONS, {
                        enabled: t === l.NotificationPermissionTypes.ENABLED,
                        source: n
                    }), t === l.NotificationPermissionTypes.BLOCKED ? c({
                        desktopType: l.DesktopNotificationTypes.NEVER
                    }) : t === l.NotificationPermissionTypes.ENABLED && c({
                        desktopType: l.DesktopNotificationTypes.ALL
                    })
                },
                NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
                    let {
                        disableUnreadBadge: t
                    } = e;
                    d.disableUnreadBadge = t
                },
                NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
                    let {
                        taskbarFlash: t
                    } = e;
                    d.taskbarFlash = t
                },
                NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
                    let {
                        notify: t
                    } = e;
                    d.notifyMessagesInSelectedChannel = t
                }
            })
        },
        450636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("735250");
            n("470079");
            var a = n("336328"),
                s = n("758831"),
                r = n("262113"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: a
                        })
                    })
                }, s.ScreenXIcon, void 0, {
                    size: 24
                })
        },
        635024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenXIcon: function() {
                    return r
                }
            });
            var i = n("735250");
            n("470079");
            var a = n("600186"),
                s = n("11768");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: l
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=51266.3248b945241f117311da.js.map