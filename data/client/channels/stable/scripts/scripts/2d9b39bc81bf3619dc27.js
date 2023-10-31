(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12925"], {
        987317: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("913144"),
                l = n("700507"),
                i = n("76393"),
                s = n("383294"),
                u = n("393414"),
                r = n("742171"),
                o = n("42203"),
                d = n("247013"),
                C = n("42887"),
                h = n("18494"),
                c = n("162771"),
                E = n("697218"),
                f = n("404008"),
                _ = n("450481"),
                p = n("49111"),
                N = {
                    selectChannel(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            messageId: l,
                            jumpType: i,
                            preserveDrawerState: s,
                            source: u
                        } = e;
                        a.default.dispatch({
                            type: "CHANNEL_SELECT",
                            guildId: t === p.ME ? null : t,
                            channelId: n,
                            messageId: l,
                            jumpType: i,
                            preserveDrawerState: s,
                            source: u
                        })
                    },
                    selectPrivateChannel(e) {
                        (0, u.transitionTo)(p.Routes.CHANNEL(p.ME, e))
                    },
                    selectVoiceChannel(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            l = o.default.getChannel(e),
                            i = null == l ? void 0 : l.getGuildId();
                        if ((null == l ? void 0 : l.isGuildVocal()) && (null == l ? void 0 : l.isNSFW()) && (!(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !d.default.didAgree(i))) {
                            (0, u.transitionTo)(p.Routes.CHANNEL(i, e));
                            return
                        }
                        C.default.isSupported() && (null != e && C.default.getMediaEngine().interact(), (0, _.selectVoiceChannelAdditional)(e, i, n, a))
                    },
                    disconnect() {
                        let e = i.default.getRemoteSessionId();
                        if (null != e && l.remoteDisconnect(e), (0, r.isVoicePanelEnabled)()) this.selectVoiceChannel(null);
                        else {
                            let e = o.default.getChannel(h.default.getChannelId()),
                                t = h.default.getChannelId() === h.default.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
                            if (this.selectVoiceChannel(null), s.close(p.PopoutWindowKeys.CHANNEL_CALL_POPOUT), t) {
                                let e = c.default.getGuildId();
                                null != e && (0, u.transitionTo)((0, f.previousTextChannelRouteForGuild)(e))
                            }
                        }
                    }
                }
        },
        450481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                selectVoiceChannelAdditional: function() {
                    return _
                }
            });
            var a = n("551042"),
                l = n("913144"),
                i = n("157186"),
                s = n("619395"),
                u = n("819450"),
                r = n("439141"),
                o = n("172538"),
                d = n("42203"),
                C = n("305961"),
                h = n("88093"),
                c = n("18494"),
                E = n("800762"),
                f = n("404008");
            let _ = function(e, t) {
                let _ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    N = d.default.getChannel(e),
                    T = E.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
                    g = null != N ? h.default.getCheck(N.guild_id) : null,
                    S = null != t && (0, i.shouldShowMembershipVerificationGate)(t);
                if (!S) {
                    if (null == g || g.canChat || (0, s.canLurkerListen)(N)) {
                        if (null != N && !T) {
                            let e = (0, f.isChannelFull)(N, E.default, C.default);
                            if (e && N.isGuildStageVoice() && (0, u.getStageHasMedia)(N.id)) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("374278").then(n.bind(n, "374278"));
                                    return t => e({
                                        channel: N,
                                        ...t
                                    })
                                });
                                return
                            }
                            if (e) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("440224").then(n.bind(n, "440224"));
                                    return t => e(t)
                                });
                                return
                            }
                        }
                        _ && (0, r.applyInitialVideoBackgroundOption)(), (0, o.default)(function() {
                            l.default.dispatch({
                                type: "VOICE_CHANNEL_SELECT",
                                guildId: t,
                                channelId: e,
                                currentVoiceChannelId: c.default.getVoiceChannelId(),
                                video: _,
                                stream: p
                            })
                        }, e, p, _)
                    }
                }
            }
        },
        899633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getIsSpeaking: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("235004"),
                i = n("18494"),
                s = n("280168"),
                u = n("800762");

            function r(e, t, n) {
                return e || t || n
            }

            function o(e) {
                var t, n, r;
                let {
                    userId: o,
                    checkSoundSharing: d = !1,
                    checkSoundboardSounds: C = !0,
                    checkIsMuted: h = !1,
                    context: c
                } = e, E = (0, a.useStateFromStores)([u.default, i.default], () => {
                    let e = i.default.getVoiceChannelId();
                    return null != e ? u.default.getVoiceStateForChannel(e, o) : null
                }), f = h && ((null == E ? void 0 : E.mute) || (null == E ? void 0 : E.selfMute)), _ = (0, a.useStateFromStores)([s.default], () => s.default.isSpeaking(o, c) && !f), p = (0, a.useStateFromStores)([s.default], () => s.default.isSoundSharing(o) && d), N = (0, a.useStateFromStores)([l.default], () => l.default.isUserPlayingSounds(o) && C);
                return t = _, n = N, r = p, t || n || r
            }

            function d(e) {
                var t, n, a;
                let {
                    userId: r,
                    checkSoundSharing: o = !1,
                    checkSoundboardSounds: d = !0,
                    checkIsMuted: C = !1,
                    context: h
                } = e, c = i.default.getVoiceChannelId(), E = null != c ? u.default.getVoiceStateForChannel(c, r) : null, f = C && ((null == E ? void 0 : E.mute) || (null == E ? void 0 : E.selfMute)), _ = s.default.isSpeaking(r, h) && !f, p = s.default.isSoundSharing(r) && o, N = l.default.isUserPlayingSounds(r) && d;
                return t = _, n = N, a = p, t || n || a
            }
        },
        390933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("522632"),
                l = n("872717"),
                i = n("605250"),
                s = n("49111");
            class u {
                async fetch(e, t, n) {
                    if (!this.isCanceled) try {
                        let l = await this.makeRequest();
                        if (null == l || this.isCanceled) return;
                        if (200 === l.status) e(l);
                        else if (202 === l.status) {
                            var a;
                            this.query.attempts = (null !== (a = this.query.attempts) && void 0 !== a ? a : 0) + 1;
                            let i = 1e3 * l.body.retry_after;
                            this.retryDelay = isNaN(i) || 0 === i ? 5e3 : i, this.retryLater(e, t, n), t(l)
                        }
                    } catch (e) {
                        new(0, i.default)("SearchFetcher").error(e), n(e)
                    }
                }
                cancel() {
                    this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
                }
                retryLater(e, t, n) {
                    null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
                }
                constructor(e, t, n) {
                    this.isCanceled = !1, this.searchId = e, this.searchType = t, this.query = n
                }
            }
            class r extends u {
                getEndpoint() {
                    switch (this.searchType) {
                        case s.SearchTypes.DMS:
                            return s.Endpoints.SEARCH_DMS;
                        case s.SearchTypes.GUILD:
                            if (null == this.searchId || "" === this.searchId) return;
                            return s.Endpoints.SEARCH_GUILD(this.searchId);
                        case s.SearchTypes.CHANNEL:
                            if (null == this.searchId || "" === this.searchId) return;
                            return s.Endpoints.SEARCH_CHANNEL(this.searchId);
                        default:
                            throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
                    }
                }
                makeRequest() {
                    let e = this.getEndpoint();
                    return null == e ? null : l.default.get({
                        url: e,
                        query: a.stringify(this.query),
                        oldFormErrors: !0
                    })
                }
            }
        },
        49978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("917351"),
                l = n.n(a),
                i = n("862337");
            class s {
                acknowledge(e) {
                    this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e)
                }
                flushRequests(e) {
                    if (0 === this._pendingRequests.size) return;
                    let t = [];
                    this._pendingRequests.forEach(e => {
                        !this._guildMemberExists(e) && (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), t.push(e))
                    }), t.length > 0 && e(this._guildId, t), this._pendingRequests.clear()
                }
                requestUnacknowledged() {
                    return 0 !== this._unacknowledgedRequests.size && (this._unacknowledgedRequests.forEach(e => {
                        this._guildMemberExists(e) ? this._unacknowledgedRequests.delete(e) : this._pendingRequests.add(e)
                    }), 0 !== this._pendingRequests.size && void 0)
                }
                request(e) {
                    if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
                    this._pendingRequests.add(e)
                }
                constructor(e, t) {
                    this._pendingRequests = new Set, this._sentRequests = new Set, this._unacknowledgedRequests = new Set, this._guildId = e, this._guildMemberExists = n => t(e, n)
                }
            }
            class u {
                reset() {
                    this._guildStates = {}, this._flush.cancel()
                }
                request(e, t) {
                    !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1)
                }
                acknowledge(e, t) {
                    this._getGuildState(e).acknowledge(t)
                }
                flushRequests() {
                    l.forEach(this._guildStates, e => e.flushRequests(this._onChange))
                }
                requestUnacknowledged() {
                    let e = l.reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || t, !1);
                    e && this._flush.delay()
                }
                _getGuildState(e) {
                    let t = this._guildStates[e];
                    return null == t && (t = this._guildStates[e] = new s(e, this._guildMemberExists)), t
                }
                constructor(e, t) {
                    this._guildStates = {}, this._flush = new i.DelayedCall(0, () => this.flushRequests()), this._guildMemberExists = e, this._onChange = t
                }
            }
        },
        949719: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelRTCParticipantsIndexes: function() {
                    return l
                },
                default: function() {
                    return R
                }
            });
            var a, l, i = n("917351"),
                s = n("407846"),
                u = n("899633"),
                r = n("191225"),
                o = n("374014"),
                d = n("373469"),
                C = n("271938"),
                h = n("950104"),
                c = n("42203"),
                E = n("42887"),
                f = n("280168"),
                _ = n("697218"),
                p = n("555035"),
                N = n("800762"),
                T = n("387111"),
                g = n("246846"),
                S = n("99795"),
                I = n("49111"),
                A = n("353927");
            let m = "__EMBEDDED_ACTIVITIES__";

            function M(e) {
                switch (e.type) {
                    case S.ParticipantTypes.ACTIVITY:
                        return "\x00".concat(e.sortKey);
                    case S.ParticipantTypes.HIDDEN_STREAM:
                    case S.ParticipantTypes.STREAM:
                        return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, g.default)(e.userNick, e.user), "\x02");
                    case S.ParticipantTypes.USER:
                        var t, n;
                        let a = "\x04";
                        return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? a = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (a = "\x03"), "".concat(a).concat((0, g.default)(e.userNick, e.user))
                }
            }(a = l || (l = {})).VIDEO = "VIDEO", a.STREAM = "STREAM", a.FILTERED = "FILTERED", a.SPEAKING = "SPEAKING", a.ACTIVITY = "ACTIVITY";
            class R {
                get version() {
                    return this.participantByIndex.version
                }
                size(e) {
                    return this.participantByIndex.size(e)
                }
                toArray(e) {
                    return this.participantByIndex.values(e, !0)
                }
                rebuild() {
                    let e = c.default.getChannel(this.channelId);
                    if (null == e || e.type === I.ChannelTypes.GUILD_TEXT) return !1;
                    if (this.call = h.default.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
                    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(N.default.getVoiceStatesForChannel(e.id)) : e.recipients);
                    return t.add(C.default.getId()), d.default.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
                        let {
                            ownerId: n
                        } = e;
                        return t.add(n)
                    }), this.participantByIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), this.updateEmbeddedActivities(), !0
                }
                getParticipant(e) {
                    var t;
                    return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
                }
                updateEmbeddedActivities() {
                    return this.updateParticipant(m)
                }
                hasEmbeddedActivity() {
                    let e = this.participants[m];
                    return null != e && e.length > 0
                }
                updateParticipant(e) {
                    let t = this.participants[e],
                        n = e === m ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
                    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                        this.participantByIndex.delete(e.id)
                    }), n.forEach(e => {
                        this.participantByIndex.set(e.id, e)
                    }), this.participants[e] = n, !0)
                }
                updateParticipantSpeaking(e) {
                    var t, n;
                    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
                        if (n.type === S.ParticipantTypes.USER) {
                            let t = (0, u.getIsSpeaking)({
                                userId: e,
                                checkIsMuted: !0
                            });
                            return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
                                ...n,
                                speaking: t,
                                lastSpoke: this.lastSpoke[e],
                                soundsharing: f.default.isSoundSharing(e)
                            }), !0
                        }
                        return t
                    }, !1)) && void 0 !== n && n
                }
                updateParticipantQuality(e, t, n) {
                    var a, l;
                    return null !== (l = null === (a = this.participants[e]) || void 0 === a ? void 0 : a.reduce((e, a) => a.type === S.ParticipantTypes.STREAM ? (this.participantByIndex.set(a.id, {
                        ...a,
                        maxResolution: t,
                        maxFrameRate: n
                    }), !0) : e, !1)) && void 0 !== l && l
                }
                _getEmbeddedActivities() {
                    let e = r.default.getEmbeddedActivitiesForChannel(this.channelId),
                        t = r.default.getSelfEmbeddedActivityForChannel(this.channelId);
                    return null == t ? e : (0, i.uniqBy)([...e, t], "application_id")
                }
                _getParticipantsForEmbeddedActivities() {
                    return this._getEmbeddedActivities().map((e, t) => {
                        var n, a, l, i;
                        return {
                            type: S.ParticipantTypes.ACTIVITY,
                            id: e.application_id,
                            activityType: e.type,
                            activityUrl: e.url,
                            participants: new Set(e.connections.keys()),
                            canJoin: (null == e ? void 0 : null === (n = e.secrets) || void 0 === n ? void 0 : n.join) != null,
                            joinSecret: null == e ? void 0 : null === (a = e.secrets) || void 0 === a ? void 0 : a.join,
                            guildId: null !== (i = null === (l = c.default.getChannel(this.channelId)) || void 0 === l ? void 0 : l.getGuildId()) && void 0 !== i ? i : null,
                            sortKey: t.toString()
                        }
                    })
                }
                _getParticipantsForUser(e) {
                    var t, n, a, l, i, s;
                    let r, h;
                    let g = [],
                        I = _.default.getUser(e);
                    if (null == I) return g;
                    let m = N.default.getVoiceStateForChannel(this.channelId, e),
                        M = N.default.getVoicePlatformForChannel(this.channelId, e),
                        R = c.default.getChannel(this.channelId),
                        y = null !== (a = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== a && a;
                    (null != m || y) && (r = {
                        type: S.ParticipantTypes.USER,
                        ...p.default.getUserStreamData(e, null == R ? void 0 : R.getGuildId()),
                        user: I,
                        id: I.id,
                        voiceState: m,
                        voicePlatform: M,
                        speaking: (0, u.getIsSpeaking)({
                            userId: e,
                            checkIsMuted: !0
                        }),
                        lastSpoke: null !== (l = this.lastSpoke[e]) && void 0 !== l ? l : 0,
                        soundsharing: f.default.isSoundSharing(e),
                        ringing: y,
                        userNick: T.default.getName(null == R ? void 0 : R.getGuildId(), this.channelId, I),
                        localVideoDisabled: E.default.isLocalVideoDisabled(I.id)
                    }, g.push(r));
                    let O = null !== (i = d.default.getStreamForUser(e, null == R ? void 0 : R.getGuildId())) && void 0 !== i ? i : d.default.getActiveStreamForUser(e, null == R ? void 0 : R.getGuildId());
                    if (null != O && O.channelId === this.channelId) {
                        let t = (0, o.encodeStreamKey)(O),
                            n = this.getParticipant(t),
                            a = O.ownerId === C.default.getId() && d.default.isSelfStreamHidden(this.channelId),
                            l = (null == n ? void 0 : n.type) === S.ParticipantTypes.STREAM ? {
                                maxResolution: null != n.maxResolution ? {
                                    ...n.maxResolution
                                } : void 0,
                                maxFrameRate: n.maxFrameRate
                            } : null;
                        h = {
                            ...p.default.getUserStreamData(e, null == R ? void 0 : R.getGuildId(), A.MediaEngineContextTypes.STREAM),
                            ...l,
                            type: a ? S.ParticipantTypes.HIDDEN_STREAM : S.ParticipantTypes.STREAM,
                            id: t,
                            userVideo: null !== (s = null == m ? void 0 : m.selfVideo) && void 0 !== s && s,
                            user: I,
                            userNick: T.default.getName(null == R ? void 0 : R.getGuildId(), this.channelId, I),
                            stream: O
                        }, g.push(h)
                    }
                    return g
                }
                constructor(e) {
                    this.participants = {}, this.lastSpoke = {}, this.participantByIndex = new s.default(e => {
                        var t;
                        let n = [];
                        return e.type === S.ParticipantTypes.USER && e.speaking && n.push(l.SPEAKING), e.type === S.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push(l.VIDEO), !e.localVideoDisabled && n.push(l.FILTERED)) : (0, S.isStreamParticipant)(e) && (n.push(l.STREAM), e.type !== S.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push(l.FILTERED)), e.type === S.ParticipantTypes.ACTIVITY && n.push(l.ACTIVITY), n
                    }, M), this.channelId = e
                }
            }
        },
        191145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return en
                }
            });
            var a = n("627445"),
                l = n.n(a),
                i = n("917351"),
                s = n.n(i),
                u = n("446674"),
                r = n("913144"),
                o = n("191225"),
                d = n("605250"),
                C = n("76393"),
                h = n("374014"),
                c = n("373469"),
                E = n("271938"),
                f = n("950104"),
                _ = n("42203"),
                p = n("18494"),
                N = n("280168"),
                T = n("697218"),
                g = n("555035"),
                S = n("800762"),
                I = n("949719"),
                A = n("99795"),
                m = n("49111");
            let M = new d.default("ChannelRTCStore"),
                R = Object.freeze([]),
                y = [],
                O = {},
                U = {},
                v = {},
                L = {},
                D = {},
                P = {},
                G = {},
                H = {},
                F = {},
                V = {};

            function Y(e) {
                let t = O[e];
                return null == t && (t = new I.default(e), O[e] = t), t
            }

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return t.reduce((t, n) => {
                    let a = Y(n);
                    return e(a) ? (function(e) {
                        let t = Y(e);
                        if (0 === t.size()) return;
                        let n = ee(e) || W(t) ? m.ChannelModes.VIDEO : m.ChannelModes.VOICE;
                        n === m.ChannelModes.VOICE ? (delete L[e], delete D[e]) : L[e] = n
                    }(n), function(e) {
                        let t = E.default.getId(),
                            n = Y(e);
                        if (0 === n.size() || p.default.getVoiceChannelId() !== e) {
                            K(e, null);
                            return
                        }
                        let a = A.ParticipantSelectionTypes.NONE,
                            i = n.toArray(I.ChannelRTCParticipantsIndexes.STREAM).find(e => e.type === A.ParticipantTypes.STREAM && c.default.getActiveStreamForStreamKey(e.id));
                        if (null != i) l(i.type === A.ParticipantTypes.STREAM, "Impossible condition"), a = i.id;
                        else if (1 === n.size()) a = t;
                        else if (1 === n.size(I.ChannelRTCParticipantsIndexes.VIDEO)) {
                            let [e] = n.toArray(I.ChannelRTCParticipantsIndexes.VIDEO);
                            a = e.id
                        } else {
                            var s;
                            let e = n.toArray().find(e => e.type === A.ParticipantTypes.USER && e.id !== t && !e.ringing);
                            a = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t
                        }
                        let [u] = w(e);
                        if (u !== A.ParticipantSelectionTypes.AUTO && u !== A.ParticipantSelectionTypes.NONE) {
                            let e = n.getParticipant(u);
                            (null == e || e.type === A.ParticipantTypes.STREAM && null == c.default.getActiveStreamForStreamKey(e.id)) && (u = A.ParticipantSelectionTypes.NONE)
                        }
                        K(e, [u, a])
                    }(n), !0) : t
                }, !1)
            }

            function k(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return b(t => t.updateParticipant(e), t)
            }

            function w(e) {
                var t;
                let n = _.default.getChannel(e),
                    a = (null == n ? void 0 : n.isDM()) ? A.ParticipantSelectionTypes.AUTO : A.ParticipantSelectionTypes.NONE;
                return null !== (t = U[e]) && void 0 !== t ? t : [a, A.ParticipantSelectionTypes.NONE]
            }

            function B(e) {
                let t = U[e];
                if (null == t) return !1;
                let [n] = U[e];
                return n !== A.ParticipantSelectionTypes.NONE
            }

            function x(e) {
                null == v[e] && (v[e] = {
                    gridDurationMs: 0,
                    focusDurationMs: 0,
                    toggleCount: 0,
                    lastUpdate: 0
                });
                let t = v[e],
                    n = performance.now(),
                    a = B(e);
                if (t.lastUpdate > 0) {
                    let e = n - t.lastUpdate;
                    t[a ? "focusDurationMs" : "gridDurationMs"] += e
                }
                t.lastUpdate = n
            }

            function K(e, t) {
                x(e);
                let n = B(e);
                null == t ? delete U[e] : U[e] = t;
                let a = B(e);
                n !== a && v[e].toggleCount++
            }

            function W(e) {
                return e.size(I.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(I.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
            }

            function q(e) {
                delete O[e], delete U[e], delete L[e], delete D[e]
            }

            function Q() {
                return b(e => e.rebuild(), function() {
                    let e = [],
                        t = p.default.getChannelId();
                    null != t && e.push(t);
                    let n = p.default.getVoiceChannelId();
                    null != n && !e.includes(n) && e.push(n);
                    let a = C.default.getRemoteSessionId(),
                        l = S.default.getVoiceStateForSession(E.default.getId(), a);
                    (null == l ? void 0 : l.channelId) != null && e.push(null == l ? void 0 : l.channelId), s.difference(y, e).forEach(q);
                    let i = s.difference(e, y);
                    return y = e, i
                }())
            }

            function z() {
                return b(e => e.updateEmbeddedActivities())
            }

            function Z(e) {
                let {
                    userId: t
                } = e;
                return b(e => e.updateParticipantSpeaking(t))
            }

            function X(e) {
                let {
                    user: t
                } = e;
                return k(t.id)
            }

            function J(e) {
                let {
                    channelId: t
                } = e;
                return b(e => e.rebuild(), [t])
            }

            function j(e) {
                let {
                    channel: {
                        id: t
                    }
                } = e;
                return delete H[t], delete F[t], q(t)
            }

            function $(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    ownerId: a
                } = (0, h.decodeStreamKey)(t);
                return k(a, [n])
            }

            function ee(e) {
                var t;
                return !!(null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
            }
            class et extends u.default.Store {
                initialize() {
                    this.waitFor(c.default, E.default, f.default, _.default, o.default, p.default, N.default, T.default, g.default, S.default), this.syncWith([o.default], z), this.syncWith([C.default], Q)
                }
                getParticipantsVersion(e) {
                    return Y(e).version
                }
                getParticipants(e) {
                    var t;
                    return null !== (t = Y(e).toArray()) && void 0 !== t ? t : R
                }
                getSpeakingParticipants(e) {
                    var t;
                    return null !== (t = Y(e).toArray(I.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : R
                }
                getFilteredParticipants(e) {
                    return G[e] ? Y(e).toArray(I.ChannelRTCParticipantsIndexes.FILTERED) : Y(e).toArray()
                }
                getVideoParticipants(e) {
                    var t;
                    return null !== (t = Y(e).toArray(I.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : R
                }
                getStreamParticipants(e) {
                    var t;
                    return null !== (t = Y(e).toArray(I.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : R
                }
                getActivityParticipants(e) {
                    var t;
                    return null !== (t = Y(e).toArray(I.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : R
                }
                getParticipant(e, t) {
                    return Y(e).getParticipant(t)
                }
                getUserParticipantCount(e) {
                    let t = Y(e);
                    return t.size() - t.size(I.ChannelRTCParticipantsIndexes.STREAM) - t.size(I.ChannelRTCParticipantsIndexes.ACTIVITY)
                }
                getParticipantsOpen(e) {
                    var t;
                    return null === (t = P[e]) || void 0 === t || t
                }
                getVoiceParticipantsHidden(e) {
                    var t;
                    return null !== (t = G[e]) && void 0 !== t && t
                }
                getSelectedParticipantId(e) {
                    let [t, n] = w(e);
                    return t === A.ParticipantSelectionTypes.NONE ? null : t !== A.ParticipantSelectionTypes.AUTO ? t : n === A.ParticipantSelectionTypes.NONE || n === A.ParticipantSelectionTypes.AUTO ? null : n
                }
                getSelectedParticipant(e) {
                    let t = this.getSelectedParticipantId(e);
                    return null == t ? null : Y(e).getParticipant(t)
                }
                getSelectedParticipantStats(e) {
                    let t = v[e];
                    return null == t ? {} : {
                        view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                        view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                        view_mode_toggle_count: t.toggleCount
                    }
                }
                getMode(e) {
                    var t;
                    return null !== (t = L[e]) && void 0 !== t ? t : ee(e) ? m.ChannelModes.VIDEO : m.ChannelModes.VOICE
                }
                getLayout(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.AppContext.APP;
                    if (__OVERLAY__) return m.ChannelLayouts.NORMAL;
                    let l = _.default.getChannel(e),
                        i = ee(e) || (null == l ? void 0 : l.isBroadcastChannel());
                    return null !== (n = null === (t = D[e]) || void 0 === t ? void 0 : t[a]) && void 0 !== n ? n : i ? m.ChannelLayouts.NO_CHAT : m.ChannelLayouts.NORMAL
                }
                getChatOpen(e) {
                    var t;
                    return null !== (t = H[e]) && void 0 !== t && t
                }
                isFullscreenInContext() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.AppContext.APP;
                    return Object.values(D).some(t => t[e] === m.ChannelLayouts.FULL_SCREEN)
                }
                getStageStreamSize(e) {
                    return F[e]
                }
                getStageVideoLimitBoostUpsellDismissed(e) {
                    return V[e]
                }
            }
            et.displayName = "ChannelRTCStore";
            var en = new et(r.default, {
                CONNECTION_OPEN: Q,
                CONNECTION_OPEN_SUPPLEMENTAL: Q,
                THREAD_LIST_SYNC: Q,
                OVERLAY_INITIALIZE: Q,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        currentVoiceChannelId: n
                    } = e;
                    return null != t ? delete v[t] : null != n && (delete H[n], delete F[n], x(n)), Q()
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, a = Q(), l = _.default.getChannel(t);
                    return null == t || null == n || (null == l ? void 0 : l.type) !== m.ChannelTypes.GUILD_VOICE && (null == l ? void 0 : l.type) !== m.ChannelTypes.GUILD_STAGE_VOICE || H[t] ? a : (H[t] = !0, !0)
                },
                CHANNEL_RTC_ACTIVE_CHANNELS: Q,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t,
                        initial: n
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: a,
                            channelId: l
                        } = t;
                        return n && null != l && !y.includes(l) ? e : k(a) || e
                    }, !1)
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.type === m.ChannelTypes.GROUP_DM) {
                        let e = t.originChannelId;
                        if (null != e) {
                            var n, a;
                            return D[t.id] = {
                                [m.AppContext.APP]: null !== (a = null === (n = D[e]) || void 0 === n ? void 0 : n[m.AppContext.APP]) && void 0 !== a ? a : m.ChannelLayouts.NORMAL
                            }, !0
                        }
                        t.isBroadcastChannel() && (D[t.id] = {
                            [m.AppContext.APP]: m.ChannelLayouts.NO_CHAT
                        })
                    }
                    return !1
                },
                CHANNEL_DELETE: j,
                THREAD_DELETE: j,
                CALL_CREATE: J,
                CALL_UPDATE: J,
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return q(t)
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    let {
                        channelId: t,
                        id: n
                    } = e, a = Y(t), l = null == n;
                    l && a.toArray(I.ChannelRTCParticipantsIndexes.STREAM).forEach(e => {
                        (0, A.isStreamParticipant)(e) && a.updateParticipant(e.user.id)
                    });
                    let [, i] = w(t);
                    if (K(t, [null != n ? n : A.ParticipantSelectionTypes.NONE, i]), (0, h.isStreamKey)(n)) {
                        try {
                            let {
                                ownerId: e
                            } = (0, h.decodeStreamKey)(n);
                            e === E.default.getId() && k(e, [t])
                        } catch (e) {
                            M.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                        }!W(a) && (P[t] = !1)
                    }
                },
                CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
                    let {
                        channelId: t,
                        layout: n,
                        appContext: a
                    } = e;
                    D[t] = {
                        ...D[t],
                        [a]: n
                    }
                },
                CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
                    let {
                        channelId: t,
                        participantsOpen: n
                    } = e;
                    P[t] = n
                },
                CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        voiceParticipantsHidden: n
                    } = e;
                    G[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
                    let {
                        channelId: t,
                        large: n
                    } = e;
                    F[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
                    let {
                        channelId: t,
                        dismissed: n
                    } = e;
                    V[t] = n
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        selfStreamHidden: n
                    } = e, a = E.default.getId();
                    if (n) {
                        let [e] = w(t), n = (0, h.isStreamKey)(e);
                        n && e.includes(a) && K(t, null)
                    }
                    k(a, [t])
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    let {
                        channelId: t,
                        chatOpen: n
                    } = e;
                    H[t] = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return k(n, [t])
                },
                RTC_CONNECTION_PLATFORM: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return k(n, [t])
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    let {
                        userId: t
                    } = e;
                    return k(t)
                },
                MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
                    let {
                        channelId: t,
                        senderUserId: n,
                        maxResolution: a,
                        maxFrameRate: l
                    } = e;
                    return b(e => e.updateParticipantQuality(n, a, l), [t])
                },
                STREAM_CLOSE: $,
                STREAM_DELETE: $,
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, {
                        channelId: n,
                        ownerId: a
                    } = (0, h.decodeStreamKey)(t);
                    return k(a, [n])
                },
                SPEAKING: Z,
                GUILD_SOUNDBOARD_SOUND_PLAY_START: Z,
                GUILD_SOUNDBOARD_SOUND_PLAY_END: Z,
                USER_UPDATE: X,
                GUILD_MEMBER_UPDATE: X,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e, n = [];
                    if (s.forEach(y, e => {
                            let a = _.default.getChannel(e);
                            (null == a || a.getGuildId() === t.id) && n.push(e)
                        }), 0 === n.length) return !1;
                    s.forEach(n, e => q(e))
                }
            })
        },
        246846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });

            function a(e, t) {
                return "".concat(e.toLowerCase().padEnd(32, "!")).concat(t.id)
            }
        },
        364480: function(e, t, n) {
            "use strict";

            function a(e) {
                return e.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase()
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        358269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnreadChannelHighlights: function() {
                    return s
                },
                getUnreadChannelHighlights: function() {
                    return u
                },
                hasUnreadChannelHighlights: function() {
                    return r
                }
            });
            var a = n("249654"),
                l = n("446674"),
                i = n("483038");

            function s(e, t) {
                let n = (0, l.useStateFromStores)([i.default], () => i.default.getHighlightedMessageIds(e), [e]),
                    s = [...n];
                return s.sort(a.default.compare), s.filter(e => a.default.compare(e, t) > 0)
            }

            function u(e, t) {
                let n = [...i.default.getHighlightedMessageIds(e)];
                return n.sort(a.default.compare), n.filter(e => a.default.compare(e, t) > 0)
            }

            function r(e, t) {
                let n = i.default.getHighlightedMessageIds(e);
                for (let e of n)
                    if (a.default.compare(e, t) > 0) return !0;
                return !1
            }
        },
        481555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelHighlightsExperiment: function() {
                    return i
                },
                isChannelHighlightsExperimentEnabled: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2022-07_channel_highlights",
                label: "Channel Highlights",
                defaultConfig: {
                    showChannelHighlights: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Channel Highlights",
                    config: {
                        showChannelHighlights: !0
                    }
                }]
            });

            function i() {
                let {
                    showChannelHighlights: e
                } = l.useExperiment({
                    location: "9a5018_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }

            function s() {
                let {
                    showChannelHighlights: e
                } = l.getCurrentConfig({
                    location: "9a5018_2"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }
        },
        483038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("446674"),
                l = n("913144"),
                i = n("582713"),
                s = n("923959"),
                u = n("282109"),
                r = n("697218"),
                o = n("599110"),
                d = n("49111");
            let C = new Set,
                h = {},
                c = {},
                E = {},
                f = {},
                _ = {};
            class p extends a.default.Store {
                initialize() {
                    this.waitFor(u.default, s.default)
                }
                getHighlightedMessageIds(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t ? t : C
                }
                getTempHighlightedMessageIds(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : C
                }
                getHighlightedMessageIdCount(e) {
                    var t, n;
                    return null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0
                }
                getLastFetchedMillis(e) {
                    return E[e]
                }
                isLoading(e) {
                    return "loading" === c[e]
                }
            }
            p.displayName = "ChannelHighlightsStore";
            var N = new p(l.default, {
                CHANNEL_HIGHLIGHTS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    c[t] = "loading"
                },
                CHANNEL_HIGHLIGHTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    E[t] = Date.now();
                    let a = r.default.getCurrentUser();
                    if (null == n || null == a) return !1;
                    _[t] = n.load_id, n.channels.forEach(e => {
                        h[e.channel_id] = new Set(e.highlighted_message_ids.slice(0, 5))
                    }), o.default.track(d.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED, {
                        guild_id: t,
                        num_channels_highlighted: n.channels.length
                    }), delete c[t]
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        details: n
                    } = e;
                    (null == n ? void 0 : n.type) === i.SidebarOpenDetailsType.HOME && null != t && (f[t] = new Set(n.highlightMessageIds))
                }
            })
        },
        700507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                disconnectRemote: function() {
                    return T
                },
                connectToRemote: function() {
                    return g
                },
                remoteVoiceStateUpdate: function() {
                    return S
                },
                remoteDisconnect: function() {
                    return I
                },
                remoteAudioSettingsUpdate: function() {
                    return A
                },
                fetchDevices: function() {
                    return M
                },
                persistSelectedDeviceId: function() {
                    return R
                },
                transferToPlayStation: function() {
                    return U
                }
            });
            var a = n("30945"),
                l = n("363747"),
                i = n("872717"),
                s = n("913144"),
                u = n("404118"),
                r = n("504385"),
                o = n("945956"),
                d = n("235660"),
                C = n("599110"),
                h = n("286235"),
                c = n("893243"),
                E = n("76393"),
                f = n("780338"),
                _ = n("49111"),
                p = n("782340");

            function N(e, t) {
                var n, a;
                C.default.track(_.AnalyticEvents.REMOTE_COMMAND_SENT, {
                    command_type: e,
                    remote_platform: null === (a = d.default.getSessionById(t)) || void 0 === a ? void 0 : null === (n = a.clientInfo) || void 0 === n ? void 0 : n.os
                })
            }
            async function T() {
                let e = E.default.getAwaitingRemoteSessionInfo(),
                    t = null == e ? void 0 : e.nonce;
                s.default.dispatch({
                    type: "REMOTE_SESSION_DISCONNECT"
                });
                let n = [];
                ((null == e ? void 0 : e.type) === _.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === _.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(O(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
                    return i.default.delete({
                        url: _.Endpoints.CONNECT_REQUEST(e)
                    })
                }(t));
                try {
                    await Promise.all(n)
                } catch (e) {
                    u.default.show({
                        title: p.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                        body: p.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
                    })
                }
            }

            function g(e) {
                s.default.dispatch({
                    type: "REMOTE_SESSION_CONNECT",
                    sessionId: e
                })
            }

            function S(e, t) {
                let {
                    selfMute: n,
                    selfDeaf: a
                } = t;
                s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "VOICE_STATE_UPDATE",
                        self_mute: n,
                        self_deaf: a
                    }
                }), N("VOICE_STATE_UPDATE", e)
            }

            function I(e) {
                s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "DISCONNECT"
                    }
                }), N("DISCONNECT", e), T()
            }

            function A(e, t, n, a) {
                let l = (0, r.coerceAudioContextForProto)(n);
                null != l && (s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "AUDIO_SETTINGS_UPDATE",
                        context: l,
                        id: t,
                        ...a
                    }
                }), N("AUDIO_SETTINGS_UPDATE", e))
            }
            async function m() {
                let e;
                try {
                    let t = null != o.default.getRTCConnectionId() ? l.ConsoleHandoffType.TRANSFER_EXISTING_CALL : l.ConsoleHandoffType.CREATE_NEW_CALL,
                        n = await i.default.post({
                            url: _.Endpoints.CONNECT_REQUEST_CREATE,
                            body: {
                                analytics_properties: {
                                    handoff_type: t
                                }
                            }
                        });
                    e = n.body.nonce
                } catch (e) {
                    h.default.captureException(e)
                }
                return e
            }
            async function M(e) {
                let t;
                s.default.dispatch({
                    type: "GAME_CONSOLE_FETCH_DEVICES_START",
                    platform: e
                });
                try {
                    t = await i.default.get({
                        url: _.Endpoints.CONSOLES_DEVICES(e)
                    })
                } catch (t) {
                    throw s.default.dispatch({
                        type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                        platform: e,
                        error: t
                    }), t
                }
                let n = t.body.devices;
                return s.default.dispatch({
                    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
                    platform: e,
                    devices: n
                }), n
            }

            function R(e, t) {
                s.default.dispatch({
                    type: "GAME_CONSOLE_SELECT_DEVICE",
                    platform: e,
                    deviceId: t
                })
            }
            async function y(e, t, n, l) {
                let u;
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
                    platform: e
                });
                try {
                    u = await i.default.post({
                        url: _.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
                        body: {
                            command: a.ConsoleCommands.CONNECT_VOICE,
                            channel_id: n.id,
                            guild_id: n.guild_id,
                            nonce: l
                        }
                    })
                } catch (t) {
                    throw s.default.dispatch({
                        type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                        platform: e,
                        error: t
                    }), t
                }
                let r = u.body.id;
                return s.default.dispatch({
                    type: "WAIT_FOR_REMOTE_SESSION",
                    sessionType: e,
                    nonce: l,
                    channelId: n.id,
                    deviceId: t,
                    commandId: r
                }), r
            }
            async function O(e, t, n) {
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                    platform: e,
                    deviceId: t,
                    commandId: n
                });
                try {
                    await i.default.delete({
                        url: _.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
                    })
                } catch (a) {
                    throw s.default.dispatch({
                        type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                        platform: e,
                        deviceId: t,
                        commandId: n,
                        error: a
                    }), a
                }
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
                    platform: e,
                    deviceId: t,
                    commandId: n
                })
            }
            async function U(e, t, n) {
                await c.default.maybeShowPTTAlert(e), await T();
                let a = await m();
                await y(e, t, n, a), (0, f.default)(n.id, e)
            }
        },
        893243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = n("855164").default
        },
        171644: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                XBOX_URL_BASE: function() {
                    return r
                },
                XBOX_APP_WEB_LINK: function() {
                    return o
                },
                XBOX_LINK_DEST_ORIGIN: function() {
                    return d
                },
                XBOX_CLIENT_SCOPES: function() {
                    return C
                },
                PLAYSTATION_LINK_DEST_ORIGIN: function() {
                    return h
                },
                PLAYSTATION_CLIENT_SCOPES: function() {
                    return c
                },
                XBOX_HANDOFF_SEARCH_PARAMS: function() {
                    return E
                },
                GameConsoleTypes: function() {
                    return i
                },
                GAME_CONSOLE_SESSIONS: function() {
                    return f
                },
                GameConsoleCommandResultErrorCodes: function() {
                    return s
                },
                USER_ACTION_REQUIRED_ERROR_CODES: function() {
                    return _
                },
                GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
                    return p
                }
            });
            var a, l, i, s, u = n("49111");
            let r = "xbox://communitylinking/donut/audio",
                o = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                d = "https://login.live.com",
                C = [u.OAuth2Scopes.VOICE, u.OAuth2Scopes.DM_CHANNELS_READ, u.OAuth2Scopes.GUILDS, u.OAuth2Scopes.GUILDS_MEMBERS_READ, u.OAuth2Scopes.IDENTIFY, u.OAuth2Scopes.CONNECTIONS],
                h = "https://my.account.sony.com",
                c = C,
                E = e => {
                    let {
                        guildId: t,
                        channelName: n,
                        guildName: a,
                        channelId: l,
                        muted: i,
                        deafened: s,
                        nonce: u
                    } = e, r = {
                        channelid: l,
                        guildid: t,
                        channelname: n,
                        guildname: a,
                        muted: String(i),
                        deafened: String(s)
                    };
                    return null != u && (r.nonce = u), new URLSearchParams(r)
                };
            (a = i || (i = {})).PLAYSTATION = "playstation", a.XBOX = "xbox";
            let f = new Set([i.XBOX, i.PLAYSTATION]);
            u.ActivityGamePlatforms.XBOX, u.ActivityGamePlatforms.PS5, (l = s || (s = {}))[l.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", l[l.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", l[l.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", l[l.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", l[l.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", l[l.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", l[l.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", l[l.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
            let _ = new Set([s.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                p = "console error alert"
        },
        780338: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("42203"),
                l = n("945956"),
                i = n("235660"),
                s = n("599110"),
                u = n("49111");

            function r(e, t, n) {
                var r, o;
                s.default.track(u.AnalyticEvents.VOICE_CALL_TRANSFER, {
                    source_platform: null != n ? null === (r = i.default.getSessionById(n)) || void 0 === r ? void 0 : r.clientInfo.os : "discord_client",
                    guild_id: null === (o = a.default.getChannel(e)) || void 0 === o ? void 0 : o.guild_id,
                    channel_id: e,
                    rtc_connection_id: l.default.getRTCConnectionId(),
                    target_platform: t
                })
            }
        },
        129978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SelfDismissibleAlertBody: function() {
                    return r
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("446674"),
                s = n("76393"),
                u = n("347279");

            function r(e) {
                let {
                    body: t,
                    dismissCallback: n,
                    errorCodeMessage: r
                } = e, o = (0, i.useStateFromStores)([s.default], () => s.default.getRemoteSessionId());
                return (l.useEffect(() => {
                    null != o && n()
                }, [o, n]), null == r) ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [t, (0, a.jsx)("div", {
                        className: u.errorCodeMessage,
                        children: r
                    })]
                })
            }
        },
        855164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("151426"),
                i = n("551042"),
                s = n("135230"),
                u = n("926994"),
                r = n("10641"),
                o = n("42887"),
                d = n("599110"),
                C = n("129978"),
                h = n("171644"),
                c = n("49111"),
                E = n("782340"),
                f = n("274520");
            let _ = "game_console_alert_modal",
                p = "game_console_ptt_alert_modal";
            var N = {
                maybeShowPTTAlert(e) {
                    if (o.default.getMode() !== c.InputModes.PUSH_TO_TALK || (0, r.isDismissibleContentDismissed)(l.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
                    let t = {
                            [c.PlatformTypes.XBOX]: E.default.Messages.PTT_NOT_SUPPORTED_XBOX,
                            [c.PlatformTypes.PLAYSTATION]: E.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
                            [c.PlatformTypes.PLAYSTATION_STAGING]: E.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
                        },
                        n = t[e];
                    return null == n ? Promise.resolve() : new Promise(e => {
                        let t = () => {
                                (0, r.markDismissibleContentAsDismissed)(l.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                            },
                            u = e => (0, a.jsx)(s.default, {
                                ...e,
                                title: n,
                                body: E.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                                onConfirm: t,
                                titleClassName: f.title
                            });
                        (0, i.hasModalOpen)(p) ? (0, i.updateModal)(p, u) : (0, i.openModal)(u, {
                            modalKey: p
                        })
                    })
                },
                showSelfDismissableAlert(e) {
                    let {
                        title: t,
                        body: n,
                        errorCodeMessage: l,
                        reconnectPlatformType: r
                    } = e, o = (0, a.jsx)(C.SelfDismissibleAlertBody, {
                        body: n,
                        errorCodeMessage: l,
                        dismissCallback: () => (0, i.closeModal)(_)
                    });

                    function E() {
                        null != r && ((0, u.default)(r), d.default.track(c.AnalyticEvents.ACCOUNT_LINK_STEP, {
                            previous_step: h.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                            current_step: "desktop oauth",
                            platform_type: r
                        }))
                    }
                    let f = e => (0, a.jsx)(s.default, {
                        ...e,
                        title: t,
                        body: o,
                        onConfirm: E
                    });
                    (0, i.hasModalOpen)(_) ? (0, i.updateModal)(_, f) : (0, i.openModal)(f, {
                        modalKey: _
                    })
                }
            }
        },
        223913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canStreamInChannel: function() {
                    return _
                },
                getStreamCTAString: function() {
                    return p
                },
                canWatchStream: function() {
                    return N
                },
                useCanWatchStream: function() {
                    return T
                },
                getStreamEligibleChannels: function() {
                    return g
                }
            });
            var a, l, i = n("316693"),
                s = n("446674"),
                u = n("76393"),
                r = n("923959"),
                o = n("305961"),
                d = n("957255"),
                C = n("800762"),
                h = n("404008"),
                c = n("49111"),
                E = n("782340");
            let f = (e, t) => e.isPrivate() || t.can(i.default.combine(c.Permissions.CONNECT, c.Permissions.VIEW_CHANNEL), e);

            function _(e, t, n) {
                var a;
                let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                if (e.isPrivate()) return !0;
                let i = t.getGuild(e.getGuildId()),
                    s = null !== (a = null == i ? void 0 : i.maxStageVideoChannelUsers) && void 0 !== a ? a : 0;
                return (!e.isGuildStageVoice() || !(s <= 0)) && (!l || !!f(e, n)) && !!n.can(c.Permissions.STREAM, e) && null != i && i.afkChannelId !== e.id && !0
            }

            function p(e) {
                switch (e) {
                    case l.REMOTE_MODE:
                        return E.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
                    case l.CHANNEL_FULL:
                        return E.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
                    case l.NO_PERMISSION:
                        return E.default.Messages.STREAM_NO_PERMISSION_CTA;
                    default:
                        return E.default.Messages.WATCH_STREAM
                }
            }

            function N(e, t, n, a, i) {
                let s;
                if (null == e) return [!1, l.NO_PERMISSION];
                let u = t.isInChannel(e.id),
                    r = (0, h.isChannelFull)(e, t, n),
                    o = f(e, a),
                    d = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
                d ? s = l.REMOTE_MODE : o || u ? r && !u && (s = l.CHANNEL_FULL) : s = l.NO_PERMISSION;
                let C = !__OVERLAY__ && !d && (u || o && !r);
                return [C, s]
            }

            function T(e) {
                return (0, s.useStateFromStoresArray)([C.default, o.default, d.default, u.default], () => N(e, C.default, o.default, d.default, u.default))
            }

            function g(e, t, n) {
                let a = [];
                for (let {
                        channel: l
                    }
                    of e[r.GUILD_VOCAL_CHANNELS_KEY]) _(l, t, n) && a.push(l);
                return a
            }(a = l || (l = {}))[a.REMOTE_MODE = 0] = "REMOTE_MODE", a[a.CHANNEL_FULL = 1] = "CHANNEL_FULL", a[a.NO_PERMISSION = 2] = "NO_PERMISSION"
        },
        537429: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("353927");

            function l(e) {
                return e.supportsInApp(a.Features.VIDEO)
            }
        },
        89073: function(e, t, n) {
            "use strict";

            function a(e) {
                if (null == e) return !1;
                for (var t = 0; t < e.length; t++)
                    if (e[t].voiceState.selfStream) return !0;
                return !1
            }
            n.r(t), n.d(t, {
                hasStream: function() {
                    return a
                }
            })
        },
        44574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildUnreadsExperiment: function() {
                    return i
                },
                isGuildUnreadsExperimentEnabled: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_guild_unreads",
                label: "Guild Unreads",
                defaultConfig: {
                    allowUnreadHighlightsOption: !1
                },
                treatments: [{
                    id: 1,
                    label: 'Allow "Highlights" as an Unreads Option',
                    config: {
                        allowUnreadHighlightsOption: !0
                    }
                }]
            });

            function i() {
                let {
                    allowUnreadHighlightsOption: e
                } = l.useExperiment({
                    location: "6728b0_1"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }

            function s() {
                let {
                    allowUnreadHighlightsOption: e
                } = l.getCurrentConfig({
                    location: "6728b0_2"
                }, {
                    autoTrackExposure: !1
                });
                return e
            }
        },
        811400: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculateUnreadSetting: function() {
                    return c
                },
                useGuildUnreadSetting: function() {
                    return E
                },
                getGuildUnreadSetting: function() {
                    return f
                }
            });
            var a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                s = n("755624"),
                u = n("233069"),
                r = n("42203"),
                o = n("282109"),
                d = n("44574"),
                C = n("627869"),
                h = n("49111");

            function c(e) {
                let {
                    isExperimentEnabled: t,
                    hasUserEnabledGuildUnreads: n,
                    channelNotificationOverrides: a,
                    categoryNotificationOverrides: l,
                    unreadSetting: i,
                    hasJoinedThread: s
                } = e, u = null != a && a.message_notifications !== h.UserNotificationSettings.NULL || null != l && l.message_notifications !== h.UserNotificationSettings.NULL;
                return t && n && !s ? u ? null == i || i === C.UserUnreadSettings.NULL ? C.UserUnreadSettings.ALL_MESSAGES : i : null != i ? i : C.UserUnreadSettings.NULL : C.UserUnreadSettings.ALL_MESSAGES
            }

            function E(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = null == e ? void 0 : e.parent_id,
                    a = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(n), [n]),
                    u = (null == e ? void 0 : e.isThread()) ? n : null == e ? void 0 : e.id;
                l(null != u, "parent_id cannot be null for threads");
                let h = (null == e ? void 0 : e.isThread()) ? null == a ? void 0 : a.parent_id : n,
                    E = (0, d.useGuildUnreadsExperiment)(),
                    {
                        channelNotificationOverrides: f,
                        categoryNotificationOverrides: _,
                        unreadSetting: p,
                        hasUserEnabledGuildUnreads: N
                    } = (0, i.useStateFromStoresObject)([o.default], () => ({
                        channelNotificationOverrides: o.default.getChannelOverrides(t)[u],
                        categoryNotificationOverrides: null != h ? o.default.getChannelOverrides(t)[h] : null,
                        unreadSetting: null != t ? o.default.getChannelUnreadSetting(t, u) : C.UserUnreadSettings.NULL,
                        hasUserEnabledGuildUnreads: null != t && o.default.isGuildUnreadSettingEnabled(t)
                    }), [t, u, h]),
                    T = (0, i.useStateFromStores)([s.default], () => (null == e ? void 0 : e.id) != null && s.default.hasJoined(e.id));
                return c({
                    isExperimentEnabled: E,
                    hasUserEnabledGuildUnreads: N,
                    channelNotificationOverrides: f,
                    categoryNotificationOverrides: _,
                    unreadSetting: p,
                    hasJoinedThread: T
                })
            }

            function f(e) {
                let t = e.guild_id,
                    n = r.default.getBasicChannel(e.parent_id),
                    a = (0, u.isThread)(e.type) ? e.parent_id : e.id;
                l(null != a, "parent_id cannot be null for threads");
                let i = (0, u.isThread)(e.type) ? null == n ? void 0 : n.parent_id : e.parent_id,
                    C = (0, d.isGuildUnreadsExperimentEnabled)(),
                    h = o.default.isGuildUnreadSettingEnabled(t),
                    E = o.default.getChannelUnreadSetting(t, a),
                    f = o.default.getChannelOverrides(t)[a],
                    _ = null != i ? o.default.getChannelOverrides(t)[i] : null,
                    p = s.default.hasJoined(e.id);
                return c({
                    isExperimentEnabled: C,
                    hasUserEnabledGuildUnreads: h,
                    channelNotificationOverrides: f,
                    categoryNotificationOverrides: _,
                    unreadSetting: E,
                    hasJoinedThread: p
                })
            }
        },
        988415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCountryCodeByAlpha2: function() {
                    return u
                },
                getDefaultCountryCode: function() {
                    return r
                },
                getI18NCountryName: function() {
                    return d
                }
            });
            var a = n("627445"),
                l = n.n(a),
                i = n("592861"),
                s = n("782340");

            function u(e) {
                let t = i.default.find(t => t.alpha2 === e);
                if (null != t) return {
                    name: t.name,
                    code: t.phoneCountryCode,
                    alpha2: t.alpha2
                }
            }

            function r() {
                let e = function(e) {
                    let t = i.default.find(t => t.name === e);
                    if (null != t) return {
                        name: t.name,
                        code: t.phoneCountryCode,
                        alpha2: t.alpha2
                    }
                }("United States");
                return l(e, "Default country code cannot be missing."), e
            }
            let o = {
                AF: () => s.default.Messages.COUNTRY_NAME_AF,
                AX: () => s.default.Messages.COUNTRY_NAME_AX,
                AL: () => s.default.Messages.COUNTRY_NAME_AL,
                DZ: () => s.default.Messages.COUNTRY_NAME_DZ,
                AS: () => s.default.Messages.COUNTRY_NAME_AS,
                AD: () => s.default.Messages.COUNTRY_NAME_AD,
                AO: () => s.default.Messages.COUNTRY_NAME_AO,
                AI: () => s.default.Messages.COUNTRY_NAME_AI,
                AQ: () => s.default.Messages.COUNTRY_NAME_AQ,
                AG: () => s.default.Messages.COUNTRY_NAME_AG,
                AR: () => s.default.Messages.COUNTRY_NAME_AR,
                AM: () => s.default.Messages.COUNTRY_NAME_AM,
                AW: () => s.default.Messages.COUNTRY_NAME_AW,
                AC: () => s.default.Messages.COUNTRY_NAME_AC,
                AU: () => s.default.Messages.COUNTRY_NAME_AU,
                AT: () => s.default.Messages.COUNTRY_NAME_AT,
                AZ: () => s.default.Messages.COUNTRY_NAME_AZ,
                BS: () => s.default.Messages.COUNTRY_NAME_BS,
                BH: () => s.default.Messages.COUNTRY_NAME_BH,
                BD: () => s.default.Messages.COUNTRY_NAME_BD,
                BB: () => s.default.Messages.COUNTRY_NAME_BB,
                BY: () => s.default.Messages.COUNTRY_NAME_BY,
                BE: () => s.default.Messages.COUNTRY_NAME_BE,
                BZ: () => s.default.Messages.COUNTRY_NAME_BZ,
                BJ: () => s.default.Messages.COUNTRY_NAME_BJ,
                BM: () => s.default.Messages.COUNTRY_NAME_BM,
                BT: () => s.default.Messages.COUNTRY_NAME_BT,
                BO: () => s.default.Messages.COUNTRY_NAME_BO,
                BQ: () => s.default.Messages.COUNTRY_NAME_BQ,
                BA: () => s.default.Messages.COUNTRY_NAME_BA,
                BW: () => s.default.Messages.COUNTRY_NAME_BW,
                BV: () => s.default.Messages.COUNTRY_NAME_BV,
                BR: () => s.default.Messages.COUNTRY_NAME_BR,
                IO: () => s.default.Messages.COUNTRY_NAME_IO,
                BN: () => s.default.Messages.COUNTRY_NAME_BN,
                BG: () => s.default.Messages.COUNTRY_NAME_BG,
                BF: () => s.default.Messages.COUNTRY_NAME_BF,
                BI: () => s.default.Messages.COUNTRY_NAME_BI,
                KH: () => s.default.Messages.COUNTRY_NAME_KH,
                CM: () => s.default.Messages.COUNTRY_NAME_CM,
                CA: () => s.default.Messages.COUNTRY_NAME_CA,
                CV: () => s.default.Messages.COUNTRY_NAME_CV,
                KY: () => s.default.Messages.COUNTRY_NAME_KY,
                CF: () => s.default.Messages.COUNTRY_NAME_CF,
                TD: () => s.default.Messages.COUNTRY_NAME_TD,
                CL: () => s.default.Messages.COUNTRY_NAME_CL,
                CN: () => s.default.Messages.COUNTRY_NAME_CN,
                CX: () => s.default.Messages.COUNTRY_NAME_CX,
                CC: () => s.default.Messages.COUNTRY_NAME_CC,
                CO: () => s.default.Messages.COUNTRY_NAME_CO,
                KM: () => s.default.Messages.COUNTRY_NAME_KM,
                CG: () => s.default.Messages.COUNTRY_NAME_CG,
                CD: () => s.default.Messages.COUNTRY_NAME_CD,
                CK: () => s.default.Messages.COUNTRY_NAME_CK,
                CR: () => s.default.Messages.COUNTRY_NAME_CR,
                CI: () => s.default.Messages.COUNTRY_NAME_CI,
                HR: () => s.default.Messages.COUNTRY_NAME_HR,
                CU: () => s.default.Messages.COUNTRY_NAME_CU,
                CW: () => s.default.Messages.COUNTRY_NAME_CW,
                CY: () => s.default.Messages.COUNTRY_NAME_CY,
                CZ: () => s.default.Messages.COUNTRY_NAME_CZ,
                DK: () => s.default.Messages.COUNTRY_NAME_DK,
                DG: () => s.default.Messages.COUNTRY_NAME_DG,
                DJ: () => s.default.Messages.COUNTRY_NAME_DJ,
                DM: () => s.default.Messages.COUNTRY_NAME_DM,
                DO: () => s.default.Messages.COUNTRY_NAME_DO,
                TP: () => s.default.Messages.COUNTRY_NAME_TP,
                EC: () => s.default.Messages.COUNTRY_NAME_EC,
                EG: () => s.default.Messages.COUNTRY_NAME_EG,
                SV: () => s.default.Messages.COUNTRY_NAME_SV,
                GQ: () => s.default.Messages.COUNTRY_NAME_GQ,
                ER: () => s.default.Messages.COUNTRY_NAME_ER,
                EE: () => s.default.Messages.COUNTRY_NAME_EE,
                ET: () => s.default.Messages.COUNTRY_NAME_ET,
                FK: () => s.default.Messages.COUNTRY_NAME_FK,
                FO: () => s.default.Messages.COUNTRY_NAME_FO,
                FJ: () => s.default.Messages.COUNTRY_NAME_FJ,
                FI: () => s.default.Messages.COUNTRY_NAME_FI,
                FR: () => s.default.Messages.COUNTRY_NAME_FR,
                GF: () => s.default.Messages.COUNTRY_NAME_GF,
                PF: () => s.default.Messages.COUNTRY_NAME_PF,
                TF: () => s.default.Messages.COUNTRY_NAME_TF,
                GA: () => s.default.Messages.COUNTRY_NAME_GA,
                GM: () => s.default.Messages.COUNTRY_NAME_GM,
                GE: () => s.default.Messages.COUNTRY_NAME_GE,
                DE: () => s.default.Messages.COUNTRY_NAME_DE,
                GH: () => s.default.Messages.COUNTRY_NAME_GH,
                GI: () => s.default.Messages.COUNTRY_NAME_GI,
                GR: () => s.default.Messages.COUNTRY_NAME_GR,
                GL: () => s.default.Messages.COUNTRY_NAME_GL,
                GD: () => s.default.Messages.COUNTRY_NAME_GD,
                GP: () => s.default.Messages.COUNTRY_NAME_GP,
                GU: () => s.default.Messages.COUNTRY_NAME_GU,
                GT: () => s.default.Messages.COUNTRY_NAME_GT,
                GG: () => s.default.Messages.COUNTRY_NAME_GG,
                GN: () => s.default.Messages.COUNTRY_NAME_GN,
                GW: () => s.default.Messages.COUNTRY_NAME_GW,
                GY: () => s.default.Messages.COUNTRY_NAME_GY,
                HT: () => s.default.Messages.COUNTRY_NAME_HT,
                HM: () => s.default.Messages.COUNTRY_NAME_HM,
                VA: () => s.default.Messages.COUNTRY_NAME_VA,
                HN: () => s.default.Messages.COUNTRY_NAME_HN,
                HK: () => s.default.Messages.COUNTRY_NAME_HK,
                HU: () => s.default.Messages.COUNTRY_NAME_HU,
                IS: () => s.default.Messages.COUNTRY_NAME_IS,
                IN: () => s.default.Messages.COUNTRY_NAME_IN,
                ID: () => s.default.Messages.COUNTRY_NAME_ID,
                IR: () => s.default.Messages.COUNTRY_NAME_IR,
                IQ: () => s.default.Messages.COUNTRY_NAME_IQ,
                IE: () => s.default.Messages.COUNTRY_NAME_IE,
                IM: () => s.default.Messages.COUNTRY_NAME_IM,
                IL: () => s.default.Messages.COUNTRY_NAME_IL,
                IT: () => s.default.Messages.COUNTRY_NAME_IT,
                JM: () => s.default.Messages.COUNTRY_NAME_JM,
                JP: () => s.default.Messages.COUNTRY_NAME_JP,
                JE: () => s.default.Messages.COUNTRY_NAME_JE,
                JO: () => s.default.Messages.COUNTRY_NAME_JO,
                KZ: () => s.default.Messages.COUNTRY_NAME_KZ,
                KE: () => s.default.Messages.COUNTRY_NAME_KE,
                KI: () => s.default.Messages.COUNTRY_NAME_KI,
                XK: () => s.default.Messages.COUNTRY_NAME_XK,
                KP: () => s.default.Messages.COUNTRY_NAME_KP,
                KR: () => s.default.Messages.COUNTRY_NAME_KR,
                KW: () => s.default.Messages.COUNTRY_NAME_KW,
                KG: () => s.default.Messages.COUNTRY_NAME_KG,
                LA: () => s.default.Messages.COUNTRY_NAME_LA,
                LV: () => s.default.Messages.COUNTRY_NAME_LV,
                LB: () => s.default.Messages.COUNTRY_NAME_LB,
                LS: () => s.default.Messages.COUNTRY_NAME_LS,
                LR: () => s.default.Messages.COUNTRY_NAME_LR,
                LY: () => s.default.Messages.COUNTRY_NAME_LY,
                LI: () => s.default.Messages.COUNTRY_NAME_LI,
                LT: () => s.default.Messages.COUNTRY_NAME_LT,
                LU: () => s.default.Messages.COUNTRY_NAME_LU,
                MO: () => s.default.Messages.COUNTRY_NAME_MO,
                MK: () => s.default.Messages.COUNTRY_NAME_MK,
                MG: () => s.default.Messages.COUNTRY_NAME_MG,
                MW: () => s.default.Messages.COUNTRY_NAME_MW,
                MY: () => s.default.Messages.COUNTRY_NAME_MY,
                MV: () => s.default.Messages.COUNTRY_NAME_MV,
                ML: () => s.default.Messages.COUNTRY_NAME_ML,
                MT: () => s.default.Messages.COUNTRY_NAME_MT,
                MH: () => s.default.Messages.COUNTRY_NAME_MH,
                MQ: () => s.default.Messages.COUNTRY_NAME_MQ,
                MR: () => s.default.Messages.COUNTRY_NAME_MR,
                MU: () => s.default.Messages.COUNTRY_NAME_MU,
                YT: () => s.default.Messages.COUNTRY_NAME_YT,
                MX: () => s.default.Messages.COUNTRY_NAME_MX,
                FM: () => s.default.Messages.COUNTRY_NAME_FM,
                MI: () => s.default.Messages.COUNTRY_NAME_MI,
                MD: () => s.default.Messages.COUNTRY_NAME_MD,
                MC: () => s.default.Messages.COUNTRY_NAME_MC,
                MN: () => s.default.Messages.COUNTRY_NAME_MN,
                ME: () => s.default.Messages.COUNTRY_NAME_ME,
                MS: () => s.default.Messages.COUNTRY_NAME_MS,
                MA: () => s.default.Messages.COUNTRY_NAME_MA,
                MZ: () => s.default.Messages.COUNTRY_NAME_MZ,
                MM: () => s.default.Messages.COUNTRY_NAME_MM,
                NA: () => s.default.Messages.COUNTRY_NAME_NA,
                NR: () => s.default.Messages.COUNTRY_NAME_NR,
                NP: () => s.default.Messages.COUNTRY_NAME_NP,
                NL: () => s.default.Messages.COUNTRY_NAME_NL,
                AN: () => s.default.Messages.COUNTRY_NAME_AN,
                NC: () => s.default.Messages.COUNTRY_NAME_NC,
                NZ: () => s.default.Messages.COUNTRY_NAME_NZ,
                NI: () => s.default.Messages.COUNTRY_NAME_NI,
                NE: () => s.default.Messages.COUNTRY_NAME_NE,
                NG: () => s.default.Messages.COUNTRY_NAME_NG,
                NU: () => s.default.Messages.COUNTRY_NAME_NU,
                NF: () => s.default.Messages.COUNTRY_NAME_NF,
                MP: () => s.default.Messages.COUNTRY_NAME_MP,
                NO: () => s.default.Messages.COUNTRY_NAME_NO,
                OM: () => s.default.Messages.COUNTRY_NAME_OM,
                PK: () => s.default.Messages.COUNTRY_NAME_PK,
                PW: () => s.default.Messages.COUNTRY_NAME_PW,
                PS: () => s.default.Messages.COUNTRY_NAME_PS,
                PA: () => s.default.Messages.COUNTRY_NAME_PA,
                PG: () => s.default.Messages.COUNTRY_NAME_PG,
                PY: () => s.default.Messages.COUNTRY_NAME_PY,
                PE: () => s.default.Messages.COUNTRY_NAME_PE,
                PH: () => s.default.Messages.COUNTRY_NAME_PH,
                PN: () => s.default.Messages.COUNTRY_NAME_PN,
                PL: () => s.default.Messages.COUNTRY_NAME_PL,
                PT: () => s.default.Messages.COUNTRY_NAME_PT,
                PR: () => s.default.Messages.COUNTRY_NAME_PR,
                QA: () => s.default.Messages.COUNTRY_NAME_QA,
                RE: () => s.default.Messages.COUNTRY_NAME_RE,
                RO: () => s.default.Messages.COUNTRY_NAME_RO,
                RU: () => s.default.Messages.COUNTRY_NAME_RU,
                RW: () => s.default.Messages.COUNTRY_NAME_RW,
                BL: () => s.default.Messages.COUNTRY_NAME_BL,
                SH: () => s.default.Messages.COUNTRY_NAME_SH,
                KN: () => s.default.Messages.COUNTRY_NAME_KN,
                LC: () => s.default.Messages.COUNTRY_NAME_LC,
                MF: () => s.default.Messages.COUNTRY_NAME_MF,
                PM: () => s.default.Messages.COUNTRY_NAME_PM,
                VC: () => s.default.Messages.COUNTRY_NAME_VC,
                WS: () => s.default.Messages.COUNTRY_NAME_WS,
                SM: () => s.default.Messages.COUNTRY_NAME_SM,
                ST: () => s.default.Messages.COUNTRY_NAME_ST,
                SA: () => s.default.Messages.COUNTRY_NAME_SA,
                SN: () => s.default.Messages.COUNTRY_NAME_SN,
                RS: () => s.default.Messages.COUNTRY_NAME_RS,
                SC: () => s.default.Messages.COUNTRY_NAME_SC,
                SL: () => s.default.Messages.COUNTRY_NAME_SL,
                SG: () => s.default.Messages.COUNTRY_NAME_SG,
                SX: () => s.default.Messages.COUNTRY_NAME_SX,
                SK: () => s.default.Messages.COUNTRY_NAME_SK,
                SI: () => s.default.Messages.COUNTRY_NAME_SI,
                SB: () => s.default.Messages.COUNTRY_NAME_SB,
                SO: () => s.default.Messages.COUNTRY_NAME_SO,
                ZA: () => s.default.Messages.COUNTRY_NAME_ZA,
                GS: () => s.default.Messages.COUNTRY_NAME_GS,
                SS: () => s.default.Messages.COUNTRY_NAME_SS,
                ES: () => s.default.Messages.COUNTRY_NAME_ES,
                LK: () => s.default.Messages.COUNTRY_NAME_LK,
                SD: () => s.default.Messages.COUNTRY_NAME_SD,
                SR: () => s.default.Messages.COUNTRY_NAME_SR,
                SJ: () => s.default.Messages.COUNTRY_NAME_SJ,
                SZ: () => s.default.Messages.COUNTRY_NAME_SZ,
                SE: () => s.default.Messages.COUNTRY_NAME_SE,
                CH: () => s.default.Messages.COUNTRY_NAME_CH,
                SY: () => s.default.Messages.COUNTRY_NAME_SY,
                TW: () => s.default.Messages.COUNTRY_NAME_TW,
                TJ: () => s.default.Messages.COUNTRY_NAME_TJ,
                TZ: () => s.default.Messages.COUNTRY_NAME_TZ,
                TH: () => s.default.Messages.COUNTRY_NAME_TH,
                TL: () => s.default.Messages.COUNTRY_NAME_TL,
                TG: () => s.default.Messages.COUNTRY_NAME_TG,
                TK: () => s.default.Messages.COUNTRY_NAME_TK,
                TO: () => s.default.Messages.COUNTRY_NAME_TO,
                TT: () => s.default.Messages.COUNTRY_NAME_TT,
                TN: () => s.default.Messages.COUNTRY_NAME_TN,
                TR: () => s.default.Messages.COUNTRY_NAME_TR,
                TM: () => s.default.Messages.COUNTRY_NAME_TM,
                TC: () => s.default.Messages.COUNTRY_NAME_TC,
                TV: () => s.default.Messages.COUNTRY_NAME_TV,
                UG: () => s.default.Messages.COUNTRY_NAME_UG,
                UA: () => s.default.Messages.COUNTRY_NAME_UA,
                AE: () => s.default.Messages.COUNTRY_NAME_AE,
                GB: () => s.default.Messages.COUNTRY_NAME_GB,
                US: () => s.default.Messages.COUNTRY_NAME_US,
                UM: () => s.default.Messages.COUNTRY_NAME_UM,
                UY: () => s.default.Messages.COUNTRY_NAME_UY,
                UZ: () => s.default.Messages.COUNTRY_NAME_UZ,
                VU: () => s.default.Messages.COUNTRY_NAME_VU,
                VE: () => s.default.Messages.COUNTRY_NAME_VE,
                VN: () => s.default.Messages.COUNTRY_NAME_VN,
                VG: () => s.default.Messages.COUNTRY_NAME_VG,
                VI: () => s.default.Messages.COUNTRY_NAME_VI,
                WF: () => s.default.Messages.COUNTRY_NAME_WF,
                EH: () => s.default.Messages.COUNTRY_NAME_EH,
                YE: () => s.default.Messages.COUNTRY_NAME_YE,
                ZM: () => s.default.Messages.COUNTRY_NAME_ZM,
                ZW: () => s.default.Messages.COUNTRY_NAME_ZW
            };

            function d(e) {
                return o[e]()
            }
        },
        711326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMediaPostEmbedCommonData: function() {
                    return h
                },
                getMediaPostEmbedChannelPath: function() {
                    return c
                },
                canUseMediaPostEmbed: function() {
                    return E
                }
            });
            var a = n("312016"),
                l = n("361572"),
                i = n("305961"),
                s = n("315102"),
                u = n("387111"),
                r = n("856220"),
                o = n("49111"),
                d = n("894488"),
                C = n("782340");

            function h(e) {
                var t, n, a, l, i;
                let {
                    mediaPostEmbedData: o,
                    guild: h,
                    parentChannel: c,
                    postThread: E,
                    user: f,
                    selectedGuildId: _,
                    canAccess: p = !1
                } = e;
                if (null == o) return null;
                let N = (0, r.getThumbnailImage)(o.thumbnail),
                    T = !p && o.has_media_attachment,
                    g = p ? C.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : C.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
                    S = null != f ? u.default.getName(o.guild_id, o.channel_id, f) : void 0,
                    I = null == f ? void 0 : f.getAvatarURL(null == h ? void 0 : h.id, 40);
                (null == I || _ !== o.guild_id) && (I = s.default.getGuildIconURL({
                    id: o.guild_id,
                    icon: o.guild_icon,
                    size: 40,
                    canAnimate: !1
                }));
                let A = function(e) {
                        if (null == e) return !1;
                        let {
                            height: t,
                            width: n
                        } = e;
                        return null != t && null != n && t >= n
                    }(o.thumbnail) && !T,
                    m = (null === (t = o.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (a = o.thumbnail) || void 0 === a ? void 0 : null === (n = a.filename) || void 0 === n ? void 0 : n.startsWith(d.SPOILER_ATTACHMENT_PREFIX));
                return {
                    title: null !== (l = o.title) && void 0 !== l ? l : "",
                    subtitle: o.description,
                    ctaText: g,
                    coverImage: N,
                    coverImageOverlayText: T ? C.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: o.parent_channel_id,
                    threadId: o.channel_id,
                    postThread: E,
                    messageId: o.message_id,
                    canAccess: p,
                    guildId: o.guild_id,
                    guildName: null !== (i = null == h ? void 0 : h.name) && void 0 !== i ? i : o.guild_name,
                    authorId: null == o ? void 0 : o.author_id,
                    authorName: S,
                    channelName: null == c ? void 0 : c.name,
                    avatarUrl: I,
                    shouldShowBlurredThumbnailImage: T,
                    shouldContainMediaWithBackground: A,
                    shouldSpoiler: m,
                    obscureAwaitingScan: !1,
                    flags: o.flags,
                    contentScanVersion: o.content_scan_version
                }
            }

            function c(e) {
                if (null == e) return;
                let t = (0, a.parseURLSafely)(e);
                if (null == t) return;
                let n = (0, a.remainingPathFromDiscordHostMatch)(t);
                if (null != n) return (0, l.tryParseChannelPath)(n)
            }

            function E(e, t) {
                let n = i.default.getGuild(e);
                if (null == n || null == t) return !1;
                let a = n.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
                    l = !0 === t.isMediaChannel();
                return l && a
            }
        },
        856220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_THUMBNAIL_COUNT: function() {
                    return l
                },
                getEmbedPreviewImageUrl: function() {
                    return i
                },
                getThumbnailImage: function() {
                    return s
                }
            });
            var a = n("651693");
            let l = 4;

            function i(e) {
                var t, n;
                if (null == e) return;
                let {
                    thumbnail: a,
                    image: l
                } = e;
                return null != a ? null !== (t = a.proxy_url) && void 0 !== t ? t : a.url : null != l ? null !== (n = l.proxy_url) && void 0 !== n ? n : l.url : void 0
            }

            function s(e) {
                if (null == e) return;
                let {
                    url: t,
                    proxy_url: n
                } = e;
                if (null != t && null != n) {
                    let e = (0, a.isVideoUrl)(t);
                    return e ? "".concat(n, "?format=jpeg") : n
                }
                return t
            }
        },
        288518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("988415"),
                l = n("42203"),
                i = n("455079");
            let s = new Set,
                u = new Set,
                r = !1,
                o = null;

            function d(e) {
                return e.isMessageRequest && !e.isSpam
            }

            function C(e) {
                let t = !1;
                return d(e) && !s.has(e.id) && (s.add(e.id), t = !0), !d(e) && s.has(e.id) && (s.delete(e.id), t = !0), !d(e) && u.has(e.id) && (u.delete(e.id), t = !0), t
            }

            function h(e) {
                var t;
                null != e && (o = null !== (t = (0, a.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, a.getDefaultCountryCode)())
            }

            function c(e) {
                "CONNECTION_OPEN" === e.type && h(e.countryCode), s.clear(), u.clear(), Object.values(l.default.getMutablePrivateChannels()).forEach(e => {
                    C(e)
                }), r = !0
            }

            function E(e) {
                let {
                    channelId: t
                } = e;
                u.add(t)
            }

            function f(e) {
                let {
                    channel: t
                } = e;
                return C(t)
            }

            function _(e) {
                let {
                    channels: t
                } = e;
                for (let e of t) C(e)
            }

            function p(e) {
                let {
                    channel: t
                } = e;
                return !!s.has(t.id) && (s.delete(t.id), !0)
            }

            function N(e) {
                let {
                    messageRequestChannelIds: t
                } = e;
                t.forEach(e => s.add(e))
            }

            function T(e) {
                let {
                    countryCode: t
                } = e;
                h(t)
            }
            class g extends i.default {
                takeSnapshot() {
                    return {
                        version: g.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(s)
                    }
                }
                getMessageRequestChannelIds() {
                    return s
                }
                getMessageRequestsCount() {
                    return s.size
                }
                isMessageRequest(e) {
                    return s.has(e)
                }
                isAcceptedOptimistic(e) {
                    return u.has(e)
                }
                getUserCountryCode() {
                    return o
                }
                isReady() {
                    return r
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
                        null != e && (s = new Set(e))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: c,
                        CONNECTION_OPEN_SUPPLEMENTAL: c,
                        CACHE_LOADED_LAZY: this.loadCache,
                        OVERLAY_INITIALIZE: N,
                        CHANNEL_CREATE: f,
                        CHANNEL_UPDATES: _,
                        CHANNEL_DELETE: p,
                        SET_LOCATION_METADATA: T,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: E
                    }), this.waitFor(l.default)
                }
            }
            g.displayName = "MessageRequestStore", g.LATEST_SNAPSHOT_VERSION = 1;
            var S = new g
        },
        415435: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                filterOutMessageRequestsAndSpam: function() {
                    return i
                },
                filterOutMessageRequestsAndSpamById: function() {
                    return s
                },
                isMessageRequestOrSpamRequest: function() {
                    return u
                },
                shouldShowMessageRequests: function() {
                    return r
                }
            });
            var a = n("288518"),
                l = n("486503");

            function i(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, l.default], i = function(e) {
                    return Object.keys(e).map(t => [t, e[t]])
                }(e), s = i.filter(e => {
                    let [, a] = e;
                    return !t.isMessageRequest(a.id) && !n.isSpam(a.id)
                });
                return function(e) {
                    return Array.from(e).reduce((e, t) => {
                        let [n, a] = t;
                        return Object.assign(e, {
                            [n]: a
                        })
                    }, {})
                }(s)
            }

            function s(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, l.default];
                return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
            }

            function u(e) {
                let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, l.default];
                return t.isMessageRequest(e) || n.isSpam(e)
            }

            function r() {
                let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.default, l.default], n = t.getSpamChannelsCount(), i = e.getMessageRequestsCount();
                return i > 0 || n > 0
            }
        },
        486503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("42203"),
                l = n("455079");
            let i = new Set,
                s = new Set,
                u = !1;

            function r(e) {
                return e.isSpam
            }

            function o(e) {
                let t = !1;
                if (e.isSpam && !i.has(e.id)) i.add(e.id), t = !0;
                if (!e.isSpam && i.has(e.id)) i.delete(e.id), t = !0;
                if (!e.isSpam && s.has(e.id)) s.delete(e.id), t = !0;
                return t
            }

            function d() {
                i.clear(), s.clear(), Object.values(a.default.getMutablePrivateChannels()).forEach(e => {
                    o(e)
                }), u = !0
            }

            function C(e) {
                let {
                    channelId: t
                } = e;
                s.add(t)
            }

            function h(e) {
                let {
                    channel: t
                } = e;
                return o(t)
            }

            function c(e) {
                let {
                    channels: t
                } = e;
                for (let e of t) o(e)
            }

            function E(e) {
                let {
                    channel: t
                } = e, n = !1;
                return i.has(t.id) && (i.delete(t.id), n = !0), n
            }
            class f extends l.default {
                takeSnapshot() {
                    return {
                        version: f.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(i)
                    }
                }
                getSpamChannelIds() {
                    return i
                }
                getSpamChannelsCount() {
                    return i.size
                }
                isSpam(e) {
                    return i.has(e)
                }
                isAcceptedOptimistic(e) {
                    return s.has(e)
                }
                isReady() {
                    return u
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(f.LATEST_SNAPSHOT_VERSION);
                        null != e && (i = new Set(e))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: d,
                        CONNECTION_OPEN_SUPPLEMENTAL: d,
                        CACHE_LOADED_LAZY: this.loadCache,
                        CHANNEL_CREATE: h,
                        CHANNEL_UPDATES: c,
                        CHANNEL_DELETE: E,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: C
                    }), this.waitFor(a.default)
                }
            }
            f.displayName = "SpamMessageRequestStore", f.LATEST_SNAPSHOT_VERSION = 1;
            var _ = new f
        },
        651693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return s
                },
                isAnimatedImageUrl: function() {
                    return r
                },
                isVideoUrl: function() {
                    return d
                },
                isVideoFile: function() {
                    return C
                }
            });
            var a = n("773336");
            let l = (e, t) => {
                    if (null == e) return !1;
                    let [n, a] = e.split(/\?/, 1);
                    return t.test(n)
                },
                i = /\.(png|jpe?g|webp|gif|heic|heif)$/i,
                s = e => null != e && i.test(e),
                u = /\.(webp|gif)$/i,
                r = e => l(e, u),
                o = (0, a.isIOS)() ? /\.(mp4|mov)$/i : ((0, a.isAndroid)(), /\.(mp4|webm|mov)$/i),
                d = e => l(e, o),
                C = e => null != e && o.test(e)
        },
        913796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useInDesktopNotificationCenterExperiment: function() {
                    return s
                },
                inDesktopNotificationCenterExperiment: function() {
                    return u
                }
            });
            var a = n("884691"),
                l = n("862205");
            let i = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-11_desktop_notification_center",
                    label: "Desktop notification center",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification center desktop enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = () => {
                    let {
                        enabled: e
                    } = i.useExperiment({
                        location: "b8976e_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return a.useEffect(() => {
                        i.trackExposure({
                            location: "b8976e_2"
                        })
                    }, []), e
                },
                u = () => {
                    let {
                        enabled: e
                    } = i.getCurrentConfig({
                        location: "b8976e_3"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                }
        },
        136511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("446674"),
                l = n("913144"),
                i = n("398604");
            n("21121");
            var s = n("692038"),
                u = n("514933"),
                r = n("719926"),
                o = n("305961"),
                d = n("27618"),
                C = n("697218"),
                h = n("299039"),
                c = n("159885"),
                E = n("158998"),
                f = n("360191"),
                _ = n("342176"),
                p = n("49111"),
                N = n("782340");
            let T = {
                loading: !1,
                initialized: !1,
                errored: !1,
                isDataStale: !1,
                notifCenterItems: [],
                staleNotifCenterItems: [],
                notifCenterIds: new Set,
                notifCenterLocalItems: [],
                paginationHasMore: !0,
                paginationCursor: void 0,
                notifCenterActive: !1,
                notifCenterTabFocused: !1
            };

            function g(e) {
                return null != e.id && null != e.body && null != e.type
            }

            function S() {
                T = {
                    loading: !1,
                    initialized: !1,
                    errored: !1,
                    isDataStale: !1,
                    notifCenterItems: [],
                    staleNotifCenterItems: [],
                    notifCenterIds: new Set,
                    notifCenterLocalItems: [],
                    paginationHasMore: !0,
                    paginationCursor: void 0,
                    notifCenterActive: !1,
                    notifCenterTabFocused: !1
                }
            }

            function I(e) {
                var t, n;
                if ((0, u.isNotificationRedesignV2Enabled)() && e.type === f.NotificationCenterItems.FRIEND_SUGGESTION_CREATED && d.default.getRelationshipType(null !== (n = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "") === p.RelationshipTypes.PENDING_OUTGOING) {
                    let t = E.default.getName(e.other_user);
                    e = {
                        ...e,
                        body: N.default.Messages.NOTIF_CENTER_V2_ADD_FRIEND_REQUEST_SENT.format({
                            user: t
                        })
                    }
                }
                return {
                    ...e,
                    kind: "notification-center-item",
                    message: null != e.message ? (0, s.createMessageRecord)(e.message) : void 0
                }
            }

            function A(e) {
                let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? I(e.item) : e.item;
                if (!T.initialized || !g(t) || T.notifCenterIds.has(t.id)) return !1;
                T.notifCenterIds.add(t.id), T.notifCenterItems = [t, ...T.notifCenterItems], T.notifCenterItems.sort((e, t) => h.default.compare(t.id, e.id))
            }

            function m(e, t) {
                T.notifCenterItems = T.notifCenterItems.map(n => e.includes(n.id) ? {
                    ...n,
                    acked: t
                } : n).filter(g)
            }

            function M(e, t, n) {
                var a;
                return e.type === t && (null === (a = e.other_user) || void 0 === a ? void 0 : a.id) === n
            }

            function R(e) {
                var t;
                if (!(0, i.isGuildEventEnded)(e)) return;
                let n = t => t.type === f.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
                    a = e.name,
                    l = null === (t = o.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
                T.notifCenterItems = T.notifCenterItems.map(e => n(e) ? {
                    ...e,
                    disable_action: !0,
                    body: (0, c.isNullOrEmpty)(l) || (0, c.isNullOrEmpty)(a) ? e.body : N.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                        event_name: a,
                        guild_name: l
                    })
                } : e)
            }
            class y extends a.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(C.default), null != e) {
                        let t = e.notifCenterItems.map(e => ({
                            ...e,
                            message: null != e.message ? new r.default(e.message) : void 0
                        }));
                        t.length > 0 && (T = {
                            ...T,
                            initialized: !0,
                            isDataStale: !0,
                            notifCenterItems: [],
                            staleNotifCenterItems: t
                        })
                    }
                }
                getState() {
                    let e = e => ({
                        ...e,
                        message: null != e.message ? e.message.toJS() : void 0
                    });
                    return {
                        ...T,
                        notifCenterItems: T.notifCenterItems.map(e),
                        staleNotifCenterItems: T.staleNotifCenterItems.map(e)
                    }
                }
                get loading() {
                    return T.loading
                }
                get initialized() {
                    return T.initialized
                }
                get items() {
                    return T.isDataStale ? T.staleNotifCenterItems : T.notifCenterItems
                }
                get hasMore() {
                    return T.paginationHasMore
                }
                get cursor() {
                    return T.paginationCursor
                }
                get errored() {
                    return T.errored
                }
                get active() {
                    return T.notifCenterActive
                }
                get localItems() {
                    return T.notifCenterLocalItems
                }
                get tabFocused() {
                    return T.notifCenterTabFocused
                }
            }
            y.displayName = "NotificationCenterItemsStore", y.persistKey = "NotificationCenterItemsStore_v2";
            var O = new y(l.default, {
                CONNECTION_OPEN: function(e) {
                    !(0, u.isNotificationRedesignV2Enabled)() && S();
                    let t = [];
                    e.relationships.forEach(e => {
                        let {
                            type: n,
                            user: a,
                            since: l
                        } = e;
                        if (n !== p.RelationshipTypes.PENDING_INCOMING || null == a || null == l) return null;
                        let i = C.default.getUser(a.id);
                        if (null == i) return null;
                        let s = (0, _.incomingFriendRequestLocalItem)(i, l);
                        !(h.default.age(s.id) > 7776e6) && t.push(s)
                    }), e.guilds.forEach(e => {
                        e.guild_scheduled_events.forEach(e => {
                            R(e)
                        })
                    }), T.notifCenterLocalItems = t
                },
                LOGOUT: S,
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    let {
                        ids: t
                    } = e;
                    m(t, !0)
                },
                NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
                    let {
                        ids: t
                    } = e;
                    m(t, !1)
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    R(e.guildScheduledEvent)
                },
                NOTIFICATION_CENTER_ITEM_CREATE: A,
                NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (!T.notifCenterIds.has(t)) return !1;
                    T.notifCenterIds.delete(t), T.notifCenterItems = T.notifCenterItems.filter(e => e.id !== t)
                },
                NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: A,
                LOAD_NOTIFICATION_CENTER_ITEMS: function() {
                    T.loading = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
                    T.loading = !1, T.initialized = !0, T.errored = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    let {
                        items: t,
                        hasMore: n,
                        cursor: a
                    } = e;
                    T.loading && (T.loading = !1, T.initialized = !0, T.errored = !1, T.isDataStale = !1, (null == a || !T.notifCenterIds.has(a)) && (T.paginationHasMore = t.length > 0 && n, T.paginationCursor = t.length > 0 ? a : void 0), T.notifCenterItems = [...T.notifCenterItems, ...t.map(I).filter(e => !T.notifCenterIds.has(e.id))], T.notifCenterItems.sort((e, t) => h.default.compare(t.id, e.id)), t.forEach(e => T.notifCenterIds.add(e.id)))
                },
                RESET_NOTIFICATION_CENTER: S,
                NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
                    let {
                        active: t
                    } = e;
                    T.notifCenterActive = t
                },
                NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
                    let {
                        focused: t
                    } = e;
                    T.notifCenterTabFocused = t
                },
                RELATIONSHIP_ADD: function(e) {
                    if (e.relationship.type === p.RelationshipTypes.PENDING_INCOMING) {
                        let {
                            user: t,
                            since: n
                        } = e.relationship;
                        if (null == n) return null;
                        let a = C.default.getUser(t.id);
                        if (null == a) return null;
                        T.notifCenterLocalItems = [...T.notifCenterLocalItems, (0, _.incomingFriendRequestLocalItem)(a, n)]
                    }
                    e.relationship.type === p.RelationshipTypes.FRIEND && (T.notifCenterLocalItems = T.notifCenterLocalItems.map(t => M(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? {
                        ...t,
                        acked: !0,
                        forceUnacked: !1,
                        local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                        type: f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                        body: N.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                            username: "**".concat(e.relationship.user.username, "**")
                        })
                    } : t))
                },
                RELATIONSHIP_REMOVE: function(e) {
                    T.notifCenterLocalItems = T.notifCenterLocalItems.filter(t => !(M(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || M(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
                },
                NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
                    let {
                        item_enum: t
                    } = e;
                    T.notifCenterItems = T.notifCenterItems.map(e => e.item_enum === t ? {
                        ...e,
                        completed: !0,
                        acked: !0
                    } : e).filter(g)
                },
                NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
                    let {
                        item: t
                    } = e;
                    T.notifCenterItems = T.notifCenterItems.map(e => e.id === t.id ? t : e).filter(g)
                },
                SET_RECENT_MENTIONS_FILTER: S
            })
        },
        360191: function(e, t, n) {
            "use strict";
            var a, l, i, s, u, r, o, d, C, h, c;
            n.r(t), n.d(t, {
                ItemEnum: function() {
                    return l
                },
                NotificationCenterActionTypes: function() {
                    return i
                },
                NotificationCenterTabs: function() {
                    return s
                },
                NotificationCenterItems: function() {
                    return u
                },
                NotificationCenterLocalItems: function() {
                    return r
                }
            }), (a || (a = {})).LANDING = "notification_center_landing", (o = l || (l = {}))[o.UPDATE_PROFILE = 0] = "UPDATE_PROFILE", o[o.FIND_FRIENDS = 1] = "FIND_FRIENDS", o[o.ADD_FRIEND = 2] = "ADD_FRIEND", o[o.FIRST_MESSAGE = 3] = "FIRST_MESSAGE", (d = i || (i = {})).MARK_ALL_READ = "mark_all_read", d.CLICKED = "clicked", d.FRIEND_REQUESTS_BUTTON_CLICK = "friend_requests_button_click", d.ACTION_BUTTON = "action_button", (C = s || (s = {})).ForYou = "ForYou", C.Mentions = "Mentions", C.MessageReminders = "MessageReminders", (h = u || (u = {})).GO_LIVE_PUSH = "go_live_push", h.FRIEND_REQUEST_ACCEPTED = "friend_request_accepted", h.FRIEND_REQUEST_PENDING = "friend_request_pending", h.FRIEND_SUGGESTION_CREATED = "friend_suggestion_created", h.FRIEND_REQUEST_REMINDER = "friend_request_reminder", h.DM_FRIEND_NUDGE = "dm_friend_nudge", h.RECENT_MENTION = "recent_mention", h.REPLY_MENTION = "reply_mention", h.GUILD_SCHEDULED_EVENT_STARTED = "scheduled_guild_event_started", h.SYSTEM_DEMO = "system_demo", h.MISSED_MESSAGES = "missed_messages", h.TOP_MESSAGES = "top_messages", h.LIFECYCLE_ITEM = "lifecycle_item", h.TRENDING_CONTENT = "trending_content", (c = r || (r = {})).INCOMING_FRIEND_REQUESTS = "INCOMING_FRIEND_REQUESTS", c.INCOMING_FRIEND_REQUESTS_ACCEPTED = "INCOMING_FRIEND_REQUESTS_ACCEPTED", c.FRIEND_REQUESTS_GROUPED = "FRIEND_REQUESTS_GROUPED"
        },
        342176: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRelativeTimestamp: function() {
                    return o
                },
                isRemoteAcked: function() {
                    return d
                },
                incomingFriendRequestLocalItem: function() {
                    return C
                },
                isMentionItem: function() {
                    return h
                },
                inNotificationCenterEnabled: function() {
                    return c
                }
            });
            var a = n("249654"),
                l = n("845579"),
                i = n("913796"),
                s = n("360191"),
                u = n("581091"),
                r = n("782340");
            let o = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (0, u.default)({
                        since: e,
                        getFormatter: t ? u.getAbbreviatedFormatter : u.getFullFormatter
                    })
                },
                d = (e, t) => e.acked || t !== l.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && a.default.compare(t, e.id) >= 0;

            function C(e, t) {
                let n = a.default.fromTimestamp(new Date(t).getTime());
                return {
                    acked: !1,
                    forceUnacked: !0,
                    other_user: e,
                    kind: "notification-center-item",
                    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(n),
                    deeplink: "https://discord.com/users/".concat(e.id),
                    type: s.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
                    id: n,
                    body: r.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
                        username: "**".concat(e.username, "**")
                    })
                }
            }
            let h = e => e.type === s.NotificationCenterItems.RECENT_MENTION || e.type === s.NotificationCenterItems.REPLY_MENTION;

            function c() {
                return (0, i.inDesktopNotificationCenterExperiment)()
            }
        },
        581091: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAbbreviatedFormatter: function() {
                    return d
                },
                getFullFormatter: function() {
                    return C
                },
                default: function() {
                    return h
                }
            });
            var a = n("866227"),
                l = n.n(a),
                i = n("782340");
            let s = 3600,
                u = 24 * s,
                r = 30 * u,
                o = 12 * r,
                d = () => ({
                    minutes: i.default.Messages.DURATION_MINUTES_SHORT,
                    hours: i.default.Messages.DURATION_HOURS_SHORT,
                    days: i.default.Messages.DURATION_DAYS_SHORT,
                    months: i.default.Messages.DURATION_MONTHS_SHORT,
                    years: i.default.Messages.DURATION_YEARS_SHORT
                }),
                C = () => ({
                    minutes: i.default.Messages.DURATION_MINUTES_AGO,
                    hours: i.default.Messages.DURATION_HOURS_AGO,
                    days: i.default.Messages.DURATION_DAYS_AGO,
                    months: i.default.Messages.DURATION_MONTHS_AGO,
                    years: i.default.Messages.DURATION_YEARS_AGO
                });

            function h(e) {
                let {
                    since: t,
                    getFormatter: n
                } = e, a = l().diff(l(t), "s"), i = n(), d = l(t).format("LL");
                return d = a < 60 ? i.minutes.format({
                    minutes: 1
                }) : a < s ? i.minutes.format({
                    minutes: Math.floor(a / 60)
                }) : a < u ? i.hours.format({
                    hours: Math.floor(a / s)
                }) : a < r ? i.days.format({
                    days: Math.floor(a / u)
                }) : a < o ? i.months.format({
                    months: Math.floor(a / r)
                }) : i.years.format({
                    years: Math.floor(a / o)
                })
            }
        },
        514933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsNotificationRedesignEnabled: function() {
                    return s
                },
                isNotificationRedesignV2Enabled: function() {
                    return u
                }
            });
            var a = n("862205"),
                l = n("21121"),
                i = n("460609");

            function s() {
                let {
                    enabled: e
                } = r.useExperiment({
                    location: "0721ad_1"
                }, {
                    autoTrackExposure: !0
                });
                return e
            }

            function u() {
                let e = (0, l.isInMainTabsExperiment)();
                return !!e && (!!(0, i.getCombinedMainTabsV2PhaseOneExperimentValue)("showNewNotificationCenter") || o.getCurrentConfig({
                    location: "0721ad_3"
                }, {
                    autoTrackExposure: !1
                }).enabled)
            }
            let r = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-11_notification_redesign",
                    label: "NotificationRedesign",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification Redesign Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-04_notification_redesign_v2",
                    label: "NotificationRedesignV2",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification Redesign V2 Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        512395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOptInEnabledForGuild: function() {
                    return d
                },
                isOptInEnabledForGuild: function() {
                    return C
                },
                useChannelHighlightsEnabledForGuild: function() {
                    return h
                },
                isChannelHighlightsEnabledForGuild: function() {
                    return c
                },
                useShouldShowOnboardingAdminUpsellForGuild: function() {
                    return E
                }
            });
            var a = n("446674"),
                l = n("481555"),
                i = n("305961"),
                s = n("957255"),
                u = n("282109"),
                r = n("697218"),
                o = n("49111");

            function d(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isOptInEnabled(e)),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    l = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return null != e && null != n && null != l && (n.hasFeature(o.GuildFeatures.COMMUNITY) || l.isStaff()) && t
            }

            function C(e) {
                let t = i.default.getGuild(e),
                    n = r.default.getCurrentUser();
                return null != e && null != t && null != n && (t.hasFeature(o.GuildFeatures.COMMUNITY) || n.isStaff()) && u.default.isOptInEnabled(e)
            }

            function h(e) {
                return (0, l.useChannelHighlightsExperiment)()
            }

            function c(e) {
                return (0, l.isChannelHighlightsExperimentEnabled)()
            }

            function E(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    {
                        canManageGuild: n,
                        canManageRoles: l
                    } = (0, a.useStateFromStoresObject)([s.default], () => ({
                        canManageGuild: s.default.can(o.Permissions.MANAGE_GUILD, t),
                        canManageRoles: s.default.can(o.Permissions.MANAGE_ROLES, t)
                    }));
                if (null == t) return !1;
                let u = t.hasFeature(o.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return n && l && !u
            }
        },
        614305: function(e, t, n) {
            "use strict";

            function a() {
                return !1
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        383294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                open: function() {
                    return i
                },
                openChannelCallPopout: function() {
                    return s
                },
                close: function() {
                    return u
                },
                setAlwaysOnTop: function() {
                    return r
                }
            });
            var a = n("913144");
            let l = {
                menubar: !1,
                toolbar: !1,
                location: !1,
                directories: !1
            };

            function i(e, t, n) {
                return a.default.dispatch({
                    type: "POPOUT_WINDOW_OPEN",
                    key: e,
                    features: {
                        ...l,
                        ...n
                    },
                    render: t
                })
            }

            function s(e) {
                return a.default.dispatch({
                    type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
                    channel: e
                })
            }

            function u(e) {
                return a.default.dispatch({
                    type: "POPOUT_WINDOW_CLOSE",
                    key: e
                })
            }

            function r(e, t) {
                return a.default.dispatch({
                    type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
                    alwaysOnTop: t,
                    key: e
                })
            }
        },
        133335: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                ReadStateTypes: function() {
                    return a
                }
            }), (l = a || (a = {}))[l.CHANNEL = 0] = "CHANNEL", l[l.GUILD_EVENT = 1] = "GUILD_EVENT", l[l.NOTIFICATION_CENTER = 2] = "NOTIFICATION_CENTER", l[l.GUILD_HOME = 3] = "GUILD_HOME", l[l.GUILD_ONBOARDING_QUESTION = 4] = "GUILD_ONBOARDING_QUESTION"
        },
        582713: function(e, t, n) {
            "use strict";
            var a, l, i, s, u, r;
            n.r(t), n.d(t, {
                SidebarType: function() {
                    return a
                },
                GuildSidebarType: function() {
                    return l
                },
                SidebarOpenDetailsType: function() {
                    return i
                }
            }), (s = a || (a = {}))[s.CREATE_THREAD = 0] = "CREATE_THREAD", s[s.VIEW_THREAD = 1] = "VIEW_THREAD", s[s.VIEW_CHANNEL = 2] = "VIEW_CHANNEL", s[s.VIEW_MESSAGE_REQUEST = 3] = "VIEW_MESSAGE_REQUEST", (u = l || (l = {}))[u.GUILD_MEMBER_MOD_VIEW = 4] = "GUILD_MEMBER_MOD_VIEW", (r = i || (i = {})).THREAD = "thread", r.MESSAGE_REQUEST = "message-request", r.HOME = "home", r.GUILD_MEMBER_MOD_VIEW = "guild-member-mod-view"
        },
        488464: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            });
            var a = n("714617"),
                l = n.n(a),
                i = n("917351"),
                s = n.n(i),
                u = n("446674"),
                r = n("407846"),
                o = n("913144"),
                d = n("374014"),
                C = n("373469"),
                h = n("271938"),
                c = n("42203"),
                E = n("305961"),
                f = n("957255"),
                _ = n("27618"),
                p = n("280168"),
                N = n("697218"),
                T = n("800762"),
                g = n("316133"),
                S = n("998716"),
                I = n("325861"),
                A = n("834052");
            let m = "NO_GUILD",
                M = new r.default(e => [function(e) {
                    var t;
                    return null !== (t = e.getGuildId()) && void 0 !== t ? t : m
                }(e)], e => e.id),
                R = new Set,
                y = {};

            function O(e) {
                return M.values(null != e ? e : void 0, !0).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })
            }

            function U(e) {
                !R.has(e) && (R.add(e), s(c.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
                    D(e) && M.set(e.id, e)
                }))
            }

            function v(e) {
                let t = y[e];
                if (null != t) return t;
                let n = c.default.getChannel(e);
                return null != n && n.isGuildStageVoice() ? (U(n.guild_id), D(n)) ? L(e) : null : null
            }

            function L(e) {
                let t = y[e];
                return null == t && (t = new S.default(e), y[e] = t, t.rebuild()), t
            }

            function D(e) {
                return null != e && e.isGuildStageVoice() && g.default.countVoiceStatesForChannel(e.id) > 0
            }

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
                return t.reduce((t, n) => {
                    let a = L(n),
                        l = e(a);
                    return l ? (! function(e, t) {
                        let n = c.default.getChannel(e);
                        null != n && n.isGuildStageVoice() ? 0 === t.size() ? H(n.id) : null == M.get(n.id) && M.set(n.id, n) : H(e)
                    }(n, a), !0) : t
                }, !1)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O();
                return P(t => t.updateParticipant(e), t)
            }

            function H(e) {
                return null != e && (delete y[e], M.delete(e), !0)
            }

            function F() {
                R.clear(), M.clear(), y = {}
            }

            function V(e, t, n) {
                if (null == n || e.has(n)) return;
                let a = c.default.getChannel(n);
                (null == a ? void 0 : a.isGuildStageVoice()) && (t.add(n), e.add(n))
            }

            function Y(e) {
                let {
                    user: t
                } = e;
                return G(t.id)
            }

            function b(e) {
                let {
                    relationship: t
                } = e;
                return G(t.id)
            }

            function k(e) {
                let {
                    guild: t
                } = e;
                ! function(e) {
                    let t = M.values(e);
                    for (let e of t) M.delete(e.id), delete y[e.id];
                    R.delete(e)
                }(t.id)
            }

            function w(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    guildId: a,
                    ownerId: l
                } = (0, d.decodeStreamKey)(t);
                return !!(null != a && R.has(a)) && G(l, [n])
            }
            let B = [];
            class x extends u.default.Store {
                initialize() {
                    this.waitFor(h.default, N.default, c.default, p.default, T.default, f.default, g.default, E.default, I.default, _.default, A.default, C.default)
                }
                getParticipantsVersion(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
                getMutableParticipants(e, t) {
                    var n, a;
                    return null == e ? B : null !== (a = null === (n = v(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== a ? a : B
                }
                getMutableRequestToSpeakParticipants(e) {
                    var t, n;
                    return null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : B
                }
                getRequestToSpeakParticipantsVersion(e) {
                    var t, n;
                    return null !== (n = null === (t = v(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
                getParticipantCount(e, t) {
                    var n, a;
                    return null !== (a = null === (n = v(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== a ? a : 0
                }
                getChannels(e) {
                    return U(null != e ? e : m), M.values(null != e ? e : m)
                }
                getChannelsVersion() {
                    return M.version
                }
                getParticipant(e, t) {
                    var n, a;
                    return null !== (a = null === (n = v(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== a ? a : null
                }
            }
            x.displayName = "StageChannelParticipantStore";
            var K = new x(o.default, {
                CONNECTION_OPEN: F,
                OVERLAY_INITIALIZE: F,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = new Set;
                    return t.reduce((e, t) => {
                        if (null == t.guildId || !R.has(t.guildId)) return e;
                        let a = new Set;
                        return (V(n, a, t.oldChannelId), V(n, a, t.channelId), 0 === a.size) ? e : G(t.userId, Array.from(a)) || e
                    }, !1)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return H(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    for (let e of t) n = G(e.user.id) || n;
                    return n
                },
                USER_UPDATE: Y,
                GUILD_MEMBER_REMOVE: Y,
                GUILD_MEMBER_UPDATE: Y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = t.reduce((e, t) => {
                        if (!t.isGuildStageVoice() || !R.has(t.guild_id)) return e;
                        let n = M.get(t.id);
                        return null == n || l(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), M.set(t.id, t), e)
                    }, []);
                    return P(e => e.rebuild(), n), n.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (R.has(t)) return P(e => e.rebuild(), O(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        userId: a
                    } = e;
                    return !!(null != n && R.has(n)) && G(a, [t])
                },
                STREAM_CLOSE: w,
                STREAM_DELETE: w,
                RELATIONSHIP_ADD: b,
                RELATIONSHIP_REMOVE: b,
                GUILD_CREATE: k,
                GUILD_DELETE: k,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = !1;
                    for (let n of O(e.guildId)) t = L(n).rebuild() || t;
                    return t
                }
            })
        },
        998716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageChannelParticipantNamedIndex: function() {
                    return i
                },
                StageChannelParticipantTypes: function() {
                    return s
                },
                default: function() {
                    return y
                }
            });
            var a, l, i, s, u = n("407846"),
                r = n("246846"),
                o = n("374014"),
                d = n("373469"),
                C = n("42203"),
                h = n("124948"),
                c = n("26989"),
                E = n("27618"),
                f = n("697218"),
                _ = n("800762"),
                p = n("387111"),
                N = n("325861"),
                T = n("834052"),
                g = n("808422"),
                S = n("922673"),
                I = n("49111");

            function A(e) {
                var t;
                let {
                    speaker: n,
                    role: a,
                    user: l,
                    userNick: i,
                    connectedOn: u,
                    voiceState: o,
                    type: d
                } = e, C = d === s.STREAM ? "\x00" : "\x01", h = o.selfMute ? "\x01" : "\x00", c = o.selfVideo ? "\x00" : "\x01", E = "".concat(null !== (t = null == a ? void 0 : a.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(n ? "\x00" : "\x01").concat(C).concat(h).concat(c).concat(E).concat(u).concat((0, r.default)(i, l))
            }

            function m(e) {
                let {
                    user: t,
                    voiceState: n
                } = e, a = n.requestToSpeakTimestamp;
                return null == a ? t.id : "".concat(Date.parse(a)).concat(t.id)
            }

            function M(e) {
                return e === g.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === g.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function R(e) {
                let {
                    speaker: t,
                    role: n,
                    rtsState: a,
                    blocked: l,
                    isFriend: s
                } = e, u = [];
                return M(a) && u.push(i.ALL_REQUESTED_TO_SPEAK), a === g.RequestToSpeakStates.REQUESTED_TO_SPEAK && u.push(i.REQUESTED_TO_SPEAK_ONLY), t ? u.push(i.SPEAKER) : (null != n ? u.push(n.id) : u.push(i.NO_ROLE), u.push(i.AUDIENCE)), l && u.push(i.BLOCKED), s && u.push(i.FRIEND), u
            }(a = i || (i = {})).SPEAKER = "SPEAKER", a.AUDIENCE = "AUDIENCE", a.NO_ROLE = "NO_ROLE", a.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", a.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", a.BLOCKED = "BLOCKED", a.FRIEND = "FRIEND", a.SELECTED = "SELECTED", a.MEDIA = "MEDIA", (l = s || (s = {})).VOICE = "VOICE", l.STREAM = "STREAM";
            class y {
                _getParticipantsForUser(e, t) {
                    var n, a;
                    let l;
                    let i = [],
                        u = _.default.getVoiceStateForChannel(this.channelId, e);
                    if (null == u) return i;
                    let r = f.default.getUser(e);
                    if (null == r) return null != this.guildId && T.default.isPublic(this.channelId) && h.default.requestMember(this.guildId, e), i;
                    let C = null != t ? t[0] : null,
                        A = {
                            user: r,
                            userNick: p.default.getName(this.guildId, this.channelId, r),
                            voiceState: u,
                            role: (0, S.getHighestHoistedRole)(this.guildId, e),
                            speaker: N.default.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? c.default.getMember(this.guildId, e) : null,
                            blocked: E.default.getRelationships()[r.id] === I.RelationshipTypes.BLOCKED,
                            isFriend: E.default.isFriend(r.id),
                            connectedOn: null !== (n = null == C ? void 0 : C.connectedOn) && void 0 !== n ? n : Date.now()
                        },
                        m = {
                            ...A,
                            type: s.VOICE,
                            id: r.id,
                            rtsState: (0, g.getAudienceRequestToSpeakState)(u)
                        };
                    i.push(m);
                    let M = null !== (a = d.default.getStreamForUser(e, this.guildId)) && void 0 !== a ? a : d.default.getActiveStreamForUser(e, this.guildId);
                    if (null != M && M.channelId === this.channelId) {
                        let e = (0, o.encodeStreamKey)(M);
                        l = {
                            ...A,
                            id: e,
                            type: s.STREAM,
                            rtsState: g.RequestToSpeakStates.NONE
                        }, i.push(l)
                    }
                    return i
                }
                updateParticipant(e) {
                    let t = this.participants[e],
                        n = this._getParticipantsForUser(e, t);
                    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                        this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
                    }), n.forEach(t => {
                        this._participantsIndex.set(t.id, t), t.id === e && M(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
                    }), this.participants[e] = n, !0)
                }
                rebuild() {
                    let e = C.default.getChannel(this.channelId);
                    if (null == e || !e.isGuildStageVoice()) return !1;
                    let t = new Set(Object.keys(_.default.getVoiceStatesForChannel(e.id)));
                    return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0
                }
                get version() {
                    return this._participantsIndex.version
                }
                size(e) {
                    return this._participantsIndex.size(e)
                }
                toArray(e) {
                    return this._participantsIndex.values(e, !0)
                }
                getParticipant(e) {
                    var t;
                    return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
                }
                get requestToSpeakVersion() {
                    return this._requestToSpeakIndex.version
                }
                getRequestToSpeakParticipants() {
                    return this._requestToSpeakIndex.values(void 0, !0)
                }
                constructor(e) {
                    var t;
                    this.participants = {}, this._participantsIndex = new u.default(R, A), this._requestToSpeakIndex = new u.default(() => [], m), this.channelId = e, this.guildId = null === (t = C.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }
            }
        },
        619395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                removeModeratorOverwrite: function() {
                    return c
                },
                isEmptyOverwrite: function() {
                    return E
                },
                useCanUpdateStageChannelModerators: function() {
                    return f
                },
                useCanModerateRequestToSpeak: function() {
                    return _
                },
                canLurkerListen: function() {
                    return p
                }
            });
            var a = n("316693"),
                l = n("446674"),
                i = n("267567");
            n("271938");
            var s = n("42203"),
                u = n("305961"),
                r = n("957255"),
                o = n("991170"),
                d = n("923510"),
                C = n("834052"),
                h = n("49111");

            function c(e, t, n) {
                var l, i;
                let s = null == n ? void 0 : n.permissionOverwrites[e];
                return {
                    id: e,
                    type: t,
                    deny: null !== (l = null == s ? void 0 : s.deny) && void 0 !== l ? l : o.default.NONE,
                    allow: a.default.remove(null !== (i = null == s ? void 0 : s.allow) && void 0 !== i ? i : o.default.NONE, d.MODERATE_STAGE_CHANNEL_PERMISSIONS)
                }
            }

            function E(e) {
                let {
                    allow: t,
                    deny: n
                } = e;
                return a.default.equals(t, o.default.NONE) && a.default.equals(n, o.default.NONE)
            }

            function f(e) {
                return (0, l.useStateFromStores)([r.default, u.default, s.default], () => {
                    let t = s.default.getChannel(e),
                        n = u.default.getGuild(null == t ? void 0 : t.getGuildId());
                    return !!(r.default.can(h.Permissions.ADMINISTRATOR, n) || r.default.can(h.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || r.default.can(d.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
                }, [e])
            }

            function _(e) {
                return (0, l.useStateFromStores)([s.default, r.default], () => null != e && r.default.can(h.Permissions.MUTE_MEMBERS, s.default.getChannel(e)), [e])
            }

            function p(e) {
                return !!(null != e && e.isGuildStageVoice() && i.default.isLurking(e.guild_id) && C.default.isPublic(e.id)) && r.default.can(d.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
            }
        },
        325861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a, l, i = n("917351"),
                s = n.n(i),
                u = n("446674"),
                r = n("913144"),
                o = n("42203"),
                d = n("923959"),
                C = n("26989"),
                h = n("305961"),
                c = n("697218"),
                E = n("800762"),
                f = n("991170"),
                _ = n("923510"),
                p = n("808422");
            (a = l || (l = {})).SPEAKER = "speaker", a.MODERATOR = "moderator";
            let N = {},
                T = {
                    [l.SPEAKER]: !1,
                    [l.MODERATOR]: !1
                };

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == N[t] && (N[t] = {});
                let a = function(e, t) {
                    var n, a, i;
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        u = o.default.getChannel(t),
                        r = null == u ? void 0 : u.getGuildId(),
                        d = h.default.getGuild(r);
                    if (null == d || null == u || !u.isGuildStageVoice()) return T;
                    return {
                        [l.SPEAKER]: function(e, t) {
                            let n = E.default.getVoiceStateForChannel(t, e);
                            return (0, p.getAudienceRequestToSpeakState)(n) === p.RequestToSpeakStates.ON_STAGE
                        }(e, t),
                        [l.MODERATOR]: s ? (n = e, a = d, i = u, f.default.can({
                            permission: _.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                            user: n,
                            context: a,
                            overwrites: i.permissionOverwrites,
                            roles: a.roles
                        })) : null
                    }
                }(e, t, n);
                return N[t][e] = a, a
            }

            function S(e, t) {
                var n;
                if (null == t) return !1;
                let a = o.default.getChannel(t);
                return !!(null != a && a.isGuildStageVoice()) && (null === (n = N[t]) || void 0 === n || delete n[e], !0)
            }

            function I(e) {
                let t = d.default.getChannels(e)[d.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGuildStageVoice()
                });
                for (let {
                        channel: e
                    }
                    of t) delete N[e.id];
                return t.length > 0
            }

            function A(e) {
                let {
                    guildId: t,
                    user: n
                } = e;
                return null != n && null != t && function(e, t) {
                    for (let n in N) {
                        let a = o.default.getBasicChannel(n);
                        if (null != a) a.guild_id === t && delete N[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function m(e) {
                let {
                    guild: t
                } = e;
                for (let e in N) {
                    let n = o.default.getBasicChannel(e);
                    (null == n || n.guild_id === t.id) && delete N[e]
                }
            }
            class M extends u.default.Store {
                initialize() {
                    this.waitFor(C.default, o.default, h.default, c.default, E.default)
                }
                isSpeaker(e, t) {
                    return this.getPermissionsForUser(e, t)[l.SPEAKER]
                }
                isModerator(e, t) {
                    var n;
                    return null !== (n = this.getPermissionsForUser(e, t, !0)[l.MODERATOR]) && void 0 !== n && n
                }
                isAudienceMember(e, t) {
                    let n = this.getPermissionsForUser(e, t);
                    return !n[l.SPEAKER] && !n[l.MODERATOR]
                }
                getPermissionsForUser(e, t) {
                    var n;
                    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return T;
                    let i = null === (n = N[t]) || void 0 === n ? void 0 : n[e];
                    if (null != i) return a && null == i[l.MODERATOR] ? g(e, t, !0) : i;
                    return g(e, t, a)
                }
            }
            M.displayName = "StageChannelRoleStore";
            var R = new M(r.default, {
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) delete N[e.id]
                },
                CONNECTION_OPEN: function() {
                    N = {}
                },
                GUILD_MEMBER_REMOVE: A,
                GUILD_MEMBER_UPDATE: A,
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    I(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = I(e.guildId);
                    for (let a of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = S(a.userId, a.channelId) || n;
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return !s.isEmpty(N) && t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: a
                        } = t;
                        return S(n, a) || e
                    }, !1)
                },
                GUILD_CREATE: m,
                GUILD_DELETE: m
            })
        },
        819450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageHasMedia: function() {
                    return r
                },
                getStageHasMedia: function() {
                    return o
                },
                isStageVideoEnabled: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("305961"),
                i = n("800762"),
                s = n("488464"),
                u = n("998716");

            function r(e) {
                return (0, a.useStateFromStores)([s.default, i.default], () => {
                    let t = s.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER),
                        n = null != t.find(e => e.type === u.StageChannelParticipantTypes.STREAM);
                    return n || i.default.hasVideo(e)
                }, [e])
            }

            function o(e) {
                let t = s.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER),
                    n = null != t.find(e => e.type === u.StageChannelParticipantTypes.STREAM);
                return n || i.default.hasVideo(e)
            }

            function d(e) {
                var t;
                let n = l.default.getGuild(e);
                return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
            }
        },
        808422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RequestToSpeakStates: function() {
                    return l
                },
                getAudienceRequestToSpeakState: function() {
                    return u
                },
                default: function() {
                    return r
                }
            });
            var a, l, i = n("446674"),
                s = n("800762");

            function u(e) {
                if (null == e) return l.NONE;
                if (e.suppress && null != e.requestToSpeakTimestamp) return l.REQUESTED_TO_SPEAK;
                if (!e.suppress && null != e.requestToSpeakTimestamp) return l.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (!e.suppress && null == e.requestToSpeakTimestamp) return l.ON_STAGE;
                return l.NONE
            }

            function r(e, t) {
                return (0, i.useStateFromStores)([s.default], () => {
                    if (null == e || null == t) return l.NONE;
                    let n = s.default.getVoiceStateForChannel(t, e);
                    return u(n)
                }, [e, t])
            }(a = l || (l = {}))[a.NONE = 0] = "NONE", a[a.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", a[a.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", a[a.ON_STAGE = 3] = "ON_STAGE"
        },
        922673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHighestHoistedRole: function() {
                    return s
                }
            }), n("446674");
            var a = n("26989"),
                l = n("305961"),
                i = n("991170");
            let s = function(e, t) {
                let [n, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, a.default];
                if (null == e || null == t) return null;
                let u = n.getGuild(e);
                if (null == u) return null;
                let r = s.getMember(u.id, t);
                return null == r ? null : i.default.getHighestHoistedRole(u, r)
            }
        },
        689275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("917351"),
                l = n.n(a),
                i = n("446674"),
                s = n("913144"),
                u = n("233069"),
                r = n("42203");
            let o = {},
                d = new Set;

            function C(e) {
                return {
                    id: e.id,
                    parentId: e.parent_id
                }
            }

            function h(e) {
                e in o && delete o[e]
            }

            function c(e) {
                null != e.threads && e.threads.length > 0 && (o[e.id] = {}, e.threads.filter(e => u.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => E(e.id, t))), e.hasThreadsSubscription && d.add(e.id)
            }

            function E(e, t) {
                let n = o[e],
                    a = t.parent_id;
                !(a in n) && (n[a] = {}), o[e][a][t.id] = C(t)
            }

            function f(e) {
                var t, n;
                let {
                    channel: a
                } = e;
                if (!u.ALL_CHANNEL_TYPES.has(a.type)) return !1;
                if ((null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return _(a);
                {
                    let e = null !== (n = o[a.guild_id]) && void 0 !== n ? n : {};
                    o[a.guild_id] = {
                        ...e,
                        [a.parent_id]: {
                            ...e[a.parent_id],
                            [a.id]: C(a)
                        }
                    }
                }
            }

            function _(e) {
                let {
                    guild_id: t,
                    parent_id: n,
                    id: a
                } = e;
                if (null == t || null == n || !(t in o) || !(n in o[t]) || !(a in o[t][n])) return !1;
                o[t] = {
                    ...o[t],
                    [n]: {
                        ...o[t][n]
                    }
                }, delete o[t][n][a], l.isEmpty(o[t][n]) && delete o[t][n]
            }
            let p = {};
            class N extends i.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                isActive(e, t, n) {
                    return null != e && null != this.getThreadsForParent(e, t)[n]
                }
                getThreadsForGuild(e) {
                    var t;
                    return null !== (t = o[e]) && void 0 !== t ? t : p
                }
                getThreadsForParent(e, t) {
                    var n;
                    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : p
                }
                hasThreadsForChannel(e, t) {
                    return !l.isEmpty(this.getThreadsForParent(e, t))
                }
                forEachGuild(e) {
                    for (let t in o) e(t, o[t])
                }
                hasLoaded(e) {
                    return d.has(e)
                }
            }
            N.displayName = "ActiveThreadsStore";
            var T = new N(s.default, {
                CONNECTION_OPEN: function(e) {
                    o = {}, d.clear(), e.guilds.forEach(e => {
                        c(e)
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        channels: t
                    } = e;
                    o = {}, l(t).filter(e => u.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
                        o[t] = {}, e.forEach(e => E(t, e))
                    })
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    h(t.id), c(t)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    h(t.id)
                },
                THREAD_CREATE: f,
                THREAD_UPDATE: f,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        guildId: t,
                        threads: n,
                        channelIds: a
                    } = e;
                    for (let e in null == a && d.add(t), o[t] = {
                            ...o[t]
                        }, o[t]) o[t][e] = {
                        ...o[t][e]
                    };
                    n.forEach(e => E(t, e))
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return _(t)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.guild_id || !(t.guild_id in o)) return !1;
                    o[t.guild_id] = {
                        ...o[t.guild_id]
                    }, delete o[t.guild_id][t.id]
                }
            })
        },
        25932: function(e, t, n) {
            "use strict";

            function a(e) {
                return {
                    id: e.id,
                    userId: e.user_id,
                    flags: e.flags,
                    muted: e.muted,
                    muteConfig: e.mute_config,
                    joinTimestamp: e.join_timestamp
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        172538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("913144"),
                l = n("716241"),
                i = n("659558"),
                s = n("870879"),
                u = n("239448"),
                r = n("42203"),
                o = n("42887"),
                d = n("945956"),
                C = n("18494"),
                h = n("697218");
            let c = (e, t) => ({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    rtc_connection_id: d.default.getRTCConnectionId(),
                    duration: d.default.getDuration(),
                    media_session_id: d.default.getMediaSessionId(),
                    ...(0, l.getVoiceStateMetadata)(d.default.getGuildId(), d.default.getChannelId(), t)
                }),
                E = () => {
                    var e;
                    let t = (0, i.getLastUsedVideoBackgroundOption)(h.default.getCurrentUser());
                    return {
                        video_device_name: null === (e = o.default.getVideoDevices()[o.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
                        video_hardware_scaling_enabled: o.default.getHardwareH264(),
                        video_effect_type: (0, u.getEffectAnalyticsType)(t),
                        video_effect_detail: (0, u.getEffectDetailAnalyticsName)(t)
                    }
                };

            function f(e, t, n, l) {
                let i = C.default.getVoiceChannelId(),
                    u = r.default.getChannel(i);
                if (null == t && null != i && null != u) {
                    let t = c(u, l);
                    if (e(), s.default.hasUsedBackgroundInCall) {
                        let e = {
                            ...t,
                            ...E()
                        };
                        a.default.dispatch({
                            type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                            analyticsData: e
                        })
                    } else a.default.dispatch({
                        type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                        analyticsData: t
                    })
                } else e()
            }
        },
        742171: function(e, t, n) {
            "use strict";

            function a(e) {
                return !1
            }
            n.r(t), n.d(t, {
                isVoicePanelEnabled: function() {
                    return a
                }
            })
        },
        373469: function(e, t, n) {
            "use strict";
            let a, l, i, s;
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var u = n("446674"),
                r = n("913144"),
                o = n("76393"),
                d = n("374014"),
                C = n("223913"),
                h = n("537429"),
                c = n("271938"),
                E = n("42203"),
                f = n("305961"),
                _ = n("42887"),
                p = n("957255"),
                N = n("945956"),
                T = n("568307"),
                g = n("18494"),
                S = n("800762"),
                I = n("49111"),
                A = n("706530");
            let m = null,
                M = {};

            function R() {
                a = new Map, l = {}, i = {}, s = {}, M = {}
            }
            R();

            function y(e) {
                a.delete(e)
            }

            function O() {
                let e = [];
                for (let t in l) {
                    let n = l[t];
                    for (let a in n) e.push(l[t][a])
                }
                return e
            }

            function U(e) {
                let {
                    streamKey: t,
                    region: n,
                    viewerIds: l,
                    paused: s
                } = e;
                a.set(t, {
                    ...(0, d.decodeStreamKey)(t),
                    state: s ? I.ApplicationStreamStates.PAUSED : I.ApplicationStreamStates.ACTIVE
                }), i[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: l
                }
            }

            function v(e, t) {
                return e === A.StreamTypes.CALL || p.default.canWithPartialContext(I.Permissions.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function L(e) {
                let t = E.default.getChannel(e.channelId);
                return !!v(e.streamType, e.channelId) || null != t && (0, C.canWatchStream)(t, S.default, f.default, p.default, o.default)[0]
            }
            class D extends u.default.Store {
                initialize() {
                    this.syncWith([p.default], () => !0), this.waitFor(T.default, p.default)
                }
                isSelfStreamHidden(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t && t
                }
                getLastActiveStream() {
                    var e;
                    return (0, h.default)(_.default) ? null !== (e = Array.from(a.values()).pop()) && void 0 !== e ? e : null : null
                }
                getAllActiveStreams() {
                    return (0, h.default)(_.default) ? Array.from(a.values()) : []
                }
                getAllActiveStreamsForChannel(e) {
                    return (0, h.default)(_.default) ? Array.from(a.values()).filter(t => t.channelId === e) : []
                }
                getActiveStreamForStreamKey(e) {
                    var t;
                    return (0, h.default)(_.default) ? null !== (t = a.get(e)) && void 0 !== t ? t : null : null
                }
                getActiveStreamForApplicationStream(e) {
                    var t;
                    if (!(0, h.default)(_.default) || null == e) return null;
                    let n = (0, d.encodeStreamKey)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                }
                getCurrentUserActiveStream() {
                    let e = g.default.getVoiceChannelId(),
                        t = E.default.getChannel(e);
                    return null == t ? null : this.getActiveStreamForUser(c.default.getId(), t.getGuildId())
                }
                getActiveStreamForUser(e, t) {
                    var n;
                    let a = this.getStreamForUser(e, t);
                    return null != a ? this.getActiveStreamForApplicationStream(a) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
                }
                getStreamerActiveStreamMetadata() {
                    var e;
                    let t = g.default.getVoiceChannelId(),
                        n = E.default.getChannel(t);
                    if (null == n) return null;
                    let a = this.getActiveStreamForUser(c.default.getId(), n.getGuildId());
                    return null == a ? null : null !== (e = s[(0, d.encodeStreamKey)(a)]) && void 0 !== e ? e : null
                }
                getAnyStreamForUser(e) {
                    var t;
                    if (!(0, h.default)(_.default)) return null;
                    let n = l[e];
                    return null == n ? null : null !== (t = Object.values(n).find(e => L(e))) && void 0 !== t ? t : null
                }
                getStreamForUser(e, t) {
                    var n;
                    if (!(0, h.default)(_.default)) return null;
                    let a = null === (n = l[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
                    return null != a && L(a) ? a : null
                }
                getRTCStream(e) {
                    var t;
                    return (0, h.default)(_.default) ? null !== (t = i[e]) && void 0 !== t ? t : null : null
                }
                getAllApplicationStreams() {
                    return (0, h.default)(_.default) ? O().filter(e => null != e && v(e.streamType, e.channelId)) : []
                }
                getAllApplicationStreamsForChannel(e) {
                    return (0, h.default)(_.default) ? O().filter(t => null != t && t.channelId === e && v(t.streamType, t.channelId)) : []
                }
                getViewerIds(e) {
                    if (!(0, h.default)(_.default)) return [];
                    let t = null;
                    t = "string" == typeof e ? e : (0, d.encodeStreamKey)(e);
                    let n = null != t ? i[t] : null;
                    return null != n ? n.viewerIds : []
                }
                getState() {
                    return (0, h.default)(_.default) ? {
                        activeStreams: Array.from(a.entries()),
                        streamsByUserAndGuild: l,
                        rtcStreams: i,
                        streamerActiveStreamMetadatas: s
                    } : {
                        activeStreams: [],
                        streamsByUserAndGuild: {},
                        rtcStreams: {},
                        streamerActiveStreamMetadatas: {}
                    }
                }
            }
            D.displayName = "ApplicationStreamingStore";
            var P = new D(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        applicationStreamState: t
                    } = e;
                    l = t.streamsByUserAndGuild, a = new Map(t.activeStreams), i = t.rtcStreams, s = t.streamerActiveStreamMetadatas
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n, a, i, s, u;
                        let {
                            userId: r,
                            guildId: o,
                            channelId: d,
                            sessionId: C,
                            selfStream: h
                        } = t;
                        if (h && null != d) {
                            ;
                            return null == l[(n = {
                                streamType: null != o ? A.StreamTypes.GUILD : A.StreamTypes.CALL,
                                ownerId: r,
                                guildId: o,
                                channelId: d
                            }).ownerId] && (l[n.ownerId] = {}), l[n.ownerId][null !== (a = n.guildId) && void 0 !== a ? a : "null"] = n, !0
                        } {
                            ;
                            let t = c.default.getSessionId();
                            if (r === c.default.getId() && C !== t && null != N.default.getChannelId()) return e;
                            return i = r, s = null != (s = o) ? s : "null", (null === (u = l[i]) || void 0 === u ? void 0 : u[s]) != null && (delete l[i][s], !0) || e
                        }
                    }, !1)
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, n = (0, d.decodeStreamKey)(t);
                    a.delete(t), a.set(t, {
                        ...n,
                        state: I.ApplicationStreamStates.CONNECTING
                    }), n.ownerId === c.default.getId() && (M[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: l,
                        pid: i,
                        sourceName: u
                    } = e, r = (0, d.encodeStreamKey)({
                        streamType: t,
                        guildId: n,
                        channelId: l,
                        ownerId: c.default.getId()
                    }), o = null != i ? T.default.getGameForPID(i) : null;
                    s[r] = {
                        id: null == o ? void 0 : o.id,
                        pid: i,
                        sourceName: u
                    }, a.delete(r), a.set(r, {
                        streamType: t,
                        guildId: n,
                        channelId: l,
                        ownerId: c.default.getId(),
                        state: I.ApplicationStreamStates.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    s[t] = null
                },
                STREAM_CREATE: U,
                STREAM_UPDATE: U,
                STREAM_TIMED_OUT: function(e) {
                    let {
                        streamKey: t
                    } = e, n = a.get(t);
                    if (null == n) return !1;
                    a.set(t, {
                        ...n,
                        state: I.ApplicationStreamStates.FAILED
                    })
                },
                STREAM_DELETE: function(e) {
                    let {
                        streamKey: t,
                        unavailable: l,
                        reason: s
                    } = e;
                    delete i[t];
                    let u = a.get(t);
                    if (null == u) return !1;
                    let r = I.ApplicationStreamStates.ENDED;
                    if (l) r = I.ApplicationStreamStates.RECONNECTING;
                    else if (s === I.ApplicationStreamDeleteReasons.UNAUTHORIZED) r = I.ApplicationStreamStates.FAILED;
                    else if (s === I.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                        let {
                            guildId: e
                        } = (0, d.decodeStreamKey)(t);
                        n.el("772545").then(n.bind(n, "772545")).then(t => {
                            let {
                                default: n
                            } = t;
                            n(e)
                        }), r = I.ApplicationStreamStates.ENDED
                    }
                    a.set(t, {
                        ...u,
                        state: r
                    }), r === I.ApplicationStreamStates.ENDED && m !== t && y(t)
                },
                STREAM_CLOSE: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    y(t)
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    var t;
                    let {
                        channelId: n,
                        selfStreamHidden: a
                    } = e, l = (0, d.isStreamKey)(m);
                    l && (null === (t = m) || void 0 === t ? void 0 : t.includes(c.default.getId())) && !1 === M[n] && !0 === a && (m = null), M[n] = a
                },
                RTC_CONNECTION_STATE: function(e) {
                    let {
                        streamKey: t,
                        state: n
                    } = e;
                    if (null == t) return !1;
                    let l = a.get(t);
                    if (null == l || l.state === I.ApplicationStreamStates.ENDED) return !1;
                    let i = l.state;
                    switch (n) {
                        case I.RTCConnectionStates.DISCONNECTED:
                            i = I.ApplicationStreamStates.RECONNECTING;
                            break;
                        case I.RTCConnectionStates.RTC_CONNECTED:
                            i = I.ApplicationStreamStates.ACTIVE
                    }
                    if (i === l.state) return !1;
                    a.set(t, {
                        ...l,
                        state: i
                    })
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e;
                    if (m = t, Array.from(a.values()).forEach(e => {
                            (0, d.encodeStreamKey)(e) !== m && e.state === I.ApplicationStreamStates.ENDED && y((0, d.encodeStreamKey)(e))
                        }), null == t) return;
                    let l = (0, d.isStreamKey)(t);
                    l && t.includes(c.default.getId()) && (M[n] = !1)
                },
                CONNECTION_OPEN: R,
                CONNECTION_CLOSED: R,
                LOGOUT: R
            })
        },
        950104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("917351"),
                l = n.n(a),
                i = n("446674"),
                s = n("872717"),
                u = n("913144"),
                r = n("42203"),
                o = n("18494"),
                d = n("162771"),
                C = n("49111");
            let h = {},
                c = {};

            function E() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default.getChannelId(),
                    n = r.default.getChannel(t);
                if (null != n && null == n.getGuildId() && null != t && (null == h[t] || e)) {
                    var a;
                    return h[t] = null !== (a = h[t]) && void 0 !== a ? a : {
                        channelId: t,
                        ringing: []
                    }, u.default.dispatch({
                        type: "CALL_CONNECT",
                        channelId: t
                    }), !0
                }
                return !1
            }
            class f extends i.default.Store {
                initialize() {
                    this.waitFor(d.default, o.default)
                }
                getCall(e) {
                    return h[e]
                }
                getCalls() {
                    return Object.values(h)
                }
                getMessageId(e) {
                    let t = this.getCall(e);
                    return null != t ? t.messageId : null
                }
                isCallActive(e, t) {
                    let n = h[e];
                    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
                }
                isCallUnavailable(e) {
                    let t = h[e];
                    return null != t && t.unavailable
                }
                getInternalState() {
                    return {
                        calls: h,
                        enqueuedRings: c
                    }
                }
            }
            f.displayName = "CallStore";
            var _ = new f(u.default, {
                CONNECTION_OPEN: function() {
                    return E(!0)
                },
                CONNECTION_CLOSED: function() {
                    h = {}, c = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        callStoreInternalState: t
                    } = e;
                    h = {
                        ...t.calls
                    }, c = {
                        ...t.enqueuedRings
                    }
                },
                CONNECTION_RESUMED: function() {
                    return E(!0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return E(!1, t)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null != c[t.id] && delete c[t.id], null == h[t.id]) return !1;
                    delete h[t.id]
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        region: a,
                        ringing: l
                    } = e;
                    if (h[t] = {
                            channelId: t,
                            messageId: n,
                            region: a,
                            ringing: l,
                            unavailable: !1,
                            regionUpdated: !1
                        }, null != c[t]) {
                        let e = c[t];
                        delete c[t], 1 !== e.indexOf("all") && (e = null), s.default.post({
                            url: C.Endpoints.CALL_RING(t),
                            body: {
                                recipients: e
                            },
                            oldFormErrors: !0
                        })
                    }
                },
                CALL_UPDATE: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        region: a,
                        ringing: l
                    } = e, i = h[t], s = null != i && (i.regionUpdated || i.region !== a);
                    h[t] = {
                        ...h[t],
                        messageId: n,
                        region: a,
                        ringing: l,
                        regionUpdated: s
                    }
                },
                CALL_DELETE: function(e) {
                    let {
                        channelId: t,
                        unavailable: n
                    } = e, a = h[t];
                    !0 === n && null != a ? h[t] = {
                        ...a,
                        unavailable: n
                    } : h[t] = {
                        channelId: t,
                        ringing: [],
                        messageId: null,
                        region: null,
                        regionUpdated: !1,
                        unavailable: n
                    }, null != c[t] && delete c[t]
                },
                CALL_ENQUEUE_RING: function(e) {
                    var t;
                    let {
                        channelId: n,
                        recipients: a
                    } = e;
                    c[n] = l.union(null !== (t = c[n]) && void 0 !== t ? t : [], null != a ? a : ["all"])
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    null == t && (c = {})
                }
            })
        },
        982108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
                    return p
                },
                isViewChannelSidebar: function() {
                    return M
                },
                default: function() {
                    return v
                }
            });
            var a = n("394846"),
                l = n("446674"),
                i = n("913144"),
                s = n("582713"),
                u = n("659500"),
                r = n("42203"),
                o = n("957255"),
                d = n("744983"),
                C = n("18494"),
                h = n("162771"),
                c = n("697218"),
                E = n("49111"),
                f = n("724210"),
                _ = n("843455");
            let p = "message_requests",
                N = !1,
                T = !1,
                g = !0,
                S = !1,
                I = {},
                A = {};

            function m(e) {
                if (null == e) return null;
                if ((0, f.isStaticChannelRoute)(e)) {
                    let t = h.default.getGuildId();
                    if (null == t) return null;
                    e = (0, f.buildGuildStaticChannelId)(e, t)
                }
                return e
            }

            function M(e) {
                return [s.SidebarType.VIEW_CHANNEL, s.SidebarType.VIEW_THREAD, s.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
            }

            function R(e) {
                let t = !1;
                S && (S = !1, t = !0);
                let n = m(C.default.getChannelId());
                return null != n && n in I && (delete I[n], t = !0), t && e ? e : !e
            }

            function y() {
                let e = !1;
                for (let t in I) {
                    let n = I[t];
                    if (n.type === s.SidebarType.VIEW_THREAD || n.type === s.SidebarType.VIEW_CHANNEL) {
                        let a = r.default.getChannel(n.channelId);
                        (null == a || !o.default.can(_.Permissions.VIEW_CHANNEL, a)) && (delete I[t], e = !0)
                    }
                }
                return e
            }

            function O() {
                if (S === d.default.isActive()) return !1;
                S = d.default.isActive()
            }
            class U extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n, a, l, i;
                        N = null !== (t = e.isMembersOpen) && void 0 !== t && t, T = null !== (n = e.isSummariesOpen) && void 0 !== n && n, g = null === (a = e.isProfileOpen) || void 0 === a || a, I = null !== (l = e.sidebars) && void 0 !== l ? l : {}, A = null !== (i = e.guildSidebars) && void 0 !== i ? i : {}
                    }
                    this.syncWith([d.default], O), this.syncWith([o.default], y)
                }
                getState() {
                    return {
                        isMembersOpen: N,
                        isSummariesOpen: T,
                        isProfileOpen: g,
                        sidebars: I,
                        guildSidebars: A
                    }
                }
                getSection(e, t) {
                    return S ? E.ChannelSections.SEARCH : null != (e = m(e)) && null != I[e] ? E.ChannelSections.SIDEBAR_CHAT : t && g ? E.ChannelSections.PROFILE : T ? E.ChannelSections.SUMMARIES : N ? E.ChannelSections.MEMBERS : E.ChannelSections.NONE
                }
                getSidebarState(e) {
                    return null == (e = m(e)) ? void 0 : I[e]
                }
                getGuildSidebarState(e) {
                    return null == e ? void 0 : A[e]
                }
                getCurrentSidebarChannelId(e) {
                    if (null == (e = m(e)) || S) return null;
                    let t = I[e];
                    return null == t ? null : t.type === s.SidebarType.VIEW_THREAD || t.type === s.SidebarType.VIEW_CHANNEL ? t.channelId : null
                }
                getCurrentSidebarMessageId(e) {
                    var t;
                    if (null == (e = m(e)) || S) return null;
                    let n = I[e];
                    return null == n ? null : n.type === s.SidebarType.VIEW_THREAD || n.type === s.SidebarType.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
                }
            }
            U.displayName = "ChannelSectionStore", U.persistKey = "ChannelSectionStore2";
            var v = new U(i.default, {
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    T && (T = R(T)), N = R(N)
                },
                PROFILE_PANEL_TOGGLE_SECTION: function() {
                    !g && u.ComponentDispatch.dispatch(E.ComponentActions.SEARCH_RESULTS_CLOSE), g = R(g)
                },
                CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
                    N && (N = R(N)), T = R(T)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        sidebarType: t,
                        baseChannelId: n,
                        channelId: a,
                        details: l
                    } = e;
                    S = !1;
                    let i = m(n);
                    return null != i && (I[i] = {
                        type: t,
                        channelId: a,
                        details: l
                    }, !0)
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    let {
                        sidebarType: t,
                        guildId: n,
                        baseChannelId: a,
                        details: l
                    } = e;
                    S = !1;
                    let i = m(a);
                    return null != i && (A[n] = {
                        type: t,
                        baseChannelId: i,
                        guildId: n,
                        details: l
                    }, !0)
                },
                SIDEBAR_CREATE_THREAD: function(e) {
                    let {
                        parentChannelId: t,
                        parentMessageId: n,
                        location: a
                    } = e;
                    S = !1;
                    let l = m(t);
                    null != l && (I[l] = {
                        type: s.SidebarType.CREATE_THREAD,
                        parentChannelId: t,
                        parentMessageId: n,
                        location: a
                    })
                },
                SIDEBAR_CLOSE: function(e) {
                    let {
                        baseChannelId: t
                    } = e, n = m(t);
                    null != n && delete I[n]
                },
                SIDEBAR_CLOSE_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return null != A[t] && (delete A[t], !0)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.id in I) return delete I[t.id], !0;
                    let n = !1;
                    for (let e in I) {
                        let a = I[e];
                        null != a && a.type === s.SidebarType.VIEW_CHANNEL && a.channelId === t.id && (delete I[e], n = !0)
                    }
                    return n
                },
                CHANNEL_SELECT: function() {
                    a.isMobile && N && (N = !1, T = !1)
                },
                THREAD_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    if (n.ownerId === (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    let a = I[n.parent_id];
                    null != a && a.type === s.SidebarType.CREATE_THREAD && a.parentMessageId === n.id && (I[n.parent_id] = {
                        type: s.SidebarType.VIEW_THREAD,
                        channelId: n.id
                    })
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = I[t.parent_id];
                    if (null == n || n.type !== s.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
                    delete I[t.parent_id]
                }
            })
        },
        124948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("917351"),
                l = n.n(a),
                i = n("446674"),
                s = n("913144"),
                u = n("49978"),
                r = n("560208"),
                o = n("42203"),
                d = n("26989");
            let C = new u.default(d.default.isMember, (e, t) => {
                s.default.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            });

            function h() {
                C.reset()
            }

            function c(e, t) {
                return C.request(e, t), !1
            }

            function E(e, t) {
                return t.forEach(t => {
                    let {
                        author: n,
                        mentions: a
                    } = t;
                    null != n && c(e, n.id), null == a || a.forEach(t => c(e, t.id))
                }), !1
            }

            function f(e) {
                let {
                    channelId: t,
                    messages: n
                } = e, a = o.default.getChannel(t);
                return null != a && null != a.guild_id && E(a.guild_id, n)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(o.default, d.default)
                }
                requestMember(e, t) {
                    c(e, t)
                }
            }
            _.displayName = "GuildMemberRequesterStore";
            var p = new _(s.default, {
                CONNECTION_CLOSED: h,
                CONNECTION_OPEN: h,
                CONNECTION_RESUMED: function() {
                    return C.requestUnacknowledged(), !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n,
                        notFound: a
                    } = e;
                    return n.forEach(e => {
                        C.acknowledge(t, e.user.id)
                    }), null != a && a.forEach(e => C.acknowledge(t, e)), !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        guildId: t,
                        messages: n
                    } = e;
                    return null != t && E(t, l.flatten(n))
                },
                LOCAL_MESSAGES_LOADED: f,
                LOAD_MESSAGES_SUCCESS: f,
                LOAD_MESSAGES_AROUND_SUCCESS: f,
                LOAD_PINNED_MESSAGES_SUCCESS: f,
                LOAD_RECENT_MENTIONS_SUCCESS: f,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e, a = (0, r.getMessagesFromGuildFeedFetch)(n);
                    return E(t, a)
                }
            })
        },
        247013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("95410"),
                i = n("913144");
            let s = "GuildNSFWAgreeStore",
                u = {};
            class r extends a.default.Store {
                initialize() {
                    var e;
                    u = null !== (e = l.default.get(s)) && void 0 !== e ? e : u
                }
                didAgree(e) {
                    return null != e && (u[e] || !1)
                }
            }
            r.displayName = "GuildNSFWAgreeStore";
            var o = new r(i.default, {
                GUILD_NSFW_AGREE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u[t] = !0, l.default.set(s, u)
                }
            })
        },
        603699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a, l = n("446674"),
                i = n("913144"),
                s = n("987317"),
                u = n("49671"),
                r = n("845579"),
                o = n("773336"),
                d = n("271938"),
                C = n("49111"),
                h = n("353927");
            let c = Date.now(),
                E = !1,
                f = !1,
                _ = !1,
                p = !1,
                N = !1;

            function T() {
                return _ || p || (0, o.isAndroid)() && N
            }

            function g() {
                Date.now() - c > C.IDLE_DURATION || T() ? E || i.default.dispatch({
                    type: "IDLE",
                    idle: !0,
                    idleSince: c
                }) : E && i.default.dispatch({
                    type: "IDLE",
                    idle: !1
                }), Date.now() - c > Math.min(1e3 * r.AfkTimeout.getSetting(), C.IDLE_DURATION) || T() ? f || i.default.dispatch({
                    type: "AFK",
                    afk: !0
                }) : f && i.default.dispatch({
                    type: "AFK",
                    afk: !1
                })
            }!__OVERLAY__ && (o.isPlatformEmbedded && (null === (a = u.default) || void 0 === a ? void 0 : a.remotePowerMonitor) != null ? (! function e() {
                var t, n;
                let a = t => {
                    c = Math.max(Date.now() - t, c), g(), setTimeout(e, 1e4)
                };
                if ((null === (n = u.default) || void 0 === n ? void 0 : null === (t = n.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                    let e = u.default.remotePowerMonitor.getSystemIdleTimeMs();
                    e instanceof Promise ? e.then(a) : a(e)
                }
            }(), u.default.remotePowerMonitor.on("resume", () => {
                _ = !1, S({})
            }), u.default.remotePowerMonitor.on("suspend", () => {
                _ = !0, S({}), s.default.disconnect()
            }), u.default.remotePowerMonitor.on("lock-screen", () => {
                p = !0, S({})
            }), u.default.remotePowerMonitor.on("unlock-screen", () => {
                p = !1, S({})
            })) : setInterval(g, .25 * C.IDLE_DURATION));

            function S(e) {
                let {
                    timestamp: t,
                    type: n
                } = e, a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
                return (!a || !(t <= c)) && (c = a ? t : Date.now(), __OVERLAY__ ? i.default.dispatch({
                    type: "OVERLAY_SET_NOT_IDLE",
                    timestamp: c
                }) : g(), !1)
            }
            class I extends l.default.Store {
                isIdle() {
                    return E
                }
                isAFK() {
                    return f
                }
                getIdleSince() {
                    return E ? c : null
                }
            }
            I.displayName = "IdleStore";
            var A = new I(i.default, {
                IDLE: function(e) {
                    E = e.idle
                },
                AFK: function(e) {
                    f = e.afk
                },
                SPEAKING: function(e) {
                    let {
                        userId: t,
                        speakingFlags: n
                    } = e;
                    return n !== h.SpeakingFlags.NONE && t === d.default.getId() && S({}), !1
                },
                APP_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e;
                    return N = t === C.AppStates.BACKGROUND, c = Date.now(), g(), !1
                },
                OVERLAY_SET_NOT_IDLE: S,
                CHANNEL_SELECT: S,
                VOICE_CHANNEL_SELECT: S,
                WINDOW_FOCUS: S,
                OVERLAY_INITIALIZE: S,
                OVERLAY_SET_INPUT_LOCKED: S,
                USER_SETTINGS_PROTO_UPDATE: S
            })
        },
        660478: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                shouldBadgeMessage: function() {
                    return eM
                },
                default: function() {
                    return ej
                }
            });
            var l, i, s = n("627445"),
                u = n.n(s),
                r = n("866227"),
                o = n.n(r),
                d = n("446674"),
                C = n("872717"),
                h = n("862337"),
                c = n("627929"),
                E = n("913144"),
                f = n("716241"),
                _ = n("191145"),
                p = n("203288"),
                N = n("358269"),
                T = n("605250"),
                g = n("398604"),
                S = n("811400"),
                I = n("21121"),
                A = n("288518"),
                m = n("415435"),
                M = n("486503"),
                R = n("406297"),
                y = n("136511"),
                O = n("342176"),
                U = n("514933"),
                v = n("512395"),
                L = n("614305"),
                D = n("689275"),
                P = n("755624"),
                G = n("526311"),
                H = n("374363"),
                F = n("233069"),
                V = n("845078"),
                Y = n("718517"),
                b = n("568734"),
                k = n("449008"),
                w = n("35468"),
                B = n("299039"),
                x = n("271938"),
                K = n("982108"),
                W = n("42203"),
                q = n("162805"),
                Q = n("760190"),
                z = n("341542"),
                Z = n("305961"),
                X = n("603699"),
                J = n("377253"),
                j = n("957255"),
                $ = n("27618"),
                ee = n("18494"),
                et = n("282109"),
                en = n("697218"),
                ea = n("471671"),
                el = n("49111"),
                ei = n("724210"),
                es = n("745049"),
                eu = n("627869"),
                er = n("133335");
            let eo = new T.default("ReadStateStore");
            __OVERLAY__ && (a = n("901165").default);
            let ed = el.BasicPermissions.VIEW_CHANNEL | el.BasicPermissions.READ_MESSAGE_HISTORY,
                eC = null,
                eh = null,
                ec = null,
                eE = !1,
                ef = [],
                e_ = !1,
                ep = null,
                eN = {};

            function eT() {
                return B.default.fromTimestamp(Date.now() - 2592e6)
            }
            let eg = 0,
                eS = 0,
                eI = null;

            function eA() {
                eg = Date.now() - 6048e5, eS = Date.now() - 2592e5, clearTimeout(eI), eI = setTimeout(() => {
                    E.default.dispatch({
                        type: "DECAY_READ_STATES"
                    })
                }, 36e5)
            }

            function em(e) {
                if (null == e) return 0;
                let t = Date.parse(e);
                return isNaN(t) ? 0 : t
            }

            function eM(e, t) {
                let n = W.default.getChannel(e.channel_id);
                return !(null == n || $.default.isBlocked(e.author.id)) && (!!((0, R.default)({
                    message: e,
                    userId: t.id,
                    suppressEveryone: et.default.isSuppressEveryoneEnabled(n.guild_id),
                    suppressRoles: et.default.isSuppressRolesEnabled(n.guild_id)
                }) || eR(n)) || !1)
            }

            function eR(e) {
                return null != e && e.isPrivate() && !et.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
            }
            async function ey() {
                if (0 === ef.length) {
                    e_ = !1;
                    return
                }
                e_ = !0;
                let e = ef.splice(0, 100);
                await eO(() => C.default.post({
                    url: el.Endpoints.BULK_ACK,
                    body: {
                        read_states: e
                    },
                    oldFormErrors: !0
                })), await (0, h.timeoutPromise)(1e3), ey()
            }
            async function eO(e) {
                let t = x.default.getId();
                for (let n = 0; n < 3; n++) try {
                    return await e()
                } catch (e) {
                    if (eo.error("", e), n + 1 < 3 && (await (0, h.timeoutPromise)((n + 1) * 2e3), await w.default.awaitOnline(), t !== x.default.getId())) return Promise.reject(Error("User changed."))
                }
            }

            function eU(e) {
                if (e.type !== er.ReadStateTypes.CHANNEL) return !1;
                let t = W.default.getChannel(e.channelId),
                    n = null != t && t.isForumPost();
                if (X.default.isIdle() || !e.canTrackUnreads()) return !1;
                if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
                    let t = eN[e.channelId],
                        n = null != t && ea.default.isFocused(t),
                        l = null != a && a.isInstanceFocused() && a.isPinned(el.OverlayWidgets.TEXT);
                    if (!n && !l) return !1
                }
                if (n && !e._persisted) return !0;
                let l = e.hasUnreadOrMentions();
                if (!l || (null == t ? void 0 : t.isForumLikeChannel()) === !0) return !1;
                let i = n && !e._isJoinedThread;
                if (!i && !q.default.isAtBottom(e.channelId)) return !1;
                let s = _.default.getLayout(e.channelId),
                    u = _.default.getChatOpen(e.channelId);
                if (!u && (s === el.ChannelLayouts.NO_CHAT || s === el.ChannelLayouts.FULL_SCREEN) || null == eN[e.channelId]) return !1;
                let r = J.default.getMessages(e.channelId);
                return !(null == r || !r.ready || r.loadingMore || (0, L.default)() && !u) && !0
            }(l = i || (i = {}))[l.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", l[l.IS_THREAD = 2] = "IS_THREAD";
            class ev {
                static forEach(e) {
                    for (let n of Object.keys(ev._readStates)) {
                        var t;
                        let a = null !== (t = ev._readStates[parseInt(n)]) && void 0 !== t ? t : {};
                        for (let t of Object.keys(a))
                            if (!1 === e(a[t])) break
                    }
                }
                static get(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL,
                        a = null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e];
                    return null == a && (a = new ev(e, n), null == ev._readStates[n] && (ev._readStates[n] = {}), ev._readStates[n][e] = a), a
                }
                static getGuildSentinels(e) {
                    return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
                        unreadsSentinel: 0
                    }), this._guildReadStateSentinels[e]
                }
                static resetGuildSentinels() {
                    this._guildReadStateSentinels = {}
                }
                static getIfExists(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e]
                }
                static getMentionChannelIds() {
                    let e = [];
                    for (let t of ev._mentionChannels) {
                        let n = ev.getIfExists(t);
                        null != n && n.canHaveMentions() ? e.push(t) : ev._mentionChannels.delete(t)
                    }
                    return e
                }
                static getValue(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        l = arguments.length > 3 ? arguments[3] : void 0,
                        i = null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e];
                    return null == i ? l : a(i)
                }
                static clear(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return (null === (t = ev._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete ev._readStates[n][e], ev._mentionChannels.delete(e), !0)
                }
                static clearAll() {
                    ev._readStates = {}, ev._mentionChannels.clear()
                }
                serialize(e) {
                    let {
                        channelId: t,
                        type: n,
                        _guildId: a,
                        _isThread: l,
                        _isActiveThread: i,
                        _isJoinedThread: s,
                        _persisted: u,
                        loadedMessages: r,
                        _lastMessageId: o,
                        _lastMessageTimestamp: d,
                        _ackMessageId: C,
                        _ackMessageTimestamp: h,
                        ackPinTimestamp: c,
                        isManualAck: E,
                        lastPinTimestamp: f,
                        _oldestUnreadMessageId: _,
                        oldestUnreadMessageIdStale: p,
                        estimated: N,
                        _mentionCount: T,
                        flags: g,
                        lastViewed: S
                    } = this;
                    if (e) return {
                        channelId: t,
                        type: n,
                        _guildId: a,
                        _isThread: l,
                        _isActiveThread: i,
                        _isJoinedThread: s,
                        _persisted: u,
                        loadedMessages: r,
                        _lastMessageId: o,
                        _lastMessageTimestamp: d,
                        _ackMessageId: C,
                        _ackMessageTimestamp: h,
                        ackPinTimestamp: c,
                        isManualAck: E,
                        lastPinTimestamp: f,
                        _oldestUnreadMessageId: _,
                        oldestUnreadMessageIdStale: p,
                        estimated: N,
                        _mentionCount: T,
                        flags: g,
                        lastViewed: S
                    };
                    let I = {
                        channelId: t,
                        type: n,
                        _guildId: a,
                        _persisted: u,
                        _lastMessageId: o,
                        _lastMessageTimestamp: d,
                        _ackMessageId: C,
                        _ackMessageTimestamp: h,
                        ackPinTimestamp: c,
                        lastPinTimestamp: f,
                        _mentionCount: T,
                        flags: g
                    };
                    return null != S && S > 0 && (I.lastViewed = S), l && (I._isThread = l, I._isActiveThread = i, I._isJoinedThread = s), I
                }
                deserializeForOverlay(e) {
                    let {
                        channelId: t,
                        type: n,
                        _guildId: a,
                        _isThread: l,
                        _isActiveJoinedThread: i,
                        _isActiveThread: s,
                        _isJoinedThread: u,
                        _persisted: r,
                        loadedMessages: o,
                        _lastMessageId: d,
                        _lastMessageTimestamp: C,
                        _ackMessageId: h,
                        _ackMessageTimestamp: c,
                        ackPinTimestamp: E,
                        isManualAck: f,
                        lastPinTimestamp: _,
                        _oldestUnreadMessageId: p,
                        oldestUnreadMessageIdStale: N,
                        estimated: T,
                        _unreadCount: g,
                        _mentionCount: S,
                        flags: I,
                        lastViewed: A
                    } = e;
                    this.channelId = t, this.type = null != n ? n : er.ReadStateTypes.CHANNEL, this._guildId = a, this._isThread = null != l && l, null != i ? (this._isActiveThread = i, this._isJoinedThread = i) : (this._isActiveThread = null != s && s, this._isJoinedThread = null != u && u), this._persisted = !1 !== r, this.loadedMessages = null != o && o, this._lastMessageId = d, this._lastMessageTimestamp = C, this._ackMessageId = h, this._ackMessageTimestamp = c, this.ackPinTimestamp = E, this.isManualAck = null != f && f, this.lastPinTimestamp = _, this._oldestUnreadMessageId = p, this.oldestUnreadMessageIdStale = null != N && N, this.estimated = null != T && T, this._unreadCount = null != g ? g : 0, this._mentionCount = S, this.flags = I, this.lastViewed = A, ev._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ev._mentionChannels.add(this.channelId)
                }
                incrementGuildUnreadsSentinel() {
                    null != this._guildId && ev.getGuildSentinels(this._guildId).unreadsSentinel++
                }
                get oldestUnreadMessageId() {
                    return this._oldestUnreadMessageId
                }
                set oldestUnreadMessageId(e) {
                    this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
                }
                get lastMessageId() {
                    return this._lastMessageId
                }
                set lastMessageId(e) {
                    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? B.default.extractTimestamp(e) : 0
                }
                get lastMessageTimestamp() {
                    return this._lastMessageTimestamp
                }
                get ackMessageId() {
                    return this._ackMessageId
                }
                set ackMessageId(e) {
                    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? B.default.extractTimestamp(e) : 0
                }
                get unreadCount() {
                    var e;
                    return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
                }
                set unreadCount(e) {
                    (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
                }
                get mentionCount() {
                    return this._mentionCount
                }
                set mentionCount(e) {
                    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, ev._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ev._mentionChannels.add(this.channelId)
                }
                guessAckMessageId() {
                    let e = J.default.getMessages(this.channelId);
                    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
                    if (!this.hasMentions()) return this.lastMessageId;
                    let t = null,
                        n = this.mentionCount,
                        a = en.default.getCurrentUser();
                    return e.forEach(e => {
                        if (n > 0 && e.author.id !== (null == a ? void 0 : a.id)) --n;
                        else if (0 === n) return t = e.id, !1
                    }, this, !0), t
                }
                get guildId() {
                    if (null != this._guildId) return this._guildId;
                    let e = W.default.getChannel(this.channelId);
                    return this._guildId = null != e ? e.getGuildId() : null
                }
                isPrivate() {
                    if (this.type !== er.ReadStateTypes.CHANNEL) return !1;
                    let e = W.default.getChannel(this.channelId);
                    return null != e && e.isPrivate()
                }
                rebuildChannelState(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = arguments.length > 2 ? arguments[2] : void 0;
                    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, a && (this.mentionCount = 0), this.hasUnread()) {
                        let e = en.default.getCurrentUser(),
                            t = this.getAckTimestamp(),
                            l = !1,
                            i = !1,
                            s = null,
                            u = J.default.getMessages(this.channelId);
                        u.forAll(n => {
                            if (l) {
                                var u;
                                this.oldestUnreadMessageId = null !== (u = this._oldestUnreadMessageId) && void 0 !== u ? u : n.id
                            } else l = n.id === this._ackMessageId;
                            B.default.extractTimestamp(n.id) > t ? (this.unreadCount++, a && eM(n, e) && this.mentionCount++, s = null != s ? s : n.id) : i = !0
                        }), this.estimated = !u.hasPresent() || !(l || i) && u.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s
                    }
                    null != l && (this.mentionCount = l)
                }
                handleGuildEventRemoval(e, t) {
                    var n;
                    if (B.default.compare(this.ackMessageId, t) >= 0) return;
                    let a = g.default.getGuildScheduledEventsForGuild(e),
                        l = this.getAckTimestamp();
                    if (isNaN(l)) return;
                    let i = null !== (n = this._ackMessageId) && void 0 !== n ? n : B.default.fromTimestamp(l),
                        s = null,
                        u = 0;
                    a.forEach(e => {
                        (0, g.isEventUpcoming)(e) && (B.default.compare(e.id, s) > 0 && (s = e.id), B.default.compare(e.id, i) > 0 && u++)
                    }), this.lastMessageId = s, this.mentionCount = u
                }
                canTrackUnreads() {
                    if (this.type !== er.ReadStateTypes.CHANNEL) return !0;
                    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
                    let e = W.default.getBasicChannel(this.channelId);
                    return null != e && ("basicPermissions" in e ? V.default.has(e.basicPermissions, el.BasicPermissions.VIEW_CHANNEL) : !p.default.isChannelGated(this.guildId, this.channelId) || j.default.can(el.Permissions.VIEW_CHANNEL, e))
                }
                canBeUnread() {
                    return !(this._isThread && !this._isJoinedThread || (0, m.isMessageRequestOrSpamRequest)(this.channelId, [A.default, M.default]) || !this._isThread && (0, v.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < eg || !et.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
                }
                canHaveMentions() {
                    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, m.isMessageRequestOrSpamRequest)(this.channelId, [A.default, M.default]) || (0, v.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < eg) && this.canTrackUnreads()
                }
                getGuildChannelUnreadState(e, t, n, a, l, i) {
                    if (t && (this._lastMessageTimestamp < eg || !et.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    };
                    if ("basicPermissions" in e) {
                        if (!V.default.has(e.basicPermissions, el.BasicPermissions.VIEW_CHANNEL)) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    } else if (p.default.isChannelGated(this.guildId, this.channelId) && !j.default.can(el.Permissions.VIEW_CHANNEL, e)) return {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    };
                    if (l || i) return {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: !1
                    };
                    let s = (0, S.calculateUnreadSetting)({
                            isExperimentEnabled: n,
                            hasUserEnabledGuildUnreads: et.default.isGuildUnreadSettingEnabled(e.guild_id),
                            channelNotificationOverrides: a[e.id],
                            categoryNotificationOverrides: null == e.parent_id ? null : a[e.parent_id],
                            unreadSetting: et.default.getChannelUnreadSetting(e.guild_id, e.id),
                            hasJoinedThread: P.default.hasJoined(e.id)
                        }),
                        u = !1;
                    return u = s === eu.UserUnreadSettings.NULL || s === eu.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS ? this.mentionCount > 0 || (0, N.hasUnreadChannelHighlights)(this.channelId, this._ackMessageId) : this.getAckTimestamp() < this._lastMessageTimestamp, {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: u
                    }
                }
                hasUnread() {
                    return this.getAckTimestamp() < this._lastMessageTimestamp
                }
                hasNotableUnread() {
                    let e = W.default.getBasicChannel(this.channelId),
                        t = null != e ? (0, S.getGuildUnreadSetting)(e) : eu.UserUnreadSettings.ALL_MESSAGES;
                    return t === eu.UserUnreadSettings.NULL || t === eu.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS ? (0, N.getUnreadChannelHighlights)(this.channelId, this._ackMessageId).length > 0 || this.hasMentions() : this.getAckTimestamp() < this._lastMessageTimestamp
                }
                hasRecentlyVisitedAndRead() {
                    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eS && H.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
                }
                isForumPostUnread() {
                    return !!this._isActiveThread && this.hasUnread()
                }
                hasMentions() {
                    return this.getMentionCount() > 0
                }
                getMentionCount() {
                    return this.mentionCount
                }
                hasUnreadOrMentions() {
                    return this.hasMentions() || this.hasUnread()
                }
                ackPins() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (this.type !== er.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
                    if (null == e) {
                        if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                        this._persisted = !0, eO(() => C.default.post({
                            url: el.Endpoints.PINS_ACK(this.channelId),
                            oldFormErrors: !0
                        }))
                    }
                    let t = em(e);
                    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
                }
                ack(e) {
                    let {
                        messageId: t,
                        local: n = !1,
                        immediate: a = !1,
                        force: l = !1,
                        isExplicitUserAction: i = !1,
                        location: s = {
                            section: el.AnalyticsSections.CHANNEL
                        },
                        trackAnalytics: u = !0
                    } = e;
                    if (!this._shouldAck(l, n, i) || !l && !this.canTrackUnreads()) return !1;
                    let r = this.hasMentions();
                    return this.estimated = !1, this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, function(e) {
                        if (null == e) return;
                        let t = ev.get(e);
                        if (t.type !== er.ReadStateTypes.CHANNEL) return;
                        let n = W.default.getChannel(t.channelId);
                        if (null == n || !n.isForumPost() || null == n.parent_id) return;
                        let a = n.parent_id,
                            l = ev.get(a);
                        D.default.hasLoaded(n.guild_id) && Object.keys(D.default.getThreadsForParent(n.guild_id, a)).every(e => eJ.hasOpenedThread(e) || 0 > B.default.compare(e, l.ackMessageId)) && l.ack({})
                    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
                        this.type === er.ReadStateTypes.CHANNEL ? this._ack(s, u) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
                    }, r || a ? 0 : 3e3)), this.outgoingAck = t), !0)
                }
                clearOutgoingAck() {
                    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
                }
                _shouldAck(e, t, n) {
                    var a;
                    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== er.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (a = W.default.getChannel(this.channelId)) || void 0 === a ? void 0 : a.isForumLikeChannel()))) || !1
                }
                _ack(e, t) {
                    let {
                        outgoingAck: n
                    } = this;
                    if (null == n) return;
                    let a = x.default.getId(),
                        l = ec;
                    this._persisted = !0;
                    let i = this.recalculateFlags(),
                        s = i === this.flags ? void 0 : i;
                    eO(() => C.default.post({
                        url: el.Endpoints.MESSAGE_ACK(this.channelId, n),
                        body: {
                            token: ec,
                            last_viewed: this.lastViewed,
                            flags: s
                        },
                        oldFormErrors: !0
                    })).then(n => {
                        if (null != n && (ec === l && a === x.default.getId() && (ec = n.body.token), E.default.dispatch({
                                type: "MESSAGE_ACKED"
                            }), t)) {
                            let t = W.default.getChannel(this.channelId);
                            (0, f.trackWithMetadata)(el.AnalyticEvents.ACK_MESSAGES, {
                                channel_id: this.channelId,
                                guild_id: null == t ? void 0 : t.getGuildId(),
                                location: e
                            })
                        }
                    })
                }
                recalculateFlags() {
                    if (this.type !== er.ReadStateTypes.CHANNEL) return;
                    let e = W.default.getChannel(this.channelId);
                    if (null != e) return e.isThread() ? i.IS_THREAD : null != e.guild_id ? i.IS_GUILD_CHANNEL : 0
                }
                _nonChannelAck() {
                    let e;
                    let {
                        outgoingAck: t,
                        channelId: n,
                        type: a
                    } = this;
                    if (null != t) {
                        switch (a) {
                            case er.ReadStateTypes.GUILD_HOME:
                            case er.ReadStateTypes.GUILD_EVENT:
                            case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                e = el.Endpoints.GUILD_FEATURE_ACK(n, t, a);
                                break;
                            case er.ReadStateTypes.NOTIFICATION_CENTER:
                                e = el.Endpoints.USER_NON_CHANNEL_ACK(t, a);
                                break;
                            default:
                                return
                        }
                        this._persisted = !0, eO(() => C.default.post({
                            url: e,
                            body: {},
                            oldFormErrors: !0
                        }))
                    }
                }
                delete() {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        n = W.default.getBasicChannel(this.channelId);
                    eo.log("Deleting ReadState", this.channelId, this.type, {
                        remote: t,
                        persisted: this._persisted,
                        channelMissing: null == n,
                        isOld: eF(this, eT()),
                        validType: null != n && F.ALL_CHANNEL_TYPES.has(n.type),
                        readableType: null != n && (0, F.isReadableType)(n.type),
                        oldThreadCutoff: eT(),
                        mentionCount: this.mentionCount,
                        channelId: this.channelId,
                        ackMessageId: this._ackMessageId,
                        lastMessageId: this._lastMessageId
                    }), t && this._persisted && C.default.delete({
                        url: el.Endpoints.CHANNEL_ACK(this.channelId),
                        body: {
                            version: 2,
                            read_state_type: this.type
                        },
                        oldFormErrors: !0
                    }), null === (e = ev._readStates[this.type]) || void 0 === e || delete e[this.channelId], ev._mentionChannels.delete(this.channelId)
                }
                shouldDeleteReadState(e) {
                    if (0 !== z.default.totalUnavailableGuilds) return !1;
                    if (null != this.type && this.type !== er.ReadStateTypes.CHANNEL) return ! function(e) {
                        switch (e.type) {
                            case er.ReadStateTypes.GUILD_HOME:
                            case er.ReadStateTypes.GUILD_EVENT:
                            case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                return null != Z.default.getGuild(e.channelId);
                            case er.ReadStateTypes.NOTIFICATION_CENTER:
                                var t;
                                return (null === (t = en.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                            default:
                                return !0
                        }
                    }(this);
                    let t = W.default.getBasicChannel(this.channelId);
                    if (null == t) return !!eF(this, e) || !1;
                    return !!F.ALL_CHANNEL_TYPES.has(t.type) && (!(0, F.isReadableType)(t.type) || !(0, F.isPrivate)(t.type) && (!!(F.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                        let a = e.guildId,
                            l = null != a && D.default.isActive(a, t.parent_id, e.channelId);
                        return !l && eF(e, n)
                    }(this, t, e)) || !!(this.mentionCount > 0) && !j.default.canBasicChannel(ed, t) || !1))
                }
                getAckTimestamp() {
                    let e, t;
                    if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
                    if (this._isThread) return this._ackMessageTimestamp = eG(this.guildId, this.channelId), this._ackMessageId = B.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
                    if (this.type === er.ReadStateTypes.GUILD_EVENT || this.type === er.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = Z.default.getGuild(this.channelId);
                    else if ((0, ei.isStaticChannelRoute)(this.channelId)) e = Z.default.getGuild(this.guildId);
                    else {
                        let t = W.default.getChannel(this.channelId);
                        if (null != t) {
                            let n = t.getGuildId();
                            e = Z.default.getGuild(n)
                        }
                    }
                    return t = null != e ? eH(e) : B.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
                }
                get oldestUnreadTimestamp() {
                    return null != this.oldestUnreadMessageId ? B.default.extractTimestamp(this.oldestUnreadMessageId) : 0
                }
                syncThreadSettings() {
                    this._isThread = !0;
                    let e = W.default.getChannel(this.channelId);
                    if (null == e) return eo.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
                    let t = this.guildId,
                        n = null != t && D.default.isActive(t, e.parent_id, this.channelId),
                        a = P.default.hasJoined(this.channelId);
                    return (this._isActiveThread !== n || this._isJoinedThread !== a) && (this._isActiveThread = n, this._isJoinedThread = a, !0)
                }
                recordLastViewedTime() {
                    let e = Math.ceil((Date.now() - B.DISCORD_EPOCH) / Y.default.Millis.DAY);
                    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                        force: !0,
                        trackAnalytics: !1
                    }))
                }
                constructor(e, t = er.ReadStateTypes.CHANNEL) {
                    this.type = er.ReadStateTypes.CHANNEL, this.outgoingAckTimer = null, this.ackMessageIdAtChannelSelect = null, this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
                }
            }

            function eL(e) {
                e.forEach(e => {
                    if ((0, F.isReadableType)(e.type)) {
                        let t = ev.get(e.id);
                        t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = em(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(ei.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), F.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
                    }
                })
            }

            function eD(e) {
                e.forEach(e => {
                    if ((0, F.isReadableType)(e.type)) {
                        var t;
                        let n = ev.get(e.id);
                        n.lastMessageId = e.last_message_id, n.lastPinTimestamp = em(e.last_pin_timestamp), n._isResourceChannel = (0, b.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, ei.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), F.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
                    }
                })
            }

            function eP(e) {
                (function(e) {
                    var t;
                    null === (t = e.threads) || void 0 === t || t.forEach(t => {
                        if (!F.ALL_CHANNEL_TYPES.has(t.type)) return;
                        let n = ev.get(t.id);
                        n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = em(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = B.default.fromTimestamp(eG(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eG(e.id, t.id))
                    })
                })(e),
                function(e) {
                    var t, n;
                    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == ev.getIfExists(e.id, er.ReadStateTypes.GUILD_EVENT)) return;
                    let a = ev.get(e.id, er.ReadStateTypes.GUILD_EVENT);
                    a._guildId = e.id;
                    let l = 0,
                        i = null,
                        s = null !== (n = a._ackMessageId) && void 0 !== n ? n : B.default.fromTimestamp(a.getAckTimestamp());
                    e.guild_scheduled_events.forEach(e => {
                        B.default.compare(e.id, i) > 0 && (i = e.id), B.default.compare(e.id, s) > 0 && l++
                    }), a.lastMessageId = i, a.mentionCount = l
                }(e),
                function(e) {
                    let t = ev.get(e.id, er.ReadStateTypes.GUILD_HOME);
                    t.lastMessageId = B.default.fromTimestamp(o(Date.now()).subtract(24, "h").valueOf())
                }(e),
                function(e) {
                    let t = e.properties.latest_onboarding_question_id;
                    if (null == t) return;
                    let n = ev.get(e.id, er.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    n._guildId = e.id, n.lastMessageId = t
                }(e)
            }
            ev._guildReadStateSentinels = {}, ev._readStates = {}, ev._mentionChannels = new Set;

            function eG(e, t) {
                var n, a, l;
                let i = W.default.getChannel(t),
                    s = Z.default.getGuild(null != e ? e : null == i ? void 0 : i.guild_id),
                    u = (null == i ? void 0 : i.isForumPost()) ? 0 : eH(s),
                    r = (null !== (l = null === (n = P.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== l ? l : 0) - 5e3,
                    o = null == i ? void 0 : null === (a = i.threadMetadata) || void 0 === a ? void 0 : a.archiveTimestamp,
                    d = null != o ? new Date(o).getTime() - 1 : 0,
                    C = Math.max(r, d);
                return C <= 0 && (C = B.default.extractTimestamp(t) - 1), isNaN(u) ? C : Math.max(u, C)
            }

            function eH(e) {
                if (null != e && null != e.joinedAt) {
                    if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
                    if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
                    else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
                }
                return Date.now()
            }

            function eF(e, t) {
                return !!(e.mentionCount > 0) || !(B.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && B.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && B.default.compare(e._lastMessageId, t) > 0) && !0
            }

            function eV(e) {
                if (null != e) {
                    let t = ev.get(e);
                    if (eU(t)) return t.ack({})
                }
                return !1
            }

            function eY() {
                null != ep && clearTimeout(ep)
            }

            function eb(e) {
                if (null != e.channelUpdates) {
                    var t;
                    eL(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
                }
                if (null != e.channelTimestampUpdates)
                    for (let t of e.channelTimestampUpdates) {
                        let e = ev.get(t.id);
                        null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = em(t.last_pin_timestamp))
                    }
            }

            function ek(e) {
                let {
                    channelId: t
                } = e, n = ev.get(t);
                n.rebuildChannelState()
            }

            function ew(e) {
                let {
                    threads: t
                } = e;
                eD(t)
            }

            function eB(e) {
                let t = en.default.getCurrentUser();
                return null != e.creator_id && null != t && e.creator_id === t.id
            }

            function ex(e) {
                let {
                    channel: t
                } = e;
                return ev.clear(t.id)
            }

            function eK() {
                let e = K.default.getCurrentSidebarChannelId(eC),
                    t = !1;
                return eh !== e ? (t = eq(eh), eh = e) : t = eV(e) || t, t
            }

            function eW(e) {
                if (null == e) return;
                let t = ev.get(e);
                t.isManualAck = !1
            }

            function eq(e) {
                if (null == e) return !1;
                let t = ev.get(e);
                return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
            }

            function eQ(e) {
                let {
                    channelId: t,
                    messageId: n,
                    manual: a,
                    newMentionCount: l
                } = e, i = ev.get(t);
                return a ? (i.rebuildChannelState(n, !0, l), !0) : n !== i._ackMessageId && i.ack({
                    messageId: n,
                    local: !0
                })
            }

            function ez(e) {
                let {
                    id: t,
                    ackType: n,
                    ackedId: a,
                    local: l
                } = e;
                return eZ(t, n, a, l)
            }

            function eZ(e, t, n, a) {
                var l;
                let i = ev.get(e, t);
                return n !== i.ackMessageId && i.lastMessageId !== i.ackMessageId && (null != i.lastMessageId || 0 !== i.mentionCount) && (n = null !== (l = null != n ? n : i.lastMessageId) && void 0 !== l ? l : B.default.fromTimestamp(i.getAckTimestamp()), i.ack({
                    messageId: n,
                    local: null == a || a
                }))
            }
            class eX extends d.default.Store {
                initialize() {
                    this.waitFor(q.default, en.default, Z.default, z.default, W.default, ee.default, J.default, j.default, _.default, D.default, P.default, K.default, g.default, Q.default, p.default, et.default, ea.default, y.default, A.default, H.default, M.default), this.syncWith([K.default], eK)
                }
                getReadStatesByChannel() {
                    var e;
                    return null !== (e = ev._readStates[er.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
                }
                getForDebugging(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getIfExists(e, t)
                }
                getNotifCenterReadState(e) {
                    return ev._readStates[er.ReadStateTypes.NOTIFICATION_CENTER][e]
                }
                hasUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
                }
                hasNotableUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() && e.hasNotableUnread(), !1)
                }
                hasTrackedUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
                }
                isForumPostUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.isForumPostUnread(), !1)
                }
                hasRelevantUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return this.hasNotableUnread(e.id, t) && et.default.isChannelRelevant(e)
                }
                getUnreadCount(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
                }
                getMentionCount(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
                }
                getGuildChannelUnreadState(e, t, n, a, l, i) {
                    return ev.getValue(e.id, er.ReadStateTypes.CHANNEL, s => s.getGuildChannelUnreadState(e, t, n, a, l, i), {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    })
                }
                hasRecentlyVisitedAndRead(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
                }
                ackMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
                }
                getTrackedAckMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
                }
                lastMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.lastMessageId, null)
                }
                lastMessageTimestamp(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.lastMessageTimestamp, 0)
                }
                lastPinTimestamp(e) {
                    return ev.getValue(e, er.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
                }
                getOldestUnreadMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
                }
                getOldestUnreadTimestamp(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
                }
                isEstimated(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e.estimated, !1)
                }
                hasOpenedThread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
                    return ev.getValue(e, t, e => e._persisted, !1)
                }
                hasUnreadPins(e) {
                    return ev.getValue(e, er.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
                }
                isNewForumThread(e, t, n) {
                    let a = ev.get(t),
                        l = ev.get(e);
                    if (!0 === l._persisted || null == a.ackMessageIdAtChannelSelect || 0 >= B.default.compare(e, a.ackMessageIdAtChannelSelect)) return !1;
                    let i = eH(n),
                        s = B.default.extractTimestamp(e);
                    return s > i
                }
                getAllReadStates(e) {
                    let t = [];
                    return ev.forEach(n => {
                        switch (n.type) {
                            case er.ReadStateTypes.GUILD_HOME:
                            case er.ReadStateTypes.GUILD_EVENT:
                            case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                let a = Z.default.getGuild(n.channelId);
                                null != a && t.push(n.serialize(e));
                                break;
                            case er.ReadStateTypes.NOTIFICATION_CENTER:
                                var l;
                                let i = null === (l = en.default.getCurrentUser()) || void 0 === l ? void 0 : l.id;
                                i === n.channelId && t.push(n.serialize(e));
                                break;
                            default:
                                t.push(n.serialize(e))
                        }
                    }), t
                }
                getGuildUnreadsSentinel(e) {
                    return ev.getGuildSentinels(e).unreadsSentinel
                }
                getMentionChannelIds() {
                    return ev.getMentionChannelIds()
                }
            }
            eX.displayName = "ReadStateStore";
            let eJ = new eX(E.default, {
                CONNECTION_OPEN: function(e) {
                    var t, n;
                    let {
                        guilds: a,
                        relationships: l,
                        initialPrivateChannels: i,
                        readState: s
                    } = e;
                    eA(), ec = null, !eE && !s.partial && ev.clearAll(), eE = !1, s.entries.forEach(e => {
                        var t, n, a;
                        let l = null !== (t = e.read_state_type) && void 0 !== t ? t : er.ReadStateTypes.CHANNEL;
                        if (l !== er.ReadStateTypes.CHANNEL) {
                            ;
                            e = {
                                id: (a = e).id,
                                read_state_type: a.read_state_type,
                                mention_count: a.badge_count,
                                last_message_id: a.last_acked_id
                            }
                        }
                        let i = ev.get(e.id, l);
                        i._persisted = !0, i._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, i.flags = e.flags, i.lastViewed = e.last_viewed;
                        let s = W.default.getBasicChannel(e.id);
                        null != s && (0, F.isThread)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? i.ackMessageId = B.default.fromTimestamp(eG(s.guild_id, s.id)) : i.ackMessageId = e.last_message_id, i.ackPinTimestamp = em(e.last_pin_timestamp), ev._mentionChannels.delete(i.channelId), i._mentionCount > 0 && i.canHaveMentions() && ev._mentionChannels.add(i.channelId)
                    }), ev.resetGuildSentinels();
                    let u = null === (t = en.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null != u) {
                        let e = ev.get(u, er.ReadStateTypes.NOTIFICATION_CENTER);
                        e.lastMessageId = B.default.fromTimestamp(Date.now())
                    }
                    for (let e of (function(e) {
                            let t = en.default.getCurrentUser();
                            if (!(0, O.inNotificationCenterEnabled)() || null == t) return 0;
                            let n = ev.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER);
                            e.forEach(e => {
                                if (null == e.since || e.type !== el.RelationshipTypes.PENDING_INCOMING) return;
                                let t = new Date(e.since).getTime(),
                                    a = null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0;
                                a < t && (n.mentionCount++, n.lastMessageId = B.default.fromTimestamp(t))
                            })
                        }(l), eL(i), a)) eL(null !== (n = e.channels) && void 0 !== n ? n : []), eb(e), eP(e);
                    eY(), ep = setTimeout(() => (function(e) {
                        let t = eT();
                        for (let a of e) {
                            var n;
                            let e = null !== (n = a.read_state_type) && void 0 !== n ? n : er.ReadStateTypes.CHANNEL,
                                l = ev.get(a.id, e);
                            l.shouldDeleteReadState(t) && l.delete()
                        }
                    })(s.entries), 1e4)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        lazyPrivateChannels: t
                    } = e;
                    eL(t)
                },
                LOGOUT: eY,
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        readStates: t,
                        selectedChannelId: n
                    } = e;
                    eA(), ec = null, eC = n, eh = K.default.getCurrentSidebarChannelId(eC), ev.clearAll(), t.forEach(e => {
                        let t = ev.get(e.channelId);
                        t.deserializeForOverlay(e), t.type === er.ReadStateTypes.CHANNEL && t.rebuildChannelState()
                    })
                },
                CACHE_LOADED: function(e) {
                    let {
                        readStates: t
                    } = e;
                    eE = !0, eA(), t.forEach(e => {
                        var t;
                        let n = null !== (t = e.type) && void 0 !== t ? t : er.ReadStateTypes.CHANNEL;
                        e.type = n, null == ev._readStates[n] && (ev._readStates[n] = {}), ev._readStates[n][e.channelId] = (0, c.dangerouslyCast)(e, ev)
                    })
                },
                GUILD_CREATE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, a = eT();
                    ev.forEach(e => {
                        e.guildId === n.id && e.shouldDeleteReadState(a) && e.delete(!1)
                    }), eL(null !== (t = n.channels) && void 0 !== t ? t : []), eb(n), eP(n)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        isAfter: n,
                        messages: a
                    } = e, l = ev.get(t);
                    l.loadedMessages = !0;
                    let i = J.default.getMessages(t);
                    null != i && (a.length > 0 && 1 === B.default.compare(a[0].id, l.ackMessageId) && 0 === l.unreadCount ? l.rebuildChannelState() : i.hasPresent() || i.jumpTargetId === l.ackMessageId ? l.rebuildChannelState() : n && null != l.ackMessageId && i.has(l.ackMessageId, !0) && (l.unreadCount += a.length, null == l.oldestUnreadMessageId && l.rebuildChannelState())), eD(a.map(e => e.thread).filter(k.isNotNullish))
                },
                MESSAGE_CREATE: function(e) {
                    let t, n, {
                            channelId: l,
                            message: i,
                            isPushNotification: s
                        } = e,
                        u = ev.get(l);
                    u.lastMessageId = i.id;
                    let r = en.default.getCurrentUser(),
                        o = W.default.getBasicChannel(l);
                    if (null != i.author && null != r && i.author.id === r.id) return null != u.outgoingAck && u.clearOutgoingAck(), eQ({
                        channelId: l,
                        messageId: i.id,
                        manual: !1
                    });
                    let d = (0, I.getRootNavigationRefIfInExperiment)();
                    if ((null == d ? void 0 : d.isReady()) === !0) {
                        let e = d.getCurrentRoute(),
                            n = _.default.getChatOpen(u.channelId);
                        n ? t = u.channelId : (null == e ? void 0 : e.name) === "channel" && (t = e.params.channelId)
                    } else null == d && (t = ee.default.getChannelId(), n = K.default.getCurrentSidebarChannelId(t));
                    let C = t === l || n === l;
                    if (C && eU(u) && !s || null != a && a.isInstanceFocused() && C && a.isInstanceUILocked() && a.isPinned(el.OverlayWidgets.TEXT)) return u.ack({
                        messageId: i.id
                    });
                    (null == u.oldestUnreadMessageId || u.oldestUnreadMessageIdStale) && (u.oldestUnreadMessageId = i.id), u.unreadCount++;
                    let h = null != i.author && $.default.isBlocked(i.author.id) || i.type === el.MessageTypes.RECIPIENT_REMOVE && (null == o ? void 0 : o.type) === el.ChannelTypes.GROUP_DM;
                    if (!h && (null != r && (0, R.isRawMessageMentioned)({
                            rawMessage: i,
                            userId: r.id,
                            suppressEveryone: et.default.isSuppressEveryoneEnabled(u.guildId),
                            suppressRoles: et.default.isSuppressRolesEnabled(u.guildId)
                        }) || eR(W.default.getChannel(l))) && (u.mentionCount++, (0, U.isNotificationRedesignV2Enabled)() && null != r)) {
                        let e = ev.get(r.id, er.ReadStateTypes.NOTIFICATION_CENTER);
                        e.lastMessageId = i.id, y.default.tabFocused && eZ(r.id, er.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1)
                    }
                },
                MESSAGE_DELETE: ek,
                MESSAGE_DELETE_BULK: ek,
                MESSAGE_ACK: eQ,
                CHANNEL_ACK: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        immediate: a = !1,
                        force: l = !1,
                        context: i,
                        location: s
                    } = e, u = ev.get(t), r = u.ack({
                        messageId: n,
                        local: i !== el.CURRENT_APP_CONTEXT,
                        immediate: a,
                        force: l,
                        isExplicitUserAction: !0,
                        location: s
                    });
                    return null != n ? (u.rebuildChannelState(), !0) : r
                },
                CHANNEL_LOCAL_ACK: function(e) {
                    let {
                        channelId: t
                    } = e, n = ev.get(t);
                    return n.ack({
                        messageId: void 0,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_PINS_ACK: function(e) {
                    let {
                        channelId: t,
                        timestamp: n
                    } = e, a = ev.get(t);
                    return a.ackPins(n)
                },
                CHANNEL_PINS_UPDATE: function(e) {
                    let {
                        channelId: t,
                        lastPinTimestamp: n
                    } = e, a = ev.get(t), l = em(n);
                    return a.lastPinTimestamp !== l && (a.lastPinTimestamp = l, !0)
                },
                CHANNEL_SELECT: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e, a = K.default.getCurrentSidebarChannelId(n), l = W.default.getChannel(n);
                    if (null != l) {
                        let e = ev.get(l.id);
                        e.ackMessageIdAtChannelSelect = null !== (t = e.ackMessageId) && void 0 !== t ? t : B.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
                    }
                    eW(eC), eW(eh);
                    let i = !1;
                    return eC !== n && (i = eq(eC) || i, i = eq(eh) || i), (eC === n || (null == l ? void 0 : l.type) != null && el.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type)) && (i = eV(n) || i), eC === n && (i = eV(a) || i), eC = n, eh = a, i
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return;
                    let n = ev.get(t);
                    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, F.isReadableType)(t.type)) return !1;
                    let n = ev.get(t.id);
                    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = em(t.lastPinTimestamp)
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    (function(e) {
                        if (!F.ALL_CHANNEL_TYPES.has(e.type)) return 0;
                        let t = ev.get(e.id);
                        t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = em(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === x.default.getId() && (t.loadedMessages = !0)
                    })(t),
                    function(e) {
                        let t = e.parent_id,
                            n = ev.get(t);
                        n.lastMessageId = e.id;
                        let a = en.default.getCurrentUser();
                        if (e.ownerId === (null == a ? void 0 : a.id)) {
                            let n = ev.get(e.id);
                            n._persisted = !0, eQ({
                                channelId: t,
                                messageId: e.id,
                                manual: !1
                            })
                        }
                    }(t)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return !!F.ALL_CHANNEL_TYPES.has(t.type) && ev.get(t.id).syncThreadSettings()
                },
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(e => {
                        if (!F.ALL_CHANNEL_TYPES.has(e.type)) return;
                        let t = ev.get(e.id);
                        if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = em(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = P.default.hasJoined(e.id), e.isForumPost()) {
                            let t = ev.get(e.parent_id);
                            0 > B.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
                        }
                    })
                },
                LOAD_THREADS_SUCCESS: ew,
                LOAD_ARCHIVED_THREADS_SUCCESS: ew,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t) eD(e.map(e => {
                        let {
                            thread: t
                        } = e;
                        return t
                    }).filter(k.isNotNullish));
                    eD(n)
                },
                THREAD_MEMBER_UPDATE: function(e) {
                    let {
                        id: t
                    } = e;
                    return ev.get(t).syncThreadSettings()
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    return (0, G.doesThreadMembersActionAffectMe)(e) && ev.get(e.id).syncThreadSettings()
                },
                CHANNEL_DELETE: ex,
                THREAD_DELETE: ex,
                WINDOW_FOCUS: function(e) {
                    let t = !1;
                    for (let [n, a] of Object.entries(eN)) a === e.windowId && (t = function(e, t) {
                        if (null == e) return !1;
                        let n = ev.get(e);
                        return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eV(e)
                    }(n, e.focused) || t);
                    return t
                },
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eV(t)
                },
                CURRENT_USER_UPDATE: function() {
                    ec = null
                },
                DRAWER_OPEN: function() {
                    if (null != eC) {
                        let e = ev.get(eC);
                        !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
                    }
                    return !1
                },
                DRAWER_CLOSE: function() {
                    return eV(eC)
                },
                BULK_ACK: function(e) {
                    var t, n;
                    let {
                        channels: a,
                        context: l
                    } = e, i = a.filter(e => null != e.messageId && eJ.hasUnread(e.channelId, e.readStateType));
                    t = i, n = l, t.forEach(e => {
                        let {
                            channelId: t,
                            messageId: n,
                            readStateType: a
                        } = e, l = ev.get(t, a);
                        l.ack({
                            messageId: n,
                            local: !0,
                            immediate: void 0,
                            force: void 0,
                            isExplicitUserAction: !0
                        })
                    }), n !== el.CURRENT_APP_CONTEXT || (ef.push(...t.map(e => ({
                        channel_id: e.channelId,
                        message_id: e.messageId,
                        read_state_type: e.readStateType
                    }))), e_ || ey())
                },
                ENABLE_AUTOMATIC_ACK: function(e) {
                    let {
                        channelId: t,
                        windowId: n
                    } = e;
                    return eN[t] !== n && (u(void 0 === eN[t], "handleEnableAutomaticAck: channel already visible in another window"), eN[t] = n, eV(t))
                },
                DISABLE_AUTOMATIC_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eN[t] = void 0, !1
                },
                GUILD_FEATURE_ACK: ez,
                GUILD_SCHEDULED_EVENT_CREATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id, a = ev.get(t.guild_id, er.ReadStateTypes.GUILD_EVENT);
                    if (a.lastMessageId = t.id, eB(t)) {
                        ez({
                            type: "GUILD_FEATURE_ACK",
                            id: n,
                            ackType: er.ReadStateTypes.GUILD_EVENT,
                            ackedId: t.id,
                            local: !1
                        });
                        return
                    }!et.default.isMuteScheduledEventsEnabled(n) && a.mentionCount++
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id;
                    if (eB(t) || ![es.GuildScheduledEventStatus.CANCELED, es.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
                    let a = ev.get(n, er.ReadStateTypes.GUILD_EVENT);
                    a.handleGuildEventRemoval(n, t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id;
                    if (eB(t)) return !1;
                    let a = ev.get(t.guild_id, er.ReadStateTypes.GUILD_EVENT);
                    a.handleGuildEventRemoval(n, t.id)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return ev.clear(t.id, er.ReadStateTypes.GUILD_EVENT)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = t.latest_onboarding_question_id;
                    if (null == n) return;
                    let a = ev.get(t.id, er.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    a._guildId = t.id, a.lastMessageId = n
                },
                RESORT_THREADS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eV(t)
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    let {
                        channelId: t,
                        chatOpen: n
                    } = e
                },
                DECAY_READ_STATES: eA,
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    var t;
                    let {
                        item: n
                    } = e;
                    if (!(0, O.inNotificationCenterEnabled)()) return !1;
                    let a = null === (t = en.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == a) return !1;
                    let l = ev.get(a, er.ReadStateTypes.NOTIFICATION_CENTER);
                    l.lastMessageId = n.id;
                    let i = (0, U.isNotificationRedesignV2Enabled)();
                    if (!i && y.default.active || i && y.default.tabFocused) {
                        eZ(a, er.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                        return
                    }
                    l.mentionCount++
                },
                RELATIONSHIP_ADD: function(e) {
                    let t = en.default.getCurrentUser();
                    if (!(0, O.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== el.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== el.RelationshipTypes.FRIEND) return !1;
                    let n = ev.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER),
                        a = e.relationship.type === el.RelationshipTypes.FRIEND,
                        l = a ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                        i = null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0,
                        s = (0, U.isNotificationRedesignV2Enabled)();
                    i < l && (n.lastMessageId = B.default.fromTimestamp(l), !s && y.default.active || s && y.default.tabFocused ? eZ(t.id, er.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : a ? n.mentionCount-- : n.mentionCount++)
                },
                RELATIONSHIP_REMOVE: function(e) {
                    let t = en.default.getCurrentUser();
                    if (!(0, O.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== el.RelationshipTypes.PENDING_INCOMING) return !1;
                    let n = ev.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER),
                        a = new Date(e.relationship.since).getTime(),
                        l = null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0;
                    l <= a && (n.mentionCount = Math.max(0, n.mentionCount - 1))
                },
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    var t;
                    let {
                        ids: n,
                        optimistic: a
                    } = e;
                    if (a || !(0, O.inNotificationCenterEnabled)() || y.default.active) return !1;
                    let l = null === (t = en.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == l) return !1;
                    let i = ev.get(l, er.ReadStateTypes.NOTIFICATION_CENTER);
                    n.forEach(e => {
                        0 > B.default.compare(i.ackMessageId, e) && (i.mentionCount = Math.max(i.mentionCount - 1, 0))
                    })
                },
                USER_NON_CHANNEL_ACK: function(e) {
                    var t;
                    let {
                        ackType: n,
                        ackedId: a,
                        local: l
                    } = e, i = null === (t = en.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    return null != i && eZ(i, n, a, l)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = !1;
                    for (let a of null !== (t = e.channels) && void 0 !== t ? t : []) {
                        let e = ev.get(a.id),
                            t = em(a.lastPinTimestamp);
                        (e.lastMessageId !== a.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = a.lastMessageId, e.lastPinTimestamp = t)
                    }
                    return n
                },
                CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eq(t)
                }
            });
            var ej = eJ
        },
        744983: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var l = n("917351"),
                i = n.n(l),
                s = n("446674"),
                u = n("95410"),
                r = n("913144"),
                o = n("390933"),
                d = n("25932"),
                C = n("42203"),
                h = n("305961"),
                c = n("18494"),
                E = n("49111");
            let f = {},
                _ = !1;

            function p(e) {
                return null == f[e] && (f[e] = {
                    searchId: e,
                    searchType: N(e),
                    isIndexing: !1,
                    isHistoricalIndexing: !1,
                    isSearching: !1,
                    analyticsId: null,
                    editorState: null,
                    offset: 0,
                    query: null,
                    hasError: !1,
                    searchFetcher: null,
                    rawResults: null,
                    totalResults: 0,
                    documentsIndexed: 0,
                    resultsBlocked: 0,
                    showBlockedResults: !1,
                    showNoResultsAlt: !1
                }), f[e]
            }

            function N(e) {
                return e === E.SearchTypes.DMS ? E.SearchTypes.DMS : null != h.default.getGuild(e) ? E.SearchTypes.GUILD : null != C.default.getChannel(e) ? E.SearchTypes.CHANNEL : null
            }

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == e) return n;
                let a = f[e];
                return null == a ? n : t(a)
            }
            let g = "SearchStore",
                S = !1,
                I = {},
                A = null;

            function m(e) {
                var t;
                let {
                    searchId: n,
                    query: a
                } = e;
                if ("string" != typeof a || "" === (a = a.trim())) return;
                let l = I[n] = null !== (t = I[n]) && void 0 !== t ? t : [],
                    i = l.indexOf(a); - 1 !== i ? (l.splice(i, 1), l.unshift(a)) : null != l[0] && "" !== l[0] && a.startsWith(l[0]) ? l[0] = a : i < 0 && l.unshift(a), l.length > 5 && l.splice(5, l.length), u.default.set(g, {
                    history: I
                })
            }

            function M(e) {
                let {
                    searchId: t
                } = e, n = f[t];
                if (null == n) return !1;
                null != n.searchFetcher && n.searchFetcher.cancel(), delete f[t]
            }

            function R(e) {
                if (e === A) return !1;
                null != e && null == f[e] && p(e), A = e
            }
            class y extends s.default.Store {
                initialize() {
                    this.waitFor(h.default, C.default);
                    let e = u.default.get(g);
                    if ((null == e ? void 0 : e.history) != null) {
                        var t;
                        Object.keys(t = e.history).forEach(e => {
                            Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
                        }), I = t
                    }
                    S = !!u.default.get("tokenized")
                }
                isOpen() {
                    return _
                }
                getCurrentSearchModalType() {
                    return a
                }
                getCurrentSearchId() {
                    return A
                }
                isActive() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A;
                    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
                }
                isTokenized() {
                    return S
                }
                getSearchType(e) {
                    return T(null != e ? e : A, e => e.searchType)
                }
                getRawResults(e) {
                    return T(e, e => e.rawResults)
                }
                hasResults(e) {
                    return null != T(e, e => e.rawResults)
                }
                isIndexing(e) {
                    return T(e, e => e.isIndexing) || !1
                }
                isHistoricalIndexing(e) {
                    return T(e, e => e.isHistoricalIndexing) || !1
                }
                isSearching(e) {
                    return T(e, e => e.isSearching) || !1
                }
                getAnalyticsId(e) {
                    return T(e, e => e.analyticsId)
                }
                getResultsBlocked(e) {
                    return T(e, e => e.resultsBlocked)
                }
                getDocumentsIndexedCount(e) {
                    return T(e, e => e.documentsIndexed)
                }
                getSearchFetcher(e) {
                    return T(e, e => e.searchFetcher)
                }
                getTotalResults(e) {
                    var t;
                    return null !== (t = T(e, e => e.totalResults)) && void 0 !== t ? t : 0
                }
                getEditorState(e) {
                    return T(e, e => e.editorState)
                }
                getHistory(e) {
                    return I[e]
                }
                getOffset(e) {
                    var t;
                    return null !== (t = T(e, e => e.offset)) && void 0 !== t ? t : 0
                }
                getQuery(e) {
                    return T(e, e => e.query)
                }
                hasError(e) {
                    var t;
                    return null !== (t = T(e, e => e.hasError)) && void 0 !== t && t
                }
                shouldShowBlockedResults(e) {
                    var t;
                    return null !== (t = T(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
                }
                shouldShowNoResultsAlt(e) {
                    var t;
                    return null !== (t = T(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
                }
                getResultsState(e) {
                    return {
                        isSearching: this.isSearching(e),
                        isIndexing: this.isIndexing(e),
                        isHistoricalIndexing: this.isHistoricalIndexing(e),
                        documentsIndexed: this.getDocumentsIndexedCount(e),
                        offset: this.getOffset(e),
                        totalResults: this.getTotalResults(e),
                        hasError: this.hasError(e),
                        showBlockedResults: this.shouldShowBlockedResults(e),
                        showNoResultsAlt: this.shouldShowNoResultsAlt(e)
                    }
                }
            }
            y.displayName = "SearchStore";
            var O = new y(r.default, {
                SEARCH_START: function(e) {
                    var t, n, a;
                    let {
                        queryString: l,
                        searchId: s,
                        query: u
                    } = e, h = p(s);
                    null != h.searchFetcher && (h.searchFetcher.cancel(), h.searchFetcher = null);
                    let f = s,
                        _ = h.searchType;
                    s === E.FAVORITES && (f = null !== (n = c.default.getChannelId()) && void 0 !== n ? n : s, _ = E.SearchTypes.CHANNEL);
                    let N = new o.default(f, _, u);
                    h.searchFetcher = N, h.isSearching = !0, h.rawResults = null, h.analyticsId = null, h.query = i.omit(u, "type"), h.offset = null !== (a = u.offset) && void 0 !== a ? a : 0, h.showBlockedResults = !1, m({
                        type: "SEARCH_ADD_HISTORY",
                        searchId: s,
                        query: l
                    });
                    let T = s === E.FAVORITES ? null === (t = C.default.getChannel(f)) || void 0 === t ? void 0 : t.guild_id : _ === E.SearchTypes.GUILD ? s : null;
                    N.fetch(e => {
                        var t, n;
                        r.default.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: s,
                            guildId: T,
                            analyticsId: e.body.analytics_id,
                            totalResults: e.body.total_results,
                            messages: e.body.messages,
                            threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                            members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, d.default)(e)),
                            hasError: !1,
                            doingHistoricalIndex: e.body.doing_deep_historical_index,
                            documentsIndexed: e.body.documents_indexed
                        })
                    }, () => {
                        r.default.dispatch({
                            type: "SEARCH_INDEXING",
                            searchId: s
                        })
                    }, () => {
                        r.default.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: s,
                            guildId: T,
                            messages: [],
                            threads: [],
                            members: [],
                            totalResults: 0,
                            analyticsId: null,
                            hasError: !0,
                            doingHistoricalIndex: !1,
                            documentsIndexed: 0
                        })
                    })
                },
                SEARCH_INDEXING: function(e) {
                    let {
                        searchId: t
                    } = e, n = p(t);
                    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        searchId: t
                    } = e, n = p(t);
                    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
                    let a = n.query;
                    null == a && (n.hasError = !0)
                },
                SEARCH_EDITOR_STATE_CLEAR: M,
                SEARCH_ENSURE_SEARCH_STATE: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null != t && p(t)
                },
                SEARCH_EDITOR_STATE_CHANGE: function(e) {
                    let {
                        searchId: t,
                        editorState: n
                    } = e;
                    p(t).editorState = n
                },
                SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
                    let {
                        searchId: t,
                        showBlocked: n
                    } = e, a = p(t);
                    a.showBlockedResults = n
                },
                SEARCH_SCREEN_OPEN: function(e) {
                    let {
                        searchId: t
                    } = e;
                    R(t)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    R(null != t ? t : n)
                },
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    return null != A && M({
                        searchId: A
                    })
                },
                SEARCH_CLEAR_HISTORY: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null == t ? (u.default.remove(g), I = {}) : (delete I[t], u.default.set(g, {
                        history: I
                    }))
                },
                SEARCH_REMOVE_HISTORY: function(e) {
                    let {
                        searchId: t,
                        query: n
                    } = e;
                    null != I[t] && (I[t] = I[t].filter(e => e !== n), u.default.set(g, {
                        history: I
                    }))
                },
                SEARCH_ADD_HISTORY: m,
                LOGOUT: function() {
                    u.default.remove(g), I = {}
                },
                CONNECTION_OPEN: function() {
                    Object.keys(f).forEach(e => {
                        null != f[e] && (f[e].searchType = N(e))
                    })
                },
                SEARCH_MODAL_OPEN: function(e) {
                    let {
                        searchId: t,
                        searchType: n
                    } = e;
                    null != t && (A = t), _ = !0, a = n
                },
                SEARCH_MODAL_CLOSE: function() {
                    _ = !1, a = void 0
                }
            })
        },
        280168: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("446674"),
                l = n("913144"),
                i = n("991170"),
                s = n("42203"),
                u = n("42887"),
                r = n("945956"),
                o = n("18494"),
                d = n("49111"),
                C = n("353927");
            let h = new Map,
                c = null,
                E = null,
                f = null;

            function _(e, t) {
                let n = h.get(e);
                if (null == n) return !1;
                let a = n.delete(t);
                return 0 === n.size && h.delete(e), a
            }

            function p(e, t, n) {
                var a, l, i;
                let s = null !== (i = null === (l = h.get(e)) || void 0 === l ? void 0 : null === (a = l.get(t)) || void 0 === a ? void 0 : a.flags) && void 0 !== i ? i : C.SpeakingFlags.NONE;
                return (s & n) === n
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = h.get(e);
                if (null == a) return !1;
                for (let [e, {
                        flags: l
                    }] of a)
                    if ((!n || e !== c) && (l & t) === t) return !0;
                return !1
            }

            function T(e) {
                let {
                    user: t,
                    sessionId: n
                } = e;
                c = t.id, E = n, f = null
            }
            class g extends a.default.Store {
                initialize() {
                    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(r.default)
                }
                getSpeakingDuration(e, t) {
                    var n, a;
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.MediaEngineContextTypes.DEFAULT,
                        i = null === (a = h.get(l)) || void 0 === a ? void 0 : null === (n = a.get(e)) || void 0 === n ? void 0 : n.since;
                    return null != i ? t - i : 0
                }
                getSpeakers() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.MediaEngineContextTypes.DEFAULT;
                    return Array.from(null !== (t = null === (e = h.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => p(n, e, C.SpeakingFlags.VOICE))
                }
                isSpeaking(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.MediaEngineContextTypes.DEFAULT;
                    return p(t, e, C.SpeakingFlags.VOICE)
                }
                isPrioritySpeaker(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.MediaEngineContextTypes.DEFAULT;
                    return p(t, e, C.SpeakingFlags.PRIORITY)
                }
                isSoundSharing(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.MediaEngineContextTypes.DEFAULT;
                    return p(t, e, C.SpeakingFlags.SOUNDSHARE)
                }
                isAnyoneElseSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.MediaEngineContextTypes.DEFAULT;
                    return N(e, C.SpeakingFlags.VOICE, !0)
                }
                isCurrentUserSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.MediaEngineContextTypes.DEFAULT;
                    return null != c && this.isSpeaking(c, e)
                }
                isAnyonePrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.MediaEngineContextTypes.DEFAULT;
                    return N(e, C.SpeakingFlags.VOICE | C.SpeakingFlags.PRIORITY)
                }
                isCurrentUserPrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.MediaEngineContextTypes.DEFAULT;
                    return null != c && this.isPrioritySpeaker(c, e) && this.isSpeaking(c, e)
                }
            }
            g.displayName = "SpeakingStore";
            var S = new g(l.default, {
                CONNECTION_OPEN: T,
                OVERLAY_INITIALIZE: T,
                SPEAKING: function(e) {
                    let {
                        context: t,
                        userId: n,
                        speakingFlags: a
                    } = e;
                    if ((a & C.SpeakingFlags.PRIORITY) === C.SpeakingFlags.PRIORITY) {
                        let e = s.default.getChannel(o.default.getVoiceChannelId());
                        null != e && i.default.can({
                            permission: d.Permissions.PRIORITY_SPEAKER,
                            user: n,
                            context: e
                        }) ? u.default.setCanHavePriority(n, !0) : (u.default.setCanHavePriority(n, !1), a &= ~C.SpeakingFlags.PRIORITY)
                    }
                    return function(e, t, n) {
                        var a, l;
                        let i = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.MediaEngineContextTypes.DEFAULT,
                                    t = h.get(e);
                                return null == t && (t = new Map, h.set(e, t)), t
                            }(e),
                            s = i.get(t),
                            u = null !== (a = null == s ? void 0 : s.flags) && void 0 !== a ? a : 0;
                        if (0 === u && 0 === n) return !1;
                        if (0 === n) i.delete(t), 0 === i.size && h.delete(e);
                        else {
                            let e = null !== (l = null == s ? void 0 : s.since) && void 0 !== l ? l : null,
                                a = (u & C.SpeakingFlags.VOICE) === C.SpeakingFlags.VOICE,
                                r = (n & C.SpeakingFlags.VOICE) === C.SpeakingFlags.VOICE;
                            a !== r && (e = r ? Date.now() : null), i.set(t, {
                                flags: n,
                                since: e
                            })
                        }
                        return !0
                    }(t, n, a)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: a,
                            sessionId: l
                        } = t, i = !1, s = f;
                        return n === c && l === E && (f = null != a ? a : null), s !== f && (i = h.delete(C.MediaEngineContextTypes.DEFAULT) || i), null == a ? i = n === c && l === E ? h.delete(C.MediaEngineContextTypes.DEFAULT) || i : _(C.MediaEngineContextTypes.DEFAULT, n) || i : n === c && l !== E ? i = h.delete(C.MediaEngineContextTypes.DEFAULT) || i : n !== c && a !== r.default.getChannelId() && (i = _(C.MediaEngineContextTypes.DEFAULT, n) || i), i || e
                    }, !1)
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {}
            })
        },
        555035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("446674"),
                l = n("913144"),
                i = n("353927");
            let s = null,
                u = null,
                r = {};

            function o(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = r[e];
                if (null == a) return;
                let l = a[null != t ? t : "null"];
                if (null != l) {
                    for (let e of Object.values(i.MediaEngineContextTypes))(n === e || null == n) && delete l[e];
                    r[e][null != t ? t : "null"] = l
                }
            }
            class d extends a.default.Store {
                getStreamId(e, t) {
                    var n, a, l;
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MediaEngineContextTypes.DEFAULT;
                    return null === (l = r[e]) || void 0 === l ? void 0 : null === (a = l[null != t ? t : "null"]) || void 0 === a ? void 0 : null === (n = a[s]) || void 0 === n ? void 0 : n.streamId
                }
                getUserStreamData(e, t) {
                    var n, a;
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MediaEngineContextTypes.DEFAULT;
                    return null === (a = r[e]) || void 0 === a ? void 0 : null === (n = a[null != t ? t : "null"]) || void 0 === n ? void 0 : n[l]
                }
            }
            d.displayName = "VideoStreamStore";
            var C = new d(l.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    s = t.id, u = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    s = t.id, u = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        userId: t,
                        guildId: n,
                        streamId: a,
                        context: l
                    } = e;
                    null != a ? ! function(e, t, n, a) {
                        var l;
                        !(e in r) && (r[e] = {});
                        let i = null !== (l = r[e][null != t ? t : "null"]) && void 0 !== l ? l : {};
                        r[e][null != t ? t : "null"] = {
                            ...i,
                            [a]: {
                                streamId: n
                            }
                        }
                    }(t, n, a, l) : o(t, n, l)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        var n;
                        let {
                            userId: a,
                            sessionId: l,
                            channelId: i,
                            guildId: d
                        } = t;
                        if (null == i && a === s) {
                            if (l !== u) return e;
                            r = {}
                        } else {
                            if (null != i || (null === (n = r[a]) || void 0 === n ? void 0 : n[null != d ? d : "null"]) == null) return e;
                            o(a, d)
                        }
                        return !0
                    }, !1)
                }
            })
        },
        404008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                permissionOverwritesForRoles: function() {
                    return m
                },
                permissionOverwriteForUser: function() {
                    return M
                },
                permissionOverwriteForRole: function() {
                    return R
                },
                permissionOverwritesForAnnouncement: function() {
                    return y
                },
                isChannelFull: function() {
                    return O
                },
                sanitizeGuildTextChannelName: function() {
                    return i.default
                },
                getBitrateLimit: function() {
                    return U
                },
                computeSummarizedVoiceUsers: function() {
                    return v
                },
                channelTypeString: function() {
                    return L
                },
                getMentionIconType: function() {
                    return D
                },
                previousTextChannelRouteForGuild: function() {
                    return P
                },
                getChannelPermalink: function() {
                    return G
                },
                getChannelLinkToCopy: function() {
                    return H
                }
            });
            var a = n("316693"),
                l = n("798609"),
                i = n("364480"),
                s = n("89073"),
                u = n("711326"),
                r = n("808422"),
                o = n("233069"),
                d = n("42203"),
                C = n("923959"),
                h = n("957255"),
                c = n("18494"),
                E = n("316133"),
                f = n("991170"),
                _ = n("49111"),
                p = n("646718"),
                N = n("782340");
            let {
                GUILD_VOICE: T,
                GUILD_CATEGORY: g,
                GUILD_STAGE_VOICE: S
            } = _.ChannelTypes;

            function I(e, t) {
                return e === t || e === g
            }

            function A(e, t, n) {
                let l = f.default.NONE;
                return ((0, o.isGuildSelectableChannelType)(t) || t === g) && (l = a.default.add(l, _.Permissions.VIEW_CHANNEL)), (I(t, T) || I(t, S)) && (l = a.default.add(l, _.Permissions.VIEW_CHANNEL), l = a.default.add(l, _.Permissions.CONNECT)), {
                    id: e,
                    type: n,
                    deny: f.default.NONE,
                    allow: l
                }
            }

            function m(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = [];
                if (n.length > 0 || i) {
                    var u, r, d;
                    let n;
                    s.push((u = e, r = t, d = l.PermissionOverwriteType.ROLE, n = f.default.NONE, ((0, o.isGuildSelectableChannelType)(r) || r === g) && (n = a.default.add(n, _.Permissions.VIEW_CHANNEL)), I(r, T) && (n = a.default.add(n, _.Permissions.VIEW_CHANNEL), n = a.default.add(n, _.Permissions.CONNECT)), {
                        id: u,
                        type: d,
                        allow: f.default.NONE,
                        deny: n
                    }))
                }
                return n.forEach(e => {
                    s.push(A(e, t, l.PermissionOverwriteType.ROLE))
                }), s
            }

            function M(e, t) {
                return A(e, t, l.PermissionOverwriteType.MEMBER)
            }

            function R(e, t) {
                return A(e, t, l.PermissionOverwriteType.ROLE)
            }

            function y(e) {
                return [{
                    id: e,
                    type: l.PermissionOverwriteType.ROLE,
                    deny: _.Permissions.SEND_MESSAGES,
                    allow: f.default.NONE
                }]
            }

            function O(e, t, n) {
                var a, l;
                let i = e.getGuildId(),
                    u = n.getGuild(i),
                    r = null !== (a = null == u ? void 0 : u.maxVideoChannelUsers) && void 0 !== a ? a : -1,
                    o = null !== (l = null == u ? void 0 : u.maxStageVideoChannelUsers) && void 0 !== l ? l : -1,
                    d = E.default.countVoiceStatesForChannel(e.id),
                    C = E.default.getVoiceStatesForChannel(e),
                    c = h.default.can(_.Permissions.MOVE_MEMBERS, e) && h.default.can(_.Permissions.CONNECT, e),
                    f = !1;
                f = e.type === S ? null != i && (t.hasVideo(e.id) || (0, s.hasStream)(C)) && o > 0 && d >= o : null != i && t.hasVideo(e.id) && r > 0 && d >= r + (c ? 1 : 0);
                let p = e.userLimit > 0 && d >= e.userLimit;
                return f || p && !c
            }

            function U(e, t) {
                return t.isGuildStageVoice() ? _.BITRATE_DEFAULT : null == e ? _.BITRATE_MAX : Math.max(e.hasFeature(_.GuildFeatures.VIP_REGIONS) ? p.BoostedGuildFeatures[_.BoostedGuildTiers.TIER_3].limits.bitrate : _.BITRATE_MAX, p.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
            }

            function v(e) {
                let {
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: a,
                    voiceStates: l
                } = e, i = function(e) {
                    let {
                        channels: t,
                        selectedChannelId: n,
                        selectedVoiceChannelId: a,
                        voiceStates: l
                    } = e, i = [];
                    return t.forEach(e => {
                        if (e.id === a || e.id === n) return;
                        let t = l[e.id];
                        null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                            (0, r.getAudienceRequestToSpeakState)(e.voiceState) === r.RequestToSpeakStates.ON_STAGE && i.push(e)
                        }) : t.forEach(e => i.push(e)))
                    }), i
                }({
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: a,
                    voiceStates: l
                });
                return i.map(e => e.user)
            }

            function L(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case _.ChannelTypes.DM:
                        return N.default.Messages.DM;
                    case _.ChannelTypes.GROUP_DM:
                        return N.default.Messages.GROUP_DM;
                    case _.ChannelTypes.GUILD_TEXT:
                        return N.default.Messages.TEXT_CHANNEL;
                    case _.ChannelTypes.GUILD_FORUM:
                        return N.default.Messages.FORUM_CHANNEL;
                    case _.ChannelTypes.GUILD_MEDIA:
                        return N.default.Messages.MEDIA_CHANNEL;
                    case _.ChannelTypes.GUILD_VOICE:
                        return N.default.Messages.VOICE_CHANNEL;
                    case _.ChannelTypes.GUILD_STAGE_VOICE:
                        return N.default.Messages.STAGE_CHANNEL;
                    case _.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return N.default.Messages.NEWS_CHANNEL;
                    case _.ChannelTypes.GUILD_STORE:
                        return N.default.Messages.STORE_CHANNEL;
                    case _.ChannelTypes.GUILD_CATEGORY:
                        return N.default.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function D(e) {
                if (null == e) return "text";
                let t = e.isMediaChannel();
                if (e.type === _.ChannelTypes.GUILD_VOICE) return h.default.can(_.Permissions.CONNECT, e) ? "voice" : "voice-locked";
                if (e.type === _.ChannelTypes.GUILD_STAGE_VOICE) return h.default.can(_.Permissions.CONNECT, e) ? "stage" : "stage-locked";
                if (o.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
                else if (e.type === _.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
                else if (e.type === _.ChannelTypes.GUILD_MEDIA) return "media";
                else if (o.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
            }

            function P(e) {
                let t;
                let n = d.default.getChannel(c.default.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === _.ChannelTypes.GUILD_TEXT) t = n.id;
                else {
                    let n = C.default.getDefaultChannel(e);
                    t = null != n ? n.id : null
                }
                return _.Routes.CHANNEL(e, t)
            }

            function G(e, t, n, a) {
                let l = null == a ? "" : "?summaryId=".concat(a);
                return "".concat(location.protocol, "//").concat(location.host).concat(_.Routes.CHANNEL(e, t, n)).concat(l)
            }

            function H(e, t, n, a) {
                let l;
                let i = e.getGuildId(),
                    s = (0, u.canUseMediaPostEmbed)(i, t);
                if (null != t && s) {
                    var r, o, d, C;
                    r = i, o = t.id, d = e.id, C = e.id, l = null == r || null == o || null == d ? G(r, o, C) : "".concat(location.protocol, "//").concat(location.host).concat(_.Routes.CHANNEL_THREAD_VIEW(r, o, d, C))
                } else l = null != a ? a : G(i, e.id, n);
                return l
            }
        },
        387111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return o
                },
                default: function() {
                    return C
                }
            });
            var a = n("446674"),
                l = n("42203"),
                i = n("26989"),
                s = n("27618"),
                u = n("158998"),
                r = n("782340");

            function o(e, t, n) {
                if (null == n) return null;
                if (null != e) return i.default.getNick(e, n.id);
                if (null != t) {
                    let e = l.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return s.default.getNickname(n.id)
                }
                return null
            }

            function d(e, t, n) {
                var a;
                return null == n ? r.default.Messages.UNKNOWN_USER : null !== (a = o(e, t, n)) && void 0 !== a ? a : u.default.getName(n)
            }
            var C = {
                getNickname: o,
                getName: d,
                useName: function(e, t, n) {
                    return (0, a.useStateFromStores)([i.default, l.default, s.default], () => d(e, t, n))
                }
            }
        },
        592861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = [{
                name: "Afghanistan",
                alpha2: "AF",
                phoneCountryCode: "+93",
                phoneCountryCodes: ["+93"]
            }, {
                name: "Aland Islands",
                alpha2: "AX",
                phoneCountryCode: "+358",
                phoneCountryCodes: ["+358"]
            }, {
                name: "Albania",
                alpha2: "AL",
                phoneCountryCode: "+355",
                phoneCountryCodes: ["+355"]
            }, {
                name: "Algeria",
                alpha2: "DZ",
                phoneCountryCode: "+213",
                phoneCountryCodes: ["+213"]
            }, {
                name: "American Samoa",
                alpha2: "AS",
                phoneCountryCode: "+1 684",
                phoneCountryCodes: ["+1 684"]
            }, {
                name: "Andorra",
                alpha2: "AD",
                phoneCountryCode: "+376",
                phoneCountryCodes: ["+376"]
            }, {
                name: "Angola",
                alpha2: "AO",
                phoneCountryCode: "+244",
                phoneCountryCodes: ["+244"]
            }, {
                name: "Anguilla",
                alpha2: "AI",
                phoneCountryCode: "+1 264",
                phoneCountryCodes: ["+1 264"]
            }, {
                name: "Antarctica",
                alpha2: "AQ",
                phoneCountryCode: "+672",
                phoneCountryCodes: ["+672"]
            }, {
                name: "Antigua and Barbuda",
                alpha2: "AG",
                phoneCountryCode: "+1 268",
                phoneCountryCodes: ["+1 268"]
            }, {
                name: "Argentina",
                alpha2: "AR",
                phoneCountryCode: "+54",
                phoneCountryCodes: ["+54"],
                localeForICU: "es-AR",
                currencyCode: "ars"
            }, {
                name: "Armenia",
                alpha2: "AM",
                phoneCountryCode: "+374",
                phoneCountryCodes: ["+374"]
            }, {
                name: "Aruba",
                alpha2: "AW",
                phoneCountryCode: "+297",
                phoneCountryCodes: ["+297"]
            }, {
                name: "Ascension",
                alpha2: "AC",
                phoneCountryCode: "+247",
                phoneCountryCodes: ["+247"]
            }, {
                name: "Australia",
                alpha2: "AU",
                phoneCountryCode: "+61",
                phoneCountryCodes: ["+61"],
                localeForICU: "en-AU",
                currencyCode: "aud"
            }, {
                name: "Austria",
                alpha2: "AT",
                phoneCountryCode: "+43",
                phoneCountryCodes: ["+43"]
            }, {
                name: "Azerbaijan",
                alpha2: "AZ",
                phoneCountryCode: "+994",
                phoneCountryCodes: ["+994"]
            }, {
                name: "Bahamas",
                alpha2: "BS",
                phoneCountryCode: "+1 242",
                phoneCountryCodes: ["+1 242"]
            }, {
                name: "Bahrain",
                alpha2: "BH",
                phoneCountryCode: "+973",
                phoneCountryCodes: ["+973"]
            }, {
                name: "Bangladesh",
                alpha2: "BD",
                phoneCountryCode: "+880",
                phoneCountryCodes: ["+880"]
            }, {
                name: "Barbados",
                alpha2: "BB",
                phoneCountryCode: "+1 246",
                phoneCountryCodes: ["+1 246"]
            }, {
                name: "Belarus",
                alpha2: "BY",
                phoneCountryCode: "+375",
                phoneCountryCodes: ["+375"]
            }, {
                name: "Belgium",
                alpha2: "BE",
                phoneCountryCode: "+32",
                phoneCountryCodes: ["+32"]
            }, {
                name: "Belize",
                alpha2: "BZ",
                phoneCountryCode: "+501",
                phoneCountryCodes: ["+501"]
            }, {
                name: "Benin",
                alpha2: "BJ",
                phoneCountryCode: "+229",
                phoneCountryCodes: ["+229"]
            }, {
                name: "Bermuda",
                alpha2: "BM",
                phoneCountryCode: "+1 441",
                phoneCountryCodes: ["+1 441"]
            }, {
                name: "Bhutan",
                alpha2: "BT",
                phoneCountryCode: "+975",
                phoneCountryCodes: ["+975"]
            }, {
                name: "Bolivia, Plurinational State of",
                alpha2: "BO",
                phoneCountryCode: "+591",
                phoneCountryCodes: ["+591"]
            }, {
                name: "Bonaire, Sint Eustatius and Saba",
                alpha2: "BQ",
                phoneCountryCode: "+599",
                phoneCountryCodes: ["+599"]
            }, {
                name: "Bosnia and Herzegovina",
                alpha2: "BA",
                phoneCountryCode: "+387",
                phoneCountryCodes: ["+387"]
            }, {
                name: "Botswana",
                alpha2: "BW",
                phoneCountryCode: "+267",
                phoneCountryCodes: ["+267"]
            }, {
                name: "Bouvet Island",
                alpha2: "BV",
                phoneCountryCode: "+55",
                phoneCountryCodes: ["+55"]
            }, {
                name: "Brazil",
                alpha2: "BR",
                phoneCountryCode: "+55",
                phoneCountryCodes: ["+55"]
            }, {
                name: "British Indian Ocean Territory",
                alpha2: "IO",
                phoneCountryCode: "+246",
                phoneCountryCodes: ["+246"]
            }, {
                name: "Brunei Darussalam",
                alpha2: "BN",
                phoneCountryCode: "+673",
                phoneCountryCodes: ["+673"]
            }, {
                name: "Bulgaria",
                alpha2: "BG",
                phoneCountryCode: "+359",
                phoneCountryCodes: ["+359"]
            }, {
                name: "Burkina Faso",
                alpha2: "BF",
                phoneCountryCode: "+226",
                phoneCountryCodes: ["+226"]
            }, {
                name: "Burundi",
                alpha2: "BI",
                phoneCountryCode: "+257",
                phoneCountryCodes: ["+257"]
            }, {
                name: "Cambodia",
                alpha2: "KH",
                phoneCountryCode: "+855",
                phoneCountryCodes: ["+855"]
            }, {
                name: "Cameroon",
                alpha2: "CM",
                phoneCountryCode: "+237",
                phoneCountryCodes: ["+237"]
            }, {
                name: "Canada",
                alpha2: "CA",
                phoneCountryCode: "+1",
                phoneCountryCodes: ["+1"]
            }, {
                name: "Cape Verde",
                alpha2: "CV",
                phoneCountryCode: "+238",
                phoneCountryCodes: ["+238"]
            }, {
                name: "Cayman Islands",
                alpha2: "KY",
                phoneCountryCode: "+1 345",
                phoneCountryCodes: ["+1 345"]
            }, {
                name: "Central African Republic",
                alpha2: "CF",
                phoneCountryCode: "+236",
                phoneCountryCodes: ["+236"]
            }, {
                name: "Chad",
                alpha2: "TD",
                phoneCountryCode: "+235",
                phoneCountryCodes: ["+235"]
            }, {
                name: "Chile",
                alpha2: "CL",
                phoneCountryCode: "+56",
                phoneCountryCodes: ["+56"],
                localeForICU: "es-CL",
                currencyCode: "clp"
            }, {
                name: "China",
                alpha2: "CN",
                phoneCountryCode: "+86",
                phoneCountryCodes: ["+86"]
            }, {
                name: "Christmas Island",
                alpha2: "CX",
                phoneCountryCode: "+61",
                phoneCountryCodes: ["+61"]
            }, {
                name: "Cocos (Keeling) Islands",
                alpha2: "CC",
                phoneCountryCode: "+61",
                phoneCountryCodes: ["+61"]
            }, {
                name: "Colombia",
                alpha2: "CO",
                phoneCountryCode: "+57",
                phoneCountryCodes: ["+57"],
                localeForICU: "es-CO",
                currencyCode: "cop"
            }, {
                name: "Comoros",
                alpha2: "KM",
                phoneCountryCode: "+269",
                phoneCountryCodes: ["+269"]
            }, {
                name: "Congo",
                alpha2: "CG",
                phoneCountryCode: "+242",
                phoneCountryCodes: ["+242"]
            }, {
                name: "Congo, The Democratic Republic of the",
                alpha2: "CD",
                phoneCountryCode: "+243",
                phoneCountryCodes: ["+243"]
            }, {
                name: "Cook Islands",
                alpha2: "CK",
                phoneCountryCode: "+682",
                phoneCountryCodes: ["+682"]
            }, {
                name: "Costa Rica",
                alpha2: "CR",
                phoneCountryCode: "+506",
                phoneCountryCodes: ["+506"]
            }, {
                name: "Cote d'Ivoire",
                alpha2: "CI",
                phoneCountryCode: "+225",
                phoneCountryCodes: ["+225"]
            }, {
                name: "Croatia",
                alpha2: "HR",
                phoneCountryCode: "+385",
                phoneCountryCodes: ["+385"]
            }, {
                name: "Cuba",
                alpha2: "CU",
                phoneCountryCode: "+53",
                phoneCountryCodes: ["+53"]
            }, {
                name: "Curacao",
                alpha2: "CW",
                phoneCountryCode: "+599",
                phoneCountryCodes: ["+599"]
            }, {
                name: "Cyprus",
                alpha2: "CY",
                phoneCountryCode: "+357",
                phoneCountryCodes: ["+357"]
            }, {
                name: "Czech Republic",
                alpha2: "CZ",
                phoneCountryCode: "+420",
                phoneCountryCodes: ["+420"]
            }, {
                name: "Denmark",
                alpha2: "DK",
                phoneCountryCode: "+45",
                phoneCountryCodes: ["+45"]
            }, {
                name: "Diego Garcia",
                alpha2: "DG",
                phoneCountryCode: "+246",
                phoneCountryCodes: ["+246"]
            }, {
                name: "Djibouti",
                alpha2: "DJ",
                phoneCountryCode: "+253",
                phoneCountryCodes: ["+253"]
            }, {
                name: "Dominica",
                alpha2: "DM",
                phoneCountryCode: "+1 767",
                phoneCountryCodes: ["+1 767"]
            }, {
                name: "Dominican Republic",
                alpha2: "DO",
                phoneCountryCode: "+1 809",
                phoneCountryCodes: ["+1 809", "+1 829", "+1 849"]
            }, {
                name: "East Timor",
                alpha2: "TP",
                phoneCountryCode: "+670",
                phoneCountryCodes: ["+670"]
            }, {
                name: "Ecuador",
                alpha2: "EC",
                phoneCountryCode: "+593",
                phoneCountryCodes: ["+593"]
            }, {
                name: "Egypt",
                alpha2: "EG",
                phoneCountryCode: "+20",
                phoneCountryCodes: ["+20"]
            }, {
                name: "El Salvador",
                alpha2: "SV",
                phoneCountryCode: "+503",
                phoneCountryCodes: ["+503"]
            }, {
                name: "Equatorial Guinea",
                alpha2: "GQ",
                phoneCountryCode: "+240",
                phoneCountryCodes: ["+240"]
            }, {
                name: "Eritrea",
                alpha2: "ER",
                phoneCountryCode: "+291",
                phoneCountryCodes: ["+291"]
            }, {
                name: "Estonia",
                alpha2: "EE",
                phoneCountryCode: "+372",
                phoneCountryCodes: ["+372"]
            }, {
                name: "Ethiopia",
                alpha2: "ET",
                phoneCountryCode: "+251",
                phoneCountryCodes: ["+251"]
            }, {
                name: "Falkland Islands (Malvinas)",
                alpha2: "FK",
                phoneCountryCode: "+500",
                phoneCountryCodes: ["+500"]
            }, {
                name: "Faroe Islands",
                alpha2: "FO",
                phoneCountryCode: "+298",
                phoneCountryCodes: ["+298"]
            }, {
                name: "Fiji",
                alpha2: "FJ",
                phoneCountryCode: "+679",
                phoneCountryCodes: ["+679"]
            }, {
                name: "Finland",
                alpha2: "FI",
                phoneCountryCode: "+358",
                phoneCountryCodes: ["+358"]
            }, {
                name: "France",
                alpha2: "FR",
                phoneCountryCode: "+33",
                phoneCountryCodes: ["+33"]
            }, {
                name: "French Guiana",
                alpha2: "GF",
                phoneCountryCode: "+594",
                phoneCountryCodes: ["+594"]
            }, {
                name: "French Polynesia",
                alpha2: "PF",
                phoneCountryCode: "+689",
                phoneCountryCodes: ["+689"]
            }, {
                name: "French Southern Territories",
                alpha2: "TF",
                phoneCountryCode: "+262",
                phoneCountryCodes: ["+262"]
            }, {
                name: "Gabon",
                alpha2: "GA",
                phoneCountryCode: "+241",
                phoneCountryCodes: ["+241"]
            }, {
                name: "Gambia",
                alpha2: "GM",
                phoneCountryCode: "+220",
                phoneCountryCodes: ["+220"]
            }, {
                name: "Georgia",
                alpha2: "GE",
                phoneCountryCode: "+995",
                phoneCountryCodes: ["+995"]
            }, {
                name: "Germany",
                alpha2: "DE",
                phoneCountryCode: "+49",
                phoneCountryCodes: ["+49"]
            }, {
                name: "Ghana",
                alpha2: "GH",
                phoneCountryCode: "+233",
                phoneCountryCodes: ["+233"]
            }, {
                name: "Gibraltar",
                alpha2: "GI",
                phoneCountryCode: "+350",
                phoneCountryCodes: ["+350"]
            }, {
                name: "Greece",
                alpha2: "GR",
                phoneCountryCode: "+30",
                phoneCountryCodes: ["+30"]
            }, {
                name: "Greenland",
                alpha2: "GL",
                phoneCountryCode: "+299",
                phoneCountryCodes: ["+299"]
            }, {
                name: "Grenada",
                alpha2: "GD",
                phoneCountryCode: "+1 473",
                phoneCountryCodes: ["+1 473"]
            }, {
                name: "Guadeloupe",
                alpha2: "GP",
                phoneCountryCode: "+590",
                phoneCountryCodes: ["+590"]
            }, {
                name: "Guam",
                alpha2: "GU",
                phoneCountryCode: "+1 671",
                phoneCountryCodes: ["+1 671"]
            }, {
                name: "Guatemala",
                alpha2: "GT",
                phoneCountryCode: "+502",
                phoneCountryCodes: ["+502"]
            }, {
                name: "Guernsey",
                alpha2: "GG",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "Guinea",
                alpha2: "GN",
                phoneCountryCode: "+224",
                phoneCountryCodes: ["+224"]
            }, {
                name: "Guinea-Bissau",
                alpha2: "GW",
                phoneCountryCode: "+245",
                phoneCountryCodes: ["+245"]
            }, {
                name: "Guyana",
                alpha2: "GY",
                phoneCountryCode: "+592",
                phoneCountryCodes: ["+592"]
            }, {
                name: "Haiti",
                alpha2: "HT",
                phoneCountryCode: "+509",
                phoneCountryCodes: ["+509"]
            }, {
                name: "Heard Island and McDonald Islands",
                alpha2: "HM",
                phoneCountryCode: "+672",
                phoneCountryCodes: ["+672"]
            }, {
                name: "Holy See (Vatican City State)",
                alpha2: "VA",
                phoneCountryCode: "+39",
                phoneCountryCodes: ["+39"]
            }, {
                name: "Honduras",
                alpha2: "HN",
                phoneCountryCode: "+504",
                phoneCountryCodes: ["+504"]
            }, {
                name: "Hong Kong",
                alpha2: "HK",
                phoneCountryCode: "+852",
                phoneCountryCodes: ["+852"]
            }, {
                name: "Hungary",
                alpha2: "HU",
                phoneCountryCode: "+36",
                phoneCountryCodes: ["+36"]
            }, {
                name: "Iceland",
                alpha2: "IS",
                phoneCountryCode: "+354",
                phoneCountryCodes: ["+354"]
            }, {
                name: "India",
                alpha2: "IN",
                phoneCountryCode: "+91",
                phoneCountryCodes: ["+91"]
            }, {
                name: "Indonesia",
                alpha2: "ID",
                phoneCountryCode: "+62",
                phoneCountryCodes: ["+62"],
                localeForICU: "id",
                currencyCode: "idr"
            }, {
                name: "Iran, Islamic Republic of",
                alpha2: "IR",
                phoneCountryCode: "+98",
                phoneCountryCodes: ["+98"]
            }, {
                name: "Iraq",
                alpha2: "IQ",
                phoneCountryCode: "+964",
                phoneCountryCodes: ["+964"]
            }, {
                name: "Ireland",
                alpha2: "IE",
                phoneCountryCode: "+353",
                phoneCountryCodes: ["+353"]
            }, {
                name: "Isle of Man",
                alpha2: "IM",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "Israel",
                alpha2: "IL",
                phoneCountryCode: "+972",
                phoneCountryCodes: ["+972"]
            }, {
                name: "Italy",
                alpha2: "IT",
                phoneCountryCode: "+39",
                phoneCountryCodes: ["+39"]
            }, {
                name: "Jamaica",
                alpha2: "JM",
                phoneCountryCode: "+1 876",
                phoneCountryCodes: ["+1 876"]
            }, {
                name: "Japan",
                alpha2: "JP",
                phoneCountryCode: "+81",
                phoneCountryCodes: ["+81"],
                localeForICU: "jp",
                currencyCode: "jpy"
            }, {
                name: "Jersey",
                alpha2: "JE",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "Jordan",
                alpha2: "JO",
                phoneCountryCode: "+962",
                phoneCountryCodes: ["+962"]
            }, {
                name: "Kazakhstan",
                alpha2: "KZ",
                phoneCountryCode: "+7",
                phoneCountryCodes: ["+7"]
            }, {
                name: "Kenya",
                alpha2: "KE",
                phoneCountryCode: "+254",
                phoneCountryCodes: ["+254"]
            }, {
                name: "Kiribati",
                alpha2: "KI",
                phoneCountryCode: "+686",
                phoneCountryCodes: ["+686"]
            }, {
                name: "Kosovo",
                alpha2: "XK",
                phoneCountryCode: "+383",
                phoneCountryCodes: ["+383"]
            }, {
                name: "Korea, Democratic People's Republic of",
                alpha2: "KP",
                phoneCountryCode: "+850",
                phoneCountryCodes: ["+850"]
            }, {
                name: "Korea, Republic of",
                alpha2: "KR",
                phoneCountryCode: "+82",
                phoneCountryCodes: ["+82"]
            }, {
                name: "Kuwait",
                alpha2: "KW",
                phoneCountryCode: "+965",
                phoneCountryCodes: ["+965"]
            }, {
                name: "Kyrgyzstan",
                alpha2: "KG",
                phoneCountryCode: "+996",
                phoneCountryCodes: ["+996"]
            }, {
                name: "Lao People's Democratic Republic",
                alpha2: "LA",
                phoneCountryCode: "+856",
                phoneCountryCodes: ["+856"]
            }, {
                name: "Latvia",
                alpha2: "LV",
                phoneCountryCode: "+371",
                phoneCountryCodes: ["+371"]
            }, {
                name: "Lebanon",
                alpha2: "LB",
                phoneCountryCode: "+961",
                phoneCountryCodes: ["+961"]
            }, {
                name: "Lesotho",
                alpha2: "LS",
                phoneCountryCode: "+266",
                phoneCountryCodes: ["+266"]
            }, {
                name: "Liberia",
                alpha2: "LR",
                phoneCountryCode: "+231",
                phoneCountryCodes: ["+231"]
            }, {
                name: "Libya",
                alpha2: "LY",
                phoneCountryCode: "+218",
                phoneCountryCodes: ["+218"]
            }, {
                name: "Liechtenstein",
                alpha2: "LI",
                phoneCountryCode: "+423",
                phoneCountryCodes: ["+423"]
            }, {
                name: "Lithuania",
                alpha2: "LT",
                phoneCountryCode: "+370",
                phoneCountryCodes: ["+370"]
            }, {
                name: "Luxembourg",
                alpha2: "LU",
                phoneCountryCode: "+352",
                phoneCountryCodes: ["+352"]
            }, {
                name: "Macao",
                alpha2: "MO",
                phoneCountryCode: "+853",
                phoneCountryCodes: ["+853"]
            }, {
                name: "Macedonia, Republic of",
                alpha2: "MK",
                phoneCountryCode: "+389",
                phoneCountryCodes: ["+389"]
            }, {
                name: "Madagascar",
                alpha2: "MG",
                phoneCountryCode: "+261",
                phoneCountryCodes: ["+261"]
            }, {
                name: "Malawi",
                alpha2: "MW",
                phoneCountryCode: "+265",
                phoneCountryCodes: ["+265"]
            }, {
                name: "Malaysia",
                alpha2: "MY",
                phoneCountryCode: "+60",
                phoneCountryCodes: ["+60"],
                localeForICU: "ms",
                currencyCode: "myr"
            }, {
                name: "Maldives",
                alpha2: "MV",
                phoneCountryCode: "+960",
                phoneCountryCodes: ["+960"]
            }, {
                name: "Mali",
                alpha2: "ML",
                phoneCountryCode: "+223",
                phoneCountryCodes: ["+223"]
            }, {
                name: "Malta",
                alpha2: "MT",
                phoneCountryCode: "+356",
                phoneCountryCodes: ["+356"]
            }, {
                name: "Marshall Islands",
                alpha2: "MH",
                phoneCountryCode: "+692",
                phoneCountryCodes: ["+692"]
            }, {
                name: "Martinique",
                alpha2: "MQ",
                phoneCountryCode: "+596",
                phoneCountryCodes: ["+596"]
            }, {
                name: "Mauritania",
                alpha2: "MR",
                phoneCountryCode: "+222",
                phoneCountryCodes: ["+222"]
            }, {
                name: "Mauritius",
                alpha2: "MU",
                phoneCountryCode: "+230",
                phoneCountryCodes: ["+230"]
            }, {
                name: "Mayotte",
                alpha2: "YT",
                phoneCountryCode: "+262",
                phoneCountryCodes: ["+262"]
            }, {
                name: "Mexico",
                alpha2: "MX",
                phoneCountryCode: "+52",
                phoneCountryCodes: ["+52"]
            }, {
                name: "Micronesia, Federated States of",
                alpha2: "FM",
                phoneCountryCode: "+691",
                phoneCountryCodes: ["+691"]
            }, {
                name: "Midway Island",
                alpha2: "MI",
                phoneCountryCode: "+1 808",
                phoneCountryCodes: ["+1 808"]
            }, {
                name: "Moldova, Republic of",
                alpha2: "MD",
                phoneCountryCode: "+373",
                phoneCountryCodes: ["+373"]
            }, {
                name: "Monaco",
                alpha2: "MC",
                phoneCountryCode: "+377",
                phoneCountryCodes: ["+377"]
            }, {
                name: "Mongolia",
                alpha2: "MN",
                phoneCountryCode: "+976",
                phoneCountryCodes: ["+976"]
            }, {
                name: "Montenegro",
                alpha2: "ME",
                phoneCountryCode: "+382",
                phoneCountryCodes: ["+382"]
            }, {
                name: "Montserrat",
                alpha2: "MS",
                phoneCountryCode: "+1664",
                phoneCountryCodes: ["+1664"]
            }, {
                name: "Morocco",
                alpha2: "MA",
                phoneCountryCode: "+212",
                phoneCountryCodes: ["+212"]
            }, {
                name: "Mozambique",
                alpha2: "MZ",
                phoneCountryCode: "+258",
                phoneCountryCodes: ["+258"]
            }, {
                name: "Myanmar",
                alpha2: "MM",
                phoneCountryCode: "+95",
                phoneCountryCodes: ["+95"]
            }, {
                name: "Namibia",
                alpha2: "NA",
                phoneCountryCode: "+264",
                phoneCountryCodes: ["+264"]
            }, {
                name: "Nauru",
                alpha2: "NR",
                phoneCountryCode: "+674",
                phoneCountryCodes: ["+674"]
            }, {
                name: "Nepal",
                alpha2: "NP",
                phoneCountryCode: "+977",
                phoneCountryCodes: ["+977"]
            }, {
                name: "Netherlands",
                alpha2: "NL",
                phoneCountryCode: "+31",
                phoneCountryCodes: ["+31"]
            }, {
                name: "Netherlands Antilles",
                alpha2: "AN",
                phoneCountryCode: "+599",
                phoneCountryCodes: ["+599"]
            }, {
                name: "New Caledonia",
                alpha2: "NC",
                phoneCountryCode: "+687",
                phoneCountryCodes: ["+687"]
            }, {
                name: "New Zealand",
                alpha2: "NZ",
                phoneCountryCode: "+64",
                phoneCountryCodes: ["+64"]
            }, {
                name: "Nicaragua",
                alpha2: "NI",
                phoneCountryCode: "+505",
                phoneCountryCodes: ["+505"]
            }, {
                name: "Niger",
                alpha2: "NE",
                phoneCountryCode: "+227",
                phoneCountryCodes: ["+227"]
            }, {
                name: "Nigeria",
                alpha2: "NG",
                phoneCountryCode: "+234",
                phoneCountryCodes: ["+234"]
            }, {
                name: "Niue",
                alpha2: "NU",
                phoneCountryCode: "+683",
                phoneCountryCodes: ["+683"]
            }, {
                name: "Norfolk Island",
                alpha2: "NF",
                phoneCountryCode: "+672",
                phoneCountryCodes: ["+672"]
            }, {
                name: "Northern Mariana Islands",
                alpha2: "MP",
                phoneCountryCode: "+1 670",
                phoneCountryCodes: ["+1 670"]
            }, {
                name: "Norway",
                alpha2: "NO",
                phoneCountryCode: "+47",
                phoneCountryCodes: ["+47"]
            }, {
                name: "Oman",
                alpha2: "OM",
                phoneCountryCode: "+968",
                phoneCountryCodes: ["+968"]
            }, {
                name: "Pakistan",
                alpha2: "PK",
                phoneCountryCode: "+92",
                phoneCountryCodes: ["+92"]
            }, {
                name: "Palau",
                alpha2: "PW",
                phoneCountryCode: "+680",
                phoneCountryCodes: ["+680"]
            }, {
                name: "Palestine, State of",
                alpha2: "PS",
                phoneCountryCode: "+970",
                phoneCountryCodes: ["+970"]
            }, {
                name: "Panama",
                alpha2: "PA",
                phoneCountryCode: "+507",
                phoneCountryCodes: ["+507"]
            }, {
                name: "Papua New Guinea",
                alpha2: "PG",
                phoneCountryCode: "+675",
                phoneCountryCodes: ["+675"]
            }, {
                name: "Paraguay",
                alpha2: "PY",
                phoneCountryCode: "+595",
                phoneCountryCodes: ["+595"]
            }, {
                name: "Peru",
                alpha2: "PE",
                phoneCountryCode: "+51",
                phoneCountryCodes: ["+51"],
                localeForICU: "es-PE",
                currencyCode: "pen"
            }, {
                name: "Philippines",
                alpha2: "PH",
                phoneCountryCode: "+63",
                phoneCountryCodes: ["+63"],
                localeForICU: "en-PH",
                currencyCode: "php"
            }, {
                name: "Pitcairn",
                alpha2: "PN",
                phoneCountryCode: "+64",
                phoneCountryCodes: ["+64"]
            }, {
                name: "Poland",
                alpha2: "PL",
                phoneCountryCode: "+48",
                phoneCountryCodes: ["+48"]
            }, {
                name: "Portugal",
                alpha2: "PT",
                phoneCountryCode: "+351",
                phoneCountryCodes: ["+351"]
            }, {
                name: "Puerto Rico",
                alpha2: "PR",
                phoneCountryCode: "+1 787",
                phoneCountryCodes: ["+1 787"]
            }, {
                name: "Qatar",
                alpha2: "QA",
                phoneCountryCode: "+974",
                phoneCountryCodes: ["+974"]
            }, {
                name: "Reunion",
                alpha2: "RE",
                phoneCountryCode: "+262",
                phoneCountryCodes: ["+262"]
            }, {
                name: "Romania",
                alpha2: "RO",
                phoneCountryCode: "+40",
                phoneCountryCodes: ["+40"]
            }, {
                name: "Russian Federation",
                alpha2: "RU",
                phoneCountryCode: "+7",
                phoneCountryCodes: ["+7"]
            }, {
                name: "Rwanda",
                alpha2: "RW",
                phoneCountryCode: "+250",
                phoneCountryCodes: ["+250"]
            }, {
                name: "Saint Barth\xe9lemy",
                alpha2: "BL",
                phoneCountryCode: "+590",
                phoneCountryCodes: ["+590"]
            }, {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                alpha2: "SH",
                phoneCountryCode: "+290",
                phoneCountryCodes: ["+290"]
            }, {
                name: "Saint Kitts and Nevis",
                alpha2: "KN",
                phoneCountryCode: "+1 869",
                phoneCountryCodes: ["+1 869"]
            }, {
                name: "Saint Lucia",
                alpha2: "LC",
                phoneCountryCode: "+1 758",
                phoneCountryCodes: ["+1 758"]
            }, {
                name: "Saint Martin (French part)",
                alpha2: "MF",
                phoneCountryCode: "+590",
                phoneCountryCodes: ["+590"]
            }, {
                name: "Saint Pierre and Miquelon",
                alpha2: "PM",
                phoneCountryCode: "+508",
                phoneCountryCodes: ["+508"]
            }, {
                name: "Saint Vincent and the Grenadines",
                alpha2: "VC",
                phoneCountryCode: "+1 784",
                phoneCountryCodes: ["+1 784"]
            }, {
                name: "Samoa",
                alpha2: "WS",
                phoneCountryCode: "+685",
                phoneCountryCodes: ["+685"]
            }, {
                name: "San Marino",
                alpha2: "SM",
                phoneCountryCode: "+378",
                phoneCountryCodes: ["+378"]
            }, {
                name: "Sao Tome and Principe",
                alpha2: "ST",
                phoneCountryCode: "+239",
                phoneCountryCodes: ["+239"]
            }, {
                name: "Saudi Arabia",
                alpha2: "SA",
                phoneCountryCode: "+966",
                phoneCountryCodes: ["+966"]
            }, {
                name: "Senegal",
                alpha2: "SN",
                phoneCountryCode: "+221",
                phoneCountryCodes: ["+221"]
            }, {
                name: "Serbia",
                alpha2: "RS",
                phoneCountryCode: "+381",
                phoneCountryCodes: ["+381"]
            }, {
                name: "Seychelles",
                alpha2: "SC",
                phoneCountryCode: "+248",
                phoneCountryCodes: ["+248"]
            }, {
                name: "Sierra Leone",
                alpha2: "SL",
                phoneCountryCode: "+232",
                phoneCountryCodes: ["+232"]
            }, {
                name: "Singapore",
                alpha2: "SG",
                phoneCountryCode: "+65",
                phoneCountryCodes: ["+65"]
            }, {
                name: "Sint Maarten (Dutch part)",
                alpha2: "SX",
                phoneCountryCode: "+1 721",
                phoneCountryCodes: ["+1 721"]
            }, {
                name: "Slovakia",
                alpha2: "SK",
                phoneCountryCode: "+421",
                phoneCountryCodes: ["+421"]
            }, {
                name: "Slovenia",
                alpha2: "SI",
                phoneCountryCode: "+386",
                phoneCountryCodes: ["+386"]
            }, {
                name: "Solomon Islands",
                alpha2: "SB",
                phoneCountryCode: "+677",
                phoneCountryCodes: ["+677"]
            }, {
                name: "Somalia",
                alpha2: "SO",
                phoneCountryCode: "+252",
                phoneCountryCodes: ["+252"]
            }, {
                name: "South Africa",
                alpha2: "ZA",
                phoneCountryCode: "+27",
                phoneCountryCodes: ["+27"]
            }, {
                name: "South Georgia and the South Sandwich Islands",
                alpha2: "GS",
                phoneCountryCode: "+500",
                phoneCountryCodes: ["+500"]
            }, {
                name: "South Sudan",
                alpha2: "SS",
                phoneCountryCode: "+211",
                phoneCountryCodes: ["+211"]
            }, {
                name: "Spain",
                alpha2: "ES",
                phoneCountryCode: "+34",
                phoneCountryCodes: ["+34"]
            }, {
                name: "Sri Lanka",
                alpha2: "LK",
                phoneCountryCode: "+94",
                phoneCountryCodes: ["+94"]
            }, {
                name: "Sudan",
                alpha2: "SD",
                phoneCountryCode: "+249",
                phoneCountryCodes: ["+249"]
            }, {
                name: "Suriname",
                alpha2: "SR",
                phoneCountryCode: "+597",
                phoneCountryCodes: ["+597"]
            }, {
                name: "Svalbard and Jan Mayen",
                alpha2: "SJ",
                phoneCountryCode: "+47",
                phoneCountryCodes: ["+47"]
            }, {
                name: "Swaziland",
                alpha2: "SZ",
                phoneCountryCode: "+268",
                phoneCountryCodes: ["+268"]
            }, {
                name: "Sweden",
                alpha2: "SE",
                phoneCountryCode: "+46",
                phoneCountryCodes: ["+46"]
            }, {
                name: "Switzerland",
                alpha2: "CH",
                phoneCountryCode: "+41",
                phoneCountryCodes: ["+41"]
            }, {
                name: "Syrian Arab Republic",
                alpha2: "SY",
                phoneCountryCode: "+963",
                phoneCountryCodes: ["+963"]
            }, {
                name: "Taiwan",
                alpha2: "TW",
                phoneCountryCode: "+886",
                phoneCountryCodes: ["+886"]
            }, {
                name: "Tajikistan",
                alpha2: "TJ",
                phoneCountryCode: "+992",
                phoneCountryCodes: ["+992"]
            }, {
                name: "Tanzania, United Republic of",
                alpha2: "TZ",
                phoneCountryCode: "+255",
                phoneCountryCodes: ["+255"]
            }, {
                name: "Thailand",
                alpha2: "TH",
                phoneCountryCode: "+66",
                phoneCountryCodes: ["+66"],
                localeForICU: "th",
                currencyCode: "thb"
            }, {
                name: "Timor-Leste",
                alpha2: "TL",
                phoneCountryCode: "+670",
                phoneCountryCodes: ["+670"]
            }, {
                name: "Togo",
                alpha2: "TG",
                phoneCountryCode: "+228",
                phoneCountryCodes: ["+228"]
            }, {
                name: "Tokelau",
                alpha2: "TK",
                phoneCountryCode: "+690",
                phoneCountryCodes: ["+690"]
            }, {
                name: "Tonga",
                alpha2: "TO",
                phoneCountryCode: "+676",
                phoneCountryCodes: ["+676"]
            }, {
                name: "Trinidad and Tobago",
                alpha2: "TT",
                phoneCountryCode: "+1 868",
                phoneCountryCodes: ["+1 868"]
            }, {
                name: "Tunisia",
                alpha2: "TN",
                phoneCountryCode: "+216",
                phoneCountryCodes: ["+216"]
            }, {
                name: "Turkey",
                alpha2: "TR",
                phoneCountryCode: "+90",
                phoneCountryCodes: ["+90"]
            }, {
                name: "Turkmenistan",
                alpha2: "TM",
                phoneCountryCode: "+993",
                phoneCountryCodes: ["+993"]
            }, {
                name: "Turks and Caicos Islands",
                alpha2: "TC",
                phoneCountryCode: "+1 649",
                phoneCountryCodes: ["+1 649"]
            }, {
                name: "Tuvalu",
                alpha2: "TV",
                phoneCountryCode: "+688",
                phoneCountryCodes: ["+688"]
            }, {
                name: "Uganda",
                alpha2: "UG",
                phoneCountryCode: "+256",
                phoneCountryCodes: ["+256"]
            }, {
                name: "Ukraine",
                alpha2: "UA",
                phoneCountryCode: "+380",
                phoneCountryCodes: ["+380"]
            }, {
                name: "United Arab Emirates",
                alpha2: "AE",
                phoneCountryCode: "+971",
                phoneCountryCodes: ["+971"]
            }, {
                name: "United Kingdom",
                alpha2: "GB",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "United States",
                alpha2: "US",
                phoneCountryCode: "+1",
                phoneCountryCodes: ["+1"]
            }, {
                name: "United States Minor Outlying Islands",
                alpha2: "UM",
                phoneCountryCode: "+1",
                phoneCountryCodes: ["+1"]
            }, {
                name: "Uruguay",
                alpha2: "UY",
                phoneCountryCode: "+598",
                phoneCountryCodes: ["+598"]
            }, {
                name: "Uzbekistan",
                alpha2: "UZ",
                phoneCountryCode: "+998",
                phoneCountryCodes: ["+998"]
            }, {
                name: "Vanuatu",
                alpha2: "VU",
                phoneCountryCode: "+678",
                phoneCountryCodes: ["+678"]
            }, {
                name: "Venezuela, Bolivarian Republic of",
                alpha2: "VE",
                phoneCountryCode: "+58",
                phoneCountryCodes: ["+58"]
            }, {
                name: "Vietnam",
                alpha2: "VN",
                phoneCountryCode: "+84",
                phoneCountryCodes: ["+84"],
                localeForICU: "vi",
                currencyCode: "vnd"
            }, {
                name: "Virgin Islands, British",
                alpha2: "VG",
                phoneCountryCode: "+1 284",
                phoneCountryCodes: ["+1 284"]
            }, {
                name: "Virgin Islands, U.S.",
                alpha2: "VI",
                phoneCountryCode: "+1 340",
                phoneCountryCodes: ["+1 340"]
            }, {
                name: "Wallis and Futuna",
                alpha2: "WF",
                phoneCountryCode: "+681",
                phoneCountryCodes: ["+681"]
            }, {
                name: "Western Sahara",
                alpha2: "EH",
                phoneCountryCode: "+212",
                phoneCountryCodes: ["+212"]
            }, {
                name: "Yemen",
                alpha2: "YE",
                phoneCountryCode: "+967",
                phoneCountryCodes: ["+967"]
            }, {
                name: "Zambia",
                alpha2: "ZM",
                phoneCountryCode: "+260",
                phoneCountryCodes: ["+260"]
            }, {
                name: "Zimbabwe",
                alpha2: "ZW",
                phoneCountryCode: "+263",
                phoneCountryCodes: ["+263"]
            }]
        },
        30945: function(e, t, n) {
            "use strict";
            var a;
            n.r(t), n.d(t, {
                ConsoleCommands: function() {
                    return a
                }
            }), (a || (a = {})).CONNECT_VOICE = "connect_voice"
        },
        363747: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                ConsoleHandoffType: function() {
                    return a
                }
            }), (l = a || (a = {})).TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL", l.CREATE_NEW_CALL = "CREATE_NEW_CALL"
        }
    }
]);
//# sourceMappingURL=2d9b39bc81bf3619dc27.js.map