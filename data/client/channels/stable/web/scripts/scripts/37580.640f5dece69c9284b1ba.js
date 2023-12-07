(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37580"], {
        260365: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var a = i("872717"),
                n = i("913144"),
                l = i("716241"),
                d = i("884351"),
                r = i("42203"),
                u = i("450911"),
                c = i("819689"),
                o = i("49111"),
                s = {
                    updateActivity(t) {
                        let {
                            applicationId: e,
                            distributor: i,
                            shareActivity: l,
                            token: d = null,
                            duration: r = 0,
                            closed: u = !1
                        } = t;
                        n.default.wait(() => n.default.dispatch({
                            type: "ACTIVITY_UPDATE_START",
                            applicationId: e,
                            duration: r,
                            distributor: i
                        })), a.default.post({
                            url: o.Endpoints.ACTIVITIES,
                            body: {
                                application_id: e,
                                token: d,
                                duration: r,
                                share_activity: l,
                                distributor: i,
                                closed: u
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    token: a
                                }
                            } = t;
                            n.default.dispatch({
                                type: "ACTIVITY_UPDATE_SUCCESS",
                                applicationId: e,
                                token: a,
                                duration: r,
                                distributor: i
                            })
                        }).catch(() => {
                            n.default.dispatch({
                                type: "ACTIVITY_UPDATE_FAIL",
                                applicationId: e
                            })
                        })
                    },
                    sendActivityInvite(t) {
                        let {
                            channelId: e,
                            type: i,
                            activity: a,
                            content: n,
                            location: u
                        } = t, s = r.default.getChannel(e);
                        if (null == s) return Promise.resolve(null);
                        let E = d.default.parse(s, null != n ? n : "");
                        return c.default.sendMessage(s.id, E, !1, {
                            activityAction: {
                                type: i,
                                activity: a
                            }
                        }).then(t => (l.default.trackWithMetadata(o.AnalyticEvents.INVITE_SENT, {
                            location: u,
                            invite_type: a.type === o.ActivityTypes.LISTENING ? o.LoggingInviteTypes.SPOTIFY : o.LoggingInviteTypes.APPLICATION,
                            application_id: a.application_id,
                            guild_id: s.getGuildId(),
                            channel_id: s.id,
                            message_id: null != t ? t.body.id : null
                        }), Promise.resolve(s)), t => Promise.reject(t))
                    },
                    sendActivityInviteUser(t) {
                        let {
                            userId: e,
                            type: i,
                            activity: a,
                            content: n,
                            location: l
                        } = t;
                        return u.default.ensurePrivateChannel(e).then(t => this.sendActivityInvite({
                            channelId: t,
                            type: i,
                            activity: a,
                            content: n,
                            location: l
                        }))
                    },
                    async getJoinSecret(t, e, i, n, l) {
                        let d = {};
                        null != n && (d.channel_id = n), null != l && (d.message_id = l);
                        let r = await a.default.get({
                            url: o.Endpoints.USER_ACTIVITY_JOIN(t, e, i),
                            retries: 3,
                            query: d
                        });
                        return r.body.secret
                    }
                }
        },
        823411: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return v
                }
            }), i("222007"), i("70102");
            var a = i("522632"),
                n = i("872717"),
                l = i("913144"),
                d = i("550766"),
                r = i("299285"),
                u = i("760850"),
                c = i("915639"),
                o = i("86878"),
                s = i("546463"),
                E = i("686470"),
                p = i("535974"),
                _ = i("568734"),
                A = i("269180"),
                f = i("773336"),
                I = i("260365"),
                T = i("438931"),
                h = i("215082"),
                C = i("49111"),
                y = i("954016"),
                D = i("782340");

            function g(t) {
                let {
                    applicationId: e,
                    secret: i,
                    channelId: a,
                    intent: n = y.ActivityIntent.PLAY,
                    embedded: d = !1,
                    analyticsLocations: r = []
                } = t;
                m(e, null, a, d, r).then(() => A.default.waitConnected(e)).then(() => Promise.race([A.default.waitSubscribed(e, C.RPCEvents.ACTIVITY_JOIN)])).then(() => {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: i,
                        intent: n,
                        embedded: d
                    })
                }).catch(() => l.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: e
                }))
            }

            function m(t, e, i) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (u) return null == i ? Promise.reject(Error("Invalid channel ID")) : ((0, d.startEmbeddedActivity)(i, {
                    application_id: t
                }, s), Promise.resolve());
                if (o.default.isConnected(t)) return Promise.resolve();
                let _ = null;
                if (null == e) {
                    let i = E.default.getActiveLibraryApplication(t);
                    e = null != i ? i.branchId : t
                }
                if (p.default.isLaunchable(t, e)) {
                    var f;
                    let i = p.default.getState(t, e),
                        l = E.default.getActiveLaunchOptionId(t, e);
                    if (null == i) throw Error("Missing dispatch game when launching");
                    let d = E.default.getLibraryApplication(t, e);
                    if (null == d) throw Error("Missing library application when launching");
                    _ = (f = t, n.default.post({
                        url: C.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: f,
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
                            i = a.parse(e[e.length - 1]);
                        if ("invalid_request" === i.error) return null;
                        if (null != i.error) {
                            var n;
                            throw Error("OAuth2 Error: ".concat(i.error, ": ").concat(null !== (n = i.error_description) && void 0 !== n ? n : "unknown error"))
                        }
                        return i.access_token
                    }, t => {
                        if (404 === t.status) return null;
                        throw t
                    })).then(t => A.default.launchDispatchApplication(i, t, c.default.locale, d.getBranchName(), l))
                } else {
                    let e = r.default.getApplication(t);
                    _ = null != e ? A.default.launch(e) : A.default.launchGame(t)
                }
                let I = Error("game not found");
                return null != _ ? (l.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                    applicationId: t,
                    branchId: e
                }), l.default.dispatch({
                    type: "GAME_LAUNCH_START",
                    applicationId: t
                }), _.then(e => {
                    l.default.dispatch({
                        type: "GAME_LAUNCH_SUCCESS",
                        applicationId: t,
                        pids: e
                    })
                }).catch(e => {
                    h.default.show(C.NoticeTypes.LAUNCH_GAME_FAILURE, D.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
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
            var v = {
                addGame(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_ADD_OVERRIDE",
                        pid: t
                    })
                },
                toggleOverlay(t, e) {
                    let i = s.default.getGameByName(t.name);
                    if (null != i) {
                        let t = E.default.getActiveLibraryApplication(i.id);
                        if (null != t) {
                            let e = _.toggleFlag(t.getFlags(), C.LibraryApplicationFlags.OVERLAY_DISABLED);
                            T.updateFlags(t.id, t.branchId, e);
                            return
                        }
                    }
                    l.default.dispatch({
                        type: "RUNNING_GAME_TOGGLE_OVERLAY",
                        game: t,
                        newEnabledValue: e
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
                identifyGame: (t, e) => (0, u.default)().then(e => new Promise((i, a) => {
                    if (null == e) {
                        a(Error("Game utils module not loaded"));
                        return
                    }
                    e.identifyGame(t, (e, n) => {
                        if (0 !== e) {
                            a(Error("Error ".concat(e, " when fetching info on ").concat(t)));
                            return
                        }
                        if (null == n.icon || "" === n.icon || null == n.name || "" === n.name) {
                            a(Error("Did not find data on ".concat(t)));
                            return
                        }
                        l.default.dispatch({
                            type: "GAME_ICON_UPDATE",
                            gameName: n.name,
                            icon: "data:image/png;base64,".concat(n.icon)
                        }), i(n)
                    })
                })),
                getDetectableGames() {
                    !s.default.fetching && null == s.default.lastFetched && l.default.wait(() => {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), n.default.get({
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
                        publisher: a,
                        distributor: d,
                        sku: r,
                        executableName: c
                    } = t, o = (0, u.cleanExecutablePath)(c);
                    if (null != o) {
                        var s, E;
                        n.default.post({
                            url: C.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: e,
                                os: (0, f.getPlatformName)(),
                                icon: i,
                                distributor_application: (s = d, E = r, null == s || "" === s ? null : {
                                    distributor: s,
                                    sku: E
                                }),
                                executable: o,
                                publisher: a,
                                report_version: 3
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    name: e,
                                    hash: i,
                                    missing_data: a
                                }
                            } = t;
                            l.default.dispatch({
                                type: "UNVERIFIED_GAME_UPDATE",
                                name: e,
                                hash: i,
                                missingData: a
                            })
                        })
                    }
                },
                uploadIcon(t, e, i) {
                    n.default.post({
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
                launch: m,
                async join(t) {
                    let {
                        userId: e,
                        sessionId: i,
                        applicationId: a,
                        channelId: n,
                        messageId: d,
                        intent: r = y.ActivityIntent.PLAY,
                        embedded: u = !1
                    } = t;
                    if (__OVERLAY__) return l.default.dispatch({
                        type: "OVERLAY_JOIN_GAME",
                        userId: e,
                        sessionId: i,
                        applicationId: a,
                        channelId: n,
                        messageId: d
                    }), Promise.resolve(!0);
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN_LOADING",
                        applicationId: a
                    });
                    try {
                        let t = await I.default.getJoinSecret(e, i, a, n, d);
                        return g({
                            applicationId: a,
                            secret: t,
                            channelId: n,
                            intent: r,
                            embedded: u
                        }), !0
                    } catch (t) {
                        return l.default.dispatch({
                            type: "ACTIVITY_JOIN_FAILED",
                            applicationId: a
                        }), !1
                    }
                },
                joinWithSecret: g
            }
        },
        438931: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                updateFlags: function() {
                    return d
                }
            });
            var a = i("872717"),
                n = i("913144"),
                l = i("49111");

            function d(t, e, i) {
                return n.default.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: i
                }), a.default.patch({
                    url: l.Endpoints.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: i
                    },
                    oldFormErrors: !0
                }).then(t => {
                    n.default.dispatch({
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
                    return n
                }
            });
            var a = i("913144"),
                n = {
                    show(t, e, i, n, l) {
                        a.default.dispatch({
                            type: "NOTICE_SHOW",
                            notice: {
                                id: l,
                                type: t,
                                message: e,
                                buttonText: i,
                                callback: n
                            }
                        })
                    },
                    dismiss(t) {
                        a.default.dispatch({
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
                    return n
                },
                useIsActivitiesInGdmEnabled: function() {
                    return l
                },
                isActivitiesInGdmEnabled: function() {
                    return d
                }
            });
            var a = i("862205");
            let n = (0, a.createExperiment)({
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
                } = n.useExperiment({
                    location: "c7edd6_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }

            function d() {
                let {
                    isActivitiesInGdmEnabled: t
                } = n.getCurrentConfig({
                    location: "c7edd6_2"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }
        },
        550766: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                startEmbeddedActivity: function() {
                    return v
                },
                launchEmbeddedActivity: function() {
                    return S
                },
                stopEmbeddedActivity: function() {
                    return L
                },
                disconnectEmbeddedActivity: function() {
                    return N
                },
                fetchDeveloperApplications: function() {
                    return F
                },
                uploadImageAttachment: function() {
                    return P
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
                    return H
                },
                updateFocusedActivityLayout: function() {
                    return Y
                }
            }), i("222007");
            var a = i("759843"),
                n = i("872717"),
                l = i("913144"),
                d = i("450911"),
                r = i("255397"),
                u = i("970728"),
                c = i("819689"),
                o = i("599417"),
                s = i("299285"),
                E = i("191145"),
                p = i("653047"),
                _ = i("271938"),
                A = i("42203"),
                f = i("697218"),
                I = i("449008"),
                T = i("840707"),
                h = i("447789"),
                C = i("191225"),
                y = i("458184"),
                D = i("420444"),
                g = i("49111"),
                m = i("91366");

            function v(t, e, i) {
                let a = C.default.getSelfEmbeddedActivityForChannel(t);
                null != a && L({
                    channelId: t,
                    applicationId: a.application_id
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    embeddedActivity: e,
                    analyticsLocations: i
                });
                let {
                    application_id: n
                } = e, d = (0, D.default)(t);
                d ? (r.default.selectParticipant(t, n), r.default.updateLayout(t, g.ChannelLayouts.NO_CHAT)) : (0, y.default)(t)
            }
            async function S(t) {
                var e, i;
                let n = A.default.getChannel(t),
                    d = null !== (e = null == n ? void 0 : n.getGuildId()) && void 0 !== e ? e : null;
                if (null == d && !(null !== (i = null == n ? void 0 : n.isPrivate()) && void 0 !== i && i)) return;
                let r = C.default.getSelfEmbeddedActivityForChannel(t);
                if (null === r) return;
                let u = _.default.getSessionId();
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                        embeddedActivity: r
                    }), await T.default.post({
                        url: g.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, r.application_id),
                        body: {
                            session_id: u,
                            guild_id: null != d ? d : void 0
                        },
                        trackedActionData: {
                            event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                            properties: {
                                guild_id: d,
                                channel_id: t,
                                application_id: r.application_id,
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
                        guildId: d,
                        applicationId: r.application_id,
                        error: new o.default(e)
                    }), L({
                        channelId: t,
                        applicationId: r.application_id,
                        showFeedback: !1
                    })
                }
            }

            function L(t) {
                var e;
                let {
                    channelId: i,
                    applicationId: a,
                    showFeedback: n = !0
                } = t;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: i,
                    applicationId: a,
                    showFeedback: n
                });
                let d = E.default.getSelectedParticipantId(i),
                    u = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                    c = C.default.getEmbeddedActivitiesForChannel(i).find(t => t.application_id === a);
                null != c && null != u && "" !== u && d === a && r.default.selectParticipant(i, null)
            }

            function N(t, e) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }
            async function F() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await n.default.get({
                            url: g.Endpoints.APPLICATIONS,
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
            async function P(t, e, i) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let a = await n.default.post({
                        url: g.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
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
                        attachment: a.body.attachment
                    }), a.body.attachment
                } catch (t) {
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                    }), new o.default(t)
                }
            }
            let b = (t, e, i) => {
                let {
                    guildId: a
                } = i;
                (a === t || null == a && null == t) && e()
            };
            async function M(t) {
                var e, i, n;
                let {
                    guildId: d,
                    force: r = !1
                } = t, u = C.default.getShelfActivities(d), c = u.map(t => s.default.getApplication(t.application_id)).filter(I.isNotNullish);
                if (!r && !C.default.shouldFetchShelf(d)) {
                    if (null === (e = C.default.getShelfFetchStatus(d)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let i = new Promise(e => {
                                t = b.bind(null, d, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            a = new Promise(t => {
                                e = b.bind(null, d, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
                            });
                        await Promise.race([i, a]), null != t && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t), t = null), null != e && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e), e = null)
                    }
                    return {
                        activityConfigs: u,
                        applications: c
                    }
                }
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                        guildId: d
                    });
                    let t = void 0 !== d && "" !== d;
                    if (!t && !(0, h.isActivitiesInGdmEnabled)()) return {
                        activityConfigs: [],
                        applications: []
                    };
                    let e = t ? {
                            guild_id: d
                        } : void 0,
                        r = await T.default.get({
                            url: g.Endpoints.ACTIVITY_SHELF,
                            query: e,
                            trackedActionData: {
                                event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: d
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }),
                        u = null !== (i = r.body.activities) && void 0 !== i ? i : [],
                        c = null !== (n = r.body.applications) && void 0 !== n ? n : [];
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                        guildId: d,
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
                        guildId: d
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
                    applicationId: a,
                    location: n
                } = t, l = await u.default.createInvite(e, {
                    target_type: m.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: a
                }, n);
                null != A.default.getChannel(i) && c.default.sendInvite(i, l.code, n, null)
            }
            async function G(t) {
                let {
                    channelId: e,
                    applicationId: i,
                    userId: a,
                    location: n
                } = t, l = await u.default.createInvite(e, {
                    target_type: m.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: i
                }, n);
                d.default.ensurePrivateChannel(a).then(t => {
                    null != A.default.getChannel(t) && c.default.sendInvite(t, l.code, n, null)
                })
            }

            function U() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function V(t) {
                let e = g.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await n.default.get({
                        url: e,
                        oldFormErrors: !0
                    }), !0
                } catch (t) {
                    return !1
                }
            }

            function H(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
                    activityPanelMode: t
                })
            }

            function Y(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
                    focusedActivityLayout: t
                })
            }
        },
        458184: function(t, e, i) {
            "use strict";

            function a(t) {}
            i.r(e), i.d(e, {
                default: function() {
                    return a
                }
            })
        },
        760850: function(t, e, i) {
            "use strict";
            let a;
            i.r(e), i.d(e, {
                cleanExecutablePath: function() {
                    return p
                },
                default: function() {
                    return _
                }
            }), i("781738"), i("424973");
            var n = i("917351"),
                l = i.n(n),
                d = i("49671"),
                r = i("605250"),
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
            async function _() {
                if (null != a) return a;
                try {
                    await c.default.ensureModule("discord_game_utils"), a = await c.default.requireModule("discord_game_utils")
                } catch (t) {
                    new(0, r.default)("GamesActionCreators").error("could not load discord_game_utils", t)
                }
                if ((0, u.isWindows)()) {
                    let t = d.default.process.env;
                    E(t.LOCALAPPDATA), E(t["PROGRAMFILES(X86)"]), E(t.PROGRAMFILES), E(t.PROGRAMW6432), E(t.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")
                }
                let t = d.default.remoteApp.getPath;
                return E(await t("home")), E(await t("appData")), E(await t("desktop")), E(await t("documents")), E(await t("downloads")), (o = l.uniq(o)).sort((t, e) => e.length - t.length), a
            }
        }
    }
]);
//# sourceMappingURL=37580.640f5dece69c9284b1ba.js.map