(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21494"], {
        84460: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("498225"),
                l = i("913144"),
                r = i("568734"),
                d = i("49111");

            function a() {
                return {
                    isEnabled: !1,
                    lastUsedObject: {},
                    useActivityUrlOverride: !1,
                    activityUrlOverride: null,
                    filter: ""
                }
            }
            let u = a(),
                s = null,
                o = [];
            class c extends n.default.PersistedStore {
                initialize(e) {
                    u = {
                        ...a(),
                        ...null != e ? e : {}
                    }
                }
                getState() {
                    return u
                }
                getIsEnabled() {
                    return u.isEnabled
                }
                getLastUsedObject() {
                    return u.lastUsedObject
                }
                getUseActivityUrlOverride() {
                    return u.useActivityUrlOverride
                }
                getActivityUrlOverride() {
                    return u.activityUrlOverride
                }
                getFetchState() {
                    return s
                }
                getFilter() {
                    return u.filter
                }
                getDeveloperShelfItems() {
                    return o
                }
                isApplicationInDevShelf(e) {
                    return null != o.find(t => t.id === e)
                }
                inDevModeForApplication(e) {
                    return u.isEnabled && this.isApplicationInDevShelf(e)
                }
            }
            c.displayName = "DeveloperActivityShelfStore", c.persistKey = "DeveloperActivityShelfStore";
            var E = new c(l.default, {
                LOGOUT: function() {
                    u = a(), s = null, o = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    u.isEnabled = !u.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    u.useActivityUrlOverride = !u.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    let {
                        activityUrlOverride: t
                    } = e;
                    u.activityUrlOverride = t
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    let {
                        applicationId: t,
                        timestamp: i
                    } = e;
                    if (null == o.find(e => e.id === t)) return !1;
                    u.lastUsedObject[t] = i
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
                    s = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    s = "loaded", o = t.filter(e => null != e.flags && (0, r.hasFlag)(e.flags, d.ApplicationFlags.EMBEDDED))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    let {
                        type: t
                    } = e;
                    s = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    let {
                        filter: t
                    } = e;
                    u.filter = t
                }
            })
        },
        191225: function(e, t, i) {
            "use strict";
            let n;
            i.r(t), i.d(t, {
                NO_ACTIVITIES: function() {
                    return f
                },
                default: function() {
                    return H
                }
            });
            var l = i("498225"),
                r = i("913144"),
                d = i("798609"),
                a = i("271938"),
                u = i("42203"),
                s = i("957255"),
                o = i("18494"),
                c = i("697218"),
                E = i("773336"),
                A = i("711562"),
                v = i("334368"),
                _ = i("272505"),
                p = i("49111"),
                T = i("782340");
            let I = {
                    seenActivities: new Set,
                    seenNewActivities: {},
                    seenUpdatedActivities: {},
                    shouldShowNewActivityIndicator: !1,
                    usersHavePlayedByApp: new Map
                },
                f = [],
                D = new Map,
                S = new Map,
                g = new Map,
                y = !1,
                h = new Map,
                O = new Map,
                C = new Map,
                M = new Map,
                L = new Map,
                F = new Map,
                N = new Map,
                P = new Set([]);
            let w = _.ActivityPanelModes.ACTION_BAR;

            function m(e) {
                return null != e ? e : "0"
            }

            function U(e, t, i, n) {
                var l, r;
                let d = (0, A.default)(i.application_id);
                if (null == d) return;
                let o = u.default.getBasicChannel(t),
                    c = null != o && s.default.canBasicChannel(p.BasicPermissions.CONNECT, o) || (null == o ? void 0 : o.type) === p.ChannelTypes.DM || (null == o ? void 0 : o.type) === p.ChannelTypes.GROUP_DM;
                if (function(e, t) {
                        var i;
                        I.usersHavePlayedByApp.set(e, new Set([...null !== (i = I.usersHavePlayedByApp.get(e)) && void 0 !== i ? i : [], ...t.map(e => e.user_id)]))
                    }(i.application_id, n), !c) return;
                let E = function(e, t, i, n, l) {
                        var r, d;
                        let a = new Map;
                        return t.forEach(e => {
                            a.set(e.user_id, e)
                        }), {
                            ...e,
                            name: null !== (r = e.name) && void 0 !== r ? r : T.default.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                            type: null !== (d = e.type) && void 0 !== d ? d : p.ActivityTypes.PLAYING,
                            url: i,
                            connections: a,
                            guildId: n,
                            channelId: l
                        }
                    }(i, n, d, e, t),
                    v = a.default.getId(),
                    _ = D.get(E.application_id);
                n.some(e => e.user_id === v) && null != _ && D.set(_.application_id, {
                    ..._,
                    ...E
                });
                let f = null !== (l = g.get(t)) && void 0 !== l ? l : [],
                    y = f.filter(e => {
                        let {
                            application_id: t
                        } = e;
                        return t !== i.application_id
                    }),
                    h = m(e),
                    O = null !== (r = S.get(h)) && void 0 !== r ? r : [],
                    C = O.filter(e => !(e.application_id === i.application_id && e.channelId === t));
                0 !== n.length && (y.push(E), C.push(E)), g.set(t, y), S.set(h, C)
            }

            function V(e) {
                let t = e.embedded_activities;
                t.forEach(t => {
                    let {
                        channel_id: i,
                        embedded_activity: n,
                        connections: l
                    } = t;
                    U(e.id, i, n, l)
                })
            }

            function R() {
                y = !1
            }

            function b(e, t) {
                return "".concat(e, ":").concat(t)
            }
            class B extends l.default.PersistedStore {
                initialize(e) {
                    var t;
                    let i = new Map;
                    Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(e => {
                        if (Array.isArray(e)) {
                            let [t, n] = e;
                            "string" == typeof t && Array.isArray(n) && i.set(t, new Set(n))
                        }
                    }));
                    let n = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []);
                    null != e && (I = {
                        ...e,
                        seenActivities: n,
                        usersHavePlayedByApp: i
                    })
                }
                getState() {
                    return I
                }
                getSelfEmbeddedActivityForChannel(e) {
                    var t;
                    return null !== (t = Array.from(D.values()).find(t => {
                        let {
                            channelId: i
                        } = t;
                        return e === i
                    })) && void 0 !== t ? t : null
                }
                getSelfEmbeddedActivities() {
                    return D
                }
                getEmbeddedActivitiesForGuild(e) {
                    var t;
                    return null !== (t = S.get(e)) && void 0 !== t ? t : f
                }
                getEmbeddedActivitiesForChannel(e) {
                    var t;
                    return null !== (t = g.get(e)) && void 0 !== t ? t : f
                }
                getEmbeddedActivitiesByChannel() {
                    return g
                }
                getEmbeddedActivityDurationMs(e, t) {
                    let i = N.get(b(e, t));
                    return null == i ? null : Date.now() - i
                }
                isLaunchingActivity() {
                    return y
                }
                getShelfActivities(e) {
                    var t;
                    let i = m(e);
                    return null !== (t = h.get(i)) && void 0 !== t ? t : []
                }
                getShelfFetchStatus(e) {
                    let t = m(e);
                    return O.get(t)
                }
                shouldFetchShelf(e) {
                    var t, i;
                    let n = m(e),
                        l = null !== (t = O.get(n)) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        r = Date.now(),
                        d = r - (null !== (i = null == l ? void 0 : l.lastFetchTimestampMs) && void 0 !== i ? i : 0) > 216e5;
                    return !(null == l ? void 0 : l.isFetching) && d
                }
                getOrientationLockStateForApp(e) {
                    var t;
                    return null !== (t = C.get(e)) && void 0 !== t ? t : null
                }
                getPipOrientationLockStateForApp(e) {
                    var t;
                    return null !== (t = M.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
                }
                getGridOrientationLockStateForApp(e) {
                    var t, i;
                    return null !== (i = null !== (t = L.get(e)) && void 0 !== t ? t : M.get(e)) && void 0 !== i ? i : this.getOrientationLockStateForApp(e)
                }
                getLayoutModeForApp(e) {
                    return F.get(e)
                }
                getDismissedEmbeddedActivityMessageKeys() {
                    return Array.from(P)
                }
                getUsersHavePlayedByApp(e) {
                    var t;
                    return [...null !== (t = I.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
                }
                getConnectedActivityChannelId() {
                    return n
                }
                getActivityPanelMode() {
                    return w
                }
                getCurrentEmbeddedActivity() {
                    var e;
                    let t = this.getConnectedActivityChannelId();
                    if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
                }
            }
            B.displayName = "EmbeddedActivitiesStore", B.persistKey = "EmbeddedActivities", B.migrations = [e => ({
                ...e,
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1
            }), e => (delete e.seenFeaturedActivities, {
                ...e,
                seenActivities: []
            }), e => ({
                ...e
            }), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
                ...e
            }), e => {
                var t;
                let i = new Set(null !== (t = e.seenActivities) && void 0 !== t ? t : []);
                return {
                    ...e,
                    seenActivities: i,
                    seenNewActivities: {},
                    seenUpdatedActivities: {}
                }
            }];
            let Y = new B(r.default, {
                ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
                    let {
                        applicationId: t,
                        layoutMode: i
                    } = e;
                    F.set(t, i)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        guilds: t
                    } = e;
                    g.clear(), S.clear(), t.forEach(e => V(e))
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    V(t)
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t,
                        embeddedActivities: i
                    } = e;
                    ! function(e, t) {
                        t.forEach(e => {
                            let {
                                channel_id: t,
                                embedded_activity: i,
                                connections: n
                            } = e;
                            U(null, t, i, n)
                        })
                    }(0, i)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    g.set(t.id, []);
                    let i = t.guild_id;
                    if (null != i) {
                        var n;
                        let e = m(i),
                            l = null !== (n = S.get(e)) && void 0 !== n ? n : [],
                            r = l.filter(e => e.channelId !== t.id);
                        S.set(e, r)
                    }
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    let {
                        embeddedActivity: t
                    } = e;
                    y = !0, w = t.channelId === o.default.getChannelId() ? _.ActivityPanelModes.PANEL : _.ActivityPanelModes.PIP
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: R,
                EMBEDDED_ACTIVITY_LAUNCH_FAIL: R,
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    var t, i, l;
                    let {
                        channelId: r,
                        embeddedActivity: d
                    } = e, {
                        application_id: s
                    } = d, o = (0, A.default)(s), E = a.default.getSessionId();
                    if (null == o || null == E || (null === (t = D.get(s)) || void 0 === t ? void 0 : t.channelId) === r) return !1;
                    let v = u.default.getChannel(r),
                        _ = null == v ? void 0 : v.getGuildId(),
                        I = c.default.getCurrentUser();
                    if (null == _ && !(null !== (i = null == v ? void 0 : v.isPrivate()) && void 0 !== i && i) || null == I) return !1;
                    n = r;
                    let f = new Map,
                        S = I.id;
                    f.set(S, {
                        user_id: S
                    }), D.set(s, {
                        guildId: _,
                        channelId: r,
                        application_id: s,
                        name: null !== (l = d.name) && void 0 !== l ? l : T.default.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                        url: o,
                        type: p.ActivityTypes.PLAYING,
                        connections: f,
                        connectedSince: Date.now()
                    }), N.set(b(r, s), Date.now())
                },
                EMBEDDED_ACTIVITY_CLOSE: function(e) {
                    let {
                        applicationId: t
                    } = e, i = D.get(t);
                    D.delete(t), (null == i ? void 0 : i.channelId) === n && (n = void 0)
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: i,
                        embeddedActivity: n,
                        connections: l
                    } = e;
                    U(t, i, n, l)
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t, i;
                    let {
                        activity: n
                    } = e;
                    if (null == n) return !1;
                    let l = D.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
                    if (null == l) return !1;
                    D.set(l.application_id, {
                        ...l,
                        type: null !== (i = n.type) && void 0 !== i ? i : l.type,
                        secrets: n.secrets
                    })
                },
                EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
                    let {
                        applicationId: t,
                        config: i
                    } = e, n = D.get(t);
                    null != n && D.set(n.application_id, {
                        ...n,
                        config: i
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
                    let {
                        guildId: t
                    } = e, i = m(t), n = O.get(i);
                    O.set(i, {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        activities: i
                    } = e, n = m(t);
                    h.set(n, i);
                    let l = Date.now();
                    ! function(e) {
                        let {
                            activities: t,
                            now: i
                        } = e;
                        t.forEach(e => {
                            let t = e.application_id,
                                n = e.client_platform_config[(0, v.default)((0, E.getOS)())];
                            if (!I.seenActivities.has(t) && (I.shouldShowNewActivityIndicator = !0, I.seenActivities.add(t)), null == n.label_until) return;
                            let l = new Date(n.label_until).getTime();
                            if (l < i) return;
                            let r = I.seenNewActivities[t],
                                a = Object.hasOwn(I.seenNewActivities, t),
                                u = new Date(r).getTime() < l;
                            n.label_type === d.EmbeddedActivityLabelTypes.NEW && (!a || u) && (I.shouldShowNewActivityIndicator = !0, I.seenNewActivities[t] = n.label_until);
                            let s = I.seenUpdatedActivities[t],
                                o = Object.hasOwn(I.seenUpdatedActivities, t),
                                c = new Date(s).getTime() < l;
                            n.label_type === d.EmbeddedActivityLabelTypes.UPDATED && (!o || c) && (I.shouldShowNewActivityIndicator = !0, I.seenUpdatedActivities[t] = n.label_until)
                        })
                    }({
                        activities: i,
                        now: l
                    }), O.set(n, {
                        isFetching: !1,
                        lastFetchTimestampMs: l
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, i = m(t), n = O.get(i);
                    O.set(i, {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
                    I.shouldShowNewActivityIndicator = !1
                },
                EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
                    let {
                        applicationId: t,
                        lockState: i,
                        pictureInPictureLockState: n,
                        gridLockState: l
                    } = e;
                    null == i ? C.delete(t) : C.set(t, i), null === n ? M.delete(t) : void 0 !== n && M.set(t, n), null === l ? L.delete(t) : void 0 !== l && L.set(t, l)
                },
                EMBEDDED_ACTIVITY_DISMISS_MESSAGE: function(e) {
                    let {
                        embeddedActivityKey: t
                    } = e;
                    P.add(t)
                },
                EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
                    let {
                        activityPanelMode: t
                    } = e;
                    w = t
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    n !== t && w === _.ActivityPanelModes.PANEL && (w = _.ActivityPanelModes.PIP)
                }
            });
            var H = Y
        },
        711562: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("167726"),
                l = i("84460");

            function r(e) {
                let t = l.default.getState();
                return t.isEnabled && t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : n.default.inTestModeForEmbeddedApplication(e) ? n.default.testModeOriginURL : function(e) {
                    let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
                    return null == t ? null : "https://".concat(e, ".").concat(t)
                }(e)
            }
        },
        272505: function(e, t, i) {
            "use strict";
            var n, l;
            i.r(t), i.d(t, {
                ActivityPanelModes: function() {
                    return n
                }
            }), (l = n || (n = {})).ACTION_BAR = "action_bar", l.PANEL = "panel", l.PIP = "pip"
        },
        334368: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("798609");

            function l(e) {
                switch (e) {
                    case "android":
                        return n.EmbeddedActivitySupportedPlatforms.ANDROID;
                    case "ios":
                        return n.EmbeddedActivitySupportedPlatforms.IOS;
                    default:
                        return n.EmbeddedActivitySupportedPlatforms.WEB
                }
            }
        },
        167726: function(e, t, i) {
            "use strict";
            let n, l, r;
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var d = i("498225"),
                a = i("913144"),
                u = i("737292"),
                s = i("845579"),
                o = i("374363"),
                c = i("686470");
            let E = {
                    applicationId: null,
                    originURL: null
                },
                A = E,
                v = new Set,
                _ = !1;

            function p() {
                r = null
            }

            function T() {
                n = null, l = null, v = new Set, A.applicationId = null, A.originURL = null, p()
            }
            class I extends d.default.PersistedStore {
                initialize(e) {
                    n = (A = {
                        ...null != e ? e : E
                    }).applicationId, l = A.originURL, this.waitFor(o.default, u.default), this.syncWith([o.default, u.default], () => !0), c.default.whenInitialized(() => {
                        _ = !0
                    })
                }
                inTestModeForApplication(e) {
                    return n === e
                }
                inTestModeForEmbeddedApplication(e) {
                    return n === e && null != l
                }
                shouldDisplayTestMode(e) {
                    return s.DeveloperMode.getSetting() && this.inTestModeForApplication(e)
                }
                getState() {
                    return A
                }
                get isTestMode() {
                    return null != n
                }
                get isFetchingAuthorization() {
                    return v.size > 0
                }
                get testModeEmbeddedApplicationId() {
                    return null != l ? n : null
                }
                get testModeApplicationId() {
                    return n
                }
                get testModeOriginURL() {
                    return l
                }
                get error() {
                    return r
                }
                whenInitialized(e) {
                    this.addConditionalChangeListener(() => {
                        if (_) return setImmediate(e), !1
                    })
                }
            }
            I.displayName = "TestModeStore", I.persistKey = "TestModeStore";
            var f = new I(a.default, {
                DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    v.add(t), r = null
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        originURL: i
                    } = e;
                    n = t, l = i, v.delete(t), r = null, A.applicationId = t, A.originURL = i
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
                    let {
                        applicationId: t,
                        error: i
                    } = e;
                    v.delete(t), r = i
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        testModeApplicationId: t
                    } = e;
                    n = t
                },
                DEVELOPER_TEST_MODE_RESET_ERROR: p,
                LOGOUT: T,
                DEVELOPER_TEST_MODE_RESET: T
            })
        }
    }
]);
//# sourceMappingURL=a73d674f617db9126677.js.map