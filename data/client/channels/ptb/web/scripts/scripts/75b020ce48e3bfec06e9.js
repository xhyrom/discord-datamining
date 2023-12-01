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
                        a.default.wait(() => a.default.dispatch({
                            type: "ACTIVITY_UPDATE_START",
                            applicationId: e,
                            duration: r,
                            distributor: i
                        })), n.default.post({
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
                                    token: n
                                }
                            } = t;
                            a.default.dispatch({
                                type: "ACTIVITY_UPDATE_SUCCESS",
                                applicationId: e,
                                token: n,
                                duration: r,
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
                        } = t, s = r.default.getChannel(e);
                        if (null == s) return Promise.resolve(null);
                        let E = d.default.parse(s, null != a ? a : "");
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
                        let d = {};
                        null != a && (d.channel_id = a), null != l && (d.message_id = l);
                        let r = await n.default.get({
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
                    return m
                }
            }), i("222007"), i("70102");
            var n = i("522632"),
                a = i("872717"),
                l = i("913144"),
                d = i("550766"),
                r = i("299285"),
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
                g = i("782340");

            function v(t) {
                let {
                    applicationId: e,
                    secret: i,
                    channelId: n,
                    intent: a = y.ActivityIntent.PLAY,
                    embedded: d = !1,
                    analyticsLocations: r = []
                } = t;
                D(e, null, n, d, r).then(() => _.default.waitConnected(e)).then(() => Promise.race([_.default.waitSubscribed(e, C.RPCEvents.ACTIVITY_JOIN)])).then(() => {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: i,
                        intent: a,
                        embedded: d
                    })
                }).catch(() => l.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: e
                }))
            }

            function D(t, e, i) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (u) return null == i ? Promise.reject(Error("Invalid channel ID")) : ((0, d.startEmbeddedActivity)(i, {
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
                    let d = E.default.getLibraryApplication(t, e);
                    if (null == d) throw Error("Missing library application when launching");
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
                    })).then(t => _.default.launchDispatchApplication(i, t, c.default.locale, d.getBranchName(), l))
                } else {
                    let e = r.default.getApplication(t);
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
                    h.default.show(C.NoticeTypes.LAUNCH_GAME_FAILURE, g.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
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
                toggleOverlay(t, e) {
                    let i = s.default.getGameByName(t.name);
                    if (null != i) {
                        let t = E.default.getActiveLibraryApplication(i.id);
                        if (null != t) {
                            let e = f.toggleFlag(t.getFlags(), C.LibraryApplicationFlags.OVERLAY_DISABLED);
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
                        distributor: d,
                        sku: r,
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
                                distributor_application: (s = d, E = r, null == s || "" === s ? null : {
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
                launch: D,
                async join(t) {
                    let {
                        userId: e,
                        sessionId: i,
                        applicationId: n,
                        channelId: a,
                        messageId: d,
                        intent: r = y.ActivityIntent.PLAY,
                        embedded: u = !1
                    } = t;
                    if (__OVERLAY__) return l.default.dispatch({
                        type: "OVERLAY_JOIN_GAME",
                        userId: e,
                        sessionId: i,
                        applicationId: n,
                        channelId: a,
                        messageId: d
                    }), Promise.resolve(!0);
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN_LOADING",
                        applicationId: n
                    });
                    try {
                        let t = await I.default.getJoinSecret(e, i, n, a, d);
                        return v({
                            applicationId: n,
                            secret: t,
                            channelId: a,
                            intent: r,
                            embedded: u
                        }), !0
                    } catch (t) {
                        return l.default.dispatch({
                            type: "ACTIVITY_JOIN_FAILED",
                            applicationId: n
                        }), !1
                    }
                },
                joinWithSecret: v
            }
        },
        438931: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                updateFlags: function() {
                    return d
                }
            });
            var n = i("872717"),
                a = i("913144"),
                l = i("49111");

            function d(t, e, i) {
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
                    return d
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

            function d() {
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
                isActivitiesInTextEnabled: function() {
                    return u
                },
                useIsActivitiesInTextEnabled: function() {
                    return c
                }
            });
            var n = i("446674"),
                a = i("862205"),
                l = i("42203");
            let d = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-08_activities_in_text",
                    label: "Activities in Text User",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Activities in text channels",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                r = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-11_activities_in_text_guild",
                    label: "Activities in Text Guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Activities in text channels",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function u(t, e) {
                return null != t && ((null == t ? void 0 : t.guild_id) != null ? r.getCurrentConfig({
                    guildId: t.guild_id,
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled : d.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled)
            }

            function c(t, e) {
                let i = (0, n.useStateFromStores)([l.default], () => l.default.getChannel(t)),
                    a = (null == i ? void 0 : i.guild_id) != null ? r : d,
                    u = a.useExperiment({
                        guildId: null == i ? void 0 : i.guild_id,
                        location: e
                    }, {
                        autoTrackExposure: !1
                    });
                return u.enabled
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
                    return L
                },
                disconnectEmbeddedActivity: function() {
                    return N
                },
                fetchDeveloperApplications: function() {
                    return b
                },
                uploadImageAttachment: function() {
                    return F
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
            var n = i("759843"),
                a = i("872717"),
                l = i("913144"),
                d = i("450911"),
                r = i("255397"),
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
                g = i("420444"),
                v = i("49111"),
                D = i("91366");

            function m(t, e, i) {
                let n = C.default.getSelfEmbeddedActivityForChannel(t);
                null != n && L({
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
                } = e, d = (0, g.default)(t);
                d ? (r.default.selectParticipant(t, a), r.default.updateLayout(t, v.ChannelLayouts.NO_CHAT)) : (0, y.default)(t)
            }
            async function S(t) {
                var e, i;
                let a = _.default.getChannel(t),
                    d = null !== (e = null == a ? void 0 : a.getGuildId()) && void 0 !== e ? e : null;
                if (null == d && !(null !== (i = null == a ? void 0 : a.isPrivate()) && void 0 !== i && i)) return;
                let r = C.default.getSelfEmbeddedActivityForChannel(t);
                if (null === r) return;
                let u = f.default.getSessionId();
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                        embeddedActivity: r
                    }), await T.default.post({
                        url: v.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, r.application_id),
                        body: {
                            session_id: u,
                            guild_id: null != d ? d : void 0
                        },
                        trackedActionData: {
                            event: n.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
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
                    applicationId: n,
                    showFeedback: a = !0
                } = t;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: i,
                    applicationId: n,
                    showFeedback: a
                });
                let d = E.default.getSelectedParticipantId(i),
                    u = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                    c = C.default.getEmbeddedActivitiesForChannel(i).find(t => t.application_id === n);
                null != c && null != u && "" !== u && d === n && r.default.selectParticipant(i, null)
            }

            function N(t, e) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }
            async function b() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await a.default.get({
                            url: v.Endpoints.APPLICATIONS,
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
            async function F(t, e, i) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let n = await a.default.post({
                        url: v.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
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
            let P = (t, e, i) => {
                let {
                    guildId: n
                } = i;
                (n === t || null == n && null == t) && e()
            };
            async function M(t) {
                var e, i, a;
                let {
                    guildId: d,
                    force: r = !1
                } = t, u = C.default.getShelfActivities(d), c = u.map(t => s.default.getApplication(t.application_id)).filter(I.isNotNullish);
                if (!r && !C.default.shouldFetchShelf(d)) {
                    if (null === (e = C.default.getShelfFetchStatus(d)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let i = new Promise(e => {
                                t = P.bind(null, d, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            n = new Promise(t => {
                                e = P.bind(null, d, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
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
                            url: v.Endpoints.ACTIVITY_SHELF,
                            query: e,
                            trackedActionData: {
                                event: n.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: d
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }),
                        u = null !== (i = r.body.activities) && void 0 !== i ? i : [],
                        c = null !== (a = r.body.applications) && void 0 !== a ? a : [];
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
                    applicationId: n,
                    location: a
                } = t, l = await u.default.createInvite(e, {
                    target_type: D.InviteTargetTypes.EMBEDDED_APPLICATION,
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
                    target_type: D.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: i
                }, a);
                d.default.ensurePrivateChannel(n).then(t => {
                    null != _.default.getChannel(t) && c.default.sendInvite(t, l.code, a, null)
                })
            }

            function U() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function V(t) {
                let e = v.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await a.default.get({
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
                    return d
                }
            });
            var n = i("298386"),
                a = i("42203"),
                l = i("427953");

            function d(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                    i = e.getChannel(t),
                    d = (0, l.isActivitiesInTextEnabled)(i, "isVoiceActivityChannel");
                return null != i && (i.type === n.ChannelTypes.GUILD_VOICE || i.isPrivate() && !d)
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
            async function f() {
                if (null != n) return n;
                try {
                    await c.default.ensureModule("discord_game_utils"), n = await c.default.requireModule("discord_game_utils")
                } catch (t) {
                    new(0, r.default)("GamesActionCreators").error("could not load discord_game_utils", t)
                }
                if ((0, u.isWindows)()) {
                    let t = d.default.process.env;
                    E(t.LOCALAPPDATA), E(t["PROGRAMFILES(X86)"]), E(t.PROGRAMFILES), E(t.PROGRAMW6432), E(t.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")
                }
                let t = d.default.remoteApp.getPath;
                return E(await t("home")), E(await t("appData")), E(await t("desktop")), E(await t("documents")), E(await t("downloads")), (o = l.uniq(o)).sort((t, e) => e.length - t.length), n
            }
        }
    }
]);
//# sourceMappingURL=75b020ce48e3bfec06e9.js.map