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
                r = i("824563"),
                u = i("49111");

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
                let a = r.default.getActivityMetadata(e);
                if (null != a) return a;
                if (null == t.session_id) throw Error("null/undefined session_id");
                let {
                    body: d
                } = await n.default.get({
                    url: u.Endpoints.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
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
                r = i("884691"),
                u = i("748820"),
                d = i("599110"),
                s = i("117362"),
                o = i("49111");
            (n = class extends r.Component {
                renderProvider(t) {
                    var e, i;
                    let {
                        section: n,
                        page: l,
                        object: r,
                        objectType: u,
                        children: s
                    } = this.props, o = this.mergeLocation(t.location, this.getLocation(l, n, r, u)), c = this.getContext(o, null !== (e = this._loadDate) && void 0 !== e ? e : t.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : t.loadId);
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
                    })), null != t.loadId ? this._loadId = t.loadId : t.root && (this._loadId = (0, u.v4)())
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
            let r = a();
            class u extends n.default.PersistedStore {
                initialize(t) {
                    r = {
                        ...a(),
                        ...null != t ? t : {}
                    }
                }
                getState() {
                    return r
                }
            }
            u.displayName = "ActivityShelfStore", u.persistKey = "ActivityShelfStore";
            var d = new u(l.default, {
                LOGOUT: function() {
                    r = a()
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
                    return r
                },
                updateFilter: function() {
                    return u
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

            function r(t) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: t,
                    timestamp: new Date().getTime()
                })
            }

            function u(t) {
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
                r = i("748820"),
                u = i("913144"),
                d = i("255397"),
                s = i("316272"),
                o = i("651057"),
                c = i("299285"),
                E = i("191145"),
                _ = i("601222"),
                f = i("233069"),
                I = i("271938"),
                A = i("42203"),
                T = i("945956"),
                C = i("18494"),
                S = i("697218"),
                N = i("599110"),
                v = i("773336"),
                O = i("289732"),
                D = i("550766"),
                p = i("191225"),
                y = i("602718"),
                h = i("885829"),
                L = i("986214"),
                P = i("126939"),
                g = i("837707"),
                R = i("334368"),
                m = i("803353"),
                M = i("420444"),
                U = i("954016"),
                V = i("49111"),
                b = i("782340");
            let F = {},
                Y = {};

            function w(t) {
                var e;
                let i = null == t ? void 0 : null === (e = t.activity) || void 0 === e ? void 0 : e.client_platform_config[(0, R.default)((0, v.getOS)())].release_phase;
                return {
                    releasePhase: i
                }
            }
            async function G(t) {
                let {
                    channelId: e,
                    applicationId: i,
                    analyticsLocations: n
                } = t, l = A.default.getChannel(e), a = null == l ? void 0 : l.getGuildId(), r = S.default.getCurrentUser();
                if (null == l || null == r) return;
                let u = p.default.getShelfActivities(a),
                    d = O.default.getState().shelfOrder,
                    s = 0 === p.default.getEmbeddedActivitiesForChannel(e).filter(t => t.applicationId === i).length,
                    o = (0, y.default)({
                        applicationId: i,
                        activityConfigs: u
                    }),
                    c = 1 + d.findIndex(t => t === i),
                    {
                        releasePhase: f
                    } = w(o),
                    I = await (0, _.default)();
                Y[i] = t => {
                    var e, a, u;
                    F[i] = t, N.default.track(V.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                        media_session_id: t.mediaSessionIds[0],
                        activity_session_id: t.activitySessionId,
                        application_id: i,
                        location_stack: n,
                        user_premium_tier: r.premiumType,
                        raw_thermal_state: I,
                        n_participants: E.default.getUserParticipantCount(l.id),
                        is_activity_start: s,
                        release_phase: f,
                        activity_premium_tier_requirement: null == o ? void 0 : null === (e = o.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
                        shelf_rank: null == o ? void 0 : null === (a = o.activity) || void 0 === a ? void 0 : a.shelf_rank,
                        shelf_sorted_rank: c > 0 ? c : null,
                        activity_user_session_id: t.activityUserSessionId,
                        channel_type: l.type
                    }), N.default.track(V.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
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
                        shelf_rank: null == o ? void 0 : null === (u = o.activity) || void 0 === u ? void 0 : u.shelf_rank,
                        shelf_sorted_rank: c > 0 ? c : null
                    })
                }
            }
            async function B(t) {
                var e, i;
                let {
                    channelId: n,
                    applicationId: l
                } = t, a = F[l], r = A.default.getChannel(n), u = p.default.getEmbeddedActivityDurationMs(n, l), d = S.default.getCurrentUser(), s = null == r ? void 0 : r.getGuildId();
                if (null == a || null == r || null == d) return;
                let o = p.default.getShelfActivities(s),
                    c = (0, y.default)({
                        applicationId: l,
                        activityConfigs: o
                    }),
                    {
                        releasePhase: E
                    } = w(c),
                    f = await (0, _.default)();
                N.default.track(V.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: r.id,
                    guild_id: r.getGuildId(),
                    media_session_id: a.mediaSessionIds[0],
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: u,
                    user_premium_tier: d.premiumType,
                    raw_thermal_state: f,
                    release_phase: E,
                    activity_premium_tier_requirement: null == c ? void 0 : null === (e = c.activity) || void 0 === e ? void 0 : e.premium_tier_requirement,
                    shelf_rank: null == c ? void 0 : null === (i = c.activity) || void 0 === i ? void 0 : i.shelf_rank,
                    activity_user_session_id: a.activityUserSessionId,
                    channel_type: r.type,
                    media_session_ids: a.mediaSessionIds
                }), N.default.track(V.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
                    channel_id: r.id,
                    guild_id: r.getGuildId(),
                    application_id: l,
                    instance_ids: [a.instanceId],
                    media_session_ids: a.mediaSessionIds,
                    activity_user_session_id: a.activityUserSessionId,
                    raw_thermal_state: f,
                    duration_ms: u
                }), delete Y[l], delete F[l]
            }

            function H(t) {
                var e, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: a,
                    updateCode: u
                } = t, s = I.default.getId(), o = p.default.getEmbeddedActivitiesForChannel(n), c = A.default.getChannel(n);
                if (u === U.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == c ? void 0 : c.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === a.find(t => t.user_id === s) && d.default.selectParticipant(n, null), !a.some(t => t.user_id === s)) return;
                let E = T.default.getMediaSessionId(),
                    {
                        application_id: _
                    } = l,
                    f = (0, g.default)(l),
                    C = null == E && (null == c ? void 0 : c.isVocal()) === !0;
                null != f && !C && (null === (e = Y[_]) || void 0 === e || e.call(Y, {
                    activitySessionId: f,
                    activityUserSessionId: (0, r.v4)(),
                    instanceId: l.activity_id,
                    mediaSessionIds: null != E ? [E] : []
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
                    let t = p.default.getSelfEmbeddedActivityForChannel(i),
                        n = null == t ? void 0 : t.applicationId,
                        l = null == t ? void 0 : t.instanceId,
                        u = (0, g.default)(t);
                    if (null != n && null != e && null != u && null != l) {
                        let t = F[n],
                            i = Y[n];
                        a(null == t || null == i, "an active session and awaiting session both exist"), null == i || i({
                            activitySessionId: u,
                            activityUserSessionId: (0, r.v4)(),
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
                    C.default.addChangeListener(this.handleSelectedChannelUpdate), u.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), u.default.subscribe("EMBEDDED_ACTIVITY_OPEN", G), u.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", B), u.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), u.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), u.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), u.default.subscribe("MEDIA_SESSION_JOINED", k)
                }
                _terminate() {
                    C.default.removeChangeListener(this.handleSelectedChannelUpdate), u.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), u.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", G), u.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", B), u.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), u.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), u.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), u.default.unsubscribe("MEDIA_SESSION_JOINED", k)
                }
                constructor(...t) {
                    super(...t), this.handleSelectedChannelUpdate = () => {
                        let t = C.default.getVoiceChannelId();
                        for (let {
                                channelId: e,
                                applicationId: i
                            }
                            of p.default.getSelfEmbeddedActivities().values())(0, M.default)(e) && e !== t && this.leaveActivity({
                            channelId: e,
                            applicationId: i
                        });
                        if (null != t) {
                            let e = p.default.getEmbeddedActivitiesForChannel(t),
                                i = I.default.getId();
                            e.forEach(t => {
                                if (t.userIds.has(i)) {
                                    let e = p.default.getSelfEmbeddedActivityForChannel(t.channelId);
                                    null == e && (0, D.disconnectEmbeddedActivity)(t.channelId, t.applicationId)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = t => {
                        let {
                            error: e,
                            guildId: i
                        } = t;
                        if (null == i) return;
                        let n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (e.code) {
                            case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case V.AbortCodes.INVALID_PERMISSIONS:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                                break;
                            case V.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                                n = b.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
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
                                of p.default.getSelfEmbeddedActivities().values()) t === n && this.leaveActivity({
                                channelId: e,
                                applicationId: n
                            });
                            e.code !== V.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(e, n)
                        }
                    }, this.handleDeferredOpen = async t => {
                        var e, i, n;
                        let l;
                        let {
                            channelId: a,
                            applicationId: r,
                            analyticsLocations: u
                        } = t, d = A.default.getChannel(a);
                        if (void 0 === d || f.GUILD_VOCAL_CHANNEL_TYPES.has(null == d ? void 0 : d.type) && C.default.getVoiceChannelId() !== a) return;
                        let s = p.default.getSelfEmbeddedActivityForChannel(a);
                        if ((null == s ? void 0 : s.applicationId) === r) return;
                        let E = await o.default.fetchApplication(r),
                            _ = (0, P.getIsActivitiesEnabledForCurrentPlatform)(d);
                        if (!_) {
                            this.showLaunchErrorModal(b.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, m.default)(null == E ? void 0 : null === (e = E.embedded_activity_config) || void 0 === e ? void 0 : e.supported_platforms)) {
                            this.showLaunchErrorModal(b.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let I = null == s ? void 0 : s.applicationId;
                        null != I && (await o.default.fetchApplication(I), l = c.default.getApplication(I));
                        let T = null !== (i = null == d ? void 0 : d.getGuildId()) && void 0 !== i ? i : void 0,
                            {
                                activityConfigs: S,
                                applications: N
                            } = await (0, D.fetchShelf)({
                                guildId: T
                            }),
                            v = (0, y.default)({
                                applicationId: r,
                                activityConfigs: S,
                                applications: N
                            });
                        if (null == v) {
                            let t = await (0, D.fetchShelf)({
                                guildId: T,
                                force: !0
                            });
                            v = (0, y.default)({
                                applicationId: r,
                                activityConfigs: t.activityConfigs,
                                applications: t.applications
                            })
                        }
                        let O = p.default.getEmbeddedActivitiesForChannel(a).find(t => t.applicationId === r),
                            g = null !== (n = null == O ? void 0 : O.userIds.size) && void 0 !== n ? n : 0;
                        g > 0 ? (0, h.maybeJoinEmbeddedActivity)({
                            channelId: a,
                            applicationId: r,
                            instanceId: null == O ? void 0 : O.instanceId,
                            inputApplication: null,
                            analyticsLocations: u,
                            embeddedActivitiesManager: this
                        }) : await (0, L.default)({
                            activityItem: v,
                            currentEmbeddedApplication: l,
                            channelId: a,
                            guildId: T,
                            embeddedActivitiesManager: this,
                            analyticsLocations: u
                        })
                    }
                }
            }
        },
        213765: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                confirmActivityAgeGateAlert: function() {
                    return u
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("870346"),
                r = i("49111");

            function u(t) {
                let {
                    application: e,
                    onAgree: u,
                    onDisagree: d
                } = t, s = a.default.getWindowOpen(r.PopoutWindowKeys.CHANNEL_CALL_POPOUT), o = s ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ActivityAgeGateModal: t
                    } = await i.el("413012").then(i.bind(i, "413012"));
                    return i => (0, n.jsx)(t, {
                        ...i,
                        application: e,
                        onAgree: u,
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
                var r, u;
                n.default.show({
                    title: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: l.default.Messages.CANCEL,
                    confirmText: l.default.Messages.CONFIRM,
                    onConfirm: i,
                    onCancel: a,
                    body: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                        currentApplicationName: null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        currentApplicationChannelName: null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
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
                    onCancel: r
                } = t;
                return (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await i.el("285281").then(i.bind(i, "285281"));
                    return i => (0, n.jsx)(t, {
                        application: e,
                        onConfirm: a,
                        onCancel: r,
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
                } = t, r = null !== (e = null == a ? void 0 : a.find(t => t.id === i)) && void 0 !== e ? e : n.default.getApplication(i), u = l.find(t => t.application_id === i);
                return null == u || null == r ? null : {
                    activity: u,
                    application: r
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
                r = i("697218"),
                u = i("427953"),
                d = i("550766"),
                s = i("900551"),
                o = i("420444"),
                c = i("541473"),
                E = i("407908"),
                _ = i("578708"),
                f = i("954016"),
                I = i("49111");
            async function A(t) {
                let {
                    applicationId: e,
                    currentEmbeddedApplication: i,
                    activityChannelId: A,
                    locationObject: T,
                    embeddedActivitiesManager: C,
                    analyticsLocations: S
                } = t, N = l.default.getChannel(A), v = null == N ? void 0 : N.getGuildId(), O = null == v || "" === v, D = r.default.getCurrentUser();
                if (null == N || O && !N.isPrivate() || null == A || null == D) return Promise.resolve(!1);
                if (a.default.getVoiceChannelId() === A && (null == i ? void 0 : i.id) === e) return (0, _.default)(v, A), Promise.resolve(!0);
                let p = await (0, s.confirmActivityLaunchChecks)({
                    applicationId: e,
                    application: n.default.getApplication(e),
                    channel: N,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: C,
                    user: D
                });
                if (!p) return !1;
                let y = (0, o.default)(N.id),
                    h = f.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(N.type);
                if (y) {
                    let t = await (0, c.default)({
                        channelId: N.id,
                        bypassChangeModal: null != i
                    });
                    if (!t) return !1
                } else if (!(0, u.isActivitiesInTextEnabled)(N, "joinEmbeddedActivity") || !h) return !1;
                return (0, _.default)(v, A), (0, d.startEmbeddedActivity)(A, e, S), (0, E.default)({
                    type: I.AnalyticsGameOpenTypes.JOIN,
                    userId: D.id,
                    applicationId: e,
                    locationObject: T,
                    analyticsLocations: S
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
                r = i("645999"),
                u = i("653047"),
                d = i("42203"),
                s = i("305961"),
                o = i("957255"),
                c = i("697218"),
                E = i("800762"),
                _ = i("191225"),
                f = i("706508"),
                I = i("126939"),
                A = i("501260"),
                T = i("782340");
            async function C(t) {
                var e;
                let {
                    channelId: i,
                    applicationId: C,
                    instanceId: S,
                    inputApplication: N,
                    analyticsLocations: v,
                    embeddedActivitiesManager: O
                } = t, D = _.default.getEmbeddedActivitiesForChannel(i), p = D.find(t => t.applicationId === C && (null == S || t.instanceId === S)), y = N;
                if (null == y) {
                    let t = await l.default.fetchApplication(C);
                    y = u.default.createFromServer(t)
                }
                if (null == p || null == y) return;
                let h = c.default.getCurrentUser(),
                    L = d.default.getChannel(i),
                    P = (0, A.default)({
                        userId: null == h ? void 0 : h.id,
                        application: y,
                        channelId: i,
                        currentUser: h,
                        isActivitiesEnabledForCurrentPlatform: (0, I.getIsActivitiesEnabledForCurrentPlatform)(L),
                        ChannelStore: d.default,
                        VoiceStateStore: E.default,
                        PermissionStore: o.default,
                        GuildStore: s.default
                    }),
                    g = _.default.getSelfEmbeddedActivityForChannel(i),
                    R = null == g ? void 0 : g.applicationId,
                    m = null != R && null !== (e = a.default.getApplication(R)) && void 0 !== e ? e : void 0;
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
                            (0, r.showActivitiesInvalidPermissionsAlert)();
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
                    embeddedActivityJoinability: P,
                    handleCanJoin: async function t() {
                        null != p && await (0, f.default)({
                            applicationId: p.applicationId,
                            currentEmbeddedApplication: m,
                            activityChannelId: i,
                            locationObject: {},
                            embeddedActivitiesManager: O,
                            analyticsLocations: v
                        })
                    }
                })
            }
        },
        986214: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return D
                }
            });
            var n = i("404118"),
                l = i("645999"),
                a = i("42203"),
                r = i("305961"),
                u = i("957255"),
                d = i("697218"),
                s = i("659500"),
                o = i("427953"),
                c = i("898065"),
                E = i("550766"),
                _ = i("900551"),
                f = i("943349"),
                I = i("420444"),
                A = i("541473"),
                T = i("407908"),
                C = i("578708"),
                S = i("702173"),
                N = i("954016"),
                v = i("49111"),
                O = i("782340");
            async function D(t) {
                let {
                    activityItem: e,
                    currentEmbeddedApplication: i,
                    locationObject: D,
                    channelId: p,
                    guildId: y,
                    embeddedActivitiesManager: h,
                    analyticsLocations: L
                } = t, P = r.default.getGuild(y), g = d.default.getCurrentUser();
                if (null == P && !(0, S.isPrivateChannelWithEnabledActivities)(p) || null == g || null == e || null == e.application) return !1;
                if (null == p) return s.ComponentDispatch.dispatch(v.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                    applicationId: e.application.id
                }), !1;
                let R = a.default.getChannel(p);
                if (null == R) return !1;
                let m = null != p ? (0, f.getEmbeddedActivityLaunchability)({
                    channelId: p,
                    ChannelStore: a.default,
                    GuildStore: r.default,
                    PermissionStore: u.default
                }) : f.EmbeddedActivityLaunchability.NO_CHANNEL;
                if (m !== f.EmbeddedActivityLaunchability.CAN_LAUNCH) return m === f.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, l.showActivitiesInvalidPermissionsAlert)() : m === f.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && n.default.show({
                    title: O.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                    body: O.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                    hideActionSheet: !1
                }), !1;
                let M = await (0, _.confirmActivityLaunchChecks)({
                    applicationId: e.application.id,
                    application: e.application,
                    channel: R,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: h,
                    user: g
                });
                if (!M) return !1;
                let U = (0, I.default)(p),
                    V = N.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(R.type);
                if (U) {
                    let t = await (0, A.default)({
                        channelId: p,
                        bypassChangeModal: null != i
                    });
                    if (!t) return !1
                } else if (!(0, o.isActivitiesInTextEnabled)(R, "handleStartEmbeddedActivity") || !V) return !1;
                return E.startEmbeddedActivity(p, e.application.id, L), (0, C.default)(y, p), (0, T.default)({
                    type: v.AnalyticsGameOpenTypes.LAUNCH,
                    userId: g.id,
                    applicationId: e.application.id,
                    locationObject: D,
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
                    return r
                }
            });
            var n = i("394846");

            function l() {
                return !n.isMobile && !n.isTablet && !0
            }

            function a(t) {
                return l()
            }

            function r(t) {
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
                r = i("871388"),
                u = i("49111");

            function d(t) {
                let {
                    user: e,
                    activity: i,
                    application: d,
                    channelId: s,
                    currentUser: o,
                    isEmbedded: c,
                    ChannelStore: E,
                    GuildStore: _,
                    GuildMemberCountStore: f,
                    RelationshipStore: I,
                    SelectedChannelStore: A,
                    VoiceStateStore: T,
                    PermissionStore: C
                } = t, S = E.getChannel(s), N = (0, l.getIsActivitiesEnabledForCurrentPlatform)(S);
                if (null == e) return !1;
                if (c) return (0, a.default)({
                    userId: e.id,
                    activity: i,
                    channelId: s,
                    currentUser: o,
                    application: d,
                    isActivitiesEnabledForCurrentPlatform: N,
                    ChannelStore: E,
                    VoiceStateStore: T,
                    PermissionStore: C,
                    GuildStore: _
                }) === a.EmbeddedActivityJoinability.CAN_JOIN;
                if (!(0, n.isDesktop)()) return !1;
                if ((0, r.default)(i, u.ActivityFlags.PARTY_PRIVACY_FRIENDS) && I.isFriend(e.id)) return !0;
                if ((0, r.default)(i, u.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    let t = E.getChannel(A.getVoiceChannelId());
                    if (null == t || !T.isInChannel(t.id, e.id)) return !1;
                    switch (t.type) {
                        case u.ChannelTypes.DM:
                        case u.ChannelTypes.GROUP_DM:
                            return !0
                    }
                    let i = _.getGuild(t.getGuildId());
                    if (null == i || i.hasFeature(u.GuildFeatures.COMMUNITY)) return !1;
                    let n = f.getMemberCount(i.id);
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
                r = i("299285"),
                u = i("653047"),
                d = i("568734"),
                s = i("191225"),
                o = i("213765"),
                c = i("370507"),
                E = i("772926"),
                _ = i("49111");
            async function f(t, e) {
                try {
                    var i;
                    return null !== (i = r.default.getApplication(t)) && void 0 !== i ? i : u.default.createFromServer(await a.default.fetchApplication(t))
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
                    var a, r;
                    let t = null != e ? e : await f(i, n.getGuildId());
                    if (null == t) return !1;
                    let l = null !== (r = null === (a = t.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) && void 0 !== r && r;
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
                } = t, l = null != e ? e : await f(i, n.getGuildId());
                return null != l && (!!((0, d.hasFlag)(l.flags, _.ApplicationFlags.EMBEDDED_RELEASED) || s.default.hasActivityEverBeenLaunched(i)) || new Promise(t => {
                    (0, E.confirmExternalAppLaunchAlert)({
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
                r = i("42203"),
                u = i("305961"),
                d = i("957255"),
                s = i("697218"),
                o = i("800762"),
                c = i("404008"),
                E = i("126939"),
                _ = i("803353"),
                f = i("49111");

            function I(t) {
                var e, i, n;
                let {
                    userId: l,
                    activity: a,
                    application: r,
                    channelId: u,
                    currentUser: d,
                    isActivitiesEnabledForCurrentPlatform: s,
                    ChannelStore: o,
                    VoiceStateStore: E,
                    PermissionStore: I,
                    GuildStore: A
                } = t;
                if (null == l) return 8;
                if ((null == d ? void 0 : d.nsfwAllowed) === !1 && (null == r ? void 0 : null === (e = r.embeddedActivityConfig) || void 0 === e ? void 0 : e.requires_age_gate) === !0) return 7;
                if (!s) return 5;
                if (!(0, _.default)(null == r ? void 0 : null === (i = r.embeddedActivityConfig) || void 0 === i ? void 0 : i.supported_platforms)) return 6;
                let T = null != u ? u : null === (n = E.getVoiceStateForSession(l, null == a ? void 0 : a.session_id)) || void 0 === n ? void 0 : n.channelId;
                if (null == T) return 4;
                let C = o.getChannel(u);
                if (null == C) return 4;
                let S = C.getGuildId();
                if (!C.isPrivate()) {
                    if (null == S) return 10;
                    let t = A.getGuild(S);
                    if ((null == t ? void 0 : t.afkChannelId) === C.id) return 9;
                    let e = E.getCurrentClientVoiceChannelId(C.getGuildId()) === T,
                        i = (0, c.isChannelFull)(C, E, A),
                        n = I.can(f.Permissions.CONNECT, C),
                        l = I.can(f.Permissions.USE_EMBEDDED_ACTIVITIES, C);
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
                } = t, c = (0, E.useIsActivitiesEnabledForCurrentPlatform)(null != n ? n : void 0), _ = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()), f = (0, a.useStateFromStores)([r.default, o.default, d.default, u.default], () => I({
                    userId: e,
                    activity: i,
                    application: l,
                    channelId: n,
                    currentUser: _,
                    isActivitiesEnabledForCurrentPlatform: c,
                    ChannelStore: r.default,
                    VoiceStateStore: o.default,
                    PermissionStore: d.default,
                    GuildStore: u.default
                }), [i, l, n, _, c, e]);
                return f
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
                    return f
                },
                getEmbeddedActivityLaunchabilityLabel: function() {
                    return I
                }
            });
            var n, l, a = i("446674"),
                r = i("42203"),
                u = i("305961"),
                d = i("957255"),
                s = i("126939"),
                o = i("702173"),
                c = i("49111"),
                E = i("782340");

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
                    let r = l.can(c.Permissions.USE_EMBEDDED_ACTIVITIES, a);
                    if (!r) return 1
                }
                return 0
            }

            function f(t) {
                let e = (0, a.useStateFromStores)([r.default, u.default, d.default], () => _({
                    channelId: t,
                    ChannelStore: r.default,
                    GuildStore: u.default,
                    PermissionStore: d.default
                }), [t]);
                return e
            }

            function I(t) {
                switch (t) {
                    case 0:
                        return E.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case 1:
                        return E.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return E.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
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
                r = i("42203"),
                u = i("957255"),
                d = i("18494"),
                s = i("800762");
            class o extends Error {}
            async function c(t) {
                let {
                    channelId: e,
                    timeoutMs: i = 1e4,
                    bypassChangeModal: c = !1
                } = t, E = r.default.getChannel(e);
                if (null == E) return !1;
                let _ = await l.default.handleVoiceConnect({
                    bypassGuildIdCheck: !0,
                    bypassChangeModal: c,
                    channel: E,
                    connected: s.default.isInChannel(e),
                    needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(e, r.default, n.default, u.default).needSubscriptionToAccess
                });
                if (!_) return !1;
                let f = new Promise((t, n) => {
                    let l = setTimeout(() => {
                        n(new o("Joining voice channel has timed out."))
                    }, i);
                    d.default.addConditionalChangeListener(() => {
                        let i = d.default.getVoiceChannelId();
                        return i !== e || (clearTimeout(l), t(), !1)
                    })
                });
                try {
                    await f
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
                    applicationId: r,
                    partyId: u,
                    messageId: d,
                    locationObject: s,
                    analyticsLocations: o
                } = t;
                n.default.track(l.AnalyticEvents.APPLICATION_OPENED, {
                    type: e,
                    source: i,
                    application_id: r,
                    party_id: null != u ? u : void 0,
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
                r = i("393414"),
                u = i("191225"),
                d = i("420444"),
                s = i("49111");

            function o(t, e) {
                let i = l.default.getWindowOpen(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                i ? (0, a.default)(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, r.transitionTo)(s.Routes.CHANNEL(t, e));
                let o = u.default.getSelfEmbeddedActivityForChannel(e);
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
                    return r
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

            function r(t) {
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
                r = i("135230"),
                u = i("550766"),
                d = i("648456"),
                s = i("782340");
            class o extends d.default {
                showErrorModal(t) {
                    let {
                        code: e,
                        message: i
                    } = t;
                    (0, l.openModalLazy)(async () => t => (0, n.jsx)(r.default, {
                        title: s.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                            code: e
                        }),
                        body: i,
                        ...t
                    }))
                }
                showLaunchErrorModal(t) {
                    (0, l.openModalLazy)(async () => e => (0, n.jsx)(r.default, {
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
                    a.default.wait(() => (0, u.stopEmbeddedActivity)({
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
                r = i("651057"),
                u = i("299285");

            function d(t) {
                let e = n.useRef([]);
                return n.useEffect(() => {
                    !(0, a.areArraysShallowEqual)(t, e.current) && (r.default.fetchApplications(t, !1), e.current = t)
                }, [t]), (0, l.useStateFromStoresArray)([u.default], () => t.map(t => u.default.getApplication(t)))
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
                r = i("76393"),
                u = i("393414"),
                d = i("755624"),
                s = i("263024"),
                o = i("271938"),
                c = i("18494"),
                E = i("800762"),
                _ = i("792367"),
                f = i("49111"),
                I = {
                    async handleVoiceConnect(t) {
                        let {
                            channel: e,
                            connected: I,
                            needSubscriptionToAccess: A,
                            locked: T = !1,
                            routeDirectlyToChannel: C = !1,
                            bypassChangeModal: S,
                            bypassGuildIdCheck: N = !1
                        } = t;
                        e.isThread() && (await s.default.unarchiveThreadIfNecessary(e.id), !d.default.hasJoined(e.id) && await s.default.joinThread(e, "Join Voice"));
                        let v = r.default.getRemoteSessionId(),
                            O = E.default.getVoiceStateForSession(o.default.getId(), v),
                            D = (null == O ? void 0 : O.channelId) === e.id,
                            p = D || c.default.getChannelId() === E.default.getCurrentClientVoiceChannelId(e.guild_id);
                        return !S && !T && (0, _.shouldShowVoiceChannelChangeConfirmation)(e) ? new Promise(t => {
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
                        }) : (!T && !I && a.default.selectVoiceChannel(e.id), !__OVERLAY__ && (I || p || A || C) && ! function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = t.getGuildId();
                            if (null == i && !e) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                            (0, u.transitionTo)(f.Routes.CHANNEL(i, t.id))
                        }(e, N), !0)
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
                    return r
                }
            });
            var n = i("773336"),
                l = i("50885"),
                a = i("870346");

            function r(t) {
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
                    return f
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
                r = i("718517"),
                u = i("613691"),
                d = i("155815"),
                s = i("662285"),
                o = i("450484"),
                c = i("49111");
            let E = 30 * r.default.Millis.SECOND;

            function _(t) {
                return null != t.getActiveSocketAndDevice() || d.default.isProtocolRegistered()
            }

            function f() {
                let t = s.default.getActiveSocketAndDevice();
                if (null != t) return Promise.resolve(t);
                if (!d.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
                let e = s.default.getPlayableComputerDevices();
                if (a.default.isObservedAppRunning(l.default.get(c.PlatformTypes.SPOTIFY).name) && e.length > 0) {
                    let {
                        socket: t,
                        device: i
                    } = e[0];
                    return (0, u.setActiveDevice)(t.accountId, i.id), Promise.resolve({
                        socket: t,
                        device: i
                    })
                }
                return new Promise((t, i) => {
                    let n = setTimeout(() => {
                            s.default.removeChangeListener(l), i(Error("timeout launching spotify"))
                        }, E),
                        l = () => {
                            let i = s.default.getPlayableComputerDevices();
                            for (let {
                                    socket: a,
                                    device: r
                                }
                                of i) null == e.find(t => t.device.id === r.id) && (clearTimeout(n), s.default.removeChangeListener(l), setImmediate(() => {
                                (0, u.setActiveDevice)(a.accountId, r.id), t({
                                    socket: a,
                                    device: r
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
                return e.isPremium ? Promise.resolve() : (0, u.getProfile)(e.accountId, e.accessToken).then(() => {
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
                r = i("49111");
            let u = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

            function d(t, e, i, a) {
                n.default.track(r.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
                    type: t,
                    source: a,
                    is_premium: (0, l.isSpotifyPremium)(),
                    party_id: u.includes(t) && (null == i ? void 0 : i.party) != null ? i.party.id : null,
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
                    return r
                }
            });
            var n = i("158998"),
                l = i("450484"),
                a = i("782340");

            function r(t, e, i) {
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
                var a, r, u;
                let d = t.hasConnectedAccount(),
                    s = (0, n.isSpotifyPlayable)(t),
                    o = t.getTrack(),
                    c = t.getSyncingWith(),
                    E = t.getActivity(),
                    _ = null !== (u = null !== (r = null == o ? void 0 : o.id) && void 0 !== r ? r : null == E ? void 0 : E.sync_id) && void 0 !== u ? u : t.getLastPlayedTrackId();
                return {
                    user: i,
                    activity: l,
                    hasSpotifyAccount: d,
                    canPlaySpotify: s,
                    notPlayable: d && !s,
                    syncingWithParty: (null == E ? void 0 : E.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === E.party.id,
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
                r = i("884385"),
                u = i("170108"),
                d = i("922174");
            async function s(t, e, s) {
                let {
                    hasSpotifyAccount: o,
                    activity: c,
                    user: E
                } = t;
                (0, d.default)(o) && null != c && null != c.sync_id && (await (0, r.ensureSpotifyPlayable)(), await (0, r.ensureSpotifyPremium)().catch(t => ((0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await i.el("775195").then(i.bind(i, "775195"));
                    return e => (0, n.jsx)(t, {
                        ...e
                    })
                }), Promise.reject(t))), a.sync(c, E.id), (0, u.default)(e, E, c, s))
            }
        },
        555759: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return u
                }
            });
            var n = i("968194"),
                l = i("884385"),
                a = i("170108"),
                r = i("922174");
            async function u(t, e, i) {
                let {
                    hasSpotifyAccount: u,
                    activity: d,
                    user: s
                } = t;
                (0, r.default)(u) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, s.id), (0, a.default)(e, s, d, i))
            }
        },
        590456: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                UserProfileSections: function() {
                    return s
                },
                UserProfileTypes: function() {
                    return o
                },
                TrackUserProfileProperties: function() {
                    return E
                },
                getBadgeAsset: function() {
                    return A
                }
            });
            var n, l, a, r, u, d, s, o, c, E, _, f, I = i("49111");

            function A(t) {
                let {
                    API_ENDPOINT: e,
                    CDN_HOST: i
                } = window.GLOBAL_ENV;
                return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(t, ".png") : "".concat(location.protocol).concat(e).concat(I.Endpoints.BADGE_ICON(t))
            }(n = s || (s = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", n.RECENT_GAMES = "RECENT_GAMES", (l = o || (o = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL", (a = c || (c = {})).POPOUT = "POPOUT", a.MODAL = "MODAL", a.DM_PANEL = "DM_PANEL", a.ACCOUNT_POPOUT = "ACCOUNT_POPOUT", a.ACTION_SHEET = "ACTION_SHEET", (r = E || (E = {}))[r.NICKNAME = 0] = "NICKNAME", r[r.PRONOUNS = 1] = "PRONOUNS", r[r.AVATAR = 2] = "AVATAR", r[r.ANIMATED_AVATAR = 3] = "ANIMATED_AVATAR", r[r.BANNER = 4] = "BANNER", r[r.ANIMATED_BANNER = 5] = "ANIMATED_BANNER", r[r.BIO = 6] = "BIO", r[r.THEME = 7] = "THEME", r[r.AVATAR_DECORATION = 8] = "AVATAR_DECORATION", r[r.PROFILE_EFFECT = 9] = "PROFILE_EFFECT", (u = _ || (_ = {})).VIEW = "VIEW", u.SEND_MESSAGE = "SEND_MESSAGE", u.SEND_DIRECT_MESSAGE = "SEND_DIRECT_MESSAGE", u.SEND_FRIEND_REQUEST = "SEND_FRIEND_REQUEST", u.ACCEPT_FRIEND_REQUEST = "ACCEPT_FRIEND_REQUEST", u.IGNORE_FRIEND_REQUEST = "IGNORE_FRIEND_REQUEST", u.CANCEL_FRIEND_REQUEST = "CANCEL_FRIEND_REQUEST", u.REMOVE_FRIEND = "REMOVE_FRIEND", u.BLOCK = "BLOCK", u.UNBLOCK = "UNBLOCK", u.REPORT = "REPORT", u.COPY_USERNAME = "COPY_USERNAME", u.COPY_USER_ID = "COPY_USER_ID", u.PRESS_VIEW_PROFILE = "PRESS_VIEW_PROFILE", u.PRESS_OPTIONS = "PRESS_OPTIONS", u.PRESS_BADGE = "PRESS_BADGE", u.PRESS_SECTION = "PRESS_SECTION", u.PRESS_PREMIUM_UPSELL = "PRESS_PREMIUM_UPSELL", u.PRESS_SET_STATUS = "PRESS_SET_STATUS", u.PRESS_SET_CUSTOM_STATUS = "PRESS_SET_CUSTOM_STATUS", u.PRESS_SWITCH_ACCOUNTS = "PRESS_SWITCH_ACCOUNTS", u.JOIN_ACTIVITY = "JOIN_ACTIVITY", u.SET_NOTE = "SET_NOTE", u.SET_FRIEND_NICKNAME = "SET_FRIEND_NICKNAME", u.EDIT_PROFILE = "EDIT_PROFILE", u.EDIT_GUILD_PROFILE = "EDIT_GUILD_PROFILE", u.GIFT_PREMIUM = "GIFT_PREMIUM", u.VOICE_CALL = "VOICE_CALL", u.VIDEO_CALL = "VIDEO_CALL", u.SET_VOLUME = "SET_VOLUME", u.MUTE = "MUTE", u.MUTE_SOUNDBOARD = "MUTE_SOUNDBOARD", u.DISABLE_VIDEO = "DISABLE_VIDEO", u.DEAFEN = "DEAFEN", u.DISCONNECT = "DISCONNECT", (d = f || (f = {})).VOICE = "VOICE", d.PLAYING = "PLAYING", d.STREAMING = "STREAMING", d.LISTENING = "LISTENING", d.WATCHING = "WATCHING", d.CUSTOM_STATUS = "CUSTOM_STATUS", d.COMPETING = "COMPETING", d.HANG_STATUS = "HANG_STATUS"
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
                r = i("913144"),
                u = i("555179"),
                d = i("49111");

            function s(t) {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getNote(t));
                return n.useEffect(() => {
                    null == e && o(t)
                }, [e, t]), null != e ? e : {
                    loading: !0,
                    note: null
                }
            }
            async function o(t) {
                r.default.dispatch({
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
                    r.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: t,
                        note: e
                    })
                } catch (e) {
                    r.default.dispatch({
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
                r = i("506885"),
                u = i("49111");

            function d(t) {
                let {
                    userId: e,
                    section: i,
                    guildId: d = u.ME,
                    channelId: s,
                    friendToken: o,
                    autoFocusNote: c,
                    analyticsLocation: E
                } = t, _ = a.default.getUser(e), f = d !== u.ME ? d : void 0;
                if (null == _) return (0, l.fetchProfile)(e, {
                    friendToken: o,
                    guildId: f
                }).then(() => {
                    n.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: e,
                        section: i,
                        guildId: d,
                        channelId: s,
                        friendToken: o,
                        autoFocusNote: c,
                        analyticsLocation: E
                    })
                });
                (0, r.default)(e, _.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: o,
                    guildId: f
                }), n.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: e,
                    section: i,
                    guildId: d,
                    channelId: s,
                    friendToken: o,
                    autoFocusNote: c,
                    analyticsLocation: E
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

            function r() {
                a = {}
            }
            class u extends n.default.Store {
                getNote(t) {
                    return a[t]
                }
            }
            u.displayName = "NoteStore";
            var d = new u(l.default, {
                CONNECTION_OPEN: r,
                OVERLAY_INITIALIZE: r,
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
                    return E
                }
            });
            var n = i("446674"),
                l = i("862337"),
                a = i("913144"),
                r = i("49111");
            let u = {},
                d = {};

            function s(t, e, i) {
                var n;
                let {
                    applicationId: s
                } = i, o = null !== (n = u[s]) && void 0 !== n ? n : {};
                if (o[e] = t, u[s] = o, !__OVERLAY__ && t === r.ActivityActionStates.FAILED) {
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
                return s(r.ActivityActionStates.COMPLETE, r.ActivityActionTypes.JOIN, t)
            }
            class c extends n.default.Store {
                getState(t, e) {
                    let i = u[t];
                    return null == i ? void 0 : i[e]
                }
                getStates() {
                    return u
                }
            }
            c.displayName = "ActivityLauncherStore";
            var E = new c(a.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        activityLauncherStates: e
                    } = t;
                    u = {
                        ...e
                    }
                },
                ACTIVITY_JOIN_LOADING: t => s(r.ActivityActionStates.LOADING, r.ActivityActionTypes.JOIN, t),
                ACTIVITY_JOIN_FAILED: t => s(r.ActivityActionStates.FAILED, r.ActivityActionTypes.JOIN, t),
                ACTIVITY_JOIN: o,
                EMBEDDED_ACTIVITY_CLOSE: o,
                ACTIVITY_LAUNCH_FAIL: function(t) {
                    let {
                        applicationId: e,
                        activityType: i
                    } = t, n = u[e];
                    if (null == n || n[i] !== r.ActivityActionStates.FAILED) return !1;
                    delete n[i]
                }
            })
        }
    }
]);
//# sourceMappingURL=47146.1957974345049216ce70.js.map