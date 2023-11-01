(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28651"], {
        823704: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var l = n("913144");

            function i() {
                l.default.dispatch({
                    type: "ACTIVITY_SYNC_STOP"
                })
            }
        },
        613691: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SpotifyAPI: function() {
                    return f
                },
                getAccessToken: function() {
                    return p
                },
                subscribePlayerStateNotifications: function() {
                    return function t(e, n, l) {
                        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                        return f.put(e, n, {
                            url: c.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                            query: {
                                connection_id: l
                            }
                        }).catch(r => o <= 0 ? Promise.reject(r) : (0, i.timeoutPromise)(5e3).then(() => t(e, n, l, o - 1)))
                    }
                },
                getProfile: function() {
                    return h
                },
                getDevices: function() {
                    return T
                },
                play: function() {
                    return _
                },
                pause: function() {
                    return S
                },
                fetchIsSpotifyProtocolRegistered: function() {
                    return y
                },
                setActiveDevice: function() {
                    return E
                }
            });
            var l = n("872717"),
                i = n("862337"),
                o = n("913144"),
                r = n("269180"),
                s = n("773336"),
                u = n("155815"),
                c = n("450484"),
                a = n("49111");

            function d(t, e, n, l) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                return t(l = {
                    ...l,
                    headers: {
                        authorization: "Bearer ".concat(n)
                    }
                }).then(t => 202 === t.status ? Promise.reject(t) : t).catch(n => {
                    let r = !0 !== l.onlyRetryOnAuthorizationErrors && 202 === n.status;
                    return (401 === n.status || r) && o > 0 ? (202 === n.status ? (0, i.timeoutPromise)(5e3) : Promise.resolve()).then(() => p(e)).then(n => {
                        let {
                            body: {
                                access_token: i
                            }
                        } = n;
                        return d(t, e, i, l, o - 1)
                    }).then(t => new Promise(e => setImmediate(() => e(t)))) : Promise.reject(n)
                })
            }
            let f = {
                get: d.bind(null, l.default.get),
                put: d.bind(null, l.default.put)
            };

            function p(t) {
                return l.default.get({
                    url: a.Endpoints.CONNECTION_ACCESS_TOKEN(a.PlatformTypes.SPOTIFY, t),
                    oldFormErrors: !0
                }).catch(e => {
                    if (401 === e.status) o.default.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                        accountId: t
                    });
                    else if (429 === e.status) {
                        let n = 1e3 * e.headers["retry-after"],
                            l = isNaN(n) || 0 === n ? 5e3 : n;
                        return (0, i.timeoutPromise)(l).then(() => p(t))
                    }
                    return Promise.reject(e)
                }).then(e => {
                    let {
                        access_token: n
                    } = e.body;
                    return o.default.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                        accountId: t,
                        accessToken: n
                    }), e
                })
            }

            function h(t, e) {
                return f.get(t, e, {
                    url: c.SpotifyEndpoints.PROFILE
                }).then(e => (o.default.dispatch({
                    type: "SPOTIFY_PROFILE_UPDATE",
                    accountId: t,
                    isPremium: "premium" === e.body.product
                }), e))
            }

            function T(t, e) {
                return f.get(t, e, {
                    url: c.SpotifyEndpoints.PLAYER_DEVICES
                }).then(e => (e.body && o.default.dispatch({
                    type: "SPOTIFY_SET_DEVICES",
                    accountId: t,
                    devices: e.body.devices
                }), e))
            }

            function _(t, e, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = c.SpotifyEndpoints.PLAYER_OPEN(c.SpotifyResourceTypes.TRACK, n, !1),
                    {
                        deviceId: r,
                        position: s,
                        contextUri: u,
                        repeat: a
                    } = l;
                return f.put(t, e, {
                    url: c.SpotifyEndpoints.PLAYER_PLAY,
                    query: {
                        device_id: r
                    },
                    body: {
                        context_uri: null != u ? u : void 0,
                        uris: null == u ? [i] : void 0,
                        offset: null != u ? {
                            uri: i
                        } : void 0,
                        position_ms: null != s ? s : 0
                    }
                }).then(n => null == a ? n : f.put(t, e, {
                    url: c.SpotifyEndpoints.PLAYER_REPEAT,
                    query: {
                        device_id: r,
                        state: a ? "context" : "off"
                    }
                })).then(t => (o.default.dispatch({
                    type: "SPOTIFY_PLAYER_PLAY",
                    id: n,
                    position: null != s ? s : 0
                }), t))
            }

            function S(t, e) {
                return f.put(t, e, {
                    url: c.SpotifyEndpoints.PLAYER_PAUSE
                }).then(t => (o.default.dispatch({
                    type: "SPOTIFY_PLAYER_PAUSE"
                }), t))
            }

            function y() {
                !u.default.isProtocolRegistered() && (0, s.isDesktop)() && r.default.isProtocolRegistered(c.SPOTIFY_APP_PROTOCOL).then(t => {
                    o.default.dispatch({
                        type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                        isRegistered: t
                    })
                })
            }

            function E(t, e) {
                o.default.dispatch({
                    type: "SPOTIFY_SET_ACTIVE_DEVICE",
                    accountId: t,
                    deviceId: e
                })
            }
        },
        155815: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var l = n("446674"),
                i = n("913144");
            let o = !1;
            class r extends l.default.Store {
                isProtocolRegistered() {
                    return o
                }
            }
            r.displayName = "SpotifyProtocolStore";
            var s = new r(i.default, {
                SPOTIFY_SET_PROTOCOL_REGISTERED: function(t) {
                    let {
                        isRegistered: e
                    } = t;
                    o = e
                }
            })
        },
        662285: function(t, e, n) {
            "use strict";
            let l, i, o;
            n.r(e), n.d(e, {
                default: function() {
                    return tc
                }
            });
            var r, s, u = n("917351"),
                c = n.n(u),
                a = n("981980"),
                d = n("446674"),
                f = n("233736"),
                p = n("862337"),
                h = n("913144"),
                T = n("899633"),
                _ = n("376556"),
                S = n("823704"),
                y = n("605250"),
                E = n("271938"),
                P = n("47319"),
                I = n("603699"),
                A = n("824563"),
                g = n("568307"),
                m = n("280168"),
                O = n("800762"),
                v = n("599110"),
                C = n("550368"),
                k = n("613691"),
                N = n("450484"),
                Y = n("49111");
            let L = _.default.get(Y.PlatformTypes.SPOTIFY),
                R = "hm://pusher/v1/connections/";
            (r = s || (s = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", r.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
            let w = {
                    MESSAGE: "message",
                    PING: "ping",
                    PONG: "pong"
                },
                D = {
                    SINGLE: "single"
                },
                b = new y.default("Spotify"),
                F = new p.Timeout,
                U = new p.Timeout,
                G = new p.Timeout,
                V = new p.Timeout,
                z = new p.Timeout,
                j = {},
                x = {},
                W = {},
                q = !1,
                H = null;

            function M() {
                for (let t in j) {
                    let e = j[t];
                    if (!e.connected || null == x[t]) continue;
                    let n = x[t].find(t => t.is_active);
                    if (null != n) return {
                        socket: e,
                        device: n
                    }
                }
            }

            function B(t) {
                h.default.dispatch({
                    type: "SPOTIFY_PLAYER_STATE",
                    accountId: t,
                    track: null,
                    volumePercent: 0,
                    isPlaying: !1,
                    repeat: !1,
                    position: 0,
                    context: null
                })
            }

            function K(t) {
                return A.default.findActivity(t, t => null != t.party && null != t.party.id && (0, N.isSpotifyParty)(t.party.id))
            }
            let X = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
            class J {
                get connected() {
                    return null != this.socket && X.has(this.socket.readyState)
                }
                connect() {
                    !this.connected && !this._requestedConnect && (b.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, tr(this.accountId, this.accessToken).then(() => {
                        this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
                    }).catch(t => {
                        b.error(t), this._requestedConnect = !1, this.handleClose()
                    }))
                }
                disconnect() {
                    this._requestedDisconnect = !0, this.backoff.cancel();
                    try {
                        var t;
                        null === (t = this.socket) || void 0 === t || t.close()
                    } catch (t) {}
                }
                ping() {
                    var t;
                    this.connected && (null === (t = this.socket) || void 0 === t || t.send(JSON.stringify({
                        type: w.PING
                    })))
                }
                handleOpen() {
                    b.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(3e4, () => this.ping()), (0, k.getProfile)(this.accountId, this.accessToken), (0, k.getDevices)(this.accountId, this.accessToken)
                }
                handleMessage(t) {
                    let {
                        data: e
                    } = t;
                    if ("string" != typeof e) return;
                    let {
                        type: n,
                        uri: l,
                        payloads: i
                    } = JSON.parse(e);
                    switch (n) {
                        case w.MESSAGE:
                            if ("string" == typeof l && l.startsWith(R)) this.connectionId = decodeURIComponent(l.split(R)[1]), (0, k.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                            else if (Array.isArray(i)) {
                                for (let {
                                        events: t
                                    }
                                    of i)
                                    if (null != t)
                                        for (let e of t) this.handleEvent(e)
                            }
                        case w.PONG:
                    }
                }
                handleClose() {
                    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                        let t = this.backoff.fail(() => {
                            !this._requestedDisconnect && this.connect()
                        });
                        b.info("WS Disconnected. Next retry in ".concat(Math.round(t), "ms"))
                    } catch (t) {}
                }
                handleEvent(t) {
                    let {
                        type: e,
                        event: n
                    } = t;
                    switch (e) {
                        case s.PLAYER_STATE_CHANGED:
                            null != n && null != n.state && to(this.accountId, this.accessToken, n.state);
                            break;
                        case s.DEVICE_STATE_CHANGED:
                            this.handleDeviceStateChange()
                    }
                }
                constructor(t, e) {
                    this._requestedDisconnect = !1, this._requestedConnect = !1, this.handleDeviceStateChange = c.throttle(() => {
                        (0, k.getDevices)(this.accountId, this.accessToken), tr(this.accountId, this.accessToken)
                    }, 3e3), this.accountId = t, this.accessToken = e, this.pingInterval = new p.Interval, this.backoff = new a.default(void 0, 6e4), this.connect()
                }
            }

            function Z(t, e) {
                t in j ? (j[t].accessToken = e, b.info("Updated account access token: ".concat(t))) : (j[t] = new J(t, e), b.info("Added account: ".concat(t)))
            }

            function Q(t) {
                if (!(t in j)) return;
                j[t].disconnect(), delete j[t];
                let e = W[t];
                null != e && null != l && e.track.id === l.track.id && (l = null), delete W[t], b.info("Removed account: ".concat(t))
            }

            function $(t, e) {
                for (let n of x[t]) n.is_active = n.id === e
            }

            function tt(t, e, n) {
                let l = M();
                if (null == l) return !1;
                let {
                    socket: o,
                    device: r
                } = l, {
                    sync_id: s,
                    party: u,
                    timestamps: c
                } = e;
                if (null == s || null == u || null == u.id || !(0, N.isSpotifyParty)(u.id)) return !1;
                let a = null != c && null != c.start ? c.start : Date.now(),
                    d = Math.max(0, Date.now() - a),
                    f = !1,
                    p = W[o.accountId];
                null != p && !1 === p.repeat && (f = null), (0, k.play)(o.accountId, o.accessToken, s, {
                    position: +d,
                    deviceId: r.id,
                    repeat: f
                }), i = {
                    userId: t,
                    partyId: u.id,
                    trackId: s,
                    startTime: a
                };
                let h = "presence change";
                n && (h = "started", v.default.track(Y.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
                    party_id: u.id,
                    other_user_id: t
                })), b.info("Listen along ".concat(h, ": ").concat(o.accountId, " to ").concat(t, " playing ").concat(s, " on ").concat(r.name))
            }

            function te() {
                v.default.track(Y.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
                    party_id: null != i ? i.partyId : null,
                    other_user_id: null != i ? i.userId : null
                });
                let t = null != i ? i.trackId : null;
                i = null, b.info("Listen along stopped");
                let e = M();
                if (null == e) return;
                let {
                    socket: n
                } = e, l = W[n.accountId];
                null != l && l.track.id === t && (0, k.pause)(n.accountId, n.accessToken)
            }

            function tn() {
                let t = Object.keys(j),
                    e = P.default.getAccounts().filter(t => {
                        let {
                            type: e
                        } = t;
                        return e === Y.PlatformTypes.SPOTIFY
                    });
                if (null == e) return !1;
                let n = e.map(t => {
                    let {
                        id: e
                    } = t;
                    return e
                });
                for (let e of t) !n.includes(e) && Q(e);
                let i = !1;
                for (let n of e)
                    if (null != l && l.account.id === n.id && (l.account = n, i = !0), !t.includes(n.id)) {
                        if (null != n.accessToken) {
                            Z(n.id, n.accessToken);
                            continue
                        }(0, k.getAccessToken)(n.id)
                    } return i
            }

            function tl() {
                if (null == l) return;
                let t = M();
                if (null == t) return;
                let {
                    socket: e
                } = t;
                q = !0, (0, k.pause)(e.accountId, e.accessToken), v.default.track(Y.AnalyticEvents.SPOTIFY_AUTO_PAUSED), b.info("Playback auto paused")
            }

            function ti(t) {
                if (t === E.default.getId()) {
                    let e = O.default.isCurrentClientInVoiceChannel(),
                        n = (0, T.getIsSpeaking)({
                            userId: t,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1
                        });
                    e && n && null != l ? (F.start(3e4, tl, !1), U.stop()) : U.start(100, () => F.stop(), !1)
                }
                return !1
            }

            function to(t, e, n) {
                let l, i, {
                    device: o,
                    progress_ms: r,
                    is_playing: s,
                    repeat_state: u,
                    item: c,
                    context: a
                } = n;
                if (null != c && c.type === N.SpotifyResourceTypes.TRACK) {
                    let t = c.id;
                    null != c.linked_from && null != c.linked_from.id && (t = c.linked_from.id), l = {
                        id: t,
                        name: c.name,
                        duration: c.duration_ms,
                        album: {
                            id: c.album.id,
                            name: c.album.name,
                            image: c.album.images[0]
                        },
                        artists: c.artists,
                        isLocal: c.is_local || !1
                    }
                }
                if (null != o && !0 !== o.is_active && (o = {
                        ...o,
                        is_active: !0
                    }), null != a && [N.SpotifyResourceTypes.PLAYLIST, N.SpotifyResourceTypes.ALBUM].includes(a.type)) {
                    let n = tu.getPlayerState(t);
                    i = null != n && null != n.context && n.context.uri === a.uri ? Promise.resolve(n.context) : a.type === N.SpotifyResourceTypes.ALBUM ? Promise.resolve(a) : k.SpotifyAPI.get(t, e, {
                        url: a.href
                    }).then(t => {
                        let {
                            body: e
                        } = t;
                        return e
                    }).catch(t => {
                        if (t && 404 === t.status) return null;
                        throw t
                    })
                } else i = Promise.resolve(void 0);
                return i.then(e => {
                    null != e && e.type === N.SpotifyResourceTypes.PLAYLIST && !e.public && (e = null), h.default.dispatch({
                        type: "SPOTIFY_PLAYER_STATE",
                        accountId: t,
                        track: l,
                        volumePercent: null != o ? o.volume_percent : 0,
                        isPlaying: s,
                        repeat: "off" !== u,
                        position: r,
                        context: e,
                        device: o
                    })
                })
            }

            function tr(t, e) {
                return k.SpotifyAPI.get(t, e, {
                    url: N.SpotifyEndpoints.PLAYER,
                    onlyRetryOnAuthorizationErrors: !0
                }).then(n => {
                    let l = n.body;
                    null != l ? to(t, e, l).then(() => n) : B(t)
                }).catch(() => B(t))
            }
            class ts extends d.default.Store {
                initialize() {
                    this.waitFor(P.default, m.default), this.syncWith([A.default], () => (function() {
                        if (null == i) return !1;
                        let t = M();
                        if (null == t) return !1;
                        let {
                            userId: e
                        } = i, n = K(e);
                        if (null == n) return G.start(3e5, () => {
                            null != i && i.userId === e && (0, S.default)()
                        }), !1;
                        G.stop();
                        let {
                            sync_id: l,
                            timestamps: o,
                            party: r
                        } = n, s = null != l && i.trackId !== l, u = null != o && i.startTime !== o.start;
                        return s || u ? tt(e, n, !1) : null != r && r.id !== i.partyId && (i.partyId = r.id, !0)
                    })()), (0, k.fetchIsSpotifyProtocolRegistered)()
                }
                hasConnectedAccount() {
                    return Object.keys(j).length > 0
                }
                getActiveSocketAndDevice() {
                    return M()
                }
                getPlayableComputerDevices() {
                    let t = [];
                    for (let e in j) {
                        let n = j[e];
                        if (!n.connected || null == x[e]) continue;
                        let l = x[e].find(t => !t.is_restricted && "Computer" === t.type);
                        null != l && t.push({
                            socket: n,
                            device: l
                        })
                    }
                    return t
                }
                canPlay(t) {
                    let {
                        sync_id: e,
                        party: n
                    } = t;
                    return null != M() && null != e && null != n && null != n.id && (0, N.isSpotifyParty)(n.id)
                }
                getSyncingWith() {
                    return i
                }
                wasAutoPaused() {
                    return q
                }
                getLastPlayedTrackId() {
                    return o
                }
                getTrack() {
                    return null != l ? l.track : null
                }
                getPlayerState(t) {
                    return W[t]
                }
                shouldShowActivity() {
                    return null != l && l.account.showActivity && !I.default.isIdle()
                }
                getActivity() {
                    let t, e, n;
                    if (null == l) return null != i ? K(i.userId) : null;
                    let {
                        track: {
                            artists: o,
                            album: r,
                            name: s,
                            id: u,
                            duration: c,
                            isLocal: a
                        },
                        startTime: d,
                        context: f
                    } = l, p = o.slice(0, 5);
                    o.length > 0 && (t = p.map(t => {
                        let {
                            name: e
                        } = t;
                        return e.replace(/;/g, "")
                    }).join("; "));
                    let h = {},
                        T = null != r.image ? (0, C.getAssetFromImageURL)(Y.PlatformTypes.SPOTIFY, r.image.url) : null;
                    null != r.image && null != T && (h.large_image = T), "single" !== r.type && (h.large_text = r.name), null != f && (e = f.uri), n = null != i && null != i.partyId ? i.partyId : "".concat(N.SPOTIFY_PARTY_PREFIX).concat(E.default.getId());
                    let _ = s.length > 128 ? s.substring(0, 125) + "..." : s,
                        S = {
                            name: L.name,
                            assets: h,
                            details: _,
                            state: t,
                            timestamps: {
                                start: d,
                                end: d + c
                            },
                            party: {
                                id: n
                            }
                        };
                    return !a && (S.sync_id = u, S.flags = Y.ActivityFlags.PLAY | Y.ActivityFlags.SYNC, S.metadata = {
                        context_uri: e,
                        album_id: r.id,
                        artist_ids: p.map(t => {
                            let {
                                id: e
                            } = t;
                            return e
                        })
                    }), S
                }
            }
            ts.displayName = "SpotifyStore";
            let tu = new ts(h.default, {
                USER_CONNECTIONS_UPDATE: tn,
                CONNECTION_OPEN: tn,
                SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(t) {
                    let {
                        accountId: e,
                        accessToken: n
                    } = t;
                    return Z(e, n), !1
                },
                SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(t) {
                    let {
                        accountId: e
                    } = t;
                    Q(e)
                },
                SPOTIFY_PROFILE_UPDATE: function(t) {
                    let {
                        accountId: e,
                        isPremium: n
                    } = t, l = j[e];
                    if (null == l) return !1;
                    l.isPremium = n, b.info("Profile updated for ".concat(e, ": isPremium = ").concat(n))
                },
                SPOTIFY_PLAYER_STATE: function(t) {
                    var e, n;
                    let {
                        accountId: o,
                        isPlaying: r,
                        repeat: s,
                        track: u,
                        position: a,
                        device: d,
                        context: p
                    } = t, h = !1;
                    if (null != d) {
                        if (null != x[o]) {
                            let t = x[o].find(t => {
                                let {
                                    id: e
                                } = t;
                                return e === d.id
                            });
                            null == t ? (x[o].push(d), h = !0) : !(0, f.default)(t, d) && (Object.assign(t, d), h = !0), $(o, d.id)
                        } else x[o] = [d], h = !0
                    }
                    r ? null === (n = H) || void 0 === n || n.start(3e4, tl) : (u = null, null === (e = H) || void 0 === e || e.stop());
                    let T = P.default.getAccount(o, Y.PlatformTypes.SPOTIFY);
                    if (null == T) return h;
                    let _ = W[o],
                        y = null != u ? {
                            account: T,
                            track: u,
                            startTime: function(t, e) {
                                let n = Date.now(),
                                    l = null != t ? t.startTime : 0,
                                    i = n - e;
                                return Math.abs(i - l) > 1500 ? i : l
                            }(_, a),
                            context: p,
                            repeat: s
                        } : null,
                        I = null != d && null != i && 0 === a && !r;
                    !I && (W[o] = y);
                    let A = l;
                    if (l = c.values(W).find(t => null != t), ti(E.default.getId()), null == u || I ? V.stop() : V.start(u.duration - a + 5e3, () => B(T.id)), null != i && (!r && a > 0 || null == d || null != y && i.trackId !== y.track.id) ? (b.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(5e3, "ms")), z.start(5e3, () => {
                            b.info("Stopping listening along"), (0, S.default)(), B(T.id)
                        })) : z.isStarted() && (b.info("Listen along stop cancelled as playback of track resumed"), z.stop()), A === l || null == _ && null == y || null != _ && null != y && _.track.id === y.track.id && _.startTime === y.startTime) return h;
                    null != u && v.default.track(Y.AnalyticEvents.ACTIVITY_UPDATED, {
                        party_platform: Y.PlatformTypes.SPOTIFY,
                        track_id: u.id,
                        has_images: !0
                    })
                },
                SPOTIFY_PLAYER_PLAY: function(t) {
                    let {
                        id: e
                    } = t;
                    o = e
                },
                ACTIVITY_PLAY: function(t) {
                    let e, {
                            activity: n,
                            metadata: l
                        } = t,
                        o = M();
                    if (null == o) return !1;
                    let {
                        socket: r,
                        device: s
                    } = o, {
                        sync_id: u,
                        party: c
                    } = n;
                    if (null == u || null == c || null == c.id || !(0, N.isSpotifyParty)(c.id)) return !1;
                    null != l && (e = l.context_uri), null != i && te(), (0, k.play)(r.accountId, r.accessToken, u, {
                        contextUri: e,
                        deviceId: s.id
                    }), b.info("Play started: ".concat(r.accountId, " playing ").concat(u, " on ").concat(s.name))
                },
                ACTIVITY_SYNC: function(t) {
                    let {
                        activity: e,
                        userId: n
                    } = t;
                    return tt(n, e, !0)
                },
                ACTIVITY_SYNC_STOP: te,
                SPOTIFY_SET_DEVICES: function(t) {
                    let {
                        accountId: e,
                        devices: n
                    } = t;
                    x[e] = n, b.info("Devices updated for ".concat(e, ":"), n)
                },
                SPOTIFY_SET_ACTIVE_DEVICE: function(t) {
                    let {
                        accountId: e,
                        deviceId: n
                    } = t;
                    $(e, n)
                },
                SPEAKING: function(t) {
                    let {
                        userId: e
                    } = t;
                    return ti(e)
                },
                VOICE_STATE_UPDATES: function(t) {
                    let {
                        voiceStates: e
                    } = t;
                    return e.reduce((t, e) => {
                        let {
                            userId: n
                        } = e;
                        return ti(n) || t
                    }, !1)
                },
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(t) {
                    var e;
                    let {
                        settings: n
                    } = t;
                    if ((null == n ? void 0 : n.desktopSettings) != null) {
                        null === (e = H) || void 0 === e || e.stop();
                        let {
                            sourceId: t,
                            sound: l
                        } = null == n ? void 0 : n.desktopSettings, i = null != t && g.default.getObservedAppNameForWindow(t) === L.name;
                        i && l ? (H = new p.Interval).start(3e4, tl) : H = null
                    }
                }
            });
            var tc = tu
        },
        550368: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getAssetFromImageURL: function() {
                    return I
                },
                getAssetImage: function() {
                    return A
                },
                getAssets: function() {
                    return g
                },
                fetchAssetIds: function() {
                    return C
                },
                getAssetIds: function() {
                    return k
                }
            });
            var l = n("627445"),
                i = n.n(l),
                o = n("917351"),
                r = n.n(o),
                s = n("872717"),
                u = n("913144"),
                c = n("605250"),
                a = n("407063"),
                d = n("49111");
            let f = "https://i.scdn.co/image/",
                p = (t, e, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(t, "-").concat(e, "x").concat(n, ".jpg"),
                h = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
                T = t => "https://i.ytimg.com/vi/".concat(t, "/hqdefault_live.jpg"),
                _ = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
                S = {
                    [d.PlatformTypes.SPOTIFY]: {
                        deserialize: t => "".concat(f).concat(encodeURIComponent(t)),
                        serialize: t => t.split(f)[1]
                    },
                    [d.PlatformTypes.TWITCH]: {
                        deserialize: (t, e) => p(encodeURIComponent(t), e[0], e[1]),
                        serialize: t => {
                            let e = t.match(h);
                            return null != e ? e[1] : null
                        }
                    },
                    [d.PlatformTypes.YOUTUBE]: {
                        deserialize: t => T(encodeURIComponent(t)),
                        serialize: t => {
                            let e = t.match(_);
                            return null != e ? e[1] : null
                        }
                    },
                    mp: {
                        deserialize: t => (i(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(t, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
                        serialize: t => t
                    }
                },
                y = {},
                E = {};
            async function P(t) {
                let {
                    body: e
                } = await s.default.get({
                    url: d.Endpoints.APPLICATION_ASSETS(t),
                    oldFormErrors: !0
                });
                return y[t] = {
                    assets: r.keyBy(e, "name"),
                    lastUpdated: Date.now()
                }
            }

            function I(t, e) {
                let n = S[t].serialize(e);
                return n ? "".concat(t, ":").concat(n.toString()) : null
            }

            function A(t, e, n) {
                if (null != e && e.includes(":")) {
                    let [t, l] = e.split(":");
                    if (t === d.PlatformTypes.TWITCH) {
                        if (null == n || "number" == typeof n) {
                            new(0, c.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                            return
                        }
                        return S[d.PlatformTypes.TWITCH].deserialize(l, n)
                    }
                    return Object.prototype.hasOwnProperty.call(S, t) ? S[t].deserialize(l) : void 0
                }
                if (null == t || null == e) return;
                let l = "number" == typeof n ? "?size=".concat((0, a.getBestMediaProxySize)(n)) : "";
                return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(t, "/").concat(e, ".png").concat(l) : "".concat(s.default.getAPIBaseURL(), "/applications/").concat(t, "/app-assets/").concat(e, ".png").concat(l)
            }
            async function g(t) {
                let {
                    assets: e
                } = await
                function(t) {
                    var e;
                    let n = y[t];
                    return null == n || (e = n.lastUpdated, Date.now() - e > 36e5) ? P(t) : Promise.resolve(n)
                }(t);
                return e
            }
            async function m(t, e) {
                let n = e.filter(t => null != t && !Object.prototype.hasOwnProperty.call(E, t) && null == E[t]);
                if (0 === n.length) return;
                let {
                    body: l
                } = await s.default.post({
                    url: d.Endpoints.APPLICATION_EXTERNAL_ASSETS(t),
                    body: {
                        urls: n
                    },
                    oldFormErrors: !0
                });
                for (let {
                        url: t,
                        external_asset_path: e
                    }
                    of l) E[t] = e
            }

            function O(t, e) {
                let n = 0,
                    l = t.filter(t => (null == t ? void 0 : t.startsWith("http:")) || (null == t ? void 0 : t.startsWith("https:")));
                if (l.length > 0)
                    for (let l = 0; l < t.length; l++) {
                        let i = t[l];
                        if (null == i) continue;
                        let o = Object.prototype.hasOwnProperty.call(E, i) ? E[i] : void 0;
                        null != o && (e[l] = I("mp", o), n++)
                    }
                return n === t.length
            }

            function v(t, e, n, l) {
                let i = !1;
                for (let o = 0; o < t.length; o++) {
                    let r = t[o];
                    if (null == r || null != e[o]) continue;
                    let s = Object.prototype.hasOwnProperty.call(n, r) && n[r];
                    if (!s) {
                        if (null == l || l <= 0) {
                            e[o] = null;
                            continue
                        }
                        i = !0
                    }
                    e[o] = s.id
                }
                return i
            }
            async function C(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                u.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH",
                    applicationId: t
                });
                let l = [],
                    i = e.filter(t => (null == t ? void 0 : t.startsWith("http:")) || (null == t ? void 0 : t.startsWith("https:")));
                i.length > 0 && await m(t, i);
                let o = O(e, l);
                if (o) return u.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                    applicationId: t
                }), l;
                let r = await g(t),
                    s = v(e, l, r, n);
                return s ? P(t).then(() => C(t, e, n - 1)) : (u.default.dispatch({
                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                    applicationId: t
                }), l)
            }

            function k(t, e) {
                var n;
                let l = [],
                    i = O(e, l);
                if (i) return l;
                let o = null === (n = y[t]) || void 0 === n ? void 0 : n.assets;
                return null == o ? l : (v(e, l, o), l)
            }
        }
    }
]);
//# sourceMappingURL=2ce217de6147359e9cd0.js.map