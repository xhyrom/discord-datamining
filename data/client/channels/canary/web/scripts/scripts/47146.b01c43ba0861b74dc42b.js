(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47146"], {
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
                    return o
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
                o(e, t).then(i => l.default.dispatch({
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

            function o(e, t) {
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
                o = i("117362"),
                s = i("49111");
            (n = class extends u.Component {
                renderProvider(e) {
                    var t, i;
                    let {
                        section: n,
                        page: l,
                        object: u,
                        objectType: r,
                        children: o
                    } = this.props, s = this.mergeLocation(e.location, this.getLocation(l, n, u, r)), c = this.getContext(s, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (i = this._loadId) && void 0 !== i ? i : e.loadId);
                    return (0, a.jsx)(d.AnalyticsContext.Provider, {
                        value: c,
                        children: o
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
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, o.cachedFunction)((e, t, i, n) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != i && (l.object = i), null != n && (l.objectType = n), l
                    }), this.mergeLocation = (0, o.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, o.cachedFunction)((e, t, i) => ({
                        location: e,
                        loadDate: t,
                        loadId: i
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
                }
            }).Pages = s.AnalyticsPages, n.Sections = s.AnalyticsSections, n.Objects = s.AnalyticsObjects, n.ObjectTypes = s.AnalyticsObjectTypes, n.defaultProps = {
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
                default: function() {
                    return n
                }
            }), i("222007");
            var n, l = i("913144"),
                a = i("255397"),
                u = i("316272"),
                r = i("651057"),
                d = i("299285"),
                o = i("191145"),
                s = i("601222"),
                c = i("233069"),
                f = i("271938"),
                _ = i("42203"),
                E = i("945956"),
                I = i("18494"),
                A = i("697218"),
                T = i("599110"),
                C = i("773336"),
                v = i("289732"),
                S = i("550766"),
                N = i("191225"),
                h = i("602718"),
                D = i("885829"),
                p = i("986214"),
                y = i("126939"),
                O = i("837707"),
                g = i("334368"),
                L = i("15264"),
                m = i("673044"),
                P = i("803353"),
                M = i("420444"),
                b = i("954016"),
                U = i("49111"),
                V = i("782340");
            let R = {},
                F = {};

            function Y(e) {
                var t;
                let i = (null == e ? void 0 : e.activity) != null ? !(0, L.default)(null == e ? void 0 : e.activity) : void 0,
                    n = (null == e ? void 0 : e.activity) != null ? (0, m.default)(null == e ? void 0 : e.activity) : void 0,
                    l = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, g.default)((0, C.getOS)())].release_phase;
                return {
                    isPremiumActivity: i,
                    isFreePeriod: n,
                    releasePhase: l
                }
            }
            async function w(e) {
                let {
                    channelId: t,
                    applicationId: i,
                    analyticsLocations: n
                } = e, l = _.default.getChannel(t), a = null == l ? void 0 : l.getGuildId(), u = A.default.getCurrentUser();
                if (null == l || null == u) return;
                let r = N.default.getShelfActivities(a),
                    d = v.default.getState().shelfOrder,
                    c = 0 === N.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === i).length,
                    f = (0, h.default)({
                        applicationId: i,
                        activityConfigs: r
                    }),
                    E = 1 + d.findIndex(e => e === i),
                    {
                        isPremiumActivity: I,
                        isFreePeriod: C,
                        releasePhase: S
                    } = Y(f),
                    D = await (0, s.default)();
                F[i] = e => {
                    var t, a;
                    R[i] = e, T.default.track(U.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                        media_session_id: e.mediaSessionId,
                        activity_session_id: e.activitySessionId,
                        application_id: i,
                        location_stack: n,
                        user_premium_tier: u.premiumType,
                        is_premium_activity: I,
                        is_free_period: C,
                        raw_thermal_state: D,
                        n_participants: o.default.getUserParticipantCount(l.id),
                        is_activity_start: c,
                        release_phase: S,
                        activity_premium_tier_requirement: null == f ? void 0 : null === (t = f.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                        shelf_rank: null == f ? void 0 : null === (a = f.activity) || void 0 === a ? void 0 : a.shelf_rank,
                        shelf_sorted_rank: E > 0 ? E : null
                    })
                }
            }
            async function G(e) {
                var t, i;
                let {
                    channelId: n,
                    applicationId: l
                } = e, a = R[l], u = _.default.getChannel(n), r = N.default.getEmbeddedActivityDurationMs(n, l), d = A.default.getCurrentUser(), o = null == u ? void 0 : u.getGuildId();
                if (null == a || null == u || null == d) return;
                let c = N.default.getShelfActivities(o),
                    f = (0, h.default)({
                        applicationId: l,
                        activityConfigs: c
                    }),
                    {
                        isPremiumActivity: E,
                        isFreePeriod: I,
                        releasePhase: C
                    } = Y(f),
                    v = await (0, s.default)();
                T.default.track(U.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
                    channel_id: u.id,
                    guild_id: u.getGuildId(),
                    media_session_id: a.mediaSessionId,
                    activity_session_id: a.activitySessionId,
                    application_id: l,
                    duration_ms: r,
                    user_premium_tier: d.premiumType,
                    is_premium_activity: E,
                    is_free_period: I,
                    raw_thermal_state: v,
                    release_phase: C,
                    activity_premium_tier_requirement: null == f ? void 0 : null === (t = f.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
                    shelf_rank: null == f ? void 0 : null === (i = f.activity) || void 0 === i ? void 0 : i.shelf_rank
                }), delete F[l], delete R[l]
            }

            function B(e) {
                var t, i;
                let {
                    channelId: n,
                    embeddedActivity: l,
                    connections: u,
                    updateCode: r
                } = e, d = f.default.getId(), o = N.default.getEmbeddedActivitiesForChannel(n), s = _.default.getChannel(n);
                if (r === b.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == s ? void 0 : s.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === u.find(e => e.user_id === d) && a.default.selectParticipant(n, null), !u.some(e => e.user_id === d)) return;
                let c = E.default.getMediaSessionId(),
                    {
                        application_id: I
                    } = l,
                    A = (0, O.default)(l);
                null != I && null != A && null != c && (null === (t = F[I]) || void 0 === t || t.call(F, {
                    mediaSessionId: c,
                    activitySessionId: A
                }), delete F[I])
            }

            function H(e) {
                let {
                    mediaSessionId: t
                } = e, i = E.default.getChannelId();
                if (null != t && null != i) {
                    let e = N.default.getSelfEmbeddedActivityForChannel(i),
                        l = null == e ? void 0 : e.applicationId,
                        a = (0, O.default)(e);
                    if (null != l && null != t && null != a) {
                        var n;
                        null === (n = F[l]) || void 0 === n || n.call(F, {
                            mediaSessionId: t,
                            activitySessionId: a
                        }), delete F[l]
                    }
                }
            }
            n = class extends u.default {
                _initialize() {
                    I.default.addChangeListener(this.handleSelectedChannelUpdate), l.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.subscribe("EMBEDDED_ACTIVITY_OPEN", w), l.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", G), l.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.subscribe("MEDIA_SESSION_JOINED", H)
                }
                _terminate() {
                    I.default.removeChangeListener(this.handleSelectedChannelUpdate), l.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", w), l.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", G), l.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", B), l.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.unsubscribe("MEDIA_SESSION_JOINED", H)
                }
                constructor(...e) {
                    super(...e), this.handleSelectedChannelUpdate = () => {
                        let e = I.default.getVoiceChannelId();
                        for (let {
                                channelId: t,
                                applicationId: i
                            }
                            of N.default.getSelfEmbeddedActivities().values())(0, M.default)(t) && t !== e && this.leaveActivity({
                            channelId: t,
                            applicationId: i
                        });
                        if (null != e) {
                            let t = N.default.getEmbeddedActivitiesForChannel(e),
                                i = f.default.getId();
                            t.forEach(e => {
                                if (e.userIds.has(i)) {
                                    let t = N.default.getSelfEmbeddedActivityForChannel(e.channelId);
                                    null == t && (0, S.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
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
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                                break;
                            case U.AbortCodes.INVALID_PERMISSIONS:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                                n = V.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                                break;
                            case U.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
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
                                of N.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
                                channelId: t,
                                applicationId: n
                            });
                            t.code !== U.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
                        }
                    }, this.handleDeferredOpen = async e => {
                        var t, i, n;
                        let l;
                        let {
                            channelId: a,
                            applicationId: u,
                            analyticsLocations: o
                        } = e, s = _.default.getChannel(a);
                        if (void 0 === s || c.GUILD_VOCAL_CHANNEL_TYPES.has(null == s ? void 0 : s.type) && I.default.getVoiceChannelId() !== a) return;
                        let f = N.default.getSelfEmbeddedActivityForChannel(a);
                        if ((null == f ? void 0 : f.applicationId) === u) return;
                        let E = await r.default.fetchApplication(u),
                            A = (0, y.getIsActivitiesEnabledForCurrentPlatform)();
                        if (!A) {
                            this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                            return
                        }
                        if (!(0, P.default)(null == E ? void 0 : null === (t = E.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                            this.showLaunchErrorModal(V.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                            return
                        }
                        let T = null == f ? void 0 : f.applicationId;
                        null != T && (await r.default.fetchApplication(T), l = d.default.getApplication(T));
                        let C = null !== (i = null == s ? void 0 : s.getGuildId()) && void 0 !== i ? i : void 0,
                            {
                                activityConfigs: v,
                                applications: O
                            } = await (0, S.fetchShelf)({
                                guildId: C
                            }),
                            g = (0, h.default)({
                                applicationId: u,
                                activityConfigs: v,
                                applications: O
                            });
                        if (null == g) {
                            let e = await (0, S.fetchShelf)({
                                guildId: C,
                                force: !0
                            });
                            g = (0, h.default)({
                                applicationId: u,
                                activityConfigs: e.activityConfigs,
                                applications: e.applications
                            })
                        }
                        let L = N.default.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === u),
                            m = null !== (n = null == L ? void 0 : L.userIds.size) && void 0 !== n ? n : 0;
                        m > 0 ? (0, D.maybeJoinEmbeddedActivity)({
                            channelId: a,
                            applicationId: u,
                            instanceId: null == L ? void 0 : L.instanceId,
                            inputApplication: null,
                            analyticsLocations: o,
                            embeddedActivitiesManager: this
                        }) : await (0, p.default)({
                            activityItem: g,
                            currentActivity: l,
                            channelId: a,
                            guildId: C,
                            embeddedActivitiesManager: this,
                            analyticsLocations: o
                        })
                    }
                }
            }
        },
        544805: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                confirmActivityAgeGate: function() {
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
                } = e, o = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT), s = o ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
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
                    contextKey: s
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
                    return S
                }
            });
            var n = i("651057"),
                l = i("299285"),
                a = i("653047"),
                u = i("42203"),
                r = i("18494"),
                d = i("697218"),
                o = i("427953"),
                s = i("550766"),
                c = i("544805"),
                f = i("370507"),
                _ = i("420444"),
                E = i("541473"),
                I = i("407908"),
                A = i("578708"),
                T = i("954016"),
                C = i("49111");
            async function v(e, t, i, n, l) {
                let a = u.default.getChannel(t),
                    r = null == a ? void 0 : a.getGuildId(),
                    c = d.default.getCurrentUser();
                if (null == a || null == t || null == r && !a.isPrivate() || null == c) return !1;
                let f = (0, _.default)(a.id),
                    v = T.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(a.type);
                if (f) {
                    let e = await (0, E.default)({
                        channelId: a.id,
                        bypassChangeModal: l
                    });
                    if (!e) return !1
                } else if (!(0, o.isActivitiesInTextEnabled)(a, "joinEmbeddedActivity") || !v) return !1;
                return (0, A.default)(r, t), (0, s.startEmbeddedActivity)(t, e, n), (0, I.default)({
                    type: C.AnalyticsGameOpenTypes.JOIN,
                    userId: c.id,
                    applicationId: e,
                    locationObject: i,
                    analyticsLocations: n
                }), !0
            }

            function S(e) {
                let {
                    applicationId: t,
                    currentEmbeddedApplication: i,
                    activityChannelId: o,
                    locationObject: s,
                    embeddedActivitiesManager: _,
                    analyticsLocations: E
                } = e, I = u.default.getChannel(o), T = null == I ? void 0 : I.getGuildId(), C = null == T || "" === T, S = d.default.getCurrentUser();
                if (null == I || C && !I.isPrivate() || null == o) return Promise.resolve(!1);
                if (r.default.getVoiceChannelId() === o && (null == i ? void 0 : i.id) === t) return (0, A.default)(T, o), Promise.resolve(!0);
                let N = async function() {
                    let {
                        bypassChangeVcModal: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bypassChangeVcModal: !1
                    }, i = (null == S ? void 0 : S.nsfwAllowed) == null;
                    if (i) {
                        var u, r;
                        let i = null !== (r = l.default.getApplication(t)) && void 0 !== r ? r : a.default.createFromServer(await n.default.fetchApplication(t));
                        if ((null === (u = i.embeddedActivityConfig) || void 0 === u ? void 0 : u.requires_age_gate) === !0) return new Promise(n => {
                            (0, c.confirmActivityAgeGate)({
                                application: i,
                                onAgree: () => {
                                    n(v(t, o, s, E, e))
                                },
                                onDisagree: () => n(!1)
                            })
                        })
                    }
                    return v(t, o, s, E, e)
                };
                return null != i ? new Promise((e, t) => {
                    (0, f.default)(i, I, () => {
                        _.leaveActivity({
                            channelId: o,
                            applicationId: i.id
                        }), N({
                            bypassChangeVcModal: !0
                        }).then(e).catch(t)
                    }, () => e(!0))
                }) : N()
            }
        },
        885829: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                maybeJoinEmbeddedActivity: function() {
                    return T
                }
            });
            var n = i("404118"),
                l = i("651057"),
                a = i("299285"),
                u = i("645999"),
                r = i("653047"),
                d = i("42203"),
                o = i("305961"),
                s = i("957255"),
                c = i("697218"),
                f = i("800762"),
                _ = i("191225"),
                E = i("706508"),
                I = i("501260"),
                A = i("782340");
            async function T(e) {
                var t;
                let {
                    channelId: i,
                    applicationId: T,
                    instanceId: C,
                    inputApplication: v,
                    analyticsLocations: S,
                    embeddedActivitiesManager: N
                } = e, h = _.default.getEmbeddedActivitiesForChannel(i), D = h.find(e => e.applicationId === T && (null == C || e.instanceId === C)), p = v;
                if (null == p) {
                    let e = await l.default.fetchApplication(T);
                    p = r.default.createFromServer(e)
                }
                if (null == D || null == p) return;
                let y = c.default.getCurrentUser(),
                    O = (0, I.default)({
                        userId: null == y ? void 0 : y.id,
                        application: p,
                        channelId: i,
                        currentUser: y,
                        isActivitiesEnabledForCurrentPlatform: !0,
                        ChannelStore: d.default,
                        VoiceStateStore: f.default,
                        PermissionStore: s.default,
                        GuildStore: o.default
                    }),
                    g = _.default.getSelfEmbeddedActivityForChannel(i),
                    L = null == g ? void 0 : g.applicationId,
                    m = null != L && null !== (t = a.default.getApplication(L)) && void 0 !== t ? t : void 0;
                ! function(e) {
                    let {
                        embeddedActivityJoinability: t,
                        handleCanJoin: i
                    } = e;
                    switch (t) {
                        case I.EmbeddedActivityJoinability.CAN_JOIN:
                            null == i || i();
                            break;
                        case I.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            (0, u.showActivitiesInvalidPermissionsAlert)();
                            break;
                        case I.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case I.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS,
                                hideActionSheet: !1
                            });
                            break;
                        case I.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE,
                                hideActionSheet: !1
                            });
                            break;
                        case I.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
                        case I.EmbeddedActivityJoinability.CHANNEL_FULL:
                        case I.EmbeddedActivityJoinability.NO_CHANNEL:
                        case I.EmbeddedActivityJoinability.NO_USER:
                            n.default.show({
                                title: A.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                                body: A.default.Messages.ACTIVITIES_GENERIC_LAUNCH_FAILURE_DIALOG_BODY,
                                hideActionSheet: !1
                            })
                    }
                }({
                    embeddedActivityJoinability: O,
                    handleCanJoin: async function e() {
                        null != D && await (0, E.default)({
                            applicationId: D.applicationId,
                            currentEmbeddedApplication: m,
                            activityChannelId: i,
                            locationObject: {},
                            embeddedActivitiesManager: N,
                            analyticsLocations: S
                        })
                    }
                })
            }
        },
        986214: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return D
                }
            });
            var n = i("645999"),
                l = i("42203"),
                a = i("305961"),
                u = i("957255"),
                r = i("697218"),
                d = i("659500"),
                o = i("427953"),
                s = i("898065"),
                c = i("550766"),
                f = i("191225"),
                _ = i("544805"),
                E = i("370507"),
                I = i("943349"),
                A = i("420444"),
                T = i("541473"),
                C = i("407908"),
                v = i("578708"),
                S = i("702173"),
                N = i("954016"),
                h = i("49111");

            function D(e) {
                let {
                    activityItem: t,
                    currentActivity: i,
                    locationObject: o,
                    channelId: s,
                    guildId: c,
                    embeddedActivitiesManager: A,
                    analyticsLocations: T
                } = e, C = a.default.getGuild(c), v = r.default.getCurrentUser(), N = f.default.getConnectedActivityChannelId(), D = l.default.getChannel(N);
                if (null == C && !(0, S.isPrivateChannelWithEnabledActivities)(s) || null == v || null == t) return Promise.resolve(!1);
                let {
                    application: y,
                    activity: O
                } = t;
                if (null == y) return Promise.resolve(!1);
                if (null == s) return d.ComponentDispatch.dispatch(h.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, {
                    applicationId: y.id
                }), Promise.resolve(!1);
                let g = null != s ? (0, I.getEmbeddedActivityLaunchability)({
                    channelId: s,
                    ChannelStore: l.default,
                    GuildStore: a.default,
                    PermissionStore: u.default
                }) : I.EmbeddedActivityLaunchability.NO_CHANNEL;
                if (g !== I.EmbeddedActivityLaunchability.CAN_LAUNCH) return g === I.EmbeddedActivityLaunchability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION && (0, n.showActivitiesInvalidPermissionsAlert)(), Promise.resolve(!1);
                let L = function() {
                    let {
                        bypassChangeVcModal: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bypassChangeVcModal: !1
                    }, t = O.requires_age_gate && null == v.nsfwAllowed;
                    return t ? new Promise(t => {
                        (0, _.confirmActivityAgeGate)({
                            application: y,
                            onAgree: () => t(p({
                                channelId: s,
                                guildId: null == C ? void 0 : C.id,
                                locationObject: o,
                                application: y,
                                analyticsLocations: T,
                                bypassChangeVcModal: e
                            })),
                            onDisagree: () => t(!1)
                        })
                    }) : p({
                        channelId: s,
                        guildId: null == C ? void 0 : C.id,
                        locationObject: o,
                        application: y,
                        analyticsLocations: T,
                        bypassChangeVcModal: e
                    })
                };
                return null != i ? new Promise(e => {
                    (0, E.default)(i, D, () => {
                        A.leaveActivity({
                            channelId: s,
                            applicationId: i.id
                        }), e(L({
                            bypassChangeVcModal: !0
                        }))
                    }, () => e(!1))
                }) : L()
            }
            async function p(e) {
                let {
                    channelId: t,
                    guildId: i,
                    locationObject: n,
                    application: a,
                    analyticsLocations: u,
                    bypassChangeVcModal: d
                } = e, f = r.default.getCurrentUser(), _ = l.default.getChannel(t);
                if (null == f || null == _) return !1;
                let E = (0, A.default)(t),
                    I = N.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(_.type);
                if (E) {
                    let e = await (0, T.default)({
                        channelId: t,
                        bypassChangeModal: d
                    });
                    if (!e) return !1
                } else if (!(0, o.isActivitiesInTextEnabled)(_, "handleStartEmbeddedActivity") || !I) return !1;
                return c.startEmbeddedActivity(t, a.id, u), (0, v.default)(i, t), (0, C.default)({
                    type: h.AnalyticsGameOpenTypes.LAUNCH,
                    userId: f.id,
                    applicationId: a.id,
                    locationObject: n,
                    analyticsLocations: u
                }), s.markActivityUsed(a.id), !0
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

            function a() {
                return l()
            }

            function u() {
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
                    channelId: o,
                    currentUser: s,
                    isEmbedded: c,
                    ChannelStore: f,
                    GuildStore: _,
                    GuildMemberCountStore: E,
                    RelationshipStore: I,
                    SelectedChannelStore: A,
                    VoiceStateStore: T,
                    PermissionStore: C
                } = e, v = (0, l.getIsActivitiesEnabledForCurrentPlatform)();
                if (null == t) return !1;
                if (c) return (0, a.default)({
                    userId: t.id,
                    activity: i,
                    channelId: o,
                    currentUser: s,
                    application: d,
                    isActivitiesEnabledForCurrentPlatform: v,
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
                o = i("697218"),
                s = i("800762"),
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
                    isActivitiesEnabledForCurrentPlatform: o,
                    ChannelStore: s,
                    VoiceStateStore: f,
                    PermissionStore: I,
                    GuildStore: A
                } = e;
                if (null == l) return 8;
                if ((null == d ? void 0 : d.nsfwAllowed) === !1 && (null == u ? void 0 : null === (t = u.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
                if (!o) return 5;
                if (!(0, _.default)(null == u ? void 0 : null === (i = u.embeddedActivityConfig) || void 0 === i ? void 0 : i.supported_platforms)) return 6;
                let T = null != r ? r : null === (n = f.getVoiceStateForSession(l, null == a ? void 0 : a.session_id)) || void 0 === n ? void 0 : n.channelId;
                if (null == T) return 4;
                let C = s.getChannel(r);
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
                } = e, c = (0, f.useIsActivitiesEnabledForCurrentPlatform)(), _ = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()), E = (0, a.useStateFromStores)([u.default, s.default, d.default, r.default], () => I({
                    userId: t,
                    activity: i,
                    application: l,
                    channelId: n,
                    currentUser: _,
                    isActivitiesEnabledForCurrentPlatform: c,
                    ChannelStore: u.default,
                    VoiceStateStore: s.default,
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
                    return f
                },
                useEmbeddedActivityLaunchability: function() {
                    return _
                },
                getEmbeddedActivityLaunchabilityLabel: function() {
                    return E
                }
            });
            var n, l, a = i("446674"),
                u = i("42203"),
                r = i("305961"),
                d = i("957255"),
                o = i("702173"),
                s = i("49111"),
                c = i("782340");

            function f(e) {
                let {
                    channelId: t,
                    ChannelStore: i,
                    GuildStore: n,
                    PermissionStore: l
                } = e, a = i.getChannel(t);
                if (null == a) return 3;
                if (!(0, o.isPrivateChannelWithEnabledActivities)(a.id)) {
                    let e = a.getGuildId();
                    if (null == e) return 4;
                    let t = n.getGuild(e);
                    if ((null == t ? void 0 : t.afkChannelId) === a.id) return 5;
                    let i = l.can(s.Permissions.CONNECT, a);
                    if (!i) return 2;
                    let u = l.can(s.Permissions.USE_EMBEDDED_ACTIVITIES, a);
                    if (!u) return 1
                }
                return 0
            }

            function _(e) {
                let t = (0, a.useStateFromStores)([u.default, r.default, d.default], () => f({
                    channelId: e,
                    ChannelStore: u.default,
                    GuildStore: r.default,
                    PermissionStore: d.default
                }), [e]);
                return t
            }

            function E(e) {
                switch (e) {
                    case 0:
                        return c.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
                    case 1:
                        return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                    default:
                        return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
                }
            }(n = l || (l = {}))[n.CAN_LAUNCH = 0] = "CAN_LAUNCH", n[n.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", n[n.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", n[n.NO_CHANNEL = 3] = "NO_CHANNEL", n[n.NO_GUILD = 4] = "NO_GUILD", n[n.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL"
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
        15264: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("673044");

            function l(e) {
                return null == e.premium_tier_requirement || (0, n.default)(e)
            }
        },
        673044: function(e, t, i) {
            "use strict";

            function n(e) {
                let t = Date.now(),
                    i = null != e.free_period_starts_at ? Date.parse(e.free_period_starts_at) : null,
                    n = null != e.free_period_ends_at ? Date.parse(e.free_period_ends_at) : null;
                return (null != i || null != n) && (null == i && null != n ? t < n : null != i && null == n ? t >= i : null != i && null != n && t >= i && t < n)
            }
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            })
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
                o = i("800762");
            class s extends Error {}
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
                    connected: o.default.isInChannel(t),
                    needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(t, u.default, n.default, r.default).needSubscriptionToAccess
                });
                if (!_) return !1;
                let E = new Promise((e, n) => {
                    let l = setTimeout(() => {
                        n(new s("Joining voice channel has timed out."))
                    }, i);
                    d.default.addConditionalChangeListener(() => {
                        let i = d.default.getVoiceChannelId();
                        return i !== t || (clearTimeout(l), e(), !1)
                    })
                });
                try {
                    await E
                } catch (e) {
                    if (e instanceof s) return !1;
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
                    locationObject: o,
                    analyticsLocations: s
                } = e;
                n.default.track(l.AnalyticEvents.APPLICATION_OPENED, {
                    type: t,
                    source: i,
                    application_id: u,
                    party_id: null != r ? r : void 0,
                    other_user_id: a,
                    message_id: d,
                    location: o,
                    location_stack: s
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
                o = i("782340");
            class s extends d.default {
                showErrorModal(e) {
                    let {
                        code: t,
                        message: i
                    } = e;
                    (0, l.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
                        title: o.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
                            code: t
                        }),
                        body: i,
                        ...e
                    }))
                }
                showLaunchErrorModal(e) {
                    (0, l.openModalLazy)(async () => t => (0, n.jsx)(u.default, {
                        title: o.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
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
            var c = new s
        },
        442939: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                },
                useGetOrFetchApplication: function() {
                    return o
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

            function o(e) {
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
                o = i("263024"),
                s = i("271938"),
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
                        t.isThread() && (await o.default.unarchiveThreadIfNecessary(t.id), !d.default.hasJoined(t.id) && await o.default.joinThread(t, "Join Voice"));
                        let N = u.default.getRemoteSessionId(),
                            h = f.default.getVoiceStateForSession(s.default.getId(), N),
                            D = (null == h ? void 0 : h.channelId) === t.id,
                            p = D || c.default.getChannelId() === f.default.getCurrentClientVoiceChannelId(t.guild_id);
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
                        }) : (!T && !I && a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (I || p || A || C) && ! function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = e.getGuildId();
                            if (null == i && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                            (0, r.transitionTo)(E.Routes.CHANNEL(i, e.id))
                        }(t, S), !0)
                    }
                }
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
                l = i("568307"),
                a = i("718517"),
                u = i("613691"),
                r = i("155815"),
                d = i("662285"),
                o = i("450484"),
                s = i("49111");
            let c = 30 * a.default.Millis.SECOND;

            function f(e) {
                return null != e.getActiveSocketAndDevice() || r.default.isProtocolRegistered()
            }

            function _() {
                let e = d.default.getActiveSocketAndDevice();
                if (null != e) return Promise.resolve(e);
                if (!r.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
                let t = d.default.getPlayableComputerDevices();
                if (l.default.isObservedAppRunning(n.default.get(s.PlatformTypes.SPOTIFY).name) && t.length > 0) {
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
                    d.default.addChangeListener(l), window.open("".concat(o.SPOTIFY_APP_PROTOCOL, ":"))
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
                    o = (0, n.isSpotifyPlayable)(e),
                    s = e.getTrack(),
                    c = e.getSyncingWith(),
                    f = e.getActivity(),
                    _ = null !== (r = null !== (u = null == s ? void 0 : s.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : e.getLastPlayedTrackId();
                return {
                    user: i,
                    activity: l,
                    hasSpotifyAccount: d,
                    canPlaySpotify: o,
                    notPlayable: d && !o,
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
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("968194"),
                u = i("884385"),
                r = i("170108"),
                d = i("922174");
            async function o(e, t, o) {
                let {
                    hasSpotifyAccount: s,
                    activity: c,
                    user: f
                } = e;
                (0, d.default)(s) && null != c && null != c.sync_id && (await (0, u.ensureSpotifyPlayable)(), await (0, u.ensureSpotifyPremium)().catch(e => ((0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("775195").then(i.bind(i, "775195"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                }), Promise.reject(e))), a.sync(c, f.id), (0, r.default)(t, f, c, o))
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
                    user: o
                } = e;
                (0, u.default)(r) && null != d && null != d.sync_id && (await (0, l.ensureSpotifyPlayable)(), n.play(d, o.id), (0, a.default)(t, o, d, i))
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
                    return o
                }
            });
            var n = i("884691"),
                l = i("446674"),
                a = i("872717"),
                u = i("913144"),
                r = i("555179"),
                d = i("49111");

            function o(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getNote(e));
                return n.useEffect(() => {
                    null == t && s(e)
                }, [t, e]), null != t ? t : {
                    loading: !0,
                    note: null
                }
            }
            async function s(e) {
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
                    return o
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
                    channelId: o,
                    friendToken: s,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = e, _ = a.default.getUser(t), E = d !== r.ME ? d : void 0;
                if (null == _) return (0, l.fetchProfile)(t, {
                    friendToken: s,
                    guildId: E
                }).then(() => {
                    n.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: i,
                        guildId: d,
                        channelId: o,
                        friendToken: s,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, u.default)(t, _.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: s,
                    guildId: E
                }), n.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: i,
                    guildId: d,
                    channelId: o,
                    friendToken: s,
                    autoFocusNote: c,
                    analyticsLocation: f
                })
            }

            function o() {
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

            function o(e, t, i) {
                var n;
                let {
                    applicationId: o
                } = i, s = null !== (n = r[o]) && void 0 !== n ? n : {};
                if (s[t] = e, r[o] = s, !__OVERLAY__ && e === u.ActivityActionStates.FAILED) {
                    null != d[o] && d[o].stop();
                    let e = new l.Timeout;
                    e.start(12e4, () => a.default.dispatch({
                        type: "ACTIVITY_LAUNCH_FAIL",
                        applicationId: o,
                        activityType: t
                    })), d[o] = e
                }
            }

            function s(e) {
                return o(u.ActivityActionStates.COMPLETE, u.ActivityActionTypes.JOIN, e)
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
                ACTIVITY_JOIN_LOADING: e => o(u.ActivityActionStates.LOADING, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN_FAILED: e => o(u.ActivityActionStates.FAILED, u.ActivityActionTypes.JOIN, e),
                ACTIVITY_JOIN: s,
                EMBEDDED_ACTIVITY_CLOSE: s,
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
//# sourceMappingURL=47146.b01c43ba0861b74dc42b.js.map