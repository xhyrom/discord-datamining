(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37580"], {
        260365: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("716241"),
                r = n("884351"),
                u = n("42203"),
                d = n("450911"),
                o = n("819689"),
                c = n("49111"),
                s = {
                    updateActivity(t) {
                        let {
                            applicationId: e,
                            distributor: n,
                            shareActivity: l,
                            token: r = null,
                            duration: u = 0,
                            closed: d = !1
                        } = t;
                        i.default.wait(() => i.default.dispatch({
                            type: "ACTIVITY_UPDATE_START",
                            applicationId: e,
                            duration: u,
                            distributor: n
                        })), a.default.post({
                            url: c.Endpoints.ACTIVITIES,
                            body: {
                                application_id: e,
                                token: r,
                                duration: u,
                                share_activity: l,
                                distributor: n,
                                closed: d
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    token: a
                                }
                            } = t;
                            i.default.dispatch({
                                type: "ACTIVITY_UPDATE_SUCCESS",
                                applicationId: e,
                                token: a,
                                duration: u,
                                distributor: n
                            })
                        }).catch(() => {
                            i.default.dispatch({
                                type: "ACTIVITY_UPDATE_FAIL",
                                applicationId: e
                            })
                        })
                    },
                    sendActivityInvite(t) {
                        let {
                            channelId: e,
                            type: n,
                            activity: a,
                            content: i,
                            location: d
                        } = t, s = u.default.getChannel(e);
                        if (null == s) return Promise.resolve(null);
                        let E = r.default.parse(s, null != i ? i : "");
                        return o.default.sendMessage(s.id, E, !1, {
                            activityAction: {
                                type: n,
                                activity: a
                            }
                        }).then(t => (l.default.trackWithMetadata(c.AnalyticEvents.INVITE_SENT, {
                            location: d,
                            invite_type: a.type === c.ActivityTypes.LISTENING ? c.LoggingInviteTypes.SPOTIFY : c.LoggingInviteTypes.APPLICATION,
                            application_id: a.application_id,
                            guild_id: s.getGuildId(),
                            channel_id: s.id,
                            message_id: null != t ? t.body.id : null
                        }), Promise.resolve(s)), t => Promise.reject(t))
                    },
                    sendActivityInviteUser(t) {
                        let {
                            userId: e,
                            type: n,
                            activity: a,
                            content: i,
                            location: l
                        } = t;
                        return d.default.ensurePrivateChannel(e).then(t => this.sendActivityInvite({
                            channelId: t,
                            type: n,
                            activity: a,
                            content: i,
                            location: l
                        }))
                    },
                    async getJoinSecret(t, e, n, i, l) {
                        let r = {};
                        null != i && (r.channel_id = i), null != l && (r.message_id = l);
                        let u = await a.default.get({
                            url: c.Endpoints.USER_ACTIVITY_JOIN(t, e, n),
                            retries: 3,
                            query: r
                        });
                        return u.body.secret
                    }
                }
        },
        823411: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            }), n("222007"), n("70102");
            var a = n("522632"),
                i = n("872717"),
                l = n("913144"),
                r = n("550766"),
                u = n("299285"),
                d = n("760850"),
                o = n("915639"),
                c = n("86878"),
                s = n("546463"),
                E = n("686470"),
                I = n("535974"),
                p = n("568734"),
                f = n("269180"),
                A = n("773336"),
                _ = n("260365"),
                T = n("438931"),
                C = n("215082"),
                y = n("49111"),
                h = n("954016"),
                N = n("782340");

            function D(t) {
                let {
                    applicationId: e,
                    secret: n,
                    channelId: a,
                    intent: i = h.ActivityIntent.PLAY,
                    embedded: r = !1,
                    analyticsLocations: u = []
                } = t;
                S(e, null, a, r, u).then(() => f.default.waitConnected(e)).then(() => Promise.race([f.default.waitSubscribed(e, y.RPCEvents.ACTIVITY_JOIN)])).then(() => {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: n,
                        intent: i,
                        embedded: r
                    })
                }).catch(() => l.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: e
                }))
            }

            function S(t, e, n) {
                let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (d) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, r.startEmbeddedActivity)(n, t, s), Promise.resolve());
                if (c.default.isConnected(t)) return Promise.resolve();
                let p = null;
                if (null == e) {
                    let n = E.default.getActiveLibraryApplication(t);
                    e = null != n ? n.branchId : t
                }
                if (I.default.isLaunchable(t, e)) {
                    var A;
                    let n = I.default.getState(t, e),
                        l = E.default.getActiveLaunchOptionId(t, e);
                    if (null == n) throw Error("Missing dispatch game when launching");
                    let r = E.default.getLibraryApplication(t, e);
                    if (null == r) throw Error("Missing library application when launching");
                    p = (A = t, i.default.post({
                        url: y.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: A,
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
                            n = a.parse(e[e.length - 1]);
                        if ("invalid_request" === n.error) return null;
                        if (null != n.error) {
                            var i;
                            throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (i = n.error_description) && void 0 !== i ? i : "unknown error"))
                        }
                        return n.access_token
                    }, t => {
                        if (404 === t.status) return null;
                        throw t
                    })).then(t => f.default.launchDispatchApplication(n, t, o.default.locale, r.getBranchName(), l))
                } else {
                    let e = u.default.getApplication(t);
                    p = null != e ? f.default.launch(e) : f.default.launchGame(t)
                }
                let _ = Error("game not found");
                return null != p ? (l.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                    applicationId: t,
                    branchId: e
                }), l.default.dispatch({
                    type: "GAME_LAUNCH_START",
                    applicationId: t
                }), p.then(e => {
                    l.default.dispatch({
                        type: "GAME_LAUNCH_SUCCESS",
                        applicationId: t,
                        pids: e
                    })
                }).catch(e => {
                    C.default.show(y.NoticeTypes.LAUNCH_GAME_FAILURE, N.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
                        type: "GAME_LAUNCH_FAIL",
                        applicationId: t,
                        error: _
                    })
                })) : (l.default.dispatch({
                    type: "GAME_LAUNCH_FAIL",
                    applicationId: t,
                    error: _
                }), Promise.reject(_))
            }
            var m = {
                addGame(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_ADD_OVERRIDE",
                        pid: t
                    })
                },
                toggleOverlay(t, e) {
                    let n = s.default.getGameByName(t.name);
                    if (null != n) {
                        let t = E.default.getActiveLibraryApplication(n.id);
                        if (null != t) {
                            let e = p.toggleFlag(t.getFlags(), y.LibraryApplicationFlags.OVERLAY_DISABLED);
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
                identifyGame: (t, e) => (0, d.default)().then(e => new Promise((n, a) => {
                    if (null == e) {
                        a(Error("Game utils module not loaded"));
                        return
                    }
                    e.identifyGame(t, (e, i) => {
                        if (0 !== e) {
                            a(Error("Error ".concat(e, " when fetching info on ").concat(t)));
                            return
                        }
                        if (null == i.icon || "" === i.icon || null == i.name || "" === i.name) {
                            a(Error("Did not find data on ".concat(t)));
                            return
                        }
                        l.default.dispatch({
                            type: "GAME_ICON_UPDATE",
                            gameName: i.name,
                            icon: "data:image/png;base64,".concat(i.icon)
                        }), n(i)
                    })
                })),
                getDetectableGames() {
                    !s.default.fetching && null == s.default.lastFetched && l.default.wait(() => {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), i.default.get({
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
                                    etag: n
                                }
                            } = t;
                            l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: e,
                                etag: n
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
                        iconHash: n,
                        publisher: a,
                        distributor: r,
                        sku: u,
                        executableName: o
                    } = t, c = (0, d.cleanExecutablePath)(o);
                    if (null != c) {
                        var s, E;
                        i.default.post({
                            url: y.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: e,
                                os: (0, A.getPlatformName)(),
                                icon: n,
                                distributor_application: (s = r, E = u, null == s || "" === s ? null : {
                                    distributor: s,
                                    sku: E
                                }),
                                executable: c,
                                publisher: a,
                                report_version: 3
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    name: e,
                                    hash: n,
                                    missing_data: a
                                }
                            } = t;
                            l.default.dispatch({
                                type: "UNVERIFIED_GAME_UPDATE",
                                name: e,
                                hash: n,
                                missingData: a
                            })
                        })
                    }
                },
                uploadIcon(t, e, n) {
                    i.default.post({
                        url: y.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
                        body: {
                            application_name: t,
                            application_hash: e,
                            icon: n
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
                launch: S,
                async join(t) {
                    let {
                        userId: e,
                        sessionId: n,
                        applicationId: a,
                        channelId: i,
                        messageId: r,
                        intent: u = h.ActivityIntent.PLAY,
                        embedded: d = !1
                    } = t;
                    if (__OVERLAY__) return l.default.dispatch({
                        type: "OVERLAY_JOIN_GAME",
                        userId: e,
                        sessionId: n,
                        applicationId: a,
                        channelId: i,
                        messageId: r
                    }), Promise.resolve(!0);
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN_LOADING",
                        applicationId: a
                    });
                    try {
                        let t = await _.default.getJoinSecret(e, n, a, i, r);
                        return D({
                            applicationId: a,
                            secret: t,
                            channelId: i,
                            intent: u,
                            embedded: d
                        }), !0
                    } catch (t) {
                        return l.default.dispatch({
                            type: "ACTIVITY_JOIN_FAILED",
                            applicationId: a
                        }), !1
                    }
                },
                joinWithSecret: D
            }
        },
        438931: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateFlags: function() {
                    return r
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("49111");

            function r(t, e, n) {
                return i.default.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: n
                }), a.default.patch({
                    url: l.Endpoints.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                        libraryApplication: t.body
                    })
                })
            }
        },
        215082: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                i = {
                    show(t, e, n, i, l) {
                        a.default.dispatch({
                            type: "NOTICE_SHOW",
                            notice: {
                                id: l,
                                type: t,
                                message: e,
                                buttonText: n,
                                callback: i
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
        550766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                startEmbeddedActivity: function() {
                    return v
                },
                launchEmbeddedActivity: function() {
                    return L
                },
                stopEmbeddedActivity: function() {
                    return O
                },
                disconnectEmbeddedActivity: function() {
                    return F
                },
                fetchDeveloperApplications: function() {
                    return M
                },
                uploadImageAttachment: function() {
                    return P
                },
                fetchShelf: function() {
                    return b
                },
                sendEmbeddedActivityInvite: function() {
                    return U
                },
                sendEmbeddedActivityInviteUser: function() {
                    return G
                },
                dismissNewActivityIndicator: function() {
                    return w
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
            }), n("222007");
            var a = n("759843"),
                i = n("872717"),
                l = n("913144"),
                r = n("450911"),
                u = n("255397"),
                d = n("970728"),
                o = n("819689"),
                c = n("599417"),
                s = n("299285"),
                E = n("191145"),
                I = n("752598"),
                p = n("653047"),
                f = n("271938"),
                A = n("42203"),
                _ = n("18494"),
                T = n("697218"),
                C = n("449008"),
                y = n("840707"),
                h = n("427953"),
                N = n("191225"),
                D = n("458184"),
                S = n("420444"),
                m = n("49111"),
                g = n("91366");

            function v(t, e, n) {
                let a = f.default.getId(),
                    i = N.default.getSelfEmbeddedActivityForChannel(t),
                    r = N.default.getEmbeddedActivitiesForChannel(t),
                    d = r.find(t => t.applicationId === e && t.userIds.has(a));
                null != i ? O({
                    channelId: t,
                    applicationId: i.applicationId,
                    showFeedback: !1
                }) : null != d && F(t, e, !0), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    applicationId: e,
                    analyticsLocations: n
                });
                let o = (0, S.default)(t);
                o ? (u.default.selectParticipant(t, e), u.default.updateLayout(t, m.ChannelLayouts.NO_CHAT)) : (0, D.default)(t)
            }
            async function L(t) {
                var e, n;
                let i = A.default.getChannel(t),
                    r = null !== (e = null == i ? void 0 : i.getGuildId()) && void 0 !== e ? e : void 0;
                if (null == r && !(null !== (n = null == i ? void 0 : i.isPrivate()) && void 0 !== n && n)) return;
                let u = N.default.getSelfEmbeddedActivityForChannel(t);
                if (null === u) return;
                let d = f.default.getSessionId();
                try {
                    l.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                            embeddedActivity: u
                        }),
                        function(t, e) {
                            let n = A.default.getChannel(t),
                                a = N.default.getEmbeddedActivitiesForChannel(t).some(t => t.applicationId === e);
                            if (a) return !1;
                            let i = (0, h.isActivitiesInTextEnabled)(n, "EmbeddedActivitiesActionCreators#isActivityInTextStart");
                            return !!((null == n ? void 0 : n.type) === m.ChannelTypes.GUILD_TEXT && i || null != n && n.isPrivate() && i && null == _.default.getVoiceChannelId()) || !1
                        }(t, u.applicationId) ? await (0, I.executePrimaryEntryPointInteraction)({
                            applicationId: u.applicationId,
                            channelId: t,
                            guildId: r
                        }) : await y.default.post({
                            url: m.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, u.applicationId),
                            body: {
                                session_id: d,
                                guild_id: null != r ? r : void 0
                            },
                            trackedActionData: {
                                event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                                properties: {
                                    guild_id: r,
                                    channel_id: t,
                                    application_id: u.applicationId,
                                    session_id: d
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
                        applicationId: u.applicationId,
                        error: new c.default(e)
                    }), O({
                        channelId: t,
                        applicationId: u.applicationId,
                        showFeedback: !1
                    })
                }
            }

            function O(t) {
                var e;
                let {
                    channelId: n,
                    applicationId: a,
                    showFeedback: i = !0
                } = t;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: n,
                    applicationId: a,
                    showFeedback: i
                });
                let r = E.default.getSelectedParticipantId(n),
                    d = null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                    o = N.default.getEmbeddedActivitiesForChannel(n).find(t => t.applicationId === a);
                null != o && null != d && "" !== d && r === a && u.default.selectParticipant(n, null)
            }

            function F(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e,
                    isRejoiningFromCurrentSession: n
                })
            }
            async function M() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await i.default.get({
                            url: m.Endpoints.APPLICATIONS,
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
            async function P(t, e, n) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let a = await i.default.post({
                        url: m.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
                        query: {
                            channel_id: e
                        },
                        attachments: [{
                            name: "file",
                            file: n
                        }]
                    });
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                        attachment: a.body.attachment
                    }), a.body.attachment
                } catch (t) {
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                    }), new c.default(t)
                }
            }
            let R = (t, e, n) => {
                let {
                    guildId: a
                } = n;
                (a === t || null == a && null == t) && e()
            };
            async function b(t) {
                var e, n, i, r;
                let {
                    guildId: u,
                    force: d = !1
                } = t, o = N.default.getShelfActivities(u), c = o.map(t => s.default.getApplication(t.application_id)).filter(C.isNotNullish);
                if (!d && !N.default.shouldFetchShelf(u)) {
                    if (null === (e = N.default.getShelfFetchStatus(u)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let n = new Promise(e => {
                                t = R.bind(null, u, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            a = new Promise(t => {
                                e = R.bind(null, u, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
                            });
                        await Promise.race([n, a]), null != t && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t), t = null), null != e && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e), e = null)
                    }
                    return {
                        activityConfigs: o,
                        applications: c
                    }
                }
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                        guildId: u
                    });
                    let t = void 0 !== u && "" !== u,
                        e = t ? {
                            guild_id: u
                        } : void 0,
                        d = await y.default.get({
                            url: m.Endpoints.ACTIVITY_SHELF,
                            query: e,
                            trackedActionData: {
                                event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: u
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }),
                        o = null !== (n = d.body.activities) && void 0 !== n ? n : [],
                        c = null !== (i = d.body.applications) && void 0 !== i ? i : [],
                        s = null !== (r = d.body.assets) && void 0 !== r ? r : {};
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                        guildId: u,
                        activities: o,
                        applications: c,
                        assets: s
                    }), c.length > 0 && l.default.dispatch({
                        type: "APPLICATIONS_FETCH_SUCCESS",
                        applications: c
                    }), {
                        activityConfigs: o,
                        applications: c.map(t => p.default.createFromServer(t))
                    }
                } catch (t) {
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                        guildId: u
                    }), {
                        activityConfigs: o,
                        applications: c
                    }
                }
            }
            async function U(t) {
                let {
                    activityChannelId: e,
                    invitedChannelId: n,
                    applicationId: a,
                    location: i
                } = t, l = await d.default.createInvite(e, {
                    target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: a
                }, i);
                null != A.default.getChannel(n) && o.default.sendInvite(n, l.code, i, null)
            }
            async function G(t) {
                let {
                    channelId: e,
                    applicationId: n,
                    userId: a,
                    location: i
                } = t, l = await d.default.createInvite(e, {
                    target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: n
                }, i);
                r.default.ensurePrivateChannel(a).then(t => {
                    null != A.default.getChannel(t) && o.default.sendInvite(t, l.code, i, null)
                })
            }

            function w() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function V(t) {
                let e = m.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await i.default.get({
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
        458184: function(t, e, n) {
            "use strict";

            function a(t) {}
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            })
        },
        760850: function(t, e, n) {
            "use strict";
            let a;
            n.r(e), n.d(e, {
                cleanExecutablePath: function() {
                    return I
                },
                default: function() {
                    return p
                }
            }), n("781738"), n("424973");
            var i = n("917351"),
                l = n.n(i),
                r = n("49671"),
                u = n("605250"),
                d = n("773336"),
                o = n("50885");
            let c = [];

            function s(t) {
                return t = t.toLowerCase(), (0, d.isWindows)() && (t = (t = t.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), t
            }

            function E(t) {
                null != t && "" !== t && (!(t = s(t)).endsWith("/") && (t += "/"), c.push(t))
            }

            function I(t) {
                t = s(t);
                let e = !1;
                return (c.forEach(n => {
                    !e && t.startsWith(n) && (t = t.substr(n.length), e = !0)
                }), e) ? t = t.includes("dosbox.exe") ? t.split("/").slice(-3).join("/") : t.split("/").slice(-2).join("/") : null
            }
            async function p() {
                if (null != a) return a;
                try {
                    await o.default.ensureModule("discord_game_utils"), a = await o.default.requireModule("discord_game_utils")
                } catch (t) {
                    new(0, u.default)("GamesActionCreators").error("could not load discord_game_utils", t)
                }
                if ((0, d.isWindows)()) {
                    let t = r.default.process.env;
                    E(t.LOCALAPPDATA), E(t["PROGRAMFILES(X86)"]), E(t.PROGRAMFILES), E(t.PROGRAMW6432), E(t.PROGRAMDATA), E("/games/"), E("/steamlibrary/steamapps/common/")
                }
                let t = r.default.remoteApp.getPath;
                return E(await t("home")), E(await t("appData")), E(await t("desktop")), E(await t("documents")), E(await t("downloads")), (c = l.uniq(c)).sort((t, e) => e.length - t.length), a
            }
        },
        274800: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                queueInteractionComponentState: function() {
                    return r
                },
                addQueued: function() {
                    return u
                },
                setFailed: function() {
                    return d
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("49111");

            function r(t, e, n, a) {
                i.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: t,
                    nonce: e,
                    state: n,
                    indices: a
                })
            }

            function u(t, e) {
                let {
                    data: n,
                    messageId: a,
                    onCreate: l,
                    onSuccess: r,
                    onFailure: u
                } = e;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: t,
                    messageId: a,
                    onCreate: l,
                    onSuccess: r,
                    onFailure: u
                })
            }

            function d(t, e, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: t,
                    errorMessage: n,
                    errorCode: e
                })
            }
            async function o(t, e) {
                let n = await a.default.get({
                    url: l.Endpoints.MESSAGE_INTERACTION_DATA(t, e),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let a = n.body;
                    i.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: t,
                        messageId: e,
                        interactionData: a
                    })
                }
            }
        },
        809810: function(t, e, n) {
            "use strict";
            let a, i;
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("446674"),
                r = n("913144"),
                u = n("798609"),
                d = n("42203"),
                o = n("3765");
            let c = {},
                s = {},
                E = {};

            function I(t) {
                delete c[t];
                let e = E[t];
                null != e && delete s[e], delete E[t]
            }
            class p extends l.default.Store {
                getInteraction(t) {
                    let e = s[t.id];
                    return null != e ? c[e] : null
                }
                getMessageInteractionStates() {
                    let t = {};
                    for (let [e, n] of Object.entries(c)) {
                        let a = E[e];
                        null != a && (t[a] = n.state)
                    }
                    return t
                }
                canQueueInteraction(t, e) {
                    let n = s[t];
                    return (null == n || null == c[n] || c[n].state === o.InteractionState.FAILED) && (null == c[e] || c[e].state === o.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return i
                }
                getIFrameModalKey() {
                    return a
                }
            }
            p.displayName = "InteractionStore";
            var f = new p(r.default, {
                LOGOUT: function() {
                    c = {}, s = {}, E = {}
                },
                INTERACTION_QUEUE: function(t) {
                    let {
                        nonce: e,
                        messageId: n,
                        data: a,
                        onCreate: i,
                        onCancel: l,
                        onSuccess: r,
                        onFailure: u
                    } = t;
                    null != n && (s[n] = e, E[e] = n), c[e] = {
                        state: o.InteractionState.QUEUED,
                        data: a,
                        onCreate: i,
                        onCancel: l,
                        onSuccess: r,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        interactionId: a
                    } = t;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i || i.state !== o.InteractionState.QUEUED) return !1;
                    i.state = o.InteractionState.CREATED, null === (e = i.onCreate) || void 0 === e || e.call(i, a)
                },
                INTERACTION_SUCCESS: function(t) {
                    var e;
                    let {
                        nonce: n
                    } = t;
                    if (null == n) return !1;
                    let a = c[n];
                    if (null == a) return !1;
                    null === (e = a.onSuccess) || void 0 === e || e.call(a), I(n)
                },
                INTERACTION_FAILURE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        errorCode: a,
                        errorMessage: i
                    } = t;
                    if (null == n) return !1;
                    let l = c[n];
                    if (null == l) return !1;
                    null === (e = l.onFailure) || void 0 === e || e.call(l, a, i), l.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? I(n) : c[n] = {
                        ...l,
                        state: o.InteractionState.FAILED,
                        errorCode: a,
                        errorMessage: i
                    }
                },
                MESSAGE_CREATE: function(t) {
                    let {
                        message: e
                    } = t;
                    if (null == e.nonce) return !1;
                    {
                        var n;
                        let t = c[e.nonce];
                        if (null == t) return !1;
                        null === (n = t.onSuccess) || void 0 === n || n.call(t), I(e.nonce)
                    }
                },
                CHANNEL_SELECT: function(t) {
                    let {
                        channelId: e
                    } = t, n = d.default.getChannel(e);
                    if (null == n) return !1;
                    for (let [t, e] of Object.entries(c)) e.state === o.InteractionState.FAILED && I(t)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(t) {
                    let {
                        application: e
                    } = t;
                    i = e.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    a = void 0, i = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(t) {
                    let {
                        modalKey: e
                    } = t;
                    a = e
                }
            })
        },
        3765: function(t, e, n) {
            "use strict";
            var a, i;
            n.r(e), n.d(e, {
                InteractionState: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.QUEUED = 0] = "QUEUED", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED"
        },
        752598: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getInteractionTimeoutTimestamp: function() {
                    return _
                },
                executeMessageComponentInteraction: function() {
                    return T
                },
                executePrimaryEntryPointInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return h
                },
                InteractionStatusViewState: function() {
                    return a
                },
                getInteractionStatusViewState: function() {
                    return N
                },
                canRetryInteractionData: function() {
                    return D
                }
            }), n("222007");
            var a, i, l = n("872717"),
                r = n("913144"),
                u = n("819689"),
                d = n("798609"),
                o = n("263024"),
                c = n("271938"),
                s = n("299039"),
                E = n("274800"),
                I = n("809810"),
                p = n("3765"),
                f = n("606981"),
                A = n("49111");

            function _(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : s.default.extractTimestamp(t) + 9e5
            }
            let T = async t => {
                let {
                    componentType: e,
                    messageId: n,
                    messageFlags: a,
                    customId: i,
                    indices: r,
                    applicationId: u,
                    channelId: p,
                    guildId: f,
                    localState: _
                } = t, T = s.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, T)) return;
                await o.default.unarchiveThreadIfNecessary(p), (0, E.addQueued)(T, {
                    messageId: n,
                    data: {
                        interactionType: d.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: r
                    },
                    onFailure: (t, e) => y(p, t, e)
                }), null != _ && (0, E.queueInteractionComponentState)(n, T, _, r);
                let C = {
                    type: d.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: T,
                    guild_id: f,
                    channel_id: p,
                    message_flags: a,
                    message_id: n,
                    application_id: u,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: i,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === d.ComponentType.STRING_SELECT || t.type === d.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(_)
                    }
                };
                await l.default.post({
                    url: A.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, t => {
                    h(T, p, f, t)
                })
            }, C = async t => {
                let {
                    applicationId: e,
                    channelId: n,
                    guildId: a
                } = t, i = s.default.fromTimestamp(Date.now()), r = {
                    type: d.InteractionTypes.APPLICATION_COMMAND,
                    nonce: i,
                    guild_id: a,
                    channel_id: n,
                    application_id: e,
                    session_id: c.default.getSessionId(),
                    data: {
                        type: d.ApplicationCommandType.PRIMARY_ENTRY_POINT
                    }
                };
                await l.default.post({
                    url: A.Endpoints.INTERACTIONS,
                    body: r,
                    timeout: 3e3
                }, t => {
                    h(i, n, null != a ? a : null, t)
                })
            }, y = (t, e, n) => {
                null == n && null != e && u.default.sendClydeError(t, e)
            }, h = (t, e, n, a) => {
                if (!a.ok) {
                    if (!a.hasErr) {
                        var i;
                        if (a.status >= 400 && a.status < 500 && a.body) {
                            if (a.body.code === A.AbortCodes.INVALID_FORM_BODY && a.body.errors) {
                                let i = (0, f.getFirstSkemaError)(a.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && r.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: e,
                                    guildId: n
                                }), (0, E.setFailed)(t, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, E.setFailed)(t, void 0, a.body.message);
                            return
                        }(0, E.setFailed)(t, null === (i = a.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, E.setFailed)(t)
                }
            };
            (i = a || (a = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let N = (t, e) => {
                var n;
                let a = null == e ? void 0 : e.state,
                    i = t.state === A.MessageStates.SENT && _(t.id) < Date.now();
                let l = t.state === A.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : s.default.extractTimestamp(n) + 3e3) < Date.now(),
                    r = (null == e ? void 0 : e.data.interactionType) === d.InteractionTypes.APPLICATION_COMMAND,
                    u = t.isCommandType();
                if (r && a === p.InteractionState.QUEUED || u && t.state === A.MessageStates.SENDING && null != e) return 0;
                if (r && a === p.InteractionState.CREATED || t.hasFlag(A.MessageFlags.LOADING) && !i) return 1;
                if (null != t.interaction && t.hasFlag(A.MessageFlags.LOADING) && i) return 3;
                else if (null != t.interaction && !t.hasFlag(A.MessageFlags.LOADING) && l) return 3;
                else if (u && t.state === A.MessageStates.SEND_FAILED) return 2
            };

            function D(t) {
                let e = t.options;
                for (;
                    (null == e ? void 0 : e.length) === 1 && (e[0].type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP || e[0].type === d.ApplicationCommandOptionType.SUB_COMMAND);) e = e[0].options;
                for (let t of null != e ? e : [])
                    if (t.type === d.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getFirstSkemaError: function() {
                    return i
                }
            }), n("222007");
            let a = "_errors";

            function i(t) {
                return function t(e, n) {
                    let i = e[a];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, l] of Object.entries(e))
                        if (i !== a && null != l && "object" == typeof l) return t(l, null != n ? n : i);
                    return null
                }(t, void 0)
            }
        }
    }
]);
//# sourceMappingURL=37580.ecc5d2d0fef085370975.js.map