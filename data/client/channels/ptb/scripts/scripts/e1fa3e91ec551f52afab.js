(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12925"], {
        987317: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("913144"),
                l = n("700507"),
                i = n("76393"),
                s = n("383294"),
                u = n("393414"),
                r = n("742171"),
                d = n("42203"),
                o = n("247013"),
                E = n("42887"),
                c = n("18494"),
                f = n("162771"),
                _ = n("697218"),
                N = n("404008"),
                T = n("450481"),
                g = n("49111"),
                C = {
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
                            guildId: t === g.ME ? null : t,
                            channelId: n,
                            messageId: l,
                            jumpType: i,
                            preserveDrawerState: s,
                            source: u
                        })
                    },
                    selectPrivateChannel(e) {
                        (0, u.transitionTo)(g.Routes.CHANNEL(g.ME, e))
                    },
                    selectVoiceChannel(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            l = d.default.getChannel(e),
                            i = null == l ? void 0 : l.getGuildId();
                        if ((null == l ? void 0 : l.isGuildVocal()) && (null == l ? void 0 : l.isNSFW()) && (!(null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !o.default.didAgree(i))) {
                            (0, u.transitionTo)(g.Routes.CHANNEL(i, e));
                            return
                        }
                        E.default.isSupported() && (null != e && E.default.getMediaEngine().interact(), (0, T.selectVoiceChannelAdditional)(e, i, n, a))
                    },
                    disconnect() {
                        let e = i.default.getRemoteSessionId();
                        if (null != e && l.remoteDisconnect(e), (0, r.isVoicePanelEnabled)()) this.selectVoiceChannel(null);
                        else {
                            let e = d.default.getChannel(c.default.getChannelId()),
                                t = c.default.getChannelId() === c.default.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
                            if (this.selectVoiceChannel(null), s.close(g.PopoutWindowKeys.CHANNEL_CALL_POPOUT), t) {
                                let e = f.default.getGuildId();
                                null != e && (0, u.transitionTo)((0, N.previousTextChannelRouteForGuild)(e))
                            }
                        }
                    }
                }
        },
        450481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                selectVoiceChannelAdditional: function() {
                    return T
                }
            });
            var a = n("551042"),
                l = n("913144"),
                i = n("157186"),
                s = n("619395"),
                u = n("819450"),
                r = n("439141"),
                d = n("172538"),
                o = n("42203"),
                E = n("305961"),
                c = n("88093"),
                f = n("18494"),
                _ = n("800762"),
                N = n("404008");
            let T = function(e, t) {
                let T = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    C = o.default.getChannel(e),
                    h = _.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
                    S = null != C ? c.default.getCheck(C.guild_id) : null,
                    I = null != t && (0, i.shouldShowMembershipVerificationGate)(t);
                if (!I) {
                    if (null == S || S.canChat || (0, s.canLurkerListen)(C)) {
                        if (null != C && !h) {
                            let e = (0, N.isChannelFull)(C, _.default, E.default);
                            if (e && C.isGuildStageVoice() && (0, u.getStageHasMedia)(C.id)) {
                                (0, a.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("374278").then(n.bind(n, "374278"));
                                    return t => e({
                                        channel: C,
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
                        T && (0, r.applyInitialVideoBackgroundOption)(), (0, d.default)(function() {
                            l.default.dispatch({
                                type: "VOICE_CHANNEL_SELECT",
                                guildId: t,
                                channelId: e,
                                currentVoiceChannelId: f.default.getVoiceChannelId(),
                                video: T,
                                stream: g
                            })
                        }, e, g, T)
                    }
                }
            }
        },
        899633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getIsSpeaking: function() {
                    return o
                }
            });
            var a = n("498225"),
                l = n("235004"),
                i = n("18494"),
                s = n("280168"),
                u = n("800762");

            function r(e, t, n) {
                return e || t || n
            }

            function d(e) {
                var t, n, r;
                let {
                    userId: d,
                    checkSoundSharing: o = !1,
                    checkSoundboardSounds: E = !0,
                    checkIsMuted: c = !1,
                    context: f
                } = e, _ = (0, a.useStateFromStores)([u.default, i.default], () => {
                    let e = i.default.getVoiceChannelId();
                    return null != e ? u.default.getVoiceStateForChannel(e, d) : null
                }), N = c && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)), T = (0, a.useStateFromStores)([s.default], () => s.default.isSpeaking(d, f) && !N), g = (0, a.useStateFromStores)([s.default], () => s.default.isSoundSharing(d) && o), C = (0, a.useStateFromStores)([l.default], () => l.default.isUserPlayingSounds(d) && E);
                return t = T, n = C, r = g, t || n || r
            }

            function o(e) {
                var t, n, a;
                let {
                    userId: r,
                    checkSoundSharing: d = !1,
                    checkSoundboardSounds: o = !0,
                    checkIsMuted: E = !1,
                    context: c
                } = e, f = i.default.getVoiceChannelId(), _ = null != f ? u.default.getVoiceStateForChannel(f, r) : null, N = E && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)), T = s.default.isSpeaking(r, c) && !N, g = s.default.isSoundSharing(r) && d, C = l.default.isUserPlayingSounds(r) && o;
                return t = T, n = C, a = g, t || n || a
            }
        },
        390933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("126617"),
                l = n("990746"),
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
            var a = n("427964"),
                l = n.n(a),
                i = n("638800");
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
                    return O
                }
            });
            var a, l, i = n("427964"),
                s = n("810479"),
                u = n("899633"),
                r = n("191225"),
                d = n("374014"),
                o = n("373469"),
                E = n("271938"),
                c = n("950104"),
                f = n("42203"),
                _ = n("42887"),
                N = n("280168"),
                T = n("697218"),
                g = n("555035"),
                C = n("800762"),
                h = n("387111"),
                S = n("246846"),
                I = n("99795"),
                A = n("49111"),
                p = n("860604");
            let M = "__EMBEDDED_ACTIVITIES__";

            function R(e) {
                switch (e.type) {
                    case I.ParticipantTypes.ACTIVITY:
                        return "\x00".concat(e.sortKey);
                    case I.ParticipantTypes.HIDDEN_STREAM:
                    case I.ParticipantTypes.STREAM:
                        return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, S.default)(e.userNick, e.user), "\x02");
                    case I.ParticipantTypes.USER:
                        var t, n;
                        let a = "\x04";
                        return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? a = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (a = "\x03"), "".concat(a).concat((0, S.default)(e.userNick, e.user))
                }
            }(a = l || (l = {})).VIDEO = "VIDEO", a.STREAM = "STREAM", a.FILTERED = "FILTERED", a.SPEAKING = "SPEAKING", a.ACTIVITY = "ACTIVITY";
            class O {
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
                    let e = f.default.getChannel(this.channelId);
                    if (null == e || e.type === A.ChannelTypes.GUILD_TEXT) return !1;
                    if (this.call = c.default.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
                    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(C.default.getVoiceStatesForChannel(e.id)) : e.recipients);
                    return t.add(E.default.getId()), o.default.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
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
                    return this.updateParticipant(M)
                }
                hasEmbeddedActivity() {
                    let e = this.participants[M];
                    return null != e && e.length > 0
                }
                updateParticipant(e) {
                    let t = this.participants[e],
                        n = e === M ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
                    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                        this.participantByIndex.delete(e.id)
                    }), n.forEach(e => {
                        this.participantByIndex.set(e.id, e)
                    }), this.participants[e] = n, !0)
                }
                updateParticipantSpeaking(e) {
                    var t, n;
                    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
                        if (n.type === I.ParticipantTypes.USER) {
                            let t = (0, u.getIsSpeaking)({
                                userId: e,
                                checkIsMuted: !0
                            });
                            return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
                                ...n,
                                speaking: t,
                                lastSpoke: this.lastSpoke[e],
                                soundsharing: N.default.isSoundSharing(e)
                            }), !0
                        }
                        return t
                    }, !1)) && void 0 !== n && n
                }
                updateParticipantQuality(e, t, n) {
                    var a, l;
                    return null !== (l = null === (a = this.participants[e]) || void 0 === a ? void 0 : a.reduce((e, a) => a.type === I.ParticipantTypes.STREAM ? (this.participantByIndex.set(a.id, {
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
                            type: I.ParticipantTypes.ACTIVITY,
                            id: e.application_id,
                            activityType: e.type,
                            activityUrl: e.url,
                            participants: new Set(e.connections.keys()),
                            canJoin: (null == e ? void 0 : null === (n = e.secrets) || void 0 === n ? void 0 : n.join) != null,
                            joinSecret: null == e ? void 0 : null === (a = e.secrets) || void 0 === a ? void 0 : a.join,
                            guildId: null !== (i = null === (l = f.default.getChannel(this.channelId)) || void 0 === l ? void 0 : l.getGuildId()) && void 0 !== i ? i : null,
                            sortKey: t.toString()
                        }
                    })
                }
                _getParticipantsForUser(e) {
                    var t, n, a, l, i, s;
                    let r, c;
                    let S = [],
                        A = T.default.getUser(e);
                    if (null == A) return S;
                    let M = C.default.getVoiceStateForChannel(this.channelId, e),
                        R = C.default.getVoicePlatformForChannel(this.channelId, e),
                        O = f.default.getChannel(this.channelId),
                        m = null !== (a = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== a && a;
                    (null != M || m) && (r = {
                        type: I.ParticipantTypes.USER,
                        ...g.default.getUserStreamData(e, null == O ? void 0 : O.getGuildId()),
                        user: A,
                        id: A.id,
                        voiceState: M,
                        voicePlatform: R,
                        speaking: (0, u.getIsSpeaking)({
                            userId: e,
                            checkIsMuted: !0
                        }),
                        lastSpoke: null !== (l = this.lastSpoke[e]) && void 0 !== l ? l : 0,
                        soundsharing: N.default.isSoundSharing(e),
                        ringing: m,
                        userNick: h.default.getName(null == O ? void 0 : O.getGuildId(), this.channelId, A),
                        localVideoDisabled: _.default.isLocalVideoDisabled(A.id)
                    }, S.push(r));
                    let U = null !== (i = o.default.getStreamForUser(e, null == O ? void 0 : O.getGuildId())) && void 0 !== i ? i : o.default.getActiveStreamForUser(e, null == O ? void 0 : O.getGuildId());
                    if (null != U && U.channelId === this.channelId) {
                        let t = (0, d.encodeStreamKey)(U),
                            n = this.getParticipant(t),
                            a = U.ownerId === E.default.getId() && o.default.isSelfStreamHidden(this.channelId),
                            l = (null == n ? void 0 : n.type) === I.ParticipantTypes.STREAM ? {
                                maxResolution: null != n.maxResolution ? {
                                    ...n.maxResolution
                                } : void 0,
                                maxFrameRate: n.maxFrameRate
                            } : null;
                        c = {
                            ...g.default.getUserStreamData(e, null == O ? void 0 : O.getGuildId(), p.MediaEngineContextTypes.STREAM),
                            ...l,
                            type: a ? I.ParticipantTypes.HIDDEN_STREAM : I.ParticipantTypes.STREAM,
                            id: t,
                            userVideo: null !== (s = null == M ? void 0 : M.selfVideo) && void 0 !== s && s,
                            user: A,
                            userNick: h.default.getName(null == O ? void 0 : O.getGuildId(), this.channelId, A),
                            stream: U
                        }, S.push(c)
                    }
                    return S
                }
                constructor(e) {
                    this.participants = {}, this.lastSpoke = {}, this.participantByIndex = new s.default(e => {
                        var t;
                        let n = [];
                        return e.type === I.ParticipantTypes.USER && e.speaking && n.push(l.SPEAKING), e.type === I.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push(l.VIDEO), !e.localVideoDisabled && n.push(l.FILTERED)) : (0, I.isStreamParticipant)(e) && (n.push(l.STREAM), e.type !== I.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push(l.FILTERED)), e.type === I.ParticipantTypes.ACTIVITY && n.push(l.ACTIVITY), n
                    }, R), this.channelId = e
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
            var a = n("161179"),
                l = n.n(a),
                i = n("427964"),
                s = n.n(i),
                u = n("498225"),
                r = n("913144"),
                d = n("191225"),
                o = n("605250"),
                E = n("76393"),
                c = n("374014"),
                f = n("373469"),
                _ = n("271938"),
                N = n("950104"),
                T = n("42203"),
                g = n("18494"),
                C = n("280168"),
                h = n("697218"),
                S = n("555035"),
                I = n("800762"),
                A = n("949719"),
                p = n("99795"),
                M = n("49111");
            let R = new o.default("ChannelRTCStore"),
                O = Object.freeze([]),
                m = [],
                U = {},
                v = {},
                L = {},
                D = {},
                y = {},
                P = {},
                G = {},
                H = {},
                F = {},
                Y = {};

            function V(e) {
                let t = U[e];
                return null == t && (t = new A.default(e), U[e] = t), t
            }

            function k(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                return t.reduce((t, n) => {
                    let a = V(n);
                    return e(a) ? (function(e) {
                        let t = V(e);
                        if (0 === t.size()) return;
                        let n = ee(e) || W(t) ? M.ChannelModes.VIDEO : M.ChannelModes.VOICE;
                        n === M.ChannelModes.VOICE ? (delete D[e], delete y[e]) : D[e] = n
                    }(n), function(e) {
                        let t = _.default.getId(),
                            n = V(e);
                        if (0 === n.size() || g.default.getVoiceChannelId() !== e) {
                            K(e, null);
                            return
                        }
                        let a = p.ParticipantSelectionTypes.NONE,
                            i = n.toArray(A.ChannelRTCParticipantsIndexes.STREAM).find(e => e.type === p.ParticipantTypes.STREAM && f.default.getActiveStreamForStreamKey(e.id));
                        if (null != i) l(i.type === p.ParticipantTypes.STREAM, "Impossible condition"), a = i.id;
                        else if (1 === n.size()) a = t;
                        else if (1 === n.size(A.ChannelRTCParticipantsIndexes.VIDEO)) {
                            let [e] = n.toArray(A.ChannelRTCParticipantsIndexes.VIDEO);
                            a = e.id
                        } else {
                            var s;
                            let e = n.toArray().find(e => e.type === p.ParticipantTypes.USER && e.id !== t && !e.ringing);
                            a = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t
                        }
                        let [u] = w(e);
                        if (u !== p.ParticipantSelectionTypes.AUTO && u !== p.ParticipantSelectionTypes.NONE) {
                            let e = n.getParticipant(u);
                            (null == e || e.type === p.ParticipantTypes.STREAM && null == f.default.getActiveStreamForStreamKey(e.id)) && (u = p.ParticipantSelectionTypes.NONE)
                        }
                        K(e, [u, a])
                    }(n), !0) : t
                }, !1)
            }

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                return k(t => t.updateParticipant(e), t)
            }

            function w(e) {
                var t;
                let n = T.default.getChannel(e),
                    a = (null == n ? void 0 : n.isDM()) ? p.ParticipantSelectionTypes.AUTO : p.ParticipantSelectionTypes.NONE;
                return null !== (t = v[e]) && void 0 !== t ? t : [a, p.ParticipantSelectionTypes.NONE]
            }

            function x(e) {
                let t = v[e];
                if (null == t) return !1;
                let [n] = v[e];
                return n !== p.ParticipantSelectionTypes.NONE
            }

            function B(e) {
                null == L[e] && (L[e] = {
                    gridDurationMs: 0,
                    focusDurationMs: 0,
                    toggleCount: 0,
                    lastUpdate: 0
                });
                let t = L[e],
                    n = performance.now(),
                    a = x(e);
                if (t.lastUpdate > 0) {
                    let e = n - t.lastUpdate;
                    t[a ? "focusDurationMs" : "gridDurationMs"] += e
                }
                t.lastUpdate = n
            }

            function K(e, t) {
                B(e);
                let n = x(e);
                null == t ? delete v[e] : v[e] = t;
                let a = x(e);
                n !== a && L[e].toggleCount++
            }

            function W(e) {
                return e.size(A.ChannelRTCParticipantsIndexes.STREAM) > 0 || e.size(A.ChannelRTCParticipantsIndexes.VIDEO) > 0 || e.hasEmbeddedActivity()
            }

            function q(e) {
                delete U[e], delete v[e], delete D[e], delete y[e]
            }

            function Q() {
                return k(e => e.rebuild(), function() {
                    let e = [],
                        t = g.default.getChannelId();
                    null != t && e.push(t);
                    let n = g.default.getVoiceChannelId();
                    null != n && !e.includes(n) && e.push(n);
                    let a = E.default.getRemoteSessionId(),
                        l = I.default.getVoiceStateForSession(_.default.getId(), a);
                    (null == l ? void 0 : l.channelId) != null && e.push(null == l ? void 0 : l.channelId), s.difference(m, e).forEach(q);
                    let i = s.difference(e, m);
                    return m = e, i
                }())
            }

            function z() {
                return k(e => e.updateEmbeddedActivities())
            }

            function X(e) {
                let {
                    userId: t
                } = e;
                return k(e => e.updateParticipantSpeaking(t))
            }

            function j(e) {
                let {
                    user: t
                } = e;
                return b(t.id)
            }

            function Z(e) {
                let {
                    channelId: t
                } = e;
                return k(e => e.rebuild(), [t])
            }

            function J(e) {
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
                } = (0, c.decodeStreamKey)(t);
                return b(a, [n])
            }

            function ee(e) {
                var t;
                return !!(null === (t = T.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
            }
            class et extends u.default.Store {
                initialize() {
                    this.waitFor(f.default, _.default, N.default, T.default, d.default, g.default, C.default, h.default, S.default, I.default), this.syncWith([d.default], z), this.syncWith([E.default], Q)
                }
                getParticipantsVersion(e) {
                    return V(e).version
                }
                getParticipants(e) {
                    var t;
                    return null !== (t = V(e).toArray()) && void 0 !== t ? t : O
                }
                getSpeakingParticipants(e) {
                    var t;
                    return null !== (t = V(e).toArray(A.ChannelRTCParticipantsIndexes.SPEAKING)) && void 0 !== t ? t : O
                }
                getFilteredParticipants(e) {
                    return G[e] ? V(e).toArray(A.ChannelRTCParticipantsIndexes.FILTERED) : V(e).toArray()
                }
                getVideoParticipants(e) {
                    var t;
                    return null !== (t = V(e).toArray(A.ChannelRTCParticipantsIndexes.VIDEO)) && void 0 !== t ? t : O
                }
                getStreamParticipants(e) {
                    var t;
                    return null !== (t = V(e).toArray(A.ChannelRTCParticipantsIndexes.STREAM)) && void 0 !== t ? t : O
                }
                getActivityParticipants(e) {
                    var t;
                    return null !== (t = V(e).toArray(A.ChannelRTCParticipantsIndexes.ACTIVITY)) && void 0 !== t ? t : O
                }
                getParticipant(e, t) {
                    return V(e).getParticipant(t)
                }
                getUserParticipantCount(e) {
                    let t = V(e);
                    return t.size() - t.size(A.ChannelRTCParticipantsIndexes.STREAM) - t.size(A.ChannelRTCParticipantsIndexes.ACTIVITY)
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
                    return t === p.ParticipantSelectionTypes.NONE ? null : t !== p.ParticipantSelectionTypes.AUTO ? t : n === p.ParticipantSelectionTypes.NONE || n === p.ParticipantSelectionTypes.AUTO ? null : n
                }
                getSelectedParticipant(e) {
                    let t = this.getSelectedParticipantId(e);
                    return null == t ? null : V(e).getParticipant(t)
                }
                getSelectedParticipantStats(e) {
                    let t = L[e];
                    return null == t ? {} : {
                        view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                        view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                        view_mode_toggle_count: t.toggleCount
                    }
                }
                getMode(e) {
                    var t;
                    return null !== (t = D[e]) && void 0 !== t ? t : ee(e) ? M.ChannelModes.VIDEO : M.ChannelModes.VOICE
                }
                getLayout(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.AppContext.APP;
                    if (__OVERLAY__) return M.ChannelLayouts.NORMAL;
                    let l = T.default.getChannel(e),
                        i = ee(e) || (null == l ? void 0 : l.isBroadcastChannel());
                    return null !== (n = null === (t = y[e]) || void 0 === t ? void 0 : t[a]) && void 0 !== n ? n : i ? M.ChannelLayouts.NO_CHAT : M.ChannelLayouts.NORMAL
                }
                getChatOpen(e) {
                    var t;
                    return null !== (t = H[e]) && void 0 !== t && t
                }
                isFullscreenInContext() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.AppContext.APP;
                    return Object.values(y).some(t => t[e] === M.ChannelLayouts.FULL_SCREEN)
                }
                getStageStreamSize(e) {
                    return F[e]
                }
                getStageVideoLimitBoostUpsellDismissed(e) {
                    return Y[e]
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
                    return null != t ? delete L[t] : null != n && (delete H[n], delete F[n], B(n)), Q()
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, a = Q(), l = T.default.getChannel(t);
                    return null == t || null == n || (null == l ? void 0 : l.type) !== M.ChannelTypes.GUILD_VOICE && (null == l ? void 0 : l.type) !== M.ChannelTypes.GUILD_STAGE_VOICE || H[t] ? a : (H[t] = !0, !0)
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
                        return n && null != l && !m.includes(l) ? e : b(a) || e
                    }, !1)
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.type === M.ChannelTypes.GROUP_DM) {
                        let e = t.originChannelId;
                        if (null != e) {
                            var n, a;
                            return y[t.id] = {
                                [M.AppContext.APP]: null !== (a = null === (n = y[e]) || void 0 === n ? void 0 : n[M.AppContext.APP]) && void 0 !== a ? a : M.ChannelLayouts.NORMAL
                            }, !0
                        }
                        t.isBroadcastChannel() && (y[t.id] = {
                            [M.AppContext.APP]: M.ChannelLayouts.NO_CHAT
                        })
                    }
                    return !1
                },
                CHANNEL_DELETE: J,
                THREAD_DELETE: J,
                CALL_CREATE: Z,
                CALL_UPDATE: Z,
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
                    } = e, a = V(t), l = null == n;
                    l && a.toArray(A.ChannelRTCParticipantsIndexes.STREAM).forEach(e => {
                        (0, p.isStreamParticipant)(e) && a.updateParticipant(e.user.id)
                    });
                    let [, i] = w(t);
                    if (K(t, [null != n ? n : p.ParticipantSelectionTypes.NONE, i]), (0, c.isStreamKey)(n)) {
                        try {
                            let {
                                ownerId: e
                            } = (0, c.decodeStreamKey)(n);
                            e === _.default.getId() && b(e, [t])
                        } catch (e) {
                            R.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                        }!W(a) && (P[t] = !1)
                    }
                },
                CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
                    let {
                        channelId: t,
                        layout: n,
                        appContext: a
                    } = e;
                    y[t] = {
                        ...y[t],
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
                    Y[t] = n
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    let {
                        channelId: t,
                        selfStreamHidden: n
                    } = e, a = _.default.getId();
                    if (n) {
                        let [e] = w(t), n = (0, c.isStreamKey)(e);
                        n && e.includes(a) && K(t, null)
                    }
                    b(a, [t])
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
                    return b(n, [t])
                },
                RTC_CONNECTION_PLATFORM: function(e) {
                    let {
                        channelId: t,
                        userId: n
                    } = e;
                    return b(n, [t])
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    let {
                        userId: t
                    } = e;
                    return b(t)
                },
                MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
                    let {
                        channelId: t,
                        senderUserId: n,
                        maxResolution: a,
                        maxFrameRate: l
                    } = e;
                    return k(e => e.updateParticipantQuality(n, a, l), [t])
                },
                STREAM_CLOSE: $,
                STREAM_DELETE: $,
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, {
                        channelId: n,
                        ownerId: a
                    } = (0, c.decodeStreamKey)(t);
                    return b(a, [n])
                },
                SPEAKING: X,
                GUILD_SOUNDBOARD_SOUND_PLAY_START: X,
                GUILD_SOUNDBOARD_SOUND_PLAY_END: X,
                USER_UPDATE: j,
                GUILD_MEMBER_UPDATE: j,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e, n = [];
                    if (s.forEach(m, e => {
                            let a = T.default.getChannel(e);
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
            var a = n("500947"),
                l = n("498225"),
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
                    return C
                }
            });
            var a = n("498225"),
                l = n("913144"),
                i = n("582713"),
                s = n("923959"),
                u = n("282109"),
                r = n("697218"),
                d = n("599110"),
                o = n("49111");
            let E = new Set,
                c = {},
                f = {},
                _ = {},
                N = {},
                T = {};
            class g extends a.default.Store {
                initialize() {
                    this.waitFor(u.default, s.default)
                }
                getHighlightedMessageIds(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : E
                }
                getTempHighlightedMessageIds(e) {
                    var t;
                    return null !== (t = N[e]) && void 0 !== t ? t : E
                }
                getHighlightedMessageIdCount(e) {
                    var t, n;
                    return null !== (n = null === (t = c[e]) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0
                }
                getLastFetchedMillis(e) {
                    return _[e]
                }
                isLoading(e) {
                    return "loading" === f[e]
                }
            }
            g.displayName = "ChannelHighlightsStore";
            var C = new g(l.default, {
                CHANNEL_HIGHLIGHTS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    f[t] = "loading"
                },
                CHANNEL_HIGHLIGHTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e;
                    _[t] = Date.now();
                    let a = r.default.getCurrentUser();
                    if (null == n || null == a) return !1;
                    T[t] = n.load_id, n.channels.forEach(e => {
                        c[e.channel_id] = new Set(e.highlighted_message_ids.slice(0, 5))
                    }), d.default.track(o.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED, {
                        guild_id: t,
                        num_channels_highlighted: n.channels.length
                    }), delete f[t]
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        details: n
                    } = e;
                    (null == n ? void 0 : n.type) === i.SidebarOpenDetailsType.HOME && null != t && (N[t] = new Set(n.highlightMessageIds))
                }
            })
        },
        700507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                disconnectRemote: function() {
                    return h
                },
                connectToRemote: function() {
                    return S
                },
                remoteVoiceStateUpdate: function() {
                    return I
                },
                remoteDisconnect: function() {
                    return A
                },
                remoteAudioSettingsUpdate: function() {
                    return p
                },
                fetchDevices: function() {
                    return R
                },
                persistSelectedDeviceId: function() {
                    return O
                },
                transferToPlayStation: function() {
                    return v
                }
            });
            var a = n("11600"),
                l = n("455525"),
                i = n("990746"),
                s = n("913144"),
                u = n("404118"),
                r = n("504385"),
                d = n("945956"),
                o = n("235660"),
                E = n("599110"),
                c = n("286235"),
                f = n("893243"),
                _ = n("76393"),
                N = n("780338"),
                T = n("49111"),
                g = n("782340");

            function C(e, t) {
                var n, a;
                E.default.track(T.AnalyticEvents.REMOTE_COMMAND_SENT, {
                    command_type: e,
                    remote_platform: null === (a = o.default.getSessionById(t)) || void 0 === a ? void 0 : null === (n = a.clientInfo) || void 0 === n ? void 0 : n.os
                })
            }
            async function h() {
                let e = _.default.getAwaitingRemoteSessionInfo(),
                    t = null == e ? void 0 : e.nonce;
                s.default.dispatch({
                    type: "REMOTE_SESSION_DISCONNECT"
                });
                let n = [];
                ((null == e ? void 0 : e.type) === T.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === T.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(U(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
                    return i.default.delete({
                        url: T.Endpoints.CONNECT_REQUEST(e)
                    })
                }(t));
                try {
                    await Promise.all(n)
                } catch (e) {
                    u.default.show({
                        title: g.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                        body: g.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
                    })
                }
            }

            function S(e) {
                s.default.dispatch({
                    type: "REMOTE_SESSION_CONNECT",
                    sessionId: e
                })
            }

            function I(e, t) {
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
                }), C("VOICE_STATE_UPDATE", e)
            }

            function A(e) {
                s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "DISCONNECT"
                    }
                }), C("DISCONNECT", e), h()
            }

            function p(e, t, n, a) {
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
                }), C("AUDIO_SETTINGS_UPDATE", e))
            }
            async function M() {
                let e;
                try {
                    let t = null != d.default.getRTCConnectionId() ? l.ConsoleHandoffType.TRANSFER_EXISTING_CALL : l.ConsoleHandoffType.CREATE_NEW_CALL,
                        n = await i.default.post({
                            url: T.Endpoints.CONNECT_REQUEST_CREATE,
                            body: {
                                analytics_properties: {
                                    handoff_type: t
                                }
                            }
                        });
                    e = n.body.nonce
                } catch (e) {
                    c.default.captureException(e)
                }
                return e
            }
            async function R(e) {
                let t;
                s.default.dispatch({
                    type: "GAME_CONSOLE_FETCH_DEVICES_START",
                    platform: e
                });
                try {
                    t = await i.default.get({
                        url: T.Endpoints.CONSOLES_DEVICES(e)
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

            function O(e, t) {
                s.default.dispatch({
                    type: "GAME_CONSOLE_SELECT_DEVICE",
                    platform: e,
                    deviceId: t
                })
            }
            async function m(e, t, n, l) {
                let u;
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
                    platform: e
                });
                try {
                    u = await i.default.post({
                        url: T.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
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
            async function U(e, t, n) {
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                    platform: e,
                    deviceId: t,
                    commandId: n
                });
                try {
                    await i.default.delete({
                        url: T.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
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
            async function v(e, t, n) {
                await f.default.maybeShowPTTAlert(e), await h();
                let a = await M();
                await m(e, t, n, a), (0, N.default)(n.id, e)
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
                    return d
                },
                XBOX_LINK_DEST_ORIGIN: function() {
                    return o
                },
                XBOX_CLIENT_SCOPES: function() {
                    return E
                },
                PLAYSTATION_LINK_DEST_ORIGIN: function() {
                    return c
                },
                PLAYSTATION_CLIENT_SCOPES: function() {
                    return f
                },
                XBOX_HANDOFF_SEARCH_PARAMS: function() {
                    return _
                },
                GameConsoleTypes: function() {
                    return i
                },
                GAME_CONSOLE_SESSIONS: function() {
                    return N
                },
                GameConsoleCommandResultErrorCodes: function() {
                    return s
                },
                USER_ACTION_REQUIRED_ERROR_CODES: function() {
                    return T
                },
                GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
                    return g
                }
            });
            var a, l, i, s, u = n("49111");
            let r = "xbox://communitylinking/donut/audio",
                d = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                o = "https://login.live.com",
                E = [u.OAuth2Scopes.VOICE, u.OAuth2Scopes.DM_CHANNELS_READ, u.OAuth2Scopes.GUILDS, u.OAuth2Scopes.GUILDS_MEMBERS_READ, u.OAuth2Scopes.IDENTIFY, u.OAuth2Scopes.CONNECTIONS],
                c = "https://my.account.sony.com",
                f = E,
                _ = e => {
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
            let N = new Set([i.XBOX, i.PLAYSTATION]);
            u.ActivityGamePlatforms.XBOX, u.ActivityGamePlatforms.PS5, (l = s || (s = {}))[l.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", l[l.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", l[l.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", l[l.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", l[l.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", l[l.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", l[l.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", l[l.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
            let T = new Set([s.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                g = "console error alert"
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
                var r, d;
                s.default.track(u.AnalyticEvents.VOICE_CALL_TRANSFER, {
                    source_platform: null != n ? null === (r = i.default.getSessionById(n)) || void 0 === r ? void 0 : r.clientInfo.os : "discord_client",
                    guild_id: null === (d = a.default.getChannel(e)) || void 0 === d ? void 0 : d.guild_id,
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
            var a = n("920040"),
                l = n("773670"),
                i = n("498225"),
                s = n("76393"),
                u = n("492913");

            function r(e) {
                let {
                    body: t,
                    dismissCallback: n,
                    errorCodeMessage: r
                } = e, d = (0, i.useStateFromStores)([s.default], () => s.default.getRemoteSessionId());
                return (l.useEffect(() => {
                    null != d && n()
                }, [d, n]), null == r) ? (0, a.jsx)(a.Fragment, {
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
                    return C
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("975162"),
                i = n("551042"),
                s = n("135230"),
                u = n("926994"),
                r = n("10641"),
                d = n("42887"),
                o = n("599110"),
                E = n("129978"),
                c = n("171644"),
                f = n("49111"),
                _ = n("782340"),
                N = n("429134");
            let T = "game_console_alert_modal",
                g = "game_console_ptt_alert_modal";
            var C = {
                maybeShowPTTAlert(e) {
                    if (d.default.getMode() !== f.InputModes.PUSH_TO_TALK || (0, r.isDismissibleContentDismissed)(l.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
                    let t = {
                            [f.PlatformTypes.XBOX]: _.default.Messages.PTT_NOT_SUPPORTED_XBOX,
                            [f.PlatformTypes.PLAYSTATION]: _.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
                            [f.PlatformTypes.PLAYSTATION_STAGING]: _.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
                        },
                        n = t[e];
                    return null == n ? Promise.resolve() : new Promise(e => {
                        let t = () => {
                                (0, r.markDismissibleContentAsDismissed)(l.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                            },
                            u = e => (0, a.jsx)(s.default, {
                                ...e,
                                title: n,
                                body: _.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                                onConfirm: t,
                                titleClassName: N.title
                            });
                        (0, i.hasModalOpen)(g) ? (0, i.updateModal)(g, u) : (0, i.openModal)(u, {
                            modalKey: g
                        })
                    })
                },
                showSelfDismissableAlert(e) {
                    let {
                        title: t,
                        body: n,
                        errorCodeMessage: l,
                        reconnectPlatformType: r
                    } = e, d = (0, a.jsx)(E.SelfDismissibleAlertBody, {
                        body: n,
                        errorCodeMessage: l,
                        dismissCallback: () => (0, i.closeModal)(T)
                    });

                    function _() {
                        null != r && ((0, u.default)(r), o.default.track(f.AnalyticEvents.ACCOUNT_LINK_STEP, {
                            previous_step: c.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                            current_step: "desktop oauth",
                            platform_type: r
                        }))
                    }
                    let N = e => (0, a.jsx)(s.default, {
                        ...e,
                        title: t,
                        body: d,
                        onConfirm: _
                    });
                    (0, i.hasModalOpen)(T) ? (0, i.updateModal)(T, N) : (0, i.openModal)(N, {
                        modalKey: T
                    })
                }
            }
        },
        223913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canStreamInChannel: function() {
                    return T
                },
                getStreamCTAString: function() {
                    return g
                },
                canWatchStream: function() {
                    return C
                },
                useCanWatchStream: function() {
                    return h
                },
                getStreamEligibleChannels: function() {
                    return S
                }
            });
            var a, l, i = n("754013"),
                s = n("498225"),
                u = n("76393"),
                r = n("923959"),
                d = n("305961"),
                o = n("957255"),
                E = n("800762"),
                c = n("404008"),
                f = n("49111"),
                _ = n("782340");
            let N = (e, t) => e.isPrivate() || t.can(i.default.combine(f.Permissions.CONNECT, f.Permissions.VIEW_CHANNEL), e);

            function T(e, t, n) {
                var a;
                let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                if (e.isPrivate()) return !0;
                let i = t.getGuild(e.getGuildId()),
                    s = null !== (a = null == i ? void 0 : i.maxStageVideoChannelUsers) && void 0 !== a ? a : 0;
                return (!e.isGuildStageVoice() || !(s <= 0)) && (!l || !!N(e, n)) && !!n.can(f.Permissions.STREAM, e) && null != i && i.afkChannelId !== e.id && !0
            }

            function g(e) {
                switch (e) {
                    case l.REMOTE_MODE:
                        return _.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
                    case l.CHANNEL_FULL:
                        return _.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
                    case l.NO_PERMISSION:
                        return _.default.Messages.STREAM_NO_PERMISSION_CTA;
                    default:
                        return _.default.Messages.WATCH_STREAM
                }
            }

            function C(e, t, n, a, i) {
                let s;
                if (null == e) return [!1, l.NO_PERMISSION];
                let u = t.isInChannel(e.id),
                    r = (0, c.isChannelFull)(e, t, n),
                    d = N(e, a),
                    o = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
                o ? s = l.REMOTE_MODE : d || u ? r && !u && (s = l.CHANNEL_FULL) : s = l.NO_PERMISSION;
                let E = !__OVERLAY__ && !o && (u || d && !r);
                return [E, s]
            }

            function h(e) {
                return (0, s.useStateFromStoresArray)([E.default, d.default, o.default, u.default], () => C(e, E.default, d.default, o.default, u.default))
            }

            function S(e, t, n) {
                let a = [];
                for (let {
                        channel: l
                    }
                    of e[r.GUILD_VOCAL_CHANNELS_KEY]) T(l, t, n) && a.push(l);
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
            var a = n("860604");

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
                    return f
                },
                useGuildUnreadSetting: function() {
                    return _
                },
                getGuildUnreadSetting: function() {
                    return N
                }
            });
            var a = n("161179"),
                l = n.n(a),
                i = n("498225"),
                s = n("755624"),
                u = n("233069"),
                r = n("42203"),
                d = n("282109"),
                o = n("44574"),
                E = n("627869"),
                c = n("49111");

            function f(e) {
                let {
                    isExperimentEnabled: t,
                    hasUserEnabledGuildUnreads: n,
                    channelNotificationOverrides: a,
                    categoryNotificationOverrides: l,
                    unreadSetting: i,
                    hasJoinedThread: s
                } = e, u = null != a && a.message_notifications !== c.UserNotificationSettings.NULL || null != l && l.message_notifications !== c.UserNotificationSettings.NULL;
                return t && n && !s ? u ? null == i || i === E.UserUnreadSettings.NULL ? E.UserUnreadSettings.ALL_MESSAGES : i : null != i ? i : E.UserUnreadSettings.NULL : E.UserUnreadSettings.ALL_MESSAGES
            }

            function _(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = null == e ? void 0 : e.parent_id,
                    a = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(n), [n]),
                    u = (null == e ? void 0 : e.isThread()) ? n : null == e ? void 0 : e.id;
                l(null != u, "parent_id cannot be null for threads");
                let c = (null == e ? void 0 : e.isThread()) ? null == a ? void 0 : a.parent_id : n,
                    _ = (0, o.useGuildUnreadsExperiment)(),
                    {
                        channelNotificationOverrides: N,
                        categoryNotificationOverrides: T,
                        unreadSetting: g,
                        hasUserEnabledGuildUnreads: C
                    } = (0, i.useStateFromStoresObject)([d.default], () => ({
                        channelNotificationOverrides: d.default.getChannelOverrides(t)[u],
                        categoryNotificationOverrides: null != c ? d.default.getChannelOverrides(t)[c] : null,
                        unreadSetting: null != t ? d.default.getChannelUnreadSetting(t, u) : E.UserUnreadSettings.NULL,
                        hasUserEnabledGuildUnreads: null != t && d.default.isGuildUnreadSettingEnabled(t)
                    }), [t, u, c]),
                    h = (0, i.useStateFromStores)([s.default], () => (null == e ? void 0 : e.id) != null && s.default.hasJoined(e.id));
                return f({
                    isExperimentEnabled: _,
                    hasUserEnabledGuildUnreads: C,
                    channelNotificationOverrides: N,
                    categoryNotificationOverrides: T,
                    unreadSetting: g,
                    hasJoinedThread: h
                })
            }

            function N(e) {
                let t = e.guild_id,
                    n = r.default.getBasicChannel(e.parent_id),
                    a = (0, u.isThread)(e.type) ? e.parent_id : e.id;
                l(null != a, "parent_id cannot be null for threads");
                let i = (0, u.isThread)(e.type) ? null == n ? void 0 : n.parent_id : e.parent_id,
                    E = (0, o.isGuildUnreadsExperimentEnabled)(),
                    c = d.default.isGuildUnreadSettingEnabled(t),
                    _ = d.default.getChannelUnreadSetting(t, a),
                    N = d.default.getChannelOverrides(t)[a],
                    T = null != i ? d.default.getChannelOverrides(t)[i] : null,
                    g = s.default.hasJoined(e.id);
                return f({
                    isExperimentEnabled: E,
                    hasUserEnabledGuildUnreads: c,
                    channelNotificationOverrides: N,
                    categoryNotificationOverrides: T,
                    unreadSetting: _,
                    hasJoinedThread: g
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
                    return o
                }
            });
            var a = n("161179"),
                l = n.n(a),
                i = n("714480"),
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
            let d = {
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

            function o(e) {
                return d[e]()
            }
        },
        711326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMediaPostEmbedCommonData: function() {
                    return c
                },
                getMediaPostEmbedChannelPath: function() {
                    return f
                },
                canUseMediaPostEmbed: function() {
                    return _
                }
            });
            var a = n("312016"),
                l = n("361572"),
                i = n("305961"),
                s = n("315102"),
                u = n("387111"),
                r = n("856220"),
                d = n("49111"),
                o = n("894488"),
                E = n("782340");

            function c(e) {
                var t, n, a, l, i;
                let {
                    mediaPostEmbedData: d,
                    guild: c,
                    parentChannel: f,
                    postThread: _,
                    user: N,
                    selectedGuildId: T,
                    canAccess: g = !1
                } = e;
                if (null == d) return null;
                let C = (0, r.getThumbnailImage)(d.thumbnail),
                    h = !g && d.has_media_attachment,
                    S = g ? E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
                    I = null != N ? u.default.getName(d.guild_id, d.channel_id, N) : void 0,
                    A = null == N ? void 0 : N.getAvatarURL(null == c ? void 0 : c.id, 40);
                (null == A || T !== d.guild_id) && (A = s.default.getGuildIconURL({
                    id: d.guild_id,
                    icon: d.guild_icon,
                    size: 40,
                    canAnimate: !1
                }));
                let p = function(e) {
                        if (null == e) return !1;
                        let {
                            height: t,
                            width: n
                        } = e;
                        return null != t && null != n && t >= n
                    }(d.thumbnail) && !h,
                    M = (null === (t = d.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (a = d.thumbnail) || void 0 === a ? void 0 : null === (n = a.filename) || void 0 === n ? void 0 : n.startsWith(o.SPOILER_ATTACHMENT_PREFIX));
                return {
                    title: null !== (l = d.title) && void 0 !== l ? l : "",
                    subtitle: d.description,
                    ctaText: S,
                    coverImage: C,
                    coverImageOverlayText: h ? E.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: d.parent_channel_id,
                    threadId: d.channel_id,
                    postThread: _,
                    messageId: d.message_id,
                    canAccess: g,
                    guildId: d.guild_id,
                    guildName: null !== (i = null == c ? void 0 : c.name) && void 0 !== i ? i : d.guild_name,
                    authorId: null == d ? void 0 : d.author_id,
                    authorName: I,
                    channelName: null == f ? void 0 : f.name,
                    avatarUrl: A,
                    shouldShowBlurredThumbnailImage: h,
                    shouldContainMediaWithBackground: p,
                    shouldSpoiler: M,
                    obscureAwaitingScan: !1,
                    flags: d.flags,
                    contentScanVersion: d.content_scan_version
                }
            }

            function f(e) {
                if (null == e) return;
                let t = (0, a.parseURLSafely)(e);
                if (null == t) return;
                let n = (0, a.remainingPathFromDiscordHostMatch)(t);
                if (null != n) return (0, l.tryParseChannelPath)(n)
            }

            function _(e, t) {
                let n = i.default.getGuild(e);
                if (null == n || null == t) return !1;
                let a = n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
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
                    return I
                }
            });
            var a = n("988415"),
                l = n("42203"),
                i = n("455079");
            let s = new Set,
                u = new Set,
                r = !1,
                d = null;

            function o(e) {
                return e.isMessageRequest && !e.isSpam
            }

            function E(e) {
                let t = !1;
                return o(e) && !s.has(e.id) && (s.add(e.id), t = !0), !o(e) && s.has(e.id) && (s.delete(e.id), t = !0), !o(e) && u.has(e.id) && (u.delete(e.id), t = !0), t
            }

            function c(e) {
                var t;
                null != e && (d = null !== (t = (0, a.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, a.getDefaultCountryCode)())
            }

            function f(e) {
                "CONNECTION_OPEN" === e.type && c(e.countryCode), s.clear(), u.clear(), Object.values(l.default.getMutablePrivateChannels()).forEach(e => {
                    E(e)
                }), r = !0
            }

            function _(e) {
                let {
                    channelId: t
                } = e;
                u.add(t)
            }

            function N(e) {
                let {
                    channel: t
                } = e;
                return E(t)
            }

            function T(e) {
                let {
                    channels: t
                } = e;
                for (let e of t) E(e)
            }

            function g(e) {
                let {
                    channel: t
                } = e;
                return !!s.has(t.id) && (s.delete(t.id), !0)
            }

            function C(e) {
                let {
                    messageRequestChannelIds: t
                } = e;
                t.forEach(e => s.add(e))
            }

            function h(e) {
                let {
                    countryCode: t
                } = e;
                c(t)
            }
            class S extends i.default {
                takeSnapshot() {
                    return {
                        version: S.LATEST_SNAPSHOT_VERSION,
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
                    return d
                }
                isReady() {
                    return r
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
                        null != e && (s = new Set(e))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: f,
                        CONNECTION_OPEN_SUPPLEMENTAL: f,
                        CACHE_LOADED_LAZY: this.loadCache,
                        OVERLAY_INITIALIZE: C,
                        CHANNEL_CREATE: N,
                        CHANNEL_UPDATES: T,
                        CHANNEL_DELETE: g,
                        SET_LOCATION_METADATA: h,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: _
                    }), this.waitFor(l.default)
                }
            }
            S.displayName = "MessageRequestStore", S.LATEST_SNAPSHOT_VERSION = 1;
            var I = new S
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
                    return T
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

            function d(e) {
                let t = !1;
                if (e.isSpam && !i.has(e.id)) i.add(e.id), t = !0;
                if (!e.isSpam && i.has(e.id)) i.delete(e.id), t = !0;
                if (!e.isSpam && s.has(e.id)) s.delete(e.id), t = !0;
                return t
            }

            function o() {
                i.clear(), s.clear(), Object.values(a.default.getMutablePrivateChannels()).forEach(e => {
                    d(e)
                }), u = !0
            }

            function E(e) {
                let {
                    channelId: t
                } = e;
                s.add(t)
            }

            function c(e) {
                let {
                    channel: t
                } = e;
                return d(t)
            }

            function f(e) {
                let {
                    channels: t
                } = e;
                for (let e of t) d(e)
            }

            function _(e) {
                let {
                    channel: t
                } = e, n = !1;
                return i.has(t.id) && (i.delete(t.id), n = !0), n
            }
            class N extends l.default {
                takeSnapshot() {
                    return {
                        version: N.LATEST_SNAPSHOT_VERSION,
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
                        let e = this.readSnapshot(N.LATEST_SNAPSHOT_VERSION);
                        null != e && (i = new Set(e))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: o,
                        CONNECTION_OPEN_SUPPLEMENTAL: o,
                        CACHE_LOADED_LAZY: this.loadCache,
                        CHANNEL_CREATE: c,
                        CHANNEL_UPDATES: f,
                        CHANNEL_DELETE: _,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: E
                    }), this.waitFor(a.default)
                }
            }
            N.displayName = "SpamMessageRequestStore", N.LATEST_SNAPSHOT_VERSION = 1;
            var T = new N
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
                    return o
                },
                isVideoFile: function() {
                    return E
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
                d = (0, a.isIOS)() ? /\.(mp4|mov)$/i : ((0, a.isAndroid)(), /\.(mp4|webm|mov)$/i),
                o = e => l(e, d),
                E = e => null != e && d.test(e)
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
            var a = n("773670"),
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
                    return U
                }
            });
            var a = n("498225"),
                l = n("913144"),
                i = n("398604");
            n("21121");
            var s = n("692038"),
                u = n("514933"),
                r = n("719926"),
                d = n("305961"),
                o = n("27618"),
                E = n("697218"),
                c = n("299039"),
                f = n("159885"),
                _ = n("158998"),
                N = n("360191"),
                T = n("342176"),
                g = n("49111"),
                C = n("782340");
            let h = {
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

            function S(e) {
                return null != e.id && null != e.body && null != e.type
            }

            function I() {
                h = {
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

            function A(e) {
                var t, n;
                if ((0, u.isNotificationRedesignV2Enabled)() && e.type === N.NotificationCenterItems.FRIEND_SUGGESTION_CREATED && o.default.getRelationshipType(null !== (n = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "") === g.RelationshipTypes.PENDING_OUTGOING) {
                    let t = _.default.getName(e.other_user);
                    e = {
                        ...e,
                        body: C.default.Messages.NOTIF_CENTER_V2_ADD_FRIEND_REQUEST_SENT.format({
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

            function p(e) {
                let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? A(e.item) : e.item;
                if (!h.initialized || !S(t) || h.notifCenterIds.has(t.id)) return !1;
                h.notifCenterIds.add(t.id), h.notifCenterItems = [t, ...h.notifCenterItems], h.notifCenterItems.sort((e, t) => c.default.compare(t.id, e.id))
            }

            function M(e, t) {
                h.notifCenterItems = h.notifCenterItems.map(n => e.includes(n.id) ? {
                    ...n,
                    acked: t
                } : n).filter(S)
            }

            function R(e, t, n) {
                var a;
                return e.type === t && (null === (a = e.other_user) || void 0 === a ? void 0 : a.id) === n
            }

            function O(e) {
                var t;
                if (!(0, i.isGuildEventEnded)(e)) return;
                let n = t => t.type === N.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
                    a = e.name,
                    l = null === (t = d.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
                h.notifCenterItems = h.notifCenterItems.map(e => n(e) ? {
                    ...e,
                    disable_action: !0,
                    body: (0, f.isNullOrEmpty)(l) || (0, f.isNullOrEmpty)(a) ? e.body : C.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                        event_name: a,
                        guild_name: l
                    })
                } : e)
            }
            class m extends a.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(E.default), null != e) {
                        let t = e.notifCenterItems.map(e => ({
                            ...e,
                            message: null != e.message ? new r.default(e.message) : void 0
                        }));
                        t.length > 0 && (h = {
                            ...h,
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
                        ...h,
                        notifCenterItems: h.notifCenterItems.map(e),
                        staleNotifCenterItems: h.staleNotifCenterItems.map(e)
                    }
                }
                get loading() {
                    return h.loading
                }
                get initialized() {
                    return h.initialized
                }
                get items() {
                    return h.isDataStale ? h.staleNotifCenterItems : h.notifCenterItems
                }
                get hasMore() {
                    return h.paginationHasMore
                }
                get cursor() {
                    return h.paginationCursor
                }
                get errored() {
                    return h.errored
                }
                get active() {
                    return h.notifCenterActive
                }
                get localItems() {
                    return h.notifCenterLocalItems
                }
                get tabFocused() {
                    return h.notifCenterTabFocused
                }
            }
            m.displayName = "NotificationCenterItemsStore", m.persistKey = "NotificationCenterItemsStore_v2";
            var U = new m(l.default, {
                CONNECTION_OPEN: function(e) {
                    !(0, u.isNotificationRedesignV2Enabled)() && I();
                    let t = [];
                    e.relationships.forEach(e => {
                        let {
                            type: n,
                            user: a,
                            since: l
                        } = e;
                        if (n !== g.RelationshipTypes.PENDING_INCOMING || null == a || null == l) return null;
                        let i = E.default.getUser(a.id);
                        if (null == i) return null;
                        let s = (0, T.incomingFriendRequestLocalItem)(i, l);
                        !(c.default.age(s.id) > 7776e6) && t.push(s)
                    }), e.guilds.forEach(e => {
                        e.guild_scheduled_events.forEach(e => {
                            O(e)
                        })
                    }), h.notifCenterLocalItems = t
                },
                LOGOUT: I,
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    let {
                        ids: t
                    } = e;
                    M(t, !0)
                },
                NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
                    let {
                        ids: t
                    } = e;
                    M(t, !1)
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    O(e.guildScheduledEvent)
                },
                NOTIFICATION_CENTER_ITEM_CREATE: p,
                NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (!h.notifCenterIds.has(t)) return !1;
                    h.notifCenterIds.delete(t), h.notifCenterItems = h.notifCenterItems.filter(e => e.id !== t)
                },
                NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: p,
                LOAD_NOTIFICATION_CENTER_ITEMS: function() {
                    h.loading = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
                    h.loading = !1, h.initialized = !0, h.errored = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    let {
                        items: t,
                        hasMore: n,
                        cursor: a
                    } = e;
                    h.loading && (h.loading = !1, h.initialized = !0, h.errored = !1, h.isDataStale = !1, (null == a || !h.notifCenterIds.has(a)) && (h.paginationHasMore = t.length > 0 && n, h.paginationCursor = t.length > 0 ? a : void 0), h.notifCenterItems = [...h.notifCenterItems, ...t.map(A).filter(e => !h.notifCenterIds.has(e.id))], h.notifCenterItems.sort((e, t) => c.default.compare(t.id, e.id)), t.forEach(e => h.notifCenterIds.add(e.id)))
                },
                RESET_NOTIFICATION_CENTER: I,
                NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
                    let {
                        active: t
                    } = e;
                    h.notifCenterActive = t
                },
                NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
                    let {
                        focused: t
                    } = e;
                    h.notifCenterTabFocused = t
                },
                RELATIONSHIP_ADD: function(e) {
                    if (e.relationship.type === g.RelationshipTypes.PENDING_INCOMING) {
                        let {
                            user: t,
                            since: n
                        } = e.relationship;
                        if (null == n) return null;
                        let a = E.default.getUser(t.id);
                        if (null == a) return null;
                        h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, T.incomingFriendRequestLocalItem)(a, n)]
                    }
                    e.relationship.type === g.RelationshipTypes.FRIEND && (h.notifCenterLocalItems = h.notifCenterLocalItems.map(t => R(t, N.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? {
                        ...t,
                        acked: !0,
                        forceUnacked: !1,
                        local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                        type: N.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                        body: C.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                            username: "**".concat(e.relationship.user.username, "**")
                        })
                    } : t))
                },
                RELATIONSHIP_REMOVE: function(e) {
                    h.notifCenterLocalItems = h.notifCenterLocalItems.filter(t => !(R(t, N.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || R(t, N.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
                },
                NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
                    let {
                        item_enum: t
                    } = e;
                    h.notifCenterItems = h.notifCenterItems.map(e => e.item_enum === t ? {
                        ...e,
                        completed: !0,
                        acked: !0
                    } : e).filter(S)
                },
                NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
                    let {
                        item: t
                    } = e;
                    h.notifCenterItems = h.notifCenterItems.map(e => e.id === t.id ? t : e).filter(S)
                },
                SET_RECENT_MENTIONS_FILTER: I
            })
        },
        360191: function(e, t, n) {
            "use strict";
            var a, l, i, s, u, r, d, o, E, c, f;
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
            }), (a || (a = {})).LANDING = "notification_center_landing", (d = l || (l = {}))[d.UPDATE_PROFILE = 0] = "UPDATE_PROFILE", d[d.FIND_FRIENDS = 1] = "FIND_FRIENDS", d[d.ADD_FRIEND = 2] = "ADD_FRIEND", d[d.FIRST_MESSAGE = 3] = "FIRST_MESSAGE", (o = i || (i = {})).MARK_ALL_READ = "mark_all_read", o.CLICKED = "clicked", o.FRIEND_REQUESTS_BUTTON_CLICK = "friend_requests_button_click", o.ACTION_BUTTON = "action_button", (E = s || (s = {})).ForYou = "ForYou", E.Mentions = "Mentions", E.MessageReminders = "MessageReminders", (c = u || (u = {})).GO_LIVE_PUSH = "go_live_push", c.FRIEND_REQUEST_ACCEPTED = "friend_request_accepted", c.FRIEND_REQUEST_PENDING = "friend_request_pending", c.FRIEND_SUGGESTION_CREATED = "friend_suggestion_created", c.FRIEND_REQUEST_REMINDER = "friend_request_reminder", c.DM_FRIEND_NUDGE = "dm_friend_nudge", c.RECENT_MENTION = "recent_mention", c.REPLY_MENTION = "reply_mention", c.GUILD_SCHEDULED_EVENT_STARTED = "scheduled_guild_event_started", c.SYSTEM_DEMO = "system_demo", c.MISSED_MESSAGES = "missed_messages", c.TOP_MESSAGES = "top_messages", c.LIFECYCLE_ITEM = "lifecycle_item", c.TRENDING_CONTENT = "trending_content", (f = r || (r = {})).INCOMING_FRIEND_REQUESTS = "INCOMING_FRIEND_REQUESTS", f.INCOMING_FRIEND_REQUESTS_ACCEPTED = "INCOMING_FRIEND_REQUESTS_ACCEPTED", f.FRIEND_REQUESTS_GROUPED = "FRIEND_REQUESTS_GROUPED"
        },
        342176: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRelativeTimestamp: function() {
                    return d
                },
                isRemoteAcked: function() {
                    return o
                },
                incomingFriendRequestLocalItem: function() {
                    return E
                },
                isMentionItem: function() {
                    return c
                },
                inNotificationCenterEnabled: function() {
                    return f
                }
            });
            var a = n("500947"),
                l = n("845579"),
                i = n("913796"),
                s = n("360191"),
                u = n("581091"),
                r = n("782340");
            let d = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (0, u.default)({
                        since: e,
                        getFormatter: t ? u.getAbbreviatedFormatter : u.getFullFormatter
                    })
                },
                o = (e, t) => e.acked || t !== l.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && a.default.compare(t, e.id) >= 0;

            function E(e, t) {
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
            let c = e => e.type === s.NotificationCenterItems.RECENT_MENTION || e.type === s.NotificationCenterItems.REPLY_MENTION;

            function f() {
                return (0, i.inDesktopNotificationCenterExperiment)()
            }
        },
        581091: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAbbreviatedFormatter: function() {
                    return o
                },
                getFullFormatter: function() {
                    return E
                },
                default: function() {
                    return c
                }
            });
            var a = n("377849"),
                l = n.n(a),
                i = n("782340");
            let s = 3600,
                u = 24 * s,
                r = 30 * u,
                d = 12 * r,
                o = () => ({
                    minutes: i.default.Messages.DURATION_MINUTES_SHORT,
                    hours: i.default.Messages.DURATION_HOURS_SHORT,
                    days: i.default.Messages.DURATION_DAYS_SHORT,
                    months: i.default.Messages.DURATION_MONTHS_SHORT,
                    years: i.default.Messages.DURATION_YEARS_SHORT
                }),
                E = () => ({
                    minutes: i.default.Messages.DURATION_MINUTES_AGO,
                    hours: i.default.Messages.DURATION_HOURS_AGO,
                    days: i.default.Messages.DURATION_DAYS_AGO,
                    months: i.default.Messages.DURATION_MONTHS_AGO,
                    years: i.default.Messages.DURATION_YEARS_AGO
                });

            function c(e) {
                let {
                    since: t,
                    getFormatter: n
                } = e, a = l().diff(l(t), "s"), i = n(), o = l(t).format("LL");
                return o = a < 60 ? i.minutes.format({
                    minutes: 1
                }) : a < s ? i.minutes.format({
                    minutes: Math.floor(a / 60)
                }) : a < u ? i.hours.format({
                    hours: Math.floor(a / s)
                }) : a < r ? i.days.format({
                    days: Math.floor(a / u)
                }) : a < d ? i.months.format({
                    months: Math.floor(a / r)
                }) : i.years.format({
                    years: Math.floor(a / d)
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
                return !!e && (!!(0, i.getCombinedMainTabsV2PhaseOneExperimentValue)("showNewNotificationCenter") || d.getCurrentConfig({
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
                d = (0, a.createExperiment)({
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
                    return o
                },
                isOptInEnabledForGuild: function() {
                    return E
                },
                useChannelHighlightsEnabledForGuild: function() {
                    return c
                },
                isChannelHighlightsEnabledForGuild: function() {
                    return f
                },
                useShouldShowOnboardingAdminUpsellForGuild: function() {
                    return _
                }
            });
            var a = n("498225"),
                l = n("481555"),
                i = n("305961"),
                s = n("957255"),
                u = n("282109"),
                r = n("697218"),
                d = n("49111");

            function o(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isOptInEnabled(e)),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    l = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return null != e && null != n && null != l && (n.hasFeature(d.GuildFeatures.COMMUNITY) || l.isStaff()) && t
            }

            function E(e) {
                let t = i.default.getGuild(e),
                    n = r.default.getCurrentUser();
                return null != e && null != t && null != n && (t.hasFeature(d.GuildFeatures.COMMUNITY) || n.isStaff()) && u.default.isOptInEnabled(e)
            }

            function c(e) {
                return (0, l.useChannelHighlightsExperiment)()
            }

            function f(e) {
                return (0, l.isChannelHighlightsExperimentEnabled)()
            }

            function _(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    {
                        canManageGuild: n,
                        canManageRoles: l
                    } = (0, a.useStateFromStoresObject)([s.default], () => ({
                        canManageGuild: s.default.can(d.Permissions.MANAGE_GUILD, t),
                        canManageRoles: s.default.can(d.Permissions.MANAGE_ROLES, t)
                    }));
                if (null == t) return !1;
                let u = t.hasFeature(d.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
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
            var a = n("376929"),
                l = n.n(a),
                i = n("427964"),
                s = n.n(i),
                u = n("498225"),
                r = n("810479"),
                d = n("913144"),
                o = n("374014"),
                E = n("373469"),
                c = n("271938"),
                f = n("42203"),
                _ = n("305961"),
                N = n("957255"),
                T = n("27618"),
                g = n("280168"),
                C = n("697218"),
                h = n("800762"),
                S = n("316133"),
                I = n("998716"),
                A = n("325861"),
                p = n("834052");
            let M = "NO_GUILD",
                R = new r.default(e => [function(e) {
                    var t;
                    return null !== (t = e.getGuildId()) && void 0 !== t ? t : M
                }(e)], e => e.id),
                O = new Set,
                m = {};

            function U(e) {
                return R.values(null != e ? e : void 0, !0).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })
            }

            function v(e) {
                !O.has(e) && (O.add(e), s(f.default.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
                    y(e) && R.set(e.id, e)
                }))
            }

            function L(e) {
                let t = m[e];
                if (null != t) return t;
                let n = f.default.getChannel(e);
                return null != n && n.isGuildStageVoice() ? (v(n.guild_id), y(n)) ? D(e) : null : null
            }

            function D(e) {
                let t = m[e];
                return null == t && (t = new I.default(e), m[e] = t, t.rebuild()), t
            }

            function y(e) {
                return null != e && e.isGuildStageVoice() && S.default.countVoiceStatesForChannel(e.id) > 0
            }

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U();
                return t.reduce((t, n) => {
                    let a = D(n),
                        l = e(a);
                    return l ? (! function(e, t) {
                        let n = f.default.getChannel(e);
                        null != n && n.isGuildStageVoice() ? 0 === t.size() ? H(n.id) : null == R.get(n.id) && R.set(n.id, n) : H(e)
                    }(n, a), !0) : t
                }, !1)
            }

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U();
                return P(t => t.updateParticipant(e), t)
            }

            function H(e) {
                return null != e && (delete m[e], R.delete(e), !0)
            }

            function F() {
                O.clear(), R.clear(), m = {}
            }

            function Y(e, t, n) {
                if (null == n || e.has(n)) return;
                let a = f.default.getChannel(n);
                (null == a ? void 0 : a.isGuildStageVoice()) && (t.add(n), e.add(n))
            }

            function V(e) {
                let {
                    user: t
                } = e;
                return G(t.id)
            }

            function k(e) {
                let {
                    relationship: t
                } = e;
                return G(t.id)
            }

            function b(e) {
                let {
                    guild: t
                } = e;
                ! function(e) {
                    let t = R.values(e);
                    for (let e of t) R.delete(e.id), delete m[e.id];
                    O.delete(e)
                }(t.id)
            }

            function w(e) {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    guildId: a,
                    ownerId: l
                } = (0, o.decodeStreamKey)(t);
                return !!(null != a && O.has(a)) && G(l, [n])
            }
            let x = [];
            class B extends u.default.Store {
                initialize() {
                    this.waitFor(c.default, C.default, f.default, g.default, h.default, N.default, S.default, _.default, A.default, T.default, p.default, E.default)
                }
                getParticipantsVersion(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = L(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
                getMutableParticipants(e, t) {
                    var n, a;
                    return null == e ? x : null !== (a = null === (n = L(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== a ? a : x
                }
                getMutableRequestToSpeakParticipants(e) {
                    var t, n;
                    return null !== (n = null === (t = L(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : x
                }
                getRequestToSpeakParticipantsVersion(e) {
                    var t, n;
                    return null !== (n = null === (t = L(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
                getParticipantCount(e, t) {
                    var n, a;
                    return null !== (a = null === (n = L(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== a ? a : 0
                }
                getChannels(e) {
                    return v(null != e ? e : M), R.values(null != e ? e : M)
                }
                getChannelsVersion() {
                    return R.version
                }
                getParticipant(e, t) {
                    var n, a;
                    return null !== (a = null === (n = L(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== a ? a : null
                }
            }
            B.displayName = "StageChannelParticipantStore";
            var K = new B(d.default, {
                CONNECTION_OPEN: F,
                OVERLAY_INITIALIZE: F,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = new Set;
                    return t.reduce((e, t) => {
                        if (null == t.guildId || !O.has(t.guildId)) return e;
                        let a = new Set;
                        return (Y(n, a, t.oldChannelId), Y(n, a, t.channelId), 0 === a.size) ? e : G(t.userId, Array.from(a)) || e
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
                USER_UPDATE: V,
                GUILD_MEMBER_REMOVE: V,
                GUILD_MEMBER_UPDATE: V,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = t.reduce((e, t) => {
                        if (!t.isGuildStageVoice() || !O.has(t.guild_id)) return e;
                        let n = R.get(t.id);
                        return null == n || l(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), R.set(t.id, t), e)
                    }, []);
                    return P(e => e.rebuild(), n), n.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (O.has(t)) return P(e => e.rebuild(), U(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    let {
                        channelId: t,
                        guildId: n,
                        userId: a
                    } = e;
                    return !!(null != n && O.has(n)) && G(a, [t])
                },
                STREAM_CLOSE: w,
                STREAM_DELETE: w,
                RELATIONSHIP_ADD: k,
                RELATIONSHIP_REMOVE: k,
                GUILD_CREATE: b,
                GUILD_DELETE: b,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = !1;
                    for (let n of U(e.guildId)) t = D(n).rebuild() || t;
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
                    return m
                }
            });
            var a, l, i, s, u = n("810479"),
                r = n("246846"),
                d = n("374014"),
                o = n("373469"),
                E = n("42203"),
                c = n("124948"),
                f = n("26989"),
                _ = n("27618"),
                N = n("697218"),
                T = n("800762"),
                g = n("387111"),
                C = n("325861"),
                h = n("834052"),
                S = n("808422"),
                I = n("922673"),
                A = n("49111");

            function p(e) {
                var t;
                let {
                    speaker: n,
                    role: a,
                    user: l,
                    userNick: i,
                    connectedOn: u,
                    voiceState: d,
                    type: o
                } = e, E = o === s.STREAM ? "\x00" : "\x01", c = d.selfMute ? "\x01" : "\x00", f = d.selfVideo ? "\x00" : "\x01", _ = "".concat(null !== (t = null == a ? void 0 : a.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(n ? "\x00" : "\x01").concat(E).concat(c).concat(f).concat(_).concat(u).concat((0, r.default)(i, l))
            }

            function M(e) {
                let {
                    user: t,
                    voiceState: n
                } = e, a = n.requestToSpeakTimestamp;
                return null == a ? t.id : "".concat(Date.parse(a)).concat(t.id)
            }

            function R(e) {
                return e === S.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function O(e) {
                let {
                    speaker: t,
                    role: n,
                    rtsState: a,
                    blocked: l,
                    isFriend: s
                } = e, u = [];
                return R(a) && u.push(i.ALL_REQUESTED_TO_SPEAK), a === S.RequestToSpeakStates.REQUESTED_TO_SPEAK && u.push(i.REQUESTED_TO_SPEAK_ONLY), t ? u.push(i.SPEAKER) : (null != n ? u.push(n.id) : u.push(i.NO_ROLE), u.push(i.AUDIENCE)), l && u.push(i.BLOCKED), s && u.push(i.FRIEND), u
            }(a = i || (i = {})).SPEAKER = "SPEAKER", a.AUDIENCE = "AUDIENCE", a.NO_ROLE = "NO_ROLE", a.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", a.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", a.BLOCKED = "BLOCKED", a.FRIEND = "FRIEND", a.SELECTED = "SELECTED", a.MEDIA = "MEDIA", (l = s || (s = {})).VOICE = "VOICE", l.STREAM = "STREAM";
            class m {
                _getParticipantsForUser(e, t) {
                    var n, a;
                    let l;
                    let i = [],
                        u = T.default.getVoiceStateForChannel(this.channelId, e);
                    if (null == u) return i;
                    let r = N.default.getUser(e);
                    if (null == r) return null != this.guildId && h.default.isPublic(this.channelId) && c.default.requestMember(this.guildId, e), i;
                    let E = null != t ? t[0] : null,
                        p = {
                            user: r,
                            userNick: g.default.getName(this.guildId, this.channelId, r),
                            voiceState: u,
                            role: (0, I.getHighestHoistedRole)(this.guildId, e),
                            speaker: C.default.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? f.default.getMember(this.guildId, e) : null,
                            blocked: _.default.getRelationships()[r.id] === A.RelationshipTypes.BLOCKED,
                            isFriend: _.default.isFriend(r.id),
                            connectedOn: null !== (n = null == E ? void 0 : E.connectedOn) && void 0 !== n ? n : Date.now()
                        },
                        M = {
                            ...p,
                            type: s.VOICE,
                            id: r.id,
                            rtsState: (0, S.getAudienceRequestToSpeakState)(u)
                        };
                    i.push(M);
                    let R = null !== (a = o.default.getStreamForUser(e, this.guildId)) && void 0 !== a ? a : o.default.getActiveStreamForUser(e, this.guildId);
                    if (null != R && R.channelId === this.channelId) {
                        let e = (0, d.encodeStreamKey)(R);
                        l = {
                            ...p,
                            id: e,
                            type: s.STREAM,
                            rtsState: S.RequestToSpeakStates.NONE
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
                        this._participantsIndex.set(t.id, t), t.id === e && R(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
                    }), this.participants[e] = n, !0)
                }
                rebuild() {
                    let e = E.default.getChannel(this.channelId);
                    if (null == e || !e.isGuildStageVoice()) return !1;
                    let t = new Set(Object.keys(T.default.getVoiceStatesForChannel(e.id)));
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
                    this.participants = {}, this._participantsIndex = new u.default(O, p), this._requestToSpeakIndex = new u.default(() => [], M), this.channelId = e, this.guildId = null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }
            }
        },
        619395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                removeModeratorOverwrite: function() {
                    return f
                },
                isEmptyOverwrite: function() {
                    return _
                },
                useCanUpdateStageChannelModerators: function() {
                    return N
                },
                useCanModerateRequestToSpeak: function() {
                    return T
                },
                canLurkerListen: function() {
                    return g
                }
            });
            var a = n("754013"),
                l = n("498225"),
                i = n("267567");
            n("271938");
            var s = n("42203"),
                u = n("305961"),
                r = n("957255"),
                d = n("991170"),
                o = n("923510"),
                E = n("834052"),
                c = n("49111");

            function f(e, t, n) {
                var l, i;
                let s = null == n ? void 0 : n.permissionOverwrites[e];
                return {
                    id: e,
                    type: t,
                    deny: null !== (l = null == s ? void 0 : s.deny) && void 0 !== l ? l : d.default.NONE,
                    allow: a.default.remove(null !== (i = null == s ? void 0 : s.allow) && void 0 !== i ? i : d.default.NONE, o.MODERATE_STAGE_CHANNEL_PERMISSIONS)
                }
            }

            function _(e) {
                let {
                    allow: t,
                    deny: n
                } = e;
                return a.default.equals(t, d.default.NONE) && a.default.equals(n, d.default.NONE)
            }

            function N(e) {
                return (0, l.useStateFromStores)([r.default, u.default, s.default], () => {
                    let t = s.default.getChannel(e),
                        n = u.default.getGuild(null == t ? void 0 : t.getGuildId());
                    return !!(r.default.can(c.Permissions.ADMINISTRATOR, n) || r.default.can(c.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || r.default.can(o.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
                }, [e])
            }

            function T(e) {
                return (0, l.useStateFromStores)([s.default, r.default], () => null != e && r.default.can(c.Permissions.MUTE_MEMBERS, s.default.getChannel(e)), [e])
            }

            function g(e) {
                return !!(null != e && e.isGuildStageVoice() && i.default.isLurking(e.guild_id) && E.default.isPublic(e.id)) && r.default.can(o.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
            }
        },
        325861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a, l, i = n("427964"),
                s = n.n(i),
                u = n("498225"),
                r = n("913144"),
                d = n("42203"),
                o = n("923959"),
                E = n("26989"),
                c = n("305961"),
                f = n("697218"),
                _ = n("800762"),
                N = n("991170"),
                T = n("923510"),
                g = n("808422");
            (a = l || (l = {})).SPEAKER = "speaker", a.MODERATOR = "moderator";
            let C = {},
                h = {
                    [l.SPEAKER]: !1,
                    [l.MODERATOR]: !1
                };

            function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == C[t] && (C[t] = {});
                let a = function(e, t) {
                    var n, a, i;
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        u = d.default.getChannel(t),
                        r = null == u ? void 0 : u.getGuildId(),
                        o = c.default.getGuild(r);
                    if (null == o || null == u || !u.isGuildStageVoice()) return h;
                    return {
                        [l.SPEAKER]: function(e, t) {
                            let n = _.default.getVoiceStateForChannel(t, e);
                            return (0, g.getAudienceRequestToSpeakState)(n) === g.RequestToSpeakStates.ON_STAGE
                        }(e, t),
                        [l.MODERATOR]: s ? (n = e, a = o, i = u, N.default.can({
                            permission: T.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                            user: n,
                            context: a,
                            overwrites: i.permissionOverwrites,
                            roles: a.roles
                        })) : null
                    }
                }(e, t, n);
                return C[t][e] = a, a
            }

            function I(e, t) {
                var n;
                if (null == t) return !1;
                let a = d.default.getChannel(t);
                return !!(null != a && a.isGuildStageVoice()) && (null === (n = C[t]) || void 0 === n || delete n[e], !0)
            }

            function A(e) {
                let t = o.default.getChannels(e)[o.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGuildStageVoice()
                });
                for (let {
                        channel: e
                    }
                    of t) delete C[e.id];
                return t.length > 0
            }

            function p(e) {
                let {
                    guildId: t,
                    user: n
                } = e;
                return null != n && null != t && function(e, t) {
                    for (let n in C) {
                        let a = d.default.getBasicChannel(n);
                        if (null != a) a.guild_id === t && delete C[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function M(e) {
                let {
                    guild: t
                } = e;
                for (let e in C) {
                    let n = d.default.getBasicChannel(e);
                    (null == n || n.guild_id === t.id) && delete C[e]
                }
            }
            class R extends u.default.Store {
                initialize() {
                    this.waitFor(E.default, d.default, c.default, f.default, _.default)
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
                    if (null == e || null == t) return h;
                    let i = null === (n = C[t]) || void 0 === n ? void 0 : n[e];
                    if (null != i) return a && null == i[l.MODERATOR] ? S(e, t, !0) : i;
                    return S(e, t, a)
                }
            }
            R.displayName = "StageChannelRoleStore";
            var O = new R(r.default, {
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let e of t) delete C[e.id]
                },
                CONNECTION_OPEN: function() {
                    C = {}
                },
                GUILD_MEMBER_REMOVE: p,
                GUILD_MEMBER_UPDATE: p,
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    A(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = A(e.guildId);
                    for (let a of null !== (t = e.voiceStates) && void 0 !== t ? t : []) n = I(a.userId, a.channelId) || n;
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return !s.isEmpty(C) && t.reduce((e, t) => {
                        let {
                            userId: n,
                            channelId: a
                        } = t;
                        return I(n, a) || e
                    }, !1)
                },
                GUILD_CREATE: M,
                GUILD_DELETE: M
            })
        },
        819450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageHasMedia: function() {
                    return r
                },
                getStageHasMedia: function() {
                    return d
                },
                isStageVideoEnabled: function() {
                    return o
                }
            });
            var a = n("498225"),
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

            function d(e) {
                let t = s.default.getMutableParticipants(e, u.StageChannelParticipantNamedIndex.SPEAKER),
                    n = null != t.find(e => e.type === u.StageChannelParticipantTypes.STREAM);
                return n || i.default.hasVideo(e)
            }

            function o(e) {
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
            var a, l, i = n("498225"),
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
            }), n("498225");
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
                    return h
                }
            });
            var a = n("427964"),
                l = n.n(a),
                i = n("498225"),
                s = n("913144"),
                u = n("233069"),
                r = n("42203");
            let d = {},
                o = new Set;

            function E(e) {
                return {
                    id: e.id,
                    parentId: e.parent_id
                }
            }

            function c(e) {
                e in d && delete d[e]
            }

            function f(e) {
                null != e.threads && e.threads.length > 0 && (d[e.id] = {}, e.threads.filter(e => u.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => _(e.id, t))), e.hasThreadsSubscription && o.add(e.id)
            }

            function _(e, t) {
                let n = d[e],
                    a = t.parent_id;
                !(a in n) && (n[a] = {}), d[e][a][t.id] = E(t)
            }

            function N(e) {
                var t, n;
                let {
                    channel: a
                } = e;
                if (!u.ALL_CHANNEL_TYPES.has(a.type)) return !1;
                if ((null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return T(a);
                {
                    let e = null !== (n = d[a.guild_id]) && void 0 !== n ? n : {};
                    d[a.guild_id] = {
                        ...e,
                        [a.parent_id]: {
                            ...e[a.parent_id],
                            [a.id]: E(a)
                        }
                    }
                }
            }

            function T(e) {
                let {
                    guild_id: t,
                    parent_id: n,
                    id: a
                } = e;
                if (null == t || null == n || !(t in d) || !(n in d[t]) || !(a in d[t][n])) return !1;
                d[t] = {
                    ...d[t],
                    [n]: {
                        ...d[t][n]
                    }
                }, delete d[t][n][a], l.isEmpty(d[t][n]) && delete d[t][n]
            }
            let g = {};
            class C extends i.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                isActive(e, t, n) {
                    return null != e && null != this.getThreadsForParent(e, t)[n]
                }
                getThreadsForGuild(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t ? t : g
                }
                getThreadsForParent(e, t) {
                    var n;
                    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : g
                }
                hasThreadsForChannel(e, t) {
                    return !l.isEmpty(this.getThreadsForParent(e, t))
                }
                forEachGuild(e) {
                    for (let t in d) e(t, d[t])
                }
                hasLoaded(e) {
                    return o.has(e)
                }
            }
            C.displayName = "ActiveThreadsStore";
            var h = new C(s.default, {
                CONNECTION_OPEN: function(e) {
                    d = {}, o.clear(), e.guilds.forEach(e => {
                        f(e)
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        channels: t
                    } = e;
                    d = {}, l(t).filter(e => u.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
                        d[t] = {}, e.forEach(e => _(t, e))
                    })
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    c(t.id), f(t)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    c(t.id)
                },
                THREAD_CREATE: N,
                THREAD_UPDATE: N,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        guildId: t,
                        threads: n,
                        channelIds: a
                    } = e;
                    for (let e in null == a && o.add(t), d[t] = {
                            ...d[t]
                        }, d[t]) d[t][e] = {
                        ...d[t][e]
                    };
                    n.forEach(e => _(t, e))
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return T(t)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null == t.guild_id || !(t.guild_id in d)) return !1;
                    d[t.guild_id] = {
                        ...d[t.guild_id]
                    }, delete d[t.guild_id][t.id]
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
                    return N
                }
            });
            var a = n("913144"),
                l = n("716241"),
                i = n("659558"),
                s = n("870879"),
                u = n("239448"),
                r = n("42203"),
                d = n("42887"),
                o = n("945956"),
                E = n("18494"),
                c = n("697218");
            let f = (e, t) => ({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    rtc_connection_id: o.default.getRTCConnectionId(),
                    duration: o.default.getDuration(),
                    media_session_id: o.default.getMediaSessionId(),
                    ...(0, l.getVoiceStateMetadata)(o.default.getGuildId(), o.default.getChannelId(), t)
                }),
                _ = () => {
                    var e;
                    let t = (0, i.getLastUsedVideoBackgroundOption)(c.default.getCurrentUser());
                    return {
                        video_device_name: null === (e = d.default.getVideoDevices()[d.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
                        video_hardware_scaling_enabled: d.default.getHardwareH264(),
                        video_effect_type: (0, u.getEffectAnalyticsType)(t),
                        video_effect_detail: (0, u.getEffectDetailAnalyticsName)(t)
                    }
                };

            function N(e, t, n, l) {
                let i = E.default.getVoiceChannelId(),
                    u = r.default.getChannel(i);
                if (null == t && null != i && null != u) {
                    let t = f(u, l);
                    if (e(), s.default.hasUsedBackgroundInCall) {
                        let e = {
                            ...t,
                            ..._()
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
            var u = n("498225"),
                r = n("913144"),
                d = n("76393"),
                o = n("374014"),
                E = n("223913"),
                c = n("537429"),
                f = n("271938"),
                _ = n("42203"),
                N = n("305961"),
                T = n("42887"),
                g = n("957255"),
                C = n("945956"),
                h = n("568307"),
                S = n("18494"),
                I = n("800762"),
                A = n("49111"),
                p = n("706530");
            let M = null,
                R = {};

            function O() {
                a = new Map, l = {}, i = {}, s = {}, R = {}
            }
            O();

            function m(e) {
                a.delete(e)
            }

            function U() {
                let e = [];
                for (let t in l) {
                    let n = l[t];
                    for (let a in n) e.push(l[t][a])
                }
                return e
            }

            function v(e) {
                let {
                    streamKey: t,
                    region: n,
                    viewerIds: l,
                    paused: s
                } = e;
                a.set(t, {
                    ...(0, o.decodeStreamKey)(t),
                    state: s ? A.ApplicationStreamStates.PAUSED : A.ApplicationStreamStates.ACTIVE
                }), i[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: l
                }
            }

            function L(e, t) {
                return e === p.StreamTypes.CALL || g.default.canWithPartialContext(A.Permissions.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function D(e) {
                let t = _.default.getChannel(e.channelId);
                return !!L(e.streamType, e.channelId) || null != t && (0, E.canWatchStream)(t, I.default, N.default, g.default, d.default)[0]
            }
            class y extends u.default.Store {
                initialize() {
                    this.syncWith([g.default], () => !0), this.waitFor(h.default, g.default)
                }
                isSelfStreamHidden(e) {
                    var t;
                    return null !== (t = R[e]) && void 0 !== t && t
                }
                getLastActiveStream() {
                    var e;
                    return (0, c.default)(T.default) ? null !== (e = Array.from(a.values()).pop()) && void 0 !== e ? e : null : null
                }
                getAllActiveStreams() {
                    return (0, c.default)(T.default) ? Array.from(a.values()) : []
                }
                getAllActiveStreamsForChannel(e) {
                    return (0, c.default)(T.default) ? Array.from(a.values()).filter(t => t.channelId === e) : []
                }
                getActiveStreamForStreamKey(e) {
                    var t;
                    return (0, c.default)(T.default) ? null !== (t = a.get(e)) && void 0 !== t ? t : null : null
                }
                getActiveStreamForApplicationStream(e) {
                    var t;
                    if (!(0, c.default)(T.default) || null == e) return null;
                    let n = (0, o.encodeStreamKey)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                }
                getCurrentUserActiveStream() {
                    let e = S.default.getVoiceChannelId(),
                        t = _.default.getChannel(e);
                    return null == t ? null : this.getActiveStreamForUser(f.default.getId(), t.getGuildId())
                }
                getActiveStreamForUser(e, t) {
                    var n;
                    let a = this.getStreamForUser(e, t);
                    return null != a ? this.getActiveStreamForApplicationStream(a) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
                }
                getStreamerActiveStreamMetadata() {
                    var e;
                    let t = S.default.getVoiceChannelId(),
                        n = _.default.getChannel(t);
                    if (null == n) return null;
                    let a = this.getActiveStreamForUser(f.default.getId(), n.getGuildId());
                    return null == a ? null : null !== (e = s[(0, o.encodeStreamKey)(a)]) && void 0 !== e ? e : null
                }
                getAnyStreamForUser(e) {
                    var t;
                    if (!(0, c.default)(T.default)) return null;
                    let n = l[e];
                    return null == n ? null : null !== (t = Object.values(n).find(e => D(e))) && void 0 !== t ? t : null
                }
                getStreamForUser(e, t) {
                    var n;
                    if (!(0, c.default)(T.default)) return null;
                    let a = null === (n = l[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
                    return null != a && D(a) ? a : null
                }
                getRTCStream(e) {
                    var t;
                    return (0, c.default)(T.default) ? null !== (t = i[e]) && void 0 !== t ? t : null : null
                }
                getAllApplicationStreams() {
                    return (0, c.default)(T.default) ? U().filter(e => null != e && L(e.streamType, e.channelId)) : []
                }
                getAllApplicationStreamsForChannel(e) {
                    return (0, c.default)(T.default) ? U().filter(t => null != t && t.channelId === e && L(t.streamType, t.channelId)) : []
                }
                getViewerIds(e) {
                    if (!(0, c.default)(T.default)) return [];
                    let t = null;
                    t = "string" == typeof e ? e : (0, o.encodeStreamKey)(e);
                    let n = null != t ? i[t] : null;
                    return null != n ? n.viewerIds : []
                }
                getState() {
                    return (0, c.default)(T.default) ? {
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
            y.displayName = "ApplicationStreamingStore";
            var P = new y(r.default, {
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
                            guildId: d,
                            channelId: o,
                            sessionId: E,
                            selfStream: c
                        } = t;
                        if (c && null != o) {
                            ;
                            return null == l[(n = {
                                streamType: null != d ? p.StreamTypes.GUILD : p.StreamTypes.CALL,
                                ownerId: r,
                                guildId: d,
                                channelId: o
                            }).ownerId] && (l[n.ownerId] = {}), l[n.ownerId][null !== (a = n.guildId) && void 0 !== a ? a : "null"] = n, !0
                        } {
                            ;
                            let t = f.default.getSessionId();
                            if (r === f.default.getId() && E !== t && null != C.default.getChannelId()) return e;
                            return i = r, s = null != (s = d) ? s : "null", (null === (u = l[i]) || void 0 === u ? void 0 : u[s]) != null && (delete l[i][s], !0) || e
                        }
                    }, !1)
                },
                STREAM_WATCH: function(e) {
                    let {
                        streamKey: t
                    } = e, n = (0, o.decodeStreamKey)(t);
                    a.delete(t), a.set(t, {
                        ...n,
                        state: A.ApplicationStreamStates.CONNECTING
                    }), n.ownerId === f.default.getId() && (R[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    let {
                        streamType: t,
                        guildId: n,
                        channelId: l,
                        pid: i,
                        sourceName: u
                    } = e, r = (0, o.encodeStreamKey)({
                        streamType: t,
                        guildId: n,
                        channelId: l,
                        ownerId: f.default.getId()
                    }), d = null != i ? h.default.getGameForPID(i) : null;
                    s[r] = {
                        id: null == d ? void 0 : d.id,
                        pid: i,
                        sourceName: u
                    }, a.delete(r), a.set(r, {
                        streamType: t,
                        guildId: n,
                        channelId: l,
                        ownerId: f.default.getId(),
                        state: A.ApplicationStreamStates.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    s[t] = null
                },
                STREAM_CREATE: v,
                STREAM_UPDATE: v,
                STREAM_TIMED_OUT: function(e) {
                    let {
                        streamKey: t
                    } = e, n = a.get(t);
                    if (null == n) return !1;
                    a.set(t, {
                        ...n,
                        state: A.ApplicationStreamStates.FAILED
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
                    let r = A.ApplicationStreamStates.ENDED;
                    if (l) r = A.ApplicationStreamStates.RECONNECTING;
                    else if (s === A.ApplicationStreamDeleteReasons.UNAUTHORIZED) r = A.ApplicationStreamStates.FAILED;
                    else if (s === A.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                        let {
                            guildId: e
                        } = (0, o.decodeStreamKey)(t);
                        n.el("772545").then(n.bind(n, "772545")).then(t => {
                            let {
                                default: n
                            } = t;
                            n(e)
                        }), r = A.ApplicationStreamStates.ENDED
                    }
                    a.set(t, {
                        ...u,
                        state: r
                    }), r === A.ApplicationStreamStates.ENDED && M !== t && m(t)
                },
                STREAM_CLOSE: function(e) {
                    let {
                        streamKey: t
                    } = e;
                    m(t)
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    var t;
                    let {
                        channelId: n,
                        selfStreamHidden: a
                    } = e, l = (0, o.isStreamKey)(M);
                    l && (null === (t = M) || void 0 === t ? void 0 : t.includes(f.default.getId())) && !1 === R[n] && !0 === a && (M = null), R[n] = a
                },
                RTC_CONNECTION_STATE: function(e) {
                    let {
                        streamKey: t,
                        state: n
                    } = e;
                    if (null == t) return !1;
                    let l = a.get(t);
                    if (null == l || l.state === A.ApplicationStreamStates.ENDED) return !1;
                    let i = l.state;
                    switch (n) {
                        case A.RTCConnectionStates.DISCONNECTED:
                            i = A.ApplicationStreamStates.RECONNECTING;
                            break;
                        case A.RTCConnectionStates.RTC_CONNECTED:
                            i = A.ApplicationStreamStates.ACTIVE
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
                    if (M = t, Array.from(a.values()).forEach(e => {
                            (0, o.encodeStreamKey)(e) !== M && e.state === A.ApplicationStreamStates.ENDED && m((0, o.encodeStreamKey)(e))
                        }), null == t) return;
                    let l = (0, o.isStreamKey)(t);
                    l && t.includes(f.default.getId()) && (R[n] = !1)
                },
                CONNECTION_OPEN: O,
                CONNECTION_CLOSED: O,
                LOGOUT: O
            })
        },
        950104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("427964"),
                l = n.n(a),
                i = n("498225"),
                s = n("990746"),
                u = n("913144"),
                r = n("42203"),
                d = n("18494"),
                o = n("162771"),
                E = n("49111");
            let c = {},
                f = {};

            function _() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.default.getChannelId(),
                    n = r.default.getChannel(t);
                if (null != n && null == n.getGuildId() && null != t && (null == c[t] || e)) {
                    var a;
                    return c[t] = null !== (a = c[t]) && void 0 !== a ? a : {
                        channelId: t,
                        ringing: []
                    }, u.default.dispatch({
                        type: "CALL_CONNECT",
                        channelId: t
                    }), !0
                }
                return !1
            }
            class N extends i.default.Store {
                initialize() {
                    this.waitFor(o.default, d.default)
                }
                getCall(e) {
                    return c[e]
                }
                getCalls() {
                    return Object.values(c)
                }
                getMessageId(e) {
                    let t = this.getCall(e);
                    return null != t ? t.messageId : null
                }
                isCallActive(e, t) {
                    let n = c[e];
                    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
                }
                isCallUnavailable(e) {
                    let t = c[e];
                    return null != t && t.unavailable
                }
                getInternalState() {
                    return {
                        calls: c,
                        enqueuedRings: f
                    }
                }
            }
            N.displayName = "CallStore";
            var T = new N(u.default, {
                CONNECTION_OPEN: function() {
                    return _(!0)
                },
                CONNECTION_CLOSED: function() {
                    c = {}, f = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        callStoreInternalState: t
                    } = e;
                    c = {
                        ...t.calls
                    }, f = {
                        ...t.enqueuedRings
                    }
                },
                CONNECTION_RESUMED: function() {
                    return _(!0)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return _(!1, t)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (null != f[t.id] && delete f[t.id], null == c[t.id]) return !1;
                    delete c[t.id]
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        region: a,
                        ringing: l
                    } = e;
                    if (c[t] = {
                            channelId: t,
                            messageId: n,
                            region: a,
                            ringing: l,
                            unavailable: !1,
                            regionUpdated: !1
                        }, null != f[t]) {
                        let e = f[t];
                        delete f[t], 1 !== e.indexOf("all") && (e = null), s.default.post({
                            url: E.Endpoints.CALL_RING(t),
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
                    } = e, i = c[t], s = null != i && (i.regionUpdated || i.region !== a);
                    c[t] = {
                        ...c[t],
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
                    } = e, a = c[t];
                    !0 === n && null != a ? c[t] = {
                        ...a,
                        unavailable: n
                    } : c[t] = {
                        channelId: t,
                        ringing: [],
                        messageId: null,
                        region: null,
                        regionUpdated: !1,
                        unavailable: n
                    }, null != f[t] && delete f[t]
                },
                CALL_ENQUEUE_RING: function(e) {
                    var t;
                    let {
                        channelId: n,
                        recipients: a
                    } = e;
                    f[n] = l.union(null !== (t = f[n]) && void 0 !== t ? t : [], null != a ? a : ["all"])
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    null == t && (f = {})
                }
            })
        },
        982108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
                    return g
                },
                isViewChannelSidebar: function() {
                    return R
                },
                default: function() {
                    return L
                }
            });
            var a = n("807403"),
                l = n("498225"),
                i = n("913144"),
                s = n("582713"),
                u = n("659500"),
                r = n("42203"),
                d = n("957255"),
                o = n("744983"),
                E = n("18494"),
                c = n("162771"),
                f = n("697218"),
                _ = n("49111"),
                N = n("724210"),
                T = n("809924");
            let g = "message_requests",
                C = !1,
                h = !1,
                S = !0,
                I = !1,
                A = {},
                p = {};

            function M(e) {
                if (null == e) return null;
                if ((0, N.isStaticChannelRoute)(e)) {
                    let t = c.default.getGuildId();
                    if (null == t) return null;
                    e = (0, N.buildGuildStaticChannelId)(e, t)
                }
                return e
            }

            function R(e) {
                return [s.SidebarType.VIEW_CHANNEL, s.SidebarType.VIEW_THREAD, s.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
            }

            function O(e) {
                let t = !1;
                I && (I = !1, t = !0);
                let n = M(E.default.getChannelId());
                return null != n && n in A && (delete A[n], t = !0), t && e ? e : !e
            }

            function m() {
                let e = !1;
                for (let t in A) {
                    let n = A[t];
                    if (n.type === s.SidebarType.VIEW_THREAD || n.type === s.SidebarType.VIEW_CHANNEL) {
                        let a = r.default.getChannel(n.channelId);
                        (null == a || !d.default.can(T.Permissions.VIEW_CHANNEL, a)) && (delete A[t], e = !0)
                    }
                }
                return e
            }

            function U() {
                if (I === o.default.isActive()) return !1;
                I = o.default.isActive()
            }
            class v extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n, a, l, i;
                        C = null !== (t = e.isMembersOpen) && void 0 !== t && t, h = null !== (n = e.isSummariesOpen) && void 0 !== n && n, S = null === (a = e.isProfileOpen) || void 0 === a || a, A = null !== (l = e.sidebars) && void 0 !== l ? l : {}, p = null !== (i = e.guildSidebars) && void 0 !== i ? i : {}
                    }
                    this.syncWith([o.default], U), this.syncWith([d.default], m)
                }
                getState() {
                    return {
                        isMembersOpen: C,
                        isSummariesOpen: h,
                        isProfileOpen: S,
                        sidebars: A,
                        guildSidebars: p
                    }
                }
                getSection(e, t) {
                    return I ? _.ChannelSections.SEARCH : null != (e = M(e)) && null != A[e] ? _.ChannelSections.SIDEBAR_CHAT : t && S ? _.ChannelSections.PROFILE : h ? _.ChannelSections.SUMMARIES : C ? _.ChannelSections.MEMBERS : _.ChannelSections.NONE
                }
                getSidebarState(e) {
                    return null == (e = M(e)) ? void 0 : A[e]
                }
                getGuildSidebarState(e) {
                    return null == e ? void 0 : p[e]
                }
                getCurrentSidebarChannelId(e) {
                    if (null == (e = M(e)) || I) return null;
                    let t = A[e];
                    return null == t ? null : t.type === s.SidebarType.VIEW_THREAD || t.type === s.SidebarType.VIEW_CHANNEL ? t.channelId : null
                }
                getCurrentSidebarMessageId(e) {
                    var t;
                    if (null == (e = M(e)) || I) return null;
                    let n = A[e];
                    return null == n ? null : n.type === s.SidebarType.VIEW_THREAD || n.type === s.SidebarType.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
                }
            }
            v.displayName = "ChannelSectionStore", v.persistKey = "ChannelSectionStore2";
            var L = new v(i.default, {
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    h && (h = O(h)), C = O(C)
                },
                PROFILE_PANEL_TOGGLE_SECTION: function() {
                    !S && u.ComponentDispatch.dispatch(_.ComponentActions.SEARCH_RESULTS_CLOSE), S = O(S)
                },
                CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
                    C && (C = O(C)), h = O(h)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        sidebarType: t,
                        baseChannelId: n,
                        channelId: a,
                        details: l
                    } = e;
                    I = !1;
                    let i = M(n);
                    return null != i && (A[i] = {
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
                    I = !1;
                    let i = M(a);
                    return null != i && (p[n] = {
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
                    I = !1;
                    let l = M(t);
                    null != l && (A[l] = {
                        type: s.SidebarType.CREATE_THREAD,
                        parentChannelId: t,
                        parentMessageId: n,
                        location: a
                    })
                },
                SIDEBAR_CLOSE: function(e) {
                    let {
                        baseChannelId: t
                    } = e, n = M(t);
                    null != n && delete A[n]
                },
                SIDEBAR_CLOSE_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return null != p[t] && (delete p[t], !0)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.id in A) return delete A[t.id], !0;
                    let n = !1;
                    for (let e in A) {
                        let a = A[e];
                        null != a && a.type === s.SidebarType.VIEW_CHANNEL && a.channelId === t.id && (delete A[e], n = !0)
                    }
                    return n
                },
                CHANNEL_SELECT: function() {
                    a.isMobile && C && (C = !1, h = !1)
                },
                THREAD_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    if (n.ownerId === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    let a = A[n.parent_id];
                    null != a && a.type === s.SidebarType.CREATE_THREAD && a.parentMessageId === n.id && (A[n.parent_id] = {
                        type: s.SidebarType.VIEW_THREAD,
                        channelId: n.id
                    })
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = A[t.parent_id];
                    if (null == n || n.type !== s.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
                    delete A[t.parent_id]
                }
            })
        },
        124948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("427964"),
                l = n.n(a),
                i = n("498225"),
                s = n("913144"),
                u = n("49978"),
                r = n("560208"),
                d = n("42203"),
                o = n("26989");
            let E = new u.default(o.default.isMember, (e, t) => {
                s.default.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            });

            function c() {
                E.reset()
            }

            function f(e, t) {
                return E.request(e, t), !1
            }

            function _(e, t) {
                return t.forEach(t => {
                    let {
                        author: n,
                        mentions: a
                    } = t;
                    null != n && f(e, n.id), null == a || a.forEach(t => f(e, t.id))
                }), !1
            }

            function N(e) {
                let {
                    channelId: t,
                    messages: n
                } = e, a = d.default.getChannel(t);
                return null != a && null != a.guild_id && _(a.guild_id, n)
            }
            class T extends i.default.Store {
                initialize() {
                    this.waitFor(d.default, o.default)
                }
                requestMember(e, t) {
                    f(e, t)
                }
            }
            T.displayName = "GuildMemberRequesterStore";
            var g = new T(s.default, {
                CONNECTION_CLOSED: c,
                CONNECTION_OPEN: c,
                CONNECTION_RESUMED: function() {
                    return E.requestUnacknowledged(), !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n,
                        notFound: a
                    } = e;
                    return n.forEach(e => {
                        E.acknowledge(t, e.user.id)
                    }), null != a && a.forEach(e => E.acknowledge(t, e)), !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        guildId: t,
                        messages: n
                    } = e;
                    return null != t && _(t, l.flatten(n))
                },
                LOCAL_MESSAGES_LOADED: N,
                LOAD_MESSAGES_SUCCESS: N,
                LOAD_MESSAGES_AROUND_SUCCESS: N,
                LOAD_PINNED_MESSAGES_SUCCESS: N,
                LOAD_RECENT_MENTIONS_SUCCESS: N,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e, a = (0, r.getMessagesFromGuildFeedFetch)(n);
                    return _(t, a)
                }
            })
        },
        247013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("498225"),
                l = n("173333"),
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
            var d = new r(i.default, {
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
                    return p
                }
            });
            var a, l = n("498225"),
                i = n("913144"),
                s = n("987317"),
                u = n("49671"),
                r = n("845579"),
                d = n("773336"),
                o = n("271938"),
                E = n("49111"),
                c = n("860604");
            let f = Date.now(),
                _ = !1,
                N = !1,
                T = !1,
                g = !1,
                C = !1;

            function h() {
                return T || g || (0, d.isAndroid)() && C
            }

            function S() {
                Date.now() - f > E.IDLE_DURATION || h() ? _ || i.default.dispatch({
                    type: "IDLE",
                    idle: !0,
                    idleSince: f
                }) : _ && i.default.dispatch({
                    type: "IDLE",
                    idle: !1
                }), Date.now() - f > Math.min(1e3 * r.AfkTimeout.getSetting(), E.IDLE_DURATION) || h() ? N || i.default.dispatch({
                    type: "AFK",
                    afk: !0
                }) : N && i.default.dispatch({
                    type: "AFK",
                    afk: !1
                })
            }!__OVERLAY__ && (d.isPlatformEmbedded && (null === (a = u.default) || void 0 === a ? void 0 : a.remotePowerMonitor) != null ? (! function e() {
                var t, n;
                let a = t => {
                    f = Math.max(Date.now() - t, f), S(), setTimeout(e, 1e4)
                };
                if ((null === (n = u.default) || void 0 === n ? void 0 : null === (t = n.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                    let e = u.default.remotePowerMonitor.getSystemIdleTimeMs();
                    e instanceof Promise ? e.then(a) : a(e)
                }
            }(), u.default.remotePowerMonitor.on("resume", () => {
                T = !1, I({})
            }), u.default.remotePowerMonitor.on("suspend", () => {
                T = !0, I({}), s.default.disconnect()
            }), u.default.remotePowerMonitor.on("lock-screen", () => {
                g = !0, I({})
            }), u.default.remotePowerMonitor.on("unlock-screen", () => {
                g = !1, I({})
            })) : setInterval(S, .25 * E.IDLE_DURATION));

            function I(e) {
                let {
                    timestamp: t,
                    type: n
                } = e, a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
                return (!a || !(t <= f)) && (f = a ? t : Date.now(), __OVERLAY__ ? i.default.dispatch({
                    type: "OVERLAY_SET_NOT_IDLE",
                    timestamp: f
                }) : S(), !1)
            }
            class A extends l.default.Store {
                isIdle() {
                    return _
                }
                isAFK() {
                    return N
                }
                getIdleSince() {
                    return _ ? f : null
                }
            }
            A.displayName = "IdleStore";
            var p = new A(i.default, {
                IDLE: function(e) {
                    _ = e.idle
                },
                AFK: function(e) {
                    N = e.afk
                },
                SPEAKING: function(e) {
                    let {
                        userId: t,
                        speakingFlags: n
                    } = e;
                    return n !== c.SpeakingFlags.NONE && t === o.default.getId() && I({}), !1
                },
                APP_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e;
                    return C = t === E.AppStates.BACKGROUND, f = Date.now(), S(), !1
                },
                OVERLAY_SET_NOT_IDLE: I,
                CHANNEL_SELECT: I,
                VOICE_CHANNEL_SELECT: I,
                WINDOW_FOCUS: I,
                OVERLAY_INITIALIZE: I,
                OVERLAY_SET_INPUT_LOCKED: I,
                USER_SETTINGS_PROTO_UPDATE: I
            })
        },
        660478: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                shouldBadgeMessage: function() {
                    return eO
                },
                default: function() {
                    return e$
                }
            });
            var l, i, s = n("161179"),
                u = n.n(s),
                r = n("377849"),
                d = n.n(r),
                o = n("498225"),
                E = n("990746"),
                c = n("638800"),
                f = n("287088"),
                _ = n("913144"),
                N = n("716241"),
                T = n("191145"),
                g = n("203288"),
                C = n("358269"),
                h = n("605250"),
                S = n("398604"),
                I = n("811400"),
                A = n("21121"),
                p = n("288518"),
                M = n("415435"),
                R = n("486503"),
                O = n("406297"),
                m = n("136511"),
                U = n("342176"),
                v = n("514933"),
                L = n("512395"),
                D = n("614305"),
                y = n("689275"),
                P = n("755624"),
                G = n("526311"),
                H = n("374363"),
                F = n("233069"),
                Y = n("845078"),
                V = n("718517"),
                k = n("568734"),
                b = n("449008"),
                w = n("35468"),
                x = n("773336"),
                B = n("299039"),
                K = n("271938"),
                W = n("982108"),
                q = n("42203"),
                Q = n("162805"),
                z = n("760190"),
                X = n("341542"),
                j = n("305961"),
                Z = n("603699"),
                J = n("377253"),
                $ = n("957255"),
                ee = n("27618"),
                et = n("18494"),
                en = n("282109"),
                ea = n("697218"),
                el = n("471671"),
                ei = n("49111"),
                es = n("724210"),
                eu = n("745049"),
                er = n("627869"),
                ed = n("133335");
            let eo = new h.default("ReadStateStore");
            __OVERLAY__ && (a = n("901165").default);
            let eE = ei.BasicPermissions.VIEW_CHANNEL | ei.BasicPermissions.READ_MESSAGE_HISTORY,
                ec = null,
                ef = null,
                e_ = null,
                eN = !1,
                eT = [],
                eg = !1,
                eC = null,
                eh = {};

            function eS() {
                return B.default.fromTimestamp(Date.now() - 2592e6)
            }
            let eI = 0,
                eA = 0,
                ep = null;

            function eM() {
                eI = Date.now() - 6048e5, eA = Date.now() - 2592e5, clearTimeout(ep), ep = setTimeout(() => {
                    _.default.dispatch({
                        type: "DECAY_READ_STATES"
                    })
                }, 36e5)
            }

            function eR(e) {
                if (null == e) return 0;
                let t = Date.parse(e);
                return isNaN(t) ? 0 : t
            }

            function eO(e, t) {
                let n = q.default.getChannel(e.channel_id);
                return !(null == n || ee.default.isBlocked(e.author.id)) && (!!((0, O.default)({
                    message: e,
                    userId: t.id,
                    suppressEveryone: en.default.isSuppressEveryoneEnabled(n.guild_id),
                    suppressRoles: en.default.isSuppressRolesEnabled(n.guild_id)
                }) || em(n)) || !1)
            }

            function em(e) {
                return null != e && e.isPrivate() && !en.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
            }
            async function eU() {
                if (0 === eT.length) {
                    eg = !1;
                    return
                }
                eg = !0;
                let e = eT.splice(0, 100);
                await ev(() => E.default.post({
                    url: ei.Endpoints.BULK_ACK,
                    body: {
                        read_states: e
                    },
                    oldFormErrors: !0
                })), await (0, c.timeoutPromise)(1e3), eU()
            }
            async function ev(e) {
                let t = K.default.getId();
                for (let n = 0; n < 3; n++) try {
                    return await e()
                } catch (e) {
                    if (eo.error("", e), n + 1 < 3 && (await (0, c.timeoutPromise)((n + 1) * 2e3), await w.default.awaitOnline(), t !== K.default.getId())) return Promise.reject(Error("User changed."))
                }
            }

            function eL(e) {
                if (e.type !== ed.ReadStateTypes.CHANNEL) return !1;
                let t = q.default.getChannel(e.channelId),
                    n = null != t && t.isForumPost();
                if (Z.default.isIdle() || !e.canTrackUnreads()) return !1;
                if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
                    let t = eh[e.channelId],
                        n = null != t && el.default.isFocused(t),
                        l = null != a && a.isInstanceFocused() && a.isPinned(ei.OverlayWidgets.TEXT);
                    if (!n && !l) return !1
                }
                if (n && !e._persisted) return !0;
                let l = e.hasUnreadOrMentions();
                if (!l || (null == t ? void 0 : t.isForumLikeChannel()) === !0) return !1;
                let i = n && !e._isJoinedThread;
                if (!i && !Q.default.isAtBottom(e.channelId)) return !1;
                let s = T.default.getLayout(e.channelId),
                    u = T.default.getChatOpen(e.channelId);
                if (!u && (s === ei.ChannelLayouts.NO_CHAT || s === ei.ChannelLayouts.FULL_SCREEN) || null == eh[e.channelId]) return !1;
                let r = J.default.getMessages(e.channelId);
                return !(null == r || !r.ready || r.loadingMore || (0, D.default)() && !u) && !0
            }(l = i || (i = {}))[l.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", l[l.IS_THREAD = 2] = "IS_THREAD";
            class eD {
                static forEach(e) {
                    for (let n of Object.keys(eD._readStates)) {
                        var t;
                        let a = null !== (t = eD._readStates[parseInt(n)]) && void 0 !== t ? t : {};
                        for (let t of Object.keys(a))
                            if (!1 === e(a[t])) break
                    }
                }
                static get(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL,
                        a = null === (t = eD._readStates[n]) || void 0 === t ? void 0 : t[e];
                    return null == a && (a = new eD(e, n), null == eD._readStates[n] && (eD._readStates[n] = {}), eD._readStates[n][e] = a), a
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
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return null === (t = eD._readStates[n]) || void 0 === t ? void 0 : t[e]
                }
                static getMentionChannelIds() {
                    let e = [];
                    for (let t of eD._mentionChannels) {
                        let n = eD.getIfExists(t);
                        null != n && n.canHaveMentions() ? e.push(t) : eD._mentionChannels.delete(t)
                    }
                    return e
                }
                static getValue(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        l = arguments.length > 3 ? arguments[3] : void 0,
                        i = null === (t = eD._readStates[n]) || void 0 === t ? void 0 : t[e];
                    return null == i ? l : a(i)
                }
                static clear(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return (null === (t = eD._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eD._readStates[n][e], eD._mentionChannels.delete(e), !0)
                }
                static clearAll() {
                    eD._readStates = {}, eD._mentionChannels.clear()
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
                        _lastMessageId: d,
                        _lastMessageTimestamp: o,
                        _ackMessageId: E,
                        _ackMessageTimestamp: c,
                        ackPinTimestamp: f,
                        isManualAck: _,
                        lastPinTimestamp: N,
                        _oldestUnreadMessageId: T,
                        oldestUnreadMessageIdStale: g,
                        estimated: C,
                        _mentionCount: h,
                        flags: S,
                        lastViewed: I
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
                        _lastMessageId: d,
                        _lastMessageTimestamp: o,
                        _ackMessageId: E,
                        _ackMessageTimestamp: c,
                        ackPinTimestamp: f,
                        isManualAck: _,
                        lastPinTimestamp: N,
                        _oldestUnreadMessageId: T,
                        oldestUnreadMessageIdStale: g,
                        estimated: C,
                        _mentionCount: h,
                        flags: S,
                        lastViewed: I
                    };
                    let A = {
                        channelId: t,
                        type: n,
                        _guildId: a,
                        _persisted: u,
                        _lastMessageId: d,
                        _lastMessageTimestamp: o,
                        _ackMessageId: E,
                        _ackMessageTimestamp: c,
                        ackPinTimestamp: f,
                        lastPinTimestamp: N,
                        _mentionCount: h,
                        flags: S
                    };
                    return null != I && I > 0 && (A.lastViewed = I), l && (A._isThread = l, A._isActiveThread = i, A._isJoinedThread = s), A
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
                        loadedMessages: d,
                        _lastMessageId: o,
                        _lastMessageTimestamp: E,
                        _ackMessageId: c,
                        _ackMessageTimestamp: f,
                        ackPinTimestamp: _,
                        isManualAck: N,
                        lastPinTimestamp: T,
                        _oldestUnreadMessageId: g,
                        oldestUnreadMessageIdStale: C,
                        estimated: h,
                        _unreadCount: S,
                        _mentionCount: I,
                        flags: A,
                        lastViewed: p
                    } = e;
                    this.channelId = t, this.type = null != n ? n : ed.ReadStateTypes.CHANNEL, this._guildId = a, this._isThread = null != l && l, null != i ? (this._isActiveThread = i, this._isJoinedThread = i) : (this._isActiveThread = null != s && s, this._isJoinedThread = null != u && u), this._persisted = !1 !== r, this.loadedMessages = null != d && d, this._lastMessageId = o, this._lastMessageTimestamp = E, this._ackMessageId = c, this._ackMessageTimestamp = f, this.ackPinTimestamp = _, this.isManualAck = null != N && N, this.lastPinTimestamp = T, this._oldestUnreadMessageId = g, this.oldestUnreadMessageIdStale = null != C && C, this.estimated = null != h && h, this._unreadCount = null != S ? S : 0, this._mentionCount = I, this.flags = A, this.lastViewed = p, eD._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eD._mentionChannels.add(this.channelId)
                }
                incrementGuildUnreadsSentinel() {
                    null != this._guildId && eD.getGuildSentinels(this._guildId).unreadsSentinel++
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
                    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eD._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eD._mentionChannels.add(this.channelId)
                }
                guessAckMessageId() {
                    let e = J.default.getMessages(this.channelId);
                    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
                    if (!this.hasMentions()) return this.lastMessageId;
                    let t = null,
                        n = this.mentionCount,
                        a = ea.default.getCurrentUser();
                    return e.forEach(e => {
                        if (n > 0 && e.author.id !== (null == a ? void 0 : a.id)) --n;
                        else if (0 === n) return t = e.id, !1
                    }, this, !0), t
                }
                get guildId() {
                    if (null != this._guildId) return this._guildId;
                    let e = q.default.getChannel(this.channelId);
                    return this._guildId = null != e ? e.getGuildId() : null
                }
                isPrivate() {
                    if (this.type !== ed.ReadStateTypes.CHANNEL) return !1;
                    let e = q.default.getChannel(this.channelId);
                    return null != e && e.isPrivate()
                }
                rebuildChannelState(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = arguments.length > 2 ? arguments[2] : void 0;
                    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, a && (this.mentionCount = 0), this.hasUnread()) {
                        let e = ea.default.getCurrentUser(),
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
                            B.default.extractTimestamp(n.id) > t ? (this.unreadCount++, a && eO(n, e) && this.mentionCount++, s = null != s ? s : n.id) : i = !0
                        }), this.estimated = !u.hasPresent() || !(l || i) && u.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s
                    }
                    null != l && (this.mentionCount = l)
                }
                handleGuildEventRemoval(e, t) {
                    var n;
                    if (B.default.compare(this.ackMessageId, t) >= 0) return;
                    let a = S.default.getGuildScheduledEventsForGuild(e),
                        l = this.getAckTimestamp();
                    if (isNaN(l)) return;
                    let i = null !== (n = this._ackMessageId) && void 0 !== n ? n : B.default.fromTimestamp(l),
                        s = null,
                        u = 0;
                    a.forEach(e => {
                        (0, S.isEventUpcoming)(e) && (B.default.compare(e.id, s) > 0 && (s = e.id), B.default.compare(e.id, i) > 0 && u++)
                    }), this.lastMessageId = s, this.mentionCount = u
                }
                canTrackUnreads() {
                    if (this.type !== ed.ReadStateTypes.CHANNEL) return !0;
                    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
                    let e = q.default.getBasicChannel(this.channelId);
                    return null != e && ("basicPermissions" in e ? Y.default.has(e.basicPermissions, ei.BasicPermissions.VIEW_CHANNEL) : !g.default.isChannelGated(this.guildId, this.channelId) || $.default.can(ei.Permissions.VIEW_CHANNEL, e))
                }
                canBeUnread() {
                    return !(this._isThread && !this._isJoinedThread || (0, M.isMessageRequestOrSpamRequest)(this.channelId, [p.default, R.default]) || !this._isThread && (0, L.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < eI || !en.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
                }
                canHaveMentions() {
                    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, M.isMessageRequestOrSpamRequest)(this.channelId, [p.default, R.default]) || (0, L.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < eI) && this.canTrackUnreads()
                }
                getGuildChannelUnreadState(e, t, n, a, l, i) {
                    if (t && (this._lastMessageTimestamp < eI || !en.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    };
                    if ("basicPermissions" in e) {
                        if (!Y.default.has(e.basicPermissions, ei.BasicPermissions.VIEW_CHANNEL)) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    } else if (g.default.isChannelGated(this.guildId, this.channelId) && !$.default.can(ei.Permissions.VIEW_CHANNEL, e)) return {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    };
                    if (l || i) return {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: !1
                    };
                    let s = (0, I.calculateUnreadSetting)({
                            isExperimentEnabled: n,
                            hasUserEnabledGuildUnreads: en.default.isGuildUnreadSettingEnabled(e.guild_id),
                            channelNotificationOverrides: a[e.id],
                            categoryNotificationOverrides: null == e.parent_id ? null : a[e.parent_id],
                            unreadSetting: en.default.getChannelUnreadSetting(e.guild_id, e.id),
                            hasJoinedThread: P.default.hasJoined(e.id)
                        }),
                        u = !1;
                    return u = s === er.UserUnreadSettings.NULL || s === er.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS ? this.mentionCount > 0 || (0, C.hasUnreadChannelHighlights)(this.channelId, this._ackMessageId) : this.getAckTimestamp() < this._lastMessageTimestamp, {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: u
                    }
                }
                hasUnread() {
                    return this.getAckTimestamp() < this._lastMessageTimestamp
                }
                hasNotableUnread() {
                    let e = q.default.getBasicChannel(this.channelId),
                        t = null != e ? (0, I.getGuildUnreadSetting)(e) : er.UserUnreadSettings.ALL_MESSAGES;
                    return t === er.UserUnreadSettings.NULL || t === er.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS ? (0, C.getUnreadChannelHighlights)(this.channelId, this._ackMessageId).length > 0 || this.hasMentions() : this.getAckTimestamp() < this._lastMessageTimestamp
                }
                hasRecentlyVisitedAndRead() {
                    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eA && H.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
                    if (this.type !== ed.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
                    if (null == e) {
                        if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                        this._persisted = !0, ev(() => E.default.post({
                            url: ei.Endpoints.PINS_ACK(this.channelId),
                            oldFormErrors: !0
                        }))
                    }
                    let t = eR(e);
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
                            section: ei.AnalyticsSections.CHANNEL
                        },
                        trackAnalytics: u = !0
                    } = e;
                    if (!this._shouldAck(l, n, i) || !l && !this.canTrackUnreads()) return !1;
                    let r = this.hasMentions();
                    return this.estimated = !1, this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, function(e) {
                        if (null == e) return;
                        let t = eD.get(e);
                        if (t.type !== ed.ReadStateTypes.CHANNEL) return;
                        let n = q.default.getChannel(t.channelId);
                        if (null == n || !n.isForumPost() || null == n.parent_id) return;
                        let a = n.parent_id,
                            l = eD.get(a);
                        y.default.hasLoaded(n.guild_id) && Object.keys(y.default.getThreadsForParent(n.guild_id, a)).every(e => eJ.hasOpenedThread(e) || 0 > B.default.compare(e, l.ackMessageId)) && l.ack({})
                    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
                        this.type === ed.ReadStateTypes.CHANNEL ? this._ack(s, u) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
                    }, r || a ? 0 : 3e3)), this.outgoingAck = t), !0)
                }
                clearOutgoingAck() {
                    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
                }
                _shouldAck(e, t, n) {
                    var a;
                    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== ed.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (a = q.default.getChannel(this.channelId)) || void 0 === a ? void 0 : a.isForumLikeChannel()))) || !1
                }
                _ack(e, t) {
                    let {
                        outgoingAck: n
                    } = this;
                    if (null == n) return;
                    let a = K.default.getId(),
                        l = e_;
                    this._persisted = !0;
                    let i = this.recalculateFlags(),
                        s = i === this.flags ? void 0 : i;
                    ev(() => E.default.post({
                        url: ei.Endpoints.MESSAGE_ACK(this.channelId, n),
                        body: {
                            token: e_,
                            last_viewed: this.lastViewed,
                            flags: s
                        },
                        oldFormErrors: !0
                    })).then(n => {
                        if (null != n && (e_ === l && a === K.default.getId() && (e_ = n.body.token), _.default.dispatch({
                                type: "MESSAGE_ACKED"
                            }), t)) {
                            let t = q.default.getChannel(this.channelId);
                            (0, N.trackWithMetadata)(ei.AnalyticEvents.ACK_MESSAGES, {
                                channel_id: this.channelId,
                                guild_id: null == t ? void 0 : t.getGuildId(),
                                location: e
                            })
                        }
                    })
                }
                recalculateFlags() {
                    if (this.type !== ed.ReadStateTypes.CHANNEL) return;
                    let e = q.default.getChannel(this.channelId);
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
                            case ed.ReadStateTypes.GUILD_HOME:
                            case ed.ReadStateTypes.GUILD_EVENT:
                            case ed.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                e = ei.Endpoints.GUILD_FEATURE_ACK(n, t, a);
                                break;
                            case ed.ReadStateTypes.NOTIFICATION_CENTER:
                                e = ei.Endpoints.USER_NON_CHANNEL_ACK(t, a);
                                break;
                            default:
                                return
                        }
                        this._persisted = !0, ev(() => E.default.post({
                            url: e,
                            body: {},
                            oldFormErrors: !0
                        }))
                    }
                }
                delete() {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        n = q.default.getBasicChannel(this.channelId);
                    eo.log("Deleting ReadState", this.channelId, this.type, {
                        remote: t,
                        persisted: this._persisted,
                        channelMissing: null == n,
                        isOld: eY(this, eS()),
                        validType: null != n && F.ALL_CHANNEL_TYPES.has(n.type),
                        readableType: null != n && (0, F.isReadableType)(n.type),
                        oldThreadCutoff: eS(),
                        mentionCount: this.mentionCount,
                        channelId: this.channelId,
                        ackMessageId: this._ackMessageId,
                        lastMessageId: this._lastMessageId
                    }), t && this._persisted && E.default.delete({
                        url: ei.Endpoints.CHANNEL_ACK(this.channelId),
                        body: {
                            version: 2,
                            read_state_type: this.type
                        },
                        oldFormErrors: !0
                    }), null === (e = eD._readStates[this.type]) || void 0 === e || delete e[this.channelId], eD._mentionChannels.delete(this.channelId)
                }
                shouldDeleteReadState(e) {
                    if (0 !== X.default.totalUnavailableGuilds) return !1;
                    if (null != this.type && this.type !== ed.ReadStateTypes.CHANNEL) return ! function(e) {
                        switch (e.type) {
                            case ed.ReadStateTypes.GUILD_HOME:
                            case ed.ReadStateTypes.GUILD_EVENT:
                            case ed.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                return null != j.default.getGuild(e.channelId);
                            case ed.ReadStateTypes.NOTIFICATION_CENTER:
                                var t;
                                return (null === (t = ea.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                            default:
                                return !0
                        }
                    }(this);
                    let t = q.default.getBasicChannel(this.channelId);
                    if (null == t) return !!eY(this, e) || !1;
                    return !!F.ALL_CHANNEL_TYPES.has(t.type) && (!(0, F.isReadableType)(t.type) || !(0, F.isPrivate)(t.type) && (!!(F.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
                        let a = e.guildId,
                            l = null != a && y.default.isActive(a, t.parent_id, e.channelId);
                        return !l && eY(e, n)
                    }(this, t, e)) || !!(this.mentionCount > 0) && !$.default.canBasicChannel(eE, t) || !1))
                }
                getAckTimestamp() {
                    let e, t;
                    if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
                    if (this._isThread) return this._ackMessageTimestamp = eH(this.guildId, this.channelId), this._ackMessageId = B.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
                    if (this.type === ed.ReadStateTypes.GUILD_EVENT || this.type === ed.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = j.default.getGuild(this.channelId);
                    else if ((0, es.isStaticChannelRoute)(this.channelId)) e = j.default.getGuild(this.guildId);
                    else {
                        let t = q.default.getChannel(this.channelId);
                        if (null != t) {
                            let n = t.getGuildId();
                            e = j.default.getGuild(n)
                        }
                    }
                    return t = null != e ? eF(e) : B.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
                }
                get oldestUnreadTimestamp() {
                    return null != this.oldestUnreadMessageId ? B.default.extractTimestamp(this.oldestUnreadMessageId) : 0
                }
                syncThreadSettings() {
                    this._isThread = !0;
                    let e = q.default.getChannel(this.channelId);
                    if (null == e) return eo.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
                    let t = this.guildId,
                        n = null != t && y.default.isActive(t, e.parent_id, this.channelId),
                        a = P.default.hasJoined(this.channelId);
                    return (this._isActiveThread !== n || this._isJoinedThread !== a) && (this._isActiveThread = n, this._isJoinedThread = a, !0)
                }
                recordLastViewedTime() {
                    let e = Math.ceil((Date.now() - B.DISCORD_EPOCH) / V.default.Millis.DAY);
                    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
                        force: !0,
                        trackAnalytics: !1
                    }))
                }
                constructor(e, t = ed.ReadStateTypes.CHANNEL) {
                    this.type = ed.ReadStateTypes.CHANNEL, this.outgoingAckTimer = null, this.ackMessageIdAtChannelSelect = null, this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
                }
            }

            function ey(e) {
                e.forEach(e => {
                    if ((0, F.isReadableType)(e.type)) {
                        let t = eD.get(e.id);
                        t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(es.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), F.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
                    }
                })
            }

            function eP(e) {
                e.forEach(e => {
                    if ((0, F.isReadableType)(e.type)) {
                        var t;
                        let n = eD.get(e.id);
                        n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eR(e.last_pin_timestamp), n._isResourceChannel = (0, k.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, es.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), F.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
                    }
                })
            }

            function eG(e) {
                (function(e) {
                    var t;
                    null === (t = e.threads) || void 0 === t || t.forEach(t => {
                        if (!F.ALL_CHANNEL_TYPES.has(t.type)) return;
                        let n = eD.get(t.id);
                        n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = B.default.fromTimestamp(eH(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eH(e.id, t.id))
                    })
                })(e),
                function(e) {
                    var t, n;
                    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eD.getIfExists(e.id, ed.ReadStateTypes.GUILD_EVENT)) return;
                    let a = eD.get(e.id, ed.ReadStateTypes.GUILD_EVENT);
                    a._guildId = e.id;
                    let l = 0,
                        i = null,
                        s = null !== (n = a._ackMessageId) && void 0 !== n ? n : B.default.fromTimestamp(a.getAckTimestamp());
                    e.guild_scheduled_events.forEach(e => {
                        B.default.compare(e.id, i) > 0 && (i = e.id), B.default.compare(e.id, s) > 0 && l++
                    }), a.lastMessageId = i, a.mentionCount = l
                }(e),
                function(e) {
                    let t = eD.get(e.id, ed.ReadStateTypes.GUILD_HOME);
                    t.lastMessageId = B.default.fromTimestamp(d(Date.now()).subtract(24, "h").valueOf())
                }(e),
                function(e) {
                    let t = e.properties.latest_onboarding_question_id;
                    if (null == t) return;
                    let n = eD.get(e.id, ed.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    n._guildId = e.id, n.lastMessageId = t
                }(e)
            }
            eD._guildReadStateSentinels = {}, eD._readStates = {}, eD._mentionChannels = new Set;

            function eH(e, t) {
                var n, a, l;
                let i = q.default.getChannel(t),
                    s = j.default.getGuild(null != e ? e : null == i ? void 0 : i.guild_id),
                    u = (null == i ? void 0 : i.isForumPost()) ? 0 : eF(s),
                    r = (null !== (l = null === (n = P.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== l ? l : 0) - 5e3,
                    d = null == i ? void 0 : null === (a = i.threadMetadata) || void 0 === a ? void 0 : a.archiveTimestamp,
                    o = null != d ? new Date(d).getTime() - 1 : 0,
                    E = Math.max(r, o);
                return E <= 0 && (E = B.default.extractTimestamp(t) - 1), isNaN(u) ? E : Math.max(u, E)
            }

            function eF(e) {
                if (null != e && null != e.joinedAt) {
                    if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
                    if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
                    else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
                }
                return Date.now()
            }

            function eY(e, t) {
                return !!(e.mentionCount > 0) || !(B.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && B.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && B.default.compare(e._lastMessageId, t) > 0) && !0
            }

            function eV(e) {
                if (null != e) {
                    let t = eD.get(e);
                    if (eL(t)) return t.ack({})
                }
                return !1
            }

            function ek() {
                null != eC && clearTimeout(eC)
            }

            function eb(e) {
                if (null != e.channelUpdates) {
                    var t;
                    ey(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
                }
                if (null != e.channelTimestampUpdates)
                    for (let t of e.channelTimestampUpdates) {
                        let e = eD.get(t.id);
                        null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eR(t.last_pin_timestamp))
                    }
            }

            function ew(e) {
                let {
                    channelId: t
                } = e, n = eD.get(t);
                n.rebuildChannelState()
            }

            function ex(e) {
                let {
                    threads: t
                } = e;
                eP(t)
            }

            function eB(e) {
                let t = ea.default.getCurrentUser();
                return null != e.creator_id && null != t && e.creator_id === t.id
            }

            function eK(e) {
                let {
                    channel: t
                } = e;
                return eD.clear(t.id)
            }

            function eW() {
                let e = W.default.getCurrentSidebarChannelId(ec),
                    t = !1;
                return ef !== e ? (t = eQ(ef), ef = e) : t = eV(e) || t, t
            }

            function eq(e) {
                if (null == e) return;
                let t = eD.get(e);
                t.isManualAck = !1
            }

            function eQ(e) {
                if (null == e) return !1;
                let t = eD.get(e);
                return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
            }

            function ez(e) {
                let {
                    channelId: t,
                    messageId: n,
                    manual: a,
                    newMentionCount: l
                } = e, i = eD.get(t);
                return a ? (i.rebuildChannelState(n, !0, l), !0) : n !== i._ackMessageId && i.ack({
                    messageId: n,
                    local: !0
                })
            }

            function eX(e) {
                let {
                    id: t,
                    ackType: n,
                    ackedId: a,
                    local: l
                } = e;
                return ej(t, n, a, l)
            }

            function ej(e, t, n, a) {
                var l;
                let i = eD.get(e, t);
                return n !== i.ackMessageId && i.lastMessageId !== i.ackMessageId && (null != i.lastMessageId || 0 !== i.mentionCount) && (n = null !== (l = null != n ? n : i.lastMessageId) && void 0 !== l ? l : B.default.fromTimestamp(i.getAckTimestamp()), i.ack({
                    messageId: n,
                    local: null == a || a
                }))
            }
            class eZ extends o.default.Store {
                initialize() {
                    this.waitFor(Q.default, ea.default, j.default, X.default, q.default, et.default, J.default, $.default, T.default, y.default, P.default, W.default, S.default, z.default, g.default, en.default, el.default, m.default, p.default, H.default, R.default, Z.default), this.syncWith([W.default], eW)
                }
                getReadStatesByChannel() {
                    var e;
                    return null !== (e = eD._readStates[ed.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
                }
                getForDebugging(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getIfExists(e, t)
                }
                getNotifCenterReadState(e) {
                    return eD._readStates[ed.ReadStateTypes.NOTIFICATION_CENTER][e]
                }
                hasUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
                }
                hasNotableUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canBeUnread() && e.hasNotableUnread(), !1)
                }
                hasTrackedUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
                }
                isForumPostUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.isForumPostUnread(), !1)
                }
                hasRelevantUnread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return this.hasNotableUnread(e.id, t) && en.default.isChannelRelevant(e)
                }
                getUnreadCount(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
                }
                getMentionCount(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
                }
                getGuildChannelUnreadState(e, t, n, a, l, i) {
                    return eD.getValue(e.id, ed.ReadStateTypes.CHANNEL, s => s.getGuildChannelUnreadState(e, t, n, a, l, i), {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    })
                }
                hasRecentlyVisitedAndRead(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
                }
                ackMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
                }
                getTrackedAckMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
                }
                lastMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.lastMessageId, null)
                }
                lastMessageTimestamp(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.lastMessageTimestamp, 0)
                }
                lastPinTimestamp(e) {
                    return eD.getValue(e, ed.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
                }
                getOldestUnreadMessageId(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
                }
                getOldestUnreadTimestamp(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
                }
                isEstimated(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e.estimated, !1)
                }
                hasOpenedThread(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed.ReadStateTypes.CHANNEL;
                    return eD.getValue(e, t, e => e._persisted, !1)
                }
                hasUnreadPins(e) {
                    return eD.getValue(e, ed.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
                }
                isNewForumThread(e, t, n) {
                    let a = eD.get(t),
                        l = eD.get(e);
                    if (!0 === l._persisted || null == a.ackMessageIdAtChannelSelect || 0 >= B.default.compare(e, a.ackMessageIdAtChannelSelect)) return !1;
                    let i = eF(n),
                        s = B.default.extractTimestamp(e);
                    return s > i
                }
                getAllReadStates(e) {
                    let t = [];
                    return eD.forEach(n => {
                        switch (n.type) {
                            case ed.ReadStateTypes.GUILD_HOME:
                            case ed.ReadStateTypes.GUILD_EVENT:
                            case ed.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
                                let a = j.default.getGuild(n.channelId);
                                null != a && t.push(n.serialize(e));
                                break;
                            case ed.ReadStateTypes.NOTIFICATION_CENTER:
                                var l;
                                let i = null === (l = ea.default.getCurrentUser()) || void 0 === l ? void 0 : l.id;
                                i === n.channelId && t.push(n.serialize(e));
                                break;
                            default:
                                t.push(n.serialize(e))
                        }
                    }), t
                }
                getGuildUnreadsSentinel(e) {
                    return eD.getGuildSentinels(e).unreadsSentinel
                }
                getMentionChannelIds() {
                    return eD.getMentionChannelIds()
                }
            }
            eZ.displayName = "ReadStateStore";
            let eJ = new eZ(_.default, {
                CONNECTION_OPEN: function(e) {
                    var t, n;
                    let {
                        guilds: a,
                        relationships: l,
                        initialPrivateChannels: i,
                        readState: s
                    } = e;
                    eM(), e_ = null, !eN && !s.partial && eD.clearAll(), eN = !1, s.entries.forEach(e => {
                        var t, n, a;
                        let l = null !== (t = e.read_state_type) && void 0 !== t ? t : ed.ReadStateTypes.CHANNEL;
                        if (l !== ed.ReadStateTypes.CHANNEL) {
                            ;
                            e = {
                                id: (a = e).id,
                                read_state_type: a.read_state_type,
                                mention_count: a.badge_count,
                                last_message_id: a.last_acked_id
                            }
                        }
                        let i = eD.get(e.id, l);
                        i._persisted = !0, i._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, i.flags = e.flags, i.lastViewed = e.last_viewed;
                        let s = q.default.getBasicChannel(e.id);
                        null != s && (0, F.isThread)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? i.ackMessageId = B.default.fromTimestamp(eH(s.guild_id, s.id)) : i.ackMessageId = e.last_message_id, i.ackPinTimestamp = eR(e.last_pin_timestamp), eD._mentionChannels.delete(i.channelId), i._mentionCount > 0 && i.canHaveMentions() && eD._mentionChannels.add(i.channelId)
                    }), eD.resetGuildSentinels();
                    let u = null === (t = ea.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null != u) {
                        let e = eD.get(u, ed.ReadStateTypes.NOTIFICATION_CENTER);
                        e.lastMessageId = B.default.fromTimestamp(Date.now())
                    }
                    for (let e of (function(e) {
                            let t = ea.default.getCurrentUser();
                            if (!(0, U.inNotificationCenterEnabled)() || null == t) return 0;
                            let n = eD.get(t.id, ed.ReadStateTypes.NOTIFICATION_CENTER);
                            e.forEach(e => {
                                if (null == e.since || e.type !== ei.RelationshipTypes.PENDING_INCOMING) return;
                                let t = new Date(e.since).getTime(),
                                    a = null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0;
                                a < t && (n.mentionCount++, n.lastMessageId = B.default.fromTimestamp(t))
                            })
                        }(l), ey(i), a)) ey(null !== (n = e.channels) && void 0 !== n ? n : []), eb(e), eG(e);
                    ek(), eC = setTimeout(() => (function(e) {
                        let t = eS();
                        for (let a of e) {
                            var n;
                            let e = null !== (n = a.read_state_type) && void 0 !== n ? n : ed.ReadStateTypes.CHANNEL,
                                l = eD.get(a.id, e);
                            l.shouldDeleteReadState(t) && l.delete()
                        }
                    })(s.entries), 1e4)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        lazyPrivateChannels: t
                    } = e;
                    ey(t)
                },
                LOGOUT: ek,
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        readStates: t,
                        selectedChannelId: n
                    } = e;
                    eM(), e_ = null, ec = n, ef = W.default.getCurrentSidebarChannelId(ec), eD.clearAll(), t.forEach(e => {
                        let t = eD.get(e.channelId);
                        t.deserializeForOverlay(e), t.type === ed.ReadStateTypes.CHANNEL && t.rebuildChannelState()
                    })
                },
                CACHE_LOADED: function(e) {
                    let {
                        readStates: t
                    } = e;
                    eN = !0, eM(), t.forEach(e => {
                        var t;
                        let n = null !== (t = e.type) && void 0 !== t ? t : ed.ReadStateTypes.CHANNEL;
                        e.type = n, null == eD._readStates[n] && (eD._readStates[n] = {}), eD._readStates[n][e.channelId] = (0, f.dangerouslyCast)(e, eD)
                    })
                },
                GUILD_CREATE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, a = eS();
                    eD.forEach(e => {
                        e.guildId === n.id && e.shouldDeleteReadState(a) && e.delete(!1)
                    }), ey(null !== (t = n.channels) && void 0 !== t ? t : []), eb(n), eG(n)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        isAfter: n,
                        messages: a
                    } = e, l = eD.get(t);
                    l.loadedMessages = !0;
                    let i = J.default.getMessages(t);
                    null != i && (a.length > 0 && 1 === B.default.compare(a[0].id, l.ackMessageId) && 0 === l.unreadCount ? l.rebuildChannelState() : i.hasPresent() || i.jumpTargetId === l.ackMessageId ? l.rebuildChannelState() : n && null != l.ackMessageId && i.has(l.ackMessageId, !0) && (l.unreadCount += a.length, null == l.oldestUnreadMessageId && l.rebuildChannelState())), eP(a.map(e => e.thread).filter(b.isNotNullish))
                },
                MESSAGE_CREATE: function(e) {
                    let t, n, {
                            channelId: l,
                            message: i,
                            isPushNotification: s
                        } = e,
                        u = eD.get(l);
                    u.lastMessageId = i.id;
                    let r = ea.default.getCurrentUser(),
                        d = q.default.getBasicChannel(l);
                    if (null != i.author && null != r && i.author.id === r.id) return null != u.outgoingAck && u.clearOutgoingAck(), ez({
                        channelId: l,
                        messageId: i.id,
                        manual: !1
                    });
                    let o = (0, A.getRootNavigationRefIfInExperiment)();
                    if ((null == o ? void 0 : o.isReady()) === !0) {
                        let e = o.getCurrentRoute(),
                            n = T.default.getChatOpen(u.channelId);
                        n ? t = u.channelId : (null == e ? void 0 : e.name) === "channel" && (t = e.params.channelId)
                    } else null == o && (t = et.default.getChannelId(), n = W.default.getCurrentSidebarChannelId(t));
                    let E = t === l || n === l;
                    if (E && eL(u) && !s || null != a && a.isInstanceFocused() && E && a.isInstanceUILocked() && a.isPinned(ei.OverlayWidgets.TEXT)) return u.ack({
                        messageId: i.id
                    });
                    (null == u.oldestUnreadMessageId || u.oldestUnreadMessageIdStale) && (u.oldestUnreadMessageId = i.id), u.unreadCount++;
                    let c = null != i.author && ee.default.isBlocked(i.author.id) || i.type === ei.MessageTypes.RECIPIENT_REMOVE && (null == d ? void 0 : d.type) === ei.ChannelTypes.GROUP_DM;
                    if (!c && (null != r && (0, O.isRawMessageMentioned)({
                            rawMessage: i,
                            userId: r.id,
                            suppressEveryone: en.default.isSuppressEveryoneEnabled(u.guildId),
                            suppressRoles: en.default.isSuppressRolesEnabled(u.guildId)
                        }) || em(q.default.getChannel(l))) && (u.mentionCount++, (0, v.isNotificationRedesignV2Enabled)() && null != r)) {
                        let e = eD.get(r.id, ed.ReadStateTypes.NOTIFICATION_CENTER);
                        e.lastMessageId = i.id, m.default.tabFocused && ej(r.id, ed.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1)
                    }
                },
                MESSAGE_DELETE: ew,
                MESSAGE_DELETE_BULK: ew,
                MESSAGE_ACK: ez,
                CHANNEL_ACK: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        immediate: a = !1,
                        force: l = !1,
                        context: i,
                        location: s
                    } = e, u = eD.get(t), r = u.ack({
                        messageId: n,
                        local: i !== ei.CURRENT_APP_CONTEXT,
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
                    } = e, n = eD.get(t);
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
                    } = e, a = eD.get(t);
                    return a.ackPins(n)
                },
                CHANNEL_PINS_UPDATE: function(e) {
                    let {
                        channelId: t,
                        lastPinTimestamp: n
                    } = e, a = eD.get(t), l = eR(n);
                    return a.lastPinTimestamp !== l && (a.lastPinTimestamp = l, !0)
                },
                CHANNEL_SELECT: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e, a = W.default.getCurrentSidebarChannelId(n), l = q.default.getChannel(n);
                    if (null != l) {
                        let e = eD.get(l.id);
                        e.ackMessageIdAtChannelSelect = null !== (t = e.ackMessageId) && void 0 !== t ? t : B.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
                    }
                    eq(ec), eq(ef);
                    let i = !1;
                    return ec !== n && (i = eQ(ec) || i, i = eQ(ef) || i), (ec === n || (null == l ? void 0 : l.type) != null && ei.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type)) && (i = eV(n) || i), ec === n && (i = eV(a) || i), ec = n, ef = a, i
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t) return;
                    let n = eD.get(t);
                    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, F.isReadableType)(t.type)) return !1;
                    let n = eD.get(t.id);
                    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp)
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    (function(e) {
                        if (!F.ALL_CHANNEL_TYPES.has(e.type)) return 0;
                        let t = eD.get(e.id);
                        t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === K.default.getId() && (t.loadedMessages = !0)
                    })(t),
                    function(e) {
                        let t = e.parent_id,
                            n = eD.get(t);
                        n.lastMessageId = e.id;
                        let a = ea.default.getCurrentUser();
                        if (e.ownerId === (null == a ? void 0 : a.id)) {
                            let n = eD.get(e.id);
                            n._persisted = !0, ez({
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
                    return !!F.ALL_CHANNEL_TYPES.has(t.type) && eD.get(t.id).syncThreadSettings()
                },
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(e => {
                        if (!F.ALL_CHANNEL_TYPES.has(e.type)) return;
                        let t = eD.get(e.id);
                        if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = P.default.hasJoined(e.id), e.isForumPost()) {
                            let t = eD.get(e.parent_id);
                            0 > B.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
                        }
                    })
                },
                LOAD_THREADS_SUCCESS: ex,
                LOAD_ARCHIVED_THREADS_SUCCESS: ex,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t) eP(e.map(e => {
                        let {
                            thread: t
                        } = e;
                        return t
                    }).filter(b.isNotNullish));
                    eP(n)
                },
                THREAD_MEMBER_UPDATE: function(e) {
                    let {
                        id: t
                    } = e;
                    return eD.get(t).syncThreadSettings()
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    return (0, G.doesThreadMembersActionAffectMe)(e) && eD.get(e.id).syncThreadSettings()
                },
                CHANNEL_DELETE: eK,
                THREAD_DELETE: eK,
                WINDOW_FOCUS: function(e) {
                    let t = !1;
                    for (let [n, a] of Object.entries(eh)) a === e.windowId && (t = function(e, t) {
                        if (null == e) return !1;
                        let n = eD.get(e);
                        return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eV(e)
                    }(n, e.focused) || t);
                    return t
                },
                IDLE: function(e) {
                    let t, {
                        idle: n
                    } = e;
                    if (!(0, x.isAndroid)() || n) return !1;
                    let a = (0, A.getRootNavigationRefIfInExperiment)();
                    if ((null == a ? void 0 : a.isReady()) === !0) {
                        let e = a.getCurrentRoute();
                        (null == e ? void 0 : e.name) === "channel" && (t = e.params.channelId)
                    } else null == a && (t = et.default.getChannelId());
                    return eV(t)
                },
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eV(t)
                },
                CURRENT_USER_UPDATE: function() {
                    e_ = null
                },
                DRAWER_OPEN: function() {
                    if (null != ec) {
                        let e = eD.get(ec);
                        !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
                    }
                    return !1
                },
                DRAWER_CLOSE: function() {
                    return eV(ec)
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
                        } = e, l = eD.get(t, a);
                        l.ack({
                            messageId: n,
                            local: !0,
                            immediate: void 0,
                            force: void 0,
                            isExplicitUserAction: !0
                        })
                    }), n !== ei.CURRENT_APP_CONTEXT || (eT.push(...t.map(e => ({
                        channel_id: e.channelId,
                        message_id: e.messageId,
                        read_state_type: e.readStateType
                    }))), eg || eU())
                },
                ENABLE_AUTOMATIC_ACK: function(e) {
                    let {
                        channelId: t,
                        windowId: n
                    } = e;
                    return eh[t] !== n && (u(void 0 === eh[t], "handleEnableAutomaticAck: channel already visible in another window"), eh[t] = n, eV(t))
                },
                DISABLE_AUTOMATIC_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eh[t] = void 0, !1
                },
                GUILD_FEATURE_ACK: eX,
                GUILD_SCHEDULED_EVENT_CREATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id, a = eD.get(t.guild_id, ed.ReadStateTypes.GUILD_EVENT);
                    if (a.lastMessageId = t.id, eB(t)) {
                        eX({
                            type: "GUILD_FEATURE_ACK",
                            id: n,
                            ackType: ed.ReadStateTypes.GUILD_EVENT,
                            ackedId: t.id,
                            local: !1
                        });
                        return
                    }!en.default.isMuteScheduledEventsEnabled(n) && a.mentionCount++
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id;
                    if (eB(t) || ![eu.GuildScheduledEventStatus.CANCELED, eu.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
                    let a = eD.get(n, ed.ReadStateTypes.GUILD_EVENT);
                    a.handleGuildEventRemoval(n, t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e, n = t.guild_id;
                    if (eB(t)) return !1;
                    let a = eD.get(t.guild_id, ed.ReadStateTypes.GUILD_EVENT);
                    a.handleGuildEventRemoval(n, t.id)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return eD.clear(t.id, ed.ReadStateTypes.GUILD_EVENT)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e, n = t.latest_onboarding_question_id;
                    if (null == n) return;
                    let a = eD.get(t.id, ed.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
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
                DECAY_READ_STATES: eM,
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    var t;
                    let {
                        item: n
                    } = e;
                    if (!(0, U.inNotificationCenterEnabled)()) return !1;
                    let a = null === (t = ea.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == a) return !1;
                    let l = eD.get(a, ed.ReadStateTypes.NOTIFICATION_CENTER);
                    l.lastMessageId = n.id;
                    let i = (0, v.isNotificationRedesignV2Enabled)();
                    if (!i && m.default.active || i && m.default.tabFocused) {
                        ej(a, ed.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
                        return
                    }
                    l.mentionCount++
                },
                RELATIONSHIP_ADD: function(e) {
                    let t = ea.default.getCurrentUser();
                    if (!(0, U.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== ei.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== ei.RelationshipTypes.FRIEND) return !1;
                    let n = eD.get(t.id, ed.ReadStateTypes.NOTIFICATION_CENTER),
                        a = e.relationship.type === ei.RelationshipTypes.FRIEND,
                        l = a ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                        i = null != n.ackMessageId ? B.default.extractTimestamp(n.ackMessageId) : 0,
                        s = (0, v.isNotificationRedesignV2Enabled)();
                    i < l && (n.lastMessageId = B.default.fromTimestamp(l), !s && m.default.active || s && m.default.tabFocused ? ej(t.id, ed.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : a ? n.mentionCount-- : n.mentionCount++)
                },
                RELATIONSHIP_REMOVE: function(e) {
                    let t = ea.default.getCurrentUser();
                    if (!(0, U.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== ei.RelationshipTypes.PENDING_INCOMING) return !1;
                    let n = eD.get(t.id, ed.ReadStateTypes.NOTIFICATION_CENTER),
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
                    if (a || !(0, U.inNotificationCenterEnabled)() || m.default.active) return !1;
                    let l = null === (t = ea.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == l) return !1;
                    let i = eD.get(l, ed.ReadStateTypes.NOTIFICATION_CENTER);
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
                    } = e, i = null === (t = ea.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    return null != i && ej(i, n, a, l)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = !1;
                    for (let a of null !== (t = e.channels) && void 0 !== t ? t : []) {
                        let e = eD.get(a.id),
                            t = eR(a.lastPinTimestamp);
                        (e.lastMessageId !== a.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = a.lastMessageId, e.lastPinTimestamp = t)
                    }
                    return n
                },
                CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return eQ(t)
                }
            });
            var e$ = eJ
        },
        744983: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("427964"),
                i = n.n(l),
                s = n("498225"),
                u = n("173333"),
                r = n("913144"),
                d = n("390933"),
                o = n("25932"),
                E = n("42203"),
                c = n("305961"),
                f = n("18494"),
                _ = n("49111");
            let N = {},
                T = !1;

            function g(e) {
                return null == N[e] && (N[e] = {
                    searchId: e,
                    searchType: C(e),
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
                }), N[e]
            }

            function C(e) {
                return e === _.SearchTypes.DMS ? _.SearchTypes.DMS : null != c.default.getGuild(e) ? _.SearchTypes.GUILD : null != E.default.getChannel(e) ? _.SearchTypes.CHANNEL : null
            }

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == e) return n;
                let a = N[e];
                return null == a ? n : t(a)
            }
            let S = "SearchStore",
                I = !1,
                A = {},
                p = null;

            function M(e) {
                var t;
                let {
                    searchId: n,
                    query: a
                } = e;
                if ("string" != typeof a || "" === (a = a.trim())) return;
                let l = A[n] = null !== (t = A[n]) && void 0 !== t ? t : [],
                    i = l.indexOf(a); - 1 !== i ? (l.splice(i, 1), l.unshift(a)) : null != l[0] && "" !== l[0] && a.startsWith(l[0]) ? l[0] = a : i < 0 && l.unshift(a), l.length > 5 && l.splice(5, l.length), u.default.set(S, {
                    history: A
                })
            }

            function R(e) {
                let {
                    searchId: t
                } = e, n = N[t];
                if (null == n) return !1;
                null != n.searchFetcher && n.searchFetcher.cancel(), delete N[t]
            }

            function O(e) {
                if (e === p) return !1;
                null != e && null == N[e] && g(e), p = e
            }
            class m extends s.default.Store {
                initialize() {
                    this.waitFor(c.default, E.default);
                    let e = u.default.get(S);
                    if ((null == e ? void 0 : e.history) != null) {
                        var t;
                        Object.keys(t = e.history).forEach(e => {
                            Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
                        }), A = t
                    }
                    I = !!u.default.get("tokenized")
                }
                isOpen() {
                    return T
                }
                getCurrentSearchModalType() {
                    return a
                }
                getCurrentSearchId() {
                    return p
                }
                isActive() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
                    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
                }
                isTokenized() {
                    return I
                }
                getSearchType(e) {
                    return h(null != e ? e : p, e => e.searchType)
                }
                getRawResults(e) {
                    return h(e, e => e.rawResults)
                }
                hasResults(e) {
                    return null != h(e, e => e.rawResults)
                }
                isIndexing(e) {
                    return h(e, e => e.isIndexing) || !1
                }
                isHistoricalIndexing(e) {
                    return h(e, e => e.isHistoricalIndexing) || !1
                }
                isSearching(e) {
                    return h(e, e => e.isSearching) || !1
                }
                getAnalyticsId(e) {
                    return h(e, e => e.analyticsId)
                }
                getResultsBlocked(e) {
                    return h(e, e => e.resultsBlocked)
                }
                getDocumentsIndexedCount(e) {
                    return h(e, e => e.documentsIndexed)
                }
                getSearchFetcher(e) {
                    return h(e, e => e.searchFetcher)
                }
                getTotalResults(e) {
                    var t;
                    return null !== (t = h(e, e => e.totalResults)) && void 0 !== t ? t : 0
                }
                getEditorState(e) {
                    return h(e, e => e.editorState)
                }
                getHistory(e) {
                    return A[e]
                }
                getOffset(e) {
                    var t;
                    return null !== (t = h(e, e => e.offset)) && void 0 !== t ? t : 0
                }
                getQuery(e) {
                    return h(e, e => e.query)
                }
                hasError(e) {
                    var t;
                    return null !== (t = h(e, e => e.hasError)) && void 0 !== t && t
                }
                shouldShowBlockedResults(e) {
                    var t;
                    return null !== (t = h(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
                }
                shouldShowNoResultsAlt(e) {
                    var t;
                    return null !== (t = h(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
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
            m.displayName = "SearchStore";
            var U = new m(r.default, {
                SEARCH_START: function(e) {
                    var t, n, a;
                    let {
                        queryString: l,
                        searchId: s,
                        query: u
                    } = e, c = g(s);
                    null != c.searchFetcher && (c.searchFetcher.cancel(), c.searchFetcher = null);
                    let N = s,
                        T = c.searchType;
                    s === _.FAVORITES && (N = null !== (n = f.default.getChannelId()) && void 0 !== n ? n : s, T = _.SearchTypes.CHANNEL);
                    let C = new d.default(N, T, u);
                    c.searchFetcher = C, c.isSearching = !0, c.rawResults = null, c.analyticsId = null, c.query = i.omit(u, "type"), c.offset = null !== (a = u.offset) && void 0 !== a ? a : 0, c.showBlockedResults = !1, M({
                        type: "SEARCH_ADD_HISTORY",
                        searchId: s,
                        query: l
                    });
                    let h = s === _.FAVORITES ? null === (t = E.default.getChannel(N)) || void 0 === t ? void 0 : t.guild_id : T === _.SearchTypes.GUILD ? s : null;
                    C.fetch(e => {
                        var t, n;
                        r.default.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: s,
                            guildId: h,
                            analyticsId: e.body.analytics_id,
                            totalResults: e.body.total_results,
                            messages: e.body.messages,
                            threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                            members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, o.default)(e)),
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
                            guildId: h,
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
                    } = e, n = g(t);
                    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        searchId: t
                    } = e, n = g(t);
                    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
                    let a = n.query;
                    null == a && (n.hasError = !0)
                },
                SEARCH_EDITOR_STATE_CLEAR: R,
                SEARCH_ENSURE_SEARCH_STATE: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null != t && g(t)
                },
                SEARCH_EDITOR_STATE_CHANGE: function(e) {
                    let {
                        searchId: t,
                        editorState: n
                    } = e;
                    g(t).editorState = n
                },
                SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
                    let {
                        searchId: t,
                        showBlocked: n
                    } = e, a = g(t);
                    a.showBlockedResults = n
                },
                SEARCH_SCREEN_OPEN: function(e) {
                    let {
                        searchId: t
                    } = e;
                    O(t)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    O(null != t ? t : n)
                },
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    return null != p && R({
                        searchId: p
                    })
                },
                SEARCH_CLEAR_HISTORY: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null == t ? (u.default.remove(S), A = {}) : (delete A[t], u.default.set(S, {
                        history: A
                    }))
                },
                SEARCH_REMOVE_HISTORY: function(e) {
                    let {
                        searchId: t,
                        query: n
                    } = e;
                    null != A[t] && (A[t] = A[t].filter(e => e !== n), u.default.set(S, {
                        history: A
                    }))
                },
                SEARCH_ADD_HISTORY: M,
                LOGOUT: function() {
                    u.default.remove(S), A = {}
                },
                CONNECTION_OPEN: function() {
                    Object.keys(N).forEach(e => {
                        null != N[e] && (N[e].searchType = C(e))
                    })
                },
                SEARCH_MODAL_OPEN: function(e) {
                    let {
                        searchId: t,
                        searchType: n
                    } = e;
                    null != t && (p = t), T = !0, a = n
                },
                SEARCH_MODAL_CLOSE: function() {
                    T = !1, a = void 0
                }
            })
        },
        280168: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("498225"),
                l = n("913144"),
                i = n("991170"),
                s = n("42203"),
                u = n("42887"),
                r = n("945956"),
                d = n("18494"),
                o = n("49111"),
                E = n("860604");
            let c = new Map,
                f = null,
                _ = null,
                N = null;

            function T(e, t) {
                let n = c.get(e);
                if (null == n) return !1;
                let a = n.delete(t);
                return 0 === n.size && c.delete(e), a
            }

            function g(e, t, n) {
                var a, l, i;
                let s = null !== (i = null === (l = c.get(e)) || void 0 === l ? void 0 : null === (a = l.get(t)) || void 0 === a ? void 0 : a.flags) && void 0 !== i ? i : E.SpeakingFlags.NONE;
                return (s & n) === n
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = c.get(e);
                if (null == a) return !1;
                for (let [e, {
                        flags: l
                    }] of a)
                    if ((!n || e !== f) && (l & t) === t) return !0;
                return !1
            }

            function h(e) {
                let {
                    user: t,
                    sessionId: n
                } = e;
                f = t.id, _ = n, N = null
            }
            class S extends a.default.Store {
                initialize() {
                    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(r.default)
                }
                getSpeakingDuration(e, t) {
                    var n, a;
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.MediaEngineContextTypes.DEFAULT,
                        i = null === (a = c.get(l)) || void 0 === a ? void 0 : null === (n = a.get(e)) || void 0 === n ? void 0 : n.since;
                    return null != i ? t - i : 0
                }
                getSpeakers() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return Array.from(null !== (t = null === (e = c.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => g(n, e, E.SpeakingFlags.VOICE))
                }
                isSpeaking(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
                    return g(t, e, E.SpeakingFlags.VOICE)
                }
                isPrioritySpeaker(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
                    return g(t, e, E.SpeakingFlags.PRIORITY)
                }
                isSoundSharing(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
                    return g(t, e, E.SpeakingFlags.SOUNDSHARE)
                }
                isAnyoneElseSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return C(e, E.SpeakingFlags.VOICE, !0)
                }
                isCurrentUserSpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return null != f && this.isSpeaking(f, e)
                }
                isAnyonePrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return C(e, E.SpeakingFlags.VOICE | E.SpeakingFlags.PRIORITY)
                }
                isCurrentUserPrioritySpeaking() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
                    return null != f && this.isPrioritySpeaker(f, e) && this.isSpeaking(f, e)
                }
            }
            S.displayName = "SpeakingStore";
            var I = new S(l.default, {
                CONNECTION_OPEN: h,
                OVERLAY_INITIALIZE: h,
                SPEAKING: function(e) {
                    let {
                        context: t,
                        userId: n,
                        speakingFlags: a
                    } = e;
                    if ((a & E.SpeakingFlags.PRIORITY) === E.SpeakingFlags.PRIORITY) {
                        let e = s.default.getChannel(d.default.getVoiceChannelId());
                        null != e && i.default.can({
                            permission: o.Permissions.PRIORITY_SPEAKER,
                            user: n,
                            context: e
                        }) ? u.default.setCanHavePriority(n, !0) : (u.default.setCanHavePriority(n, !1), a &= ~E.SpeakingFlags.PRIORITY)
                    }
                    return function(e, t, n) {
                        var a, l;
                        let i = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT,
                                    t = c.get(e);
                                return null == t && (t = new Map, c.set(e, t)), t
                            }(e),
                            s = i.get(t),
                            u = null !== (a = null == s ? void 0 : s.flags) && void 0 !== a ? a : 0;
                        if (0 === u && 0 === n) return !1;
                        if (0 === n) i.delete(t), 0 === i.size && c.delete(e);
                        else {
                            let e = null !== (l = null == s ? void 0 : s.since) && void 0 !== l ? l : null,
                                a = (u & E.SpeakingFlags.VOICE) === E.SpeakingFlags.VOICE,
                                r = (n & E.SpeakingFlags.VOICE) === E.SpeakingFlags.VOICE;
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
                        } = t, i = !1, s = N;
                        return n === f && l === _ && (N = null != a ? a : null), s !== N && (i = c.delete(E.MediaEngineContextTypes.DEFAULT) || i), null == a ? i = n === f && l === _ ? c.delete(E.MediaEngineContextTypes.DEFAULT) || i : T(E.MediaEngineContextTypes.DEFAULT, n) || i : n === f && l !== _ ? i = c.delete(E.MediaEngineContextTypes.DEFAULT) || i : n !== f && a !== r.default.getChannelId() && (i = T(E.MediaEngineContextTypes.DEFAULT, n) || i), i || e
                    }, !1)
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {}
            })
        },
        555035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("498225"),
                l = n("913144"),
                i = n("860604");
            let s = null,
                u = null,
                r = {};

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = r[e];
                if (null == a) return;
                let l = a[null != t ? t : "null"];
                if (null != l) {
                    for (let e of Object.values(i.MediaEngineContextTypes))(n === e || null == n) && delete l[e];
                    r[e][null != t ? t : "null"] = l
                }
            }
            class o extends a.default.Store {
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
            o.displayName = "VideoStreamStore";
            var E = new o(l.default, {
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
                    }(t, n, a, l) : d(t, n, l)
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
                            guildId: o
                        } = t;
                        if (null == i && a === s) {
                            if (l !== u) return e;
                            r = {}
                        } else {
                            if (null != i || (null === (n = r[a]) || void 0 === n ? void 0 : n[null != o ? o : "null"]) == null) return e;
                            d(a, o)
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
                    return M
                },
                permissionOverwriteForUser: function() {
                    return R
                },
                permissionOverwriteForRole: function() {
                    return O
                },
                permissionOverwritesForAnnouncement: function() {
                    return m
                },
                isChannelFull: function() {
                    return U
                },
                sanitizeGuildTextChannelName: function() {
                    return i.default
                },
                getBitrateLimit: function() {
                    return v
                },
                computeSummarizedVoiceUsers: function() {
                    return L
                },
                channelTypeString: function() {
                    return D
                },
                getMentionIconType: function() {
                    return y
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
            var a = n("754013"),
                l = n("798609"),
                i = n("364480"),
                s = n("89073"),
                u = n("711326"),
                r = n("808422"),
                d = n("233069"),
                o = n("42203"),
                E = n("923959"),
                c = n("957255"),
                f = n("18494"),
                _ = n("316133"),
                N = n("991170"),
                T = n("49111"),
                g = n("646718"),
                C = n("782340");
            let {
                GUILD_VOICE: h,
                GUILD_CATEGORY: S,
                GUILD_STAGE_VOICE: I
            } = T.ChannelTypes;

            function A(e, t) {
                return e === t || e === S
            }

            function p(e, t, n) {
                let l = N.default.NONE;
                return ((0, d.isGuildSelectableChannelType)(t) || t === S) && (l = a.default.add(l, T.Permissions.VIEW_CHANNEL)), (A(t, h) || A(t, I)) && (l = a.default.add(l, T.Permissions.VIEW_CHANNEL), l = a.default.add(l, T.Permissions.CONNECT)), {
                    id: e,
                    type: n,
                    deny: N.default.NONE,
                    allow: l
                }
            }

            function M(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = [];
                if (n.length > 0 || i) {
                    var u, r, o;
                    let n;
                    s.push((u = e, r = t, o = l.PermissionOverwriteType.ROLE, n = N.default.NONE, ((0, d.isGuildSelectableChannelType)(r) || r === S) && (n = a.default.add(n, T.Permissions.VIEW_CHANNEL)), A(r, h) && (n = a.default.add(n, T.Permissions.VIEW_CHANNEL), n = a.default.add(n, T.Permissions.CONNECT)), {
                        id: u,
                        type: o,
                        allow: N.default.NONE,
                        deny: n
                    }))
                }
                return n.forEach(e => {
                    s.push(p(e, t, l.PermissionOverwriteType.ROLE))
                }), s
            }

            function R(e, t) {
                return p(e, t, l.PermissionOverwriteType.MEMBER)
            }

            function O(e, t) {
                return p(e, t, l.PermissionOverwriteType.ROLE)
            }

            function m(e) {
                return [{
                    id: e,
                    type: l.PermissionOverwriteType.ROLE,
                    deny: T.Permissions.SEND_MESSAGES,
                    allow: N.default.NONE
                }]
            }

            function U(e, t, n) {
                var a, l;
                let i = e.getGuildId(),
                    u = n.getGuild(i),
                    r = null !== (a = null == u ? void 0 : u.maxVideoChannelUsers) && void 0 !== a ? a : -1,
                    d = null !== (l = null == u ? void 0 : u.maxStageVideoChannelUsers) && void 0 !== l ? l : -1,
                    o = _.default.countVoiceStatesForChannel(e.id),
                    E = _.default.getVoiceStatesForChannel(e),
                    f = c.default.can(T.Permissions.MOVE_MEMBERS, e) && c.default.can(T.Permissions.CONNECT, e),
                    N = !1;
                N = e.type === I ? null != i && (t.hasVideo(e.id) || (0, s.hasStream)(E)) && d > 0 && o >= d : null != i && t.hasVideo(e.id) && r > 0 && o >= r + (f ? 1 : 0);
                let g = e.userLimit > 0 && o >= e.userLimit;
                return N || g && !f
            }

            function v(e, t) {
                return t.isGuildStageVoice() ? T.BITRATE_DEFAULT : null == e ? T.BITRATE_MAX : Math.max(e.hasFeature(T.GuildFeatures.VIP_REGIONS) ? g.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.bitrate : T.BITRATE_MAX, g.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
            }

            function L(e) {
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

            function D(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case T.ChannelTypes.DM:
                        return C.default.Messages.DM;
                    case T.ChannelTypes.GROUP_DM:
                        return C.default.Messages.GROUP_DM;
                    case T.ChannelTypes.GUILD_TEXT:
                        return C.default.Messages.TEXT_CHANNEL;
                    case T.ChannelTypes.GUILD_FORUM:
                        return C.default.Messages.FORUM_CHANNEL;
                    case T.ChannelTypes.GUILD_MEDIA:
                        return C.default.Messages.MEDIA_CHANNEL;
                    case T.ChannelTypes.GUILD_VOICE:
                        return C.default.Messages.VOICE_CHANNEL;
                    case T.ChannelTypes.GUILD_STAGE_VOICE:
                        return C.default.Messages.STAGE_CHANNEL;
                    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return C.default.Messages.NEWS_CHANNEL;
                    case T.ChannelTypes.GUILD_STORE:
                        return C.default.Messages.STORE_CHANNEL;
                    case T.ChannelTypes.GUILD_CATEGORY:
                        return C.default.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function y(e) {
                if (null == e) return "text";
                let t = e.isMediaChannel();
                if (e.type === T.ChannelTypes.GUILD_VOICE) return c.default.can(T.Permissions.CONNECT, e) ? "voice" : "voice-locked";
                if (e.type === T.ChannelTypes.GUILD_STAGE_VOICE) return c.default.can(T.Permissions.CONNECT, e) ? "stage" : "stage-locked";
                if (d.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
                else if (e.type === T.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
                else if (e.type === T.ChannelTypes.GUILD_MEDIA) return "media";
                else if (d.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
            }

            function P(e) {
                let t;
                let n = o.default.getChannel(f.default.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === T.ChannelTypes.GUILD_TEXT) t = n.id;
                else {
                    let n = E.default.getDefaultChannel(e);
                    t = null != n ? n.id : null
                }
                return T.Routes.CHANNEL(e, t)
            }

            function G(e, t, n, a) {
                let l = null == a ? "" : "?summaryId=".concat(a);
                return "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL(e, t, n)).concat(l)
            }

            function H(e, t, n, a) {
                let l;
                let i = e.getGuildId(),
                    s = (0, u.canUseMediaPostEmbed)(i, t);
                if (null != t && s) {
                    var r, d, o, E;
                    r = i, d = t.id, o = e.id, E = e.id, l = null == r || null == d || null == o ? G(r, d, E) : "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL_THREAD_VIEW(r, d, o, E))
                } else l = null != a ? a : G(i, e.id, n);
                return l
            }
        },
        387111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return d
                },
                default: function() {
                    return E
                }
            });
            var a = n("498225"),
                l = n("42203"),
                i = n("26989"),
                s = n("27618"),
                u = n("158998"),
                r = n("782340");

            function d(e, t, n) {
                if (null == n) return null;
                if (null != e) return i.default.getNick(e, n.id);
                if (null != t) {
                    let e = l.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return s.default.getNickname(n.id)
                }
                return null
            }

            function o(e, t, n) {
                var a;
                return null == n ? r.default.Messages.UNKNOWN_USER : null !== (a = d(e, t, n)) && void 0 !== a ? a : u.default.getName(n)
            }
            var E = {
                getNickname: d,
                getName: o,
                useName: function(e, t, n) {
                    return (0, a.useStateFromStores)([i.default, l.default, s.default], () => o(e, t, n))
                }
            }
        }
    }
]);
//# sourceMappingURL=e1fa3e91ec551f52afab.js.map