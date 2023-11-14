(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37580"], {
        260365: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var n = i("872717"),
                a = i("913144"),
                l = i("716241"),
                r = i("884351"),
                d = i("42203"),
                u = i("450911"),
                c = i("819689"),
                o = i("49111"),
                s = {
                    updateActivity(t) {
                        let {
                            applicationId: e,
                            distributor: i,
                            shareActivity: l,
                            token: r = null,
                            duration: d = 0,
                            closed: u = !1
                        } = t;
                        a.default.wait(() => a.default.dispatch({
                            type: "ACTIVITY_UPDATE_START",
                            applicationId: e,
                            duration: d,
                            distributor: i
                        })), n.default.post({
                            url: o.Endpoints.ACTIVITIES,
                            body: {
                                application_id: e,
                                token: r,
                                duration: d,
                                share_activity: l,
                                distributor: i,
                                closed: u
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    token: n
                                }
                            } = t;
                            a.default.dispatch({
                                type: "ACTIVITY_UPDATE_SUCCESS",
                                applicationId: e,
                                token: n,
                                duration: d,
                                distributor: i
                            })
                        }).catch(() => {
                            a.default.dispatch({
                                type: "ACTIVITY_UPDATE_FAIL",
                                applicationId: e
                            })
                        })
                    },
                    sendActivityInvite(t) {
                        let {
                            channelId: e,
                            type: i,
                            activity: n,
                            content: a,
                            location: u
                        } = t, s = d.default.getChannel(e);
                        if (null == s) return Promise.resolve(null);
                        let E = r.default.parse(s, null != a ? a : "");
                        return c.default.sendMessage(s.id, E, !1, {
                            activityAction: {
                                type: i,
                                activity: n
                            }
                        }).then(t => (l.default.trackWithMetadata(o.AnalyticEvents.INVITE_SENT, {
                            location: u,
                            invite_type: n.type === o.ActivityTypes.LISTENING ? o.LoggingInviteTypes.SPOTIFY : o.LoggingInviteTypes.APPLICATION,
                            application_id: n.application_id,
                            guild_id: s.getGuildId(),
                            channel_id: s.id,
                            message_id: null != t ? t.body.id : null
                        }), Promise.resolve(s)), t => Promise.reject(t))
                    },
                    sendActivityInviteUser(t) {
                        let {
                            userId: e,
                            type: i,
                            activity: n,
                            content: a,
                            location: l
                        } = t;
                        return u.default.ensurePrivateChannel(e).then(t => this.sendActivityInvite({
                            channelId: t,
                            type: i,
                            activity: n,
                            content: a,
                            location: l
                        }))
                    },
                    async getJoinSecret(t, e, i, a, l) {
                        let r = {};
                        null != a && (r.channel_id = a), null != l && (r.message_id = l);
                        let d = await n.default.get({
                            url: o.Endpoints.USER_ACTIVITY_JOIN(t, e, i),
                            retries: 3,
                            query: r
                        });
                        return d.body.secret
                    }
                }
        },
        823411: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return m
                }
            }), i("222007"), i("70102");
            var n = i("522632"),
                a = i("872717"),
                l = i("913144"),
                r = i("550766"),
                d = i("299285"),
                u = i("760850"),
                c = i("915639"),
                o = i("86878"),
                s = i("546463"),
                E = i("686470"),
                p = i("535974"),
                f = i("568734"),
                _ = i("269180"),
                A = i("773336"),
                I = i("260365"),
                T = i("438931"),
                h = i("215082"),
                C = i("49111"),
                y = i("954016"),
                v = i("782340");

            function D(t) {
                let {
                    applicationId: e,
                    secret: i,
                    channelId: n,
                    intent: a = y.ActivityIntent.PLAY,
                    embedded: r = !1,
                    analyticsLocations: d = []
                } = t;
                g(e, null, n, r, d).then(() => _.default.waitConnected(e)).then(() => Promise.race([_.default.waitSubscribed(e, C.RPCEvents.ACTIVITY_JOIN)])).then(() => {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: i,
                        intent: a,
                        embedded: r
                    })
                }).catch(() => l.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: e
                }))
            }

            function g(t, e, i) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (u) return null == i ? Promise.reject(Error("Invalid channel ID")) : ((0, r.startEmbeddedActivity)(i, {
                    application_id: t
                }, s), Promise.resolve());
                if (o.default.isConnected(t)) return Promise.resolve();
                let f = null;
                if (null == e) {
                    let i = E.default.getActiveLibraryApplication(t);
                    e = null != i ? i.branchId : t
                }
                if (p.default.isLaunchable(t, e)) {
                    var A;
                    let i = p.default.getState(t, e),
                        l = E.default.getActiveLaunchOptionId(t, e);
                    if (null == i) throw Error("Missing dispatch game when launching");
                    let r = E.default.getLibraryApplication(t, e);
                    if (null == r) throw Error("Missing library application when launching");
                    f = (A = t, a.default.post({
                        url: C.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: A,
                            response_type: "token",
                            scope: [C.OAuth2Scopes.IDENTIFY].join(" ")
                        },
                        retries: 3,
                        body: {
                            authorize: !0
                        },
                        oldFormErrors: !0
                    }).then(t => {
                        let e = t.body.location.split(/#|\?/),
                            i = n.parse(e[e.length - 1]);
                        if ("invalid_request" === i.error) return null;
                        if (null != i.error) {
                            var a;
                            throw Error("OAuth2 Error: ".concat(i.error, ": ").concat(null !== (a = i.error_description) && void 0 !== a ? a : "unknown error"))
                        }
                        return i.access_token
                    }, t => {
                        if (404 === t.status) return null;
                        throw t
                    })).then(t => _.default.launchDispatchApplication(i, t, c.default.locale, r.getBranchName(), l))
                } else {
                    let e = d.default.getApplication(t);
                    f = null != e ? _.default.launch(e) : _.default.launchGame(t)
                }
                let I = Error("game not found");
                return null != f ? (l.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                    applicationId: t,
                    branchId: e
                }), l.default.dispatch({
                    type: "GAME_LAUNCH_START",
                    applicationId: t
                }), f.then(e => {
                    l.default.dispatch({
                        type: "GAME_LAUNCH_SUCCESS",
                        applicationId: t,
                        pids: e
                    })
                }).catch(e => {
                    h.default.show(C.NoticeTypes.LAUNCH_GAME_FAILURE, v.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
                        type: "GAME_LAUNCH_FAIL",
                        applicationId: t,
                        error: I
                    })
                })) : (l.default.dispatch({
                    type: "GAME_LAUNCH_FAIL",
                    applicationId: t,
                    error: I
                }), Promise.reject(I))
            }
            var m = {
                addGame(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_ADD_OVERRIDE",
                        pid: t
                    })
                },
                toggleOverlay(t) {
                    let e = s.default.getGameByName(t.name);
                    if (null != e) {
                        let t = E.default.getActiveLibraryApplication(e.id);
                        if (null != t) {
                            let e = f.toggleFlag(t.getFlags(), C.LibraryApplicationFlags.OVERLAY_DISABLED);
                            T.updateFlags(t.id, t.branchId, e);
                            return
                        }
                    }
                    l.default.dispatch({
                        type: "RUNNING_GAME_TOGGLE_OVERLAY",
                        game: t
                    })
                },
                toggleDetection(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_TOGGLE_DETECTION",
                        game: t
                    })
                },
                editName(t, e) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_EDIT_NAME",
                        game: t,
                        newName: e
                    })
                },
                identifyGame: (t, e) => (0, u.default)().then(e => new Promise((i, n) => {
                    if (null == e) {
                        n(Error("Game utils module not loaded"));
                        return
                    }
                    e.identifyGame(t, (e, a) => {
                        if (0 !== e) {
                            n(Error("Error ".concat(e, " when fetching info on ").concat(t)));
                            return
                        }
                        if (null == a.icon || "" === a.icon || null == a.name || "" === a.name) {
                            n(Error("Did not find data on ".concat(t)));
                            return
                        }
                        l.default.dispatch({
                            type: "GAME_ICON_UPDATE",
                            gameName: a.name,
                            icon: "data:image/png;base64,".concat(a.icon)
                        }), i(a)
                    })
                })),
                getDetectableGames() {
                    !s.default.fetching && null == s.default.lastFetched && l.default.wait(() => {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), a.default.get({
                            url: C.Endpoints.APPLICATIONS_DETECTABLE,
                            headers: {
                                "If-None-Match": s.default.detectableGamesEtag
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: e,
                                headers: {
                                    etag: i
                                }
                            } = t;
                            l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: e,
                                etag: i
                            })
                        }, t => {
                            let {
                                status: e
                            } = t;
                            304 === e ? l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: [],
                                etag: s.default.detectableGamesEtag
                            }) : l.default.dispatch({
                                type: "GAMES_DATABASE_FETCH_FAIL"
                            })
                        })
                    })
                },
                reportUnverifiedGame(t) {
                    let {
                        name: e,
                        iconHash: i,
                        publisher: n,
                        distributor: r,
                        sku: d,
                        executableName: c
                    } = t, o = (0, u.cleanExecutablePath)(c);
                    if (null != o) {
                        var s, E;
                        a.default.post({
                            url: C.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: e,
                                os: (0, A.getPlatformName)(),
                                icon: i,
                                distributor_application: (s = r, E = d, null == s || "" === s ? null : {
                                    distributor: s,
                                    sku: E
                                }),
                                executable: o,
                                publisher: n,
                                report_version: 3
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    name: e,
                                    hash: i,
                                    missing_data: n
                                }
                            } = t;
                            l.default.dispatch({
                                type: "UNVERIFIED_GAME_UPDATE",
                                name: e,
                                hash: i,
                                missingData: n
                            })
                        })
                    }
                },
                uploadIcon(t, e, i) {
                    a.default.post({
                        url: C.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
                        body: {
                            application_name: t,
                            application_hash: e,
                            icon: i
                        },
                        retries: 1,
                        oldFormErrors: !0
                    })
                },
                deleteEntry(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_DELETE_ENTRY",
                        game: t
                    })
                },
                launch: g,
                async join(t) {
                    let {
                        userId: e,
                        sessionId: i,
                        applicationId: n,
                        channelId: a,
                        messageId: r,
                        intent: d = y.ActivityIntent.PLAY,
                        embedded: u = !1
                    } = t;
                    if (__OVERLAY__) return l.default.dispatch({
                        type: "OVERLAY_JOIN_GAME",
                        userId: e,
                        sessionId: i,
                        applicationId: n,
                        channelId: a,
                        messageId: r
                    }), Promise.resolve(!0);
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN_LOADING",
                        applicationId: n
                    });
                    try {
                        let t = await I.default.getJoinSecret(e, i, n, a, r);
                        return D({
                            applicationId: n,
                            secret: t,
                            channelId: a,
                            intent: d,
                            embedded: u
                        }), !0
                    } catch (t) {
                        return l.default.dispatch({
                            type: "ACTIVITY_JOIN_FAILED",
                            applicationId: n
                        }), !1
                    }
                },
                joinWithSecret: D
            }
        },
        438931: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                updateFlags: function() {
                    return r
                }
            });
            var n = i("872717"),
                a = i("913144"),
                l = i("49111");

            function r(t, e, i) {
                return a.default.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: i
                }), n.default.patch({
                    url: l.Endpoints.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: i
                    },
                    oldFormErrors: !0
                }).then(t => {
                    a.default.dispatch({
                        type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                        libraryApplication: t.body
                    })
                })
            }
        },
        215082: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            });
            var n = i("913144"),
                a = {
                    show(t, e, i, a, l) {
                        n.default.dispatch({
                            type: "NOTICE_SHOW",
                            notice: {
                                id: l,
                                type: t,
                                message: e,
                                buttonText: i,
                                callback: a
                            }
                        })
                    },
                    dismiss(t) {
                        n.default.dispatch({
                            type: "NOTICE_DISMISS",
                            ...t
                        })
                    }
                }
        },
        447789: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                ActivitiesInGdmExperiment: function() {
                    return a
                },
                useIsActivitiesInGdmEnabled: function() {
                    return l
                },
                isActivitiesInGdmEnabled: function() {
                    return r
                }
            });
            var n = i("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-01_activities_in_gdm",
                label: "Activities in GDM",
                defaultConfig: {
                    isActivitiesInGdmEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable Activities in GDMs",
                    config: {
                        isActivitiesInGdmEnabled: !0
                    }
                }]
            });

            function l() {
                let {
                    isActivitiesInGdmEnabled: t
                } = a.useExperiment({
                    location: "c7edd6_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }

            function r() {
                let {
                    isActivitiesInGdmEnabled: t
                } = a.getCurrentConfig({
                    location: "c7edd6_2"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }
        },
        427953: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                ActivitiesInTextExperiment: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var n = i("446674"),
                a = i("862205"),
                l = i("42203"),
                r = i("954016"),
                d = i("49111");
            let u = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_activities_in_text",
                label: "Activities in Text",
                defaultConfig: {
                    isActivitiesInTextEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable Activities in text channels",
                    config: {
                        isActivitiesInTextEnabled: !0
                    }
                }]
            });

            function c(t) {
                var e;
                let i = (0, n.useStateFromStores)([l.default], () => l.default.getChannel(t)),
                    {
                        isActivitiesInTextEnabled: a
                    } = u.useExperiment({
                        location: "useIsActivitiesInTextEnabled"
                    }, {
                        autoTrackExposure: !1
                    });
                return a && r.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(null !== (e = null == i ? void 0 : i.type) && void 0 !== e ? e : d.ChannelTypes.UNKNOWN)
            }
        },
        550766: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                startEmbeddedActivity: function() {
                    return m
                },
                launchEmbeddedActivity: function() {
                    return S
                },
                stopEmbeddedActivity: function() {
                    return N
                },
                disconnectEmbeddedActivity: function() {
                    return L
                },
                fetchDeveloperApplications: function() {
                    return P
                },
                uploadImageAttachment: function() {
                    return b
                },
                fetchShelf: function() {
                    return M
                },
                sendEmbeddedActivityInvite: function() {
                    return O
                },
                sendEmbeddedActivityInviteUser: function() {
                    return G
                },
                dismissNewActivityIndicator: function() {
                    return U
                },
                validateTestMode: function() {
                    return V
                },
                updateActivityPanelMode: function() {
                    return Y
                },
                updateFocusedActivityLayout: function() {
                    return H
                }
            }), i("222007");
            var n = i("759843"),
                a = i("872717"),
                l = i("913144"),
                r = i("450911"),
                d = i("255397"),
                u = i("970728"),
                c = i("819689"),
                o = i("599417"),
                s = i("299285"),
                E = i("191145"),
                p = i("653047"),
                f = i("271938"),
                _ = i("42203"),
                A = i("697218"),
                I = i("449008"),
                T = i("840707"),
                h = i("447789"),
                C = i("191225"),
                y = i("458184"),
                v = i("420444"),
                D = i("49111"),
                g = i("91366");

            function m(t, e, i) {
                let n = C.default.getSelfEmbeddedActivityForChannel(t);
                null != n && N({
                    channelId: t,
                    applicationId: n.application_id
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    embeddedActivity: e,
                    analyticsLocations: i
                });
                let {
                    application_id: a
                } = e, r = (0, v.default)(t);
                r ? (d.default.selectParticipant(t, a), d.default.updateLayout(t, D.ChannelLayouts.NO_CHAT)) : (0, y.default)(t)
            }
            async function S(t) {
                var e, i;
                let a = _.default.getChannel(t),
                    r = null !== (e = null == a ? void 0 : a.getGuildId()) && void 0 !== e ? e : null;
                if (null == r && !(null !== (i = null == a ? void 0 : a.isPrivate()) && void 0 !== i && i)) return;
                let d = C.default.getSelfEmbeddedActivityForChannel(t);
                if (null === d) return;
                let u = f.default.getSessionId();
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                        embeddedActivity: d
                    }), await T.default.post({
                        url: D.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, d.application_id),
                        body: {
                            session_id: u,
                            guild_id: null != r ? r : void 0
                        },
                        trackedActionData: {
                            event: n.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                            properties: {
                                guild_id: r,
                                channel_id: t,
                                application_id: d.application_id,
                                session_id: u
                            }
                        },
                        retries: 3,
                        oldFormErrors: !0
                    }), l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS"
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                        guildId: r,
                        applicationId: d.application_id,
                        error: new o.default(e)
                    }), N({
                        channelId: t,
                        applicationId: d.application_id,
                        showFeedback: !1
                    })
                }
            }

            function N(t) {
                var e;
                let {
                    channelId: i,
                    applicationId: n,
                    showFeedback: a = !0
                } = t;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: i,
                    applicationId: n,
                    showFeedback: a
                });
                let r = E.default.getSelectedParticipantId(i),
                    u = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                    c = C.default.getEmbeddedActivitiesForChannel(i).find(t => t.application_id === n);
                null != c && null != u && "" !== u && r === n && d.default.selectParticipant(i, null)
            }

            function L(t, e) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }
            async function P() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await a.default.get({
                            url: D.Endpoints.APPLICATIONS,
                            query: {
                                with_team_applications: !0
                            },
                            oldFormErrors: !0
                        }),
                        e = t.body.map(t => p.default.createFromServer(t));
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                        items: e
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
                    })
                }
            }
            async function b(t, e, i) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let n = await a.default.post({
                        url: D.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
                        query: {
                            channel_id: e
                        },
                        attachments: [{
                            name: "file",
                            file: i
                        }]
                    });
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                        attachment: n.body.attachment
                    }), n.body.attachment
                } catch (t) {
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                    }), new o.default(t)
                }
            }
            let F = (t, e, i) => {
                let {
                    guildId: n
                } = i;
                (n === t || null == n && null == t) && e()
            };
            async function M(t) {
                var e, i, a;
                let {
                    guildId: r,
                    force: d = !1
                } = t, u = C.default.getShelfActivities(r), c = u.map(t => s.default.getApplication(t.application_id)).filter(I.isNotNullish);
                if (!d && !C.default.shouldFetchShelf(r)) {
                    if (null === (e = C.default.getShelfFetchStatus(r)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let i = new Promise(e => {
                                t = F.bind(null, r, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            n = new Promise(t => {
                                e = F.bind(null, r, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
                            });
                        await Promise.race([i, n]), null != t && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t), t = null), null != e && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e), e = null)
                    }
                    return {
                        activityConfigs: u,
                        applications: c
                    }
                }
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                        guildId: r
                    });
                    let t = void 0 !== r && "" !== r;
                    if (!t && !(0, h.isActivitiesInGdmEnabled)()) return {
                        activityConfigs: [],
                        applications: []
                    };
                    let e = t ? {
                            guild_id: r
                        } : void 0,
                        d = await T.default.get({
                            url: D.Endpoints.ACTIVITY_SHELF,
                            query: e,
                            trackedActionData: {
                                event: n.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: r
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }),
                        u = null !== (i = d.body.activities) && void 0 !== i ? i : [],
                        c = null !== (a = d.body.applications) && void 0 !== a ? a : [];
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                        guildId: r,
                        activities: u,
                        applications: c
                    }), c.length > 0 && l.default.dispatch({
                        type: "APPLICATIONS_FETCH_SUCCESS",
                        applications: c
                    }), {
                        activityConfigs: u,
                        applications: c.map(t => p.default.createFromServer(t))
                    }
                } catch (t) {
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                        guildId: r
                    }), {
                        activityConfigs: u,
                        applications: c
                    }
                }
            }
            async function O(t) {
                let {
                    activityChannelId: e,
                    invitedChannelId: i,
                    applicationId: n,
                    location: a
                } = t, l = await u.default.createInvite(e, {
                    target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: n
                }, a);
                null != _.default.getChannel(i) && c.default.sendInvite(i, l.code, a, null)
            }
            async function G(t) {
                let {
                    channelId: e,
                    applicationId: i,
                    userId: n,
                    location: a
                } = t, l = await u.default.createInvite(e, {
                    target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: i
                }, a);
                r.default.ensurePrivateChannel(n).then(t => {
                    null != _.default.getChannel(t) && c.default.sendInvite(t, l.code, a, null)
                })
            }

            function U() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function V(t) {
                let e = D.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await a.default.get({
                        url: e,
                        oldFormErrors: !0
                    }), !0
                } catch (t) {
                    return !1
                }
            }

            function Y(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
                    activityPanelMode: t
                })
            }

            function H(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
                    focusedActivityLayout: t
                })
            }
        },
        458184: function(t, e, i) {
            "use strict";

            function n(t) {}
            i.r(e), i.d(e, {
                default: function() {
                    return n
                }
            })
        },
        420444: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return r
                }
            });
            var n = i("298386"),
                a = i("42203"),
                l = i("427953");

            function r(t) {
                let e = a.default.getChannel(t),
                    i = l.ActivitiesInTextExperiment.getCurrentConfig({
                        location: "isVoiceActivityChannel"
                    }, {
                        autoTrackExposure: !1
                    }).isActivitiesInTextEnabled;
                return null != e && (e.type === n.ChannelTypes.GUILD_VOICE || e.isPrivate() && !i)
            }
        },
        760850: function(t, e, i) {
            "use strict";
            let n;
            i.r(e), i.d(e, {
                cleanExecutablePath: function() {
                    return p
                },
                default: function() {
                    return f
                }
            }), i("781738"), i("424973");
            var a = i("917351"),
                l = i.n(a),
                r = i("49671"),
                d = i("605250"),
                u = i("773336"),
                c = i("50885");
            let o = [];

            function s(t) {
                return t = t.toLowerCase(), (0, u.isWindows)() && (t = (t = t.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), t
            }

            function E(t) {
                null != t && "" !== t && (!(t = s(t)).endsWith("/") && (t += "/"), o.push(t))
            }

            function p(t) {
                t = s(t);
                let e = !1;
                return (o.forEach(i => {
                    !e && t.startsWith(i) && (t = t.substr(i.length), e = !0)
                }), e) ? t = t.includes("dosbox.exe") ? t.split("/").slice(-3).join("/") : t.split("/").slice(-2).join("/") : null
            }
            async function f() {
                if (null != n) return n;
                try {
                    await c.default.ensureModule("discord_game_utils"), n = await c.default.requireModule("discord_game_utils")
                } catch (t) {
                    new(0, d.default)("GamesActionCreators").error("could not load discord_game_utils", t)
                }
                if ((0, u.isWindows)()) {
                    let t = r.default.process.env;
                    E(t.LOCALAPPDATA), E(t["PROGRAMFILES(X86)"]), E(t.PROGRAMFILES), E(t.PROGRAMW6432), E(t.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")
                }
                let t = r.default.remoteApp.getPath;
                return E(await t("home")), E(await t("appData")), E(await t("desktop")), E(await t("documents")), E(await t("downloads")), (o = l.uniq(o)).sort((t, e) => e.length - t.length), n
            }
        }
    }
]);
//# sourceMappingURL=4d7483011eca542b5520.js.map