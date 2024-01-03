(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37580"], {
        260365: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return s
                }
            });
            var i = a("872717"),
                n = a("913144"),
                l = a("716241"),
                d = a("884351"),
                r = a("42203"),
                u = a("450911"),
                c = a("819689"),
                o = a("49111"),
                s = {
                    updateActivity(t) {
                        let {
                            applicationId: e,
                            distributor: a,
                            shareActivity: l,
                            token: d = null,
                            duration: r = 0,
                            closed: u = !1
                        } = t;
                        n.default.wait(() => n.default.dispatch({
                            type: "ACTIVITY_UPDATE_START",
                            applicationId: e,
                            duration: r,
                            distributor: a
                        })), i.default.post({
                            url: o.Endpoints.ACTIVITIES,
                            body: {
                                application_id: e,
                                token: d,
                                duration: r,
                                share_activity: l,
                                distributor: a,
                                closed: u
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    token: i
                                }
                            } = t;
                            n.default.dispatch({
                                type: "ACTIVITY_UPDATE_SUCCESS",
                                applicationId: e,
                                token: i,
                                duration: r,
                                distributor: a
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
                            type: a,
                            activity: i,
                            content: n,
                            location: u
                        } = t, s = r.default.getChannel(e);
                        if (null == s) return Promise.resolve(null);
                        let E = d.default.parse(s, null != n ? n : "");
                        return c.default.sendMessage(s.id, E, !1, {
                            activityAction: {
                                type: a,
                                activity: i
                            }
                        }).then(t => (l.default.trackWithMetadata(o.AnalyticEvents.INVITE_SENT, {
                            location: u,
                            invite_type: i.type === o.ActivityTypes.LISTENING ? o.LoggingInviteTypes.SPOTIFY : o.LoggingInviteTypes.APPLICATION,
                            application_id: i.application_id,
                            guild_id: s.getGuildId(),
                            channel_id: s.id,
                            message_id: null != t ? t.body.id : null
                        }), Promise.resolve(s)), t => Promise.reject(t))
                    },
                    sendActivityInviteUser(t) {
                        let {
                            userId: e,
                            type: a,
                            activity: i,
                            content: n,
                            location: l
                        } = t;
                        return u.default.ensurePrivateChannel(e).then(t => this.sendActivityInvite({
                            channelId: t,
                            type: a,
                            activity: i,
                            content: n,
                            location: l
                        }))
                    },
                    async getJoinSecret(t, e, a, n, l) {
                        let d = {};
                        null != n && (d.channel_id = n), null != l && (d.message_id = l);
                        let r = await i.default.get({
                            url: o.Endpoints.USER_ACTIVITY_JOIN(t, e, a),
                            retries: 3,
                            query: d
                        });
                        return r.body.secret
                    }
                }
        },
        823411: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return m
                }
            }), a("222007"), a("70102");
            var i = a("522632"),
                n = a("872717"),
                l = a("913144"),
                d = a("550766"),
                r = a("299285"),
                u = a("760850"),
                c = a("915639"),
                o = a("86878"),
                s = a("546463"),
                E = a("686470"),
                p = a("535974"),
                _ = a("568734"),
                A = a("269180"),
                f = a("773336"),
                I = a("260365"),
                T = a("438931"),
                h = a("215082"),
                y = a("49111"),
                C = a("954016"),
                D = a("782340");

            function S(t) {
                let {
                    applicationId: e,
                    secret: a,
                    channelId: i,
                    intent: n = C.ActivityIntent.PLAY,
                    embedded: d = !1,
                    analyticsLocations: r = []
                } = t;
                g(e, null, i, d, r).then(() => A.default.waitConnected(e)).then(() => Promise.race([A.default.waitSubscribed(e, y.RPCEvents.ACTIVITY_JOIN)])).then(() => {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: a,
                        intent: n,
                        embedded: d
                    })
                }).catch(() => l.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: e
                }))
            }

            function g(t, e, a) {
                let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (u) return null == a ? Promise.reject(Error("Invalid channel ID")) : ((0, d.startEmbeddedActivity)(a, {
                    application_id: t
                }, s), Promise.resolve());
                if (o.default.isConnected(t)) return Promise.resolve();
                let _ = null;
                if (null == e) {
                    let a = E.default.getActiveLibraryApplication(t);
                    e = null != a ? a.branchId : t
                }
                if (p.default.isLaunchable(t, e)) {
                    var f;
                    let a = p.default.getState(t, e),
                        l = E.default.getActiveLaunchOptionId(t, e);
                    if (null == a) throw Error("Missing dispatch game when launching");
                    let d = E.default.getLibraryApplication(t, e);
                    if (null == d) throw Error("Missing library application when launching");
                    _ = (f = t, n.default.post({
                        url: y.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: f,
                            response_type: "token",
                            scope: [y.OAuth2Scopes.IDENTIFY].join(" ")
                        },
                        retries: 3,
                        body: {
                            authorize: !0
                        },
                        oldFormErrors: !0
                    }).then(t => {
                        let e = t.body.location.split(/#|\?/),
                            a = i.parse(e[e.length - 1]);
                        if ("invalid_request" === a.error) return null;
                        if (null != a.error) {
                            var n;
                            throw Error("OAuth2 Error: ".concat(a.error, ": ").concat(null !== (n = a.error_description) && void 0 !== n ? n : "unknown error"))
                        }
                        return a.access_token
                    }, t => {
                        if (404 === t.status) return null;
                        throw t
                    })).then(t => A.default.launchDispatchApplication(a, t, c.default.locale, d.getBranchName(), l))
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
                    h.default.show(y.NoticeTypes.LAUNCH_GAME_FAILURE, D.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
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
                    let a = s.default.getGameByName(t.name);
                    if (null != a) {
                        let t = E.default.getActiveLibraryApplication(a.id);
                        if (null != t) {
                            let e = _.toggleFlag(t.getFlags(), y.LibraryApplicationFlags.OVERLAY_DISABLED);
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
                identifyGame: (t, e) => (0, u.default)().then(e => new Promise((a, i) => {
                    if (null == e) {
                        i(Error("Game utils module not loaded"));
                        return
                    }
                    e.identifyGame(t, (e, n) => {
                        if (0 !== e) {
                            i(Error("Error ".concat(e, " when fetching info on ").concat(t)));
                            return
                        }
                        if (null == n.icon || "" === n.icon || null == n.name || "" === n.name) {
                            i(Error("Did not find data on ".concat(t)));
                            return
                        }
                        l.default.dispatch({
                            type: "GAME_ICON_UPDATE",
                            gameName: n.name,
                            icon: "data:image/png;base64,".concat(n.icon)
                        }), a(n)
                    })
                })),
                getDetectableGames() {
                    !s.default.fetching && null == s.default.lastFetched && l.default.wait(() => {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), n.default.get({
                            url: y.Endpoints.APPLICATIONS_DETECTABLE,
                            headers: {
                                "If-None-Match": s.default.detectableGamesEtag
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: e,
                                headers: {
                                    etag: a
                                }
                            } = t;
                            l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: e,
                                etag: a
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
                        iconHash: a,
                        publisher: i,
                        distributor: d,
                        sku: r,
                        executableName: c
                    } = t, o = (0, u.cleanExecutablePath)(c);
                    if (null != o) {
                        var s, E;
                        n.default.post({
                            url: y.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: e,
                                os: (0, f.getPlatformName)(),
                                icon: a,
                                distributor_application: (s = d, E = r, null == s || "" === s ? null : {
                                    distributor: s,
                                    sku: E
                                }),
                                executable: o,
                                publisher: i,
                                report_version: 3
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    name: e,
                                    hash: a,
                                    missing_data: i
                                }
                            } = t;
                            l.default.dispatch({
                                type: "UNVERIFIED_GAME_UPDATE",
                                name: e,
                                hash: a,
                                missingData: i
                            })
                        })
                    }
                },
                uploadIcon(t, e, a) {
                    n.default.post({
                        url: y.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
                        body: {
                            application_name: t,
                            application_hash: e,
                            icon: a
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
                        sessionId: a,
                        applicationId: i,
                        channelId: n,
                        messageId: d,
                        intent: r = C.ActivityIntent.PLAY,
                        embedded: u = !1
                    } = t;
                    if (__OVERLAY__) return l.default.dispatch({
                        type: "OVERLAY_JOIN_GAME",
                        userId: e,
                        sessionId: a,
                        applicationId: i,
                        channelId: n,
                        messageId: d
                    }), Promise.resolve(!0);
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN_LOADING",
                        applicationId: i
                    });
                    try {
                        let t = await I.default.getJoinSecret(e, a, i, n, d);
                        return S({
                            applicationId: i,
                            secret: t,
                            channelId: n,
                            intent: r,
                            embedded: u
                        }), !0
                    } catch (t) {
                        return l.default.dispatch({
                            type: "ACTIVITY_JOIN_FAILED",
                            applicationId: i
                        }), !1
                    }
                },
                joinWithSecret: S
            }
        },
        438931: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                updateFlags: function() {
                    return d
                }
            });
            var i = a("872717"),
                n = a("913144"),
                l = a("49111");

            function d(t, e, a) {
                return n.default.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: a
                }), i.default.patch({
                    url: l.Endpoints.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: a
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
        215082: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return n
                }
            });
            var i = a("913144"),
                n = {
                    show(t, e, a, n, l) {
                        i.default.dispatch({
                            type: "NOTICE_SHOW",
                            notice: {
                                id: l,
                                type: t,
                                message: e,
                                buttonText: a,
                                callback: n
                            }
                        })
                    },
                    dismiss(t) {
                        i.default.dispatch({
                            type: "NOTICE_DISMISS",
                            ...t
                        })
                    }
                }
        },
        550766: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                startEmbeddedActivity: function() {
                    return g
                },
                launchEmbeddedActivity: function() {
                    return m
                },
                stopEmbeddedActivity: function() {
                    return v
                },
                disconnectEmbeddedActivity: function() {
                    return L
                },
                fetchDeveloperApplications: function() {
                    return N
                },
                uploadImageAttachment: function() {
                    return F
                },
                fetchShelf: function() {
                    return b
                },
                sendEmbeddedActivityInvite: function() {
                    return M
                },
                sendEmbeddedActivityInviteUser: function() {
                    return O
                },
                dismissNewActivityIndicator: function() {
                    return U
                },
                validateTestMode: function() {
                    return G
                },
                updateActivityPanelMode: function() {
                    return V
                },
                updateFocusedActivityLayout: function() {
                    return H
                }
            }), a("222007");
            var i = a("759843"),
                n = a("872717"),
                l = a("913144"),
                d = a("450911"),
                r = a("255397"),
                u = a("970728"),
                c = a("819689"),
                o = a("599417"),
                s = a("299285"),
                E = a("191145"),
                p = a("653047"),
                _ = a("271938"),
                A = a("42203"),
                f = a("697218"),
                I = a("449008"),
                T = a("840707"),
                h = a("191225"),
                y = a("458184"),
                C = a("420444"),
                D = a("49111"),
                S = a("91366");

            function g(t, e, a) {
                let i = h.default.getSelfEmbeddedActivityForChannel(t);
                null != i && v({
                    channelId: t,
                    applicationId: i.application_id
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    embeddedActivity: e,
                    analyticsLocations: a
                });
                let {
                    application_id: n
                } = e, d = (0, C.default)(t);
                d ? (r.default.selectParticipant(t, n), r.default.updateLayout(t, D.ChannelLayouts.NO_CHAT)) : (0, y.default)(t)
            }
            async function m(t) {
                var e, a;
                let n = A.default.getChannel(t),
                    d = null !== (e = null == n ? void 0 : n.getGuildId()) && void 0 !== e ? e : null;
                if (null == d && !(null !== (a = null == n ? void 0 : n.isPrivate()) && void 0 !== a && a)) return;
                let r = h.default.getSelfEmbeddedActivityForChannel(t);
                if (null === r) return;
                let u = _.default.getSessionId();
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                        embeddedActivity: r
                    }), await T.default.post({
                        url: D.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, r.application_id),
                        body: {
                            session_id: u,
                            guild_id: null != d ? d : void 0
                        },
                        trackedActionData: {
                            event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
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
                    }), v({
                        channelId: t,
                        applicationId: r.application_id,
                        showFeedback: !1
                    })
                }
            }

            function v(t) {
                var e;
                let {
                    channelId: a,
                    applicationId: i,
                    showFeedback: n = !0
                } = t;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: a,
                    applicationId: i,
                    showFeedback: n
                });
                let d = E.default.getSelectedParticipantId(a),
                    u = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                    c = h.default.getEmbeddedActivitiesForChannel(a).find(t => t.application_id === i);
                null != c && null != u && "" !== u && d === i && r.default.selectParticipant(a, null)
            }

            function L(t, e) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }
            async function N() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await n.default.get({
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
            async function F(t, e, a) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let i = await n.default.post({
                        url: D.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
                        query: {
                            channel_id: e
                        },
                        attachments: [{
                            name: "file",
                            file: a
                        }]
                    });
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                        attachment: i.body.attachment
                    }), i.body.attachment
                } catch (t) {
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                    }), new o.default(t)
                }
            }
            let P = (t, e, a) => {
                let {
                    guildId: i
                } = a;
                (i === t || null == i && null == t) && e()
            };
            async function b(t) {
                var e, a, n;
                let {
                    guildId: d,
                    force: r = !1
                } = t, u = h.default.getShelfActivities(d), c = u.map(t => s.default.getApplication(t.application_id)).filter(I.isNotNullish);
                if (!r && !h.default.shouldFetchShelf(d)) {
                    if (null === (e = h.default.getShelfFetchStatus(d)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let a = new Promise(e => {
                                t = P.bind(null, d, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            i = new Promise(t => {
                                e = P.bind(null, d, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
                            });
                        await Promise.race([a, i]), null != t && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t), t = null), null != e && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e), e = null)
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
                    let t = void 0 !== d && "" !== d,
                        e = t ? {
                            guild_id: d
                        } : void 0,
                        r = await T.default.get({
                            url: D.Endpoints.ACTIVITY_SHELF,
                            query: e,
                            trackedActionData: {
                                event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: d
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }),
                        u = null !== (a = r.body.activities) && void 0 !== a ? a : [],
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
            async function M(t) {
                let {
                    activityChannelId: e,
                    invitedChannelId: a,
                    applicationId: i,
                    location: n
                } = t, l = await u.default.createInvite(e, {
                    target_type: S.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: i
                }, n);
                null != A.default.getChannel(a) && c.default.sendInvite(a, l.code, n, null)
            }
            async function O(t) {
                let {
                    channelId: e,
                    applicationId: a,
                    userId: i,
                    location: n
                } = t, l = await u.default.createInvite(e, {
                    target_type: S.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: a
                }, n);
                d.default.ensurePrivateChannel(i).then(t => {
                    null != A.default.getChannel(t) && c.default.sendInvite(t, l.code, n, null)
                })
            }

            function U() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function G(t) {
                let e = D.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await n.default.get({
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

            function H(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
                    focusedActivityLayout: t
                })
            }
        },
        458184: function(t, e, a) {
            "use strict";

            function i(t) {}
            a.r(e), a.d(e, {
                default: function() {
                    return i
                }
            })
        },
        760850: function(t, e, a) {
            "use strict";
            let i;
            a.r(e), a.d(e, {
                cleanExecutablePath: function() {
                    return p
                },
                default: function() {
                    return _
                }
            }), a("781738"), a("424973");
            var n = a("917351"),
                l = a.n(n),
                d = a("49671"),
                r = a("605250"),
                u = a("773336"),
                c = a("50885");
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
                return (o.forEach(a => {
                    !e && t.startsWith(a) && (t = t.substr(a.length), e = !0)
                }), e) ? t = t.includes("dosbox.exe") ? t.split("/").slice(-3).join("/") : t.split("/").slice(-2).join("/") : null
            }
            async function _() {
                if (null != i) return i;
                try {
                    await c.default.ensureModule("discord_game_utils"), i = await c.default.requireModule("discord_game_utils")
                } catch (t) {
                    new(0, r.default)("GamesActionCreators").error("could not load discord_game_utils", t)
                }
                if ((0, u.isWindows)()) {
                    let t = d.default.process.env;
                    E(t.LOCALAPPDATA), E(t["PROGRAMFILES(X86)"]), E(t.PROGRAMFILES), E(t.PROGRAMW6432), E(t.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")
                }
                let t = d.default.remoteApp.getPath;
                return E(await t("home")), E(await t("appData")), E(await t("desktop")), E(await t("documents")), E(await t("downloads")), (o = l.uniq(o)).sort((t, e) => e.length - t.length), i
            }
        }
    }
]);
//# sourceMappingURL=37580.18e2d9bf5a2d93f0092e.js.map