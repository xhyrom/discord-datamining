(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47146"], {
        968194: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                sync: function() {
                    return d
                },
                play: function() {
                    return s
                },
                getMetadata: function() {
                    return o
                }
            }), i("70102");
            var n = i("872717"),
                l = i("913144"),
                a = i("884385"),
                u = i("824563"),
                r = i("49111");

            function d(t, e) {
                l.default.dispatch({
                    type: "ACTIVITY_SYNC",
                    activity: t,
                    userId: e
                })
            }

            function s(t, e) {
                (0, a.getSpotifyMetadataFromActivity)(t, e).then(i => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: t,
                    userId: e,
                    metadata: i
                })).catch(() => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: t,
                    userId: e
                }))
            }
            async function o(t, e) {
                let i = t.metadata;
                if (null != i) return i;
                let a = u.default.getActivityMetadata(e);
                if (null != a) return a;
                if (null == t.session_id) throw Error("null/undefined session_id");
                let {
                    body: d
                } = await n.default.get({
                    url: r.Endpoints.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
                    oldFormErrors: !0
                });
                return l.default.dispatch({
                    type: "ACTIVITY_METADATA_UPDATE",
                    metadata: d,
                    userId: e
                }), d
            }
        },
        901582: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return l
                }
            });
            var n, l, a = i("37983"),
                u = i("884691"),
                r = i("748820"),
                d = i("599110"),
                s = i("117362"),
                o = i("49111");
            (n = class extends u.Component {
                renderProvider(t) {
                    var e, i;
                    let {
                        section: n,
                        page: l,
                        object: u,
                        objectType: r,
                        children: s
                    } = this.props, o = this.mergeLocation(t.location, this.getLocation(l, n, u, r)), c = this.getContext(o, null !== (e = this._loadDate) && void 0 !== e ? e : t.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : t.loadId);
                    return (0, a.jsx)(d.AnalyticsContext.Provider, {
                        value: c,
                        children: s
                    })
                }
                render() {
                    let {
                        context: t
                    } = this.props;
                    return null != t ? this.renderProvider(t) : (0, a.jsx)(d.AnalyticsContext.Consumer, {
                        children: t => this.renderProvider(t)
                    })
                }
                constructor(t) {
                    super(t), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((t, e, i, n) => {
                        let l = {};
                        return null != t && (l.page = t), null != e && (l.section = e), null != i && (l.object = i), null != n && (l.objectType = n), l
                    }), this.mergeLocation = (0, s.cachedFunction)((t, e) => ({
                        ...t,
                        ...e
                    })), this.getContext = (0, s.cachedFunction)((t, e, i) => ({
                        location: t,
                        loadDate: e,
                        loadId: i
                    })), null != t.loadId ? this._loadId = t.loadId : t.root && (this._loadId = (0, r.v4)())
                }
            }).Pages = o.AnalyticsPages, n.Sections = o.AnalyticsSections, n.Objects = o.AnalyticsObjects, n.ObjectTypes = o.AnalyticsObjectTypes, n.defaultProps = {
                root: !1
            }, l = n
        },
        289732: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return d
                }
            });
            var n = i("446674"),
                l = i("913144");

            function a() {
                return {
                    usageByApplicationId: {},
                    shelfOrder: []
                }
            }
            let u = a();
            class r extends n.default.PersistedStore {
                initialize(t) {
                    u = {
                        ...a(),
                        ...null != t ? t : {}
                    }
                }
                getState() {
                    return u
                }
            }
            r.displayName = "ActivityShelfStore", r.persistKey = "ActivityShelfStore";
            var d = new r(l.default, {
                LOGOUT: function() {
                    u = a()
                }
            })
        },
        898065: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                toggleUseActivityUrlOverride: function() {
                    return l
                },
                setActivityUrlOverride: function() {
                    return a
                },
                markActivityUsed: function() {
                    return u
                },
                updateFilter: function() {
                    return r
                }
            });
            var n = i("913144");

            function l() {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
                })
            }

            function a(t) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
                    activityUrlOverride: t
                })
            }

            function u(t) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: t,
                    timestamp: new Date().getTime()
                })
            }

            function r(t) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
                    filter: t
                })
            }
        },
        648456: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                getActiveAnalyticsSessionIDs: function() {
                    return J
                },
                default: function() {
                    return n
                }
            }), i("424973"), i("222007");
            var n, l = i("627445"),
                a = i.n(l),
                u = i("748820"),
                r = i("913144"),
                d = i("255397"),
                s = i("316272"),
                o = i("651057"),
                c = i("299285"),
                f = i("191145"),
                _ = i("601222"),
                E = i("233069"),
                I = i("271938"),
                A = i("42203"),
                T = i("945956"),
                C = i("18494"),
                v = i("697218"),
                S = i("599110"),
                p = i("773336"),
                N = i("289732"),
                y = i("550766"),
                h = i("191225"),
                D = i("602718"),
                O = i("885829"),
                L = i("986214"),
                g = i("126939"),
                m = i("837707"),
                P = i("334368"),
                M = i("803353"),
                b = i("420444"),
                U = i("954016"),
                R = i("49111"),
                V = i("782340");
            let F = {},
                Y = {};

            function w(t) {
                var e;
                let i = null == t ? void 0 : null === (e = t.activity) || void 0 === e ? void 0 : e.client_platform_config[(0, P.default)((0, p.getOS)())].release_phase;
                return {
                    releasePhase: i
                }
            }
            async function B(t) {
                let {
                    channelId: e,
                    applicationId: i,
                    analyticsLocations: n
                } = t, l = A.default.getChannel(e), a = null == l ? void 0 : l.getGuildId(), u = v.default.getCurrentUser();
                if (null == l || null == u) return;
                let r = h.default.getShelfActivities(a),
                    d = N.default.getState().shelfOrder,
                    s = 0 === h.default.getEmbeddedActivitiesForChannel(e).filter(t => t.applicationId === i).length,
                    o = (0, D.default)({
                        applicationId: i,
                        activityConfigs: r
                    }),
                    c = 1 + d.findIndex(t => t === i),
                    {
                        releasePhase: E
                    } = w(o),
                    I = await (0, _.default)();
                Y[i] = t => {
                    var e, a, r;
                    F[i] = t, S.default.track(R.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                        media_session_id: t.mediaSessionIds[0],
                        activity_session_id: t.activitySessionId,
                        application_id: i,
                        location_stack: n,
                        user_premium_tier: u.premiumType,
                        raw_thermal_state: I,
                        n_participants: f.default.getUserParticipantCount(l.id),
                        is_activity_start: s,
                        release_phase: E,
                        activity_premium_tier_requirement: null == o ? void 0 : null === (e = o.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
                        shelf_rank: null == o ? void 0 : null === (a = o.activity) || void 0 === a ? void 0 : a.shelf_rank,
                        shelf_sorted_rank: c > 0 ? c : null,
                        activity_user_session_id: t.activityUserSessionId,
                        channel_type: l.type
                    }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                        location_stack: n,
                        channel_id: l.id,
                        channel_type: l.type,
                        guild_id: l.getGuildId(),
                        application_id: i,
                        instance_id: t.instanceId,
                        initial_media_session_id: t.mediaSessionIds[0],
                        activity_user_session_id: t.activityUserSessionId,
                        raw_thermal_state: I,
                        is_activity_start: s,
                        shelf_rank: null == o ? void 0 : null === (r = o.activity) || void 0 === r ? void 0 : r.shelf_rank,
                        shelf_sorted_rank: c > 0 ? c : null
                    })
                }
            }
            async function G(t) {
                var e, i;
                let {
                    channelId: n,
                    applicationId: l
                } = t, a = F[l], u = A.default.getChannel(n), r = h.default.getEmbeddedActivityDurationMs(n, l), d = v.default.getCurrentUser(), s = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == d) return;
                let o = h.default.getShelfActivities(s),
                    c = (0, D.default)({
                        applicationId: l,
                        activityConfigs: o
                    }),
                    {
                        releasePhase: f
                    } = w(c),
                    E = await (0, _.default)();
                S.default.track(R.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    media_session_id: a.mediaSessionIds[0],
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: r,
                    user_premium_tier: d.premiumType,
                    raw_thermal_state: E,
                    release_phase: f,
                    activity_premium_tier_requirement: null == c ? void 0 : null === (e = c.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
                    shelf_rank: null == c ? void 0 : null === (i = c.activity) || void 0 === i ? void 0 : i.shelf_rank,
                    activity_user_session_id: a.activityUserSessionId,
                    channel_type: u.type,
                    media_session_ids: a.mediaSessionIds
                }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    application_id: l,
                    instance_ids: [a.instanceId],
                    media_session_ids: a.mediaSessionIds,
                    activity_user_session_id: a.activityUserSessionId,
                    raw_thermal_state: E,
                    duration_ms: r
                }), delete Y[l], delete F[l]
            }

            function H(t) {
                var e, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: a,
                    updateCode: r
                } = t, s = I.default.getId(), o = h.default.getEmbeddedActivitiesForChannel(n), c = A.default.getChannel(n);
                if (r === U.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == c ? void 0 : c.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === a.find(t => t.user_id === s) && d.default.selectParticipant(n, null), !a.some(t => t.user_id === s)) return;
                let f = T.default.getMediaSessionId(),
                    {
                        application_id: _
                    } = l,
                    E = (0, m.default)(l),
                    C = null == f && (null == c ? void 0 : c.isVocal()) === !0;
                null != E && !C && (null === (e = Y[_]) || void 0 === e || e.call(Y, {
                    activitySessionId: E,
                    activityUserSessionId: (0, u.v4)(),
                    instanceId: l.activity_id,
                    mediaSessionIds: null != f ? [f] : []
                }), delete Y[_])
            }

            function k(t) {
                let {
                    mediaSessionId: e
                } = t;
                if (null == e) return;
                for (let t in F) F[t].mediaSessionIds.push(e);
                let i = T.default.getChannelId();
                if (null != i) {
                    let t = h.default.getSelfEmbeddedActivityForChannel(i),
                        n = null == t ? void 0 : t.applicationId,
                        l = null == t ? void 0 : t.instanceId,
                        r = (0, m.default)(t);
                    if (null != n && null != e && null != r && null != l) {
                        let t = F[n],
                            i = Y[n];
                        a(null == t || null == i, "an active session and awaiting session both exist"), null == i || i({
                            activitySessionId: r,
                            activityUserSessionId: (0, u.v4)(),
                            instanceId: l,
                            mediaSessionIds: [e]
                        }), delete Y[n]
                    }
                }
            }

            function J(t) {
                return F[t]
            }
            n = class extends s.default {
                _initialize() {
                    C.default.addChangeListener(this.handleSelectedChannelUpdate), r.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.subscribe("EMBEDDED_ACTIVITY_OPEN", B), r.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), r.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), r.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.subscribe("MEDIA_SESSION_JOINED", k)
                }
                _terminate() {
                    C.default.removeChangeListener(this.handleSelectedChannelUpdate), r.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", B), r.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), r.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), r.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.unsubscribe("MEDIA_SESSION_JOINED", k)
                }
                constructor(...t) {
                    super(...t), this.handleSelectedChannelUpdate = () => {
                        let t = C.default.getVoiceChannelId();
                        for (let {
                                channelId: e,
                                applicationId: i
                            }
                            of h.default.getSelfEmbeddedActivities().values())(0, b.default)(e) && e !== t && this.leaveActivity({
                            channelId: e,
                            applicationId: i
                        });
                        if (null != t) {
                            let e = h.default.getEmbeddedActivitiesForChannel(t),
                                i = I.default.getId();
                            e.forEach(t => {
                                if (t.userIds.has(i)) {
                                    let e = h.default.getSelfEmbeddedActivityForChannel(t.channelId);
                                    null == e && (0, y.disconnectEmbeddedActivity)(t.channelId, t.applicationId)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = t => {
                        let {
                            error: e,
                            guildId: i
                        } = t;
                        if (null == i) return;
                        let n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (e.code) {
                            case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case R.AbortCodes.INVALID_PERMISSIONS:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                                break;
                            case R.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
                        }
                        this.showLaunchErrorModal(n)
                    }, this.superHandleRPCDisconnect = t => {
                        let {
                            reason: e,
                            application: i
                        } = t, n = i.id;
                        if (null != n && null != e) {
                            for (let {
                                    applicationId: t,
                                    channelId: e
                                }
                                of h.default.getSelfEmbeddedActivities().values()) t === n && this.leaveActivity({
                                channelId: e,
                                applicationId: n
                            });
                            e.code !== R.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(e, n)
                        }
                    }, this.handleDeferredOpen = async t => {
                        var e, i, n;
                        let l;
                        let {
                            channelId: a,
                            applicationId: u,
                            analyticsLocations: r
                        } = t, d = A.default.getChannel(a);
                        if (void 0 === d || E.GUILD_VOCAL_CHANNEL_TYPES.has(null == d ? void 0 : d.type) && C.default.getVoiceChannelId() !== a) return;
                        let s = h.default.getSelfEmbeddedActivityForChannel(a);
                        if ((null == s ? void 0 : s.applicationId) === u) return;
                        let f = await o.default.fetchApplication(u),
                            _ = (0, g.getIsActivitiesEnabledForCurrentPlatform)(d);
                        if (!_) {
                            this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, M.default)(null == f ? void 0 : null === (e = f.embedded_activity_config) || void 0 === e ? void 0 : e.supported_platforms)) {
                            this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let I = null == s ? void 0 : s.applicationId;
                        null != I && (await o.default.fetchApplication(I), l = c.default.getApplication(I));
                        let T = null !== (i = null == d ? void 0 : d.getGuildId()) && void 0 !== i ? i : void 0,
                            {
                                activityConfigs: v,
                                applications: S
                            } = await (0, y.fetchShelf)({
                                guildId: T
                            }),
                            p = (0, D.default)({
                                applicationId: u,
                                activityConfigs: v,
                                applications: S
                            });
                        if (null == p) {
                            let t = await (0, y.fetchShelf)({
                                guildId: T,
                                force: !0
                            });
                            p = (0, D.default)({
                                applicationId: u,
                                activityConfigs: t.activityConfigs,
                                applications: t.applications
                            })
                        }
                        let N = h.default.getEmbeddedActivitiesForChannel(a).find(t => t.applicationId === u),
                            m = null !== (n = null == N ? void 0 : N.userIds.size) && void 0 !== n ? n : 0;
                        m > 0 ? (0, O.maybeJoinEmbeddedActivity)({
                            channelId: a,
                            applicationId: u,
                            instanceId: null == N ? void 0 : N.instanceId,
                            inputApplication: null,
                            analyticsLocations: r,
                            embeddedActivitiesManager: this
                        }) : await (0, L.default)({
                            activityItem: p,
                            currentEmbeddedApplication: l,
                            channelId: a,
                            guildId: T,
                            embeddedActivitiesManager: this,
                            analyticsLocations: r
                        })
                    }
                }
            }
        },
        213765: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                confirmActivityAgeGateAlert: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("870346"),
                u = i("49111");

            function r(t) {
                let {
                    application: e,
                    onAgree: r,
                    onDisagree: d
                } = t, s = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT), o = s ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ActivityAgeGateModal: t
                    } = await i.el("413012").then(i.bind(i, "413012"));
                    return i => (0, n.jsx)(t, {
                        ...i,
                        application: e,
                        onAgree: r,
                        onDisagree: d
                    })
                }, {
                    modalKey: "activity-age-gate",
                    contextKey: o
                }), Promise.resolve()
            }
        },
        370507: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("404118"),
                l = i("782340");

            function a(t, e, i, a) {
                var u, r;
                n.default.show({
                    title: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: l.default.Messages.CANCEL,
                    confirmText: l.default.Messages.CONFIRM,
                    onConfirm: i,
                    onCancel: a,
                    body: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                        currentApplicationName: null !== (u = null == t ? void 0 : t.name) && void 0 !== u ? u : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        currentApplicationChannelName: null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
                    })
                })
            }
        },
        772926: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                confirmExternalAppLaunchAlert: function() {
                    return a
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078");

            function a(t) {
                let {
                    application: e,
                    onConfirm: a,
                    onCancel: u
                } = t;
                return (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await i.el("285281").then(i.bind(i, "285281"));
                    return i => (0, n.jsx)(t, {
                        application: e,
                        onConfirm: a,
                        onCancel: u,
                        ...i
                    })
                }), Promise.resolve()
            }
        },
        602718: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return l
                }
            });
            var n = i("299285");

            function l(t) {
                var e;
                let {
                    applicationId: i,
                    activityConfigs: l,
                    applications: a
                } = t, u = null !== (e = null == a ? void 0 : a.find(t => t.id === i)) && void 0 !== e ? e : n.default.getApplication(i), r = l.find(t => t.application_id === i);
                return null == r || null == u ? null : {
                    activity: r,
                    application: u
                }
            }
        },
        706508: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return A
                }
            });
            var n = i("299285"),
                l = i("42203"),
                a = i("18494"),
                u = i("697218"),
                r = i("427953"),
                d = i("550766"),
                s = i("900551"),
                o = i("420444"),
                c = i("541473"),
                f = i("407908"),
                _ = i("578708"),
                E = i("954016"),
                I = i("49111");
            async function A(t) {
                let {
                    applicationId: e,
                    currentEmbeddedApplication: i,
                    activityChannelId: A,
                    locationObject: T,
                    embeddedActivitiesManager: C,
                    analyticsLocations: v
                } = t, S = l.default.getChannel(A), p = null == S ? void 0 : S.getGuildId(), N = null == p || "" === p, y = u.default.getCurrentUser();
                if (null == S || N && !S.isPrivate() || null == A || null == y) return Promise.resolve(!1);
                if (a.default.getVoiceChannelId() === A && (null == i ? void 0 : i.id) === e) return (0, _.default)(p, A), Promise.resolve(!0);
                let h = await (0, s.confirmActivityLaunchChecks)({
                    applicationId: e,
                    application: n.default.getApplication(e),
                    channel: S,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: C,
                    user: y
                });
                if (!h) return !1;
                let D = (0, o.default)(S.id),
                    O = E.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(S.type);
                if (D) {
                    let t = await (0, c.default)({
                        channelId: S.id,
                        bypassChangeModal: null != i
                    });
                    if (!t) return !1
                } else if (!(0, r.isActivitiesInTextEnabled)(S, "joinEmbeddedActivity") || !O) return !1;
                return (0, _.default)(p, A), (0, d.startEmbeddedActivity)(A, e, v), (0, f.default)({
                    type: I.AnalyticsGameOpenTypes.JOIN,
                    userId: y.id,
                    applicationId: e,
                    locationObject: T,
                    analyticsLocations: v
                }), !0
            }
        },
        885829: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                maybeJoinEmbeddedActivity: function() {
                    return C
                }
            });
            var n = i("404118"),
                l = i("651057"),
                a = i("299285"),
                u = i("645999"),
                r = i("653047"),
                d = i("42203"),
                s = i("305961"),
                o = i("957255"),
                c = i("697218"),
                f = i("800762"),
                _ = i("191225"),
                E = i("706508"),
                I = i("126939"),
                A = i("501260"),
                T = i("782340");
            async function C(t) {
                var e;
                let {
                    channelId: i,
                    applicationId: C,
                    instanceId: v,
                    inputApplication: S,
                    analyticsLocations: p,
                    embeddedActivitiesManager: N
                } = t, y = _.default.getEmbeddedActivitiesForChannel(i), h = y.find(t => t.applicationId === C && (null == v || t.instanceId === v)), D = S;
                if (null == D) {
                    let t = await l.default.fetchApplication(C);
                    D = r.default.createFromServer(t)
                }
                if (null == h || null == D) return;
                let O = c.default.getCurrentUser(),
                    L = d.default.getChannel(i),
                    g = (0, A.default)({
                        userId: null == O ? void 0 : O.id,
                        application: D,
                        channelId: i,
                        currentUser: O,
                        isActivitiesEnabledForCurrentPlatform: (0, I.getIsActivitiesEnabledForCurrentPlatform)(L),
                        ChannelStore: d.default,
                        VoiceStateStore: f.default,
                        PermissionStore: o.default,
                        GuildStore: s.default
                    }),
                    m = _.default.getSelfEmbeddedActivityForChannel(i),
                    P = null == m ? void 0 : m.applicationId,
                    M = null != P && null !== (e = a.default.getApplication(P)) && void 0 !== e ? e : void 0;
                ! function(t) {
                    let {
                        embeddedActivityJoinability: e,
                        handleCanJoin: i
                    } = t;
                    switch (e) {
                        case A.EmbeddedActivityJoinability.CAN_JOIN:
                            null == i || i();
                            break;
                        case A.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            (0, u.showActivitiesInvalidPermissionsAlert)();
                            break;
                        case A.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            n.default.show({
                                title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: T.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case A.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            n.default.show({
                                title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: T.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case A.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                            n.default.show({
                                title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                                hideActionSheet: !1
                            });
                            break;
                        case A.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                        case A.EmbeddedActivityJoinability.CHANNEL_FULL:
                        case A.EmbeddedActivityJoinability.NO_CHANNEL:
                        case A.EmbeddedActivityJoinability.NO_USER:
                            n.default.show({
                                title: T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: T.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                                hideActionSheet: !1
                            })
                    }
                }({
                    embeddedActivityJoinability: g,
                    handleCanJoin: async function t() {
                        null != h && await (0, E.default)({
                            applicationId: h.applicationId,
                            currentEmbeddedApplication: M,
                            activityChannelId: i,
                            locationObject: {},
                            embeddedActivitiesManager: N,
                            analyticsLocations: p
                        })
                    }
                })
            }
        },
        986214: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return y
                }
            });
            var n = i("404118"),
                l = i("645999"),
                a = i("42203"),
                u = i("305961"),
                r = i("957255"),
                d = i("697218"),
                s = i("659500"),
                o = i("427953"),
                c = i("898065"),
                f = i("550766"),
                _ = i("900551"),
                E = i("943349"),
                I = i("420444"),
                A = i("541473"),
                T = i("407908"),
                C = i("578708"),
                v = i("702173"),
                S = i("954016"),
                p = i("49111"),
                N = i("782340");
            async function y(t) {
                let {
                    activityItem: e,
                    currentEmbeddedApplication: i,
                    locationObject: y,
                    channelId: h,
                    guildId: D,
                    embeddedActivitiesManager: O,
                    analyticsLocations: L
                } = t, g = u.default.getGuild(D), m = d.default.getCurrentUser();
                if (null == g && !(0, v.isPrivateChannelWithEnabledActivities)(h) || null == m || null == e || null == e.application) return !1;
                if (null == h) return s.ComponentDispatch.dispatch(p.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                    applicationId: e.application.id
                }), !1;
                let P = a.default.getChannel(h);
                if (null == P) return !1;
                let M = null != h ? (0, E.getEmbeddedActivityLaunchability)({
                    channelId: h,
                    ChannelStore: a.default,
                    GuildStore: u.default,
                    PermissionStore: r.default
                }) : E.EmbeddedActivityLaunchability.NO_CHANNEL;
                if (M !== E.EmbeddedActivityLaunchability.CAN_LAUNCH) return M === E.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, l.showActivitiesInvalidPermissionsAlert)() : M === E.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && n.default.show({
                    title: N.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                    body: N.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                    hideActionSheet: !1
                }), !1;
                let b = await (0, _.confirmActivityLaunchChecks)({
                    applicationId: e.application.id,
                    application: e.application,
                    channel: P,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: O,
                    user: m
                });
                if (!b) return !1;
                let U = (0, I.default)(h),
                    R = S.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(P.type);
                if (U) {
                    let t = await (0, A.default)({
                        channelId: h,
                        bypassChangeModal: null != i
                    });
                    if (!t) return !1
                } else if (!(0, o.isActivitiesInTextEnabled)(P, "handleStartEmbeddedActivity") || !R) return !1;
                return f.startEmbeddedActivity(h, e.application.id, L), (0, C.default)(D, h), (0, T.default)({
                    type: p.AnalyticsGameOpenTypes.LAUNCH,
                    userId: m.id,
                    applicationId: e.application.id,
                    locationObject: y,
                    analyticsLocations: L
                }), c.markActivityUsed(e.application.id), !0
            }
        },
        126939: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useIsActivitiesEnabledForCurrentPlatform: function() {
                    return a
                },
                getIsActivitiesEnabledForCurrentPlatform: function() {
                    return u
                }
            });
            var n = i("394846");

            function l() {
                return !n.isMobile && !n.isTablet && !0
            }

            function a(t) {
                return l()
            }

            function u(t) {
                return l()
            }
        },
        612696: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return d
                }
            });
            var n = i("773336"),
                l = i("126939"),
                a = i("501260"),
                u = i("871388"),
                r = i("49111");

            function d(t) {
                let {
                    user: e,
                    activity: i,
                    application: d,
                    channelId: s,
                    currentUser: o,
                    isEmbedded: c,
                    ChannelStore: f,
                    GuildStore: _,
                    GuildMemberCountStore: E,
                    RelationshipStore: I,
                    SelectedChannelStore: A,
                    VoiceStateStore: T,
                    PermissionStore: C
                } = t, v = f.getChannel(s), S = (0, l.getIsActivitiesEnabledForCurrentPlatform)(v);
                if (null == e) return !1;
                if (c) return (0, a.default)({
                    userId: e.id,
                    activity: i,
                    channelId: s,
                    currentUser: o,
                    application: d,
                    isActivitiesEnabledForCurrentPlatform: S,
                    ChannelStore: f,
                    VoiceStateStore: T,
                    PermissionStore: C,
                    GuildStore: _
                }) === a.EmbeddedActivityJoinability.CAN_JOIN;
                if (!(0, n.isDesktop)()) return !1;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_FRIENDS) && I.isFriend(e.id)) return !0;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    let t = f.getChannel(A.getVoiceChannelId());
                    if (null == t || !T.isInChannel(t.id, e.id)) return !1;
                    switch (t.type) {
                        case r.ChannelTypes.DM:
                        case r.ChannelTypes.GROUP_DM:
                            return !0
                    }
                    let i = _.getGuild(t.getGuildId());
                    if (null == i || i.hasFeature(r.GuildFeatures.COMMUNITY)) return !1;
                    let n = E.getMemberCount(i.id);
                    return null != n && n < 100
                }
                return !1
            }
        },
        900551: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                confirmActivityLaunchChecks: function() {
                    return C
                }
            }), i("702976");
            var n = i("913144"),
                l = i("448993"),
                a = i("651057"),
                u = i("299285"),
                r = i("653047"),
                d = i("568734"),
                s = i("191225"),
                o = i("213765"),
                c = i("370507"),
                f = i("772926"),
                _ = i("49111");
            async function E(t, e) {
                try {
                    var i;
                    return null !== (i = u.default.getApplication(t)) && void 0 !== i ? i : r.default.createFromServer(await a.default.fetchApplication(t))
                } catch (i) {
                    n.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                        applicationId: t,
                        guildId: e,
                        error: new l.APIError(i)
                    })
                }
            }
            async function I(t) {
                let {
                    channel: e,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: n
                } = t;
                if (null != i) {
                    let t = await new Promise(t => {
                        (0, c.default)(i, e, () => {
                            n.leaveActivity({
                                channelId: e.id,
                                applicationId: i.id
                            }), t(!0)
                        }, () => t(!1))
                    });
                    if (!t) return !1
                }
                return !0
            }
            async function A(t) {
                let {
                    application: e,
                    applicationId: i,
                    channel: n,
                    user: l
                } = t;
                if (null == l.nsfwAllowed) {
                    var a, u;
                    let t = null != e ? e : await E(i, n.getGuildId());
                    if (null == t) return !1;
                    let l = null !== (u = null === (a = t.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) && void 0 !== u && u;
                    if (l) {
                        let e = await new Promise(e => {
                            (0, o.confirmActivityAgeGateAlert)({
                                application: t,
                                onAgree: () => e(!0),
                                onDisagree: () => e(!1)
                            })
                        });
                        if (!e) return !1
                    }
                }
                return !0
            }
            async function T(t) {
                let {
                    application: e,
                    applicationId: i,
                    channel: n
                } = t, l = null != e ? e : await E(i, n.getGuildId());
                return null != l && (!!((0, d.hasFlag)(l.flags, _.ApplicationFlags.EMBEDDED_RELEASED) || s.default.hasActivityEverBeenLaunched(i)) || new Promise(t => {
                    (0, f.confirmExternalAppLaunchAlert)({
                        application: l,
                        onConfirm: () => t(!0),
                        onCancel: () => t(!1)
                    })
                }))
            }
            async function C(t) {
                let e = await I(t);
                if (!e) return !1;
                let i = await A(t);
                if (!i) return !1;
                let n = await T(t);
                return !!n || !1
            }
        },
        501260: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                EmbeddedActivityJoinability: function() {
                    return l
                },
                default: function() {
                    return I
                },
                useEmbeddedActivityJoinability: function() {
                    return A
                }
            });
            var n, l, a = i("446674"),
                u = i("42203"),
                r = i("305961"),
                d = i("957255"),
                s = i("697218"),
                o = i("800762"),
                c = i("404008"),
                f = i("126939"),
                _ = i("803353"),
                E = i("49111");

            function I(t) {
                var e, i, n;
                let {
                    userId: l,
                    activity: a,
                    application: u,
                    channelId: r,
                    currentUser: d,
                    isActivitiesEnabledForCurrentPlatform: s,
                    ChannelStore: o,
                    VoiceStateStore: f,
                    PermissionStore: I,
                    GuildStore: A
                } = t;
                if (null == l) return 8;
                if ((null == d ? void 0 : d.nsfwAllowed) === !1 && (null == u ? void 0 : null === (e = u.embeddedActivityConfig) || void 0 === e ? void 0 : e.requires_age_gate) === !0) return 7;
                if (!s) return 5;
                if (!(0, _.default)(null == u ? void 0 : null === (i = u.embeddedActivityConfig) || void 0 === i ? void 0 : i.supported_platforms)) return 6;
                let T = null != r ? r : null === (n = f.getVoiceStateForSession(l, null == a ? void 0 : a.session_id)) || void 0 === n ? void 0 : n.channelId;
                if (null == T) return 4;
                let C = o.getChannel(r);
                if (null == C) return 4;
                let v = C.getGuildId();
                if (!C.isPrivate()) {
                    if (null == v) return 10;
                    let t = A.getGuild(v);
                    if ((null == t ? void 0 : t.afkChannelId) === C.id) return 9;
                    let e = f.getCurrentClientVoiceChannelId(C.getGuildId()) === T,
                        i = (0, c.isChannelFull)(C, f, A),
                        n = I.can(E.Permissions.CONNECT, C),
                        l = I.can(E.Permissions.USE_EMBEDDED_ACTIVITIES, C);
                    if (!l) return 1;
                    if (C.isVocal() && !e) {
                        if (i) return 3;
                        if (!n) return 2
                    }
                }
                return 0
            }

            function A(t) {
                let {
                    userId: e,
                    activity: i,
                    channelId: n,
                    application: l
                } = t, c = (0, f.useIsActivitiesEnabledForCurrentPlatform)(null != n ? n : void 0), _ = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()), E = (0, a.useStateFromStores)([u.default, o.default, d.default, r.default], () => I({
                    userId: e,
                    activity: i,
                    application: l,
                    channelId: n,
                    currentUser: _,
                    isActivitiesEnabledForCurrentPlatform: c,
                    ChannelStore: u.default,
                    VoiceStateStore: o.default,
                    PermissionStore: d.default,
                    GuildStore: r.default
                }), [i, l, n, _, c, e]);
                return E
            }(n = l || (l = {}))[n.CAN_JOIN = 0] = "CAN_JOIN", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.CHANNEL_FULL = 3] = "CHANNEL_FULL", n[n.NO_CHANNEL = 4] = "NO_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", n[n.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", n[n.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", n[n.NO_USER = 8] = "NO_USER", n[n.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", n[n.NO_GUILD = 10] = "NO_GUILD"
        },
        943349: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                EmbeddedActivityLaunchability: function() {
                    return l
                },
                getEmbeddedActivityLaunchability: function() {
                    return _
                },
                useEmbeddedActivityLaunchability: function() {
                    return E
                },
                getEmbeddedActivityLaunchabilityLabel: function() {
                    return I
                }
            });
            var n, l, a = i("446674"),
                u = i("42203"),
                r = i("305961"),
                d = i("957255"),
                s = i("126939"),
                o = i("702173"),
                c = i("49111"),
                f = i("782340");

            function _(t) {
                let {
                    channelId: e,
                    ChannelStore: i,
                    GuildStore: n,
                    PermissionStore: l
                } = t, a = i.getChannel(e);
                if (null == a) return 3;
                if (!(0, s.getIsActivitiesEnabledForCurrentPlatform)(a)) return 6;
                if (!(0, o.isPrivateChannelWithEnabledActivities)(a.id)) {
                    let t = a.getGuildId();
                    if (null == t) return 4;
                    let e = n.getGuild(t);
                    if ((null == e ? void 0 : e.afkChannelId) === a.id) return 5;
                    let i = l.can(c.Permissions.CONNECT, a);
                    if (!i) return 2;
                    let u = l.can(c.Permissions.USE_EMBEDDED_ACTIVITIES, a);
                    if (!u) return 1
                }
                return 0
            }

            function E(t) {
                let e = (0, a.useStateFromStores)([u.default, r.default, d.default], () => _({
                    channelId: t,
                    ChannelStore: u.default,
                    GuildStore: r.default,
                    PermissionStore: d.default
                }), [t]);
                return e
            }

            function I(t) {
                switch (t) {
                    case 0:
                        return f.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case 1:
                        return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
                }
            }(n = l || (l = {}))[n.CAN_LAUNCH = 0] = "CAN_LAUNCH", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.NO_CHANNEL = 3] = "NO_CHANNEL", n[n.NO_GUILD = 4] = "NO_GUILD", n[n.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"
        },
        287585: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return l
                }
            });
            var n = i("954016");

            function l(t) {
                if (null != t && null != t.url && n.validStreamURL.test(t.url)) return t.url
            }
        },
        871388: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return l
                }
            }), i("702976");
            var n = i("49111");

            function l(t, e) {
                return e !== n.ActivityFlags.INSTANCE && null != t && null != t.flags && !!(t.flags & e)
            }
        },
        803353: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("798609"),
                l = i("773336");

            function a(t) {
                var e;
                let i;
                return i = (0, l.isIOS)() ? n.EmbeddedActivitySupportedPlatforms.IOS : (0, l.isAndroid)() ? n.EmbeddedActivitySupportedPlatforms.ANDROID : n.EmbeddedActivitySupportedPlatforms.WEB, null !== (e = null == t ? void 0 : t.includes(i)) && void 0 !== e && e
            }
        },
        152311: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("871388"),
                l = i("49111");

            function a(t) {
                return (0, n.default)(t, l.ActivityFlags.EMBEDDED)
            }
        },
        541473: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return c
                }
            }), i("70102");
            var n = i("203288"),
                l = i("242740"),
                a = i("848848"),
                u = i("42203"),
                r = i("957255"),
                d = i("18494"),
                s = i("800762");
            class o extends Error {}
            async function c(t) {
                let {
                    channelId: e,
                    timeoutMs: i = 1e4,
                    bypassChangeModal: c = !1
                } = t, f = u.default.getChannel(e);
                if (null == f) return !1;
                let _ = await l.default.handleVoiceConnect({
                    bypassGuildIdCheck: !0,
                    bypassChangeModal: c,
                    channel: f,
                    connected: s.default.isInChannel(e),
                    needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(e, u.default, n.default, r.default).needSubscriptionToAccess
                });
                if (!_) return !1;
                let E = new Promise((t, n) => {
                    let l = setTimeout(() => {
                        n(new o("Joining voice channel has timed out."))
                    }, i);
                    d.default.addConditionalChangeListener(() => {
                        let i = d.default.getVoiceChannelId();
                        return i !== e || (clearTimeout(l), t(), !1)
                    })
                });
                try {
                    await E
                } catch (t) {
                    if (t instanceof o) return !1;
                    throw t
                }
                return !0
            }
        },
        407908: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("599110"),
                l = i("49111");

            function a(t) {
                let {
                    type: e,
                    source: i,
                    userId: a,
                    applicationId: u,
                    partyId: r,
                    messageId: d,
                    locationObject: s,
                    analyticsLocations: o
                } = t;
                n.default.track(l.AnalyticEvents.APPLICATION_OPENED, {
                    type: e,
                    source: i,
                    application_id: u,
                    party_id: null != r ? r : void 0,
                    other_user_id: a,
                    message_id: d,
                    location: s,
                    location_stack: o
                })
            }
        },
        578708: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return o
                }
            });
            var n = i("255397"),
                l = i("292687"),
                a = i("974889"),
                u = i("393414"),
                r = i("191225"),
                d = i("420444"),
                s = i("49111");

            function o(t, e) {
                let i = l.default.getWindowOpen(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                i ? (0, a.default)(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, u.transitionTo)(s.Routes.CHANNEL(t, e));
                let o = r.default.getSelfEmbeddedActivityForChannel(e);
                null != o && (0, d.default)(e) && n.default.selectParticipant(e, o.applicationId)
            }
        },
        577261: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("446674"),
                l = i("191225");

            function a() {
                return (0, n.useStateFromStores)([l.default], () => l.default.getCurrentEmbeddedActivity())
            }
        },
        698372: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            }), i("222007");
            var n = i("442939"),
                l = i("577261");

            function a() {
                let t = (0, l.default)(),
                    [e] = (0, n.default)(null == t ? [] : [t.applicationId]);
                return null != e ? e : void 0
            }
        },
        702173: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                },
                isPrivateChannelWithEnabledActivities: function() {
                    return u
                }
            });
            var n = i("65597"),
                l = i("42203");

            function a(t) {
                var e;
                let i = (0, n.default)([l.default], () => l.default.getChannel(t)),
                    a = null !== (e = null == i ? void 0 : i.isPrivate()) && void 0 !== e && e;
                return a
            }

            function u(t) {
                var e;
                if (null == t) return !1;
                let i = l.default.getChannel(t),
                    n = null !== (e = null == i ? void 0 : i.isPrivate()) && void 0 !== e && e;
                return n
            }
        },
        141962: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return c
                }
            }), i("222007");
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("913144"),
                u = i("135230"),
                r = i("550766"),
                d = i("648456"),
                s = i("782340");
            class o extends d.default {
                showErrorModal(t) {
                    let {
                        code: e,
                        message: i
                    } = t;
                    (0, l.openModalLazy)(async () => t => (0, n.jsx)(u.default, {
                        title: s.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                            code: e
                        }),
                        body: i,
                        ...t
                    }))
                }
                showLaunchErrorModal(t) {
                    (0, l.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
                        title: s.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: t,
                        ...e
                    }))
                }
                leaveActivity(t) {
                    let {
                        channelId: e,
                        applicationId: i
                    } = t;
                    a.default.wait(() => (0, r.stopEmbeddedActivity)({
                        channelId: e,
                        applicationId: i
                    }))
                }
                constructor(...t) {
                    super(...t), this.handleRPCDisconnect = t => {
                        let {
                            reason: e,
                            application: i
                        } = t;
                        this.superHandleRPCDisconnect({
                            reason: e,
                            application: i
                        })
                    }
                }
            }
            var c = new o
        },
        442939: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return d
                },
                useGetOrFetchApplication: function() {
                    return s
                }
            });
            var n = i("884691"),
                l = i("446674"),
                a = i("233736"),
                u = i("651057"),
                r = i("299285");

            function d(t) {
                let e = n.useRef([]);
                return n.useEffect(() => {
                    !(0, a.areArraysShallowEqual)(t, e.current) && (u.default.fetchApplications(t, !1), e.current = t)
                }, [t]), (0, l.useStateFromStoresArray)([r.default], () => t.map(t => r.default.getApplication(t)))
            }

            function s(t) {
                return d(null != t ? [t] : [])[0]
            }
        },
        242740: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return I
                }
            }), i("70102");
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("987317"),
                u = i("76393"),
                r = i("393414"),
                d = i("755624"),
                s = i("263024"),
                o = i("271938"),
                c = i("18494"),
                f = i("800762"),
                _ = i("792367"),
                E = i("49111"),
                I = {
                    async handleVoiceConnect(t) {
                        let {
                            channel: e,
                            connected: I,
                            needSubscriptionToAccess: A,
                            locked: T = !1,
                            routeDirectlyToChannel: C = !1,
                            bypassChangeModal: v,
                            bypassGuildIdCheck: S = !1
                        } = t;
                        e.isThread() && (await s.default.unarchiveThreadIfNecessary(e.id), !d.default.hasJoined(e.id) && await s.default.joinThread(e, "Join Voice"));
                        let p = u.default.getRemoteSessionId(),
                            N = f.default.getVoiceStateForSession(o.default.getId(), p),
                            y = (null == N ? void 0 : N.channelId) === e.id,
                            h = y || c.default.getChannelId() === f.default.getCurrentClientVoiceChannelId(e.guild_id);
                        return !v && !T && (0, _.shouldShowVoiceChannelChangeConfirmation)(e) ? new Promise(t => {
                            (0, l.openModalLazy)(async () => {
                                let {
                                    default: l
                                } = await i.el("371895").then(i.bind(i, "371895"));
                                return i => (0, n.jsx)(l, {
                                    channel: e,
                                    onConfirm: () => t(this.handleVoiceConnect({
                                        channel: e,
                                        connected: I,
                                        needSubscriptionToAccess: A,
                                        routeDirectlyToChannel: C,
                                        locked: T,
                                        bypassChangeModal: !0
                                    })),
                                    ...i
                                })
                            })
                        }) : (!T && !I && a.default.selectVoiceChannel(e.id), !__OVERLAY__ && (I || h || A || C) && ! function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = t.getGuildId();
                            if (null == i && !e) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                            (0, r.transitionTo)(E.Routes.CHANNEL(i, t.id))
                        }(e, S), !0)
                    }
                }
        },
        292687: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return n.default
                }
            });
            var n = i("870346")
        },
        974889: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return u
                }
            });
            var n = i("773336"),
                l = i("50885"),
                a = i("870346");

            function u(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = a.default.getWindow(t);
                null != i && !i.closed && (n.isPlatformEmbedded ? l.default.focus(t, e) : i.focus())
            }
        },
        884385: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                isSpotifyPlayable: function() {
                    return _
                },
                ensureSpotifyPlayable: function() {
                    return E
                },
                isSpotifyPremium: function() {
                    return I
                },
                ensureSpotifyPremium: function() {
                    return A
                },
                getSpotifyMetadataFromActivity: function() {
                    return C
                }
            }), i("70102"), i("860677"), i("222007");
            var n = i("968194"),
                l = i("376556"),
                a = i("161454"),
                u = i("718517"),
                r = i("613691"),
                d = i("155815"),
                s = i("662285"),
                o = i("450484"),
                c = i("49111");
            let f = 30 * u.default.Millis.SECOND;

            function _(t) {
                return null != t.getActiveSocketAndDevice() || d.default.isProtocolRegistered()
            }

            function E() {
                let t = s.default.getActiveSocketAndDevice();
                if (null != t) return Promise.resolve(t);
                if (!d.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
                let e = s.default.getPlayableComputerDevices();
                if (a.default.isObservedAppRunning(l.default.get(c.PlatformTypes.SPOTIFY).name) && e.length > 0) {
                    let {
                        socket: t,
                        device: i
                    } = e[0];
                    return (0, r.setActiveDevice)(t.accountId, i.id), Promise.resolve({
                        socket: t,
                        device: i
                    })
                }
                return new Promise((t, i) => {
                    let n = setTimeout(() => {
                            s.default.removeChangeListener(l), i(Error("timeout launching spotify"))
                        }, f),
                        l = () => {
                            let i = s.default.getPlayableComputerDevices();
                            for (let {
                                    socket: a,
                                    device: u
                                }
                                of i) null == e.find(t => t.device.id === u.id) && (clearTimeout(n), s.default.removeChangeListener(l), setImmediate(() => {
                                (0, r.setActiveDevice)(a.accountId, u.id), t({
                                    socket: a,
                                    device: u
                                })
                            }))
                        };
                    s.default.addChangeListener(l), window.open("".concat(o.SPOTIFY_APP_PROTOCOL, ":"))
                })
            }

            function I() {
                let t = s.default.getActiveSocketAndDevice();
                if (null == t) return null;
                let {
                    socket: e
                } = t;
                return e.isPremium
            }

            function A() {
                let t = s.default.getActiveSocketAndDevice();
                if (null == t) return Promise.reject(Error("no active profile"));
                let {
                    socket: e
                } = t;
                return e.isPremium ? Promise.resolve() : (0, r.getProfile)(e.accountId, e.accessToken).then(() => {
                    if (!e.isPremium) return Promise.reject(Error("spotify account is not premium"))
                })
            }

            function T(t) {
                if ("string" == typeof t) return t;
                throw Error("value is not a string")
            }
            async function C(t, e) {
                var i;
                let l = await (0, n.getMetadata)(t, e),
                    a = (0, o.getSpotifyResourceType)(T(null !== (i = l.type) && void 0 !== i ? i : o.SpotifyResourceTypes.TRACK));
                if (null === a) throw Error("invalid type ".concat(l.type));
                return {
                    context_uri: "string" == typeof l.context_uri ? l.context_uri : void 0,
                    album_id: T(l.album_id),
                    artist_ids: Array.isArray(l.artist_ids) ? l.artist_ids.map(T) : [],
                    type: a,
                    button_urls: Array.isArray(l.button_url) ? l.button_url.map(T) : []
                }
            }
        },
        170108: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return d
                }
            });
            var n = i("599110"),
                l = i("884385"),
                a = i("450484"),
                u = i("49111");
            let r = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

            function d(t, e, i, a) {
                n.default.track(u.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
                    type: t,
                    source: a,
                    is_premium: (0, l.isSpotifyPremium)(),
                    party_id: r.includes(t) && (null == i ? void 0 : i.party) != null ? i.party.id : null,
                    other_user_id: e.id
                })
            }
        },
        922174: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("926994"),
                l = i("49111");

            function a(t) {
                return !!t || ((0, n.default)(l.PlatformTypes.SPOTIFY, "Spotify Button"), !1)
            }
        },
        782911: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("450484"),
                l = i("782340");

            function a(t, e) {
                switch (e) {
                    case n.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        return t.hasSpotifyAccount ? l.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        }) : l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        });
                    case n.SpotifyActionTypes.EMBED_SYNC:
                        if (!t.hasSpotifyAccount) return l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        });
                        if (t.syncingWithUser || t.syncingWithParty) return l.default.Messages.INVITE_EMBED_JOINED;
                        return l.default.Messages.JOIN;
                    case n.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                    default:
                        return
                }
            }
        },
        629414: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return u
                }
            });
            var n = i("158998"),
                l = i("450484"),
                a = i("782340");

            function u(t, e, i) {
                switch (e) {
                    case l.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        if (t.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                        if (t.playingSameTrack) return a.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                        if (t.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    case l.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                        if (t.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (t.syncingWithUser || t.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        return a.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                            name: null != i ? i : n.default.getName(t.user)
                        });
                    case l.SpotifyActionTypes.EMBED_SYNC:
                        if (t.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (t.syncingWithUser || t.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        if (t.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    default:
                        return
                }
            }
        },
        53887: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return l
                }
            });
            var n = i("884385");

            function l(t, e, i, l) {
                var a, u, r;
                let d = t.hasConnectedAccount(),
                    s = (0, n.isSpotifyPlayable)(t),
                    o = t.getTrack(),
                    c = t.getSyncingWith(),
                    f = t.getActivity(),
                    _ = null !== (r = null !== (u = null == o ? void 0 : o.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : t.getLastPlayedTrackId();
                return {
                    user: i,
                    activity: l,
                    hasSpotifyAccount: d,
                    canPlaySpotify: s,
                    notPlayable: d && !s,
                    syncingWithParty: (null == f ? void 0 : f.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === f.party.id,
                    syncingWithUser: (null == c ? void 0 : c.userId) != null && (null == c ? void 0 : c.userId) === i.id,
                    isCurrentUser: i.id === e.getId(),
                    currentUserTrackId: _,
                    playingSameTrack: null != _ && _ === (null == l ? void 0 : l.sync_id)
                }
            }
        },
        486150: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("968194"),
                u = i("884385"),
                r = i("170108"),
                d = i("922174");
            async function s(t, e, s) {
                let {
                    hasSpotifyAccount: o,
                    activity: c,
                    user: f
                } = t;
                (0, d.default)(o) && null != c && null != c.sync_id && (await (0, u.ensureSpotifyPlayable)(), await (0, u.ensureSpotifyPremium)().catch(t => ((0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await i.el("775195").then(i.bind(i, "775195"));
                    return e => (0, n.jsx)(t, {
                        ...e
                    })
                }), Promise.reject(t))), a.sync(c, f.id), (0, r.default)(e, f, c, s))
            }
        },
        555759: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return r
                }
            });
            var n = i("968194"),
                l = i("884385"),
                a = i("170108"),
                u = i("922174");
            async function r(t, e, i) {
                let {
                    hasSpotifyAccount: r,
                    activity: d,
                    user: s
                } = t;
                (0, u.default)(r) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, s.id), (0, a.default)(e, s, d, i))
            }
        },
        590456: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                UserProfileSections: function() {
                    return a
                },
                UserProfileTypes: function() {
                    return u
                },
                getBadgeAsset: function() {
                    return d
                }
            });
            var n, l, a, u, r = i("49111");

            function d(t) {
                let {
                    API_ENDPOINT: e,
                    CDN_HOST: i
                } = window.GLOBAL_ENV;
                return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(t, ".png") : "".concat(location.protocol).concat(e).concat(r.Endpoints.BADGE_ICON(t))
            }(n = a || (a = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = u || (u = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"
        },
        349649: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var n = i("884691"),
                l = i("446674"),
                a = i("872717"),
                u = i("913144"),
                r = i("555179"),
                d = i("49111");

            function s(t) {
                let e = (0, l.useStateFromStores)([r.default], () => r.default.getNote(t));
                return n.useEffect(() => {
                    null == e && o(t)
                }, [e, t]), null != e ? e : {
                    loading: !0,
                    note: null
                }
            }
            async function o(t) {
                u.default.dispatch({
                    type: "USER_NOTE_LOAD_START",
                    userId: t
                });
                try {
                    let {
                        body: e
                    } = await a.default.get({
                        url: d.Endpoints.NOTE(t),
                        oldFormErrors: !0
                    });
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: t,
                        note: e
                    })
                } catch (e) {
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: t
                    })
                }
            }
        },
        401642: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                openUserProfileModal: function() {
                    return d
                },
                closeUserProfileModal: function() {
                    return s
                }
            });
            var n = i("913144"),
                l = i("327037"),
                a = i("697218"),
                u = i("506885"),
                r = i("49111");

            function d(t) {
                let {
                    userId: e,
                    section: i,
                    guildId: d = r.ME,
                    channelId: s,
                    friendToken: o,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = t, _ = a.default.getUser(e), E = d !== r.ME ? d : void 0;
                if (null == _) return (0, l.fetchProfile)(e, {
                    friendToken: o,
                    guildId: E
                }).then(() => {
                    n.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: e,
                        section: i,
                        guildId: d,
                        channelId: s,
                        friendToken: o,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, u.default)(e, _.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: o,
                    guildId: E
                }), n.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: e,
                    section: i,
                    guildId: d,
                    channelId: s,
                    friendToken: o,
                    autoFocusNote: c,
                    analyticsLocation: f
                })
            }

            function s() {
                n.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        645999: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                showActivitiesInvalidPermissionsAlert: function() {
                    return a
                }
            });
            var n = i("404118"),
                l = i("782340");
            let a = () => {
                n.default.show({
                    title: l.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
                    body: l.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
                    hideActionSheet: !1
                })
            }
        },
        555179: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return d
                }
            });
            var n = i("446674"),
                l = i("913144");
            let a = {};

            function u() {
                a = {}
            }
            class r extends n.default.Store {
                getNote(t) {
                    return a[t]
                }
            }
            r.displayName = "NoteStore";
            var d = new r(l.default, {
                CONNECTION_OPEN: u,
                OVERLAY_INITIALIZE: u,
                USER_NOTE_UPDATE: function(t) {
                    a[t.id] = {
                        loading: !1,
                        note: t.note
                    }
                },
                USER_NOTE_LOAD_START: function(t) {
                    let {
                        userId: e
                    } = t;
                    a[e] = {
                        loading: !0,
                        note: null
                    }
                },
                USER_NOTE_LOADED: function(t) {
                    let {
                        userId: e,
                        note: i
                    } = t;
                    a[e] = {
                        loading: !1,
                        note: null == i ? void 0 : i.note
                    }
                }
            })
        },
        953998: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return f
                }
            });
            var n = i("446674"),
                l = i("862337"),
                a = i("913144"),
                u = i("49111");
            let r = {},
                d = {};

            function s(t, e, i) {
                var n;
                let {
                    applicationId: s
                } = i, o = null !== (n = r[s]) && void 0 !== n ? n : {};
                if (o[e] = t, r[s] = o, !__OVERLAY__ && t === u.ActivityActionStates.FAILED) {
                    null != d[s] && d[s].stop();
                    let t = new l.Timeout;
                    t.start(12e4, () => a.default.dispatch({
                        type: "ACTIVITY_LAUNCH_FAIL",
                        applicationId: s,
                        activityType: e
                    })), d[s] = t
                }
            }

            function o(t) {
                return s(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, t)
            }
            class c extends n.default.Store {
                getState(t, e) {
                    let i = r[t];
                    return null == i ? void 0 : i[e]
                }
                getStates() {
                    return r
                }
            }
            c.displayName = "ActivityLauncherStore";
            var f = new c(a.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        activityLauncherStates: e
                    } = t;
                    r = {
                        ...e
                    }
                },
                ACTIVITY_JOIN_LOADING: t => s(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, t),
                ACTIVITY_JOIN_FAILED: t => s(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, t),
                ACTIVITY_JOIN: o,
                EMBEDDED_ACTIVITY_CLOSE: o,
                ACTIVITY_LAUNCH_FAIL: function(t) {
                    let {
                        applicationId: e,
                        activityType: i
                    } = t, n = r[e];
                    if (null == n || n[i] !== u.ActivityActionStates.FAILED) return !1;
                    delete n[i]
                }
            })
        }
    }
]);
//# sourceMappingURL=47146.bb1e157b1815307904c3.js.map