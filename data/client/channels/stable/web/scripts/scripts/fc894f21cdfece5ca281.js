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
                        let p = d.default.parse(s, null != a ? a : "");
                        return c.default.sendMessage(s.id, p, !1, {
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
            });
            var n = i("522632"),
                a = i("872717"),
                l = i("913144"),
                d = i("550766"),
                r = i("760850"),
                u = i("915639"),
                c = i("86878"),
                o = i("546463"),
                s = i("686470"),
                p = i("535974"),
                E = i("568734"),
                f = i("269180"),
                A = i("773336"),
                _ = i("260365"),
                I = i("438931"),
                T = i("215082"),
                h = i("49111"),
                C = i("954016"),
                y = i("782340");

            function v(t) {
                let {
                    applicationId: e,
                    secret: i,
                    channelId: n,
                    intent: a = C.ActivityIntent.PLAY,
                    embedded: d = !1,
                    analyticsLocations: r = []
                } = t;
                g(e, null, n, d, r).then(() => f.default.waitConnected(e)).then(() => Promise.race([f.default.waitSubscribed(e, h.RPCEvents.ACTIVITY_JOIN)])).then(() => {
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

            function g(t, e, i) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    E = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (r) return null == i ? Promise.reject(Error("Invalid channel ID")) : ((0, d.startEmbeddedActivity)(i, {
                    application_id: t
                }, E), Promise.resolve());
                if (c.default.isConnected(t)) return Promise.resolve();
                let A = null;
                if (null == e) {
                    let i = s.default.getActiveLibraryApplication(t);
                    e = null != i ? i.branchId : t
                }
                if (p.default.isLaunchable(t, e)) {
                    var _;
                    let i = p.default.getState(t, e),
                        l = s.default.getActiveLaunchOptionId(t, e);
                    if (null == i) throw Error("Missing dispatch game when launching");
                    let d = s.default.getLibraryApplication(t, e);
                    if (null == d) throw Error("Missing library application when launching");
                    A = (_ = t, a.default.post({
                        url: h.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: _,
                            response_type: "token",
                            scope: [h.OAuth2Scopes.IDENTIFY].join(" ")
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
                    })).then(t => f.default.launchDispatchApplication(i, t, u.default.locale, d.getBranchName(), l))
                } else {
                    let e = o.default.getGame(t);
                    A = null != e ? f.default.launch(e) : f.default.launchGame(t)
                }
                let I = Error("game not found");
                return null != A ? (l.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                    applicationId: t,
                    branchId: e
                }), l.default.dispatch({
                    type: "GAME_LAUNCH_START",
                    applicationId: t
                }), A.then(e => {
                    l.default.dispatch({
                        type: "GAME_LAUNCH_SUCCESS",
                        applicationId: t,
                        pids: e
                    })
                }).catch(e => {
                    T.default.show(h.NoticeTypes.LAUNCH_GAME_FAILURE, y.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
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
                fetchApplication(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return l.default.dispatch({
                        type: "APPLICATION_FETCH",
                        applicationId: t
                    }), a.default.get({
                        url: h.Endpoints.APPLICATION_PUBLIC(t),
                        query: {
                            with_guild: e
                        },
                        oldFormErrors: !0
                    }).then(t => (l.default.dispatch({
                        type: "APPLICATION_FETCH_SUCCESS",
                        application: t.body
                    }), t.body)).catch(e => (l.default.dispatch({
                        type: "APPLICATION_FETCH_FAIL",
                        applicationId: t
                    }), Promise.reject(e)))
                },
                async fetchApplications(t) {
                    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = t;
                    if (!e && (i = t.filter(t => {
                            var e, i;
                            let n = o.default.getGame(t),
                                a = (0, E.hasFlag)(null !== (i = null == n ? void 0 : n.flags) && void 0 !== i ? i : 0, h.ApplicationFlags.EMBEDDED),
                                l = a && (null == n ? void 0 : null === (e = n.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms) == null,
                                d = null != n && !l;
                            return !d && !o.default.isFetching(t) && !o.default.didFetchingFail(t) && t.length > 0
                        })), i.length > 0) {
                        let t;
                        l.default.dispatch({
                            type: "APPLICATIONS_FETCH",
                            applicationIds: i
                        });
                        try {
                            t = await a.default.get({
                                url: h.Endpoints.APPLICATIONS_PUBLIC,
                                query: n.stringify({
                                    application_ids: i
                                }),
                                oldFormErrors: !0
                            })
                        } catch (t) {
                            throw l.default.dispatch({
                                type: "APPLICATIONS_FETCH_FAIL",
                                applicationIds: i
                            }), t
                        }
                        l.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: t.body
                        })
                    }
                },
                toggleOverlay(t) {
                    let e = o.default.getGameByName(t.name);
                    if (null != e) {
                        let t = s.default.getActiveLibraryApplication(e.id);
                        if (null != t) {
                            let e = E.toggleFlag(t.getFlags(), h.LibraryApplicationFlags.OVERLAY_DISABLED);
                            I.updateFlags(t.id, t.branchId, e);
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
                identifyGame: (t, e) => (0, r.default)().then(e => new Promise((i, n) => {
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
                    !o.default.fetching && null == o.default.lastFetched && l.default.wait(() => {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), a.default.get({
                            url: h.Endpoints.APPLICATIONS_DETECTABLE,
                            headers: {
                                "If-None-Match": o.default.detectableGamesEtag
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
                                etag: o.default.detectableGamesEtag
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
                        sku: u,
                        executableName: c
                    } = t, o = (0, r.cleanExecutablePath)(c);
                    if (null != o) {
                        var s, p;
                        a.default.post({
                            url: h.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: e,
                                os: (0, A.getPlatformName)(),
                                icon: i,
                                distributor_application: (s = d, p = u, null == s || "" === s ? null : {
                                    distributor: s,
                                    sku: p
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
                        url: h.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
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
                        messageId: d,
                        intent: r = C.ActivityIntent.PLAY,
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
                        let t = await _.default.getJoinSecret(e, i, n, a, d);
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
                d = i("954016"),
                r = i("49111");
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
                return a && d.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(null !== (e = null == i ? void 0 : i.type) && void 0 !== e ? e : r.ChannelTypes.UNKNOWN)
            }
        },
        550766: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                startEmbeddedActivity: function() {
                    return D
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
                    return P
                },
                uploadImageAttachment: function() {
                    return F
                },
                fetchShelf: function() {
                    return O
                },
                sendEmbeddedActivityInvite: function() {
                    return M
                },
                sendEmbeddedActivityInviteUser: function() {
                    return G
                },
                dismissNewActivityIndicator: function() {
                    return U
                },
                validateTestMode: function() {
                    return H
                },
                updateActivityPanelMode: function() {
                    return V
                }
            });
            var n = i("759843"),
                a = i("872717"),
                l = i("913144"),
                d = i("450911"),
                r = i("255397"),
                u = i("970728"),
                c = i("819689"),
                o = i("599417"),
                s = i("191145"),
                p = i("653047"),
                E = i("271938"),
                f = i("42203"),
                A = i("546463"),
                _ = i("697218"),
                I = i("449008"),
                T = i("840707"),
                h = i("447789"),
                C = i("191225"),
                y = i("458184"),
                v = i("420444"),
                g = i("49111"),
                m = i("91366");

            function D(t, e, i) {
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
                } = e, d = (0, v.default)(t);
                d ? (r.default.selectParticipant(t, a), r.default.updateLayout(t, g.ChannelLayouts.NO_CHAT)) : (0, y.default)(t)
            }
            async function S(t) {
                var e, i;
                let a = f.default.getChannel(t),
                    d = null !== (e = null == a ? void 0 : a.getGuildId()) && void 0 !== e ? e : null;
                if (null == d && !(null !== (i = null == a ? void 0 : a.isPrivate()) && void 0 !== i && i)) return;
                let r = C.default.getSelfEmbeddedActivityForChannel(t);
                if (null === r) return;
                let u = E.default.getSessionId();
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
                let d = s.default.getSelectedParticipantId(i),
                    u = null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
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
            async function P() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await a.default.get({
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
            async function F(t, e, i) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let n = await a.default.post({
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
                        attachment: n.body.attachment
                    }), n.body.attachment
                } catch (t) {
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                    }), new o.default(t)
                }
            }
            let b = (t, e, i) => {
                let {
                    guildId: n
                } = i;
                (n === t || null == n && null == t) && e()
            };
            async function O(t) {
                var e, i, a;
                let {
                    guildId: d,
                    force: r = !1
                } = t, u = C.default.getShelfActivities(d), c = u.map(t => A.default.getGame(t.application_id)).filter(I.isNotNullish);
                if (!r && !C.default.shouldFetchShelf(d)) {
                    if (null === (e = C.default.getShelfFetchStatus(d)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let i = new Promise(e => {
                                t = b.bind(null, d, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            n = new Promise(t => {
                                e = b.bind(null, d, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
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
                            url: g.Endpoints.ACTIVITY_SHELF,
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
            async function M(t) {
                let {
                    activityChannelId: e,
                    invitedChannelId: i,
                    applicationId: n,
                    location: a
                } = t, l = await u.default.createInvite(e, {
                    target_type: m.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: n
                }, a);
                null != f.default.getChannel(i) && c.default.sendInvite(i, l.code, a, null)
            }
            async function G(t) {
                let {
                    channelId: e,
                    applicationId: i,
                    userId: n,
                    location: a
                } = t, l = await u.default.createInvite(e, {
                    target_type: m.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: i
                }, a);
                d.default.ensurePrivateChannel(n).then(t => {
                    null != f.default.getChannel(t) && c.default.sendInvite(t, l.code, a, null)
                })
            }

            function U() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function H(t) {
                let e = g.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await a.default.get({
                        url: e,
                        oldFormErrors: !0
                    }), !0
                } catch (t) {
                    return !1
                }
            }

            function V(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
                    activityPanelMode: t
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
                    return E
                },
                default: function() {
                    return f
                }
            });
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

            function p(t) {
                null != t && "" !== t && (!(t = s(t)).endsWith("/") && (t += "/"), o.push(t))
            }

            function E(t) {
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
                    p(t.LOCALAPPDATA), p(t["PROGRAMFILES(X86)"]), p(t.PROGRAMFILES), p(t.PROGRAMW6432), p(t.PROGRAMDATA), p("/games/"), p("/steamlibrary/steamapps/common/")
                }
                let t = d.default.remoteApp.getPath;
                return p(await t("home")), p(await t("appData")), p(await t("desktop")), p(await t("documents")), p(await t("downloads")), (o = l.uniq(o)).sort((t, e) => e.length - t.length), n
            }
        }
    }
]);
//# sourceMappingURL=fc894f21cdfece5ca281.js.map