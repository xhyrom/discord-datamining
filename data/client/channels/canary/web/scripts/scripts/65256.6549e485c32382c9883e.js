(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65256"], {
        968194: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                sync: function() {
                    return r
                },
                play: function() {
                    return d
                },
                getMetadata: function() {
                    return s
                }
            }), i("70102");
            var n = i("872717"),
                l = i("913144"),
                a = i("824563"),
                u = i("49111");

            function r(e, t) {
                l.default.dispatch({
                    type: "ACTIVITY_SYNC",
                    activity: e,
                    userId: t
                })
            }

            function d(e, t) {
                s(e, t).then(i => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: e,
                    userId: t,
                    metadata: i
                })).catch(() => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: e,
                    userId: t
                }))
            }

            function s(e, t) {
                let i = e.metadata;
                if (null != i) return Promise.resolve(i);
                let r = a.default.getActivityMetadata(t);
                return null != r ? Promise.resolve(r) : null == e.session_id ? Promise.reject(Error("null/undefined session_id")) : n.default.get({
                    url: u.Endpoints.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: i
                    } = e;
                    return l.default.dispatch({
                        type: "ACTIVITY_METADATA_UPDATE",
                        metadata: i,
                        userId: t
                    }), i
                })
            }
        },
        901582: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                renderProvider(e) {
                    var t, i;
                    let {
                        section: n,
                        page: l,
                        object: u,
                        objectType: r,
                        children: s
                    } = this.props, o = this.mergeLocation(e.location, this.getLocation(l, n, u, r)), c = this.getContext(o, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : e.loadId);
                    return (0, a.jsx)(d.AnalyticsContext.Provider, {
                        value: c,
                        children: s
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, a.jsx)(d.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((e, t, i, n) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != i && (l.object = i), null != n && (l.objectType = n), l
                    }), this.mergeLocation = (0, s.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, s.cachedFunction)((e, t, i) => ({
                        location: e,
                        loadDate: t,
                        loadId: i
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
                }
            }).Pages = o.AnalyticsPages, n.Sections = o.AnalyticsSections, n.Objects = o.AnalyticsObjects, n.ObjectTypes = o.AnalyticsObjectTypes, n.defaultProps = {
                root: !1
            }, l = n
        },
        289732: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                initialize(e) {
                    u = {
                        ...a(),
                        ...null != e ? e : {}
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
        898065: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function a(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
                    activityUrlOverride: e
                })
            }

            function u(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: e,
                    timestamp: new Date().getTime()
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
                    filter: e
                })
            }
        },
        648456: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                N = i("773336"),
                p = i("289732"),
                h = i("550766"),
                y = i("191225"),
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

            function w(e) {
                var t;
                let i = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, P.default)((0, N.getOS)())].release_phase;
                return {
                    releasePhase: i
                }
            }
            async function B(e) {
                let {
                    channelId: t,
                    applicationId: i,
                    analyticsLocations: n
                } = e, l = A.default.getChannel(t), a = null == l ? void 0 : l.getGuildId(), u = v.default.getCurrentUser();
                if (null == l || null == u) return;
                let r = y.default.getShelfActivities(a),
                    d = p.default.getState().shelfOrder,
                    s = 0 === y.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === i).length,
                    o = (0, D.default)({
                        applicationId: i,
                        activityConfigs: r
                    }),
                    c = 1 + d.findIndex(e => e === i),
                    {
                        releasePhase: E
                    } = w(o),
                    I = await (0, _.default)();
                Y[i] = e => {
                    var t, a, r;
                    F[i] = e, S.default.track(R.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                        media_session_id: e.mediaSessionIds[0],
                        activity_session_id: e.activitySessionId,
                        application_id: i,
                        location_stack: n,
                        user_premium_tier: u.premiumType,
                        raw_thermal_state: I,
                        n_participants: f.default.getUserParticipantCount(l.id),
                        is_activity_start: s,
                        release_phase: E,
                        activity_premium_tier_requirement: null == o ? void 0 : null === (t = o.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                        shelf_rank: null == o ? void 0 : null === (a = o.activity) || void 0 === a ? void 0 : a.shelf_rank,
                        shelf_sorted_rank: c > 0 ? c : null,
                        activity_user_session_id: e.activityUserSessionId,
                        channel_type: l.type
                    }), S.default.track(R.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
                        location_stack: n,
                        channel_id: l.id,
                        channel_type: l.type,
                        guild_id: l.getGuildId(),
                        application_id: i,
                        instance_id: e.instanceId,
                        initial_media_session_id: e.mediaSessionIds[0],
                        activity_user_session_id: e.activityUserSessionId,
                        raw_thermal_state: I,
                        is_activity_start: s,
                        shelf_rank: null == o ? void 0 : null === (r = o.activity) || void 0 === r ? void 0 : r.shelf_rank,
                        shelf_sorted_rank: c > 0 ? c : null
                    })
                }
            }
            async function G(e) {
                var t, i;
                let {
                    channelId: n,
                    applicationId: l
                } = e, a = F[l], u = A.default.getChannel(n), r = y.default.getEmbeddedActivityDurationMs(n, l), d = v.default.getCurrentUser(), s = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == d) return;
                let o = y.default.getShelfActivities(s),
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
                    activity_premium_tier_requirement: null == c ? void 0 : null === (t = c.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
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

            function H(e) {
                var t, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: a,
                    updateCode: r
                } = e, s = I.default.getId(), o = y.default.getEmbeddedActivitiesForChannel(n), c = A.default.getChannel(n);
                if (r === U.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == c ? void 0 : c.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === a.find(e => e.user_id === s) && d.default.selectParticipant(n, null), !a.some(e => e.user_id === s)) return;
                let f = T.default.getMediaSessionId(),
                    {
                        application_id: _
                    } = l,
                    E = (0, m.default)(l),
                    C = null == f && (null == c ? void 0 : c.isVocal()) === !0;
                null != E && !C && (null === (t = Y[_]) || void 0 === t || t.call(Y, {
                    activitySessionId: E,
                    activityUserSessionId: (0, u.v4)(),
                    instanceId: l.activity_id,
                    mediaSessionIds: null != f ? [f] : []
                }), delete Y[_])
            }

            function k(e) {
                let {
                    mediaSessionId: t
                } = e;
                if (null == t) return;
                for (let e in F) F[e].mediaSessionIds.push(t);
                let i = T.default.getChannelId();
                if (null != i) {
                    let e = y.default.getSelfEmbeddedActivityForChannel(i),
                        n = null == e ? void 0 : e.applicationId,
                        l = null == e ? void 0 : e.instanceId,
                        r = (0, m.default)(e);
                    if (null != n && null != t && null != r && null != l) {
                        let e = F[n],
                            i = Y[n];
                        a(null == e || null == i, "an active session and awaiting session both exist"), null == i || i({
                            activitySessionId: r,
                            activityUserSessionId: (0, u.v4)(),
                            instanceId: l,
                            mediaSessionIds: [t]
                        }), delete Y[n]
                    }
                }
            }

            function J(e) {
                return F[e]
            }
            n = class extends s.default {
                _initialize() {
                    C.default.addChangeListener(this.handleSelectedChannelUpdate), r.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.subscribe("EMBEDDED_ACTIVITY_OPEN", B), r.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), r.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), r.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.subscribe("MEDIA_SESSION_JOINED", k)
                }
                _terminate() {
                    C.default.removeChangeListener(this.handleSelectedChannelUpdate), r.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", B), r.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), r.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", H), r.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.unsubscribe("MEDIA_SESSION_JOINED", k)
                }
                constructor(...e) {
                    super(...e), this.handleSelectedChannelUpdate = () => {
                        let e = C.default.getVoiceChannelId();
                        for (let {
                                channelId: t,
                                applicationId: i
                            }
                            of y.default.getSelfEmbeddedActivities().values())(0, b.default)(t) && t !== e && this.leaveActivity({
                            channelId: t,
                            applicationId: i
                        });
                        if (null != e) {
                            let t = y.default.getEmbeddedActivitiesForChannel(e),
                                i = I.default.getId();
                            t.forEach(e => {
                                if (e.userIds.has(i)) {
                                    let t = y.default.getSelfEmbeddedActivityForChannel(e.channelId);
                                    null == t && (0, h.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
                                }
                            })
                        }
                    }, this.handleActivityLaunchFail = e => {
                        let {
                            error: t,
                            guildId: i
                        } = e;
                        if (null == i) return;
                        let n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                        switch (t.code) {
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
                    }, this.superHandleRPCDisconnect = e => {
                        let {
                            reason: t,
                            application: i
                        } = e, n = i.id;
                        if (null != n && null != t) {
                            for (let {
                                    applicationId: e,
                                    channelId: t
                                }
                                of y.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                                channelId: t,
                                applicationId: n
                            });
                            t.code !== R.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                        }
                    }, this.handleDeferredOpen = async e => {
                        var t, i, n;
                        let l;
                        let {
                            channelId: a,
                            applicationId: u,
                            analyticsLocations: r
                        } = e, d = A.default.getChannel(a);
                        if (void 0 === d || E.GUILD_VOCAL_CHANNEL_TYPES.has(null == d ? void 0 : d.type) && C.default.getVoiceChannelId() !== a) return;
                        let s = y.default.getSelfEmbeddedActivityForChannel(a);
                        if ((null == s ? void 0 : s.applicationId) === u) return;
                        let f = await o.default.fetchApplication(u),
                            _ = (0, g.getIsActivitiesEnabledForCurrentPlatform)(d);
                        if (!_) {
                            this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, M.default)(null == f ? void 0 : null === (t = f.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                            this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let I = null == s ? void 0 : s.applicationId;
                        null != I && (await o.default.fetchApplication(I), l = c.default.getApplication(I));
                        let T = null !== (i = null == d ? void 0 : d.getGuildId()) && void 0 !== i ? i : void 0,
                            {
                                activityConfigs: v,
                                applications: S
                            } = await (0, h.fetchShelf)({
                                guildId: T
                            }),
                            N = (0, D.default)({
                                applicationId: u,
                                activityConfigs: v,
                                applications: S
                            });
                        if (null == N) {
                            let e = await (0, h.fetchShelf)({
                                guildId: T,
                                force: !0
                            });
                            N = (0, D.default)({
                                applicationId: u,
                                activityConfigs: e.activityConfigs,
                                applications: e.applications
                            })
                        }
                        let p = y.default.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === u),
                            m = null !== (n = null == p ? void 0 : p.userIds.size) && void 0 !== n ? n : 0;
                        m > 0 ? (0, O.maybeJoinEmbeddedActivity)({
                            channelId: a,
                            applicationId: u,
                            instanceId: null == p ? void 0 : p.instanceId,
                            inputApplication: null,
                            analyticsLocations: r,
                            embeddedActivitiesManager: this
                        }) : await (0, L.default)({
                            activityItem: N,
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
        213765: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                confirmActivityAgeGateAlert: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("870346"),
                u = i("49111");

            function r(e) {
                let {
                    application: t,
                    onAgree: r,
                    onDisagree: d
                } = e, s = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT), o = s ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ActivityAgeGateModal: e
                    } = await i.el("413012").then(i.bind(i, "413012"));
                    return i => (0, n.jsx)(e, {
                        ...i,
                        application: t,
                        onAgree: r,
                        onDisagree: d
                    })
                }, {
                    modalKey: "activity-age-gate",
                    contextKey: o
                }), Promise.resolve()
            }
        },
        370507: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("404118"),
                l = i("782340");

            function a(e, t, i, a) {
                var u, r;
                n.default.show({
                    title: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: l.default.Messages.CANCEL,
                    confirmText: l.default.Messages.CONFIRM,
                    onConfirm: i,
                    onCancel: a,
                    body: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                        currentApplicationName: null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        currentApplicationChannelName: null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
                    })
                })
            }
        },
        772926: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                confirmExternalAppLaunchAlert: function() {
                    return a
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078");

            function a(e) {
                let {
                    application: t,
                    onConfirm: a,
                    onCancel: u
                } = e;
                return (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("285281").then(i.bind(i, "285281"));
                    return i => (0, n.jsx)(e, {
                        application: t,
                        onConfirm: a,
                        onCancel: u,
                        ...i
                    })
                }), Promise.resolve()
            }
        },
        602718: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("299285");

            function l(e) {
                var t;
                let {
                    applicationId: i,
                    activityConfigs: l,
                    applications: a
                } = e, u = null !== (t = null == a ? void 0 : a.find(e => e.id === i)) && void 0 !== t ? t : n.default.getApplication(i), r = l.find(e => e.application_id === i);
                return null == r || null == u ? null : {
                    activity: r,
                    application: u
                }
            }
        },
        706508: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            async function A(e) {
                let {
                    applicationId: t,
                    currentEmbeddedApplication: i,
                    activityChannelId: A,
                    locationObject: T,
                    embeddedActivitiesManager: C,
                    analyticsLocations: v
                } = e, S = l.default.getChannel(A), N = null == S ? void 0 : S.getGuildId(), p = null == N || "" === N, h = u.default.getCurrentUser();
                if (null == S || p && !S.isPrivate() || null == A || null == h) return Promise.resolve(!1);
                if (a.default.getVoiceChannelId() === A && (null == i ? void 0 : i.id) === t) return (0, _.default)(N, A), Promise.resolve(!0);
                let y = await (0, s.confirmActivityLaunchChecks)({
                    applicationId: t,
                    application: n.default.getApplication(t),
                    channel: S,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: C,
                    user: h
                });
                if (!y) return !1;
                let D = (0, o.default)(S.id),
                    O = E.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(S.type);
                if (D) {
                    let e = await (0, c.default)({
                        channelId: S.id,
                        bypassChangeModal: null != i
                    });
                    if (!e) return !1
                } else if (!(0, r.isActivitiesInTextEnabled)(S, "joinEmbeddedActivity") || !O) return !1;
                return (0, _.default)(N, A), (0, d.startEmbeddedActivity)(A, t, v), (0, f.default)({
                    type: I.AnalyticsGameOpenTypes.JOIN,
                    userId: h.id,
                    applicationId: t,
                    locationObject: T,
                    analyticsLocations: v
                }), !0
            }
        },
        885829: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            async function C(e) {
                var t;
                let {
                    channelId: i,
                    applicationId: C,
                    instanceId: v,
                    inputApplication: S,
                    analyticsLocations: N,
                    embeddedActivitiesManager: p
                } = e, h = _.default.getEmbeddedActivitiesForChannel(i), y = h.find(e => e.applicationId === C && (null == v || e.instanceId === v)), D = S;
                if (null == D) {
                    let e = await l.default.fetchApplication(C);
                    D = r.default.createFromServer(e)
                }
                if (null == y || null == D) return;
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
                    M = null != P && null !== (t = a.default.getApplication(P)) && void 0 !== t ? t : void 0;
                ! function(e) {
                    let {
                        embeddedActivityJoinability: t,
                        handleCanJoin: i
                    } = e;
                    switch (t) {
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
                    handleCanJoin: async function e() {
                        null != y && await (0, E.default)({
                            applicationId: y.applicationId,
                            currentEmbeddedApplication: M,
                            activityChannelId: i,
                            locationObject: {},
                            embeddedActivitiesManager: p,
                            analyticsLocations: N
                        })
                    }
                })
            }
        },
        986214: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
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
                N = i("49111"),
                p = i("782340");
            async function h(e) {
                let {
                    activityItem: t,
                    currentEmbeddedApplication: i,
                    locationObject: h,
                    channelId: y,
                    guildId: D,
                    embeddedActivitiesManager: O,
                    analyticsLocations: L
                } = e, g = u.default.getGuild(D), m = d.default.getCurrentUser();
                if (null == g && !(0, v.isPrivateChannelWithEnabledActivities)(y) || null == m || null == t || null == t.application) return !1;
                if (null == y) return s.ComponentDispatch.dispatch(N.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                    applicationId: t.application.id
                }), !1;
                let P = a.default.getChannel(y);
                if (null == P) return !1;
                let M = null != y ? (0, E.getEmbeddedActivityLaunchability)({
                    channelId: y,
                    ChannelStore: a.default,
                    GuildStore: u.default,
                    PermissionStore: r.default
                }) : E.EmbeddedActivityLaunchability.NO_CHANNEL;
                if (M !== E.EmbeddedActivityLaunchability.CAN_LAUNCH) return M === E.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (0, l.showActivitiesInvalidPermissionsAlert)() : M === E.EmbeddedActivityLaunchability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && n.default.show({
                    title: p.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                    body: p.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                    hideActionSheet: !1
                }), !1;
                let b = await (0, _.confirmActivityLaunchChecks)({
                    applicationId: t.application.id,
                    application: t.application,
                    channel: P,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: O,
                    user: m
                });
                if (!b) return !1;
                let U = (0, I.default)(y),
                    R = S.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(P.type);
                if (U) {
                    let e = await (0, A.default)({
                        channelId: y,
                        bypassChangeModal: null != i
                    });
                    if (!e) return !1
                } else if (!(0, o.isActivitiesInTextEnabled)(P, "handleStartEmbeddedActivity") || !R) return !1;
                return f.startEmbeddedActivity(y, t.application.id, L), (0, C.default)(D, y), (0, T.default)({
                    type: N.AnalyticsGameOpenTypes.LAUNCH,
                    userId: m.id,
                    applicationId: t.application.id,
                    locationObject: h,
                    analyticsLocations: L
                }), c.markActivityUsed(t.application.id), !0
            }
        },
        126939: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function a(e) {
                return l()
            }

            function u(e) {
                return l()
            }
        },
        612696: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("773336"),
                l = i("126939"),
                a = i("501260"),
                u = i("871388"),
                r = i("49111");

            function d(e) {
                let {
                    user: t,
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
                } = e, v = f.getChannel(s), S = (0, l.getIsActivitiesEnabledForCurrentPlatform)(v);
                if (null == t) return !1;
                if (c) return (0, a.default)({
                    userId: t.id,
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
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_FRIENDS) && I.isFriend(t.id)) return !0;
                if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
                    let e = f.getChannel(A.getVoiceChannelId());
                    if (null == e || !T.isInChannel(e.id, t.id)) return !1;
                    switch (e.type) {
                        case r.ChannelTypes.DM:
                        case r.ChannelTypes.GROUP_DM:
                            return !0
                    }
                    let i = _.getGuild(e.getGuildId());
                    if (null == i || i.hasFeature(r.GuildFeatures.COMMUNITY)) return !1;
                    let n = E.getMemberCount(i.id);
                    return null != n && n < 100
                }
                return !1
            }
        },
        900551: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            async function E(e, t) {
                try {
                    var i;
                    return null !== (i = u.default.getApplication(e)) && void 0 !== i ? i : r.default.createFromServer(await a.default.fetchApplication(e))
                } catch (i) {
                    n.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                        applicationId: e,
                        guildId: t,
                        error: new l.APIError(i)
                    })
                }
            }
            async function I(e) {
                let {
                    channel: t,
                    currentEmbeddedApplication: i,
                    embeddedActivitiesManager: n
                } = e;
                if (null != i) {
                    let e = await new Promise(e => {
                        (0, c.default)(i, t, () => {
                            n.leaveActivity({
                                channelId: t.id,
                                applicationId: i.id
                            }), e(!0)
                        }, () => e(!1))
                    });
                    if (!e) return !1
                }
                return !0
            }
            async function A(e) {
                let {
                    application: t,
                    applicationId: i,
                    channel: n,
                    user: l
                } = e;
                if (null == l.nsfwAllowed) {
                    var a, u;
                    let e = null != t ? t : await E(i, n.getGuildId());
                    if (null == e) return !1;
                    let l = null !== (u = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) && void 0 !== u && u;
                    if (l) {
                        let t = await new Promise(t => {
                            (0, o.confirmActivityAgeGateAlert)({
                                application: e,
                                onAgree: () => t(!0),
                                onDisagree: () => t(!1)
                            })
                        });
                        if (!t) return !1
                    }
                }
                return !0
            }
            async function T(e) {
                let {
                    application: t,
                    applicationId: i,
                    channel: n
                } = e, l = null != t ? t : await E(i, n.getGuildId());
                return null != l && (!!((0, d.hasFlag)(l.flags, _.ApplicationFlags.EMBEDDED_RELEASED) || s.default.hasActivityEverBeenLaunched(i)) || new Promise(e => {
                    (0, f.confirmExternalAppLaunchAlert)({
                        application: l,
                        onConfirm: () => e(!0),
                        onCancel: () => e(!1)
                    })
                }))
            }
            async function C(e) {
                let t = await I(e);
                if (!t) return !1;
                let i = await A(e);
                if (!i) return !1;
                let n = await T(e);
                return !!n || !1
            }
        },
        501260: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function I(e) {
                var t, i, n;
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
                } = e;
                if (null == l) return 8;
                if ((null == d ? void 0 : d.nsfwAllowed) === !1 && (null == u ? void 0 : null === (t = u.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
                if (!s) return 5;
                if (!(0, _.default)(null == u ? void 0 : null === (i = u.embeddedActivityConfig) || void 0 === i ? void 0 : i.supported_platforms)) return 6;
                let T = null != r ? r : null === (n = f.getVoiceStateForSession(l, null == a ? void 0 : a.session_id)) || void 0 === n ? void 0 : n.channelId;
                if (null == T) return 4;
                let C = o.getChannel(r);
                if (null == C) return 4;
                let v = C.getGuildId();
                if (!C.isPrivate()) {
                    if (null == v) return 10;
                    let e = A.getGuild(v);
                    if ((null == e ? void 0 : e.afkChannelId) === C.id) return 9;
                    let t = f.getCurrentClientVoiceChannelId(C.getGuildId()) === T,
                        i = (0, c.isChannelFull)(C, f, A),
                        n = I.can(E.Permissions.CONNECT, C),
                        l = I.can(E.Permissions.USE_EMBEDDED_ACTIVITIES, C);
                    if (!l) return 1;
                    if (C.isVocal() && !t) {
                        if (i) return 3;
                        if (!n) return 2
                    }
                }
                return 0
            }

            function A(e) {
                let {
                    userId: t,
                    activity: i,
                    channelId: n,
                    application: l
                } = e, c = (0, f.useIsActivitiesEnabledForCurrentPlatform)(null != n ? n : void 0), _ = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()), E = (0, a.useStateFromStores)([u.default, o.default, d.default, r.default], () => I({
                    userId: t,
                    activity: i,
                    application: l,
                    channelId: n,
                    currentUser: _,
                    isActivitiesEnabledForCurrentPlatform: c,
                    ChannelStore: u.default,
                    VoiceStateStore: o.default,
                    PermissionStore: d.default,
                    GuildStore: r.default
                }), [i, l, n, _, c, t]);
                return E
            }(n = l || (l = {}))[n.CAN_JOIN = 0] = "CAN_JOIN", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.CHANNEL_FULL = 3] = "CHANNEL_FULL", n[n.NO_CHANNEL = 4] = "NO_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", n[n.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", n[n.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", n[n.NO_USER = 8] = "NO_USER", n[n.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", n[n.NO_GUILD = 10] = "NO_GUILD"
        },
        943349: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function _(e) {
                let {
                    channelId: t,
                    ChannelStore: i,
                    GuildStore: n,
                    PermissionStore: l
                } = e, a = i.getChannel(t);
                if (null == a) return 3;
                if (!(0, s.getIsActivitiesEnabledForCurrentPlatform)(a)) return 6;
                if (!(0, o.isPrivateChannelWithEnabledActivities)(a.id)) {
                    let e = a.getGuildId();
                    if (null == e) return 4;
                    let t = n.getGuild(e);
                    if ((null == t ? void 0 : t.afkChannelId) === a.id) return 5;
                    let i = l.can(c.Permissions.CONNECT, a);
                    if (!i) return 2;
                    let u = l.can(c.Permissions.USE_EMBEDDED_ACTIVITIES, a);
                    if (!u) return 1
                }
                return 0
            }

            function E(e) {
                let t = (0, a.useStateFromStores)([u.default, r.default, d.default], () => _({
                    channelId: e,
                    ChannelStore: u.default,
                    GuildStore: r.default,
                    PermissionStore: d.default
                }), [e]);
                return t
            }

            function I(e) {
                switch (e) {
                    case 0:
                        return f.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case 1:
                        return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return f.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
                }
            }(n = l || (l = {}))[n.CAN_LAUNCH = 0] = "CAN_LAUNCH", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.NO_CHANNEL = 3] = "NO_CHANNEL", n[n.NO_GUILD = 4] = "NO_GUILD", n[n.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", n[n.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"
        },
        287585: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("954016");

            function l(e) {
                if (null != e && null != e.url && n.validStreamURL.test(e.url)) return e.url
            }
        },
        871388: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            }), i("702976");
            var n = i("49111");

            function l(e, t) {
                return t !== n.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        803353: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("798609"),
                l = i("773336");

            function a(e) {
                var t;
                let i;
                return i = (0, l.isIOS)() ? n.EmbeddedActivitySupportedPlatforms.IOS : (0, l.isAndroid)() ? n.EmbeddedActivitySupportedPlatforms.ANDROID : n.EmbeddedActivitySupportedPlatforms.WEB, null !== (t = null == e ? void 0 : e.includes(i)) && void 0 !== t && t
            }
        },
        152311: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("871388"),
                l = i("49111");

            function a(e) {
                return (0, n.default)(e, l.ActivityFlags.EMBEDDED)
            }
        },
        541473: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            async function c(e) {
                let {
                    channelId: t,
                    timeoutMs: i = 1e4,
                    bypassChangeModal: c = !1
                } = e, f = u.default.getChannel(t);
                if (null == f) return !1;
                let _ = await l.default.handleVoiceConnect({
                    bypassGuildIdCheck: !0,
                    bypassChangeModal: c,
                    channel: f,
                    connected: s.default.isInChannel(t),
                    needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(t, u.default, n.default, r.default).needSubscriptionToAccess
                });
                if (!_) return !1;
                let E = new Promise((e, n) => {
                    let l = setTimeout(() => {
                        n(new o("Joining voice channel has timed out."))
                    }, i);
                    d.default.addConditionalChangeListener(() => {
                        let i = d.default.getVoiceChannelId();
                        return i !== t || (clearTimeout(l), e(), !1)
                    })
                });
                try {
                    await E
                } catch (e) {
                    if (e instanceof o) return !1;
                    throw e
                }
                return !0
            }
        },
        407908: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("599110"),
                l = i("49111");

            function a(e) {
                let {
                    type: t,
                    source: i,
                    userId: a,
                    applicationId: u,
                    partyId: r,
                    messageId: d,
                    locationObject: s,
                    analyticsLocations: o
                } = e;
                n.default.track(l.AnalyticEvents.APPLICATION_OPENED, {
                    type: t,
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
        578708: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("292687"),
                l = i("974889"),
                a = i("393414"),
                u = i("49111");

            function r(e, t) {
                let i = n.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                i ? (0, l.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, a.transitionTo)(u.Routes.CHANNEL(e, t))
            }
        },
        577261: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
        698372: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), i("222007");
            var n = i("442939"),
                l = i("577261");

            function a() {
                let e = (0, l.default)(),
                    [t] = (0, n.default)(null == e ? [] : [e.applicationId]);
                return null != t ? t : void 0
            }
        },
        702173: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                },
                isPrivateChannelWithEnabledActivities: function() {
                    return u
                }
            });
            var n = i("65597"),
                l = i("42203");

            function a(e) {
                var t;
                let i = (0, n.default)([l.default], () => l.default.getChannel(e)),
                    a = null !== (t = null == i ? void 0 : i.isPrivate()) && void 0 !== t && t;
                return a
            }

            function u(e) {
                var t;
                if (null == e) return !1;
                let i = l.default.getChannel(e),
                    n = null !== (t = null == i ? void 0 : i.isPrivate()) && void 0 !== t && t;
                return n
            }
        },
        141962: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                showErrorModal(e) {
                    let {
                        code: t,
                        message: i
                    } = e;
                    (0, l.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
                        title: s.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                            code: t
                        }),
                        body: i,
                        ...e
                    }))
                }
                showLaunchErrorModal(e) {
                    (0, l.openModalLazy)(async () => t => (0, n.jsx)(u.default, {
                        title: s.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                        body: e,
                        ...t
                    }))
                }
                leaveActivity(e) {
                    let {
                        channelId: t,
                        applicationId: i
                    } = e;
                    a.default.wait(() => (0, r.stopEmbeddedActivity)({
                        channelId: t,
                        applicationId: i
                    }))
                }
                constructor(...e) {
                    super(...e), this.handleRPCDisconnect = e => {
                        let {
                            reason: t,
                            application: i
                        } = e;
                        this.superHandleRPCDisconnect({
                            reason: t,
                            application: i
                        })
                    }
                }
            }
            var c = new o
        },
        442939: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function d(e) {
                let t = n.useRef([]);
                return n.useEffect(() => {
                    !(0, a.areArraysShallowEqual)(e, t.current) && (u.default.fetchApplications(e, !1), t.current = e)
                }, [e]), (0, l.useStateFromStoresArray)([r.default], () => e.map(e => r.default.getApplication(e)))
            }

            function s(e) {
                return d(null != e ? [e] : [])[0]
            }
        },
        242740: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                    async handleVoiceConnect(e) {
                        let {
                            channel: t,
                            connected: I,
                            needSubscriptionToAccess: A,
                            locked: T = !1,
                            routeDirectlyToChannel: C = !1,
                            bypassChangeModal: v,
                            bypassGuildIdCheck: S = !1
                        } = e;
                        t.isThread() && (await s.default.unarchiveThreadIfNecessary(t.id), !d.default.hasJoined(t.id) && await s.default.joinThread(t, "Join Voice"));
                        let N = u.default.getRemoteSessionId(),
                            p = f.default.getVoiceStateForSession(o.default.getId(), N),
                            h = (null == p ? void 0 : p.channelId) === t.id,
                            y = h || c.default.getChannelId() === f.default.getCurrentClientVoiceChannelId(t.guild_id);
                        return !v && !T && (0, _.shouldShowVoiceChannelChangeConfirmation)(t) ? new Promise(e => {
                            (0, l.openModalLazy)(async () => {
                                let {
                                    default: l
                                } = await i.el("371895").then(i.bind(i, "371895"));
                                return i => (0, n.jsx)(l, {
                                    channel: t,
                                    onConfirm: () => e(this.handleVoiceConnect({
                                        channel: t,
                                        connected: I,
                                        needSubscriptionToAccess: A,
                                        routeDirectlyToChannel: C,
                                        locked: T,
                                        bypassChangeModal: !0
                                    })),
                                    ...i
                                })
                            })
                        }) : (!T && !I && a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (I || y || A || C) && ! function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = e.getGuildId();
                            if (null == i && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                            (0, r.transitionTo)(E.Routes.CHANNEL(i, e.id))
                        }(t, S), !0)
                    }
                }
        },
        292687: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n.default
                }
            });
            var n = i("870346")
        },
        974889: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("773336"),
                l = i("50885"),
                a = i("870346");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = a.default.getWindow(e);
                null != i && !i.closed && (n.isPlatformEmbedded ? l.default.focus(e, t) : i.focus())
            }
        },
        812809: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("845579"),
                l = i("42887"),
                a = i("829536");

            function u(e) {
                let t = function() {
                        var e;
                        let t = n.SoundboardSettings.getSetting();
                        return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    i = Math.min(l.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * i, 1)
            }
        },
        884385: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                isSpotifyPlayable: function() {
                    return f
                },
                ensureSpotifyPlayable: function() {
                    return _
                },
                isSpotifyPremium: function() {
                    return E
                },
                ensureSpotifyPremium: function() {
                    return I
                }
            }), i("70102"), i("860677"), i("222007");
            var n = i("376556"),
                l = i("161454"),
                a = i("718517"),
                u = i("613691"),
                r = i("155815"),
                d = i("662285"),
                s = i("450484"),
                o = i("49111");
            let c = 30 * a.default.Millis.SECOND;

            function f(e) {
                return null != e.getActiveSocketAndDevice() || r.default.isProtocolRegistered()
            }

            function _() {
                let e = d.default.getActiveSocketAndDevice();
                if (null != e) return Promise.resolve(e);
                if (!r.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
                let t = d.default.getPlayableComputerDevices();
                if (l.default.isObservedAppRunning(n.default.get(o.PlatformTypes.SPOTIFY).name) && t.length > 0) {
                    let {
                        socket: e,
                        device: i
                    } = t[0];
                    return (0, u.setActiveDevice)(e.accountId, i.id), Promise.resolve({
                        socket: e,
                        device: i
                    })
                }
                return new Promise((e, i) => {
                    let n = setTimeout(() => {
                            d.default.removeChangeListener(l), i(Error("timeout launching spotify"))
                        }, c),
                        l = () => {
                            let i = d.default.getPlayableComputerDevices();
                            for (let {
                                    socket: a,
                                    device: r
                                }
                                of i) null == t.find(e => e.device.id === r.id) && (clearTimeout(n), d.default.removeChangeListener(l), setImmediate(() => {
                                (0, u.setActiveDevice)(a.accountId, r.id), e({
                                    socket: a,
                                    device: r
                                })
                            }))
                        };
                    d.default.addChangeListener(l), window.open("".concat(s.SPOTIFY_APP_PROTOCOL, ":"))
                })
            }

            function E() {
                let e = d.default.getActiveSocketAndDevice();
                if (null == e) return null;
                let {
                    socket: t
                } = e;
                return t.isPremium
            }

            function I() {
                let e = d.default.getActiveSocketAndDevice();
                if (null == e) return Promise.reject(Error("no active profile"));
                let {
                    socket: t
                } = e;
                return t.isPremium ? Promise.resolve() : (0, u.getProfile)(t.accountId, t.accessToken).then(() => {
                    if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
                })
            }
        },
        170108: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("599110"),
                l = i("884385"),
                a = i("450484"),
                u = i("49111");
            let r = [a.SpotifyActionTypes.USER_ACTIVITY_SYNC, a.SpotifyActionTypes.EMBED_SYNC];

            function d(e, t, i, a) {
                n.default.track(u.AnalyticEvents.SPOTIFY_BUTTON_CLICKED, {
                    type: e,
                    source: a,
                    is_premium: (0, l.isSpotifyPremium)(),
                    party_id: r.includes(e) && (null == i ? void 0 : i.party) != null ? i.party.id : null,
                    other_user_id: t.id
                })
            }
        },
        922174: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("926994"),
                l = i("49111");

            function a(e) {
                return !!e || ((0, n.default)(l.PlatformTypes.SPOTIFY, "Spotify Button"), !1)
            }
        },
        782911: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("450484"),
                l = i("782340");

            function a(e, t) {
                switch (t) {
                    case n.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        return e.hasSpotifyAccount ? l.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        }) : l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        });
                    case n.SpotifyActionTypes.EMBED_SYNC:
                        if (!e.hasSpotifyAccount) return l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                            platform: n.SPOTIFY_PLATFORM_NAME
                        });
                        if (e.syncingWithUser || e.syncingWithParty) return l.default.Messages.INVITE_EMBED_JOINED;
                        return l.default.Messages.JOIN;
                    case n.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                    default:
                        return
                }
            }
        },
        629414: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("158998"),
                l = i("450484"),
                a = i("782340");

            function u(e, t, i) {
                switch (t) {
                    case l.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                        if (e.playingSameTrack) return a.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                        if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    case l.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        return a.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                            name: null != i ? i : n.default.getName(e.user)
                        });
                    case l.SpotifyActionTypes.EMBED_SYNC:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    default:
                        return
                }
            }
        },
        53887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("884385");

            function l(e, t, i, l) {
                var a, u, r;
                let d = e.hasConnectedAccount(),
                    s = (0, n.isSpotifyPlayable)(e),
                    o = e.getTrack(),
                    c = e.getSyncingWith(),
                    f = e.getActivity(),
                    _ = null !== (r = null !== (u = null == o ? void 0 : o.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : e.getLastPlayedTrackId();
                return {
                    user: i,
                    activity: l,
                    hasSpotifyAccount: d,
                    canPlaySpotify: s,
                    notPlayable: d && !s,
                    syncingWithParty: (null == f ? void 0 : f.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === f.party.id,
                    syncingWithUser: (null == c ? void 0 : c.userId) != null && (null == c ? void 0 : c.userId) === i.id,
                    isCurrentUser: i.id === t.getId(),
                    currentUserTrackId: _,
                    playingSameTrack: null != _ && _ === (null == l ? void 0 : l.sync_id)
                }
            }
        },
        486150: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            async function s(e, t, s) {
                let {
                    hasSpotifyAccount: o,
                    activity: c,
                    user: f
                } = e;
                (0, d.default)(o) && null != c && null != c.sync_id && (await (0, u.ensureSpotifyPlayable)(), await (0, u.ensureSpotifyPremium)().catch(e => ((0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("775195").then(i.bind(i, "775195"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                }), Promise.reject(e))), a.sync(c, f.id), (0, r.default)(t, f, c, s))
            }
        },
        555759: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("968194"),
                l = i("884385"),
                a = i("170108"),
                u = i("922174");
            async function r(e, t, i) {
                let {
                    hasSpotifyAccount: r,
                    activity: d,
                    user: s
                } = e;
                (0, u.default)(r) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, s.id), (0, a.default)(t, s, d, i))
            }
        },
        590456: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function d(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: i
                } = window.GLOBAL_ENV;
                return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(r.Endpoints.BADGE_ICON(e))
            }(n = a || (a = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = u || (u = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"
        },
        349649: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function s(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getNote(e));
                return n.useEffect(() => {
                    null == t && o(e)
                }, [t, e]), null != t ? t : {
                    loading: !0,
                    note: null
                }
            }
            async function o(e) {
                u.default.dispatch({
                    type: "USER_NOTE_LOAD_START",
                    userId: e
                });
                try {
                    let {
                        body: t
                    } = await a.default.get({
                        url: d.Endpoints.NOTE(e),
                        oldFormErrors: !0
                    });
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: e,
                        note: t
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: e
                    })
                }
            }
        },
        401642: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function d(e) {
                let {
                    userId: t,
                    section: i,
                    guildId: d = r.ME,
                    channelId: s,
                    friendToken: o,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = e, _ = a.default.getUser(t), E = d !== r.ME ? d : void 0;
                if (null == _) return (0, l.fetchProfile)(t, {
                    friendToken: o,
                    guildId: E
                }).then(() => {
                    n.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: i,
                        guildId: d,
                        channelId: s,
                        friendToken: o,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, u.default)(t, _.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: o,
                    guildId: E
                }), n.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
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
        645999: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
        555179: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
                getNote(e) {
                    return a[e]
                }
            }
            r.displayName = "NoteStore";
            var d = new r(l.default, {
                CONNECTION_OPEN: u,
                OVERLAY_INITIALIZE: u,
                USER_NOTE_UPDATE: function(e) {
                    a[e.id] = {
                        loading: !1,
                        note: e.note
                    }
                },
                USER_NOTE_LOAD_START: function(e) {
                    let {
                        userId: t
                    } = e;
                    a[t] = {
                        loading: !0,
                        note: null
                    }
                },
                USER_NOTE_LOADED: function(e) {
                    let {
                        userId: t,
                        note: i
                    } = e;
                    a[t] = {
                        loading: !1,
                        note: null == i ? void 0 : i.note
                    }
                }
            })
        },
        953998: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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

            function s(e, t, i) {
                var n;
                let {
                    applicationId: s
                } = i, o = null !== (n = r[s]) && void 0 !== n ? n : {};
                if (o[t] = e, r[s] = o, !__OVERLAY__ && e === u.ActivityActionStates.FAILED) {
                    null != d[s] && d[s].stop();
                    let e = new l.Timeout;
                    e.start(12e4, () => a.default.dispatch({
                        type: "ACTIVITY_LAUNCH_FAIL",
                        applicationId: s,
                        activityType: t
                    })), d[s] = e
                }
            }

            function o(e) {
                return s(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, e)
            }
            class c extends n.default.Store {
                getState(e, t) {
                    let i = r[e];
                    return null == i ? void 0 : i[t]
                }
                getStates() {
                    return r
                }
            }
            c.displayName = "ActivityLauncherStore";
            var f = new c(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        activityLauncherStates: t
                    } = e;
                    r = {
                        ...t
                    }
                },
                ACTIVITY_JOIN_LOADING: e => s(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN_FAILED: e => s(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN: o,
                EMBEDDED_ACTIVITY_CLOSE: o,
                ACTIVITY_LAUNCH_FAIL: function(e) {
                    let {
                        applicationId: t,
                        activityType: i
                    } = e, n = r[t];
                    if (null == n || n[i] !== u.ActivityActionStates.FAILED) return !1;
                    delete n[i]
                }
            })
        }
    }
]);
//# sourceMappingURL=65256.6549e485c32382c9883e.js.map